(self.webpackChunkzzz_fms_admin=self.webpackChunkzzz_fms_admin||[]).push([[1964],{DxUY:(g,c,a)=>{"use strict";a.d(c,{CU:()=>w,E7:()=>x,sC:()=>h});var d=a("EA14"),v="api/admin/exception/",h="/api/admin/image/upload";function x(y,f){return d.Z.post(""+v+f+"/order/update/",y)}function C(y,f){return request.post(""+v+f+"/order/reject",y)}function w(y){return d.Z.post("/api/fleet_order/order/detail/update_exception_record",y)}},"l/LD":(g,c,a)=>{"use strict";a.d(c,{mm:()=>d.createFileUpload});var d=a("WQvN"),v=a.n(d)},LGrV:(g,c,a)=>{"use strict";a.d(c,{p:()=>d.toOrderDetail});var d=a("dhR4"),v=a.n(d)},VEvw:(g,c,a)=>{"use strict";a.r(c),a.d(c,{default:()=>ln});var d=a("QbLZ"),v=a("14Xm"),h=a.n(v),x=a("D3Ub"),C=a("m1cH"),w=a("9NXV"),y=a("J/PD"),f=a.n(y),s=a("68JW"),k=function(){var n=this,t=n._self._c;return t("s-dialog",{attrs:{title:n.$gt("Abnormally Update Order Status"),visible:!0,"show-close":!1}},[t("s-form",{attrs:{inline:!0}},[t("s-form-item",{attrs:{required:"",label:n.$gt("Update Order Status To")}},[t("s-select",{model:{value:n.formData.status,callback:function(o){n.$set(n.formData,"status",o)},expression:"formData.status"}},n._l(n.statusSelectOptions,function(i){return t("s-option",{key:i.value,attrs:{label:i.label,value:i.value}})}),1)],1),n._v(" "),t("s-form-item",{staticStyle:{width:"100%"},attrs:{label:n.$gt("Photo")}},[t("s-upload",{attrs:{multiple:"",limit:n.photoLimit,action:n.uploadAPI,"list-type":"picture-card",name:"image","on-exceed":n.fileExceed,"on-success":n.uploadSuccess,"on-error":n.uploadError,"on-remove":n.removeFile,"with-credentials":!0,"before-upload":n.beforeAvatarUpload,tip:"Photo images, Max "+n.photoLimit+" photos"}},[t("s-icon-add")],1)],1),n._v(" "),t("div",{staticClass:"remark"},[n._v(n._s(n.$gt("Remark")))]),n._v(" "),t("s-textarea",{staticStyle:{width:"100%"},attrs:{maxlength:300,autoRows:{minRows:2},resize:"vertical"},model:{value:n.formData.remark,callback:function(o){n.$set(n.formData,"remark",typeof o=="string"?o.trim():o)},expression:"formData.remark"}})],1),n._v(" "),t("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[t("s-button",{on:{click:n.openCancelConfirmDialog}},[n._v(n._s(n.$gt("Cancel")))]),n._v(" "),t("s-button",{attrs:{type:"primary",loading:n.loading},on:{click:n.openSaveConfirmDialog}},[n._v(n._s(n.$gt("Save")))])],1),n._v(" "),t("s-dialog",{attrs:{"show-close":!1,width:"500px !important",visible:n.cancelConfirmVisible,"append-to-body":""}},[n._v(n._s(n.$gt("Are you sure to cancel updating order status?"))),t("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[t("s-button",{on:{click:n.closeInnerDialog}},[n._v(n._s(n.$gt("No")))]),n._v(" "),t("s-button",{attrs:{type:"primary"},on:{click:function(o){return n.closeDialog(!1)}}},[n._v(n._s(n.$gt("Yes")))])],1)]),n._v(" "),t("s-dialog",{attrs:{"show-close":!1,size:"medium",visible:n.saveConfirmVisible,"append-to-body":""}},[n._v(n._s(n.$gt("Are you sure to update order status?"))),t("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[t("s-button",{on:{click:n.closeInnerDialog}},[n._v(n._s(n.$gt("No")))]),n._v(" "),t("s-button",{attrs:{type:"primary"},on:{click:n.updateOrder}},[n._v(n._s(n.$gt("Yes")))])],1)])],1)},_=[],P=a("sk9p"),N=a("oF3Q"),j=a.n(N),V=a("jWXv"),B=a.n(V),M=a("eCTY"),Z=a("EA14"),H=a("DxUY"),$=a("A2FP"),T=a("QsnJ"),G=a("vNPV"),K=new(B())(["image/jpeg","image/png","image/gif"]);const W={props:{contextName:{type:String},basicParams:{type:Object,default:function(){return{}}},targetStatus:{type:Array,default:function(){return["Damaged","Lost"]}},shipmentId:{type:String,required:!0,default:""},photoLimit:{type:Number,default:3},actions:{type:Object,default:function(){return{}}},needRefreshList:{type:Boolean,default:!1}},data:function(){return{formData:{},loading:!1,uploadAPI:""+Z.v+H.sC,urlList:[],cancelConfirmVisible:!1,saveConfirmVisible:!1}},computed:(0,d.Z)({},(0,M.mapState)({status:function(n){return n.enums.systemEnums.fleet_order_status}}),{statusSelectOptions:function(){var n=this,t=[];return j()(this.status).forEach(function(i){var o=(0,P.Z)(i,2),m=o[0],r=o[1];n.targetStatus.includes(m)&&t.push({label:n.getStatusMapping(m,"fleet_order_status"),value:r})}),t}}),methods:{getStatusMapping:G.Be,beforeAvatarUpload:function(n){var t=K.has(n.type);return t||this.$message.warning("Please upload the photo in GIF\uFF0FPNG\uFF0FJPEG format"),t},openCancelConfirmDialog:function(){this.cancelConfirmVisible=!0},openSaveConfirmDialog:function(){this.saveConfirmVisible=!0},closeDialog:function(n){this.$emit("close-dialog",n),this.contextName&&w.context.rmAppend(this.contextName)},closeInnerDialog:function(){this.cancelConfirmVisible=!1,this.saveConfirmVisible=!1},updateOrder:function(){var e=(0,x.Z)(h().mark(function t(){var i,o;return h().wrap(function(r){for(;;)switch(r.prev=r.next){case 0:if(this.closeInnerDialog(),i=(0,d.Z)({},this.formData,this.basicParams,{photo_list:this.urlList.join(","),shipment_id:this.shipmentId}),this.verifyParams(i)){r.next=4;break}return r.abrupt("return");case 4:return r.prev=4,this.loading=!0,o=this.actions.submit,r.next=9,o(i);case 9:this.$message.success(T.Lz.base),this.needRefreshList&&this.refreshList(),this.closeDialog(!0),r.next=18;break;case 14:r.prev=14,r.t0=r.catch(4),console.error(r.t0),this.$message.error("Update order status failed: "+r.t0.message);case 18:return r.prev=18,this.loading=!1,r.finish(18);case 21:case"end":return r.stop()}},t,this,[[4,14,18,21]])}));function n(){return e.apply(this,arguments)}return n}(),refreshList:function(){(0,$.GA)(this.$store,this.contextName)},removeFile:function(n,t){this.urlList=t.map(function(i){var o=i.response;return o.data.url})},fileExceed:function(){return this.$message.warning("Max "+this.photoLimit+" photos"),!0},uploadSuccess:function(n){n.retcode===0?this.urlList.push(n.data.url):this.$message.error(n.message||"!0")},uploadError:function(){this.$message.error("Upload Error")},verifyParams:function(n){return n.status?!0:(this.$message.warning("Pls input required params"),!1)}}};var pn=a("rCKg"),R=a("KHd+"),Y=(0,R.Z)(W,k,_,!1,null,"61531715",null);const J=Y.exports;var p=a("P451"),I=a("l/LD"),A=a("Uum0"),Q=a("Ke0q"),X=a("LGrV"),F=a("pqmQ"),q=function(){var n=this,t=n._self._c;return t("s-dialog",{attrs:{title:n.$gt("Order Export"),width:"50%",visible:n.show,beforeClose:n.cancel}},[t("s-form",{ref:"form",attrs:{model:n.formData,"label-width":"150px"}},[t("s-form-item",{attrs:{label:n.$gt("Order Status:"),prop:"status"}},[t("s-tree",{attrs:{data:n.statusTreeData,"show-checkbox":"","node-key":"id","default-expand-all":"","expand-on-click-node":!1},on:{check:n.handleStatusClick}})],1),n._v(" "),t("s-form-item",{attrs:{label:n.$gt("Assigned Time:"),prop:"assignedTime"}},[t("s-date-picker",{attrs:{type:"datetimerange","start-placeholder":"Please choose date","end-placeholder":"Please choose date","default-time":["00:00:00","00:00:00"],"picker-options":n.dateOptions},model:{value:n.formData.assignedTime,callback:function(o){n.$set(n.formData,"assignedTime",o)},expression:"formData.assignedTime"}})],1),n._v(" "),t("s-form-item",{attrs:{label:n.$gt("Delivered Time:"),prop:"deliveredTime"}},[t("s-date-picker",{attrs:{type:"datetimerange","start-placeholder":"Please choose date","end-placeholder":"Please choose date","default-time":["00:00:00","00:00:00"],"picker-options":n.dateOptions},model:{value:n.formData.deliveredTime,callback:function(o){n.$set(n.formData,"deliveredTime",o)},expression:"formData.deliveredTime"}})],1),n._v(" "),t("s-form-item",{attrs:{label:n.$gt("3PL:"),prop:"driverId"}},[t("radio-select",{attrs:{name:"3PL","container-class":"cod-driver-radio-select","select-class":"driver-select",selectOptions:n.plOptions,value:n.formData.plIds},on:{"update:value":function(o){return n.$set(n.formData,"plIds",o)}}})],1)],1),n._v(" "),t("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[t("s-button",{on:{click:n.cancel}},[n._v(n._s(n.$gt("Cancel")))]),n._v(" "),t("s-button",{attrs:{type:"primary"},on:{click:n.confirm}},[n._v(n._s(n.$gt("Confirm")))])],1)],1)},nn=[],tn=a("C2/c"),an=a("PcDS"),en=a("GOkr"),z=a("4Jaa");const rn={components:{RadioSelect:tn.Z},props:["show","contextName"],data:function(){var n=new Date,t=n.getFullYear()+"-"+(n.getMonth()+1)+"-"+n.getDate();return{SHOW_CB:en.lF,confirming:!1,formData:{status:"",plIds:[],createTime:[new Date(t+" 00:00:00").getTime()-60*24*3600*1e3,new Date(t+" 00:00:00").getTime()],assignedTime:[],deliveredTime:[]},dateOptions:{disabledDate:function(o){return o.getTime()>Date.now()}}}},computed:(0,d.Z)({},(0,M.mapState)({plList:function(n){return n.plOrderMgt.pls.list},FLEET_STATUS:function(n){return n.enums.systemEnums.fleet_order_status}}),{statusTreeData:function(){var n=(0,F.wH)(this.FLEET_STATUS);return n[0].children.sort(function(t,i){return t.id-i.id}),n},plOptions:function(){return!this.plList||!this.plList.length?[]:this.plList.map(function(n){var t=n["3pl_id"],i=n["3pl_name"];return{label:"["+t+"] "+i,value:t}})}}),created:function(){this.fetch3pls()},methods:{cancel:function(){this.contextName&&w.context.rmAppend(this.contextName)},confirm:function(){var e=(0,x.Z)(h().mark(function t(){var i,o,m,r,b;return h().wrap(function(u){for(;;)switch(u.prev=u.next){case 0:if(!this.confirming){u.next=2;break}return u.abrupt("return");case 2:return this.confirming=!0,u.prev=3,i=(0,z.N_)(this.formData.createTime),o=(0,z.N_)(this.formData.assignedTime),m=(0,z.N_)(this.formData.deliveredTime),r=this.formData.status||this.statusTreeData[0].children.map(function(l){return l.id}).toString(),b={ctime:i,status:r},o&&(b.assigned_time=o),m&&(b.delivered_time=m),this.formData.plIds.length&&(b["3pl_id"]=(0,an.Ao)(this.formData.plIds)),u.next=14,this.$store.dispatch("plOrderMgt/exportPlOrders",b);case 14:this.$message.success(T.Lz.export),this.cancel(),u.next=22;break;case 18:u.prev=18,u.t0=u.catch(3),this.$message.error(T.cP.export+": "+u.t0.message),console.error("Export failed: ",u.t0);case 22:return u.prev=22,this.confirming=!1,u.finish(22);case 25:case"end":return u.stop()}},t,this,[[3,18,22,25]])}));function n(){return e.apply(this,arguments)}return n}(),handleStatusClick:function(n,t){this.formData.status=[].concat((0,C.Z)(t.checkedKeys)).filter(function(i){return i>=0}).join(",")},fetch3pls:function(n){this.$store.dispatch("plOrderMgt/load3pls",n)}}};var gn=a("80cW"),on=(0,R.Z)(rn,q,nn,!1,null,"5b1a82dc",null);const sn=on.exports;var D="3plOrder",dn=D+"View",O="plOrderMgt",L={all:{templateUrl:"/downloads/templates/mass_upload_3PL_tracking_num.xlsx",logViewName:"massUpdate3plNumLog",permission:"THIRD_PARTY_MASS_UPLOAD_TRACKING_NUM"}};function E(e){var n=(0,F.DV)(e,"state.3plOrderView.query.status");if(n==="all")return n;var t=f()((0,F.DV)(e,"state.enums.systemEnums.cod_status"));return t[+n]}function U(e,n){var t=E(e);if(n&&n!==t)return!0;var i=L[t];return!i||!(0,F.wD)(e,i.permission)}const ln={mode:w.constant.MODE.QUERY_IN_TABLE,main:D,customHooks:[].concat((0,C.Z)((0,$.NA)({viewName:D,historyName:"threePlOrderExportHistory",props:{group:(0,p.ok)("Export")},comp:{Export:sn},permission:"EXPORT_THIRD_PARTY_ORDER"})),[{label:(0,p.ok)("Mass Upload 3PL Tracking Num"),handler:function(){var e=(0,x.Z)(h().mark(function t(){var i,o,m,r,b,S;return h().wrap(function(l){for(;;)switch(l.prev=l.next){case 0:return l.prev=0,l.next=3,(0,I.mm)();case 3:return i=l.sent,o=new FormData,o.append("file",i),l.next=8,s.Z.massUpload3plNum(o);case 8:m=l.sent,r=m.data,b=r===void 0?{}:r,this.$message.success(T.Lz.base+". Total: "+b.total_quantity+"; Success: "+b.success_num),l.next=19;break;case 14:l.prev=14,l.t0=l.catch(0),S="Mass update 3PL tracking num failed: "+l.t0.message+".",S+=l.t0.data.total_quantity?"Total: "+l.t0.data.total_quantity+"; Success: "+l.t0.data.success_num+"; Fail: "+l.t0.data.failure_num:"",this.$message.error(S);case 19:case"end":return l.stop()}},t,this,[[0,14]])}));function n(){return e.apply(this,arguments)}return n}(),options:{props:{group:(0,p.ok)("Mass Update 3PL Tracking Num")},hide:function(){return U(this.$store,"all")}}},{label:(0,p.ok)("Template"),handler:function(){var n=L[E(this.$store)];window.open(n.templateUrl+"?t="+Date.now())},options:{props:{group:(0,p.ok)("Mass Update 3PL Tracking Num")},style:{float:"right"},hide:function(){return U(this.$store)}}},{label:(0,p.ok)("Upload Log"),handler:function(){var n=L[E(this.$store)];this.$router.push(n.logViewName)},options:{props:{group:(0,p.ok)("Mass Update 3PL Tracking Num")},style:{float:"right"},hide:function(){return U(this.$store)}}},{label:(0,p.ok)("Mass Update Status"),handler:function(){var e=(0,x.Z)(h().mark(function t(){var i,o;return h().wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return r.prev=0,r.next=3,this.$confirm((0,p.ok)("Do you want to update the logisics status to onhold/delivered?"),(0,p.ok)("Notice"));case 3:r.next=9;break;case 5:return r.prev=5,r.t0=r.catch(0),console.error("Close Confirm Mass Update Status"),r.abrupt("return");case 9:return r.prev=9,r.next=12,(0,I.mm)();case 12:return i=r.sent,o=new FormData,o.append("file",i),r.next=17,this.$store.dispatch("plOrderMgt/massUpdateOrderStatus",o);case 17:this.$message.success(T.Lz.base),r.next=23;break;case 20:r.prev=20,r.t1=r.catch(9),console.error("Mass update status failed: ",r.t1);case 23:case"end":return r.stop()}},t,this,[[0,5],[9,20]])}));function n(){return e.apply(this,arguments)}return n}(),options:{props:{group:(0,p.ok)("Mass Update Status")},hide:function(){return E(this.$store)!=="all"||!(0,F.wD)(this.$store,"MASS_UPDATE_3PL_FLEET_ORDER_STATUS")}}},{label:(0,p.ok)("Update To On-Hold/Delivered Template"),handler:function(){this.$store.dispatch("plOrderMgt/downloadMassUpdateTemplate")},options:{props:{group:(0,p.ok)("Mass Update Status")},hide:function(){return E(this.$store)!=="all"}}},{label:(0,p.ok)("Update Log"),handler:function(){this.$router.push("/threePlOrderMgtUpdateStatusLog")},options:{props:{group:(0,p.ok)("Mass Update Status")},hide:function(){return E(this.$store)!=="all"}}}]),actions:[{label:(0,p.ok)("View"),handler:function(n){var t={path:"/orderDetail",orderId:n.shipment_id,stationType:(0,Q.n1)()};X.p.call(this,t)},options:{hide:function(){return!(0,F.wD)(this.$store,"SEARCH_THIRD_PARTY_ORDER")}}},{label:(0,p.ok)("Update Order Status"),handler:function(n){var t=this,i=this.$createElement,o=(0,F.DV)(this.$store,"state.enums.systemEnums.on_hold_reason.name"),m=n.on_hold_reason,r=["Returning"];m===o["Item Lost"]&&r.push("Lost"),m===o["Damaged Item"]&&r.push("Damaged");var b={submit:function(l){return t.$store.dispatch("plOrderMgt/updateOrderStatus",l)}},S={contextName:D,shipmentId:n.shipment_id,targetStatus:r,actions:b,needRefreshList:!0};this.append(D,i(J,{props:S}))},options:{hide:function(){return E(this.$store)!=="On Hold"||!(0,F.wD)(this.$store,"MODIFY_3PL_FLEET_ORDER_STATUS")}}}],options:(0,d.Z)({},(0,$.t)(2e3),{hideCreateBtn:!0,hidePagination:!0,interceptors:{beforeEnter:function(){var e=(0,x.Z)(h().mark(function t(){return h().wrap(function(o){for(;;)switch(o.prev=o.next){case 0:return o.next=2,this.$store.dispatch(O+"/resetLazyPagination");case 2:case"end":return o.stop()}},t,this)}));function n(){return e.apply(this,arguments)}return n}(),search:function(n){n.status==="all"&&delete n.status;var t=this.$store;return this.$store.dispatch(O+"/saveCurrentFetchTotalParamsAction",(0,A.WW)(n)),(0,A.Su)(this.$store.state[D].listParams,n)&&!(0,A.Bq)(n,{store:t,storePath:O,stateName:"fetchTotalParams"})&&this.$store.dispatch(O+"/fetchTotal",n),n.fetch_total=0,n.fetch_list=1,n}},slots:{afterTable:function(){var n=this.$createElement;return n("spx-shared-lazy-pagination",{attrs:{storePath:O,viewPath:dn,resourcePath:D}})}}})}},ZIoK:(g,c,a)=>{var d=a("JPst");c=d(!1),c.push([g.id,`.remark[data-v-61531715] {
  margin-bottom: 10px;
}
[data-v-61531715] .ssc-upload-picture-card-add-normal:hover {
  border-color: #ee4d2d !important;
}
[data-v-61531715] .ssc-upload-picture-card-add-normal:hover svg {
  color: #ee4d2d;
}
[data-v-61531715] .ssc-textarea {
  width: 100%;
}
ul[data-v-61531715] {
  padding: 0;
  margin: 0;
  list-style: none;
}
.button-base[data-v-61531715] {
  padding: 9px 20px;
  font-size: 14px;
  color: #FFFFFF;
}
.spx-button[data-v-61531715] {
  padding: 9px 20px;
  font-size: 14px;
  color: #FFFFFF;
  border-color: #FFFFFF;
  color: #555555;
}
.spx-button[data-v-61531715]:hover {
  background-color: #FFFFFF;
}
.spx-button-primary[data-v-61531715] {
  padding: 9px 20px;
  font-size: 14px;
  color: #FFFFFF;
  background-color: #EE4D2D;
  border-color: #EE4D2D;
}
.ssc-message[data-v-61531715] {
  top: 20px !important;
}
.sp-card > .actions[data-v-61531715] {
  margin-bottom: 10px;
  display: flex;
  flex-wrap: wrap;
}
.sp-card > .actions .right[data-v-61531715] {
  flex: 1;
  text-align: right;
  height: 40px;
}
table th[data-v-61531715] {
  color: rgba(0, 0, 0, 0.85);
  border-color: #EEEEEE;
  font-size: 14px;
  font-weight: 500;
}
.spx-editor .ssc-tag[data-v-61531715] {
  font-size: 12px;
  margin: 0px;
  padding: 0;
}
.spx-editor .ssc-tag .left-padding-span[data-v-61531715] {
  width: 0;
  margin: 0 0 0 8px;
}
.spx-editor .ssc-tag .right-padding-span[data-v-61531715] {
  width: 0;
  margin: 0 8px 0 0;
}
.spx-editor .tag-editor-span[data-v-61531715] {
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
.spx-editor .tag-editor-span .tag-editor-span-space[data-v-61531715] {
  width: 8px;
  height: 15px;
  display: inline-block;
  line-height: 22px;
}
.ssc-tabs-type-pane-card .ssc-tabs-pane[data-v-61531715] {
  background: #FAFAFA;
}
.check-tree[data-v-61531715] {
  margin-left: 80px;
}
.avatar-uploader-icon[data-v-61531715] {
  font-size: 28px;
  color: #8c939d;
  width: 178px;
  height: 178px;
  line-height: 178px;
  text-align: center;
}
.avatar-uploader-icon-small[data-v-61531715] {
  font-size: 14px !important;
  color: #8c939d;
  width: 56px !important;
  height: 56px !important;
  line-height: 56px !important;
  text-align: center;
}
.avatar-uploader-icon-middle[data-v-61531715] {
  font-size: 14px !important;
  color: #8c939d;
  width: 94px !important;
  height: 94px !important;
  line-height: 94px !important;
  text-align: center;
}
.avatar[data-v-61531715] {
  width: 178px;
  height: 178px;
  display: block;
}
.avatar-small[data-v-61531715] {
  width: 56px;
  height: 56px;
  display: block;
}
.avatar-middle[data-v-61531715] {
  width: 94px;
  height: 94px;
  display: block;
}
.acribus-sp-tabs[data-v-61531715] {
  padding: 16px 16px 0px;
  border-radius: 6px;
  margin-bottom: -30px;
  background-color: #fff;
}
span.red[data-v-61531715] {
  color: #F56C6C;
}
span.green[data-v-61531715] {
  color: #67C23A;
}
.sp-hooks[data-v-61531715] {
  overflow: hidden;
}
.text-link[data-v-61531715] {
  color: #409eff;
  cursor: pointer;
}
.text-warning[data-v-61531715] {
  color: #e80808;
}
.help-text[data-v-61531715] {
  cursor: help;
}
.driver-performance-flag-A[data-v-61531715] {
  color: #55CC77;
}
.driver-performance-flag-B[data-v-61531715] {
  color: #999;
}
.driver-performance-flag-C[data-v-61531715] {
  color: #FF4742;
}
/* [check-in rule] Google map autosuggest result container */
.pac-container[data-v-61531715] {
  z-index: 100000;
}
.action-link[data-v-61531715] {
  color: #2769f0;
  cursor: pointer;
  display: inline-block;
  margin-left: 6px;
}
.action-link[data-v-61531715]:first-child {
  margin-left: 0;
}
.action-link[data-v-61531715]:hover {
  text-decoration: underline;
}
.separate-line[data-v-61531715] {
  height: 0;
  width: 100%;
  border-top: 1px #E9E9E9 solid;
  margin-bottom: 16px;
}
.white-fs-ground[data-v-61531715] {
  padding: 24px;
  background: #fff;
  height: 100%;
}
.white-fs-ground .category-title[data-v-61531715] {
  font-size: 16px;
  font-weight: 500;
  line-height: 16px;
  color: #333;
  margin-top: 56px;
  margin-bottom: 16px;
}
.white-fs-ground .category-title[data-v-61531715]:first-child {
  margin-top: 16px;
}
.white-fs-ground .category-title[data-v-61531715]:before {
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
.page-table-container[data-v-61531715] {
  border: 1px solid #eee;
}
.form-body-center[data-v-61531715] {
  margin: 0 auto;
}
.form-body-left[data-v-61531715] {
  margin: 0;
}
.dialog-footer[data-v-61531715],
.footer-submit[data-v-61531715] {
  margin-top: 32px;
}
.dialog-footer .ssc-button[data-v-61531715],
.footer-submit .ssc-button[data-v-61531715] {
  margin-left: 16px;
}
.dialog-footer .ssc-button[data-v-61531715]:first-child,
.footer-submit .ssc-button[data-v-61531715]:first-child {
  margin-left: 0;
}
.text-center[data-v-61531715] {
  text-align: center;
}
.s-form-textarea .ssc-textarea[data-v-61531715],
.ssc-form-item .ssc-select[data-v-61531715],
.ssc-form-item .ssc-input-size-medium[data-v-61531715] {
  width: 320px;
}
.ssc-steps.is-horizontal[data-v-61531715] {
  width: 60%;
  margin: 23px auto;
}
.action-wrap[data-v-61531715] {
  display: flex;
  margin: 10px 0;
}
.action-wrap .actions[data-v-61531715] {
  flex: 1;
}
.action-wrap .actions .ssc-button[data-v-61531715] {
  margin-right: 16px;
}
.action-wrap .upload-route-log-info[data-v-61531715] {
  align-self: center;
  text-align: right;
  flex: 1;
}
.action-wrap .upload-route-log-info label[data-v-61531715] {
  margin-right: 8px;
}
.upload-log-table[data-v-61531715] {
  margin: 10px 0;
}
.group-route-list-info[data-v-61531715] {
  line-height: 40px;
}
.group-route-list-info label[data-v-61531715] {
  margin-right: 10px;
}
.mass-upload-input-footer[data-v-61531715] {
  margin-top: 32px;
}
.mass-upload-input-footer .ssc-button[data-v-61531715] {
  margin-right: 10px;
}
.add-range-btn[data-v-61531715] {
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
.add-range-btn[data-v-61531715]:hover {
  background: #f6f6f6;
}
.range-wrap[data-v-61531715] {
  padding: 16px;
}
.range-wrap .seq-tag[data-v-61531715] {
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
.range-wrap .icon-del[data-v-61531715] {
  line-height: 32px;
  width: 24px;
  height: 24px;
  cursor: pointer;
  color: #bbb;
}
.range-wrap .icon-del[data-v-61531715]:hover {
  color: #888;
}
.bg-fafafa[data-v-61531715] {
  background: #fafafa;
}
.ssc-step-main-title[data-v-61531715] {
  line-height: 1.5;
}
.ssc-form-item-error-tip[data-v-61531715] {
  white-space: nowrap;
}
.ssc-table-header .ssc-table-header-title[data-v-61531715] {
  height: 100%;
}
.ssc-table-header .ssc-table-header-column-container[data-v-61531715] {
  height: 100%;
}
.ssc-table-body .ssc-table-header-column-container .td-content[data-v-61531715] {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.acribus-text-ellipsis[data-v-61531715] {
  display: inline-block;
  width: 100%;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.station-tree-container .ssc-form-item-content[data-v-61531715] {
  flex-direction: column;
  position: relative;
}
.station-tree-container .ssc-form-item-content .tree[data-v-61531715] {
  min-width: 318px;
  display: block;
  margin-top: 20px;
}
.station-tree-container .ssc-form-item-content .tree.has-search-input[data-v-61531715] {
  padding-top: 40px;
}
.station-tree-container .ssc-form-item-content .tree-input[data-v-61531715] {
  position: absolute;
  left: 3%;
  top: 30px;
  z-index: 1;
  width: 94%;
  margin: 0 auto;
  color: #aeaeae;
}
.ssc-dropdown-menu[data-v-61531715] {
  min-width: 176px;
  max-width: 320px;
  z-index: 2;
}
.ssc-dropdown-menu .active[data-v-61531715] {
  color: #EE4D2D;
  font-weight: 500;
}
.detail-part-title[data-v-61531715] {
  font-size: 18px;
  color: #333333;
  font-weight: 500;
  margin-bottom: 16px;
}
.detail-part-title.additional-info[data-v-61531715] {
  margin-top: 56px;
}
.detail-part-title[data-v-61531715]::before {
  content: '';
  width: 2px;
  height: 10px;
  background: #EE4D2D;
  display: inline-block;
  margin-right: 6px;
}
.page-wrapper[data-v-61531715] {
  height: 100%;
}
.zone-container button:disabled:not(.btn-prev):not(.btn-next).ssc-btn-type-primary[data-v-61531715] {
  color: #FFF !important;
  background: #EE4D2D !important;
  opacity: 0.5;
}
.pagination-left-total[data-v-61531715] {
  display: flex;
  flex: 1;
}
.common-status[data-v-61531715] {
  line-height: 12px;
  font-weight: 500;
  padding: 3px 4px;
  border-radius: 2px;
  display: inline-block;
  white-space: nowrap;
}
.common-status.status-success[data-v-61531715] {
  background: #ECFFF1;
  color: #1CC461;
}
.common-status.status-disabled[data-v-61531715] {
  color: #646B76;
  background: #F5F6F9;
}
.common-status.status-info[data-v-61531715] {
  color: #3274F7;
  background: #F0F7FF;
}
.common-status.status-danger[data-v-61531715] {
  color: #F32345;
  background: #FFF0F0;
}
.common-status.status-warning[data-v-61531715] {
  background: #FFF8DB;
  color: #FFB014;
}
.common-divide[data-v-61531715] {
  height: 8px;
  background: #F5F6F9;
  margin: 0 -24px;
}
.ssc-scan-toast[data-v-61531715] {
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
.ssc-scan-toast.ssc-scan-toast-success[data-v-61531715] {
  animation-duration: 4.4s;
  animation-name: scanSuccessToast-61531715;
  background: #1CC461;
}
.ssc-scan-toast.ssc-scan-toast-fail[data-v-61531715] {
  background: #F32345;
  animation-duration: 8.4s;
  animation-name: scanFailToast-61531715;
}
.ssc-scan-toast.ssc-scan-toast-notice[data-v-61531715] {
  background: #FFA620;
  animation-duration: 6.4s;
  animation-name: scanFailToast-61531715;
}
.ssc-scan-toast .message-panel[data-v-61531715] {
  display: flex;
  width: 100%;
  align-items: center;
}
.ssc-scan-toast .message-panel .icon[data-v-61531715] {
  margin-right: 18px;
  width: 28px;
  height: 28px;
  flex-shrink: 0;
}
.ssc-scan-toast .message-panel .text[data-v-61531715] {
  display: inline-block;
}
@keyframes scanSuccessToast-61531715 {
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
@keyframes scanFailToast-61531715 {
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
.table-pagination[data-v-61531715] {
  height: 56px;
  border: 1px solid #ECF0F4;
  border-top: 0;
  justify-content: flex-end;
  padding-right: 16px;
}
.journey-type[data-v-61531715] {
  display: flex;
  align-items: center;
}
.journey-type .journey-type-dot[data-v-61531715] {
  width: 6px;
  height: 6px;
  border-radius: 50%;
  display: inline-block;
  margin-right: 8px;
}
.pagination-sticky-bottom[data-v-61531715] {
  background: #fff;
  position: sticky;
  bottom: 16px;
}
.pagination-sticky-bottom[data-v-61531715]:after {
  content: ' ';
  background: #fff;
  width: 100%;
  height: 16px;
  position: absolute;
}
.pagination-sticky-bottom[data-v-61531715] .ssc-pagination {
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
.pagination-sticky-bottom[data-v-61531715] .ssc-pagination .total-container {
  flex: 1;
  margin-left: 15px;
  margin-right: 12px;
}
.sp-card-log-list[data-v-61531715] {
  padding: 16px 24px;
  background: #fff;
  min-height: 100%;
}
.ssc-table-panel .ssc-form-item .ssc-form-item-content textarea[data-v-61531715],
.pro-filter .ssc-form-item .ssc-form-item-content textarea[data-v-61531715] {
  border: transparent;
}
.message-red-text[data-v-61531715] {
  color: #EE4D2D;
  font-weight: 700;
}
`,""]),g.exports=c},AGop:(g,c,a)=>{var d=a("JPst");c=d(!1),c.push([g.id,`.ssc-form-item-content > .ssc-tree[data-v-5b1a82dc] {
  border: 1px solid #ECF0F4;
  border-radius: 4px;
  padding: 16px;
  max-height: 20em;
  overflow: auto;
  width: 424px;
  margin-left: 0 !important;
}
ul[data-v-5b1a82dc] {
  padding: 0;
  margin: 0;
  list-style: none;
}
.button-base[data-v-5b1a82dc] {
  padding: 9px 20px;
  font-size: 14px;
  color: #FFFFFF;
}
.spx-button[data-v-5b1a82dc] {
  padding: 9px 20px;
  font-size: 14px;
  color: #FFFFFF;
  border-color: #FFFFFF;
  color: #555555;
}
.spx-button[data-v-5b1a82dc]:hover {
  background-color: #FFFFFF;
}
.spx-button-primary[data-v-5b1a82dc] {
  padding: 9px 20px;
  font-size: 14px;
  color: #FFFFFF;
  background-color: #EE4D2D;
  border-color: #EE4D2D;
}
.ssc-message[data-v-5b1a82dc] {
  top: 20px !important;
}
.sp-card > .actions[data-v-5b1a82dc] {
  margin-bottom: 10px;
  display: flex;
  flex-wrap: wrap;
}
.sp-card > .actions .right[data-v-5b1a82dc] {
  flex: 1;
  text-align: right;
  height: 40px;
}
table th[data-v-5b1a82dc] {
  color: rgba(0, 0, 0, 0.85);
  border-color: #EEEEEE;
  font-size: 14px;
  font-weight: 500;
}
.spx-editor .ssc-tag[data-v-5b1a82dc] {
  font-size: 12px;
  margin: 0px;
  padding: 0;
}
.spx-editor .ssc-tag .left-padding-span[data-v-5b1a82dc] {
  width: 0;
  margin: 0 0 0 8px;
}
.spx-editor .ssc-tag .right-padding-span[data-v-5b1a82dc] {
  width: 0;
  margin: 0 8px 0 0;
}
.spx-editor .tag-editor-span[data-v-5b1a82dc] {
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
.spx-editor .tag-editor-span .tag-editor-span-space[data-v-5b1a82dc] {
  width: 8px;
  height: 15px;
  display: inline-block;
  line-height: 22px;
}
.ssc-tabs-type-pane-card .ssc-tabs-pane[data-v-5b1a82dc] {
  background: #FAFAFA;
}
.check-tree[data-v-5b1a82dc] {
  margin-left: 80px;
}
.avatar-uploader-icon[data-v-5b1a82dc] {
  font-size: 28px;
  color: #8c939d;
  width: 178px;
  height: 178px;
  line-height: 178px;
  text-align: center;
}
.avatar-uploader-icon-small[data-v-5b1a82dc] {
  font-size: 14px !important;
  color: #8c939d;
  width: 56px !important;
  height: 56px !important;
  line-height: 56px !important;
  text-align: center;
}
.avatar-uploader-icon-middle[data-v-5b1a82dc] {
  font-size: 14px !important;
  color: #8c939d;
  width: 94px !important;
  height: 94px !important;
  line-height: 94px !important;
  text-align: center;
}
.avatar[data-v-5b1a82dc] {
  width: 178px;
  height: 178px;
  display: block;
}
.avatar-small[data-v-5b1a82dc] {
  width: 56px;
  height: 56px;
  display: block;
}
.avatar-middle[data-v-5b1a82dc] {
  width: 94px;
  height: 94px;
  display: block;
}
.acribus-sp-tabs[data-v-5b1a82dc] {
  padding: 16px 16px 0px;
  border-radius: 6px;
  margin-bottom: -30px;
  background-color: #fff;
}
span.red[data-v-5b1a82dc] {
  color: #F56C6C;
}
span.green[data-v-5b1a82dc] {
  color: #67C23A;
}
.sp-hooks[data-v-5b1a82dc] {
  overflow: hidden;
}
.text-link[data-v-5b1a82dc] {
  color: #409eff;
  cursor: pointer;
}
.text-warning[data-v-5b1a82dc] {
  color: #e80808;
}
.help-text[data-v-5b1a82dc] {
  cursor: help;
}
.driver-performance-flag-A[data-v-5b1a82dc] {
  color: #55CC77;
}
.driver-performance-flag-B[data-v-5b1a82dc] {
  color: #999;
}
.driver-performance-flag-C[data-v-5b1a82dc] {
  color: #FF4742;
}
/* [check-in rule] Google map autosuggest result container */
.pac-container[data-v-5b1a82dc] {
  z-index: 100000;
}
.action-link[data-v-5b1a82dc] {
  color: #2769f0;
  cursor: pointer;
  display: inline-block;
  margin-left: 6px;
}
.action-link[data-v-5b1a82dc]:first-child {
  margin-left: 0;
}
.action-link[data-v-5b1a82dc]:hover {
  text-decoration: underline;
}
.separate-line[data-v-5b1a82dc] {
  height: 0;
  width: 100%;
  border-top: 1px #E9E9E9 solid;
  margin-bottom: 16px;
}
.white-fs-ground[data-v-5b1a82dc] {
  padding: 24px;
  background: #fff;
  height: 100%;
}
.white-fs-ground .category-title[data-v-5b1a82dc] {
  font-size: 16px;
  font-weight: 500;
  line-height: 16px;
  color: #333;
  margin-top: 56px;
  margin-bottom: 16px;
}
.white-fs-ground .category-title[data-v-5b1a82dc]:first-child {
  margin-top: 16px;
}
.white-fs-ground .category-title[data-v-5b1a82dc]:before {
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
.page-table-container[data-v-5b1a82dc] {
  border: 1px solid #eee;
}
.form-body-center[data-v-5b1a82dc] {
  margin: 0 auto;
}
.form-body-left[data-v-5b1a82dc] {
  margin: 0;
}
.dialog-footer[data-v-5b1a82dc],
.footer-submit[data-v-5b1a82dc] {
  margin-top: 32px;
}
.dialog-footer .ssc-button[data-v-5b1a82dc],
.footer-submit .ssc-button[data-v-5b1a82dc] {
  margin-left: 16px;
}
.dialog-footer .ssc-button[data-v-5b1a82dc]:first-child,
.footer-submit .ssc-button[data-v-5b1a82dc]:first-child {
  margin-left: 0;
}
.text-center[data-v-5b1a82dc] {
  text-align: center;
}
.s-form-textarea .ssc-textarea[data-v-5b1a82dc],
.ssc-form-item .ssc-select[data-v-5b1a82dc],
.ssc-form-item .ssc-input-size-medium[data-v-5b1a82dc] {
  width: 320px;
}
.ssc-steps.is-horizontal[data-v-5b1a82dc] {
  width: 60%;
  margin: 23px auto;
}
.action-wrap[data-v-5b1a82dc] {
  display: flex;
  margin: 10px 0;
}
.action-wrap .actions[data-v-5b1a82dc] {
  flex: 1;
}
.action-wrap .actions .ssc-button[data-v-5b1a82dc] {
  margin-right: 16px;
}
.action-wrap .upload-route-log-info[data-v-5b1a82dc] {
  align-self: center;
  text-align: right;
  flex: 1;
}
.action-wrap .upload-route-log-info label[data-v-5b1a82dc] {
  margin-right: 8px;
}
.upload-log-table[data-v-5b1a82dc] {
  margin: 10px 0;
}
.group-route-list-info[data-v-5b1a82dc] {
  line-height: 40px;
}
.group-route-list-info label[data-v-5b1a82dc] {
  margin-right: 10px;
}
.mass-upload-input-footer[data-v-5b1a82dc] {
  margin-top: 32px;
}
.mass-upload-input-footer .ssc-button[data-v-5b1a82dc] {
  margin-right: 10px;
}
.add-range-btn[data-v-5b1a82dc] {
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
.add-range-btn[data-v-5b1a82dc]:hover {
  background: #f6f6f6;
}
.range-wrap[data-v-5b1a82dc] {
  padding: 16px;
}
.range-wrap .seq-tag[data-v-5b1a82dc] {
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
.range-wrap .icon-del[data-v-5b1a82dc] {
  line-height: 32px;
  width: 24px;
  height: 24px;
  cursor: pointer;
  color: #bbb;
}
.range-wrap .icon-del[data-v-5b1a82dc]:hover {
  color: #888;
}
.bg-fafafa[data-v-5b1a82dc] {
  background: #fafafa;
}
.ssc-step-main-title[data-v-5b1a82dc] {
  line-height: 1.5;
}
.ssc-form-item-error-tip[data-v-5b1a82dc] {
  white-space: nowrap;
}
.ssc-table-header .ssc-table-header-title[data-v-5b1a82dc] {
  height: 100%;
}
.ssc-table-header .ssc-table-header-column-container[data-v-5b1a82dc] {
  height: 100%;
}
.ssc-table-body .ssc-table-header-column-container .td-content[data-v-5b1a82dc] {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.acribus-text-ellipsis[data-v-5b1a82dc] {
  display: inline-block;
  width: 100%;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.station-tree-container .ssc-form-item-content[data-v-5b1a82dc] {
  flex-direction: column;
  position: relative;
}
.station-tree-container .ssc-form-item-content .tree[data-v-5b1a82dc] {
  min-width: 318px;
  display: block;
  margin-top: 20px;
}
.station-tree-container .ssc-form-item-content .tree.has-search-input[data-v-5b1a82dc] {
  padding-top: 40px;
}
.station-tree-container .ssc-form-item-content .tree-input[data-v-5b1a82dc] {
  position: absolute;
  left: 3%;
  top: 30px;
  z-index: 1;
  width: 94%;
  margin: 0 auto;
  color: #aeaeae;
}
.ssc-dropdown-menu[data-v-5b1a82dc] {
  min-width: 176px;
  max-width: 320px;
  z-index: 2;
}
.ssc-dropdown-menu .active[data-v-5b1a82dc] {
  color: #EE4D2D;
  font-weight: 500;
}
.detail-part-title[data-v-5b1a82dc] {
  font-size: 18px;
  color: #333333;
  font-weight: 500;
  margin-bottom: 16px;
}
.detail-part-title.additional-info[data-v-5b1a82dc] {
  margin-top: 56px;
}
.detail-part-title[data-v-5b1a82dc]::before {
  content: '';
  width: 2px;
  height: 10px;
  background: #EE4D2D;
  display: inline-block;
  margin-right: 6px;
}
.page-wrapper[data-v-5b1a82dc] {
  height: 100%;
}
.zone-container button:disabled:not(.btn-prev):not(.btn-next).ssc-btn-type-primary[data-v-5b1a82dc] {
  color: #FFF !important;
  background: #EE4D2D !important;
  opacity: 0.5;
}
.pagination-left-total[data-v-5b1a82dc] {
  display: flex;
  flex: 1;
}
.common-status[data-v-5b1a82dc] {
  line-height: 12px;
  font-weight: 500;
  padding: 3px 4px;
  border-radius: 2px;
  display: inline-block;
  white-space: nowrap;
}
.common-status.status-success[data-v-5b1a82dc] {
  background: #ECFFF1;
  color: #1CC461;
}
.common-status.status-disabled[data-v-5b1a82dc] {
  color: #646B76;
  background: #F5F6F9;
}
.common-status.status-info[data-v-5b1a82dc] {
  color: #3274F7;
  background: #F0F7FF;
}
.common-status.status-danger[data-v-5b1a82dc] {
  color: #F32345;
  background: #FFF0F0;
}
.common-status.status-warning[data-v-5b1a82dc] {
  background: #FFF8DB;
  color: #FFB014;
}
.common-divide[data-v-5b1a82dc] {
  height: 8px;
  background: #F5F6F9;
  margin: 0 -24px;
}
.ssc-scan-toast[data-v-5b1a82dc] {
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
.ssc-scan-toast.ssc-scan-toast-success[data-v-5b1a82dc] {
  animation-duration: 4.4s;
  animation-name: scanSuccessToast-5b1a82dc;
  background: #1CC461;
}
.ssc-scan-toast.ssc-scan-toast-fail[data-v-5b1a82dc] {
  background: #F32345;
  animation-duration: 8.4s;
  animation-name: scanFailToast-5b1a82dc;
}
.ssc-scan-toast.ssc-scan-toast-notice[data-v-5b1a82dc] {
  background: #FFA620;
  animation-duration: 6.4s;
  animation-name: scanFailToast-5b1a82dc;
}
.ssc-scan-toast .message-panel[data-v-5b1a82dc] {
  display: flex;
  width: 100%;
  align-items: center;
}
.ssc-scan-toast .message-panel .icon[data-v-5b1a82dc] {
  margin-right: 18px;
  width: 28px;
  height: 28px;
  flex-shrink: 0;
}
.ssc-scan-toast .message-panel .text[data-v-5b1a82dc] {
  display: inline-block;
}
@keyframes scanSuccessToast-5b1a82dc {
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
@keyframes scanFailToast-5b1a82dc {
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
.table-pagination[data-v-5b1a82dc] {
  height: 56px;
  border: 1px solid #ECF0F4;
  border-top: 0;
  justify-content: flex-end;
  padding-right: 16px;
}
.journey-type[data-v-5b1a82dc] {
  display: flex;
  align-items: center;
}
.journey-type .journey-type-dot[data-v-5b1a82dc] {
  width: 6px;
  height: 6px;
  border-radius: 50%;
  display: inline-block;
  margin-right: 8px;
}
.pagination-sticky-bottom[data-v-5b1a82dc] {
  background: #fff;
  position: sticky;
  bottom: 16px;
}
.pagination-sticky-bottom[data-v-5b1a82dc]:after {
  content: ' ';
  background: #fff;
  width: 100%;
  height: 16px;
  position: absolute;
}
.pagination-sticky-bottom[data-v-5b1a82dc] .ssc-pagination {
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
.pagination-sticky-bottom[data-v-5b1a82dc] .ssc-pagination .total-container {
  flex: 1;
  margin-left: 15px;
  margin-right: 12px;
}
.sp-card-log-list[data-v-5b1a82dc] {
  padding: 16px 24px;
  background: #fff;
  min-height: 100%;
}
.ssc-table-panel .ssc-form-item .ssc-form-item-content textarea[data-v-5b1a82dc],
.pro-filter .ssc-form-item .ssc-form-item-content textarea[data-v-5b1a82dc] {
  border: transparent;
}
.message-red-text[data-v-5b1a82dc] {
  color: #EE4D2D;
  font-weight: 700;
}
`,""]),g.exports=c},"C2/c":(g,c,a)=>{"use strict";a.d(c,{Z:()=>y});var d=function(){var s=this,k=s._self._c;return k("div",{class:"radio-select "+s.containerClass},[k("s-radio-group",{on:{change:s.onRadioSwitched},model:{value:s.selectedRadio,callback:function(P){s.selectedRadio=P},expression:"selectedRadio"}},[k("s-radio",{attrs:{label:"all"}},[s._v(s._s(s.$gt("All")))]),s._v(" "),k("s-radio",{attrs:{label:""}},[s._v(s._s(s.$gt("Choose"))+" "+s._s(s.name))])],1),s._v(" "),s.showSelect?k("s-select",{class:"select-input "+s.selectClass,attrs:{value:s.value,filterable:s.filterable,multiple:s.multiple,size:s.size,useVirtual:!0,multipleConcise:s.multipleConcise,options:s.selectOptions,remote:s.remote,"remote-method":s.remoteMethod},on:{change:s.updateSelectedValues,"visible-change":s.visibleChange}}):s._e()],1)},v=[];const x={props:{filterable:{type:Boolean,default:!0},multiple:{type:Boolean,default:!0},size:{type:String,default:"medium"},containerClass:{type:String,default:""},selectClass:{type:String,default:""},name:{type:String,default:""},selectOptions:{type:Array,default:function(){return[]}},value:{type:Array,default:function(){return[]}},remote:{type:Boolean,default:!1},remoteMethod:{type:Function,default:function(){}},visibleChange:{type:Function,default:function(){}},multipleConcise:{type:Boolean,default:!0}},data:function(){return{showSelect:!1,selectedRadio:"all"}},methods:{onRadioSwitched:function(s){this.showSelect=s==="",this.showSelect||this.$emit("update:value",this.multipleConcise?[]:"")},updateSelectedValues:function(s){this.$emit("update:value",s)}}};var C=a("KHd+"),w=(0,C.Z)(x,d,v,!1,null,"5a42e36e",null);const y=w.exports},rCKg:(g,c,a)=>{var d=a("ZIoK");typeof d=="string"&&(d=[[g.id,d,""]]),d.locals&&(g.exports=d.locals);var v=a("er8A").Z,h=v("1971b68e",d,!0,{})},"80cW":(g,c,a)=>{var d=a("AGop");typeof d=="string"&&(d=[[g.id,d,""]]),d.locals&&(g.exports=d.locals);var v=a("er8A").Z,h=v("70596238",d,!0,{})}}]);
