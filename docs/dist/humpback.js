define("humpback",["react","react-router-dom","react-dom","nycticorax"],(function(e,t,r,n){return function(e){var t={};function r(n){if(t[n])return t[n].exports;var o=t[n]={i:n,l:!1,exports:{}};return e[n].call(o.exports,o,o.exports,r),o.l=!0,o.exports}return r.m=e,r.c=t,r.d=function(e,t,n){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)r.d(n,o,function(t){return e[t]}.bind(null,o));return n},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="",r(r.s=18)}([function(e,t){e.exports=function(e){return e&&e.__esModule?e:{default:e}}},function(e,t,r){"use strict";function n(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}r.r(t),r.d(t,"default",(function(){return n}))},function(t,r){t.exports=e},function(e,t,r){"use strict";var n=r(0);Object.defineProperty(t,"__esModule",{value:!0}),t.Container=t.Error=t.Loading=t.MOUNTED_COMPONENTS=t.IGNORE_STATIC_METHODS=void 0;var o=n(r(2));t.IGNORE_STATIC_METHODS=["name","prototype","length","propTypes","defaultProps","getDerivedStateFromProps"];t.MOUNTED_COMPONENTS="MOUNTED_COMPONENTS";t.Loading=function(){return o.default.createElement("h3",null,"Loading")};t.Error=function(e){var t=e.error,r=e.reload;return(o.default.createElement(o.default.Fragment,null,o.default.createElement("h3",null,t),r?o.default.createElement("button",{onClick:r},"reload"):null))};t.Container=function(){return o.default.createElement("h3",null,"Nothing")}},function(e,t,r){var n=r(19);function o(){if("function"!=typeof WeakMap)return null;var e=new WeakMap;return o=function(){return e},e}e.exports=function(e){if(e&&e.__esModule)return e;if(null===e||"object"!==n(e)&&"function"!=typeof e)return{default:e};var t=o();if(t&&t.has(e))return t.get(e);var r={},u=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var c in e)if(Object.prototype.hasOwnProperty.call(e,c)){var i=u?Object.getOwnPropertyDescriptor(e,c):null;i&&(i.get||i.set)?Object.defineProperty(r,c,i):r[c]=e[c]}return r.default=e,t&&t.set(e,r),r}},function(e,t,r){"use strict";function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}r.r(t),r.d(t,"default",(function(){return n}))},function(e,t,r){"use strict";function n(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function o(e,t,r){return t&&n(e.prototype,t),r&&n(e,r),e}r.r(t),r.d(t,"default",(function(){return o}))},function(e,t,r){"use strict";function n(e){return(n=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}r.r(t),r.d(t,"default",(function(){return n}))},function(e,t,r){"use strict";function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}r.r(t),r.d(t,"default",(function(){return n}))},function(e,t,r){"use strict";var n=r(0);Object.defineProperty(t,"__esModule",{value:!0}),t.subscribe=t.dispatch=t.connect=t.getStore=t.createStore=void 0;var o=new(n(r(21)).default),u=o.createStore,c=o.getStore,i=o.connect,a=o.dispatch,f=o.subscribe;t.subscribe=f,t.dispatch=a,t.connect=i,t.getStore=c,t.createStore=u},function(e,t,r){"use strict";function n(e){return(n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}r.r(t),r.d(t,"default",(function(){return u}));var o=r(1);function u(e,t){return!t||"object"!==n(t)&&"function"!=typeof t?Object(o.default)(e):t}},function(e,t,r){"use strict";function n(e,t){return(n=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function o(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&n(e,t)}r.r(t),r.d(t,"default",(function(){return o}))},function(e,r){e.exports=t},function(e,t,r){e.exports=r(23)()},function(e,t,r){"use strict";var n=r(0);Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e,t){var r=Object.keys(c.default);return function(n,c){var i=this.props.dispatch||u.dispatch;if(r.includes(n))return i(e[n],c);for(var a=arguments.length,f=new Array(a>2?a-2:0),l=2;l<a;l++)f[l-2]=arguments[l];if("global"===n){if(!e[c])throw"Dispatcher `".concat(c,"` not exists");return i.apply(void 0,[e[c]].concat(f))}if(!this.props[o.MOUNTED_COMPONENTS].includes(n))throw"Component `".concat(n,"` not ready");var s=t[n];if(!s[c])throw"Dispatcher `".concat(c,"` not exists");return s[c].apply(s,f)}};var o=r(3),u=r(9),c=n(r(15))},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=r(3),o={GET_MOUNTED_COMPONENTS:function(e){return(0,e.getStore)()[n.MOUNTED_COMPONENTS]}};t.default=o},function(e,t,r){"use strict";function n(e){return function(e){if(Array.isArray(e)){for(var t=0,r=new Array(e.length);t<e.length;t++)r[t]=e[t];return r}}(e)||function(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}r.r(t),r.d(t,"default",(function(){return n}))},function(e,t,r){"use strict";function n(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},u=Object.keys(e);for(n=0;n<u.length;n++)r=u[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var u=Object.getOwnPropertySymbols(e);for(n=0;n<u.length;n++)r=u[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}r.r(t),r.d(t,"default",(function(){return n}))},function(e,t,r){"use strict";var n=r(4),o=r(0);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var u=o(r(16)),c=o(r(5)),i=o(r(6)),a=o(r(1)),f=o(r(10)),l=o(r(7)),s=o(r(11)),d=o(r(8)),p=o(r(17)),y=n(r(2)),O=r(20),h=r(12),m=r(9),v=o(r(22)),b=o(r(25)),E=o(r(15)),g=o(r(14)),S=r(3);function _(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}function P(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function T(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?P(Object(r),!0).forEach((function(t){(0,d.default)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):P(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}t.default=function(e){e.dependencies;var t=e.components,r=e.store,n=void 0===r?{}:r,o=e.dispatcher,P=void 0===o?{}:o,j=e.loading,N=void 0===j?S.Loading:j,M=e.error,C=void 0===M?S.Error:M,w=e.container,D=void 0===w?S.Container:w,R=(0,p.default)(e,["dependencies","components","store","dispatcher","loading","error","container"]),x=Object.keys(n).concat([S.MOUNTED_COMPONENTS]),k={},U=T({},P,{},E.default),A={},I=(0,v.default)(C),q=(0,g.default)(U,k);(0,m.createStore)(T({},n,(0,d.default)({},S.MOUNTED_COMPONENTS,[]))),Object.keys(t).forEach((function(e){var r=(0,b.default)({name:e,storeDispatcher:U,componentDispatcher:k,Loading:N,Error:C,config:T({},R,{components:t})});A[e]=function(){return y.default.createElement(r,null)}}));var L=function(e){return A[e]?A[e]:function(){return y.default.createElement(C,{error:"Component undefined"})}},W=function(e){(0,s.default)(n,e);var t,r=(t=n,function(){var e,r=(0,l.default)(t);if(_()){var n=(0,l.default)(this).constructor;e=Reflect.construct(r,arguments,n)}else e=r.apply(this,arguments);return(0,f.default)(this,e)});function n(){var e;(0,c.default)(this,n);for(var t=arguments.length,o=new Array(t),u=0;u<t;u++)o[u]=arguments[u];return e=r.call.apply(r,[this].concat(o)),(0,d.default)((0,a.default)(e),"state",{error:void 0}),(0,d.default)((0,a.default)(e),"dispatch",q.bind((0,a.default)(e))),e}return(0,i.default)(n,[{key:"componentDidCatch",value:function(e){this.setState({error:e.message||"Container Error"})}},{key:"render",value:function(){var e=this,t=this.state.error;if(t)return y.default.createElement(C,{error:t});var r={};return x.forEach((function(t){t!==S.MOUNTED_COMPONENTS&&(r[t]=e.props[t])})),y.default.createElement(D,{dispatch:this.dispatch,Routes:I,store:r,componentCreator:L,mountedComponents:this.props[S.MOUNTED_COMPONENTS],config:R})}}]),n}(y.Component),H=m.connect.apply(void 0,(0,u.default)(x))(W);(0,O.render)(y.default.createElement(h.HashRouter,null,y.default.createElement(h.Switch,null,y.default.createElement(H,null))),document.querySelector("#root"))}},function(e,t){function r(t){return"function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?e.exports=r=function(e){return typeof e}:e.exports=r=function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},r(t)}e.exports=r},function(e,t){e.exports=r},function(e,t){e.exports=n},function(e,t,r){"use strict";var n=r(4),o=r(0);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var u=o(r(5)),c=o(r(6)),i=o(r(1)),a=o(r(10)),f=o(r(7)),l=o(r(11)),s=o(r(8)),d=n(r(2)),p=o(r(13));function y(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}t.default=function(e){var t,r;return r=t=function(t){(0,l.default)(o,t);var r,n=(r=o,function(){var e,t=(0,f.default)(r);if(y()){var n=(0,f.default)(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return(0,a.default)(this,e)});function o(){var e;(0,u.default)(this,o);for(var t=arguments.length,r=new Array(t),c=0;c<t;c++)r[c]=arguments[c];return e=n.call.apply(n,[this].concat(r)),(0,s.default)((0,i.default)(e),"state",{error:void 0}),e}return(0,c.default)(o,[{key:"shouldComponentUpdate",value:function(e,t){return!!t.error}},{key:"componentDidCatch",value:function(e){this.setState({error:e.message||"Routes Error"})}},{key:"render",value:function(){var t=this.state.error,r=this.props.children;return t?d.default.createElement(e,{error:t}):r}}]),o}(d.Component),(0,s.default)(t,"propTypes",{children:p.default.element.isRequired}),r}},function(e,t,r){"use strict";var n=r(24);function o(){}function u(){}u.resetWarningCache=o,e.exports=function(){function e(e,t,r,o,u,c){if(c!==n){var i=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw i.name="Invariant Violation",i}}function t(){return e}e.isRequired=e;var r={array:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,elementType:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t,checkPropTypes:u,resetWarningCache:o};return r.PropTypes=r,r}},function(e,t,r){"use strict";e.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"},function(e,t,r){"use strict";var n=r(4),o=r(0);Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){var t=e.config,r=e.name,n=e.storeDispatcher,o=e.componentDispatcher,g=e.Loading,S=e.Error,_=Object.keys((0,v.getStore)()),P=(0,m.default)(n,o),T=t.components,j=(t.dependencies,(0,p.default)(t,["components","dependencies"])),N=function(e){(0,s.default)(u,e);var t,n=(t=u,function(){var e,r=(0,l.default)(t);if(E()){var n=(0,l.default)(this).constructor;e=Reflect.construct(r,arguments,n)}else e=r.apply(this,arguments);return(0,f.default)(this,e)});function u(){var e;(0,c.default)(this,u);for(var t=arguments.length,i=new Array(t),f=0;f<t;f++)i[f]=arguments[f];return e=n.call.apply(n,[this].concat(i)),(0,d.default)((0,a.default)(e),"state",{component:void 0,error:void 0}),(0,d.default)((0,a.default)(e),"dispatch",P.bind((0,a.default)(e))),(0,d.default)((0,a.default)(e),"mountComponent",(function(){window.requirejs([r],(function(t){if(t){var n=(0,v.getStore)()[b.MOUNTED_COMPONENTS],u={};n.includes(r)||n.push(r),Object.getOwnPropertyNames(t).forEach((function(e){b.IGNORE_STATIC_METHODS.includes(e)||(u[e]=t[e])})),o[r]=u,e.setState({component:t},(function(){(0,v.dispatch)((0,d.default)({},b.MOUNTED_COMPONENTS,n),!0)}))}else e.setState({error:"Component Name Error"})}),(function(t){e.setState({error:t.message||"Component Load Error"})}))})),(0,d.default)((0,a.default)(e),"onReload",(function(){window.requirejs.undef(r),window.requirejs.config({paths:(0,d.default)({},r,T[r].slice(0,-3))}),e.setState({component:void 0,error:void 0},(function(){e.mountComponent()}))})),e}return(0,i.default)(u,[{key:"componentDidMount",value:function(){this.mountComponent()}},{key:"componentDidCatch",value:function(e){this.setState({error:e.message||"Component Error"})}},{key:"componentWillUnmount",value:function(){var e=(0,v.getStore)()[b.MOUNTED_COMPONENTS];e=e.filter((function(e){return e!==r})),(0,v.dispatch)((0,d.default)({},b.MOUNTED_COMPONENTS,e),!0),delete o[r]}},{key:"render",value:function(){var e=this,t=this.props,r=t.history,n=t.location,o=t.match,u=this.state,c=u.component,i=u.error,a={};return i?y.default.createElement(S,{error:i,reload:this.onReload}):c?(_.forEach((function(t){t!==b.MOUNTED_COMPONENTS&&(a[t]=e.props[t])})),y.default.createElement(c,{config:j,mountedComponents:this.props[b.MOUNTED_COMPONENTS],store:a,dispatch:this.dispatch,history:r,location:n,match:o})):y.default.createElement(g,null)}}]),u}(y.Component);return(0,d.default)(N,"propTypes",{history:h.default.func.isRequired,match:h.default.object.isRequired,location:h.default.object.isRequired}),v.connect.apply(void 0,(0,u.default)(_))((0,O.withRouter)(N))};var u=o(r(16)),c=o(r(5)),i=o(r(6)),a=o(r(1)),f=o(r(10)),l=o(r(7)),s=o(r(11)),d=o(r(8)),p=o(r(17)),y=n(r(2)),O=r(12),h=o(r(13)),m=o(r(14)),v=r(9),b=r(3);function E(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}}]).default}));
//# sourceMappingURL=humpback.js.map