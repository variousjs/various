define(["react","react-dom/client"], function(__WEBPACK_EXTERNAL_MODULE_react__, __WEBPACK_EXTERNAL_MODULE_react_dom_client__) { return /******/ (function() { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/@babel/runtime/helpers/esm/extends.js":
/*!************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/extends.js ***!
  \************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ _extends; }
/* harmony export */ });
function _extends() {
  return _extends = Object.assign ? Object.assign.bind() : function (n) {
    for (var e = 1; e < arguments.length; e++) {
      var t = arguments[e];
      for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]);
    }
    return n;
  }, _extends.apply(null, arguments);
}


/***/ }),

/***/ "./node_modules/nycticorax/dist/index.js":
/*!***********************************************!*\
  !*** ./node_modules/nycticorax/dist/index.js ***!
  \***********************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

!function(t,e){ true?module.exports=e(__webpack_require__(/*! react */ "react")):0}(self,(t=>(()=>{"use strict";var e={294:(t,e,r)=>{r.d(e,{default:()=>c});var s=r(942),o=r(63),n=r.n(o);function i(t,e=new WeakMap){if("object"!=typeof t||null===t)return t;if(e.has(t))return e.get(t);const r=Array.isArray(t)?[]:{};e.set(t,r);const s=Reflect.ownKeys(t);for(const o of s)r[o]=i(t[o],e);return r}class c{constructor(){var t;(0,s.Z)(this,"state",void 0),(0,s.Z)(this,"listeners",void 0),(0,s.Z)(this,"emits",void 0),(0,s.Z)(this,"timer",void 0),(0,s.Z)(this,"onStateChange",void 0),(0,s.Z)(this,"getStore",void 0),(0,s.Z)(this,"createStore",(t=>{this.listeners=Reflect.ownKeys(t).reduce(((e,r)=>{const s=r;return this.state[s]=t[s],{...e,[r]:[]}}),{})})),(0,s.Z)(this,"subscribe",(t=>{const e={};return Reflect.ownKeys(t).forEach((r=>{const s=r;this.listeners[s]||(this.listeners[s]=[]),this.listeners[s].push(t[s]),e[s]=t[s]})),()=>{Reflect.ownKeys(e).forEach((t=>{const r=t;this.listeners[r]=this.listeners[r].filter((t=>t!==e[r]))}))}})),(0,s.Z)(this,"emit",((t,e)=>{this.emits={...this.emits,...t},e?this.trigger():(clearTimeout(this.timer),this.timer=setTimeout(this.trigger))})),(0,s.Z)(this,"dispatch",((t,...e)=>t({getStore:this.getStore,emit:t=>this.emit(t,!0)},...e))),(0,s.Z)(this,"trigger",(()=>{const t=this.emits,e=[],r=Reflect.ownKeys(t);for(let s=0;s<r.length;s+=1){const o=r[s];if(n()(this.state[o],t[o]))continue;const c=t[o],u=this.state[o];this.state[o]=i(t[o]),e.push({key:o,newValue:c,oldValue:u})}const s={};e.forEach((t=>{s[t.key]=[t.newValue,t.oldValue],this.listeners[t.key]&&this.listeners[t.key].forEach((e=>e(t.newValue,t.oldValue)))})),e.length&&this.onStateChange(s),this.emits={},this.timer=void 0})),this.state={},this.listeners={},this.emits={},this.timer=void 0,this.onStateChange=()=>null,this.getStore=(t=this.state,function(e){return e?i(t[e]):t})}set onChange(t){this.onStateChange=t}}},63:t=>{t.exports=function t(e,r){if(e===r)return!0;if(e&&r&&"object"==typeof e&&"object"==typeof r){if(e.constructor!==r.constructor)return!1;var s,o,n;if(Array.isArray(e)){if((s=e.length)!=r.length)return!1;for(o=s;0!=o--;)if(!t(e[o],r[o]))return!1;return!0}if(e.constructor===RegExp)return e.source===r.source&&e.flags===r.flags;if(e.valueOf!==Object.prototype.valueOf)return e.valueOf()===r.valueOf();if(e.toString!==Object.prototype.toString)return e.toString()===r.toString();if((s=(n=Object.keys(e)).length)!==Object.keys(r).length)return!1;for(o=s;0!=o--;)if(!Object.prototype.hasOwnProperty.call(r,n[o]))return!1;for(o=s;0!=o--;){var i=n[o];if(!t(e[i],r[i]))return!1}return!0}return e!=e&&r!=r}},250:e=>{e.exports=t},942:(t,e,r)=>{function s(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}r.d(e,{Z:()=>s})}},r={};function s(t){var o=r[t];if(void 0!==o)return o.exports;var n=r[t]={exports:{}};return e[t](n,n.exports,s),n.exports}s.n=t=>{var e=t&&t.__esModule?()=>t.default:()=>t;return s.d(e,{a:e}),e},s.d=(t,e)=>{for(var r in e)s.o(e,r)&&!s.o(t,r)&&Object.defineProperty(t,r,{enumerable:!0,get:e[r]})},s.o=(t,e)=>Object.prototype.hasOwnProperty.call(t,e);var o={};return(()=>{s.d(o,{default:()=>u});var t=s(942),e=s(294),r=s(250),n=s.n(r);const i=["name","prototype","length","propTypes","defaultProps","getDerivedStateFromProps","contextTypes","displayName"];class c extends e.default{constructor(...e){super(...e),(0,t.Z)(this,"connect",function(e){const{getStore:s,subscribe:o}=e;return function(...e){return function(c){class u extends r.Component{constructor(r){super(r),(0,t.Z)(this,"unsubscribe",void 0),(0,t.Z)(this,"state",{props:s()}),this.unsubscribe=o(e.reduce(((t,e)=>({...t,[e]:()=>{this.setState({props:s()})}})),{}))}componentWillUnmount(){this.unsubscribe()}render(){const{props:t}=this.state,e={...t,...this.props};return n().createElement(c,e)}}return Object.getOwnPropertyNames(c).forEach((t=>{const e=t;i.includes(t)||(u[e]=c[e])})),u}}}(this)),(0,t.Z)(this,"useStore",function(t){const{getStore:e,subscribe:s}=t;return function(...t){const[o,n]=(0,r.useState)(e());return(0,r.useLayoutEffect)((()=>s(t.reduce(((t,r)=>({...t,[r]:()=>{n((t=>({...t,[r]:e()[r]})))}})),{})))),o}}(this))}}const u=c})(),o.default})()));
//# sourceMappingURL=index.js.map

/***/ }),

/***/ "./src/core/config.ts":
/*!****************************!*\
  !*** ./src/core/config.ts ***!
  \****************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CONFIG_KEY: function() { return /* binding */ CONFIG_KEY; },
/* harmony export */   DEPENDENCIES_KEY: function() { return /* binding */ DEPENDENCIES_KEY; },
/* harmony export */   MESSAGE_KEY: function() { return /* binding */ MESSAGE_KEY; },
/* harmony export */   MOUNTED_COMPONENTS_KEY: function() { return /* binding */ MOUNTED_COMPONENTS_KEY; },
/* harmony export */   ROOT: function() { return /* binding */ ROOT; },
/* harmony export */   VUE_FUNCTION_OPTIONS: function() { return /* binding */ VUE_FUNCTION_OPTIONS; },
/* harmony export */   VUE_VERSION: function() { return /* binding */ VUE_VERSION; }
/* harmony export */ });
const MOUNTED_COMPONENTS_KEY = Symbol('MOUNTED_COMPONENTS');
const MESSAGE_KEY = Symbol('MESSAGE');
const CONFIG_KEY = Symbol('CONFIG');
const DEPENDENCIES_KEY = Symbol('DEPENDENCIES');
const ROOT = '#root';
const VUE_FUNCTION_OPTIONS = ['beforeCreate', 'created', 'beforeMount', 'mounted', 'beforeUpdate', 'updated', 'beforeUnmount', 'unmounted', 'errorCaptured', 'renderTracked', 'renderTriggered', 'activated', 'deactivated', 'setup', 'data', 'render'];
const VUE_VERSION = 3;

/***/ }),

/***/ "./src/core/connector.ts":
/*!*******************************!*\
  !*** ./src/core/connector.ts ***!
  \*******************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _default_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./default-component */ "./src/core/default-component.tsx");
/* harmony import */ var _helper__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./helper */ "./src/core/helper.ts");


class Connector {
  constructor() {
    this.loaderComponent = _default_component__WEBPACK_IMPORTED_MODULE_0__.Loader;
    this.errorComponent = _default_component__WEBPACK_IMPORTED_MODULE_0__.Error;
    this.storeActions = {};
    this.componentActions = {};
    this.i18nConfigs = {};
    this.middlewares = {};
  }
  setMiddlewares(m) {
    this.middlewares = m;
  }
  getMiddlewares() {
    return this.middlewares;
  }
  setI18nConfig(moduleDefined, config) {
    const name = (0,_helper__WEBPACK_IMPORTED_MODULE_1__.getNameWithModule)(moduleDefined);
    this.i18nConfigs[name] = {
      ...this.i18nConfigs[name],
      ...config
    };
  }
  getI18nConfig(moduleDefined) {
    const name = (0,_helper__WEBPACK_IMPORTED_MODULE_1__.getNameWithModule)(moduleDefined);
    return this.i18nConfigs[name];
  }
  setGlobalI18nConfig(config) {
    this.globalI18nConfig = {
      ...this.globalI18nConfig,
      ...config
    };
  }
  getGlobalI18nConfig() {
    return this.globalI18nConfig;
  }
  setComponentActions(moduleDefined, actions) {
    const name = (0,_helper__WEBPACK_IMPORTED_MODULE_1__.getNameWithModule)(moduleDefined);
    this.componentActions[name] = actions;
  }
  deleteComponentActions(moduleDefined) {
    const name = (0,_helper__WEBPACK_IMPORTED_MODULE_1__.getNameWithModule)(moduleDefined);
    delete this.componentActions[name];
  }
  getComponentActions(moduleDefined) {
    const name = (0,_helper__WEBPACK_IMPORTED_MODULE_1__.getNameWithModule)(moduleDefined);
    return this.componentActions[name];
  }
  setStoreActions(actions) {
    this.storeActions = actions;
  }
  getStoreActions() {
    return this.storeActions;
  }
  setLoaderComponent(loaderComponent) {
    this.loaderComponent = loaderComponent;
  }
  getLoaderComponent() {
    return this.loaderComponent;
  }
  setErrorComponent(errorComponent) {
    this.errorComponent = errorComponent;
  }
  getErrorComponent() {
    return this.errorComponent;
  }
}
/* harmony default export */ __webpack_exports__["default"] = (new Connector());

/***/ }),

/***/ "./src/core/create-component.tsx":
/*!***************************************!*\
  !*** ./src/core/create-component.tsx ***!
  \***************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _react_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./react-component */ "./src/core/react-component.tsx");
/* harmony import */ var _vue_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./vue-component */ "./src/core/vue-component.tsx");
/* harmony import */ var _error_boundary__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./error-boundary */ "./src/core/error-boundary.tsx");




const createComponent = (config, storeKeys) => {
  const {
    name,
    module,
    url,
    type = 'react'
  } = config;
  const C = (type === 'vue3' ? _vue_component__WEBPACK_IMPORTED_MODULE_2__["default"] : _react_component__WEBPACK_IMPORTED_MODULE_1__["default"])({
    name,
    module,
    url,
    watchKeys: storeKeys
  });
  const component = props => {
    const {
      $silent,
      $ref,
      ...rest
    } = props || {};
    const nextProps = {
      $componentProps: rest,
      $silent,
      $ref
    };
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_error_boundary__WEBPACK_IMPORTED_MODULE_3__["default"], {
      name: name,
      module: module
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(C, nextProps));
  };
  component.displayName = 'various-creator';
  return component;
};
/* harmony default export */ __webpack_exports__["default"] = (createComponent);

/***/ }),

/***/ "./src/core/create-module.ts":
/*!***********************************!*\
  !*** ./src/core/create-module.ts ***!
  \***********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./config */ "./src/core/config.ts");
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./store */ "./src/core/store.ts");
/* harmony import */ var _connector__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./connector */ "./src/core/connector.ts");
/* harmony import */ var _helper__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./helper */ "./src/core/helper.ts");




const createModule = (config, logError = true) => {
  const dependencies = (0,_store__WEBPACK_IMPORTED_MODULE_1__.getStore)(_config__WEBPACK_IMPORTED_MODULE_0__.DEPENDENCIES_KEY);
  const middlewares = _connector__WEBPACK_IMPORTED_MODULE_2__["default"].getMiddlewares();
  const {
    name,
    module,
    url
  } = config;
  const loadStart = +new Date();
  const logOnError = e => {
    if (logError) {
      (0,_helper__WEBPACK_IMPORTED_MODULE_3__.onError)(e);
    }
  };
  if (url) {
    (0,_helper__WEBPACK_IMPORTED_MODULE_3__.resetDependencyConfig)(name, url);
  }
  return new Promise((resolve, reject) => {
    if (!url && !dependencies[name]) {
      const error = new _helper__WEBPACK_IMPORTED_MODULE_3__.VariousError({
        name,
        module,
        type: 'NOT_DEFINED',
        originalError: new Error(`module "${name}" not defined`)
      });
      logOnError(error);
      reject(error);
      return;
    }
    window.requirejs([name], C => {
      const loadEnd = +new Date();
      middlewares?.onLoad?.({
        name,
        module,
        loadStart,
        loadEnd,
        beenLoaded: (0,_helper__WEBPACK_IMPORTED_MODULE_3__.isModuleLoaded)(name)
      });
      if (!C) {
        const error = new _helper__WEBPACK_IMPORTED_MODULE_3__.VariousError({
          name,
          module,
          type: 'INVALID_MODULE',
          originalError: new Error(`module "${name}" invalid`)
        });
        (0,_helper__WEBPACK_IMPORTED_MODULE_3__.resetDependencyConfig)(name);
        logOnError(error);
        reject(error);
        return;
      }
      const defaultModule = 'default' in C ? C.default : C;
      const actualModule = !module ? defaultModule : C[module];
      if (actualModule === undefined && module) {
        const error = new _helper__WEBPACK_IMPORTED_MODULE_3__.VariousError({
          name,
          module,
          type: 'SUBMODULE_NOT_DEFINED',
          originalError: new Error(`submodule "${module}" not defined`)
        });
        (0,_helper__WEBPACK_IMPORTED_MODULE_3__.resetDependencyConfig)(name);
        logOnError(error);
        reject(error);
        return;
      }
      resolve(actualModule);
    }, e => {
      const [requireModule] = e.requireModules;
      (0,_helper__WEBPACK_IMPORTED_MODULE_3__.resetDependencyConfig)(name, url);
      (0,_helper__WEBPACK_IMPORTED_MODULE_3__.resetDependencyConfig)(requireModule);
      let errorType = 'LOADING_ERROR';
      if (requireModule !== name) {
        errorType = 'SUBMODULE_LOADING_ERROR';
      }
      if (!e.message.includes('https://requirejs.org/docs/errors.html')) {
        errorType = requireModule === name ? 'SCRIPT_ERROR' : 'SUBMODULE_SCRIPT_ERROR';
      }
      const error = new _helper__WEBPACK_IMPORTED_MODULE_3__.VariousError({
        name,
        module: requireModule === name ? undefined : requireModule,
        type: errorType,
        originalError: e
      });
      logOnError(error);
      reject(error);
    });
  });
};
/* harmony default export */ __webpack_exports__["default"] = (createModule);

/***/ }),

/***/ "./src/core/default-component.tsx":
/*!****************************************!*\
  !*** ./src/core/default-component.tsx ***!
  \****************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Container: function() { return /* binding */ Container; },
/* harmony export */   Error: function() { return /* binding */ Error; },
/* harmony export */   Loader: function() { return /* binding */ Loader; }
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

const Loader = () => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, "Loading");
const Error = ({
  $error,
  $reload
}) => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, `[${$error.type}] ${$error.message}`), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
  type: "button",
  onClick: $reload
}, "Reload"));
const Container = () => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, "App Container is not defined");

/***/ }),

/***/ "./src/core/dispatch.ts":
/*!******************************!*\
  !*** ./src/core/dispatch.ts ***!
  \******************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _connector__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./connector */ "./src/core/connector.ts");
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./store */ "./src/core/store.ts");
/* harmony import */ var _helper__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./helper */ "./src/core/helper.ts");
/* harmony import */ var _logger__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./logger */ "./src/core/logger.ts");




const createDispatch = moduleDefined => async function (params) {
  const middlewares = _connector__WEBPACK_IMPORTED_MODULE_0__["default"].getMiddlewares();
  const logger = (0,_logger__WEBPACK_IMPORTED_MODULE_3__["default"])(moduleDefined);
  let {
    name,
    module,
    action,
    value
  } = params;
  if (middlewares?.onDispatch) {
    const check = await middlewares.onDispatch({
      target: {
        name,
        module
      },
      action,
      value,
      trigger: moduleDefined
    });
    if (check === false) {
      logger.warn('blocked by middleware', 'DISPATCH');
      return Promise.resolve();
    }
    if (check !== true) {
      name = check.target.name;
      module = check.target.module;
      action = check.action;
      value = check.value;
    }
  }
  if (name === 'app') {
    const storeActions = _connector__WEBPACK_IMPORTED_MODULE_0__["default"].getStoreActions();
    const storeAction = storeActions[action];
    if (!storeAction) {
      const errorMessage = `action "${action}" is not present`;
      const error = new _helper__WEBPACK_IMPORTED_MODULE_2__.VariousError({
        ...moduleDefined,
        type: 'DISPATCH',
        originalError: new Error(errorMessage)
      });
      (0,_helper__WEBPACK_IMPORTED_MODULE_2__.onError)(error);
      throw error;
    }
    return (0,_store__WEBPACK_IMPORTED_MODULE_1__.dispatch)(storeAction, value, moduleDefined);
  }
  const componentActions = _connector__WEBPACK_IMPORTED_MODULE_0__["default"].getComponentActions({
    name,
    module
  });
  if (!componentActions) {
    const errorMessage = 'component is not ready';
    const error = new _helper__WEBPACK_IMPORTED_MODULE_2__.VariousError({
      ...moduleDefined,
      type: 'DISPATCH',
      originalError: new Error(errorMessage)
    });
    (0,_helper__WEBPACK_IMPORTED_MODULE_2__.onError)(error);
    throw error;
  }
  const componentAction = componentActions[action];
  if (!componentAction) {
    const errorMessage = `action "${action}" is not present`;
    const error = new _helper__WEBPACK_IMPORTED_MODULE_2__.VariousError({
      ...moduleDefined,
      type: 'DISPATCH',
      originalError: new Error(errorMessage)
    });
    (0,_helper__WEBPACK_IMPORTED_MODULE_2__.onError)(error);
    throw error;
  }
  return Promise.resolve(componentAction(value, moduleDefined));
};
/* harmony default export */ __webpack_exports__["default"] = (createDispatch);

/***/ }),

/***/ "./src/core/error-boundary.tsx":
/*!*************************************!*\
  !*** ./src/core/error-boundary.tsx ***!
  \*************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _helper__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./helper */ "./src/core/helper.ts");
/* harmony import */ var _connector__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./connector */ "./src/core/connector.ts");
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./store */ "./src/core/store.ts");




class ErrorBoundary extends react__WEBPACK_IMPORTED_MODULE_0__.Component {
  static displayName = 'various-error-boundary';
  state = {
    hasError: false
  };
  componentDidCatch(e) {
    const {
      name,
      module
    } = this.props;
    const error = e instanceof _helper__WEBPACK_IMPORTED_MODULE_1__.VariousError ? e : new _helper__WEBPACK_IMPORTED_MODULE_1__.VariousError({
      name,
      module,
      type: name === 'app' ? 'APP_ERROR' : 'SCRIPT_ERROR',
      originalError: e
    });
    this.setState({
      hasError: true
    });
    this.error = error;
    (0,_helper__WEBPACK_IMPORTED_MODULE_1__.onError)(error);
    (0,_helper__WEBPACK_IMPORTED_MODULE_1__.resetDependencyConfig)(this.props.name);
    (0,_helper__WEBPACK_IMPORTED_MODULE_1__.updateUnMountComponent)({
      name,
      module
    });
  }
  reload = () => {
    this.error = undefined;
    this.setState({
      hasError: false
    });
  };
  render() {
    const {
      name,
      module
    } = this.props;
    const ErrorNode = _connector__WEBPACK_IMPORTED_MODULE_2__["default"].getErrorComponent();
    const store = (0,_store__WEBPACK_IMPORTED_MODULE_3__.getUserStore)();
    if (this.state.hasError) {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(ErrorNode, {
        $name: name,
        $module: module,
        $reload: this.reload,
        $store: store,
        $error: this.error
      });
    }
    return this.props.children;
  }
}
/* harmony default export */ __webpack_exports__["default"] = (ErrorBoundary);

/***/ }),

/***/ "./src/core/helper.ts":
/*!****************************!*\
  !*** ./src/core/helper.ts ***!
  \****************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   VariousError: function() { return /* binding */ VariousError; },
/* harmony export */   checkReactComponent: function() { return /* binding */ checkReactComponent; },
/* harmony export */   checkVueComponent: function() { return /* binding */ checkVueComponent; },
/* harmony export */   defineDependencies: function() { return /* binding */ defineDependencies; },
/* harmony export */   getConfig: function() { return /* binding */ getConfig; },
/* harmony export */   getMountedComponents: function() { return /* binding */ getMountedComponents; },
/* harmony export */   getNameWithModule: function() { return /* binding */ getNameWithModule; },
/* harmony export */   isModuleLoaded: function() { return /* binding */ isModuleLoaded; },
/* harmony export */   isPromiseLike: function() { return /* binding */ isPromiseLike; },
/* harmony export */   onComponentMounted: function() { return /* binding */ onComponentMounted; },
/* harmony export */   onError: function() { return /* binding */ onError; },
/* harmony export */   parseComponentActions: function() { return /* binding */ parseComponentActions; },
/* harmony export */   preloadModules: function() { return /* binding */ preloadModules; },
/* harmony export */   resetDependencyConfig: function() { return /* binding */ resetDependencyConfig; },
/* harmony export */   updateMountedComponent: function() { return /* binding */ updateMountedComponent; },
/* harmony export */   updateUnMountComponent: function() { return /* binding */ updateUnMountComponent; }
/* harmony export */ });
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./store */ "./src/core/store.ts");
/* harmony import */ var _logger__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./logger */ "./src/core/logger.ts");
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./config */ "./src/core/config.ts");
/* harmony import */ var _connector__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./connector */ "./src/core/connector.ts");
/* harmony import */ var _message__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./message */ "./src/core/message.ts");
/* harmony import */ var _i18n__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./i18n */ "./src/core/i18n.ts");






const getUrlHash = url => `${url}?${+new Date()}`;
const hasModule = (modules, module) => modules.some(c => c.name === module.name && c.module === module.module);
const preloadModules = name => new Promise((resolve, reject) => {
  const names = typeof name === 'string' ? [name] : name;
  window.requirejs(names, resolve, reject);
});
const defineDependencies = deps => {
  const dependencies = (0,_store__WEBPACK_IMPORTED_MODULE_0__.getStore)(_config__WEBPACK_IMPORTED_MODULE_2__.DEPENDENCIES_KEY);
  const next = {};
  Object.keys(deps).forEach(name => {
    next[name] = `${deps[name]}#${name}`;
    window.requirejs.undef(name);
  });
  window.requirejs.config({
    paths: next
  });
  (0,_store__WEBPACK_IMPORTED_MODULE_0__.emit)({
    [_config__WEBPACK_IMPORTED_MODULE_2__.DEPENDENCIES_KEY]: {
      ...dependencies,
      ...next
    }
  }, true);
};
const isModuleLoaded = name => window.requirejs.specified(name) && !!window.requirejs.s.contexts._.defined[name];
const getMountedComponents = () => (0,_store__WEBPACK_IMPORTED_MODULE_0__.getStore)(_config__WEBPACK_IMPORTED_MODULE_2__.MOUNTED_COMPONENTS_KEY);
const onComponentMounted = (module, callback) => {
  const modules = Array.isArray(module) ? module : [module];
  if (modules.every(m => hasModule(getMountedComponents(), m))) {
    callback();
  }
  const unSubscribe = (0,_store__WEBPACK_IMPORTED_MODULE_0__.subscribe)({
    [_config__WEBPACK_IMPORTED_MODULE_2__.MOUNTED_COMPONENTS_KEY](value) {
      const mountedModules = value;
      if (modules.every(n => hasModule(mountedModules, n))) {
        unSubscribe();
        callback();
      }
    }
  });
  return unSubscribe;
};
const resetDependencyConfig = (name, url) => {
  const dependencies = (0,_store__WEBPACK_IMPORTED_MODULE_0__.getStore)(_config__WEBPACK_IMPORTED_MODULE_2__.DEPENDENCIES_KEY);

  // ignore multiple custom module url
  if (url && window.requirejs.defined(name)) {
    return;
  }
  let path = getUrlHash(dependencies[name]);

  // custom module url, but module loaded error
  if (url) {
    path = `${url}#${name}`;
    try {
      const {
        registry
      } = window.requirejs.s.contexts._;
      if (registry?.[name].error) {
        path = getUrlHash(url);
      }
    } catch (e) {
      // ignore
    }
  }
  window.requirejs.undef(name);
  window.requirejs.config({
    paths: {
      [name]: path
    }
  });
};
const getNameWithModule = moduleDefined => {
  const {
    name,
    module
  } = moduleDefined;
  return module ? `${name}.${module}` : name;
};
function getConfig() {
  return (0,_store__WEBPACK_IMPORTED_MODULE_0__.getStore)(_config__WEBPACK_IMPORTED_MODULE_2__.CONFIG_KEY);
}
const onError = e => {
  const {
    name,
    module,
    type
  } = e;
  const logger = (0,_logger__WEBPACK_IMPORTED_MODULE_1__["default"])({
    name,
    module
  });
  logger.error(e, type);
};
class VariousError extends Error {
  constructor(data) {
    super(data.originalError.message);
    this.type = data.type;
    this.originalError = data.originalError;
    this.module = data.module;
    this.name = data.name;
  }
}
function checkReactComponent(component, moduleDefined) {
  return new Promise((reslove, reject) => {
    if (component.$$typeof || component.prototype?.isReactComponent || typeof component === 'function') {
      reslove();
      return;
    }
    reject(new VariousError({
      ...moduleDefined,
      originalError: new Error('not a valid React component'),
      type: 'INVALID_COMPONENT'
    }));
  });
}
function isPromiseLike(value) {
  return value != null && typeof value.then === 'function';
}
function checkVueComponent(component, moduleDefined) {
  const versionRegex = new RegExp(`^${_config__WEBPACK_IMPORTED_MODULE_2__.VUE_VERSION}\\.`);
  return new Promise((resolve, reject) => {
    window.requirejs(['vue'], Vue => {
      if (!versionRegex.test(Vue.version)) {
        reject(new Error(`Vue ${_config__WEBPACK_IMPORTED_MODULE_2__.VUE_VERSION}+ required, detected an incompatible version`));
      }
      if (typeof component?.render === 'function' || typeof component?.setup === 'function') {
        resolve();
        return;
      }
      reject(new VariousError({
        ...moduleDefined,
        originalError: new Error('not a valid Vue component'),
        type: 'INVALID_COMPONENT'
      }));
    });
  });
}
function parseComponentActions(params) {
  const {
    componentNode,
    name,
    module,
    type,
    i18nUpdate
  } = params;
  const actions = {};
  let onMessageAction;
  let i18nAction;
  Object.getOwnPropertyNames(componentNode).forEach(method => {
    if (typeof componentNode[method] !== 'function') {
      return;
    }
    if (method === '$onMessage') {
      onMessageAction = componentNode[method];
      return;
    }
    if (method === '$i18n') {
      i18nAction = componentNode[method];
      return;
    }
    if (type === 'vue3' && _config__WEBPACK_IMPORTED_MODULE_2__.VUE_FUNCTION_OPTIONS.includes(method)) {
      return;
    }
    actions[method] = componentNode[method];
  });
  if (i18nAction) {
    (0,_i18n__WEBPACK_IMPORTED_MODULE_5__.createI18nConfig)(i18nAction, {
      name,
      module
    }, i18nUpdate);
  }
  _connector__WEBPACK_IMPORTED_MODULE_3__["default"].setComponentActions({
    name,
    module
  }, actions);
  if (onMessageAction) {
    return (0,_message__WEBPACK_IMPORTED_MODULE_4__.createOnMessage)({
      name,
      module
    }, onMessageAction);
  }
  return () => null;
}
function updateMountedComponent(moduleDefined) {
  const mountedComponents = getMountedComponents();
  if (!hasModule(mountedComponents, moduleDefined)) {
    mountedComponents.push(moduleDefined);
  }
  (0,_store__WEBPACK_IMPORTED_MODULE_0__.emit)({
    [_config__WEBPACK_IMPORTED_MODULE_2__.MOUNTED_COMPONENTS_KEY]: mountedComponents
  }, true);
}
function updateUnMountComponent(moduleDefined) {
  const {
    name,
    module
  } = moduleDefined;
  let mountedComponents = getMountedComponents();
  mountedComponents = mountedComponents.filter(item => item.name !== name || item.module !== module);
  (0,_store__WEBPACK_IMPORTED_MODULE_0__.emit)({
    [_config__WEBPACK_IMPORTED_MODULE_2__.MOUNTED_COMPONENTS_KEY]: mountedComponents
  }, true);
  _connector__WEBPACK_IMPORTED_MODULE_3__["default"].deleteComponentActions({
    name,
    module
  });
}

/***/ }),

/***/ "./src/core/i18n.ts":
/*!**************************!*\
  !*** ./src/core/i18n.ts ***!
  \**************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   createI18n: function() { return /* binding */ createI18n; },
/* harmony export */   createI18nConfig: function() { return /* binding */ createI18nConfig; }
/* harmony export */ });
/* harmony import */ var _connector__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./connector */ "./src/core/connector.ts");
/* harmony import */ var _helper__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./helper */ "./src/core/helper.ts");
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./store */ "./src/core/store.ts");



function createI18nConfig(method, moduleDefined, callback) {
  if (!method) {
    return;
  }
  const i18nConfig = method();
  if (!(0,_helper__WEBPACK_IMPORTED_MODULE_1__.isPromiseLike)(i18nConfig)) {
    if (moduleDefined) {
      _connector__WEBPACK_IMPORTED_MODULE_0__["default"].setI18nConfig(moduleDefined, i18nConfig);
    } else {
      _connector__WEBPACK_IMPORTED_MODULE_0__["default"].setGlobalI18nConfig(i18nConfig);
    }
    return;
  }
  if (moduleDefined) {
    _connector__WEBPACK_IMPORTED_MODULE_0__["default"].setI18nConfig(moduleDefined, {
      loading: true,
      lngStoreKey: '',
      resources: {}
    });
  } else {
    _connector__WEBPACK_IMPORTED_MODULE_0__["default"].setGlobalI18nConfig({
      loading: true,
      lngStoreKey: '',
      resources: {}
    });
  }
  i18nConfig.then(res => {
    if (moduleDefined) {
      _connector__WEBPACK_IMPORTED_MODULE_0__["default"].setI18nConfig(moduleDefined, {
        ...res,
        loading: false
      });
      callback?.();
      return;
    }
    const locale = (0,_store__WEBPACK_IMPORTED_MODULE_2__.getStore)(res.lngStoreKey);
    (0,_store__WEBPACK_IMPORTED_MODULE_2__.emit)({
      [res.lngStoreKey]: undefined
    }, true);
    (0,_store__WEBPACK_IMPORTED_MODULE_2__.emit)({
      [res.lngStoreKey]: locale
    }, true);
    _connector__WEBPACK_IMPORTED_MODULE_0__["default"].setGlobalI18nConfig({
      ...res,
      loading: false
    });
  }).catch(e => {
    (0,_helper__WEBPACK_IMPORTED_MODULE_1__.onError)(new _helper__WEBPACK_IMPORTED_MODULE_1__.VariousError({
      name: moduleDefined?.name || 'app',
      module: moduleDefined?.module,
      type: 'I18N',
      originalError: e
    }));
  });
}
function createI18n(moduleDefined, updater) {
  const ctx = (key, params, defaultString) => {
    const i18nConfig = _connector__WEBPACK_IMPORTED_MODULE_0__["default"].getI18nConfig(moduleDefined) || _connector__WEBPACK_IMPORTED_MODULE_0__["default"].getGlobalI18nConfig();
    let defaultText = defaultString;
    if (defaultText === undefined) {
      defaultText = typeof params === 'string' ? params : key;
    }
    if (!i18nConfig) {
      (0,_helper__WEBPACK_IMPORTED_MODULE_1__.onError)(new _helper__WEBPACK_IMPORTED_MODULE_1__.VariousError({
        ...moduleDefined,
        type: 'I18N',
        originalError: new Error('config not exist')
      }));
      return defaultText;
    }
    if (i18nConfig.loading) {
      return defaultText;
    }
    const {
      lngStoreKey,
      resources
    } = i18nConfig;
    const locale = (0,_store__WEBPACK_IMPORTED_MODULE_2__.getStore)(lngStoreKey);
    if (lngStoreKey === undefined || locale === undefined) {
      (0,_helper__WEBPACK_IMPORTED_MODULE_1__.onError)(new _helper__WEBPACK_IMPORTED_MODULE_1__.VariousError({
        ...moduleDefined,
        type: 'I18N',
        originalError: new Error('locale key not defined')
      }));
      return defaultText;
    }
    const resource = resources?.[locale];
    if (!resource) {
      (0,_helper__WEBPACK_IMPORTED_MODULE_1__.onError)(new _helper__WEBPACK_IMPORTED_MODULE_1__.VariousError({
        ...moduleDefined,
        type: 'I18N',
        originalError: new Error(`locale resource \`${locale}\` not exist`)
      }));
      return defaultText;
    }
    if (!resource[key]) {
      (0,_helper__WEBPACK_IMPORTED_MODULE_1__.onError)(new _helper__WEBPACK_IMPORTED_MODULE_1__.VariousError({
        ...moduleDefined,
        type: 'I18N',
        originalError: new Error(`locale key \`${key}\` not exist`)
      }));
      return defaultText;
    }
    const text = resource[key];
    if (!params || typeof params === 'string' || Object.prototype.toString.call(params) !== '[object Object]') {
      return text;
    }
    const args = Object.keys(params);
    if (!args.length) {
      return text;
    }
    return args.reduce((next, arg) => {
      const regex = new RegExp(`{\\s*${arg}\\s*}`, 'g');
      return next.replace(regex, params[arg].toString());
    }, text);
  };
  ctx.update = (config, type) => {
    const i18nConfig = type === 'app' ? _connector__WEBPACK_IMPORTED_MODULE_0__["default"].getGlobalI18nConfig() : _connector__WEBPACK_IMPORTED_MODULE_0__["default"].getI18nConfig(moduleDefined);
    const next = {
      ...i18nConfig,
      ...config
    };
    if (type === 'app') {
      _connector__WEBPACK_IMPORTED_MODULE_0__["default"].setGlobalI18nConfig(next);
    } else {
      _connector__WEBPACK_IMPORTED_MODULE_0__["default"].setI18nConfig(moduleDefined, next);
    }
    updater();
  };
  return ctx;
}

/***/ }),

/***/ "./src/core/logger.ts":
/*!****************************!*\
  !*** ./src/core/logger.ts ***!
  \****************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _connector__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./connector */ "./src/core/connector.ts");
/* harmony import */ var _helper__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./helper */ "./src/core/helper.ts");


const logger = args => {
  const middlewares = _connector__WEBPACK_IMPORTED_MODULE_0__["default"].getMiddlewares();
  const canLog = middlewares?.onLog?.(args);
  if (canLog === false) {
    return;
  }
  const colorMap = {
    info: 'blue',
    warn: 'orange',
    error: 'red'
  };
  const color = colorMap[args.level];
  const params = [`%c ${(0,_helper__WEBPACK_IMPORTED_MODULE_1__.getNameWithModule)(args)} `, `background:${color};border:1px solid ${color};padding:1px;border-radius:2px 0 0 2px;color: #fff;`];
  if (args.type) {
    params[0] = `${params[0]}%c ${args.type} %c`;
    params.push(`border:1px solid ${color};padding:1px;border-radius:0 2px 2px 0;color:${color};`, 'background:transparent');
  }
  if (args.level !== 'info') {
    params[0] = ` ${params[0]}`;
  }
  window.console[args.level](...params, args.message);
};
const createLogger = moduleDefined => ({
  info(message, type) {
    logger({
      ...moduleDefined,
      level: 'info',
      type,
      message
    });
  },
  warn(message, type) {
    logger({
      ...moduleDefined,
      level: 'warn',
      type,
      message
    });
  },
  error(message, type) {
    const middlewares = _connector__WEBPACK_IMPORTED_MODULE_0__["default"].getMiddlewares();
    const error = message instanceof _helper__WEBPACK_IMPORTED_MODULE_1__.VariousError ? message : new _helper__WEBPACK_IMPORTED_MODULE_1__.VariousError({
      ...moduleDefined,
      type: type || 'unknow',
      originalError: message instanceof Error ? message : new Error(message)
    });
    middlewares?.onError?.(error);
    logger({
      ...moduleDefined,
      level: 'error',
      type,
      message
    });
  }
});
/* harmony default export */ __webpack_exports__["default"] = (createLogger);

/***/ }),

/***/ "./src/core/message.ts":
/*!*****************************!*\
  !*** ./src/core/message.ts ***!
  \*****************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   createOnMessage: function() { return /* binding */ createOnMessage; },
/* harmony export */   createPostMessage: function() { return /* binding */ createPostMessage; }
/* harmony export */ });
/* harmony import */ var _connector__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./connector */ "./src/core/connector.ts");
/* harmony import */ var _logger__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./logger */ "./src/core/logger.ts");
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./store */ "./src/core/store.ts");
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./config */ "./src/core/config.ts");




const createPostMessage = moduleDefined => async (event, value) => {
  const middlewares = _connector__WEBPACK_IMPORTED_MODULE_0__["default"].getMiddlewares();
  const logger = (0,_logger__WEBPACK_IMPORTED_MODULE_1__["default"])(moduleDefined);
  let next = {
    trigger: moduleDefined,
    event,
    value
  };
  if (middlewares?.onMessage) {
    const check = await middlewares.onMessage(next);
    if (check === false) {
      logger.warn('blocked by middleware', 'POST_MESSAGE');
      return;
    }
    if (check !== true) {
      next = {
        ...next,
        ...check
      };
    }
  }
  (0,_store__WEBPACK_IMPORTED_MODULE_2__.emit)({
    [_config__WEBPACK_IMPORTED_MODULE_3__.MESSAGE_KEY]: {
      timestamp: +new Date(),
      event: next.event,
      trigger: moduleDefined,
      value: next.value
    }
  });
};
const createOnMessage = (moduleDefined, onMessage) => (0,_store__WEBPACK_IMPORTED_MODULE_2__.subscribe)({
  [_config__WEBPACK_IMPORTED_MODULE_3__.MESSAGE_KEY](v) {
    const {
      trigger,
      value,
      event
    } = v;
    if (moduleDefined.name !== trigger.name || moduleDefined.module !== trigger.module) {
      onMessage({
        event,
        value,
        trigger
      });
    }
  }
});

/***/ }),

/***/ "./src/core/react-component.tsx":
/*!**************************************!*\
  !*** ./src/core/react-component.tsx ***!
  \**************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _helper__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./helper */ "./src/core/helper.ts");
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./store */ "./src/core/store.ts");
/* harmony import */ var _connector__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./connector */ "./src/core/connector.ts");
/* harmony import */ var _message__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./message */ "./src/core/message.ts");
/* harmony import */ var _dispatch__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./dispatch */ "./src/core/dispatch.ts");
/* harmony import */ var _logger__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./logger */ "./src/core/logger.ts");
/* harmony import */ var _i18n__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./i18n */ "./src/core/i18n.ts");
/* harmony import */ var _create_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./create-module */ "./src/core/create-module.ts");










function reactComponent(config) {
  const {
    name,
    module,
    url,
    watchKeys,
    onMounted
  } = config;
  const storeKeys = watchKeys || Object.keys((0,_store__WEBPACK_IMPORTED_MODULE_3__.getStore)());
  class R extends react__WEBPACK_IMPORTED_MODULE_1__.Component {
    static displayName = 'various-react-component';
    state = {
      componentReady: false,
      isError: false
    };
    unSubscribeMessage = () => null;
    componentDidMount() {
      this.mountComponent();
    }
    componentWillUnmount() {
      this.error = undefined;
      this.ComponentNode = null;
      this.isUnMounted = true;
      this.unSubscribeMessage();
      (0,_helper__WEBPACK_IMPORTED_MODULE_2__.updateUnMountComponent)({
        name,
        module
      });
    }
    mountComponent = async () => {
      try {
        const componentNode = await (0,_create_module__WEBPACK_IMPORTED_MODULE_9__["default"])({
          name,
          module,
          url
        }, false);
        if (this.isUnMounted) {
          return;
        }
        await (0,_helper__WEBPACK_IMPORTED_MODULE_2__.checkReactComponent)(componentNode, {
          name,
          module
        });
        componentNode.displayName = (0,_helper__WEBPACK_IMPORTED_MODULE_2__.getNameWithModule)({
          name,
          module
        });
        (0,_helper__WEBPACK_IMPORTED_MODULE_2__.updateMountedComponent)({
          name,
          module
        });
        this.unSubscribeMessage = (0,_helper__WEBPACK_IMPORTED_MODULE_2__.parseComponentActions)({
          componentNode,
          name,
          module,
          i18nUpdate: () => this.forceUpdate()
        });
        this.ComponentNode = componentNode;
        this.setState({
          componentReady: true
        });
        onMounted?.();
      } catch (e) {
        if (this.isUnMounted) {
          return;
        }
        this.error = e;
        this.setState({
          componentReady: true,
          isError: true
        });
      }
    };
    $postMessage = (0,_message__WEBPACK_IMPORTED_MODULE_5__.createPostMessage)({
      name,
      module
    });
    $dispatch = (0,_dispatch__WEBPACK_IMPORTED_MODULE_6__["default"])({
      name,
      module
    });
    $t = (0,_i18n__WEBPACK_IMPORTED_MODULE_8__.createI18n)({
      name,
      module
    }, () => this.forceUpdate());
    $logger = (0,_logger__WEBPACK_IMPORTED_MODULE_7__["default"])({
      name,
      module
    });
    render() {
      const LoaderNode = _connector__WEBPACK_IMPORTED_MODULE_4__["default"].getLoaderComponent();
      const {
        $silent,
        $componentProps,
        $ref
      } = this.props;
      const {
        componentReady,
        isError
      } = this.state;
      const store = (0,_store__WEBPACK_IMPORTED_MODULE_3__.getUserStore)();
      const ComponentNode = this.ComponentNode;
      if (isError) {
        throw this.error;
      }
      if (!componentReady) {
        if ($silent || (0,_helper__WEBPACK_IMPORTED_MODULE_2__.isModuleLoaded)(name)) {
          return null;
        }
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(LoaderNode, {
          $name: name,
          $module: module,
          $store: store
        });
      }
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(ComponentNode, (0,_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, $componentProps, {
        $dispatch: this.$dispatch,
        $store: store,
        $postMessage: this.$postMessage,
        $t: this.$t,
        $logger: this.$logger,
        ref: $ref
      }));
    }
  }
  const Connected = (0,_store__WEBPACK_IMPORTED_MODULE_3__.connect)(...storeKeys)(R);
  Connected.displayName = 'various-connector';
  return Connected;
}
/* harmony default export */ __webpack_exports__["default"] = (reactComponent);

/***/ }),

/***/ "./src/core/render-component.tsx":
/*!***************************************!*\
  !*** ./src/core/render-component.tsx ***!
  \***************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_dom_client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom/client */ "react-dom/client");
/* harmony import */ var react_dom_client__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_dom_client__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _react_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./react-component */ "./src/core/react-component.tsx");
/* harmony import */ var _vue_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./vue-component */ "./src/core/vue-component.tsx");
/* harmony import */ var _helper__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./helper */ "./src/core/helper.ts");





const renderComponent = ({
  name,
  module,
  url,
  target,
  props,
  type = 'react',
  renderNode,
  onMounted
}) => {
  const C = (type === 'vue3' ? _vue_component__WEBPACK_IMPORTED_MODULE_3__["default"] : _react_component__WEBPACK_IMPORTED_MODULE_2__["default"])({
    name,
    module,
    url,
    onMounted
  });
  try {
    const root = (0,react_dom_client__WEBPACK_IMPORTED_MODULE_1__.createRoot)(target);
    const {
      $silent,
      $ref,
      ...rest
    } = props || {};
    const nextProps = {
      $componentProps: rest,
      $silent,
      $ref
    };
    const node = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(C, nextProps);
    root.render(renderNode ? renderNode(node) : node);
    return () => new Promise(resolve => {
      setTimeout(() => {
        root.unmount();
        resolve();
      });
    });
  } catch (e) {
    (0,_helper__WEBPACK_IMPORTED_MODULE_4__.onError)(new _helper__WEBPACK_IMPORTED_MODULE_4__.VariousError({
      name,
      module,
      type: 'SCRIPT_ERROR',
      originalError: e
    }));
    return () => Promise.resolve();
  }
};
/* harmony default export */ __webpack_exports__["default"] = (renderComponent);

/***/ }),

/***/ "./src/core/store.ts":
/*!***************************!*\
  !*** ./src/core/store.ts ***!
  \***************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   connect: function() { return /* binding */ connect; },
/* harmony export */   createStore: function() { return /* binding */ createStore; },
/* harmony export */   dispatch: function() { return /* binding */ dispatch; },
/* harmony export */   emit: function() { return /* binding */ emit; },
/* harmony export */   getStore: function() { return /* binding */ getStore; },
/* harmony export */   getUserStore: function() { return /* binding */ getUserStore; },
/* harmony export */   subscribe: function() { return /* binding */ subscribe; },
/* harmony export */   useStore: function() { return /* binding */ useStore; }
/* harmony export */ });
/* harmony import */ var nycticorax__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! nycticorax */ "./node_modules/nycticorax/dist/index.js");
/* harmony import */ var nycticorax__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(nycticorax__WEBPACK_IMPORTED_MODULE_0__);

const {
  createStore,
  getStore,
  connect,
  emit,
  subscribe,
  dispatch,
  useStore
} = new (nycticorax__WEBPACK_IMPORTED_MODULE_0___default())();
function getUserStore() {
  const globalStore = getStore();
  const keys = Object.keys(globalStore);
  const store = {};
  keys.forEach(key => {
    store[key] = globalStore[key];
  });
  return store;
}

/***/ }),

/***/ "./src/core/vue-component.tsx":
/*!************************************!*\
  !*** ./src/core/vue-component.tsx ***!
  \************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _connector__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./connector */ "./src/core/connector.ts");
/* harmony import */ var _create_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./create-module */ "./src/core/create-module.ts");
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./store */ "./src/core/store.ts");
/* harmony import */ var _helper__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./helper */ "./src/core/helper.ts");
/* harmony import */ var _dispatch__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./dispatch */ "./src/core/dispatch.ts");
/* harmony import */ var _logger__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./logger */ "./src/core/logger.ts");
/* harmony import */ var _message__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./message */ "./src/core/message.ts");
/* harmony import */ var _i18n__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./i18n */ "./src/core/i18n.ts");









function vueComponent(config) {
  const {
    name,
    module,
    url,
    watchKeys,
    onMounted
  } = config;
  const storeKeys = watchKeys || Object.keys((0,_store__WEBPACK_IMPORTED_MODULE_3__.getStore)());
  const V = props => {
    const store = (0,_store__WEBPACK_IMPORTED_MODULE_3__.useStore)(...storeKeys);
    const vueRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)();
    const isVueMounted = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(false);
    const errorRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)();
    const isUnMountedRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(false);
    const ComponentNodeRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)();
    const containerDivRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);
    const propsReactiveRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)();
    const storeReactiveRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)();
    const unMountVue = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)();
    const unSubscribeMessageRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)();
    const updateVueComponentRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)();
    const [componentReady, setComponentReady] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
    const [isError, setIsError] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
    const LoaderNode = _connector__WEBPACK_IMPORTED_MODULE_1__["default"].getLoaderComponent();
    const {
      $silent,
      $componentProps
    } = props;
    const mountVue = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(() => {
      const $logger = (0,_logger__WEBPACK_IMPORTED_MODULE_6__["default"])({
        name,
        module
      });
      const $dispatch = (0,_dispatch__WEBPACK_IMPORTED_MODULE_5__["default"])({
        name,
        module
      });
      const $postMessage = (0,_message__WEBPACK_IMPORTED_MODULE_7__.createPostMessage)({
        name,
        module
      });
      const $t = (0,_i18n__WEBPACK_IMPORTED_MODULE_8__.createI18n)({
        name,
        module
      }, () => {
        updateVueComponentRef.current?.();
      });
      propsReactiveRef.current = vueRef.current.ref({
        ...$componentProps
      });
      storeReactiveRef.current = vueRef.current.ref({
        ...store
      });
      const vueApp = vueRef.current.createApp({
        setup() {
          const renderKey = vueRef.current.ref(0);
          updateVueComponentRef.current = () => {
            renderKey.value += 1;
          };
          return {
            key: renderKey
          };
        },
        errorCaptured(e) {
          const error = e;
          errorRef.current = error.message?.includes('https://react') ? new _helper__WEBPACK_IMPORTED_MODULE_4__.VariousError({
            originalError: new Error('not a valid Vue component'),
            name,
            module,
            type: 'INVALID_COMPONENT'
          }) : error;
          setIsError(true);
        },
        render() {
          return vueRef.current.h(ComponentNodeRef.current, {
            ...propsReactiveRef.current.value,
            various: {
              $dispatch,
              $logger,
              $postMessage,
              $t,
              $store: storeReactiveRef.current.value
            },
            // eslint-disable-next-line react/no-this-in-sfc
            key: this.key
          });
        }
      });
      vueApp.mount(containerDivRef.current);
      isVueMounted.current = true;
      unMountVue.current = () => vueApp.unmount();
    }, [$componentProps, store]);
    const mountComponent = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(async () => {
      try {
        const vue = await (0,_create_module__WEBPACK_IMPORTED_MODULE_2__["default"])({
          name: 'vue'
        });
        vueRef.current = vue;
        const componentNode = await (0,_create_module__WEBPACK_IMPORTED_MODULE_2__["default"])({
          name,
          module,
          url
        }, false);
        if (isUnMountedRef.current) {
          return;
        }
        await (0,_helper__WEBPACK_IMPORTED_MODULE_4__.checkVueComponent)(componentNode, {
          name,
          module
        });
        (0,_helper__WEBPACK_IMPORTED_MODULE_4__.updateMountedComponent)({
          name,
          module
        });
        unSubscribeMessageRef.current = (0,_helper__WEBPACK_IMPORTED_MODULE_4__.parseComponentActions)({
          componentNode,
          name,
          module,
          type: 'vue3',
          i18nUpdate() {
            updateVueComponentRef.current?.();
          }
        });
        ComponentNodeRef.current = componentNode;
        setTimeout(mountVue);
        setComponentReady(true);
        onMounted?.();
      } catch (e) {
        if (isUnMountedRef.current) {
          return;
        }
        errorRef.current = e;
        setComponentReady(true);
        setIsError(true);
      }
    }, [mountVue]);
    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => () => {
      errorRef.current = undefined;
      ComponentNodeRef.current = undefined;
      isUnMountedRef.current = true;
      (0,_helper__WEBPACK_IMPORTED_MODULE_4__.updateUnMountComponent)({
        name,
        module
      });
      unMountVue.current?.();
      unSubscribeMessageRef.current?.();
      isVueMounted.current = false;
    }, []);
    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
      if (isVueMounted.current) {
        return;
      }
      mountComponent();
    }, [mountComponent]);
    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
      if (propsReactiveRef.current) {
        propsReactiveRef.current.value = {
          ...$componentProps
        };
      }
    }, [$componentProps]);
    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
      if (storeReactiveRef.current) {
        storeReactiveRef.current.value = {
          ...store
        };
      }
    }, [store]);
    if (isError) {
      throw errorRef.current;
    }
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, !componentReady && !$silent && !(0,_helper__WEBPACK_IMPORTED_MODULE_4__.isModuleLoaded)(name) ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(LoaderNode, {
      $name: name,
      $module: module,
      $store: store
    }) : null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      className: `various-component-${(0,_helper__WEBPACK_IMPORTED_MODULE_4__.getNameWithModule)({
        name,
        module
      })}`,
      ref: containerDivRef
    }));
  };
  V.displayName = (0,_helper__WEBPACK_IMPORTED_MODULE_4__.getNameWithModule)({
    name,
    module
  });
  const VueComponent = props => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(V, props);
  VueComponent.displayName = 'various-vue-component';
  return VueComponent;
}
/* harmony default export */ __webpack_exports__["default"] = (vueComponent);

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ (function(module) {

"use strict";
module.exports = __WEBPACK_EXTERNAL_MODULE_react__;

/***/ }),

/***/ "react-dom/client":
/*!***********************************!*\
  !*** external "react-dom/client" ***!
  \***********************************/
/***/ (function(module) {

"use strict";
module.exports = __WEBPACK_EXTERNAL_MODULE_react_dom_client__;

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	!function() {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = function(module) {
/******/ 			var getter = module && module.__esModule ?
/******/ 				function() { return module['default']; } :
/******/ 				function() { return module; };
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	!function() {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = function(exports, definition) {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	!function() {
/******/ 		__webpack_require__.o = function(obj, prop) { return Object.prototype.hasOwnProperty.call(obj, prop); }
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	!function() {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = function(exports) {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	}();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry needs to be wrapped in an IIFE because it needs to be in strict mode.
!function() {
"use strict";
/*!****************************!*\
  !*** ./src/core/index.tsx ***!
  \****************************/
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Nycticorax: function() { return /* reexport default from dynamic */ nycticorax__WEBPACK_IMPORTED_MODULE_8___default.a; },
/* harmony export */   createComponent: function() { return /* reexport safe */ _create_component__WEBPACK_IMPORTED_MODULE_14__["default"]; },
/* harmony export */   createDispatch: function() { return /* reexport safe */ _dispatch__WEBPACK_IMPORTED_MODULE_9__["default"]; },
/* harmony export */   createLogger: function() { return /* reexport safe */ _logger__WEBPACK_IMPORTED_MODULE_11__["default"]; },
/* harmony export */   createModule: function() { return /* reexport safe */ _create_module__WEBPACK_IMPORTED_MODULE_13__["default"]; },
/* harmony export */   createPostMessage: function() { return /* reexport safe */ _message__WEBPACK_IMPORTED_MODULE_10__.createPostMessage; },
/* harmony export */   defineDependencies: function() { return /* reexport safe */ _helper__WEBPACK_IMPORTED_MODULE_12__.defineDependencies; },
/* harmony export */   getConfig: function() { return /* reexport safe */ _helper__WEBPACK_IMPORTED_MODULE_12__.getConfig; },
/* harmony export */   getMountedComponents: function() { return /* reexport safe */ _helper__WEBPACK_IMPORTED_MODULE_12__.getMountedComponents; },
/* harmony export */   getStore: function() { return /* reexport safe */ _store__WEBPACK_IMPORTED_MODULE_2__.getUserStore; },
/* harmony export */   isModuleLoaded: function() { return /* reexport safe */ _helper__WEBPACK_IMPORTED_MODULE_12__.isModuleLoaded; },
/* harmony export */   onComponentMounted: function() { return /* reexport safe */ _helper__WEBPACK_IMPORTED_MODULE_12__.onComponentMounted; },
/* harmony export */   preloadModules: function() { return /* reexport safe */ _helper__WEBPACK_IMPORTED_MODULE_12__.preloadModules; },
/* harmony export */   renderComponent: function() { return /* reexport safe */ _render_component__WEBPACK_IMPORTED_MODULE_15__["default"]; },
/* harmony export */   version: function() { return /* binding */ version; }
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_dom_client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom/client */ "react-dom/client");
/* harmony import */ var react_dom_client__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_dom_client__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./store */ "./src/core/store.ts");
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./config */ "./src/core/config.ts");
/* harmony import */ var _connector__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./connector */ "./src/core/connector.ts");
/* harmony import */ var _i18n__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./i18n */ "./src/core/i18n.ts");
/* harmony import */ var _default_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./default-component */ "./src/core/default-component.tsx");
/* harmony import */ var _error_boundary__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./error-boundary */ "./src/core/error-boundary.tsx");
/* harmony import */ var nycticorax__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! nycticorax */ "./node_modules/nycticorax/dist/index.js");
/* harmony import */ var nycticorax__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(nycticorax__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _dispatch__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./dispatch */ "./src/core/dispatch.ts");
/* harmony import */ var _message__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./message */ "./src/core/message.ts");
/* harmony import */ var _logger__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./logger */ "./src/core/logger.ts");
/* harmony import */ var _helper__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./helper */ "./src/core/helper.ts");
/* harmony import */ var _create_module__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./create-module */ "./src/core/create-module.ts");
/* harmony import */ var _create_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./create-component */ "./src/core/create-component.tsx");
/* harmony import */ var _render_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./render-component */ "./src/core/render-component.tsx");


















// eslint-disable-next-line no-undef
const version = "5.0.0";
/* harmony default export */ __webpack_exports__["default"] = (config => {
  const {
    dependencies,
    root,
    store = {},
    actions = {},
    Loader: LoaderComponent,
    Error: ErrorComponent,
    Container: ContainerComponent = _default_component__WEBPACK_IMPORTED_MODULE_6__.Container,
    middlewares,
    i18n,
    ...rest
  } = config;
  if (middlewares) {
    _connector__WEBPACK_IMPORTED_MODULE_4__["default"].setMiddlewares(middlewares);
  }
  _connector__WEBPACK_IMPORTED_MODULE_4__["default"].setStoreActions(actions);
  if (LoaderComponent) {
    _connector__WEBPACK_IMPORTED_MODULE_4__["default"].setLoaderComponent(LoaderComponent);
  }
  if (ErrorComponent) {
    _connector__WEBPACK_IMPORTED_MODULE_4__["default"].setErrorComponent(ErrorComponent);
  }
  (0,_store__WEBPACK_IMPORTED_MODULE_2__.createStore)({
    ...store,
    [_config__WEBPACK_IMPORTED_MODULE_3__.MOUNTED_COMPONENTS_KEY]: [],
    [_config__WEBPACK_IMPORTED_MODULE_3__.CONFIG_KEY]: rest,
    [_config__WEBPACK_IMPORTED_MODULE_3__.DEPENDENCIES_KEY]: dependencies,
    [_config__WEBPACK_IMPORTED_MODULE_3__.MESSAGE_KEY]: null
  });
  ContainerComponent.displayName = 'various-container';
  class R extends react__WEBPACK_IMPORTED_MODULE_0__.Component {
    static displayName = 'various-app';
    componentDidMount() {
      (0,_i18n__WEBPACK_IMPORTED_MODULE_5__.createI18nConfig)(i18n);
    }
    render() {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_error_boundary__WEBPACK_IMPORTED_MODULE_7__["default"], {
        name: "app"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(ContainerComponent, null));
    }
  }
  (0,react_dom_client__WEBPACK_IMPORTED_MODULE_1__.createRoot)(document.querySelector(root || _config__WEBPACK_IMPORTED_MODULE_3__.ROOT)).render( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(R, null));
});
}();
/******/ 	return __webpack_exports__;
/******/ })()
;
});;
//# sourceMappingURL=index.dev.js.map