(self["webpackChunk_jupyterlab_application_top"]=self["webpackChunk_jupyterlab_application_top"]||[]).push([[7796],{37796:(e,r,t)=>{"use strict";t.r(r);t.d(r,{main:()=>H});var o=t(82059);var n=t(95171);var l=t(48435);var s=t(69858);var a=t(89131);var i=t(85745);var c=t(63023);var u=t(99093);var f=t(28180);var p=t(2542);var h=t(7920);var d=t(38710);var y=t(21411);var v=t(81554);var b=t(67014);var x=t(77552);var j=t(71821);var m=t(13313);var g=t(23454);var w=t(34802);var C=t(42584);var P=t(54244);var E=t(93814);var S=t(64897);var _=t(72738);var k=t(92121);var O=t(83344);var L=t(11706);var J=t(70987);var A=t(55337);var D=t(32977);var N=t(95528);var T=t(3268);var M=t(99204);var $=t(28566);var B=t(50168);var F=t(52714);var R=t(43162);var I=t(57385);var U=t(65540);var Y=t(1733);var q=t(49857);var z=t(30124);if(Promise.allSettled===undefined){Promise.allSettled=e=>Promise.all(e.map((e=>e.then((e=>({status:"fulfilled",value:e})),(e=>({status:"rejected",reason:e}))))))}async function G(e,r){try{const t=await window._JUPYTERLAB[e].get(r);return t()}catch(t){console.warn(`Failed to create module: package: ${e}; module: ${r}`);throw t}}async function H(){var e=o.PageConfig.getOption("browserTest");if(e.toLowerCase()==="true"){var r=document.createElement("div");r.id="browserTest";document.body.appendChild(r);r.textContent="[]";r.style.display="none";var n=[];var l=false;var s=25e3;var a=function(){if(l){return}l=true;r.className="completed"};window.onerror=function(e,t,o,l,s){n.push(String(s));r.textContent=JSON.stringify(n)};console.error=function(e){n.push(String(e));r.textContent=JSON.stringify(n)}}var i=t(54212).JupyterLab;var c=[];var u=[];var f=[];var p=[];const h=[];const d=[];const y=[];const v=JSON.parse(o.PageConfig.getOption("federated_extensions"));var b=(o.PageConfig.getOption("futureSkipStylesForDisabled")||"").toLowerCase()==="true";const x=[];v.forEach((e=>{if(e.extension){x.push(e.name);h.push(G(e.name,e.extension))}if(e.mimeExtension){x.push(e.name);d.push(G(e.name,e.mimeExtension))}if(e.style&&(!b||!o.PageConfig.Extension.isDisabled(e.name))){y.push(G(e.name,e.style))}}));function*j(e){let r;if(e.hasOwnProperty("__esModule")){r=e.default}else{r=e}let t=Array.isArray(r)?r:[r];for(let n of t){if(o.PageConfig.Extension.isDisabled(n.id)){c.push(n.id);continue}if(o.PageConfig.Extension.isDeferred(n.id)){u.push(n.id);f.push(n.id)}yield n}}const m=[];if(!x.includes("@jupyterlab/javascript-extension")){try{let e=t(90182);for(let r of j(e)){m.push(r)}}catch(S){console.error(S)}}if(!x.includes("@jupyterlab/json-extension")){try{let e=t(55950);for(let r of j(e)){m.push(r)}}catch(S){console.error(S)}}if(!x.includes("@jupyterlab/pdf-extension")){try{let e=t(84604);for(let r of j(e)){m.push(r)}}catch(S){console.error(S)}}if(!x.includes("@jupyterlab/vega5-extension")){try{let e=t(79238);for(let r of j(e)){m.push(r)}}catch(S){console.error(S)}}const g=await Promise.allSettled(d);g.forEach((e=>{if(e.status==="fulfilled"){for(let r of j(e.value)){m.push(r)}}else{console.error(e.reason)}}));if(!x.includes("@jupyterlab/application-extension")){try{let e=t(99961);for(let r of j(e)){p.push(r)}}catch(S){console.error(S)}}if(!x.includes("@jupyterlab/apputils-extension")){try{let e=t(52252);for(let r of j(e)){p.push(r)}}catch(S){console.error(S)}}if(!x.includes("@jupyterlab/cell-toolbar-extension")){try{let e=t(33364);for(let r of j(e)){p.push(r)}}catch(S){console.error(S)}}if(!x.includes("@jupyterlab/celltags-extension")){try{let e=t(45830);for(let r of j(e)){p.push(r)}}catch(S){console.error(S)}}if(!x.includes("@jupyterlab/codemirror-extension")){try{let e=t(98823);for(let r of j(e)){p.push(r)}}catch(S){console.error(S)}}if(!x.includes("@jupyterlab/collaboration-extension")){try{let e=t(97605);for(let r of j(e)){p.push(r)}}catch(S){console.error(S)}}if(!x.includes("@jupyterlab/completer-extension")){try{let e=t(51458);for(let r of j(e)){p.push(r)}}catch(S){console.error(S)}}if(!x.includes("@jupyterlab/console-extension")){try{let e=t(41225);for(let r of j(e)){p.push(r)}}catch(S){console.error(S)}}if(!x.includes("@jupyterlab/csvviewer-extension")){try{let e=t(54162);for(let r of j(e)){p.push(r)}}catch(S){console.error(S)}}if(!x.includes("@jupyterlab/debugger-extension")){try{let e=t(13804);for(let r of j(e)){p.push(r)}}catch(S){console.error(S)}}if(!x.includes("@jupyterlab/docmanager-extension")){try{let e=t(13764);for(let r of j(e)){p.push(r)}}catch(S){console.error(S)}}if(!x.includes("@jupyterlab/docprovider-extension")){try{let e=t(92401);for(let r of j(e)){p.push(r)}}catch(S){console.error(S)}}if(!x.includes("@jupyterlab/documentsearch-extension")){try{let e=t(73237);for(let r of j(e)){p.push(r)}}catch(S){console.error(S)}}if(!x.includes("@jupyterlab/extensionmanager-extension")){try{let e=t(29455);for(let r of j(e)){p.push(r)}}catch(S){console.error(S)}}if(!x.includes("@jupyterlab/filebrowser-extension")){try{let e=t(53720);for(let r of j(e)){p.push(r)}}catch(S){console.error(S)}}if(!x.includes("@jupyterlab/fileeditor-extension")){try{let e=t(72226);for(let r of j(e)){p.push(r)}}catch(S){console.error(S)}}if(!x.includes("@jupyterlab/help-extension")){try{let e=t(90439);for(let r of j(e)){p.push(r)}}catch(S){console.error(S)}}if(!x.includes("@jupyterlab/htmlviewer-extension")){try{let e=t(33526);for(let r of j(e)){p.push(r)}}catch(S){console.error(S)}}if(!x.includes("@jupyterlab/hub-extension")){try{let e=t(70051);for(let r of j(e)){p.push(r)}}catch(S){console.error(S)}}if(!x.includes("@jupyterlab/imageviewer-extension")){try{let e=t(8469);for(let r of j(e)){p.push(r)}}catch(S){console.error(S)}}if(!x.includes("@jupyterlab/inspector-extension")){try{let e=t(1211);for(let r of j(e)){p.push(r)}}catch(S){console.error(S)}}if(!x.includes("@jupyterlab/launcher-extension")){try{let e=t(53403);for(let r of j(e)){p.push(r)}}catch(S){console.error(S)}}if(!x.includes("@jupyterlab/logconsole-extension")){try{let e=t(61546);for(let r of j(e)){p.push(r)}}catch(S){console.error(S)}}if(!x.includes("@jupyterlab/mainmenu-extension")){try{let e=t(53859);for(let r of j(e)){p.push(r)}}catch(S){console.error(S)}}if(!x.includes("@jupyterlab/markdownviewer-extension")){try{let e=t(22647);for(let r of j(e)){p.push(r)}}catch(S){console.error(S)}}if(!x.includes("@jupyterlab/mathjax2-extension")){try{let e=t(81193);for(let r of j(e)){p.push(r)}}catch(S){console.error(S)}}if(!x.includes("@jupyterlab/notebook-extension")){try{let e=t(75549);for(let r of j(e)){p.push(r)}}catch(S){console.error(S)}}if(!x.includes("@jupyterlab/rendermime-extension")){try{let e=t(70411);for(let r of j(e)){p.push(r)}}catch(S){console.error(S)}}if(!x.includes("@jupyterlab/running-extension")){try{let e=t(43399);for(let r of j(e)){p.push(r)}}catch(S){console.error(S)}}if(!x.includes("@jupyterlab/settingeditor-extension")){try{let e=t(68835);for(let r of j(e)){p.push(r)}}catch(S){console.error(S)}}if(!x.includes("@jupyterlab/shortcuts-extension")){try{let e=t(90702);for(let r of j(e)){p.push(r)}}catch(S){console.error(S)}}if(!x.includes("@jupyterlab/statusbar-extension")){try{let e=t(93038);for(let r of j(e)){p.push(r)}}catch(S){console.error(S)}}if(!x.includes("@jupyterlab/terminal-extension")){try{let e=t(7222);for(let r of j(e)){p.push(r)}}catch(S){console.error(S)}}if(!x.includes("@jupyterlab/theme-dark-extension")){try{let e=t(26304);for(let r of j(e)){p.push(r)}}catch(S){console.error(S)}}if(!x.includes("@jupyterlab/theme-light-extension")){try{let e=t(54194);for(let r of j(e)){p.push(r)}}catch(S){console.error(S)}}if(!x.includes("@jupyterlab/toc-extension")){try{let e=t(50008);for(let r of j(e)){p.push(r)}}catch(S){console.error(S)}}if(!x.includes("@jupyterlab/tooltip-extension")){try{let e=t(11889);for(let r of j(e)){p.push(r)}}catch(S){console.error(S)}}if(!x.includes("@jupyterlab/translation-extension")){try{let e=t(3519);for(let r of j(e)){p.push(r)}}catch(S){console.error(S)}}if(!x.includes("@jupyterlab/ui-components-extension")){try{let e=t(18422);for(let r of j(e)){p.push(r)}}catch(S){console.error(S)}}if(!x.includes("@jupyterlab/vdom-extension")){try{let e=t(48748);for(let r of j(e)){p.push(r)}}catch(S){console.error(S)}}const w=await Promise.allSettled(h);w.forEach((e=>{if(e.status==="fulfilled"){for(let r of j(e.value)){p.push(r)}}else{console.error(e.reason)}}));(await Promise.allSettled(y)).filter((({status:e})=>e==="rejected")).forEach((({reason:e})=>{console.error(e)}));const C=new i({mimeExtensions:m,disabled:{matches:c,patterns:o.PageConfig.Extension.disabled.map((function(e){return e.raw}))},deferred:{matches:u,patterns:o.PageConfig.Extension.deferred.map((function(e){return e.raw}))}});p.forEach((function(e){C.registerPluginModule(e)}));C.start({ignorePlugins:f});var P=(o.PageConfig.getOption("exposeAppInBrowser")||"").toLowerCase()==="true";var E=(o.PageConfig.getOption("devMode")||"").toLowerCase()==="true";if(P||E){window.jupyterlab=C;window.jupyterapp=C}if(e.toLowerCase()==="true"){C.restored.then((function(){a(n)})).catch((function(e){a([`RestoreError: ${e.message}`])}));window.setTimeout((function(){a(n)}),s)}}}}]);
//# sourceMappingURL=7796.32edf207b21018343eea.js.map?v=32edf207b21018343eea