"use strict";(self.webpackChunkzzz_fms_admin=self.webpackChunkzzz_fms_admin||[]).push([[6356],{q7Z4:(Dr,we,k)=>{k.r(we),k.d(we,{NotiFirebase:()=>nu});var ce={};k.r(ce),k.d(ce,{hasBrowserEnv:()=>Ct,hasStandardBrowserEnv:()=>Ya,hasStandardBrowserWebWorkerEnv:()=>Xa,navigator:()=>Rt,origin:()=>Za});var f=k("Istr"),m=k("4glo");function qe(e,t){t===void 0&&(t={});var n=t.insertAt;if(!(!e||typeof document>"u")){var r=document.head||document.getElementsByTagName("head")[0],s=document.createElement("style");s.type="text/css",n==="top"&&r.firstChild?r.insertBefore(s,r.firstChild):r.appendChild(s),s.styleSheet?s.styleSheet.cssText=e:s.appendChild(document.createTextNode(e))}}var Pr=".index-module_noti-bell__yHhVU{align-items:center;border-radius:50%;color:gray;cursor:pointer;display:flex;height:32px;justify-content:center;position:relative;width:32px}.index-module_noti-bell__yHhVU:hover{background-color:#eee}.index-module_noti-bell__yHhVU .index-module_unread__izNkQ{background:#ee4d2d;border-radius:8px;color:#fff;display:inline-block;font-size:11px;position:absolute;right:-25%;text-align:center;top:-25%;width:24px}.index-module_noti-bell__yHhVU .svg-icon{height:16px;width:16px;fill:currentColor}",Bt={"noti-bell":"index-module_noti-bell__yHhVU",unread:"index-module_unread__izNkQ"};qe(Pr);var Nr=k("eaYs"),ue=k("7vc5"),Ft=m.createContext({$gt:function(e){return e}}),Mr=function(e){var t=e.children,n=(0,f._T)(e,["children"]);return m.createElement(Ft.Provider,{value:n},t)},_e=function(){return m.useContext(Ft)},Lt="noti-firebase-token",Br=function(){try{var e=JSON.parse(localStorage.getItem(Lt)||"{}");return e}catch(t){return console.error("[noti-firebase] get local token error",t),{token:"",userId:""}}},Fr=function(e,t){try{localStorage.setItem(Lt,JSON.stringify({token:e,uniqueId:t}))}catch(n){console.error("[noti-firebase] set local token error",n)}};function Lr(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var Ve={exports:{}};/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/var Ut;function Ur(){return Ut||(Ut=1,function(e){(function(){var t={}.hasOwnProperty;function n(){for(var i="",o=0;o<arguments.length;o++){var a=arguments[o];a&&(i=s(i,r(a)))}return i}function r(i){if(typeof i=="string"||typeof i=="number")return i;if(typeof i!="object")return"";if(Array.isArray(i))return n.apply(null,i);if(i.toString!==Object.prototype.toString&&!i.toString.toString().includes("[native code]"))return i.toString();var o="";for(var a in i)t.call(i,a)&&i[a]&&(o=s(o,a));return o}function s(i,o){return o?i?i+" "+o:i+o:i}e.exports?(n.default=n,e.exports=n):window.classNames=n})()}(Ve)),Ve.exports}var jr=Ur(),jt=Lr(jr);function Hr(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var $r=k("QkUe"),qr=(0,$r.s)(),Ht=Hr(qr),Vr=".index-module_noti-content__x1-b9{overflow-y:scroll;overflo-x:hidden;background-color:#fff;border-radius:3px;box-shadow:0 6px 16px rgba(0,0,0,.12);max-height:594px;padding-bottom:12px;width:468px}.index-module_noti-content__x1-b9::-webkit-scrollbar{width:0}.index-module_noti-content-head__ssHdZ{align-items:flex-start;display:flex;justify-content:space-between}.index-module_noti-content-head__ssHdZ .index-module_read-all__Y6Wb6{margin-right:16px;margin-top:16px}.index-module_noti-content__x1-b9 .index-module_title-wrapper__iSQQX{padding:16px}.index-module_noti-content__x1-b9 .index-module_title-wrapper__iSQQX .index-module_title__tdHee{color:#000;font-size:18px;font-weight:500;line-height:21px}.index-module_noti-content__x1-b9 .index-module_title-wrapper__iSQQX .index-module_tip__a9GJ7{color:#999;font-size:14px;line-height:16px;margin-top:8px}.index-module_noti-content__x1-b9 .index-module_message-wrapper__fmwys{padding:0 16px}.index-module_noti-content__x1-b9 .index-module_no-more-notification__oMhTJ{color:hsla(0,0%,60%,.7);line-height:16px;padding-top:16px}",D={"noti-content":"index-module_noti-content__x1-b9","noti-content-head":"index-module_noti-content-head__ssHdZ","read-all":"index-module_read-all__Y6Wb6","title-wrapper":"index-module_title-wrapper__iSQQX",title:"index-module_title__tdHee",tip:"index-module_tip__a9GJ7","message-wrapper":"index-module_message-wrapper__fmwys","no-more-notification":"index-module_no-more-notification__oMhTJ"};qe(Vr);var zr='.style-module_message__5QoPA{align-items:center;border-bottom:1px solid #e8e8e8;color:#303844;display:flex;font-size:14px;justify-content:space-between;padding:16px 0}.style-module_message__5QoPA .style-module_content__EW18u{min-width:0}.style-module_message__5QoPA .style-module_action__Mmn-q{flex-shrink:0;margin-left:4px}.style-module_message-title__6UDPU{font-weight:500;line-height:16px;margin-bottom:8px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.style-module_message-title__6UDPU.style-module_new-message__E2FiP:after{background:#ee4d2d;border-radius:50%;content:" ";display:inline-block;height:6px;margin-bottom:7px;margin-left:2px;width:6px}.style-module_message-content__pqfaw{margin-bottom:8px}.style-module_message-content__pqfaw p{line-height:16px;margin:0}.style-module_message-time__P2Czx{color:#7e8692}',se={message:"style-module_message__5QoPA",content:"style-module_content__EW18u","message-title":"style-module_message-title__6UDPU","new-message":"style-module_new-message__E2FiP","message-content":"style-module_message-content__pqfaw","message-time":"style-module_message-time__P2Czx"};qe(zr);var Gr=10,Wr=1;function Jr(){return m.createElement("svg",{xmlns:"http://www.w3.org/2000/svg","data-v-0bfb58e9":"","data-v-1740790c":"","aria-hidden":"true",className:"svg-icon"},m.createElement("path",{"fill-rule":"evenodd","clip-rule":"evenodd",d:"M12.9998 6.5V12.5H2.9998V6.5C2.9998 3.7386 5.2383 1.5 7.9998 1.5C10.7612 1.5 12.9998 3.7386 12.9998 6.5ZM1.99975 6.5C1.99975 3.1863 4.686 0.5 7.9998 0.5C11.3135 0.5 13.9998 3.1863 13.9998 6.5V13.5H1.99979H1.99975H0.482629C0.304449 13.5 0.21521 13.2846 0.34121 13.1586L1.99975 11.5V6.5ZM15.6584 13.1586L13.9998 11.5V13.5H15.5169C15.6951 13.5 15.7844 13.2846 15.6584 13.1586ZM7.9815 4C7.5222 4 7.1573 4.3858 7.1827 4.8443L7.3793 8.3819C7.3887 8.5512 7.5286 8.6836 7.6981 8.6836H8.2648C8.4343 8.6836 8.5743 8.5512 8.5837 8.3819L8.7802 4.8443C8.8057 4.3858 8.4407 4 7.9815 4ZM8.0255 9.1836C7.7022 9.1836 7.4401 9.4457 7.4401 9.769C7.4401 10.0924 7.7022 10.3545 8.0255 10.3545C8.3489 10.3545 8.611 10.0924 8.611 9.769C8.611 9.4457 8.3489 9.1836 8.0255 9.1836ZM6.0628 14.5C6.2848 15.3626 7.0679 16 7.9998 16C8.9317 16 9.7147 15.3626 9.9368 14.5H6.0628Z",fill:"black"}))}var Kr=99,Yr=function(e){var t,n,r=(t=e.maxUnreadMessage)!==null&&t!==void 0?t:Kr;return m.createElement("div",{className:Bt["noti-bell"],style:e.style},!!e.unread&&m.createElement("span",{className:Bt.unread},((n=e.unread)!==null&&n!==void 0?n:0)>r?"".concat(r,"+"):e.unread),m.createElement(Jr,null))},$t=function(){var e=/https:\/\/ams.ssc\..*?\.?shopee.com/;return e.test(window.location.origin)},le=function(){var e=/^https:\/\/logistics\..*?\.?myagencyservice\..+$/;return e.test(window.location.origin)},Xr=function(){var e=/^https:\/\/spx(?:\.([a-zA-Z]+))?\.shopee\.[a-zA-Z]+(?:\.[a-zA-Z]+)?$/;return e.test(window.location.origin)},Zr=function(e){var t,n,r,s=m.useRef(e.message.status==="read"),i=_e(),o=function(){return(0,f.mG)(void 0,void 0,void 0,function(){var c,u;return(0,f.Jh)(this,function(d){switch(d.label){case 0:return d.trys.push([0,2,,3]),s.current||e.message.status==="read"?[2]:(s.current=!0,[4,(u=e.onMessageRead)===null||u===void 0?void 0:u.call(e,e.message.id)]);case 1:return d.sent(),s.current=!1,[3,3];case 2:return c=d.sent(),console.error("[noti-components] read message error",c),s.current=!1,[3,3];case 3:return[2]}})})},a=function(){var c;o(),window.open((c=e.message.detail)===null||c===void 0?void 0:c.link_url)};return m.createElement("div",{className:D.message,onClick:o},m.createElement("div",{className:D.content},m.createElement("div",{className:jt(D["message-title"],(t={},t[D["new-message"]]=e.message.status==="unread",t)),title:e.message.title},e.message.title),m.createElement("div",{className:D["message-content"]},(r=(n=e.message.content)===null||n===void 0?void 0:n.split(`
`))===null||r===void 0?void 0:r.map(function(c,u){return m.createElement("p",{key:u},c)})),m.createElement("div",{className:D["message-time"]},Ht.unix(e.message.time).format("YYYY-MM-DD HH:mm:ss"))),m.createElement(ue.Button,{className:D.action,onClick:a},i.$gt("View")))},Qr=function(e){var t,n,r,s=m.useRef(e.message.status==="read"),i=function(){return(0,f.mG)(void 0,void 0,void 0,function(){var o,a;return(0,f.Jh)(this,function(c){switch(c.label){case 0:return c.trys.push([0,2,,3]),s.current||e.message.status==="read"?[2]:(s.current=!0,[4,(a=e.onMessageRead)===null||a===void 0?void 0:a.call(e,e.message.id)]);case 1:return c.sent(),s.current=!1,[3,3];case 2:return o=c.sent(),console.error("[noti-components] read message error",o),s.current=!1,[3,3];case 3:return[2]}})})};return m.createElement("div",{className:se.message,onClick:i},m.createElement("div",{className:se.content},m.createElement("div",{className:jt(se["message-title"],(t={},t[se["new-message"]]=e.message.status==="unread",t)),title:e.message.title},e.message.title),m.createElement("div",{className:se["message-content"]},(r=(n=e.message.content)===null||n===void 0?void 0:n.split(`
`))===null||r===void 0?void 0:r.map(function(o,a){return m.createElement("p",{key:a},o)})),m.createElement("div",{className:se["message-time"]},Ht.unix(e.message.time).format("YYYY-MM-DD HH:mm:ss"))))},es=function(e){return le()?m.createElement(Zr,(0,f.pi)({},e)):m.createElement(Qr,(0,f.pi)({},e))},ts=function(){var e=(0,f.CR)(m.useState(!1),2),t=e[0],n=e[1],r=_e(),s=r.$gt,i=r.unread,o=r.onAllMessageRead,a=function(){return(0,f.mG)(void 0,void 0,void 0,function(){return(0,f.Jh)(this,function(c){switch(c.label){case 0:return c.trys.push([0,,2,3]),n(!0),[4,o?.()];case 1:return c.sent(),[3,3];case 2:return n(!1),[7];case 3:return[2]}})})};return m.createElement("div",{className:D["noti-content-head"]},m.createElement("div",{className:D["title-wrapper"]},m.createElement("div",{className:D.title},s("Latest Notification")),m.createElement("div",{className:D.tip},s("Only show the notification of last 90 days."))),m.createElement(ue.Button,{className:D["read-all"],disabled:!i,loading:t,onClick:a},s(i?"Read All":"All Read")))},ns=function(){return m.createElement(ts,null)},rs=function(e){var t=m.useRef(),n=_e().$gt,r=m.useCallback(function(s){e.loading||(t.current&&t.current.disconnect(),t.current=new IntersectionObserver(function(i){var o;i[0].isIntersecting&&((o=e.onBottomReached)===null||o===void 0||o.call(e))},{threshold:.5}),s&&t.current.observe(s))},[e]);return m.createElement(m.Fragment,null,m.createElement("div",{className:D["no-more-notification"]},n("No More Notification")),m.createElement("div",{ref:r,style:{height:1}}))},ss=function(e){var t,n,r=_e().onMessageRead;return m.createElement(ue.Spin,{mask:!0,size:"large",spinning:e.spinning},m.createElement("div",{className:D["noti-content"]},m.createElement(ns,null),m.createElement("div",{className:D["message-wrapper"]},(t=e.messageList)===null||t===void 0?void 0:t.map(function(s){return m.createElement(es,{key:s.id,message:s,onMessageRead:r,onBottomReached:e.onBottomReached})}),!((n=e.messageList)===null||n===void 0)&&n.length?m.createElement(rs,{noMoreData:e.noMoreData,loading:e.loading,onBottomReached:e.onBottomReached}):m.createElement("div",{style:{height:180}},m.createElement(Nr.Empty,{type:"data"})))))},de={total:0,count:Gr,pageno:Wr},is=function(e){var t=(0,f.CR)(m.useState(!1),2),n=t[0],r=t[1],s=m.useRef(!1),i=(0,f.CR)(m.useState(de),2),o=i[0],a=i[1],c=m.useRef(de),u=(0,f.CR)(m.useState(!1),2),d=u[0],h=u[1],v=(0,f.CR)(m.useState(!1),2),w=v[0],p=v[1],b=(0,f.CR)(m.useState([]),2),g=b[0],S=b[1],C=(0,f.CR)(m.useState(),2),T=C[0],L=C[1],x=m.useCallback(function(_){return(0,f.mG)(void 0,void 0,void 0,function(){var A,P;return(0,f.Jh)(this,function(J){switch(J.label){case 0:return J.trys.push([0,2,3,4]),_?.pageno===1?h(!0):p(!0),[4,e.onListRefresh(_)];case 1:return A=J.sent(),S(function(ve){return _?.pageno===1?A.list:(0,f.ev)((0,f.ev)([],(0,f.CR)(ve),!1),(0,f.CR)(A.list),!1)}),c.current={count:A.count,total:A.total,pageno:A.pageno},a(c.current),[3,4];case 2:return P=J.sent(),console.error("[noti-components] get message list error",P),[3,4];case 3:return _?.pageno===1?h(!1):p(!1),[7];case 4:return[2]}})})},[e]),j=function(_){return(0,f.mG)(void 0,void 0,void 0,function(){return(0,f.Jh)(this,function(A){switch(A.label){case 0:return r(_),s.current=_,_?[4,x({pageno:o.pageno,count:o.count})]:(c.current=de,a(de),[2]);case 1:return A.sent(),[2]}})})},V=function(){return(0,f.mG)(void 0,void 0,void 0,function(){return(0,f.Jh)(this,function(_){return o.total<=g.length?[2]:(x({count:de.count,pageno:o.pageno+1}),[2])})})},B=m.useCallback(function(){return(0,f.mG)(void 0,void 0,void 0,function(){var _,A;return(0,f.Jh)(this,function(P){switch(P.label){case 0:return P.trys.push([0,2,,3]),[4,e.onGetUnreadCount()];case 1:return _=P.sent(),L(_),[3,3];case 2:return A=P.sent(),console.error("[noti-components] get unread count error",A),[3,3];case 3:return[2]}})})},[e]),$e=function(_){return(0,f.mG)(void 0,void 0,void 0,function(){var A;return(0,f.Jh)(this,function(P){switch(P.label){case 0:return P.trys.push([0,3,,4]),[4,e.onMessageRead(_)];case 1:return P.sent(),[4,B()];case 2:return P.sent(),S(function(J){return J.map(function(ve){return ve.id===_?(0,f.pi)((0,f.pi)({},ve),{status:"read"}):(0,f.pi)({},ve)})}),[3,4];case 3:return A=P.sent(),console.error("[noti-components] read message error",A),[3,4];case 4:return[2]}})})},ru=function(){return(0,f.mG)(void 0,void 0,void 0,function(){var _;return(0,f.Jh)(this,function(A){switch(A.label){case 0:return A.trys.push([0,3,,4]),[4,e.onAllMessageRead()];case 1:return A.sent(),[4,B()];case 2:return A.sent(),S(function(P){return P.map(function(J){return(0,f.pi)((0,f.pi)({},J),{status:"read"})})}),[3,4];case 3:return _=A.sent(),console.error("[noti-components] read all message error",_),[3,4];case 4:return[2]}})})};return m.useEffect(function(){B()},[B]),m.useEffect(function(){n&&B()},[B,n]),m.useEffect(function(){e.onMessageReceived(function(_,A){s.current&&x({pageno:1,count:c.current.count}),B(),console.info("[noti-components] message received:",_,A)})},[x,B,e]),m.createElement(ue.Trigger,{popupVisible:n,popupAnimateEffect:"drop-down",showAction:["onClick"],hideAction:["onClick","onClickOutside"],popupOffset:{x:0,y:16},popupAlignOptions:{justifyY:!1},triggerAlignPoints:{x:1,y:1},popupAlignPoints:{x:1,y:0},mask:!1,onPopupVisibleChange:j,popup:m.createElement(Mr,{$gt:e.$gt,unread:T,actionConfig:e.actionConfig,onMessageRead:$e,onAllMessageRead:ru},m.createElement(ss,{spinning:d,loading:w,messageList:g,noMoreData:o.total<=g.length,onBottomReached:V}))},m.createElement("div",null,m.createElement(Yr,{unread:T})))},qt=function(){function e(t,n){t===void 0&&(t=5e3),n===void 0&&(n=!1),this._interval=t,this._immediate=n,this._subscribers=new Set,this._timerId=null,this._isRunning=!1}return e.getInstance=function(t,n){return e._instance||(e._instance=new e(t,n)),e._instance},e.prototype.subscribe=function(t){var n=this;return this._subscribers.add(t),function(){return n._subscribers.delete(t)}},e.prototype.start=function(){this._isRunning||(this._isRunning=!0,this._immediate?this.executeWithTimeout(0):this.scheduleNext())},e.prototype.stop=function(){this._timerId&&(clearTimeout(this._timerId),this._timerId=null),this._isRunning=!1},e.prototype.executeWithTimeout=function(t){return(0,f.mG)(this,void 0,void 0,function(){var n=this;return(0,f.Jh)(this,function(r){return this._isRunning?(this._timerId=setTimeout(function(){return(0,f.mG)(n,void 0,void 0,function(){return(0,f.Jh)(this,function(s){return this.executeCallbacks(),this.scheduleNext(),[2]})})},t),[2]):[2]})})},e.prototype.scheduleNext=function(){this._isRunning&&this.executeWithTimeout(this._interval)},e.prototype.executeCallbacks=function(){var t,n,r=Array.from(this._subscribers);try{for(var s=(0,f.XA)(r),i=s.next();!i.done;i=s.next()){var o=i.value;try{o()}catch(a){console.error("[noti-scheduler] execute callbacks error:",a)}}}catch(a){t={error:a}}finally{try{i&&!i.done&&(n=s.return)&&n.call(s)}finally{if(t)throw t.error}}},e.prototype.setInterval=function(t){var n=this._isRunning;this.stop(),this._interval=t,n&&this.start()},e.destroy=function(){e._instance&&(e._instance.stop(),e._instance._subscribers.clear(),e._instance=null)},e}(),fe;(function(e){e[e.fms=1]="fms",e[e.driver=2]="driver",e[e.ops=3]="ops",e[e.agency=4]="agency",e[e.manager=5]="manager",e[e.ams=11]="ams"})(fe||(fe={}));var Ee;(function(e){e[e.BroadcastNotification=5]="BroadcastNotification",e[e.TicketAssignment=21]="TicketAssignment",e[e.TicketGeneration=22]="TicketGeneration",e[e.AlertTrigger=23]="AlertTrigger",e[e.AssetNotify=28]="AssetNotify",e[e.Agency=30]="Agency"})(Ee||(Ee={}));var ze;(function(e){e[e.Pending=1]="Pending",e[e.Read=2]="Read"})(ze||(ze={}));var Vt;(function(e){e[e.Pending=0]="Pending",e[e.Accept=1]="Accept",e[e.Reject=2]="Reject",e[e.Expired=3]="Expired",e[e.NoPush=9]="NoPush"})(Vt||(Vt={}));var zt;(function(e){e[e.FmsPolling=1]="FmsPolling",e[e.LoginPopup=2]="LoginPopup"})(zt||(zt={}));var Gt;(function(e){e[e.NotificationType=1]="NotificationType",e[e.Ctime=2]="Ctime"})(Gt||(Gt={}));var Ge;(function(e){e[e.ID=0]="ID",e[e.Time=1]="Time"})(Ge||(Ge={}));const os=()=>{};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Wt=function(e){const t=[];let n=0;for(let r=0;r<e.length;r++){let s=e.charCodeAt(r);s<128?t[n++]=s:s<2048?(t[n++]=s>>6|192,t[n++]=s&63|128):(s&64512)===55296&&r+1<e.length&&(e.charCodeAt(r+1)&64512)===56320?(s=65536+((s&1023)<<10)+(e.charCodeAt(++r)&1023),t[n++]=s>>18|240,t[n++]=s>>12&63|128,t[n++]=s>>6&63|128,t[n++]=s&63|128):(t[n++]=s>>12|224,t[n++]=s>>6&63|128,t[n++]=s&63|128)}return t},as=function(e){const t=[];let n=0,r=0;for(;n<e.length;){const s=e[n++];if(s<128)t[r++]=String.fromCharCode(s);else if(s>191&&s<224){const i=e[n++];t[r++]=String.fromCharCode((s&31)<<6|i&63)}else if(s>239&&s<365){const i=e[n++],o=e[n++],a=e[n++],c=((s&7)<<18|(i&63)<<12|(o&63)<<6|a&63)-65536;t[r++]=String.fromCharCode(55296+(c>>10)),t[r++]=String.fromCharCode(56320+(c&1023))}else{const i=e[n++],o=e[n++];t[r++]=String.fromCharCode((s&15)<<12|(i&63)<<6|o&63)}}return t.join("")},Jt={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(e,t){if(!Array.isArray(e))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=t?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let s=0;s<e.length;s+=3){const i=e[s],o=s+1<e.length,a=o?e[s+1]:0,c=s+2<e.length,u=c?e[s+2]:0,d=i>>2,h=(i&3)<<4|a>>4;let v=(a&15)<<2|u>>6,w=u&63;c||(w=64,o||(v=64)),r.push(n[d],n[h],n[v],n[w])}return r.join("")},encodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?btoa(e):this.encodeByteArray(Wt(e),t)},decodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?atob(e):as(this.decodeStringToByteArray(e,t))},decodeStringToByteArray(e,t){this.init_();const n=t?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let s=0;s<e.length;){const i=n[e.charAt(s++)],a=s<e.length?n[e.charAt(s)]:0;++s;const u=s<e.length?n[e.charAt(s)]:64;++s;const h=s<e.length?n[e.charAt(s)]:64;if(++s,i==null||a==null||u==null||h==null)throw new cs;const v=i<<2|a>>4;if(r.push(v),u!==64){const w=a<<4&240|u>>2;if(r.push(w),h!==64){const p=u<<6&192|h;r.push(p)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let e=0;e<this.ENCODED_VALS.length;e++)this.byteToCharMap_[e]=this.ENCODED_VALS.charAt(e),this.charToByteMap_[this.byteToCharMap_[e]]=e,this.byteToCharMapWebSafe_[e]=this.ENCODED_VALS_WEBSAFE.charAt(e),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[e]]=e,e>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(e)]=e,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(e)]=e)}}};class cs extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const us=function(e){const t=Wt(e);return Jt.encodeByteArray(t,!0)},Kt=function(e){return us(e).replace(/\./g,"")},ls=function(e){try{return Jt.decodeString(e,!0)}catch(t){console.error("base64Decode failed: ",t)}return null};/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ds(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof k.g<"u")return k.g;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fs=()=>ds().__FIREBASE_DEFAULTS__,hs=()=>{if(typeof process>"u"||typeof process.env>"u")return;const e=process.env.__FIREBASE_DEFAULTS__;if(e)return JSON.parse(e)},ps=()=>{if(typeof document>"u")return;let e;try{e=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const t=e&&ls(e[1]);return t&&JSON.parse(t)},ms=()=>{try{return os()||fs()||hs()||ps()}catch(e){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${e}`);return}},Yt=()=>{var e;return(e=ms())===null||e===void 0?void 0:e.config};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gs{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((t,n)=>{this.resolve=t,this.reject=n})}wrapCallback(t){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof t=="function"&&(this.promise.catch(()=>{}),t.length===1?t(n):t(n,r))}}}function Xt(){try{return typeof indexedDB=="object"}catch{return!1}}function Zt(){return new Promise((e,t)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(r);s.onsuccess=()=>{s.result.close(),n||self.indexedDB.deleteDatabase(r),e(!0)},s.onupgradeneeded=()=>{n=!1},s.onerror=()=>{var i;t(((i=s.error)===null||i===void 0?void 0:i.message)||"")}}catch(n){t(n)}})}function bs(){return!(typeof navigator>"u"||!navigator.cookieEnabled)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ys="FirebaseError";class ie extends Error{constructor(t,n,r){super(n),this.code=t,this.customData=r,this.name=ys,Object.setPrototypeOf(this,ie.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Se.prototype.create)}}class Se{constructor(t,n,r){this.service=t,this.serviceName=n,this.errors=r}create(t,...n){const r=n[0]||{},s=`${this.service}/${t}`,i=this.errors[t],o=i?vs(i,r):"Error",a=`${this.serviceName}: ${o} (${s}).`;return new ie(s,a,r)}}function vs(e,t){return e.replace(ws,(n,r)=>{const s=t[r];return s!=null?String(s):`<${r}?>`})}const ws=/\{\$([^}]+)}/g;function We(e,t){if(e===t)return!0;const n=Object.keys(e),r=Object.keys(t);for(const s of n){if(!r.includes(s))return!1;const i=e[s],o=t[s];if(Qt(i)&&Qt(o)){if(!We(i,o))return!1}else if(i!==o)return!1}for(const s of r)if(!n.includes(s))return!1;return!0}function Qt(e){return e!==null&&typeof e=="object"}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ae(e){return e&&e._delegate?e._delegate:e}class z{constructor(t,n,r){this.name=t,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(t){return this.instantiationMode=t,this}setMultipleInstances(t){return this.multipleInstances=t,this}setServiceProps(t){return this.serviceProps=t,this}setInstanceCreatedCallback(t){return this.onInstanceCreated=t,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const K="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _s{constructor(t,n){this.name=t,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(t){const n=this.normalizeInstanceIdentifier(t);if(!this.instancesDeferred.has(n)){const r=new gs;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const s=this.getOrInitializeService({instanceIdentifier:n});s&&r.resolve(s)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(t){var n;const r=this.normalizeInstanceIdentifier(t?.identifier),s=(n=t?.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(i){if(s)return null;throw i}else{if(s)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(t){if(t.name!==this.name)throw Error(`Mismatching Component ${t.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=t,!!this.shouldAutoInitialize()){if(Ss(t))try{this.getOrInitializeService({instanceIdentifier:K})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const s=this.normalizeInstanceIdentifier(n);try{const i=this.getOrInitializeService({instanceIdentifier:s});r.resolve(i)}catch{}}}}clearInstance(t=K){this.instancesDeferred.delete(t),this.instancesOptions.delete(t),this.instances.delete(t)}async delete(){const t=Array.from(this.instances.values());await Promise.all([...t.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...t.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(t=K){return this.instances.has(t)}getOptions(t=K){return this.instancesOptions.get(t)||{}}initialize(t={}){const{options:n={}}=t,r=this.normalizeInstanceIdentifier(t.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const s=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[i,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(i);r===a&&o.resolve(s)}return s}onInit(t,n){var r;const s=this.normalizeInstanceIdentifier(n),i=(r=this.onInitCallbacks.get(s))!==null&&r!==void 0?r:new Set;i.add(t),this.onInitCallbacks.set(s,i);const o=this.instances.get(s);return o&&t(o,s),()=>{i.delete(t)}}invokeOnInitCallbacks(t,n){const r=this.onInitCallbacks.get(n);if(r)for(const s of r)try{s(t,n)}catch{}}getOrInitializeService({instanceIdentifier:t,options:n={}}){let r=this.instances.get(t);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:Es(t),options:n}),this.instances.set(t,r),this.instancesOptions.set(t,n),this.invokeOnInitCallbacks(r,t),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,t,r)}catch{}return r||null}normalizeInstanceIdentifier(t=K){return this.component?this.component.multipleInstances?t:K:t}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function Es(e){return e===K?void 0:e}function Ss(e){return e.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class As{constructor(t){this.name=t,this.providers=new Map}addComponent(t){const n=this.getProvider(t.name);if(n.isComponentSet())throw new Error(`Component ${t.name} has already been registered with ${this.name}`);n.setComponent(t)}addOrOverwriteComponent(t){this.getProvider(t.name).isComponentSet()&&this.providers.delete(t.name),this.addComponent(t)}getProvider(t){if(this.providers.has(t))return this.providers.get(t);const n=new _s(t,this);return this.providers.set(t,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var E;(function(e){e[e.DEBUG=0]="DEBUG",e[e.VERBOSE=1]="VERBOSE",e[e.INFO=2]="INFO",e[e.WARN=3]="WARN",e[e.ERROR=4]="ERROR",e[e.SILENT=5]="SILENT"})(E||(E={}));const Cs={debug:E.DEBUG,verbose:E.VERBOSE,info:E.INFO,warn:E.WARN,error:E.ERROR,silent:E.SILENT},Rs=E.INFO,Ts={[E.DEBUG]:"log",[E.VERBOSE]:"log",[E.INFO]:"info",[E.WARN]:"warn",[E.ERROR]:"error"},xs=(e,t,...n)=>{if(t<e.logLevel)return;const r=new Date().toISOString(),s=Ts[t];if(s)console[s](`[${r}]  ${e.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${t})`)};class Is{constructor(t){this.name=t,this._logLevel=Rs,this._logHandler=xs,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(t){if(!(t in E))throw new TypeError(`Invalid value "${t}" assigned to \`logLevel\``);this._logLevel=t}setLogLevel(t){this._logLevel=typeof t=="string"?Cs[t]:t}get logHandler(){return this._logHandler}set logHandler(t){if(typeof t!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=t}get userLogHandler(){return this._userLogHandler}set userLogHandler(t){this._userLogHandler=t}debug(...t){this._userLogHandler&&this._userLogHandler(this,E.DEBUG,...t),this._logHandler(this,E.DEBUG,...t)}log(...t){this._userLogHandler&&this._userLogHandler(this,E.VERBOSE,...t),this._logHandler(this,E.VERBOSE,...t)}info(...t){this._userLogHandler&&this._userLogHandler(this,E.INFO,...t),this._logHandler(this,E.INFO,...t)}warn(...t){this._userLogHandler&&this._userLogHandler(this,E.WARN,...t),this._logHandler(this,E.WARN,...t)}error(...t){this._userLogHandler&&this._userLogHandler(this,E.ERROR,...t),this._logHandler(this,E.ERROR,...t)}}const Os=(e,t)=>t.some(n=>e instanceof n);let en,tn;function ks(){return en||(en=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function Ds(){return tn||(tn=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const nn=new WeakMap,Je=new WeakMap,rn=new WeakMap,Ke=new WeakMap,Ye=new WeakMap;function Ps(e){const t=new Promise((n,r)=>{const s=()=>{e.removeEventListener("success",i),e.removeEventListener("error",o)},i=()=>{n(H(e.result)),s()},o=()=>{r(e.error),s()};e.addEventListener("success",i),e.addEventListener("error",o)});return t.then(n=>{n instanceof IDBCursor&&nn.set(n,e)}).catch(()=>{}),Ye.set(t,e),t}function Ns(e){if(Je.has(e))return;const t=new Promise((n,r)=>{const s=()=>{e.removeEventListener("complete",i),e.removeEventListener("error",o),e.removeEventListener("abort",o)},i=()=>{n(),s()},o=()=>{r(e.error||new DOMException("AbortError","AbortError")),s()};e.addEventListener("complete",i),e.addEventListener("error",o),e.addEventListener("abort",o)});Je.set(e,t)}let Xe={get(e,t,n){if(e instanceof IDBTransaction){if(t==="done")return Je.get(e);if(t==="objectStoreNames")return e.objectStoreNames||rn.get(e);if(t==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return H(e[t])},set(e,t,n){return e[t]=n,!0},has(e,t){return e instanceof IDBTransaction&&(t==="done"||t==="store")?!0:t in e}};function Ms(e){Xe=e(Xe)}function Bs(e){return e===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(t,...n){const r=e.call(Ze(this),t,...n);return rn.set(r,t.sort?t.sort():[t]),H(r)}:Ds().includes(e)?function(...t){return e.apply(Ze(this),t),H(nn.get(this))}:function(...t){return H(e.apply(Ze(this),t))}}function Fs(e){return typeof e=="function"?Bs(e):(e instanceof IDBTransaction&&Ns(e),Os(e,ks())?new Proxy(e,Xe):e)}function H(e){if(e instanceof IDBRequest)return Ps(e);if(Ke.has(e))return Ke.get(e);const t=Fs(e);return t!==e&&(Ke.set(e,t),Ye.set(t,e)),t}const Ze=e=>Ye.get(e);function Ce(e,t,{blocked:n,upgrade:r,blocking:s,terminated:i}={}){const o=indexedDB.open(e,t),a=H(o);return r&&o.addEventListener("upgradeneeded",c=>{r(H(o.result),c.oldVersion,c.newVersion,H(o.transaction),c)}),n&&o.addEventListener("blocked",c=>n(c.oldVersion,c.newVersion,c)),a.then(c=>{i&&c.addEventListener("close",()=>i()),s&&c.addEventListener("versionchange",u=>s(u.oldVersion,u.newVersion,u))}).catch(()=>{}),a}function Qe(e,{blocked:t}={}){const n=indexedDB.deleteDatabase(e);return t&&n.addEventListener("blocked",r=>t(r.oldVersion,r)),H(n).then(()=>{})}const Ls=["get","getKey","getAll","getAllKeys","count"],Us=["put","add","delete","clear"],et=new Map;function sn(e,t){if(!(e instanceof IDBDatabase&&!(t in e)&&typeof t=="string"))return;if(et.get(t))return et.get(t);const n=t.replace(/FromIndex$/,""),r=t!==n,s=Us.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(s||Ls.includes(n)))return;const i=async function(o,...a){const c=this.transaction(o,s?"readwrite":"readonly");let u=c.store;return r&&(u=u.index(a.shift())),(await Promise.all([u[n](...a),s&&c.done]))[0]};return et.set(t,i),i}Ms(e=>({...e,get:(t,n,r)=>sn(t,n)||e.get(t,n,r),has:(t,n)=>!!sn(t,n)||e.has(t,n)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class js{constructor(t){this.container=t}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(Hs(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function Hs(e){const t=e.getComponent();return t?.type==="VERSION"}const tt="@firebase/app",on="0.13.2";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $=new Is("@firebase/app"),$s="@firebase/app-compat",qs="@firebase/analytics-compat",Vs="@firebase/analytics",zs="@firebase/app-check-compat",Gs="@firebase/app-check",Ws="@firebase/auth",Js="@firebase/auth-compat",Ks="@firebase/database",Ys="@firebase/data-connect",Xs="@firebase/database-compat",Zs="@firebase/functions",Qs="@firebase/functions-compat",ei="@firebase/installations",ti="@firebase/installations-compat",ni="@firebase/messaging",ri="@firebase/messaging-compat",si="@firebase/performance",ii="@firebase/performance-compat",oi="@firebase/remote-config",ai="@firebase/remote-config-compat",ci="@firebase/storage",ui="@firebase/storage-compat",li="@firebase/firestore",di="@firebase/ai",fi="@firebase/firestore-compat",hi="firebase";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const nt="[DEFAULT]",pi={[tt]:"fire-core",[$s]:"fire-core-compat",[Vs]:"fire-analytics",[qs]:"fire-analytics-compat",[Gs]:"fire-app-check",[zs]:"fire-app-check-compat",[Ws]:"fire-auth",[Js]:"fire-auth-compat",[Ks]:"fire-rtdb",[Ys]:"fire-data-connect",[Xs]:"fire-rtdb-compat",[Zs]:"fire-fn",[Qs]:"fire-fn-compat",[ei]:"fire-iid",[ti]:"fire-iid-compat",[ni]:"fire-fcm",[ri]:"fire-fcm-compat",[si]:"fire-perf",[ii]:"fire-perf-compat",[oi]:"fire-rc",[ai]:"fire-rc-compat",[ci]:"fire-gcs",[ui]:"fire-gcs-compat",[li]:"fire-fst",[fi]:"fire-fst-compat",[di]:"fire-vertex","fire-js":"fire-js",[hi]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Re=new Map,mi=new Map,rt=new Map;function an(e,t){try{e.container.addComponent(t)}catch(n){$.debug(`Component ${t.name} failed to register with FirebaseApp ${e.name}`,n)}}function Y(e){const t=e.name;if(rt.has(t))return $.debug(`There were multiple attempts to register component ${t}.`),!1;rt.set(t,e);for(const n of Re.values())an(n,e);for(const n of mi.values())an(n,e);return!0}function st(e,t){const n=e.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),e.container.getProvider(t)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gi={["no-app"]:"No Firebase App '{$appName}' has been created - call initializeApp() first",["bad-app-name"]:"Illegal App name: '{$appName}'",["duplicate-app"]:"Firebase App named '{$appName}' already exists with different options or config",["app-deleted"]:"Firebase App named '{$appName}' already deleted",["server-app-deleted"]:"Firebase Server App has been deleted",["no-options"]:"Need to provide options, when not being deployed to hosting via source.",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance.",["invalid-log-argument"]:"First argument to `onLog` must be null or a function.",["idb-open"]:"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.",["idb-get"]:"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.",["idb-set"]:"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.",["idb-delete"]:"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.",["finalization-registry-not-supported"]:"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.",["invalid-server-app-environment"]:"FirebaseServerApp is not for use in browser environments."},G=new Se("app","Firebase",gi);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bi{constructor(t,n,r){this._isDeleted=!1,this._options=Object.assign({},t),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new z("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(t){this.checkDestroyed(),this._automaticDataCollectionEnabled=t}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(t){this._isDeleted=t}checkDestroyed(){if(this.isDeleted)throw G.create("app-deleted",{appName:this._name})}}function cn(e,t={}){let n=e;typeof t!="object"&&(t={name:t});const r=Object.assign({name:nt,automaticDataCollectionEnabled:!0},t),s=r.name;if(typeof s!="string"||!s)throw G.create("bad-app-name",{appName:String(s)});if(n||(n=Yt()),!n)throw G.create("no-options");const i=Re.get(s);if(i){if(We(n,i.options)&&We(r,i.config))return i;throw G.create("duplicate-app",{appName:s})}const o=new As(s);for(const c of rt.values())o.addComponent(c);const a=new bi(n,r,o);return Re.set(s,a),a}function yi(e=nt){const t=Re.get(e);if(!t&&e===nt&&Yt())return cn();if(!t)throw G.create("no-app",{appName:e});return t}function W(e,t,n){var r;let s=(r=pi[e])!==null&&r!==void 0?r:e;n&&(s+=`-${n}`);const i=s.match(/\s|\//),o=t.match(/\s|\//);if(i||o){const a=[`Unable to register library "${s}" with version "${t}":`];i&&a.push(`library name "${s}" contains illegal characters (whitespace or "/")`),i&&o&&a.push("and"),o&&a.push(`version name "${t}" contains illegal characters (whitespace or "/")`),$.warn(a.join(" "));return}Y(new z(`${s}-version`,()=>({library:s,version:t}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vi="firebase-heartbeat-database",wi=1,he="firebase-heartbeat-store";let it=null;function un(){return it||(it=Ce(vi,wi,{upgrade:(e,t)=>{switch(t){case 0:try{e.createObjectStore(he)}catch(n){console.warn(n)}}}}).catch(e=>{throw G.create("idb-open",{originalErrorMessage:e.message})})),it}async function _i(e){try{const n=(await un()).transaction(he),r=await n.objectStore(he).get(dn(e));return await n.done,r}catch(t){if(t instanceof ie)$.warn(t.message);else{const n=G.create("idb-get",{originalErrorMessage:t?.message});$.warn(n.message)}}}async function ln(e,t){try{const r=(await un()).transaction(he,"readwrite");await r.objectStore(he).put(t,dn(e)),await r.done}catch(n){if(n instanceof ie)$.warn(n.message);else{const r=G.create("idb-set",{originalErrorMessage:n?.message});$.warn(r.message)}}}function dn(e){return`${e.name}!${e.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ei=1024,Si=30;class Ai{constructor(t){this.container=t,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new Ri(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var t,n;try{const s=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),i=fn();if(((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)===null||n===void 0?void 0:n.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===i||this._heartbeatsCache.heartbeats.some(o=>o.date===i))return;if(this._heartbeatsCache.heartbeats.push({date:i,agent:s}),this._heartbeatsCache.heartbeats.length>Si){const o=Ti(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(o,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(r){$.warn(r)}}async getHeartbeatsHeader(){var t;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=fn(),{heartbeatsToSend:r,unsentEntries:s}=Ci(this._heartbeatsCache.heartbeats),i=Kt(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=n,s.length>0?(this._heartbeatsCache.heartbeats=s,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}catch(n){return $.warn(n),""}}}function fn(){return new Date().toISOString().substring(0,10)}function Ci(e,t=Ei){const n=[];let r=e.slice();for(const s of e){const i=n.find(o=>o.agent===s.agent);if(i){if(i.dates.push(s.date),hn(n)>t){i.dates.pop();break}}else if(n.push({agent:s.agent,dates:[s.date]}),hn(n)>t){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class Ri{constructor(t){this.app=t,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return Xt()?Zt().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await _i(this.app);return n?.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(t){var n;if(await this._canUseIndexedDBPromise){const s=await this.read();return ln(this.app,{lastSentHeartbeatDate:(n=t.lastSentHeartbeatDate)!==null&&n!==void 0?n:s.lastSentHeartbeatDate,heartbeats:t.heartbeats})}else return}async add(t){var n;if(await this._canUseIndexedDBPromise){const s=await this.read();return ln(this.app,{lastSentHeartbeatDate:(n=t.lastSentHeartbeatDate)!==null&&n!==void 0?n:s.lastSentHeartbeatDate,heartbeats:[...s.heartbeats,...t.heartbeats]})}else return}}function hn(e){return Kt(JSON.stringify({version:2,heartbeats:e})).length}function Ti(e){if(e.length===0)return-1;let t=0,n=e[0].date;for(let r=1;r<e.length;r++)e[r].date<n&&(n=e[r].date,t=r);return t}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function xi(e){Y(new z("platform-logger",t=>new js(t),"PRIVATE")),Y(new z("heartbeat",t=>new Ai(t),"PRIVATE")),W(tt,on,e),W(tt,on,"esm2017"),W("fire-js","")}xi("");const pn="@firebase/installations",ot="0.6.18";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mn=1e4,gn=`w:${ot}`,bn="FIS_v2",Ii="https://firebaseinstallations.googleapis.com/v1",Oi=60*60*1e3,ki="installations",Di="Installations";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Pi={["missing-app-config-values"]:'Missing App configuration value: "{$valueName}"',["not-registered"]:"Firebase Installation is not registered.",["installation-not-found"]:"Firebase Installation not found.",["request-failed"]:'{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"',["app-offline"]:"Could not process request. Application offline.",["delete-pending-registration"]:"Can't delete installation while there is a pending registration request."},X=new Se(ki,Di,Pi);function yn(e){return e instanceof ie&&e.code.includes("request-failed")}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function vn({projectId:e}){return`${Ii}/projects/${e}/installations`}function wn(e){return{token:e.token,requestStatus:2,expiresIn:Mi(e.expiresIn),creationTime:Date.now()}}async function _n(e,t){const r=(await t.json()).error;return X.create("request-failed",{requestName:e,serverCode:r.code,serverMessage:r.message,serverStatus:r.status})}function En({apiKey:e}){return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":e})}function Ni(e,{refreshToken:t}){const n=En(e);return n.append("Authorization",Bi(t)),n}async function Sn(e){const t=await e();return t.status>=500&&t.status<600?e():t}function Mi(e){return Number(e.replace("s","000"))}function Bi(e){return`${bn} ${e}`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Fi({appConfig:e,heartbeatServiceProvider:t},{fid:n}){const r=vn(e),s=En(e),i=t.getImmediate({optional:!0});if(i){const u=await i.getHeartbeatsHeader();u&&s.append("x-firebase-client",u)}const o={fid:n,authVersion:bn,appId:e.appId,sdkVersion:gn},a={method:"POST",headers:s,body:JSON.stringify(o)},c=await Sn(()=>fetch(r,a));if(c.ok){const u=await c.json();return{fid:u.fid||n,registrationStatus:2,refreshToken:u.refreshToken,authToken:wn(u.authToken)}}else throw await _n("Create Installation",c)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function An(e){return new Promise(t=>{setTimeout(t,e)})}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Li(e){return btoa(String.fromCharCode(...e)).replace(/\+/g,"-").replace(/\//g,"_")}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ui=/^[cdef][\w-]{21}$/,at="";function ji(){try{const e=new Uint8Array(17);(self.crypto||self.msCrypto).getRandomValues(e),e[0]=112+e[0]%16;const n=Hi(e);return Ui.test(n)?n:at}catch{return at}}function Hi(e){return Li(e).substr(0,22)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Te(e){return`${e.appName}!${e.appId}`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Cn=new Map;function Rn(e,t){const n=Te(e);Tn(n,t),$i(n,t)}function Tn(e,t){const n=Cn.get(e);if(n)for(const r of n)r(t)}function $i(e,t){const n=qi();n&&n.postMessage({key:e,fid:t}),Vi()}let Z=null;function qi(){return!Z&&"BroadcastChannel"in self&&(Z=new BroadcastChannel("[Firebase] FID Change"),Z.onmessage=e=>{Tn(e.data.key,e.data.fid)}),Z}function Vi(){Cn.size===0&&Z&&(Z.close(),Z=null)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zi="firebase-installations-database",Gi=1,Q="firebase-installations-store";let ct=null;function ut(){return ct||(ct=Ce(zi,Gi,{upgrade:(e,t)=>{switch(t){case 0:e.createObjectStore(Q)}}})),ct}async function xe(e,t){const n=Te(e),s=(await ut()).transaction(Q,"readwrite"),i=s.objectStore(Q),o=await i.get(n);return await i.put(t,n),await s.done,(!o||o.fid!==t.fid)&&Rn(e,t.fid),t}async function xn(e){const t=Te(e),r=(await ut()).transaction(Q,"readwrite");await r.objectStore(Q).delete(t),await r.done}async function Ie(e,t){const n=Te(e),s=(await ut()).transaction(Q,"readwrite"),i=s.objectStore(Q),o=await i.get(n),a=t(o);return a===void 0?await i.delete(n):await i.put(a,n),await s.done,a&&(!o||o.fid!==a.fid)&&Rn(e,a.fid),a}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function lt(e){let t;const n=await Ie(e.appConfig,r=>{const s=Wi(r),i=Ji(e,s);return t=i.registrationPromise,i.installationEntry});return n.fid===at?{installationEntry:await t}:{installationEntry:n,registrationPromise:t}}function Wi(e){const t=e||{fid:ji(),registrationStatus:0};return On(t)}function Ji(e,t){if(t.registrationStatus===0){if(!navigator.onLine){const s=Promise.reject(X.create("app-offline"));return{installationEntry:t,registrationPromise:s}}const n={fid:t.fid,registrationStatus:1,registrationTime:Date.now()},r=Ki(e,n);return{installationEntry:n,registrationPromise:r}}else return t.registrationStatus===1?{installationEntry:t,registrationPromise:Yi(e)}:{installationEntry:t}}async function Ki(e,t){try{const n=await Fi(e,t);return xe(e.appConfig,n)}catch(n){throw yn(n)&&n.customData.serverCode===409?await xn(e.appConfig):await xe(e.appConfig,{fid:t.fid,registrationStatus:0}),n}}async function Yi(e){let t=await In(e.appConfig);for(;t.registrationStatus===1;)await An(100),t=await In(e.appConfig);if(t.registrationStatus===0){const{installationEntry:n,registrationPromise:r}=await lt(e);return r||n}return t}function In(e){return Ie(e,t=>{if(!t)throw X.create("installation-not-found");return On(t)})}function On(e){return Xi(e)?{fid:e.fid,registrationStatus:0}:e}function Xi(e){return e.registrationStatus===1&&e.registrationTime+mn<Date.now()}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Zi({appConfig:e,heartbeatServiceProvider:t},n){const r=Qi(e,n),s=Ni(e,n),i=t.getImmediate({optional:!0});if(i){const u=await i.getHeartbeatsHeader();u&&s.append("x-firebase-client",u)}const o={installation:{sdkVersion:gn,appId:e.appId}},a={method:"POST",headers:s,body:JSON.stringify(o)},c=await Sn(()=>fetch(r,a));if(c.ok){const u=await c.json();return wn(u)}else throw await _n("Generate Auth Token",c)}function Qi(e,{fid:t}){return`${vn(e)}/${t}/authTokens:generate`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function dt(e,t=!1){let n;const r=await Ie(e.appConfig,i=>{if(!Dn(i))throw X.create("not-registered");const o=i.authToken;if(!t&&no(o))return i;if(o.requestStatus===1)return n=eo(e,t),i;{if(!navigator.onLine)throw X.create("app-offline");const a=so(i);return n=to(e,a),a}});return n?await n:r.authToken}async function eo(e,t){let n=await kn(e.appConfig);for(;n.authToken.requestStatus===1;)await An(100),n=await kn(e.appConfig);const r=n.authToken;return r.requestStatus===0?dt(e,t):r}function kn(e){return Ie(e,t=>{if(!Dn(t))throw X.create("not-registered");const n=t.authToken;return io(n)?Object.assign(Object.assign({},t),{authToken:{requestStatus:0}}):t})}async function to(e,t){try{const n=await Zi(e,t),r=Object.assign(Object.assign({},t),{authToken:n});return await xe(e.appConfig,r),n}catch(n){if(yn(n)&&(n.customData.serverCode===401||n.customData.serverCode===404))await xn(e.appConfig);else{const r=Object.assign(Object.assign({},t),{authToken:{requestStatus:0}});await xe(e.appConfig,r)}throw n}}function Dn(e){return e!==void 0&&e.registrationStatus===2}function no(e){return e.requestStatus===2&&!ro(e)}function ro(e){const t=Date.now();return t<e.creationTime||e.creationTime+e.expiresIn<t+Oi}function so(e){const t={requestStatus:1,requestTime:Date.now()};return Object.assign(Object.assign({},e),{authToken:t})}function io(e){return e.requestStatus===1&&e.requestTime+mn<Date.now()}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function oo(e){const t=e,{installationEntry:n,registrationPromise:r}=await lt(t);return r?r.catch(console.error):dt(t).catch(console.error),n.fid}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ao(e,t=!1){const n=e;return await co(n),(await dt(n,t)).token}async function co(e){const{registrationPromise:t}=await lt(e);t&&await t}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function uo(e){if(!e||!e.options)throw ft("App Configuration");if(!e.name)throw ft("App Name");const t=["projectId","apiKey","appId"];for(const n of t)if(!e.options[n])throw ft(n);return{appName:e.name,projectId:e.options.projectId,apiKey:e.options.apiKey,appId:e.options.appId}}function ft(e){return X.create("missing-app-config-values",{valueName:e})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Pn="installations",lo="installations-internal",fo=e=>{const t=e.getProvider("app").getImmediate(),n=uo(t),r=st(t,"heartbeat");return{app:t,appConfig:n,heartbeatServiceProvider:r,_delete:()=>Promise.resolve()}},ho=e=>{const t=e.getProvider("app").getImmediate(),n=st(t,Pn).getImmediate();return{getId:()=>oo(n),getToken:s=>ao(n,s)}};function po(){Y(new z(Pn,fo,"PUBLIC")),Y(new z(lo,ho,"PRIVATE"))}po(),W(pn,ot),W(pn,ot,"esm2017");/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mo="/firebase-messaging-sw.js",go="/firebase-cloud-messaging-push-scope",Nn="BDOU99-h67HcA6JeFXHbSNMu7e2yNNu3RzoMj8TM4W88jITfq7ZmPvIM1Iv-4_l2LxQcYwhqby2xGpWwzjfAnG4",bo="https://fcmregistrations.googleapis.com/v1",Mn="google.c.a.c_id",yo="google.c.a.c_l",vo="google.c.a.ts",wo="google.c.a.e",Bn=1e4;var Fn;(function(e){e[e.DATA_MESSAGE=1]="DATA_MESSAGE",e[e.DISPLAY_NOTIFICATION=3]="DISPLAY_NOTIFICATION"})(Fn||(Fn={}));/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License"); you may not use this file except
 * in compliance with the License. You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under the License
 * is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express
 * or implied. See the License for the specific language governing permissions and limitations under
 * the License.
 */var pe;(function(e){e.PUSH_RECEIVED="push-received",e.NOTIFICATION_CLICKED="notification-clicked"})(pe||(pe={}));/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function q(e){const t=new Uint8Array(e);return btoa(String.fromCharCode(...t)).replace(/=/g,"").replace(/\+/g,"-").replace(/\//g,"_")}function _o(e){const t="=".repeat((4-e.length%4)%4),n=(e+t).replace(/\-/g,"+").replace(/_/g,"/"),r=atob(n),s=new Uint8Array(r.length);for(let i=0;i<r.length;++i)s[i]=r.charCodeAt(i);return s}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ht="fcm_token_details_db",Eo=5,Ln="fcm_token_object_Store";async function So(e){if("databases"in indexedDB&&!(await indexedDB.databases()).map(i=>i.name).includes(ht))return null;let t=null;return(await Ce(ht,Eo,{upgrade:async(r,s,i,o)=>{var a;if(s<2||!r.objectStoreNames.contains(Ln))return;const c=o.objectStore(Ln),u=await c.index("fcmSenderId").get(e);if(await c.clear(),!!u){if(s===2){const d=u;if(!d.auth||!d.p256dh||!d.endpoint)return;t={token:d.fcmToken,createTime:(a=d.createTime)!==null&&a!==void 0?a:Date.now(),subscriptionOptions:{auth:d.auth,p256dh:d.p256dh,endpoint:d.endpoint,swScope:d.swScope,vapidKey:typeof d.vapidKey=="string"?d.vapidKey:q(d.vapidKey)}}}else if(s===3){const d=u;t={token:d.fcmToken,createTime:d.createTime,subscriptionOptions:{auth:q(d.auth),p256dh:q(d.p256dh),endpoint:d.endpoint,swScope:d.swScope,vapidKey:q(d.vapidKey)}}}else if(s===4){const d=u;t={token:d.fcmToken,createTime:d.createTime,subscriptionOptions:{auth:q(d.auth),p256dh:q(d.p256dh),endpoint:d.endpoint,swScope:d.swScope,vapidKey:q(d.vapidKey)}}}}}})).close(),await Qe(ht),await Qe("fcm_vapid_details_db"),await Qe("undefined"),Ao(t)?t:null}function Ao(e){if(!e||!e.subscriptionOptions)return!1;const{subscriptionOptions:t}=e;return typeof e.createTime=="number"&&e.createTime>0&&typeof e.token=="string"&&e.token.length>0&&typeof t.auth=="string"&&t.auth.length>0&&typeof t.p256dh=="string"&&t.p256dh.length>0&&typeof t.endpoint=="string"&&t.endpoint.length>0&&typeof t.swScope=="string"&&t.swScope.length>0&&typeof t.vapidKey=="string"&&t.vapidKey.length>0}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Co="firebase-messaging-database",Ro=1,ee="firebase-messaging-store";let pt=null;function mt(){return pt||(pt=Ce(Co,Ro,{upgrade:(e,t)=>{switch(t){case 0:e.createObjectStore(ee)}}})),pt}async function Un(e){const t=bt(e),r=await(await mt()).transaction(ee).objectStore(ee).get(t);if(r)return r;{const s=await So(e.appConfig.senderId);if(s)return await gt(e,s),s}}async function gt(e,t){const n=bt(e),s=(await mt()).transaction(ee,"readwrite");return await s.objectStore(ee).put(t,n),await s.done,t}async function To(e){const t=bt(e),r=(await mt()).transaction(ee,"readwrite");await r.objectStore(ee).delete(t),await r.done}function bt({appConfig:e}){return e.appId}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xo={["missing-app-config-values"]:'Missing App configuration value: "{$valueName}"',["only-available-in-window"]:"This method is available in a Window context.",["only-available-in-sw"]:"This method is available in a service worker context.",["permission-default"]:"The notification permission was not granted and dismissed instead.",["permission-blocked"]:"The notification permission was not granted and blocked instead.",["unsupported-browser"]:"This browser doesn't support the API's required to use the Firebase SDK.",["indexed-db-unsupported"]:"This browser doesn't support indexedDb.open() (ex. Safari iFrame, Firefox Private Browsing, etc)",["failed-service-worker-registration"]:"We are unable to register the default service worker. {$browserErrorMessage}",["token-subscribe-failed"]:"A problem occurred while subscribing the user to FCM: {$errorInfo}",["token-subscribe-no-token"]:"FCM returned no token when subscribing the user to push.",["token-unsubscribe-failed"]:"A problem occurred while unsubscribing the user from FCM: {$errorInfo}",["token-update-failed"]:"A problem occurred while updating the user from FCM: {$errorInfo}",["token-update-no-token"]:"FCM returned no token when updating the user to push.",["use-sw-after-get-token"]:"The useServiceWorker() method may only be called once and must be called before calling getToken() to ensure your service worker is used.",["invalid-sw-registration"]:"The input to useServiceWorker() must be a ServiceWorkerRegistration.",["invalid-bg-handler"]:"The input to setBackgroundMessageHandler() must be a function.",["invalid-vapid-key"]:"The public VAPID key must be a string.",["use-vapid-key-after-get-token"]:"The usePublicVapidKey() method may only be called once and must be called before calling getToken() to ensure your VAPID key is used."},I=new Se("messaging","Messaging",xo);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Io(e,t){const n=await vt(e),r=Hn(t),s={method:"POST",headers:n,body:JSON.stringify(r)};let i;try{i=await(await fetch(yt(e.appConfig),s)).json()}catch(o){throw I.create("token-subscribe-failed",{errorInfo:o?.toString()})}if(i.error){const o=i.error.message;throw I.create("token-subscribe-failed",{errorInfo:o})}if(!i.token)throw I.create("token-subscribe-no-token");return i.token}async function Oo(e,t){const n=await vt(e),r=Hn(t.subscriptionOptions),s={method:"PATCH",headers:n,body:JSON.stringify(r)};let i;try{i=await(await fetch(`${yt(e.appConfig)}/${t.token}`,s)).json()}catch(o){throw I.create("token-update-failed",{errorInfo:o?.toString()})}if(i.error){const o=i.error.message;throw I.create("token-update-failed",{errorInfo:o})}if(!i.token)throw I.create("token-update-no-token");return i.token}async function jn(e,t){const r={method:"DELETE",headers:await vt(e)};try{const i=await(await fetch(`${yt(e.appConfig)}/${t}`,r)).json();if(i.error){const o=i.error.message;throw I.create("token-unsubscribe-failed",{errorInfo:o})}}catch(s){throw I.create("token-unsubscribe-failed",{errorInfo:s?.toString()})}}function yt({projectId:e}){return`${bo}/projects/${e}/registrations`}async function vt({appConfig:e,installations:t}){const n=await t.getToken();return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":e.apiKey,"x-goog-firebase-installations-auth":`FIS ${n}`})}function Hn({p256dh:e,auth:t,endpoint:n,vapidKey:r}){const s={web:{endpoint:n,auth:t,p256dh:e}};return r!==Nn&&(s.web.applicationPubKey=r),s}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ko=7*24*60*60*1e3;async function Do(e){const t=await Mo(e.swRegistration,e.vapidKey),n={vapidKey:e.vapidKey,swScope:e.swRegistration.scope,endpoint:t.endpoint,auth:q(t.getKey("auth")),p256dh:q(t.getKey("p256dh"))},r=await Un(e.firebaseDependencies);if(r){if(Bo(r.subscriptionOptions,n))return Date.now()>=r.createTime+ko?No(e,{token:r.token,createTime:Date.now(),subscriptionOptions:n}):r.token;try{await jn(e.firebaseDependencies,r.token)}catch(s){console.warn(s)}return $n(e.firebaseDependencies,n)}else return $n(e.firebaseDependencies,n)}async function Po(e){const t=await Un(e.firebaseDependencies);t&&(await jn(e.firebaseDependencies,t.token),await To(e.firebaseDependencies));const n=await e.swRegistration.pushManager.getSubscription();return n?n.unsubscribe():!0}async function No(e,t){try{const n=await Oo(e.firebaseDependencies,t),r=Object.assign(Object.assign({},t),{token:n,createTime:Date.now()});return await gt(e.firebaseDependencies,r),n}catch(n){throw n}}async function $n(e,t){const r={token:await Io(e,t),createTime:Date.now(),subscriptionOptions:t};return await gt(e,r),r.token}async function Mo(e,t){const n=await e.pushManager.getSubscription();return n||e.pushManager.subscribe({userVisibleOnly:!0,applicationServerKey:_o(t)})}function Bo(e,t){const n=t.vapidKey===e.vapidKey,r=t.endpoint===e.endpoint,s=t.auth===e.auth,i=t.p256dh===e.p256dh;return n&&r&&s&&i}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qn(e){const t={from:e.from,collapseKey:e.collapse_key,messageId:e.fcmMessageId};return Fo(t,e),Lo(t,e),Uo(t,e),t}function Fo(e,t){if(!t.notification)return;e.notification={};const n=t.notification.title;n&&(e.notification.title=n);const r=t.notification.body;r&&(e.notification.body=r);const s=t.notification.image;s&&(e.notification.image=s);const i=t.notification.icon;i&&(e.notification.icon=i)}function Lo(e,t){t.data&&(e.data=t.data)}function Uo(e,t){var n,r,s,i,o;if(!t.fcmOptions&&!(!((n=t.notification)===null||n===void 0)&&n.click_action))return;e.fcmOptions={};const a=(s=(r=t.fcmOptions)===null||r===void 0?void 0:r.link)!==null&&s!==void 0?s:(i=t.notification)===null||i===void 0?void 0:i.click_action;a&&(e.fcmOptions.link=a);const c=(o=t.fcmOptions)===null||o===void 0?void 0:o.analytics_label;c&&(e.fcmOptions.analyticsLabel=c)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function jo(e){return typeof e=="object"&&!!e&&Mn in e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ho(e){if(!e||!e.options)throw wt("App Configuration Object");if(!e.name)throw wt("App Name");const t=["projectId","apiKey","appId","messagingSenderId"],{options:n}=e;for(const r of t)if(!n[r])throw wt(r);return{appName:e.name,projectId:n.projectId,apiKey:n.apiKey,appId:n.appId,senderId:n.messagingSenderId}}function wt(e){return I.create("missing-app-config-values",{valueName:e})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $o{constructor(t,n,r){this.deliveryMetricsExportedToBigQueryEnabled=!1,this.onBackgroundMessageHandler=null,this.onMessageHandler=null,this.logEvents=[],this.isLogServiceStarted=!1;const s=Ho(t);this.firebaseDependencies={app:t,appConfig:s,installations:n,analyticsProvider:r}}_delete(){return Promise.resolve()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Vn(e){try{e.swRegistration=await navigator.serviceWorker.register(mo,{scope:go}),e.swRegistration.update().catch(()=>{}),await qo(e.swRegistration)}catch(t){throw I.create("failed-service-worker-registration",{browserErrorMessage:t?.message})}}async function qo(e){return new Promise((t,n)=>{const r=setTimeout(()=>n(new Error(`Service worker not registered after ${Bn} ms`)),Bn),s=e.installing||e.waiting;e.active?(clearTimeout(r),t()):s?s.onstatechange=i=>{var o;((o=i.target)===null||o===void 0?void 0:o.state)==="activated"&&(s.onstatechange=null,clearTimeout(r),t())}:(clearTimeout(r),n(new Error("No incoming service worker found.")))})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Vo(e,t){if(!t&&!e.swRegistration&&await Vn(e),!(!t&&e.swRegistration)){if(!(t instanceof ServiceWorkerRegistration))throw I.create("invalid-sw-registration");e.swRegistration=t}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function zo(e,t){t?e.vapidKey=t:e.vapidKey||(e.vapidKey=Nn)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function zn(e,t){if(!navigator)throw I.create("only-available-in-window");if(Notification.permission==="default"&&await Notification.requestPermission(),Notification.permission!=="granted")throw I.create("permission-blocked");return await zo(e,t?.vapidKey),await Vo(e,t?.serviceWorkerRegistration),Do(e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Go(e,t,n){const r=Wo(t);(await e.firebaseDependencies.analyticsProvider.get()).logEvent(r,{message_id:n[Mn],message_name:n[yo],message_time:n[vo],message_device_time:Math.floor(Date.now()/1e3)})}function Wo(e){switch(e){case pe.NOTIFICATION_CLICKED:return"notification_open";case pe.PUSH_RECEIVED:return"notification_foreground";default:throw new Error}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Jo(e,t){const n=t.data;if(!n.isFirebaseMessaging)return;e.onMessageHandler&&n.messageType===pe.PUSH_RECEIVED&&(typeof e.onMessageHandler=="function"?e.onMessageHandler(qn(n)):e.onMessageHandler.next(qn(n)));const r=n.data;jo(r)&&r[wo]==="1"&&await Go(e,n.messageType,r)}const Gn="@firebase/messaging",Wn="0.12.22";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ko=e=>{const t=new $o(e.getProvider("app").getImmediate(),e.getProvider("installations-internal").getImmediate(),e.getProvider("analytics-internal"));return navigator.serviceWorker.addEventListener("message",n=>Jo(t,n)),t},Yo=e=>{const t=e.getProvider("messaging").getImmediate();return{getToken:r=>zn(t,r)}};function Xo(){Y(new z("messaging",Ko,"PUBLIC")),Y(new z("messaging-internal",Yo,"PRIVATE")),W(Gn,Wn),W(Gn,Wn,"esm2017")}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Zo(){try{await Zt()}catch{return!1}return typeof window<"u"&&Xt()&&bs()&&"serviceWorker"in navigator&&"PushManager"in window&&"Notification"in window&&"fetch"in window&&ServiceWorkerRegistration.prototype.hasOwnProperty("showNotification")&&PushSubscription.prototype.hasOwnProperty("getKey")}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Qo(e){if(!navigator)throw I.create("only-available-in-window");return e.swRegistration||await Vn(e),Po(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ea(e,t){if(!navigator)throw I.create("only-available-in-window");return e.onMessageHandler=t,()=>{e.onMessageHandler=null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Jn(e=yi()){return Zo().then(t=>{if(!t)throw I.create("unsupported-browser")},t=>{throw I.create("indexed-db-unsupported")}),st(Ae(e),"messaging").getImmediate()}async function ta(e,t){return e=Ae(e),zn(e,t)}function na(e){return e=Ae(e),Qo(e)}function ra(e,t){return e=Ae(e),ea(e,t)}Xo();var sa=k("ti3Z");function Kn(e,t){return function(){return e.apply(t,arguments)}}const{toString:ia}=Object.prototype,{getPrototypeOf:_t}=Object,{iterator:Oe,toStringTag:Yn}=Symbol,ke=(e=>t=>{const n=ia.call(t);return e[n]||(e[n]=n.slice(8,-1).toLowerCase())})(Object.create(null)),F=e=>(e=e.toLowerCase(),t=>ke(t)===e),De=e=>t=>typeof t===e,{isArray:oe}=Array,me=De("undefined");function oa(e){return e!==null&&!me(e)&&e.constructor!==null&&!me(e.constructor)&&N(e.constructor.isBuffer)&&e.constructor.isBuffer(e)}const Xn=F("ArrayBuffer");function aa(e){let t;return typeof ArrayBuffer<"u"&&ArrayBuffer.isView?t=ArrayBuffer.isView(e):t=e&&e.buffer&&Xn(e.buffer),t}const ca=De("string"),N=De("function"),Zn=De("number"),Pe=e=>e!==null&&typeof e=="object",ua=e=>e===!0||e===!1,Ne=e=>{if(ke(e)!=="object")return!1;const t=_t(e);return(t===null||t===Object.prototype||Object.getPrototypeOf(t)===null)&&!(Yn in e)&&!(Oe in e)},la=F("Date"),da=F("File"),fa=F("Blob"),ha=F("FileList"),pa=e=>Pe(e)&&N(e.pipe),ma=e=>{let t;return e&&(typeof FormData=="function"&&e instanceof FormData||N(e.append)&&((t=ke(e))==="formdata"||t==="object"&&N(e.toString)&&e.toString()==="[object FormData]"))},ga=F("URLSearchParams"),[ba,ya,va,wa]=["ReadableStream","Request","Response","Headers"].map(F),_a=e=>e.trim?e.trim():e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,"");function ge(e,t,{allOwnKeys:n=!1}={}){if(e===null||typeof e>"u")return;let r,s;if(typeof e!="object"&&(e=[e]),oe(e))for(r=0,s=e.length;r<s;r++)t.call(null,e[r],r,e);else{const i=n?Object.getOwnPropertyNames(e):Object.keys(e),o=i.length;let a;for(r=0;r<o;r++)a=i[r],t.call(null,e[a],a,e)}}function Qn(e,t){t=t.toLowerCase();const n=Object.keys(e);let r=n.length,s;for(;r-- >0;)if(s=n[r],t===s.toLowerCase())return s;return null}const te=(()=>typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:k.g)(),er=e=>!me(e)&&e!==te;function Et(){const{caseless:e}=er(this)&&this||{},t={},n=(r,s)=>{const i=e&&Qn(t,s)||s;Ne(t[i])&&Ne(r)?t[i]=Et(t[i],r):Ne(r)?t[i]=Et({},r):oe(r)?t[i]=r.slice():t[i]=r};for(let r=0,s=arguments.length;r<s;r++)arguments[r]&&ge(arguments[r],n);return t}const Ea=(e,t,n,{allOwnKeys:r}={})=>(ge(t,(s,i)=>{n&&N(s)?e[i]=Kn(s,n):e[i]=s},{allOwnKeys:r}),e),Sa=e=>(e.charCodeAt(0)===65279&&(e=e.slice(1)),e),Aa=(e,t,n,r)=>{e.prototype=Object.create(t.prototype,r),e.prototype.constructor=e,Object.defineProperty(e,"super",{value:t.prototype}),n&&Object.assign(e.prototype,n)},Ca=(e,t,n,r)=>{let s,i,o;const a={};if(t=t||{},e==null)return t;do{for(s=Object.getOwnPropertyNames(e),i=s.length;i-- >0;)o=s[i],(!r||r(o,e,t))&&!a[o]&&(t[o]=e[o],a[o]=!0);e=n!==!1&&_t(e)}while(e&&(!n||n(e,t))&&e!==Object.prototype);return t},Ra=(e,t,n)=>{e=String(e),(n===void 0||n>e.length)&&(n=e.length),n-=t.length;const r=e.indexOf(t,n);return r!==-1&&r===n},Ta=e=>{if(!e)return null;if(oe(e))return e;let t=e.length;if(!Zn(t))return null;const n=new Array(t);for(;t-- >0;)n[t]=e[t];return n},xa=(e=>t=>e&&t instanceof e)(typeof Uint8Array<"u"&&_t(Uint8Array)),Ia=(e,t)=>{const r=(e&&e[Oe]).call(e);let s;for(;(s=r.next())&&!s.done;){const i=s.value;t.call(e,i[0],i[1])}},Oa=(e,t)=>{let n;const r=[];for(;(n=e.exec(t))!==null;)r.push(n);return r},ka=F("HTMLFormElement"),Da=e=>e.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g,function(n,r,s){return r.toUpperCase()+s}),tr=(({hasOwnProperty:e})=>(t,n)=>e.call(t,n))(Object.prototype),Pa=F("RegExp"),nr=(e,t)=>{const n=Object.getOwnPropertyDescriptors(e),r={};ge(n,(s,i)=>{let o;(o=t(s,i,e))!==!1&&(r[i]=o||s)}),Object.defineProperties(e,r)},Na=e=>{nr(e,(t,n)=>{if(N(e)&&["arguments","caller","callee"].indexOf(n)!==-1)return!1;const r=e[n];if(N(r)){if(t.enumerable=!1,"writable"in t){t.writable=!1;return}t.set||(t.set=()=>{throw Error("Can not rewrite read-only method '"+n+"'")})}})},Ma=(e,t)=>{const n={},r=s=>{s.forEach(i=>{n[i]=!0})};return oe(e)?r(e):r(String(e).split(t)),n},Ba=()=>{},Fa=(e,t)=>e!=null&&Number.isFinite(e=+e)?e:t;function La(e){return!!(e&&N(e.append)&&e[Yn]==="FormData"&&e[Oe])}const Ua=e=>{const t=new Array(10),n=(r,s)=>{if(Pe(r)){if(t.indexOf(r)>=0)return;if(!("toJSON"in r)){t[s]=r;const i=oe(r)?[]:{};return ge(r,(o,a)=>{const c=n(o,s+1);!me(c)&&(i[a]=c)}),t[s]=void 0,i}}return r};return n(e,0)},ja=F("AsyncFunction"),Ha=e=>e&&(Pe(e)||N(e))&&N(e.then)&&N(e.catch),rr=((e,t)=>e?setImmediate:t?((n,r)=>(te.addEventListener("message",({source:s,data:i})=>{s===te&&i===n&&r.length&&r.shift()()},!1),s=>{r.push(s),te.postMessage(n,"*")}))(`axios@${Math.random()}`,[]):n=>setTimeout(n))(typeof setImmediate=="function",N(te.postMessage)),$a=typeof queueMicrotask<"u"?queueMicrotask.bind(te):typeof process<"u"&&process.nextTick||rr;var l={isArray:oe,isArrayBuffer:Xn,isBuffer:oa,isFormData:ma,isArrayBufferView:aa,isString:ca,isNumber:Zn,isBoolean:ua,isObject:Pe,isPlainObject:Ne,isReadableStream:ba,isRequest:ya,isResponse:va,isHeaders:wa,isUndefined:me,isDate:la,isFile:da,isBlob:fa,isRegExp:Pa,isFunction:N,isStream:pa,isURLSearchParams:ga,isTypedArray:xa,isFileList:ha,forEach:ge,merge:Et,extend:Ea,trim:_a,stripBOM:Sa,inherits:Aa,toFlatObject:Ca,kindOf:ke,kindOfTest:F,endsWith:Ra,toArray:Ta,forEachEntry:Ia,matchAll:Oa,isHTMLForm:ka,hasOwnProperty:tr,hasOwnProp:tr,reduceDescriptors:nr,freezeMethods:Na,toObjectSet:Ma,toCamelCase:Da,noop:Ba,toFiniteNumber:Fa,findKey:Qn,global:te,isContextDefined:er,isSpecCompliantForm:La,toJSONObject:Ua,isAsyncFn:ja,isThenable:Ha,setImmediate:rr,asap:$a,isIterable:e=>e!=null&&N(e[Oe])};function y(e,t,n,r,s){Error.call(this),Error.captureStackTrace?Error.captureStackTrace(this,this.constructor):this.stack=new Error().stack,this.message=e,this.name="AxiosError",t&&(this.code=t),n&&(this.config=n),r&&(this.request=r),s&&(this.response=s,this.status=s.status?s.status:null)}l.inherits(y,Error,{toJSON:function(){return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:l.toJSONObject(this.config),code:this.code,status:this.status}}});const sr=y.prototype,ir={};["ERR_BAD_OPTION_VALUE","ERR_BAD_OPTION","ECONNABORTED","ETIMEDOUT","ERR_NETWORK","ERR_FR_TOO_MANY_REDIRECTS","ERR_DEPRECATED","ERR_BAD_RESPONSE","ERR_BAD_REQUEST","ERR_CANCELED","ERR_NOT_SUPPORT","ERR_INVALID_URL"].forEach(e=>{ir[e]={value:e}}),Object.defineProperties(y,ir),Object.defineProperty(sr,"isAxiosError",{value:!0}),y.from=(e,t,n,r,s,i)=>{const o=Object.create(sr);return l.toFlatObject(e,o,function(c){return c!==Error.prototype},a=>a!=="isAxiosError"),y.call(o,e.message,t,n,r,s),o.cause=e,o.name=e.name,i&&Object.assign(o,i),o};function St(e){return l.isPlainObject(e)||l.isArray(e)}function or(e){return l.endsWith(e,"[]")?e.slice(0,-2):e}function ar(e,t,n){return e?e.concat(t).map(function(s,i){return s=or(s),!n&&i?"["+s+"]":s}).join(n?".":""):t}function qa(e){return l.isArray(e)&&!e.some(St)}const Va=l.toFlatObject(l,{},null,function(t){return/^is[A-Z]/.test(t)});function Me(e,t,n){if(!l.isObject(e))throw new TypeError("target must be an object");t=t||new FormData,n=l.toFlatObject(n,{metaTokens:!0,dots:!1,indexes:!1},!1,function(b,g){return!l.isUndefined(g[b])});const r=n.metaTokens,s=n.visitor||d,i=n.dots,o=n.indexes,c=(n.Blob||typeof Blob<"u"&&Blob)&&l.isSpecCompliantForm(t);if(!l.isFunction(s))throw new TypeError("visitor must be a function");function u(p){if(p===null)return"";if(l.isDate(p))return p.toISOString();if(l.isBoolean(p))return p.toString();if(!c&&l.isBlob(p))throw new y("Blob is not supported. Use a Buffer instead.");return l.isArrayBuffer(p)||l.isTypedArray(p)?c&&typeof Blob=="function"?new Blob([p]):Buffer.from(p):p}function d(p,b,g){let S=p;if(p&&!g&&typeof p=="object"){if(l.endsWith(b,"{}"))b=r?b:b.slice(0,-2),p=JSON.stringify(p);else if(l.isArray(p)&&qa(p)||(l.isFileList(p)||l.endsWith(b,"[]"))&&(S=l.toArray(p)))return b=or(b),S.forEach(function(T,L){!(l.isUndefined(T)||T===null)&&t.append(o===!0?ar([b],L,i):o===null?b:b+"[]",u(T))}),!1}return St(p)?!0:(t.append(ar(g,b,i),u(p)),!1)}const h=[],v=Object.assign(Va,{defaultVisitor:d,convertValue:u,isVisitable:St});function w(p,b){if(!l.isUndefined(p)){if(h.indexOf(p)!==-1)throw Error("Circular reference detected in "+b.join("."));h.push(p),l.forEach(p,function(S,C){(!(l.isUndefined(S)||S===null)&&s.call(t,S,l.isString(C)?C.trim():C,b,v))===!0&&w(S,b?b.concat(C):[C])}),h.pop()}}if(!l.isObject(e))throw new TypeError("data must be an object");return w(e),t}function cr(e){const t={"!":"%21","'":"%27","(":"%28",")":"%29","~":"%7E","%20":"+","%00":"\0"};return encodeURIComponent(e).replace(/[!'()~]|%20|%00/g,function(r){return t[r]})}function At(e,t){this._pairs=[],e&&Me(e,this,t)}const ur=At.prototype;ur.append=function(t,n){this._pairs.push([t,n])},ur.toString=function(t){const n=t?function(r){return t.call(this,r,cr)}:cr;return this._pairs.map(function(s){return n(s[0])+"="+n(s[1])},"").join("&")};function za(e){return encodeURIComponent(e).replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}function lr(e,t,n){if(!t)return e;const r=n&&n.encode||za;l.isFunction(n)&&(n={serialize:n});const s=n&&n.serialize;let i;if(s?i=s(t,n):i=l.isURLSearchParams(t)?t.toString():new At(t,n).toString(r),i){const o=e.indexOf("#");o!==-1&&(e=e.slice(0,o)),e+=(e.indexOf("?")===-1?"?":"&")+i}return e}class dr{constructor(){this.handlers=[]}use(t,n,r){return this.handlers.push({fulfilled:t,rejected:n,synchronous:r?r.synchronous:!1,runWhen:r?r.runWhen:null}),this.handlers.length-1}eject(t){this.handlers[t]&&(this.handlers[t]=null)}clear(){this.handlers&&(this.handlers=[])}forEach(t){l.forEach(this.handlers,function(r){r!==null&&t(r)})}}var fr={silentJSONParsing:!0,forcedJSONParsing:!0,clarifyTimeoutError:!1},Ga=typeof URLSearchParams<"u"?URLSearchParams:At,Wa=typeof FormData<"u"?FormData:null,Ja=typeof Blob<"u"?Blob:null,Ka={isBrowser:!0,classes:{URLSearchParams:Ga,FormData:Wa,Blob:Ja},protocols:["http","https","file","blob","url","data"]};const Ct=typeof window<"u"&&typeof document<"u",Rt=typeof navigator=="object"&&navigator||void 0,Ya=Ct&&(!Rt||["ReactNative","NativeScript","NS"].indexOf(Rt.product)<0),Xa=(()=>typeof WorkerGlobalScope<"u"&&self instanceof WorkerGlobalScope&&typeof self.importScripts=="function")(),Za=Ct&&window.location.href||"http://localhost";var O={...ce,...Ka};function Qa(e,t){return Me(e,new O.classes.URLSearchParams,Object.assign({visitor:function(n,r,s,i){return O.isNode&&l.isBuffer(n)?(this.append(r,n.toString("base64")),!1):i.defaultVisitor.apply(this,arguments)}},t))}function ec(e){return l.matchAll(/\w+|\[(\w*)]/g,e).map(t=>t[0]==="[]"?"":t[1]||t[0])}function tc(e){const t={},n=Object.keys(e);let r;const s=n.length;let i;for(r=0;r<s;r++)i=n[r],t[i]=e[i];return t}function hr(e){function t(n,r,s,i){let o=n[i++];if(o==="__proto__")return!0;const a=Number.isFinite(+o),c=i>=n.length;return o=!o&&l.isArray(s)?s.length:o,c?(l.hasOwnProp(s,o)?s[o]=[s[o],r]:s[o]=r,!a):((!s[o]||!l.isObject(s[o]))&&(s[o]=[]),t(n,r,s[o],i)&&l.isArray(s[o])&&(s[o]=tc(s[o])),!a)}if(l.isFormData(e)&&l.isFunction(e.entries)){const n={};return l.forEachEntry(e,(r,s)=>{t(ec(r),s,n,0)}),n}return null}function nc(e,t,n){if(l.isString(e))try{return(t||JSON.parse)(e),l.trim(e)}catch(r){if(r.name!=="SyntaxError")throw r}return(n||JSON.stringify)(e)}const be={transitional:fr,adapter:["xhr","http","fetch"],transformRequest:[function(t,n){const r=n.getContentType()||"",s=r.indexOf("application/json")>-1,i=l.isObject(t);if(i&&l.isHTMLForm(t)&&(t=new FormData(t)),l.isFormData(t))return s?JSON.stringify(hr(t)):t;if(l.isArrayBuffer(t)||l.isBuffer(t)||l.isStream(t)||l.isFile(t)||l.isBlob(t)||l.isReadableStream(t))return t;if(l.isArrayBufferView(t))return t.buffer;if(l.isURLSearchParams(t))return n.setContentType("application/x-www-form-urlencoded;charset=utf-8",!1),t.toString();let a;if(i){if(r.indexOf("application/x-www-form-urlencoded")>-1)return Qa(t,this.formSerializer).toString();if((a=l.isFileList(t))||r.indexOf("multipart/form-data")>-1){const c=this.env&&this.env.FormData;return Me(a?{"files[]":t}:t,c&&new c,this.formSerializer)}}return i||s?(n.setContentType("application/json",!1),nc(t)):t}],transformResponse:[function(t){const n=this.transitional||be.transitional,r=n&&n.forcedJSONParsing,s=this.responseType==="json";if(l.isResponse(t)||l.isReadableStream(t))return t;if(t&&l.isString(t)&&(r&&!this.responseType||s)){const o=!(n&&n.silentJSONParsing)&&s;try{return JSON.parse(t)}catch(a){if(o)throw a.name==="SyntaxError"?y.from(a,y.ERR_BAD_RESPONSE,this,null,this.response):a}}return t}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,maxBodyLength:-1,env:{FormData:O.classes.FormData,Blob:O.classes.Blob},validateStatus:function(t){return t>=200&&t<300},headers:{common:{Accept:"application/json, text/plain, */*","Content-Type":void 0}}};l.forEach(["delete","get","head","post","put","patch"],e=>{be.headers[e]={}});const rc=l.toObjectSet(["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"]);var sc=e=>{const t={};let n,r,s;return e&&e.split(`
`).forEach(function(o){s=o.indexOf(":"),n=o.substring(0,s).trim().toLowerCase(),r=o.substring(s+1).trim(),!(!n||t[n]&&rc[n])&&(n==="set-cookie"?t[n]?t[n].push(r):t[n]=[r]:t[n]=t[n]?t[n]+", "+r:r)}),t};const pr=Symbol("internals");function ye(e){return e&&String(e).trim().toLowerCase()}function Be(e){return e===!1||e==null?e:l.isArray(e)?e.map(Be):String(e)}function ic(e){const t=Object.create(null),n=/([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;let r;for(;r=n.exec(e);)t[r[1]]=r[2];return t}const oc=e=>/^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(e.trim());function Tt(e,t,n,r,s){if(l.isFunction(r))return r.call(this,t,n);if(s&&(t=n),!!l.isString(t)){if(l.isString(r))return t.indexOf(r)!==-1;if(l.isRegExp(r))return r.test(t)}}function ac(e){return e.trim().toLowerCase().replace(/([a-z\d])(\w*)/g,(t,n,r)=>n.toUpperCase()+r)}function cc(e,t){const n=l.toCamelCase(" "+t);["get","set","has"].forEach(r=>{Object.defineProperty(e,r+n,{value:function(s,i,o){return this[r].call(this,t,s,i,o)},configurable:!0})})}class M{constructor(t){t&&this.set(t)}set(t,n,r){const s=this;function i(a,c,u){const d=ye(c);if(!d)throw new Error("header name must be a non-empty string");const h=l.findKey(s,d);(!h||s[h]===void 0||u===!0||u===void 0&&s[h]!==!1)&&(s[h||c]=Be(a))}const o=(a,c)=>l.forEach(a,(u,d)=>i(u,d,c));if(l.isPlainObject(t)||t instanceof this.constructor)o(t,n);else if(l.isString(t)&&(t=t.trim())&&!oc(t))o(sc(t),n);else if(l.isObject(t)&&l.isIterable(t)){let a={},c,u;for(const d of t){if(!l.isArray(d))throw TypeError("Object iterator must return a key-value pair");a[u=d[0]]=(c=a[u])?l.isArray(c)?[...c,d[1]]:[c,d[1]]:d[1]}o(a,n)}else t!=null&&i(n,t,r);return this}get(t,n){if(t=ye(t),t){const r=l.findKey(this,t);if(r){const s=this[r];if(!n)return s;if(n===!0)return ic(s);if(l.isFunction(n))return n.call(this,s,r);if(l.isRegExp(n))return n.exec(s);throw new TypeError("parser must be boolean|regexp|function")}}}has(t,n){if(t=ye(t),t){const r=l.findKey(this,t);return!!(r&&this[r]!==void 0&&(!n||Tt(this,this[r],r,n)))}return!1}delete(t,n){const r=this;let s=!1;function i(o){if(o=ye(o),o){const a=l.findKey(r,o);a&&(!n||Tt(r,r[a],a,n))&&(delete r[a],s=!0)}}return l.isArray(t)?t.forEach(i):i(t),s}clear(t){const n=Object.keys(this);let r=n.length,s=!1;for(;r--;){const i=n[r];(!t||Tt(this,this[i],i,t,!0))&&(delete this[i],s=!0)}return s}normalize(t){const n=this,r={};return l.forEach(this,(s,i)=>{const o=l.findKey(r,i);if(o){n[o]=Be(s),delete n[i];return}const a=t?ac(i):String(i).trim();a!==i&&delete n[i],n[a]=Be(s),r[a]=!0}),this}concat(...t){return this.constructor.concat(this,...t)}toJSON(t){const n=Object.create(null);return l.forEach(this,(r,s)=>{r!=null&&r!==!1&&(n[s]=t&&l.isArray(r)?r.join(", "):r)}),n}[Symbol.iterator](){return Object.entries(this.toJSON())[Symbol.iterator]()}toString(){return Object.entries(this.toJSON()).map(([t,n])=>t+": "+n).join(`
`)}getSetCookie(){return this.get("set-cookie")||[]}get[Symbol.toStringTag](){return"AxiosHeaders"}static from(t){return t instanceof this?t:new this(t)}static concat(t,...n){const r=new this(t);return n.forEach(s=>r.set(s)),r}static accessor(t){const r=(this[pr]=this[pr]={accessors:{}}).accessors,s=this.prototype;function i(o){const a=ye(o);r[a]||(cc(s,o),r[a]=!0)}return l.isArray(t)?t.forEach(i):i(t),this}}M.accessor(["Content-Type","Content-Length","Accept","Accept-Encoding","User-Agent","Authorization"]),l.reduceDescriptors(M.prototype,({value:e},t)=>{let n=t[0].toUpperCase()+t.slice(1);return{get:()=>e,set(r){this[n]=r}}}),l.freezeMethods(M);function xt(e,t){const n=this||be,r=t||n,s=M.from(r.headers);let i=r.data;return l.forEach(e,function(a){i=a.call(n,i,s.normalize(),t?t.status:void 0)}),s.normalize(),i}function mr(e){return!!(e&&e.__CANCEL__)}function ae(e,t,n){y.call(this,e??"canceled",y.ERR_CANCELED,t,n),this.name="CanceledError"}l.inherits(ae,y,{__CANCEL__:!0});var uc=null;function gr(e,t,n){const r=n.config.validateStatus;!n.status||!r||r(n.status)?e(n):t(new y("Request failed with status code "+n.status,[y.ERR_BAD_REQUEST,y.ERR_BAD_RESPONSE][Math.floor(n.status/100)-4],n.config,n.request,n))}function lc(e){const t=/^([-+\w]{1,25})(:?\/\/|:)/.exec(e);return t&&t[1]||""}function dc(e,t){e=e||10;const n=new Array(e),r=new Array(e);let s=0,i=0,o;return t=t!==void 0?t:1e3,function(c){const u=Date.now(),d=r[i];o||(o=u),n[s]=c,r[s]=u;let h=i,v=0;for(;h!==s;)v+=n[h++],h=h%e;if(s=(s+1)%e,s===i&&(i=(i+1)%e),u-o<t)return;const w=d&&u-d;return w?Math.round(v*1e3/w):void 0}}function fc(e,t){let n=0,r=1e3/t,s,i;const o=(u,d=Date.now())=>{n=d,s=null,i&&(clearTimeout(i),i=null),e.apply(null,u)};return[(...u)=>{const d=Date.now(),h=d-n;h>=r?o(u,d):(s=u,i||(i=setTimeout(()=>{i=null,o(s)},r-h)))},()=>s&&o(s)]}const Fe=(e,t,n=3)=>{let r=0;const s=dc(50,250);return fc(i=>{const o=i.loaded,a=i.lengthComputable?i.total:void 0,c=o-r,u=s(c),d=o<=a;r=o;const h={loaded:o,total:a,progress:a?o/a:void 0,bytes:c,rate:u||void 0,estimated:u&&a&&d?(a-o)/u:void 0,event:i,lengthComputable:a!=null,[t?"download":"upload"]:!0};e(h)},n)},br=(e,t)=>{const n=e!=null;return[r=>t[0]({lengthComputable:n,total:e,loaded:r}),t[1]]},yr=e=>(...t)=>l.asap(()=>e(...t));var hc=O.hasStandardBrowserEnv?((e,t)=>n=>(n=new URL(n,O.origin),e.protocol===n.protocol&&e.host===n.host&&(t||e.port===n.port)))(new URL(O.origin),O.navigator&&/(msie|trident)/i.test(O.navigator.userAgent)):()=>!0,pc=O.hasStandardBrowserEnv?{write(e,t,n,r,s,i){const o=[e+"="+encodeURIComponent(t)];l.isNumber(n)&&o.push("expires="+new Date(n).toGMTString()),l.isString(r)&&o.push("path="+r),l.isString(s)&&o.push("domain="+s),i===!0&&o.push("secure"),document.cookie=o.join("; ")},read(e){const t=document.cookie.match(new RegExp("(^|;\\s*)("+e+")=([^;]*)"));return t?decodeURIComponent(t[3]):null},remove(e){this.write(e,"",Date.now()-864e5)}}:{write(){},read(){return null},remove(){}};function mc(e){return/^([a-z][a-z\d+\-.]*:)?\/\//i.test(e)}function gc(e,t){return t?e.replace(/\/?\/$/,"")+"/"+t.replace(/^\/+/,""):e}function vr(e,t,n){let r=!mc(t);return e&&(r||n==!1)?gc(e,t):t}const wr=e=>e instanceof M?{...e}:e;function ne(e,t){t=t||{};const n={};function r(u,d,h,v){return l.isPlainObject(u)&&l.isPlainObject(d)?l.merge.call({caseless:v},u,d):l.isPlainObject(d)?l.merge({},d):l.isArray(d)?d.slice():d}function s(u,d,h,v){if(l.isUndefined(d)){if(!l.isUndefined(u))return r(void 0,u,h,v)}else return r(u,d,h,v)}function i(u,d){if(!l.isUndefined(d))return r(void 0,d)}function o(u,d){if(l.isUndefined(d)){if(!l.isUndefined(u))return r(void 0,u)}else return r(void 0,d)}function a(u,d,h){if(h in t)return r(u,d);if(h in e)return r(void 0,u)}const c={url:i,method:i,data:i,baseURL:o,transformRequest:o,transformResponse:o,paramsSerializer:o,timeout:o,timeoutMessage:o,withCredentials:o,withXSRFToken:o,adapter:o,responseType:o,xsrfCookieName:o,xsrfHeaderName:o,onUploadProgress:o,onDownloadProgress:o,decompress:o,maxContentLength:o,maxBodyLength:o,beforeRedirect:o,transport:o,httpAgent:o,httpsAgent:o,cancelToken:o,socketPath:o,responseEncoding:o,validateStatus:a,headers:(u,d,h)=>s(wr(u),wr(d),h,!0)};return l.forEach(Object.keys(Object.assign({},e,t)),function(d){const h=c[d]||s,v=h(e[d],t[d],d);l.isUndefined(v)&&h!==a||(n[d]=v)}),n}var _r=e=>{const t=ne({},e);let{data:n,withXSRFToken:r,xsrfHeaderName:s,xsrfCookieName:i,headers:o,auth:a}=t;t.headers=o=M.from(o),t.url=lr(vr(t.baseURL,t.url,t.allowAbsoluteUrls),e.params,e.paramsSerializer),a&&o.set("Authorization","Basic "+btoa((a.username||"")+":"+(a.password?unescape(encodeURIComponent(a.password)):"")));let c;if(l.isFormData(n)){if(O.hasStandardBrowserEnv||O.hasStandardBrowserWebWorkerEnv)o.setContentType(void 0);else if((c=o.getContentType())!==!1){const[u,...d]=c?c.split(";").map(h=>h.trim()).filter(Boolean):[];o.setContentType([u||"multipart/form-data",...d].join("; "))}}if(O.hasStandardBrowserEnv&&(r&&l.isFunction(r)&&(r=r(t)),r||r!==!1&&hc(t.url))){const u=s&&i&&pc.read(i);u&&o.set(s,u)}return t},bc=typeof XMLHttpRequest<"u"&&function(e){return new Promise(function(n,r){const s=_r(e);let i=s.data;const o=M.from(s.headers).normalize();let{responseType:a,onUploadProgress:c,onDownloadProgress:u}=s,d,h,v,w,p;function b(){w&&w(),p&&p(),s.cancelToken&&s.cancelToken.unsubscribe(d),s.signal&&s.signal.removeEventListener("abort",d)}let g=new XMLHttpRequest;g.open(s.method.toUpperCase(),s.url,!0),g.timeout=s.timeout;function S(){if(!g)return;const T=M.from("getAllResponseHeaders"in g&&g.getAllResponseHeaders()),x={data:!a||a==="text"||a==="json"?g.responseText:g.response,status:g.status,statusText:g.statusText,headers:T,config:e,request:g};gr(function(V){n(V),b()},function(V){r(V),b()},x),g=null}"onloadend"in g?g.onloadend=S:g.onreadystatechange=function(){!g||g.readyState!==4||g.status===0&&!(g.responseURL&&g.responseURL.indexOf("file:")===0)||setTimeout(S)},g.onabort=function(){g&&(r(new y("Request aborted",y.ECONNABORTED,e,g)),g=null)},g.onerror=function(){r(new y("Network Error",y.ERR_NETWORK,e,g)),g=null},g.ontimeout=function(){let L=s.timeout?"timeout of "+s.timeout+"ms exceeded":"timeout exceeded";const x=s.transitional||fr;s.timeoutErrorMessage&&(L=s.timeoutErrorMessage),r(new y(L,x.clarifyTimeoutError?y.ETIMEDOUT:y.ECONNABORTED,e,g)),g=null},i===void 0&&o.setContentType(null),"setRequestHeader"in g&&l.forEach(o.toJSON(),function(L,x){g.setRequestHeader(x,L)}),l.isUndefined(s.withCredentials)||(g.withCredentials=!!s.withCredentials),a&&a!=="json"&&(g.responseType=s.responseType),u&&([v,p]=Fe(u,!0),g.addEventListener("progress",v)),c&&g.upload&&([h,w]=Fe(c),g.upload.addEventListener("progress",h),g.upload.addEventListener("loadend",w)),(s.cancelToken||s.signal)&&(d=T=>{g&&(r(!T||T.type?new ae(null,e,g):T),g.abort(),g=null)},s.cancelToken&&s.cancelToken.subscribe(d),s.signal&&(s.signal.aborted?d():s.signal.addEventListener("abort",d)));const C=lc(s.url);if(C&&O.protocols.indexOf(C)===-1){r(new y("Unsupported protocol "+C+":",y.ERR_BAD_REQUEST,e));return}g.send(i||null)})};const yc=(e,t)=>{const{length:n}=e=e?e.filter(Boolean):[];if(t||n){let r=new AbortController,s;const i=function(u){if(!s){s=!0,a();const d=u instanceof Error?u:this.reason;r.abort(d instanceof y?d:new ae(d instanceof Error?d.message:d))}};let o=t&&setTimeout(()=>{o=null,i(new y(`timeout ${t} of ms exceeded`,y.ETIMEDOUT))},t);const a=()=>{e&&(o&&clearTimeout(o),o=null,e.forEach(u=>{u.unsubscribe?u.unsubscribe(i):u.removeEventListener("abort",i)}),e=null)};e.forEach(u=>u.addEventListener("abort",i));const{signal:c}=r;return c.unsubscribe=()=>l.asap(a),c}},vc=function*(e,t){let n=e.byteLength;if(n<t){yield e;return}let r=0,s;for(;r<n;)s=r+t,yield e.slice(r,s),r=s},wc=async function*(e,t){for await(const n of _c(e))yield*vc(n,t)},_c=async function*(e){if(e[Symbol.asyncIterator]){yield*e;return}const t=e.getReader();try{for(;;){const{done:n,value:r}=await t.read();if(n)break;yield r}}finally{await t.cancel()}},Er=(e,t,n,r)=>{const s=wc(e,t);let i=0,o,a=c=>{o||(o=!0,r&&r(c))};return new ReadableStream({async pull(c){try{const{done:u,value:d}=await s.next();if(u){a(),c.close();return}let h=d.byteLength;if(n){let v=i+=h;n(v)}c.enqueue(new Uint8Array(d))}catch(u){throw a(u),u}},cancel(c){return a(c),s.return()}},{highWaterMark:2})},Le=typeof fetch=="function"&&typeof Request=="function"&&typeof Response=="function",Sr=Le&&typeof ReadableStream=="function",Ec=Le&&(typeof TextEncoder=="function"?(e=>t=>e.encode(t))(new TextEncoder):async e=>new Uint8Array(await new Response(e).arrayBuffer())),Ar=(e,...t)=>{try{return!!e(...t)}catch{return!1}},Sc=Sr&&Ar(()=>{let e=!1;const t=new Request(O.origin,{body:new ReadableStream,method:"POST",get duplex(){return e=!0,"half"}}).headers.has("Content-Type");return e&&!t}),Cr=64*1024,It=Sr&&Ar(()=>l.isReadableStream(new Response("").body)),Ue={stream:It&&(e=>e.body)};Le&&(e=>{["text","arrayBuffer","blob","formData","stream"].forEach(t=>{!Ue[t]&&(Ue[t]=l.isFunction(e[t])?n=>n[t]():(n,r)=>{throw new y(`Response type '${t}' is not supported`,y.ERR_NOT_SUPPORT,r)})})})(new Response);const Ac=async e=>{if(e==null)return 0;if(l.isBlob(e))return e.size;if(l.isSpecCompliantForm(e))return(await new Request(O.origin,{method:"POST",body:e}).arrayBuffer()).byteLength;if(l.isArrayBufferView(e)||l.isArrayBuffer(e))return e.byteLength;if(l.isURLSearchParams(e)&&(e=e+""),l.isString(e))return(await Ec(e)).byteLength},Cc=async(e,t)=>{const n=l.toFiniteNumber(e.getContentLength());return n??Ac(t)};var Rc=Le&&(async e=>{let{url:t,method:n,data:r,signal:s,cancelToken:i,timeout:o,onDownloadProgress:a,onUploadProgress:c,responseType:u,headers:d,withCredentials:h="same-origin",fetchOptions:v}=_r(e);u=u?(u+"").toLowerCase():"text";let w=yc([s,i&&i.toAbortSignal()],o),p;const b=w&&w.unsubscribe&&(()=>{w.unsubscribe()});let g;try{if(c&&Sc&&n!=="get"&&n!=="head"&&(g=await Cc(d,r))!==0){let x=new Request(t,{method:"POST",body:r,duplex:"half"}),j;if(l.isFormData(r)&&(j=x.headers.get("content-type"))&&d.setContentType(j),x.body){const[V,B]=br(g,Fe(yr(c)));r=Er(x.body,Cr,V,B)}}l.isString(h)||(h=h?"include":"omit");const S="credentials"in Request.prototype;p=new Request(t,{...v,signal:w,method:n.toUpperCase(),headers:d.normalize().toJSON(),body:r,duplex:"half",credentials:S?h:void 0});let C=await fetch(p,v);const T=It&&(u==="stream"||u==="response");if(It&&(a||T&&b)){const x={};["status","statusText","headers"].forEach($e=>{x[$e]=C[$e]});const j=l.toFiniteNumber(C.headers.get("content-length")),[V,B]=a&&br(j,Fe(yr(a),!0))||[];C=new Response(Er(C.body,Cr,V,()=>{B&&B(),b&&b()}),x)}u=u||"text";let L=await Ue[l.findKey(Ue,u)||"text"](C,e);return!T&&b&&b(),await new Promise((x,j)=>{gr(x,j,{data:L,headers:M.from(C.headers),status:C.status,statusText:C.statusText,config:e,request:p})})}catch(S){throw b&&b(),S&&S.name==="TypeError"&&/Load failed|fetch/i.test(S.message)?Object.assign(new y("Network Error",y.ERR_NETWORK,e,p),{cause:S.cause||S}):y.from(S,S&&S.code,e,p)}});const Ot={http:uc,xhr:bc,fetch:Rc};l.forEach(Ot,(e,t)=>{if(e){try{Object.defineProperty(e,"name",{value:t})}catch{}Object.defineProperty(e,"adapterName",{value:t})}});const Rr=e=>`- ${e}`,Tc=e=>l.isFunction(e)||e===null||e===!1;var Tr={getAdapter:e=>{e=l.isArray(e)?e:[e];const{length:t}=e;let n,r;const s={};for(let i=0;i<t;i++){n=e[i];let o;if(r=n,!Tc(n)&&(r=Ot[(o=String(n)).toLowerCase()],r===void 0))throw new y(`Unknown adapter '${o}'`);if(r)break;s[o||"#"+i]=r}if(!r){const i=Object.entries(s).map(([a,c])=>`adapter ${a} `+(c===!1?"is not supported by the environment":"is not available in the build"));let o=t?i.length>1?`since :
`+i.map(Rr).join(`
`):" "+Rr(i[0]):"as no adapter specified";throw new y("There is no suitable adapter to dispatch the request "+o,"ERR_NOT_SUPPORT")}return r},adapters:Ot};function kt(e){if(e.cancelToken&&e.cancelToken.throwIfRequested(),e.signal&&e.signal.aborted)throw new ae(null,e)}function xr(e){return kt(e),e.headers=M.from(e.headers),e.data=xt.call(e,e.transformRequest),["post","put","patch"].indexOf(e.method)!==-1&&e.headers.setContentType("application/x-www-form-urlencoded",!1),Tr.getAdapter(e.adapter||be.adapter)(e).then(function(r){return kt(e),r.data=xt.call(e,e.transformResponse,r),r.headers=M.from(r.headers),r},function(r){return mr(r)||(kt(e),r&&r.response&&(r.response.data=xt.call(e,e.transformResponse,r.response),r.response.headers=M.from(r.response.headers))),Promise.reject(r)})}const Ir="1.10.0",je={};["object","boolean","number","function","string","symbol"].forEach((e,t)=>{je[e]=function(r){return typeof r===e||"a"+(t<1?"n ":" ")+e}});const Or={};je.transitional=function(t,n,r){function s(i,o){return"[Axios v"+Ir+"] Transitional option '"+i+"'"+o+(r?". "+r:"")}return(i,o,a)=>{if(t===!1)throw new y(s(o," has been removed"+(n?" in "+n:"")),y.ERR_DEPRECATED);return n&&!Or[o]&&(Or[o]=!0,console.warn(s(o," has been deprecated since v"+n+" and will be removed in the near future"))),t?t(i,o,a):!0}},je.spelling=function(t){return(n,r)=>(console.warn(`${r} is likely a misspelling of ${t}`),!0)};function xc(e,t,n){if(typeof e!="object")throw new y("options must be an object",y.ERR_BAD_OPTION_VALUE);const r=Object.keys(e);let s=r.length;for(;s-- >0;){const i=r[s],o=t[i];if(o){const a=e[i],c=a===void 0||o(a,i,e);if(c!==!0)throw new y("option "+i+" must be "+c,y.ERR_BAD_OPTION_VALUE);continue}if(n!==!0)throw new y("Unknown option "+i,y.ERR_BAD_OPTION)}}var He={assertOptions:xc,validators:je};const U=He.validators;class re{constructor(t){this.defaults=t||{},this.interceptors={request:new dr,response:new dr}}async request(t,n){try{return await this._request(t,n)}catch(r){if(r instanceof Error){let s={};Error.captureStackTrace?Error.captureStackTrace(s):s=new Error;const i=s.stack?s.stack.replace(/^.+\n/,""):"";try{r.stack?i&&!String(r.stack).endsWith(i.replace(/^.+\n.+\n/,""))&&(r.stack+=`
`+i):r.stack=i}catch{}}throw r}}_request(t,n){typeof t=="string"?(n=n||{},n.url=t):n=t||{},n=ne(this.defaults,n);const{transitional:r,paramsSerializer:s,headers:i}=n;r!==void 0&&He.assertOptions(r,{silentJSONParsing:U.transitional(U.boolean),forcedJSONParsing:U.transitional(U.boolean),clarifyTimeoutError:U.transitional(U.boolean)},!1),s!=null&&(l.isFunction(s)?n.paramsSerializer={serialize:s}:He.assertOptions(s,{encode:U.function,serialize:U.function},!0)),n.allowAbsoluteUrls!==void 0||(this.defaults.allowAbsoluteUrls!==void 0?n.allowAbsoluteUrls=this.defaults.allowAbsoluteUrls:n.allowAbsoluteUrls=!0),He.assertOptions(n,{baseUrl:U.spelling("baseURL"),withXsrfToken:U.spelling("withXSRFToken")},!0),n.method=(n.method||this.defaults.method||"get").toLowerCase();let o=i&&l.merge(i.common,i[n.method]);i&&l.forEach(["delete","get","head","post","put","patch","common"],p=>{delete i[p]}),n.headers=M.concat(o,i);const a=[];let c=!0;this.interceptors.request.forEach(function(b){typeof b.runWhen=="function"&&b.runWhen(n)===!1||(c=c&&b.synchronous,a.unshift(b.fulfilled,b.rejected))});const u=[];this.interceptors.response.forEach(function(b){u.push(b.fulfilled,b.rejected)});let d,h=0,v;if(!c){const p=[xr.bind(this),void 0];for(p.unshift.apply(p,a),p.push.apply(p,u),v=p.length,d=Promise.resolve(n);h<v;)d=d.then(p[h++],p[h++]);return d}v=a.length;let w=n;for(h=0;h<v;){const p=a[h++],b=a[h++];try{w=p(w)}catch(g){b.call(this,g);break}}try{d=xr.call(this,w)}catch(p){return Promise.reject(p)}for(h=0,v=u.length;h<v;)d=d.then(u[h++],u[h++]);return d}getUri(t){t=ne(this.defaults,t);const n=vr(t.baseURL,t.url,t.allowAbsoluteUrls);return lr(n,t.params,t.paramsSerializer)}}l.forEach(["delete","get","head","options"],function(t){re.prototype[t]=function(n,r){return this.request(ne(r||{},{method:t,url:n,data:(r||{}).data}))}}),l.forEach(["post","put","patch"],function(t){function n(r){return function(i,o,a){return this.request(ne(a||{},{method:t,headers:r?{"Content-Type":"multipart/form-data"}:{},url:i,data:o}))}}re.prototype[t]=n(),re.prototype[t+"Form"]=n(!0)});class Dt{constructor(t){if(typeof t!="function")throw new TypeError("executor must be a function.");let n;this.promise=new Promise(function(i){n=i});const r=this;this.promise.then(s=>{if(!r._listeners)return;let i=r._listeners.length;for(;i-- >0;)r._listeners[i](s);r._listeners=null}),this.promise.then=s=>{let i;const o=new Promise(a=>{r.subscribe(a),i=a}).then(s);return o.cancel=function(){r.unsubscribe(i)},o},t(function(i,o,a){r.reason||(r.reason=new ae(i,o,a),n(r.reason))})}throwIfRequested(){if(this.reason)throw this.reason}subscribe(t){if(this.reason){t(this.reason);return}this._listeners?this._listeners.push(t):this._listeners=[t]}unsubscribe(t){if(!this._listeners)return;const n=this._listeners.indexOf(t);n!==-1&&this._listeners.splice(n,1)}toAbortSignal(){const t=new AbortController,n=r=>{t.abort(r)};return this.subscribe(n),t.signal.unsubscribe=()=>this.unsubscribe(n),t.signal}static source(){let t;return{token:new Dt(function(s){t=s}),cancel:t}}}function Ic(e){return function(n){return e.apply(null,n)}}function Oc(e){return l.isObject(e)&&e.isAxiosError===!0}const Pt={Continue:100,SwitchingProtocols:101,Processing:102,EarlyHints:103,Ok:200,Created:201,Accepted:202,NonAuthoritativeInformation:203,NoContent:204,ResetContent:205,PartialContent:206,MultiStatus:207,AlreadyReported:208,ImUsed:226,MultipleChoices:300,MovedPermanently:301,Found:302,SeeOther:303,NotModified:304,UseProxy:305,Unused:306,TemporaryRedirect:307,PermanentRedirect:308,BadRequest:400,Unauthorized:401,PaymentRequired:402,Forbidden:403,NotFound:404,MethodNotAllowed:405,NotAcceptable:406,ProxyAuthenticationRequired:407,RequestTimeout:408,Conflict:409,Gone:410,LengthRequired:411,PreconditionFailed:412,PayloadTooLarge:413,UriTooLong:414,UnsupportedMediaType:415,RangeNotSatisfiable:416,ExpectationFailed:417,ImATeapot:418,MisdirectedRequest:421,UnprocessableEntity:422,Locked:423,FailedDependency:424,TooEarly:425,UpgradeRequired:426,PreconditionRequired:428,TooManyRequests:429,RequestHeaderFieldsTooLarge:431,UnavailableForLegalReasons:451,InternalServerError:500,NotImplemented:501,BadGateway:502,ServiceUnavailable:503,GatewayTimeout:504,HttpVersionNotSupported:505,VariantAlsoNegotiates:506,InsufficientStorage:507,LoopDetected:508,NotExtended:510,NetworkAuthenticationRequired:511};Object.entries(Pt).forEach(([e,t])=>{Pt[t]=e});function kr(e){const t=new re(e),n=Kn(re.prototype.request,t);return l.extend(n,re.prototype,t,{allOwnKeys:!0}),l.extend(n,t,null,{allOwnKeys:!0}),n.create=function(s){return kr(ne(e,s))},n}const R=kr(be);R.Axios=re,R.CanceledError=ae,R.CancelToken=Dt,R.isCancel=mr,R.VERSION=Ir,R.toFormData=Me,R.AxiosError=y,R.Cancel=R.CanceledError,R.all=function(t){return Promise.all(t)},R.spread=Ic,R.isAxiosError=Oc,R.mergeConfig=ne,R.AxiosHeaders=M,R.formToJSON=e=>hr(l.isHTMLForm(e)?new FormData(e):e),R.getAdapter=Tr.getAdapter,R.HttpStatusCode=Pt,R.default=R;const{Axios:ou,AxiosError:au,CanceledError:cu,isCancel:uu,CancelToken:lu,VERSION:du,all:fu,Cancel:hu,isAxiosError:pu,spread:mu,toFormData:gu,AxiosHeaders:bu,HttpStatusCode:yu,formToJSON:vu,getAdapter:wu,mergeConfig:_u}=R;var Nt={fmsPortal:"fms portal",amsPortal:"ams portal",agencyPortal:"agency portal"},kc={use_case:Nt.agencyPortal,user_type:fe.agency,notification_type_list:[Ee.Agency]},Dc={use_case:Nt.amsPortal,user_type:fe.ams,notification_type_list:[Ee.AssetNotify]},Pc={use_case:Nt.fmsPortal,user_type:fe.fms},Nc=function(){return $t()?Dc:le()?kc:Pc},Mc=function(){return window.location.origin},Mt=function(e){if(!e||!document.cookie)return null;var t=document.cookie.match(new RegExp("(^| )"+e+"=([^;]*)(;|$)","g"));if(t&&t.length>0){var n=unescape(t[0]),r=n.substring(n.indexOf("=")+1,n.length).replace(/;$/,"");return r}return null},Bc=function(){var e=window.location.host,t=(0,f.CR)(e.split("."),3);t[0],t[1];var n=t[2];return["test","uat","staging"].includes(n)?n:""},Fc=function(){return Mt("region")||"ID"},Lc=function(){var e=Bc(),t=Fc().toLowerCase();return"https://spx-cross.ssc.".concat(e&&e+".","shopee.com/").concat(t)},Uc=function(){return window.location.origin},jc=function(){return $t()?Lc():le()?Mc():Xr()?Uc():""},Hc=function(){return{"from-host":window.location.host}},$c=function(){function e(t){this.pathGenerator=t,this.baseURL=jc(),this.headers=Hc()}return e.prototype.request=function(t,n){return(0,f.mG)(this,void 0,void 0,function(){var r;return(0,f.Jh)(this,function(s){switch(s.label){case 0:return[4,R({method:"POST",url:"".concat(this.baseURL).concat(t),headers:this.headers,timeout:10*1e3,withCredentials:!0,data:(0,f.pi)((0,f.pi)({},n),Nc())})];case 1:return r=s.sent(),[2,r.data]}})})},e.prototype.getMessageList=function(t){return(0,f.mG)(this,void 0,void 0,function(){var n,r,s,i,o,a,c,u,d,h,v;return(0,f.Jh)(this,function(w){switch(w.label){case 0:return[4,this.request(this.pathGenerator.getListPath(),t)];case 1:return n=w.sent(),r=(o=(i=(s=n.data)===null||s===void 0?void 0:s.list)===null||i===void 0?void 0:i.map(function(p){var b={};try{b=JSON.parse(p.detail||"{}")}catch(g){b={},console.error("[noti-firebase] get pn list parse detail error",g)}return{id:p.notification_unique_id_str,title:p.notification_title,content:p.notification_body,time:p.push_time,status:p.read_status===ze.Pending?"unread":"read",detail:b}}))!==null&&o!==void 0?o:[],[2,{list:r,total:(c=(a=n.data)===null||a===void 0?void 0:a.total)!==null&&c!==void 0?c:0,pageno:(d=(u=n.data)===null||u===void 0?void 0:u.pageno)!==null&&d!==void 0?d:1,count:(v=(h=n.data)===null||h===void 0?void 0:h.count)!==null&&v!==void 0?v:0}]}})})},e.prototype.getUnreadMessageCount=function(){return(0,f.mG)(this,void 0,void 0,function(){var t,n,r;return(0,f.Jh)(this,function(s){switch(s.label){case 0:return[4,this.request(this.pathGenerator.getUnreadCountPath(),{})];case 1:return t=s.sent(),[2,(r=(n=t.data)===null||n===void 0?void 0:n.total)!==null&&r!==void 0?r:0]}})})},e.prototype.getUnreadMessage=function(t){return(0,f.mG)(this,void 0,void 0,function(){return(0,f.Jh)(this,function(n){return[2,this.request(this.pathGenerator.getUnreadListPath(),t)]})})},e.prototype.getMessageDetail=function(t){return(0,f.mG)(this,void 0,void 0,function(){return(0,f.Jh)(this,function(n){return[2,this.request(this.pathGenerator.getMessageDetailPath(),t)]})})},e.prototype.readMessage=function(t){return(0,f.mG)(this,void 0,void 0,function(){return(0,f.Jh)(this,function(n){return[2,this.request(this.pathGenerator.getReadMessagePath(),t)]})})},e.prototype.readAllMessages=function(){return(0,f.mG)(this,void 0,void 0,function(){return(0,f.Jh)(this,function(t){return[2,this.request(this.pathGenerator.getReadAllMessagesPath(),{})]})})},e.prototype.updateToken=function(t){return(0,f.mG)(this,void 0,void 0,function(){return(0,f.Jh)(this,function(n){return[2,this.request(this.pathGenerator.getUpdateTokenPath(),{token:t})]})})},e}(),qc=function(){function e(){}return e.prototype.getListPath=function(){return"/api/basicserver/agency/notification/pn/search"},e.prototype.getUnreadCountPath=function(){return"/api/basicserver/agency/notification/pn/pending/read/count"},e.prototype.getUnreadListPath=function(){return"/api/basicserver/agency/notification/pn/unread/search"},e.prototype.getMessageDetailPath=function(){return"/api/basicserver/agency/notification/pn/detail"},e.prototype.getReadMessagePath=function(){return"/api/basicserver/agency/notification/pn/read"},e.prototype.getReadAllMessagesPath=function(){return"/api/basicserver/agency/notification/pn/read/all"},e.prototype.getUpdateTokenPath=function(){return"/api/basicserver/agency/notification/fcm/token/update"},e}(),Vc=function(){function e(){}return e.prototype.getListPath=function(){return"/api/basicserver/notification/pn/search"},e.prototype.getUnreadCountPath=function(){return"/api/basicserver/notification/pn/pending/read/count"},e.prototype.getUnreadListPath=function(){return"/api/basicserver/notification/pn/unread/search"},e.prototype.getMessageDetailPath=function(){return"/api/basicserver/notification/pn/detail"},e.prototype.getReadMessagePath=function(){return"/api/basicserver/notification/pn/read"},e.prototype.getReadAllMessagesPath=function(){return"/api/basicserver/notification/pn/read/all"},e.prototype.getUpdateTokenPath=function(){return"/api/basicserver/notification/fcm/token/update"},e}(),zc=function(){return le()?new qc:new Vc};function Gc(){var e=zc();return new $c(e)}function Wc(e){return function(t){(0,f.ZT)(n,t);function n(){for(var r=[],s=0;s<arguments.length;s++)r[s]=arguments[s];var i=t.apply(this,(0,f.ev)([],(0,f.CR)(r),!1))||this;return i.getMessageList=function(o){return i._apiAdapter.getMessageList(o)},i.getUnreadMessageCount=function(){return i._apiAdapter.getUnreadMessageCount()},i.readMessage=function(o){return i._apiAdapter.readMessage(o)},i.readAllMessage=function(){return i._apiAdapter.readAllMessages()},i.updateToken=function(o){return i._apiAdapter.updateToken(o)},i._apiAdapter=Gc(),i}return n}(e)}function Jc(e){return function(t){(0,f.ZT)(n,t);function n(){for(var r=[],s=0;s<arguments.length;s++)r[s]=arguments[s];var i,o,a,c=t.apply(this,(0,f.ev)([],(0,f.CR)(r),!1))||this,u=r[0],d=(i=u?.adapterConfig)===null||i===void 0?void 0:i.$gt;c.$gt=d?function(w){return d(w)}:function(w){return w};var h=/https:\/\/ams.ssc\..*?\.?shopee.com/,v=h.test(window.location.href);return v?c.uniqueId=(o=Mt("user-id"))!==null&&o!==void 0?o:"":le()?c.uniqueId=(a=Mt("spx_uid"))!==null&&a!==void 0?a:"":c.uniqueId="",c}return n}(e)}var Kc="firebase",Yc="11.10.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */W(Kc,Yc,"app");var Xc=function(e){if(!e||!e.apiKey)throw new Error("No Firebase configuration object provided.");return e},Zc=function(e){try{return cn(Xc(e))}catch(t){throw console.error(t),new Error("Push service work with https only")}},Qc=function(e){try{var t=Zc(e);return Jn(t)}catch(n){throw console.error(n),new Error("Push service work with https only")}};function eu(){return(0,f.mG)(this,void 0,void 0,function(){var e,t;return(0,f.Jh)(this,function(n){switch(n.label){case 0:return n.trys.push([0,2,,3]),[4,Notification.requestPermission()];case 1:return e=n.sent(),e==="granted"?(console.info("[noti-firebase] notification permission granted."),[2,!0]):(console.info("[noti-firebase] unable to get permission to notify."),[2,!1]);case 2:return t=n.sent(),console.error("[noti-firebase] notification permission error",t),[2,!1];case 3:return[2]}})})}var tu=function(){return"serviceWorker"in navigator&&"PushManager"in window},nu=function(){function e(n){var r=this;this._uiPrefixCls={prefixCls:"ssc",rcPrefixCls:"ssc-rc"},this._schedulerConfig=void 0,this._scheduler=void 0,this._actionConfig={showView:!1},this.isSameUser=function(){var s=Br(),i=s.token,o=s.uniqueId;return!(i&&o!==r.uniqueId)},this.notifyError=function(s,i,o){var a,c=o instanceof Error?o:new Error(String(o)),u={type:s,message:i,originalError:c};console.error("[noti-firebase] ".concat(s,":"),i,c),(a=r._subscribe)===null||a===void 0||a.call(r,s,u)},this.notifyEvent=function(s,i){var o;console.info("[noti-firebase] ".concat(s,":"),i),(o=r._subscribe)===null||o===void 0||o.call(r,s)},this.registerServiceWorker=function(){return(0,f.mG)(r,void 0,void 0,function(){var s,i;return(0,f.Jh)(this,function(o){switch(o.label){case 0:return o.trys.push([0,2,,3]),[4,navigator.serviceWorker.register("/n/firebase-messaging-sw.js")];case 1:return s=o.sent(),[2,s];case 2:return i=o.sent(),this.notifyError("service-worker-registration-failed","Failed to register Firebase messaging service worker",i),[2,null];case 3:return[2]}})})},this.getToken=function(s,i){return(0,f.mG)(r,void 0,void 0,function(){var o,a;return(0,f.Jh)(this,function(c){switch(c.label){case 0:return c.trys.push([0,2,,3]),[4,ta(s,{vapidKey:this._firebaseConfig.vapidKey,serviceWorkerRegistration:i})];case 1:return o=c.sent(),[2,o];case 2:return a=c.sent(),this.notifyError("token-get-failed","Failed to get Firebase token",a),[2,null];case 3:return[2]}})})},this.deleteOldToken=function(s){return(0,f.mG)(r,void 0,void 0,function(){var i;return(0,f.Jh)(this,function(o){switch(o.label){case 0:return o.trys.push([0,2,,3]),[4,na(s)];case 1:return o.sent(),[2,!0];case 2:return i=o.sent(),this.notifyError("token-delete-failed","Failed to delete old Firebase token",i),[2,!1];case 3:return[2]}})})},this.updateTokenToServer=function(s){return(0,f.mG)(r,void 0,void 0,function(){var i;return(0,f.Jh)(this,function(o){switch(o.label){case 0:return o.trys.push([0,2,,3]),[4,this.updateToken(s)];case 1:return o.sent(),[2,!0];case 2:return i=o.sent(),this.notifyError("token-update-failed","Failed to update token to server",i),[2,!1];case 3:return[2]}})})},this.getFirebaseToken=function(){return(0,f.mG)(r,void 0,void 0,function(){var s,i,o,a;return(0,f.Jh)(this,function(c){switch(c.label){case 0:return this._firebaseConfig?(s=Qc(this._firebaseConfig),[4,this.registerServiceWorker()]):(this.notifyError("firebase-config-error","Firebase config is not found."),[2,{token:null,isRegistrationSuccess:!1}]);case 1:return i=c.sent(),i?this.isSameUser()?[3,3]:[4,this.deleteOldToken(s)]:[2,{token:null,isRegistrationSuccess:!1}];case 2:c.sent(),c.label=3;case 3:return[4,this.getToken(s,i)];case 4:return o=c.sent(),o?(console.info("[noti-firebase] currentToken:",o),Fr(o,this.uniqueId),[4,this.updateTokenToServer(o)]):[2,{token:null,isRegistrationSuccess:!0}];case 5:return a=c.sent(),[2,{token:a?o:null,isRegistrationSuccess:!0}]}})})},this.isSupportFirebase=function(){var s;return!((s=r._schedulerConfig)===null||s===void 0)&&s.manualEnable?!1:tu()},this.registerFirebase=function(){return(0,f.mG)(r,void 0,void 0,function(){var s,i,o,a;return(0,f.Jh)(this,function(c){switch(c.label){case 0:return c.trys.push([0,3,,4]),[4,this.getFirebaseToken()];case 1:return s=c.sent(),i=s.token,o=s.isRegistrationSuccess,i?[2,!0]:[4,eu()];case 2:return a=c.sent(),a||this.notifyError("permission-error","Notification permission denied by user"),[2,o&&a];case 3:return c.sent(),[2,!1];case 4:return[2]}})})},this.registerScheduler=function(s){try{var i=s??6e4;return r._scheduler=qt.getInstance(),r._scheduler.setInterval(i),r._scheduler.start(),console.info("[noti-firebase] start scheduler"),function(){var o;(o=r._scheduler)===null||o===void 0||o.stop(),r.notifyEvent("unregister-scheduler","Unregister scheduler, firebase system is ready"),console.info("[noti-firebase] stop scheduler")}}catch(o){return r.notifyError("registration-scheduler-error","Failed to register scheduler",o),function(){}}},this.register=function(){return(0,f.mG)(r,void 0,void 0,function(){var s,i,o,a,c,u;return(0,f.Jh)(this,function(d){switch(d.label){case 0:if(s=function(){},((a=this._schedulerConfig)===null||a===void 0?void 0:a.manualEnable)!==!1)try{s=this.registerScheduler((c=this._schedulerConfig)===null||c===void 0?void 0:c.interval)}catch{s=function(){}}if(!this.isSupportFirebase())return[3,5];d.label=1;case 1:return d.trys.push([1,3,,4]),[4,this.registerFirebase()];case 2:return i=d.sent(),i&&!(!((u=this._schedulerConfig)===null||u===void 0)&&u.manualEnable)&&s(),i?this.notifyEvent("registration-firebase-success","Firebase registration successfully"):this.notifyError("registration-firebase-error","Firebase registration failed"),[3,4];case 3:return o=d.sent(),this.notifyError("registration-firebase-error","Failed to register Firebase",o),[3,4];case 4:return[3,6];case 5:this.notifyError("not-support-firebase","Firebase is not supported in this environment"),d.label=6;case 6:return[2]}})})},this.handleMessageRead=function(s){return(0,f.mG)(r,void 0,void 0,function(){var i;return(0,f.Jh)(this,function(o){switch(o.label){case 0:return o.trys.push([0,2,,3]),[4,this.readMessage({notification_unique_ids:[s],read_by_time:Ge.ID})];case 1:return o.sent(),[3,3];case 2:return i=o.sent(),console.error("[noti-firebase] read message error",i),[3,3];case 3:return[2]}})})},this.handleAllMessageRead=function(){return(0,f.mG)(r,void 0,void 0,function(){var s;return(0,f.Jh)(this,function(i){switch(i.label){case 0:return i.trys.push([0,2,,3]),[4,this.readAllMessage()];case 1:return i.sent(),[3,3];case 2:return s=i.sent(),console.error("[noti-firebase] read all message error",s),[3,3];case 3:return[2]}})})},this.subscribeMessage=function(s){var i;if(r.isSupportFirebase()){var o=Jn();ra(o,function(a){var c,u;s("firebase",{body:(c=a.notification)===null||c===void 0?void 0:c.body,title:(u=a.notification)===null||u===void 0?void 0:u.title}),console.info("[noti-firebase] onMessage:",a)})}(i=r._scheduler)===null||i===void 0||i.subscribe(function(){return s("scheduler")})},this.mount=function(s){if(!s){console.error("[noti-firebase] target element is not found.");return}return sa.render(m.createElement(ue.ConfigProvider,(0,f.pi)({},r._uiPrefixCls),m.createElement(is,{$gt:r.$gt,actionConfig:r._actionConfig,onListRefresh:r.getMessageList,onGetUnreadCount:r.getUnreadMessageCount,onMessageRead:r.handleMessageRead,onAllMessageRead:r.handleAllMessageRead,onMessageReceived:r.subscribeMessage})),s)},this.unmount=function(){t._instance=void 0,qt.destroy()},this.manualSwitchScheduler=function(s){return r._schedulerConfig={manualEnable:!0,interval:s},console.info("[noti-firebase] manual switch scheduler"),r.registerScheduler(s)},this._firebaseConfig=n.firebaseConfig,this._subscribe=n.subscribeEvents,this._uiPrefixCls=n.uiPrefixCls,this._schedulerConfig=n.schedulerConfig,this._actionConfig=n.actionConfig,this.register()}t=e;var t;return e._instance=void 0,e.getInstance=function(n){if(!t._instance){if(!n)throw new Error("[noti-firebase] Config is required.");t._instance=new t(n)}return t._instance},e=t=(0,f.gn)([Wc,Jc],e),e}()},Qj0g:(Dr,we,k)=>{k.d(we,{p:()=>ce});var ce={exports:{}}}}]);
