define(["react","@variousjs/various","react-router-dom"], function(__WEBPACK_EXTERNAL_MODULE_react__, __WEBPACK_EXTERNAL_MODULE__variousjs_various__, __WEBPACK_EXTERNAL_MODULE_react_router_dom__) { return /******/ (function() { // webpackBootstrap
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

/***/ }),

/***/ "react-router-dom":
/*!***********************************!*\
  !*** external "react-router-dom" ***!
  \***********************************/
/***/ (function(module) {

module.exports = __WEBPACK_EXTERNAL_MODULE_react_router_dom__;

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
/*!****************************************************!*\
  !*** ./test/components/render-component/index.tsx ***!
  \****************************************************/
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: function() { return /* binding */ A; },
/* harmony export */   ForVue: function() { return /* binding */ ForVue; },
/* harmony export */   GlobalProps: function() { return /* binding */ GlobalProps; },
/* harmony export */   P: function() { return /* binding */ P; },
/* harmony export */   Ref: function() { return /* binding */ Ref; },
/* harmony export */   WidthProps: function() { return /* binding */ WidthProps; }
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _variousjs_various__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @variousjs/various */ "@variousjs/various");
/* harmony import */ var _variousjs_various__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_variousjs_various__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-router-dom */ "react-router-dom");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_2__);



/* harmony default export */ __webpack_exports__["default"] = (() => {
  const ref = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);
  const unMountedRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)([]);
  const [showRefBtn, setShowRefBtn] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  const unMounteA = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)();
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => () => {
    unMountedRef.current.forEach(s => s());
  }, []);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h3", null, "Render Component"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "value"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    id: "a-dom"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
    onClick: () => {
      const un = (0,_variousjs_various__WEBPACK_IMPORTED_MODULE_1__.renderComponent)({
        name: 'render',
        module: 'A',
        target: document.querySelector('#a-dom')
      });
      unMounteA.current = un;
    }
  }, "renderA"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
    onClick: () => unMounteA.current?.()
  }, "unMounteA")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h3", null, "Props"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "value"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    id: "props-dom"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
    onClick: () => {
      const un = (0,_variousjs_various__WEBPACK_IMPORTED_MODULE_1__.renderComponent)({
        name: 'render',
        module: 'WidthProps',
        target: document.querySelector('#props-dom'),
        props: {
          foo: 'bar'
        }
      });
      unMountedRef.current.push(un);
    }
  }, "with props")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h3", null, "Global Props"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "value"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    id: "global-dom"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
    onClick: () => {
      const un = (0,_variousjs_various__WEBPACK_IMPORTED_MODULE_1__.renderComponent)({
        name: 'render',
        module: 'GlobalProps',
        target: document.querySelector('#global-dom')
      });
      unMountedRef.current.push(un);
    }
  }, "global")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h3", null, "Ref(React)"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "value"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    id: "ref-dom"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
    onClick: () => {
      const un = (0,_variousjs_various__WEBPACK_IMPORTED_MODULE_1__.renderComponent)({
        name: 'render',
        module: 'Ref',
        target: document.querySelector('#ref-dom'),
        props: {
          $ref: ref
        },
        onMounted() {
          setShowRefBtn(true);
        }
      });
      unMountedRef.current.push(un);
    }
  }, "ref"), showRefBtn && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
    onClick: () => {
      ref.current.set?.('text via ref');
    }
  }, "set text")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h3", null, "Custom Node"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "value"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    id: "custom-dom"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
    onClick: () => {
      const un = (0,_variousjs_various__WEBPACK_IMPORTED_MODULE_1__.renderComponent)({
        name: 'render',
        module: 'P',
        target: document.querySelector('#custom-dom'),
        renderNode(children) {
          return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__.HashRouter, null, children);
        }
      });
      unMountedRef.current.push(un);
    }
  }, "custom")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h3", null, "URL & Vue"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "value"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    id: "url-dom"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
    onClick: () => {
      const un = (0,_variousjs_various__WEBPACK_IMPORTED_MODULE_1__.renderComponent)({
        name: 'url',
        type: 'vue3',
        url: './dist/render-component/url.js',
        target: document.querySelector('#url-dom')
      });
      unMountedRef.current.push(un);
    }
  }, "url & vue")));
});
const A = () => 'A';
const WidthProps = props => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, props.foo);
const P = () => {
  const {
    pathname
  } = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_2__.useLocation)();
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, "Pathname: ", pathname);
};
const Ref = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_0__.forwardRef)((_, ref) => {
  const [text, setText] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)('');
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useImperativeHandle)(ref, () => ({
    set: t => {
      setText(t);
    }
  }));
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, "text: ", text);
});
const ForVue = () => 'this will render by vue component';
const GlobalProps = props => {
  const {
    $store,
    $dispatch
  } = props;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, "name: ", $store.name), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
    onClick: () => {
      $dispatch({
        name: 'app',
        action: 'setName'
      });
    }
  }, "dispatch"));
};
}();
/******/ 	return __webpack_exports__;
/******/ })()
;
});;
//# sourceMappingURL=index.js.map