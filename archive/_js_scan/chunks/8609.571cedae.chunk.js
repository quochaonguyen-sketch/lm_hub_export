(self.webpackChunkzzz_fms_admin=self.webpackChunkzzz_fms_admin||[]).push([[8609],{EfbZ:(g,u,e)=>{"use strict";e.d(u,{T:()=>d.formatFixedPointStr});var d=e("bzSh"),m=e.n(d)},gYvu:(g,u,e)=>{"use strict";e.d(u,{VL:()=>F,pk:()=>T,ui:()=>f});var d=e("+Ej1"),m=e.n(d),D=e("lSCD"),C=e.n(D),v=e("UB5X"),w=e.n(v),h=e("EfbZ"),P=e("pqmQ"),L=e("4Jaa"),O=e("GOkr"),S=function(t){return t===0?"Pending":t===1?"N/A":format(t)},M=function(t){if(!t||t===1)return"";var n=t-Date.now()/1e3;return n<0?'<span class="red">Overtime</span>':formatFixedPointStr(n/3600,1)+"H"},_=function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:"";return t==="Overtime"?'<span class="red">Overtime</span>':t};function k(){var i=arguments.length>0&&arguments[0]!==void 0?arguments[0]:"";return i===""||i.includes("@")?!1:!i.startsWith("sys")}var l=function(t,n){var a=arguments.length>2&&arguments[2]!==void 0?arguments[2]:"",r=arguments.length>3&&arguments[3]!==void 0?arguments[3]:{};if(isFunction(t)){var c=safeGet(n.$store.state,"enums.systemEnums.user_status"),s=r.operator_status===c.DISABLED;return a.includes("@")&&s?t("span",[a+" [Invalid]"]):k(a)?t("div",[t("span",[a]),t("s-popover",{attrs:{content:"This TO is processed by ASM. Other users are allowed to operate this TO, the operator name will be updated accordingly.",placement:"top",trigger:"hover",width:"320"}},[t("s-icon",{attrs:{name:"notice-circle",title:""},slot:"reference",style:"margin-left: 4px;"})])]):t("span",[a])}},f=function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:"",n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"",a=t===""?"":"["+t+"]";return a+" "+n},F=function(t){return w()(t)?t.toLocaleString("en-US"):[void 0,null].includes(t)?"-":t},N=function(t){return t===void 0?"-":isNumber(t)?t.toLocaleString("en-US"):t},$=function(t,n){return isNumber(n)?getRenderValue(t.state,"enums.systemEnums.order_payment_method",n):"-"},A={Forward:"#1CC461",Return:"#FFB014",Unknown:"#EE4D2D"},z=function(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"";if(!n)return"/";var a=A[n];return t("span",{class:"journey-type"},[t("span",{class:"journey-type-dot",style:{background:a}}),n])};function T(i){if(!i)return"-";if(O.G){var t=+i;return m()(t)?"-":Math.round(t).toLocaleString("TWD")}return i}},"7AjN":(g,u,e)=>{var d=e("JPst");u=d(!1),u.push([g.id,`.period[data-v-11d3562c] {
  width: 100%;
  display: inline-flex;
  padding-bottom: 16px;
  border-bottom: 1px solid #ECF0F4;
  margin-bottom: 16px;
}
.period span[data-v-11d3562c] {
  margin-right: 8px;
}
.daily-summary-search-form[data-v-11d3562c] {
  display: inline-flex;
}
.daily-summary-search-form .label[data-v-11d3562c] {
  margin-right: 16px;
}
.order-overview-content[data-v-11d3562c] {
  background-color: #fff;
}
.order-overview-content li[data-v-11d3562c] {
  position: relative;
  display: inline-block;
  padding-right: 16px;
  color: #333333;
  min-width: 120px;
}
.order-overview-content li .title[data-v-11d3562c] {
  color: #999999;
  margin-bottom: 8px;
}
.order-overview-content li .order-count-text[data-v-11d3562c] {
  font-size: 16px;
  font-weight: 500;
}
.custom-actions[data-v-11d3562c] {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
ul[data-v-11d3562c] {
  padding: 0;
  margin: 0;
  list-style: none;
}
.button-base[data-v-11d3562c] {
  padding: 9px 20px;
  font-size: 14px;
  color: #FFFFFF;
}
.spx-button[data-v-11d3562c] {
  padding: 9px 20px;
  font-size: 14px;
  color: #FFFFFF;
  border-color: #FFFFFF;
  color: #555555;
}
.spx-button[data-v-11d3562c]:hover {
  background-color: #FFFFFF;
}
.spx-button-primary[data-v-11d3562c] {
  padding: 9px 20px;
  font-size: 14px;
  color: #FFFFFF;
  background-color: #EE4D2D;
  border-color: #EE4D2D;
}
.ssc-message[data-v-11d3562c] {
  top: 20px !important;
}
.sp-card > .actions[data-v-11d3562c] {
  margin-bottom: 10px;
  display: flex;
  flex-wrap: wrap;
}
.sp-card > .actions .right[data-v-11d3562c] {
  flex: 1;
  text-align: right;
  height: 40px;
}
table th[data-v-11d3562c] {
  color: rgba(0, 0, 0, 0.85);
  border-color: #EEEEEE;
  font-size: 14px;
  font-weight: 500;
}
.spx-editor .ssc-tag[data-v-11d3562c] {
  font-size: 12px;
  margin: 0px;
  padding: 0;
}
.spx-editor .ssc-tag .left-padding-span[data-v-11d3562c] {
  width: 0;
  margin: 0 0 0 8px;
}
.spx-editor .ssc-tag .right-padding-span[data-v-11d3562c] {
  width: 0;
  margin: 0 8px 0 0;
}
.spx-editor .tag-editor-span[data-v-11d3562c] {
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
.spx-editor .tag-editor-span .tag-editor-span-space[data-v-11d3562c] {
  width: 8px;
  height: 15px;
  display: inline-block;
  line-height: 22px;
}
.ssc-tabs-type-pane-card .ssc-tabs-pane[data-v-11d3562c] {
  background: #FAFAFA;
}
.check-tree[data-v-11d3562c] {
  margin-left: 80px;
}
.avatar-uploader-icon[data-v-11d3562c] {
  font-size: 28px;
  color: #8c939d;
  width: 178px;
  height: 178px;
  line-height: 178px;
  text-align: center;
}
.avatar-uploader-icon-small[data-v-11d3562c] {
  font-size: 14px !important;
  color: #8c939d;
  width: 56px !important;
  height: 56px !important;
  line-height: 56px !important;
  text-align: center;
}
.avatar-uploader-icon-middle[data-v-11d3562c] {
  font-size: 14px !important;
  color: #8c939d;
  width: 94px !important;
  height: 94px !important;
  line-height: 94px !important;
  text-align: center;
}
.avatar[data-v-11d3562c] {
  width: 178px;
  height: 178px;
  display: block;
}
.avatar-small[data-v-11d3562c] {
  width: 56px;
  height: 56px;
  display: block;
}
.avatar-middle[data-v-11d3562c] {
  width: 94px;
  height: 94px;
  display: block;
}
.acribus-sp-tabs[data-v-11d3562c] {
  padding: 16px 16px 0px;
  border-radius: 6px;
  margin-bottom: -30px;
  background-color: #fff;
}
span.red[data-v-11d3562c] {
  color: #F56C6C;
}
span.green[data-v-11d3562c] {
  color: #67C23A;
}
.sp-hooks[data-v-11d3562c] {
  overflow: hidden;
}
.text-link[data-v-11d3562c] {
  color: #409eff;
  cursor: pointer;
}
.text-warning[data-v-11d3562c] {
  color: #e80808;
}
.help-text[data-v-11d3562c] {
  cursor: help;
}
.driver-performance-flag-A[data-v-11d3562c] {
  color: #55CC77;
}
.driver-performance-flag-B[data-v-11d3562c] {
  color: #999;
}
.driver-performance-flag-C[data-v-11d3562c] {
  color: #FF4742;
}
/* [check-in rule] Google map autosuggest result container */
.pac-container[data-v-11d3562c] {
  z-index: 100000;
}
.action-link[data-v-11d3562c] {
  color: #2769f0;
  cursor: pointer;
  display: inline-block;
  margin-left: 6px;
}
.action-link[data-v-11d3562c]:first-child {
  margin-left: 0;
}
.action-link[data-v-11d3562c]:hover {
  text-decoration: underline;
}
.separate-line[data-v-11d3562c] {
  height: 0;
  width: 100%;
  border-top: 1px #E9E9E9 solid;
  margin-bottom: 16px;
}
.white-fs-ground[data-v-11d3562c] {
  padding: 24px;
  background: #fff;
  height: 100%;
}
.white-fs-ground .category-title[data-v-11d3562c] {
  font-size: 16px;
  font-weight: 500;
  line-height: 16px;
  color: #333;
  margin-top: 56px;
  margin-bottom: 16px;
}
.white-fs-ground .category-title[data-v-11d3562c]:first-child {
  margin-top: 16px;
}
.white-fs-ground .category-title[data-v-11d3562c]:before {
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
.page-table-container[data-v-11d3562c] {
  border: 1px solid #eee;
}
.form-body-center[data-v-11d3562c] {
  margin: 0 auto;
}
.form-body-left[data-v-11d3562c] {
  margin: 0;
}
.dialog-footer[data-v-11d3562c],
.footer-submit[data-v-11d3562c] {
  margin-top: 32px;
}
.dialog-footer .ssc-button[data-v-11d3562c],
.footer-submit .ssc-button[data-v-11d3562c] {
  margin-left: 16px;
}
.dialog-footer .ssc-button[data-v-11d3562c]:first-child,
.footer-submit .ssc-button[data-v-11d3562c]:first-child {
  margin-left: 0;
}
.text-center[data-v-11d3562c] {
  text-align: center;
}
.s-form-textarea .ssc-textarea[data-v-11d3562c],
.ssc-form-item .ssc-select[data-v-11d3562c],
.ssc-form-item .ssc-input-size-medium[data-v-11d3562c] {
  width: 320px;
}
.ssc-steps.is-horizontal[data-v-11d3562c] {
  width: 60%;
  margin: 23px auto;
}
.action-wrap[data-v-11d3562c] {
  display: flex;
  margin: 10px 0;
}
.action-wrap .actions[data-v-11d3562c] {
  flex: 1;
}
.action-wrap .actions .ssc-button[data-v-11d3562c] {
  margin-right: 16px;
}
.action-wrap .upload-route-log-info[data-v-11d3562c] {
  align-self: center;
  text-align: right;
  flex: 1;
}
.action-wrap .upload-route-log-info label[data-v-11d3562c] {
  margin-right: 8px;
}
.upload-log-table[data-v-11d3562c] {
  margin: 10px 0;
}
.group-route-list-info[data-v-11d3562c] {
  line-height: 40px;
}
.group-route-list-info label[data-v-11d3562c] {
  margin-right: 10px;
}
.mass-upload-input-footer[data-v-11d3562c] {
  margin-top: 32px;
}
.mass-upload-input-footer .ssc-button[data-v-11d3562c] {
  margin-right: 10px;
}
.add-range-btn[data-v-11d3562c] {
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
.add-range-btn[data-v-11d3562c]:hover {
  background: #f6f6f6;
}
.range-wrap[data-v-11d3562c] {
  padding: 16px;
}
.range-wrap .seq-tag[data-v-11d3562c] {
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
.range-wrap .icon-del[data-v-11d3562c] {
  line-height: 32px;
  width: 24px;
  height: 24px;
  cursor: pointer;
  color: #bbb;
}
.range-wrap .icon-del[data-v-11d3562c]:hover {
  color: #888;
}
.bg-fafafa[data-v-11d3562c] {
  background: #fafafa;
}
.ssc-step-main-title[data-v-11d3562c] {
  line-height: 1.5;
}
.ssc-form-item-error-tip[data-v-11d3562c] {
  white-space: nowrap;
}
.ssc-table-header .ssc-table-header-title[data-v-11d3562c] {
  height: 100%;
}
.ssc-table-header .ssc-table-header-column-container[data-v-11d3562c] {
  height: 100%;
}
.ssc-table-body .ssc-table-header-column-container .td-content[data-v-11d3562c] {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.acribus-text-ellipsis[data-v-11d3562c] {
  display: inline-block;
  width: 100%;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.station-tree-container .ssc-form-item-content[data-v-11d3562c] {
  flex-direction: column;
  position: relative;
}
.station-tree-container .ssc-form-item-content .tree[data-v-11d3562c] {
  min-width: 318px;
  display: block;
  margin-top: 20px;
}
.station-tree-container .ssc-form-item-content .tree.has-search-input[data-v-11d3562c] {
  padding-top: 40px;
}
.station-tree-container .ssc-form-item-content .tree-input[data-v-11d3562c] {
  position: absolute;
  left: 3%;
  top: 30px;
  z-index: 1;
  width: 94%;
  margin: 0 auto;
  color: #aeaeae;
}
.ssc-dropdown-menu[data-v-11d3562c] {
  min-width: 176px;
  max-width: 320px;
  z-index: 2;
}
.ssc-dropdown-menu .active[data-v-11d3562c] {
  color: #EE4D2D;
  font-weight: 500;
}
.detail-part-title[data-v-11d3562c] {
  font-size: 18px;
  color: #333333;
  font-weight: 500;
  margin-bottom: 16px;
}
.detail-part-title.additional-info[data-v-11d3562c] {
  margin-top: 56px;
}
.detail-part-title[data-v-11d3562c]::before {
  content: '';
  width: 2px;
  height: 10px;
  background: #EE4D2D;
  display: inline-block;
  margin-right: 6px;
}
.page-wrapper[data-v-11d3562c] {
  height: 100%;
}
.zone-container button:disabled:not(.btn-prev):not(.btn-next).ssc-btn-type-primary[data-v-11d3562c] {
  color: #FFF !important;
  background: #EE4D2D !important;
  opacity: 0.5;
}
.pagination-left-total[data-v-11d3562c] {
  display: flex;
  flex: 1;
}
.common-status[data-v-11d3562c] {
  line-height: 12px;
  font-weight: 500;
  padding: 3px 4px;
  border-radius: 2px;
  display: inline-block;
  white-space: nowrap;
}
.common-status.status-success[data-v-11d3562c] {
  background: #ECFFF1;
  color: #1CC461;
}
.common-status.status-disabled[data-v-11d3562c] {
  color: #646B76;
  background: #F5F6F9;
}
.common-status.status-info[data-v-11d3562c] {
  color: #3274F7;
  background: #F0F7FF;
}
.common-status.status-danger[data-v-11d3562c] {
  color: #F32345;
  background: #FFF0F0;
}
.common-status.status-warning[data-v-11d3562c] {
  background: #FFF8DB;
  color: #FFB014;
}
.common-divide[data-v-11d3562c] {
  height: 8px;
  background: #F5F6F9;
  margin: 0 -24px;
}
.ssc-scan-toast[data-v-11d3562c] {
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
.ssc-scan-toast.ssc-scan-toast-success[data-v-11d3562c] {
  animation-duration: 4.4s;
  animation-name: scanSuccessToast-11d3562c;
  background: #1CC461;
}
.ssc-scan-toast.ssc-scan-toast-fail[data-v-11d3562c] {
  background: #F32345;
  animation-duration: 8.4s;
  animation-name: scanFailToast-11d3562c;
}
.ssc-scan-toast.ssc-scan-toast-notice[data-v-11d3562c] {
  background: #FFA620;
  animation-duration: 6.4s;
  animation-name: scanFailToast-11d3562c;
}
.ssc-scan-toast .message-panel[data-v-11d3562c] {
  display: flex;
  width: 100%;
  align-items: center;
}
.ssc-scan-toast .message-panel .icon[data-v-11d3562c] {
  margin-right: 18px;
  width: 28px;
  height: 28px;
  flex-shrink: 0;
}
.ssc-scan-toast .message-panel .text[data-v-11d3562c] {
  display: inline-block;
}
@keyframes scanSuccessToast-11d3562c {
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
@keyframes scanFailToast-11d3562c {
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
.table-pagination[data-v-11d3562c] {
  height: 56px;
  border: 1px solid #ECF0F4;
  border-top: 0;
  justify-content: flex-end;
  padding-right: 16px;
}
.journey-type[data-v-11d3562c] {
  display: flex;
  align-items: center;
}
.journey-type .journey-type-dot[data-v-11d3562c] {
  width: 6px;
  height: 6px;
  border-radius: 50%;
  display: inline-block;
  margin-right: 8px;
}
.pagination-sticky-bottom[data-v-11d3562c] {
  background: #fff;
  position: sticky;
  bottom: 16px;
}
.pagination-sticky-bottom[data-v-11d3562c]:after {
  content: ' ';
  background: #fff;
  width: 100%;
  height: 16px;
  position: absolute;
}
.pagination-sticky-bottom[data-v-11d3562c] .ssc-pagination {
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
.pagination-sticky-bottom[data-v-11d3562c] .ssc-pagination .total-container {
  flex: 1;
  margin-left: 15px;
  margin-right: 12px;
}
.sp-card-log-list[data-v-11d3562c] {
  padding: 16px 24px;
  background: #fff;
  min-height: 100%;
}
.ssc-table-panel .ssc-form-item .ssc-form-item-content textarea[data-v-11d3562c],
.pro-filter .ssc-form-item .ssc-form-item-content textarea[data-v-11d3562c] {
  border: transparent;
}
.message-red-text[data-v-11d3562c] {
  color: #EE4D2D;
  font-weight: 700;
}
`,""]),g.exports=u},"DNZ+":(g,u,e)=>{"use strict";e.r(u),e.d(u,{default:()=>i});var d=function(){var n=this,a=n._self._c;return a("div",{staticClass:"page-wrapper"},[a("s-core",{directives:[{name:"show",rawName:"v-show",value:n.showDopReportsList,expression:"showDopReportsList"},{name:"loading",rawName:"v-loading",value:n.loading.dopList,expression:"loading.dopList"}],ref:"sCore",attrs:{config:n.config,search:n.onSearch,"table-data":n.tableData},on:{resetAllFilter:n.onResetAllFilter}},[a("div",{staticClass:"period",attrs:{slot:"page-info"},slot:"page-info"},[a("span",[n._v(n._s(n.$gt("Period")))]),n._v(" "),a("s-date-picker",{attrs:{type:"daterange",placeholder:n.$gt("Select Date"),"default-time":["00:00:00","23:59:59"]},model:{value:n.periodTime,callback:function(c){n.periodTime=c},expression:"periodTime"}})],1),n._v(" "),a("span",{staticClass:"custom-actions",attrs:{slot:"custom-actions"},slot:"custom-actions"},[n.showDopOverview?a("ul",{directives:[{name:"loading",rawName:"v-loading",value:n.loading.dopOverview,expression:"loading.dopOverview"}],staticClass:"order-overview-content"},n._l(n.orderOverviewSchemas,function(r){return a("li",{key:r.key},[a("span",{staticClass:"title"},[n._v(n._s(r.label)+":")]),n._v(" "),a("span",{staticClass:"order-count-text"},[n._v(n._s(n.renderOrderOverviewCount(n.orderOverviewData[r.key])))])])}),0):n._e(),n._v(" "),n.showExportBtn?a("s-dropdown",{attrs:{placement:"bottom-start"},on:{command:n.dropdownOperations}},[a("s-button",{staticStyle:{"margin-right":"0"}},[n._v(`
          `+n._s(n.$gt("Export"))+`
          `),a("s-icon-chevron-down",{staticClass:"dropdown-btn-line-icon"})],1),n._v(" "),a("s-dropdown-menu",{attrs:{slot:"dropdown"},slot:"dropdown"},[a("s-dropdown-item",{attrs:{command:"exportOrder"}},[n._v(n._s(n.$gt("Export")))]),n._v(" "),a("s-dropdown-item",{attrs:{command:"showExportHistory"}},[n._v(n._s(n.$gt("Export History"))+" ")])],1)],1):n._e()],1)]),n._v(" "),n.visible.exportHistory?a("spx-shared-export-history",{attrs:{show:n.visible.exportHistory,exportType:"adminDopReportsExportHistory"},on:{"update:show":function(c){return n.$set(n.visible,"exportHistory",c)}}}):n._e(),n._v(" "),a("router-view")],1)},m=[],D=e("jo6Y"),C=e("14Xm"),v=e.n(C),w=e("D3Ub"),h=e("QbLZ"),P=e("3XQO"),L=e.n(P),O=e("J/PD"),S=e.n(O),M=e("eCTY"),_=e("QsnJ"),k=e("gYvu"),l=e("pqmQ"),f=e("4Jaa"),F=function(){var n=L()();return[n.startOf("day").toDate(),n.endOf("day").toDate()]};const $={data:function(){return{renderOrderOverviewCount:k.VL,periodTime:F(),orderOverviewSchemas:[{label:this.$gt("Total Inbounded"),key:"inbound_count"},{label:this.$gt("Total Outbounded"),key:"outbound_count"}],orderOverviewData:{},tableData:{list:[],total:0},visible:{exportHistory:!1},loading:{dopList:!1,dopOverview:!1}}},computed:(0,h.Z)({},(0,M.mapState)({userStatus:function(n){return S()(n.enums.systemEnums.user_status)},statusSelectOptions:function(n){return(0,l.jw)(n.enums.systemEnums.user_flag)}}),{showDopOverview:function(){return(0,l.wD)(this.$store,"ADMIN_DOP_ORDER_REPORT_SUMMARY")},showExportBtn:function(){return(0,l.wD)(this.$store,"ADMIN_DOP_ORDER_REPORT_EXPORT")},showDopReportsList:function(){var n=this.$route.meta.module;return n==="dopReportsList"},config:function(){var n=this;return{form:[{type:"input",label:this.$gt("DOP ID"),key:"dop_id"},{type:"input",label:this.$gt("DOP Name"),key:"dop_name"},{type:"input",label:this.$gt("Company"),key:"company_name"}],table:{width:1100,actionsWidth:80,columns:[{label:this.$gt("DOP ID"),key:"dop_id",width:80},{label:this.$gt("DOP Name"),key:"dop_name"},{label:this.$gt("Company"),key:"company_name"},{label:this.$gt("Inbounded"),key:"inbound_count"},{label:this.$gt("Outbounded"),key:"outbound_count"}],actions:[{label:this.$gt("View"),click:this.linkToDetail,hide:function(){return!(0,l.wD)(n.$store,"ADMIN_DOP_ORDER_REPORT_ORDER_LIST")}}]}}}}),watch:{periodTime:function(n){n&&this.refreshPage()}},created:function(){this.onSearch()},methods:{onResetAllFilter:function(){this.periodTime=F()},exportOrder:function(){var t=(0,w.Z)(v().mark(function a(){var r;return v().wrap(function(s){for(;;)switch(s.prev=s.next){case 0:return s.prev=0,r=this.$refs.sCore.formData,s.next=4,this.$store.dispatch("dopMgt/exportDopReportsOverviewDopList",(0,l.Lt)((0,h.Z)({},r,{period_time:(0,f.N_)(this.periodTime)})));case 4:this.$message.success(this.$t("MSG_SUCCESS.export")),s.next=10;break;case 7:s.prev=7,s.t0=s.catch(0),console.error("export error: ",s.t0);case 10:case"end":return s.stop()}},a,this,[[0,7]])}));function n(){return t.apply(this,arguments)}return n}(),dropdownOperations:function(n){return this[n]()},showExportHistory:function(){this.visible.exportHistory=!0},linkToDetail:function(n){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};this.$router.push("/dopReports/list/listOrderByDop?dopId="+a.dop_id+"&periodTime="+(0,f.N_)(this.periodTime))},onSearch:function(){var t=(0,w.Z)(v().mark(function a(){var r=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},c,s,x,b,y,E,o,R,I,j,B;return v().wrap(function(p){for(;;)switch(p.prev=p.next){case 0:if(this.loadDopOverview(),p.prev=1,!this.loading.dopList){p.next=4;break}return p.abrupt("return");case 4:return(0,l.K4)(this,"dopList",!0),c=r.pageno,s=c===void 0?1:c,x=r.count,b=x===void 0?this.tableData.count||_.L8:x,r.pageno||(r.pageno=1),r.count||(r.count=_.L8),p.next=10,this.$store.dispatch("dopMgt/loadDopReportsOverviewDopList",(0,l.Lt)((0,h.Z)({},r,{period_time:(0,f.N_)(this.periodTime)})));case 10:y=p.sent,E=y.data,o=E===void 0?{}:E,R=o.list,I=R===void 0?[]:R,j=o.total,B=(0,D.Z)(o,["list","total"]),this.tableData=(0,h.Z)({},B,{list:I,total:j,pageno:s,count:b}),p.next=20;break;case 17:p.prev=17,p.t0=p.catch(1),console.error("load dop list error: ",p.t0);case 20:return p.prev=20,(0,l.K4)(this,"dopList",!1),p.finish(20);case 23:case"end":return p.stop()}},a,this,[[1,17,20,23]])}));function n(){return t.apply(this,arguments)}return n}(),loadDopOverview:function(){var t=(0,w.Z)(v().mark(function a(){var r,c,s,x,b,y;return v().wrap(function(o){for(;;)switch(o.prev=o.next){case 0:if(o.prev=0,!this.loading.dopOverview){o.next=3;break}return o.abrupt("return");case 3:return(0,l.K4)(this,"dopOverview",!0),r=this.$refs.sCore||{},c=r.formData,s=c===void 0?{}:c,o.next=7,this.$store.dispatch("dopMgt/loadDopReportsOverview",(0,l.Lt)((0,h.Z)({},s,{period_time:(0,f.N_)(this.periodTime)})));case 7:x=o.sent,b=x.data,y=b===void 0?{}:b,this.orderOverviewData=y,o.next=16;break;case 13:o.prev=13,o.t0=o.catch(0),console.error("load dop overview list error: ",o.t0);case 16:return o.prev=16,(0,l.K4)(this,"dopOverview",!1),o.finish(16);case 19:case"end":return o.stop()}},a,this,[[0,13,16,19]])}));function n(){return t.apply(this,arguments)}return n}(),refreshPage:function(){this.$refs.sCore.refreshList()}}};var A=e("211u"),z=e("KHd+"),T=(0,z.Z)($,d,m,!1,null,"11d3562c",null);const i=T.exports},"211u":(g,u,e)=>{var d=e("7AjN");typeof d=="string"&&(d=[[g.id,d,""]]),d.locals&&(g.exports=d.locals);var m=e("er8A").Z,D=m("245416b1",d,!0,{})}}]);
