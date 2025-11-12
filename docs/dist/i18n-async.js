define(["react","@variousjs/various"], function(__WEBPACK_EXTERNAL_MODULE_react__, __WEBPACK_EXTERNAL_MODULE__variousjs_various__) { return /******/ (function() { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./test/app/i18n/async/jp.json":
/*!*************************************!*\
  !*** ./test/app/i18n/async/jp.json ***!
  \*************************************/
/***/ (function(module) {

module.exports = {"title":"Japan"};

/***/ }),

/***/ "./test/app/i18n/async/store.ts":
/*!**************************************!*\
  !*** ./test/app/i18n/async/store.ts ***!
  \**************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   createStore: function() { return /* binding */ createStore; },
/* harmony export */   emit: function() { return /* binding */ emit; },
/* harmony export */   subscribe: function() { return /* binding */ subscribe; }
/* harmony export */ });
/* harmony import */ var _variousjs_various__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @variousjs/various */ "@variousjs/various");
/* harmony import */ var _variousjs_various__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_variousjs_various__WEBPACK_IMPORTED_MODULE_0__);

const {
  createStore,
  subscribe,
  emit
} = new _variousjs_various__WEBPACK_IMPORTED_MODULE_0__.Nycticorax();
createStore({
  i18nPassSignal: false
});

/***/ }),

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
/*!***************************************!*\
  !*** ./test/app/i18n/async/index.tsx ***!
  \***************************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _variousjs_various__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @variousjs/various */ "@variousjs/various");
/* harmony import */ var _variousjs_various__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_variousjs_various__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./store */ "./test/app/i18n/async/store.ts");
/* harmony import */ var _jp_json__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./jp.json */ "./test/app/i18n/async/jp.json");




const i18n = () => new Promise(resolve => {
  const unsubscribe = (0,_store__WEBPACK_IMPORTED_MODULE_2__.subscribe)({
    i18nPassSignal(v) {
      if (v) {
        resolve({
          lngStoreKey: 'locale',
          resources: {
            jp: _jp_json__WEBPACK_IMPORTED_MODULE_3__
          }
        });
      }
      unsubscribe();
    }
  });
});
const C = (0,_variousjs_various__WEBPACK_IMPORTED_MODULE_1__.createComponent)({
  name: 'i18n'
}, ['locale']);
/* harmony default export */ __webpack_exports__["default"] = ({
  store: {
    locale: 'jp'
  },
  Root: () => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(C, {
    setSuccess: () => (0,_store__WEBPACK_IMPORTED_MODULE_2__.emit)({
      i18nPassSignal: true
    })
  }),
  i18n
});
}();
/******/ 	return __webpack_exports__;
/******/ })()
;
});;
//# sourceMappingURL=i18n-async.js.map