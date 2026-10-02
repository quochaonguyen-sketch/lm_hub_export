(self.webpackChunkzzz_fms_admin=self.webpackChunkzzz_fms_admin||[]).push([[2151],{"8iVs":(h,g,t)=>{"use strict";t.d(g,{Z:()=>C});var r=t("Ke0q"),x=t("EA14"),l="/api/admin/pickup/report";function y(){return(0,r.Rx)()==="admin"?"admin":"station"}const C={confirmExportOrder:function(p){var u=y();return x.Z.get(l+"/call_log/"+u+"/pickup/export",{params:p})},loadCallLogDetailViewList:function(p){var u=y();return x.Z.get(l+"/call_log/"+u+"/pickup/task/contact/detail",{params:p})},loadCallLogDriverCountDetail:function(p){var u=y();return x.Z.get(l+"/call_log/"+u+"/pickup/driver/task/event/count/detail",{params:p})},loadCallLogDriverCountList:function(p){var u=y();return x.Z.get(l+"/call_log/"+u+"/pickup/driver/task/event/count/list",{params:p})},loadCallLogDriverNonEventList:function(p){var u=y();return x.Z.get(l+"/call_log/"+u+"/pickup/driver/task/non_event/list",{params:p})}}},fYrY:(h,g,t)=>{var r=t("JPst");g=r(!1),g.push([h.id,`.daily-call-log-report-wrapper[data-v-6e3bc1e5] {
  background: #fff;
  padding: 0 8px;
  height: 100%;
}
.daily-call-log-report-wrapper .tabs[data-v-6e3bc1e5] {
  padding: 0 16px;
}
ul[data-v-6e3bc1e5] {
  padding: 0;
  margin: 0;
  list-style: none;
}
.button-base[data-v-6e3bc1e5] {
  padding: 9px 20px;
  font-size: 14px;
  color: #FFFFFF;
}
.spx-button[data-v-6e3bc1e5] {
  padding: 9px 20px;
  font-size: 14px;
  color: #FFFFFF;
  border-color: #FFFFFF;
  color: #555555;
}
.spx-button[data-v-6e3bc1e5]:hover {
  background-color: #FFFFFF;
}
.spx-button-primary[data-v-6e3bc1e5] {
  padding: 9px 20px;
  font-size: 14px;
  color: #FFFFFF;
  background-color: #EE4D2D;
  border-color: #EE4D2D;
}
.ssc-message[data-v-6e3bc1e5] {
  top: 20px !important;
}
.sp-card > .actions[data-v-6e3bc1e5] {
  margin-bottom: 10px;
  display: flex;
  flex-wrap: wrap;
}
.sp-card > .actions .right[data-v-6e3bc1e5] {
  flex: 1;
  text-align: right;
  height: 40px;
}
table th[data-v-6e3bc1e5] {
  color: rgba(0, 0, 0, 0.85);
  border-color: #EEEEEE;
  font-size: 14px;
  font-weight: 500;
}
.spx-editor .ssc-tag[data-v-6e3bc1e5] {
  font-size: 12px;
  margin: 0px;
  padding: 0;
}
.spx-editor .ssc-tag .left-padding-span[data-v-6e3bc1e5] {
  width: 0;
  margin: 0 0 0 8px;
}
.spx-editor .ssc-tag .right-padding-span[data-v-6e3bc1e5] {
  width: 0;
  margin: 0 8px 0 0;
}
.spx-editor .tag-editor-span[data-v-6e3bc1e5] {
  font-size: 12px;
  border-radius: 2px;
  background: #F6F6F6;
  border: 1px solid #E5E5E5;
  box-sizing: border-box;
  height: 24px;
  line-height: 22px;
  margin-right: 2px;
  display: inline-flex;
  margin-bottom: 4px;
}
.spx-editor .tag-editor-span .tag-editor-span-space[data-v-6e3bc1e5] {
  width: 8px;
  height: 15px;
  display: inline-block;
  line-height: 22px;
}
.ssc-tabs-type-pane-card .ssc-tabs-pane[data-v-6e3bc1e5] {
  background: #FAFAFA;
}
.check-tree[data-v-6e3bc1e5] {
  margin-left: 80px;
}
.avatar-uploader-icon[data-v-6e3bc1e5] {
  font-size: 28px;
  color: #8c939d;
  width: 178px;
  height: 178px;
  line-height: 178px;
  text-align: center;
}
.avatar-uploader-icon-small[data-v-6e3bc1e5] {
  font-size: 14px !important;
  color: #8c939d;
  width: 56px !important;
  height: 56px !important;
  line-height: 56px !important;
  text-align: center;
}
.avatar-uploader-icon-middle[data-v-6e3bc1e5] {
  font-size: 14px !important;
  color: #8c939d;
  width: 94px !important;
  height: 94px !important;
  line-height: 94px !important;
  text-align: center;
}
.avatar[data-v-6e3bc1e5] {
  width: 178px;
  height: 178px;
  display: block;
}
.avatar-small[data-v-6e3bc1e5] {
  width: 56px;
  height: 56px;
  display: block;
}
.avatar-middle[data-v-6e3bc1e5] {
  width: 94px;
  height: 94px;
  display: block;
}
.acribus-sp-tabs[data-v-6e3bc1e5] {
  padding: 16px 16px 0px;
  border-radius: 6px;
  margin-bottom: -30px;
  background-color: #fff;
}
span.red[data-v-6e3bc1e5] {
  color: #F56C6C;
}
span.green[data-v-6e3bc1e5] {
  color: #67C23A;
}
.sp-hooks[data-v-6e3bc1e5] {
  overflow: hidden;
}
.text-link[data-v-6e3bc1e5] {
  color: #409eff;
  cursor: pointer;
}
.text-warning[data-v-6e3bc1e5] {
  color: #e80808;
}
.help-text[data-v-6e3bc1e5] {
  cursor: help;
}
.driver-performance-flag-A[data-v-6e3bc1e5] {
  color: #55CC77;
}
.driver-performance-flag-B[data-v-6e3bc1e5] {
  color: #999;
}
.driver-performance-flag-C[data-v-6e3bc1e5] {
  color: #FF4742;
}
/* [check-in rule] Google map autosuggest result container */
.pac-container[data-v-6e3bc1e5] {
  z-index: 100000;
}
.action-link[data-v-6e3bc1e5] {
  color: #2769f0;
  cursor: pointer;
  display: inline-block;
  margin-left: 6px;
}
.action-link[data-v-6e3bc1e5]:first-child {
  margin-left: 0;
}
.action-link[data-v-6e3bc1e5]:hover {
  text-decoration: underline;
}
.separate-line[data-v-6e3bc1e5] {
  height: 0;
  width: 100%;
  border-top: 1px #E9E9E9 solid;
  margin-bottom: 16px;
}
.white-fs-ground[data-v-6e3bc1e5] {
  padding: 24px;
  background: #fff;
  height: 100%;
}
.white-fs-ground .category-title[data-v-6e3bc1e5] {
  font-size: 16px;
  font-weight: 500;
  line-height: 16px;
  color: #333;
  margin-top: 56px;
  margin-bottom: 16px;
}
.white-fs-ground .category-title[data-v-6e3bc1e5]:first-child {
  margin-top: 16px;
}
.white-fs-ground .category-title[data-v-6e3bc1e5]:before {
  display: inline-block;
  content: '';
  position: relative;
  bottom: 2px;
  width: 2px;
  height: 8px;
  background: #EE4D2D;
  line-height: 16px;
  margin-right: 6px;
}
.page-table-container[data-v-6e3bc1e5] {
  border: 1px solid #eee;
}
.form-body-center[data-v-6e3bc1e5] {
  margin: 0 auto;
}
.form-body-left[data-v-6e3bc1e5] {
  margin: 0;
}
.dialog-footer[data-v-6e3bc1e5],
.footer-submit[data-v-6e3bc1e5] {
  margin-top: 32px;
}
.dialog-footer .ssc-button[data-v-6e3bc1e5],
.footer-submit .ssc-button[data-v-6e3bc1e5] {
  margin-left: 16px;
}
.dialog-footer .ssc-button[data-v-6e3bc1e5]:first-child,
.footer-submit .ssc-button[data-v-6e3bc1e5]:first-child {
  margin-left: 0;
}
.text-center[data-v-6e3bc1e5] {
  text-align: center;
}
.s-form-textarea .ssc-textarea[data-v-6e3bc1e5],
.ssc-form-item .ssc-select[data-v-6e3bc1e5],
.ssc-form-item .ssc-input-size-medium[data-v-6e3bc1e5] {
  width: 320px;
}
.ssc-steps.is-horizontal[data-v-6e3bc1e5] {
  width: 60%;
  margin: 23px auto;
}
.action-wrap[data-v-6e3bc1e5] {
  display: flex;
  margin: 10px 0;
}
.action-wrap .actions[data-v-6e3bc1e5] {
  flex: 1;
}
.action-wrap .actions .ssc-button[data-v-6e3bc1e5] {
  margin-right: 16px;
}
.action-wrap .upload-route-log-info[data-v-6e3bc1e5] {
  align-self: center;
  text-align: right;
  flex: 1;
}
.action-wrap .upload-route-log-info label[data-v-6e3bc1e5] {
  margin-right: 8px;
}
.upload-log-table[data-v-6e3bc1e5] {
  margin: 10px 0;
}
.group-route-list-info[data-v-6e3bc1e5] {
  line-height: 40px;
}
.group-route-list-info label[data-v-6e3bc1e5] {
  margin-right: 10px;
}
.mass-upload-input-footer[data-v-6e3bc1e5] {
  margin-top: 32px;
}
.mass-upload-input-footer .ssc-button[data-v-6e3bc1e5] {
  margin-right: 10px;
}
.add-range-btn[data-v-6e3bc1e5] {
  width: 100%;
  height: 40px;
  line-height: 40px;
  margin: 0 auto;
  background: #FAFAFA;
  border: 1px dashed #D8D8D8;
  border-radius: 4px;
  text-align: center;
  color: #2673dd;
  cursor: pointer;
}
.add-range-btn[data-v-6e3bc1e5]:hover {
  background: #f6f6f6;
}
.range-wrap[data-v-6e3bc1e5] {
  padding: 16px;
}
.range-wrap .seq-tag[data-v-6e3bc1e5] {
  display: inline-block;
  line-height: 24px;
  width: 24px;
  height: 24px;
  border-radius: 24px;
  font-size: 14px;
  color: #2673DD;
  background: #E7EEFB;
  text-align: center;
  margin-right: 8px;
  margin-top: 4px;
}
.range-wrap .icon-del[data-v-6e3bc1e5] {
  line-height: 32px;
  width: 24px;
  height: 24px;
  cursor: pointer;
  color: #bbb;
}
.range-wrap .icon-del[data-v-6e3bc1e5]:hover {
  color: #888;
}
.bg-fafafa[data-v-6e3bc1e5] {
  background: #fafafa;
}
.ssc-step-main-title[data-v-6e3bc1e5] {
  line-height: 1.5;
}
.ssc-form-item-error-tip[data-v-6e3bc1e5] {
  white-space: nowrap;
}
.ssc-table-header .ssc-table-header-title[data-v-6e3bc1e5] {
  height: 100%;
}
.ssc-table-header .ssc-table-header-column-container[data-v-6e3bc1e5] {
  height: 100%;
}
.ssc-table-body .ssc-table-header-column-container .td-content[data-v-6e3bc1e5] {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.acribus-text-ellipsis[data-v-6e3bc1e5] {
  display: inline-block;
  width: 100%;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.station-tree-container .ssc-form-item-content[data-v-6e3bc1e5] {
  flex-direction: column;
  position: relative;
}
.station-tree-container .ssc-form-item-content .tree[data-v-6e3bc1e5] {
  min-width: 318px;
  display: block;
  margin-top: 20px;
}
.station-tree-container .ssc-form-item-content .tree.has-search-input[data-v-6e3bc1e5] {
  padding-top: 40px;
}
.station-tree-container .ssc-form-item-content .tree-input[data-v-6e3bc1e5] {
  position: absolute;
  left: 3%;
  top: 30px;
  z-index: 1;
  width: 94%;
  margin: 0 auto;
  color: #aeaeae;
}
.ssc-dropdown-menu[data-v-6e3bc1e5] {
  min-width: 176px;
  max-width: 320px;
  z-index: 2;
}
.ssc-dropdown-menu .active[data-v-6e3bc1e5] {
  color: #EE4D2D;
  font-weight: 500;
}
.detail-part-title[data-v-6e3bc1e5] {
  font-size: 18px;
  color: #333333;
  font-weight: 500;
  margin-bottom: 16px;
}
.detail-part-title.additional-info[data-v-6e3bc1e5] {
  margin-top: 56px;
}
.detail-part-title[data-v-6e3bc1e5]::before {
  content: '';
  width: 2px;
  height: 10px;
  background: #EE4D2D;
  display: inline-block;
  margin-right: 6px;
}
.page-wrapper[data-v-6e3bc1e5] {
  height: 100%;
}
.zone-container button:disabled:not(.btn-prev):not(.btn-next).ssc-btn-type-primary[data-v-6e3bc1e5] {
  color: #FFF !important;
  background: #EE4D2D !important;
  opacity: 0.5;
}
.pagination-left-total[data-v-6e3bc1e5] {
  display: flex;
  flex: 1;
}
.common-status[data-v-6e3bc1e5] {
  line-height: 12px;
  font-weight: 500;
  padding: 3px 4px;
  border-radius: 2px;
  display: inline-block;
  white-space: nowrap;
}
.common-status.status-success[data-v-6e3bc1e5] {
  background: #ECFFF1;
  color: #1CC461;
}
.common-status.status-disabled[data-v-6e3bc1e5] {
  color: #646B76;
  background: #F5F6F9;
}
.common-status.status-info[data-v-6e3bc1e5] {
  color: #3274F7;
  background: #F0F7FF;
}
.common-status.status-danger[data-v-6e3bc1e5] {
  color: #F32345;
  background: #FFF0F0;
}
.common-status.status-warning[data-v-6e3bc1e5] {
  background: #FFF8DB;
  color: #FFB014;
}
.common-divide[data-v-6e3bc1e5] {
  height: 8px;
  background: #F5F6F9;
  margin: 0 -24px;
}
.ssc-scan-toast[data-v-6e3bc1e5] {
  width: calc(100% - 256px);
  top: 0px !important;
  max-width: unset;
  left: calc(50% + 128px);
  font-size: 28px;
  font-weight: 500;
  line-height: 33px;
  opacity: 0;
  transition: none;
  top: 0;
  border: none;
  padding: 18px 26px;
  border-radius: 0;
  color: #FFFFFF;
  z-index: 99999 !important;
}
.ssc-scan-toast.ssc-scan-toast-success[data-v-6e3bc1e5] {
  animation-duration: 4.4s;
  animation-name: scanSuccessToast-6e3bc1e5;
  background: #1CC461;
}
.ssc-scan-toast.ssc-scan-toast-fail[data-v-6e3bc1e5] {
  background: #F32345;
  animation-duration: 8.4s;
  animation-name: scanFailToast-6e3bc1e5;
}
.ssc-scan-toast.ssc-scan-toast-notice[data-v-6e3bc1e5] {
  background: #FFA620;
  animation-duration: 6.4s;
  animation-name: scanFailToast-6e3bc1e5;
}
.ssc-scan-toast .message-panel[data-v-6e3bc1e5] {
  display: flex;
  width: 100%;
  align-items: center;
}
.ssc-scan-toast .message-panel .icon[data-v-6e3bc1e5] {
  margin-right: 18px;
  width: 28px;
  height: 28px;
  flex-shrink: 0;
}
.ssc-scan-toast .message-panel .text[data-v-6e3bc1e5] {
  display: inline-block;
}
@keyframes scanSuccessToast-6e3bc1e5 {
0% {
    opacity: 0;
}
8% {
    opacity: 1;
}
28% {
    opacity: 1;
}
100% {
    opacity: 0;
}
}
@keyframes scanFailToast-6e3bc1e5 {
0% {
    opacity: 0;
}
4.8% {
    opacity: 1;
}
64% {
    opacity: 1;
}
100% {
    opacity: 0;
}
}
.table-pagination[data-v-6e3bc1e5] {
  height: 56px;
  border: 1px solid #ECF0F4;
  border-top: 0;
  justify-content: flex-end;
  padding-right: 16px;
}
.journey-type[data-v-6e3bc1e5] {
  display: flex;
  align-items: center;
}
.journey-type .journey-type-dot[data-v-6e3bc1e5] {
  width: 6px;
  height: 6px;
  border-radius: 50%;
  display: inline-block;
  margin-right: 8px;
}
.pagination-sticky-bottom[data-v-6e3bc1e5] {
  background: #fff;
  position: sticky;
  bottom: 16px;
}
.pagination-sticky-bottom[data-v-6e3bc1e5]:after {
  content: ' ';
  background: #fff;
  width: 100%;
  height: 16px;
  position: absolute;
}
.pagination-sticky-bottom[data-v-6e3bc1e5] .ssc-pagination {
  width: 100%;
  min-height: 56px;
  background-color: #fff;
  border: 1px solid #ECF0F4;
  border-radius: 0 0 4px 4px;
  border-top: none;
  box-shadow: 0 -15px 15px -15px rgba(0, 0, 0, 0.2);
  padding-right: 15px;
  justify-content: flex-end;
}
.pagination-sticky-bottom[data-v-6e3bc1e5] .ssc-pagination .total-container {
  flex: 1;
  margin-left: 15px;
  margin-right: 12px;
}
.sp-card-log-list[data-v-6e3bc1e5] {
  padding: 16px 24px;
  background: #fff;
  min-height: 100%;
}
.ssc-table-panel .ssc-form-item .ssc-form-item-content textarea[data-v-6e3bc1e5],
.pro-filter .ssc-form-item .ssc-form-item-content textarea[data-v-6e3bc1e5] {
  border: transparent;
}
.message-red-text[data-v-6e3bc1e5] {
  color: #EE4D2D;
  font-weight: 700;
}
`,""]),h.exports=g},Ohdf:(h,g,t)=>{var r=t("JPst");g=r(!1),g.push([h.id,`button[data-v-6dcd048e] {
  margin: 0 16px 16px 0;
}
ul[data-v-6dcd048e] {
  padding: 0;
  margin: 0;
  list-style: none;
}
.button-base[data-v-6dcd048e] {
  padding: 9px 20px;
  font-size: 14px;
  color: #FFFFFF;
}
.spx-button[data-v-6dcd048e] {
  padding: 9px 20px;
  font-size: 14px;
  color: #FFFFFF;
  border-color: #FFFFFF;
  color: #555555;
}
.spx-button[data-v-6dcd048e]:hover {
  background-color: #FFFFFF;
}
.spx-button-primary[data-v-6dcd048e] {
  padding: 9px 20px;
  font-size: 14px;
  color: #FFFFFF;
  background-color: #EE4D2D;
  border-color: #EE4D2D;
}
.ssc-message[data-v-6dcd048e] {
  top: 20px !important;
}
.sp-card > .actions[data-v-6dcd048e] {
  margin-bottom: 10px;
  display: flex;
  flex-wrap: wrap;
}
.sp-card > .actions .right[data-v-6dcd048e] {
  flex: 1;
  text-align: right;
  height: 40px;
}
table th[data-v-6dcd048e] {
  color: rgba(0, 0, 0, 0.85);
  border-color: #EEEEEE;
  font-size: 14px;
  font-weight: 500;
}
.spx-editor .ssc-tag[data-v-6dcd048e] {
  font-size: 12px;
  margin: 0px;
  padding: 0;
}
.spx-editor .ssc-tag .left-padding-span[data-v-6dcd048e] {
  width: 0;
  margin: 0 0 0 8px;
}
.spx-editor .ssc-tag .right-padding-span[data-v-6dcd048e] {
  width: 0;
  margin: 0 8px 0 0;
}
.spx-editor .tag-editor-span[data-v-6dcd048e] {
  font-size: 12px;
  border-radius: 2px;
  background: #F6F6F6;
  border: 1px solid #E5E5E5;
  box-sizing: border-box;
  height: 24px;
  line-height: 22px;
  margin-right: 2px;
  display: inline-flex;
  margin-bottom: 4px;
}
.spx-editor .tag-editor-span .tag-editor-span-space[data-v-6dcd048e] {
  width: 8px;
  height: 15px;
  display: inline-block;
  line-height: 22px;
}
.ssc-tabs-type-pane-card .ssc-tabs-pane[data-v-6dcd048e] {
  background: #FAFAFA;
}
.check-tree[data-v-6dcd048e] {
  margin-left: 80px;
}
.avatar-uploader-icon[data-v-6dcd048e] {
  font-size: 28px;
  color: #8c939d;
  width: 178px;
  height: 178px;
  line-height: 178px;
  text-align: center;
}
.avatar-uploader-icon-small[data-v-6dcd048e] {
  font-size: 14px !important;
  color: #8c939d;
  width: 56px !important;
  height: 56px !important;
  line-height: 56px !important;
  text-align: center;
}
.avatar-uploader-icon-middle[data-v-6dcd048e] {
  font-size: 14px !important;
  color: #8c939d;
  width: 94px !important;
  height: 94px !important;
  line-height: 94px !important;
  text-align: center;
}
.avatar[data-v-6dcd048e] {
  width: 178px;
  height: 178px;
  display: block;
}
.avatar-small[data-v-6dcd048e] {
  width: 56px;
  height: 56px;
  display: block;
}
.avatar-middle[data-v-6dcd048e] {
  width: 94px;
  height: 94px;
  display: block;
}
.acribus-sp-tabs[data-v-6dcd048e] {
  padding: 16px 16px 0px;
  border-radius: 6px;
  margin-bottom: -30px;
  background-color: #fff;
}
span.red[data-v-6dcd048e] {
  color: #F56C6C;
}
span.green[data-v-6dcd048e] {
  color: #67C23A;
}
.sp-hooks[data-v-6dcd048e] {
  overflow: hidden;
}
.text-link[data-v-6dcd048e] {
  color: #409eff;
  cursor: pointer;
}
.text-warning[data-v-6dcd048e] {
  color: #e80808;
}
.help-text[data-v-6dcd048e] {
  cursor: help;
}
.driver-performance-flag-A[data-v-6dcd048e] {
  color: #55CC77;
}
.driver-performance-flag-B[data-v-6dcd048e] {
  color: #999;
}
.driver-performance-flag-C[data-v-6dcd048e] {
  color: #FF4742;
}
/* [check-in rule] Google map autosuggest result container */
.pac-container[data-v-6dcd048e] {
  z-index: 100000;
}
.action-link[data-v-6dcd048e] {
  color: #2769f0;
  cursor: pointer;
  display: inline-block;
  margin-left: 6px;
}
.action-link[data-v-6dcd048e]:first-child {
  margin-left: 0;
}
.action-link[data-v-6dcd048e]:hover {
  text-decoration: underline;
}
.separate-line[data-v-6dcd048e] {
  height: 0;
  width: 100%;
  border-top: 1px #E9E9E9 solid;
  margin-bottom: 16px;
}
.white-fs-ground[data-v-6dcd048e] {
  padding: 24px;
  background: #fff;
  height: 100%;
}
.white-fs-ground .category-title[data-v-6dcd048e] {
  font-size: 16px;
  font-weight: 500;
  line-height: 16px;
  color: #333;
  margin-top: 56px;
  margin-bottom: 16px;
}
.white-fs-ground .category-title[data-v-6dcd048e]:first-child {
  margin-top: 16px;
}
.white-fs-ground .category-title[data-v-6dcd048e]:before {
  display: inline-block;
  content: '';
  position: relative;
  bottom: 2px;
  width: 2px;
  height: 8px;
  background: #EE4D2D;
  line-height: 16px;
  margin-right: 6px;
}
.page-table-container[data-v-6dcd048e] {
  border: 1px solid #eee;
}
.form-body-center[data-v-6dcd048e] {
  margin: 0 auto;
}
.form-body-left[data-v-6dcd048e] {
  margin: 0;
}
.dialog-footer[data-v-6dcd048e],
.footer-submit[data-v-6dcd048e] {
  margin-top: 32px;
}
.dialog-footer .ssc-button[data-v-6dcd048e],
.footer-submit .ssc-button[data-v-6dcd048e] {
  margin-left: 16px;
}
.dialog-footer .ssc-button[data-v-6dcd048e]:first-child,
.footer-submit .ssc-button[data-v-6dcd048e]:first-child {
  margin-left: 0;
}
.text-center[data-v-6dcd048e] {
  text-align: center;
}
.s-form-textarea .ssc-textarea[data-v-6dcd048e],
.ssc-form-item .ssc-select[data-v-6dcd048e],
.ssc-form-item .ssc-input-size-medium[data-v-6dcd048e] {
  width: 320px;
}
.ssc-steps.is-horizontal[data-v-6dcd048e] {
  width: 60%;
  margin: 23px auto;
}
.action-wrap[data-v-6dcd048e] {
  display: flex;
  margin: 10px 0;
}
.action-wrap .actions[data-v-6dcd048e] {
  flex: 1;
}
.action-wrap .actions .ssc-button[data-v-6dcd048e] {
  margin-right: 16px;
}
.action-wrap .upload-route-log-info[data-v-6dcd048e] {
  align-self: center;
  text-align: right;
  flex: 1;
}
.action-wrap .upload-route-log-info label[data-v-6dcd048e] {
  margin-right: 8px;
}
.upload-log-table[data-v-6dcd048e] {
  margin: 10px 0;
}
.group-route-list-info[data-v-6dcd048e] {
  line-height: 40px;
}
.group-route-list-info label[data-v-6dcd048e] {
  margin-right: 10px;
}
.mass-upload-input-footer[data-v-6dcd048e] {
  margin-top: 32px;
}
.mass-upload-input-footer .ssc-button[data-v-6dcd048e] {
  margin-right: 10px;
}
.add-range-btn[data-v-6dcd048e] {
  width: 100%;
  height: 40px;
  line-height: 40px;
  margin: 0 auto;
  background: #FAFAFA;
  border: 1px dashed #D8D8D8;
  border-radius: 4px;
  text-align: center;
  color: #2673dd;
  cursor: pointer;
}
.add-range-btn[data-v-6dcd048e]:hover {
  background: #f6f6f6;
}
.range-wrap[data-v-6dcd048e] {
  padding: 16px;
}
.range-wrap .seq-tag[data-v-6dcd048e] {
  display: inline-block;
  line-height: 24px;
  width: 24px;
  height: 24px;
  border-radius: 24px;
  font-size: 14px;
  color: #2673DD;
  background: #E7EEFB;
  text-align: center;
  margin-right: 8px;
  margin-top: 4px;
}
.range-wrap .icon-del[data-v-6dcd048e] {
  line-height: 32px;
  width: 24px;
  height: 24px;
  cursor: pointer;
  color: #bbb;
}
.range-wrap .icon-del[data-v-6dcd048e]:hover {
  color: #888;
}
.bg-fafafa[data-v-6dcd048e] {
  background: #fafafa;
}
.ssc-step-main-title[data-v-6dcd048e] {
  line-height: 1.5;
}
.ssc-form-item-error-tip[data-v-6dcd048e] {
  white-space: nowrap;
}
.ssc-table-header .ssc-table-header-title[data-v-6dcd048e] {
  height: 100%;
}
.ssc-table-header .ssc-table-header-column-container[data-v-6dcd048e] {
  height: 100%;
}
.ssc-table-body .ssc-table-header-column-container .td-content[data-v-6dcd048e] {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.acribus-text-ellipsis[data-v-6dcd048e] {
  display: inline-block;
  width: 100%;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.station-tree-container .ssc-form-item-content[data-v-6dcd048e] {
  flex-direction: column;
  position: relative;
}
.station-tree-container .ssc-form-item-content .tree[data-v-6dcd048e] {
  min-width: 318px;
  display: block;
  margin-top: 20px;
}
.station-tree-container .ssc-form-item-content .tree.has-search-input[data-v-6dcd048e] {
  padding-top: 40px;
}
.station-tree-container .ssc-form-item-content .tree-input[data-v-6dcd048e] {
  position: absolute;
  left: 3%;
  top: 30px;
  z-index: 1;
  width: 94%;
  margin: 0 auto;
  color: #aeaeae;
}
.ssc-dropdown-menu[data-v-6dcd048e] {
  min-width: 176px;
  max-width: 320px;
  z-index: 2;
}
.ssc-dropdown-menu .active[data-v-6dcd048e] {
  color: #EE4D2D;
  font-weight: 500;
}
.detail-part-title[data-v-6dcd048e] {
  font-size: 18px;
  color: #333333;
  font-weight: 500;
  margin-bottom: 16px;
}
.detail-part-title.additional-info[data-v-6dcd048e] {
  margin-top: 56px;
}
.detail-part-title[data-v-6dcd048e]::before {
  content: '';
  width: 2px;
  height: 10px;
  background: #EE4D2D;
  display: inline-block;
  margin-right: 6px;
}
.page-wrapper[data-v-6dcd048e] {
  height: 100%;
}
.zone-container button:disabled:not(.btn-prev):not(.btn-next).ssc-btn-type-primary[data-v-6dcd048e] {
  color: #FFF !important;
  background: #EE4D2D !important;
  opacity: 0.5;
}
.pagination-left-total[data-v-6dcd048e] {
  display: flex;
  flex: 1;
}
.common-status[data-v-6dcd048e] {
  line-height: 12px;
  font-weight: 500;
  padding: 3px 4px;
  border-radius: 2px;
  display: inline-block;
  white-space: nowrap;
}
.common-status.status-success[data-v-6dcd048e] {
  background: #ECFFF1;
  color: #1CC461;
}
.common-status.status-disabled[data-v-6dcd048e] {
  color: #646B76;
  background: #F5F6F9;
}
.common-status.status-info[data-v-6dcd048e] {
  color: #3274F7;
  background: #F0F7FF;
}
.common-status.status-danger[data-v-6dcd048e] {
  color: #F32345;
  background: #FFF0F0;
}
.common-status.status-warning[data-v-6dcd048e] {
  background: #FFF8DB;
  color: #FFB014;
}
.common-divide[data-v-6dcd048e] {
  height: 8px;
  background: #F5F6F9;
  margin: 0 -24px;
}
.ssc-scan-toast[data-v-6dcd048e] {
  width: calc(100% - 256px);
  top: 0px !important;
  max-width: unset;
  left: calc(50% + 128px);
  font-size: 28px;
  font-weight: 500;
  line-height: 33px;
  opacity: 0;
  transition: none;
  top: 0;
  border: none;
  padding: 18px 26px;
  border-radius: 0;
  color: #FFFFFF;
  z-index: 99999 !important;
}
.ssc-scan-toast.ssc-scan-toast-success[data-v-6dcd048e] {
  animation-duration: 4.4s;
  animation-name: scanSuccessToast-6dcd048e;
  background: #1CC461;
}
.ssc-scan-toast.ssc-scan-toast-fail[data-v-6dcd048e] {
  background: #F32345;
  animation-duration: 8.4s;
  animation-name: scanFailToast-6dcd048e;
}
.ssc-scan-toast.ssc-scan-toast-notice[data-v-6dcd048e] {
  background: #FFA620;
  animation-duration: 6.4s;
  animation-name: scanFailToast-6dcd048e;
}
.ssc-scan-toast .message-panel[data-v-6dcd048e] {
  display: flex;
  width: 100%;
  align-items: center;
}
.ssc-scan-toast .message-panel .icon[data-v-6dcd048e] {
  margin-right: 18px;
  width: 28px;
  height: 28px;
  flex-shrink: 0;
}
.ssc-scan-toast .message-panel .text[data-v-6dcd048e] {
  display: inline-block;
}
@keyframes scanSuccessToast-6dcd048e {
0% {
    opacity: 0;
}
8% {
    opacity: 1;
}
28% {
    opacity: 1;
}
100% {
    opacity: 0;
}
}
@keyframes scanFailToast-6dcd048e {
0% {
    opacity: 0;
}
4.8% {
    opacity: 1;
}
64% {
    opacity: 1;
}
100% {
    opacity: 0;
}
}
.table-pagination[data-v-6dcd048e] {
  height: 56px;
  border: 1px solid #ECF0F4;
  border-top: 0;
  justify-content: flex-end;
  padding-right: 16px;
}
.journey-type[data-v-6dcd048e] {
  display: flex;
  align-items: center;
}
.journey-type .journey-type-dot[data-v-6dcd048e] {
  width: 6px;
  height: 6px;
  border-radius: 50%;
  display: inline-block;
  margin-right: 8px;
}
.pagination-sticky-bottom[data-v-6dcd048e] {
  background: #fff;
  position: sticky;
  bottom: 16px;
}
.pagination-sticky-bottom[data-v-6dcd048e]:after {
  content: ' ';
  background: #fff;
  width: 100%;
  height: 16px;
  position: absolute;
}
.pagination-sticky-bottom[data-v-6dcd048e] .ssc-pagination {
  width: 100%;
  min-height: 56px;
  background-color: #fff;
  border: 1px solid #ECF0F4;
  border-radius: 0 0 4px 4px;
  border-top: none;
  box-shadow: 0 -15px 15px -15px rgba(0, 0, 0, 0.2);
  padding-right: 15px;
  justify-content: flex-end;
}
.pagination-sticky-bottom[data-v-6dcd048e] .ssc-pagination .total-container {
  flex: 1;
  margin-left: 15px;
  margin-right: 12px;
}
.sp-card-log-list[data-v-6dcd048e] {
  padding: 16px 24px;
  background: #fff;
  min-height: 100%;
}
.ssc-table-panel .ssc-form-item .ssc-form-item-content textarea[data-v-6dcd048e],
.pro-filter .ssc-form-item .ssc-form-item-content textarea[data-v-6dcd048e] {
  border: transparent;
}
.message-red-text[data-v-6dcd048e] {
  color: #EE4D2D;
  font-weight: 700;
}
`,""]),h.exports=g},"6Ane":(h,g,t)=>{"use strict";t.r(g),t.d(g,{default:()=>V});var r=function(){var n=this,a=n._self._c;return a("div",{staticClass:"daily-call-log-report-wrapper"},[n.isShowTabs?[a("s-tabs",{staticClass:"tabs",attrs:{type:"line"},on:{"tab-click":n.handleClickTab},model:{value:n.activeTab,callback:function(o){n.activeTab=o},expression:"activeTab"}},[a("s-tabs-pane",{attrs:{name:"pickUp",label:n.$gt("PickUp")}})],1)]:n._e(),n._v(" "),n.isShowTabs&&n.activeTab==="pickUp"||n.isOnlyPickUp?a("PickUpReport"):n._e()],2)},x=[],l=t("Ke0q"),y=function(){var n=this,a=n._self._c;return a("div",[a("s-core",{directives:[{name:"loading",rawName:"v-loading",value:n.loading.list,expression:"loading.list"}],ref:"sCore",attrs:{config:n.config,search:n.loadCallLogInfo,"table-data":n.tableData},on:{resetAllFilter:n.resetAllFilter}}),n._v(" "),!n.hideExport&&n.exportHistoryShow?a("spx-shared-export-history",{attrs:{useBaseDownloadMethod:!0,show:n.exportHistoryShow,params:{station:n.stationType},exportType:"loadPickUpExportHistory"},on:{"update:show":function(o){n.exportHistoryShow=o}}}):n._e()],1)},C=[],F=t("14Xm"),p=t.n(F),u=t("D3Ub"),U=t("m1cH"),k=t("QbLZ"),I=t("sEfC"),Z=t.n(I),T=t("eCTY"),M=t("P1FD"),P=t("8iVs"),z=t("KVpu"),A=t("QsnJ"),D=t("pqmQ");function O(e,n){if(!n)return e;for(var a=e.split(""),i=a.length-1;i>=0;){var o=Number(a[i])+1;if(o<10){a[i]=String(o);break}else a[i]=String(o-10),i--}return i<0?"1"+a.join(""):a.join("")}function j(e,n){if(e===void 0||n===void 0)throw"plz input correct parameters";if(typeof e!="number")throw"plz pass a number instead";var a=String(e),i=a.split("."),o="",s=i[0];if(i.length>1&&(o=i[i.length-1]||""),o.length<=n)o+="0".repeat(n-o.length);else{var b=o.substr(0,n),v=Number(o[n]),m=O(b,v>=5);m.length>b.length?(o=m.substr(1),s=O(s,!0)):o=m}return o?s+"."+o:s}var R={admin:{exportPermission:"ADMIN_CALL_LOG_COUNT_REPORT_EXPORT",viewDetailPermission:"ADMIN_CALL_LOG_COUNT_REPORT_LIST"},fm_hub:{exportPermission:"FMHUB_CALL_LOG_COUNT_REPORT_EXPORT",viewDetailPermission:"FMHUB_CALL_LOG_COUNT_REPORT_LIST"},dc:{exportPermission:"DC_CALL_LOG_COUNT_REPORT_EXPORT",viewDetailPermission:"DC_CALL_LOG_COUNT_REPORT_LIST"},am_hub:{exportPermission:"AM_HUB_CALL_LOG_COUNT_REPORT_EXPORT",viewDetailPermission:"AM_HUB_CALL_LOG_COUNT_REPORT_LIST"}},S=new Date;const B={data:function(){var n=(0,l.n1)().toLowerCase();return n=["admin","am_hub","dc"].includes(n)?n:"fm_hub",{dataList:[],exportFrom:{},currentDriverId:"",exportListVisible:!1,loading:{list:!1},driverList:[],driverLoading:!1,pager:{pageno:1,count:10},total:0,exportLoading:!1,exportHistoryShow:!1,stationType:n,tableData:{list:[],total:0}}},computed:(0,k.Z)({},(0,T.mapState)({stationList:function(n){var a=[].concat((0,U.Z)(n.user.currentLoginUser.station_list));return(0,D.Ni)(a)}}),(0,T.mapGetters)({hasPermission:"hasPermission"}),{stationOptionList:function(){return(this.stationList||[]).map(function(n){return(0,k.Z)({},n,{label:n.station_name,value:n.id})})},defaultDate:function(){return[S.toISOString().slice(0,10),S.toISOString().slice(0,10)]},tableColumns:function(){var n=this;return[{label:this.$gt("Daily Report(According to assigned date)"),key:"assigned_date_range",width:100,filter:{type:"daterange",format:"yyyy-MM-dd",valueFormat:"yyyy-MM-dd"},defaultValue:this.defaultDate,hideInTable:!0},{label:this.$gt("Select data in the report"),key:"station_id_list",width:120,filter:{type:"select",options:this.stationOptionList,multiple:!0,multipleTagsLine:1,placeholder:this.$gt("Please Select"),clear:this.handleClearStationChange,change:this.handleStationChange},hideInTable:!0,hide:!(0,l.GJ)()},{label:this.$gt("Driver"),key:"driver_id_list",width:120,filter:{type:"select",options:this.driverList,multiple:!0,useVirtual:!0,multipleTagsLine:1,filterable:!0,remote:!0,remoteMethod:Z()(function(a){a&&n.loadDriverList(a)},A.ut)},loading:this.driverLoading,hideInTable:!0},{label:this.$gt("Driver ID"),key:"driver_id",width:120},{label:this.$gt("Driver Name"),key:"driver_name",width:120},{label:this.$gt("Station"),key:"station",width:120,hide:!(0,l.GJ)()},{label:this.$gt("Call"),key:"call_num",width:120},{label:this.$gt("Message"),key:"message_num",width:120},{label:this.$gt("3rd Party App"),key:"3rd_party_app_num",width:120,headerTips:this.$gt("the number is only the number of times that rider clicks the button, we cannot track the actions inside the 3rd party app.")},{label:this.$gt("No Action"),key:"no_action",width:120},{label:this.$gt("Total Sellers"),key:"total_sellers",width:120},{label:this.$gt("Non-Contact Rate"),key:"non_contact_rate",width:120,render:function(i){return i.non_contact_rate?j(i.non_contact_rate*100,2)+"%":0}}]},config:function(){return{btns:[{type:"primary",label:this.$gt("Export"),hide:this.hideExport,click:this.handleExport,loading:this.exportLoading},{label:this.$gt("Download History"),hide:this.hideExport,click:this.handleDownloadHistory}],table:{width:1500,showTotal:!0,actionsWidth:120,columns:this.tableColumns,actions:this.actions,pageSizes:[10,24,50,100],pageSize:10}}},actions:function(){return this.hasPermission(R[this.stationType].viewDetailPermission)?[{label:this.$gt("View"),type:"text",click:this.handleViewClick}]:[]},hideExport:function(){return!this.hasPermission(R[this.stationType].exportPermission)}}),mounted:function(){this.loadCallLogInfo({assigned_date_range:this.defaultDate}),this.loadDriverList()},methods:{resetAllFilter:function(){if(this.$refs.sCore){var n=this.$refs.sCore.formData;this.$refs.sCore.formData=(0,k.Z)({},n||{},{assigned_date_range:this.defaultDate})}},handleClearStationChange:function(){(this.$refs.sCore.formData||{}).station_id_list=[],this.handleStationChange()},handleStationChange:function(){(this.$refs.sCore.formData||{}).driver_id_list=[],this.loadDriverList()},loadDriverList:function(){var e=(0,u.Z)(p().mark(function a(){var i=arguments.length>0&&arguments[0]!==void 0?arguments[0]:"",o,s,b,v,m,d;return p().wrap(function(c){for(;;)switch(c.prev=c.next){case 0:return c.prev=0,this.driverLoading=!0,o=this.$refs.sCore.formData||{},s=o.station_id_list,b={function_type_list:2,driver_name:i},s&&s.length>0&&(b.function_station_id_list=s.join(",")),c.next=8,M.Z.loadDriverList(b);case 8:v=c.sent,m=v.data,d=m===void 0?{}:m,this.driverList=(d.list||[]).map(function(w){return{label:"["+w.driver_id+"] "+w.driver_name,value:w.driver_id}}),c.next=17;break;case 14:c.prev=14,c.t0=c.catch(0),console.error("load driver-dropdown-list error");case 17:return c.prev=17,this.driverLoading=!1,c.finish(17);case 20:case"end":return c.stop()}},a,this,[[0,14,17,20]])}));function n(){return e.apply(this,arguments)}return n}(),loadCallLogInfo:function(){var e=(0,u.Z)(p().mark(function a(){var i=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},o,s,b,v,m,d,_,c,w,E,L;return p().wrap(function(f){for(;;)switch(f.prev=f.next){case 0:return f.prev=0,(0,D.K4)(this,"list",!0),o=i.count,s=o===void 0?10:o,b=i.pageno,v=b===void 0?1:b,m=i.assigned_date_range,d=i.station_id_list,_=i.driver_id_list,this.pager.pageno=v,this.pager.count=s,c=(0,k.Z)({},this.pager,{assigned_date_range:m}),(d||[]).length>0&&(c.station_id_list=d),(_||[]).length>0&&(c.driver_id_list=_),f.next=10,P.Z.loadCallLogDriverCountList((0,z.wG)(c));case 10:w=f.sent,E=w.data,L=E===void 0?{}:E,this.tableData.list=L.list||[],this.tableData.total=L.total||0,f.next=19;break;case 16:f.prev=16,f.t0=f.catch(0),console.error("load daily-call-log-report list error");case 19:return f.prev=19,(0,D.K4)(this,"list",!1),f.finish(19);case 22:case"end":return f.stop()}},a,this,[[0,16,19,22]])}));function n(){return e.apply(this,arguments)}return n}(),handleDownloadHistory:function(){this.exportHistoryShow=!0},setVisible:function(n,a){this[n]=!!a},handleExport:function(){this.exportData()},handleViewClick:function(n,a){var i=this.$refs.sCore.formData||{};this.$router.push({path:"dailyCallLogDetailForPickup",query:{driver_id:a.driver_id,assigned_date_range:i.assigned_date_range.join(",")}})},exportData:function(){var e=(0,u.Z)(p().mark(function a(){var i,o,s,b,v;return p().wrap(function(d){for(;;)switch(d.prev=d.next){case 0:return d.prev=0,this.exportLoading=!0,i=this.$refs.sCore.formData||{},o=i.station_id_list,s=i.driver_id_list,b=i.assigned_date_range,v={assigned_date_range:b},o&&o.length>0&&(v.station_id_list=o),s&&s.length>0&&(v.driver_id_list=s),d.next=9,P.Z.confirmExportOrder((0,z.wG)(v));case 9:this.$message.success("Export "+A.Lz.base),d.next=15;break;case 12:d.prev=12,d.t0=d.catch(0),console.error("export order list error: ",d.t0);case 15:return d.prev=15,this.exportLoading=!1,d.finish(15);case 18:case"end":return d.stop()}},a,this,[[0,12,15,18]])}));function n(){return e.apply(this,arguments)}return n}()}};var X=t("a1Yg"),$=t("KHd+"),G=(0,$.Z)(B,y,C,!1,null,"6dcd048e",null);const N={components:{PickUpReport:G.exports},data:function(){var n=(0,l.Yb)()||(0,l.Di)();return{isShowTabs:(0,l.GJ)()||(0,l.lI)(),isOnlyDelivery:(0,l.Ae)(),isOnlyPickUp:n,activeTab:"pickUp"}},created:function(){this.isShowTabs&&this.$route.query.activeTab&&(this.activeTab="pickUp")},methods:{handleClickTab:function(n){n==="pickUp"?this.$router.push({path:this.$route.path,query:{activeTab:n}}):this.$router.push(this.$route.path)}}};var Q=t("Qn3X"),H=(0,$.Z)(N,r,x,!1,null,"6e3bc1e5",null);const V=H.exports},Qn3X:(h,g,t)=>{var r=t("fYrY");typeof r=="string"&&(r=[[h.id,r,""]]),r.locals&&(h.exports=r.locals);var x=t("er8A").Z,l=x("7e635920",r,!0,{})},a1Yg:(h,g,t)=>{var r=t("Ohdf");typeof r=="string"&&(r=[[h.id,r,""]]),r.locals&&(h.exports=r.locals);var x=t("er8A").Z,l=x("49f57188",r,!0,{})}}]);
