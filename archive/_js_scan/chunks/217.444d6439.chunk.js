(self.webpackChunkzzz_fms_admin=self.webpackChunkzzz_fms_admin||[]).push([[217],{Nc95:(g,h,o)=>{"use strict";o.d(h,{Z:()=>T});var d=o("jo6Y"),C=o("QbLZ"),k=o("CdQ4"),A=o("Ke0q"),s=o("QsnJ"),p={data:function(){return{startedInputTime:0,finishedInputTime:0,startedKeyDownTime:0,operationDevice:s.fH.PC,operationMode:"",isScanInputMode:!1,operationInfo:{},orderId:"",lastStartedKeydownTime:0}},methods:{initScanBehaviorDetection:function(v){this.$watch(v,this.handleInputValChange)},getOperationInfo:function(){return this.startedKeyDownTime=Date.now(),this.isScan()?this.operationMode=s.yi.SCAN:this.operationMode=s.yi.MANUAL,{operation_mode:this.operationMode,operation_device:this.operationDevice}},isScan:function(){return this.inputFinishedToKeyDownTime=this.startedKeyDownTime-this.finishedInputTime,this.isScanInputMode&&this.inputFinishedToKeyDownTime<s.IF},handleInputValChange:function(v,F){var x=Date.now();(v.length===1&&F.length===0||v.length===1&&F.length>=9)&&(this.startedInputTime=x),this.finishedInputTime=x,this.isScanInputMode=v.length-F.length===1&&v.includes(F),this.orderId=v,v===""&&this.resetOperationParams()},resetOperationParams:function(){this.startedKeyDownTime=0,this.startedInputTime=0,this.finishedInputTime=0,this.isScanInputMode=!1},getMode:function(){return this.operationMode===s.yi.SCAN?"scan":"manual"},getInputMode:function(){return this.isScanInputMode?"scan":"copy"},getFinalMode:function(){var v=this.getMode(),F=this.inputFinishedToKeyDownTime<=s.OU&&v==="manual",x=this.getInputMode();return F?"script":x==="copy"?"copy":v},getScanReportData:function(v){this.startedInputTime===0&&(this.startedInputTime=this.finishedInputTime);var F=this.startedKeyDownTime-this.startedInputTime,x=(0,A.JK)(),z=(0,A.vP)(),E=this.startedInputTime===0?this.lastStartedKeydownTime:F;return this.lastStartedKeydownTime=E,(0,C.Z)({startInputToKeyDownDuration:F,inputFinishedToKeyDownDuration:this.inputFinishedToKeyDownTime,realStartInputToKeyDownDuration:E,mode:this.getMode(),stationType:x,stationName:z,orderId:this.orderId,inputMode:this.getInputMode(),finalMode:this.getFinalMode()},v)},onScanEnded:function(){var v=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},F=v.shouldReport,x=F===void 0?!0:F,z=(0,d.Z)(v,["shouldReport"]),E=x?this.getScanReportData(z):{};return x&&(0,k.L)(E),this.resetOperationParams(),E}}};const T=p},CdQ4:(g,h,o)=>{"use strict";o.d(h,{L:()=>L});var d=o("QbLZ"),C=o("jo6Y"),k=o("Shij"),A=o.n(k),s={live:"1aa5f09a2d015c909c3d0d42054f7397",test:"0b705d3892bce6403f86d4d3d6bc8dd5"},p={live:"5b721ae989b4f3f297c8e5cef259fde9",test:"f83d8de4d23e81171c74fdf80fd03c97"},T={live:"bdfeef3cd2f783f8c67777e68ac8d17f",test:"00e048297171596f7a986a106fbde3bb"},b={live:"fd49f537f15e2b42ee9e47f9d13100d2",test:"7bea1dfb0b94f02067834272e1120269"},v=s[k.env],F=p[k.env],x=T[k.env],z=b[k.env],E=1e12;function L(B){var R=B.startInputToKeyDownDuration,P=R===void 0?0:R,Z=B.inputFinishedToKeyDownDuration,j=Z===void 0?0:Z,Y=B.finalMode,N=(0,C.Z)(B,["startInputToKeyDownDuration","inputFinishedToKeyDownDuration","finalMode"]);P>E||j>E?(0,k.sendDataToMdap)(x,P,(0,d.Z)({},N)):((0,k.sendDataToMdap)(v,P,(0,d.Z)({},N)),(0,k.sendDataToMdap)(F,j,(0,d.Z)({},N))),Y==="script"&&(0,k.sendDataToMdap)(z,j,(0,d.Z)({},N))}},SCgk:(g,h,o)=>{"use strict";o.d(h,{o:()=>d.playFailureSound,w:()=>d.playSuccessSound});var d=o("vzk9"),C=o.n(d)},vbzK:(g,h,o)=>{"use strict";o.d(h,{t:()=>A});var d=o("P451"),C=3,k=32,A=function(p){var T=p&&p.trim();if(!T)throw new Error((0,d.ok)("Please input Tracking Number"));var b=T.length;if(b<C||b>k)throw new Error((0,d.ok)("Please input a valid Tracking Number"))}},PMXM:(g,h,o)=>{var d=o("JPst");h=d(!1),h.push([g.id,`.total-collection[data-v-e876442c] {
  height: 118px;
  background: #FAFAFA;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-bottom: 16px;
}
.total-collection-label[data-v-e876442c] {
  margin-bottom: 12px;
  color: #666666;
}
.total-collection-content[data-v-e876442c] {
  font-size: 36px;
  color: #333333;
}
.image-upload[data-v-e876442c] .ssc-upload-picture-card {
  width: 82px;
  height: 82px;
  margin-bottom: 0;
  display: inline-flex;
  align-items: center;
  justify-content: center;
}
.image-upload[data-v-e876442c] .ssc-upload-picture-card-add-normal:hover {
  border-color: #ee4d2d !important;
}
.image-upload[data-v-e876442c] .ssc-upload-picture-card-add-normal:hover .upload-icon-add {
  color: #ee4d2d;
}
ul[data-v-e876442c] {
  padding: 0;
  margin: 0;
  list-style: none;
}
.button-base[data-v-e876442c] {
  padding: 9px 20px;
  font-size: 14px;
  color: #FFFFFF;
}
.spx-button[data-v-e876442c] {
  padding: 9px 20px;
  font-size: 14px;
  color: #FFFFFF;
  border-color: #FFFFFF;
  color: #555555;
}
.spx-button[data-v-e876442c]:hover {
  background-color: #FFFFFF;
}
.spx-button-primary[data-v-e876442c] {
  padding: 9px 20px;
  font-size: 14px;
  color: #FFFFFF;
  background-color: #EE4D2D;
  border-color: #EE4D2D;
}
.ssc-message[data-v-e876442c] {
  top: 20px !important;
}
.sp-card > .actions[data-v-e876442c] {
  margin-bottom: 10px;
  display: flex;
  flex-wrap: wrap;
}
.sp-card > .actions .right[data-v-e876442c] {
  flex: 1;
  text-align: right;
  height: 40px;
}
table th[data-v-e876442c] {
  color: rgba(0, 0, 0, 0.85);
  border-color: #EEEEEE;
  font-size: 14px;
  font-weight: 500;
}
.spx-editor .ssc-tag[data-v-e876442c] {
  font-size: 12px;
  margin: 0px;
  padding: 0;
}
.spx-editor .ssc-tag .left-padding-span[data-v-e876442c] {
  width: 0;
  margin: 0 0 0 8px;
}
.spx-editor .ssc-tag .right-padding-span[data-v-e876442c] {
  width: 0;
  margin: 0 8px 0 0;
}
.spx-editor .tag-editor-span[data-v-e876442c] {
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
.spx-editor .tag-editor-span .tag-editor-span-space[data-v-e876442c] {
  width: 8px;
  height: 15px;
  display: inline-block;
  line-height: 22px;
}
.ssc-tabs-type-pane-card .ssc-tabs-pane[data-v-e876442c] {
  background: #FAFAFA;
}
.check-tree[data-v-e876442c] {
  margin-left: 80px;
}
.avatar-uploader-icon[data-v-e876442c] {
  font-size: 28px;
  color: #8c939d;
  width: 178px;
  height: 178px;
  line-height: 178px;
  text-align: center;
}
.avatar-uploader-icon-small[data-v-e876442c] {
  font-size: 14px !important;
  color: #8c939d;
  width: 56px !important;
  height: 56px !important;
  line-height: 56px !important;
  text-align: center;
}
.avatar-uploader-icon-middle[data-v-e876442c] {
  font-size: 14px !important;
  color: #8c939d;
  width: 94px !important;
  height: 94px !important;
  line-height: 94px !important;
  text-align: center;
}
.avatar[data-v-e876442c] {
  width: 178px;
  height: 178px;
  display: block;
}
.avatar-small[data-v-e876442c] {
  width: 56px;
  height: 56px;
  display: block;
}
.avatar-middle[data-v-e876442c] {
  width: 94px;
  height: 94px;
  display: block;
}
.acribus-sp-tabs[data-v-e876442c] {
  padding: 16px 16px 0px;
  border-radius: 6px;
  margin-bottom: -30px;
  background-color: #fff;
}
span.red[data-v-e876442c] {
  color: #F56C6C;
}
span.green[data-v-e876442c] {
  color: #67C23A;
}
.sp-hooks[data-v-e876442c] {
  overflow: hidden;
}
.text-link[data-v-e876442c] {
  color: #409eff;
  cursor: pointer;
}
.text-warning[data-v-e876442c] {
  color: #e80808;
}
.help-text[data-v-e876442c] {
  cursor: help;
}
.driver-performance-flag-A[data-v-e876442c] {
  color: #55CC77;
}
.driver-performance-flag-B[data-v-e876442c] {
  color: #999;
}
.driver-performance-flag-C[data-v-e876442c] {
  color: #FF4742;
}
/* [check-in rule] Google map autosuggest result container */
.pac-container[data-v-e876442c] {
  z-index: 100000;
}
.action-link[data-v-e876442c] {
  color: #2769f0;
  cursor: pointer;
  display: inline-block;
  margin-left: 6px;
}
.action-link[data-v-e876442c]:first-child {
  margin-left: 0;
}
.action-link[data-v-e876442c]:hover {
  text-decoration: underline;
}
.separate-line[data-v-e876442c] {
  height: 0;
  width: 100%;
  border-top: 1px #E9E9E9 solid;
  margin-bottom: 16px;
}
.white-fs-ground[data-v-e876442c] {
  padding: 24px;
  background: #fff;
  height: 100%;
}
.white-fs-ground .category-title[data-v-e876442c] {
  font-size: 16px;
  font-weight: 500;
  line-height: 16px;
  color: #333;
  margin-top: 56px;
  margin-bottom: 16px;
}
.white-fs-ground .category-title[data-v-e876442c]:first-child {
  margin-top: 16px;
}
.white-fs-ground .category-title[data-v-e876442c]:before {
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
.page-table-container[data-v-e876442c] {
  border: 1px solid #eee;
}
.form-body-center[data-v-e876442c] {
  margin: 0 auto;
}
.form-body-left[data-v-e876442c] {
  margin: 0;
}
.dialog-footer[data-v-e876442c],
.footer-submit[data-v-e876442c] {
  margin-top: 32px;
}
.dialog-footer .ssc-button[data-v-e876442c],
.footer-submit .ssc-button[data-v-e876442c] {
  margin-left: 16px;
}
.dialog-footer .ssc-button[data-v-e876442c]:first-child,
.footer-submit .ssc-button[data-v-e876442c]:first-child {
  margin-left: 0;
}
.text-center[data-v-e876442c] {
  text-align: center;
}
.s-form-textarea .ssc-textarea[data-v-e876442c],
.ssc-form-item .ssc-select[data-v-e876442c],
.ssc-form-item .ssc-input-size-medium[data-v-e876442c] {
  width: 320px;
}
.ssc-steps.is-horizontal[data-v-e876442c] {
  width: 60%;
  margin: 23px auto;
}
.action-wrap[data-v-e876442c] {
  display: flex;
  margin: 10px 0;
}
.action-wrap .actions[data-v-e876442c] {
  flex: 1;
}
.action-wrap .actions .ssc-button[data-v-e876442c] {
  margin-right: 16px;
}
.action-wrap .upload-route-log-info[data-v-e876442c] {
  align-self: center;
  text-align: right;
  flex: 1;
}
.action-wrap .upload-route-log-info label[data-v-e876442c] {
  margin-right: 8px;
}
.upload-log-table[data-v-e876442c] {
  margin: 10px 0;
}
.group-route-list-info[data-v-e876442c] {
  line-height: 40px;
}
.group-route-list-info label[data-v-e876442c] {
  margin-right: 10px;
}
.mass-upload-input-footer[data-v-e876442c] {
  margin-top: 32px;
}
.mass-upload-input-footer .ssc-button[data-v-e876442c] {
  margin-right: 10px;
}
.add-range-btn[data-v-e876442c] {
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
.add-range-btn[data-v-e876442c]:hover {
  background: #f6f6f6;
}
.range-wrap[data-v-e876442c] {
  padding: 16px;
}
.range-wrap .seq-tag[data-v-e876442c] {
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
.range-wrap .icon-del[data-v-e876442c] {
  line-height: 32px;
  width: 24px;
  height: 24px;
  cursor: pointer;
  color: #bbb;
}
.range-wrap .icon-del[data-v-e876442c]:hover {
  color: #888;
}
.bg-fafafa[data-v-e876442c] {
  background: #fafafa;
}
.ssc-step-main-title[data-v-e876442c] {
  line-height: 1.5;
}
.ssc-form-item-error-tip[data-v-e876442c] {
  white-space: nowrap;
}
.ssc-table-header .ssc-table-header-title[data-v-e876442c] {
  height: 100%;
}
.ssc-table-header .ssc-table-header-column-container[data-v-e876442c] {
  height: 100%;
}
.ssc-table-body .ssc-table-header-column-container .td-content[data-v-e876442c] {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.acribus-text-ellipsis[data-v-e876442c] {
  display: inline-block;
  width: 100%;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.station-tree-container .ssc-form-item-content[data-v-e876442c] {
  flex-direction: column;
  position: relative;
}
.station-tree-container .ssc-form-item-content .tree[data-v-e876442c] {
  min-width: 318px;
  display: block;
  margin-top: 20px;
}
.station-tree-container .ssc-form-item-content .tree.has-search-input[data-v-e876442c] {
  padding-top: 40px;
}
.station-tree-container .ssc-form-item-content .tree-input[data-v-e876442c] {
  position: absolute;
  left: 3%;
  top: 30px;
  z-index: 1;
  width: 94%;
  margin: 0 auto;
  color: #aeaeae;
}
.ssc-dropdown-menu[data-v-e876442c] {
  min-width: 176px;
  max-width: 320px;
  z-index: 2;
}
.ssc-dropdown-menu .active[data-v-e876442c] {
  color: #EE4D2D;
  font-weight: 500;
}
.detail-part-title[data-v-e876442c] {
  font-size: 18px;
  color: #333333;
  font-weight: 500;
  margin-bottom: 16px;
}
.detail-part-title.additional-info[data-v-e876442c] {
  margin-top: 56px;
}
.detail-part-title[data-v-e876442c]::before {
  content: '';
  width: 2px;
  height: 10px;
  background: #EE4D2D;
  display: inline-block;
  margin-right: 6px;
}
.page-wrapper[data-v-e876442c] {
  height: 100%;
}
.zone-container button:disabled:not(.btn-prev):not(.btn-next).ssc-btn-type-primary[data-v-e876442c] {
  color: #FFF !important;
  background: #EE4D2D !important;
  opacity: 0.5;
}
.pagination-left-total[data-v-e876442c] {
  display: flex;
  flex: 1;
}
.common-status[data-v-e876442c] {
  line-height: 12px;
  font-weight: 500;
  padding: 3px 4px;
  border-radius: 2px;
  display: inline-block;
  white-space: nowrap;
}
.common-status.status-success[data-v-e876442c] {
  background: #ECFFF1;
  color: #1CC461;
}
.common-status.status-disabled[data-v-e876442c] {
  color: #646B76;
  background: #F5F6F9;
}
.common-status.status-info[data-v-e876442c] {
  color: #3274F7;
  background: #F0F7FF;
}
.common-status.status-danger[data-v-e876442c] {
  color: #F32345;
  background: #FFF0F0;
}
.common-status.status-warning[data-v-e876442c] {
  background: #FFF8DB;
  color: #FFB014;
}
.common-divide[data-v-e876442c] {
  height: 8px;
  background: #F5F6F9;
  margin: 0 -24px;
}
.ssc-scan-toast[data-v-e876442c] {
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
.ssc-scan-toast.ssc-scan-toast-success[data-v-e876442c] {
  animation-duration: 4.4s;
  animation-name: scanSuccessToast-e876442c;
  background: #1CC461;
}
.ssc-scan-toast.ssc-scan-toast-fail[data-v-e876442c] {
  background: #F32345;
  animation-duration: 8.4s;
  animation-name: scanFailToast-e876442c;
}
.ssc-scan-toast.ssc-scan-toast-notice[data-v-e876442c] {
  background: #FFA620;
  animation-duration: 6.4s;
  animation-name: scanFailToast-e876442c;
}
.ssc-scan-toast .message-panel[data-v-e876442c] {
  display: flex;
  width: 100%;
  align-items: center;
}
.ssc-scan-toast .message-panel .icon[data-v-e876442c] {
  margin-right: 18px;
  width: 28px;
  height: 28px;
  flex-shrink: 0;
}
.ssc-scan-toast .message-panel .text[data-v-e876442c] {
  display: inline-block;
}
@keyframes scanSuccessToast-e876442c {
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
@keyframes scanFailToast-e876442c {
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
.table-pagination[data-v-e876442c] {
  height: 56px;
  border: 1px solid #ECF0F4;
  border-top: 0;
  justify-content: flex-end;
  padding-right: 16px;
}
.journey-type[data-v-e876442c] {
  display: flex;
  align-items: center;
}
.journey-type .journey-type-dot[data-v-e876442c] {
  width: 6px;
  height: 6px;
  border-radius: 50%;
  display: inline-block;
  margin-right: 8px;
}
.pagination-sticky-bottom[data-v-e876442c] {
  background: #fff;
  position: sticky;
  bottom: 16px;
}
.pagination-sticky-bottom[data-v-e876442c]:after {
  content: ' ';
  background: #fff;
  width: 100%;
  height: 16px;
  position: absolute;
}
.pagination-sticky-bottom[data-v-e876442c] .ssc-pagination {
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
.pagination-sticky-bottom[data-v-e876442c] .ssc-pagination .total-container {
  flex: 1;
  margin-left: 15px;
  margin-right: 12px;
}
.sp-card-log-list[data-v-e876442c] {
  padding: 16px 24px;
  background: #fff;
  min-height: 100%;
}
.ssc-table-panel .ssc-form-item .ssc-form-item-content textarea[data-v-e876442c],
.pro-filter .ssc-form-item .ssc-form-item-content textarea[data-v-e876442c] {
  border: transparent;
}
.message-red-text[data-v-e876442c] {
  color: #EE4D2D;
  font-weight: 700;
}
`,""]),g.exports=h},W6Za:(g,h,o)=>{var d=o("JPst");h=d(!1),h.push([g.id,`.drop-off-container[data-v-4e163834] {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
}
.drop-off-container .task-info[data-v-4e163834] {
  flex-shrink: 0;
  background: #FFFFFF;
  margin: 8px 0;
  padding: 24px;
}
.drop-off-container .task-info-icon[data-v-4e163834] {
  cursor: pointer;
  width: 14px;
  height: 14px;
}
.drop-off-container .task-info-header[data-v-4e163834] {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 24px;
}
.drop-off-container .task-info-content[data-v-4e163834] {
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  color: #333333;
}
.drop-off-container .task-info-content-label[data-v-4e163834] {
  color: #999999;
}
.drop-off-container .task-info-content-base[data-v-4e163834] {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  flex-wrap: wrap;
  width: 712px;
}
.drop-off-container .task-info-content-base-item[data-v-4e163834] {
  flex-shrink: 0;
  flex-basis: 50%;
  display: flex;
  max-width: 348px;
}
.drop-off-container .task-info-content-base-item-label[data-v-4e163834] {
  margin-right: 8px;
  flex-shrink: 0;
  color: #999999;
}
.drop-off-container .task-info-content-base-item-content[data-v-4e163834] {
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}
.drop-off-container .task-info-content-base-item-content span[data-v-4e163834] {
  display: inline-block;
  width: 100%;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}
.drop-off-container .task-info-task-id[data-v-4e163834] {
  font-weight: 500;
  font-size: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #333333;
}
.drop-off-container .task-info-task-status[data-v-4e163834] {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  height: 20px;
  padding: 4px;
  font-size: 12px;
  margin-left: 8px;
  border-radius: 2px;
}
.drop-off-container .task-info-task-created[data-v-4e163834] {
  background: #F6F6F6;
  color: #666666;
}
.drop-off-container .task-info-task-created[data-v-4e163834]::before {
  content: 'Created';
}
.drop-off-container .task-info-task-doing[data-v-4e163834] {
  background: #F0F7FF;
  color: #3274F7;
}
.drop-off-container .task-info-task-doing[data-v-4e163834]::before {
  content: 'Doing';
}
.drop-off-container .task-info-task-done[data-v-4e163834] {
  background: #ECFFF1;
  color: #1CC461;
}
.drop-off-container .task-info-task-done[data-v-4e163834]::before {
  content: 'Done';
}
.drop-off-container .task-info-amount[data-v-4e163834] {
  display: flex;
}
.drop-off-container .task-info-amount-item[data-v-4e163834] {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.drop-off-container .task-info-amount-item-label[data-v-4e163834] {
  color: #999999;
}
.drop-off-container .task-info-amount-item-content[data-v-4e163834] {
  font-size: 20px;
  color: #333333;
}
.drop-off-container .order-input[data-v-4e163834] {
  flex-shrink: 0;
  background: #FFFFFF;
  margin-bottom: 8px;
  height: 80px;
  padding: 24px;
}
.drop-off-container .task-order-list[data-v-4e163834] {
  background: #FFFFFF;
  flex-grow: 1;
  padding: 24px;
}
.drop-off-container .task-order-list .action-container[data-v-4e163834] {
  color: #1B71FF;
  font-size: 14px;
}
.drop-off-container .task-order-list .action-container span[data-v-4e163834] {
  margin-right: 16px;
  cursor: pointer;
}
.payment-detail[data-v-4e163834] {
  padding-bottom: 32px;
}
.payment-detail .payment-info-item[data-v-4e163834] {
  display: flex;
  align-items: center;
  margin-bottom: 16px;
}
.payment-detail .payment-info-item-label[data-v-4e163834] {
  width: 140px;
  text-align: right;
  color: #999999;
  margin-right: 8px;
}
.payment-detail .payment-info-item-content[data-v-4e163834] {
  color: #333333;
}
.dropoff-pagination[data-v-4e163834] {
  margin: 10px;
  display: flex;
  align-items: center;
  justify-content: flex-end;
}
.image-upload[data-v-4e163834] .ssc-upload-picture-card {
  width: 82px;
  height: 82px;
  margin-bottom: 0;
  display: inline-flex;
  align-items: center;
  justify-content: center;
}
.image-upload[data-v-4e163834] .ssc-upload-picture-card-add-normal:hover {
  border-color: #ee4d2d !important;
}
.image-upload[data-v-4e163834] .ssc-upload-picture-card-add-normal:hover .upload-icon-add {
  color: #ee4d2d;
}
ul[data-v-4e163834] {
  padding: 0;
  margin: 0;
  list-style: none;
}
.button-base[data-v-4e163834] {
  padding: 9px 20px;
  font-size: 14px;
  color: #FFFFFF;
}
.spx-button[data-v-4e163834] {
  padding: 9px 20px;
  font-size: 14px;
  color: #FFFFFF;
  border-color: #FFFFFF;
  color: #555555;
}
.spx-button[data-v-4e163834]:hover {
  background-color: #FFFFFF;
}
.spx-button-primary[data-v-4e163834] {
  padding: 9px 20px;
  font-size: 14px;
  color: #FFFFFF;
  background-color: #EE4D2D;
  border-color: #EE4D2D;
}
.ssc-message[data-v-4e163834] {
  top: 20px !important;
}
.sp-card > .actions[data-v-4e163834] {
  margin-bottom: 10px;
  display: flex;
  flex-wrap: wrap;
}
.sp-card > .actions .right[data-v-4e163834] {
  flex: 1;
  text-align: right;
  height: 40px;
}
table th[data-v-4e163834] {
  color: rgba(0, 0, 0, 0.85);
  border-color: #EEEEEE;
  font-size: 14px;
  font-weight: 500;
}
.spx-editor .ssc-tag[data-v-4e163834] {
  font-size: 12px;
  margin: 0px;
  padding: 0;
}
.spx-editor .ssc-tag .left-padding-span[data-v-4e163834] {
  width: 0;
  margin: 0 0 0 8px;
}
.spx-editor .ssc-tag .right-padding-span[data-v-4e163834] {
  width: 0;
  margin: 0 8px 0 0;
}
.spx-editor .tag-editor-span[data-v-4e163834] {
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
.spx-editor .tag-editor-span .tag-editor-span-space[data-v-4e163834] {
  width: 8px;
  height: 15px;
  display: inline-block;
  line-height: 22px;
}
.ssc-tabs-type-pane-card .ssc-tabs-pane[data-v-4e163834] {
  background: #FAFAFA;
}
.check-tree[data-v-4e163834] {
  margin-left: 80px;
}
.avatar-uploader-icon[data-v-4e163834] {
  font-size: 28px;
  color: #8c939d;
  width: 178px;
  height: 178px;
  line-height: 178px;
  text-align: center;
}
.avatar-uploader-icon-small[data-v-4e163834] {
  font-size: 14px !important;
  color: #8c939d;
  width: 56px !important;
  height: 56px !important;
  line-height: 56px !important;
  text-align: center;
}
.avatar-uploader-icon-middle[data-v-4e163834] {
  font-size: 14px !important;
  color: #8c939d;
  width: 94px !important;
  height: 94px !important;
  line-height: 94px !important;
  text-align: center;
}
.avatar[data-v-4e163834] {
  width: 178px;
  height: 178px;
  display: block;
}
.avatar-small[data-v-4e163834] {
  width: 56px;
  height: 56px;
  display: block;
}
.avatar-middle[data-v-4e163834] {
  width: 94px;
  height: 94px;
  display: block;
}
.acribus-sp-tabs[data-v-4e163834] {
  padding: 16px 16px 0px;
  border-radius: 6px;
  margin-bottom: -30px;
  background-color: #fff;
}
span.red[data-v-4e163834] {
  color: #F56C6C;
}
span.green[data-v-4e163834] {
  color: #67C23A;
}
.sp-hooks[data-v-4e163834] {
  overflow: hidden;
}
.text-link[data-v-4e163834] {
  color: #409eff;
  cursor: pointer;
}
.text-warning[data-v-4e163834] {
  color: #e80808;
}
.help-text[data-v-4e163834] {
  cursor: help;
}
.driver-performance-flag-A[data-v-4e163834] {
  color: #55CC77;
}
.driver-performance-flag-B[data-v-4e163834] {
  color: #999;
}
.driver-performance-flag-C[data-v-4e163834] {
  color: #FF4742;
}
/* [check-in rule] Google map autosuggest result container */
.pac-container[data-v-4e163834] {
  z-index: 100000;
}
.action-link[data-v-4e163834] {
  color: #2769f0;
  cursor: pointer;
  display: inline-block;
  margin-left: 6px;
}
.action-link[data-v-4e163834]:first-child {
  margin-left: 0;
}
.action-link[data-v-4e163834]:hover {
  text-decoration: underline;
}
.separate-line[data-v-4e163834] {
  height: 0;
  width: 100%;
  border-top: 1px #E9E9E9 solid;
  margin-bottom: 16px;
}
.white-fs-ground[data-v-4e163834] {
  padding: 24px;
  background: #fff;
  height: 100%;
}
.white-fs-ground .category-title[data-v-4e163834] {
  font-size: 16px;
  font-weight: 500;
  line-height: 16px;
  color: #333;
  margin-top: 56px;
  margin-bottom: 16px;
}
.white-fs-ground .category-title[data-v-4e163834]:first-child {
  margin-top: 16px;
}
.white-fs-ground .category-title[data-v-4e163834]:before {
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
.page-table-container[data-v-4e163834] {
  border: 1px solid #eee;
}
.form-body-center[data-v-4e163834] {
  margin: 0 auto;
}
.form-body-left[data-v-4e163834] {
  margin: 0;
}
.dialog-footer[data-v-4e163834],
.footer-submit[data-v-4e163834] {
  margin-top: 32px;
}
.dialog-footer .ssc-button[data-v-4e163834],
.footer-submit .ssc-button[data-v-4e163834] {
  margin-left: 16px;
}
.dialog-footer .ssc-button[data-v-4e163834]:first-child,
.footer-submit .ssc-button[data-v-4e163834]:first-child {
  margin-left: 0;
}
.text-center[data-v-4e163834] {
  text-align: center;
}
.s-form-textarea .ssc-textarea[data-v-4e163834],
.ssc-form-item .ssc-select[data-v-4e163834],
.ssc-form-item .ssc-input-size-medium[data-v-4e163834] {
  width: 320px;
}
.ssc-steps.is-horizontal[data-v-4e163834] {
  width: 60%;
  margin: 23px auto;
}
.action-wrap[data-v-4e163834] {
  display: flex;
  margin: 10px 0;
}
.action-wrap .actions[data-v-4e163834] {
  flex: 1;
}
.action-wrap .actions .ssc-button[data-v-4e163834] {
  margin-right: 16px;
}
.action-wrap .upload-route-log-info[data-v-4e163834] {
  align-self: center;
  text-align: right;
  flex: 1;
}
.action-wrap .upload-route-log-info label[data-v-4e163834] {
  margin-right: 8px;
}
.upload-log-table[data-v-4e163834] {
  margin: 10px 0;
}
.group-route-list-info[data-v-4e163834] {
  line-height: 40px;
}
.group-route-list-info label[data-v-4e163834] {
  margin-right: 10px;
}
.mass-upload-input-footer[data-v-4e163834] {
  margin-top: 32px;
}
.mass-upload-input-footer .ssc-button[data-v-4e163834] {
  margin-right: 10px;
}
.add-range-btn[data-v-4e163834] {
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
.add-range-btn[data-v-4e163834]:hover {
  background: #f6f6f6;
}
.range-wrap[data-v-4e163834] {
  padding: 16px;
}
.range-wrap .seq-tag[data-v-4e163834] {
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
.range-wrap .icon-del[data-v-4e163834] {
  line-height: 32px;
  width: 24px;
  height: 24px;
  cursor: pointer;
  color: #bbb;
}
.range-wrap .icon-del[data-v-4e163834]:hover {
  color: #888;
}
.bg-fafafa[data-v-4e163834] {
  background: #fafafa;
}
.ssc-step-main-title[data-v-4e163834] {
  line-height: 1.5;
}
.ssc-form-item-error-tip[data-v-4e163834] {
  white-space: nowrap;
}
.ssc-table-header .ssc-table-header-title[data-v-4e163834] {
  height: 100%;
}
.ssc-table-header .ssc-table-header-column-container[data-v-4e163834] {
  height: 100%;
}
.ssc-table-body .ssc-table-header-column-container .td-content[data-v-4e163834] {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.acribus-text-ellipsis[data-v-4e163834] {
  display: inline-block;
  width: 100%;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.station-tree-container .ssc-form-item-content[data-v-4e163834] {
  flex-direction: column;
  position: relative;
}
.station-tree-container .ssc-form-item-content .tree[data-v-4e163834] {
  min-width: 318px;
  display: block;
  margin-top: 20px;
}
.station-tree-container .ssc-form-item-content .tree.has-search-input[data-v-4e163834] {
  padding-top: 40px;
}
.station-tree-container .ssc-form-item-content .tree-input[data-v-4e163834] {
  position: absolute;
  left: 3%;
  top: 30px;
  z-index: 1;
  width: 94%;
  margin: 0 auto;
  color: #aeaeae;
}
.ssc-dropdown-menu[data-v-4e163834] {
  min-width: 176px;
  max-width: 320px;
  z-index: 2;
}
.ssc-dropdown-menu .active[data-v-4e163834] {
  color: #EE4D2D;
  font-weight: 500;
}
.detail-part-title[data-v-4e163834] {
  font-size: 18px;
  color: #333333;
  font-weight: 500;
  margin-bottom: 16px;
}
.detail-part-title.additional-info[data-v-4e163834] {
  margin-top: 56px;
}
.detail-part-title[data-v-4e163834]::before {
  content: '';
  width: 2px;
  height: 10px;
  background: #EE4D2D;
  display: inline-block;
  margin-right: 6px;
}
.page-wrapper[data-v-4e163834] {
  height: 100%;
}
.zone-container button:disabled:not(.btn-prev):not(.btn-next).ssc-btn-type-primary[data-v-4e163834] {
  color: #FFF !important;
  background: #EE4D2D !important;
  opacity: 0.5;
}
.pagination-left-total[data-v-4e163834] {
  display: flex;
  flex: 1;
}
.common-status[data-v-4e163834] {
  line-height: 12px;
  font-weight: 500;
  padding: 3px 4px;
  border-radius: 2px;
  display: inline-block;
  white-space: nowrap;
}
.common-status.status-success[data-v-4e163834] {
  background: #ECFFF1;
  color: #1CC461;
}
.common-status.status-disabled[data-v-4e163834] {
  color: #646B76;
  background: #F5F6F9;
}
.common-status.status-info[data-v-4e163834] {
  color: #3274F7;
  background: #F0F7FF;
}
.common-status.status-danger[data-v-4e163834] {
  color: #F32345;
  background: #FFF0F0;
}
.common-status.status-warning[data-v-4e163834] {
  background: #FFF8DB;
  color: #FFB014;
}
.common-divide[data-v-4e163834] {
  height: 8px;
  background: #F5F6F9;
  margin: 0 -24px;
}
.ssc-scan-toast[data-v-4e163834] {
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
.ssc-scan-toast.ssc-scan-toast-success[data-v-4e163834] {
  animation-duration: 4.4s;
  animation-name: scanSuccessToast-4e163834;
  background: #1CC461;
}
.ssc-scan-toast.ssc-scan-toast-fail[data-v-4e163834] {
  background: #F32345;
  animation-duration: 8.4s;
  animation-name: scanFailToast-4e163834;
}
.ssc-scan-toast.ssc-scan-toast-notice[data-v-4e163834] {
  background: #FFA620;
  animation-duration: 6.4s;
  animation-name: scanFailToast-4e163834;
}
.ssc-scan-toast .message-panel[data-v-4e163834] {
  display: flex;
  width: 100%;
  align-items: center;
}
.ssc-scan-toast .message-panel .icon[data-v-4e163834] {
  margin-right: 18px;
  width: 28px;
  height: 28px;
  flex-shrink: 0;
}
.ssc-scan-toast .message-panel .text[data-v-4e163834] {
  display: inline-block;
}
@keyframes scanSuccessToast-4e163834 {
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
@keyframes scanFailToast-4e163834 {
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
.table-pagination[data-v-4e163834] {
  height: 56px;
  border: 1px solid #ECF0F4;
  border-top: 0;
  justify-content: flex-end;
  padding-right: 16px;
}
.journey-type[data-v-4e163834] {
  display: flex;
  align-items: center;
}
.journey-type .journey-type-dot[data-v-4e163834] {
  width: 6px;
  height: 6px;
  border-radius: 50%;
  display: inline-block;
  margin-right: 8px;
}
.pagination-sticky-bottom[data-v-4e163834] {
  background: #fff;
  position: sticky;
  bottom: 16px;
}
.pagination-sticky-bottom[data-v-4e163834]:after {
  content: ' ';
  background: #fff;
  width: 100%;
  height: 16px;
  position: absolute;
}
.pagination-sticky-bottom[data-v-4e163834] .ssc-pagination {
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
.pagination-sticky-bottom[data-v-4e163834] .ssc-pagination .total-container {
  flex: 1;
  margin-left: 15px;
  margin-right: 12px;
}
.sp-card-log-list[data-v-4e163834] {
  padding: 16px 24px;
  background: #fff;
  min-height: 100%;
}
.ssc-table-panel .ssc-form-item .ssc-form-item-content textarea[data-v-4e163834],
.pro-filter .ssc-form-item .ssc-form-item-content textarea[data-v-4e163834] {
  border: transparent;
}
.message-red-text[data-v-4e163834] {
  color: #EE4D2D;
  font-weight: 700;
}
`,""]),g.exports=h},RGGF:(g,h,o)=>{var d=o("JPst");h=d(!1),h.push([g.id,`.banner[data-v-1d189453] {
  overflow: hidden;
  background: #F6F6F6;
  padding: 12px 8px 0px 8px;
  margin-bottom: 8px;
}
.banner .banner-item[data-v-1d189453] {
  margin-bottom: 12px;
}
.banner .banner-item-label[data-v-1d189453] {
  margin-right: 8px;
  color: #333333;
}
.banner .banner-item-content[data-v-1d189453] {
  font-weight: bold;
}
.warning[data-v-1d189453] .ssc-alert-content .ssc-alert-description {
  margin-top: 0px !important;
}
.input-tips[data-v-1d189453] {
  margin-top: 4px;
  color: #999999;
  font-size: 12px;
}
.dimension-multipler[data-v-1d189453] {
  font-size: 14px;
  color: #999999;
  margin: 0 8px;
}
.error-border[data-v-1d189453] {
  border: 1px solid #ff4742 !important;
}
ul[data-v-1d189453] {
  padding: 0;
  margin: 0;
  list-style: none;
}
.button-base[data-v-1d189453] {
  padding: 9px 20px;
  font-size: 14px;
  color: #FFFFFF;
}
.spx-button[data-v-1d189453] {
  padding: 9px 20px;
  font-size: 14px;
  color: #FFFFFF;
  border-color: #FFFFFF;
  color: #555555;
}
.spx-button[data-v-1d189453]:hover {
  background-color: #FFFFFF;
}
.spx-button-primary[data-v-1d189453] {
  padding: 9px 20px;
  font-size: 14px;
  color: #FFFFFF;
  background-color: #EE4D2D;
  border-color: #EE4D2D;
}
.ssc-message[data-v-1d189453] {
  top: 20px !important;
}
.sp-card > .actions[data-v-1d189453] {
  margin-bottom: 10px;
  display: flex;
  flex-wrap: wrap;
}
.sp-card > .actions .right[data-v-1d189453] {
  flex: 1;
  text-align: right;
  height: 40px;
}
table th[data-v-1d189453] {
  color: rgba(0, 0, 0, 0.85);
  border-color: #EEEEEE;
  font-size: 14px;
  font-weight: 500;
}
.spx-editor .ssc-tag[data-v-1d189453] {
  font-size: 12px;
  margin: 0px;
  padding: 0;
}
.spx-editor .ssc-tag .left-padding-span[data-v-1d189453] {
  width: 0;
  margin: 0 0 0 8px;
}
.spx-editor .ssc-tag .right-padding-span[data-v-1d189453] {
  width: 0;
  margin: 0 8px 0 0;
}
.spx-editor .tag-editor-span[data-v-1d189453] {
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
.spx-editor .tag-editor-span .tag-editor-span-space[data-v-1d189453] {
  width: 8px;
  height: 15px;
  display: inline-block;
  line-height: 22px;
}
.ssc-tabs-type-pane-card .ssc-tabs-pane[data-v-1d189453] {
  background: #FAFAFA;
}
.check-tree[data-v-1d189453] {
  margin-left: 80px;
}
.avatar-uploader-icon[data-v-1d189453] {
  font-size: 28px;
  color: #8c939d;
  width: 178px;
  height: 178px;
  line-height: 178px;
  text-align: center;
}
.avatar-uploader-icon-small[data-v-1d189453] {
  font-size: 14px !important;
  color: #8c939d;
  width: 56px !important;
  height: 56px !important;
  line-height: 56px !important;
  text-align: center;
}
.avatar-uploader-icon-middle[data-v-1d189453] {
  font-size: 14px !important;
  color: #8c939d;
  width: 94px !important;
  height: 94px !important;
  line-height: 94px !important;
  text-align: center;
}
.avatar[data-v-1d189453] {
  width: 178px;
  height: 178px;
  display: block;
}
.avatar-small[data-v-1d189453] {
  width: 56px;
  height: 56px;
  display: block;
}
.avatar-middle[data-v-1d189453] {
  width: 94px;
  height: 94px;
  display: block;
}
.acribus-sp-tabs[data-v-1d189453] {
  padding: 16px 16px 0px;
  border-radius: 6px;
  margin-bottom: -30px;
  background-color: #fff;
}
span.red[data-v-1d189453] {
  color: #F56C6C;
}
span.green[data-v-1d189453] {
  color: #67C23A;
}
.sp-hooks[data-v-1d189453] {
  overflow: hidden;
}
.text-link[data-v-1d189453] {
  color: #409eff;
  cursor: pointer;
}
.text-warning[data-v-1d189453] {
  color: #e80808;
}
.help-text[data-v-1d189453] {
  cursor: help;
}
.driver-performance-flag-A[data-v-1d189453] {
  color: #55CC77;
}
.driver-performance-flag-B[data-v-1d189453] {
  color: #999;
}
.driver-performance-flag-C[data-v-1d189453] {
  color: #FF4742;
}
/* [check-in rule] Google map autosuggest result container */
.pac-container[data-v-1d189453] {
  z-index: 100000;
}
.action-link[data-v-1d189453] {
  color: #2769f0;
  cursor: pointer;
  display: inline-block;
  margin-left: 6px;
}
.action-link[data-v-1d189453]:first-child {
  margin-left: 0;
}
.action-link[data-v-1d189453]:hover {
  text-decoration: underline;
}
.separate-line[data-v-1d189453] {
  height: 0;
  width: 100%;
  border-top: 1px #E9E9E9 solid;
  margin-bottom: 16px;
}
.white-fs-ground[data-v-1d189453] {
  padding: 24px;
  background: #fff;
  height: 100%;
}
.white-fs-ground .category-title[data-v-1d189453] {
  font-size: 16px;
  font-weight: 500;
  line-height: 16px;
  color: #333;
  margin-top: 56px;
  margin-bottom: 16px;
}
.white-fs-ground .category-title[data-v-1d189453]:first-child {
  margin-top: 16px;
}
.white-fs-ground .category-title[data-v-1d189453]:before {
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
.page-table-container[data-v-1d189453] {
  border: 1px solid #eee;
}
.form-body-center[data-v-1d189453] {
  margin: 0 auto;
}
.form-body-left[data-v-1d189453] {
  margin: 0;
}
.dialog-footer[data-v-1d189453],
.footer-submit[data-v-1d189453] {
  margin-top: 32px;
}
.dialog-footer .ssc-button[data-v-1d189453],
.footer-submit .ssc-button[data-v-1d189453] {
  margin-left: 16px;
}
.dialog-footer .ssc-button[data-v-1d189453]:first-child,
.footer-submit .ssc-button[data-v-1d189453]:first-child {
  margin-left: 0;
}
.text-center[data-v-1d189453] {
  text-align: center;
}
.s-form-textarea .ssc-textarea[data-v-1d189453],
.ssc-form-item .ssc-select[data-v-1d189453],
.ssc-form-item .ssc-input-size-medium[data-v-1d189453] {
  width: 320px;
}
.ssc-steps.is-horizontal[data-v-1d189453] {
  width: 60%;
  margin: 23px auto;
}
.action-wrap[data-v-1d189453] {
  display: flex;
  margin: 10px 0;
}
.action-wrap .actions[data-v-1d189453] {
  flex: 1;
}
.action-wrap .actions .ssc-button[data-v-1d189453] {
  margin-right: 16px;
}
.action-wrap .upload-route-log-info[data-v-1d189453] {
  align-self: center;
  text-align: right;
  flex: 1;
}
.action-wrap .upload-route-log-info label[data-v-1d189453] {
  margin-right: 8px;
}
.upload-log-table[data-v-1d189453] {
  margin: 10px 0;
}
.group-route-list-info[data-v-1d189453] {
  line-height: 40px;
}
.group-route-list-info label[data-v-1d189453] {
  margin-right: 10px;
}
.mass-upload-input-footer[data-v-1d189453] {
  margin-top: 32px;
}
.mass-upload-input-footer .ssc-button[data-v-1d189453] {
  margin-right: 10px;
}
.add-range-btn[data-v-1d189453] {
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
.add-range-btn[data-v-1d189453]:hover {
  background: #f6f6f6;
}
.range-wrap[data-v-1d189453] {
  padding: 16px;
}
.range-wrap .seq-tag[data-v-1d189453] {
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
.range-wrap .icon-del[data-v-1d189453] {
  line-height: 32px;
  width: 24px;
  height: 24px;
  cursor: pointer;
  color: #bbb;
}
.range-wrap .icon-del[data-v-1d189453]:hover {
  color: #888;
}
.bg-fafafa[data-v-1d189453] {
  background: #fafafa;
}
.ssc-step-main-title[data-v-1d189453] {
  line-height: 1.5;
}
.ssc-form-item-error-tip[data-v-1d189453] {
  white-space: nowrap;
}
.ssc-table-header .ssc-table-header-title[data-v-1d189453] {
  height: 100%;
}
.ssc-table-header .ssc-table-header-column-container[data-v-1d189453] {
  height: 100%;
}
.ssc-table-body .ssc-table-header-column-container .td-content[data-v-1d189453] {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.acribus-text-ellipsis[data-v-1d189453] {
  display: inline-block;
  width: 100%;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.station-tree-container .ssc-form-item-content[data-v-1d189453] {
  flex-direction: column;
  position: relative;
}
.station-tree-container .ssc-form-item-content .tree[data-v-1d189453] {
  min-width: 318px;
  display: block;
  margin-top: 20px;
}
.station-tree-container .ssc-form-item-content .tree.has-search-input[data-v-1d189453] {
  padding-top: 40px;
}
.station-tree-container .ssc-form-item-content .tree-input[data-v-1d189453] {
  position: absolute;
  left: 3%;
  top: 30px;
  z-index: 1;
  width: 94%;
  margin: 0 auto;
  color: #aeaeae;
}
.ssc-dropdown-menu[data-v-1d189453] {
  min-width: 176px;
  max-width: 320px;
  z-index: 2;
}
.ssc-dropdown-menu .active[data-v-1d189453] {
  color: #EE4D2D;
  font-weight: 500;
}
.detail-part-title[data-v-1d189453] {
  font-size: 18px;
  color: #333333;
  font-weight: 500;
  margin-bottom: 16px;
}
.detail-part-title.additional-info[data-v-1d189453] {
  margin-top: 56px;
}
.detail-part-title[data-v-1d189453]::before {
  content: '';
  width: 2px;
  height: 10px;
  background: #EE4D2D;
  display: inline-block;
  margin-right: 6px;
}
.page-wrapper[data-v-1d189453] {
  height: 100%;
}
.zone-container button:disabled:not(.btn-prev):not(.btn-next).ssc-btn-type-primary[data-v-1d189453] {
  color: #FFF !important;
  background: #EE4D2D !important;
  opacity: 0.5;
}
.pagination-left-total[data-v-1d189453] {
  display: flex;
  flex: 1;
}
.common-status[data-v-1d189453] {
  line-height: 12px;
  font-weight: 500;
  padding: 3px 4px;
  border-radius: 2px;
  display: inline-block;
  white-space: nowrap;
}
.common-status.status-success[data-v-1d189453] {
  background: #ECFFF1;
  color: #1CC461;
}
.common-status.status-disabled[data-v-1d189453] {
  color: #646B76;
  background: #F5F6F9;
}
.common-status.status-info[data-v-1d189453] {
  color: #3274F7;
  background: #F0F7FF;
}
.common-status.status-danger[data-v-1d189453] {
  color: #F32345;
  background: #FFF0F0;
}
.common-status.status-warning[data-v-1d189453] {
  background: #FFF8DB;
  color: #FFB014;
}
.common-divide[data-v-1d189453] {
  height: 8px;
  background: #F5F6F9;
  margin: 0 -24px;
}
.ssc-scan-toast[data-v-1d189453] {
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
.ssc-scan-toast.ssc-scan-toast-success[data-v-1d189453] {
  animation-duration: 4.4s;
  animation-name: scanSuccessToast-1d189453;
  background: #1CC461;
}
.ssc-scan-toast.ssc-scan-toast-fail[data-v-1d189453] {
  background: #F32345;
  animation-duration: 8.4s;
  animation-name: scanFailToast-1d189453;
}
.ssc-scan-toast.ssc-scan-toast-notice[data-v-1d189453] {
  background: #FFA620;
  animation-duration: 6.4s;
  animation-name: scanFailToast-1d189453;
}
.ssc-scan-toast .message-panel[data-v-1d189453] {
  display: flex;
  width: 100%;
  align-items: center;
}
.ssc-scan-toast .message-panel .icon[data-v-1d189453] {
  margin-right: 18px;
  width: 28px;
  height: 28px;
  flex-shrink: 0;
}
.ssc-scan-toast .message-panel .text[data-v-1d189453] {
  display: inline-block;
}
@keyframes scanSuccessToast-1d189453 {
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
@keyframes scanFailToast-1d189453 {
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
.table-pagination[data-v-1d189453] {
  height: 56px;
  border: 1px solid #ECF0F4;
  border-top: 0;
  justify-content: flex-end;
  padding-right: 16px;
}
.journey-type[data-v-1d189453] {
  display: flex;
  align-items: center;
}
.journey-type .journey-type-dot[data-v-1d189453] {
  width: 6px;
  height: 6px;
  border-radius: 50%;
  display: inline-block;
  margin-right: 8px;
}
.pagination-sticky-bottom[data-v-1d189453] {
  background: #fff;
  position: sticky;
  bottom: 16px;
}
.pagination-sticky-bottom[data-v-1d189453]:after {
  content: ' ';
  background: #fff;
  width: 100%;
  height: 16px;
  position: absolute;
}
.pagination-sticky-bottom[data-v-1d189453] .ssc-pagination {
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
.pagination-sticky-bottom[data-v-1d189453] .ssc-pagination .total-container {
  flex: 1;
  margin-left: 15px;
  margin-right: 12px;
}
.sp-card-log-list[data-v-1d189453] {
  padding: 16px 24px;
  background: #fff;
  min-height: 100%;
}
.ssc-table-panel .ssc-form-item .ssc-form-item-content textarea[data-v-1d189453],
.pro-filter .ssc-form-item .ssc-form-item-content textarea[data-v-1d189453] {
  border: transparent;
}
.message-red-text[data-v-1d189453] {
  color: #EE4D2D;
  font-weight: 700;
}
`,""]),g.exports=h},qqxo:(g,h,o)=>{"use strict";o.r(h),o.d(h,{default:()=>ln});var d=function(){var n=this,e=n._self._c;return e("section",{directives:[{name:"loading",rawName:"v-loading",value:n.loading.page,expression:"loading.page"}],staticClass:"drop-off-container"},[e("section",{staticClass:"task-info"},[e("section",{staticClass:"task-info-header"},[e("span",{staticClass:"task-info-task-id"},[e("span",[n._v(n._s(n.$gt("Receive Task ID:"))+n._s(n.taskInfo.task_id)+`
        `)]),n._v(" "),e("section",{class:{"task-info-task-status":!0,"task-info-task-created":n.taskInfo.task_status===n.taskStatus.Created,"task-info-task-doing":n.taskInfo.task_status===n.taskStatus.Doing,"task-info-task-done":n.taskInfo.task_status===n.taskStatus.Done}})]),n._v(" "),n.shouldShowTaskOperationButton?e("s-button",{staticClass:"task-info-task-action",attrs:{disabled:n.taskInfo.task_status===n.taskStatus.Created,type:"primary"},on:{click:n.handleReceiveTaskOperation}},[n._v(`
        `+n._s(n.taskOperationButtonText)+`
      `)]):n._e()],1),n._v(" "),e("section",{staticClass:"task-info-content"},[e("section",{staticClass:"task-info-content-base"},[e("section",{staticClass:"task-info-content-base-item",staticStyle:{"margin-bottom":"16px"}},[e("span",{staticClass:"task-info-content-base-item-label"},[n._v(n._s(n.$gt("Sender Name"))),e("s-popover",{attrs:{content:n.$gt("Seller Name / Sender Name")}},[e("s-icon-help-outline",{staticClass:"task-info-icon",attrs:{slot:"reference"},slot:"reference"})],1),n._v(`
            :
          `)],1),n._v(" "),e("s-tooltip",{staticClass:"task-info-content-base-item-content",attrs:{placement:"top",content:n.taskInfo.sender_name_list.join(", ")}},[e("span",[n._v(`
              `+n._s(n.taskInfo.sender_name_list.join(", ")||"\u2013")+`
            `)])])],1),n._v(" "),e("section",{staticClass:"task-info-content-base-item",staticStyle:{"margin-bottom":"16px"}},[e("span",{staticClass:"task-info-content-base-item-label"},[n._v(n._s(n.$gt("Sender ID"))),e("s-popover",{attrs:{content:n.$gt("Shope ID / Address ID")}},[e("s-icon-help-outline",{staticClass:"task-info-icon",attrs:{slot:"reference"},slot:"reference"})],1),n._v(`
            :
          `)],1),n._v(" "),e("s-tooltip",{staticClass:"task-info-content-base-item-content",attrs:{placement:"top",content:n.taskInfo.sender_id_list.join(", ")}},[e("span",[n._v(`
              `+n._s(n.taskInfo.sender_id_list.join(", ")||"\u2013")+`
            `)])])],1),n._v(" "),e("section",{staticClass:"task-info-content-base-item"},[e("span",{staticClass:"task-info-content-base-item-label"},[n._v(n._s(n.$gt("Operator:")))]),n._v(`
          `+n._s(n.taskInfo.operator)+`
        `)])]),n._v(" "),e("section",{staticClass:"task-info-amount"},[e("section",{staticClass:"task-info-amount-item",staticStyle:{"margin-right":"24px"}},[e("section",{staticClass:"task-info-amount-item-label"},[n._v(n._s(n.$gt("Total Order")))]),n._v(" "),e("section",{staticClass:"task-info-amount-item-content"},[n._v(`
            `+n._s(n.taskInfo.order_quantity||"\u2013")+`
          `)])]),n._v(" "),e("section",{staticClass:"task-info-amount-item",staticStyle:{"margin-right":"24px"}},[e("section",{staticClass:"task-info-amount-item-label"},[n._v(n._s(n.$gt("Order Payable")))]),n._v(" "),e("section",{staticClass:"task-info-amount-item-content"},[n._v(`
            `+n._s(n.taskInfo.payable_count||"\u2013")+`
          `)])]),n._v(" "),e("section",{staticClass:"task-info-amount-item"},[e("section",{staticClass:"task-info-amount-item-label"},[n._v(n._s(n.$gt("Total Collection")))]),n._v(" "),e("section",{staticClass:"task-info-amount-item-content"},[n._v(`
            `+n._s(Number(n.taskInfo.payment_info.collection_amount)===0?"\u2013":n.taskInfo.payment_info.collection_amount)+`
          `)])])])])]),n._v(" "),n.showAddOrderInput?e("section",{staticClass:"order-input"},[e("span",[n._v(n._s(n.$gt("SPX Tracking Number")))]),n._v(" "),e("s-input",{ref:"orderInput",staticStyle:{"margin-left":"16px",width:"320px"},on:{keydown:function(a){return!a.type.indexOf("key")&&n._k(a.keyCode,"enter",13,a.key,"Enter")?null:n.addOrder.apply(null,arguments)}},model:{value:n.orderId,callback:function(a){n.orderId=a},expression:"orderId"}})],1):n._e(),n._v(" "),e("section",{staticClass:"task-order-list"},[n.shouldShowTabs?e("s-tabs",{attrs:{type:"line"},model:{value:n.selectedTab,callback:function(a){n.selectedTab=a},expression:"selectedTab"}},[e("s-tab-pane",{attrs:{name:"Order List",label:"Order List"}}),n._v(" "),e("s-tab-pane",{attrs:{name:"Payment Detail",label:"Payment Detail"}})],1):n._e(),n._v(" "),n.selectedTab==="Order List"?e("s-table",{directives:[{name:"loading",rawName:"v-loading",value:n.loading.orderList,expression:"loading.orderList"}],attrs:{data:n.orderList,"show-overflow-tooltip":"","sticky-top":0}},[e("s-table-column",{attrs:{label:n.$gt("Sender ID"),"header-tips":"Shop ID / Address ID",width:"105px",prop:"sender_id"}}),n._v(" "),e("s-table-column",{attrs:{label:n.$gt("SPX Tracking Number"),width:"124px",prop:"shipment_id"}}),n._v(" "),e("s-table-column",{attrs:{label:n.$gt("4PL Tracking Number"),width:"124px",prop:"third_party_tracking_num"}}),n._v(" "),e("s-table-column",{attrs:{label:n.$gt("Order Account"),width:"70px",prop:"orderAccountRenderContent","show-overflow-tooltip":!0}}),n._v(" "),e("s-table-column",{attrs:{label:n.$gt("Weight (kg)"),width:"60px",prop:"weight"}}),n._v(" "),e("s-table-column",{attrs:{label:n.$gt("Dimension (cm)"),width:"84px",prop:"dimensionRenderContent","show-overflow-tooltip":!0}}),n._v(" "),e("s-table-column",{attrs:{label:n.$gt("Chargeable Weight (kg)"),width:"92px",prop:"chargeable_weight"}}),n._v(" "),e("s-table-column",{attrs:{label:"Basic Shipping Fee("+n.CURRENCY_SYMBOL+")",width:"80px",prop:"forward_basic_shipping_fee"}}),n._v(" "),e("s-table-column",{attrs:{label:"COD Service Fee ("+n.CURRENCY_SYMBOL+")",width:"96px",prop:"forward_cod_service_fee"}}),n._v(" "),e("s-table-column",{attrs:{label:"Insurance Fee ("+n.CURRENCY_SYMBOL+")",width:"96px",prop:"forward_insurance_service_fee"}}),n._v(" "),e("s-table-column",{attrs:{label:"ASF ("+n.CURRENCY_SYMBOL+")",width:"102px",prop:"fee_amount"}}),n._v(" "),e("s-table-column",{attrs:{label:n.$gt("Payment Role"),width:"76px",prop:"forward_payment_role"},scopedSlots:n._u([{key:"default",fn:function(a){return[n._v(`
          `+n._s(a.row.forward_payment_role===n.paymentRole.Sender&&a.row.forward_payment_type===n.paymentType.Settlement?n.paymentRoleMap[a.row.forward_payment_role]+"(Deducted)":n.paymentRoleMap[a.row.forward_payment_role])+`
        `)]}}],null,!1,2605343600)}),n._v(" "),e("s-table-column",{attrs:{label:n.$gt("Original FM Method"),width:"96px"},scopedSlots:n._u([{key:"default",fn:function(a){return[n._v(`
          `+n._s(n.originFMTypeMap[a.row.origin_fm_type])+`
        `)]}}],null,!1,2541086439)}),n._v(" "),e("s-table-column",{attrs:{label:n.$gt("Receive Time"),width:"126px"},scopedSlots:n._u([{key:"default",fn:function(a){return[n._v(`
          `+n._s(n.timestampToDateString(a.row.inbound_time))+`
        `)]}}],null,!1,1605622007)}),n._v(" "),e("s-table-column",{attrs:{label:n.$gt("Action"),fixed:"right",width:"172px"},scopedSlots:n._u([{key:"default",fn:function(a){return[e("section",{staticClass:"action-container"},[n.isOrderEditable(a.row)?e("span",{on:{click:function(f){return n.editMeasurementInfo(a.row)}}},[n._v(n._s(n.$gt("Edit")))]):n._e(),n._v(" "),n.showPrintButton?e("span",{on:{click:function(f){return n.printOrder(a.row.shipment_id)}}},[n._v(n._s(n.$gt("Print")))]):n._e(),n._v(" "),n.showRemoveButton?e("span",{on:{click:function(f){return n.deleteOrder(a.row.shipment_id)}}},[n._v(n._s(n.$gt("Remove")))]):n._e()])]}}],null,!1,326131721)})],1):n._e(),n._v(" "),n.showPagination?e("s-pagination",{staticClass:"dropoff-pagination",attrs:{"show-total":"","current-page":n.currentPage,"page-size":24,"page-sizes":[24],total:n.total},on:{"update:currentPage":function(a){n.currentPage=a},"update:current-page":function(a){n.currentPage=a},"current-change":n.handlePageChange}}):n._e(),n._v(" "),n.selectedTab==="Payment Detail"?e("section",{staticClass:"payment-detail"},[e("section",{staticClass:"payment-info-item"},[e("span",{staticClass:"payment-info-item-label"},[n._v(n._s(n.$gt("Transaction ID:")))]),n._v(" "),e("span",{staticClass:"payment-info-item-content"},[n._v(`
          `+n._s(n.taskInfo.payment_info.transaction_id)+`
        `)])]),n._v(" "),e("section",{staticClass:"payment-info-item"},[e("span",{staticClass:"payment-info-item-label"},[n._v(n._s(n.$gt("Payment Method:")))]),n._v(" "),e("span",{staticClass:"payment-info-item-content"},[n._v(`
          `+n._s(n.collectMethodLabel[n.taskInfo.payment_info.collect_method])+`
        `)])]),n._v(" "),n.taskInfo.payment_info.collect_method===n.collectMethod.cash?e("section",{staticClass:"payment-info-item"},[e("span",{staticClass:"payment-info-item-label"},[n._v(`
          `+n._s("Cash Received("+n.CURRENCY_SYMBOL+"): ")+`
        `)]),n._v(" "),e("span",{staticClass:"payment-info-item-content"},[n._v(`
          `+n._s(n.taskInfo.payment_info.cash_received)+`
        `)])]):n._e(),n._v(" "),n.taskInfo.payment_info.collect_method===n.collectMethod.cash?e("section",{staticClass:"payment-info-item"},[e("span",{staticClass:"payment-info-item-label"},[n._v(`
          `+n._s("Change("+n.CURRENCY_SYMBOL+"):")+`
        `)]),n._v(" "),e("span",{staticClass:"payment-info-item-content"},[n._v(`
          `+n._s((n.taskInfo.payment_info.cash_received-n.taskInfo.payment_info.collection_amount).toFixed(2))+`
        `)])]):n._e(),n._v(" "),n.taskInfo.payment_info.collect_method===n.collectMethod.mobileBanking?e("section",{staticClass:"payment-info-item"},[e("span",{staticClass:"payment-info-item-label"},[n._v(n._s(n.$gt("Reference Number:")))]),n._v(" "),e("span",{staticClass:"payment-info-item-content"},[n._v(`
          `+n._s(n.taskInfo.payment_info.reference_number)+`
        `)])]):n._e(),n._v(" "),n.taskInfo.payment_info.collect_method===n.collectMethod.mobileBanking?e("section",{staticClass:"payment-info-item"},[e("span",{staticClass:"payment-info-item-label"},[n._v(n._s(n.$gt("Proof of Payment")))]),n._v(" "),e("span",{staticClass:"payment-info-item-content"},[e("s-upload",{directives:[{name:"loading",rawName:"v-loading",value:n.loading.upload,expression:"loading.upload"}],class:{"show-upload-icon":n.canUpdateProofImage,"image-upload":!0},attrs:{"list-type":"picture-card","before-upload":n.beforeUpload,"file-list":n.fileList,"with-credentials":!0,action:n.uploadUrl,limit:3,placement:"right","auto-upload":"","show-file-list":"","on-success":n.onFileUploadSuccess,"before-remove":n.beforeFileRemoved,"on-remove":n.onFileRemoved,tip:"You can upload maximum 3 files in jpg, png, jpeg format."}},[e("s-icon-add",{staticClass:"upload-icon-add"})],1)],1)]):n._e()]):n._e()],1),n._v(" "),e("measurement-dialog",{key:"addOrderMeasurement",attrs:{visible:n.visible.measurement,onCancel:n.handleMeasurementDialogCancel,onConfirm:n.handleMeasurementDialogConfirm,orderInfo:n.measurementDialogOrderInfo}}),n._v(" "),e("measurement-dialog",{key:"editOrderMeasurement",attrs:{visible:n.visible.editMeasurement,onCancel:n.handleEditMeasurementDialogCancel,onConfirm:n.handleEditMeasurementDialogConfirm,orderInfo:n.editMeasurementDialogOrderInfo}}),n._v(" "),e("collect-payment-dialog",{attrs:{visible:n.visible.collectPayment,paymentInfo:n.paymentInfo,onCancel:n.handleCollectPaymentDialogCancel,onConfirm:n.handleCollectPaymentDialogConfirm}})],1)},C=[],k=o("m1cH"),A=o("14Xm"),s=o.n(A),p=o("D3Ub"),T=o("QbLZ"),b=o("brkv"),v=o("dQCL"),F=o("eCTY"),x=o("EA14"),z=o("Nc95"),E=o("QsnJ"),L=o("GOkr"),B=o("HDM9"),R=o("pqmQ"),P=o("SCgk"),Z=o("4Jaa"),j=o("vbzK"),Y=function(){var n=this,e=n._self._c;return e("s-dialog",{attrs:{title:n.$gt("Collect Payment"),visible:n.visible,size:"medium","confirm-button-text":"Complete","show-default-footer":"","handle-confirm":n.handleConfirm,"handle-cancel":n.handleCancel,"close-on-click-modal":!1},on:{"update:visible":function(a){n.visible=a}}},[[e("section",{staticClass:"total-collection"},[e("section",{staticClass:"total-collection-label"},[n._v(`
        `+n._s("Total Collection ("+n.CURRENCY_SYMBOL+")")+`
      `)]),n._v(" "),e("section",{staticClass:"total-collection-content"},[n._v(`
        `+n._s(n.paymentInfo.total_amount.toFixed(2))+`
      `)])]),n._v(" "),e("s-form",{ref:"form",attrs:{"label-position":"top",model:n.paymentInfo,rules:n.rules}},[e("s-form-item",{attrs:{label:n.$gt("Payment Method"),required:""}},[e("s-radio-group",{model:{value:n.paymentInfo.collect_method,callback:function(a){n.$set(n.paymentInfo,"collect_method",a)},expression:"paymentInfo.collect_method"}},[e("s-radio",{attrs:{label:n.collectMethod.cash}},[n._v(n._s(n.$gt("Cash")))]),n._v(" "),n.HAS_MOBILE_BANKING?e("s-radio",{attrs:{label:n.collectMethod.mobileBanking}},[n._v(n._s(n.$gt("Mobile Banking")))]):n._e()],1)],1),n._v(" "),n.paymentInfo.collect_method===n.collectMethod.cash?e("section",[e("s-form-item",{key:"cash-received",attrs:{label:"Cash Received ("+n.CURRENCY_SYMBOL+")",required:"",prop:"cash_received"}},[e("s-input-number",{attrs:{placeholder:n.$gt("Please Input"),width:"452px",controls:!1,precision:2},model:{value:n.paymentInfo.cash_received,callback:function(a){n.$set(n.paymentInfo,"cash_received",a)},expression:"paymentInfo.cash_received"}})],1),n._v(" "),e("s-form-item",{key:"cash-change",attrs:{label:"Change ("+n.CURRENCY_SYMBOL+")"}},[e("s-input",{attrs:{value:n.cashChange,placeholder:" ",width:"452px",disabled:""}})],1)],1):n._e(),n._v(" "),n.paymentInfo.collect_method===n.collectMethod.mobileBanking?e("section",[e("s-form-item",{key:"reference-number",attrs:{label:n.$gt("Reference Number"),prop:"reference_number",required:""}},[e("s-input",{attrs:{placeholder:n.$gt("Please Input"),width:"452px",maxlength:16,"show-limit":""},model:{value:n.paymentInfo.reference_number,callback:function(a){n.$set(n.paymentInfo,"reference_number",a)},expression:"paymentInfo.reference_number"}})],1),n._v(" "),e("s-form-item",{attrs:{label:n.$gt("Proof of Payment")}},[e("s-upload",{staticClass:"image-upload",attrs:{"list-type":"picture-card","with-credentials":!0,action:n.uploadUrl,limit:3,"file-list":n.fileList,placement:"right","auto-upload":"","on-success":n.onFileUploadSuccess,"on-remove":n.onFileRemoved,"before-upload":n.beforeUpload,tip:"You can upload maximum 3 files in jpg, png, jpeg format."}},[e("s-icon-add",{staticClass:"upload-icon-add"})],1)],1)],1):n._e()],1)]],2)},N=[],U={cash:1,mobileBanking:2},G={1:"Cash",2:"Mobile Banking"},Q={collected:1,notCollected:0},H=["jpg","png","jpeg"],J=v.Message.service;const X={props:{paymentInfo:{type:Object,required:!0},onConfirm:{type:Function,required:!0},onCancel:{type:Function,required:!0},visible:{type:Boolean,required:!0}},data:function(){return{CURRENCY_SYMBOL:L.oq,collectMethod:U,rules:{cash_received:[E.sO.REQUIRED("Cash Received"),{validator:this.cashReceivedValidator,trigger:"blur"}],reference_number:[E.sO.REQUIRED("Reference Number")]},HAS_MOBILE_BANKING:L.mM}},computed:{uploadUrl:function(){return x.v+"/api/in-station/uni_receive/payment_proof/upload"},cashChange:function(){return!this.paymentInfo.cash_received||this.paymentInfo.total_amount>this.paymentInfo.cash_received?"":String((Number(this.paymentInfo.cash_received)-Number(this.paymentInfo.total_amount)).toFixed(2))},fileList:function(){return(this.paymentInfo.proof_image_urls||[]).map(function(n){return{name:n,url:""+x.v+n}})}},methods:{cashReceivedValidator:function(n,e,r){e<Number(this.paymentInfo.total_amount)&&r("cash received should greater equal than total collection"),r()},beforeUpload:function(n){return!n.type.includes("jpg")&&!n.type.includes("png")&&!n.type.includes("jpeg")?(J.error("wrong format."),!1):!0},onFileRemoved:function(n,e){this.paymentInfo.proof_image_urls=e.map(function(r){return r.response&&r.response.data&&r.response.data.url?r.response.data.url:r.name})},onFileUploadSuccess:function(n){n.retcode===0&&(this.paymentInfo.proof_image_urls||(this.paymentInfo.proof_image_urls=[]),this.paymentInfo.proof_image_urls.push(n.data.url))},handleConfirm:function(){var i=(0,p.Z)(s().mark(function e(){var r;return s().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,this.$refs.form.validate();case 2:r={},this.paymentInfo.collect_method===U.cash?(r.collect_method=U.cash,r.cash_received=String(this.paymentInfo.cash_received),r.total_amount=String(this.paymentInfo.total_amount)):this.paymentInfo.collect_method===U.mobileBanking&&(r.collect_method=U.mobileBanking,r.reference_number=this.paymentInfo.reference_number,r.proof_image_urls=this.paymentInfo.proof_image_urls,r.total_amount=String(this.paymentInfo.total_amount)),this.onConfirm(r);case 5:case"end":return t.stop()}},e,this)}));function n(){return i.apply(this,arguments)}return n}(),handleCancel:function(){this.onCancel()}}};var un=o("m4p6"),V=o("KHd+"),q=(0,V.Z)(X,Y,N,!1,null,"e876442c",null);const nn=q.exports;var en=function(){var n=this,e=n._self._c;return e("s-dialog",{attrs:{title:n.$gt("Measurement"),visible:n.visible,"show-default-footer":!0,size:"large","handle-confirm":n.handleConfirm,"handle-cancel":n.handleCancel,"append-to-body":!1,"close-on-click-modal":!1},on:{"update:visible":function(a){n.visible=a}}},[[e("section",{staticClass:"banner"},[e("section",{staticClass:"banner-item"},[e("span",{staticClass:"banner-item-label"},[n._v(n._s(n.$gt("SPX Tracking Number:")))]),n._v(" "),e("span",{staticClass:"banner-item-content"},[n._v(n._s(n.orderInfo.order_id))])]),n._v(" "),e("section",{staticClass:"banner-item"},[e("span",{staticClass:"banner-item-label"},[n._v(n._s(n.$gt("Sender Phone (Last 4 digits):")))]),n._v(" "),e("span",{staticClass:"banner-item-content"},[n._v(n._s(n.orderInfo.sender_phone_suffix))])])]),n._v(" "),e("s-alert",{staticClass:"warning",attrs:{type:"warning","show-icon":"",closable:!1}},[e("div",[n._v(`
        `+n._s(n.$gt("This order is a non-Shopee order.Please measure dimension & weight for ASF calculation."))+`
      `)])]),n._v(" "),n.visible?e("s-form",{ref:"form",staticStyle:{"margin-top":"24px"},attrs:{"label-position":"top",model:n.orderInfo,rules:n.rules}},[e("s-form-item",{attrs:{label:n.$gt("Weight"),required:n.DOP_MEASUREMENT_WEIGHT_REQUIRED,prop:"weight"}},[e("section",[e("s-input-number",{ref:"weightInput",attrs:{controls:!1,width:"135px",placeholder:n.$gt("Input"),precision:2,min:0},scopedSlots:n._u([{key:"suffix",fn:function(){return[n._v(n._s(n.$gt("kg")))]},proxy:!0}],null,!1,695822205),model:{value:n.orderInfo.weight,callback:function(a){n.$set(n.orderInfo,"weight",a)},expression:"orderInfo.weight"}}),n._v(" "),e("section",{staticClass:"input-tips"},[n._v(`
              `+n._s("Sender Weight: "+(n.orderInfo.origin_weight||"")+" kg")+`
            `)])],1)]),n._v(" "),e("s-form-item",{attrs:{label:n.$gt("Dimension")}},[[e("section",[e("s-input-number",{attrs:{controls:!1,width:"135px",placeholder:n.$gt("Length"),precision:0},scopedSlots:n._u([{key:"suffix",fn:function(){return[n._v(n._s(n.$gt("cm")))]},proxy:!0}],null,!1,3373180415),model:{value:n.orderInfo.length,callback:function(a){n.$set(n.orderInfo,"length",a)},expression:"orderInfo.length"}}),n._v(" "),e("span",{staticClass:"dimension-multipler"},[n._v("*")]),n._v(" "),e("s-input-number",{attrs:{controls:!1,width:"135px",placeholder:n.$gt("Width"),precision:0},scopedSlots:n._u([{key:"suffix",fn:function(){return[n._v(n._s(n.$gt("cm")))]},proxy:!0}],null,!1,3373180415),model:{value:n.orderInfo.width,callback:function(a){n.$set(n.orderInfo,"width",a)},expression:"orderInfo.width"}}),n._v(" "),e("span",{staticClass:"dimension-multipler"},[n._v("*")]),n._v(" "),e("s-input-number",{attrs:{controls:!1,width:"135px",placeholder:n.$gt("Height"),precision:0},scopedSlots:n._u([{key:"suffix",fn:function(){return[n._v(n._s(n.$gt("cm")))]},proxy:!0}],null,!1,3373180415),model:{value:n.orderInfo.height,callback:function(a){n.$set(n.orderInfo,"height",a)},expression:"orderInfo.height"}}),n._v(" "),e("section",{staticClass:"input-tips"},[n._v(`
              `+n._s("Sender Dimension: "+(n.orderInfo.origin_length||"")+" *                "+(n.orderInfo.origin_width||"")+" *                "+(n.orderInfo.origin_height||"")+" cm")+`
            `)]),n._v(" "),e("section",{staticClass:"input-tips"},[n._v(`
              `+n._s(n.$gt("The input value of dimension will be re-arranged based on max,median, and min accordingly."))+`
            `)])],1)]],2)],1):n._e()]],2)},tn=[];const an={props:{visible:{type:Boolean,required:!0},onConfirm:{type:Function,required:!0},onCancel:{type:Function,required:!0},orderInfo:{type:Object,required:!0}},data:function(){return{loading:{confirm:!1},DOP_MEASUREMENT_WEIGHT_REQUIRED:L.dr}},computed:{rules:function(){return L.dr?{weight:[{required:!0,trigger:"blur"}]}:{}}},watch:{visible:{handler:function(){var n=this;this.visible&&this.$nextTick(function(){n.$refs.weightInput&&n.$refs.weightInput.focus()})}}},methods:{handleConfirm:function(){var i=(0,p.Z)(s().mark(function e(){return s().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:if(!this.loading.confirm){a.next=2;break}return a.abrupt("return");case 2:return a.next=4,this.$refs.form.validate();case 4:return a.prev=4,this.loading.confirm=!0,a.next=8,this.onConfirm({order_id:this.orderInfo.order_id,weight:this.orderInfo.weight||this.orderInfo.origin_weight,height:this.orderInfo.height||this.orderInfo.origin_height,length:this.orderInfo.length||this.orderInfo.origin_length,width:this.orderInfo.width||this.orderInfo.origin_width});case 8:a.next=13;break;case 10:a.prev=10,a.t0=a.catch(4),console.info("confirm error:",a.t0);case 13:return a.prev=13,this.loading.confirm=!1,a.finish(13);case 16:case"end":return a.stop()}},e,this,[[4,10,13,16]])}));function n(){return i.apply(this,arguments)}return n}(),handleCancel:function(){this.onCancel()}}};var hn=o("ztu9"),rn=(0,V.Z)(an,en,tn,!1,null,"1d189453",null);const on=rn.exports;var W=v.Message.service,K=v.MessageBox.service;const sn={components:{collectPaymentDialog:nn,measurementDialog:on},mixins:[z.Z],data:function(){return{CURRENCY_SYMBOL:L.oq,paymentInfo:{},collectMethod:U,visible:{collectPayment:!1,measurement:!1,editMeasurement:!1},loading:{orderList:!1,orderInput:!1,page:!1,upload:!1},taskInfo:{sender_name_list:[],sender_id_list:[],payment_info:{}},orderList:[],total:0,currentPage:1,taskID:"",measurementDialogOrderInfo:{},editMeasurementDialogOrderInfo:{},selectedTab:"Order List",collectMethodLabel:G,fileList:[],orderId:""}},computed:(0,T.Z)({},(0,F.mapState)({taskStatus:function(n){return n.enums.systemEnums.dop_receive_task_status},taskStatusMap:function(n){return(0,b.invert)(n.enums.systemEnums.dop_receive_task_status)},originFMType:function(n){return n.enums.systemEnums.fm_type},originFMTypeMap:function(n){return(0,b.invert)(n.enums.systemEnums.fm_type)},paymentRole:function(n){return n.enums.systemEnums.payment_role},paymentRoleMap:function(n){return(0,b.invert)(n.enums.systemEnums.payment_role||{})},orderAccountLabelMap:function(n){return(0,b.invert)(n.enums.systemEnums.order_type)},paymentType:function(n){return n.enums.systemEnums.payment_method_forward},isSpUser:function(n){return n.user.currentLoginUser.user_service_point_flag===1},isSpSwitchOn:function(n){return n.enums.systemEnums.service_point_switch&&n.enums.systemEnums.service_point_switch.open}}),{taskOperationButtonText:function(){return this.taskInfo.task_status===this.taskStatus.Done?"Print Receipt":this.taskInfo.task_status===this.taskStatus.Doing&&Number(this.taskInfo.payment_info.collection_amount)!==0?"Collect Payment":"Complete"},shouldShowTaskOperationButton:function(){return!(this.taskInfo.task_status===this.taskStatus.Done&&!(0,R.wD)(this.$store,"DOP_RECEIVE_TASK_RECEIPT")||!(0,R.wD)(this.$store,"DOP_RECEIVE_TASK_COMPLETE"))},showAddOrderInput:function(){return!(this.isSpUser&&this.isSpSwitchOn||!(0,R.wD)(this.$store,"DOP_RECEIVE_TASK_ADD_ORDER")||this.taskInfo.task_status===this.taskStatus.Done)},shouldShowTabs:function(){return!!(this.taskInfo.task_status==this.taskStatus.Done&&this.taskInfo.payment_info&&this.taskInfo.payment_info.collection_amount&&Number(this.taskInfo.payment_info.collection_amount)!==0)},uploadUrl:function(){return x.v+"/api/in-station/uni_receive/payment_proof/upload"},showPagination:function(){return this.selectedTab==="Order List"&&this.total>E.L8},showPrintButton:function(){return!!(0,R.wD)(this.$store,"DOP_RECEIVE_TASK_ORDER_PRINT")},showRemoveButton:function(){return!(this.isSpUser&&this.isSpSwitchOn||!(0,R.wD)(this.$store,"DOP_RECEIVE_TASK_REMOVE_ORDER")||this.taskInfo.task_status===this.taskStatus.Done)},canUpdateProofImage:function(){return this.taskInfo.payment_info.allow_update_payment_proof===Q.collected}}),beforeRouteLeave:function(){var i=(0,p.Z)(s().mark(function e(r,a,t){return s().wrap(function(u){for(;;)switch(u.prev=u.next){case 0:if(!(this.taskInfo.task_status===this.taskStatus.Doing||this.taskInfo.task_status===this.taskStatus.Created)){u.next=3;break}return u.next=3,K.confirm("The task has not been completed yet, are you sure you want to quit?","Notice");case 3:t();case 4:case"end":return u.stop()}},e,this)}));function n(e,r,a){return i.apply(this,arguments)}return n}(),created:function(){var i=(0,p.Z)(s().mark(function e(){var r;return s().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:r=this.$route.params.taskId,this.taskID=r,this.reloadPageInfo(),this.initScanBehaviorDetection("orderId");case 4:case"end":return t.stop()}},e,this)}));function n(){return i.apply(this,arguments)}return n}(),mounted:function(){var n=this.$refs.orderInput;setTimeout(function(){n&&n.focus()},500)},methods:{checkOrderFlag:function(){var i=(0,p.Z)(s().mark(function e(r){return s().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,this.$store.dispatch("dopReceiveTask/checkOrderFlag",r);case 3:return t.abrupt("return",t.sent);case 6:throw t.prev=6,t.t0=t.catch(0),(0,P.o)(),t.t0;case 10:case"end":return t.stop()}},e,this,[[0,6]])}));function n(e){return i.apply(this,arguments)}return n}(),reloadPageInfo:function(){this.handlePageChange(1),this.loadReceiveTaskDetail()},handlePageChange:function(){var i=(0,p.Z)(s().mark(function e(r){return s().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,this.loadOrderList({pageno:r,count:E.L8,receive_task_id:this.taskID});case 2:this.currentPage=r;case 3:case"end":return t.stop()}},e,this)}));function n(e){return i.apply(this,arguments)}return n}(),beforeFileRemoved:function(){var i=(0,p.Z)(s().mark(function e(){return s().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,K.confirm("Are you sure to delete the photo?","Delete Photo");case 2:case"end":return a.stop()}},e,this)}));function n(){return i.apply(this,arguments)}return n}(),onFileRemoved:function(){var i=(0,p.Z)(s().mark(function e(r,a){var t;return s().wrap(function(u){for(;;)switch(u.prev=u.next){case 0:if(r.percentage!==0){u.next=2;break}return u.abrupt("return");case 2:return t=a.map(function(l){return l.response&&l.response.data&&l.response.data.url?l.response.data.url:l.name}),u.next=5,this.updateProofImage({receive_task_id:this.taskID,proof_image_urls:t});case 5:this.taskInfo.payment_info.proof_image_urls=t;case 6:case"end":return u.stop()}},e,this)}));function n(e,r){return i.apply(this,arguments)}return n}(),onFileUploadSuccess:function(){var i=(0,p.Z)(s().mark(function e(r){return s().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if(r.retcode===0){t.next=2;break}return t.abrupt("return");case 2:return this.taskInfo.payment_info.proof_image_urls||(this.taskInfo.payment_info.proof_image_urls=[]),t.next=5,this.updateProofImage({receive_task_id:this.taskID,proof_image_urls:[].concat((0,k.Z)(this.taskInfo.payment_info.proof_image_urls),[r.data.url])});case 5:this.taskInfo.payment_info.proof_image_urls.push(r.data.url);case 6:case"end":return t.stop()}},e,this)}));function n(e){return i.apply(this,arguments)}return n}(),updateProofImage:function(){var i=(0,p.Z)(s().mark(function e(r){return s().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,this.loading.upload=!0,t.next=4,this.$store.dispatch("dopReceiveTask/updateProofImage",r);case 4:W.success("update successfully"),t.next=10;break;case 7:t.prev=7,t.t0=t.catch(0),this.$message.error("upload proof image error:",t.t0);case 10:return t.prev=10,this.loading.upload=!1,t.finish(10);case 13:case"end":return t.stop()}},e,this,[[0,7,10,13]])}));function n(e){return i.apply(this,arguments)}return n}(),beforeUpload:function(n){return H.some(function(e){return n.type.includes(e)})?!0:(W.error("wrong format."),!1)},isOrderEditable:function(n){return!(this.isSpUser&&this.isSpSwitchOn||!(0,R.wD)(this.$store,"DOP_RECEIVE_TASK_ADD_ORDER")||this.taskInfo.task_status===this.taskStatus.Done||!n.is_non_shopee_order)},loadReceiveTaskDetail:function(){var i=(0,p.Z)(s().mark(function e(){var r=this,a,t,f;return s().wrap(function(l){for(;;)switch(l.prev=l.next){case 0:return l.prev=0,this.loading.page=!0,l.next=4,this.$store.dispatch("dopReceiveTask/getReceiveTaskDetail",{receive_task_id:this.taskID});case 4:a=l.sent,t=a.data,f=t===void 0?{}:t,this.taskInfo=f,f.payment_info.proof_image_urls&&f.payment_info.proof_image_urls.length?f.payment_info.proof_image_urls.forEach(function(w){r.fileList.push({name:w,url:""+x.v+w})}):this.fileList=[],l.next=14;break;case 11:l.prev=11,l.t0=l.catch(0),console.info("get receive task detail error:",l.t0);case 14:return l.prev=14,this.loading.page=!1,l.finish(14);case 17:case"end":return l.stop()}},e,this,[[0,11,14,17]])}));function n(){return i.apply(this,arguments)}return n}(),timestampToDateString:function(n){return(0,Z.WU)(n)},addOrder:function(){var i=(0,p.Z)(s().mark(function e(r){var a,t,f,u,l,w,D,S,m,I,O,M;return s().wrap(function(c){for(;;)switch(c.prev=c.next){case 0:if(this.operationInfo=this.getOperationInfo(),!this.loading.orderInput){c.next=3;break}return c.abrupt("return");case 3:if(a=r.target.value,a){c.next=6;break}return c.abrupt("return");case 6:c.prev=6,(0,j.t)(a),c.next=14;break;case 10:return c.prev=10,c.t0=c.catch(6),this.$message.error(c.t0.message),c.abrupt("return");case 14:return c.prev=14,this.loading.orderInput=!0,this.loading.page=!0,c.next=19,this.checkOrderFlag({order_id:a,receive_task_id:this.taskID});case 19:if(t=c.sent,f=t.data,u=f.popup,l=u.need_measure_flag,w=u.new_sender_flag,D=f.order_info,S=D.sender_phone_suffix,m=D.origin_weight,I=D.origin_length,O=D.origin_height,M=D.origin_width,w!==1){c.next=33;break}return c.next=33,K.confirm(this.$gt("The Sender ID of this order does not match the scanned orders.              Are you sure you want to continue scanning?               The system will calculate the cost of all orders."),this.$gt("Notice"));case 33:if(l!==1){c.next=39;break}this.visible.measurement=!0,this.sender_phone_suffix=S,this.measurementDialogOrderInfo={order_id:a,sender_phone_suffix:S,origin_weight:m,origin_length:I,origin_height:O,origin_width:M},c.next=42;break;case 39:return c.next=41,this.receiveOrder({order_id:a,receive_task_id:this.taskID});case 41:this.reloadPageInfo();case 42:c.next=47;break;case 44:c.prev=44,c.t1=c.catch(14),console.info("check order error:",c.t1);case 47:return c.prev=47,this.loading.orderInput=!1,this.loading.page=!1,this.$refs.orderInput.select(),c.finish(47);case 52:case"end":return c.stop()}},e,this,[[6,10],[14,44,47,52]])}));function n(e){return i.apply(this,arguments)}return n}(),handleCollectPaymentDialogCancel:function(){this.visible.collectPayment=!1},handleCollectPaymentDialogConfirm:function(){var i=(0,p.Z)(s().mark(function e(r){return s().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,this.completeReceiveTask((0,T.Z)({},r,{receive_task_id:this.taskID}));case 3:this.reloadPageInfo(),this.visible.collectPayment=!1,t.next=10;break;case 7:t.prev=7,t.t0=t.catch(0),console.info("handle collect payment error:",t.t0);case 10:case"end":return t.stop()}},e,this,[[0,7]])}));function n(e){return i.apply(this,arguments)}return n}(),handleMeasurementDialogCancel:function(){this.visible.measurement=!1},handleMeasurementDialogConfirm:function(){var i=(0,p.Z)(s().mark(function e(r){return s().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,this.receiveOrder((0,T.Z)({receive_task_id:this.taskID},r));case 3:this.visible.measurement=!1,this.reloadPageInfo(),t.next=10;break;case 7:t.prev=7,t.t0=t.catch(0),console.info("receive order error:",t.t0);case 10:case"end":return t.stop()}},e,this,[[0,7]])}));function n(e){return i.apply(this,arguments)}return n}(),handleEditMeasurementDialogCancel:function(){this.visible.editMeasurement=!1},handleEditMeasurementDialogConfirm:function(){var i=(0,p.Z)(s().mark(function e(r){return s().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,this.$store.dispatch("dopReceiveTask/editOrder",(0,T.Z)({receive_task_id:this.taskID},r));case 3:this.visible.editMeasurement=!1,this.reloadPageInfo(),t.next=10;break;case 7:t.prev=7,t.t0=t.catch(0),console.info("edit order info error:",t.t0);case 10:case"end":return t.stop()}},e,this,[[0,7]])}));function n(e){return i.apply(this,arguments)}return n}(),loadOrderList:function(){var i=(0,p.Z)(s().mark(function e(r){var a=this,t,f,u,l,w,D;return s().wrap(function(m){for(;;)switch(m.prev=m.next){case 0:return this.loading.orderList=!0,m.prev=1,m.next=4,this.$store.dispatch("dopReceiveTask/getOrderList",r);case 4:t=m.sent,f=t.data,u=f.list,l=u===void 0?[]:u,w=f.total,D=w===void 0?0:w,l.forEach(function(I){I.orderAccountRenderContent=a.orderAccountLabelMap[I.order_account],I.dimensionRenderContent=I.length+" * "+I.width+" * "+I.height}),this.orderList=l,this.total=D,m.next=18;break;case 15:m.prev=15,m.t0=m.catch(1),console.info("get task order list error:",m.t0);case 18:return m.prev=18,this.loading.orderList=!1,m.finish(18);case 21:case"end":return m.stop()}},e,this,[[1,15,18,21]])}));function n(e){return i.apply(this,arguments)}return n}(),receiveOrder:function(){var i=(0,p.Z)(s().mark(function e(r){return s().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return r.operation_info=this.operationInfo,t.prev=1,this.loading.page=!0,t.next=5,this.$store.dispatch("dopReceiveTask/addOrder",r);case 5:(0,P.w)(),W.success("Received Successfully"),this.onScanEnded({module:E.qj.dropOffReceive}),t.next=15;break;case 10:throw t.prev=10,t.t0=t.catch(1),(0,P.o)(),this.onScanEnded({shouldReport:!1}),t.t0;case 15:return t.prev=15,this.loading.page=!1,t.finish(15);case 18:case"end":return t.stop()}},e,this,[[1,10,15,18]])}));function n(e){return i.apply(this,arguments)}return n}(),printOrder:function(){var i=(0,p.Z)(s().mark(function e(r){var a,t,f,u,l,w,D,S,m,I,O,M,$;return s().wrap(function(_){for(;;)switch(_.prev=_.next){case 0:return a=[],_.prev=1,_.next=4,this.$store.dispatch("dopReceiveTask/printOrder",{order_id:r});case 4:if(t=_.sent,f=t.data.available_list,u=f===void 0?[]:f,a=Array.isArray(u)?u.map(function(y){var cn=y.shipping_label_url;return cn}):[],a.length!==0){_.next=10;break}throw new Error("no label");case 10:l=0;case 11:if(!(l<a.length)){_.next=22;break}return w=""+x.v+a[l],_.next=15,B.ZP.printExternalDopReceiveTaskOrderLabel(w);case 15:if(D=_.sent,S=D||{},m=S.retcode,I=m===void 0?0:m,O=S.message,I===0){_.next=19;break}throw new Error(O);case 19:l++,_.next=11;break;case 22:this.$message.success("print success"),_.next=30;break;case 25:for(_.prev=25,_.t0=_.catch(1),this.$message.error(_.t0),M=0;M<a.length;M++)$=""+x.v+a[M],window.open($);console.info("print order error:",_.t0);case 30:case"end":return _.stop()}},e,this,[[1,25]])}));function n(e){return i.apply(this,arguments)}return n}(),deleteOrder:function(){var i=(0,p.Z)(s().mark(function e(r){return s().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,K.confirm("Are you sure you want to remove the order ?","Notice");case 3:return t.next=5,this.$store.dispatch("dopReceiveTask/deleteOrder",{order_id:r,receive_task_id:this.taskID});case 5:this.reloadPageInfo(),t.next=11;break;case 8:t.prev=8,t.t0=t.catch(0),console.info("remove order error:",t.t0);case 11:case"end":return t.stop()}},e,this,[[0,8]])}));function n(e){return i.apply(this,arguments)}return n}(),printReceiveTask:function(){var i=(0,p.Z)(s().mark(function e(){var r,a,t,f,u,l,w,D,S,m,I,O,M,$,c;return s().wrap(function(y){for(;;)switch(y.prev=y.next){case 0:return r={receive_task_id:this.taskID},a=[],y.prev=2,y.next=5,this.$store.dispatch("dopReceiveTask/printReceiveTask",r);case 5:t=y.sent,f=t.data,u=f===void 0?{}:f,l=u.url,a=Array.isArray(l)?l:[l],w=0;case 11:if(!(w<a.length)){y.next=22;break}return D=""+x.v+a[w],y.next=15,B.ZP.printDropoffReceiptLabel(D);case 15:if(S=y.sent,m=S||{},I=m.retcode,O=I===void 0?0:I,M=m.message,O===0){y.next=19;break}throw new Error(M);case 19:w++,y.next=11;break;case 22:this.$message.success("print success"),y.next=30;break;case 25:for(y.prev=25,y.t0=y.catch(2),this.$message.error("Print receipt failed: "+y.t0.message),$=0;$<a.length;$++)c=""+x.v+a[$],window.open(c);console.error("print receipt error");case 30:case"end":return y.stop()}},e,this,[[2,25]])}));function n(){return i.apply(this,arguments)}return n}(),editMeasurementInfo:function(n){this.visible.editMeasurement=!0,this.editMeasurementDialogOrderInfo={order_id:n.shipment_id,weight:n.weight,length:n.length,width:n.width,height:n.height,sender_phone_suffix:n.sender_phone_suffix,origin_weight:n.origin_weight,origin_length:n.origin_length,origin_width:n.origin_width,origin_height:n.origin_height}},handleReceiveTaskOperation:function(){var i=(0,p.Z)(s().mark(function e(){return s().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:if(this.taskInfo.task_status!==this.taskStatus.Created){a.next=2;break}return a.abrupt("return");case 2:if(this.taskInfo.task_status!==this.taskStatus.Done){a.next=5;break}return this.printReceiveTask(),a.abrupt("return");case 5:if(Number(this.taskInfo.payment_info.collection_amount)===0){a.next=11;break}return a.next=8,this.loadReceiveTaskDetail();case 8:return this.visible.collectPayment=!0,this.paymentInfo={collect_method:U.cash,total_amount:Number(this.taskInfo.payment_info.collection_amount),proof_image_urls:[]},a.abrupt("return");case 11:return a.next=13,this.completeReceiveTask({receive_task_id:this.taskID});case 13:this.reloadPageInfo();case 14:case"end":return a.stop()}},e,this)}));function n(){return i.apply(this,arguments)}return n}(),completeReceiveTask:function(){var i=(0,p.Z)(s().mark(function e(r){return s().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,K.confirm("Are you sure to complete the receive task?","Notice");case 3:return this.loading.page=!0,t.next=6,this.$store.dispatch("dopReceiveTask/completeTask",r);case 6:(0,P.w)(),W.success("Completed Successfully"),t.next=14;break;case 10:throw t.prev=10,t.t0=t.catch(0),(0,P.o)(),t.t0;case 14:return t.prev=14,this.loading.page=!1,t.finish(14);case 17:case"end":return t.stop()}},e,this,[[0,10,14,17]])}));function n(e){return i.apply(this,arguments)}return n}()}};var gn=o("bA/z"),dn=(0,V.Z)(sn,d,C,!1,null,"4e163834",null);const ln=dn.exports},m4p6:(g,h,o)=>{var d=o("PMXM");typeof d=="string"&&(d=[[g.id,d,""]]),d.locals&&(g.exports=d.locals);var C=o("er8A").Z,k=C("7768c9d2",d,!0,{})},"bA/z":(g,h,o)=>{var d=o("W6Za");typeof d=="string"&&(d=[[g.id,d,""]]),d.locals&&(g.exports=d.locals);var C=o("er8A").Z,k=C("65fecb97",d,!0,{})},ztu9:(g,h,o)=>{var d=o("RGGF");typeof d=="string"&&(d=[[g.id,d,""]]),d.locals&&(g.exports=d.locals);var C=o("er8A").Z,k=C("091afc74",d,!0,{})}}]);
