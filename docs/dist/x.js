define(["react","antd","moment"],(function(e,t,n){return function(){"use strict";var r={161:function(t){t.exports=e},937:function(e){e.exports=t},84:function(e){e.exports=n}},o={};function u(e){var t=o[e];if(void 0!==t)return t.exports;var n=o[e]={exports:{}};return r[e](n,n.exports,u),n.exports}u.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return u.d(t,{a:t}),t},u.d=function(e,t){for(var n in t)u.o(t,n)&&!u.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},u.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},u.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})};var a={};return function(){u.r(a);var e=u(161),t=u.n(e),n=u(937),r=u(84),o=u.n(r);function i(e,t,n,r,o,u,a){try{var i=e[u](a),c=i.value}catch(e){return void n(e)}i.done?t(c):Promise.resolve(c).then(r,o)}function c(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}a.default=function(r){var u,a,l=(u=(0,e.useState)([]),a=2,function(e){if(Array.isArray(e))return e}(u)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,o,u=[],a=!0,i=!1;try{for(n=n.call(e);!(a=(r=n.next()).done)&&(u.push(r.value),!t||u.length!==t);a=!0);}catch(e){i=!0,o=e}finally{try{a||null==n.return||n.return()}finally{if(i)throw o}}return u}}(u,a)||function(e,t){if(e){if("string"==typeof e)return c(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?c(e,t):void 0}}(u,a)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),f=l[0],s=l[1],p=function(){var e,t=(e=regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,r.$dispatch("store","updateUserName","X");case 2:case"end":return e.stop()}}),e)})),function(){var t=this,n=arguments;return new Promise((function(r,o){var u=e.apply(t,n);function a(e){i(u,r,o,a,c,"next",e)}function c(e){i(u,r,o,a,c,"throw",e)}a(void 0)}))});return function(){return t.apply(this,arguments)}}();return t().createElement(t().Fragment,null,t().createElement("p",null,"Store: ",r.$store.user.name),t().createElement("p",null,"MountedComponents: ",t().createElement("span",{id:"mounted-components"},f.sort().join())),t().createElement(n.Button,{onClick:function(){var e=r.$getMountedComponents();s(e)}},"$getMountedComponents"),t().createElement(n.Button,{id:"x-dispatch-global",onClick:p},"$dispatch(global)"),t().createElement(n.Button,{id:"x-message",onClick:function(){r.$postMessage("X")}},"$postMessage"),t().createElement(n.DatePicker,{id:"date-picker",defaultValue:o()("2022-02-15"),format:"MMMM Do YYYY"}))}}(),a}()}));
//# sourceMappingURL=x.js.map