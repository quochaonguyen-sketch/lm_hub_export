(self.webpackChunkzzz_fms_admin=self.webpackChunkzzz_fms_admin||[]).push([[1057],{kvrn:u=>{var l=/^(attrs|props|on|nativeOn|class|style|hook)$/;u.exports=function(p){return p.reduce(function(b,F){var g,d,f,x,y;for(f in F)if(g=b[f],d=F[f],g&&l.test(f))if(f==="class"&&(typeof g=="string"&&(y=g,b[f]=g={},g[y]=!0),typeof d=="string"&&(y=d,F[f]=d={},d[y]=!0)),f==="on"||f==="nativeOn"||f==="hook")for(x in d)g[x]=a(g[x],d[x]);else if(Array.isArray(g))b[f]=g.concat(d);else if(Array.isArray(d))b[f]=[g].concat(d);else for(x in d)g[x]=d[x];else b[f]=F[f];return b},{})};function a(i,p){return function(){i&&i.apply(this,arguments),p&&p.apply(this,arguments)}}},W7Cz:(u,l,a)=>{"use strict";a.d(l,{SN:()=>i.checkFormValidation});var i=a("0xHA"),p=a.n(i)},LGrV:(u,l,a)=>{"use strict";a.d(l,{p:()=>i.toOrderDetail});var i=a("dhR4"),p=a.n(i)},YyqV:(u,l,a)=>{"use strict";a.d(l,{D:()=>F,a:()=>b});var i=a("J2iB"),p=a.n(i),b=function(){var d=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},f=d.search_id_list,x=f===void 0?[]:f,y=d.sls_tracking_number,_=!p()(y)&&y!=="";return x&&x.length>0&&!_},F=function(){var d=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},f=b(d);return f?(d.method="post",delete d.sls_tracking_number):delete d.search_id_list,d}},"3k8Q":(u,l,a)=>{"use strict";a.r(l),a.d(l,{default:()=>tn});var i=a("14Xm"),p=a.n(i),b=a("D3Ub"),F=a("kvrn"),g=a.n(F),d=a("QbLZ"),f=a("m1cH"),x=a("9NXV"),y=a("mkaU"),_=a("P451"),k=a("A2FP"),C=a("QsnJ"),z=a("LGrV"),w=a("pqmQ"),O=a("YyqV"),T=function(){var n=this,t=n._self._c;return t("s-dialog",{staticClass:"batch-search",attrs:{title:n.$gt("Batch Search"),visible:n.visible,beforeClose:n.cancel,"append-to-body":!1}},[t("s-form",{ref:"form",attrs:{model:n.form}},[t("s-form-item",{attrs:{prop:"shipmentIdList"}},[t("s-textarea",{staticClass:"shipment-textarea",attrs:{placeholder:n.placeholder,"auto-rows":{minRows:3,maxRows:28}},model:{value:n.form.shipmentIdList,callback:function(s){n.$set(n.form,"shipmentIdList",s)},expression:"form.shipmentIdList"}}),n._v(" "),t("span",{staticClass:"tip"},[n._v(n._s(n.tip))])],1)],1),n._v(" "),t("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[t("s-button",{on:{click:n.cancel}},[n._v(n._s(n.$gt("Cancel")))]),n._v(" "),t("s-button",{attrs:{type:"primary",loading:n.loading.submit},on:{click:n.submit}},[n._v(n._s(n.$gt("Submit")))])],1)],1)},A=[],$=a("brkv"),R=a("eCTY"),P=a("W7Cz"),S=a("GOkr"),I=3e3;const M={props:{visible:{type:Boolean,default:!1},contextName:{type:String,default:""}},data:function(){return{form:{shipmentIdList:""},loading:{submit:!1},tip:this.$gt("Please use line breaks to separate the tracking numbers, only up to 3000 orders can be searched at once.")}},computed:(0,d.Z)({},(0,R.mapGetters)({defaultHandoverMode:"systemConfig/defaultHandoverMode",handoverModeList:"systemConfig/handoverModeList"}),{supportHandoverModeLabel:function(){var n=this.handoverModeList.reduce(function(t,o){var s=(0,C.pd)()[o];return s&&t.push(s),t},[]);return n.join(" / ")},placeholder:function(){return S.ag?this.$gt("Please input {label}",null,{label:this.supportHandoverModeLabel}):this.$gt("Please Input SPX Tracking Number / SLS Tracking Number")},rules:function(){return{shipmentIdList:[C.sO.REQUIRED.call(this,S.ag?this.supportHandoverModeLabel:this.$gt("SPX Tracking Number / SLS Tracking Number")),{trigger:"blur",validator:this.shipmentIdValidator}]}}}),methods:{cancel:function(){this.contextName&&x.context.rmAppend(this.contextName),this.$emit("update:visible",!1)},submit:function(){var r=(0,b.Z)(p().mark(function t(){var o,s,e;return p().wrap(function(h){for(;;)switch(h.prev=h.next){case 0:try{(0,P.SN)(this.$refs.form,"form"),(0,w.K4)(this,"submit",!0),o=this.form.shipmentIdList,s=o===void 0?"":o,e=s.split(/\s/).filter(function(c){return!(0,$.isNil)(c)&&c!==""}),this.$emit("batch-search-feedback",e)}catch(c){console.error(c)}finally{(0,w.K4)(this,"submit",!1)}case 1:case"end":return h.stop()}},t,this)}));function n(){return r.apply(this,arguments)}return n}(),shipmentIdValidator:function(n){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"",o=arguments[2],s=t.split(/\s/).filter(function(e){return!(0,$.isNil)(e)&&e!==""});s.length>I&&o(new Error(this.$gt("Order quantity exceeds limit."))),S.ag&&o(),o()}}};var dn=a("G+ha"),D=a("KHd+"),B=(0,D.Z)(M,T,A,!1,null,"7c7fe8f6",null);const H=B.exports;var j=function(){var n=this,t=n._self._c;return t("div",{staticClass:"batch-search-order-feedback"},[t("s-alert",{attrs:{type:n.type,"show-icon":""},on:{close:n.feedbackClose}},[t("template",{slot:"title"},[n._v(`
      `+n._s(n.tip)+`
      `),n.showViewDetail?t("s-button",{attrs:{type:"text"},on:{click:n.viewDetailClickHandler}},[n._v(n._s(n.$gt("View Detail")))]):n._e()],1)],2)],1)},U=[];const Z={props:{hasFoundCount:{type:Number,default:0},notFoundCount:{type:Number,default:0},duplicatedCount:{type:Number,default:0},viewDetailConfirm:{type:Function,default:function(){}},visible:{type:Boolean,default:!1},contextName:{type:String,default:""}},computed:{type:function(){return this.notFoundCount===0?"success":"warning"},tip:function(){var n="";return this.hasFoundCount===0?n=this.$gt("All {notFoundCount} orders not found.",null,{notFoundCount:this.notFoundCount}):this.notFoundCount===0?n=this.$gt("All {hasFoundCount} orders have been found.",null,{hasFoundCount:this.hasFoundCount}):n=this.$gt("{hasFoundCount} orders have been found, {notFoundCount} orders not found.",null,{hasFoundCount:this.hasFoundCount,notFoundCount:this.notFoundCount}),this.duplicatedCount&&this.duplicatedCount>0&&(n=this.$gt("{tip} There are {duplicatedCount} duplicated tracking numbers in the input list.",null,{tip:n,duplicatedCount:this.duplicatedCount})),n},showViewDetail:function(){return this.notFoundCount!==0&&(0,w.wD)(this.$store,"")}},methods:{viewDetailClickHandler:function(){this.viewDetailConfirm()},feedbackClose:function(){this.$emit("update:visible",!1)}}};var pn=a("WNpN"),V=(0,D.Z)(Z,j,U,!1,null,"6218bfa5",null);const G=V.exports;var K=function(){var n=this,t=n._self._c;return t("s-dialog",{attrs:{visible:n.visible,"before-close":n.cancel,"append-to-body":!1,title:n.$gt("Orders Not Found")}},[t("paginated-table",{attrs:{columns:n.tableColumns,dataList:n.paginatedList,total:n.list.length,"current-page":n.pagination.pageNo,"page-size":n.pagination.pageSize,showSizer:!1,onPageOptionChanged:n.onPageOptionChangedHandler}}),n._v(" "),t("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[t("s-button",{on:{click:n.cancel}},[n._v(n._s(n.$gt("Cancel")))]),n._v(" "),t("s-button",{attrs:{type:"primary"},on:{click:n.copyIdList}},[n._v(n._s(n.$gt("Copy")))])],1)],1)},W=[],X=a("h2x9");const Y={components:{PaginatedTable:X.Z},props:{list:{type:Array,default:function(){return[]}},visible:{type:Boolean,default:!1},contextName:{type:String,default:""}},data:function(){return{currentPage:1,pagination:{pageNo:1,pageSize:20},tableColumns:[{label:this.$gt("Tracking Number"),key:"id"}]}},computed:{paginatedList:function(){var n=(this.pagination.pageNo-1)*this.pagination.pageSize,t=n+this.pagination.pageSize;return this.list.slice(n,t)}},methods:{onPageOptionChangedHandler:function(){var n=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},t=n.pageNo,o=n.pageSize;this.pagination.pageSize=o,this.pagination.pageNo=t},cancel:function(){this.contextName&&x.context.rmAppend(this.contextName),this.$emit("update:visible",!1)},copyIdList:function(){var n=document.createElement("textarea"),t=this.list.reduce(function(o,s){var e=s.id;return o+=e+` 
`},"");n.value=t,document.body.appendChild(n),n.focus(),n.select();try{document.execCommand("copy"),this.$message.success(this.$gt("Copy Success!"))}catch(o){console.error(o)}n.blur(),document.body.removeChild(n)}}};var J=(0,D.Z)(Y,K,W,!1,null,null,null);const Q=J.exports;var q=a("Yifc"),m="fmHubReturnOrderList",nn=m+"View",L="/api/admin/transport/fm_hub_to_seller/fleet_order/search",N=function(n){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};t=(0,O.D)(t),n.dispatch("lazyPagination/fetchTotal",{xhrParams:t,url:L,viewName:m})};const tn={mode:x.constant.MODE.QUERY_IN_TABLE,main:m,customHooks:[{label:(0,_.ok)("Batch Search"),options:{fixed:"left"},handler:function(){var n=this,t=this.$createElement,o={contextName:m,visible:!0},s=function(){var v=arguments.length>0&&arguments[0]!==void 0?arguments[0]:[];k.sU.call(n,m,"shipment_id"),n.$store.commit(m+"/listParams",(0,d.Z)({},n.$store.state[m].listParams,{search_id_list:v,shipment_id:void 0}));var h=(0,d.Z)({},(0,w._g)(n.$store.state,m),{search_id_list:v,pageno:1});N(n.$store,h),(0,k.mH)(n.$store,m,function(c){return(0,d.Z)({},c,{search_id_list:v,pageno:1})}),n.rmAppend(m)};this.append(m,t(H,g()([{props:o},{on:{"batch-search-feedback":function(v){for(var h=arguments.length,c=Array(h>1?h-1:0),E=1;E<h;E++)c[E-1]=arguments[E];s.apply(void 0,[v].concat(c))}}}])))},slot:function(){var n=this.$createElement;return n("s-icon-search",{style:"width: 14px; height: 14px;"})}}].concat((0,f.Z)((0,k.NA)({viewName:m,historyName:m+"ExportHistory",exportAction:"returnMgt/fmHubReturnOrderListExport",permission:"FM_HUB_EXPORT_RETURN_ORDER",props:{group:(0,_.ok)("Export")},interceptors:{export:function(){var n=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},t=(0,d.Z)({},n),o=["return_des_station_ids","next_station_ids","cur_station_ids"];return o.forEach(function(s){Array.isArray(t[s])&&(t[s]=t[s].join(","))}),t}}})),[{label:(0,_.ok)("Export Searched Orders"),handler:function(){var r=(0,b.Z)(p().mark(function t(){var o,s,e,v;return p().wrap(function(c){for(;;)switch(c.prev=c.next){case 0:return o=this.$store.state.returnMgt.batchSearchFoundIdList,s=o===void 0?[]:o,e=s&&s.length>0,v={search_id_list:s},e&&(v.method="post"),c.prev=4,c.next=7,this.$store.dispatch("returnMgt/fmHubReturnOrderListExport",v);case 7:this.$message.success(C.Lz.export),c.next=13;break;case 10:c.prev=10,c.t0=c.catch(4),console.error(c.t0);case 13:case"end":return c.stop()}},t,this,[[4,10]])}));function n(){return r.apply(this,arguments)}return n}(),options:{props:{group:(0,_.ok)("Export"),_disabled_:function(){var n=this.$store.state.returnMgt||{},t=n.batchSearchFoundIdList,o=t===void 0?[]:t,s=!o||o.length===0;return!(0,w.wD)(this.$store,"FM_HUB_EXPORT_RETURN_ORDER")||s}}},renderLabel:function(){var n=this.$createElement,t={modifiers:{flip:{enabled:!1},preventOverflow:{escapeWithReference:!0}}},o=this.$store.state.returnMgt||{},s=o.batchSearchFoundIdList,e=s===void 0?[]:s,v=!e||e.length===0,h=!(0,w.wD)(this.$store,"FM_HUB_EXPORT_RETURN_ORDER")||v,c=this.$gt("Only functioned after batch search\uFF01");return n("s-tooltip",{attrs:{placement:"bottom",content:c,popperOptions:t,disabled:!h,transition:"","custom-class":"ssc-table-tooltip"}},[n("span",[this.$gt("Export Searched Orders")])])}}]),actions:[{label:(0,_.ok)("View"),handler:function(n){var t={orderId:n.shipment_id};z.p.call(this,t)},options:{props:{type:"primary"}}},{label:(0,_.ok)("Return Failed"),handler:function(){var r=(0,b.Z)(p().mark(function t(o){return p().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,this.$confirm(C.ao.makeOrderAsRTSFail,(0,_.ok)("Notice"));case 3:e.next=9;break;case 5:return e.prev=5,e.t0=e.catch(0),console.error("Close Confirm Return Failed",e.t0.message),e.abrupt("return");case 9:return e.prev=9,e.next=12,y.Z.makeOrderAsRTSFail({shipment_id:o.shipment_id});case 12:this.$message.success(C.Lz.base),(0,k.GA)(this.$store,m),e.next=20;break;case 16:e.prev=16,e.t1=e.catch(9),this.$message.error("Return order failed: "+e.t1.message),console.error("return order return failed:",e.t1);case 20:case"end":return e.stop()}},t,this,[[0,5],[9,16]])}));function n(t){return r.apply(this,arguments)}return n}(),options:{props:{type:"primary"},hide:function(n){return q.cy?!n.return_fail_enable:!0}}}],options:(0,d.Z)({},(0,k.t)(),{hideCreateBtn:!0,hidePagination:!0,interceptors:{beforeEnter:function(){var r=(0,b.Z)(p().mark(function t(){return p().wrap(function(s){for(;;)switch(s.prev=s.next){case 0:return s.next=2,this.$store.dispatch("lazyPagination/resetLazyPagination");case 2:case"end":return s.stop()}},t,this)}));function n(){return r.apply(this,arguments)}return n}(),search:function(n){var t=n.shop_id,o=t===void 0?"":t,s=o.split(",").map(function(h){return h.trim()});n.shop_id=s.join(",");var e=(0,d.Z)({},n),v=["return_des_station_ids","next_station_ids","cur_station_ids"];return v.forEach(function(h){Array.isArray(e[h])&&(e[h]=e[h].join(","))}),N(this.$store,(0,w.Lt)(e)),(0,k.l8)((0,w.Lt)(e))}},slots:(0,d.Z)({},(0,k.vm)({viewPath:nn,viewName:m,fetchTotalUrl:L}),{beforeTable:function(){var n=this,t=this.$createElement,o=this.$store.state.returnMgt,s=o.batchSearchNotFoundIdList,e=s===void 0?[]:s,v=o.duplicatedTrackingNumbers,h=v===void 0?0:v,c=o.isFetchingData,E=this.$store.state.lazyPagination.lazyPagination,an=(0,O.a)(this.$store.state[m].listParams),en=an&&!c,rn={hasFoundCount:E.total,notFoundCount:e.length,duplicatedCount:h,viewDetailConfirm:function(){var on={list:e,visible:!0,contextName:m};n.append(m,t(Q,{props:on}))}};return en?t(G,{props:rn}):""}})})}},Yifc:(u,l,a)=>{"use strict";a.d(l,{Xl:()=>d,cy:()=>p,sC:()=>g});var i=a("GOkr"),p=i.YB||i.xN||i.qD||i.vh||i.fZ||i.gY||i.G||i.G7||i.Ai,b=!1,F=null,g=i.G7,d=i.G7},VMIc:(u,l,a)=>{var i=a("JPst");l=i(!1),l.push([u.id,`.shipment-container[data-v-7c7fe8f6] {
  position: relative;
}
.shipment-textarea[data-v-7c7fe8f6] {
  width: 600px;
}
.shipment-textarea[data-v-7c7fe8f6] .ssc-textarea {
  position: relative;
  width: 100%;
  min-height: 70px !important;
  max-height: 411px !important;
}
.tip[data-v-7c7fe8f6] {
  display: inline-block;
  font-size: 12px;
  line-height: 14px;
  color: #999;
  position: absolute;
  bottom: -16px;
}
[data-v-7c7fe8f6] .ssc-form-item-error .tip {
  bottom: -34px;
}
ul[data-v-7c7fe8f6] {
  padding: 0;
  margin: 0;
  list-style: none;
}
.button-base[data-v-7c7fe8f6] {
  padding: 9px 20px;
  font-size: 14px;
  color: #FFFFFF;
}
.spx-button[data-v-7c7fe8f6] {
  padding: 9px 20px;
  font-size: 14px;
  color: #FFFFFF;
  border-color: #FFFFFF;
  color: #555555;
}
.spx-button[data-v-7c7fe8f6]:hover {
  background-color: #FFFFFF;
}
.spx-button-primary[data-v-7c7fe8f6] {
  padding: 9px 20px;
  font-size: 14px;
  color: #FFFFFF;
  background-color: #EE4D2D;
  border-color: #EE4D2D;
}
.ssc-message[data-v-7c7fe8f6] {
  top: 20px !important;
}
.sp-card > .actions[data-v-7c7fe8f6] {
  margin-bottom: 10px;
  display: flex;
  flex-wrap: wrap;
}
.sp-card > .actions .right[data-v-7c7fe8f6] {
  flex: 1;
  text-align: right;
  height: 40px;
}
table th[data-v-7c7fe8f6] {
  color: rgba(0, 0, 0, 0.85);
  border-color: #EEEEEE;
  font-size: 14px;
  font-weight: 500;
}
.spx-editor .ssc-tag[data-v-7c7fe8f6] {
  font-size: 12px;
  margin: 0px;
  padding: 0;
}
.spx-editor .ssc-tag .left-padding-span[data-v-7c7fe8f6] {
  width: 0;
  margin: 0 0 0 8px;
}
.spx-editor .ssc-tag .right-padding-span[data-v-7c7fe8f6] {
  width: 0;
  margin: 0 8px 0 0;
}
.spx-editor .tag-editor-span[data-v-7c7fe8f6] {
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
.spx-editor .tag-editor-span .tag-editor-span-space[data-v-7c7fe8f6] {
  width: 8px;
  height: 15px;
  display: inline-block;
  line-height: 22px;
}
.ssc-tabs-type-pane-card .ssc-tabs-pane[data-v-7c7fe8f6] {
  background: #FAFAFA;
}
.check-tree[data-v-7c7fe8f6] {
  margin-left: 80px;
}
.avatar-uploader-icon[data-v-7c7fe8f6] {
  font-size: 28px;
  color: #8c939d;
  width: 178px;
  height: 178px;
  line-height: 178px;
  text-align: center;
}
.avatar-uploader-icon-small[data-v-7c7fe8f6] {
  font-size: 14px !important;
  color: #8c939d;
  width: 56px !important;
  height: 56px !important;
  line-height: 56px !important;
  text-align: center;
}
.avatar-uploader-icon-middle[data-v-7c7fe8f6] {
  font-size: 14px !important;
  color: #8c939d;
  width: 94px !important;
  height: 94px !important;
  line-height: 94px !important;
  text-align: center;
}
.avatar[data-v-7c7fe8f6] {
  width: 178px;
  height: 178px;
  display: block;
}
.avatar-small[data-v-7c7fe8f6] {
  width: 56px;
  height: 56px;
  display: block;
}
.avatar-middle[data-v-7c7fe8f6] {
  width: 94px;
  height: 94px;
  display: block;
}
.acribus-sp-tabs[data-v-7c7fe8f6] {
  padding: 16px 16px 0px;
  border-radius: 6px;
  margin-bottom: -30px;
  background-color: #fff;
}
span.red[data-v-7c7fe8f6] {
  color: #F56C6C;
}
span.green[data-v-7c7fe8f6] {
  color: #67C23A;
}
.sp-hooks[data-v-7c7fe8f6] {
  overflow: hidden;
}
.text-link[data-v-7c7fe8f6] {
  color: #409eff;
  cursor: pointer;
}
.text-warning[data-v-7c7fe8f6] {
  color: #e80808;
}
.help-text[data-v-7c7fe8f6] {
  cursor: help;
}
.driver-performance-flag-A[data-v-7c7fe8f6] {
  color: #55CC77;
}
.driver-performance-flag-B[data-v-7c7fe8f6] {
  color: #999;
}
.driver-performance-flag-C[data-v-7c7fe8f6] {
  color: #FF4742;
}
/* [check-in rule] Google map autosuggest result container */
.pac-container[data-v-7c7fe8f6] {
  z-index: 100000;
}
.action-link[data-v-7c7fe8f6] {
  color: #2769f0;
  cursor: pointer;
  display: inline-block;
  margin-left: 6px;
}
.action-link[data-v-7c7fe8f6]:first-child {
  margin-left: 0;
}
.action-link[data-v-7c7fe8f6]:hover {
  text-decoration: underline;
}
.separate-line[data-v-7c7fe8f6] {
  height: 0;
  width: 100%;
  border-top: 1px #E9E9E9 solid;
  margin-bottom: 16px;
}
.white-fs-ground[data-v-7c7fe8f6] {
  padding: 24px;
  background: #fff;
  height: 100%;
}
.white-fs-ground .category-title[data-v-7c7fe8f6] {
  font-size: 16px;
  font-weight: 500;
  line-height: 16px;
  color: #333;
  margin-top: 56px;
  margin-bottom: 16px;
}
.white-fs-ground .category-title[data-v-7c7fe8f6]:first-child {
  margin-top: 16px;
}
.white-fs-ground .category-title[data-v-7c7fe8f6]:before {
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
.page-table-container[data-v-7c7fe8f6] {
  border: 1px solid #eee;
}
.form-body-center[data-v-7c7fe8f6] {
  margin: 0 auto;
}
.form-body-left[data-v-7c7fe8f6] {
  margin: 0;
}
.dialog-footer[data-v-7c7fe8f6],
.footer-submit[data-v-7c7fe8f6] {
  margin-top: 32px;
}
.dialog-footer .ssc-button[data-v-7c7fe8f6],
.footer-submit .ssc-button[data-v-7c7fe8f6] {
  margin-left: 16px;
}
.dialog-footer .ssc-button[data-v-7c7fe8f6]:first-child,
.footer-submit .ssc-button[data-v-7c7fe8f6]:first-child {
  margin-left: 0;
}
.text-center[data-v-7c7fe8f6] {
  text-align: center;
}
.s-form-textarea .ssc-textarea[data-v-7c7fe8f6],
.ssc-form-item .ssc-select[data-v-7c7fe8f6],
.ssc-form-item .ssc-input-size-medium[data-v-7c7fe8f6] {
  width: 320px;
}
.ssc-steps.is-horizontal[data-v-7c7fe8f6] {
  width: 60%;
  margin: 23px auto;
}
.action-wrap[data-v-7c7fe8f6] {
  display: flex;
  margin: 10px 0;
}
.action-wrap .actions[data-v-7c7fe8f6] {
  flex: 1;
}
.action-wrap .actions .ssc-button[data-v-7c7fe8f6] {
  margin-right: 16px;
}
.action-wrap .upload-route-log-info[data-v-7c7fe8f6] {
  align-self: center;
  text-align: right;
  flex: 1;
}
.action-wrap .upload-route-log-info label[data-v-7c7fe8f6] {
  margin-right: 8px;
}
.upload-log-table[data-v-7c7fe8f6] {
  margin: 10px 0;
}
.group-route-list-info[data-v-7c7fe8f6] {
  line-height: 40px;
}
.group-route-list-info label[data-v-7c7fe8f6] {
  margin-right: 10px;
}
.mass-upload-input-footer[data-v-7c7fe8f6] {
  margin-top: 32px;
}
.mass-upload-input-footer .ssc-button[data-v-7c7fe8f6] {
  margin-right: 10px;
}
.add-range-btn[data-v-7c7fe8f6] {
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
.add-range-btn[data-v-7c7fe8f6]:hover {
  background: #f6f6f6;
}
.range-wrap[data-v-7c7fe8f6] {
  padding: 16px;
}
.range-wrap .seq-tag[data-v-7c7fe8f6] {
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
.range-wrap .icon-del[data-v-7c7fe8f6] {
  line-height: 32px;
  width: 24px;
  height: 24px;
  cursor: pointer;
  color: #bbb;
}
.range-wrap .icon-del[data-v-7c7fe8f6]:hover {
  color: #888;
}
.bg-fafafa[data-v-7c7fe8f6] {
  background: #fafafa;
}
.ssc-step-main-title[data-v-7c7fe8f6] {
  line-height: 1.5;
}
.ssc-form-item-error-tip[data-v-7c7fe8f6] {
  white-space: nowrap;
}
.ssc-table-header .ssc-table-header-title[data-v-7c7fe8f6] {
  height: 100%;
}
.ssc-table-header .ssc-table-header-column-container[data-v-7c7fe8f6] {
  height: 100%;
}
.ssc-table-body .ssc-table-header-column-container .td-content[data-v-7c7fe8f6] {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.acribus-text-ellipsis[data-v-7c7fe8f6] {
  display: inline-block;
  width: 100%;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.station-tree-container .ssc-form-item-content[data-v-7c7fe8f6] {
  flex-direction: column;
  position: relative;
}
.station-tree-container .ssc-form-item-content .tree[data-v-7c7fe8f6] {
  min-width: 318px;
  display: block;
  margin-top: 20px;
}
.station-tree-container .ssc-form-item-content .tree.has-search-input[data-v-7c7fe8f6] {
  padding-top: 40px;
}
.station-tree-container .ssc-form-item-content .tree-input[data-v-7c7fe8f6] {
  position: absolute;
  left: 3%;
  top: 30px;
  z-index: 1;
  width: 94%;
  margin: 0 auto;
  color: #aeaeae;
}
.ssc-dropdown-menu[data-v-7c7fe8f6] {
  min-width: 176px;
  max-width: 320px;
  z-index: 2;
}
.ssc-dropdown-menu .active[data-v-7c7fe8f6] {
  color: #EE4D2D;
  font-weight: 500;
}
.detail-part-title[data-v-7c7fe8f6] {
  font-size: 18px;
  color: #333333;
  font-weight: 500;
  margin-bottom: 16px;
}
.detail-part-title.additional-info[data-v-7c7fe8f6] {
  margin-top: 56px;
}
.detail-part-title[data-v-7c7fe8f6]::before {
  content: '';
  width: 2px;
  height: 10px;
  background: #EE4D2D;
  display: inline-block;
  margin-right: 6px;
}
.page-wrapper[data-v-7c7fe8f6] {
  height: 100%;
}
.zone-container button:disabled:not(.btn-prev):not(.btn-next).ssc-btn-type-primary[data-v-7c7fe8f6] {
  color: #FFF !important;
  background: #EE4D2D !important;
  opacity: 0.5;
}
.pagination-left-total[data-v-7c7fe8f6] {
  display: flex;
  flex: 1;
}
.common-status[data-v-7c7fe8f6] {
  line-height: 12px;
  font-weight: 500;
  padding: 3px 4px;
  border-radius: 2px;
  display: inline-block;
  white-space: nowrap;
}
.common-status.status-success[data-v-7c7fe8f6] {
  background: #ECFFF1;
  color: #1CC461;
}
.common-status.status-disabled[data-v-7c7fe8f6] {
  color: #646B76;
  background: #F5F6F9;
}
.common-status.status-info[data-v-7c7fe8f6] {
  color: #3274F7;
  background: #F0F7FF;
}
.common-status.status-danger[data-v-7c7fe8f6] {
  color: #F32345;
  background: #FFF0F0;
}
.common-status.status-warning[data-v-7c7fe8f6] {
  background: #FFF8DB;
  color: #FFB014;
}
.common-divide[data-v-7c7fe8f6] {
  height: 8px;
  background: #F5F6F9;
  margin: 0 -24px;
}
.ssc-scan-toast[data-v-7c7fe8f6] {
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
.ssc-scan-toast.ssc-scan-toast-success[data-v-7c7fe8f6] {
  animation-duration: 4.4s;
  animation-name: scanSuccessToast-7c7fe8f6;
  background: #1CC461;
}
.ssc-scan-toast.ssc-scan-toast-fail[data-v-7c7fe8f6] {
  background: #F32345;
  animation-duration: 8.4s;
  animation-name: scanFailToast-7c7fe8f6;
}
.ssc-scan-toast.ssc-scan-toast-notice[data-v-7c7fe8f6] {
  background: #FFA620;
  animation-duration: 6.4s;
  animation-name: scanFailToast-7c7fe8f6;
}
.ssc-scan-toast .message-panel[data-v-7c7fe8f6] {
  display: flex;
  width: 100%;
  align-items: center;
}
.ssc-scan-toast .message-panel .icon[data-v-7c7fe8f6] {
  margin-right: 18px;
  width: 28px;
  height: 28px;
  flex-shrink: 0;
}
.ssc-scan-toast .message-panel .text[data-v-7c7fe8f6] {
  display: inline-block;
}
@keyframes scanSuccessToast-7c7fe8f6 {
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
@keyframes scanFailToast-7c7fe8f6 {
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
.table-pagination[data-v-7c7fe8f6] {
  height: 56px;
  border: 1px solid #ECF0F4;
  border-top: 0;
  justify-content: flex-end;
  padding-right: 16px;
}
.journey-type[data-v-7c7fe8f6] {
  display: flex;
  align-items: center;
}
.journey-type .journey-type-dot[data-v-7c7fe8f6] {
  width: 6px;
  height: 6px;
  border-radius: 50%;
  display: inline-block;
  margin-right: 8px;
}
.pagination-sticky-bottom[data-v-7c7fe8f6] {
  background: #fff;
  position: sticky;
  bottom: 16px;
}
.pagination-sticky-bottom[data-v-7c7fe8f6]:after {
  content: ' ';
  background: #fff;
  width: 100%;
  height: 16px;
  position: absolute;
}
.pagination-sticky-bottom[data-v-7c7fe8f6] .ssc-pagination {
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
.pagination-sticky-bottom[data-v-7c7fe8f6] .ssc-pagination .total-container {
  flex: 1;
  margin-left: 15px;
  margin-right: 12px;
}
.sp-card-log-list[data-v-7c7fe8f6] {
  padding: 16px 24px;
  background: #fff;
  min-height: 100%;
}
.ssc-table-panel .ssc-form-item .ssc-form-item-content textarea[data-v-7c7fe8f6],
.pro-filter .ssc-form-item .ssc-form-item-content textarea[data-v-7c7fe8f6] {
  border: transparent;
}
.message-red-text[data-v-7c7fe8f6] {
  color: #EE4D2D;
  font-weight: 700;
}
`,""]),u.exports=l},ndyk:(u,l,a)=>{var i=a("JPst");l=i(!1),l.push([u.id,`.batch-search-order-feedback[data-v-6218bfa5] {
  padding: 0 0 16px 0;
  background: #fff;
}
.batch-search-order-feedback[data-v-6218bfa5] .ssc-button {
  height: 16px;
  line-height: 16px;
}
ul[data-v-6218bfa5] {
  padding: 0;
  margin: 0;
  list-style: none;
}
.button-base[data-v-6218bfa5] {
  padding: 9px 20px;
  font-size: 14px;
  color: #FFFFFF;
}
.spx-button[data-v-6218bfa5] {
  padding: 9px 20px;
  font-size: 14px;
  color: #FFFFFF;
  border-color: #FFFFFF;
  color: #555555;
}
.spx-button[data-v-6218bfa5]:hover {
  background-color: #FFFFFF;
}
.spx-button-primary[data-v-6218bfa5] {
  padding: 9px 20px;
  font-size: 14px;
  color: #FFFFFF;
  background-color: #EE4D2D;
  border-color: #EE4D2D;
}
.ssc-message[data-v-6218bfa5] {
  top: 20px !important;
}
.sp-card > .actions[data-v-6218bfa5] {
  margin-bottom: 10px;
  display: flex;
  flex-wrap: wrap;
}
.sp-card > .actions .right[data-v-6218bfa5] {
  flex: 1;
  text-align: right;
  height: 40px;
}
table th[data-v-6218bfa5] {
  color: rgba(0, 0, 0, 0.85);
  border-color: #EEEEEE;
  font-size: 14px;
  font-weight: 500;
}
.spx-editor .ssc-tag[data-v-6218bfa5] {
  font-size: 12px;
  margin: 0px;
  padding: 0;
}
.spx-editor .ssc-tag .left-padding-span[data-v-6218bfa5] {
  width: 0;
  margin: 0 0 0 8px;
}
.spx-editor .ssc-tag .right-padding-span[data-v-6218bfa5] {
  width: 0;
  margin: 0 8px 0 0;
}
.spx-editor .tag-editor-span[data-v-6218bfa5] {
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
.spx-editor .tag-editor-span .tag-editor-span-space[data-v-6218bfa5] {
  width: 8px;
  height: 15px;
  display: inline-block;
  line-height: 22px;
}
.ssc-tabs-type-pane-card .ssc-tabs-pane[data-v-6218bfa5] {
  background: #FAFAFA;
}
.check-tree[data-v-6218bfa5] {
  margin-left: 80px;
}
.avatar-uploader-icon[data-v-6218bfa5] {
  font-size: 28px;
  color: #8c939d;
  width: 178px;
  height: 178px;
  line-height: 178px;
  text-align: center;
}
.avatar-uploader-icon-small[data-v-6218bfa5] {
  font-size: 14px !important;
  color: #8c939d;
  width: 56px !important;
  height: 56px !important;
  line-height: 56px !important;
  text-align: center;
}
.avatar-uploader-icon-middle[data-v-6218bfa5] {
  font-size: 14px !important;
  color: #8c939d;
  width: 94px !important;
  height: 94px !important;
  line-height: 94px !important;
  text-align: center;
}
.avatar[data-v-6218bfa5] {
  width: 178px;
  height: 178px;
  display: block;
}
.avatar-small[data-v-6218bfa5] {
  width: 56px;
  height: 56px;
  display: block;
}
.avatar-middle[data-v-6218bfa5] {
  width: 94px;
  height: 94px;
  display: block;
}
.acribus-sp-tabs[data-v-6218bfa5] {
  padding: 16px 16px 0px;
  border-radius: 6px;
  margin-bottom: -30px;
  background-color: #fff;
}
span.red[data-v-6218bfa5] {
  color: #F56C6C;
}
span.green[data-v-6218bfa5] {
  color: #67C23A;
}
.sp-hooks[data-v-6218bfa5] {
  overflow: hidden;
}
.text-link[data-v-6218bfa5] {
  color: #409eff;
  cursor: pointer;
}
.text-warning[data-v-6218bfa5] {
  color: #e80808;
}
.help-text[data-v-6218bfa5] {
  cursor: help;
}
.driver-performance-flag-A[data-v-6218bfa5] {
  color: #55CC77;
}
.driver-performance-flag-B[data-v-6218bfa5] {
  color: #999;
}
.driver-performance-flag-C[data-v-6218bfa5] {
  color: #FF4742;
}
/* [check-in rule] Google map autosuggest result container */
.pac-container[data-v-6218bfa5] {
  z-index: 100000;
}
.action-link[data-v-6218bfa5] {
  color: #2769f0;
  cursor: pointer;
  display: inline-block;
  margin-left: 6px;
}
.action-link[data-v-6218bfa5]:first-child {
  margin-left: 0;
}
.action-link[data-v-6218bfa5]:hover {
  text-decoration: underline;
}
.separate-line[data-v-6218bfa5] {
  height: 0;
  width: 100%;
  border-top: 1px #E9E9E9 solid;
  margin-bottom: 16px;
}
.white-fs-ground[data-v-6218bfa5] {
  padding: 24px;
  background: #fff;
  height: 100%;
}
.white-fs-ground .category-title[data-v-6218bfa5] {
  font-size: 16px;
  font-weight: 500;
  line-height: 16px;
  color: #333;
  margin-top: 56px;
  margin-bottom: 16px;
}
.white-fs-ground .category-title[data-v-6218bfa5]:first-child {
  margin-top: 16px;
}
.white-fs-ground .category-title[data-v-6218bfa5]:before {
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
.page-table-container[data-v-6218bfa5] {
  border: 1px solid #eee;
}
.form-body-center[data-v-6218bfa5] {
  margin: 0 auto;
}
.form-body-left[data-v-6218bfa5] {
  margin: 0;
}
.dialog-footer[data-v-6218bfa5],
.footer-submit[data-v-6218bfa5] {
  margin-top: 32px;
}
.dialog-footer .ssc-button[data-v-6218bfa5],
.footer-submit .ssc-button[data-v-6218bfa5] {
  margin-left: 16px;
}
.dialog-footer .ssc-button[data-v-6218bfa5]:first-child,
.footer-submit .ssc-button[data-v-6218bfa5]:first-child {
  margin-left: 0;
}
.text-center[data-v-6218bfa5] {
  text-align: center;
}
.s-form-textarea .ssc-textarea[data-v-6218bfa5],
.ssc-form-item .ssc-select[data-v-6218bfa5],
.ssc-form-item .ssc-input-size-medium[data-v-6218bfa5] {
  width: 320px;
}
.ssc-steps.is-horizontal[data-v-6218bfa5] {
  width: 60%;
  margin: 23px auto;
}
.action-wrap[data-v-6218bfa5] {
  display: flex;
  margin: 10px 0;
}
.action-wrap .actions[data-v-6218bfa5] {
  flex: 1;
}
.action-wrap .actions .ssc-button[data-v-6218bfa5] {
  margin-right: 16px;
}
.action-wrap .upload-route-log-info[data-v-6218bfa5] {
  align-self: center;
  text-align: right;
  flex: 1;
}
.action-wrap .upload-route-log-info label[data-v-6218bfa5] {
  margin-right: 8px;
}
.upload-log-table[data-v-6218bfa5] {
  margin: 10px 0;
}
.group-route-list-info[data-v-6218bfa5] {
  line-height: 40px;
}
.group-route-list-info label[data-v-6218bfa5] {
  margin-right: 10px;
}
.mass-upload-input-footer[data-v-6218bfa5] {
  margin-top: 32px;
}
.mass-upload-input-footer .ssc-button[data-v-6218bfa5] {
  margin-right: 10px;
}
.add-range-btn[data-v-6218bfa5] {
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
.add-range-btn[data-v-6218bfa5]:hover {
  background: #f6f6f6;
}
.range-wrap[data-v-6218bfa5] {
  padding: 16px;
}
.range-wrap .seq-tag[data-v-6218bfa5] {
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
.range-wrap .icon-del[data-v-6218bfa5] {
  line-height: 32px;
  width: 24px;
  height: 24px;
  cursor: pointer;
  color: #bbb;
}
.range-wrap .icon-del[data-v-6218bfa5]:hover {
  color: #888;
}
.bg-fafafa[data-v-6218bfa5] {
  background: #fafafa;
}
.ssc-step-main-title[data-v-6218bfa5] {
  line-height: 1.5;
}
.ssc-form-item-error-tip[data-v-6218bfa5] {
  white-space: nowrap;
}
.ssc-table-header .ssc-table-header-title[data-v-6218bfa5] {
  height: 100%;
}
.ssc-table-header .ssc-table-header-column-container[data-v-6218bfa5] {
  height: 100%;
}
.ssc-table-body .ssc-table-header-column-container .td-content[data-v-6218bfa5] {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.acribus-text-ellipsis[data-v-6218bfa5] {
  display: inline-block;
  width: 100%;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.station-tree-container .ssc-form-item-content[data-v-6218bfa5] {
  flex-direction: column;
  position: relative;
}
.station-tree-container .ssc-form-item-content .tree[data-v-6218bfa5] {
  min-width: 318px;
  display: block;
  margin-top: 20px;
}
.station-tree-container .ssc-form-item-content .tree.has-search-input[data-v-6218bfa5] {
  padding-top: 40px;
}
.station-tree-container .ssc-form-item-content .tree-input[data-v-6218bfa5] {
  position: absolute;
  left: 3%;
  top: 30px;
  z-index: 1;
  width: 94%;
  margin: 0 auto;
  color: #aeaeae;
}
.ssc-dropdown-menu[data-v-6218bfa5] {
  min-width: 176px;
  max-width: 320px;
  z-index: 2;
}
.ssc-dropdown-menu .active[data-v-6218bfa5] {
  color: #EE4D2D;
  font-weight: 500;
}
.detail-part-title[data-v-6218bfa5] {
  font-size: 18px;
  color: #333333;
  font-weight: 500;
  margin-bottom: 16px;
}
.detail-part-title.additional-info[data-v-6218bfa5] {
  margin-top: 56px;
}
.detail-part-title[data-v-6218bfa5]::before {
  content: '';
  width: 2px;
  height: 10px;
  background: #EE4D2D;
  display: inline-block;
  margin-right: 6px;
}
.page-wrapper[data-v-6218bfa5] {
  height: 100%;
}
.zone-container button:disabled:not(.btn-prev):not(.btn-next).ssc-btn-type-primary[data-v-6218bfa5] {
  color: #FFF !important;
  background: #EE4D2D !important;
  opacity: 0.5;
}
.pagination-left-total[data-v-6218bfa5] {
  display: flex;
  flex: 1;
}
.common-status[data-v-6218bfa5] {
  line-height: 12px;
  font-weight: 500;
  padding: 3px 4px;
  border-radius: 2px;
  display: inline-block;
  white-space: nowrap;
}
.common-status.status-success[data-v-6218bfa5] {
  background: #ECFFF1;
  color: #1CC461;
}
.common-status.status-disabled[data-v-6218bfa5] {
  color: #646B76;
  background: #F5F6F9;
}
.common-status.status-info[data-v-6218bfa5] {
  color: #3274F7;
  background: #F0F7FF;
}
.common-status.status-danger[data-v-6218bfa5] {
  color: #F32345;
  background: #FFF0F0;
}
.common-status.status-warning[data-v-6218bfa5] {
  background: #FFF8DB;
  color: #FFB014;
}
.common-divide[data-v-6218bfa5] {
  height: 8px;
  background: #F5F6F9;
  margin: 0 -24px;
}
.ssc-scan-toast[data-v-6218bfa5] {
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
.ssc-scan-toast.ssc-scan-toast-success[data-v-6218bfa5] {
  animation-duration: 4.4s;
  animation-name: scanSuccessToast-6218bfa5;
  background: #1CC461;
}
.ssc-scan-toast.ssc-scan-toast-fail[data-v-6218bfa5] {
  background: #F32345;
  animation-duration: 8.4s;
  animation-name: scanFailToast-6218bfa5;
}
.ssc-scan-toast.ssc-scan-toast-notice[data-v-6218bfa5] {
  background: #FFA620;
  animation-duration: 6.4s;
  animation-name: scanFailToast-6218bfa5;
}
.ssc-scan-toast .message-panel[data-v-6218bfa5] {
  display: flex;
  width: 100%;
  align-items: center;
}
.ssc-scan-toast .message-panel .icon[data-v-6218bfa5] {
  margin-right: 18px;
  width: 28px;
  height: 28px;
  flex-shrink: 0;
}
.ssc-scan-toast .message-panel .text[data-v-6218bfa5] {
  display: inline-block;
}
@keyframes scanSuccessToast-6218bfa5 {
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
@keyframes scanFailToast-6218bfa5 {
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
.table-pagination[data-v-6218bfa5] {
  height: 56px;
  border: 1px solid #ECF0F4;
  border-top: 0;
  justify-content: flex-end;
  padding-right: 16px;
}
.journey-type[data-v-6218bfa5] {
  display: flex;
  align-items: center;
}
.journey-type .journey-type-dot[data-v-6218bfa5] {
  width: 6px;
  height: 6px;
  border-radius: 50%;
  display: inline-block;
  margin-right: 8px;
}
.pagination-sticky-bottom[data-v-6218bfa5] {
  background: #fff;
  position: sticky;
  bottom: 16px;
}
.pagination-sticky-bottom[data-v-6218bfa5]:after {
  content: ' ';
  background: #fff;
  width: 100%;
  height: 16px;
  position: absolute;
}
.pagination-sticky-bottom[data-v-6218bfa5] .ssc-pagination {
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
.pagination-sticky-bottom[data-v-6218bfa5] .ssc-pagination .total-container {
  flex: 1;
  margin-left: 15px;
  margin-right: 12px;
}
.sp-card-log-list[data-v-6218bfa5] {
  padding: 16px 24px;
  background: #fff;
  min-height: 100%;
}
.ssc-table-panel .ssc-form-item .ssc-form-item-content textarea[data-v-6218bfa5],
.pro-filter .ssc-form-item .ssc-form-item-content textarea[data-v-6218bfa5] {
  border: transparent;
}
.message-red-text[data-v-6218bfa5] {
  color: #EE4D2D;
  font-weight: 700;
}
`,""]),u.exports=l},"G+ha":(u,l,a)=>{var i=a("VMIc");typeof i=="string"&&(i=[[u.id,i,""]]),i.locals&&(u.exports=i.locals);var p=a("er8A").Z,b=p("5129d051",i,!0,{})},WNpN:(u,l,a)=>{var i=a("ndyk");typeof i=="string"&&(i=[[u.id,i,""]]),i.locals&&(u.exports=i.locals);var p=a("er8A").Z,b=p("81b53e04",i,!0,{})}}]);
