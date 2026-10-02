(self.webpackChunkzzz_fms_admin=self.webpackChunkzzz_fms_admin||[]).push([[618,2999],{kvrn:y=>{var v=/^(attrs|props|on|nativeOn|class|style|hook)$/;y.exports=function(g){return g.reduce(function(m,u){var i,d,a,l,b;for(a in u)if(i=m[a],d=u[a],i&&v.test(a))if(a==="class"&&(typeof i=="string"&&(b=i,m[a]=i={},i[b]=!0),typeof d=="string"&&(b=d,u[a]=d={},d[b]=!0)),a==="on"||a==="nativeOn"||a==="hook")for(l in d)i[l]=e(i[l],d[l]);else if(Array.isArray(i))m[a]=i.concat(d);else if(Array.isArray(d))m[a]=[i].concat(d);else for(l in d)i[l]=d[l];else m[a]=u[a];return m},{})};function e(s,g){return function(){s&&s.apply(this,arguments),g&&g.apply(this,arguments)}}},W7Cz:(y,v,e)=>{"use strict";e.d(v,{SN:()=>s.checkFormValidation});var s=e("0xHA"),g=e.n(s)},lbDH:(y,v,e)=>{"use strict";e.d(v,{E5:()=>b,F6:()=>A,b5:()=>l});var s=e("sk9p"),g=e("QbLZ"),m=e("jo6Y"),u=e("lSCD"),i=e.n(u),d=e("pqmQ"),a=e("4Jaa");function l(k,L){var p=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},x=p.render,M=p.filter,F=p.inTable,D=F===void 0?!0:F,C=p.hide,P=C===void 0?!1:C,T=(0,m.Z)(p,["render","filter","inTable","hide"]),$=(0,g.Z)({},T,{filter:M,hide:P||!D,key:L,label:k,render:x});return $}function b(k,L){var p=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},x=p.width,M=p.filterProps,F=M===void 0?{}:M,D=p.props,C=D===void 0?{}:D,P=p.render,T=p.sortable,$=p.defaultValue,z=p.inTable,o=z===void 0?!0:z,n=p.hide,r=n===void 0?!1:n,c=p.icon,t=p.filter,_=t===void 0?!0:t,E=(0,m.Z)(p,["width","filterProps","props","render","sortable","defaultValue","inTable","hide","icon","filter"]);return(0,g.Z)({},E,{defaultValue:$},_?{filter:(0,g.Z)({type:"datetime",unit:"datetimerange"},F)}:{},{hide:r||!o,icon:c,key:L,label:k,props:C,render:function(h,w){return i()(P)?P(w,h):typeof w=="string"?w==="/"||!w?"-":w:(0,a.MK)(w)},sortable:T,width:x||160})}function A(k,L){var p=this,x=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},M=x.options,F=M===void 0?[]:M,D=x.render,C=x.mapping,P=x.props,T=P===void 0?{}:P,$=x.inTable,z=$===void 0?!0:$,o=x.hide,n=o===void 0?!1:o,r=x.filter,c=r===void 0?!0:r,t=(0,m.Z)(x,["options","render","mapping","props","inTable","hide","filter"]),_=i()(F)?F():F,E=D;if(Array.isArray(C)){var f=(0,s.Z)(C,2),h=f[0],w=f[1];h==="enums"&&(_=(0,d.jw)(this.$store.state,{dataPath:"enums.systemEnums."+w}),i()(D)||(E=function(R,O){return(0,d.BK)(p.$store.state,"enums.systemEnums."+w,O)})),h==="list"&&(_=w,E=function(R,O){var H=_.filter(function(K){var Z=K.value;return Z===O});return H.length?H[0].label:""})}return(0,g.Z)({},t,c?{filter:(0,g.Z)({options:_,type:"select"},T)}:{},{hide:n||!z,key:L,label:k,render:E})}},rogP:(y,v,e)=>{var s=e("JPst");v=s(!1),v.push([y.id,`.confirm-button[data-v-d7078034] {
  margin-left: 16px;
}
ul[data-v-d7078034] {
  padding: 0;
  margin: 0;
  list-style: none;
}
.button-base[data-v-d7078034] {
  padding: 9px 20px;
  font-size: 14px;
  color: #FFFFFF;
}
.spx-button[data-v-d7078034] {
  padding: 9px 20px;
  font-size: 14px;
  color: #FFFFFF;
  border-color: #FFFFFF;
  color: #555555;
}
.spx-button[data-v-d7078034]:hover {
  background-color: #FFFFFF;
}
.spx-button-primary[data-v-d7078034] {
  padding: 9px 20px;
  font-size: 14px;
  color: #FFFFFF;
  background-color: #EE4D2D;
  border-color: #EE4D2D;
}
.ssc-message[data-v-d7078034] {
  top: 20px !important;
}
.sp-card > .actions[data-v-d7078034] {
  margin-bottom: 10px;
  display: flex;
  flex-wrap: wrap;
}
.sp-card > .actions .right[data-v-d7078034] {
  flex: 1;
  text-align: right;
  height: 40px;
}
table th[data-v-d7078034] {
  color: rgba(0, 0, 0, 0.85);
  border-color: #EEEEEE;
  font-size: 14px;
  font-weight: 500;
}
.spx-editor .ssc-tag[data-v-d7078034] {
  font-size: 12px;
  margin: 0px;
  padding: 0;
}
.spx-editor .ssc-tag .left-padding-span[data-v-d7078034] {
  width: 0;
  margin: 0 0 0 8px;
}
.spx-editor .ssc-tag .right-padding-span[data-v-d7078034] {
  width: 0;
  margin: 0 8px 0 0;
}
.spx-editor .tag-editor-span[data-v-d7078034] {
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
.spx-editor .tag-editor-span .tag-editor-span-space[data-v-d7078034] {
  width: 8px;
  height: 15px;
  display: inline-block;
  line-height: 22px;
}
.ssc-tabs-type-pane-card .ssc-tabs-pane[data-v-d7078034] {
  background: #FAFAFA;
}
.check-tree[data-v-d7078034] {
  margin-left: 80px;
}
.avatar-uploader-icon[data-v-d7078034] {
  font-size: 28px;
  color: #8c939d;
  width: 178px;
  height: 178px;
  line-height: 178px;
  text-align: center;
}
.avatar-uploader-icon-small[data-v-d7078034] {
  font-size: 14px !important;
  color: #8c939d;
  width: 56px !important;
  height: 56px !important;
  line-height: 56px !important;
  text-align: center;
}
.avatar-uploader-icon-middle[data-v-d7078034] {
  font-size: 14px !important;
  color: #8c939d;
  width: 94px !important;
  height: 94px !important;
  line-height: 94px !important;
  text-align: center;
}
.avatar[data-v-d7078034] {
  width: 178px;
  height: 178px;
  display: block;
}
.avatar-small[data-v-d7078034] {
  width: 56px;
  height: 56px;
  display: block;
}
.avatar-middle[data-v-d7078034] {
  width: 94px;
  height: 94px;
  display: block;
}
.acribus-sp-tabs[data-v-d7078034] {
  padding: 16px 16px 0px;
  border-radius: 6px;
  margin-bottom: -30px;
  background-color: #fff;
}
span.red[data-v-d7078034] {
  color: #F56C6C;
}
span.green[data-v-d7078034] {
  color: #67C23A;
}
.sp-hooks[data-v-d7078034] {
  overflow: hidden;
}
.text-link[data-v-d7078034] {
  color: #409eff;
  cursor: pointer;
}
.text-warning[data-v-d7078034] {
  color: #e80808;
}
.help-text[data-v-d7078034] {
  cursor: help;
}
.driver-performance-flag-A[data-v-d7078034] {
  color: #55CC77;
}
.driver-performance-flag-B[data-v-d7078034] {
  color: #999;
}
.driver-performance-flag-C[data-v-d7078034] {
  color: #FF4742;
}
/* [check-in rule] Google map autosuggest result container */
.pac-container[data-v-d7078034] {
  z-index: 100000;
}
.action-link[data-v-d7078034] {
  color: #2769f0;
  cursor: pointer;
  display: inline-block;
  margin-left: 6px;
}
.action-link[data-v-d7078034]:first-child {
  margin-left: 0;
}
.action-link[data-v-d7078034]:hover {
  text-decoration: underline;
}
.separate-line[data-v-d7078034] {
  height: 0;
  width: 100%;
  border-top: 1px #E9E9E9 solid;
  margin-bottom: 16px;
}
.white-fs-ground[data-v-d7078034] {
  padding: 24px;
  background: #fff;
  height: 100%;
}
.white-fs-ground .category-title[data-v-d7078034] {
  font-size: 16px;
  font-weight: 500;
  line-height: 16px;
  color: #333;
  margin-top: 56px;
  margin-bottom: 16px;
}
.white-fs-ground .category-title[data-v-d7078034]:first-child {
  margin-top: 16px;
}
.white-fs-ground .category-title[data-v-d7078034]:before {
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
.page-table-container[data-v-d7078034] {
  border: 1px solid #eee;
}
.form-body-center[data-v-d7078034] {
  margin: 0 auto;
}
.form-body-left[data-v-d7078034] {
  margin: 0;
}
.dialog-footer[data-v-d7078034],
.footer-submit[data-v-d7078034] {
  margin-top: 32px;
}
.dialog-footer .ssc-button[data-v-d7078034],
.footer-submit .ssc-button[data-v-d7078034] {
  margin-left: 16px;
}
.dialog-footer .ssc-button[data-v-d7078034]:first-child,
.footer-submit .ssc-button[data-v-d7078034]:first-child {
  margin-left: 0;
}
.text-center[data-v-d7078034] {
  text-align: center;
}
.s-form-textarea .ssc-textarea[data-v-d7078034],
.ssc-form-item .ssc-select[data-v-d7078034],
.ssc-form-item .ssc-input-size-medium[data-v-d7078034] {
  width: 320px;
}
.ssc-steps.is-horizontal[data-v-d7078034] {
  width: 60%;
  margin: 23px auto;
}
.action-wrap[data-v-d7078034] {
  display: flex;
  margin: 10px 0;
}
.action-wrap .actions[data-v-d7078034] {
  flex: 1;
}
.action-wrap .actions .ssc-button[data-v-d7078034] {
  margin-right: 16px;
}
.action-wrap .upload-route-log-info[data-v-d7078034] {
  align-self: center;
  text-align: right;
  flex: 1;
}
.action-wrap .upload-route-log-info label[data-v-d7078034] {
  margin-right: 8px;
}
.upload-log-table[data-v-d7078034] {
  margin: 10px 0;
}
.group-route-list-info[data-v-d7078034] {
  line-height: 40px;
}
.group-route-list-info label[data-v-d7078034] {
  margin-right: 10px;
}
.mass-upload-input-footer[data-v-d7078034] {
  margin-top: 32px;
}
.mass-upload-input-footer .ssc-button[data-v-d7078034] {
  margin-right: 10px;
}
.add-range-btn[data-v-d7078034] {
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
.add-range-btn[data-v-d7078034]:hover {
  background: #f6f6f6;
}
.range-wrap[data-v-d7078034] {
  padding: 16px;
}
.range-wrap .seq-tag[data-v-d7078034] {
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
.range-wrap .icon-del[data-v-d7078034] {
  line-height: 32px;
  width: 24px;
  height: 24px;
  cursor: pointer;
  color: #bbb;
}
.range-wrap .icon-del[data-v-d7078034]:hover {
  color: #888;
}
.bg-fafafa[data-v-d7078034] {
  background: #fafafa;
}
.ssc-step-main-title[data-v-d7078034] {
  line-height: 1.5;
}
.ssc-form-item-error-tip[data-v-d7078034] {
  white-space: nowrap;
}
.ssc-table-header .ssc-table-header-title[data-v-d7078034] {
  height: 100%;
}
.ssc-table-header .ssc-table-header-column-container[data-v-d7078034] {
  height: 100%;
}
.ssc-table-body .ssc-table-header-column-container .td-content[data-v-d7078034] {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.acribus-text-ellipsis[data-v-d7078034] {
  display: inline-block;
  width: 100%;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.station-tree-container .ssc-form-item-content[data-v-d7078034] {
  flex-direction: column;
  position: relative;
}
.station-tree-container .ssc-form-item-content .tree[data-v-d7078034] {
  min-width: 318px;
  display: block;
  margin-top: 20px;
}
.station-tree-container .ssc-form-item-content .tree.has-search-input[data-v-d7078034] {
  padding-top: 40px;
}
.station-tree-container .ssc-form-item-content .tree-input[data-v-d7078034] {
  position: absolute;
  left: 3%;
  top: 30px;
  z-index: 1;
  width: 94%;
  margin: 0 auto;
  color: #aeaeae;
}
.ssc-dropdown-menu[data-v-d7078034] {
  min-width: 176px;
  max-width: 320px;
  z-index: 2;
}
.ssc-dropdown-menu .active[data-v-d7078034] {
  color: #EE4D2D;
  font-weight: 500;
}
.detail-part-title[data-v-d7078034] {
  font-size: 18px;
  color: #333333;
  font-weight: 500;
  margin-bottom: 16px;
}
.detail-part-title.additional-info[data-v-d7078034] {
  margin-top: 56px;
}
.detail-part-title[data-v-d7078034]::before {
  content: '';
  width: 2px;
  height: 10px;
  background: #EE4D2D;
  display: inline-block;
  margin-right: 6px;
}
.page-wrapper[data-v-d7078034] {
  height: 100%;
}
.zone-container button:disabled:not(.btn-prev):not(.btn-next).ssc-btn-type-primary[data-v-d7078034] {
  color: #FFF !important;
  background: #EE4D2D !important;
  opacity: 0.5;
}
.pagination-left-total[data-v-d7078034] {
  display: flex;
  flex: 1;
}
.common-status[data-v-d7078034] {
  line-height: 12px;
  font-weight: 500;
  padding: 3px 4px;
  border-radius: 2px;
  display: inline-block;
  white-space: nowrap;
}
.common-status.status-success[data-v-d7078034] {
  background: #ECFFF1;
  color: #1CC461;
}
.common-status.status-disabled[data-v-d7078034] {
  color: #646B76;
  background: #F5F6F9;
}
.common-status.status-info[data-v-d7078034] {
  color: #3274F7;
  background: #F0F7FF;
}
.common-status.status-danger[data-v-d7078034] {
  color: #F32345;
  background: #FFF0F0;
}
.common-status.status-warning[data-v-d7078034] {
  background: #FFF8DB;
  color: #FFB014;
}
.common-divide[data-v-d7078034] {
  height: 8px;
  background: #F5F6F9;
  margin: 0 -24px;
}
.ssc-scan-toast[data-v-d7078034] {
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
.ssc-scan-toast.ssc-scan-toast-success[data-v-d7078034] {
  animation-duration: 4.4s;
  animation-name: scanSuccessToast-d7078034;
  background: #1CC461;
}
.ssc-scan-toast.ssc-scan-toast-fail[data-v-d7078034] {
  background: #F32345;
  animation-duration: 8.4s;
  animation-name: scanFailToast-d7078034;
}
.ssc-scan-toast.ssc-scan-toast-notice[data-v-d7078034] {
  background: #FFA620;
  animation-duration: 6.4s;
  animation-name: scanFailToast-d7078034;
}
.ssc-scan-toast .message-panel[data-v-d7078034] {
  display: flex;
  width: 100%;
  align-items: center;
}
.ssc-scan-toast .message-panel .icon[data-v-d7078034] {
  margin-right: 18px;
  width: 28px;
  height: 28px;
  flex-shrink: 0;
}
.ssc-scan-toast .message-panel .text[data-v-d7078034] {
  display: inline-block;
}
@keyframes scanSuccessToast-d7078034 {
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
@keyframes scanFailToast-d7078034 {
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
.table-pagination[data-v-d7078034] {
  height: 56px;
  border: 1px solid #ECF0F4;
  border-top: 0;
  justify-content: flex-end;
  padding-right: 16px;
}
.journey-type[data-v-d7078034] {
  display: flex;
  align-items: center;
}
.journey-type .journey-type-dot[data-v-d7078034] {
  width: 6px;
  height: 6px;
  border-radius: 50%;
  display: inline-block;
  margin-right: 8px;
}
.pagination-sticky-bottom[data-v-d7078034] {
  background: #fff;
  position: sticky;
  bottom: 16px;
}
.pagination-sticky-bottom[data-v-d7078034]:after {
  content: ' ';
  background: #fff;
  width: 100%;
  height: 16px;
  position: absolute;
}
.pagination-sticky-bottom[data-v-d7078034] .ssc-pagination {
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
.pagination-sticky-bottom[data-v-d7078034] .ssc-pagination .total-container {
  flex: 1;
  margin-left: 15px;
  margin-right: 12px;
}
.sp-card-log-list[data-v-d7078034] {
  padding: 16px 24px;
  background: #fff;
  min-height: 100%;
}
.ssc-table-panel .ssc-form-item .ssc-form-item-content textarea[data-v-d7078034],
.pro-filter .ssc-form-item .ssc-form-item-content textarea[data-v-d7078034] {
  border: transparent;
}
.message-red-text[data-v-d7078034] {
  color: #EE4D2D;
  font-weight: 700;
}
`,""]),y.exports=v},pk0U:(y,v,e)=>{"use strict";e.d(v,{Z:()=>a});var s=function(){var b=this,A=b._self._c;return b._m(0)},g=[function(){var l=this,b=l._self._c;return b("svg",{class:l.svgClass,attrs:{"aria-hidden":"true"},on:{click:function(k){return l.$emit("click")}}},[b("use",{attrs:{"xlink:href":l.iconName}})])}];const u={name:"svg-icon",props:{name:{type:String,required:!0},className:{type:String}},computed:{iconName:function(){return"#icon-"+this.name},svgClass:function(){return this.className?"svg-icon "+this.className:"svg-icon"}}};var i=e("KHd+"),d=(0,i.Z)(u,s,g,!1,null,"0bfb58e9",null);const a=d.exports},RJ95:(y,v,e)=>{"use strict";e.r(v),e.d(v,{default:()=>z});var s=function(){var n=this,r=n._self._c;return r("div",{staticClass:"page-wrapper"},[r("s-core",{directives:[{name:"loading",rawName:"v-loading",value:n.loading.list,expression:"loading.list"}],ref:"sCore",attrs:{config:n.config,tableData:n.tableData,search:n.loadHandoverModeList,needDefaultColumnWidth:!1}}),n._v(" "),n.visible.handoverModeEditDialog?r("handover-mode-detail",{attrs:{visible:n.visible.handoverModeEditDialog,channelId:n.editChannelId},on:{"update:visible":function(t){return n.$set(n.visible,"handoverModeEditDialog",t)},refreshPage:n.refreshPage}}):n._e()],1)},g=[],m=e("14Xm"),u=e.n(m),i=e("D3Ub"),d=e("QsnJ"),a=e("pqmQ"),l=e("lbDH"),b=function(){var n=this,r=n._self._c;return r("s-dialog",{attrs:{visible:n.visible,"before-close":n.closeDialog,width:"400px",title:n.$gt("Edit")}},[r("s-form",{ref:"form",staticClass:"assign-driver-form",attrs:{model:n.form,"label-position":"top"}},n._l(n.formSchemas,function(c){return r("form-item",{key:c.key,attrs:{form:n.form,schema:c}})}),1),n._v(" "),r("span",{attrs:{slot:"footer"},slot:"footer"},[r("s-button",{on:{click:n.closeDialog}},[n._v(n._s(n.$gt("Cancel")))]),n._v(" "),r("s-button",{staticClass:"confirm-button",attrs:{type:"primary",loading:n.loading.save},on:{click:n.updateHandoverMode}},[n._v(n._s(n.$gt("Confirm")))])],1)],1)},A=[],k=e("b84n"),L=e("W7Cz");const x={components:{FormItem:k.Z},props:{visible:{type:Boolean,default:!1},channelId:{type:Number}},data:function(){return{form:{},loading:{detail:!1,save:!1}}},computed:{formSchemas:function(){return[{label:"3PL",key:"channel_name",type:"input",props:{disabled:!0}},{label:"Handover Mode",key:"handover_mode",type:"input",props:{disabled:!0}},{label:"Order-Level Handover to 3PL",key:"order_handover",type:"radio-group",options:(0,a.jw)(this.$store.state,{dataPath:"enums.systemEnums.order_handover_status"}),rules:[d.sO.REQUIRED("Order-Level Handover to 3PL")]}]}},created:function(){var o=(0,i.Z)(u().mark(function r(){return u().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,this.loadHandoverModeDetail({count:d.L8});case 2:case"end":return t.stop()}},r,this)}));function n(){return o.apply(this,arguments)}return n}(),methods:{closeDialog:function(){this.$emit("update:visible",!1)},loadHandoverModeDetail:function(){var o=(0,i.Z)(u().mark(function r(){var c,t,_;return u().wrap(function(f){for(;;)switch(f.prev=f.next){case 0:return f.prev=0,(0,a.K4)(this,"detail",!0),f.next=4,this.$store.dispatch("handoverModeMgt/loadHandoverModeDetail",(0,a.Lt)({channel_id:this.channelId}));case 4:c=f.sent,t=c.data,_=t===void 0?{}:t,this.form=_,f.next=13;break;case 10:f.prev=10,f.t0=f.catch(0),console.error("load detail data error: ",f.t0);case 13:return f.prev=13,(0,a.K4)(this,"detail",!1),f.finish(13);case 16:case"end":return f.stop()}},r,this,[[0,10,13,16]])}));function n(){return o.apply(this,arguments)}return n}(),updateHandoverMode:function(){var o=(0,i.Z)(u().mark(function r(){return u().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return(0,L.SN)(this.$refs.form,"form"),t.prev=1,(0,a.K4)(this,"save",!0),t.next=5,this.$store.dispatch("handoverModeMgt/updateHandoverMode",(0,a.Lt)({channel_id:this.channelId,order_handover:this.form.order_handover}));case 5:this.$message.success(d.Lz.base),this.closeDialog(),this.$emit("refreshPage"),t.next=13;break;case 10:t.prev=10,t.t0=t.catch(1),console.error("update handover mode error: ",t.t0);case 13:return t.prev=13,(0,a.K4)(this,"save",!1),t.finish(13);case 16:case"end":return t.stop()}},r,this,[[1,10,13,16]])}));function n(){return o.apply(this,arguments)}return n}()}};var M=e("5DM0"),F=e("KHd+"),D=(0,F.Z)(x,b,A,!1,null,"d7078034",null);const T={components:{HandoverModeDetail:D.exports},data:function(){return{editChannelId:"",tableData:{list:[],total:0},visible:{handoverModeEditDialog:!1},loading:{list:!1}}},computed:{tableColumns:function(){var n=this;return[(0,l.b5)("3PL","channel_name",{width:240}),(0,l.b5)("Handover Mode","handover_mode"),(0,l.b5)("Order-Level Handover to 3PL","order_handover",{render:function(c,t){return(0,a.BK)(n.$store,"state.enums.systemEnums.order_handover_status",t)}})]},config:function(){var n=this;return{form:[],table:{width:1100,actionsWidth:80,columns:this.tableColumns,actions:[{label:this.$gt("Edit"),click:this.showEditDialog,hide:function(){return!(0,a.wD)(n.$store,"EDIT_THIRD_PARTY_CHANNEL_HANDOVER_MODE")}}]}}}},created:function(){var o=(0,i.Z)(u().mark(function r(){return u().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,this.loadHandoverModeList({count:d.L8});case 2:case"end":return t.stop()}},r,this)}));function n(){return o.apply(this,arguments)}return n}(),methods:{showEditDialog:function(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};this.editChannelId=r.channel_id,this.visible.handoverModeEditDialog=!0},loadHandoverModeList:function(){var o=(0,i.Z)(u().mark(function r(){var c=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},t,_,E;return u().wrap(function(h){for(;;)switch(h.prev=h.next){case 0:return h.prev=0,(0,a.K4)(this,"list",!0),c.pageno||(c.pageno=1),c.count||(c.count=d.L8),h.next=6,this.$store.dispatch("handoverModeMgt/loadHandoverModeList",(0,a.Lt)(c));case 6:t=h.sent,_=t.data,E=_===void 0?{}:_,this.tableData=E,h.next=15;break;case 12:h.prev=12,h.t0=h.catch(0),console.error("load table data error: ",h.t0);case 15:return h.prev=15,(0,a.K4)(this,"list",!1),h.finish(15);case 18:case"end":return h.stop()}},r,this,[[0,12,15,18]])}));function n(){return o.apply(this,arguments)}return n}(),refreshPage:function(){this.$refs.sCore.refreshList()}}};var $=(0,F.Z)(T,s,g,!1,null,null,null);const z=$.exports},"5DM0":(y,v,e)=>{var s=e("rogP");typeof s=="string"&&(s=[[y.id,s,""]]),s.locals&&(y.exports=s.locals);var g=e("er8A").Z,m=g("9b306da4",s,!0,{})}}]);
