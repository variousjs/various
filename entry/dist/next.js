define("next",["react","nycticorax"],(function(t,e){return function(t){var e={};function n(r){if(e[r])return e[r].exports;var o=e[r]={i:r,l:!1,exports:{}};return t[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}return n.m=t,n.c=e,n.d=function(t,e,r){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)n.d(r,o,function(e){return t[e]}.bind(null,o));return r},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=1)}([function(t,e,n){"use strict";function r(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}n.r(e),n.d(e,"default",(function(){return r}))},function(t,e,n){t.exports=n(2)},function(t,e,n){"use strict";var r=n(3),o=n(5);Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var u=o(n(6)),f=o(n(7)),c=o(n(12)),i=o(n(8)),l=o(n(0)),a=o(n(13)),p=o(n(9)),s=r(n(10)),y=new(o(n(11)).default),d=y.createStore,b=y.connect,m=y.dispatch,v=y.getStore;d({a:1});var O=function(t){function e(){var t,n;(0,u.default)(this,e);for(var r=arguments.length,o=new Array(r),f=0;f<r;f++)o[f]=arguments[f];return n=(0,c.default)(this,(t=(0,i.default)(e)).call.apply(t,[this].concat(o))),(0,p.default)((0,l.default)(n),"onClick",(function(){console.log(n.props.dispatch("next","getA")),console.log(n.props.dispatch("global","getUserName")),n.props.dispatch("next","updateA",6666),n.props.dispatch("global","updateUserName","kcabpmuh")})),n}return(0,a.default)(e,t),(0,f.default)(e,[{key:"render",value:function(){var t=this.props.state.user,e=this.props.a;return s.default.createElement("div",null,s.default.createElement("p",null,t.name),s.default.createElement("p",null,"a: ",e),s.default.createElement("button",{onClick:this.onClick},"click"))}}]),e}(s.Component);(0,p.default)(O,"getA",(function(){return v("a")})),(0,p.default)(O,"updateA",(function(t){m({a:t})}));var S=b("a")(O);e.default=S},function(t,e,n){var r=n(4);function o(){if("function"!=typeof WeakMap)return null;var t=new WeakMap;return o=function(){return t},t}t.exports=function(t){if(t&&t.__esModule)return t;if(null===t||"object"!==r(t)&&"function"!=typeof t)return{default:t};var e=o();if(e&&e.has(t))return e.get(t);var n={},u=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var f in t)if(Object.prototype.hasOwnProperty.call(t,f)){var c=u?Object.getOwnPropertyDescriptor(t,f):null;c&&(c.get||c.set)?Object.defineProperty(n,f,c):n[f]=t[f]}return n.default=t,e&&e.set(t,n),n}},function(t,e){function n(t){return(n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function r(e){return"function"==typeof Symbol&&"symbol"===n(Symbol.iterator)?t.exports=r=function(t){return n(t)}:t.exports=r=function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":n(t)},r(e)}t.exports=r},function(t,e){t.exports=function(t){return t&&t.__esModule?t:{default:t}}},function(t,e,n){"use strict";function r(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}n.r(e),n.d(e,"default",(function(){return r}))},function(t,e,n){"use strict";function r(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function o(t,e,n){return e&&r(t.prototype,e),n&&r(t,n),t}n.r(e),n.d(e,"default",(function(){return o}))},function(t,e,n){"use strict";function r(t){return(r=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}n.r(e),n.d(e,"default",(function(){return r}))},function(t,e,n){"use strict";function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}n.r(e),n.d(e,"default",(function(){return r}))},function(e,n){e.exports=t},function(t,n){t.exports=e},function(t,e,n){"use strict";function r(t){return(r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function o(t){return(o="function"==typeof Symbol&&"symbol"===r(Symbol.iterator)?function(t){return r(t)}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":r(t)})(t)}n.r(e);var u=n(0);function f(t,e){return!e||"object"!==o(e)&&"function"!=typeof e?Object(u.default)(t):e}n.d(e,"default",(function(){return f}))},function(t,e,n){"use strict";function r(t,e){return(r=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function o(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&r(t,e)}n.r(e),n.d(e,"default",(function(){return o}))}]).default}));
//# sourceMappingURL=next.js.map