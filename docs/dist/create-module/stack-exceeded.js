define(function() { return /******/ (function() { // webpackBootstrap
/******/ 	"use strict";
/******/ 	// The require scope
/******/ 	var __webpack_require__ = {};
/******/ 	
/************************************************************************/
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
/*!*********************************************************!*\
  !*** ./test/components/create-module/stack-exceeded.ts ***!
  \*********************************************************/
__webpack_require__.r(__webpack_exports__);
function loop(x) {
  if (x >= 1000000000000) return;
  loop(x + 1);
}
const a = loop(0);
/* harmony default export */ __webpack_exports__["default"] = (a);
/******/ 	return __webpack_exports__;
/******/ })()
;
});;
//# sourceMappingURL=stack-exceeded.js.map