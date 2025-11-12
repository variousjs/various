define(["react","@variousjs/various"], function(__WEBPACK_EXTERNAL_MODULE_react__, __WEBPACK_EXTERNAL_MODULE__variousjs_various__) { return /******/ (function() { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "@variousjs/various":
/*!*************************************!*\
  !*** external "@variousjs/various" ***!
  \*************************************/
/***/ (function(module) {

module.exports = __WEBPACK_EXTERNAL_MODULE__variousjs_various__;

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ (function(module) {

module.exports = __WEBPACK_EXTERNAL_MODULE_react__;

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
// This entry needs to be wrapped in an IIFE because it needs to be isolated against other modules in the chunk.
!function() {
/*!******************************************!*\
  !*** ./test/components/helper/index.tsx ***!
  \******************************************/
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Waiting: function() { return /* binding */ Waiting; }
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _variousjs_various__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @variousjs/various */ "@variousjs/various");
/* harmony import */ var _variousjs_various__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_variousjs_various__WEBPACK_IMPORTED_MODULE_1__);


const testPreloadModule = 'helper-define';
const testOnMountedModule = {
  name: 'helper',
  module: 'Waiting'
};
/* harmony default export */ __webpack_exports__["default"] = (() => {
  const [isLoaded, setIsLoaded] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)('false');
  const [isPreloadLoaded, setIsPreloadLoaded] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)('false');
  const [isMounted, setIsMounted] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  const [isHelperMounted, setIsHelperMounted] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  const [canMount, setCanMount] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  const MountNode = (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(() => (0,_variousjs_various__WEBPACK_IMPORTED_MODULE_1__.createComponent)(testOnMountedModule), []);
  const mountedComponents = (0,_variousjs_various__WEBPACK_IMPORTED_MODULE_1__.getMountedComponents)().map(m => {
    const {
      name,
      module
    } = m;
    return [name, module].filter(Boolean).join('.');
  }).sort().join();
  const preload = async () => {
    try {
      await (0,_variousjs_various__WEBPACK_IMPORTED_MODULE_1__.preloadModules)([testPreloadModule]);
      setIsLoaded(String((0,_variousjs_various__WEBPACK_IMPORTED_MODULE_1__.isModuleLoaded)(testPreloadModule)));
    } catch (_) {
      setIsLoaded('load error');
    }
  };
  const remove = () => {
    (0,_variousjs_various__WEBPACK_IMPORTED_MODULE_1__.removeLoadedModules)([testPreloadModule, 'react']); // react won\'t been remove
    setIsLoaded(String((0,_variousjs_various__WEBPACK_IMPORTED_MODULE_1__.isModuleLoaded)(testPreloadModule)));
  };
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    setIsPreloadLoaded(String((0,_variousjs_various__WEBPACK_IMPORTED_MODULE_1__.isModuleLoaded)('preload')));
    const un2 = (0,_variousjs_various__WEBPACK_IMPORTED_MODULE_1__.onComponentMounted)([{
      ...testOnMountedModule
    }, {
      name: 'no-exist'
    }], () => {
      // will not trigger
    });
    const un0 = (0,_variousjs_various__WEBPACK_IMPORTED_MODULE_1__.onComponentMounted)({
      ...testOnMountedModule,
      module: undefined
    }, () => {
      setIsHelperMounted(true);
    });
    const un1 = (0,_variousjs_various__WEBPACK_IMPORTED_MODULE_1__.onComponentMounted)([{
      ...testOnMountedModule
    }], () => {
      setIsMounted(true);
      un2?.();
    });
    return () => {
      un0?.();
      un1?.();
    };
  }, []);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h3", null, "version"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "value"
  }, _variousjs_various__WEBPACK_IMPORTED_MODULE_1__.version), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h3", null, "getConfig"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "value"
  }, "timeout: ", (0,_variousjs_various__WEBPACK_IMPORTED_MODULE_1__.getConfig)().timeout), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h3", null, "getStore"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "value"
  }, "name: ", (0,_variousjs_various__WEBPACK_IMPORTED_MODULE_1__.getStore)().name), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h3", null, "isModuleLoaded"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "value"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, testPreloadModule, ": ", isLoaded), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, "preload component: ", isPreloadLoaded)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h3", null, "defineDependencies"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "value"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
    onClick: () => (0,_variousjs_various__WEBPACK_IMPORTED_MODULE_1__.defineDependencies)({
      [testPreloadModule]: './dist/helper/define.js',
      react: 'this won\'t take effect'
    })
  }, "Define: ", testPreloadModule)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h3", null, "preloadModules"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "value"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
    onClick: () => preload()
  }, "Preload: ", testPreloadModule)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h3", null, "removeLoadedModules"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "value"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
    onClick: () => remove()
  }, "remove: ", testPreloadModule)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h3", null, "getMountedComponents"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "value"
  }, mountedComponents), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h3", null, "onComponentMounted"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "value"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, "helper: ", String(isHelperMounted)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, "Waiting: ", String(isMounted)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
    onClick: () => setCanMount(true)
  }, "Mount: ", testOnMountedModule.module), canMount && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(MountNode, null)));
});
const Waiting = () => null;
}();
/******/ 	return __webpack_exports__;
/******/ })()
;
});;
//# sourceMappingURL=index.js.map