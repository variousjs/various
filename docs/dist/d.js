define("d",["react","antd"],((e,t)=>(()=>{"use strict";var r={120:t=>{t.exports=e},297:e=>{e.exports=t}},n={};function o(e){var t=n[e];if(void 0!==t)return t.exports;var l=n[e]={exports:{}};return r[e](l,l.exports,o),l.exports}o.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return o.d(t,{a:t}),t},o.d=(e,t)=>{for(var r in t)o.o(t,r)&&!o.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},o.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t);var l={};return(()=>{o.d(l,{default:()=>u});var e=o(120),t=o.n(e),r=o(297);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}const u=class extends e.Component{constructor(){super(...arguments),n(this,"unMount",void 0),n(this,"onPortals",(()=>{try{var{$render:e}=this.props;e&&(this.unMount=e({name:"switch",url:"https://unpkg.com/react-ios-switch@0.1.19/build/bundle.js",props:{checked:!0},target:document.querySelector("#portals"),onMounted:()=>{console.log("ready")}}))}catch(e){console.log(e)}}))}componentWillUnmount(){this.unMount()}render(){var e,n,o,l=null===(e=this.props.$router)||void 0===e||null===(n=e.match)||void 0===n||null===(o=n.params)||void 0===o?void 0:o.id;return t().createElement(t().Fragment,null,t().createElement("div",{id:"portals"}),t().createElement(r.Button,{onClick:this.onPortals},"加载组件"),t().createElement("input",null),t().createElement("p",null,"current:",l))}}})(),l.default})()));
//# sourceMappingURL=d.js.map