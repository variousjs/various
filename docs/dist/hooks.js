define("hooks",["react","antd"],((e,t)=>(()=>{"use strict";var r={120:t=>{t.exports=e},297:e=>{e.exports=t}},n={};function o(e){var t=n[e];if(void 0!==t)return t.exports;var a=n[e]={exports:{}};return r[e](a,a.exports,o),a.exports}o.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return o.d(t,{a:t}),t},o.d=(e,t)=>{for(var r in t)o.o(t,r)&&!o.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},o.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t);var a={};return(()=>{o.d(a,{default:()=>l});var e=o(120),t=o.n(e),r=o(297);function n(e,t,r,n,o,a,u){try{var s=e[a](u),l=s.value}catch(e){return void r(e)}s.done?t(l):Promise.resolve(l).then(n,o)}function u(e){return function(){var t=this,r=arguments;return new Promise((function(o,a){var u=e.apply(t,r);function s(e){n(u,o,a,s,l,"next",e)}function l(e){n(u,o,a,s,l,"throw",e)}s(void 0)}))}}var s=n=>{var o=(0,e.useCallback)(u((function*(){yield n.$dispatch("store","updateUserName","updated from hooks"),r.message.success("updated")})),[n]),a=(0,e.useCallback)((()=>{var e=n.$dispatch("hooks","getName");"string"==typeof e&&r.message.info(e)}),[n]);return t().createElement("div",null,t().createElement("h3",null,"Hooks"),t().createElement("p",null,"全局值:",n.$store.user.name),t().createElement("p",null,"mounted:",n.$mounted.join(", ")),t().createElement(r.Button,{onClick:o},"更新全局"),t().createElement(r.Button,{onClick:a},"调用自身方法"))};s.getName=()=>"name";const l=s})(),a.default})()));
//# sourceMappingURL=hooks.js.map