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
/*!****************************************************!*\
  !*** ./test/components/create-component/index.tsx ***!
  \****************************************************/
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: function() { return /* binding */ A; },
/* harmony export */   B: function() { return /* binding */ B; },
/* harmony export */   C: function() { return /* binding */ C; },
/* harmony export */   D: function() { return /* binding */ D; },
/* harmony export */   E: function() { return /* binding */ E; },
/* harmony export */   Ref: function() { return /* binding */ Ref; }
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _variousjs_various__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @variousjs/various */ "@variousjs/various");
/* harmony import */ var _variousjs_various__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_variousjs_various__WEBPACK_IMPORTED_MODULE_1__);


const Ma = (0,_variousjs_various__WEBPACK_IMPORTED_MODULE_1__.createComponent)({
  name: 'create',
  module: 'A'
});
const Mb = (0,_variousjs_various__WEBPACK_IMPORTED_MODULE_1__.createComponent)({
  name: 'create',
  module: 'B'
}, ['name']);
const Mc = (0,_variousjs_various__WEBPACK_IMPORTED_MODULE_1__.createComponent)({
  name: 'create-vue-c',
  url: './dist/create-component/c.js',
  type: 'vue3'
}, ['name']);
const Md = (0,_variousjs_various__WEBPACK_IMPORTED_MODULE_1__.createComponent)({
  name: 'create',
  module: 'A',
  type: 'vue3'
});
const Me = (0,_variousjs_various__WEBPACK_IMPORTED_MODULE_1__.createComponent)({
  name: 'create-react-vue',
  url: './dist/create-component/c.js'
});
const Mf = (0,_variousjs_various__WEBPACK_IMPORTED_MODULE_1__.createComponent)({
  name: 'create',
  module: 'C'
});
const Mg = (0,_variousjs_various__WEBPACK_IMPORTED_MODULE_1__.createComponent)({
  name: 'create',
  module: 'B',
  type: 'vue3'
});
const Mh = (0,_variousjs_various__WEBPACK_IMPORTED_MODULE_1__.createComponent)({
  name: 'create',
  module: 'D'
});
const Mi = (0,_variousjs_various__WEBPACK_IMPORTED_MODULE_1__.createComponent)({
  name: 'create-vue-e',
  url: './dist/create-component/e.js',
  type: 'vue3'
});
const Mj = (0,_variousjs_various__WEBPACK_IMPORTED_MODULE_1__.createComponent)({
  name: 'create',
  module: 'Ref'
});
/* harmony default export */ __webpack_exports__["default"] = (props => {
  const {
    name
  } = props.$self;
  const maRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);
  const [num, setNum] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(0);
  const RuntimeCreate = (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(() => (0,_variousjs_various__WEBPACK_IMPORTED_MODULE_1__.createComponent)({
    name,
    module: 'E'
  }), [name]);
  const ref = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h3", null, "Create Component"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "value"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(Ma, {
    $ref: maRef
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
    onClick: () => maRef.current?.set('some text')
  }, "set text")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h3", null, "Runtime Create"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "value"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(RuntimeCreate, null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, "for test runtime createComponent rerender"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("input", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
    onClick: () => setNum(n => n + 1)
  }, "add (", num, ")")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h3", null, "Class Component Ref"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "value"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(Mj, {
    $ref: ref
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
    onClick: () => ref.current?.add?.()
  }, "input add")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h3", null, "Watch Store"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "value"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(Mb, null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
    onClick: () => props.$dispatch({
      name: 'app',
      action: 'setName'
    })
  }, "dispatch")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h3", null, "Vue & URL"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "value"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(Mc, {
    name: props.$store.name
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h3", null, "Vue Component type Error"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "value"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(Md, null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(Mg, null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h3", null, "React Component type Error"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "value"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(Me, null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(Mf, null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h3", null, "React script error"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(Mh, null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h3", null, "Vue script error"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(Mi, null));
});
const A = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_0__.forwardRef)((_, ref) => {
  const [text, setText] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)('');
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useImperativeHandle)(ref, () => ({
    set: t => {
      setText(t);
    }
  }));
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, "text: ", text);
});
class B extends react__WEBPACK_IMPORTED_MODULE_0__.Component {
  render() {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, "name: ", this.props.$store.name);
  }
}
const C = 'not a component';
const D = () =>
/*#__PURE__*/
// @ts-ignore cause script error
react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, A.bind.c);
const E = props => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, props.$store.name);
class Ref extends react__WEBPACK_IMPORTED_MODULE_0__.Component {
  state = {
    value: 0
  };
  add = () => {
    this.setState(prevState => ({
      value: prevState.value + 1
    }));
  };
  render() {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("input", {
      value: this.state.value
    });
  }
}
}();
/******/ 	return __webpack_exports__;
/******/ })()
;
});;
//# sourceMappingURL=index.js.map