(self.webpackChunkzzz_fms_admin=self.webpackChunkzzz_fms_admin||[]).push([[5108],{EfbZ:(v,f,e)=>{"use strict";e.d(f,{T:()=>p.formatFixedPointStr});var p=e("bzSh"),b=e.n(p)},gYvu:(v,f,e)=>{"use strict";e.d(f,{VL:()=>k,pk:()=>o,ui:()=>D});var p=e("+Ej1"),b=e.n(p),F=e("lSCD"),T=e.n(F),g=e("UB5X"),x=e.n(g),E=e("EfbZ"),P=e("pqmQ"),w=e("4Jaa"),O=e("GOkr"),u=function(t){return t===0?"Pending":t===1?"N/A":format(t)},h=function(t){if(!t||t===1)return"";var s=t-Date.now()/1e3;return s<0?'<span class="red">Overtime</span>':formatFixedPointStr(s/3600,1)+"H"},A=function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:"";return t==="Overtime"?'<span class="red">Overtime</span>':t};function _(){var a=arguments.length>0&&arguments[0]!==void 0?arguments[0]:"";return a===""||a.includes("@")?!1:!a.startsWith("sys")}var $=function(t,s){var i=arguments.length>2&&arguments[2]!==void 0?arguments[2]:"",d=arguments.length>3&&arguments[3]!==void 0?arguments[3]:{};if(isFunction(t)){var y=safeGet(s.$store.state,"enums.systemEnums.user_status"),m=d.operator_status===y.DISABLED;return i.includes("@")&&m?t("span",[i+" [Invalid]"]):_(i)?t("div",[t("span",[i]),t("s-popover",{attrs:{content:"This TO is processed by ASM. Other users are allowed to operate this TO, the operator name will be updated accordingly.",placement:"top",trigger:"hover",width:"320"}},[t("s-icon",{attrs:{name:"notice-circle",title:""},slot:"reference",style:"margin-left: 4px;"})])]):t("span",[i])}},D=function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:"",s=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"",i=t===""?"":"["+t+"]";return i+" "+s},k=function(t){return x()(t)?t.toLocaleString("en-US"):[void 0,null].includes(t)?"-":t},L=function(t){return t===void 0?"-":isNumber(t)?t.toLocaleString("en-US"):t},c=function(t,s){return isNumber(s)?getRenderValue(t.state,"enums.systemEnums.order_payment_method",s):"-"},n={Forward:"#1CC461",Return:"#FFB014",Unknown:"#EE4D2D"},r=function(t){var s=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"";if(!s)return"/";var i=n[s];return t("span",{class:"journey-type"},[t("span",{class:"journey-type-dot",style:{background:i}}),s])};function o(a){if(!a)return"-";if(O.G){var t=+a;return b()(t)?"-":Math.round(t).toLocaleString("TWD")}return a}},YVpW:(v,f,e)=>{var p=e("JPst");f=p(!1),f.push([v.id,`.order-overview-wrapper[data-v-f98625bc] {
  background-color: #fff;
  padding: 16px 0 8px 4px;
}
.order-overview-wrapper .title-wrapper[data-v-f98625bc] {
  position: relative;
  margin-bottom: 16px;
  height: 16px;
  line-height: 16px;
}
.order-overview-wrapper .title-wrapper[data-v-f98625bc]::before {
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
.order-overview-wrapper .title-wrapper .title[data-v-f98625bc] {
  font-size: 16px;
  color: #333333;
  line-height: 16px;
  font-weight: 500;
  margin-left: 8px;
}
.order-overview-wrapper .title-wrapper .time[data-v-f98625bc] {
  padding-left: 8px;
  font-size: 12px;
  color: #999999;
}
.order-overview-wrapper .order-overview-content[data-v-f98625bc] {
  background-color: #fff;
}
.order-overview-wrapper .order-overview-content li[data-v-f98625bc] {
  display: inline-flex;
  padding-right: 16px;
  color: #333333;
  min-width: 120px;
}
.order-overview-wrapper .order-overview-content li .title[data-v-f98625bc] {
  display: inline-block;
  line-height: 20px;
  color: #999999;
  margin: auto;
}
.order-overview-wrapper .order-overview-content li .order-count-text[data-v-f98625bc] {
  font-size: 22px;
  font-weight: 500;
  margin: 0 16px 0 8px;
}
.divide[data-v-f98625bc] {
  margin: 8px -24px;
  height: 1px;
  background: #ECF0F4;
}
ul[data-v-f98625bc] {
  padding: 0;
  margin: 0;
  list-style: none;
}
.button-base[data-v-f98625bc] {
  padding: 9px 20px;
  font-size: 14px;
  color: #FFFFFF;
}
.spx-button[data-v-f98625bc] {
  padding: 9px 20px;
  font-size: 14px;
  color: #FFFFFF;
  border-color: #FFFFFF;
  color: #555555;
}
.spx-button[data-v-f98625bc]:hover {
  background-color: #FFFFFF;
}
.spx-button-primary[data-v-f98625bc] {
  padding: 9px 20px;
  font-size: 14px;
  color: #FFFFFF;
  background-color: #EE4D2D;
  border-color: #EE4D2D;
}
.ssc-message[data-v-f98625bc] {
  top: 20px !important;
}
.sp-card > .actions[data-v-f98625bc] {
  margin-bottom: 10px;
  display: flex;
  flex-wrap: wrap;
}
.sp-card > .actions .right[data-v-f98625bc] {
  flex: 1;
  text-align: right;
  height: 40px;
}
table th[data-v-f98625bc] {
  color: rgba(0, 0, 0, 0.85);
  border-color: #EEEEEE;
  font-size: 14px;
  font-weight: 500;
}
.spx-editor .ssc-tag[data-v-f98625bc] {
  font-size: 12px;
  margin: 0px;
  padding: 0;
}
.spx-editor .ssc-tag .left-padding-span[data-v-f98625bc] {
  width: 0;
  margin: 0 0 0 8px;
}
.spx-editor .ssc-tag .right-padding-span[data-v-f98625bc] {
  width: 0;
  margin: 0 8px 0 0;
}
.spx-editor .tag-editor-span[data-v-f98625bc] {
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
.spx-editor .tag-editor-span .tag-editor-span-space[data-v-f98625bc] {
  width: 8px;
  height: 15px;
  display: inline-block;
  line-height: 22px;
}
.ssc-tabs-type-pane-card .ssc-tabs-pane[data-v-f98625bc] {
  background: #FAFAFA;
}
.check-tree[data-v-f98625bc] {
  margin-left: 80px;
}
.avatar-uploader-icon[data-v-f98625bc] {
  font-size: 28px;
  color: #8c939d;
  width: 178px;
  height: 178px;
  line-height: 178px;
  text-align: center;
}
.avatar-uploader-icon-small[data-v-f98625bc] {
  font-size: 14px !important;
  color: #8c939d;
  width: 56px !important;
  height: 56px !important;
  line-height: 56px !important;
  text-align: center;
}
.avatar-uploader-icon-middle[data-v-f98625bc] {
  font-size: 14px !important;
  color: #8c939d;
  width: 94px !important;
  height: 94px !important;
  line-height: 94px !important;
  text-align: center;
}
.avatar[data-v-f98625bc] {
  width: 178px;
  height: 178px;
  display: block;
}
.avatar-small[data-v-f98625bc] {
  width: 56px;
  height: 56px;
  display: block;
}
.avatar-middle[data-v-f98625bc] {
  width: 94px;
  height: 94px;
  display: block;
}
.acribus-sp-tabs[data-v-f98625bc] {
  padding: 16px 16px 0px;
  border-radius: 6px;
  margin-bottom: -30px;
  background-color: #fff;
}
span.red[data-v-f98625bc] {
  color: #F56C6C;
}
span.green[data-v-f98625bc] {
  color: #67C23A;
}
.sp-hooks[data-v-f98625bc] {
  overflow: hidden;
}
.text-link[data-v-f98625bc] {
  color: #409eff;
  cursor: pointer;
}
.text-warning[data-v-f98625bc] {
  color: #e80808;
}
.help-text[data-v-f98625bc] {
  cursor: help;
}
.driver-performance-flag-A[data-v-f98625bc] {
  color: #55CC77;
}
.driver-performance-flag-B[data-v-f98625bc] {
  color: #999;
}
.driver-performance-flag-C[data-v-f98625bc] {
  color: #FF4742;
}
/* [check-in rule] Google map autosuggest result container */
.pac-container[data-v-f98625bc] {
  z-index: 100000;
}
.action-link[data-v-f98625bc] {
  color: #2769f0;
  cursor: pointer;
  display: inline-block;
  margin-left: 6px;
}
.action-link[data-v-f98625bc]:first-child {
  margin-left: 0;
}
.action-link[data-v-f98625bc]:hover {
  text-decoration: underline;
}
.separate-line[data-v-f98625bc] {
  height: 0;
  width: 100%;
  border-top: 1px #E9E9E9 solid;
  margin-bottom: 16px;
}
.white-fs-ground[data-v-f98625bc] {
  padding: 24px;
  background: #fff;
  height: 100%;
}
.white-fs-ground .category-title[data-v-f98625bc] {
  font-size: 16px;
  font-weight: 500;
  line-height: 16px;
  color: #333;
  margin-top: 56px;
  margin-bottom: 16px;
}
.white-fs-ground .category-title[data-v-f98625bc]:first-child {
  margin-top: 16px;
}
.white-fs-ground .category-title[data-v-f98625bc]:before {
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
.page-table-container[data-v-f98625bc] {
  border: 1px solid #eee;
}
.form-body-center[data-v-f98625bc] {
  margin: 0 auto;
}
.form-body-left[data-v-f98625bc] {
  margin: 0;
}
.dialog-footer[data-v-f98625bc],
.footer-submit[data-v-f98625bc] {
  margin-top: 32px;
}
.dialog-footer .ssc-button[data-v-f98625bc],
.footer-submit .ssc-button[data-v-f98625bc] {
  margin-left: 16px;
}
.dialog-footer .ssc-button[data-v-f98625bc]:first-child,
.footer-submit .ssc-button[data-v-f98625bc]:first-child {
  margin-left: 0;
}
.text-center[data-v-f98625bc] {
  text-align: center;
}
.s-form-textarea .ssc-textarea[data-v-f98625bc],
.ssc-form-item .ssc-select[data-v-f98625bc],
.ssc-form-item .ssc-input-size-medium[data-v-f98625bc] {
  width: 320px;
}
.ssc-steps.is-horizontal[data-v-f98625bc] {
  width: 60%;
  margin: 23px auto;
}
.action-wrap[data-v-f98625bc] {
  display: flex;
  margin: 10px 0;
}
.action-wrap .actions[data-v-f98625bc] {
  flex: 1;
}
.action-wrap .actions .ssc-button[data-v-f98625bc] {
  margin-right: 16px;
}
.action-wrap .upload-route-log-info[data-v-f98625bc] {
  align-self: center;
  text-align: right;
  flex: 1;
}
.action-wrap .upload-route-log-info label[data-v-f98625bc] {
  margin-right: 8px;
}
.upload-log-table[data-v-f98625bc] {
  margin: 10px 0;
}
.group-route-list-info[data-v-f98625bc] {
  line-height: 40px;
}
.group-route-list-info label[data-v-f98625bc] {
  margin-right: 10px;
}
.mass-upload-input-footer[data-v-f98625bc] {
  margin-top: 32px;
}
.mass-upload-input-footer .ssc-button[data-v-f98625bc] {
  margin-right: 10px;
}
.add-range-btn[data-v-f98625bc] {
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
.add-range-btn[data-v-f98625bc]:hover {
  background: #f6f6f6;
}
.range-wrap[data-v-f98625bc] {
  padding: 16px;
}
.range-wrap .seq-tag[data-v-f98625bc] {
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
.range-wrap .icon-del[data-v-f98625bc] {
  line-height: 32px;
  width: 24px;
  height: 24px;
  cursor: pointer;
  color: #bbb;
}
.range-wrap .icon-del[data-v-f98625bc]:hover {
  color: #888;
}
.bg-fafafa[data-v-f98625bc] {
  background: #fafafa;
}
.ssc-step-main-title[data-v-f98625bc] {
  line-height: 1.5;
}
.ssc-form-item-error-tip[data-v-f98625bc] {
  white-space: nowrap;
}
.ssc-table-header .ssc-table-header-title[data-v-f98625bc] {
  height: 100%;
}
.ssc-table-header .ssc-table-header-column-container[data-v-f98625bc] {
  height: 100%;
}
.ssc-table-body .ssc-table-header-column-container .td-content[data-v-f98625bc] {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.acribus-text-ellipsis[data-v-f98625bc] {
  display: inline-block;
  width: 100%;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.station-tree-container .ssc-form-item-content[data-v-f98625bc] {
  flex-direction: column;
  position: relative;
}
.station-tree-container .ssc-form-item-content .tree[data-v-f98625bc] {
  min-width: 318px;
  display: block;
  margin-top: 20px;
}
.station-tree-container .ssc-form-item-content .tree.has-search-input[data-v-f98625bc] {
  padding-top: 40px;
}
.station-tree-container .ssc-form-item-content .tree-input[data-v-f98625bc] {
  position: absolute;
  left: 3%;
  top: 30px;
  z-index: 1;
  width: 94%;
  margin: 0 auto;
  color: #aeaeae;
}
.ssc-dropdown-menu[data-v-f98625bc] {
  min-width: 176px;
  max-width: 320px;
  z-index: 2;
}
.ssc-dropdown-menu .active[data-v-f98625bc] {
  color: #EE4D2D;
  font-weight: 500;
}
.detail-part-title[data-v-f98625bc] {
  font-size: 18px;
  color: #333333;
  font-weight: 500;
  margin-bottom: 16px;
}
.detail-part-title.additional-info[data-v-f98625bc] {
  margin-top: 56px;
}
.detail-part-title[data-v-f98625bc]::before {
  content: '';
  width: 2px;
  height: 10px;
  background: #EE4D2D;
  display: inline-block;
  margin-right: 6px;
}
.page-wrapper[data-v-f98625bc] {
  height: 100%;
}
.zone-container button:disabled:not(.btn-prev):not(.btn-next).ssc-btn-type-primary[data-v-f98625bc] {
  color: #FFF !important;
  background: #EE4D2D !important;
  opacity: 0.5;
}
.pagination-left-total[data-v-f98625bc] {
  display: flex;
  flex: 1;
}
.common-status[data-v-f98625bc] {
  line-height: 12px;
  font-weight: 500;
  padding: 3px 4px;
  border-radius: 2px;
  display: inline-block;
  white-space: nowrap;
}
.common-status.status-success[data-v-f98625bc] {
  background: #ECFFF1;
  color: #1CC461;
}
.common-status.status-disabled[data-v-f98625bc] {
  color: #646B76;
  background: #F5F6F9;
}
.common-status.status-info[data-v-f98625bc] {
  color: #3274F7;
  background: #F0F7FF;
}
.common-status.status-danger[data-v-f98625bc] {
  color: #F32345;
  background: #FFF0F0;
}
.common-status.status-warning[data-v-f98625bc] {
  background: #FFF8DB;
  color: #FFB014;
}
.common-divide[data-v-f98625bc] {
  height: 8px;
  background: #F5F6F9;
  margin: 0 -24px;
}
.ssc-scan-toast[data-v-f98625bc] {
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
.ssc-scan-toast.ssc-scan-toast-success[data-v-f98625bc] {
  animation-duration: 4.4s;
  animation-name: scanSuccessToast-f98625bc;
  background: #1CC461;
}
.ssc-scan-toast.ssc-scan-toast-fail[data-v-f98625bc] {
  background: #F32345;
  animation-duration: 8.4s;
  animation-name: scanFailToast-f98625bc;
}
.ssc-scan-toast.ssc-scan-toast-notice[data-v-f98625bc] {
  background: #FFA620;
  animation-duration: 6.4s;
  animation-name: scanFailToast-f98625bc;
}
.ssc-scan-toast .message-panel[data-v-f98625bc] {
  display: flex;
  width: 100%;
  align-items: center;
}
.ssc-scan-toast .message-panel .icon[data-v-f98625bc] {
  margin-right: 18px;
  width: 28px;
  height: 28px;
  flex-shrink: 0;
}
.ssc-scan-toast .message-panel .text[data-v-f98625bc] {
  display: inline-block;
}
@keyframes scanSuccessToast-f98625bc {
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
@keyframes scanFailToast-f98625bc {
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
.table-pagination[data-v-f98625bc] {
  height: 56px;
  border: 1px solid #ECF0F4;
  border-top: 0;
  justify-content: flex-end;
  padding-right: 16px;
}
.journey-type[data-v-f98625bc] {
  display: flex;
  align-items: center;
}
.journey-type .journey-type-dot[data-v-f98625bc] {
  width: 6px;
  height: 6px;
  border-radius: 50%;
  display: inline-block;
  margin-right: 8px;
}
.pagination-sticky-bottom[data-v-f98625bc] {
  background: #fff;
  position: sticky;
  bottom: 16px;
}
.pagination-sticky-bottom[data-v-f98625bc]:after {
  content: ' ';
  background: #fff;
  width: 100%;
  height: 16px;
  position: absolute;
}
.pagination-sticky-bottom[data-v-f98625bc] .ssc-pagination {
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
.pagination-sticky-bottom[data-v-f98625bc] .ssc-pagination .total-container {
  flex: 1;
  margin-left: 15px;
  margin-right: 12px;
}
.sp-card-log-list[data-v-f98625bc] {
  padding: 16px 24px;
  background: #fff;
  min-height: 100%;
}
.ssc-table-panel .ssc-form-item .ssc-form-item-content textarea[data-v-f98625bc],
.pro-filter .ssc-form-item .ssc-form-item-content textarea[data-v-f98625bc] {
  border: transparent;
}
.message-red-text[data-v-f98625bc] {
  color: #EE4D2D;
  font-weight: 700;
}
`,""]),v.exports=f},bRoh:(v,f,e)=>{"use strict";e.r(f),e.d(f,{default:()=>L});var p=function(){var n=this,r=n._self._c;return r("div",{staticClass:"page-wrapper"},[r("s-core",{directives:[{name:"loading",rawName:"v-loading",value:n.loading.orderList,expression:"loading.orderList"}],ref:"sCore",attrs:{config:n.config,search:n.onSearch,"table-data":n.tableData}},[n.showOrderOverview?r("div",{directives:[{name:"loading",rawName:"v-loading",value:n.loading.orderOverview,expression:"loading.orderOverview"}],staticClass:"order-overview-wrapper",attrs:{slot:"tabs"},slot:"tabs"},[r("div",{staticClass:"title-wrapper"},[r("span",{staticClass:"title"},[n._v(n._s(n.$gt("Overview")))]),r("span",{staticClass:"time"},[n._v(n._s(n.$gt("Update as of"))+n._s(n.updateTime))])]),n._v(" "),r("ul",{staticClass:"order-overview-content"},n._l(n.orderOverviewSchemas,function(o){return r("li",{key:o.key},[r("div",{staticClass:"title"},[n._v(n._s(o.label))]),n._v(" "),r("span",{staticClass:"order-count-text"},[n._v(n._s(n.renderOrderOverviewCount(n.orderOverviewData[o.key])))])])}),0),n._v(" "),n.showOrderOverview?r("div",{staticClass:"divide"}):n._e()]):n._e(),n._v(" "),r("span",{attrs:{slot:"custom-actions"},slot:"custom-actions"},[n.showExport?r("s-dropdown",{attrs:{placement:"bottom-start"},on:{command:n.dropdownOperations}},[r("s-button",{staticClass:"batch-actions-btn"},[n._v(`
          `+n._s(n.$gt("Export"))+`
          `),r("s-icon-chevron-down",{staticClass:"dropdown-btn-line-icon"})],1),n._v(" "),r("s-dropdown-menu",{attrs:{slot:"dropdown"},slot:"dropdown"},[r("s-dropdown-item",{attrs:{command:"exportOrder"}},[n._v(n._s(n.$gt("Export")))]),n._v(" "),r("s-dropdown-item",{attrs:{command:"showExportHistory"}},[n._v(n._s(n.$gt("Export History")))])],1)],1):n._e()],1)]),n._v(" "),n.visible.exportHistory?r("spx-shared-export-history",{attrs:{show:n.visible.exportHistory,exportType:"dopOrderManagementExportHistory"},on:{"update:show":function(a){return n.$set(n.visible,"exportHistory",a)}}}):n._e()],1)},b=[],F=e("jo6Y"),T=e("14Xm"),g=e.n(T),x=e("D3Ub"),E=e("QbLZ"),P=e("eCTY"),w=e("QsnJ"),O=e("gYvu"),u=e("pqmQ"),h=e("4Jaa");const _={data:function(){return{renderOrderOverviewCount:O.VL,updateTime:"-",orderOverviewSchemas:[{label:"Total DOP in Progress",key:"in_progress_count"},{label:"Total DOP Received",key:"inbound_count"}],orderOverviewData:{},tableData:{list:[],total:0},visible:{exportHistory:!1},loading:{orderOverview:!1,orderList:!1}}},computed:(0,E.Z)({},(0,P.mapState)({statusSelectOptions:function(n){return(0,u.jw)(n,{dataPath:"enums.systemEnums.dop_order_status"})}}),{showExport:function(){return(0,u.wD)(this.$store,"DOP_ORDER_LIST_EXPORT")},showOrderOverview:function(){return(0,u.wD)(this.$store,"DOP_ORDER_VIEW")},config:function(){var n=this;return{trimInputValue:!0,form:[{type:"input",label:this.$gt("SPX TN"),key:"shipment_id"}],table:{width:1100,actionsWidth:80,columns:[{label:this.$gt("SPX TN"),key:"shipment_id",width:120},{label:this.$gt("Status"),key:"order_status",render:function(o,a){return(0,u.BK)(n.$store,"state.enums.systemEnums.dop_order_status",a)},filter:{type:"select",options:this.statusSelectOptions,multiple:!1},width:220},{label:this.$gt("Inbound Time"),key:"inbound_time",filter:{type:"datetime",unit:"datetimerange"},render:function(o,a){return(0,h.WU)(a)},width:180},{label:this.$gt("Outbound Time"),key:"outbound_time",filter:{type:"datetime",unit:"datetimerange"},render:function(o,a){return(0,h.WU)(a)},width:180}]}}}}),created:function(){var n=this;this.onSearch(),this.intervalID=setInterval(function(){n.loadOrderOverview()},w.ml)},beforeDestroy:function(){clearInterval(this.intervalID)},methods:{exportOrder:function(){var c=(0,x.Z)(g().mark(function r(){var o,a,t;return g().wrap(function(i){for(;;)switch(i.prev=i.next){case 0:return i.prev=0,o=this.$refs.sCore.formData,a=o.inbound_time,t=o.outbound_time,o.inbound_time=(0,h.N_)(a),o.outbound_time=(0,h.N_)(t),i.next=7,this.$store.dispatch("dopStation/exportDopOrderList",(0,u.Lt)(o));case 7:this.$message.success(w.Lz.export),i.next=13;break;case 10:i.prev=10,i.t0=i.catch(0),console.error("export dop order list error: ",i.t0);case 13:case"end":return i.stop()}},r,this,[[0,10]])}));function n(){return c.apply(this,arguments)}return n}(),dropdownOperations:function(n){return this[n]()},showExportHistory:function(){this.visible.exportHistory=!0},linkToLog:function(){this.$router.push("/user-management/users/editLog")},onSearch:function(){var c=(0,x.Z)(g().mark(function r(){var o=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},a,t,s,i,d,y,m,C,S,z,M;return g().wrap(function(l){for(;;)switch(l.prev=l.next){case 0:if(this.loadOrderOverview(),l.prev=1,!this.loading.orderList){l.next=4;break}return l.abrupt("return");case 4:return(0,u.K4)(this,"orderList",!0),a=o.pageno,t=a===void 0?1:a,s=o.count,i=s===void 0?this.tableData.count||w.L8:s,o.pageno||(o.pageno=1),o.count||(o.count=w.L8),l.next=10,this.$store.dispatch("dopStation/loadDopOrderList",o);case 10:d=l.sent,y=d.data,m=y===void 0?{}:y,C=m.list,S=C===void 0?[]:C,z=m.total,M=(0,F.Z)(m,["list","total"]),this.tableData=(0,E.Z)({},M,{list:S,total:z,pageno:t,count:i}),l.next=20;break;case 17:l.prev=17,l.t0=l.catch(1),console.error("load dop list error: ",l.t0);case 20:return l.prev=20,(0,u.K4)(this,"orderList",!1),l.finish(20);case 23:case"end":return l.stop()}},r,this,[[1,17,20,23]])}));function n(){return c.apply(this,arguments)}return n}(),loadOrderOverview:function(){var c=(0,x.Z)(g().mark(function r(o){var a,t,s;return g().wrap(function(d){for(;;)switch(d.prev=d.next){case 0:if(d.prev=0,!this.loading.orderOverview){d.next=3;break}return d.abrupt("return");case 3:return(0,u.K4)(this,"orderOverview",!0),d.next=6,this.$store.dispatch("dopStation/loadDopOrderOverview",o);case 6:a=d.sent,t=a.data,s=t===void 0?{}:t,this.orderOverviewData=s,this.updateTime=(0,h.WU)(new Date),d.next=16;break;case 13:d.prev=13,d.t0=d.catch(0),console.error("load user list error: ",d.t0);case 16:return d.prev=16,(0,u.K4)(this,"orderOverview",!1),d.finish(16);case 19:case"end":return d.stop()}},r,this,[[0,13,16,19]])}));function n(r){return c.apply(this,arguments)}return n}(),refreshPage:function(){this.$refs.sCore.refreshList()}}};var $=e("2ACV"),D=e("KHd+"),k=(0,D.Z)(_,p,b,!1,null,"f98625bc",null);const L=k.exports},"2ACV":(v,f,e)=>{var p=e("YVpW");typeof p=="string"&&(p=[[v.id,p,""]]),p.locals&&(v.exports=p.locals);var b=e("er8A").Z,F=b("fb901ef2",p,!0,{})}}]);
