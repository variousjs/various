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
/*!****************************************!*\
  !*** ./test/components/i18n/index.tsx ***!
  \****************************************/
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Async: function() { return /* binding */ Async; },
/* harmony export */   B: function() { return /* binding */ B; },
/* harmony export */   ConfigError: function() { return /* binding */ ConfigError; },
/* harmony export */   NoConfig: function() { return /* binding */ NoConfig; },
/* harmony export */   NoKey: function() { return /* binding */ NoKey; },
/* harmony export */   NoLocale: function() { return /* binding */ NoLocale; },
/* harmony export */   NoResource: function() { return /* binding */ NoResource; },
/* harmony export */   Update: function() { return /* binding */ Update; }
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _variousjs_various__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @variousjs/various */ "@variousjs/various");
/* harmony import */ var _variousjs_various__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_variousjs_various__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _zh_json__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./zh.json */ "./test/components/i18n/zh.json");
/* harmony import */ var _en_json__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./en.json */ "./test/components/i18n/en.json");




const Mb = (0,_variousjs_various__WEBPACK_IMPORTED_MODULE_1__.createComponent)({
  name: 'i18n',
  module: 'B'
});
const Mc = (0,_variousjs_various__WEBPACK_IMPORTED_MODULE_1__.createComponent)({
  name: 'i18n',
  module: 'NoConfig'
});
const Md = (0,_variousjs_various__WEBPACK_IMPORTED_MODULE_1__.createComponent)({
  name: 'i18n',
  module: 'NoResource'
});
const Me = (0,_variousjs_various__WEBPACK_IMPORTED_MODULE_1__.createComponent)({
  name: 'i18n',
  module: 'NoKey'
});
const Mf = (0,_variousjs_various__WEBPACK_IMPORTED_MODULE_1__.createComponent)({
  name: 'i18n',
  module: 'NoLocale'
});
const Mg = (0,_variousjs_various__WEBPACK_IMPORTED_MODULE_1__.createComponent)({
  name: 'i18n',
  module: 'Async'
});
const Mh = (0,_variousjs_various__WEBPACK_IMPORTED_MODULE_1__.createComponent)({
  name: 'i18n',
  module: 'ConfigError'
});
const Mi = (0,_variousjs_various__WEBPACK_IMPORTED_MODULE_1__.createComponent)({
  name: 'i18n',
  module: 'Update'
});
const A = props => {
  const {
    $t,
    $dispatch
  } = props;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h3", null, "I18n"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "value"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, "name: ", $t('name')), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, "greet: ", $t('greet', {
    name: 'A',
    name2: 'B'
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
    onClick: () => $dispatch({
      name: 'app',
      action: 'setLocale'
    })
  }, "change locale")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h3", null, "Error"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "value"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(Mh, null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(Mc, null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(Md, null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(Me, null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(Mf, null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(Mb, null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h3", null, "Async"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "value"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(Mg, null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(Mi, null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h3", null, "Global"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "value"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
    onClick: () => window.open('/i18n/index.html')
  }, "go")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h3", null, "Global Async"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "value"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
    onClick: () => window.open('/i18n/async.html')
  }, "go")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h3", null, "Global Async Error"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "value"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
    onClick: () => window.open('/i18n/async-error.html')
  }, "go")));
};
A.$i18n = () => ({
  lngStoreKey: 'locale',
  resources: {
    zh: _zh_json__WEBPACK_IMPORTED_MODULE_2__,
    en: _en_json__WEBPACK_IMPORTED_MODULE_3__
  }
});
/* harmony default export */ __webpack_exports__["default"] = (A);
class B extends react__WEBPACK_IMPORTED_MODULE_0__.Component {
  static $i18n = () => ({
    lngStoreKey: 'locale',
    resources: {
      zh: _zh_json__WEBPACK_IMPORTED_MODULE_2__,
      en: _en_json__WEBPACK_IMPORTED_MODULE_3__
    }
  });
  render() {
    const {
      $t
    } = this.props;
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h3", null, "Default Text"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      className: "value"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, $t('no-exist', 'default Text')), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, $t('name', [])), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, $t('greet', {})), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, $t('greet', {
      invalid: '1'
    }))));
  }
}
const NoConfig = props => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, props.$t('no-config'));
const NoResource = props => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, props.$t('no-resources'));
NoResource.$i18n = () => ({
  lngStoreKey: 'locale',
  resources: {}
});
const ConfigError = props => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, props.$t('error'));
ConfigError.$i18n = () => {
  throw new Error('get i18n config error');
};
const NoKey = props => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, props.$t('no-key'));
NoKey.$i18n = () => ({
  lngStoreKey: 'locale',
  resources: {
    zh: _zh_json__WEBPACK_IMPORTED_MODULE_2__,
    en: _en_json__WEBPACK_IMPORTED_MODULE_3__
  }
});
const NoLocale = props => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, props.$t('no-locale'));
NoLocale.$i18n = () => ({
  lngStoreKey: 'no-exist',
  resources: {}
});
let resolveFn = () => null;
const Async = props => {
  const {
    $t
  } = props;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, $t('name')), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
    onClick: () => resolveFn()
  }, "get resources"));
};
Async.$i18n = async () => {
  await new Promise(r => {
    resolveFn = r;
  });
  return {
    lngStoreKey: 'locale',
    resources: {
      zh: _zh_json__WEBPACK_IMPORTED_MODULE_2__,
      en: _en_json__WEBPACK_IMPORTED_MODULE_3__
    }
  };
};
const Update = props => {
  const {
    $t
  } = props;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h3", null, "Update"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "value"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, $t('name')), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
    onClick: () => {
      $t.update({
        lngStoreKey: 'locale'
      });
    }
  }, "update lngStoreKey"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
    onClick: () => {
      $t.update({
        resources: {
          zh: _zh_json__WEBPACK_IMPORTED_MODULE_2__,
          en: _en_json__WEBPACK_IMPORTED_MODULE_3__
        }
      });
    }
  }, "update resources")));
};
}();
/******/ 	return __webpack_exports__;
/******/ })()
;
});;
//# sourceMappingURL=index.js.map