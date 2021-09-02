define("$entry_component",["react","react-router-dom","antd"],((e,t,r)=>(()=>{"use strict";var n={120:t=>{t.exports=e},32:e=>{e.exports=t},297:e=>{e.exports=r}},o={};function a(e){var t=o[e];if(void 0!==t)return t.exports;var r=o[e]={exports:{}};return n[e](r,r.exports,a),r.exports}a.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return a.d(t,{a:t}),t},a.d=(e,t)=>{for(var r in t)a.o(t,r)&&!a.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},a.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t);var l={};return(()=>{function e(e,t,r,n,o,a,l){try{var c=e[a](l),i=c.value}catch(e){return void r(e)}c.done?t(i):Promise.resolve(i).then(n,o)}a.d(l,{default:()=>y});const t={updateUserName(t,r){return(n=function*(){var{dispatch:e,getStore:n}=t;yield new Promise((e=>setTimeout(e,1e3)));var{user:o}=n();o.name=r,e({user:o})},function(){var t=this,r=arguments;return new Promise((function(o,a){var l=n.apply(t,r);function c(t){e(l,o,a,c,i,"next",t)}function i(t){e(l,o,a,c,i,"throw",t)}c(void 0)}))})();var n},getUserName(e){var{getStore:t}=e,{user:r}=t();return r.name},getNumber(e){var{getStore:t}=e,{number:r}=t();return r},setNumber(e,t){var{dispatch:r}=e;r({number:t})}};var r=a(120),n=a.n(r),o=a(32),c=a(297);const i=e=>{var{children:t,$config:r,$store:a,$dispatch:l,$mounted:i}=e;return n().createElement(c.Layout,{style:{height:"100vh"}},n().createElement(c.Layout.Sider,null,n().createElement("h1",{style:{color:"#fff",textAlign:"center",paddingTop:20}},"Humpback"),n().createElement(c.Menu,{defaultSelectedKeys:window.location.hash.split("#/")[1]||"default",mode:"inline",theme:"dark"},r.menu.filter((e=>{var{label:t}=e;return t})).map((e=>{var{label:t,path:r,icon:a}=e;return n().createElement(c.Menu.Item,{key:r.split("/")[1]||"default",style:{display:"flex",alignItems:"center"}},n().createElement(c.Icon,{type:a}),n().createElement(o.Link,{to:r},t))})))),n().createElement(c.Layout,null,n().createElement(c.Layout.Header,{style:{background:"#fff",padding:0}},n().createElement("div",{style:{display:"flex",justifyContent:"flex-end"}},n().createElement(c.Input,{style:{width:100}}),n().createElement("div",null,a.user.name),n().createElement("div",{style:{margin:"0 20px"}},"已加载组件：",i.map((e=>n().createElement(c.Tag,{key:e},e)))),n().createElement(c.Button,{onClick:()=>l("store","setNumber",Math.random().toFixed(2))},"store"),n().createElement(c.Button,{onClick:()=>l("a","updateValue",Math.random().toFixed(2))},"component"),n().createElement("div",{style:{margin:"0 20px"}},n().createElement(c.Badge,{count:a.number,showZero:!0})))),n().createElement(c.Layout.Content,{style:{margin:"24px 16px",padding:24,background:"#fff"}},t)))};function u(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?u(Object(r),!0).forEach((function(t){d(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):u(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function m(e,t,r,n,o,a,l){try{var c=e[a](l),i=c.value}catch(e){return void r(e)}c.done?t(i):Promise.resolve(i).then(n,o)}function p(e){return function(){var t=this,r=arguments;return new Promise((function(n,o){var a=e.apply(t,r);function l(e){m(a,n,o,l,c,"next",e)}function c(e){m(a,n,o,l,c,"throw",e)}l(void 0)}))}}function d(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}class f extends r.Component{constructor(){var e;super(...arguments),e=this,d(this,"onPreload",p((function*(){var{$preload:t}=e.props;yield t(["photo"]),console.log("preload photo")}))),d(this,"onPortals",(()=>{try{var e=this.props.$render({name:"switch",url:"https://unpkg.com/react-ios-switch@0.1.19/build/bundle.js",props:{checked:!0},onMounted:()=>{console.log("ready")},target:document.querySelector("#portals")});setTimeout(e,5e3)}catch(e){console.log(e)}}))}render(){var{Router:e,$config:t,$component:r,$mounted:a}=this.props,l=t.routes.map((e=>s(s({},e),{},{path:e.path,components:e.components.join().split(",")}))),u=r("hooks");return n().createElement(i,this.props,n().createElement(u,null),n().createElement("div",null,n().createElement("h3",null,"动态组件"),n().createElement(c.Button,{onClick:this.onPortals},"加载组件"),"hooks,a,b"===a.join()?n().createElement(c.Button,{onClick:this.onPreload},"预加载组件"):null),n().createElement(e,null,l.map((e=>{var{path:t,components:a}=e;return n().createElement(o.Route,{key:t,exact:!0,path:t,component:()=>a.map((e=>{var o=r(e);if("e"===e)return n().createElement(c.Collapse,{key:e},n().createElement(c.Collapse.Panel,{header:"Open"},n().createElement(o,null)));if("b"===e&&t.includes("next"))return n().createElement("div",{key:e,style:{display:"inline-block",width:300}},"silent component",n().createElement(o,{silent:!0}));var a="a"===e?{name:e,test:123}:{};return n().createElement("div",{key:e,style:{display:"inline-block",width:300}},n().createElement(o,a))}))})}))))}}const y={store:{user:{name:"humpback"},number:"10"},actions:t,Container:f,Loader:function(){return n().createElement(c.Spin,null)},Error:e=>{var{reload:t,type:r,message:o}=e;return n().createElement(n().Fragment,null,n().createElement(c.Alert,{message:"Error",description:"[".concat(r,"]:").concat(o||"组件错误"),type:"error"}),t&&n().createElement(c.Button,{onClick:t},"刷新"))}}})(),l.default})()));
//# sourceMappingURL=entry.js.map