define("a",["react","antd","nycticorax"],(function(e,t,n){return function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}return n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=1)}([function(e,t,n){"use strict";function r(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}n.r(t),n.d(t,"default",(function(){return r}))},function(e,t,n){e.exports=n(2)},function(e,t,n){"use strict";var r=n(3),o=n(4);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var u=o(n(5)),a=o(n(6)),i=o(n(7)),c=o(n(13)),f=o(n(8)),l=o(n(0)),s=o(n(14)),p=o(n(9)),d=r(n(10)),y=n(11),b=new(o(n(12)).default),m=b.createStore,v=b.connect,h=b.dispatch,O=b.getStore;m({a:"9"});var g=function(e){function t(){var e,n;(0,a.default)(this,t);for(var r=arguments.length,o=new Array(r),i=0;i<r;i++)o[i]=arguments[i];return n=(0,c.default)(this,(e=(0,f.default)(t)).call.apply(e,[this].concat(o))),(0,p.default)((0,l.default)(n),"state",{componentB:!1}),(0,p.default)((0,l.default)(n),"onGetB",(function(){y.message.info(n.props.dispatch("b","getValue"))})),(0,p.default)((0,l.default)(n),"onSetB",(function(){n.props.dispatch("b","updateValue",Math.random().toFixed(2))})),(0,p.default)((0,l.default)(n),"onSetG",(0,u.default)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,n.props.dispatch("global","updateUserName",Math.random());case 2:y.message.success("更新完成");case 3:case"end":return e.stop()}}),e)})))),n}return(0,s.default)(t,e),(0,i.default)(t,[{key:"render",value:function(){var e=this.props.store.user,t=this.props.a,n=this.state.componentB;return d.default.createElement("div",null,d.default.createElement("p",{style:{fontSize:100}},"A"),d.default.createElement("div",{style:{display:"flex",flexDirection:"column"}},d.default.createElement("p",null,"全局值：",e.name),d.default.createElement("p",null,"组件值: ",t),d.default.createElement("p",null,"B 组件加载完成：",n?"yes":"no"),d.default.createElement(y.Button,{onClick:this.onGetB},"获取 B 组件的值"),d.default.createElement(y.Button,{onClick:this.onSetB},"更新 B 组件的值"),d.default.createElement(y.Button,{onClick:this.onSetG},"更新全局值(异步)"),d.default.createElement(y.ConfigProvider,{locale:y.locales.zh_CN},d.default.createElement(y.DatePicker,null))))}}],[{key:"getDerivedStateFromProps",value:function(e){return e.MOUNTED_COMPONENTS.includes("b")?{componentB:!0}:null}}]),t}(d.Component);(0,p.default)(g,"getValue",(function(){return O().a})),(0,p.default)(g,"updateValue",function(){var e=(0,u.default)(regeneratorRuntime.mark((function e(t){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,new Promise((function(e){return setTimeout(e,1e3)}));case 2:h({a:t},!0);case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}());var S=v("a")(g);t.default=S},function(e,t){function n(){if("function"!=typeof WeakMap)return null;var e=new WeakMap;return n=function(){return e},e}e.exports=function(e){if(e&&e.__esModule)return e;var t=n();if(t&&t.has(e))return t.get(e);var r={};if(null!=e){var o=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var u in e)if(Object.prototype.hasOwnProperty.call(e,u)){var a=o?Object.getOwnPropertyDescriptor(e,u):null;a&&(a.get||a.set)?Object.defineProperty(r,u,a):r[u]=e[u]}}return r.default=e,t&&t.set(e,r),r}},function(e,t){e.exports=function(e){return e&&e.__esModule?e:{default:e}}},function(e,t,n){"use strict";function r(e,t,n,r,o,u,a){try{var i=e[u](a),c=i.value}catch(e){return void n(e)}i.done?t(c):Promise.resolve(c).then(r,o)}function o(e){return function(){var t=this,n=arguments;return new Promise((function(o,u){var a=e.apply(t,n);function i(e){r(a,o,u,i,c,"next",e)}function c(e){r(a,o,u,i,c,"throw",e)}i(void 0)}))}}n.r(t),n.d(t,"default",(function(){return o}))},function(e,t,n){"use strict";function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}n.r(t),n.d(t,"default",(function(){return r}))},function(e,t,n){"use strict";function r(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function o(e,t,n){return t&&r(e.prototype,t),n&&r(e,n),e}n.r(t),n.d(t,"default",(function(){return o}))},function(e,t,n){"use strict";function r(e){return(r=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}n.r(t),n.d(t,"default",(function(){return r}))},function(e,t,n){"use strict";function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}n.r(t),n.d(t,"default",(function(){return r}))},function(t,n){t.exports=e},function(e,n){e.exports=t},function(e,t){e.exports=n},function(e,t,n){"use strict";function r(e){return(r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function o(e){return(o="function"==typeof Symbol&&"symbol"===r(Symbol.iterator)?function(e){return r(e)}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":r(e)})(e)}n.r(t);var u=n(0);function a(e,t){return!t||"object"!==o(t)&&"function"!=typeof t?Object(u.default)(e):t}n.d(t,"default",(function(){return a}))},function(e,t,n){"use strict";function r(e,t){return(r=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function o(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&r(e,t)}n.r(t),n.d(t,"default",(function(){return o}))}]).default}));
//# sourceMappingURL=a.js.map