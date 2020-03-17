define("a",["react","antd","nycticorax"],(function(e,t,n){return function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}return n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=1)}([function(e,t,n){"use strict";function r(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}n.r(t),n.d(t,"default",(function(){return r}))},function(e,t,n){"use strict";var r=n(2),o=n(4);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var u=o(n(5)),a=o(n(6)),f=o(n(7)),i=o(n(13)),c=o(n(8)),l=o(n(0)),s=o(n(14)),p=o(n(9)),d=r(n(10)),y=n(11),b=new(o(n(12)).default),m=b.createStore,v=b.connect,h=b.dispatch,O=b.getStore;m({a:"9"});var g=function(e){function t(){var e,n;(0,a.default)(this,t);for(var r=arguments.length,o=new Array(r),f=0;f<r;f++)o[f]=arguments[f];return n=(0,i.default)(this,(e=(0,c.default)(t)).call.apply(e,[this].concat(o))),(0,p.default)((0,l.default)(n),"state",{componentB:!1}),(0,p.default)((0,l.default)(n),"onGetB",(function(){y.message.info(n.props.dispatch("b","getValue"))})),(0,p.default)((0,l.default)(n),"onSetB",(function(){n.props.dispatch("b","updateValue",Math.random().toFixed(2))})),(0,p.default)((0,l.default)(n),"onSetG",(0,u.default)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,n.props.dispatch("global","updateUserName",Math.random());case 2:y.message.success("更新完成");case 3:case"end":return e.stop()}}),e)})))),n}return(0,s.default)(t,e),(0,f.default)(t,[{key:"render",value:function(){console.log(this.props);var e=this.props.store.user,t=this.props.a,n=this.state.componentB;return d.default.createElement("div",null,d.default.createElement("p",{style:{fontSize:100}},"A"),d.default.createElement("div",{style:{display:"flex",flexDirection:"column"}},d.default.createElement("p",null,"全局值：",e.name),d.default.createElement("p",null,"组件值: ",t),d.default.createElement("p",null,"B 组件加载完成：",n?"yes":"no"),d.default.createElement(y.Button,{onClick:this.onGetB},"获取 B 组件的值"),d.default.createElement(y.Button,{onClick:this.onSetB},"更新 B 组件的值"),d.default.createElement(y.Button,{onClick:this.onSetG},"更新全局值(异步)"),d.default.createElement(y.ConfigProvider,{locale:y.locales.zh_CN},d.default.createElement(y.DatePicker,null))))}}],[{key:"getDerivedStateFromProps",value:function(e){return e.MOUNTED_COMPONENTS.includes("b")?{componentB:!0}:null}}]),t}(d.Component);(0,p.default)(g,"getValue",(function(){return O().a})),(0,p.default)(g,"updateValue",function(){var e=(0,u.default)(regeneratorRuntime.mark((function e(t){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,new Promise((function(e){return setTimeout(e,1e3)}));case 2:h({a:t},!0);case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}());var S=v("a")(g);t.default=S},function(e,t,n){var r=n(3);function o(){if("function"!=typeof WeakMap)return null;var e=new WeakMap;return o=function(){return e},e}e.exports=function(e){if(e&&e.__esModule)return e;if(null===e||"object"!==r(e)&&"function"!=typeof e)return{default:e};var t=o();if(t&&t.has(e))return t.get(e);var n={},u=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var a in e)if(Object.prototype.hasOwnProperty.call(e,a)){var f=u?Object.getOwnPropertyDescriptor(e,a):null;f&&(f.get||f.set)?Object.defineProperty(n,a,f):n[a]=e[a]}return n.default=e,t&&t.set(e,n),n}},function(e,t){function n(t){return"function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?e.exports=n=function(e){return typeof e}:e.exports=n=function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},n(t)}e.exports=n},function(e,t){e.exports=function(e){return e&&e.__esModule?e:{default:e}}},function(e,t,n){"use strict";function r(e,t,n,r,o,u,a){try{var f=e[u](a),i=f.value}catch(e){return void n(e)}f.done?t(i):Promise.resolve(i).then(r,o)}function o(e){return function(){var t=this,n=arguments;return new Promise((function(o,u){var a=e.apply(t,n);function f(e){r(a,o,u,f,i,"next",e)}function i(e){r(a,o,u,f,i,"throw",e)}f(void 0)}))}}n.r(t),n.d(t,"default",(function(){return o}))},function(e,t,n){"use strict";function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}n.r(t),n.d(t,"default",(function(){return r}))},function(e,t,n){"use strict";function r(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function o(e,t,n){return t&&r(e.prototype,t),n&&r(e,n),e}n.r(t),n.d(t,"default",(function(){return o}))},function(e,t,n){"use strict";function r(e){return(r=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}n.r(t),n.d(t,"default",(function(){return r}))},function(e,t,n){"use strict";function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}n.r(t),n.d(t,"default",(function(){return r}))},function(t,n){t.exports=e},function(e,n){e.exports=t},function(e,t){e.exports=n},function(e,t,n){"use strict";function r(e){return(r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}n.r(t),n.d(t,"default",(function(){return u}));var o=n(0);function u(e,t){return!t||"object"!==r(t)&&"function"!=typeof t?Object(o.default)(e):t}},function(e,t,n){"use strict";function r(e,t){return(r=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function o(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&r(e,t)}n.r(t),n.d(t,"default",(function(){return o}))}]).default}));
//# sourceMappingURL=a.js.map