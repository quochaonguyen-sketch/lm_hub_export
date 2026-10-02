(self.webpackChunkzzz_fms_admin=self.webpackChunkzzz_fms_admin||[]).push([[5654],{kvrn:f=>{var d=/^(attrs|props|on|nativeOn|class|style|hook)$/;f.exports=function(p){return p.reduce(function(s,c){var r,e,t,n,b;for(t in c)if(r=s[t],e=c[t],r&&d.test(t))if(t==="class"&&(typeof r=="string"&&(b=r,s[t]=r={},r[b]=!0),typeof e=="string"&&(b=e,c[t]=e={},e[b]=!0)),t==="on"||t==="nativeOn"||t==="hook")for(n in e)r[n]=i(r[n],e[n]);else if(Array.isArray(r))s[t]=r.concat(e);else if(Array.isArray(e))s[t]=[r].concat(e);else for(n in e)r[n]=e[n];else s[t]=c[t];return s},{})};function i(a,p){return function(){a&&a.apply(this,arguments),p&&p.apply(this,arguments)}}},"605I":(f,d,i)=>{"use strict";i.d(d,{HB:()=>s,ng:()=>c});var a=i("EA14");function p(e){return{create:function(n){return a.Z.post(e+"/create",n)},detail:function(n){return a.Z.get(e+"/detail",{params:n})},export:function(n){return a.Z.get(e+"/export",{params:n})},exportHistory:function(n){return a.Z.get(e+"/export/history",{params:n})},list:function(n){return a.Z.get(e+"/list",{params:n})},log:function(n){return a.Z.get(e+"/log",{params:n})},update:function(n){return a.Z.post(e+"/update",n)}}}var s=p("/api/admin/pickup/order_settings/seller_dispute_reason"),c=p("/api/admin/pickup/order_settings/driver_otp_override_reason"),r={driverOtpOverrideReason:c,sellerDisputeReason:s}},CM5G:(f,d,i)=>{var a=i("JPst");d=a(!1),d.push([f.id,`.seller-dispute-log[data-v-61fb6191] {
  padding: 24px;
  background: #fff;
}
ul[data-v-61fb6191] {
  padding: 0;
  margin: 0;
  list-style: none;
}
.button-base[data-v-61fb6191] {
  padding: 9px 20px;
  font-size: 14px;
  color: #FFFFFF;
}
.spx-button[data-v-61fb6191] {
  padding: 9px 20px;
  font-size: 14px;
  color: #FFFFFF;
  border-color: #FFFFFF;
  color: #555555;
}
.spx-button[data-v-61fb6191]:hover {
  background-color: #FFFFFF;
}
.spx-button-primary[data-v-61fb6191] {
  padding: 9px 20px;
  font-size: 14px;
  color: #FFFFFF;
  background-color: #EE4D2D;
  border-color: #EE4D2D;
}
.ssc-message[data-v-61fb6191] {
  top: 20px !important;
}
.sp-card > .actions[data-v-61fb6191] {
  margin-bottom: 10px;
  display: flex;
  flex-wrap: wrap;
}
.sp-card > .actions .right[data-v-61fb6191] {
  flex: 1;
  text-align: right;
  height: 40px;
}
table th[data-v-61fb6191] {
  color: rgba(0, 0, 0, 0.85);
  border-color: #EEEEEE;
  font-size: 14px;
  font-weight: 500;
}
.spx-editor .ssc-tag[data-v-61fb6191] {
  font-size: 12px;
  margin: 0px;
  padding: 0;
}
.spx-editor .ssc-tag .left-padding-span[data-v-61fb6191] {
  width: 0;
  margin: 0 0 0 8px;
}
.spx-editor .ssc-tag .right-padding-span[data-v-61fb6191] {
  width: 0;
  margin: 0 8px 0 0;
}
.spx-editor .tag-editor-span[data-v-61fb6191] {
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
.spx-editor .tag-editor-span .tag-editor-span-space[data-v-61fb6191] {
  width: 8px;
  height: 15px;
  display: inline-block;
  line-height: 22px;
}
.ssc-tabs-type-pane-card .ssc-tabs-pane[data-v-61fb6191] {
  background: #FAFAFA;
}
.check-tree[data-v-61fb6191] {
  margin-left: 80px;
}
.avatar-uploader-icon[data-v-61fb6191] {
  font-size: 28px;
  color: #8c939d;
  width: 178px;
  height: 178px;
  line-height: 178px;
  text-align: center;
}
.avatar-uploader-icon-small[data-v-61fb6191] {
  font-size: 14px !important;
  color: #8c939d;
  width: 56px !important;
  height: 56px !important;
  line-height: 56px !important;
  text-align: center;
}
.avatar-uploader-icon-middle[data-v-61fb6191] {
  font-size: 14px !important;
  color: #8c939d;
  width: 94px !important;
  height: 94px !important;
  line-height: 94px !important;
  text-align: center;
}
.avatar[data-v-61fb6191] {
  width: 178px;
  height: 178px;
  display: block;
}
.avatar-small[data-v-61fb6191] {
  width: 56px;
  height: 56px;
  display: block;
}
.avatar-middle[data-v-61fb6191] {
  width: 94px;
  height: 94px;
  display: block;
}
.acribus-sp-tabs[data-v-61fb6191] {
  padding: 16px 16px 0px;
  border-radius: 6px;
  margin-bottom: -30px;
  background-color: #fff;
}
span.red[data-v-61fb6191] {
  color: #F56C6C;
}
span.green[data-v-61fb6191] {
  color: #67C23A;
}
.sp-hooks[data-v-61fb6191] {
  overflow: hidden;
}
.text-link[data-v-61fb6191] {
  color: #409eff;
  cursor: pointer;
}
.text-warning[data-v-61fb6191] {
  color: #e80808;
}
.help-text[data-v-61fb6191] {
  cursor: help;
}
.driver-performance-flag-A[data-v-61fb6191] {
  color: #55CC77;
}
.driver-performance-flag-B[data-v-61fb6191] {
  color: #999;
}
.driver-performance-flag-C[data-v-61fb6191] {
  color: #FF4742;
}
/* [check-in rule] Google map autosuggest result container */
.pac-container[data-v-61fb6191] {
  z-index: 100000;
}
.action-link[data-v-61fb6191] {
  color: #2769f0;
  cursor: pointer;
  display: inline-block;
  margin-left: 6px;
}
.action-link[data-v-61fb6191]:first-child {
  margin-left: 0;
}
.action-link[data-v-61fb6191]:hover {
  text-decoration: underline;
}
.separate-line[data-v-61fb6191] {
  height: 0;
  width: 100%;
  border-top: 1px #E9E9E9 solid;
  margin-bottom: 16px;
}
.white-fs-ground[data-v-61fb6191] {
  padding: 24px;
  background: #fff;
  height: 100%;
}
.white-fs-ground .category-title[data-v-61fb6191] {
  font-size: 16px;
  font-weight: 500;
  line-height: 16px;
  color: #333;
  margin-top: 56px;
  margin-bottom: 16px;
}
.white-fs-ground .category-title[data-v-61fb6191]:first-child {
  margin-top: 16px;
}
.white-fs-ground .category-title[data-v-61fb6191]:before {
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
.page-table-container[data-v-61fb6191] {
  border: 1px solid #eee;
}
.form-body-center[data-v-61fb6191] {
  margin: 0 auto;
}
.form-body-left[data-v-61fb6191] {
  margin: 0;
}
.dialog-footer[data-v-61fb6191],
.footer-submit[data-v-61fb6191] {
  margin-top: 32px;
}
.dialog-footer .ssc-button[data-v-61fb6191],
.footer-submit .ssc-button[data-v-61fb6191] {
  margin-left: 16px;
}
.dialog-footer .ssc-button[data-v-61fb6191]:first-child,
.footer-submit .ssc-button[data-v-61fb6191]:first-child {
  margin-left: 0;
}
.text-center[data-v-61fb6191] {
  text-align: center;
}
.s-form-textarea .ssc-textarea[data-v-61fb6191],
.ssc-form-item .ssc-select[data-v-61fb6191],
.ssc-form-item .ssc-input-size-medium[data-v-61fb6191] {
  width: 320px;
}
.ssc-steps.is-horizontal[data-v-61fb6191] {
  width: 60%;
  margin: 23px auto;
}
.action-wrap[data-v-61fb6191] {
  display: flex;
  margin: 10px 0;
}
.action-wrap .actions[data-v-61fb6191] {
  flex: 1;
}
.action-wrap .actions .ssc-button[data-v-61fb6191] {
  margin-right: 16px;
}
.action-wrap .upload-route-log-info[data-v-61fb6191] {
  align-self: center;
  text-align: right;
  flex: 1;
}
.action-wrap .upload-route-log-info label[data-v-61fb6191] {
  margin-right: 8px;
}
.upload-log-table[data-v-61fb6191] {
  margin: 10px 0;
}
.group-route-list-info[data-v-61fb6191] {
  line-height: 40px;
}
.group-route-list-info label[data-v-61fb6191] {
  margin-right: 10px;
}
.mass-upload-input-footer[data-v-61fb6191] {
  margin-top: 32px;
}
.mass-upload-input-footer .ssc-button[data-v-61fb6191] {
  margin-right: 10px;
}
.add-range-btn[data-v-61fb6191] {
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
.add-range-btn[data-v-61fb6191]:hover {
  background: #f6f6f6;
}
.range-wrap[data-v-61fb6191] {
  padding: 16px;
}
.range-wrap .seq-tag[data-v-61fb6191] {
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
.range-wrap .icon-del[data-v-61fb6191] {
  line-height: 32px;
  width: 24px;
  height: 24px;
  cursor: pointer;
  color: #bbb;
}
.range-wrap .icon-del[data-v-61fb6191]:hover {
  color: #888;
}
.bg-fafafa[data-v-61fb6191] {
  background: #fafafa;
}
.ssc-step-main-title[data-v-61fb6191] {
  line-height: 1.5;
}
.ssc-form-item-error-tip[data-v-61fb6191] {
  white-space: nowrap;
}
.ssc-table-header .ssc-table-header-title[data-v-61fb6191] {
  height: 100%;
}
.ssc-table-header .ssc-table-header-column-container[data-v-61fb6191] {
  height: 100%;
}
.ssc-table-body .ssc-table-header-column-container .td-content[data-v-61fb6191] {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.acribus-text-ellipsis[data-v-61fb6191] {
  display: inline-block;
  width: 100%;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.station-tree-container .ssc-form-item-content[data-v-61fb6191] {
  flex-direction: column;
  position: relative;
}
.station-tree-container .ssc-form-item-content .tree[data-v-61fb6191] {
  min-width: 318px;
  display: block;
  margin-top: 20px;
}
.station-tree-container .ssc-form-item-content .tree.has-search-input[data-v-61fb6191] {
  padding-top: 40px;
}
.station-tree-container .ssc-form-item-content .tree-input[data-v-61fb6191] {
  position: absolute;
  left: 3%;
  top: 30px;
  z-index: 1;
  width: 94%;
  margin: 0 auto;
  color: #aeaeae;
}
.ssc-dropdown-menu[data-v-61fb6191] {
  min-width: 176px;
  max-width: 320px;
  z-index: 2;
}
.ssc-dropdown-menu .active[data-v-61fb6191] {
  color: #EE4D2D;
  font-weight: 500;
}
.detail-part-title[data-v-61fb6191] {
  font-size: 18px;
  color: #333333;
  font-weight: 500;
  margin-bottom: 16px;
}
.detail-part-title.additional-info[data-v-61fb6191] {
  margin-top: 56px;
}
.detail-part-title[data-v-61fb6191]::before {
  content: '';
  width: 2px;
  height: 10px;
  background: #EE4D2D;
  display: inline-block;
  margin-right: 6px;
}
.page-wrapper[data-v-61fb6191] {
  height: 100%;
}
.zone-container button:disabled:not(.btn-prev):not(.btn-next).ssc-btn-type-primary[data-v-61fb6191] {
  color: #FFF !important;
  background: #EE4D2D !important;
  opacity: 0.5;
}
.pagination-left-total[data-v-61fb6191] {
  display: flex;
  flex: 1;
}
.common-status[data-v-61fb6191] {
  line-height: 12px;
  font-weight: 500;
  padding: 3px 4px;
  border-radius: 2px;
  display: inline-block;
  white-space: nowrap;
}
.common-status.status-success[data-v-61fb6191] {
  background: #ECFFF1;
  color: #1CC461;
}
.common-status.status-disabled[data-v-61fb6191] {
  color: #646B76;
  background: #F5F6F9;
}
.common-status.status-info[data-v-61fb6191] {
  color: #3274F7;
  background: #F0F7FF;
}
.common-status.status-danger[data-v-61fb6191] {
  color: #F32345;
  background: #FFF0F0;
}
.common-status.status-warning[data-v-61fb6191] {
  background: #FFF8DB;
  color: #FFB014;
}
.common-divide[data-v-61fb6191] {
  height: 8px;
  background: #F5F6F9;
  margin: 0 -24px;
}
.ssc-scan-toast[data-v-61fb6191] {
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
.ssc-scan-toast.ssc-scan-toast-success[data-v-61fb6191] {
  animation-duration: 4.4s;
  animation-name: scanSuccessToast-61fb6191;
  background: #1CC461;
}
.ssc-scan-toast.ssc-scan-toast-fail[data-v-61fb6191] {
  background: #F32345;
  animation-duration: 8.4s;
  animation-name: scanFailToast-61fb6191;
}
.ssc-scan-toast.ssc-scan-toast-notice[data-v-61fb6191] {
  background: #FFA620;
  animation-duration: 6.4s;
  animation-name: scanFailToast-61fb6191;
}
.ssc-scan-toast .message-panel[data-v-61fb6191] {
  display: flex;
  width: 100%;
  align-items: center;
}
.ssc-scan-toast .message-panel .icon[data-v-61fb6191] {
  margin-right: 18px;
  width: 28px;
  height: 28px;
  flex-shrink: 0;
}
.ssc-scan-toast .message-panel .text[data-v-61fb6191] {
  display: inline-block;
}
@keyframes scanSuccessToast-61fb6191 {
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
@keyframes scanFailToast-61fb6191 {
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
.table-pagination[data-v-61fb6191] {
  height: 56px;
  border: 1px solid #ECF0F4;
  border-top: 0;
  justify-content: flex-end;
  padding-right: 16px;
}
.journey-type[data-v-61fb6191] {
  display: flex;
  align-items: center;
}
.journey-type .journey-type-dot[data-v-61fb6191] {
  width: 6px;
  height: 6px;
  border-radius: 50%;
  display: inline-block;
  margin-right: 8px;
}
.pagination-sticky-bottom[data-v-61fb6191] {
  background: #fff;
  position: sticky;
  bottom: 16px;
}
.pagination-sticky-bottom[data-v-61fb6191]:after {
  content: ' ';
  background: #fff;
  width: 100%;
  height: 16px;
  position: absolute;
}
.pagination-sticky-bottom[data-v-61fb6191] .ssc-pagination {
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
.pagination-sticky-bottom[data-v-61fb6191] .ssc-pagination .total-container {
  flex: 1;
  margin-left: 15px;
  margin-right: 12px;
}
.sp-card-log-list[data-v-61fb6191] {
  padding: 16px 24px;
  background: #fff;
  min-height: 100%;
}
.ssc-table-panel .ssc-form-item .ssc-form-item-content textarea[data-v-61fb6191],
.pro-filter .ssc-form-item .ssc-form-item-content textarea[data-v-61fb6191] {
  border: transparent;
}
.message-red-text[data-v-61fb6191] {
  color: #EE4D2D;
  font-weight: 700;
}
`,""]),f.exports=d},PSvR:(f,d,i)=>{"use strict";i.r(d),i.d(d,{default:()=>_});var a=function(){var o=this,l=o._self._c;return l("div",{staticClass:"seller-dispute-log"},[l("paginated-table",{directives:[{name:"loading",rawName:"v-loading",value:o.loading,expression:"loading"}],attrs:{columns:o.columns,dataList:o.tableData.list,total:o.tableData.total,"current-page":o.pageNo,"page-size":o.pageSize,onPageOptionChanged:o.loadList,needCustomNoData:!1,needStandardListStyle:!0}})],1)},p=[],s=i("14Xm"),c=i.n(s),r=i("D3Ub"),e=i("605I"),t=i("h2x9"),n=i("QsnJ"),b=i("4Jaa"),v=function(o,l,h){return o[l]||o[h]||"-"};const D={name:"SellerDisputeLog",components:{PaginatedTable:t.Z},data:function(){return{loading:!1,pageNo:1,pageSize:n.L8,tableData:{list:[],total:0}}},computed:{columns:function(){return[{label:this.$gt("Rule ID"),key:"rule_id",width:120},{label:this.$gt("Rule Name"),key:"rule_name",width:220},{label:this.$gt("English Description"),key:"english_description",width:280,render:function(l){return v(l,"english_description","remark_guide_english")}},{label:this.$gt("Local Language Description"),key:"local_description",width:280,render:function(l){return v(l,"local_description","remark_guide_local")}},{label:this.$gt("Status"),key:"rule_status",width:130},{label:this.$gt("Operation"),key:"operation",width:120},{label:this.$gt("Operator"),key:"operator",width:180},{label:this.$gt("Update time"),key:"ctime",width:180,render:function(l,h){return(0,b.WU)(h)}}]}},created:function(){this.$store.dispatch("sharedBreadcrumb/updateBreadcrumb",[{link:void 0,title:this.$t("Basic Data")},{link:"/proofConfiguration/list?proof_type=SELLER_DISPUTE",title:this.$t("Proof Configuration")},{link:"",title:this.$t("Seller Dispute Log")}]),this.loadList()},methods:{loadList:function(){var u=(0,r.Z)(c().mark(function l(){var h=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},F=h.pageNo,y=F===void 0?1:F,w=h.pageSize,k=w===void 0?n.L8:w,E,x,m;return c().wrap(function(g){for(;;)switch(g.prev=g.next){case 0:return this.loading=!0,g.prev=1,g.next=4,e.HB.log({pageno:y,count:k});case 4:E=g.sent,x=E.data,m=x===void 0?{}:x,this.pageNo=y,this.pageSize=k,this.tableData={list:m.list||[],total:m.total||0};case 10:return g.prev=10,this.loading=!1,g.finish(10);case 13:case"end":return g.stop()}},l,this,[[1,,10,13]])}));function o(){return u.apply(this,arguments)}return o}()}};var S=i("jIN7"),z=i("KHd+"),C=(0,z.Z)(D,a,p,!1,null,"61fb6191",null);const _=C.exports},jIN7:(f,d,i)=>{var a=i("CM5G");typeof a=="string"&&(a=[[f.id,a,""]]),a.locals&&(f.exports=a.locals);var p=i("er8A").Z,s=p("12c19374",a,!0,{})}}]);
