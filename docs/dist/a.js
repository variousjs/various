define("a",["react","antd","nycticorax"],(function(e,t,n){return function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}return n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=0)}([function(e,t,n){e.exports=n(1)},function(e,t,n){"use strict";var r=n(2),o=n(4);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var u=o(n(5)),i=o(n(6)),l=r(n(7)),a=n(8),c=o(n(9)),{createStore:f,connect:s,dispatch:p,getStore:d}=new c.default;f({a:"9"});class y extends l.Component{constructor(){var e;super(...arguments),e=this,(0,i.default)(this,"state",{componentB:!1}),(0,i.default)(this,"onGetB",()=>{a.message.info(this.props.dispatch("b","getValue"))}),(0,i.default)(this,"onSetB",()=>{this.props.dispatch("b","updateValue",Math.random().toFixed(2))}),(0,i.default)(this,"onSetG",(0,u.default)((function*(){yield e.props.dispatch("global","updateUserName",Math.random()),a.message.success("更新完成")})))}static getDerivedStateFromProps(e){return e.store.LOADED_COMPONENTS.includes("b")?{componentB:!0}:null}render(){var{user:e}=this.props.store,{a:t}=this.props,{componentB:n}=this.state;return l.default.createElement("div",null,l.default.createElement("p",{style:{fontSize:100}},"A"),l.default.createElement("div",{style:{display:"flex",flexDirection:"column"}},l.default.createElement("p",null,"全局值：",e.name),l.default.createElement("p",null,"组件值: ",t),l.default.createElement("p",null,"B 组件加载完成：",n?"yes":"no"),l.default.createElement(a.Button,{onClick:this.onGetB},"获取 B 组件的值"),l.default.createElement(a.Button,{onClick:this.onSetB},"更新 B 组件的值"),l.default.createElement(a.Button,{onClick:this.onSetG},"更新全局值(异步)"),l.default.createElement(a.ConfigProvider,{locale:a.locales.zh_CN},l.default.createElement(a.DatePicker,null))))}}(0,i.default)(y,"getValue",()=>d().a),(0,i.default)(y,"updateValue",function(){var e=(0,u.default)((function*(e){yield new Promise(e=>setTimeout(e,1e3)),p({a:e},!0)}));return function(t){return e.apply(this,arguments)}}());var m=s("a")(y);t.default=m},function(e,t,n){var r=n(3);function o(){if("function"!=typeof WeakMap)return null;var e=new WeakMap;return o=function(){return e},e}e.exports=function(e){if(e&&e.__esModule)return e;if(null===e||"object"!==r(e)&&"function"!=typeof e)return{default:e};var t=o();if(t&&t.has(e))return t.get(e);var n={},u=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var i in e)if(Object.prototype.hasOwnProperty.call(e,i)){var l=u?Object.getOwnPropertyDescriptor(e,i):null;l&&(l.get||l.set)?Object.defineProperty(n,i,l):n[i]=e[i]}return n.default=e,t&&t.set(e,n),n}},function(e,t){function n(e){return(n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function r(t){return"function"==typeof Symbol&&"symbol"===n(Symbol.iterator)?e.exports=r=function(e){return n(e)}:e.exports=r=function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":n(e)},r(t)}e.exports=r},function(e,t){e.exports=function(e){return e&&e.__esModule?e:{default:e}}},function(e,t,n){"use strict";function r(e,t,n,r,o,u,i){try{var l=e[u](i),a=l.value}catch(e){return void n(e)}l.done?t(a):Promise.resolve(a).then(r,o)}function o(e){return function(){var t=this,n=arguments;return new Promise((function(o,u){var i=e.apply(t,n);function l(e){r(i,o,u,l,a,"next",e)}function a(e){r(i,o,u,l,a,"throw",e)}l(void 0)}))}}n.r(t),n.d(t,"default",(function(){return o}))},function(e,t,n){"use strict";function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}n.r(t),n.d(t,"default",(function(){return r}))},function(t,n){t.exports=e},function(e,n){e.exports=t},function(e,t){e.exports=n}]).default}));
//# sourceMappingURL=a.js.map