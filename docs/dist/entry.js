define("$entry_component",["react","react-router-dom","antd"],((e,t,r)=>(()=>{"use strict";var n={120:t=>{t.exports=e},32:e=>{e.exports=t},297:e=>{e.exports=r}},a={};function o(e){var t=a[e];if(void 0!==t)return t.exports;var r=a[e]={exports:{}};return n[e](r,r.exports,o),r.exports}o.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return o.d(t,{a:t}),t},o.d=(e,t)=>{for(var r in t)o.o(t,r)&&!o.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},o.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t);var l={};return(()=>{function e(e,t,r,n,a,o,l){try{var c=e[o](l),i=c.value}catch(e){return void r(e)}c.done?t(i):Promise.resolve(i).then(n,a)}o.d(l,{default:()=>d});const t={updateUserName(t,r){return(n=function*(){var{dispatch:e,getStore:n}=t;yield new Promise((e=>setTimeout(e,1e3)));var{user:a}=n();a.name=r,e({user:a})},function(){var t=this,r=arguments;return new Promise((function(a,o){var l=n.apply(t,r);function c(t){e(l,a,o,c,i,"next",t)}function i(t){e(l,a,o,c,i,"throw",t)}c(void 0)}))})();var n},getUserName(e){var{getStore:t}=e,{user:r}=t();return r.name},getNumber(e){var{getStore:t}=e,{number:r}=t();return r},setNumber(e,t){var{dispatch:r}=e;r({number:t})}};var r=o(120),n=o.n(r),a=o(32),c=o(297);const i=e=>{var{children:t,$config:r,$store:o,$dispatch:l,$mounted:i}=e;return n().createElement(c.Layout,{style:{height:"100vh"}},n().createElement(c.Layout.Sider,null,n().createElement("h1",{style:{color:"#fff",textAlign:"center",paddingTop:20}},"Humpback"),n().createElement(c.Menu,{defaultSelectedKeys:window.location.hash.split("#/")[1]||"default",mode:"inline",theme:"dark"},r.menu.filter((e=>{var{label:t}=e;return t})).map((e=>{var{label:t,path:r,icon:o}=e;return n().createElement(c.Menu.Item,{key:r.split("/")[1]||"default",style:{display:"flex",alignItems:"center"}},n().createElement(c.Icon,{type:o}),n().createElement(a.Link,{to:r},t))})))),n().createElement(c.Layout,null,n().createElement(c.Layout.Header,{style:{background:"#fff",padding:0}},n().createElement("div",{style:{display:"flex",justifyContent:"flex-end"}},n().createElement(c.Input,{style:{width:100}}),n().createElement("div",null,o.user.name),n().createElement("div",{style:{margin:"0 20px"}},"当前已经加载完成的组件:",n().createElement(c.Tag,null,i)),n().createElement(c.Button,{onClick:()=>l("store","setNumber",Math.random().toFixed(2))},"store"),n().createElement(c.Button,{onClick:()=>l("a","updateValue",Math.random().toFixed(2))},"component"),n().createElement("div",{style:{margin:"0 20px"}},n().createElement(c.Badge,{count:o.number,showZero:!0})))),n().createElement(c.Layout.Content,{style:{margin:"24px 16px",padding:24,background:"#fff"}},t)))};function u(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?u(Object(r),!0).forEach((function(t){m(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):u(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function m(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}class p extends r.Component{render(){var{Router:e,$config:t,$component:r}=this.props,o=t.routes.map((e=>s(s({},e),{},{path:e.path,components:e.components.join().split(",")}))),l=r("s");return n().createElement(i,this.props,n().createElement(l,null),n().createElement(e,null,o.map((e=>{var{path:t,components:o}=e;return n().createElement(a.Route,{key:t,exact:!0,path:t,component:()=>o.map((e=>{var a=r(e);if("e"===e)return n().createElement(c.Collapse,null,n().createElement(c.Collapse.Panel,{header:"Open"},n().createElement(a,null)));if("b"===e&&t.includes("next"))return n().createElement("div",{style:{display:"inline-block",width:300}},"silent component",n().createElement(a,{silent:!0}));var o="a"===e?{name:e,test:123}:{};return n().createElement("div",{style:{display:"inline-block",width:300}},n().createElement(a,o))}))})}))))}}const d={store:{user:{name:"humpback"},number:"10"},actions:t,Container:p,Loader:function(){return n().createElement(c.Spin,null)},Error:e=>{var{reload:t,type:r,message:a}=e;return n().createElement(n().Fragment,null,n().createElement(c.Alert,{message:"Error",description:"[".concat(r,"]:").concat(a||"组件错误"),type:"error"}),t&&n().createElement(c.Button,{onClick:t},"刷新"))}}})(),l.default})()));
//# sourceMappingURL=entry.js.map