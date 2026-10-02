(self.webpackChunkzzz_fms_admin=self.webpackChunkzzz_fms_admin||[]).push([[7027,2999],{"8wBu":(E,$,l)=>{"use strict";l.d($,{Z:()=>B});var y=l("m1cH"),d=l("P451"),k=l("GOkr"),z=l("QsnJ"),U=[{label:(0,d.ok)("Colleague"),value:"Colleague"},{label:(0,d.ok)("Domestic Helper"),value:"Domestic Helper"},{label:(0,d.ok)("Housemate"),value:"Housemate"}],K=[{label:(0,d.ok)("Family member"),value:"Family member"},{label:(0,d.ok)("Neighbor"),value:"Neighbor"},{label:(0,d.ok)("Friend"),value:"Friend"},{label:(0,d.ok)("Security Staff"),value:"Security Staff"},{label:(0,d.ok)("Receptionist"),value:"Receptionist"}],c=[{label:(0,d.ok)("Others"),value:"Others"}],D=k.gY?[{label:(0,d.ok)("Riser"),value:"Riser"},{label:(0,d.ok)("Shoe rack"),value:"Shoe rack"},{label:(0,d.ok)("Doorstep"),value:"Doorstep"},{label:(0,d.ok)("Parcel drop box"),value:"Parcel drop box"}]:[],V=k.vh?[{label:(0,d.ok)("Doorstep"),value:"Doorstep"},{label:(0,d.ok)("Porch"),value:"Porch"},{label:(0,d.ok)("Mailbox"),value:"Mailbox"}]:[],Y=k.xN?[{label:(0,d.ok)("Outside area of buyer house"),value:"Outside area of buyer house"},{label:(0,d.ok)("Residential mailboxes"),value:"Residential mailboxes"},{label:(0,d.ok)("Parcel shed"),value:"Parcel shed"},{label:(0,d.ok)("Smart locker"),value:"Smart locker"},{label:(0,d.ok)("Storage point of office building"),value:"Storage point of office building"}]:[],j=k.YB?[{label:(0,d.ok)("Doorstep"),value:"Doorstep"},{label:(0,d.ok)("Porch"),value:"Porch"},{label:(0,d.ok)("Mailbox"),value:"Mailbox"},{label:(0,d.ok)("Shoe rack"),value:"Shoe rack"},{label:(0,d.ok)("Front Gate"),value:"Front Gate"}]:[],L=k.gY||k.vh||k.xN||k.YB?[]:[{label:(0,d.ok)("Doorstep"),value:"Doorstep"},{label:(0,d.ok)("Mailbox"),value:"Mailbox"},{label:(0,d.ok)("Shoe rack"),value:"Shoe rack"},{label:(0,d.ok)("Front Gate"),value:"Front Gate"},{label:(0,d.ok)("Smart locker"),value:"Smart locker"}],Q=[{label:(0,d.ok)("Other place"),value:"Other place"}];const B={data:function(){return{recipientTypeData:[],PhotoFormConfigTrans:{2:this.$gt("1st Photo Camera"),0:this.$gt("Camera and Gallery"),1:this.$gt("Camera only")}}},computed:{recipientTypeOptions:function(){var F=this.recipientTypeIsReturn?[{label:this.$gt("Seller"),value:"Seller"},{label:this.$gt("WH"),value:"WH"}]:[{label:this.$gt("Buyer"),value:"Buyer"}],O=[].concat(K,(0,y.Z)(this.HAS_NEW_RECIPIENT?U:[]),c),W={label:this.$gt("Someone Else"),value:"Someone Else",children:O},H={label:this.$gt("No one"),value:"No one"};return this.showNoOneAddressType&&(H.children=[].concat(D,V,Y,j,L,Q)),[].concat(F,[W,H])},statusSchema:function(){return{label:this.$gt("Status"),key:"rule_status",type:"radio-group",selectOptions:[{label:this.$gt("Available"),value:0},{label:this.$gt("Unavailable"),value:1}],rules:[z.sO.REQUIRED.call(this,this.$gt("Status"))]}},photoGuideLinesSchema:function(){return[{label:this.$gt("Overall Guideline (English)"),key:"photo_overall_guideline_english",placeholder:this.$gt("Please enter English guidelines, line breaks are supported.")},{label:this.$gt("Overall Guideline (Local language)"),key:"photo_overall_guideline_local",placeholder:this.$gt("Please enter local language guidelines, line breaks are supported.")},{label:this.$gt("Photo Guideline (English)"),key:"photo_guide_english",placeholder:this.$gt("Please enter English guidelines, line breaks are supported.")},{label:this.$gt("Photo Guideline (Local language)"),key:"photo_guide_local",placeholder:this.$gt("Please enter local language guidelines, line breaks are supported.")}]},remarkGuideLineSchema:function(){return[{label:this.$gt("English"),key:"remark_guide_english",placeholder:this.$gt("Input")},{label:this.$gt("Local language"),key:"remark_guide_local",placeholder:this.$gt("Input")}]},onHold_photoGuideLinesSchema:function(){return[{label:this.$gt("Overall Guideline (English)"),key:"photo_overall_guideline_english",placeholder:this.$gt("Please enter English guidelines, line breaks are supported.")},{label:this.$gt("Overall Guideline (Local language)"),key:"photo_overall_guideline_local",placeholder:this.$gt("Please enter local language guidelines, line breaks are supported.")},{label:this.$gt("Photo Guideline (English)"),key:"english_photo_guide",placeholder:this.$gt("Please enter English guidelines, line breaks are supported.")},{label:this.$gt("Photo Guideline (Local language)"),key:"local_photo_guide",placeholder:this.$gt("Please enter local language guidelines, line breaks are supported.")}]},onHold_remarkGuideLineSchema:function(){return[{label:this.$gt("English"),key:"english_remark_guide",placeholder:this.$gt("Input")},{label:this.$gt("Local language"),key:"local_remark_guide",placeholder:this.$gt("Input")}]}}}},b7aI:(E,$,l)=>{var y=l("JPst");$=y(!1),$.push([E.id,`.detail-wrapper[data-v-4dd43b5b] {
  height: 100%;
  min-width: 0;
  min-height: 0;
  display: flex;
  flex-direction: column;
  background-color: #ffffff;
}
.detail-content[data-v-4dd43b5b] {
  flex: 1 1 auto;
  min-width: 0;
  min-height: 0;
  overflow-y: auto;
  padding: 24px 24px 32px;
}
.detail-content .category-title-v2[data-v-4dd43b5b] {
  font-size: 16px;
  font-weight: 500;
  line-height: 16px;
  color: #333;
  margin-top: 56px;
  margin-bottom: 24px;
}
.detail-content .category-title-v2[data-v-4dd43b5b]:first-child {
  margin-top: 16px;
}
.detail-content .category-title-v2[data-v-4dd43b5b]:before {
  display: inline-block;
  content: '';
  position: relative;
  bottom: 0px;
  width: 4px;
  height: 12px;
  background: #EE4D2D;
  line-height: 16px;
  margin-right: 8px;
}
.more-recipient-type[data-v-4dd43b5b] {
  margin-left: 16px;
}
.footer-submit[data-v-4dd43b5b] {
  flex: 0 0 auto;
  width: 100%;
  margin-top: 0;
  padding: 12px 24px;
  box-sizing: border-box;
  border-top: #ecf0f4 1px solid;
  box-shadow: 0 -2px 12px 0 rgba(0, 0, 0, 0.12);
  background: #fff;
}
.footer-button[data-v-4dd43b5b] {
  display: flex;
  align-items: center;
  justify-content: flex-end;
  min-width: 0;
}
.detail-form .photo-options[data-v-4dd43b5b] .ssc-radio-group {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  row-gap: 8px;
  padding: 6px 0 0 0;
}
.detail-form[data-v-4dd43b5b] .svg-icon {
  margin-left: 1px;
}
ul[data-v-4dd43b5b] {
  padding: 0;
  margin: 0;
  list-style: none;
}
.button-base[data-v-4dd43b5b] {
  padding: 9px 20px;
  font-size: 14px;
  color: #FFFFFF;
}
.spx-button[data-v-4dd43b5b] {
  padding: 9px 20px;
  font-size: 14px;
  color: #FFFFFF;
  border-color: #FFFFFF;
  color: #555555;
}
.spx-button[data-v-4dd43b5b]:hover {
  background-color: #FFFFFF;
}
.spx-button-primary[data-v-4dd43b5b] {
  padding: 9px 20px;
  font-size: 14px;
  color: #FFFFFF;
  background-color: #EE4D2D;
  border-color: #EE4D2D;
}
.ssc-message[data-v-4dd43b5b] {
  top: 20px !important;
}
.sp-card > .actions[data-v-4dd43b5b] {
  margin-bottom: 10px;
  display: flex;
  flex-wrap: wrap;
}
.sp-card > .actions .right[data-v-4dd43b5b] {
  flex: 1;
  text-align: right;
  height: 40px;
}
table th[data-v-4dd43b5b] {
  color: rgba(0, 0, 0, 0.85);
  border-color: #EEEEEE;
  font-size: 14px;
  font-weight: 500;
}
.spx-editor .ssc-tag[data-v-4dd43b5b] {
  font-size: 12px;
  margin: 0px;
  padding: 0;
}
.spx-editor .ssc-tag .left-padding-span[data-v-4dd43b5b] {
  width: 0;
  margin: 0 0 0 8px;
}
.spx-editor .ssc-tag .right-padding-span[data-v-4dd43b5b] {
  width: 0;
  margin: 0 8px 0 0;
}
.spx-editor .tag-editor-span[data-v-4dd43b5b] {
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
.spx-editor .tag-editor-span .tag-editor-span-space[data-v-4dd43b5b] {
  width: 8px;
  height: 15px;
  display: inline-block;
  line-height: 22px;
}
.ssc-tabs-type-pane-card .ssc-tabs-pane[data-v-4dd43b5b] {
  background: #FAFAFA;
}
.check-tree[data-v-4dd43b5b] {
  margin-left: 80px;
}
.avatar-uploader-icon[data-v-4dd43b5b] {
  font-size: 28px;
  color: #8c939d;
  width: 178px;
  height: 178px;
  line-height: 178px;
  text-align: center;
}
.avatar-uploader-icon-small[data-v-4dd43b5b] {
  font-size: 14px !important;
  color: #8c939d;
  width: 56px !important;
  height: 56px !important;
  line-height: 56px !important;
  text-align: center;
}
.avatar-uploader-icon-middle[data-v-4dd43b5b] {
  font-size: 14px !important;
  color: #8c939d;
  width: 94px !important;
  height: 94px !important;
  line-height: 94px !important;
  text-align: center;
}
.avatar[data-v-4dd43b5b] {
  width: 178px;
  height: 178px;
  display: block;
}
.avatar-small[data-v-4dd43b5b] {
  width: 56px;
  height: 56px;
  display: block;
}
.avatar-middle[data-v-4dd43b5b] {
  width: 94px;
  height: 94px;
  display: block;
}
.acribus-sp-tabs[data-v-4dd43b5b] {
  padding: 16px 16px 0px;
  border-radius: 6px;
  margin-bottom: -30px;
  background-color: #fff;
}
span.red[data-v-4dd43b5b] {
  color: #F56C6C;
}
span.green[data-v-4dd43b5b] {
  color: #67C23A;
}
.sp-hooks[data-v-4dd43b5b] {
  overflow: hidden;
}
.text-link[data-v-4dd43b5b] {
  color: #409eff;
  cursor: pointer;
}
.text-warning[data-v-4dd43b5b] {
  color: #e80808;
}
.help-text[data-v-4dd43b5b] {
  cursor: help;
}
.driver-performance-flag-A[data-v-4dd43b5b] {
  color: #55CC77;
}
.driver-performance-flag-B[data-v-4dd43b5b] {
  color: #999;
}
.driver-performance-flag-C[data-v-4dd43b5b] {
  color: #FF4742;
}
/* [check-in rule] Google map autosuggest result container */
.pac-container[data-v-4dd43b5b] {
  z-index: 100000;
}
.action-link[data-v-4dd43b5b] {
  color: #2769f0;
  cursor: pointer;
  display: inline-block;
  margin-left: 6px;
}
.action-link[data-v-4dd43b5b]:first-child {
  margin-left: 0;
}
.action-link[data-v-4dd43b5b]:hover {
  text-decoration: underline;
}
.separate-line[data-v-4dd43b5b] {
  height: 0;
  width: 100%;
  border-top: 1px #E9E9E9 solid;
  margin-bottom: 16px;
}
.white-fs-ground[data-v-4dd43b5b] {
  padding: 24px;
  background: #fff;
  height: 100%;
}
.white-fs-ground .category-title[data-v-4dd43b5b] {
  font-size: 16px;
  font-weight: 500;
  line-height: 16px;
  color: #333;
  margin-top: 56px;
  margin-bottom: 16px;
}
.white-fs-ground .category-title[data-v-4dd43b5b]:first-child {
  margin-top: 16px;
}
.white-fs-ground .category-title[data-v-4dd43b5b]:before {
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
.page-table-container[data-v-4dd43b5b] {
  border: 1px solid #eee;
}
.form-body-center[data-v-4dd43b5b] {
  margin: 0 auto;
}
.form-body-left[data-v-4dd43b5b] {
  margin: 0;
}
.dialog-footer[data-v-4dd43b5b],
.footer-submit[data-v-4dd43b5b] {
  margin-top: 32px;
}
.dialog-footer .ssc-button[data-v-4dd43b5b],
.footer-submit .ssc-button[data-v-4dd43b5b] {
  margin-left: 16px;
}
.dialog-footer .ssc-button[data-v-4dd43b5b]:first-child,
.footer-submit .ssc-button[data-v-4dd43b5b]:first-child {
  margin-left: 0;
}
.text-center[data-v-4dd43b5b] {
  text-align: center;
}
.s-form-textarea .ssc-textarea[data-v-4dd43b5b],
.ssc-form-item .ssc-select[data-v-4dd43b5b],
.ssc-form-item .ssc-input-size-medium[data-v-4dd43b5b] {
  width: 320px;
}
.ssc-steps.is-horizontal[data-v-4dd43b5b] {
  width: 60%;
  margin: 23px auto;
}
.action-wrap[data-v-4dd43b5b] {
  display: flex;
  margin: 10px 0;
}
.action-wrap .actions[data-v-4dd43b5b] {
  flex: 1;
}
.action-wrap .actions .ssc-button[data-v-4dd43b5b] {
  margin-right: 16px;
}
.action-wrap .upload-route-log-info[data-v-4dd43b5b] {
  align-self: center;
  text-align: right;
  flex: 1;
}
.action-wrap .upload-route-log-info label[data-v-4dd43b5b] {
  margin-right: 8px;
}
.upload-log-table[data-v-4dd43b5b] {
  margin: 10px 0;
}
.group-route-list-info[data-v-4dd43b5b] {
  line-height: 40px;
}
.group-route-list-info label[data-v-4dd43b5b] {
  margin-right: 10px;
}
.mass-upload-input-footer[data-v-4dd43b5b] {
  margin-top: 32px;
}
.mass-upload-input-footer .ssc-button[data-v-4dd43b5b] {
  margin-right: 10px;
}
.add-range-btn[data-v-4dd43b5b] {
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
.add-range-btn[data-v-4dd43b5b]:hover {
  background: #f6f6f6;
}
.range-wrap[data-v-4dd43b5b] {
  padding: 16px;
}
.range-wrap .seq-tag[data-v-4dd43b5b] {
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
.range-wrap .icon-del[data-v-4dd43b5b] {
  line-height: 32px;
  width: 24px;
  height: 24px;
  cursor: pointer;
  color: #bbb;
}
.range-wrap .icon-del[data-v-4dd43b5b]:hover {
  color: #888;
}
.bg-fafafa[data-v-4dd43b5b] {
  background: #fafafa;
}
.ssc-step-main-title[data-v-4dd43b5b] {
  line-height: 1.5;
}
.ssc-form-item-error-tip[data-v-4dd43b5b] {
  white-space: nowrap;
}
.ssc-table-header .ssc-table-header-title[data-v-4dd43b5b] {
  height: 100%;
}
.ssc-table-header .ssc-table-header-column-container[data-v-4dd43b5b] {
  height: 100%;
}
.ssc-table-body .ssc-table-header-column-container .td-content[data-v-4dd43b5b] {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.acribus-text-ellipsis[data-v-4dd43b5b] {
  display: inline-block;
  width: 100%;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.station-tree-container .ssc-form-item-content[data-v-4dd43b5b] {
  flex-direction: column;
  position: relative;
}
.station-tree-container .ssc-form-item-content .tree[data-v-4dd43b5b] {
  min-width: 318px;
  display: block;
  margin-top: 20px;
}
.station-tree-container .ssc-form-item-content .tree.has-search-input[data-v-4dd43b5b] {
  padding-top: 40px;
}
.station-tree-container .ssc-form-item-content .tree-input[data-v-4dd43b5b] {
  position: absolute;
  left: 3%;
  top: 30px;
  z-index: 1;
  width: 94%;
  margin: 0 auto;
  color: #aeaeae;
}
.ssc-dropdown-menu[data-v-4dd43b5b] {
  min-width: 176px;
  max-width: 320px;
  z-index: 2;
}
.ssc-dropdown-menu .active[data-v-4dd43b5b] {
  color: #EE4D2D;
  font-weight: 500;
}
.detail-part-title[data-v-4dd43b5b] {
  font-size: 18px;
  color: #333333;
  font-weight: 500;
  margin-bottom: 16px;
}
.detail-part-title.additional-info[data-v-4dd43b5b] {
  margin-top: 56px;
}
.detail-part-title[data-v-4dd43b5b]::before {
  content: '';
  width: 2px;
  height: 10px;
  background: #EE4D2D;
  display: inline-block;
  margin-right: 6px;
}
.page-wrapper[data-v-4dd43b5b] {
  height: 100%;
}
.zone-container button:disabled:not(.btn-prev):not(.btn-next).ssc-btn-type-primary[data-v-4dd43b5b] {
  color: #FFF !important;
  background: #EE4D2D !important;
  opacity: 0.5;
}
.pagination-left-total[data-v-4dd43b5b] {
  display: flex;
  flex: 1;
}
.common-status[data-v-4dd43b5b] {
  line-height: 12px;
  font-weight: 500;
  padding: 3px 4px;
  border-radius: 2px;
  display: inline-block;
  white-space: nowrap;
}
.common-status.status-success[data-v-4dd43b5b] {
  background: #ECFFF1;
  color: #1CC461;
}
.common-status.status-disabled[data-v-4dd43b5b] {
  color: #646B76;
  background: #F5F6F9;
}
.common-status.status-info[data-v-4dd43b5b] {
  color: #3274F7;
  background: #F0F7FF;
}
.common-status.status-danger[data-v-4dd43b5b] {
  color: #F32345;
  background: #FFF0F0;
}
.common-status.status-warning[data-v-4dd43b5b] {
  background: #FFF8DB;
  color: #FFB014;
}
.common-divide[data-v-4dd43b5b] {
  height: 8px;
  background: #F5F6F9;
  margin: 0 -24px;
}
.ssc-scan-toast[data-v-4dd43b5b] {
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
.ssc-scan-toast.ssc-scan-toast-success[data-v-4dd43b5b] {
  animation-duration: 4.4s;
  animation-name: scanSuccessToast-4dd43b5b;
  background: #1CC461;
}
.ssc-scan-toast.ssc-scan-toast-fail[data-v-4dd43b5b] {
  background: #F32345;
  animation-duration: 8.4s;
  animation-name: scanFailToast-4dd43b5b;
}
.ssc-scan-toast.ssc-scan-toast-notice[data-v-4dd43b5b] {
  background: #FFA620;
  animation-duration: 6.4s;
  animation-name: scanFailToast-4dd43b5b;
}
.ssc-scan-toast .message-panel[data-v-4dd43b5b] {
  display: flex;
  width: 100%;
  align-items: center;
}
.ssc-scan-toast .message-panel .icon[data-v-4dd43b5b] {
  margin-right: 18px;
  width: 28px;
  height: 28px;
  flex-shrink: 0;
}
.ssc-scan-toast .message-panel .text[data-v-4dd43b5b] {
  display: inline-block;
}
@keyframes scanSuccessToast-4dd43b5b {
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
@keyframes scanFailToast-4dd43b5b {
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
.table-pagination[data-v-4dd43b5b] {
  height: 56px;
  border: 1px solid #ECF0F4;
  border-top: 0;
  justify-content: flex-end;
  padding-right: 16px;
}
.journey-type[data-v-4dd43b5b] {
  display: flex;
  align-items: center;
}
.journey-type .journey-type-dot[data-v-4dd43b5b] {
  width: 6px;
  height: 6px;
  border-radius: 50%;
  display: inline-block;
  margin-right: 8px;
}
.pagination-sticky-bottom[data-v-4dd43b5b] {
  background: #fff;
  position: sticky;
  bottom: 16px;
}
.pagination-sticky-bottom[data-v-4dd43b5b]:after {
  content: ' ';
  background: #fff;
  width: 100%;
  height: 16px;
  position: absolute;
}
.pagination-sticky-bottom[data-v-4dd43b5b] .ssc-pagination {
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
.pagination-sticky-bottom[data-v-4dd43b5b] .ssc-pagination .total-container {
  flex: 1;
  margin-left: 15px;
  margin-right: 12px;
}
.sp-card-log-list[data-v-4dd43b5b] {
  padding: 16px 24px;
  background: #fff;
  min-height: 100%;
}
.ssc-table-panel .ssc-form-item .ssc-form-item-content textarea[data-v-4dd43b5b],
.pro-filter .ssc-form-item .ssc-form-item-content textarea[data-v-4dd43b5b] {
  border: transparent;
}
.message-red-text[data-v-4dd43b5b] {
  color: #EE4D2D;
  font-weight: 700;
}
`,""]),E.exports=$},RwxK:(E,$,l)=>{"use strict";l.r($),l.d($,{default:()=>_e});var y=function(){var e=this,t=e._self._c;return t("div",{staticClass:"detail-wrapper"},[t("div",{directives:[{name:"loading",rawName:"v-loading",value:e.loading.detail,expression:"loading.detail"}],staticClass:"detail-content"},[t("div",{staticClass:"category-title-v2"},[e._v(e._s(e.$gt("Basic Info")))]),e._v(" "),t("s-form",{ref:"basicForm",attrs:{model:e.form,"label-position":"right","label-width":"200px","scroll-to-error-item":!0}},[t("form-item",{attrs:{schema:e.basicFormSchema.ruleName,form:e.form}}),e._v(" "),e.isProofHandover?[t("s-form-item",{attrs:{label:e.$gt("Station"),prop:e.editMode?"station_id":"station_id_list",rules:e.getRequiredRules(e.$gt("Station"))}},[t("current-user-station-selector",{attrs:{value:e.form[e.editMode?"station_id":"station_id_list"],multiple:!e.editMode,canSelectAll:!e.editMode,options:e.handoverStationOptions},on:{input:function(o){e.form[e.editMode?"station_id":"station_id_list"]=o}}})],1),e._v(" "),t("s-form-item",{attrs:{label:e.$gt("Handover"),prop:"handover_flag",rules:e.getRequiredRules(e.$gt("Handover"))}},[t("s-radio-group",{on:{change:e.onHandoverFlagChange},model:{value:e.form.handover_flag,callback:function(o){e.$set(e.form,"handover_flag",o)},expression:"form.handover_flag"}},e._l(e.handoverFlagOptions,function(a,o){return t("s-radio",{key:o,attrs:{label:a.value}},[e._v(e._s(e.capitalize(a.label)))])}),1)],1)]:e._e(),e._v(" "),t("form-item",{attrs:{schema:e.basicFormSchema.entityType,form:e.form}}),e._v(" "),e.showDeliveryOrderAccount?t("s-form-item",{attrs:{label:e.$gt("Order Account"),prop:"order_account",rules:e.getRequiredRules(e.$gt("Order Account"))}},[t("s-select",{attrs:{"multiple-concise":"",multiple:""},model:{value:e.form.order_account,callback:function(o){e.$set(e.form,"order_account",o)},expression:"form.order_account"}},e._l(e.orderAccountSelection,function(a){return t("s-option",{key:a.value,attrs:{value:a.value,label:a.label}})}),1)],1):e._e(),e._v(" "),t("form-item",{attrs:{schema:e.basicFormSchema.ruleStatus,form:e.form}})],2),e._v(" "),t("div",{staticClass:"category-title-v2"},[e._v(e._s(e.$gt("App Proof of Configuration")))]),e._v(" "),e.shouldShowRecipientTypeRadio?t("div",[t("s-form",{ref:"detailForm",staticClass:"detail-form",attrs:{model:e.form,"label-position":"right","label-width":"200px","scroll-to-error-item":!0}},[e.showRecipientType?t("s-form-item",{key:"recipient_type",attrs:{label:e.$gt("Recipient Type"),prop:"recipient_type",rules:e.getRequiredRules(e.$gt("Recipient Type"))}},[t("s-input-cascader",{attrs:{options:e.recipientTypeOptions,clearable:!0},model:{value:e.recipientTypeData,callback:function(o){e.recipientTypeData=o},expression:"recipientTypeData"}})],1):e._e(),e._v(" "),e._l(e.detailFormSchema,function(a){return t("form-item",{key:a.key,attrs:{schema:a,form:e.form}})})],2)],1):t("div",[t("s-form",{ref:"detailForm",staticClass:"detail-form",attrs:{model:e.form,"label-position":"right","label-width":"200px","scroll-to-error-item":!0}},e._l(e.detailFormSchema,function(a){return t("form-item",{key:a.key,attrs:{schema:a,form:e.form}})}),1)],1)],1),e._v(" "),e.visible.ruleRepeat?t("s-dialog",{attrs:{size:"normal",visible:e.visible.ruleRepeat,title:e.$gt("Notification"),"append-to-body":!1,width:"800px"},on:{close:e.closeDialog}},[t("p",{style:{paddingBottom:"24px"}},[e._v(`
      `+e._s(e.$gt("The new rule will replace the old one and take effective immediately and please double check the old rule."))+`
    `)]),e._v(" "),t("s-paginated-table",{attrs:{columns:e.ruleRepeatColumns,"data-list":e.ruleRepeatList.list,total:e.ruleRepeatList.length,hidePagination:!0,needCustomNoData:!1}}),e._v(" "),t("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[t("s-button",{staticClass:"close",on:{click:e.closeDialog}},[e._v(e._s(e.$gt("Cancel")))]),e._v(" "),t("s-button",{staticClass:"confirm",attrs:{type:"primary"},on:{click:e.ruleRepeatConfirm}},[e._v(e._s(e.$gt("Confirm")))])],1)],1):e._e(),e._v(" "),t("div",{staticClass:"footer-submit"},[t("div",{staticClass:"footer-button"},[t("s-button",{on:{click:function(o){return e.back(!1)}}},[e._v(e._s(e.$gt("Cancel")))]),e._v(" "),t("s-button",{attrs:{loading:e.loading.submit,type:"primary"},on:{click:e.submit}},[e._v(e._s(e.$gt("Submit")))])],1)])],1)},d=[],k=l("sk9p"),z=l("P2sY"),U=l.n(z),K=l("14Xm"),c=l.n(K),D=l("D3Ub"),V=l("GQeE"),Y=l.n(V),j=l("kvrn"),L=l.n(j),Q=l("gDS+"),B=l.n(Q),m=l("m1cH"),F=l("QbLZ"),O=l("brkv"),W=l("J/PD"),H=l.n(W),pe=l("eCTY"),J=l("pcpp"),ue=l("b84n"),he=l("h2x9"),S=l("GOkr"),R=l("lbDH"),oe=l("KVpu"),_=l("QsnJ"),X=l("W7Cz"),ce=l("gYvu"),g=l("pqmQ"),v=l("N4Da"),P=l("vMZb"),q=l("NKRf"),me=l("8wBu"),fe=l("qGqs"),se=l("Azq6"),ge=l("OAr2");const be={components:{FormItem:ue.Z,SPaginatedTable:he.Z,CurrentUserStationSelector:fe.Z},mixins:[me.Z],data:function(){return{editMode:!1,proof_type:"",form:{},oldForm:{},photoGuideLinesData:void 0,remarkGuideLinesData:void 0,ruleRepeatList:{list:[],total:0},visible:{ruleRepeat:!1},loading:{detail:!1,submit:!1},initDetailData:{recipient_signature:void 0,recipient_name:void 0},HAS_NEW_RECIPIENT:P.b3,IS_ID:S.YB,IS_MY:S.vh,IS_SG:S.gY,IS_TH:S.xN,IS_VN:S.fZ,handoverStationOptions:[],handoverStationIdList:""}},computed:(0,F.Z)({},(0,pe.mapState)({proofTypeMap:function(e){return e.enums.pickupEnums.pickup_proof_type||{}},ruleFiledValueMap:function(e){return e.enums.systemEnums.pod_configuration.rule_filed_value||{}},recipientTypeMap:function(e){return e.enums.systemEnums.pod_configuration.recipient_type||{}},entityTypeMap:function(e){return e.enums.systemEnums.pod_configuration.entity_type||{}},standardBooleanConfigMap:function(e){return e.enums.systemEnums.pod_configuration.standard_boolean_config||{}},photoFromConfigMap:function(e){return e.enums.systemEnums.pod_configuration.photo_from_config||{}},pickupProofEntityType:function(e){return e.enums.pickupEnums.pickup_proof_entity_type||{}}}),{ruleRepeatColumns:function(){var e=this,t=(0,R.b5)(this.$gt("Rule ID"),"rule_id",{width:30}),a=(0,R.b5)(this.$gt("Rule Name"),"rule_name"),o=(0,R.b5)(this.$gt("Station"),"station_id",{render:function(){var x=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},b=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"";return(0,ce.ui)(b,x.station_name)}}),s=(0,R.b5)(this.$gt("Station Signature"),"operator_signature",{render:function(x,b){return(0,g.BK)(e.$store.state,"enums.systemEnums.pod_configuration.rule_filed_value",b)},width:130}),i=(0,R.b5)(this.isProofOfImplant?this.$gt("Implant Signature"):this.$gt("Driver Signature"),"driver_signature",{render:function(x,b){return(0,g.BK)(e.$store.state,"enums.systemEnums.pod_configuration.rule_filed_value",b)},width:120}),p=(0,R.b5)(this.$gt("Remark"),"remark",{render:function(x,b){return(0,g.BK)(e.$store.state,"enums.systemEnums.pod_configuration.rule_filed_value",b)},width:70}),r=(0,R.b5)(this.$gt("Photo"),"photo_options",{render:function(x,b){return v.Oc[b]},width:40});return[t,a,o,s,i,p,r]},basicFormSchema:function(){var e=this,t={ruleName:{label:this.$gt("Rule Name"),key:"rule_name",rules:[_.sO.REQUIRED.call(this,this.$gt("Rule Name")),{max:256,message:this.$gt("max length is 256"),trigger:"blur"}]},entityType:{label:this.$gt("Entity Type"),key:"entity_type",type:"radio-group",selectOptions:this.entityTypeSelectOptions,props:{disabled:this.editMode},on:{change:this.handleEntityTypeChange},rules:[_.sO.REQUIRED.call(this,this.$gt("Entity Type"))],hide:function(){var o=e.isProofHandover,s=e.form,i=e.ruleFiledValueMap,p=e.isProofOfDisable;return!!(o&&s.handover_flag===i.SKIP||p)}},ruleStatus:this.statusSchema};return t},detailFormSchema:function(){var e={DELIVERY:this.deliveryDetailFormSchema,PICKUP:this.pickupDetailFormSchema,IMPLANT:this.pickupDetailFormSchema,RETURN:this.returnDetailFormSchema,HANDOVER:this.handoverDetailFormSchema,DISABLE:this.pickupDetailFormSchema};return[].concat((0,m.Z)(e[this.proof_type]))},photoSensitiveSchema:function(){return{label:this.$gt("Blur Sensitive and Private Information from ePOD"),key:"photo_sensitive",type:"radio-group",selectOptions:[{label:this.$gt("Yes"),value:1},{label:this.$gt("No"),value:0}],rules:[_.sO.REQUIRED.call(this,this.$gt("Blur Sensitive and Private Information from ePOD"))]}},allowMassDelivery:function(){return{label:this.$gt("Allow mass delivery to same non-buyer recipient"),key:"mass_delivery_flag",type:"radio-group",selectOptions:[{label:this.$gt("Yes"),value:2},{label:this.$gt("No"),value:1}],rules:[_.sO.REQUIRED.call(this,this.$gt("Allow mass delivery to same non-buyer recipient"))]}},handoverDetailFormSchemaMandatory:function(){return[this.ruleFileNameGenerate(this.$gt("Station Signature"),"operator_signature"),this.ruleFileNameGenerate(this.$gt("Driver Signature"),"driver_signature")].concat((0,m.Z)(this.commonFormItemInfo))},handoverDetailFormSchema:function(){return this.form.handover_flag===this.ruleFiledValueMap.SKIP?this.handoverDetailFormSchemaSkip:this.handoverDetailFormSchemaMandatory},handoverDetailFormSchemaSkip:function(){return[]},OTPConfiguration:function(){return P.m4&&this.form.entity_type===this.entityTypeMap.Order},deliveryDetailFormSchema:function(){var e=this.ruleFileNameGenerate(this.$gt("Recipient Document"),"recipient_document"),t=[].concat((0,m.Z)(this.OTPConfiguration?[this.ruleFileNameGenerate(this.$gt("OTP"),"otp")]:[]),[this.ruleFileNameGenerate(this.$gt("Signature"),"recipient_signature",{},"radio-group"),this.ruleFileNameGenerate(this.$gt("Recipient Name"),"recipient_name",{},"radio-group")],(0,m.Z)(this.commonFormItemInfo),[this.photoSensitiveSchema]);return this.showMassDeliveryProp&&t.push(this.allowMassDelivery),this.showRCDocument?[e].concat((0,m.Z)(t)):t},pickupDetailFormSchema:function(){var e=this;return[this.ruleFileNameGenerate(this.$gt("Seller Signature"),"seller_signature"),this.ruleFileNameGenerate(this.$gt("Sender Name"),"sender_name",{hide:function(){return!P.wr}}),{label:this.$t("Pre-fill Sender Name"),key:"need_prefill_sender_name",type:"radio-group",rules:[_.sO.REQUIRED.call(this,this.$t("Pre-fill Sender Name"))],selectOptions:(0,g.jw)(this.$store.state,{dataPath:"enums.systemEnums.pod_configuration.standard_boolean_config"}),hide:function(){return P.wr?e.form.sender_name===e.ruleFiledValueMap.SKIP:!0}},this.ruleFileNameGenerate(this.isProofOfImplant?this.$gt("Implant Signature"):this.$gt("Driver Signature"),"driver_signature")].concat((0,m.Z)(this.commonFormItemInfo))},returnDetailFormSchema:function(){var e=this,t=[this.ruleFileNameGenerate(this.$gt("Recipient Signature"),"recipient_signature"),this.ruleFileNameGenerate(this.$gt("Recipient Name"),"recipient_name",{hide:function(){return!P.gA}}),{label:this.$t("Pre-fill Recipient Name"),key:"need_prefill_recipient_name",type:"radio-group",rules:[_.sO.REQUIRED.call(this,this.$t("Pre-fill Recipient Name"))],selectOptions:(0,g.jw)(this.$store.state,{dataPath:"enums.systemEnums.pod_configuration.standard_boolean_config"}),hide:function(){return P.gA?e.form.recipient_name===e.ruleFiledValueMap.SKIP:!0}}].concat((0,m.Z)(this.commonFormItemInfo));return this.showMassDeliveryProp&&t.push(this.allowMassDelivery),t},remarkFormItemArr:function(){var e=this,t=this.$createElement;return this.ruleFiledValueMap.SKIP!==this.form.remark?[{label:this.$t("Remark Guidelines"),key:"remark_guide_english",type:"use-custom",customSlot:function(){return t("div",{key:B()(e.remarkGuideLinesData||{})||"remark"},[t(se.Z,L()([{attrs:{formName:"remark",formData:e.remarkGuideLinesData,schema:e.remarkGuideLineSchema,maxLength:250,isRequired:!0}},{on:{getFromData:function(s){for(var i=arguments.length,p=Array(i>1?i-1:0),r=1;r<i;r++)p[r-1]=arguments[r];e.getRemarkForm.apply(e,[s].concat(p))}}}]))])},rules:[_.sO.REQUIRED.call(this,this.$t("Remark Guidelines"))]}]:[]},photoGuideLineFormItem:function(){var e=this,t=this.$createElement;return this.form.photo_options&&v._V.Skip!==this.form.photo_options?[{label:this.$t("Photo Guidelines"),key:"photo_guide_english",type:"use-custom",customSlot:function(){return t("div",{key:B()(e.photoGuideLinesData||{})||"photo"},[t(se.Z,L()([{attrs:{formName:"photo",formData:e.photoGuideLinesData,hasTips:!0,maxLength:500,schema:e.photoGuideLinesSchema,isRequired:!0}},{on:{getFromData:function(s){for(var i=arguments.length,p=Array(i>1?i-1:0),r=1;r<i;r++)p[r-1]=arguments[r];e.getPhotoGuideLineForm.apply(e,[s].concat(p))}}}]))])}}]:[]},commonFormItemInfo:function(){var e=this,t=[],a={className:"photo-options",label:this.$gt("Photo"),key:"photo_options",type:"radio-group",selectOptions:v.$X,rules:[_.sO.REQUIRED.call(this,this.$gt("Photo"))]},o=[{label:this.$gt("Photo Configuration"),key:"photo_from_config",type:"radio-group",rules:[_.sO.REQUIRED.call(this,this.$gt("Photo Configuration"))],slot:{iconName:"information",popover:{slot:v.Me}},selectOptions:Y()(this.PhotoFormConfigTrans).map(function(s){return{label:e.PhotoFormConfigTrans[s],value:Number(s)}}),hide:function(){return e.form.photo_options===v._V.Skip?!0:!e.shouldShowPhotoConf}}];return t.push(a),this.showPickupFmOtp&&t.push({label:this.$gt("FM OTP"),key:"otp",type:"radio-group",selectOptions:v.Eg,rules:[_.sO.REQUIRED.call(this,this.$gt("FM OTP"))]}),t.push.apply(t,(0,m.Z)(this.photoGuideLineFormItem)),t.push.apply(t,o),t.push(this.ruleFileNameGenerate(this.$gt("Remark"),"remark",{},"radio-group")),t.push.apply(t,(0,m.Z)(this.remarkFormItemArr)),t},isProofHandover:function(){return this.proof_type==="HANDOVER"},showDeliveryOrderAccount:function(){return P.oh&&this.isProofHandover?!1:this.form.entity_type===this.entityTypeMap.Order},showRecipientType:function(){return this.form.entity_type!==this.entityTypeMap.TO&&this.form.entity_type!==this.entityTypeMap["Transport Order"]},showRCDocument:function(){return P.vB&&this.form.entity_type===this.entityTypeMap.Order},showDeliveryMoreRecipientType:function(){return this.recipientTypeData.includes("Someone Else")},showNoOneAddressType:function(){return this.recipientTypeIsDelivery},orderAccountSelection:function(){return(0,g.jw)(this.$store.state,{dataPath:"enums.systemEnums.order_account"})},entityTypeSelectOptions:function(){var e=this,t={DELIVERY:["Order","TO"],PICKUP:["Pickup Task","FBS Pickup Task",S.YB&&"Sprinter Task"].filter(Boolean),RETURN:["Order","TO"],HANDOVER:["Handover Task"]};if(this.isProofOfImplant)return[].concat((0,m.Z)(ge.uJ));var a=this.proof_type==="PICKUP"?"enums.pickupEnums.pickup_proof_entity_type":"enums.systemEnums.pod_configuration.entity_type";return(0,g.jw)(this.$store.state,{dataPath:a}).filter(function(o){return(t[e.proof_type]||[]).includes(o.label)})},returnRecipientTypeOptions:function(){return(0,g.jw)(this.$store.state,{dataPath:"enums.systemEnums.pod_configuration.recipient_type"}).filter(function(e){return v.zI.includes(e.label)})},recipientTypeIsReturn:function(){return this.proof_type==="RETURN"},shouldShowRecipientTypeRadio:function(){return["DELIVERY","RETURN"].includes(this.proof_type)},recipientTypeIsDelivery:function(){return this.proof_type==="DELIVERY"},handoverFlagOptions:function(){return(0,g.jw)(this.$store.state,{dataPath:"enums.systemEnums.pod_configuration.rule_filed_value"}).filter(function(e){return v.eH.includes(e.label)})},recipientTypeMapIsPickup:function(){return this.proof_type==="PICKUP"},showPickupFmOtp:function(){return S.G7&&this.recipientTypeMapIsPickup},isProofOfImplant:function(){return this.proof_type==="IMPLANT"},isProofOfHandover:function(){return this.proof_type==="HANDOVER"},isProofOfDisable:function(){return this.proof_type==="DISABLE"},isPickUpModule:function(){return["PICKUP","HANDOVER","IMPLANT","DISABLE"].includes(this.proof_type)},shouldShowPhotoConf:function(){return this.recipientTypeMapIsPickup||this.recipientTypeIsReturn||this.recipientTypeIsDelivery||this.isProofOfImplant||this.isProofOfHandover||this.isProofOfDisable},showMassDeliveryProp:function(){return this.showRecipientType&&this.showDeliveryMoreRecipientType&&this.showMassDeliveryRegion}}),beforeRouteLeave:function(){var n=(0,D.Z)(c().mark(function t(a,o,s){var i=this;return c().wrap(function(r){for(;;)switch(r.prev=r.next){case 0:if(!((0,O.isEqual)(this.oldForm,this.form)||this.skipConfirmation)){r.next=3;break}return s(),r.abrupt("return");case 3:setTimeout(function(){i.$confirm({title:i.$gt("Notice"),message:i.$gt("Are you sure to cancel? Unsaved changes will be lost."),confirmButtonText:i.$gt("Yes"),cancelButtonText:i.$gt("No")}).then(function(){s()}).catch(function(){s(!1)})},200);case 4:case"end":return r.stop()}},t,this)}));function e(t,a,o){return n.apply(this,arguments)}return e}(),watch:{"form.remark":function(){var n=(0,D.Z)(c().mark(function t(a,o){return c().wrap(function(i){for(;;)switch(i.prev=i.next){case 0:if(!(this.ruleFiledValueMap.SKIP===a&&(this.form.remark_guide_english||this.form.remark_guide_local))){i.next=15;break}return i.prev=1,i.next=4,this.$confirm({title:this.$gt("Notice"),message:this.$gt("If the remark option is changed to skip, the filled remark guideline will be cleared, are you sure you want to continue?"),confirmButtonText:this.$gt("Yes"),cancelButtonText:this.$gt("No")});case 4:this.form.remark_guide_english="",this.form.remark_guide_local="",this.remarkGuideLinesData=void 0,i.next=15;break;case 9:return i.prev=9,i.t0=i.catch(1),a=o,this.form.remark=o,console.info(i.t0,o),i.abrupt("return");case 15:case"end":return i.stop()}},t,this,[[1,9]])}));function e(t,a){return n.apply(this,arguments)}return e}(),"form.photo_options":function(){var n=(0,D.Z)(c().mark(function t(a,o){return c().wrap(function(i){for(;;)switch(i.prev=i.next){case 0:if(!(v._V.Skip===a&&(this.form.photo_guide_local||this.form.photo_guide_english||this.form.photo_overall_guideline_english||this.form.photo_overall_guideline_local))){i.next=18;break}return i.prev=1,i.next=4,this.$confirm({title:this.$gt("Notice"),message:this.$gt("If the photo option is changed to skip, the filled photo guidelines will be cleared, are you sure you want to continue?"),confirmButtonText:this.$gt("Yes"),cancelButtonText:this.$gt("No")});case 4:this.form.photo_guide_local="",this.form.photo_guide_english="",this.form.photo_overall_guideline_english="",this.form.photo_overall_guideline_local="",this.photoGuideLinesData=void 0,this.form.photo_from_config=this.photoFromConfigMap["Camera only"],i.next=18;break;case 12:return i.prev=12,i.t0=i.catch(1),a=o,this.form.photo_options=o,console.info(i.t0),i.abrupt("return");case 18:case"end":return i.stop()}},t,this,[[1,12]])}));function e(t,a){return n.apply(this,arguments)}return e}(),recipientTypeData:function(e){var t=e[0];if(this.shouldShowRecipientTypeRadio&&((t==="Someone Else"&&e.length>1||t==="No one"&&e.length>1)&&(t=e[1]),t=String(this.recipientTypeMap[t])),this.form.recipient_type=t,!!this.recipientTypeIsDelivery){this.form.recipient_signature="",this.form.recipient_name="",this.form.recipient_document="";var a=["recipient_signature","recipient_name","recipient_document"];e.includes("No one")?(this.form.recipient_signature=0,this.form.recipient_name=0,this.form.recipient_document=0,this.detailFormSchema.forEach(function(o){a.includes(o.key)&&(o.props={disabled:!0})})):(this.form.recipient_signature=this.initDetailData.recipient_signature||0,this.form.recipient_name=this.initDetailData.recipient_name||0,this.form.recipient_document=this.initDetailData.recipient_document||0,this.detailFormSchema.forEach(function(o){a.includes(o.key)&&(o.props={disabled:!1})}))}},"form.sender_name":function(e){this.recipientTypeMapIsPickup&&this.ruleFiledValueMap.SKIP===e&&(this.form.need_prefill_sender_name=this.standardBooleanConfigMap.YES)},"form.recipient_name":function(e){this.recipientTypeIsReturn&&this.ruleFiledValueMap.SKIP===e&&(this.form.need_prefill_recipient_name=this.standardBooleanConfigMap.YES)}},created:function(){this.editMode=this.$route.params.action!=="create",this.proof_type=this.$route.query.proof_type,this.showMassDeliveryRegion=this.$store.getters["systemConfig/getMassDeliveryFeatFlag"]||S.G7,this.initForm(),this.editMode&&this.loadPodConfigDetail(),this.updateBreadcrumb(),S.gY?this.recipientTypeData=["No one","Riser"]:S.xN?this.recipientTypeData=["No one","Outside area of buyer house"]:this.recipientTypeData=["No one","Doorstep"],this.isProofHandover&&this.initHandoverStationOptions()},mounted:function(){},methods:{capitalize:function(e){return(0,O.capitalize)(e)},getRemarkForm:function(e){this.form=(0,F.Z)({},this.form,e),this.remarkGuideLinesData=e},getPhotoGuideLineForm:function(e){this.form=(0,F.Z)({},this.form,e),this.photoGuideLinesData=e},updateBreadcrumb:function(){var e=(0,q.j4)(this.proof_type,this.$route),t=[{link:void 0,title:this.$t("Basic Data")},{link:e,title:this.$t("Proof Configuration")},{link:"",title:this.$t("Proof Configuration Detail")}];this.$store.dispatch("sharedBreadcrumb/updateBreadcrumb",t)},loadPodConfigDetail:function(){var n=(0,D.Z)(c().mark(function t(){var a=this,o,s,i,p,r,h,x,b,T,M,w,C,I,N,A,ee,u,Z,G,te,ne,ie,ae,re,le,de;return c().wrap(function(f){for(;;)switch(f.prev=f.next){case 0:if(f.prev=0,(0,g.K4)(this,"detail",!0),o={rule_id:this.$route.query.rule_id},s=void 0,!this.isPickUpModule){f.next=10;break}return f.next=7,J.Z.getProofRuleDetail(o);case 7:s=f.sent,f.next=13;break;case 10:return f.next=12,this.$store.dispatch("podConfig/loadPodConfigDetail",o);case 12:s=f.sent;case 13:i=s,p=i.data,r=p===void 0?{}:p,h="",this.shouldShowRecipientTypeRadio&&(h=r.recipient_type,h=H()(this.recipientTypeMap)[Number(h)],this.recipientTypeData=[h],["Buyer","Seller","WH"].includes(h)||(v.FO.includes(h)?(this.recipientTypeData=["No one",h],h="No one"):v.Fm.includes(h)&&(this.recipientTypeData=["Someone Else",h],h="Someone Else"))),x=r.order_account===""?[]:r.order_account.split(",").map(function(ke){return Number(ke)}),b=this.standardBooleanConfigMap,T=this.ruleFiledValueMap,M=this.photoFromConfigMap,w=r.sender_name,C=r.recipient_name,I=r.photo_options,N=r.need_prefill_sender_name,A=r.need_prefill_recipient_name,ee=r.photo_from_config,u=r.remark_guide_english,Z=r.remark_guide_local,G=r.photo_guide_local,te=r.photo_guide_english,ne=r.photo_overall_guideline_english,ie=r.photo_overall_guideline_local,ae=T.SKIP,re=b.YES,le=v._V.Skip,de=M["Camera only"],this.remarkGuideLinesData={remark_guide_english:u,remark_guide_local:Z},this.photoGuideLinesData={photo_guide_local:G,photo_guide_english:te,photo_overall_guideline_english:ne,photo_overall_guideline_local:ie},this.form=(0,F.Z)({},this.form,{rule_name:r.rule_name,entity_type:r.entity_type,order_account:x,recipient_type:h,recipient_signature:r.recipient_signature,recipient_document:r.recipient_document,otp:r.otp,seller_signature:r.seller_signature,driver_signature:r.driver_signature,recipient_name:C,photo_options:I,remark:r.remark,photo_guide_local:G,photo_guide_english:te,photo_overall_guideline_english:ne,photo_overall_guideline_local:ie,remark_guide_english:u,remark_guide_local:Z,rule_status:r.rule_status,station_id:r.station_id,operator_signature:r.operator_signature,photo_sensitive:r.photo_sensitive,handover_flag:r.handover_flag,sender_name:w,need_prefill_sender_name:w===ae?re:N,need_prefill_recipient_name:C===ae?re:A,photo_from_config:I===le?de:ee,mass_delivery_flag:r.mass_delivery_flag||1}),this.$nextTick(function(){a.oldForm=U()({},a.form)}),this.initDetailData={recipient_signature:r.recipient_signature,recipient_name:r.recipient_name,recipient_document:r.recipient_document},f.next=33;break;case 30:f.prev=30,f.t0=f.catch(0),console.error("load POD configuration detail error: ",f.t0);case 33:return f.prev=33,(0,g.K4)(this,"detail",!1),f.finish(33);case 36:case"end":return f.stop()}},t,this,[[0,30,33,36]])}));function e(){return n.apply(this,arguments)}return e}(),updatePodConfig:function(){var n=(0,D.Z)(c().mark(function t(){var a=this,o=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},s,i,p,r,h,x,b,T,M,w,C,I,N,A;return c().wrap(function(u){for(;;)switch(u.prev=u.next){case 0:if(s=o.editMode,i=o.rule_id,u.prev=1,p=s?"editPodConfig":"createPodConfig",(0,g.K4)(this,"submit",!0),r="",this.shouldShowRecipientTypeRadio&&(r=this.recipientTypeData[0],(r==="Someone Else"||r==="No one"&&this.recipientTypeIsDelivery)&&(r=this.recipientTypeData.length>1?this.recipientTypeData[1]:this.recipientTypeData[0]),r=String(this.recipientTypeMap[r])),h=(0,F.Z)({},this.form,{rule_id:i,recipient_type:this.form.entity_type===this.entityTypeMap.TO||this.form.entity_type===this.entityTypeMap["Transport Order"]?"":r,proof_type:this.proofTypeMap[this.proof_type],mass_delivery_flag:!this.showMassDeliveryProp&&this.form.mass_delivery_flag?0:this.form.mass_delivery_flag}),this.isProofHandover&&!s&&(x=h.station_id_list.includes("ALL"),x&&(h.station_id_list=this.handoverStationIdList)),this.isProofOfDisable&&(h.entity_type=this.pickupProofEntityType["Disable Pickup Task"]),this.showPickupFmOtp&&(h.otp=Number(h.otp)),b=(0,oe.wG)((0,g.Lt)(h)),T=void 0,!this.isPickUpModule){u.next=25;break}if(!s){u.next=19;break}return u.next=16,J.Z.editProofRule(b);case 16:u.t0=u.sent,u.next=22;break;case 19:return u.next=21,J.Z.createProofRule(b);case 21:u.t0=u.sent;case 22:T=u.t0,u.next=28;break;case 25:return u.next=27,this.$store.dispatch("podConfig/"+p,(0,oe.wG)((0,g.Lt)(h)));case 27:T=u.sent;case 28:M=T,w=M.data,C=w===void 0?{}:w,this.oldForm=(0,F.Z)({},this.form),I=s?"":this.$gt("proof of {proof_type} Rule ID is {rule_id}",null,{proof_type:this.proof_type,rule_id:C.rule_id}),N={backBtnTip:"OK",type:"success",backBtnType:"primary",feedbackTitle:s?this.$gt("Updated Successfully"):this.$gt("Created Successfully"),onBack:function(G){G(),a.skipConfirmation=!0,a.back(!0)}},this.isProofHandover?(this.$message.success(s?this.$t("MSG_SUCCESS.edit"):this.$t("MSG_SUCCESS.create")),this.skipConfirmation=!0,this.back(!0)):this.$feedback(I,N),u.next=40;break;case 35:u.prev=35,u.t1=u.catch(1),A=this.$gt("update {proof_type} reason error: {message}",null,{proof_type:this.proof_type,message:u.t1.message}),this.$feedback(A,{type:"fail"}),console.error("update "+this.proof_type+" reason error: ",u.t1);case 40:return u.prev=40,(0,g.K4)(this,"submit",!1),u.finish(40);case 43:case"end":return u.stop()}},t,this,[[1,35,40,43]])}));function e(){return n.apply(this,arguments)}return e}(),getDefaultForm:function(){var e=this.ruleFiledValueMap.SKIP,t=v._V.Skip,a=this.ruleFiledValueMap.MANDATORY,o=this.standardBooleanConfigMap.YES,s=this.photoFromConfigMap["Camera only"],i={recipient_document:e,recipient_signature:e,seller_signature:e,operator_signature:e,driver_signature:e,recipient_name:e,photo_options:t,remark:e,handover_flag:a,sender_name:e,need_prefill_sender_name:o,need_prefill_recipient_name:o,photo_from_config:s};return this.isProofHandover&&(i.entity_type=this.entityTypeSelectOptions[0].value),(0,F.Z)({rule_name:"",station_id:void 0,entity_type:void 0,order_account:[],recipient_type:void 0,recipient_signature:void 0,recipient_document:void 0,seller_signature:void 0,driver_signature:void 0,operator_signature:void 0,recipient_name:void 0,photo_options:void 0,remark:void 0,remark_guide_english:"",remark_guide_local:"",photo_guide_english:"",photo_guide_local:"",photo_overall_guideline_english:"",photo_overall_guideline_local:"",rule_status:0,photo_sensitive:1,station_id_list:[],handover_flag:void 0,otp:this.showPickupFmOtp?0:1,mass_delivery_flag:1},i)},initForm:function(){this.form=this.getDefaultForm()},getRequiredRules:function(e){return[_.sO.REQUIRED.call(this,e)]},ruleFileNameGenerate:function(e,t){var a=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},o=arguments.length>3&&arguments[3]!==void 0?arguments[3]:"radio-group",s=(0,g.jw)(this.$store.state,{dataPath:"enums.systemEnums.pod_configuration.rule_filed_value"});return s.forEach(function(i){i.label=(0,O.capitalize)(i.label)}),(0,F.Z)({label:e,key:t,type:o,selectOptions:s,rules:[_.sO.REQUIRED.call(this,e)]},a)},handleEntityTypeChange:function(){this.showDeliveryOrderAccount||(this.form.order_account=[])},back:function(){var n=(0,D.Z)(c().mark(function t(){var a=arguments.length>0&&arguments[0]!==void 0?arguments[0]:!1,o;return c().wrap(function(i){for(;;)switch(i.prev=i.next){case 0:if(o=(0,q.j4)(this.proof_type,this.$route),!((0,O.isEqual)(this.oldForm,this.form)||a)){i.next=4;break}return this.$router.push(o),i.abrupt("return");case 4:return i.prev=4,i.next=7,this.$confirm({title:this.$gt("Notice"),message:this.$gt("Are you sure to cancel? Unsaved changes will be lost."),confirmButtonText:this.$gt("Yes"),cancelButtonText:this.$gt("No")});case 7:this.skipConfirmation=!0,this.$router.push(o),i.next=14;break;case 11:i.prev=11,i.t0=i.catch(4),console.error("close confirm dialog:",i.t0);case 14:case"end":return i.stop()}},t,this,[[4,11]])}));function e(){return n.apply(this,arguments)}return e}(),submit:function(){var n=(0,D.Z)(c().mark(function t(){var a,o,s;return c().wrap(function(p){for(;;)switch(p.prev=p.next){case 0:if((0,X.SN)(this.$refs.basicForm,"basicForm"),(0,X.SN)(this.$refs.detailForm,"detailForm"),a=this.$refs.detailForm.$children.filter(function(r){return r.schema&&["remark_guide_english","photo_guide_english"].includes(r.schema.key)}),a.length&&a.forEach(function(r){(0,X.SN)(r.$children[0].$children[0].$children[0],"guidelineForm")}),p.prev=4,o=this.editMode?this.$gt("Are you sure to edit {proof_type} reason?",null,{proof_type:this.proof_type}):this.$gt("Are you sure to create new {proof_type} reason?",null,{proof_type:this.proof_type}),this.isProofHandover){p.next=9;break}return p.next=9,this.$confirm(o,this.$gt("Notice"));case 9:s=this.editMode?Number(this.$route.query.rule_id):void 0,this.updatePodConfig({rule_id:s,editMode:this.editMode}),p.next=16;break;case 13:p.prev=13,p.t0=p.catch(4),console.error("close confirm dialog: ",p.t0);case 16:case"end":return p.stop()}},t,this,[[4,13]])}));function e(){return n.apply(this,arguments)}return e}(),ruleRepeatConfirm:function(){var e=this.ruleRepeatList.list,t=e===void 0?[]:e,a=(0,k.Z)(t,1),o=a[0],s=o===void 0?{}:o,i=s.rule_id||s.id;this.updatePodConfig({rule_id:i,editMode:!0}),this.visible.ruleRepeat=!1},closeDialog:function(){this.visible.ruleRepeat=!1,this.ruleRepeatList={list:[],total:0}},initHandoverStationOptions:function(){var n=(0,D.Z)(c().mark(function t(){var a;return c().wrap(function(s){for(;;)switch(s.prev=s.next){case 0:return s.prev=0,s.next=3,(0,q.Pc)();case 3:a=s.sent,this.handoverStationOptions=a,this.handoverStationIdList=a.map(function(i){return i.value}).join(","),s.next=11;break;case 8:s.prev=8,s.t0=s.catch(0),console.error("Failed to init handover station options: ",s.t0);case 11:case"end":return s.stop()}},t,this,[[0,8]])}));function e(){return n.apply(this,arguments)}return e}(),onHandoverFlagChange:function(e){if(e===this.ruleFiledValueMap.SKIP){var t=this.form,a=t.rule_name,o=t.station_id,s=t.station_id_list,i=t.handover_flag,p=t.rule_status;this.form=(0,F.Z)({},this.getDefaultForm(),{rule_name:a,station_id:o,station_id_list:s,handover_flag:i,rule_status:p})}}}};var xe=l("DazZ"),ve=l("KHd+"),ye=(0,ve.Z)(be,y,d,!1,null,"4dd43b5b",null);const _e=ye.exports},DazZ:(E,$,l)=>{var y=l("b7aI");typeof y=="string"&&(y=[[E.id,y,""]]),y.locals&&(E.exports=y.locals);var d=l("er8A").Z,k=d("26634fb0",y,!0,{})}}]);
