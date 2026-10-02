(self.webpackChunkzzz_fms_admin=self.webpackChunkzzz_fms_admin||[]).push([[3431,2999],{"8wBu":(F,T,l)=>{"use strict";l.d(T,{Z:()=>J});var b=l("m1cH"),h=l("P451"),D=l("GOkr"),fe=l("QsnJ"),me=[{label:(0,h.ok)("Colleague"),value:"Colleague"},{label:(0,h.ok)("Domestic Helper"),value:"Domestic Helper"},{label:(0,h.ok)("Housemate"),value:"Housemate"}],ge=[{label:(0,h.ok)("Family member"),value:"Family member"},{label:(0,h.ok)("Neighbor"),value:"Neighbor"},{label:(0,h.ok)("Friend"),value:"Friend"},{label:(0,h.ok)("Security Staff"),value:"Security Staff"},{label:(0,h.ok)("Receptionist"),value:"Receptionist"}],_e=[{label:(0,h.ok)("Others"),value:"Others"}],q=D.gY?[{label:(0,h.ok)("Riser"),value:"Riser"},{label:(0,h.ok)("Shoe rack"),value:"Shoe rack"},{label:(0,h.ok)("Doorstep"),value:"Doorstep"},{label:(0,h.ok)("Parcel drop box"),value:"Parcel drop box"}]:[],pe=D.vh?[{label:(0,h.ok)("Doorstep"),value:"Doorstep"},{label:(0,h.ok)("Porch"),value:"Porch"},{label:(0,h.ok)("Mailbox"),value:"Mailbox"}]:[],ve=D.xN?[{label:(0,h.ok)("Outside area of buyer house"),value:"Outside area of buyer house"},{label:(0,h.ok)("Residential mailboxes"),value:"Residential mailboxes"},{label:(0,h.ok)("Parcel shed"),value:"Parcel shed"},{label:(0,h.ok)("Smart locker"),value:"Smart locker"},{label:(0,h.ok)("Storage point of office building"),value:"Storage point of office building"}]:[],v=D.YB?[{label:(0,h.ok)("Doorstep"),value:"Doorstep"},{label:(0,h.ok)("Porch"),value:"Porch"},{label:(0,h.ok)("Mailbox"),value:"Mailbox"},{label:(0,h.ok)("Shoe rack"),value:"Shoe rack"},{label:(0,h.ok)("Front Gate"),value:"Front Gate"}]:[],S=D.gY||D.vh||D.xN||D.YB?[]:[{label:(0,h.ok)("Doorstep"),value:"Doorstep"},{label:(0,h.ok)("Mailbox"),value:"Mailbox"},{label:(0,h.ok)("Shoe rack"),value:"Shoe rack"},{label:(0,h.ok)("Front Gate"),value:"Front Gate"},{label:(0,h.ok)("Smart locker"),value:"Smart locker"}],ye=[{label:(0,h.ok)("Other place"),value:"Other place"}];const J={data:function(){return{recipientTypeData:[],PhotoFormConfigTrans:{2:this.$gt("1st Photo Camera"),0:this.$gt("Camera and Gallery"),1:this.$gt("Camera only")}}},computed:{recipientTypeOptions:function(){var be=this.recipientTypeIsReturn?[{label:this.$gt("Seller"),value:"Seller"},{label:this.$gt("WH"),value:"WH"}]:[{label:this.$gt("Buyer"),value:"Buyer"}],ee=[].concat(ge,(0,b.Z)(this.HAS_NEW_RECIPIENT?me:[]),_e),Oe={label:this.$gt("Someone Else"),value:"Someone Else",children:ee},W={label:this.$gt("No one"),value:"No one"};return this.showNoOneAddressType&&(W.children=[].concat(q,pe,ve,v,S,ye)),[].concat(be,[Oe,W])},statusSchema:function(){return{label:this.$gt("Status"),key:"rule_status",type:"radio-group",selectOptions:[{label:this.$gt("Available"),value:0},{label:this.$gt("Unavailable"),value:1}],rules:[fe.sO.REQUIRED.call(this,this.$gt("Status"))]}},photoGuideLinesSchema:function(){return[{label:this.$gt("Overall Guideline (English)"),key:"photo_overall_guideline_english",placeholder:this.$gt("Please enter English guidelines, line breaks are supported.")},{label:this.$gt("Overall Guideline (Local language)"),key:"photo_overall_guideline_local",placeholder:this.$gt("Please enter local language guidelines, line breaks are supported.")},{label:this.$gt("Photo Guideline (English)"),key:"photo_guide_english",placeholder:this.$gt("Please enter English guidelines, line breaks are supported.")},{label:this.$gt("Photo Guideline (Local language)"),key:"photo_guide_local",placeholder:this.$gt("Please enter local language guidelines, line breaks are supported.")}]},remarkGuideLineSchema:function(){return[{label:this.$gt("English"),key:"remark_guide_english",placeholder:this.$gt("Input")},{label:this.$gt("Local language"),key:"remark_guide_local",placeholder:this.$gt("Input")}]},onHold_photoGuideLinesSchema:function(){return[{label:this.$gt("Overall Guideline (English)"),key:"photo_overall_guideline_english",placeholder:this.$gt("Please enter English guidelines, line breaks are supported.")},{label:this.$gt("Overall Guideline (Local language)"),key:"photo_overall_guideline_local",placeholder:this.$gt("Please enter local language guidelines, line breaks are supported.")},{label:this.$gt("Photo Guideline (English)"),key:"english_photo_guide",placeholder:this.$gt("Please enter English guidelines, line breaks are supported.")},{label:this.$gt("Photo Guideline (Local language)"),key:"local_photo_guide",placeholder:this.$gt("Please enter local language guidelines, line breaks are supported.")}]},onHold_remarkGuideLineSchema:function(){return[{label:this.$gt("English"),key:"english_remark_guide",placeholder:this.$gt("Input")},{label:this.$gt("Local language"),key:"local_remark_guide",placeholder:this.$gt("Input")}]}}}},"5f3S":(F,T,l)=>{var b=l("JPst");T=b(!1),T.push([F.id,`.proof-of-contact .proof-of-contact-content .contact-method-group[data-v-008d76fe] {
  margin-bottom: 0;
}
.proof-of-contact .proof-of-contact-content .contact-method-group[data-v-008d76fe] .ssc-checkbox-group {
  display: flex;
  flex-direction: column;
}
.proof-of-contact .proof-of-contact-content .contact-method-item[data-v-008d76fe] {
  display: flex;
  flex-direction: column;
}
.proof-of-contact .proof-of-contact-content .contact-method-item[data-v-008d76fe]:last-child {
  margin-bottom: 0;
}
.proof-of-contact .proof-of-contact-content .contact-method-item[data-v-008d76fe] .ssc-checkbox {
  margin-bottom: 0;
}
.proof-of-contact .proof-of-contact-content .contact-method-item .nested-field[data-v-008d76fe] {
  margin-left: 24px;
}
.proof-of-contact .proof-of-contact-content .contact-method-item .nested-field .nested-field-item[data-v-008d76fe] {
  display: flex;
  align-items: center;
  padding: 8px;
  margin-bottom: 16px;
  width: 364px;
  height: 56px;
  background: #F5F6F9;
}
.proof-of-contact .proof-of-contact-content .contact-method-item .nested-field .nested-field-item .nested-field-label[data-v-008d76fe] {
  font-size: 14px;
  color: #333;
  margin-right: 8px;
  text-align: left;
  flex-shrink: 0;
}
.proof-of-contact .proof-of-contact-content .contact-method-item .nested-field .nested-field-item .nested-field-label .required-mark[data-v-008d76fe] {
  color: #ee4d2d;
  margin-right: 4px;
}
.proof-of-contact .proof-of-contact-content .contact-method-item .nested-field .nested-field-item .nested-field-input[data-v-008d76fe] {
  width: 300px;
  flex-shrink: 0;
}
ul[data-v-008d76fe] {
  padding: 0;
  margin: 0;
  list-style: none;
}
.button-base[data-v-008d76fe] {
  padding: 9px 20px;
  font-size: 14px;
  color: #FFFFFF;
}
.spx-button[data-v-008d76fe] {
  padding: 9px 20px;
  font-size: 14px;
  color: #FFFFFF;
  border-color: #FFFFFF;
  color: #555555;
}
.spx-button[data-v-008d76fe]:hover {
  background-color: #FFFFFF;
}
.spx-button-primary[data-v-008d76fe] {
  padding: 9px 20px;
  font-size: 14px;
  color: #FFFFFF;
  background-color: #EE4D2D;
  border-color: #EE4D2D;
}
.ssc-message[data-v-008d76fe] {
  top: 20px !important;
}
.sp-card > .actions[data-v-008d76fe] {
  margin-bottom: 10px;
  display: flex;
  flex-wrap: wrap;
}
.sp-card > .actions .right[data-v-008d76fe] {
  flex: 1;
  text-align: right;
  height: 40px;
}
table th[data-v-008d76fe] {
  color: rgba(0, 0, 0, 0.85);
  border-color: #EEEEEE;
  font-size: 14px;
  font-weight: 500;
}
.spx-editor .ssc-tag[data-v-008d76fe] {
  font-size: 12px;
  margin: 0px;
  padding: 0;
}
.spx-editor .ssc-tag .left-padding-span[data-v-008d76fe] {
  width: 0;
  margin: 0 0 0 8px;
}
.spx-editor .ssc-tag .right-padding-span[data-v-008d76fe] {
  width: 0;
  margin: 0 8px 0 0;
}
.spx-editor .tag-editor-span[data-v-008d76fe] {
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
.spx-editor .tag-editor-span .tag-editor-span-space[data-v-008d76fe] {
  width: 8px;
  height: 15px;
  display: inline-block;
  line-height: 22px;
}
.ssc-tabs-type-pane-card .ssc-tabs-pane[data-v-008d76fe] {
  background: #FAFAFA;
}
.check-tree[data-v-008d76fe] {
  margin-left: 80px;
}
.avatar-uploader-icon[data-v-008d76fe] {
  font-size: 28px;
  color: #8c939d;
  width: 178px;
  height: 178px;
  line-height: 178px;
  text-align: center;
}
.avatar-uploader-icon-small[data-v-008d76fe] {
  font-size: 14px !important;
  color: #8c939d;
  width: 56px !important;
  height: 56px !important;
  line-height: 56px !important;
  text-align: center;
}
.avatar-uploader-icon-middle[data-v-008d76fe] {
  font-size: 14px !important;
  color: #8c939d;
  width: 94px !important;
  height: 94px !important;
  line-height: 94px !important;
  text-align: center;
}
.avatar[data-v-008d76fe] {
  width: 178px;
  height: 178px;
  display: block;
}
.avatar-small[data-v-008d76fe] {
  width: 56px;
  height: 56px;
  display: block;
}
.avatar-middle[data-v-008d76fe] {
  width: 94px;
  height: 94px;
  display: block;
}
.acribus-sp-tabs[data-v-008d76fe] {
  padding: 16px 16px 0px;
  border-radius: 6px;
  margin-bottom: -30px;
  background-color: #fff;
}
span.red[data-v-008d76fe] {
  color: #F56C6C;
}
span.green[data-v-008d76fe] {
  color: #67C23A;
}
.sp-hooks[data-v-008d76fe] {
  overflow: hidden;
}
.text-link[data-v-008d76fe] {
  color: #409eff;
  cursor: pointer;
}
.text-warning[data-v-008d76fe] {
  color: #e80808;
}
.help-text[data-v-008d76fe] {
  cursor: help;
}
.driver-performance-flag-A[data-v-008d76fe] {
  color: #55CC77;
}
.driver-performance-flag-B[data-v-008d76fe] {
  color: #999;
}
.driver-performance-flag-C[data-v-008d76fe] {
  color: #FF4742;
}
/* [check-in rule] Google map autosuggest result container */
.pac-container[data-v-008d76fe] {
  z-index: 100000;
}
.action-link[data-v-008d76fe] {
  color: #2769f0;
  cursor: pointer;
  display: inline-block;
  margin-left: 6px;
}
.action-link[data-v-008d76fe]:first-child {
  margin-left: 0;
}
.action-link[data-v-008d76fe]:hover {
  text-decoration: underline;
}
.separate-line[data-v-008d76fe] {
  height: 0;
  width: 100%;
  border-top: 1px #E9E9E9 solid;
  margin-bottom: 16px;
}
.white-fs-ground[data-v-008d76fe] {
  padding: 24px;
  background: #fff;
  height: 100%;
}
.white-fs-ground .category-title[data-v-008d76fe] {
  font-size: 16px;
  font-weight: 500;
  line-height: 16px;
  color: #333;
  margin-top: 56px;
  margin-bottom: 16px;
}
.white-fs-ground .category-title[data-v-008d76fe]:first-child {
  margin-top: 16px;
}
.white-fs-ground .category-title[data-v-008d76fe]:before {
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
.page-table-container[data-v-008d76fe] {
  border: 1px solid #eee;
}
.form-body-center[data-v-008d76fe] {
  margin: 0 auto;
}
.form-body-left[data-v-008d76fe] {
  margin: 0;
}
.dialog-footer[data-v-008d76fe],
.footer-submit[data-v-008d76fe] {
  margin-top: 32px;
}
.dialog-footer .ssc-button[data-v-008d76fe],
.footer-submit .ssc-button[data-v-008d76fe] {
  margin-left: 16px;
}
.dialog-footer .ssc-button[data-v-008d76fe]:first-child,
.footer-submit .ssc-button[data-v-008d76fe]:first-child {
  margin-left: 0;
}
.text-center[data-v-008d76fe] {
  text-align: center;
}
.s-form-textarea .ssc-textarea[data-v-008d76fe],
.ssc-form-item .ssc-select[data-v-008d76fe],
.ssc-form-item .ssc-input-size-medium[data-v-008d76fe] {
  width: 320px;
}
.ssc-steps.is-horizontal[data-v-008d76fe] {
  width: 60%;
  margin: 23px auto;
}
.action-wrap[data-v-008d76fe] {
  display: flex;
  margin: 10px 0;
}
.action-wrap .actions[data-v-008d76fe] {
  flex: 1;
}
.action-wrap .actions .ssc-button[data-v-008d76fe] {
  margin-right: 16px;
}
.action-wrap .upload-route-log-info[data-v-008d76fe] {
  align-self: center;
  text-align: right;
  flex: 1;
}
.action-wrap .upload-route-log-info label[data-v-008d76fe] {
  margin-right: 8px;
}
.upload-log-table[data-v-008d76fe] {
  margin: 10px 0;
}
.group-route-list-info[data-v-008d76fe] {
  line-height: 40px;
}
.group-route-list-info label[data-v-008d76fe] {
  margin-right: 10px;
}
.mass-upload-input-footer[data-v-008d76fe] {
  margin-top: 32px;
}
.mass-upload-input-footer .ssc-button[data-v-008d76fe] {
  margin-right: 10px;
}
.add-range-btn[data-v-008d76fe] {
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
.add-range-btn[data-v-008d76fe]:hover {
  background: #f6f6f6;
}
.range-wrap[data-v-008d76fe] {
  padding: 16px;
}
.range-wrap .seq-tag[data-v-008d76fe] {
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
.range-wrap .icon-del[data-v-008d76fe] {
  line-height: 32px;
  width: 24px;
  height: 24px;
  cursor: pointer;
  color: #bbb;
}
.range-wrap .icon-del[data-v-008d76fe]:hover {
  color: #888;
}
.bg-fafafa[data-v-008d76fe] {
  background: #fafafa;
}
.ssc-step-main-title[data-v-008d76fe] {
  line-height: 1.5;
}
.ssc-form-item-error-tip[data-v-008d76fe] {
  white-space: nowrap;
}
.ssc-table-header .ssc-table-header-title[data-v-008d76fe] {
  height: 100%;
}
.ssc-table-header .ssc-table-header-column-container[data-v-008d76fe] {
  height: 100%;
}
.ssc-table-body .ssc-table-header-column-container .td-content[data-v-008d76fe] {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.acribus-text-ellipsis[data-v-008d76fe] {
  display: inline-block;
  width: 100%;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.station-tree-container .ssc-form-item-content[data-v-008d76fe] {
  flex-direction: column;
  position: relative;
}
.station-tree-container .ssc-form-item-content .tree[data-v-008d76fe] {
  min-width: 318px;
  display: block;
  margin-top: 20px;
}
.station-tree-container .ssc-form-item-content .tree.has-search-input[data-v-008d76fe] {
  padding-top: 40px;
}
.station-tree-container .ssc-form-item-content .tree-input[data-v-008d76fe] {
  position: absolute;
  left: 3%;
  top: 30px;
  z-index: 1;
  width: 94%;
  margin: 0 auto;
  color: #aeaeae;
}
.ssc-dropdown-menu[data-v-008d76fe] {
  min-width: 176px;
  max-width: 320px;
  z-index: 2;
}
.ssc-dropdown-menu .active[data-v-008d76fe] {
  color: #EE4D2D;
  font-weight: 500;
}
.detail-part-title[data-v-008d76fe] {
  font-size: 18px;
  color: #333333;
  font-weight: 500;
  margin-bottom: 16px;
}
.detail-part-title.additional-info[data-v-008d76fe] {
  margin-top: 56px;
}
.detail-part-title[data-v-008d76fe]::before {
  content: '';
  width: 2px;
  height: 10px;
  background: #EE4D2D;
  display: inline-block;
  margin-right: 6px;
}
.page-wrapper[data-v-008d76fe] {
  height: 100%;
}
.zone-container button:disabled:not(.btn-prev):not(.btn-next).ssc-btn-type-primary[data-v-008d76fe] {
  color: #FFF !important;
  background: #EE4D2D !important;
  opacity: 0.5;
}
.pagination-left-total[data-v-008d76fe] {
  display: flex;
  flex: 1;
}
.common-status[data-v-008d76fe] {
  line-height: 12px;
  font-weight: 500;
  padding: 3px 4px;
  border-radius: 2px;
  display: inline-block;
  white-space: nowrap;
}
.common-status.status-success[data-v-008d76fe] {
  background: #ECFFF1;
  color: #1CC461;
}
.common-status.status-disabled[data-v-008d76fe] {
  color: #646B76;
  background: #F5F6F9;
}
.common-status.status-info[data-v-008d76fe] {
  color: #3274F7;
  background: #F0F7FF;
}
.common-status.status-danger[data-v-008d76fe] {
  color: #F32345;
  background: #FFF0F0;
}
.common-status.status-warning[data-v-008d76fe] {
  background: #FFF8DB;
  color: #FFB014;
}
.common-divide[data-v-008d76fe] {
  height: 8px;
  background: #F5F6F9;
  margin: 0 -24px;
}
.ssc-scan-toast[data-v-008d76fe] {
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
.ssc-scan-toast.ssc-scan-toast-success[data-v-008d76fe] {
  animation-duration: 4.4s;
  animation-name: scanSuccessToast-008d76fe;
  background: #1CC461;
}
.ssc-scan-toast.ssc-scan-toast-fail[data-v-008d76fe] {
  background: #F32345;
  animation-duration: 8.4s;
  animation-name: scanFailToast-008d76fe;
}
.ssc-scan-toast.ssc-scan-toast-notice[data-v-008d76fe] {
  background: #FFA620;
  animation-duration: 6.4s;
  animation-name: scanFailToast-008d76fe;
}
.ssc-scan-toast .message-panel[data-v-008d76fe] {
  display: flex;
  width: 100%;
  align-items: center;
}
.ssc-scan-toast .message-panel .icon[data-v-008d76fe] {
  margin-right: 18px;
  width: 28px;
  height: 28px;
  flex-shrink: 0;
}
.ssc-scan-toast .message-panel .text[data-v-008d76fe] {
  display: inline-block;
}
@keyframes scanSuccessToast-008d76fe {
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
@keyframes scanFailToast-008d76fe {
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
.table-pagination[data-v-008d76fe] {
  height: 56px;
  border: 1px solid #ECF0F4;
  border-top: 0;
  justify-content: flex-end;
  padding-right: 16px;
}
.journey-type[data-v-008d76fe] {
  display: flex;
  align-items: center;
}
.journey-type .journey-type-dot[data-v-008d76fe] {
  width: 6px;
  height: 6px;
  border-radius: 50%;
  display: inline-block;
  margin-right: 8px;
}
.pagination-sticky-bottom[data-v-008d76fe] {
  background: #fff;
  position: sticky;
  bottom: 16px;
}
.pagination-sticky-bottom[data-v-008d76fe]:after {
  content: ' ';
  background: #fff;
  width: 100%;
  height: 16px;
  position: absolute;
}
.pagination-sticky-bottom[data-v-008d76fe] .ssc-pagination {
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
.pagination-sticky-bottom[data-v-008d76fe] .ssc-pagination .total-container {
  flex: 1;
  margin-left: 15px;
  margin-right: 12px;
}
.sp-card-log-list[data-v-008d76fe] {
  padding: 16px 24px;
  background: #fff;
  min-height: 100%;
}
.ssc-table-panel .ssc-form-item .ssc-form-item-content textarea[data-v-008d76fe],
.pro-filter .ssc-form-item .ssc-form-item-content textarea[data-v-008d76fe] {
  border: transparent;
}
.message-red-text[data-v-008d76fe] {
  color: #EE4D2D;
  font-weight: 700;
}
`,""]),F.exports=T},Oir5:(F,T,l)=>{var b=l("JPst");T=b(!1),T.push([F.id,`.proof-page-wrapper[data-v-0e4077d5] {
  height: 100%;
  min-width: 0;
  min-height: 0;
  display: flex;
  flex-direction: column;
  background: #fff;
}
.proof-page-wrapper .white-fs-ground[data-v-0e4077d5] {
  flex: 1 1 auto;
  min-width: 0;
  min-height: 0;
  height: auto;
  overflow-y: auto;
}
.proof-page-wrapper .category-title-v2[data-v-0e4077d5] {
  font-size: 16px;
  font-weight: 500;
  line-height: 16px;
  color: #333;
  margin-top: 56px;
  margin-bottom: 24px;
}
.proof-page-wrapper .category-title-v2[data-v-0e4077d5]:first-child {
  margin-top: 16px;
}
.proof-page-wrapper .category-title-v2[data-v-0e4077d5]:before {
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
.footer-submit[data-v-0e4077d5] {
  flex: 0 0 auto;
  width: 100%;
  margin-top: 0;
  padding: 12px 24px;
  box-sizing: border-box;
  border-top: #ecf0f4 1px solid;
  box-shadow: 0 -2px 12px 0 rgba(0, 0, 0, 0.12);
  background: #fff;
}
.footer-button[data-v-0e4077d5] {
  display: flex;
  align-items: center;
  justify-content: flex-end;
  min-width: 0;
}
.detail-form .photo-options[data-v-0e4077d5] .ssc-radio-group {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  row-gap: 8px;
  padding: 6px 0 0 0;
}
.detail-form[data-v-0e4077d5] .svg-icon {
  margin-left: 1px;
}
.pickup-onhold-view[data-v-0e4077d5] {
  pointer-events: none;
}
.autoValidRadio[data-v-0e4077d5] .ssc-form-item {
  margin-top: 0px;
}
.disallowed-driver-group-error[data-v-0e4077d5] {
  margin-top: 4px;
  color: #ee4d2d;
  font-size: 12px;
  line-height: 18px;
}
ul[data-v-0e4077d5] {
  padding: 0;
  margin: 0;
  list-style: none;
}
.button-base[data-v-0e4077d5] {
  padding: 9px 20px;
  font-size: 14px;
  color: #FFFFFF;
}
.spx-button[data-v-0e4077d5] {
  padding: 9px 20px;
  font-size: 14px;
  color: #FFFFFF;
  border-color: #FFFFFF;
  color: #555555;
}
.spx-button[data-v-0e4077d5]:hover {
  background-color: #FFFFFF;
}
.spx-button-primary[data-v-0e4077d5] {
  padding: 9px 20px;
  font-size: 14px;
  color: #FFFFFF;
  background-color: #EE4D2D;
  border-color: #EE4D2D;
}
.ssc-message[data-v-0e4077d5] {
  top: 20px !important;
}
.sp-card > .actions[data-v-0e4077d5] {
  margin-bottom: 10px;
  display: flex;
  flex-wrap: wrap;
}
.sp-card > .actions .right[data-v-0e4077d5] {
  flex: 1;
  text-align: right;
  height: 40px;
}
table th[data-v-0e4077d5] {
  color: rgba(0, 0, 0, 0.85);
  border-color: #EEEEEE;
  font-size: 14px;
  font-weight: 500;
}
.spx-editor .ssc-tag[data-v-0e4077d5] {
  font-size: 12px;
  margin: 0px;
  padding: 0;
}
.spx-editor .ssc-tag .left-padding-span[data-v-0e4077d5] {
  width: 0;
  margin: 0 0 0 8px;
}
.spx-editor .ssc-tag .right-padding-span[data-v-0e4077d5] {
  width: 0;
  margin: 0 8px 0 0;
}
.spx-editor .tag-editor-span[data-v-0e4077d5] {
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
.spx-editor .tag-editor-span .tag-editor-span-space[data-v-0e4077d5] {
  width: 8px;
  height: 15px;
  display: inline-block;
  line-height: 22px;
}
.ssc-tabs-type-pane-card .ssc-tabs-pane[data-v-0e4077d5] {
  background: #FAFAFA;
}
.check-tree[data-v-0e4077d5] {
  margin-left: 80px;
}
.avatar-uploader-icon[data-v-0e4077d5] {
  font-size: 28px;
  color: #8c939d;
  width: 178px;
  height: 178px;
  line-height: 178px;
  text-align: center;
}
.avatar-uploader-icon-small[data-v-0e4077d5] {
  font-size: 14px !important;
  color: #8c939d;
  width: 56px !important;
  height: 56px !important;
  line-height: 56px !important;
  text-align: center;
}
.avatar-uploader-icon-middle[data-v-0e4077d5] {
  font-size: 14px !important;
  color: #8c939d;
  width: 94px !important;
  height: 94px !important;
  line-height: 94px !important;
  text-align: center;
}
.avatar[data-v-0e4077d5] {
  width: 178px;
  height: 178px;
  display: block;
}
.avatar-small[data-v-0e4077d5] {
  width: 56px;
  height: 56px;
  display: block;
}
.avatar-middle[data-v-0e4077d5] {
  width: 94px;
  height: 94px;
  display: block;
}
.acribus-sp-tabs[data-v-0e4077d5] {
  padding: 16px 16px 0px;
  border-radius: 6px;
  margin-bottom: -30px;
  background-color: #fff;
}
span.red[data-v-0e4077d5] {
  color: #F56C6C;
}
span.green[data-v-0e4077d5] {
  color: #67C23A;
}
.sp-hooks[data-v-0e4077d5] {
  overflow: hidden;
}
.text-link[data-v-0e4077d5] {
  color: #409eff;
  cursor: pointer;
}
.text-warning[data-v-0e4077d5] {
  color: #e80808;
}
.help-text[data-v-0e4077d5] {
  cursor: help;
}
.driver-performance-flag-A[data-v-0e4077d5] {
  color: #55CC77;
}
.driver-performance-flag-B[data-v-0e4077d5] {
  color: #999;
}
.driver-performance-flag-C[data-v-0e4077d5] {
  color: #FF4742;
}
/* [check-in rule] Google map autosuggest result container */
.pac-container[data-v-0e4077d5] {
  z-index: 100000;
}
.action-link[data-v-0e4077d5] {
  color: #2769f0;
  cursor: pointer;
  display: inline-block;
  margin-left: 6px;
}
.action-link[data-v-0e4077d5]:first-child {
  margin-left: 0;
}
.action-link[data-v-0e4077d5]:hover {
  text-decoration: underline;
}
.separate-line[data-v-0e4077d5] {
  height: 0;
  width: 100%;
  border-top: 1px #E9E9E9 solid;
  margin-bottom: 16px;
}
.white-fs-ground[data-v-0e4077d5] {
  padding: 24px;
  background: #fff;
  height: 100%;
}
.white-fs-ground .category-title[data-v-0e4077d5] {
  font-size: 16px;
  font-weight: 500;
  line-height: 16px;
  color: #333;
  margin-top: 56px;
  margin-bottom: 16px;
}
.white-fs-ground .category-title[data-v-0e4077d5]:first-child {
  margin-top: 16px;
}
.white-fs-ground .category-title[data-v-0e4077d5]:before {
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
.page-table-container[data-v-0e4077d5] {
  border: 1px solid #eee;
}
.form-body-center[data-v-0e4077d5] {
  margin: 0 auto;
}
.form-body-left[data-v-0e4077d5] {
  margin: 0;
}
.dialog-footer[data-v-0e4077d5],
.footer-submit[data-v-0e4077d5] {
  margin-top: 32px;
}
.dialog-footer .ssc-button[data-v-0e4077d5],
.footer-submit .ssc-button[data-v-0e4077d5] {
  margin-left: 16px;
}
.dialog-footer .ssc-button[data-v-0e4077d5]:first-child,
.footer-submit .ssc-button[data-v-0e4077d5]:first-child {
  margin-left: 0;
}
.text-center[data-v-0e4077d5] {
  text-align: center;
}
.s-form-textarea .ssc-textarea[data-v-0e4077d5],
.ssc-form-item .ssc-select[data-v-0e4077d5],
.ssc-form-item .ssc-input-size-medium[data-v-0e4077d5] {
  width: 320px;
}
.ssc-steps.is-horizontal[data-v-0e4077d5] {
  width: 60%;
  margin: 23px auto;
}
.action-wrap[data-v-0e4077d5] {
  display: flex;
  margin: 10px 0;
}
.action-wrap .actions[data-v-0e4077d5] {
  flex: 1;
}
.action-wrap .actions .ssc-button[data-v-0e4077d5] {
  margin-right: 16px;
}
.action-wrap .upload-route-log-info[data-v-0e4077d5] {
  align-self: center;
  text-align: right;
  flex: 1;
}
.action-wrap .upload-route-log-info label[data-v-0e4077d5] {
  margin-right: 8px;
}
.upload-log-table[data-v-0e4077d5] {
  margin: 10px 0;
}
.group-route-list-info[data-v-0e4077d5] {
  line-height: 40px;
}
.group-route-list-info label[data-v-0e4077d5] {
  margin-right: 10px;
}
.mass-upload-input-footer[data-v-0e4077d5] {
  margin-top: 32px;
}
.mass-upload-input-footer .ssc-button[data-v-0e4077d5] {
  margin-right: 10px;
}
.add-range-btn[data-v-0e4077d5] {
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
.add-range-btn[data-v-0e4077d5]:hover {
  background: #f6f6f6;
}
.range-wrap[data-v-0e4077d5] {
  padding: 16px;
}
.range-wrap .seq-tag[data-v-0e4077d5] {
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
.range-wrap .icon-del[data-v-0e4077d5] {
  line-height: 32px;
  width: 24px;
  height: 24px;
  cursor: pointer;
  color: #bbb;
}
.range-wrap .icon-del[data-v-0e4077d5]:hover {
  color: #888;
}
.bg-fafafa[data-v-0e4077d5] {
  background: #fafafa;
}
.ssc-step-main-title[data-v-0e4077d5] {
  line-height: 1.5;
}
.ssc-form-item-error-tip[data-v-0e4077d5] {
  white-space: nowrap;
}
.ssc-table-header .ssc-table-header-title[data-v-0e4077d5] {
  height: 100%;
}
.ssc-table-header .ssc-table-header-column-container[data-v-0e4077d5] {
  height: 100%;
}
.ssc-table-body .ssc-table-header-column-container .td-content[data-v-0e4077d5] {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.acribus-text-ellipsis[data-v-0e4077d5] {
  display: inline-block;
  width: 100%;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.station-tree-container .ssc-form-item-content[data-v-0e4077d5] {
  flex-direction: column;
  position: relative;
}
.station-tree-container .ssc-form-item-content .tree[data-v-0e4077d5] {
  min-width: 318px;
  display: block;
  margin-top: 20px;
}
.station-tree-container .ssc-form-item-content .tree.has-search-input[data-v-0e4077d5] {
  padding-top: 40px;
}
.station-tree-container .ssc-form-item-content .tree-input[data-v-0e4077d5] {
  position: absolute;
  left: 3%;
  top: 30px;
  z-index: 1;
  width: 94%;
  margin: 0 auto;
  color: #aeaeae;
}
.ssc-dropdown-menu[data-v-0e4077d5] {
  min-width: 176px;
  max-width: 320px;
  z-index: 2;
}
.ssc-dropdown-menu .active[data-v-0e4077d5] {
  color: #EE4D2D;
  font-weight: 500;
}
.detail-part-title[data-v-0e4077d5] {
  font-size: 18px;
  color: #333333;
  font-weight: 500;
  margin-bottom: 16px;
}
.detail-part-title.additional-info[data-v-0e4077d5] {
  margin-top: 56px;
}
.detail-part-title[data-v-0e4077d5]::before {
  content: '';
  width: 2px;
  height: 10px;
  background: #EE4D2D;
  display: inline-block;
  margin-right: 6px;
}
.page-wrapper[data-v-0e4077d5] {
  height: 100%;
}
.zone-container button:disabled:not(.btn-prev):not(.btn-next).ssc-btn-type-primary[data-v-0e4077d5] {
  color: #FFF !important;
  background: #EE4D2D !important;
  opacity: 0.5;
}
.pagination-left-total[data-v-0e4077d5] {
  display: flex;
  flex: 1;
}
.common-status[data-v-0e4077d5] {
  line-height: 12px;
  font-weight: 500;
  padding: 3px 4px;
  border-radius: 2px;
  display: inline-block;
  white-space: nowrap;
}
.common-status.status-success[data-v-0e4077d5] {
  background: #ECFFF1;
  color: #1CC461;
}
.common-status.status-disabled[data-v-0e4077d5] {
  color: #646B76;
  background: #F5F6F9;
}
.common-status.status-info[data-v-0e4077d5] {
  color: #3274F7;
  background: #F0F7FF;
}
.common-status.status-danger[data-v-0e4077d5] {
  color: #F32345;
  background: #FFF0F0;
}
.common-status.status-warning[data-v-0e4077d5] {
  background: #FFF8DB;
  color: #FFB014;
}
.common-divide[data-v-0e4077d5] {
  height: 8px;
  background: #F5F6F9;
  margin: 0 -24px;
}
.ssc-scan-toast[data-v-0e4077d5] {
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
.ssc-scan-toast.ssc-scan-toast-success[data-v-0e4077d5] {
  animation-duration: 4.4s;
  animation-name: scanSuccessToast-0e4077d5;
  background: #1CC461;
}
.ssc-scan-toast.ssc-scan-toast-fail[data-v-0e4077d5] {
  background: #F32345;
  animation-duration: 8.4s;
  animation-name: scanFailToast-0e4077d5;
}
.ssc-scan-toast.ssc-scan-toast-notice[data-v-0e4077d5] {
  background: #FFA620;
  animation-duration: 6.4s;
  animation-name: scanFailToast-0e4077d5;
}
.ssc-scan-toast .message-panel[data-v-0e4077d5] {
  display: flex;
  width: 100%;
  align-items: center;
}
.ssc-scan-toast .message-panel .icon[data-v-0e4077d5] {
  margin-right: 18px;
  width: 28px;
  height: 28px;
  flex-shrink: 0;
}
.ssc-scan-toast .message-panel .text[data-v-0e4077d5] {
  display: inline-block;
}
@keyframes scanSuccessToast-0e4077d5 {
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
@keyframes scanFailToast-0e4077d5 {
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
.table-pagination[data-v-0e4077d5] {
  height: 56px;
  border: 1px solid #ECF0F4;
  border-top: 0;
  justify-content: flex-end;
  padding-right: 16px;
}
.journey-type[data-v-0e4077d5] {
  display: flex;
  align-items: center;
}
.journey-type .journey-type-dot[data-v-0e4077d5] {
  width: 6px;
  height: 6px;
  border-radius: 50%;
  display: inline-block;
  margin-right: 8px;
}
.pagination-sticky-bottom[data-v-0e4077d5] {
  background: #fff;
  position: sticky;
  bottom: 16px;
}
.pagination-sticky-bottom[data-v-0e4077d5]:after {
  content: ' ';
  background: #fff;
  width: 100%;
  height: 16px;
  position: absolute;
}
.pagination-sticky-bottom[data-v-0e4077d5] .ssc-pagination {
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
.pagination-sticky-bottom[data-v-0e4077d5] .ssc-pagination .total-container {
  flex: 1;
  margin-left: 15px;
  margin-right: 12px;
}
.sp-card-log-list[data-v-0e4077d5] {
  padding: 16px 24px;
  background: #fff;
  min-height: 100%;
}
.ssc-table-panel .ssc-form-item .ssc-form-item-content textarea[data-v-0e4077d5],
.pro-filter .ssc-form-item .ssc-form-item-content textarea[data-v-0e4077d5] {
  border: transparent;
}
.message-red-text[data-v-0e4077d5] {
  color: #EE4D2D;
  font-weight: 700;
}
`,""]),F.exports=T},RNzX:(F,T,l)=>{"use strict";l.r(T),l.d(T,{default:()=>mt});var b=function(){var e=this,t=e._self._c;return t("div",{staticClass:"proof-page-wrapper",class:e.isViewDetail&&"pickup-onhold-view"},[t("div",{directives:[{name:"loading",rawName:"v-loading",value:e.loading.detail,expression:"loading.detail"}],staticClass:"white-fs-ground"},[t("div",{staticClass:"category-title-v2"},[e._v(e._s(e.$gt("Basic Info")))]),e._v(" "),t("s-form",{ref:"basicForm",attrs:{model:e.form,"label-position":"right","label-width":"200px","scroll-to-error-item":!0}},e._l(e.basicFormSchema,function(n){return t("form-item",{key:n.key,attrs:{schema:n,form:e.form}})}),1),e._v(" "),e.showAppProof?t("div",{staticClass:"category-title-v2"},[e._v(e._s(e.$gt("App Proof of On hold Configuration")))]):e._e(),e._v(" "),e.showAppProof?t("s-form",{ref:"detailForm",staticClass:"detail-form",attrs:{model:e.form,"label-position":"right","label-width":"200px","scroll-to-error-item":!0}},e._l(e.detailFormSchema,function(n){return t("form-item",{key:n.key,attrs:{schema:n,form:e.form}})}),1):e._e()],1),e._v(" "),e.isViewDetail?e._e():t("div",{staticClass:"footer-submit"},[t("div",{staticClass:"footer-button"},[t("s-button",{on:{click:function(r){return e.back(!1)}}},[e._v(e._s(e.$gt("Cancel")))]),e._v(" "),t("s-button",{attrs:{loading:e.loading.submit,type:"primary"},on:{click:e.submit}},[e._v(e._s(e.$gt("Submit")))])],1)])])},h=[],D=l("rfXi"),fe=l.n(D),me=l("ODRq"),ge=l.n(me),_e=l("P2sY"),q=l.n(_e),pe=l("jo6Y"),ve=l("14Xm"),v=l.n(ve),S=l("D3Ub"),ye=l("GQeE"),J=l.n(ye),R=l("m1cH"),be=l("kvrn"),ee=l.n(be),Oe=l("gDS+"),W=l.n(Oe),$=l("QbLZ"),te=l("brkv"),Me=l("J2iB"),Ne=l.n(Me),Ve=l("eCTY"),Le=l("EA14");const Ge={checkAutoValidation:function(e){return Le.Z.post("/spx_delivery/admin/on_hold_reason/check_automated_validation/",e)}};var Be=l("bX60"),ke=l("oVLc"),Ee=l("04+p"),Ue=l("b84n"),f=l("QsnJ"),ue=l("W7Cz"),C=l("GOkr"),u=l("pqmQ"),x=l("N4Da"),E=l("vMZb"),ze=l("NKRf"),Ze=l("8wBu"),xe=l("Azq6"),je=function(){var e=this,t=e._self._c;return t("div",{staticClass:"rule-editor-fields"},[t("span",{staticClass:"rule-editor-desc"},[e._v(e._s(e.$gt("You can free config the auto validation criteria, the validate priority is: ( ) > and > or")))]),e._v(" "),t("RuleEditorVue",{style:{width:"803px"},attrs:{data:{toolbars:e.toolbarSchema,initialValue:e.initialValue,onInput:e.handleInput,format:e.format}}})],1)},Ye=[],Ke=l("86Kv");const Qe={components:{RuleEditorVue:Ke.RuleEditorVue},props:{options:{type:Array,default:function(){return[]}},initialValue:{type:String,default:function(){return""}},format:{type:Function,default:function(){}},ruleEditorChange:{type:Function,default:function(){}}},data:function(){return{ruleEditorRef:{current:void 0},editorValue:this.initialValue}},computed:{toolbarSchema:function(){var e=[].concat((0,R.Z)(this.options));return[{type:"select",label:"Validation Criteria",ctrlProps:{options:e}},{type:"tag",label:"AND"},{type:"tag",label:"OR"},{type:"tag",label:"("},{type:"tag",label:")"}]}},watch:{},methods:{handleInput:function(e){this.editorValue=e,typeof this.ruleEditorChange=="function"&&this.ruleEditorChange(e)}}};var Re=l("KHd+"),qe=(0,Re.Z)(Qe,je,Ye,!1,null,null,null);const We=qe.exports;var Xe=function(){var e=this,t=e._self._c;return t("div",{staticClass:"proof-of-contact"},[t("div",{staticClass:"proof-of-contact-content"},[t("div",{staticClass:"contact-method-group"},[t("s-checkbox-group",{attrs:{vertical:""},model:{value:e.form.proof_of_contact_view_list,callback:function(r){e.$set(e.form,"proof_of_contact_view_list",r)},expression:"form.proof_of_contact_view_list"}},[t("div",{staticClass:"contact-method-item"},[t("s-checkbox",{attrs:{value:e.callMethodEnum["In App Call"]}},[e._v(`
              `+e._s(e.$gt("In App Call"))+`
            `)]),e._v(" "),e.isCallMethodSelected(e.callMethodEnum["In App Call"])?t("div",{staticClass:"nested-field"},[t("div",{staticClass:"nested-field-item"},[t("span",{staticClass:"nested-field-label"},[t("span",{staticClass:"required-mark"},[e._v("*")]),e._v(`
                  `+e._s(e.$gt("Ring Attempt threshold"))+`
                `)]),e._v(" "),t("s-input-number",{staticClass:"nested-field-input",attrs:{type:"number",precision:0,min:0,width:"160px",placeholder:e.$gt("Input"),controls:!1,step:1},model:{value:e.form.in_app_call_times_threshold,callback:function(r){e.$set(e.form,"in_app_call_times_threshold",r)},expression:"form.in_app_call_times_threshold"}})],1)]):e._e()],1),e._v(" "),t("div",{staticClass:"contact-method-item"},[t("s-checkbox",{attrs:{value:e.callMethodEnum["Telco Call"]}},[e._v(`
              `+e._s(e.$gt("Telco Call"))+`
            `)]),e._v(" "),e.isCallMethodSelected(e.callMethodEnum["Telco Call"])?t("div",{staticClass:"nested-field"},[t("div",{staticClass:"nested-field-item"},[t("span",{staticClass:"nested-field-label"},[t("span",{staticClass:"required-mark"},[e._v("*")]),e._v(`
                  `+e._s(e.$gt("Ring Attempt threshold"))+`
                `)]),e._v(" "),t("s-input-number",{staticClass:"nested-field-input",staticStyle:{width:"160px"},attrs:{type:"number",min:0,precision:0,placeholder:e.$gt("Input"),step:1,controls:!1},model:{value:e.form.telco_call_times_threshold,callback:function(r){e.$set(e.form,"telco_call_times_threshold",r)},expression:"form.telco_call_times_threshold"}})],1)]):e._e()],1),e._v(" "),t("div",{staticClass:"contact-method-item"},[t("s-checkbox",{attrs:{value:e.callMethodEnum["Call Screenshot/Photo"]}},[e._v(`
              `+e._s(e.$gt("Call Screenshot / Photo"))+`
            `)])],1),e._v(" "),t("div",{staticClass:"contact-method-item"},[t("s-checkbox",{attrs:{value:e.callMethodEnum["Other Call Methods"]}},[e._v(`
              `+e._s(e.$gt("Other Call Methods"))+`
            `)])],1),e._v(" "),t("div",{staticClass:"contact-method-item"},[t("s-checkbox",{attrs:{value:e.callMethodEnum["In-App Chat"]}},[e._v(`
              `+e._s(e.$gt("In-App Chat"))+`
            `)]),e._v(" "),e.isMessageMethodSelected(e.callMethodEnum["In-App Chat"])?t("div",{staticClass:"nested-field"},[t("div",{staticClass:"nested-field-item"},[t("span",{staticClass:"nested-field-label"},[t("span",{staticClass:"required-mark"},[e._v("*")]),e._v(`
                  `+e._s(e.$gt("Need Buyer Reply"))+`
                `)]),e._v(" "),t("s-radio-group",{staticClass:"nested-field-input",model:{value:e.form.in_app_chat_need_reply,callback:function(r){e.$set(e.form,"in_app_chat_need_reply",r)},expression:"form.in_app_chat_need_reply"}},[t("s-radio",{attrs:{label:!0}},[e._v(e._s(e.$gt("Yes")))]),e._v(" "),t("s-radio",{attrs:{label:!1}},[e._v(e._s(e.$gt("No")))])],1)],1)]):e._e()],1),e._v(" "),t("div",{staticClass:"contact-method-item"},[t("s-checkbox",{attrs:{value:e.callMethodEnum["Message Screenshot/Photo"]}},[e._v(`
              `+e._s(e.$gt("Message Screenshot / Photo"))+`
            `)]),e._v(" "),e.isMessageMethodSelected(e.callMethodEnum["Message Screenshot/Photo"])?t("div",{staticClass:"nested-field"},[t("div",{staticClass:"nested-field-item"},[t("span",{staticClass:"nested-field-label"},[t("span",{staticClass:"required-mark"},[e._v("*")]),e._v(`
                  `+e._s(e.$gt("Need Buyer Reply"))+`
                `)]),e._v(" "),t("s-radio-group",{staticClass:"nested-field-input",model:{value:e.form.msg_screenshot_need_reply,callback:function(r){e.$set(e.form,"msg_screenshot_need_reply",r)},expression:"form.msg_screenshot_need_reply"}},[t("s-radio",{attrs:{label:!0}},[e._v(e._s(e.$gt("Yes")))]),e._v(" "),t("s-radio",{attrs:{label:!1}},[e._v(e._s(e.$gt("No")))])],1)],1)]):e._e()],1),e._v(" "),t("div",{staticClass:"contact-method-item"},[t("s-checkbox",{attrs:{value:e.callMethodEnum["Other Message Methods"]}},[e._v(`
              `+e._s(e.$gt("Other Message Methods"))+`
            `)])],1)])],1)])])},Je=[],we=l("Mn1O");const et={name:"ProofOfContact",props:{form:{type:Object,required:!0}},data:function(){var e=(0,we.Z)(),t=e.proofOfContactViewListEnum;return{callMethodEnum:t}},computed:{ringAttemptRules:function(){return[{required:!0,message:this.$gt("{label} should not be empty !",null,{label:this.$gt("Ring Attempt threshold")}),trigger:"blur"}]},needBuyerReplyRules:function(){return[{required:!0,message:this.$gt("{label} should not be empty !",null,{label:this.$gt("Need Buyer Reply")}),trigger:"change"}]}},watch:{"form.proof_of_contact_view_list":{handler:function(e,t){this.handleCallMethodsChange(t,e)},deep:!0}},methods:{handleCallMethodsChange:function(e,t){e!==t&&!this.isCallMethodSelected(this.callMethodEnum["In App Call"])&&(this.form.in_app_call_times_threshold=void 0),e!==t&&!this.isCallMethodSelected(this.callMethodEnum["Telco Call"])&&(this.form.telco_call_times_threshold=void 0),e!==t&&!this.isMessageMethodSelected(this.callMethodEnum["In-App Chat"])&&(this.form.in_app_chat_need_reply=void 0),e!==t&&!this.isMessageMethodSelected(this.callMethodEnum["Message Screenshot/Photo"])&&(this.form.msg_screenshot_need_reply=void 0)},isCallMethodSelected:function(e){return(this.form.proof_of_contact_view_list||[]).includes(e)},isMessageMethodSelected:function(e){return(this.form.proof_of_contact_view_list||[]).includes(e)}}};var vt=l("3Mnx"),tt=(0,Re.Z)(et,Xe,Je,!1,null,"008d76fe",null);const nt=tt.exports;var $e=l("fp3J"),Te=l("P451"),it=l("nC2w"),ot=l("O4uc");function at(){var i=(0,$e.reactive)(ot.Z.state.enums.pickupEnums.onHold_reason_location_type||{}),e=(0,it.useMappingOptions)(i),t=e.options,n=(0,$e.computed)(function(){return{label:(0,Te.ok)("Destination Type"),key:"pickup_location_type",type:"select",selectOptions:E.$4?t.filter(function(r){return r.value!==i["VIP PUP"]}):t,rules:[{message:(0,Te.ok)("{label} should not be empty !",null,{label:(0,Te.ok)("Destination Type")}),required:!0}],props:{multiple:!0,multipleConcise:!0}}});return{destinationTypeFormItem:n}}var Ae=l("6wSw"),rt=2,st=50,lt=0,dt=[141901027,141901028],pt=function(e){return e.replace(/[\\%_]/g,function(t){return"\\"+t})},ut=function(e){var t=(0,te.pickBy)(e,function(s){return!!s}),n=!0;for(var r in t)if(x.cL.hasOwnProperty(r)&&r&&x.cL[r]){n=!x.cL[r];break}return n},ct="ISSUE_TYPE_CONFIG";const ht={name:"OnHoldReasonManagement",components:{FormItem:Ue.Z},mixins:[Ze.Z],setup:function(){var e=at(),t=e.destinationTypeFormItem,n=(0,we.Z)(),r=n.deliveryDestinationTypeEnum,s=n.deliveryDestinationTypeFormItem,o=n.deliveryRerouteToHomeFormItem,c=n.deliveryRouteToHomeEnum,a=n.deliveryAutomaticRerouteHdToSpFormItem,p=n.deliveryAutomaticRerouteHdToSpEnum,O=n.deliveryOrderPaymentMethodTypeFormItem,d=n.deliveryRecipientDocumentTypeFormItem,m=n.deliveryRealTimeValidationFormItem,y=n.deliveryValidationTypeFormItem,A=n.deliveryEarliestTimeFormItem,M=n.deliveryBlockTypeFormItem,N=n.validationTypeEnum,w=n.blockTypeEnum,V=n.needRealTimeValidationEnum,L=n.deliveryOnHoldDestinationTypeFormItem,G=n.deliveryOnHoldIssueTypeFormItem,Z=n.autoValidationOptions,P=n.needFilterByOrderAccount,I=n.autoValidationMappings,j=n.supportAutoValidation,H=n.supportProofOfContact,B=n.supportMandatoryToContactSeller,Y=n.deliveryMandatoryToContactSellerFormItem,K=n.proofOfContactViewListOptions,_=n.proofOfContactViewListEnum;return{autoValidationMappings:I,destinationTypeFormItem:t,deliveryDestinationTypeEnum:r,deliveryDestinationTypeFormItem:s,deliveryRerouteToHomeFormItem:o,deliveryRouteToHomeEnum:c,deliveryAutomaticRerouteHdToSpFormItem:a,deliveryAutomaticRerouteHdToSpEnum:p,deliveryOnHoldIssueTypeFormItem:G,deliveryOrderPaymentMethodTypeFormItem:O,deliveryRecipientDocumentTypeFormItem:d,deliveryRealTimeValidationFormItem:m,deliveryValidationTypeFormItem:y,deliveryEarliestTimeFormItem:A,deliveryBlockTypeFormItem:M,validationTypeEnum:N,blockTypeEnum:w,needRealTimeValidationEnum:V,deliveryOnHoldDestinationTypeFormItem:L,autoValidationOptions:Z,needFilterByOrderAccount:P,supportAutoValidation:j,supportProofOfContact:H,supportMandatoryToContactSeller:B,deliveryMandatoryToContactSellerFormItem:Y,proofOfContactViewListOptions:K,proofOfContactViewListEnum:_}},data:function(){var e=(0,u.DV)(this.$store.state,"enums.systemEnums.on_hold_reason_failed_attempt_type")||{},t=(0,u.DV)(this.$store.state,"enums.systemEnums.on_hold_reason.standard_requirement_config")||{},n=(0,u.DV)(this.$store.state,"enums.systemEnums.on_hold_reason.standard_boolean_config")||{},r=(0,u.DV)(this.$store.state,"enums.systemEnums.on_hold_reason.photo_from_config")||{};return{editMode:!1,checkAutoValidationRes:{data:!0,msg:""},isProofOfContactExists:!1,form:{status:0,type:0,english_photo_guide:"",local_photo_guide:"",english_remark_guide:"",local_remark_guide:"",failed_attempts_type:e.Unlimited,issue_type:0,sender_name:t.Skip,need_prefill_sender_name:n.Yes,recipient_name:t.Skip,need_prefill_recipient_name:n.Yes,photo_from_config:r["Camera only"],photo_options:x._V.Skip,mass_onhold_flag:void 0,mass_redeliver_flag:void 0,enable_reroute_home_delivery:void 0,enable_automatic_reroute_hd_to_sp:void 0,destination_type_list:[],order_payment_method_type:void 0,recipient_document_type:void 0,need_real_time_validation:!1,validation_type:void 0,earliest_time:void 0,block_type:void 0,proof_of_contact_view_list:[],in_app_call_times_threshold:void 0,telco_call_times_threshold:void 0,in_app_chat_need_reply:void 0,msg_screenshot_need_reply:void 0,mandatory_contact_list:[],disallowed_driver_group_ids:[]},oldForm:{status:0,type:0,english_photo_guide:"",local_photo_guide:"",english_remark_guide:"",local_remark_guide:"",failed_attempts_type:e.Unlimited,issue_type:0,sender_name:t.Skip,need_prefill_sender_name:n.Yes,recipient_name:t.Skip,need_prefill_recipient_name:n.Yes,photo_from_config:r["Camera only"],photo_options:x._V.Skip,enable_reroute_home_delivery:void 0,enable_automatic_reroute_hd_to_sp:void 0,destination_type_list:[],order_payment_method_type:void 0,recipient_document_type:void 0,need_real_time_validation:!1,validation_type:void 0,earliest_time:void 0,block_type:void 0,proof_of_contact_view_list:[],in_app_call_times_threshold:void 0,telco_call_times_threshold:void 0,in_app_chat_need_reply:void 0,msg_screenshot_need_reply:void 0,mandatory_contact_list:[],disallowed_driver_group_ids:[]},sourceFormData:{},loading:{submit:!1,detail:!1,driverGroup:!1},driverGroupOptions:[],disallowedDriverGroupSaveError:"",debouncedSearchAvailableDriverGroups:null,driverGroupSearchSequence:0,proof_type:"",descriptionData:void 0,remarkGuideLinesData:void 0,photoGuideLinesData:void 0,isInitTypeExpressDeliveryExceptionOnhold:!1,disableAllowMassOnhold:!1,isInitTypeSystemAutoOnhold:!1}},computed:(0,$.Z)({},(0,Ve.mapState)({onHoldReasonTypeEnum:function(e){return e.enums.systemEnums.on_hold_reason.type||{}},issueType:function(e){return e.enums.systemEnums.on_hold_reason.type||{}},pickupOnHoldReasonTypeEnum:function(e){return e.enums.pickupEnums.on_hold_reason_type||{}},pickupOutOfAreaStatus:function(e){return e.enums.pickupEnums.out_of_area_proof_status||{}},onHoldReasonFailedAttemptTypeMap:function(e){return e.enums.systemEnums.on_hold_reason_failed_attempt_type||{}},handoverOnHoldOptions:function(e){return(0,u.jw)(e,{dataPath:"enums.systemEnums.on_hold_reason.handover_onhold_setting_flag"})},transferorSignatureOptions:function(e){return(0,u.jw)(e,{dataPath:"enums.systemEnums.on_hold_reason.transferor_signature_flag"})},receiverSignatureOptions:function(e){return(0,u.jw)(e,{dataPath:"enums.systemEnums.on_hold_reason.receiver_signature_flag"})},photoRequireFlagMap:function(e){return e.enums.systemEnums.on_hold_reason.photo_required_flag||{}},standardRequirementConfigMap:function(e){return e.enums.systemEnums.on_hold_reason.standard_requirement_config||{}},standardBooleanConfigMap:function(e){return e.enums.systemEnums.on_hold_reason.standard_boolean_config||{}},photoFromConfigMap:function(e){return e.enums.systemEnums.on_hold_reason.photo_from_config||{}},pickUpReasonTypeOptions:function(e){return(0,u.jw)(e,{dataPath:"enums.systemEnums.on_hold_reason.pickup_reason_type"})},geofenceGreyControlOn:function(e){return e.systemConfig.cidApolloConfigValue["application.geofence"]},deliveryAddressOptionsGreyFlag:function(e){return e.systemConfig.cidApolloConfigValue["application.delivery_address_issue_flag"]},pickupOnHoldOtpSwitch:function(e){var t=e.systemConfig.apolloConfigValue["application.pickup_onhold_otp_switch"];try{return JSON.parse(t)}catch{return t}},sellerSignatureMap:function(e){return e.enums.systemEnums.on_hold_reason.seller_signature||{}},pickupStartedMap:function(e){return e.enums.systemEnums.on_hold_reason.pickup_started||{}},allowMassOnholdDelivery:function(e){return e.enums.systemEnums.support_mass_onhold_flag||!1},supportFilterRecipientType:function(e){return e.enums.systemEnums.support_filter_recipient_type||!1},filterByOrderAccount:function(e){return e.enums.systemEnums.filter_by_order_account||!1},enableIndependentOrderAccountSelection:function(e){return e.enums.systemEnums.enable_independent_order_account_selection||!1},enableOnHoldReasonDriverGroupRestriction:function(e){return e.enums.systemEnums.enable_on_hold_reason_driver_group_restriction||!1}}),{onHoldReasonSelectionVisibility:function(){return(0,Ae.S)({supportFilterRecipientType:this.supportFilterRecipientType,filterByOrderAccount:this.filterByOrderAccount,enableIndependentOrderAccountSelection:this.enableIndependentOrderAccountSelection})},showDestinationType:function(){return this.onHoldReasonSelectionVisibility.showDestinationType},showOrderAccountSelection:function(){return this.onHoldReasonSelectionVisibility.showOrderAccountSelection},orderAccountSelection:function(){return(0,u.jw)(this.$store.state,{dataPath:"enums.systemEnums.order_account"})},shouldShowAutoValidation:function(){return this.form.need_automated_validation===1&&(this.form.failed_attempts_type===this.onHoldReasonFailedAttemptTypeMap.Once||this.form.failed_attempts_type===this.onHoldReasonFailedAttemptTypeMap.Multiple)},isPickupOnHold:function(){return this.proof_type==="PICKUP_ONHOLD"},isPickupDeliveryOnHold:function(){return this.issueType.Express_Delivery_Onhold===this.form.type},photoOptions:function(){return this.isPickupDeliveryOnHold&&C.Yf&&this.form.reason_type===2?x.dE:x.$X},onHoldReasonFailedAttemptTypeOptions:function(){return(0,u.jw)(this.$store.state,{dataPath:"enums.systemEnums.on_hold_reason_failed_attempt_type"}).sort(function(e,t){return e.value-t.value})},isOutOfAreaDelivery:function(){return this.proof_type==="AREA_DELIVERY"},isOutOfAreaPickup:function(){return this.proof_type==="AREA_PICKUP"},statusOptions:function(){if(this.isOutOfAreaPickup)return(0,u.jw)(this.$store.state,{dataPath:"enums.pickupEnums.out_of_area_proof_status"});var e=(0,u.jw)(this.$store.state,{dataPath:"enums.systemEnums.on_hold_reason.status"});return e.forEach(function(t){t.label=(0,te.capitalize)(t.label)}),e},proofOfOnHoldOptions:function(){var e=this;if(this.isPickupOnHold)return(0,u.jw)(this.$store.state,{dataPath:"enums.pickupEnums.on_hold_reason_type"});var t=(0,u.jw)(this.$store.state,{dataPath:"enums.systemEnums.on_hold_reason.type"}).filter(function(s){return s.value!==e.issueType.ABNORMAL_GEOLOCATION}),n=[this.onHoldReasonTypeEnum.PICKUP,this.onHoldReasonTypeEnum.HANDOVER_TO_STATION_ONHOLD,this.onHoldReasonTypeEnum.HANDOVER_TO_DRIVER_ONHOLD];if(this.isPickupOnHold){var r=E.HH?[this.onHoldReasonTypeEnum.PICKUP]:n;return this.editMode&&r.push(this.onHoldReasonTypeEnum.PICKUP_TASK),t.filter(function(s){return r.includes(s.value)})}else return this.editMode?this.form.type===this.onHoldReasonTypeEnum.EXPRESS_DELIVERY_LOCKER_ONHOLD?t:t.filter(function(s){return s.value!==e.onHoldReasonTypeEnum.EXPRESS_DELIVERY_LOCKER_ONHOLD}):t.filter(function(s){return![].concat(n,[e.onHoldReasonTypeEnum.PICKUP_TASK,e.onHoldReasonTypeEnum.EXPRESS_DELIVERY_LOCKER_ONHOLD]).includes(s.value)})},sellerSignatureOptions:function(){var e=this,t=(0,u.jw)(this.$store.state,{dataPath:"enums.pickupEnums.onHold_reason_seller_signature"});return t.map(function(n){return E.G$&&n.value===e.sellerSignatureMap.Hidden&&(n.disabled=e.form.pickup_started===e.pickupStartedMap.Visible),n})},pickupStartedOptions:function(){var e=this,t=(0,u.jw)(this.$store.state,{dataPath:"enums.systemEnums.on_hold_reason.pickup_started"});return t.map(function(n){return E.G$&&n.value===e.pickupStartedMap.Visible&&(n.disabled=e.form.seller_signature===e.sellerSignatureMap.Hidden),n})},noOfFailedAttemptsLabel:function(){return C.G7?this.$gt("No. of Failed Attempts Before Return"):this.$gt("No. of Failed Attempts Before Dispose/Liquidate")},descriptionSchema:function(){return[{label:this.isOnHold?this.$gt("English Reason Name"):this.$gt("English Description"),key:"english_description",placeholder:this.$gt("Input")},{label:this.isOnHold?this.$gt("Local Language Reason Name"):this.$gt("Local Language Description"),key:"local_description",placeholder:this.$gt("Input")}]},basicFormSchema:function(){var e=this,t=this.$createElement,n=[{label:this.isOnHold?this.$gt("Rule Name"):this.$gt("Content"),key:"name",rules:[f.sO.REQUIRED.call(this,this.isOnHold?this.$gt("Rule Name"):this.$gt("Content")),{max:128,message:this.$gt("max length is 128"),trigger:"blur"}],props:{disabled:this.editMode}},{label:this.isOnHold?this.$gt("On-hold Scenario"):this.$gt("Type"),key:"type",type:"select",hide:this.isOutOfAreaDelivery||this.isOutOfAreaPickup,selectOptions:this.proofOfOnHoldOptions,rules:[f.sO.REQUIRED.call(this,this.isOnHold?this.$gt("On-hold Scenario"):this.$gt("Type"))],on:{change:this.typeChange},props:{disabled:this.isPickupOnHold&&E.HH&&this.proofOfOnHoldOptions.length<=1||this.editMode&&this.isExpressDeliveryExceptionOnhold&&this.isInitTypeExpressDeliveryExceptionOnhold||this.editMode&&this.isSystemAutoOnhold&&this.isInitTypeSystemAutoOnhold}},{label:this.isOnHold?this.$gt("Reason Name"):this.$gt("Description"),key:"english_description",type:"use-custom",customSlot:function(){return t("div",{key:W()(e.descriptionData||{})||"english_description"},[t(xe.Z,ee()([{attrs:{formName:"description",formData:e.descriptionData,schema:e.descriptionSchema,maxLength:250,isRequired:!0}},{on:{getFromData:function(O){for(var d=arguments.length,m=Array(d>1?d-1:0),y=1;y<d;y++)m[y-1]=arguments[y];e.getDescriptionForm.apply(e,[O].concat(m))}}}]))])}},{label:this.$gt("Disallowed Driver Group"),key:"disallowed_driver_group_ids",type:"select",selectOptions:this.driverGroupOptions,hide:!this.enableOnHoldReasonDriverGroupRestriction||!this.isOnHold||!this.checkIsReturnOrDeliveryOnhold(this.form.type),afterSlot:function(){return e.disallowedDriverGroupSaveError?t("div",{class:"disallowed-driver-group-error"},[e.disallowedDriverGroupSaveError]):null},props:{clearable:!0,filterable:!0,loading:this.loading.driverGroup,multiple:!0,multipleConcise:!0,multipleTagsLine:1,remote:!0,remoteMethod:this.debouncedSearchAvailableDriverGroups},on:{change:function(){e.disallowedDriverGroupSaveError=""},"visible-change":function(p){p&&(e.debouncedSearchAvailableDriverGroups.cancel(),e.loadAvailableDriverGroups())}}},{label:this.noOfFailedAttemptsLabel,key:"failed_attempts_type",type:"radio-group",selectOptions:this.onHoldReasonFailedAttemptTypeOptions,rules:[f.sO.REQUIRED.call(this,this.noOfFailedAttemptsLabel)],hide:!this.shouldShowFailedAttemptsBeforeReturn},{label:this.$gt("Automated Validation"),key:"need_automated_validation",type:"radio-group",style:this.shouldShowAutoValidation?{margin:"0px"}:"",rules:[f.sO.REQUIRED.call(this,this.$gt("Automated Validation"))],selectOptions:(0,u.jw)(this.$store.state,{dataPath:"enums.deliveryEnums.on_hold_reason.need_automated_validation"}),on:{change:function(p){if(p===2&&e.$refs.ruleEditor.editorValue){e.form.automated_validation_expr=e.$refs.ruleEditor.editorValue;return}}},hide:!this.supportAutoValidation||![this.issueType.Express_Delivery_Onhold,this.issueType.RETURN].includes(this.form.type)||this.form.failed_attempts_type===this.onHoldReasonFailedAttemptTypeMap.Unlimited},{label:" ",key:"automated_validation_expr",type:"use-custom",rules:[{validator:function(p,O,d){var m=e.checkAutoValidationRes,y=m.msg,A=m.data;if(A){d();return}d(new Error(y))}}],customSlot:function(){return t(We,{attrs:{initialValue:e.form.automated_validation_expr,options:e.autoValidationOptions.map(function(p){return(0,$.Z)({},p,{disabled:e.form.type===e.issueType.RETURN&&p.value===4})}),ruleEditorChange:e.ruleEditorChange,format:e.formatValidationRules},ref:"ruleEditor"})},hide:!this.shouldShowAutoValidation||!this.supportAutoValidation||![this.issueType.Express_Delivery_Onhold,this.issueType.RETURN].includes(this.form.type)},{label:this.$gt("Proof of Contact"),key:"proof_of_contact_view_list",type:"use-custom",rules:[{validator:function(p,O,d){if(!e.form.proof_of_contact_view_list||e.form.proof_of_contact_view_list.length===0){d(new Error(e.$gt("Proof of Contact should not be empty")));return}var m=[];if(e.form.proof_of_contact_view_list.includes(e.proofOfContactViewListEnum["In App Call"])&&!e.form.in_app_call_times_threshold&&m.push(e.$gt("In App Call Ring Attempt threshold should not be empty")),e.form.proof_of_contact_view_list.includes(e.proofOfContactViewListEnum["In App Call"])&&e.form.in_app_call_times_threshold&&e.form.in_app_call_times_threshold<=0&&m.push(e.$gt("In App Call Ring Attempt threshold should be greater than 0")),e.form.proof_of_contact_view_list.includes(e.proofOfContactViewListEnum["Telco Call"])&&!e.form.telco_call_times_threshold&&m.push(e.$gt("Telco Call Ring Attempt threshold should not be empty")),e.form.proof_of_contact_view_list.includes(e.proofOfContactViewListEnum["Telco Call"])&&e.form.telco_call_times_threshold&&e.form.telco_call_times_threshold<=0&&m.push(e.$gt("Telco Call Ring Attempt threshold should be greater than 0")),e.form.proof_of_contact_view_list.includes(e.proofOfContactViewListEnum["In-App Chat"])&&e.form.in_app_chat_need_reply===void 0&&m.push(e.$gt("In-App Chat Need Buyer Reply should not be empty")),e.form.proof_of_contact_view_list.includes(e.proofOfContactViewListEnum["Message Screenshot/Photo"])&&e.form.msg_screenshot_need_reply===void 0&&m.push(e.$gt("Message Screenshot/Photo Need Buyer Reply should not be empty")),m.length>0){d(new Error(m.join(", ")));return}d()},trigger:"change",required:!0}],customSlot:function(){var p=e.$createElement;return p(nt,{props:{form:e.form}})},hide:!this.isProofOfContactExists||!this.supportProofOfContact},{label:this.$gt("Delivery Address Issue"),key:"delivery_address_issue_flag",type:"radio-group",selectOptions:[{label:this.$gt("NO"),value:0},{label:this.$gt("YES"),value:1}],slot:{iconName:"information",popover:{slot:this.$gt("if Delivery address issue = Yes, the on-hold order will trigger address Update flow.")}},rules:[f.sO.REQUIRED.call(this,this.$gt("Delivery Address Issue"))],hide:!this.isExpressDeliveryOnHold||!this.deliveryAddressOptionsGreyFlag},{label:this.$gt("Reason Type"),key:"reason_type",type:this.isOnHold?"radio-group":"select",hide:this.isHiddenReasonType,selectOptions:this.reasonTypeOptions,slot:this.issueType.RETURN===this.form.type&&this.supportAutoValidation?{iconName:"information",popover:{slot:this.$gt("ROS mode is not available for RTS orders.")}}:void 0,rules:[f.sO.REQUIRED.call(this,this.$gt("Reason Type"))],on:{change:this.reasonTypeChange}}].filter(function(a){return!a.hide}),r={label:this.$gt("Issue Type"),key:"issue_type",type:"select",selectOptions:[{label:"Driver Issues",value:0},{label:"Seller Issues",value:1,disabled:E.A6}],rules:[f.sO.REQUIRED.call(this,this.$gt("ISSUE TYPE"))],props:{disabled:!(0,u.wD)(this.$store,ct)},slot:{popover:{slot:`<span>
              `+this.$gt("Seller\u2019s Fault = On-hold is caused by seller such as improper packaging or seller requested to cancel. The system will trigger pickup failure after a certain number of seller\u2019s fault type of on-hold is reached.")+`
              <br/><br/>
              `+(E.NI?this.$gt("Driver\u2019s Fault = On-hold is caused by driver or natural causes such as natural disaster, insufficient pickup times, and others. System will revert order status back to created. Onhold orders due to Driver\u2019s Fault will be evaluated for extension of order cancellation."):this.$gt("Driver\u2019s Fault = On-hold is caused by driver or natural causes such as natural disaster, insufficient pickup times, and others. System will revert order status back to created."))+`
            </span>`,className:"issue-type-popover"},iconName:"information"}},s={label:this.$gt("Need allocation again"),key:"need_allocation_again",type:"radio-group",selectOptions:[{label:"Need Allocation",value:1},{label:"Not Need Allocation",value:0}],rules:[f.sO.REQUIRED.call(this,this.$gt("APP Delivery Reattempt"))]},o={label:this.$gt("Reason Type"),key:"pickup_reason_type",type:"select",selectOptions:this.pickUpReasonTypeOptions,rules:[f.sO.REQUIRED.call(this,this.$gt("Reason Type"))],slot:{popover:{slot:`<span>
              `+this.$gt("Remote reason does not require driver to visit seller location (i.e. disaster).")+`
              <br/><br/>
              `+this.$gt("On-site reason requires driver to visit seller location (i.e. improper packaging) and geolocation of driver will be cross-checked with seller geolocation when putting order / task on-hold.")+`
            </span>`,className:"issue-type-popover"},iconName:"information"}};this.form.type!==void 0&&this.isPickupDeliveryOnHold&&n.push(this.deliveryOnHoldIssueTypeFormItem),this.form.type!==void 0&&this.form.type===this.issueType.P2P_PICKUP_FAIL&&(n.push(r),n.push(s)),this.checkIsPickupReasonType(this.form.type)&&(n.push(r),this.geofenceGreyControlOn&&n.push(o)),this.isPickupOnHold&&this.checkIsPickupReasonType(this.form.type)&&n.push(this.destinationTypeFormItem),[this.issueType.Express_Delivery_Onhold,this.issueType.RETURN,this.issueType.EXPRESS_DELIVERY_LOCKER_ONHOLD].includes(this.form.type)&&(n.push(this.isOnHold?(0,$.Z)({},this.deliveryOnHoldDestinationTypeFormItem,{hide:!this.showDestinationType}):this.deliveryDestinationTypeFormItem),this.isOnHold&&[this.issueType.Express_Delivery_Onhold].includes(this.form.type)&&this.form.destination_type_list&&this.form.destination_type_list.includes(this.deliveryDestinationTypeEnum.Recipient)&&n.push(this.deliveryAutomaticRerouteHdToSpFormItem)),([this.issueType.Express_Delivery_Onhold].includes(this.form.type)||this.issueType.RETURN===this.form.type&&this.supportAutoValidation)&&C.oj&&n.push(this.deliveryOrderPaymentMethodTypeFormItem),[this.issueType.Express_Delivery_Onhold].includes(this.form.type)&&C.S1&&!this.supportAutoValidation&&n.push(this.deliveryRecipientDocumentTypeFormItem);var c=this.isOnHold?this.showOrderAccountSelection:this.supportAutoValidation&&this.form.destination_type_list.includes(this.deliveryDestinationTypeEnum.Recipient);return([this.issueType.Express_Delivery_Onhold].includes(this.form.type)||this.issueType.RETURN===this.form.type)&&c&&(n.push({type:"radio-group",key:"filter_by_order_account",label:this.$gt("Filter by Order Account"),rules:[f.sO.REQUIRED.call(this,this.$gt("Filter by Order Account"))],selectOptions:(0,u.jw)(this.$store.state,{dataPath:"enums.deliveryEnums.on_hold_reason.need_filter_by_order_account"}),on:{change:function(p){(0,Ae.t)(p,e.needFilterByOrderAccount.Yes)&&(e.form.order_account_list=[])}}}),this.form.filter_by_order_account===this.needFilterByOrderAccount.Yes&&n.push({type:"select",key:"order_account_list",label:this.$gt("Order Account"),rules:[f.sO.REQUIRED.call(this,this.$gt("Order Account"))],selectOptions:this.orderAccountSelection,props:{multiple:!0,multipleConcise:!0}})),[this.issueType.Express_Delivery_Onhold].includes(this.form.type)&&(n.push(this.deliveryRealTimeValidationFormItem(this.realTimeValidationChange)),n.push(this.deliveryValidationTypeFormItem(!this.form.need_real_time_validation,this.validationTypeChange,!1)),this.form.validation_type===this.validationTypeEnum["Mandatory to Contact Buyer/Seller"]&&n.push(this.deliveryMandatoryToContactSellerFormItem),n.push(this.deliveryEarliestTimeFormItem(!this.form.need_real_time_validation||this.form.validation_type!==this.validationTypeEnum["Insufficient Time"])),n.push(this.deliveryBlockTypeFormItem(!this.form.need_real_time_validation||this.form.validation_type!==this.validationTypeEnum["Insufficient Time"])),n.push({label:this.$gt("Allow Redelivery Request"),key:"allow_redelivery_request",type:"radio-group",rules:[f.sO.REQUIRED.call(this,this.$gt("Allow Redelivery Request"))],selectOptions:(0,u.jw)(this.$store.state,{dataPath:"enums.deliveryEnums.on_hold_reason.allow_redelivery_request"})})),this.issueType.RETURN===this.form.type&&this.supportAutoValidation&&(n.push(this.deliveryRealTimeValidationFormItem(this.realTimeValidationChange)),n.push(this.deliveryValidationTypeFormItem(!this.form.need_real_time_validation,this.validationTypeChange,!0)),this.form.validation_type===this.validationTypeEnum["Mandatory to Contact Buyer/Seller"]&&n.push(this.deliveryMandatoryToContactSellerFormItem),n.push(this.deliveryEarliestTimeFormItem(!this.form.need_real_time_validation||this.form.validation_type!==this.validationTypeEnum["Insufficient Time"])),n.push(this.deliveryBlockTypeFormItem(!this.form.need_real_time_validation||this.form.validation_type!==this.validationTypeEnum["Insufficient Time"]))),this.form.destination_type_list&&this.form.destination_type_list.some(function(a){return[e.deliveryDestinationTypeEnum.SP,e.deliveryDestinationTypeEnum.Locker].includes(a)})&&n.push(this.deliveryRerouteToHomeFormItem),n.push({label:this.isOnHold?this.$gt("Rule Status"):this.$gt("Status"),key:"status",type:"radio-group",disabled:this.isExpressDeliveryExceptionOnhold||this.isSystemAutoOnhold,selectOptions:this.statusOptions,rules:[f.sO.REQUIRED.call(this,this.$gt("Rule Status"))]}),n},isHandoverOnHold:function(){return E.H_&&this.getOnHoldReasonTypeLabel(this.form.type)==="HANDOVER_TO_STATION_ONHOLD"},isHandoverToDriverOnHold:function(){return E.H_&&this.getOnHoldReasonTypeLabel(this.form.type)==="HANDOVER_TO_DRIVER_ONHOLD"},isP2POnHoldReason:function(){var e=this.form.type;return[this.onHoldReasonTypeEnum.P2P_PICKUP_FAIL,this.onHoldReasonTypeEnum.P2P_DELIVERY_ON_HOLD,this.onHoldReasonTypeEnum.P2P_RETURN_ON_HOLD].includes(e)},isP2PType:function(){return["P2P_DELIVERY_ON_HOLD","P2P_PICKUP_FAIL","P2P_RETURN_ON_HOLD"].includes(this.getOnHoldReasonTypeLabel(this.form.type))},isSkipRemark:function(){return this.form.remark_required_flag===rt},isSkipPhoto:function(){return this.form.photo_options===x._V.Skip},remarkTextSchema:function(){var e=this,t=this.$createElement;return[{label:this.$t("Remark Guidelines"),key:"english_remark_guide",type:"use-custom",customSlot:function(){return t("div",{key:W()(e.remarkGuideLinesData||{})||"remark"},[t(xe.Z,ee()([{attrs:{formName:"remark",formData:e.remarkGuideLinesData,schema:e.onHold_remarkGuideLineSchema,maxLength:250,isRequired:!0}},{on:{getFromData:function(s){for(var o=arguments.length,c=Array(o>1?o-1:0),a=1;a<o;a++)c[a-1]=arguments[a];e.getRemarkGuideLineForm.apply(e,[s].concat(c))}}}]))])}}]},photoGuideSchema:function(){var e=this,t=this.$createElement;return this.form.photo_options&&x._V.Skip!==this.form.photo_options?[{label:this.$t("Photo Guidelines"),key:"english_photo_guide",type:"use-custom",customSlot:function(){return t("div",{key:W()(e.photoGuideLinesData||{})||"photo"},[t(xe.Z,ee()([{attrs:{formName:"photo",formData:e.photoGuideLinesData,hasTips:!0,schema:e.onHold_photoGuideLinesSchema,maxLength:500,isRequired:!0}},{on:{getFromData:function(s){for(var o=arguments.length,c=Array(o>1?o-1:0),a=1;a<o;a++)c[a-1]=arguments[a];e.getPhotoGuideLineForm.apply(e,[s].concat(c))}}}]))])}}]:[]},sellerSignatureTooltip:function(){var e=[this.$gt(" This configuration is to define if this on-hold reason requires seller to provide signature")];return E.G$&&e.push(this.$gt("Seller Signature must be Visible if Pickup Started.")),e.map(function(t){return"<p>"+t+"</p>"}).join("<br/>")},pickupStartedTooltip:function(){var e=[this.$gt("This configuration is to define if this on-hold reason should be displayed to driver If driver has picked up at least 1 parcel from a shop.")];return E.G$&&e.push(this.$gt("Seller Signature must be Visible if Pickup Started.")),e.map(function(t){return"<p>"+t+"</p>"}).join("<br/>")},detailFormSchema:function(){var e=this,t=this.isP2PType?[{label:this.$gt("Notifications after submitted (English)"),key:"english_notification",rules:[f.sO.REQUIRED.call(this,this.$gt("Notifications after submitted (English)"))]},{label:this.$gt("Notifications after submitted (Local language)"),key:"local_notification",rules:[f.sO.REQUIRED.call(this,this.$gt("Notifications after submitted (Local language)"))]}]:[],n=this.isP2POnHoldReason?[]:[{label:this.$gt("APP Delivery Reattempt"),key:"reattempt_display_flag",type:"radio-group",selectOptions:(0,u.jw)(this.$store.state,{dataPath:"enums.systemEnums.on_hold_reason.reattempt_display_flag"}),rules:[f.sO.REQUIRED.call(this,this.$gt("APP Delivery Reattempt"))]}];if(this.isHandoverOnHold)return[this.genSelectSchema(this.$gt("Station Signature"),"station_signature_flag",this.handoverOnHoldOptions),this.genSelectSchema(this.$gt("Driver Signature"),"driver_signature_flag",this.handoverOnHoldOptions),this.genSelectSchema(this.$gt("Remark"),"remark_required_flag",this.handoverOnHoldOptions)].concat((0,R.Z)(this.isSkipRemark?[]:this.remarkTextSchema),[this.genSelectSchema(this.$gt("Photo"),"photo_options",this.photoOptions)],(0,R.Z)(this.isSkipPhoto?[]:this.photoGuideSchema));if(this.isHandoverToDriverOnHold){var r=["SKIP","MANDATORY","OPTIONAL"];return[this.genSelectSchema(this.$gt("Transferor Signature"),"transferor_signature_flag",this.transferorSignatureOptions),this.genSelectSchema(this.$gt("Receiver Signature"),"receiver_signature_flag",this.receiverSignatureOptions),this.genSelectSchema(this.$gt("Remark"),"remark_required_flag",this.sortOptionsByLabel(this.handoverOnHoldOptions,r))].concat((0,R.Z)(this.remarkTextSchema),[this.genSelectSchema(this.$gt("Photo"),"photo_options",this.photoOptions)],(0,R.Z)(this.photoGuideSchema))}return[].concat(n,[{label:this.$gt("Sender Name"),key:"sender_name",type:"radio-group",selectOptions:(0,u.jw)(this.$store.state,{dataPath:"enums.pickupEnums.onHold_reason_seller_name"}),rules:[f.sO.REQUIRED.call(this,this.$gt("Sender Name"))],hide:function(){return E.wr?!e.checkIsPickupReasonType(e.form.type):!0}},{label:this.$t("Pre-fill Sender Name"),key:"need_prefill_sender_name",type:"radio-group",rules:[f.sO.REQUIRED.call(this,this.$t("Pre-fill Sender Name"))],selectOptions:(0,u.jw)(this.$store.state,{dataPath:"enums.pickupEnums.onHold_reason_pre_fill_seller_name"}),hide:function(){if(!E.wr)return!0;var o=e.form,c=e.standardRequirementConfigMap,a=e.checkIsPickupReasonType(o.type),p=[c.Mandatory,c.Optional].includes(o.sender_name);return!(a&&p)}},{label:this.$gt("Driver Signature"),key:"driver_signature_flag",type:"radio-group",selectOptions:(0,u.jw)(this.$store.state,{dataPath:"enums.pickupEnums.onHold_reason_driver_signature"}),rules:[f.sO.REQUIRED.call(this,this.$gt("Driver Signature"))],hide:function(){return!e.checkIsPickupReasonType(e.form.type)}},{label:this.$gt("Recipient Name"),key:"recipient_name",type:"radio-group",selectOptions:(0,u.jw)(this.$store.state,{dataPath:"enums.systemEnums.on_hold_reason.standard_requirement_config"}),rules:[f.sO.REQUIRED.call(this,this.$gt("Recipient Name"))],hide:function(){return E.gA?e.form.type!==e.issueType.RETURN:!0}},{label:this.$t("Pre-fill Recipient Name"),key:"need_prefill_recipient_name",type:"radio-group",rules:[f.sO.REQUIRED.call(this,this.$t("Pre-fill Recipient Name"))],selectOptions:(0,u.jw)(this.$store.state,{dataPath:"enums.systemEnums.on_hold_reason.standard_boolean_config"}),hide:function(){if(!E.gA)return!0;var o=e.form,c=e.issueType,a=e.standardRequirementConfigMap,p=o.type===c.RETURN,O=[a.Mandatory,a.Optional].includes(o.recipient_name);return!(p&&O)}},{className:"photo-options",label:this.$gt("Photo"),key:"photo_options",type:"radio-group",selectOptions:this.photoOptions,rules:[f.sO.REQUIRED.call(this,this.$gt("Photo"))]},{label:C.G7?this.$gt("FM OTP"):this.$gt("OTP Validation"),className:"photo-options-validation",key:"otp_validation",type:"radio-group",selectOptions:x.Eg,rules:[f.sO.REQUIRED.call(this,C.G7?this.$gt("FM OTP"):this.$gt("OTP Validation"))],hide:function(){return!e.checkIsPickupReasonType(e.form.type)||ut(e.pickupOnHoldOtpSwitch)}}],(0,R.Z)(this.photoGuideSchema),[{label:this.$gt("Photo Configuration"),key:"photo_from_config",type:"radio-group",rules:[f.sO.REQUIRED.call(this,this.$gt("Photo Configuration"))],slot:{iconName:"information",popover:{slot:x.Me}},selectOptions:J()(this.PhotoFormConfigTrans).map(function(s){return{label:e.PhotoFormConfigTrans[s],value:Number(s)}}),hide:function(){return e.form.photo_options===x._V.Skip?!0:!e.shouldShowPhotoConf}},{label:this.$gt("Remark"),key:"remark_required_flag",type:"radio-group",selectOptions:(0,u.jw)(this.$store.state,{dataPath:"enums.systemEnums.on_hold_reason.remark_required_flag"}).filter(function(s){var o=s.label;return o!=="Skip"}),rules:[f.sO.REQUIRED.call(this,this.$gt("Input remark"))]}],(0,R.Z)(this.remarkTextSchema),[{label:this.$gt("Allow mass on-hold"),key:"mass_onhold_flag",type:"radio-group",selectOptions:[{label:this.$gt("YES"),value:2},{label:this.$gt("NO"),value:1}],disabled:this.disableAllowMassOnhold||this.form.validation_type&&(this.form.validation_type===this.validationTypeEnum["Mandatory to Contact Buyer"]||this.form.validation_type===this.validationTypeEnum["Mandatory to Contact Buyer/Seller"]),rules:[f.sO.REQUIRED.call(this,this.$gt("Please select"))],hide:function(){return e.allowMassOnholdDelivery?!e.checkIsReturnOrDeliveryOnhold(e.form.type):!0}},{label:this.$gt("Allow mass redelivery"),key:"mass_redeliver_flag",type:"radio-group",selectOptions:[{label:this.$gt("YES"),value:2},{label:this.$gt("NO"),value:1}],rules:[f.sO.REQUIRED.call(this,this.$gt("Please select"))],hide:function(){return e.allowMassOnholdDelivery?!e.checkIsReturnOrDeliveryOnhold(e.form.type):!0}}],t,[{label:this.$gt("Seller Signature"),key:"seller_signature",type:"radio-group",selectOptions:this.sellerSignatureOptions,rules:[f.sO.REQUIRED.call(this,this.$gt("Seller Signature"))],slot:{popover:{slot:this.sellerSignatureTooltip,className:"issue-type-popover"},iconName:"information"},hide:function(){return!e.checkIsPickupReasonType(e.form.type)}},{label:this.$gt("Pickup Started"),key:"pickup_started",type:"radio-group",selectOptions:this.pickupStartedOptions,rules:[f.sO.REQUIRED.call(this,this.$gt("Pickup Started"))],slot:{popover:{slot:this.pickupStartedTooltip,className:"issue-type-popover"},iconName:"information"},hide:function(){return!e.checkIsPickupReasonType(e.form.type)}}])},isExpressDeliveryExceptionOnhold:function(){return this.checkIsExpressDeliveryExceptionOnhold(this.form.type)},isSystemAutoOnhold:function(){return this.checkIsSystemAutoOnhold(this.form.type)},showAppProof:function(){return this.form.type!==this.onHoldReasonTypeEnum.LH_RETURN_TO_SELLER&&this.form.type!==this.onHoldReasonTypeEnum.ABNORMAL_GEOLOCATION&&!this.isExpressDeliveryExceptionOnhold&&!this.isSystemAutoOnhold},isExpressDeliveryOnHold:function(){return this.form.type===this.onHoldReasonTypeEnum.Express_Delivery_Onhold},isOnHoldReasonReturnType:function(){return this.form.type===this.onHoldReasonTypeEnum.RETURN},shouldShowFailedAttemptsBeforeReturn:function(){return this.isExpressDeliveryOnHold||this.isOnHoldReasonReturnType},proofTypeText:function(){return this.isOutOfAreaDelivery||this.isOutOfAreaPickup?this.$gt("out-of-area"):this.$gt("on-hold")},shouldShowPhotoConf:function(){var e=this.form,t=this.issueType,n=this.checkIsPickupReasonType(e.type)||e.type===t.RETURN,r=e.photo_options!==x._V.Skip;return n&&r||this.proof_type==="ONHOLD"},isHiddenReasonType:function(){return!C.QD||this.form.type!==this.onHoldReasonTypeEnum.Express_Delivery_Onhold&&this.form.type!==this.onHoldReasonTypeEnum.RETURN},reasonTypeOptions:function(){return[{label:this.$gt("Normal"),value:1},{label:C.fZ?this.$gt("Co-Check"):this.$gt("Return on the Spot"),value:2,disabled:this.issueType.RETURN===this.form.type&&this.supportAutoValidation}]},isViewDetail:function(){return this.isPickupOnHold&&!(0,u.wD)(this.$store,"PICKUP_UPDATE_ON_HOLD_REASON")},isOnHold:function(){return this.proof_type==="ONHOLD"}}),watch:{"form.remark":function(){var i=(0,S.Z)(v().mark(function t(n,r){return v().wrap(function(o){for(;;)switch(o.prev=o.next){case 0:if(!(this.ruleFiledValueMap.SKIP===n&&(this.form.remark_guide_english||this.form.remark_guide_local))){o.next=14;break}return o.prev=1,o.next=4,this.$confirm({title:this.$gt("Notice"),message:this.$gt("If the remark option is changed to skip, the filled remark guideline will be cleared, are you sure you want to continue?"),confirmButtonText:this.$gt("Yes"),cancelButtonText:this.$gt("No")});case 4:this.form.english_remark_guide="",this.form.local_remark_guide="",this.remarkGuideLinesData=void 0,o.next=14;break;case 9:return o.prev=9,o.t0=o.catch(1),n=r,this.form.remark=r,o.abrupt("return");case 14:case"end":return o.stop()}},t,this,[[1,9]])}));function e(t,n){return i.apply(this,arguments)}return e}(),"form.photo_options":function(){var i=(0,S.Z)(v().mark(function t(n,r){return v().wrap(function(o){for(;;)switch(o.prev=o.next){case 0:if(!(x._V.Skip===n&&(this.form.english_photo_guide||this.form.local_photo_guide||this.form.photo_overall_guideline_english||this.form.photo_overall_guideline_local))){o.next=18;break}return o.prev=1,o.next=4,this.$confirm({title:this.$gt("Notice"),message:this.$gt("If the photo option is changed to skip, the filled photo guidelines will be cleared, are you sure you want to continue?"),confirmButtonText:this.$gt("Yes"),cancelButtonText:this.$gt("No")});case 4:this.form.english_photo_guide="",this.form.local_photo_guide="",this.form.photo_overall_guideline_english="",this.form.photo_overall_guideline_local="",this.photoGuideLinesData=void 0,this.form.photo_from_config=this.photoFromConfigMap["Camera only"],o.next=18;break;case 12:return o.prev=12,o.t0=o.catch(1),n=r,this.form.photo_options=r,console.info(o.t0),o.abrupt("return");case 18:case"end":return o.stop()}},t,this,[[1,12]])}));function e(t,n){return i.apply(this,arguments)}return e}(),"form.type":function(e,t){var n=this.form,r=this.issueType,s=this.standardRequirementConfigMap,o=this.checkIsPickupReasonType(e),c=e===r.RETURN,a=this.checkIsExpressDeliveryExceptionOnhold(e),p=this.checkIsSystemAutoOnhold(e);(a||p)&&(n.status=0),o||(n.sender_name=s.Skip),c?this.supportAutoValidation&&(n.reason_type=1,n.order_payment_method_type=1,this.form.need_real_time_validation&&(n.validation_type=2)):n.recipient_name=s.Skip,!(o||c)&&t!==void 0&&(n.photo_from_config=this.photoFromConfigMap["Camera only"]),!Ne()(t)&&this.checkIsReturnOrDeliveryOnhold(e)&&!this.checkIsReturn(t)&&!this.checkIsDeliveryOnhold(t)&&this.handleDefaultValueForMassOnholdRedelivery(e)},"form.sender_name":function(e){var t=this.form,n=this.standardRequirementConfigMap,r=this.standardBooleanConfigMap;e===n.Skip&&(t.need_prefill_sender_name=r.Yes)},"form.recipient_name":function(e){var t=this.form,n=this.standardRequirementConfigMap,r=this.standardBooleanConfigMap;e===n.Skip&&(t.need_prefill_recipient_name=r.Yes)},"form.seller_signature":function(e){if(E.G$){var t=this.form,n=this.sellerSignatureMap,r=this.pickupStartedMap;e===n.Hidden&&t.pickup_started===r.Visible&&(t.pickup_started=void 0)}},"form.pickup_started":function(e){if(E.G$){var t=this.form,n=this.sellerSignatureMap,r=this.pickupStartedMap;e===r.Visible&&t.seller_signature===n.Hidden&&(t.seller_signature=void 0)}},"form.reason_type":function(e){e===2?(this.disableAllowMassOnhold=!0,this.form.mass_onhold_flag=1):this.disableAllowMassOnhold=!1},"form.destination_type_list":function(e){var t=this,n=e.some(function(s){return[t.deliveryDestinationTypeEnum.SP,t.deliveryDestinationTypeEnum.Locker].includes(s)});n||(this.form.enable_reroute_home_delivery=this.deliveryRouteToHomeEnum.No),n&&!this.form.enable_reroute_home_delivery&&(this.form.enable_reroute_home_delivery=this.deliveryRouteToHomeEnum.No);var r=e.includes(this.deliveryDestinationTypeEnum.Recipient);r?this.form.enable_automatic_reroute_hd_to_sp||(this.form.enable_automatic_reroute_hd_to_sp=this.deliveryAutomaticRerouteHdToSpEnum.No):this.form.enable_automatic_reroute_hd_to_sp=this.deliveryAutomaticRerouteHdToSpEnum.No}},beforeRouteLeave:function(){var i=(0,S.Z)(v().mark(function t(n,r,s){var o=this;return v().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:if(!((0,te.isEqual)(this.oldForm,this.form)||this.skipConfirmation)){a.next=3;break}return s(),a.abrupt("return");case 3:setTimeout(function(){o.$confirm({title:o.$gt("Notice"),message:o.$gt("Are you sure to cancel? Unsaved changes will be lost."),confirmButtonText:o.$gt("Yes"),cancelButtonText:o.$gt("No")}).then(function(){s()}).catch(function(){s(!1)})},200);case 4:case"end":return a.stop()}},t,this)}));function e(t,n,r){return i.apply(this,arguments)}return e}(),created:function(){var i=(0,S.Z)(v().mark(function t(){var n,r,s,o,c,a;return v().wrap(function(O){for(;;)switch(O.prev=O.next){case 0:n=this.$route.params.action,r=n===void 0?"detail":n,s=this.$route.query,o=s.id,c=o===void 0?"":o,a=s.proof_type,this.proof_type=a,this.editMode=r!=="create",this.form.code=c,this.form.type=this.isOutOfAreaDelivery||this.isOutOfAreaPickup?this.issueType.ABNORMAL_GEOLOCATION:void 0,this.debouncedSearchAvailableDriverGroups=(0,te.debounce)(this.searchAvailableDriverGroups,f.ut),this.editMode?this.isOutOfAreaPickup?this.loadPickupOutOfAreaReasonDetail():this.loadOnholdReasonDetail():this.handleDefaultValueForMassOnholdRedelivery(this.form.type),this.isPickupOnHold&&E.HH&&(this.form.type=this.onHoldReasonTypeEnum.PICKUP),this.updateBreadcrumb();case 10:case"end":return O.stop()}},t,this)}));function e(){return i.apply(this,arguments)}return e}(),beforeDestroy:function(){this.debouncedSearchAvailableDriverGroups&&this.debouncedSearchAvailableDriverGroups.cancel()},methods:{loadAvailableDriverGroups:function(){var i=(0,S.Z)(v().mark(function t(){var n=arguments.length>0&&arguments[0]!==void 0?arguments[0]:"",r,s,o,c,a,p;return v().wrap(function(d){for(;;)switch(d.prev=d.next){case 0:return r=++this.driverGroupSearchSequence,d.prev=1,(0,u.K4)(this,"driverGroup",!0),s={pageno:1,count:n?st:f.qc,driver_group_status:lt},n&&(s.driver_group_name=pt(n)),d.next=7,Be.Z.loadDriverGroupDropdownList(s);case 7:if(o=d.sent,c=o.data,c=c===void 0?{}:c,a=c.list,p=a===void 0?[]:a,r===this.driverGroupSearchSequence){d.next=13;break}return d.abrupt("return");case 13:this.driverGroupOptions=(0,u.Fo)(p.map(function(m){return{label:m.driver_group_name,value:m.id}})),d.next=20;break;case 16:d.prev=16,d.t0=d.catch(1),r===this.driverGroupSearchSequence&&(this.driverGroupOptions=[]),console.error("load available driver group list error: ",d.t0);case 20:return d.prev=20,r===this.driverGroupSearchSequence&&(0,u.K4)(this,"driverGroup",!1),d.finish(20);case 23:case"end":return d.stop()}},t,this,[[1,16,20,23]])}));function e(){return i.apply(this,arguments)}return e}(),searchAvailableDriverGroups:function(e){this.loadAvailableDriverGroups(e)},getListRoute:function(){return this.$route.query.entry==="delivery"&&this.proof_type==="AREA_DELIVERY"?"/delivery/out-of-area-delivery-list?proof_type=AREA_DELIVERY":(0,ze.j4)(this.proof_type,this.$route)},formatValidationRules:function(e){return J()(this.autoValidationMappings).indexOf(e+"")===-1?e:this.autoValidationMappings[e]},ruleEditorChange:function(e){this.isProofOfContactExists=e.indexOf("4")!==-1},checkAutoValidationExpr:function(){var i=(0,S.Z)(v().mark(function t(){var n,r,s,o;return v().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:if(n=this.$refs.ruleEditor.editorValue,n){a.next=4;break}return this.checkAutoValidationRes={data:!1,msg:f.sO.REQUIRED.call(this,this.$gt("Automated Validation Expr")).message},a.abrupt("return");case 4:return a.next=6,Ge.checkAutoValidation({expr:n});case 6:return r=a.sent,s=r.message,o=r.data,this.checkAutoValidationRes={data:o,msg:s},a.abrupt("return");case 11:case"end":return a.stop()}},t,this)}));function e(){return i.apply(this,arguments)}return e}(),checkIsExpressDeliveryExceptionOnhold:function(e){return e===this.onHoldReasonTypeEnum.EXPRESS_DELIVERY_EXCEPTION_ONHOLD},checkIsPickupReasonType:function(e){var t=this.pickupOnHoldReasonTypeEnum;return[t.PICKUP,t["FBS Pickup"]].includes(e)},checkIsReturn:function(e){return e===this.onHoldReasonTypeEnum.RETURN},checkIsDeliveryOnhold:function(e){return e===this.onHoldReasonTypeEnum.Express_Delivery_Onhold},checkIsReturnOrDeliveryOnhold:function(e){return[this.onHoldReasonTypeEnum.RETURN,this.onHoldReasonTypeEnum.Express_Delivery_Onhold].includes(e)},handleDefaultValueForMassOnholdRedelivery:function(e){this.checkIsReturnOrDeliveryOnhold(e)&&(this.form.mass_onhold_flag=1,this.form.mass_redeliver_flag=1)},getRemarkGuideLineForm:function(e){this.form=(0,$.Z)({},this.form,e),this.remarkGuideLinesData=e},getPhotoGuideLineForm:function(e){this.form=(0,$.Z)({},this.form,e),this.photoGuideLinesData=e},getDescriptionForm:function(e){this.form=(0,$.Z)({},this.form,e),this.descriptionData=e},sortOptionsByLabel:function(e,t){return e.sort(function(n,r){return t.indexOf(n.label)-t.indexOf(r.label)})},genSelectSchema:function(e,t,n){return{label:e,key:t,type:"radio-group",selectOptions:n,rules:[f.sO.REQUIRED.call(this,e)]}},updateBreadcrumb:function(){var e=this.getListRoute(),t=[{link:void 0,title:this.$t("Basic Data")},{link:e,title:this.$t("Proof Configuration")},{link:"",title:this.$t("Proof Configuration Detail")}];this.$store.dispatch("sharedBreadcrumb/updateBreadcrumb",t)},confirm:function(e){return this.$confirm(e,this.$gt("Notice"),{confirmButtonText:this.$gt("Confirm"),cancelButtonText:this.$gt("Cancel"),type:"warning"})},back:function(){var i=(0,S.Z)(v().mark(function t(){var n=arguments.length>0&&arguments[0]!==void 0?arguments[0]:!1,r;return v().wrap(function(o){for(;;)switch(o.prev=o.next){case 0:if(r=this.getListRoute(),!((0,te.isEqual)(this.oldForm,this.form)||n)){o.next=4;break}return this.$router.push(r),o.abrupt("return");case 4:return o.prev=4,o.next=7,this.$confirm({title:this.$gt("Notice"),message:this.$gt("Are you sure to cancel? Unsaved changes will be lost."),confirmButtonText:this.$gt("Yes"),cancelButtonText:this.$gt("No")});case 7:this.skipConfirmation=!0,this.$router.push(r),o.next=14;break;case 11:o.prev=11,o.t0=o.catch(4),console.error("close confirm dialog:",o.t0);case 14:case"end":return o.stop()}},t,this,[[4,11]])}));function e(){return i.apply(this,arguments)}return e}(),submit:function(){var i=(0,S.Z)(v().mark(function t(){var n,r,s,o;return v().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:if(!(this.supportAutoValidation&&this.shouldShowAutoValidation&&this.checkIsReturnOrDeliveryOnhold)){a.next=3;break}return a.next=3,this.checkAutoValidationExpr();case 3:return(0,ue.SN)(this.$refs.basicForm,"basicForm"),n=this.$refs.basicForm.$children.filter(function(p){return p.schema&&["english_description"].includes(p.schema.key)}),r=[],this.showAppProof&&(r=this.$refs.detailForm.$children.filter(function(p){return p.schema&&["english_remark_guide","english_photo_guide"].includes(p.schema.key)}),(0,ue.SN)(this.$refs.detailForm,"detailForm")),s=[].concat((0,R.Z)(n),(0,R.Z)(r)),s.length&&s.forEach(function(p){(0,ue.SN)(p.$children[0].$children[0].$children[0],"guidelineForm")}),a.prev=9,o=this.editMode?this.$gt("Are you sure to edit {proofTypeText} reason?",null,{proofTypeText:this.proofTypeText}):this.$gt("Are you sure to create new {proofTypeText} reason?",null,{proofTypeText:this.proofTypeText}),a.next=13,this.confirm(o);case 13:if(!this.isOutOfAreaPickup){a.next=15;break}return a.abrupt("return",this.updatePickupOutOfAreaReason());case 15:return a.abrupt("return",this.updateOnHoldReason());case 18:a.prev=18,a.t0=a.catch(9),console.error("close confirm dialog:",a.t0);case 21:case"end":return a.stop()}},t,this,[[9,18]])}));function e(){return i.apply(this,arguments)}return e}(),updateOnHoldReason:function(){var i=(0,S.Z)(v().mark(function t(){var n=this,r,s,o,c,a,p,O,d,m,y,A,M,N,w,V,L,G,Z,P,I,j,H,B,Y,K,_,ne,ie,U,oe,Q,ae,re,X,se,le;return v().wrap(function(g){for(;;)switch(g.prev=g.next){case 0:if(g.prev=0,this.disallowedDriverGroupSaveError="",r=this.editMode?"updateOnHoldReason":"createOnHoldReason",(0,u.K4)(this,"submit",!0),s=this.form,o=s.code,c=s.english_notification,a=s.local_notification,p=s.type,O=s.failed_attempts_type,d=s.reason_type,m=s.destination_type_list,y=s.need_automated_validation,A=s.order_account_list,M=s.filter_by_order_account,N=s.proof_of_contact_view_list,w=N===void 0?[]:N,V=s.in_app_chat_need_reply,L=s.msg_screenshot_need_reply,G=s.disallowed_driver_group_ids,Z=G===void 0?[]:G,P=s.in_app_call_times_threshold,I=s.telco_call_times_threshold,j=(0,pe.Z)(s,["code","english_notification","local_notification","type","failed_attempts_type","reason_type","destination_type_list","need_automated_validation","order_account_list","filter_by_order_account","proof_of_contact_view_list","in_app_chat_need_reply","msg_screenshot_need_reply","disallowed_driver_group_ids","in_app_call_times_threshold","telco_call_times_threshold"]),H=p===this.onHoldReasonTypeEnum.Express_Delivery_Onhold,B=p===this.onHoldReasonTypeEnum.RETURN,Y=H||B,K=H||B,_=(0,$.Z)({english_notification:this.isP2PType?c:"",local_notification:this.isP2PType?a:"",out_of_area_flag:Number(this.isOutOfAreaDelivery),type:this.isOutOfAreaDelivery||this.isOutOfAreaPickup?this.issueType.ABNORMAL_GEOLOCATION:p},j),this.enableOnHoldReasonDriverGroupRestriction&&Y&&(_.disallowed_driver_group_ids=Z),this.isProofOfContactExists&&this.supportProofOfContact&&(_.proof_of_contact_view_list=w,_.in_app_call_times_threshold=w.includes(this.proofOfContactViewListEnum["In App Call"])&&P!==void 0&&P!==""?Number(P):void 0,_.telco_call_times_threshold=w.includes(this.proofOfContactViewListEnum["Telco Call"])&&I!==void 0&&I!==""?Number(I):void 0,_.in_app_chat_need_reply=w.includes(this.proofOfContactViewListEnum["In-App Chat"])?V:void 0,_.msg_screenshot_need_reply=w.includes(this.proofOfContactViewListEnum["Message Screenshot/Photo"])?L:void 0),_.otp_validation===-1&&delete _.otp_validation,o&&(_.code=+o),K&&(_.failed_attempts_type=O,this.supportAutoValidation&&(O===this.onHoldReasonFailedAttemptTypeMap.Once||O===this.onHoldReasonFailedAttemptTypeMap.Multiple)&&(_.need_automated_validation=y,y===1&&(_.automated_validation_expr=this.$refs.ruleEditor.editorValue))),d!==void 0&&(_.reason_type=H?d:1),m!==void 0&&(_.destination_type_list=m.join(",")),ne=this.isOnHold?this.showOrderAccountSelection:this.form.destination_type_list.includes(this.deliveryDestinationTypeEnum.Recipient),ne&&(M&&A!==void 0&&(_.order_account_list=A.join(",")),_.filter_by_order_account=M),ie=Array.isArray(this.form.destination_type_list)&&this.form.destination_type_list.includes(this.deliveryDestinationTypeEnum.Recipient),this.isOnHold&&[this.issueType.Express_Delivery_Onhold].includes(this.form.type)&&ie||delete _.enable_automatic_reroute_hd_to_sp,this.isOnHold&&(_.need_real_time_validation=_.need_real_time_validation?1:2),U=void 0,!this.isPickupOnHold){g.next=36;break}if(!this.editMode){g.next=30;break}return g.next=27,Ee.Z.editProofRule(_);case 27:g.t0=g.sent,g.next=33;break;case 30:return g.next=32,Ee.Z.createProofRule(_);case 32:g.t0=g.sent;case 33:U=g.t0,g.next=39;break;case 36:return g.next=38,this.$store.dispatch("onHoldReasonMgt/"+r,_);case 38:U=g.sent;case 39:oe=U,Q=oe.data,ae=Q===void 0?{}:Q,this.$store.dispatch("getDeliveryEnums"),this.oldForm=q()({},this.form),re=f.Lz.base+". proof of "+this.proofTypeText+" reason ID is R"+(ae.code||o),this.$feedback(re,{backBtnTip:"OK",type:"success",backBtnType:"primary",feedbackTitle:this.editMode?this.$gt("Updated  Successfully"):this.$gt("Created  Successfully"),onBack:function(de){de(),n.skipConfirmation=!0,n.back(!0)}}),g.next=53;break;case 46:g.prev=46,g.t1=g.catch(0),X=g.t1.message||this.$gt("Failed to save. Please try again."),se=Math.abs(Number(g.t1.retcode)),le=dt.includes(se),this.checkIsReturnOrDeliveryOnhold(this.form.type)&&le?this.disallowedDriverGroupSaveError=X:this.$feedback("update on hold reason error: "+X,{type:"fail"}),console.error("update on hold reason error: ",g.t1);case 53:return g.prev=53,(0,u.K4)(this,"submit",!1),g.finish(53);case 56:case"end":return g.stop()}},t,this,[[0,46,53,56]])}));function e(){return i.apply(this,arguments)}return e}(),updatePickupOutOfAreaReason:function(){var i=(0,S.Z)(v().mark(function t(){var n=this,r,s,o,c,a,p;return v().wrap(function(d){for(;;)switch(d.prev=d.next){case 0:if(d.prev=0,(0,u.K4)(this,"submit",!0),r=["name","english_description","local_description","status"].reduce(function(m,y){return typeof n.form[y]=="string"&&(n.form[y]=n.form[y].trim()),n.form[y]!==n.sourceFormData[y]&&(m[y]=n.form[y]),m},{}),(0,ue.SN)(this.$refs.basicForm,"basicForm"),s=r.name,o=r.english_description,c=r.local_description,a=r.status,p={content:s,eng_description:o,local_description:c,proof_status:a},!this.editMode){d.next=12;break}return p.id=Number(this.form.code),d.next=10,ke.Z.updatePickupOutOfAreaReason(p);case 10:d.next=14;break;case 12:return d.next=14,ke.Z.createPickupOutOfAreaReason(p);case 14:this.oldForm=q()({},this.form),this.$feedback(this.$gt("Succeeded!"),{onBack:function(y){y(),n.skipConfirmation=!0,n.back(!0)}}),d.next=21;break;case 18:d.prev=18,d.t0=d.catch(0),console.error("update pickup on hold reason error: ",d.t0);case 21:return d.prev=21,(0,u.K4)(this,"submit",!1),d.finish(21);case 24:case"end":return d.stop()}},t,this,[[0,18,21,24]])}));function e(){return i.apply(this,arguments)}return e}(),loadPickupOutOfAreaReasonDetail:function(){var i=(0,S.Z)(v().mark(function t(){var n,r,s,o;return v().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.prev=0,(0,u.K4)(this,"detail",!0),n={id:this.form.code},a.next=5,ke.Z.loadPickupOutOfAreaDetail(n);case 5:r=a.sent,s=r.data,o=s===void 0?{}:s,this.form=(0,$.Z)({},this.form,{code:this.form.code,name:o.content,local_description:o.local_description,english_description:o.eng_description,status:o.proof_status}),this.descriptionData={local_description:o.local_description,english_description:o.eng_description},this.sourceFormData=(0,$.Z)({},this.form),this.oldForm=q()({},this.form),a.next=17;break;case 14:a.prev=14,a.t0=a.catch(0),console.error("load pickup out of area reason detail error: ",a.t0);case 17:return a.prev=17,(0,u.K4)(this,"detail",!1),a.finish(17);case 20:case"end":return a.stop()}},t,this,[[0,14,17,20]])}));function e(){return i.apply(this,arguments)}return e}(),loadOnholdReasonDetail:function(){var i=(0,S.Z)(v().mark(function t(){var n,r,s,o,c,a,p,O,d,m,y,A,M,N,w,V,L,G,Z,P,I,j,H,B,Y,K,_,ne,ie,U,oe,Q,ae,re,X,se,le,ce,g,he,de,Ce,Pe,Se,Fe,Ie,He,De;return v().wrap(function(k){for(;;)switch(k.prev=k.next){case 0:if(k.prev=0,(0,u.K4)(this,"detail",!0),n={code:this.form.code},!this.isPickupOnHold){k.next=9;break}return k.next=6,Ee.Z.getProofRuleDetail(n);case 6:k.t0=k.sent,k.next=12;break;case 9:return k.next=11,this.$store.dispatch("onHoldReasonMgt/loadOnHoldReasonDetail",n);case 11:k.t0=k.sent;case 12:r=k.t0,s=r.data,o=s===void 0?{}:s,c=o.failed_attempts_type,a=c===void 0?this.onHoldReasonFailedAttemptTypeMap.Unlimited:c,p=o.type,O=(0,pe.Z)(o,["failed_attempts_type","type"]),d=p===this.onHoldReasonTypeEnum.Express_Delivery_Onhold,m=p===this.onHoldReasonTypeEnum.RETURN,this.isInitTypeExpressDeliveryExceptionOnhold=this.checkIsExpressDeliveryExceptionOnhold(p),this.isInitTypeSystemAutoOnhold=this.checkIsSystemAutoOnhold(p),y=d||m,A=this.standardRequirementConfigMap,M=this.standardBooleanConfigMap,N=this.photoFromConfigMap,w=o.sender_name,V=o.recipient_name,L=o.photo_options,G=o.need_prefill_sender_name,Z=o.need_prefill_recipient_name,P=o.photo_from_config,I=o.english_remark_guide,j=o.local_remark_guide,H=o.english_photo_guide,B=o.local_photo_guide,Y=o.photo_overall_guideline_english,K=o.photo_overall_guideline_local,_=o.local_description,ne=o.english_description,ie=o.otp_validation,U=o.destination_type_list,oe=o.need_real_time_validation,Q=o.order_account_list,ae=o.proof_of_contact_view_list,re=o.in_app_call_times_threshold,X=o.telco_call_times_threshold,se=o.in_app_chat_need_reply,le=o.msg_screenshot_need_reply,ce=o.disallowed_driver_group_ids,g=ce===void 0?[]:ce,he=o.disallowed_driver_groups,de=he===void 0?[]:he,Ce=Array.isArray(g)?g:[],Pe=Array.isArray(de)?de:[],Se=A.Skip,Fe=M.Yes,Ie=x._V.Skip,He=N["Camera only"],this.form=(0,$.Z)({},this.form,O,{type:p,proof_of_contact_view_list:ae,in_app_call_times_threshold:re,telco_call_times_threshold:X,in_app_chat_need_reply:se,msg_screenshot_need_reply:le,disallowed_driver_group_ids:Ce,code:this.form.code,failed_attempts_type:y?a:"",sender_name:w,recipient_name:V,photo_options:L,otp_validation:ie,need_prefill_sender_name:w===Se?Fe:G,need_prefill_recipient_name:V===Se?Fe:Z,photo_from_config:L===Ie?He:P,destination_type_list:U?U.split(","):[],need_real_time_validation:oe===this.needRealTimeValidationEnum.Yes,order_account_list:Q?Q.split(",").map(function(z){return Number(z)}):[]}),De=new(ge())(this.driverGroupOptions.map(function(z){return[z.value,z]})),Pe.forEach(function(z){De.set(z.id,{label:z.name,value:z.id})}),this.driverGroupOptions=(0,u.Fo)(fe()(De.values())),this.remarkGuideLinesData={english_remark_guide:I,local_remark_guide:j},this.photoGuideLinesData={english_photo_guide:H,local_photo_guide:B,photo_overall_guideline_english:Y,photo_overall_guideline_local:K},this.descriptionData={local_description:_,english_description:ne},this.oldForm=q()({},this.form),k.next=42;break;case 39:k.prev=39,k.t1=k.catch(0),console.error("load on hold reason detail error: ",k.t1);case 42:return k.prev=42,(0,u.K4)(this,"detail",!1),k.finish(42);case 45:case"end":return k.stop()}},t,this,[[0,39,42,45]])}));function e(){return i.apply(this,arguments)}return e}(),getOnHoldReasonTypeLabel:function(e){var t=this;return J()(this.onHoldReasonTypeEnum).find(function(n){return t.onHoldReasonTypeEnum[n]===e})},typeChange:function(){this.disallowedDriverGroupSaveError="",this.checkIsReturnOrDeliveryOnhold(this.form.type)||(this.form.disallowed_driver_group_ids=[]),this.issueType.Express_Delivery_Onhold!==this.form.type&&(this.form.issue_type=0),!this.isHandoverOnHold&&(this.isSkipRemark&&(this.form.remark_required_flag=void 0),this.isSkipPhoto&&(this.form.photo_options=void 0))},validationTypeChange:function(){this.form.validation_type===this.validationTypeEnum["Mandatory to Contact Buyer/Seller"]||this.form.validation_type===this.validationTypeEnum["Mandatory to Contact Buyer"]?(this.form.mass_onhold_flag=1,this.form.block_type=void 0,this.form.earliest_time=void 0):this.form.mass_onhold_flag=void 0},realTimeValidationChange:function(){this.form.need_real_time_validation||(this.form.block_type=void 0,this.form.earliest_time=void 0,this.form.validation_type=void 0)},reasonTypeChange:function(){this.isPickupDeliveryOnHold&&C.Yf&&this.form.reason_type===2&&this.form.photo_options&&[x._V.Skip,x._V.Optional].includes(this.form.photo_options)&&(this.form.photo_options="")},checkIsSystemAutoOnhold:function(e){return e===this.onHoldReasonTypeEnum.SYSTEM_AUTO_ONHOLD||e===this.onHoldReasonTypeEnum.SYSTEM_NON_OPERABLE_AUTO_ONHOLD}}};var bt=l("cqYh"),ft=(0,Re.Z)(ht,b,h,!1,null,"0e4077d5",null);const mt=ft.exports},"3Mnx":(F,T,l)=>{var b=l("5f3S");typeof b=="string"&&(b=[[F.id,b,""]]),b.locals&&(F.exports=b.locals);var h=l("er8A").Z,D=h("442b3dfa",b,!0,{})},cqYh:(F,T,l)=>{var b=l("Oir5");typeof b=="string"&&(b=[[F.id,b,""]]),b.locals&&(F.exports=b.locals);var h=l("er8A").Z,D=h("70ccba0f",b,!0,{})}}]);
