define("a",["react","antd","nycticorax"],(function(t,e,n){return function(t){var e={};function n(r){if(e[r])return e[r].exports;var o=e[r]={i:r,l:!1,exports:{}};return t[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}return n.m=t,n.c=e,n.d=function(t,e,r){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)n.d(r,o,function(e){return t[e]}.bind(null,o));return r},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=1)}([function(t,e,n){"use strict";function r(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}n.r(e),n.d(e,"default",(function(){return r}))},function(t,e,n){"use strict";var r=n(2),o=n(4);Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var u=o(n(5)),c=o(n(6)),f=o(n(7)),a=o(n(0)),i=o(n(13)),l=o(n(14)),s=o(n(8)),p=o(n(9)),d=r(n(10)),y=n(11);function b(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,r=(0,s.default)(t);if(e){var o=(0,s.default)(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return(0,l.default)(this,n)}}var m=new(o(n(12)).default),v=m.createStore,h=m.connect,g=m.dispatch,O=m.getStore;v({a:"9"});var x=function(t){(0,i.default)(n,t);var e=b(n);function n(){var t;(0,c.default)(this,n);for(var r=arguments.length,o=new Array(r),f=0;f<r;f++)o[f]=arguments[f];return t=e.call.apply(e,[this].concat(o)),(0,p.default)((0,a.default)(t),"onGetB",(function(){y.message.info(t.props.$dispatch("b","getValue"))})),(0,p.default)((0,a.default)(t),"onSetB",(function(){t.props.$dispatch("b","updateValue",Math.random().toFixed(2))})),(0,p.default)((0,a.default)(t),"onSetG",(0,u.default)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.props.$dispatch("global","updateUserName",Math.random());case 2:y.message.success("更新完成");case 3:case"end":return e.stop()}}),e)})))),t}return(0,f.default)(n,[{key:"render",value:function(){var t=this.props.$store.user,e=this.props,n=e.a,r=e.$mounted,o=e.name;return d.default.createElement("div",null,d.default.createElement("p",{style:{fontSize:100}},o.toUpperCase()),d.default.createElement("div",{style:{display:"flex",flexDirection:"column"}},d.default.createElement("p",null,"全局值：",t.name),d.default.createElement("p",null,"组件值:",n),d.default.createElement("p",null,"B 组件加载完成：",r.includes("b")?"yes":"no"),d.default.createElement(y.Button,{onClick:this.onGetB},"获取 B 组件的值"),d.default.createElement(y.Button,{onClick:this.onSetB},"更新 B 组件的值"),d.default.createElement(y.Button,{onClick:this.onSetG},"更新全局值(异步)"),d.default.createElement(y.ConfigProvider,{locale:y.locales.zh_CN},d.default.createElement(y.DatePicker,null))))}}]),n}(d.Component);(0,p.default)(x,"getValue",(function(){return O().a})),(0,p.default)(x,"updateValue",function(){var t=(0,u.default)(regeneratorRuntime.mark((function t(e){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,new Promise((function(t){return setTimeout(t,1e3)}));case 2:g({a:e},!0);case 3:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}());var S=h("a")(x);e.default=S},function(t,e,n){var r=n(3);function o(){if("function"!=typeof WeakMap)return null;var t=new WeakMap;return o=function(){return t},t}t.exports=function(t){if(t&&t.__esModule)return t;if(null===t||"object"!==r(t)&&"function"!=typeof t)return{default:t};var e=o();if(e&&e.has(t))return e.get(t);var n={},u=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var c in t)if(Object.prototype.hasOwnProperty.call(t,c)){var f=u?Object.getOwnPropertyDescriptor(t,c):null;f&&(f.get||f.set)?Object.defineProperty(n,c,f):n[c]=t[c]}return n.default=t,e&&e.set(t,n),n}},function(t,e){function n(e){return"function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?t.exports=n=function(t){return typeof t}:t.exports=n=function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},n(e)}t.exports=n},function(t,e){t.exports=function(t){return t&&t.__esModule?t:{default:t}}},function(t,e,n){"use strict";function r(t,e,n,r,o,u,c){try{var f=t[u](c),a=f.value}catch(t){return void n(t)}f.done?e(a):Promise.resolve(a).then(r,o)}function o(t){return function(){var e=this,n=arguments;return new Promise((function(o,u){var c=t.apply(e,n);function f(t){r(c,o,u,f,a,"next",t)}function a(t){r(c,o,u,f,a,"throw",t)}f(void 0)}))}}n.r(e),n.d(e,"default",(function(){return o}))},function(t,e,n){"use strict";function r(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}n.r(e),n.d(e,"default",(function(){return r}))},function(t,e,n){"use strict";function r(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function o(t,e,n){return e&&r(t.prototype,e),n&&r(t,n),t}n.r(e),n.d(e,"default",(function(){return o}))},function(t,e,n){"use strict";function r(t){return(r=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}n.r(e),n.d(e,"default",(function(){return r}))},function(t,e,n){"use strict";function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}n.r(e),n.d(e,"default",(function(){return r}))},function(e,n){e.exports=t},function(t,n){t.exports=e},function(t,e){t.exports=n},function(t,e,n){"use strict";function r(t,e){return(r=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function o(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&r(t,e)}n.r(e),n.d(e,"default",(function(){return o}))},function(t,e,n){"use strict";function r(t){return(r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}n.r(e),n.d(e,"default",(function(){return u}));var o=n(0);function u(t,e){return!e||"object"!==r(e)&&"function"!=typeof e?Object(o.default)(t):e}}]).default}));
//# sourceMappingURL=a.js.map