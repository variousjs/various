define("base",["react","antd","react-router-dom"],(function(e,t,n){return function(e){var t={};function n(r){if(t[r])return t[r].exports;var u=t[r]={i:r,l:!1,exports:{}};return e[r].call(u.exports,u,u.exports,n),u.l=!0,u.exports}return n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var u in e)n.d(r,u,function(t){return e[t]}.bind(null,u));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=1)}([function(e,t){e.exports=function(e){return e&&e.__esModule?e:{default:e}}},function(e,t,n){e.exports=n(2)},function(e,t,n){"use strict";var r=n(0);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var u=r(n(3)),a=r(n(5)),o=r(n(6)),l={state:a.default,methods:u.default,container:o.default};t.default=l},function(e,t,n){"use strict";var r=n(0);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var u=r(n(4)),a={updateUserName:(e,t)=>(0,u.default)((function*(){var{dispatch:n,getStore:r}=e;yield new Promise(e=>setTimeout(e,1e3));var{user:u}=r();u.name=t,n({user:u})}))(),getUserName(e){var{getStore:t}=e,{user:n}=t();return n.name}};t.default=a},function(e,t,n){"use strict";function r(e,t,n,r,u,a,o){try{var l=e[a](o),i=l.value}catch(e){return void n(e)}l.done?t(i):Promise.resolve(i).then(r,u)}function u(e){return function(){var t=this,n=arguments;return new Promise((function(u,a){var o=e.apply(t,n);function l(e){r(o,u,a,l,i,"next",e)}function i(e){r(o,u,a,l,i,"throw",e)}l(void 0)}))}}n.r(t),n.d(t,"default",(function(){return u}))},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;t.default={user:{name:"humpback"}}},function(e,t,n){"use strict";var r=n(0);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var u=r(n(7)),a=r(n(8)),o=n(11),l=n(12);function i(e){var{state:t,Routes:n,config:r}=e;return u.default.createElement(o.Layout,null,u.default.createElement(o.Layout.Sider,null,u.default.createElement(o.Menu,{defaultSelectedKeys:window.location.hash.split("#/")[1]||"default",mode:"inline",theme:"dark"},r.menu.filter(e=>{var{label:t}=e;return t}).map(e=>{var{label:t,path:n,icon:r}=e;return u.default.createElement(o.Menu.Item,{key:n.split("/")[1]||"default",style:{display:"flex",alignItems:"center"}},u.default.createElement(o.Icon,{type:r}),u.default.createElement(l.Link,{to:n},t))}))),u.default.createElement(o.Layout,null,u.default.createElement(o.Layout.Header,{style:{background:"#fff",padding:0}},u.default.createElement("div",null,t.user.name)),u.default.createElement(o.Layout.Content,{style:{margin:"24px 16px",padding:24,background:"#fff"}},u.default.createElement(n,null))))}i.propTypes={state:a.default.object.isRequired,Routes:a.default.element.isRequired,routes:a.default.array.isRequired};var f=i;t.default=f},function(t,n){t.exports=e},function(e,t,n){e.exports=n(9)()},function(e,t,n){"use strict";var r=n(10);function u(){}function a(){}a.resetWarningCache=u,e.exports=function(){function e(e,t,n,u,a,o){if(o!==r){var l=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw l.name="Invariant Violation",l}}function t(){return e}e.isRequired=e;var n={array:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,elementType:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t,checkPropTypes:a,resetWarningCache:u};return n.PropTypes=n,n}},function(e,t,n){"use strict";e.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"},function(e,n){e.exports=t},function(e,t){e.exports=n}]).default}));
//# sourceMappingURL=base.js.map