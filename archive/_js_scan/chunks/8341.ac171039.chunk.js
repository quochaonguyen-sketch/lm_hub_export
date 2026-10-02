(self.webpackChunkzzz_fms_admin=self.webpackChunkzzz_fms_admin||[]).push([[8341],{P2rT:(h,g,t)=>{"use strict";t.d(g,{Z:()=>R});var c=t("QbLZ"),x=t("14Xm"),u=t.n(x),b=t("D3Ub"),T=t("m1cH"),k=t("9NXV"),y=t("P451"),z=t("O4uc"),C=t("A2FP"),m=t("pqmQ"),w=t("4Jaa"),S=t("vy24"),$=function(){var n=this,e=n._self._c;return e("s-dialog",{staticClass:"cycle-count-create-dialog",attrs:{title:n.$gt("Create Cycle Count Task"),width:"45%",visible:!0,size:"normal",beforeClose:n.cancel}},[e("s-form",{ref:"form",attrs:{model:n.form,"label-width":"180px",rules:n.rules}},[e("s-form-item",{attrs:{prop:"status",label:n.$gt("Current Order Status"),required:""}},[e("s-select",{attrs:{loading:n.loading.confList},on:{"visible-change":n.handleVisibleChange},model:{value:n.form.status,callback:function(i){n.$set(n.form,"status",i)},expression:"form.status"}},n._l(n.statusSelectOptions,function(o,i){return e("s-option",{key:i,attrs:{label:o.label,value:o.value}})}),1)],1),n._v(" "),e("s-form-item",{staticClass:"date-picker-form-item",attrs:{prop:"period_time",label:n.$gt("Current Order Status's Last Update Time"),required:""}},[e("s-date-picker",{staticClass:"create-cycle-count-task-date-picker",attrs:{type:"datetime",disabled:n.form.now},on:{change:n.handleDateChange},model:{value:n.form.period_time,callback:function(i){n.$set(n.form,"period_time",i)},expression:"form.period_time"}}),n._v(" "),e("s-checkbox",{attrs:{disabled:n.hasSelectDate},on:{change:n.handleCheckboxChange},model:{value:n.form.now,callback:function(i){n.$set(n.form,"now",i)},expression:"form.now"}},[n._v(n._s(n.$gt("Now")))])],1)],1),n._v(" "),e("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[e("s-button",{staticClass:"cancel-button",on:{click:n.cancel}},[n._v(n._s(n.$gt("Cancel")))]),n._v(" "),e("s-button",{staticClass:"confirm-button",attrs:{type:"primary",loading:n.loading.save},on:{click:n.createCycleCountTask}},[n._v(n._s(n.$gt("Create")))])],1)],1)},N=[],A=t("jo6Y"),L=t("J/PD"),E=t.n(L),O=t("eCTY"),D=t("QsnJ"),V=t("W7Cz");const Z={props:{stationType:{type:String,default:""},contextName:{type:String,default:""},params:{type:Object,default:function(){return{}}}},data:function(){return{form:{},confList:[],hasSelectDate:!1,rules:{status:[D.sO.REQUIRED("Status")],period_time:[D.sO.REQUIRED("Current Order Status's Last Update Time")]},loading:{confList:!1,save:!1}}},computed:(0,c.Z)({},(0,O.mapState)({stationMap:function(n){return n.enums.systemEnums.station_types},orderStatusNameValueForHub:function(n){return E()(n.enums.systemEnums.cycle_count.cycle_task_hub_status_list)},orderStatusNameValueForDc:function(n){return E()(n.enums.systemEnums.cycle_count.cycle_task_dc_status_list)}}),{statusSelectOptions:function(){var n=this["orderStatusNameValueFor"+this.stationType];return this.confList.map(function(e){var o=e.order_status;return{label:n[o],value:o}})}}),methods:{handleDateChange:function(n){this.hasSelectDate=!!n},cancel:function(){this.contextName&&k.context.rmAppend(this.contextName)},createCycleCountTask:function(){var a=(0,b.Z)(u().mark(function e(){var o,i,p,l,r,d,f,F;return u().wrap(function(s){for(;;)switch(s.prev=s.next){case 0:return(0,V.SN)(this.$refs.form,"form"),s.prev=1,o=this.form,i=o.period_time,p=o.now,l=(0,A.Z)(o,["period_time","now"]),r=(0,c.Z)({},l,{stationType:this.stationType}),p?r.is_now=1:r.period_time=(0,w.ev)(i),(0,m.K4)(this,"save",!0),s.next=8,this.$store.dispatch("cycleCountMgt/createCycleCountTask",r);case 8:d=s.sent,f=d.data,F=f===void 0?{}:f,this.$router.push("/cycleCountTask/detail"+F.task_id+"&"+this.stationType),this.cancel(),s.next=18;break;case 15:s.prev=15,s.t0=s.catch(1),console.error("create cycle count task error",s.t0);case 18:return s.prev=18,(0,m.K4)(this,"save",!1),s.finish(18);case 21:case"end":return s.stop()}},e,this,[[1,15,18,21]])}));function n(){return a.apply(this,arguments)}return n}(),loadCycleCountConfList:function(){var a=(0,b.Z)(u().mark(function e(){var o,i,p,l;return u().wrap(function(d){for(;;)switch(d.prev=d.next){case 0:return d.prev=0,o={station_type:this.stationMap[this.stationType.toUpperCase()]},(0,m.K4)(this,"confList",!0),d.next=5,this.$store.dispatch("cycleCountMgt/loadCycleCountConfigList",o);case 5:i=d.sent,p=i.data,l=p===void 0?{}:p,this.confList=l.list||[],d.next=14;break;case 11:d.prev=11,d.t0=d.catch(0),console.error("load cycle count conf list error",d.t0);case 14:return d.prev=14,(0,m.K4)(this,"confList",!1),d.finish(14);case 17:case"end":return d.stop()}},e,this,[[0,11,14,17]])}));function n(){return a.apply(this,arguments)}return n}(),handleVisibleChange:function(n){n&&this.loadCycleCountConfList()},handleCheckboxChange:function(n){n&&(this.form.period_time=new Date)}}};var Q=t("Y9mw"),j=t("KHd+"),M=(0,j.Z)(Z,$,N,!1,null,"2d4e77cd",null);const P=M.exports,R=function(a){var n=a.viewName,e=a.historyName,o=a.permission,i=o===void 0?{}:o,p=a.stationType;return{mode:k.constant.MODE.QUERY_IN_TABLE,main:n,actions:[{label:(0,y.ok)("View"),handler:function(r){this.$router.push("/cycleCountTask/detail"+r.task_id+"&"+p)},options:{props:{type:"primary"},hide:function(){return!(0,m.wD)(this.$store,i.detail)}}}],customHooks:[{label:(0,y.ok)("Create Task"),handler:function(){var l=(0,b.Z)(u().mark(function d(){var f;return u().wrap(function(v){for(;;)switch(v.prev=v.next){case 0:f=this.$createElement,this.append(n,f(P,{attrs:{contextName:n,stationType:p}}));case 2:case"end":return v.stop()}},d,this)}));function r(){return l.apply(this,arguments)}return r}(),options:{props:{type:"primary"},hide:function(){return!(0,m.wD)(this.$store,i.create)}}}].concat((0,T.Z)((0,C.NA)({viewName:n,historyName:e,comp:{Export:S.Z,contextName:n,stationType:p,exportFunction:function(r){return z.Z.dispatch("cycleCountMgt/cycleCountTaskListExport",r)},visible:!0},props:{group:(0,y.ok)("Export")},permission:i.export}))),options:(0,c.Z)({},(0,C.$v)(),{hideCreateBtn:!0,interceptors:{search:function(r){return(0,w.Qg)(r)}}})}}},myVh:(h,g,t)=>{var c=t("JPst");g=c(!1),g.push([h.id,`.date-picker-form-item[data-v-2d4e77cd] .ssc-checkbox {
  margin-left: 12px;
}
ul[data-v-2d4e77cd] {
  padding: 0;
  margin: 0;
  list-style: none;
}
.button-base[data-v-2d4e77cd] {
  padding: 9px 20px;
  font-size: 14px;
  color: #FFFFFF;
}
.spx-button[data-v-2d4e77cd] {
  padding: 9px 20px;
  font-size: 14px;
  color: #FFFFFF;
  border-color: #FFFFFF;
  color: #555555;
}
.spx-button[data-v-2d4e77cd]:hover {
  background-color: #FFFFFF;
}
.spx-button-primary[data-v-2d4e77cd] {
  padding: 9px 20px;
  font-size: 14px;
  color: #FFFFFF;
  background-color: #EE4D2D;
  border-color: #EE4D2D;
}
.ssc-message[data-v-2d4e77cd] {
  top: 20px !important;
}
.sp-card > .actions[data-v-2d4e77cd] {
  margin-bottom: 10px;
  display: flex;
  flex-wrap: wrap;
}
.sp-card > .actions .right[data-v-2d4e77cd] {
  flex: 1;
  text-align: right;
  height: 40px;
}
table th[data-v-2d4e77cd] {
  color: rgba(0, 0, 0, 0.85);
  border-color: #EEEEEE;
  font-size: 14px;
  font-weight: 500;
}
.spx-editor .ssc-tag[data-v-2d4e77cd] {
  font-size: 12px;
  margin: 0px;
  padding: 0;
}
.spx-editor .ssc-tag .left-padding-span[data-v-2d4e77cd] {
  width: 0;
  margin: 0 0 0 8px;
}
.spx-editor .ssc-tag .right-padding-span[data-v-2d4e77cd] {
  width: 0;
  margin: 0 8px 0 0;
}
.spx-editor .tag-editor-span[data-v-2d4e77cd] {
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
.spx-editor .tag-editor-span .tag-editor-span-space[data-v-2d4e77cd] {
  width: 8px;
  height: 15px;
  display: inline-block;
  line-height: 22px;
}
.ssc-tabs-type-pane-card .ssc-tabs-pane[data-v-2d4e77cd] {
  background: #FAFAFA;
}
.check-tree[data-v-2d4e77cd] {
  margin-left: 80px;
}
.avatar-uploader-icon[data-v-2d4e77cd] {
  font-size: 28px;
  color: #8c939d;
  width: 178px;
  height: 178px;
  line-height: 178px;
  text-align: center;
}
.avatar-uploader-icon-small[data-v-2d4e77cd] {
  font-size: 14px !important;
  color: #8c939d;
  width: 56px !important;
  height: 56px !important;
  line-height: 56px !important;
  text-align: center;
}
.avatar-uploader-icon-middle[data-v-2d4e77cd] {
  font-size: 14px !important;
  color: #8c939d;
  width: 94px !important;
  height: 94px !important;
  line-height: 94px !important;
  text-align: center;
}
.avatar[data-v-2d4e77cd] {
  width: 178px;
  height: 178px;
  display: block;
}
.avatar-small[data-v-2d4e77cd] {
  width: 56px;
  height: 56px;
  display: block;
}
.avatar-middle[data-v-2d4e77cd] {
  width: 94px;
  height: 94px;
  display: block;
}
.acribus-sp-tabs[data-v-2d4e77cd] {
  padding: 16px 16px 0px;
  border-radius: 6px;
  margin-bottom: -30px;
  background-color: #fff;
}
span.red[data-v-2d4e77cd] {
  color: #F56C6C;
}
span.green[data-v-2d4e77cd] {
  color: #67C23A;
}
.sp-hooks[data-v-2d4e77cd] {
  overflow: hidden;
}
.text-link[data-v-2d4e77cd] {
  color: #409eff;
  cursor: pointer;
}
.text-warning[data-v-2d4e77cd] {
  color: #e80808;
}
.help-text[data-v-2d4e77cd] {
  cursor: help;
}
.driver-performance-flag-A[data-v-2d4e77cd] {
  color: #55CC77;
}
.driver-performance-flag-B[data-v-2d4e77cd] {
  color: #999;
}
.driver-performance-flag-C[data-v-2d4e77cd] {
  color: #FF4742;
}
/* [check-in rule] Google map autosuggest result container */
.pac-container[data-v-2d4e77cd] {
  z-index: 100000;
}
.action-link[data-v-2d4e77cd] {
  color: #2769f0;
  cursor: pointer;
  display: inline-block;
  margin-left: 6px;
}
.action-link[data-v-2d4e77cd]:first-child {
  margin-left: 0;
}
.action-link[data-v-2d4e77cd]:hover {
  text-decoration: underline;
}
.separate-line[data-v-2d4e77cd] {
  height: 0;
  width: 100%;
  border-top: 1px #E9E9E9 solid;
  margin-bottom: 16px;
}
.white-fs-ground[data-v-2d4e77cd] {
  padding: 24px;
  background: #fff;
  height: 100%;
}
.white-fs-ground .category-title[data-v-2d4e77cd] {
  font-size: 16px;
  font-weight: 500;
  line-height: 16px;
  color: #333;
  margin-top: 56px;
  margin-bottom: 16px;
}
.white-fs-ground .category-title[data-v-2d4e77cd]:first-child {
  margin-top: 16px;
}
.white-fs-ground .category-title[data-v-2d4e77cd]:before {
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
.page-table-container[data-v-2d4e77cd] {
  border: 1px solid #eee;
}
.form-body-center[data-v-2d4e77cd] {
  margin: 0 auto;
}
.form-body-left[data-v-2d4e77cd] {
  margin: 0;
}
.dialog-footer[data-v-2d4e77cd],
.footer-submit[data-v-2d4e77cd] {
  margin-top: 32px;
}
.dialog-footer .ssc-button[data-v-2d4e77cd],
.footer-submit .ssc-button[data-v-2d4e77cd] {
  margin-left: 16px;
}
.dialog-footer .ssc-button[data-v-2d4e77cd]:first-child,
.footer-submit .ssc-button[data-v-2d4e77cd]:first-child {
  margin-left: 0;
}
.text-center[data-v-2d4e77cd] {
  text-align: center;
}
.s-form-textarea .ssc-textarea[data-v-2d4e77cd],
.ssc-form-item .ssc-select[data-v-2d4e77cd],
.ssc-form-item .ssc-input-size-medium[data-v-2d4e77cd] {
  width: 320px;
}
.ssc-steps.is-horizontal[data-v-2d4e77cd] {
  width: 60%;
  margin: 23px auto;
}
.action-wrap[data-v-2d4e77cd] {
  display: flex;
  margin: 10px 0;
}
.action-wrap .actions[data-v-2d4e77cd] {
  flex: 1;
}
.action-wrap .actions .ssc-button[data-v-2d4e77cd] {
  margin-right: 16px;
}
.action-wrap .upload-route-log-info[data-v-2d4e77cd] {
  align-self: center;
  text-align: right;
  flex: 1;
}
.action-wrap .upload-route-log-info label[data-v-2d4e77cd] {
  margin-right: 8px;
}
.upload-log-table[data-v-2d4e77cd] {
  margin: 10px 0;
}
.group-route-list-info[data-v-2d4e77cd] {
  line-height: 40px;
}
.group-route-list-info label[data-v-2d4e77cd] {
  margin-right: 10px;
}
.mass-upload-input-footer[data-v-2d4e77cd] {
  margin-top: 32px;
}
.mass-upload-input-footer .ssc-button[data-v-2d4e77cd] {
  margin-right: 10px;
}
.add-range-btn[data-v-2d4e77cd] {
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
.add-range-btn[data-v-2d4e77cd]:hover {
  background: #f6f6f6;
}
.range-wrap[data-v-2d4e77cd] {
  padding: 16px;
}
.range-wrap .seq-tag[data-v-2d4e77cd] {
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
.range-wrap .icon-del[data-v-2d4e77cd] {
  line-height: 32px;
  width: 24px;
  height: 24px;
  cursor: pointer;
  color: #bbb;
}
.range-wrap .icon-del[data-v-2d4e77cd]:hover {
  color: #888;
}
.bg-fafafa[data-v-2d4e77cd] {
  background: #fafafa;
}
.ssc-step-main-title[data-v-2d4e77cd] {
  line-height: 1.5;
}
.ssc-form-item-error-tip[data-v-2d4e77cd] {
  white-space: nowrap;
}
.ssc-table-header .ssc-table-header-title[data-v-2d4e77cd] {
  height: 100%;
}
.ssc-table-header .ssc-table-header-column-container[data-v-2d4e77cd] {
  height: 100%;
}
.ssc-table-body .ssc-table-header-column-container .td-content[data-v-2d4e77cd] {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.acribus-text-ellipsis[data-v-2d4e77cd] {
  display: inline-block;
  width: 100%;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.station-tree-container .ssc-form-item-content[data-v-2d4e77cd] {
  flex-direction: column;
  position: relative;
}
.station-tree-container .ssc-form-item-content .tree[data-v-2d4e77cd] {
  min-width: 318px;
  display: block;
  margin-top: 20px;
}
.station-tree-container .ssc-form-item-content .tree.has-search-input[data-v-2d4e77cd] {
  padding-top: 40px;
}
.station-tree-container .ssc-form-item-content .tree-input[data-v-2d4e77cd] {
  position: absolute;
  left: 3%;
  top: 30px;
  z-index: 1;
  width: 94%;
  margin: 0 auto;
  color: #aeaeae;
}
.ssc-dropdown-menu[data-v-2d4e77cd] {
  min-width: 176px;
  max-width: 320px;
  z-index: 2;
}
.ssc-dropdown-menu .active[data-v-2d4e77cd] {
  color: #EE4D2D;
  font-weight: 500;
}
.detail-part-title[data-v-2d4e77cd] {
  font-size: 18px;
  color: #333333;
  font-weight: 500;
  margin-bottom: 16px;
}
.detail-part-title.additional-info[data-v-2d4e77cd] {
  margin-top: 56px;
}
.detail-part-title[data-v-2d4e77cd]::before {
  content: '';
  width: 2px;
  height: 10px;
  background: #EE4D2D;
  display: inline-block;
  margin-right: 6px;
}
.page-wrapper[data-v-2d4e77cd] {
  height: 100%;
}
.zone-container button:disabled:not(.btn-prev):not(.btn-next).ssc-btn-type-primary[data-v-2d4e77cd] {
  color: #FFF !important;
  background: #EE4D2D !important;
  opacity: 0.5;
}
.pagination-left-total[data-v-2d4e77cd] {
  display: flex;
  flex: 1;
}
.common-status[data-v-2d4e77cd] {
  line-height: 12px;
  font-weight: 500;
  padding: 3px 4px;
  border-radius: 2px;
  display: inline-block;
  white-space: nowrap;
}
.common-status.status-success[data-v-2d4e77cd] {
  background: #ECFFF1;
  color: #1CC461;
}
.common-status.status-disabled[data-v-2d4e77cd] {
  color: #646B76;
  background: #F5F6F9;
}
.common-status.status-info[data-v-2d4e77cd] {
  color: #3274F7;
  background: #F0F7FF;
}
.common-status.status-danger[data-v-2d4e77cd] {
  color: #F32345;
  background: #FFF0F0;
}
.common-status.status-warning[data-v-2d4e77cd] {
  background: #FFF8DB;
  color: #FFB014;
}
.common-divide[data-v-2d4e77cd] {
  height: 8px;
  background: #F5F6F9;
  margin: 0 -24px;
}
.ssc-scan-toast[data-v-2d4e77cd] {
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
.ssc-scan-toast.ssc-scan-toast-success[data-v-2d4e77cd] {
  animation-duration: 4.4s;
  animation-name: scanSuccessToast-2d4e77cd;
  background: #1CC461;
}
.ssc-scan-toast.ssc-scan-toast-fail[data-v-2d4e77cd] {
  background: #F32345;
  animation-duration: 8.4s;
  animation-name: scanFailToast-2d4e77cd;
}
.ssc-scan-toast.ssc-scan-toast-notice[data-v-2d4e77cd] {
  background: #FFA620;
  animation-duration: 6.4s;
  animation-name: scanFailToast-2d4e77cd;
}
.ssc-scan-toast .message-panel[data-v-2d4e77cd] {
  display: flex;
  width: 100%;
  align-items: center;
}
.ssc-scan-toast .message-panel .icon[data-v-2d4e77cd] {
  margin-right: 18px;
  width: 28px;
  height: 28px;
  flex-shrink: 0;
}
.ssc-scan-toast .message-panel .text[data-v-2d4e77cd] {
  display: inline-block;
}
@keyframes scanSuccessToast-2d4e77cd {
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
@keyframes scanFailToast-2d4e77cd {
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
.table-pagination[data-v-2d4e77cd] {
  height: 56px;
  border: 1px solid #ECF0F4;
  border-top: 0;
  justify-content: flex-end;
  padding-right: 16px;
}
.journey-type[data-v-2d4e77cd] {
  display: flex;
  align-items: center;
}
.journey-type .journey-type-dot[data-v-2d4e77cd] {
  width: 6px;
  height: 6px;
  border-radius: 50%;
  display: inline-block;
  margin-right: 8px;
}
.pagination-sticky-bottom[data-v-2d4e77cd] {
  background: #fff;
  position: sticky;
  bottom: 16px;
}
.pagination-sticky-bottom[data-v-2d4e77cd]:after {
  content: ' ';
  background: #fff;
  width: 100%;
  height: 16px;
  position: absolute;
}
.pagination-sticky-bottom[data-v-2d4e77cd] .ssc-pagination {
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
.pagination-sticky-bottom[data-v-2d4e77cd] .ssc-pagination .total-container {
  flex: 1;
  margin-left: 15px;
  margin-right: 12px;
}
.sp-card-log-list[data-v-2d4e77cd] {
  padding: 16px 24px;
  background: #fff;
  min-height: 100%;
}
.ssc-table-panel .ssc-form-item .ssc-form-item-content textarea[data-v-2d4e77cd],
.pro-filter .ssc-form-item .ssc-form-item-content textarea[data-v-2d4e77cd] {
  border: transparent;
}
.message-red-text[data-v-2d4e77cd] {
  color: #EE4D2D;
  font-weight: 700;
}
`,""]),h.exports=g},Y9mw:(h,g,t)=>{var c=t("myVh");typeof c=="string"&&(c=[[h.id,c,""]]),c.locals&&(h.exports=c.locals);var x=t("er8A").Z,u=x("51de09fc",c,!0,{})}}]);
