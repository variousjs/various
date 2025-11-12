define(["@variousjs/various","react"], function(__WEBPACK_EXTERNAL_MODULE__variousjs_various__, __WEBPACK_EXTERNAL_MODULE_react__) { return /******/ (function() { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./test/app/actions.ts":
/*!*****************************!*\
  !*** ./test/app/actions.ts ***!
  \*****************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
const actions = {
  async setName({
    emit,
    getStore
  }) {
    const next = getStore('name') === 'humpback' ? 'various' : 'humpback';
    emit({
      name: next
    });
  },
  async setLocale({
    emit,
    getStore
  }, value) {
    let next = value;
    if (!next) {
      next = getStore('locale') === 'zh' ? 'en' : 'zh';
    }
    emit({
      locale: next
    });
  }
};
/* harmony default export */ __webpack_exports__["default"] = (actions);

/***/ }),

/***/ "./test/app/error.tsx":
/*!****************************!*\
  !*** ./test/app/error.tsx ***!
  \****************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

const errorComponent = props => {
  const {
    $reload,
    $error,
    $self,
    $store
  } = props;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h3", null, [$self.name, $self.module].filter(Boolean).join('.')), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "value"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, `[${$error.type}]:${$error.message}`), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
    onClick: $reload
  }, $store.locale === 'zh' ? '刷新' : 'reload')));
};
/* harmony default export */ __webpack_exports__["default"] = (errorComponent);

/***/ }),

/***/ "./test/app/loader.tsx":
/*!*****************************!*\
  !*** ./test/app/loader.tsx ***!
  \*****************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* export default binding */ __WEBPACK_DEFAULT_EXPORT__; }
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(props) {
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    if (window.Cypress) {
      const dom = document.querySelector('#t');
      if (dom) {
        dom.innerHTML += [props.$self.name, props.$self.module].filter(Boolean).join();
      }
    }
  }, [props.$self]);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, "...");
}

/***/ }),

/***/ "./test/app/middlewares.ts":
/*!*********************************!*\
  !*** ./test/app/middlewares.ts ***!
  \*********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
  onLog(e) {
    if (!window.middlewaresEnabled) {
      return true;
    }
    if (e.level === 'info') {
      window.console.log('block by onLog middleware');
      return false;
    }
    if (e.level === 'error') {
      return false;
    }
    return true;
  },
  onLoad(e) {
    if (!window.middlewaresEnabled) {
      return;
    }
    if (e.module === 'B') {
      return;
    }
    window.console.log(e.name, e.module, e.beenLoaded);
  },
  onMessage(e) {
    if (!window.middlewaresEnabled) {
      return true;
    }
    if (e.event === 'block') {
      return false;
    }
    return {
      ...e,
      event: 'postMessage event changed'
    };
  },
  onDispatch(e) {
    if (!window.middlewaresEnabled) {
      return true;
    }
    if (e.action === 'block') {
      return false;
    }
    return {
      ...e,
      action: 'changed'
    };
  },
  onError(e) {
    if (!window.middlewaresEnabled) {
      return;
    }
    window.console.log(e.type, e.message);
  }
});

/***/ }),

/***/ "./test/app/store.ts":
/*!***************************!*\
  !*** ./test/app/store.ts ***!
  \***************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
  locale: 'zh',
  globalLocal: 'jp',
  name: 'humpback'
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
/*!***************************!*\
  !*** ./test/app/index.ts ***!
  \***************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _variousjs_various__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @variousjs/various */ "@variousjs/various");
/* harmony import */ var _variousjs_various__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_variousjs_various__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./actions */ "./test/app/actions.ts");
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./store */ "./test/app/store.ts");
/* harmony import */ var _loader__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./loader */ "./test/app/loader.tsx");
/* harmony import */ var _error__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./error */ "./test/app/error.tsx");
/* harmony import */ var _middlewares__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./middlewares */ "./test/app/middlewares.ts");






const app = {
  store: _store__WEBPACK_IMPORTED_MODULE_2__["default"],
  Root: (0,_variousjs_various__WEBPACK_IMPORTED_MODULE_0__.createComponent)({
    name: 'container'
  }),
  Fallback: _loader__WEBPACK_IMPORTED_MODULE_3__["default"],
  ErrorFallback: _error__WEBPACK_IMPORTED_MODULE_4__["default"],
  actions: _actions__WEBPACK_IMPORTED_MODULE_1__["default"],
  middlewares: _middlewares__WEBPACK_IMPORTED_MODULE_5__["default"]
};
/* harmony default export */ __webpack_exports__["default"] = (app);
}();
/******/ 	return __webpack_exports__;
/******/ })()
;
});;
//# sourceMappingURL=app.js.map