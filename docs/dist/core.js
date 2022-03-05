define(["react","react-dom"],(function(t,e){return function(){"use strict";var r={63:function(t){t.exports=function t(e,r){if(e===r)return!0;if(e&&r&&"object"==typeof e&&"object"==typeof r){if(e.constructor!==r.constructor)return!1;var n,o,i;if(Array.isArray(e)){if((n=e.length)!=r.length)return!1;for(o=n;0!=o--;)if(!t(e[o],r[o]))return!1;return!0}if(e.constructor===RegExp)return e.source===r.source&&e.flags===r.flags;if(e.valueOf!==Object.prototype.valueOf)return e.valueOf()===r.valueOf();if(e.toString!==Object.prototype.toString)return e.toString()===r.toString();if((n=(i=Object.keys(e)).length)!==Object.keys(r).length)return!1;for(o=n;0!=o--;)if(!Object.prototype.hasOwnProperty.call(r,i[o]))return!1;for(o=n;0!=o--;){var u=i[o];if(!t(e[u],r[u]))return!1}return!0}return e!=e&&r!=r}},161:function(e){e.exports=t},305:function(t){t.exports=e}},n={};function o(t){var e=n[t];if(void 0!==e)return e.exports;var i=n[t]={exports:{}};return r[t](i,i.exports,o),i.exports}o.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return o.d(e,{a:e}),e},o.d=function(t,e){for(var r in e)o.o(e,r)&&!o.o(t,r)&&Object.defineProperty(t,r,{enumerable:!0,get:e[r]})},o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},o.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})};var i={};return function(){o.r(i),o.d(i,{Store:function(){return m},default:function(){return mt}});var t=o(161),e=o.n(t),r=o(305),n=function(t,e){return n=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&(t[r]=e[r])},n(t,e)};function u(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Class extends value "+String(e)+" is not a constructor or null");function r(){this.constructor=t}n(t,e),t.prototype=null===e?Object.create(e):(r.prototype=e.prototype,new r)}var c=function(){return c=Object.assign||function(t){for(var e,r=1,n=arguments.length;r<n;r++)for(var o in e=arguments[r])Object.prototype.hasOwnProperty.call(e,o)&&(t[o]=e[o]);return t},c.apply(this,arguments)};function a(t,e,r){if(r||2===arguments.length)for(var n,o=0,i=e.length;o<i;o++)!n&&o in e||(n||(n=Array.prototype.slice.call(e,0,o)),n[o]=e[o]);return t.concat(n||Array.prototype.slice.call(e))}Object.create,Object.create;var s=o(63),f=o.n(s),l=["name","prototype","length","propTypes","defaultProps","getDerivedStateFromProps","contextTypes","displayName"],p=function(r){var n=r.getStore,o=r.subscribe,i=r.dispatch;return function(){for(var r=[],a=0;a<arguments.length;a++)r[a]=arguments[a];return function(a){var s=function(t){function s(){var e=null!==t&&t.apply(this,arguments)||this;return e.state={props:n()},e}return u(s,t),s.prototype.componentDidMount=function(){var t=this;this.unsubscribe=o((function(e){r.filter((function(t){return e.includes(t)})).length&&t.setState({props:n()})}))},s.prototype.componentWillUnmount=function(){this.unsubscribe()},s.prototype.render=function(){var t=this.state.props,r=Object.assign({dispatch:i},t,this.props);return e().createElement(a,c({},r))},s}(t.Component);return Object.getOwnPropertyNames(a).forEach((function(t){var e=t;l.includes(t)||(s[e]=a[e])})),s}}},y=function(e){var r=e.getStore,n=e.subscribe;return function(){for(var e=[],o=0;o<arguments.length;o++)e[o]=arguments[o];var i=(0,t.useState)(r()),u=i[0],c=i[1];return(0,t.useLayoutEffect)((function(){return n((function(t){e.filter((function(e){return t.includes(e)})).length&&c(r())}))})),u}},d=function(t){function e(){var e=null!==t&&t.apply(this,arguments)||this;return e.connect=p(e),e.useStore=y(e),e}return u(e,t),e}((function(){var t=this;this.createStore=function(e){t.state=e},this.getStore=function(){var e=Reflect.ownKeys(t.state),r={};return e.forEach((function(e){r[e]=JSON.parse(JSON.stringify(t.state[e]))})),r},this.subscribe=function(e){return t.listeners.push(e),function(){var r=t.listeners.slice(),n=r.indexOf(e);n>-1&&r.splice(n,1),t.listeners=r}},this.dispatch=function(e){for(var r=[],n=1;n<arguments.length;n++)r[n-1]=arguments[n];var o=typeof e;if("function"===o)return e.apply(void 0,a([{dispatch:function(e){return t.dispatch(e,!0)},getStore:t.getStore}],r));t.emits=c(c({},t.emits),e),r[0]?t.emit():(clearTimeout(t.timer),t.timer=setTimeout(t.emit))},this.emit=function(){for(var e=t.emits,r=[],n=Reflect.ownKeys(e),o=0;o<n.length;o+=1){var i=n[o];i in t.state&&(f()(t.state[i],e[i])||(t.state[i]=e[i],r.push(i)))}r.length&&t.listeners.forEach((function(t){return t(r)})),t.emits={},t.timer=void 0},this.state={},this.listeners=[],this.emits={},this.timer=void 0})),m=d,b=new m,h=b.createStore,v=b.getStore,O=b.connect,g=b.dispatch,w=b.subscribe,E=function(){return e().createElement("div",null,"Loading")},j=function(t){var r=t.type,n=t.message,o=t.reload;return e().createElement(e().Fragment,null,e().createElement("div",null,"[".concat(r,"]").concat(n)),o?e().createElement("button",{type:"button",onClick:o},"Reload"):null)},S=function(){return e().createElement("div",null,"Container not defined")};function R(t,e){return function(r,n,o,i){var u=this.props.dispatch;if("store"===n){if(!t[o])throw new Error("action `".concat(o,"` is not present"));return u(t[o],i,r)}var c=e[n];if(!c)throw new Error("component `".concat(n,"` is not ready"));if(!c[o])throw new Error("action `".concat(o,"` of component `").concat(n,"` is not present"));return c[o](i,r)}}function P(t,e){(null==e||e>t.length)&&(e=t.length);for(var r=0,n=new Array(e);r<e;r++)n[r]=t[r];return n}var N,_=function(t){return new Promise((function(e,r){window.requirejs(t,e,r)}))},C=function(t){var e,r,n=(e=t.split("."),r=1,function(t){if(Array.isArray(t))return t}(e)||function(t,e){var r=null==t?null:"undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(null!=r){var n,o,i=[],u=!0,c=!1;try{for(r=r.call(t);!(u=(n=r.next()).done)&&(i.push(n.value),!e||i.length!==e);u=!0);}catch(t){c=!0,o=t}finally{try{u||null==r.return||r.return()}finally{if(c)throw o}}return i}}(e,r)||function(t,e){if(t){if("string"==typeof t)return P(t,e);var r=Object.prototype.toString.call(t).slice(8,-1);return"Object"===r&&t.constructor&&(r=t.constructor.name),"Map"===r||"Set"===r?Array.from(t):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?P(t,e):void 0}}(e,r)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}())[0];return window.requirejs.specified(n)&&!!window.requirejs.s.contexts._.defined[n]},M=Symbol("MOUNTED_COMPONENTS"),A=Symbol("MESSAGE_KEY");!function(t){t.LOADING_ERROR="LOADING_ERROR",t.DEPENDENCIES_LOADING_ERROR="DEPENDENCIES_LOADING_ERROR",t.NOT_DEFINED="NOT_DEFINED",t.INVALID_COMPONENT="INVALID_COMPONENT",t.SCRIPT_ERROR="SCRIPT_ERROR",t.CONTAINER_ERROR="CONTAINER_ERROR"}(N||(N={}));var D=function(t){return function(e,r){return g(function(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}({},A,{timestamp:+new Date,type:t,name:e,value:r}))}},T=function(t,e){return function(r){if(r[0]===A){var n=v()[A],o=n.name,i=n.value,u=n.type;u!==t&&e({name:o,value:i,type:u})}}};function I(t){return I="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},I(t)}var x=["components"],k=["dispatch","$silent"];function L(t){if("undefined"!=typeof Symbol&&null!=t[Symbol.iterator]||null!=t["@@iterator"])return Array.from(t)}function $(){return $=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var r=arguments[e];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(t[n]=r[n])}return t},$.apply(this,arguments)}function q(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function U(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?q(Object(r),!0).forEach((function(e){z(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):q(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function G(t,e,r,n,o,i,u){try{var c=t[i](u),a=c.value}catch(t){return void r(t)}c.done?e(a):Promise.resolve(a).then(n,o)}function V(t){return function(){var e=this,r=arguments;return new Promise((function(n,o){var i=t.apply(e,r);function u(t){G(i,n,o,u,c,"next",t)}function c(t){G(i,n,o,u,c,"throw",t)}u(void 0)}))}}function F(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function B(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}function K(t,e){return K=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t},K(t,e)}function J(t,e){return!e||"object"!==I(e)&&"function"!=typeof e?W(t):e}function W(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function Y(t){return Y=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)},Y(t)}function z(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function H(t,e){return tt(t)||function(t,e){var r=null==t?null:"undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(null!=r){var n,o,i=[],u=!0,c=!1;try{for(r=r.call(t);!(u=(n=r.next()).done)&&(i.push(n.value),!e||i.length!==e);u=!0);}catch(t){c=!0,o=t}finally{try{u||null==r.return||r.return()}finally{if(c)throw o}}return i}}(t,e)||X(t,e)||Q()}function Q(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function X(t,e){if(t){if("string"==typeof t)return Z(t,e);var r=Object.prototype.toString.call(t).slice(8,-1);return"Object"===r&&t.constructor&&(r=t.constructor.name),"Map"===r||"Set"===r?Array.from(t):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?Z(t,e):void 0}}function Z(t,e){(null==e||e>t.length)&&(e=t.length);for(var r=0,n=new Array(e);r<e;r++)n[r]=t[r];return n}function tt(t){if(Array.isArray(t))return t}function et(t,e){if(null==t)return{};var r,n,o=function(t,e){if(null==t)return{};var r,n,o={},i=Object.keys(t);for(n=0;n<i.length;n++)r=i[n],e.indexOf(r)>=0||(o[r]=t[r]);return o}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(n=0;n<i.length;n++)r=i[n],e.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(t,r)&&(o[r]=t[r])}return o}var rt=function n(o){var i,u=o.config,c=o.name,a=o.storeDispatcher,s=o.componentDispatcher,f=o.Loader,l=o.Error,p=o.onMounted,y=Object.keys(v()),d=R(a,s),m=u.components,b=et(u,x),h=Symbol("module"),E=H(c.split("."),2),j=E[0],S=E[1],P=void 0===S?h:S,A=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&K(t,e)}(S,t);var o,i,u,O,E=(u=S,O=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}(),function(){var t,e=Y(u);if(O){var r=Y(this).constructor;t=Reflect.construct(e,arguments,r)}else t=e.apply(this,arguments);return J(this,t)});function S(){var t;F(this,S);for(var o=arguments.length,i=new Array(o),u=0;u<o;u++)i[u]=arguments[u];return z(W(t=E.call.apply(E,[this].concat(i))),"state",{componentExist:void 0,componentReady:!1,errorType:void 0,errorMessage:""}),z(W(t),"ComponentNode",void 0),z(W(t),"isUnMounted",void 0),z(W(t),"retryCount",0),z(W(t),"dispatch",d.bind(W(t),j)),z(W(t),"postMessage",D(c)),z(W(t),"unSubscribe",(function(){return null})),z(W(t),"unMountComponent",(function(){var e=t.$getMountedComponents();e=e.filter((function(t){return t!==c})),g(z({},M,e),!0),delete s[c]})),z(W(t),"mountComponent",(function(){if("store"!==j){try{var e=window.requirejs.s.contexts._,r=e.registry,n=e.urlFetched;Object.keys(r).forEach((function(t){r[t].error&&(delete n[r[t].map.url],delete r[t])}))}catch(t){}window.requirejs([j],function(){var e=V(regeneratorRuntime.mark((function e(r){var n,o,i;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!t.isUnMounted){e.next=2;break}return e.abrupt("return");case 2:if(r){e.next=5;break}return t.setState({errorMessage:"Not content",errorType:N.INVALID_COMPONENT}),e.abrupt("return");case 5:if(n=P===h?r.default||r:r[P]){e.next=9;break}return t.setState({errorMessage:"Module not defined",errorType:N.INVALID_COMPONENT}),e.abrupt("return");case 9:if("function"==typeof n){e.next=12;break}return t.setState({errorMessage:"Component cannot be executed",errorType:N.INVALID_COMPONENT}),e.abrupt("return");case 12:o=v()[M],i={},o.includes(c)||o.push(c),Object.getOwnPropertyNames(n).forEach((function(e){"function"==typeof n[e]&&("$onMessage"!==e?i[e]=n[e]:t.unSubscribe=w(T(c,n[e])))})),s[c]=i,t.ComponentNode=n,t.setState({componentReady:!0},(function(){p?p():g(z({},M,o),!0)}));case 19:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),(function(e){if(window.requirejs.undef(j),window.requirejs.config({paths:z({},j,"".concat(m[j],"#"))}),!t.isUnMounted){if(t.retryCount<1)return t.retryCount+=1,void setTimeout(t.mountComponent,1e3);var r=H(e.requireModules,1)[0];t.setState({errorType:r===j?N.LOADING_ERROR:N.DEPENDENCIES_LOADING_ERROR,errorMessage:e.message})}}))}else t.setState({errorType:N.INVALID_COMPONENT,errorMessage:"Cannot load component named `store`"})})),z(W(t),"onReload",(function(){t.setState({componentReady:!1,errorType:void 0,errorMessage:""},(function(){t.mountComponent()}))})),z(W(t),"$getMountedComponents",(function(){return v()[M]})),z(W(t),"$render",(function(t){var o=t.name,i=t.url,u=t.target,c=t.props,p=t.module,y=t.onMounted;i&&(window.requirejs.undef(o),window.requirejs.config({paths:z({},o,"".concat(i,"#"))}));var d=n({name:p?"".concat(o,".").concat(p):o,storeDispatcher:a,componentDispatcher:s,Loader:f,Error:l,config:U(U({},b),{},{components:m}),onMounted:y}),h=function(t){return e().createElement(d,t)};return(0,r.render)(e().createElement(h,c),u),function(){return(0,r.unmountComponentAtNode)(u)}})),t}return o=S,(i=[{key:"componentDidMount",value:function(){this.setState({componentExist:C(j)}),this.mountComponent()}},{key:"componentDidCatch",value:function(t){this.setState({errorType:N.SCRIPT_ERROR,errorMessage:t.message}),window.requirejs.undef(j),window.requirejs.config({paths:z({},j,"".concat(m[j],"#"))}),this.unMountComponent()}},{key:"componentWillUnmount",value:function(){this.ComponentNode=null,this.unMountComponent(),this.isUnMounted=!0,this.unSubscribe()}},{key:"render",value:function(){var t=this,r=this.props,n=(r.dispatch,r.$silent),o=et(r,k),i=this.state,u=i.componentReady,c=i.errorMessage,a=i.errorType,s=i.componentExist,d={},m={},h=this.ComponentNode;return a?n?null:e().createElement(l,{type:N[a],message:c,reload:a===N.INVALID_COMPONENT?void 0:this.onReload}):u?(y.forEach((function(e){d[e]=t.props[e]})),Object.keys(o).forEach((function(t){d[t]!==o[t]&&(m[t]=o[t])})),e().createElement(h,$({},m,{$config:b,$dispatch:this.dispatch,$store:d,$render:p?void 0:this.$render,$preload:_,$postMessage:this.postMessage,$getMountedComponents:this.$getMountedComponents}))):n||!1!==s?null:e().createElement(f,null)}}])&&B(o.prototype,i),S}(t.Component),I=tt(i=y)||L(i)||X(i)||Q(),q=I[0],G=I.slice(1);return O.apply(void 0,[q].concat(function(t){return function(t){if(Array.isArray(t))return Z(t)}(t)||L(t)||X(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}(G)))(A)};function nt(t){return nt="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},nt(t)}var ot=["dependencies","entry","root","components","store","actions","Loader","Error","Container"];function it(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function ut(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}function ct(t,e){return ct=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t},ct(t,e)}function at(t,e){return!e||"object"!==nt(e)&&"function"!=typeof e?st(t):e}function st(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function ft(t){return ft=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)},ft(t)}function lt(t,e){(null==e||e>t.length)&&(e=t.length);for(var r=0,n=new Array(e);r<e;r++)n[r]=t[r];return n}function pt(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function yt(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?pt(Object(r),!0).forEach((function(e){dt(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):pt(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function dt(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}var mt=function(n){n.dependencies,n.entry;var o,i=n.root,u=n.components,c=void 0===u?{}:u,a=n.store,s=void 0===a?{}:a,f=n.actions,l=void 0===f?{}:f,p=n.Loader,y=void 0===p?E:p,d=n.Error,m=void 0===d?j:d,b=n.Container,v=void 0===b?S:b,O=function(t,e){if(null==t)return{};var r,n,o=function(t,e){if(null==t)return{};var r,n,o={},i=Object.keys(t);for(n=0;n<i.length;n++)r=i[n],e.indexOf(r)>=0||(o[r]=t[r]);return o}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(n=0;n<i.length;n++)r=i[n],e.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(t,r)&&(o[r]=t[r])}return o}(n,ot),g={},w=yt({},l),R={};h(yt(yt({},s),{},(dt(o={},M,[]),dt(o,A,{}),o)));var P=function(t){var r,n,o=(r=t.split("."),n=1,function(t){if(Array.isArray(t))return t}(r)||function(t,e){var r=null==t?null:"undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(null!=r){var n,o,i=[],u=!0,c=!1;try{for(r=r.call(t);!(u=(n=r.next()).done)&&(i.push(n.value),!e||i.length!==e);u=!0);}catch(t){c=!0,o=t}finally{try{u||null==r.return||r.return()}finally{if(c)throw o}}return i}}(r,n)||function(t,e){if(t){if("string"==typeof t)return lt(t,e);var r=Object.prototype.toString.call(t).slice(8,-1);return"Object"===r&&t.constructor&&(r=t.constructor.name),"Map"===r||"Set"===r?Array.from(t):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?lt(t,e):void 0}}(r,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}())[0];if(!c[o])return function(){return e().createElement(m,{message:"Component not defined",type:N.NOT_DEFINED})};if(R[t])return R[t];var i=function(t,r){var n=rt({name:t,storeDispatcher:w,componentDispatcher:g,Loader:y,Error:m,config:yt(yt({},O),{},{components:c}),onMounted:void 0});return function(t){return e().createElement(n,t)}}(t);return R[t]=i,i},_=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&ct(t,e)}(c,t);var r,n,o,i,u=(o=c,i=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}(),function(){var t,e=ft(o);if(i){var r=ft(this).constructor;t=Reflect.construct(e,arguments,r)}else t=e.apply(this,arguments);return at(this,t)});function c(){var t;it(this,c);for(var e=arguments.length,r=new Array(e),n=0;n<e;n++)r[n]=arguments[n];return dt(st(t=u.call.apply(u,[this].concat(r))),"state",{errorType:void 0,errorMessage:""}),t}return r=c,(n=[{key:"componentDidCatch",value:function(t){this.setState({errorType:N.CONTAINER_ERROR,errorMessage:t.message})}},{key:"render",value:function(){var t=this.state,r=t.errorType,n=t.errorMessage;return r?e().createElement(m,{type:N[r],message:n}):e().createElement(v,{$component:P,$config:O})}}])&&ut(r.prototype,n),c}(t.Component);(0,r.render)(e().createElement(_,null),document.querySelector(i||"#root"))}}(),i}()}));
//# sourceMappingURL=core.js.map