(self.webpackChunkzzz_fms_admin=self.webpackChunkzzz_fms_admin||[]).push([[1954],{EfbZ:(v,l,a)=>{"use strict";a.d(l,{T:()=>d.formatFixedPointStr});var d=a("bzSh"),h=a.n(d)},gYvu:(v,l,a)=>{"use strict";a.d(l,{VL:()=>M,pk:()=>n,ui:()=>E});var d=a("+Ej1"),h=a.n(d),w=a("lSCD"),C=a.n(w),u=a("UB5X"),m=a.n(u),y=a("EfbZ"),T=a("pqmQ"),P=a("4Jaa"),D=a("GOkr"),f=function(e){return e===0?"Pending":e===1?"N/A":format(e)},L=function(e){if(!e||e===1)return"";var o=e-Date.now()/1e3;return o<0?'<span class="red">Overtime</span>':formatFixedPointStr(o/3600,1)+"H"},c=function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:"";return e==="Overtime"?'<span class="red">Overtime</span>':e};function O(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:"";return t===""||t.includes("@")?!1:!t.startsWith("sys")}var R=function(e,o){var r=arguments.length>2&&arguments[2]!==void 0?arguments[2]:"",g=arguments.length>3&&arguments[3]!==void 0?arguments[3]:{};if(isFunction(e)){var x=safeGet(o.$store.state,"enums.systemEnums.user_status"),i=g.operator_status===x.DISABLED;return r.includes("@")&&i?e("span",[r+" [Invalid]"]):O(r)?e("div",[e("span",[r]),e("s-popover",{attrs:{content:"This TO is processed by ASM. Other users are allowed to operate this TO, the operator name will be updated accordingly.",placement:"top",trigger:"hover",width:"320"}},[e("s-icon",{attrs:{name:"notice-circle",title:""},slot:"reference",style:"margin-left: 4px;"})])]):e("span",[r])}},E=function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:"",o=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"",r=e===""?"":"["+e+"]";return r+" "+o},M=function(e){return m()(e)?e.toLocaleString("en-US"):[void 0,null].includes(e)?"-":e},S=function(e){return e===void 0?"-":isNumber(e)?e.toLocaleString("en-US"):e},$=function(e,o){return isNumber(o)?getRenderValue(e.state,"enums.systemEnums.order_payment_method",o):"-"},F={Forward:"#1CC461",Return:"#FFB014",Unknown:"#EE4D2D"},s=function(e){var o=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"";if(!o)return"/";var r=F[o];return e("span",{class:"journey-type"},[e("span",{class:"journey-type-dot",style:{background:r}}),o])};function n(t){if(!t)return"-";if(D.G){var e=+t;return h()(e)?"-":Math.round(e).toLocaleString("TWD")}return t}},"s/7K":(v,l,a)=>{var d=a("JPst");l=d(!1),l.push([v.id,`.daily-summary-search-form[data-v-03ae3188] {
  display: inline-flex;
}
.daily-summary-search-form .label[data-v-03ae3188] {
  margin-right: 16px;
}
.order-overview-wrapper[data-v-03ae3188] {
  background-color: #fff;
  padding: 16px 0 8px 4px;
}
.order-overview-wrapper .title-wrapper[data-v-03ae3188] {
  position: relative;
  margin-bottom: 16px;
  height: 16px;
  line-height: 16px;
}
.order-overview-wrapper .title-wrapper[data-v-03ae3188]::before {
  content: ' ';
  position: absolute;
  left: -6px;
  top: 50%;
  transform: translateY(-50%);
  display: inline-block;
  height: 12px;
  width: 4px;
  background: #EE4D2D;
}
.order-overview-wrapper .title-wrapper .title[data-v-03ae3188] {
  font-size: 16px;
  color: #333333;
  line-height: 16px;
  font-weight: 500;
  margin-left: 8px;
}
.order-overview-wrapper .title-wrapper .time[data-v-03ae3188] {
  padding-left: 8px;
  font-size: 12px;
  color: #999999;
}
.order-overview-wrapper .order-overview-content[data-v-03ae3188] {
  background-color: #fff;
}
.order-overview-wrapper .order-overview-content li[data-v-03ae3188] {
  display: inline-flex;
  padding-right: 16px;
  color: #333333;
  min-width: 120px;
}
.order-overview-wrapper .order-overview-content li .title[data-v-03ae3188] {
  display: inline-block;
  line-height: 20px;
  color: #999999;
  margin: auto;
}
.order-overview-wrapper .order-overview-content li .order-count-text[data-v-03ae3188] {
  font-size: 22px;
  font-weight: 500;
  margin: 0 16px 0 8px;
}
.divide[data-v-03ae3188] {
  margin: 8px -24px;
  height: 1px;
  background: #ECF0F4;
}
ul[data-v-03ae3188] {
  padding: 0;
  margin: 0;
  list-style: none;
}
.button-base[data-v-03ae3188] {
  padding: 9px 20px;
  font-size: 14px;
  color: #FFFFFF;
}
.spx-button[data-v-03ae3188] {
  padding: 9px 20px;
  font-size: 14px;
  color: #FFFFFF;
  border-color: #FFFFFF;
  color: #555555;
}
.spx-button[data-v-03ae3188]:hover {
  background-color: #FFFFFF;
}
.spx-button-primary[data-v-03ae3188] {
  padding: 9px 20px;
  font-size: 14px;
  color: #FFFFFF;
  background-color: #EE4D2D;
  border-color: #EE4D2D;
}
.ssc-message[data-v-03ae3188] {
  top: 20px !important;
}
.sp-card > .actions[data-v-03ae3188] {
  margin-bottom: 10px;
  display: flex;
  flex-wrap: wrap;
}
.sp-card > .actions .right[data-v-03ae3188] {
  flex: 1;
  text-align: right;
  height: 40px;
}
table th[data-v-03ae3188] {
  color: rgba(0, 0, 0, 0.85);
  border-color: #EEEEEE;
  font-size: 14px;
  font-weight: 500;
}
.spx-editor .ssc-tag[data-v-03ae3188] {
  font-size: 12px;
  margin: 0px;
  padding: 0;
}
.spx-editor .ssc-tag .left-padding-span[data-v-03ae3188] {
  width: 0;
  margin: 0 0 0 8px;
}
.spx-editor .ssc-tag .right-padding-span[data-v-03ae3188] {
  width: 0;
  margin: 0 8px 0 0;
}
.spx-editor .tag-editor-span[data-v-03ae3188] {
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
.spx-editor .tag-editor-span .tag-editor-span-space[data-v-03ae3188] {
  width: 8px;
  height: 15px;
  display: inline-block;
  line-height: 22px;
}
.ssc-tabs-type-pane-card .ssc-tabs-pane[data-v-03ae3188] {
  background: #FAFAFA;
}
.check-tree[data-v-03ae3188] {
  margin-left: 80px;
}
.avatar-uploader-icon[data-v-03ae3188] {
  font-size: 28px;
  color: #8c939d;
  width: 178px;
  height: 178px;
  line-height: 178px;
  text-align: center;
}
.avatar-uploader-icon-small[data-v-03ae3188] {
  font-size: 14px !important;
  color: #8c939d;
  width: 56px !important;
  height: 56px !important;
  line-height: 56px !important;
  text-align: center;
}
.avatar-uploader-icon-middle[data-v-03ae3188] {
  font-size: 14px !important;
  color: #8c939d;
  width: 94px !important;
  height: 94px !important;
  line-height: 94px !important;
  text-align: center;
}
.avatar[data-v-03ae3188] {
  width: 178px;
  height: 178px;
  display: block;
}
.avatar-small[data-v-03ae3188] {
  width: 56px;
  height: 56px;
  display: block;
}
.avatar-middle[data-v-03ae3188] {
  width: 94px;
  height: 94px;
  display: block;
}
.acribus-sp-tabs[data-v-03ae3188] {
  padding: 16px 16px 0px;
  border-radius: 6px;
  margin-bottom: -30px;
  background-color: #fff;
}
span.red[data-v-03ae3188] {
  color: #F56C6C;
}
span.green[data-v-03ae3188] {
  color: #67C23A;
}
.sp-hooks[data-v-03ae3188] {
  overflow: hidden;
}
.text-link[data-v-03ae3188] {
  color: #409eff;
  cursor: pointer;
}
.text-warning[data-v-03ae3188] {
  color: #e80808;
}
.help-text[data-v-03ae3188] {
  cursor: help;
}
.driver-performance-flag-A[data-v-03ae3188] {
  color: #55CC77;
}
.driver-performance-flag-B[data-v-03ae3188] {
  color: #999;
}
.driver-performance-flag-C[data-v-03ae3188] {
  color: #FF4742;
}
/* [check-in rule] Google map autosuggest result container */
.pac-container[data-v-03ae3188] {
  z-index: 100000;
}
.action-link[data-v-03ae3188] {
  color: #2769f0;
  cursor: pointer;
  display: inline-block;
  margin-left: 6px;
}
.action-link[data-v-03ae3188]:first-child {
  margin-left: 0;
}
.action-link[data-v-03ae3188]:hover {
  text-decoration: underline;
}
.separate-line[data-v-03ae3188] {
  height: 0;
  width: 100%;
  border-top: 1px #E9E9E9 solid;
  margin-bottom: 16px;
}
.white-fs-ground[data-v-03ae3188] {
  padding: 24px;
  background: #fff;
  height: 100%;
}
.white-fs-ground .category-title[data-v-03ae3188] {
  font-size: 16px;
  font-weight: 500;
  line-height: 16px;
  color: #333;
  margin-top: 56px;
  margin-bottom: 16px;
}
.white-fs-ground .category-title[data-v-03ae3188]:first-child {
  margin-top: 16px;
}
.white-fs-ground .category-title[data-v-03ae3188]:before {
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
.page-table-container[data-v-03ae3188] {
  border: 1px solid #eee;
}
.form-body-center[data-v-03ae3188] {
  margin: 0 auto;
}
.form-body-left[data-v-03ae3188] {
  margin: 0;
}
.dialog-footer[data-v-03ae3188],
.footer-submit[data-v-03ae3188] {
  margin-top: 32px;
}
.dialog-footer .ssc-button[data-v-03ae3188],
.footer-submit .ssc-button[data-v-03ae3188] {
  margin-left: 16px;
}
.dialog-footer .ssc-button[data-v-03ae3188]:first-child,
.footer-submit .ssc-button[data-v-03ae3188]:first-child {
  margin-left: 0;
}
.text-center[data-v-03ae3188] {
  text-align: center;
}
.s-form-textarea .ssc-textarea[data-v-03ae3188],
.ssc-form-item .ssc-select[data-v-03ae3188],
.ssc-form-item .ssc-input-size-medium[data-v-03ae3188] {
  width: 320px;
}
.ssc-steps.is-horizontal[data-v-03ae3188] {
  width: 60%;
  margin: 23px auto;
}
.action-wrap[data-v-03ae3188] {
  display: flex;
  margin: 10px 0;
}
.action-wrap .actions[data-v-03ae3188] {
  flex: 1;
}
.action-wrap .actions .ssc-button[data-v-03ae3188] {
  margin-right: 16px;
}
.action-wrap .upload-route-log-info[data-v-03ae3188] {
  align-self: center;
  text-align: right;
  flex: 1;
}
.action-wrap .upload-route-log-info label[data-v-03ae3188] {
  margin-right: 8px;
}
.upload-log-table[data-v-03ae3188] {
  margin: 10px 0;
}
.group-route-list-info[data-v-03ae3188] {
  line-height: 40px;
}
.group-route-list-info label[data-v-03ae3188] {
  margin-right: 10px;
}
.mass-upload-input-footer[data-v-03ae3188] {
  margin-top: 32px;
}
.mass-upload-input-footer .ssc-button[data-v-03ae3188] {
  margin-right: 10px;
}
.add-range-btn[data-v-03ae3188] {
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
.add-range-btn[data-v-03ae3188]:hover {
  background: #f6f6f6;
}
.range-wrap[data-v-03ae3188] {
  padding: 16px;
}
.range-wrap .seq-tag[data-v-03ae3188] {
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
.range-wrap .icon-del[data-v-03ae3188] {
  line-height: 32px;
  width: 24px;
  height: 24px;
  cursor: pointer;
  color: #bbb;
}
.range-wrap .icon-del[data-v-03ae3188]:hover {
  color: #888;
}
.bg-fafafa[data-v-03ae3188] {
  background: #fafafa;
}
.ssc-step-main-title[data-v-03ae3188] {
  line-height: 1.5;
}
.ssc-form-item-error-tip[data-v-03ae3188] {
  white-space: nowrap;
}
.ssc-table-header .ssc-table-header-title[data-v-03ae3188] {
  height: 100%;
}
.ssc-table-header .ssc-table-header-column-container[data-v-03ae3188] {
  height: 100%;
}
.ssc-table-body .ssc-table-header-column-container .td-content[data-v-03ae3188] {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.acribus-text-ellipsis[data-v-03ae3188] {
  display: inline-block;
  width: 100%;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.station-tree-container .ssc-form-item-content[data-v-03ae3188] {
  flex-direction: column;
  position: relative;
}
.station-tree-container .ssc-form-item-content .tree[data-v-03ae3188] {
  min-width: 318px;
  display: block;
  margin-top: 20px;
}
.station-tree-container .ssc-form-item-content .tree.has-search-input[data-v-03ae3188] {
  padding-top: 40px;
}
.station-tree-container .ssc-form-item-content .tree-input[data-v-03ae3188] {
  position: absolute;
  left: 3%;
  top: 30px;
  z-index: 1;
  width: 94%;
  margin: 0 auto;
  color: #aeaeae;
}
.ssc-dropdown-menu[data-v-03ae3188] {
  min-width: 176px;
  max-width: 320px;
  z-index: 2;
}
.ssc-dropdown-menu .active[data-v-03ae3188] {
  color: #EE4D2D;
  font-weight: 500;
}
.detail-part-title[data-v-03ae3188] {
  font-size: 18px;
  color: #333333;
  font-weight: 500;
  margin-bottom: 16px;
}
.detail-part-title.additional-info[data-v-03ae3188] {
  margin-top: 56px;
}
.detail-part-title[data-v-03ae3188]::before {
  content: '';
  width: 2px;
  height: 10px;
  background: #EE4D2D;
  display: inline-block;
  margin-right: 6px;
}
.page-wrapper[data-v-03ae3188] {
  height: 100%;
}
.zone-container button:disabled:not(.btn-prev):not(.btn-next).ssc-btn-type-primary[data-v-03ae3188] {
  color: #FFF !important;
  background: #EE4D2D !important;
  opacity: 0.5;
}
.pagination-left-total[data-v-03ae3188] {
  display: flex;
  flex: 1;
}
.common-status[data-v-03ae3188] {
  line-height: 12px;
  font-weight: 500;
  padding: 3px 4px;
  border-radius: 2px;
  display: inline-block;
  white-space: nowrap;
}
.common-status.status-success[data-v-03ae3188] {
  background: #ECFFF1;
  color: #1CC461;
}
.common-status.status-disabled[data-v-03ae3188] {
  color: #646B76;
  background: #F5F6F9;
}
.common-status.status-info[data-v-03ae3188] {
  color: #3274F7;
  background: #F0F7FF;
}
.common-status.status-danger[data-v-03ae3188] {
  color: #F32345;
  background: #FFF0F0;
}
.common-status.status-warning[data-v-03ae3188] {
  background: #FFF8DB;
  color: #FFB014;
}
.common-divide[data-v-03ae3188] {
  height: 8px;
  background: #F5F6F9;
  margin: 0 -24px;
}
.ssc-scan-toast[data-v-03ae3188] {
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
.ssc-scan-toast.ssc-scan-toast-success[data-v-03ae3188] {
  animation-duration: 4.4s;
  animation-name: scanSuccessToast-03ae3188;
  background: #1CC461;
}
.ssc-scan-toast.ssc-scan-toast-fail[data-v-03ae3188] {
  background: #F32345;
  animation-duration: 8.4s;
  animation-name: scanFailToast-03ae3188;
}
.ssc-scan-toast.ssc-scan-toast-notice[data-v-03ae3188] {
  background: #FFA620;
  animation-duration: 6.4s;
  animation-name: scanFailToast-03ae3188;
}
.ssc-scan-toast .message-panel[data-v-03ae3188] {
  display: flex;
  width: 100%;
  align-items: center;
}
.ssc-scan-toast .message-panel .icon[data-v-03ae3188] {
  margin-right: 18px;
  width: 28px;
  height: 28px;
  flex-shrink: 0;
}
.ssc-scan-toast .message-panel .text[data-v-03ae3188] {
  display: inline-block;
}
@keyframes scanSuccessToast-03ae3188 {
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
@keyframes scanFailToast-03ae3188 {
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
.table-pagination[data-v-03ae3188] {
  height: 56px;
  border: 1px solid #ECF0F4;
  border-top: 0;
  justify-content: flex-end;
  padding-right: 16px;
}
.journey-type[data-v-03ae3188] {
  display: flex;
  align-items: center;
}
.journey-type .journey-type-dot[data-v-03ae3188] {
  width: 6px;
  height: 6px;
  border-radius: 50%;
  display: inline-block;
  margin-right: 8px;
}
.pagination-sticky-bottom[data-v-03ae3188] {
  background: #fff;
  position: sticky;
  bottom: 16px;
}
.pagination-sticky-bottom[data-v-03ae3188]:after {
  content: ' ';
  background: #fff;
  width: 100%;
  height: 16px;
  position: absolute;
}
.pagination-sticky-bottom[data-v-03ae3188] .ssc-pagination {
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
.pagination-sticky-bottom[data-v-03ae3188] .ssc-pagination .total-container {
  flex: 1;
  margin-left: 15px;
  margin-right: 12px;
}
.sp-card-log-list[data-v-03ae3188] {
  padding: 16px 24px;
  background: #fff;
  min-height: 100%;
}
.ssc-table-panel .ssc-form-item .ssc-form-item-content textarea[data-v-03ae3188],
.pro-filter .ssc-form-item .ssc-form-item-content textarea[data-v-03ae3188] {
  border: transparent;
}
.message-red-text[data-v-03ae3188] {
  color: #EE4D2D;
  font-weight: 700;
}
`,""]),v.exports=l},sAZC:(v,l,a)=>{"use strict";a.r(l),a.d(l,{default:()=>F});var d=function(){var n=this,t=n._self._c;return t("div",{staticClass:"page-wrapper"},[t("s-core",{directives:[{name:"show",rawName:"v-show",value:n.showDopOverviewList,expression:"showDopOverviewList"},{name:"loading",rawName:"v-loading",value:n.loading.dopList,expression:"loading.dopList"}],ref:"sCore",attrs:{config:n.config,search:n.onSearch,"table-data":n.tableData}},[n.showOrderOverview?t("div",{directives:[{name:"loading",rawName:"v-loading",value:n.loading.dopOverview,expression:"loading.dopOverview"}],staticClass:"order-overview-wrapper",attrs:{slot:"tabs"},slot:"tabs"},[t("div",{staticClass:"title-wrapper"},[t("span",{staticClass:"title"},[n._v(n._s(n.$gt("Overview")))]),t("span",{staticClass:"time"},[n._v(n._s(n.$gt("Update as of"))+" "+n._s(n.updateTime))])]),n._v(" "),t("ul",{staticClass:"order-overview-content"},n._l(n.orderOverviewSchemas,function(e){return t("li",{key:e.key},[t("div",{staticClass:"title"},[n._v(n._s(e.label)+":")]),n._v(" "),t("span",{staticClass:"order-count-text"},[n._v(n._s(n.renderOrderOverviewCount(n.orderOverviewData[e.key])))])])}),0),n._v(" "),n.showOrderOverview?t("div",{staticClass:"divide"}):n._e()]):n._e(),n._v(" "),t("span",{attrs:{slot:"custom-actions"},slot:"custom-actions"},[n.showExport?t("s-dropdown",{attrs:{placement:"bottom-start"},on:{command:n.dropdownOperations}},[t("s-button",{staticClass:"batch-actions-btn"},[n._v(`
          `+n._s(n.$gt("Export"))+`
          `),t("s-icon-chevron-down",{staticClass:"dropdown-btn-line-icon"})],1),n._v(" "),t("s-dropdown-menu",{attrs:{slot:"dropdown"},slot:"dropdown"},[t("s-dropdown-item",{attrs:{command:"exportOrder"}},[n._v(n._s(n.$gt("Export")))]),n._v(" "),t("s-dropdown-item",{attrs:{command:"showExportHistory"}},[n._v(n._s(n.$gt("Export History")))])],1)],1):n._e()],1)]),n._v(" "),n.visible.exportHistory?t("spx-shared-export-history",{attrs:{show:n.visible.exportHistory,exportType:"adminDopOverviewExportHistory"},on:{"update:show":function(o){return n.$set(n.visible,"exportHistory",o)}}}):n._e(),n._v(" "),t("router-view")],1)},h=[],w=a("jo6Y"),C=a("14Xm"),u=a.n(C),m=a("D3Ub"),y=a("QbLZ"),T=a("J/PD"),P=a.n(T),D=a("eCTY"),f=a("QsnJ"),L=a("gYvu"),c=a("pqmQ"),O=a("4Jaa");const E={data:function(){return{updateTime:"-",renderOrderOverviewCount:L.VL,intervalID:null,orderOverviewSchemas:[{label:this.$gt("Total DOP in Progress"),key:"in_progress_count"},{label:this.$gt("Total DOP Received"),key:"inbound_count"}],orderOverviewData:{},tableData:{list:[],total:0},visible:{exportHistory:!1},loading:{dopList:!1,dopOverview:!1}}},computed:(0,y.Z)({},(0,D.mapState)({userStatus:function(n){return P()(n.enums.systemEnums.user_status)}}),{showDopOverviewList:function(){var n=this.$route.meta.module;return n==="dopOverviewList"},showExport:function(){return(0,c.wD)(this.$store,"ADMIN_DOP_OVERVIEW_EXPORT")},showOrderOverview:function(){return(0,c.wD)(this.$store,"ADMIN_DOP_OVERVIEW_TOTAL")},config:function(){var n=this;return{form:[{type:"input",label:this.$gt("DOP ID"),key:"dop_id"},{type:"input",label:this.$gt("DOP Name"),key:"dop_name"},{type:"input",label:this.$gt("Company"),key:"company_name"}],table:{width:1100,actionsWidth:80,columns:[{label:this.$gt("DOP ID"),key:"dop_id"},{label:this.$gt("DOP Name"),key:"dop_name"},{label:this.$gt("Company"),key:"company_name"},{label:this.$gt("# DOP in Process"),key:"in_progress_count"},{label:this.$gt("# DOP Received"),key:"inbound_count"}],actions:[{label:this.$gt("View"),click:this.linkToDetail,hide:function(){return!(0,c.wD)(n.$store,"ADMIN_DOP_OVERVIEW_ORDER_LIST")}}]}}}}),created:function(){var n=this;this.onSearch({count:f.L8}),this.intervalID=setInterval(function(){n.loadDopOverview()},f.ml)},beforeDestroy:function(){clearInterval(this.intervalID)},methods:{exportOrder:function(){var s=(0,m.Z)(u().mark(function t(){var e;return u().wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return r.prev=0,e=this.$refs.sCore.formData,r.next=4,this.$store.dispatch("dopMgt/exportDopOverviewDopList",(0,c.Lt)(e));case 4:this.$message.success(this.$t("MSG_SUCCESS.export")),r.next=10;break;case 7:r.prev=7,r.t0=r.catch(0),console.error("export list error: ",r.t0);case 10:case"end":return r.stop()}},t,this,[[0,7]])}));function n(){return s.apply(this,arguments)}return n}(),dropdownOperations:function(n){return this[n]()},showExportHistory:function(){this.visible.exportHistory=!0},linkToDetail:function(n,t){this.$router.push("/dopOverview/list/listOrderByDop?dopId="+t.dop_id)},onSearch:function(){var s=(0,m.Z)(u().mark(function t(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},o,r,g,x,i,_,b,k,I,A,z;return u().wrap(function(p){for(;;)switch(p.prev=p.next){case 0:if(this.loadDopOverview(),p.prev=1,!this.loading.dopList){p.next=4;break}return p.abrupt("return");case 4:return(0,c.K4)(this,"dopList",!0),o=e.pageno,r=o===void 0?1:o,g=e.count,x=g===void 0?this.tableData.count||f.L8:g,e.pageno||(e.pageno=1),e.count||(e.count=f.L8),p.next=10,this.$store.dispatch("dopMgt/loadDopOverviewDopList",e);case 10:i=p.sent,_=i.data,b=_===void 0?{}:_,k=b.list,I=k===void 0?[]:k,A=b.total,z=(0,w.Z)(b,["list","total"]),this.tableData=(0,y.Z)({},z,{list:I,total:A,pageno:r,count:x}),p.next=20;break;case 17:p.prev=17,p.t0=p.catch(1),console.error("load dop list error: ",p.t0);case 20:return p.prev=20,(0,c.K4)(this,"dopList",!1),p.finish(20);case 23:case"end":return p.stop()}},t,this,[[1,17,20,23]])}));function n(){return s.apply(this,arguments)}return n}(),loadDopOverview:function(){var s=(0,m.Z)(u().mark(function t(e){var o,r,g;return u().wrap(function(i){for(;;)switch(i.prev=i.next){case 0:if(i.prev=0,!this.loading.dopOverview){i.next=3;break}return i.abrupt("return");case 3:return(0,c.K4)(this,"dopOverview",!0),i.next=6,this.$store.dispatch("dopMgt/loadDopOverview",e);case 6:o=i.sent,r=o.data,g=r===void 0?{}:r,this.orderOverviewData=g,this.updateTime=(0,O.WU)(new Date),i.next=16;break;case 13:i.prev=13,i.t0=i.catch(0),console.error("load user list error: ",i.t0);case 16:return i.prev=16,(0,c.K4)(this,"dopOverview",!1),i.finish(16);case 19:case"end":return i.stop()}},t,this,[[0,13,16,19]])}));function n(t){return s.apply(this,arguments)}return n}()}};var M=a("n/C8"),S=a("KHd+"),$=(0,S.Z)(E,d,h,!1,null,"03ae3188",null);const F=$.exports},"n/C8":(v,l,a)=>{var d=a("s/7K");typeof d=="string"&&(d=[[v.id,d,""]]),d.locals&&(v.exports=d.locals);var h=a("er8A").Z,w=h("a952e554",d,!0,{})}}]);
