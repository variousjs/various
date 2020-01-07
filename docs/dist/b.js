define("b",["react","antd","nycticorax"],(function(t,e,n){return function(t){var e={};function n(r){if(e[r])return e[r].exports;var o=e[r]={i:r,l:!1,exports:{}};return t[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}return n.m=t,n.c=e,n.d=function(t,e,r){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)n.d(r,o,function(e){return t[e]}.bind(null,o));return r},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=1)}([function(t,e,n){"use strict";function r(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}n.r(e),n.d(e,"default",(function(){return r}))},function(t,e,n){t.exports=n(2)},function(t,e,n){"use strict";var r=n(3),o=n(4);Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var u=o(n(5)),i=o(n(6)),f=o(n(7)),c=o(n(13)),a=o(n(8)),l=o(n(0)),s=o(n(14)),p=o(n(9)),d=r(n(10)),y=n(11),b=new(o(n(12)).default),m=b.createStore,v=b.connect,h=b.dispatch,O=b.getStore;m({b:"666"});var g=function(t){function e(){var t,n;(0,i.default)(this,e);for(var r=arguments.length,o=new Array(r),f=0;f<r;f++)o[f]=arguments[f];return n=(0,c.default)(this,(t=(0,a.default)(e)).call.apply(t,[this].concat(o))),(0,p.default)((0,l.default)(n),"onGetA",(function(){try{y.message.info(n.props.dispatch("a","getValue"))}catch(t){console.log(t),y.message.error(t)}})),(0,p.default)((0,l.default)(n),"onSetA",(0,u.default)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,n.props.dispatch("a","updateValue",Math.random().toFixed(2));case 2:n.onGetA();case 3:case"end":return t.stop()}}),t)})))),(0,p.default)((0,l.default)(n),"onSetG",(function(){n.props.dispatch("global","setNumber",Math.random().toFixed(2))})),n}return(0,s.default)(e,t),(0,f.default)(e,[{key:"render",value:function(){var t=this.props.store.number,e=this.props,n=e.b,r=e.match;return d.default.createElement("div",null,d.default.createElement("p",{style:{fontSize:100}},"B"),d.default.createElement("div",{style:{display:"flex",flexDirection:"column"}},d.default.createElement("p",null,"全局值：",t),d.default.createElement("p",null,"组件值: ",n),d.default.createElement("p",null,"当前路由参数：",r.params.id||"空"),d.default.createElement(y.Button,{onClick:this.onGetA},"获取 A 组件的值"),d.default.createElement(y.Button,{onClick:this.onSetA},"更新 A 组件的值"),d.default.createElement(y.Button,{onClick:this.onSetG},"更新全局值")))}}]),e}(d.Component);(0,p.default)(g,"getValue",(function(){return O().b})),(0,p.default)(g,"updateValue",(function(t){h({b:t})}));var S=v("b")(g);e.default=S},function(t,e){function n(){if("function"!=typeof WeakMap)return null;var t=new WeakMap;return n=function(){return t},t}t.exports=function(t){if(t&&t.__esModule)return t;var e=n();if(e&&e.has(t))return e.get(t);var r={};if(null!=t){var o=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var u in t)if(Object.prototype.hasOwnProperty.call(t,u)){var i=o?Object.getOwnPropertyDescriptor(t,u):null;i&&(i.get||i.set)?Object.defineProperty(r,u,i):r[u]=t[u]}}return r.default=t,e&&e.set(t,r),r}},function(t,e){t.exports=function(t){return t&&t.__esModule?t:{default:t}}},function(t,e,n){"use strict";function r(t,e,n,r,o,u,i){try{var f=t[u](i),c=f.value}catch(t){return void n(t)}f.done?e(c):Promise.resolve(c).then(r,o)}function o(t){return function(){var e=this,n=arguments;return new Promise((function(o,u){var i=t.apply(e,n);function f(t){r(i,o,u,f,c,"next",t)}function c(t){r(i,o,u,f,c,"throw",t)}f(void 0)}))}}n.r(e),n.d(e,"default",(function(){return o}))},function(t,e,n){"use strict";function r(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}n.r(e),n.d(e,"default",(function(){return r}))},function(t,e,n){"use strict";function r(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function o(t,e,n){return e&&r(t.prototype,e),n&&r(t,n),t}n.r(e),n.d(e,"default",(function(){return o}))},function(t,e,n){"use strict";function r(t){return(r=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}n.r(e),n.d(e,"default",(function(){return r}))},function(t,e,n){"use strict";function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}n.r(e),n.d(e,"default",(function(){return r}))},function(e,n){e.exports=t},function(t,n){t.exports=e},function(t,e){t.exports=n},function(t,e,n){"use strict";function r(t){return(r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function o(t){return(o="function"==typeof Symbol&&"symbol"===r(Symbol.iterator)?function(t){return r(t)}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":r(t)})(t)}n.r(e);var u=n(0);function i(t,e){return!e||"object"!==o(e)&&"function"!=typeof e?Object(u.default)(t):e}n.d(e,"default",(function(){return i}))},function(t,e,n){"use strict";function r(t,e){return(r=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function o(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&r(t,e)}n.r(e),n.d(e,"default",(function(){return o}))}]).default}));
//# sourceMappingURL=b.js.map