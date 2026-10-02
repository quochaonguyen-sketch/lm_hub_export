"use strict";(self.webpackChunkzzz_fms_admin=self.webpackChunkzzz_fms_admin||[]).push([[2317],{cDl2:(x,f,t)=>{t.r(f),t.d(f,{DevToolsManager:()=>m});var u=t("Istr"),y=t("hGNN"),a=t("rkk0"),w=t("+vDx"),k=t("N8i0"),z=t("RhbM"),C=t("O4oM"),E=t("NAgz"),M=t("q2IZ"),D=t("8f45"),R=t("5dkM");class d{static getDefaultPosition(n=d.DEFAULT_PANEL_SIZE){if(typeof window>"u")return{x:20,y:20};const{innerWidth:o,innerHeight:s}=window;return{x:o-n.width-d.MARGIN,y:s-n.height-d.MARGIN}}static calculatePosition(n,o=d.DEFAULT_PANEL_SIZE){if(typeof n=="object")return d.constrainPosition(n,o);if(typeof window>"u")return{x:20,y:20};const{innerWidth:s,innerHeight:l}=window,e=d.MARGIN;switch(n){case"top-left":return{x:e,y:e};case"top-right":return{x:s-o.width-e,y:e};case"bottom-left":return{x:e,y:l-o.height-e};default:return d.getDefaultPosition(o)}}static constrainPosition(n,o=d.DEFAULT_PANEL_SIZE){if(typeof window>"u")return n;const{innerWidth:s,innerHeight:l}=window,e=d.MARGIN;return{x:Math.max(e,Math.min(s-o.width-e,n.x)),y:Math.max(e,Math.min(l-o.height-e,n.y))}}static isPositionValid(n,o=d.DEFAULT_PANEL_SIZE){if(typeof window>"u")return!0;const{innerWidth:s,innerHeight:l}=window,e=d.MARGIN;return n.x>=e&&n.y>=e&&n.x+o.width<=s-e&&n.y+o.height<=l-e}static adjustPositionOnResize(n,o=d.DEFAULT_PANEL_SIZE){return d.isPositionValid(n,o)?n:d.constrainPosition(n,o)}}d.DEFAULT_PANEL_SIZE={width:400,height:650},d.MARGIN=20;class i{static inject(){if(typeof document>"u"||i.injected)return;if(document.getElementById(i.STYLE_ID))return void(i.injected=!0);const n=document.createElement("style");n.id=i.STYLE_ID,n.textContent=`/**
 * SSC FE Core 2.0 \u5F00\u53D1\u5DE5\u5177\u6837\u5F0F
 * \u4E13\u4E1A\u7684\u5F00\u53D1\u8005\u5DE5\u5177 UI \u6837\u5F0F
 */

.ssc-devtools-panel {
  width: 100%;
  height: 100%;
  background: #1e1e1e;
  border: 1px solid #333;
  border-radius: 8px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.3);
  color: #fff;
  overflow: hidden;
  transition: max-height 0.3s ease;
}

.ssc-devtools-panel.light {
  background: #fff;
  border-color: #ddd;
  color: #333;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
}

.ssc-devtools-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 8px 12px;
  background: #2d2d2d;
  border-bottom: 1px solid #333;
  user-select: none;
  border-radius: 8px 8px 0 0;
}

.ssc-devtools-panel.light .ssc-devtools-header {
  background: #f5f5f5;
  border-bottom-color: #ddd;
}

.ssc-devtools-title {
  font-weight: 600;
  font-size: 13px;
}

.ssc-devtools-controls {
  display: flex;
  gap: 4px;
}

.ssc-devtools-controls button {
  width: 20px;
  height: 20px;
  border: none;
  background: #444;
  color: #fff;
  border-radius: 3px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 12px;
  line-height: 1;
}

.ssc-devtools-panel.light .ssc-devtools-controls button {
  background: #ddd;
  color: #333;
}

.ssc-devtools-controls button:hover {
  background: #555;
}

.ssc-devtools-panel.light .ssc-devtools-controls button:hover {
  background: #ccc;
}

.ssc-devtools-tabs {
  display: flex;
  background: #252525;
  border-bottom: 1px solid #333;
}

.ssc-devtools-panel.light .ssc-devtools-tabs {
  background: #f0f0f0;
  border-bottom-color: #ddd;
}

.ssc-devtools-tab {
  flex: 1;
  padding: 8px 12px;
  border: none;
  background: transparent;
  color: #ccc;
  cursor: pointer;
  font-size: 11px;
  border-right: 1px solid #333;
  transition: all 0.2s ease;
}

.ssc-devtools-panel.light .ssc-devtools-tab {
  color: #666;
  border-right-color: #ddd;
}

.ssc-devtools-tab:last-child {
  border-right: none;
}

.ssc-devtools-tab:hover {
  background: #333;
  color: #fff;
}

.ssc-devtools-panel.light .ssc-devtools-tab:hover {
  background: #e0e0e0;
  color: #333;
}

.ssc-devtools-tab.active {
  background: #007acc;
  color: #fff;
}

.ssc-devtools-content {
  padding: 12px;
  max-height: calc(100% - 70px);
  overflow-y: auto;
}

.ssc-devtools-tab-content h3 {
  margin: 0 0 12px 0;
  font-size: 13px;
  font-weight: 600;
  color: #fff;
}

.ssc-devtools-panel.light .ssc-devtools-tab-content h3 {
  color: #333;
}

.ssc-devtools-tab-content h4 {
  margin: 16px 0 8px 0;
  font-size: 12px;
  font-weight: 500;
  color: #ccc;
}

.ssc-devtools-panel.light .ssc-devtools-tab-content h4 {
  color: #666;
}

.ssc-devtools-modules {
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.ssc-devtools-module {
  background: #2a2a2a;
  padding: 12px;
  border-radius: 6px;
  border: 1px solid #333;
}

.ssc-devtools-panel.light .ssc-devtools-module {
  background: #f8f8f8;
  border-color: #ddd;
}

.ssc-devtools-label {
  display: block;
  font-weight: 500;
  margin-bottom: 8px;
  color: #fff;
}

.ssc-devtools-panel.light .ssc-devtools-label {
  color: #333;
}

.ssc-devtools-url-config {
  display: flex;
  flex-direction: column;
  gap: 6px;
}

.ssc-devtools-original-url {
  font-size: 10px;
  color: #888;
  word-break: break-all;
}

.ssc-devtools-input,
.ssc-devtools-textarea {
  width: 100%;
  padding: 6px 8px;
  border: 1px solid #444;
  border-radius: 4px;
  background: #1a1a1a;
  color: #fff;
  font-size: 11px;
  font-family: inherit;
  box-sizing: border-box;
}

.ssc-devtools-panel.light .ssc-devtools-input,
.ssc-devtools-panel.light .ssc-devtools-textarea {
  background: #fff;
  border-color: #ccc;
  color: #333;
}

.ssc-devtools-input:focus,
.ssc-devtools-textarea:focus {
  outline: none;
  border-color: #007acc;
}

.ssc-devtools-textarea {
  resize: vertical;
  min-height: 200px;
  max-height: 300px;
  font-family: 'SFMono-Regular', Consolas, 'Liberation Mono', Menlo, monospace;
}

.ssc-devtools-json-error {
  color: #ef4444;
  font-size: 11px;
  margin-top: 8px;
  padding: 8px;
  background: rgba(239, 68, 68, 0.1);
  border: 1px solid rgba(239, 68, 68, 0.3);
  border-radius: 4px;
}

.ssc-devtools-actions {
  display: flex;
  gap: 8px;
  margin-top: 16px;
  padding-top: 12px;
  border-top: 1px solid #333;
}

.ssc-devtools-panel.light .ssc-devtools-actions {
  border-top-color: #ddd;
}

.ssc-devtools-btn {
  padding: 6px 12px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 11px;
  font-weight: 500;
  transition: all 0.2s ease;
}

.ssc-devtools-btn-primary {
  background: #007acc;
  color: #fff;
}

.ssc-devtools-btn-primary:hover {
  background: #005a9e;
}

.ssc-devtools-btn-secondary {
  background: #444;
  color: #fff;
}

.ssc-devtools-panel.light .ssc-devtools-btn-secondary {
  background: #ddd;
  color: #333;
}

.ssc-devtools-btn-secondary:hover {
  background: #555;
}

.ssc-devtools-btn:disabled {
  opacity: 0.5;
  cursor: not-allowed;
}

.ssc-devtools-btn:disabled:hover {
  background: #666 !important;
}

.ssc-devtools-panel.light .ssc-devtools-btn-secondary:hover {
  background: #ccc;
}

/* \u5B50\u5E94\u7528\u8868\u5355\u6837\u5F0F */
.ssc-devtools-add-module {
  border: 1px dashed #4a5568;
  padding: 12px;
  margin-bottom: 16px;
  border-radius: 4px;
  background: #252525;
}

.ssc-devtools-panel.light .ssc-devtools-add-module {
  background: #fafafa;
  border-color: #bbb;
}

.ssc-devtools-add-module h4 {
  margin: 0 0 12px 0;
  font-size: 12px;
  font-weight: 600;
}

.ssc-devtools-form-group {
  margin-bottom: 12px;
}

.ssc-devtools-form-group label {
  display: block;
  margin-bottom: 4px;
  font-weight: 500;
  font-size: 11px;
}

.ssc-devtools-form-group input,
.ssc-devtools-form-group select,
.ssc-devtools-form-group textarea {
  width: 100%;
  padding: 6px 8px;
  border: 1px solid #4a5568;
  border-radius: 4px;
  background: #1a202c;
  color: #e2e8f0;
  font-size: 11px;
  box-sizing: border-box;
}

.ssc-devtools-panel.light .ssc-devtools-form-group input,
.ssc-devtools-panel.light .ssc-devtools-form-group select,
.ssc-devtools-panel.light .ssc-devtools-form-group textarea {
  background: #fff;
  border-color: #ccc;
  color: #333;
}

.ssc-devtools-form-group small {
  display: block;
  margin-top: 4px;
  color: #a0aec0;
  font-size: 10px;
}

.ssc-devtools-panel.light .ssc-devtools-form-group small {
  color: #666;
}

.ssc-devtools-form-group small a {
  color: #4299e1;
  text-decoration: none;
}

.ssc-devtools-form-group small a:hover {
  text-decoration: underline;
}

/* Mock \u6807\u8BB0\u6837\u5F0F */
.ssc-devtools-module.custom {
  border-color: #f59e0b;
  border-width: 2px;
}

/* \u7F16\u8F91\u72B6\u6001 */
.ssc-devtools-module.editing {
  border-color: #007acc;
  background: #1a1a1a;
  padding: 16px;
}

.ssc-devtools-panel.light .ssc-devtools-module.editing {
  background: #f5f5f5;
}

/* \u7981\u7528\u72B6\u6001 */
.ssc-devtools-module.disabled {
  opacity: 0.5;
  border-color: #666;
}

.ssc-devtools-module.disabled .ssc-devtools-label {
  text-decoration: line-through;
}

.ssc-devtools-badge {
  display: inline-block;
  margin-left: 8px;
  padding: 2px 6px;
  font-size: 10px;
  background: #f59e0b;
  color: #000;
  border-radius: 3px;
  font-weight: bold;
}

.ssc-devtools-badge.disabled {
  background: #666;
  color: #fff;
}

/* \u6A21\u5757\u64CD\u4F5C\u6309\u94AE\u7EC4 */
.ssc-devtools-module-actions {
  display: flex;
  gap: 4px;
}

.ssc-devtools-module-actions button {
  background: transparent;
  border: none;
  color: #ccc;
  cursor: pointer;
  padding: 4px 6px;
  font-size: 14px;
  border-radius: 3px;
  transition: background 0.2s;
}

.ssc-devtools-panel.light .ssc-devtools-module-actions button {
  color: #666;
}

.ssc-devtools-module-actions button:hover {
  background: rgba(255, 255, 255, 0.1);
}

.ssc-devtools-panel.light .ssc-devtools-module-actions button:hover {
  background: rgba(0, 0, 0, 0.05);
}

/* \u6A21\u5757\u4FE1\u606F\u5C55\u793A */
.ssc-devtools-module-info {
  margin-top: 8px;
  padding-top: 8px;
  border-top: 1px solid #333;
}

.ssc-devtools-panel.light .ssc-devtools-module-info {
  border-top-color: #ddd;
}

.ssc-devtools-info-row {
  display: flex;
  gap: 8px;
  margin-bottom: 4px;
  font-size: 11px;
}

.ssc-devtools-info-label {
  color: #888;
  min-width: 40px;
}

.ssc-devtools-info-value {
  color: #ccc;
  word-break: break-all;
}

.ssc-devtools-panel.light .ssc-devtools-info-value {
  color: #666;
}

/* \u6241\u5E73\u5316\u7F16\u8F91\u8868\u5355 */
.ssc-devtools-edit-form {
  display: grid;
  gap: 12px;
}

.ssc-devtools-edit-form h4 {
  margin: 0 0 8px 0;
  font-size: 13px;
  color: #fff;
}

.ssc-devtools-panel.light .ssc-devtools-edit-form h4 {
  color: #333;
}

.ssc-devtools-form-row {
  display: grid;
  grid-template-columns: 100px 1fr;
  gap: 8px;
  align-items: center;
}

.ssc-devtools-form-row label {
  font-size: 11px;
  font-weight: 500;
  color: #ccc;
}

.ssc-devtools-panel.light .ssc-devtools-form-row label {
  color: #666;
}

.ssc-devtools-form-row input,
.ssc-devtools-form-row select {
  width: 100%;
  padding: 6px 8px;
  border: 1px solid #4a5568;
  border-radius: 4px;
  background: #2a2a2a;
  color: #e2e8f0;
  font-size: 11px;
  box-sizing: border-box;
}

.ssc-devtools-panel.light .ssc-devtools-form-row input,
.ssc-devtools-panel.light .ssc-devtools-form-row select {
  background: #fff;
  border-color: #ccc;
  color: #333;
}

.ssc-devtools-form-row input:focus,
.ssc-devtools-form-row select:focus {
  outline: none;
  border-color: #007acc;
}

.ssc-devtools-form-row.full {
  grid-template-columns: 1fr;
}

.ssc-devtools-btn-icon {
  background: transparent;
  border: none;
  color: #ef4444;
  cursor: pointer;
  padding: 4px 8px;
  font-size: 16px;
  line-height: 1;
}

.ssc-devtools-btn-icon:hover {
  background: rgba(239, 68, 68, 0.1);
  border-radius: 4px;
}

.ssc-devtools-panel.light .ssc-devtools-btn-icon {
  color: #dc2626;
}

.ssc-devtools-panel.light .ssc-devtools-btn-icon:hover {
  background: rgba(220, 38, 38, 0.1);
}

.ssc-devtools-info {
  display: flex;
  flex-direction: column;
  gap: 8px;
  margin-bottom: 16px;
}

.ssc-devtools-info-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 6px 8px;
  background: #2a2a2a;
  border-radius: 4px;
  font-size: 11px;
}

.ssc-devtools-panel.light .ssc-devtools-info-item {
  background: #f8f8f8;
}

.ssc-devtools-info-item label {
  font-weight: 500;
  color: #ccc;
}

.ssc-devtools-panel.light .ssc-devtools-info-item label {
  color: #666;
}

.ssc-devtools-status {
  padding: 2px 6px;
  border-radius: 3px;
  font-size: 10px;
  font-weight: 500;
}

.ssc-devtools-status.connected {
  background: #28a745;
  color: #fff;
}

.ssc-devtools-status.disconnected {
  background: #dc3545;
  color: #fff;
}

.ssc-devtools-portal-data {
  margin-bottom: 16px;
}

.ssc-devtools-code {
  background: #1a1a1a;
  padding: 8px;
  border-radius: 4px;
  font-size: 10px;
  font-family: 'SFMono-Regular', Consolas, 'Liberation Mono', Menlo, monospace;
  color: #ccc;
  overflow-x: auto;
  max-height: 200px;
  overflow-y: auto;
  white-space: pre;
}

.ssc-devtools-panel.light .ssc-devtools-code {
  background: #f8f8f8;
  color: #333;
}

.ssc-devtools-plugins {
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.ssc-devtools-plugin {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 8px;
  background: #2a2a2a;
  border-radius: 4px;
  font-size: 11px;
}

.ssc-devtools-panel.light .ssc-devtools-plugin {
  background: #f8f8f8;
}

.ssc-devtools-plugin-name {
  font-weight: 500;
  color: #fff;
}

.ssc-devtools-panel.light .ssc-devtools-plugin-name {
  color: #333;
}

.ssc-devtools-config-help {
  background: #2a2a2a;
  border: 1px solid #444;
  border-radius: 4px;
  padding: 12px;
  margin-bottom: 12px;
  font-size: 12px;
}

.ssc-devtools-config-help p {
  margin: 0 0 8px 0;
}

.ssc-devtools-config-help code {
  background: #333;
  color: #6ba7f7;
  padding: 2px 4px;
  border-radius: 3px;
  font-size: 11px;
}

.ssc-devtools-config-help details {
  margin-top: 8px;
}

.ssc-devtools-config-help summary {
  cursor: pointer;
  color: #6ba7f7;
  font-weight: 500;
}

.ssc-devtools-config-help summary:hover {
  color: #8bb9ff;
}

.ssc-devtools-config-docs {
  margin-top: 8px;
}

.ssc-devtools-config-docs h4 {
  margin: 0 0 8px 0;
  font-size: 12px;
  color: #ccc;
}

.ssc-devtools-config-docs ul {
  margin: 0;
  padding-left: 16px;
}

.ssc-devtools-config-docs li {
  margin-bottom: 4px;
}

.ssc-devtools-config-docs a {
  color: #6ba7f7;
  text-decoration: none;
}

.ssc-devtools-config-docs a:hover {
  color: #8bb9ff;
  text-decoration: underline;
}

.ssc-devtools-config-editor {
  margin-bottom: 16px;
}

/* \u6700\u5C0F\u5316\u72B6\u6001\u6837\u5F0F */
.ssc-devtools-panel.minimized .ssc-devtools-tabs,
.ssc-devtools-panel.minimized .ssc-devtools-content {
  display: none;
}

.ssc-devtools-panel.minimized {
  border-radius: 20px !important;
}

.ssc-devtools-panel.minimized .ssc-devtools-header {
  border-radius: 20px !important;
  justify-content: center;
}

.ssc-devtools-panel.minimized .ssc-devtools-title {
  font-size: 11px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

/* \u8D34\u8FB9\u72B6\u6001\u6837\u5F0F */
.ssc-devtools-panel.near-edge {
  opacity: 0.8;
}

.ssc-devtools-panel.near-edge:hover {
  opacity: 1;
}

/* \u9690\u85CF\u5230\u8FB9\u7F18\u72B6\u6001\u6837\u5F0F */
.ssc-devtools-panel.hidden-to-edge {
  opacity: 0.6;
  cursor: pointer;
}

.ssc-devtools-panel.hidden-to-edge:hover {
  opacity: 1;
}

/* \u52A8\u753B\u6837\u5F0F */
.ssc-devtools-panel.animating {
  transition: all 0.3s ease-out !important;
}

/* Toast \u52A8\u753B */
@keyframes slideInRight {
  from {
    transform: translateX(100%);
    opacity: 0;
  }
  to {
    transform: translateX(0);
    opacity: 1;
  }
}

@keyframes slideOutRight {
  from {
    transform: translateX(0);
    opacity: 1;
  }
  to {
    transform: translateX(100%);
    opacity: 0;
  }
}

/* \u54CD\u5E94\u5F0F\u8C03\u6574 */
@media (max-width: 480px) {
  .ssc-devtools-panel {
    width: calc(100vw - 20px) !important;
    left: 10px !important;
  }
}

/* \u6EDA\u52A8\u6761\u6837\u5F0F */
.ssc-devtools-content::-webkit-scrollbar,
.ssc-devtools-code::-webkit-scrollbar {
  width: 6px;
}

.ssc-devtools-content::-webkit-scrollbar-track,
.ssc-devtools-code::-webkit-scrollbar-track {
  background: #2a2a2a;
}

.ssc-devtools-content::-webkit-scrollbar-thumb,
.ssc-devtools-code::-webkit-scrollbar-thumb {
  background: #555;
  border-radius: 3px;
}

.ssc-devtools-content::-webkit-scrollbar-thumb:hover,
.ssc-devtools-code::-webkit-scrollbar-thumb:hover {
  background: #666;
}
`,document.head.appendChild(n),i.injected=!0,console.log("[DevTools] Styles injected successfully")}static remove(){if(typeof document>"u")return;const n=document.getElementById(i.STYLE_ID);n&&(n.remove(),i.injected=!1,console.log("[DevTools] Styles removed"))}static isInjected(){return i.injected}static refresh(){i.remove(),i.inject()}}i.STYLE_ID="ssc-dev-tools-styles",i.injected=!1;class m{constructor(n,o={}){var s;this.core=n,this.options=Object.assign({position:"bottom-right",theme:"auto",hotkey:void 0,autoShow:!1},o),this.state={visible:(s=this.options.autoShow)!==null&&s!==void 0&&s,minimized:!0,position:d.calculatePosition(this.options.position),activeTab:"loader",overrides:{}},this.init()}init(){this.registerHotkey(),this.state.visible&&setTimeout(()=>this.createPanel(),100)}registerHotkey(){typeof window<"u"&&this.options.hotkey&&(this.hotkeyListener=n=>{const o=this.options.hotkey.split("+").map(r=>r.trim()),s=o[o.length-1],l=o.slice(0,-1);let e=!0;for(const r of l)r!=="Ctrl"||n.ctrlKey||(e=!1),r!=="Alt"||n.altKey||(e=!1),r!=="Shift"||n.shiftKey||(e=!1),r!=="Meta"||n.metaKey||(e=!1);!e||n.key!==s&&n.key!==s.toLowerCase()||(n.preventDefault(),this.toggle())},window.addEventListener("keydown",this.hotkeyListener))}show(){this.state.visible||(this.state.visible=!0,this.panelContainer?this.panelContainer.style.display="block":this.createPanel())}hide(){this.state.visible&&(this.state.visible=!1,this.panelContainer&&(this.panelContainer.style.display="none"))}toggle(){this.state.visible?this.hide():this.show()}updateConfig(n,o){var s,l,e;const r=(0,a.Pt)()||{version:"1.0.0",isActive:!1,timestamp:Date.now()};let v=r.baseline,h=r.appCenterSnapshot;if(o?.saveBaseline!==!1){const p=(s=this.core.context)===null||s===void 0?void 0:s.appCenter,c=(l=p?.getProcessedConfig)===null||l===void 0?void 0:l.call(p),g=(e=this.core.options)===null||e===void 0?void 0:e.overrides;(c||g)&&(v={appCenterHash:c?(0,a.bh)(c):void 0,overridesHash:g?(0,a.bh)(g):void 0,timestamp:Date.now()},c?.modules&&(h={modules:c.modules,timestamp:Date.now()}))}const b=Object.assign(Object.assign(Object.assign({},r),n),{isActive:!0,timestamp:Date.now(),baseline:v,appCenterSnapshot:h});(0,a.op)(b),console.log("[DevToolsManager] Config updated:",b)}resetConfig(){typeof sessionStorage<"u"&&((0,a.vE)(),console.log("[DevToolsManager] Config reset, reloading page..."),window.location.reload())}getFinalConfig(){return(0,a.Pt)()}isUsingDevToolsConfig(){const n=(0,a.Pt)();return n?.isActive===!0}getConfigSourceLabel(){if(this.isUsingDevToolsConfig())return"DevTools \u914D\u7F6E";const n=this.core.originalPortalId;return n?`\u4F7F\u7528 ${n} \u5E94\u7528\u4E2D\u5FC3\u914D\u7F6E`:"\u4F7F\u7528\u4EE3\u7801\u914D\u7F6E"}createPanel(){typeof window<"u"&&(this.panelContainer=document.createElement("div"),this.panelContainer.id="ssc-dev-tools-panel",i.inject(),document.body.appendChild(this.panelContainer),this.renderReactPanel())}renderReactPanel(){return(0,u.mG)(this,void 0,void 0,function*(){try{const n=(yield Promise.resolve().then(t.bind(t,"5Q/4"))).ReactRender,o=(yield t.e(450).then(t.bind(t,"Yew9"))).DevToolsPanel;this.reactRenderCleanup&&this.reactRenderCleanup();const s=yield n({el:this.panelContainer,component:()=>o({state:this.state,onClose:this.hide.bind(this),onMinimize:this.toggleMinimize.bind(this),coreInstance:this.core}),callback:()=>{console.log("[DevToolsManager] React panel rendered successfully")}});this.reactRenderCleanup=s.unmountCom}catch(n){console.error("[DevToolsManager] Failed to render React panel:",n),this.createFallbackPanel()}})}toggleMinimize(){this.state.minimized=!this.state.minimized,this.refreshPanel()}createFallbackPanel(){this.panelContainer&&(this.panelContainer.innerHTML=`
      <div style="
        background: #1e1e1e; 
        color: white; 
        padding: 12px; 
        border-radius: 8px; 
        border: 1px solid #333;
        font-family: monospace;
        font-size: 12px;
      ">
        <div style="display: flex; justify-content: space-between; align-items: center;">
          <span>\u{1F6E0}\uFE0F SSC Dev Tools (Fallback Mode)</span>
          <button onclick="this.parentElement.parentElement.parentElement.style.display='none'" 
                  style="background: #444; color: white; border: none; padding: 4px 8px; border-radius: 3px; cursor: pointer;">
            \u2715
          </button>
        </div>
        <div style="margin-top: 8px; font-size: 11px; color: #ccc;">
          Failed to load React components. Check console for details.
        </div>
      </div>
    `)}refreshPanel(){this.renderReactPanel()}destroy(){this.hotkeyListener&&typeof window<"u"&&window.removeEventListener("keydown",this.hotkeyListener),this.reactRenderCleanup&&this.reactRenderCleanup(),this.panelContainer&&this.panelContainer.parentNode&&this.panelContainer.parentNode.removeChild(this.panelContainer),document.querySelectorAll("#ssc-dev-tools-panel").length===0&&i.remove()}}}}]);
