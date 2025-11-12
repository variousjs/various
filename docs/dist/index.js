define(["react","react-dom/client"], function(__WEBPACK_EXTERNAL_MODULE_react__, __WEBPACK_EXTERNAL_MODULE_react_dom_client__) { return /******/ (function() { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/@babel/runtime/helpers/esm/extends.js":
/*!************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/extends.js ***!
  \************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ _extends; }
/* harmony export */ });
function _extends() {
  return _extends = Object.assign ? Object.assign.bind() : function (n) {
    for (var e = 1; e < arguments.length; e++) {
      var t = arguments[e];
      for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]);
    }
    return n;
  }, _extends.apply(null, arguments);
}


/***/ }),

/***/ "./node_modules/nycticorax/dist/index.js":
/*!***********************************************!*\
  !*** ./node_modules/nycticorax/dist/index.js ***!
  \***********************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

!function(t,e){ true?module.exports=e(__webpack_require__(/*! react */ "react")):0}(self,(t=>(()=>{"use strict";var e={294:(t,e,r)=>{r.d(e,{default:()=>c});var s=r(942),o=r(63),n=r.n(o);function i(t,e=new WeakMap){if("object"!=typeof t||null===t)return t;if(e.has(t))return e.get(t);const r=Array.isArray(t)?[]:{};e.set(t,r);const s=Reflect.ownKeys(t);for(const o of s)r[o]=i(t[o],e);return r}class c{constructor(){var t;(0,s.Z)(this,"state",void 0),(0,s.Z)(this,"listeners",void 0),(0,s.Z)(this,"emits",void 0),(0,s.Z)(this,"timer",void 0),(0,s.Z)(this,"onStateChange",void 0),(0,s.Z)(this,"getStore",void 0),(0,s.Z)(this,"createStore",(t=>{this.listeners=Reflect.ownKeys(t).reduce(((e,r)=>{const s=r;return this.state[s]=t[s],{...e,[r]:[]}}),{})})),(0,s.Z)(this,"subscribe",(t=>{const e={};return Reflect.ownKeys(t).forEach((r=>{const s=r;this.listeners[s]||(this.listeners[s]=[]),this.listeners[s].push(t[s]),e[s]=t[s]})),()=>{Reflect.ownKeys(e).forEach((t=>{const r=t;this.listeners[r]=this.listeners[r].filter((t=>t!==e[r]))}))}})),(0,s.Z)(this,"emit",((t,e)=>{this.emits={...this.emits,...t},e?this.trigger():(clearTimeout(this.timer),this.timer=setTimeout(this.trigger))})),(0,s.Z)(this,"dispatch",((t,...e)=>t({getStore:this.getStore,emit:t=>this.emit(t,!0)},...e))),(0,s.Z)(this,"trigger",(()=>{const t=this.emits,e=[],r=Reflect.ownKeys(t);for(let s=0;s<r.length;s+=1){const o=r[s];if(n()(this.state[o],t[o]))continue;const c=t[o],u=this.state[o];this.state[o]=i(t[o]),e.push({key:o,newValue:c,oldValue:u})}const s={};e.forEach((t=>{s[t.key]=[t.newValue,t.oldValue],this.listeners[t.key]&&this.listeners[t.key].forEach((e=>e(t.newValue,t.oldValue)))})),e.length&&this.onStateChange(s),this.emits={},this.timer=void 0})),this.state={},this.listeners={},this.emits={},this.timer=void 0,this.onStateChange=()=>null,this.getStore=(t=this.state,function(e){return e?i(t[e]):t})}set onChange(t){this.onStateChange=t}}},63:t=>{t.exports=function t(e,r){if(e===r)return!0;if(e&&r&&"object"==typeof e&&"object"==typeof r){if(e.constructor!==r.constructor)return!1;var s,o,n;if(Array.isArray(e)){if((s=e.length)!=r.length)return!1;for(o=s;0!=o--;)if(!t(e[o],r[o]))return!1;return!0}if(e.constructor===RegExp)return e.source===r.source&&e.flags===r.flags;if(e.valueOf!==Object.prototype.valueOf)return e.valueOf()===r.valueOf();if(e.toString!==Object.prototype.toString)return e.toString()===r.toString();if((s=(n=Object.keys(e)).length)!==Object.keys(r).length)return!1;for(o=s;0!=o--;)if(!Object.prototype.hasOwnProperty.call(r,n[o]))return!1;for(o=s;0!=o--;){var i=n[o];if(!t(e[i],r[i]))return!1}return!0}return e!=e&&r!=r}},250:e=>{e.exports=t},942:(t,e,r)=>{function s(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}r.d(e,{Z:()=>s})}},r={};function s(t){var o=r[t];if(void 0!==o)return o.exports;var n=r[t]={exports:{}};return e[t](n,n.exports,s),n.exports}s.n=t=>{var e=t&&t.__esModule?()=>t.default:()=>t;return s.d(e,{a:e}),e},s.d=(t,e)=>{for(var r in e)s.o(e,r)&&!s.o(t,r)&&Object.defineProperty(t,r,{enumerable:!0,get:e[r]})},s.o=(t,e)=>Object.prototype.hasOwnProperty.call(t,e);var o={};return(()=>{s.d(o,{default:()=>u});var t=s(942),e=s(294),r=s(250),n=s.n(r);const i=["name","prototype","length","propTypes","defaultProps","getDerivedStateFromProps","contextTypes","displayName"];class c extends e.default{constructor(...e){super(...e),(0,t.Z)(this,"connect",function(e){const{getStore:s,subscribe:o}=e;return function(...e){return function(c){class u extends r.Component{constructor(r){super(r),(0,t.Z)(this,"unsubscribe",void 0),(0,t.Z)(this,"state",{props:s()}),this.unsubscribe=o(e.reduce(((t,e)=>({...t,[e]:()=>{this.setState({props:s()})}})),{}))}componentWillUnmount(){this.unsubscribe()}render(){const{props:t}=this.state,e={...t,...this.props};return n().createElement(c,e)}}return Object.getOwnPropertyNames(c).forEach((t=>{const e=t;i.includes(t)||(u[e]=c[e])})),u}}}(this)),(0,t.Z)(this,"useStore",function(t){const{getStore:e,subscribe:s}=t;return function(...t){const[o,n]=(0,r.useState)(e());return(0,r.useLayoutEffect)((()=>s(t.reduce(((t,r)=>({...t,[r]:()=>{n((t=>({...t,[r]:e()[r]})))}})),{})))),o}}(this))}}const u=c})(),o.default})()));
//# sourceMappingURL=index.js.map

/***/ }),

/***/ "./src/core/config.ts":
/*!****************************!*\
  !*** ./src/core/config.ts ***!
  \****************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   BASE_DEPENDENCIES: function() { return /* binding */ BASE_DEPENDENCIES; },
/* harmony export */   CONFIG_KEY: function() { return /* binding */ CONFIG_KEY; },
/* harmony export */   DEPENDENCIES_KEY: function() { return /* binding */ DEPENDENCIES_KEY; },
/* harmony export */   MESSAGE_KEY: function() { return /* binding */ MESSAGE_KEY; },
/* harmony export */   MOUNTED_COMPONENTS_KEY: function() { return /* binding */ MOUNTED_COMPONENTS_KEY; },
/* harmony export */   ROOT: function() { return /* binding */ ROOT; },
/* harmony export */   VUE_FUNCTION_OPTIONS: function() { return /* binding */ VUE_FUNCTION_OPTIONS; },
/* harmony export */   VUE_VERSION: function() { return /* binding */ VUE_VERSION; }
/* harmony export */ });
function cov_2ln0dh81qk() {
  var path = "/Users/am0200/Documents/github/various/src/core/config.ts";
  var hash = "c881002f17d6de4df4b69139e41ad095d7690930";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "/Users/am0200/Documents/github/various/src/core/config.ts",
    statementMap: {
      "0": {
        start: {
          line: 1,
          column: 38
        },
        end: {
          line: 1,
          column: 66
        }
      },
      "1": {
        start: {
          line: 3,
          column: 27
        },
        end: {
          line: 3,
          column: 44
        }
      },
      "2": {
        start: {
          line: 5,
          column: 26
        },
        end: {
          line: 5,
          column: 42
        }
      },
      "3": {
        start: {
          line: 7,
          column: 32
        },
        end: {
          line: 7,
          column: 54
        }
      },
      "4": {
        start: {
          line: 9,
          column: 20
        },
        end: {
          line: 9,
          column: 27
        }
      },
      "5": {
        start: {
          line: 11,
          column: 36
        },
        end: {
          line: 28,
          column: 1
        }
      },
      "6": {
        start: {
          line: 30,
          column: 27
        },
        end: {
          line: 30,
          column: 28
        }
      },
      "7": {
        start: {
          line: 32,
          column: 33
        },
        end: {
          line: 37,
          column: 1
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
      "6": 0,
      "7": 0
    },
    f: {},
    b: {},
    _coverageSchema: "1a1c01bbd47fc00a2c39e90264f33305004495a9",
    hash: "c881002f17d6de4df4b69139e41ad095d7690930"
  };
  var coverage = global[gcv] || (global[gcv] = {});
  if (!coverage[path] || coverage[path].hash !== hash) {
    coverage[path] = coverageData;
  }
  var actualCoverage = coverage[path];
  {
    // @ts-ignore
    cov_2ln0dh81qk = function () {
      return actualCoverage;
    };
  }
  return actualCoverage;
}
cov_2ln0dh81qk();
const MOUNTED_COMPONENTS_KEY = (cov_2ln0dh81qk().s[0]++, Symbol('MOUNTED_COMPONENTS'));
const MESSAGE_KEY = (cov_2ln0dh81qk().s[1]++, Symbol('MESSAGE'));
const CONFIG_KEY = (cov_2ln0dh81qk().s[2]++, Symbol('CONFIG'));
const DEPENDENCIES_KEY = (cov_2ln0dh81qk().s[3]++, Symbol('DEPENDENCIES'));
const ROOT = (cov_2ln0dh81qk().s[4]++, '#root');
const VUE_FUNCTION_OPTIONS = (cov_2ln0dh81qk().s[5]++, ['beforeCreate', 'created', 'beforeMount', 'mounted', 'beforeUpdate', 'updated', 'beforeUnmount', 'unmounted', 'errorCaptured', 'renderTracked', 'renderTriggered', 'activated', 'deactivated', 'setup', 'data', 'render']);
const VUE_VERSION = (cov_2ln0dh81qk().s[6]++, 3);
const BASE_DEPENDENCIES = (cov_2ln0dh81qk().s[7]++, ['react', 'react-dom', '@variousjs/various', 'app']);

/***/ }),

/***/ "./src/core/connector.ts":
/*!*******************************!*\
  !*** ./src/core/connector.ts ***!
  \*******************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _default_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./default-component */ "./src/core/default-component.tsx");
/* harmony import */ var _helper__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./helper */ "./src/core/helper.ts");
function cov_2q0cqugkky() {
  var path = "/Users/am0200/Documents/github/various/src/core/connector.ts";
  var hash = "3df2795aa1fd525a747faaa6bbaa97d822b7e33d";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "/Users/am0200/Documents/github/various/src/core/connector.ts",
    statementMap: {
      "0": {
        start: {
          line: 32,
          column: 4
        },
        end: {
          line: 32,
          column: 37
        }
      },
      "1": {
        start: {
          line: 33,
          column: 4
        },
        end: {
          line: 33,
          column: 47
        }
      },
      "2": {
        start: {
          line: 34,
          column: 4
        },
        end: {
          line: 34,
          column: 26
        }
      },
      "3": {
        start: {
          line: 35,
          column: 4
        },
        end: {
          line: 35,
          column: 30
        }
      },
      "4": {
        start: {
          line: 36,
          column: 4
        },
        end: {
          line: 36,
          column: 25
        }
      },
      "5": {
        start: {
          line: 37,
          column: 4
        },
        end: {
          line: 37,
          column: 25
        }
      },
      "6": {
        start: {
          line: 41,
          column: 4
        },
        end: {
          line: 41,
          column: 24
        }
      },
      "7": {
        start: {
          line: 45,
          column: 4
        },
        end: {
          line: 45,
          column: 27
        }
      },
      "8": {
        start: {
          line: 49,
          column: 17
        },
        end: {
          line: 49,
          column: 49
        }
      },
      "9": {
        start: {
          line: 50,
          column: 4
        },
        end: {
          line: 50,
          column: 69
        }
      },
      "10": {
        start: {
          line: 54,
          column: 17
        },
        end: {
          line: 54,
          column: 49
        }
      },
      "11": {
        start: {
          line: 55,
          column: 4
        },
        end: {
          line: 55,
          column: 33
        }
      },
      "12": {
        start: {
          line: 59,
          column: 4
        },
        end: {
          line: 59,
          column: 67
        }
      },
      "13": {
        start: {
          line: 63,
          column: 4
        },
        end: {
          line: 63,
          column: 32
        }
      },
      "14": {
        start: {
          line: 67,
          column: 17
        },
        end: {
          line: 67,
          column: 49
        }
      },
      "15": {
        start: {
          line: 68,
          column: 4
        },
        end: {
          line: 68,
          column: 41
        }
      },
      "16": {
        start: {
          line: 72,
          column: 17
        },
        end: {
          line: 72,
          column: 49
        }
      },
      "17": {
        start: {
          line: 73,
          column: 4
        },
        end: {
          line: 73,
          column: 38
        }
      },
      "18": {
        start: {
          line: 77,
          column: 17
        },
        end: {
          line: 77,
          column: 49
        }
      },
      "19": {
        start: {
          line: 78,
          column: 4
        },
        end: {
          line: 78,
          column: 38
        }
      },
      "20": {
        start: {
          line: 82,
          column: 4
        },
        end: {
          line: 82,
          column: 31
        }
      },
      "21": {
        start: {
          line: 86,
          column: 4
        },
        end: {
          line: 86,
          column: 28
        }
      },
      "22": {
        start: {
          line: 90,
          column: 4
        },
        end: {
          line: 90,
          column: 46
        }
      },
      "23": {
        start: {
          line: 94,
          column: 4
        },
        end: {
          line: 94,
          column: 33
        }
      },
      "24": {
        start: {
          line: 98,
          column: 4
        },
        end: {
          line: 98,
          column: 56
        }
      },
      "25": {
        start: {
          line: 102,
          column: 4
        },
        end: {
          line: 102,
          column: 38
        }
      }
    },
    fnMap: {
      "0": {
        name: "(anonymous_0)",
        decl: {
          start: {
            line: 31,
            column: 2
          },
          end: {
            line: 31,
            column: 3
          }
        },
        loc: {
          start: {
            line: 31,
            column: 16
          },
          end: {
            line: 38,
            column: 3
          }
        },
        line: 31
      },
      "1": {
        name: "(anonymous_1)",
        decl: {
          start: {
            line: 40,
            column: 2
          },
          end: {
            line: 40,
            column: 3
          }
        },
        loc: {
          start: {
            line: 40,
            column: 40
          },
          end: {
            line: 42,
            column: 3
          }
        },
        line: 40
      },
      "2": {
        name: "(anonymous_2)",
        decl: {
          start: {
            line: 44,
            column: 2
          },
          end: {
            line: 44,
            column: 3
          }
        },
        loc: {
          start: {
            line: 44,
            column: 19
          },
          end: {
            line: 46,
            column: 3
          }
        },
        line: 44
      },
      "3": {
        name: "(anonymous_3)",
        decl: {
          start: {
            line: 48,
            column: 2
          },
          end: {
            line: 48,
            column: 3
          }
        },
        loc: {
          start: {
            line: 48,
            column: 75
          },
          end: {
            line: 51,
            column: 3
          }
        },
        line: 48
      },
      "4": {
        name: "(anonymous_4)",
        decl: {
          start: {
            line: 53,
            column: 2
          },
          end: {
            line: 53,
            column: 3
          }
        },
        loc: {
          start: {
            line: 53,
            column: 46
          },
          end: {
            line: 56,
            column: 3
          }
        },
        line: 53
      },
      "5": {
        name: "(anonymous_5)",
        decl: {
          start: {
            line: 58,
            column: 2
          },
          end: {
            line: 58,
            column: 3
          }
        },
        loc: {
          start: {
            line: 58,
            column: 51
          },
          end: {
            line: 60,
            column: 3
          }
        },
        line: 58
      },
      "6": {
        name: "(anonymous_6)",
        decl: {
          start: {
            line: 62,
            column: 2
          },
          end: {
            line: 62,
            column: 3
          }
        },
        loc: {
          start: {
            line: 62,
            column: 24
          },
          end: {
            line: 64,
            column: 3
          }
        },
        line: 62
      },
      "7": {
        name: "(anonymous_7)",
        decl: {
          start: {
            line: 66,
            column: 2
          },
          end: {
            line: 66,
            column: 3
          }
        },
        loc: {
          start: {
            line: 66,
            column: 76
          },
          end: {
            line: 69,
            column: 3
          }
        },
        line: 66
      },
      "8": {
        name: "(anonymous_8)",
        decl: {
          start: {
            line: 71,
            column: 2
          },
          end: {
            line: 71,
            column: 3
          }
        },
        loc: {
          start: {
            line: 71,
            column: 55
          },
          end: {
            line: 74,
            column: 3
          }
        },
        line: 71
      },
      "9": {
        name: "(anonymous_9)",
        decl: {
          start: {
            line: 76,
            column: 2
          },
          end: {
            line: 76,
            column: 3
          }
        },
        loc: {
          start: {
            line: 76,
            column: 52
          },
          end: {
            line: 79,
            column: 3
          }
        },
        line: 76
      },
      "10": {
        name: "(anonymous_10)",
        decl: {
          start: {
            line: 81,
            column: 2
          },
          end: {
            line: 81,
            column: 3
          }
        },
        loc: {
          start: {
            line: 81,
            column: 43
          },
          end: {
            line: 83,
            column: 3
          }
        },
        line: 81
      },
      "11": {
        name: "(anonymous_11)",
        decl: {
          start: {
            line: 85,
            column: 2
          },
          end: {
            line: 85,
            column: 3
          }
        },
        loc: {
          start: {
            line: 85,
            column: 20
          },
          end: {
            line: 87,
            column: 3
          }
        },
        line: 85
      },
      "12": {
        name: "(anonymous_12)",
        decl: {
          start: {
            line: 89,
            column: 2
          },
          end: {
            line: 89,
            column: 3
          }
        },
        loc: {
          start: {
            line: 89,
            column: 63
          },
          end: {
            line: 91,
            column: 3
          }
        },
        line: 89
      },
      "13": {
        name: "(anonymous_13)",
        decl: {
          start: {
            line: 93,
            column: 2
          },
          end: {
            line: 93,
            column: 3
          }
        },
        loc: {
          start: {
            line: 93,
            column: 25
          },
          end: {
            line: 95,
            column: 3
          }
        },
        line: 93
      },
      "14": {
        name: "(anonymous_14)",
        decl: {
          start: {
            line: 97,
            column: 2
          },
          end: {
            line: 97,
            column: 3
          }
        },
        loc: {
          start: {
            line: 97,
            column: 78
          },
          end: {
            line: 99,
            column: 3
          }
        },
        line: 97
      },
      "15": {
        name: "(anonymous_15)",
        decl: {
          start: {
            line: 101,
            column: 2
          },
          end: {
            line: 101,
            column: 3
          }
        },
        loc: {
          start: {
            line: 101,
            column: 30
          },
          end: {
            line: 103,
            column: 3
          }
        },
        line: 101
      }
    },
    branchMap: {},
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
      "6": 0,
      "7": 0,
      "8": 0,
      "9": 0,
      "10": 0,
      "11": 0,
      "12": 0,
      "13": 0,
      "14": 0,
      "15": 0
    },
    b: {},
    _coverageSchema: "1a1c01bbd47fc00a2c39e90264f33305004495a9",
    hash: "3df2795aa1fd525a747faaa6bbaa97d822b7e33d"
  };
  var coverage = global[gcv] || (global[gcv] = {});
  if (!coverage[path] || coverage[path].hash !== hash) {
    coverage[path] = coverageData;
  }
  var actualCoverage = coverage[path];
  {
    // @ts-ignore
    cov_2q0cqugkky = function () {
      return actualCoverage;
    };
  }
  return actualCoverage;
}
cov_2q0cqugkky();


class Connector {
  constructor() {
    cov_2q0cqugkky().f[0]++;
    cov_2q0cqugkky().s[0]++;
    this.fallbackComponent = _default_component__WEBPACK_IMPORTED_MODULE_0__.Fallback;
    cov_2q0cqugkky().s[1]++;
    this.errorFallbackComponent = _default_component__WEBPACK_IMPORTED_MODULE_0__.ErrorFallback;
    cov_2q0cqugkky().s[2]++;
    this.storeActions = {};
    cov_2q0cqugkky().s[3]++;
    this.componentActions = {};
    cov_2q0cqugkky().s[4]++;
    this.i18nConfigs = {};
    cov_2q0cqugkky().s[5]++;
    this.middlewares = {};
  }
  setMiddlewares(m) {
    cov_2q0cqugkky().f[1]++;
    cov_2q0cqugkky().s[6]++;
    this.middlewares = m;
  }
  getMiddlewares() {
    cov_2q0cqugkky().f[2]++;
    cov_2q0cqugkky().s[7]++;
    return this.middlewares;
  }
  setI18nConfig(moduleDefined, config) {
    cov_2q0cqugkky().f[3]++;
    const name = (cov_2q0cqugkky().s[8]++, (0,_helper__WEBPACK_IMPORTED_MODULE_1__.getNameWithModule)(moduleDefined));
    cov_2q0cqugkky().s[9]++;
    this.i18nConfigs[name] = {
      ...this.i18nConfigs[name],
      ...config
    };
  }
  getI18nConfig(moduleDefined) {
    cov_2q0cqugkky().f[4]++;
    const name = (cov_2q0cqugkky().s[10]++, (0,_helper__WEBPACK_IMPORTED_MODULE_1__.getNameWithModule)(moduleDefined));
    cov_2q0cqugkky().s[11]++;
    return this.i18nConfigs[name];
  }
  setGlobalI18nConfig(config) {
    cov_2q0cqugkky().f[5]++;
    cov_2q0cqugkky().s[12]++;
    this.globalI18nConfig = {
      ...this.globalI18nConfig,
      ...config
    };
  }
  getGlobalI18nConfig() {
    cov_2q0cqugkky().f[6]++;
    cov_2q0cqugkky().s[13]++;
    return this.globalI18nConfig;
  }
  setComponentActions(moduleDefined, actions) {
    cov_2q0cqugkky().f[7]++;
    const name = (cov_2q0cqugkky().s[14]++, (0,_helper__WEBPACK_IMPORTED_MODULE_1__.getNameWithModule)(moduleDefined));
    cov_2q0cqugkky().s[15]++;
    this.componentActions[name] = actions;
  }
  deleteComponentActions(moduleDefined) {
    cov_2q0cqugkky().f[8]++;
    const name = (cov_2q0cqugkky().s[16]++, (0,_helper__WEBPACK_IMPORTED_MODULE_1__.getNameWithModule)(moduleDefined));
    cov_2q0cqugkky().s[17]++;
    delete this.componentActions[name];
  }
  getComponentActions(moduleDefined) {
    cov_2q0cqugkky().f[9]++;
    const name = (cov_2q0cqugkky().s[18]++, (0,_helper__WEBPACK_IMPORTED_MODULE_1__.getNameWithModule)(moduleDefined));
    cov_2q0cqugkky().s[19]++;
    return this.componentActions[name];
  }
  setStoreActions(actions) {
    cov_2q0cqugkky().f[10]++;
    cov_2q0cqugkky().s[20]++;
    this.storeActions = actions;
  }
  getStoreActions() {
    cov_2q0cqugkky().f[11]++;
    cov_2q0cqugkky().s[21]++;
    return this.storeActions;
  }
  setFallbackComponent(fallbackComponent) {
    cov_2q0cqugkky().f[12]++;
    cov_2q0cqugkky().s[22]++;
    this.fallbackComponent = fallbackComponent;
  }
  getFallbackComponent() {
    cov_2q0cqugkky().f[13]++;
    cov_2q0cqugkky().s[23]++;
    return this.fallbackComponent;
  }
  setErrorFallbackComponent(errorFallbackComponent) {
    cov_2q0cqugkky().f[14]++;
    cov_2q0cqugkky().s[24]++;
    this.errorFallbackComponent = errorFallbackComponent;
  }
  getErrorFallbackComponent() {
    cov_2q0cqugkky().f[15]++;
    cov_2q0cqugkky().s[25]++;
    return this.errorFallbackComponent;
  }
}
/* harmony default export */ __webpack_exports__["default"] = (new Connector());

/***/ }),

/***/ "./src/core/create-component.tsx":
/*!***************************************!*\
  !*** ./src/core/create-component.tsx ***!
  \***************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _react_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./react-component */ "./src/core/react-component.tsx");
/* harmony import */ var _vue_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./vue-component */ "./src/core/vue-component.tsx");
/* harmony import */ var _error_boundary__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./error-boundary */ "./src/core/error-boundary.tsx");
function cov_1z56ljsbx() {
  var path = "/Users/am0200/Documents/github/various/src/core/create-component.tsx";
  var hash = "2e67e5309b821b8e672937e86c55c441f9f950d0";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "/Users/am0200/Documents/github/various/src/core/create-component.tsx",
    statementMap: {
      "0": {
        start: {
          line: 8,
          column: 45
        },
        end: {
          line: 37,
          column: 1
        }
      },
      "1": {
        start: {
          line: 14,
          column: 6
        },
        end: {
          line: 14,
          column: 12
        }
      },
      "2": {
        start: {
          line: 16,
          column: 12
        },
        end: {
          line: 21,
          column: 4
        }
      },
      "3": {
        start: {
          line: 23,
          column: 20
        },
        end: {
          line: 33,
          column: 3
        }
      },
      "4": {
        start: {
          line: 24,
          column: 39
        },
        end: {
          line: 24,
          column: 50
        }
      },
      "5": {
        start: {
          line: 25,
          column: 22
        },
        end: {
          line: 27,
          column: 58
        }
      },
      "6": {
        start: {
          line: 28,
          column: 4
        },
        end: {
          line: 32,
          column: 5
        }
      },
      "7": {
        start: {
          line: 35,
          column: 2
        },
        end: {
          line: 35,
          column: 43
        }
      },
      "8": {
        start: {
          line: 36,
          column: 2
        },
        end: {
          line: 36,
          column: 18
        }
      }
    },
    fnMap: {
      "0": {
        name: "(anonymous_0)",
        decl: {
          start: {
            line: 8,
            column: 45
          },
          end: {
            line: 8,
            column: 46
          }
        },
        loc: {
          start: {
            line: 8,
            column: 68
          },
          end: {
            line: 37,
            column: 1
          }
        },
        line: 8
      },
      "1": {
        name: "(anonymous_1)",
        decl: {
          start: {
            line: 23,
            column: 20
          },
          end: {
            line: 23,
            column: 21
          }
        },
        loc: {
          start: {
            line: 23,
            column: 54
          },
          end: {
            line: 33,
            column: 3
          }
        },
        line: 23
      }
    },
    branchMap: {
      "0": {
        loc: {
          start: {
            line: 13,
            column: 4
          },
          end: {
            line: 13,
            column: 18
          }
        },
        type: "default-arg",
        locations: [{
          start: {
            line: 13,
            column: 11
          },
          end: {
            line: 13,
            column: 18
          }
        }],
        line: 13
      },
      "1": {
        loc: {
          start: {
            line: 16,
            column: 13
          },
          end: {
            line: 16,
            column: 72
          }
        },
        type: "cond-expr",
        locations: [{
          start: {
            line: 16,
            column: 31
          },
          end: {
            line: 16,
            column: 49
          }
        }, {
          start: {
            line: 16,
            column: 52
          },
          end: {
            line: 16,
            column: 72
          }
        }],
        line: 16
      },
      "2": {
        loc: {
          start: {
            line: 24,
            column: 39
          },
          end: {
            line: 24,
            column: 50
          }
        },
        type: "binary-expr",
        locations: [{
          start: {
            line: 24,
            column: 39
          },
          end: {
            line: 24,
            column: 44
          }
        }, {
          start: {
            line: 24,
            column: 48
          },
          end: {
            line: 24,
            column: 50
          }
        }],
        line: 24
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
      "1": 0
    },
    b: {
      "0": [0],
      "1": [0, 0],
      "2": [0, 0]
    },
    _coverageSchema: "1a1c01bbd47fc00a2c39e90264f33305004495a9",
    hash: "2e67e5309b821b8e672937e86c55c441f9f950d0"
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




cov_1z56ljsbx().s[0]++;
const createComponent = (config, storeKeys) => {
  cov_1z56ljsbx().f[0]++;
  const {
    name,
    module,
    url,
    type = (cov_1z56ljsbx().b[0][0]++, 'react')
  } = (cov_1z56ljsbx().s[1]++, config);
  const C = (cov_1z56ljsbx().s[2]++, (type === 'vue3' ? (cov_1z56ljsbx().b[1][0]++, _vue_component__WEBPACK_IMPORTED_MODULE_2__["default"]) : (cov_1z56ljsbx().b[1][1]++, _react_component__WEBPACK_IMPORTED_MODULE_1__["default"]))({
    name,
    module,
    url,
    watchKeys: storeKeys
  }));
  cov_1z56ljsbx().s[3]++;
  const component = props => {
    cov_1z56ljsbx().f[1]++;
    const {
      $silent,
      $ref,
      ...rest
    } = (cov_1z56ljsbx().s[4]++, (cov_1z56ljsbx().b[2][0]++, props) || (cov_1z56ljsbx().b[2][1]++, {}));
    const nextProps = (cov_1z56ljsbx().s[5]++, {
      $componentProps: rest,
      $silent,
      $ref
    });
    cov_1z56ljsbx().s[6]++;
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_error_boundary__WEBPACK_IMPORTED_MODULE_3__["default"], {
      name: name,
      module: module,
      url: url
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(C, nextProps));
  };
  cov_1z56ljsbx().s[7]++;
  component.displayName = 'various-creator';
  cov_1z56ljsbx().s[8]++;
  return component;
};
/* harmony default export */ __webpack_exports__["default"] = (createComponent);

/***/ }),

/***/ "./src/core/create-module.ts":
/*!***********************************!*\
  !*** ./src/core/create-module.ts ***!
  \***********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./config */ "./src/core/config.ts");
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./store */ "./src/core/store.ts");
/* harmony import */ var _connector__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./connector */ "./src/core/connector.ts");
/* harmony import */ var _helper__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./helper */ "./src/core/helper.ts");
function cov_ifihrsce6() {
  var path = "/Users/am0200/Documents/github/various/src/core/create-module.ts";
  var hash = "d04b2f9faa772eb43a0fcce7eaf705303ec53b13";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "/Users/am0200/Documents/github/various/src/core/create-module.ts",
    statementMap: {
      "0": {
        start: {
          line: 14,
          column: 32
        },
        end: {
          line: 114,
          column: 1
        }
      },
      "1": {
        start: {
          line: 15,
          column: 23
        },
        end: {
          line: 15,
          column: 49
        }
      },
      "2": {
        start: {
          line: 16,
          column: 22
        },
        end: {
          line: 16,
          column: 48
        }
      },
      "3": {
        start: {
          line: 17,
          column: 32
        },
        end: {
          line: 17,
          column: 38
        }
      },
      "4": {
        start: {
          line: 18,
          column: 20
        },
        end: {
          line: 18,
          column: 31
        }
      },
      "5": {
        start: {
          line: 20,
          column: 21
        },
        end: {
          line: 24,
          column: 3
        }
      },
      "6": {
        start: {
          line: 21,
          column: 4
        },
        end: {
          line: 23,
          column: 5
        }
      },
      "7": {
        start: {
          line: 22,
          column: 6
        },
        end: {
          line: 22,
          column: 16
        }
      },
      "8": {
        start: {
          line: 26,
          column: 2
        },
        end: {
          line: 28,
          column: 3
        }
      },
      "9": {
        start: {
          line: 27,
          column: 4
        },
        end: {
          line: 27,
          column: 36
        }
      },
      "10": {
        start: {
          line: 30,
          column: 2
        },
        end: {
          line: 113,
          column: 4
        }
      },
      "11": {
        start: {
          line: 31,
          column: 4
        },
        end: {
          line: 42,
          column: 5
        }
      },
      "12": {
        start: {
          line: 32,
          column: 20
        },
        end: {
          line: 37,
          column: 8
        }
      },
      "13": {
        start: {
          line: 39,
          column: 6
        },
        end: {
          line: 39,
          column: 23
        }
      },
      "14": {
        start: {
          line: 40,
          column: 6
        },
        end: {
          line: 40,
          column: 19
        }
      },
      "15": {
        start: {
          line: 41,
          column: 6
        },
        end: {
          line: 41,
          column: 12
        }
      },
      "16": {
        start: {
          line: 44,
          column: 4
        },
        end: {
          line: 112,
          column: 6
        }
      },
      "17": {
        start: {
          line: 45,
          column: 22
        },
        end: {
          line: 45,
          column: 33
        }
      },
      "18": {
        start: {
          line: 47,
          column: 6
        },
        end: {
          line: 53,
          column: 8
        }
      },
      "19": {
        start: {
          line: 55,
          column: 6
        },
        end: {
          line: 67,
          column: 7
        }
      },
      "20": {
        start: {
          line: 56,
          column: 22
        },
        end: {
          line: 61,
          column: 10
        }
      },
      "21": {
        start: {
          line: 63,
          column: 8
        },
        end: {
          line: 63,
          column: 35
        }
      },
      "22": {
        start: {
          line: 64,
          column: 8
        },
        end: {
          line: 64,
          column: 25
        }
      },
      "23": {
        start: {
          line: 65,
          column: 8
        },
        end: {
          line: 65,
          column: 21
        }
      },
      "24": {
        start: {
          line: 66,
          column: 8
        },
        end: {
          line: 66,
          column: 14
        }
      },
      "25": {
        start: {
          line: 69,
          column: 28
        },
        end: {
          line: 69,
          column: 58
        }
      },
      "26": {
        start: {
          line: 70,
          column: 27
        },
        end: {
          line: 70,
          column: 62
        }
      },
      "27": {
        start: {
          line: 72,
          column: 6
        },
        end: {
          line: 84,
          column: 7
        }
      },
      "28": {
        start: {
          line: 73,
          column: 22
        },
        end: {
          line: 78,
          column: 10
        }
      },
      "29": {
        start: {
          line: 80,
          column: 8
        },
        end: {
          line: 80,
          column: 35
        }
      },
      "30": {
        start: {
          line: 81,
          column: 8
        },
        end: {
          line: 81,
          column: 25
        }
      },
      "31": {
        start: {
          line: 82,
          column: 8
        },
        end: {
          line: 82,
          column: 21
        }
      },
      "32": {
        start: {
          line: 83,
          column: 8
        },
        end: {
          line: 83,
          column: 14
        }
      },
      "33": {
        start: {
          line: 86,
          column: 6
        },
        end: {
          line: 86,
          column: 27
        }
      },
      "34": {
        start: {
          line: 88,
          column: 30
        },
        end: {
          line: 88,
          column: 46
        }
      },
      "35": {
        start: {
          line: 90,
          column: 6
        },
        end: {
          line: 90,
          column: 38
        }
      },
      "36": {
        start: {
          line: 91,
          column: 6
        },
        end: {
          line: 91,
          column: 42
        }
      },
      "37": {
        start: {
          line: 93,
          column: 44
        },
        end: {
          line: 93,
          column: 59
        }
      },
      "38": {
        start: {
          line: 95,
          column: 6
        },
        end: {
          line: 97,
          column: 7
        }
      },
      "39": {
        start: {
          line: 96,
          column: 8
        },
        end: {
          line: 96,
          column: 45
        }
      },
      "40": {
        start: {
          line: 99,
          column: 6
        },
        end: {
          line: 101,
          column: 7
        }
      },
      "41": {
        start: {
          line: 100,
          column: 8
        },
        end: {
          line: 100,
          column: 86
        }
      },
      "42": {
        start: {
          line: 103,
          column: 20
        },
        end: {
          line: 108,
          column: 8
        }
      },
      "43": {
        start: {
          line: 110,
          column: 6
        },
        end: {
          line: 110,
          column: 23
        }
      },
      "44": {
        start: {
          line: 111,
          column: 6
        },
        end: {
          line: 111,
          column: 19
        }
      }
    },
    fnMap: {
      "0": {
        name: "(anonymous_0)",
        decl: {
          start: {
            line: 14,
            column: 32
          },
          end: {
            line: 14,
            column: 33
          }
        },
        loc: {
          start: {
            line: 14,
            column: 61
          },
          end: {
            line: 114,
            column: 1
          }
        },
        line: 14
      },
      "1": {
        name: "(anonymous_1)",
        decl: {
          start: {
            line: 20,
            column: 21
          },
          end: {
            line: 20,
            column: 22
          }
        },
        loc: {
          start: {
            line: 20,
            column: 42
          },
          end: {
            line: 24,
            column: 3
          }
        },
        line: 20
      },
      "2": {
        name: "(anonymous_2)",
        decl: {
          start: {
            line: 30,
            column: 26
          },
          end: {
            line: 30,
            column: 27
          }
        },
        loc: {
          start: {
            line: 30,
            column: 47
          },
          end: {
            line: 113,
            column: 3
          }
        },
        line: 30
      },
      "3": {
        name: "(anonymous_3)",
        decl: {
          start: {
            line: 44,
            column: 29
          },
          end: {
            line: 44,
            column: 30
          }
        },
        loc: {
          start: {
            line: 44,
            column: 51
          },
          end: {
            line: 87,
            column: 5
          }
        },
        line: 44
      },
      "4": {
        name: "(anonymous_4)",
        decl: {
          start: {
            line: 87,
            column: 7
          },
          end: {
            line: 87,
            column: 8
          }
        },
        loc: {
          start: {
            line: 87,
            column: 28
          },
          end: {
            line: 112,
            column: 5
          }
        },
        line: 87
      }
    },
    branchMap: {
      "0": {
        loc: {
          start: {
            line: 14,
            column: 41
          },
          end: {
            line: 14,
            column: 56
          }
        },
        type: "default-arg",
        locations: [{
          start: {
            line: 14,
            column: 52
          },
          end: {
            line: 14,
            column: 56
          }
        }],
        line: 14
      },
      "1": {
        loc: {
          start: {
            line: 21,
            column: 4
          },
          end: {
            line: 23,
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
            line: 23,
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
            line: 26,
            column: 2
          },
          end: {
            line: 28,
            column: 3
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 26,
            column: 2
          },
          end: {
            line: 28,
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
        line: 26
      },
      "3": {
        loc: {
          start: {
            line: 31,
            column: 4
          },
          end: {
            line: 42,
            column: 5
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 31,
            column: 4
          },
          end: {
            line: 42,
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
        line: 31
      },
      "4": {
        loc: {
          start: {
            line: 31,
            column: 8
          },
          end: {
            line: 31,
            column: 63
          }
        },
        type: "binary-expr",
        locations: [{
          start: {
            line: 31,
            column: 8
          },
          end: {
            line: 31,
            column: 12
          }
        }, {
          start: {
            line: 31,
            column: 16
          },
          end: {
            line: 31,
            column: 35
          }
        }, {
          start: {
            line: 31,
            column: 39
          },
          end: {
            line: 31,
            column: 63
          }
        }],
        line: 31
      },
      "5": {
        loc: {
          start: {
            line: 55,
            column: 6
          },
          end: {
            line: 67,
            column: 7
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 55,
            column: 6
          },
          end: {
            line: 67,
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
        line: 55
      },
      "6": {
        loc: {
          start: {
            line: 69,
            column: 28
          },
          end: {
            line: 69,
            column: 58
          }
        },
        type: "cond-expr",
        locations: [{
          start: {
            line: 69,
            column: 45
          },
          end: {
            line: 69,
            column: 54
          }
        }, {
          start: {
            line: 69,
            column: 57
          },
          end: {
            line: 69,
            column: 58
          }
        }],
        line: 69
      },
      "7": {
        loc: {
          start: {
            line: 70,
            column: 27
          },
          end: {
            line: 70,
            column: 62
          }
        },
        type: "cond-expr",
        locations: [{
          start: {
            line: 70,
            column: 37
          },
          end: {
            line: 70,
            column: 50
          }
        }, {
          start: {
            line: 70,
            column: 53
          },
          end: {
            line: 70,
            column: 62
          }
        }],
        line: 70
      },
      "8": {
        loc: {
          start: {
            line: 72,
            column: 6
          },
          end: {
            line: 84,
            column: 7
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 72,
            column: 6
          },
          end: {
            line: 84,
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
        line: 72
      },
      "9": {
        loc: {
          start: {
            line: 72,
            column: 10
          },
          end: {
            line: 72,
            column: 46
          }
        },
        type: "binary-expr",
        locations: [{
          start: {
            line: 72,
            column: 10
          },
          end: {
            line: 72,
            column: 36
          }
        }, {
          start: {
            line: 72,
            column: 40
          },
          end: {
            line: 72,
            column: 46
          }
        }],
        line: 72
      },
      "10": {
        loc: {
          start: {
            line: 95,
            column: 6
          },
          end: {
            line: 97,
            column: 7
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 95,
            column: 6
          },
          end: {
            line: 97,
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
        line: 95
      },
      "11": {
        loc: {
          start: {
            line: 99,
            column: 6
          },
          end: {
            line: 101,
            column: 7
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 99,
            column: 6
          },
          end: {
            line: 101,
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
        line: 99
      },
      "12": {
        loc: {
          start: {
            line: 100,
            column: 20
          },
          end: {
            line: 100,
            column: 86
          }
        },
        type: "cond-expr",
        locations: [{
          start: {
            line: 100,
            column: 45
          },
          end: {
            line: 100,
            column: 59
          }
        }, {
          start: {
            line: 100,
            column: 62
          },
          end: {
            line: 100,
            column: 86
          }
        }],
        line: 100
      },
      "13": {
        loc: {
          start: {
            line: 105,
            column: 16
          },
          end: {
            line: 105,
            column: 66
          }
        },
        type: "cond-expr",
        locations: [{
          start: {
            line: 105,
            column: 41
          },
          end: {
            line: 105,
            column: 50
          }
        }, {
          start: {
            line: 105,
            column: 53
          },
          end: {
            line: 105,
            column: 66
          }
        }],
        line: 105
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
      "44": 0
    },
    f: {
      "0": 0,
      "1": 0,
      "2": 0,
      "3": 0,
      "4": 0
    },
    b: {
      "0": [0],
      "1": [0, 0],
      "2": [0, 0],
      "3": [0, 0],
      "4": [0, 0, 0],
      "5": [0, 0],
      "6": [0, 0],
      "7": [0, 0],
      "8": [0, 0],
      "9": [0, 0],
      "10": [0, 0],
      "11": [0, 0],
      "12": [0, 0],
      "13": [0, 0]
    },
    _coverageSchema: "1a1c01bbd47fc00a2c39e90264f33305004495a9",
    hash: "d04b2f9faa772eb43a0fcce7eaf705303ec53b13"
  };
  var coverage = global[gcv] || (global[gcv] = {});
  if (!coverage[path] || coverage[path].hash !== hash) {
    coverage[path] = coverageData;
  }
  var actualCoverage = coverage[path];
  {
    // @ts-ignore
    cov_ifihrsce6 = function () {
      return actualCoverage;
    };
  }
  return actualCoverage;
}
cov_ifihrsce6();




cov_ifihrsce6().s[0]++;
const createModule = (config, logError = (cov_ifihrsce6().b[0][0]++, true)) => {
  cov_ifihrsce6().f[0]++;
  const dependencies = (cov_ifihrsce6().s[1]++, (0,_store__WEBPACK_IMPORTED_MODULE_1__.getStore)(_config__WEBPACK_IMPORTED_MODULE_0__.DEPENDENCIES_KEY));
  const middlewares = (cov_ifihrsce6().s[2]++, _connector__WEBPACK_IMPORTED_MODULE_2__["default"].getMiddlewares());
  const {
    name,
    module,
    url
  } = (cov_ifihrsce6().s[3]++, config);
  const loadStart = (cov_ifihrsce6().s[4]++, +new Date());
  cov_ifihrsce6().s[5]++;
  const logOnError = e => {
    cov_ifihrsce6().f[1]++;
    cov_ifihrsce6().s[6]++;
    if (logError) {
      cov_ifihrsce6().b[1][0]++;
      cov_ifihrsce6().s[7]++;
      (0,_helper__WEBPACK_IMPORTED_MODULE_3__.onError)(e);
    } else {
      cov_ifihrsce6().b[1][1]++;
    }
  };
  cov_ifihrsce6().s[8]++;
  if (url) {
    cov_ifihrsce6().b[2][0]++;
    cov_ifihrsce6().s[9]++;
    (0,_helper__WEBPACK_IMPORTED_MODULE_3__.resetDependencyConfig)(name, url);
  } else {
    cov_ifihrsce6().b[2][1]++;
  }
  cov_ifihrsce6().s[10]++;
  return new Promise((resolve, reject) => {
    cov_ifihrsce6().f[2]++;
    cov_ifihrsce6().s[11]++;
    if ((cov_ifihrsce6().b[4][0]++, !url) && (cov_ifihrsce6().b[4][1]++, !dependencies[name]) && (cov_ifihrsce6().b[4][2]++, !(0,_helper__WEBPACK_IMPORTED_MODULE_3__.isModuleSpecified)(name))) {
      cov_ifihrsce6().b[3][0]++;
      const error = (cov_ifihrsce6().s[12]++, new _helper__WEBPACK_IMPORTED_MODULE_3__.VariousError({
        name,
        module,
        type: 'NOT_DEFINED',
        originalError: new Error(`module "${name}" not defined`)
      }));
      cov_ifihrsce6().s[13]++;
      logOnError(error);
      cov_ifihrsce6().s[14]++;
      reject(error);
      cov_ifihrsce6().s[15]++;
      return;
    } else {
      cov_ifihrsce6().b[3][1]++;
    }
    cov_ifihrsce6().s[16]++;
    window.requirejs([name], C => {
      cov_ifihrsce6().f[3]++;
      const loadEnd = (cov_ifihrsce6().s[17]++, +new Date());
      cov_ifihrsce6().s[18]++;
      middlewares?.onLoad?.({
        name,
        module,
        loadStart,
        loadEnd,
        beenLoaded: (0,_helper__WEBPACK_IMPORTED_MODULE_3__.isModuleLoaded)(name)
      });
      cov_ifihrsce6().s[19]++;
      if (!C) {
        cov_ifihrsce6().b[5][0]++;
        const error = (cov_ifihrsce6().s[20]++, new _helper__WEBPACK_IMPORTED_MODULE_3__.VariousError({
          name,
          module,
          type: 'INVALID_MODULE',
          originalError: new Error(`module "${name}" invalid`)
        }));
        cov_ifihrsce6().s[21]++;
        (0,_helper__WEBPACK_IMPORTED_MODULE_3__.resetDependencyConfig)(name);
        cov_ifihrsce6().s[22]++;
        logOnError(error);
        cov_ifihrsce6().s[23]++;
        reject(error);
        cov_ifihrsce6().s[24]++;
        return;
      } else {
        cov_ifihrsce6().b[5][1]++;
      }
      const defaultModule = (cov_ifihrsce6().s[25]++, 'default' in C ? (cov_ifihrsce6().b[6][0]++, C.default) : (cov_ifihrsce6().b[6][1]++, C));
      const actualModule = (cov_ifihrsce6().s[26]++, !module ? (cov_ifihrsce6().b[7][0]++, defaultModule) : (cov_ifihrsce6().b[7][1]++, C[module]));
      cov_ifihrsce6().s[27]++;
      if ((cov_ifihrsce6().b[9][0]++, actualModule === undefined) && (cov_ifihrsce6().b[9][1]++, module)) {
        cov_ifihrsce6().b[8][0]++;
        const error = (cov_ifihrsce6().s[28]++, new _helper__WEBPACK_IMPORTED_MODULE_3__.VariousError({
          name,
          module,
          type: 'SUBMODULE_NOT_DEFINED',
          originalError: new Error(`submodule "${module}" not defined`)
        }));
        cov_ifihrsce6().s[29]++;
        (0,_helper__WEBPACK_IMPORTED_MODULE_3__.resetDependencyConfig)(name);
        cov_ifihrsce6().s[30]++;
        logOnError(error);
        cov_ifihrsce6().s[31]++;
        reject(error);
        cov_ifihrsce6().s[32]++;
        return;
      } else {
        cov_ifihrsce6().b[8][1]++;
      }
      cov_ifihrsce6().s[33]++;
      resolve(actualModule);
    }, e => {
      cov_ifihrsce6().f[4]++;
      const [requireModule] = (cov_ifihrsce6().s[34]++, e.requireModules);
      cov_ifihrsce6().s[35]++;
      (0,_helper__WEBPACK_IMPORTED_MODULE_3__.resetDependencyConfig)(name, url);
      cov_ifihrsce6().s[36]++;
      (0,_helper__WEBPACK_IMPORTED_MODULE_3__.resetDependencyConfig)(requireModule);
      let errorType = (cov_ifihrsce6().s[37]++, 'LOADING_ERROR');
      cov_ifihrsce6().s[38]++;
      if (requireModule !== name) {
        cov_ifihrsce6().b[10][0]++;
        cov_ifihrsce6().s[39]++;
        errorType = 'SUBMODULE_LOADING_ERROR';
      } else {
        cov_ifihrsce6().b[10][1]++;
      }
      cov_ifihrsce6().s[40]++;
      if (!e.message.includes('https://requirejs.org/docs/errors.html')) {
        cov_ifihrsce6().b[11][0]++;
        cov_ifihrsce6().s[41]++;
        errorType = requireModule === name ? (cov_ifihrsce6().b[12][0]++, 'SCRIPT_ERROR') : (cov_ifihrsce6().b[12][1]++, 'SUBMODULE_SCRIPT_ERROR');
      } else {
        cov_ifihrsce6().b[11][1]++;
      }
      const error = (cov_ifihrsce6().s[42]++, new _helper__WEBPACK_IMPORTED_MODULE_3__.VariousError({
        name,
        module: requireModule === name ? (cov_ifihrsce6().b[13][0]++, undefined) : (cov_ifihrsce6().b[13][1]++, requireModule),
        type: errorType,
        originalError: e
      }));
      cov_ifihrsce6().s[43]++;
      logOnError(error);
      cov_ifihrsce6().s[44]++;
      reject(error);
    });
  });
};
/* harmony default export */ __webpack_exports__["default"] = (createModule);

/***/ }),

/***/ "./src/core/default-component.tsx":
/*!****************************************!*\
  !*** ./src/core/default-component.tsx ***!
  \****************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ErrorFallback: function() { return /* binding */ ErrorFallback; },
/* harmony export */   Fallback: function() { return /* binding */ Fallback; },
/* harmony export */   Root: function() { return /* binding */ Root; }
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _helper__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./helper */ "./src/core/helper.ts");
function cov_2mxwwcr7e() {
  var path = "/Users/am0200/Documents/github/various/src/core/default-component.tsx";
  var hash = "ce3add9e7104b5b6481d46b5c9dcfdcfa5950fed";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "/Users/am0200/Documents/github/various/src/core/default-component.tsx",
    statementMap: {
      "0": {
        start: {
          line: 6,
          column: 45
        },
        end: {
          line: 11,
          column: 1
        }
      },
      "1": {
        start: {
          line: 7,
          column: 20
        },
        end: {
          line: 7,
          column: 85
        }
      },
      "2": {
        start: {
          line: 8,
          column: 2
        },
        end: {
          line: 10,
          column: 3
        }
      },
      "3": {
        start: {
          line: 13,
          column: 55
        },
        end: {
          line: 24,
          column: 1
        }
      },
      "4": {
        start: {
          line: 14,
          column: 20
        },
        end: {
          line: 14,
          column: 85
        }
      },
      "5": {
        start: {
          line: 15,
          column: 2
        },
        end: {
          line: 23,
          column: 3
        }
      },
      "6": {
        start: {
          line: 26,
          column: 35
        },
        end: {
          line: 28,
          column: 1
        }
      },
      "7": {
        start: {
          line: 27,
          column: 2
        },
        end: {
          line: 27,
          column: 41
        }
      }
    },
    fnMap: {
      "0": {
        name: "(anonymous_0)",
        decl: {
          start: {
            line: 6,
            column: 45
          },
          end: {
            line: 6,
            column: 46
          }
        },
        loc: {
          start: {
            line: 6,
            column: 56
          },
          end: {
            line: 11,
            column: 1
          }
        },
        line: 6
      },
      "1": {
        name: "(anonymous_1)",
        decl: {
          start: {
            line: 13,
            column: 55
          },
          end: {
            line: 13,
            column: 56
          }
        },
        loc: {
          start: {
            line: 13,
            column: 87
          },
          end: {
            line: 24,
            column: 1
          }
        },
        line: 13
      },
      "2": {
        name: "(anonymous_2)",
        decl: {
          start: {
            line: 26,
            column: 35
          },
          end: {
            line: 26,
            column: 36
          }
        },
        loc: {
          start: {
            line: 27,
            column: 2
          },
          end: {
            line: 27,
            column: 41
          }
        },
        line: 27
      }
    },
    branchMap: {},
    s: {
      "0": 0,
      "1": 0,
      "2": 0,
      "3": 0,
      "4": 0,
      "5": 0,
      "6": 0,
      "7": 0
    },
    f: {
      "0": 0,
      "1": 0,
      "2": 0
    },
    b: {},
    _coverageSchema: "1a1c01bbd47fc00a2c39e90264f33305004495a9",
    hash: "ce3add9e7104b5b6481d46b5c9dcfdcfa5950fed"
  };
  var coverage = global[gcv] || (global[gcv] = {});
  if (!coverage[path] || coverage[path].hash !== hash) {
    coverage[path] = coverageData;
  }
  var actualCoverage = coverage[path];
  {
    // @ts-ignore
    cov_2mxwwcr7e = function () {
      return actualCoverage;
    };
  }
  return actualCoverage;
}
cov_2mxwwcr7e();


cov_2mxwwcr7e().s[0]++;
const Fallback = props => {
  cov_2mxwwcr7e().f[0]++;
  const className = (cov_2mxwwcr7e().s[1]++, (0,_helper__WEBPACK_IMPORTED_MODULE_1__.getClassNameWithModule)(props.$self, 'various-component-fallback'));
  cov_2mxwwcr7e().s[2]++;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: className
  }, "Loading");
};
cov_2mxwwcr7e().s[3]++;
const ErrorFallback = ({
  $error,
  $reload,
  $self
}) => {
  cov_2mxwwcr7e().f[1]++;
  const className = (cov_2mxwwcr7e().s[4]++, (0,_helper__WEBPACK_IMPORTED_MODULE_1__.getClassNameWithModule)($self, 'various-component-error_fallback'));
  cov_2mxwwcr7e().s[5]++;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: className
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h3", null, $error.type), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, $error.message), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
    type: "button",
    onClick: $reload
  }, "Reload"));
};
cov_2mxwwcr7e().s[6]++;
const Root = () => {
  cov_2mxwwcr7e().f[2]++;
  cov_2mxwwcr7e().s[7]++;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, "App Container is not defined");
};

/***/ }),

/***/ "./src/core/dispatch.ts":
/*!******************************!*\
  !*** ./src/core/dispatch.ts ***!
  \******************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _connector__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./connector */ "./src/core/connector.ts");
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./store */ "./src/core/store.ts");
/* harmony import */ var _helper__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./helper */ "./src/core/helper.ts");
/* harmony import */ var _logger__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./logger */ "./src/core/logger.ts");
function cov_1u32i3x4tu() {
  var path = "/Users/am0200/Documents/github/various/src/core/dispatch.ts";
  var hash = "6fda7c538d134e28e584f6478f540f49b2ea37d0";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "/Users/am0200/Documents/github/various/src/core/dispatch.ts",
    statementMap: {
      "0": {
        start: {
          line: 7,
          column: 34
        },
        end: {
          line: 80,
          column: 1
        }
      },
      "1": {
        start: {
          line: 7,
          column: 53
        },
        end: {
          line: 80,
          column: 1
        }
      },
      "2": {
        start: {
          line: 8,
          column: 22
        },
        end: {
          line: 8,
          column: 48
        }
      },
      "3": {
        start: {
          line: 9,
          column: 17
        },
        end: {
          line: 9,
          column: 44
        }
      },
      "4": {
        start: {
          line: 16,
          column: 6
        },
        end: {
          line: 16,
          column: 12
        }
      },
      "5": {
        start: {
          line: 18,
          column: 2
        },
        end: {
          line: 35,
          column: 3
        }
      },
      "6": {
        start: {
          line: 19,
          column: 18
        },
        end: {
          line: 24,
          column: 6
        }
      },
      "7": {
        start: {
          line: 25,
          column: 4
        },
        end: {
          line: 28,
          column: 5
        }
      },
      "8": {
        start: {
          line: 26,
          column: 6
        },
        end: {
          line: 26,
          column: 54
        }
      },
      "9": {
        start: {
          line: 27,
          column: 6
        },
        end: {
          line: 27,
          column: 30
        }
      },
      "10": {
        start: {
          line: 29,
          column: 4
        },
        end: {
          line: 34,
          column: 5
        }
      },
      "11": {
        start: {
          line: 30,
          column: 6
        },
        end: {
          line: 30,
          column: 30
        }
      },
      "12": {
        start: {
          line: 31,
          column: 6
        },
        end: {
          line: 31,
          column: 34
        }
      },
      "13": {
        start: {
          line: 32,
          column: 6
        },
        end: {
          line: 32,
          column: 27
        }
      },
      "14": {
        start: {
          line: 33,
          column: 6
        },
        end: {
          line: 33,
          column: 25
        }
      },
      "15": {
        start: {
          line: 37,
          column: 2
        },
        end: {
          line: 51,
          column: 3
        }
      },
      "16": {
        start: {
          line: 38,
          column: 25
        },
        end: {
          line: 38,
          column: 52
        }
      },
      "17": {
        start: {
          line: 39,
          column: 24
        },
        end: {
          line: 39,
          column: 44
        }
      },
      "18": {
        start: {
          line: 40,
          column: 4
        },
        end: {
          line: 49,
          column: 5
        }
      },
      "19": {
        start: {
          line: 41,
          column: 27
        },
        end: {
          line: 41,
          column: 62
        }
      },
      "20": {
        start: {
          line: 42,
          column: 20
        },
        end: {
          line: 46,
          column: 8
        }
      },
      "21": {
        start: {
          line: 47,
          column: 6
        },
        end: {
          line: 47,
          column: 20
        }
      },
      "22": {
        start: {
          line: 48,
          column: 6
        },
        end: {
          line: 48,
          column: 17
        }
      },
      "23": {
        start: {
          line: 50,
          column: 4
        },
        end: {
          line: 50,
          column: 54
        }
      },
      "24": {
        start: {
          line: 53,
          column: 27
        },
        end: {
          line: 53,
          column: 74
        }
      },
      "25": {
        start: {
          line: 55,
          column: 2
        },
        end: {
          line: 64,
          column: 3
        }
      },
      "26": {
        start: {
          line: 56,
          column: 25
        },
        end: {
          line: 56,
          column: 49
        }
      },
      "27": {
        start: {
          line: 57,
          column: 18
        },
        end: {
          line: 61,
          column: 6
        }
      },
      "28": {
        start: {
          line: 62,
          column: 4
        },
        end: {
          line: 62,
          column: 18
        }
      },
      "29": {
        start: {
          line: 63,
          column: 4
        },
        end: {
          line: 63,
          column: 15
        }
      },
      "30": {
        start: {
          line: 66,
          column: 26
        },
        end: {
          line: 66,
          column: 50
        }
      },
      "31": {
        start: {
          line: 68,
          column: 2
        },
        end: {
          line: 77,
          column: 3
        }
      },
      "32": {
        start: {
          line: 69,
          column: 25
        },
        end: {
          line: 69,
          column: 60
        }
      },
      "33": {
        start: {
          line: 70,
          column: 18
        },
        end: {
          line: 74,
          column: 6
        }
      },
      "34": {
        start: {
          line: 75,
          column: 4
        },
        end: {
          line: 75,
          column: 18
        }
      },
      "35": {
        start: {
          line: 76,
          column: 4
        },
        end: {
          line: 76,
          column: 15
        }
      },
      "36": {
        start: {
          line: 79,
          column: 2
        },
        end: {
          line: 79,
          column: 63
        }
      }
    },
    fnMap: {
      "0": {
        name: "(anonymous_0)",
        decl: {
          start: {
            line: 7,
            column: 34
          },
          end: {
            line: 7,
            column: 35
          }
        },
        loc: {
          start: {
            line: 7,
            column: 53
          },
          end: {
            line: 80,
            column: 1
          }
        },
        line: 7
      },
      "1": {
        name: "(anonymous_1)",
        decl: {
          start: {
            line: 7,
            column: 53
          },
          end: {
            line: 7,
            column: 54
          }
        },
        loc: {
          start: {
            line: 7,
            column: 77
          },
          end: {
            line: 80,
            column: 1
          }
        },
        line: 7
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
            line: 35,
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
            line: 35,
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
            line: 25,
            column: 4
          },
          end: {
            line: 28,
            column: 5
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 25,
            column: 4
          },
          end: {
            line: 28,
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
        line: 25
      },
      "2": {
        loc: {
          start: {
            line: 29,
            column: 4
          },
          end: {
            line: 34,
            column: 5
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 29,
            column: 4
          },
          end: {
            line: 34,
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
        line: 29
      },
      "3": {
        loc: {
          start: {
            line: 37,
            column: 2
          },
          end: {
            line: 51,
            column: 3
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 37,
            column: 2
          },
          end: {
            line: 51,
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
        line: 37
      },
      "4": {
        loc: {
          start: {
            line: 40,
            column: 4
          },
          end: {
            line: 49,
            column: 5
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 40,
            column: 4
          },
          end: {
            line: 49,
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
        line: 40
      },
      "5": {
        loc: {
          start: {
            line: 55,
            column: 2
          },
          end: {
            line: 64,
            column: 3
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 55,
            column: 2
          },
          end: {
            line: 64,
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
        line: 55
      },
      "6": {
        loc: {
          start: {
            line: 68,
            column: 2
          },
          end: {
            line: 77,
            column: 3
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 68,
            column: 2
          },
          end: {
            line: 77,
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
        line: 68
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
      "36": 0
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
      "4": [0, 0],
      "5": [0, 0],
      "6": [0, 0]
    },
    _coverageSchema: "1a1c01bbd47fc00a2c39e90264f33305004495a9",
    hash: "6fda7c538d134e28e584f6478f540f49b2ea37d0"
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




cov_1u32i3x4tu().s[0]++;
const createDispatch = moduleDefined => {
  cov_1u32i3x4tu().f[0]++;
  cov_1u32i3x4tu().s[1]++;
  return async function (params) {
    cov_1u32i3x4tu().f[1]++;
    const middlewares = (cov_1u32i3x4tu().s[2]++, _connector__WEBPACK_IMPORTED_MODULE_0__["default"].getMiddlewares());
    const logger = (cov_1u32i3x4tu().s[3]++, (0,_logger__WEBPACK_IMPORTED_MODULE_3__["default"])(moduleDefined));
    let {
      name,
      module,
      action,
      value
    } = (cov_1u32i3x4tu().s[4]++, params);
    cov_1u32i3x4tu().s[5]++;
    if (middlewares?.onDispatch) {
      cov_1u32i3x4tu().b[0][0]++;
      const check = (cov_1u32i3x4tu().s[6]++, await middlewares.onDispatch({
        target: {
          name,
          module
        },
        action,
        value,
        trigger: moduleDefined
      }));
      cov_1u32i3x4tu().s[7]++;
      if (check === false) {
        cov_1u32i3x4tu().b[1][0]++;
        cov_1u32i3x4tu().s[8]++;
        logger.warn('blocked by middleware', 'DISPATCH');
        cov_1u32i3x4tu().s[9]++;
        return Promise.resolve();
      } else {
        cov_1u32i3x4tu().b[1][1]++;
      }
      cov_1u32i3x4tu().s[10]++;
      if (check !== true) {
        cov_1u32i3x4tu().b[2][0]++;
        cov_1u32i3x4tu().s[11]++;
        name = check.target.name;
        cov_1u32i3x4tu().s[12]++;
        module = check.target.module;
        cov_1u32i3x4tu().s[13]++;
        action = check.action;
        cov_1u32i3x4tu().s[14]++;
        value = check.value;
      } else {
        cov_1u32i3x4tu().b[2][1]++;
      }
    } else {
      cov_1u32i3x4tu().b[0][1]++;
    }
    cov_1u32i3x4tu().s[15]++;
    if (name === 'app') {
      cov_1u32i3x4tu().b[3][0]++;
      const storeActions = (cov_1u32i3x4tu().s[16]++, _connector__WEBPACK_IMPORTED_MODULE_0__["default"].getStoreActions());
      const storeAction = (cov_1u32i3x4tu().s[17]++, storeActions[action]);
      cov_1u32i3x4tu().s[18]++;
      if (!storeAction) {
        cov_1u32i3x4tu().b[4][0]++;
        const errorMessage = (cov_1u32i3x4tu().s[19]++, `action "${action}" is not present`);
        const error = (cov_1u32i3x4tu().s[20]++, new _helper__WEBPACK_IMPORTED_MODULE_2__.VariousError({
          ...moduleDefined,
          type: 'DISPATCH',
          originalError: new Error(errorMessage)
        }));
        cov_1u32i3x4tu().s[21]++;
        (0,_helper__WEBPACK_IMPORTED_MODULE_2__.onError)(error);
        cov_1u32i3x4tu().s[22]++;
        throw error;
      } else {
        cov_1u32i3x4tu().b[4][1]++;
      }
      cov_1u32i3x4tu().s[23]++;
      return (0,_store__WEBPACK_IMPORTED_MODULE_1__.dispatch)(storeAction, value, moduleDefined);
    } else {
      cov_1u32i3x4tu().b[3][1]++;
    }
    const componentActions = (cov_1u32i3x4tu().s[24]++, _connector__WEBPACK_IMPORTED_MODULE_0__["default"].getComponentActions({
      name,
      module
    }));
    cov_1u32i3x4tu().s[25]++;
    if (!componentActions) {
      cov_1u32i3x4tu().b[5][0]++;
      const errorMessage = (cov_1u32i3x4tu().s[26]++, 'component is not ready');
      const error = (cov_1u32i3x4tu().s[27]++, new _helper__WEBPACK_IMPORTED_MODULE_2__.VariousError({
        ...moduleDefined,
        type: 'DISPATCH',
        originalError: new Error(errorMessage)
      }));
      cov_1u32i3x4tu().s[28]++;
      (0,_helper__WEBPACK_IMPORTED_MODULE_2__.onError)(error);
      cov_1u32i3x4tu().s[29]++;
      throw error;
    } else {
      cov_1u32i3x4tu().b[5][1]++;
    }
    const componentAction = (cov_1u32i3x4tu().s[30]++, componentActions[action]);
    cov_1u32i3x4tu().s[31]++;
    if (!componentAction) {
      cov_1u32i3x4tu().b[6][0]++;
      const errorMessage = (cov_1u32i3x4tu().s[32]++, `action "${action}" is not present`);
      const error = (cov_1u32i3x4tu().s[33]++, new _helper__WEBPACK_IMPORTED_MODULE_2__.VariousError({
        ...moduleDefined,
        type: 'DISPATCH',
        originalError: new Error(errorMessage)
      }));
      cov_1u32i3x4tu().s[34]++;
      (0,_helper__WEBPACK_IMPORTED_MODULE_2__.onError)(error);
      cov_1u32i3x4tu().s[35]++;
      throw error;
    } else {
      cov_1u32i3x4tu().b[6][1]++;
    }
    cov_1u32i3x4tu().s[36]++;
    return Promise.resolve(componentAction(value, moduleDefined));
  };
};
/* harmony default export */ __webpack_exports__["default"] = (createDispatch);

/***/ }),

/***/ "./src/core/error-boundary.tsx":
/*!*************************************!*\
  !*** ./src/core/error-boundary.tsx ***!
  \*************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _helper__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./helper */ "./src/core/helper.ts");
/* harmony import */ var _connector__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./connector */ "./src/core/connector.ts");
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./store */ "./src/core/store.ts");
function cov_15mcq1k4uu() {
  var path = "/Users/am0200/Documents/github/various/src/core/error-boundary.tsx";
  var hash = "06e3d10d8ad63a9a1e795a88fe939e290eb2edda";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "/Users/am0200/Documents/github/various/src/core/error-boundary.tsx",
    statementMap: {
      "0": {
        start: {
          line: 15,
          column: 23
        },
        end: {
          line: 15,
          column: 47
        }
      },
      "1": {
        start: {
          line: 17,
          column: 10
        },
        end: {
          line: 19,
          column: 3
        }
      },
      "2": {
        start: {
          line: 24,
          column: 29
        },
        end: {
          line: 24,
          column: 39
        }
      },
      "3": {
        start: {
          line: 25,
          column: 18
        },
        end: {
          line: 32,
          column: 8
        }
      },
      "4": {
        start: {
          line: 34,
          column: 4
        },
        end: {
          line: 34,
          column: 37
        }
      },
      "5": {
        start: {
          line: 35,
          column: 4
        },
        end: {
          line: 35,
          column: 22
        }
      },
      "6": {
        start: {
          line: 36,
          column: 4
        },
        end: {
          line: 36,
          column: 18
        }
      },
      "7": {
        start: {
          line: 37,
          column: 4
        },
        end: {
          line: 37,
          column: 42
        }
      },
      "8": {
        start: {
          line: 38,
          column: 4
        },
        end: {
          line: 38,
          column: 44
        }
      },
      "9": {
        start: {
          line: 41,
          column: 10
        },
        end: {
          line: 41,
          column: 33
        }
      },
      "10": {
        start: {
          line: 43,
          column: 11
        },
        end: {
          line: 46,
          column: 3
        }
      },
      "11": {
        start: {
          line: 44,
          column: 4
        },
        end: {
          line: 44,
          column: 26
        }
      },
      "12": {
        start: {
          line: 45,
          column: 4
        },
        end: {
          line: 45,
          column: 38
        }
      },
      "13": {
        start: {
          line: 49,
          column: 30
        },
        end: {
          line: 49,
          column: 67
        }
      },
      "14": {
        start: {
          line: 50,
          column: 18
        },
        end: {
          line: 50,
          column: 32
        }
      },
      "15": {
        start: {
          line: 52,
          column: 4
        },
        end: {
          line: 61,
          column: 5
        }
      },
      "16": {
        start: {
          line: 53,
          column: 6
        },
        end: {
          line: 60,
          column: 7
        }
      },
      "17": {
        start: {
          line: 63,
          column: 4
        },
        end: {
          line: 63,
          column: 30
        }
      }
    },
    fnMap: {
      "0": {
        name: "(anonymous_0)",
        decl: {
          start: {
            line: 23,
            column: 2
          },
          end: {
            line: 23,
            column: 3
          }
        },
        loc: {
          start: {
            line: 23,
            column: 45
          },
          end: {
            line: 39,
            column: 3
          }
        },
        line: 23
      },
      "1": {
        name: "(anonymous_1)",
        decl: {
          start: {
            line: 43,
            column: 11
          },
          end: {
            line: 43,
            column: 12
          }
        },
        loc: {
          start: {
            line: 43,
            column: 17
          },
          end: {
            line: 46,
            column: 3
          }
        },
        line: 43
      },
      "2": {
        name: "(anonymous_2)",
        decl: {
          start: {
            line: 48,
            column: 2
          },
          end: {
            line: 48,
            column: 3
          }
        },
        loc: {
          start: {
            line: 48,
            column: 11
          },
          end: {
            line: 64,
            column: 3
          }
        },
        line: 48
      }
    },
    branchMap: {
      "0": {
        loc: {
          start: {
            line: 25,
            column: 18
          },
          end: {
            line: 32,
            column: 8
          }
        },
        type: "cond-expr",
        locations: [{
          start: {
            line: 26,
            column: 8
          },
          end: {
            line: 26,
            column: 9
          }
        }, {
          start: {
            line: 27,
            column: 8
          },
          end: {
            line: 32,
            column: 8
          }
        }],
        line: 25
      },
      "1": {
        loc: {
          start: {
            line: 30,
            column: 14
          },
          end: {
            line: 30,
            column: 59
          }
        },
        type: "cond-expr",
        locations: [{
          start: {
            line: 30,
            column: 31
          },
          end: {
            line: 30,
            column: 42
          }
        }, {
          start: {
            line: 30,
            column: 45
          },
          end: {
            line: 30,
            column: 59
          }
        }],
        line: 30
      },
      "2": {
        loc: {
          start: {
            line: 52,
            column: 4
          },
          end: {
            line: 61,
            column: 5
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 52,
            column: 4
          },
          end: {
            line: 61,
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
        line: 52
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
      "17": 0
    },
    f: {
      "0": 0,
      "1": 0,
      "2": 0
    },
    b: {
      "0": [0, 0],
      "1": [0, 0],
      "2": [0, 0]
    },
    _coverageSchema: "1a1c01bbd47fc00a2c39e90264f33305004495a9",
    hash: "06e3d10d8ad63a9a1e795a88fe939e290eb2edda"
  };
  var coverage = global[gcv] || (global[gcv] = {});
  if (!coverage[path] || coverage[path].hash !== hash) {
    coverage[path] = coverageData;
  }
  var actualCoverage = coverage[path];
  {
    // @ts-ignore
    cov_15mcq1k4uu = function () {
      return actualCoverage;
    };
  }
  return actualCoverage;
}
cov_15mcq1k4uu();




class ErrorBoundary extends react__WEBPACK_IMPORTED_MODULE_0__.Component {
  static displayName = (cov_15mcq1k4uu().s[0]++, 'various-error-boundary');
  state = (cov_15mcq1k4uu().s[1]++, {
    hasError: false
  });
  componentDidCatch(e) {
    cov_15mcq1k4uu().f[0]++;
    const {
      name,
      module
    } = (cov_15mcq1k4uu().s[2]++, this.props);
    const error = (cov_15mcq1k4uu().s[3]++, e instanceof _helper__WEBPACK_IMPORTED_MODULE_1__.VariousError ? (cov_15mcq1k4uu().b[0][0]++, e) : (cov_15mcq1k4uu().b[0][1]++, new _helper__WEBPACK_IMPORTED_MODULE_1__.VariousError({
      name,
      module,
      type: name === 'app' ? (cov_15mcq1k4uu().b[1][0]++, 'APP_ERROR') : (cov_15mcq1k4uu().b[1][1]++, 'SCRIPT_ERROR'),
      originalError: e
    })));
    cov_15mcq1k4uu().s[4]++;
    this.setState({
      hasError: true
    });
    cov_15mcq1k4uu().s[5]++;
    this.error = error;
    cov_15mcq1k4uu().s[6]++;
    (0,_helper__WEBPACK_IMPORTED_MODULE_1__.onError)(error);
    cov_15mcq1k4uu().s[7]++;
    (0,_helper__WEBPACK_IMPORTED_MODULE_1__.resetDependencyConfig)(this.props.name);
    cov_15mcq1k4uu().s[8]++;
    (0,_helper__WEBPACK_IMPORTED_MODULE_1__.updateUnMountComponent)({
      name,
      module
    });
  }
  $self = (cov_15mcq1k4uu().s[9]++, (0,_helper__WEBPACK_IMPORTED_MODULE_1__.getSelfInfo)(this.props));
  reload = (cov_15mcq1k4uu().s[10]++, () => {
    cov_15mcq1k4uu().f[1]++;
    cov_15mcq1k4uu().s[11]++;
    this.error = undefined;
    cov_15mcq1k4uu().s[12]++;
    this.setState({
      hasError: false
    });
  });
  render() {
    cov_15mcq1k4uu().f[2]++;
    const ErrorFallbackNode = (cov_15mcq1k4uu().s[13]++, _connector__WEBPACK_IMPORTED_MODULE_2__["default"].getErrorFallbackComponent());
    const store = (cov_15mcq1k4uu().s[14]++, (0,_store__WEBPACK_IMPORTED_MODULE_3__.getUserStore)());
    cov_15mcq1k4uu().s[15]++;
    if (this.state.hasError) {
      cov_15mcq1k4uu().b[2][0]++;
      cov_15mcq1k4uu().s[16]++;
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(ErrorFallbackNode, {
        $self: this.$self,
        $reload: this.reload,
        $store: store,
        $error: this.error
      });
    } else {
      cov_15mcq1k4uu().b[2][1]++;
    }
    cov_15mcq1k4uu().s[17]++;
    return this.props.children;
  }
}
/* harmony default export */ __webpack_exports__["default"] = (ErrorBoundary);

/***/ }),

/***/ "./src/core/helper.ts":
/*!****************************!*\
  !*** ./src/core/helper.ts ***!
  \****************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   VariousError: function() { return /* binding */ VariousError; },
/* harmony export */   checkReactComponent: function() { return /* binding */ checkReactComponent; },
/* harmony export */   checkVueComponent: function() { return /* binding */ checkVueComponent; },
/* harmony export */   defineDependencies: function() { return /* binding */ defineDependencies; },
/* harmony export */   getClassNameWithModule: function() { return /* binding */ getClassNameWithModule; },
/* harmony export */   getConfig: function() { return /* binding */ getConfig; },
/* harmony export */   getMountedComponents: function() { return /* binding */ getMountedComponents; },
/* harmony export */   getNameWithModule: function() { return /* binding */ getNameWithModule; },
/* harmony export */   getSelfInfo: function() { return /* binding */ getSelfInfo; },
/* harmony export */   isModuleLoaded: function() { return /* binding */ isModuleLoaded; },
/* harmony export */   isModuleSpecified: function() { return /* binding */ isModuleSpecified; },
/* harmony export */   isPromiseLike: function() { return /* binding */ isPromiseLike; },
/* harmony export */   onComponentMounted: function() { return /* binding */ onComponentMounted; },
/* harmony export */   onError: function() { return /* binding */ onError; },
/* harmony export */   parseComponentActions: function() { return /* binding */ parseComponentActions; },
/* harmony export */   preloadModules: function() { return /* binding */ preloadModules; },
/* harmony export */   removeLoadedModules: function() { return /* binding */ removeLoadedModules; },
/* harmony export */   resetDependencyConfig: function() { return /* binding */ resetDependencyConfig; },
/* harmony export */   updateMountedComponent: function() { return /* binding */ updateMountedComponent; },
/* harmony export */   updateUnMountComponent: function() { return /* binding */ updateUnMountComponent; }
/* harmony export */ });
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./store */ "./src/core/store.ts");
/* harmony import */ var _logger__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./logger */ "./src/core/logger.ts");
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./config */ "./src/core/config.ts");
/* harmony import */ var _connector__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./connector */ "./src/core/connector.ts");
/* harmony import */ var _message__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./message */ "./src/core/message.ts");
/* harmony import */ var _i18n__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./i18n */ "./src/core/i18n.ts");
function cov_2p0um3d622() {
  var path = "/Users/am0200/Documents/github/various/src/core/helper.ts";
  var hash = "bd1e6b4883a5bae93db4f56b573b4a72ee921e1d";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "/Users/am0200/Documents/github/various/src/core/helper.ts",
    statementMap: {
      "0": {
        start: {
          line: 29,
          column: 19
        },
        end: {
          line: 29,
          column: 59
        }
      },
      "1": {
        start: {
          line: 29,
          column: 36
        },
        end: {
          line: 29,
          column: 59
        }
      },
      "2": {
        start: {
          line: 31,
          column: 18
        },
        end: {
          line: 32,
          column: 68
        }
      },
      "3": {
        start: {
          line: 31,
          column: 71
        },
        end: {
          line: 32,
          column: 68
        }
      },
      "4": {
        start: {
          line: 32,
          column: 15
        },
        end: {
          line: 32,
          column: 67
        }
      },
      "5": {
        start: {
          line: 34,
          column: 41
        },
        end: {
          line: 36,
          column: 2
        }
      },
      "6": {
        start: {
          line: 34,
          column: 52
        },
        end: {
          line: 36,
          column: 2
        }
      },
      "7": {
        start: {
          line: 35,
          column: 2
        },
        end: {
          line: 35,
          column: 42
        }
      },
      "8": {
        start: {
          line: 38,
          column: 46
        },
        end: {
          line: 44,
          column: 1
        }
      },
      "9": {
        start: {
          line: 39,
          column: 2
        },
        end: {
          line: 43,
          column: 4
        }
      },
      "10": {
        start: {
          line: 40,
          column: 4
        },
        end: {
          line: 42,
          column: 5
        }
      },
      "11": {
        start: {
          line: 41,
          column: 6
        },
        end: {
          line: 41,
          column: 34
        }
      },
      "12": {
        start: {
          line: 46,
          column: 45
        },
        end: {
          line: 59,
          column: 1
        }
      },
      "13": {
        start: {
          line: 47,
          column: 23
        },
        end: {
          line: 47,
          column: 49
        }
      },
      "14": {
        start: {
          line: 48,
          column: 15
        },
        end: {
          line: 48,
          column: 43
        }
      },
      "15": {
        start: {
          line: 50,
          column: 2
        },
        end: {
          line: 55,
          column: 4
        }
      },
      "16": {
        start: {
          line: 51,
          column: 4
        },
        end: {
          line: 54,
          column: 5
        }
      },
      "17": {
        start: {
          line: 52,
          column: 6
        },
        end: {
          line: 52,
          column: 42
        }
      },
      "18": {
        start: {
          line: 53,
          column: 6
        },
        end: {
          line: 53,
          column: 34
        }
      },
      "19": {
        start: {
          line: 57,
          column: 2
        },
        end: {
          line: 57,
          column: 42
        }
      },
      "20": {
        start: {
          line: 58,
          column: 2
        },
        end: {
          line: 58,
          column: 66
        }
      },
      "21": {
        start: {
          line: 61,
          column: 41
        },
        end: {
          line: 61,
          column: 81
        }
      },
      "22": {
        start: {
          line: 61,
          column: 51
        },
        end: {
          line: 61,
          column: 81
        }
      },
      "23": {
        start: {
          line: 63,
          column: 33
        },
        end: {
          line: 63,
          column: 83
        }
      },
      "24": {
        start: {
          line: 63,
          column: 51
        },
        end: {
          line: 63,
          column: 83
        }
      },
      "25": {
        start: {
          line: 65,
          column: 36
        },
        end: {
          line: 65,
          column: 74
        }
      },
      "26": {
        start: {
          line: 65,
          column: 42
        },
        end: {
          line: 65,
          column: 74
        }
      },
      "27": {
        start: {
          line: 67,
          column: 46
        },
        end: {
          line: 85,
          column: 1
        }
      },
      "28": {
        start: {
          line: 68,
          column: 18
        },
        end: {
          line: 68,
          column: 59
        }
      },
      "29": {
        start: {
          line: 70,
          column: 2
        },
        end: {
          line: 72,
          column: 3
        }
      },
      "30": {
        start: {
          line: 70,
          column: 27
        },
        end: {
          line: 70,
          column: 63
        }
      },
      "31": {
        start: {
          line: 71,
          column: 4
        },
        end: {
          line: 71,
          column: 14
        }
      },
      "32": {
        start: {
          line: 74,
          column: 22
        },
        end: {
          line: 82,
          column: 4
        }
      },
      "33": {
        start: {
          line: 76,
          column: 29
        },
        end: {
          line: 76,
          column: 53
        }
      },
      "34": {
        start: {
          line: 77,
          column: 6
        },
        end: {
          line: 80,
          column: 7
        }
      },
      "35": {
        start: {
          line: 77,
          column: 31
        },
        end: {
          line: 77,
          column: 59
        }
      },
      "36": {
        start: {
          line: 78,
          column: 8
        },
        end: {
          line: 78,
          column: 21
        }
      },
      "37": {
        start: {
          line: 79,
          column: 8
        },
        end: {
          line: 79,
          column: 18
        }
      },
      "38": {
        start: {
          line: 84,
          column: 2
        },
        end: {
          line: 84,
          column: 20
        }
      },
      "39": {
        start: {
          line: 87,
          column: 37
        },
        end: {
          line: 115,
          column: 1
        }
      },
      "40": {
        start: {
          line: 88,
          column: 23
        },
        end: {
          line: 88,
          column: 49
        }
      },
      "41": {
        start: {
          line: 91,
          column: 2
        },
        end: {
          line: 93,
          column: 3
        }
      },
      "42": {
        start: {
          line: 92,
          column: 4
        },
        end: {
          line: 92,
          column: 10
        }
      },
      "43": {
        start: {
          line: 95,
          column: 13
        },
        end: {
          line: 95,
          column: 43
        }
      },
      "44": {
        start: {
          line: 98,
          column: 2
        },
        end: {
          line: 109,
          column: 3
        }
      },
      "45": {
        start: {
          line: 99,
          column: 4
        },
        end: {
          line: 99,
          column: 27
        }
      },
      "46": {
        start: {
          line: 101,
          column: 4
        },
        end: {
          line: 108,
          column: 5
        }
      },
      "47": {
        start: {
          line: 102,
          column: 27
        },
        end: {
          line: 102,
          column: 56
        }
      },
      "48": {
        start: {
          line: 103,
          column: 6
        },
        end: {
          line: 105,
          column: 7
        }
      },
      "49": {
        start: {
          line: 104,
          column: 8
        },
        end: {
          line: 104,
          column: 30
        }
      },
      "50": {
        start: {
          line: 111,
          column: 2
        },
        end: {
          line: 111,
          column: 30
        }
      },
      "51": {
        start: {
          line: 112,
          column: 2
        },
        end: {
          line: 114,
          column: 4
        }
      },
      "52": {
        start: {
          line: 116,
          column: 33
        },
        end: {
          line: 119,
          column: 1
        }
      },
      "53": {
        start: {
          line: 117,
          column: 27
        },
        end: {
          line: 117,
          column: 40
        }
      },
      "54": {
        start: {
          line: 118,
          column: 2
        },
        end: {
          line: 118,
          column: 44
        }
      },
      "55": {
        start: {
          line: 122,
          column: 2
        },
        end: {
          line: 122,
          column: 34
        }
      },
      "56": {
        start: {
          line: 125,
          column: 23
        },
        end: {
          line: 129,
          column: 1
        }
      },
      "57": {
        start: {
          line: 126,
          column: 33
        },
        end: {
          line: 126,
          column: 34
        }
      },
      "58": {
        start: {
          line: 127,
          column: 17
        },
        end: {
          line: 127,
          column: 47
        }
      },
      "59": {
        start: {
          line: 128,
          column: 2
        },
        end: {
          line: 128,
          column: 23
        }
      },
      "60": {
        start: {
          line: 146,
          column: 4
        },
        end: {
          line: 146,
          column: 37
        }
      },
      "61": {
        start: {
          line: 147,
          column: 4
        },
        end: {
          line: 147,
          column: 25
        }
      },
      "62": {
        start: {
          line: 148,
          column: 4
        },
        end: {
          line: 148,
          column: 43
        }
      },
      "63": {
        start: {
          line: 149,
          column: 4
        },
        end: {
          line: 149,
          column: 29
        }
      },
      "64": {
        start: {
          line: 150,
          column: 4
        },
        end: {
          line: 150,
          column: 25
        }
      },
      "65": {
        start: {
          line: 155,
          column: 2
        },
        end: {
          line: 166,
          column: 4
        }
      },
      "66": {
        start: {
          line: 156,
          column: 4
        },
        end: {
          line: 159,
          column: 5
        }
      },
      "67": {
        start: {
          line: 157,
          column: 6
        },
        end: {
          line: 157,
          column: 15
        }
      },
      "68": {
        start: {
          line: 158,
          column: 6
        },
        end: {
          line: 158,
          column: 12
        }
      },
      "69": {
        start: {
          line: 161,
          column: 4
        },
        end: {
          line: 165,
          column: 7
        }
      },
      "70": {
        start: {
          line: 170,
          column: 2
        },
        end: {
          line: 170,
          column: 67
        }
      },
      "71": {
        start: {
          line: 174,
          column: 23
        },
        end: {
          line: 174,
          column: 55
        }
      },
      "72": {
        start: {
          line: 176,
          column: 2
        },
        end: {
          line: 193,
          column: 4
        }
      },
      "73": {
        start: {
          line: 177,
          column: 4
        },
        end: {
          line: 192,
          column: 6
        }
      },
      "74": {
        start: {
          line: 178,
          column: 6
        },
        end: {
          line: 180,
          column: 7
        }
      },
      "75": {
        start: {
          line: 179,
          column: 8
        },
        end: {
          line: 179,
          column: 91
        }
      },
      "76": {
        start: {
          line: 182,
          column: 6
        },
        end: {
          line: 185,
          column: 7
        }
      },
      "77": {
        start: {
          line: 183,
          column: 8
        },
        end: {
          line: 183,
          column: 17
        }
      },
      "78": {
        start: {
          line: 184,
          column: 8
        },
        end: {
          line: 184,
          column: 14
        }
      },
      "79": {
        start: {
          line: 187,
          column: 6
        },
        end: {
          line: 191,
          column: 9
        }
      },
      "80": {
        start: {
          line: 207,
          column: 6
        },
        end: {
          line: 207,
          column: 12
        }
      },
      "81": {
        start: {
          line: 209,
          column: 33
        },
        end: {
          line: 209,
          column: 35
        }
      },
      "82": {
        start: {
          line: 213,
          column: 2
        },
        end: {
          line: 232,
          column: 6
        }
      },
      "83": {
        start: {
          line: 216,
          column: 6
        },
        end: {
          line: 218,
          column: 7
        }
      },
      "84": {
        start: {
          line: 217,
          column: 8
        },
        end: {
          line: 217,
          column: 14
        }
      },
      "85": {
        start: {
          line: 219,
          column: 6
        },
        end: {
          line: 222,
          column: 7
        }
      },
      "86": {
        start: {
          line: 220,
          column: 8
        },
        end: {
          line: 220,
          column: 47
        }
      },
      "87": {
        start: {
          line: 221,
          column: 8
        },
        end: {
          line: 221,
          column: 14
        }
      },
      "88": {
        start: {
          line: 223,
          column: 6
        },
        end: {
          line: 226,
          column: 7
        }
      },
      "89": {
        start: {
          line: 224,
          column: 8
        },
        end: {
          line: 224,
          column: 42
        }
      },
      "90": {
        start: {
          line: 225,
          column: 8
        },
        end: {
          line: 225,
          column: 14
        }
      },
      "91": {
        start: {
          line: 227,
          column: 6
        },
        end: {
          line: 229,
          column: 7
        }
      },
      "92": {
        start: {
          line: 228,
          column: 8
        },
        end: {
          line: 228,
          column: 14
        }
      },
      "93": {
        start: {
          line: 231,
          column: 6
        },
        end: {
          line: 231,
          column: 45
        }
      },
      "94": {
        start: {
          line: 234,
          column: 2
        },
        end: {
          line: 236,
          column: 3
        }
      },
      "95": {
        start: {
          line: 235,
          column: 4
        },
        end: {
          line: 235,
          column: 62
        }
      },
      "96": {
        start: {
          line: 238,
          column: 2
        },
        end: {
          line: 238,
          column: 58
        }
      },
      "97": {
        start: {
          line: 240,
          column: 2
        },
        end: {
          line: 242,
          column: 3
        }
      },
      "98": {
        start: {
          line: 241,
          column: 4
        },
        end: {
          line: 241,
          column: 61
        }
      },
      "99": {
        start: {
          line: 244,
          column: 2
        },
        end: {
          line: 244,
          column: 19
        }
      },
      "100": {
        start: {
          line: 244,
          column: 15
        },
        end: {
          line: 244,
          column: 19
        }
      },
      "101": {
        start: {
          line: 248,
          column: 28
        },
        end: {
          line: 248,
          column: 50
        }
      },
      "102": {
        start: {
          line: 250,
          column: 2
        },
        end: {
          line: 252,
          column: 3
        }
      },
      "103": {
        start: {
          line: 251,
          column: 4
        },
        end: {
          line: 251,
          column: 41
        }
      },
      "104": {
        start: {
          line: 254,
          column: 2
        },
        end: {
          line: 254,
          column: 61
        }
      },
      "105": {
        start: {
          line: 258,
          column: 27
        },
        end: {
          line: 258,
          column: 40
        }
      },
      "106": {
        start: {
          line: 259,
          column: 26
        },
        end: {
          line: 259,
          column: 48
        }
      },
      "107": {
        start: {
          line: 261,
          column: 2
        },
        end: {
          line: 262,
          column: 67
        }
      },
      "108": {
        start: {
          line: 262,
          column: 22
        },
        end: {
          line: 262,
          column: 66
        }
      },
      "109": {
        start: {
          line: 264,
          column: 2
        },
        end: {
          line: 264,
          column: 61
        }
      },
      "110": {
        start: {
          line: 265,
          column: 2
        },
        end: {
          line: 265,
          column: 52
        }
      },
      "111": {
        start: {
          line: 269,
          column: 32
        },
        end: {
          line: 269,
          column: 38
        }
      },
      "112": {
        start: {
          line: 270,
          column: 23
        },
        end: {
          line: 270,
          column: 49
        }
      },
      "113": {
        start: {
          line: 272,
          column: 2
        },
        end: {
          line: 276,
          column: 3
        }
      },
      "114": {
        start: {
          line: 280,
          column: 27
        },
        end: {
          line: 280,
          column: 31
        }
      },
      "115": {
        start: {
          line: 281,
          column: 2
        },
        end: {
          line: 281,
          column: 64
        }
      }
    },
    fnMap: {
      "0": {
        name: "(anonymous_0)",
        decl: {
          start: {
            line: 29,
            column: 19
          },
          end: {
            line: 29,
            column: 20
          }
        },
        loc: {
          start: {
            line: 29,
            column: 36
          },
          end: {
            line: 29,
            column: 59
          }
        },
        line: 29
      },
      "1": {
        name: "(anonymous_1)",
        decl: {
          start: {
            line: 31,
            column: 18
          },
          end: {
            line: 31,
            column: 19
          }
        },
        loc: {
          start: {
            line: 31,
            column: 71
          },
          end: {
            line: 32,
            column: 68
          }
        },
        line: 31
      },
      "2": {
        name: "(anonymous_2)",
        decl: {
          start: {
            line: 32,
            column: 8
          },
          end: {
            line: 32,
            column: 9
          }
        },
        loc: {
          start: {
            line: 32,
            column: 15
          },
          end: {
            line: 32,
            column: 67
          }
        },
        line: 32
      },
      "3": {
        name: "(anonymous_3)",
        decl: {
          start: {
            line: 34,
            column: 41
          },
          end: {
            line: 34,
            column: 42
          }
        },
        loc: {
          start: {
            line: 34,
            column: 52
          },
          end: {
            line: 36,
            column: 2
          }
        },
        line: 34
      },
      "4": {
        name: "(anonymous_4)",
        decl: {
          start: {
            line: 34,
            column: 70
          },
          end: {
            line: 34,
            column: 71
          }
        },
        loc: {
          start: {
            line: 34,
            column: 91
          },
          end: {
            line: 36,
            column: 1
          }
        },
        line: 34
      },
      "5": {
        name: "(anonymous_5)",
        decl: {
          start: {
            line: 38,
            column: 46
          },
          end: {
            line: 38,
            column: 47
          }
        },
        loc: {
          start: {
            line: 38,
            column: 57
          },
          end: {
            line: 44,
            column: 1
          }
        },
        line: 38
      },
      "6": {
        name: "(anonymous_6)",
        decl: {
          start: {
            line: 39,
            column: 16
          },
          end: {
            line: 39,
            column: 17
          }
        },
        loc: {
          start: {
            line: 39,
            column: 26
          },
          end: {
            line: 43,
            column: 3
          }
        },
        line: 39
      },
      "7": {
        name: "(anonymous_7)",
        decl: {
          start: {
            line: 46,
            column: 45
          },
          end: {
            line: 46,
            column: 46
          }
        },
        loc: {
          start: {
            line: 46,
            column: 55
          },
          end: {
            line: 59,
            column: 1
          }
        },
        line: 46
      },
      "8": {
        name: "(anonymous_8)",
        decl: {
          start: {
            line: 50,
            column: 28
          },
          end: {
            line: 50,
            column: 29
          }
        },
        loc: {
          start: {
            line: 50,
            column: 38
          },
          end: {
            line: 55,
            column: 3
          }
        },
        line: 50
      },
      "9": {
        name: "(anonymous_9)",
        decl: {
          start: {
            line: 61,
            column: 41
          },
          end: {
            line: 61,
            column: 42
          }
        },
        loc: {
          start: {
            line: 61,
            column: 51
          },
          end: {
            line: 61,
            column: 81
          }
        },
        line: 61
      },
      "10": {
        name: "(anonymous_10)",
        decl: {
          start: {
            line: 63,
            column: 33
          },
          end: {
            line: 63,
            column: 34
          }
        },
        loc: {
          start: {
            line: 63,
            column: 51
          },
          end: {
            line: 63,
            column: 83
          }
        },
        line: 63
      },
      "11": {
        name: "(anonymous_11)",
        decl: {
          start: {
            line: 65,
            column: 36
          },
          end: {
            line: 65,
            column: 37
          }
        },
        loc: {
          start: {
            line: 65,
            column: 42
          },
          end: {
            line: 65,
            column: 74
          }
        },
        line: 65
      },
      "12": {
        name: "(anonymous_12)",
        decl: {
          start: {
            line: 67,
            column: 46
          },
          end: {
            line: 67,
            column: 47
          }
        },
        loc: {
          start: {
            line: 67,
            column: 68
          },
          end: {
            line: 85,
            column: 1
          }
        },
        line: 67
      },
      "13": {
        name: "(anonymous_13)",
        decl: {
          start: {
            line: 70,
            column: 20
          },
          end: {
            line: 70,
            column: 21
          }
        },
        loc: {
          start: {
            line: 70,
            column: 27
          },
          end: {
            line: 70,
            column: 63
          }
        },
        line: 70
      },
      "14": {
        name: "(anonymous_14)",
        decl: {
          start: {
            line: 75,
            column: 4
          },
          end: {
            line: 75,
            column: 5
          }
        },
        loc: {
          start: {
            line: 75,
            column: 36
          },
          end: {
            line: 81,
            column: 5
          }
        },
        line: 75
      },
      "15": {
        name: "(anonymous_15)",
        decl: {
          start: {
            line: 77,
            column: 24
          },
          end: {
            line: 77,
            column: 25
          }
        },
        loc: {
          start: {
            line: 77,
            column: 31
          },
          end: {
            line: 77,
            column: 59
          }
        },
        line: 77
      },
      "16": {
        name: "(anonymous_16)",
        decl: {
          start: {
            line: 87,
            column: 37
          },
          end: {
            line: 87,
            column: 38
          }
        },
        loc: {
          start: {
            line: 87,
            column: 69
          },
          end: {
            line: 115,
            column: 1
          }
        },
        line: 87
      },
      "17": {
        name: "(anonymous_17)",
        decl: {
          start: {
            line: 116,
            column: 33
          },
          end: {
            line: 116,
            column: 34
          }
        },
        loc: {
          start: {
            line: 116,
            column: 67
          },
          end: {
            line: 119,
            column: 1
          }
        },
        line: 116
      },
      "18": {
        name: "getConfig",
        decl: {
          start: {
            line: 121,
            column: 16
          },
          end: {
            line: 121,
            column: 25
          }
        },
        loc: {
          start: {
            line: 121,
            column: 51
          },
          end: {
            line: 123,
            column: 1
          }
        },
        line: 121
      },
      "19": {
        name: "(anonymous_19)",
        decl: {
          start: {
            line: 125,
            column: 23
          },
          end: {
            line: 125,
            column: 24
          }
        },
        loc: {
          start: {
            line: 125,
            column: 44
          },
          end: {
            line: 129,
            column: 1
          }
        },
        line: 125
      },
      "20": {
        name: "(anonymous_20)",
        decl: {
          start: {
            line: 140,
            column: 2
          },
          end: {
            line: 140,
            column: 3
          }
        },
        loc: {
          start: {
            line: 145,
            column: 5
          },
          end: {
            line: 151,
            column: 3
          }
        },
        line: 145
      },
      "21": {
        name: "checkReactComponent",
        decl: {
          start: {
            line: 154,
            column: 16
          },
          end: {
            line: 154,
            column: 35
          }
        },
        loc: {
          start: {
            line: 154,
            column: 96
          },
          end: {
            line: 167,
            column: 1
          }
        },
        line: 154
      },
      "22": {
        name: "(anonymous_22)",
        decl: {
          start: {
            line: 155,
            column: 27
          },
          end: {
            line: 155,
            column: 28
          }
        },
        loc: {
          start: {
            line: 155,
            column: 48
          },
          end: {
            line: 166,
            column: 3
          }
        },
        line: 155
      },
      "23": {
        name: "isPromiseLike",
        decl: {
          start: {
            line: 169,
            column: 16
          },
          end: {
            line: 169,
            column: 29
          }
        },
        loc: {
          start: {
            line: 169,
            column: 85
          },
          end: {
            line: 171,
            column: 1
          }
        },
        line: 169
      },
      "24": {
        name: "checkVueComponent",
        decl: {
          start: {
            line: 173,
            column: 16
          },
          end: {
            line: 173,
            column: 33
          }
        },
        loc: {
          start: {
            line: 173,
            column: 94
          },
          end: {
            line: 194,
            column: 1
          }
        },
        line: 173
      },
      "25": {
        name: "(anonymous_25)",
        decl: {
          start: {
            line: 176,
            column: 27
          },
          end: {
            line: 176,
            column: 28
          }
        },
        loc: {
          start: {
            line: 176,
            column: 48
          },
          end: {
            line: 193,
            column: 3
          }
        },
        line: 176
      },
      "26": {
        name: "(anonymous_26)",
        decl: {
          start: {
            line: 177,
            column: 30
          },
          end: {
            line: 177,
            column: 31
          }
        },
        loc: {
          start: {
            line: 177,
            column: 60
          },
          end: {
            line: 192,
            column: 5
          }
        },
        line: 177
      },
      "27": {
        name: "parseComponentActions",
        decl: {
          start: {
            line: 196,
            column: 16
          },
          end: {
            line: 196,
            column: 37
          }
        },
        loc: {
          start: {
            line: 200,
            column: 3
          },
          end: {
            line: 245,
            column: 1
          }
        },
        line: 200
      },
      "28": {
        name: "(anonymous_28)",
        decl: {
          start: {
            line: 215,
            column: 13
          },
          end: {
            line: 215,
            column: 14
          }
        },
        loc: {
          start: {
            line: 215,
            column: 25
          },
          end: {
            line: 232,
            column: 5
          }
        },
        line: 215
      },
      "29": {
        name: "(anonymous_29)",
        decl: {
          start: {
            line: 244,
            column: 9
          },
          end: {
            line: 244,
            column: 10
          }
        },
        loc: {
          start: {
            line: 244,
            column: 15
          },
          end: {
            line: 244,
            column: 19
          }
        },
        line: 244
      },
      "30": {
        name: "updateMountedComponent",
        decl: {
          start: {
            line: 247,
            column: 16
          },
          end: {
            line: 247,
            column: 38
          }
        },
        loc: {
          start: {
            line: 247,
            column: 69
          },
          end: {
            line: 255,
            column: 1
          }
        },
        line: 247
      },
      "31": {
        name: "updateUnMountComponent",
        decl: {
          start: {
            line: 257,
            column: 16
          },
          end: {
            line: 257,
            column: 38
          }
        },
        loc: {
          start: {
            line: 257,
            column: 69
          },
          end: {
            line: 266,
            column: 1
          }
        },
        line: 257
      },
      "32": {
        name: "(anonymous_32)",
        decl: {
          start: {
            line: 262,
            column: 12
          },
          end: {
            line: 262,
            column: 13
          }
        },
        loc: {
          start: {
            line: 262,
            column: 22
          },
          end: {
            line: 262,
            column: 66
          }
        },
        line: 262
      },
      "33": {
        name: "getSelfInfo",
        decl: {
          start: {
            line: 268,
            column: 16
          },
          end: {
            line: 268,
            column: 27
          }
        },
        loc: {
          start: {
            line: 268,
            column: 70
          },
          end: {
            line: 277,
            column: 1
          }
        },
        line: 268
      },
      "34": {
        name: "getClassNameWithModule",
        decl: {
          start: {
            line: 279,
            column: 16
          },
          end: {
            line: 279,
            column: 38
          }
        },
        loc: {
          start: {
            line: 279,
            column: 76
          },
          end: {
            line: 282,
            column: 1
          }
        },
        line: 279
      }
    },
    branchMap: {
      "0": {
        loc: {
          start: {
            line: 32,
            column: 15
          },
          end: {
            line: 32,
            column: 67
          }
        },
        type: "binary-expr",
        locations: [{
          start: {
            line: 32,
            column: 15
          },
          end: {
            line: 32,
            column: 37
          }
        }, {
          start: {
            line: 32,
            column: 41
          },
          end: {
            line: 32,
            column: 67
          }
        }],
        line: 32
      },
      "1": {
        loc: {
          start: {
            line: 40,
            column: 4
          },
          end: {
            line: 42,
            column: 5
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 40,
            column: 4
          },
          end: {
            line: 42,
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
        line: 40
      },
      "2": {
        loc: {
          start: {
            line: 51,
            column: 4
          },
          end: {
            line: 54,
            column: 5
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 51,
            column: 4
          },
          end: {
            line: 54,
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
        line: 51
      },
      "3": {
        loc: {
          start: {
            line: 68,
            column: 18
          },
          end: {
            line: 68,
            column: 59
          }
        },
        type: "cond-expr",
        locations: [{
          start: {
            line: 68,
            column: 42
          },
          end: {
            line: 68,
            column: 48
          }
        }, {
          start: {
            line: 68,
            column: 51
          },
          end: {
            line: 68,
            column: 59
          }
        }],
        line: 68
      },
      "4": {
        loc: {
          start: {
            line: 70,
            column: 2
          },
          end: {
            line: 72,
            column: 3
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 70,
            column: 2
          },
          end: {
            line: 72,
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
        line: 70
      },
      "5": {
        loc: {
          start: {
            line: 77,
            column: 6
          },
          end: {
            line: 80,
            column: 7
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 77,
            column: 6
          },
          end: {
            line: 80,
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
        line: 77
      },
      "6": {
        loc: {
          start: {
            line: 91,
            column: 2
          },
          end: {
            line: 93,
            column: 3
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 91,
            column: 2
          },
          end: {
            line: 93,
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
        line: 91
      },
      "7": {
        loc: {
          start: {
            line: 91,
            column: 6
          },
          end: {
            line: 91,
            column: 43
          }
        },
        type: "binary-expr",
        locations: [{
          start: {
            line: 91,
            column: 6
          },
          end: {
            line: 91,
            column: 9
          }
        }, {
          start: {
            line: 91,
            column: 13
          },
          end: {
            line: 91,
            column: 43
          }
        }],
        line: 91
      },
      "8": {
        loc: {
          start: {
            line: 98,
            column: 2
          },
          end: {
            line: 109,
            column: 3
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 98,
            column: 2
          },
          end: {
            line: 109,
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
        line: 98
      },
      "9": {
        loc: {
          start: {
            line: 103,
            column: 6
          },
          end: {
            line: 105,
            column: 7
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 103,
            column: 6
          },
          end: {
            line: 105,
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
        line: 103
      },
      "10": {
        loc: {
          start: {
            line: 118,
            column: 9
          },
          end: {
            line: 118,
            column: 44
          }
        },
        type: "cond-expr",
        locations: [{
          start: {
            line: 118,
            column: 18
          },
          end: {
            line: 118,
            column: 37
          }
        }, {
          start: {
            line: 118,
            column: 40
          },
          end: {
            line: 118,
            column: 44
          }
        }],
        line: 118
      },
      "11": {
        loc: {
          start: {
            line: 156,
            column: 4
          },
          end: {
            line: 159,
            column: 5
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 156,
            column: 4
          },
          end: {
            line: 159,
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
        line: 156
      },
      "12": {
        loc: {
          start: {
            line: 156,
            column: 8
          },
          end: {
            line: 156,
            column: 102
          }
        },
        type: "binary-expr",
        locations: [{
          start: {
            line: 156,
            column: 8
          },
          end: {
            line: 156,
            column: 26
          }
        }, {
          start: {
            line: 156,
            column: 30
          },
          end: {
            line: 156,
            column: 67
          }
        }, {
          start: {
            line: 156,
            column: 71
          },
          end: {
            line: 156,
            column: 102
          }
        }],
        line: 156
      },
      "13": {
        loc: {
          start: {
            line: 170,
            column: 9
          },
          end: {
            line: 170,
            column: 67
          }
        },
        type: "binary-expr",
        locations: [{
          start: {
            line: 170,
            column: 9
          },
          end: {
            line: 170,
            column: 22
          }
        }, {
          start: {
            line: 170,
            column: 26
          },
          end: {
            line: 170,
            column: 67
          }
        }],
        line: 170
      },
      "14": {
        loc: {
          start: {
            line: 178,
            column: 6
          },
          end: {
            line: 180,
            column: 7
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 178,
            column: 6
          },
          end: {
            line: 180,
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
        line: 178
      },
      "15": {
        loc: {
          start: {
            line: 182,
            column: 6
          },
          end: {
            line: 185,
            column: 7
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 182,
            column: 6
          },
          end: {
            line: 185,
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
        line: 182
      },
      "16": {
        loc: {
          start: {
            line: 182,
            column: 10
          },
          end: {
            line: 182,
            column: 91
          }
        },
        type: "binary-expr",
        locations: [{
          start: {
            line: 182,
            column: 10
          },
          end: {
            line: 182,
            column: 49
          }
        }, {
          start: {
            line: 182,
            column: 53
          },
          end: {
            line: 182,
            column: 91
          }
        }],
        line: 182
      },
      "17": {
        loc: {
          start: {
            line: 216,
            column: 6
          },
          end: {
            line: 218,
            column: 7
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 216,
            column: 6
          },
          end: {
            line: 218,
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
        line: 216
      },
      "18": {
        loc: {
          start: {
            line: 219,
            column: 6
          },
          end: {
            line: 222,
            column: 7
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 219,
            column: 6
          },
          end: {
            line: 222,
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
        line: 219
      },
      "19": {
        loc: {
          start: {
            line: 223,
            column: 6
          },
          end: {
            line: 226,
            column: 7
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 223,
            column: 6
          },
          end: {
            line: 226,
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
        line: 223
      },
      "20": {
        loc: {
          start: {
            line: 227,
            column: 6
          },
          end: {
            line: 229,
            column: 7
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 227,
            column: 6
          },
          end: {
            line: 229,
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
        line: 227
      },
      "21": {
        loc: {
          start: {
            line: 227,
            column: 10
          },
          end: {
            line: 227,
            column: 66
          }
        },
        type: "binary-expr",
        locations: [{
          start: {
            line: 227,
            column: 10
          },
          end: {
            line: 227,
            column: 25
          }
        }, {
          start: {
            line: 227,
            column: 29
          },
          end: {
            line: 227,
            column: 66
          }
        }],
        line: 227
      },
      "22": {
        loc: {
          start: {
            line: 234,
            column: 2
          },
          end: {
            line: 236,
            column: 3
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 234,
            column: 2
          },
          end: {
            line: 236,
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
        line: 234
      },
      "23": {
        loc: {
          start: {
            line: 240,
            column: 2
          },
          end: {
            line: 242,
            column: 3
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 240,
            column: 2
          },
          end: {
            line: 242,
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
        line: 240
      },
      "24": {
        loc: {
          start: {
            line: 250,
            column: 2
          },
          end: {
            line: 252,
            column: 3
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 250,
            column: 2
          },
          end: {
            line: 252,
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
        line: 250
      },
      "25": {
        loc: {
          start: {
            line: 262,
            column: 22
          },
          end: {
            line: 262,
            column: 66
          }
        },
        type: "binary-expr",
        locations: [{
          start: {
            line: 262,
            column: 22
          },
          end: {
            line: 262,
            column: 40
          }
        }, {
          start: {
            line: 262,
            column: 44
          },
          end: {
            line: 262,
            column: 66
          }
        }],
        line: 262
      },
      "26": {
        loc: {
          start: {
            line: 275,
            column: 9
          },
          end: {
            line: 275,
            column: 34
          }
        },
        type: "binary-expr",
        locations: [{
          start: {
            line: 275,
            column: 9
          },
          end: {
            line: 275,
            column: 12
          }
        }, {
          start: {
            line: 275,
            column: 16
          },
          end: {
            line: 275,
            column: 34
          }
        }],
        line: 275
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
      "108": 0,
      "109": 0,
      "110": 0,
      "111": 0,
      "112": 0,
      "113": 0,
      "114": 0,
      "115": 0
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
      "34": 0
    },
    b: {
      "0": [0, 0],
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
      "12": [0, 0, 0],
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
      "26": [0, 0]
    },
    _coverageSchema: "1a1c01bbd47fc00a2c39e90264f33305004495a9",
    hash: "bd1e6b4883a5bae93db4f56b573b4a72ee921e1d"
  };
  var coverage = global[gcv] || (global[gcv] = {});
  if (!coverage[path] || coverage[path].hash !== hash) {
    coverage[path] = coverageData;
  }
  var actualCoverage = coverage[path];
  {
    // @ts-ignore
    cov_2p0um3d622 = function () {
      return actualCoverage;
    };
  }
  return actualCoverage;
}
cov_2p0um3d622();






cov_2p0um3d622().s[0]++;
const getUrlHash = url => {
  cov_2p0um3d622().f[0]++;
  cov_2p0um3d622().s[1]++;
  return `${url}?${+new Date()}`;
};
cov_2p0um3d622().s[2]++;
const hasModule = (modules, module) => {
  cov_2p0um3d622().f[1]++;
  cov_2p0um3d622().s[3]++;
  return modules.some(c => {
    cov_2p0um3d622().f[2]++;
    cov_2p0um3d622().s[4]++;
    return (cov_2p0um3d622().b[0][0]++, c.name === module.name) && (cov_2p0um3d622().b[0][1]++, c.module === module.module);
  });
};
cov_2p0um3d622().s[5]++;
const preloadModules = names => {
  cov_2p0um3d622().f[3]++;
  cov_2p0um3d622().s[6]++;
  return new Promise((resolve, reject) => {
    cov_2p0um3d622().f[4]++;
    cov_2p0um3d622().s[7]++;
    window.requirejs(names, resolve, reject);
  });
};
cov_2p0um3d622().s[8]++;
const removeLoadedModules = names => {
  cov_2p0um3d622().f[5]++;
  cov_2p0um3d622().s[9]++;
  names.forEach(name => {
    cov_2p0um3d622().f[6]++;
    cov_2p0um3d622().s[10]++;
    if (!_config__WEBPACK_IMPORTED_MODULE_2__.BASE_DEPENDENCIES.includes(name)) {
      cov_2p0um3d622().b[1][0]++;
      cov_2p0um3d622().s[11]++;
      window.requirejs.undef(name);
    } else {
      cov_2p0um3d622().b[1][1]++;
    }
  });
};
cov_2p0um3d622().s[12]++;
const defineDependencies = deps => {
  cov_2p0um3d622().f[7]++;
  const dependencies = (cov_2p0um3d622().s[13]++, (0,_store__WEBPACK_IMPORTED_MODULE_0__.getStore)(_config__WEBPACK_IMPORTED_MODULE_2__.DEPENDENCIES_KEY));
  const next = (cov_2p0um3d622().s[14]++, {});
  cov_2p0um3d622().s[15]++;
  Object.keys(deps).forEach(name => {
    cov_2p0um3d622().f[8]++;
    cov_2p0um3d622().s[16]++;
    if (!_config__WEBPACK_IMPORTED_MODULE_2__.BASE_DEPENDENCIES.includes(name)) {
      cov_2p0um3d622().b[2][0]++;
      cov_2p0um3d622().s[17]++;
      next[name] = `${deps[name]}#${name}`;
      cov_2p0um3d622().s[18]++;
      window.requirejs.undef(name);
    } else {
      cov_2p0um3d622().b[2][1]++;
    }
  });
  cov_2p0um3d622().s[19]++;
  window.requirejs.config({
    paths: next
  });
  cov_2p0um3d622().s[20]++;
  (0,_store__WEBPACK_IMPORTED_MODULE_0__.emit)({
    [_config__WEBPACK_IMPORTED_MODULE_2__.DEPENDENCIES_KEY]: {
      ...dependencies,
      ...next
    }
  }, true);
};
cov_2p0um3d622().s[21]++;
const isModuleLoaded = name => {
  cov_2p0um3d622().f[9]++;
  cov_2p0um3d622().s[22]++;
  return window.requirejs.defined(name);
};
cov_2p0um3d622().s[23]++;
const isModuleSpecified = name => {
  cov_2p0um3d622().f[10]++;
  cov_2p0um3d622().s[24]++;
  return window.requirejs.specified(name);
};
cov_2p0um3d622().s[25]++;
const getMountedComponents = () => {
  cov_2p0um3d622().f[11]++;
  cov_2p0um3d622().s[26]++;
  return (0,_store__WEBPACK_IMPORTED_MODULE_0__.getStore)(_config__WEBPACK_IMPORTED_MODULE_2__.MOUNTED_COMPONENTS_KEY);
};
cov_2p0um3d622().s[27]++;
const onComponentMounted = (module, callback) => {
  cov_2p0um3d622().f[12]++;
  const modules = (cov_2p0um3d622().s[28]++, Array.isArray(module) ? (cov_2p0um3d622().b[3][0]++, module) : (cov_2p0um3d622().b[3][1]++, [module]));
  cov_2p0um3d622().s[29]++;
  if (modules.every(m => {
    cov_2p0um3d622().f[13]++;
    cov_2p0um3d622().s[30]++;
    return hasModule(getMountedComponents(), m);
  })) {
    cov_2p0um3d622().b[4][0]++;
    cov_2p0um3d622().s[31]++;
    callback();
  } else {
    cov_2p0um3d622().b[4][1]++;
  }
  const unSubscribe = (cov_2p0um3d622().s[32]++, (0,_store__WEBPACK_IMPORTED_MODULE_0__.subscribe)({
    [_config__WEBPACK_IMPORTED_MODULE_2__.MOUNTED_COMPONENTS_KEY](value) {
      cov_2p0um3d622().f[14]++;
      const mountedModules = (cov_2p0um3d622().s[33]++, value);
      cov_2p0um3d622().s[34]++;
      if (modules.every(n => {
        cov_2p0um3d622().f[15]++;
        cov_2p0um3d622().s[35]++;
        return hasModule(mountedModules, n);
      })) {
        cov_2p0um3d622().b[5][0]++;
        cov_2p0um3d622().s[36]++;
        unSubscribe();
        cov_2p0um3d622().s[37]++;
        callback();
      } else {
        cov_2p0um3d622().b[5][1]++;
      }
    }
  }));
  cov_2p0um3d622().s[38]++;
  return unSubscribe;
};
cov_2p0um3d622().s[39]++;
const resetDependencyConfig = (name, url) => {
  cov_2p0um3d622().f[16]++;
  const dependencies = (cov_2p0um3d622().s[40]++, (0,_store__WEBPACK_IMPORTED_MODULE_0__.getStore)(_config__WEBPACK_IMPORTED_MODULE_2__.DEPENDENCIES_KEY));

  // ignore multiple custom module url
  cov_2p0um3d622().s[41]++;
  if ((cov_2p0um3d622().b[7][0]++, url) && (cov_2p0um3d622().b[7][1]++, window.requirejs.defined(name))) {
    cov_2p0um3d622().b[6][0]++;
    cov_2p0um3d622().s[42]++;
    return;
  } else {
    cov_2p0um3d622().b[6][1]++;
  }
  let path = (cov_2p0um3d622().s[43]++, getUrlHash(dependencies[name]));

  // custom module url, but module loaded error
  cov_2p0um3d622().s[44]++;
  if (url) {
    cov_2p0um3d622().b[8][0]++;
    cov_2p0um3d622().s[45]++;
    path = `${url}#${name}`;
    cov_2p0um3d622().s[46]++;
    try {
      const {
        registry
      } = (cov_2p0um3d622().s[47]++, window.requirejs.s.contexts._);
      cov_2p0um3d622().s[48]++;
      if (registry?.[name].error) {
        cov_2p0um3d622().b[9][0]++;
        cov_2p0um3d622().s[49]++;
        path = getUrlHash(url);
      } else {
        cov_2p0um3d622().b[9][1]++;
      }
    } catch (e) {
      // ignore
    }
  } else {
    cov_2p0um3d622().b[8][1]++;
  }
  cov_2p0um3d622().s[50]++;
  window.requirejs.undef(name);
  cov_2p0um3d622().s[51]++;
  window.requirejs.config({
    paths: {
      [name]: path
    }
  });
};
cov_2p0um3d622().s[52]++;
const getNameWithModule = moduleDefined => {
  cov_2p0um3d622().f[17]++;
  const {
    name,
    module
  } = (cov_2p0um3d622().s[53]++, moduleDefined);
  cov_2p0um3d622().s[54]++;
  return module ? (cov_2p0um3d622().b[10][0]++, `${name}.${module}`) : (cov_2p0um3d622().b[10][1]++, name);
};
function getConfig() {
  cov_2p0um3d622().f[18]++;
  cov_2p0um3d622().s[55]++;
  return (0,_store__WEBPACK_IMPORTED_MODULE_0__.getStore)(_config__WEBPACK_IMPORTED_MODULE_2__.CONFIG_KEY);
}
cov_2p0um3d622().s[56]++;
const onError = e => {
  cov_2p0um3d622().f[19]++;
  const {
    name,
    module,
    type
  } = (cov_2p0um3d622().s[57]++, e);
  const logger = (cov_2p0um3d622().s[58]++, (0,_logger__WEBPACK_IMPORTED_MODULE_1__["default"])({
    name,
    module
  }));
  cov_2p0um3d622().s[59]++;
  logger.error(e, type);
};
class VariousError extends Error {
  constructor(data) {
    cov_2p0um3d622().f[20]++;
    cov_2p0um3d622().s[60]++;
    super(data.originalError.message);
    cov_2p0um3d622().s[61]++;
    this.type = data.type;
    cov_2p0um3d622().s[62]++;
    this.originalError = data.originalError;
    cov_2p0um3d622().s[63]++;
    this.module = data.module;
    cov_2p0um3d622().s[64]++;
    this.name = data.name;
  }
}
function checkReactComponent(component, moduleDefined) {
  cov_2p0um3d622().f[21]++;
  cov_2p0um3d622().s[65]++;
  return new Promise((reslove, reject) => {
    cov_2p0um3d622().f[22]++;
    cov_2p0um3d622().s[66]++;
    if ((cov_2p0um3d622().b[12][0]++, component.$$typeof) || (cov_2p0um3d622().b[12][1]++, component.prototype?.isReactComponent) || (cov_2p0um3d622().b[12][2]++, typeof component === 'function')) {
      cov_2p0um3d622().b[11][0]++;
      cov_2p0um3d622().s[67]++;
      reslove();
      cov_2p0um3d622().s[68]++;
      return;
    } else {
      cov_2p0um3d622().b[11][1]++;
    }
    cov_2p0um3d622().s[69]++;
    reject(new VariousError({
      ...moduleDefined,
      originalError: new Error('not a valid React component'),
      type: 'INVALID_COMPONENT'
    }));
  });
}
function isPromiseLike(value) {
  cov_2p0um3d622().f[23]++;
  cov_2p0um3d622().s[70]++;
  return (cov_2p0um3d622().b[13][0]++, value != null) && (cov_2p0um3d622().b[13][1]++, typeof value.then === 'function');
}
function checkVueComponent(component, moduleDefined) {
  cov_2p0um3d622().f[24]++;
  const versionRegex = (cov_2p0um3d622().s[71]++, new RegExp(`^${_config__WEBPACK_IMPORTED_MODULE_2__.VUE_VERSION}\\.`));
  cov_2p0um3d622().s[72]++;
  return new Promise((resolve, reject) => {
    cov_2p0um3d622().f[25]++;
    cov_2p0um3d622().s[73]++;
    window.requirejs(['vue'], Vue => {
      cov_2p0um3d622().f[26]++;
      cov_2p0um3d622().s[74]++;
      if (!versionRegex.test(Vue.version)) {
        cov_2p0um3d622().b[14][0]++;
        cov_2p0um3d622().s[75]++;
        reject(new Error(`Vue ${_config__WEBPACK_IMPORTED_MODULE_2__.VUE_VERSION}+ required, detected an incompatible version`));
      } else {
        cov_2p0um3d622().b[14][1]++;
      }
      cov_2p0um3d622().s[76]++;
      if ((cov_2p0um3d622().b[16][0]++, typeof component?.render === 'function') || (cov_2p0um3d622().b[16][1]++, typeof component?.setup === 'function')) {
        cov_2p0um3d622().b[15][0]++;
        cov_2p0um3d622().s[77]++;
        resolve();
        cov_2p0um3d622().s[78]++;
        return;
      } else {
        cov_2p0um3d622().b[15][1]++;
      }
      cov_2p0um3d622().s[79]++;
      reject(new VariousError({
        ...moduleDefined,
        originalError: new Error('not a valid Vue component'),
        type: 'INVALID_COMPONENT'
      }));
    });
  });
}
function parseComponentActions(params) {
  cov_2p0um3d622().f[27]++;
  const {
    componentNode,
    name,
    module,
    type,
    i18nUpdate
  } = (cov_2p0um3d622().s[80]++, params);
  const actions = (cov_2p0um3d622().s[81]++, {});
  let onMessageAction;
  let i18nAction;
  cov_2p0um3d622().s[82]++;
  Object.getOwnPropertyNames(componentNode).forEach(method => {
    cov_2p0um3d622().f[28]++;
    cov_2p0um3d622().s[83]++;
    if (typeof componentNode[method] !== 'function') {
      cov_2p0um3d622().b[17][0]++;
      cov_2p0um3d622().s[84]++;
      return;
    } else {
      cov_2p0um3d622().b[17][1]++;
    }
    cov_2p0um3d622().s[85]++;
    if (method === '$onMessage') {
      cov_2p0um3d622().b[18][0]++;
      cov_2p0um3d622().s[86]++;
      onMessageAction = componentNode[method];
      cov_2p0um3d622().s[87]++;
      return;
    } else {
      cov_2p0um3d622().b[18][1]++;
    }
    cov_2p0um3d622().s[88]++;
    if (method === '$i18n') {
      cov_2p0um3d622().b[19][0]++;
      cov_2p0um3d622().s[89]++;
      i18nAction = componentNode[method];
      cov_2p0um3d622().s[90]++;
      return;
    } else {
      cov_2p0um3d622().b[19][1]++;
    }
    cov_2p0um3d622().s[91]++;
    if ((cov_2p0um3d622().b[21][0]++, type === 'vue3') && (cov_2p0um3d622().b[21][1]++, _config__WEBPACK_IMPORTED_MODULE_2__.VUE_FUNCTION_OPTIONS.includes(method))) {
      cov_2p0um3d622().b[20][0]++;
      cov_2p0um3d622().s[92]++;
      return;
    } else {
      cov_2p0um3d622().b[20][1]++;
    }
    cov_2p0um3d622().s[93]++;
    actions[method] = componentNode[method];
  });
  cov_2p0um3d622().s[94]++;
  if (i18nAction) {
    cov_2p0um3d622().b[22][0]++;
    cov_2p0um3d622().s[95]++;
    (0,_i18n__WEBPACK_IMPORTED_MODULE_5__.createI18nConfig)(i18nAction, {
      name,
      module
    }, i18nUpdate);
  } else {
    cov_2p0um3d622().b[22][1]++;
  }
  cov_2p0um3d622().s[96]++;
  _connector__WEBPACK_IMPORTED_MODULE_3__["default"].setComponentActions({
    name,
    module
  }, actions);
  cov_2p0um3d622().s[97]++;
  if (onMessageAction) {
    cov_2p0um3d622().b[23][0]++;
    cov_2p0um3d622().s[98]++;
    return (0,_message__WEBPACK_IMPORTED_MODULE_4__.createOnMessage)({
      name,
      module
    }, onMessageAction);
  } else {
    cov_2p0um3d622().b[23][1]++;
  }
  cov_2p0um3d622().s[99]++;
  return () => {
    cov_2p0um3d622().f[29]++;
    cov_2p0um3d622().s[100]++;
    return null;
  };
}
function updateMountedComponent(moduleDefined) {
  cov_2p0um3d622().f[30]++;
  const mountedComponents = (cov_2p0um3d622().s[101]++, getMountedComponents());
  cov_2p0um3d622().s[102]++;
  if (!hasModule(mountedComponents, moduleDefined)) {
    cov_2p0um3d622().b[24][0]++;
    cov_2p0um3d622().s[103]++;
    mountedComponents.push(moduleDefined);
  } else {
    cov_2p0um3d622().b[24][1]++;
  }
  cov_2p0um3d622().s[104]++;
  (0,_store__WEBPACK_IMPORTED_MODULE_0__.emit)({
    [_config__WEBPACK_IMPORTED_MODULE_2__.MOUNTED_COMPONENTS_KEY]: mountedComponents
  }, true);
}
function updateUnMountComponent(moduleDefined) {
  cov_2p0um3d622().f[31]++;
  const {
    name,
    module
  } = (cov_2p0um3d622().s[105]++, moduleDefined);
  let mountedComponents = (cov_2p0um3d622().s[106]++, getMountedComponents());
  cov_2p0um3d622().s[107]++;
  mountedComponents = mountedComponents.filter(item => {
    cov_2p0um3d622().f[32]++;
    cov_2p0um3d622().s[108]++;
    return (cov_2p0um3d622().b[25][0]++, item.name !== name) || (cov_2p0um3d622().b[25][1]++, item.module !== module);
  });
  cov_2p0um3d622().s[109]++;
  (0,_store__WEBPACK_IMPORTED_MODULE_0__.emit)({
    [_config__WEBPACK_IMPORTED_MODULE_2__.MOUNTED_COMPONENTS_KEY]: mountedComponents
  }, true);
  cov_2p0um3d622().s[110]++;
  _connector__WEBPACK_IMPORTED_MODULE_3__["default"].deleteComponentActions({
    name,
    module
  });
}
function getSelfInfo(params) {
  cov_2p0um3d622().f[33]++;
  const {
    name,
    module,
    url
  } = (cov_2p0um3d622().s[111]++, params);
  const dependencies = (cov_2p0um3d622().s[112]++, (0,_store__WEBPACK_IMPORTED_MODULE_0__.getStore)(_config__WEBPACK_IMPORTED_MODULE_2__.DEPENDENCIES_KEY));
  cov_2p0um3d622().s[113]++;
  return {
    name,
    module,
    url: (cov_2p0um3d622().b[26][0]++, url) || (cov_2p0um3d622().b[26][1]++, dependencies[name])
  };
}
function getClassNameWithModule(self, prefix) {
  cov_2p0um3d622().f[34]++;
  const {
    name,
    module
  } = (cov_2p0um3d622().s[114]++, self);
  cov_2p0um3d622().s[115]++;
  return `${prefix} ${[name, module].filter(Boolean).join('-')}`;
}

/***/ }),

/***/ "./src/core/i18n.ts":
/*!**************************!*\
  !*** ./src/core/i18n.ts ***!
  \**************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   createI18n: function() { return /* binding */ createI18n; },
/* harmony export */   createI18nConfig: function() { return /* binding */ createI18nConfig; }
/* harmony export */ });
/* harmony import */ var _connector__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./connector */ "./src/core/connector.ts");
/* harmony import */ var _helper__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./helper */ "./src/core/helper.ts");
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./store */ "./src/core/store.ts");
function cov_2uiq3iywm() {
  var path = "/Users/am0200/Documents/github/various/src/core/i18n.ts";
  var hash = "390677aeb039d9329fab5559ec88a681f273801c";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "/Users/am0200/Documents/github/various/src/core/i18n.ts",
    statementMap: {
      "0": {
        start: {
          line: 16,
          column: 2
        },
        end: {
          line: 18,
          column: 3
        }
      },
      "1": {
        start: {
          line: 17,
          column: 4
        },
        end: {
          line: 17,
          column: 10
        }
      },
      "2": {
        start: {
          line: 20,
          column: 21
        },
        end: {
          line: 20,
          column: 29
        }
      },
      "3": {
        start: {
          line: 22,
          column: 2
        },
        end: {
          line: 29,
          column: 3
        }
      },
      "4": {
        start: {
          line: 23,
          column: 4
        },
        end: {
          line: 27,
          column: 5
        }
      },
      "5": {
        start: {
          line: 24,
          column: 6
        },
        end: {
          line: 24,
          column: 56
        }
      },
      "6": {
        start: {
          line: 26,
          column: 6
        },
        end: {
          line: 26,
          column: 47
        }
      },
      "7": {
        start: {
          line: 28,
          column: 4
        },
        end: {
          line: 28,
          column: 10
        }
      },
      "8": {
        start: {
          line: 31,
          column: 2
        },
        end: {
          line: 43,
          column: 3
        }
      },
      "9": {
        start: {
          line: 32,
          column: 4
        },
        end: {
          line: 36,
          column: 6
        }
      },
      "10": {
        start: {
          line: 38,
          column: 4
        },
        end: {
          line: 42,
          column: 6
        }
      },
      "11": {
        start: {
          line: 45,
          column: 2
        },
        end: {
          line: 66,
          column: 6
        }
      },
      "12": {
        start: {
          line: 47,
          column: 6
        },
        end: {
          line: 51,
          column: 7
        }
      },
      "13": {
        start: {
          line: 48,
          column: 8
        },
        end: {
          line: 48,
          column: 74
        }
      },
      "14": {
        start: {
          line: 49,
          column: 8
        },
        end: {
          line: 49,
          column: 20
        }
      },
      "15": {
        start: {
          line: 50,
          column: 8
        },
        end: {
          line: 50,
          column: 14
        }
      },
      "16": {
        start: {
          line: 53,
          column: 21
        },
        end: {
          line: 53,
          column: 46
        }
      },
      "17": {
        start: {
          line: 55,
          column: 6
        },
        end: {
          line: 55,
          column: 50
        }
      },
      "18": {
        start: {
          line: 56,
          column: 6
        },
        end: {
          line: 56,
          column: 47
        }
      },
      "19": {
        start: {
          line: 57,
          column: 6
        },
        end: {
          line: 57,
          column: 63
        }
      },
      "20": {
        start: {
          line: 60,
          column: 6
        },
        end: {
          line: 65,
          column: 9
        }
      },
      "21": {
        start: {
          line: 73,
          column: 20
        },
        end: {
          line: 142,
          column: 3
        }
      },
      "22": {
        start: {
          line: 74,
          column: 23
        },
        end: {
          line: 74,
          column: 96
        }
      },
      "23": {
        start: {
          line: 76,
          column: 22
        },
        end: {
          line: 76,
          column: 35
        }
      },
      "24": {
        start: {
          line: 77,
          column: 4
        },
        end: {
          line: 79,
          column: 5
        }
      },
      "25": {
        start: {
          line: 78,
          column: 6
        },
        end: {
          line: 78,
          column: 61
        }
      },
      "26": {
        start: {
          line: 81,
          column: 4
        },
        end: {
          line: 88,
          column: 5
        }
      },
      "27": {
        start: {
          line: 82,
          column: 6
        },
        end: {
          line: 86,
          column: 9
        }
      },
      "28": {
        start: {
          line: 87,
          column: 6
        },
        end: {
          line: 87,
          column: 24
        }
      },
      "29": {
        start: {
          line: 90,
          column: 4
        },
        end: {
          line: 92,
          column: 5
        }
      },
      "30": {
        start: {
          line: 91,
          column: 6
        },
        end: {
          line: 91,
          column: 24
        }
      },
      "31": {
        start: {
          line: 94,
          column: 39
        },
        end: {
          line: 94,
          column: 49
        }
      },
      "32": {
        start: {
          line: 95,
          column: 39
        },
        end: {
          line: 95,
          column: 60
        }
      },
      "33": {
        start: {
          line: 97,
          column: 4
        },
        end: {
          line: 104,
          column: 5
        }
      },
      "34": {
        start: {
          line: 98,
          column: 6
        },
        end: {
          line: 102,
          column: 9
        }
      },
      "35": {
        start: {
          line: 103,
          column: 6
        },
        end: {
          line: 103,
          column: 24
        }
      },
      "36": {
        start: {
          line: 106,
          column: 21
        },
        end: {
          line: 106,
          column: 40
        }
      },
      "37": {
        start: {
          line: 108,
          column: 4
        },
        end: {
          line: 115,
          column: 5
        }
      },
      "38": {
        start: {
          line: 109,
          column: 6
        },
        end: {
          line: 113,
          column: 9
        }
      },
      "39": {
        start: {
          line: 114,
          column: 6
        },
        end: {
          line: 114,
          column: 24
        }
      },
      "40": {
        start: {
          line: 117,
          column: 4
        },
        end: {
          line: 124,
          column: 5
        }
      },
      "41": {
        start: {
          line: 118,
          column: 6
        },
        end: {
          line: 122,
          column: 9
        }
      },
      "42": {
        start: {
          line: 123,
          column: 6
        },
        end: {
          line: 123,
          column: 24
        }
      },
      "43": {
        start: {
          line: 126,
          column: 17
        },
        end: {
          line: 126,
          column: 30
        }
      },
      "44": {
        start: {
          line: 128,
          column: 4
        },
        end: {
          line: 130,
          column: 5
        }
      },
      "45": {
        start: {
          line: 129,
          column: 6
        },
        end: {
          line: 129,
          column: 17
        }
      },
      "46": {
        start: {
          line: 132,
          column: 17
        },
        end: {
          line: 132,
          column: 36
        }
      },
      "47": {
        start: {
          line: 134,
          column: 4
        },
        end: {
          line: 136,
          column: 5
        }
      },
      "48": {
        start: {
          line: 135,
          column: 6
        },
        end: {
          line: 135,
          column: 17
        }
      },
      "49": {
        start: {
          line: 138,
          column: 4
        },
        end: {
          line: 141,
          column: 12
        }
      },
      "50": {
        start: {
          line: 139,
          column: 20
        },
        end: {
          line: 139,
          column: 55
        }
      },
      "51": {
        start: {
          line: 140,
          column: 6
        },
        end: {
          line: 140,
          column: 56
        }
      },
      "52": {
        start: {
          line: 144,
          column: 2
        },
        end: {
          line: 157,
          column: 3
        }
      },
      "53": {
        start: {
          line: 145,
          column: 23
        },
        end: {
          line: 147,
          column: 46
        }
      },
      "54": {
        start: {
          line: 148,
          column: 17
        },
        end: {
          line: 148,
          column: 59
        }
      },
      "55": {
        start: {
          line: 150,
          column: 4
        },
        end: {
          line: 154,
          column: 5
        }
      },
      "56": {
        start: {
          line: 151,
          column: 6
        },
        end: {
          line: 151,
          column: 41
        }
      },
      "57": {
        start: {
          line: 153,
          column: 6
        },
        end: {
          line: 153,
          column: 50
        }
      },
      "58": {
        start: {
          line: 156,
          column: 4
        },
        end: {
          line: 156,
          column: 13
        }
      },
      "59": {
        start: {
          line: 159,
          column: 2
        },
        end: {
          line: 159,
          column: 12
        }
      }
    },
    fnMap: {
      "0": {
        name: "createI18nConfig",
        decl: {
          start: {
            line: 11,
            column: 16
          },
          end: {
            line: 11,
            column: 32
          }
        },
        loc: {
          start: {
            line: 15,
            column: 2
          },
          end: {
            line: 67,
            column: 1
          }
        },
        line: 15
      },
      "1": {
        name: "(anonymous_1)",
        decl: {
          start: {
            line: 46,
            column: 10
          },
          end: {
            line: 46,
            column: 11
          }
        },
        loc: {
          start: {
            line: 46,
            column: 19
          },
          end: {
            line: 58,
            column: 5
          }
        },
        line: 46
      },
      "2": {
        name: "(anonymous_2)",
        decl: {
          start: {
            line: 59,
            column: 11
          },
          end: {
            line: 59,
            column: 12
          }
        },
        loc: {
          start: {
            line: 59,
            column: 25
          },
          end: {
            line: 66,
            column: 5
          }
        },
        line: 59
      },
      "3": {
        name: "createI18n",
        decl: {
          start: {
            line: 69,
            column: 16
          },
          end: {
            line: 69,
            column: 26
          }
        },
        loc: {
          start: {
            line: 72,
            column: 2
          },
          end: {
            line: 160,
            column: 1
          }
        },
        line: 72
      },
      "4": {
        name: "(anonymous_4)",
        decl: {
          start: {
            line: 73,
            column: 20
          },
          end: {
            line: 73,
            column: 21
          }
        },
        loc: {
          start: {
            line: 73,
            column: 52
          },
          end: {
            line: 142,
            column: 3
          }
        },
        line: 73
      },
      "5": {
        name: "(anonymous_5)",
        decl: {
          start: {
            line: 138,
            column: 23
          },
          end: {
            line: 138,
            column: 24
          }
        },
        loc: {
          start: {
            line: 138,
            column: 38
          },
          end: {
            line: 141,
            column: 5
          }
        },
        line: 138
      },
      "6": {
        name: "(anonymous_6)",
        decl: {
          start: {
            line: 144,
            column: 15
          },
          end: {
            line: 144,
            column: 16
          }
        },
        loc: {
          start: {
            line: 144,
            column: 33
          },
          end: {
            line: 157,
            column: 3
          }
        },
        line: 144
      }
    },
    branchMap: {
      "0": {
        loc: {
          start: {
            line: 16,
            column: 2
          },
          end: {
            line: 18,
            column: 3
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 16,
            column: 2
          },
          end: {
            line: 18,
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
        line: 16
      },
      "1": {
        loc: {
          start: {
            line: 22,
            column: 2
          },
          end: {
            line: 29,
            column: 3
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 22,
            column: 2
          },
          end: {
            line: 29,
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
        line: 22
      },
      "2": {
        loc: {
          start: {
            line: 23,
            column: 4
          },
          end: {
            line: 27,
            column: 5
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 23,
            column: 4
          },
          end: {
            line: 27,
            column: 5
          }
        }, {
          start: {
            line: 25,
            column: 11
          },
          end: {
            line: 27,
            column: 5
          }
        }],
        line: 23
      },
      "3": {
        loc: {
          start: {
            line: 31,
            column: 2
          },
          end: {
            line: 43,
            column: 3
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 31,
            column: 2
          },
          end: {
            line: 43,
            column: 3
          }
        }, {
          start: {
            line: 37,
            column: 9
          },
          end: {
            line: 43,
            column: 3
          }
        }],
        line: 31
      },
      "4": {
        loc: {
          start: {
            line: 47,
            column: 6
          },
          end: {
            line: 51,
            column: 7
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 47,
            column: 6
          },
          end: {
            line: 51,
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
        line: 47
      },
      "5": {
        loc: {
          start: {
            line: 61,
            column: 14
          },
          end: {
            line: 61,
            column: 42
          }
        },
        type: "binary-expr",
        locations: [{
          start: {
            line: 61,
            column: 14
          },
          end: {
            line: 61,
            column: 33
          }
        }, {
          start: {
            line: 61,
            column: 37
          },
          end: {
            line: 61,
            column: 42
          }
        }],
        line: 61
      },
      "6": {
        loc: {
          start: {
            line: 74,
            column: 23
          },
          end: {
            line: 74,
            column: 96
          }
        },
        type: "binary-expr",
        locations: [{
          start: {
            line: 74,
            column: 23
          },
          end: {
            line: 74,
            column: 61
          }
        }, {
          start: {
            line: 74,
            column: 65
          },
          end: {
            line: 74,
            column: 96
          }
        }],
        line: 74
      },
      "7": {
        loc: {
          start: {
            line: 77,
            column: 4
          },
          end: {
            line: 79,
            column: 5
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 77,
            column: 4
          },
          end: {
            line: 79,
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
        line: 77
      },
      "8": {
        loc: {
          start: {
            line: 78,
            column: 20
          },
          end: {
            line: 78,
            column: 61
          }
        },
        type: "cond-expr",
        locations: [{
          start: {
            line: 78,
            column: 49
          },
          end: {
            line: 78,
            column: 55
          }
        }, {
          start: {
            line: 78,
            column: 58
          },
          end: {
            line: 78,
            column: 61
          }
        }],
        line: 78
      },
      "9": {
        loc: {
          start: {
            line: 81,
            column: 4
          },
          end: {
            line: 88,
            column: 5
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 81,
            column: 4
          },
          end: {
            line: 88,
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
        line: 81
      },
      "10": {
        loc: {
          start: {
            line: 90,
            column: 4
          },
          end: {
            line: 92,
            column: 5
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 90,
            column: 4
          },
          end: {
            line: 92,
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
        line: 90
      },
      "11": {
        loc: {
          start: {
            line: 97,
            column: 4
          },
          end: {
            line: 104,
            column: 5
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 97,
            column: 4
          },
          end: {
            line: 104,
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
        line: 97
      },
      "12": {
        loc: {
          start: {
            line: 97,
            column: 8
          },
          end: {
            line: 97,
            column: 57
          }
        },
        type: "binary-expr",
        locations: [{
          start: {
            line: 97,
            column: 8
          },
          end: {
            line: 97,
            column: 33
          }
        }, {
          start: {
            line: 97,
            column: 37
          },
          end: {
            line: 97,
            column: 57
          }
        }],
        line: 97
      },
      "13": {
        loc: {
          start: {
            line: 108,
            column: 4
          },
          end: {
            line: 115,
            column: 5
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 108,
            column: 4
          },
          end: {
            line: 115,
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
        line: 108
      },
      "14": {
        loc: {
          start: {
            line: 117,
            column: 4
          },
          end: {
            line: 124,
            column: 5
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 117,
            column: 4
          },
          end: {
            line: 124,
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
        line: 117
      },
      "15": {
        loc: {
          start: {
            line: 128,
            column: 4
          },
          end: {
            line: 130,
            column: 5
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 128,
            column: 4
          },
          end: {
            line: 130,
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
        line: 128
      },
      "16": {
        loc: {
          start: {
            line: 128,
            column: 8
          },
          end: {
            line: 128,
            column: 109
          }
        },
        type: "binary-expr",
        locations: [{
          start: {
            line: 128,
            column: 8
          },
          end: {
            line: 128,
            column: 15
          }
        }, {
          start: {
            line: 128,
            column: 19
          },
          end: {
            line: 128,
            column: 45
          }
        }, {
          start: {
            line: 128,
            column: 49
          },
          end: {
            line: 128,
            column: 109
          }
        }],
        line: 128
      },
      "17": {
        loc: {
          start: {
            line: 134,
            column: 4
          },
          end: {
            line: 136,
            column: 5
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 134,
            column: 4
          },
          end: {
            line: 136,
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
        line: 134
      },
      "18": {
        loc: {
          start: {
            line: 145,
            column: 23
          },
          end: {
            line: 147,
            column: 46
          }
        },
        type: "cond-expr",
        locations: [{
          start: {
            line: 146,
            column: 8
          },
          end: {
            line: 146,
            column: 39
          }
        }, {
          start: {
            line: 147,
            column: 8
          },
          end: {
            line: 147,
            column: 46
          }
        }],
        line: 145
      },
      "19": {
        loc: {
          start: {
            line: 150,
            column: 4
          },
          end: {
            line: 154,
            column: 5
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 150,
            column: 4
          },
          end: {
            line: 154,
            column: 5
          }
        }, {
          start: {
            line: 152,
            column: 11
          },
          end: {
            line: 154,
            column: 5
          }
        }],
        line: 150
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
      "59": 0
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
      "0": [0, 0],
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
      "16": [0, 0, 0],
      "17": [0, 0],
      "18": [0, 0],
      "19": [0, 0]
    },
    _coverageSchema: "1a1c01bbd47fc00a2c39e90264f33305004495a9",
    hash: "390677aeb039d9329fab5559ec88a681f273801c"
  };
  var coverage = global[gcv] || (global[gcv] = {});
  if (!coverage[path] || coverage[path].hash !== hash) {
    coverage[path] = coverageData;
  }
  var actualCoverage = coverage[path];
  {
    // @ts-ignore
    cov_2uiq3iywm = function () {
      return actualCoverage;
    };
  }
  return actualCoverage;
}
cov_2uiq3iywm();



function createI18nConfig(method, moduleDefined, callback) {
  cov_2uiq3iywm().f[0]++;
  cov_2uiq3iywm().s[0]++;
  if (!method) {
    cov_2uiq3iywm().b[0][0]++;
    cov_2uiq3iywm().s[1]++;
    return;
  } else {
    cov_2uiq3iywm().b[0][1]++;
  }
  const i18nConfig = (cov_2uiq3iywm().s[2]++, method());
  cov_2uiq3iywm().s[3]++;
  if (!(0,_helper__WEBPACK_IMPORTED_MODULE_1__.isPromiseLike)(i18nConfig)) {
    cov_2uiq3iywm().b[1][0]++;
    cov_2uiq3iywm().s[4]++;
    if (moduleDefined) {
      cov_2uiq3iywm().b[2][0]++;
      cov_2uiq3iywm().s[5]++;
      _connector__WEBPACK_IMPORTED_MODULE_0__["default"].setI18nConfig(moduleDefined, i18nConfig);
    } else {
      cov_2uiq3iywm().b[2][1]++;
      cov_2uiq3iywm().s[6]++;
      _connector__WEBPACK_IMPORTED_MODULE_0__["default"].setGlobalI18nConfig(i18nConfig);
    }
    cov_2uiq3iywm().s[7]++;
    return;
  } else {
    cov_2uiq3iywm().b[1][1]++;
  }
  cov_2uiq3iywm().s[8]++;
  if (moduleDefined) {
    cov_2uiq3iywm().b[3][0]++;
    cov_2uiq3iywm().s[9]++;
    _connector__WEBPACK_IMPORTED_MODULE_0__["default"].setI18nConfig(moduleDefined, {
      loading: true,
      lngStoreKey: '',
      resources: {}
    });
  } else {
    cov_2uiq3iywm().b[3][1]++;
    cov_2uiq3iywm().s[10]++;
    _connector__WEBPACK_IMPORTED_MODULE_0__["default"].setGlobalI18nConfig({
      loading: true,
      lngStoreKey: '',
      resources: {}
    });
  }
  cov_2uiq3iywm().s[11]++;
  i18nConfig.then(res => {
    cov_2uiq3iywm().f[1]++;
    cov_2uiq3iywm().s[12]++;
    if (moduleDefined) {
      cov_2uiq3iywm().b[4][0]++;
      cov_2uiq3iywm().s[13]++;
      _connector__WEBPACK_IMPORTED_MODULE_0__["default"].setI18nConfig(moduleDefined, {
        ...res,
        loading: false
      });
      cov_2uiq3iywm().s[14]++;
      callback?.();
      cov_2uiq3iywm().s[15]++;
      return;
    } else {
      cov_2uiq3iywm().b[4][1]++;
    }
    const locale = (cov_2uiq3iywm().s[16]++, (0,_store__WEBPACK_IMPORTED_MODULE_2__.getStore)(res.lngStoreKey));
    cov_2uiq3iywm().s[17]++;
    (0,_store__WEBPACK_IMPORTED_MODULE_2__.emit)({
      [res.lngStoreKey]: undefined
    }, true);
    cov_2uiq3iywm().s[18]++;
    (0,_store__WEBPACK_IMPORTED_MODULE_2__.emit)({
      [res.lngStoreKey]: locale
    }, true);
    cov_2uiq3iywm().s[19]++;
    _connector__WEBPACK_IMPORTED_MODULE_0__["default"].setGlobalI18nConfig({
      ...res,
      loading: false
    });
  }).catch(e => {
    cov_2uiq3iywm().f[2]++;
    cov_2uiq3iywm().s[20]++;
    (0,_helper__WEBPACK_IMPORTED_MODULE_1__.onError)(new _helper__WEBPACK_IMPORTED_MODULE_1__.VariousError({
      name: (cov_2uiq3iywm().b[5][0]++, moduleDefined?.name) || (cov_2uiq3iywm().b[5][1]++, 'app'),
      module: moduleDefined?.module,
      type: 'I18N',
      originalError: e
    }));
  });
}
function createI18n(moduleDefined, updater) {
  cov_2uiq3iywm().f[3]++;
  cov_2uiq3iywm().s[21]++;
  const ctx = (key, params, defaultString) => {
    cov_2uiq3iywm().f[4]++;
    const i18nConfig = (cov_2uiq3iywm().s[22]++, (cov_2uiq3iywm().b[6][0]++, _connector__WEBPACK_IMPORTED_MODULE_0__["default"].getI18nConfig(moduleDefined)) || (cov_2uiq3iywm().b[6][1]++, _connector__WEBPACK_IMPORTED_MODULE_0__["default"].getGlobalI18nConfig()));
    let defaultText = (cov_2uiq3iywm().s[23]++, defaultString);
    cov_2uiq3iywm().s[24]++;
    if (defaultText === undefined) {
      cov_2uiq3iywm().b[7][0]++;
      cov_2uiq3iywm().s[25]++;
      defaultText = typeof params === 'string' ? (cov_2uiq3iywm().b[8][0]++, params) : (cov_2uiq3iywm().b[8][1]++, key);
    } else {
      cov_2uiq3iywm().b[7][1]++;
    }
    cov_2uiq3iywm().s[26]++;
    if (!i18nConfig) {
      cov_2uiq3iywm().b[9][0]++;
      cov_2uiq3iywm().s[27]++;
      (0,_helper__WEBPACK_IMPORTED_MODULE_1__.onError)(new _helper__WEBPACK_IMPORTED_MODULE_1__.VariousError({
        ...moduleDefined,
        type: 'I18N',
        originalError: new Error('config not exist')
      }));
      cov_2uiq3iywm().s[28]++;
      return defaultText;
    } else {
      cov_2uiq3iywm().b[9][1]++;
    }
    cov_2uiq3iywm().s[29]++;
    if (i18nConfig.loading) {
      cov_2uiq3iywm().b[10][0]++;
      cov_2uiq3iywm().s[30]++;
      return defaultText;
    } else {
      cov_2uiq3iywm().b[10][1]++;
    }
    const {
      lngStoreKey,
      resources
    } = (cov_2uiq3iywm().s[31]++, i18nConfig);
    const locale = (cov_2uiq3iywm().s[32]++, (0,_store__WEBPACK_IMPORTED_MODULE_2__.getStore)(lngStoreKey));
    cov_2uiq3iywm().s[33]++;
    if ((cov_2uiq3iywm().b[12][0]++, lngStoreKey === undefined) || (cov_2uiq3iywm().b[12][1]++, locale === undefined)) {
      cov_2uiq3iywm().b[11][0]++;
      cov_2uiq3iywm().s[34]++;
      (0,_helper__WEBPACK_IMPORTED_MODULE_1__.onError)(new _helper__WEBPACK_IMPORTED_MODULE_1__.VariousError({
        ...moduleDefined,
        type: 'I18N',
        originalError: new Error('locale key not defined')
      }));
      cov_2uiq3iywm().s[35]++;
      return defaultText;
    } else {
      cov_2uiq3iywm().b[11][1]++;
    }
    const resource = (cov_2uiq3iywm().s[36]++, resources?.[locale]);
    cov_2uiq3iywm().s[37]++;
    if (!resource) {
      cov_2uiq3iywm().b[13][0]++;
      cov_2uiq3iywm().s[38]++;
      (0,_helper__WEBPACK_IMPORTED_MODULE_1__.onError)(new _helper__WEBPACK_IMPORTED_MODULE_1__.VariousError({
        ...moduleDefined,
        type: 'I18N',
        originalError: new Error(`locale resource \`${locale}\` not exist`)
      }));
      cov_2uiq3iywm().s[39]++;
      return defaultText;
    } else {
      cov_2uiq3iywm().b[13][1]++;
    }
    cov_2uiq3iywm().s[40]++;
    if (!resource[key]) {
      cov_2uiq3iywm().b[14][0]++;
      cov_2uiq3iywm().s[41]++;
      (0,_helper__WEBPACK_IMPORTED_MODULE_1__.onError)(new _helper__WEBPACK_IMPORTED_MODULE_1__.VariousError({
        ...moduleDefined,
        type: 'I18N',
        originalError: new Error(`locale key \`${key}\` not exist`)
      }));
      cov_2uiq3iywm().s[42]++;
      return defaultText;
    } else {
      cov_2uiq3iywm().b[14][1]++;
    }
    const text = (cov_2uiq3iywm().s[43]++, resource[key]);
    cov_2uiq3iywm().s[44]++;
    if ((cov_2uiq3iywm().b[16][0]++, !params) || (cov_2uiq3iywm().b[16][1]++, typeof params === 'string') || (cov_2uiq3iywm().b[16][2]++, Object.prototype.toString.call(params) !== '[object Object]')) {
      cov_2uiq3iywm().b[15][0]++;
      cov_2uiq3iywm().s[45]++;
      return text;
    } else {
      cov_2uiq3iywm().b[15][1]++;
    }
    const args = (cov_2uiq3iywm().s[46]++, Object.keys(params));
    cov_2uiq3iywm().s[47]++;
    if (!args.length) {
      cov_2uiq3iywm().b[17][0]++;
      cov_2uiq3iywm().s[48]++;
      return text;
    } else {
      cov_2uiq3iywm().b[17][1]++;
    }
    cov_2uiq3iywm().s[49]++;
    return args.reduce((next, arg) => {
      cov_2uiq3iywm().f[5]++;
      const regex = (cov_2uiq3iywm().s[50]++, new RegExp(`{\\s*${arg}\\s*}`, 'g'));
      cov_2uiq3iywm().s[51]++;
      return next.replace(regex, params[arg].toString());
    }, text);
  };
  cov_2uiq3iywm().s[52]++;
  ctx.update = (config, type) => {
    cov_2uiq3iywm().f[6]++;
    const i18nConfig = (cov_2uiq3iywm().s[53]++, type === 'app' ? (cov_2uiq3iywm().b[18][0]++, _connector__WEBPACK_IMPORTED_MODULE_0__["default"].getGlobalI18nConfig()) : (cov_2uiq3iywm().b[18][1]++, _connector__WEBPACK_IMPORTED_MODULE_0__["default"].getI18nConfig(moduleDefined)));
    const next = (cov_2uiq3iywm().s[54]++, {
      ...i18nConfig,
      ...config
    });
    cov_2uiq3iywm().s[55]++;
    if (type === 'app') {
      cov_2uiq3iywm().b[19][0]++;
      cov_2uiq3iywm().s[56]++;
      _connector__WEBPACK_IMPORTED_MODULE_0__["default"].setGlobalI18nConfig(next);
    } else {
      cov_2uiq3iywm().b[19][1]++;
      cov_2uiq3iywm().s[57]++;
      _connector__WEBPACK_IMPORTED_MODULE_0__["default"].setI18nConfig(moduleDefined, next);
    }
    cov_2uiq3iywm().s[58]++;
    updater();
  };
  cov_2uiq3iywm().s[59]++;
  return ctx;
}

/***/ }),

/***/ "./src/core/logger.ts":
/*!****************************!*\
  !*** ./src/core/logger.ts ***!
  \****************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _connector__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./connector */ "./src/core/connector.ts");
/* harmony import */ var _helper__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./helper */ "./src/core/helper.ts");
function cov_2el6x41xke() {
  var path = "/Users/am0200/Documents/github/various/src/core/logger.ts";
  var hash = "7f71f0f42239d39c5ee73e4c91c5902b834fec7d";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "/Users/am0200/Documents/github/various/src/core/logger.ts",
    statementMap: {
      "0": {
        start: {
          line: 8,
          column: 15
        },
        end: {
          line: 41,
          column: 1
        }
      },
      "1": {
        start: {
          line: 9,
          column: 22
        },
        end: {
          line: 9,
          column: 48
        }
      },
      "2": {
        start: {
          line: 10,
          column: 17
        },
        end: {
          line: 10,
          column: 43
        }
      },
      "3": {
        start: {
          line: 12,
          column: 2
        },
        end: {
          line: 14,
          column: 3
        }
      },
      "4": {
        start: {
          line: 13,
          column: 4
        },
        end: {
          line: 13,
          column: 10
        }
      },
      "5": {
        start: {
          line: 16,
          column: 45
        },
        end: {
          line: 20,
          column: 3
        }
      },
      "6": {
        start: {
          line: 21,
          column: 16
        },
        end: {
          line: 21,
          column: 36
        }
      },
      "7": {
        start: {
          line: 23,
          column: 17
        },
        end: {
          line: 26,
          column: 3
        }
      },
      "8": {
        start: {
          line: 28,
          column: 2
        },
        end: {
          line: 34,
          column: 3
        }
      },
      "9": {
        start: {
          line: 29,
          column: 4
        },
        end: {
          line: 29,
          column: 48
        }
      },
      "10": {
        start: {
          line: 30,
          column: 4
        },
        end: {
          line: 33,
          column: 5
        }
      },
      "11": {
        start: {
          line: 36,
          column: 2
        },
        end: {
          line: 38,
          column: 3
        }
      },
      "12": {
        start: {
          line: 37,
          column: 4
        },
        end: {
          line: 37,
          column: 31
        }
      },
      "13": {
        start: {
          line: 40,
          column: 2
        },
        end: {
          line: 40,
          column: 53
        }
      },
      "14": {
        start: {
          line: 43,
          column: 32
        },
        end: {
          line: 70,
          column: 2
        }
      },
      "15": {
        start: {
          line: 43,
          column: 52
        },
        end: {
          line: 70,
          column: 1
        }
      },
      "16": {
        start: {
          line: 45,
          column: 4
        },
        end: {
          line: 47,
          column: 6
        }
      },
      "17": {
        start: {
          line: 50,
          column: 4
        },
        end: {
          line: 52,
          column: 6
        }
      },
      "18": {
        start: {
          line: 55,
          column: 24
        },
        end: {
          line: 55,
          column: 50
        }
      },
      "19": {
        start: {
          line: 56,
          column: 18
        },
        end: {
          line: 62,
          column: 8
        }
      },
      "20": {
        start: {
          line: 64,
          column: 4
        },
        end: {
          line: 64,
          column: 33
        }
      },
      "21": {
        start: {
          line: 66,
          column: 4
        },
        end: {
          line: 68,
          column: 6
        }
      }
    },
    fnMap: {
      "0": {
        name: "(anonymous_0)",
        decl: {
          start: {
            line: 8,
            column: 15
          },
          end: {
            line: 8,
            column: 16
          }
        },
        loc: {
          start: {
            line: 8,
            column: 34
          },
          end: {
            line: 41,
            column: 1
          }
        },
        line: 8
      },
      "1": {
        name: "(anonymous_1)",
        decl: {
          start: {
            line: 43,
            column: 32
          },
          end: {
            line: 43,
            column: 33
          }
        },
        loc: {
          start: {
            line: 43,
            column: 52
          },
          end: {
            line: 70,
            column: 1
          }
        },
        line: 43
      },
      "2": {
        name: "(anonymous_2)",
        decl: {
          start: {
            line: 44,
            column: 2
          },
          end: {
            line: 44,
            column: 3
          }
        },
        loc: {
          start: {
            line: 44,
            column: 22
          },
          end: {
            line: 48,
            column: 3
          }
        },
        line: 44
      },
      "3": {
        name: "(anonymous_3)",
        decl: {
          start: {
            line: 49,
            column: 2
          },
          end: {
            line: 49,
            column: 3
          }
        },
        loc: {
          start: {
            line: 49,
            column: 22
          },
          end: {
            line: 53,
            column: 3
          }
        },
        line: 49
      },
      "4": {
        name: "(anonymous_4)",
        decl: {
          start: {
            line: 54,
            column: 2
          },
          end: {
            line: 54,
            column: 3
          }
        },
        loc: {
          start: {
            line: 54,
            column: 23
          },
          end: {
            line: 69,
            column: 3
          }
        },
        line: 54
      }
    },
    branchMap: {
      "0": {
        loc: {
          start: {
            line: 12,
            column: 2
          },
          end: {
            line: 14,
            column: 3
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 12,
            column: 2
          },
          end: {
            line: 14,
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
        line: 12
      },
      "1": {
        loc: {
          start: {
            line: 28,
            column: 2
          },
          end: {
            line: 34,
            column: 3
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 28,
            column: 2
          },
          end: {
            line: 34,
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
        line: 28
      },
      "2": {
        loc: {
          start: {
            line: 36,
            column: 2
          },
          end: {
            line: 38,
            column: 3
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 36,
            column: 2
          },
          end: {
            line: 38,
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
        line: 36
      },
      "3": {
        loc: {
          start: {
            line: 56,
            column: 18
          },
          end: {
            line: 62,
            column: 8
          }
        },
        type: "cond-expr",
        locations: [{
          start: {
            line: 57,
            column: 8
          },
          end: {
            line: 57,
            column: 15
          }
        }, {
          start: {
            line: 58,
            column: 8
          },
          end: {
            line: 62,
            column: 8
          }
        }],
        line: 56
      },
      "4": {
        loc: {
          start: {
            line: 60,
            column: 14
          },
          end: {
            line: 60,
            column: 30
          }
        },
        type: "binary-expr",
        locations: [{
          start: {
            line: 60,
            column: 14
          },
          end: {
            line: 60,
            column: 18
          }
        }, {
          start: {
            line: 60,
            column: 22
          },
          end: {
            line: 60,
            column: 30
          }
        }],
        line: 60
      },
      "5": {
        loc: {
          start: {
            line: 61,
            column: 23
          },
          end: {
            line: 61,
            column: 78
          }
        },
        type: "cond-expr",
        locations: [{
          start: {
            line: 61,
            column: 50
          },
          end: {
            line: 61,
            column: 57
          }
        }, {
          start: {
            line: 61,
            column: 60
          },
          end: {
            line: 61,
            column: 78
          }
        }],
        line: 61
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
      "21": 0
    },
    f: {
      "0": 0,
      "1": 0,
      "2": 0,
      "3": 0,
      "4": 0
    },
    b: {
      "0": [0, 0],
      "1": [0, 0],
      "2": [0, 0],
      "3": [0, 0],
      "4": [0, 0],
      "5": [0, 0]
    },
    _coverageSchema: "1a1c01bbd47fc00a2c39e90264f33305004495a9",
    hash: "7f71f0f42239d39c5ee73e4c91c5902b834fec7d"
  };
  var coverage = global[gcv] || (global[gcv] = {});
  if (!coverage[path] || coverage[path].hash !== hash) {
    coverage[path] = coverageData;
  }
  var actualCoverage = coverage[path];
  {
    // @ts-ignore
    cov_2el6x41xke = function () {
      return actualCoverage;
    };
  }
  return actualCoverage;
}
cov_2el6x41xke();


cov_2el6x41xke().s[0]++;
const logger = args => {
  cov_2el6x41xke().f[0]++;
  const middlewares = (cov_2el6x41xke().s[1]++, _connector__WEBPACK_IMPORTED_MODULE_0__["default"].getMiddlewares());
  const canLog = (cov_2el6x41xke().s[2]++, middlewares?.onLog?.(args));
  cov_2el6x41xke().s[3]++;
  if (canLog === false) {
    cov_2el6x41xke().b[0][0]++;
    cov_2el6x41xke().s[4]++;
    return;
  } else {
    cov_2el6x41xke().b[0][1]++;
  }
  const colorMap = (cov_2el6x41xke().s[5]++, {
    info: 'blue',
    warn: 'orange',
    error: 'red'
  });
  const color = (cov_2el6x41xke().s[6]++, colorMap[args.level]);
  const params = (cov_2el6x41xke().s[7]++, [`%c ${(0,_helper__WEBPACK_IMPORTED_MODULE_1__.getNameWithModule)(args)} `, `background:${color};border:1px solid ${color};padding:1px;border-radius:2px 0 0 2px;color: #fff;`]);
  cov_2el6x41xke().s[8]++;
  if (args.type) {
    cov_2el6x41xke().b[1][0]++;
    cov_2el6x41xke().s[9]++;
    params[0] = `${params[0]}%c ${args.type} %c`;
    cov_2el6x41xke().s[10]++;
    params.push(`border:1px solid ${color};padding:1px;border-radius:0 2px 2px 0;color:${color};`, 'background:transparent');
  } else {
    cov_2el6x41xke().b[1][1]++;
  }
  cov_2el6x41xke().s[11]++;
  if (args.level !== 'info') {
    cov_2el6x41xke().b[2][0]++;
    cov_2el6x41xke().s[12]++;
    params[0] = ` ${params[0]}`;
  } else {
    cov_2el6x41xke().b[2][1]++;
  }
  cov_2el6x41xke().s[13]++;
  window.console[args.level](...params, args.message);
};
cov_2el6x41xke().s[14]++;
const createLogger = moduleDefined => {
  cov_2el6x41xke().f[1]++;
  cov_2el6x41xke().s[15]++;
  return {
    info(message, type) {
      cov_2el6x41xke().f[2]++;
      cov_2el6x41xke().s[16]++;
      logger({
        ...moduleDefined,
        level: 'info',
        type,
        message
      });
    },
    warn(message, type) {
      cov_2el6x41xke().f[3]++;
      cov_2el6x41xke().s[17]++;
      logger({
        ...moduleDefined,
        level: 'warn',
        type,
        message
      });
    },
    error(message, type) {
      cov_2el6x41xke().f[4]++;
      const middlewares = (cov_2el6x41xke().s[18]++, _connector__WEBPACK_IMPORTED_MODULE_0__["default"].getMiddlewares());
      const error = (cov_2el6x41xke().s[19]++, message instanceof _helper__WEBPACK_IMPORTED_MODULE_1__.VariousError ? (cov_2el6x41xke().b[3][0]++, message) : (cov_2el6x41xke().b[3][1]++, new _helper__WEBPACK_IMPORTED_MODULE_1__.VariousError({
        ...moduleDefined,
        type: (cov_2el6x41xke().b[4][0]++, type) || (cov_2el6x41xke().b[4][1]++, 'unknow'),
        originalError: message instanceof Error ? (cov_2el6x41xke().b[5][0]++, message) : (cov_2el6x41xke().b[5][1]++, new Error(message))
      })));
      cov_2el6x41xke().s[20]++;
      middlewares?.onError?.(error);
      cov_2el6x41xke().s[21]++;
      logger({
        ...moduleDefined,
        level: 'error',
        type,
        message
      });
    }
  };
};
/* harmony default export */ __webpack_exports__["default"] = (createLogger);

/***/ }),

/***/ "./src/core/message.ts":
/*!*****************************!*\
  !*** ./src/core/message.ts ***!
  \*****************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   createOnMessage: function() { return /* binding */ createOnMessage; },
/* harmony export */   createPostMessage: function() { return /* binding */ createPostMessage; }
/* harmony export */ });
/* harmony import */ var _connector__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./connector */ "./src/core/connector.ts");
/* harmony import */ var _logger__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./logger */ "./src/core/logger.ts");
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./store */ "./src/core/store.ts");
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./config */ "./src/core/config.ts");
function cov_lnx6a7y33() {
  var path = "/Users/am0200/Documents/github/various/src/core/message.ts";
  var hash = "b324bcf3b472161cf486e676236c6ed796b69b78";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "/Users/am0200/Documents/github/various/src/core/message.ts",
    statementMap: {
      "0": {
        start: {
          line: 7,
          column: 45
        },
        end: {
          line: 34,
          column: 1
        }
      },
      "1": {
        start: {
          line: 7,
          column: 64
        },
        end: {
          line: 34,
          column: 1
        }
      },
      "2": {
        start: {
          line: 8,
          column: 22
        },
        end: {
          line: 8,
          column: 48
        }
      },
      "3": {
        start: {
          line: 9,
          column: 17
        },
        end: {
          line: 9,
          column: 44
        }
      },
      "4": {
        start: {
          line: 11,
          column: 13
        },
        end: {
          line: 11,
          column: 53
        }
      },
      "5": {
        start: {
          line: 13,
          column: 2
        },
        end: {
          line: 24,
          column: 3
        }
      },
      "6": {
        start: {
          line: 14,
          column: 18
        },
        end: {
          line: 14,
          column: 51
        }
      },
      "7": {
        start: {
          line: 16,
          column: 4
        },
        end: {
          line: 19,
          column: 5
        }
      },
      "8": {
        start: {
          line: 17,
          column: 6
        },
        end: {
          line: 17,
          column: 58
        }
      },
      "9": {
        start: {
          line: 18,
          column: 6
        },
        end: {
          line: 18,
          column: 12
        }
      },
      "10": {
        start: {
          line: 21,
          column: 4
        },
        end: {
          line: 23,
          column: 5
        }
      },
      "11": {
        start: {
          line: 22,
          column: 6
        },
        end: {
          line: 22,
          column: 34
        }
      },
      "12": {
        start: {
          line: 26,
          column: 2
        },
        end: {
          line: 33,
          column: 4
        }
      },
      "13": {
        start: {
          line: 36,
          column: 31
        },
        end: {
          line: 43,
          column: 2
        }
      },
      "14": {
        start: {
          line: 36,
          column: 87
        },
        end: {
          line: 43,
          column: 2
        }
      },
      "15": {
        start: {
          line: 38,
          column: 38
        },
        end: {
          line: 38,
          column: 67
        }
      },
      "16": {
        start: {
          line: 39,
          column: 4
        },
        end: {
          line: 41,
          column: 5
        }
      },
      "17": {
        start: {
          line: 40,
          column: 6
        },
        end: {
          line: 40,
          column: 42
        }
      }
    },
    fnMap: {
      "0": {
        name: "(anonymous_0)",
        decl: {
          start: {
            line: 7,
            column: 45
          },
          end: {
            line: 7,
            column: 46
          }
        },
        loc: {
          start: {
            line: 7,
            column: 64
          },
          end: {
            line: 34,
            column: 1
          }
        },
        line: 7
      },
      "1": {
        name: "(anonymous_1)",
        decl: {
          start: {
            line: 7,
            column: 64
          },
          end: {
            line: 7,
            column: 65
          }
        },
        loc: {
          start: {
            line: 7,
            column: 88
          },
          end: {
            line: 34,
            column: 1
          }
        },
        line: 7
      },
      "2": {
        name: "(anonymous_2)",
        decl: {
          start: {
            line: 36,
            column: 31
          },
          end: {
            line: 36,
            column: 32
          }
        },
        loc: {
          start: {
            line: 36,
            column: 87
          },
          end: {
            line: 43,
            column: 2
          }
        },
        line: 36
      },
      "3": {
        name: "(anonymous_3)",
        decl: {
          start: {
            line: 37,
            column: 2
          },
          end: {
            line: 37,
            column: 3
          }
        },
        loc: {
          start: {
            line: 37,
            column: 19
          },
          end: {
            line: 42,
            column: 3
          }
        },
        line: 37
      }
    },
    branchMap: {
      "0": {
        loc: {
          start: {
            line: 13,
            column: 2
          },
          end: {
            line: 24,
            column: 3
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 13,
            column: 2
          },
          end: {
            line: 24,
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
        line: 13
      },
      "1": {
        loc: {
          start: {
            line: 16,
            column: 4
          },
          end: {
            line: 19,
            column: 5
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 16,
            column: 4
          },
          end: {
            line: 19,
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
        line: 16
      },
      "2": {
        loc: {
          start: {
            line: 21,
            column: 4
          },
          end: {
            line: 23,
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
            line: 23,
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
      "3": {
        loc: {
          start: {
            line: 39,
            column: 4
          },
          end: {
            line: 41,
            column: 5
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 39,
            column: 4
          },
          end: {
            line: 41,
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
        line: 39
      },
      "4": {
        loc: {
          start: {
            line: 39,
            column: 8
          },
          end: {
            line: 39,
            column: 86
          }
        },
        type: "binary-expr",
        locations: [{
          start: {
            line: 39,
            column: 8
          },
          end: {
            line: 39,
            column: 43
          }
        }, {
          start: {
            line: 39,
            column: 47
          },
          end: {
            line: 39,
            column: 86
          }
        }],
        line: 39
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
      "17": 0
    },
    f: {
      "0": 0,
      "1": 0,
      "2": 0,
      "3": 0
    },
    b: {
      "0": [0, 0],
      "1": [0, 0],
      "2": [0, 0],
      "3": [0, 0],
      "4": [0, 0]
    },
    _coverageSchema: "1a1c01bbd47fc00a2c39e90264f33305004495a9",
    hash: "b324bcf3b472161cf486e676236c6ed796b69b78"
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




cov_lnx6a7y33().s[0]++;
const createPostMessage = moduleDefined => {
  cov_lnx6a7y33().f[0]++;
  cov_lnx6a7y33().s[1]++;
  return async (event, value) => {
    cov_lnx6a7y33().f[1]++;
    const middlewares = (cov_lnx6a7y33().s[2]++, _connector__WEBPACK_IMPORTED_MODULE_0__["default"].getMiddlewares());
    const logger = (cov_lnx6a7y33().s[3]++, (0,_logger__WEBPACK_IMPORTED_MODULE_1__["default"])(moduleDefined));
    let next = (cov_lnx6a7y33().s[4]++, {
      trigger: moduleDefined,
      event,
      value
    });
    cov_lnx6a7y33().s[5]++;
    if (middlewares?.onMessage) {
      cov_lnx6a7y33().b[0][0]++;
      const check = (cov_lnx6a7y33().s[6]++, await middlewares.onMessage(next));
      cov_lnx6a7y33().s[7]++;
      if (check === false) {
        cov_lnx6a7y33().b[1][0]++;
        cov_lnx6a7y33().s[8]++;
        logger.warn('blocked by middleware', 'POST_MESSAGE');
        cov_lnx6a7y33().s[9]++;
        return;
      } else {
        cov_lnx6a7y33().b[1][1]++;
      }
      cov_lnx6a7y33().s[10]++;
      if (check !== true) {
        cov_lnx6a7y33().b[2][0]++;
        cov_lnx6a7y33().s[11]++;
        next = {
          ...next,
          ...check
        };
      } else {
        cov_lnx6a7y33().b[2][1]++;
      }
    } else {
      cov_lnx6a7y33().b[0][1]++;
    }
    cov_lnx6a7y33().s[12]++;
    (0,_store__WEBPACK_IMPORTED_MODULE_2__.emit)({
      [_config__WEBPACK_IMPORTED_MODULE_3__.MESSAGE_KEY]: {
        timestamp: +new Date(),
        event: next.event,
        trigger: moduleDefined,
        value: next.value
      }
    });
  };
};
cov_lnx6a7y33().s[13]++;
const createOnMessage = (moduleDefined, onMessage) => {
  cov_lnx6a7y33().f[2]++;
  cov_lnx6a7y33().s[14]++;
  return (0,_store__WEBPACK_IMPORTED_MODULE_2__.subscribe)({
    [_config__WEBPACK_IMPORTED_MODULE_3__.MESSAGE_KEY](v) {
      cov_lnx6a7y33().f[3]++;
      const {
        trigger,
        value,
        event
      } = (cov_lnx6a7y33().s[15]++, v);
      cov_lnx6a7y33().s[16]++;
      if ((cov_lnx6a7y33().b[4][0]++, moduleDefined.name !== trigger.name) || (cov_lnx6a7y33().b[4][1]++, moduleDefined.module !== trigger.module)) {
        cov_lnx6a7y33().b[3][0]++;
        cov_lnx6a7y33().s[17]++;
        onMessage({
          event,
          value,
          trigger
        });
      } else {
        cov_lnx6a7y33().b[3][1]++;
      }
    }
  });
};

/***/ }),

/***/ "./src/core/react-component.tsx":
/*!**************************************!*\
  !*** ./src/core/react-component.tsx ***!
  \**************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _helper__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./helper */ "./src/core/helper.ts");
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./store */ "./src/core/store.ts");
/* harmony import */ var _connector__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./connector */ "./src/core/connector.ts");
/* harmony import */ var _message__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./message */ "./src/core/message.ts");
/* harmony import */ var _dispatch__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./dispatch */ "./src/core/dispatch.ts");
/* harmony import */ var _logger__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./logger */ "./src/core/logger.ts");
/* harmony import */ var _i18n__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./i18n */ "./src/core/i18n.ts");
/* harmony import */ var _create_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./create-module */ "./src/core/create-module.ts");

function cov_lzt2md0n8() {
  var path = "/Users/am0200/Documents/github/various/src/core/react-component.tsx";
  var hash = "33116c5839d337df8fbbe32a39291068c8b00c80";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "/Users/am0200/Documents/github/various/src/core/react-component.tsx",
    statementMap: {
      "0": {
        start: {
          line: 41,
          column: 6
        },
        end: {
          line: 41,
          column: 12
        }
      },
      "1": {
        start: {
          line: 42,
          column: 21
        },
        end: {
          line: 42,
          column: 57
        }
      },
      "2": {
        start: {
          line: 48,
          column: 25
        },
        end: {
          line: 48,
          column: 50
        }
      },
      "3": {
        start: {
          line: 50,
          column: 12
        },
        end: {
          line: 53,
          column: 5
        }
      },
      "4": {
        start: {
          line: 61,
          column: 33
        },
        end: {
          line: 61,
          column: 54
        }
      },
      "5": {
        start: {
          line: 61,
          column: 39
        },
        end: {
          line: 61,
          column: 54
        }
      },
      "6": {
        start: {
          line: 64,
          column: 6
        },
        end: {
          line: 64,
          column: 27
        }
      },
      "7": {
        start: {
          line: 68,
          column: 6
        },
        end: {
          line: 68,
          column: 28
        }
      },
      "8": {
        start: {
          line: 69,
          column: 6
        },
        end: {
          line: 69,
          column: 31
        }
      },
      "9": {
        start: {
          line: 70,
          column: 6
        },
        end: {
          line: 70,
          column: 29
        }
      },
      "10": {
        start: {
          line: 71,
          column: 6
        },
        end: {
          line: 71,
          column: 31
        }
      },
      "11": {
        start: {
          line: 72,
          column: 6
        },
        end: {
          line: 72,
          column: 46
        }
      },
      "12": {
        start: {
          line: 75,
          column: 21
        },
        end: {
          line: 108,
          column: 5
        }
      },
      "13": {
        start: {
          line: 76,
          column: 6
        },
        end: {
          line: 107,
          column: 7
        }
      },
      "14": {
        start: {
          line: 77,
          column: 30
        },
        end: {
          line: 77,
          column: 97
        }
      },
      "15": {
        start: {
          line: 79,
          column: 8
        },
        end: {
          line: 81,
          column: 9
        }
      },
      "16": {
        start: {
          line: 80,
          column: 10
        },
        end: {
          line: 80,
          column: 16
        }
      },
      "17": {
        start: {
          line: 83,
          column: 8
        },
        end: {
          line: 83,
          column: 66
        }
      },
      "18": {
        start: {
          line: 85,
          column: 8
        },
        end: {
          line: 85,
          column: 71
        }
      },
      "19": {
        start: {
          line: 87,
          column: 8
        },
        end: {
          line: 87,
          column: 48
        }
      },
      "20": {
        start: {
          line: 89,
          column: 8
        },
        end: {
          line: 94,
          column: 10
        }
      },
      "21": {
        start: {
          line: 93,
          column: 28
        },
        end: {
          line: 93,
          column: 46
        }
      },
      "22": {
        start: {
          line: 96,
          column: 8
        },
        end: {
          line: 96,
          column: 42
        }
      },
      "23": {
        start: {
          line: 97,
          column: 8
        },
        end: {
          line: 97,
          column: 47
        }
      },
      "24": {
        start: {
          line: 99,
          column: 8
        },
        end: {
          line: 99,
          column: 21
        }
      },
      "25": {
        start: {
          line: 101,
          column: 8
        },
        end: {
          line: 103,
          column: 9
        }
      },
      "26": {
        start: {
          line: 102,
          column: 10
        },
        end: {
          line: 102,
          column: 16
        }
      },
      "27": {
        start: {
          line: 105,
          column: 8
        },
        end: {
          line: 105,
          column: 31
        }
      },
      "28": {
        start: {
          line: 106,
          column: 8
        },
        end: {
          line: 106,
          column: 62
        }
      },
      "29": {
        start: {
          line: 110,
          column: 19
        },
        end: {
          line: 110,
          column: 54
        }
      },
      "30": {
        start: {
          line: 112,
          column: 16
        },
        end: {
          line: 112,
          column: 48
        }
      },
      "31": {
        start: {
          line: 114,
          column: 9
        },
        end: {
          line: 114,
          column: 63
        }
      },
      "32": {
        start: {
          line: 114,
          column: 44
        },
        end: {
          line: 114,
          column: 62
        }
      },
      "33": {
        start: {
          line: 116,
          column: 14
        },
        end: {
          line: 116,
          column: 44
        }
      },
      "34": {
        start: {
          line: 118,
          column: 12
        },
        end: {
          line: 118,
          column: 46
        }
      },
      "35": {
        start: {
          line: 121,
          column: 23
        },
        end: {
          line: 121,
          column: 55
        }
      },
      "36": {
        start: {
          line: 122,
          column: 49
        },
        end: {
          line: 122,
          column: 59
        }
      },
      "37": {
        start: {
          line: 123,
          column: 42
        },
        end: {
          line: 123,
          column: 52
        }
      },
      "38": {
        start: {
          line: 124,
          column: 20
        },
        end: {
          line: 124,
          column: 34
        }
      },
      "39": {
        start: {
          line: 125,
          column: 28
        },
        end: {
          line: 125,
          column: 67
        }
      },
      "40": {
        start: {
          line: 127,
          column: 6
        },
        end: {
          line: 129,
          column: 7
        }
      },
      "41": {
        start: {
          line: 128,
          column: 8
        },
        end: {
          line: 128,
          column: 24
        }
      },
      "42": {
        start: {
          line: 131,
          column: 6
        },
        end: {
          line: 142,
          column: 7
        }
      },
      "43": {
        start: {
          line: 132,
          column: 8
        },
        end: {
          line: 134,
          column: 9
        }
      },
      "44": {
        start: {
          line: 133,
          column: 10
        },
        end: {
          line: 133,
          column: 21
        }
      },
      "45": {
        start: {
          line: 136,
          column: 8
        },
        end: {
          line: 141,
          column: 9
        }
      },
      "46": {
        start: {
          line: 144,
          column: 6
        },
        end: {
          line: 155,
          column: 7
        }
      },
      "47": {
        start: {
          line: 159,
          column: 20
        },
        end: {
          line: 159,
          column: 44
        }
      },
      "48": {
        start: {
          line: 160,
          column: 2
        },
        end: {
          line: 160,
          column: 45
        }
      },
      "49": {
        start: {
          line: 162,
          column: 2
        },
        end: {
          line: 162,
          column: 18
        }
      }
    },
    fnMap: {
      "0": {
        name: "reactComponent",
        decl: {
          start: {
            line: 30,
            column: 9
          },
          end: {
            line: 30,
            column: 23
          }
        },
        loc: {
          start: {
            line: 34,
            column: 3
          },
          end: {
            line: 163,
            column: 1
          }
        },
        line: 34
      },
      "1": {
        name: "(anonymous_1)",
        decl: {
          start: {
            line: 61,
            column: 33
          },
          end: {
            line: 61,
            column: 34
          }
        },
        loc: {
          start: {
            line: 61,
            column: 39
          },
          end: {
            line: 61,
            column: 54
          }
        },
        line: 61
      },
      "2": {
        name: "(anonymous_2)",
        decl: {
          start: {
            line: 63,
            column: 4
          },
          end: {
            line: 63,
            column: 5
          }
        },
        loc: {
          start: {
            line: 63,
            column: 24
          },
          end: {
            line: 65,
            column: 5
          }
        },
        line: 63
      },
      "3": {
        name: "(anonymous_3)",
        decl: {
          start: {
            line: 67,
            column: 4
          },
          end: {
            line: 67,
            column: 5
          }
        },
        loc: {
          start: {
            line: 67,
            column: 27
          },
          end: {
            line: 73,
            column: 5
          }
        },
        line: 67
      },
      "4": {
        name: "(anonymous_4)",
        decl: {
          start: {
            line: 75,
            column: 21
          },
          end: {
            line: 75,
            column: 22
          }
        },
        loc: {
          start: {
            line: 75,
            column: 33
          },
          end: {
            line: 108,
            column: 5
          }
        },
        line: 75
      },
      "5": {
        name: "(anonymous_5)",
        decl: {
          start: {
            line: 93,
            column: 22
          },
          end: {
            line: 93,
            column: 23
          }
        },
        loc: {
          start: {
            line: 93,
            column: 28
          },
          end: {
            line: 93,
            column: 46
          }
        },
        line: 93
      },
      "6": {
        name: "(anonymous_6)",
        decl: {
          start: {
            line: 114,
            column: 38
          },
          end: {
            line: 114,
            column: 39
          }
        },
        loc: {
          start: {
            line: 114,
            column: 44
          },
          end: {
            line: 114,
            column: 62
          }
        },
        line: 114
      },
      "7": {
        name: "(anonymous_7)",
        decl: {
          start: {
            line: 120,
            column: 4
          },
          end: {
            line: 120,
            column: 5
          }
        },
        loc: {
          start: {
            line: 120,
            column: 13
          },
          end: {
            line: 156,
            column: 5
          }
        },
        line: 120
      }
    },
    branchMap: {
      "0": {
        loc: {
          start: {
            line: 42,
            column: 21
          },
          end: {
            line: 42,
            column: 57
          }
        },
        type: "binary-expr",
        locations: [{
          start: {
            line: 42,
            column: 21
          },
          end: {
            line: 42,
            column: 30
          }
        }, {
          start: {
            line: 42,
            column: 34
          },
          end: {
            line: 42,
            column: 57
          }
        }],
        line: 42
      },
      "1": {
        loc: {
          start: {
            line: 79,
            column: 8
          },
          end: {
            line: 81,
            column: 9
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 79,
            column: 8
          },
          end: {
            line: 81,
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
        line: 79
      },
      "2": {
        loc: {
          start: {
            line: 101,
            column: 8
          },
          end: {
            line: 103,
            column: 9
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 101,
            column: 8
          },
          end: {
            line: 103,
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
        line: 101
      },
      "3": {
        loc: {
          start: {
            line: 127,
            column: 6
          },
          end: {
            line: 129,
            column: 7
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 127,
            column: 6
          },
          end: {
            line: 129,
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
        line: 127
      },
      "4": {
        loc: {
          start: {
            line: 131,
            column: 6
          },
          end: {
            line: 142,
            column: 7
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 131,
            column: 6
          },
          end: {
            line: 142,
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
        line: 131
      },
      "5": {
        loc: {
          start: {
            line: 132,
            column: 8
          },
          end: {
            line: 134,
            column: 9
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 132,
            column: 8
          },
          end: {
            line: 134,
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
        line: 132
      },
      "6": {
        loc: {
          start: {
            line: 132,
            column: 12
          },
          end: {
            line: 132,
            column: 43
          }
        },
        type: "binary-expr",
        locations: [{
          start: {
            line: 132,
            column: 12
          },
          end: {
            line: 132,
            column: 19
          }
        }, {
          start: {
            line: 132,
            column: 23
          },
          end: {
            line: 132,
            column: 43
          }
        }],
        line: 132
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
      "49": 0
    },
    f: {
      "0": 0,
      "1": 0,
      "2": 0,
      "3": 0,
      "4": 0,
      "5": 0,
      "6": 0,
      "7": 0
    },
    b: {
      "0": [0, 0],
      "1": [0, 0],
      "2": [0, 0],
      "3": [0, 0],
      "4": [0, 0],
      "5": [0, 0],
      "6": [0, 0]
    },
    _coverageSchema: "1a1c01bbd47fc00a2c39e90264f33305004495a9",
    hash: "33116c5839d337df8fbbe32a39291068c8b00c80"
  };
  var coverage = global[gcv] || (global[gcv] = {});
  if (!coverage[path] || coverage[path].hash !== hash) {
    coverage[path] = coverageData;
  }
  var actualCoverage = coverage[path];
  {
    // @ts-ignore
    cov_lzt2md0n8 = function () {
      return actualCoverage;
    };
  }
  return actualCoverage;
}
cov_lzt2md0n8();









function reactComponent(config) {
  cov_lzt2md0n8().f[0]++;
  const {
    name,
    module,
    url,
    watchKeys,
    onMounted
  } = (cov_lzt2md0n8().s[0]++, config);
  const storeKeys = (cov_lzt2md0n8().s[1]++, (cov_lzt2md0n8().b[0][0]++, watchKeys) || (cov_lzt2md0n8().b[0][1]++, Object.keys((0,_store__WEBPACK_IMPORTED_MODULE_3__.getStore)())));
  class R extends react__WEBPACK_IMPORTED_MODULE_1__.Component {
    static displayName = (cov_lzt2md0n8().s[2]++, 'various-react-component');
    state = (cov_lzt2md0n8().s[3]++, {
      componentReady: false,
      isError: false
    });
    unSubscribeMessage = (cov_lzt2md0n8().s[4]++, () => {
      cov_lzt2md0n8().f[1]++;
      cov_lzt2md0n8().s[5]++;
      return null;
    });
    componentDidMount() {
      cov_lzt2md0n8().f[2]++;
      cov_lzt2md0n8().s[6]++;
      this.mountComponent();
    }
    componentWillUnmount() {
      cov_lzt2md0n8().f[3]++;
      cov_lzt2md0n8().s[7]++;
      this.error = undefined;
      cov_lzt2md0n8().s[8]++;
      this.ComponentNode = null;
      cov_lzt2md0n8().s[9]++;
      this.isUnMounted = true;
      cov_lzt2md0n8().s[10]++;
      this.unSubscribeMessage();
      cov_lzt2md0n8().s[11]++;
      (0,_helper__WEBPACK_IMPORTED_MODULE_2__.updateUnMountComponent)({
        name,
        module
      });
    }
    mountComponent = (cov_lzt2md0n8().s[12]++, async () => {
      cov_lzt2md0n8().f[4]++;
      cov_lzt2md0n8().s[13]++;
      try {
        const componentNode = (cov_lzt2md0n8().s[14]++, await (0,_create_module__WEBPACK_IMPORTED_MODULE_9__["default"])({
          name,
          module,
          url
        }, false));
        cov_lzt2md0n8().s[15]++;
        if (this.isUnMounted) {
          cov_lzt2md0n8().b[1][0]++;
          cov_lzt2md0n8().s[16]++;
          return;
        } else {
          cov_lzt2md0n8().b[1][1]++;
        }
        cov_lzt2md0n8().s[17]++;
        await (0,_helper__WEBPACK_IMPORTED_MODULE_2__.checkReactComponent)(componentNode, {
          name,
          module
        });
        cov_lzt2md0n8().s[18]++;
        componentNode.displayName = (0,_helper__WEBPACK_IMPORTED_MODULE_2__.getNameWithModule)({
          name,
          module
        });
        cov_lzt2md0n8().s[19]++;
        (0,_helper__WEBPACK_IMPORTED_MODULE_2__.updateMountedComponent)({
          name,
          module
        });
        cov_lzt2md0n8().s[20]++;
        this.unSubscribeMessage = (0,_helper__WEBPACK_IMPORTED_MODULE_2__.parseComponentActions)({
          componentNode,
          name,
          module,
          i18nUpdate: () => {
            cov_lzt2md0n8().f[5]++;
            cov_lzt2md0n8().s[21]++;
            return this.forceUpdate();
          }
        });
        cov_lzt2md0n8().s[22]++;
        this.ComponentNode = componentNode;
        cov_lzt2md0n8().s[23]++;
        this.setState({
          componentReady: true
        });
        cov_lzt2md0n8().s[24]++;
        onMounted?.();
      } catch (e) {
        cov_lzt2md0n8().s[25]++;
        if (this.isUnMounted) {
          cov_lzt2md0n8().b[2][0]++;
          cov_lzt2md0n8().s[26]++;
          return;
        } else {
          cov_lzt2md0n8().b[2][1]++;
        }
        cov_lzt2md0n8().s[27]++;
        this.error = e;
        cov_lzt2md0n8().s[28]++;
        this.setState({
          componentReady: true,
          isError: true
        });
      }
    });
    $postMessage = (cov_lzt2md0n8().s[29]++, (0,_message__WEBPACK_IMPORTED_MODULE_5__.createPostMessage)({
      name,
      module
    }));
    $dispatch = (cov_lzt2md0n8().s[30]++, (0,_dispatch__WEBPACK_IMPORTED_MODULE_6__["default"])({
      name,
      module
    }));
    $t = (cov_lzt2md0n8().s[31]++, (0,_i18n__WEBPACK_IMPORTED_MODULE_8__.createI18n)({
      name,
      module
    }, () => {
      cov_lzt2md0n8().f[6]++;
      cov_lzt2md0n8().s[32]++;
      return this.forceUpdate();
    }));
    $logger = (cov_lzt2md0n8().s[33]++, (0,_logger__WEBPACK_IMPORTED_MODULE_7__["default"])({
      name,
      module
    }));
    $self = (cov_lzt2md0n8().s[34]++, (0,_helper__WEBPACK_IMPORTED_MODULE_2__.getSelfInfo)({
      name,
      module,
      url
    }));
    render() {
      cov_lzt2md0n8().f[7]++;
      const Fallback = (cov_lzt2md0n8().s[35]++, _connector__WEBPACK_IMPORTED_MODULE_4__["default"].getFallbackComponent());
      const {
        $silent,
        $componentProps,
        $ref
      } = (cov_lzt2md0n8().s[36]++, this.props);
      const {
        componentReady,
        isError
      } = (cov_lzt2md0n8().s[37]++, this.state);
      const store = (cov_lzt2md0n8().s[38]++, (0,_store__WEBPACK_IMPORTED_MODULE_3__.getUserStore)());
      const ComponentNode = (cov_lzt2md0n8().s[39]++, this.ComponentNode);
      cov_lzt2md0n8().s[40]++;
      if (isError) {
        cov_lzt2md0n8().b[3][0]++;
        cov_lzt2md0n8().s[41]++;
        throw this.error;
      } else {
        cov_lzt2md0n8().b[3][1]++;
      }
      cov_lzt2md0n8().s[42]++;
      if (!componentReady) {
        cov_lzt2md0n8().b[4][0]++;
        cov_lzt2md0n8().s[43]++;
        if ((cov_lzt2md0n8().b[6][0]++, $silent) || (cov_lzt2md0n8().b[6][1]++, (0,_helper__WEBPACK_IMPORTED_MODULE_2__.isModuleLoaded)(name))) {
          cov_lzt2md0n8().b[5][0]++;
          cov_lzt2md0n8().s[44]++;
          return null;
        } else {
          cov_lzt2md0n8().b[5][1]++;
        }
        cov_lzt2md0n8().s[45]++;
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(Fallback, {
          $self: this.$self,
          $store: store
        });
      } else {
        cov_lzt2md0n8().b[4][1]++;
      }
      cov_lzt2md0n8().s[46]++;
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(ComponentNode, (0,_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, $componentProps, {
        $self: this.$self,
        $dispatch: this.$dispatch,
        $store: store,
        $postMessage: this.$postMessage,
        $t: this.$t,
        $logger: this.$logger,
        ref: $ref
      }));
    }
  }
  const Connected = (cov_lzt2md0n8().s[47]++, (0,_store__WEBPACK_IMPORTED_MODULE_3__.connect)(...storeKeys)(R));
  cov_lzt2md0n8().s[48]++;
  Connected.displayName = 'various-connector';
  cov_lzt2md0n8().s[49]++;
  return Connected;
}
/* harmony default export */ __webpack_exports__["default"] = (reactComponent);

/***/ }),

/***/ "./src/core/render-component.tsx":
/*!***************************************!*\
  !*** ./src/core/render-component.tsx ***!
  \***************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_dom_client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom/client */ "react-dom/client");
/* harmony import */ var react_dom_client__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_dom_client__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _react_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./react-component */ "./src/core/react-component.tsx");
/* harmony import */ var _vue_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./vue-component */ "./src/core/vue-component.tsx");
/* harmony import */ var _helper__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./helper */ "./src/core/helper.ts");
/* harmony import */ var _error_boundary__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./error-boundary */ "./src/core/error-boundary.tsx");
function cov_vbqo6ynu0() {
  var path = "/Users/am0200/Documents/github/various/src/core/render-component.tsx";
  var hash = "0b5b4efe1cdb225015cbedf4f91dc14847f2847a";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "/Users/am0200/Documents/github/various/src/core/render-component.tsx",
    statementMap: {
      "0": {
        start: {
          line: 9,
          column: 35
        },
        end: {
          line: 53,
          column: 1
        }
      },
      "1": {
        start: {
          line: 19,
          column: 12
        },
        end: {
          line: 24,
          column: 4
        }
      },
      "2": {
        start: {
          line: 26,
          column: 2
        },
        end: {
          line: 52,
          column: 3
        }
      },
      "3": {
        start: {
          line: 27,
          column: 17
        },
        end: {
          line: 27,
          column: 46
        }
      },
      "4": {
        start: {
          line: 28,
          column: 39
        },
        end: {
          line: 28,
          column: 50
        }
      },
      "5": {
        start: {
          line: 29,
          column: 27
        },
        end: {
          line: 29,
          column: 67
        }
      },
      "6": {
        start: {
          line: 31,
          column: 6
        },
        end: {
          line: 33,
          column: 22
        }
      },
      "7": {
        start: {
          line: 36,
          column: 4
        },
        end: {
          line: 36,
          column: 53
        }
      },
      "8": {
        start: {
          line: 38,
          column: 4
        },
        end: {
          line: 43,
          column: 6
        }
      },
      "9": {
        start: {
          line: 38,
          column: 17
        },
        end: {
          line: 43,
          column: 6
        }
      },
      "10": {
        start: {
          line: 39,
          column: 6
        },
        end: {
          line: 42,
          column: 8
        }
      },
      "11": {
        start: {
          line: 40,
          column: 8
        },
        end: {
          line: 40,
          column: 22
        }
      },
      "12": {
        start: {
          line: 41,
          column: 8
        },
        end: {
          line: 41,
          column: 17
        }
      },
      "13": {
        start: {
          line: 45,
          column: 4
        },
        end: {
          line: 50,
          column: 7
        }
      },
      "14": {
        start: {
          line: 51,
          column: 4
        },
        end: {
          line: 51,
          column: 34
        }
      },
      "15": {
        start: {
          line: 51,
          column: 17
        },
        end: {
          line: 51,
          column: 34
        }
      }
    },
    fnMap: {
      "0": {
        name: "(anonymous_0)",
        decl: {
          start: {
            line: 9,
            column: 35
          },
          end: {
            line: 9,
            column: 36
          }
        },
        loc: {
          start: {
            line: 18,
            column: 6
          },
          end: {
            line: 53,
            column: 1
          }
        },
        line: 18
      },
      "1": {
        name: "(anonymous_1)",
        decl: {
          start: {
            line: 38,
            column: 11
          },
          end: {
            line: 38,
            column: 12
          }
        },
        loc: {
          start: {
            line: 38,
            column: 17
          },
          end: {
            line: 43,
            column: 6
          }
        },
        line: 38
      },
      "2": {
        name: "(anonymous_2)",
        decl: {
          start: {
            line: 38,
            column: 35
          },
          end: {
            line: 38,
            column: 36
          }
        },
        loc: {
          start: {
            line: 38,
            column: 48
          },
          end: {
            line: 43,
            column: 5
          }
        },
        line: 38
      },
      "3": {
        name: "(anonymous_3)",
        decl: {
          start: {
            line: 39,
            column: 17
          },
          end: {
            line: 39,
            column: 18
          }
        },
        loc: {
          start: {
            line: 39,
            column: 23
          },
          end: {
            line: 42,
            column: 7
          }
        },
        line: 39
      },
      "4": {
        name: "(anonymous_4)",
        decl: {
          start: {
            line: 51,
            column: 11
          },
          end: {
            line: 51,
            column: 12
          }
        },
        loc: {
          start: {
            line: 51,
            column: 17
          },
          end: {
            line: 51,
            column: 34
          }
        },
        line: 51
      }
    },
    branchMap: {
      "0": {
        loc: {
          start: {
            line: 15,
            column: 2
          },
          end: {
            line: 15,
            column: 16
          }
        },
        type: "default-arg",
        locations: [{
          start: {
            line: 15,
            column: 9
          },
          end: {
            line: 15,
            column: 16
          }
        }],
        line: 15
      },
      "1": {
        loc: {
          start: {
            line: 19,
            column: 13
          },
          end: {
            line: 19,
            column: 72
          }
        },
        type: "cond-expr",
        locations: [{
          start: {
            line: 19,
            column: 31
          },
          end: {
            line: 19,
            column: 49
          }
        }, {
          start: {
            line: 19,
            column: 52
          },
          end: {
            line: 19,
            column: 72
          }
        }],
        line: 19
      },
      "2": {
        loc: {
          start: {
            line: 28,
            column: 39
          },
          end: {
            line: 28,
            column: 50
          }
        },
        type: "binary-expr",
        locations: [{
          start: {
            line: 28,
            column: 39
          },
          end: {
            line: 28,
            column: 44
          }
        }, {
          start: {
            line: 28,
            column: 48
          },
          end: {
            line: 28,
            column: 50
          }
        }],
        line: 28
      },
      "3": {
        loc: {
          start: {
            line: 36,
            column: 16
          },
          end: {
            line: 36,
            column: 52
          }
        },
        type: "cond-expr",
        locations: [{
          start: {
            line: 36,
            column: 29
          },
          end: {
            line: 36,
            column: 45
          }
        }, {
          start: {
            line: 36,
            column: 48
          },
          end: {
            line: 36,
            column: 52
          }
        }],
        line: 36
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
      "15": 0
    },
    f: {
      "0": 0,
      "1": 0,
      "2": 0,
      "3": 0,
      "4": 0
    },
    b: {
      "0": [0],
      "1": [0, 0],
      "2": [0, 0],
      "3": [0, 0]
    },
    _coverageSchema: "1a1c01bbd47fc00a2c39e90264f33305004495a9",
    hash: "0b5b4efe1cdb225015cbedf4f91dc14847f2847a"
  };
  var coverage = global[gcv] || (global[gcv] = {});
  if (!coverage[path] || coverage[path].hash !== hash) {
    coverage[path] = coverageData;
  }
  var actualCoverage = coverage[path];
  {
    // @ts-ignore
    cov_vbqo6ynu0 = function () {
      return actualCoverage;
    };
  }
  return actualCoverage;
}
cov_vbqo6ynu0();






cov_vbqo6ynu0().s[0]++;
const renderComponent = ({
  name,
  module,
  url,
  target,
  props,
  type = (cov_vbqo6ynu0().b[0][0]++, 'react'),
  renderNode,
  onMounted
}) => {
  cov_vbqo6ynu0().f[0]++;
  const C = (cov_vbqo6ynu0().s[1]++, (type === 'vue3' ? (cov_vbqo6ynu0().b[1][0]++, _vue_component__WEBPACK_IMPORTED_MODULE_3__["default"]) : (cov_vbqo6ynu0().b[1][1]++, _react_component__WEBPACK_IMPORTED_MODULE_2__["default"]))({
    name,
    module,
    url,
    onMounted
  }));
  cov_vbqo6ynu0().s[2]++;
  try {
    const root = (cov_vbqo6ynu0().s[3]++, (0,react_dom_client__WEBPACK_IMPORTED_MODULE_1__.createRoot)(target));
    const {
      $silent,
      $ref,
      ...rest
    } = (cov_vbqo6ynu0().s[4]++, (cov_vbqo6ynu0().b[2][0]++, props) || (cov_vbqo6ynu0().b[2][1]++, {}));
    const nextProps = (cov_vbqo6ynu0().s[5]++, {
      $componentProps: rest,
      $silent,
      $ref
    });
    const node = (cov_vbqo6ynu0().s[6]++, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_error_boundary__WEBPACK_IMPORTED_MODULE_5__["default"], {
      name: name,
      module: module,
      url: url
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(C, nextProps)));
    cov_vbqo6ynu0().s[7]++;
    root.render(renderNode ? (cov_vbqo6ynu0().b[3][0]++, renderNode(node)) : (cov_vbqo6ynu0().b[3][1]++, node));
    cov_vbqo6ynu0().s[8]++;
    return () => {
      cov_vbqo6ynu0().f[1]++;
      cov_vbqo6ynu0().s[9]++;
      return new Promise(resolve => {
        cov_vbqo6ynu0().f[2]++;
        cov_vbqo6ynu0().s[10]++;
        setTimeout(() => {
          cov_vbqo6ynu0().f[3]++;
          cov_vbqo6ynu0().s[11]++;
          root.unmount();
          cov_vbqo6ynu0().s[12]++;
          resolve();
        });
      });
    };
  } catch (e) {
    cov_vbqo6ynu0().s[13]++;
    (0,_helper__WEBPACK_IMPORTED_MODULE_4__.onError)(new _helper__WEBPACK_IMPORTED_MODULE_4__.VariousError({
      name,
      module,
      type: 'SCRIPT_ERROR',
      originalError: e
    }));
    cov_vbqo6ynu0().s[14]++;
    return () => {
      cov_vbqo6ynu0().f[4]++;
      cov_vbqo6ynu0().s[15]++;
      return Promise.resolve();
    };
  }
};
/* harmony default export */ __webpack_exports__["default"] = (renderComponent);

/***/ }),

/***/ "./src/core/store.ts":
/*!***************************!*\
  !*** ./src/core/store.ts ***!
  \***************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   connect: function() { return /* binding */ connect; },
/* harmony export */   createStore: function() { return /* binding */ createStore; },
/* harmony export */   dispatch: function() { return /* binding */ dispatch; },
/* harmony export */   emit: function() { return /* binding */ emit; },
/* harmony export */   getStore: function() { return /* binding */ getStore; },
/* harmony export */   getUserStore: function() { return /* binding */ getUserStore; },
/* harmony export */   subscribe: function() { return /* binding */ subscribe; },
/* harmony export */   useStore: function() { return /* binding */ useStore; }
/* harmony export */ });
/* harmony import */ var nycticorax__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! nycticorax */ "./node_modules/nycticorax/dist/index.js");
/* harmony import */ var nycticorax__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(nycticorax__WEBPACK_IMPORTED_MODULE_0__);
function cov_174zzuftr8() {
  var path = "/Users/am0200/Documents/github/various/src/core/store.ts";
  var hash = "5d3637494675791f7794e73e529bc4529bdecb30";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "/Users/am0200/Documents/github/various/src/core/store.ts",
    statementMap: {
      "0": {
        start: {
          line: 12,
          column: 4
        },
        end: {
          line: 12,
          column: 27
        }
      },
      "1": {
        start: {
          line: 15,
          column: 22
        },
        end: {
          line: 15,
          column: 32
        }
      },
      "2": {
        start: {
          line: 16,
          column: 15
        },
        end: {
          line: 16,
          column: 39
        }
      },
      "3": {
        start: {
          line: 17,
          column: 37
        },
        end: {
          line: 17,
          column: 39
        }
      },
      "4": {
        start: {
          line: 19,
          column: 2
        },
        end: {
          line: 21,
          column: 4
        }
      },
      "5": {
        start: {
          line: 20,
          column: 4
        },
        end: {
          line: 20,
          column: 33
        }
      },
      "6": {
        start: {
          line: 23,
          column: 2
        },
        end: {
          line: 23,
          column: 19
        }
      }
    },
    fnMap: {
      "0": {
        name: "getUserStore",
        decl: {
          start: {
            line: 14,
            column: 16
          },
          end: {
            line: 14,
            column: 28
          }
        },
        loc: {
          start: {
            line: 14,
            column: 54
          },
          end: {
            line: 24,
            column: 1
          }
        },
        line: 14
      },
      "1": {
        name: "(anonymous_1)",
        decl: {
          start: {
            line: 19,
            column: 15
          },
          end: {
            line: 19,
            column: 16
          }
        },
        loc: {
          start: {
            line: 19,
            column: 24
          },
          end: {
            line: 21,
            column: 3
          }
        },
        line: 19
      }
    },
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
    f: {
      "0": 0,
      "1": 0
    },
    b: {},
    _coverageSchema: "1a1c01bbd47fc00a2c39e90264f33305004495a9",
    hash: "5d3637494675791f7794e73e529bc4529bdecb30"
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

const {
  createStore,
  getStore,
  connect,
  emit,
  subscribe,
  dispatch,
  useStore
} = (cov_174zzuftr8().s[0]++, new (nycticorax__WEBPACK_IMPORTED_MODULE_0___default())());
function getUserStore() {
  cov_174zzuftr8().f[0]++;
  const globalStore = (cov_174zzuftr8().s[1]++, getStore());
  const keys = (cov_174zzuftr8().s[2]++, Object.keys(globalStore));
  const store = (cov_174zzuftr8().s[3]++, {});
  cov_174zzuftr8().s[4]++;
  keys.forEach(key => {
    cov_174zzuftr8().f[1]++;
    cov_174zzuftr8().s[5]++;
    store[key] = globalStore[key];
  });
  cov_174zzuftr8().s[6]++;
  return store;
}

/***/ }),

/***/ "./src/core/vue-component.tsx":
/*!************************************!*\
  !*** ./src/core/vue-component.tsx ***!
  \************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _connector__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./connector */ "./src/core/connector.ts");
/* harmony import */ var _create_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./create-module */ "./src/core/create-module.ts");
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./store */ "./src/core/store.ts");
/* harmony import */ var _helper__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./helper */ "./src/core/helper.ts");
/* harmony import */ var _dispatch__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./dispatch */ "./src/core/dispatch.ts");
/* harmony import */ var _logger__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./logger */ "./src/core/logger.ts");
/* harmony import */ var _message__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./message */ "./src/core/message.ts");
/* harmony import */ var _i18n__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./i18n */ "./src/core/i18n.ts");
function cov_26hgww947z() {
  var path = "/Users/am0200/Documents/github/various/src/core/vue-component.tsx";
  var hash = "48f0d3f1d32a164343208e12a27d56c9dcc5413b";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "/Users/am0200/Documents/github/various/src/core/vue-component.tsx",
    statementMap: {
      "0": {
        start: {
          line: 46,
          column: 6
        },
        end: {
          line: 46,
          column: 12
        }
      },
      "1": {
        start: {
          line: 47,
          column: 21
        },
        end: {
          line: 47,
          column: 57
        }
      },
      "2": {
        start: {
          line: 49,
          column: 65
        },
        end: {
          line: 222,
          column: 3
        }
      },
      "3": {
        start: {
          line: 50,
          column: 18
        },
        end: {
          line: 50,
          column: 40
        }
      },
      "4": {
        start: {
          line: 52,
          column: 19
        },
        end: {
          line: 52,
          column: 39
        }
      },
      "5": {
        start: {
          line: 53,
          column: 25
        },
        end: {
          line: 53,
          column: 38
        }
      },
      "6": {
        start: {
          line: 54,
          column: 21
        },
        end: {
          line: 54,
          column: 41
        }
      },
      "7": {
        start: {
          line: 55,
          column: 27
        },
        end: {
          line: 55,
          column: 40
        }
      },
      "8": {
        start: {
          line: 56,
          column: 29
        },
        end: {
          line: 56,
          column: 56
        }
      },
      "9": {
        start: {
          line: 57,
          column: 20
        },
        end: {
          line: 57,
          column: 62
        }
      },
      "10": {
        start: {
          line: 59,
          column: 28
        },
        end: {
          line: 59,
          column: 63
        }
      },
      "11": {
        start: {
          line: 60,
          column: 29
        },
        end: {
          line: 60,
          column: 62
        }
      },
      "12": {
        start: {
          line: 61,
          column: 29
        },
        end: {
          line: 61,
          column: 62
        }
      },
      "13": {
        start: {
          line: 62,
          column: 23
        },
        end: {
          line: 62,
          column: 43
        }
      },
      "14": {
        start: {
          line: 63,
          column: 34
        },
        end: {
          line: 63,
          column: 54
        }
      },
      "15": {
        start: {
          line: 64,
          column: 34
        },
        end: {
          line: 64,
          column: 54
        }
      },
      "16": {
        start: {
          line: 66,
          column: 48
        },
        end: {
          line: 66,
          column: 63
        }
      },
      "17": {
        start: {
          line: 67,
          column: 34
        },
        end: {
          line: 67,
          column: 49
        }
      },
      "18": {
        start: {
          line: 69,
          column: 21
        },
        end: {
          line: 69,
          column: 53
        }
      },
      "19": {
        start: {
          line: 70,
          column: 41
        },
        end: {
          line: 70,
          column: 46
        }
      },
      "20": {
        start: {
          line: 72,
          column: 21
        },
        end: {
          line: 127,
          column: 32
        }
      },
      "21": {
        start: {
          line: 73,
          column: 22
        },
        end: {
          line: 73,
          column: 52
        }
      },
      "22": {
        start: {
          line: 74,
          column: 24
        },
        end: {
          line: 74,
          column: 56
        }
      },
      "23": {
        start: {
          line: 75,
          column: 27
        },
        end: {
          line: 75,
          column: 62
        }
      },
      "24": {
        start: {
          line: 76,
          column: 17
        },
        end: {
          line: 78,
          column: 8
        }
      },
      "25": {
        start: {
          line: 77,
          column: 8
        },
        end: {
          line: 77,
          column: 41
        }
      },
      "26": {
        start: {
          line: 80,
          column: 6
        },
        end: {
          line: 80,
          column: 90
        }
      },
      "27": {
        start: {
          line: 81,
          column: 6
        },
        end: {
          line: 81,
          column: 80
        }
      },
      "28": {
        start: {
          line: 83,
          column: 21
        },
        end: {
          line: 122,
          column: 8
        }
      },
      "29": {
        start: {
          line: 85,
          column: 28
        },
        end: {
          line: 85,
          column: 50
        }
      },
      "30": {
        start: {
          line: 86,
          column: 10
        },
        end: {
          line: 88,
          column: 11
        }
      },
      "31": {
        start: {
          line: 87,
          column: 12
        },
        end: {
          line: 87,
          column: 32
        }
      },
      "32": {
        start: {
          line: 89,
          column: 10
        },
        end: {
          line: 91,
          column: 11
        }
      },
      "33": {
        start: {
          line: 95,
          column: 24
        },
        end: {
          line: 95,
          column: 34
        }
      },
      "34": {
        start: {
          line: 96,
          column: 10
        },
        end: {
          line: 103,
          column: 19
        }
      },
      "35": {
        start: {
          line: 104,
          column: 10
        },
        end: {
          line: 104,
          column: 26
        }
      },
      "36": {
        start: {
          line: 108,
          column: 10
        },
        end: {
          line: 120,
          column: 12
        }
      },
      "37": {
        start: {
          line: 124,
          column: 6
        },
        end: {
          line: 124,
          column: 44
        }
      },
      "38": {
        start: {
          line: 125,
          column: 6
        },
        end: {
          line: 125,
          column: 33
        }
      },
      "39": {
        start: {
          line: 126,
          column: 6
        },
        end: {
          line: 126,
          column: 49
        }
      },
      "40": {
        start: {
          line: 126,
          column: 33
        },
        end: {
          line: 126,
          column: 49
        }
      },
      "41": {
        start: {
          line: 129,
          column: 27
        },
        end: {
          line: 169,
          column: 18
        }
      },
      "42": {
        start: {
          line: 130,
          column: 6
        },
        end: {
          line: 168,
          column: 7
        }
      },
      "43": {
        start: {
          line: 131,
          column: 20
        },
        end: {
          line: 131,
          column: 67
        }
      },
      "44": {
        start: {
          line: 132,
          column: 8
        },
        end: {
          line: 132,
          column: 28
        }
      },
      "45": {
        start: {
          line: 134,
          column: 30
        },
        end: {
          line: 134,
          column: 97
        }
      },
      "46": {
        start: {
          line: 136,
          column: 8
        },
        end: {
          line: 138,
          column: 9
        }
      },
      "47": {
        start: {
          line: 137,
          column: 10
        },
        end: {
          line: 137,
          column: 16
        }
      },
      "48": {
        start: {
          line: 140,
          column: 8
        },
        end: {
          line: 140,
          column: 64
        }
      },
      "49": {
        start: {
          line: 142,
          column: 8
        },
        end: {
          line: 142,
          column: 48
        }
      },
      "50": {
        start: {
          line: 144,
          column: 8
        },
        end: {
          line: 152,
          column: 10
        }
      },
      "51": {
        start: {
          line: 150,
          column: 12
        },
        end: {
          line: 150,
          column: 45
        }
      },
      "52": {
        start: {
          line: 154,
          column: 8
        },
        end: {
          line: 154,
          column: 48
        }
      },
      "53": {
        start: {
          line: 156,
          column: 8
        },
        end: {
          line: 156,
          column: 28
        }
      },
      "54": {
        start: {
          line: 157,
          column: 8
        },
        end: {
          line: 157,
          column: 31
        }
      },
      "55": {
        start: {
          line: 159,
          column: 8
        },
        end: {
          line: 159,
          column: 21
        }
      },
      "56": {
        start: {
          line: 161,
          column: 8
        },
        end: {
          line: 163,
          column: 9
        }
      },
      "57": {
        start: {
          line: 162,
          column: 10
        },
        end: {
          line: 162,
          column: 16
        }
      },
      "58": {
        start: {
          line: 165,
          column: 8
        },
        end: {
          line: 165,
          column: 37
        }
      },
      "59": {
        start: {
          line: 166,
          column: 8
        },
        end: {
          line: 166,
          column: 31
        }
      },
      "60": {
        start: {
          line: 167,
          column: 8
        },
        end: {
          line: 167,
          column: 24
        }
      },
      "61": {
        start: {
          line: 171,
          column: 4
        },
        end: {
          line: 179,
          column: 10
        }
      },
      "62": {
        start: {
          line: 171,
          column: 20
        },
        end: {
          line: 179,
          column: 5
        }
      },
      "63": {
        start: {
          line: 172,
          column: 6
        },
        end: {
          line: 172,
          column: 34
        }
      },
      "64": {
        start: {
          line: 173,
          column: 6
        },
        end: {
          line: 173,
          column: 42
        }
      },
      "65": {
        start: {
          line: 174,
          column: 6
        },
        end: {
          line: 174,
          column: 35
        }
      },
      "66": {
        start: {
          line: 175,
          column: 6
        },
        end: {
          line: 175,
          column: 46
        }
      },
      "67": {
        start: {
          line: 176,
          column: 6
        },
        end: {
          line: 176,
          column: 28
        }
      },
      "68": {
        start: {
          line: 177,
          column: 6
        },
        end: {
          line: 177,
          column: 39
        }
      },
      "69": {
        start: {
          line: 178,
          column: 6
        },
        end: {
          line: 178,
          column: 34
        }
      },
      "70": {
        start: {
          line: 181,
          column: 4
        },
        end: {
          line: 186,
          column: 24
        }
      },
      "71": {
        start: {
          line: 182,
          column: 6
        },
        end: {
          line: 184,
          column: 7
        }
      },
      "72": {
        start: {
          line: 183,
          column: 8
        },
        end: {
          line: 183,
          column: 14
        }
      },
      "73": {
        start: {
          line: 185,
          column: 6
        },
        end: {
          line: 185,
          column: 22
        }
      },
      "74": {
        start: {
          line: 188,
          column: 4
        },
        end: {
          line: 192,
          column: 25
        }
      },
      "75": {
        start: {
          line: 189,
          column: 6
        },
        end: {
          line: 191,
          column: 7
        }
      },
      "76": {
        start: {
          line: 190,
          column: 8
        },
        end: {
          line: 190,
          column: 63
        }
      },
      "77": {
        start: {
          line: 194,
          column: 4
        },
        end: {
          line: 198,
          column: 15
        }
      },
      "78": {
        start: {
          line: 195,
          column: 6
        },
        end: {
          line: 197,
          column: 7
        }
      },
      "79": {
        start: {
          line: 196,
          column: 8
        },
        end: {
          line: 196,
          column: 53
        }
      },
      "80": {
        start: {
          line: 200,
          column: 4
        },
        end: {
          line: 202,
          column: 5
        }
      },
      "81": {
        start: {
          line: 201,
          column: 6
        },
        end: {
          line: 201,
          column: 28
        }
      },
      "82": {
        start: {
          line: 204,
          column: 4
        },
        end: {
          line: 221,
          column: 5
        }
      },
      "83": {
        start: {
          line: 224,
          column: 2
        },
        end: {
          line: 224,
          column: 53
        }
      },
      "84": {
        start: {
          line: 228,
          column: 6
        },
        end: {
          line: 228,
          column: 35
        }
      },
      "85": {
        start: {
          line: 228,
          column: 18
        },
        end: {
          line: 228,
          column: 34
        }
      },
      "86": {
        start: {
          line: 230,
          column: 2
        },
        end: {
          line: 230,
          column: 52
        }
      },
      "87": {
        start: {
          line: 232,
          column: 2
        },
        end: {
          line: 232,
          column: 21
        }
      }
    },
    fnMap: {
      "0": {
        name: "vueComponent",
        decl: {
          start: {
            line: 35,
            column: 9
          },
          end: {
            line: 35,
            column: 21
          }
        },
        loc: {
          start: {
            line: 39,
            column: 3
          },
          end: {
            line: 233,
            column: 1
          }
        },
        line: 39
      },
      "1": {
        name: "(anonymous_1)",
        decl: {
          start: {
            line: 49,
            column: 65
          },
          end: {
            line: 49,
            column: 66
          }
        },
        loc: {
          start: {
            line: 49,
            column: 76
          },
          end: {
            line: 222,
            column: 3
          }
        },
        line: 49
      },
      "2": {
        name: "(anonymous_2)",
        decl: {
          start: {
            line: 72,
            column: 33
          },
          end: {
            line: 72,
            column: 34
          }
        },
        loc: {
          start: {
            line: 72,
            column: 39
          },
          end: {
            line: 127,
            column: 5
          }
        },
        line: 72
      },
      "3": {
        name: "(anonymous_3)",
        decl: {
          start: {
            line: 76,
            column: 46
          },
          end: {
            line: 76,
            column: 47
          }
        },
        loc: {
          start: {
            line: 76,
            column: 52
          },
          end: {
            line: 78,
            column: 7
          }
        },
        line: 76
      },
      "4": {
        name: "(anonymous_4)",
        decl: {
          start: {
            line: 84,
            column: 8
          },
          end: {
            line: 84,
            column: 9
          }
        },
        loc: {
          start: {
            line: 84,
            column: 16
          },
          end: {
            line: 92,
            column: 9
          }
        },
        line: 84
      },
      "5": {
        name: "(anonymous_5)",
        decl: {
          start: {
            line: 86,
            column: 42
          },
          end: {
            line: 86,
            column: 43
          }
        },
        loc: {
          start: {
            line: 86,
            column: 48
          },
          end: {
            line: 88,
            column: 11
          }
        },
        line: 86
      },
      "6": {
        name: "(anonymous_6)",
        decl: {
          start: {
            line: 94,
            column: 8
          },
          end: {
            line: 94,
            column: 9
          }
        },
        loc: {
          start: {
            line: 94,
            column: 25
          },
          end: {
            line: 105,
            column: 9
          }
        },
        line: 94
      },
      "7": {
        name: "(anonymous_7)",
        decl: {
          start: {
            line: 107,
            column: 8
          },
          end: {
            line: 107,
            column: 9
          }
        },
        loc: {
          start: {
            line: 107,
            column: 17
          },
          end: {
            line: 121,
            column: 9
          }
        },
        line: 107
      },
      "8": {
        name: "(anonymous_8)",
        decl: {
          start: {
            line: 126,
            column: 27
          },
          end: {
            line: 126,
            column: 28
          }
        },
        loc: {
          start: {
            line: 126,
            column: 33
          },
          end: {
            line: 126,
            column: 49
          }
        },
        line: 126
      },
      "9": {
        name: "(anonymous_9)",
        decl: {
          start: {
            line: 129,
            column: 39
          },
          end: {
            line: 129,
            column: 40
          }
        },
        loc: {
          start: {
            line: 129,
            column: 51
          },
          end: {
            line: 169,
            column: 5
          }
        },
        line: 129
      },
      "10": {
        name: "(anonymous_10)",
        decl: {
          start: {
            line: 149,
            column: 10
          },
          end: {
            line: 149,
            column: 11
          }
        },
        loc: {
          start: {
            line: 149,
            column: 23
          },
          end: {
            line: 151,
            column: 11
          }
        },
        line: 149
      },
      "11": {
        name: "(anonymous_11)",
        decl: {
          start: {
            line: 171,
            column: 14
          },
          end: {
            line: 171,
            column: 15
          }
        },
        loc: {
          start: {
            line: 171,
            column: 20
          },
          end: {
            line: 179,
            column: 5
          }
        },
        line: 171
      },
      "12": {
        name: "(anonymous_12)",
        decl: {
          start: {
            line: 171,
            column: 20
          },
          end: {
            line: 171,
            column: 21
          }
        },
        loc: {
          start: {
            line: 171,
            column: 26
          },
          end: {
            line: 179,
            column: 5
          }
        },
        line: 171
      },
      "13": {
        name: "(anonymous_13)",
        decl: {
          start: {
            line: 181,
            column: 14
          },
          end: {
            line: 181,
            column: 15
          }
        },
        loc: {
          start: {
            line: 181,
            column: 20
          },
          end: {
            line: 186,
            column: 5
          }
        },
        line: 181
      },
      "14": {
        name: "(anonymous_14)",
        decl: {
          start: {
            line: 188,
            column: 14
          },
          end: {
            line: 188,
            column: 15
          }
        },
        loc: {
          start: {
            line: 188,
            column: 20
          },
          end: {
            line: 192,
            column: 5
          }
        },
        line: 188
      },
      "15": {
        name: "(anonymous_15)",
        decl: {
          start: {
            line: 194,
            column: 14
          },
          end: {
            line: 194,
            column: 15
          }
        },
        loc: {
          start: {
            line: 194,
            column: 20
          },
          end: {
            line: 198,
            column: 5
          }
        },
        line: 194
      },
      "16": {
        name: "(anonymous_16)",
        decl: {
          start: {
            line: 228,
            column: 6
          },
          end: {
            line: 228,
            column: 7
          }
        },
        loc: {
          start: {
            line: 228,
            column: 18
          },
          end: {
            line: 228,
            column: 34
          }
        },
        line: 228
      }
    },
    branchMap: {
      "0": {
        loc: {
          start: {
            line: 47,
            column: 21
          },
          end: {
            line: 47,
            column: 57
          }
        },
        type: "binary-expr",
        locations: [{
          start: {
            line: 47,
            column: 21
          },
          end: {
            line: 47,
            column: 30
          }
        }, {
          start: {
            line: 47,
            column: 34
          },
          end: {
            line: 47,
            column: 57
          }
        }],
        line: 47
      },
      "1": {
        loc: {
          start: {
            line: 96,
            column: 29
          },
          end: {
            line: 103,
            column: 19
          }
        },
        type: "cond-expr",
        locations: [{
          start: {
            line: 97,
            column: 14
          },
          end: {
            line: 102,
            column: 14
          }
        }, {
          start: {
            line: 103,
            column: 14
          },
          end: {
            line: 103,
            column: 19
          }
        }],
        line: 96
      },
      "2": {
        loc: {
          start: {
            line: 136,
            column: 8
          },
          end: {
            line: 138,
            column: 9
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 136,
            column: 8
          },
          end: {
            line: 138,
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
        line: 136
      },
      "3": {
        loc: {
          start: {
            line: 161,
            column: 8
          },
          end: {
            line: 163,
            column: 9
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 161,
            column: 8
          },
          end: {
            line: 163,
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
        line: 161
      },
      "4": {
        loc: {
          start: {
            line: 182,
            column: 6
          },
          end: {
            line: 184,
            column: 7
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 182,
            column: 6
          },
          end: {
            line: 184,
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
        line: 182
      },
      "5": {
        loc: {
          start: {
            line: 189,
            column: 6
          },
          end: {
            line: 191,
            column: 7
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 189,
            column: 6
          },
          end: {
            line: 191,
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
        line: 189
      },
      "6": {
        loc: {
          start: {
            line: 195,
            column: 6
          },
          end: {
            line: 197,
            column: 7
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 195,
            column: 6
          },
          end: {
            line: 197,
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
        line: 195
      },
      "7": {
        loc: {
          start: {
            line: 200,
            column: 4
          },
          end: {
            line: 202,
            column: 5
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 200,
            column: 4
          },
          end: {
            line: 202,
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
        line: 200
      },
      "8": {
        loc: {
          start: {
            line: 207,
            column: 10
          },
          end: {
            line: 214,
            column: 18
          }
        },
        type: "cond-expr",
        locations: [{
          start: {
            line: 209,
            column: 14
          },
          end: {
            line: 212,
            column: 16
          }
        }, {
          start: {
            line: 214,
            column: 14
          },
          end: {
            line: 214,
            column: 18
          }
        }],
        line: 207
      },
      "9": {
        loc: {
          start: {
            line: 207,
            column: 10
          },
          end: {
            line: 207,
            column: 62
          }
        },
        type: "binary-expr",
        locations: [{
          start: {
            line: 207,
            column: 10
          },
          end: {
            line: 207,
            column: 25
          }
        }, {
          start: {
            line: 207,
            column: 29
          },
          end: {
            line: 207,
            column: 37
          }
        }, {
          start: {
            line: 207,
            column: 41
          },
          end: {
            line: 207,
            column: 62
          }
        }],
        line: 207
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
      "87": 0
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
      "16": 0
    },
    b: {
      "0": [0, 0],
      "1": [0, 0],
      "2": [0, 0],
      "3": [0, 0],
      "4": [0, 0],
      "5": [0, 0],
      "6": [0, 0],
      "7": [0, 0],
      "8": [0, 0],
      "9": [0, 0, 0]
    },
    _coverageSchema: "1a1c01bbd47fc00a2c39e90264f33305004495a9",
    hash: "48f0d3f1d32a164343208e12a27d56c9dcc5413b"
  };
  var coverage = global[gcv] || (global[gcv] = {});
  if (!coverage[path] || coverage[path].hash !== hash) {
    coverage[path] = coverageData;
  }
  var actualCoverage = coverage[path];
  {
    // @ts-ignore
    cov_26hgww947z = function () {
      return actualCoverage;
    };
  }
  return actualCoverage;
}
cov_26hgww947z();









function vueComponent(config) {
  cov_26hgww947z().f[0]++;
  const {
    name,
    module,
    url,
    watchKeys,
    onMounted
  } = (cov_26hgww947z().s[0]++, config);
  const storeKeys = (cov_26hgww947z().s[1]++, (cov_26hgww947z().b[0][0]++, watchKeys) || (cov_26hgww947z().b[0][1]++, Object.keys((0,_store__WEBPACK_IMPORTED_MODULE_3__.getStore)())));
  cov_26hgww947z().s[2]++;
  const V = props => {
    cov_26hgww947z().f[1]++;
    const store = (cov_26hgww947z().s[3]++, (0,_store__WEBPACK_IMPORTED_MODULE_3__.useStore)(...storeKeys));
    const vueRef = (cov_26hgww947z().s[4]++, (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)());
    const isVueMounted = (cov_26hgww947z().s[5]++, (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(false));
    const errorRef = (cov_26hgww947z().s[6]++, (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)());
    const isUnMountedRef = (cov_26hgww947z().s[7]++, (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(false));
    const ComponentNodeRef = (cov_26hgww947z().s[8]++, (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)());
    const selfRef = (cov_26hgww947z().s[9]++, (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)((0,_helper__WEBPACK_IMPORTED_MODULE_4__.getSelfInfo)({
      name,
      module,
      url
    })));
    const containerDivRef = (cov_26hgww947z().s[10]++, (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null));
    const propsReactiveRef = (cov_26hgww947z().s[11]++, (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)());
    const storeReactiveRef = (cov_26hgww947z().s[12]++, (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)());
    const unMountVue = (cov_26hgww947z().s[13]++, (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)());
    const unSubscribeMessageRef = (cov_26hgww947z().s[14]++, (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)());
    const updateVueComponentRef = (cov_26hgww947z().s[15]++, (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)());
    const [componentReady, setComponentReady] = (cov_26hgww947z().s[16]++, (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false));
    const [isError, setIsError] = (cov_26hgww947z().s[17]++, (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false));
    const Fallback = (cov_26hgww947z().s[18]++, _connector__WEBPACK_IMPORTED_MODULE_1__["default"].getFallbackComponent());
    const {
      $silent,
      $componentProps
    } = (cov_26hgww947z().s[19]++, props);
    const mountVue = (cov_26hgww947z().s[20]++, (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(() => {
      cov_26hgww947z().f[2]++;
      const $logger = (cov_26hgww947z().s[21]++, (0,_logger__WEBPACK_IMPORTED_MODULE_6__["default"])({
        name,
        module
      }));
      const $dispatch = (cov_26hgww947z().s[22]++, (0,_dispatch__WEBPACK_IMPORTED_MODULE_5__["default"])({
        name,
        module
      }));
      const $postMessage = (cov_26hgww947z().s[23]++, (0,_message__WEBPACK_IMPORTED_MODULE_7__.createPostMessage)({
        name,
        module
      }));
      const $t = (cov_26hgww947z().s[24]++, (0,_i18n__WEBPACK_IMPORTED_MODULE_8__.createI18n)({
        name,
        module
      }, () => {
        cov_26hgww947z().f[3]++;
        cov_26hgww947z().s[25]++;
        updateVueComponentRef.current?.();
      }));
      cov_26hgww947z().s[26]++;
      propsReactiveRef.current = vueRef.current.ref({
        ...$componentProps
      });
      cov_26hgww947z().s[27]++;
      storeReactiveRef.current = vueRef.current.ref({
        ...store
      });
      const vueApp = (cov_26hgww947z().s[28]++, vueRef.current.createApp({
        setup() {
          cov_26hgww947z().f[4]++;
          const renderKey = (cov_26hgww947z().s[29]++, vueRef.current.ref(0));
          cov_26hgww947z().s[30]++;
          updateVueComponentRef.current = () => {
            cov_26hgww947z().f[5]++;
            cov_26hgww947z().s[31]++;
            renderKey.value += 1;
          };
          cov_26hgww947z().s[32]++;
          return {
            key: renderKey
          };
        },
        errorCaptured(e) {
          cov_26hgww947z().f[6]++;
          const error = (cov_26hgww947z().s[33]++, e);
          cov_26hgww947z().s[34]++;
          errorRef.current = error.message?.includes('https://react') ? (cov_26hgww947z().b[1][0]++, new _helper__WEBPACK_IMPORTED_MODULE_4__.VariousError({
            originalError: new Error('not a valid Vue component'),
            name,
            module,
            type: 'INVALID_COMPONENT'
          })) : (cov_26hgww947z().b[1][1]++, error);
          cov_26hgww947z().s[35]++;
          setIsError(true);
        },
        render() {
          cov_26hgww947z().f[7]++;
          cov_26hgww947z().s[36]++;
          return vueRef.current.h(ComponentNodeRef.current, {
            ...propsReactiveRef.current.value,
            various: {
              $dispatch,
              $logger,
              $postMessage,
              $t,
              $store: storeReactiveRef.current.value,
              $self: selfRef.current
            },
            // eslint-disable-next-line react/no-this-in-sfc
            key: this.key
          });
        }
      }));
      cov_26hgww947z().s[37]++;
      vueApp.mount(containerDivRef.current);
      cov_26hgww947z().s[38]++;
      isVueMounted.current = true;
      cov_26hgww947z().s[39]++;
      unMountVue.current = () => {
        cov_26hgww947z().f[8]++;
        cov_26hgww947z().s[40]++;
        return vueApp.unmount();
      };
    }, [$componentProps, store]));
    const mountComponent = (cov_26hgww947z().s[41]++, (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(async () => {
      cov_26hgww947z().f[9]++;
      cov_26hgww947z().s[42]++;
      try {
        const vue = (cov_26hgww947z().s[43]++, await (0,_create_module__WEBPACK_IMPORTED_MODULE_2__["default"])({
          name: 'vue'
        }));
        cov_26hgww947z().s[44]++;
        vueRef.current = vue;
        const componentNode = (cov_26hgww947z().s[45]++, await (0,_create_module__WEBPACK_IMPORTED_MODULE_2__["default"])({
          name,
          module,
          url
        }, false));
        cov_26hgww947z().s[46]++;
        if (isUnMountedRef.current) {
          cov_26hgww947z().b[2][0]++;
          cov_26hgww947z().s[47]++;
          return;
        } else {
          cov_26hgww947z().b[2][1]++;
        }
        cov_26hgww947z().s[48]++;
        await (0,_helper__WEBPACK_IMPORTED_MODULE_4__.checkVueComponent)(componentNode, {
          name,
          module
        });
        cov_26hgww947z().s[49]++;
        (0,_helper__WEBPACK_IMPORTED_MODULE_4__.updateMountedComponent)({
          name,
          module
        });
        cov_26hgww947z().s[50]++;
        unSubscribeMessageRef.current = (0,_helper__WEBPACK_IMPORTED_MODULE_4__.parseComponentActions)({
          componentNode,
          name,
          module,
          type: 'vue3',
          i18nUpdate() {
            cov_26hgww947z().f[10]++;
            cov_26hgww947z().s[51]++;
            updateVueComponentRef.current?.();
          }
        });
        cov_26hgww947z().s[52]++;
        ComponentNodeRef.current = componentNode;
        cov_26hgww947z().s[53]++;
        setTimeout(mountVue);
        cov_26hgww947z().s[54]++;
        setComponentReady(true);
        cov_26hgww947z().s[55]++;
        onMounted?.();
      } catch (e) {
        cov_26hgww947z().s[56]++;
        if (isUnMountedRef.current) {
          cov_26hgww947z().b[3][0]++;
          cov_26hgww947z().s[57]++;
          return;
        } else {
          cov_26hgww947z().b[3][1]++;
        }
        cov_26hgww947z().s[58]++;
        errorRef.current = e;
        cov_26hgww947z().s[59]++;
        setComponentReady(true);
        cov_26hgww947z().s[60]++;
        setIsError(true);
      }
    }, [mountVue]));
    cov_26hgww947z().s[61]++;
    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
      cov_26hgww947z().f[11]++;
      cov_26hgww947z().s[62]++;
      return () => {
        cov_26hgww947z().f[12]++;
        cov_26hgww947z().s[63]++;
        errorRef.current = undefined;
        cov_26hgww947z().s[64]++;
        ComponentNodeRef.current = undefined;
        cov_26hgww947z().s[65]++;
        isUnMountedRef.current = true;
        cov_26hgww947z().s[66]++;
        (0,_helper__WEBPACK_IMPORTED_MODULE_4__.updateUnMountComponent)({
          name,
          module
        });
        cov_26hgww947z().s[67]++;
        unMountVue.current?.();
        cov_26hgww947z().s[68]++;
        unSubscribeMessageRef.current?.();
        cov_26hgww947z().s[69]++;
        isVueMounted.current = false;
      };
    }, []);
    cov_26hgww947z().s[70]++;
    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
      cov_26hgww947z().f[13]++;
      cov_26hgww947z().s[71]++;
      if (isVueMounted.current) {
        cov_26hgww947z().b[4][0]++;
        cov_26hgww947z().s[72]++;
        return;
      } else {
        cov_26hgww947z().b[4][1]++;
      }
      cov_26hgww947z().s[73]++;
      mountComponent();
    }, [mountComponent]);
    cov_26hgww947z().s[74]++;
    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
      cov_26hgww947z().f[14]++;
      cov_26hgww947z().s[75]++;
      if (propsReactiveRef.current) {
        cov_26hgww947z().b[5][0]++;
        cov_26hgww947z().s[76]++;
        propsReactiveRef.current.value = {
          ...$componentProps
        };
      } else {
        cov_26hgww947z().b[5][1]++;
      }
    }, [$componentProps]);
    cov_26hgww947z().s[77]++;
    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
      cov_26hgww947z().f[15]++;
      cov_26hgww947z().s[78]++;
      if (storeReactiveRef.current) {
        cov_26hgww947z().b[6][0]++;
        cov_26hgww947z().s[79]++;
        storeReactiveRef.current.value = {
          ...store
        };
      } else {
        cov_26hgww947z().b[6][1]++;
      }
    }, [store]);
    cov_26hgww947z().s[80]++;
    if (isError) {
      cov_26hgww947z().b[7][0]++;
      cov_26hgww947z().s[81]++;
      throw errorRef.current;
    } else {
      cov_26hgww947z().b[7][1]++;
    }
    cov_26hgww947z().s[82]++;
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, (cov_26hgww947z().b[9][0]++, !componentReady) && (cov_26hgww947z().b[9][1]++, !$silent) && (cov_26hgww947z().b[9][2]++, !(0,_helper__WEBPACK_IMPORTED_MODULE_4__.isModuleLoaded)(name)) ? (cov_26hgww947z().b[8][0]++, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(Fallback, {
      $self: selfRef.current,
      $store: store
    })) : (cov_26hgww947z().b[8][1]++, null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      className: (0,_helper__WEBPACK_IMPORTED_MODULE_4__.getClassNameWithModule)({
        name,
        module
      }, 'various-vue-component'),
      ref: containerDivRef
    }));
  };
  cov_26hgww947z().s[83]++;
  V.displayName = (0,_helper__WEBPACK_IMPORTED_MODULE_4__.getNameWithModule)({
    name,
    module
  });
  cov_26hgww947z().s[84]++;
  const VueComponent = props => {
    cov_26hgww947z().f[16]++;
    cov_26hgww947z().s[85]++;
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(V, props);
  };
  cov_26hgww947z().s[86]++;
  VueComponent.displayName = 'various-vue-component';
  cov_26hgww947z().s[87]++;
  return VueComponent;
}
/* harmony default export */ __webpack_exports__["default"] = (vueComponent);

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ (function(module) {

"use strict";
module.exports = __WEBPACK_EXTERNAL_MODULE_react__;

/***/ }),

/***/ "react-dom/client":
/*!***********************************!*\
  !*** external "react-dom/client" ***!
  \***********************************/
/***/ (function(module) {

"use strict";
module.exports = __WEBPACK_EXTERNAL_MODULE_react_dom_client__;

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
// This entry needs to be wrapped in an IIFE because it needs to be in strict mode.
!function() {
"use strict";
/*!****************************!*\
  !*** ./src/core/index.tsx ***!
  \****************************/
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Nycticorax: function() { return /* reexport default from dynamic */ nycticorax__WEBPACK_IMPORTED_MODULE_8___default.a; },
/* harmony export */   createComponent: function() { return /* reexport safe */ _create_component__WEBPACK_IMPORTED_MODULE_14__["default"]; },
/* harmony export */   createDispatch: function() { return /* reexport safe */ _dispatch__WEBPACK_IMPORTED_MODULE_9__["default"]; },
/* harmony export */   createLogger: function() { return /* reexport safe */ _logger__WEBPACK_IMPORTED_MODULE_11__["default"]; },
/* harmony export */   createModule: function() { return /* reexport safe */ _create_module__WEBPACK_IMPORTED_MODULE_13__["default"]; },
/* harmony export */   createPostMessage: function() { return /* reexport safe */ _message__WEBPACK_IMPORTED_MODULE_10__.createPostMessage; },
/* harmony export */   defineDependencies: function() { return /* reexport safe */ _helper__WEBPACK_IMPORTED_MODULE_12__.defineDependencies; },
/* harmony export */   getConfig: function() { return /* reexport safe */ _helper__WEBPACK_IMPORTED_MODULE_12__.getConfig; },
/* harmony export */   getMountedComponents: function() { return /* reexport safe */ _helper__WEBPACK_IMPORTED_MODULE_12__.getMountedComponents; },
/* harmony export */   getStore: function() { return /* reexport safe */ _store__WEBPACK_IMPORTED_MODULE_2__.getUserStore; },
/* harmony export */   isModuleLoaded: function() { return /* reexport safe */ _helper__WEBPACK_IMPORTED_MODULE_12__.isModuleLoaded; },
/* harmony export */   onComponentMounted: function() { return /* reexport safe */ _helper__WEBPACK_IMPORTED_MODULE_12__.onComponentMounted; },
/* harmony export */   preloadModules: function() { return /* reexport safe */ _helper__WEBPACK_IMPORTED_MODULE_12__.preloadModules; },
/* harmony export */   removeLoadedModules: function() { return /* reexport safe */ _helper__WEBPACK_IMPORTED_MODULE_12__.removeLoadedModules; },
/* harmony export */   renderComponent: function() { return /* reexport safe */ _render_component__WEBPACK_IMPORTED_MODULE_15__["default"]; },
/* harmony export */   version: function() { return /* binding */ version; }
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_dom_client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom/client */ "react-dom/client");
/* harmony import */ var react_dom_client__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_dom_client__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./store */ "./src/core/store.ts");
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./config */ "./src/core/config.ts");
/* harmony import */ var _connector__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./connector */ "./src/core/connector.ts");
/* harmony import */ var _i18n__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./i18n */ "./src/core/i18n.ts");
/* harmony import */ var _default_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./default-component */ "./src/core/default-component.tsx");
/* harmony import */ var _error_boundary__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./error-boundary */ "./src/core/error-boundary.tsx");
/* harmony import */ var nycticorax__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! nycticorax */ "./node_modules/nycticorax/dist/index.js");
/* harmony import */ var nycticorax__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(nycticorax__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _dispatch__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./dispatch */ "./src/core/dispatch.ts");
/* harmony import */ var _message__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./message */ "./src/core/message.ts");
/* harmony import */ var _logger__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./logger */ "./src/core/logger.ts");
/* harmony import */ var _helper__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./helper */ "./src/core/helper.ts");
/* harmony import */ var _create_module__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./create-module */ "./src/core/create-module.ts");
/* harmony import */ var _create_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./create-component */ "./src/core/create-component.tsx");
/* harmony import */ var _render_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./render-component */ "./src/core/render-component.tsx");
function cov_8qpz6lsye() {
  var path = "/Users/am0200/Documents/github/various/src/core/index.tsx";
  var hash = "dcd1752fb3c42da8f39f87e72f4b6f1c626199a8";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "/Users/am0200/Documents/github/various/src/core/index.tsx",
    statementMap: {
      "0": {
        start: {
          line: 40,
          column: 23
        },
        end: {
          line: 40,
          column: 30
        }
      },
      "1": {
        start: {
          line: 54,
          column: 6
        },
        end: {
          line: 54,
          column: 12
        }
      },
      "2": {
        start: {
          line: 56,
          column: 2
        },
        end: {
          line: 58,
          column: 3
        }
      },
      "3": {
        start: {
          line: 57,
          column: 4
        },
        end: {
          line: 57,
          column: 41
        }
      },
      "4": {
        start: {
          line: 60,
          column: 2
        },
        end: {
          line: 60,
          column: 36
        }
      },
      "5": {
        start: {
          line: 62,
          column: 2
        },
        end: {
          line: 64,
          column: 3
        }
      },
      "6": {
        start: {
          line: 63,
          column: 4
        },
        end: {
          line: 63,
          column: 44
        }
      },
      "7": {
        start: {
          line: 65,
          column: 2
        },
        end: {
          line: 67,
          column: 3
        }
      },
      "8": {
        start: {
          line: 66,
          column: 4
        },
        end: {
          line: 66,
          column: 54
        }
      },
      "9": {
        start: {
          line: 69,
          column: 2
        },
        end: {
          line: 75,
          column: 4
        }
      },
      "10": {
        start: {
          line: 77,
          column: 2
        },
        end: {
          line: 77,
          column: 39
        }
      },
      "11": {
        start: {
          line: 80,
          column: 25
        },
        end: {
          line: 80,
          column: 38
        }
      },
      "12": {
        start: {
          line: 83,
          column: 6
        },
        end: {
          line: 83,
          column: 28
        }
      },
      "13": {
        start: {
          line: 87,
          column: 6
        },
        end: {
          line: 91,
          column: 7
        }
      },
      "14": {
        start: {
          line: 95,
          column: 2
        },
        end: {
          line: 95,
          column: 75
        }
      }
    },
    fnMap: {
      "0": {
        name: "(anonymous_0)",
        decl: {
          start: {
            line: 42,
            column: 15
          },
          end: {
            line: 42,
            column: 16
          }
        },
        loc: {
          start: {
            line: 42,
            column: 48
          },
          end: {
            line: 96,
            column: 1
          }
        },
        line: 42
      },
      "1": {
        name: "(anonymous_1)",
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
            column: 24
          },
          end: {
            line: 84,
            column: 5
          }
        },
        line: 82
      },
      "2": {
        name: "(anonymous_2)",
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
            line: 92,
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
            line: 46,
            column: 4
          },
          end: {
            line: 46,
            column: 14
          }
        },
        type: "default-arg",
        locations: [{
          start: {
            line: 46,
            column: 12
          },
          end: {
            line: 46,
            column: 14
          }
        }],
        line: 46
      },
      "1": {
        loc: {
          start: {
            line: 47,
            column: 4
          },
          end: {
            line: 47,
            column: 16
          }
        },
        type: "default-arg",
        locations: [{
          start: {
            line: 47,
            column: 14
          },
          end: {
            line: 47,
            column: 16
          }
        }],
        line: 47
      },
      "2": {
        loc: {
          start: {
            line: 50,
            column: 4
          },
          end: {
            line: 50,
            column: 24
          }
        },
        type: "default-arg",
        locations: [{
          start: {
            line: 50,
            column: 11
          },
          end: {
            line: 50,
            column: 24
          }
        }],
        line: 50
      },
      "3": {
        loc: {
          start: {
            line: 56,
            column: 2
          },
          end: {
            line: 58,
            column: 3
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 56,
            column: 2
          },
          end: {
            line: 58,
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
        line: 56
      },
      "4": {
        loc: {
          start: {
            line: 62,
            column: 2
          },
          end: {
            line: 64,
            column: 3
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 62,
            column: 2
          },
          end: {
            line: 64,
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
        line: 62
      },
      "5": {
        loc: {
          start: {
            line: 65,
            column: 2
          },
          end: {
            line: 67,
            column: 3
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 65,
            column: 2
          },
          end: {
            line: 67,
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
        line: 65
      },
      "6": {
        loc: {
          start: {
            line: 95,
            column: 36
          },
          end: {
            line: 95,
            column: 48
          }
        },
        type: "binary-expr",
        locations: [{
          start: {
            line: 95,
            column: 36
          },
          end: {
            line: 95,
            column: 40
          }
        }, {
          start: {
            line: 95,
            column: 44
          },
          end: {
            line: 95,
            column: 48
          }
        }],
        line: 95
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
      "14": 0
    },
    f: {
      "0": 0,
      "1": 0,
      "2": 0
    },
    b: {
      "0": [0],
      "1": [0],
      "2": [0],
      "3": [0, 0],
      "4": [0, 0],
      "5": [0, 0],
      "6": [0, 0]
    },
    _coverageSchema: "1a1c01bbd47fc00a2c39e90264f33305004495a9",
    hash: "dcd1752fb3c42da8f39f87e72f4b6f1c626199a8"
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


















// eslint-disable-next-line no-undef
const version = (cov_8qpz6lsye().s[0]++, "5.0.2");
/* harmony default export */ __webpack_exports__["default"] = (config => {
  cov_8qpz6lsye().f[0]++;
  const {
    dependencies,
    root,
    store = (cov_8qpz6lsye().b[0][0]++, {}),
    actions = (cov_8qpz6lsye().b[1][0]++, {}),
    Fallback,
    ErrorFallback,
    Root = (cov_8qpz6lsye().b[2][0]++, _default_component__WEBPACK_IMPORTED_MODULE_6__.Root),
    middlewares,
    i18n,
    ...rest
  } = (cov_8qpz6lsye().s[1]++, config);
  cov_8qpz6lsye().s[2]++;
  if (middlewares) {
    cov_8qpz6lsye().b[3][0]++;
    cov_8qpz6lsye().s[3]++;
    _connector__WEBPACK_IMPORTED_MODULE_4__["default"].setMiddlewares(middlewares);
  } else {
    cov_8qpz6lsye().b[3][1]++;
  }
  cov_8qpz6lsye().s[4]++;
  _connector__WEBPACK_IMPORTED_MODULE_4__["default"].setStoreActions(actions);
  cov_8qpz6lsye().s[5]++;
  if (Fallback) {
    cov_8qpz6lsye().b[4][0]++;
    cov_8qpz6lsye().s[6]++;
    _connector__WEBPACK_IMPORTED_MODULE_4__["default"].setFallbackComponent(Fallback);
  } else {
    cov_8qpz6lsye().b[4][1]++;
  }
  cov_8qpz6lsye().s[7]++;
  if (ErrorFallback) {
    cov_8qpz6lsye().b[5][0]++;
    cov_8qpz6lsye().s[8]++;
    _connector__WEBPACK_IMPORTED_MODULE_4__["default"].setErrorFallbackComponent(ErrorFallback);
  } else {
    cov_8qpz6lsye().b[5][1]++;
  }
  cov_8qpz6lsye().s[9]++;
  (0,_store__WEBPACK_IMPORTED_MODULE_2__.createStore)({
    ...store,
    [_config__WEBPACK_IMPORTED_MODULE_3__.MOUNTED_COMPONENTS_KEY]: [],
    [_config__WEBPACK_IMPORTED_MODULE_3__.CONFIG_KEY]: rest,
    [_config__WEBPACK_IMPORTED_MODULE_3__.DEPENDENCIES_KEY]: dependencies,
    [_config__WEBPACK_IMPORTED_MODULE_3__.MESSAGE_KEY]: null
  });
  cov_8qpz6lsye().s[10]++;
  Root.displayName = 'various-app-root';
  class R extends react__WEBPACK_IMPORTED_MODULE_0__.Component {
    static displayName = (cov_8qpz6lsye().s[11]++, 'various-app');
    componentDidMount() {
      cov_8qpz6lsye().f[1]++;
      cov_8qpz6lsye().s[12]++;
      (0,_i18n__WEBPACK_IMPORTED_MODULE_5__.createI18nConfig)(i18n);
    }
    render() {
      cov_8qpz6lsye().f[2]++;
      cov_8qpz6lsye().s[13]++;
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_error_boundary__WEBPACK_IMPORTED_MODULE_7__["default"], {
        name: "app",
        url: dependencies.app
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(Root, null));
    }
  }
  cov_8qpz6lsye().s[14]++;
  (0,react_dom_client__WEBPACK_IMPORTED_MODULE_1__.createRoot)(document.querySelector((cov_8qpz6lsye().b[6][0]++, root) || (cov_8qpz6lsye().b[6][1]++, _config__WEBPACK_IMPORTED_MODULE_3__.ROOT))).render( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(R, null));
});
}();
/******/ 	return __webpack_exports__;
/******/ })()
;
});;
//# sourceMappingURL=index.js.map