define(["react","@variousjs/various"], function(__WEBPACK_EXTERNAL_MODULE_react__, __WEBPACK_EXTERNAL_MODULE__variousjs_various__) { return /******/ (function() { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./test/components/i18n/en.json":
/*!**************************************!*\
  !*** ./test/components/i18n/en.json ***!
  \**************************************/
/***/ (function(module) {

module.exports = /*#__PURE__*/JSON.parse('{"name":"Json","greet":"Hello, {name}, {name2}"}');

/***/ }),

/***/ "./test/components/i18n/zh.json":
/*!**************************************!*\
  !*** ./test/components/i18n/zh.json ***!
  \**************************************/
/***/ (function(module) {

module.exports = /*#__PURE__*/JSON.parse('{"name":"张三","greet":"你好，{ name}，{name2      }"}');

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
/*!******************************************!*\
  !*** ./test/components/standalone/a.tsx ***!
  \******************************************/
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: function() { return /* binding */ A; }
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _variousjs_various__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @variousjs/various */ "@variousjs/various");
/* harmony import */ var _variousjs_various__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_variousjs_various__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _i18n_en_json__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../i18n/en.json */ "./test/components/i18n/en.json");
/* harmony import */ var _i18n_zh_json__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../i18n/zh.json */ "./test/components/i18n/zh.json");




const C = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_0__.forwardRef)((props, ref) => {
  const {
    $t,
    $postMessage
  } = props;
  const [text, setText] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)('');
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useImperativeHandle)(ref, () => ({
    set: t => {
      setText(t);
    }
  }));
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h3", null, "React Component"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "value"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, "text: ", text), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, "props: ", props.propsA), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, "greet: ", $t('greet', {
    name: 'C',
    name2: 'D'
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
    onClick: () => $postMessage('aaa')
  }, "postMessage")));
});
const staticMethods = {
  $i18n: () => ({
    lngStoreKey: 'locale',
    resources: {
      zh: _i18n_zh_json__WEBPACK_IMPORTED_MODULE_3__,
      en: _i18n_en_json__WEBPACK_IMPORTED_MODULE_2__
    }
  }),
  log: t => {
    const logger = (0,_variousjs_various__WEBPACK_IMPORTED_MODULE_1__.createLogger)({
      name: 'aa'
    });
    logger.info(t);
  }
};
const A = Object.assign(C, staticMethods);
}();
/******/ 	return __webpack_exports__;
/******/ })()
;
});;
//# sourceMappingURL=a.js.map