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
/* harmony export */   "RETRY_COUNT": function() { return /* binding */ RETRY_COUNT; }
/* harmony export */ });
var DEFAULT_PACKAGES = {
  react: 'https://unpkg.com/react@17.0.2/umd/react.development.js',
  'react-dom': 'https://unpkg.com/react-dom@17.0.2/umd/react-dom.development.js'
};
var MOUNTED_COMPONENTS = Symbol('MOUNTED_COMPONENTS');
var MESSAGE_KEY = Symbol('MESSAGE_KEY');
var IGNORE_STATIC_METHODS = ['name', 'prototype', 'length', 'propTypes', 'defaultProps', 'getDerivedStateFromProps', 'contextTypes', 'displayName'];
var ERROR_TYPE;

(function (ERROR_TYPE) {
  ERROR_TYPE["LOADING_ERROR"] = "LOADING_ERROR";
  ERROR_TYPE["DEPENDENCIES_LOADING_ERROR"] = "DEPENDENCIES_LOADING_ERROR";
  ERROR_TYPE["NOT_DEFINED"] = "NOT_DEFINED";
  ERROR_TYPE["INVALID_COMPONENT"] = "INVALID_COMPONENT";
  ERROR_TYPE["SCRIPT_ERROR"] = "SCRIPT_ERROR";
  ERROR_TYPE["ROUTER_ERROR"] = "ROUTER_ERROR";
  ERROR_TYPE["CONTAINER_ERROR"] = "CONTAINER_ERROR";
})(ERROR_TYPE || (ERROR_TYPE = {}));

var ROOT_CONTAINER = '#root';
var RETRY_COUNT = 1;

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

var Loader = function Loader() {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, "Loading");
};
var Error = function Error(_ref) {
  var type = _ref.type,
      message = _ref.message,
      reload = _ref.reload;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, "[".concat(type, "]").concat(message)), reload ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
    type: "button",
    onClick: reload
  }, "Reload") : null);
};
var Container = function Container() {
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

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _toArray(arr) { return _arrayWithHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableRest(); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

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
  var storeKeys = Object.keys((0,_store__WEBPACK_IMPORTED_MODULE_4__.getStore)());
  var currentDispatch = (0,_dispatch__WEBPACK_IMPORTED_MODULE_2__["default"])(_store__WEBPACK_IMPORTED_MODULE_4__.dispatch, storeDispatcher, componentDispatcher);

  var components = config.components,
      rest = _objectWithoutProperties(config, _excluded);

  var _nameWidthModule$spli = nameWidthModule.split('.'),
      _nameWidthModule$spli2 = _slicedToArray(_nameWidthModule$spli, 2),
      name = _nameWidthModule$spli2[0],
      _nameWidthModule$spli3 = _nameWidthModule$spli2[1],
      module = _nameWidthModule$spli3 === void 0 ? Symbol('module') : _nameWidthModule$spli3;

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

      _defineProperty(_assertThisInitialized(_this), "state", {
        componentExist: undefined,
        componentReady: false,
        errorType: undefined,
        errorMessage: ''
      });

      _defineProperty(_assertThisInitialized(_this), "unsubscribe", void 0);

      _defineProperty(_assertThisInitialized(_this), "ComponentNode", void 0);

      _defineProperty(_assertThisInitialized(_this), "isUnMounted", void 0);

      _defineProperty(_assertThisInitialized(_this), "retryCount", 0);

      _defineProperty(_assertThisInitialized(_this), "dispatch", currentDispatch.bind(_assertThisInitialized(_this), name));

      _defineProperty(_assertThisInitialized(_this), "postMessage", (0,_message__WEBPACK_IMPORTED_MODULE_5__.getPostMessage)(name));

      _defineProperty(_assertThisInitialized(_this), "unMountComponent", function () {
        var mountedComponents = _this.$getMountedComponents();

        mountedComponents = mountedComponents.filter(function (item) {
          return item !== name;
        });
        (0,_store__WEBPACK_IMPORTED_MODULE_4__.dispatch)(_defineProperty({}, _config__WEBPACK_IMPORTED_MODULE_6__.MOUNTED_COMPONENTS, mountedComponents), true); // eslint-disable-next-line no-param-reassign

        delete componentDispatcher[nameWidthModule];
      });

      _defineProperty(_assertThisInitialized(_this), "mountComponent", function () {
        if (name === 'store') {
          _this.setState({
            errorType: 'INVALID_COMPONENT',
            errorMessage: 'Cannot load component named `store`'
          });

          return;
        }

        try {
          var _window$requirejs$s$c = window.requirejs.s.contexts._,
              registry = _window$requirejs$s$c.registry,
              urlFetched = _window$requirejs$s$c.urlFetched;
          Object.keys(registry).forEach(function (key) {
            if (registry[key].error) {
              delete urlFetched[registry[key].map.url];
              delete registry[key];
            }
          });
        } catch (e) {// ignore
        }

        window.requirejs([name], function (C) {
          if (_this.isUnMounted) {
            return;
          }

          if (!C) {
            _this.setState({
              errorType: 'INVALID_COMPONENT'
            });

            return;
          }

          var componentNode = C[module] || C.default || C;

          if (typeof componentNode !== 'function') {
            _this.setState({
              errorType: 'INVALID_COMPONENT'
            });

            return;
          }

          var mountedComponents = (0,_store__WEBPACK_IMPORTED_MODULE_4__.getStore)()[_config__WEBPACK_IMPORTED_MODULE_6__.MOUNTED_COMPONENTS];
          var actions = {};

          if (!mountedComponents.includes(name)) {
            mountedComponents.push(name);
          }

          Object.getOwnPropertyNames(componentNode).forEach(function (method) {
            if (typeof componentNode[method] !== 'function') {
              return;
            }

            if (method === '$onMessage') {
              _this.unsubscribe = (0,_store__WEBPACK_IMPORTED_MODULE_4__.subscribe)((0,_message__WEBPACK_IMPORTED_MODULE_5__.getOnMessage)(name, componentNode[method]));
              return;
            }

            if (!_config__WEBPACK_IMPORTED_MODULE_6__.IGNORE_STATIC_METHODS.includes(method)) {
              actions[method] = componentNode[method];
            }
          });
          componentDispatcher[nameWidthModule] = actions; // eslint-disable-line no-param-reassign

          _this.ComponentNode = componentNode;

          _this.setState({
            componentReady: true
          }, function () {
            if (onMounted) {
              onMounted();
            } else {
              (0,_store__WEBPACK_IMPORTED_MODULE_4__.dispatch)(_defineProperty({}, _config__WEBPACK_IMPORTED_MODULE_6__.MOUNTED_COMPONENTS, mountedComponents), true);
            }
          });
        }, function (e) {
          window.requirejs.undef(name);
          window.requirejs.config({
            paths: _defineProperty({}, name, "".concat(components[name], "#"))
          });

          if (_this.isUnMounted) {
            return;
          }

          if (_this.retryCount < _config__WEBPACK_IMPORTED_MODULE_6__.RETRY_COUNT) {
            _this.retryCount += 1;
            setTimeout(_this.mountComponent, 1000);
            return;
          }

          var _e$requireModules = _slicedToArray(e.requireModules, 1),
              requireModule = _e$requireModules[0];

          _this.setState({
            errorType: requireModule === name ? 'LOADING_ERROR' : 'DEPENDENCIES_LOADING_ERROR',
            errorMessage: e.message
          });
        });
      });

      _defineProperty(_assertThisInitialized(_this), "onReload", function () {
        _this.setState({
          componentReady: false,
          errorType: undefined,
          errorMessage: ''
        }, function () {
          _this.mountComponent();
        });
      });

      _defineProperty(_assertThisInitialized(_this), "$getMountedComponents", function () {
        return (0,_store__WEBPACK_IMPORTED_MODULE_4__.getStore)()[_config__WEBPACK_IMPORTED_MODULE_6__.MOUNTED_COMPONENTS];
      });

      _defineProperty(_assertThisInitialized(_this), "$render", function (_ref2) {
        var componentName = _ref2.name,
            url = _ref2.url,
            target = _ref2.target,
            props = _ref2.props,
            componentModule = _ref2.module,
            onMountedFn = _ref2.onMounted;

        if (url) {
          // if define url, means replace component
          window.requirejs.undef(componentName);
          window.requirejs.config({
            paths: _defineProperty({}, componentName, "".concat(url, "#"))
          });
        }

        var C = componentCreator({
          name: componentModule ? "".concat(componentName, ".").concat(componentModule) : componentName,
          storeDispatcher: storeDispatcher,
          componentDispatcher: componentDispatcher,
          Loader: Loader,
          Error: Error,
          config: _objectSpread(_objectSpread({}, rest), {}, {
            components: components
          }),
          onMounted: onMountedFn
        });

        var Fc = function Fc(p) {
          return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(C, p);
        };

        (0,react_dom__WEBPACK_IMPORTED_MODULE_1__.render)( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(Fc, props), target);
        return function () {
          return (0,react_dom__WEBPACK_IMPORTED_MODULE_1__.unmountComponentAtNode)(target);
        };
      });

      return _this;
    }

    _createClass(R, [{
      key: "componentDidMount",
      value: function componentDidMount() {
        this.setState({
          componentExist: window.requirejs.specified(name)
        });
        this.mountComponent();
      }
    }, {
      key: "componentDidCatch",
      value: function componentDidCatch(e) {
        this.setState({
          errorType: 'SCRIPT_ERROR',
          errorMessage: e.message
        });
        window.requirejs.undef(name);
        window.requirejs.config({
          paths: _defineProperty({}, name, "".concat(components[name], "#"))
        });
        this.unMountComponent();
      }
    }, {
      key: "componentWillUnmount",
      value: function componentWillUnmount() {
        this.ComponentNode = null;
        this.unMountComponent();
        this.isUnMounted = true;

        if (this.unsubscribe) {
          this.unsubscribe();
        }
      }
    }, {
      key: "render",
      value: function render() {
        var _this2 = this;

        var _this$props = this.props,
            componentDispatch = _this$props.dispatch,
            $silent = _this$props.$silent,
            propsRest = _objectWithoutProperties(_this$props, _excluded2);

        var _this$state = this.state,
            componentReady = _this$state.componentReady,
            errorMessage = _this$state.errorMessage,
            errorType = _this$state.errorType,
            componentExist = _this$state.componentExist;
        var store = {};
        var componentProps = {};
        var ComponentNode = this.ComponentNode;

        if (errorType) {
          return !$silent ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(Error, {
            type: _config__WEBPACK_IMPORTED_MODULE_6__.ERROR_TYPE[errorType],
            message: errorMessage,
            reload: errorType === 'INVALID_COMPONENT' ? undefined : this.onReload
          }) : null;
        }

        if (!componentReady) {
          return !$silent && componentExist === false ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(Loader, null) : null;
        }

        storeKeys.forEach(function (key) {
          store[key] = _this2.props[key];
        });
        Object.keys(propsRest).forEach(function (key) {
          if (store[key] !== propsRest[key]) {
            componentProps[key] = propsRest[key];
          }
        });
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(ComponentNode, _extends({}, componentProps, {
          $config: rest,
          $dispatch: this.dispatch,
          $store: store,
          $render: onMounted ? undefined : this.$render,
          $preload: _preload__WEBPACK_IMPORTED_MODULE_3__["default"],
          $postMessage: this.postMessage,
          $getMountedComponents: this.$getMountedComponents
        }));
      }
    }]);

    return R;
  }(react__WEBPACK_IMPORTED_MODULE_0__.Component); // A spread argument must either have a tuple type or be passed to a rest parameter.ts(2556)


  var _storeKeys = _toArray(storeKeys),
      key0 = _storeKeys[0],
      keyn = _storeKeys.slice(1);

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
/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(dispatch, storeDispatcher, componentDispatcher) {
  return function (dispatcher, name, func, value) {
    var currentDispatch = this.props.dispatch || dispatch;

    if (name === 'store') {
      if (!storeDispatcher[func]) {
        throw new Error("action `".concat(func, "` is not present"));
      }

      return currentDispatch(storeDispatcher[func], value, dispatcher);
    }

    var actions = componentDispatcher[name];

    if (!actions) {
      throw new Error("component `".concat(name, "` is not ready"));
    }

    if (!actions[func]) {
      throw new Error("action `".concat(func, "` of component `").concat(name, "` is not present"));
    }

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
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



var getPostMessage = function getPostMessage(type) {
  return function (name, value) {
    return (0,_store__WEBPACK_IMPORTED_MODULE_0__.dispatch)(_defineProperty({}, _config__WEBPACK_IMPORTED_MODULE_1__.MESSAGE_KEY, {
      timestamp: +new Date(),
      type: type,
      name: name,
      value: value
    }));
  };
};
var getOnMessage = function getOnMessage(type, onMessage) {
  return function (keys) {
    if (keys[0] === _config__WEBPACK_IMPORTED_MODULE_1__.MESSAGE_KEY) {
      var _ref = (0,_store__WEBPACK_IMPORTED_MODULE_0__.getStore)()[_config__WEBPACK_IMPORTED_MODULE_1__.MESSAGE_KEY],
          name = _ref.name,
          value = _ref.value,
          triggerType = _ref.type;

      if (triggerType !== type) {
        onMessage({
          name: name,
          value: value,
          type: triggerType
        });
      }
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
/* harmony default export */ __webpack_exports__["default"] = (function (names) {
  return new Promise(function (resolve) {
    window.requirejs(names, resolve);
  });
});

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


var _Nycticorax = new nycticorax__WEBPACK_IMPORTED_MODULE_0__["default"](),
    createStore = _Nycticorax.createStore,
    getStore = _Nycticorax.getStore,
    connect = _Nycticorax.connect,
    dispatch = _Nycticorax.dispatch,
    subscribe = _Nycticorax.subscribe;



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

  var dependencies = config.dependencies,
      entry = config.entry,
      root = config.root,
      _config$components = config.components,
      components = _config$components === void 0 ? {} : _config$components,
      _config$store = config.store,
      store = _config$store === void 0 ? {} : _config$store,
      _config$actions = config.actions,
      actions = _config$actions === void 0 ? {} : _config$actions,
      _config$Loader = config.Loader,
      LoaderNode = _config$Loader === void 0 ? _built_in__WEBPACK_IMPORTED_MODULE_3__.Loader : _config$Loader,
      _config$Error = config.Error,
      ErrorNode = _config$Error === void 0 ? _built_in__WEBPACK_IMPORTED_MODULE_3__.Error : _config$Error,
      _config$Container = config.Container,
      ContainerNode = _config$Container === void 0 ? _built_in__WEBPACK_IMPORTED_MODULE_3__.Container : _config$Container,
      rest = _objectWithoutProperties(config, _excluded);

  var componentDispatcher = {};

  var storeDispatcher = _objectSpread({}, actions);

  var COMPONENTS = {};
  (0,_store__WEBPACK_IMPORTED_MODULE_2__.createStore)(_objectSpread(_objectSpread({}, store), {}, (_objectSpread2 = {}, _defineProperty(_objectSpread2, _config__WEBPACK_IMPORTED_MODULE_5__.MOUNTED_COMPONENTS, []), _defineProperty(_objectSpread2, _config__WEBPACK_IMPORTED_MODULE_5__.MESSAGE_KEY, {}), _objectSpread2)));

  var componentCreator = function componentCreator(name, onMounted) {
    var C = (0,_create_component__WEBPACK_IMPORTED_MODULE_4__["default"])({
      name: name,
      storeDispatcher: storeDispatcher,
      componentDispatcher: componentDispatcher,
      Loader: LoaderNode,
      Error: ErrorNode,
      config: _objectSpread(_objectSpread({}, rest), {}, {
        components: components
      }),
      onMounted: onMounted
    });
    return function (props) {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(C, props);
    };
  };

  var $component = function $component(nameWidthSub) {
    var _nameWidthSub$split = nameWidthSub.split('.'),
        _nameWidthSub$split2 = _slicedToArray(_nameWidthSub$split, 1),
        name = _nameWidthSub$split2[0];

    if (!components[name]) {
      return function () {
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(ErrorNode, {
          type: _config__WEBPACK_IMPORTED_MODULE_5__.ERROR_TYPE.NOT_DEFINED
        });
      };
    }

    if (COMPONENTS[nameWidthSub]) {
      return COMPONENTS[nameWidthSub];
    }

    var component = componentCreator(nameWidthSub);
    COMPONENTS[nameWidthSub] = component;
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

      _defineProperty(_assertThisInitialized(_this), "state", {
        errorType: undefined,
        errorMessage: ''
      });

      return _this;
    }

    _createClass(R, [{
      key: "componentDidCatch",
      value: function componentDidCatch(e) {
        this.setState({
          errorType: 'CONTAINER_ERROR',
          errorMessage: e.message
        });
      }
    }, {
      key: "render",
      value: function render() {
        var _this$state = this.state,
            errorType = _this$state.errorType,
            errorMessage = _this$state.errorMessage;

        if (errorType) {
          return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(ErrorNode, {
            type: _config__WEBPACK_IMPORTED_MODULE_5__.ERROR_TYPE[errorType],
            message: errorMessage
          });
        }

        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(ContainerNode, {
          $component: $component,
          $config: rest
        });
      }
    }]);

    return R;
  }(react__WEBPACK_IMPORTED_MODULE_0__.Component);

  (0,react_dom__WEBPACK_IMPORTED_MODULE_1__.render)( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(R, null), document.querySelector(root || _config__WEBPACK_IMPORTED_MODULE_5__.ROOT_CONTAINER));
});
}();
/******/ 	return __webpack_exports__;
/******/ })()
;
});;
//# sourceMappingURL=core.js.map