(self.webpackChunkzzz_fms_admin=self.webpackChunkzzz_fms_admin||[]).push([[3893],{sKUw:(k,u,a)=>{"use strict";a.d(u,{Et:()=>F});var c=a("QbLZ"),m=a("QsnJ"),g=a("GOkr"),f=a("pqmQ");function E(o){var v=(0,f.DV)(this.$store.state,"systemConfig"),b=v.stationHandoverConfig,y=b===void 0?{}:b,w=y.station_show_type,O=w===void 0?[]:w;return O.includes(o)}function h(o){var v=(0,f.DV)(this.$store.state,"systemConfig"),b=v.stationHandoverConfig,y=b===void 0?{}:b,w=y.station_handle_type,O=w===void 0?[]:w;return O===o}function C(o){return g.ag?E.call(this,0):o}function D(o){return g.ag?E.call(this,2):o}function R(o){return g.ag?E.call(this,1):o}function $(o){return g.ag?h.call(this,0):o}function T(o){return g.ag?h.call(this,2):o}function e(o){return g.ag?h.call(this,1):o}function F(){var o=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},v=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},b=(0,f.DV)(this.$store.state,"systemConfig"),y=b.stationHandoverConfig,w=y===void 0?{}:y,O=w.station_show_type,B=O===void 0?[]:O;return B.reduce(function(S,z){var N=(0,m.pd)()[z],P=m.O_[z],A=o[P]||P;return N&&S.push((0,c.Z)({key:A,label:N},v)),S},[])}var x={getHandoverModeTableColumns:F,handoverBySlsTN:D,handoverBySpxTN:C,handoverByThirdPartyTN:R,isDefaultHandoverBySlsTN:T,isDefaultHandoverBySpxTN:$,isDefaultHandoverByThirdPartyTN:e}},"zOE/":(k,u,a)=>{"use strict";a.d(u,{Z:()=>h});var c=a("GOkr"),m=/^[A-Za-z0-9-]{3,36}$/,g=m,f=/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,E=m;const h={ALLTO:/(R|T)?TO[0-9]{8}[a-zA-Z0-9]{5}$|SPTO[0-9]{12,16}$/,ALLTO_OR_SPX_ORDER_NO:E,PUP_ID:/^PUP.*$/,RTO:/^(R)?TO[0-9]{8}[a-zA-Z0-9]{5}$|SPTO[0-9]{12,16}$/,SHOP_ID:/^[1-9][0-9]*$/,SORT_CODE:/^[A-Za-z0-9_-]+$/,SORT_CODE_VN:/^[A-Za-z0-9-]+$/,SPX_ORDER_NO:c.f.SPX_ORDER_NO||g,SPX_ORDER_NO_LOOSELY:m,TTO:/^(T)?TO[0-9]{8}[a-zA-Z0-9]{5}$|SPTO[0-9]{12,16}$/,email:f}},ItOn:(k,u,a)=>{var c=a("JPst");u=c(!1),u.push([k.id,`.s-card[data-v-8917263a] {
  background-color: #FFFFFF;
  margin-bottom: 8px;
}
.receive-form-wrapper[data-v-8917263a] {
  padding: 8px 0 16px 0;
}
.receive-form .ssc-form-item[data-v-8917263a]:last-child {
  margin-bottom: 0;
}
.receive-form .ssc-form-item-label .ssc-select[data-v-8917263a] {
  width: 100%;
}
ul[data-v-8917263a] {
  padding: 0;
  margin: 0;
  list-style: none;
}
.button-base[data-v-8917263a] {
  padding: 9px 20px;
  font-size: 14px;
  color: #FFFFFF;
}
.spx-button[data-v-8917263a] {
  padding: 9px 20px;
  font-size: 14px;
  color: #FFFFFF;
  border-color: #FFFFFF;
  color: #555555;
}
.spx-button[data-v-8917263a]:hover {
  background-color: #FFFFFF;
}
.spx-button-primary[data-v-8917263a] {
  padding: 9px 20px;
  font-size: 14px;
  color: #FFFFFF;
  background-color: #EE4D2D;
  border-color: #EE4D2D;
}
.ssc-message[data-v-8917263a] {
  top: 20px !important;
}
.sp-card > .actions[data-v-8917263a] {
  margin-bottom: 10px;
  display: flex;
  flex-wrap: wrap;
}
.sp-card > .actions .right[data-v-8917263a] {
  flex: 1;
  text-align: right;
  height: 40px;
}
table th[data-v-8917263a] {
  color: rgba(0, 0, 0, 0.85);
  border-color: #EEEEEE;
  font-size: 14px;
  font-weight: 500;
}
.spx-editor .ssc-tag[data-v-8917263a] {
  font-size: 12px;
  margin: 0px;
  padding: 0;
}
.spx-editor .ssc-tag .left-padding-span[data-v-8917263a] {
  width: 0;
  margin: 0 0 0 8px;
}
.spx-editor .ssc-tag .right-padding-span[data-v-8917263a] {
  width: 0;
  margin: 0 8px 0 0;
}
.spx-editor .tag-editor-span[data-v-8917263a] {
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
.spx-editor .tag-editor-span .tag-editor-span-space[data-v-8917263a] {
  width: 8px;
  height: 15px;
  display: inline-block;
  line-height: 22px;
}
.ssc-tabs-type-pane-card .ssc-tabs-pane[data-v-8917263a] {
  background: #FAFAFA;
}
.check-tree[data-v-8917263a] {
  margin-left: 80px;
}
.avatar-uploader-icon[data-v-8917263a] {
  font-size: 28px;
  color: #8c939d;
  width: 178px;
  height: 178px;
  line-height: 178px;
  text-align: center;
}
.avatar-uploader-icon-small[data-v-8917263a] {
  font-size: 14px !important;
  color: #8c939d;
  width: 56px !important;
  height: 56px !important;
  line-height: 56px !important;
  text-align: center;
}
.avatar-uploader-icon-middle[data-v-8917263a] {
  font-size: 14px !important;
  color: #8c939d;
  width: 94px !important;
  height: 94px !important;
  line-height: 94px !important;
  text-align: center;
}
.avatar[data-v-8917263a] {
  width: 178px;
  height: 178px;
  display: block;
}
.avatar-small[data-v-8917263a] {
  width: 56px;
  height: 56px;
  display: block;
}
.avatar-middle[data-v-8917263a] {
  width: 94px;
  height: 94px;
  display: block;
}
.acribus-sp-tabs[data-v-8917263a] {
  padding: 16px 16px 0px;
  border-radius: 6px;
  margin-bottom: -30px;
  background-color: #fff;
}
span.red[data-v-8917263a] {
  color: #F56C6C;
}
span.green[data-v-8917263a] {
  color: #67C23A;
}
.sp-hooks[data-v-8917263a] {
  overflow: hidden;
}
.text-link[data-v-8917263a] {
  color: #409eff;
  cursor: pointer;
}
.text-warning[data-v-8917263a] {
  color: #e80808;
}
.help-text[data-v-8917263a] {
  cursor: help;
}
.driver-performance-flag-A[data-v-8917263a] {
  color: #55CC77;
}
.driver-performance-flag-B[data-v-8917263a] {
  color: #999;
}
.driver-performance-flag-C[data-v-8917263a] {
  color: #FF4742;
}
/* [check-in rule] Google map autosuggest result container */
.pac-container[data-v-8917263a] {
  z-index: 100000;
}
.action-link[data-v-8917263a] {
  color: #2769f0;
  cursor: pointer;
  display: inline-block;
  margin-left: 6px;
}
.action-link[data-v-8917263a]:first-child {
  margin-left: 0;
}
.action-link[data-v-8917263a]:hover {
  text-decoration: underline;
}
.separate-line[data-v-8917263a] {
  height: 0;
  width: 100%;
  border-top: 1px #E9E9E9 solid;
  margin-bottom: 16px;
}
.white-fs-ground[data-v-8917263a] {
  padding: 24px;
  background: #fff;
  height: 100%;
}
.white-fs-ground .category-title[data-v-8917263a] {
  font-size: 16px;
  font-weight: 500;
  line-height: 16px;
  color: #333;
  margin-top: 56px;
  margin-bottom: 16px;
}
.white-fs-ground .category-title[data-v-8917263a]:first-child {
  margin-top: 16px;
}
.white-fs-ground .category-title[data-v-8917263a]:before {
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
.page-table-container[data-v-8917263a] {
  border: 1px solid #eee;
}
.form-body-center[data-v-8917263a] {
  margin: 0 auto;
}
.form-body-left[data-v-8917263a] {
  margin: 0;
}
.dialog-footer[data-v-8917263a],
.footer-submit[data-v-8917263a] {
  margin-top: 32px;
}
.dialog-footer .ssc-button[data-v-8917263a],
.footer-submit .ssc-button[data-v-8917263a] {
  margin-left: 16px;
}
.dialog-footer .ssc-button[data-v-8917263a]:first-child,
.footer-submit .ssc-button[data-v-8917263a]:first-child {
  margin-left: 0;
}
.text-center[data-v-8917263a] {
  text-align: center;
}
.s-form-textarea .ssc-textarea[data-v-8917263a],
.ssc-form-item .ssc-select[data-v-8917263a],
.ssc-form-item .ssc-input-size-medium[data-v-8917263a] {
  width: 320px;
}
.ssc-steps.is-horizontal[data-v-8917263a] {
  width: 60%;
  margin: 23px auto;
}
.action-wrap[data-v-8917263a] {
  display: flex;
  margin: 10px 0;
}
.action-wrap .actions[data-v-8917263a] {
  flex: 1;
}
.action-wrap .actions .ssc-button[data-v-8917263a] {
  margin-right: 16px;
}
.action-wrap .upload-route-log-info[data-v-8917263a] {
  align-self: center;
  text-align: right;
  flex: 1;
}
.action-wrap .upload-route-log-info label[data-v-8917263a] {
  margin-right: 8px;
}
.upload-log-table[data-v-8917263a] {
  margin: 10px 0;
}
.group-route-list-info[data-v-8917263a] {
  line-height: 40px;
}
.group-route-list-info label[data-v-8917263a] {
  margin-right: 10px;
}
.mass-upload-input-footer[data-v-8917263a] {
  margin-top: 32px;
}
.mass-upload-input-footer .ssc-button[data-v-8917263a] {
  margin-right: 10px;
}
.add-range-btn[data-v-8917263a] {
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
.add-range-btn[data-v-8917263a]:hover {
  background: #f6f6f6;
}
.range-wrap[data-v-8917263a] {
  padding: 16px;
}
.range-wrap .seq-tag[data-v-8917263a] {
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
.range-wrap .icon-del[data-v-8917263a] {
  line-height: 32px;
  width: 24px;
  height: 24px;
  cursor: pointer;
  color: #bbb;
}
.range-wrap .icon-del[data-v-8917263a]:hover {
  color: #888;
}
.bg-fafafa[data-v-8917263a] {
  background: #fafafa;
}
.ssc-step-main-title[data-v-8917263a] {
  line-height: 1.5;
}
.ssc-form-item-error-tip[data-v-8917263a] {
  white-space: nowrap;
}
.ssc-table-header .ssc-table-header-title[data-v-8917263a] {
  height: 100%;
}
.ssc-table-header .ssc-table-header-column-container[data-v-8917263a] {
  height: 100%;
}
.ssc-table-body .ssc-table-header-column-container .td-content[data-v-8917263a] {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.acribus-text-ellipsis[data-v-8917263a] {
  display: inline-block;
  width: 100%;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.station-tree-container .ssc-form-item-content[data-v-8917263a] {
  flex-direction: column;
  position: relative;
}
.station-tree-container .ssc-form-item-content .tree[data-v-8917263a] {
  min-width: 318px;
  display: block;
  margin-top: 20px;
}
.station-tree-container .ssc-form-item-content .tree.has-search-input[data-v-8917263a] {
  padding-top: 40px;
}
.station-tree-container .ssc-form-item-content .tree-input[data-v-8917263a] {
  position: absolute;
  left: 3%;
  top: 30px;
  z-index: 1;
  width: 94%;
  margin: 0 auto;
  color: #aeaeae;
}
.ssc-dropdown-menu[data-v-8917263a] {
  min-width: 176px;
  max-width: 320px;
  z-index: 2;
}
.ssc-dropdown-menu .active[data-v-8917263a] {
  color: #EE4D2D;
  font-weight: 500;
}
.detail-part-title[data-v-8917263a] {
  font-size: 18px;
  color: #333333;
  font-weight: 500;
  margin-bottom: 16px;
}
.detail-part-title.additional-info[data-v-8917263a] {
  margin-top: 56px;
}
.detail-part-title[data-v-8917263a]::before {
  content: '';
  width: 2px;
  height: 10px;
  background: #EE4D2D;
  display: inline-block;
  margin-right: 6px;
}
.page-wrapper[data-v-8917263a] {
  height: 100%;
}
.zone-container button:disabled:not(.btn-prev):not(.btn-next).ssc-btn-type-primary[data-v-8917263a] {
  color: #FFF !important;
  background: #EE4D2D !important;
  opacity: 0.5;
}
.pagination-left-total[data-v-8917263a] {
  display: flex;
  flex: 1;
}
.common-status[data-v-8917263a] {
  line-height: 12px;
  font-weight: 500;
  padding: 3px 4px;
  border-radius: 2px;
  display: inline-block;
  white-space: nowrap;
}
.common-status.status-success[data-v-8917263a] {
  background: #ECFFF1;
  color: #1CC461;
}
.common-status.status-disabled[data-v-8917263a] {
  color: #646B76;
  background: #F5F6F9;
}
.common-status.status-info[data-v-8917263a] {
  color: #3274F7;
  background: #F0F7FF;
}
.common-status.status-danger[data-v-8917263a] {
  color: #F32345;
  background: #FFF0F0;
}
.common-status.status-warning[data-v-8917263a] {
  background: #FFF8DB;
  color: #FFB014;
}
.common-divide[data-v-8917263a] {
  height: 8px;
  background: #F5F6F9;
  margin: 0 -24px;
}
.ssc-scan-toast[data-v-8917263a] {
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
.ssc-scan-toast.ssc-scan-toast-success[data-v-8917263a] {
  animation-duration: 4.4s;
  animation-name: scanSuccessToast-8917263a;
  background: #1CC461;
}
.ssc-scan-toast.ssc-scan-toast-fail[data-v-8917263a] {
  background: #F32345;
  animation-duration: 8.4s;
  animation-name: scanFailToast-8917263a;
}
.ssc-scan-toast.ssc-scan-toast-notice[data-v-8917263a] {
  background: #FFA620;
  animation-duration: 6.4s;
  animation-name: scanFailToast-8917263a;
}
.ssc-scan-toast .message-panel[data-v-8917263a] {
  display: flex;
  width: 100%;
  align-items: center;
}
.ssc-scan-toast .message-panel .icon[data-v-8917263a] {
  margin-right: 18px;
  width: 28px;
  height: 28px;
  flex-shrink: 0;
}
.ssc-scan-toast .message-panel .text[data-v-8917263a] {
  display: inline-block;
}
@keyframes scanSuccessToast-8917263a {
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
@keyframes scanFailToast-8917263a {
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
.table-pagination[data-v-8917263a] {
  height: 56px;
  border: 1px solid #ECF0F4;
  border-top: 0;
  justify-content: flex-end;
  padding-right: 16px;
}
.journey-type[data-v-8917263a] {
  display: flex;
  align-items: center;
}
.journey-type .journey-type-dot[data-v-8917263a] {
  width: 6px;
  height: 6px;
  border-radius: 50%;
  display: inline-block;
  margin-right: 8px;
}
.pagination-sticky-bottom[data-v-8917263a] {
  background: #fff;
  position: sticky;
  bottom: 16px;
}
.pagination-sticky-bottom[data-v-8917263a]:after {
  content: ' ';
  background: #fff;
  width: 100%;
  height: 16px;
  position: absolute;
}
.pagination-sticky-bottom[data-v-8917263a] .ssc-pagination {
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
.pagination-sticky-bottom[data-v-8917263a] .ssc-pagination .total-container {
  flex: 1;
  margin-left: 15px;
  margin-right: 12px;
}
.sp-card-log-list[data-v-8917263a] {
  padding: 16px 24px;
  background: #fff;
  min-height: 100%;
}
.ssc-table-panel .ssc-form-item .ssc-form-item-content textarea[data-v-8917263a],
.pro-filter .ssc-form-item .ssc-form-item-content textarea[data-v-8917263a] {
  border: transparent;
}
.message-red-text[data-v-8917263a] {
  color: #EE4D2D;
  font-weight: 700;
}
`,""]),k.exports=u},"27CQ":(k,u,a)=>{"use strict";a.d(u,{Z:()=>$});var c=function(){var e=this,F=e._self._c;return F("s-select",{on:{change:e.handleChange},model:{value:e.trackingNumber,callback:function(o){e.trackingNumber=o},expression:"trackingNumber"}},e._l(e.trackingNumberTypeSelectOptions,function(x){return F("s-option",{key:x.value,attrs:{label:x.label,value:x.value}},[e._v(`
    `+e._s(x.label)+`
  `)])}),1)},m=[],g=a("QbLZ"),f=a("eCTY"),E=a("QsnJ");const C={data:function(){return{trackingNumber:2}},computed:(0,g.Z)({},(0,f.mapGetters)({defaultHandoverMode:"systemConfig/defaultHandoverMode",handoverModeList:"systemConfig/handoverModeList"}),{trackingNumberTypeSelectOptions:function(){return this.handoverModeList.reduce(function(e,F){var x=(0,E.pd)()[F];return x&&e.push({label:x,value:F}),e},[])}}),watch:{defaultHandoverMode:{handler:function(e){this.trackingNumber=e,this.emitValue(e)},immediate:!0}},methods:{emitValue:function(e){this.$emit("input",e)},handleChange:function(e){this.emitValue(e)}}};var D=a("KHd+"),R=(0,D.Z)(C,c,m,!1,null,null,null);const $=R.exports},LDLQ:(k,u,a)=>{"use strict";a.r(u),a.d(u,{default:()=>A});var c=function(){var n=this,t=n._self._c;return t("div",{staticClass:"page-wrapper"},[t("s-core",{directives:[{name:"loading",rawName:"v-loading",value:n.loading.orderList,expression:"loading.orderList"}],ref:"sCore",attrs:{config:n.config,search:n.onSearch,"table-data":n.tableData},on:{resetAllFilter:n.onResetAllFilter}},[t("div",{staticClass:"receive-form-wrapper",attrs:{slot:"tabs"},slot:"tabs"},[n.shouldShowReceiveOrderForm?t("div",{staticClass:"s-card"},[t("s-form",{staticClass:"receive-form",nativeOn:{submit:function(r){return r.preventDefault(),n.receiveOrder.apply(null,arguments)}},model:{value:n.form,callback:function(r){n.form=r},expression:"form"}},[t("s-form-item",{attrs:{props:"orderId"}},[t("span",{attrs:{slot:"label"},slot:"label"},[t("tracking-number-type",{model:{value:n.tracking_num_type,callback:function(r){n.tracking_num_type=r},expression:"tracking_num_type"}})],1),n._v(" "),t("s-input",{ref:"input",attrs:{disabled:n.loading.receive},model:{value:n.form.orderId,callback:function(r){n.$set(n.form,"orderId",typeof r=="string"?r.trim():r)},expression:"form.orderId"}})],1)],1)],1):n._e(),n._v(" "),t("div",{staticClass:"common-divide"})]),n._v(" "),t("span",{attrs:{slot:"custom-actions"},slot:"custom-actions"},[n.showExport?t("s-dropdown",{attrs:{placement:"bottom-start"},on:{command:n.dropdownOperations}},[t("s-button",{staticClass:"batch-actions-btn"},[n._v(`
          `+n._s(n.$gt("Export"))+`
          `),t("s-icon-chevron-down",{staticClass:"dropdown-btn-line-icon"})],1),n._v(" "),t("s-dropdown-menu",{attrs:{slot:"dropdown"},slot:"dropdown"},[t("s-dropdown-item",{attrs:{command:"exportOrder"}},[n._v(n._s(n.$gt("Export")))]),n._v(" "),t("s-dropdown-item",{attrs:{command:"showExportHistory"}},[n._v(n._s(n.$gt("Export History")))])],1)],1):n._e()],1)]),n._v(" "),n.visible.exportHistory?t("spx-shared-export-history",{attrs:{show:n.visible.exportHistory,exportType:"fmhubReturnRceiveExportHistory"},on:{"update:show":function(r){return n.$set(n.visible,"exportHistory",r)}}}):n._e()],1)},m=[],g=a("jo6Y"),f=a("QbLZ"),E=a("14Xm"),h=a.n(E),C=a("D3Ub"),D=a("m1cH"),R=a("3XQO"),$=a.n(R),T=a("27CQ"),e=a("QsnJ"),F=a("sKUw"),x=a("GOkr"),o=a("zOE/"),v=a("pqmQ"),b=a("4Jaa"),y=$()(),w=[y.startOf("day").toDate(),y.endOf("day").toDate()],O=[y.startOf("day").unix(),y.endOf("day").unix()].toString();const S={components:{TrackingNumberType:T.Z},data:function(){return{form:{orderId:""},tracking_num_type:"",basicParams:{module:"dcReturnHandoverTask"},tableData:{list:[],total:0},visible:{exportHistory:!1},loading:{orderList:!1}}},computed:{handoverModeTableColumns:function(){return x.ag?F.Et.call(this,{},{type:"input"}):[{label:this.$gt("SLS Tracking Number"),key:"sls_tracking_number",type:"input",needValueTrim:!0},{label:this.$gt("SPX Tracking Number"),key:"shipment_id",type:"input",needValueTrim:!0}]},showExport:function(){return(0,v.wD)(this.$store,"FM_HUB_RETURN_RECEIVE_EXPORT")},shouldShowReceiveOrderForm:function(){return(0,v.wD)(this.$store,"FM_HUB_RETURN_RECEIVE")},tableColumns:function(){var n={label:this.$gt("Cross Dock"),key:"station_name"},t={label:this.$gt("Receive Time"),key:"receive_time",filter:{type:"datetime",unit:"datetimerange",format:(0,b.Yq)()},defaultValue:w,render:function(l,_){return(0,b.xw)(_)}},s={label:this.$gt("Operator"),key:"operator"};return[].concat((0,D.Z)(this.handoverModeTableColumns),[n,t,s])},config:function(){return{form:[].concat((0,D.Z)(this.handoverModeTableColumns)),table:{width:1100,actionsWidth:80,columns:this.tableColumns}}}},created:function(){this.onSearch({receive_time:O}),this.$store.dispatch("loadAllOperators")},methods:{receiveOrder:function(){var d=(0,C.Z)(h().mark(function t(){var s=this,r,l,_;return h().wrap(function(i){for(;;)switch(i.prev=i.next){case 0:if(r=this.form.orderId,r){i.next=5;break}return this.$message.error(this.$gt("Please Input Tracking Number")),this.$refs.input.focus(),i.abrupt("return");case 5:if(this.tracking_num_type!==0){i.next=10;break}if(l=o.Z.SPX_ORDER_NO,l.test(r)){i.next=10;break}return this.$message.error(this.$gt("Please input a valid SPX Tracking Number")),i.abrupt("return");case 10:return i.prev=10,_={tracking_number:r,tracking_num_type:this.tracking_num_type},(0,v.K4)(this,"receive",!0),i.next=15,this.$store.dispatch("returnMgt/receiveReturnOrder",_);case 15:this.$message.success(this.$t("MSG_SUCCESS.base")),this.$refs.sCore.resetAllFilters(),i.next=22;break;case 19:i.prev=19,i.t0=i.catch(10),console.error("receive error: ",i.t0);case 22:return i.prev=22,(0,v.K4)(this,"receive",!1),this.form.orderId="",this.$nextTick(function(){s.$refs.input.focus()}),i.finish(22);case 27:case"end":return i.stop()}},t,this,[[10,19,22,27]])}));function n(){return d.apply(this,arguments)}return n}(),exportOrder:function(){var d=(0,C.Z)(h().mark(function t(){var s;return h().wrap(function(l){for(;;)switch(l.prev=l.next){case 0:return l.prev=0,s=this.$refs.sCore.formData,l.next=4,this.$store.dispatch("returnMgt/exportReturnReceiveList",(0,v.Lt)((0,f.Z)({},(0,b.Qg)(s))));case 4:this.$message.success(this.$t("MSG_SUCCESS.export")),l.next=10;break;case 7:l.prev=7,l.t0=l.catch(0),console.error("export table data error: ",l.t0);case 10:case"end":return l.stop()}},t,this,[[0,7]])}));function n(){return d.apply(this,arguments)}return n}(),dropdownOperations:function(n){return this[n]()},showExportHistory:function(){this.visible.exportHistory=!0},onSearch:function(){var d=(0,C.Z)(h().mark(function t(){var s=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},r,l,_,L,i,M,H,Z,I,K,U;return h().wrap(function(p){for(;;)switch(p.prev=p.next){case 0:if(p.prev=0,!this.loading.orderList){p.next=3;break}return p.abrupt("return");case 3:return(0,v.K4)(this,"orderList",!0),r=s.pageno,l=r===void 0?1:r,_=s.count,L=_===void 0?this.tableData.count||e.L8:_,s.pageno||(s.pageno=1),s.count||(s.count=e.L8),p.next=9,this.$store.dispatch("returnMgt/loadReturnReceiveList",(0,f.Z)({},s,this.basicParams));case 9:i=p.sent,M=i.data,H=M===void 0?{}:M,Z=H.list,I=Z===void 0?[]:Z,K=H.total,U=(0,g.Z)(H,["list","total"]),this.tableData=(0,f.Z)({},U,{list:I,total:K,pageno:l,count:L}),p.next=19;break;case 16:p.prev=16,p.t0=p.catch(0),console.error("load table data error: ",p.t0);case 19:return p.prev=19,(0,v.K4)(this,"orderList",!1),p.finish(19);case 22:case"end":return p.stop()}},t,this,[[0,16,19,22]])}));function n(){return d.apply(this,arguments)}return n}(),refreshPage:function(){this.$refs.sCore.refreshList()},onResetAllFilter:function(){this.$refs.sCore.formData.receive_time=w}}};var z=a("4tc8"),N=a("KHd+"),P=(0,N.Z)(S,c,m,!1,null,"8917263a",null);const A=P.exports},"4tc8":(k,u,a)=>{var c=a("ItOn");typeof c=="string"&&(c=[[k.id,c,""]]),c.locals&&(k.exports=c.locals);var m=a("er8A").Z,g=m("5bd72e40",c,!0,{})}}]);
