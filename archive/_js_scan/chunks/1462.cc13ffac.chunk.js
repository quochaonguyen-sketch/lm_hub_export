(self.webpackChunkzzz_fms_admin=self.webpackChunkzzz_fms_admin||[]).push([[1462],{"04+p":(T,g,n)=>{"use strict";n.d(g,{Z:()=>x});var s=n("EA14");const x={createProofRule:function(p){return s.Z.post("/api/admin/pickup/order_settings/on_hold_reason/create",p)},editProofRule:function(p){return s.Z.post("/api/admin/pickup/order_settings/on_hold_reason/update",p)},exportProofRule:function(p){return s.Z.get("/api/admin/pickup/order_settings/on_hold_reason/export",{params:p})},getProofRuleDetail:function(p){return s.Z.get("/api/admin/pickup/order_settings/on_hold_reason/detail",{params:p})},getProofRuleList:function(p){return s.Z.get("/api/admin/pickup/order_settings/on_hold_reason/search",{params:p})},getProofRuleLog:function(p){return s.Z.get("/api/admin/pickup/order_settings/on_hold_reason/operation/log",{params:p})}}},nC2w:(T,g,n)=>{"use strict";n.r(g),n.d(g,{useEnumsMappingOptions:()=>Q,useLoadingWrapper:()=>K,useMappingOptions:()=>Z,useMessage:()=>j,useRef:()=>A});var s=n("14Xm"),x=n.n(s),c=n("D3Ub"),p=n("QbLZ"),M=n("sk9p"),I=n("oF3Q"),V=n.n(I),R=n("fp3J"),J=n.n(R),t=n("J/PD"),U=n.n(t),e=n("dQCL"),y=n.n(e),m=n("8YQ5"),E=void 0,A=function(k){var h=(0,R.ref)(k),O=function(v){h.value=v};return[h,O]},j=function(){return{message:e.Message.service,confirm:e.MessageBox.service.confirm,alert:e.MessageBox.service.alert,prompt:e.MessageBox.service.prompt,msgbox:e.MessageBox.service.msgbox}},Z=function(k){var h=(0,R.unref)(k),O=U()(h),w=V()(h).map(function(v){var o=(0,M.Z)(v,2),_=o[0],b=o[1];return{label:_,value:b}});return{mapping:O,options:w}},Q=function(k){var h=(0,R.computed)(function(){return(0,m.aJ)().store[k]||{}});return(0,p.Z)({enums:h},Z(h))},K=function(k,h,O){var w=A(!1),v=(0,M.Z)(w,2),o=v[0],_=v[1],b=A(null),F=(0,M.Z)(b,2),D=F[0],L=F[1],N=function(){var H=(0,c.Z)(x().mark(function z(W){return x().wrap(function(u){for(;;)switch(u.prev=u.next){case 0:return u.prev=0,L(null),_(!0),h&&h(),u.next=6,k(W);case 6:return u.abrupt("return",u.sent);case 9:u.prev=9,u.t0=u.catch(0),console.error(k.name+" error: "+u.t0.message),L(u.t0);case 13:return u.prev=13,O&&O(),_(!1),u.finish(13);case 17:case"end":return u.stop()}},z,E,[[0,9,13,17]])}));return function(W){return H.apply(this,arguments)}}();return{error:D,loading:o,loadingWrappedFunc:N}}},Mn1O:(T,g,n)=>{"use strict";n.d(g,{Z:()=>w});var s=n("QbLZ"),x=n("m1cH"),c=n("YEIV"),p=n("kvrn"),M=n.n(p),I=n("14Xm"),V=n.n(I),R=n("D3Ub"),J=n("ghRT"),t=n("fp3J"),U=n("EA14"),e=n("P451"),y=n("nC2w"),m=n("O4uc"),E=n("GOkr"),A=n("N4Da"),j=function(){var o=this,_=o._self._c;return _("div",{staticClass:"client-checkbox-group"},[o.required?_("span",{staticClass:"client-checkbox-group__required"},[o._v("*")]):o._e(),o._v(" "),_("span",{staticClass:"client-checkbox-group__label"},[o._v(o._s(o.label))]),o._v(" "),_("s-checkbox-group",{staticClass:"client-checkbox-group__options",on:{change:o.handleChange},model:{value:o.value,callback:function(F){o.value=F},expression:"value"}},o._l(o.options,function(b){return _("s-checkbox",{key:b.value,staticClass:"client-checkbox-group__option",attrs:{value:b.value}},[o._v(`
      `+o._s(b.label)+`
    `)])}),1)],1)},Z=[];const K={name:"ClientCheckboxGroup",props:{value:{type:Array,default:function(){return[]}},label:{type:String,default:"Client"},required:{type:Boolean,default:!0},options:{type:Array,default:function(){return[{value:"Buyer",label:1},{value:"Seller",label:2}]}}},computed:{innerValue:{get:function(){return this.value||[]},set:function(o){this.$emit("input",o||[]),this.$emit("change",o||[])}}},methods:{handleChange:function(o){this.$emit("change",o||[])}}};var S=n("TgVD"),k=n("KHd+"),h=(0,k.Z)(K,j,Z,!1,null,"282fd4ac",null);const O=h.exports;function w(){var v=this,o,_=(0,t.ref)(!1);(0,t.onMounted)((0,R.Z)(V().mark(function l(){var r,a,i;return V().wrap(function(d){for(;;)switch(d.prev=d.next){case 0:return d.next=2,U.Z.get("/api/bff/apollo/get_open_fe_config/by_cid?apollo_keys[]=open_fe_config.inhouse_locker_revamp");case 2:if(d.t0=d.sent,d.t0){d.next=5;break}d.t0={};case 5:r=d.t0,a=r.data,i=a===void 0?{}:a,i&&i.apollo_value&&i.apollo_value["open_fe_config.inhouse_locker_revamp"]&&(_.value=!0);case 9:case"end":return d.stop()}},l,v)})));var b=(0,t.getCurrentInstance)(),F=t.h.bind(b),D=(0,J.getSystemEnums)(),L=(0,t.reactive)(m.Z.state.enums.systemEnums.support_automated_validation||!1),N=(0,t.reactive)(m.Z.state.enums.systemEnums.enable_proof_of_contact_validation||!1),H=(0,t.reactive)(m.Z.state.enums.systemEnums.enable_mandatory_to_contact_seller||!1),z=(0,t.reactive)(m.Z.state.enums.systemEnums.on_hold_reason.type||{}),W=(0,t.reactive)(m.Z.state.enums.systemEnums.on_hold_reason.need_filter_by_order_account||{}),X=(0,t.reactive)(m.Z.state.enums.systemEnums.on_hold_reason.mandatory_contact_type||{}),u=(0,y.useMappingOptions)(X),Y=u.options,q=(0,t.reactive)(m.Z.state.enums.systemEnums.on_hold_reason.proof_of_contact_view_type||A.TH),ee=(0,y.useMappingOptions)(q),he=ee.options,_e=ee.mapping,be=(0,t.reactive)(m.Z.state.enums.systemEnums.on_hold_reason.automated_validation_type||{}),ne=(0,y.useMappingOptions)(be),xe=ne.options,ke=ne.mapping,C=(0,t.ref)(m.Z.state.enums.systemEnums.support_destination_type||!1),B=(0,t.reactive)(m.Z.state.enums.systemEnums.on_hold_reason.destination_type_list||{}),te=(0,y.useMappingOptions)(B),ae=te.mapping,G=te.options,Te=(0,t.reactive)(D.on_hold_reason.order_payment_method_type||{}),oe=(0,y.useMappingOptions)(Te),re=oe.mapping,$=oe.options,Ee=(0,t.reactive)(D.on_hold_reason.recipient_document_type||{}),ie=(0,y.useMappingOptions)(Ee),se=ie.mapping,de=ie.options,pe=(0,t.reactive)(D.on_hold_reason.need_real_time_validation||{}),Oe=(0,y.useMappingOptions)(pe),Fe=Oe.options,le=(0,t.reactive)(D.on_hold_reason.block_type||{}),Ce=(0,y.useMappingOptions)(le),Me=Ce.options,ce=(0,t.reactive)(D.on_hold_reason.validation_type||{}),De=(0,y.useMappingOptions)(ce),ue=De.options,Re=(0,t.computed)(function(){var l=G.filter(function(r){return r.value===B.Recipient||r.value===B.SP&&E.fi||r.value===B.Locker&&(E.Lu||_.value)});return{label:(0,e.ok)("Destination Type"),key:"destination_type_list",type:"checkbox-group",selectOptions:l,rules:[{message:(0,e.ok)("{label} should not be empty !",null,{label:(0,e.ok)("Destination Type")}),required:!0}],hide:!C.value}}),we=(0,t.reactive)(m.Z.state.enums.systemEnums.support_on_hold_issue_type_function||!1),Pe=(0,t.reactive)(m.Z.state.enums.systemEnums.on_hold_reason.issue_type||{}),Ie=(0,y.useMappingOptions)(Pe),Ae=Ie.options,Se=(0,t.computed)(function(){return{label:(0,e.ok)("Destination Type"),key:"destination_type_list",type:"select",selectOptions:G,rules:[{message:(0,e.ok)("{label} should not be empty !",null,{label:(0,e.ok)("Destination Type")}),required:!0}],props:{multiple:!0,multipleConcise:!0},hide:!C.value}}),Be=(0,t.computed)(function(){return{label:" ",key:"mandatory_contact_list",type:"use-custom",rules:[{validator:function(r,a,i){if(!a||a.length===0){i(new Error((0,e.ok)("Mandatory Contact should not be empty !")));return}i()}}],customSlot:function(){return F(O,M()([{attrs:{value:b.data.form.mandatory_contact_list||[],options:Y}},{on:{change:function(a){for(var i=arguments.length,f=Array(i>1?i-1:0),d=1;d<i;d++)f[d-1]=arguments[d];(function(P){b.data.form.mandatory_contact_list=P||[]}).apply(void 0,[a].concat(f))}}}]))},hide:!H}}),Ve=(0,t.computed)(function(){return{label:(0,e.ok)("Destination Type"),key:"destination_type_list",render:function(r,a){if(!a)return"";var i=a.split(",").map(function(f){return ae[f]}).join(",");return F("p",{class:"td-content-ellipsis",attrs:{title:i}},[i])},hide:!C.value}}),me=(0,t.reactive)(m.Z.state.enums.systemEnums.on_hold_reason.enable_reroute_home_delivery||{}),fe=(0,y.useMappingOptions)(me),Ze=fe.mapping,Le=fe.options,He=(0,t.computed)(function(){return{label:(0,e.ok)("Enable Reroute to Home Delivery"),key:"enable_reroute_home_delivery",type:"radio-group",selectOptions:Le,rules:[{message:(0,e.ok)("{label} should not be empty !",null,{label:(0,e.ok)("Enable Reroute to Home Delivery")}),required:!0}],props:{multiple:!0,multipleConcise:!0},hide:!C.value}}),ze=(0,t.computed)(function(){return{label:(0,e.ok)("Enable Reroute to Home Delivery"),key:"enable_reroute_home_delivery",render:function(r,a){return a===void 0?"":Ze[a]},hide:!C.value}}),ve=(o={},(0,c.Z)(o,(0,e.ok)("No"),1),(0,c.Z)(o,(0,e.ok)("Yes"),2),o),ge=(0,y.useMappingOptions)(ve),We=ge.mapping,Ue=ge.options,je=(0,t.computed)(function(){return{label:(0,e.ok)("Enable Automatic Reroute HD to SP"),key:"enable_automatic_reroute_hd_to_sp",type:"radio-group",selectOptions:Ue,rules:[{message:(0,e.ok)("{label} should not be empty !",null,{label:(0,e.ok)("Enable Automatic Reroute HD to SP")}),required:!0}],hide:!C.value}}),Ke=(0,t.computed)(function(){return{label:(0,e.ok)("Enable Automatic Reroute HD to SP"),key:"enable_automatic_reroute_hd_to_sp",render:function(r,a){return We[a]||"-"},hide:!C.value}}),Ne=(0,t.computed)(function(){return{label:(0,e.ok)("Issue Type"),key:"issue_type",type:"radio-group",selectOptions:Ae,rules:[{message:(0,e.ok)("{label} should not be empty !",null,{label:(0,e.ok)("Issue Type")}),required:!0},{validator:function(r,a,i){a||i(new Error((0,e.ok)("Issue Type should not be empty !"))),i()}}],props:{multiple:!0,multipleConcise:!0},hide:!we}}),Ge=(0,t.computed)(function(){var l=z.Express_Delivery_Onhold===b.data.form.type;return{label:(0,e.ok)("Order Payment Method Type"),key:"order_payment_method_type",type:"radio-group",slot:l?void 0:{iconName:"information",popover:{slot:(0,e.ok)("COD mode is not available for RTS orders.")}},selectOptions:l?$:[].concat((0,x.Z)($)).map(function(r){return(0,s.Z)({},r,{disabled:r.value===2})}),rules:[{message:(0,e.ok)("Order Payment Method Type should not be empty"),required:!0}]}}),$e=(0,t.computed)(function(){return{label:(0,e.ok)("Recipient Document Type"),key:"recipient_document_type",type:"radio-group",selectOptions:de,rules:[{message:(0,e.ok)("Recipient Document Type should not be empty"),required:!0}],hide:!E.S1}}),Je=(0,t.computed)(function(){return{label:(0,e.ok)("Order Payment Method Type"),key:"order_payment_method_type_desc",width:120}}),Qe=(0,t.computed)(function(){return{label:(0,e.ok)("Recipient Document Type"),key:"recipient_document_type_desc",width:120,hide:!E.S1}}),Xe=(0,t.computed)(function(){return{label:(0,e.ok)("Need Real Time Validation"),key:"need_real_time_validation_desc",width:120}}),Ye=(0,t.computed)(function(){return{label:(0,e.ok)("Validation Type"),key:"validation_type_desc",width:120}}),qe=(0,t.computed)(function(){return{label:(0,e.ok)("Earliest Time"),key:"earliest_time_desc",width:120}}),en=(0,t.computed)(function(){return{label:(0,e.ok)("Block Type"),key:"block_type_desc",width:120}}),nn=(0,t.computed)(function(){return{label:(0,e.ok)("Destination Type"),key:"destination_type_list",width:140,render:function(r,a){if(!a)return"";var i=a.split(",").map(function(f){return ae[f]}).join(",");return F("p",{class:"td-content-ellipsis",attrs:{title:i}},[i])},hide:!C.value,filter:{type:"select",options:G}}}),tn=(0,t.computed)(function(){return{label:(0,e.ok)("Order Payment Method Type"),key:"order_payment_method_type",width:120,render:function(r,a){return a?re[a]:"-"},filter:{type:"select",options:$}}}),an=(0,t.computed)(function(){return{label:(0,e.ok)("Recipient Document Type"),key:"recipient_document_type",width:120,render:function(r,a){return a?se[a]:"-"},filter:{type:"select",options:de}}}),on=[{label:(0,e.ok)("Normal"),value:1},{label:E.fZ?(0,e.ok)("Co-Check"):(0,e.ok)("Return on the Spot"),value:2}],rn={1:(0,e.ok)("Normal"),2:E.fZ?(0,e.ok)("Co-Check"):(0,e.ok)("Return on the Spot")},sn=(0,t.computed)(function(){return{label:(0,e.ok)("Reason Type"),key:"reason_type",width:120,render:function(r,a){return a?rn[a]:"-"},filter:{type:"select",options:on}}}),dn=function(r){return{label:(0,e.ok)("Real Time Validation"),key:"need_real_time_validation",type:"switch",rules:[{message:(0,e.ok)("Real Time Validation should not be empty !"),required:!0}],on:{change:r}}},pn=function(r,a){var i=arguments.length>2&&arguments[2]!==void 0?arguments[2]:!1;return{label:(0,e.ok)("Validation Type"),key:"validation_type",type:"radio-group",props:{vertical:!0},selectOptions:i?ue.map(function(f){return(0,s.Z)({},f,{disabled:f.value===1})}):ue,rules:[{message:(0,e.ok)("Validation Type should not be empty !"),required:!0},{validator:function(d,P,ye){P||ye(new Error((0,e.ok)("Validation Type should not be empty !"))),ye()}}],slot:i?{iconName:"information",popover:{slot:(0,e.ok)("Call log is not recorded for RTS orders.")}}:void 0,on:{change:a},hide:r}},ln=function(r){return{label:(0,e.ok)("Earliest Time"),key:"earliest_time",type:"time-select",props:{"picker-options":{start:"12:00",step:"00:30",end:"22:00"}},rules:[{message:(0,e.ok)("Earliest Time should not be empty !"),required:!0},{validator:function(i,f,d){(!f||f==="00:00")&&d(new Error((0,e.ok)("Earliest Time should not be empty !"))),d()}}],hide:r}},cn=function(){var r=arguments.length>0&&arguments[0]!==void 0?arguments[0]:!1,a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1;return{label:(0,e.ok)("Block Type"),key:"block_type",type:"radio-group",selectOptions:Me,rules:[{message:(0,e.ok)("Block Type should not be empty !"),required:!0},{validator:function(f,d,P){d||P(new Error((0,e.ok)("Block Type should not be empty !"))),P()}}],disabled:a,hide:r}};return{deliveryDestinationTypeFormItem:Se,deliveryDestinationTypeColumn:Ve,deliveryDestinationTypeEnum:B,deliveryRerouteToHomeFormItem:He,deliveryRerouteToHomeColumn:ze,deliveryRouteToHomeEnum:me,deliveryAutomaticRerouteHdToSpFormItem:je,deliveryAutomaticRerouteHdToSpColumn:Ke,deliveryAutomaticRerouteHdToSpEnum:ve,deliveryOnHoldIssueTypeFormItem:Ne,deliveryOrderPaymentMethodTypeFormItem:Ge,deliveryRecipientDocumentTypeFormItem:$e,deliveryOrderPaymentMethodTypeColumn:Je,deliveryRecipientDocumentTypeColumn:Qe,orderPaymentMethodTypeMap:re,recipientDocumentTypeMap:se,deliveryDestinationTypeSearchItem:nn,deliveryOrderPaymentMethodTypeSearchItem:tn,deliveryRecipientDocumentTypeSearchItem:an,deliveryReasonTypeSearchItem:sn,needRealTimeValidationOptions:Fe,deliveryRealTimeValidationFormItem:dn,deliveryValidationTypeFormItem:pn,deliveryEarliestTimeFormItem:ln,deliveryBlockTypeFormItem:cn,validationTypeEnum:ce,blockTypeEnum:le,needRealTimeValidationEnum:pe,deliveryOnHoldDestinationTypeFormItem:Re,deliveryNeedRealTimeValidationColumn:Xe,deliveryValidationTypeColumn:Ye,deliveryEarliestTimeColumn:qe,deliveryBlockTypeColumn:en,autoValidationOptions:xe,autoValidationMappings:ke,needFilterByOrderAccount:W,supportAutoValidation:L,supportProofOfContact:N,supportMandatoryToContactSeller:H,deliveryMandatoryToContactSellerFormItem:Be,proofOfContactViewListOptions:he,mandatoryContactTypeOptions:Y,proofOfContactViewListMap:_e,proofOfContactViewListEnum:q}}},"6wSw":(T,g,n)=>{"use strict";n.d(g,{S:()=>s,t:()=>x});function s(c){var p=c.supportFilterRecipientType,M=c.filterByOrderAccount,I=c.enableIndependentOrderAccountSelection;return{showDestinationType:Boolean(p),showOrderAccountSelection:Boolean(M&&(p||I))}}function x(c,p){return c!==p}},"2IXm":(T,g,n)=>{var s=n("JPst");g=s(!1),g.push([T.id,`.client-checkbox-group[data-v-282fd4ac] {
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 0 16px;
  padding: 12px 16px;
  background: #f8f8f8;
  border-radius: 8px;
  width: 100%;
  box-sizing: border-box;
  font-size: 14px;
  color: #595959;
  margin-top: -25px;
}
.client-checkbox-group__required[data-v-282fd4ac] {
  color: #ee4d2d;
  margin-right: 4px;
}
.client-checkbox-group__label[data-v-282fd4ac] {
  flex-shrink: 0;
  margin-right: 8px;
}
.client-checkbox-group__options[data-v-282fd4ac] {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
  gap: 16px 24px;
}
.client-checkbox-group__option[data-v-282fd4ac] {
  margin-right: 0;
}
.client-checkbox-group__option[data-v-282fd4ac] .ssc-checkbox__inner {
  border-color: #d9d9d9;
}
ul[data-v-282fd4ac] {
  padding: 0;
  margin: 0;
  list-style: none;
}
.button-base[data-v-282fd4ac] {
  padding: 9px 20px;
  font-size: 14px;
  color: #FFFFFF;
}
.spx-button[data-v-282fd4ac] {
  padding: 9px 20px;
  font-size: 14px;
  color: #FFFFFF;
  border-color: #FFFFFF;
  color: #555555;
}
.spx-button[data-v-282fd4ac]:hover {
  background-color: #FFFFFF;
}
.spx-button-primary[data-v-282fd4ac] {
  padding: 9px 20px;
  font-size: 14px;
  color: #FFFFFF;
  background-color: #EE4D2D;
  border-color: #EE4D2D;
}
.ssc-message[data-v-282fd4ac] {
  top: 20px !important;
}
.sp-card > .actions[data-v-282fd4ac] {
  margin-bottom: 10px;
  display: flex;
  flex-wrap: wrap;
}
.sp-card > .actions .right[data-v-282fd4ac] {
  flex: 1;
  text-align: right;
  height: 40px;
}
table th[data-v-282fd4ac] {
  color: rgba(0, 0, 0, 0.85);
  border-color: #EEEEEE;
  font-size: 14px;
  font-weight: 500;
}
.spx-editor .ssc-tag[data-v-282fd4ac] {
  font-size: 12px;
  margin: 0px;
  padding: 0;
}
.spx-editor .ssc-tag .left-padding-span[data-v-282fd4ac] {
  width: 0;
  margin: 0 0 0 8px;
}
.spx-editor .ssc-tag .right-padding-span[data-v-282fd4ac] {
  width: 0;
  margin: 0 8px 0 0;
}
.spx-editor .tag-editor-span[data-v-282fd4ac] {
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
.spx-editor .tag-editor-span .tag-editor-span-space[data-v-282fd4ac] {
  width: 8px;
  height: 15px;
  display: inline-block;
  line-height: 22px;
}
.ssc-tabs-type-pane-card .ssc-tabs-pane[data-v-282fd4ac] {
  background: #FAFAFA;
}
.check-tree[data-v-282fd4ac] {
  margin-left: 80px;
}
.avatar-uploader-icon[data-v-282fd4ac] {
  font-size: 28px;
  color: #8c939d;
  width: 178px;
  height: 178px;
  line-height: 178px;
  text-align: center;
}
.avatar-uploader-icon-small[data-v-282fd4ac] {
  font-size: 14px !important;
  color: #8c939d;
  width: 56px !important;
  height: 56px !important;
  line-height: 56px !important;
  text-align: center;
}
.avatar-uploader-icon-middle[data-v-282fd4ac] {
  font-size: 14px !important;
  color: #8c939d;
  width: 94px !important;
  height: 94px !important;
  line-height: 94px !important;
  text-align: center;
}
.avatar[data-v-282fd4ac] {
  width: 178px;
  height: 178px;
  display: block;
}
.avatar-small[data-v-282fd4ac] {
  width: 56px;
  height: 56px;
  display: block;
}
.avatar-middle[data-v-282fd4ac] {
  width: 94px;
  height: 94px;
  display: block;
}
.acribus-sp-tabs[data-v-282fd4ac] {
  padding: 16px 16px 0px;
  border-radius: 6px;
  margin-bottom: -30px;
  background-color: #fff;
}
span.red[data-v-282fd4ac] {
  color: #F56C6C;
}
span.green[data-v-282fd4ac] {
  color: #67C23A;
}
.sp-hooks[data-v-282fd4ac] {
  overflow: hidden;
}
.text-link[data-v-282fd4ac] {
  color: #409eff;
  cursor: pointer;
}
.text-warning[data-v-282fd4ac] {
  color: #e80808;
}
.help-text[data-v-282fd4ac] {
  cursor: help;
}
.driver-performance-flag-A[data-v-282fd4ac] {
  color: #55CC77;
}
.driver-performance-flag-B[data-v-282fd4ac] {
  color: #999;
}
.driver-performance-flag-C[data-v-282fd4ac] {
  color: #FF4742;
}
/* [check-in rule] Google map autosuggest result container */
.pac-container[data-v-282fd4ac] {
  z-index: 100000;
}
.action-link[data-v-282fd4ac] {
  color: #2769f0;
  cursor: pointer;
  display: inline-block;
  margin-left: 6px;
}
.action-link[data-v-282fd4ac]:first-child {
  margin-left: 0;
}
.action-link[data-v-282fd4ac]:hover {
  text-decoration: underline;
}
.separate-line[data-v-282fd4ac] {
  height: 0;
  width: 100%;
  border-top: 1px #E9E9E9 solid;
  margin-bottom: 16px;
}
.white-fs-ground[data-v-282fd4ac] {
  padding: 24px;
  background: #fff;
  height: 100%;
}
.white-fs-ground .category-title[data-v-282fd4ac] {
  font-size: 16px;
  font-weight: 500;
  line-height: 16px;
  color: #333;
  margin-top: 56px;
  margin-bottom: 16px;
}
.white-fs-ground .category-title[data-v-282fd4ac]:first-child {
  margin-top: 16px;
}
.white-fs-ground .category-title[data-v-282fd4ac]:before {
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
.page-table-container[data-v-282fd4ac] {
  border: 1px solid #eee;
}
.form-body-center[data-v-282fd4ac] {
  margin: 0 auto;
}
.form-body-left[data-v-282fd4ac] {
  margin: 0;
}
.dialog-footer[data-v-282fd4ac],
.footer-submit[data-v-282fd4ac] {
  margin-top: 32px;
}
.dialog-footer .ssc-button[data-v-282fd4ac],
.footer-submit .ssc-button[data-v-282fd4ac] {
  margin-left: 16px;
}
.dialog-footer .ssc-button[data-v-282fd4ac]:first-child,
.footer-submit .ssc-button[data-v-282fd4ac]:first-child {
  margin-left: 0;
}
.text-center[data-v-282fd4ac] {
  text-align: center;
}
.s-form-textarea .ssc-textarea[data-v-282fd4ac],
.ssc-form-item .ssc-select[data-v-282fd4ac],
.ssc-form-item .ssc-input-size-medium[data-v-282fd4ac] {
  width: 320px;
}
.ssc-steps.is-horizontal[data-v-282fd4ac] {
  width: 60%;
  margin: 23px auto;
}
.action-wrap[data-v-282fd4ac] {
  display: flex;
  margin: 10px 0;
}
.action-wrap .actions[data-v-282fd4ac] {
  flex: 1;
}
.action-wrap .actions .ssc-button[data-v-282fd4ac] {
  margin-right: 16px;
}
.action-wrap .upload-route-log-info[data-v-282fd4ac] {
  align-self: center;
  text-align: right;
  flex: 1;
}
.action-wrap .upload-route-log-info label[data-v-282fd4ac] {
  margin-right: 8px;
}
.upload-log-table[data-v-282fd4ac] {
  margin: 10px 0;
}
.group-route-list-info[data-v-282fd4ac] {
  line-height: 40px;
}
.group-route-list-info label[data-v-282fd4ac] {
  margin-right: 10px;
}
.mass-upload-input-footer[data-v-282fd4ac] {
  margin-top: 32px;
}
.mass-upload-input-footer .ssc-button[data-v-282fd4ac] {
  margin-right: 10px;
}
.add-range-btn[data-v-282fd4ac] {
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
.add-range-btn[data-v-282fd4ac]:hover {
  background: #f6f6f6;
}
.range-wrap[data-v-282fd4ac] {
  padding: 16px;
}
.range-wrap .seq-tag[data-v-282fd4ac] {
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
.range-wrap .icon-del[data-v-282fd4ac] {
  line-height: 32px;
  width: 24px;
  height: 24px;
  cursor: pointer;
  color: #bbb;
}
.range-wrap .icon-del[data-v-282fd4ac]:hover {
  color: #888;
}
.bg-fafafa[data-v-282fd4ac] {
  background: #fafafa;
}
.ssc-step-main-title[data-v-282fd4ac] {
  line-height: 1.5;
}
.ssc-form-item-error-tip[data-v-282fd4ac] {
  white-space: nowrap;
}
.ssc-table-header .ssc-table-header-title[data-v-282fd4ac] {
  height: 100%;
}
.ssc-table-header .ssc-table-header-column-container[data-v-282fd4ac] {
  height: 100%;
}
.ssc-table-body .ssc-table-header-column-container .td-content[data-v-282fd4ac] {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.acribus-text-ellipsis[data-v-282fd4ac] {
  display: inline-block;
  width: 100%;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.station-tree-container .ssc-form-item-content[data-v-282fd4ac] {
  flex-direction: column;
  position: relative;
}
.station-tree-container .ssc-form-item-content .tree[data-v-282fd4ac] {
  min-width: 318px;
  display: block;
  margin-top: 20px;
}
.station-tree-container .ssc-form-item-content .tree.has-search-input[data-v-282fd4ac] {
  padding-top: 40px;
}
.station-tree-container .ssc-form-item-content .tree-input[data-v-282fd4ac] {
  position: absolute;
  left: 3%;
  top: 30px;
  z-index: 1;
  width: 94%;
  margin: 0 auto;
  color: #aeaeae;
}
.ssc-dropdown-menu[data-v-282fd4ac] {
  min-width: 176px;
  max-width: 320px;
  z-index: 2;
}
.ssc-dropdown-menu .active[data-v-282fd4ac] {
  color: #EE4D2D;
  font-weight: 500;
}
.detail-part-title[data-v-282fd4ac] {
  font-size: 18px;
  color: #333333;
  font-weight: 500;
  margin-bottom: 16px;
}
.detail-part-title.additional-info[data-v-282fd4ac] {
  margin-top: 56px;
}
.detail-part-title[data-v-282fd4ac]::before {
  content: '';
  width: 2px;
  height: 10px;
  background: #EE4D2D;
  display: inline-block;
  margin-right: 6px;
}
.page-wrapper[data-v-282fd4ac] {
  height: 100%;
}
.zone-container button:disabled:not(.btn-prev):not(.btn-next).ssc-btn-type-primary[data-v-282fd4ac] {
  color: #FFF !important;
  background: #EE4D2D !important;
  opacity: 0.5;
}
.pagination-left-total[data-v-282fd4ac] {
  display: flex;
  flex: 1;
}
.common-status[data-v-282fd4ac] {
  line-height: 12px;
  font-weight: 500;
  padding: 3px 4px;
  border-radius: 2px;
  display: inline-block;
  white-space: nowrap;
}
.common-status.status-success[data-v-282fd4ac] {
  background: #ECFFF1;
  color: #1CC461;
}
.common-status.status-disabled[data-v-282fd4ac] {
  color: #646B76;
  background: #F5F6F9;
}
.common-status.status-info[data-v-282fd4ac] {
  color: #3274F7;
  background: #F0F7FF;
}
.common-status.status-danger[data-v-282fd4ac] {
  color: #F32345;
  background: #FFF0F0;
}
.common-status.status-warning[data-v-282fd4ac] {
  background: #FFF8DB;
  color: #FFB014;
}
.common-divide[data-v-282fd4ac] {
  height: 8px;
  background: #F5F6F9;
  margin: 0 -24px;
}
.ssc-scan-toast[data-v-282fd4ac] {
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
.ssc-scan-toast.ssc-scan-toast-success[data-v-282fd4ac] {
  animation-duration: 4.4s;
  animation-name: scanSuccessToast-282fd4ac;
  background: #1CC461;
}
.ssc-scan-toast.ssc-scan-toast-fail[data-v-282fd4ac] {
  background: #F32345;
  animation-duration: 8.4s;
  animation-name: scanFailToast-282fd4ac;
}
.ssc-scan-toast.ssc-scan-toast-notice[data-v-282fd4ac] {
  background: #FFA620;
  animation-duration: 6.4s;
  animation-name: scanFailToast-282fd4ac;
}
.ssc-scan-toast .message-panel[data-v-282fd4ac] {
  display: flex;
  width: 100%;
  align-items: center;
}
.ssc-scan-toast .message-panel .icon[data-v-282fd4ac] {
  margin-right: 18px;
  width: 28px;
  height: 28px;
  flex-shrink: 0;
}
.ssc-scan-toast .message-panel .text[data-v-282fd4ac] {
  display: inline-block;
}
@keyframes scanSuccessToast-282fd4ac {
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
@keyframes scanFailToast-282fd4ac {
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
.table-pagination[data-v-282fd4ac] {
  height: 56px;
  border: 1px solid #ECF0F4;
  border-top: 0;
  justify-content: flex-end;
  padding-right: 16px;
}
.journey-type[data-v-282fd4ac] {
  display: flex;
  align-items: center;
}
.journey-type .journey-type-dot[data-v-282fd4ac] {
  width: 6px;
  height: 6px;
  border-radius: 50%;
  display: inline-block;
  margin-right: 8px;
}
.pagination-sticky-bottom[data-v-282fd4ac] {
  background: #fff;
  position: sticky;
  bottom: 16px;
}
.pagination-sticky-bottom[data-v-282fd4ac]:after {
  content: ' ';
  background: #fff;
  width: 100%;
  height: 16px;
  position: absolute;
}
.pagination-sticky-bottom[data-v-282fd4ac] .ssc-pagination {
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
.pagination-sticky-bottom[data-v-282fd4ac] .ssc-pagination .total-container {
  flex: 1;
  margin-left: 15px;
  margin-right: 12px;
}
.sp-card-log-list[data-v-282fd4ac] {
  padding: 16px 24px;
  background: #fff;
  min-height: 100%;
}
.ssc-table-panel .ssc-form-item .ssc-form-item-content textarea[data-v-282fd4ac],
.pro-filter .ssc-form-item .ssc-form-item-content textarea[data-v-282fd4ac] {
  border: transparent;
}
.message-red-text[data-v-282fd4ac] {
  color: #EE4D2D;
  font-weight: 700;
}
`,""]),T.exports=g},TgVD:(T,g,n)=>{var s=n("2IXm");typeof s=="string"&&(s=[[T.id,s,""]]),s.locals&&(T.exports=s.locals);var x=n("er8A").Z,c=x("39c1f8a6",s,!0,{})}}]);
