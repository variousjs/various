define(["react","antd","nycticorax"],((e,t,n)=>(()=>{"use strict";var r={347:e=>{e.exports=n},120:t=>{t.exports=e},297:e=>{e.exports=t}},o={};function a(e){var t=o[e];if(void 0!==t)return t.exports;var n=o[e]={exports:{}};return r[e](n,n.exports,a),n.exports}a.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return a.d(t,{a:t}),t},a.d=(e,t)=>{for(var n in t)a.o(t,n)&&!a.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},a.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),a.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})};var i={};return(()=>{a.r(i),a.d(i,{default:()=>h});var e=a(120),t=a.n(e),n=a(297),r=a(347),o=a.n(r);function s(e,t,n,r,o,a,i){try{var s=e[a](i),l=s.value}catch(e){return void n(e)}s.done?t(l):Promise.resolve(l).then(r,o)}function l(e){return function(){var t=this,n=arguments;return new Promise((function(r,o){var a=e.apply(t,n);function i(e){s(a,r,o,i,l,"next",e)}function l(e){s(a,r,o,i,l,"throw",e)}i(void 0)}))}}function c(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var{createStore:u,connect:p,dispatch:d,getStore:m}=new(o());u({a:"9"});class f extends e.Component{constructor(){var e;super(...arguments),e=this,c(this,"onGetB",(()=>{try{n.message.info(this.props.$dispatch("b","getValue"))}catch(e){window.console.log(e.message)}})),c(this,"onSetB",(()=>{this.props.$dispatch("b","updateValue",Math.random().toFixed(2))})),c(this,"onSetG",l((function*(){yield e.props.$dispatch("store","updateUserName",Math.random()),n.message.success("更新完成"),e.props.$dispatch("store","abs")})))}render(){var{user:e}=this.props.$store,{a:r,$mounted:o,name:a="a"}=this.props;return t().createElement("div",null,t().createElement("p",{style:{fontSize:100}},a.toUpperCase()),t().createElement("div",{style:{display:"flex",flexDirection:"column"}},t().createElement("p",null,"全局值：",e.name),t().createElement("p",null,"组件值:",r),t().createElement("p",null,"B 组件加载完成：",o.includes("b")?"yes":"no"),t().createElement(n.Button,{onClick:this.onGetB},"获取 B 组件的值"),t().createElement(n.Button,{onClick:this.onSetB},"更新 B 组件的值"),t().createElement(n.Button,{onClick:this.onSetG},"更新全局值(异步)"),t().createElement(n.ConfigProvider,{locale:n.locales.zh_CN},t().createElement(n.DatePicker,null))))}}c(f,"getValue",(()=>m().a)),c(f,"updateValue",function(){var e=l((function*(e){yield new Promise((e=>setTimeout(e,1e3))),d({a:e},!0)}));return function(t){return e.apply(this,arguments)}}());const h=p("a")(f)})(),i})()));
//# sourceMappingURL=a.js.map