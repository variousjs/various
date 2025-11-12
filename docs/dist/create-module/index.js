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
/*!*************************************************!*\
  !*** ./test/components/create-module/index.tsx ***!
  \*************************************************/
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   defaultText: function() { return /* binding */ defaultText; }
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _variousjs_various__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @variousjs/various */ "@variousjs/various");
/* harmony import */ var _variousjs_various__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_variousjs_various__WEBPACK_IMPORTED_MODULE_1__);


/* harmony default export */ __webpack_exports__["default"] = (() => {
  const [defaultText, setDefaultText] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)();
  const [errors, setErrors] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)({});
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h3", null, "CreateModule"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "value"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, "Default: ", defaultText), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
    onClick: async () => {
      const text = await (0,_variousjs_various__WEBPACK_IMPORTED_MODULE_1__.createModule)({
        name: 'create-module',
        module: 'defaultText',
        url: './dist/create-module/index.js'
      });
      setDefaultText(text);
    }
  }, "Create")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h3", null, "Not Defined"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "value"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, "Error: ", errors.notDefined?.type), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, errors.notDefined?.msg), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
    onClick: async () => {
      try {
        await (0,_variousjs_various__WEBPACK_IMPORTED_MODULE_1__.createModule)({
          name: 'not-defined'
        }, true);
      } catch (e) {
        const error = e;
        setErrors(pre => ({
          ...pre,
          notDefined: {
            type: error.type,
            msg: error.message
          }
        }));
      }
    }
  }, "Create")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h3", null, "Invalid Module"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "value"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, "Error: ", errors.invalidModule?.type), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, errors.invalidModule?.msg), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
    onClick: async () => {
      try {
        // empty create by npm script
        await (0,_variousjs_various__WEBPACK_IMPORTED_MODULE_1__.createModule)({
          name: 'empty',
          url: './dist/empty.js'
        }, false);
      } catch (e) {
        const error = e;
        setErrors(pre => ({
          ...pre,
          invalidModule: {
            type: error.type,
            msg: error.message
          }
        }));
      }
    }
  }, "Create")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h3", null, "Submodule Not Defined"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "value"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, "Error: ", errors.subModuleNotDefined?.type), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, errors.subModuleNotDefined?.msg), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
    onClick: async () => {
      try {
        await (0,_variousjs_various__WEBPACK_IMPORTED_MODULE_1__.createModule)({
          name: 'create-module',
          module: 'subModuleNotDefined'
        }, false);
      } catch (e) {
        const error = e;
        setErrors(pre => ({
          ...pre,
          subModuleNotDefined: {
            type: error.type,
            msg: error.message
          }
        }));
      }
    }
  }, "Create")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h3", null, "Script Error"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "value"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, "Error: ", errors.scriptError?.type), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, errors.scriptError?.msg), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
    onClick: async () => {
      try {
        await (0,_variousjs_various__WEBPACK_IMPORTED_MODULE_1__.createModule)({
          name: 'stack-exceeded',
          url: './dist/create-module/stack-exceeded.js'
        }, false);
      } catch (e) {
        const error = e;
        setErrors(pre => ({
          ...pre,
          scriptError: {
            type: error.type,
            msg: error.message
          }
        }));
      }
    }
  }, "Create")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h3", null, "Loading Error"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "value"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, "Error: ", errors.loadingError?.type), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, errors.loadingError?.msg), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
    onClick: async () => {
      try {
        await (0,_variousjs_various__WEBPACK_IMPORTED_MODULE_1__.createModule)({
          name: 'timeout',
          url: './dist/create-module/timeout.js'
        }, false);
      } catch (e) {
        const error = e;
        setErrors(pre => ({
          ...pre,
          loadingError: {
            type: error.type,
            msg: error.message
          }
        }));
      }
    }
  }, "Create")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h3", null, "Submodule Loading Error"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "value"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, "Error: ", errors.submoduleLoadingError?.type), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, errors.submoduleLoadingError?.msg), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
    onClick: async () => {
      try {
        await (0,_variousjs_various__WEBPACK_IMPORTED_MODULE_1__.createModule)({
          name: 'sub',
          url: './dist/create-module/sub-not-define.js'
        }, false);
      } catch (e) {
        const error = e;
        setErrors(pre => ({
          ...pre,
          submoduleLoadingError: {
            type: error.type,
            msg: error.message
          }
        }));
      }
    }
  }, "Create")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h3", null, "Submodule Script Error"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "value"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, "Error: ", errors.submoduleScriptError?.type), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, errors.submoduleScriptError?.msg), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
    onClick: async () => {
      try {
        await (0,_variousjs_various__WEBPACK_IMPORTED_MODULE_1__.createModule)({
          name: 'sub-error',
          url: './dist/create-module/sub-error.js'
        }, false);
      } catch (e) {
        const error = e;
        setErrors(pre => ({
          ...pre,
          submoduleScriptError: {
            type: error.type,
            msg: error.message
          }
        }));
      }
    }
  }, "Create")));
});
const defaultText = 'default module text';
}();
/******/ 	return __webpack_exports__;
/******/ })()
;
});;
//# sourceMappingURL=index.js.map