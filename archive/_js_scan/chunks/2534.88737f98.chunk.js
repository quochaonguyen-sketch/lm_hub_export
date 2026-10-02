(self.webpackChunkzzz_fms_admin=self.webpackChunkzzz_fms_admin||[]).push([[2534,4369,2999,9714],{kvrn:p=>{var g=/^(attrs|props|on|nativeOn|class|style|hook)$/;p.exports=function(_){return _.reduce(function(E,Y){var Z,S,z,u,w;for(z in Y)if(Z=E[z],S=Y[z],Z&&g.test(z))if(z==="class"&&(typeof Z=="string"&&(w=Z,E[z]=Z={},Z[w]=!0),typeof S=="string"&&(w=S,Y[z]=S={},S[w]=!0)),z==="on"||z==="nativeOn"||z==="hook")for(u in S)Z[u]=r(Z[u],S[u]);else if(Array.isArray(Z))E[z]=Z.concat(S);else if(Array.isArray(S))E[z]=[Z].concat(S);else for(u in S)Z[u]=S[u];else E[z]=Y[z];return E},{})};function r(d,_){return function(){d&&d.apply(this,arguments),_&&_.apply(this,arguments)}}},DxUY:(p,g,r)=>{"use strict";r.d(g,{CU:()=>S,E7:()=>Y,sC:()=>E});var d=r("EA14"),_="api/admin/exception/",E="/api/admin/image/upload";function Y(z,u){return d.Z.post(""+_+u+"/order/update/",z)}function Z(z,u){return request.post(""+_+u+"/order/reject",z)}function S(z){return d.Z.post("/api/fleet_order/order/detail/update_exception_record",z)}},fdIW:(p,g,r)=>{"use strict";r.r(g),r.d(g,{env:()=>b,getModuleLabeling:()=>dn,getTargetPlugin:()=>An,getTargetSdk:()=>Ln,getTrackingSdk:()=>un,initModuleLabeling:()=>K,initTracingInfo:()=>zn,initTracingSdk:()=>q,initTrackingNumericReporter:()=>Mn,sendDataToMdap:()=>H.sendDataToMdap,sendDataToTms:()=>H.sendDataToTms,setConfigForMdap:()=>_n,setEntryTagForMdap:()=>yn,setMdapLogicStatus:()=>Rn,updateSlaConfig:()=>H.updateSlaConfig});var d=r("GQeE"),_=r.n(d),E=r("QbLZ"),Y=r("FW0C"),Z=r.n(Y),S=r("qJKn"),z=r.n(S),u=r("O3Sf"),w=r.n(u),I=r("mJLZ"),$n=r("GF8C"),H=r("LhSD"),T=r.n(H),bn=r("T9Cy"),an=r("KqJL"),Pn=r("1EQe"),fn=r("Ke0q"),on=void 0,U=void 0,O=void 0,X=void 0,xn=(0,an.y)(),y=xn==="live",M=(0,fn.Zw)(),b=y?"live":"test";function q(){var j="20260923";(0,H.setup)({portal:"fms-portal",tracingConfig:{version:j}});var N=(0,Pn.ub)(),J=N&&N.toLowerCase()||"sg",hn=/^(https:\/\/spx\.(\w+\.)?shopee\.)(?!.*\/spxpatrolservice\/api\/report\/device_report)(?!.*\/api\/support_center\/admin\/ticket\/operator\/notice\/list)(?!.*\/api\/admin\/basicserver\/notification\/pn\/search)(?!.*\/api\/admin\/basicserver\/notification\/pn\/pending\/read\/count)(?!.*\/api\/basicserver\/system\/notification\/detail).*$/,ln=/^(https:\/\/deo\.shopeemobile\.com).*$/,L=/^(https:\/\/sls\.sp-cdn\.shopee\.com).*$/,D=/^(https:\/\/spx\.(\w+\.)?shopee\.).*$/,jn=/^(https:\/\/uss\.spx\.shopee).*$/,Hn=/^(https:\/\/maps\.googleapis).*$/,Bn=/^(https:\/\/printproxy\.wms\.shopeemobile\.com).*$/,sn=/^(https:\/\/(\w+\.)?shopee\.).*$/,Qn=[hn,Bn],Un=[ln,D,L,jn,Hn,sn],wn=window.__EntryTracker?window.__EntryTracker.sid:"-",C=(0,H.getTargetSDK)("dasQms"),Fn=C.getBaseData();C.setBaseData((0,E.Z)({},Fn,{tag:(0,E.Z)({},Fn.tag,{device_id:M})}));var kn={"ssc-spx-fms-fe-new":"","ssc-spx-fms-fe-new2":""};if(xn!=="dev")try{kn=JSON.parse('{"ssc-spx-fms-fe-new":"ae73956add61ac173a01373efed6cb5517e41332d10979b088ced6b93fc5cde2","ssc-spx-fms-fe-new2":"90f860e40e17a09604811c94a5db1757d9bfd876e7e9d1121ebfedb2b359d0de"}')}catch(Xn){console.error("[APMS FMS Sub Apps Init] Parse APMS_FMS_SUB_APPS error: ",Xn)}var Nn={logger:!1,region:J,sample:1,user_id:on,environment:"live",app_version:j};O=new Y.MdapSdk((0,E.Z)({},Nn,{app_name:"ssc-spx-fms-fe-new",secret_key:kn["ssc-spx-fms-fe-new"]})),U=new(z())({path:Qn,useLogicStatus:!0}),O.use(U),X=new Y.MdapSdk((0,E.Z)({},Nn,{app_name:"ssc-spx-fms-fe-new2",secret_key:kn["ssc-spx-fms-fe-new2"]})),X.use(new(w())({path:Un}));var mn=(0,H.getTargetSDK)("mdap");mn.addEntryTag("sid",wn),O.addEntryTag("sid",wn),X.addEntryTag("sid",wn),(0,bn.s)(function(){mn.addEntryTag("lifecycle","app_init"),O.addEntryTag("lifecycle","app_init"),X.addEntryTag("lifecycle","app_init")}),(0,bn.Yy)(function(){mn.removeEntryTag("lifecycle"),O.removeEntryTag("lifecycle"),X.removeEntryTag("lifecycle")})}function un(){return(0,H.getTracing)()}function Ln(j){return(0,H.getTargetSDK)(j)}function An(j,N){return(0,H.getTargetPlugin)(j,N)}function Rn(j,N){U&&U.setLogicStatus(j,N)}function _n(){var j=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},N=(0,H.getTargetSDK)("mdap");N&&N.setConfig(j),O&&O.setConfig(j),X&&X.setConfig(j)}function yn(){var j=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};(0,H.setEntryTagForMdap)(j),_()(j).forEach(function(N){var J=j[N];O&&O.addEntryTag(N,J),X&&X.addEntryTag(N,J)})}function zn(j){var N=j.state.user.currentLoginUser,J=N.email,hn=(0,fn.JK)(),ln=N.current_station_name;on=N.id,yn({email:J,station_type:hn,station_name:ln}),_n({user_id:on+""})}function Mn(){var j=un().getTargetTracker("prometheus");return new I.DX(j)}var en=null;function K(){return en||(en=new $n.Z((0,H.getTracing)(),{targets:["mdap"]}),en)}function dn(){return en||K()}},W7Cz:(p,g,r)=>{"use strict";r.d(g,{SN:()=>d.checkFormValidation});var d=r("0xHA"),_=r.n(d)},Yifc:(p,g,r)=>{"use strict";r.d(g,{Xl:()=>S,cy:()=>_,sC:()=>Z});var d=r("GOkr"),_=d.YB||d.xN||d.qD||d.vh||d.fZ||d.gY||d.G||d.G7||d.Ai,E=!1,Y=null,Z=d.G7,S=d.G7},nyvy:(p,g,r)=>{var d=r("JPst");g=d(!1),g.push([p.id,`.chat-history div.category-title[data-v-6c0979f5] {
  margin-top: 32px;
}
.chat-history-container[data-v-6c0979f5] {
  border: 1px solid #E3E6E9;
  height: 500px;
  border-radius: 4px;
}
.chat-history-container .chat-history-title[data-v-6c0979f5] {
  background-color: #F5F6F9;
  border-radius: 4px 4px 0 0;
  padding-left: 12px;
  font-size: 14px;
  color: #303844;
  height: 36px;
  line-height: 36px;
  font-weight: 500;
}
.chat-history-container .chat-history-wrap[data-v-6c0979f5] {
  position: relative;
  padding-bottom: 25px;
  max-height: 464px;
  overflow-y: scroll;
  overscroll-behavior: contain;
}
.chat-history-container .chat-history-wrap .split-line[data-v-6c0979f5] {
  width: 1px;
  background-color: #ECF0F4;
  margin: 0 16px;
  position: absolute;
  left: 92px;
}
.chat-history-container .chat-history-wrap .split-line.head-split-line[data-v-6c0979f5] {
  height: 23px;
}
.chat-history-container .chat-history-wrap .split-line.end-split-line[data-v-6c0979f5] {
  height: calc(100% + 47px);
  top: -22px;
}
.chat-history-container .chat-history-wrap .split-line-cycle-icon[data-v-6c0979f5] {
  width: 7px;
  height: 7px;
  border-radius: 50%;
  border: 1px solid #B7B7B7;
  margin-left: 105px;
  position: relative;
  top: 28px;
}
.chat-history-container .chat-history-wrap .chat-history-content[data-v-6c0979f5] {
  position: relative;
}
.chat-history-container .chat-history-wrap .chat-history-content .chat-history-item[data-v-6c0979f5] {
  display: flex;
  margin-top: 20px;
  margin-left: 12px;
}
.chat-history-container .chat-history-wrap .chat-history-content .chat-history-item.first-chat-history-item[data-v-6c0979f5] {
  margin-top: 10px;
}
.chat-history-container .chat-history-wrap .chat-history-content .chat-history-item .time-wrap[data-v-6c0979f5] {
  width: 78px;
  text-align: right;
  font-size: 12px;
}
.chat-history-container .chat-history-wrap .chat-history-content .chat-history-item .time-wrap span[data-v-6c0979f5] {
  color: #7E8692;
}
.chat-history-container .chat-history-wrap .chat-history-content .chat-history-item .chat-content[data-v-6c0979f5] {
  margin-left: 36px;
  max-width: 85%;
}
.chat-history-container .chat-history-wrap .chat-history-content .chat-history-item .chat-content span.sender[data-v-6c0979f5] {
  color: #7E8692;
  font-size: 12px;
  position: relative;
  top: -3px;
}
.chat-history-container .chat-history-wrap .chat-history-content .chat-history-item .chat-content span.text-content[data-v-6c0979f5] {
  color: #303844;
  word-break: break-word;
  position: relative;
  top: -4px;
}
.chat-history-container .chat-history-wrap .chat-history-content .chat-history-item .chat-content .content-img[data-v-6c0979f5] {
  width: 150px;
  height: 150px;
  background-size: cover;
  background-repeat: no-repeat;
}
.chat-history-container .view-more[data-v-6c0979f5] {
  display: flex;
  align-items: center;
  height: 46px;
  color: #2769f0;
  font-weight: 400;
  font-size: 14px;
  margin-left: 126px;
}
.chat-history-container .view-more > span[data-v-6c0979f5] {
  cursor: pointer;
}
[data-v-6c0979f5] .chat-history-image-viewer .prev,[data-v-6c0979f5] .chat-history-image-viewer .next,[data-v-6c0979f5] .chat-history-image-viewer .navbar {
  display: none;
}
[data-v-6c0979f5] .chat-history-image-viewer .container {
  background-color: inherit;
}
ul[data-v-6c0979f5] {
  padding: 0;
  margin: 0;
  list-style: none;
}
.button-base[data-v-6c0979f5] {
  padding: 9px 20px;
  font-size: 14px;
  color: #FFFFFF;
}
.spx-button[data-v-6c0979f5] {
  padding: 9px 20px;
  font-size: 14px;
  color: #FFFFFF;
  border-color: #FFFFFF;
  color: #555555;
}
.spx-button[data-v-6c0979f5]:hover {
  background-color: #FFFFFF;
}
.spx-button-primary[data-v-6c0979f5] {
  padding: 9px 20px;
  font-size: 14px;
  color: #FFFFFF;
  background-color: #EE4D2D;
  border-color: #EE4D2D;
}
.ssc-message[data-v-6c0979f5] {
  top: 20px !important;
}
.sp-card > .actions[data-v-6c0979f5] {
  margin-bottom: 10px;
  display: flex;
  flex-wrap: wrap;
}
.sp-card > .actions .right[data-v-6c0979f5] {
  flex: 1;
  text-align: right;
  height: 40px;
}
table th[data-v-6c0979f5] {
  color: rgba(0, 0, 0, 0.85);
  border-color: #EEEEEE;
  font-size: 14px;
  font-weight: 500;
}
.spx-editor .ssc-tag[data-v-6c0979f5] {
  font-size: 12px;
  margin: 0px;
  padding: 0;
}
.spx-editor .ssc-tag .left-padding-span[data-v-6c0979f5] {
  width: 0;
  margin: 0 0 0 8px;
}
.spx-editor .ssc-tag .right-padding-span[data-v-6c0979f5] {
  width: 0;
  margin: 0 8px 0 0;
}
.spx-editor .tag-editor-span[data-v-6c0979f5] {
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
.spx-editor .tag-editor-span .tag-editor-span-space[data-v-6c0979f5] {
  width: 8px;
  height: 15px;
  display: inline-block;
  line-height: 22px;
}
.ssc-tabs-type-pane-card .ssc-tabs-pane[data-v-6c0979f5] {
  background: #FAFAFA;
}
.check-tree[data-v-6c0979f5] {
  margin-left: 80px;
}
.avatar-uploader-icon[data-v-6c0979f5] {
  font-size: 28px;
  color: #8c939d;
  width: 178px;
  height: 178px;
  line-height: 178px;
  text-align: center;
}
.avatar-uploader-icon-small[data-v-6c0979f5] {
  font-size: 14px !important;
  color: #8c939d;
  width: 56px !important;
  height: 56px !important;
  line-height: 56px !important;
  text-align: center;
}
.avatar-uploader-icon-middle[data-v-6c0979f5] {
  font-size: 14px !important;
  color: #8c939d;
  width: 94px !important;
  height: 94px !important;
  line-height: 94px !important;
  text-align: center;
}
.avatar[data-v-6c0979f5] {
  width: 178px;
  height: 178px;
  display: block;
}
.avatar-small[data-v-6c0979f5] {
  width: 56px;
  height: 56px;
  display: block;
}
.avatar-middle[data-v-6c0979f5] {
  width: 94px;
  height: 94px;
  display: block;
}
.acribus-sp-tabs[data-v-6c0979f5] {
  padding: 16px 16px 0px;
  border-radius: 6px;
  margin-bottom: -30px;
  background-color: #fff;
}
span.red[data-v-6c0979f5] {
  color: #F56C6C;
}
span.green[data-v-6c0979f5] {
  color: #67C23A;
}
.sp-hooks[data-v-6c0979f5] {
  overflow: hidden;
}
.text-link[data-v-6c0979f5] {
  color: #409eff;
  cursor: pointer;
}
.text-warning[data-v-6c0979f5] {
  color: #e80808;
}
.help-text[data-v-6c0979f5] {
  cursor: help;
}
.driver-performance-flag-A[data-v-6c0979f5] {
  color: #55CC77;
}
.driver-performance-flag-B[data-v-6c0979f5] {
  color: #999;
}
.driver-performance-flag-C[data-v-6c0979f5] {
  color: #FF4742;
}
/* [check-in rule] Google map autosuggest result container */
.pac-container[data-v-6c0979f5] {
  z-index: 100000;
}
.action-link[data-v-6c0979f5] {
  color: #2769f0;
  cursor: pointer;
  display: inline-block;
  margin-left: 6px;
}
.action-link[data-v-6c0979f5]:first-child {
  margin-left: 0;
}
.action-link[data-v-6c0979f5]:hover {
  text-decoration: underline;
}
.separate-line[data-v-6c0979f5] {
  height: 0;
  width: 100%;
  border-top: 1px #E9E9E9 solid;
  margin-bottom: 16px;
}
.white-fs-ground[data-v-6c0979f5] {
  padding: 24px;
  background: #fff;
  height: 100%;
}
.white-fs-ground .category-title[data-v-6c0979f5] {
  font-size: 16px;
  font-weight: 500;
  line-height: 16px;
  color: #333;
  margin-top: 56px;
  margin-bottom: 16px;
}
.white-fs-ground .category-title[data-v-6c0979f5]:first-child {
  margin-top: 16px;
}
.white-fs-ground .category-title[data-v-6c0979f5]:before {
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
.page-table-container[data-v-6c0979f5] {
  border: 1px solid #eee;
}
.form-body-center[data-v-6c0979f5] {
  margin: 0 auto;
}
.form-body-left[data-v-6c0979f5] {
  margin: 0;
}
.dialog-footer[data-v-6c0979f5],
.footer-submit[data-v-6c0979f5] {
  margin-top: 32px;
}
.dialog-footer .ssc-button[data-v-6c0979f5],
.footer-submit .ssc-button[data-v-6c0979f5] {
  margin-left: 16px;
}
.dialog-footer .ssc-button[data-v-6c0979f5]:first-child,
.footer-submit .ssc-button[data-v-6c0979f5]:first-child {
  margin-left: 0;
}
.text-center[data-v-6c0979f5] {
  text-align: center;
}
.s-form-textarea .ssc-textarea[data-v-6c0979f5],
.ssc-form-item .ssc-select[data-v-6c0979f5],
.ssc-form-item .ssc-input-size-medium[data-v-6c0979f5] {
  width: 320px;
}
.ssc-steps.is-horizontal[data-v-6c0979f5] {
  width: 60%;
  margin: 23px auto;
}
.action-wrap[data-v-6c0979f5] {
  display: flex;
  margin: 10px 0;
}
.action-wrap .actions[data-v-6c0979f5] {
  flex: 1;
}
.action-wrap .actions .ssc-button[data-v-6c0979f5] {
  margin-right: 16px;
}
.action-wrap .upload-route-log-info[data-v-6c0979f5] {
  align-self: center;
  text-align: right;
  flex: 1;
}
.action-wrap .upload-route-log-info label[data-v-6c0979f5] {
  margin-right: 8px;
}
.upload-log-table[data-v-6c0979f5] {
  margin: 10px 0;
}
.group-route-list-info[data-v-6c0979f5] {
  line-height: 40px;
}
.group-route-list-info label[data-v-6c0979f5] {
  margin-right: 10px;
}
.mass-upload-input-footer[data-v-6c0979f5] {
  margin-top: 32px;
}
.mass-upload-input-footer .ssc-button[data-v-6c0979f5] {
  margin-right: 10px;
}
.add-range-btn[data-v-6c0979f5] {
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
.add-range-btn[data-v-6c0979f5]:hover {
  background: #f6f6f6;
}
.range-wrap[data-v-6c0979f5] {
  padding: 16px;
}
.range-wrap .seq-tag[data-v-6c0979f5] {
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
.range-wrap .icon-del[data-v-6c0979f5] {
  line-height: 32px;
  width: 24px;
  height: 24px;
  cursor: pointer;
  color: #bbb;
}
.range-wrap .icon-del[data-v-6c0979f5]:hover {
  color: #888;
}
.bg-fafafa[data-v-6c0979f5] {
  background: #fafafa;
}
.ssc-step-main-title[data-v-6c0979f5] {
  line-height: 1.5;
}
.ssc-form-item-error-tip[data-v-6c0979f5] {
  white-space: nowrap;
}
.ssc-table-header .ssc-table-header-title[data-v-6c0979f5] {
  height: 100%;
}
.ssc-table-header .ssc-table-header-column-container[data-v-6c0979f5] {
  height: 100%;
}
.ssc-table-body .ssc-table-header-column-container .td-content[data-v-6c0979f5] {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.acribus-text-ellipsis[data-v-6c0979f5] {
  display: inline-block;
  width: 100%;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.station-tree-container .ssc-form-item-content[data-v-6c0979f5] {
  flex-direction: column;
  position: relative;
}
.station-tree-container .ssc-form-item-content .tree[data-v-6c0979f5] {
  min-width: 318px;
  display: block;
  margin-top: 20px;
}
.station-tree-container .ssc-form-item-content .tree.has-search-input[data-v-6c0979f5] {
  padding-top: 40px;
}
.station-tree-container .ssc-form-item-content .tree-input[data-v-6c0979f5] {
  position: absolute;
  left: 3%;
  top: 30px;
  z-index: 1;
  width: 94%;
  margin: 0 auto;
  color: #aeaeae;
}
.ssc-dropdown-menu[data-v-6c0979f5] {
  min-width: 176px;
  max-width: 320px;
  z-index: 2;
}
.ssc-dropdown-menu .active[data-v-6c0979f5] {
  color: #EE4D2D;
  font-weight: 500;
}
.detail-part-title[data-v-6c0979f5] {
  font-size: 18px;
  color: #333333;
  font-weight: 500;
  margin-bottom: 16px;
}
.detail-part-title.additional-info[data-v-6c0979f5] {
  margin-top: 56px;
}
.detail-part-title[data-v-6c0979f5]::before {
  content: '';
  width: 2px;
  height: 10px;
  background: #EE4D2D;
  display: inline-block;
  margin-right: 6px;
}
.page-wrapper[data-v-6c0979f5] {
  height: 100%;
}
.zone-container button:disabled:not(.btn-prev):not(.btn-next).ssc-btn-type-primary[data-v-6c0979f5] {
  color: #FFF !important;
  background: #EE4D2D !important;
  opacity: 0.5;
}
.pagination-left-total[data-v-6c0979f5] {
  display: flex;
  flex: 1;
}
.common-status[data-v-6c0979f5] {
  line-height: 12px;
  font-weight: 500;
  padding: 3px 4px;
  border-radius: 2px;
  display: inline-block;
  white-space: nowrap;
}
.common-status.status-success[data-v-6c0979f5] {
  background: #ECFFF1;
  color: #1CC461;
}
.common-status.status-disabled[data-v-6c0979f5] {
  color: #646B76;
  background: #F5F6F9;
}
.common-status.status-info[data-v-6c0979f5] {
  color: #3274F7;
  background: #F0F7FF;
}
.common-status.status-danger[data-v-6c0979f5] {
  color: #F32345;
  background: #FFF0F0;
}
.common-status.status-warning[data-v-6c0979f5] {
  background: #FFF8DB;
  color: #FFB014;
}
.common-divide[data-v-6c0979f5] {
  height: 8px;
  background: #F5F6F9;
  margin: 0 -24px;
}
.ssc-scan-toast[data-v-6c0979f5] {
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
.ssc-scan-toast.ssc-scan-toast-success[data-v-6c0979f5] {
  animation-duration: 4.4s;
  animation-name: scanSuccessToast-6c0979f5;
  background: #1CC461;
}
.ssc-scan-toast.ssc-scan-toast-fail[data-v-6c0979f5] {
  background: #F32345;
  animation-duration: 8.4s;
  animation-name: scanFailToast-6c0979f5;
}
.ssc-scan-toast.ssc-scan-toast-notice[data-v-6c0979f5] {
  background: #FFA620;
  animation-duration: 6.4s;
  animation-name: scanFailToast-6c0979f5;
}
.ssc-scan-toast .message-panel[data-v-6c0979f5] {
  display: flex;
  width: 100%;
  align-items: center;
}
.ssc-scan-toast .message-panel .icon[data-v-6c0979f5] {
  margin-right: 18px;
  width: 28px;
  height: 28px;
  flex-shrink: 0;
}
.ssc-scan-toast .message-panel .text[data-v-6c0979f5] {
  display: inline-block;
}
@keyframes scanSuccessToast-6c0979f5 {
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
@keyframes scanFailToast-6c0979f5 {
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
.table-pagination[data-v-6c0979f5] {
  height: 56px;
  border: 1px solid #ECF0F4;
  border-top: 0;
  justify-content: flex-end;
  padding-right: 16px;
}
.journey-type[data-v-6c0979f5] {
  display: flex;
  align-items: center;
}
.journey-type .journey-type-dot[data-v-6c0979f5] {
  width: 6px;
  height: 6px;
  border-radius: 50%;
  display: inline-block;
  margin-right: 8px;
}
.pagination-sticky-bottom[data-v-6c0979f5] {
  background: #fff;
  position: sticky;
  bottom: 16px;
}
.pagination-sticky-bottom[data-v-6c0979f5]:after {
  content: ' ';
  background: #fff;
  width: 100%;
  height: 16px;
  position: absolute;
}
.pagination-sticky-bottom[data-v-6c0979f5] .ssc-pagination {
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
.pagination-sticky-bottom[data-v-6c0979f5] .ssc-pagination .total-container {
  flex: 1;
  margin-left: 15px;
  margin-right: 12px;
}
.sp-card-log-list[data-v-6c0979f5] {
  padding: 16px 24px;
  background: #fff;
  min-height: 100%;
}
.ssc-table-panel .ssc-form-item .ssc-form-item-content textarea[data-v-6c0979f5],
.pro-filter .ssc-form-item .ssc-form-item-content textarea[data-v-6c0979f5] {
  border: transparent;
}
.message-red-text[data-v-6c0979f5] {
  color: #EE4D2D;
  font-weight: 700;
}
`,""]),p.exports=g},EDpc:(p,g,r)=>{var d=r("JPst");g=d(!1),g.push([p.id,`.message-text[data-v-5c681033] {
  width: 170px;
  overflow: hidden;
  text-overflow: ellipsis;
  word-break: break-all;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
}
.ticket-href[data-v-5c681033] {
  color: #3274F7;
}
ul[data-v-5c681033] {
  padding: 0;
  margin: 0;
  list-style: none;
}
.button-base[data-v-5c681033] {
  padding: 9px 20px;
  font-size: 14px;
  color: #FFFFFF;
}
.spx-button[data-v-5c681033] {
  padding: 9px 20px;
  font-size: 14px;
  color: #FFFFFF;
  border-color: #FFFFFF;
  color: #555555;
}
.spx-button[data-v-5c681033]:hover {
  background-color: #FFFFFF;
}
.spx-button-primary[data-v-5c681033] {
  padding: 9px 20px;
  font-size: 14px;
  color: #FFFFFF;
  background-color: #EE4D2D;
  border-color: #EE4D2D;
}
.ssc-message[data-v-5c681033] {
  top: 20px !important;
}
.sp-card > .actions[data-v-5c681033] {
  margin-bottom: 10px;
  display: flex;
  flex-wrap: wrap;
}
.sp-card > .actions .right[data-v-5c681033] {
  flex: 1;
  text-align: right;
  height: 40px;
}
table th[data-v-5c681033] {
  color: rgba(0, 0, 0, 0.85);
  border-color: #EEEEEE;
  font-size: 14px;
  font-weight: 500;
}
.spx-editor .ssc-tag[data-v-5c681033] {
  font-size: 12px;
  margin: 0px;
  padding: 0;
}
.spx-editor .ssc-tag .left-padding-span[data-v-5c681033] {
  width: 0;
  margin: 0 0 0 8px;
}
.spx-editor .ssc-tag .right-padding-span[data-v-5c681033] {
  width: 0;
  margin: 0 8px 0 0;
}
.spx-editor .tag-editor-span[data-v-5c681033] {
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
.spx-editor .tag-editor-span .tag-editor-span-space[data-v-5c681033] {
  width: 8px;
  height: 15px;
  display: inline-block;
  line-height: 22px;
}
.ssc-tabs-type-pane-card .ssc-tabs-pane[data-v-5c681033] {
  background: #FAFAFA;
}
.check-tree[data-v-5c681033] {
  margin-left: 80px;
}
.avatar-uploader-icon[data-v-5c681033] {
  font-size: 28px;
  color: #8c939d;
  width: 178px;
  height: 178px;
  line-height: 178px;
  text-align: center;
}
.avatar-uploader-icon-small[data-v-5c681033] {
  font-size: 14px !important;
  color: #8c939d;
  width: 56px !important;
  height: 56px !important;
  line-height: 56px !important;
  text-align: center;
}
.avatar-uploader-icon-middle[data-v-5c681033] {
  font-size: 14px !important;
  color: #8c939d;
  width: 94px !important;
  height: 94px !important;
  line-height: 94px !important;
  text-align: center;
}
.avatar[data-v-5c681033] {
  width: 178px;
  height: 178px;
  display: block;
}
.avatar-small[data-v-5c681033] {
  width: 56px;
  height: 56px;
  display: block;
}
.avatar-middle[data-v-5c681033] {
  width: 94px;
  height: 94px;
  display: block;
}
.acribus-sp-tabs[data-v-5c681033] {
  padding: 16px 16px 0px;
  border-radius: 6px;
  margin-bottom: -30px;
  background-color: #fff;
}
span.red[data-v-5c681033] {
  color: #F56C6C;
}
span.green[data-v-5c681033] {
  color: #67C23A;
}
.sp-hooks[data-v-5c681033] {
  overflow: hidden;
}
.text-link[data-v-5c681033] {
  color: #409eff;
  cursor: pointer;
}
.text-warning[data-v-5c681033] {
  color: #e80808;
}
.help-text[data-v-5c681033] {
  cursor: help;
}
.driver-performance-flag-A[data-v-5c681033] {
  color: #55CC77;
}
.driver-performance-flag-B[data-v-5c681033] {
  color: #999;
}
.driver-performance-flag-C[data-v-5c681033] {
  color: #FF4742;
}
/* [check-in rule] Google map autosuggest result container */
.pac-container[data-v-5c681033] {
  z-index: 100000;
}
.action-link[data-v-5c681033] {
  color: #2769f0;
  cursor: pointer;
  display: inline-block;
  margin-left: 6px;
}
.action-link[data-v-5c681033]:first-child {
  margin-left: 0;
}
.action-link[data-v-5c681033]:hover {
  text-decoration: underline;
}
.separate-line[data-v-5c681033] {
  height: 0;
  width: 100%;
  border-top: 1px #E9E9E9 solid;
  margin-bottom: 16px;
}
.white-fs-ground[data-v-5c681033] {
  padding: 24px;
  background: #fff;
  height: 100%;
}
.white-fs-ground .category-title[data-v-5c681033] {
  font-size: 16px;
  font-weight: 500;
  line-height: 16px;
  color: #333;
  margin-top: 56px;
  margin-bottom: 16px;
}
.white-fs-ground .category-title[data-v-5c681033]:first-child {
  margin-top: 16px;
}
.white-fs-ground .category-title[data-v-5c681033]:before {
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
.page-table-container[data-v-5c681033] {
  border: 1px solid #eee;
}
.form-body-center[data-v-5c681033] {
  margin: 0 auto;
}
.form-body-left[data-v-5c681033] {
  margin: 0;
}
.dialog-footer[data-v-5c681033],
.footer-submit[data-v-5c681033] {
  margin-top: 32px;
}
.dialog-footer .ssc-button[data-v-5c681033],
.footer-submit .ssc-button[data-v-5c681033] {
  margin-left: 16px;
}
.dialog-footer .ssc-button[data-v-5c681033]:first-child,
.footer-submit .ssc-button[data-v-5c681033]:first-child {
  margin-left: 0;
}
.text-center[data-v-5c681033] {
  text-align: center;
}
.s-form-textarea .ssc-textarea[data-v-5c681033],
.ssc-form-item .ssc-select[data-v-5c681033],
.ssc-form-item .ssc-input-size-medium[data-v-5c681033] {
  width: 320px;
}
.ssc-steps.is-horizontal[data-v-5c681033] {
  width: 60%;
  margin: 23px auto;
}
.action-wrap[data-v-5c681033] {
  display: flex;
  margin: 10px 0;
}
.action-wrap .actions[data-v-5c681033] {
  flex: 1;
}
.action-wrap .actions .ssc-button[data-v-5c681033] {
  margin-right: 16px;
}
.action-wrap .upload-route-log-info[data-v-5c681033] {
  align-self: center;
  text-align: right;
  flex: 1;
}
.action-wrap .upload-route-log-info label[data-v-5c681033] {
  margin-right: 8px;
}
.upload-log-table[data-v-5c681033] {
  margin: 10px 0;
}
.group-route-list-info[data-v-5c681033] {
  line-height: 40px;
}
.group-route-list-info label[data-v-5c681033] {
  margin-right: 10px;
}
.mass-upload-input-footer[data-v-5c681033] {
  margin-top: 32px;
}
.mass-upload-input-footer .ssc-button[data-v-5c681033] {
  margin-right: 10px;
}
.add-range-btn[data-v-5c681033] {
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
.add-range-btn[data-v-5c681033]:hover {
  background: #f6f6f6;
}
.range-wrap[data-v-5c681033] {
  padding: 16px;
}
.range-wrap .seq-tag[data-v-5c681033] {
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
.range-wrap .icon-del[data-v-5c681033] {
  line-height: 32px;
  width: 24px;
  height: 24px;
  cursor: pointer;
  color: #bbb;
}
.range-wrap .icon-del[data-v-5c681033]:hover {
  color: #888;
}
.bg-fafafa[data-v-5c681033] {
  background: #fafafa;
}
.ssc-step-main-title[data-v-5c681033] {
  line-height: 1.5;
}
.ssc-form-item-error-tip[data-v-5c681033] {
  white-space: nowrap;
}
.ssc-table-header .ssc-table-header-title[data-v-5c681033] {
  height: 100%;
}
.ssc-table-header .ssc-table-header-column-container[data-v-5c681033] {
  height: 100%;
}
.ssc-table-body .ssc-table-header-column-container .td-content[data-v-5c681033] {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.acribus-text-ellipsis[data-v-5c681033] {
  display: inline-block;
  width: 100%;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.station-tree-container .ssc-form-item-content[data-v-5c681033] {
  flex-direction: column;
  position: relative;
}
.station-tree-container .ssc-form-item-content .tree[data-v-5c681033] {
  min-width: 318px;
  display: block;
  margin-top: 20px;
}
.station-tree-container .ssc-form-item-content .tree.has-search-input[data-v-5c681033] {
  padding-top: 40px;
}
.station-tree-container .ssc-form-item-content .tree-input[data-v-5c681033] {
  position: absolute;
  left: 3%;
  top: 30px;
  z-index: 1;
  width: 94%;
  margin: 0 auto;
  color: #aeaeae;
}
.ssc-dropdown-menu[data-v-5c681033] {
  min-width: 176px;
  max-width: 320px;
  z-index: 2;
}
.ssc-dropdown-menu .active[data-v-5c681033] {
  color: #EE4D2D;
  font-weight: 500;
}
.detail-part-title[data-v-5c681033] {
  font-size: 18px;
  color: #333333;
  font-weight: 500;
  margin-bottom: 16px;
}
.detail-part-title.additional-info[data-v-5c681033] {
  margin-top: 56px;
}
.detail-part-title[data-v-5c681033]::before {
  content: '';
  width: 2px;
  height: 10px;
  background: #EE4D2D;
  display: inline-block;
  margin-right: 6px;
}
.page-wrapper[data-v-5c681033] {
  height: 100%;
}
.zone-container button:disabled:not(.btn-prev):not(.btn-next).ssc-btn-type-primary[data-v-5c681033] {
  color: #FFF !important;
  background: #EE4D2D !important;
  opacity: 0.5;
}
.pagination-left-total[data-v-5c681033] {
  display: flex;
  flex: 1;
}
.common-status[data-v-5c681033] {
  line-height: 12px;
  font-weight: 500;
  padding: 3px 4px;
  border-radius: 2px;
  display: inline-block;
  white-space: nowrap;
}
.common-status.status-success[data-v-5c681033] {
  background: #ECFFF1;
  color: #1CC461;
}
.common-status.status-disabled[data-v-5c681033] {
  color: #646B76;
  background: #F5F6F9;
}
.common-status.status-info[data-v-5c681033] {
  color: #3274F7;
  background: #F0F7FF;
}
.common-status.status-danger[data-v-5c681033] {
  color: #F32345;
  background: #FFF0F0;
}
.common-status.status-warning[data-v-5c681033] {
  background: #FFF8DB;
  color: #FFB014;
}
.common-divide[data-v-5c681033] {
  height: 8px;
  background: #F5F6F9;
  margin: 0 -24px;
}
.ssc-scan-toast[data-v-5c681033] {
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
.ssc-scan-toast.ssc-scan-toast-success[data-v-5c681033] {
  animation-duration: 4.4s;
  animation-name: scanSuccessToast-5c681033;
  background: #1CC461;
}
.ssc-scan-toast.ssc-scan-toast-fail[data-v-5c681033] {
  background: #F32345;
  animation-duration: 8.4s;
  animation-name: scanFailToast-5c681033;
}
.ssc-scan-toast.ssc-scan-toast-notice[data-v-5c681033] {
  background: #FFA620;
  animation-duration: 6.4s;
  animation-name: scanFailToast-5c681033;
}
.ssc-scan-toast .message-panel[data-v-5c681033] {
  display: flex;
  width: 100%;
  align-items: center;
}
.ssc-scan-toast .message-panel .icon[data-v-5c681033] {
  margin-right: 18px;
  width: 28px;
  height: 28px;
  flex-shrink: 0;
}
.ssc-scan-toast .message-panel .text[data-v-5c681033] {
  display: inline-block;
}
@keyframes scanSuccessToast-5c681033 {
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
@keyframes scanFailToast-5c681033 {
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
.table-pagination[data-v-5c681033] {
  height: 56px;
  border: 1px solid #ECF0F4;
  border-top: 0;
  justify-content: flex-end;
  padding-right: 16px;
}
.journey-type[data-v-5c681033] {
  display: flex;
  align-items: center;
}
.journey-type .journey-type-dot[data-v-5c681033] {
  width: 6px;
  height: 6px;
  border-radius: 50%;
  display: inline-block;
  margin-right: 8px;
}
.pagination-sticky-bottom[data-v-5c681033] {
  background: #fff;
  position: sticky;
  bottom: 16px;
}
.pagination-sticky-bottom[data-v-5c681033]:after {
  content: ' ';
  background: #fff;
  width: 100%;
  height: 16px;
  position: absolute;
}
.pagination-sticky-bottom[data-v-5c681033] .ssc-pagination {
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
.pagination-sticky-bottom[data-v-5c681033] .ssc-pagination .total-container {
  flex: 1;
  margin-left: 15px;
  margin-right: 12px;
}
.sp-card-log-list[data-v-5c681033] {
  padding: 16px 24px;
  background: #fff;
  min-height: 100%;
}
.ssc-table-panel .ssc-form-item .ssc-form-item-content textarea[data-v-5c681033],
.pro-filter .ssc-form-item .ssc-form-item-content textarea[data-v-5c681033] {
  border: transparent;
}
.message-red-text[data-v-5c681033] {
  color: #EE4D2D;
  font-weight: 700;
}
`,""]),p.exports=g},WSun:(p,g,r)=>{var d=r("JPst");g=d(!1),g.push([p.id,`.actions[data-v-2ea19db0] {
  float: right;
  font-size: 0;
}
.actions[data-v-2ea19db0] .ssc-button {
  margin-left: 16px !important;
}
.fee-module[data-v-2ea19db0] {
  margin-bottom: 50px;
}
.label-icon[data-v-2ea19db0] {
  width: 18px;
  margin-top: -2px;
}
ul[data-v-2ea19db0] {
  padding: 0;
  margin: 0;
  list-style: none;
}
.button-base[data-v-2ea19db0] {
  padding: 9px 20px;
  font-size: 14px;
  color: #FFFFFF;
}
.spx-button[data-v-2ea19db0] {
  padding: 9px 20px;
  font-size: 14px;
  color: #FFFFFF;
  border-color: #FFFFFF;
  color: #555555;
}
.spx-button[data-v-2ea19db0]:hover {
  background-color: #FFFFFF;
}
.spx-button-primary[data-v-2ea19db0] {
  padding: 9px 20px;
  font-size: 14px;
  color: #FFFFFF;
  background-color: #EE4D2D;
  border-color: #EE4D2D;
}
.ssc-message[data-v-2ea19db0] {
  top: 20px !important;
}
.sp-card > .actions[data-v-2ea19db0] {
  margin-bottom: 10px;
  display: flex;
  flex-wrap: wrap;
}
.sp-card > .actions .right[data-v-2ea19db0] {
  flex: 1;
  text-align: right;
  height: 40px;
}
table th[data-v-2ea19db0] {
  color: rgba(0, 0, 0, 0.85);
  border-color: #EEEEEE;
  font-size: 14px;
  font-weight: 500;
}
.spx-editor .ssc-tag[data-v-2ea19db0] {
  font-size: 12px;
  margin: 0px;
  padding: 0;
}
.spx-editor .ssc-tag .left-padding-span[data-v-2ea19db0] {
  width: 0;
  margin: 0 0 0 8px;
}
.spx-editor .ssc-tag .right-padding-span[data-v-2ea19db0] {
  width: 0;
  margin: 0 8px 0 0;
}
.spx-editor .tag-editor-span[data-v-2ea19db0] {
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
.spx-editor .tag-editor-span .tag-editor-span-space[data-v-2ea19db0] {
  width: 8px;
  height: 15px;
  display: inline-block;
  line-height: 22px;
}
.ssc-tabs-type-pane-card .ssc-tabs-pane[data-v-2ea19db0] {
  background: #FAFAFA;
}
.check-tree[data-v-2ea19db0] {
  margin-left: 80px;
}
.avatar-uploader-icon[data-v-2ea19db0] {
  font-size: 28px;
  color: #8c939d;
  width: 178px;
  height: 178px;
  line-height: 178px;
  text-align: center;
}
.avatar-uploader-icon-small[data-v-2ea19db0] {
  font-size: 14px !important;
  color: #8c939d;
  width: 56px !important;
  height: 56px !important;
  line-height: 56px !important;
  text-align: center;
}
.avatar-uploader-icon-middle[data-v-2ea19db0] {
  font-size: 14px !important;
  color: #8c939d;
  width: 94px !important;
  height: 94px !important;
  line-height: 94px !important;
  text-align: center;
}
.avatar[data-v-2ea19db0] {
  width: 178px;
  height: 178px;
  display: block;
}
.avatar-small[data-v-2ea19db0] {
  width: 56px;
  height: 56px;
  display: block;
}
.avatar-middle[data-v-2ea19db0] {
  width: 94px;
  height: 94px;
  display: block;
}
.acribus-sp-tabs[data-v-2ea19db0] {
  padding: 16px 16px 0px;
  border-radius: 6px;
  margin-bottom: -30px;
  background-color: #fff;
}
span.red[data-v-2ea19db0] {
  color: #F56C6C;
}
span.green[data-v-2ea19db0] {
  color: #67C23A;
}
.sp-hooks[data-v-2ea19db0] {
  overflow: hidden;
}
.text-link[data-v-2ea19db0] {
  color: #409eff;
  cursor: pointer;
}
.text-warning[data-v-2ea19db0] {
  color: #e80808;
}
.help-text[data-v-2ea19db0] {
  cursor: help;
}
.driver-performance-flag-A[data-v-2ea19db0] {
  color: #55CC77;
}
.driver-performance-flag-B[data-v-2ea19db0] {
  color: #999;
}
.driver-performance-flag-C[data-v-2ea19db0] {
  color: #FF4742;
}
/* [check-in rule] Google map autosuggest result container */
.pac-container[data-v-2ea19db0] {
  z-index: 100000;
}
.action-link[data-v-2ea19db0] {
  color: #2769f0;
  cursor: pointer;
  display: inline-block;
  margin-left: 6px;
}
.action-link[data-v-2ea19db0]:first-child {
  margin-left: 0;
}
.action-link[data-v-2ea19db0]:hover {
  text-decoration: underline;
}
.separate-line[data-v-2ea19db0] {
  height: 0;
  width: 100%;
  border-top: 1px #E9E9E9 solid;
  margin-bottom: 16px;
}
.white-fs-ground[data-v-2ea19db0] {
  padding: 24px;
  background: #fff;
  height: 100%;
}
.white-fs-ground .category-title[data-v-2ea19db0] {
  font-size: 16px;
  font-weight: 500;
  line-height: 16px;
  color: #333;
  margin-top: 56px;
  margin-bottom: 16px;
}
.white-fs-ground .category-title[data-v-2ea19db0]:first-child {
  margin-top: 16px;
}
.white-fs-ground .category-title[data-v-2ea19db0]:before {
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
.page-table-container[data-v-2ea19db0] {
  border: 1px solid #eee;
}
.form-body-center[data-v-2ea19db0] {
  margin: 0 auto;
}
.form-body-left[data-v-2ea19db0] {
  margin: 0;
}
.dialog-footer[data-v-2ea19db0],
.footer-submit[data-v-2ea19db0] {
  margin-top: 32px;
}
.dialog-footer .ssc-button[data-v-2ea19db0],
.footer-submit .ssc-button[data-v-2ea19db0] {
  margin-left: 16px;
}
.dialog-footer .ssc-button[data-v-2ea19db0]:first-child,
.footer-submit .ssc-button[data-v-2ea19db0]:first-child {
  margin-left: 0;
}
.text-center[data-v-2ea19db0] {
  text-align: center;
}
.s-form-textarea .ssc-textarea[data-v-2ea19db0],
.ssc-form-item .ssc-select[data-v-2ea19db0],
.ssc-form-item .ssc-input-size-medium[data-v-2ea19db0] {
  width: 320px;
}
.ssc-steps.is-horizontal[data-v-2ea19db0] {
  width: 60%;
  margin: 23px auto;
}
.action-wrap[data-v-2ea19db0] {
  display: flex;
  margin: 10px 0;
}
.action-wrap .actions[data-v-2ea19db0] {
  flex: 1;
}
.action-wrap .actions .ssc-button[data-v-2ea19db0] {
  margin-right: 16px;
}
.action-wrap .upload-route-log-info[data-v-2ea19db0] {
  align-self: center;
  text-align: right;
  flex: 1;
}
.action-wrap .upload-route-log-info label[data-v-2ea19db0] {
  margin-right: 8px;
}
.upload-log-table[data-v-2ea19db0] {
  margin: 10px 0;
}
.group-route-list-info[data-v-2ea19db0] {
  line-height: 40px;
}
.group-route-list-info label[data-v-2ea19db0] {
  margin-right: 10px;
}
.mass-upload-input-footer[data-v-2ea19db0] {
  margin-top: 32px;
}
.mass-upload-input-footer .ssc-button[data-v-2ea19db0] {
  margin-right: 10px;
}
.add-range-btn[data-v-2ea19db0] {
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
.add-range-btn[data-v-2ea19db0]:hover {
  background: #f6f6f6;
}
.range-wrap[data-v-2ea19db0] {
  padding: 16px;
}
.range-wrap .seq-tag[data-v-2ea19db0] {
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
.range-wrap .icon-del[data-v-2ea19db0] {
  line-height: 32px;
  width: 24px;
  height: 24px;
  cursor: pointer;
  color: #bbb;
}
.range-wrap .icon-del[data-v-2ea19db0]:hover {
  color: #888;
}
.bg-fafafa[data-v-2ea19db0] {
  background: #fafafa;
}
.ssc-step-main-title[data-v-2ea19db0] {
  line-height: 1.5;
}
.ssc-form-item-error-tip[data-v-2ea19db0] {
  white-space: nowrap;
}
.ssc-table-header .ssc-table-header-title[data-v-2ea19db0] {
  height: 100%;
}
.ssc-table-header .ssc-table-header-column-container[data-v-2ea19db0] {
  height: 100%;
}
.ssc-table-body .ssc-table-header-column-container .td-content[data-v-2ea19db0] {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.acribus-text-ellipsis[data-v-2ea19db0] {
  display: inline-block;
  width: 100%;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.station-tree-container .ssc-form-item-content[data-v-2ea19db0] {
  flex-direction: column;
  position: relative;
}
.station-tree-container .ssc-form-item-content .tree[data-v-2ea19db0] {
  min-width: 318px;
  display: block;
  margin-top: 20px;
}
.station-tree-container .ssc-form-item-content .tree.has-search-input[data-v-2ea19db0] {
  padding-top: 40px;
}
.station-tree-container .ssc-form-item-content .tree-input[data-v-2ea19db0] {
  position: absolute;
  left: 3%;
  top: 30px;
  z-index: 1;
  width: 94%;
  margin: 0 auto;
  color: #aeaeae;
}
.ssc-dropdown-menu[data-v-2ea19db0] {
  min-width: 176px;
  max-width: 320px;
  z-index: 2;
}
.ssc-dropdown-menu .active[data-v-2ea19db0] {
  color: #EE4D2D;
  font-weight: 500;
}
.detail-part-title[data-v-2ea19db0] {
  font-size: 18px;
  color: #333333;
  font-weight: 500;
  margin-bottom: 16px;
}
.detail-part-title.additional-info[data-v-2ea19db0] {
  margin-top: 56px;
}
.detail-part-title[data-v-2ea19db0]::before {
  content: '';
  width: 2px;
  height: 10px;
  background: #EE4D2D;
  display: inline-block;
  margin-right: 6px;
}
.page-wrapper[data-v-2ea19db0] {
  height: 100%;
}
.zone-container button:disabled:not(.btn-prev):not(.btn-next).ssc-btn-type-primary[data-v-2ea19db0] {
  color: #FFF !important;
  background: #EE4D2D !important;
  opacity: 0.5;
}
.pagination-left-total[data-v-2ea19db0] {
  display: flex;
  flex: 1;
}
.common-status[data-v-2ea19db0] {
  line-height: 12px;
  font-weight: 500;
  padding: 3px 4px;
  border-radius: 2px;
  display: inline-block;
  white-space: nowrap;
}
.common-status.status-success[data-v-2ea19db0] {
  background: #ECFFF1;
  color: #1CC461;
}
.common-status.status-disabled[data-v-2ea19db0] {
  color: #646B76;
  background: #F5F6F9;
}
.common-status.status-info[data-v-2ea19db0] {
  color: #3274F7;
  background: #F0F7FF;
}
.common-status.status-danger[data-v-2ea19db0] {
  color: #F32345;
  background: #FFF0F0;
}
.common-status.status-warning[data-v-2ea19db0] {
  background: #FFF8DB;
  color: #FFB014;
}
.common-divide[data-v-2ea19db0] {
  height: 8px;
  background: #F5F6F9;
  margin: 0 -24px;
}
.ssc-scan-toast[data-v-2ea19db0] {
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
.ssc-scan-toast.ssc-scan-toast-success[data-v-2ea19db0] {
  animation-duration: 4.4s;
  animation-name: scanSuccessToast-2ea19db0;
  background: #1CC461;
}
.ssc-scan-toast.ssc-scan-toast-fail[data-v-2ea19db0] {
  background: #F32345;
  animation-duration: 8.4s;
  animation-name: scanFailToast-2ea19db0;
}
.ssc-scan-toast.ssc-scan-toast-notice[data-v-2ea19db0] {
  background: #FFA620;
  animation-duration: 6.4s;
  animation-name: scanFailToast-2ea19db0;
}
.ssc-scan-toast .message-panel[data-v-2ea19db0] {
  display: flex;
  width: 100%;
  align-items: center;
}
.ssc-scan-toast .message-panel .icon[data-v-2ea19db0] {
  margin-right: 18px;
  width: 28px;
  height: 28px;
  flex-shrink: 0;
}
.ssc-scan-toast .message-panel .text[data-v-2ea19db0] {
  display: inline-block;
}
@keyframes scanSuccessToast-2ea19db0 {
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
@keyframes scanFailToast-2ea19db0 {
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
.table-pagination[data-v-2ea19db0] {
  height: 56px;
  border: 1px solid #ECF0F4;
  border-top: 0;
  justify-content: flex-end;
  padding-right: 16px;
}
.journey-type[data-v-2ea19db0] {
  display: flex;
  align-items: center;
}
.journey-type .journey-type-dot[data-v-2ea19db0] {
  width: 6px;
  height: 6px;
  border-radius: 50%;
  display: inline-block;
  margin-right: 8px;
}
.pagination-sticky-bottom[data-v-2ea19db0] {
  background: #fff;
  position: sticky;
  bottom: 16px;
}
.pagination-sticky-bottom[data-v-2ea19db0]:after {
  content: ' ';
  background: #fff;
  width: 100%;
  height: 16px;
  position: absolute;
}
.pagination-sticky-bottom[data-v-2ea19db0] .ssc-pagination {
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
.pagination-sticky-bottom[data-v-2ea19db0] .ssc-pagination .total-container {
  flex: 1;
  margin-left: 15px;
  margin-right: 12px;
}
.sp-card-log-list[data-v-2ea19db0] {
  padding: 16px 24px;
  background: #fff;
  min-height: 100%;
}
.ssc-table-panel .ssc-form-item .ssc-form-item-content textarea[data-v-2ea19db0],
.pro-filter .ssc-form-item .ssc-form-item-content textarea[data-v-2ea19db0] {
  border: transparent;
}
.message-red-text[data-v-2ea19db0] {
  color: #EE4D2D;
  font-weight: 700;
}
`,""]),p.exports=g},"k+/e":(p,g,r)=>{var d=r("JPst");g=d(!1),g.push([p.id,`.upload-tip[data-v-0b67ce62] {
  font-size: 12px;
  color: #999;
}
.edit-btn[data-v-0b67ce62] {
  float: right;
  margin-right: 18px;
}
.empty-remark[data-v-0b67ce62] {
  display: inline-block;
  margin-left: 180px;
}
.ssc-upload-picture-card[data-v-0b67ce62] {
  width: 80px;
  height: 80px;
}
ul[data-v-0b67ce62] {
  padding: 0;
  margin: 0;
  list-style: none;
}
.button-base[data-v-0b67ce62] {
  padding: 9px 20px;
  font-size: 14px;
  color: #FFFFFF;
}
.spx-button[data-v-0b67ce62] {
  padding: 9px 20px;
  font-size: 14px;
  color: #FFFFFF;
  border-color: #FFFFFF;
  color: #555555;
}
.spx-button[data-v-0b67ce62]:hover {
  background-color: #FFFFFF;
}
.spx-button-primary[data-v-0b67ce62] {
  padding: 9px 20px;
  font-size: 14px;
  color: #FFFFFF;
  background-color: #EE4D2D;
  border-color: #EE4D2D;
}
.ssc-message[data-v-0b67ce62] {
  top: 20px !important;
}
.sp-card > .actions[data-v-0b67ce62] {
  margin-bottom: 10px;
  display: flex;
  flex-wrap: wrap;
}
.sp-card > .actions .right[data-v-0b67ce62] {
  flex: 1;
  text-align: right;
  height: 40px;
}
table th[data-v-0b67ce62] {
  color: rgba(0, 0, 0, 0.85);
  border-color: #EEEEEE;
  font-size: 14px;
  font-weight: 500;
}
.spx-editor .ssc-tag[data-v-0b67ce62] {
  font-size: 12px;
  margin: 0px;
  padding: 0;
}
.spx-editor .ssc-tag .left-padding-span[data-v-0b67ce62] {
  width: 0;
  margin: 0 0 0 8px;
}
.spx-editor .ssc-tag .right-padding-span[data-v-0b67ce62] {
  width: 0;
  margin: 0 8px 0 0;
}
.spx-editor .tag-editor-span[data-v-0b67ce62] {
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
.spx-editor .tag-editor-span .tag-editor-span-space[data-v-0b67ce62] {
  width: 8px;
  height: 15px;
  display: inline-block;
  line-height: 22px;
}
.ssc-tabs-type-pane-card .ssc-tabs-pane[data-v-0b67ce62] {
  background: #FAFAFA;
}
.check-tree[data-v-0b67ce62] {
  margin-left: 80px;
}
.avatar-uploader-icon[data-v-0b67ce62] {
  font-size: 28px;
  color: #8c939d;
  width: 178px;
  height: 178px;
  line-height: 178px;
  text-align: center;
}
.avatar-uploader-icon-small[data-v-0b67ce62] {
  font-size: 14px !important;
  color: #8c939d;
  width: 56px !important;
  height: 56px !important;
  line-height: 56px !important;
  text-align: center;
}
.avatar-uploader-icon-middle[data-v-0b67ce62] {
  font-size: 14px !important;
  color: #8c939d;
  width: 94px !important;
  height: 94px !important;
  line-height: 94px !important;
  text-align: center;
}
.avatar[data-v-0b67ce62] {
  width: 178px;
  height: 178px;
  display: block;
}
.avatar-small[data-v-0b67ce62] {
  width: 56px;
  height: 56px;
  display: block;
}
.avatar-middle[data-v-0b67ce62] {
  width: 94px;
  height: 94px;
  display: block;
}
.acribus-sp-tabs[data-v-0b67ce62] {
  padding: 16px 16px 0px;
  border-radius: 6px;
  margin-bottom: -30px;
  background-color: #fff;
}
span.red[data-v-0b67ce62] {
  color: #F56C6C;
}
span.green[data-v-0b67ce62] {
  color: #67C23A;
}
.sp-hooks[data-v-0b67ce62] {
  overflow: hidden;
}
.text-link[data-v-0b67ce62] {
  color: #409eff;
  cursor: pointer;
}
.text-warning[data-v-0b67ce62] {
  color: #e80808;
}
.help-text[data-v-0b67ce62] {
  cursor: help;
}
.driver-performance-flag-A[data-v-0b67ce62] {
  color: #55CC77;
}
.driver-performance-flag-B[data-v-0b67ce62] {
  color: #999;
}
.driver-performance-flag-C[data-v-0b67ce62] {
  color: #FF4742;
}
/* [check-in rule] Google map autosuggest result container */
.pac-container[data-v-0b67ce62] {
  z-index: 100000;
}
.action-link[data-v-0b67ce62] {
  color: #2769f0;
  cursor: pointer;
  display: inline-block;
  margin-left: 6px;
}
.action-link[data-v-0b67ce62]:first-child {
  margin-left: 0;
}
.action-link[data-v-0b67ce62]:hover {
  text-decoration: underline;
}
.separate-line[data-v-0b67ce62] {
  height: 0;
  width: 100%;
  border-top: 1px #E9E9E9 solid;
  margin-bottom: 16px;
}
.white-fs-ground[data-v-0b67ce62] {
  padding: 24px;
  background: #fff;
  height: 100%;
}
.white-fs-ground .category-title[data-v-0b67ce62] {
  font-size: 16px;
  font-weight: 500;
  line-height: 16px;
  color: #333;
  margin-top: 56px;
  margin-bottom: 16px;
}
.white-fs-ground .category-title[data-v-0b67ce62]:first-child {
  margin-top: 16px;
}
.white-fs-ground .category-title[data-v-0b67ce62]:before {
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
.page-table-container[data-v-0b67ce62] {
  border: 1px solid #eee;
}
.form-body-center[data-v-0b67ce62] {
  margin: 0 auto;
}
.form-body-left[data-v-0b67ce62] {
  margin: 0;
}
.dialog-footer[data-v-0b67ce62],
.footer-submit[data-v-0b67ce62] {
  margin-top: 32px;
}
.dialog-footer .ssc-button[data-v-0b67ce62],
.footer-submit .ssc-button[data-v-0b67ce62] {
  margin-left: 16px;
}
.dialog-footer .ssc-button[data-v-0b67ce62]:first-child,
.footer-submit .ssc-button[data-v-0b67ce62]:first-child {
  margin-left: 0;
}
.text-center[data-v-0b67ce62] {
  text-align: center;
}
.s-form-textarea .ssc-textarea[data-v-0b67ce62],
.ssc-form-item .ssc-select[data-v-0b67ce62],
.ssc-form-item .ssc-input-size-medium[data-v-0b67ce62] {
  width: 320px;
}
.ssc-steps.is-horizontal[data-v-0b67ce62] {
  width: 60%;
  margin: 23px auto;
}
.action-wrap[data-v-0b67ce62] {
  display: flex;
  margin: 10px 0;
}
.action-wrap .actions[data-v-0b67ce62] {
  flex: 1;
}
.action-wrap .actions .ssc-button[data-v-0b67ce62] {
  margin-right: 16px;
}
.action-wrap .upload-route-log-info[data-v-0b67ce62] {
  align-self: center;
  text-align: right;
  flex: 1;
}
.action-wrap .upload-route-log-info label[data-v-0b67ce62] {
  margin-right: 8px;
}
.upload-log-table[data-v-0b67ce62] {
  margin: 10px 0;
}
.group-route-list-info[data-v-0b67ce62] {
  line-height: 40px;
}
.group-route-list-info label[data-v-0b67ce62] {
  margin-right: 10px;
}
.mass-upload-input-footer[data-v-0b67ce62] {
  margin-top: 32px;
}
.mass-upload-input-footer .ssc-button[data-v-0b67ce62] {
  margin-right: 10px;
}
.add-range-btn[data-v-0b67ce62] {
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
.add-range-btn[data-v-0b67ce62]:hover {
  background: #f6f6f6;
}
.range-wrap[data-v-0b67ce62] {
  padding: 16px;
}
.range-wrap .seq-tag[data-v-0b67ce62] {
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
.range-wrap .icon-del[data-v-0b67ce62] {
  line-height: 32px;
  width: 24px;
  height: 24px;
  cursor: pointer;
  color: #bbb;
}
.range-wrap .icon-del[data-v-0b67ce62]:hover {
  color: #888;
}
.bg-fafafa[data-v-0b67ce62] {
  background: #fafafa;
}
.ssc-step-main-title[data-v-0b67ce62] {
  line-height: 1.5;
}
.ssc-form-item-error-tip[data-v-0b67ce62] {
  white-space: nowrap;
}
.ssc-table-header .ssc-table-header-title[data-v-0b67ce62] {
  height: 100%;
}
.ssc-table-header .ssc-table-header-column-container[data-v-0b67ce62] {
  height: 100%;
}
.ssc-table-body .ssc-table-header-column-container .td-content[data-v-0b67ce62] {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.acribus-text-ellipsis[data-v-0b67ce62] {
  display: inline-block;
  width: 100%;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.station-tree-container .ssc-form-item-content[data-v-0b67ce62] {
  flex-direction: column;
  position: relative;
}
.station-tree-container .ssc-form-item-content .tree[data-v-0b67ce62] {
  min-width: 318px;
  display: block;
  margin-top: 20px;
}
.station-tree-container .ssc-form-item-content .tree.has-search-input[data-v-0b67ce62] {
  padding-top: 40px;
}
.station-tree-container .ssc-form-item-content .tree-input[data-v-0b67ce62] {
  position: absolute;
  left: 3%;
  top: 30px;
  z-index: 1;
  width: 94%;
  margin: 0 auto;
  color: #aeaeae;
}
.ssc-dropdown-menu[data-v-0b67ce62] {
  min-width: 176px;
  max-width: 320px;
  z-index: 2;
}
.ssc-dropdown-menu .active[data-v-0b67ce62] {
  color: #EE4D2D;
  font-weight: 500;
}
.detail-part-title[data-v-0b67ce62] {
  font-size: 18px;
  color: #333333;
  font-weight: 500;
  margin-bottom: 16px;
}
.detail-part-title.additional-info[data-v-0b67ce62] {
  margin-top: 56px;
}
.detail-part-title[data-v-0b67ce62]::before {
  content: '';
  width: 2px;
  height: 10px;
  background: #EE4D2D;
  display: inline-block;
  margin-right: 6px;
}
.page-wrapper[data-v-0b67ce62] {
  height: 100%;
}
.zone-container button:disabled:not(.btn-prev):not(.btn-next).ssc-btn-type-primary[data-v-0b67ce62] {
  color: #FFF !important;
  background: #EE4D2D !important;
  opacity: 0.5;
}
.pagination-left-total[data-v-0b67ce62] {
  display: flex;
  flex: 1;
}
.common-status[data-v-0b67ce62] {
  line-height: 12px;
  font-weight: 500;
  padding: 3px 4px;
  border-radius: 2px;
  display: inline-block;
  white-space: nowrap;
}
.common-status.status-success[data-v-0b67ce62] {
  background: #ECFFF1;
  color: #1CC461;
}
.common-status.status-disabled[data-v-0b67ce62] {
  color: #646B76;
  background: #F5F6F9;
}
.common-status.status-info[data-v-0b67ce62] {
  color: #3274F7;
  background: #F0F7FF;
}
.common-status.status-danger[data-v-0b67ce62] {
  color: #F32345;
  background: #FFF0F0;
}
.common-status.status-warning[data-v-0b67ce62] {
  background: #FFF8DB;
  color: #FFB014;
}
.common-divide[data-v-0b67ce62] {
  height: 8px;
  background: #F5F6F9;
  margin: 0 -24px;
}
.ssc-scan-toast[data-v-0b67ce62] {
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
.ssc-scan-toast.ssc-scan-toast-success[data-v-0b67ce62] {
  animation-duration: 4.4s;
  animation-name: scanSuccessToast-0b67ce62;
  background: #1CC461;
}
.ssc-scan-toast.ssc-scan-toast-fail[data-v-0b67ce62] {
  background: #F32345;
  animation-duration: 8.4s;
  animation-name: scanFailToast-0b67ce62;
}
.ssc-scan-toast.ssc-scan-toast-notice[data-v-0b67ce62] {
  background: #FFA620;
  animation-duration: 6.4s;
  animation-name: scanFailToast-0b67ce62;
}
.ssc-scan-toast .message-panel[data-v-0b67ce62] {
  display: flex;
  width: 100%;
  align-items: center;
}
.ssc-scan-toast .message-panel .icon[data-v-0b67ce62] {
  margin-right: 18px;
  width: 28px;
  height: 28px;
  flex-shrink: 0;
}
.ssc-scan-toast .message-panel .text[data-v-0b67ce62] {
  display: inline-block;
}
@keyframes scanSuccessToast-0b67ce62 {
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
@keyframes scanFailToast-0b67ce62 {
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
.table-pagination[data-v-0b67ce62] {
  height: 56px;
  border: 1px solid #ECF0F4;
  border-top: 0;
  justify-content: flex-end;
  padding-right: 16px;
}
.journey-type[data-v-0b67ce62] {
  display: flex;
  align-items: center;
}
.journey-type .journey-type-dot[data-v-0b67ce62] {
  width: 6px;
  height: 6px;
  border-radius: 50%;
  display: inline-block;
  margin-right: 8px;
}
.pagination-sticky-bottom[data-v-0b67ce62] {
  background: #fff;
  position: sticky;
  bottom: 16px;
}
.pagination-sticky-bottom[data-v-0b67ce62]:after {
  content: ' ';
  background: #fff;
  width: 100%;
  height: 16px;
  position: absolute;
}
.pagination-sticky-bottom[data-v-0b67ce62] .ssc-pagination {
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
.pagination-sticky-bottom[data-v-0b67ce62] .ssc-pagination .total-container {
  flex: 1;
  margin-left: 15px;
  margin-right: 12px;
}
.sp-card-log-list[data-v-0b67ce62] {
  padding: 16px 24px;
  background: #fff;
  min-height: 100%;
}
.ssc-table-panel .ssc-form-item .ssc-form-item-content textarea[data-v-0b67ce62],
.pro-filter .ssc-form-item .ssc-form-item-content textarea[data-v-0b67ce62] {
  border: transparent;
}
.message-red-text[data-v-0b67ce62] {
  color: #EE4D2D;
  font-weight: 700;
}
`,""]),p.exports=g},YH2U:(p,g,r)=>{var d=r("JPst");g=d(!1),g.push([p.id,`.full-length-textarea .ssc-form-item-content {
  width: 100%;
}
.full-length-textarea .ssc-form-item-content span {
  width: 100%;
}
.full-length-textarea .ssc-form-item-content .ssc-textarea:first-child {
  width: calc(100% - 18px);
}
.ssc-upload-picture-card-add-normal:hover {
  border-color: #ee4d2d !important;
}
.ssc-upload-picture-card-add-normal:hover svg {
  color: #ee4d2d !important;
}
ul {
  padding: 0;
  margin: 0;
  list-style: none;
}
.button-base {
  padding: 9px 20px;
  font-size: 14px;
  color: #FFFFFF;
}
.spx-button {
  padding: 9px 20px;
  font-size: 14px;
  color: #FFFFFF;
  border-color: #FFFFFF;
  color: #555555;
}
.spx-button:hover {
  background-color: #FFFFFF;
}
.spx-button-primary {
  padding: 9px 20px;
  font-size: 14px;
  color: #FFFFFF;
  background-color: #EE4D2D;
  border-color: #EE4D2D;
}
.ssc-message {
  top: 20px !important;
}
.sp-card > .actions {
  margin-bottom: 10px;
  display: flex;
  flex-wrap: wrap;
}
.sp-card > .actions .right {
  flex: 1;
  text-align: right;
  height: 40px;
}
table th {
  color: rgba(0, 0, 0, 0.85);
  border-color: #EEEEEE;
  font-size: 14px;
  font-weight: 500;
}
.spx-editor .ssc-tag {
  font-size: 12px;
  margin: 0px;
  padding: 0;
}
.spx-editor .ssc-tag .left-padding-span {
  width: 0;
  margin: 0 0 0 8px;
}
.spx-editor .ssc-tag .right-padding-span {
  width: 0;
  margin: 0 8px 0 0;
}
.spx-editor .tag-editor-span {
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
.spx-editor .tag-editor-span .tag-editor-span-space {
  width: 8px;
  height: 15px;
  display: inline-block;
  line-height: 22px;
}
.ssc-tabs-type-pane-card .ssc-tabs-pane {
  background: #FAFAFA;
}
.check-tree {
  margin-left: 80px;
}
.avatar-uploader-icon {
  font-size: 28px;
  color: #8c939d;
  width: 178px;
  height: 178px;
  line-height: 178px;
  text-align: center;
}
.avatar-uploader-icon-small {
  font-size: 14px !important;
  color: #8c939d;
  width: 56px !important;
  height: 56px !important;
  line-height: 56px !important;
  text-align: center;
}
.avatar-uploader-icon-middle {
  font-size: 14px !important;
  color: #8c939d;
  width: 94px !important;
  height: 94px !important;
  line-height: 94px !important;
  text-align: center;
}
.avatar {
  width: 178px;
  height: 178px;
  display: block;
}
.avatar-small {
  width: 56px;
  height: 56px;
  display: block;
}
.avatar-middle {
  width: 94px;
  height: 94px;
  display: block;
}
.acribus-sp-tabs {
  padding: 16px 16px 0px;
  border-radius: 6px;
  margin-bottom: -30px;
  background-color: #fff;
}
span.red {
  color: #F56C6C;
}
span.green {
  color: #67C23A;
}
.sp-hooks {
  overflow: hidden;
}
.text-link {
  color: #409eff;
  cursor: pointer;
}
.text-warning {
  color: #e80808;
}
.help-text {
  cursor: help;
}
.driver-performance-flag-A {
  color: #55CC77;
}
.driver-performance-flag-B {
  color: #999;
}
.driver-performance-flag-C {
  color: #FF4742;
}
/* [check-in rule] Google map autosuggest result container */
.pac-container {
  z-index: 100000;
}
.action-link {
  color: #2769f0;
  cursor: pointer;
  display: inline-block;
  margin-left: 6px;
}
.action-link:first-child {
  margin-left: 0;
}
.action-link:hover {
  text-decoration: underline;
}
.separate-line {
  height: 0;
  width: 100%;
  border-top: 1px #E9E9E9 solid;
  margin-bottom: 16px;
}
.white-fs-ground {
  padding: 24px;
  background: #fff;
  height: 100%;
}
.white-fs-ground .category-title {
  font-size: 16px;
  font-weight: 500;
  line-height: 16px;
  color: #333;
  margin-top: 56px;
  margin-bottom: 16px;
}
.white-fs-ground .category-title:first-child {
  margin-top: 16px;
}
.white-fs-ground .category-title:before {
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
.page-table-container {
  border: 1px solid #eee;
}
.form-body-center {
  margin: 0 auto;
}
.form-body-left {
  margin: 0;
}
.dialog-footer,
.footer-submit {
  margin-top: 32px;
}
.dialog-footer .ssc-button,
.footer-submit .ssc-button {
  margin-left: 16px;
}
.dialog-footer .ssc-button:first-child,
.footer-submit .ssc-button:first-child {
  margin-left: 0;
}
.text-center {
  text-align: center;
}
.s-form-textarea .ssc-textarea,
.ssc-form-item .ssc-select,
.ssc-form-item .ssc-input-size-medium {
  width: 320px;
}
.ssc-steps.is-horizontal {
  width: 60%;
  margin: 23px auto;
}
.action-wrap {
  display: flex;
  margin: 10px 0;
}
.action-wrap .actions {
  flex: 1;
}
.action-wrap .actions .ssc-button {
  margin-right: 16px;
}
.action-wrap .upload-route-log-info {
  align-self: center;
  text-align: right;
  flex: 1;
}
.action-wrap .upload-route-log-info label {
  margin-right: 8px;
}
.upload-log-table {
  margin: 10px 0;
}
.group-route-list-info {
  line-height: 40px;
}
.group-route-list-info label {
  margin-right: 10px;
}
.mass-upload-input-footer {
  margin-top: 32px;
}
.mass-upload-input-footer .ssc-button {
  margin-right: 10px;
}
.add-range-btn {
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
.add-range-btn:hover {
  background: #f6f6f6;
}
.range-wrap {
  padding: 16px;
}
.range-wrap .seq-tag {
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
.range-wrap .icon-del {
  line-height: 32px;
  width: 24px;
  height: 24px;
  cursor: pointer;
  color: #bbb;
}
.range-wrap .icon-del:hover {
  color: #888;
}
.bg-fafafa {
  background: #fafafa;
}
.ssc-step-main-title {
  line-height: 1.5;
}
.ssc-form-item-error-tip {
  white-space: nowrap;
}
.ssc-table-header .ssc-table-header-title {
  height: 100%;
}
.ssc-table-header .ssc-table-header-column-container {
  height: 100%;
}
.ssc-table-body .ssc-table-header-column-container .td-content {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.acribus-text-ellipsis {
  display: inline-block;
  width: 100%;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.station-tree-container .ssc-form-item-content {
  flex-direction: column;
  position: relative;
}
.station-tree-container .ssc-form-item-content .tree {
  min-width: 318px;
  display: block;
  margin-top: 20px;
}
.station-tree-container .ssc-form-item-content .tree.has-search-input {
  padding-top: 40px;
}
.station-tree-container .ssc-form-item-content .tree-input {
  position: absolute;
  left: 3%;
  top: 30px;
  z-index: 1;
  width: 94%;
  margin: 0 auto;
  color: #aeaeae;
}
.ssc-dropdown-menu {
  min-width: 176px;
  max-width: 320px;
  z-index: 2;
}
.ssc-dropdown-menu .active {
  color: #EE4D2D;
  font-weight: 500;
}
.detail-part-title {
  font-size: 18px;
  color: #333333;
  font-weight: 500;
  margin-bottom: 16px;
}
.detail-part-title.additional-info {
  margin-top: 56px;
}
.detail-part-title::before {
  content: '';
  width: 2px;
  height: 10px;
  background: #EE4D2D;
  display: inline-block;
  margin-right: 6px;
}
.page-wrapper {
  height: 100%;
}
.zone-container button:disabled:not(.btn-prev):not(.btn-next).ssc-btn-type-primary {
  color: #FFF !important;
  background: #EE4D2D !important;
  opacity: 0.5;
}
.pagination-left-total {
  display: flex;
  flex: 1;
}
.common-status {
  line-height: 12px;
  font-weight: 500;
  padding: 3px 4px;
  border-radius: 2px;
  display: inline-block;
  white-space: nowrap;
}
.common-status.status-success {
  background: #ECFFF1;
  color: #1CC461;
}
.common-status.status-disabled {
  color: #646B76;
  background: #F5F6F9;
}
.common-status.status-info {
  color: #3274F7;
  background: #F0F7FF;
}
.common-status.status-danger {
  color: #F32345;
  background: #FFF0F0;
}
.common-status.status-warning {
  background: #FFF8DB;
  color: #FFB014;
}
.common-divide {
  height: 8px;
  background: #F5F6F9;
  margin: 0 -24px;
}
.ssc-scan-toast {
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
.ssc-scan-toast.ssc-scan-toast-success {
  animation-duration: 4.4s;
  animation-name: scanSuccessToast;
  background: #1CC461;
}
.ssc-scan-toast.ssc-scan-toast-fail {
  background: #F32345;
  animation-duration: 8.4s;
  animation-name: scanFailToast;
}
.ssc-scan-toast.ssc-scan-toast-notice {
  background: #FFA620;
  animation-duration: 6.4s;
  animation-name: scanFailToast;
}
.ssc-scan-toast .message-panel {
  display: flex;
  width: 100%;
  align-items: center;
}
.ssc-scan-toast .message-panel .icon {
  margin-right: 18px;
  width: 28px;
  height: 28px;
  flex-shrink: 0;
}
.ssc-scan-toast .message-panel .text {
  display: inline-block;
}
@keyframes scanSuccessToast {
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
@keyframes scanFailToast {
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
.table-pagination {
  height: 56px;
  border: 1px solid #ECF0F4;
  border-top: 0;
  justify-content: flex-end;
  padding-right: 16px;
}
.journey-type {
  display: flex;
  align-items: center;
}
.journey-type .journey-type-dot {
  width: 6px;
  height: 6px;
  border-radius: 50%;
  display: inline-block;
  margin-right: 8px;
}
.pagination-sticky-bottom {
  background: #fff;
  position: sticky;
  bottom: 16px;
}
.pagination-sticky-bottom:after {
  content: ' ';
  background: #fff;
  width: 100%;
  height: 16px;
  position: absolute;
}
.pagination-sticky-bottom ::v-deep .ssc-pagination {
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
.pagination-sticky-bottom ::v-deep .ssc-pagination .total-container {
  flex: 1;
  margin-left: 15px;
  margin-right: 12px;
}
.sp-card-log-list {
  padding: 16px 24px;
  background: #fff;
  min-height: 100%;
}
.ssc-table-panel .ssc-form-item .ssc-form-item-content textarea,
.pro-filter .ssc-form-item .ssc-form-item-content textarea {
  border: transparent;
}
.message-red-text {
  color: #EE4D2D;
  font-weight: 700;
}
`,""]),p.exports=g},TScT:(p,g,r)=>{var d=r("JPst");g=d(!1),g.push([p.id,`.edit-btn[data-v-ff999732] {
  position: absolute;
  right: 24px;
  margin-top: -34px;
}
.notice-line[data-v-ff999732] {
  font-size: 12px;
  color: #999999;
}
.help-icon[data-v-ff999732] {
  width: 14px;
  position: relative;
  top: -2px;
}
.measurement-info-header[data-v-ff999732] {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 32px;
  margin-bottom: 16px;
}
.measurement-info-header .category-title[data-v-ff999732] {
  margin: 0;
}
ul[data-v-ff999732] {
  padding: 0;
  margin: 0;
  list-style: none;
}
.button-base[data-v-ff999732] {
  padding: 9px 20px;
  font-size: 14px;
  color: #FFFFFF;
}
.spx-button[data-v-ff999732] {
  padding: 9px 20px;
  font-size: 14px;
  color: #FFFFFF;
  border-color: #FFFFFF;
  color: #555555;
}
.spx-button[data-v-ff999732]:hover {
  background-color: #FFFFFF;
}
.spx-button-primary[data-v-ff999732] {
  padding: 9px 20px;
  font-size: 14px;
  color: #FFFFFF;
  background-color: #EE4D2D;
  border-color: #EE4D2D;
}
.ssc-message[data-v-ff999732] {
  top: 20px !important;
}
.sp-card > .actions[data-v-ff999732] {
  margin-bottom: 10px;
  display: flex;
  flex-wrap: wrap;
}
.sp-card > .actions .right[data-v-ff999732] {
  flex: 1;
  text-align: right;
  height: 40px;
}
table th[data-v-ff999732] {
  color: rgba(0, 0, 0, 0.85);
  border-color: #EEEEEE;
  font-size: 14px;
  font-weight: 500;
}
.spx-editor .ssc-tag[data-v-ff999732] {
  font-size: 12px;
  margin: 0px;
  padding: 0;
}
.spx-editor .ssc-tag .left-padding-span[data-v-ff999732] {
  width: 0;
  margin: 0 0 0 8px;
}
.spx-editor .ssc-tag .right-padding-span[data-v-ff999732] {
  width: 0;
  margin: 0 8px 0 0;
}
.spx-editor .tag-editor-span[data-v-ff999732] {
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
.spx-editor .tag-editor-span .tag-editor-span-space[data-v-ff999732] {
  width: 8px;
  height: 15px;
  display: inline-block;
  line-height: 22px;
}
.ssc-tabs-type-pane-card .ssc-tabs-pane[data-v-ff999732] {
  background: #FAFAFA;
}
.check-tree[data-v-ff999732] {
  margin-left: 80px;
}
.avatar-uploader-icon[data-v-ff999732] {
  font-size: 28px;
  color: #8c939d;
  width: 178px;
  height: 178px;
  line-height: 178px;
  text-align: center;
}
.avatar-uploader-icon-small[data-v-ff999732] {
  font-size: 14px !important;
  color: #8c939d;
  width: 56px !important;
  height: 56px !important;
  line-height: 56px !important;
  text-align: center;
}
.avatar-uploader-icon-middle[data-v-ff999732] {
  font-size: 14px !important;
  color: #8c939d;
  width: 94px !important;
  height: 94px !important;
  line-height: 94px !important;
  text-align: center;
}
.avatar[data-v-ff999732] {
  width: 178px;
  height: 178px;
  display: block;
}
.avatar-small[data-v-ff999732] {
  width: 56px;
  height: 56px;
  display: block;
}
.avatar-middle[data-v-ff999732] {
  width: 94px;
  height: 94px;
  display: block;
}
.acribus-sp-tabs[data-v-ff999732] {
  padding: 16px 16px 0px;
  border-radius: 6px;
  margin-bottom: -30px;
  background-color: #fff;
}
span.red[data-v-ff999732] {
  color: #F56C6C;
}
span.green[data-v-ff999732] {
  color: #67C23A;
}
.sp-hooks[data-v-ff999732] {
  overflow: hidden;
}
.text-link[data-v-ff999732] {
  color: #409eff;
  cursor: pointer;
}
.text-warning[data-v-ff999732] {
  color: #e80808;
}
.help-text[data-v-ff999732] {
  cursor: help;
}
.driver-performance-flag-A[data-v-ff999732] {
  color: #55CC77;
}
.driver-performance-flag-B[data-v-ff999732] {
  color: #999;
}
.driver-performance-flag-C[data-v-ff999732] {
  color: #FF4742;
}
/* [check-in rule] Google map autosuggest result container */
.pac-container[data-v-ff999732] {
  z-index: 100000;
}
.action-link[data-v-ff999732] {
  color: #2769f0;
  cursor: pointer;
  display: inline-block;
  margin-left: 6px;
}
.action-link[data-v-ff999732]:first-child {
  margin-left: 0;
}
.action-link[data-v-ff999732]:hover {
  text-decoration: underline;
}
.separate-line[data-v-ff999732] {
  height: 0;
  width: 100%;
  border-top: 1px #E9E9E9 solid;
  margin-bottom: 16px;
}
.white-fs-ground[data-v-ff999732] {
  padding: 24px;
  background: #fff;
  height: 100%;
}
.white-fs-ground .category-title[data-v-ff999732] {
  font-size: 16px;
  font-weight: 500;
  line-height: 16px;
  color: #333;
  margin-top: 56px;
  margin-bottom: 16px;
}
.white-fs-ground .category-title[data-v-ff999732]:first-child {
  margin-top: 16px;
}
.white-fs-ground .category-title[data-v-ff999732]:before {
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
.page-table-container[data-v-ff999732] {
  border: 1px solid #eee;
}
.form-body-center[data-v-ff999732] {
  margin: 0 auto;
}
.form-body-left[data-v-ff999732] {
  margin: 0;
}
.dialog-footer[data-v-ff999732],
.footer-submit[data-v-ff999732] {
  margin-top: 32px;
}
.dialog-footer .ssc-button[data-v-ff999732],
.footer-submit .ssc-button[data-v-ff999732] {
  margin-left: 16px;
}
.dialog-footer .ssc-button[data-v-ff999732]:first-child,
.footer-submit .ssc-button[data-v-ff999732]:first-child {
  margin-left: 0;
}
.text-center[data-v-ff999732] {
  text-align: center;
}
.s-form-textarea .ssc-textarea[data-v-ff999732],
.ssc-form-item .ssc-select[data-v-ff999732],
.ssc-form-item .ssc-input-size-medium[data-v-ff999732] {
  width: 320px;
}
.ssc-steps.is-horizontal[data-v-ff999732] {
  width: 60%;
  margin: 23px auto;
}
.action-wrap[data-v-ff999732] {
  display: flex;
  margin: 10px 0;
}
.action-wrap .actions[data-v-ff999732] {
  flex: 1;
}
.action-wrap .actions .ssc-button[data-v-ff999732] {
  margin-right: 16px;
}
.action-wrap .upload-route-log-info[data-v-ff999732] {
  align-self: center;
  text-align: right;
  flex: 1;
}
.action-wrap .upload-route-log-info label[data-v-ff999732] {
  margin-right: 8px;
}
.upload-log-table[data-v-ff999732] {
  margin: 10px 0;
}
.group-route-list-info[data-v-ff999732] {
  line-height: 40px;
}
.group-route-list-info label[data-v-ff999732] {
  margin-right: 10px;
}
.mass-upload-input-footer[data-v-ff999732] {
  margin-top: 32px;
}
.mass-upload-input-footer .ssc-button[data-v-ff999732] {
  margin-right: 10px;
}
.add-range-btn[data-v-ff999732] {
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
.add-range-btn[data-v-ff999732]:hover {
  background: #f6f6f6;
}
.range-wrap[data-v-ff999732] {
  padding: 16px;
}
.range-wrap .seq-tag[data-v-ff999732] {
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
.range-wrap .icon-del[data-v-ff999732] {
  line-height: 32px;
  width: 24px;
  height: 24px;
  cursor: pointer;
  color: #bbb;
}
.range-wrap .icon-del[data-v-ff999732]:hover {
  color: #888;
}
.bg-fafafa[data-v-ff999732] {
  background: #fafafa;
}
.ssc-step-main-title[data-v-ff999732] {
  line-height: 1.5;
}
.ssc-form-item-error-tip[data-v-ff999732] {
  white-space: nowrap;
}
.ssc-table-header .ssc-table-header-title[data-v-ff999732] {
  height: 100%;
}
.ssc-table-header .ssc-table-header-column-container[data-v-ff999732] {
  height: 100%;
}
.ssc-table-body .ssc-table-header-column-container .td-content[data-v-ff999732] {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.acribus-text-ellipsis[data-v-ff999732] {
  display: inline-block;
  width: 100%;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.station-tree-container .ssc-form-item-content[data-v-ff999732] {
  flex-direction: column;
  position: relative;
}
.station-tree-container .ssc-form-item-content .tree[data-v-ff999732] {
  min-width: 318px;
  display: block;
  margin-top: 20px;
}
.station-tree-container .ssc-form-item-content .tree.has-search-input[data-v-ff999732] {
  padding-top: 40px;
}
.station-tree-container .ssc-form-item-content .tree-input[data-v-ff999732] {
  position: absolute;
  left: 3%;
  top: 30px;
  z-index: 1;
  width: 94%;
  margin: 0 auto;
  color: #aeaeae;
}
.ssc-dropdown-menu[data-v-ff999732] {
  min-width: 176px;
  max-width: 320px;
  z-index: 2;
}
.ssc-dropdown-menu .active[data-v-ff999732] {
  color: #EE4D2D;
  font-weight: 500;
}
.detail-part-title[data-v-ff999732] {
  font-size: 18px;
  color: #333333;
  font-weight: 500;
  margin-bottom: 16px;
}
.detail-part-title.additional-info[data-v-ff999732] {
  margin-top: 56px;
}
.detail-part-title[data-v-ff999732]::before {
  content: '';
  width: 2px;
  height: 10px;
  background: #EE4D2D;
  display: inline-block;
  margin-right: 6px;
}
.page-wrapper[data-v-ff999732] {
  height: 100%;
}
.zone-container button:disabled:not(.btn-prev):not(.btn-next).ssc-btn-type-primary[data-v-ff999732] {
  color: #FFF !important;
  background: #EE4D2D !important;
  opacity: 0.5;
}
.pagination-left-total[data-v-ff999732] {
  display: flex;
  flex: 1;
}
.common-status[data-v-ff999732] {
  line-height: 12px;
  font-weight: 500;
  padding: 3px 4px;
  border-radius: 2px;
  display: inline-block;
  white-space: nowrap;
}
.common-status.status-success[data-v-ff999732] {
  background: #ECFFF1;
  color: #1CC461;
}
.common-status.status-disabled[data-v-ff999732] {
  color: #646B76;
  background: #F5F6F9;
}
.common-status.status-info[data-v-ff999732] {
  color: #3274F7;
  background: #F0F7FF;
}
.common-status.status-danger[data-v-ff999732] {
  color: #F32345;
  background: #FFF0F0;
}
.common-status.status-warning[data-v-ff999732] {
  background: #FFF8DB;
  color: #FFB014;
}
.common-divide[data-v-ff999732] {
  height: 8px;
  background: #F5F6F9;
  margin: 0 -24px;
}
.ssc-scan-toast[data-v-ff999732] {
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
.ssc-scan-toast.ssc-scan-toast-success[data-v-ff999732] {
  animation-duration: 4.4s;
  animation-name: scanSuccessToast-ff999732;
  background: #1CC461;
}
.ssc-scan-toast.ssc-scan-toast-fail[data-v-ff999732] {
  background: #F32345;
  animation-duration: 8.4s;
  animation-name: scanFailToast-ff999732;
}
.ssc-scan-toast.ssc-scan-toast-notice[data-v-ff999732] {
  background: #FFA620;
  animation-duration: 6.4s;
  animation-name: scanFailToast-ff999732;
}
.ssc-scan-toast .message-panel[data-v-ff999732] {
  display: flex;
  width: 100%;
  align-items: center;
}
.ssc-scan-toast .message-panel .icon[data-v-ff999732] {
  margin-right: 18px;
  width: 28px;
  height: 28px;
  flex-shrink: 0;
}
.ssc-scan-toast .message-panel .text[data-v-ff999732] {
  display: inline-block;
}
@keyframes scanSuccessToast-ff999732 {
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
@keyframes scanFailToast-ff999732 {
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
.table-pagination[data-v-ff999732] {
  height: 56px;
  border: 1px solid #ECF0F4;
  border-top: 0;
  justify-content: flex-end;
  padding-right: 16px;
}
.journey-type[data-v-ff999732] {
  display: flex;
  align-items: center;
}
.journey-type .journey-type-dot[data-v-ff999732] {
  width: 6px;
  height: 6px;
  border-radius: 50%;
  display: inline-block;
  margin-right: 8px;
}
.pagination-sticky-bottom[data-v-ff999732] {
  background: #fff;
  position: sticky;
  bottom: 16px;
}
.pagination-sticky-bottom[data-v-ff999732]:after {
  content: ' ';
  background: #fff;
  width: 100%;
  height: 16px;
  position: absolute;
}
.pagination-sticky-bottom[data-v-ff999732] .ssc-pagination {
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
.pagination-sticky-bottom[data-v-ff999732] .ssc-pagination .total-container {
  flex: 1;
  margin-left: 15px;
  margin-right: 12px;
}
.sp-card-log-list[data-v-ff999732] {
  padding: 16px 24px;
  background: #fff;
  min-height: 100%;
}
.ssc-table-panel .ssc-form-item .ssc-form-item-content textarea[data-v-ff999732],
.pro-filter .ssc-form-item .ssc-form-item-content textarea[data-v-ff999732] {
  border: transparent;
}
.message-red-text[data-v-ff999732] {
  color: #EE4D2D;
  font-weight: 700;
}
`,""]),p.exports=g},LUT5:(p,g,r)=>{var d=r("JPst");g=d(!1),g.push([p.id,`[data-v-0a42f03d] .ssc-table .ssc-table-header .header-cell {
  justify-content: center;
}
ul[data-v-0a42f03d] {
  padding: 0;
  margin: 0;
  list-style: none;
}
.button-base[data-v-0a42f03d] {
  padding: 9px 20px;
  font-size: 14px;
  color: #FFFFFF;
}
.spx-button[data-v-0a42f03d] {
  padding: 9px 20px;
  font-size: 14px;
  color: #FFFFFF;
  border-color: #FFFFFF;
  color: #555555;
}
.spx-button[data-v-0a42f03d]:hover {
  background-color: #FFFFFF;
}
.spx-button-primary[data-v-0a42f03d] {
  padding: 9px 20px;
  font-size: 14px;
  color: #FFFFFF;
  background-color: #EE4D2D;
  border-color: #EE4D2D;
}
.ssc-message[data-v-0a42f03d] {
  top: 20px !important;
}
.sp-card > .actions[data-v-0a42f03d] {
  margin-bottom: 10px;
  display: flex;
  flex-wrap: wrap;
}
.sp-card > .actions .right[data-v-0a42f03d] {
  flex: 1;
  text-align: right;
  height: 40px;
}
table th[data-v-0a42f03d] {
  color: rgba(0, 0, 0, 0.85);
  border-color: #EEEEEE;
  font-size: 14px;
  font-weight: 500;
}
.spx-editor .ssc-tag[data-v-0a42f03d] {
  font-size: 12px;
  margin: 0px;
  padding: 0;
}
.spx-editor .ssc-tag .left-padding-span[data-v-0a42f03d] {
  width: 0;
  margin: 0 0 0 8px;
}
.spx-editor .ssc-tag .right-padding-span[data-v-0a42f03d] {
  width: 0;
  margin: 0 8px 0 0;
}
.spx-editor .tag-editor-span[data-v-0a42f03d] {
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
.spx-editor .tag-editor-span .tag-editor-span-space[data-v-0a42f03d] {
  width: 8px;
  height: 15px;
  display: inline-block;
  line-height: 22px;
}
.ssc-tabs-type-pane-card .ssc-tabs-pane[data-v-0a42f03d] {
  background: #FAFAFA;
}
.check-tree[data-v-0a42f03d] {
  margin-left: 80px;
}
.avatar-uploader-icon[data-v-0a42f03d] {
  font-size: 28px;
  color: #8c939d;
  width: 178px;
  height: 178px;
  line-height: 178px;
  text-align: center;
}
.avatar-uploader-icon-small[data-v-0a42f03d] {
  font-size: 14px !important;
  color: #8c939d;
  width: 56px !important;
  height: 56px !important;
  line-height: 56px !important;
  text-align: center;
}
.avatar-uploader-icon-middle[data-v-0a42f03d] {
  font-size: 14px !important;
  color: #8c939d;
  width: 94px !important;
  height: 94px !important;
  line-height: 94px !important;
  text-align: center;
}
.avatar[data-v-0a42f03d] {
  width: 178px;
  height: 178px;
  display: block;
}
.avatar-small[data-v-0a42f03d] {
  width: 56px;
  height: 56px;
  display: block;
}
.avatar-middle[data-v-0a42f03d] {
  width: 94px;
  height: 94px;
  display: block;
}
.acribus-sp-tabs[data-v-0a42f03d] {
  padding: 16px 16px 0px;
  border-radius: 6px;
  margin-bottom: -30px;
  background-color: #fff;
}
span.red[data-v-0a42f03d] {
  color: #F56C6C;
}
span.green[data-v-0a42f03d] {
  color: #67C23A;
}
.sp-hooks[data-v-0a42f03d] {
  overflow: hidden;
}
.text-link[data-v-0a42f03d] {
  color: #409eff;
  cursor: pointer;
}
.text-warning[data-v-0a42f03d] {
  color: #e80808;
}
.help-text[data-v-0a42f03d] {
  cursor: help;
}
.driver-performance-flag-A[data-v-0a42f03d] {
  color: #55CC77;
}
.driver-performance-flag-B[data-v-0a42f03d] {
  color: #999;
}
.driver-performance-flag-C[data-v-0a42f03d] {
  color: #FF4742;
}
/* [check-in rule] Google map autosuggest result container */
.pac-container[data-v-0a42f03d] {
  z-index: 100000;
}
.action-link[data-v-0a42f03d] {
  color: #2769f0;
  cursor: pointer;
  display: inline-block;
  margin-left: 6px;
}
.action-link[data-v-0a42f03d]:first-child {
  margin-left: 0;
}
.action-link[data-v-0a42f03d]:hover {
  text-decoration: underline;
}
.separate-line[data-v-0a42f03d] {
  height: 0;
  width: 100%;
  border-top: 1px #E9E9E9 solid;
  margin-bottom: 16px;
}
.white-fs-ground[data-v-0a42f03d] {
  padding: 24px;
  background: #fff;
  height: 100%;
}
.white-fs-ground .category-title[data-v-0a42f03d] {
  font-size: 16px;
  font-weight: 500;
  line-height: 16px;
  color: #333;
  margin-top: 56px;
  margin-bottom: 16px;
}
.white-fs-ground .category-title[data-v-0a42f03d]:first-child {
  margin-top: 16px;
}
.white-fs-ground .category-title[data-v-0a42f03d]:before {
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
.page-table-container[data-v-0a42f03d] {
  border: 1px solid #eee;
}
.form-body-center[data-v-0a42f03d] {
  margin: 0 auto;
}
.form-body-left[data-v-0a42f03d] {
  margin: 0;
}
.dialog-footer[data-v-0a42f03d],
.footer-submit[data-v-0a42f03d] {
  margin-top: 32px;
}
.dialog-footer .ssc-button[data-v-0a42f03d],
.footer-submit .ssc-button[data-v-0a42f03d] {
  margin-left: 16px;
}
.dialog-footer .ssc-button[data-v-0a42f03d]:first-child,
.footer-submit .ssc-button[data-v-0a42f03d]:first-child {
  margin-left: 0;
}
.text-center[data-v-0a42f03d] {
  text-align: center;
}
.s-form-textarea .ssc-textarea[data-v-0a42f03d],
.ssc-form-item .ssc-select[data-v-0a42f03d],
.ssc-form-item .ssc-input-size-medium[data-v-0a42f03d] {
  width: 320px;
}
.ssc-steps.is-horizontal[data-v-0a42f03d] {
  width: 60%;
  margin: 23px auto;
}
.action-wrap[data-v-0a42f03d] {
  display: flex;
  margin: 10px 0;
}
.action-wrap .actions[data-v-0a42f03d] {
  flex: 1;
}
.action-wrap .actions .ssc-button[data-v-0a42f03d] {
  margin-right: 16px;
}
.action-wrap .upload-route-log-info[data-v-0a42f03d] {
  align-self: center;
  text-align: right;
  flex: 1;
}
.action-wrap .upload-route-log-info label[data-v-0a42f03d] {
  margin-right: 8px;
}
.upload-log-table[data-v-0a42f03d] {
  margin: 10px 0;
}
.group-route-list-info[data-v-0a42f03d] {
  line-height: 40px;
}
.group-route-list-info label[data-v-0a42f03d] {
  margin-right: 10px;
}
.mass-upload-input-footer[data-v-0a42f03d] {
  margin-top: 32px;
}
.mass-upload-input-footer .ssc-button[data-v-0a42f03d] {
  margin-right: 10px;
}
.add-range-btn[data-v-0a42f03d] {
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
.add-range-btn[data-v-0a42f03d]:hover {
  background: #f6f6f6;
}
.range-wrap[data-v-0a42f03d] {
  padding: 16px;
}
.range-wrap .seq-tag[data-v-0a42f03d] {
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
.range-wrap .icon-del[data-v-0a42f03d] {
  line-height: 32px;
  width: 24px;
  height: 24px;
  cursor: pointer;
  color: #bbb;
}
.range-wrap .icon-del[data-v-0a42f03d]:hover {
  color: #888;
}
.bg-fafafa[data-v-0a42f03d] {
  background: #fafafa;
}
.ssc-step-main-title[data-v-0a42f03d] {
  line-height: 1.5;
}
.ssc-form-item-error-tip[data-v-0a42f03d] {
  white-space: nowrap;
}
.ssc-table-header .ssc-table-header-title[data-v-0a42f03d] {
  height: 100%;
}
.ssc-table-header .ssc-table-header-column-container[data-v-0a42f03d] {
  height: 100%;
}
.ssc-table-body .ssc-table-header-column-container .td-content[data-v-0a42f03d] {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.acribus-text-ellipsis[data-v-0a42f03d] {
  display: inline-block;
  width: 100%;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.station-tree-container .ssc-form-item-content[data-v-0a42f03d] {
  flex-direction: column;
  position: relative;
}
.station-tree-container .ssc-form-item-content .tree[data-v-0a42f03d] {
  min-width: 318px;
  display: block;
  margin-top: 20px;
}
.station-tree-container .ssc-form-item-content .tree.has-search-input[data-v-0a42f03d] {
  padding-top: 40px;
}
.station-tree-container .ssc-form-item-content .tree-input[data-v-0a42f03d] {
  position: absolute;
  left: 3%;
  top: 30px;
  z-index: 1;
  width: 94%;
  margin: 0 auto;
  color: #aeaeae;
}
.ssc-dropdown-menu[data-v-0a42f03d] {
  min-width: 176px;
  max-width: 320px;
  z-index: 2;
}
.ssc-dropdown-menu .active[data-v-0a42f03d] {
  color: #EE4D2D;
  font-weight: 500;
}
.detail-part-title[data-v-0a42f03d] {
  font-size: 18px;
  color: #333333;
  font-weight: 500;
  margin-bottom: 16px;
}
.detail-part-title.additional-info[data-v-0a42f03d] {
  margin-top: 56px;
}
.detail-part-title[data-v-0a42f03d]::before {
  content: '';
  width: 2px;
  height: 10px;
  background: #EE4D2D;
  display: inline-block;
  margin-right: 6px;
}
.page-wrapper[data-v-0a42f03d] {
  height: 100%;
}
.zone-container button:disabled:not(.btn-prev):not(.btn-next).ssc-btn-type-primary[data-v-0a42f03d] {
  color: #FFF !important;
  background: #EE4D2D !important;
  opacity: 0.5;
}
.pagination-left-total[data-v-0a42f03d] {
  display: flex;
  flex: 1;
}
.common-status[data-v-0a42f03d] {
  line-height: 12px;
  font-weight: 500;
  padding: 3px 4px;
  border-radius: 2px;
  display: inline-block;
  white-space: nowrap;
}
.common-status.status-success[data-v-0a42f03d] {
  background: #ECFFF1;
  color: #1CC461;
}
.common-status.status-disabled[data-v-0a42f03d] {
  color: #646B76;
  background: #F5F6F9;
}
.common-status.status-info[data-v-0a42f03d] {
  color: #3274F7;
  background: #F0F7FF;
}
.common-status.status-danger[data-v-0a42f03d] {
  color: #F32345;
  background: #FFF0F0;
}
.common-status.status-warning[data-v-0a42f03d] {
  background: #FFF8DB;
  color: #FFB014;
}
.common-divide[data-v-0a42f03d] {
  height: 8px;
  background: #F5F6F9;
  margin: 0 -24px;
}
.ssc-scan-toast[data-v-0a42f03d] {
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
.ssc-scan-toast.ssc-scan-toast-success[data-v-0a42f03d] {
  animation-duration: 4.4s;
  animation-name: scanSuccessToast-0a42f03d;
  background: #1CC461;
}
.ssc-scan-toast.ssc-scan-toast-fail[data-v-0a42f03d] {
  background: #F32345;
  animation-duration: 8.4s;
  animation-name: scanFailToast-0a42f03d;
}
.ssc-scan-toast.ssc-scan-toast-notice[data-v-0a42f03d] {
  background: #FFA620;
  animation-duration: 6.4s;
  animation-name: scanFailToast-0a42f03d;
}
.ssc-scan-toast .message-panel[data-v-0a42f03d] {
  display: flex;
  width: 100%;
  align-items: center;
}
.ssc-scan-toast .message-panel .icon[data-v-0a42f03d] {
  margin-right: 18px;
  width: 28px;
  height: 28px;
  flex-shrink: 0;
}
.ssc-scan-toast .message-panel .text[data-v-0a42f03d] {
  display: inline-block;
}
@keyframes scanSuccessToast-0a42f03d {
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
@keyframes scanFailToast-0a42f03d {
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
.table-pagination[data-v-0a42f03d] {
  height: 56px;
  border: 1px solid #ECF0F4;
  border-top: 0;
  justify-content: flex-end;
  padding-right: 16px;
}
.journey-type[data-v-0a42f03d] {
  display: flex;
  align-items: center;
}
.journey-type .journey-type-dot[data-v-0a42f03d] {
  width: 6px;
  height: 6px;
  border-radius: 50%;
  display: inline-block;
  margin-right: 8px;
}
.pagination-sticky-bottom[data-v-0a42f03d] {
  background: #fff;
  position: sticky;
  bottom: 16px;
}
.pagination-sticky-bottom[data-v-0a42f03d]:after {
  content: ' ';
  background: #fff;
  width: 100%;
  height: 16px;
  position: absolute;
}
.pagination-sticky-bottom[data-v-0a42f03d] .ssc-pagination {
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
.pagination-sticky-bottom[data-v-0a42f03d] .ssc-pagination .total-container {
  flex: 1;
  margin-left: 15px;
  margin-right: 12px;
}
.sp-card-log-list[data-v-0a42f03d] {
  padding: 16px 24px;
  background: #fff;
  min-height: 100%;
}
.ssc-table-panel .ssc-form-item .ssc-form-item-content textarea[data-v-0a42f03d],
.pro-filter .ssc-form-item .ssc-form-item-content textarea[data-v-0a42f03d] {
  border: transparent;
}
.message-red-text[data-v-0a42f03d] {
  color: #EE4D2D;
  font-weight: 700;
}
`,""]),p.exports=g},ZLjQ:(p,g,r)=>{var d=r("JPst");g=d(!1),g.push([p.id,`.gray-filler-border {
  height: 30px;
  background: #f1f1f1;
}
.order-basic-info .actions {
  float: right;
  font-size: 0;
}
.order-basic-info .actions ::v-deep .ssc-button {
  margin-left: 16px !important;
}
.order-basic-info.edit-mode ::v-deep .ssc-form-item {
  margin-bottom: 24px;
}
.location {
  cursor: pointer;
}
ul {
  padding: 0;
  margin: 0;
  list-style: none;
}
.button-base {
  padding: 9px 20px;
  font-size: 14px;
  color: #FFFFFF;
}
.spx-button {
  padding: 9px 20px;
  font-size: 14px;
  color: #FFFFFF;
  border-color: #FFFFFF;
  color: #555555;
}
.spx-button:hover {
  background-color: #FFFFFF;
}
.spx-button-primary {
  padding: 9px 20px;
  font-size: 14px;
  color: #FFFFFF;
  background-color: #EE4D2D;
  border-color: #EE4D2D;
}
.ssc-message {
  top: 20px !important;
}
.sp-card > .actions {
  margin-bottom: 10px;
  display: flex;
  flex-wrap: wrap;
}
.sp-card > .actions .right {
  flex: 1;
  text-align: right;
  height: 40px;
}
table th {
  color: rgba(0, 0, 0, 0.85);
  border-color: #EEEEEE;
  font-size: 14px;
  font-weight: 500;
}
.spx-editor .ssc-tag {
  font-size: 12px;
  margin: 0px;
  padding: 0;
}
.spx-editor .ssc-tag .left-padding-span {
  width: 0;
  margin: 0 0 0 8px;
}
.spx-editor .ssc-tag .right-padding-span {
  width: 0;
  margin: 0 8px 0 0;
}
.spx-editor .tag-editor-span {
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
.spx-editor .tag-editor-span .tag-editor-span-space {
  width: 8px;
  height: 15px;
  display: inline-block;
  line-height: 22px;
}
.ssc-tabs-type-pane-card .ssc-tabs-pane {
  background: #FAFAFA;
}
.check-tree {
  margin-left: 80px;
}
.avatar-uploader-icon {
  font-size: 28px;
  color: #8c939d;
  width: 178px;
  height: 178px;
  line-height: 178px;
  text-align: center;
}
.avatar-uploader-icon-small {
  font-size: 14px !important;
  color: #8c939d;
  width: 56px !important;
  height: 56px !important;
  line-height: 56px !important;
  text-align: center;
}
.avatar-uploader-icon-middle {
  font-size: 14px !important;
  color: #8c939d;
  width: 94px !important;
  height: 94px !important;
  line-height: 94px !important;
  text-align: center;
}
.avatar {
  width: 178px;
  height: 178px;
  display: block;
}
.avatar-small {
  width: 56px;
  height: 56px;
  display: block;
}
.avatar-middle {
  width: 94px;
  height: 94px;
  display: block;
}
.acribus-sp-tabs {
  padding: 16px 16px 0px;
  border-radius: 6px;
  margin-bottom: -30px;
  background-color: #fff;
}
span.red {
  color: #F56C6C;
}
span.green {
  color: #67C23A;
}
.sp-hooks {
  overflow: hidden;
}
.text-link {
  color: #409eff;
  cursor: pointer;
}
.text-warning {
  color: #e80808;
}
.help-text {
  cursor: help;
}
.driver-performance-flag-A {
  color: #55CC77;
}
.driver-performance-flag-B {
  color: #999;
}
.driver-performance-flag-C {
  color: #FF4742;
}
/* [check-in rule] Google map autosuggest result container */
.pac-container {
  z-index: 100000;
}
.action-link {
  color: #2769f0;
  cursor: pointer;
  display: inline-block;
  margin-left: 6px;
}
.action-link:first-child {
  margin-left: 0;
}
.action-link:hover {
  text-decoration: underline;
}
.separate-line {
  height: 0;
  width: 100%;
  border-top: 1px #E9E9E9 solid;
  margin-bottom: 16px;
}
.white-fs-ground {
  padding: 24px;
  background: #fff;
  height: 100%;
}
.white-fs-ground .category-title {
  font-size: 16px;
  font-weight: 500;
  line-height: 16px;
  color: #333;
  margin-top: 56px;
  margin-bottom: 16px;
}
.white-fs-ground .category-title:first-child {
  margin-top: 16px;
}
.white-fs-ground .category-title:before {
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
.page-table-container {
  border: 1px solid #eee;
}
.form-body-center {
  margin: 0 auto;
}
.form-body-left {
  margin: 0;
}
.dialog-footer,
.footer-submit {
  margin-top: 32px;
}
.dialog-footer .ssc-button,
.footer-submit .ssc-button {
  margin-left: 16px;
}
.dialog-footer .ssc-button:first-child,
.footer-submit .ssc-button:first-child {
  margin-left: 0;
}
.text-center {
  text-align: center;
}
.s-form-textarea .ssc-textarea,
.ssc-form-item .ssc-select,
.ssc-form-item .ssc-input-size-medium {
  width: 320px;
}
.ssc-steps.is-horizontal {
  width: 60%;
  margin: 23px auto;
}
.action-wrap {
  display: flex;
  margin: 10px 0;
}
.action-wrap .actions {
  flex: 1;
}
.action-wrap .actions .ssc-button {
  margin-right: 16px;
}
.action-wrap .upload-route-log-info {
  align-self: center;
  text-align: right;
  flex: 1;
}
.action-wrap .upload-route-log-info label {
  margin-right: 8px;
}
.upload-log-table {
  margin: 10px 0;
}
.group-route-list-info {
  line-height: 40px;
}
.group-route-list-info label {
  margin-right: 10px;
}
.mass-upload-input-footer {
  margin-top: 32px;
}
.mass-upload-input-footer .ssc-button {
  margin-right: 10px;
}
.add-range-btn {
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
.add-range-btn:hover {
  background: #f6f6f6;
}
.range-wrap {
  padding: 16px;
}
.range-wrap .seq-tag {
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
.range-wrap .icon-del {
  line-height: 32px;
  width: 24px;
  height: 24px;
  cursor: pointer;
  color: #bbb;
}
.range-wrap .icon-del:hover {
  color: #888;
}
.bg-fafafa {
  background: #fafafa;
}
.ssc-step-main-title {
  line-height: 1.5;
}
.ssc-form-item-error-tip {
  white-space: nowrap;
}
.ssc-table-header .ssc-table-header-title {
  height: 100%;
}
.ssc-table-header .ssc-table-header-column-container {
  height: 100%;
}
.ssc-table-body .ssc-table-header-column-container .td-content {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.acribus-text-ellipsis {
  display: inline-block;
  width: 100%;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.station-tree-container .ssc-form-item-content {
  flex-direction: column;
  position: relative;
}
.station-tree-container .ssc-form-item-content .tree {
  min-width: 318px;
  display: block;
  margin-top: 20px;
}
.station-tree-container .ssc-form-item-content .tree.has-search-input {
  padding-top: 40px;
}
.station-tree-container .ssc-form-item-content .tree-input {
  position: absolute;
  left: 3%;
  top: 30px;
  z-index: 1;
  width: 94%;
  margin: 0 auto;
  color: #aeaeae;
}
.ssc-dropdown-menu {
  min-width: 176px;
  max-width: 320px;
  z-index: 2;
}
.ssc-dropdown-menu .active {
  color: #EE4D2D;
  font-weight: 500;
}
.detail-part-title {
  font-size: 18px;
  color: #333333;
  font-weight: 500;
  margin-bottom: 16px;
}
.detail-part-title.additional-info {
  margin-top: 56px;
}
.detail-part-title::before {
  content: '';
  width: 2px;
  height: 10px;
  background: #EE4D2D;
  display: inline-block;
  margin-right: 6px;
}
.page-wrapper {
  height: 100%;
}
.zone-container button:disabled:not(.btn-prev):not(.btn-next).ssc-btn-type-primary {
  color: #FFF !important;
  background: #EE4D2D !important;
  opacity: 0.5;
}
.pagination-left-total {
  display: flex;
  flex: 1;
}
.common-status {
  line-height: 12px;
  font-weight: 500;
  padding: 3px 4px;
  border-radius: 2px;
  display: inline-block;
  white-space: nowrap;
}
.common-status.status-success {
  background: #ECFFF1;
  color: #1CC461;
}
.common-status.status-disabled {
  color: #646B76;
  background: #F5F6F9;
}
.common-status.status-info {
  color: #3274F7;
  background: #F0F7FF;
}
.common-status.status-danger {
  color: #F32345;
  background: #FFF0F0;
}
.common-status.status-warning {
  background: #FFF8DB;
  color: #FFB014;
}
.common-divide {
  height: 8px;
  background: #F5F6F9;
  margin: 0 -24px;
}
.ssc-scan-toast {
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
.ssc-scan-toast.ssc-scan-toast-success {
  animation-duration: 4.4s;
  animation-name: scanSuccessToast;
  background: #1CC461;
}
.ssc-scan-toast.ssc-scan-toast-fail {
  background: #F32345;
  animation-duration: 8.4s;
  animation-name: scanFailToast;
}
.ssc-scan-toast.ssc-scan-toast-notice {
  background: #FFA620;
  animation-duration: 6.4s;
  animation-name: scanFailToast;
}
.ssc-scan-toast .message-panel {
  display: flex;
  width: 100%;
  align-items: center;
}
.ssc-scan-toast .message-panel .icon {
  margin-right: 18px;
  width: 28px;
  height: 28px;
  flex-shrink: 0;
}
.ssc-scan-toast .message-panel .text {
  display: inline-block;
}
@keyframes scanSuccessToast {
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
@keyframes scanFailToast {
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
.table-pagination {
  height: 56px;
  border: 1px solid #ECF0F4;
  border-top: 0;
  justify-content: flex-end;
  padding-right: 16px;
}
.journey-type {
  display: flex;
  align-items: center;
}
.journey-type .journey-type-dot {
  width: 6px;
  height: 6px;
  border-radius: 50%;
  display: inline-block;
  margin-right: 8px;
}
.pagination-sticky-bottom {
  background: #fff;
  position: sticky;
  bottom: 16px;
}
.pagination-sticky-bottom:after {
  content: ' ';
  background: #fff;
  width: 100%;
  height: 16px;
  position: absolute;
}
.pagination-sticky-bottom ::v-deep .ssc-pagination {
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
.pagination-sticky-bottom ::v-deep .ssc-pagination .total-container {
  flex: 1;
  margin-left: 15px;
  margin-right: 12px;
}
.sp-card-log-list {
  padding: 16px 24px;
  background: #fff;
  min-height: 100%;
}
.ssc-table-panel .ssc-form-item .ssc-form-item-content textarea,
.pro-filter .ssc-form-item .ssc-form-item-content textarea {
  border: transparent;
}
.message-red-text {
  color: #EE4D2D;
  font-weight: 700;
}
`,""]),p.exports=g},qO4N:(p,g,r)=>{var d=r("JPst");g=d(!1),g.push([p.id,`.order-detail-wrapper {
  background: #ffffff;
  padding: 16px 24px;
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
}
.order-detail-wrapper .text-button {
  color: #2769f0;
  padding: 0 4px;
  cursor: pointer;
}
.order-detail-wrapper .form-actions {
  margin-top: 24px;
}
.order-detail-wrapper .form-actions .ssc-button {
  margin-right: 16px;
}
.order-detail-wrapper .contact-container {
  padding: 16px 24px 32px;
}
.order-detail-wrapper .order-info {
  flex-grow: 100;
  max-width: calc(100% - 390px);
}
.order-detail-wrapper .order-info .remark {
  display: inline-block;
  color: #999999;
  margin-bottom: 16px;
}
.order-detail-wrapper .order-history {
  min-width: 376px;
  max-width: 420px;
  margin-left: 16px;
  border: 1px solid #E5E5E5;
  border-radius: 4px 4px 0 0;
}
.order-detail-wrapper .order-history .order-history-header {
  display: flex;
  padding: 16px 16px 0 16px;
  justify-content: space-between;
}
.order-detail-wrapper .order-history .order-history-header .sub-order-title {
  display: block;
  font-size: 14px;
  color: rgba(0, 0, 0, 0.45);
  letter-spacing: 0;
  line-height: 16px;
  margin-bottom: 8px;
}
.order-detail-wrapper .order-history .order-history-header .order-title {
  display: block;
  font-size: 20px;
  color: #333333;
  line-height: 24px;
  font-weight: 500;
}
.order-detail-wrapper .order-history .order-history-header .order-status-box {
  min-width: 100px;
}
.order-detail-wrapper .order-history .order-history-header .order-status-box .order-status-title {
  display: block;
  font-size: 14px;
  color: rgba(0, 0, 0, 0.45);
  letter-spacing: 0;
  line-height: 16px;
  margin-bottom: 8px;
}
.order-detail-wrapper .order-history .order-history-title {
  position: relative;
  line-height: 36px;
  font-size: 16px;
  background-color: #fff5f0;
  color: #ee4d2d;
  padding: 0 12px;
  margin: 32px 16px;
  border-radius: 4px;
}
.order-detail-wrapper .order-history .order-history-title:before {
  content: "";
  position: absolute;
  left: 0;
  top: 12px;
  width: 4px;
  height: 12px;
  background-color: #ee4d2d;
}
.order-detail-wrapper .order-history .history-inner {
  margin: 16px 0 32px;
}
.order-detail-wrapper .order-history .history-inner .timeline-wrapper .timeline.timeline-child .history-date {
  font-size: 14px;
}
.order-detail-wrapper .order-history .history-inner .timeline-wrapper .timeline.hide {
  display: none;
}
.order-detail-wrapper .order-history .history-inner .timeline-wrapper .timeline .timeline-item {
  display: flex;
  position: relative;
  padding: 0 16px;
  min-height: 55px;
}
.order-detail-wrapper .order-history .history-inner .timeline-wrapper .timeline .timeline-item .history-date {
  max-width: 88px;
  min-width: 86px;
  padding-right: 12px;
  text-align: right;
  line-height: 16px;
}
.order-detail-wrapper .order-history .history-inner .timeline-wrapper .timeline .timeline-item .history-date .time {
  font-size: 12px;
  color: #555555;
  font-weight: bold;
}
.order-detail-wrapper .order-history .history-inner .timeline-wrapper .timeline .timeline-item .history-date .date {
  font-size: 10px;
  color: #555555;
}
.order-detail-wrapper .order-history .history-inner .timeline-wrapper .timeline .timeline-item .split-line-wrap {
  width: 16px;
  text-align: center;
  margin-bottom: 4px;
  display: flex;
  align-items: center;
  flex-direction: column;
}
.order-detail-wrapper .order-history .history-inner .timeline-wrapper .timeline .timeline-item .split-line-wrap .split-line-icon-wrap {
  width: 16px;
  max-height: 16px;
}
.order-detail-wrapper .order-history .history-inner .timeline-wrapper .timeline .timeline-item .split-line-wrap .split-line-icon-wrap .svg-icon {
  width: 16px;
  height: 16px;
  color: #fff;
}
.order-detail-wrapper .order-history .history-inner .timeline-wrapper .timeline .timeline-item .split-line-wrap .split-line-icon-wrap .split-line-cycle-icon {
  width: 8px;
  height: 8px;
  margin: 0 auto;
  border-radius: 50%;
  border: 1px solid #B7B7B7;
}
.order-detail-wrapper .order-history .history-inner .timeline-wrapper .timeline .timeline-item .split-line-wrap .split-line {
  height: 100%;
  margin-top: 4px;
  border-right: 1px solid #dedede;
}
.order-detail-wrapper .order-history .history-inner .timeline-wrapper .timeline .timeline-item .history-content {
  margin: 0 0 16px 16px;
  max-width: 258px;
}
.order-detail-wrapper .order-history .history-inner .timeline-wrapper .timeline .timeline-item .history-content .station-name {
  font-size: 14px;
  font-weight: 500;
  color: #555555;
}
.order-detail-wrapper .order-history .history-inner .timeline-wrapper .timeline .timeline-item .history-content .status-tag-icon {
  margin-bottom: 8px;
}
.order-detail-wrapper .order-history .history-inner .timeline-wrapper .timeline .timeline-item .history-content .toggle-btn {
  cursor: pointer;
  width: 20px;
  height: 20px;
}
.order-detail-wrapper .order-history .history-inner .timeline-wrapper .timeline .timeline-item .history-content span.info {
  display: block;
  color: #999999;
  font-size: 12px;
}
.order-detail-wrapper .order-history .history-inner .interception-tag {
  background-color: #FEECE1;
  color: #FF831D;
}
.order-detail-wrapper .order-history .has-sla-tag {
  margin-top: 12px;
}
.order-detail-wrapper .order-history .has-sla-tag .order-history-title {
  margin-top: 16px;
}
.order-detail-wrapper .fail-log-table-container {
  padding: 20px;
}
.order-detail-wrapper .fail-log-table-container .fail-log-table-tooltips-icon {
  width: 19px;
  height: 19px;
  cursor: pointer;
}
.order-detail-wrapper .fail-log-table-container .context-info-container {
  overflow-wrap: break-word;
}
.order-detail-wrapper .fail-log-table-container .col-text {
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 3;
  overflow: hidden;
}
.order-detail-wrapper .buyer-info {
  word-break: break-word;
}
.order-info .order-basic-info {
  padding: 16px 24px 32px;
}
.order-info .order-basic-info .orange_color_text {
  color: #ee4d2d;
}
.order-info .category-title {
  font-size: 16px;
  font-weight: 500;
  line-height: 16px;
  color: #333;
  margin-top: 32px;
  margin-bottom: 16px;
}
.order-info .category-title:first-child {
  margin-top: 0;
}
.order-info .category-title:before {
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
.order-info .ssc-form-item {
  margin-bottom: 16px;
  line-height: 1.5;
}
.order-info .ssc-form-item .ssc-form-item-label {
  font-size: 14px;
  color: #999;
  min-width: 160px;
  padding: 0;
  line-height: 1.5;
  margin-right: 16px;
}
.order-info .ssc-form-item.sub-category-title .ssc-form-item-label {
  font-weight: 500;
  line-height: 16px;
  color: #333333;
  margin-top: 8px;
}
ul {
  padding: 0;
  margin: 0;
  list-style: none;
}
.button-base {
  padding: 9px 20px;
  font-size: 14px;
  color: #FFFFFF;
}
.spx-button {
  padding: 9px 20px;
  font-size: 14px;
  color: #FFFFFF;
  border-color: #FFFFFF;
  color: #555555;
}
.spx-button:hover {
  background-color: #FFFFFF;
}
.spx-button-primary {
  padding: 9px 20px;
  font-size: 14px;
  color: #FFFFFF;
  background-color: #EE4D2D;
  border-color: #EE4D2D;
}
.ssc-message {
  top: 20px !important;
}
.sp-card > .actions {
  margin-bottom: 10px;
  display: flex;
  flex-wrap: wrap;
}
.sp-card > .actions .right {
  flex: 1;
  text-align: right;
  height: 40px;
}
table th {
  color: rgba(0, 0, 0, 0.85);
  border-color: #EEEEEE;
  font-size: 14px;
  font-weight: 500;
}
.spx-editor .ssc-tag {
  font-size: 12px;
  margin: 0px;
  padding: 0;
}
.spx-editor .ssc-tag .left-padding-span {
  width: 0;
  margin: 0 0 0 8px;
}
.spx-editor .ssc-tag .right-padding-span {
  width: 0;
  margin: 0 8px 0 0;
}
.spx-editor .tag-editor-span {
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
.spx-editor .tag-editor-span .tag-editor-span-space {
  width: 8px;
  height: 15px;
  display: inline-block;
  line-height: 22px;
}
.ssc-tabs-type-pane-card .ssc-tabs-pane {
  background: #FAFAFA;
}
.check-tree {
  margin-left: 80px;
}
.avatar-uploader-icon {
  font-size: 28px;
  color: #8c939d;
  width: 178px;
  height: 178px;
  line-height: 178px;
  text-align: center;
}
.avatar-uploader-icon-small {
  font-size: 14px !important;
  color: #8c939d;
  width: 56px !important;
  height: 56px !important;
  line-height: 56px !important;
  text-align: center;
}
.avatar-uploader-icon-middle {
  font-size: 14px !important;
  color: #8c939d;
  width: 94px !important;
  height: 94px !important;
  line-height: 94px !important;
  text-align: center;
}
.avatar {
  width: 178px;
  height: 178px;
  display: block;
}
.avatar-small {
  width: 56px;
  height: 56px;
  display: block;
}
.avatar-middle {
  width: 94px;
  height: 94px;
  display: block;
}
.acribus-sp-tabs {
  padding: 16px 16px 0px;
  border-radius: 6px;
  margin-bottom: -30px;
  background-color: #fff;
}
span.red {
  color: #F56C6C;
}
span.green {
  color: #67C23A;
}
.sp-hooks {
  overflow: hidden;
}
.text-link {
  color: #409eff;
  cursor: pointer;
}
.text-warning {
  color: #e80808;
}
.help-text {
  cursor: help;
}
.driver-performance-flag-A {
  color: #55CC77;
}
.driver-performance-flag-B {
  color: #999;
}
.driver-performance-flag-C {
  color: #FF4742;
}
/* [check-in rule] Google map autosuggest result container */
.pac-container {
  z-index: 100000;
}
.action-link {
  color: #2769f0;
  cursor: pointer;
  display: inline-block;
  margin-left: 6px;
}
.action-link:first-child {
  margin-left: 0;
}
.action-link:hover {
  text-decoration: underline;
}
.separate-line {
  height: 0;
  width: 100%;
  border-top: 1px #E9E9E9 solid;
  margin-bottom: 16px;
}
.white-fs-ground {
  padding: 24px;
  background: #fff;
  height: 100%;
}
.white-fs-ground .category-title {
  font-size: 16px;
  font-weight: 500;
  line-height: 16px;
  color: #333;
  margin-top: 56px;
  margin-bottom: 16px;
}
.white-fs-ground .category-title:first-child {
  margin-top: 16px;
}
.white-fs-ground .category-title:before {
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
.page-table-container {
  border: 1px solid #eee;
}
.form-body-center {
  margin: 0 auto;
}
.form-body-left {
  margin: 0;
}
.dialog-footer,
.footer-submit {
  margin-top: 32px;
}
.dialog-footer .ssc-button,
.footer-submit .ssc-button {
  margin-left: 16px;
}
.dialog-footer .ssc-button:first-child,
.footer-submit .ssc-button:first-child {
  margin-left: 0;
}
.text-center {
  text-align: center;
}
.s-form-textarea .ssc-textarea,
.ssc-form-item .ssc-select,
.ssc-form-item .ssc-input-size-medium {
  width: 320px;
}
.ssc-steps.is-horizontal {
  width: 60%;
  margin: 23px auto;
}
.action-wrap {
  display: flex;
  margin: 10px 0;
}
.action-wrap .actions {
  flex: 1;
}
.action-wrap .actions .ssc-button {
  margin-right: 16px;
}
.action-wrap .upload-route-log-info {
  align-self: center;
  text-align: right;
  flex: 1;
}
.action-wrap .upload-route-log-info label {
  margin-right: 8px;
}
.upload-log-table {
  margin: 10px 0;
}
.group-route-list-info {
  line-height: 40px;
}
.group-route-list-info label {
  margin-right: 10px;
}
.mass-upload-input-footer {
  margin-top: 32px;
}
.mass-upload-input-footer .ssc-button {
  margin-right: 10px;
}
.add-range-btn {
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
.add-range-btn:hover {
  background: #f6f6f6;
}
.range-wrap {
  padding: 16px;
}
.range-wrap .seq-tag {
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
.range-wrap .icon-del {
  line-height: 32px;
  width: 24px;
  height: 24px;
  cursor: pointer;
  color: #bbb;
}
.range-wrap .icon-del:hover {
  color: #888;
}
.bg-fafafa {
  background: #fafafa;
}
.ssc-step-main-title {
  line-height: 1.5;
}
.ssc-form-item-error-tip {
  white-space: nowrap;
}
.ssc-table-header .ssc-table-header-title {
  height: 100%;
}
.ssc-table-header .ssc-table-header-column-container {
  height: 100%;
}
.ssc-table-body .ssc-table-header-column-container .td-content {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.acribus-text-ellipsis {
  display: inline-block;
  width: 100%;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.station-tree-container .ssc-form-item-content {
  flex-direction: column;
  position: relative;
}
.station-tree-container .ssc-form-item-content .tree {
  min-width: 318px;
  display: block;
  margin-top: 20px;
}
.station-tree-container .ssc-form-item-content .tree.has-search-input {
  padding-top: 40px;
}
.station-tree-container .ssc-form-item-content .tree-input {
  position: absolute;
  left: 3%;
  top: 30px;
  z-index: 1;
  width: 94%;
  margin: 0 auto;
  color: #aeaeae;
}
.ssc-dropdown-menu {
  min-width: 176px;
  max-width: 320px;
  z-index: 2;
}
.ssc-dropdown-menu .active {
  color: #EE4D2D;
  font-weight: 500;
}
.detail-part-title {
  font-size: 18px;
  color: #333333;
  font-weight: 500;
  margin-bottom: 16px;
}
.detail-part-title.additional-info {
  margin-top: 56px;
}
.detail-part-title::before {
  content: '';
  width: 2px;
  height: 10px;
  background: #EE4D2D;
  display: inline-block;
  margin-right: 6px;
}
.page-wrapper {
  height: 100%;
}
.zone-container button:disabled:not(.btn-prev):not(.btn-next).ssc-btn-type-primary {
  color: #FFF !important;
  background: #EE4D2D !important;
  opacity: 0.5;
}
.pagination-left-total {
  display: flex;
  flex: 1;
}
.common-status {
  line-height: 12px;
  font-weight: 500;
  padding: 3px 4px;
  border-radius: 2px;
  display: inline-block;
  white-space: nowrap;
}
.common-status.status-success {
  background: #ECFFF1;
  color: #1CC461;
}
.common-status.status-disabled {
  color: #646B76;
  background: #F5F6F9;
}
.common-status.status-info {
  color: #3274F7;
  background: #F0F7FF;
}
.common-status.status-danger {
  color: #F32345;
  background: #FFF0F0;
}
.common-status.status-warning {
  background: #FFF8DB;
  color: #FFB014;
}
.common-divide {
  height: 8px;
  background: #F5F6F9;
  margin: 0 -24px;
}
.ssc-scan-toast {
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
.ssc-scan-toast.ssc-scan-toast-success {
  animation-duration: 4.4s;
  animation-name: scanSuccessToast;
  background: #1CC461;
}
.ssc-scan-toast.ssc-scan-toast-fail {
  background: #F32345;
  animation-duration: 8.4s;
  animation-name: scanFailToast;
}
.ssc-scan-toast.ssc-scan-toast-notice {
  background: #FFA620;
  animation-duration: 6.4s;
  animation-name: scanFailToast;
}
.ssc-scan-toast .message-panel {
  display: flex;
  width: 100%;
  align-items: center;
}
.ssc-scan-toast .message-panel .icon {
  margin-right: 18px;
  width: 28px;
  height: 28px;
  flex-shrink: 0;
}
.ssc-scan-toast .message-panel .text {
  display: inline-block;
}
@keyframes scanSuccessToast {
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
@keyframes scanFailToast {
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
.table-pagination {
  height: 56px;
  border: 1px solid #ECF0F4;
  border-top: 0;
  justify-content: flex-end;
  padding-right: 16px;
}
.journey-type {
  display: flex;
  align-items: center;
}
.journey-type .journey-type-dot {
  width: 6px;
  height: 6px;
  border-radius: 50%;
  display: inline-block;
  margin-right: 8px;
}
.pagination-sticky-bottom {
  background: #fff;
  position: sticky;
  bottom: 16px;
}
.pagination-sticky-bottom:after {
  content: ' ';
  background: #fff;
  width: 100%;
  height: 16px;
  position: absolute;
}
.pagination-sticky-bottom ::v-deep .ssc-pagination {
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
.pagination-sticky-bottom ::v-deep .ssc-pagination .total-container {
  flex: 1;
  margin-left: 15px;
  margin-right: 12px;
}
.sp-card-log-list {
  padding: 16px 24px;
  background: #fff;
  min-height: 100%;
}
.ssc-table-panel .ssc-form-item .ssc-form-item-content textarea,
.pro-filter .ssc-form-item .ssc-form-item-content textarea {
  border: transparent;
}
.message-red-text {
  color: #EE4D2D;
  font-weight: 700;
}
`,""]),p.exports=g},Fn4q:(p,g,r)=>{var d=r("JPst");g=d(!1),g.push([p.id,`.order-detail-sla-tag[data-v-0646ac75] {
  padding: 12px 16px;
  margin: 0 16px;
  background: #FFF0F0;
  border: 1px solid #F32345;
  border-radius: 4px;
}
.order-detail-sla-tag-title[data-v-0646ac75] {
  display: flex;
  align-items: center;
  font-weight: 500;
  font-size: 16px;
  line-height: 18px;
  color: #303844;
}
.order-detail-sla-tag-detail[data-v-0646ac75] {
  margin: 8px 0 0 24px;
  font-size: 14px;
  line-height: 16px;
  color: #7e8692;
}
ul[data-v-0646ac75] {
  padding: 0;
  margin: 0;
  list-style: none;
}
.button-base[data-v-0646ac75] {
  padding: 9px 20px;
  font-size: 14px;
  color: #FFFFFF;
}
.spx-button[data-v-0646ac75] {
  padding: 9px 20px;
  font-size: 14px;
  color: #FFFFFF;
  border-color: #FFFFFF;
  color: #555555;
}
.spx-button[data-v-0646ac75]:hover {
  background-color: #FFFFFF;
}
.spx-button-primary[data-v-0646ac75] {
  padding: 9px 20px;
  font-size: 14px;
  color: #FFFFFF;
  background-color: #EE4D2D;
  border-color: #EE4D2D;
}
.ssc-message[data-v-0646ac75] {
  top: 20px !important;
}
.sp-card > .actions[data-v-0646ac75] {
  margin-bottom: 10px;
  display: flex;
  flex-wrap: wrap;
}
.sp-card > .actions .right[data-v-0646ac75] {
  flex: 1;
  text-align: right;
  height: 40px;
}
table th[data-v-0646ac75] {
  color: rgba(0, 0, 0, 0.85);
  border-color: #EEEEEE;
  font-size: 14px;
  font-weight: 500;
}
.spx-editor .ssc-tag[data-v-0646ac75] {
  font-size: 12px;
  margin: 0px;
  padding: 0;
}
.spx-editor .ssc-tag .left-padding-span[data-v-0646ac75] {
  width: 0;
  margin: 0 0 0 8px;
}
.spx-editor .ssc-tag .right-padding-span[data-v-0646ac75] {
  width: 0;
  margin: 0 8px 0 0;
}
.spx-editor .tag-editor-span[data-v-0646ac75] {
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
.spx-editor .tag-editor-span .tag-editor-span-space[data-v-0646ac75] {
  width: 8px;
  height: 15px;
  display: inline-block;
  line-height: 22px;
}
.ssc-tabs-type-pane-card .ssc-tabs-pane[data-v-0646ac75] {
  background: #FAFAFA;
}
.check-tree[data-v-0646ac75] {
  margin-left: 80px;
}
.avatar-uploader-icon[data-v-0646ac75] {
  font-size: 28px;
  color: #8c939d;
  width: 178px;
  height: 178px;
  line-height: 178px;
  text-align: center;
}
.avatar-uploader-icon-small[data-v-0646ac75] {
  font-size: 14px !important;
  color: #8c939d;
  width: 56px !important;
  height: 56px !important;
  line-height: 56px !important;
  text-align: center;
}
.avatar-uploader-icon-middle[data-v-0646ac75] {
  font-size: 14px !important;
  color: #8c939d;
  width: 94px !important;
  height: 94px !important;
  line-height: 94px !important;
  text-align: center;
}
.avatar[data-v-0646ac75] {
  width: 178px;
  height: 178px;
  display: block;
}
.avatar-small[data-v-0646ac75] {
  width: 56px;
  height: 56px;
  display: block;
}
.avatar-middle[data-v-0646ac75] {
  width: 94px;
  height: 94px;
  display: block;
}
.acribus-sp-tabs[data-v-0646ac75] {
  padding: 16px 16px 0px;
  border-radius: 6px;
  margin-bottom: -30px;
  background-color: #fff;
}
span.red[data-v-0646ac75] {
  color: #F56C6C;
}
span.green[data-v-0646ac75] {
  color: #67C23A;
}
.sp-hooks[data-v-0646ac75] {
  overflow: hidden;
}
.text-link[data-v-0646ac75] {
  color: #409eff;
  cursor: pointer;
}
.text-warning[data-v-0646ac75] {
  color: #e80808;
}
.help-text[data-v-0646ac75] {
  cursor: help;
}
.driver-performance-flag-A[data-v-0646ac75] {
  color: #55CC77;
}
.driver-performance-flag-B[data-v-0646ac75] {
  color: #999;
}
.driver-performance-flag-C[data-v-0646ac75] {
  color: #FF4742;
}
/* [check-in rule] Google map autosuggest result container */
.pac-container[data-v-0646ac75] {
  z-index: 100000;
}
.action-link[data-v-0646ac75] {
  color: #2769f0;
  cursor: pointer;
  display: inline-block;
  margin-left: 6px;
}
.action-link[data-v-0646ac75]:first-child {
  margin-left: 0;
}
.action-link[data-v-0646ac75]:hover {
  text-decoration: underline;
}
.separate-line[data-v-0646ac75] {
  height: 0;
  width: 100%;
  border-top: 1px #E9E9E9 solid;
  margin-bottom: 16px;
}
.white-fs-ground[data-v-0646ac75] {
  padding: 24px;
  background: #fff;
  height: 100%;
}
.white-fs-ground .category-title[data-v-0646ac75] {
  font-size: 16px;
  font-weight: 500;
  line-height: 16px;
  color: #333;
  margin-top: 56px;
  margin-bottom: 16px;
}
.white-fs-ground .category-title[data-v-0646ac75]:first-child {
  margin-top: 16px;
}
.white-fs-ground .category-title[data-v-0646ac75]:before {
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
.page-table-container[data-v-0646ac75] {
  border: 1px solid #eee;
}
.form-body-center[data-v-0646ac75] {
  margin: 0 auto;
}
.form-body-left[data-v-0646ac75] {
  margin: 0;
}
.dialog-footer[data-v-0646ac75],
.footer-submit[data-v-0646ac75] {
  margin-top: 32px;
}
.dialog-footer .ssc-button[data-v-0646ac75],
.footer-submit .ssc-button[data-v-0646ac75] {
  margin-left: 16px;
}
.dialog-footer .ssc-button[data-v-0646ac75]:first-child,
.footer-submit .ssc-button[data-v-0646ac75]:first-child {
  margin-left: 0;
}
.text-center[data-v-0646ac75] {
  text-align: center;
}
.s-form-textarea .ssc-textarea[data-v-0646ac75],
.ssc-form-item .ssc-select[data-v-0646ac75],
.ssc-form-item .ssc-input-size-medium[data-v-0646ac75] {
  width: 320px;
}
.ssc-steps.is-horizontal[data-v-0646ac75] {
  width: 60%;
  margin: 23px auto;
}
.action-wrap[data-v-0646ac75] {
  display: flex;
  margin: 10px 0;
}
.action-wrap .actions[data-v-0646ac75] {
  flex: 1;
}
.action-wrap .actions .ssc-button[data-v-0646ac75] {
  margin-right: 16px;
}
.action-wrap .upload-route-log-info[data-v-0646ac75] {
  align-self: center;
  text-align: right;
  flex: 1;
}
.action-wrap .upload-route-log-info label[data-v-0646ac75] {
  margin-right: 8px;
}
.upload-log-table[data-v-0646ac75] {
  margin: 10px 0;
}
.group-route-list-info[data-v-0646ac75] {
  line-height: 40px;
}
.group-route-list-info label[data-v-0646ac75] {
  margin-right: 10px;
}
.mass-upload-input-footer[data-v-0646ac75] {
  margin-top: 32px;
}
.mass-upload-input-footer .ssc-button[data-v-0646ac75] {
  margin-right: 10px;
}
.add-range-btn[data-v-0646ac75] {
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
.add-range-btn[data-v-0646ac75]:hover {
  background: #f6f6f6;
}
.range-wrap[data-v-0646ac75] {
  padding: 16px;
}
.range-wrap .seq-tag[data-v-0646ac75] {
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
.range-wrap .icon-del[data-v-0646ac75] {
  line-height: 32px;
  width: 24px;
  height: 24px;
  cursor: pointer;
  color: #bbb;
}
.range-wrap .icon-del[data-v-0646ac75]:hover {
  color: #888;
}
.bg-fafafa[data-v-0646ac75] {
  background: #fafafa;
}
.ssc-step-main-title[data-v-0646ac75] {
  line-height: 1.5;
}
.ssc-form-item-error-tip[data-v-0646ac75] {
  white-space: nowrap;
}
.ssc-table-header .ssc-table-header-title[data-v-0646ac75] {
  height: 100%;
}
.ssc-table-header .ssc-table-header-column-container[data-v-0646ac75] {
  height: 100%;
}
.ssc-table-body .ssc-table-header-column-container .td-content[data-v-0646ac75] {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.acribus-text-ellipsis[data-v-0646ac75] {
  display: inline-block;
  width: 100%;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.station-tree-container .ssc-form-item-content[data-v-0646ac75] {
  flex-direction: column;
  position: relative;
}
.station-tree-container .ssc-form-item-content .tree[data-v-0646ac75] {
  min-width: 318px;
  display: block;
  margin-top: 20px;
}
.station-tree-container .ssc-form-item-content .tree.has-search-input[data-v-0646ac75] {
  padding-top: 40px;
}
.station-tree-container .ssc-form-item-content .tree-input[data-v-0646ac75] {
  position: absolute;
  left: 3%;
  top: 30px;
  z-index: 1;
  width: 94%;
  margin: 0 auto;
  color: #aeaeae;
}
.ssc-dropdown-menu[data-v-0646ac75] {
  min-width: 176px;
  max-width: 320px;
  z-index: 2;
}
.ssc-dropdown-menu .active[data-v-0646ac75] {
  color: #EE4D2D;
  font-weight: 500;
}
.detail-part-title[data-v-0646ac75] {
  font-size: 18px;
  color: #333333;
  font-weight: 500;
  margin-bottom: 16px;
}
.detail-part-title.additional-info[data-v-0646ac75] {
  margin-top: 56px;
}
.detail-part-title[data-v-0646ac75]::before {
  content: '';
  width: 2px;
  height: 10px;
  background: #EE4D2D;
  display: inline-block;
  margin-right: 6px;
}
.page-wrapper[data-v-0646ac75] {
  height: 100%;
}
.zone-container button:disabled:not(.btn-prev):not(.btn-next).ssc-btn-type-primary[data-v-0646ac75] {
  color: #FFF !important;
  background: #EE4D2D !important;
  opacity: 0.5;
}
.pagination-left-total[data-v-0646ac75] {
  display: flex;
  flex: 1;
}
.common-status[data-v-0646ac75] {
  line-height: 12px;
  font-weight: 500;
  padding: 3px 4px;
  border-radius: 2px;
  display: inline-block;
  white-space: nowrap;
}
.common-status.status-success[data-v-0646ac75] {
  background: #ECFFF1;
  color: #1CC461;
}
.common-status.status-disabled[data-v-0646ac75] {
  color: #646B76;
  background: #F5F6F9;
}
.common-status.status-info[data-v-0646ac75] {
  color: #3274F7;
  background: #F0F7FF;
}
.common-status.status-danger[data-v-0646ac75] {
  color: #F32345;
  background: #FFF0F0;
}
.common-status.status-warning[data-v-0646ac75] {
  background: #FFF8DB;
  color: #FFB014;
}
.common-divide[data-v-0646ac75] {
  height: 8px;
  background: #F5F6F9;
  margin: 0 -24px;
}
.ssc-scan-toast[data-v-0646ac75] {
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
.ssc-scan-toast.ssc-scan-toast-success[data-v-0646ac75] {
  animation-duration: 4.4s;
  animation-name: scanSuccessToast-0646ac75;
  background: #1CC461;
}
.ssc-scan-toast.ssc-scan-toast-fail[data-v-0646ac75] {
  background: #F32345;
  animation-duration: 8.4s;
  animation-name: scanFailToast-0646ac75;
}
.ssc-scan-toast.ssc-scan-toast-notice[data-v-0646ac75] {
  background: #FFA620;
  animation-duration: 6.4s;
  animation-name: scanFailToast-0646ac75;
}
.ssc-scan-toast .message-panel[data-v-0646ac75] {
  display: flex;
  width: 100%;
  align-items: center;
}
.ssc-scan-toast .message-panel .icon[data-v-0646ac75] {
  margin-right: 18px;
  width: 28px;
  height: 28px;
  flex-shrink: 0;
}
.ssc-scan-toast .message-panel .text[data-v-0646ac75] {
  display: inline-block;
}
@keyframes scanSuccessToast-0646ac75 {
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
@keyframes scanFailToast-0646ac75 {
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
.table-pagination[data-v-0646ac75] {
  height: 56px;
  border: 1px solid #ECF0F4;
  border-top: 0;
  justify-content: flex-end;
  padding-right: 16px;
}
.journey-type[data-v-0646ac75] {
  display: flex;
  align-items: center;
}
.journey-type .journey-type-dot[data-v-0646ac75] {
  width: 6px;
  height: 6px;
  border-radius: 50%;
  display: inline-block;
  margin-right: 8px;
}
.pagination-sticky-bottom[data-v-0646ac75] {
  background: #fff;
  position: sticky;
  bottom: 16px;
}
.pagination-sticky-bottom[data-v-0646ac75]:after {
  content: ' ';
  background: #fff;
  width: 100%;
  height: 16px;
  position: absolute;
}
.pagination-sticky-bottom[data-v-0646ac75] .ssc-pagination {
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
.pagination-sticky-bottom[data-v-0646ac75] .ssc-pagination .total-container {
  flex: 1;
  margin-left: 15px;
  margin-right: 12px;
}
.sp-card-log-list[data-v-0646ac75] {
  padding: 16px 24px;
  background: #fff;
  min-height: 100%;
}
.ssc-table-panel .ssc-form-item .ssc-form-item-content textarea[data-v-0646ac75],
.pro-filter .ssc-form-item .ssc-form-item-content textarea[data-v-0646ac75] {
  border: transparent;
}
.message-red-text[data-v-0646ac75] {
  color: #EE4D2D;
  font-weight: 700;
}
`,""]),p.exports=g},V9IP:(p,g,r)=>{var d=r("JPst");g=d(!1),g.push([p.id,`.order-detail-sla-tag[data-v-246ac0ac] {
  padding: 12px 16px;
  margin: 0 16px;
  background: #fff8db;
  border: 1px solid #ffb014;
  border-radius: 4px;
}
.order-detail-sla-tag-title[data-v-246ac0ac] {
  display: flex;
  align-items: center;
  font-weight: 500;
  font-size: 16px;
  line-height: 18px;
  color: #303844;
}
.order-detail-sla-tag-detail[data-v-246ac0ac] {
  margin: 8px 0 0 24px;
  font-size: 14px;
  line-height: 16px;
  color: #7e8692;
}
ul[data-v-246ac0ac] {
  padding: 0;
  margin: 0;
  list-style: none;
}
.button-base[data-v-246ac0ac] {
  padding: 9px 20px;
  font-size: 14px;
  color: #FFFFFF;
}
.spx-button[data-v-246ac0ac] {
  padding: 9px 20px;
  font-size: 14px;
  color: #FFFFFF;
  border-color: #FFFFFF;
  color: #555555;
}
.spx-button[data-v-246ac0ac]:hover {
  background-color: #FFFFFF;
}
.spx-button-primary[data-v-246ac0ac] {
  padding: 9px 20px;
  font-size: 14px;
  color: #FFFFFF;
  background-color: #EE4D2D;
  border-color: #EE4D2D;
}
.ssc-message[data-v-246ac0ac] {
  top: 20px !important;
}
.sp-card > .actions[data-v-246ac0ac] {
  margin-bottom: 10px;
  display: flex;
  flex-wrap: wrap;
}
.sp-card > .actions .right[data-v-246ac0ac] {
  flex: 1;
  text-align: right;
  height: 40px;
}
table th[data-v-246ac0ac] {
  color: rgba(0, 0, 0, 0.85);
  border-color: #EEEEEE;
  font-size: 14px;
  font-weight: 500;
}
.spx-editor .ssc-tag[data-v-246ac0ac] {
  font-size: 12px;
  margin: 0px;
  padding: 0;
}
.spx-editor .ssc-tag .left-padding-span[data-v-246ac0ac] {
  width: 0;
  margin: 0 0 0 8px;
}
.spx-editor .ssc-tag .right-padding-span[data-v-246ac0ac] {
  width: 0;
  margin: 0 8px 0 0;
}
.spx-editor .tag-editor-span[data-v-246ac0ac] {
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
.spx-editor .tag-editor-span .tag-editor-span-space[data-v-246ac0ac] {
  width: 8px;
  height: 15px;
  display: inline-block;
  line-height: 22px;
}
.ssc-tabs-type-pane-card .ssc-tabs-pane[data-v-246ac0ac] {
  background: #FAFAFA;
}
.check-tree[data-v-246ac0ac] {
  margin-left: 80px;
}
.avatar-uploader-icon[data-v-246ac0ac] {
  font-size: 28px;
  color: #8c939d;
  width: 178px;
  height: 178px;
  line-height: 178px;
  text-align: center;
}
.avatar-uploader-icon-small[data-v-246ac0ac] {
  font-size: 14px !important;
  color: #8c939d;
  width: 56px !important;
  height: 56px !important;
  line-height: 56px !important;
  text-align: center;
}
.avatar-uploader-icon-middle[data-v-246ac0ac] {
  font-size: 14px !important;
  color: #8c939d;
  width: 94px !important;
  height: 94px !important;
  line-height: 94px !important;
  text-align: center;
}
.avatar[data-v-246ac0ac] {
  width: 178px;
  height: 178px;
  display: block;
}
.avatar-small[data-v-246ac0ac] {
  width: 56px;
  height: 56px;
  display: block;
}
.avatar-middle[data-v-246ac0ac] {
  width: 94px;
  height: 94px;
  display: block;
}
.acribus-sp-tabs[data-v-246ac0ac] {
  padding: 16px 16px 0px;
  border-radius: 6px;
  margin-bottom: -30px;
  background-color: #fff;
}
span.red[data-v-246ac0ac] {
  color: #F56C6C;
}
span.green[data-v-246ac0ac] {
  color: #67C23A;
}
.sp-hooks[data-v-246ac0ac] {
  overflow: hidden;
}
.text-link[data-v-246ac0ac] {
  color: #409eff;
  cursor: pointer;
}
.text-warning[data-v-246ac0ac] {
  color: #e80808;
}
.help-text[data-v-246ac0ac] {
  cursor: help;
}
.driver-performance-flag-A[data-v-246ac0ac] {
  color: #55CC77;
}
.driver-performance-flag-B[data-v-246ac0ac] {
  color: #999;
}
.driver-performance-flag-C[data-v-246ac0ac] {
  color: #FF4742;
}
/* [check-in rule] Google map autosuggest result container */
.pac-container[data-v-246ac0ac] {
  z-index: 100000;
}
.action-link[data-v-246ac0ac] {
  color: #2769f0;
  cursor: pointer;
  display: inline-block;
  margin-left: 6px;
}
.action-link[data-v-246ac0ac]:first-child {
  margin-left: 0;
}
.action-link[data-v-246ac0ac]:hover {
  text-decoration: underline;
}
.separate-line[data-v-246ac0ac] {
  height: 0;
  width: 100%;
  border-top: 1px #E9E9E9 solid;
  margin-bottom: 16px;
}
.white-fs-ground[data-v-246ac0ac] {
  padding: 24px;
  background: #fff;
  height: 100%;
}
.white-fs-ground .category-title[data-v-246ac0ac] {
  font-size: 16px;
  font-weight: 500;
  line-height: 16px;
  color: #333;
  margin-top: 56px;
  margin-bottom: 16px;
}
.white-fs-ground .category-title[data-v-246ac0ac]:first-child {
  margin-top: 16px;
}
.white-fs-ground .category-title[data-v-246ac0ac]:before {
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
.page-table-container[data-v-246ac0ac] {
  border: 1px solid #eee;
}
.form-body-center[data-v-246ac0ac] {
  margin: 0 auto;
}
.form-body-left[data-v-246ac0ac] {
  margin: 0;
}
.dialog-footer[data-v-246ac0ac],
.footer-submit[data-v-246ac0ac] {
  margin-top: 32px;
}
.dialog-footer .ssc-button[data-v-246ac0ac],
.footer-submit .ssc-button[data-v-246ac0ac] {
  margin-left: 16px;
}
.dialog-footer .ssc-button[data-v-246ac0ac]:first-child,
.footer-submit .ssc-button[data-v-246ac0ac]:first-child {
  margin-left: 0;
}
.text-center[data-v-246ac0ac] {
  text-align: center;
}
.s-form-textarea .ssc-textarea[data-v-246ac0ac],
.ssc-form-item .ssc-select[data-v-246ac0ac],
.ssc-form-item .ssc-input-size-medium[data-v-246ac0ac] {
  width: 320px;
}
.ssc-steps.is-horizontal[data-v-246ac0ac] {
  width: 60%;
  margin: 23px auto;
}
.action-wrap[data-v-246ac0ac] {
  display: flex;
  margin: 10px 0;
}
.action-wrap .actions[data-v-246ac0ac] {
  flex: 1;
}
.action-wrap .actions .ssc-button[data-v-246ac0ac] {
  margin-right: 16px;
}
.action-wrap .upload-route-log-info[data-v-246ac0ac] {
  align-self: center;
  text-align: right;
  flex: 1;
}
.action-wrap .upload-route-log-info label[data-v-246ac0ac] {
  margin-right: 8px;
}
.upload-log-table[data-v-246ac0ac] {
  margin: 10px 0;
}
.group-route-list-info[data-v-246ac0ac] {
  line-height: 40px;
}
.group-route-list-info label[data-v-246ac0ac] {
  margin-right: 10px;
}
.mass-upload-input-footer[data-v-246ac0ac] {
  margin-top: 32px;
}
.mass-upload-input-footer .ssc-button[data-v-246ac0ac] {
  margin-right: 10px;
}
.add-range-btn[data-v-246ac0ac] {
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
.add-range-btn[data-v-246ac0ac]:hover {
  background: #f6f6f6;
}
.range-wrap[data-v-246ac0ac] {
  padding: 16px;
}
.range-wrap .seq-tag[data-v-246ac0ac] {
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
.range-wrap .icon-del[data-v-246ac0ac] {
  line-height: 32px;
  width: 24px;
  height: 24px;
  cursor: pointer;
  color: #bbb;
}
.range-wrap .icon-del[data-v-246ac0ac]:hover {
  color: #888;
}
.bg-fafafa[data-v-246ac0ac] {
  background: #fafafa;
}
.ssc-step-main-title[data-v-246ac0ac] {
  line-height: 1.5;
}
.ssc-form-item-error-tip[data-v-246ac0ac] {
  white-space: nowrap;
}
.ssc-table-header .ssc-table-header-title[data-v-246ac0ac] {
  height: 100%;
}
.ssc-table-header .ssc-table-header-column-container[data-v-246ac0ac] {
  height: 100%;
}
.ssc-table-body .ssc-table-header-column-container .td-content[data-v-246ac0ac] {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.acribus-text-ellipsis[data-v-246ac0ac] {
  display: inline-block;
  width: 100%;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.station-tree-container .ssc-form-item-content[data-v-246ac0ac] {
  flex-direction: column;
  position: relative;
}
.station-tree-container .ssc-form-item-content .tree[data-v-246ac0ac] {
  min-width: 318px;
  display: block;
  margin-top: 20px;
}
.station-tree-container .ssc-form-item-content .tree.has-search-input[data-v-246ac0ac] {
  padding-top: 40px;
}
.station-tree-container .ssc-form-item-content .tree-input[data-v-246ac0ac] {
  position: absolute;
  left: 3%;
  top: 30px;
  z-index: 1;
  width: 94%;
  margin: 0 auto;
  color: #aeaeae;
}
.ssc-dropdown-menu[data-v-246ac0ac] {
  min-width: 176px;
  max-width: 320px;
  z-index: 2;
}
.ssc-dropdown-menu .active[data-v-246ac0ac] {
  color: #EE4D2D;
  font-weight: 500;
}
.detail-part-title[data-v-246ac0ac] {
  font-size: 18px;
  color: #333333;
  font-weight: 500;
  margin-bottom: 16px;
}
.detail-part-title.additional-info[data-v-246ac0ac] {
  margin-top: 56px;
}
.detail-part-title[data-v-246ac0ac]::before {
  content: '';
  width: 2px;
  height: 10px;
  background: #EE4D2D;
  display: inline-block;
  margin-right: 6px;
}
.page-wrapper[data-v-246ac0ac] {
  height: 100%;
}
.zone-container button:disabled:not(.btn-prev):not(.btn-next).ssc-btn-type-primary[data-v-246ac0ac] {
  color: #FFF !important;
  background: #EE4D2D !important;
  opacity: 0.5;
}
.pagination-left-total[data-v-246ac0ac] {
  display: flex;
  flex: 1;
}
.common-status[data-v-246ac0ac] {
  line-height: 12px;
  font-weight: 500;
  padding: 3px 4px;
  border-radius: 2px;
  display: inline-block;
  white-space: nowrap;
}
.common-status.status-success[data-v-246ac0ac] {
  background: #ECFFF1;
  color: #1CC461;
}
.common-status.status-disabled[data-v-246ac0ac] {
  color: #646B76;
  background: #F5F6F9;
}
.common-status.status-info[data-v-246ac0ac] {
  color: #3274F7;
  background: #F0F7FF;
}
.common-status.status-danger[data-v-246ac0ac] {
  color: #F32345;
  background: #FFF0F0;
}
.common-status.status-warning[data-v-246ac0ac] {
  background: #FFF8DB;
  color: #FFB014;
}
.common-divide[data-v-246ac0ac] {
  height: 8px;
  background: #F5F6F9;
  margin: 0 -24px;
}
.ssc-scan-toast[data-v-246ac0ac] {
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
.ssc-scan-toast.ssc-scan-toast-success[data-v-246ac0ac] {
  animation-duration: 4.4s;
  animation-name: scanSuccessToast-246ac0ac;
  background: #1CC461;
}
.ssc-scan-toast.ssc-scan-toast-fail[data-v-246ac0ac] {
  background: #F32345;
  animation-duration: 8.4s;
  animation-name: scanFailToast-246ac0ac;
}
.ssc-scan-toast.ssc-scan-toast-notice[data-v-246ac0ac] {
  background: #FFA620;
  animation-duration: 6.4s;
  animation-name: scanFailToast-246ac0ac;
}
.ssc-scan-toast .message-panel[data-v-246ac0ac] {
  display: flex;
  width: 100%;
  align-items: center;
}
.ssc-scan-toast .message-panel .icon[data-v-246ac0ac] {
  margin-right: 18px;
  width: 28px;
  height: 28px;
  flex-shrink: 0;
}
.ssc-scan-toast .message-panel .text[data-v-246ac0ac] {
  display: inline-block;
}
@keyframes scanSuccessToast-246ac0ac {
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
@keyframes scanFailToast-246ac0ac {
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
.table-pagination[data-v-246ac0ac] {
  height: 56px;
  border: 1px solid #ECF0F4;
  border-top: 0;
  justify-content: flex-end;
  padding-right: 16px;
}
.journey-type[data-v-246ac0ac] {
  display: flex;
  align-items: center;
}
.journey-type .journey-type-dot[data-v-246ac0ac] {
  width: 6px;
  height: 6px;
  border-radius: 50%;
  display: inline-block;
  margin-right: 8px;
}
.pagination-sticky-bottom[data-v-246ac0ac] {
  background: #fff;
  position: sticky;
  bottom: 16px;
}
.pagination-sticky-bottom[data-v-246ac0ac]:after {
  content: ' ';
  background: #fff;
  width: 100%;
  height: 16px;
  position: absolute;
}
.pagination-sticky-bottom[data-v-246ac0ac] .ssc-pagination {
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
.pagination-sticky-bottom[data-v-246ac0ac] .ssc-pagination .total-container {
  flex: 1;
  margin-left: 15px;
  margin-right: 12px;
}
.sp-card-log-list[data-v-246ac0ac] {
  padding: 16px 24px;
  background: #fff;
  min-height: 100%;
}
.ssc-table-panel .ssc-form-item .ssc-form-item-content textarea[data-v-246ac0ac],
.pro-filter .ssc-form-item .ssc-form-item-content textarea[data-v-246ac0ac] {
  border: transparent;
}
.message-red-text[data-v-246ac0ac] {
  color: #EE4D2D;
  font-weight: 700;
}
`,""]),p.exports=g},"+JqL":(p,g,r)=>{var d=r("JPst");g=d(!1),g.push([p.id,`.order-tracking-tag[data-v-35972068] {
  border: 1px solid;
  font-weight: 500;
  padding: 0 4px;
  border-radius: 2px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  font-size: 12px;
  margin: 0 6px 8px 0;
}
ul[data-v-35972068] {
  padding: 0;
  margin: 0;
  list-style: none;
}
.button-base[data-v-35972068] {
  padding: 9px 20px;
  font-size: 14px;
  color: #FFFFFF;
}
.spx-button[data-v-35972068] {
  padding: 9px 20px;
  font-size: 14px;
  color: #FFFFFF;
  border-color: #FFFFFF;
  color: #555555;
}
.spx-button[data-v-35972068]:hover {
  background-color: #FFFFFF;
}
.spx-button-primary[data-v-35972068] {
  padding: 9px 20px;
  font-size: 14px;
  color: #FFFFFF;
  background-color: #EE4D2D;
  border-color: #EE4D2D;
}
.ssc-message[data-v-35972068] {
  top: 20px !important;
}
.sp-card > .actions[data-v-35972068] {
  margin-bottom: 10px;
  display: flex;
  flex-wrap: wrap;
}
.sp-card > .actions .right[data-v-35972068] {
  flex: 1;
  text-align: right;
  height: 40px;
}
table th[data-v-35972068] {
  color: rgba(0, 0, 0, 0.85);
  border-color: #EEEEEE;
  font-size: 14px;
  font-weight: 500;
}
.spx-editor .ssc-tag[data-v-35972068] {
  font-size: 12px;
  margin: 0px;
  padding: 0;
}
.spx-editor .ssc-tag .left-padding-span[data-v-35972068] {
  width: 0;
  margin: 0 0 0 8px;
}
.spx-editor .ssc-tag .right-padding-span[data-v-35972068] {
  width: 0;
  margin: 0 8px 0 0;
}
.spx-editor .tag-editor-span[data-v-35972068] {
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
.spx-editor .tag-editor-span .tag-editor-span-space[data-v-35972068] {
  width: 8px;
  height: 15px;
  display: inline-block;
  line-height: 22px;
}
.ssc-tabs-type-pane-card .ssc-tabs-pane[data-v-35972068] {
  background: #FAFAFA;
}
.check-tree[data-v-35972068] {
  margin-left: 80px;
}
.avatar-uploader-icon[data-v-35972068] {
  font-size: 28px;
  color: #8c939d;
  width: 178px;
  height: 178px;
  line-height: 178px;
  text-align: center;
}
.avatar-uploader-icon-small[data-v-35972068] {
  font-size: 14px !important;
  color: #8c939d;
  width: 56px !important;
  height: 56px !important;
  line-height: 56px !important;
  text-align: center;
}
.avatar-uploader-icon-middle[data-v-35972068] {
  font-size: 14px !important;
  color: #8c939d;
  width: 94px !important;
  height: 94px !important;
  line-height: 94px !important;
  text-align: center;
}
.avatar[data-v-35972068] {
  width: 178px;
  height: 178px;
  display: block;
}
.avatar-small[data-v-35972068] {
  width: 56px;
  height: 56px;
  display: block;
}
.avatar-middle[data-v-35972068] {
  width: 94px;
  height: 94px;
  display: block;
}
.acribus-sp-tabs[data-v-35972068] {
  padding: 16px 16px 0px;
  border-radius: 6px;
  margin-bottom: -30px;
  background-color: #fff;
}
span.red[data-v-35972068] {
  color: #F56C6C;
}
span.green[data-v-35972068] {
  color: #67C23A;
}
.sp-hooks[data-v-35972068] {
  overflow: hidden;
}
.text-link[data-v-35972068] {
  color: #409eff;
  cursor: pointer;
}
.text-warning[data-v-35972068] {
  color: #e80808;
}
.help-text[data-v-35972068] {
  cursor: help;
}
.driver-performance-flag-A[data-v-35972068] {
  color: #55CC77;
}
.driver-performance-flag-B[data-v-35972068] {
  color: #999;
}
.driver-performance-flag-C[data-v-35972068] {
  color: #FF4742;
}
/* [check-in rule] Google map autosuggest result container */
.pac-container[data-v-35972068] {
  z-index: 100000;
}
.action-link[data-v-35972068] {
  color: #2769f0;
  cursor: pointer;
  display: inline-block;
  margin-left: 6px;
}
.action-link[data-v-35972068]:first-child {
  margin-left: 0;
}
.action-link[data-v-35972068]:hover {
  text-decoration: underline;
}
.separate-line[data-v-35972068] {
  height: 0;
  width: 100%;
  border-top: 1px #E9E9E9 solid;
  margin-bottom: 16px;
}
.white-fs-ground[data-v-35972068] {
  padding: 24px;
  background: #fff;
  height: 100%;
}
.white-fs-ground .category-title[data-v-35972068] {
  font-size: 16px;
  font-weight: 500;
  line-height: 16px;
  color: #333;
  margin-top: 56px;
  margin-bottom: 16px;
}
.white-fs-ground .category-title[data-v-35972068]:first-child {
  margin-top: 16px;
}
.white-fs-ground .category-title[data-v-35972068]:before {
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
.page-table-container[data-v-35972068] {
  border: 1px solid #eee;
}
.form-body-center[data-v-35972068] {
  margin: 0 auto;
}
.form-body-left[data-v-35972068] {
  margin: 0;
}
.dialog-footer[data-v-35972068],
.footer-submit[data-v-35972068] {
  margin-top: 32px;
}
.dialog-footer .ssc-button[data-v-35972068],
.footer-submit .ssc-button[data-v-35972068] {
  margin-left: 16px;
}
.dialog-footer .ssc-button[data-v-35972068]:first-child,
.footer-submit .ssc-button[data-v-35972068]:first-child {
  margin-left: 0;
}
.text-center[data-v-35972068] {
  text-align: center;
}
.s-form-textarea .ssc-textarea[data-v-35972068],
.ssc-form-item .ssc-select[data-v-35972068],
.ssc-form-item .ssc-input-size-medium[data-v-35972068] {
  width: 320px;
}
.ssc-steps.is-horizontal[data-v-35972068] {
  width: 60%;
  margin: 23px auto;
}
.action-wrap[data-v-35972068] {
  display: flex;
  margin: 10px 0;
}
.action-wrap .actions[data-v-35972068] {
  flex: 1;
}
.action-wrap .actions .ssc-button[data-v-35972068] {
  margin-right: 16px;
}
.action-wrap .upload-route-log-info[data-v-35972068] {
  align-self: center;
  text-align: right;
  flex: 1;
}
.action-wrap .upload-route-log-info label[data-v-35972068] {
  margin-right: 8px;
}
.upload-log-table[data-v-35972068] {
  margin: 10px 0;
}
.group-route-list-info[data-v-35972068] {
  line-height: 40px;
}
.group-route-list-info label[data-v-35972068] {
  margin-right: 10px;
}
.mass-upload-input-footer[data-v-35972068] {
  margin-top: 32px;
}
.mass-upload-input-footer .ssc-button[data-v-35972068] {
  margin-right: 10px;
}
.add-range-btn[data-v-35972068] {
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
.add-range-btn[data-v-35972068]:hover {
  background: #f6f6f6;
}
.range-wrap[data-v-35972068] {
  padding: 16px;
}
.range-wrap .seq-tag[data-v-35972068] {
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
.range-wrap .icon-del[data-v-35972068] {
  line-height: 32px;
  width: 24px;
  height: 24px;
  cursor: pointer;
  color: #bbb;
}
.range-wrap .icon-del[data-v-35972068]:hover {
  color: #888;
}
.bg-fafafa[data-v-35972068] {
  background: #fafafa;
}
.ssc-step-main-title[data-v-35972068] {
  line-height: 1.5;
}
.ssc-form-item-error-tip[data-v-35972068] {
  white-space: nowrap;
}
.ssc-table-header .ssc-table-header-title[data-v-35972068] {
  height: 100%;
}
.ssc-table-header .ssc-table-header-column-container[data-v-35972068] {
  height: 100%;
}
.ssc-table-body .ssc-table-header-column-container .td-content[data-v-35972068] {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.acribus-text-ellipsis[data-v-35972068] {
  display: inline-block;
  width: 100%;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.station-tree-container .ssc-form-item-content[data-v-35972068] {
  flex-direction: column;
  position: relative;
}
.station-tree-container .ssc-form-item-content .tree[data-v-35972068] {
  min-width: 318px;
  display: block;
  margin-top: 20px;
}
.station-tree-container .ssc-form-item-content .tree.has-search-input[data-v-35972068] {
  padding-top: 40px;
}
.station-tree-container .ssc-form-item-content .tree-input[data-v-35972068] {
  position: absolute;
  left: 3%;
  top: 30px;
  z-index: 1;
  width: 94%;
  margin: 0 auto;
  color: #aeaeae;
}
.ssc-dropdown-menu[data-v-35972068] {
  min-width: 176px;
  max-width: 320px;
  z-index: 2;
}
.ssc-dropdown-menu .active[data-v-35972068] {
  color: #EE4D2D;
  font-weight: 500;
}
.detail-part-title[data-v-35972068] {
  font-size: 18px;
  color: #333333;
  font-weight: 500;
  margin-bottom: 16px;
}
.detail-part-title.additional-info[data-v-35972068] {
  margin-top: 56px;
}
.detail-part-title[data-v-35972068]::before {
  content: '';
  width: 2px;
  height: 10px;
  background: #EE4D2D;
  display: inline-block;
  margin-right: 6px;
}
.page-wrapper[data-v-35972068] {
  height: 100%;
}
.zone-container button:disabled:not(.btn-prev):not(.btn-next).ssc-btn-type-primary[data-v-35972068] {
  color: #FFF !important;
  background: #EE4D2D !important;
  opacity: 0.5;
}
.pagination-left-total[data-v-35972068] {
  display: flex;
  flex: 1;
}
.common-status[data-v-35972068] {
  line-height: 12px;
  font-weight: 500;
  padding: 3px 4px;
  border-radius: 2px;
  display: inline-block;
  white-space: nowrap;
}
.common-status.status-success[data-v-35972068] {
  background: #ECFFF1;
  color: #1CC461;
}
.common-status.status-disabled[data-v-35972068] {
  color: #646B76;
  background: #F5F6F9;
}
.common-status.status-info[data-v-35972068] {
  color: #3274F7;
  background: #F0F7FF;
}
.common-status.status-danger[data-v-35972068] {
  color: #F32345;
  background: #FFF0F0;
}
.common-status.status-warning[data-v-35972068] {
  background: #FFF8DB;
  color: #FFB014;
}
.common-divide[data-v-35972068] {
  height: 8px;
  background: #F5F6F9;
  margin: 0 -24px;
}
.ssc-scan-toast[data-v-35972068] {
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
.ssc-scan-toast.ssc-scan-toast-success[data-v-35972068] {
  animation-duration: 4.4s;
  animation-name: scanSuccessToast-35972068;
  background: #1CC461;
}
.ssc-scan-toast.ssc-scan-toast-fail[data-v-35972068] {
  background: #F32345;
  animation-duration: 8.4s;
  animation-name: scanFailToast-35972068;
}
.ssc-scan-toast.ssc-scan-toast-notice[data-v-35972068] {
  background: #FFA620;
  animation-duration: 6.4s;
  animation-name: scanFailToast-35972068;
}
.ssc-scan-toast .message-panel[data-v-35972068] {
  display: flex;
  width: 100%;
  align-items: center;
}
.ssc-scan-toast .message-panel .icon[data-v-35972068] {
  margin-right: 18px;
  width: 28px;
  height: 28px;
  flex-shrink: 0;
}
.ssc-scan-toast .message-panel .text[data-v-35972068] {
  display: inline-block;
}
@keyframes scanSuccessToast-35972068 {
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
@keyframes scanFailToast-35972068 {
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
.table-pagination[data-v-35972068] {
  height: 56px;
  border: 1px solid #ECF0F4;
  border-top: 0;
  justify-content: flex-end;
  padding-right: 16px;
}
.journey-type[data-v-35972068] {
  display: flex;
  align-items: center;
}
.journey-type .journey-type-dot[data-v-35972068] {
  width: 6px;
  height: 6px;
  border-radius: 50%;
  display: inline-block;
  margin-right: 8px;
}
.pagination-sticky-bottom[data-v-35972068] {
  background: #fff;
  position: sticky;
  bottom: 16px;
}
.pagination-sticky-bottom[data-v-35972068]:after {
  content: ' ';
  background: #fff;
  width: 100%;
  height: 16px;
  position: absolute;
}
.pagination-sticky-bottom[data-v-35972068] .ssc-pagination {
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
.pagination-sticky-bottom[data-v-35972068] .ssc-pagination .total-container {
  flex: 1;
  margin-left: 15px;
  margin-right: 12px;
}
.sp-card-log-list[data-v-35972068] {
  padding: 16px 24px;
  background: #fff;
  min-height: 100%;
}
.ssc-table-panel .ssc-form-item .ssc-form-item-content textarea[data-v-35972068],
.pro-filter .ssc-form-item .ssc-form-item-content textarea[data-v-35972068] {
  border: transparent;
}
.message-red-text[data-v-35972068] {
  color: #EE4D2D;
  font-weight: 700;
}
`,""]),p.exports=g},kFSH:(p,g,r)=>{var d=r("JPst");g=d(!1),g.push([p.id,`.status-tag-icon[data-v-35972068] {
  max-width: 100%;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
}
ul[data-v-35972068] {
  padding: 0;
  margin: 0;
  list-style: none;
}
.button-base[data-v-35972068] {
  padding: 9px 20px;
  font-size: 14px;
  color: #FFFFFF;
}
.spx-button[data-v-35972068] {
  padding: 9px 20px;
  font-size: 14px;
  color: #FFFFFF;
  border-color: #FFFFFF;
  color: #555555;
}
.spx-button[data-v-35972068]:hover {
  background-color: #FFFFFF;
}
.spx-button-primary[data-v-35972068] {
  padding: 9px 20px;
  font-size: 14px;
  color: #FFFFFF;
  background-color: #EE4D2D;
  border-color: #EE4D2D;
}
.ssc-message[data-v-35972068] {
  top: 20px !important;
}
.sp-card > .actions[data-v-35972068] {
  margin-bottom: 10px;
  display: flex;
  flex-wrap: wrap;
}
.sp-card > .actions .right[data-v-35972068] {
  flex: 1;
  text-align: right;
  height: 40px;
}
table th[data-v-35972068] {
  color: rgba(0, 0, 0, 0.85);
  border-color: #EEEEEE;
  font-size: 14px;
  font-weight: 500;
}
.spx-editor .ssc-tag[data-v-35972068] {
  font-size: 12px;
  margin: 0px;
  padding: 0;
}
.spx-editor .ssc-tag .left-padding-span[data-v-35972068] {
  width: 0;
  margin: 0 0 0 8px;
}
.spx-editor .ssc-tag .right-padding-span[data-v-35972068] {
  width: 0;
  margin: 0 8px 0 0;
}
.spx-editor .tag-editor-span[data-v-35972068] {
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
.spx-editor .tag-editor-span .tag-editor-span-space[data-v-35972068] {
  width: 8px;
  height: 15px;
  display: inline-block;
  line-height: 22px;
}
.ssc-tabs-type-pane-card .ssc-tabs-pane[data-v-35972068] {
  background: #FAFAFA;
}
.check-tree[data-v-35972068] {
  margin-left: 80px;
}
.avatar-uploader-icon[data-v-35972068] {
  font-size: 28px;
  color: #8c939d;
  width: 178px;
  height: 178px;
  line-height: 178px;
  text-align: center;
}
.avatar-uploader-icon-small[data-v-35972068] {
  font-size: 14px !important;
  color: #8c939d;
  width: 56px !important;
  height: 56px !important;
  line-height: 56px !important;
  text-align: center;
}
.avatar-uploader-icon-middle[data-v-35972068] {
  font-size: 14px !important;
  color: #8c939d;
  width: 94px !important;
  height: 94px !important;
  line-height: 94px !important;
  text-align: center;
}
.avatar[data-v-35972068] {
  width: 178px;
  height: 178px;
  display: block;
}
.avatar-small[data-v-35972068] {
  width: 56px;
  height: 56px;
  display: block;
}
.avatar-middle[data-v-35972068] {
  width: 94px;
  height: 94px;
  display: block;
}
.acribus-sp-tabs[data-v-35972068] {
  padding: 16px 16px 0px;
  border-radius: 6px;
  margin-bottom: -30px;
  background-color: #fff;
}
span.red[data-v-35972068] {
  color: #F56C6C;
}
span.green[data-v-35972068] {
  color: #67C23A;
}
.sp-hooks[data-v-35972068] {
  overflow: hidden;
}
.text-link[data-v-35972068] {
  color: #409eff;
  cursor: pointer;
}
.text-warning[data-v-35972068] {
  color: #e80808;
}
.help-text[data-v-35972068] {
  cursor: help;
}
.driver-performance-flag-A[data-v-35972068] {
  color: #55CC77;
}
.driver-performance-flag-B[data-v-35972068] {
  color: #999;
}
.driver-performance-flag-C[data-v-35972068] {
  color: #FF4742;
}
/* [check-in rule] Google map autosuggest result container */
.pac-container[data-v-35972068] {
  z-index: 100000;
}
.action-link[data-v-35972068] {
  color: #2769f0;
  cursor: pointer;
  display: inline-block;
  margin-left: 6px;
}
.action-link[data-v-35972068]:first-child {
  margin-left: 0;
}
.action-link[data-v-35972068]:hover {
  text-decoration: underline;
}
.separate-line[data-v-35972068] {
  height: 0;
  width: 100%;
  border-top: 1px #E9E9E9 solid;
  margin-bottom: 16px;
}
.white-fs-ground[data-v-35972068] {
  padding: 24px;
  background: #fff;
  height: 100%;
}
.white-fs-ground .category-title[data-v-35972068] {
  font-size: 16px;
  font-weight: 500;
  line-height: 16px;
  color: #333;
  margin-top: 56px;
  margin-bottom: 16px;
}
.white-fs-ground .category-title[data-v-35972068]:first-child {
  margin-top: 16px;
}
.white-fs-ground .category-title[data-v-35972068]:before {
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
.page-table-container[data-v-35972068] {
  border: 1px solid #eee;
}
.form-body-center[data-v-35972068] {
  margin: 0 auto;
}
.form-body-left[data-v-35972068] {
  margin: 0;
}
.dialog-footer[data-v-35972068],
.footer-submit[data-v-35972068] {
  margin-top: 32px;
}
.dialog-footer .ssc-button[data-v-35972068],
.footer-submit .ssc-button[data-v-35972068] {
  margin-left: 16px;
}
.dialog-footer .ssc-button[data-v-35972068]:first-child,
.footer-submit .ssc-button[data-v-35972068]:first-child {
  margin-left: 0;
}
.text-center[data-v-35972068] {
  text-align: center;
}
.s-form-textarea .ssc-textarea[data-v-35972068],
.ssc-form-item .ssc-select[data-v-35972068],
.ssc-form-item .ssc-input-size-medium[data-v-35972068] {
  width: 320px;
}
.ssc-steps.is-horizontal[data-v-35972068] {
  width: 60%;
  margin: 23px auto;
}
.action-wrap[data-v-35972068] {
  display: flex;
  margin: 10px 0;
}
.action-wrap .actions[data-v-35972068] {
  flex: 1;
}
.action-wrap .actions .ssc-button[data-v-35972068] {
  margin-right: 16px;
}
.action-wrap .upload-route-log-info[data-v-35972068] {
  align-self: center;
  text-align: right;
  flex: 1;
}
.action-wrap .upload-route-log-info label[data-v-35972068] {
  margin-right: 8px;
}
.upload-log-table[data-v-35972068] {
  margin: 10px 0;
}
.group-route-list-info[data-v-35972068] {
  line-height: 40px;
}
.group-route-list-info label[data-v-35972068] {
  margin-right: 10px;
}
.mass-upload-input-footer[data-v-35972068] {
  margin-top: 32px;
}
.mass-upload-input-footer .ssc-button[data-v-35972068] {
  margin-right: 10px;
}
.add-range-btn[data-v-35972068] {
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
.add-range-btn[data-v-35972068]:hover {
  background: #f6f6f6;
}
.range-wrap[data-v-35972068] {
  padding: 16px;
}
.range-wrap .seq-tag[data-v-35972068] {
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
.range-wrap .icon-del[data-v-35972068] {
  line-height: 32px;
  width: 24px;
  height: 24px;
  cursor: pointer;
  color: #bbb;
}
.range-wrap .icon-del[data-v-35972068]:hover {
  color: #888;
}
.bg-fafafa[data-v-35972068] {
  background: #fafafa;
}
.ssc-step-main-title[data-v-35972068] {
  line-height: 1.5;
}
.ssc-form-item-error-tip[data-v-35972068] {
  white-space: nowrap;
}
.ssc-table-header .ssc-table-header-title[data-v-35972068] {
  height: 100%;
}
.ssc-table-header .ssc-table-header-column-container[data-v-35972068] {
  height: 100%;
}
.ssc-table-body .ssc-table-header-column-container .td-content[data-v-35972068] {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.acribus-text-ellipsis[data-v-35972068] {
  display: inline-block;
  width: 100%;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.station-tree-container .ssc-form-item-content[data-v-35972068] {
  flex-direction: column;
  position: relative;
}
.station-tree-container .ssc-form-item-content .tree[data-v-35972068] {
  min-width: 318px;
  display: block;
  margin-top: 20px;
}
.station-tree-container .ssc-form-item-content .tree.has-search-input[data-v-35972068] {
  padding-top: 40px;
}
.station-tree-container .ssc-form-item-content .tree-input[data-v-35972068] {
  position: absolute;
  left: 3%;
  top: 30px;
  z-index: 1;
  width: 94%;
  margin: 0 auto;
  color: #aeaeae;
}
.ssc-dropdown-menu[data-v-35972068] {
  min-width: 176px;
  max-width: 320px;
  z-index: 2;
}
.ssc-dropdown-menu .active[data-v-35972068] {
  color: #EE4D2D;
  font-weight: 500;
}
.detail-part-title[data-v-35972068] {
  font-size: 18px;
  color: #333333;
  font-weight: 500;
  margin-bottom: 16px;
}
.detail-part-title.additional-info[data-v-35972068] {
  margin-top: 56px;
}
.detail-part-title[data-v-35972068]::before {
  content: '';
  width: 2px;
  height: 10px;
  background: #EE4D2D;
  display: inline-block;
  margin-right: 6px;
}
.page-wrapper[data-v-35972068] {
  height: 100%;
}
.zone-container button:disabled:not(.btn-prev):not(.btn-next).ssc-btn-type-primary[data-v-35972068] {
  color: #FFF !important;
  background: #EE4D2D !important;
  opacity: 0.5;
}
.pagination-left-total[data-v-35972068] {
  display: flex;
  flex: 1;
}
.common-status[data-v-35972068] {
  line-height: 12px;
  font-weight: 500;
  padding: 3px 4px;
  border-radius: 2px;
  display: inline-block;
  white-space: nowrap;
}
.common-status.status-success[data-v-35972068] {
  background: #ECFFF1;
  color: #1CC461;
}
.common-status.status-disabled[data-v-35972068] {
  color: #646B76;
  background: #F5F6F9;
}
.common-status.status-info[data-v-35972068] {
  color: #3274F7;
  background: #F0F7FF;
}
.common-status.status-danger[data-v-35972068] {
  color: #F32345;
  background: #FFF0F0;
}
.common-status.status-warning[data-v-35972068] {
  background: #FFF8DB;
  color: #FFB014;
}
.common-divide[data-v-35972068] {
  height: 8px;
  background: #F5F6F9;
  margin: 0 -24px;
}
.ssc-scan-toast[data-v-35972068] {
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
.ssc-scan-toast.ssc-scan-toast-success[data-v-35972068] {
  animation-duration: 4.4s;
  animation-name: scanSuccessToast-35972068;
  background: #1CC461;
}
.ssc-scan-toast.ssc-scan-toast-fail[data-v-35972068] {
  background: #F32345;
  animation-duration: 8.4s;
  animation-name: scanFailToast-35972068;
}
.ssc-scan-toast.ssc-scan-toast-notice[data-v-35972068] {
  background: #FFA620;
  animation-duration: 6.4s;
  animation-name: scanFailToast-35972068;
}
.ssc-scan-toast .message-panel[data-v-35972068] {
  display: flex;
  width: 100%;
  align-items: center;
}
.ssc-scan-toast .message-panel .icon[data-v-35972068] {
  margin-right: 18px;
  width: 28px;
  height: 28px;
  flex-shrink: 0;
}
.ssc-scan-toast .message-panel .text[data-v-35972068] {
  display: inline-block;
}
@keyframes scanSuccessToast-35972068 {
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
@keyframes scanFailToast-35972068 {
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
.table-pagination[data-v-35972068] {
  height: 56px;
  border: 1px solid #ECF0F4;
  border-top: 0;
  justify-content: flex-end;
  padding-right: 16px;
}
.journey-type[data-v-35972068] {
  display: flex;
  align-items: center;
}
.journey-type .journey-type-dot[data-v-35972068] {
  width: 6px;
  height: 6px;
  border-radius: 50%;
  display: inline-block;
  margin-right: 8px;
}
.pagination-sticky-bottom[data-v-35972068] {
  background: #fff;
  position: sticky;
  bottom: 16px;
}
.pagination-sticky-bottom[data-v-35972068]:after {
  content: ' ';
  background: #fff;
  width: 100%;
  height: 16px;
  position: absolute;
}
.pagination-sticky-bottom[data-v-35972068] .ssc-pagination {
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
.pagination-sticky-bottom[data-v-35972068] .ssc-pagination .total-container {
  flex: 1;
  margin-left: 15px;
  margin-right: 12px;
}
.sp-card-log-list[data-v-35972068] {
  padding: 16px 24px;
  background: #fff;
  min-height: 100%;
}
.ssc-table-panel .ssc-form-item .ssc-form-item-content textarea[data-v-35972068],
.pro-filter .ssc-form-item .ssc-form-item-content textarea[data-v-35972068] {
  border: transparent;
}
.message-red-text[data-v-35972068] {
  color: #EE4D2D;
  font-weight: 700;
}
`,""]),p.exports=g},cfmi:(p,g,r)=>{var d=r("JPst");g=d(!1),g.push([p.id,`.orderSN-info-header[data-v-2964c334] {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 32px;
  margin-bottom: 16px;
}
.orderSN-info-header .category-title[data-v-2964c334] {
  margin: 0;
}
.label-icon[data-v-2964c334] {
  width: 18px;
  margin-top: -2px;
}
ul[data-v-2964c334] {
  padding: 0;
  margin: 0;
  list-style: none;
}
.button-base[data-v-2964c334] {
  padding: 9px 20px;
  font-size: 14px;
  color: #FFFFFF;
}
.spx-button[data-v-2964c334] {
  padding: 9px 20px;
  font-size: 14px;
  color: #FFFFFF;
  border-color: #FFFFFF;
  color: #555555;
}
.spx-button[data-v-2964c334]:hover {
  background-color: #FFFFFF;
}
.spx-button-primary[data-v-2964c334] {
  padding: 9px 20px;
  font-size: 14px;
  color: #FFFFFF;
  background-color: #EE4D2D;
  border-color: #EE4D2D;
}
.ssc-message[data-v-2964c334] {
  top: 20px !important;
}
.sp-card > .actions[data-v-2964c334] {
  margin-bottom: 10px;
  display: flex;
  flex-wrap: wrap;
}
.sp-card > .actions .right[data-v-2964c334] {
  flex: 1;
  text-align: right;
  height: 40px;
}
table th[data-v-2964c334] {
  color: rgba(0, 0, 0, 0.85);
  border-color: #EEEEEE;
  font-size: 14px;
  font-weight: 500;
}
.spx-editor .ssc-tag[data-v-2964c334] {
  font-size: 12px;
  margin: 0px;
  padding: 0;
}
.spx-editor .ssc-tag .left-padding-span[data-v-2964c334] {
  width: 0;
  margin: 0 0 0 8px;
}
.spx-editor .ssc-tag .right-padding-span[data-v-2964c334] {
  width: 0;
  margin: 0 8px 0 0;
}
.spx-editor .tag-editor-span[data-v-2964c334] {
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
.spx-editor .tag-editor-span .tag-editor-span-space[data-v-2964c334] {
  width: 8px;
  height: 15px;
  display: inline-block;
  line-height: 22px;
}
.ssc-tabs-type-pane-card .ssc-tabs-pane[data-v-2964c334] {
  background: #FAFAFA;
}
.check-tree[data-v-2964c334] {
  margin-left: 80px;
}
.avatar-uploader-icon[data-v-2964c334] {
  font-size: 28px;
  color: #8c939d;
  width: 178px;
  height: 178px;
  line-height: 178px;
  text-align: center;
}
.avatar-uploader-icon-small[data-v-2964c334] {
  font-size: 14px !important;
  color: #8c939d;
  width: 56px !important;
  height: 56px !important;
  line-height: 56px !important;
  text-align: center;
}
.avatar-uploader-icon-middle[data-v-2964c334] {
  font-size: 14px !important;
  color: #8c939d;
  width: 94px !important;
  height: 94px !important;
  line-height: 94px !important;
  text-align: center;
}
.avatar[data-v-2964c334] {
  width: 178px;
  height: 178px;
  display: block;
}
.avatar-small[data-v-2964c334] {
  width: 56px;
  height: 56px;
  display: block;
}
.avatar-middle[data-v-2964c334] {
  width: 94px;
  height: 94px;
  display: block;
}
.acribus-sp-tabs[data-v-2964c334] {
  padding: 16px 16px 0px;
  border-radius: 6px;
  margin-bottom: -30px;
  background-color: #fff;
}
span.red[data-v-2964c334] {
  color: #F56C6C;
}
span.green[data-v-2964c334] {
  color: #67C23A;
}
.sp-hooks[data-v-2964c334] {
  overflow: hidden;
}
.text-link[data-v-2964c334] {
  color: #409eff;
  cursor: pointer;
}
.text-warning[data-v-2964c334] {
  color: #e80808;
}
.help-text[data-v-2964c334] {
  cursor: help;
}
.driver-performance-flag-A[data-v-2964c334] {
  color: #55CC77;
}
.driver-performance-flag-B[data-v-2964c334] {
  color: #999;
}
.driver-performance-flag-C[data-v-2964c334] {
  color: #FF4742;
}
/* [check-in rule] Google map autosuggest result container */
.pac-container[data-v-2964c334] {
  z-index: 100000;
}
.action-link[data-v-2964c334] {
  color: #2769f0;
  cursor: pointer;
  display: inline-block;
  margin-left: 6px;
}
.action-link[data-v-2964c334]:first-child {
  margin-left: 0;
}
.action-link[data-v-2964c334]:hover {
  text-decoration: underline;
}
.separate-line[data-v-2964c334] {
  height: 0;
  width: 100%;
  border-top: 1px #E9E9E9 solid;
  margin-bottom: 16px;
}
.white-fs-ground[data-v-2964c334] {
  padding: 24px;
  background: #fff;
  height: 100%;
}
.white-fs-ground .category-title[data-v-2964c334] {
  font-size: 16px;
  font-weight: 500;
  line-height: 16px;
  color: #333;
  margin-top: 56px;
  margin-bottom: 16px;
}
.white-fs-ground .category-title[data-v-2964c334]:first-child {
  margin-top: 16px;
}
.white-fs-ground .category-title[data-v-2964c334]:before {
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
.page-table-container[data-v-2964c334] {
  border: 1px solid #eee;
}
.form-body-center[data-v-2964c334] {
  margin: 0 auto;
}
.form-body-left[data-v-2964c334] {
  margin: 0;
}
.dialog-footer[data-v-2964c334],
.footer-submit[data-v-2964c334] {
  margin-top: 32px;
}
.dialog-footer .ssc-button[data-v-2964c334],
.footer-submit .ssc-button[data-v-2964c334] {
  margin-left: 16px;
}
.dialog-footer .ssc-button[data-v-2964c334]:first-child,
.footer-submit .ssc-button[data-v-2964c334]:first-child {
  margin-left: 0;
}
.text-center[data-v-2964c334] {
  text-align: center;
}
.s-form-textarea .ssc-textarea[data-v-2964c334],
.ssc-form-item .ssc-select[data-v-2964c334],
.ssc-form-item .ssc-input-size-medium[data-v-2964c334] {
  width: 320px;
}
.ssc-steps.is-horizontal[data-v-2964c334] {
  width: 60%;
  margin: 23px auto;
}
.action-wrap[data-v-2964c334] {
  display: flex;
  margin: 10px 0;
}
.action-wrap .actions[data-v-2964c334] {
  flex: 1;
}
.action-wrap .actions .ssc-button[data-v-2964c334] {
  margin-right: 16px;
}
.action-wrap .upload-route-log-info[data-v-2964c334] {
  align-self: center;
  text-align: right;
  flex: 1;
}
.action-wrap .upload-route-log-info label[data-v-2964c334] {
  margin-right: 8px;
}
.upload-log-table[data-v-2964c334] {
  margin: 10px 0;
}
.group-route-list-info[data-v-2964c334] {
  line-height: 40px;
}
.group-route-list-info label[data-v-2964c334] {
  margin-right: 10px;
}
.mass-upload-input-footer[data-v-2964c334] {
  margin-top: 32px;
}
.mass-upload-input-footer .ssc-button[data-v-2964c334] {
  margin-right: 10px;
}
.add-range-btn[data-v-2964c334] {
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
.add-range-btn[data-v-2964c334]:hover {
  background: #f6f6f6;
}
.range-wrap[data-v-2964c334] {
  padding: 16px;
}
.range-wrap .seq-tag[data-v-2964c334] {
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
.range-wrap .icon-del[data-v-2964c334] {
  line-height: 32px;
  width: 24px;
  height: 24px;
  cursor: pointer;
  color: #bbb;
}
.range-wrap .icon-del[data-v-2964c334]:hover {
  color: #888;
}
.bg-fafafa[data-v-2964c334] {
  background: #fafafa;
}
.ssc-step-main-title[data-v-2964c334] {
  line-height: 1.5;
}
.ssc-form-item-error-tip[data-v-2964c334] {
  white-space: nowrap;
}
.ssc-table-header .ssc-table-header-title[data-v-2964c334] {
  height: 100%;
}
.ssc-table-header .ssc-table-header-column-container[data-v-2964c334] {
  height: 100%;
}
.ssc-table-body .ssc-table-header-column-container .td-content[data-v-2964c334] {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.acribus-text-ellipsis[data-v-2964c334] {
  display: inline-block;
  width: 100%;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.station-tree-container .ssc-form-item-content[data-v-2964c334] {
  flex-direction: column;
  position: relative;
}
.station-tree-container .ssc-form-item-content .tree[data-v-2964c334] {
  min-width: 318px;
  display: block;
  margin-top: 20px;
}
.station-tree-container .ssc-form-item-content .tree.has-search-input[data-v-2964c334] {
  padding-top: 40px;
}
.station-tree-container .ssc-form-item-content .tree-input[data-v-2964c334] {
  position: absolute;
  left: 3%;
  top: 30px;
  z-index: 1;
  width: 94%;
  margin: 0 auto;
  color: #aeaeae;
}
.ssc-dropdown-menu[data-v-2964c334] {
  min-width: 176px;
  max-width: 320px;
  z-index: 2;
}
.ssc-dropdown-menu .active[data-v-2964c334] {
  color: #EE4D2D;
  font-weight: 500;
}
.detail-part-title[data-v-2964c334] {
  font-size: 18px;
  color: #333333;
  font-weight: 500;
  margin-bottom: 16px;
}
.detail-part-title.additional-info[data-v-2964c334] {
  margin-top: 56px;
}
.detail-part-title[data-v-2964c334]::before {
  content: '';
  width: 2px;
  height: 10px;
  background: #EE4D2D;
  display: inline-block;
  margin-right: 6px;
}
.page-wrapper[data-v-2964c334] {
  height: 100%;
}
.zone-container button:disabled:not(.btn-prev):not(.btn-next).ssc-btn-type-primary[data-v-2964c334] {
  color: #FFF !important;
  background: #EE4D2D !important;
  opacity: 0.5;
}
.pagination-left-total[data-v-2964c334] {
  display: flex;
  flex: 1;
}
.common-status[data-v-2964c334] {
  line-height: 12px;
  font-weight: 500;
  padding: 3px 4px;
  border-radius: 2px;
  display: inline-block;
  white-space: nowrap;
}
.common-status.status-success[data-v-2964c334] {
  background: #ECFFF1;
  color: #1CC461;
}
.common-status.status-disabled[data-v-2964c334] {
  color: #646B76;
  background: #F5F6F9;
}
.common-status.status-info[data-v-2964c334] {
  color: #3274F7;
  background: #F0F7FF;
}
.common-status.status-danger[data-v-2964c334] {
  color: #F32345;
  background: #FFF0F0;
}
.common-status.status-warning[data-v-2964c334] {
  background: #FFF8DB;
  color: #FFB014;
}
.common-divide[data-v-2964c334] {
  height: 8px;
  background: #F5F6F9;
  margin: 0 -24px;
}
.ssc-scan-toast[data-v-2964c334] {
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
.ssc-scan-toast.ssc-scan-toast-success[data-v-2964c334] {
  animation-duration: 4.4s;
  animation-name: scanSuccessToast-2964c334;
  background: #1CC461;
}
.ssc-scan-toast.ssc-scan-toast-fail[data-v-2964c334] {
  background: #F32345;
  animation-duration: 8.4s;
  animation-name: scanFailToast-2964c334;
}
.ssc-scan-toast.ssc-scan-toast-notice[data-v-2964c334] {
  background: #FFA620;
  animation-duration: 6.4s;
  animation-name: scanFailToast-2964c334;
}
.ssc-scan-toast .message-panel[data-v-2964c334] {
  display: flex;
  width: 100%;
  align-items: center;
}
.ssc-scan-toast .message-panel .icon[data-v-2964c334] {
  margin-right: 18px;
  width: 28px;
  height: 28px;
  flex-shrink: 0;
}
.ssc-scan-toast .message-panel .text[data-v-2964c334] {
  display: inline-block;
}
@keyframes scanSuccessToast-2964c334 {
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
@keyframes scanFailToast-2964c334 {
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
.table-pagination[data-v-2964c334] {
  height: 56px;
  border: 1px solid #ECF0F4;
  border-top: 0;
  justify-content: flex-end;
  padding-right: 16px;
}
.journey-type[data-v-2964c334] {
  display: flex;
  align-items: center;
}
.journey-type .journey-type-dot[data-v-2964c334] {
  width: 6px;
  height: 6px;
  border-radius: 50%;
  display: inline-block;
  margin-right: 8px;
}
.pagination-sticky-bottom[data-v-2964c334] {
  background: #fff;
  position: sticky;
  bottom: 16px;
}
.pagination-sticky-bottom[data-v-2964c334]:after {
  content: ' ';
  background: #fff;
  width: 100%;
  height: 16px;
  position: absolute;
}
.pagination-sticky-bottom[data-v-2964c334] .ssc-pagination {
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
.pagination-sticky-bottom[data-v-2964c334] .ssc-pagination .total-container {
  flex: 1;
  margin-left: 15px;
  margin-right: 12px;
}
.sp-card-log-list[data-v-2964c334] {
  padding: 16px 24px;
  background: #fff;
  min-height: 100%;
}
.ssc-table-panel .ssc-form-item .ssc-form-item-content textarea[data-v-2964c334],
.pro-filter .ssc-form-item .ssc-form-item-content textarea[data-v-2964c334] {
  border: transparent;
}
.message-red-text[data-v-2964c334] {
  color: #EE4D2D;
  font-weight: 700;
}
`,""]),p.exports=g},FREN:(p,g,r)=>{var d=r("JPst");g=d(!1),g.push([p.id,`.table[data-v-23bc3ad4] {
  text-align: left;
  width: 80%;
  margin: 0 auto;
  padding: 20px 0;
}
.table tr[data-v-23bc3ad4] {
  height: 32px;
}
.table tr td[data-v-23bc3ad4] {
  margin-right: 12px;
}
.table tr td label[data-v-23bc3ad4] {
  font-size: 16px;
  color: #333333;
  margin-right: 4px;
}
.pickup-history-wrap[data-v-23bc3ad4] {
  text-align: left;
  width: 80%;
  margin: 0 auto;
  padding-top: 20px;
}
.pickup-history-wrap .pickup-history-list[data-v-23bc3ad4] {
  list-style: none;
}
.pickup-history-wrap .pickup-history-list li[data-v-23bc3ad4] {
  line-height: 40px;
  display: flex;
}
.pickup-history-wrap .pickup-history-list li div[data-v-23bc3ad4] {
  padding-left: 8px;
  flex: 1;
}
.faked-location[data-v-23bc3ad4] {
  color: #EE4D2D;
  background: #FFF5F0;
  display: inline-block;
  padding: 4px;
  margin-left: 8px;
  border-radius: 2px;
}
.category-wrapper[data-v-23bc3ad4] {
  margin-top: 16px;
}
.order-basic-info-item + .order-basic-info-item[data-v-23bc3ad4] {
  margin-top: 32px;
}
.order-basic-info-form[data-v-23bc3ad4] {
  background-color: initial;
}
.sub-category-title[data-v-23bc3ad4] {
  font-weight: 500;
  font-size: 14px;
  line-height: 18px;
  color: #333;
  margin: 24px 0 16px 8.5px;
}
.tooltip .help-icon[data-v-23bc3ad4] {
  width: 18px;
  height: 18px;
}
ul[data-v-23bc3ad4] {
  padding: 0;
  margin: 0;
  list-style: none;
}
.button-base[data-v-23bc3ad4] {
  padding: 9px 20px;
  font-size: 14px;
  color: #FFFFFF;
}
.spx-button[data-v-23bc3ad4] {
  padding: 9px 20px;
  font-size: 14px;
  color: #FFFFFF;
  border-color: #FFFFFF;
  color: #555555;
}
.spx-button[data-v-23bc3ad4]:hover {
  background-color: #FFFFFF;
}
.spx-button-primary[data-v-23bc3ad4] {
  padding: 9px 20px;
  font-size: 14px;
  color: #FFFFFF;
  background-color: #EE4D2D;
  border-color: #EE4D2D;
}
.ssc-message[data-v-23bc3ad4] {
  top: 20px !important;
}
.sp-card > .actions[data-v-23bc3ad4] {
  margin-bottom: 10px;
  display: flex;
  flex-wrap: wrap;
}
.sp-card > .actions .right[data-v-23bc3ad4] {
  flex: 1;
  text-align: right;
  height: 40px;
}
table th[data-v-23bc3ad4] {
  color: rgba(0, 0, 0, 0.85);
  border-color: #EEEEEE;
  font-size: 14px;
  font-weight: 500;
}
.spx-editor .ssc-tag[data-v-23bc3ad4] {
  font-size: 12px;
  margin: 0px;
  padding: 0;
}
.spx-editor .ssc-tag .left-padding-span[data-v-23bc3ad4] {
  width: 0;
  margin: 0 0 0 8px;
}
.spx-editor .ssc-tag .right-padding-span[data-v-23bc3ad4] {
  width: 0;
  margin: 0 8px 0 0;
}
.spx-editor .tag-editor-span[data-v-23bc3ad4] {
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
.spx-editor .tag-editor-span .tag-editor-span-space[data-v-23bc3ad4] {
  width: 8px;
  height: 15px;
  display: inline-block;
  line-height: 22px;
}
.ssc-tabs-type-pane-card .ssc-tabs-pane[data-v-23bc3ad4] {
  background: #FAFAFA;
}
.check-tree[data-v-23bc3ad4] {
  margin-left: 80px;
}
.avatar-uploader-icon[data-v-23bc3ad4] {
  font-size: 28px;
  color: #8c939d;
  width: 178px;
  height: 178px;
  line-height: 178px;
  text-align: center;
}
.avatar-uploader-icon-small[data-v-23bc3ad4] {
  font-size: 14px !important;
  color: #8c939d;
  width: 56px !important;
  height: 56px !important;
  line-height: 56px !important;
  text-align: center;
}
.avatar-uploader-icon-middle[data-v-23bc3ad4] {
  font-size: 14px !important;
  color: #8c939d;
  width: 94px !important;
  height: 94px !important;
  line-height: 94px !important;
  text-align: center;
}
.avatar[data-v-23bc3ad4] {
  width: 178px;
  height: 178px;
  display: block;
}
.avatar-small[data-v-23bc3ad4] {
  width: 56px;
  height: 56px;
  display: block;
}
.avatar-middle[data-v-23bc3ad4] {
  width: 94px;
  height: 94px;
  display: block;
}
.acribus-sp-tabs[data-v-23bc3ad4] {
  padding: 16px 16px 0px;
  border-radius: 6px;
  margin-bottom: -30px;
  background-color: #fff;
}
span.red[data-v-23bc3ad4] {
  color: #F56C6C;
}
span.green[data-v-23bc3ad4] {
  color: #67C23A;
}
.sp-hooks[data-v-23bc3ad4] {
  overflow: hidden;
}
.text-link[data-v-23bc3ad4] {
  color: #409eff;
  cursor: pointer;
}
.text-warning[data-v-23bc3ad4] {
  color: #e80808;
}
.help-text[data-v-23bc3ad4] {
  cursor: help;
}
.driver-performance-flag-A[data-v-23bc3ad4] {
  color: #55CC77;
}
.driver-performance-flag-B[data-v-23bc3ad4] {
  color: #999;
}
.driver-performance-flag-C[data-v-23bc3ad4] {
  color: #FF4742;
}
/* [check-in rule] Google map autosuggest result container */
.pac-container[data-v-23bc3ad4] {
  z-index: 100000;
}
.action-link[data-v-23bc3ad4] {
  color: #2769f0;
  cursor: pointer;
  display: inline-block;
  margin-left: 6px;
}
.action-link[data-v-23bc3ad4]:first-child {
  margin-left: 0;
}
.action-link[data-v-23bc3ad4]:hover {
  text-decoration: underline;
}
.separate-line[data-v-23bc3ad4] {
  height: 0;
  width: 100%;
  border-top: 1px #E9E9E9 solid;
  margin-bottom: 16px;
}
.white-fs-ground[data-v-23bc3ad4] {
  padding: 24px;
  background: #fff;
  height: 100%;
}
.white-fs-ground .category-title[data-v-23bc3ad4] {
  font-size: 16px;
  font-weight: 500;
  line-height: 16px;
  color: #333;
  margin-top: 56px;
  margin-bottom: 16px;
}
.white-fs-ground .category-title[data-v-23bc3ad4]:first-child {
  margin-top: 16px;
}
.white-fs-ground .category-title[data-v-23bc3ad4]:before {
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
.page-table-container[data-v-23bc3ad4] {
  border: 1px solid #eee;
}
.form-body-center[data-v-23bc3ad4] {
  margin: 0 auto;
}
.form-body-left[data-v-23bc3ad4] {
  margin: 0;
}
.dialog-footer[data-v-23bc3ad4],
.footer-submit[data-v-23bc3ad4] {
  margin-top: 32px;
}
.dialog-footer .ssc-button[data-v-23bc3ad4],
.footer-submit .ssc-button[data-v-23bc3ad4] {
  margin-left: 16px;
}
.dialog-footer .ssc-button[data-v-23bc3ad4]:first-child,
.footer-submit .ssc-button[data-v-23bc3ad4]:first-child {
  margin-left: 0;
}
.text-center[data-v-23bc3ad4] {
  text-align: center;
}
.s-form-textarea .ssc-textarea[data-v-23bc3ad4],
.ssc-form-item .ssc-select[data-v-23bc3ad4],
.ssc-form-item .ssc-input-size-medium[data-v-23bc3ad4] {
  width: 320px;
}
.ssc-steps.is-horizontal[data-v-23bc3ad4] {
  width: 60%;
  margin: 23px auto;
}
.action-wrap[data-v-23bc3ad4] {
  display: flex;
  margin: 10px 0;
}
.action-wrap .actions[data-v-23bc3ad4] {
  flex: 1;
}
.action-wrap .actions .ssc-button[data-v-23bc3ad4] {
  margin-right: 16px;
}
.action-wrap .upload-route-log-info[data-v-23bc3ad4] {
  align-self: center;
  text-align: right;
  flex: 1;
}
.action-wrap .upload-route-log-info label[data-v-23bc3ad4] {
  margin-right: 8px;
}
.upload-log-table[data-v-23bc3ad4] {
  margin: 10px 0;
}
.group-route-list-info[data-v-23bc3ad4] {
  line-height: 40px;
}
.group-route-list-info label[data-v-23bc3ad4] {
  margin-right: 10px;
}
.mass-upload-input-footer[data-v-23bc3ad4] {
  margin-top: 32px;
}
.mass-upload-input-footer .ssc-button[data-v-23bc3ad4] {
  margin-right: 10px;
}
.add-range-btn[data-v-23bc3ad4] {
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
.add-range-btn[data-v-23bc3ad4]:hover {
  background: #f6f6f6;
}
.range-wrap[data-v-23bc3ad4] {
  padding: 16px;
}
.range-wrap .seq-tag[data-v-23bc3ad4] {
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
.range-wrap .icon-del[data-v-23bc3ad4] {
  line-height: 32px;
  width: 24px;
  height: 24px;
  cursor: pointer;
  color: #bbb;
}
.range-wrap .icon-del[data-v-23bc3ad4]:hover {
  color: #888;
}
.bg-fafafa[data-v-23bc3ad4] {
  background: #fafafa;
}
.ssc-step-main-title[data-v-23bc3ad4] {
  line-height: 1.5;
}
.ssc-form-item-error-tip[data-v-23bc3ad4] {
  white-space: nowrap;
}
.ssc-table-header .ssc-table-header-title[data-v-23bc3ad4] {
  height: 100%;
}
.ssc-table-header .ssc-table-header-column-container[data-v-23bc3ad4] {
  height: 100%;
}
.ssc-table-body .ssc-table-header-column-container .td-content[data-v-23bc3ad4] {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.acribus-text-ellipsis[data-v-23bc3ad4] {
  display: inline-block;
  width: 100%;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.station-tree-container .ssc-form-item-content[data-v-23bc3ad4] {
  flex-direction: column;
  position: relative;
}
.station-tree-container .ssc-form-item-content .tree[data-v-23bc3ad4] {
  min-width: 318px;
  display: block;
  margin-top: 20px;
}
.station-tree-container .ssc-form-item-content .tree.has-search-input[data-v-23bc3ad4] {
  padding-top: 40px;
}
.station-tree-container .ssc-form-item-content .tree-input[data-v-23bc3ad4] {
  position: absolute;
  left: 3%;
  top: 30px;
  z-index: 1;
  width: 94%;
  margin: 0 auto;
  color: #aeaeae;
}
.ssc-dropdown-menu[data-v-23bc3ad4] {
  min-width: 176px;
  max-width: 320px;
  z-index: 2;
}
.ssc-dropdown-menu .active[data-v-23bc3ad4] {
  color: #EE4D2D;
  font-weight: 500;
}
.detail-part-title[data-v-23bc3ad4] {
  font-size: 18px;
  color: #333333;
  font-weight: 500;
  margin-bottom: 16px;
}
.detail-part-title.additional-info[data-v-23bc3ad4] {
  margin-top: 56px;
}
.detail-part-title[data-v-23bc3ad4]::before {
  content: '';
  width: 2px;
  height: 10px;
  background: #EE4D2D;
  display: inline-block;
  margin-right: 6px;
}
.page-wrapper[data-v-23bc3ad4] {
  height: 100%;
}
.zone-container button:disabled:not(.btn-prev):not(.btn-next).ssc-btn-type-primary[data-v-23bc3ad4] {
  color: #FFF !important;
  background: #EE4D2D !important;
  opacity: 0.5;
}
.pagination-left-total[data-v-23bc3ad4] {
  display: flex;
  flex: 1;
}
.common-status[data-v-23bc3ad4] {
  line-height: 12px;
  font-weight: 500;
  padding: 3px 4px;
  border-radius: 2px;
  display: inline-block;
  white-space: nowrap;
}
.common-status.status-success[data-v-23bc3ad4] {
  background: #ECFFF1;
  color: #1CC461;
}
.common-status.status-disabled[data-v-23bc3ad4] {
  color: #646B76;
  background: #F5F6F9;
}
.common-status.status-info[data-v-23bc3ad4] {
  color: #3274F7;
  background: #F0F7FF;
}
.common-status.status-danger[data-v-23bc3ad4] {
  color: #F32345;
  background: #FFF0F0;
}
.common-status.status-warning[data-v-23bc3ad4] {
  background: #FFF8DB;
  color: #FFB014;
}
.common-divide[data-v-23bc3ad4] {
  height: 8px;
  background: #F5F6F9;
  margin: 0 -24px;
}
.ssc-scan-toast[data-v-23bc3ad4] {
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
.ssc-scan-toast.ssc-scan-toast-success[data-v-23bc3ad4] {
  animation-duration: 4.4s;
  animation-name: scanSuccessToast-23bc3ad4;
  background: #1CC461;
}
.ssc-scan-toast.ssc-scan-toast-fail[data-v-23bc3ad4] {
  background: #F32345;
  animation-duration: 8.4s;
  animation-name: scanFailToast-23bc3ad4;
}
.ssc-scan-toast.ssc-scan-toast-notice[data-v-23bc3ad4] {
  background: #FFA620;
  animation-duration: 6.4s;
  animation-name: scanFailToast-23bc3ad4;
}
.ssc-scan-toast .message-panel[data-v-23bc3ad4] {
  display: flex;
  width: 100%;
  align-items: center;
}
.ssc-scan-toast .message-panel .icon[data-v-23bc3ad4] {
  margin-right: 18px;
  width: 28px;
  height: 28px;
  flex-shrink: 0;
}
.ssc-scan-toast .message-panel .text[data-v-23bc3ad4] {
  display: inline-block;
}
@keyframes scanSuccessToast-23bc3ad4 {
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
@keyframes scanFailToast-23bc3ad4 {
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
.table-pagination[data-v-23bc3ad4] {
  height: 56px;
  border: 1px solid #ECF0F4;
  border-top: 0;
  justify-content: flex-end;
  padding-right: 16px;
}
.journey-type[data-v-23bc3ad4] {
  display: flex;
  align-items: center;
}
.journey-type .journey-type-dot[data-v-23bc3ad4] {
  width: 6px;
  height: 6px;
  border-radius: 50%;
  display: inline-block;
  margin-right: 8px;
}
.pagination-sticky-bottom[data-v-23bc3ad4] {
  background: #fff;
  position: sticky;
  bottom: 16px;
}
.pagination-sticky-bottom[data-v-23bc3ad4]:after {
  content: ' ';
  background: #fff;
  width: 100%;
  height: 16px;
  position: absolute;
}
.pagination-sticky-bottom[data-v-23bc3ad4] .ssc-pagination {
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
.pagination-sticky-bottom[data-v-23bc3ad4] .ssc-pagination .total-container {
  flex: 1;
  margin-left: 15px;
  margin-right: 12px;
}
.sp-card-log-list[data-v-23bc3ad4] {
  padding: 16px 24px;
  background: #fff;
  min-height: 100%;
}
.ssc-table-panel .ssc-form-item .ssc-form-item-content textarea[data-v-23bc3ad4],
.pro-filter .ssc-form-item .ssc-form-item-content textarea[data-v-23bc3ad4] {
  border: transparent;
}
.message-red-text[data-v-23bc3ad4] {
  color: #EE4D2D;
  font-weight: 700;
}
`,""]),p.exports=g},"8WQs":(p,g,r)=>{var d=r("JPst");g=d(!1),g.push([p.id,`.reallocation-history-container[data-v-44d5fc6e] {
  padding: 20px;
}
ul[data-v-44d5fc6e] {
  padding: 0;
  margin: 0;
  list-style: none;
}
.button-base[data-v-44d5fc6e] {
  padding: 9px 20px;
  font-size: 14px;
  color: #FFFFFF;
}
.spx-button[data-v-44d5fc6e] {
  padding: 9px 20px;
  font-size: 14px;
  color: #FFFFFF;
  border-color: #FFFFFF;
  color: #555555;
}
.spx-button[data-v-44d5fc6e]:hover {
  background-color: #FFFFFF;
}
.spx-button-primary[data-v-44d5fc6e] {
  padding: 9px 20px;
  font-size: 14px;
  color: #FFFFFF;
  background-color: #EE4D2D;
  border-color: #EE4D2D;
}
.ssc-message[data-v-44d5fc6e] {
  top: 20px !important;
}
.sp-card > .actions[data-v-44d5fc6e] {
  margin-bottom: 10px;
  display: flex;
  flex-wrap: wrap;
}
.sp-card > .actions .right[data-v-44d5fc6e] {
  flex: 1;
  text-align: right;
  height: 40px;
}
table th[data-v-44d5fc6e] {
  color: rgba(0, 0, 0, 0.85);
  border-color: #EEEEEE;
  font-size: 14px;
  font-weight: 500;
}
.spx-editor .ssc-tag[data-v-44d5fc6e] {
  font-size: 12px;
  margin: 0px;
  padding: 0;
}
.spx-editor .ssc-tag .left-padding-span[data-v-44d5fc6e] {
  width: 0;
  margin: 0 0 0 8px;
}
.spx-editor .ssc-tag .right-padding-span[data-v-44d5fc6e] {
  width: 0;
  margin: 0 8px 0 0;
}
.spx-editor .tag-editor-span[data-v-44d5fc6e] {
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
.spx-editor .tag-editor-span .tag-editor-span-space[data-v-44d5fc6e] {
  width: 8px;
  height: 15px;
  display: inline-block;
  line-height: 22px;
}
.ssc-tabs-type-pane-card .ssc-tabs-pane[data-v-44d5fc6e] {
  background: #FAFAFA;
}
.check-tree[data-v-44d5fc6e] {
  margin-left: 80px;
}
.avatar-uploader-icon[data-v-44d5fc6e] {
  font-size: 28px;
  color: #8c939d;
  width: 178px;
  height: 178px;
  line-height: 178px;
  text-align: center;
}
.avatar-uploader-icon-small[data-v-44d5fc6e] {
  font-size: 14px !important;
  color: #8c939d;
  width: 56px !important;
  height: 56px !important;
  line-height: 56px !important;
  text-align: center;
}
.avatar-uploader-icon-middle[data-v-44d5fc6e] {
  font-size: 14px !important;
  color: #8c939d;
  width: 94px !important;
  height: 94px !important;
  line-height: 94px !important;
  text-align: center;
}
.avatar[data-v-44d5fc6e] {
  width: 178px;
  height: 178px;
  display: block;
}
.avatar-small[data-v-44d5fc6e] {
  width: 56px;
  height: 56px;
  display: block;
}
.avatar-middle[data-v-44d5fc6e] {
  width: 94px;
  height: 94px;
  display: block;
}
.acribus-sp-tabs[data-v-44d5fc6e] {
  padding: 16px 16px 0px;
  border-radius: 6px;
  margin-bottom: -30px;
  background-color: #fff;
}
span.red[data-v-44d5fc6e] {
  color: #F56C6C;
}
span.green[data-v-44d5fc6e] {
  color: #67C23A;
}
.sp-hooks[data-v-44d5fc6e] {
  overflow: hidden;
}
.text-link[data-v-44d5fc6e] {
  color: #409eff;
  cursor: pointer;
}
.text-warning[data-v-44d5fc6e] {
  color: #e80808;
}
.help-text[data-v-44d5fc6e] {
  cursor: help;
}
.driver-performance-flag-A[data-v-44d5fc6e] {
  color: #55CC77;
}
.driver-performance-flag-B[data-v-44d5fc6e] {
  color: #999;
}
.driver-performance-flag-C[data-v-44d5fc6e] {
  color: #FF4742;
}
/* [check-in rule] Google map autosuggest result container */
.pac-container[data-v-44d5fc6e] {
  z-index: 100000;
}
.action-link[data-v-44d5fc6e] {
  color: #2769f0;
  cursor: pointer;
  display: inline-block;
  margin-left: 6px;
}
.action-link[data-v-44d5fc6e]:first-child {
  margin-left: 0;
}
.action-link[data-v-44d5fc6e]:hover {
  text-decoration: underline;
}
.separate-line[data-v-44d5fc6e] {
  height: 0;
  width: 100%;
  border-top: 1px #E9E9E9 solid;
  margin-bottom: 16px;
}
.white-fs-ground[data-v-44d5fc6e] {
  padding: 24px;
  background: #fff;
  height: 100%;
}
.white-fs-ground .category-title[data-v-44d5fc6e] {
  font-size: 16px;
  font-weight: 500;
  line-height: 16px;
  color: #333;
  margin-top: 56px;
  margin-bottom: 16px;
}
.white-fs-ground .category-title[data-v-44d5fc6e]:first-child {
  margin-top: 16px;
}
.white-fs-ground .category-title[data-v-44d5fc6e]:before {
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
.page-table-container[data-v-44d5fc6e] {
  border: 1px solid #eee;
}
.form-body-center[data-v-44d5fc6e] {
  margin: 0 auto;
}
.form-body-left[data-v-44d5fc6e] {
  margin: 0;
}
.dialog-footer[data-v-44d5fc6e],
.footer-submit[data-v-44d5fc6e] {
  margin-top: 32px;
}
.dialog-footer .ssc-button[data-v-44d5fc6e],
.footer-submit .ssc-button[data-v-44d5fc6e] {
  margin-left: 16px;
}
.dialog-footer .ssc-button[data-v-44d5fc6e]:first-child,
.footer-submit .ssc-button[data-v-44d5fc6e]:first-child {
  margin-left: 0;
}
.text-center[data-v-44d5fc6e] {
  text-align: center;
}
.s-form-textarea .ssc-textarea[data-v-44d5fc6e],
.ssc-form-item .ssc-select[data-v-44d5fc6e],
.ssc-form-item .ssc-input-size-medium[data-v-44d5fc6e] {
  width: 320px;
}
.ssc-steps.is-horizontal[data-v-44d5fc6e] {
  width: 60%;
  margin: 23px auto;
}
.action-wrap[data-v-44d5fc6e] {
  display: flex;
  margin: 10px 0;
}
.action-wrap .actions[data-v-44d5fc6e] {
  flex: 1;
}
.action-wrap .actions .ssc-button[data-v-44d5fc6e] {
  margin-right: 16px;
}
.action-wrap .upload-route-log-info[data-v-44d5fc6e] {
  align-self: center;
  text-align: right;
  flex: 1;
}
.action-wrap .upload-route-log-info label[data-v-44d5fc6e] {
  margin-right: 8px;
}
.upload-log-table[data-v-44d5fc6e] {
  margin: 10px 0;
}
.group-route-list-info[data-v-44d5fc6e] {
  line-height: 40px;
}
.group-route-list-info label[data-v-44d5fc6e] {
  margin-right: 10px;
}
.mass-upload-input-footer[data-v-44d5fc6e] {
  margin-top: 32px;
}
.mass-upload-input-footer .ssc-button[data-v-44d5fc6e] {
  margin-right: 10px;
}
.add-range-btn[data-v-44d5fc6e] {
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
.add-range-btn[data-v-44d5fc6e]:hover {
  background: #f6f6f6;
}
.range-wrap[data-v-44d5fc6e] {
  padding: 16px;
}
.range-wrap .seq-tag[data-v-44d5fc6e] {
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
.range-wrap .icon-del[data-v-44d5fc6e] {
  line-height: 32px;
  width: 24px;
  height: 24px;
  cursor: pointer;
  color: #bbb;
}
.range-wrap .icon-del[data-v-44d5fc6e]:hover {
  color: #888;
}
.bg-fafafa[data-v-44d5fc6e] {
  background: #fafafa;
}
.ssc-step-main-title[data-v-44d5fc6e] {
  line-height: 1.5;
}
.ssc-form-item-error-tip[data-v-44d5fc6e] {
  white-space: nowrap;
}
.ssc-table-header .ssc-table-header-title[data-v-44d5fc6e] {
  height: 100%;
}
.ssc-table-header .ssc-table-header-column-container[data-v-44d5fc6e] {
  height: 100%;
}
.ssc-table-body .ssc-table-header-column-container .td-content[data-v-44d5fc6e] {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.acribus-text-ellipsis[data-v-44d5fc6e] {
  display: inline-block;
  width: 100%;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.station-tree-container .ssc-form-item-content[data-v-44d5fc6e] {
  flex-direction: column;
  position: relative;
}
.station-tree-container .ssc-form-item-content .tree[data-v-44d5fc6e] {
  min-width: 318px;
  display: block;
  margin-top: 20px;
}
.station-tree-container .ssc-form-item-content .tree.has-search-input[data-v-44d5fc6e] {
  padding-top: 40px;
}
.station-tree-container .ssc-form-item-content .tree-input[data-v-44d5fc6e] {
  position: absolute;
  left: 3%;
  top: 30px;
  z-index: 1;
  width: 94%;
  margin: 0 auto;
  color: #aeaeae;
}
.ssc-dropdown-menu[data-v-44d5fc6e] {
  min-width: 176px;
  max-width: 320px;
  z-index: 2;
}
.ssc-dropdown-menu .active[data-v-44d5fc6e] {
  color: #EE4D2D;
  font-weight: 500;
}
.detail-part-title[data-v-44d5fc6e] {
  font-size: 18px;
  color: #333333;
  font-weight: 500;
  margin-bottom: 16px;
}
.detail-part-title.additional-info[data-v-44d5fc6e] {
  margin-top: 56px;
}
.detail-part-title[data-v-44d5fc6e]::before {
  content: '';
  width: 2px;
  height: 10px;
  background: #EE4D2D;
  display: inline-block;
  margin-right: 6px;
}
.page-wrapper[data-v-44d5fc6e] {
  height: 100%;
}
.zone-container button:disabled:not(.btn-prev):not(.btn-next).ssc-btn-type-primary[data-v-44d5fc6e] {
  color: #FFF !important;
  background: #EE4D2D !important;
  opacity: 0.5;
}
.pagination-left-total[data-v-44d5fc6e] {
  display: flex;
  flex: 1;
}
.common-status[data-v-44d5fc6e] {
  line-height: 12px;
  font-weight: 500;
  padding: 3px 4px;
  border-radius: 2px;
  display: inline-block;
  white-space: nowrap;
}
.common-status.status-success[data-v-44d5fc6e] {
  background: #ECFFF1;
  color: #1CC461;
}
.common-status.status-disabled[data-v-44d5fc6e] {
  color: #646B76;
  background: #F5F6F9;
}
.common-status.status-info[data-v-44d5fc6e] {
  color: #3274F7;
  background: #F0F7FF;
}
.common-status.status-danger[data-v-44d5fc6e] {
  color: #F32345;
  background: #FFF0F0;
}
.common-status.status-warning[data-v-44d5fc6e] {
  background: #FFF8DB;
  color: #FFB014;
}
.common-divide[data-v-44d5fc6e] {
  height: 8px;
  background: #F5F6F9;
  margin: 0 -24px;
}
.ssc-scan-toast[data-v-44d5fc6e] {
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
.ssc-scan-toast.ssc-scan-toast-success[data-v-44d5fc6e] {
  animation-duration: 4.4s;
  animation-name: scanSuccessToast-44d5fc6e;
  background: #1CC461;
}
.ssc-scan-toast.ssc-scan-toast-fail[data-v-44d5fc6e] {
  background: #F32345;
  animation-duration: 8.4s;
  animation-name: scanFailToast-44d5fc6e;
}
.ssc-scan-toast.ssc-scan-toast-notice[data-v-44d5fc6e] {
  background: #FFA620;
  animation-duration: 6.4s;
  animation-name: scanFailToast-44d5fc6e;
}
.ssc-scan-toast .message-panel[data-v-44d5fc6e] {
  display: flex;
  width: 100%;
  align-items: center;
}
.ssc-scan-toast .message-panel .icon[data-v-44d5fc6e] {
  margin-right: 18px;
  width: 28px;
  height: 28px;
  flex-shrink: 0;
}
.ssc-scan-toast .message-panel .text[data-v-44d5fc6e] {
  display: inline-block;
}
@keyframes scanSuccessToast-44d5fc6e {
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
@keyframes scanFailToast-44d5fc6e {
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
.table-pagination[data-v-44d5fc6e] {
  height: 56px;
  border: 1px solid #ECF0F4;
  border-top: 0;
  justify-content: flex-end;
  padding-right: 16px;
}
.journey-type[data-v-44d5fc6e] {
  display: flex;
  align-items: center;
}
.journey-type .journey-type-dot[data-v-44d5fc6e] {
  width: 6px;
  height: 6px;
  border-radius: 50%;
  display: inline-block;
  margin-right: 8px;
}
.pagination-sticky-bottom[data-v-44d5fc6e] {
  background: #fff;
  position: sticky;
  bottom: 16px;
}
.pagination-sticky-bottom[data-v-44d5fc6e]:after {
  content: ' ';
  background: #fff;
  width: 100%;
  height: 16px;
  position: absolute;
}
.pagination-sticky-bottom[data-v-44d5fc6e] .ssc-pagination {
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
.pagination-sticky-bottom[data-v-44d5fc6e] .ssc-pagination .total-container {
  flex: 1;
  margin-left: 15px;
  margin-right: 12px;
}
.sp-card-log-list[data-v-44d5fc6e] {
  padding: 16px 24px;
  background: #fff;
  min-height: 100%;
}
.ssc-table-panel .ssc-form-item .ssc-form-item-content textarea[data-v-44d5fc6e],
.pro-filter .ssc-form-item .ssc-form-item-content textarea[data-v-44d5fc6e] {
  border: transparent;
}
.message-red-text[data-v-44d5fc6e] {
  color: #EE4D2D;
  font-weight: 700;
}
`,""]),p.exports=g},jtac:(p,g,r)=>{var d=r("JPst");g=d(!1),g.push([p.id,`.location[data-v-6093a86f] {
  cursor: pointer;
  height: 16px;
  color: #8C9AA8;
  margin-left: 2px;
}
.location[data-v-6093a86f]:hover {
  color: #EE4D2D;
}
.recipient-list[data-v-6093a86f] {
  list-style: none;
}
.recipient-list li[data-v-6093a86f] {
  line-height: 40px;
  display: flex;
}
.recipient-list li div[data-v-6093a86f] {
  padding-left: 8px;
  flex: 1;
}
.recipient-list li div span[data-v-6093a86f] {
  padding-left: 8px;
}
.faked-location[data-v-6093a86f] {
  color: #EE4D2D;
  background: #FFF5F0;
  display: inline-block;
  padding: 4px;
  margin-left: 8px;
  border-radius: 2px;
}
.help-icon[data-v-6093a86f] {
  position: relative;
  top: -1px;
}
ul[data-v-6093a86f] {
  padding: 0;
  margin: 0;
  list-style: none;
}
.button-base[data-v-6093a86f] {
  padding: 9px 20px;
  font-size: 14px;
  color: #FFFFFF;
}
.spx-button[data-v-6093a86f] {
  padding: 9px 20px;
  font-size: 14px;
  color: #FFFFFF;
  border-color: #FFFFFF;
  color: #555555;
}
.spx-button[data-v-6093a86f]:hover {
  background-color: #FFFFFF;
}
.spx-button-primary[data-v-6093a86f] {
  padding: 9px 20px;
  font-size: 14px;
  color: #FFFFFF;
  background-color: #EE4D2D;
  border-color: #EE4D2D;
}
.ssc-message[data-v-6093a86f] {
  top: 20px !important;
}
.sp-card > .actions[data-v-6093a86f] {
  margin-bottom: 10px;
  display: flex;
  flex-wrap: wrap;
}
.sp-card > .actions .right[data-v-6093a86f] {
  flex: 1;
  text-align: right;
  height: 40px;
}
table th[data-v-6093a86f] {
  color: rgba(0, 0, 0, 0.85);
  border-color: #EEEEEE;
  font-size: 14px;
  font-weight: 500;
}
.spx-editor .ssc-tag[data-v-6093a86f] {
  font-size: 12px;
  margin: 0px;
  padding: 0;
}
.spx-editor .ssc-tag .left-padding-span[data-v-6093a86f] {
  width: 0;
  margin: 0 0 0 8px;
}
.spx-editor .ssc-tag .right-padding-span[data-v-6093a86f] {
  width: 0;
  margin: 0 8px 0 0;
}
.spx-editor .tag-editor-span[data-v-6093a86f] {
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
.spx-editor .tag-editor-span .tag-editor-span-space[data-v-6093a86f] {
  width: 8px;
  height: 15px;
  display: inline-block;
  line-height: 22px;
}
.ssc-tabs-type-pane-card .ssc-tabs-pane[data-v-6093a86f] {
  background: #FAFAFA;
}
.check-tree[data-v-6093a86f] {
  margin-left: 80px;
}
.avatar-uploader-icon[data-v-6093a86f] {
  font-size: 28px;
  color: #8c939d;
  width: 178px;
  height: 178px;
  line-height: 178px;
  text-align: center;
}
.avatar-uploader-icon-small[data-v-6093a86f] {
  font-size: 14px !important;
  color: #8c939d;
  width: 56px !important;
  height: 56px !important;
  line-height: 56px !important;
  text-align: center;
}
.avatar-uploader-icon-middle[data-v-6093a86f] {
  font-size: 14px !important;
  color: #8c939d;
  width: 94px !important;
  height: 94px !important;
  line-height: 94px !important;
  text-align: center;
}
.avatar[data-v-6093a86f] {
  width: 178px;
  height: 178px;
  display: block;
}
.avatar-small[data-v-6093a86f] {
  width: 56px;
  height: 56px;
  display: block;
}
.avatar-middle[data-v-6093a86f] {
  width: 94px;
  height: 94px;
  display: block;
}
.acribus-sp-tabs[data-v-6093a86f] {
  padding: 16px 16px 0px;
  border-radius: 6px;
  margin-bottom: -30px;
  background-color: #fff;
}
span.red[data-v-6093a86f] {
  color: #F56C6C;
}
span.green[data-v-6093a86f] {
  color: #67C23A;
}
.sp-hooks[data-v-6093a86f] {
  overflow: hidden;
}
.text-link[data-v-6093a86f] {
  color: #409eff;
  cursor: pointer;
}
.text-warning[data-v-6093a86f] {
  color: #e80808;
}
.help-text[data-v-6093a86f] {
  cursor: help;
}
.driver-performance-flag-A[data-v-6093a86f] {
  color: #55CC77;
}
.driver-performance-flag-B[data-v-6093a86f] {
  color: #999;
}
.driver-performance-flag-C[data-v-6093a86f] {
  color: #FF4742;
}
/* [check-in rule] Google map autosuggest result container */
.pac-container[data-v-6093a86f] {
  z-index: 100000;
}
.action-link[data-v-6093a86f] {
  color: #2769f0;
  cursor: pointer;
  display: inline-block;
  margin-left: 6px;
}
.action-link[data-v-6093a86f]:first-child {
  margin-left: 0;
}
.action-link[data-v-6093a86f]:hover {
  text-decoration: underline;
}
.separate-line[data-v-6093a86f] {
  height: 0;
  width: 100%;
  border-top: 1px #E9E9E9 solid;
  margin-bottom: 16px;
}
.white-fs-ground[data-v-6093a86f] {
  padding: 24px;
  background: #fff;
  height: 100%;
}
.white-fs-ground .category-title[data-v-6093a86f] {
  font-size: 16px;
  font-weight: 500;
  line-height: 16px;
  color: #333;
  margin-top: 56px;
  margin-bottom: 16px;
}
.white-fs-ground .category-title[data-v-6093a86f]:first-child {
  margin-top: 16px;
}
.white-fs-ground .category-title[data-v-6093a86f]:before {
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
.page-table-container[data-v-6093a86f] {
  border: 1px solid #eee;
}
.form-body-center[data-v-6093a86f] {
  margin: 0 auto;
}
.form-body-left[data-v-6093a86f] {
  margin: 0;
}
.dialog-footer[data-v-6093a86f],
.footer-submit[data-v-6093a86f] {
  margin-top: 32px;
}
.dialog-footer .ssc-button[data-v-6093a86f],
.footer-submit .ssc-button[data-v-6093a86f] {
  margin-left: 16px;
}
.dialog-footer .ssc-button[data-v-6093a86f]:first-child,
.footer-submit .ssc-button[data-v-6093a86f]:first-child {
  margin-left: 0;
}
.text-center[data-v-6093a86f] {
  text-align: center;
}
.s-form-textarea .ssc-textarea[data-v-6093a86f],
.ssc-form-item .ssc-select[data-v-6093a86f],
.ssc-form-item .ssc-input-size-medium[data-v-6093a86f] {
  width: 320px;
}
.ssc-steps.is-horizontal[data-v-6093a86f] {
  width: 60%;
  margin: 23px auto;
}
.action-wrap[data-v-6093a86f] {
  display: flex;
  margin: 10px 0;
}
.action-wrap .actions[data-v-6093a86f] {
  flex: 1;
}
.action-wrap .actions .ssc-button[data-v-6093a86f] {
  margin-right: 16px;
}
.action-wrap .upload-route-log-info[data-v-6093a86f] {
  align-self: center;
  text-align: right;
  flex: 1;
}
.action-wrap .upload-route-log-info label[data-v-6093a86f] {
  margin-right: 8px;
}
.upload-log-table[data-v-6093a86f] {
  margin: 10px 0;
}
.group-route-list-info[data-v-6093a86f] {
  line-height: 40px;
}
.group-route-list-info label[data-v-6093a86f] {
  margin-right: 10px;
}
.mass-upload-input-footer[data-v-6093a86f] {
  margin-top: 32px;
}
.mass-upload-input-footer .ssc-button[data-v-6093a86f] {
  margin-right: 10px;
}
.add-range-btn[data-v-6093a86f] {
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
.add-range-btn[data-v-6093a86f]:hover {
  background: #f6f6f6;
}
.range-wrap[data-v-6093a86f] {
  padding: 16px;
}
.range-wrap .seq-tag[data-v-6093a86f] {
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
.range-wrap .icon-del[data-v-6093a86f] {
  line-height: 32px;
  width: 24px;
  height: 24px;
  cursor: pointer;
  color: #bbb;
}
.range-wrap .icon-del[data-v-6093a86f]:hover {
  color: #888;
}
.bg-fafafa[data-v-6093a86f] {
  background: #fafafa;
}
.ssc-step-main-title[data-v-6093a86f] {
  line-height: 1.5;
}
.ssc-form-item-error-tip[data-v-6093a86f] {
  white-space: nowrap;
}
.ssc-table-header .ssc-table-header-title[data-v-6093a86f] {
  height: 100%;
}
.ssc-table-header .ssc-table-header-column-container[data-v-6093a86f] {
  height: 100%;
}
.ssc-table-body .ssc-table-header-column-container .td-content[data-v-6093a86f] {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.acribus-text-ellipsis[data-v-6093a86f] {
  display: inline-block;
  width: 100%;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.station-tree-container .ssc-form-item-content[data-v-6093a86f] {
  flex-direction: column;
  position: relative;
}
.station-tree-container .ssc-form-item-content .tree[data-v-6093a86f] {
  min-width: 318px;
  display: block;
  margin-top: 20px;
}
.station-tree-container .ssc-form-item-content .tree.has-search-input[data-v-6093a86f] {
  padding-top: 40px;
}
.station-tree-container .ssc-form-item-content .tree-input[data-v-6093a86f] {
  position: absolute;
  left: 3%;
  top: 30px;
  z-index: 1;
  width: 94%;
  margin: 0 auto;
  color: #aeaeae;
}
.ssc-dropdown-menu[data-v-6093a86f] {
  min-width: 176px;
  max-width: 320px;
  z-index: 2;
}
.ssc-dropdown-menu .active[data-v-6093a86f] {
  color: #EE4D2D;
  font-weight: 500;
}
.detail-part-title[data-v-6093a86f] {
  font-size: 18px;
  color: #333333;
  font-weight: 500;
  margin-bottom: 16px;
}
.detail-part-title.additional-info[data-v-6093a86f] {
  margin-top: 56px;
}
.detail-part-title[data-v-6093a86f]::before {
  content: '';
  width: 2px;
  height: 10px;
  background: #EE4D2D;
  display: inline-block;
  margin-right: 6px;
}
.page-wrapper[data-v-6093a86f] {
  height: 100%;
}
.zone-container button:disabled:not(.btn-prev):not(.btn-next).ssc-btn-type-primary[data-v-6093a86f] {
  color: #FFF !important;
  background: #EE4D2D !important;
  opacity: 0.5;
}
.pagination-left-total[data-v-6093a86f] {
  display: flex;
  flex: 1;
}
.common-status[data-v-6093a86f] {
  line-height: 12px;
  font-weight: 500;
  padding: 3px 4px;
  border-radius: 2px;
  display: inline-block;
  white-space: nowrap;
}
.common-status.status-success[data-v-6093a86f] {
  background: #ECFFF1;
  color: #1CC461;
}
.common-status.status-disabled[data-v-6093a86f] {
  color: #646B76;
  background: #F5F6F9;
}
.common-status.status-info[data-v-6093a86f] {
  color: #3274F7;
  background: #F0F7FF;
}
.common-status.status-danger[data-v-6093a86f] {
  color: #F32345;
  background: #FFF0F0;
}
.common-status.status-warning[data-v-6093a86f] {
  background: #FFF8DB;
  color: #FFB014;
}
.common-divide[data-v-6093a86f] {
  height: 8px;
  background: #F5F6F9;
  margin: 0 -24px;
}
.ssc-scan-toast[data-v-6093a86f] {
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
.ssc-scan-toast.ssc-scan-toast-success[data-v-6093a86f] {
  animation-duration: 4.4s;
  animation-name: scanSuccessToast-6093a86f;
  background: #1CC461;
}
.ssc-scan-toast.ssc-scan-toast-fail[data-v-6093a86f] {
  background: #F32345;
  animation-duration: 8.4s;
  animation-name: scanFailToast-6093a86f;
}
.ssc-scan-toast.ssc-scan-toast-notice[data-v-6093a86f] {
  background: #FFA620;
  animation-duration: 6.4s;
  animation-name: scanFailToast-6093a86f;
}
.ssc-scan-toast .message-panel[data-v-6093a86f] {
  display: flex;
  width: 100%;
  align-items: center;
}
.ssc-scan-toast .message-panel .icon[data-v-6093a86f] {
  margin-right: 18px;
  width: 28px;
  height: 28px;
  flex-shrink: 0;
}
.ssc-scan-toast .message-panel .text[data-v-6093a86f] {
  display: inline-block;
}
@keyframes scanSuccessToast-6093a86f {
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
@keyframes scanFailToast-6093a86f {
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
.table-pagination[data-v-6093a86f] {
  height: 56px;
  border: 1px solid #ECF0F4;
  border-top: 0;
  justify-content: flex-end;
  padding-right: 16px;
}
.journey-type[data-v-6093a86f] {
  display: flex;
  align-items: center;
}
.journey-type .journey-type-dot[data-v-6093a86f] {
  width: 6px;
  height: 6px;
  border-radius: 50%;
  display: inline-block;
  margin-right: 8px;
}
.pagination-sticky-bottom[data-v-6093a86f] {
  background: #fff;
  position: sticky;
  bottom: 16px;
}
.pagination-sticky-bottom[data-v-6093a86f]:after {
  content: ' ';
  background: #fff;
  width: 100%;
  height: 16px;
  position: absolute;
}
.pagination-sticky-bottom[data-v-6093a86f] .ssc-pagination {
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
.pagination-sticky-bottom[data-v-6093a86f] .ssc-pagination .total-container {
  flex: 1;
  margin-left: 15px;
  margin-right: 12px;
}
.sp-card-log-list[data-v-6093a86f] {
  padding: 16px 24px;
  background: #fff;
  min-height: 100%;
}
.ssc-table-panel .ssc-form-item .ssc-form-item-content textarea[data-v-6093a86f],
.pro-filter .ssc-form-item .ssc-form-item-content textarea[data-v-6093a86f] {
  border: transparent;
}
.message-red-text[data-v-6093a86f] {
  color: #EE4D2D;
  font-weight: 700;
}
`,""]),p.exports=g},PO6W:(p,g,r)=>{var d=r("JPst");g=d(!1),g.push([p.id,`.edit-time-btn[data-v-a966a788] {
  float: right;
  margin-top: -32px;
}
ul[data-v-a966a788] {
  padding: 0;
  margin: 0;
  list-style: none;
}
.button-base[data-v-a966a788] {
  padding: 9px 20px;
  font-size: 14px;
  color: #FFFFFF;
}
.spx-button[data-v-a966a788] {
  padding: 9px 20px;
  font-size: 14px;
  color: #FFFFFF;
  border-color: #FFFFFF;
  color: #555555;
}
.spx-button[data-v-a966a788]:hover {
  background-color: #FFFFFF;
}
.spx-button-primary[data-v-a966a788] {
  padding: 9px 20px;
  font-size: 14px;
  color: #FFFFFF;
  background-color: #EE4D2D;
  border-color: #EE4D2D;
}
.ssc-message[data-v-a966a788] {
  top: 20px !important;
}
.sp-card > .actions[data-v-a966a788] {
  margin-bottom: 10px;
  display: flex;
  flex-wrap: wrap;
}
.sp-card > .actions .right[data-v-a966a788] {
  flex: 1;
  text-align: right;
  height: 40px;
}
table th[data-v-a966a788] {
  color: rgba(0, 0, 0, 0.85);
  border-color: #EEEEEE;
  font-size: 14px;
  font-weight: 500;
}
.spx-editor .ssc-tag[data-v-a966a788] {
  font-size: 12px;
  margin: 0px;
  padding: 0;
}
.spx-editor .ssc-tag .left-padding-span[data-v-a966a788] {
  width: 0;
  margin: 0 0 0 8px;
}
.spx-editor .ssc-tag .right-padding-span[data-v-a966a788] {
  width: 0;
  margin: 0 8px 0 0;
}
.spx-editor .tag-editor-span[data-v-a966a788] {
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
.spx-editor .tag-editor-span .tag-editor-span-space[data-v-a966a788] {
  width: 8px;
  height: 15px;
  display: inline-block;
  line-height: 22px;
}
.ssc-tabs-type-pane-card .ssc-tabs-pane[data-v-a966a788] {
  background: #FAFAFA;
}
.check-tree[data-v-a966a788] {
  margin-left: 80px;
}
.avatar-uploader-icon[data-v-a966a788] {
  font-size: 28px;
  color: #8c939d;
  width: 178px;
  height: 178px;
  line-height: 178px;
  text-align: center;
}
.avatar-uploader-icon-small[data-v-a966a788] {
  font-size: 14px !important;
  color: #8c939d;
  width: 56px !important;
  height: 56px !important;
  line-height: 56px !important;
  text-align: center;
}
.avatar-uploader-icon-middle[data-v-a966a788] {
  font-size: 14px !important;
  color: #8c939d;
  width: 94px !important;
  height: 94px !important;
  line-height: 94px !important;
  text-align: center;
}
.avatar[data-v-a966a788] {
  width: 178px;
  height: 178px;
  display: block;
}
.avatar-small[data-v-a966a788] {
  width: 56px;
  height: 56px;
  display: block;
}
.avatar-middle[data-v-a966a788] {
  width: 94px;
  height: 94px;
  display: block;
}
.acribus-sp-tabs[data-v-a966a788] {
  padding: 16px 16px 0px;
  border-radius: 6px;
  margin-bottom: -30px;
  background-color: #fff;
}
span.red[data-v-a966a788] {
  color: #F56C6C;
}
span.green[data-v-a966a788] {
  color: #67C23A;
}
.sp-hooks[data-v-a966a788] {
  overflow: hidden;
}
.text-link[data-v-a966a788] {
  color: #409eff;
  cursor: pointer;
}
.text-warning[data-v-a966a788] {
  color: #e80808;
}
.help-text[data-v-a966a788] {
  cursor: help;
}
.driver-performance-flag-A[data-v-a966a788] {
  color: #55CC77;
}
.driver-performance-flag-B[data-v-a966a788] {
  color: #999;
}
.driver-performance-flag-C[data-v-a966a788] {
  color: #FF4742;
}
/* [check-in rule] Google map autosuggest result container */
.pac-container[data-v-a966a788] {
  z-index: 100000;
}
.action-link[data-v-a966a788] {
  color: #2769f0;
  cursor: pointer;
  display: inline-block;
  margin-left: 6px;
}
.action-link[data-v-a966a788]:first-child {
  margin-left: 0;
}
.action-link[data-v-a966a788]:hover {
  text-decoration: underline;
}
.separate-line[data-v-a966a788] {
  height: 0;
  width: 100%;
  border-top: 1px #E9E9E9 solid;
  margin-bottom: 16px;
}
.white-fs-ground[data-v-a966a788] {
  padding: 24px;
  background: #fff;
  height: 100%;
}
.white-fs-ground .category-title[data-v-a966a788] {
  font-size: 16px;
  font-weight: 500;
  line-height: 16px;
  color: #333;
  margin-top: 56px;
  margin-bottom: 16px;
}
.white-fs-ground .category-title[data-v-a966a788]:first-child {
  margin-top: 16px;
}
.white-fs-ground .category-title[data-v-a966a788]:before {
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
.page-table-container[data-v-a966a788] {
  border: 1px solid #eee;
}
.form-body-center[data-v-a966a788] {
  margin: 0 auto;
}
.form-body-left[data-v-a966a788] {
  margin: 0;
}
.dialog-footer[data-v-a966a788],
.footer-submit[data-v-a966a788] {
  margin-top: 32px;
}
.dialog-footer .ssc-button[data-v-a966a788],
.footer-submit .ssc-button[data-v-a966a788] {
  margin-left: 16px;
}
.dialog-footer .ssc-button[data-v-a966a788]:first-child,
.footer-submit .ssc-button[data-v-a966a788]:first-child {
  margin-left: 0;
}
.text-center[data-v-a966a788] {
  text-align: center;
}
.s-form-textarea .ssc-textarea[data-v-a966a788],
.ssc-form-item .ssc-select[data-v-a966a788],
.ssc-form-item .ssc-input-size-medium[data-v-a966a788] {
  width: 320px;
}
.ssc-steps.is-horizontal[data-v-a966a788] {
  width: 60%;
  margin: 23px auto;
}
.action-wrap[data-v-a966a788] {
  display: flex;
  margin: 10px 0;
}
.action-wrap .actions[data-v-a966a788] {
  flex: 1;
}
.action-wrap .actions .ssc-button[data-v-a966a788] {
  margin-right: 16px;
}
.action-wrap .upload-route-log-info[data-v-a966a788] {
  align-self: center;
  text-align: right;
  flex: 1;
}
.action-wrap .upload-route-log-info label[data-v-a966a788] {
  margin-right: 8px;
}
.upload-log-table[data-v-a966a788] {
  margin: 10px 0;
}
.group-route-list-info[data-v-a966a788] {
  line-height: 40px;
}
.group-route-list-info label[data-v-a966a788] {
  margin-right: 10px;
}
.mass-upload-input-footer[data-v-a966a788] {
  margin-top: 32px;
}
.mass-upload-input-footer .ssc-button[data-v-a966a788] {
  margin-right: 10px;
}
.add-range-btn[data-v-a966a788] {
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
.add-range-btn[data-v-a966a788]:hover {
  background: #f6f6f6;
}
.range-wrap[data-v-a966a788] {
  padding: 16px;
}
.range-wrap .seq-tag[data-v-a966a788] {
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
.range-wrap .icon-del[data-v-a966a788] {
  line-height: 32px;
  width: 24px;
  height: 24px;
  cursor: pointer;
  color: #bbb;
}
.range-wrap .icon-del[data-v-a966a788]:hover {
  color: #888;
}
.bg-fafafa[data-v-a966a788] {
  background: #fafafa;
}
.ssc-step-main-title[data-v-a966a788] {
  line-height: 1.5;
}
.ssc-form-item-error-tip[data-v-a966a788] {
  white-space: nowrap;
}
.ssc-table-header .ssc-table-header-title[data-v-a966a788] {
  height: 100%;
}
.ssc-table-header .ssc-table-header-column-container[data-v-a966a788] {
  height: 100%;
}
.ssc-table-body .ssc-table-header-column-container .td-content[data-v-a966a788] {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.acribus-text-ellipsis[data-v-a966a788] {
  display: inline-block;
  width: 100%;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.station-tree-container .ssc-form-item-content[data-v-a966a788] {
  flex-direction: column;
  position: relative;
}
.station-tree-container .ssc-form-item-content .tree[data-v-a966a788] {
  min-width: 318px;
  display: block;
  margin-top: 20px;
}
.station-tree-container .ssc-form-item-content .tree.has-search-input[data-v-a966a788] {
  padding-top: 40px;
}
.station-tree-container .ssc-form-item-content .tree-input[data-v-a966a788] {
  position: absolute;
  left: 3%;
  top: 30px;
  z-index: 1;
  width: 94%;
  margin: 0 auto;
  color: #aeaeae;
}
.ssc-dropdown-menu[data-v-a966a788] {
  min-width: 176px;
  max-width: 320px;
  z-index: 2;
}
.ssc-dropdown-menu .active[data-v-a966a788] {
  color: #EE4D2D;
  font-weight: 500;
}
.detail-part-title[data-v-a966a788] {
  font-size: 18px;
  color: #333333;
  font-weight: 500;
  margin-bottom: 16px;
}
.detail-part-title.additional-info[data-v-a966a788] {
  margin-top: 56px;
}
.detail-part-title[data-v-a966a788]::before {
  content: '';
  width: 2px;
  height: 10px;
  background: #EE4D2D;
  display: inline-block;
  margin-right: 6px;
}
.page-wrapper[data-v-a966a788] {
  height: 100%;
}
.zone-container button:disabled:not(.btn-prev):not(.btn-next).ssc-btn-type-primary[data-v-a966a788] {
  color: #FFF !important;
  background: #EE4D2D !important;
  opacity: 0.5;
}
.pagination-left-total[data-v-a966a788] {
  display: flex;
  flex: 1;
}
.common-status[data-v-a966a788] {
  line-height: 12px;
  font-weight: 500;
  padding: 3px 4px;
  border-radius: 2px;
  display: inline-block;
  white-space: nowrap;
}
.common-status.status-success[data-v-a966a788] {
  background: #ECFFF1;
  color: #1CC461;
}
.common-status.status-disabled[data-v-a966a788] {
  color: #646B76;
  background: #F5F6F9;
}
.common-status.status-info[data-v-a966a788] {
  color: #3274F7;
  background: #F0F7FF;
}
.common-status.status-danger[data-v-a966a788] {
  color: #F32345;
  background: #FFF0F0;
}
.common-status.status-warning[data-v-a966a788] {
  background: #FFF8DB;
  color: #FFB014;
}
.common-divide[data-v-a966a788] {
  height: 8px;
  background: #F5F6F9;
  margin: 0 -24px;
}
.ssc-scan-toast[data-v-a966a788] {
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
.ssc-scan-toast.ssc-scan-toast-success[data-v-a966a788] {
  animation-duration: 4.4s;
  animation-name: scanSuccessToast-a966a788;
  background: #1CC461;
}
.ssc-scan-toast.ssc-scan-toast-fail[data-v-a966a788] {
  background: #F32345;
  animation-duration: 8.4s;
  animation-name: scanFailToast-a966a788;
}
.ssc-scan-toast.ssc-scan-toast-notice[data-v-a966a788] {
  background: #FFA620;
  animation-duration: 6.4s;
  animation-name: scanFailToast-a966a788;
}
.ssc-scan-toast .message-panel[data-v-a966a788] {
  display: flex;
  width: 100%;
  align-items: center;
}
.ssc-scan-toast .message-panel .icon[data-v-a966a788] {
  margin-right: 18px;
  width: 28px;
  height: 28px;
  flex-shrink: 0;
}
.ssc-scan-toast .message-panel .text[data-v-a966a788] {
  display: inline-block;
}
@keyframes scanSuccessToast-a966a788 {
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
@keyframes scanFailToast-a966a788 {
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
.table-pagination[data-v-a966a788] {
  height: 56px;
  border: 1px solid #ECF0F4;
  border-top: 0;
  justify-content: flex-end;
  padding-right: 16px;
}
.journey-type[data-v-a966a788] {
  display: flex;
  align-items: center;
}
.journey-type .journey-type-dot[data-v-a966a788] {
  width: 6px;
  height: 6px;
  border-radius: 50%;
  display: inline-block;
  margin-right: 8px;
}
.pagination-sticky-bottom[data-v-a966a788] {
  background: #fff;
  position: sticky;
  bottom: 16px;
}
.pagination-sticky-bottom[data-v-a966a788]:after {
  content: ' ';
  background: #fff;
  width: 100%;
  height: 16px;
  position: absolute;
}
.pagination-sticky-bottom[data-v-a966a788] .ssc-pagination {
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
.pagination-sticky-bottom[data-v-a966a788] .ssc-pagination .total-container {
  flex: 1;
  margin-left: 15px;
  margin-right: 12px;
}
.sp-card-log-list[data-v-a966a788] {
  padding: 16px 24px;
  background: #fff;
  min-height: 100%;
}
.ssc-table-panel .ssc-form-item .ssc-form-item-content textarea[data-v-a966a788],
.pro-filter .ssc-form-item .ssc-form-item-content textarea[data-v-a966a788] {
  border: transparent;
}
.message-red-text[data-v-a966a788] {
  color: #EE4D2D;
  font-weight: 700;
}
`,""]),p.exports=g},BDGn:(p,g,r)=>{var d=r("JPst");g=d(!1),g.push([p.id,`.container[data-v-102002d4] {
  display: inline-block;
  vertical-align: top;
}
.container .thumbnail[data-v-102002d4] {
  cursor: pointer;
  transition: background-color 0.3s;
  border: 1px solid #e8ecf5;
}
.container .thumbnail.round[data-v-102002d4] {
  border-radius: 6px;
}
.container .thumbnail[data-v-102002d4]:hover {
  background-color: rgba(0, 0, 0, 0.4);
}
.info-item[data-v-102002d4] {
  margin-bottom: 8px;
}
.info-label[data-v-102002d4] {
  display: inline-block;
  color: #7E8692;
}
.info-label .help-icon[data-v-102002d4] {
  position: relative;
  top: -1px;
}
.location[data-v-102002d4] {
  cursor: pointer;
  height: 16px;
  color: #8c9aa8;
  margin-left: 2px;
}
.location[data-v-102002d4]:hover {
  color: #EE4D2D;
}
.dialog-image[data-v-102002d4] {
  object-fit: contain;
  background-color: #333333;
}
.image-info[data-v-102002d4] {
  margin-bottom: 12px;
}
[data-v-102002d4] .ssc-dialog-wrapper .ssc-dialog-header {
  padding-bottom: 16px;
}
ul[data-v-102002d4] {
  padding: 0;
  margin: 0;
  list-style: none;
}
.button-base[data-v-102002d4] {
  padding: 9px 20px;
  font-size: 14px;
  color: #FFFFFF;
}
.spx-button[data-v-102002d4] {
  padding: 9px 20px;
  font-size: 14px;
  color: #FFFFFF;
  border-color: #FFFFFF;
  color: #555555;
}
.spx-button[data-v-102002d4]:hover {
  background-color: #FFFFFF;
}
.spx-button-primary[data-v-102002d4] {
  padding: 9px 20px;
  font-size: 14px;
  color: #FFFFFF;
  background-color: #EE4D2D;
  border-color: #EE4D2D;
}
.ssc-message[data-v-102002d4] {
  top: 20px !important;
}
.sp-card > .actions[data-v-102002d4] {
  margin-bottom: 10px;
  display: flex;
  flex-wrap: wrap;
}
.sp-card > .actions .right[data-v-102002d4] {
  flex: 1;
  text-align: right;
  height: 40px;
}
table th[data-v-102002d4] {
  color: rgba(0, 0, 0, 0.85);
  border-color: #EEEEEE;
  font-size: 14px;
  font-weight: 500;
}
.spx-editor .ssc-tag[data-v-102002d4] {
  font-size: 12px;
  margin: 0px;
  padding: 0;
}
.spx-editor .ssc-tag .left-padding-span[data-v-102002d4] {
  width: 0;
  margin: 0 0 0 8px;
}
.spx-editor .ssc-tag .right-padding-span[data-v-102002d4] {
  width: 0;
  margin: 0 8px 0 0;
}
.spx-editor .tag-editor-span[data-v-102002d4] {
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
.spx-editor .tag-editor-span .tag-editor-span-space[data-v-102002d4] {
  width: 8px;
  height: 15px;
  display: inline-block;
  line-height: 22px;
}
.ssc-tabs-type-pane-card .ssc-tabs-pane[data-v-102002d4] {
  background: #FAFAFA;
}
.check-tree[data-v-102002d4] {
  margin-left: 80px;
}
.avatar-uploader-icon[data-v-102002d4] {
  font-size: 28px;
  color: #8c939d;
  width: 178px;
  height: 178px;
  line-height: 178px;
  text-align: center;
}
.avatar-uploader-icon-small[data-v-102002d4] {
  font-size: 14px !important;
  color: #8c939d;
  width: 56px !important;
  height: 56px !important;
  line-height: 56px !important;
  text-align: center;
}
.avatar-uploader-icon-middle[data-v-102002d4] {
  font-size: 14px !important;
  color: #8c939d;
  width: 94px !important;
  height: 94px !important;
  line-height: 94px !important;
  text-align: center;
}
.avatar[data-v-102002d4] {
  width: 178px;
  height: 178px;
  display: block;
}
.avatar-small[data-v-102002d4] {
  width: 56px;
  height: 56px;
  display: block;
}
.avatar-middle[data-v-102002d4] {
  width: 94px;
  height: 94px;
  display: block;
}
.acribus-sp-tabs[data-v-102002d4] {
  padding: 16px 16px 0px;
  border-radius: 6px;
  margin-bottom: -30px;
  background-color: #fff;
}
span.red[data-v-102002d4] {
  color: #F56C6C;
}
span.green[data-v-102002d4] {
  color: #67C23A;
}
.sp-hooks[data-v-102002d4] {
  overflow: hidden;
}
.text-link[data-v-102002d4] {
  color: #409eff;
  cursor: pointer;
}
.text-warning[data-v-102002d4] {
  color: #e80808;
}
.help-text[data-v-102002d4] {
  cursor: help;
}
.driver-performance-flag-A[data-v-102002d4] {
  color: #55CC77;
}
.driver-performance-flag-B[data-v-102002d4] {
  color: #999;
}
.driver-performance-flag-C[data-v-102002d4] {
  color: #FF4742;
}
/* [check-in rule] Google map autosuggest result container */
.pac-container[data-v-102002d4] {
  z-index: 100000;
}
.action-link[data-v-102002d4] {
  color: #2769f0;
  cursor: pointer;
  display: inline-block;
  margin-left: 6px;
}
.action-link[data-v-102002d4]:first-child {
  margin-left: 0;
}
.action-link[data-v-102002d4]:hover {
  text-decoration: underline;
}
.separate-line[data-v-102002d4] {
  height: 0;
  width: 100%;
  border-top: 1px #E9E9E9 solid;
  margin-bottom: 16px;
}
.white-fs-ground[data-v-102002d4] {
  padding: 24px;
  background: #fff;
  height: 100%;
}
.white-fs-ground .category-title[data-v-102002d4] {
  font-size: 16px;
  font-weight: 500;
  line-height: 16px;
  color: #333;
  margin-top: 56px;
  margin-bottom: 16px;
}
.white-fs-ground .category-title[data-v-102002d4]:first-child {
  margin-top: 16px;
}
.white-fs-ground .category-title[data-v-102002d4]:before {
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
.page-table-container[data-v-102002d4] {
  border: 1px solid #eee;
}
.form-body-center[data-v-102002d4] {
  margin: 0 auto;
}
.form-body-left[data-v-102002d4] {
  margin: 0;
}
.dialog-footer[data-v-102002d4],
.footer-submit[data-v-102002d4] {
  margin-top: 32px;
}
.dialog-footer .ssc-button[data-v-102002d4],
.footer-submit .ssc-button[data-v-102002d4] {
  margin-left: 16px;
}
.dialog-footer .ssc-button[data-v-102002d4]:first-child,
.footer-submit .ssc-button[data-v-102002d4]:first-child {
  margin-left: 0;
}
.text-center[data-v-102002d4] {
  text-align: center;
}
.s-form-textarea .ssc-textarea[data-v-102002d4],
.ssc-form-item .ssc-select[data-v-102002d4],
.ssc-form-item .ssc-input-size-medium[data-v-102002d4] {
  width: 320px;
}
.ssc-steps.is-horizontal[data-v-102002d4] {
  width: 60%;
  margin: 23px auto;
}
.action-wrap[data-v-102002d4] {
  display: flex;
  margin: 10px 0;
}
.action-wrap .actions[data-v-102002d4] {
  flex: 1;
}
.action-wrap .actions .ssc-button[data-v-102002d4] {
  margin-right: 16px;
}
.action-wrap .upload-route-log-info[data-v-102002d4] {
  align-self: center;
  text-align: right;
  flex: 1;
}
.action-wrap .upload-route-log-info label[data-v-102002d4] {
  margin-right: 8px;
}
.upload-log-table[data-v-102002d4] {
  margin: 10px 0;
}
.group-route-list-info[data-v-102002d4] {
  line-height: 40px;
}
.group-route-list-info label[data-v-102002d4] {
  margin-right: 10px;
}
.mass-upload-input-footer[data-v-102002d4] {
  margin-top: 32px;
}
.mass-upload-input-footer .ssc-button[data-v-102002d4] {
  margin-right: 10px;
}
.add-range-btn[data-v-102002d4] {
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
.add-range-btn[data-v-102002d4]:hover {
  background: #f6f6f6;
}
.range-wrap[data-v-102002d4] {
  padding: 16px;
}
.range-wrap .seq-tag[data-v-102002d4] {
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
.range-wrap .icon-del[data-v-102002d4] {
  line-height: 32px;
  width: 24px;
  height: 24px;
  cursor: pointer;
  color: #bbb;
}
.range-wrap .icon-del[data-v-102002d4]:hover {
  color: #888;
}
.bg-fafafa[data-v-102002d4] {
  background: #fafafa;
}
.ssc-step-main-title[data-v-102002d4] {
  line-height: 1.5;
}
.ssc-form-item-error-tip[data-v-102002d4] {
  white-space: nowrap;
}
.ssc-table-header .ssc-table-header-title[data-v-102002d4] {
  height: 100%;
}
.ssc-table-header .ssc-table-header-column-container[data-v-102002d4] {
  height: 100%;
}
.ssc-table-body .ssc-table-header-column-container .td-content[data-v-102002d4] {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.acribus-text-ellipsis[data-v-102002d4] {
  display: inline-block;
  width: 100%;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.station-tree-container .ssc-form-item-content[data-v-102002d4] {
  flex-direction: column;
  position: relative;
}
.station-tree-container .ssc-form-item-content .tree[data-v-102002d4] {
  min-width: 318px;
  display: block;
  margin-top: 20px;
}
.station-tree-container .ssc-form-item-content .tree.has-search-input[data-v-102002d4] {
  padding-top: 40px;
}
.station-tree-container .ssc-form-item-content .tree-input[data-v-102002d4] {
  position: absolute;
  left: 3%;
  top: 30px;
  z-index: 1;
  width: 94%;
  margin: 0 auto;
  color: #aeaeae;
}
.ssc-dropdown-menu[data-v-102002d4] {
  min-width: 176px;
  max-width: 320px;
  z-index: 2;
}
.ssc-dropdown-menu .active[data-v-102002d4] {
  color: #EE4D2D;
  font-weight: 500;
}
.detail-part-title[data-v-102002d4] {
  font-size: 18px;
  color: #333333;
  font-weight: 500;
  margin-bottom: 16px;
}
.detail-part-title.additional-info[data-v-102002d4] {
  margin-top: 56px;
}
.detail-part-title[data-v-102002d4]::before {
  content: '';
  width: 2px;
  height: 10px;
  background: #EE4D2D;
  display: inline-block;
  margin-right: 6px;
}
.page-wrapper[data-v-102002d4] {
  height: 100%;
}
.zone-container button:disabled:not(.btn-prev):not(.btn-next).ssc-btn-type-primary[data-v-102002d4] {
  color: #FFF !important;
  background: #EE4D2D !important;
  opacity: 0.5;
}
.pagination-left-total[data-v-102002d4] {
  display: flex;
  flex: 1;
}
.common-status[data-v-102002d4] {
  line-height: 12px;
  font-weight: 500;
  padding: 3px 4px;
  border-radius: 2px;
  display: inline-block;
  white-space: nowrap;
}
.common-status.status-success[data-v-102002d4] {
  background: #ECFFF1;
  color: #1CC461;
}
.common-status.status-disabled[data-v-102002d4] {
  color: #646B76;
  background: #F5F6F9;
}
.common-status.status-info[data-v-102002d4] {
  color: #3274F7;
  background: #F0F7FF;
}
.common-status.status-danger[data-v-102002d4] {
  color: #F32345;
  background: #FFF0F0;
}
.common-status.status-warning[data-v-102002d4] {
  background: #FFF8DB;
  color: #FFB014;
}
.common-divide[data-v-102002d4] {
  height: 8px;
  background: #F5F6F9;
  margin: 0 -24px;
}
.ssc-scan-toast[data-v-102002d4] {
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
.ssc-scan-toast.ssc-scan-toast-success[data-v-102002d4] {
  animation-duration: 4.4s;
  animation-name: scanSuccessToast-102002d4;
  background: #1CC461;
}
.ssc-scan-toast.ssc-scan-toast-fail[data-v-102002d4] {
  background: #F32345;
  animation-duration: 8.4s;
  animation-name: scanFailToast-102002d4;
}
.ssc-scan-toast.ssc-scan-toast-notice[data-v-102002d4] {
  background: #FFA620;
  animation-duration: 6.4s;
  animation-name: scanFailToast-102002d4;
}
.ssc-scan-toast .message-panel[data-v-102002d4] {
  display: flex;
  width: 100%;
  align-items: center;
}
.ssc-scan-toast .message-panel .icon[data-v-102002d4] {
  margin-right: 18px;
  width: 28px;
  height: 28px;
  flex-shrink: 0;
}
.ssc-scan-toast .message-panel .text[data-v-102002d4] {
  display: inline-block;
}
@keyframes scanSuccessToast-102002d4 {
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
@keyframes scanFailToast-102002d4 {
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
.table-pagination[data-v-102002d4] {
  height: 56px;
  border: 1px solid #ECF0F4;
  border-top: 0;
  justify-content: flex-end;
  padding-right: 16px;
}
.journey-type[data-v-102002d4] {
  display: flex;
  align-items: center;
}
.journey-type .journey-type-dot[data-v-102002d4] {
  width: 6px;
  height: 6px;
  border-radius: 50%;
  display: inline-block;
  margin-right: 8px;
}
.pagination-sticky-bottom[data-v-102002d4] {
  background: #fff;
  position: sticky;
  bottom: 16px;
}
.pagination-sticky-bottom[data-v-102002d4]:after {
  content: ' ';
  background: #fff;
  width: 100%;
  height: 16px;
  position: absolute;
}
.pagination-sticky-bottom[data-v-102002d4] .ssc-pagination {
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
.pagination-sticky-bottom[data-v-102002d4] .ssc-pagination .total-container {
  flex: 1;
  margin-left: 15px;
  margin-right: 12px;
}
.sp-card-log-list[data-v-102002d4] {
  padding: 16px 24px;
  background: #fff;
  min-height: 100%;
}
.ssc-table-panel .ssc-form-item .ssc-form-item-content textarea[data-v-102002d4],
.pro-filter .ssc-form-item .ssc-form-item-content textarea[data-v-102002d4] {
  border: transparent;
}
.message-red-text[data-v-102002d4] {
  color: #EE4D2D;
  font-weight: 700;
}
`,""]),p.exports=g},j1de:(p,g,r)=>{var d=r("JPst");g=d(!1),g.push([p.id,`ul[data-v-4e998153],
li[data-v-4e998153] {
  list-style: none;
  padding: 0;
}
ul > li[data-v-4e998153] {
  display: inline-block;
}
ul > li .cur-station[data-v-4e998153] {
  font-weight: 600;
}
ul > li .arrow[data-v-4e998153] {
  margin: 0 4px;
}
ul[data-v-4e998153] {
  padding: 0;
  margin: 0;
  list-style: none;
}
.button-base[data-v-4e998153] {
  padding: 9px 20px;
  font-size: 14px;
  color: #FFFFFF;
}
.spx-button[data-v-4e998153] {
  padding: 9px 20px;
  font-size: 14px;
  color: #FFFFFF;
  border-color: #FFFFFF;
  color: #555555;
}
.spx-button[data-v-4e998153]:hover {
  background-color: #FFFFFF;
}
.spx-button-primary[data-v-4e998153] {
  padding: 9px 20px;
  font-size: 14px;
  color: #FFFFFF;
  background-color: #EE4D2D;
  border-color: #EE4D2D;
}
.ssc-message[data-v-4e998153] {
  top: 20px !important;
}
.sp-card > .actions[data-v-4e998153] {
  margin-bottom: 10px;
  display: flex;
  flex-wrap: wrap;
}
.sp-card > .actions .right[data-v-4e998153] {
  flex: 1;
  text-align: right;
  height: 40px;
}
table th[data-v-4e998153] {
  color: rgba(0, 0, 0, 0.85);
  border-color: #EEEEEE;
  font-size: 14px;
  font-weight: 500;
}
.spx-editor .ssc-tag[data-v-4e998153] {
  font-size: 12px;
  margin: 0px;
  padding: 0;
}
.spx-editor .ssc-tag .left-padding-span[data-v-4e998153] {
  width: 0;
  margin: 0 0 0 8px;
}
.spx-editor .ssc-tag .right-padding-span[data-v-4e998153] {
  width: 0;
  margin: 0 8px 0 0;
}
.spx-editor .tag-editor-span[data-v-4e998153] {
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
.spx-editor .tag-editor-span .tag-editor-span-space[data-v-4e998153] {
  width: 8px;
  height: 15px;
  display: inline-block;
  line-height: 22px;
}
.ssc-tabs-type-pane-card .ssc-tabs-pane[data-v-4e998153] {
  background: #FAFAFA;
}
.check-tree[data-v-4e998153] {
  margin-left: 80px;
}
.avatar-uploader-icon[data-v-4e998153] {
  font-size: 28px;
  color: #8c939d;
  width: 178px;
  height: 178px;
  line-height: 178px;
  text-align: center;
}
.avatar-uploader-icon-small[data-v-4e998153] {
  font-size: 14px !important;
  color: #8c939d;
  width: 56px !important;
  height: 56px !important;
  line-height: 56px !important;
  text-align: center;
}
.avatar-uploader-icon-middle[data-v-4e998153] {
  font-size: 14px !important;
  color: #8c939d;
  width: 94px !important;
  height: 94px !important;
  line-height: 94px !important;
  text-align: center;
}
.avatar[data-v-4e998153] {
  width: 178px;
  height: 178px;
  display: block;
}
.avatar-small[data-v-4e998153] {
  width: 56px;
  height: 56px;
  display: block;
}
.avatar-middle[data-v-4e998153] {
  width: 94px;
  height: 94px;
  display: block;
}
.acribus-sp-tabs[data-v-4e998153] {
  padding: 16px 16px 0px;
  border-radius: 6px;
  margin-bottom: -30px;
  background-color: #fff;
}
span.red[data-v-4e998153] {
  color: #F56C6C;
}
span.green[data-v-4e998153] {
  color: #67C23A;
}
.sp-hooks[data-v-4e998153] {
  overflow: hidden;
}
.text-link[data-v-4e998153] {
  color: #409eff;
  cursor: pointer;
}
.text-warning[data-v-4e998153] {
  color: #e80808;
}
.help-text[data-v-4e998153] {
  cursor: help;
}
.driver-performance-flag-A[data-v-4e998153] {
  color: #55CC77;
}
.driver-performance-flag-B[data-v-4e998153] {
  color: #999;
}
.driver-performance-flag-C[data-v-4e998153] {
  color: #FF4742;
}
/* [check-in rule] Google map autosuggest result container */
.pac-container[data-v-4e998153] {
  z-index: 100000;
}
.action-link[data-v-4e998153] {
  color: #2769f0;
  cursor: pointer;
  display: inline-block;
  margin-left: 6px;
}
.action-link[data-v-4e998153]:first-child {
  margin-left: 0;
}
.action-link[data-v-4e998153]:hover {
  text-decoration: underline;
}
.separate-line[data-v-4e998153] {
  height: 0;
  width: 100%;
  border-top: 1px #E9E9E9 solid;
  margin-bottom: 16px;
}
.white-fs-ground[data-v-4e998153] {
  padding: 24px;
  background: #fff;
  height: 100%;
}
.white-fs-ground .category-title[data-v-4e998153] {
  font-size: 16px;
  font-weight: 500;
  line-height: 16px;
  color: #333;
  margin-top: 56px;
  margin-bottom: 16px;
}
.white-fs-ground .category-title[data-v-4e998153]:first-child {
  margin-top: 16px;
}
.white-fs-ground .category-title[data-v-4e998153]:before {
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
.page-table-container[data-v-4e998153] {
  border: 1px solid #eee;
}
.form-body-center[data-v-4e998153] {
  margin: 0 auto;
}
.form-body-left[data-v-4e998153] {
  margin: 0;
}
.dialog-footer[data-v-4e998153],
.footer-submit[data-v-4e998153] {
  margin-top: 32px;
}
.dialog-footer .ssc-button[data-v-4e998153],
.footer-submit .ssc-button[data-v-4e998153] {
  margin-left: 16px;
}
.dialog-footer .ssc-button[data-v-4e998153]:first-child,
.footer-submit .ssc-button[data-v-4e998153]:first-child {
  margin-left: 0;
}
.text-center[data-v-4e998153] {
  text-align: center;
}
.s-form-textarea .ssc-textarea[data-v-4e998153],
.ssc-form-item .ssc-select[data-v-4e998153],
.ssc-form-item .ssc-input-size-medium[data-v-4e998153] {
  width: 320px;
}
.ssc-steps.is-horizontal[data-v-4e998153] {
  width: 60%;
  margin: 23px auto;
}
.action-wrap[data-v-4e998153] {
  display: flex;
  margin: 10px 0;
}
.action-wrap .actions[data-v-4e998153] {
  flex: 1;
}
.action-wrap .actions .ssc-button[data-v-4e998153] {
  margin-right: 16px;
}
.action-wrap .upload-route-log-info[data-v-4e998153] {
  align-self: center;
  text-align: right;
  flex: 1;
}
.action-wrap .upload-route-log-info label[data-v-4e998153] {
  margin-right: 8px;
}
.upload-log-table[data-v-4e998153] {
  margin: 10px 0;
}
.group-route-list-info[data-v-4e998153] {
  line-height: 40px;
}
.group-route-list-info label[data-v-4e998153] {
  margin-right: 10px;
}
.mass-upload-input-footer[data-v-4e998153] {
  margin-top: 32px;
}
.mass-upload-input-footer .ssc-button[data-v-4e998153] {
  margin-right: 10px;
}
.add-range-btn[data-v-4e998153] {
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
.add-range-btn[data-v-4e998153]:hover {
  background: #f6f6f6;
}
.range-wrap[data-v-4e998153] {
  padding: 16px;
}
.range-wrap .seq-tag[data-v-4e998153] {
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
.range-wrap .icon-del[data-v-4e998153] {
  line-height: 32px;
  width: 24px;
  height: 24px;
  cursor: pointer;
  color: #bbb;
}
.range-wrap .icon-del[data-v-4e998153]:hover {
  color: #888;
}
.bg-fafafa[data-v-4e998153] {
  background: #fafafa;
}
.ssc-step-main-title[data-v-4e998153] {
  line-height: 1.5;
}
.ssc-form-item-error-tip[data-v-4e998153] {
  white-space: nowrap;
}
.ssc-table-header .ssc-table-header-title[data-v-4e998153] {
  height: 100%;
}
.ssc-table-header .ssc-table-header-column-container[data-v-4e998153] {
  height: 100%;
}
.ssc-table-body .ssc-table-header-column-container .td-content[data-v-4e998153] {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.acribus-text-ellipsis[data-v-4e998153] {
  display: inline-block;
  width: 100%;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.station-tree-container .ssc-form-item-content[data-v-4e998153] {
  flex-direction: column;
  position: relative;
}
.station-tree-container .ssc-form-item-content .tree[data-v-4e998153] {
  min-width: 318px;
  display: block;
  margin-top: 20px;
}
.station-tree-container .ssc-form-item-content .tree.has-search-input[data-v-4e998153] {
  padding-top: 40px;
}
.station-tree-container .ssc-form-item-content .tree-input[data-v-4e998153] {
  position: absolute;
  left: 3%;
  top: 30px;
  z-index: 1;
  width: 94%;
  margin: 0 auto;
  color: #aeaeae;
}
.ssc-dropdown-menu[data-v-4e998153] {
  min-width: 176px;
  max-width: 320px;
  z-index: 2;
}
.ssc-dropdown-menu .active[data-v-4e998153] {
  color: #EE4D2D;
  font-weight: 500;
}
.detail-part-title[data-v-4e998153] {
  font-size: 18px;
  color: #333333;
  font-weight: 500;
  margin-bottom: 16px;
}
.detail-part-title.additional-info[data-v-4e998153] {
  margin-top: 56px;
}
.detail-part-title[data-v-4e998153]::before {
  content: '';
  width: 2px;
  height: 10px;
  background: #EE4D2D;
  display: inline-block;
  margin-right: 6px;
}
.page-wrapper[data-v-4e998153] {
  height: 100%;
}
.zone-container button:disabled:not(.btn-prev):not(.btn-next).ssc-btn-type-primary[data-v-4e998153] {
  color: #FFF !important;
  background: #EE4D2D !important;
  opacity: 0.5;
}
.pagination-left-total[data-v-4e998153] {
  display: flex;
  flex: 1;
}
.common-status[data-v-4e998153] {
  line-height: 12px;
  font-weight: 500;
  padding: 3px 4px;
  border-radius: 2px;
  display: inline-block;
  white-space: nowrap;
}
.common-status.status-success[data-v-4e998153] {
  background: #ECFFF1;
  color: #1CC461;
}
.common-status.status-disabled[data-v-4e998153] {
  color: #646B76;
  background: #F5F6F9;
}
.common-status.status-info[data-v-4e998153] {
  color: #3274F7;
  background: #F0F7FF;
}
.common-status.status-danger[data-v-4e998153] {
  color: #F32345;
  background: #FFF0F0;
}
.common-status.status-warning[data-v-4e998153] {
  background: #FFF8DB;
  color: #FFB014;
}
.common-divide[data-v-4e998153] {
  height: 8px;
  background: #F5F6F9;
  margin: 0 -24px;
}
.ssc-scan-toast[data-v-4e998153] {
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
.ssc-scan-toast.ssc-scan-toast-success[data-v-4e998153] {
  animation-duration: 4.4s;
  animation-name: scanSuccessToast-4e998153;
  background: #1CC461;
}
.ssc-scan-toast.ssc-scan-toast-fail[data-v-4e998153] {
  background: #F32345;
  animation-duration: 8.4s;
  animation-name: scanFailToast-4e998153;
}
.ssc-scan-toast.ssc-scan-toast-notice[data-v-4e998153] {
  background: #FFA620;
  animation-duration: 6.4s;
  animation-name: scanFailToast-4e998153;
}
.ssc-scan-toast .message-panel[data-v-4e998153] {
  display: flex;
  width: 100%;
  align-items: center;
}
.ssc-scan-toast .message-panel .icon[data-v-4e998153] {
  margin-right: 18px;
  width: 28px;
  height: 28px;
  flex-shrink: 0;
}
.ssc-scan-toast .message-panel .text[data-v-4e998153] {
  display: inline-block;
}
@keyframes scanSuccessToast-4e998153 {
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
@keyframes scanFailToast-4e998153 {
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
.table-pagination[data-v-4e998153] {
  height: 56px;
  border: 1px solid #ECF0F4;
  border-top: 0;
  justify-content: flex-end;
  padding-right: 16px;
}
.journey-type[data-v-4e998153] {
  display: flex;
  align-items: center;
}
.journey-type .journey-type-dot[data-v-4e998153] {
  width: 6px;
  height: 6px;
  border-radius: 50%;
  display: inline-block;
  margin-right: 8px;
}
.pagination-sticky-bottom[data-v-4e998153] {
  background: #fff;
  position: sticky;
  bottom: 16px;
}
.pagination-sticky-bottom[data-v-4e998153]:after {
  content: ' ';
  background: #fff;
  width: 100%;
  height: 16px;
  position: absolute;
}
.pagination-sticky-bottom[data-v-4e998153] .ssc-pagination {
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
.pagination-sticky-bottom[data-v-4e998153] .ssc-pagination .total-container {
  flex: 1;
  margin-left: 15px;
  margin-right: 12px;
}
.sp-card-log-list[data-v-4e998153] {
  padding: 16px 24px;
  background: #fff;
  min-height: 100%;
}
.ssc-table-panel .ssc-form-item .ssc-form-item-content textarea[data-v-4e998153],
.pro-filter .ssc-form-item .ssc-form-item-content textarea[data-v-4e998153] {
  border: transparent;
}
.message-red-text[data-v-4e998153] {
  color: #EE4D2D;
  font-weight: 700;
}
`,""]),p.exports=g},BemC:(p,g,r)=>{var d=r("JPst");g=d(!1),g.push([p.id,`.help-icon[data-v-b73eab30] {
  color: #7E8692;
}
ul[data-v-b73eab30] {
  padding: 0;
  margin: 0;
  list-style: none;
}
.button-base[data-v-b73eab30] {
  padding: 9px 20px;
  font-size: 14px;
  color: #FFFFFF;
}
.spx-button[data-v-b73eab30] {
  padding: 9px 20px;
  font-size: 14px;
  color: #FFFFFF;
  border-color: #FFFFFF;
  color: #555555;
}
.spx-button[data-v-b73eab30]:hover {
  background-color: #FFFFFF;
}
.spx-button-primary[data-v-b73eab30] {
  padding: 9px 20px;
  font-size: 14px;
  color: #FFFFFF;
  background-color: #EE4D2D;
  border-color: #EE4D2D;
}
.ssc-message[data-v-b73eab30] {
  top: 20px !important;
}
.sp-card > .actions[data-v-b73eab30] {
  margin-bottom: 10px;
  display: flex;
  flex-wrap: wrap;
}
.sp-card > .actions .right[data-v-b73eab30] {
  flex: 1;
  text-align: right;
  height: 40px;
}
table th[data-v-b73eab30] {
  color: rgba(0, 0, 0, 0.85);
  border-color: #EEEEEE;
  font-size: 14px;
  font-weight: 500;
}
.spx-editor .ssc-tag[data-v-b73eab30] {
  font-size: 12px;
  margin: 0px;
  padding: 0;
}
.spx-editor .ssc-tag .left-padding-span[data-v-b73eab30] {
  width: 0;
  margin: 0 0 0 8px;
}
.spx-editor .ssc-tag .right-padding-span[data-v-b73eab30] {
  width: 0;
  margin: 0 8px 0 0;
}
.spx-editor .tag-editor-span[data-v-b73eab30] {
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
.spx-editor .tag-editor-span .tag-editor-span-space[data-v-b73eab30] {
  width: 8px;
  height: 15px;
  display: inline-block;
  line-height: 22px;
}
.ssc-tabs-type-pane-card .ssc-tabs-pane[data-v-b73eab30] {
  background: #FAFAFA;
}
.check-tree[data-v-b73eab30] {
  margin-left: 80px;
}
.avatar-uploader-icon[data-v-b73eab30] {
  font-size: 28px;
  color: #8c939d;
  width: 178px;
  height: 178px;
  line-height: 178px;
  text-align: center;
}
.avatar-uploader-icon-small[data-v-b73eab30] {
  font-size: 14px !important;
  color: #8c939d;
  width: 56px !important;
  height: 56px !important;
  line-height: 56px !important;
  text-align: center;
}
.avatar-uploader-icon-middle[data-v-b73eab30] {
  font-size: 14px !important;
  color: #8c939d;
  width: 94px !important;
  height: 94px !important;
  line-height: 94px !important;
  text-align: center;
}
.avatar[data-v-b73eab30] {
  width: 178px;
  height: 178px;
  display: block;
}
.avatar-small[data-v-b73eab30] {
  width: 56px;
  height: 56px;
  display: block;
}
.avatar-middle[data-v-b73eab30] {
  width: 94px;
  height: 94px;
  display: block;
}
.acribus-sp-tabs[data-v-b73eab30] {
  padding: 16px 16px 0px;
  border-radius: 6px;
  margin-bottom: -30px;
  background-color: #fff;
}
span.red[data-v-b73eab30] {
  color: #F56C6C;
}
span.green[data-v-b73eab30] {
  color: #67C23A;
}
.sp-hooks[data-v-b73eab30] {
  overflow: hidden;
}
.text-link[data-v-b73eab30] {
  color: #409eff;
  cursor: pointer;
}
.text-warning[data-v-b73eab30] {
  color: #e80808;
}
.help-text[data-v-b73eab30] {
  cursor: help;
}
.driver-performance-flag-A[data-v-b73eab30] {
  color: #55CC77;
}
.driver-performance-flag-B[data-v-b73eab30] {
  color: #999;
}
.driver-performance-flag-C[data-v-b73eab30] {
  color: #FF4742;
}
/* [check-in rule] Google map autosuggest result container */
.pac-container[data-v-b73eab30] {
  z-index: 100000;
}
.action-link[data-v-b73eab30] {
  color: #2769f0;
  cursor: pointer;
  display: inline-block;
  margin-left: 6px;
}
.action-link[data-v-b73eab30]:first-child {
  margin-left: 0;
}
.action-link[data-v-b73eab30]:hover {
  text-decoration: underline;
}
.separate-line[data-v-b73eab30] {
  height: 0;
  width: 100%;
  border-top: 1px #E9E9E9 solid;
  margin-bottom: 16px;
}
.white-fs-ground[data-v-b73eab30] {
  padding: 24px;
  background: #fff;
  height: 100%;
}
.white-fs-ground .category-title[data-v-b73eab30] {
  font-size: 16px;
  font-weight: 500;
  line-height: 16px;
  color: #333;
  margin-top: 56px;
  margin-bottom: 16px;
}
.white-fs-ground .category-title[data-v-b73eab30]:first-child {
  margin-top: 16px;
}
.white-fs-ground .category-title[data-v-b73eab30]:before {
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
.page-table-container[data-v-b73eab30] {
  border: 1px solid #eee;
}
.form-body-center[data-v-b73eab30] {
  margin: 0 auto;
}
.form-body-left[data-v-b73eab30] {
  margin: 0;
}
.dialog-footer[data-v-b73eab30],
.footer-submit[data-v-b73eab30] {
  margin-top: 32px;
}
.dialog-footer .ssc-button[data-v-b73eab30],
.footer-submit .ssc-button[data-v-b73eab30] {
  margin-left: 16px;
}
.dialog-footer .ssc-button[data-v-b73eab30]:first-child,
.footer-submit .ssc-button[data-v-b73eab30]:first-child {
  margin-left: 0;
}
.text-center[data-v-b73eab30] {
  text-align: center;
}
.s-form-textarea .ssc-textarea[data-v-b73eab30],
.ssc-form-item .ssc-select[data-v-b73eab30],
.ssc-form-item .ssc-input-size-medium[data-v-b73eab30] {
  width: 320px;
}
.ssc-steps.is-horizontal[data-v-b73eab30] {
  width: 60%;
  margin: 23px auto;
}
.action-wrap[data-v-b73eab30] {
  display: flex;
  margin: 10px 0;
}
.action-wrap .actions[data-v-b73eab30] {
  flex: 1;
}
.action-wrap .actions .ssc-button[data-v-b73eab30] {
  margin-right: 16px;
}
.action-wrap .upload-route-log-info[data-v-b73eab30] {
  align-self: center;
  text-align: right;
  flex: 1;
}
.action-wrap .upload-route-log-info label[data-v-b73eab30] {
  margin-right: 8px;
}
.upload-log-table[data-v-b73eab30] {
  margin: 10px 0;
}
.group-route-list-info[data-v-b73eab30] {
  line-height: 40px;
}
.group-route-list-info label[data-v-b73eab30] {
  margin-right: 10px;
}
.mass-upload-input-footer[data-v-b73eab30] {
  margin-top: 32px;
}
.mass-upload-input-footer .ssc-button[data-v-b73eab30] {
  margin-right: 10px;
}
.add-range-btn[data-v-b73eab30] {
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
.add-range-btn[data-v-b73eab30]:hover {
  background: #f6f6f6;
}
.range-wrap[data-v-b73eab30] {
  padding: 16px;
}
.range-wrap .seq-tag[data-v-b73eab30] {
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
.range-wrap .icon-del[data-v-b73eab30] {
  line-height: 32px;
  width: 24px;
  height: 24px;
  cursor: pointer;
  color: #bbb;
}
.range-wrap .icon-del[data-v-b73eab30]:hover {
  color: #888;
}
.bg-fafafa[data-v-b73eab30] {
  background: #fafafa;
}
.ssc-step-main-title[data-v-b73eab30] {
  line-height: 1.5;
}
.ssc-form-item-error-tip[data-v-b73eab30] {
  white-space: nowrap;
}
.ssc-table-header .ssc-table-header-title[data-v-b73eab30] {
  height: 100%;
}
.ssc-table-header .ssc-table-header-column-container[data-v-b73eab30] {
  height: 100%;
}
.ssc-table-body .ssc-table-header-column-container .td-content[data-v-b73eab30] {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.acribus-text-ellipsis[data-v-b73eab30] {
  display: inline-block;
  width: 100%;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.station-tree-container .ssc-form-item-content[data-v-b73eab30] {
  flex-direction: column;
  position: relative;
}
.station-tree-container .ssc-form-item-content .tree[data-v-b73eab30] {
  min-width: 318px;
  display: block;
  margin-top: 20px;
}
.station-tree-container .ssc-form-item-content .tree.has-search-input[data-v-b73eab30] {
  padding-top: 40px;
}
.station-tree-container .ssc-form-item-content .tree-input[data-v-b73eab30] {
  position: absolute;
  left: 3%;
  top: 30px;
  z-index: 1;
  width: 94%;
  margin: 0 auto;
  color: #aeaeae;
}
.ssc-dropdown-menu[data-v-b73eab30] {
  min-width: 176px;
  max-width: 320px;
  z-index: 2;
}
.ssc-dropdown-menu .active[data-v-b73eab30] {
  color: #EE4D2D;
  font-weight: 500;
}
.detail-part-title[data-v-b73eab30] {
  font-size: 18px;
  color: #333333;
  font-weight: 500;
  margin-bottom: 16px;
}
.detail-part-title.additional-info[data-v-b73eab30] {
  margin-top: 56px;
}
.detail-part-title[data-v-b73eab30]::before {
  content: '';
  width: 2px;
  height: 10px;
  background: #EE4D2D;
  display: inline-block;
  margin-right: 6px;
}
.page-wrapper[data-v-b73eab30] {
  height: 100%;
}
.zone-container button:disabled:not(.btn-prev):not(.btn-next).ssc-btn-type-primary[data-v-b73eab30] {
  color: #FFF !important;
  background: #EE4D2D !important;
  opacity: 0.5;
}
.pagination-left-total[data-v-b73eab30] {
  display: flex;
  flex: 1;
}
.common-status[data-v-b73eab30] {
  line-height: 12px;
  font-weight: 500;
  padding: 3px 4px;
  border-radius: 2px;
  display: inline-block;
  white-space: nowrap;
}
.common-status.status-success[data-v-b73eab30] {
  background: #ECFFF1;
  color: #1CC461;
}
.common-status.status-disabled[data-v-b73eab30] {
  color: #646B76;
  background: #F5F6F9;
}
.common-status.status-info[data-v-b73eab30] {
  color: #3274F7;
  background: #F0F7FF;
}
.common-status.status-danger[data-v-b73eab30] {
  color: #F32345;
  background: #FFF0F0;
}
.common-status.status-warning[data-v-b73eab30] {
  background: #FFF8DB;
  color: #FFB014;
}
.common-divide[data-v-b73eab30] {
  height: 8px;
  background: #F5F6F9;
  margin: 0 -24px;
}
.ssc-scan-toast[data-v-b73eab30] {
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
.ssc-scan-toast.ssc-scan-toast-success[data-v-b73eab30] {
  animation-duration: 4.4s;
  animation-name: scanSuccessToast-b73eab30;
  background: #1CC461;
}
.ssc-scan-toast.ssc-scan-toast-fail[data-v-b73eab30] {
  background: #F32345;
  animation-duration: 8.4s;
  animation-name: scanFailToast-b73eab30;
}
.ssc-scan-toast.ssc-scan-toast-notice[data-v-b73eab30] {
  background: #FFA620;
  animation-duration: 6.4s;
  animation-name: scanFailToast-b73eab30;
}
.ssc-scan-toast .message-panel[data-v-b73eab30] {
  display: flex;
  width: 100%;
  align-items: center;
}
.ssc-scan-toast .message-panel .icon[data-v-b73eab30] {
  margin-right: 18px;
  width: 28px;
  height: 28px;
  flex-shrink: 0;
}
.ssc-scan-toast .message-panel .text[data-v-b73eab30] {
  display: inline-block;
}
@keyframes scanSuccessToast-b73eab30 {
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
@keyframes scanFailToast-b73eab30 {
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
.table-pagination[data-v-b73eab30] {
  height: 56px;
  border: 1px solid #ECF0F4;
  border-top: 0;
  justify-content: flex-end;
  padding-right: 16px;
}
.journey-type[data-v-b73eab30] {
  display: flex;
  align-items: center;
}
.journey-type .journey-type-dot[data-v-b73eab30] {
  width: 6px;
  height: 6px;
  border-radius: 50%;
  display: inline-block;
  margin-right: 8px;
}
.pagination-sticky-bottom[data-v-b73eab30] {
  background: #fff;
  position: sticky;
  bottom: 16px;
}
.pagination-sticky-bottom[data-v-b73eab30]:after {
  content: ' ';
  background: #fff;
  width: 100%;
  height: 16px;
  position: absolute;
}
.pagination-sticky-bottom[data-v-b73eab30] .ssc-pagination {
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
.pagination-sticky-bottom[data-v-b73eab30] .ssc-pagination .total-container {
  flex: 1;
  margin-left: 15px;
  margin-right: 12px;
}
.sp-card-log-list[data-v-b73eab30] {
  padding: 16px 24px;
  background: #fff;
  min-height: 100%;
}
.ssc-table-panel .ssc-form-item .ssc-form-item-content textarea[data-v-b73eab30],
.pro-filter .ssc-form-item .ssc-form-item-content textarea[data-v-b73eab30] {
  border: transparent;
}
.message-red-text[data-v-b73eab30] {
  color: #EE4D2D;
  font-weight: 700;
}
`,""]),p.exports=g},vBnQ:(p,g,r)=>{var d=r("JPst");g=d(!1),g.push([p.id,`.help-icon[data-v-7ee368ad] {
  color: #7E8692;
}
ul[data-v-7ee368ad] {
  padding: 0;
  margin: 0;
  list-style: none;
}
.button-base[data-v-7ee368ad] {
  padding: 9px 20px;
  font-size: 14px;
  color: #FFFFFF;
}
.spx-button[data-v-7ee368ad] {
  padding: 9px 20px;
  font-size: 14px;
  color: #FFFFFF;
  border-color: #FFFFFF;
  color: #555555;
}
.spx-button[data-v-7ee368ad]:hover {
  background-color: #FFFFFF;
}
.spx-button-primary[data-v-7ee368ad] {
  padding: 9px 20px;
  font-size: 14px;
  color: #FFFFFF;
  background-color: #EE4D2D;
  border-color: #EE4D2D;
}
.ssc-message[data-v-7ee368ad] {
  top: 20px !important;
}
.sp-card > .actions[data-v-7ee368ad] {
  margin-bottom: 10px;
  display: flex;
  flex-wrap: wrap;
}
.sp-card > .actions .right[data-v-7ee368ad] {
  flex: 1;
  text-align: right;
  height: 40px;
}
table th[data-v-7ee368ad] {
  color: rgba(0, 0, 0, 0.85);
  border-color: #EEEEEE;
  font-size: 14px;
  font-weight: 500;
}
.spx-editor .ssc-tag[data-v-7ee368ad] {
  font-size: 12px;
  margin: 0px;
  padding: 0;
}
.spx-editor .ssc-tag .left-padding-span[data-v-7ee368ad] {
  width: 0;
  margin: 0 0 0 8px;
}
.spx-editor .ssc-tag .right-padding-span[data-v-7ee368ad] {
  width: 0;
  margin: 0 8px 0 0;
}
.spx-editor .tag-editor-span[data-v-7ee368ad] {
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
.spx-editor .tag-editor-span .tag-editor-span-space[data-v-7ee368ad] {
  width: 8px;
  height: 15px;
  display: inline-block;
  line-height: 22px;
}
.ssc-tabs-type-pane-card .ssc-tabs-pane[data-v-7ee368ad] {
  background: #FAFAFA;
}
.check-tree[data-v-7ee368ad] {
  margin-left: 80px;
}
.avatar-uploader-icon[data-v-7ee368ad] {
  font-size: 28px;
  color: #8c939d;
  width: 178px;
  height: 178px;
  line-height: 178px;
  text-align: center;
}
.avatar-uploader-icon-small[data-v-7ee368ad] {
  font-size: 14px !important;
  color: #8c939d;
  width: 56px !important;
  height: 56px !important;
  line-height: 56px !important;
  text-align: center;
}
.avatar-uploader-icon-middle[data-v-7ee368ad] {
  font-size: 14px !important;
  color: #8c939d;
  width: 94px !important;
  height: 94px !important;
  line-height: 94px !important;
  text-align: center;
}
.avatar[data-v-7ee368ad] {
  width: 178px;
  height: 178px;
  display: block;
}
.avatar-small[data-v-7ee368ad] {
  width: 56px;
  height: 56px;
  display: block;
}
.avatar-middle[data-v-7ee368ad] {
  width: 94px;
  height: 94px;
  display: block;
}
.acribus-sp-tabs[data-v-7ee368ad] {
  padding: 16px 16px 0px;
  border-radius: 6px;
  margin-bottom: -30px;
  background-color: #fff;
}
span.red[data-v-7ee368ad] {
  color: #F56C6C;
}
span.green[data-v-7ee368ad] {
  color: #67C23A;
}
.sp-hooks[data-v-7ee368ad] {
  overflow: hidden;
}
.text-link[data-v-7ee368ad] {
  color: #409eff;
  cursor: pointer;
}
.text-warning[data-v-7ee368ad] {
  color: #e80808;
}
.help-text[data-v-7ee368ad] {
  cursor: help;
}
.driver-performance-flag-A[data-v-7ee368ad] {
  color: #55CC77;
}
.driver-performance-flag-B[data-v-7ee368ad] {
  color: #999;
}
.driver-performance-flag-C[data-v-7ee368ad] {
  color: #FF4742;
}
/* [check-in rule] Google map autosuggest result container */
.pac-container[data-v-7ee368ad] {
  z-index: 100000;
}
.action-link[data-v-7ee368ad] {
  color: #2769f0;
  cursor: pointer;
  display: inline-block;
  margin-left: 6px;
}
.action-link[data-v-7ee368ad]:first-child {
  margin-left: 0;
}
.action-link[data-v-7ee368ad]:hover {
  text-decoration: underline;
}
.separate-line[data-v-7ee368ad] {
  height: 0;
  width: 100%;
  border-top: 1px #E9E9E9 solid;
  margin-bottom: 16px;
}
.white-fs-ground[data-v-7ee368ad] {
  padding: 24px;
  background: #fff;
  height: 100%;
}
.white-fs-ground .category-title[data-v-7ee368ad] {
  font-size: 16px;
  font-weight: 500;
  line-height: 16px;
  color: #333;
  margin-top: 56px;
  margin-bottom: 16px;
}
.white-fs-ground .category-title[data-v-7ee368ad]:first-child {
  margin-top: 16px;
}
.white-fs-ground .category-title[data-v-7ee368ad]:before {
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
.page-table-container[data-v-7ee368ad] {
  border: 1px solid #eee;
}
.form-body-center[data-v-7ee368ad] {
  margin: 0 auto;
}
.form-body-left[data-v-7ee368ad] {
  margin: 0;
}
.dialog-footer[data-v-7ee368ad],
.footer-submit[data-v-7ee368ad] {
  margin-top: 32px;
}
.dialog-footer .ssc-button[data-v-7ee368ad],
.footer-submit .ssc-button[data-v-7ee368ad] {
  margin-left: 16px;
}
.dialog-footer .ssc-button[data-v-7ee368ad]:first-child,
.footer-submit .ssc-button[data-v-7ee368ad]:first-child {
  margin-left: 0;
}
.text-center[data-v-7ee368ad] {
  text-align: center;
}
.s-form-textarea .ssc-textarea[data-v-7ee368ad],
.ssc-form-item .ssc-select[data-v-7ee368ad],
.ssc-form-item .ssc-input-size-medium[data-v-7ee368ad] {
  width: 320px;
}
.ssc-steps.is-horizontal[data-v-7ee368ad] {
  width: 60%;
  margin: 23px auto;
}
.action-wrap[data-v-7ee368ad] {
  display: flex;
  margin: 10px 0;
}
.action-wrap .actions[data-v-7ee368ad] {
  flex: 1;
}
.action-wrap .actions .ssc-button[data-v-7ee368ad] {
  margin-right: 16px;
}
.action-wrap .upload-route-log-info[data-v-7ee368ad] {
  align-self: center;
  text-align: right;
  flex: 1;
}
.action-wrap .upload-route-log-info label[data-v-7ee368ad] {
  margin-right: 8px;
}
.upload-log-table[data-v-7ee368ad] {
  margin: 10px 0;
}
.group-route-list-info[data-v-7ee368ad] {
  line-height: 40px;
}
.group-route-list-info label[data-v-7ee368ad] {
  margin-right: 10px;
}
.mass-upload-input-footer[data-v-7ee368ad] {
  margin-top: 32px;
}
.mass-upload-input-footer .ssc-button[data-v-7ee368ad] {
  margin-right: 10px;
}
.add-range-btn[data-v-7ee368ad] {
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
.add-range-btn[data-v-7ee368ad]:hover {
  background: #f6f6f6;
}
.range-wrap[data-v-7ee368ad] {
  padding: 16px;
}
.range-wrap .seq-tag[data-v-7ee368ad] {
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
.range-wrap .icon-del[data-v-7ee368ad] {
  line-height: 32px;
  width: 24px;
  height: 24px;
  cursor: pointer;
  color: #bbb;
}
.range-wrap .icon-del[data-v-7ee368ad]:hover {
  color: #888;
}
.bg-fafafa[data-v-7ee368ad] {
  background: #fafafa;
}
.ssc-step-main-title[data-v-7ee368ad] {
  line-height: 1.5;
}
.ssc-form-item-error-tip[data-v-7ee368ad] {
  white-space: nowrap;
}
.ssc-table-header .ssc-table-header-title[data-v-7ee368ad] {
  height: 100%;
}
.ssc-table-header .ssc-table-header-column-container[data-v-7ee368ad] {
  height: 100%;
}
.ssc-table-body .ssc-table-header-column-container .td-content[data-v-7ee368ad] {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.acribus-text-ellipsis[data-v-7ee368ad] {
  display: inline-block;
  width: 100%;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.station-tree-container .ssc-form-item-content[data-v-7ee368ad] {
  flex-direction: column;
  position: relative;
}
.station-tree-container .ssc-form-item-content .tree[data-v-7ee368ad] {
  min-width: 318px;
  display: block;
  margin-top: 20px;
}
.station-tree-container .ssc-form-item-content .tree.has-search-input[data-v-7ee368ad] {
  padding-top: 40px;
}
.station-tree-container .ssc-form-item-content .tree-input[data-v-7ee368ad] {
  position: absolute;
  left: 3%;
  top: 30px;
  z-index: 1;
  width: 94%;
  margin: 0 auto;
  color: #aeaeae;
}
.ssc-dropdown-menu[data-v-7ee368ad] {
  min-width: 176px;
  max-width: 320px;
  z-index: 2;
}
.ssc-dropdown-menu .active[data-v-7ee368ad] {
  color: #EE4D2D;
  font-weight: 500;
}
.detail-part-title[data-v-7ee368ad] {
  font-size: 18px;
  color: #333333;
  font-weight: 500;
  margin-bottom: 16px;
}
.detail-part-title.additional-info[data-v-7ee368ad] {
  margin-top: 56px;
}
.detail-part-title[data-v-7ee368ad]::before {
  content: '';
  width: 2px;
  height: 10px;
  background: #EE4D2D;
  display: inline-block;
  margin-right: 6px;
}
.page-wrapper[data-v-7ee368ad] {
  height: 100%;
}
.zone-container button:disabled:not(.btn-prev):not(.btn-next).ssc-btn-type-primary[data-v-7ee368ad] {
  color: #FFF !important;
  background: #EE4D2D !important;
  opacity: 0.5;
}
.pagination-left-total[data-v-7ee368ad] {
  display: flex;
  flex: 1;
}
.common-status[data-v-7ee368ad] {
  line-height: 12px;
  font-weight: 500;
  padding: 3px 4px;
  border-radius: 2px;
  display: inline-block;
  white-space: nowrap;
}
.common-status.status-success[data-v-7ee368ad] {
  background: #ECFFF1;
  color: #1CC461;
}
.common-status.status-disabled[data-v-7ee368ad] {
  color: #646B76;
  background: #F5F6F9;
}
.common-status.status-info[data-v-7ee368ad] {
  color: #3274F7;
  background: #F0F7FF;
}
.common-status.status-danger[data-v-7ee368ad] {
  color: #F32345;
  background: #FFF0F0;
}
.common-status.status-warning[data-v-7ee368ad] {
  background: #FFF8DB;
  color: #FFB014;
}
.common-divide[data-v-7ee368ad] {
  height: 8px;
  background: #F5F6F9;
  margin: 0 -24px;
}
.ssc-scan-toast[data-v-7ee368ad] {
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
.ssc-scan-toast.ssc-scan-toast-success[data-v-7ee368ad] {
  animation-duration: 4.4s;
  animation-name: scanSuccessToast-7ee368ad;
  background: #1CC461;
}
.ssc-scan-toast.ssc-scan-toast-fail[data-v-7ee368ad] {
  background: #F32345;
  animation-duration: 8.4s;
  animation-name: scanFailToast-7ee368ad;
}
.ssc-scan-toast.ssc-scan-toast-notice[data-v-7ee368ad] {
  background: #FFA620;
  animation-duration: 6.4s;
  animation-name: scanFailToast-7ee368ad;
}
.ssc-scan-toast .message-panel[data-v-7ee368ad] {
  display: flex;
  width: 100%;
  align-items: center;
}
.ssc-scan-toast .message-panel .icon[data-v-7ee368ad] {
  margin-right: 18px;
  width: 28px;
  height: 28px;
  flex-shrink: 0;
}
.ssc-scan-toast .message-panel .text[data-v-7ee368ad] {
  display: inline-block;
}
@keyframes scanSuccessToast-7ee368ad {
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
@keyframes scanFailToast-7ee368ad {
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
.table-pagination[data-v-7ee368ad] {
  height: 56px;
  border: 1px solid #ECF0F4;
  border-top: 0;
  justify-content: flex-end;
  padding-right: 16px;
}
.journey-type[data-v-7ee368ad] {
  display: flex;
  align-items: center;
}
.journey-type .journey-type-dot[data-v-7ee368ad] {
  width: 6px;
  height: 6px;
  border-radius: 50%;
  display: inline-block;
  margin-right: 8px;
}
.pagination-sticky-bottom[data-v-7ee368ad] {
  background: #fff;
  position: sticky;
  bottom: 16px;
}
.pagination-sticky-bottom[data-v-7ee368ad]:after {
  content: ' ';
  background: #fff;
  width: 100%;
  height: 16px;
  position: absolute;
}
.pagination-sticky-bottom[data-v-7ee368ad] .ssc-pagination {
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
.pagination-sticky-bottom[data-v-7ee368ad] .ssc-pagination .total-container {
  flex: 1;
  margin-left: 15px;
  margin-right: 12px;
}
.sp-card-log-list[data-v-7ee368ad] {
  padding: 16px 24px;
  background: #fff;
  min-height: 100%;
}
.ssc-table-panel .ssc-form-item .ssc-form-item-content textarea[data-v-7ee368ad],
.pro-filter .ssc-form-item .ssc-form-item-content textarea[data-v-7ee368ad] {
  border: transparent;
}
.message-red-text[data-v-7ee368ad] {
  color: #EE4D2D;
  font-weight: 700;
}
`,""]),p.exports=g},SbZO:(p,g,r)=>{var d=r("JPst");g=d(!1),g.push([p.id,`.video-wrapper[data-v-3a820c72] {
  height: 100%;
  display: flex;
  flex-direction: column;
}
.video-wrapper .info-wrapper[data-v-3a820c72] {
  display: flex;
  flex-wrap: wrap;
}
.video-wrapper .info-wrapper .info-item[data-v-3a820c72] {
  margin: 0 24px 16px 0;
  display: flex;
}
.video-wrapper .info-wrapper .info-item .info-label[data-v-3a820c72] {
  color: #7E8692;
}
.video-wrapper .video-container[data-v-3a820c72] {
  overflow: hidden;
  flex: 1;
  background-color: #000;
}
.video-wrapper .location[data-v-3a820c72] {
  cursor: pointer;
  height: 16px;
  color: #8C9AA8;
  margin: 2px 0 0 2px;
}
.video-wrapper .location[data-v-3a820c72]:hover {
  color: #EE4D2D;
}
[data-v-3a820c72] .ssc-dialog-wrapper .ssc-dialog-content {
  max-height: initial !important;
  top: initial;
  transform: initial;
}
[data-v-3a820c72] .ssc-dialog-wrapper {
  overflow: auto;
  display: flex;
  align-items: center;
}
ul[data-v-3a820c72] {
  padding: 0;
  margin: 0;
  list-style: none;
}
.button-base[data-v-3a820c72] {
  padding: 9px 20px;
  font-size: 14px;
  color: #FFFFFF;
}
.spx-button[data-v-3a820c72] {
  padding: 9px 20px;
  font-size: 14px;
  color: #FFFFFF;
  border-color: #FFFFFF;
  color: #555555;
}
.spx-button[data-v-3a820c72]:hover {
  background-color: #FFFFFF;
}
.spx-button-primary[data-v-3a820c72] {
  padding: 9px 20px;
  font-size: 14px;
  color: #FFFFFF;
  background-color: #EE4D2D;
  border-color: #EE4D2D;
}
.ssc-message[data-v-3a820c72] {
  top: 20px !important;
}
.sp-card > .actions[data-v-3a820c72] {
  margin-bottom: 10px;
  display: flex;
  flex-wrap: wrap;
}
.sp-card > .actions .right[data-v-3a820c72] {
  flex: 1;
  text-align: right;
  height: 40px;
}
table th[data-v-3a820c72] {
  color: rgba(0, 0, 0, 0.85);
  border-color: #EEEEEE;
  font-size: 14px;
  font-weight: 500;
}
.spx-editor .ssc-tag[data-v-3a820c72] {
  font-size: 12px;
  margin: 0px;
  padding: 0;
}
.spx-editor .ssc-tag .left-padding-span[data-v-3a820c72] {
  width: 0;
  margin: 0 0 0 8px;
}
.spx-editor .ssc-tag .right-padding-span[data-v-3a820c72] {
  width: 0;
  margin: 0 8px 0 0;
}
.spx-editor .tag-editor-span[data-v-3a820c72] {
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
.spx-editor .tag-editor-span .tag-editor-span-space[data-v-3a820c72] {
  width: 8px;
  height: 15px;
  display: inline-block;
  line-height: 22px;
}
.ssc-tabs-type-pane-card .ssc-tabs-pane[data-v-3a820c72] {
  background: #FAFAFA;
}
.check-tree[data-v-3a820c72] {
  margin-left: 80px;
}
.avatar-uploader-icon[data-v-3a820c72] {
  font-size: 28px;
  color: #8c939d;
  width: 178px;
  height: 178px;
  line-height: 178px;
  text-align: center;
}
.avatar-uploader-icon-small[data-v-3a820c72] {
  font-size: 14px !important;
  color: #8c939d;
  width: 56px !important;
  height: 56px !important;
  line-height: 56px !important;
  text-align: center;
}
.avatar-uploader-icon-middle[data-v-3a820c72] {
  font-size: 14px !important;
  color: #8c939d;
  width: 94px !important;
  height: 94px !important;
  line-height: 94px !important;
  text-align: center;
}
.avatar[data-v-3a820c72] {
  width: 178px;
  height: 178px;
  display: block;
}
.avatar-small[data-v-3a820c72] {
  width: 56px;
  height: 56px;
  display: block;
}
.avatar-middle[data-v-3a820c72] {
  width: 94px;
  height: 94px;
  display: block;
}
.acribus-sp-tabs[data-v-3a820c72] {
  padding: 16px 16px 0px;
  border-radius: 6px;
  margin-bottom: -30px;
  background-color: #fff;
}
span.red[data-v-3a820c72] {
  color: #F56C6C;
}
span.green[data-v-3a820c72] {
  color: #67C23A;
}
.sp-hooks[data-v-3a820c72] {
  overflow: hidden;
}
.text-link[data-v-3a820c72] {
  color: #409eff;
  cursor: pointer;
}
.text-warning[data-v-3a820c72] {
  color: #e80808;
}
.help-text[data-v-3a820c72] {
  cursor: help;
}
.driver-performance-flag-A[data-v-3a820c72] {
  color: #55CC77;
}
.driver-performance-flag-B[data-v-3a820c72] {
  color: #999;
}
.driver-performance-flag-C[data-v-3a820c72] {
  color: #FF4742;
}
/* [check-in rule] Google map autosuggest result container */
.pac-container[data-v-3a820c72] {
  z-index: 100000;
}
.action-link[data-v-3a820c72] {
  color: #2769f0;
  cursor: pointer;
  display: inline-block;
  margin-left: 6px;
}
.action-link[data-v-3a820c72]:first-child {
  margin-left: 0;
}
.action-link[data-v-3a820c72]:hover {
  text-decoration: underline;
}
.separate-line[data-v-3a820c72] {
  height: 0;
  width: 100%;
  border-top: 1px #E9E9E9 solid;
  margin-bottom: 16px;
}
.white-fs-ground[data-v-3a820c72] {
  padding: 24px;
  background: #fff;
  height: 100%;
}
.white-fs-ground .category-title[data-v-3a820c72] {
  font-size: 16px;
  font-weight: 500;
  line-height: 16px;
  color: #333;
  margin-top: 56px;
  margin-bottom: 16px;
}
.white-fs-ground .category-title[data-v-3a820c72]:first-child {
  margin-top: 16px;
}
.white-fs-ground .category-title[data-v-3a820c72]:before {
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
.page-table-container[data-v-3a820c72] {
  border: 1px solid #eee;
}
.form-body-center[data-v-3a820c72] {
  margin: 0 auto;
}
.form-body-left[data-v-3a820c72] {
  margin: 0;
}
.dialog-footer[data-v-3a820c72],
.footer-submit[data-v-3a820c72] {
  margin-top: 32px;
}
.dialog-footer .ssc-button[data-v-3a820c72],
.footer-submit .ssc-button[data-v-3a820c72] {
  margin-left: 16px;
}
.dialog-footer .ssc-button[data-v-3a820c72]:first-child,
.footer-submit .ssc-button[data-v-3a820c72]:first-child {
  margin-left: 0;
}
.text-center[data-v-3a820c72] {
  text-align: center;
}
.s-form-textarea .ssc-textarea[data-v-3a820c72],
.ssc-form-item .ssc-select[data-v-3a820c72],
.ssc-form-item .ssc-input-size-medium[data-v-3a820c72] {
  width: 320px;
}
.ssc-steps.is-horizontal[data-v-3a820c72] {
  width: 60%;
  margin: 23px auto;
}
.action-wrap[data-v-3a820c72] {
  display: flex;
  margin: 10px 0;
}
.action-wrap .actions[data-v-3a820c72] {
  flex: 1;
}
.action-wrap .actions .ssc-button[data-v-3a820c72] {
  margin-right: 16px;
}
.action-wrap .upload-route-log-info[data-v-3a820c72] {
  align-self: center;
  text-align: right;
  flex: 1;
}
.action-wrap .upload-route-log-info label[data-v-3a820c72] {
  margin-right: 8px;
}
.upload-log-table[data-v-3a820c72] {
  margin: 10px 0;
}
.group-route-list-info[data-v-3a820c72] {
  line-height: 40px;
}
.group-route-list-info label[data-v-3a820c72] {
  margin-right: 10px;
}
.mass-upload-input-footer[data-v-3a820c72] {
  margin-top: 32px;
}
.mass-upload-input-footer .ssc-button[data-v-3a820c72] {
  margin-right: 10px;
}
.add-range-btn[data-v-3a820c72] {
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
.add-range-btn[data-v-3a820c72]:hover {
  background: #f6f6f6;
}
.range-wrap[data-v-3a820c72] {
  padding: 16px;
}
.range-wrap .seq-tag[data-v-3a820c72] {
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
.range-wrap .icon-del[data-v-3a820c72] {
  line-height: 32px;
  width: 24px;
  height: 24px;
  cursor: pointer;
  color: #bbb;
}
.range-wrap .icon-del[data-v-3a820c72]:hover {
  color: #888;
}
.bg-fafafa[data-v-3a820c72] {
  background: #fafafa;
}
.ssc-step-main-title[data-v-3a820c72] {
  line-height: 1.5;
}
.ssc-form-item-error-tip[data-v-3a820c72] {
  white-space: nowrap;
}
.ssc-table-header .ssc-table-header-title[data-v-3a820c72] {
  height: 100%;
}
.ssc-table-header .ssc-table-header-column-container[data-v-3a820c72] {
  height: 100%;
}
.ssc-table-body .ssc-table-header-column-container .td-content[data-v-3a820c72] {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.acribus-text-ellipsis[data-v-3a820c72] {
  display: inline-block;
  width: 100%;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.station-tree-container .ssc-form-item-content[data-v-3a820c72] {
  flex-direction: column;
  position: relative;
}
.station-tree-container .ssc-form-item-content .tree[data-v-3a820c72] {
  min-width: 318px;
  display: block;
  margin-top: 20px;
}
.station-tree-container .ssc-form-item-content .tree.has-search-input[data-v-3a820c72] {
  padding-top: 40px;
}
.station-tree-container .ssc-form-item-content .tree-input[data-v-3a820c72] {
  position: absolute;
  left: 3%;
  top: 30px;
  z-index: 1;
  width: 94%;
  margin: 0 auto;
  color: #aeaeae;
}
.ssc-dropdown-menu[data-v-3a820c72] {
  min-width: 176px;
  max-width: 320px;
  z-index: 2;
}
.ssc-dropdown-menu .active[data-v-3a820c72] {
  color: #EE4D2D;
  font-weight: 500;
}
.detail-part-title[data-v-3a820c72] {
  font-size: 18px;
  color: #333333;
  font-weight: 500;
  margin-bottom: 16px;
}
.detail-part-title.additional-info[data-v-3a820c72] {
  margin-top: 56px;
}
.detail-part-title[data-v-3a820c72]::before {
  content: '';
  width: 2px;
  height: 10px;
  background: #EE4D2D;
  display: inline-block;
  margin-right: 6px;
}
.page-wrapper[data-v-3a820c72] {
  height: 100%;
}
.zone-container button:disabled:not(.btn-prev):not(.btn-next).ssc-btn-type-primary[data-v-3a820c72] {
  color: #FFF !important;
  background: #EE4D2D !important;
  opacity: 0.5;
}
.pagination-left-total[data-v-3a820c72] {
  display: flex;
  flex: 1;
}
.common-status[data-v-3a820c72] {
  line-height: 12px;
  font-weight: 500;
  padding: 3px 4px;
  border-radius: 2px;
  display: inline-block;
  white-space: nowrap;
}
.common-status.status-success[data-v-3a820c72] {
  background: #ECFFF1;
  color: #1CC461;
}
.common-status.status-disabled[data-v-3a820c72] {
  color: #646B76;
  background: #F5F6F9;
}
.common-status.status-info[data-v-3a820c72] {
  color: #3274F7;
  background: #F0F7FF;
}
.common-status.status-danger[data-v-3a820c72] {
  color: #F32345;
  background: #FFF0F0;
}
.common-status.status-warning[data-v-3a820c72] {
  background: #FFF8DB;
  color: #FFB014;
}
.common-divide[data-v-3a820c72] {
  height: 8px;
  background: #F5F6F9;
  margin: 0 -24px;
}
.ssc-scan-toast[data-v-3a820c72] {
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
.ssc-scan-toast.ssc-scan-toast-success[data-v-3a820c72] {
  animation-duration: 4.4s;
  animation-name: scanSuccessToast-3a820c72;
  background: #1CC461;
}
.ssc-scan-toast.ssc-scan-toast-fail[data-v-3a820c72] {
  background: #F32345;
  animation-duration: 8.4s;
  animation-name: scanFailToast-3a820c72;
}
.ssc-scan-toast.ssc-scan-toast-notice[data-v-3a820c72] {
  background: #FFA620;
  animation-duration: 6.4s;
  animation-name: scanFailToast-3a820c72;
}
.ssc-scan-toast .message-panel[data-v-3a820c72] {
  display: flex;
  width: 100%;
  align-items: center;
}
.ssc-scan-toast .message-panel .icon[data-v-3a820c72] {
  margin-right: 18px;
  width: 28px;
  height: 28px;
  flex-shrink: 0;
}
.ssc-scan-toast .message-panel .text[data-v-3a820c72] {
  display: inline-block;
}
@keyframes scanSuccessToast-3a820c72 {
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
@keyframes scanFailToast-3a820c72 {
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
.table-pagination[data-v-3a820c72] {
  height: 56px;
  border: 1px solid #ECF0F4;
  border-top: 0;
  justify-content: flex-end;
  padding-right: 16px;
}
.journey-type[data-v-3a820c72] {
  display: flex;
  align-items: center;
}
.journey-type .journey-type-dot[data-v-3a820c72] {
  width: 6px;
  height: 6px;
  border-radius: 50%;
  display: inline-block;
  margin-right: 8px;
}
.pagination-sticky-bottom[data-v-3a820c72] {
  background: #fff;
  position: sticky;
  bottom: 16px;
}
.pagination-sticky-bottom[data-v-3a820c72]:after {
  content: ' ';
  background: #fff;
  width: 100%;
  height: 16px;
  position: absolute;
}
.pagination-sticky-bottom[data-v-3a820c72] .ssc-pagination {
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
.pagination-sticky-bottom[data-v-3a820c72] .ssc-pagination .total-container {
  flex: 1;
  margin-left: 15px;
  margin-right: 12px;
}
.sp-card-log-list[data-v-3a820c72] {
  padding: 16px 24px;
  background: #fff;
  min-height: 100%;
}
.ssc-table-panel .ssc-form-item .ssc-form-item-content textarea[data-v-3a820c72],
.pro-filter .ssc-form-item .ssc-form-item-content textarea[data-v-3a820c72] {
  border: transparent;
}
.message-red-text[data-v-3a820c72] {
  color: #EE4D2D;
  font-weight: 700;
}
`,""]),p.exports=g},I7kp:(p,g,r)=>{var d=r("JPst");g=d(!1),g.push([p.id,`.unbox-video-wrapper[data-v-ab94364a] {
  display: flex;
}
.unbox-video-wrapper .play-contaienr[data-v-ab94364a] {
  width: 80px;
  height: 80px;
  cursor: pointer;
  position: relative;
}
.unbox-video-wrapper .play-contaienr .first-frame-img[data-v-ab94364a] {
  height: 100%;
  width: 100%;
  border-radius: 4px;
  object-fit: contain;
  border: 1px solid #e8ecf5;
}
.unbox-video-wrapper .play-contaienr .play-icon[data-v-ab94364a] {
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
}
ul[data-v-ab94364a] {
  padding: 0;
  margin: 0;
  list-style: none;
}
.button-base[data-v-ab94364a] {
  padding: 9px 20px;
  font-size: 14px;
  color: #FFFFFF;
}
.spx-button[data-v-ab94364a] {
  padding: 9px 20px;
  font-size: 14px;
  color: #FFFFFF;
  border-color: #FFFFFF;
  color: #555555;
}
.spx-button[data-v-ab94364a]:hover {
  background-color: #FFFFFF;
}
.spx-button-primary[data-v-ab94364a] {
  padding: 9px 20px;
  font-size: 14px;
  color: #FFFFFF;
  background-color: #EE4D2D;
  border-color: #EE4D2D;
}
.ssc-message[data-v-ab94364a] {
  top: 20px !important;
}
.sp-card > .actions[data-v-ab94364a] {
  margin-bottom: 10px;
  display: flex;
  flex-wrap: wrap;
}
.sp-card > .actions .right[data-v-ab94364a] {
  flex: 1;
  text-align: right;
  height: 40px;
}
table th[data-v-ab94364a] {
  color: rgba(0, 0, 0, 0.85);
  border-color: #EEEEEE;
  font-size: 14px;
  font-weight: 500;
}
.spx-editor .ssc-tag[data-v-ab94364a] {
  font-size: 12px;
  margin: 0px;
  padding: 0;
}
.spx-editor .ssc-tag .left-padding-span[data-v-ab94364a] {
  width: 0;
  margin: 0 0 0 8px;
}
.spx-editor .ssc-tag .right-padding-span[data-v-ab94364a] {
  width: 0;
  margin: 0 8px 0 0;
}
.spx-editor .tag-editor-span[data-v-ab94364a] {
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
.spx-editor .tag-editor-span .tag-editor-span-space[data-v-ab94364a] {
  width: 8px;
  height: 15px;
  display: inline-block;
  line-height: 22px;
}
.ssc-tabs-type-pane-card .ssc-tabs-pane[data-v-ab94364a] {
  background: #FAFAFA;
}
.check-tree[data-v-ab94364a] {
  margin-left: 80px;
}
.avatar-uploader-icon[data-v-ab94364a] {
  font-size: 28px;
  color: #8c939d;
  width: 178px;
  height: 178px;
  line-height: 178px;
  text-align: center;
}
.avatar-uploader-icon-small[data-v-ab94364a] {
  font-size: 14px !important;
  color: #8c939d;
  width: 56px !important;
  height: 56px !important;
  line-height: 56px !important;
  text-align: center;
}
.avatar-uploader-icon-middle[data-v-ab94364a] {
  font-size: 14px !important;
  color: #8c939d;
  width: 94px !important;
  height: 94px !important;
  line-height: 94px !important;
  text-align: center;
}
.avatar[data-v-ab94364a] {
  width: 178px;
  height: 178px;
  display: block;
}
.avatar-small[data-v-ab94364a] {
  width: 56px;
  height: 56px;
  display: block;
}
.avatar-middle[data-v-ab94364a] {
  width: 94px;
  height: 94px;
  display: block;
}
.acribus-sp-tabs[data-v-ab94364a] {
  padding: 16px 16px 0px;
  border-radius: 6px;
  margin-bottom: -30px;
  background-color: #fff;
}
span.red[data-v-ab94364a] {
  color: #F56C6C;
}
span.green[data-v-ab94364a] {
  color: #67C23A;
}
.sp-hooks[data-v-ab94364a] {
  overflow: hidden;
}
.text-link[data-v-ab94364a] {
  color: #409eff;
  cursor: pointer;
}
.text-warning[data-v-ab94364a] {
  color: #e80808;
}
.help-text[data-v-ab94364a] {
  cursor: help;
}
.driver-performance-flag-A[data-v-ab94364a] {
  color: #55CC77;
}
.driver-performance-flag-B[data-v-ab94364a] {
  color: #999;
}
.driver-performance-flag-C[data-v-ab94364a] {
  color: #FF4742;
}
/* [check-in rule] Google map autosuggest result container */
.pac-container[data-v-ab94364a] {
  z-index: 100000;
}
.action-link[data-v-ab94364a] {
  color: #2769f0;
  cursor: pointer;
  display: inline-block;
  margin-left: 6px;
}
.action-link[data-v-ab94364a]:first-child {
  margin-left: 0;
}
.action-link[data-v-ab94364a]:hover {
  text-decoration: underline;
}
.separate-line[data-v-ab94364a] {
  height: 0;
  width: 100%;
  border-top: 1px #E9E9E9 solid;
  margin-bottom: 16px;
}
.white-fs-ground[data-v-ab94364a] {
  padding: 24px;
  background: #fff;
  height: 100%;
}
.white-fs-ground .category-title[data-v-ab94364a] {
  font-size: 16px;
  font-weight: 500;
  line-height: 16px;
  color: #333;
  margin-top: 56px;
  margin-bottom: 16px;
}
.white-fs-ground .category-title[data-v-ab94364a]:first-child {
  margin-top: 16px;
}
.white-fs-ground .category-title[data-v-ab94364a]:before {
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
.page-table-container[data-v-ab94364a] {
  border: 1px solid #eee;
}
.form-body-center[data-v-ab94364a] {
  margin: 0 auto;
}
.form-body-left[data-v-ab94364a] {
  margin: 0;
}
.dialog-footer[data-v-ab94364a],
.footer-submit[data-v-ab94364a] {
  margin-top: 32px;
}
.dialog-footer .ssc-button[data-v-ab94364a],
.footer-submit .ssc-button[data-v-ab94364a] {
  margin-left: 16px;
}
.dialog-footer .ssc-button[data-v-ab94364a]:first-child,
.footer-submit .ssc-button[data-v-ab94364a]:first-child {
  margin-left: 0;
}
.text-center[data-v-ab94364a] {
  text-align: center;
}
.s-form-textarea .ssc-textarea[data-v-ab94364a],
.ssc-form-item .ssc-select[data-v-ab94364a],
.ssc-form-item .ssc-input-size-medium[data-v-ab94364a] {
  width: 320px;
}
.ssc-steps.is-horizontal[data-v-ab94364a] {
  width: 60%;
  margin: 23px auto;
}
.action-wrap[data-v-ab94364a] {
  display: flex;
  margin: 10px 0;
}
.action-wrap .actions[data-v-ab94364a] {
  flex: 1;
}
.action-wrap .actions .ssc-button[data-v-ab94364a] {
  margin-right: 16px;
}
.action-wrap .upload-route-log-info[data-v-ab94364a] {
  align-self: center;
  text-align: right;
  flex: 1;
}
.action-wrap .upload-route-log-info label[data-v-ab94364a] {
  margin-right: 8px;
}
.upload-log-table[data-v-ab94364a] {
  margin: 10px 0;
}
.group-route-list-info[data-v-ab94364a] {
  line-height: 40px;
}
.group-route-list-info label[data-v-ab94364a] {
  margin-right: 10px;
}
.mass-upload-input-footer[data-v-ab94364a] {
  margin-top: 32px;
}
.mass-upload-input-footer .ssc-button[data-v-ab94364a] {
  margin-right: 10px;
}
.add-range-btn[data-v-ab94364a] {
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
.add-range-btn[data-v-ab94364a]:hover {
  background: #f6f6f6;
}
.range-wrap[data-v-ab94364a] {
  padding: 16px;
}
.range-wrap .seq-tag[data-v-ab94364a] {
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
.range-wrap .icon-del[data-v-ab94364a] {
  line-height: 32px;
  width: 24px;
  height: 24px;
  cursor: pointer;
  color: #bbb;
}
.range-wrap .icon-del[data-v-ab94364a]:hover {
  color: #888;
}
.bg-fafafa[data-v-ab94364a] {
  background: #fafafa;
}
.ssc-step-main-title[data-v-ab94364a] {
  line-height: 1.5;
}
.ssc-form-item-error-tip[data-v-ab94364a] {
  white-space: nowrap;
}
.ssc-table-header .ssc-table-header-title[data-v-ab94364a] {
  height: 100%;
}
.ssc-table-header .ssc-table-header-column-container[data-v-ab94364a] {
  height: 100%;
}
.ssc-table-body .ssc-table-header-column-container .td-content[data-v-ab94364a] {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.acribus-text-ellipsis[data-v-ab94364a] {
  display: inline-block;
  width: 100%;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.station-tree-container .ssc-form-item-content[data-v-ab94364a] {
  flex-direction: column;
  position: relative;
}
.station-tree-container .ssc-form-item-content .tree[data-v-ab94364a] {
  min-width: 318px;
  display: block;
  margin-top: 20px;
}
.station-tree-container .ssc-form-item-content .tree.has-search-input[data-v-ab94364a] {
  padding-top: 40px;
}
.station-tree-container .ssc-form-item-content .tree-input[data-v-ab94364a] {
  position: absolute;
  left: 3%;
  top: 30px;
  z-index: 1;
  width: 94%;
  margin: 0 auto;
  color: #aeaeae;
}
.ssc-dropdown-menu[data-v-ab94364a] {
  min-width: 176px;
  max-width: 320px;
  z-index: 2;
}
.ssc-dropdown-menu .active[data-v-ab94364a] {
  color: #EE4D2D;
  font-weight: 500;
}
.detail-part-title[data-v-ab94364a] {
  font-size: 18px;
  color: #333333;
  font-weight: 500;
  margin-bottom: 16px;
}
.detail-part-title.additional-info[data-v-ab94364a] {
  margin-top: 56px;
}
.detail-part-title[data-v-ab94364a]::before {
  content: '';
  width: 2px;
  height: 10px;
  background: #EE4D2D;
  display: inline-block;
  margin-right: 6px;
}
.page-wrapper[data-v-ab94364a] {
  height: 100%;
}
.zone-container button:disabled:not(.btn-prev):not(.btn-next).ssc-btn-type-primary[data-v-ab94364a] {
  color: #FFF !important;
  background: #EE4D2D !important;
  opacity: 0.5;
}
.pagination-left-total[data-v-ab94364a] {
  display: flex;
  flex: 1;
}
.common-status[data-v-ab94364a] {
  line-height: 12px;
  font-weight: 500;
  padding: 3px 4px;
  border-radius: 2px;
  display: inline-block;
  white-space: nowrap;
}
.common-status.status-success[data-v-ab94364a] {
  background: #ECFFF1;
  color: #1CC461;
}
.common-status.status-disabled[data-v-ab94364a] {
  color: #646B76;
  background: #F5F6F9;
}
.common-status.status-info[data-v-ab94364a] {
  color: #3274F7;
  background: #F0F7FF;
}
.common-status.status-danger[data-v-ab94364a] {
  color: #F32345;
  background: #FFF0F0;
}
.common-status.status-warning[data-v-ab94364a] {
  background: #FFF8DB;
  color: #FFB014;
}
.common-divide[data-v-ab94364a] {
  height: 8px;
  background: #F5F6F9;
  margin: 0 -24px;
}
.ssc-scan-toast[data-v-ab94364a] {
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
.ssc-scan-toast.ssc-scan-toast-success[data-v-ab94364a] {
  animation-duration: 4.4s;
  animation-name: scanSuccessToast-ab94364a;
  background: #1CC461;
}
.ssc-scan-toast.ssc-scan-toast-fail[data-v-ab94364a] {
  background: #F32345;
  animation-duration: 8.4s;
  animation-name: scanFailToast-ab94364a;
}
.ssc-scan-toast.ssc-scan-toast-notice[data-v-ab94364a] {
  background: #FFA620;
  animation-duration: 6.4s;
  animation-name: scanFailToast-ab94364a;
}
.ssc-scan-toast .message-panel[data-v-ab94364a] {
  display: flex;
  width: 100%;
  align-items: center;
}
.ssc-scan-toast .message-panel .icon[data-v-ab94364a] {
  margin-right: 18px;
  width: 28px;
  height: 28px;
  flex-shrink: 0;
}
.ssc-scan-toast .message-panel .text[data-v-ab94364a] {
  display: inline-block;
}
@keyframes scanSuccessToast-ab94364a {
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
@keyframes scanFailToast-ab94364a {
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
.table-pagination[data-v-ab94364a] {
  height: 56px;
  border: 1px solid #ECF0F4;
  border-top: 0;
  justify-content: flex-end;
  padding-right: 16px;
}
.journey-type[data-v-ab94364a] {
  display: flex;
  align-items: center;
}
.journey-type .journey-type-dot[data-v-ab94364a] {
  width: 6px;
  height: 6px;
  border-radius: 50%;
  display: inline-block;
  margin-right: 8px;
}
.pagination-sticky-bottom[data-v-ab94364a] {
  background: #fff;
  position: sticky;
  bottom: 16px;
}
.pagination-sticky-bottom[data-v-ab94364a]:after {
  content: ' ';
  background: #fff;
  width: 100%;
  height: 16px;
  position: absolute;
}
.pagination-sticky-bottom[data-v-ab94364a] .ssc-pagination {
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
.pagination-sticky-bottom[data-v-ab94364a] .ssc-pagination .total-container {
  flex: 1;
  margin-left: 15px;
  margin-right: 12px;
}
.sp-card-log-list[data-v-ab94364a] {
  padding: 16px 24px;
  background: #fff;
  min-height: 100%;
}
.ssc-table-panel .ssc-form-item .ssc-form-item-content textarea[data-v-ab94364a],
.pro-filter .ssc-form-item .ssc-form-item-content textarea[data-v-ab94364a] {
  border: transparent;
}
.message-red-text[data-v-ab94364a] {
  color: #EE4D2D;
  font-weight: 700;
}
`,""]),p.exports=g},yzlX:(p,g,r)=>{"use strict";r.r(g),r.d(g,{default:()=>Po});var d=function(){var n=this,t=n._self._c;return t("div",[t("div",{directives:[{name:"loading",rawName:"v-loading",value:n.loading.page,expression:"loading.page"}],staticClass:"order-detail-wrapper"},[t("div",{staticClass:"order-info"},[t("keep-alive",[t("s-tabs",{attrs:{"bordered-pane":""},on:{"tab-click":n.handleTabChange,"page-before":n.tabPageBefore,"page-after":n.tabPageAfter},model:{value:n.activeInfoTab,callback:function(i){n.activeInfoTab=i},expression:"activeInfoTab"}},[n.isAgencyUser?n._e():t("s-tabs-pane",{key:"0",attrs:{label:n.$gt("Order Info"),name:"order_info"}},[n.activeInfoTab==="order_info"?t("order-info"):n._e()],1),n._v(" "),t("s-tabs-pane",{key:"1",attrs:{label:n.$gt("Receiver/Sender Info"),name:"sender_info"}},[n.activeInfoTab==="sender_info"?t("trade-info",{on:{showMap:n.onShowMap}}):n._e()],1),n._v(" "),t("s-tabs-pane",{key:"2",attrs:{label:n.$gt("Measurement Info"),name:"measurement_info"}},[n.activeInfoTab==="measurement_info"?t("Measurement",{attrs:{isOrderDetail:!0}}):n._e()],1),n._v(" "),t("s-tabs-pane",{key:"3",attrs:{label:n.$gt("Pickup Info"),name:"pickup_info"}},[n.activeInfoTab==="pickup_info"?t("pickup-info",{on:{showMap:n.onShowMap}}):n._e()],1),n._v(" "),n.isAgencyUser?n._e():t("s-tabs-pane",{key:"4",attrs:{label:n.$gt("Proof of Contact"),name:"proof_of_contact"}},[n.activeInfoTab==="proof_of_contact"?t("proof-of-contact"):n._e()],1),n._v(" "),n.isAgencyUser?n._e():t("s-tabs-pane",{key:"5",attrs:{label:n.$gt("Unsuccessful Log Info"),name:"unsuccessful_log_info"}},[n.activeInfoTab==="unsuccessful_log_info"?t("unsuccessful-log"):n._e()],1),n._v(" "),n.HAS_DELIVERY_INSTRUCTION||n.showProofOfDelivery||n.showProofOfOnHold?t("s-tabs-pane",{key:"6",attrs:{label:n.labelProofOfOnHoldOrDelivery,name:"proof_of_onhold"}},[n.activeInfoTab==="proof_of_onhold"?t("recipient-detail",{attrs:{showProofOfDelivery:n.showProofOfDelivery,showProofOfOnHold:n.showProofOfOnHold},on:{showMap:n.onShowMap}}):n._e()],1):n._e(),n._v(" "),n.showProofOfRejection?t("s-tabs-pane",{key:"8",attrs:{label:n.$gt("Proof of Rejection"),name:"proof_of_rejection"}},[n.activeInfoTab==="proof_of_rejection"?t("proof-of-rejection"):n._e()],1):n._e(),n._v(" "),n.showAbnormallyOrder?t("s-tabs-pane",{key:"9",attrs:{label:n.$gt("Abnormally Update"),name:"abnormally_update"}},[n.activeInfoTab==="abnormally_update"?t("AbnormallyUpdateOrderStatus"):n._e()],1):n._e(),n._v(" "),n.showProofOfReturn?t("s-tabs-pane",{key:"11",attrs:{label:n.$gt("Proof of Return"),name:"proof_of_return"}},[n.activeInfoTab==="proof_of_return"?t("recipient-detail",{attrs:{showProofOfReturn:n.showProofOfReturn},on:{showMap:n.onShowMap}}):n._e()],1):n._e(),n._v(" "),n.showProofOfReturnOnHold?t("s-tabs-pane",{key:"12",attrs:{label:n.$gt("Proof of Return on Hold"),name:"proof_of_return_on_hold"}},[n.activeInfoTab==="proof_of_return_on_hold"?t("recipient-detail",{attrs:{showProofOfReturnOnHold:n.showProofOfReturnOnHold},on:{showMap:n.onShowMap}}):n._e()],1):n._e(),n._v(" "),n.showReallocationHistory?t("s-tabs-pane",{key:"13",attrs:{name:"reallocation_history",label:n.$gt("Reallocation History")}},[n.activeInfoTab==="reallocation_history"?t("reallocation-history"):n._e()],1):n._e(),n._v(" "),n.hasTicketLogInfo&&!n.isAgencyUser?t("s-tabs-pane",{key:"14",attrs:{label:n.$gt("Ticket Log Info"),name:"ticket_log_info"}},[n.activeInfoTab==="ticket_log_info"?t("ticket-log-info"):n._e()],1):n._e(),n._v(" "),n.showServicePoint?t("s-tabs-pane",{key:"15",attrs:{label:n.$gt("Service Point Info"),name:"service_point_info"}},[n.activeInfoTab==="service_point_info"?t("service-point"):n._e()],1):n._e(),n._v(" "),n.showFinanceFeeInfo?t("s-tabs-pane",{key:"finance_fee_info",attrs:{label:n.$gt("Finance/Fee Info"),name:"finance_fee_info"}},[n.activeInfoTab==="finance_fee_info"?t("finance-fee-info"):n._e()],1):n._e()],1)],1)],1),n._v(" "),[t("order-history-tracking")],n._v(" "),t("map-dialog",{attrs:{location:n.location,visible:n.visible.map},on:{"update:visible":function(i){return n.$set(n.visible,"map",i)}}})],2)])},_=[],E=r("4d7F"),Y=r.n(E),Z=r("GQeE"),S=r.n(Z),z=r("14Xm"),u=r.n(z),w=r("D3Ub"),I=r("QbLZ"),$n=r("3XQO"),H=r.n($n),T=r("brkv"),bn=r("J/PD"),an=r.n(bn),Pn=r("YO3V"),fn=r.n(Pn),on=r("OV1j"),U=r("eCTY"),O=r("F5v2"),X=r("fdIW"),xn=r("leau"),y=r("GOkr"),M=r("Ke0q"),b=r("pqmQ"),q=r("1IiE"),un=r("UDpu"),Ln=function(){var n=this,t=n._self._c;return t("div",{directives:[{name:"loading",rawName:"v-loading",value:n.loading.page,expression:"loading.page"}]},[t("s-form",{ref:"financeInfo",staticClass:"order-basic-info",attrs:{"label-width":"180px"}},[n._l(n.renderSchema(n.schemaMap),function(a){return t("div",{key:a.key,staticClass:"fee-module"},[t("div",{staticClass:"category-title"},[n._v(`
        `+n._s(a.key)+`
        `),t("s-tag",{staticClass:"status-tag-icon",attrs:{type:a.status.style(),bold:""}},[n._v(n._s(a.status.render()))]),n._v(" "),t("div",{staticClass:"actions"},[a.showViewButton?t("s-button",{on:{click:n.handleViewClick}},[n._v(n._s(n.$gt("View")))]):n._e(),n._v(" "),a.showLogButton?t("s-button",{attrs:{type:"primary"},on:{click:function(o){return n.handleLogClick(a.key)}}},[n._v(n._s(n.$gt("Log")))]):n._e()],1)],1),n._v(" "),n._l(n.renderSchema(a.schema),function(i){return t("s-form-item",{key:i.key,scopedSlots:n._u([{key:"label",fn:function(){return[n._v(`
          `+n._s(i.label)+`
          `),i.tooltip?[t("s-popover",{attrs:{placement:"top"}},[t("span",[n._v(n._s(i.tooltip))]),n._v(" "),t("s-icon-help-outline",{staticClass:"label-icon",attrs:{slot:"reference"},slot:"reference"})],1),n._v(`
            :
          `)]:n._e()]},proxy:!0}],null,!0)},[n._v(" "),t("span",[n._v(n._s(i.render&&i.render()||"-"))])])})],2)})],2),n._v(" "),t("fee-info-log",{attrs:{show:n.visible.logInfo,title:n.title,"log-type":n.logType,"fee-data":n.logDetail},on:{"update:show":function(i){return n.$set(n.visible,"logInfo",i)}}})],1)},An=[],Rn=y.gY,_n=y.Sj||y.G,yn=y.YB||y.G||y.vh||y.qD||y.gY,zn=y.xN||y.fZ,Mn=y.xN||y.fZ||y.gY,en=r("z/YS"),K={ASF:4,COD:3,RSF:5},dn={COD:{Closed:"danger","Pending Approve":"warning","Pending Approval":"warning",Collected:"success"},ASF:{Collected:"success","ASF Collected":"success"},RSF:{Collected:"success","RSF Collected":"success"}},j=function(){var n=this,t=n._self._c;return t("s-dialog",{attrs:{title:n.title,visible:n.show,beforeClose:n.cancel,width:"800","append-to-body":!1,"show-confirm-button":!1,"show-cancel-button":!1}},[t("s-core",{directives:[{name:"loading",rawName:"v-loading",value:n.loading.list,expression:"loading.list"}],ref:"sCore",attrs:{config:n.config,search:n.loadTableData,"table-data":n.logList},scopedSlots:n._u([{key:"tabs",fn:function(){return[n.showFeeInfo?t("s-tabs",{model:{value:n.tabValue,callback:function(o){n.tabValue=o},expression:"tabValue"}},n._l(n.tabs,function(i){return t("s-tabs-pane",{key:i.value,attrs:{label:i.label,name:i.value}})}),1):n._e()]},proxy:!0},{key:"after-filter",fn:function(){return[n.showFormInfo?t("s-form",{attrs:{inline:!0}},n._l(n.codFromSchema,function(i){return t("s-form-item",{key:i.key,attrs:{label:i.label}},[n._v(`
          `+n._s(n.feeData[i.key]||"-")+`
        `)])}),1):n._e()]},proxy:!0},{key:"before-custom-actions",fn:function(){return[n.showFeeInfo?t("s-form",{attrs:{inline:!0,"label-width":"80px"}},n._l(n.feeInfoSchema,function(i){return t("s-form-item",{key:i.key,attrs:{label:i.label}},[n._v(`
          `+n._s(n.feeData[i.key]||"-")+`
        `)])}),1):n._e()]},proxy:!0}])})],1)},N=[],J=r("jo6Y"),hn=r("kvrn"),ln=r.n(hn),L=r("QsnJ"),D=r("4Jaa"),jn={ADMIN:{export:"ADMIN_COD_RECEIPT_TICKET_EXPORT",detail:"ADMIN_COD_RECEIPT_TICKET_DETAIL",approve:"ADMIN_COD_RECEIPT_TICKET_APPROVED"},HUB:{export:"HUB_COD_RECEIPT_TICKET_EXPORT",detail:"HUB_COD_RECEIPT_TICKET_DETAIL",approve:"HUB_COD_RECEIPT_TICKET_APPROVED"},DC:{export:"DC_FEE_RECEIPT_TICKET_EXPORT",detail:"DC_FEE_RECEIPT_TICKET_DETAIL",approve:"DC_FEE_RECEIPT_TICKET_APPROVE"},FM_HUB:{export:"FM_HUB_FEE_RECEIPT_TICKET_EXPORT",detail:"FM_HUB_FEE_RECEIPT_TICKET_DETAIL",approve:"FM_HUB_FEE_RECEIPT_TICKET_APPROVE"},MOBILE_HUB:{export:"HUB_COD_RECEIPT_TICKET_EXPORT",detail:"HUB_COD_RECEIPT_TICKET_DETAIL",approve:"HUB_COD_RECEIPT_TICKET_APPROVED"},OPERATOR_HUB:{export:"HUB_COD_RECEIPT_TICKET_EXPORT",detail:"HUB_COD_RECEIPT_TICKET_DETAIL",approve:"HUB_COD_RECEIPT_TICKET_APPROVED"}},Hn=jn[(0,M.n1)()]||{};const Bn=Hn;var sn={"Status Flow Log":"1","Calculation Log":"2"};const Un={name:"feeInfoDialog",props:{show:{type:Boolean,default:!1},feeData:{type:Object,default:function(){}},logType:{type:Number},title:{type:String,default:"Log"}},data:function(){return{tabValue:sn["Status Flow Log"],logList:{list:[],total:0},loading:{list:!1}}},computed:{showFormInfo:function(){return this.logType===K.COD},showFeeInfo:function(){return this.logType===K.ASF||this.logType===K.RSF},codFromSchema:function(){return[{label:this.$gt("COD Amount")+":",key:"cod_amount"},{label:this.$gt("COD Collection Method")+":",key:"cod_collection_method"},{label:this.$gt("COD Settlement Method")+":",key:"cod_settlement_method"}]},feeInfoSchema:function(){return this.logType===K.ASF?[{label:this.$gt("ASF")+":",key:"asf"},{label:this.$gt("3PL ASF")+":",key:"asf_3pl"}]:this.logType===K.RSF?[{label:this.$gt("RSF")+":",key:"rsf"}]:[]},tabs:function(){return[{label:this.$gt("Status Flow Log"),value:sn["Status Flow Log"]}]},tableColumn:function(){var n=this,t=this.$createElement,a={label:this.$gt("Operate Time"),key:"operate_time",width:150,render:function(m,h){return(0,D.WU)(h)}},i={label:this.$gt("Message"),key:"message",width:180,render:function(m,h){var F=h,x=h.match(/\[(.*)]/);if(x){var A=h.replace(/\[.*]/,""),v=x.pop();if(v){var G=t("a",ln()([{class:"ticket-href"},{on:{click:function(k){for(var tn=arguments.length,W=Array(tn>1?tn-1:0),R=1;R<tn;R++)W[R-1]=arguments[R];(function(){return n.handleTicketClick(v)}).apply(void 0,[k].concat(W))}}}]),["[",v,"]"]);F=t("span",[A," ",G])}}return t("p",{class:"message-text"},[F])}},o={label:this.$gt("Operator"),key:"operator",width:180},l={label:this.$gt("COD Status"),key:"business_status_text",width:150,render:function(m,h){return n.renderStatusTag(h,"COD")}},s={label:this.$gt("ASF Status"),key:"business_status_text",width:150,render:function(m,h){return n.renderStatusTag(h,"ASF")}},c={label:this.$gt("RSF Status"),key:"business_status_text",width:150,render:function(m,h){return n.renderStatusTag(h,"RSF")}};switch(this.logType){case K.COD:return[a,l,i,o];case K.ASF:return this.tabValue===sn["Status Flow Log"]?[a,s,i,o]:[];case K.RSF:return this.tabValue===sn["Status Flow Log"]?[a,c,i,o]:[];default:return[]}},config:function(){return{table:{width:650,columns:this.tableColumn}}}},watch:{show:function(n){n&&this.loadTableData()},tabValue:function(){}},methods:{loadTableData:function(){var e=(0,w.Z)(u().mark(function t(){var a=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},i,o,l,s,c,f,m,h,F,x;return u().wrap(function(v){for(;;)switch(v.prev=v.next){case 0:return v.prev=0,(0,b.K4)(this,"list",!0),i=a.pageno,o=i===void 0?1:i,l=a.count,s=l===void 0?this.logList.count||L.L8:l,a.business_type=this.logType,a.business_id=this.feeData.shipmentId,v.next=7,O.UM.loadFinanceFeeLog(a);case 7:c=v.sent,f=c.data,m=f.total,h=f.tracking_list,F=h===void 0?[]:h,x=(0,J.Z)(f,["total","tracking_list"]),this.logList=(0,I.Z)({},x,{list:F,total:m,pageno:o,count:s}),v.next=16;break;case 13:v.prev=13,v.t0=v.catch(0),console.error("Load log data error: ",v.t0);case 16:return v.prev=16,(0,b.K4)(this,"list",!1),v.finish(16);case 19:case"end":return v.stop()}},t,this,[[0,13,16,19]])}));function n(){return e.apply(this,arguments)}return n}(),handleTicketClick:function(n){if(!(0,b.wD)(this.$store,Bn.detail))return this.$message.error("No permissions for ticket detail."),!1;var t="/shippingFeeReceiptTicket/detail/";en.R.call(this,""+t+n)},renderStatusTag:function(n,t){var a=this.$createElement,i=dn[t][n]||"default";return a("s-tag",{class:"status-tag-icon",attrs:{type:i,bold:!0}},[n||"-"])},cancel:function(){this.tabValue=sn["Status Flow Log"],this.logList={list:[],total:0},this.$emit("update:show",!1)}}};var wn=r("di7K"),C=r("KHd+"),Fn=(0,C.Z)(Un,j,N,!1,null,"5c681033",null);const mn={name:"financeFeeInfo",components:{feeInfoLog:Fn.exports},inject:["orderDetail"],data:function(){return{tabData:{},visible:{logInfo:!1},loading:{page:!1},logType:0,title:""}},computed:(0,I.Z)({},(0,U.mapState)({paymentRole:function(n){return(0,T.invert)(n.enums.systemEnums.payment_role)||{}}}),{orderId:function(){var n=this.orderDetail.orderId,t=n===void 0?"":n;return(0,q.Y8)(t)},rsfInfo:function(){return this.tabData.rsf_info||{}},asfInfo:function(){return this.tabData.asf_info||{}},codInfo:function(){return this.tabData.cod_info||{}},paymentInfo:function(){return this.tabData.payment_info||{}},isCOD:function(){return this.paymentInfo.payment_method==="COD"},isOpenTicket:function(){return this.paymentInfo.order_account===12},isCycleTicket:function(){return this.paymentInfo.payment_method_forward===2},asfFee:function(){return this.asfInfo.rounding_shipment_pricing?this.asfInfo.rounding_shipment_pricing:this.asfInfo.shipment_pricing},rsfFee:function(){var n=this.handleFinanceValue(this.rsfInfo.fee_amount);return this.appendFeeWithCurrency(n)},codShowViewButton:function(){return!(0,M.GJ)()||!this.isCOD?!1:["Delivered","Collected Hub","Pending Approve","Collected"].includes(this.codInfo.status_text)},asfShowPaymentMethod:function(){return this.isOpenTicket&&Mn},logDetail:function(){return{shipmentId:this.orderId,cod_amount:this.appendFeeWithCurrency(this.codInfo.cod_amount),cod_collection_method:this.codInfo.collect_method_text,cod_settlement_method:this.codInfo.settle_method_text,asf:this.appendFeeWithCurrency(this.asfFee),asf_3pl:this.appendFeeWithCurrency(this.asfInfo.third_party_shipping_fee),rsf:this.rsfFee}},showFinanceTooltip:function(){return y.fZ&&this.isOpenTicket},codFormSchemas:function(){var n=this;return[{label:this.$gt("Payment Method")+":",key:"payment_method",render:function(){return n.paymentInfo.payment_method}},{label:this.$gt("COD Amount")+":",key:"cod_amount",render:function(){return n.isCOD?n.appendFeeWithCurrency(n.codInfo.cod_amount):"-"}},{label:this.$gt("COD Collection Method")+":",key:"cod_collection_method",render:function(){return n.codInfo.collect_method_text}},{label:this.$gt("COD Settlement Method")+":",key:"cod_settlement_method",render:function(){return n.codInfo.settle_method_text}}]},asfFormSchemas:function(){var n=this;return[{label:this.$gt("ASF")+":",key:"asf",render:function(){return n.appendFeeWithCurrency(n.asfFee)}},{label:this.$gt("3PL ASF")+":",key:"asf_3pl",render:function(){return n.appendFeeWithCurrency(n.asfInfo.third_party_shipping_fee)}},{label:this.$gt("Basic Shipping Fee")+":",key:"basic_shipping_fee",hide:this.showFinanceTooltip,render:function(){return n.appendFeeWithCurrency(n.asfInfo.basic_shipping_fee)}},{label:this.$gt("Basic Shipping Fee"),key:"basic_shipping_fee",hide:!this.showFinanceTooltip,tooltip:this.$gt("BSF includes discount amount from rate card's discount rule if applicable Always show for NSS orders"),render:function(){return n.appendFeeWithCurrency(n.asfInfo.basic_shipping_fee)}},{label:this.$gt("Insurance Fee")+":",key:"insurance_fee",render:function(){return n.appendFeeWithCurrency(n.asfInfo.insurance_fee)}},{label:this.$gt("COD Service Fee")+":",key:"cod_service_fee",render:function(){return n.appendFeeWithCurrency(n.codInfo.cod_fee)}},{label:this.$gt("Remote Area Fee")+":",key:"Remote Area Fee",render:function(){return n.appendFeeWithCurrency(n.asfInfo.remote_area_fee)}},{label:this.$gt("ASF Payment Role/Cycle")+":",key:"asf_payment_role_cycle",hide:!this.asfShowPaymentMethod,render:function(){return n.getPaymentRoleAndCycle(K.ASF)}},{label:this.$gt("ASF Collection Method")+":",key:"asf_collection_method",hide:!this.asfShowPaymentMethod,render:function(){return n.asfInfo.collect_method_text}},{label:this.$gt("ASF Settlement Method")+":",key:"asf_settlement_method",hide:!this.asfShowPaymentMethod,render:function(){return n.asfInfo.settle_method_text}}]},rsfFormSchemas:function(){var n=this;return[{label:this.$gt("RSF")+":",key:"rsf_fee_amount",render:function(){return n.rsfFee}},{label:this.$gt("RSF Payment Role/Cycle")+":",key:"rsf_payment_role_cycle",render:function(){return n.getPaymentRoleAndCycle(K.RSF)}},{label:this.$gt("RSF Collection Method")+":",key:"rsf_collection_method",render:function(){return n.rsfInfo.collect_method_text}},{label:this.$gt("RSF Settlement Method")+":",key:"rsf_settlement_method",render:function(){return n.rsfInfo.settle_method_text}}]},schemaMap:function(){var n=this;return[{key:"COD",hide:Rn,schema:this.codFormSchemas,showViewButton:this.codShowViewButton,showLogButton:this.isCOD,status:{key:"cod_status",style:function(){return dn.COD[n.codInfo.status_text]||"default"},render:function(){return n.codInfo.status_text||"-"}}},{key:"ASF",schema:this.asfFormSchemas,showViewButton:(0,M.GJ)()&&this.showButton(this.asfInfo,"status_text"),showLogButton:this.showButton(this.asfInfo,"status_text"),status:{key:"asf_status",style:function(){return dn.ASF[n.asfInfo.status_text]||"default"},render:function(){return n.asfInfo.status_text||"-"}}},{key:"RSF",schema:this.rsfFormSchemas,showViewButton:(0,M.GJ)()&&this.showButton(this.rsfInfo,"status_text"),showLogButton:this.showButton(this.rsfInfo,"status_text"),status:{key:"rsf_status",style:function(){return dn.RSF[n.rsfInfo.status_text]||"default"},render:function(){return n.rsfInfo.status_text||"-"}}}]}}),watch:{orderId:{handler:function(){this.loadData()},immediate:!0}},methods:{renderSchema:function(n){return n.filter(function(t){return!t.hide})},showButton:function(n,t){return!this.isOpenTicket||this.isOpenTicket&&this.isCycleTicket?!1:["Pending Collect","3PL Partially Collect","Pending Approval","Collected"].includes(n[t])},getPaymentRoleAndCycle:function(n){var t=this.paymentInfo,a=t.payment_role,i=t.payment_method_forward,o={1:this.$gt("Pay By Order"),2:this.$gt("Pay By Cycle")};return!this.paymentRole[a]||!o[i]?"-":n===K.RSF?"Sender Pay / "+o[i]:this.paymentRole[a]+" Pay / "+o[i]},appendFeeWithCurrency:function(n){return(0,T.isNil)(n)?"-":n+" "+y.oq},handleFinanceValue:function(n){if((0,T.isNumber)(n))return n/1e5;var t=Number(n);return isNaN(t)?n:t/1e5},handleViewClick:function(){var n="?shipment_id="+this.orderId,t="";yn&&(t="/financialMgtOrder"),zn&&(t="/shippingFeeCollection/orderModule"),t?en.R.call(this,""+t+n):this.$message.error("Not support to view Fee Collection.")},handleLogClick:function(n){this.logType=K[n],this.title=this.$gt("{logType} Log",null,{logType:n}),this.visible.logInfo=!0},loadData:function(){var e=(0,w.Z)(u().mark(function t(){var a,i,o,l;return u().wrap(function(c){for(;;)switch(c.prev=c.next){case 0:return c.prev=0,(0,b.K4)(this,"page",!0),a={shipment_id:this.orderId,station_type:(0,M.VG)()},c.next=5,O.UM.loadFinanceInfo(a);case 5:i=c.sent,o=i.data,l=o===void 0?{}:o,this.tabData=l,c.next=14;break;case 11:c.prev=11,c.t0=c.catch(0),console.error("Load basic info data error, ",c.t0);case 14:return c.prev=14,(0,b.K4)(this,"page",!1),c.finish(14);case 17:case"end":return c.stop()}},t,this,[[0,11,14,17]])}));function n(){return e.apply(this,arguments)}return n}()}};var Xn=r("cHWL"),bt=(0,C.Z)(mn,Ln,An,!1,null,"2ea19db0",null);const xt=bt.exports;var _t=function(){var n=this,t=n._self._c;return t("s-form",{directives:[{name:"loading",rawName:"v-loading",value:n.loading.page,expression:"loading.page"}],staticClass:"order-basic-info",attrs:{"label-width":"80px"}},[t("div",{staticClass:"category-title"},[n._v(n._s(n.$gt("Abnormally Update Record"))+" ("+n._s(n.updateData.length)+")")]),n._v(" "),t("s-tabs",{attrs:{type:"pane-card"},model:{value:n.curShowAbnormallyOrder,callback:function(i){n.curShowAbnormallyOrder=i},expression:"curShowAbnormallyOrder"}},n._l(n.updateData,function(a,i){return t("s-tab-pane",{key:i,attrs:{name:""+i,label:n.$gt("Record")+" "+(n.updateData.length-i)}},[t("UpdateOneAbnormalOrder",{attrs:{schema:n.orderStatusSchema,orderData:a}})],1)}),1)],1)},yt=[],B=r("EA14"),qn=r("DxUY"),wt=function(){var n=this,t=n._self._c;return t("div",[n.isEditMode?n._e():t("s-button",{staticClass:"edit-btn",attrs:{size:"small",type:"primary"},on:{click:function(){return n.isEditMode=!0}}},[n._v(`
    `+n._s(n.$gt("Edit"))+`
  `)]),n._v(" "),t("s-form-item",{attrs:{label:n.$gt("Update Time")+":"}},[n._v(`
    `+n._s(n.format(n.orderData.ctime))+`
  `)]),n._v(" "),t("s-form-item",{attrs:{label:n.$gt("Update Order Status to")+":"}},[n._v(`
    `+n._s(n.statusName)+`
  `)]),n._v(" "),t("s-form-item",{attrs:{label:n.$gt("Operator")+":"}},[n._v(`
    `+n._s(n.orderData.operator)+`
  `)]),n._v(" "),n.showStaff?t("s-form-item",{staticClass:"full-length-textarea",attrs:{label:n.staff.label+":"}},[n.isEditMode?t("s-textarea",{attrs:{maxlength:n.staff.inputMaxLength,resize:"vertical",rows:3},model:{value:n.formData.staff,callback:function(i){n.$set(n.formData,"staff",typeof i=="string"?i.trim():i)},expression:"formData.staff"}}):t("span",[n._v(n._s(n.orderData.staff))])],1):n._e(),n._v(" "),t("s-form-item",{staticClass:"full-length-textarea",attrs:{label:n.$gt("Remark")+":"}},[n.isEditMode?t("s-textarea",{attrs:{maxlength:n.input.inputMaxLength,resize:"vertical",rows:3},model:{value:n.formData.input,callback:function(i){n.$set(n.formData,"input",typeof i=="string"?i.trim():i)},expression:"formData.input"}}):t("span",[n._v(n._s(n.remarkText))])],1),n._v(" "),n.showOtherRemark?t("s-form-item",[t("span",{staticClass:"empty-remark"},[n._v(n._s(n.orderData.remark))])]):n._e(),n._v(" "),n.showPhoto?t("s-form-item",{attrs:{label:n.$gt("Photo")+":"}},[n.isEditMode?t("s-upload",{attrs:{multiple:"",limit:n.photo.uploadLimit||3,action:n.photo.uploadImageAPI,"list-type":"picture-card",name:"image","on-exceed":n.fileExceed,"on-success":n.uploadSuccess,"on-error":n.uploadError,"on-remove":n.removeFile,"with-credentials":!0,"file-list":n.fileList,"before-upload":n.beforeAvatarUpload,tip:n.$gt("File: jpg, png, gif;  Numbers: 3.")}}):n._l(n.orderData.photo_list,function(a,i){return t("spx-shared-image-resizer",{key:i,attrs:{src:n.getFullPath(a),"thumbnail-size":[80,80],concise:"","thumbnail-margins":"0 16px 0 0"}})})],2):n._e(),n._v(" "),n.isEditMode?t("s-form-item",{staticStyle:{"margin-top":"24px"},attrs:{label:" "}},[t("s-button",{staticStyle:{"margin-right":"16px"},attrs:{loading:n.loading.submit},on:{click:n.handleCancel}},[n._v(n._s(n.$gt("Cancel")))]),n._v(" "),t("s-button",{attrs:{type:"primary",loading:n.loading.submit},on:{click:n.handleSave}},[n._v(n._s(n.$gt("Save")))])],1):n._e()],1)},Ft=[],kt=r("/f1G"),Zn=r.n(kt),nn=r("m1cH"),Dt=r("jWXv"),Et=r.n(Dt),It=new(Et())(["image/jpeg","image/png","image/gif"]);const Ct={props:{schema:{type:Object,default:function(){}},orderData:{type:Object,default:function(){}}},data:function(){return{format:D.WU,formData:{},isEditMode:!1,loading:{submit:!1},urlList:[],cancelConfirmVisible:!1,saveConfirmVisible:!1}},computed:(0,I.Z)({},(0,U.mapState)({orderStatusMap:function(n){return an()(n.enums.systemEnums.fleet_order_status)},lostRemarkMap:function(n){return n.enums.systemEnums.lost},damageRemarkMap:function(n){return n.enums.systemEnums.damage}}),{photo:function(){return this.schema.photo||{}},input:function(){return this.schema.input||{}},staff:function(){var n=(0,I.Z)({},this.schema.staff,{visible:this.showStaff,label:this.schema.staff.label+" "+this.statusName});return n},options:function(){return this.schema.options||{}},cancelConfirmMessage:function(){return this.options.cancelInnerDialog.message},saveConfirmMessage:function(){return this.options.saveInnerDialog.message},statusName:function(){var n=this.orderData.new_status;return(0,b.BK)(this.$store,"state.enums.systemEnums.fleet_order_status",n,y.F)},showStaff:function(){return["Damaged","Lost"].includes(this.statusName)},showPhoto:function(){var n=this.orderData.photo_list;return Array.isArray(n)&&n.length>0},fileList:function(){return this.orderData&&this.orderData.photo_list.map(function(n){return{url:""+B.v+n,name:n}})},showOtherRemark:function(){var n=[].concat((0,nn.Z)(Zn()(this.lostRemarkMap)),(0,nn.Z)(Zn()(this.damageRemarkMap))),t=[L.EB.lost,L.EB.damage],a=this.orderData.new_status;return!!(this.orderData.remark&&t.includes(a)&&!n.includes(this.orderData.remark)&&!this.isEditMode)},remarkText:function(){var n=this,t=function(i,o){return(0,b.BK)(n.$store.state.enums.systemEnums,i,o,y.F)};return this.orderData.new_status===L.EB.lost?this.showOtherRemark?t("lost","Others"):t("lost",this.orderData.remark):this.orderData.new_status===L.EB.damage?this.showOtherRemark?t("damage","Others"):t("damage",this.orderData.remark):this.orderData.remark}}),watch:{orderData:function(n){var t=n||{},a=t.remark,i=t.staff,o=t.photo_list,l=o===void 0?[]:o;this.formData={input:a,staff:i},this.urlList=[].concat((0,nn.Z)(l))}},created:function(){this.formData={input:this.orderData.remark,staff:this.orderData.staff}},methods:{getFullPath:function(n){return""+B.v+n},beforeAvatarUpload:function(n){var t=It.has(n.type);return t||this.$message.warning("Please upload the photo in GIF\uFF0FPNG\uFF0FJPEG format"),t},handleCancel:function(){var e=(0,w.Z)(u().mark(function t(){return u().wrap(function(i){for(;;)switch(i.prev=i.next){case 0:return i.prev=0,i.next=3,this.$confirm(this.cancelConfirmMessage);case 3:this.isEditMode=!1,i.next=10;break;case 6:return i.prev=6,i.t0=i.catch(0),console.error("Revoked cancel update order."),i.abrupt("return");case 10:case"end":return i.stop()}},t,this,[[0,6]])}));function n(){return e.apply(this,arguments)}return n}(),handleSave:function(){var e=(0,w.Z)(u().mark(function t(){var a;return u().wrap(function(o){for(;;)switch(o.prev=o.next){case 0:return o.prev=0,o.next=3,this.$confirm(this.saveConfirmMessage);case 3:o.next=9;break;case 5:return o.prev=5,o.t0=o.catch(0),console.error("Revoked save update order."),o.abrupt("return");case 9:if(a=(0,I.Z)({},this.formData,{record_id:this.orderData.record_id,photo_list:this.urlList.join(",")}),this.verifyParams(a)){o.next=12;break}return o.abrupt("return");case 12:return o.prev=12,(0,b.K4)(this,"submit",!0),o.next=16,this.options.saveRequest(a);case 16:this.isEditMode=!1,o.next=22;break;case 19:o.prev=19,o.t1=o.catch(12),console.error(this.options.title+" : "+o.t1.message);case 22:return o.prev=22,(0,b.K4)(this,"submit",!1),o.finish(22);case 25:case"end":return o.stop()}},t,this,[[0,5],[12,19,22,25]])}));function n(){return e.apply(this,arguments)}return n}(),removeFile:function(n,t){this.urlList=this.getFileUrlList(t)},fileExceed:function(){return this.$message.warning("Max "+(this.photo.uploadLimit||3)+" photos"),!0},uploadSuccess:function(n){n.retcode===0?this.urlList.push(n.data.url):this.$message.error("Upload Error: (Code: "+n.retcode+") "+n.message)},uploadError:function(n){this.$message.error("Upload Error: "+n.message),console.error("Upload Error: ",n)},verifyParams:function(n){var t=this.options.verifyParams;return t?t.call(this,n):!0},getFileUrlList:function(n){return n.map(function(t){var a=t.response,i=t.name;return a?a.data.url:i})}}};var Ao=r("wdLK"),Ro=r("IRMP"),St=(0,C.Z)(Ct,wt,Ft,!1,null,"0b67ce62",null);const Tt={components:{UpdateOneAbnormalOrder:St.exports},inject:["orderDetail"],data:function(){return{tabData:{},orderStatusSchema:{photo:{label:"Photo",uploadImageAPI:""+B.v+qn.sC,uploadLimit:3},input:{label:"Remark",inputMaxLength:300},staff:{label:"Staff Who Cause",inputMaxLength:256},options:{title:"Abnormally Update Order Status",saveRequest:this.updateAbnormallyStatusWrapper,cancelInnerDialog:{message:"Are you sure to cancel updating order status?"},saveInnerDialog:{message:"Are you sure to update order status?"}}},loading:{page:!1},curShowAbnormallyOrder:"0"}},computed:{orderId:function(){var n=this.orderDetail.orderId,t=n===void 0?"":n;return(0,q.Y8)(t)},updateData:function(){return this.tabData.abnormally_order_list||[]}},watch:{orderId:{handler:function(){this.loadData()},immediate:!0}},methods:{updateAbnormallyStatusWrapper:function(){var e=(0,w.Z)(u().mark(function t(a){var i,o,l,s,c,f,m,h;return u().wrap(function(x){for(;;)switch(x.prev=x.next){case 0:return i=a.photo_list,o=a.input,l=a.staff,s=a.record_id,c={photo_list:i,staff:l,remark:o,record_id:s},x.prev=2,x.next=5,(0,qn.CU)((0,b.Lt)(c),(0,M.n1)().toLowerCase());case 5:f=x.sent,m=f.retcode,h=f.message,m!==0?this.$message.error(h):this.$message.success(L.Lz.base),this.loadData(),x.next=15;break;case 12:x.prev=12,x.t0=x.catch(2),console.error("Failed to update abnormally status.",x.t0);case 15:case"end":return x.stop()}},t,this,[[2,12]])}));function n(t){return e.apply(this,arguments)}return n}(),loadData:function(){var e=(0,w.Z)(u().mark(function t(){var a,i,o;return u().wrap(function(s){for(;;)switch(s.prev=s.next){case 0:return s.prev=0,(0,b.K4)(this,"page",!0),a={shipment_id:this.orderId,station_type:(0,M.VG)()},s.next=5,O.UM.loadAbnormallyUpdateInfo(a);case 5:i=s.sent,o=i.data,this.tabData=o,s.next=13;break;case 10:s.prev=10,s.t0=s.catch(0),console.error("Load Abnormally update data error, ",s.t0);case 13:return s.prev=13,(0,b.K4)(this,"page",!1),s.finish(13);case 16:case"end":return s.stop()}},t,this,[[0,10,13,16]])}));function n(){return e.apply(this,arguments)}return n}()}};var Ot=(0,C.Z)(Tt,_t,yt,!1,null,null,null);const $t=Ot.exports;var nt={1:"primary",2:"danger",3:"success",4:"danger"},Pt={pickup_info:"agency_pickup_assignment_view_pickup_info_tab",sender_info:"agency_pickup_assignment_view_sender_info_tab",measurement_info:"agency_pickup_assignment_view_measurement_info_tab"},Lt={FORWARD:1,RETURN:2,DISPOSAL:3},At={DISPOSAL:1,LIQUIDATE:2},Rt=function(){var n=this,t=n._self._c;return t("s-form",{directives:[{name:"loading",rawName:"v-loading",value:n.loading.page,expression:"loading.page"}],staticClass:"order-basic-info",attrs:{"label-width":"180px"}},[t("s-form-item",{attrs:{label:n.$gt("Chargeable Weight (kg)")+":"}},[n._v(`
    `+n._s(n._f("formatFixedPointStr")(n.tabData.chargeable_weight))+`
  `)]),n._v(" "),t("s-form-item",{attrs:{label:n.$gt("3PL Chargeable Weight (kg)")+":"}},[n._v(`
    `+n._s(n._f("formatFixedPointStr")(n.tabData.third_party_chargeable_weight))+`
  `)]),n._v(" "),[t("div",{staticClass:"measurement-info-header"},[t("div",{staticClass:"category-title"},[n._v(n._s(n.$gt("Measurement Detail")))]),n._v(" "),t("s-button",{on:{click:n.showMeasurementLogDialog}},[n._v(n._s(n.$gt("Log")))])],1),n._v(" "),t("s-table",{directives:[{name:"loading",rawName:"v-loading",value:n.loading.checkEdit,expression:"loading.checkEdit"}],attrs:{data:n.measureTableData}},[t("s-table-column",{attrs:{label:n.$gt("Source"),prop:"source",width:160},scopedSlots:n._u([{key:"default",fn:function(i){return[n._v(`
          `+n._s(i.row.source.text)+`
          `),i.row.source.content?t("s-popover",{attrs:{content:i.row.source.content}},[t("s-icon-help-outline",{staticClass:"help-icon",attrs:{slot:"reference"},slot:"reference"})],1):n._e()]}}])}),n._v(" "),n._l(n.measurementInfoSchemas,function(a,i){return t("s-table-column",{key:i,attrs:{label:a.label,prop:a.key}})}),n._v(" "),t("s-table-column",{attrs:{label:n.$gt("Action"),width:60},scopedSlots:n._u([{key:"default",fn:function(i){return[i.row.showAction&&n.hasEditMeasurementButton?t("s-button",{attrs:{type:"text"},on:{click:n.checkEditMeasurement}},[n._v(`
            `+n._s(n.$gt("Edit"))+`
          `)]):n._e()]}}])})],2),n._v(" "),t("s-dialog",{attrs:{title:n.$gt("Edit"),visible:n.editMode,"append-to-body":!1,"handle-cancel":n.cancelEdit,"handle-confirm":n.submitEdit,confirmLoading:n.loading.updatingMeasurement,"confirm-button-text":n.$gt("OK"),"cancel-button-text":n.$gt("Cancel"),"show-default-footer":!0},on:{"update:visible":function(i){n.editMode=i}}},[t("s-form-item",{attrs:{label:n.$gt("Weight")+" (kg):"}},[t("s-input-number",{attrs:{precision:3,step:.001},model:{value:n.form.weight,callback:function(i){n.$set(n.form,"weight",i)},expression:"form.weight"}})],1),n._v(" "),t("s-form-item",{attrs:{label:n.$gt("Length")+" (cm):"}},[t("s-input-number",{model:{value:n.form.length,callback:function(i){n.$set(n.form,"length",i)},expression:"form.length"}})],1),n._v(" "),t("s-form-item",{attrs:{label:n.$gt("Width")+" (cm):"}},[t("s-input-number",{model:{value:n.form.width,callback:function(i){n.$set(n.form,"width",i)},expression:"form.width"}})],1),n._v(" "),t("s-form-item",{attrs:{label:n.$gt("Height")+" (cm):"}},[t("s-input-number",{model:{value:n.form.height,callback:function(i){n.$set(n.form,"height",i)},expression:"form.height"}})],1),n._v(" "),t("s-form-item",{attrs:{label:" "}},[t("span",{staticClass:"notice-line"},[n._v(`
          `+n._s(n.$t(n.ReArrangedDimensionNotice))+`
        `)])])],1),n._v(" "),n.visible.measurementLogDialog?t("MeasurementInfoLog",{attrs:{visible:n.visible.measurementLogDialog,shipmentId:n.orderId},on:{"update:visible":function(i){return n.$set(n.visible,"measurementLogDialog",i)}}}):n._e()]],2)},zt=[],rn=r("YEIV"),Mt=r("E+oP"),jt=r.n(Mt),Q=r("bzSh"),cn="/api/admin/measure_rule",tt="/api/admin/transport/measure_rule";const Ht={checkPackageIllegal:function(n){return B.Z.post("/api/admin/packaging/config/illegal",n)},checkShouldShowPopupWindow:function(n){return B.Z.post(tt+"/popup_switch/check",n)},createWeightDimensionRule:function(n){return B.Z.post(cn+"/create",n)},dcReceiveFromFmHubByOrderCheckShouldShowPopupWindow:function(n){return B.Z.post(tt+"/popup_switch/pickup_to/check",n)},defaultWeightDimensionRuleDetail:function(n){return B.Z.get(cn+"/default/detail",{params:n})},exportWeightDimensionRule:function(n){return B.Z.get(cn+"/export",{params:n})},loadAllASMList:function(n){return B.Z.get("/api/admin/asm/asm_account/machine_list",{params:n})},updateWeightDimensionRule:function(n){return B.Z.post(cn+"/update",n)},validateWeightDimensionData:function(n){return B.Z.post(cn+"/data/validate",n)},weightDimensionRuleDetail:function(n){return B.Z.get(cn+"/detail",{params:n})}};var $=r("KVpu"),Vn=r("EfbZ"),Bt=y.xN||y.gY,jo=null,Ut=y.gY,Nt=y.G7,Zt=y.G7,Vt=y.G7,Gt=y.gY,at=y.xN||y.fZ,Wt=y.G7,Gn=y.gY||y.qD,Kt=y.Sj||y.G,Yt=function(){var n=this,t=n._self._c;return t("s-dialog",{attrs:{visible:n.visible,title:n.$gt("Log Detail"),"show-deafult-footer":!1,"before-close":n.closeDialog,width:"920px"},on:{"update:visible":function(i){n.visible=i}}},[t("s-core",{directives:[{name:"loading",rawName:"v-loading",value:n.loading.list,expression:"loading.list"}],ref:"sCore",attrs:{config:n.config,tableData:n.tableData,search:n.onSearch},scopedSlots:n._u([{key:"tableColumns",fn:function(){return[t("s-table-column",{attrs:{label:n.$gt("Update Time"),width:100,prop:"operate_time"},scopedSlots:n._u([{key:"default",fn:function(o){return[t("div",[n._v(n._s(n.formatUpdateTime(o.row.operate_time)))])]}}])}),n._v(" "),t("s-table-column",{attrs:{label:n.$gt("Updated Measurement Info"),width:120}},[t("s-table-column",{attrs:{prop:"weight",label:n.$gt("Weight(Kg)"),width:60},scopedSlots:n._u([{key:"default",fn:function(o){return[t("div",[n._v(n._s(n.formatWeight(o.row.weight)))])]}}])}),n._v(" "),t("s-table-column",{attrs:{prop:"length",label:n.$gt("Length(cm)"),width:60}}),n._v(" "),t("s-table-column",{attrs:{prop:"width",label:n.$gt("Width(cm)"),width:60}}),n._v(" "),t("s-table-column",{attrs:{prop:"height",label:n.$gt("Height(cm)"),width:60}})],1),n._v(" "),t("s-table-column",{attrs:{prop:"scene_name",label:n.$gt("Source"),width:60}}),n._v(" "),t("s-table-column",{attrs:{prop:"operator",label:n.$gt("Operator"),width:60}}),n._v(" "),t("s-table-column",{attrs:{prop:"op_station_name",label:n.$gt("Station"),width:60}})]},proxy:!0}])})],1)},Jt=[],Qt=r("ynzF");const Xt={props:{visible:{type:Boolean,default:!1},shipmentId:{type:String}},inject:["orderDetail"],data:function(){return{tableData:{list:[],total:0},config:{table:{width:1e3,actionsWidth:160,columns:[],showTotal:!0,props:{border:!0}}},loading:{list:!1}}},created:function(){var e=(0,w.Z)(u().mark(function t(){return u().wrap(function(i){for(;;)switch(i.prev=i.next){case 0:return i.next=2,this.onSearch();case 2:case"end":return i.stop()}},t,this)}));function n(){return e.apply(this,arguments)}return n}(),methods:{formatUpdateTime:function(n){return n?(0,D.IV)(n):"-"},onSearch:function(){var e=(0,w.Z)(u().mark(function t(){var a=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},i,o,l,s,c,f;return u().wrap(function(h){for(;;)switch(h.prev=h.next){case 0:return h.prev=0,a.pageno=a.pageno||1,a.count=a.count||L.L8,a.shipment_id=this.shipmentId,(0,b.K4)(this,"list",!0),h.next=7,Qt.Z.getMeasurementInfoLog(a);case 7:i=h.sent,o=i.data,l=o.list,s=l===void 0?[]:l,c=o.total,f=c===void 0?0:c,this.tableData={list:s,total:f},h.next=19;break;case 16:h.prev=16,h.t0=h.catch(0),console.error("get measuement log error",h.t0);case 19:return h.prev=19,(0,b.K4)(this,"list",!1),h.finish(19);case 22:case"end":return h.stop()}},t,this,[[0,16,19,22]])}));function n(){return e.apply(this,arguments)}return n}(),closeDialog:function(){this.$emit("update:visible",!1)},formatWeight:function(n){var t=(n||0)/1e3;return t.toFixed(3)}}};var Bo=r("wv2g"),qt=(0,C.Z)(Xt,Yt,Jt,!1,null,"0a42f03d",null);const na=qt.exports;var ta={whs:"WHS",sp:"Service Point",asm:"ASM",manual:"Manual",pickup:"Driver",sls:"Seller Center",tws:"TWS","3pl":"3PL",opsInfo:"Station Ops"};const aa={filters:{formatFixedPointStr:Vn.T,dataFilter:function(n){return n===void 0?"-":n+""}},components:{MeasurementInfoLog:na},inject:["orderDetail"],data:function(){return{ReArrangedDimensionNotice:L.VM,editMode:!1,form:{},tabData:{},errorMsg:{},weightDimensionRule:{},loading:{page:!1,checkEdit:!1,updatingMeasurement:!1},visible:{measurementLogDialog:!1},measureInfo:[],standardMeasureInfo:{},measurementFormData:{}}},computed:(0,I.Z)({},(0,U.mapState)({exceedSwitchEnums:function(n){return n.enums.systemEnums.measure_rule_config.exceed_switch}}),{orderId:function(){var n=this.orderDetail.orderId,t=n===void 0?"":n;return t.toLocaleUpperCase()},measurementInfoSchemas:function(){return[{label:this.$gt("Weight")+" (kg)",key:"weight"},{label:this.$gt("Length")+" (cm)",key:"length"},{label:this.$gt("Width")+" (cm)",key:"width"},{label:this.$gt("Height")+" (cm)",key:"height"}]},hasEditMeasurementButton:function(){return(0,b.wD)(this.$store,(0,M.n1)()+"_EDIT_ORDER_DETAIL_BUTTON")},measurementInfo:function(){var n=this.standardMeasureInfo,t=n.manual,a=t===void 0?{}:t,i=n.asm,o=i===void 0?{}:i,l=n.opsInfo,s=l===void 0?{}:l;return this.getOpsInfo([a,s,o])},measureTableData:function(){var n=this.standardMeasureInfo,t=n.whs,a=t===void 0?{}:t,i=n.sp,o=i===void 0?{}:i,l=n.asm,s=l===void 0?{}:l,c=n.manual,f=c===void 0?{}:c,m=n.pickup,h=m===void 0?{}:m,F=n.sls,x=F===void 0?{}:F,A=n.tws,v=A===void 0?{}:A,G=n.opsInfo,P=G===void 0?{}:G,k=(n||{})["3pl"]||{};return[{source:{text:this.$gt("Seller center")},weight:(0,Q.convertGramsToKilograms)(x.weight)||"-",length:(0,$.ae)(x.length),width:(0,$.ae)(x.width),height:(0,$.ae)(x.height)},{source:{text:this.$gt("WHS")},weight:(0,Q.convertGramsToKilograms)(a.weight)||"-",length:(0,$.ae)(a.length),width:(0,$.ae)(a.width),height:(0,$.ae)(a.height)},{source:{text:this.$gt("TWS")},weight:(0,Q.convertGramsToKilograms)(v.weight)||"-",length:(0,$.ae)(v.length),width:(0,$.ae)(v.width),height:(0,$.ae)(v.height)},{source:{text:this.$gt("Manual"),content:this.$gt("Weight / Dimension manually updated in order detail page or mass updated in exception handling module")},weight:(0,Q.convertGramsToKilograms)(f.weight)||"-",length:(0,$.ae)(f.length),width:(0,$.ae)(f.width),height:(0,$.ae)(f.height),showAction:this.tabData.weight_editable},{source:{text:this.$gt("Station Ops"),content:this.$gt("Weight / Dimension updated during Receiving process")},weight:(0,Q.convertGramsToKilograms)(P.weight)||"-",length:(0,$.ae)(P.length),width:(0,$.ae)(P.width),height:(0,$.ae)(P.height)},{source:{text:this.$gt("ASM")},weight:(0,Q.convertGramsToKilograms)(s.weight)||"-",length:(0,$.ae)(s.length),width:(0,$.ae)(s.width),height:(0,$.ae)(s.height)},{source:{text:this.$gt("Service Point")},weight:(0,Q.convertGramsToKilograms)(o.weight)||"-",length:(0,$.ae)(o.length),width:(0,$.ae)(o.width),height:(0,$.ae)(o.height)},{source:{text:this.$gt("3PL")},weight:(0,Q.convertGramsToKilograms)(k.weight)||"-",length:(0,$.ae)(k.length),width:(0,$.ae)(k.width),height:(0,$.ae)(k.height)},{source:{text:this.$gt("Driver")},weight:(0,Q.convertGramsToKilograms)(h.weight)||"-",length:(0,$.ae)(h.length),width:(0,$.ae)(h.width),height:(0,$.ae)(h.height)}]},slsData:function(){return this.measurementFormData.sls||{}},schemas:function(){var n=this.measurementFormData,t=n.sls,a=t===void 0?{}:t,i=n.whs,o=i===void 0?{}:i,l={label:o.weight?this.$gt("Weight from WHS:"):this.$gt("Weight from Seller:"),key:"weight",symbol:"kg",render:function(){var f=o.weight?o.weight:a.weight;return(0,Q.convertGramsToKilograms)(f)}},s=[{label:this.$gt("Length from Seller:"),key:"length",symbol:"cm"},{label:this.$gt("Width from Seller:"),key:"width",symbol:"cm"},{label:this.$gt("Height from Seller:"),key:"height",symbol:"cm"}];return[l].concat(s)},measurementInfoFromDriver:function(){return this.getMeasurementInfo(2)},measurementInfoFromFmhub:function(){return this.getMeasurementInfo(1)}}),watch:{measureInfo:function(){this.resetData()},orderId:{handler:function(){this.loadData()},immediate:!0}},methods:{convertGramsToKilograms:Q.convertGramsToKilograms,setErrorMsg:function(n,t,a){n&&t&&n>t?this.errorMsg[a]=this.$gt("Exceeded!"):delete this.errorMsg[a]},getMeasurementInfo:function(n){return Zn()(this.measurementFormData).find(function(t){var a=t.measure_type;return a===n})},getOpsInfo:function(){var n=arguments.length>0&&arguments[0]!==void 0?arguments[0]:[];n=n.filter(function(a){return a&&!jt()(a)});var t=n.sort(function(a,i){return i.operate_time-a.operate_time});return t&&t[0]||{}},cancelEdit:function(){this.editMode=!1,this.resetData()},submitEdit:function(){var e=(0,w.Z)(u().mark(function t(){var a;return u().wrap(function(o){for(;;)switch(o.prev=o.next){case 0:return o.prev=0,a=(0,I.Z)({},this.form,{receive_action:0,scene:8,process_order_charge:!0}),a.weight&&(a.weight=a.weight*1e3),Bt&&(a.is_order_detail=1),o.next=6,this.updateMeasurement(this.orderId,a);case 6:this.loadData(),this.$message.success(L.Lz.base),this.editMode=!1,o.next=15;break;case 11:o.prev=11,o.t0=o.catch(0),this.$message.error("Failed to update measurement: "+(o.t0.message||"")),console.error("Failed to update measurement. ",o.t0);case 15:case"end":return o.stop()}},t,this,[[0,11]])}));function n(){return e.apply(this,arguments)}return n}(),updateMeasurement:function(){var e=(0,w.Z)(u().mark(function t(a,i){var o,l,s,c,f,m,h,F,x;return u().wrap(function(v){for(;;)switch(v.prev=v.next){case 0:if(!this.loading.updatingMeasurement){v.next=2;break}return v.abrupt("return");case 2:if(this.checkOrderInfo(a,i)){v.next=4;break}throw new Error("Invalid input");case 4:if(o=this.weightDimensionRule.exceed_switch,v.prev=5,!(o===this.exceedSwitchEnums.Yes&&S()(this.errorMsg).length>0)){v.next=9;break}return v.next=9,this.$confirm(L.ao.weightDimensionDataExceed);case 9:v.next=15;break;case 11:throw v.prev=11,v.t0=v.catch(5),console.error("close confirm dialog:",v.t0),v.t0;case 15:return(0,b.K4)(this,"updatingMeasurement",!0),l=i.wms_weight,s=(0,J.Z)(i,["wms_weight"]),s.weight||(s.weight=l),c=(0,I.Z)({shipment_id:a,rule_number:this.weightDimensionRule.rule_number},this.basicParams),f=(0,I.Z)({},c,s),v.prev=20,v.next=23,this.$store.dispatch("updateMeasurement",f);case 23:if(m=v.sent,h=m||{},F=h.retcode,x=h.message,F!==L.ZA.weightInfoEdit){v.next=28;break}throw this.errorMsg.result=x,new Error(x);case 28:return v.abrupt("return",m);case 31:throw v.prev=31,v.t1=v.catch(20),v.t1;case 34:return v.prev=34,(0,b.K4)(this,"updatingMeasurement",!1),v.finish(34);case 37:case"end":return v.stop()}},t,this,[[5,11],[20,31,34,37]])}));function n(t,a){return e.apply(this,arguments)}return n}(),checkOrderInfo:function(n,t){var a=t.weight,i=t.length,o=t.width,l=t.height,s=this.weightDimensionRule,c=s.max_weight,f=s.max_dimension;return this.setErrorMsg(a,c,"weight"),this.setErrorMsg(i,f,"length"),this.setErrorMsg(o,f,"width"),this.setErrorMsg(l,f,"height"),n?!a&&!i&&!o&&!l?(this.$message.error(this.$gt("Please input either weight or dimension information")),!1):(i||o||l)&&(!i||!o||!l)?(this.$message.error(this.$gt("Please input complete dimension information")),!1):!0:(this.$message.error(this.$gt("No SPX Tracking Number")),!1)},checkEditMeasurement:function(){var e=(0,w.Z)(u().mark(function t(){var a,i,o,l;return u().wrap(function(c){for(;;)switch(c.prev=c.next){case 0:return(0,b.K4)(this,"checkEdit",!0),c.prev=1,a={shipment_id:this.orderId},c.next=5,Ht.checkShouldShowPopupWindow(a);case 5:i=c.sent,o=i.data,l=o===void 0?{}:o,this.weightDimensionRule=l,this.editMode=!0,c.next=15;break;case 12:c.prev=12,c.t0=c.catch(1),console.error("Cannot edit measurement");case 15:return c.prev=15,(0,b.K4)(this,"checkEdit",!1),c.finish(15);case 18:case"end":return c.stop()}},t,this,[[1,12,15,18]])}));function n(){return e.apply(this,arguments)}return n}(),resetData:function(){var n=this.standardMeasureInfo||{},t=n.manual,a=t===void 0?{}:t,i=n.opsInfo,o=i===void 0?{}:i,l=n.asm,s=l===void 0?{}:l,c=[a,o];Ut&&c.push(s);var f=this.getOpsInfo(c),m=f.weight,h=f.length,F=f.width,x=f.height;this.form={weight:parseFloat((0,Q.convertGramsToKilograms)(m)),length:h,width:F,height:x}},showMeasurementLogDialog:function(){this.visible.measurementLogDialog=!0},loadData:function(){var e=(0,w.Z)(u().mark(function t(){var a,i,o,l,s,c,f,m,h,F,x,A,v;return u().wrap(function(P){for(;;)switch(P.prev=P.next){case 0:return P.prev=0,(0,b.K4)(this,"page",!0),a={shipment_ids:this.orderId,station_type:(0,M.VG)()},P.next=5,O.UM.loadMeasurementInfo(a);case 5:i=P.sent,o=i.data,l=o===void 0?{}:o,this.tabData=(l.list||[])[0]||{},this.measureInfo=this.tabData.measure_infos||[],this.standardMeasureInfo=this.measureInfo.reduce(function(k,tn){var W=(0,T.invert)(ta)[tn.scene_name];return(0,I.Z)({},k,(0,rn.Z)({},W,tn))},{}),s=this.standardMeasureInfo,c=s.whs,f=c===void 0?{}:c,m=s.sls,h=m===void 0?{}:m,F=s.fmhub,x=F===void 0?{}:F,A=s.amhub,v=A===void 0?{}:A,this.measurementFormData={whs:f,sls:h,fmhub:x,amhub:v},P.next=18;break;case 15:P.prev=15,P.t0=P.catch(0),console.error("Load measurement info error, ",P.t0);case 18:return P.prev=18,(0,b.K4)(this,"page",!1),P.finish(18);case 21:case"end":return P.stop()}},t,this,[[0,15,18,21]])}));function n(){return e.apply(this,arguments)}return n}()}};var No=r("tXG3"),ea=(0,C.Z)(aa,Rt,zt,!1,null,"ff999732",null);const ia=ea.exports;var oa=function(){var n=this,t=n._self._c;return t("div",{directives:[{name:"loading",rawName:"v-loading",value:n.loading.page,expression:"loading.page"}],staticClass:"order-history"},[t("div",{staticClass:"order-history-header"},[t("div",{staticClass:"order-tracking-box"},[t("span",{staticClass:"sub-order-title"},[n._v(n._s(n.$gt("Tracking Number")))]),n._v(" "),t("span",{staticClass:"order-title"},[n._v(n._s(n.trackingInfo.shipment_id))])]),n._v(" "),t("div",{staticClass:"order-status-box"},[t("span",{staticClass:"order-status-title",attrs:{slot:"reference"},slot:"reference"},[n._v(n._s(n.$gt("Status"))+`
        `),t("s-popover",{attrs:{placement:"top",trigger:"click",content:n.$gt("current real order status")}},[t("svg-icon",{attrs:{slot:"reference",name:"information"},slot:"reference"})],1)],1),n._v(" "),t("span",{staticClass:"order-status"},[n.showOrderStatus?t("s-tag",{staticClass:"status-tag-icon",attrs:{size:"small",type:n.finalOrderStatusClass,bold:""}},[n._v(`
          `+n._s(n.orderStatus[n.trackingInfo.display_status])+`
        `)]):n._e()],1)])]),n._v(" "),t("div",{staticClass:"history-inner",class:n.hasSLATag&&"has-sla-tag"},[n.trackingInfo.missing_tag_info?t("OrderDetailMissTag",{attrs:{detail:n.trackingInfo.missing_tag_info}}):n._e(),n._v(" "),n.hasSLATag?t("OrderDetailSLATag",{attrs:{slaTagInfo:n.trackingInfo.sla_tag_info}}):n._e(),n._v(" "),t("div",{staticClass:"order-history-title"},[n._v(`
      `+n._s(n.$gt("Order Tracking History"))+`
    `)]),n._v(" "),t("div",{staticClass:"timeline-wrapper"},n._l(n.orderTrackingHistory,function(a,i){return t("div",{key:i,staticClass:"timeline"},[t("div",{staticClass:"timeline-item"},[t("div",{staticClass:"history-date"},[t("span",{staticClass:"time"},[n._v(n._s(n.format(a.timestamp,"hms")))]),n._v(" "),t("br"),n._v(" "),t("span",{staticClass:"date"},[n._v(n._s(n.formatDate(a.timestamp)))])]),n._v(" "),t("div",{staticClass:"split-line-wrap"},[t("div",{staticClass:"split-line-icon-wrap"},[i===0?t("s-icon",{staticClass:"svg-icon",attrs:{name:"orderCreated"}}):a.isStation?t("s-icon",{staticClass:"svg-icon",attrs:{name:"station"}}):n.isFinalOrderSuccessStatus?t("s-icon",{staticClass:"svg-icon",attrs:{name:"orderDelivered"}}):n.isFinalOrderFailedStatus?t("s-icon",{staticClass:"svg-icon",attrs:{name:"orderFailed"}}):t("div",{staticClass:"split-line-cycle-icon"})],1),n._v(" "),!n.curIsLastNode(i,n.orderTrackingHistory)||a.isStation&&a.children.length&&n.timeLineChildIsShow[i]?t("div",{staticClass:"split-line",class:{"split-line-dashed":a.isStation&&a.children.length&&!n.timeLineChildIsShow[i]}}):n._e()]),n._v(" "),t("div",{staticClass:"history-content"},[a.isStation?t("div",[t("span",{staticClass:"station-name"},[n._v(n._s(a.station_name))]),n._v(" "),a.children&&a.children.length&&!n.timeLineChildIsShow[i]?t("s-icon-chevron-down",{staticClass:"toggle-btn",on:{click:function(l){return n.toggleTimeLineChildShow(i)}}}):n._e(),n._v(" "),a.children&&a.children.length&&n.timeLineChildIsShow[i]?t("s-icon-chevron-up",{staticClass:"toggle-btn",on:{click:function(l){return n.toggleTimeLineChildShow(i)}}}):n._e(),n._v(" "),n.timeLineChildIsShow[i]||a.children&&a.children.length===0?t("div",[t("s-tag",{staticClass:"status-tag-icon",attrs:{size:"small",type:n.getTrackingStatusClass(a),bold:""}},[n._v(`
                  `+n._s(n.orderStatus[a.status])+`
                `)]),n._v(" "),a.shouldShowInterceptionIcon?t("s-popover",{attrs:{placement:"bottom",trigger:"click"}},[t("div",{attrs:{slot:"default"},slot:"default"},[n._v(n._s(n.interceptionTagTips))]),n._v(" "),t("svg-icon",{attrs:{slot:"reference",name:"information"},slot:"reference"})],1):n._e(),n._v(" "),n.showDatafixTag(a)?t("s-tag",{attrs:{size:"small",type:"primary",theme:"promotion"}},[n._v(`
                  `+n._s(n.$gt("Datafix"))+`
                `)]):n._e(),n._v(" "),n._l(a.tags||[],function(o){return t("span",{key:o,staticClass:"order-tracking-tag",style:{color:n.trackingTagsColorMap[o],"border-color":n.trackingTagsColorMap[o]+"80"},attrs:{title:o}},[n._v(n._s(o))])}),n._v(" "),t("span",{staticClass:"info"},[n._v(n._s(n.$gt("message"))+": "),n._l(a.message,function(o,l){return t("span",{key:o+l},[n._v(n._s(o)),o.trim()!==""?t("br"):n._e()])})],2),n._v(" "),t("span",{staticClass:"info"},[n._v(n._s(n.$gt("operator"))+": "+n._s(a.operator))]),n._v(" "),n.showPickupOnholdMessage(n.orderStatus[a.status])?t("p",[n._v(n._s(n.$gt("on hold reason"))+": "+n._s(a.on_hold_reason))]):n._e()],2):n._e()],1):t("div",[t("s-tag",{staticClass:"status-tag-icon",attrs:{size:"small",type:n.getTrackingStatusClass(a),bold:""}},[n._v(`
                `+n._s(n.orderStatus[a.status])+`
              `)]),n._v(" "),a.shouldShowInterceptionIcon?t("s-popover",{attrs:{placement:"bottom",trigger:"click"}},[t("div",{attrs:{slot:"default"},slot:"default"},[n._v(n._s(n.interceptionTagTips))]),n._v(" "),t("svg-icon",{attrs:{slot:"reference",name:"information"},slot:"reference"})],1):n._e(),n._v(" "),n.showDatafixTag(a)?t("s-tag",{attrs:{size:"small",type:"primary",theme:"promotion"}},[n._v(`
                `+n._s(n.$gt("Datafix"))+`
              `)]):n._e(),n._v(" "),n._l(a.tags||[],function(o){return t("span",{key:o,staticClass:"order-tracking-tag",style:{color:n.trackingTagsColorMap[o],"border-color":n.trackingTagsColorMap[o]+"80"},attrs:{title:o}},[n._v(n._s(o))])}),n._v(" "),t("span",{staticClass:"info"},[n._v(n._s(n.$gt("message"))+": "),n._l(a.message,function(o,l){return t("span",{key:o+l},[n._v(n._s(o)),o.trim()!==""?t("br"):n._e()])})],2),n._v(" "),t("span",{staticClass:"info"},[n._v(n._s(n.$gt("operator"))+": "+n._s(a.operator))]),n._v(" "),n.showAcceptanceType(a)?t("span",{staticClass:"info"},[n._v(n._s(n.$gt("Acceptance Type"))+": "+n._s(n.renderAcceptanceType(a.acceptance_type)))]):n._e(),n._v(" "),n.showPickupOnholdMessage(n.orderStatus[a.status])?t("p",[n._v(n._s(n.$gt("on hold reason"))+": "+n._s(a.on_hold_reason))]):n._e()],2)])]),n._v(" "),n._l(a.children,function(o,l){return t("div",{key:l,staticClass:"timeline timeline-child",class:{hide:!n.timeLineChildIsShow[i]}},[t("div",{staticClass:"timeline-item"},[t("div",{staticClass:"history-date"},[t("span",{staticClass:"time"},[n._v(n._s(n.format(o.timestamp,"hms")))]),n._v(" "),t("br"),n._v(" "),t("span",{staticClass:"date"},[n._v(n._s(n.formatDate(o.timestamp)))])]),n._v(" "),t("div",{staticClass:"split-line-wrap"},[t("div",{staticClass:"split-line-icon-wrap"},[n.isSuccessStatus(o)?t("s-icon",{staticClass:"svg-icon",attrs:{name:"orderDelivered"}}):n.isFailedStatus(o)?t("s-icon",{staticClass:"svg-icon",attrs:{name:"orderFailed"}}):t("div",{staticClass:"split-line-cycle-icon"})],1),n._v(" "),!n.curIsLastNode(l,a.children)||n.orderTrackingHistory[i+1]?t("div",{staticClass:"split-line"}):n._e()]),n._v(" "),t("div",{staticClass:"history-content"},[t("s-tag",{staticClass:"status-tag-icon",attrs:{size:"small",type:n.getTrackingStatusClass(o),bold:""}},[n._v(`
                `+n._s(n.orderStatus[o.status])+`
              `)]),n._v(" "),o.shouldShowInterceptionIcon?t("s-popover",{attrs:{placement:"bottom",trigger:"click"}},[t("div",{attrs:{slot:"default"},slot:"default"},[n._v(n._s(n.interceptionTagTips))]),n._v(" "),t("svg-icon",{attrs:{slot:"reference",name:"information"},slot:"reference"})],1):n._e(),n._v(" "),n.showDatafixTag(o)?t("s-tag",{attrs:{size:"small",type:"primary",theme:"promotion"}},[n._v(`
                `+n._s(n.$gt("Datafix"))+`
              `)]):n._e(),n._v(" "),n._l(o.tags||[],function(s){return t("span",{key:s,staticClass:"order-tracking-tag",style:{color:n.trackingTagsColorMap[s],"border-color":n.trackingTagsColorMap[s]+"80"},attrs:{title:s}},[n._v(n._s(s))])}),n._v(" "),t("span",{staticClass:"info"},[n._v(n._s(n.$gt("message"))+": "),n._l(o.message,function(s,c){return t("span",{key:s+c},[n._v(n._s(s)),s.trim()!==""?t("br"):n._e()])})],2),n._v(" "),t("span",{staticClass:"info"},[n._v(n._s(n.$gt("operator"))+": "+n._s(o.operator))]),n._v(" "),n.showPickupOnholdMessage(n.orderStatus[o.status])?t("p",[n._v(n._s(n.$gt("on hold reason"))+": "+n._s(o.on_hold_reason))]):n._e()],2)])])})],2)}),0)],1)])},ra=[],sa=r("Z0cm"),da=r.n(sa),la=r("J2iB"),ca=r.n(la),pa=r("pk0U"),Wn=r("vNPV"),ga=function(){var n=this,t=n._self._c;return t("section",{class:n.blockPrefix},[t("h6",{class:n.blockPrefix+"-title"},[t("SIconErrorFilled",{staticStyle:{"margin-right":"8px",fill:"#F32345"},attrs:{width:"16",height:"16"}}),n._v(`
    `+n._s(n.$gt("Missing"))+`
  `)],1),n._v(" "),t("ul",{class:n.blockPrefix+"-detail"},[t("li",{class:n.blockPrefix+"-detail-item"},[n._v(n._s(n.$gt("Missing Time"))+": "+n._s(n.formatDate(n.detail.missing_time)))]),n._v(" "),t("li",{class:n.blockPrefix+"-detail-item"},[n._v(n._s(n.$gt("Missing Station"))+": "+n._s(n.detail.missing_station))]),n._v(" "),t("li",{class:n.blockPrefix+"-detail-item"},[n._v(n._s(n.$gt("Aging Time"))+": "+n._s(n.agingTime))])])])},fa=[];const ua={props:{detail:{type:Object,required:!0}},data:function(){return{blockPrefix:"order-detail-sla-tag"}},computed:{agingTime:function(){var n=H()(),t=H()(this.detail.missing_time*1e3),a=n.diff(t,"hour");if(a<1)return n.diff(t,"minute")+"min";if(a>=1&&a<=24)return a+"h";var i=n.diff(t,"day");return i+"d"+a%24+"h"}},methods:{formatDate:function(n){return H().unix(n).format("DD.MMM.YYYY HH:mm:ss")}}};var Vo=r("675p"),ha=(0,C.Z)(ua,ga,fa,!1,null,"0646ac75",null);const ma=ha.exports;var va=function(){var n=this,t=n._self._c;return t("section",{class:n.blockPrefix},[t("h6",{class:n.blockPrefix+"-title"},[t("SIconWarningCircle",{staticStyle:{"margin-right":"8px",fill:"#ffb014"},attrs:{width:"16",height:"16"}}),n._v(n._s(n.$gt("SLA Tag"))+`:
    `+n._s(n.slaTagInfo.tag_text)+`
  `)],1),n._v(" "),t("ul",{class:n.blockPrefix+"-detail"},[t("li",{class:n.blockPrefix+"-detail-item"},[n._v(n._s(n.$gt("Update Time"))+": "+n._s(n.formatDate(n.slaTagInfo.update_time)))]),n._v(" "),t("li",{class:n.blockPrefix+"-detail-item"},[n._v(n._s(n.$gt("Operator"))+": "+n._s(n.slaTagInfo.operator))])])])},ba=[];const xa={props:{slaTagInfo:{type:Object,required:!0}},data:function(){return{blockPrefix:"order-detail-sla-tag"}},created:function(){},methods:{formatDate:function(n){return H().unix(n).format("DD.MMM.YYYY HH:mm:ss")}}};var Wo=r("JPEp"),_a=(0,C.Z)(xa,va,ba,!1,null,"246ac0ac",null);const ya=_a.exports;var wa=function e(n){if(n){var t=n.message,a=t===void 0?"":t,i=n.children,o=i===void 0?[]:i;o&&o.length>0&&o.forEach(function(l){return e(l)}),n.message=(a+"").split("\\\\n")}};const Fa={components:{OrderDetailSLATag:ya,SvgIcon:pa.Z,OrderDetailMissTag:ma},data:function(){return{tabData:{sla_tag_info:{},color_tags:[]},format:D.WU,timeLineChildIsShow:[],loading:{page:!1},interceptionTagTipsLines:[this.$gt("Interception tags are not order status, they show the order interception process:"),this.$gt("\u2018Pending Intercept\u2019: order is tagged to be intercepted"),this.$gt("\u2018Intercepting\u2019: When a Pending Intercept order is scanned in the station"),this.$gt("\u2018Intercepted\u2019: Interception completed. Order should be handed over to exception handling")],interceptionTagTips:this.$gt("Orange tags are not order statuses, they show the progress of an order going through exception handling; this includes interception & exception handling processes.")}},inject:["orderDetail"],computed:(0,I.Z)({},(0,U.mapState)({orderData:function(n){return n.order.orderDetail}}),{showOrderStatus:function(){return this.orderStatus&&!(0,T.isUndefined)(this.trackingInfo.display_status)},orderId:function(){var n=this.orderDetail.orderId,t=n===void 0?"":n;return t.toLocaleUpperCase()},trackingInfo:function(){return this.tabData},trackingTagsColorMap:function(){return this.tabData.color_tags.reduce(function(n,t){var a=t.color,i=t.tags;return i.reduce(function(o,l){return o[l]="#"+a,o},n)},{})},orderStatus:function(){var n=this,t="tracking_status",a=this.$store.state.enums.systemEnums[t],i={};return S()(a).forEach(function(o){i[a[o]]=Wn.Be.call(n,o,t)}),i},orderTrackingHistory:function(){var n=this,t=this.trackingInfo.tracking_list||[],a=!1;return t.reduce(function(i,o){var l=o.station_id,s=l===void 0?0:l,c=(0,J.Z)(o,["station_id"]),f=(0,I.Z)({},c),m=s===0&&n.thirdPartyTrackingFlag&&o.third_party_name;return(s!==0||m)&&(f.isStation=!0),o.tracking_color_enum===1&&!a&&(f.shouldShowInterceptionIcon=!0,a=!0),i.push(f),i},[])},orderTrackingHistoryFromOrderData:function(){var n=this,t=this.orderData.tracking||[];return t.reduce(function(a,i){var o=i.station_id,l=o===void 0?0:o,s=(0,J.Z)(i,["station_id"]),c=(0,I.Z)({},s),f=l===0&&n.thirdPartyTrackingFlag&&i["3pl_name"];return(l!==0||f)&&(c.isStation=!0),a.push(c),a},[])},thirdPartyTrackingFlag:function(){return this.trackingInfo.merge_third_party_tracking_flag===1},hasSLATag:function(){var n=this.trackingInfo.sla_tag_info||{},t=n.update_time;return t>0},finalOrderStatusClass:function(){var n=this.trackingInfo.display_status,t=(this.orderTrackingHistory.find(function(a){return a.status===n})||{tracking_color_enum:0}).tracking_color_enum;return nt[t]||"default"},isFinalOrderSuccessStatus:function(){var n=this.trackingInfo.display_status,t=(this.orderTrackingHistory.find(function(a){return a.status===n})||{tracking_color_enum:0}).tracking_color_enum;return t===3},isFinalOrderFailedStatus:function(){var n=this.trackingInfo.display_status,t=(this.orderTrackingHistory.find(function(a){return a.status===n})||{tracking_color_enum:0}).tracking_color_enum;return t===4}}),watch:{trackingInfo:function(n){var t=[],a=n&&n.length;a>0&&(t=new Array(a-1).fill(!1),t=[].concat((0,nn.Z)(t),[!0])),this.timeLineChildIsShow=t},orderId:{handler:function(){var e=(0,w.Z)(u().mark(function t(){return u().wrap(function(i){for(;;)switch(i.prev=i.next){case 0:return i.next=2,this.loadData();case 2:case"end":return i.stop()}},t,this)}));function n(){return e.apply(this,arguments)}return n}(),immediate:!0}},methods:{getStatusMapping:Wn.Be,getTrackingStatusClass:function(n){var t=n.tracking_color_enum;return nt[t]||"default"},isSuccessStatus:function(n){var t=n.tracking_color_enum;return t===3},isFailedStatus:function(n){var t=n.tracking_color_enum;return t===4},curIsLastNode:function(n,t){return n===t.length-1},toggleTimeLineChildShow:function(n){this.$set(this.timeLineChildIsShow,n,!this.timeLineChildIsShow[n])},showDatafixTag:function(n){return n.is_data_fix},showPickupOnholdMessage:function(){var n=arguments.length>0&&arguments[0]!==void 0?arguments[0]:"";return n.toLowerCase()==="pickup_on_hold"},showAcceptanceType:function(n){var t=n.acceptance_type,a=n.status;return!ca()(t)&&this.orderStatus[a]==="Picking_Up"},renderAcceptanceType:function(n){return(0,b.BK)(this.$store.state,"enums.systemEnums.p2p_acceptance_type",n)},formatDate:function(n){return H()(n*1e3).format("DD MMM YYYY")},loadData:function(){var e=(0,w.Z)(u().mark(function t(){var a,i,o,l,s,c,f;return u().wrap(function(h){for(;;)switch(h.prev=h.next){case 0:return h.prev=0,(0,b.K4)(this,"page",!0),a={shipment_id:this.orderId,station_type:(0,M.VG)()},h.next=5,O.UM.loadTrackingData(a);case 5:if(i=h.sent,o=i.data,!da()(o.tracking_list)){h.next=25;break}if(o.tracking_list.forEach(function(F){wa(F)}),!this.orderDetail.isAgencyUser){h.next=25;break}l=void 0,s=0;case 12:if(!(s<o.tracking_list.length)){h.next=24;break}if(c=o.tracking_list[s],l=[8,42].includes(c.status)?s:void 0,!(c.children&&c.children.length)){h.next=21;break}if(f=c.children.findIndex(function(F){return[8,42].includes(F.status)}),!(f>=0)){h.next=21;break}return c.children=c.children.slice(0,f),l=s,h.abrupt("break",24);case 21:s++,h.next=12;break;case 24:l&&(o.tracking_list=o.tracking_list.slice(0,l+1));case 25:this.tabData=o,h.next=31;break;case 28:h.prev=28,h.t0=h.catch(0),console.error("Load tracking data error, ",h.t0);case 31:return h.prev=31,(0,b.K4)(this,"page",!1),h.finish(31);case 34:case"end":return h.stop()}},t,this,[[0,28,31,34]])}));function n(){return e.apply(this,arguments)}return n}()}};var Yo=r("1JTk"),Jo=r("OCkJ"),ka=(0,C.Z)(Fa,oa,ra,!1,null,"35972068",null);const Da=ka.exports;var Ea=function(){var n=this,t=n._self._c;return t("s-form",{directives:[{name:"loading",rawName:"v-loading",value:n.loading.page,expression:"loading.page"}],staticClass:"order-basic-info",attrs:{"label-width":"170px"}},[t("div",{staticClass:"category-title"},[n._v(n._s(n.$gt("Order Basic Info")))]),n._v(" "),t("s-form-item",{attrs:{label:n.$gt("Order Account")+":"}},[n._v(`
    `+n._s(n.orderAccounts[n.basicInfo.order_account])+`
  `)]),n._v(" "),t("s-form-item",{attrs:{label:n.$gt("Current Station")+":"}},[n._v(`
    `+n._s(n.basicInfo.current_station_name)+`
  `)]),n._v(" "),t("s-form-item",{attrs:{label:n.receivedByLabel}},[n._v(`
    `+n._s(n.basicInfo.pick_up_station_name)+`
  `)]),n._v(" "),t("s-form-item",{attrs:{label:n.$gt("Destination Hub")+":"}},[n._v(`
    `+n._s(n.basicInfo.station_name)+`
  `)]),n._v(" "),t("s-form-item",{attrs:{label:n.$gt("COD Collection Status")+":"}},[n._v(`
    `+n._s(n.getStatusMapping(n.basicInfo.cod_status,"tracking_status"))+`
  `)]),n._v(" "),t("s-form-item",{attrs:{label:n.$gt("Bulky Type")+":"}},[n.editing.bulkyType?t("div",[t("s-radio-group",{model:{value:n.form.bulky_type,callback:function(i){n.$set(n.form,"bulky_type",i)},expression:"form.bulky_type"}},n._l(n.bulkyTypeSelectOptions,function(a){return t("s-radio",{key:a.value,attrs:{label:a.value}},[n._v(n._s(a.label))])}),1),n._v(" "),t("div",{staticClass:"form-actions"},[t("s-button",{attrs:{loading:n.loading.update},on:{click:function(i){return n.editOrderBulkyType(!1)}}},[n._v(n._s(n.$gt("Cancel")))]),n._v(" "),t("s-button",{attrs:{loading:n.loading.update,type:"primary"},on:{click:function(i){return n.updateOrderAttribute("bulky_type","Bulky Type",n.editOrderBulkyType)}}},[n._v(n._s(n.$gt("Ok")))])],1)],1):t("span",[n._v(`
      `+n._s(n.basicInfo.bulky_type__desc)+`
      `),n.showBulkyTypeEditBtn?t("span",{staticClass:"text-button",attrs:{type:"text"},on:{click:function(i){return n.editOrderBulkyType(!0)}}},[n._v(n._s(n.$gt("Edit")))]):n._e()])]),n._v(" "),n.showMutualCheck?t("s-form-item",{attrs:{label:n.mutualCheckLabel}},[n._v(`
    `+n._s(n.filterMutualCheck(n.basicInfo.mutual_check))+`
  `)]):n._e(),n._v(" "),n.showDGType?t("s-form-item",{attrs:{label:n.$gt("DG Type")+":"}},[n._v(`
    `+n._s(n.dgTypes[n.basicInfo.dg_type])+`
  `)]):n._e(),n._v(" "),t("s-form-item",{attrs:{label:n.$gt("COGS at order level")+" ("+n.CURRENCY_SYMBOL+"):"}},[n._v(`
    `+n._s(n.basicInfo.cogs)+`
  `)]),n._v(" "),n.showTaxDoc?t("s-form-item",{attrs:{label:n.$gt("Tax Document Goods Value (BRL)")+":"}},[n.hideSensitiveDataV2("tax_document_goods_value")?t("sensitive-component",{key:n.basicInfo.tax_document_goods_value,attrs:{showIcon:n.showSensitiveDataIcon("tax_document_goods_value"),loadUrl:"orderMgt/fetchOrderSensitiveData",requestParams:n.getRequestSensitiveDataParams("tax_document_goods_value")}}):t("span",[n._v(n._s(n.basicInfo.tax_document_goods_value))])],1):n._e(),n._v(" "),n.basicInfo.hv_permitted&&n.HAS_HIGH_VALUE?t("s-form-item",{attrs:{label:n.$gt("High Value")+":"}},[n._v(`
    `+n._s(n.filterHighValue(n.basicInfo.high_value))+`
  `)]):n._e(),n._v(" "),t("s-form-item",{attrs:{label:n.$gt("Origin Order Path")+":"}},[t("order-path",{attrs:{orderPath:n.basicInfo.origin_order_path,targetStation:n.basicInfo.current_station_id,orderStatus:n.basicInfo.status}})],1),n._v(" "),t("s-form-item",{attrs:{label:n.$gt("Updated Order Path")+":"}},[t("order-path",{attrs:{orderPath:n.basicInfo.update_order_path,targetStation:n.basicInfo.current_station_id,orderStatus:n.basicInfo.status}})],1),n._v(" "),n.slaDetailInfo.is_support?t("s-form-item",{attrs:{label:n.$gt("Origin SLA")+":"}},[n.slaDetailInfo.sla_fail_reason?t("span",{staticStyle:{color:"#F32345"}},[n._v(" "+n._s(n.slaDetailInfo.sla_fail_reason))]):t("span",[n._v(n._s(n.slaDetailInfo.origin_sla))])]):n._e(),n._v(" "),n.slaDetailInfo.is_support?t("s-form-item",{attrs:{label:n.$gt("Actual Forward Transit Time")+":"}},[n._v(`
    `+n._s(n.slaDetailInfo.actual_transit_time)+`
  `)]):n._e(),n._v(" "),n.IS_SEGMENTED_CHANNEL?t("s-form-item",{attrs:{label:n.$gt("Channel")+":"}},[n._v(`
    `+n._s(n.basicInfo.channel_name)+`
  `)]):t("s-form-item",{attrs:{label:n.$gt("3PL")+":"}},[n._v(`
    `+n._s(n.basicInfo.third_party_channel_name)+`
  `)]),n._v(" "),n.showOriginFMType?t("s-form-item",{attrs:{label:n.$gt("Original FM Type")+":"}},[n._v(`
    `+n._s(n.realOriginFmType[n.basicInfo.real_original_fm_type]||"-")+`
  `)]):n._e(),n._v(" "),n.hideRealFmType?n._e():t("s-form-item",{attrs:{label:n.$gt("Real FMType")+":"}},[n._v(`
    `+n._s(n.realFmTypeMap[n.basicInfo.real_fm_type]||"-")+`
  `)]),n._v(" "),n.hasOrderInterception?[t("s-form-item",{attrs:{label:n.$gt("Cancellation Reason")+":"}},[n._v(`
      `+n._s(n.interceptionReturnResult[n.basicInfo.interception_return_code]||"-")+`
    `)]),n._v(" "),t("s-form-item",{attrs:{label:n.$gt("Cancellation Time")+":"}},[n._v(`
      `+n._s(n.basicInfo.interception_return_timestamp?n.formatRegionalDate(n.basicInfo.interception_return_timestamp):"-")+`
    `)])]:n._e(),n._v(" "),n.basicInfo.exception_tag&&n.basicInfo.exception_tag.length>0?t("s-form-item",{attrs:{label:n.$gt("Exception Tag")+":"}},n._l(n.basicInfo.exception_tag,function(a){return t("s-tag",{key:a},[n._v(`
      `+n._s(a)+`
    `)])}),1):n._e(),n._v(" "),t("div",{staticClass:"category-title"},[n._v(n._s(n.$gt("Return Info")))]),n._v(" "),n.HAS_RETURN_TO_SELLER?t("s-form-item",{attrs:{label:n.$gt("Return Station")+":"}},[n._v(`
    `+n._s(n.returnInfo.return_station_name)+`
  `)]):n._e(),n._v(" "),n.HAS_RETURN_DESTINATION_SITE?t("s-form-item",{attrs:{label:n.$gt("Return Destination Site")+":"}},[n._v(`
    `+n._s(n.returnInfo.return_sp_station_name)+`
  `)]):n._e(),n._v(" "),n.HAS_RETURN_TO_SELLER?t("s-form-item",{attrs:{label:n.$gt("Return Name")+":"}},[n.hideSensitiveDataV2("return_name")?t("sensitive-component",{key:n.returnInfo.return_name,attrs:{showIcon:n.showSensitiveDataIcon("return_name"),loadUrl:"orderMgt/fetchOrderSensitiveData",requestParams:n.getRequestSensitiveDataParams("return_name")}}):t("span",[n._v(n._s(n.returnInfo.return_name))])],1):n._e(),n._v(" "),n.HAS_RETURN_TO_SELLER?t("s-form-item",{attrs:{label:n.$gt("Return Address")+":"}},[n.hideSensitiveDataV2("return_address")?t("sensitive-component",{key:n.returnInfo.return_address,attrs:{showIcon:n.showSensitiveDataIcon("return_address"),loadUrl:"orderMgt/fetchOrderSensitiveData",requestParams:n.getRequestSensitiveDataParams("return_address")}}):t("span",{style:{"word-break":"break-all"}},[n._v(n._s(n.returnInfo.return_address))])],1):n._e(),n._v(" "),n.HAS_RETURN_TO_SELLER?t("s-form-item",{attrs:{label:n.$gt("Return Contact")+":"}},[n.hideSensitiveDataV2("return_contact")?t("sensitive-component",{key:n.returnInfo.return_contact,attrs:{showIcon:n.showSensitiveDataIcon("return_contact"),loadUrl:"orderMgt/fetchOrderSensitiveData",requestParams:n.getRequestSensitiveDataParams("return_contact")}}):t("span",[n._v(n._s(n.returnInfo.return_contact))])],1):n._e(),n._v(" "),n.HAS_RETURN_ZIPCODE?t("s-form-item",{attrs:{label:n.$gt("Return Zipcode")+":"}},[n._v(`
    `+n._s(n.returnInfo.return_sp_zip_code)+`
  `)]):n._e(),n._v(" "),t("s-form-item",{attrs:{label:n.$gt("Return Origin Order Path")+":"}},[t("order-path",{attrs:{orderPath:n.basicInfo.return_order_path,targetStation:n.basicInfo.current_station_id,orderStatus:n.basicInfo.status}})],1),n._v(" "),t("s-form-item",{attrs:{label:n.$gt("Return Updated Order Path")+":"}},[t("order-path",{attrs:{orderPath:n.basicInfo.update_return_order_path,targetStation:n.basicInfo.current_station_id,orderStatus:n.basicInfo.status}})],1),n._v(" "),t("div",{staticClass:"category-title"},[n._v(n._s(n.$gt("Order Fee Info")))]),n._v(" "),n.showOrderShipperInfo?t("span",{staticClass:"remark"},[n._v(n._s(n.$gt("Shipping fee is VAT inclusive")))]):n._e(),n._v(" "),n.SHOW_SHIPMENT_FEE?t("s-form-item",{attrs:{label:n.$gt("ASF")+":"}},[n._v(`
    `+n._s(n.appendFeeWithCurrency(n.realAsf))+`
  `)]):n._e(),n._v(" "),n.SHOW_SHIPMENT_FEE?t("s-form-item",{attrs:{label:n.$gt("3PL ASF")+":"}},[n._v(`
    `+n._s(n.appendFeeWithCurrency(n.feeInfo.third_party_shipping_fee))+`
  `)]):n._e(),n._v(" "),t("s-form-item",{scopedSlots:n._u([n.showFinanceTooltip?{key:"label",fn:function(){return[n._v(`
      `+n._s(n.$gt("Basic Shipping Fee"))+`
      `),t("s-popover",{attrs:{placement:"top"}},[t("span",[n._v(n._s(n.$gt("BSF includes discount amount from rate card's discount rule if applicable Always show for NSS orders")))]),n._v(" "),t("s-icon-help-outline",{staticClass:"label-icon",attrs:{slot:"reference"},slot:"reference"})],1),n._v(`
      :
    `)]},proxy:!0}:{key:"label",fn:function(){return[n._v(`
      `+n._s(n.$gt("Basic Shipping Fee")+":")+`
    `)]},proxy:!0}],null,!0)},[n._v(`
    `+n._s(n.appendFeeWithCurrency(n.feeInfo.basic_shipping_fee))+`
  `)]),n._v(" "),t("s-form-item",{attrs:{label:n.$gt("Insurance Fee")+":"}},[n._v(`
    `+n._s(n.appendFeeWithCurrency(n.feeInfo.insurance_fee))+`
  `)]),n._v(" "),t("s-form-item",{attrs:{label:n.$gt("COD Service Fee")+":"}},[n._v(`
    `+n._s(n.appendFeeWithCurrency(n.feeInfo.cod_fee))+`
  `)]),n._v(" "),t("s-form-item",{attrs:{label:n.$gt("Remote Area Fee")+":"}},[n._v(`
    `+n._s(n.appendFeeWithCurrency(n.feeInfo.remote_area_fee))+`
  `)]),n._v(" "),n.showOrderShipperInfo?t("div",{staticClass:"category-title"},[n._v(n._s(n.$gt("Shipper Basic Info")))]):n._e(),n._v(" "),n.showOrderShipperInfo?t("s-form-item",{attrs:{label:n.$gt("Shipper Name")+":"}},[n._v(n._s(n.shipper_basic_info.shipper_name))]):n._e(),n._v(" "),n.showOrderShipperInfo?t("s-form-item",{attrs:{label:n.$gt("Shipper Address")+":"}},[n._v(n._s(n.shipper_basic_info.shipper_address))]):n._e(),n._v(" "),n.showOrderShipperInfo?t("s-form-item",{attrs:{label:n.$gt("Tax ID Number")+":"}},[n._v(n._s(n.shipper_basic_info.tax_id_number))]):n._e(),n._v(" "),n.SHOPEE_PAY_IN_PICKUP?t("s-form-item",{attrs:{label:n.$gt("Payment Role")+":"}},[n._v(`
    `+n._s(n.getPaymentRole())+`
  `)]):n._e(),n._v(" "),n.SHOPEE_PAY_IN_PICKUP?t("s-form-item",{attrs:{label:n.$gt("ASF Collection Method")+":"}},[n._v(`
    `+n._s(n.getASFCollectionMethod())+`
  `)]):n._e(),n._v(" "),n.SHOPEE_PAY_IN_PICKUP?t("s-form-item",{attrs:{label:n.$gt("ASF Settlement Method")+":"}},[n._v(`
    `+n._s(n.getASFSettlementMethod())+`
  `)]):n._e(),n._v(" "),t("div",{staticClass:"orderSN-info-header"},[t("div",{staticClass:"category-title"},[n._v(n._s(n.$gt("OrderSN Info")))]),n._v(" "),n.HAS_NSS_SELLER_COD_ADJUSTMENT?t("s-button",{on:{click:n.showOrderSNLogDialog}},[n._v(n._s(n.$gt("Log")))]):n._e()],1),n._v(" "),t("s-form-item",{attrs:{label:n.$gt("Order SN")+":"}},[t("span",[n._v(n._s(n.sellerInfo.shopee_order_sn))])]),n._v(" "),t("s-form-item",{attrs:{label:n.$gt("Shop ID")+":"}},[n.hideSensitiveDataV2("shop_id")?t("sensitive-component",{key:n.sellerInfo.shipment_id,attrs:{showIcon:n.showSensitiveDataIcon("shop_id"),loadUrl:"orderMgt/fetchOrderSensitiveData",requestParams:n.getRequestSensitiveDataParams("shop_id")}}):t("span",[n._v(n._s(n.sellerInfo.shop_id))])],1),n._v(" "),t("s-form-item",{attrs:{label:n.$gt("Shop Category Label")+":"}},[n._v(`
    `+n._s(n.shopCategoryLabel)+`
  `)]),n._v(" "),t("s-form-item",{attrs:{label:n.$gt("WHS ID")+":"}},[n._v(`
    `+n._s(n.basicInfo.whs_id)+`
  `)]),n._v(" "),t("s-form-item",{attrs:{label:n.$gt("Pickup Country")+":"}},[n._v(`
    `+n._s(n.sellerInfo.pickup_country)+`
  `)]),n._v(" "),t("s-form-item",{attrs:{label:n.$gt("Deliver Country")+":"}},[n._v(`
    `+n._s(n.sellerInfo.deliver_country)+`
  `)]),n._v(" "),t("s-form-item",{attrs:{label:n.$gt("COD Amount")+":"}},[n._v(`
    `+n._s(n.sellerInfo.cod_amount)+`
    `),n.showCODAmountMessage?t("span",{staticClass:"orange_color_text"},[n._v(" ("+n._s(n.$gt("*Please note that COD amount has changed by seller"))+")")]):n._e()]),n._v(" "),n.showCodCollectMethod?t("s-form-item",{attrs:{label:n.$gt("COD Payment Method")+":"}},[n._v(`
    `+n._s(n.codPaymentMethod)+`
  `)]):n._e(),n._v(" "),t("s-form-item",{attrs:{label:n.$gt("Payment Method")+":"}},[t("span",[n._v(n._s(n.basicInfo.payment_method))])]),n._v(" "),n.showSubPaymentMethod?t("s-form-item",{attrs:{label:n.$gt("Sub Payment Method")+":"}},[n._v(`
    `+n._s(n.basicInfo.sub_payment_method)+`
  `)]):n._e(),n._v(" "),t("s-form-item",{attrs:{label:n.$gt("COD Settlement Method")+":"}},[n._v(`
    `+n._s(n.codSettlementMethod)+`
  `)]),n._v(" "),n.showExceptionInfo?[t("div",{staticClass:"category-title"},[n._v(n._s(n.$gt("Exception Info")))]),n._v(" "),t("s-form-item",{attrs:{label:n.$gt("Liquidation Destination")+":"}},[t("span",[n._v(n._s(n.exceptionInfo.liquidation_name||"-"))])]),n._v(" "),t("s-form-item",{attrs:{label:n.$gt("Liquidation Order Path")+":"}},[!n.exceptionInfo.order_path||!n.exceptionInfo.order_path.length?t("span",[n._v("-")]):t("order-path",{attrs:{orderPath:n.exceptionInfo.order_path,isExceptionInfo:!0}})],1),n._v(" "),t("s-form-item",{attrs:{label:n.$gt("Updated Liquidation Order Path")+":"}},[!n.exceptionInfo.update_order_path||!n.exceptionInfo.update_order_path.length?t("span",[n._v("-")]):n._e(),n._v(" "),t("order-path",{attrs:{orderPath:n.exceptionInfo.update_order_path,orderStatus:void 0,isExceptionInfo:!0}})],1)]:n._e(),n._v(" "),n.visible.orderSNLog?t("OrderSNLog",{attrs:{visible:n.visible.orderSNLog,shipmentId:n.basicInfo.shipment_id},on:{"update:visible":function(i){return n.$set(n.visible,"orderSNLog",i)}}}):n._e()],2)},Ia=[];const Ca={getOrderSlaDetail:function(n){return B.Z.get("/api/sla/admin/order/detail",{params:n})}};var Dn=r("YkEE"),Qo=null,Xo=!1,qo=null,Sa=y.fZ,nr=null,tr=null,ar=null,Ta=y.G,er=null,Oa=function(){var n=this,t=n._self._c;return t("ul",n._l(n.orderPathList,function(a,i){return t("li",{key:a.key},[t("label",{class:{"cur-station":i===n.lastTargetStationIndex&&!n.isOrderFinishStatus}},[n._v(n._s(a.station_name))]),n._v(" "),i!==n.orderPathList.length-1?t("span",{staticClass:"arrow"},[n._v("->")]):n._e()])}),0)},$a=[];const Pa={props:["orderPath","targetStation","orderStatus","isExceptionInfo"],computed:(0,I.Z)({},(0,U.mapState)({orderStatusValueNameMap:function(n){return an()(n.enums.systemEnums.fleet_order_status)}}),{orderPathList:function(){return Array.isArray(this.orderPath)?this.orderPath:[]},lastTargetStationIndex:function(){return this.orderPathList.map(function(n){var t=n.station_id;return t}).lastIndexOf(this.targetStation)},isOrderFinishStatus:function(){if(this.isExceptionInfo)return!0;var n=this.orderStatusValueNameMap[this.orderStatus];return["Delivered","Lost","Damaged","Returned","Return Failed","Cancelled","Returning","Disposed"].includes(n)}})};var or=r("TL1c"),La=(0,C.Z)(Pa,Oa,$a,!1,null,"4e998153",null);const Aa=La.exports;var Kn=r("Yifc"),Ra=function(){var n=this,t=n._self._c;return t("s-dialog",{directives:[{name:"loading",rawName:"v-loading",value:n.loading,expression:"loading"}],attrs:{visible:n.visible,title:n.$gt("Log Detail"),"show-deafult-footer":!1,"before-close":n.closeDialog,width:"920px"},on:{"update:visible":function(i){n.visible=i}}},[t("s-core",{directives:[{name:"loading",rawName:"v-loading",value:n.loading.list,expression:"loading.list"}],ref:"sCore",attrs:{config:n.config,tableData:n.tableData,search:n.onSearch}})],1)},za=[];const Ma={props:{visible:{type:Boolean,default:!1},shipmentId:{type:String}},data:function(){return{loading:!1,tableData:{list:[],total:0},config:{table:{width:800,actionsWidth:160,columns:[{label:this.$gt("Time"),key:"op_time",render:function(t,a){return(0,D.MK)(a)},width:150},{label:this.$gt("Change Entity"),key:"op_field",width:180},{label:this.$gt("Before"),key:"old_value",width:150},{label:this.$gt("After"),key:"new_value",width:150}],showTotal:!0,props:{border:!0,spanMethod:this.spanMethod}}}}},watch:{visible:{immediate:!0,handler:function(n){var t=this;n&&this.$nextTick(function(){t.refreshList()})}}},methods:{refreshList:function(){this.$refs.sCore.refreshList()},onSearch:function(){var e=(0,w.Z)(u().mark(function t(a){var i,o,l,s,c,f;return u().wrap(function(h){for(;;)switch(h.prev=h.next){case 0:return a.ShipmentId=this.shipmentId,h.prev=1,this.loading=!0,h.next=5,O.UM.getOrderSNLogData(a);case 5:i=h.sent,o=i.data,l=o===void 0?{}:o,s=l.list||[],c=l.total||0,f=[],s.forEach(function(F){var x=F.rebook_list,A=F.op_time;x&&x.length&&x.forEach(function(v){v.op_field==="expected_pickup_time"&&(v.old_value=(0,D.MK)(v.old_value),v.new_value=(0,D.MK)(v.new_value)),f.push((0,I.Z)({},v,{op_time:A}))})}),this.tableData={list:f,total:c},h.next=18;break;case 15:h.prev=15,h.t0=h.catch(1),console.error("Get Log failed,",h.t0);case 18:return h.prev=18,this.loading=!1,h.finish(18);case 21:case"end":return h.stop()}},t,this,[[1,15,18,21]])}));function n(t){return e.apply(this,arguments)}return n}(),spanMethod:function(n,t,a,i){if(i===0){var o=this.fliterData(this.tableData.list).first[a],l=o>0?1:0;return{rowspan:o,colspan:l}}return{rowspan:1,colspan:1}},fliterData:function(n){var t=[],a=0,i=this.config.table.columns[0].key;return n.forEach(function(o,l){l===0?t.push(1):o[i]===n[l-1][i]?(t[a]+=1,t.push(0)):(t.push(1),a=l)}),{first:t}},closeDialog:function(){this.$emit("update:visible",!1)}}};var ja=(0,C.Z)(Ma,Ra,za,!1,null,null,null);const Ha=ja.exports,Ba={components:{OrderPath:Aa,SensitiveComponent:Dn.Z,OrderSNLog:Ha},props:{loadOrderDetail:{type:Function}},inject:["orderDetail"],data:function(){return{tabData:{},form:{},editing:{bulkyType:!1},loading:{page:!1,update:!1},visible:{orderSNLog:!1},hideRealFmType:y.sN,realFmTypeMap:L.$j,hasOrderInterception:y.OI,HAS_HIGH_VALUE:Sa,SHOPEE_PAY_IN_PICKUP:y.Ob,SHOW_SHIPMENT_FEE:y.Hm,CURRENCY_SYMBOL:y.oq,IS_SEGMENTED_CHANNEL:y.MI,HAS_RETURN_TO_SELLER:Kn.cy,HAS_RETURN_DESTINATION_SITE:Kn.sC,HAS_RETURN_ZIPCODE:Kn.Xl,HAS_NSS_SELLER_COD_ADJUSTMENT:at,hideTaxDoc:!0}},computed:(0,I.Z)({},(0,U.mapState)({orderAccounts:function(n){return(0,T.invert)(n.enums.systemEnums.order_account)||{}},bulkyTypeSelectOptions:function(n){return(0,b.jw)(n,{dataPath:"enums.systemEnums.bulky_config.bulky_type"})},orderAttributeType:function(n){return n.enums.systemEnums.order_attribute_type||{}},dgTypes:function(n){return(0,T.invert)(n.enums.systemEnums.dg_type)||{}},incentiveDimensionTypes:function(n){return(0,b.DV)(n,"enums.systemEnums.incentive_dimension_type")||{}},paymentRole:function(n){return(0,T.invert)(n.enums.systemEnums.payment_role)||{}},collectionMethods:function(n){return(0,T.invert)(n.enums.systemEnums.collection_method)||{}},settlementMethods:function(n){return(0,T.invert)(n.enums.systemEnums.settlement_method)||{}},realOriginFmType:function(n){return(0,T.invert)(n.enums.systemEnums.fm_type)||{}},mutualCheckLabel:function(n){return(n.enums.systemEnums.tracking_list_text_mapper||{}).mutual_check}}),{orderId:function(){var n=this.orderDetail.orderId,t=n===void 0?"":n;return t.toLocaleUpperCase()},basicInfo:function(){return this.tabData.basic_info||{}},returnInfo:function(){return this.tabData.return_info||{}},feeInfo:function(){return this.tabData.fee_info||{}},sellerInfo:function(){return this.tabData.seller_info||{}},slaDetailInfo:function(){return this.tabData.slaDetailInfo||{}},exceptionInfo:function(){return this.tabData.liquidation_info||{}},showExceptionInfo:function(){return Kt&&this.basicInfo&&this.basicInfo.order_flow===Lt.DISPOSAL&&this.basicInfo.disposal_method===At.LIQUIDATE},shipper_basic_info:function(){return this.tabData.shipper_basic_info||{}},receivedByLabel:function(){return y.Ux?this.$gt("Received By Station:"):this.$gt("Received By SOC:")},showBulkyTypeEditBtn:function(){if(!(0,b.wD)(this.$store,"ADMIN_UPDATE_ORDER_BULKY_TYPE"))return!1;var n=this.basicInfo.bulky_flag;return n},showDGType:function(){return y.vP},showOrderShipperInfo:function(){return!!this.tabData.shipper_basic_info&&(0,M.GJ)()},showSubPaymentMethod:function(){return y.EP},showOriginFMType:function(){var n=this.basicInfo.source_type;return![1,3].includes(n)},interceptionReturnResult:function(){return{0:this.$gt("Cancellation approved - buyer cancellation after pick up"),1:this.$gt("Cancellation rejected - parcel has been handed over to 4PL"),2:this.$gt("Cancellation rejected - parcel is out for delivery"),3:this.$gt("Cancellation rejected - parcel is returning to seller"),4:this.$gt("Cancellation rejected - the parcel is damaged/lost")}},realAsf:function(){return this.feeInfo.rounding_shipment_pricing&&this.feeInfo.rounding_shipment_pricing.toString()!=="0"?this.feeInfo.rounding_shipment_pricing:this.feeInfo.shipment_pricing},shopCategoryLabel:function(){var n=this.sellerInfo.shop_category;return n==="COMMON"&&y.VT?"C2C":n},showCODAmountMessage:function(){return at&&this.sellerInfo.is_cod_amount_change},showCodCollectMethod:function(){return y.Ne||y.eP},showMutualCheck:function(){return!!this.mutualCheckLabel},codPaymentMethod:function(){var n=this.feeInfo.collection_method;return n?this.collectionMethods[n]:"-"},codSettlementMethod:function(){var n=this.feeInfo.settlement_method;return n?this.settlementMethods[n]:"-"},blockFieldList:function(){var n=this.tabData.sensitive_permission,t=n===void 0?{}:n,a=t.blocked_field_list,i=a===void 0?[]:a;return Array.isArray(i)?i:[]},clickToViewFieldList:function(){var n=this.tabData.sensitive_permission,t=n===void 0?{}:n,a=t.click_to_view_field_list,i=a===void 0?[]:a;return Array.isArray(i)?i:[]},showTaxDoc:function(){return y.wU},showFinanceTooltip:function(){return y.fZ&&this.basicInfo.order_account===12}}),watch:{orderId:{handler:function(){this.loadData()},immediate:!0}},methods:{getStatusMapping:Wn.Be,formatRegionalDate:D.MK,filterHighValue:function(n){var t={0:this.$gt("No"),1:this.$gt("Yes")};return t[n]||"-"},filterMutualCheck:function(n){var t={0:this.$gt("No"),1:this.$gt("Yes")};return t[n]||"-"},appendFeeWithCurrency:function(n){return(0,T.isNil)(n)?"-":n+" "+y.oq},editOrderBulkyType:function(n){this.form=(0,I.Z)({},this.form,{bulky_type:this.basicInfo.bulky_type}),this.editing.bulkyType=n},updateOrderAttribute:function(){var e=(0,w.Z)(u().mark(function t(a,i,o){var l;return u().wrap(function(c){for(;;)switch(c.prev=c.next){case 0:return l={shipment_id:this.basicInfo.shipment_id,attribute_type:this.orderAttributeType[a],attribute_value:this.form[a],station_type:parseInt((0,M.VG)())},c.prev=1,(0,b.K4)(this,"update",!0),c.next=5,this.$store.dispatch("orderMgt/updateOrderAttribute",l);case 5:this.$message.success(L.Lz.update),this.loadData(),(0,T.isFunction)(o)&&o(!1),c.next=13;break;case 10:c.prev=10,c.t0=c.catch(1),console.error("update order attribute "+i+" error: ",c.t0);case 13:return c.prev=13,(0,b.K4)(this,"update",!1),c.finish(13);case 16:case"end":return c.stop()}},t,this,[[1,10,13,16]])}));function n(t,a,i){return e.apply(this,arguments)}return n}(),getPaymentRole:function(){var n=this.feeInfo,t=n.payment_role,a=n.payment_method_forward,i={1:this.$gt("Pay By Order"),2:this.$gt("Pay By Cycle")};return!this.paymentRole[t]||!i[a]?"-":this.paymentRole[t]+" Pay / "+i[a]},getASFCollectionMethod:function(){var n=this.feeInfo.forward_collection_method;return this.collectionMethods[n]||"-"},getASFSettlementMethod:function(){var n=this.feeInfo.forward_settlement_method;return this.settlementMethods[n]||"-"},hideSensitiveDataV2:function(n){return this.blockFieldList.includes(n)||this.clickToViewFieldList.includes(n)},showSensitiveDataIcon:function(n){return this.clickToViewFieldList.includes(n)},getRequestSensitiveDataParams:function(n,t,a){var i={shipment_id:this.basicInfo.shipment_id,data_field:n};return t?(0,I.Z)({},i,(0,rn.Z)({},t,a[t])):i},loadData:function(){var e=(0,w.Z)(u().mark(function t(){var a,i,o,l,s,c,f,m,h,F,x,A,v,G,P,k,tn;return u().wrap(function(R){for(;;)switch(R.prev=R.next){case 0:return R.prev=0,(0,b.K4)(this,"page",!0),a={shipment_id:this.orderId,station_type:(0,M.VG)()},R.next=5,O.UM.loadBasicInfo(a);case 5:return i=R.sent,o=i.data,this.tabData=o,R.prev=8,R.next=11,Ca.getOrderSlaDetail({shipment_id:this.orderId});case 11:l=R.sent,s=l.data||{},c=s.sla_fail_reason,f=s.expect_service_end_time,m=s.service_duration,h=s.time_unit,F=s.actual_service_duration,x=s.over_sla_time,A=s.is_support,v=A===void 0?!1:A,G=this.formatRegionalDate(f),P=h?G+"("+m+h+")":"-",k=x?" (over Origin.SLA "+x+" "+h+")":"",tn=F?F+" "+h+" "+k:"-",this.tabData=(0,I.Z)({},this.tabData,{slaDetailInfo:{origin_sla:P,actual_transit_time:tn,is_support:v,sla_fail_reason:c}}),R.next=23;break;case 20:R.prev=20,R.t0=R.catch(8),console.info("Load SLA Detail error,",R.t0);case 23:R.next=28;break;case 25:R.prev=25,R.t1=R.catch(0),console.error("Load basic info data error, ",R.t1);case 28:return R.prev=28,(0,b.K4)(this,"page",!1),R.finish(28);case 31:case"end":return R.stop()}},t,this,[[0,25,28,31],[8,20]])}));function n(){return e.apply(this,arguments)}return n}(),showOrderSNLogDialog:function(){this.visible.orderSNLog=!0}}};var dr=r("OoOe"),Ua=(0,C.Z)(Ba,Ea,Ia,!1,null,"2964c334",null);const Na=Ua.exports;var Za=function(){var n=this,t=n._self._c;return t("div",{directives:[{name:"loading",rawName:"v-loading",value:n.loading.page,expression:"loading.page"}],staticClass:"order-basic-info"},n._l(n.pickupData,function(a,i){return t("div",{key:i,staticClass:"order-basic-info-item"},[n.isIDSprinter?t("div",{staticClass:"category-title"},[n._v(n._s(n.showCategoryTitleForIDSprinter(a.pickup_proof_type)))]):n._e(),n._v(" "),t("s-form",{attrs:{"label-width":"70px"}},[n.isIDSprinter?t("div",{staticClass:"sub-category-title"},[n._v(n._s(n.$gt("Pickup Info")))]):t("div",{staticClass:"category-title"},[n._v(n._s(n.showTitle(a.pickup_proof_type)))]),n._v(" "),n._l(n.schemas,function(o,l){return t("s-form-item",{key:l},[t("div",{attrs:{slot:"label"},slot:"label"},[t("span",[n._v(n._s(o.label))]),n._v(" "),o.hasTooltip?t("s-tooltip",{staticClass:"tooltip",attrs:{placement:"bottom",content:o.tooltipContent}},[t("s-icon-question-outline",{staticClass:"help-icon"})],1):n._e(),n._v(" "),t("span",[n._v(":")])],1),n._v(" "),o.sensitive&&n.hideSensitiveData(o.key)&&!n.isDopOrder(a)?t("span",{staticClass:"buyer-info"},[t("sensitive-component",{key:n.orderId,attrs:{showIcon:n.showSensitiveDataIcon(o.key),requestParams:n.getRequestSensitiveDataParams(a,o.key),fetchSensitiveDataApi:n.fetchPickupOrderSensitiveData}})],1):o.render?t("span",{staticClass:"buyer-info"},[n._v(`
          `+n._s(o.render(a[o.key],a))+`
        `)]):t("span",[n._v(n._s(a[o.key]))])])})],2),n._v(" "),n.showPickupOrderTracking(a.pickup_order_tracking)?t("div",[n.isIDSprinter?t("div",{staticClass:"sub-category-title"},[n._v(n._s(n.$gt("Proof of Pickup Info"))+" ("+n._s(a.pickup_order_tracking.length)+")")]):t("div",{staticClass:"category-title"},[n._v(n._s(n.showProofTitle(a.pickup_proof_type))+" ("+n._s(a.pickup_order_tracking.length)+")")]),n._v(" "),t("s-tabs",{attrs:{type:"pane-card"},model:{value:n.activeOnHoldRecipient,callback:function(l){n.activeOnHoldRecipient=l},expression:"activeOnHoldRecipient"}},n._l(a.pickup_order_tracking,function(o,l){return t("s-tabs-pane",{key:l,attrs:{name:""+l,label:"Record "+(a.pickup_order_tracking.length-l)}},[t("s-form",{staticClass:"order-basic-info-form"},[t("s-form-item",{attrs:{label:n.$gt("Pickup Attempt Time")+":"}},[n._v(`
              `+n._s(n.format(o.ctime))+`
            `)]),n._v(" "),t("s-form-item",{attrs:{label:n.$gt("Pickup Result")+":"}},[n._v(`
              `+n._s(o.pickup_result)+`
            `)]),n._v(" "),t("s-form-item",{attrs:{label:n.$gt("Pickup Driver")+":"}},[n._v(`
              `+n._s(o.pickup_driver)+`
            `)]),n._v(" "),t("s-form-item",{attrs:{label:n.$gt("Pickup Task")+":"}},[n._v(`
              `+n._s(o.pickup_task_id)+`
            `)]),n._v(" "),n.isOnHoldRecord(o)||n.isRetryRecord(o)?t("s-form-item",{attrs:{label:n.$gt("Failed Reason")+":"}},[t("span",{staticClass:"text-warning"},[n._v(n._s(o.on_hold_reason))])]):n._e(),n._v(" "),t("s-form-item",{attrs:{label:(n.isOnHoldRecord(o)?n.$gt("On-hold Geo-Location"):n.$gt("Pickup Geo-Location"))+":"}},[n._v(`
              `+n._s(n.renderGeoLocation(o.geo_info))+`
              `),n.renderGeoLocation(o.geo_info)!=="-"?t("s-icon-location",{staticClass:"location",on:{click:function(c){return n.showMap(o.geo_info)}}}):n._e(),n._v(" "),n.getFakedLocationFlag(o.fake_gps_flag)?t("span",{staticClass:"faked-location"},[n._v(n._s(n.$gt("Faked")))]):n._e()],1),n._v(" "),n.geofenceGreyControlOn?t("s-form-item",{attrs:{label:n.$gt("Within Geofence")+":"}},[n._v(`
              `+n._s(o.with_geofence||"-")+`
            `)]):n._e(),n._v(" "),t("s-form-item",{attrs:{label:n.$gt("Remark")+":"}},[n._v(`
              `+n._s(o.remark||"-")+`
            `)]),n._v(" "),n.nonEmptyArray(o.photo_list)?t("s-form-item",{attrs:{label:n.$gt("Photo")+":"}},[n.isOnHoldRecord(o)?n._l(n.getImageList(o),function(s,c){return t("proof-of-onhold-image-info-dialog",{key:c,attrs:{type:"pickup_on_hold",initialIndex:c,"image-info-list":n.getImageList(o),"thumbnail-margins":"0 16px 0 10px","thumbnail-size":[80,80]}})}):n._l(n.getImageList(o),function(s,c){return t("proof-of-pickup-image-info-dialog",{key:c,attrs:{initialIndex:c,"image-info-list":n.getImageList(o),"thumbnail-margins":"0 16px 0 0","thumbnail-size":[80,80]}})})],2):n._e(),n._v(" "),t("s-form-item",{attrs:{label:n.$gt("e-signature")+":"}},[n.showSignature(o)?t("div",n._l(n.getSignatureUrl(o),function(s,c){return t("spx-shared-image-resizer",{key:c,attrs:{src:n.toFullPath(s),concise:"",thumbnailSize:[80,80]}})}),1):n._e()])],1)],1)}),1)],1):n._e(),n._v(" "),n.showPickupOrderTracking(a.rebooking_history)?t("div",{staticClass:"category-wrapper"},[t("div",{staticClass:"category-title"},[n._v(n._s(n.$gt("Update History ("))+n._s(a.rebooking_history.length)+")")]),n._v(" "),t("s-tabs",{attrs:{type:"pane-card"},model:{value:n.activeOnHoldRecipient,callback:function(l){n.activeOnHoldRecipient=l},expression:"activeOnHoldRecipient"}},n._l(a.rebooking_history,function(o,l){return t("s-tabs-pane",{key:l,attrs:{name:""+l,label:"Record "+(a.rebooking_history.length-l)}},[t("s-form",{attrs:{"label-width":"210px"}},n._l(n.updateHistoryFormSchemas,function(s){return t("s-form-item",{key:s.key,attrs:{label:s.label+":"}},[n._v(`
              `+n._s(n.renderFormItem(s,o))+`
            `)])}),1)],1)}),1)],1):n._e(),n._v(" "),n.HAS_PROOF_OF_PICKUP_HANDOVER&&n.showPickupOrderTracking(a.handover_order_tracking)?t("div",{staticClass:"category-wrapper"},[t("div",{staticClass:"category-title"},[n._v(n._s(n.$gt("Proof of Handover"))+" ("+n._s(a.handover_order_tracking.length)+")")]),n._v(" "),t("s-tabs",{attrs:{type:"pane-card"},model:{value:n.activeProofOfHandover,callback:function(l){n.activeProofOfHandover=l},expression:"activeProofOfHandover"}},n._l(a.handover_order_tracking,function(o,l){return t("s-tabs-pane",{key:l,attrs:{name:""+l,label:"Record "+(a.handover_order_tracking.length-l)}},[t("proof-of-handover",{staticClass:"order-basic-info-form",attrs:{info:o},on:{showMap:n.showMap}})],1)}),1)],1):n._e(),n._v(" "),n.showHandoverOnHold(a.handoverOnHoldList)?t("div",{staticClass:"category-wrapper"},[t("div",{staticClass:"category-title"},[n._v(n._s(n.$gt("Proof of Handover On-Hold"))+" ("+n._s(a.handoverOnHoldList.length)+")")]),n._v(" "),t("s-tabs",{attrs:{type:"pane-card"},model:{value:n.activeProofOfHandoverOnHold,callback:function(l){n.activeProofOfHandoverOnHold=l},expression:"activeProofOfHandoverOnHold"}},n._l(a.handoverOnHoldList,function(o,l){return t("s-tabs-pane",{key:l,attrs:{name:""+l,label:"Record "+(a.handoverOnHoldList.length-l)}},[o.onhold_type===n.OrderOnHoldType.handover_to_driver?t("proof-of-handover-driver-on-hold",{staticClass:"order-basic-info-form",attrs:{info:o},on:{showMap:n.showMap}}):t("proof-of-handover-on-hold",{staticClass:"order-basic-info-form",attrs:{info:o},on:{showMap:n.showMap}})],1)}),1)],1):n._e(),n._v(" "),n.nonEmptyArray(a.handover_record_list)?t("div",{staticClass:"category-wrapper"},[t("div",{staticClass:"category-title"},[n._v(n._s(n.$gt("Handover Record")))]),n._v(" "),t("transfer-task-record",{attrs:{transferTaskRecords:a.handover_record_list}})],1):n._e()],1)}),0)},Va=[];const Ga={fetchPickupOrderSensitiveData:function(n){return B.Z.get("/api/admin/pickup/pickup_order/sensitive/data/show",{params:n})}};var En=r("PcDS"),Wa=function(){var n=this,t=n._self._c;return t("image-info-dialog",n._b({attrs:{showUploadedFrom:!0}},"image-info-dialog",n.$attrs,!1),[t("div",{attrs:{slot:"title"},slot:"title"},[n._v(`
    `+n._s(n.$gt("Photo"))+`
    `),n.tooltips.photo?t("s-popover",{attrs:{placement:"right-start"}},[t("div",[t("p",[n._v(n._s(n.tooltips.photoTitle))]),n._v(" "),n._l(n.tooltips.photo,function(a,i){return t("p",{key:i},[n._v(`
          `+n._s(i+1)+") "+n._s(a)+`
        `)])})],2),n._v(" "),t("s-icon-question-outline",{staticClass:"help-icon",attrs:{slot:"reference",width:14},slot:"reference"})],1):n._e()],1),n._v(" "),t("div",{attrs:{slot:"shootingTimeLabel"},slot:"shootingTimeLabel"},[t("span",[n._v(n._s(n.$gt("POH Shooting Time")))]),n._v(" "),n.tooltips.shootingTime?t("s-popover",{attrs:{placement:"top",content:n.tooltips.shootingTime,"popper-options":n.helpPopperOptions}},[t("s-icon-question-outline",{staticClass:"help-icon",attrs:{slot:"reference",width:14},slot:"reference"})],1):n._e(),n._v(" "),t("span",[n._v(":")])],1),n._v(" "),t("div",{attrs:{slot:"geoLocationLabel"},slot:"geoLocationLabel"},[t("span",[n._v(n._s(n.$gt("POH Geo-Location")))]),n._v(" "),n.tooltips.geoLocation?t("s-popover",{attrs:{placement:"top",content:n.tooltips.geoLocation,"popper-options":n.helpPopperOptions}},[t("s-icon-question-outline",{staticClass:"help-icon",attrs:{slot:"reference",width:14},slot:"reference"})],1):n._e(),n._v(" "),t("span",[n._v(":")])],1)])},Ka=[],Ya=function(){var n=this,t=n._self._c;return t("div",{staticClass:"container",style:n.containerStyle},[t("img",{staticClass:"thumbnail round",style:n.imgStyle,attrs:{src:n.previewImageUrl},on:{click:n.showOriginImage}}),n._v(" "),t("s-dialog",{attrs:{"append-to-body":!1,visible:n.originImgShowing,modal:!1,width:"572px"},on:{"update:visible":function(i){n.originImgShowing=i}}},[t("div",{attrs:{slot:"title"},slot:"title"},[n._t("title",function(){return[n._v(`
        `+n._s(n.$gt("Photo"))+`
      `)]})],2),n._v(" "),n.imageInfo?t("div",{staticClass:"image-info"},[t("div",{staticClass:"info-item"},[t("div",{staticClass:"info-label"},[n._t("shootingTimeLabel",function(){return[t("span",[n._v(n._s(n.$gt("Shooting Time"))+":")])]})],2),n._v(`
        `+n._s(n.format(n.imageInfo.shooting_time))+`
      `)]),n._v(" "),t("div",{staticClass:"info-item"},[t("div",{staticClass:"info-label"},[n._t("geoLocationLabel",function(){return[t("span",[n._v(n._s(n.$gt("Geo-Location"))+":")])]})],2),n._v(" "),t("span",[n._v(n._s(n.renderGeoLocation(n.location)))]),n._v(" "),n.renderGeoLocation(n.location)!=="-"?t("s-icon-location",{staticClass:"location",on:{click:function(i){n.visible.map=!0}}}):n._e()],1),n._v(" "),n.showUploadedFrom?[t("div",{staticClass:"info-item"},[t("div",{staticClass:"info-label"},[n._v(`
            `+n._s(n.$gt("Uploaded From"))+`:
          `)]),n._v(`
          `+n._s(n.uploadedFrom)+`
        `)]),n._v(" "),t("div",{staticClass:"info-item"},[t("div",{staticClass:"info-label"},[n._v(`
            `+n._s(n.$gt("Uploaded Time"))+`:
          `)]),n._v(`
          `+n._s(n.uploadedTime)+`
        `)])]:n._e()],2):n._e(),n._v(" "),t("s-image-viewer",{attrs:{"image-list":n.imageList,initialIndex:n.currentIndex},on:{switch:n.onSwitchImage}})],1),n._v(" "),n.visible.map?t("map-dialog",{attrs:{location:n.location,visible:n.visible.map},on:{"update:visible":function(i){return n.$set(n.visible,"map",i)}}}):n._e()],1)},Ja=[],Qa=r("sk9p"),V=r("P451"),In,lr={STATUS_CLASS:{11:"danger",12:"danger",14:"danger",26:"danger",3:"danger",31:"danger",4:"success",6:"danger"}},et={camera:1,gallery:2},Xa=(In={},(0,rn.Z)(In,et.camera,(0,V.ok)("Camera")),(0,rn.Z)(In,et.gallery,(0,V.ok)("Gallery")),In),cr="recipient_cpf";const qa={components:{MapDialog:un.Z},props:{thumbnailSize:{type:Array,default:function(){return[148,148]}},thumbnailMargins:{type:String,default:"0 10px"},initialIndex:{type:Number,default:0},imageInfoList:{type:Array,default:function(){return[]}},showUploadedFrom:{type:Boolean}},data:function(){return{originImgShowing:!1,visible:{map:!1},currentIndex:0}},computed:{containerStyle:function(){var n=this.thumbnailMargins;return`
        margin: `+n+`;
      `},imgStyle:function(){var n=(0,Qa.Z)(this.thumbnailSize,2),t=n[0],a=n[1];return`
        width: `+t+`px;
        height: `+a+`px;
        object-fit: contain;
      `},location:function(){return!this.imageInfo.lat&&!this.imageInfo.lng?null:{lat:this.imageInfo.lat,lng:this.imageInfo.lng}},previewImageUrl:function(){var n=this.initialIndex,t=this.imageInfoList,a=this.toFullPath,i=t[n]||{};return a(i.image_url)},imageInfo:function(){return this.imageInfoList[this.currentIndex]},imageList:function(){var n=this.imageInfoList,t=this.toFullPath;return n.map(function(a){return{src:t(a.image_url)}})},uploadedFrom:function(){var n=this.imageInfo.upload_from;return Xa[n]||"-"},uploadedTime:function(){var n=this.imageInfo.upload_time;return n?(0,D.WU)(n):"-"}},methods:{showOriginImage:function(){this.originImgShowing=!0,this.currentIndex=this.initialIndex},renderGeoLocation:function(n){return fn()(n)?"(Latitude) "+n.lat+" / (Longitude) "+n.lng:"-"},toFullPath:function(n){return/^https?:\/\//.test(n||"")?n:""+B.v+n},format:D.WU,onSwitchImage:function(n){this.currentIndex=n}}};var gr=r("v/+o"),ne=(0,C.Z)(qa,Ya,Ja,!1,null,"102002d4",null);const Cn=ne.exports;var pn={PICKUP_ON_HOLD:"pickup_on_hold",RETURN_ON_HOLD:"return_on_hold",DELIVERY_ON_HOLD:"delivery_on_hold"};const te={components:{imageInfoDialog:Cn},props:{type:String,validator:function(n){return S()(pn).includes(n)}},data:function(){var n;return{helpPopperOptions:{modifiers:{flip:{enabled:!1},preventOverflow:{escapeWithReference:!0}}},onHoldTypes:pn,tooltipMap:(n={},(0,rn.Z)(n,pn.PICKUP_ON_HOLD,{photoTitle:this.$gt("Possible Reasons for missing/wrong POH shooting time, geo-location, address level or photo"),photo:[this.$gt("Driver submitted this photo from his gallery."),this.$gt("Driver made adjustment to the photo(like photoshop)."),this.$gt("System failed to get shooting time or geo-location from the photo or app."),this.$gt("Based on the geolocation, system got wrong or failed to get address level results(rely on external service)."),this.$gt("Driver finish offline on-hold and the app cache was accidentally cleared by driver/system(very rare).")],shootingTime:this.$gt("The timestamp when driver shoot the POH photo(same with watermark, may be slightly different from on-hold time)."),geoLocation:this.$gt("The geo-location where this POH photo was taken(same with watermark, may be slightly different from on-hold geo-location).")}),(0,rn.Z)(n,pn.RETURN_ON_HOLD,{photoTitle:this.$gt("Possible Reasons for missing/wrong POH shooting time, geo-location, address level or photo"),photo:[this.$gt("Driver submitted this photo from his gallery."),this.$gt("Driver made adjustment to the photo(like photoshop)."),this.$gt("System failed to get shooting time or geo-location from the photo or app."),this.$gt("Based on the geolocation, system got wrong or failed to get address level results(rely on external service)."),this.$gt("Driver finish offline on-hold and the app cache was accidentally cleared by driver/system(very rare).")],shootingTime:this.$gt("The timestamp when driver shoot the POH photo(same with watermark, may be slightly different from on-hold time)."),geoLocation:this.$gt("The geo-location where this POH photo was taken(same with watermark, may be slightly different from on-hold geo-location).")}),(0,rn.Z)(n,pn.DELIVERY_ON_HOLD,{}),n)}},computed:{tooltips:function(){return this.tooltipMap[pn.PICKUP_ON_HOLD]}}};var ae=(0,C.Z)(te,Wa,Ka,!1,null,null,null);const it=ae.exports;var ee=function(){var n=this,t=n._self._c;return t("image-info-dialog",n._b({attrs:{showUploadedFrom:!0}},"image-info-dialog",n.$attrs,!1),[t("div",{attrs:{slot:"title"},slot:"title"},[n._v(`
    `+n._s(n.$gt("Photo"))+`
    `),t("s-popover",{attrs:{placement:"right-start"}},[t("div",[t("p",[n._v(n._s(n.$gt("Possible Reasons for missing/wrong POP shooting time, geo-location, address level or photo"))+":")]),n._v(" "),t("p",[n._v("1) "+n._s(n.$gt("Driver submitted this photo from his gallery.")))]),n._v(" "),t("p",[n._v("2) "+n._s(n.$gt("Driver made adjustment to the photo(like photoshop).")))]),n._v(" "),t("p",[n._v("3) "+n._s(n.$gt("System failed to get shooting time or geo-location from the photo or app.")))]),n._v(" "),t("p",[n._v("4) "+n._s(n.$gt("Based on the geolocation, system got wrong or failed to get address level results(rely on external service).")))]),n._v(" "),t("p",[n._v("5) "+n._s(n.$gt("Driver finish offline pickup and the app cache was accidentally cleared by driver/system(very rare).")))])]),n._v(" "),t("s-icon-question-outline",{staticClass:"help-icon",attrs:{slot:"reference",width:14},slot:"reference"})],1)],1),n._v(" "),t("div",{attrs:{slot:"shootingTimeLabel"},slot:"shootingTimeLabel"},[t("span",[n._v(n._s(n.$gt("POP Shooting Time")))]),n._v(" "),t("s-popover",{attrs:{placement:"top",content:n.$gt("The timestamp when driver shoot the POP photo(same with watermark, may be slightly different from pickup time)."),"popper-options":n.helpPopperOptions}},[t("s-icon-question-outline",{staticClass:"help-icon",attrs:{slot:"reference",width:14},slot:"reference"})],1),n._v(" "),t("span",[n._v(":")])],1),n._v(" "),t("div",{attrs:{slot:"geoLocationLabel"},slot:"geoLocationLabel"},[t("span",[n._v(n._s(n.$gt("POP Geo-Location")))]),n._v(" "),t("s-popover",{attrs:{placement:"top",content:n.$gt("The geo-location where this POP photo was taken(same with watermark, may be slightly different from pickup geo-location)."),"popper-options":n.helpPopperOptions}},[t("s-icon-question-outline",{staticClass:"help-icon",attrs:{slot:"reference",width:14},slot:"reference"})],1),n._v(" "),t("span",[n._v(":")])],1)])},ie=[];const oe={components:{imageInfoDialog:Cn},data:function(){return{helpPopperOptions:{modifiers:{flip:{enabled:!1},preventOverflow:{escapeWithReference:!0}}}}}};var hr=r("zq/y"),re=(0,C.Z)(oe,ee,ie,!1,null,"7ee368ad",null);const se=re.exports;function Sn(e){return S()(e).length?"Latitude: "+(e.lat||0)+" Longitude: "+(e.lng||0):"-"}function Tn(e){return""+B.v+e}function On(e){return e===L.S7.Fake}function ot(e){return e+":"}function de(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=e.image_list||[],t=e.photo_list||[];return n.length===0&&t.length>0?t.map(function(a){return{image_url:a}}):n}var le=function(){var n=this,t=n._self._c;return n.info?t("s-form",{attrs:{"label-width":"70px"}},[t("s-form-item",{attrs:{label:n.$gt("Handover Time")+":"}},[n._v(`
    `+n._s(n.format(n.info.handover_time))+`
  `)]),n._v(" "),t("s-form-item",{attrs:{label:n.$gt("Driver name")+":"}},[n.info.pickup_driver_id||n.info.pickup_driver_name?[n.info.pickup_driver_id?t("span",[n._v(`
        [`+n._s(n.info.pickup_driver_id)+`]
      `)]):n._e(),n._v(" "),n.info.pickup_driver_name?t("span",[n._v(n._s(n.info.pickup_driver_name))]):n._e()]:t("span",[n._v("-")])],2),n._v(" "),t("s-form-item",{attrs:{label:n.$gt("Geo-Location")+":"}},[n._v(`
    `+n._s(n.renderGeoLocation(n.info.geo_info))+`
    `),n.renderGeoLocation(n.info.geo_info)!=="-"?t("s-icon-location",{staticClass:"location",on:{click:function(i){return n.$emit("showMap",n.info.geo_info)}}}):n._e(),n._v(" "),n.getFakedLocationFlag(n.info.fake_gps_flag)?t("span",{staticClass:"faked-location"},[n._v(n._s(n.$gt("Faked")))]):n._e()],1),n._v(" "),t("s-form-item",{attrs:{label:n.$gt("Photo")+":"}},[n.info.photo_list&&n.info.photo_list.length>0?n._l(n.info.photo_list,function(a,i){return t("image-resizer",{key:i,attrs:{src:n.toFullPath(a),concise:"","thumbnail-margins":"0 16px 0 0","thumbnail-size":[80,80]}})}):t("span",[n._v("-")])],2),n._v(" "),t("s-form-item",{attrs:{label:n.$gt("Operator Signatory")+":"}},[n._v(`
    `+n._s(n.info.operator_signatory||"-")+`
  `)]),n._v(" "),t("s-form-item",{attrs:{label:n.$gt("Operator Signature")+":"}},[n.info.operator_signature?t("image-resizer",{attrs:{src:n.toFullPath(n.info.operator_signature),concise:"","thumbnail-margins":"0 16px 0 0",thumbnailSize:[80,80]}}):t("span",[n._v("-")])],1),n._v(" "),t("s-form-item",{attrs:{label:n.$gt("Driver Signature")+":"}},[n.info.driver_signature?t("image-resizer",{staticClass:"image-resizer",attrs:{src:n.toFullPath(n.info.driver_signature),concise:"","thumbnail-margins":"0 16px 0 0",thumbnailSize:[80,80]}}):t("span",[n._v("-")])],1),n._v(" "),t("s-form-item",{attrs:{label:n.$gt("Remark")+":"}},[n._v(`
    `+n._s(n.info.remark||"-")+`
  `)])],1):n._e()},ce=[],Yn=r("arng");const pe={components:{ImageResizer:Yn.Z},props:{info:{type:Object}},methods:{format:D.WU,renderGeoLocation:Sn,getFakedLocationFlag:On,toFullPath:Tn}};var ge=(0,C.Z)(pe,le,ce,!1,null,null,null);const fe=ge.exports;var ue=function(){var n=this,t=n._self._c;return n.info?t("s-form",{attrs:{"label-width":"70px"}},[t("s-form-item",{attrs:{label:n.formatLabel(n.$gt("Handover on-hold Time"))}},[n._v(`
    `+n._s(n.format(n.info.onhold_time))+`
  `)]),n._v(" "),t("s-form-item",{attrs:{label:n.formatLabel(n.$gt("Handover on-hold Reason"))}},[n._v(`
    `+n._s(n.info.on_hold_reason||"-")+`
  `)]),n._v(" "),t("s-form-item",{attrs:{label:n.formatLabel(n.$gt("Transferor"))}},[n.info.transferor_id||n.info.transferor_name?[n.info.transferor_id?t("span",[n._v(`
        [`+n._s(n.info.transferor_id)+`]
      `)]):n._e(),n._v(" "),n.info.transferor_name?t("span",[n._v(n._s(n.info.transferor_name))]):n._e()]:t("span",[n._v("-")])],2),n._v(" "),t("s-form-item",{attrs:{label:n.formatLabel(n.$gt("Receiver"))}},[n.info.receiver_id||n.info.receiver_name?[n.info.receiver_id?t("span",[n._v(`
        [`+n._s(n.info.receiver_id)+`]
      `)]):n._e(),n._v(" "),n.info.receiver_name?t("span",[n._v(n._s(n.info.receiver_name))]):n._e()]:t("span",[n._v("-")])],2),n._v(" "),t("s-form-item",{attrs:{label:n.formatLabel(n.$gt("Geo-Location"))}},[n._v(`
    `+n._s(n.renderGeoLocation(n.info.geo_info))+`
    `),n.renderGeoLocation(n.info.geo_info)!=="-"?t("s-icon-location",{staticClass:"location",on:{click:function(i){return n.$emit("showMap",n.info.geo_info)}}}):n._e(),n._v(" "),n.getFakedLocationFlag(n.info.fake_gps_flag)?t("span",{staticClass:"faked-location"},[n._v(n._s(n.$gt("Faked")))]):n._e()],1),n._v(" "),t("s-form-item",{attrs:{label:n.formatLabel(n.$gt("Transferor Signature"))}},[n.info.transfer_signatory?t("image-resizer",{attrs:{src:n.toFullPath(n.info.transfer_signatory),concise:"","thumbnail-margins":"0 16px 0 0",thumbnailSize:[80,80]}}):t("span",[n._v("-")])],1),n._v(" "),t("s-form-item",{attrs:{label:n.formatLabel(n.$gt("Receiver Signature"))}},[n.info.receiver_signatory?t("image-resizer",{staticClass:"image-resizer",attrs:{src:n.toFullPath(n.info.receiver_signatory),concise:"","thumbnail-margins":"0 16px 0 0",thumbnailSize:[80,80]}}):t("span",[n._v("-")])],1),n._v(" "),t("s-form-item",{attrs:{label:n.formatLabel(n.$gt("Remark"))}},[n._v(`
    `+n._s(n.info.remark||"-")+`
  `)]),n._v(" "),t("s-form-item",{attrs:{label:n.formatLabel(n.$gt("Photo"))}},[n.info.photo_list&&n.info.photo_list.length>0?n._l(n.info.photo_list,function(a,i){return t("image-resizer",{key:i,attrs:{src:n.toFullPath(a),concise:"","thumbnail-margins":"0 16px 0 0","thumbnail-size":[80,80]}})}):t("span",[n._v("-")])],2)],1):n._e()},he=[];const me={components:{ImageResizer:Yn.Z},props:{info:{type:Object}},methods:{format:D.WU,renderGeoLocation:Sn,getFakedLocationFlag:On,toFullPath:Tn,formatLabel:ot}};var ve=(0,C.Z)(me,ue,he,!1,null,null,null);const be=ve.exports;var xe=function(){var n=this,t=n._self._c;return n.info?t("s-form",{attrs:{"label-width":"70px"}},[t("s-form-item",{attrs:{label:n.formatLabel(n.$gt("Handover on-hold Time"))}},[n._v(`
    `+n._s(n.format(n.info.handover_onhold_time))+`
  `)]),n._v(" "),t("s-form-item",{attrs:{label:n.formatLabel(n.$gt("Handover on-hold Reason"))}},[n._v(`
    `+n._s(n.info.handover_onhold_reason||"-")+`
  `)]),n._v(" "),t("s-form-item",{attrs:{label:n.formatLabel(n.$gt("Driver name"))}},[n.info.pickup_driver_id||n.info.pickup_driver_name?[n.info.pickup_driver_id?t("span",[n._v(`
        [`+n._s(n.info.pickup_driver_id)+`]
      `)]):n._e(),n._v(" "),n.info.pickup_driver_name?t("span",[n._v(n._s(n.info.pickup_driver_name))]):n._e()]:t("span",[n._v("-")])],2),n._v(" "),t("s-form-item",{attrs:{label:n.formatLabel(n.$gt("Geo-Location"))}},[n._v(`
    `+n._s(n.renderGeoLocation(n.info.geo_info))+`
    `),n.renderGeoLocation(n.info.geo_info)!=="-"?t("s-icon-location",{staticClass:"location",on:{click:function(i){return n.$emit("showMap",n.info.geo_info)}}}):n._e(),n._v(" "),n.getFakedLocationFlag(n.info.fake_gps_flag)?t("span",{staticClass:"faked-location"},[n._v(n._s(n.$gt("Faked")))]):n._e()],1),n._v(" "),t("s-form-item",{attrs:{label:n.formatLabel(n.$gt("Operator Signatory"))}},[n._v(`
    `+n._s(n.info.station_signatory||"-")+`
  `)]),n._v(" "),t("s-form-item",{attrs:{label:n.formatLabel(n.$gt("Operator Signature"))}},[n.info.station_signature?t("image-resizer",{attrs:{src:n.toFullPath(n.info.station_signature),concise:"","thumbnail-margins":"0 16px 0 0",thumbnailSize:[80,80]}}):t("span",[n._v("-")])],1),n._v(" "),t("s-form-item",{attrs:{label:n.formatLabel(n.$gt("Driver Signature"))}},[n.info.driver_signature?t("image-resizer",{staticClass:"image-resizer",attrs:{src:n.toFullPath(n.info.driver_signature),concise:"","thumbnail-margins":"0 16px 0 0",thumbnailSize:[80,80]}}):t("span",[n._v("-")])],1),n._v(" "),t("s-form-item",{attrs:{label:n.formatLabel(n.$gt("Remark"))}},[n._v(`
    `+n._s(n.info.remark||"-")+`
  `)]),n._v(" "),t("s-form-item",{attrs:{label:n.formatLabel(n.$gt("Photo"))}},[n.info.photo_list&&n.info.photo_list.length>0?n._l(n.info.photo_list,function(a,i){return t("image-resizer",{key:i,attrs:{src:n.toFullPath(a),concise:"","thumbnail-margins":"0 16px 0 0","thumbnail-size":[80,80]}})}):t("span",[n._v("-")])],2)],1):n._e()},_e=[];const ye={components:{ImageResizer:Yn.Z},props:{info:{type:Object}},methods:{format:D.WU,renderGeoLocation:Sn,getFakedLocationFlag:On,toFullPath:Tn,formatLabel:ot}};var we=(0,C.Z)(ye,xe,_e,!1,null,null,null);const Fe=we.exports;var ke=function(){var n=this,t=n._self._c,a=n._self._setupProxy;return n.transferTaskRecords.length===1?t("div",[t("record-item-display",{attrs:{transferTaskRecord:n.transferTaskRecords[0]}})],1):t("div",[t("s-tabs",{model:{value:n.activeTab,callback:function(o){n.activeTab=o},expression:"activeTab"}},n._l(n.sliceTransferTaskRecords,function(i,o){return t("s-tabs-pane",{key:o,attrs:{name:n.getTabName(o),label:n.getTabName(o)}},[t("record-item-display",{attrs:{transferTaskRecord:i}})],1)}),1)],1)},De=[],vn=r("fp3J"),Ee=function(){var n=this,t=n._self._c,a=n._self._setupProxy;return t("s-form",{attrs:{"label-width":"150px"}},n._l(n.transferTaskProps,function(i,o){return t("s-form-item",n._b({key:o},"s-form-item",i,!1),[t("dom-render",{attrs:{node:n.renderProp(i,n.transferTaskRecord)}})],1)}),1)},Ie=[],Ce=r("lSCD"),Se=r.n(Ce),Te=r("1qWl"),Oe=r("3plP"),$e=r("1EQe"),rt=function(){return{label:(0,V.ok)("Transferor"),key:"transferor_id",render:function(t){return!t||!t.transferor_id?"-":"["+t.transferor_id+"] "+t.transferor_name}}},st=function(){return{label:(0,V.ok)("Receiver"),key:"receiver_id",render:function(t){return!t||!t.receiver_id?"-":"["+t.receiver_id+"] "+t.receiver_name}}},Pe=function(n){var t=vn.h.bind(n);return[{label:(0,V.ok)("Trip Transfer Task ID"),key:"transfer_task_id"},{label:(0,V.ok)("Status"),key:"transfer_task_display_status"},rt(),st(),{label:(0,V.ok)("Number of orders transferred"),key:"order_transfered_num"},{label:(0,V.ok)("Number of orders on-hold"),key:"order_onhold_num"},{label:(0,V.ok)("Create Time"),key:"ctime",render:function(i){return!i||typeof i.ctime!="number"?"-":(0,D.WU)(i.ctime)}},{label:(0,V.ok)("Complete Time"),key:"end_time",render:function(i){return!i||typeof i.end_time!="number"?"-":(0,D.WU)(i.end_time)}},{label:(0,V.ok)("Action"),render:function(i){var o=function(){n.root.$router.push({path:"/transferTask/trip/detail/"+i.transfer_task_id})};return t("s-button",ln()([{attrs:{type:"text"}},{on:{click:function(s){for(var c=arguments.length,f=Array(c>1?c-1:0),m=1;m<c;m++)f[m-1]=arguments[m];o.apply(void 0,[s].concat(f))}}}]),[(0,V.ok)("View")])}}]},Le=function(){return[{label:(0,V.ok)("Handover Task ID"),key:"transfer_task_id"},{label:(0,V.ok)("Status"),key:"transfer_task_display_status"},rt(),{label:(0,V.ok)("Transferor Type"),key:"transferor_type"},st(),{label:(0,V.ok)("Receiver Type"),key:"receiver_type"},{label:(0,V.ok)("Start Time"),key:"ctime",render:function(t){return!t||typeof t.ctime!="number"?"-":(0,D.WU)(t.ctime)}},{label:(0,V.ok)("End Time"),key:"end_time",render:function(t){return!t||typeof t.end_time!="number"?"-":(0,D.WU)(t.end_time)}}]};const Ae=function(e){return(0,$e.ub)()==="BR"?Pe(e):Le(e)},Re=(0,vn.defineComponent)({components:{DomRender:Te.Z},props:{transferTaskRecord:Object},setup:function(n,t){var a=Ae(t),i=function(f){return Array.isArray(f)?f.length?f.join(", "):"-":f},o=function(f,m){return Se()(f.render)?f.render(m):i(m[f.key])},l=function(f,m){return(0,Oe.l)(o(f,m))},s=function(f,m){var h=o(f,m);return h===0?h:h||"-"};return{transferTaskProps:a,isRenderVNode:l,renderProp:s}}});var ze=(0,C.Z)(Re,Ee,Ie,!1,null,null,null);const Me=ze.exports,je=(0,vn.defineComponent)({components:{RecordItemDisplay:Me},props:{transferTaskRecords:Array},setup:function(n){var t=(0,vn.ref)(""),a=function(l){return"Record "+l},i=(0,vn.computed)(function(){return n.transferTaskRecords.slice(0,n.maxRecord)});return{activeTab:t,getTabName:a,sliceTransferTaskRecords:i}}});var He=(0,C.Z)(je,ke,De,!1,null,null,null);const Be=He.exports;var dt=function(n){return(0,T.isNumber)(n)?(0,D.WU)(n):""},lt=function(n){if(!(0,T.isPlainObject)(n))return"";var t=n.pickup_time_slot_start,a=n.pickup_time_slot_end;return[dt(t),dt(a)].join(" ~ ")},Ue={handover_to_station:0,handover_to_driver:1};const Ne={components:{ProofOfHandover:fe,SensitiveComponent:Dn.Z,ProofOfHandoverOnHold:Fe,ProofOfHandoverDriverOnHold:be,TransferTaskRecord:Be,proofOfPickupImageInfoDialog:se,proofOfOnholdImageInfoDialog:it},filters:{format:D.WU},props:{stationType:{type:String}},inject:["orderDetail"],data:function(){return{tabData:{},activeOnHoldRecipient:"0",activeProofOfHandover:"0",activeProofOfHandoverOnHold:"0",handoverToStation:1,handoverToDriver:2,format:D.WU,OrderOnHoldType:Ue,schemas:[{label:this.$gt("Pickup Status"),key:"pickup_status",hasTooltip:!0,tooltipContent:this.$gt("Pickup Order Status associated with pickup order, not order tracking status")},{label:this.$gt("Pickup Attempts"),key:"pickup_attempts",render:function(t){return t||0}},{label:this.$gt("Seller\u2019s Fault Times"),key:"seller_fault_times",render:function(t){return t||0}},{label:this.$gt("Latest Assigned Time"),key:"assigned_time",render:function(t){return(0,D.WU)(t)}},{label:this.$gt("ETA"),key:"eta",render:function(t){return(0,D.WU)(t)}},{label:this.$gt("Pickup Time Slot"),key:"pickup_time_slot",render:function(t){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},i=a.pickup_start_time,o=a.pickup_end_time,l=a.eta;return l?(0,D.IV)(i)+" ~ "+(0,D.IV)(o):(0,D.Dv)(i)+" ~ "+(0,D.Dv)(o)}},{label:this.$gt("Pickup Point ID"),key:"pickup_point_id"},{label:this.$gt("Shop ID"),key:"shop_id",sensitive:!0},{label:this.$gt("Seller Name"),key:"seller_name",sensitive:!0},{label:this.$gt("Address"),key:"seller_addr",sensitive:!0},{label:this.$gt("Text Address"),key:"customer_address",sensitive:!0},{label:this.$gt("Driver Name"),key:"driver_name",render:function(t){return(0,T.isArray)(t)?t.join(", "):"-"}},{label:this.$gt("Driver Contact"),key:"driver_contact",render:function(t){return(0,T.isArray)(t)?t.join(", "):"-"}}].filter(function(n){var t=n.hide;return!t}),updateHistoryFormSchemas:[{label:"Update Request Time",key:"update_request_times",render:function(t){return(0,D.WU)(t)}},{label:"Update Pickup Time Slot Before",key:"pickup_time_slot_before",render:lt},{label:"Update Pickup Time Slot After",key:"pickup_time_slot_after",render:lt},{label:"Update Pickup Address Before",key:"pickup_address_before"},{label:"Update Pickup Address After",key:"pickup_address_after"}],location:{},visible:{map:!1},loading:{page:!1},IS_ID:y.YB,HAS_PROOF_OF_PICKUP_HANDOVER:Nt,fetchPickupOrderSensitiveData:Ga.fetchPickupOrderSensitiveData}},computed:(0,I.Z)({},(0,U.mapState)({orderAccounts:function(n){return n.enums.systemEnums.order_account||{}},pickupOrderStatus:function(n){return(0,T.invert)(n.enums.systemEnums.pickup_order_status)||{}},geofenceGreyControlOn:function(n){return n.systemConfig.cidApolloConfigValue["application.geofence"]}}),{orderId:function(){var n=this.orderDetail.orderId,t=n===void 0?"":n;return t.toLocaleUpperCase()},pickupData:function(){return!this.tabData||!this.tabData.pickup_info_list?[]:this.tabData.pickup_info_list.map(function(n){var t=n.handover_onhold_order_tracking||[],a=n.transfer_task_onhold_info||[],i=t.concat(a);return(0,I.Z)({},n,{handoverOnHoldList:i})})},isIDSprinter:function(){return y.YB&&this.pickupData.some(function(n){return n.pickup_proof_type==="sprinter"})},blockFieldList:function(){var n=this.tabData.sensitive_permission,t=n===void 0?{}:n,a=t.blocked_field_list,i=a===void 0?[]:a;return Array.isArray(i)?i:[]},clickToViewFieldList:function(){var n=this.tabData.sensitive_permission,t=n===void 0?{}:n,a=t.click_to_view_field_list,i=a===void 0?[]:a;return Array.isArray(i)?i:[]}}),watch:{orderId:{handler:function(){this.loadData()},immediate:!0}},methods:{getImageList:de,nonEmptyArray:En.uW,toFullPath:Tn,getFakedLocationFlag:On,renderGeoLocation:Sn,renderFormItem:function(){var n=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},a=n.render,i=t[n.key];return a?a(i,t):i},showCategoryTitleForIDSprinter:function(n){return L.v2[n]},showTitle:function(n){return L.z5[n]},showProofTitle:function(n){return L.vm[n]},showPickupOrderTracking:function(n){return Array.isArray(n)&&n.length>0},showMap:function(n){this.$emit("showMap",{lat:n.lat,lng:n.lng})},showSignature:function(n){var t=this.getSignatureUrl(n);return t.length>0},getSignatureUrl:function(n){var t=n.seller_signature,a=n.driver_signature,i=[];return t&&i.push(t),a&&i.push(a),i},showSensitiveDataIcon:function(n){return this.clickToViewFieldList.includes(n)},getRequestSensitiveDataParams:function(n,t){return{shipment_id:this.orderId,data_field:t,pickup_service_type:n.pickup_service_type}},hideSensitiveData:function(n){return this.blockFieldList.includes(n)||this.clickToViewFieldList.includes(n)},isDopOrder:function(n){return n.is_dop_order===1},showHandoverOnHold:function(){var n=arguments.length>0&&arguments[0]!==void 0?arguments[0]:[];return Vt&&(0,En.uW)(n)},isOnHoldRecord:function(n){return n.pickup_result.replace(" ","").toLowerCase()==="pickupon_hold"},isRetryRecord:function(n){return n.pickup_result.replace(" ","").toLowerCase()==="pickupretry"},loadData:function(){var e=(0,w.Z)(u().mark(function t(){var a,i,o;return u().wrap(function(s){for(;;)switch(s.prev=s.next){case 0:return s.prev=0,(0,b.K4)(this,"page",!0),a={shipment_id:this.orderId,station_type:(0,M.VG)()},s.next=5,O.UM.loadPickupInfo(a);case 5:i=s.sent,o=i.data,this.tabData=o,s.next=13;break;case 10:s.prev=10,s.t0=s.catch(0),console.error("Load pickup info data error, ",s.t0);case 13:return s.prev=13,(0,b.K4)(this,"page",!1),s.finish(13);case 16:case"end":return s.stop()}},t,this,[[0,10,13,16]])}));function n(){return e.apply(this,arguments)}return n}()}};var wr=r("9fl2"),Ze=(0,C.Z)(Ne,Za,Va,!1,null,"23bc3ad4",null);const Ve=Ze.exports;var Ge=function(){var n=this,t=n._self._c;return t("div",{directives:[{name:"loading",rawName:"v-loading",value:n.loading.page,expression:"loading.page"}],staticClass:"contact-container"},[t("div",{staticClass:"order-basic-info"},[t("div",{staticClass:"category-title"},[n._v(n._s(n.$gt("Contact List")))]),n._v(" "),t("s-paginated-table",{attrs:{columns:n.proofOfContactColumns,"data-list":n.proofOfContactShowList,total:n.contactList.length,"on-page-option-changed":n.onProofOfContactPignatedChanged,scroll:{x:1e3,y:560}}}),n._v(" "),t("div",{staticClass:"category-title"},[n._v(n._s(n.$gt("Message To Receiver"))+" ("+n._s(n.$gt("SMS/WhatsAPP"))+")")]),n._v(" "),t("message-template",{attrs:{messageList:n.messageList}}),n._v(" "),t("chat-history",{attrs:{chatInfo:n.chatInfo}})],1)])},We=[],Jn=r("h2x9"),Ke=function(){var n=this,t=n._self._c;return t("div",{staticClass:"chat-history"},[t("div",{staticClass:"category-title"},[n._v(n._s(n.$gt("Message To Receiver"))+" ("+n._s(n.$gt("In-APP Chat"))+")")]),n._v(" "),n.msgList.length?t("div",{directives:[{name:"loading",rawName:"v-loading",value:n.loading.list,expression:"loading.list"}],staticClass:"chat-history-container"},[t("div",{staticClass:"chat-history-title"},[n._v(`
      `+n._s(n.$gt("Latest Driver"))+": "+n._s(n.driverInfo)+`
    `)]),n._v(" "),t("div",{ref:"chatWrap",staticClass:"chat-history-wrap"},[t("span",{staticClass:"head-split-line split-line"}),n._v(" "),n.showMoreBtn?t("div",{staticClass:"split-line-cycle-icon"}):n._e(),n._v(" "),n.showMoreBtn?t("div",{staticClass:"view-more"},[t("span",{on:{click:n.handleViewMore}},[n._v(n._s(n.$gt("Load More")))])]):n._e(),n._v(" "),t("div",{staticClass:"chat-history-content"},[t("span",{staticClass:"end-split-line split-line"}),n._v(" "),n._l(n.msgList,function(a,i){return t("div",{key:i,ref:"chatHistoryItem",refInFor:!0,staticClass:"chat-history-item",class:{"first-chat-history-item":i===0}},[t("div",{staticClass:"time-wrap"},[t("span",[n._v(n._s(a.formatTime))]),n._v(" "),t("br"),n._v(" "),t("span",[n._v(n._s(a.formatDate))])]),n._v(" "),t("div",{staticClass:"chat-content"},[t("span",{staticClass:"sender"},[n._v(n._s(a.sender)+":")]),n._v(" "),t("br"),n._v(" "),a.msg_type===n.msgType.TEXT?t("span",{staticClass:"text-content"},[n._v(n._s(a.msg_content))]):n._e(),n._v(" "),a.msg_type===n.msgType.IMAGE?t("div",{staticClass:"content-img",style:{backgroundImage:"url("+a.msg_content},on:{click:function(l){return l.preventDefault(),n.viewImg(a.msg_content)}}}):n._e()])])})],2)])]):t("no-data"),n._v(" "),t("s-dialog",{attrs:{visible:n.isImageViewerShow,"append-to-body":!1,customClass:"chat-history-image-viewer"},on:{"update:visible":function(i){n.isImageViewerShow=i}}},[n.isImageViewerShow?t("ImageViewer",{attrs:{imgs:n.img}}):n._e()],1)],1)},Ye=[],Je=r("QH0a"),Qe=r("wXpr"),Xe=r("fodx"),qe=Je.Z.getChatHistory,ni=15,ti=20,ai={TEXT:0,IMAGE:1};const ei={components:{NoData:Xe.Z,ImageViewer:Qe.Z},props:{chatInfo:{type:Object,default:function(){},required:!0}},data:function(){return{msgList:[],showMoreBtn:!1,endMsgId:"",driverInfo:"",loading:{list:!1},msgType:ai,isImageViewerShow:!1,img:[]}},watch:{chatInfo:function(n){n&&(this.chatInfo=n,this.msgList=[],this.chatInfo.driver_id&&this.loadChatHistory())}},methods:{loadChatHistory:function(){var e=(0,w.Z)(u().mark(function t(){var a=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},i,o,l,s,c,f,m,h,F,x,A,v,G;return u().wrap(function(k){for(;;)switch(k.prev=k.next){case 0:return a.count||(a.count=ni),k.prev=1,i=this.chatInfo,o=i.driver_id,l=i.shipment_id,(0,b.K4)(this,"list",!0),k.next=6,qe((0,I.Z)({driver_id:o,shipment_id:l},a));case 6:s=k.sent,c=s.data,f=c===void 0?{}:c,m=f.msg_list,h=f.has_more,F=f.end_msg_id,x=f.driver_name,A=this.formatListData(m||[]),this.msgList=[].concat((0,nn.Z)(A),(0,nn.Z)(this.msgList))||[],this.showMoreBtn=h,this.endMsgId=F,this.driverInfo="["+o+"] "+x,v=(m||[]).length,G=v&&v-1,this.scrollLastChat(G),k.next=23;break;case 20:k.prev=20,k.t0=k.catch(1),console.info(k.t0);case 23:return k.prev=23,(0,b.K4)(this,"list",!1),k.finish(23);case 26:case"end":return k.stop()}},t,this,[[1,20,23,26]])}));function n(){return e.apply(this,arguments)}return n}(),formatListData:function(){var n=arguments.length>0&&arguments[0]!==void 0?arguments[0]:[];return n.map(function(t){var a=H()(t.start_time/1e6);return(0,I.Z)({formatTime:a.format("HH:mm:ss"),formatDate:a.format("DD MMM YYYY")},t)})},scrollLastChat:function(n){var t=this;this.$nextTick(function(){var a=t.$refs.chatHistoryItem,i=t.$refs.chatWrap,o=a&&a[n];o&&i&&(i.scrollTop=o.offsetTop)})},handleViewMore:function(){this.loading.list||this.loadChatHistory({end_msg_id:this.endMsgId,count:ti})},viewImg:function(n){n&&(this.img=[{url:n,title:""}],this.isImageViewerShow=!0)}}};var kr=r("kz1f"),ii=(0,C.Z)(ei,Ke,Ye,!1,null,"6c0979f5",null);const oi=ii.exports;var ri=function(){var n=this,t=n._self._c;return t("div",[t("s-paginated-table",{attrs:{columns:n.messageTemplateColumns,actions:n.messageTemplateActions,actionsWidth:100,"data-list":n.messageList,total:n.messageList.length,scroll:{x:800},hidePagination:!0}}),n._v(" "),n.visible.content?t("s-dialog",{attrs:{title:n.$gt("Message Content"),visible:n.visible.content},on:{"update:visible":function(i){return n.$set(n.visible,"content",i)}}},[t("div",{domProps:{innerHTML:n.$xss(n._s(n.content))}})]):n._e()],1)},si=[],di=[{label:"Driver ID",key:"driver_id",width:100},{label:"Message Content",key:"message_content",width:400},{label:"Send Time",key:"mtime",width:120,render:function(n,t){return(0,D.MK)(t)}}];const li={components:{SPaginatedTable:Jn.Z},props:{messageList:{type:Array}},data:function(){return{messageTemplateColumns:di,visible:{content:!1},content:""}},computed:{messageTemplateActions:function(){return[{label:"View",click:this.handleViewClick}]}},methods:{handleViewClick:function(n,t){var a=/\u000A/g;this.content=t.message_content.replace(a,"<br/>"),this.visible.content=!0}}};var ci=(0,C.Z)(li,ri,si,!1,null,null,null);const pi=ci.exports;var gi=function(n,t){return(0,D.WU)(t)},ct=10;const fi={components:{MessageTemplate:pi,sPaginatedTable:Jn.Z,chatHistory:oi},inject:["orderDetail"],data:function(){return{tabData:{},proofOfContactList:[],loading:{page:!1}}},computed:{orderId:function(){var n=this.orderDetail.orderId,t=n===void 0?"":n;return t.toLocaleUpperCase()},contactList:function(){return this.tabData.contact_list||[]},messageList:function(){return this.tabData.message_list||[]},chatInfo:function(){var n=(this.contactList[0]||{}).driver_id||(this.messageList[0]||{}).driver_id;return{driver_id:n,shipment_id:this.orderId}},proofOfContactColumns:function(){return[{label:this.$gt("Attempt"),key:"attempt"},{label:this.$gt("Timestamp"),key:"confirm_time",render:gi},{label:this.$gt("Driver ID"),key:"driver_id"},{label:this.$gt("Driver Name"),key:"driver_name"},{label:this.$gt("Type"),key:"contact_type__desc"},{label:this.$gt("Duration"),key:"call_duration__desc",render:function(t,a){return t.contact_type__desc!=="call"?"-":a}}]},proofOfContactShowList:function(){return this.proofOfContactList.length?this.proofOfContactList:this.contactList.slice(0,ct)}},watch:{orderId:{handler:function(){this.loadData()},immediate:!0}},methods:{onProofOfContactPignatedChanged:function(){var n=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},t=n.pageNo,a=t===void 0?1:t,i=n.pageSize,o=i===void 0?ct:i;this.proofOfContactList=this.contactList.slice((a-1)*o,o)},loadData:function(){var e=(0,w.Z)(u().mark(function t(){var a,i,o,l;return u().wrap(function(c){for(;;)switch(c.prev=c.next){case 0:return c.prev=0,(0,b.K4)(this,"page",!0),a={shipment_id:this.orderId,station_type:(0,M.VG)()},c.next=5,O.UM.loadContactInfo(a);case 5:i=c.sent,o=i.data,l=o.contact_list,o.contact_list=(l||[]).map(function(f,m){return(0,I.Z)({},f,{attempt:m+1})}),this.tabData=o,c.next=15;break;case 12:c.prev=12,c.t0=c.catch(0),console.error("Load proof of contact info data error, ",c.t0);case 15:return c.prev=15,(0,b.K4)(this,"page",!1),c.finish(15);case 18:case"end":return c.stop()}},t,this,[[0,12,15,18]])}));function n(){return e.apply(this,arguments)}return n}()}};var ui=(0,C.Z)(fi,Ge,We,!1,null,null,null);const hi=ui.exports;var mi=function(){var n=this,t=n._self._c;return t("div",{directives:[{name:"loading",rawName:"v-loading",value:n.loading.page,expression:"loading.page"}]},[t("s-form",{staticClass:"order-basic-info",attrs:{"label-width":"180px"}},[t("div",{staticClass:"category-title"},[n._v(n._s(n.$gt("Proof of Rejection")))]),n._v(" "),t("s-form-item",{attrs:{label:n.$gt("Time")+":"}},[n._v(`
      `+n._s(n.format(n.rejectOrder.ctime))+`
    `)]),n._v(" "),t("s-form-item",{attrs:{label:n.$gt("Operator")+":"}},[n._v(`
      `+n._s(n.rejectOrder.operator)+`
    `)]),n._v(" "),t("s-form-item",{attrs:{label:n.$gt("Remark")+":"}},[n._v(`
      `+n._s(n.rejectOrder.remark)+`
    `)]),n._v(" "),n.nonEmptyArray(n.rejectOrder.photo_list)?t("s-form-item",{attrs:{label:n.$gt("Photo")+":"}},n._l(n.rejectOrder.photo_list,function(a,i){return t("spx-shared-image-resizer",{key:i,attrs:{src:n.toFullPath(a),concise:"","thumbnail-margins":"0 16px 0 0","thumbnail-size":[80,80]}})}),1):n._e()],1)],1)},vi=[];const bi={data:function(){return{tabData:{},format:D.WU,loading:{page:!1}}},inject:["orderDetail"],computed:{orderId:function(){var n=this.orderDetail.orderId,t=n===void 0?"":n;return(0,q.Y8)(t)},rejectOrder:function(){return this.tabData||{}}},watch:{orderId:{handler:function(){this.loadData()},immediate:!0}},methods:{nonEmptyArray:En.uW,toFullPath:function(n){return""+B.v+n},loadData:function(){var e=(0,w.Z)(u().mark(function t(){var a,i,o;return u().wrap(function(s){for(;;)switch(s.prev=s.next){case 0:return s.prev=0,(0,b.K4)(this,"page",!0),a={shipment_id:this.orderId,station_type:(0,M.VG)()},s.next=5,O.UM.loadRejectionInfo(a);case 5:i=s.sent,o=i.data,this.tabData=o,s.next=13;break;case 10:s.prev=10,s.t0=s.catch(0),console.error("Load rejection data error, ",s.t0);case 13:return s.prev=13,(0,b.K4)(this,"page",!1),s.finish(13);case 16:case"end":return s.stop()}},t,this,[[0,10,13,16]])}));function n(){return e.apply(this,arguments)}return n}()}};var xi=(0,C.Z)(bi,mi,vi,!1,null,null,null);const _i=xi.exports;var yi=function(){var n=this,t=n._self._c;return t("div",{directives:[{name:"loading",rawName:"v-loading",value:n.loading.page,expression:"loading.page"}],staticClass:"reallocation-history-container"},[t("s-table",{attrs:{data:n.reallocationData}},n._l(n.columns,function(a){return t("s-table-column",{key:a.key,attrs:{label:a.label,prop:a.key,"show-overflow-tooltip":""},scopedSlots:n._u([a.render?{key:"default",fn:function(o){return[n._v(`
        `+n._s(a.render(o.row[a.key]))+`
      `)]}}:null],null,!0)})}),1)],1)},wi=[];const Fi={inject:["orderDetail"],data:function(){return{tabData:{},loading:{page:!1}}},computed:(0,I.Z)({},(0,U.mapState)({channelMap:function(n){return an()(n.enums.systemEnums.channel)||{}}}),{orderId:function(){var n=this.orderDetail.orderId,t=n===void 0?"":n;return(0,q.Y8)(t)},reallocationData:function(){return this.tabData.order_reallocation_history_list||[]},realChannelMap:function(){return(0,I.Z)({},this.channelMap,L.DR)},columns:function(){var n=this;return[{label:"Reallocation Task ID",key:"reallocation_task_id"},{label:"Previous Channel",key:"origin_channel_id",render:function(a){return n.realChannelMap[a]}},{label:"Target Channel",key:"target_channel_id",render:function(a){return n.realChannelMap[a]}},{label:"Reallocation Time",key:"ctime",render:function(a){return(0,D.WU)(a)}},{label:"Status",key:"reallocation_status",render:function(a){return(0,b.BK)(n.$store.state,"enums.systemEnums.reallocation_order_status",a)}},{label:"Operator",key:"operator"}]}}),watch:{orderId:{handler:function(){this.loadData()},immediate:!0}},methods:{loadData:function(){var e=(0,w.Z)(u().mark(function t(){var a,i,o;return u().wrap(function(s){for(;;)switch(s.prev=s.next){case 0:return s.prev=0,(0,b.K4)(this,"page",!0),a={shipment_id:this.orderId,station_type:(0,M.VG)()},s.next=5,O.UM.loadRealLocationInfo(a);case 5:i=s.sent,o=i.data,this.tabData=o,s.next=13;break;case 10:s.prev=10,s.t0=s.catch(0),console.error("Load reallocation data error, ",s.t0);case 13:return s.prev=13,(0,b.K4)(this,"page",!1),s.finish(13);case 16:case"end":return s.stop()}},t,this,[[0,10,13,16]])}));function n(){return e.apply(this,arguments)}return n}()}};var Sr=r("uSMF"),ki=(0,C.Z)(Fi,yi,wi,!1,null,"44d5fc6e",null);const Di=ki.exports;var Ei=function(){var n=this,t=n._self._c;return t("s-form",{directives:[{name:"loading",rawName:"v-loading",value:n.loading.page,expression:"loading.page"}],staticClass:"order-basic-info",attrs:{"label-width":"180px"}},[n.HAS_DELIVERY_INSTRUCTION?t("div",[t("div",{staticClass:"category-title"},[n._v(n._s(n.$gt("Delivery Instruction")))]),n._v(" "),t("s-form-item",{attrs:{label:n.$gt("Contact before Delivery")+":"}},[n._v(`
      `+n._s(n.contactTypeName)+`
    `)]),n._v(" "),t("s-form-item",{attrs:{label:n.$gt("Receive Type")+":"}},[n._v(`
      `+n._s(n.receiveTypeName)+`
    `)]),n._v(" "),t("s-form-item",{attrs:{label:n.$gt("Remark")+":"}},[n._v(`
      `+n._s(n.deliveryInstructionData.remarks)+`
    `)])],1):n._e(),n._v(" "),n.showProofOfDelivery?[n.showProofOfSP?t("div",[t("div",{staticClass:"category-title"},[n._v(n._s(n.$gt("Transported to SP")))]),n._v(" "),t("s-form-item",{attrs:{label:n.$gt("Transported Time")+":"}},[n._v(`
        `+n._s(n.format(n.spDeliveryData.ctime))+`
      `)]),n._v(" "),t("s-form-item",{attrs:{label:n.$gt("Driver")+":"}},[n._v(n._s("["+n.spDeliveryData.driver_id+"] "+n.spDeliveryData.driver_name))]),n._v(" "),t("s-form-item",{attrs:{label:n.$gt("Recipient Name")+":"}},[n._v(n._s(n.spDeliveryData.recipient_name))]),n._v(" "),t("s-form-item",[t("div",{attrs:{slot:"label"},slot:"label"},[n._v(`
          `+n._s(n.$gt("Delivery Geo-Location"))+`
          `),t("s-popover",{attrs:{content:n.$gt("The geo-location of driver when he successfully finish delivery."),placement:"top"}},[t("s-icon-question-outline",{staticClass:"help-icon",attrs:{slot:"reference",width:14},slot:"reference"})],1),n._v(" "),t("span",[n._v(":")])],1),n._v(`
        `+n._s(n.renderGeoLocation(n.spDeliveryData.geo))+`
        `),n.renderGeoLocation(n.spDeliveryData.geo)!=="-"?t("s-icon-location",{staticClass:"location",on:{click:function(i){return n.showMap(n.spDeliveryData.geo)}}}):n._e(),n._v(" "),n.getFakedLocationFlag(n.spDeliveryData.fake_gps_flag)?t("span",{staticClass:"faked-location"},[n._v(n._s(n.$gt("Faked")))]):n._e()],1),n._v(" "),t("s-form-item",{attrs:{label:n.$gt("Remark")+":"}},[n._v(n._s(n.spDeliveryData.remark))]),n._v(" "),n.nonEmptyArray(n.spDeliveryData.image_list)?t("s-form-item",{attrs:{label:n.$gt("Photo")+":"}},[n._l(n.spDeliveryData.image_list,function(a,i){return t("pod-image-info-dialog",{key:a.image_path,attrs:{initialIndex:i,"image-info-list":n.spDeliveryData.image_list,"thumbnail-margins":"0 16px 0 0","thumbnail-size":[80,80]}})}),n._v(" "),n.showDeletePod?t("s-button",{attrs:{loading:n.loading.deleteSpDelivery},on:{click:function(i){return n.deletePhoto(n.recipientSignatureType["delivery to sp"],"deleteSpDelivery")}}},[n._v(n._s(n.$gt("Delete All")))]):n._e()],2):n._e(),n._v(" "),t("s-form-item",{attrs:{label:n.$gt("e-signature")+":"}},[n.spDeliveryData.signature?t("spx-shared-image-resizer",{attrs:{src:n.toFullPath(n.spDeliveryData.signature),concise:"","thumbnail-margins":"0 16px 0 0",thumbnailSize:[80,80]}}):n._e()],1),n._v(" "),t("div",{staticClass:"category-title"},[n._v(n._s(n.$gt("Proof of Collection")))]),n._v(" "),t("s-form-item",{attrs:{label:n.$gt("Collected Time")+":"}},[n._v(`
        `+n._s(n.format(n.deliveryRecipientData.ctime))+`
      `)]),n._v(" "),t("s-form-item",{attrs:{label:n.$gt("Recipient Name")+":"}},[n._v(`
        `+n._s(n.deliveryRecipientData.recipient_name)+`
      `)]),n._v(" "),t("s-form-item",{attrs:{label:n.$gt("Service Point Operator")+":"}},[n._v(`
        `+n._s(n.deliveryRecipientData.recipient_name)+`
      `)]),n._v(" "),t("s-form-item",{attrs:{label:n.$gt("Geo-Location")+":"}},[n._v(`
        `+n._s(n.renderGeoLocation(n.deliveryRecipientData.geo))+`
        `),n.renderGeoLocation(n.deliveryRecipientData.geo)!=="-"?t("s-icon-location",{staticClass:"location",on:{click:function(i){return n.showMap(n.deliveryRecipientData.geo)}}}):n._e(),n._v(" "),n.getFakedLocationFlag(n.deliveryRecipientData.fake_gps_flag)?t("span",{staticClass:"faked-location"},[n._v(n._s(n.$gt("Faked")))]):n._e()],1),n._v(" "),t("s-form-item",{attrs:{label:n.$gt("Remark")+":"}},[n._v(`
        `+n._s(n.deliveryRecipientData.remark)+`
      `)]),n._v(" "),n.nonEmptyArray(n.deliveryRecipientData.image_list)?t("s-form-item",{attrs:{label:n.$gt("Photo")+":"}},[n._l(n.deliveryRecipientData.image_list,function(a,i){return t("image-info-dialog",{key:a.image_path,attrs:{initialIndex:i,"image-info-list":n.deliveryRecipientData.image_list,"thumbnail-margins":"0 16px 0 0","thumbnail-size":[80,80]}})}),n._v(" "),n.showDeletePod?t("s-button",{attrs:{loading:n.loading.deleteCollection},on:{click:function(i){return n.deletePhoto(n.recipientSignatureType["delivery fleet order"],"deleteCollection")}}},[n._v(n._s(n.$gt("Delete All")))]):n._e()],2):n._e()],1):n._e(),n._v(" "),n.hasDeliveryData?t("div",[t("div",{staticClass:"category-title"},[n._v(n._s(n.$gt("Proof of delivery")))]),n._v(" "),t("s-form-item",{attrs:{label:n.$gt("Delivered Time")+":"}},[n._v(`
        `+n._s(n.format(n.deliveryRecipientData.ctime))+`
      `)]),n._v(" "),n.showAssignedDriver?t("s-form-item",{attrs:{label:n.$gt("Assigned Driver")+":"}},[n._v(`
        `+n._s(n.renderDriverInfo(n.deliveryRecipientData.assigned_driver_id,n.deliveryRecipientData.assigned_driver_name))+`
      `)]):n._e(),n._v(" "),t("s-form-item",{attrs:{label:n.$gt("Recipient Name")+":"}},[n._v(`
        `+n._s(n.deliveryRecipientData.recipient_name)+`
      `)]),n._v(" "),t("s-form-item",{attrs:{label:n.$gt("Recipient Type")+":"}},[n._v(`
        `+n._s(n.recipientTypeName)+`
        `),n.showContactlessDeliveryTag?t("span",[n._v(n._s(n.$gt("[Contactless Delivery]")))]):n._e()]),n._v(" "),n.SHOW_DELIVERY_RECIPIENT_DOCUMENT?t("s-form-item",{attrs:{label:n.$gt("Recipient Document")+":"}},[n.isClickViewRCDocument||n.isBlockedRCDocument?t("sensitive-component",{attrs:{showIcon:n.isClickViewRCDocument,loadUrl:"orderMgt/loadDeliverySensitiveData","request-params":n.loadSensitiveParams("recipient_document"),"field-name":"data_detail"}}):t("span",[n._v(`
          `+n._s(n.deliveryRecipientData.recipient_document||"-")+`
        `)])],1):n._e(),n._v(" "),t("s-form-item",{attrs:{label:n.$gt("Recipient Relationship")+":"}},[n._v(`
        `+n._s(n.recipientRelationName)+`
      `)]),n._v(" "),t("s-form-item",{attrs:{label:(n.showAssignedDriver?n.$gt("Delivered Driver"):n.$gt("Driver"))+": "}},[n._v(`
        `+n._s(n.renderDriverInfo(n.deliveryRecipientData.driver_id,n.deliveryRecipientData.driver_name))+`
      `)]),n._v(" "),t("s-form-item",[t("div",{attrs:{slot:"label"},slot:"label"},[n._v(`
          `+n._s(n.$gt("Delivery Geo-Location"))+`
          `),t("s-popover",{attrs:{content:n.$gt("The geo-location of driver when he successfully finish delivery."),placement:"top"}},[t("s-icon-question-outline",{staticClass:"help-icon",attrs:{slot:"reference",width:14},slot:"reference"})],1),n._v(" "),t("span",[n._v(":")])],1),n._v(`
        `+n._s(n.renderGeoLocation(n.deliveryRecipientData.geo))+`
        `),n.renderGeoLocation(n.deliveryRecipientData.geo)!=="-"?t("s-icon-location",{staticClass:"location",on:{click:function(i){return n.showMap(n.deliveryRecipientData.geo)}}}):n._e(),n._v(" "),n.getFakedLocationFlag(n.deliveryRecipientData.fake_gps_flag)?t("span",{staticClass:"faked-location"},[n._v(n._s(n.$gt("Faked")))]):n._e()],1),n._v(" "),t("s-form-item",{attrs:{label:n.$gt("Remark")+":"}},[n._v(`
        `+n._s(n.deliveryRecipientData.remark)+`
      `)]),n._v(" "),n.shouldShowIMEI?t("s-form-item",{attrs:{label:n.$gt("Android ID")+":"}},[n._v(`
        `+n._s(n.deliveryRecipientData.imei_code)+`
      `)]):n._e(),n._v(" "),t("s-form-item",{attrs:{label:n.$gt("Unbox Video")+":"}},[n.showDeliveryVideo?t("unbox-video-form-item",{attrs:{status:"delivery",data:n.deliveryRecipientData},on:{showMap:n.showMap,delete:function(i){return n.deleteVideo(n.deliveryRecipientData)}}}):t("span",[n._v("-")])],1),n._v(" "),n.nonEmptyArray(n.deliveryRecipientData.image_list)?t("s-form-item",{attrs:{label:n.$gt("Photo")+":"}},[n._l(n.deliveryRecipientData.image_list,function(a,i){return t("pod-image-info-dialog",{key:a.image_path,attrs:{initialIndex:i,"image-info-list":n.deliveryRecipientData.image_list,"thumbnail-margins":"0 16px 0 0","thumbnail-size":[80,80]}})}),n._v(" "),n.showDeletePod?t("s-button",{attrs:{loading:n.loading.deleteDelivery},on:{click:function(i){return n.deletePhoto(n.recipientSignatureType["delivery fleet order"],"deleteDelivery")}}},[n._v(n._s(n.$gt("Delete All")))]):n._e()],2):n._e(),n._v(" "),t("s-form-item",{attrs:{label:n.$gt("e-signature")+":"}},[n.deliveryRecipientData.signature?t("spx-shared-image-resizer",{attrs:{src:n.toFullPath(n.deliveryRecipientData.signature),concise:"","thumbnail-margins":"0 16px 0 0",thumbnailSize:[80,80]}}):n._e()],1)],1):n._e()]:n._e(),n._v(" "),n.showProofOfOnHold?t("div",[t("rescheduleTime",{attrs:{tabData:n.tabData,loadOrderDetail:n.loadData}}),n._v(" "),t("div",{staticClass:"category-title"},[n._v(n._s(n.$gt("On hold Record"))+" ("+n._s(n.onHoldRecipientData.length)+")")]),n._v(" "),t("s-tabs",{attrs:{type:"pane-card"},model:{value:n.activeOnHoldRecipient,callback:function(i){n.activeOnHoldRecipient=i},expression:"activeOnHoldRecipient"}},n._l(n.onHoldRecipientData,function(a,i){return t("s-tabs-pane",{key:i,attrs:{name:""+i,label:n.$gt("Record")+" "+(n.onHoldRecipientData.length-i)}},[t("s-form-item",{attrs:{label:n.$gt("On Hold Time")+":"}},[n._v(`
          `+n._s(n.format(a.ctime))+`
        `)]),n._v(" "),t("s-form-item",{attrs:{label:n.$gt("On Hold Reason")+":"}},[n._v(`
          `+n._s(a.on_hold_reason__desc)+`
        `)]),n._v(" "),t("s-form-item",{attrs:{label:n.$gt("Driver Name")+":"}},[n._v(`
          `+n._s(a.driver_name)+`
        `)]),n._v(" "),t("s-form-item",{attrs:{label:n.$gt("Driver ID")+":"}},[n._v(`
          `+n._s(a.driver_id)+`
        `)]),n._v(" "),t("s-form-item",[t("div",{attrs:{slot:"label"},slot:"label"},[n._v(`
            `+n._s(n.$gt("On hold Geo-Location"))),t("span",[n._v(":")])]),n._v(`
          `+n._s(n.renderGeoLocation(a.geo))+`
          `),n.renderGeoLocation(a.geo)!=="-"?t("s-icon-location",{staticClass:"location",on:{click:function(l){return n.showMap(a.geo)}}}):n._e(),n._v(" "),n.getFakedLocationFlag(a.fake_gps_flag)?t("span",{staticClass:"faked-location"},[n._v(n._s(n.$gt("Faked")))]):n._e()],1),n._v(" "),t("s-form-item",{attrs:{label:n.$gt("Remark")+":"}},[n._v(`
          `+n._s(a.remark)+`
        `)]),n._v(" "),n.shouldShowIMEI?t("s-form-item",{attrs:{label:n.$gt("Android ID")+":"}},[n._v(`
          `+n._s(a.imei_code)+`
        `)]):n._e(),n._v(" "),t("s-form-item",{attrs:{label:n.$gt("Unbox Video")+":"}},[a.video_recipient?t("unbox-video-form-item",{attrs:{status:"onhold",data:a,showDelete:!1},on:{showMap:n.showMap}}):t("span",[n._v("-")])],1),n._v(" "),n.nonEmptyArray(a.photo_list)?t("s-form-item",{attrs:{label:n.$gt("Photo")+":"}},n._l(a.image_list,function(o,l){return t("poh-image-info-dialog",{key:o.image_path,attrs:{initialIndex:l,"image-info-list":a.image_list,"thumbnail-margins":"0 16px 0 0","thumbnail-size":[80,80]}})}),1):n._e()],1)}),1)],1):n._e(),n._v(" "),n.showProofOfReturn?t("div",[n.showProofOfSPReturned?[t("div",{staticClass:"category-title"},[n._v(n._s(n.$gt("Proof of Return_sp")))]),n._v(" "),t("s-form-item",{attrs:{label:n.$gt("Scan Time")+":"}},[n._v(`
        `+n._s(n.format(n.spReturnedData.ctime))+`
      `)]),n._v(" "),t("s-form-item",{attrs:{label:n.$gt("Driver:")}},[n._v(n._s("["+n.spReturnedData.driver_id+"] "+n.spReturnedData.driver_name))]),n._v(" "),t("s-form-item",{attrs:{label:n.$gt("Recipient Name")+":"}},[n._v(`
        `+n._s(n.spReturnedData.recipient_name)+`
      `)]),n._v(" "),t("s-form-item",{attrs:{label:n.$gt("Geo-Location")+":"}},[n._v(`
        `+n._s(n.renderGeoLocation(n.spReturnedData.geo))+`
        `),n.renderGeoLocation(n.spReturnedData.geo)!=="-"?t("s-icon-location",{staticClass:"location",on:{click:function(i){return n.showMap(n.spReturnedData.geo)}}}):n._e()],1),n._v(" "),t("s-form-item",{attrs:{label:n.$gt("Remarks")+":"}},[n._v(`
        `+n._s(n.spReturnedData.remark)+`
      `)]),n._v(" "),t("s-form-item",{attrs:{label:n.$gt("Photos")+":"}},n._l(n.spReturnedData.photo_list,function(a,i){return t("spx-shared-image-resizer",{key:i,attrs:{src:n.toFullPath(a),concise:"","thumbnail-margins":"0 16px 0 0","thumbnail-size":[80,80]}})}),1),n._v(" "),t("s-form-item",{attrs:{label:n.$gt("e-signature")+":"}},[n.spReturnedData.signature?t("spx-shared-image-resizer",{attrs:{src:n.toFullPath(n.spReturnedData.signature),concise:"","thumbnail-margins":"0 16px 0 0",thumbnailSize:[80,80]}}):n._e()],1)]:n._e(),n._v(" "),n.hasDeliveryData?[t("div",{staticClass:"category-title"},[n._v(n._s(n.$gt("Proof of Return")))]),n._v(" "),t("s-form-item",{attrs:{label:n.$gt("Returned Time")+":"}},[n._v(`
        `+n._s(n.format(n.deliveryRecipientData.ctime))+`
      `)]),n._v(" "),t("s-form-item",{attrs:{label:n.$gt("Tracking ID")+":"}},[n._v(`
        `+n._s(n.deliveryRecipientData.to_number)+`
      `)]),n._v(" "),t("s-form-item",{attrs:{label:n.$gt("Recipient Name")+":"}},[n._v(`
        `+n._s(n.deliveryRecipientData.recipient_name)+`
      `)]),n._v(" "),t("s-form-item",{attrs:{label:n.$gt("Recipient Type")+":"}},[n._v(`
        `+n._s(n.recipientTypeName)+`
      `)]),n._v(" "),t("s-form-item",{attrs:{label:n.$gt("Driver Name")+":"}},[n._v(`
        `+n._s(n.deliveryRecipientData.driver_name)+`
      `)]),n._v(" "),t("s-form-item",{attrs:{label:n.$gt("Driver ID")+":"}},[n._v(`
        `+n._s(n.deliveryRecipientData.driver_id)+`
      `)]),n._v(" "),t("s-form-item",{attrs:{label:n.$gt("Geo-Location")+":"}},[n._v(`
        `+n._s(n.renderGeoLocation(n.deliveryRecipientData.geo))+`
        `),n.renderGeoLocation(n.deliveryRecipientData.geo)!=="-"?t("s-icon-location",{staticClass:"location",on:{click:function(i){return n.showMap(n.deliveryRecipientData.geo)}}}):n._e()],1),n._v(" "),t("s-form-item",{attrs:{label:n.$gt("Remarks")+":"}},[n._v(`
        `+n._s(n.deliveryRecipientData.remark)+`
      `)]),n._v(" "),t("s-form-item",{attrs:{label:n.$gt("Photos")+":"}},n._l(n.deliveryRecipientData.photo_list,function(a,i){return t("spx-shared-image-resizer",{key:i,attrs:{src:n.toFullPath(a),concise:"","thumbnail-margins":"0 16px 0 0","thumbnail-size":[80,80]}})}),1),n._v(" "),t("s-form-item",{attrs:{label:n.$gt("e-signature")+":"}},[n.deliveryRecipientData.signature?t("spx-shared-image-resizer",{attrs:{src:n.toFullPath(n.deliveryRecipientData.signature),concise:"","thumbnail-margins":"0 16px 0 0",thumbnailSize:[80,80]}}):n._e()],1)]:n._e()],2):n._e(),n._v(" "),n.showProofOfReturnOnHold?t("div",[t("div",{staticClass:"category-title"},[n._v(n._s(n.$gt("Proof of Return On Hold")))]),n._v(" "),t("s-tabs",{attrs:{type:"pane-card"},model:{value:n.activeReturnOnHoldRecipient,callback:function(i){n.activeReturnOnHoldRecipient=i},expression:"activeReturnOnHoldRecipient"}},n._l(n.returnOnHoldRecipientData,function(a,i){return t("s-tabs-pane",{key:i,attrs:{name:""+i,label:n.$gt("Record")+" "+(n.returnOnHoldRecipientData.length-i)}},[t("s-form-item",{attrs:{label:n.$gt("On Hold Time")+":"}},[n._v(`
          `+n._s(n.format(a.ctime))+`
        `)]),n._v(" "),t("s-form-item",{attrs:{label:n.$gt("On Hold Reason")+":"}},[n._v(`
          `+n._s(a.on_hold_reason__desc)+`
        `)]),n._v(" "),t("s-form-item",{attrs:{label:n.$gt("Tracking ID")+":"}},[n._v(`
          `+n._s(a.to_number)+`
        `)]),n._v(" "),t("s-form-item",{attrs:{label:n.$gt("Driver Name")+":"}},[n._v(`
          `+n._s(a.driver_name)+`
        `)]),n._v(" "),t("s-form-item",{attrs:{label:n.$gt("Driver ID")+":"}},[n._v(`
          `+n._s(a.driver_id)+`
        `)]),n._v(" "),t("s-form-item",{attrs:{label:n.$gt("Geo-Location")+":"}},[n._v(`
          `+n._s(n.renderGeoLocation(a.geo))+`
          `),n.renderGeoLocation(a.geo)!=="-"?t("s-icon-location",{staticClass:"location",on:{click:function(l){return n.showMap(a.geo)}}}):n._e()],1),n._v(" "),t("s-form-item",{attrs:{label:n.$gt("Remarks")+":"}},[n._v(`
          `+n._s(a.remark)+`
        `)]),n._v(" "),t("s-form-item",{attrs:{label:n.$gt("Photos")+":"}},n._l(a.photo_list,function(o,l){return t("spx-shared-image-resizer",{key:l,attrs:{src:n.toFullPath(o),concise:"","thumbnail-margins":"0 16px 0 0","thumbnail-size":[80,80]}})}),1)],1)}),1)],1):n._e()],2)},Ii=[],Ci=function(){var n=this,t=n._self._c;return t("image-info-dialog",n._b({attrs:{showUploadedFrom:!0}},"image-info-dialog",n.$attrs,!1),[t("div",{attrs:{slot:"title"},slot:"title"},[n._v(`
    `+n._s(n.$gt("Photo"))+`
    `),t("s-popover",{attrs:{placement:"right-start"}},[t("div",[t("p",[n._v(n._s(n.$gt("Possible Reasons for missing/wrong POD shooting time, geo-location, address level or photo"))+":")]),n._v(" "),t("p",[n._v("1 "+n._s(n.$gt("Driver submitted this photo from his gallery.")))]),n._v(" "),t("p",[n._v("2 "+n._s(n.$gt("Driver made adjustment to the photo(like photoshop).")))]),n._v(" "),t("p",[n._v("3 "+n._s(n.$gt("System failed to get shooting time or geo-location from the photo or app.")))]),n._v(" "),t("p",[n._v("4 "+n._s(n.$gt("Based on the geolocation, system got wrong or failed to get address level results(rely on external service).")))]),n._v(" "),t("p",[n._v("5 "+n._s(n.$gt("Driver finish offline delivery and the app cache was accidentally cleared by driver/system(very rare).")))])]),n._v(" "),t("s-icon-question-outline",{staticClass:"help-icon",attrs:{slot:"reference",width:14},slot:"reference"})],1)],1),n._v(" "),t("div",{attrs:{slot:"shootingTimeLabel"},slot:"shootingTimeLabel"},[t("span",[n._v(n._s(n.$gt("POD Shooting Time")))]),n._v(" "),t("s-popover",{attrs:{placement:"top",content:n.$gt("The timestamp when driver shoot the POD photo(same with watermark, may be slightly different from delivery time)."),"popper-options":n.helpPopperOptions}},[t("s-icon-question-outline",{staticClass:"help-icon",attrs:{slot:"reference",width:14},slot:"reference"})],1),n._v(" "),t("span",[n._v(":")])],1),n._v(" "),t("div",{attrs:{slot:"geoLocationLabel"},slot:"geoLocationLabel"},[t("span",[n._v(n._s(n.$gt("POD Geo-Location")))]),n._v(" "),t("s-popover",{attrs:{placement:"top",content:n.$gt("The geo-location where this POD photo was taken(same with watermark, may be slightly different from delivery geo-location)."),"popper-options":n.helpPopperOptions}},[t("s-icon-question-outline",{staticClass:"help-icon",attrs:{slot:"reference",width:14},slot:"reference"})],1),n._v(" "),t("span",[n._v(":")])],1)])},Si=[];const Ti={components:{imageInfoDialog:Cn},data:function(){return{helpPopperOptions:{modifiers:{flip:{enabled:!1},preventOverflow:{escapeWithReference:!0}}}}}};var Or=r("O9QU"),Oi=(0,C.Z)(Ti,Ci,Si,!1,null,"b73eab30",null);const $i=Oi.exports;var Pi=function(){var n=this,t=n._self._c;return t("div",{staticClass:"unbox-video-wrapper"},[t("div",{staticClass:"play-contaienr",on:{click:n.playVideo}},[t("img",{staticClass:"first-frame-img",attrs:{src:n.data.video_recipient.video_first_frame_photo_url}}),n._v(" "),t("img",{staticClass:"play-icon",attrs:{src:n.playSvg}})]),n._v(" "),t("s-button",{staticStyle:{"margin-left":"12px"},attrs:{loading:n.downloadLoading},on:{click:n.downloadVideo}},[n._v(n._s(n.$gt("Download")))]),n._v(" "),n.showDeleteBtn?t("s-button",{staticStyle:{"margin-left":"12px"},on:{click:n.deleteVideo}},[n._v(n._s(n.$gt("Delete")))]):n._e(),n._v(" "),t("unbox-video-dialog",{attrs:{visible:n.visible,data:n.data,status:n.status},on:{"update:visible":function(i){n.visible=i},showMap:n.showMap}})],1)},Li=[],Ai=r("yjZJ"),Ri=r.n(Ai),zi=r("wW2B"),Mi=r.n(zi),ji=function(){var n=this,t=n._self._c;return t("s-dialog",{attrs:{visible:n.innerVisible,width:"600px",height:"696px",title:n.$gt("Unbox Video"),"custom-class":"unbox-video-dialog","append-to-body":!1},on:{"update:visible":function(i){n.innerVisible=i}}},[t("div",{staticClass:"video-wrapper"},[t("div",{staticClass:"info-wrapper"},[t("div",{staticClass:"info-item"},[t("span",{staticClass:"info-label"},[n._v(n._s(n.$gt("Shooting Time")))]),n._v(`:\xA0
        `),t("div",{staticClass:"info-value"},[n._v(n._s(n.format(n.videoData.video_recipient_ctime)))])]),n._v(" "),t("div",{staticClass:"info-item"},[t("span",{staticClass:"info-label"},[n._v(n._s(n.$gt("Upload Time")))]),n._v(`:\xA0
        `),t("div",{staticClass:"info-value"},[n._v(n._s(n.format(n.videoData.video_recipient_upload_time)))])]),n._v(" "),t("div",{staticClass:"info-item"},[t("span",{staticClass:"info-label"},[n._v(n._s(n.$gt("Shooting Geo-Location")))]),n._v(`:\xA0
        `),t("div",{staticClass:"info-value"},[n._v(n._s("("+n.$gt("Latitude")+") "+(n.shootingGeo.lat||"_,_")+" / ("+n.$gt("Longitude")+") "+(n.shootingGeo.lng||"_,_")))]),n._v(" "),t("s-icon-location",{staticClass:"location",on:{click:function(i){return n.showMap("shotting")}}})],1),n._v(" "),t("div",{staticClass:"info-item"},[t("span",{staticClass:"info-label"},[n._v(n._s(n.geoTitle))]),n._v(`:\xA0
        `),t("div",{staticClass:"info-value"},[n._v(n._s("("+n.$gt("Latitude")+") "+(n.deliveredGeo.lat||"_,_")+" / ("+n.$gt("Longitude")+") "+(n.deliveredGeo.lng||"_,_")))]),n._v(" "),t("s-icon-location",{staticClass:"location",on:{click:function(i){return n.showMap("delivered")}}})],1)]),n._v(" "),n.visible?t("div",{staticClass:"video-container"},[t("video",{ref:"videoRef",staticStyle:{height:"100%",width:"100%"},attrs:{src:n.videoData.video_recipient_url,controls:"",autoplay:"",muted:"",controlsList:"nodownload noplaybackrate",disablePictureInPicture:""},domProps:{muted:!0},on:{click:n.onClickVideo}})]):n._e()])])},Hi=[];const Bi={props:{visible:{type:Boolean,default:!1},data:{type:Object,default:function(){return{}}},status:String},data:function(){return{innerVisible:!1,format:D.WU}},computed:{videoData:function(){return this.data.video_recipient||{}},shootingGeo:function(){return{lat:this.videoData.video_recipient_lat,lng:this.videoData.video_recipient_lng}},deliveredGeo:function(){return this.data.geo||{}},geoTitle:function(){switch(this.status){case"delivery":return this.$gt("Delivered Geo-Location");case"onhold":return this.$gt("Onhold Geo-Location");default:return"Geo-Location"}}},watch:{innerVisible:function(n){this.isClickedVideo=!1,this.handleListeners(n),this.$emit("update:visible",n)},visible:function(n){this.innerVisible=n}},methods:{showMap:function(n){var t={};n==="shotting"?t=this.shootingGeo:n==="delivered"&&(t=this.deliveredGeo),this.$emit("showMap",t)},onClickVideo:function(){this.isClickedVideo=!0},handleListeners:function(n){var t=this;this.event=this.event||function(a){var i=t.$refs.videoRef;a.keyCode===32&&i&&!t.isClickedVideo&&i[i.paused?"play":"pause"]()},document[n?"addEventListener":"removeEventListener"]("keyup",this.event,!1)}}};var Pr=r("7sS6"),Ui=(0,C.Z)(Bi,ji,Hi,!1,null,"3a820c72",null);const Ni={components:{UnboxVideoDialog:Ui.exports},props:{data:{type:Object,default:function(){return{}}},showDelete:{type:Boolean,default:!0},status:String},data:function(){return{downloadLoading:!1,visible:!1,playSvg:Mi()}},computed:{showDeleteBtn:function(){return this.showDelete&&(0,b.wD)(this.$store,"ADMIN_DELETE_ORDER_RECIPIENT_PHOTO")}},methods:{playVideo:function(){this.visible=!0},downloadVideo:function(){var e=(0,w.Z)(u().mark(function t(){var a,i,o,l,s;return u().wrap(function(f){for(;;)switch(f.prev=f.next){case 0:return a=""+B.v+(this.data.video_recipient.video_recipient_url||""),i=a.split("/").pop(),f.prev=2,this.downloadLoading=!0,f.next=6,Ri()({method:"get",url:a,responseType:"blob"});case 6:o=f.sent,l=document.createElement("a"),l.style.display="none",s=window.URL.createObjectURL(o.data),l.href=s,l.download=i,l.click(),l.remove(),window.URL.revokeObjectURL(s),this.$message.success("download successfully"),f.next=22;break;case 18:f.prev=18,f.t0=f.catch(2),this.$message.error("download failed"),console.error(f.t0);case 22:return f.prev=22,this.downloadLoading=!1,f.finish(22);case 25:case"end":return f.stop()}},t,this,[[2,18,22,25]])}));function n(){return e.apply(this,arguments)}return n}(),deleteVideo:function(){var e=(0,w.Z)(u().mark(function t(){return u().wrap(function(i){for(;;)switch(i.prev=i.next){case 0:this.$emit("delete");case 1:case"end":return i.stop()}},t,this)}));function n(){return e.apply(this,arguments)}return n}(),showMap:function(){for(var n=arguments.length,t=Array(n),a=0;a<n;a++)t[a]=arguments[a];this.$emit.apply(this,["showMap"].concat((0,nn.Z)(t)))}}};var Rr=r("IWpL"),Zi=(0,C.Z)(Ni,Pi,Li,!1,null,"ab94364a",null);const Vi=Zi.exports;var Gi=function(){var n=this,t=n._self._c;return t("div",{staticClass:"order-basic-info",staticStyle:{"padding-bottom":"0"}},[t("div",{staticClass:"category-title"},[n._v(n._s(n.$gt("Reschedule Time")))]),n._v(" "),t("s-form",{ref:"form",attrs:{model:n.form,rules:n.rules,"label-width":"60px"}},[n.editMode?t("div",[t("s-form-item",{attrs:{label:n.$gt("Date")+":",prop:"date",required:""}},[t("s-date-picker",{attrs:{type:"date","picker-options":n.dateOptions},model:{value:n.form.date,callback:function(i){n.$set(n.form,"date",i)},expression:"form.date"}})],1),n._v(" "),t("s-form-item",{attrs:{label:n.$gt("Tag")+":",prop:"rescheduleType",required:""}},[t("s-select",{model:{value:n.form.rescheduleType,callback:function(i){n.$set(n.form,"rescheduleType",i)},expression:"form.rescheduleType"}},n._l(n.rescheduleTypeSelectOptions,function(a){return t("s-option",{key:a.value,attrs:{label:a.label,value:a.value,disabled:a.disabled}})}),1)],1),n._v(" "),n.shouldShowTimeSelect?t("s-form-item",{attrs:{label:n.$gt("Start Time")+":",prop:"time",required:""}},[t("s-select",{model:{value:n.form.time,callback:function(i){n.$set(n.form,"time",i)},expression:"form.time"}},n._l(n.rescheduleTimeSelectOptions,function(a){return t("s-option",{key:a.value,attrs:{label:a.label,value:a.value}})}),1)],1):n._e(),n._v(" "),t("s-form-item",{staticStyle:{"margin-top":"24px"},attrs:{label:" "}},[t("s-button",{staticStyle:{"margin-right":"16px"},attrs:{size:"small",loading:n.loading.updatingRescheduleTime},on:{click:function(i){n.editMode=!1}}},[n._v(n._s(n.$gt("Cancel")))]),n._v(" "),t("s-button",{attrs:{type:"primary",size:"small",loading:n.loading.updatingRescheduleTime},on:{click:n.saveRescheduleTime}},[n._v(n._s(n.$gt("Save")))])],1)],1):n._e(),n._v(" "),!n.editMode&&n.hasPermissionToEdit?t("s-button",{staticClass:"edit-time-btn",attrs:{type:"primary",size:"small",disabled:n.shouldDisabledEditButton},on:{click:function(i){n.editMode=!0}}},[n._v(`
      `+n._s(n.$gt("Edit"))+`
    `)]):n._e(),n._v(" "),n.editMode?n._e():t("s-form-item",{attrs:{label:n.$gt("Date")+":"}},[n._v(`
      `+n._s(n.tabData.reschedule_time)+`
    `)])],1)],1)},Wi=[],pt=r("W7Cz");function Ki(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:0,n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:24,t=[],a=[].concat((0,nn.Z)(new Array(n).keys())),i=a.map(function(o){return o+e<10?"0"+(o+e)+":00":o+e+":00"});return i.forEach(function(o,l){l<23&&t.push({label:i[l]+" - "+i[l+1],value:l})}),t}const Yi={inject:["orderDetail"],props:["tabData","loadOrderDetail"],data:function(){return{format:D.WU,today:"",form:{rescheduleType:"",date:"",time:""},rules:{date:[L.sO.REQUIRED("Date")],rescheduleType:[L.sO.REQUIRED("Tag")],time:[L.sO.REQUIRED("Time")]},editMode:!1,dateOptions:{disabledDate:function(t){var a=new Date,i=a.setDate(a.getDate()-1);return t.getTime()<=(0,D.gl)(i,"day").getTime()}},loading:{updatingRescheduleTime:!1}}},computed:(0,I.Z)({},(0,U.mapState)({orderStatus:function(n){return n.enums.systemEnums.fleet_order_status||{}},tagType:function(n){return n.enums.systemEnums.delivery_reattepmt_time_type||{}}}),{hasPermissionToEdit:function(){return(0,b.wD)(this.$store,"UPDATE_RESCHEDULE_TIME")},shouldDisabledEditButton:function(){var n=[this.orderStatus.Pending,this.orderStatus["On Hold"]];return!(n.includes(this.tabData.status)&&this.tabData.on_hold_reason===12)},isToday:function(){if(!(this.form.date instanceof Date))return!1;var n=Date.parse(this.form.date);return n===this.today},rescheduleTypeSelectOptions:function(){var n=this,t=[],a=new Date().getHours();return this.isToday&&a>=12&&t.push("AM","All Days"),S()(this.tagType).map(function(i){var o=!!t.includes(i);return{label:i,value:n.tagType[i],disabled:o}})},rescheduleTimeSelectOptions:function(){var n=0,t=23,a=new Date().getHours();this.tagType.AM===this.form.rescheduleType&&(t=12,this.isToday&&(n=a)),this.tagType.PM===this.form.rescheduleType&&(n=12,this.isToday&&(n=a>12?a:12));var i=Ki();return i.slice(n,t)},shouldShowTimeSelect:function(){var n=[this.tagType.AM,this.tagType.PM];return n.includes(this.form.rescheduleType)}}),watch:{"form.date":function(){this.form.rescheduleType="",this.form.time=""},"form.rescheduleType":function(){this.form.time=""}},mounted:function(){this.today=new Date().setHours(0,0,0,0)},methods:{saveRescheduleTime:function(){var e=(0,w.Z)(u().mark(function t(){var a,i,o,l,s,c;return u().wrap(function(m){for(;;)switch(m.prev=m.next){case 0:return(0,pt.SN)(this.$refs.form,"form"),m.prev=1,a=this.orderDetail.orderId,i=a===void 0?"":a,o={shipment_id:i.toLocaleUpperCase(),reschedule_type:this.form.rescheduleType},this.form.rescheduleType!==this.tagType["Not Sure"]&&(l=Math.round(Date.parse(this.form.date)/1e3),o.reschedule_time=[l,l].toString(),this.form.rescheduleType!==this.tagType["All Days"]?(s=this.form.time,c=[(0,D.WU)(l+s*3600),(0,D.WU)(l+(s+1)*3600)].toString(),o.reschedule_time=c):o.reschedule_time=(0,D.WU)(l,"day")),(0,b.K4)(this,"updatingRescheduleTime",!0),m.next=8,this.$store.dispatch("updateOrderRescheduleTime",o);case 8:return this.$message.success(L.Lz.base),this.editMode=!1,m.next=12,this.loadOrderDetail();case 12:m.next=17;break;case 14:m.prev=14,m.t0=m.catch(1),console.error("Failed to update RescheduleTime: ",m.t0);case 17:return m.prev=17,(0,b.K4)(this,"updatingRescheduleTime",!1),m.finish(17);case 20:case"end":return m.stop()}},t,this,[[1,14,17,20]])}));function n(){return e.apply(this,arguments)}return n}()}};var Mr=r("Qi1H"),Ji=(0,C.Z)(Yi,Gi,Wi,!1,null,"a966a788",null);const Qi=Ji.exports,Xi={components:{imageInfoDialog:Cn,unboxVideoFormItem:Vi,podImageInfoDialog:$i,pohImageInfoDialog:it,sensitiveComponent:Dn.Z,rescheduleTime:Qi},props:{showProofOfDelivery:{type:Boolean,default:!1},showProofOfOnHold:{type:Boolean,default:!1},showProofOfReturn:{type:Boolean,default:!1},showProofOfReturnOnHold:{type:Boolean,default:!1}},inject:["orderDetail"],data:function(){return{tabData:{},format:D.WU,SHOW_DELIVERY_RECIPIENT_DOCUMENT:Zt,HAS_DELIVERY_INSTRUCTION:Gn,activeOnHoldRecipient:"0",activeReturnOnHoldRecipient:"0",loading:{page:!1,deleteSpDelivery:!1,deleteCollection:!1,deleteDelivery:!1}}},computed:(0,I.Z)({},(0,U.mapState)({orderRecipientType:function(n){return an()(n.enums.systemEnums.order_recipient_type)||{}},recipientRelationType:function(n){return an()(n.enums.systemEnums.recipient_relationship_type)||{}},contactlessDeliveryEnums:function(n){return n.enums.systemEnums.order_contactless_delivery||{}},orderAccounts:function(n){return n.enums.systemEnums.order_account||{}},noOneRecipientType:function(n){return an()(n.enums.systemEnums.recipient_no_one_type)||{}},recipientSignatureType:function(n){return n.enums.systemEnums.recipient_order_type||{}}}),{orderId:function(){var n=this.orderDetail.orderId,t=n===void 0?"":n;return t.toLocaleUpperCase()},recipientData:function(){return this.tabData.recipient||{}},deliveryRecipientData:function(){return this.recipientData.Delivered||{}},onHoldRecipientData:function(){return this.recipientData.On_Hold||[]},returnOnHoldRecipientData:function(){return this.recipientData.Return_On_Hold||{}},recipientTypeName:function(){return this.orderRecipientType[this.deliveryRecipientData.recipient_type]},recipientRelationName:function(){var n="";return this.recipientTypeName==="No one"?n=this.noOneRecipientType[this.deliveryRecipientData.recipient_relationship]:n=this.recipientRelationType[this.deliveryRecipientData.recipient_relationship],n||this.deliveryRecipientData.third_party_receiver_relationship},showContactlessDeliveryTag:function(){return this.deliveryRecipientData.contactless_flag===this.contactlessDeliveryEnums["Contactless Delivery"]},contactTypeName:function(){return(0,b.BK)(this.$store,"state.enums.systemEnums.contact_type",this.deliveryInstructionData.contact_type)},receiveTypeName:function(){return(0,b.BK)(this.$store,"state.enums.systemEnums.receive_type",this.deliveryInstructionData.receive_type)},sensitivePermission:function(){return this.tabData.sensitive_permission||{}},isClickViewRCDocument:function(){return(0,T.isArray)(this.sensitivePermission.click_to_view_field_list)?this.sensitivePermission.click_to_view_field_list.includes("recipient_document"):!1},isBlockedRCDocument:function(){return(0,T.isArray)(this.sensitivePermission.blocked_field_list)?this.sensitivePermission.blocked_field_list.includes("recipient_document"):!1},hasDeliveryData:function(){return S()(this.deliveryRecipientData).length>0},shouldShowIMEI:function(){return this.tabData.order_account===this.orderAccounts["SPX Point-to-Point Delivery"]},showProofOfSP:function(){return S()(this.spDeliveryData).length>0},spDeliveryData:function(){return this.recipientData.SP_Delivered||{}},spReturnedData:function(){return this.recipientData.SP_Returned||{}},deliveryInstructionData:function(){return this.tabData.delivery_instruction||{}},showProofOfSPReturned:function(){return S()(this.spReturnedData).length>0},showDeletePod:function(){return(0,b.wD)(this.$store,"ADMIN_DELETE_ORDER_RECIPIENT_PHOTO")},showDeliveryVideo:function(){return S()(this.deliveryRecipientData.video_recipient||{}).length>0},showAssignedDriver:function(){return Gt}}),watch:{orderId:{handler:function(){var e=(0,w.Z)(u().mark(function t(){return u().wrap(function(i){for(;;)switch(i.prev=i.next){case 0:return i.next=2,this.loadData();case 2:case"end":return i.stop()}},t,this)}));function n(){return e.apply(this,arguments)}return n}(),immediate:!0}},methods:{nonEmptyArray:En.uW,toFullPath:function(n){return""+B.v+n},renderDriverInfo:function(n,t){return n?"["+n+"] "+t:t},renderGeoLocation:function(){var n=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return S()(n).length?"(Latitude) "+(n.lat||0)+" / (Longitude) "+(n.lng||0):"-"},showMap:function(n){this.$emit("showMap",{lat:n.lat||0,lng:n.lng||0})},getFakedLocationFlag:function(n){return n===L.S7.Fake},deletePhoto:function(){var e=(0,w.Z)(u().mark(function t(a,i){return u().wrap(function(l){for(;;)switch(l.prev=l.next){case 0:return l.prev=0,(0,b.K4)(this,i,!0),l.next=4,this.$store.dispatch("orderMgt/deleteOrderPhoto",{order_id:this.orderId,order_type:a});case 4:this.$message.success(this.$gt("Successfully!")),this.loadData(),l.next=11;break;case 8:l.prev=8,l.t0=l.catch(0),console.error("Fail to delete order photo: ",l.t0);case 11:return l.prev=11,(0,b.K4)(this,i,!1),l.finish(11);case 14:case"end":return l.stop()}},t,this,[[0,8,11,14]])}));function n(t,a){return e.apply(this,arguments)}return n}(),deleteVideo:function(){var e=(0,w.Z)(u().mark(function t(a){var i,o;return u().wrap(function(s){for(;;)switch(s.prev=s.next){case 0:return s.prev=0,s.next=3,this.$confirm({title:this.$gt("Confirm"),message:this.$gt("Are you sure to delete the video ?"),confirmButtonText:this.$gt("Delete")});case 3:s.next=9;break;case 5:return s.prev=5,s.t0=s.catch(0),console.info(s.t0),s.abrupt("return");case 9:return s.prev=9,i=a.order_id,o=a.order_type,s.next=13,this.$store.dispatch("orderMgt/deleteOrderVideo",{order_id:i,order_type:o});case 13:a.remark=a.remark+" "+this.$gt("Video is taken down due to complaints from buyer"),a.video_recipient=void 0,s.next=20;break;case 17:s.prev=17,s.t1=s.catch(9),console.error(s.t1);case 20:case"end":return s.stop()}},t,this,[[0,5],[9,17]])}));function n(t){return e.apply(this,arguments)}return n}(),loadSensitiveParams:function(n){return{data_field:n,shipment_id:this.orderId}},loadData:function(){var e=(0,w.Z)(u().mark(function t(){var a,i,o;return u().wrap(function(s){for(;;)switch(s.prev=s.next){case 0:return s.prev=0,(0,b.K4)(this,"page",!0),a={shipment_id:this.orderId,station_type:(0,M.VG)()},s.next=5,O.UM.loadRecipientInfo(a);case 5:i=s.sent,o=i.data,this.tabData=o,s.next=13;break;case 10:s.prev=10,s.t0=s.catch(0),console.error("Load recipient info error, ",s.t0);case 13:return s.prev=13,(0,b.K4)(this,"page",!1),s.finish(13);case 16:case"end":return s.stop()}},t,this,[[0,10,13,16]])}));function n(){return e.apply(this,arguments)}return n}()}};var Hr=r("GU4R"),qi=(0,C.Z)(Xi,Ei,Ii,!1,null,"6093a86f",null);const no=qi.exports;var to=function(){var n=this,t=n._self._c;return t("s-form",{directives:[{name:"loading",rawName:"v-loading",value:n.loading.page,expression:"loading.page"}],staticClass:"order-basic-info"},[t("div",{staticClass:"category-title"},[n._v(n._s(n.$gt("Drop-off SP Info")))]),n._v(" "),t("s-form-item",{attrs:{label:n.$gt("Service Point:")}},[n._v(`
    `+n._s(n.dropoffInfo.point_name||"-")+`
  `)]),n._v(" "),t("s-form-item",{attrs:{label:n.$gt("Phone:")}},[n._v(`
    `+n._s(n.dropoffInfo.phone||"-")+`
  `)]),n._v(" "),t("s-form-item",{attrs:{label:n.$gt("Company:")}},[n._v(`
    `+n._s(n.dropoffInfo.company_name||"-")+`
  `)]),n._v(" "),t("s-form-item",{attrs:{label:n.$gt("Service Point Addr:")}},[n._v(`
    `+n._s(n.dropoffInfo.address||"-")+`
  `)]),n._v(" "),t("div",{staticClass:"category-title"},[n._v(n._s(n.$gt("Collection SP Info")))]),n._v(" "),t("s-form-item",{attrs:{label:n.$gt("Service Point:")}},[n._v(`
    `+n._s(n.collectionInfo.point_name||"-")+`
  `)]),n._v(" "),t("s-form-item",{attrs:{label:n.$gt("Phone:")}},[n._v(`
    `+n._s(n.collectionInfo.phone||"-")+`
  `)]),n._v(" "),t("s-form-item",{attrs:{label:n.$gt("Company:")}},[n._v(`
    `+n._s(n.collectionInfo.company_name||"-")+`
  `)]),n._v(" "),t("s-form-item",{attrs:{label:n.$gt("Service Point Addr:")}},[n._v(`
    `+n._s(n.collectionInfo.address||"-")+`
  `)])],1)},ao=[];const eo={inject:["orderDetail"],data:function(){return{tabData:{},loading:{page:!1}}},computed:{orderId:function(){var n=this.orderDetail.orderId,t=n===void 0?"":n;return(0,q.Y8)(t)},dropoffInfo:function(){return this.tabData.dropoff_sp_info||{}},collectionInfo:function(){return this.tabData.self_collection_sp_info||{}}},watch:{orderId:{handler:function(){this.loadData()},immediate:!0}},methods:{loadData:function(){var e=(0,w.Z)(u().mark(function t(){var a,i,o;return u().wrap(function(s){for(;;)switch(s.prev=s.next){case 0:return s.prev=0,(0,b.K4)(this,"page",!0),a={shipment_id:this.orderId,station_type:(0,M.VG)()},s.next=5,O.UM.loadServicePointInfo(a);case 5:i=s.sent,o=i.data,this.tabData=o,s.next=13;break;case 10:s.prev=10,s.t0=s.catch(0),console.error("Load service point data error, ",s.t0);case 13:return s.prev=13,(0,b.K4)(this,"page",!1),s.finish(13);case 16:case"end":return s.stop()}},t,this,[[0,10,13,16]])}));function n(){return e.apply(this,arguments)}return n}()}};var io=(0,C.Z)(eo,to,ao,!1,null,null,null);const oo=io.exports;var ro=function(){var n=this,t=n._self._c;return t("s-paginated-table",{directives:[{name:"loading",rawName:"v-loading",value:n.loading.loadTicketLogInfoList,expression:"loading.loadTicketLogInfoList"}],attrs:{columns:n.ticketInfoColumns,"data-list":n.ticketLogInfoList.list,total:n.ticketLogInfoList.total,"on-page-option-changed":n.onTicketLogInfoPignatedChanged,scroll:{x:1e3,y:560}}})},so=[],lo=r("D6an"),co=function(n,t){return(0,D.WU)(t)},po=function(n,t){var a=(0,T.invert)(n.state.liveIssues.basicEnums.operate_type)||{};return a[t]},go=function(n,t){var a="";switch(n){case"create":a="is created";break;case"assign":a="is assigned to "+t;break;case"reassign":a="is reassigned to "+t;break;case"close":a="has been closed";break;case"reply":a="has been responded";break;case"reopen":a="has been reopened";break}return a},gt=10;const fo={components:{sPaginatedTable:Jn.Z},inject:["orderDetail"],mixins:[lo.Z],data:function(){return{loading:{loadTicketLogInfoList:!1},ticketLogInfoList:{list:[],total:0}}},computed:{orderId:function(){var n=this.orderDetail.orderId,t=n===void 0?"":n;return(0,q.Y8)(t)},ticketInfoColumns:function(){return[{label:"Timestamp",key:"ctime",render:co,width:80},{label:"Operator",key:"operator",width:100},{label:"Remark",key:"remark",render:this.ticketRemarkRender,width:200}]}},watch:{orderId:{handler:function(){this.loadTicketLogInfoList()},immediate:!0}},created:function(){var e=(0,w.Z)(u().mark(function t(){return u().wrap(function(i){for(;;)switch(i.prev=i.next){case 0:return i.next=2,this.getBasicEnums();case 2:case"end":return i.stop()}},t,this)}));function n(){return e.apply(this,arguments)}return n}(),methods:{ticketRemarkRender:function(){var n=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},t=n.data,a=t===void 0?{}:t,i=a.offeree,o=a.operate_type,l=a.ticket_no,s=a.buyer_alternative_contact,c=a.delivery_instruction,f=a.reschedule_time;if(!(0,T.isNil)(s))return"Edited [Alternative Buyer Contact]: "+s;if(!(0,T.isNil)(c))return"Edited [Delivery Instruction]: "+c;if(!(0,T.isNil)(f))return"Edited [Reschedule Time]: "+(0,D.WU)(f);var m=po(this.$store,o),h=go(m,i),F="/#/exception-handling/detail?ticketId="+l+"&shipmentId="+this.orderId;return'<span>Ticket <a style="color: #2769F0;" href="'+F+'" target="view_window">'+l+"</a> "+h+"</span>"},loadTicketLogInfoList:function(){var e=(0,w.Z)(u().mark(function t(){var a=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},i,o,l,s,c,f,m,h,F,x,A,v,G;return u().wrap(function(k){for(;;)switch(k.prev=k.next){case 0:return k.prev=0,(0,b.K4)(this,"loadTicketLogInfoList",!0),i=a.pageno,o=i===void 0?1:i,l=a.count,s=l===void 0?gt:l,c=(0,J.Z)(a,["pageno","count"]),f=(0,I.Z)({},c,{pageno:o,count:s,shipment_id:this.orderId}),k.next=6,this.$store.dispatch("loadTicketLogInfoList",f);case 6:m=k.sent,h=m.data,F=h===void 0?{}:h,x=F.total,A=x===void 0?0:x,v=F.list,G=v===void 0?[]:v,this.ticketLogInfoList={list:G,total:A},k.next=16;break;case 13:k.prev=13,k.t0=k.catch(0),console.error(k.t0);case 16:return k.prev=16,(0,b.K4)(this,"loadTicketLogInfoList",!1),k.finish(16);case 19:case"end":return k.stop()}},t,this,[[0,13,16,19]])}));function n(){return e.apply(this,arguments)}return n}(),onTicketLogInfoPignatedChanged:function(){var e=(0,w.Z)(u().mark(function t(){var a=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},i,o,l,s,c;return u().wrap(function(m){for(;;)switch(m.prev=m.next){case 0:return i=a.pageNo,o=i===void 0?1:i,l=a.pageSize,s=l===void 0?gt:l,c={pageno:o,count:s},m.next=4,this.loadTicketLogInfoList(c);case 4:case"end":return m.stop()}},t,this)}));function n(){return e.apply(this,arguments)}return n}()}};var uo=(0,C.Z)(fo,ro,so,!1,null,null,null);const ho=uo.exports;var mo=function(){var n=this,t=n._self._c;return t("s-form",{directives:[{name:"loading",rawName:"v-loading",value:n.loading.page,expression:"loading.page"}],ref:"buyerInfoForm",staticClass:"order-basic-info",class:{"edit-mode":n.isBuyerInfoEditMode},attrs:{"label-width":"120px",rules:n.buyerInfoRules,model:n.copyBuyerInfo}},[n.orderDetail.isAgencyUser?t("div",[t("div",{staticClass:"category-title"},[n._v(n._s(n.$gt("Sender Info")))]),n._v(" "),n._l(n.agencyUserCanViewInfoSchema,function(a){return t("s-form-item",{key:a.key,attrs:{label:a.label,prop:a.key}},[a.hide&&n.hideSensitiveDataV2(a.key)?t("sensitive-component",{key:n.orderId,attrs:{data:a.render?a.render():n.sellerInfo[a.key],showIcon:n.showSensitiveDataIcon(a.key),loadUrl:"orderMgt/fetchOrderSensitiveData",requestParams:n.getRequestSensitiveDataParams(a.key),onDataChange:function(o){return n.handleSellerSensitiveDataChange(a.key,o)}}}):t("span",[n._v(n._s(a.render?a.render():n.sellerInfo[a.key]))]),n._v(" "),n.showGeoLocationMap(a)?t("s-icon-location",{staticClass:"location",on:{click:function(o){return n.showMap({lng:n.sellerInfo.seller_geo_lng,lat:n.sellerInfo.seller_geo_lat})}}}):n._e()],1)})],2):t("div",[t("div",{staticClass:"category-title"},[n._v(`
      `+n._s(n.$gt("Receiver Info"))+`
      `),n.isBuyerInfoEditMode?t("div",{staticClass:"actions"},[t("s-button",{on:{click:n.editBuyerInfoCancel}},[n._v(n._s(n.$gt("Cancel")))]),n._v(" "),t("s-button",{directives:[{name:"loading",rawName:"v-loading",value:n.loading.editBuyerInfoSubmit,expression:"loading.editBuyerInfoSubmit"}],attrs:{type:"primary"},on:{click:n.editBuyerInfoSubmit}},[n._v(n._s(n.$gt("Submit")))])],1):t("s-button",{staticStyle:{float:"right"},attrs:{type:"primary"},on:{click:n.editBuyerInfo}},[n._v(n._s(n.$gt("Edit")))])],1),n._v(" "),n._l(n.buyerInfoSchema,function(a){return t("s-form-item",{key:a.key,attrs:{label:a.label,prop:a.key}},[a.type==="span"&&a.hide&&n.hideSensitiveDataV2(a.key)?t("span",{staticClass:"buyer-info"},[t("sensitive-component",{key:n.orderId,attrs:{data:a.render?a.render():n.copyBuyerInfo[a.key],loadUrl:"orderMgt/fetchOrderSensitiveData",showIcon:n.showSensitiveDataIcon(a.key),requestParams:n.getRequestSensitiveDataParams(a.key),onShowingChange:function(o){return n.handleShowingChange(a.key,o)}}})],1):a.type==="span"?t("span",{staticClass:"buyer-info"},[n._v(`
        `+n._s(a.render?a.render():n.copyBuyerInfo[a.key])+`
      `)]):n._e(),n._v(" "),a.type==="input"&&a.hide&&!n.curShowing[a.key]&&n.hideSensitiveDataV2(a.key)?t("sensitive-component",{key:n.orderId,attrs:{loadUrl:"orderMgt/fetchOrderSensitiveData",requestParams:n.getRequestSensitiveDataParams(a.key),type:"input",showIcon:n.showSensitiveDataIcon(a.key),onShowingChange:function(o){return n.handleShowingChange(a.key,o)},onDataChange:function(o){return n.handleSensitiveDataChange("copyBuyerInfo",a.key,o)}}}):a.type==="input"?t("s-input",{attrs:{value:a.render?a.render():n.copyBuyerInfo[a.key],disabled:a.disabled,maxlength:a.maxlength},on:{input:function(o){return n.copyBuyerInfo[a.key]=o}}}):n._e(),n._v(" "),a.type==="textarea"&&a.hide&&!n.curShowing[a.key]&&n.hideSensitiveDataV2(a.key)?t("sensitive-component",{key:n.orderId,attrs:{loadUrl:"orderMgt/fetchOrderSensitiveData",requestParams:n.getRequestSensitiveDataParams(a.key),type:"input",showIcon:n.showSensitiveDataIcon(a.key),onShowingChange:function(o){return n.handleShowingChange(a.key,o)},onDataChange:function(o){return n.handleSensitiveDataChange("copyBuyerInfo",a.key,o)}}}):a.type==="textarea"?t("s-textarea",{staticClass:"s-form-textarea",attrs:{value:a.render?a.render():n.copyBuyerInfo[a.key],disabled:a.disabled,maxlength:a.maxlength,"show-limit":a.showLimit},on:{input:function(o){return n.copyBuyerInfo[a.key]=o}}}):n._e(),n._v(" "),n.showGeoLocationMap(a)?t("s-icon-location",{staticClass:"location",on:{click:function(o){return n.showMap({lng:n.copyBuyerInfo.buyer_geo_lng,lat:n.copyBuyerInfo.buyer_geo_lat})}}}):n._e()],1)}),n._v(" "),t("div",{staticClass:"category-title"},[n._v(n._s(n.$gt("Sender and SKU info of OrderSN")))]),n._v(" "),t("s-form-item",{attrs:{label:n.$gt("Order SN")+":"}},[t("span",[n._v(n._s(n.sellerInfo.shopee_order_sn))])]),n._v(" "),t("s-form-item",{staticClass:"sub-category-title",attrs:{label:n.$gt("Sender Info")+":"}}),n._v(" "),n._l(n.sellerInfoSchema,function(a){return t("s-form-item",{key:a.key,attrs:{label:a.label,prop:a.key}},[a.hide&&n.hideSensitiveDataV2(a.key)?t("sensitive-component",{key:n.orderId,attrs:{data:n.sellerInfo[a.key],showIcon:n.showSensitiveDataIcon(a.key),loadUrl:"orderMgt/fetchOrderSensitiveData",requestParams:n.getRequestSensitiveDataParams(a.key),onDataChange:function(o){return n.handleSellerSensitiveDataChange(a.key,o)}}}):t("span",[n._v(n._s(n.sellerInfo[a.key]))])],1)}),n._v(" "),n._l(n.sellerAddressSchemas,function(a){return t("s-form-item",{key:a.key,attrs:{label:""+n.$t(a.label)}},[n._v(`
      `+n._s(n.sellerInfo[a.key])+`
    `)])}),n._v(" "),n.showStreetInfo?t("s-form-item",{attrs:{label:n.$gt("Street")+":"}},[n._v(`
      `+n._s(n.sellerInfo.seller_addr_town)+`
    `)]):n._e(),n._v(" "),t("s-form-item",{attrs:{label:n.$gt("Addr Short Code")+":"}},[n._v(`
      `+n._s(n.sellerInfo.seller_addr_short_code)+`
    `)]),n._v(" "),n.showSellerPostCode?t("s-form-item",{attrs:{label:n.$gt("Postal Code")+":"}},[n.hideSensitiveDataV2("seller_addr_zipcode")?t("sensitive-component",{key:n.orderId,attrs:{data:n.sellerInfo.seller_addr_zipcode,loadUrl:"orderMgt/fetchOrderSensitiveData",showIcon:n.showSensitiveDataIcon("seller_addr_zipcode"),requestParams:n.getRequestSensitiveDataParams("seller_addr_zipcode"),onDataChange:function(i){return n.handleSellerSensitiveDataChange("seller_addr_zipcode",i)}}}):t("span",[n._v(n._s(n.sellerInfo.seller_addr_zipcode))])],1):n._e(),n._v(" "),n.showGeoLocationInfo?t("s-form-item",{attrs:{label:n.$gt("GeoLocation")+":"}},[n._v(`
      `+n._s(n.showSellerGeoLocation?n.sellerInfo.seller_geo_lat+", "+n.sellerInfo.seller_geo_lng:"-")+`
      `),n.showSellerGeoLocation?t("s-icon-location",{staticClass:"location",on:{click:function(i){return n.showMap({lng:n.sellerInfo.seller_geo_lng,lat:n.sellerInfo.seller_geo_lat})}}}):n._e()],1):n._e(),n._v(" "),n.permission.skuDetail?t("div",[t("s-form-item",{staticClass:"sub-category-title",attrs:{label:n.$gt("SKU List")+" ("+n.skuList.length+")"}}),n._v(" "),t("s-table",{staticStyle:{width:"100%"},attrs:{data:n.skuList,wrap:!1,scroll:{x:1e3,y:"auto"}}},n._l(n.skuListColumns,function(a){return t("s-table-column",{key:a.key,attrs:{prop:a.key,label:a.label,width:a.width},scopedSlots:n._u([{key:"default",fn:function(o){return[a.hide&&n.hideSensitiveDataV2(a.key)?t("sensitive-component",{key:o.row.id,attrs:{hideInTable:!0,loadUrl:"orderMgt/fetchOrderSensitiveData",showIcon:n.showSensitiveDataIcon(a.key),requestParams:n.getRequestSensitiveDataParams(a.key,"id",o.row),renderValue:function(s){return a.render?a.render(s,o.row):s}}}):t("span",{domProps:{innerHTML:n.$xss(n._s(a.render?a.render(o.row[a.key],o.row):o.row[a.key]))}})]}}],null,!0)})}),1)],1):n._e()],2)])},vo=[],gn=r("orls"),bo=r("etDb"),xo=function e(n){return n.parent?[].concat((0,nn.Z)(e(n.parent)),[n]):[n]},ft=function(n){return yo.reduce(function(t,a){var i=a.orderDetailAddressKey,o=a.label;return i&&t.push({label:o,key:n+"_"+i}),y.L1?t.filter(function(l){return l.label!=="Postcode"}):y.i6?t.filter(function(l){return l.label!=="Post Code"}):t},[])},_o=/^[0-9]*$/,yo=xo(y.o6),ut=ft("buyer_addr"),ht=ft("seller_addr");const wo={components:{SensitiveComponent:Dn.Z},filters:{formatFixedPointStr:Vn.T},inject:["orderDetail"],data:function(){return{showStreetInfo:y.ZE,showSellerPostCode:y.s5,showGeoLocationInfo:y._A,loading:{page:!1,editBuyerInfoSubmit:!1},permission:{skuDetail:!0},showing:{buyer_name:!1,buyer_contact:!1,buyer_email:!1,buyer_addr:!1,buyer_alternative_contact:!1},editShowing:{buyer_name:!1,buyer_contact:!1,buyer_email:!1,buyer_addr:!1,buyer_alternative_contact:!1},isBuyerInfoEditMode:!1,selectedOrderSNForBSInfo:0,buyerAddressSchemas:ut,sellerAddressSchemas:ht,copyBuyerInfo:{},buyerInfoRules:{buyer_alternative_contact:[{validator:function(t,a,i){if(a&&!_o.test(a))return i(new Error("Alternative Buyer Contact should be phone number"));i()},trigger:"blur"}]},tabData:{}}},computed:(0,I.Z)({},(0,U.mapState)({orderData:function(n){return n.order.orderDetail},details:function(n){return n.order.orderDetail.details||{}}}),{orderId:function(){var n=this.orderDetail.orderId,t=n===void 0?"":n;return(0,q.Y8)(t)},buyerInfoSchema:function(){var n=this,t=this.isBuyerInfoEditMode?"input":"span";return[{label:this.$gt("Receiver Name"),key:"buyer_name",disabled:!0,hide:!0,data_type:gn.A$,type:t},{label:this.$gt("Receiver Contact"),key:"buyer_contact",disabled:!0,hide:!0,data_type:gn.py,type:t},{label:this.$gt("Alternative Receiver Contact"),key:"buyer_alternative_contact",maxlength:25,hide:!0,disabled:!1,type:t},{label:this.$gt("Receiver Email"),key:"buyer_email",disabled:!0,hide:!0,data_type:gn.T6,type:t},{label:this.$gt("Receiver Addr"),key:"buyer_addr",disabled:!0,hide:!0,type:t}].concat((0,nn.Z)(ut.map(function(a){return(0,I.Z)({},a,{label:n.$t(a.label),type:t,disabled:!0})})),[this.showStreetInfo&&{label:this.$gt("Street"),key:"buyer_addr_town",disabled:!0,type:t},y.i6&&{label:this.$gt("Country"),key:"buyer_addr_city",disabled:!0,type:t},{label:this.$gt("Location Type"),key:"buyer_addr_tag_desc",disabled:!0,type:t},{label:this.$gt("Delivery Instruction"),key:"delivery_instruction",type:this.isBuyerInfoEditMode?"textarea":"span",maxlength:512,showLimit:!0},{label:this.$gt("Allow leave parcel with Receptionist guard or maid"),key:"allow_leave_at_receptionist",disabled:!0,type:t,render:function(){return n.buyerInfo.allow_leave_at_receptionist?"Yes":"No"}},{label:this.$gt("Postal Code"),key:"buyer_addr_zipcode",disabled:!0,hide:!0,type:t,render:function(){return n.buyerInfo.buyer_addr_zipcode}},Ta&&{label:this.$gt("Delivery Window"),key:"delivery_window",disabled:!0,type:"span",render:function(){return n.buyerInfo.delivery_window}},this.showGeoLocationInfo&&{label:this.$gt("GeoLocation"),key:"geo_location",disabled:!0,type:t,render:function(){return n.buyerInfo.buyer_geo_lng&&n.buyerInfo.buyer_geo_lat?n.buyerInfo.buyer_geo_lat+",  "+n.buyerInfo.buyer_geo_lng:"-"}}]).filter(Boolean)},agencyUserCanViewInfoSchema:function(){var n=this;return[{label:this.$gt("Sender Name"),key:"seller_name",hide:!0},{label:this.$gt("Sender Contact"),key:"seller_contact",hide:!0},{label:this.$gt("Sender Email"),key:"seller_email",hide:!0},{label:this.$gt("Sender Addr"),key:"seller_addr",hide:!0}].concat((0,nn.Z)(ht.map(function(t){return(0,I.Z)({},t,{label:n.$t(t.label),disabled:!0})})),[{label:this.$gt("Postal Code"),key:"seller_addr_zipcode",disabled:!0,hide:!0,render:function(){return n.sellerInfo.seller_addr_zipcode}},this.showGeoLocationInfo&&{label:this.$gt("GeoLocation"),key:"geo_location",disabled:!0,render:function(){return n.sellerInfo.seller_geo_lng&&n.sellerInfo.seller_geo_lat?n.sellerInfo.seller_geo_lat+",  "+n.sellerInfo.seller_geo_lng:"-"}}]).filter(Boolean)},sellerInfoSchema:function(){return[{label:this.$gt("Sender Name"),key:"seller_name",hide:!0},{label:this.$gt("Sender Contact"),key:"seller_contact",hide:!0},{label:this.$gt("Sender Email"),key:"seller_email",hide:!0},{label:this.$gt("Sender Addr"),key:"seller_addr",hide:!0}]},skuListColumns:function(){return[{label:this.$gt("SKU ID"),key:"sku_id",width:150,hide:!0,data_type:gn.HK},{label:this.$gt("SKU Name"),key:"name",width:300,hide:!0,data_type:gn.p1},{label:this.$gt("Price")+"("+y.oq+")",key:"item_price",width:90,hide:!0,data_type:gn.B0},{label:this.$gt("Quantity"),key:"quantity",width:90},{label:this.$gt("Weight(kg)"),key:"item_weight",render:function(t){return(0,Vn.T)(t)},width:90},{label:this.$gt("Height(cm)"),key:"height",width:90},{label:this.$gt("Width(cm)"),key:"width",width:90},{label:this.$gt("Length(cm)"),key:"length",width:90}]},skuList:function(){return this.tabData.sku_list||[]},buyerInfo:function(){var n=this.tabData.buyer_info||{};return this.showGeoLocationInfo?(0,I.Z)({},n,{geo_location:n.buyer_geo_lat&&n.buyer_geo_lng?n.buyer_geo_lat+",  "+n.buyer_geo_lng:"-"}):n},sellerInfo:function(){return this.tabData.seller_info||{}},curShowing:function(){return this.isBuyerInfoEditMode?this.editShowing:this.showing},showSellerGeoLocation:function(){return this.showGeoLocationInfo&&this.sellerInfo.seller_geo_lat&&this.sellerInfo.seller_geo_lng},blockFieldList:function(){var n=this.tabData.sensitive_permission,t=n===void 0?{}:n,a=t.blocked_field_list,i=a===void 0?[]:a;return Array.isArray(i)?i:[]},clickToViewFieldList:function(){var n=this.tabData.sensitive_permission,t=n===void 0?{}:n,a=t.click_to_view_field_list,i=a===void 0?[]:a;return Array.isArray(i)?i:[]},module:function(){return this.$route.query.module}}),watch:{orderId:{handler:function(){this.loadData(),this.updatePermission(this.module)},immediate:!0},buyerInfo:function(n){this.copyBuyerInfo=(0,T.cloneDeep)(n)},module:function(n){this.updatePermission(n)}},methods:{updatePermission:function(n){this.permission.skuDetail=(0,b.wD)(this.$store,bo.MF[n])},hideSensitiveDataV2:function(n){return this.blockFieldList.includes(n)||this.clickToViewFieldList.includes(n)},showSensitiveDataIcon:function(n){return this.clickToViewFieldList.includes(n)},handleSellerSensitiveDataChange:function(n,t){this.sellerInfo[n]=t},getRequestSensitiveDataParams:function(n,t,a){var i={shipment_id:this.orderId,data_field:n};return t?(0,I.Z)({},i,(0,rn.Z)({},t,a[t])):i},handleSensitiveDataChange:function(n,t,a){this[n][t]=a},handleShowingChange:function(n,t){this.curShowing[n]=t},showGeoLocationMap:function(n){return this.showGeoLocationInfo&&n.label===this.$gt("GeoLocation")&&this.copyBuyerInfo.buyer_geo_lng&&this.copyBuyerInfo.buyer_geo_lat},showMap:function(n){this.$emit("showMap",{lat:n.lat,lng:n.lng})},editBuyerInfo:function(){this.isBuyerInfoEditMode=!0,this.editShowing={buyer_name:!1,buyer_contact:!1,buyer_email:!1,buyer_addr:!1,buyer_alternative_contact:!1}},editBuyerInfoCancel:function(){this.isBuyerInfoEditMode=!1,this.$refs.buyerInfoForm.clearValidate(),this.copyBuyerInfo=(0,T.cloneDeep)(this.buyerInfo)},editBuyerInfoSubmit:function(){var e=(0,w.Z)(u().mark(function t(){var a=this,i;return u().wrap(function(l){for(;;)switch(l.prev=l.next){case 0:return l.prev=0,(0,b.K4)(this,"editBuyerInfoSubmit",!0),(0,pt.SN)(this.$refs.buyerInfoForm,"form"),i=(0,I.Z)({},this.copyBuyerInfo,{shipment_id:this.orderId}),this.isBuyerInfoEditMode&&(0,T.forEach)(this.editShowing,function(s,c){!s&&a.hideSensitiveDataV2(c)&&delete i[c]}),l.next=7,this.$store.dispatch("updateBuyerInfo",i);case 7:this.loadData(),this.$message.success(L.Lz.edit),this.isBuyerInfoEditMode=!1,l.next=15;break;case 12:l.prev=12,l.t0=l.catch(0),console.error(l.t0);case 15:return l.prev=15,(0,b.K4)(this,"editBuyerInfoSubmit",!1),l.finish(15);case 18:case"end":return l.stop()}},t,this,[[0,12,15,18]])}));function n(){return e.apply(this,arguments)}return n}(),loadData:function(){var e=(0,w.Z)(u().mark(function t(){var a,i,o;return u().wrap(function(s){for(;;)switch(s.prev=s.next){case 0:return s.prev=0,(0,b.K4)(this,"page",!0),a={shipment_id:this.orderId,station_type:(0,M.VG)()},s.next=5,O.UM.loadTradeInfo(a);case 5:i=s.sent,o=i.data,this.tabData=o,s.next=13;break;case 10:s.prev=10,s.t0=s.catch(0),console.error("Load trade info data error, ",s.t0);case 13:return s.prev=13,(0,b.K4)(this,"page",!1),s.finish(13);case 16:case"end":return s.stop()}},t,this,[[0,10,13,16]])}));function n(){return e.apply(this,arguments)}return n}()}};var Fo=(0,C.Z)(wo,mo,vo,!1,null,null,null);const ko=Fo.exports;var Do=function(){var n=this,t=n._self._c;return t("div",[t("div",{staticClass:"fail-log-table-container"},[t("s-table",{directives:[{name:"loading",rawName:"v-loading",value:n.loading.hBase,expression:"loading.hBase"}],attrs:{data:n.orderFailedLog.list}},[t("s-table-column",{attrs:{label:""+n.$gt("Operate Station"),prop:"operate_station_name",fixed:"left",width:150},scopedSlots:n._u([{key:"default",fn:function(i){return[t("div",{attrs:{title:i.row.operate_station_name||"-"}},[t("span",{staticClass:"td-content td-content-ellipsis"},[n._v(n._s(i.row.operate_station_name||"-"))])])]}}])}),n._v(" "),t("s-table-column",{attrs:{label:""+n.$gt("Operator"),prop:"operator",width:150},scopedSlots:n._u([{key:"default",fn:function(i){return[t("div",{attrs:{title:i.row.operator||"-"}},[t("span",{staticClass:"td-content td-content-ellipsis"},[n._v(n._s(i.row.operator||"-"))])])]}}])}),n._v(" "),t("s-table-column",{attrs:{label:""+n.$gt("Operate Time"),prop:"operate_time",width:200},scopedSlots:n._u([{key:"default",fn:function(i){return[n._v(`
          `+n._s(n.formatTimestampToSeconds(i.row.operate_time))+`
        `)]}}])}),n._v(" "),t("s-table-column",{attrs:{label:""+n.$gt("Message"),prop:"message",width:170},scopedSlots:n._u([{key:"default",fn:function(i){return[t("div",{staticClass:"col-text",attrs:{title:i.row.message||"-"}},[n._v(`
            `+n._s(i.row.message||"-")+`
          `)])]}}])}),n._v(" "),t("s-table-column",{attrs:{label:""+n.$gt("Error"),prop:"error",width:150},scopedSlots:n._u([{key:"default",fn:function(i){return[t("div",{staticClass:"col-text",attrs:{title:i.row.error||"-"}},[n._v(`
            `+n._s(i.row.error||"-")+`
          `)])]}}])}),n._v(" "),t("s-table-column",{attrs:{label:n.$gt("TO/Task Number/Manifest"),prop:"operate_task_id",width:200},scopedSlots:n._u([{key:"default",fn:function(i){return[t("div",{attrs:{title:i.row.operate_task_id||"-"}},[t("span",{staticClass:"td-content td-content-ellipsis"},[n._v(n._s(i.row.operate_task_id||"-"))])])]}}])}),n._v(" "),t("s-table-column",{attrs:{label:""+n.$gt("App"),prop:"app",width:150},scopedSlots:n._u([{key:"default",fn:function(i){return[t("div",{attrs:{title:i.row.app||"-"}},[t("span",{staticClass:"td-content td-content-ellipsis"},[n._v(n._s(i.row.app||"-"))])])]}}])}),n._v(" "),t("s-table-column",{attrs:{label:""+n.$gt("Version"),prop:"version",width:150},scopedSlots:n._u([{key:"default",fn:function(i){return[t("div",{attrs:{title:i.row.version||"-"}},[t("span",{staticClass:"td-content td-content-ellipsis"},[n._v(n._s(i.row.version||"-"))])])]}}])}),n._v(" "),t("s-table-column",{attrs:{label:""+n.$gt("Device ID"),prop:"device_id",width:150},scopedSlots:n._u([{key:"default",fn:function(i){return[t("div",{attrs:{title:i.row.device_id||"-"}},[t("span",{staticClass:"td-content td-content-ellipsis"},[n._v(n._s(i.row.device_id||"-"))])])]}}])}),n._v(" "),t("s-table-column",{attrs:{label:""+n.$gt("Scenario"),prop:"scenario",width:150},scopedSlots:n._u([{key:"default",fn:function(i){return[t("div",{attrs:{title:i.row.scenario||"-"}},[t("span",{staticClass:"td-content td-content-ellipsis"},[n._v(n._s(i.row.scenario||"-"))])])]}}])}),n._v(" "),t("s-table-column",{attrs:{label:""+n.$gt("Sub_Scenario"),prop:"sub_scenario",width:150},scopedSlots:n._u([{key:"default",fn:function(i){return[t("div",{attrs:{title:i.row.sub_scenario||"-"}},[t("span",{staticClass:"td-content td-content-ellipsis"},[n._v(n._s(i.row.sub_scenario||"-"))])])]}}])}),n._v(" "),t("s-table-column",{attrs:{label:""+n.$gt("Domain"),prop:"business",width:150},scopedSlots:n._u([{key:"default",fn:function(i){return[t("div",{staticClass:"col-text",attrs:{title:i.row.business||"-"}},[n._v(`
            `+n._s(i.row.business||"-")+`
          `)])]}}])})],1),n._v(" "),t("s-pagination",{staticClass:"table-pagination",attrs:{total:n.orderFailedLog.total,"page-span":n.orderFailedLog.pageno,"current-page":n.failedLogCurrentPage,"page-size":n.failedLogPageSize},on:{"current-change":n.handleFailedLogPageChange,"size-change":n.handleSizeChange}})],1)])},Eo=[],Io=0,mt=1;const Co={inject:["orderDetail"],data:function(){return{failedLogCurrentPage:1,failedLogPageSize:10,failedLogTdCurrentPage:1,failedLogTdPageSize:10,loading:{hBase:!1,tidb:!1}}},computed:(0,I.Z)({},(0,U.mapState)({orderFailedLog:function(n){return n.order.orderFailedLog},tdOrderFailedLog:function(n){return n.order.tdOrderFailedLog}}),{orderId:function(){var n=this.orderDetail.orderId,t=n===void 0?"":n;return(0,q.Y8)(t)},failedLogActionPathTips:function(){return this.$t("MSG_NOTICE.unsuccessfulScanActionPathTips")}}),watch:{orderId:{handler:function(){var e=(0,w.Z)(u().mark(function t(){return u().wrap(function(i){for(;;)switch(i.prev=i.next){case 0:return i.next=2,Y().all([this.fetchFailedLogFromHbase(),this.fetchFailedLogFromTidb()]);case 2:case"end":return i.stop()}},t,this)}));function n(){return e.apply(this,arguments)}return n}(),immediate:!0}},methods:{formatTimestampToSeconds:function(n){return(0,D.WU)(n)},handleSizeChange:function(){var e=(0,w.Z)(u().mark(function t(a){return u().wrap(function(o){for(;;)switch(o.prev=o.next){case 0:return this.failedLogCurrentPage=1,this.failedLogPageSize=a,o.next=4,this.fetchFailedLogFromHbase();case 4:case"end":return o.stop()}},t,this)}));function n(t){return e.apply(this,arguments)}return n}(),handleFailedLogPageChange:function(){var e=(0,w.Z)(u().mark(function t(a){return u().wrap(function(o){for(;;)switch(o.prev=o.next){case 0:return this.failedLogCurrentPage=a,o.next=3,this.fetchFailedLogFromHbase();case 3:case"end":return o.stop()}},t,this)}));function n(t){return e.apply(this,arguments)}return n}(),handleTdSizeChange:function(){var e=(0,w.Z)(u().mark(function t(a){return u().wrap(function(o){for(;;)switch(o.prev=o.next){case 0:return this.failedLogTdCurrentPage=1,this.failedLogTdPageSize=a,o.next=4,this.fetchFailedLogFromTidb();case 4:case"end":return o.stop()}},t,this)}));function n(t){return e.apply(this,arguments)}return n}(),handleFailedLogTdPageChange:function(){var e=(0,w.Z)(u().mark(function t(a){return u().wrap(function(o){for(;;)switch(o.prev=o.next){case 0:return this.failedLogTdCurrentPage=a,o.next=3,this.fetchFailedLogFromTidb();case 3:case"end":return o.stop()}},t,this)}));function n(t){return e.apply(this,arguments)}return n}(),fetchFailedLog:function(n){var t={shipment_id:this.orderId,pageno:n===mt?this.failedLogTdCurrentPage:this.failedLogCurrentPage,count:n===mt?this.failedLogTdPageSize:this.failedLogPageSize,tdflag:n};return this.$store.dispatch("fetchOrderFailedLog",t)},fetchFailedLogFromHbase:function(){var e=(0,w.Z)(u().mark(function t(){return u().wrap(function(i){for(;;)switch(i.prev=i.next){case 0:return i.prev=0,(0,b.K4)(this,"hBase",!0),i.next=4,this.fetchFailedLog(Io);case 4:i.next=9;break;case 6:i.prev=6,i.t0=i.catch(0),console.error("Failed to fetch failed log from hbase",i.t0);case 9:return i.prev=9,(0,b.K4)(this,"hBase",!1),i.finish(9);case 12:case"end":return i.stop()}},t,this,[[0,6,9,12]])}));function n(){return e.apply(this,arguments)}return n}(),fetchFailedLogFromTidb:function(){var e=(0,w.Z)(u().mark(function t(){return u().wrap(function(i){for(;;)switch(i.prev=i.next){case 0:case"end":return i.stop()}},t,this)}));function n(){return e.apply(this,arguments)}return n}()}};var So=(0,C.Z)(Co,Do,Eo,!1,null,null,null);const To=So.exports;var vt={0:"order_info",1:"sender_info",2:"measurement_info",3:"pickup_info",4:"proof_of_contact","failed-log-info":"unsuccessful_log_info",5:"proof_of_onhold",6:"proof_of_exception",7:"proof_of_rejection",8:"abnormally_update",10:"proof_of_return",11:"proof_of_return_on_hold",12:"reallocation_history",13:"ticket_log_info",service_point:"service_point_info"};const Oo={components:{OrderInfo:Na,ProofOfRejection:_i,AbnormallyUpdateOrderStatus:$t,Measurement:ia,RecipientDetail:no,PickupInfo:Ve,MapDialog:un.Z,FinanceFeeInfo:xt,ReallocationHistory:Di,ServicePoint:oo,orderHistoryTracking:Da,TradeInfo:ko,ProofOfContact:hi,unsuccessfulLog:To,TicketLogInfo:ho},data:function(){return{orderId:null,stationType:null,location:{},visible:{map:!1},activeInfoTab:"order_info",loading:{page:!1},tabDataExisted:{proof_of_delivery:!1,proof_of_onhold:!1,proof_of_rejection:!1,proof_of_return:!1,proof_of_return_on_hold:!1,reallocation_history:!1,service_point:!1,abnormally_update:!1},HAS_DELIVERY_INSTRUCTION:Gn}},provide:function(){return{orderDetail:this}},computed:(0,I.Z)({},(0,U.mapState)({orderData:function(n){return n.order.orderDetail},fleetOrderStatus:function(n){return n.enums.systemEnums.fleet_order_status||{}},currentUser:function(n){return n.user.currentLoginUser}}),(0,U.mapGetters)({orderDetailRedirect:"systemConfig/orderDetailRedirect"}),{showProofOfDelivery:function(){return this.tabDataExisted.proof_of_delivery},showProofOfOnHold:function(){return this.tabDataExisted.proof_of_onhold},labelProofOfOnHoldOrDelivery:function(){return Gn?this.$gt("Delivery Info"):this.showProofOfDelivery?this.$gt("Proof of Delivery/Collection"):this.$gt("Proof of On hold")},showProofOfRejection:function(){return this.tabDataExisted.proof_of_rejection},showAbnormallyOrder:function(){return this.tabDataExisted.abnormally_update},showProofOfReturn:function(){return this.tabDataExisted.proof_of_return},showProofOfReturnOnHold:function(){return this.tabDataExisted.proof_of_return_on_hold},showReallocationHistory:function(){return this.tabDataExisted.reallocation_history},hasTicketLogInfo:function(){return y.dU},showServicePoint:function(){return this.tabDataExisted.service_point},showFinanceFeeInfo:function(){return _n},isAgencyUser:function(){var n=this.$route.query.module;return Wt&&n==="agency"}}),watch:{$route:{handler:function(){var e=(0,w.Z)(u().mark(function t(a){var i,o,l,s,c,f,m,h;return u().wrap(function(x){for(;;)switch(x.prev=x.next){case 0:if(i=a.params.sls_tracking_number,o=i===void 0?"":i,l=(0,q.Y8)(o),s=a.query,c=s.stationType,f=s.activeInfoTab,m=f===void 0?"order_info":f,h=vt[m]?vt[m]:m,(0,T.isEqual)(h,this.activeInfoTab)||(this.activeInfoTab=h),this.isAgencyUser&&(this.activeInfoTab="sender_info"),!(0,T.isEqual)(this.orderId,l)){x.next=8;break}return x.abrupt("return");case 8:return x.prev=8,(0,b.K4)(this,"page",!0),this.orderId=l,this.stationType=c,x.next=14,this.preLoadTabData();case 14:x.next=19;break;case 16:x.prev=16,x.t0=x.catch(8),console.error("Failed to fetch order detail ",x.t0);case 19:return x.prev=19,(0,b.K4)(this,"page",!1),x.finish(19);case 22:case"end":return x.stop()}},t,this,[[8,16,19,22]])}));function n(t){return e.apply(this,arguments)}return n}(),immediate:!0}},mounted:function(){if((0,on.reportCountEvent)("User_Detail_Behavior_Report",{user:this.currentUser,type:"View_Old_Order_Detail_Count"}),this.orderDetailRedirect){var n=this.isAgencyUser?"sender_info":"order_info",t=this.$route.params.sls_tracking_number,a=t===void 0?"":t,i=this.$route.query.activeInfoTab,o=i===void 0?n:i,l="/orderDetail/"+a+"/"+o;this.$router.replace((0,I.Z)({},this.$route,{path:l}))}},methods:{preLoadRejectionData:function(){var e=(0,w.Z)(u().mark(function t(a){var i;return u().wrap(function(l){for(;;)switch(l.prev=l.next){case 0:return l.prev=0,l.next=3,O.UM.loadRejectionInfo(a);case 3:i=l.sent,this.tabDataExisted.proof_of_rejection=i.data.ctime>0,l.next=10;break;case 7:l.prev=7,l.t0=l.catch(0),console.error("pre-load rejection_info data failed,",l.t0);case 10:case"end":return l.stop()}},t,this,[[0,7]])}));function n(t){return e.apply(this,arguments)}return n}(),preLoadReallocationData:function(){var e=(0,w.Z)(u().mark(function t(a){var i,o,l;return u().wrap(function(c){for(;;)switch(c.prev=c.next){case 0:return c.prev=0,c.next=3,O.UM.loadRealLocationInfo(a);case 3:i=c.sent,o=i.data,l=o===void 0?{}:o,this.tabDataExisted.reallocation_history=(l.order_reallocation_history_list||[]).length>0,c.next=12;break;case 9:c.prev=9,c.t0=c.catch(0),console.error("pre-load reallocation_history data failed,",c.t0);case 12:case"end":return c.stop()}},t,this,[[0,9]])}));function n(t){return e.apply(this,arguments)}return n}(),preLoadServicePointData:function(){var e=(0,w.Z)(u().mark(function t(a){var i,o,l,s;return u().wrap(function(f){for(;;)switch(f.prev=f.next){case 0:return i=function(h){var F=h.dropoff_sp_info||{},x=h.self_collection_sp_info||{};return!F&&!x?!1:S()(F).length>0||S()(x).length>0},f.prev=1,f.next=4,O.UM.loadServicePointInfo(a);case 4:o=f.sent,l=o.data,s=l===void 0?{}:l,this.tabDataExisted.service_point=i(s),f.next=13;break;case 10:f.prev=10,f.t0=f.catch(1),console.error("pre-load service point data failed,",f.t0);case 13:case"end":return f.stop()}},t,this,[[1,10]])}));function n(t){return e.apply(this,arguments)}return n}(),preLoadAbnormallyUpdateInfo:function(){var e=(0,w.Z)(u().mark(function t(a){var i,o,l;return u().wrap(function(c){for(;;)switch(c.prev=c.next){case 0:return c.prev=0,c.next=3,O.UM.loadAbnormallyUpdateInfo(a);case 3:i=c.sent,o=i.data,l=o===void 0?{}:o,this.tabDataExisted.abnormally_update=(l.abnormally_order_list||[]).length>0,c.next=12;break;case 9:c.prev=9,c.t0=c.catch(0),console.error("Load Abnormally update data error, ",c.t0);case 12:case"end":return c.stop()}},t,this,[[0,9]])}));function n(t){return e.apply(this,arguments)}return n}(),preLoadRecipientInfo:function(){var e=(0,w.Z)(u().mark(function t(a){var i,o,l,s,c,f,m,h,F,x,A,v,G,P,k;return u().wrap(function(W){for(;;)switch(W.prev=W.next){case 0:return W.prev=0,W.next=3,O.UM.loadRecipientInfo(a);case 3:i=W.sent,o=i.data,l=o===void 0?{}:o,s=l.recipient||{},c=s.Delivered,f=c===void 0?{}:c,m=s.SP_Delivered,h=m===void 0?{}:m,F=s.On_Hold,x=F===void 0?{}:F,A=s.SP_Returned,v=A===void 0?{}:A,G=s.Return_On_Hold,P=G===void 0?{}:G,k=(an()(this.fleetOrderStatus)||{})[l.status],this.tabDataExisted.proof_of_delivery=k!=="Returned"&&S()(f||{}).length>0||S()(h||{}).length>0,this.tabDataExisted.proof_of_onhold=(x||{}).length>0,this.tabDataExisted.proof_of_return=k==="Returned"||k==="Returning"&&S()(f||{}).length>0||S()(v||{}).length>0,this.tabDataExisted.proof_of_return_on_hold=S()(P||{}).length>0,W.next=17;break;case 14:W.prev=14,W.t0=W.catch(0),console.error("pre-load recipient info failed, ",W.t0);case 17:case"end":return W.stop()}},t,this,[[0,14]])}));function n(t){return e.apply(this,arguments)}return n}(),preLoadTabData:function(){var e=(0,w.Z)(u().mark(function t(){var a;return u().wrap(function(o){for(;;)switch(o.prev=o.next){case 0:return a={shipment_id:this.orderId,station_type:(0,M.VG)()},o.next=3,Y().all([this.preLoadRejectionData(a),this.preLoadReallocationData(a),this.preLoadServicePointData(a),this.preLoadAbnormallyUpdateInfo(a),this.preLoadRecipientInfo(a)]);case 3:case"end":return o.stop()}},t,this)}));function n(){return e.apply(this,arguments)}return n}(),handleTabChange:function(n){if((0,on.reportCountEvent)("User_Detail_Behavior_Report",{tabValue:n,type:"Order_Detail_Tab_Change"}),this.isAgencyUser){var t={page_type:Pt[n],target_type:"click",operation:"click",data:{operator_email:this.currentUser.email,agency_id:this.currentUser.agency_id,station_name:this.currentUser.current_station_name,click_timestamp:H()().format("YYYY-MM-DD HH:mm:ss"),region_name:(0,xn.ub)()}};(0,X.sendDataToTms)(t)}},onShowMap:function(n){fn()(n)&&(n.lat===void 0||n.lng===void 0||(this.location=n,this.visible.map=!0))},fetchOrderDetail:function(){this.hasFetchOrderDetail=!0;var n={orderId:this.orderId,stationType:this.stationType};return this.$store.dispatch("fetchOrderDetail",n)},tabPageBefore:function(){(0,on.reportCountEvent)("User_Detail_Behavior_Report",{value:"before",type:"Order_Detail_Tab_Arrow_Change"})},tabPageAfter:function(){(0,on.reportCountEvent)("User_Detail_Behavior_Report",{value:"after",type:"Order_Detail_Tab_Arrow_Change"})}}};var Gr=r("Gvea"),Wr=r("Hgj1"),$o=(0,C.Z)(Oo,d,_,!1,null,null,null);const Po=$o.exports},wW2B:p=>{p.exports="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzIiIGhlaWdodD0iMzIiIHZpZXdCb3g9IjAgMCAzMiAzMiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTE2IDMyQzI0LjgzNjUgMzIgMzIgMjQuODM2NSAzMiAxNkMzMiA3LjE2MzQzIDI0LjgzNjUgMCAxNiAwQzcuMTYzNDMgMCAwIDcuMTYzNDMgMCAxNkMwIDI0LjgzNjUgNy4xNjM0MyAzMiAxNiAzMloiIGZpbGw9IiMzMDM4NDQiIGZpbGwtb3BhY2l0eT0iMC4zIi8+CjxwYXRoIGQ9Ik0xMi43OTk4IDE2LjQ3NzhWMTEuMTk5MkwxNy4zNzEyIDEzLjgzODVMMjEuOTQyNyAxNi40Nzc4TDE3LjM3MTIgMTkuMTE3MkwxMi43OTk4IDIxLjc1NjVWMTYuNDc3OFoiIGZpbGw9IndoaXRlIiBzdHJva2U9IndoaXRlIiBzdHJva2Utd2lkdGg9IjIuNCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIvPgo8L3N2Zz4K"},kz1f:(p,g,r)=>{var d=r("nyvy");typeof d=="string"&&(d=[[p.id,d,""]]),d.locals&&(p.exports=d.locals);var _=r("er8A").Z,E=_("4b6d009d",d,!0,{})},di7K:(p,g,r)=>{var d=r("EDpc");typeof d=="string"&&(d=[[p.id,d,""]]),d.locals&&(p.exports=d.locals);var _=r("er8A").Z,E=_("6f831642",d,!0,{})},cHWL:(p,g,r)=>{var d=r("WSun");typeof d=="string"&&(d=[[p.id,d,""]]),d.locals&&(p.exports=d.locals);var _=r("er8A").Z,E=_("c00257a2",d,!0,{})},wdLK:(p,g,r)=>{var d=r("k+/e");typeof d=="string"&&(d=[[p.id,d,""]]),d.locals&&(p.exports=d.locals);var _=r("er8A").Z,E=_("7f0a1128",d,!0,{})},IRMP:(p,g,r)=>{var d=r("YH2U");typeof d=="string"&&(d=[[p.id,d,""]]),d.locals&&(p.exports=d.locals);var _=r("er8A").Z,E=_("92981cbc",d,!0,{})},tXG3:(p,g,r)=>{var d=r("TScT");typeof d=="string"&&(d=[[p.id,d,""]]),d.locals&&(p.exports=d.locals);var _=r("er8A").Z,E=_("21d39070",d,!0,{})},wv2g:(p,g,r)=>{var d=r("LUT5");typeof d=="string"&&(d=[[p.id,d,""]]),d.locals&&(p.exports=d.locals);var _=r("er8A").Z,E=_("7ac47a43",d,!0,{})},Gvea:(p,g,r)=>{var d=r("ZLjQ");typeof d=="string"&&(d=[[p.id,d,""]]),d.locals&&(p.exports=d.locals);var _=r("er8A").Z,E=_("09634473",d,!0,{})},Hgj1:(p,g,r)=>{var d=r("qO4N");typeof d=="string"&&(d=[[p.id,d,""]]),d.locals&&(p.exports=d.locals);var _=r("er8A").Z,E=_("6049bd32",d,!0,{})},"675p":(p,g,r)=>{var d=r("Fn4q");typeof d=="string"&&(d=[[p.id,d,""]]),d.locals&&(p.exports=d.locals);var _=r("er8A").Z,E=_("d8d0dbb4",d,!0,{})},JPEp:(p,g,r)=>{var d=r("V9IP");typeof d=="string"&&(d=[[p.id,d,""]]),d.locals&&(p.exports=d.locals);var _=r("er8A").Z,E=_("6312c80c",d,!0,{})},"1JTk":(p,g,r)=>{var d=r("+JqL");typeof d=="string"&&(d=[[p.id,d,""]]),d.locals&&(p.exports=d.locals);var _=r("er8A").Z,E=_("07669d6a",d,!0,{})},OCkJ:(p,g,r)=>{var d=r("kFSH");typeof d=="string"&&(d=[[p.id,d,""]]),d.locals&&(p.exports=d.locals);var _=r("er8A").Z,E=_("62d42cee",d,!0,{})},OoOe:(p,g,r)=>{var d=r("cfmi");typeof d=="string"&&(d=[[p.id,d,""]]),d.locals&&(p.exports=d.locals);var _=r("er8A").Z,E=_("43308ef4",d,!0,{})},"9fl2":(p,g,r)=>{var d=r("FREN");typeof d=="string"&&(d=[[p.id,d,""]]),d.locals&&(p.exports=d.locals);var _=r("er8A").Z,E=_("43e1258f",d,!0,{})},uSMF:(p,g,r)=>{var d=r("8WQs");typeof d=="string"&&(d=[[p.id,d,""]]),d.locals&&(p.exports=d.locals);var _=r("er8A").Z,E=_("aa696766",d,!0,{})},GU4R:(p,g,r)=>{var d=r("jtac");typeof d=="string"&&(d=[[p.id,d,""]]),d.locals&&(p.exports=d.locals);var _=r("er8A").Z,E=_("596ddb19",d,!0,{})},Qi1H:(p,g,r)=>{var d=r("PO6W");typeof d=="string"&&(d=[[p.id,d,""]]),d.locals&&(p.exports=d.locals);var _=r("er8A").Z,E=_("0cc4954e",d,!0,{})},"v/+o":(p,g,r)=>{var d=r("BDGn");typeof d=="string"&&(d=[[p.id,d,""]]),d.locals&&(p.exports=d.locals);var _=r("er8A").Z,E=_("8b86084a",d,!0,{})},TL1c:(p,g,r)=>{var d=r("j1de");typeof d=="string"&&(d=[[p.id,d,""]]),d.locals&&(p.exports=d.locals);var _=r("er8A").Z,E=_("7b86ab14",d,!0,{})},O9QU:(p,g,r)=>{var d=r("BemC");typeof d=="string"&&(d=[[p.id,d,""]]),d.locals&&(p.exports=d.locals);var _=r("er8A").Z,E=_("0746f05a",d,!0,{})},"zq/y":(p,g,r)=>{var d=r("vBnQ");typeof d=="string"&&(d=[[p.id,d,""]]),d.locals&&(p.exports=d.locals);var _=r("er8A").Z,E=_("771d65ff",d,!0,{})},"7sS6":(p,g,r)=>{var d=r("SbZO");typeof d=="string"&&(d=[[p.id,d,""]]),d.locals&&(p.exports=d.locals);var _=r("er8A").Z,E=_("6598040c",d,!0,{})},IWpL:(p,g,r)=>{var d=r("I7kp");typeof d=="string"&&(d=[[p.id,d,""]]),d.locals&&(p.exports=d.locals);var _=r("er8A").Z,E=_("579af2f4",d,!0,{})},ar18:()=>{},"xpy+":()=>{}}]);
