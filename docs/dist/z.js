define(["react","antd"],(function(e,t){return function(){"use strict";var n={161:function(t){t.exports=e},937:function(e){e.exports=t}},r={};function o(e){var t=r[e];if(void 0!==t)return t.exports;var u=r[e]={exports:{}};return n[e](u,u.exports,o),u.exports}o.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return o.d(t,{a:t}),t},o.d=function(e,t){for(var n in t)o.o(t,n)&&!o.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})};var u={};return function(){o.r(u),o.d(u,{X:function(){return h},Z:function(){return v}});var e=o(161),t=o.n(e),n=o(937);function r(e){return r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},r(e)}function i(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function c(e,t,n,r,o,u,i){try{var c=e[u](i),a=c.value}catch(e){return void n(e)}c.done?t(a):Promise.resolve(a).then(r,o)}function a(e){return function(){var t=this,n=arguments;return new Promise((function(r,o){var u=e.apply(t,n);function i(e){c(u,r,o,i,a,"next",e)}function a(e){c(u,r,o,i,a,"throw",e)}i(void 0)}))}}function l(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function f(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function s(e,t){return s=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},s(e,t)}function p(e,t){return!t||"object"!==r(t)&&"function"!=typeof t?d(e):t}function d(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function y(e){return y=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},y(e)}function m(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var h=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&s(e,t)}(h,e);var r,o,u,i,c=(u=h,i=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=y(u);if(i){var n=y(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return p(this,e)});function h(){var e;l(this,h);for(var t=arguments.length,n=new Array(t),r=0;r<t;r++)n[r]=arguments[r];return m(d(e=c.call.apply(c,[this].concat(n))),"unMountZ",void 0),m(d(e),"unMountSwitch",void 0),m(d(e),"state",{zReady:!1,switchReady:!1,hPreloaded:!1}),m(d(e),"onZ",a(regeneratorRuntime.mark((function t(){var n;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:(n=e.props.$render)&&(e.unMountZ=n({name:"z",module:"Z",target:document.querySelector("#z"),onMounted:function(){e.setState({zReady:!0})}}));case 2:case"end":return t.stop()}}),t)})))),m(d(e),"onSwitch",a(regeneratorRuntime.mark((function t(){var n;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:(n=e.props.$render)&&(e.unMountSwitch=n({name:"switch",url:"./lib/switch.js",props:{checked:!0},target:document.querySelector("#switch"),onMounted:function(){e.setState({switchReady:!0})}}));case 2:case"end":return t.stop()}}),t)})))),m(d(e),"onH",a(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.props.$preload(["h"]);case 2:e.setState({hPreloaded:!0});case 3:case"end":return t.stop()}}),t)})))),e}return r=h,(o=[{key:"componentWillUnmount",value:function(){this.unMountZ&&this.unMountZ(),this.unMountSwitch&&this.unMountSwitch()}},{key:"render",value:function(){var e=this.state,r=e.zReady,o=e.switchReady,u=e.hPreloaded;return t().createElement(t().Fragment,null,t().createElement("p",null,"Rendered(Z): ",r?"yes":"no"),t().createElement("p",null,"Rendered(switch): ",o?"yes":"no"),t().createElement("p",null,"Preloaded(H): ",u?"yes":"no"),t().createElement(n.Button,{onClick:this.onZ},"$render(Z)"),t().createElement(n.Button,{onClick:this.onSwitch},"$render(switch)"),t().createElement(n.Button,{onClick:this.onH},"$preload(H)"),t().createElement("div",{id:"z"}),t().createElement("div",{id:"switch"}))}}])&&f(r.prototype,o),h}(e.Component),v=function(r){var o,u,c=(o=(0,e.useState)(!1),u=2,function(e){if(Array.isArray(e))return e}(o)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,o,u=[],i=!0,c=!1;try{for(n=n.call(e);!(i=(r=n.next()).done)&&(u.push(r.value),!t||u.length!==t);i=!0);}catch(e){c=!0,o=e}finally{try{i||null==n.return||n.return()}finally{if(c)throw o}}return u}}(o,u)||function(e,t){if(e){if("string"==typeof e)return i(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?i(e,t):void 0}}(o,u)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),a=c[0],l=c[1];return t().createElement("div",{style:{borderTop:"1px solid #eee",marginTop:10,paddingTop:10}},t().createElement("p",null,"Store: ",r.$store.user.name),t().createElement("p",null,"ComponentLoaded(H): ",a?"yes":"no"),t().createElement(n.Button,{onClick:function(){r.$isComponentLoaded("h")&&l(!0)}},"$isComponentLoaded(H)"))}}(),u}()}));
//# sourceMappingURL=z.js.map