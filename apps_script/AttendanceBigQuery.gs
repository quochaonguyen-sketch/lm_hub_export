/**
 * BigQuery attendance_daily -> a dedicated Google Sheets tab.
 * Enable the advanced BigQuery service before running exportAttendanceFromBigQuery.
 * The function replaces the contents of SHEET_NAME only after the full query succeeds.
 */
const ATTENDANCE_BQ = {
  PROJECT_ID: 'YOUR_PROJECT_ID',
  DATASET_ID: 'spx_attendance',
  TABLE_ID: 'attendance_daily',
  LOCATION: '', // Dataset location, e.g. asia-southeast1; blank lets BigQuery infer it.
  SPREADSHEET_ID: 'YOUR_SPREADSHEET_ID',
  SHEET_NAME: 'BigQuery Attendance',
  DAYS: 1 // 1 = yesterday; 30 = the last 30 completed days.
};

function exportAttendanceFromBigQuery() {
  const config = ATTENDANCE_BQ;
  if (config.PROJECT_ID === 'YOUR_PROJECT_ID' ||
      config.SPREADSHEET_ID === 'YOUR_SPREADSHEET_ID') {
    throw new Error('Điền PROJECT_ID và SPREADSHEET_ID trước khi chạy.');
  }
  if (!Number.isInteger(config.DAYS) || config.DAYS < 1) {
    throw new Error('DAYS phải là số nguyên dương.');
  }
  const identifiers = [config.PROJECT_ID, config.DATASET_ID, config.TABLE_ID];
  if (!identifiers.every(value => /^[a-zA-Z0-9_-]+$/.test(value))) {
    throw new Error('PROJECT_ID / DATASET_ID / TABLE_ID không hợp lệ.');
  }
  const lock = LockService.getScriptLock();
  if (!lock.tryLock(1000)) {
    throw new Error('Một lượt xuất khác đang chạy.');
  }
  try {
    const query = `
      SELECT *
      FROM \`${config.PROJECT_ID}.${config.DATASET_ID}.${config.TABLE_ID}\`
      WHERE date >= DATE_SUB(CURRENT_DATE('Asia/Ho_Chi_Minh'), INTERVAL @days DAY)
        AND date < CURRENT_DATE('Asia/Ho_Chi_Minh')
      ORDER BY date, station_id
    `;
    const result = attendanceQueryAllPages_(config, query);
    const headers = result.fields.map(field => field.name);
    const values = result.rows.map(row => row.f.map((cell, index) => {
      if (cell.v === null || cell.v === undefined) return '';
      const type = result.fields[index].type;
      if (['INTEGER', 'INT64', 'FLOAT', 'FLOAT64', 'NUMERIC'].includes(type)) {
        const value = Number(cell.v);
        if (!Number.isFinite(value)) throw new Error('Giá trị số không hợp lệ: ' + cell.v);
        return value;
      }
      return String(cell.v);
    }));
    if (!headers.length) throw new Error('BigQuery không trả schema.');
    const spreadsheet = SpreadsheetApp.openById(config.SPREADSHEET_ID);
    const sheet = spreadsheet.getSheetByName(config.SHEET_NAME) ||
      spreadsheet.insertSheet(config.SHEET_NAME);
    const data = [headers, ...values];
    if (sheet.getMaxRows() < data.length) {
      sheet.insertRowsAfter(sheet.getMaxRows(), data.length - sheet.getMaxRows());
    }
    if (sheet.getMaxColumns() < headers.length) {
      sheet.insertColumnsAfter(sheet.getMaxColumns(), headers.length - sheet.getMaxColumns());
    }
    sheet.clearContents();
    sheet.getRange(1, 1, data.length, headers.length).setValues(data);
    sheet.setFrozenRows(1);
    console.log(`Đã xuất ${values.length} dòng sang tab ${config.SHEET_NAME}.`);
    return values.length;
  } finally {
    lock.releaseLock();
  }
}

function attendanceQueryAllPages_(config, query) {
  const deadline = Date.now() + 240000;
  const request = {
    query,
    useLegacySql: false,
    timeoutMs: 10000,
    maxResults: 1000,
    parameterMode: 'NAMED',
    queryParameters: [{
      name: 'days',
      parameterType: {type: 'INT64'},
      parameterValue: {value: String(config.DAYS)}
    }]
  };
  if (config.LOCATION) request.location = config.LOCATION;
  let page = BigQuery.Jobs.query(request, config.PROJECT_ID);
  const reference = page.jobReference;
  if (!reference || !reference.jobId) throw new Error('BigQuery không trả jobId.');
  const options = {maxResults: 1000, timeoutMs: 1000};
  const location = reference.location || config.LOCATION;
  if (location) options.location = location;
  function checkDeadline() {
    if (Date.now() >= deadline) {
      throw new Error('Truy vấn quá 4 phút. Giảm DAYS; dữ liệu Sheet chưa bị thay thế.');
    }
  }
  while (!page.jobComplete) {
    checkDeadline();
    Utilities.sleep(500);
    page = BigQuery.Jobs.getQueryResults(config.PROJECT_ID, reference.jobId, options);
  }
  if (page.errors && page.errors.length) throw new Error(JSON.stringify(page.errors));
  const fields = page.schema ? page.schema.fields : [];
  const rows = [];
  while (true) {
    checkDeadline();
    if (page.errors && page.errors.length) throw new Error(JSON.stringify(page.errors));
    rows.push(...(page.rows || []));
    if (!page.pageToken) break;
    page = BigQuery.Jobs.getQueryResults(config.PROJECT_ID, reference.jobId,
      Object.assign({}, options, {pageToken: page.pageToken}));
  }
  return {fields, rows};
}
