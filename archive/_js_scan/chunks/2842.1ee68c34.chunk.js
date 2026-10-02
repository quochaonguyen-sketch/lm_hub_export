(self.webpackChunkzzz_fms_admin=self.webpackChunkzzz_fms_admin||[]).push([[2842,2999],{"z/YS":(R,_,a)=>{"use strict";a.d(_,{R:()=>g.openNewTab});var g=a("qwp3"),O=a.n(g)},EfbZ:(R,_,a)=>{"use strict";a.d(_,{T:()=>g.formatFixedPointStr});var g=a("bzSh"),O=a.n(g)},gYvu:(R,_,a)=>{"use strict";a.d(_,{VL:()=>P,pk:()=>l,ui:()=>F});var g=a("+Ej1"),O=a.n(g),M=a("lSCD"),j=a.n(M),z=a("UB5X"),N=a.n(z),T=a("EfbZ"),H=a("pqmQ"),V=a("4Jaa"),W=a("GOkr"),I=function(i){return i===0?"Pending":i===1?"N/A":format(i)},D=function(i){if(!i||i===1)return"";var m=i-Date.now()/1e3;return m<0?'<span class="red">Overtime</span>':formatFixedPointStr(m/3600,1)+"H"},f=function(){var i=arguments.length>0&&arguments[0]!==void 0?arguments[0]:"";return i==="Overtime"?'<span class="red">Overtime</span>':i};function x(){var u=arguments.length>0&&arguments[0]!==void 0?arguments[0]:"";return u===""||u.includes("@")?!1:!u.startsWith("sys")}var L=function(i,m){var y=arguments.length>2&&arguments[2]!==void 0?arguments[2]:"",B=arguments.length>3&&arguments[3]!==void 0?arguments[3]:{};if(isFunction(i)){var A=safeGet(m.$store.state,"enums.systemEnums.user_status"),$=B.operator_status===A.DISABLED;return y.includes("@")&&$?i("span",[y+" [Invalid]"]):x(y)?i("div",[i("span",[y]),i("s-popover",{attrs:{content:"This TO is processed by ASM. Other users are allowed to operate this TO, the operator name will be updated accordingly.",placement:"top",trigger:"hover",width:"320"}},[i("s-icon",{attrs:{name:"notice-circle",title:""},slot:"reference",style:"margin-left: 4px;"})])]):i("span",[y])}},F=function(){var i=arguments.length>0&&arguments[0]!==void 0?arguments[0]:"",m=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"",y=i===""?"":"["+i+"]";return y+" "+m},P=function(i){return N()(i)?i.toLocaleString("en-US"):[void 0,null].includes(i)?"-":i},C=function(i){return i===void 0?"-":isNumber(i)?i.toLocaleString("en-US"):i},h=function(i,m){return isNumber(m)?getRenderValue(i.state,"enums.systemEnums.order_payment_method",m):"-"},k={Forward:"#1CC461",Return:"#FFB014",Unknown:"#EE4D2D"},v=function(i){var m=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"";if(!m)return"/";var y=k[m];return i("span",{class:"journey-type"},[i("span",{class:"journey-type-dot",style:{background:y}}),m])};function l(u){if(!u)return"-";if(W.G){var i=+u;return O()(i)?"-":Math.round(i).toLocaleString("TWD")}return u}},lbDH:(R,_,a)=>{"use strict";a.d(_,{E5:()=>V,F6:()=>W,b5:()=>H});var g=a("sk9p"),O=a("QbLZ"),M=a("jo6Y"),j=a("lSCD"),z=a.n(j),N=a("pqmQ"),T=a("4Jaa");function H(I,D){var f=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},x=f.render,L=f.filter,F=f.inTable,P=F===void 0?!0:F,C=f.hide,h=C===void 0?!1:C,k=(0,M.Z)(f,["render","filter","inTable","hide"]),v=(0,O.Z)({},k,{filter:L,hide:h||!P,key:D,label:I,render:x});return v}function V(I,D){var f=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},x=f.width,L=f.filterProps,F=L===void 0?{}:L,P=f.props,C=P===void 0?{}:P,h=f.render,k=f.sortable,v=f.defaultValue,l=f.inTable,u=l===void 0?!0:l,i=f.hide,m=i===void 0?!1:i,y=f.icon,B=f.filter,A=B===void 0?!0:B,$=(0,M.Z)(f,["width","filterProps","props","render","sortable","defaultValue","inTable","hide","icon","filter"]);return(0,O.Z)({},$,{defaultValue:v},A?{filter:(0,O.Z)({type:"datetime",unit:"datetimerange"},F)}:{},{hide:m||!u,icon:y,key:D,label:I,props:C,render:function(U,n){return z()(h)?h(n,U):typeof n=="string"?n==="/"||!n?"-":n:(0,T.MK)(n)},sortable:k,width:x||160})}function W(I,D){var f=this,x=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},L=x.options,F=L===void 0?[]:L,P=x.render,C=x.mapping,h=x.props,k=h===void 0?{}:h,v=x.inTable,l=v===void 0?!0:v,u=x.hide,i=u===void 0?!1:u,m=x.filter,y=m===void 0?!0:m,B=(0,M.Z)(x,["options","render","mapping","props","inTable","hide","filter"]),A=z()(F)?F():F,$=P;if(Array.isArray(C)){var G=(0,g.Z)(C,2),U=G[0],n=G[1];U==="enums"&&(A=(0,N.jw)(this.$store.state,{dataPath:"enums.systemEnums."+n}),z()(P)||($=function(c,K){return(0,N.BK)(f.$store.state,"enums.systemEnums."+n,K)})),U==="list"&&(A=n,$=function(c,K){var Q=A.filter(function(Y){var q=Y.value;return q===K});return Q.length?Q[0].label:""})}return(0,O.Z)({},B,y?{filter:(0,O.Z)({options:A,type:"select"},k)}:{},{hide:i||!l,key:D,label:I,render:$})}},LsGc:(R,_,a)=>{var g=a("JPst");_=g(!1),_.push([R.id,`.order-management-wrap[data-v-6e8fc494] {
  height: 100%;
}
ul[data-v-6e8fc494] {
  padding: 0;
  margin: 0;
  list-style: none;
}
.button-base[data-v-6e8fc494] {
  padding: 9px 20px;
  font-size: 14px;
  color: #FFFFFF;
}
.spx-button[data-v-6e8fc494] {
  padding: 9px 20px;
  font-size: 14px;
  color: #FFFFFF;
  border-color: #FFFFFF;
  color: #555555;
}
.spx-button[data-v-6e8fc494]:hover {
  background-color: #FFFFFF;
}
.spx-button-primary[data-v-6e8fc494] {
  padding: 9px 20px;
  font-size: 14px;
  color: #FFFFFF;
  background-color: #EE4D2D;
  border-color: #EE4D2D;
}
.ssc-message[data-v-6e8fc494] {
  top: 20px !important;
}
.sp-card > .actions[data-v-6e8fc494] {
  margin-bottom: 10px;
  display: flex;
  flex-wrap: wrap;
}
.sp-card > .actions .right[data-v-6e8fc494] {
  flex: 1;
  text-align: right;
  height: 40px;
}
table th[data-v-6e8fc494] {
  color: rgba(0, 0, 0, 0.85);
  border-color: #EEEEEE;
  font-size: 14px;
  font-weight: 500;
}
.spx-editor .ssc-tag[data-v-6e8fc494] {
  font-size: 12px;
  margin: 0px;
  padding: 0;
}
.spx-editor .ssc-tag .left-padding-span[data-v-6e8fc494] {
  width: 0;
  margin: 0 0 0 8px;
}
.spx-editor .ssc-tag .right-padding-span[data-v-6e8fc494] {
  width: 0;
  margin: 0 8px 0 0;
}
.spx-editor .tag-editor-span[data-v-6e8fc494] {
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
.spx-editor .tag-editor-span .tag-editor-span-space[data-v-6e8fc494] {
  width: 8px;
  height: 15px;
  display: inline-block;
  line-height: 22px;
}
.ssc-tabs-type-pane-card .ssc-tabs-pane[data-v-6e8fc494] {
  background: #FAFAFA;
}
.check-tree[data-v-6e8fc494] {
  margin-left: 80px;
}
.avatar-uploader-icon[data-v-6e8fc494] {
  font-size: 28px;
  color: #8c939d;
  width: 178px;
  height: 178px;
  line-height: 178px;
  text-align: center;
}
.avatar-uploader-icon-small[data-v-6e8fc494] {
  font-size: 14px !important;
  color: #8c939d;
  width: 56px !important;
  height: 56px !important;
  line-height: 56px !important;
  text-align: center;
}
.avatar-uploader-icon-middle[data-v-6e8fc494] {
  font-size: 14px !important;
  color: #8c939d;
  width: 94px !important;
  height: 94px !important;
  line-height: 94px !important;
  text-align: center;
}
.avatar[data-v-6e8fc494] {
  width: 178px;
  height: 178px;
  display: block;
}
.avatar-small[data-v-6e8fc494] {
  width: 56px;
  height: 56px;
  display: block;
}
.avatar-middle[data-v-6e8fc494] {
  width: 94px;
  height: 94px;
  display: block;
}
.acribus-sp-tabs[data-v-6e8fc494] {
  padding: 16px 16px 0px;
  border-radius: 6px;
  margin-bottom: -30px;
  background-color: #fff;
}
span.red[data-v-6e8fc494] {
  color: #F56C6C;
}
span.green[data-v-6e8fc494] {
  color: #67C23A;
}
.sp-hooks[data-v-6e8fc494] {
  overflow: hidden;
}
.text-link[data-v-6e8fc494] {
  color: #409eff;
  cursor: pointer;
}
.text-warning[data-v-6e8fc494] {
  color: #e80808;
}
.help-text[data-v-6e8fc494] {
  cursor: help;
}
.driver-performance-flag-A[data-v-6e8fc494] {
  color: #55CC77;
}
.driver-performance-flag-B[data-v-6e8fc494] {
  color: #999;
}
.driver-performance-flag-C[data-v-6e8fc494] {
  color: #FF4742;
}
/* [check-in rule] Google map autosuggest result container */
.pac-container[data-v-6e8fc494] {
  z-index: 100000;
}
.action-link[data-v-6e8fc494] {
  color: #2769f0;
  cursor: pointer;
  display: inline-block;
  margin-left: 6px;
}
.action-link[data-v-6e8fc494]:first-child {
  margin-left: 0;
}
.action-link[data-v-6e8fc494]:hover {
  text-decoration: underline;
}
.separate-line[data-v-6e8fc494] {
  height: 0;
  width: 100%;
  border-top: 1px #E9E9E9 solid;
  margin-bottom: 16px;
}
.white-fs-ground[data-v-6e8fc494] {
  padding: 24px;
  background: #fff;
  height: 100%;
}
.white-fs-ground .category-title[data-v-6e8fc494] {
  font-size: 16px;
  font-weight: 500;
  line-height: 16px;
  color: #333;
  margin-top: 56px;
  margin-bottom: 16px;
}
.white-fs-ground .category-title[data-v-6e8fc494]:first-child {
  margin-top: 16px;
}
.white-fs-ground .category-title[data-v-6e8fc494]:before {
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
.page-table-container[data-v-6e8fc494] {
  border: 1px solid #eee;
}
.form-body-center[data-v-6e8fc494] {
  margin: 0 auto;
}
.form-body-left[data-v-6e8fc494] {
  margin: 0;
}
.dialog-footer[data-v-6e8fc494],
.footer-submit[data-v-6e8fc494] {
  margin-top: 32px;
}
.dialog-footer .ssc-button[data-v-6e8fc494],
.footer-submit .ssc-button[data-v-6e8fc494] {
  margin-left: 16px;
}
.dialog-footer .ssc-button[data-v-6e8fc494]:first-child,
.footer-submit .ssc-button[data-v-6e8fc494]:first-child {
  margin-left: 0;
}
.text-center[data-v-6e8fc494] {
  text-align: center;
}
.s-form-textarea .ssc-textarea[data-v-6e8fc494],
.ssc-form-item .ssc-select[data-v-6e8fc494],
.ssc-form-item .ssc-input-size-medium[data-v-6e8fc494] {
  width: 320px;
}
.ssc-steps.is-horizontal[data-v-6e8fc494] {
  width: 60%;
  margin: 23px auto;
}
.action-wrap[data-v-6e8fc494] {
  display: flex;
  margin: 10px 0;
}
.action-wrap .actions[data-v-6e8fc494] {
  flex: 1;
}
.action-wrap .actions .ssc-button[data-v-6e8fc494] {
  margin-right: 16px;
}
.action-wrap .upload-route-log-info[data-v-6e8fc494] {
  align-self: center;
  text-align: right;
  flex: 1;
}
.action-wrap .upload-route-log-info label[data-v-6e8fc494] {
  margin-right: 8px;
}
.upload-log-table[data-v-6e8fc494] {
  margin: 10px 0;
}
.group-route-list-info[data-v-6e8fc494] {
  line-height: 40px;
}
.group-route-list-info label[data-v-6e8fc494] {
  margin-right: 10px;
}
.mass-upload-input-footer[data-v-6e8fc494] {
  margin-top: 32px;
}
.mass-upload-input-footer .ssc-button[data-v-6e8fc494] {
  margin-right: 10px;
}
.add-range-btn[data-v-6e8fc494] {
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
.add-range-btn[data-v-6e8fc494]:hover {
  background: #f6f6f6;
}
.range-wrap[data-v-6e8fc494] {
  padding: 16px;
}
.range-wrap .seq-tag[data-v-6e8fc494] {
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
.range-wrap .icon-del[data-v-6e8fc494] {
  line-height: 32px;
  width: 24px;
  height: 24px;
  cursor: pointer;
  color: #bbb;
}
.range-wrap .icon-del[data-v-6e8fc494]:hover {
  color: #888;
}
.bg-fafafa[data-v-6e8fc494] {
  background: #fafafa;
}
.ssc-step-main-title[data-v-6e8fc494] {
  line-height: 1.5;
}
.ssc-form-item-error-tip[data-v-6e8fc494] {
  white-space: nowrap;
}
.ssc-table-header .ssc-table-header-title[data-v-6e8fc494] {
  height: 100%;
}
.ssc-table-header .ssc-table-header-column-container[data-v-6e8fc494] {
  height: 100%;
}
.ssc-table-body .ssc-table-header-column-container .td-content[data-v-6e8fc494] {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.acribus-text-ellipsis[data-v-6e8fc494] {
  display: inline-block;
  width: 100%;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.station-tree-container .ssc-form-item-content[data-v-6e8fc494] {
  flex-direction: column;
  position: relative;
}
.station-tree-container .ssc-form-item-content .tree[data-v-6e8fc494] {
  min-width: 318px;
  display: block;
  margin-top: 20px;
}
.station-tree-container .ssc-form-item-content .tree.has-search-input[data-v-6e8fc494] {
  padding-top: 40px;
}
.station-tree-container .ssc-form-item-content .tree-input[data-v-6e8fc494] {
  position: absolute;
  left: 3%;
  top: 30px;
  z-index: 1;
  width: 94%;
  margin: 0 auto;
  color: #aeaeae;
}
.ssc-dropdown-menu[data-v-6e8fc494] {
  min-width: 176px;
  max-width: 320px;
  z-index: 2;
}
.ssc-dropdown-menu .active[data-v-6e8fc494] {
  color: #EE4D2D;
  font-weight: 500;
}
.detail-part-title[data-v-6e8fc494] {
  font-size: 18px;
  color: #333333;
  font-weight: 500;
  margin-bottom: 16px;
}
.detail-part-title.additional-info[data-v-6e8fc494] {
  margin-top: 56px;
}
.detail-part-title[data-v-6e8fc494]::before {
  content: '';
  width: 2px;
  height: 10px;
  background: #EE4D2D;
  display: inline-block;
  margin-right: 6px;
}
.page-wrapper[data-v-6e8fc494] {
  height: 100%;
}
.zone-container button:disabled:not(.btn-prev):not(.btn-next).ssc-btn-type-primary[data-v-6e8fc494] {
  color: #FFF !important;
  background: #EE4D2D !important;
  opacity: 0.5;
}
.pagination-left-total[data-v-6e8fc494] {
  display: flex;
  flex: 1;
}
.common-status[data-v-6e8fc494] {
  line-height: 12px;
  font-weight: 500;
  padding: 3px 4px;
  border-radius: 2px;
  display: inline-block;
  white-space: nowrap;
}
.common-status.status-success[data-v-6e8fc494] {
  background: #ECFFF1;
  color: #1CC461;
}
.common-status.status-disabled[data-v-6e8fc494] {
  color: #646B76;
  background: #F5F6F9;
}
.common-status.status-info[data-v-6e8fc494] {
  color: #3274F7;
  background: #F0F7FF;
}
.common-status.status-danger[data-v-6e8fc494] {
  color: #F32345;
  background: #FFF0F0;
}
.common-status.status-warning[data-v-6e8fc494] {
  background: #FFF8DB;
  color: #FFB014;
}
.common-divide[data-v-6e8fc494] {
  height: 8px;
  background: #F5F6F9;
  margin: 0 -24px;
}
.ssc-scan-toast[data-v-6e8fc494] {
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
.ssc-scan-toast.ssc-scan-toast-success[data-v-6e8fc494] {
  animation-duration: 4.4s;
  animation-name: scanSuccessToast-6e8fc494;
  background: #1CC461;
}
.ssc-scan-toast.ssc-scan-toast-fail[data-v-6e8fc494] {
  background: #F32345;
  animation-duration: 8.4s;
  animation-name: scanFailToast-6e8fc494;
}
.ssc-scan-toast.ssc-scan-toast-notice[data-v-6e8fc494] {
  background: #FFA620;
  animation-duration: 6.4s;
  animation-name: scanFailToast-6e8fc494;
}
.ssc-scan-toast .message-panel[data-v-6e8fc494] {
  display: flex;
  width: 100%;
  align-items: center;
}
.ssc-scan-toast .message-panel .icon[data-v-6e8fc494] {
  margin-right: 18px;
  width: 28px;
  height: 28px;
  flex-shrink: 0;
}
.ssc-scan-toast .message-panel .text[data-v-6e8fc494] {
  display: inline-block;
}
@keyframes scanSuccessToast-6e8fc494 {
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
@keyframes scanFailToast-6e8fc494 {
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
.table-pagination[data-v-6e8fc494] {
  height: 56px;
  border: 1px solid #ECF0F4;
  border-top: 0;
  justify-content: flex-end;
  padding-right: 16px;
}
.journey-type[data-v-6e8fc494] {
  display: flex;
  align-items: center;
}
.journey-type .journey-type-dot[data-v-6e8fc494] {
  width: 6px;
  height: 6px;
  border-radius: 50%;
  display: inline-block;
  margin-right: 8px;
}
.pagination-sticky-bottom[data-v-6e8fc494] {
  background: #fff;
  position: sticky;
  bottom: 16px;
}
.pagination-sticky-bottom[data-v-6e8fc494]:after {
  content: ' ';
  background: #fff;
  width: 100%;
  height: 16px;
  position: absolute;
}
.pagination-sticky-bottom[data-v-6e8fc494] .ssc-pagination {
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
.pagination-sticky-bottom[data-v-6e8fc494] .ssc-pagination .total-container {
  flex: 1;
  margin-left: 15px;
  margin-right: 12px;
}
.sp-card-log-list[data-v-6e8fc494] {
  padding: 16px 24px;
  background: #fff;
  min-height: 100%;
}
.ssc-table-panel .ssc-form-item .ssc-form-item-content textarea[data-v-6e8fc494],
.pro-filter .ssc-form-item .ssc-form-item-content textarea[data-v-6e8fc494] {
  border: transparent;
}
.message-red-text[data-v-6e8fc494] {
  color: #EE4D2D;
  font-weight: 700;
}
`,""]),R.exports=_},BMNN:(R,_,a)=>{"use strict";a.r(_),a.d(_,{default:()=>oe});var g=function(){var e=this,t=e._self._c;return t("div",{staticClass:"order-management-wrap"},[t("s-core",{directives:[{name:"loading",rawName:"v-loading",value:e.loading.list,expression:"loading.list"}],key:e.tabsConfig.value,ref:"sCore",attrs:{tabsConfig:e.tabsConfig,config:e.config,search:e.loadTableData,"table-data":e.orderList,loadTotal:e.loadOrderListTotal}},[t("span",{attrs:{slot:"custom-actions"},slot:"custom-actions"},[e.shouldShowExport?t("s-dropdown",{attrs:{placement:"bottom-start"},on:{command:e.dropdownOperations}},[t("s-button",{staticClass:"batch-actions-btn"},[e._v(`
          `+e._s(e.$gt("Export"))+`
          `),t("s-icon-chevron-down",{staticClass:"dropdown-btn-line-icon"})],1),e._v(" "),t("s-dropdown-menu",{attrs:{slot:"dropdown"},slot:"dropdown"},[t("s-dropdown-item",{attrs:{command:"handleExportClick",type:"text"}},[e._v(e._s(e.$gt("Export")))]),e._v(" "),t("s-dropdown-item",{attrs:{command:"showExportHistory"}},[e._v(e._s(e.$gt("Export History")))])],1)],1):e._e()],1)]),e._v(" "),e.visible.exportHistoryDialog?t("spx-shared-export-history",{attrs:{show:e.visible.exportHistoryDialog,exportType:"p2pOrderListExportHistory"},on:{"update:show":function(s){return e.$set(e.visible,"exportHistoryDialog",s)}}}):e._e(),e._v(" "),e.showExportDialog?t("s-dialog",{attrs:{"append-to-body":!0,visible:e.showExportDialog},on:{"update:visible":function(s){e.showExportDialog=s}}},[t("s-form",{attrs:{schemas:e.exportSchema,form:e.exportForm,confirm:e.exportOrder,actions:e.exportActions}})],1):e._e()],1)},O=[],M=a("jo6Y"),j=a("4d7F"),z=a.n(j),N=a("14Xm"),T=a.n(N),H=a("D3Ub"),V=a("sk9p"),W=a("oF3Q"),I=a.n(W),D=a("QbLZ"),f=a("brkv"),x=a("BkRI"),L=a.n(x),F=a("eCTY"),P=a("w3qy"),C=a("z/YS"),h=a("QsnJ"),k=a("GOkr"),v=a("pqmQ"),l=a("lbDH"),u=a("4Jaa"),i=a("PcDS"),m=a("gYvu"),y=k.YB,B=null,A=null,$=null,G=null,U="/api/admin/p2p/order/search",n={spxTrackingNumber:"SPX Tracking Number",orderSN:"Order SN",estimatedDistance:"Estimated Distance(km)",driverCompensation:"Driver Compensation("+k.oq+")",estimatedPickupTime:"Estimated Pickup Time",driver:"Driver",timeToAutoCancel:"Time to auto cancel",broadcastStartTime:"Broadcast start time",broadcastDuration:"Broadcast duration",orderStatus:"Order Status",pickupFailedReason:"Pickup Failed reason",pickupFailedTime:"Pickup Failed time",cancelledTime:"Cancelled time",deliveryOnHoldReason:"Delivery on-hold reason",deliveryOnHoldTime:"Delivery on-hold time",returnOnHoldReason:"Return on-hold reason",returnOnHoldTime:"Return on-hold time",deliveredTime:"Delivered time",returnedTime:"Returned time",lostTime:"Lost time",damagedTime:"Damaged time"},J=["Created","Pending_Allocation","Picking Up","Delivering","Delivered","Cancelled","Pickup Failed","On-hold","Returning","Returned","Return On Hold","Lost","Damaged"],c=[n.spxTrackingNumber,n.orderSN,n.estimatedDistance,n.driverCompensation,n.estimatedPickupTime,n.driver],K={filterInTable:[].concat(c),inTable:[].concat(c)},Q={All:{filterInTable:[].concat(c,[n.orderStatus]),inTable:[].concat(c,[n.orderStatus])},Created:{filterInTable:[].concat(c,[n.broadcastStartTime]),inTable:[].concat(c,[n.broadcastStartTime])},Pending_Allocation:{filterInTable:[].concat(c,[n.timeToAutoCancel,n.broadcastStartTime,n.broadcastDuration]),inTable:[].concat(c,[n.timeToAutoCancel,n.broadcastStartTime,n.broadcastDuration])},"Picking Up":K,Delivering:K,Delivered:{filterInTable:[].concat(c,[n.deliveredTime]),inTable:[].concat(c,[n.deliveredTime])},Cancelled:{filterInTable:[].concat(c,[n.cancelledTime]),inTable:[].concat(c,[n.cancelledTime])},"Pickup Failed":{filterInTable:[].concat(c,[n.pickupFailedReason,n.pickupFailedTime]),inTable:[].concat(c,[n.pickupFailedReason,n.pickupFailedTime])},"On-hold":{filterInTable:[].concat(c,[n.deliveryOnHoldReason,n.deliveryOnHoldTime]),inTable:[].concat(c,[n.deliveryOnHoldReason,n.deliveryOnHoldTime])},Returning:{filterInTable:[].concat(c,[n.deliveryOnHoldReason]),inTable:[].concat(c,[n.deliveryOnHoldReason])},Returned:{filterInTable:[].concat(c,[n.returnedTime]),inTable:[].concat(c,[n.returnedTime])},"Return On Hold":{filterInTable:[].concat(c,[n.returnOnHoldReason,n.returnOnHoldTime]),inTable:[].concat(c,[n.returnOnHoldReason,n.returnOnHoldTime])},Lost:{filterInTable:[].concat(c,[n.lostTime]),inTable:[].concat(c,[n.lostTime])},Damaged:{filterInTable:[].concat(c,[n.damagedTime]),inTable:[].concat(c,[n.damagedTime])}},Y=function(){var e=new Date,t=e-1e3*7*24*60*60,r=[t,e];return{status:[],expect_pickup_time:r}};const ae={name:"OrderManagement",components:{sForm:P.Z},data:function(){return{showExportDialog:!1,query:{},orderList:{list:[],total:0,lazyPagination:{refreshTime:void 0,isLoadingTotal:!1,loadTotalFailed:!1}},tabsConfig:{value:"all",options:[],onChange:this.handleTabsChange},onHoldReasonList:[],visible:{exportHistoryDialog:!1},loading:{list:!1,export:!1},exportForm:Y()}},computed:(0,D.Z)({},(0,F.mapGetters)(["allDriverList"]),(0,F.mapState)({orderStatusEnum:function(e){return e.enums.systemEnums.p2p_order_status||{}},statusSelectOptions:function(e){return(0,v.jw)(e,{dataPath:"enums.systemEnums.p2p_order_status"})},onHoldReasonTypeEnum:function(e){return e.enums.systemEnums.on_hold_reason.type}}),{driverSelectOptions:function(){return this.allDriverList.map(function(e){var t=e.driver_id,r=e.driver_name;return{label:(0,m.ui)(t,r),value:t}})},onHoldReasonSelectOption:function(){return this.driverList.map(function(e){var t=e.id,r=e.driver_name;return{label:(0,m.ui)(t,r),value:t}})},queryFormSchemas:function(){return[{label:this.$gt("SPX Tracking Number"),key:"shipment_id",type:"input"},{label:"Order SN",key:"shopee_order_sn",type:"input"}]},shouldShowExport:function(){return(0,v.wD)(this.$store,"P2P_EXPORT_ORDER")},tabsValueNameMap:function(){return this.tabsConfig.options.reduce(function(e,t){var r=t.label,s=t.value;return e[s]=r,e},{})},tableSchemaList:function(){var e=this;return[(0,l.b5)(n.spxTrackingNumber,"shipment_id",{width:150}),(0,l.b5)(n.orderSN,"shopee_order_sn",{width:160}),(0,l.b5)(n.estimatedDistance,"delivery_distance",{width:180}),(0,l.b5)(n.driverCompensation,"compensation",{width:190}),(0,l.E5)(n.estimatedPickupTime,"expect_pickup_time",{width:190}),l.F6.call(this,n.driver,"driver_id",{options:this.driverSelectOptions,props:{filterable:!0,remote:!0,remoteMethod:(0,f.debounce)(function(t){var r={count:t?h.IQ:h.Ux};t&&(r.driver_name=t),e.$store.dispatch("loadAllDrivers",r)},h.ut),visibleChange:function(r){r&&e.$store.dispatch("loadAllDrivers",{count:h.Ux})}},render:function(r){return(0,m.ui)(r.driver_id,r.driver_name)},width:170}),l.F6.call(this,n.orderStatus,"status",{options:this.statusSelectOptions,mapping:["enums","p2p_order_status"]}),(0,l.b5)(n.timeToAutoCancel,"remaining_scheduing_time",{filter:{type:"number",min:0}}),(0,l.E5)(n.broadcastStartTime,"broadcast_start_time"),(0,l.b5)(n.broadcastDuration,"broadcast_duration_time",{filter:{type:"number",min:0},width:240}),l.F6.call(this,n.pickupFailedReason,"pickup_fail_reason",{options:this.getOnHoldReasonSelectOptions(this.onHoldReasonTypeEnum.P2P_PICKUP_FAIL),render:function(r){return r.on_hold_reason__desc},width:240}),(0,l.E5)(n.pickupFailedTime,"pickup_failed_time"),(0,l.E5)(n.cancelledTime,"cancelled_time"),l.F6.call(this,n.deliveryOnHoldReason,"delivery_on_hold_reason",{options:this.getOnHoldReasonSelectOptions(this.onHoldReasonTypeEnum.P2P_DELIVERY_ON_HOLD),render:function(r){return r.on_hold_reason__desc},width:240}),(0,l.E5)(n.deliveryOnHoldTime,"delivery_on_hold_time",{render:function(r,s){return(0,u.MK)(s.on_hold_time)}}),l.F6.call(this,n.returnOnHoldReason,"return_on_hold_reason",{options:this.getOnHoldReasonSelectOptions(this.onHoldReasonTypeEnum.P2P_RETURN_ON_HOLD),render:function(r){return r.on_hold_reason__desc},width:240}),(0,l.E5)(n.returnOnHoldTime,"return_on_hold_time",{render:function(r,s){return(0,u.MK)(s.on_hold_time)}}),(0,l.E5)(n.deliveredTime,"delivered_time"),(0,l.E5)(n.returnedTime,"returned_time"),(0,l.E5)(n.lostTime,"lost_time"),(0,l.E5)(n.damagedTime,"damaged_time")]},tableSchemaMap:function(){return this.tableSchemaList.reduce(function(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=t.label;return e[r]=t,e},{})},tableColumns:function(){var e=this,t=this.tabsValueNameMap[this.tabsConfig.value],r=Q[t]||{},s=r.inTable||[],d=r.filterInTable||[];return s.reduce(function(b,w){var p=L()(e.tableSchemaMap[w]);return d.includes(w)||delete p.filter,p&&b.push(p),b},[])},config:function(){return{trimInputValue:!0,form:this.queryFormSchemas,table:{width:1300,actionsWidth:80,columns:this.tableColumns,useLazyPagination:!0,showJumper:!1,actions:[{label:this.$gt("View"),click:this.linkToOrderDetail}]}}},exportActions:function(){return[{label:"Cancel",handler:this.closeExportDialog}]},exportSchema:function(){var e=["Return On Hold","On-hold"],t=I()(this.orderStatusEnum).reduce(function(d,b){var w=(0,V.Z)(b,2),p=w[0],Z=w[1];return e.includes(p)&&d.push(Number(Z)),d},[]),r=!0;this.exportForm.status.length&&this.exportForm.status.length<=e.length?r=!this.exportForm.status.every(function(d){return t.includes(d)}):r=!0;var s=(0,v.wH)(this.orderStatusEnum);return[{label:"Order Status",key:"status",type:"tree",selectOptions:s},{label:"Scheduled Pickup Time",key:"expect_pickup_time",type:"datetimerange",options:{value:[]}},{label:"Finished Time",key:"final_status_time",type:"datetimerange"},{label:"Onhold Time",key:"on_hold_time",type:"datetimerange",disabled:r}]}}),created:function(){var o=(0,H.Z)(T().mark(function t(){return T().wrap(function(s){for(;;)switch(s.prev=s.next){case 0:return this.prepareState(),s.next=3,this.$store.dispatch("lazyPagination/resetLazyPagination");case 3:return s.next=5,this.loadTableData({count:h.L8});case 5:case"end":return s.stop()}},t,this)}));function e(){return o.apply(this,arguments)}return e}(),mounted:function(){this.$route.query.returnOnHoldReason&&(this.$refs.sCore.formData.return_on_hold_reason=Number(this.$route.query.returnOnHoldReason))},methods:{showExportHistory:function(){this.visible.exportHistoryDialog=!0},dropdownOperations:function(e){return this[e]()},closeExportDialog:function(){this.showExportDialog=!1},handleExportClick:function(){if(!y){this.exportOrder();return}this.showExportDialog=!0},exportOrder:function(){var o=(0,H.Z)(T().mark(function t(){var r;return T().wrap(function(d){for(;;)switch(d.prev=d.next){case 0:return d.prev=0,(0,v.K4)(this,"export",!0),r=(0,D.Z)({},this.exportForm,{status:(0,i.Ao)(this.exportForm.status)}),d.next=5,this.$store.dispatch("orderMgt/exportP2POrder",(0,u.Qg)((0,v.Lt)(r)));case 5:this.$message.success(h.Lz.base),this.exportForm=Y(),this.closeExportDialog(),d.next=13;break;case 10:d.prev=10,d.t0=d.catch(0),console.error("export order error: ",d.t0);case 13:return d.prev=13,(0,v.K4)(this,"export",!1),d.finish(13);case 16:case"end":return d.stop()}},t,this,[[0,10,13,16]])}));function e(){return o.apply(this,arguments)}return e}(),loadTableData:function(){var o=(0,H.Z)(T().mark(function t(){var r=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return T().wrap(function(d){for(;;)switch(d.prev=d.next){case 0:return d.abrupt("return",z().all([this.loadOrderListTotal(r),this.loadOrderList(r)]));case 1:case"end":return d.stop()}},t,this)}));function e(){return o.apply(this,arguments)}return e}(),formatParams:function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},t=(0,D.Z)({},e);return"remaining_scheduing_time"in t&&(t.remaining_scheduing_time=[0,t.remaining_scheduing_time].toString()),"broadcast_duration_time"in t&&(t.broadcast_duration_time=[0,t.broadcast_duration_time].toString()),this.tabsConfig.value!=="all"&&(t.status=this.tabsConfig.value),(0,u.Qg)((0,v.Lt)(t),!0)},loadOrderList:function(){var o=(0,H.Z)(T().mark(function t(){var r=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},s,d,b,w,p,Z,E,X,ee,ne;return T().wrap(function(S){for(;;)switch(S.prev=S.next){case 0:return S.prev=0,(0,v.K4)(this,"list",!0),s=r.pageno,d=s===void 0?1:s,b=r.count,w=b===void 0?this.orderList.count||h.L8:b,S.next=5,this.$store.dispatch("orderMgt/loadP2POrderList",(0,D.Z)({},this.formatParams(r),{fetch_total:0,fetch_list:1}));case 5:p=S.sent,Z=p.data,E=Z===void 0?{}:Z,X=E.list,ee=X===void 0?[]:X,ne=(0,M.Z)(E,["list"]),this.orderList=(0,D.Z)({},this.orderList,{list:ee.map(function(te){var se=te.order_id,de=(0,M.Z)(te,["order_id"]);return(0,D.Z)({},de,{shipment_id:se})}),pageno:d,count:w},ne),S.next=15;break;case 12:S.prev=12,S.t0=S.catch(0),console.error("load order list error: ",S.t0);case 15:return S.prev=15,(0,v.K4)(this,"list",!1),S.finish(15);case 18:case"end":return S.stop()}},t,this,[[0,12,15,18]])}));function e(){return o.apply(this,arguments)}return e}(),loadOrderListTotal:function(){var o=(0,H.Z)(T().mark(function t(){var r=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},s,d,b;return T().wrap(function(p){for(;;)switch(p.prev=p.next){case 0:return p.prev=0,s=this.$store,this.orderList.lazyPagination={isLoadingTotal:!0,loadTotalFailed:!1},this.orderList.total=(r.count||h.L8)*h.QS,d=this.formatParams(r),p.next=7,s.dispatch("lazyPagination/fetchTotal",{xhrParams:(0,v.Lt)(d),url:U,ignoreParams:!0});case 7:b=p.sent,b&&b.data&&(this.orderList.total=b.data.total,this.orderList.lazyPagination.refreshTime=b.data.refresh_total_time,this.orderList.lazyPagination.isLoadingTotal=!1),p.next=16;break;case 11:p.prev=11,p.t0=p.catch(0),console.error("load p2p order list error: ",p.t0),this.orderList.lazyPagination.loadTotalFailed=!0,this.orderList.lazyPagination.isLoadingTotal=!1;case 16:case"end":return p.stop()}},t,this,[[0,11]])}));function e(){return o.apply(this,arguments)}return e}(),handleTabsChange:function(e){var t={count:h.L8};e!=="all"&&(t.status=e),this.loadTableData(t)},linkToOrderDetail:function(e,t){var r="/p2pOrderDetail/"+t.shipment_id+"?module=p2pOrderDetail&stationType=P2P";C.R.call(this,r,"orderDetail")},loadOnHoldReasonList:function(){var o=(0,H.Z)(T().mark(function t(){var r,s,d,b,w,p;return T().wrap(function(E){for(;;)switch(E.prev=E.next){case 0:return E.prev=0,r={count:h.qc},E.next=4,this.$store.dispatch("onHoldReasonMgt/loadOnHoldReasonList",(0,v.Lt)(r));case 4:s=E.sent,d=s.data,b=d===void 0?{}:d,w=b.list,p=w===void 0?[]:w,this.onHoldReasonList=p,E.next=14;break;case 11:E.prev=11,E.t0=E.catch(0),console.error("load on hold reason list error: ",E.t0);case 14:case"end":return E.stop()}},t,this,[[0,11]])}));function e(){return o.apply(this,arguments)}return e}(),prepareState:function(){var e=this;if(this.$route.query.activeTab){var t=decodeURIComponent(this.$route.query.activeTab);this.tabsConfig.value=""+this.orderStatusEnum[t]}this.tabsConfig.options=J.reduce(function(r,s){return e.orderStatusEnum[s]!==void 0&&r.push({label:s,value:e.orderStatusEnum[s]+""}),r},[{label:"All",value:"all"}]),this.$store.dispatch("loadAllDrivers",{count:h.Ux}),this.loadOnHoldReasonList()},getOnHoldReasonSelectOptions:function(e){return this.onHoldReasonList.reduce(function(t,r){var s=r.name,d=r.code,b=r.type;return e===b&&t.push({label:s,value:d}),t},[])}}};var le=a("oT72"),re=a("KHd+"),ie=(0,re.Z)(ae,g,O,!1,null,"6e8fc494",null);const oe=ie.exports},oT72:(R,_,a)=>{var g=a("LsGc");typeof g=="string"&&(g=[[R.id,g,""]]),g.locals&&(R.exports=g.locals);var O=a("er8A").Z,M=O("7b5f58a0",g,!0,{})}}]);
