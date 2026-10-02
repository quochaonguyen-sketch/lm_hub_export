(self.webpackChunkzzz_fms_admin=self.webpackChunkzzz_fms_admin||[]).push([[9759,2999],{lBHn:(D,v,s)=>{"use strict";s.d(v,{D4:()=>x,Mm:()=>_,_X:()=>C,aR:()=>p,fT:()=>O,sy:()=>S,x8:()=>I});var i=s("EA14");function C(){var d=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return i.Z.get("/api/container/admin/practicalpack/list",{params:d})}function N(){var d=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return request.get("/api/container/admin/practicalpack/detail",{params:d})}function p(){var d=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return i.Z.get("/api/container/admin/practicalpack/oplog/list",{params:d})}function S(){var d=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return i.Z.post("/api/container/admin/practicalpack/create",d)}function _(){var d=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return i.Z.post("/api/container/admin/practicalpack/update/status",d)}function x(){var d=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return i.Z.post("/api/container/admin/practicalpack/export",d)}function f(){var d=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return request.get("/api/container/admin/practicalpack/export/history",{params:d})}function O(){var d=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return i.Z.post("/api/container/admin/practicalpack/update/pin_status",d)}function I(){var d=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return i.Z.post("/api/container/admin/practicalpack/update/info",d)}},nC2w:(D,v,s)=>{"use strict";s.r(v),s.d(v,{useEnumsMappingOptions:()=>K,useLoadingWrapper:()=>Y,useMappingOptions:()=>U,useMessage:()=>B,useRef:()=>$});var i=s("14Xm"),C=s.n(i),N=s("D3Ub"),p=s("QbLZ"),S=s("sk9p"),_=s("oF3Q"),x=s.n(_),f=s("fp3J"),O=s.n(f),I=s("J/PD"),d=s.n(I),F=s("dQCL"),E=s.n(F),b=s("8YQ5"),A=void 0,$=function(y){var m=(0,f.ref)(y),P=function(w){m.value=w};return[m,P]},B=function(){return{message:F.Message.service,confirm:F.MessageBox.service.confirm,alert:F.MessageBox.service.alert,prompt:F.MessageBox.service.prompt,msgbox:F.MessageBox.service.msgbox}},U=function(y){var m=(0,f.unref)(y),P=d()(m),L=x()(m).map(function(w){var Z=(0,S.Z)(w,2),V=Z[0],G=Z[1];return{label:V,value:G}});return{mapping:P,options:L}},K=function(y){var m=(0,f.computed)(function(){return(0,b.aJ)().store[y]||{}});return(0,p.Z)({enums:m},U(m))},Y=function(y,m,P){var L=$(!1),w=(0,S.Z)(L,2),Z=w[0],V=w[1],G=$(null),T=(0,S.Z)(G,2),Q=T[0],W=T[1],aa=function(){var J=(0,N.Z)(C().mark(function X(j){return C().wrap(function(k){for(;;)switch(k.prev=k.next){case 0:return k.prev=0,W(null),V(!0),m&&m(),k.next=6,y(j);case 6:return k.abrupt("return",k.sent);case 9:k.prev=9,k.t0=k.catch(0),console.error(y.name+" error: "+k.t0.message),W(k.t0);case 13:return k.prev=13,P&&P(),V(!1),k.finish(13);case 17:case"end":return k.stop()}},X,A,[[0,9,13,17]])}));return function(j){return J.apply(this,arguments)}}();return{error:Q,loading:Z,loadingWrappedFunc:aa}}},vMZb:(D,v,s)=>{"use strict";s.d(v,{$4:()=>m,A6:()=>O,EO:()=>f,G$:()=>z,HH:()=>y,H_:()=>b,LN:()=>L,M8:()=>x,NI:()=>Y,XC:()=>A,Z7:()=>U,b3:()=>p,gA:()=>B,m4:()=>K,n6:()=>_,oh:()=>S,r_:()=>P,vB:()=>F,wr:()=>$});var i=s("GOkr"),C=null,N=null,p=i.gY,S=!1,_=i.G7,x=i.G7,f=!1,O=!1,I=null,d=null,F=i.G7,E=i.YB||i.vh||i.qD||i.gY||i.xN||i.fZ,b=i.G7||E,A=i.G7||i.Ai,$=i.YB||i.vh||i.qD||i.gY||i.fZ||i.xN,B=i.YB||i.vh||i.qD||i.gY||i.fZ||i.xN,U=E||i.G,K=i.G7,Y=i.G7,z=i.YB||i.xN||i.qD||i.G7,y=E,m=i.gY,P=!i.gY,L=i.G7},"c/Q+":(D,v,s)=>{var i=s("JPst");v=i(!1),v.push([D.id,`.to-pack-configuration-create[data-v-1866e6a5] .ssc-select,
.to-pack-configuration-create[data-v-1866e6a5] .ssc-input {
  width: 351px !important;
}
.to-pack-configuration-create-footer[data-v-1866e6a5] {
  float: right;
  margin: 0;
}
.to-pack-configuration-create-footer[data-v-1866e6a5] .ssc-button {
  margin-left: 16px;
}
ul[data-v-1866e6a5] {
  padding: 0;
  margin: 0;
  list-style: none;
}
.button-base[data-v-1866e6a5] {
  padding: 9px 20px;
  font-size: 14px;
  color: #FFFFFF;
}
.spx-button[data-v-1866e6a5] {
  padding: 9px 20px;
  font-size: 14px;
  color: #FFFFFF;
  border-color: #FFFFFF;
  color: #555555;
}
.spx-button[data-v-1866e6a5]:hover {
  background-color: #FFFFFF;
}
.spx-button-primary[data-v-1866e6a5] {
  padding: 9px 20px;
  font-size: 14px;
  color: #FFFFFF;
  background-color: #EE4D2D;
  border-color: #EE4D2D;
}
.ssc-message[data-v-1866e6a5] {
  top: 20px !important;
}
.sp-card > .actions[data-v-1866e6a5] {
  margin-bottom: 10px;
  display: flex;
  flex-wrap: wrap;
}
.sp-card > .actions .right[data-v-1866e6a5] {
  flex: 1;
  text-align: right;
  height: 40px;
}
table th[data-v-1866e6a5] {
  color: rgba(0, 0, 0, 0.85);
  border-color: #EEEEEE;
  font-size: 14px;
  font-weight: 500;
}
.spx-editor .ssc-tag[data-v-1866e6a5] {
  font-size: 12px;
  margin: 0px;
  padding: 0;
}
.spx-editor .ssc-tag .left-padding-span[data-v-1866e6a5] {
  width: 0;
  margin: 0 0 0 8px;
}
.spx-editor .ssc-tag .right-padding-span[data-v-1866e6a5] {
  width: 0;
  margin: 0 8px 0 0;
}
.spx-editor .tag-editor-span[data-v-1866e6a5] {
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
.spx-editor .tag-editor-span .tag-editor-span-space[data-v-1866e6a5] {
  width: 8px;
  height: 15px;
  display: inline-block;
  line-height: 22px;
}
.ssc-tabs-type-pane-card .ssc-tabs-pane[data-v-1866e6a5] {
  background: #FAFAFA;
}
.check-tree[data-v-1866e6a5] {
  margin-left: 80px;
}
.avatar-uploader-icon[data-v-1866e6a5] {
  font-size: 28px;
  color: #8c939d;
  width: 178px;
  height: 178px;
  line-height: 178px;
  text-align: center;
}
.avatar-uploader-icon-small[data-v-1866e6a5] {
  font-size: 14px !important;
  color: #8c939d;
  width: 56px !important;
  height: 56px !important;
  line-height: 56px !important;
  text-align: center;
}
.avatar-uploader-icon-middle[data-v-1866e6a5] {
  font-size: 14px !important;
  color: #8c939d;
  width: 94px !important;
  height: 94px !important;
  line-height: 94px !important;
  text-align: center;
}
.avatar[data-v-1866e6a5] {
  width: 178px;
  height: 178px;
  display: block;
}
.avatar-small[data-v-1866e6a5] {
  width: 56px;
  height: 56px;
  display: block;
}
.avatar-middle[data-v-1866e6a5] {
  width: 94px;
  height: 94px;
  display: block;
}
.acribus-sp-tabs[data-v-1866e6a5] {
  padding: 16px 16px 0px;
  border-radius: 6px;
  margin-bottom: -30px;
  background-color: #fff;
}
span.red[data-v-1866e6a5] {
  color: #F56C6C;
}
span.green[data-v-1866e6a5] {
  color: #67C23A;
}
.sp-hooks[data-v-1866e6a5] {
  overflow: hidden;
}
.text-link[data-v-1866e6a5] {
  color: #409eff;
  cursor: pointer;
}
.text-warning[data-v-1866e6a5] {
  color: #e80808;
}
.help-text[data-v-1866e6a5] {
  cursor: help;
}
.driver-performance-flag-A[data-v-1866e6a5] {
  color: #55CC77;
}
.driver-performance-flag-B[data-v-1866e6a5] {
  color: #999;
}
.driver-performance-flag-C[data-v-1866e6a5] {
  color: #FF4742;
}
/* [check-in rule] Google map autosuggest result container */
.pac-container[data-v-1866e6a5] {
  z-index: 100000;
}
.action-link[data-v-1866e6a5] {
  color: #2769f0;
  cursor: pointer;
  display: inline-block;
  margin-left: 6px;
}
.action-link[data-v-1866e6a5]:first-child {
  margin-left: 0;
}
.action-link[data-v-1866e6a5]:hover {
  text-decoration: underline;
}
.separate-line[data-v-1866e6a5] {
  height: 0;
  width: 100%;
  border-top: 1px #E9E9E9 solid;
  margin-bottom: 16px;
}
.white-fs-ground[data-v-1866e6a5] {
  padding: 24px;
  background: #fff;
  height: 100%;
}
.white-fs-ground .category-title[data-v-1866e6a5] {
  font-size: 16px;
  font-weight: 500;
  line-height: 16px;
  color: #333;
  margin-top: 56px;
  margin-bottom: 16px;
}
.white-fs-ground .category-title[data-v-1866e6a5]:first-child {
  margin-top: 16px;
}
.white-fs-ground .category-title[data-v-1866e6a5]:before {
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
.page-table-container[data-v-1866e6a5] {
  border: 1px solid #eee;
}
.form-body-center[data-v-1866e6a5] {
  margin: 0 auto;
}
.form-body-left[data-v-1866e6a5] {
  margin: 0;
}
.dialog-footer[data-v-1866e6a5],
.footer-submit[data-v-1866e6a5] {
  margin-top: 32px;
}
.dialog-footer .ssc-button[data-v-1866e6a5],
.footer-submit .ssc-button[data-v-1866e6a5] {
  margin-left: 16px;
}
.dialog-footer .ssc-button[data-v-1866e6a5]:first-child,
.footer-submit .ssc-button[data-v-1866e6a5]:first-child {
  margin-left: 0;
}
.text-center[data-v-1866e6a5] {
  text-align: center;
}
.s-form-textarea .ssc-textarea[data-v-1866e6a5],
.ssc-form-item .ssc-select[data-v-1866e6a5],
.ssc-form-item .ssc-input-size-medium[data-v-1866e6a5] {
  width: 320px;
}
.ssc-steps.is-horizontal[data-v-1866e6a5] {
  width: 60%;
  margin: 23px auto;
}
.action-wrap[data-v-1866e6a5] {
  display: flex;
  margin: 10px 0;
}
.action-wrap .actions[data-v-1866e6a5] {
  flex: 1;
}
.action-wrap .actions .ssc-button[data-v-1866e6a5] {
  margin-right: 16px;
}
.action-wrap .upload-route-log-info[data-v-1866e6a5] {
  align-self: center;
  text-align: right;
  flex: 1;
}
.action-wrap .upload-route-log-info label[data-v-1866e6a5] {
  margin-right: 8px;
}
.upload-log-table[data-v-1866e6a5] {
  margin: 10px 0;
}
.group-route-list-info[data-v-1866e6a5] {
  line-height: 40px;
}
.group-route-list-info label[data-v-1866e6a5] {
  margin-right: 10px;
}
.mass-upload-input-footer[data-v-1866e6a5] {
  margin-top: 32px;
}
.mass-upload-input-footer .ssc-button[data-v-1866e6a5] {
  margin-right: 10px;
}
.add-range-btn[data-v-1866e6a5] {
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
.add-range-btn[data-v-1866e6a5]:hover {
  background: #f6f6f6;
}
.range-wrap[data-v-1866e6a5] {
  padding: 16px;
}
.range-wrap .seq-tag[data-v-1866e6a5] {
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
.range-wrap .icon-del[data-v-1866e6a5] {
  line-height: 32px;
  width: 24px;
  height: 24px;
  cursor: pointer;
  color: #bbb;
}
.range-wrap .icon-del[data-v-1866e6a5]:hover {
  color: #888;
}
.bg-fafafa[data-v-1866e6a5] {
  background: #fafafa;
}
.ssc-step-main-title[data-v-1866e6a5] {
  line-height: 1.5;
}
.ssc-form-item-error-tip[data-v-1866e6a5] {
  white-space: nowrap;
}
.ssc-table-header .ssc-table-header-title[data-v-1866e6a5] {
  height: 100%;
}
.ssc-table-header .ssc-table-header-column-container[data-v-1866e6a5] {
  height: 100%;
}
.ssc-table-body .ssc-table-header-column-container .td-content[data-v-1866e6a5] {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.acribus-text-ellipsis[data-v-1866e6a5] {
  display: inline-block;
  width: 100%;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.station-tree-container .ssc-form-item-content[data-v-1866e6a5] {
  flex-direction: column;
  position: relative;
}
.station-tree-container .ssc-form-item-content .tree[data-v-1866e6a5] {
  min-width: 318px;
  display: block;
  margin-top: 20px;
}
.station-tree-container .ssc-form-item-content .tree.has-search-input[data-v-1866e6a5] {
  padding-top: 40px;
}
.station-tree-container .ssc-form-item-content .tree-input[data-v-1866e6a5] {
  position: absolute;
  left: 3%;
  top: 30px;
  z-index: 1;
  width: 94%;
  margin: 0 auto;
  color: #aeaeae;
}
.ssc-dropdown-menu[data-v-1866e6a5] {
  min-width: 176px;
  max-width: 320px;
  z-index: 2;
}
.ssc-dropdown-menu .active[data-v-1866e6a5] {
  color: #EE4D2D;
  font-weight: 500;
}
.detail-part-title[data-v-1866e6a5] {
  font-size: 18px;
  color: #333333;
  font-weight: 500;
  margin-bottom: 16px;
}
.detail-part-title.additional-info[data-v-1866e6a5] {
  margin-top: 56px;
}
.detail-part-title[data-v-1866e6a5]::before {
  content: '';
  width: 2px;
  height: 10px;
  background: #EE4D2D;
  display: inline-block;
  margin-right: 6px;
}
.page-wrapper[data-v-1866e6a5] {
  height: 100%;
}
.zone-container button:disabled:not(.btn-prev):not(.btn-next).ssc-btn-type-primary[data-v-1866e6a5] {
  color: #FFF !important;
  background: #EE4D2D !important;
  opacity: 0.5;
}
.pagination-left-total[data-v-1866e6a5] {
  display: flex;
  flex: 1;
}
.common-status[data-v-1866e6a5] {
  line-height: 12px;
  font-weight: 500;
  padding: 3px 4px;
  border-radius: 2px;
  display: inline-block;
  white-space: nowrap;
}
.common-status.status-success[data-v-1866e6a5] {
  background: #ECFFF1;
  color: #1CC461;
}
.common-status.status-disabled[data-v-1866e6a5] {
  color: #646B76;
  background: #F5F6F9;
}
.common-status.status-info[data-v-1866e6a5] {
  color: #3274F7;
  background: #F0F7FF;
}
.common-status.status-danger[data-v-1866e6a5] {
  color: #F32345;
  background: #FFF0F0;
}
.common-status.status-warning[data-v-1866e6a5] {
  background: #FFF8DB;
  color: #FFB014;
}
.common-divide[data-v-1866e6a5] {
  height: 8px;
  background: #F5F6F9;
  margin: 0 -24px;
}
.ssc-scan-toast[data-v-1866e6a5] {
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
.ssc-scan-toast.ssc-scan-toast-success[data-v-1866e6a5] {
  animation-duration: 4.4s;
  animation-name: scanSuccessToast-1866e6a5;
  background: #1CC461;
}
.ssc-scan-toast.ssc-scan-toast-fail[data-v-1866e6a5] {
  background: #F32345;
  animation-duration: 8.4s;
  animation-name: scanFailToast-1866e6a5;
}
.ssc-scan-toast.ssc-scan-toast-notice[data-v-1866e6a5] {
  background: #FFA620;
  animation-duration: 6.4s;
  animation-name: scanFailToast-1866e6a5;
}
.ssc-scan-toast .message-panel[data-v-1866e6a5] {
  display: flex;
  width: 100%;
  align-items: center;
}
.ssc-scan-toast .message-panel .icon[data-v-1866e6a5] {
  margin-right: 18px;
  width: 28px;
  height: 28px;
  flex-shrink: 0;
}
.ssc-scan-toast .message-panel .text[data-v-1866e6a5] {
  display: inline-block;
}
@keyframes scanSuccessToast-1866e6a5 {
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
@keyframes scanFailToast-1866e6a5 {
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
.table-pagination[data-v-1866e6a5] {
  height: 56px;
  border: 1px solid #ECF0F4;
  border-top: 0;
  justify-content: flex-end;
  padding-right: 16px;
}
.journey-type[data-v-1866e6a5] {
  display: flex;
  align-items: center;
}
.journey-type .journey-type-dot[data-v-1866e6a5] {
  width: 6px;
  height: 6px;
  border-radius: 50%;
  display: inline-block;
  margin-right: 8px;
}
.pagination-sticky-bottom[data-v-1866e6a5] {
  background: #fff;
  position: sticky;
  bottom: 16px;
}
.pagination-sticky-bottom[data-v-1866e6a5]:after {
  content: ' ';
  background: #fff;
  width: 100%;
  height: 16px;
  position: absolute;
}
.pagination-sticky-bottom[data-v-1866e6a5] .ssc-pagination {
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
.pagination-sticky-bottom[data-v-1866e6a5] .ssc-pagination .total-container {
  flex: 1;
  margin-left: 15px;
  margin-right: 12px;
}
.sp-card-log-list[data-v-1866e6a5] {
  padding: 16px 24px;
  background: #fff;
  min-height: 100%;
}
.ssc-table-panel .ssc-form-item .ssc-form-item-content textarea[data-v-1866e6a5],
.pro-filter .ssc-form-item .ssc-form-item-content textarea[data-v-1866e6a5] {
  border: transparent;
}
.message-red-text[data-v-1866e6a5] {
  color: #EE4D2D;
  font-weight: 700;
}
`,""]),D.exports=v},pk0U:(D,v,s)=>{"use strict";s.d(v,{Z:()=>x});var i=function(){var O=this,I=O._self._c;return O._m(0)},C=[function(){var f=this,O=f._self._c;return O("svg",{class:f.svgClass,attrs:{"aria-hidden":"true"},on:{click:function(d){return f.$emit("click")}}},[O("use",{attrs:{"xlink:href":f.iconName}})])}];const p={name:"svg-icon",props:{name:{type:String,required:!0},className:{type:String}},computed:{iconName:function(){return"#icon-"+this.name},svgClass:function(){return this.className?"svg-icon "+this.className:"svg-icon"}}};var S=s("KHd+"),_=(0,S.Z)(p,i,C,!1,null,"0bfb58e9",null);const x=_.exports},"d+eQ":(D,v,s)=>{"use strict";s.r(v),s.d(v,{default:()=>ia});var i=function(){var a=this,n=a._self._c;return n("div",[n("s-core",{directives:[{name:"loading",rawName:"v-loading",value:a.loading.list,expression:"loading.list"}],ref:"sCore",attrs:{config:a.config,tableData:a.tableData,search:a.loadToPackList}}),a._v(" "),a.showDialogForm?n("Create",{attrs:{beforeClose:a.closeDialog,isEdit:a.isEdit,data:a.form},on:{"handle-submit":a.submitForm}}):a._e()],1)},C=[],N=s("14Xm"),p=s.n(N),S=s("jo6Y"),_=s("D3Ub"),x=s("QbLZ"),f=s("J/PD"),O=s.n(f),I=s("eCTY"),d=s("lBHn"),F=s("pk0U"),E=s("QsnJ"),b=s("pqmQ"),A=s("vMZb"),$=function(){var a=this,n=a._self._c;return n("s-dialog",{attrs:{visible:!0,size:"normal",title:a.isEdit?a.$gt("Edit TO Pack"):a.$gt("Create TO Pack"),"before-close":a.closeDialog}},[n("s-form",{ref:"form",attrs:{rules:a.rules,model:a.form,"label-position":"top",formClass:"to-pack-configuration-create"}},[n("s-form-item",{attrs:{label:a.$gt("TO Pack"),prop:"pack_name"}},[n("s-input",{attrs:{maxlength:16,"show-limit":""},model:{value:a.form.pack_name,callback:function(e){a.$set(a.form,"pack_name",e)},expression:"form.pack_name"}})],1),a._v(" "),a.highValuePackingLogic?n("s-form-item",{attrs:{label:a.$gt("High Value Packing Logic"),prop:"hv_pack_validate_flag"}},[n("s-radio-group",{attrs:{disabled:a.isEdit},model:{value:a.form.hv_pack_validate_flag,callback:function(e){a.$set(a.form,"hv_pack_validate_flag",e)},expression:"form.hv_pack_validate_flag"}},a._l(a.highValuePackingLogicOptions,function(t,e){return n("s-radio",{key:e,attrs:{label:t.value}},[a._v(a._s(t.label))])}),1)],1):a._e(),a._v(" "),a.remeasurementsEnableSwitch?[n("s-form-item",{attrs:{label:a.$gt("Manual Measurement Validation Required"),prop:"manual_measurement_required"}},[n("s-radio-group",{model:{value:a.form.manual_measurement_required,callback:function(e){a.$set(a.form,"manual_measurement_required",e)},expression:"form.manual_measurement_required"}},a._l(a.YES_NO_OPTIONS,function(t,e){return n("s-radio",{key:e,attrs:{label:t.value}},[a._v(a._s(t.label))])}),1)],1),a._v(" "),n("s-form-item",{attrs:{label:a.$gt("Size Type Validation Required"),prop:"size_type_validation_required"}},[n("s-radio-group",{on:{change:function(e){a.form.size_type_list=[]}},model:{value:a.form.size_type_validation_required,callback:function(e){a.$set(a.form,"size_type_validation_required",e)},expression:"form.size_type_validation_required"}},a._l(a.YES_NO_OPTIONS,function(t,e){return n("s-radio",{key:e,attrs:{label:t.value}},[a._v(a._s(t.label))])}),1)],1),a._v(" "),a.showSizeTypeList?n("s-form-item",{attrs:{label:a.$gt("Size Type"),prop:"size_type_list"}},[n("s-select",{attrs:{options:a.allowedSizeTypeOptions,multiple:"",clearable:"","multiple-concise":"",placeholder:a.$gt("Please Select")},model:{value:a.form.size_type_list,callback:function(e){a.$set(a.form,"size_type_list",e)},expression:"form.size_type_list"}})],1):a._e()]:a._e(),a._v(" "),n("s-form-item",{attrs:{label:a.$gt("Max Length (cm)"),prop:"max_length"}},[n("s-input-number",{attrs:{disabled:a.isEdit,placeholder:a.$gt("Please Input"),min:1},model:{value:a.form.max_length,callback:function(e){a.$set(a.form,"max_length",e)},expression:"form.max_length"}})],1),a._v(" "),n("s-form-item",{attrs:{label:a.$gt("Max Width (cm)"),prop:"max_width"}},[n("s-input-number",{attrs:{disabled:a.isEdit,placeholder:a.$gt("Please Input"),min:1},model:{value:a.form.max_width,callback:function(e){a.$set(a.form,"max_width",e)},expression:"form.max_width"}})],1),a._v(" "),n("s-form-item",{attrs:{label:a.$gt("Max Height (cm)"),prop:"max_height"}},[n("s-input-number",{attrs:{disabled:a.isEdit,placeholder:a.$gt("Please Input"),min:1},model:{value:a.form.max_height,callback:function(e){a.$set(a.form,"max_height",e)},expression:"form.max_height"}})],1),a._v(" "),n("s-form-item",{attrs:{"item-class":"to-pack-configuration-create-footer",inline:!1,label:" "}},[n("s-button",{on:{click:a.closeDialog}},[a._v(a._s(a.$gt("Cancel")))]),a._v(" "),n("s-button",{attrs:{type:"primary",loading:a.loading.submit,disabled:a.disableConfirm},on:{click:a.submitForm}},[a._v(`
        `+a._s(a.$gt("Confirm")))])],1)],2)],1)},B=[],U=s("GQeE"),K=s.n(U),Y=s("P2sY"),z=s.n(Y),y=s("YEIV"),m=s("P451"),P=s("O4uc"),L=P.Z.state.systemConfig.cidApolloConfigValue["application.high_value_packing_logic"],w=[{get label(){return(0,m.ok)("Yes")},value:!0},{get label(){return(0,m.ok)("No")},value:!1}],Z=function(){var a,n=(a={},(0,y.Z)(a,!0,(0,m.ok)("Yes")),(0,y.Z)(a,!1,(0,m.ok)("No")),a);return{label:(0,m.ok)("High Value Packing Logic"),key:"hv_pack_validate_flag",width:130,filter:{type:"select",options:w},render:function(e,r){return n[r]||"-"},hide:!L}},V=s("fp3J"),G=s("nC2w"),T={YES:1,NO:2},Q=function(){var a=(0,V.computed)(function(){return P.Z.state.shared.inStationDynamicConfig&&P.Z.state.shared.inStationDynamicConfig.bulky_validation_enabled||!1}),n=(0,V.reactive)(P.Z.state.enums.systemEnums.size_type_enum_map||{}),t=(0,G.useMappingOptions)(n),e=t.options,r=[{get label(){return(0,m.ok)("Yes")},value:T.YES},{get label(){return(0,m.ok)("No")},value:T.NO}],c=r.reduce(function(M,g){return M[g.value]=g.label,M},{}),l=function(){return{label:(0,m.ok)("Manual Measurement Validation Required"),key:"manual_measurement_required",width:160,filter:{type:"select",options:r},render:function(q,R){return c&&c[R]||"-"},hide:!a.value}},u=function(){return{label:(0,m.ok)("Size Type Validation Required"),key:"size_type_validation_required",width:160,filter:{type:"select",options:r},render:function(q,R){return c&&c[R]||"-"},hide:!a.value}},h=function(){return{label:(0,m.ok)("Size Type"),key:"size_type_list",width:160,render:function(q,R){return Array.isArray(R)&&R.length?R.map(function(ra){return ra.size_type_text}).filter(Boolean).join(","):"-"},hide:!a.value}},H=function(g){return a.value?{manual_measurement_required:g.manual_measurement_required,size_type_validation_required:g.size_type_validation_required,size_type_list:g.size_type_list}:{manual_measurement_required:void 0,size_type_validation_required:void 0,size_type_list:void 0}};return{YES_NO_OPTIONS:r,YES_NO_ENUM:T,YES_NO_OPTIONS_MAP:c,allowedSizeTypeOptions:e,getManualMeasurementValidationRequiredColumn:l,getSizeTypeValidationRequiredColumn:u,getSizeTypeListColumn:h,getValidateRemeasurementsParams:H,enableSwitch:a}};const W=Q,J={setup:function(){var a=W(),n=a.YES_NO_OPTIONS,t=a.allowedSizeTypeOptions,e=a.enableSwitch;return{YES_NO_OPTIONS:n,allowedSizeTypeOptions:t,remeasurementsEnableSwitch:e}},props:{data:{type:Object},beforeClose:{type:Function},isEdit:{type:Boolean,default:!1}},data:function(){return{form:z()({manual_measurement_required:T.NO,size_type_validation_required:T.NO,size_type_list:[]},this.data),loading:{submit:!1},highValuePackingLogicOptions:w}},computed:(0,x.Z)({},(0,I.mapState)({userEmail:function(a){return a.user.currentLoginUser.email},highValuePackingLogic:function(a){return a.systemConfig.cidApolloConfigValue["application.high_value_packing_logic"]}}),{showSizeTypeList:function(){return this.form.size_type_validation_required===T.YES},selectedSizeTypeList:function(){return Array.isArray(this.form.size_type_list)&&this.form.size_type_list.length>0},disableConfirm:function(){var a=this;return!K()(this.form).every(function(n){return n==="size_type_list"?a.showSizeTypeList?a.selectedSizeTypeList:!0:n==="hv_pack_validate_flag"?a.form[n]!==void 0||!a.highValuePackingLogic:!!a.form[n]})},rules:function(){var a=this;return{pack_name:[E.sO.REQUIRED(this.$gt("TO Pack")),{validator:this.reasonValidator,trigger:"blur"}],max_length:[E.sO.REQUIRED(this.$gt("Max Length (cm)")),{validator:function(t,e,r){return a.integerValidator("Max Length (cm)",e,r)}}],max_height:[E.sO.REQUIRED(this.$gt("Max Width (cm)")),{validator:function(t,e,r){return a.integerValidator("Max Width (cm)",e,r)}}],max_width:[E.sO.REQUIRED(this.$gt("Max Height (cm)")),{validator:function(t,e,r){return a.integerValidator("Max Height (cm)",e,r)}}],hv_pack_validate_flag:this.highValuePackingLogic?[E.sO.REQUIRED(this.$gt("High Value Packing Logic"))]:[],manual_measurement_required:this.remeasurementsEnableSwitch?[E.sO.REQUIRED(this.$gt("Manual measurement validation required"))]:[],size_type_validation_required:this.remeasurementsEnableSwitch?[E.sO.REQUIRED(this.$gt("Size type validation required"))]:[],size_type_list:this.remeasurementsEnableSwitch?[E.sO.REQUIRED(this.$gt("Size Type"))]:[]}}}),methods:{closeDialog:function(){this.beforeClose&&this.beforeClose()},integerValidator:function(a,n,t){var e=/^[1-9]\d*$/;if(!e.test(n))return t(new Error(this.$gt(a+" should be an positive integer.",a)));t()},reasonValidator:function(){var o=(0,_.Z)(p().mark(function n(t,e,r){var c=this,l,u,h,H;return p().wrap(function(g){for(;;)switch(g.prev=g.next){case 0:return g.prev=0,g.next=3,(0,d._X)({pack_name_eq:e});case 3:l=g.sent,u=l.data.list,h=u===void 0?[]:u,H=this.isEdit&&h.find(function(q){var R=q.id;return R===c.data.id})&&h.length===1,h.length&&!H&&r(new Error(this.$gt("The TO Pack name has been used."))),g.next=13;break;case 10:g.prev=10,g.t0=g.catch(0),console.error("Name duplication check failed: ",g.t0);case 13:r();case 14:case"end":return g.stop()}},n,this,[[0,10]])}));function a(n,t,e){return o.apply(this,arguments)}return a}(),validateForm:function(){var o=(0,_.Z)(p().mark(function n(){return p().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,this.$refs.form.validate();case 3:e.next=8;break;case 5:throw e.prev=5,e.t0=e.catch(0),new Error("Validate Form error");case 8:case"end":return e.stop()}},n,this,[[0,5]])}));function a(){return o.apply(this,arguments)}return a}(),submitForm:function(){var o=(0,_.Z)(p().mark(function n(){return p().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,this.validateForm();case 3:this.$emit("handle-submit",this.form),e.next=9;break;case 6:e.prev=6,e.t0=e.catch(0),console.error("Create TO Pack failed:",e.t0);case 9:case"end":return e.stop()}},n,this,[[0,6]])}));function a(){return o.apply(this,arguments)}return a}()}};var X=s("PWzU"),j=s("KHd+"),ea=(0,j.Z)(J,$,B,!1,null,"1866e6a5",null);const na={components:{Create:ea.exports},setup:function(){var a=W(),n=a.getManualMeasurementValidationRequiredColumn,t=a.getSizeTypeValidationRequiredColumn,e=a.getSizeTypeListColumn,r=a.getValidateRemeasurementsParams;return{getManualMeasurementValidationRequiredColumn:n,getSizeTypeValidationRequiredColumn:t,getSizeTypeListColumn:e,getValidateRemeasurementsParams:r}},data:function(){return{form:{pack_name:"",max_length:null,max_width:null,max_height:null,hv_pack_validate_flag:void 0,manual_measurement_required:T.NO,size_type_validation_required:T.NO,size_type_list:[]},isEdit:!1,loading:{list:!1,status:!1},tableData:{total:0,list:[]},showDialogForm:!1,basicParams:{pageno:1,count:E.L8}}},computed:(0,x.Z)({},(0,I.mapState)({statusMapper:function(a){return O()(a.enums.systemEnums.practical_pack_status)},statusMapperString:function(a){return a.enums.systemEnums.practical_pack_status},currentUser:function(a){return a.user.currentLoginUser.email},highValuePackingLogic:function(a){return a.systemConfig.cidApolloConfigValue["application.high_value_packing_logic"]}}),{updateParams:function(){return this.$refs.sCore?(0,x.Z)({},this.$refs.sCore.formData,{pageno:this.$refs.sCore.currentPage||1,count:this.$refs.sCore.pageSize}):this.basicParams},config:function(){var a=this,n=this.$createElement;return{form:[{label:this.$gt("TO Pack ID"),key:"id",type:"input",needValueTrim:!0},{label:this.$gt("TO Pack"),key:"pack_name",type:"input"}],btns:[{label:this.$gt("Create"),type:"primary",click:this.handleCreateClick,hide:!(0,b.wD)(this.$store,"ADMIN_PRACTICAL_PACK_CREATE")},{label:this.$gt("Export"),click:this.handleExportClick},{label:this.$gt("Log"),click:this.handleLogClick}],table:{width:1200,actionsWidth:180,actions:[{label:this.$gt("Edit"),click:function(e,r){return a.showEditDialog(r)},hide:function(e){var r=e.pack_status;return r===a.statusMapperString.Unavailable||!A.Z7||!(0,b.wD)(a.$store,"EDIT_TO_PACK_NAME")}},{label:this.$gt("Disable"),click:function(e,r){return a.handleStatusUpdate(a.statusMapperString.Unavailable,r)},disabled:this.loading.status||!(0,b.wD)(this.$store,"ADMIN_PRACTICAL_PACK_EDIT"),hide:function(e){var r=e.pack_status;return r===a.statusMapperString.Unavailable}},{label:this.$gt("Enable"),click:function(e,r){return a.handleStatusUpdate(a.statusMapperString.Available,r)},disabled:this.loading.status||!(0,b.wD)(this.$store,"ADMIN_PRACTICAL_PACK_EDIT"),hide:function(e){var r=e.pack_status;return r===a.statusMapperString.Available}},{label:this.$gt("Pin"),click:function(e,r){return a.updatePin(r)},hide:function(e){var r=e.pin_time,c=e.pack_status;return c===a.statusMapperString.Unavailable||!A.Z7||!(0,b.wD)(a.$store,"PIN_TO_PACK")||!!r}},{label:this.$gt("UnPin"),click:function(e,r){return a.updatePin(r)},hide:function(e){var r=e.pin_time,c=e.pack_status;return c===a.statusMapperString.Unavailable||!A.Z7||!(0,b.wD)(a.$store,"PIN_TO_PACK")||!r}}],columns:[{label:this.$gt("TO Pack ID"),key:"id",width:140,render:function(e){return n("div",[e.pin_time?n(F.Z,{class:"pin-icon",attrs:{name:"to-pack-pin"}}):"",e.id])}},{label:this.$gt("TO Pack"),key:"pack_name",width:180},Z(),this.getManualMeasurementValidationRequiredColumn&&this.getManualMeasurementValidationRequiredColumn()||void 0,this.getSizeTypeValidationRequiredColumn&&this.getSizeTypeValidationRequiredColumn()||void 0,this.getSizeTypeListColumn&&this.getSizeTypeListColumn()||void 0,{label:this.$gt("Max Length (cm)"),key:"max_length",width:180},{label:this.$gt("Max Width (cm)"),key:"max_width",width:180},{label:this.$gt("Max Height (cm)"),key:"max_height",width:180},{label:this.$gt("Status"),key:"pack_status",width:180,render:function(e,r){return a.statusMapper[r]}}].filter(Boolean)},filterConfig:{customItemLabelMaxWidth:300}}}}),created:function(){this.loadToPackList(this.basicParams)},methods:{showEditDialog:function(a){var n=a.max_height,t=a.max_length,e=a.max_width,r=a.pack_name,c=a.hv_pack_validate_flag,l=a.id,u=a.manual_measurement_required,h=a.size_type_validation_required,H=a.size_type_list;this.form={max_height:n,max_length:t,max_width:e,pack_name:r,hv_pack_validate_flag:c,id:l,manual_measurement_required:u,size_type_validation_required:h,size_type_list:(H||[]).map(function(M){return M.size_type_enum})},this.currentEditId=a.id,this.isEdit=!0,this.showDialogForm=!0},submitForm:function(){var o=(0,_.Z)(p().mark(function n(t){var e,r,c,l;return p().wrap(function(h){for(;;)switch(h.prev=h.next){case 0:return h.prev=0,e=this.isEdit?d.x8:d.sy,r=t.hv_pack_validate_flag,c=(0,S.Z)(t,["hv_pack_validate_flag"]),l=this.isEdit?(0,x.Z)({id:this.currentEditId,pack_name:t.pack_name},this.getValidateRemeasurementsParams(t)):(0,x.Z)({},c,this.getValidateRemeasurementsParams(t)),r!==void 0&&(l.hv_pack_validate_flag=r),h.next=7,e((0,x.Z)({},l,{operator:this.currentUser}));case 7:this.closeDialog(),h.next=13;break;case 10:h.prev=10,h.t0=h.catch(0),console.error("submit form failed:",h.t0);case 13:case"end":return h.stop()}},n,this,[[0,10]])}));function a(n){return o.apply(this,arguments)}return a}(),updatePin:function(){var o=(0,_.Z)(p().mark(function n(t){var e,r;return p().wrap(function(l){for(;;)switch(l.prev=l.next){case 0:return l.prev=0,e=t.id,r=t.pin_status,l.next=4,(0,d.fT)({id:e,pin_status:r,operator:this.currentUser});case 4:this.$refs.sCore.onSearch(),l.next=10;break;case 7:l.prev=7,l.t0=l.catch(0),console.error("update pin error:",l.t0);case 10:case"end":return l.stop()}},n,this,[[0,7]])}));function a(n){return o.apply(this,arguments)}return a}(),loadToPackList:function(){var o=(0,_.Z)(p().mark(function n(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},e,r,c;return p().wrap(function(u){for(;;)switch(u.prev=u.next){case 0:return u.prev=0,(0,b.K4)(this,"list",!0),A.Z7&&(0,b.wD)(this.$store,"PIN_TO_PACK")&&(t.order_by=1),u.next=5,(0,d._X)(t);case 5:e=u.sent,r=e.data,c=r===void 0?{}:r,this.tableData.list=c.list,this.tableData.total=c.total,u.next=15;break;case 12:u.prev=12,u.t0=u.catch(0),console.error("Fail to load TO Pack lists: ",u.t0);case 15:return u.prev=15,(0,b.K4)(this,"list",!1),u.finish(15);case 18:case"end":return u.stop()}},n,this,[[0,12,15,18]])}));function a(){return o.apply(this,arguments)}return a}(),handleLogClick:function(){this.$router.push("/toPackConfiguration/log")},handleExportClick:function(){var o=(0,_.Z)(p().mark(function n(){var t,e,r,c;return p().wrap(function(u){for(;;)switch(u.prev=u.next){case 0:return u.prev=0,t=this.$refs.sCore.formData,e=t.id,r=t.pack_name,c={id:e?Number(e):null,pack_name:r},u.next=5,(0,d.D4)((0,b.Lt)(c));case 5:u.next=10;break;case 7:u.prev=7,u.t0=u.catch(0),console.error("Export to pack configuration failed:",u.t0);case 10:case"end":return u.stop()}},n,this,[[0,7]])}));function a(){return o.apply(this,arguments)}return a}(),handleCreateClick:function(){this.showDialogForm=!0},closeDialog:function(){this.form={pack_name:"",max_length:null,max_width:null,max_height:null},this.showDialogForm=!1,this.isEdit=!1,this.$emit("update:visible",!1),this.loadToPackList(this.updateParams)},handleStatusUpdate:function(){var o=(0,_.Z)(p().mark(function n(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r;return p().wrap(function(l){for(;;)switch(l.prev=l.next){case 0:return l.prev=0,r=e.id,(0,b.K4)(this,"status",!0),l.next=5,(0,d.Mm)({pack_status:t,id:r});case 5:t===this.statusMapperString.Unavailable&&e.pin_time&&this.updatePin(e),this.loadToPackList(this.updateParams),l.next=12;break;case 9:l.prev=9,l.t0=l.catch(0),console.error("Update To Pack Status Failed:",l.t0);case 12:return l.prev=12,(0,b.K4)(this,"status",!1),l.finish(12);case 15:case"end":return l.stop()}},n,this,[[0,9,12,15]])}));function a(n){return o.apply(this,arguments)}return a}()}};var ta=(0,j.Z)(na,i,C,!1,null,null,null);const ia=ta.exports},PWzU:(D,v,s)=>{var i=s("c/Q+");typeof i=="string"&&(i=[[D.id,i,""]]),i.locals&&(D.exports=i.locals);var C=s("er8A").Z,N=C("7171b5a8",i,!0,{})}}]);
