(self.webpackChunkzzz_fms_admin=self.webpackChunkzzz_fms_admin||[]).push([[9177,2999],{kvrn:b=>{var m=/^(attrs|props|on|nativeOn|class|style|hook)$/;b.exports=function(x){return x.reduce(function(c,l){var u,r,d,f,y;for(d in l)if(u=c[d],r=l[d],u&&m.test(d))if(d==="class"&&(typeof u=="string"&&(y=u,c[d]=u={},u[y]=!0),typeof r=="string"&&(y=r,l[d]=r={},r[y]=!0)),d==="on"||d==="nativeOn"||d==="hook")for(f in r)u[f]=t(u[f],r[f]);else if(Array.isArray(u))c[d]=u.concat(r);else if(Array.isArray(r))c[d]=[u].concat(r);else for(f in r)u[f]=r[f];else c[d]=l[d];return c},{})};function t(o,x){return function(){o&&o.apply(this,arguments),x&&x.apply(this,arguments)}}},"3Sfg":(b,m,t)=>{"use strict";t.d(m,{Z:()=>x});var o=t("EA14");const x={createCallUp:function(l){return o.Z.post("/spx_delivery/admin/call_up_tool/decline_reason/create",l)},exportCallUp:function(l){return o.Z.post("/spx_delivery/admin/call_up_tool/decline_reason/export",l)},getCallUpDetail:function(l){return o.Z.post("/spx_delivery/admin/call_up_tool/decline_reason/detail",l)},getCallUpList:function(l){return o.Z.post("/spx_delivery/admin/call_up_tool/decline_reason/list",l)},getCallUpLog:function(l){return o.Z.post("/spx_delivery/admin/call_up_tool/decline_reason/log/search",l)},updateCallUp:function(l){return o.Z.post("/spx_delivery/admin/call_up_tool/decline_reason/update",l)}}},uuxU:(b,m,t)=>{var o=t("JPst");m=o(!1),m.push([b.id,`.callup-page-wrapper[data-v-447e0e5a] {
  min-height: 100%;
  background: #fff;
}
.callup-page-wrapper .category-title-v2[data-v-447e0e5a] {
  font-size: 16px;
  font-weight: 500;
  line-height: 16px;
  color: #333;
  margin-top: 56px;
  margin-bottom: 24px;
}
.callup-page-wrapper .category-title-v2[data-v-447e0e5a]:first-child {
  margin-top: 16px;
}
.callup-page-wrapper .category-title-v2[data-v-447e0e5a]:before {
  display: inline-block;
  content: '';
  position: relative;
  bottom: 0px;
  width: 4px;
  height: 12px;
  background: #ee4d2d;
  line-height: 16px;
  margin-right: 8px;
}
.footer-submit[data-v-447e0e5a] {
  border-top: #ecf0f4 1px solid;
  box-shadow: 0 -2px 12px 0 rgba(0, 0, 0, 0.12);
  position: fixed;
  bottom: 0;
  width: 100%;
  background: #fff;
}
.footer-button[data-v-447e0e5a] {
  margin: 12px 24px 12px 24px;
  margin-left: calc(75% - 24px);
}
ul[data-v-447e0e5a] {
  padding: 0;
  margin: 0;
  list-style: none;
}
.button-base[data-v-447e0e5a] {
  padding: 9px 20px;
  font-size: 14px;
  color: #FFFFFF;
}
.spx-button[data-v-447e0e5a] {
  padding: 9px 20px;
  font-size: 14px;
  color: #FFFFFF;
  border-color: #FFFFFF;
  color: #555555;
}
.spx-button[data-v-447e0e5a]:hover {
  background-color: #FFFFFF;
}
.spx-button-primary[data-v-447e0e5a] {
  padding: 9px 20px;
  font-size: 14px;
  color: #FFFFFF;
  background-color: #EE4D2D;
  border-color: #EE4D2D;
}
.ssc-message[data-v-447e0e5a] {
  top: 20px !important;
}
.sp-card > .actions[data-v-447e0e5a] {
  margin-bottom: 10px;
  display: flex;
  flex-wrap: wrap;
}
.sp-card > .actions .right[data-v-447e0e5a] {
  flex: 1;
  text-align: right;
  height: 40px;
}
table th[data-v-447e0e5a] {
  color: rgba(0, 0, 0, 0.85);
  border-color: #EEEEEE;
  font-size: 14px;
  font-weight: 500;
}
.spx-editor .ssc-tag[data-v-447e0e5a] {
  font-size: 12px;
  margin: 0px;
  padding: 0;
}
.spx-editor .ssc-tag .left-padding-span[data-v-447e0e5a] {
  width: 0;
  margin: 0 0 0 8px;
}
.spx-editor .ssc-tag .right-padding-span[data-v-447e0e5a] {
  width: 0;
  margin: 0 8px 0 0;
}
.spx-editor .tag-editor-span[data-v-447e0e5a] {
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
.spx-editor .tag-editor-span .tag-editor-span-space[data-v-447e0e5a] {
  width: 8px;
  height: 15px;
  display: inline-block;
  line-height: 22px;
}
.ssc-tabs-type-pane-card .ssc-tabs-pane[data-v-447e0e5a] {
  background: #FAFAFA;
}
.check-tree[data-v-447e0e5a] {
  margin-left: 80px;
}
.avatar-uploader-icon[data-v-447e0e5a] {
  font-size: 28px;
  color: #8c939d;
  width: 178px;
  height: 178px;
  line-height: 178px;
  text-align: center;
}
.avatar-uploader-icon-small[data-v-447e0e5a] {
  font-size: 14px !important;
  color: #8c939d;
  width: 56px !important;
  height: 56px !important;
  line-height: 56px !important;
  text-align: center;
}
.avatar-uploader-icon-middle[data-v-447e0e5a] {
  font-size: 14px !important;
  color: #8c939d;
  width: 94px !important;
  height: 94px !important;
  line-height: 94px !important;
  text-align: center;
}
.avatar[data-v-447e0e5a] {
  width: 178px;
  height: 178px;
  display: block;
}
.avatar-small[data-v-447e0e5a] {
  width: 56px;
  height: 56px;
  display: block;
}
.avatar-middle[data-v-447e0e5a] {
  width: 94px;
  height: 94px;
  display: block;
}
.acribus-sp-tabs[data-v-447e0e5a] {
  padding: 16px 16px 0px;
  border-radius: 6px;
  margin-bottom: -30px;
  background-color: #fff;
}
span.red[data-v-447e0e5a] {
  color: #F56C6C;
}
span.green[data-v-447e0e5a] {
  color: #67C23A;
}
.sp-hooks[data-v-447e0e5a] {
  overflow: hidden;
}
.text-link[data-v-447e0e5a] {
  color: #409eff;
  cursor: pointer;
}
.text-warning[data-v-447e0e5a] {
  color: #e80808;
}
.help-text[data-v-447e0e5a] {
  cursor: help;
}
.driver-performance-flag-A[data-v-447e0e5a] {
  color: #55CC77;
}
.driver-performance-flag-B[data-v-447e0e5a] {
  color: #999;
}
.driver-performance-flag-C[data-v-447e0e5a] {
  color: #FF4742;
}
/* [check-in rule] Google map autosuggest result container */
.pac-container[data-v-447e0e5a] {
  z-index: 100000;
}
.action-link[data-v-447e0e5a] {
  color: #2769f0;
  cursor: pointer;
  display: inline-block;
  margin-left: 6px;
}
.action-link[data-v-447e0e5a]:first-child {
  margin-left: 0;
}
.action-link[data-v-447e0e5a]:hover {
  text-decoration: underline;
}
.separate-line[data-v-447e0e5a] {
  height: 0;
  width: 100%;
  border-top: 1px #E9E9E9 solid;
  margin-bottom: 16px;
}
.white-fs-ground[data-v-447e0e5a] {
  padding: 24px;
  background: #fff;
  height: 100%;
}
.white-fs-ground .category-title[data-v-447e0e5a] {
  font-size: 16px;
  font-weight: 500;
  line-height: 16px;
  color: #333;
  margin-top: 56px;
  margin-bottom: 16px;
}
.white-fs-ground .category-title[data-v-447e0e5a]:first-child {
  margin-top: 16px;
}
.white-fs-ground .category-title[data-v-447e0e5a]:before {
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
.page-table-container[data-v-447e0e5a] {
  border: 1px solid #eee;
}
.form-body-center[data-v-447e0e5a] {
  margin: 0 auto;
}
.form-body-left[data-v-447e0e5a] {
  margin: 0;
}
.dialog-footer[data-v-447e0e5a],
.footer-submit[data-v-447e0e5a] {
  margin-top: 32px;
}
.dialog-footer .ssc-button[data-v-447e0e5a],
.footer-submit .ssc-button[data-v-447e0e5a] {
  margin-left: 16px;
}
.dialog-footer .ssc-button[data-v-447e0e5a]:first-child,
.footer-submit .ssc-button[data-v-447e0e5a]:first-child {
  margin-left: 0;
}
.text-center[data-v-447e0e5a] {
  text-align: center;
}
.s-form-textarea .ssc-textarea[data-v-447e0e5a],
.ssc-form-item .ssc-select[data-v-447e0e5a],
.ssc-form-item .ssc-input-size-medium[data-v-447e0e5a] {
  width: 320px;
}
.ssc-steps.is-horizontal[data-v-447e0e5a] {
  width: 60%;
  margin: 23px auto;
}
.action-wrap[data-v-447e0e5a] {
  display: flex;
  margin: 10px 0;
}
.action-wrap .actions[data-v-447e0e5a] {
  flex: 1;
}
.action-wrap .actions .ssc-button[data-v-447e0e5a] {
  margin-right: 16px;
}
.action-wrap .upload-route-log-info[data-v-447e0e5a] {
  align-self: center;
  text-align: right;
  flex: 1;
}
.action-wrap .upload-route-log-info label[data-v-447e0e5a] {
  margin-right: 8px;
}
.upload-log-table[data-v-447e0e5a] {
  margin: 10px 0;
}
.group-route-list-info[data-v-447e0e5a] {
  line-height: 40px;
}
.group-route-list-info label[data-v-447e0e5a] {
  margin-right: 10px;
}
.mass-upload-input-footer[data-v-447e0e5a] {
  margin-top: 32px;
}
.mass-upload-input-footer .ssc-button[data-v-447e0e5a] {
  margin-right: 10px;
}
.add-range-btn[data-v-447e0e5a] {
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
.add-range-btn[data-v-447e0e5a]:hover {
  background: #f6f6f6;
}
.range-wrap[data-v-447e0e5a] {
  padding: 16px;
}
.range-wrap .seq-tag[data-v-447e0e5a] {
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
.range-wrap .icon-del[data-v-447e0e5a] {
  line-height: 32px;
  width: 24px;
  height: 24px;
  cursor: pointer;
  color: #bbb;
}
.range-wrap .icon-del[data-v-447e0e5a]:hover {
  color: #888;
}
.bg-fafafa[data-v-447e0e5a] {
  background: #fafafa;
}
.ssc-step-main-title[data-v-447e0e5a] {
  line-height: 1.5;
}
.ssc-form-item-error-tip[data-v-447e0e5a] {
  white-space: nowrap;
}
.ssc-table-header .ssc-table-header-title[data-v-447e0e5a] {
  height: 100%;
}
.ssc-table-header .ssc-table-header-column-container[data-v-447e0e5a] {
  height: 100%;
}
.ssc-table-body .ssc-table-header-column-container .td-content[data-v-447e0e5a] {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.acribus-text-ellipsis[data-v-447e0e5a] {
  display: inline-block;
  width: 100%;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.station-tree-container .ssc-form-item-content[data-v-447e0e5a] {
  flex-direction: column;
  position: relative;
}
.station-tree-container .ssc-form-item-content .tree[data-v-447e0e5a] {
  min-width: 318px;
  display: block;
  margin-top: 20px;
}
.station-tree-container .ssc-form-item-content .tree.has-search-input[data-v-447e0e5a] {
  padding-top: 40px;
}
.station-tree-container .ssc-form-item-content .tree-input[data-v-447e0e5a] {
  position: absolute;
  left: 3%;
  top: 30px;
  z-index: 1;
  width: 94%;
  margin: 0 auto;
  color: #aeaeae;
}
.ssc-dropdown-menu[data-v-447e0e5a] {
  min-width: 176px;
  max-width: 320px;
  z-index: 2;
}
.ssc-dropdown-menu .active[data-v-447e0e5a] {
  color: #EE4D2D;
  font-weight: 500;
}
.detail-part-title[data-v-447e0e5a] {
  font-size: 18px;
  color: #333333;
  font-weight: 500;
  margin-bottom: 16px;
}
.detail-part-title.additional-info[data-v-447e0e5a] {
  margin-top: 56px;
}
.detail-part-title[data-v-447e0e5a]::before {
  content: '';
  width: 2px;
  height: 10px;
  background: #EE4D2D;
  display: inline-block;
  margin-right: 6px;
}
.page-wrapper[data-v-447e0e5a] {
  height: 100%;
}
.zone-container button:disabled:not(.btn-prev):not(.btn-next).ssc-btn-type-primary[data-v-447e0e5a] {
  color: #FFF !important;
  background: #EE4D2D !important;
  opacity: 0.5;
}
.pagination-left-total[data-v-447e0e5a] {
  display: flex;
  flex: 1;
}
.common-status[data-v-447e0e5a] {
  line-height: 12px;
  font-weight: 500;
  padding: 3px 4px;
  border-radius: 2px;
  display: inline-block;
  white-space: nowrap;
}
.common-status.status-success[data-v-447e0e5a] {
  background: #ECFFF1;
  color: #1CC461;
}
.common-status.status-disabled[data-v-447e0e5a] {
  color: #646B76;
  background: #F5F6F9;
}
.common-status.status-info[data-v-447e0e5a] {
  color: #3274F7;
  background: #F0F7FF;
}
.common-status.status-danger[data-v-447e0e5a] {
  color: #F32345;
  background: #FFF0F0;
}
.common-status.status-warning[data-v-447e0e5a] {
  background: #FFF8DB;
  color: #FFB014;
}
.common-divide[data-v-447e0e5a] {
  height: 8px;
  background: #F5F6F9;
  margin: 0 -24px;
}
.ssc-scan-toast[data-v-447e0e5a] {
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
.ssc-scan-toast.ssc-scan-toast-success[data-v-447e0e5a] {
  animation-duration: 4.4s;
  animation-name: scanSuccessToast-447e0e5a;
  background: #1CC461;
}
.ssc-scan-toast.ssc-scan-toast-fail[data-v-447e0e5a] {
  background: #F32345;
  animation-duration: 8.4s;
  animation-name: scanFailToast-447e0e5a;
}
.ssc-scan-toast.ssc-scan-toast-notice[data-v-447e0e5a] {
  background: #FFA620;
  animation-duration: 6.4s;
  animation-name: scanFailToast-447e0e5a;
}
.ssc-scan-toast .message-panel[data-v-447e0e5a] {
  display: flex;
  width: 100%;
  align-items: center;
}
.ssc-scan-toast .message-panel .icon[data-v-447e0e5a] {
  margin-right: 18px;
  width: 28px;
  height: 28px;
  flex-shrink: 0;
}
.ssc-scan-toast .message-panel .text[data-v-447e0e5a] {
  display: inline-block;
}
@keyframes scanSuccessToast-447e0e5a {
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
@keyframes scanFailToast-447e0e5a {
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
.table-pagination[data-v-447e0e5a] {
  height: 56px;
  border: 1px solid #ECF0F4;
  border-top: 0;
  justify-content: flex-end;
  padding-right: 16px;
}
.journey-type[data-v-447e0e5a] {
  display: flex;
  align-items: center;
}
.journey-type .journey-type-dot[data-v-447e0e5a] {
  width: 6px;
  height: 6px;
  border-radius: 50%;
  display: inline-block;
  margin-right: 8px;
}
.pagination-sticky-bottom[data-v-447e0e5a] {
  background: #fff;
  position: sticky;
  bottom: 16px;
}
.pagination-sticky-bottom[data-v-447e0e5a]:after {
  content: ' ';
  background: #fff;
  width: 100%;
  height: 16px;
  position: absolute;
}
.pagination-sticky-bottom[data-v-447e0e5a] .ssc-pagination {
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
.pagination-sticky-bottom[data-v-447e0e5a] .ssc-pagination .total-container {
  flex: 1;
  margin-left: 15px;
  margin-right: 12px;
}
.sp-card-log-list[data-v-447e0e5a] {
  padding: 16px 24px;
  background: #fff;
  min-height: 100%;
}
.ssc-table-panel .ssc-form-item .ssc-form-item-content textarea[data-v-447e0e5a],
.pro-filter .ssc-form-item .ssc-form-item-content textarea[data-v-447e0e5a] {
  border: transparent;
}
.message-red-text[data-v-447e0e5a] {
  color: #EE4D2D;
  font-weight: 700;
}
`,""]),b.exports=m},"5v8F":(b,m,t)=>{"use strict";t.r(m),t.d(m,{default:()=>S});var o=function(){var n=this,a=n._self._c;return a("div",{staticClass:"callup-page-wrapper"},[a("div",{directives:[{name:"loading",rawName:"v-loading",value:n.loading,expression:"loading"}],staticClass:"white-fs-ground"},[a("div",{staticClass:"category-title-v2"},[n._v(n._s(n.$gt("Basic Info")))]),n._v(" "),a("s-form",{ref:"basicForm",attrs:{model:n.form,"label-position":"right","label-width":"200px","scroll-to-error-item":!0}},n._l(n.basicFormSchema,function(s){return a("form-item",{key:s.key,attrs:{schema:s,form:n.form}})}),1)],1),n._v(" "),a("div",{staticClass:"footer-submit"},[a("div",{staticClass:"footer-button"},[a("s-button",{on:{click:function(g){return n.back(!1)}}},[n._v(n._s(n.$gt("Cancel")))]),n._v(" "),a("s-button",{attrs:{loading:n.submitLoading,type:"primary"},on:{click:n.submit}},[n._v(n._s(n.$gt("Submit")))])],1)])])},x=[],c=t("P2sY"),l=t.n(c),u=t("14Xm"),r=t.n(u),d=t("QbLZ"),f=t("D3Ub"),y=t("kvrn"),C=t.n(y),$=t("gDS+"),E=t.n($),k=t("brkv"),F=t("3Sfg"),D=t("b84n"),z=t("pqmQ"),w=t("W7Cz"),U=t("Azq6");const A={name:"CallUpDetail",components:{FormItem:D.Z},data:function(){return{loading:!1,submitLoading:!1,form:{},oldForm:{},isEdit:!1,id:"",descriptionData:void 0}},computed:{statusOptions:function(){var n=(0,z.jw)(this.$store.state,{dataPath:"enums.systemEnums.call_up_decline_reason_status"});return n.forEach(function(a){a.label=(0,k.capitalize)(a.label)}),n},descriptionSchema:function(){return[{label:this.$gt("English reason name"),key:"english_description",placeholder:this.$gt("Input")},{label:this.$gt("local language reason name"),key:"local_language_description",placeholder:this.$gt("Input")}]},basicFormSchema:function(){var n=this,a=this.$createElement;return[{label:this.$gt("Content"),key:"content",type:"input",disabled:this.isEdit,rules:[{required:!0,message:this.$gt("Please enter content")},{max:100,message:this.$gt("Content must be less than 100 characters")}]},{label:this.$gt("Reason name"),key:"english_description",type:"use-custom",customSlot:function(){return a("div",{key:E()(n.descriptionData||{})||"english_description"},[a(U.Z,C()([{attrs:{formName:"description",formData:n.descriptionData,schema:n.descriptionSchema,maxLength:250,isRequired:!0}},{on:{getFromData:function(e){for(var h=arguments.length,i=Array(h>1?h-1:0),v=1;v<h;v++)i[v-1]=arguments[v];n.getDescriptionForm.apply(n,[e].concat(i))}}}]))])}},{label:this.$gt("Status"),key:"reason_status",type:"radio-group",options:this.statusOptions,rules:[{required:!0,message:this.$gt("Please select status")}]}]}},created:function(){this.updateBreadcrumb();var n=this.$route.params.action,a=n===void 0?"detail":n,s=this.$route.query.id,g=s===void 0?"":s;this.isEdit=a!=="create",this.id=g,this.isEdit&&this.loadDetail()},methods:{submit:function(){var p=(0,f.Z)(r().mark(function a(){var s,g,e;return r().wrap(function(i){for(;;)switch(i.prev=i.next){case 0:return(0,w.SN)(this.$refs.basicForm,"basicForm"),s=this.$refs.basicForm.$children.filter(function(v){return v.schema&&["english_description"].includes(v.schema.key)}),s.length&&s.forEach(function(v){(0,w.SN)(v.$children[0].$children[0].$children[0],"guidelineForm")}),i.prev=3,this.submitLoading=!0,g=this.isEdit?this.$gt("Are you sure to edit call-up?"):this.$gt("Are you sure to create new call-up?"),e=this.isEdit?Number(this.id):void 0,i.next=9,this.confirm(g);case 9:this.updateCallUpConfig((0,d.Z)({id:e},this.form)),i.next=15;break;case 12:i.prev=12,i.t0=i.catch(3),console.error("close confirm dialog: ",i.t0);case 15:return i.prev=15,this.submitLoading=!1,i.finish(15);case 18:case"end":return i.stop()}},a,this,[[3,12,15,18]])}));function n(){return p.apply(this,arguments)}return n}(),updateBreadcrumb:function(){var n=[{link:void 0,title:this.$t("Basic Data")},{link:"/proofConfiguration/list?proof_type=CALL_UP",title:this.$t("Proof Configuration")},{link:"",title:this.$t("Proof Configuration Detail")}];this.$store.dispatch("sharedBreadcrumb/updateBreadcrumb",n)},updateCallUpConfig:function(){var p=(0,f.Z)(r().mark(function a(s){var g=this;return r().wrap(function(h){for(;;)switch(h.prev=h.next){case 0:if(!this.isEdit){h.next=5;break}return h.next=3,F.Z.updateCallUp(s);case 3:h.next=7;break;case 5:return h.next=7,F.Z.createCallUp(s);case 7:this.$feedback(this.$gt("proof of call-up Rule ID is {rule_id}",null,{rule_id:this.id}),{backBtnTip:"OK",type:"success",backBtnType:"primary",feedbackTitle:this.editMode?this.$gt("Updated  Successfully"):this.$gt("Created  Successfully"),onBack:function(v){v(),g.skipConfirmation=!0,g.back(!0)}});case 8:case"end":return h.stop()}},a,this)}));function n(a){return p.apply(this,arguments)}return n}(),confirm:function(n){return this.$confirm(n,this.$gt("Notice"),{confirmButtonText:this.$gt("Confirm"),cancelButtonText:this.$gt("Cancel"),type:"warning"})},back:function(){var p=(0,f.Z)(r().mark(function a(){var s=arguments.length>0&&arguments[0]!==void 0?arguments[0]:!1;return r().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(!((0,k.isEqual)(this.oldForm,this.form)||s)){e.next=3;break}return this.$router.push("/proofConfiguration/list?proof_type=CALL_UP"),e.abrupt("return");case 3:return e.prev=3,e.next=6,this.$confirm({title:this.$gt("Notice"),message:this.$gt("Are you sure to cancel? Unsaved changes will be lost."),confirmButtonText:this.$gt("Yes"),cancelButtonText:this.$gt("No")});case 6:this.skipConfirmation=!0,this.$router.push("/proofConfiguration/list?proof_type=CALL_UP"),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(3),console.error("close confirm dialog:",e.t0);case 13:case"end":return e.stop()}},a,this,[[3,10]])}));function n(){return p.apply(this,arguments)}return n}(),getDescriptionForm:function(n){this.form=(0,d.Z)({},this.form,n),this.descriptionData=n},loadDetail:function(){var p=(0,f.Z)(r().mark(function a(){var s,g,e;return r().wrap(function(i){for(;;)switch(i.prev=i.next){case 0:return this.loading=!0,i.next=3,F.Z.getCallUpDetail({id:Number(this.id)});case 3:s=i.sent,g=s.data,e=g===void 0?{}:g,this.form=(0,d.Z)({},this.form,{content:e.content,reason_status:e.reason_status,local_language_description:e.local_language_description,english_description:e.english_description}),this.descriptionData={local_language_description:e.local_language_description,english_description:e.english_description},this.oldForm=l()({},this.form),this.loading=!1;case 10:case"end":return i.stop()}},a,this)}));function n(){return p.apply(this,arguments)}return n}()}};var L=t("PBzz"),_=t("KHd+"),B=(0,_.Z)(A,o,x,!1,null,"447e0e5a",null);const S=B.exports},PBzz:(b,m,t)=>{var o=t("uuxU");typeof o=="string"&&(o=[[b.id,o,""]]),o.locals&&(b.exports=o.locals);var x=t("er8A").Z,c=x("4e93102e",o,!0,{})}}]);
