define(["react","react-dom"], function(__WEBPACK_EXTERNAL_MODULE_react__, __WEBPACK_EXTERNAL_MODULE_react_dom__) { return /******/ (function() { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/config.ts":
/*!***********************!*\
  !*** ./src/config.ts ***!
  \***********************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DEFAULT_PACKAGES": function() { return /* binding */ DEFAULT_PACKAGES; },
/* harmony export */   "MOUNTED_COMPONENTS": function() { return /* binding */ MOUNTED_COMPONENTS; },
/* harmony export */   "MESSAGE_KEY": function() { return /* binding */ MESSAGE_KEY; },
/* harmony export */   "IGNORE_STATIC_METHODS": function() { return /* binding */ IGNORE_STATIC_METHODS; },
/* harmony export */   "ERROR_TYPE": function() { return /* binding */ ERROR_TYPE; },
/* harmony export */   "ROOT_CONTAINER": function() { return /* binding */ ROOT_CONTAINER; },
/* harmony export */   "RETRY_COUNT": function() { return /* binding */ RETRY_COUNT; },
/* harmony export */   "ENV": function() { return /* binding */ ENV; }
/* harmony export */ });
function cov_dp5vjxx2p() {
  var path = "/Users/am0200/Documents/github/various/src/config.ts";
  var hash = "12b77b6578218683af31c0d37694e4e60f2a208c";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "/Users/am0200/Documents/github/various/src/config.ts",
    statementMap: {
      "0": {
        start: {
          line: 7,
          column: 32
        },
        end: {
          line: 10,
          column: 1
        }
      },
      "1": {
        start: {
          line: 12,
          column: 34
        },
        end: {
          line: 12,
          column: 62
        }
      },
      "2": {
        start: {
          line: 14,
          column: 27
        },
        end: {
          line: 14,
          column: 48
        }
      },
      "3": {
        start: {
          line: 16,
          column: 37
        },
        end: {
          line: 25,
          column: 1
        }
      },
      "4": {
        start: {
          line: 36,
          column: 30
        },
        end: {
          line: 36,
          column: 37
        }
      },
      "5": {
        start: {
          line: 38,
          column: 27
        },
        end: {
          line: 38,
          column: 28
        }
      },
      "6": {
        start: {
          line: 40,
          column: 19
        },
        end: {
          line: 40,
          column: 39
        }
      }
    },
    fnMap: {},
    branchMap: {},
    s: {
      "0": 0,
      "1": 0,
      "2": 0,
      "3": 0,
      "4": 0,
      "5": 0,
      "6": 0
    },
    f: {},
    b: {},
    _coverageSchema: "1a1c01bbd47fc00a2c39e90264f33305004495a9",
    hash: "12b77b6578218683af31c0d37694e4e60f2a208c"
  };
  var coverage = global[gcv] || (global[gcv] = {});

  if (!coverage[path] || coverage[path].hash !== hash) {
    coverage[path] = coverageData;
  }

  var actualCoverage = coverage[path];
  {
    // @ts-ignore
    cov_dp5vjxx2p = function () {
      return actualCoverage;
    };
  }
  return actualCoverage;
}

cov_dp5vjxx2p();
var DEFAULT_PACKAGES = (cov_dp5vjxx2p().s[0]++, {
  react: 'https://unpkg.com/react@17.0.2/umd/react.development.js',
  'react-dom': 'https://unpkg.com/react-dom@17.0.2/umd/react-dom.development.js'
});
var MOUNTED_COMPONENTS = (cov_dp5vjxx2p().s[1]++, Symbol('MOUNTED_COMPONENTS'));
var MESSAGE_KEY = (cov_dp5vjxx2p().s[2]++, Symbol('MESSAGE_KEY'));
var IGNORE_STATIC_METHODS = (cov_dp5vjxx2p().s[3]++, ['name', 'prototype', 'length', 'propTypes', 'defaultProps', 'getDerivedStateFromProps', 'contextTypes', 'displayName']);
var ERROR_TYPE;

(function (ERROR_TYPE) {
  ERROR_TYPE["LOADING_ERROR"] = "LOADING_ERROR";
  ERROR_TYPE["DEPENDENCIES_LOADING_ERROR"] = "DEPENDENCIES_LOADING_ERROR";
  ERROR_TYPE["NOT_DEFINED"] = "NOT_DEFINED";
  ERROR_TYPE["INVALID_COMPONENT"] = "INVALID_COMPONENT";
  ERROR_TYPE["SCRIPT_ERROR"] = "SCRIPT_ERROR";
  ERROR_TYPE["CONTAINER_ERROR"] = "CONTAINER_ERROR";
})(ERROR_TYPE || (ERROR_TYPE = {}));

var ROOT_CONTAINER = (cov_dp5vjxx2p().s[4]++, '#root');
var RETRY_COUNT = (cov_dp5vjxx2p().s[5]++, 1);
var ENV = (cov_dp5vjxx2p().s[6]++, "development");

/***/ }),

/***/ "./src/core/built-in.tsx":
/*!*******************************!*\
  !*** ./src/core/built-in.tsx ***!
  \*******************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Loader": function() { return /* binding */ Loader; },
/* harmony export */   "Error": function() { return /* binding */ Error; },
/* harmony export */   "Container": function() { return /* binding */ Container; }
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
function cov_5xvqm60ig() {
  var path = "/Users/am0200/Documents/github/various/src/core/built-in.tsx";
  var hash = "df49b39fcb6662e8e84a30daab603169ce72afe5";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "/Users/am0200/Documents/github/various/src/core/built-in.tsx",
    statementMap: {
      "0": {
        start: {
          line: 4,
          column: 22
        },
        end: {
          line: 6,
          column: 1
        }
      },
      "1": {
        start: {
          line: 5,
          column: 2
        },
        end: {
          line: 5,
          column: 20
        }
      },
      "2": {
        start: {
          line: 8,
          column: 37
        },
        end: {
          line: 24,
          column: 1
        }
      },
      "3": {
        start: {
          line: 9,
          column: 2
        },
        end: {
          line: 23,
          column: 5
        }
      },
      "4": {
        start: {
          line: 26,
          column: 25
        },
        end: {
          line: 28,
          column: 1
        }
      },
      "5": {
        start: {
          line: 27,
          column: 2
        },
        end: {
          line: 27,
          column: 34
        }
      }
    },
    fnMap: {
      "0": {
        name: "(anonymous_0)",
        decl: {
          start: {
            line: 4,
            column: 22
          },
          end: {
            line: 4,
            column: 23
          }
        },
        loc: {
          start: {
            line: 5,
            column: 2
          },
          end: {
            line: 5,
            column: 20
          }
        },
        line: 5
      },
      "1": {
        name: "(anonymous_1)",
        decl: {
          start: {
            line: 8,
            column: 37
          },
          end: {
            line: 8,
            column: 38
          }
        },
        loc: {
          start: {
            line: 9,
            column: 2
          },
          end: {
            line: 23,
            column: 5
          }
        },
        line: 9
      },
      "2": {
        name: "(anonymous_2)",
        decl: {
          start: {
            line: 26,
            column: 25
          },
          end: {
            line: 26,
            column: 26
          }
        },
        loc: {
          start: {
            line: 27,
            column: 2
          },
          end: {
            line: 27,
            column: 34
          }
        },
        line: 27
      }
    },
    branchMap: {
      "0": {
        loc: {
          start: {
            line: 12,
            column: 6
          },
          end: {
            line: 21,
            column: 14
          }
        },
        type: "cond-expr",
        locations: [{
          start: {
            line: 14,
            column: 10
          },
          end: {
            line: 19,
            column: 19
          }
        }, {
          start: {
            line: 21,
            column: 10
          },
          end: {
            line: 21,
            column: 14
          }
        }],
        line: 12
      }
    },
    s: {
      "0": 0,
      "1": 0,
      "2": 0,
      "3": 0,
      "4": 0,
      "5": 0
    },
    f: {
      "0": 0,
      "1": 0,
      "2": 0
    },
    b: {
      "0": [0, 0]
    },
    _coverageSchema: "1a1c01bbd47fc00a2c39e90264f33305004495a9",
    hash: "df49b39fcb6662e8e84a30daab603169ce72afe5"
  };
  var coverage = global[gcv] || (global[gcv] = {});

  if (!coverage[path] || coverage[path].hash !== hash) {
    coverage[path] = coverageData;
  }

  var actualCoverage = coverage[path];
  {
    // @ts-ignore
    cov_5xvqm60ig = function () {
      return actualCoverage;
    };
  }
  return actualCoverage;
}

cov_5xvqm60ig();

cov_5xvqm60ig().s[0]++;
var Loader = function Loader() {
  cov_5xvqm60ig().f[0]++;
  cov_5xvqm60ig().s[1]++;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, "Loading");
};
cov_5xvqm60ig().s[2]++;
var Error = function Error(_ref) {
  var type = _ref.type,
      message = _ref.message,
      reload = _ref.reload;
  cov_5xvqm60ig().f[1]++;
  cov_5xvqm60ig().s[3]++;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, "[".concat(type, "]").concat(message)), reload ? (cov_5xvqm60ig().b[0][0]++, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
    type: "button",
    onClick: reload
  }, "Reload")) : (cov_5xvqm60ig().b[0][1]++, null));
};
cov_5xvqm60ig().s[4]++;
var Container = function Container() {
  cov_5xvqm60ig().f[2]++;
  cov_5xvqm60ig().s[5]++;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, "Container not defined");
};

/***/ }),

/***/ "./src/core/create-component.tsx":
/*!***************************************!*\
  !*** ./src/core/create-component.tsx ***!
  \***************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom */ "react-dom");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _dispatch__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./dispatch */ "./src/core/dispatch.ts");
/* harmony import */ var _preload__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./preload */ "./src/core/preload.ts");
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./store */ "./src/core/store.ts");
/* harmony import */ var _message__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./message */ "./src/core/message.ts");
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../config */ "./src/config.ts");
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

var _excluded = ["components"],
    _excluded2 = ["dispatch", "$silent"];

function cov_1z56ljsbx() {
  var path = "/Users/am0200/Documents/github/various/src/core/create-component.tsx";
  var hash = "48d60d654b626937c61b88c9abc66a7d10aa3ab4";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "/Users/am0200/Documents/github/various/src/core/create-component.tsx",
    statementMap: {
      "0": {
        start: {
          line: 51,
          column: 20
        },
        end: {
          line: 51,
          column: 43
        }
      },
      "1": {
        start: {
          line: 52,
          column: 26
        },
        end: {
          line: 52,
          column: 85
        }
      },
      "2": {
        start: {
          line: 53,
          column: 34
        },
        end: {
          line: 53,
          column: 40
        }
      },
      "3": {
        start: {
          line: 54,
          column: 23
        },
        end: {
          line: 54,
          column: 39
        }
      },
      "4": {
        start: {
          line: 55,
          column: 40
        },
        end: {
          line: 55,
          column: 66
        }
      },
      "5": {
        start: {
          line: 65,
          column: 12
        },
        end: {
          line: 70,
          column: 5
        }
      },
      "6": {
        start: {
          line: 78,
          column: 33
        },
        end: {
          line: 78,
          column: 34
        }
      },
      "7": {
        start: {
          line: 80,
          column: 15
        },
        end: {
          line: 80,
          column: 47
        }
      },
      "8": {
        start: {
          line: 82,
          column: 18
        },
        end: {
          line: 82,
          column: 49
        }
      },
      "9": {
        start: {
          line: 85,
          column: 6
        },
        end: {
          line: 85,
          column: 64
        }
      },
      "10": {
        start: {
          line: 86,
          column: 6
        },
        end: {
          line: 86,
          column: 27
        }
      },
      "11": {
        start: {
          line: 90,
          column: 6
        },
        end: {
          line: 90,
          column: 75
        }
      },
      "12": {
        start: {
          line: 91,
          column: 6
        },
        end: {
          line: 91,
          column: 34
        }
      },
      "13": {
        start: {
          line: 92,
          column: 6
        },
        end: {
          line: 96,
          column: 8
        }
      },
      "14": {
        start: {
          line: 97,
          column: 6
        },
        end: {
          line: 97,
          column: 29
        }
      },
      "15": {
        start: {
          line: 101,
          column: 6
        },
        end: {
          line: 101,
          column: 31
        }
      },
      "16": {
        start: {
          line: 102,
          column: 6
        },
        end: {
          line: 102,
          column: 29
        }
      },
      "17": {
        start: {
          line: 103,
          column: 6
        },
        end: {
          line: 103,
          column: 29
        }
      },
      "18": {
        start: {
          line: 105,
          column: 6
        },
        end: {
          line: 107,
          column: 7
        }
      },
      "19": {
        start: {
          line: 106,
          column: 8
        },
        end: {
          line: 106,
          column: 26
        }
      },
      "20": {
        start: {
          line: 110,
          column: 23
        },
        end: {
          line: 117,
          column: 5
        }
      },
      "21": {
        start: {
          line: 111,
          column: 30
        },
        end: {
          line: 111,
          column: 58
        }
      },
      "22": {
        start: {
          line: 112,
          column: 6
        },
        end: {
          line: 112,
          column: 86
        }
      },
      "23": {
        start: {
          line: 112,
          column: 61
        },
        end: {
          line: 112,
          column: 85
        }
      },
      "24": {
        start: {
          line: 113,
          column: 6
        },
        end: {
          line: 113,
          column: 65
        }
      },
      "25": {
        start: {
          line: 116,
          column: 6
        },
        end: {
          line: 116,
          column: 49
        }
      },
      "26": {
        start: {
          line: 119,
          column: 21
        },
        end: {
          line: 217,
          column: 5
        }
      },
      "27": {
        start: {
          line: 120,
          column: 6
        },
        end: {
          line: 123,
          column: 7
        }
      },
      "28": {
        start: {
          line: 121,
          column: 8
        },
        end: {
          line: 121,
          column: 110
        }
      },
      "29": {
        start: {
          line: 122,
          column: 8
        },
        end: {
          line: 122,
          column: 14
        }
      },
      "30": {
        start: {
          line: 125,
          column: 6
        },
        end: {
          line: 135,
          column: 7
        }
      },
      "31": {
        start: {
          line: 126,
          column: 41
        },
        end: {
          line: 126,
          column: 70
        }
      },
      "32": {
        start: {
          line: 127,
          column: 8
        },
        end: {
          line: 132,
          column: 10
        }
      },
      "33": {
        start: {
          line: 128,
          column: 10
        },
        end: {
          line: 131,
          column: 11
        }
      },
      "34": {
        start: {
          line: 129,
          column: 12
        },
        end: {
          line: 129,
          column: 52
        }
      },
      "35": {
        start: {
          line: 130,
          column: 12
        },
        end: {
          line: 130,
          column: 32
        }
      },
      "36": {
        start: {
          line: 137,
          column: 6
        },
        end: {
          line: 216,
          column: 8
        }
      },
      "37": {
        start: {
          line: 138,
          column: 8
        },
        end: {
          line: 140,
          column: 9
        }
      },
      "38": {
        start: {
          line: 139,
          column: 10
        },
        end: {
          line: 139,
          column: 16
        }
      },
      "39": {
        start: {
          line: 142,
          column: 8
        },
        end: {
          line: 145,
          column: 9
        }
      },
      "40": {
        start: {
          line: 143,
          column: 10
        },
        end: {
          line: 143,
          column: 88
        }
      },
      "41": {
        start: {
          line: 144,
          column: 10
        },
        end: {
          line: 144,
          column: 16
        }
      },
      "42": {
        start: {
          line: 147,
          column: 30
        },
        end: {
          line: 147,
          column: 82
        }
      },
      "43": {
        start: {
          line: 149,
          column: 8
        },
        end: {
          line: 152,
          column: 9
        }
      },
      "44": {
        start: {
          line: 150,
          column: 10
        },
        end: {
          line: 150,
          column: 95
        }
      },
      "45": {
        start: {
          line: 151,
          column: 10
        },
        end: {
          line: 151,
          column: 16
        }
      },
      "46": {
        start: {
          line: 154,
          column: 8
        },
        end: {
          line: 157,
          column: 9
        }
      },
      "47": {
        start: {
          line: 155,
          column: 10
        },
        end: {
          line: 155,
          column: 105
        }
      },
      "48": {
        start: {
          line: 156,
          column: 10
        },
        end: {
          line: 156,
          column: 16
        }
      },
      "49": {
        start: {
          line: 159,
          column: 34
        },
        end: {
          line: 159,
          column: 76
        }
      },
      "50": {
        start: {
          line: 160,
          column: 42
        },
        end: {
          line: 160,
          column: 44
        }
      },
      "51": {
        start: {
          line: 162,
          column: 8
        },
        end: {
          line: 164,
          column: 9
        }
      },
      "52": {
        start: {
          line: 163,
          column: 10
        },
        end: {
          line: 163,
          column: 49
        }
      },
      "53": {
        start: {
          line: 166,
          column: 8
        },
        end: {
          line: 179,
          column: 12
        }
      },
      "54": {
        start: {
          line: 169,
          column: 12
        },
        end: {
          line: 171,
          column: 13
        }
      },
      "55": {
        start: {
          line: 170,
          column: 14
        },
        end: {
          line: 170,
          column: 20
        }
      },
      "56": {
        start: {
          line: 172,
          column: 12
        },
        end: {
          line: 175,
          column: 13
        }
      },
      "57": {
        start: {
          line: 173,
          column: 14
        },
        end: {
          line: 173,
          column: 96
        }
      },
      "58": {
        start: {
          line: 174,
          column: 14
        },
        end: {
          line: 174,
          column: 20
        }
      },
      "59": {
        start: {
          line: 176,
          column: 12
        },
        end: {
          line: 178,
          column: 13
        }
      },
      "60": {
        start: {
          line: 177,
          column: 14
        },
        end: {
          line: 177,
          column: 53
        }
      },
      "61": {
        start: {
          line: 181,
          column: 8
        },
        end: {
          line: 181,
          column: 54
        }
      },
      "62": {
        start: {
          line: 183,
          column: 8
        },
        end: {
          line: 183,
          column: 42
        }
      },
      "63": {
        start: {
          line: 185,
          column: 8
        },
        end: {
          line: 191,
          column: 10
        }
      },
      "64": {
        start: {
          line: 186,
          column: 10
        },
        end: {
          line: 190,
          column: 11
        }
      },
      "65": {
        start: {
          line: 187,
          column: 12
        },
        end: {
          line: 187,
          column: 23
        }
      },
      "66": {
        start: {
          line: 189,
          column: 12
        },
        end: {
          line: 189,
          column: 71
        }
      },
      "67": {
        start: {
          line: 193,
          column: 8
        },
        end: {
          line: 193,
          column: 36
        }
      },
      "68": {
        start: {
          line: 194,
          column: 8
        },
        end: {
          line: 198,
          column: 10
        }
      },
      "69": {
        start: {
          line: 200,
          column: 8
        },
        end: {
          line: 202,
          column: 9
        }
      },
      "70": {
        start: {
          line: 201,
          column: 10
        },
        end: {
          line: 201,
          column: 16
        }
      },
      "71": {
        start: {
          line: 204,
          column: 8
        },
        end: {
          line: 208,
          column: 9
        }
      },
      "72": {
        start: {
          line: 205,
          column: 10
        },
        end: {
          line: 205,
          column: 30
        }
      },
      "73": {
        start: {
          line: 206,
          column: 10
        },
        end: {
          line: 206,
          column: 47
        }
      },
      "74": {
        start: {
          line: 207,
          column: 10
        },
        end: {
          line: 207,
          column: 16
        }
      },
      "75": {
        start: {
          line: 210,
          column: 32
        },
        end: {
          line: 210,
          column: 48
        }
      },
      "76": {
        start: {
          line: 212,
          column: 8
        },
        end: {
          line: 215,
          column: 10
        }
      },
      "77": {
        start: {
          line: 219,
          column: 15
        },
        end: {
          line: 227,
          column: 5
        }
      },
      "78": {
        start: {
          line: 220,
          column: 6
        },
        end: {
          line: 226,
          column: 8
        }
      },
      "79": {
        start: {
          line: 225,
          column: 8
        },
        end: {
          line: 225,
          column: 29
        }
      },
      "80": {
        start: {
          line: 229,
          column: 28
        },
        end: {
          line: 229,
          column: 76
        }
      },
      "81": {
        start: {
          line: 229,
          column: 34
        },
        end: {
          line: 229,
          column: 76
        }
      },
      "82": {
        start: {
          line: 231,
          column: 41
        },
        end: {
          line: 262,
          column: 5
        }
      },
      "83": {
        start: {
          line: 239,
          column: 6
        },
        end: {
          line: 247,
          column: 7
        }
      },
      "84": {
        start: {
          line: 241,
          column: 8
        },
        end: {
          line: 241,
          column: 45
        }
      },
      "85": {
        start: {
          line: 242,
          column: 8
        },
        end: {
          line: 246,
          column: 10
        }
      },
      "86": {
        start: {
          line: 249,
          column: 16
        },
        end: {
          line: 257,
          column: 8
        }
      },
      "87": {
        start: {
          line: 258,
          column: 17
        },
        end: {
          line: 258,
          column: 62
        }
      },
      "88": {
        start: {
          line: 258,
          column: 49
        },
        end: {
          line: 258,
          column: 61
        }
      },
      "89": {
        start: {
          line: 260,
          column: 6
        },
        end: {
          line: 260,
          column: 39
        }
      },
      "90": {
        start: {
          line: 261,
          column: 6
        },
        end: {
          line: 261,
          column: 60
        }
      },
      "91": {
        start: {
          line: 261,
          column: 19
        },
        end: {
          line: 261,
          column: 60
        }
      },
      "92": {
        start: {
          line: 270,
          column: 10
        },
        end: {
          line: 270,
          column: 20
        }
      },
      "93": {
        start: {
          line: 276,
          column: 10
        },
        end: {
          line: 276,
          column: 20
        }
      },
      "94": {
        start: {
          line: 277,
          column: 36
        },
        end: {
          line: 277,
          column: 38
        }
      },
      "95": {
        start: {
          line: 278,
          column: 45
        },
        end: {
          line: 278,
          column: 47
        }
      },
      "96": {
        start: {
          line: 279,
          column: 28
        },
        end: {
          line: 279,
          column: 67
        }
      },
      "97": {
        start: {
          line: 281,
          column: 6
        },
        end: {
          line: 291,
          column: 7
        }
      },
      "98": {
        start: {
          line: 282,
          column: 8
        },
        end: {
          line: 290,
          column: 16
        }
      },
      "99": {
        start: {
          line: 293,
          column: 6
        },
        end: {
          line: 295,
          column: 7
        }
      },
      "100": {
        start: {
          line: 294,
          column: 8
        },
        end: {
          line: 294,
          column: 73
        }
      },
      "101": {
        start: {
          line: 297,
          column: 6
        },
        end: {
          line: 299,
          column: 8
        }
      },
      "102": {
        start: {
          line: 298,
          column: 8
        },
        end: {
          line: 298,
          column: 36
        }
      },
      "103": {
        start: {
          line: 301,
          column: 6
        },
        end: {
          line: 305,
          column: 8
        }
      },
      "104": {
        start: {
          line: 302,
          column: 8
        },
        end: {
          line: 304,
          column: 9
        }
      },
      "105": {
        start: {
          line: 303,
          column: 10
        },
        end: {
          line: 303,
          column: 46
        }
      },
      "106": {
        start: {
          line: 307,
          column: 6
        },
        end: {
          line: 319,
          column: 7
        }
      },
      "107": {
        start: {
          line: 324,
          column: 26
        },
        end: {
          line: 324,
          column: 35
        }
      },
      "108": {
        start: {
          line: 325,
          column: 2
        },
        end: {
          line: 325,
          column: 34
        }
      }
    },
    fnMap: {
      "0": {
        name: "componentCreator",
        decl: {
          start: {
            line: 42,
            column: 9
          },
          end: {
            line: 42,
            column: 25
          }
        },
        loc: {
          start: {
            line: 50,
            column: 6
          },
          end: {
            line: 326,
            column: 1
          }
        },
        line: 50
      },
      "1": {
        name: "(anonymous_1)",
        decl: {
          start: {
            line: 84,
            column: 4
          },
          end: {
            line: 84,
            column: 5
          }
        },
        loc: {
          start: {
            line: 84,
            column: 24
          },
          end: {
            line: 87,
            column: 5
          }
        },
        line: 84
      },
      "2": {
        name: "(anonymous_2)",
        decl: {
          start: {
            line: 89,
            column: 4
          },
          end: {
            line: 89,
            column: 5
          }
        },
        loc: {
          start: {
            line: 89,
            column: 32
          },
          end: {
            line: 98,
            column: 5
          }
        },
        line: 89
      },
      "3": {
        name: "(anonymous_3)",
        decl: {
          start: {
            line: 100,
            column: 4
          },
          end: {
            line: 100,
            column: 5
          }
        },
        loc: {
          start: {
            line: 100,
            column: 27
          },
          end: {
            line: 108,
            column: 5
          }
        },
        line: 100
      },
      "4": {
        name: "(anonymous_4)",
        decl: {
          start: {
            line: 110,
            column: 23
          },
          end: {
            line: 110,
            column: 24
          }
        },
        loc: {
          start: {
            line: 110,
            column: 29
          },
          end: {
            line: 117,
            column: 5
          }
        },
        line: 110
      },
      "5": {
        name: "(anonymous_5)",
        decl: {
          start: {
            line: 112,
            column: 51
          },
          end: {
            line: 112,
            column: 52
          }
        },
        loc: {
          start: {
            line: 112,
            column: 61
          },
          end: {
            line: 112,
            column: 85
          }
        },
        line: 112
      },
      "6": {
        name: "(anonymous_6)",
        decl: {
          start: {
            line: 119,
            column: 21
          },
          end: {
            line: 119,
            column: 22
          }
        },
        loc: {
          start: {
            line: 119,
            column: 27
          },
          end: {
            line: 217,
            column: 5
          }
        },
        line: 119
      },
      "7": {
        name: "(anonymous_7)",
        decl: {
          start: {
            line: 127,
            column: 38
          },
          end: {
            line: 127,
            column: 39
          }
        },
        loc: {
          start: {
            line: 127,
            column: 47
          },
          end: {
            line: 132,
            column: 9
          }
        },
        line: 127
      },
      "8": {
        name: "(anonymous_8)",
        decl: {
          start: {
            line: 137,
            column: 31
          },
          end: {
            line: 137,
            column: 32
          }
        },
        loc: {
          start: {
            line: 137,
            column: 63
          },
          end: {
            line: 192,
            column: 7
          }
        },
        line: 137
      },
      "9": {
        name: "(anonymous_9)",
        decl: {
          start: {
            line: 168,
            column: 19
          },
          end: {
            line: 168,
            column: 20
          }
        },
        loc: {
          start: {
            line: 168,
            column: 31
          },
          end: {
            line: 179,
            column: 11
          }
        },
        line: 168
      },
      "10": {
        name: "(anonymous_10)",
        decl: {
          start: {
            line: 185,
            column: 48
          },
          end: {
            line: 185,
            column: 49
          }
        },
        loc: {
          start: {
            line: 185,
            column: 54
          },
          end: {
            line: 191,
            column: 9
          }
        },
        line: 185
      },
      "11": {
        name: "(anonymous_11)",
        decl: {
          start: {
            line: 192,
            column: 9
          },
          end: {
            line: 192,
            column: 10
          }
        },
        loc: {
          start: {
            line: 192,
            column: 30
          },
          end: {
            line: 216,
            column: 7
          }
        },
        line: 192
      },
      "12": {
        name: "(anonymous_12)",
        decl: {
          start: {
            line: 219,
            column: 15
          },
          end: {
            line: 219,
            column: 16
          }
        },
        loc: {
          start: {
            line: 219,
            column: 21
          },
          end: {
            line: 227,
            column: 5
          }
        },
        line: 219
      },
      "13": {
        name: "(anonymous_13)",
        decl: {
          start: {
            line: 224,
            column: 9
          },
          end: {
            line: 224,
            column: 10
          }
        },
        loc: {
          start: {
            line: 224,
            column: 15
          },
          end: {
            line: 226,
            column: 7
          }
        },
        line: 224
      },
      "14": {
        name: "(anonymous_14)",
        decl: {
          start: {
            line: 229,
            column: 28
          },
          end: {
            line: 229,
            column: 29
          }
        },
        loc: {
          start: {
            line: 229,
            column: 34
          },
          end: {
            line: 229,
            column: 76
          }
        },
        line: 229
      },
      "15": {
        name: "(anonymous_15)",
        decl: {
          start: {
            line: 231,
            column: 41
          },
          end: {
            line: 231,
            column: 42
          }
        },
        loc: {
          start: {
            line: 238,
            column: 10
          },
          end: {
            line: 262,
            column: 5
          }
        },
        line: 238
      },
      "16": {
        name: "(anonymous_16)",
        decl: {
          start: {
            line: 258,
            column: 17
          },
          end: {
            line: 258,
            column: 18
          }
        },
        loc: {
          start: {
            line: 258,
            column: 49
          },
          end: {
            line: 258,
            column: 61
          }
        },
        line: 258
      },
      "17": {
        name: "(anonymous_17)",
        decl: {
          start: {
            line: 261,
            column: 13
          },
          end: {
            line: 261,
            column: 14
          }
        },
        loc: {
          start: {
            line: 261,
            column: 19
          },
          end: {
            line: 261,
            column: 60
          }
        },
        line: 261
      },
      "18": {
        name: "(anonymous_18)",
        decl: {
          start: {
            line: 264,
            column: 4
          },
          end: {
            line: 264,
            column: 5
          }
        },
        loc: {
          start: {
            line: 264,
            column: 13
          },
          end: {
            line: 320,
            column: 5
          }
        },
        line: 264
      },
      "19": {
        name: "(anonymous_19)",
        decl: {
          start: {
            line: 297,
            column: 24
          },
          end: {
            line: 297,
            column: 25
          }
        },
        loc: {
          start: {
            line: 297,
            column: 33
          },
          end: {
            line: 299,
            column: 7
          }
        },
        line: 297
      },
      "20": {
        name: "(anonymous_20)",
        decl: {
          start: {
            line: 301,
            column: 37
          },
          end: {
            line: 301,
            column: 38
          }
        },
        loc: {
          start: {
            line: 301,
            column: 46
          },
          end: {
            line: 305,
            column: 7
          }
        },
        line: 301
      }
    },
    branchMap: {
      "0": {
        loc: {
          start: {
            line: 55,
            column: 15
          },
          end: {
            line: 55,
            column: 36
          }
        },
        type: "default-arg",
        locations: [{
          start: {
            line: 55,
            column: 24
          },
          end: {
            line: 55,
            column: 36
          }
        }],
        line: 55
      },
      "1": {
        loc: {
          start: {
            line: 105,
            column: 6
          },
          end: {
            line: 107,
            column: 7
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 105,
            column: 6
          },
          end: {
            line: 107,
            column: 7
          }
        }, {
          start: {
            line: undefined,
            column: undefined
          },
          end: {
            line: undefined,
            column: undefined
          }
        }],
        line: 105
      },
      "2": {
        loc: {
          start: {
            line: 120,
            column: 6
          },
          end: {
            line: 123,
            column: 7
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 120,
            column: 6
          },
          end: {
            line: 123,
            column: 7
          }
        }, {
          start: {
            line: undefined,
            column: undefined
          },
          end: {
            line: undefined,
            column: undefined
          }
        }],
        line: 120
      },
      "3": {
        loc: {
          start: {
            line: 128,
            column: 10
          },
          end: {
            line: 131,
            column: 11
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 128,
            column: 10
          },
          end: {
            line: 131,
            column: 11
          }
        }, {
          start: {
            line: undefined,
            column: undefined
          },
          end: {
            line: undefined,
            column: undefined
          }
        }],
        line: 128
      },
      "4": {
        loc: {
          start: {
            line: 138,
            column: 8
          },
          end: {
            line: 140,
            column: 9
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 138,
            column: 8
          },
          end: {
            line: 140,
            column: 9
          }
        }, {
          start: {
            line: undefined,
            column: undefined
          },
          end: {
            line: undefined,
            column: undefined
          }
        }],
        line: 138
      },
      "5": {
        loc: {
          start: {
            line: 142,
            column: 8
          },
          end: {
            line: 145,
            column: 9
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 142,
            column: 8
          },
          end: {
            line: 145,
            column: 9
          }
        }, {
          start: {
            line: undefined,
            column: undefined
          },
          end: {
            line: undefined,
            column: undefined
          }
        }],
        line: 142
      },
      "6": {
        loc: {
          start: {
            line: 147,
            column: 30
          },
          end: {
            line: 147,
            column: 82
          }
        },
        type: "cond-expr",
        locations: [{
          start: {
            line: 147,
            column: 56
          },
          end: {
            line: 147,
            column: 70
          }
        }, {
          start: {
            line: 147,
            column: 73
          },
          end: {
            line: 147,
            column: 82
          }
        }],
        line: 147
      },
      "7": {
        loc: {
          start: {
            line: 147,
            column: 56
          },
          end: {
            line: 147,
            column: 70
          }
        },
        type: "binary-expr",
        locations: [{
          start: {
            line: 147,
            column: 56
          },
          end: {
            line: 147,
            column: 65
          }
        }, {
          start: {
            line: 147,
            column: 69
          },
          end: {
            line: 147,
            column: 70
          }
        }],
        line: 147
      },
      "8": {
        loc: {
          start: {
            line: 149,
            column: 8
          },
          end: {
            line: 152,
            column: 9
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 149,
            column: 8
          },
          end: {
            line: 152,
            column: 9
          }
        }, {
          start: {
            line: undefined,
            column: undefined
          },
          end: {
            line: undefined,
            column: undefined
          }
        }],
        line: 149
      },
      "9": {
        loc: {
          start: {
            line: 154,
            column: 8
          },
          end: {
            line: 157,
            column: 9
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 154,
            column: 8
          },
          end: {
            line: 157,
            column: 9
          }
        }, {
          start: {
            line: undefined,
            column: undefined
          },
          end: {
            line: undefined,
            column: undefined
          }
        }],
        line: 154
      },
      "10": {
        loc: {
          start: {
            line: 162,
            column: 8
          },
          end: {
            line: 164,
            column: 9
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 162,
            column: 8
          },
          end: {
            line: 164,
            column: 9
          }
        }, {
          start: {
            line: undefined,
            column: undefined
          },
          end: {
            line: undefined,
            column: undefined
          }
        }],
        line: 162
      },
      "11": {
        loc: {
          start: {
            line: 169,
            column: 12
          },
          end: {
            line: 171,
            column: 13
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 169,
            column: 12
          },
          end: {
            line: 171,
            column: 13
          }
        }, {
          start: {
            line: undefined,
            column: undefined
          },
          end: {
            line: undefined,
            column: undefined
          }
        }],
        line: 169
      },
      "12": {
        loc: {
          start: {
            line: 172,
            column: 12
          },
          end: {
            line: 175,
            column: 13
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 172,
            column: 12
          },
          end: {
            line: 175,
            column: 13
          }
        }, {
          start: {
            line: undefined,
            column: undefined
          },
          end: {
            line: undefined,
            column: undefined
          }
        }],
        line: 172
      },
      "13": {
        loc: {
          start: {
            line: 176,
            column: 12
          },
          end: {
            line: 178,
            column: 13
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 176,
            column: 12
          },
          end: {
            line: 178,
            column: 13
          }
        }, {
          start: {
            line: undefined,
            column: undefined
          },
          end: {
            line: undefined,
            column: undefined
          }
        }],
        line: 176
      },
      "14": {
        loc: {
          start: {
            line: 186,
            column: 10
          },
          end: {
            line: 190,
            column: 11
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 186,
            column: 10
          },
          end: {
            line: 190,
            column: 11
          }
        }, {
          start: {
            line: 188,
            column: 17
          },
          end: {
            line: 190,
            column: 11
          }
        }],
        line: 186
      },
      "15": {
        loc: {
          start: {
            line: 200,
            column: 8
          },
          end: {
            line: 202,
            column: 9
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 200,
            column: 8
          },
          end: {
            line: 202,
            column: 9
          }
        }, {
          start: {
            line: undefined,
            column: undefined
          },
          end: {
            line: undefined,
            column: undefined
          }
        }],
        line: 200
      },
      "16": {
        loc: {
          start: {
            line: 204,
            column: 8
          },
          end: {
            line: 208,
            column: 9
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 204,
            column: 8
          },
          end: {
            line: 208,
            column: 9
          }
        }, {
          start: {
            line: undefined,
            column: undefined
          },
          end: {
            line: undefined,
            column: undefined
          }
        }],
        line: 204
      },
      "17": {
        loc: {
          start: {
            line: 213,
            column: 21
          },
          end: {
            line: 213,
            column: 92
          }
        },
        type: "cond-expr",
        locations: [{
          start: {
            line: 213,
            column: 46
          },
          end: {
            line: 213,
            column: 61
          }
        }, {
          start: {
            line: 213,
            column: 64
          },
          end: {
            line: 213,
            column: 92
          }
        }],
        line: 213
      },
      "18": {
        loc: {
          start: {
            line: 239,
            column: 6
          },
          end: {
            line: 247,
            column: 7
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 239,
            column: 6
          },
          end: {
            line: 247,
            column: 7
          }
        }, {
          start: {
            line: undefined,
            column: undefined
          },
          end: {
            line: undefined,
            column: undefined
          }
        }],
        line: 239
      },
      "19": {
        loc: {
          start: {
            line: 250,
            column: 14
          },
          end: {
            line: 250,
            column: 85
          }
        },
        type: "cond-expr",
        locations: [{
          start: {
            line: 250,
            column: 32
          },
          end: {
            line: 250,
            column: 69
          }
        }, {
          start: {
            line: 250,
            column: 72
          },
          end: {
            line: 250,
            column: 85
          }
        }],
        line: 250
      },
      "20": {
        loc: {
          start: {
            line: 281,
            column: 6
          },
          end: {
            line: 291,
            column: 7
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 281,
            column: 6
          },
          end: {
            line: 291,
            column: 7
          }
        }, {
          start: {
            line: undefined,
            column: undefined
          },
          end: {
            line: undefined,
            column: undefined
          }
        }],
        line: 281
      },
      "21": {
        loc: {
          start: {
            line: 282,
            column: 15
          },
          end: {
            line: 290,
            column: 16
          }
        },
        type: "cond-expr",
        locations: [{
          start: {
            line: 284,
            column: 12
          },
          end: {
            line: 288,
            column: 14
          }
        }, {
          start: {
            line: 290,
            column: 12
          },
          end: {
            line: 290,
            column: 16
          }
        }],
        line: 282
      },
      "22": {
        loc: {
          start: {
            line: 287,
            column: 22
          },
          end: {
            line: 287,
            column: 83
          }
        },
        type: "cond-expr",
        locations: [{
          start: {
            line: 287,
            column: 58
          },
          end: {
            line: 287,
            column: 67
          }
        }, {
          start: {
            line: 287,
            column: 70
          },
          end: {
            line: 287,
            column: 83
          }
        }],
        line: 287
      },
      "23": {
        loc: {
          start: {
            line: 293,
            column: 6
          },
          end: {
            line: 295,
            column: 7
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 293,
            column: 6
          },
          end: {
            line: 295,
            column: 7
          }
        }, {
          start: {
            line: undefined,
            column: undefined
          },
          end: {
            line: undefined,
            column: undefined
          }
        }],
        line: 293
      },
      "24": {
        loc: {
          start: {
            line: 294,
            column: 15
          },
          end: {
            line: 294,
            column: 73
          }
        },
        type: "cond-expr",
        locations: [{
          start: {
            line: 294,
            column: 55
          },
          end: {
            line: 294,
            column: 65
          }
        }, {
          start: {
            line: 294,
            column: 69
          },
          end: {
            line: 294,
            column: 73
          }
        }],
        line: 294
      },
      "25": {
        loc: {
          start: {
            line: 294,
            column: 15
          },
          end: {
            line: 294,
            column: 51
          }
        },
        type: "binary-expr",
        locations: [{
          start: {
            line: 294,
            column: 15
          },
          end: {
            line: 294,
            column: 23
          }
        }, {
          start: {
            line: 294,
            column: 27
          },
          end: {
            line: 294,
            column: 51
          }
        }],
        line: 294
      },
      "26": {
        loc: {
          start: {
            line: 302,
            column: 8
          },
          end: {
            line: 304,
            column: 9
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 302,
            column: 8
          },
          end: {
            line: 304,
            column: 9
          }
        }, {
          start: {
            line: undefined,
            column: undefined
          },
          end: {
            line: undefined,
            column: undefined
          }
        }],
        line: 302
      },
      "27": {
        loc: {
          start: {
            line: 313,
            column: 19
          },
          end: {
            line: 313,
            column: 55
          }
        },
        type: "cond-expr",
        locations: [{
          start: {
            line: 313,
            column: 31
          },
          end: {
            line: 313,
            column: 40
          }
        }, {
          start: {
            line: 313,
            column: 43
          },
          end: {
            line: 313,
            column: 55
          }
        }],
        line: 313
      }
    },
    s: {
      "0": 0,
      "1": 0,
      "2": 0,
      "3": 0,
      "4": 0,
      "5": 0,
      "6": 0,
      "7": 0,
      "8": 0,
      "9": 0,
      "10": 0,
      "11": 0,
      "12": 0,
      "13": 0,
      "14": 0,
      "15": 0,
      "16": 0,
      "17": 0,
      "18": 0,
      "19": 0,
      "20": 0,
      "21": 0,
      "22": 0,
      "23": 0,
      "24": 0,
      "25": 0,
      "26": 0,
      "27": 0,
      "28": 0,
      "29": 0,
      "30": 0,
      "31": 0,
      "32": 0,
      "33": 0,
      "34": 0,
      "35": 0,
      "36": 0,
      "37": 0,
      "38": 0,
      "39": 0,
      "40": 0,
      "41": 0,
      "42": 0,
      "43": 0,
      "44": 0,
      "45": 0,
      "46": 0,
      "47": 0,
      "48": 0,
      "49": 0,
      "50": 0,
      "51": 0,
      "52": 0,
      "53": 0,
      "54": 0,
      "55": 0,
      "56": 0,
      "57": 0,
      "58": 0,
      "59": 0,
      "60": 0,
      "61": 0,
      "62": 0,
      "63": 0,
      "64": 0,
      "65": 0,
      "66": 0,
      "67": 0,
      "68": 0,
      "69": 0,
      "70": 0,
      "71": 0,
      "72": 0,
      "73": 0,
      "74": 0,
      "75": 0,
      "76": 0,
      "77": 0,
      "78": 0,
      "79": 0,
      "80": 0,
      "81": 0,
      "82": 0,
      "83": 0,
      "84": 0,
      "85": 0,
      "86": 0,
      "87": 0,
      "88": 0,
      "89": 0,
      "90": 0,
      "91": 0,
      "92": 0,
      "93": 0,
      "94": 0,
      "95": 0,
      "96": 0,
      "97": 0,
      "98": 0,
      "99": 0,
      "100": 0,
      "101": 0,
      "102": 0,
      "103": 0,
      "104": 0,
      "105": 0,
      "106": 0,
      "107": 0,
      "108": 0
    },
    f: {
      "0": 0,
      "1": 0,
      "2": 0,
      "3": 0,
      "4": 0,
      "5": 0,
      "6": 0,
      "7": 0,
      "8": 0,
      "9": 0,
      "10": 0,
      "11": 0,
      "12": 0,
      "13": 0,
      "14": 0,
      "15": 0,
      "16": 0,
      "17": 0,
      "18": 0,
      "19": 0,
      "20": 0
    },
    b: {
      "0": [0],
      "1": [0, 0],
      "2": [0, 0],
      "3": [0, 0],
      "4": [0, 0],
      "5": [0, 0],
      "6": [0, 0],
      "7": [0, 0],
      "8": [0, 0],
      "9": [0, 0],
      "10": [0, 0],
      "11": [0, 0],
      "12": [0, 0],
      "13": [0, 0],
      "14": [0, 0],
      "15": [0, 0],
      "16": [0, 0],
      "17": [0, 0],
      "18": [0, 0],
      "19": [0, 0],
      "20": [0, 0],
      "21": [0, 0],
      "22": [0, 0],
      "23": [0, 0],
      "24": [0, 0],
      "25": [0, 0],
      "26": [0, 0],
      "27": [0, 0]
    },
    _coverageSchema: "1a1c01bbd47fc00a2c39e90264f33305004495a9",
    hash: "48d60d654b626937c61b88c9abc66a7d10aa3ab4"
  };
  var coverage = global[gcv] || (global[gcv] = {});

  if (!coverage[path] || coverage[path].hash !== hash) {
    coverage[path] = coverageData;
  }

  var actualCoverage = coverage[path];
  {
    // @ts-ignore
    cov_1z56ljsbx = function () {
      return actualCoverage;
    };
  }
  return actualCoverage;
}

cov_1z56ljsbx();

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _toArray(arr) { return _arrayWithHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableRest(); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }









function componentCreator(_ref) {
  var config = _ref.config,
      nameWidthModule = _ref.name,
      storeDispatcher = _ref.storeDispatcher,
      componentDispatcher = _ref.componentDispatcher,
      Loader = _ref.Loader,
      Error = _ref.Error,
      onMounted = _ref.onMounted;
  cov_1z56ljsbx().f[0]++;
  var storeKeys = (cov_1z56ljsbx().s[0]++, Object.keys((0,_store__WEBPACK_IMPORTED_MODULE_4__.getStore)()));
  var currentDispatch = (cov_1z56ljsbx().s[1]++, (0,_dispatch__WEBPACK_IMPORTED_MODULE_2__["default"])(_store__WEBPACK_IMPORTED_MODULE_4__.dispatch, storeDispatcher, componentDispatcher));

  var _ref2 = (cov_1z56ljsbx().s[2]++, config),
      components = _ref2.components,
      rest = _objectWithoutProperties(_ref2, _excluded);

  var symbolModule = (cov_1z56ljsbx().s[3]++, Symbol('module'));

  var _ref3 = (cov_1z56ljsbx().s[4]++, nameWidthModule.split('.')),
      _ref4 = _slicedToArray(_ref3, 2),
      name = _ref4[0],
      _ref4$ = _ref4[1],
      module = _ref4$ === void 0 ? (cov_1z56ljsbx().b[0][0]++, symbolModule) : _ref4$;

  var R = /*#__PURE__*/function (_Component) {
    _inherits(R, _Component);

    var _super = _createSuper(R);

    function R() {
      var _this;

      _classCallCheck(this, R);

      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      _this = _super.call.apply(_super, [this].concat(args));

      _defineProperty(_assertThisInitialized(_this), "state", (cov_1z56ljsbx().s[5]++, {
        componentExist: undefined,
        componentReady: false,
        errorType: undefined,
        errorMessage: ''
      }));

      _defineProperty(_assertThisInitialized(_this), "unsubscribe", void 0);

      _defineProperty(_assertThisInitialized(_this), "ComponentNode", void 0);

      _defineProperty(_assertThisInitialized(_this), "isUnMounted", void 0);

      _defineProperty(_assertThisInitialized(_this), "retryCount", (cov_1z56ljsbx().s[6]++, 0));

      _defineProperty(_assertThisInitialized(_this), "dispatch", (cov_1z56ljsbx().s[7]++, currentDispatch.bind(_assertThisInitialized(_this), name)));

      _defineProperty(_assertThisInitialized(_this), "postMessage", (cov_1z56ljsbx().s[8]++, (0,_message__WEBPACK_IMPORTED_MODULE_5__.getPostMessage)(nameWidthModule)));

      _defineProperty(_assertThisInitialized(_this), "unMountComponent", (cov_1z56ljsbx().s[20]++, function () {
        cov_1z56ljsbx().f[4]++;
        var mountedComponents = (cov_1z56ljsbx().s[21]++, _this.$getMountedComponents());
        cov_1z56ljsbx().s[22]++;
        mountedComponents = mountedComponents.filter(function (item) {
          cov_1z56ljsbx().f[5]++;
          cov_1z56ljsbx().s[23]++;
          return item !== nameWidthModule;
        });
        cov_1z56ljsbx().s[24]++;
        (0,_store__WEBPACK_IMPORTED_MODULE_4__.dispatch)(_defineProperty({}, _config__WEBPACK_IMPORTED_MODULE_6__.MOUNTED_COMPONENTS, mountedComponents), true); // eslint-disable-next-line no-param-reassign

        cov_1z56ljsbx().s[25]++;
        delete componentDispatcher[nameWidthModule];
      }));

      _defineProperty(_assertThisInitialized(_this), "mountComponent", (cov_1z56ljsbx().s[26]++, function () {
        cov_1z56ljsbx().f[6]++;
        cov_1z56ljsbx().s[27]++;

        if (name === 'store') {
          cov_1z56ljsbx().b[2][0]++;
          cov_1z56ljsbx().s[28]++;

          _this.setState({
            errorType: 'INVALID_COMPONENT',
            errorMessage: 'Cannot load component named `store`'
          });

          cov_1z56ljsbx().s[29]++;
          return;
        } else {
          cov_1z56ljsbx().b[2][1]++;
        }

        cov_1z56ljsbx().s[30]++;

        try {
          var _ref5 = (cov_1z56ljsbx().s[31]++, window.requirejs.s.contexts._),
              registry = _ref5.registry,
              urlFetched = _ref5.urlFetched;

          cov_1z56ljsbx().s[32]++;
          Object.keys(registry).forEach(function (key) {
            cov_1z56ljsbx().f[7]++;
            cov_1z56ljsbx().s[33]++;

            if (registry[key].error) {
              cov_1z56ljsbx().b[3][0]++;
              cov_1z56ljsbx().s[34]++;
              delete urlFetched[registry[key].map.url];
              cov_1z56ljsbx().s[35]++;
              delete registry[key];
            } else {
              cov_1z56ljsbx().b[3][1]++;
            }
          });
        } catch (e) {// ignore
        }

        cov_1z56ljsbx().s[36]++;
        window.requirejs([name], /*#__PURE__*/function () {
          var _ref6 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(C) {
            var componentNode, mountedComponents, actions;
            return regeneratorRuntime.wrap(function _callee$(_context) {
              while (1) {
                switch (_context.prev = _context.next) {
                  case 0:
                    cov_1z56ljsbx().f[8]++;
                    cov_1z56ljsbx().s[37]++;

                    if (!_this.isUnMounted) {
                      _context.next = 8;
                      break;
                    }

                    cov_1z56ljsbx().b[4][0]++;
                    cov_1z56ljsbx().s[38]++;
                    return _context.abrupt("return");

                  case 8:
                    cov_1z56ljsbx().b[4][1]++;

                  case 9:
                    cov_1z56ljsbx().s[39]++;

                    if (C) {
                      _context.next = 18;
                      break;
                    }

                    cov_1z56ljsbx().b[5][0]++;
                    cov_1z56ljsbx().s[40]++;

                    _this.setState({
                      errorMessage: 'Not content',
                      errorType: 'INVALID_COMPONENT'
                    });

                    cov_1z56ljsbx().s[41]++;
                    return _context.abrupt("return");

                  case 18:
                    cov_1z56ljsbx().b[5][1]++;

                  case 19:
                    componentNode = (cov_1z56ljsbx().s[42]++, module === symbolModule ? (cov_1z56ljsbx().b[6][0]++, (cov_1z56ljsbx().b[7][0]++, C.default) || (cov_1z56ljsbx().b[7][1]++, C)) : (cov_1z56ljsbx().b[6][1]++, C[module]));
                    cov_1z56ljsbx().s[43]++;

                    if (componentNode) {
                      _context.next = 29;
                      break;
                    }

                    cov_1z56ljsbx().b[8][0]++;
                    cov_1z56ljsbx().s[44]++;

                    _this.setState({
                      errorMessage: 'Module not defined',
                      errorType: 'INVALID_COMPONENT'
                    });

                    cov_1z56ljsbx().s[45]++;
                    return _context.abrupt("return");

                  case 29:
                    cov_1z56ljsbx().b[8][1]++;

                  case 30:
                    cov_1z56ljsbx().s[46]++;

                    if (!(typeof componentNode !== 'function')) {
                      _context.next = 39;
                      break;
                    }

                    cov_1z56ljsbx().b[9][0]++;
                    cov_1z56ljsbx().s[47]++;

                    _this.setState({
                      errorMessage: 'Component cannot be executed',
                      errorType: 'INVALID_COMPONENT'
                    });

                    cov_1z56ljsbx().s[48]++;
                    return _context.abrupt("return");

                  case 39:
                    cov_1z56ljsbx().b[9][1]++;

                  case 40:
                    mountedComponents = (cov_1z56ljsbx().s[49]++, (0,_store__WEBPACK_IMPORTED_MODULE_4__.getStore)()[_config__WEBPACK_IMPORTED_MODULE_6__.MOUNTED_COMPONENTS]);
                    actions = (cov_1z56ljsbx().s[50]++, {});
                    cov_1z56ljsbx().s[51]++;

                    if (!mountedComponents.includes(nameWidthModule)) {
                      cov_1z56ljsbx().b[10][0]++;
                      cov_1z56ljsbx().s[52]++;
                      mountedComponents.push(nameWidthModule);
                    } else {
                      cov_1z56ljsbx().b[10][1]++;
                    }

                    cov_1z56ljsbx().s[53]++;
                    Object.getOwnPropertyNames(componentNode).forEach(function (method) {
                      cov_1z56ljsbx().f[9]++;
                      cov_1z56ljsbx().s[54]++;

                      if (typeof componentNode[method] !== 'function') {
                        cov_1z56ljsbx().b[11][0]++;
                        cov_1z56ljsbx().s[55]++;
                        return;
                      } else {
                        cov_1z56ljsbx().b[11][1]++;
                      }

                      cov_1z56ljsbx().s[56]++;

                      if (method === '$onMessage') {
                        cov_1z56ljsbx().b[12][0]++;
                        cov_1z56ljsbx().s[57]++;
                        _this.unsubscribe = (0,_store__WEBPACK_IMPORTED_MODULE_4__.subscribe)((0,_message__WEBPACK_IMPORTED_MODULE_5__.getOnMessage)(nameWidthModule, componentNode[method]));
                        cov_1z56ljsbx().s[58]++;
                        return;
                      } else {
                        cov_1z56ljsbx().b[12][1]++;
                      }

                      cov_1z56ljsbx().s[59]++;

                      if (!_config__WEBPACK_IMPORTED_MODULE_6__.IGNORE_STATIC_METHODS.includes(method)) {
                        cov_1z56ljsbx().b[13][0]++;
                        cov_1z56ljsbx().s[60]++;
                        actions[method] = componentNode[method];
                      } else {
                        cov_1z56ljsbx().b[13][1]++;
                      }
                    });
                    cov_1z56ljsbx().s[61]++;
                    componentDispatcher[nameWidthModule] = actions; // eslint-disable-line no-param-reassign

                    cov_1z56ljsbx().s[62]++;
                    _this.ComponentNode = componentNode;
                    cov_1z56ljsbx().s[63]++;

                    _this.setState({
                      componentReady: true
                    }, function () {
                      cov_1z56ljsbx().f[10]++;
                      cov_1z56ljsbx().s[64]++;

                      if (onMounted) {
                        cov_1z56ljsbx().b[14][0]++;
                        cov_1z56ljsbx().s[65]++;
                        onMounted();
                      } else {
                        cov_1z56ljsbx().b[14][1]++;
                        cov_1z56ljsbx().s[66]++;
                        (0,_store__WEBPACK_IMPORTED_MODULE_4__.dispatch)(_defineProperty({}, _config__WEBPACK_IMPORTED_MODULE_6__.MOUNTED_COMPONENTS, mountedComponents), true);
                      }
                    });

                  case 52:
                  case "end":
                    return _context.stop();
                }
              }
            }, _callee);
          }));

          return function (_x) {
            return _ref6.apply(this, arguments);
          };
        }(), function (e) {
          cov_1z56ljsbx().f[11]++;
          cov_1z56ljsbx().s[67]++;
          window.requirejs.undef(name);
          cov_1z56ljsbx().s[68]++;
          window.requirejs.config({
            paths: _defineProperty({}, name, "".concat(components[name], "#"))
          });
          cov_1z56ljsbx().s[69]++;

          if (_this.isUnMounted) {
            cov_1z56ljsbx().b[15][0]++;
            cov_1z56ljsbx().s[70]++;
            return;
          } else {
            cov_1z56ljsbx().b[15][1]++;
          }

          cov_1z56ljsbx().s[71]++;

          if (_this.retryCount < _config__WEBPACK_IMPORTED_MODULE_6__.RETRY_COUNT) {
            cov_1z56ljsbx().b[16][0]++;
            cov_1z56ljsbx().s[72]++;
            _this.retryCount += 1;
            cov_1z56ljsbx().s[73]++;
            setTimeout(_this.mountComponent, 1000);
            cov_1z56ljsbx().s[74]++;
            return;
          } else {
            cov_1z56ljsbx().b[16][1]++;
          }

          var _ref7 = (cov_1z56ljsbx().s[75]++, e.requireModules),
              _ref8 = _slicedToArray(_ref7, 1),
              requireModule = _ref8[0];

          cov_1z56ljsbx().s[76]++;

          _this.setState({
            errorType: requireModule === name ? (cov_1z56ljsbx().b[17][0]++, 'LOADING_ERROR') : (cov_1z56ljsbx().b[17][1]++, 'DEPENDENCIES_LOADING_ERROR'),
            errorMessage: e.message
          });
        });
      }));

      _defineProperty(_assertThisInitialized(_this), "onReload", (cov_1z56ljsbx().s[77]++, function () {
        cov_1z56ljsbx().f[12]++;
        cov_1z56ljsbx().s[78]++;

        _this.setState({
          componentReady: false,
          errorType: undefined,
          errorMessage: ''
        }, function () {
          cov_1z56ljsbx().f[13]++;
          cov_1z56ljsbx().s[79]++;

          _this.mountComponent();
        });
      }));

      _defineProperty(_assertThisInitialized(_this), "$getMountedComponents", (cov_1z56ljsbx().s[80]++, function () {
        cov_1z56ljsbx().f[14]++;
        cov_1z56ljsbx().s[81]++;
        return (0,_store__WEBPACK_IMPORTED_MODULE_4__.getStore)()[_config__WEBPACK_IMPORTED_MODULE_6__.MOUNTED_COMPONENTS];
      }));

      _defineProperty(_assertThisInitialized(_this), "$render", (cov_1z56ljsbx().s[82]++, function (_ref9) {
        var componentName = _ref9.name,
            url = _ref9.url,
            target = _ref9.target,
            props = _ref9.props,
            componentModule = _ref9.module,
            onMountedFn = _ref9.onMounted;
        cov_1z56ljsbx().f[15]++;
        cov_1z56ljsbx().s[83]++;

        if (url) {
          cov_1z56ljsbx().b[18][0]++;
          cov_1z56ljsbx().s[84]++;
          // if define url, means replace component
          window.requirejs.undef(componentName);
          cov_1z56ljsbx().s[85]++;
          window.requirejs.config({
            paths: _defineProperty({}, componentName, "".concat(url, "#"))
          });
        } else {
          cov_1z56ljsbx().b[18][1]++;
        }

        var C = (cov_1z56ljsbx().s[86]++, componentCreator({
          name: componentModule ? (cov_1z56ljsbx().b[19][0]++, "".concat(componentName, ".").concat(componentModule)) : (cov_1z56ljsbx().b[19][1]++, componentName),
          storeDispatcher: storeDispatcher,
          componentDispatcher: componentDispatcher,
          Loader: Loader,
          Error: Error,
          config: _objectSpread(_objectSpread({}, rest), {}, {
            components: components
          }),
          onMounted: onMountedFn
        }));
        cov_1z56ljsbx().s[87]++;

        var Fc = function Fc(p) {
          cov_1z56ljsbx().f[16]++;
          cov_1z56ljsbx().s[88]++;
          return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(C, p);
        };

        cov_1z56ljsbx().s[89]++;
        (0,react_dom__WEBPACK_IMPORTED_MODULE_1__.render)( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(Fc, props), target);
        cov_1z56ljsbx().s[90]++;
        return function () {
          cov_1z56ljsbx().f[17]++;
          cov_1z56ljsbx().s[91]++;
          return (0,react_dom__WEBPACK_IMPORTED_MODULE_1__.unmountComponentAtNode)(target);
        };
      }));

      return _this;
    }

    _createClass(R, [{
      key: "componentDidMount",
      value: function componentDidMount() {
        cov_1z56ljsbx().f[1]++;
        cov_1z56ljsbx().s[9]++;
        this.setState({
          componentExist: (0,_preload__WEBPACK_IMPORTED_MODULE_3__.isComponentLoaded)(name)
        });
        cov_1z56ljsbx().s[10]++;
        this.mountComponent();
      }
    }, {
      key: "componentDidCatch",
      value: function componentDidCatch(e) {
        cov_1z56ljsbx().f[2]++;
        cov_1z56ljsbx().s[11]++;
        this.setState({
          errorType: 'SCRIPT_ERROR',
          errorMessage: e.message
        });
        cov_1z56ljsbx().s[12]++;
        window.requirejs.undef(name);
        cov_1z56ljsbx().s[13]++;
        window.requirejs.config({
          paths: _defineProperty({}, name, "".concat(components[name], "#"))
        });
        cov_1z56ljsbx().s[14]++;
        this.unMountComponent();
      }
    }, {
      key: "componentWillUnmount",
      value: function componentWillUnmount() {
        cov_1z56ljsbx().f[3]++;
        cov_1z56ljsbx().s[15]++;
        this.ComponentNode = null;
        cov_1z56ljsbx().s[16]++;
        this.unMountComponent();
        cov_1z56ljsbx().s[17]++;
        this.isUnMounted = true;
        cov_1z56ljsbx().s[18]++;

        if (this.unsubscribe) {
          cov_1z56ljsbx().b[1][0]++;
          cov_1z56ljsbx().s[19]++;
          this.unsubscribe();
        } else {
          cov_1z56ljsbx().b[1][1]++;
        }
      }
    }, {
      key: "render",
      value: function render() {
        var _this2 = this;

        cov_1z56ljsbx().f[18]++;

        var _ref10 = (cov_1z56ljsbx().s[92]++, this.props),
            componentDispatch = _ref10.dispatch,
            $silent = _ref10.$silent,
            propsRest = _objectWithoutProperties(_ref10, _excluded2);

        var _ref11 = (cov_1z56ljsbx().s[93]++, this.state),
            componentReady = _ref11.componentReady,
            errorMessage = _ref11.errorMessage,
            errorType = _ref11.errorType,
            componentExist = _ref11.componentExist;

        var store = (cov_1z56ljsbx().s[94]++, {});
        var componentProps = (cov_1z56ljsbx().s[95]++, {});
        var ComponentNode = (cov_1z56ljsbx().s[96]++, this.ComponentNode);
        cov_1z56ljsbx().s[97]++;

        if (errorType) {
          cov_1z56ljsbx().b[20][0]++;
          cov_1z56ljsbx().s[98]++;
          return !$silent ? (cov_1z56ljsbx().b[21][0]++, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(Error, {
            type: _config__WEBPACK_IMPORTED_MODULE_6__.ERROR_TYPE[errorType],
            message: errorMessage,
            reload: errorType === 'INVALID_COMPONENT' ? (cov_1z56ljsbx().b[22][0]++, undefined) : (cov_1z56ljsbx().b[22][1]++, this.onReload)
          })) : (cov_1z56ljsbx().b[21][1]++, null);
        } else {
          cov_1z56ljsbx().b[20][1]++;
        }

        cov_1z56ljsbx().s[99]++;

        if (!componentReady) {
          cov_1z56ljsbx().b[23][0]++;
          cov_1z56ljsbx().s[100]++;
          return (cov_1z56ljsbx().b[25][0]++, !$silent) && (cov_1z56ljsbx().b[25][1]++, componentExist === false) ? (cov_1z56ljsbx().b[24][0]++, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(Loader, null)) : (cov_1z56ljsbx().b[24][1]++, null);
        } else {
          cov_1z56ljsbx().b[23][1]++;
        }

        cov_1z56ljsbx().s[101]++;
        storeKeys.forEach(function (key) {
          cov_1z56ljsbx().f[19]++;
          cov_1z56ljsbx().s[102]++;
          store[key] = _this2.props[key];
        });
        cov_1z56ljsbx().s[103]++;
        Object.keys(propsRest).forEach(function (key) {
          cov_1z56ljsbx().f[20]++;
          cov_1z56ljsbx().s[104]++;

          if (store[key] !== propsRest[key]) {
            cov_1z56ljsbx().b[26][0]++;
            cov_1z56ljsbx().s[105]++;
            componentProps[key] = propsRest[key];
          } else {
            cov_1z56ljsbx().b[26][1]++;
          }
        });
        cov_1z56ljsbx().s[106]++;
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(ComponentNode, _extends({}, componentProps, {
          $config: rest,
          $dispatch: this.dispatch,
          $store: store,
          $render: onMounted ? (cov_1z56ljsbx().b[27][0]++, undefined) : (cov_1z56ljsbx().b[27][1]++, this.$render),
          $preload: _preload__WEBPACK_IMPORTED_MODULE_3__.preload,
          $postMessage: this.postMessage,
          $getMountedComponents: this.$getMountedComponents,
          $isComponentLoaded: _preload__WEBPACK_IMPORTED_MODULE_3__.isComponentLoaded
        }));
      }
    }]);

    return R;
  }(react__WEBPACK_IMPORTED_MODULE_0__.Component); // A spread argument must either have a tuple type or be passed to a rest parameter.ts(2556)


  var _ref12 = (cov_1z56ljsbx().s[107]++, storeKeys),
      _ref13 = _toArray(_ref12),
      key0 = _ref13[0],
      keyn = _ref13.slice(1);

  cov_1z56ljsbx().s[108]++;
  return _store__WEBPACK_IMPORTED_MODULE_4__.connect.apply(void 0, [key0].concat(_toConsumableArray(keyn)))(R);
}

/* harmony default export */ __webpack_exports__["default"] = (componentCreator);

/***/ }),

/***/ "./src/core/dispatch.ts":
/*!******************************!*\
  !*** ./src/core/dispatch.ts ***!
  \******************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* export default binding */ __WEBPACK_DEFAULT_EXPORT__; }
/* harmony export */ });
function cov_1u32i3x4tu() {
  var path = "/Users/am0200/Documents/github/various/src/core/dispatch.ts";
  var hash = "2d851a59a82e459ae3db22bc63df33d86e519fed";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "/Users/am0200/Documents/github/various/src/core/dispatch.ts",
    statementMap: {
      "0": {
        start: {
          line: 12,
          column: 2
        },
        end: {
          line: 39,
          column: 3
        }
      },
      "1": {
        start: {
          line: 19,
          column: 28
        },
        end: {
          line: 19,
          column: 59
        }
      },
      "2": {
        start: {
          line: 21,
          column: 4
        },
        end: {
          line: 26,
          column: 5
        }
      },
      "3": {
        start: {
          line: 22,
          column: 6
        },
        end: {
          line: 24,
          column: 7
        }
      },
      "4": {
        start: {
          line: 23,
          column: 8
        },
        end: {
          line: 23,
          column: 60
        }
      },
      "5": {
        start: {
          line: 25,
          column: 6
        },
        end: {
          line: 25,
          column: 70
        }
      },
      "6": {
        start: {
          line: 28,
          column: 20
        },
        end: {
          line: 28,
          column: 45
        }
      },
      "7": {
        start: {
          line: 30,
          column: 4
        },
        end: {
          line: 32,
          column: 5
        }
      },
      "8": {
        start: {
          line: 31,
          column: 6
        },
        end: {
          line: 31,
          column: 59
        }
      },
      "9": {
        start: {
          line: 34,
          column: 4
        },
        end: {
          line: 36,
          column: 5
        }
      },
      "10": {
        start: {
          line: 35,
          column: 6
        },
        end: {
          line: 35,
          column: 83
        }
      },
      "11": {
        start: {
          line: 38,
          column: 4
        },
        end: {
          line: 38,
          column: 43
        }
      }
    },
    fnMap: {
      "0": {
        name: "(anonymous_0)",
        decl: {
          start: {
            line: 7,
            column: 15
          },
          end: {
            line: 7,
            column: 16
          }
        },
        loc: {
          start: {
            line: 11,
            column: 2
          },
          end: {
            line: 40,
            column: 1
          }
        },
        line: 11
      },
      "1": {
        name: "(anonymous_1)",
        decl: {
          start: {
            line: 12,
            column: 9
          },
          end: {
            line: 12,
            column: 10
          }
        },
        loc: {
          start: {
            line: 18,
            column: 4
          },
          end: {
            line: 39,
            column: 3
          }
        },
        line: 18
      }
    },
    branchMap: {
      "0": {
        loc: {
          start: {
            line: 19,
            column: 28
          },
          end: {
            line: 19,
            column: 59
          }
        },
        type: "binary-expr",
        locations: [{
          start: {
            line: 19,
            column: 28
          },
          end: {
            line: 19,
            column: 47
          }
        }, {
          start: {
            line: 19,
            column: 51
          },
          end: {
            line: 19,
            column: 59
          }
        }],
        line: 19
      },
      "1": {
        loc: {
          start: {
            line: 21,
            column: 4
          },
          end: {
            line: 26,
            column: 5
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 21,
            column: 4
          },
          end: {
            line: 26,
            column: 5
          }
        }, {
          start: {
            line: undefined,
            column: undefined
          },
          end: {
            line: undefined,
            column: undefined
          }
        }],
        line: 21
      },
      "2": {
        loc: {
          start: {
            line: 22,
            column: 6
          },
          end: {
            line: 24,
            column: 7
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 22,
            column: 6
          },
          end: {
            line: 24,
            column: 7
          }
        }, {
          start: {
            line: undefined,
            column: undefined
          },
          end: {
            line: undefined,
            column: undefined
          }
        }],
        line: 22
      },
      "3": {
        loc: {
          start: {
            line: 30,
            column: 4
          },
          end: {
            line: 32,
            column: 5
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 30,
            column: 4
          },
          end: {
            line: 32,
            column: 5
          }
        }, {
          start: {
            line: undefined,
            column: undefined
          },
          end: {
            line: undefined,
            column: undefined
          }
        }],
        line: 30
      },
      "4": {
        loc: {
          start: {
            line: 34,
            column: 4
          },
          end: {
            line: 36,
            column: 5
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 34,
            column: 4
          },
          end: {
            line: 36,
            column: 5
          }
        }, {
          start: {
            line: undefined,
            column: undefined
          },
          end: {
            line: undefined,
            column: undefined
          }
        }],
        line: 34
      }
    },
    s: {
      "0": 0,
      "1": 0,
      "2": 0,
      "3": 0,
      "4": 0,
      "5": 0,
      "6": 0,
      "7": 0,
      "8": 0,
      "9": 0,
      "10": 0,
      "11": 0
    },
    f: {
      "0": 0,
      "1": 0
    },
    b: {
      "0": [0, 0],
      "1": [0, 0],
      "2": [0, 0],
      "3": [0, 0],
      "4": [0, 0]
    },
    _coverageSchema: "1a1c01bbd47fc00a2c39e90264f33305004495a9",
    hash: "2d851a59a82e459ae3db22bc63df33d86e519fed"
  };
  var coverage = global[gcv] || (global[gcv] = {});

  if (!coverage[path] || coverage[path].hash !== hash) {
    coverage[path] = coverageData;
  }

  var actualCoverage = coverage[path];
  {
    // @ts-ignore
    cov_1u32i3x4tu = function () {
      return actualCoverage;
    };
  }
  return actualCoverage;
}

cov_1u32i3x4tu();
/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(dispatch, storeDispatcher, componentDispatcher) {
  cov_1u32i3x4tu().f[0]++;
  cov_1u32i3x4tu().s[0]++;
  return function (dispatcher, name, func, value) {
    cov_1u32i3x4tu().f[1]++;
    var currentDispatch = (cov_1u32i3x4tu().s[1]++, (cov_1u32i3x4tu().b[0][0]++, this.props.dispatch) || (cov_1u32i3x4tu().b[0][1]++, dispatch));
    cov_1u32i3x4tu().s[2]++;

    if (name === 'store') {
      cov_1u32i3x4tu().b[1][0]++;
      cov_1u32i3x4tu().s[3]++;

      if (!storeDispatcher[func]) {
        cov_1u32i3x4tu().b[2][0]++;
        cov_1u32i3x4tu().s[4]++;
        throw new Error("action `".concat(func, "` is not present"));
      } else {
        cov_1u32i3x4tu().b[2][1]++;
      }

      cov_1u32i3x4tu().s[5]++;
      return currentDispatch(storeDispatcher[func], value, dispatcher);
    } else {
      cov_1u32i3x4tu().b[1][1]++;
    }

    var actions = (cov_1u32i3x4tu().s[6]++, componentDispatcher[name]);
    cov_1u32i3x4tu().s[7]++;

    if (!actions) {
      cov_1u32i3x4tu().b[3][0]++;
      cov_1u32i3x4tu().s[8]++;
      throw new Error("component `".concat(name, "` is not ready"));
    } else {
      cov_1u32i3x4tu().b[3][1]++;
    }

    cov_1u32i3x4tu().s[9]++;

    if (!actions[func]) {
      cov_1u32i3x4tu().b[4][0]++;
      cov_1u32i3x4tu().s[10]++;
      throw new Error("action `".concat(func, "` of component `").concat(name, "` is not present"));
    } else {
      cov_1u32i3x4tu().b[4][1]++;
    }

    cov_1u32i3x4tu().s[11]++;
    return actions[func](value, dispatcher);
  };
}

/***/ }),

/***/ "./src/core/message.ts":
/*!*****************************!*\
  !*** ./src/core/message.ts ***!
  \*****************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getPostMessage": function() { return /* binding */ getPostMessage; },
/* harmony export */   "getOnMessage": function() { return /* binding */ getOnMessage; }
/* harmony export */ });
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./store */ "./src/core/store.ts");
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../config */ "./src/config.ts");
function cov_lnx6a7y33() {
  var path = "/Users/am0200/Documents/github/various/src/core/message.ts";
  var hash = "464662c7cba8cbe8dbb5f3fb1b1087c7b3a746a8";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "/Users/am0200/Documents/github/various/src/core/message.ts",
    statementMap: {
      "0": {
        start: {
          line: 8,
          column: 30
        },
        end: {
          line: 15,
          column: 10
        }
      },
      "1": {
        start: {
          line: 8,
          column: 48
        },
        end: {
          line: 15,
          column: 10
        }
      },
      "2": {
        start: {
          line: 8,
          column: 78
        },
        end: {
          line: 15,
          column: 10
        }
      },
      "3": {
        start: {
          line: 17,
          column: 28
        },
        end: {
          line: 24,
          column: 1
        }
      },
      "4": {
        start: {
          line: 17,
          column: 68
        },
        end: {
          line: 24,
          column: 1
        }
      },
      "5": {
        start: {
          line: 18,
          column: 2
        },
        end: {
          line: 23,
          column: 3
        }
      },
      "6": {
        start: {
          line: 19,
          column: 47
        },
        end: {
          line: 19,
          column: 91
        }
      },
      "7": {
        start: {
          line: 20,
          column: 4
        },
        end: {
          line: 22,
          column: 5
        }
      },
      "8": {
        start: {
          line: 21,
          column: 6
        },
        end: {
          line: 21,
          column: 51
        }
      }
    },
    fnMap: {
      "0": {
        name: "(anonymous_0)",
        decl: {
          start: {
            line: 8,
            column: 30
          },
          end: {
            line: 8,
            column: 31
          }
        },
        loc: {
          start: {
            line: 8,
            column: 48
          },
          end: {
            line: 15,
            column: 10
          }
        },
        line: 8
      },
      "1": {
        name: "(anonymous_1)",
        decl: {
          start: {
            line: 8,
            column: 48
          },
          end: {
            line: 8,
            column: 49
          }
        },
        loc: {
          start: {
            line: 8,
            column: 78
          },
          end: {
            line: 15,
            column: 10
          }
        },
        line: 8
      },
      "2": {
        name: "(anonymous_2)",
        decl: {
          start: {
            line: 17,
            column: 28
          },
          end: {
            line: 17,
            column: 29
          }
        },
        loc: {
          start: {
            line: 17,
            column: 68
          },
          end: {
            line: 24,
            column: 1
          }
        },
        line: 17
      },
      "3": {
        name: "(anonymous_3)",
        decl: {
          start: {
            line: 17,
            column: 68
          },
          end: {
            line: 17,
            column: 69
          }
        },
        loc: {
          start: {
            line: 17,
            column: 84
          },
          end: {
            line: 24,
            column: 1
          }
        },
        line: 17
      }
    },
    branchMap: {
      "0": {
        loc: {
          start: {
            line: 18,
            column: 2
          },
          end: {
            line: 23,
            column: 3
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 18,
            column: 2
          },
          end: {
            line: 23,
            column: 3
          }
        }, {
          start: {
            line: undefined,
            column: undefined
          },
          end: {
            line: undefined,
            column: undefined
          }
        }],
        line: 18
      },
      "1": {
        loc: {
          start: {
            line: 20,
            column: 4
          },
          end: {
            line: 22,
            column: 5
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 20,
            column: 4
          },
          end: {
            line: 22,
            column: 5
          }
        }, {
          start: {
            line: undefined,
            column: undefined
          },
          end: {
            line: undefined,
            column: undefined
          }
        }],
        line: 20
      }
    },
    s: {
      "0": 0,
      "1": 0,
      "2": 0,
      "3": 0,
      "4": 0,
      "5": 0,
      "6": 0,
      "7": 0,
      "8": 0
    },
    f: {
      "0": 0,
      "1": 0,
      "2": 0,
      "3": 0
    },
    b: {
      "0": [0, 0],
      "1": [0, 0]
    },
    _coverageSchema: "1a1c01bbd47fc00a2c39e90264f33305004495a9",
    hash: "464662c7cba8cbe8dbb5f3fb1b1087c7b3a746a8"
  };
  var coverage = global[gcv] || (global[gcv] = {});

  if (!coverage[path] || coverage[path].hash !== hash) {
    coverage[path] = coverageData;
  }

  var actualCoverage = coverage[path];
  {
    // @ts-ignore
    cov_lnx6a7y33 = function () {
      return actualCoverage;
    };
  }
  return actualCoverage;
}

cov_lnx6a7y33();

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



cov_lnx6a7y33().s[0]++;
var getPostMessage = function getPostMessage(type) {
  cov_lnx6a7y33().f[0]++;
  cov_lnx6a7y33().s[1]++;
  return function (name, value) {
    cov_lnx6a7y33().f[1]++;
    cov_lnx6a7y33().s[2]++;
    return (0,_store__WEBPACK_IMPORTED_MODULE_0__.dispatch)(_defineProperty({}, _config__WEBPACK_IMPORTED_MODULE_1__.MESSAGE_KEY, {
      timestamp: +new Date(),
      type: type,
      name: name,
      value: value
    }));
  };
};
cov_lnx6a7y33().s[3]++;
var getOnMessage = function getOnMessage(type, onMessage) {
  cov_lnx6a7y33().f[2]++;
  cov_lnx6a7y33().s[4]++;
  return function (keys) {
    cov_lnx6a7y33().f[3]++;
    cov_lnx6a7y33().s[5]++;

    if (keys[0] === _config__WEBPACK_IMPORTED_MODULE_1__.MESSAGE_KEY) {
      cov_lnx6a7y33().b[0][0]++;

      var _ref = (cov_lnx6a7y33().s[6]++, (0,_store__WEBPACK_IMPORTED_MODULE_0__.getStore)()[_config__WEBPACK_IMPORTED_MODULE_1__.MESSAGE_KEY]),
          name = _ref.name,
          value = _ref.value,
          triggerType = _ref.type;

      cov_lnx6a7y33().s[7]++;

      if (triggerType !== type) {
        cov_lnx6a7y33().b[1][0]++;
        cov_lnx6a7y33().s[8]++;
        onMessage({
          name: name,
          value: value,
          type: triggerType
        });
      } else {
        cov_lnx6a7y33().b[1][1]++;
      }
    } else {
      cov_lnx6a7y33().b[0][1]++;
    }
  };
};

/***/ }),

/***/ "./src/core/preload.ts":
/*!*****************************!*\
  !*** ./src/core/preload.ts ***!
  \*****************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "preload": function() { return /* binding */ preload; },
/* harmony export */   "isComponentLoaded": function() { return /* binding */ isComponentLoaded; }
/* harmony export */ });
function cov_10soh2rpfz() {
  var path = "/Users/am0200/Documents/github/various/src/core/preload.ts";
  var hash = "2085cee76c64f769cf8e64fba0935a687b160830";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "/Users/am0200/Documents/github/various/src/core/preload.ts",
    statementMap: {
      "0": {
        start: {
          line: 1,
          column: 23
        },
        end: {
          line: 3,
          column: 2
        }
      },
      "1": {
        start: {
          line: 1,
          column: 44
        },
        end: {
          line: 3,
          column: 2
        }
      },
      "2": {
        start: {
          line: 2,
          column: 2
        },
        end: {
          line: 2,
          column: 42
        }
      },
      "3": {
        start: {
          line: 5,
          column: 33
        },
        end: {
          line: 8,
          column: 1
        }
      },
      "4": {
        start: {
          line: 6,
          column: 14
        },
        end: {
          line: 6,
          column: 29
        }
      },
      "5": {
        start: {
          line: 7,
          column: 2
        },
        end: {
          line: 7,
          column: 84
        }
      }
    },
    fnMap: {
      "0": {
        name: "(anonymous_0)",
        decl: {
          start: {
            line: 1,
            column: 23
          },
          end: {
            line: 1,
            column: 24
          }
        },
        loc: {
          start: {
            line: 1,
            column: 44
          },
          end: {
            line: 3,
            column: 2
          }
        },
        line: 1
      },
      "1": {
        name: "(anonymous_1)",
        decl: {
          start: {
            line: 1,
            column: 62
          },
          end: {
            line: 1,
            column: 63
          }
        },
        loc: {
          start: {
            line: 1,
            column: 83
          },
          end: {
            line: 3,
            column: 1
          }
        },
        line: 1
      },
      "2": {
        name: "(anonymous_2)",
        decl: {
          start: {
            line: 5,
            column: 33
          },
          end: {
            line: 5,
            column: 34
          }
        },
        loc: {
          start: {
            line: 5,
            column: 51
          },
          end: {
            line: 8,
            column: 1
          }
        },
        line: 5
      }
    },
    branchMap: {
      "0": {
        loc: {
          start: {
            line: 7,
            column: 9
          },
          end: {
            line: 7,
            column: 84
          }
        },
        type: "binary-expr",
        locations: [{
          start: {
            line: 7,
            column: 9
          },
          end: {
            line: 7,
            column: 38
          }
        }, {
          start: {
            line: 7,
            column: 42
          },
          end: {
            line: 7,
            column: 84
          }
        }],
        line: 7
      }
    },
    s: {
      "0": 0,
      "1": 0,
      "2": 0,
      "3": 0,
      "4": 0,
      "5": 0
    },
    f: {
      "0": 0,
      "1": 0,
      "2": 0
    },
    b: {
      "0": [0, 0]
    },
    _coverageSchema: "1a1c01bbd47fc00a2c39e90264f33305004495a9",
    hash: "2085cee76c64f769cf8e64fba0935a687b160830"
  };
  var coverage = global[gcv] || (global[gcv] = {});

  if (!coverage[path] || coverage[path].hash !== hash) {
    coverage[path] = coverageData;
  }

  var actualCoverage = coverage[path];
  {
    // @ts-ignore
    cov_10soh2rpfz = function () {
      return actualCoverage;
    };
  }
  return actualCoverage;
}

cov_10soh2rpfz();

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

cov_10soh2rpfz().s[0]++;
var preload = function preload(names) {
  cov_10soh2rpfz().f[0]++;
  cov_10soh2rpfz().s[1]++;
  return new Promise(function (resolve, reject) {
    cov_10soh2rpfz().f[1]++;
    cov_10soh2rpfz().s[2]++;
    window.requirejs(names, resolve, reject);
  });
};
cov_10soh2rpfz().s[3]++;
var isComponentLoaded = function isComponentLoaded(name) {
  cov_10soh2rpfz().f[2]++;

  var _ref = (cov_10soh2rpfz().s[4]++, name.split('.')),
      _ref2 = _slicedToArray(_ref, 1),
      m = _ref2[0];

  cov_10soh2rpfz().s[5]++;
  return (cov_10soh2rpfz().b[0][0]++, window.requirejs.specified(m)) && (cov_10soh2rpfz().b[0][1]++, !!window.requirejs.s.contexts._.defined[m]);
};

/***/ }),

/***/ "./src/core/store.ts":
/*!***************************!*\
  !*** ./src/core/store.ts ***!
  \***************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createStore": function() { return /* binding */ createStore; },
/* harmony export */   "getStore": function() { return /* binding */ getStore; },
/* harmony export */   "connect": function() { return /* binding */ connect; },
/* harmony export */   "dispatch": function() { return /* binding */ dispatch; },
/* harmony export */   "subscribe": function() { return /* binding */ subscribe; }
/* harmony export */ });
/* harmony import */ var nycticorax__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! nycticorax */ "./node_modules/nycticorax/dist/esm/index.js");
function cov_174zzuftr8() {
  var path = "/Users/am0200/Documents/github/various/src/core/store.ts";
  var hash = "13c2ddff122fb0bed2555fc08534d2115651ad33";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "/Users/am0200/Documents/github/various/src/core/store.ts",
    statementMap: {
      "0": {
        start: {
          line: 10,
          column: 4
        },
        end: {
          line: 10,
          column: 37
        }
      }
    },
    fnMap: {},
    branchMap: {},
    s: {
      "0": 0
    },
    f: {},
    b: {},
    _coverageSchema: "1a1c01bbd47fc00a2c39e90264f33305004495a9",
    hash: "13c2ddff122fb0bed2555fc08534d2115651ad33"
  };
  var coverage = global[gcv] || (global[gcv] = {});

  if (!coverage[path] || coverage[path].hash !== hash) {
    coverage[path] = coverageData;
  }

  var actualCoverage = coverage[path];
  {
    // @ts-ignore
    cov_174zzuftr8 = function () {
      return actualCoverage;
    };
  }
  return actualCoverage;
}

cov_174zzuftr8();


var _ref = (cov_174zzuftr8().s[0]++, new nycticorax__WEBPACK_IMPORTED_MODULE_0__["default"]()),
    createStore = _ref.createStore,
    getStore = _ref.getStore,
    connect = _ref.connect,
    dispatch = _ref.dispatch,
    subscribe = _ref.subscribe;



/***/ }),

/***/ "./node_modules/fast-deep-equal/index.js":
/*!***********************************************!*\
  !*** ./node_modules/fast-deep-equal/index.js ***!
  \***********************************************/
/***/ (function(module) {



// do not edit .js files directly - edit src/index.jst



module.exports = function equal(a, b) {
  if (a === b) return true;

  if (a && b && typeof a == 'object' && typeof b == 'object') {
    if (a.constructor !== b.constructor) return false;

    var length, i, keys;
    if (Array.isArray(a)) {
      length = a.length;
      if (length != b.length) return false;
      for (i = length; i-- !== 0;)
        if (!equal(a[i], b[i])) return false;
      return true;
    }



    if (a.constructor === RegExp) return a.source === b.source && a.flags === b.flags;
    if (a.valueOf !== Object.prototype.valueOf) return a.valueOf() === b.valueOf();
    if (a.toString !== Object.prototype.toString) return a.toString() === b.toString();

    keys = Object.keys(a);
    length = keys.length;
    if (length !== Object.keys(b).length) return false;

    for (i = length; i-- !== 0;)
      if (!Object.prototype.hasOwnProperty.call(b, keys[i])) return false;

    for (i = length; i-- !== 0;) {
      var key = keys[i];

      if (!equal(a[key], b[key])) return false;
    }

    return true;
  }

  // true if both NaN, false otherwise
  return a!==a && b!==b;
};


/***/ }),

/***/ "./node_modules/nycticorax/dist/esm/connect.js":
/*!*****************************************************!*\
  !*** ./node_modules/nycticorax/dist/esm/connect.js ***!
  \*****************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ "./node_modules/nycticorax/node_modules/tslib/tslib.es6.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);


var ignoreStaticMethods = [
    'name',
    'prototype',
    'length',
    'propTypes',
    'defaultProps',
    'getDerivedStateFromProps',
    'contextTypes',
    'displayName',
];
function connect(nycticorax) {
    var getStore = nycticorax.getStore, subscribe = nycticorax.subscribe, dispatch = nycticorax.dispatch;
    return function () {
        var keys = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            keys[_i] = arguments[_i];
        }
        return function (C) {
            var R = (function (_super) {
                (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__extends)(R, _super);
                function R() {
                    var _this = _super !== null && _super.apply(this, arguments) || this;
                    _this.state = {
                        props: getStore(),
                    };
                    return _this;
                }
                R.prototype.componentDidMount = function () {
                    var _this = this;
                    this.unsubscribe = subscribe(function (triggerKeys) {
                        var sames = keys.filter(function (k) { return triggerKeys.includes(k); });
                        if (sames.length) {
                            _this.setState({ props: getStore() });
                        }
                    });
                };
                R.prototype.componentWillUnmount = function () {
                    this.unsubscribe();
                };
                R.prototype.render = function () {
                    var props = this.state.props;
                    var rest = Object.assign({ dispatch: dispatch }, props, this.props);
                    return (react__WEBPACK_IMPORTED_MODULE_0___default().createElement(C, (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__assign)({}, rest)));
                };
                return R;
            }(react__WEBPACK_IMPORTED_MODULE_0__.Component));
            Object
                .getOwnPropertyNames(C)
                .forEach(function (method) {
                var key = method;
                if (!ignoreStaticMethods.includes(method)) {
                    R[key] = C[key];
                }
            });
            return R;
        };
    };
}
/* harmony default export */ __webpack_exports__["default"] = (connect);
//# sourceMappingURL=connect.js.map

/***/ }),

/***/ "./node_modules/nycticorax/dist/esm/core.js":
/*!**************************************************!*\
  !*** ./node_modules/nycticorax/dist/esm/core.js ***!
  \**************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ "./node_modules/nycticorax/node_modules/tslib/tslib.es6.js");
/* harmony import */ var fast_deep_equal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! fast-deep-equal */ "./node_modules/fast-deep-equal/index.js");
/* harmony import */ var fast_deep_equal__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(fast_deep_equal__WEBPACK_IMPORTED_MODULE_0__);


var Nycticorax = (function () {
    function Nycticorax() {
        var _this = this;
        this.createStore = function (state) {
            _this.state = state;
        };
        this.getStore = function () {
            var keys = Reflect.ownKeys(_this.state);
            var next = {};
            keys.forEach(function (key) {
                next[key] = JSON.parse(JSON.stringify(_this.state[key]));
            });
            return next;
        };
        this.subscribe = function (listener) {
            _this.listeners.push(listener);
            return function () {
                var listeners = _this.listeners.slice();
                var index = listeners.indexOf(listener);
                if (index > -1) {
                    listeners.splice(index, 1);
                }
                _this.listeners = listeners;
            };
        };
        this.dispatch = function (next) {
            var args = [];
            for (var _i = 1; _i < arguments.length; _i++) {
                args[_i - 1] = arguments[_i];
            }
            var type = typeof next;
            if (type === 'function') {
                return next.apply(void 0, (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__spreadArray)([{
                        dispatch: function (o) { return _this.dispatch(o, true); },
                        getStore: _this.getStore,
                    }], args));
            }
            _this.emits = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__assign)((0,tslib__WEBPACK_IMPORTED_MODULE_1__.__assign)({}, _this.emits), next);
            if (args[0]) {
                _this.emit();
            }
            else {
                clearTimeout(_this.timer);
                _this.timer = setTimeout(_this.emit);
            }
            return undefined;
        };
        this.emit = function () {
            var next = _this.emits;
            var actives = [];
            var keys = Reflect.ownKeys(next);
            for (var i = 0; i < keys.length; i += 1) {
                var key = keys[i];
                if (!(key in _this.state)) {
                    continue;
                }
                if (fast_deep_equal__WEBPACK_IMPORTED_MODULE_0___default()(_this.state[key], next[key])) {
                    continue;
                }
                _this.state[key] = next[key];
                actives.push(key);
            }
            if (actives.length) {
                _this.listeners.forEach(function (listener) { return listener(actives); });
            }
            _this.emits = {};
            _this.timer = undefined;
        };
        this.state = {};
        this.listeners = [];
        this.emits = {};
        this.timer = undefined;
    }
    return Nycticorax;
}());
/* harmony default export */ __webpack_exports__["default"] = (Nycticorax);
//# sourceMappingURL=core.js.map

/***/ }),

/***/ "./node_modules/nycticorax/dist/esm/hooks.js":
/*!***************************************************!*\
  !*** ./node_modules/nycticorax/dist/esm/hooks.js ***!
  \***************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

function hooks(nycticorax) {
    var getStore = nycticorax.getStore, subscribe = nycticorax.subscribe;
    return function () {
        var keys = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            keys[_i] = arguments[_i];
        }
        var _a = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(getStore()), props = _a[0], setProps = _a[1];
        (0,react__WEBPACK_IMPORTED_MODULE_0__.useLayoutEffect)(function () {
            var unsubscribe = subscribe(function (triggerKeys) {
                var sames = keys.filter(function (k) { return triggerKeys.includes(k); });
                if (sames.length) {
                    setProps(getStore());
                }
            });
            return unsubscribe;
        });
        return props;
    };
}
/* harmony default export */ __webpack_exports__["default"] = (hooks);
//# sourceMappingURL=hooks.js.map

/***/ }),

/***/ "./node_modules/nycticorax/dist/esm/index.js":
/*!***************************************************!*\
  !*** ./node_modules/nycticorax/dist/esm/index.js ***!
  \***************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ "./node_modules/nycticorax/node_modules/tslib/tslib.es6.js");
/* harmony import */ var _core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./core */ "./node_modules/nycticorax/dist/esm/core.js");
/* harmony import */ var _connect__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./connect */ "./node_modules/nycticorax/dist/esm/connect.js");
/* harmony import */ var _hooks__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./hooks */ "./node_modules/nycticorax/dist/esm/hooks.js");




var N = (function (_super) {
    (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__extends)(N, _super);
    function N() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.connect = (0,_connect__WEBPACK_IMPORTED_MODULE_1__["default"])(_this);
        _this.useStore = (0,_hooks__WEBPACK_IMPORTED_MODULE_2__["default"])(_this);
        return _this;
    }
    return N;
}(_core__WEBPACK_IMPORTED_MODULE_0__["default"]));
/* harmony default export */ __webpack_exports__["default"] = (N);
//# sourceMappingURL=index.js.map

/***/ }),

/***/ "./node_modules/nycticorax/node_modules/tslib/tslib.es6.js":
/*!*****************************************************************!*\
  !*** ./node_modules/nycticorax/node_modules/tslib/tslib.es6.js ***!
  \*****************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "__extends": function() { return /* binding */ __extends; },
/* harmony export */   "__assign": function() { return /* binding */ __assign; },
/* harmony export */   "__rest": function() { return /* binding */ __rest; },
/* harmony export */   "__decorate": function() { return /* binding */ __decorate; },
/* harmony export */   "__param": function() { return /* binding */ __param; },
/* harmony export */   "__metadata": function() { return /* binding */ __metadata; },
/* harmony export */   "__awaiter": function() { return /* binding */ __awaiter; },
/* harmony export */   "__generator": function() { return /* binding */ __generator; },
/* harmony export */   "__createBinding": function() { return /* binding */ __createBinding; },
/* harmony export */   "__exportStar": function() { return /* binding */ __exportStar; },
/* harmony export */   "__values": function() { return /* binding */ __values; },
/* harmony export */   "__read": function() { return /* binding */ __read; },
/* harmony export */   "__spread": function() { return /* binding */ __spread; },
/* harmony export */   "__spreadArrays": function() { return /* binding */ __spreadArrays; },
/* harmony export */   "__spreadArray": function() { return /* binding */ __spreadArray; },
/* harmony export */   "__await": function() { return /* binding */ __await; },
/* harmony export */   "__asyncGenerator": function() { return /* binding */ __asyncGenerator; },
/* harmony export */   "__asyncDelegator": function() { return /* binding */ __asyncDelegator; },
/* harmony export */   "__asyncValues": function() { return /* binding */ __asyncValues; },
/* harmony export */   "__makeTemplateObject": function() { return /* binding */ __makeTemplateObject; },
/* harmony export */   "__importStar": function() { return /* binding */ __importStar; },
/* harmony export */   "__importDefault": function() { return /* binding */ __importDefault; },
/* harmony export */   "__classPrivateFieldGet": function() { return /* binding */ __classPrivateFieldGet; },
/* harmony export */   "__classPrivateFieldSet": function() { return /* binding */ __classPrivateFieldSet; }
/* harmony export */ });
/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    if (typeof b !== "function" && b !== null)
        throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    }
    return __assign.apply(this, arguments);
}

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

function __decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}

function __param(paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
}

function __metadata(metadataKey, metadataValue) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
}

function __awaiter(thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
}

var __createBinding = Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
});

function __exportStar(m, o) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(o, p)) __createBinding(o, m, p);
}

function __values(o) {
    var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
    if (m) return m.call(o);
    if (o && typeof o.length === "number") return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
}

function __read(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
}

/** @deprecated */
function __spread() {
    for (var ar = [], i = 0; i < arguments.length; i++)
        ar = ar.concat(__read(arguments[i]));
    return ar;
}

/** @deprecated */
function __spreadArrays() {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
}

function __spreadArray(to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
}

function __await(v) {
    return this instanceof __await ? (this.v = v, this) : new __await(v);
}

function __asyncGenerator(thisArg, _arguments, generator) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var g = generator.apply(thisArg, _arguments || []), i, q = [];
    return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
    function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
    function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
    function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
    function fulfill(value) { resume("next", value); }
    function reject(value) { resume("throw", value); }
    function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
}

function __asyncDelegator(o) {
    var i, p;
    return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
    function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
}

function __asyncValues(o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
    function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
    function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
}

function __makeTemplateObject(cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};

var __setModuleDefault = Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
};

function __importStar(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
}

function __importDefault(mod) {
    return (mod && mod.__esModule) ? mod : { default: mod };
}

function __classPrivateFieldGet(receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
}

function __classPrivateFieldSet(receiver, state, value, kind, f) {
    if (kind === "m") throw new TypeError("Private method is not writable");
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return (kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value)), value;
}


/***/ }),

/***/ "react":
/*!***********************************************!*\
  !*** external {"root":"React","amd":"react"} ***!
  \***********************************************/
/***/ (function(module) {

module.exports = __WEBPACK_EXTERNAL_MODULE_react__;

/***/ }),

/***/ "react-dom":
/*!******************************************************!*\
  !*** external {"root":"ReactDOM","amd":"react-dom"} ***!
  \******************************************************/
/***/ (function(module) {

module.exports = __WEBPACK_EXTERNAL_MODULE_react_dom__;

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
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
!function() {
/*!****************************!*\
  !*** ./src/core/index.tsx ***!
  \****************************/
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Store": function() { return /* reexport safe */ nycticorax__WEBPACK_IMPORTED_MODULE_6__["default"]; }
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom */ "react-dom");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./store */ "./src/core/store.ts");
/* harmony import */ var _built_in__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./built-in */ "./src/core/built-in.tsx");
/* harmony import */ var _create_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./create-component */ "./src/core/create-component.tsx");
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../config */ "./src/config.ts");
/* harmony import */ var nycticorax__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! nycticorax */ "./node_modules/nycticorax/dist/esm/index.js");
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

var _excluded = ["dependencies", "entry", "root", "components", "store", "actions", "Loader", "Error", "Container"];

function cov_8qpz6lsye() {
  var path = "/Users/am0200/Documents/github/various/src/core/index.tsx";
  var hash = "1d1d0ba358fb56a7b6d6a246ef346bae667ef51a";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "/Users/am0200/Documents/github/various/src/core/index.tsx",
    statementMap: {
      "0": {
        start: {
          line: 33,
          column: 6
        },
        end: {
          line: 33,
          column: 12
        }
      },
      "1": {
        start: {
          line: 34,
          column: 68
        },
        end: {
          line: 34,
          column: 70
        }
      },
      "2": {
        start: {
          line: 35,
          column: 26
        },
        end: {
          line: 35,
          column: 40
        }
      },
      "3": {
        start: {
          line: 36,
          column: 55
        },
        end: {
          line: 36,
          column: 57
        }
      },
      "4": {
        start: {
          line: 38,
          column: 2
        },
        end: {
          line: 42,
          column: 4
        }
      },
      "5": {
        start: {
          line: 44,
          column: 27
        },
        end: {
          line: 59,
          column: 3
        }
      },
      "6": {
        start: {
          line: 48,
          column: 14
        },
        end: {
          line: 56,
          column: 6
        }
      },
      "7": {
        start: {
          line: 58,
          column: 4
        },
        end: {
          line: 58,
          column: 64
        }
      },
      "8": {
        start: {
          line: 58,
          column: 47
        },
        end: {
          line: 58,
          column: 63
        }
      },
      "9": {
        start: {
          line: 61,
          column: 21
        },
        end: {
          line: 74,
          column: 3
        }
      },
      "10": {
        start: {
          line: 62,
          column: 19
        },
        end: {
          line: 62,
          column: 42
        }
      },
      "11": {
        start: {
          line: 63,
          column: 4
        },
        end: {
          line: 67,
          column: 5
        }
      },
      "12": {
        start: {
          line: 64,
          column: 6
        },
        end: {
          line: 66,
          column: 7
        }
      },
      "13": {
        start: {
          line: 65,
          column: 8
        },
        end: {
          line: 65,
          column: 83
        }
      },
      "14": {
        start: {
          line: 68,
          column: 4
        },
        end: {
          line: 70,
          column: 5
        }
      },
      "15": {
        start: {
          line: 69,
          column: 6
        },
        end: {
          line: 69,
          column: 37
        }
      },
      "16": {
        start: {
          line: 71,
          column: 22
        },
        end: {
          line: 71,
          column: 52
        }
      },
      "17": {
        start: {
          line: 72,
          column: 4
        },
        end: {
          line: 72,
          column: 40
        }
      },
      "18": {
        start: {
          line: 73,
          column: 4
        },
        end: {
          line: 73,
          column: 20
        }
      },
      "19": {
        start: {
          line: 77,
          column: 12
        },
        end: {
          line: 80,
          column: 5
        }
      },
      "20": {
        start: {
          line: 83,
          column: 6
        },
        end: {
          line: 83,
          column: 78
        }
      },
      "21": {
        start: {
          line: 87,
          column: 42
        },
        end: {
          line: 87,
          column: 52
        }
      },
      "22": {
        start: {
          line: 89,
          column: 6
        },
        end: {
          line: 96,
          column: 7
        }
      },
      "23": {
        start: {
          line: 90,
          column: 8
        },
        end: {
          line: 95,
          column: 9
        }
      },
      "24": {
        start: {
          line: 98,
          column: 6
        },
        end: {
          line: 103,
          column: 7
        }
      },
      "25": {
        start: {
          line: 107,
          column: 2
        },
        end: {
          line: 107,
          column: 65
        }
      }
    },
    fnMap: {
      "0": {
        name: "(anonymous_0)",
        decl: {
          start: {
            line: 21,
            column: 15
          },
          end: {
            line: 21,
            column: 16
          }
        },
        loc: {
          start: {
            line: 21,
            column: 43
          },
          end: {
            line: 108,
            column: 1
          }
        },
        line: 21
      },
      "1": {
        name: "(anonymous_1)",
        decl: {
          start: {
            line: 44,
            column: 27
          },
          end: {
            line: 44,
            column: 28
          }
        },
        loc: {
          start: {
            line: 47,
            column: 7
          },
          end: {
            line: 59,
            column: 3
          }
        },
        line: 47
      },
      "2": {
        name: "(anonymous_2)",
        decl: {
          start: {
            line: 58,
            column: 11
          },
          end: {
            line: 58,
            column: 12
          }
        },
        loc: {
          start: {
            line: 58,
            column: 47
          },
          end: {
            line: 58,
            column: 63
          }
        },
        line: 58
      },
      "3": {
        name: "(anonymous_3)",
        decl: {
          start: {
            line: 61,
            column: 21
          },
          end: {
            line: 61,
            column: 22
          }
        },
        loc: {
          start: {
            line: 61,
            column: 47
          },
          end: {
            line: 74,
            column: 3
          }
        },
        line: 61
      },
      "4": {
        name: "(anonymous_4)",
        decl: {
          start: {
            line: 64,
            column: 13
          },
          end: {
            line: 64,
            column: 14
          }
        },
        loc: {
          start: {
            line: 65,
            column: 8
          },
          end: {
            line: 65,
            column: 83
          }
        },
        line: 65
      },
      "5": {
        name: "(anonymous_5)",
        decl: {
          start: {
            line: 82,
            column: 4
          },
          end: {
            line: 82,
            column: 5
          }
        },
        loc: {
          start: {
            line: 82,
            column: 32
          },
          end: {
            line: 84,
            column: 5
          }
        },
        line: 82
      },
      "6": {
        name: "(anonymous_6)",
        decl: {
          start: {
            line: 86,
            column: 4
          },
          end: {
            line: 86,
            column: 5
          }
        },
        loc: {
          start: {
            line: 86,
            column: 13
          },
          end: {
            line: 104,
            column: 5
          }
        },
        line: 86
      }
    },
    branchMap: {
      "0": {
        loc: {
          start: {
            line: 26,
            column: 4
          },
          end: {
            line: 26,
            column: 19
          }
        },
        type: "default-arg",
        locations: [{
          start: {
            line: 26,
            column: 17
          },
          end: {
            line: 26,
            column: 19
          }
        }],
        line: 26
      },
      "1": {
        loc: {
          start: {
            line: 27,
            column: 4
          },
          end: {
            line: 27,
            column: 14
          }
        },
        type: "default-arg",
        locations: [{
          start: {
            line: 27,
            column: 12
          },
          end: {
            line: 27,
            column: 14
          }
        }],
        line: 27
      },
      "2": {
        loc: {
          start: {
            line: 28,
            column: 4
          },
          end: {
            line: 28,
            column: 16
          }
        },
        type: "default-arg",
        locations: [{
          start: {
            line: 28,
            column: 14
          },
          end: {
            line: 28,
            column: 16
          }
        }],
        line: 28
      },
      "3": {
        loc: {
          start: {
            line: 29,
            column: 12
          },
          end: {
            line: 29,
            column: 31
          }
        },
        type: "default-arg",
        locations: [{
          start: {
            line: 29,
            column: 25
          },
          end: {
            line: 29,
            column: 31
          }
        }],
        line: 29
      },
      "4": {
        loc: {
          start: {
            line: 30,
            column: 11
          },
          end: {
            line: 30,
            column: 28
          }
        },
        type: "default-arg",
        locations: [{
          start: {
            line: 30,
            column: 23
          },
          end: {
            line: 30,
            column: 28
          }
        }],
        line: 30
      },
      "5": {
        loc: {
          start: {
            line: 31,
            column: 15
          },
          end: {
            line: 31,
            column: 40
          }
        },
        type: "default-arg",
        locations: [{
          start: {
            line: 31,
            column: 31
          },
          end: {
            line: 31,
            column: 40
          }
        }],
        line: 31
      },
      "6": {
        loc: {
          start: {
            line: 63,
            column: 4
          },
          end: {
            line: 67,
            column: 5
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 63,
            column: 4
          },
          end: {
            line: 67,
            column: 5
          }
        }, {
          start: {
            line: undefined,
            column: undefined
          },
          end: {
            line: undefined,
            column: undefined
          }
        }],
        line: 63
      },
      "7": {
        loc: {
          start: {
            line: 68,
            column: 4
          },
          end: {
            line: 70,
            column: 5
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 68,
            column: 4
          },
          end: {
            line: 70,
            column: 5
          }
        }, {
          start: {
            line: undefined,
            column: undefined
          },
          end: {
            line: undefined,
            column: undefined
          }
        }],
        line: 68
      },
      "8": {
        loc: {
          start: {
            line: 89,
            column: 6
          },
          end: {
            line: 96,
            column: 7
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 89,
            column: 6
          },
          end: {
            line: 96,
            column: 7
          }
        }, {
          start: {
            line: undefined,
            column: undefined
          },
          end: {
            line: undefined,
            column: undefined
          }
        }],
        line: 89
      },
      "9": {
        loc: {
          start: {
            line: 107,
            column: 41
          },
          end: {
            line: 107,
            column: 63
          }
        },
        type: "binary-expr",
        locations: [{
          start: {
            line: 107,
            column: 41
          },
          end: {
            line: 107,
            column: 45
          }
        }, {
          start: {
            line: 107,
            column: 49
          },
          end: {
            line: 107,
            column: 63
          }
        }],
        line: 107
      }
    },
    s: {
      "0": 0,
      "1": 0,
      "2": 0,
      "3": 0,
      "4": 0,
      "5": 0,
      "6": 0,
      "7": 0,
      "8": 0,
      "9": 0,
      "10": 0,
      "11": 0,
      "12": 0,
      "13": 0,
      "14": 0,
      "15": 0,
      "16": 0,
      "17": 0,
      "18": 0,
      "19": 0,
      "20": 0,
      "21": 0,
      "22": 0,
      "23": 0,
      "24": 0,
      "25": 0
    },
    f: {
      "0": 0,
      "1": 0,
      "2": 0,
      "3": 0,
      "4": 0,
      "5": 0,
      "6": 0
    },
    b: {
      "0": [0],
      "1": [0],
      "2": [0],
      "3": [0],
      "4": [0],
      "5": [0],
      "6": [0, 0],
      "7": [0, 0],
      "8": [0, 0],
      "9": [0, 0]
    },
    _coverageSchema: "1a1c01bbd47fc00a2c39e90264f33305004495a9",
    hash: "1d1d0ba358fb56a7b6d6a246ef346bae667ef51a"
  };
  var coverage = global[gcv] || (global[gcv] = {});

  if (!coverage[path] || coverage[path].hash !== hash) {
    coverage[path] = coverageData;
  }

  var actualCoverage = coverage[path];
  {
    // @ts-ignore
    cov_8qpz6lsye = function () {
      return actualCoverage;
    };
  }
  return actualCoverage;
}

cov_8qpz6lsye();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }








/* harmony default export */ __webpack_exports__["default"] = (function (config) {
  var _objectSpread2;

  cov_8qpz6lsye().f[0]++;

  var _ref = (cov_8qpz6lsye().s[0]++, config),
      dependencies = _ref.dependencies,
      entry = _ref.entry,
      root = _ref.root,
      _ref$components = _ref.components,
      components = _ref$components === void 0 ? (cov_8qpz6lsye().b[0][0]++, {}) : _ref$components,
      _ref$store = _ref.store,
      store = _ref$store === void 0 ? (cov_8qpz6lsye().b[1][0]++, {}) : _ref$store,
      _ref$actions = _ref.actions,
      actions = _ref$actions === void 0 ? (cov_8qpz6lsye().b[2][0]++, {}) : _ref$actions,
      _ref$Loader = _ref.Loader,
      LoaderNode = _ref$Loader === void 0 ? (cov_8qpz6lsye().b[3][0]++, _built_in__WEBPACK_IMPORTED_MODULE_3__.Loader) : _ref$Loader,
      _ref$Error = _ref.Error,
      ErrorNode = _ref$Error === void 0 ? (cov_8qpz6lsye().b[4][0]++, _built_in__WEBPACK_IMPORTED_MODULE_3__.Error) : _ref$Error,
      _ref$Container = _ref.Container,
      ContainerNode = _ref$Container === void 0 ? (cov_8qpz6lsye().b[5][0]++, _built_in__WEBPACK_IMPORTED_MODULE_3__.Container) : _ref$Container,
      rest = _objectWithoutProperties(_ref, _excluded);

  var componentDispatcher = (cov_8qpz6lsye().s[1]++, {});
  var storeDispatcher = (cov_8qpz6lsye().s[2]++, _objectSpread({}, actions));
  var COMPONENTS = (cov_8qpz6lsye().s[3]++, {});
  cov_8qpz6lsye().s[4]++;
  (0,_store__WEBPACK_IMPORTED_MODULE_2__.createStore)(_objectSpread(_objectSpread({}, store), {}, (_objectSpread2 = {}, _defineProperty(_objectSpread2, _config__WEBPACK_IMPORTED_MODULE_5__.MOUNTED_COMPONENTS, []), _defineProperty(_objectSpread2, _config__WEBPACK_IMPORTED_MODULE_5__.MESSAGE_KEY, {}), _objectSpread2)));
  cov_8qpz6lsye().s[5]++;

  var componentCreator = function componentCreator(name, onMounted) {
    cov_8qpz6lsye().f[1]++;
    var C = (cov_8qpz6lsye().s[6]++, (0,_create_component__WEBPACK_IMPORTED_MODULE_4__["default"])({
      name: name,
      storeDispatcher: storeDispatcher,
      componentDispatcher: componentDispatcher,
      Loader: LoaderNode,
      Error: ErrorNode,
      config: _objectSpread(_objectSpread({}, rest), {}, {
        components: components
      }),
      onMounted: onMounted
    }));
    cov_8qpz6lsye().s[7]++;
    return function (props) {
      cov_8qpz6lsye().f[2]++;
      cov_8qpz6lsye().s[8]++;
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(C, props);
    };
  };

  cov_8qpz6lsye().s[9]++;

  var $component = function $component(nameWidthSub) {
    cov_8qpz6lsye().f[3]++;

    var _ref2 = (cov_8qpz6lsye().s[10]++, nameWidthSub.split('.')),
        _ref3 = _slicedToArray(_ref2, 1),
        name = _ref3[0];

    cov_8qpz6lsye().s[11]++;

    if (!components[name]) {
      cov_8qpz6lsye().b[6][0]++;
      cov_8qpz6lsye().s[12]++;
      return function () {
        cov_8qpz6lsye().f[4]++;
        cov_8qpz6lsye().s[13]++;
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(ErrorNode, {
          message: "Component not defined",
          type: _config__WEBPACK_IMPORTED_MODULE_5__.ERROR_TYPE.NOT_DEFINED
        });
      };
    } else {
      cov_8qpz6lsye().b[6][1]++;
    }

    cov_8qpz6lsye().s[14]++;

    if (COMPONENTS[nameWidthSub]) {
      cov_8qpz6lsye().b[7][0]++;
      cov_8qpz6lsye().s[15]++;
      return COMPONENTS[nameWidthSub];
    } else {
      cov_8qpz6lsye().b[7][1]++;
    }

    var component = (cov_8qpz6lsye().s[16]++, componentCreator(nameWidthSub));
    cov_8qpz6lsye().s[17]++;
    COMPONENTS[nameWidthSub] = component;
    cov_8qpz6lsye().s[18]++;
    return component;
  };

  var R = /*#__PURE__*/function (_Component) {
    _inherits(R, _Component);

    var _super = _createSuper(R);

    function R() {
      var _this;

      _classCallCheck(this, R);

      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      _this = _super.call.apply(_super, [this].concat(args));

      _defineProperty(_assertThisInitialized(_this), "state", (cov_8qpz6lsye().s[19]++, {
        errorType: undefined,
        errorMessage: ''
      }));

      return _this;
    }

    _createClass(R, [{
      key: "componentDidCatch",
      value: function componentDidCatch(e) {
        cov_8qpz6lsye().f[5]++;
        cov_8qpz6lsye().s[20]++;
        this.setState({
          errorType: 'CONTAINER_ERROR',
          errorMessage: e.message
        });
      }
    }, {
      key: "render",
      value: function render() {
        cov_8qpz6lsye().f[6]++;

        var _ref4 = (cov_8qpz6lsye().s[21]++, this.state),
            errorType = _ref4.errorType,
            errorMessage = _ref4.errorMessage;

        cov_8qpz6lsye().s[22]++;

        if (errorType) {
          cov_8qpz6lsye().b[8][0]++;
          cov_8qpz6lsye().s[23]++;
          return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(ErrorNode, {
            type: _config__WEBPACK_IMPORTED_MODULE_5__.ERROR_TYPE[errorType],
            message: errorMessage
          });
        } else {
          cov_8qpz6lsye().b[8][1]++;
        }

        cov_8qpz6lsye().s[24]++;
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(ContainerNode, {
          $component: $component,
          $config: rest
        });
      }
    }]);

    return R;
  }(react__WEBPACK_IMPORTED_MODULE_0__.Component);

  cov_8qpz6lsye().s[25]++;
  (0,react_dom__WEBPACK_IMPORTED_MODULE_1__.render)( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(R, null), document.querySelector((cov_8qpz6lsye().b[9][0]++, root) || (cov_8qpz6lsye().b[9][1]++, _config__WEBPACK_IMPORTED_MODULE_5__.ROOT_CONTAINER)));
});
}();
/******/ 	return __webpack_exports__;
/******/ })()
;
});;
//# sourceMappingURL=core.js.map