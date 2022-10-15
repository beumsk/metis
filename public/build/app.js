"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["app"],{

/***/ "./assets/app.js":
/*!***********************!*\
  !*** ./assets/app.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _component_Login__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./component/Login */ "./assets/component/Login.js");
/* harmony import */ var _component_Home__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./component/Home */ "./assets/component/Home.js");
/* harmony import */ var _component_Layout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./component/Layout */ "./assets/component/Layout.js");
/* harmony import */ var _component_Editor__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./component/Editor */ "./assets/component/Editor.js");
/* harmony import */ var _component_Admin__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./component/Admin */ "./assets/component/Admin.js");
/* harmony import */ var _component_Missing__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./component/Missing */ "./assets/component/Missing.js");
/* harmony import */ var _component_Unauthorized__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./component/Unauthorized */ "./assets/component/Unauthorized.js");
/* harmony import */ var _component_Lounge__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./component/Lounge */ "./assets/component/Lounge.js");
/* harmony import */ var _component_LinkPage__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./component/LinkPage */ "./assets/component/LinkPage.js");
/* harmony import */ var _component_RequireAuth__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./component/RequireAuth */ "./assets/component/RequireAuth.js");
/* harmony import */ var _component_PersistLogin__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./component/PersistLogin */ "./assets/component/PersistLogin.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router/dist/index.js");
/* harmony import */ var _component_Patients__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./component/Patients */ "./assets/component/Patients.js");
/* harmony import */ var _component_list_reportCalls__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./component/list_reportCalls */ "./assets/component/list_reportCalls.js");
/* harmony import */ var _component_list_reportGoals__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./component/list_reportGoals */ "./assets/component/list_reportGoals.js");
/* harmony import */ var _component_Patient__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./component/Patient */ "./assets/component/Patient.js");
/* harmony import */ var _styles_app_scss__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./styles/app.scss */ "./assets/styles/app.scss");
// import Register from "./components/Register";


















var ROLES = {
  User: "ROLE_USER",
  Admin: "ROLE_ADMIN"
};

function App() {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_17__.Routes, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_17__.Route, {
    path: "/",
    element: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_component_Layout__WEBPACK_IMPORTED_MODULE_3__["default"], null)
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_17__.Route, {
    path: "connect",
    element: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_component_Login__WEBPACK_IMPORTED_MODULE_1__["default"], null)
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_17__.Route, {
    path: "linkpage",
    element: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_component_LinkPage__WEBPACK_IMPORTED_MODULE_9__["default"], null)
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_17__.Route, {
    path: "unauthorized",
    element: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_component_Unauthorized__WEBPACK_IMPORTED_MODULE_7__["default"], null)
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_17__.Route, {
    element: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_component_PersistLogin__WEBPACK_IMPORTED_MODULE_11__["default"], null)
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_17__.Route, {
    element: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_component_RequireAuth__WEBPACK_IMPORTED_MODULE_10__["default"], {
      allowedRoles: [ROLES.User]
    })
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_17__.Route, {
    path: "/",
    element: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_component_Home__WEBPACK_IMPORTED_MODULE_2__["default"], null)
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_17__.Route, {
    element: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_component_RequireAuth__WEBPACK_IMPORTED_MODULE_10__["default"], {
      allowedRoles: [ROLES.Admin]
    })
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_17__.Route, {
    path: "patients",
    element: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_component_Patients__WEBPACK_IMPORTED_MODULE_12__["default"], null)
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_17__.Route, {
    path: ":id",
    element: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_component_Patient__WEBPACK_IMPORTED_MODULE_15__["default"], null)
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_17__.Route, {
    element: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_component_RequireAuth__WEBPACK_IMPORTED_MODULE_10__["default"], {
      allowedRoles: [ROLES.Admin]
    })
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_17__.Route, {
    path: "admin",
    element: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_component_Admin__WEBPACK_IMPORTED_MODULE_5__["default"], null)
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_17__.Route, {
    path: "*",
    element: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_component_Missing__WEBPACK_IMPORTED_MODULE_6__["default"], null)
  })));
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (App);

/***/ }),

/***/ "./assets/component/Admin.js":
/*!***********************************!*\
  !*** ./assets/component/Admin.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/dist/index.js");
/* harmony import */ var _Users__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Users */ "./assets/component/Users.js");




var Admin = function Admin() {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("section", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h1", null, "Admins Page"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Users__WEBPACK_IMPORTED_MODULE_1__["default"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "flexGrow"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__.Link, {
    to: "/"
  }, "Home")));
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Admin);

/***/ }),

/***/ "./assets/component/Editor.js":
/*!************************************!*\
  !*** ./assets/component/Editor.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/dist/index.js");


var Editor = function Editor() {
  return /*#__PURE__*/React.createElement("section", null, /*#__PURE__*/React.createElement("h1", null, "Editors Page"), /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("p", null, "You must have been assigned an Editor role."), /*#__PURE__*/React.createElement("div", {
    className: "flexGrow"
  }, /*#__PURE__*/React.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_0__.Link, {
    to: "/"
  }, "Home")));
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Editor);

/***/ }),

/***/ "./assets/component/Form_MeetRapports.js":
/*!***********************************************!*\
  !*** ./assets/component/Form_MeetRapports.js ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.promise.js */ "./node_modules/core-js/modules/es.promise.js");
/* harmony import */ var core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.symbol.js */ "./node_modules/core-js/modules/es.symbol.js");
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.symbol.description.js */ "./node_modules/core-js/modules/es.symbol.description.js");
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.symbol.iterator.js */ "./node_modules/core-js/modules/es.symbol.iterator.js");
/* harmony import */ var core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.array.iterator.js */ "./node_modules/core-js/modules/es.array.iterator.js");
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es.string.iterator.js */ "./node_modules/core-js/modules/es.string.iterator.js");
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator.js */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var core_js_modules_es_symbol_async_iterator_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! core-js/modules/es.symbol.async-iterator.js */ "./node_modules/core-js/modules/es.symbol.async-iterator.js");
/* harmony import */ var core_js_modules_es_symbol_async_iterator_js__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_async_iterator_js__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var core_js_modules_es_symbol_to_string_tag_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! core-js/modules/es.symbol.to-string-tag.js */ "./node_modules/core-js/modules/es.symbol.to-string-tag.js");
/* harmony import */ var core_js_modules_es_symbol_to_string_tag_js__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_to_string_tag_js__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var core_js_modules_es_json_to_string_tag_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! core-js/modules/es.json.to-string-tag.js */ "./node_modules/core-js/modules/es.json.to-string-tag.js");
/* harmony import */ var core_js_modules_es_json_to_string_tag_js__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_json_to_string_tag_js__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var core_js_modules_es_math_to_string_tag_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! core-js/modules/es.math.to-string-tag.js */ "./node_modules/core-js/modules/es.math.to-string-tag.js");
/* harmony import */ var core_js_modules_es_math_to_string_tag_js__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_math_to_string_tag_js__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! core-js/modules/es.object.define-property.js */ "./node_modules/core-js/modules/es.object.define-property.js");
/* harmony import */ var core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var core_js_modules_es_object_create_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! core-js/modules/es.object.create.js */ "./node_modules/core-js/modules/es.object.create.js");
/* harmony import */ var core_js_modules_es_object_create_js__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_create_js__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var core_js_modules_es_object_get_prototype_of_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! core-js/modules/es.object.get-prototype-of.js */ "./node_modules/core-js/modules/es.object.get-prototype-of.js");
/* harmony import */ var core_js_modules_es_object_get_prototype_of_js__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_get_prototype_of_js__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var core_js_modules_es_array_for_each_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! core-js/modules/es.array.for-each.js */ "./node_modules/core-js/modules/es.array.for-each.js");
/* harmony import */ var core_js_modules_es_array_for_each_js__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_for_each_js__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! core-js/modules/web.dom-collections.for-each.js */ "./node_modules/core-js/modules/web.dom-collections.for-each.js");
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! core-js/modules/es.function.name.js */ "./node_modules/core-js/modules/es.function.name.js");
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var core_js_modules_es_object_set_prototype_of_js__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! core-js/modules/es.object.set-prototype-of.js */ "./node_modules/core-js/modules/es.object.set-prototype-of.js");
/* harmony import */ var core_js_modules_es_object_set_prototype_of_js__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_set_prototype_of_js__WEBPACK_IMPORTED_MODULE_18__);
/* harmony import */ var core_js_modules_es_array_reverse_js__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! core-js/modules/es.array.reverse.js */ "./node_modules/core-js/modules/es.array.reverse.js");
/* harmony import */ var core_js_modules_es_array_reverse_js__WEBPACK_IMPORTED_MODULE_19___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_reverse_js__WEBPACK_IMPORTED_MODULE_19__);
/* harmony import */ var core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! core-js/modules/es.array.slice.js */ "./node_modules/core-js/modules/es.array.slice.js");
/* harmony import */ var core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_20___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_20__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_21___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_21__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router/dist/index.js");
/* harmony import */ var _hooks_useLogout__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ../hooks/useLogout */ "./assets/hooks/useLogout.js");
/* harmony import */ var react_bootstrap_Button__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! react-bootstrap/Button */ "./node_modules/react-bootstrap/esm/Button.js");
/* harmony import */ var react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! react-bootstrap/Form */ "./node_modules/react-bootstrap/esm/Form.js");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }























function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return generator._invoke = function (innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; }(innerFn, self, context), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == _typeof(value) && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; this._invoke = function (method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); }; } function maybeInvokeDelegate(delegate, context) { var method = delegate.iterator[context.method]; if (undefined === method) { if (context.delegate = null, "throw" === context.method) { if (delegate.iterator["return"] && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method)) return ContinueSentinel; context.method = "throw", context.arg = new TypeError("The iterator does not provide a 'throw' method"); } return ContinueSentinel; } var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) { if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; } return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, define(Gp, "constructor", GeneratorFunctionPrototype), define(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (object) { var keys = []; for (var key in object) { keys.push(key); } return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) { "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); } }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, "catch": function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }











var Form_MeetRapports = function Form_MeetRapports() {
  var navigate = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_23__.useNavigate)();
  var logout = (0,_hooks_useLogout__WEBPACK_IMPORTED_MODULE_22__["default"])();

  var signOut = /*#__PURE__*/function () {
    var _ref = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
      return _regeneratorRuntime().wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return logout();

            case 2:
              navigate("/connect");

            case 3:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));

    return function signOut() {
      return _ref.apply(this, arguments);
    };
  }();

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_21___default().createElement((react__WEBPACK_IMPORTED_MODULE_21___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_21___default().createElement("h3", null, "Rapport de rencontre"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_21___default().createElement(react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_24__["default"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_21___default().createElement(react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_24__["default"].Group, {
    className: "mb-3",
    controlId: "formBasicEmail"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_21___default().createElement(react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_24__["default"].Control, {
    type: "email",
    placeholder: "Tapez le nom"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_21___default().createElement(react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_24__["default"].Group, {
    className: "mb-3",
    controlId: "formBasicPassword"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_21___default().createElement(react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_24__["default"].Control, {
    type: "text",
    placeholder: "Tapez le pr\xE9nom"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_21___default().createElement(react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_24__["default"].Group, {
    className: "mb-3",
    controlId: "formBasicPassword"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_21___default().createElement(react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_24__["default"].Control, {
    type: "text",
    placeholder: "Tapez le surnom"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_21___default().createElement(react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_24__["default"].Select, {
    "aria-label": "Default select example"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_21___default().createElement("option", null, "Choissisez votre antenne"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_21___default().createElement("option", {
    value: "1"
  }, "Li\xE8ge"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_21___default().createElement("option", {
    value: "2"
  }, "Bruxelles")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_21___default().createElement(react_bootstrap_Button__WEBPACK_IMPORTED_MODULE_25__["default"], {
    variant: "primary",
    type: "submit",
    className: "btn-metis mt-3"
  }, "Submit")));
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Form_MeetRapports);

/***/ }),

/***/ "./assets/component/Home.js":
/*!**********************************!*\
  !*** ./assets/component/Home.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var core_js_modules_es_array_is_array_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.array.is-array.js */ "./node_modules/core-js/modules/es.array.is-array.js");
/* harmony import */ var core_js_modules_es_array_is_array_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_is_array_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.symbol.js */ "./node_modules/core-js/modules/es.symbol.js");
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.symbol.description.js */ "./node_modules/core-js/modules/es.symbol.description.js");
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.symbol.iterator.js */ "./node_modules/core-js/modules/es.symbol.iterator.js");
/* harmony import */ var core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.array.iterator.js */ "./node_modules/core-js/modules/es.array.iterator.js");
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es.string.iterator.js */ "./node_modules/core-js/modules/es.string.iterator.js");
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator.js */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! core-js/modules/es.array.slice.js */ "./node_modules/core-js/modules/es.array.slice.js");
/* harmony import */ var core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! core-js/modules/es.function.name.js */ "./node_modules/core-js/modules/es.function.name.js");
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var core_js_modules_es_array_from_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! core-js/modules/es.array.from.js */ "./node_modules/core-js/modules/es.array.from.js");
/* harmony import */ var core_js_modules_es_array_from_js__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_from_js__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! core-js/modules/es.regexp.exec.js */ "./node_modules/core-js/modules/es.regexp.exec.js");
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! core-js/modules/es.promise.js */ "./node_modules/core-js/modules/es.promise.js");
/* harmony import */ var core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var core_js_modules_es_symbol_async_iterator_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! core-js/modules/es.symbol.async-iterator.js */ "./node_modules/core-js/modules/es.symbol.async-iterator.js");
/* harmony import */ var core_js_modules_es_symbol_async_iterator_js__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_async_iterator_js__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var core_js_modules_es_symbol_to_string_tag_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! core-js/modules/es.symbol.to-string-tag.js */ "./node_modules/core-js/modules/es.symbol.to-string-tag.js");
/* harmony import */ var core_js_modules_es_symbol_to_string_tag_js__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_to_string_tag_js__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var core_js_modules_es_json_to_string_tag_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! core-js/modules/es.json.to-string-tag.js */ "./node_modules/core-js/modules/es.json.to-string-tag.js");
/* harmony import */ var core_js_modules_es_json_to_string_tag_js__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_json_to_string_tag_js__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var core_js_modules_es_math_to_string_tag_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! core-js/modules/es.math.to-string-tag.js */ "./node_modules/core-js/modules/es.math.to-string-tag.js");
/* harmony import */ var core_js_modules_es_math_to_string_tag_js__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_math_to_string_tag_js__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! core-js/modules/es.object.define-property.js */ "./node_modules/core-js/modules/es.object.define-property.js");
/* harmony import */ var core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var core_js_modules_es_object_create_js__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! core-js/modules/es.object.create.js */ "./node_modules/core-js/modules/es.object.create.js");
/* harmony import */ var core_js_modules_es_object_create_js__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_create_js__WEBPACK_IMPORTED_MODULE_18__);
/* harmony import */ var core_js_modules_es_object_get_prototype_of_js__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! core-js/modules/es.object.get-prototype-of.js */ "./node_modules/core-js/modules/es.object.get-prototype-of.js");
/* harmony import */ var core_js_modules_es_object_get_prototype_of_js__WEBPACK_IMPORTED_MODULE_19___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_get_prototype_of_js__WEBPACK_IMPORTED_MODULE_19__);
/* harmony import */ var core_js_modules_es_array_for_each_js__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! core-js/modules/es.array.for-each.js */ "./node_modules/core-js/modules/es.array.for-each.js");
/* harmony import */ var core_js_modules_es_array_for_each_js__WEBPACK_IMPORTED_MODULE_20___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_for_each_js__WEBPACK_IMPORTED_MODULE_20__);
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! core-js/modules/web.dom-collections.for-each.js */ "./node_modules/core-js/modules/web.dom-collections.for-each.js");
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_21___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_21__);
/* harmony import */ var core_js_modules_es_object_set_prototype_of_js__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! core-js/modules/es.object.set-prototype-of.js */ "./node_modules/core-js/modules/es.object.set-prototype-of.js");
/* harmony import */ var core_js_modules_es_object_set_prototype_of_js__WEBPACK_IMPORTED_MODULE_22___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_set_prototype_of_js__WEBPACK_IMPORTED_MODULE_22__);
/* harmony import */ var core_js_modules_es_array_reverse_js__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! core-js/modules/es.array.reverse.js */ "./node_modules/core-js/modules/es.array.reverse.js");
/* harmony import */ var core_js_modules_es_array_reverse_js__WEBPACK_IMPORTED_MODULE_23___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_reverse_js__WEBPACK_IMPORTED_MODULE_23__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_24___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_24__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router/dist/index.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/dist/index.js");
/* harmony import */ var _hooks_useLogout__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ../hooks/useLogout */ "./assets/hooks/useLogout.js");
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! @fortawesome/react-fontawesome */ "./node_modules/@fortawesome/react-fontawesome/index.es.js");
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ "./node_modules/@fortawesome/free-solid-svg-icons/index.mjs");
/* harmony import */ var _Menu__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./Menu */ "./assets/component/Menu.js");
/* harmony import */ var _Form_MeetRapports__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./Form_MeetRapports */ "./assets/component/Form_MeetRapports.js");
/* harmony import */ var _list_reportCalls__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./list_reportCalls */ "./assets/component/list_reportCalls.js");
/* harmony import */ var _list_reportGoals__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./list_reportGoals */ "./assets/component/list_reportGoals.js");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }


























function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return generator._invoke = function (innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; }(innerFn, self, context), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == _typeof(value) && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; this._invoke = function (method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); }; } function maybeInvokeDelegate(delegate, context) { var method = delegate.iterator[context.method]; if (undefined === method) { if (context.delegate = null, "throw" === context.method) { if (delegate.iterator["return"] && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method)) return ContinueSentinel; context.method = "throw", context.arg = new TypeError("The iterator does not provide a 'throw' method"); } return ContinueSentinel; } var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) { if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; } return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, define(Gp, "constructor", GeneratorFunctionPrototype), define(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (object) { var keys = []; for (var key in object) { keys.push(key); } return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) { "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); } }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, "catch": function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }











var Home = function Home() {
  var navigate = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_31__.useNavigate)();
  var logout = (0,_hooks_useLogout__WEBPACK_IMPORTED_MODULE_25__["default"])();

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_24__.useState)(0),
      _useState2 = _slicedToArray(_useState, 2),
      reportMeet = _useState2[0],
      setReportMeet = _useState2[1];

  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_24__.useState)(0),
      _useState4 = _slicedToArray(_useState3, 2),
      reportCalls = _useState4[0],
      setReportCalls = _useState4[1];

  var _useState5 = (0,react__WEBPACK_IMPORTED_MODULE_24__.useState)(0),
      _useState6 = _slicedToArray(_useState5, 2),
      reportGoals = _useState6[0],
      setReportGoals = _useState6[1];

  var signOut = /*#__PURE__*/function () {
    var _ref = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
      return _regeneratorRuntime().wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return logout();

            case 2:
              navigate("/connect");

            case 3:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));

    return function signOut() {
      return _ref.apply(this, arguments);
    };
  }();

  var _useNavigate = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_31__.useNavigate)(),
      path = _useNavigate.path,
      url = _useNavigate.url;

  var goToRepport = function goToRepport() {
    history.push("/goals");
  };

  (0,react__WEBPACK_IMPORTED_MODULE_24__.useEffect)(function () {
    setReportMeet(true);
    setReportCalls(false);
    setReportGoals(false);
  }, []);

  var onClickRepportMeet = function onClickRepportMeet() {
    setReportMeet(true);
    setReportCalls(false);
    setReportGoals(false);
  };

  var onClickRepportCalls = function onClickRepportCalls() {
    setReportMeet(false);
    setReportCalls(true);
    setReportGoals(false);
  };

  var onClickRepportGoals = function onClickRepportGoals() {
    setReportMeet(false);
    setReportCalls(false);
    setReportGoals(true);
  };

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_24___default().createElement((react__WEBPACK_IMPORTED_MODULE_24___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_24___default().createElement(_Menu__WEBPACK_IMPORTED_MODULE_27__["default"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_24___default().createElement("div", {
    className: "container-home row m-0"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_24___default().createElement("div", {
    className: "col-sm-6 d-flex align-items-center justify-content-center"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_24___default().createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_24___default().createElement("h3", null, "Bienvenue sur M\xE9tis"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_24___default().createElement("p", null, "Cliquez ici pour vos rappels ou \xE9diter un patient:"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_24___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_32__.Link, {
    onClick: onClickRepportMeet
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_24___default().createElement(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_26__.FontAwesomeIcon, {
    icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_33__.faArrowRight
  }), " Rapport de rencontre"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_24___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_32__.Link, {
    onClick: onClickRepportCalls
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_24___default().createElement(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_26__.FontAwesomeIcon, {
    icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_33__.faArrowRight
  }), " Rapport d'appels"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_24___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_32__.Link, {
    onClick: onClickRepportGoals
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_24___default().createElement(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_26__.FontAwesomeIcon, {
    icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_33__.faArrowRight
  }), " Rapport d'objectifs"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_24___default().createElement("div", {
    className: "col-sm-6 d-flex align-items-center justify-content-center container-repports"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_24___default().createElement("div", {
    className: "set-repports"
  }, reportMeet && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_24___default().createElement(_Form_MeetRapports__WEBPACK_IMPORTED_MODULE_28__["default"], null), reportCalls && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_24___default().createElement(_list_reportGoals__WEBPACK_IMPORTED_MODULE_30__["default"], null), reportGoals && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_24___default().createElement(_list_reportCalls__WEBPACK_IMPORTED_MODULE_29__["default"], null)))));
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Home);

/***/ }),

/***/ "./assets/component/Layout.js":
/*!************************************!*\
  !*** ./assets/component/Layout.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router/dist/index.js");
/* harmony import */ var _Menu__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Menu */ "./assets/component/Menu.js");




var Layout = function Layout() {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("main", {
    className: "App"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__.Outlet, null));
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Layout);

/***/ }),

/***/ "./assets/component/LinkPage.js":
/*!**************************************!*\
  !*** ./assets/component/LinkPage.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/dist/index.js");


var LinkPage = function LinkPage() {
  return /*#__PURE__*/React.createElement("section", null, /*#__PURE__*/React.createElement("h1", null, "Links"), /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("h2", null, "Public"), /*#__PURE__*/React.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_0__.Link, {
    to: "/login"
  }, "Login"), /*#__PURE__*/React.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_0__.Link, {
    to: "/register"
  }, "Register"), /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("h2", null, "Private"), /*#__PURE__*/React.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_0__.Link, {
    to: "/"
  }, "Home"), /*#__PURE__*/React.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_0__.Link, {
    to: "/editor"
  }, "Editors Page"), /*#__PURE__*/React.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_0__.Link, {
    to: "/admin"
  }, "Admin Page"));
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (LinkPage);

/***/ }),

/***/ "./assets/component/Login.js":
/*!***********************************!*\
  !*** ./assets/component/Login.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var core_js_modules_es_array_is_array_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.array.is-array.js */ "./node_modules/core-js/modules/es.array.is-array.js");
/* harmony import */ var core_js_modules_es_array_is_array_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_is_array_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.symbol.js */ "./node_modules/core-js/modules/es.symbol.js");
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.symbol.description.js */ "./node_modules/core-js/modules/es.symbol.description.js");
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.symbol.iterator.js */ "./node_modules/core-js/modules/es.symbol.iterator.js");
/* harmony import */ var core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.array.iterator.js */ "./node_modules/core-js/modules/es.array.iterator.js");
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es.string.iterator.js */ "./node_modules/core-js/modules/es.string.iterator.js");
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator.js */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! core-js/modules/es.array.slice.js */ "./node_modules/core-js/modules/es.array.slice.js");
/* harmony import */ var core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! core-js/modules/es.function.name.js */ "./node_modules/core-js/modules/es.function.name.js");
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var core_js_modules_es_array_from_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! core-js/modules/es.array.from.js */ "./node_modules/core-js/modules/es.array.from.js");
/* harmony import */ var core_js_modules_es_array_from_js__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_from_js__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! core-js/modules/es.regexp.exec.js */ "./node_modules/core-js/modules/es.regexp.exec.js");
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! core-js/modules/es.promise.js */ "./node_modules/core-js/modules/es.promise.js");
/* harmony import */ var core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var core_js_modules_es_symbol_async_iterator_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! core-js/modules/es.symbol.async-iterator.js */ "./node_modules/core-js/modules/es.symbol.async-iterator.js");
/* harmony import */ var core_js_modules_es_symbol_async_iterator_js__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_async_iterator_js__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var core_js_modules_es_symbol_to_string_tag_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! core-js/modules/es.symbol.to-string-tag.js */ "./node_modules/core-js/modules/es.symbol.to-string-tag.js");
/* harmony import */ var core_js_modules_es_symbol_to_string_tag_js__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_to_string_tag_js__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var core_js_modules_es_json_to_string_tag_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! core-js/modules/es.json.to-string-tag.js */ "./node_modules/core-js/modules/es.json.to-string-tag.js");
/* harmony import */ var core_js_modules_es_json_to_string_tag_js__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_json_to_string_tag_js__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var core_js_modules_es_math_to_string_tag_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! core-js/modules/es.math.to-string-tag.js */ "./node_modules/core-js/modules/es.math.to-string-tag.js");
/* harmony import */ var core_js_modules_es_math_to_string_tag_js__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_math_to_string_tag_js__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! core-js/modules/es.object.define-property.js */ "./node_modules/core-js/modules/es.object.define-property.js");
/* harmony import */ var core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var core_js_modules_es_object_create_js__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! core-js/modules/es.object.create.js */ "./node_modules/core-js/modules/es.object.create.js");
/* harmony import */ var core_js_modules_es_object_create_js__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_create_js__WEBPACK_IMPORTED_MODULE_18__);
/* harmony import */ var core_js_modules_es_object_get_prototype_of_js__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! core-js/modules/es.object.get-prototype-of.js */ "./node_modules/core-js/modules/es.object.get-prototype-of.js");
/* harmony import */ var core_js_modules_es_object_get_prototype_of_js__WEBPACK_IMPORTED_MODULE_19___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_get_prototype_of_js__WEBPACK_IMPORTED_MODULE_19__);
/* harmony import */ var core_js_modules_es_array_for_each_js__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! core-js/modules/es.array.for-each.js */ "./node_modules/core-js/modules/es.array.for-each.js");
/* harmony import */ var core_js_modules_es_array_for_each_js__WEBPACK_IMPORTED_MODULE_20___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_for_each_js__WEBPACK_IMPORTED_MODULE_20__);
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! core-js/modules/web.dom-collections.for-each.js */ "./node_modules/core-js/modules/web.dom-collections.for-each.js");
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_21___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_21__);
/* harmony import */ var core_js_modules_es_object_set_prototype_of_js__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! core-js/modules/es.object.set-prototype-of.js */ "./node_modules/core-js/modules/es.object.set-prototype-of.js");
/* harmony import */ var core_js_modules_es_object_set_prototype_of_js__WEBPACK_IMPORTED_MODULE_22___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_set_prototype_of_js__WEBPACK_IMPORTED_MODULE_22__);
/* harmony import */ var core_js_modules_es_array_reverse_js__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! core-js/modules/es.array.reverse.js */ "./node_modules/core-js/modules/es.array.reverse.js");
/* harmony import */ var core_js_modules_es_array_reverse_js__WEBPACK_IMPORTED_MODULE_23___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_reverse_js__WEBPACK_IMPORTED_MODULE_23__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_24___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_24__);
/* harmony import */ var _hooks_useAuth__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ../hooks/useAuth */ "./assets/hooks/useAuth.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router/dist/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_26___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_26__);
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }


























function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return generator._invoke = function (innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; }(innerFn, self, context), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == _typeof(value) && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; this._invoke = function (method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); }; } function maybeInvokeDelegate(delegate, context) { var method = delegate.iterator[context.method]; if (undefined === method) { if (context.delegate = null, "throw" === context.method) { if (delegate.iterator["return"] && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method)) return ContinueSentinel; context.method = "throw", context.arg = new TypeError("The iterator does not provide a 'throw' method"); } return ContinueSentinel; } var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) { if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; } return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, define(Gp, "constructor", GeneratorFunctionPrototype), define(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (object) { var keys = []; for (var key in object) { keys.push(key); } return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) { "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); } }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, "catch": function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }






var LOGIN_URL = "/login";

var Login = function Login() {
  var _location$state, _location$state$from;

  var _useAuth = (0,_hooks_useAuth__WEBPACK_IMPORTED_MODULE_25__["default"])(),
      setAuth = _useAuth.setAuth,
      persist = _useAuth.persist,
      setPersist = _useAuth.setPersist;

  var navigate = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_27__.useNavigate)();
  var location = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_27__.useLocation)();
  var from = ((_location$state = location.state) === null || _location$state === void 0 ? void 0 : (_location$state$from = _location$state.from) === null || _location$state$from === void 0 ? void 0 : _location$state$from.pathname) || "/";
  var userRef = (0,react__WEBPACK_IMPORTED_MODULE_24__.useRef)();
  var errRef = (0,react__WEBPACK_IMPORTED_MODULE_24__.useRef)();

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_24__.useState)(""),
      _useState2 = _slicedToArray(_useState, 2),
      email = _useState2[0],
      setUser = _useState2[1];

  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_24__.useState)(""),
      _useState4 = _slicedToArray(_useState3, 2),
      password = _useState4[0],
      setPwd = _useState4[1];

  var _useState5 = (0,react__WEBPACK_IMPORTED_MODULE_24__.useState)(""),
      _useState6 = _slicedToArray(_useState5, 2),
      errMsg = _useState6[0],
      setErrMsg = _useState6[1];

  (0,react__WEBPACK_IMPORTED_MODULE_24__.useEffect)(function () {
    userRef.current.focus();
  }, []);
  (0,react__WEBPACK_IMPORTED_MODULE_24__.useEffect)(function () {
    setErrMsg("");
  }, [email, password]);

  var handleSubmit = /*#__PURE__*/function () {
    var _ref = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(e) {
      var _roles_used$data, response, accessToken, token, roles_used, roles, _err$response, _err$response2;

      return _regeneratorRuntime().wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              e.preventDefault();
              _context.prev = 1;
              _context.next = 4;
              return axios__WEBPACK_IMPORTED_MODULE_26___default().post(LOGIN_URL, JSON.stringify({
                email: email,
                password: password
              }), {
                headers: {
                  "Content-Type": "application/json"
                }
              });

            case 4:
              response = _context.sent;
              accessToken = response.data.token;
              _context.next = 8;
              return axios__WEBPACK_IMPORTED_MODULE_26___default().get("/api/token/refresh", {
                withCredentials: true
              });

            case 8:
              token = _context.sent;
              _context.next = 11;
              return axios__WEBPACK_IMPORTED_MODULE_26___default().get("/api/getUser", {
                headers: {
                  Authorization: "Bearer ".concat(token.data.token)
                }
              });

            case 11:
              roles_used = _context.sent;
              roles = roles_used === null || roles_used === void 0 ? void 0 : (_roles_used$data = roles_used.data) === null || _roles_used$data === void 0 ? void 0 : _roles_used$data.roleNames;

              if (roles.length > 0) {
                setAuth({
                  email: email,
                  password: password,
                  roles: roles,
                  accessToken: accessToken
                });
                setUser("");
                setPwd("");
                navigate(from, {
                  replace: true
                });
              }

              _context.next = 20;
              break;

            case 16:
              _context.prev = 16;
              _context.t0 = _context["catch"](1);

              if (!(_context.t0 !== null && _context.t0 !== void 0 && _context.t0.response)) {
                setErrMsg("No Server Response");
              } else if (((_err$response = _context.t0.response) === null || _err$response === void 0 ? void 0 : _err$response.status) === 400) {
                setErrMsg("Missing Username or Password");
              } else if (((_err$response2 = _context.t0.response) === null || _err$response2 === void 0 ? void 0 : _err$response2.status) === 401) {
                setErrMsg("Unauthorized");
              } else {
                setErrMsg("Login Failed");
              }

              errRef.current.focus();

            case 20:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, null, [[1, 16]]);
    }));

    return function handleSubmit(_x) {
      return _ref.apply(this, arguments);
    };
  }();

  var togglePersist = function togglePersist() {
    setPersist(function (prev) {
      return !prev;
    });
  };

  (0,react__WEBPACK_IMPORTED_MODULE_24__.useEffect)(function () {
    localStorage.setItem("persist", persist);
  }, [persist]);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_24___default().createElement("div", {
    className: "container-login row m-0"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_24___default().createElement("div", {
    className: "col-sm-6 column-title  d-flex justify-content-center align-items-center"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_24___default().createElement("h1", null, "M\xE9tis")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_24___default().createElement("div", {
    className: "col-sm-6 column-content  d-flex justify-content-center align-items-center"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_24___default().createElement("form", {
    onSubmit: handleSubmit
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_24___default().createElement("input", {
    type: "text",
    id: "username" // className="my-4"
    ,
    ref: userRef,
    placeholder: "Tapez votre utilisateur",
    autoComplete: "off",
    onChange: function onChange(e) {
      return setUser(e.target.value);
    },
    value: email,
    required: true
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_24___default().createElement("input", {
    type: "password",
    className: "my-4",
    id: "password",
    placeholder: "Tapez votre mot de passe",
    onChange: function onChange(e) {
      return setPwd(e.target.value);
    },
    value: password,
    required: true
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_24___default().createElement("button", {
    className: "btn-metis"
  }, "Sign In"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_24___default().createElement("div", {
    className: "persistCheck  d-flex justify-content-start align-items-center mt-4"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_24___default().createElement("input", {
    type: "checkbox",
    id: "persist",
    onChange: togglePersist,
    checked: persist
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_24___default().createElement("label", {
    htmlFor: "persist"
  }, "Trust This Device"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_24___default().createElement("p", {
    ref: errRef,
    className: errMsg ? "errmsg" : "offscreen",
    "aria-live": "assertive"
  }, errMsg)));
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Login);

/***/ }),

/***/ "./assets/component/Lounge.js":
/*!************************************!*\
  !*** ./assets/component/Lounge.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/dist/index.js");


var Lounge = function Lounge() {
  return /*#__PURE__*/React.createElement("section", null, /*#__PURE__*/React.createElement("h1", null, "The Lounge"), /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("p", null, "Admins and Editors can hang out here."), /*#__PURE__*/React.createElement("div", {
    className: "flexGrow"
  }, /*#__PURE__*/React.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_0__.Link, {
    to: "/"
  }, "Home")));
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Lounge);

/***/ }),

/***/ "./assets/component/Menu.js":
/*!**********************************!*\
  !*** ./assets/component/Menu.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.promise.js */ "./node_modules/core-js/modules/es.promise.js");
/* harmony import */ var core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.symbol.js */ "./node_modules/core-js/modules/es.symbol.js");
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.symbol.description.js */ "./node_modules/core-js/modules/es.symbol.description.js");
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.symbol.iterator.js */ "./node_modules/core-js/modules/es.symbol.iterator.js");
/* harmony import */ var core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.array.iterator.js */ "./node_modules/core-js/modules/es.array.iterator.js");
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es.string.iterator.js */ "./node_modules/core-js/modules/es.string.iterator.js");
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator.js */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var core_js_modules_es_symbol_async_iterator_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! core-js/modules/es.symbol.async-iterator.js */ "./node_modules/core-js/modules/es.symbol.async-iterator.js");
/* harmony import */ var core_js_modules_es_symbol_async_iterator_js__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_async_iterator_js__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var core_js_modules_es_symbol_to_string_tag_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! core-js/modules/es.symbol.to-string-tag.js */ "./node_modules/core-js/modules/es.symbol.to-string-tag.js");
/* harmony import */ var core_js_modules_es_symbol_to_string_tag_js__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_to_string_tag_js__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var core_js_modules_es_json_to_string_tag_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! core-js/modules/es.json.to-string-tag.js */ "./node_modules/core-js/modules/es.json.to-string-tag.js");
/* harmony import */ var core_js_modules_es_json_to_string_tag_js__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_json_to_string_tag_js__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var core_js_modules_es_math_to_string_tag_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! core-js/modules/es.math.to-string-tag.js */ "./node_modules/core-js/modules/es.math.to-string-tag.js");
/* harmony import */ var core_js_modules_es_math_to_string_tag_js__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_math_to_string_tag_js__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! core-js/modules/es.object.define-property.js */ "./node_modules/core-js/modules/es.object.define-property.js");
/* harmony import */ var core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var core_js_modules_es_object_create_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! core-js/modules/es.object.create.js */ "./node_modules/core-js/modules/es.object.create.js");
/* harmony import */ var core_js_modules_es_object_create_js__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_create_js__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var core_js_modules_es_object_get_prototype_of_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! core-js/modules/es.object.get-prototype-of.js */ "./node_modules/core-js/modules/es.object.get-prototype-of.js");
/* harmony import */ var core_js_modules_es_object_get_prototype_of_js__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_get_prototype_of_js__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var core_js_modules_es_array_for_each_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! core-js/modules/es.array.for-each.js */ "./node_modules/core-js/modules/es.array.for-each.js");
/* harmony import */ var core_js_modules_es_array_for_each_js__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_for_each_js__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! core-js/modules/web.dom-collections.for-each.js */ "./node_modules/core-js/modules/web.dom-collections.for-each.js");
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! core-js/modules/es.function.name.js */ "./node_modules/core-js/modules/es.function.name.js");
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var core_js_modules_es_object_set_prototype_of_js__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! core-js/modules/es.object.set-prototype-of.js */ "./node_modules/core-js/modules/es.object.set-prototype-of.js");
/* harmony import */ var core_js_modules_es_object_set_prototype_of_js__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_set_prototype_of_js__WEBPACK_IMPORTED_MODULE_18__);
/* harmony import */ var core_js_modules_es_array_reverse_js__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! core-js/modules/es.array.reverse.js */ "./node_modules/core-js/modules/es.array.reverse.js");
/* harmony import */ var core_js_modules_es_array_reverse_js__WEBPACK_IMPORTED_MODULE_19___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_reverse_js__WEBPACK_IMPORTED_MODULE_19__);
/* harmony import */ var core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! core-js/modules/es.array.slice.js */ "./node_modules/core-js/modules/es.array.slice.js");
/* harmony import */ var core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_20___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_20__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_21___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_21__);
/* harmony import */ var react_bootstrap_Container__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! react-bootstrap/Container */ "./node_modules/react-bootstrap/esm/Container.js");
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @fortawesome/react-fontawesome */ "./node_modules/@fortawesome/react-fontawesome/index.es.js");
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ "./node_modules/@fortawesome/free-solid-svg-icons/index.mjs");
/* harmony import */ var _hooks_useLogout__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ../hooks/useLogout */ "./assets/hooks/useLogout.js");
/* harmony import */ var react_bootstrap_Nav__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! react-bootstrap/Nav */ "./node_modules/react-bootstrap/esm/Nav.js");
/* harmony import */ var react_bootstrap_Navbar__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! react-bootstrap/Navbar */ "./node_modules/react-bootstrap/esm/Navbar.js");
/* harmony import */ var react_bootstrap_NavDropdown__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! react-bootstrap/NavDropdown */ "./node_modules/react-bootstrap/esm/NavDropdown.js");
/* harmony import */ var _Search__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./Search */ "./assets/component/Search.js");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }























function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return generator._invoke = function (innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; }(innerFn, self, context), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == _typeof(value) && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; this._invoke = function (method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); }; } function maybeInvokeDelegate(delegate, context) { var method = delegate.iterator[context.method]; if (undefined === method) { if (context.delegate = null, "throw" === context.method) { if (delegate.iterator["return"] && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method)) return ContinueSentinel; context.method = "throw", context.arg = new TypeError("The iterator does not provide a 'throw' method"); } return ContinueSentinel; } var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) { if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; } return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, define(Gp, "constructor", GeneratorFunctionPrototype), define(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (object) { var keys = []; for (var key in object) { keys.push(key); } return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) { "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); } }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, "catch": function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }















var Menu = function Menu() {
  var logout = (0,_hooks_useLogout__WEBPACK_IMPORTED_MODULE_23__["default"])();

  var signOut = /*#__PURE__*/function () {
    var _ref = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
      return _regeneratorRuntime().wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return logout();

            case 2:
              navigate("/connect");

            case 3:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));

    return function signOut() {
      return _ref.apply(this, arguments);
    };
  }();

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_21___default().createElement((react__WEBPACK_IMPORTED_MODULE_21___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_21___default().createElement(react_bootstrap_Navbar__WEBPACK_IMPORTED_MODULE_25__["default"], {
    collapseOnSelect: true,
    style: {
      backgroundColor: "#91bd10"
    },
    expand: "xxl",
    className: "mb-3 menu-metis",
    variant: "dark"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_21___default().createElement(react_bootstrap_Container__WEBPACK_IMPORTED_MODULE_26__["default"], {
    fluid: true
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_21___default().createElement(react_bootstrap_Navbar__WEBPACK_IMPORTED_MODULE_25__["default"].Brand, {
    href: "/"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_21___default().createElement("span", {
    className: "text-uppercase text-white"
  }, "M\xE9tis")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_21___default().createElement(react_bootstrap_Navbar__WEBPACK_IMPORTED_MODULE_25__["default"].Toggle, {
    "aria-controls": "responsive-navbar-nav"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_21___default().createElement(react_bootstrap_Navbar__WEBPACK_IMPORTED_MODULE_25__["default"].Collapse, {
    id: "responsive-navbar-nav"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_21___default().createElement(react_bootstrap_Nav__WEBPACK_IMPORTED_MODULE_27__["default"], {
    className: "justify-content-end flex-grow-1 pe-3"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_21___default().createElement(react_bootstrap_Nav__WEBPACK_IMPORTED_MODULE_27__["default"].Link, {
    href: "/patients"
  }, "Patients"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_21___default().createElement(react_bootstrap_NavDropdown__WEBPACK_IMPORTED_MODULE_28__["default"], {
    title: "Appels",
    className: "text-white",
    id: "offcanvasNavbarDropdown-expand-".concat("xl")
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_21___default().createElement(react_bootstrap_NavDropdown__WEBPACK_IMPORTED_MODULE_28__["default"].Item, {
    href: "#action3"
  }, "Tous"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_21___default().createElement(react_bootstrap_NavDropdown__WEBPACK_IMPORTED_MODULE_28__["default"].Item, {
    href: "#action4"
  }, "Utilisateurs")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_21___default().createElement(react_bootstrap_NavDropdown__WEBPACK_IMPORTED_MODULE_28__["default"], {
    title: "Administration",
    className: "text-white",
    id: "offcanvasNavbarDropdown-expand-".concat("xl")
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_21___default().createElement(react_bootstrap_NavDropdown__WEBPACK_IMPORTED_MODULE_28__["default"].Item, {
    href: "#action3"
  }, "Tous"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_21___default().createElement(react_bootstrap_NavDropdown__WEBPACK_IMPORTED_MODULE_28__["default"].Item, {
    href: "#action4"
  }, "Contact/Organisation")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_21___default().createElement(react_bootstrap_Nav__WEBPACK_IMPORTED_MODULE_27__["default"].Link, {
    onClick: signOut
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_21___default().createElement(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_22__.FontAwesomeIcon, {
    icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_29__.faSignOut
  }), " ")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_21___default().createElement(_Search__WEBPACK_IMPORTED_MODULE_24__["default"], null)))));
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Menu);

/***/ }),

/***/ "./assets/component/Missing.js":
/*!*************************************!*\
  !*** ./assets/component/Missing.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/dist/index.js");



var Missing = function Missing() {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("article", {
    style: {
      padding: "100px"
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h1", null, "Oops!"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, "Page Not Found"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "flexGrow"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__.Link, {
    to: "/"
  }, "Visit Our Homepage")));
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Missing);

/***/ }),

/***/ "./assets/component/Patient.js":
/*!*************************************!*\
  !*** ./assets/component/Patient.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var core_js_modules_es_date_to_string_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.date.to-string.js */ "./node_modules/core-js/modules/es.date.to-string.js");
/* harmony import */ var core_js_modules_es_date_to_string_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_date_to_string_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_regexp_to_string_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.regexp.to-string.js */ "./node_modules/core-js/modules/es.regexp.to-string.js");
/* harmony import */ var core_js_modules_es_regexp_to_string_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_to_string_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_object_keys_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.object.keys.js */ "./node_modules/core-js/modules/es.object.keys.js");
/* harmony import */ var core_js_modules_es_object_keys_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_keys_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_array_is_array_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.array.is-array.js */ "./node_modules/core-js/modules/es.array.is-array.js");
/* harmony import */ var core_js_modules_es_array_is_array_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_is_array_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.symbol.js */ "./node_modules/core-js/modules/es.symbol.js");
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es.symbol.description.js */ "./node_modules/core-js/modules/es.symbol.description.js");
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core-js/modules/es.symbol.iterator.js */ "./node_modules/core-js/modules/es.symbol.iterator.js");
/* harmony import */ var core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! core-js/modules/es.array.iterator.js */ "./node_modules/core-js/modules/es.array.iterator.js");
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! core-js/modules/es.string.iterator.js */ "./node_modules/core-js/modules/es.string.iterator.js");
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator.js */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! core-js/modules/es.array.slice.js */ "./node_modules/core-js/modules/es.array.slice.js");
/* harmony import */ var core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! core-js/modules/es.function.name.js */ "./node_modules/core-js/modules/es.function.name.js");
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var core_js_modules_es_array_from_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! core-js/modules/es.array.from.js */ "./node_modules/core-js/modules/es.array.from.js");
/* harmony import */ var core_js_modules_es_array_from_js__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_from_js__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! core-js/modules/es.regexp.exec.js */ "./node_modules/core-js/modules/es.regexp.exec.js");
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router/dist/index.js");
/* harmony import */ var _Users__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./Users */ "./assets/component/Users.js");
/* harmony import */ var _Menu__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./Menu */ "./assets/component/Menu.js");
/* harmony import */ var _images_5a94e34b4c36e28de4e704f8c2d1c39a79e91b5d_png__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../images/5a94e34b4c36e28de4e704f8c2d1c39a79e91b5d.png */ "./assets/images/5a94e34b4c36e28de4e704f8c2d1c39a79e91b5d.png");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_19___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_19__);
/* harmony import */ var _hooks_useAuth__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ../hooks/useAuth */ "./assets/hooks/useAuth.js");
/* harmony import */ var react_bootstrap_Tab__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! react-bootstrap/Tab */ "./node_modules/react-bootstrap/esm/Tab.js");
/* harmony import */ var react_bootstrap_Tabs__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! react-bootstrap/Tabs */ "./node_modules/react-bootstrap/esm/Tabs.js");
/* harmony import */ var _Profile_Fiche_Fiche__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./Profile/Fiche/Fiche */ "./assets/component/Profile/Fiche/Fiche.js");
/* harmony import */ var _Profile_Indicators__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./Profile/Indicators */ "./assets/component/Profile/Indicators.js");
/* harmony import */ var _Profile_Profile__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./Profile/Profile */ "./assets/component/Profile/Profile.js");
/* harmony import */ var _Profile_Medias__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./Profile/Medias */ "./assets/component/Profile/Medias.js");
/* harmony import */ var _Profile_Contacts__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./Profile/Contacts */ "./assets/component/Profile/Contacts.js");
/* harmony import */ var _Profile_Places__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./Profile/Places */ "./assets/component/Profile/Places.js");
















function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }


















var Patient = function Patient() {
  var id = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_27__.useParams)().id;
  var backgroundImage = "../images/5a94e34b4c36e28de4e704f8c2d1c39a79e91b5d.png";

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_15__.useState)((0,_hooks_useAuth__WEBPACK_IMPORTED_MODULE_20__["default"])()),
      _useState2 = _slicedToArray(_useState, 2),
      auth = _useState2[0],
      setAuth = _useState2[1];

  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_15__.useState)(null),
      _useState4 = _slicedToArray(_useState3, 2),
      patient = _useState4[0],
      setPatient = _useState4[1];

  var _useState5 = (0,react__WEBPACK_IMPORTED_MODULE_15__.useState)(null),
      _useState6 = _slicedToArray(_useState5, 2),
      imgPatient = _useState6[0],
      setImgPatient = _useState6[1];

  var _useState7 = (0,react__WEBPACK_IMPORTED_MODULE_15__.useState)("fiche"),
      _useState8 = _slicedToArray(_useState7, 2),
      key = _useState8[0],
      setKey = _useState8[1];

  var _useState9 = (0,react__WEBPACK_IMPORTED_MODULE_15__.useState)(id),
      _useState10 = _slicedToArray(_useState9, 2),
      idPatient = _useState10[0],
      setIdPatient = _useState10[1];

  var navigate = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_27__.useNavigate)();
  var location = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_27__.useLocation)();

  var _useState11 = (0,react__WEBPACK_IMPORTED_MODULE_15__.useState)(location),
      _useState12 = _slicedToArray(_useState11, 2),
      locationWeb = _useState12[0],
      setLocation = _useState12[1];

  var formData = new FormData();
  formData.append("id", id.toString());
  var objPatient = {};
  (0,react__WEBPACK_IMPORTED_MODULE_15__.useEffect)(function () {
    axios__WEBPACK_IMPORTED_MODULE_19___default()({
      method: "post",
      url: "/api/getPatient",
      data: formData,
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer ".concat(auth.auth.accessToken)
      }
    }).then(function (response) {
      //handle success
      objPatient.patient = response.data;
      setPatient(response.data);
      axios__WEBPACK_IMPORTED_MODULE_19___default()({
        method: "post",
        url: "/api/getMediaForPatient",
        data: formData,
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer ".concat(auth.auth.accessToken)
        }
      }).then(function (response) {
        //handle success
        // setPatient(response.data);
        var backgroundImage = response.image;
        setImgPatient(response.data); // setPatient(response.data);
      })["catch"](function (response) {});
    })["catch"](function (response) {});
  }, [idPatient]); // "../build/images/5a94e34b4c36e28de4e704f8c2d1c39a79e91b5d.png"

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_15___default().createElement((react__WEBPACK_IMPORTED_MODULE_15___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_15___default().createElement(_Menu__WEBPACK_IMPORTED_MODULE_17__["default"], null), patient !== null && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_15___default().createElement("section", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_15___default().createElement("div", {
    className: "container emp-profile"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_15___default().createElement("div", {
    className: "row profile-head"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_15___default().createElement("div", {
    className: "col-sm-2"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_15___default().createElement("div", {
    className: "profile-img"
  }, imgPatient && imgPatient !== null && Object.keys(imgPatient).length > 0 && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_15___default().createElement((react__WEBPACK_IMPORTED_MODULE_15___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_15___default().createElement("img", {
    src: imgPatient.image
  }), ";"), imgPatient && imgPatient === null && Object.keys(imgPatient).length > 0 && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_15___default().createElement((react__WEBPACK_IMPORTED_MODULE_15___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_15___default().createElement("img", {
    src: "https://ucreate.ch/wp-content/uploads/2022/02/profil_vide.jpg"
  }), ";"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_15___default().createElement("div", {
    className: "file btn btn-lg btn-primary"
  }, "Change Photo", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_15___default().createElement("input", {
    type: "file",
    name: "file"
  })))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_15___default().createElement("div", {
    className: "col-sm-6"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_15___default().createElement("div", {
    className: "profile-head"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_15___default().createElement("h5", null, patient.firstname, " ", patient.lastname), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_15___default().createElement("h6", null, " ", new Date(patient.birthdate).toLocaleDateString()), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_15___default().createElement("p", {
    className: "proile-rating"
  }, "Premier contact :", " ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_15___default().createElement("span", null, " ", new Date(patient.firstContactDate).toLocaleDateString()))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_15___default().createElement("div", {
    className: "row body-profile"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_15___default().createElement(react_bootstrap_Tabs__WEBPACK_IMPORTED_MODULE_28__["default"], {
    defaultActiveKey: "profile",
    id: "uncontrolled-tab-example",
    activeKey: key,
    onSelect: function onSelect(k) {
      return setKey(k);
    },
    className: "profile-tab"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_15___default().createElement(react_bootstrap_Tab__WEBPACK_IMPORTED_MODULE_29__["default"], {
    eventKey: "fiche",
    title: "Fiche"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_15___default().createElement(_Profile_Fiche_Fiche__WEBPACK_IMPORTED_MODULE_21__["default"], null)))))));
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Patient);

/***/ }),

/***/ "./assets/component/Patients.js":
/*!**************************************!*\
  !*** ./assets/component/Patients.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var core_js_modules_es_date_to_string_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.date.to-string.js */ "./node_modules/core-js/modules/es.date.to-string.js");
/* harmony import */ var core_js_modules_es_date_to_string_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_date_to_string_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_regexp_to_string_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.regexp.to-string.js */ "./node_modules/core-js/modules/es.regexp.to-string.js");
/* harmony import */ var core_js_modules_es_regexp_to_string_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_to_string_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.array.map.js */ "./node_modules/core-js/modules/es.array.map.js");
/* harmony import */ var core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_array_is_array_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.array.is-array.js */ "./node_modules/core-js/modules/es.array.is-array.js");
/* harmony import */ var core_js_modules_es_array_is_array_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_is_array_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.symbol.js */ "./node_modules/core-js/modules/es.symbol.js");
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es.symbol.description.js */ "./node_modules/core-js/modules/es.symbol.description.js");
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core-js/modules/es.symbol.iterator.js */ "./node_modules/core-js/modules/es.symbol.iterator.js");
/* harmony import */ var core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! core-js/modules/es.array.iterator.js */ "./node_modules/core-js/modules/es.array.iterator.js");
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! core-js/modules/es.string.iterator.js */ "./node_modules/core-js/modules/es.string.iterator.js");
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator.js */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! core-js/modules/es.array.slice.js */ "./node_modules/core-js/modules/es.array.slice.js");
/* harmony import */ var core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! core-js/modules/es.function.name.js */ "./node_modules/core-js/modules/es.function.name.js");
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var core_js_modules_es_array_from_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! core-js/modules/es.array.from.js */ "./node_modules/core-js/modules/es.array.from.js");
/* harmony import */ var core_js_modules_es_array_from_js__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_from_js__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! core-js/modules/es.regexp.exec.js */ "./node_modules/core-js/modules/es.regexp.exec.js");
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var _PersistLogin__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./PersistLogin */ "./assets/component/PersistLogin.js");
/* harmony import */ var _hooks_useAuth__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../hooks/useAuth */ "./assets/hooks/useAuth.js");
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @fortawesome/react-fontawesome */ "./node_modules/@fortawesome/react-fontawesome/index.es.js");
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ "./node_modules/@fortawesome/free-solid-svg-icons/index.mjs");
/* harmony import */ var _Menu__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./Menu */ "./assets/component/Menu.js");
/* harmony import */ var react_bootstrap_Accordion__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! react-bootstrap/Accordion */ "./node_modules/react-bootstrap/esm/Accordion.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/dist/index.js");
















function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }












function Patients() {
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_15__.useState)((0,_hooks_useAuth__WEBPACK_IMPORTED_MODULE_18__["default"])()),
      _useState2 = _slicedToArray(_useState, 2),
      auth = _useState2[0],
      setAuth = _useState2[1];

  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_15__.useState)(null),
      _useState4 = _slicedToArray(_useState3, 2),
      patientsList = _useState4[0],
      setPatientsList = _useState4[1];

  var _useState5 = (0,react__WEBPACK_IMPORTED_MODULE_15__.useState)(10),
      _useState6 = _slicedToArray(_useState5, 2),
      lengthList = _useState6[0],
      setLengthList = _useState6[1];

  var formData = new FormData();
  formData.append("page", lengthList.toString());
  (0,react__WEBPACK_IMPORTED_MODULE_15__.useEffect)(function () {
    axios__WEBPACK_IMPORTED_MODULE_16___default()({
      method: "post",
      url: "/api/getPatients",
      data: formData,
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer ".concat(auth.auth.accessToken)
      }
    }).then(function (response) {
      //handle success
      setPatientsList(response);
    })["catch"](function (response) {});
  }, [lengthList, setLengthList]);

  var readMore = function readMore() {
    setLengthList(lengthList + 10);
  };

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_15___default().createElement((react__WEBPACK_IMPORTED_MODULE_15___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_15___default().createElement(_Menu__WEBPACK_IMPORTED_MODULE_20__["default"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_15___default().createElement("div", {
    className: "container container-patients row mx-auto "
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_15___default().createElement("h3", null, "Tous les patients"), patientsList && patientsList.data && patientsList.data.length > 0 && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_15___default().createElement((react__WEBPACK_IMPORTED_MODULE_15___default().Fragment), null, patientsList.data.map(function (patient) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_15___default().createElement(react_bootstrap_Accordion__WEBPACK_IMPORTED_MODULE_21__["default"], {
      className: "my-3"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_15___default().createElement(react_bootstrap_Accordion__WEBPACK_IMPORTED_MODULE_21__["default"].Item, {
      eventKey: patient.id,
      key: patient.id
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_15___default().createElement(react_bootstrap_Accordion__WEBPACK_IMPORTED_MODULE_21__["default"].Header, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_15___default().createElement("div", {
      className: "col-sm-1"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_15___default().createElement(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_19__.FontAwesomeIcon, {
      icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_22__.faUser
    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_15___default().createElement("div", {
      className: "col-sm-2"
    }, patient.firstname, " ", patient.lastname, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_15___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_23__.Link, {
      className: "seeProfil",
      to: "/" + patient.id
    }, "Voir profil")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_15___default().createElement("div", {
      className: "col-sm-2"
    }, new Date(patient.birthdate).toLocaleDateString()), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_15___default().createElement("div", {
      className: "col-sm-2"
    }, "14/02/2022"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_15___default().createElement("div", {
      className: "col-sm-3"
    }, patient.birthLocation), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_15___default().createElement("div", {
      className: "col-sm-1"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_15___default().createElement("span", {
      className: "status"
    }, patient.status))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_15___default().createElement(react_bootstrap_Accordion__WEBPACK_IMPORTED_MODULE_21__["default"].Body, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_15___default().createElement("div", {
      className: "row body-accordeonitemPatient"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_15___default().createElement("div", {
      className: "col-sm-4"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_15___default().createElement("b", null, "Derni\xE8re activit\xE9e"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_15___default().createElement("p", null, "Rapport de rencontre 12/08/2021"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_15___default().createElement("p", null, "Rapport de rencontre 20/08/2022"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_15___default().createElement("p", null, "Rapport de rencontre 14/09/2022")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_15___default().createElement("div", {
      className: "col-sm-2"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_15___default().createElement("b", null, "Hygi\xE8ne"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_15___default().createElement("p", null, "Google Agenda")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_15___default().createElement("div", {
      className: "col-sm-2"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_15___default().createElement("b", null, "Sant\xE9e mentale"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_15___default().createElement("p", null, "Google Agenda")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_15___default().createElement("div", {
      className: "col-sm-2"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_15___default().createElement("b", null, "Liens"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_15___default().createElement("p", null, "Google Agenda")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_15___default().createElement("div", {
      className: "col-sm-2"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_15___default().createElement("b", null, "Autres d\xE9tails"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_15___default().createElement("p", null, "Sans papiers"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_15___default().createElement("p", null, "Inscris au logement social"))))));
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_15___default().createElement("button", {
    className: "btn-metis",
    onClick: readMore
  }, "Read More"))));
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Patients);

/***/ }),

/***/ "./assets/component/PersistLogin.js":
/*!******************************************!*\
  !*** ./assets/component/PersistLogin.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var core_js_modules_es_array_is_array_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.array.is-array.js */ "./node_modules/core-js/modules/es.array.is-array.js");
/* harmony import */ var core_js_modules_es_array_is_array_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_is_array_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.symbol.js */ "./node_modules/core-js/modules/es.symbol.js");
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.symbol.description.js */ "./node_modules/core-js/modules/es.symbol.description.js");
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.symbol.iterator.js */ "./node_modules/core-js/modules/es.symbol.iterator.js");
/* harmony import */ var core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.array.iterator.js */ "./node_modules/core-js/modules/es.array.iterator.js");
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es.string.iterator.js */ "./node_modules/core-js/modules/es.string.iterator.js");
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator.js */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! core-js/modules/es.array.slice.js */ "./node_modules/core-js/modules/es.array.slice.js");
/* harmony import */ var core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! core-js/modules/es.function.name.js */ "./node_modules/core-js/modules/es.function.name.js");
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var core_js_modules_es_array_from_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! core-js/modules/es.array.from.js */ "./node_modules/core-js/modules/es.array.from.js");
/* harmony import */ var core_js_modules_es_array_from_js__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_from_js__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! core-js/modules/es.regexp.exec.js */ "./node_modules/core-js/modules/es.regexp.exec.js");
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! core-js/modules/es.promise.js */ "./node_modules/core-js/modules/es.promise.js");
/* harmony import */ var core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var core_js_modules_es_symbol_async_iterator_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! core-js/modules/es.symbol.async-iterator.js */ "./node_modules/core-js/modules/es.symbol.async-iterator.js");
/* harmony import */ var core_js_modules_es_symbol_async_iterator_js__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_async_iterator_js__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var core_js_modules_es_symbol_to_string_tag_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! core-js/modules/es.symbol.to-string-tag.js */ "./node_modules/core-js/modules/es.symbol.to-string-tag.js");
/* harmony import */ var core_js_modules_es_symbol_to_string_tag_js__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_to_string_tag_js__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var core_js_modules_es_json_to_string_tag_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! core-js/modules/es.json.to-string-tag.js */ "./node_modules/core-js/modules/es.json.to-string-tag.js");
/* harmony import */ var core_js_modules_es_json_to_string_tag_js__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_json_to_string_tag_js__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var core_js_modules_es_math_to_string_tag_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! core-js/modules/es.math.to-string-tag.js */ "./node_modules/core-js/modules/es.math.to-string-tag.js");
/* harmony import */ var core_js_modules_es_math_to_string_tag_js__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_math_to_string_tag_js__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! core-js/modules/es.object.define-property.js */ "./node_modules/core-js/modules/es.object.define-property.js");
/* harmony import */ var core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var core_js_modules_es_object_create_js__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! core-js/modules/es.object.create.js */ "./node_modules/core-js/modules/es.object.create.js");
/* harmony import */ var core_js_modules_es_object_create_js__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_create_js__WEBPACK_IMPORTED_MODULE_18__);
/* harmony import */ var core_js_modules_es_object_get_prototype_of_js__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! core-js/modules/es.object.get-prototype-of.js */ "./node_modules/core-js/modules/es.object.get-prototype-of.js");
/* harmony import */ var core_js_modules_es_object_get_prototype_of_js__WEBPACK_IMPORTED_MODULE_19___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_get_prototype_of_js__WEBPACK_IMPORTED_MODULE_19__);
/* harmony import */ var core_js_modules_es_array_for_each_js__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! core-js/modules/es.array.for-each.js */ "./node_modules/core-js/modules/es.array.for-each.js");
/* harmony import */ var core_js_modules_es_array_for_each_js__WEBPACK_IMPORTED_MODULE_20___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_for_each_js__WEBPACK_IMPORTED_MODULE_20__);
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! core-js/modules/web.dom-collections.for-each.js */ "./node_modules/core-js/modules/web.dom-collections.for-each.js");
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_21___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_21__);
/* harmony import */ var core_js_modules_es_object_set_prototype_of_js__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! core-js/modules/es.object.set-prototype-of.js */ "./node_modules/core-js/modules/es.object.set-prototype-of.js");
/* harmony import */ var core_js_modules_es_object_set_prototype_of_js__WEBPACK_IMPORTED_MODULE_22___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_set_prototype_of_js__WEBPACK_IMPORTED_MODULE_22__);
/* harmony import */ var core_js_modules_es_array_reverse_js__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! core-js/modules/es.array.reverse.js */ "./node_modules/core-js/modules/es.array.reverse.js");
/* harmony import */ var core_js_modules_es_array_reverse_js__WEBPACK_IMPORTED_MODULE_23___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_reverse_js__WEBPACK_IMPORTED_MODULE_23__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_24___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_24__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router/dist/index.js");
/* harmony import */ var _hooks_useRefreshToken__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ../hooks/useRefreshToken */ "./assets/hooks/useRefreshToken.js");
/* harmony import */ var _hooks_useAuth__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ../hooks/useAuth */ "./assets/hooks/useAuth.js");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }


























function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return generator._invoke = function (innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; }(innerFn, self, context), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == _typeof(value) && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; this._invoke = function (method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); }; } function maybeInvokeDelegate(delegate, context) { var method = delegate.iterator[context.method]; if (undefined === method) { if (context.delegate = null, "throw" === context.method) { if (delegate.iterator["return"] && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method)) return ContinueSentinel; context.method = "throw", context.arg = new TypeError("The iterator does not provide a 'throw' method"); } return ContinueSentinel; } var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) { if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; } return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, define(Gp, "constructor", GeneratorFunctionPrototype), define(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (object) { var keys = []; for (var key in object) { keys.push(key); } return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) { "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); } }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, "catch": function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }







var PersistLogin = function PersistLogin() {
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_24__.useState)(true),
      _useState2 = _slicedToArray(_useState, 2),
      isLoading = _useState2[0],
      setIsLoading = _useState2[1];

  var refresh = (0,_hooks_useRefreshToken__WEBPACK_IMPORTED_MODULE_25__["default"])();

  var _useAuth = (0,_hooks_useAuth__WEBPACK_IMPORTED_MODULE_26__["default"])(),
      auth = _useAuth.auth,
      persist = _useAuth.persist;

  (0,react__WEBPACK_IMPORTED_MODULE_24__.useEffect)(function () {
    var isMounted = true;

    var verifyRefreshToken = /*#__PURE__*/function () {
      var _ref = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
        return _regeneratorRuntime().wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.prev = 0;
                _context.next = 3;
                return refresh();

              case 3:
                _context.next = 8;
                break;

              case 5:
                _context.prev = 5;
                _context.t0 = _context["catch"](0);
                console.error(_context.t0);

              case 8:
                _context.prev = 8;
                isMounted && setIsLoading(false);
                return _context.finish(8);

              case 11:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, null, [[0, 5, 8, 11]]);
      }));

      return function verifyRefreshToken() {
        return _ref.apply(this, arguments);
      };
    }(); // persist added here AFTER tutorial video
    // Avoids unwanted call to verifyRefreshToken


    !(auth !== null && auth !== void 0 && auth.accessToken) && persist ? verifyRefreshToken() : setIsLoading(false);
    return function () {
      return isMounted = false;
    };
  }, []);
  (0,react__WEBPACK_IMPORTED_MODULE_24__.useEffect)(function () {// console.log(`isLoading: ${isLoading}`);
    // console.log(`aT: ${JSON.stringify(auth?.accessToken)}`);
  }, [isLoading]);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_24___default().createElement((react__WEBPACK_IMPORTED_MODULE_24___default().Fragment), null, !persist ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_24___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_27__.Outlet, null) : isLoading ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_24___default().createElement("p", null, "Loading...") : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_24___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_27__.Outlet, null));
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (PersistLogin);

/***/ }),

/***/ "./assets/component/Posts.js":
/*!***********************************!*\
  !*** ./assets/component/Posts.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.array.map.js */ "./node_modules/core-js/modules/es.array.map.js");
/* harmony import */ var core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.function.name.js */ "./node_modules/core-js/modules/es.function.name.js");
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.symbol.js */ "./node_modules/core-js/modules/es.symbol.js");
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.symbol.description.js */ "./node_modules/core-js/modules/es.symbol.description.js");
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_object_set_prototype_of_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.object.set-prototype-of.js */ "./node_modules/core-js/modules/es.object.set-prototype-of.js");
/* harmony import */ var core_js_modules_es_object_set_prototype_of_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_set_prototype_of_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_function_bind_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.function.bind.js */ "./node_modules/core-js/modules/es.function.bind.js");
/* harmony import */ var core_js_modules_es_function_bind_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_function_bind_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es_object_get_prototype_of_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es.object.get-prototype-of.js */ "./node_modules/core-js/modules/es.object.get-prototype-of.js");
/* harmony import */ var core_js_modules_es_object_get_prototype_of_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_get_prototype_of_js__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var core_js_modules_es_reflect_construct_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! core-js/modules/es.reflect.construct.js */ "./node_modules/core-js/modules/es.reflect.construct.js");
/* harmony import */ var core_js_modules_es_reflect_construct_js__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_reflect_construct_js__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var core_js_modules_es_object_create_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! core-js/modules/es.object.create.js */ "./node_modules/core-js/modules/es.object.create.js");
/* harmony import */ var core_js_modules_es_object_create_js__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_create_js__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! core-js/modules/es.object.define-property.js */ "./node_modules/core-js/modules/es.object.define-property.js");
/* harmony import */ var core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! core-js/modules/es.symbol.iterator.js */ "./node_modules/core-js/modules/es.symbol.iterator.js");
/* harmony import */ var core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! core-js/modules/es.array.iterator.js */ "./node_modules/core-js/modules/es.array.iterator.js");
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! core-js/modules/es.string.iterator.js */ "./node_modules/core-js/modules/es.string.iterator.js");
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator.js */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_16__);
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

















function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

// ./assets/js/components/Posts.js



var Posts = /*#__PURE__*/function (_Component) {
  _inherits(Posts, _Component);

  var _super = _createSuper(Posts);

  function Posts() {
    var _this;

    _classCallCheck(this, Posts);

    _this = _super.call(this);
    _this.state = {
      posts: [],
      loading: true
    };
    return _this;
  }

  _createClass(Posts, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.getPosts();
    }
  }, {
    key: "getPosts",
    value: function getPosts() {
      axios__WEBPACK_IMPORTED_MODULE_16___default().get("https://127.0.0.1:8000/session").then(function (res) {// const posts = res.data.slice(0,15);
        // this.setState({ posts, loading: false })
        // console.log(res)
      });
    }
  }, {
    key: "render",
    value: function render() {
      var loading = this.state.loading;
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_15___default().createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_15___default().createElement("section", {
        className: "row-section"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_15___default().createElement("div", {
        className: "container"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_15___default().createElement("div", {
        className: "row"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_15___default().createElement("h2", {
        className: "text-center"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_15___default().createElement("span", null, "List of posts"), "Created with", " ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_15___default().createElement("i", {
        className: "fa fa-heart"
      }), " by yemiwebby", " ")), loading ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_15___default().createElement("div", {
        className: "row text-center"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_15___default().createElement("span", {
        className: "fa fa-spin fa-spinner fa-4x"
      })) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_15___default().createElement("div", {
        className: "row"
      }, this.state.posts.map(function (post) {
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_15___default().createElement("div", {
          className: "col-md-10 offset-md-1 row-block",
          key: post.id
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_15___default().createElement("ul", {
          id: "sortable"
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_15___default().createElement("li", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_15___default().createElement("div", {
          className: "media"
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_15___default().createElement("div", {
          className: "media-body"
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_15___default().createElement("h4", null, post.name), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_15___default().createElement("p", null, post.description))))));
      })))));
    }
  }]);

  return Posts;
}(react__WEBPACK_IMPORTED_MODULE_15__.Component);

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Posts);

/***/ }),

/***/ "./assets/component/Profile/Contacts.js":
/*!**********************************************!*\
  !*** ./assets/component/Profile/Contacts.js ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var core_js_modules_es_date_to_string_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.date.to-string.js */ "./node_modules/core-js/modules/es.date.to-string.js");
/* harmony import */ var core_js_modules_es_date_to_string_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_date_to_string_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_regexp_to_string_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.regexp.to-string.js */ "./node_modules/core-js/modules/es.regexp.to-string.js");
/* harmony import */ var core_js_modules_es_regexp_to_string_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_to_string_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.array.map.js */ "./node_modules/core-js/modules/es.array.map.js");
/* harmony import */ var core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_array_is_array_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.array.is-array.js */ "./node_modules/core-js/modules/es.array.is-array.js");
/* harmony import */ var core_js_modules_es_array_is_array_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_is_array_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.symbol.js */ "./node_modules/core-js/modules/es.symbol.js");
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es.symbol.description.js */ "./node_modules/core-js/modules/es.symbol.description.js");
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core-js/modules/es.symbol.iterator.js */ "./node_modules/core-js/modules/es.symbol.iterator.js");
/* harmony import */ var core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! core-js/modules/es.array.iterator.js */ "./node_modules/core-js/modules/es.array.iterator.js");
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! core-js/modules/es.string.iterator.js */ "./node_modules/core-js/modules/es.string.iterator.js");
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator.js */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! core-js/modules/es.array.slice.js */ "./node_modules/core-js/modules/es.array.slice.js");
/* harmony import */ var core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! core-js/modules/es.function.name.js */ "./node_modules/core-js/modules/es.function.name.js");
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var core_js_modules_es_array_from_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! core-js/modules/es.array.from.js */ "./node_modules/core-js/modules/es.array.from.js");
/* harmony import */ var core_js_modules_es_array_from_js__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_from_js__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! core-js/modules/es.regexp.exec.js */ "./node_modules/core-js/modules/es.regexp.exec.js");
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var _hooks_useAuth__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../hooks/useAuth */ "./assets/hooks/useAuth.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router/dist/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_17__);
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }





















var Contacts = function Contacts() {
  var _listContacts$data, _listContacts$data2;

  var id = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_18__.useParams)().id;
  var formData = new FormData();
  formData.append("id", id.toString());

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_15__.useState)((0,_hooks_useAuth__WEBPACK_IMPORTED_MODULE_16__["default"])()),
      _useState2 = _slicedToArray(_useState, 2),
      auth = _useState2[0],
      setAuth = _useState2[1];

  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_15__.useState)(id),
      _useState4 = _slicedToArray(_useState3, 2),
      idPatient = _useState4[0],
      setIdPatient = _useState4[1];

  var _useState5 = (0,react__WEBPACK_IMPORTED_MODULE_15__.useState)(null),
      _useState6 = _slicedToArray(_useState5, 2),
      listContacts = _useState6[0],
      setContacts = _useState6[1];

  var _useState7 = (0,react__WEBPACK_IMPORTED_MODULE_15__.useState)(),
      _useState8 = _slicedToArray(_useState7, 2),
      options = _useState8[0],
      setOptions = _useState8[1];

  var _useState9 = (0,react__WEBPACK_IMPORTED_MODULE_15__.useState)(),
      _useState10 = _slicedToArray(_useState9, 2),
      filterDates = _useState10[0],
      setFilterDates = _useState10[1];

  (0,react__WEBPACK_IMPORTED_MODULE_15__.useEffect)(function () {
    axios__WEBPACK_IMPORTED_MODULE_17___default()({
      method: "post",
      url: "/api/getContactsByPatients",
      data: formData,
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer ".concat(auth.auth.accessToken)
      }
    }).then(function (response) {
      setContacts(response);
    })["catch"](function (response) {});
  }, [idPatient]);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_15___default().createElement((react__WEBPACK_IMPORTED_MODULE_15___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_15___default().createElement("h5", null, "Contacts"), listContacts && listContacts.data.length > 0 && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_15___default().createElement((react__WEBPACK_IMPORTED_MODULE_15___default().Fragment), null, listContacts === null || listContacts === void 0 ? void 0 : (_listContacts$data = listContacts.data) === null || _listContacts$data === void 0 ? void 0 : _listContacts$data.map(function (item, id) {
    var _item$cont, _item$cont2;

    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_15___default().createElement("div", {
      className: "row"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_15___default().createElement("div", {
      className: "col-sm-4"
    }, item === null || item === void 0 ? void 0 : (_item$cont = item.cont) === null || _item$cont === void 0 ? void 0 : _item$cont.firstname, " ", item === null || item === void 0 ? void 0 : (_item$cont2 = item.cont) === null || _item$cont2 === void 0 ? void 0 : _item$cont2.lastname));
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_15___default().createElement("h5", null, "Patients"), listContacts && listContacts.data.length > 0 && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_15___default().createElement((react__WEBPACK_IMPORTED_MODULE_15___default().Fragment), null, listContacts === null || listContacts === void 0 ? void 0 : (_listContacts$data2 = listContacts.data) === null || _listContacts$data2 === void 0 ? void 0 : _listContacts$data2.map(function (item, id) {
    var _item$orpa, _item$orpa2;

    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_15___default().createElement("div", {
      className: "row"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_15___default().createElement("div", {
      className: "col-sm-4"
    }, item === null || item === void 0 ? void 0 : (_item$orpa = item.orpa) === null || _item$orpa === void 0 ? void 0 : _item$orpa.firstname, " ", item === null || item === void 0 ? void 0 : (_item$orpa2 = item.orpa) === null || _item$orpa2 === void 0 ? void 0 : _item$orpa2.lastname));
  })));
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Contacts);

/***/ }),

/***/ "./assets/component/Profile/Dropzone.js":
/*!**********************************************!*\
  !*** ./assets/component/Profile/Dropzone.js ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.array.map.js */ "./node_modules/core-js/modules/es.array.map.js");
/* harmony import */ var core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_dropzone__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-dropzone */ "./node_modules/react-dropzone/dist/es/index.js");




var Basic = function Basic(props) {
  var _useDropzone = (0,react_dropzone__WEBPACK_IMPORTED_MODULE_2__.useDropzone)(),
      acceptedFiles = _useDropzone.acceptedFiles,
      getRootProps = _useDropzone.getRootProps,
      getInputProps = _useDropzone.getInputProps;

  var files = acceptedFiles.map(function (file) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("li", {
      key: file.path
    }, file.path, " - ", file.size, " bytes");
  });
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("div", {
    className: "row container-dropzone mb-4"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("div", getRootProps({
    className: "dropzone col-sm-6"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("input", getInputProps()), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("p", null, "Uploadez vos fichiers ici")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("div", {
    className: "col-sm-6"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("h6", null, "Fichiers upload\xE9e"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("p", null, files)));
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Basic);

/***/ }),

/***/ "./assets/component/Profile/Fiche/Block-Infos.js":
/*!*******************************************************!*\
  !*** ./assets/component/Profile/Fiche/Block-Infos.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var core_js_modules_es_date_to_string_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.date.to-string.js */ "./node_modules/core-js/modules/es.date.to-string.js");
/* harmony import */ var core_js_modules_es_date_to_string_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_date_to_string_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_regexp_to_string_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.regexp.to-string.js */ "./node_modules/core-js/modules/es.regexp.to-string.js");
/* harmony import */ var core_js_modules_es_regexp_to_string_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_to_string_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.array.map.js */ "./node_modules/core-js/modules/es.array.map.js");
/* harmony import */ var core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_string_link_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.string.link.js */ "./node_modules/core-js/modules/es.string.link.js");
/* harmony import */ var core_js_modules_es_string_link_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_link_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_array_is_array_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.array.is-array.js */ "./node_modules/core-js/modules/es.array.is-array.js");
/* harmony import */ var core_js_modules_es_array_is_array_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_is_array_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es.symbol.js */ "./node_modules/core-js/modules/es.symbol.js");
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core-js/modules/es.symbol.description.js */ "./node_modules/core-js/modules/es.symbol.description.js");
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! core-js/modules/es.symbol.iterator.js */ "./node_modules/core-js/modules/es.symbol.iterator.js");
/* harmony import */ var core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! core-js/modules/es.array.iterator.js */ "./node_modules/core-js/modules/es.array.iterator.js");
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! core-js/modules/es.string.iterator.js */ "./node_modules/core-js/modules/es.string.iterator.js");
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator.js */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! core-js/modules/es.array.slice.js */ "./node_modules/core-js/modules/es.array.slice.js");
/* harmony import */ var core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! core-js/modules/es.function.name.js */ "./node_modules/core-js/modules/es.function.name.js");
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var core_js_modules_es_array_from_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! core-js/modules/es.array.from.js */ "./node_modules/core-js/modules/es.array.from.js");
/* harmony import */ var core_js_modules_es_array_from_js__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_from_js__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! core-js/modules/es.regexp.exec.js */ "./node_modules/core-js/modules/es.regexp.exec.js");
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router/dist/index.js");
/* harmony import */ var _hooks_useAuth__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../../../hooks/useAuth */ "./assets/hooks/useAuth.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_18__);
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @fortawesome/react-fontawesome */ "./node_modules/@fortawesome/react-fontawesome/index.es.js");
/* harmony import */ var _ModalItemFiche__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./ModalItemFiche */ "./assets/component/Profile/Fiche/ModalItemFiche.js");

















function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }













var BlockInfos = function BlockInfos(props) {
  var _props$infos;

  var id = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_21__.useParams)().id;
  var backgroundImage = "../images/5a94e34b4c36e28de4e704f8c2d1c39a79e91b5d.png";

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_16__.useState)((0,_hooks_useAuth__WEBPACK_IMPORTED_MODULE_17__["default"])()),
      _useState2 = _slicedToArray(_useState, 2),
      auth = _useState2[0],
      setAuth = _useState2[1];

  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_16__.useState)(id),
      _useState4 = _slicedToArray(_useState3, 2),
      idPatient = _useState4[0],
      setIdPatient = _useState4[1];

  var location = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_21__.useLocation)();
  var formData = new FormData();
  formData.append("id", id.toString());

  var _useState5 = (0,react__WEBPACK_IMPORTED_MODULE_16__.useState)(null),
      _useState6 = _slicedToArray(_useState5, 2),
      informationPatient = _useState6[0],
      setInformation = _useState6[1];

  var _useState7 = (0,react__WEBPACK_IMPORTED_MODULE_16__.useState)(null),
      _useState8 = _slicedToArray(_useState7, 2),
      informationTemplateBlock = _useState8[0],
      setInformationTemplateBlock = _useState8[1]; // useEffect(() => {
  //   axios({
  //     method: "post",
  //     url: "/api/patientsInformationByPatients",
  //     data: formData,
  //     headers: {
  //       "Content-Type": "application/json",
  //       Authorization: `Bearer ${auth.auth.accessToken}`,
  //     },
  //   })
  //     .then(function (response) {
  //       setInformation(response.data);
  //     })
  //     .catch(function (response) {});
  // }, [idPatient]);


  console.log(props);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_16___default().createElement((react__WEBPACK_IMPORTED_MODULE_16___default().Fragment), null, (_props$infos = props.infos) === null || _props$infos === void 0 ? void 0 : _props$infos.map(function (patient, id) {
    var _patient$suge, _patient$suge2, _patient$patientInfor;

    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_16___default().createElement((react__WEBPACK_IMPORTED_MODULE_16___default().Fragment), null, patient && ((_patient$suge = patient.suge) === null || _patient$suge === void 0 ? void 0 : _patient$suge.pathString) === props.link && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_16___default().createElement("div", {
      className: "row"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_16___default().createElement("div", {
      className: "col-sm-4"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_16___default().createElement("p", null, (_patient$suge2 = patient.suge) === null || _patient$suge2 === void 0 ? void 0 : _patient$suge2.value)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_16___default().createElement("div", {
      className: "col-sm-4"
    }, patient === null || patient === void 0 ? void 0 : (_patient$patientInfor = patient.patientInformation) === null || _patient$patientInfor === void 0 ? void 0 : _patient$patientInfor.map(function (pi, id) {
      var _pi$sugg;

      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_16___default().createElement("p", null, (_pi$sugg = pi.sugg) === null || _pi$sugg === void 0 ? void 0 : _pi$sugg.value);
    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_16___default().createElement("div", {
      className: "col-sm-4"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_16___default().createElement(_ModalItemFiche__WEBPACK_IMPORTED_MODULE_20__["default"], {
      link: props.link,
      infos: patient
    }))));
  }));
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (BlockInfos);

/***/ }),

/***/ "./assets/component/Profile/Fiche/Fiche.js":
/*!*************************************************!*\
  !*** ./assets/component/Profile/Fiche/Fiche.js ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var core_js_modules_es_date_to_string_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.date.to-string.js */ "./node_modules/core-js/modules/es.date.to-string.js");
/* harmony import */ var core_js_modules_es_date_to_string_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_date_to_string_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_regexp_to_string_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.regexp.to-string.js */ "./node_modules/core-js/modules/es.regexp.to-string.js");
/* harmony import */ var core_js_modules_es_regexp_to_string_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_to_string_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_array_is_array_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.array.is-array.js */ "./node_modules/core-js/modules/es.array.is-array.js");
/* harmony import */ var core_js_modules_es_array_is_array_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_is_array_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.symbol.js */ "./node_modules/core-js/modules/es.symbol.js");
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.symbol.description.js */ "./node_modules/core-js/modules/es.symbol.description.js");
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es.symbol.iterator.js */ "./node_modules/core-js/modules/es.symbol.iterator.js");
/* harmony import */ var core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core-js/modules/es.array.iterator.js */ "./node_modules/core-js/modules/es.array.iterator.js");
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! core-js/modules/es.string.iterator.js */ "./node_modules/core-js/modules/es.string.iterator.js");
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator.js */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! core-js/modules/es.array.slice.js */ "./node_modules/core-js/modules/es.array.slice.js");
/* harmony import */ var core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! core-js/modules/es.function.name.js */ "./node_modules/core-js/modules/es.function.name.js");
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var core_js_modules_es_array_from_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! core-js/modules/es.array.from.js */ "./node_modules/core-js/modules/es.array.from.js");
/* harmony import */ var core_js_modules_es_array_from_js__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_from_js__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! core-js/modules/es.regexp.exec.js */ "./node_modules/core-js/modules/es.regexp.exec.js");
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router/dist/index.js");
/* harmony import */ var react_bootstrap_Accordion__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! react-bootstrap/Accordion */ "./node_modules/react-bootstrap/esm/Accordion.js");
/* harmony import */ var _hooks_useAuth__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../../hooks/useAuth */ "./assets/hooks/useAuth.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @fortawesome/react-fontawesome */ "./node_modules/@fortawesome/react-fontawesome/index.es.js");
/* harmony import */ var _ModalItemFiche__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./ModalItemFiche */ "./assets/component/Profile/Fiche/ModalItemFiche.js");
/* harmony import */ var _Block_Infos__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./Block-Infos */ "./assets/component/Profile/Fiche/Block-Infos.js");















function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }














var Fiche = function Fiche() {
  var id = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_20__.useParams)().id;
  var backgroundImage = "../images/5a94e34b4c36e28de4e704f8c2d1c39a79e91b5d.png";

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_14__.useState)((0,_hooks_useAuth__WEBPACK_IMPORTED_MODULE_15__["default"])()),
      _useState2 = _slicedToArray(_useState, 2),
      auth = _useState2[0],
      setAuth = _useState2[1];

  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_14__.useState)(id),
      _useState4 = _slicedToArray(_useState3, 2),
      idPatient = _useState4[0],
      setIdPatient = _useState4[1];

  var location = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_20__.useLocation)();
  var formData = new FormData();
  formData.append("id", id.toString());

  var _useState5 = (0,react__WEBPACK_IMPORTED_MODULE_14__.useState)(null),
      _useState6 = _slicedToArray(_useState5, 2),
      informationPatient = _useState6[0],
      setInformation = _useState6[1];

  var _useState7 = (0,react__WEBPACK_IMPORTED_MODULE_14__.useState)(null),
      _useState8 = _slicedToArray(_useState7, 2),
      informationTemplateBlock = _useState8[0],
      setInformationTemplateBlock = _useState8[1];

  (0,react__WEBPACK_IMPORTED_MODULE_14__.useEffect)(function () {
    axios__WEBPACK_IMPORTED_MODULE_16___default()({
      method: "post",
      url: "/api/patientsInformationByPatients",
      data: formData,
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer ".concat(auth.auth.accessToken)
      }
    }).then(function (response) {
      setInformation(response.data);
    })["catch"](function (response) {});
  }, [idPatient]); // console.log("infos", informationPatient);

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_14___default().createElement("section", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_14___default().createElement(react_bootstrap_Accordion__WEBPACK_IMPORTED_MODULE_21__["default"], {
    defaultActiveKey: "0",
    flush: true,
    className: "accordion-fiche"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_14___default().createElement(react_bootstrap_Accordion__WEBPACK_IMPORTED_MODULE_21__["default"].Item, {
    eventKey: "0"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_14___default().createElement(react_bootstrap_Accordion__WEBPACK_IMPORTED_MODULE_21__["default"].Header, null, "Statut de suivi"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_14___default().createElement(react_bootstrap_Accordion__WEBPACK_IMPORTED_MODULE_21__["default"].Body, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_14___default().createElement(_Block_Infos__WEBPACK_IMPORTED_MODULE_19__["default"], {
    infos: informationPatient,
    link: "/patient/fiche/statut-du-suivi"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_14___default().createElement(_Block_Infos__WEBPACK_IMPORTED_MODULE_19__["default"], {
    infos: informationPatient,
    link: "/patient/suivi/equipes"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_14___default().createElement(_Block_Infos__WEBPACK_IMPORTED_MODULE_19__["default"], {
    infos: informationPatient,
    link: "/patient/suivi/programme"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_14___default().createElement(_Block_Infos__WEBPACK_IMPORTED_MODULE_19__["default"], {
    infos: informationPatient,
    link: "/patient/suivi/antenne"
  })))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_14___default().createElement(react_bootstrap_Accordion__WEBPACK_IMPORTED_MODULE_21__["default"], {
    className: "accordion-fiche",
    flush: true
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_14___default().createElement(react_bootstrap_Accordion__WEBPACK_IMPORTED_MODULE_21__["default"].Item, {
    eventKey: "1"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_14___default().createElement(react_bootstrap_Accordion__WEBPACK_IMPORTED_MODULE_21__["default"].Header, null, "Information g\xE9n\xE9rale"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_14___default().createElement(react_bootstrap_Accordion__WEBPACK_IMPORTED_MODULE_21__["default"].Body, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_14___default().createElement(_Block_Infos__WEBPACK_IMPORTED_MODULE_19__["default"], {
    infos: informationPatient,
    link: "/patient/fiche/information-generale/genre"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_14___default().createElement(_Block_Infos__WEBPACK_IMPORTED_MODULE_19__["default"], {
    infos: informationPatient,
    link: "/patient/fiche/information-generale/etat-civil"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_14___default().createElement(_Block_Infos__WEBPACK_IMPORTED_MODULE_19__["default"], {
    infos: informationPatient,
    link: "/patient/fiche/information-generale/composition-familliale"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_14___default().createElement(_Block_Infos__WEBPACK_IMPORTED_MODULE_19__["default"], {
    infos: informationPatient,
    link: "/patient/fiche/information-generale/nationalite"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_14___default().createElement(_Block_Infos__WEBPACK_IMPORTED_MODULE_19__["default"], {
    infos: informationPatient,
    link: "/patient/fiche/information-generale/titre-de-sejour"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_14___default().createElement(_Block_Infos__WEBPACK_IMPORTED_MODULE_19__["default"], {
    infos: informationPatient,
    link: "/patient/fiche/information-generale/numero-de-telephone"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_14___default().createElement(_Block_Infos__WEBPACK_IMPORTED_MODULE_19__["default"], {
    infos: informationPatient,
    link: "/patient/fiche/information-generale/e-mail"
  })))));
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Fiche);

/***/ }),

/***/ "./assets/component/Profile/Fiche/ModalItemFiche.js":
/*!**********************************************************!*\
  !*** ./assets/component/Profile/Fiche/ModalItemFiche.js ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var core_js_modules_es_date_to_string_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.date.to-string.js */ "./node_modules/core-js/modules/es.date.to-string.js");
/* harmony import */ var core_js_modules_es_date_to_string_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_date_to_string_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_regexp_to_string_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.regexp.to-string.js */ "./node_modules/core-js/modules/es.regexp.to-string.js");
/* harmony import */ var core_js_modules_es_regexp_to_string_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_to_string_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_string_link_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.string.link.js */ "./node_modules/core-js/modules/es.string.link.js");
/* harmony import */ var core_js_modules_es_string_link_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_link_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.array.map.js */ "./node_modules/core-js/modules/es.array.map.js");
/* harmony import */ var core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_array_is_array_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.array.is-array.js */ "./node_modules/core-js/modules/es.array.is-array.js");
/* harmony import */ var core_js_modules_es_array_is_array_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_is_array_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es.symbol.js */ "./node_modules/core-js/modules/es.symbol.js");
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core-js/modules/es.symbol.description.js */ "./node_modules/core-js/modules/es.symbol.description.js");
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! core-js/modules/es.symbol.iterator.js */ "./node_modules/core-js/modules/es.symbol.iterator.js");
/* harmony import */ var core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! core-js/modules/es.array.iterator.js */ "./node_modules/core-js/modules/es.array.iterator.js");
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! core-js/modules/es.string.iterator.js */ "./node_modules/core-js/modules/es.string.iterator.js");
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator.js */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! core-js/modules/es.array.slice.js */ "./node_modules/core-js/modules/es.array.slice.js");
/* harmony import */ var core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! core-js/modules/es.function.name.js */ "./node_modules/core-js/modules/es.function.name.js");
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var core_js_modules_es_array_from_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! core-js/modules/es.array.from.js */ "./node_modules/core-js/modules/es.array.from.js");
/* harmony import */ var core_js_modules_es_array_from_js__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_from_js__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! core-js/modules/es.regexp.exec.js */ "./node_modules/core-js/modules/es.regexp.exec.js");
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var react_bootstrap_Button__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! react-bootstrap/Button */ "./node_modules/react-bootstrap/esm/Button.js");
/* harmony import */ var react_bootstrap_Modal__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! react-bootstrap/Modal */ "./node_modules/react-bootstrap/esm/Modal.js");
/* harmony import */ var _hooks_useAuth__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../../../hooks/useAuth */ "./assets/hooks/useAuth.js");
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @fortawesome/react-fontawesome */ "./node_modules/@fortawesome/react-fontawesome/index.es.js");
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ "./node_modules/@fortawesome/free-solid-svg-icons/index.mjs");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router/dist/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_19___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_19__);
/* harmony import */ var react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! react-bootstrap/Form */ "./node_modules/react-bootstrap/esm/Form.js");
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }


















function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }











function ModalItemFiche(props) {
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_16__.useState)(false),
      _useState2 = _slicedToArray(_useState, 2),
      show = _useState2[0],
      setShow = _useState2[1];

  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_16__.useState)((0,_hooks_useAuth__WEBPACK_IMPORTED_MODULE_17__["default"])()),
      _useState4 = _slicedToArray(_useState3, 2),
      auth = _useState4[0],
      setAuth = _useState4[1];

  var id = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_20__.useParams)().id;
  var formData = new FormData();
  formData.append("id", id.toString());
  formData.append("pathString", props.link);

  var _useState5 = (0,react__WEBPACK_IMPORTED_MODULE_16__.useState)(null),
      _useState6 = _slicedToArray(_useState5, 2),
      infos = _useState6[0],
      setInfos = _useState6[1];

  var _useState7 = (0,react__WEBPACK_IMPORTED_MODULE_16__.useState)(null),
      _useState8 = _slicedToArray(_useState7, 2),
      elementsOpt = _useState8[0],
      setElementsOpt = _useState8[1];

  var _useState9 = (0,react__WEBPACK_IMPORTED_MODULE_16__.useState)(id),
      _useState10 = _slicedToArray(_useState9, 2),
      idPatient = _useState10[0],
      setIdPatient = _useState10[1];

  var handleClose = function handleClose() {
    return setShow(false);
  };

  var handleShow = function handleShow() {
    return setShow(true);
  };

  (0,react__WEBPACK_IMPORTED_MODULE_16__.useEffect)(function () {
    setElementsOpt.apply(void 0, _toConsumableArray(props.infos.suggestionsByBlock)); // axios({
    //   method: "post",
    //   url: "/api/findElAndBlckAndValByPatient",
    //   data: formData,
    //   headers: {
    //     "Content-Type": "application/json",
    //     Authorization: `Bearer ${auth.auth.accessToken}`,
    //   },
    // })
    //   .then(function (response) {
    //     setInfos(response);
    //   })
    //   .catch(function (response) {});
  }, [idPatient]); // console.log(...props.infos.suggestionsByBlock);

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_16___default().createElement((react__WEBPACK_IMPORTED_MODULE_16___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_16___default().createElement(react_bootstrap_Button__WEBPACK_IMPORTED_MODULE_21__["default"], {
    onClick: handleShow
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_16___default().createElement(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_18__.FontAwesomeIcon, {
    icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_22__.faPlusCircle
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_16___default().createElement(react_bootstrap_Modal__WEBPACK_IMPORTED_MODULE_23__["default"], {
    show: show,
    onHide: handleClose
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_16___default().createElement(react_bootstrap_Modal__WEBPACK_IMPORTED_MODULE_23__["default"].Header, {
    closeButton: true
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_16___default().createElement(react_bootstrap_Modal__WEBPACK_IMPORTED_MODULE_23__["default"].Title, null, "Modifier une information")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_16___default().createElement(react_bootstrap_Modal__WEBPACK_IMPORTED_MODULE_23__["default"].Body, null, " ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_16___default().createElement((react__WEBPACK_IMPORTED_MODULE_16___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_16___default().createElement(react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_24__["default"].Label, {
    htmlFor: "inputValue"
  }, "Valeur"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_16___default().createElement(react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_24__["default"].Select, {
    size: "lg"
  }, elementsOpt === null || elementsOpt === void 0 ? void 0 : elementsOpt.map(function (el, id) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_16___default().createElement((react__WEBPACK_IMPORTED_MODULE_16___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_16___default().createElement("option", null, el === null || el === void 0 ? void 0 : el.value));
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_16___default().createElement(react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_24__["default"].Label, {
    htmlFor: "inputValue"
  }, "Valeur Sp\xE9cifique"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_16___default().createElement(react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_24__["default"].Control, {
    type: "text",
    id: "inputValueSp\xE9cifique",
    "aria-describedby": "valueSp\xE9cifique"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_16___default().createElement("p", null, "Les suggestions marqu\xE9es d'une \xE9toile (*) dans la liste ci-dessus demandent obligatoirement une valeur sp\xE9cifique."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_16___default().createElement(react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_24__["default"].Label, {
    htmlFor: "inputValue"
  }, "D\xE9but"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_16___default().createElement(react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_24__["default"].Control, {
    type: "date",
    id: "inputValueSp\xE9cifique",
    "aria-describedby": "valueSp\xE9cifique"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_16___default().createElement(react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_24__["default"].Label, {
    htmlFor: "inputValue"
  }, "Fin"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_16___default().createElement(react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_24__["default"].Control, {
    type: "date",
    id: "inputValueSp\xE9cifique",
    "aria-describedby": "valueSp\xE9cifique"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_16___default().createElement(react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_24__["default"].Label, {
    htmlFor: "inputValue"
  }, "Commentaire"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_16___default().createElement(react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_24__["default"].Control, {
    as: "textarea",
    rows: 3
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_16___default().createElement(react_bootstrap_Modal__WEBPACK_IMPORTED_MODULE_23__["default"].Footer, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_16___default().createElement(react_bootstrap_Button__WEBPACK_IMPORTED_MODULE_21__["default"], {
    onClick: handleClose
  }, "Close"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_16___default().createElement(react_bootstrap_Button__WEBPACK_IMPORTED_MODULE_21__["default"], {
    onClick: handleClose
  }, "Save Changes"))));
} // render(<Modal />);


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ModalItemFiche);

/***/ }),

/***/ "./assets/component/Profile/Indicators.js":
/*!************************************************!*\
  !*** ./assets/component/Profile/Indicators.js ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ App)
/* harmony export */ });
/* harmony import */ var core_js_modules_es_date_to_string_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.date.to-string.js */ "./node_modules/core-js/modules/es.date.to-string.js");
/* harmony import */ var core_js_modules_es_date_to_string_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_date_to_string_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_regexp_to_string_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.regexp.to-string.js */ "./node_modules/core-js/modules/es.regexp.to-string.js");
/* harmony import */ var core_js_modules_es_regexp_to_string_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_to_string_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.array.filter.js */ "./node_modules/core-js/modules/es.array.filter.js");
/* harmony import */ var core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.function.name.js */ "./node_modules/core-js/modules/es.function.name.js");
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_array_for_each_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.array.for-each.js */ "./node_modules/core-js/modules/es.array.for-each.js");
/* harmony import */ var core_js_modules_es_array_for_each_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_for_each_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/web.dom-collections.for-each.js */ "./node_modules/core-js/modules/web.dom-collections.for-each.js");
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_es_array_index_of_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core-js/modules/es.array.index-of.js */ "./node_modules/core-js/modules/es.array.index-of.js");
/* harmony import */ var core_js_modules_es_array_index_of_js__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_index_of_js__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! core-js/modules/es.array.map.js */ "./node_modules/core-js/modules/es.array.map.js");
/* harmony import */ var core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var core_js_modules_es_array_is_array_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! core-js/modules/es.array.is-array.js */ "./node_modules/core-js/modules/es.array.is-array.js");
/* harmony import */ var core_js_modules_es_array_is_array_js__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_is_array_js__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! core-js/modules/es.symbol.js */ "./node_modules/core-js/modules/es.symbol.js");
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! core-js/modules/es.symbol.description.js */ "./node_modules/core-js/modules/es.symbol.description.js");
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! core-js/modules/es.symbol.iterator.js */ "./node_modules/core-js/modules/es.symbol.iterator.js");
/* harmony import */ var core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! core-js/modules/es.array.iterator.js */ "./node_modules/core-js/modules/es.array.iterator.js");
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! core-js/modules/es.string.iterator.js */ "./node_modules/core-js/modules/es.string.iterator.js");
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator.js */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! core-js/modules/es.array.slice.js */ "./node_modules/core-js/modules/es.array.slice.js");
/* harmony import */ var core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var core_js_modules_es_array_from_js__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! core-js/modules/es.array.from.js */ "./node_modules/core-js/modules/es.array.from.js");
/* harmony import */ var core_js_modules_es_array_from_js__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_from_js__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! core-js/modules/es.regexp.exec.js */ "./node_modules/core-js/modules/es.regexp.exec.js");
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_18__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_19___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_19__);
/* harmony import */ var chart_js__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! chart.js */ "./node_modules/chart.js/dist/chart.mjs");
/* harmony import */ var react_chartjs_2__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! react-chartjs-2 */ "./node_modules/react-chartjs-2/dist/index.js");
/* harmony import */ var _hooks_useAuth__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ../../hooks/useAuth */ "./assets/hooks/useAuth.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router/dist/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_22___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_22__);
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }



























chart_js__WEBPACK_IMPORTED_MODULE_20__.Chart.register(chart_js__WEBPACK_IMPORTED_MODULE_20__.CategoryScale, chart_js__WEBPACK_IMPORTED_MODULE_20__.LinearScale, chart_js__WEBPACK_IMPORTED_MODULE_20__.BarElement, chart_js__WEBPACK_IMPORTED_MODULE_20__.Title, chart_js__WEBPACK_IMPORTED_MODULE_20__.Tooltip, chart_js__WEBPACK_IMPORTED_MODULE_20__.Legend);
function App() {
  var id = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_23__.useParams)().id;
  var formData = new FormData();
  formData.append("id", id.toString());

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_19__.useState)((0,_hooks_useAuth__WEBPACK_IMPORTED_MODULE_21__["default"])()),
      _useState2 = _slicedToArray(_useState, 2),
      auth = _useState2[0],
      setAuth = _useState2[1];

  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_19__.useState)(id),
      _useState4 = _slicedToArray(_useState3, 2),
      idPatient = _useState4[0],
      setIdPatient = _useState4[1];

  var _useState5 = (0,react__WEBPACK_IMPORTED_MODULE_19__.useState)(),
      _useState6 = _slicedToArray(_useState5, 2),
      informations = _useState6[0],
      setInformations = _useState6[1];

  var _useState7 = (0,react__WEBPACK_IMPORTED_MODULE_19__.useState)(),
      _useState8 = _slicedToArray(_useState7, 2),
      options = _useState8[0],
      setOptions = _useState8[1];

  var _useState9 = (0,react__WEBPACK_IMPORTED_MODULE_19__.useState)(),
      _useState10 = _slicedToArray(_useState9, 2),
      filterDates = _useState10[0],
      setFilterDates = _useState10[1];

  (0,react__WEBPACK_IMPORTED_MODULE_19__.useEffect)(function () {
    axios__WEBPACK_IMPORTED_MODULE_22___default()({
      method: "post",
      url: "/api/getFollowUpReportsIndicators",
      data: formData,
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer ".concat(auth.auth.accessToken)
      }
    }).then(function (response) {
      var com = response.data.filter(function (e) {
        return e.indi.name === "Comportement";
      });
      var vet = response.data.filter(function (e) {
        return e.indi.name === "Vêtements";
      });
      var cor = response.data.filter(function (e) {
        return e.indi.name === "Corps";
      });
      var arrDates = [];
      response.data.forEach(function (element) {
        var dateformated = new Date(element.fore.reportDate).toLocaleString("fr-BE", {
          dateStyle: "short"
        });
        arrDates.push(dateformated);
      });
      var filterDates = arrDates.filter(function (value, index, array) {
        return array.indexOf(value) === index;
      });
      setFilterDates(filterDates);

      if (filterDates && filterDates.length > 0 && com && com.length > 0 && vet && vet.length > 0 && cor && cor.length > 0) {
        setOptions({
          plugins: {
            title: {
              display: true,
              text: "CVC évolution"
            }
          },
          responsive: true,
          scales: {
            x: {
              stacked: true
            },
            y: {
              stacked: true
            }
          }
        });
        setInformations({
          labels: _toConsumableArray(filterDates),
          datasets: [{
            label: "Comportement",
            data: _toConsumableArray(com.map(function (e) {
              return e.value;
            })),
            backgroundColor: "rgb(255, 99, 132)"
          }, {
            label: "Vêtements",
            data: _toConsumableArray(vet.map(function (e) {
              return e.value;
            })),
            backgroundColor: "rgb(75, 192, 192)"
          }, {
            label: "Corps",
            data: _toConsumableArray(cor.map(function (e) {
              return e.value;
            })),
            backgroundColor: "rgb(53, 162, 235)"
          }]
        });
      } // return response.data;

    })["catch"](function (response) {});
  }, [idPatient]);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_19___default().createElement((react__WEBPACK_IMPORTED_MODULE_19___default().Fragment), null, options && informations && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_19___default().createElement(react_chartjs_2__WEBPACK_IMPORTED_MODULE_24__.Bar, {
    options: options,
    data: informations
  }));
}

/***/ }),

/***/ "./assets/component/Profile/Medias.js":
/*!********************************************!*\
  !*** ./assets/component/Profile/Medias.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var core_js_modules_es_date_to_string_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.date.to-string.js */ "./node_modules/core-js/modules/es.date.to-string.js");
/* harmony import */ var core_js_modules_es_date_to_string_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_date_to_string_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_regexp_to_string_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.regexp.to-string.js */ "./node_modules/core-js/modules/es.regexp.to-string.js");
/* harmony import */ var core_js_modules_es_regexp_to_string_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_to_string_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.array.map.js */ "./node_modules/core-js/modules/es.array.map.js");
/* harmony import */ var core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_array_is_array_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.array.is-array.js */ "./node_modules/core-js/modules/es.array.is-array.js");
/* harmony import */ var core_js_modules_es_array_is_array_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_is_array_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.symbol.js */ "./node_modules/core-js/modules/es.symbol.js");
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es.symbol.description.js */ "./node_modules/core-js/modules/es.symbol.description.js");
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core-js/modules/es.symbol.iterator.js */ "./node_modules/core-js/modules/es.symbol.iterator.js");
/* harmony import */ var core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! core-js/modules/es.array.iterator.js */ "./node_modules/core-js/modules/es.array.iterator.js");
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! core-js/modules/es.string.iterator.js */ "./node_modules/core-js/modules/es.string.iterator.js");
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator.js */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! core-js/modules/es.array.slice.js */ "./node_modules/core-js/modules/es.array.slice.js");
/* harmony import */ var core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! core-js/modules/es.function.name.js */ "./node_modules/core-js/modules/es.function.name.js");
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var core_js_modules_es_array_from_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! core-js/modules/es.array.from.js */ "./node_modules/core-js/modules/es.array.from.js");
/* harmony import */ var core_js_modules_es_array_from_js__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_from_js__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! core-js/modules/es.regexp.exec.js */ "./node_modules/core-js/modules/es.regexp.exec.js");
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var _hooks_useAuth__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../hooks/useAuth */ "./assets/hooks/useAuth.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router/dist/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var _Dropzone__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./Dropzone */ "./assets/component/Profile/Dropzone.js");
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }






















var Medias = function Medias() {
  var _listMedias$data;

  var id = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_19__.useParams)().id;
  var formData = new FormData();
  formData.append("id", id.toString());

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_15__.useState)((0,_hooks_useAuth__WEBPACK_IMPORTED_MODULE_16__["default"])()),
      _useState2 = _slicedToArray(_useState, 2),
      auth = _useState2[0],
      setAuth = _useState2[1];

  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_15__.useState)(id),
      _useState4 = _slicedToArray(_useState3, 2),
      idPatient = _useState4[0],
      setIdPatient = _useState4[1];

  var _useState5 = (0,react__WEBPACK_IMPORTED_MODULE_15__.useState)(null),
      _useState6 = _slicedToArray(_useState5, 2),
      listMedias = _useState6[0],
      setMedias = _useState6[1];

  var _useState7 = (0,react__WEBPACK_IMPORTED_MODULE_15__.useState)(),
      _useState8 = _slicedToArray(_useState7, 2),
      options = _useState8[0],
      setOptions = _useState8[1];

  var _useState9 = (0,react__WEBPACK_IMPORTED_MODULE_15__.useState)(),
      _useState10 = _slicedToArray(_useState9, 2),
      filterDates = _useState10[0],
      setFilterDates = _useState10[1];

  (0,react__WEBPACK_IMPORTED_MODULE_15__.useEffect)(function () {
    axios__WEBPACK_IMPORTED_MODULE_17___default()({
      method: "post",
      url: "/api/getAllMediasByPatients",
      data: formData,
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer ".concat(auth.auth.accessToken)
      }
    }).then(function (response) {
      setMedias(response);
    })["catch"](function (response) {});
  }, [idPatient]);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_15___default().createElement((react__WEBPACK_IMPORTED_MODULE_15___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_15___default().createElement(_Dropzone__WEBPACK_IMPORTED_MODULE_18__["default"], null), listMedias && listMedias.data.length > 0 && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_15___default().createElement((react__WEBPACK_IMPORTED_MODULE_15___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_15___default().createElement("h6", null, "Liste de fichiers d\xE9j\xE0 pr\xE9sents"), listMedias === null || listMedias === void 0 ? void 0 : (_listMedias$data = listMedias.data) === null || _listMedias$data === void 0 ? void 0 : _listMedias$data.map(function (medias, id) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_15___default().createElement("div", {
      className: "row"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_15___default().createElement("div", {
      className: "col-sm-3"
    }, medias.originalFilename), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_15___default().createElement("div", {
      className: "col-sm-2"
    }, medias.sugg.parentSugg.value), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_15___default().createElement("div", {
      className: "col-sm-2"
    }, medias.comment), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_15___default().createElement("div", {
      className: "col-sm-2"
    }, new Date(medias.date).toLocaleString("fr-BE", {
      dateStyle: "short"
    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_15___default().createElement("div", {
      className: "col-sm-3"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_15___default().createElement("button", {
      className: "btn-metis delete-btn"
    }, "delete"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_15___default().createElement("button", {
      className: "btn-metis"
    }, "t\xE9l\xE9charger")));
  })));
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Medias);

/***/ }),

/***/ "./assets/component/Profile/Places.js":
/*!********************************************!*\
  !*** ./assets/component/Profile/Places.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var core_js_modules_es_date_to_string_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.date.to-string.js */ "./node_modules/core-js/modules/es.date.to-string.js");
/* harmony import */ var core_js_modules_es_date_to_string_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_date_to_string_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_regexp_to_string_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.regexp.to-string.js */ "./node_modules/core-js/modules/es.regexp.to-string.js");
/* harmony import */ var core_js_modules_es_regexp_to_string_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_to_string_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.array.map.js */ "./node_modules/core-js/modules/es.array.map.js");
/* harmony import */ var core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_array_is_array_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.array.is-array.js */ "./node_modules/core-js/modules/es.array.is-array.js");
/* harmony import */ var core_js_modules_es_array_is_array_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_is_array_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.symbol.js */ "./node_modules/core-js/modules/es.symbol.js");
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es.symbol.description.js */ "./node_modules/core-js/modules/es.symbol.description.js");
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core-js/modules/es.symbol.iterator.js */ "./node_modules/core-js/modules/es.symbol.iterator.js");
/* harmony import */ var core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! core-js/modules/es.array.iterator.js */ "./node_modules/core-js/modules/es.array.iterator.js");
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! core-js/modules/es.string.iterator.js */ "./node_modules/core-js/modules/es.string.iterator.js");
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator.js */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! core-js/modules/es.array.slice.js */ "./node_modules/core-js/modules/es.array.slice.js");
/* harmony import */ var core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! core-js/modules/es.function.name.js */ "./node_modules/core-js/modules/es.function.name.js");
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var core_js_modules_es_array_from_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! core-js/modules/es.array.from.js */ "./node_modules/core-js/modules/es.array.from.js");
/* harmony import */ var core_js_modules_es_array_from_js__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_from_js__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! core-js/modules/es.regexp.exec.js */ "./node_modules/core-js/modules/es.regexp.exec.js");
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var _hooks_useAuth__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../hooks/useAuth */ "./assets/hooks/useAuth.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router/dist/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var _Dropzone__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./Dropzone */ "./assets/component/Profile/Dropzone.js");
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }






















var Places = function Places() {
  var _listPlaces$data;

  var id = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_19__.useParams)().id;
  var formData = new FormData();
  formData.append("id", id.toString());

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_15__.useState)((0,_hooks_useAuth__WEBPACK_IMPORTED_MODULE_16__["default"])()),
      _useState2 = _slicedToArray(_useState, 2),
      auth = _useState2[0],
      setAuth = _useState2[1];

  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_15__.useState)(id),
      _useState4 = _slicedToArray(_useState3, 2),
      idPatient = _useState4[0],
      setIdPatient = _useState4[1];

  var _useState5 = (0,react__WEBPACK_IMPORTED_MODULE_15__.useState)(null),
      _useState6 = _slicedToArray(_useState5, 2),
      listPlaces = _useState6[0],
      setPlaces = _useState6[1];

  var _useState7 = (0,react__WEBPACK_IMPORTED_MODULE_15__.useState)(),
      _useState8 = _slicedToArray(_useState7, 2),
      options = _useState8[0],
      setOptions = _useState8[1];

  var _useState9 = (0,react__WEBPACK_IMPORTED_MODULE_15__.useState)(),
      _useState10 = _slicedToArray(_useState9, 2),
      filterDates = _useState10[0],
      setFilterDates = _useState10[1];

  (0,react__WEBPACK_IMPORTED_MODULE_15__.useEffect)(function () {
    axios__WEBPACK_IMPORTED_MODULE_17___default()({
      method: "post",
      url: "/api/getPlacesPatients",
      data: formData,
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer ".concat(auth.auth.accessToken)
      }
    }).then(function (response) {
      setPlaces(response);
    })["catch"](function (response) {});
  }, [idPatient]);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_15___default().createElement((react__WEBPACK_IMPORTED_MODULE_15___default().Fragment), null, listPlaces && listPlaces.data.length > 0 && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_15___default().createElement((react__WEBPACK_IMPORTED_MODULE_15___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_15___default().createElement("h6", null, "Lieux"), listPlaces === null || listPlaces === void 0 ? void 0 : (_listPlaces$data = listPlaces.data) === null || _listPlaces$data === void 0 ? void 0 : _listPlaces$data.map(function (places, id) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_15___default().createElement("div", {
      className: "row"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_15___default().createElement("div", {
      className: "col-sm-3"
    }, places.cont.firstname, places.cont.lastname));
  })));
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Places);

/***/ }),

/***/ "./assets/component/Profile/Profile.js":
/*!*********************************************!*\
  !*** ./assets/component/Profile/Profile.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var core_js_modules_es_date_to_string_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.date.to-string.js */ "./node_modules/core-js/modules/es.date.to-string.js");
/* harmony import */ var core_js_modules_es_date_to_string_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_date_to_string_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_regexp_to_string_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.regexp.to-string.js */ "./node_modules/core-js/modules/es.regexp.to-string.js");
/* harmony import */ var core_js_modules_es_regexp_to_string_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_to_string_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.array.map.js */ "./node_modules/core-js/modules/es.array.map.js");
/* harmony import */ var core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.symbol.js */ "./node_modules/core-js/modules/es.symbol.js");
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.symbol.description.js */ "./node_modules/core-js/modules/es.symbol.description.js");
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es_array_is_array_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es.array.is-array.js */ "./node_modules/core-js/modules/es.array.is-array.js");
/* harmony import */ var core_js_modules_es_array_is_array_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_is_array_js__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core-js/modules/es.symbol.iterator.js */ "./node_modules/core-js/modules/es.symbol.iterator.js");
/* harmony import */ var core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! core-js/modules/es.array.iterator.js */ "./node_modules/core-js/modules/es.array.iterator.js");
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! core-js/modules/es.string.iterator.js */ "./node_modules/core-js/modules/es.string.iterator.js");
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator.js */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! core-js/modules/es.array.slice.js */ "./node_modules/core-js/modules/es.array.slice.js");
/* harmony import */ var core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! core-js/modules/es.function.name.js */ "./node_modules/core-js/modules/es.function.name.js");
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var core_js_modules_es_array_from_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! core-js/modules/es.array.from.js */ "./node_modules/core-js/modules/es.array.from.js");
/* harmony import */ var core_js_modules_es_array_from_js__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_from_js__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! core-js/modules/es.regexp.exec.js */ "./node_modules/core-js/modules/es.regexp.exec.js");
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var _hooks_useAuth__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../..//hooks/useAuth */ "./assets/hooks/useAuth.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router/dist/index.js");
















function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }






var Profile = function Profile() {
  var id = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_18__.useParams)().id;

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_15__.useState)((0,_hooks_useAuth__WEBPACK_IMPORTED_MODULE_16__["default"])()),
      _useState2 = _slicedToArray(_useState, 2),
      auth = _useState2[0],
      setAuth = _useState2[1];

  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_15__.useState)(id),
      _useState4 = _slicedToArray(_useState3, 2),
      idPatient = _useState4[0],
      setIdPatient = _useState4[1];

  var formData = new FormData();
  formData.append("id", id.toString());
  var objPatient = {};

  var _useState5 = (0,react__WEBPACK_IMPORTED_MODULE_15__.useState)(null),
      _useState6 = _slicedToArray(_useState5, 2),
      informationPatient = _useState6[0],
      setInformation = _useState6[1];

  var _useState7 = (0,react__WEBPACK_IMPORTED_MODULE_15__.useState)(null),
      _useState8 = _slicedToArray(_useState7, 2),
      goals = _useState8[0],
      setGoals = _useState8[1];

  var _useState9 = (0,react__WEBPACK_IMPORTED_MODULE_15__.useState)(null),
      _useState10 = _slicedToArray(_useState9, 2),
      activities = _useState10[0],
      setActivities = _useState10[1]; // getFollowUpReportsGoals


  (0,react__WEBPACK_IMPORTED_MODULE_15__.useEffect)(function () {
    axios__WEBPACK_IMPORTED_MODULE_17___default()({
      method: "post",
      url: "/api/getFollowUpReportsById",
      data: formData,
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer ".concat(auth.auth.accessToken)
      }
    }).then(function (response) {
      setInformation(response);
    })["catch"](function (response) {});
    axios__WEBPACK_IMPORTED_MODULE_17___default()({
      method: "post",
      url: "/api/getFollowUpReportsGoals",
      data: formData,
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer ".concat(auth.auth.accessToken)
      }
    }).then(function (response) {
      setGoals(response);
    })["catch"](function (response) {});
  }, [idPatient]);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_15___default().createElement("div", {
    className: "container-ongletProfile"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_15___default().createElement("div", {
    className: "row item-report"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_15___default().createElement("div", {
    className: "col-sm-3"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_15___default().createElement("h6", null, "Objectifs"), goals === null || goals === void 0 ? void 0 : goals.data.map(function (g, id) {
    var _g$func;

    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_15___default().createElement((react__WEBPACK_IMPORTED_MODULE_15___default().Fragment), null, g && g.type === 1 && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_15___default().createElement("div", {
      className: "item-goals",
      key: id
    }, new Date(g.creationDate).toLocaleString("fr-BE", {
      dateStyle: "short"
    }), g === null || g === void 0 ? void 0 : (_g$func = g.func) === null || _g$func === void 0 ? void 0 : _g$func.value, " ", g === null || g === void 0 ? void 0 : g.description));
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_15___default().createElement("h6", null, "Appels"), goals === null || goals === void 0 ? void 0 : goals.data.map(function (g, id) {
    var _g$func2;

    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_15___default().createElement((react__WEBPACK_IMPORTED_MODULE_15___default().Fragment), null, g && (g === null || g === void 0 ? void 0 : g.type) === 2 && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_15___default().createElement("div", {
      className: "item-goals",
      key: id
    }, new Date(g.creationDate).toLocaleString("fr-BE", {
      dateStyle: "short"
    }), g === null || g === void 0 ? void 0 : (_g$func2 = g.func) === null || _g$func2 === void 0 ? void 0 : _g$func2.value, " ", g === null || g === void 0 ? void 0 : g.description));
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_15___default().createElement("div", {
    className: "col-sm-9"
  }, informationPatient === null || informationPatient === void 0 ? void 0 : informationPatient.data.map(function (r, id) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_15___default().createElement("div", {
      key: id,
      className: "report-content"
    }, r && r.activityType === 2 && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_15___default().createElement("h6", null, "Appel Sortant"), r && r.activityType === 4 && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_15___default().createElement("h6", null, "Appel Entrant"), r && r.deletedAt === null && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_15___default().createElement("div", {
      className: "mt-4",
      dangerouslySetInnerHTML: {
        __html: r.content
      }
    }));
  }))));
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Profile);

/***/ }),

/***/ "./assets/component/RequireAuth.js":
/*!*****************************************!*\
  !*** ./assets/component/RequireAuth.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var core_js_modules_es_array_find_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.array.find.js */ "./node_modules/core-js/modules/es.array.find.js");
/* harmony import */ var core_js_modules_es_array_find_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_find_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_array_includes_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.array.includes.js */ "./node_modules/core-js/modules/es.array.includes.js");
/* harmony import */ var core_js_modules_es_array_includes_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_includes_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_string_includes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.string.includes.js */ "./node_modules/core-js/modules/es.string.includes.js");
/* harmony import */ var core_js_modules_es_string_includes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_includes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router/dist/index.js");
/* harmony import */ var _hooks_useAuth__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../hooks/useAuth */ "./assets/hooks/useAuth.js");








var RequireAuth = function RequireAuth(_ref) {
  var _auth$roles;

  var allowedRoles = _ref.allowedRoles;

  var _useAuth = (0,_hooks_useAuth__WEBPACK_IMPORTED_MODULE_5__["default"])(),
      auth = _useAuth.auth;

  var location = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_6__.useLocation)();
  return auth !== null && auth !== void 0 && (_auth$roles = auth.roles) !== null && _auth$roles !== void 0 && _auth$roles.find(function (role) {
    return allowedRoles === null || allowedRoles === void 0 ? void 0 : allowedRoles.includes(role);
  }) ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_6__.Outlet, null) : auth !== null && auth !== void 0 && auth.accessToken ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_6__.Navigate, {
    to: "/unauthorized",
    state: {
      from: location
    },
    replace: true
  }) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_6__.Navigate, {
    to: "/connect",
    state: {
      from: location
    },
    replace: true
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (RequireAuth);

/***/ }),

/***/ "./assets/component/Search.js":
/*!************************************!*\
  !*** ./assets/component/Search.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var core_js_modules_es_date_to_string_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.date.to-string.js */ "./node_modules/core-js/modules/es.date.to-string.js");
/* harmony import */ var core_js_modules_es_date_to_string_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_date_to_string_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_regexp_to_string_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.regexp.to-string.js */ "./node_modules/core-js/modules/es.regexp.to-string.js");
/* harmony import */ var core_js_modules_es_regexp_to_string_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_to_string_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.array.map.js */ "./node_modules/core-js/modules/es.array.map.js");
/* harmony import */ var core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_array_is_array_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.array.is-array.js */ "./node_modules/core-js/modules/es.array.is-array.js");
/* harmony import */ var core_js_modules_es_array_is_array_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_is_array_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.symbol.js */ "./node_modules/core-js/modules/es.symbol.js");
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es.symbol.description.js */ "./node_modules/core-js/modules/es.symbol.description.js");
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core-js/modules/es.symbol.iterator.js */ "./node_modules/core-js/modules/es.symbol.iterator.js");
/* harmony import */ var core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! core-js/modules/es.array.iterator.js */ "./node_modules/core-js/modules/es.array.iterator.js");
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! core-js/modules/es.string.iterator.js */ "./node_modules/core-js/modules/es.string.iterator.js");
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator.js */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! core-js/modules/es.array.slice.js */ "./node_modules/core-js/modules/es.array.slice.js");
/* harmony import */ var core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! core-js/modules/es.function.name.js */ "./node_modules/core-js/modules/es.function.name.js");
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var core_js_modules_es_array_from_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! core-js/modules/es.array.from.js */ "./node_modules/core-js/modules/es.array.from.js");
/* harmony import */ var core_js_modules_es_array_from_js__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_from_js__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! core-js/modules/es.regexp.exec.js */ "./node_modules/core-js/modules/es.regexp.exec.js");
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! react-bootstrap/Form */ "./node_modules/react-bootstrap/esm/Form.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var _hooks_useAuth__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../hooks/useAuth */ "./assets/hooks/useAuth.js");
















function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }











var Search = function Search() {
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_15__.useState)(null),
      _useState2 = _slicedToArray(_useState, 2),
      valueSearch = _useState2[0],
      setSearch = _useState2[1];

  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_15__.useState)((0,_hooks_useAuth__WEBPACK_IMPORTED_MODULE_17__["default"])()),
      _useState4 = _slicedToArray(_useState3, 2),
      auth = _useState4[0],
      setAuth = _useState4[1];

  var _useState5 = (0,react__WEBPACK_IMPORTED_MODULE_15__.useState)(null),
      _useState6 = _slicedToArray(_useState5, 2),
      resultSearch = _useState6[0],
      setResultSearch = _useState6[1];

  var _useState7 = (0,react__WEBPACK_IMPORTED_MODULE_15__.useState)(false),
      _useState8 = _slicedToArray(_useState7, 2),
      isOpen = _useState8[0],
      setOpenResult = _useState8[1];

  var setValue = function setValue(e) {
    // e.defaultPrevented();
    // console.log(e);
    setSearch(e.target.value); // posts.filter((e) => e.name === valueSearch);
    // console.log(valueSearch);

    if (valueSearch && (valueSearch === null || valueSearch === void 0 ? void 0 : valueSearch.length) > 1) {
      setOpenResult(true);
      axios__WEBPACK_IMPORTED_MODULE_16___default()({
        method: "post",
        url: "/api/getSearch",
        params: {
          val: valueSearch.toString()
        },
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer ".concat(auth.auth.accessToken)
        }
      }).then(function (response) {
        //handle success
        // setPatientsList(response);
        setResultSearch(response.data); // console.log(resultSearch);

        setSearch(e.target.value);
      })["catch"](function (response) {// console.log(response);
      });
    } else {
      setOpenResult(false);
    }
  };

  var onClickIfValue = function onClickIfValue(e) {
    if ((resultSearch === null || resultSearch === void 0 ? void 0 : resultSearch.length) > 0) {
      setOpenResult(true);
    }
  }; // const onBlursetValue = (e) => {
  //   const currentTarget = e.currentTarget;
  //   // Check the newly focused element in the next tick of the event loop
  //   setTimeout(() => {
  //     // Check if the new activeElement is a child of the original container
  //     if (!currentTarget.contains(document.activeElement)) {
  //       // You can invoke a callback or add custom logic here
  //       setOpenResult(false);
  //     }
  //   }, 0);
  // };


  var redirectionToPatient = function redirectionToPatient(id) {
    if (id) {
      return window.location.href = "/" + id;
    }
  };

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_15___default().createElement(react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_18__["default"], {
    className: "d-flex"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_15___default().createElement(react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_18__["default"].Control, {
    type: "search",
    placeholder: "Search",
    className: "me-2" // onBlur={onBlursetValue}
    ,
    onClick: function onClick(e) {
      return onClickIfValue();
    },
    "aria-label": "Search",
    onChange: setValue
  }), isOpen, resultSearch && isOpen && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_15___default().createElement("div", {
    className: "result-search"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_15___default().createElement("ul", null, resultSearch === null || resultSearch === void 0 ? void 0 : resultSearch.map(function (result) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_15___default().createElement("li", {
      key: result.id,
      onClick: function onClick(e) {
        return redirectionToPatient(result.id);
      },
      className: "link-toPatient"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_15___default().createElement("div", null, result.lastname, " ", result.firstname, " ", result === null || result === void 0 ? void 0 : result.nicknames));
  }))));
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Search);

/***/ }),

/***/ "./assets/component/Unauthorized.js":
/*!******************************************!*\
  !*** ./assets/component/Unauthorized.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router/dist/index.js");



var Unauthorized = function Unauthorized() {
  var navigate = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_1__.useNavigate)();

  var goBack = function goBack() {
    return navigate(-1);
  };

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("section", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h1", null, "Unauthorized"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, "You do not have access to the requested page."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "flexGrow"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
    onClick: goBack
  }, "Go Back")));
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Unauthorized);

/***/ }),

/***/ "./assets/component/Users.js":
/*!***********************************!*\
  !*** ./assets/component/Users.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var core_js_modules_es_object_set_prototype_of_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.object.set-prototype-of.js */ "./node_modules/core-js/modules/es.object.set-prototype-of.js");
/* harmony import */ var core_js_modules_es_object_set_prototype_of_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_set_prototype_of_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_function_bind_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.function.bind.js */ "./node_modules/core-js/modules/es.function.bind.js");
/* harmony import */ var core_js_modules_es_function_bind_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_function_bind_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_object_get_prototype_of_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.object.get-prototype-of.js */ "./node_modules/core-js/modules/es.object.get-prototype-of.js");
/* harmony import */ var core_js_modules_es_object_get_prototype_of_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_get_prototype_of_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_reflect_construct_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.reflect.construct.js */ "./node_modules/core-js/modules/es.reflect.construct.js");
/* harmony import */ var core_js_modules_es_reflect_construct_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_reflect_construct_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_object_create_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.object.create.js */ "./node_modules/core-js/modules/es.object.create.js");
/* harmony import */ var core_js_modules_es_object_create_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_create_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es.object.define-property.js */ "./node_modules/core-js/modules/es.object.define-property.js");
/* harmony import */ var core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core-js/modules/es.symbol.js */ "./node_modules/core-js/modules/es.symbol.js");
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! core-js/modules/es.symbol.description.js */ "./node_modules/core-js/modules/es.symbol.description.js");
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! core-js/modules/es.symbol.iterator.js */ "./node_modules/core-js/modules/es.symbol.iterator.js");
/* harmony import */ var core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! core-js/modules/es.array.iterator.js */ "./node_modules/core-js/modules/es.array.iterator.js");
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! core-js/modules/es.string.iterator.js */ "./node_modules/core-js/modules/es.string.iterator.js");
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator.js */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var _Posts__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./Posts */ "./assets/component/Posts.js");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }















function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

// ./assets/js/components/Home.js




var Users = /*#__PURE__*/function (_Component) {
  _inherits(Users, _Component);

  var _super = _createSuper(Users);

  function Users() {
    _classCallCheck(this, Users);

    return _super.apply(this, arguments);
  }

  _createClass(Users, [{
    key: "render",
    value: function render() {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_13___default().createElement("div", null, "Users");
    }
  }]);

  return Users;
}(react__WEBPACK_IMPORTED_MODULE_13__.Component);

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Users);

/***/ }),

/***/ "./assets/component/list_reportCalls.js":
/*!**********************************************!*\
  !*** ./assets/component/list_reportCalls.js ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.promise.js */ "./node_modules/core-js/modules/es.promise.js");
/* harmony import */ var core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.symbol.js */ "./node_modules/core-js/modules/es.symbol.js");
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.symbol.description.js */ "./node_modules/core-js/modules/es.symbol.description.js");
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.symbol.iterator.js */ "./node_modules/core-js/modules/es.symbol.iterator.js");
/* harmony import */ var core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.array.iterator.js */ "./node_modules/core-js/modules/es.array.iterator.js");
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es.string.iterator.js */ "./node_modules/core-js/modules/es.string.iterator.js");
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator.js */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var core_js_modules_es_symbol_async_iterator_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! core-js/modules/es.symbol.async-iterator.js */ "./node_modules/core-js/modules/es.symbol.async-iterator.js");
/* harmony import */ var core_js_modules_es_symbol_async_iterator_js__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_async_iterator_js__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var core_js_modules_es_symbol_to_string_tag_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! core-js/modules/es.symbol.to-string-tag.js */ "./node_modules/core-js/modules/es.symbol.to-string-tag.js");
/* harmony import */ var core_js_modules_es_symbol_to_string_tag_js__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_to_string_tag_js__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var core_js_modules_es_json_to_string_tag_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! core-js/modules/es.json.to-string-tag.js */ "./node_modules/core-js/modules/es.json.to-string-tag.js");
/* harmony import */ var core_js_modules_es_json_to_string_tag_js__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_json_to_string_tag_js__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var core_js_modules_es_math_to_string_tag_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! core-js/modules/es.math.to-string-tag.js */ "./node_modules/core-js/modules/es.math.to-string-tag.js");
/* harmony import */ var core_js_modules_es_math_to_string_tag_js__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_math_to_string_tag_js__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! core-js/modules/es.object.define-property.js */ "./node_modules/core-js/modules/es.object.define-property.js");
/* harmony import */ var core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var core_js_modules_es_object_create_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! core-js/modules/es.object.create.js */ "./node_modules/core-js/modules/es.object.create.js");
/* harmony import */ var core_js_modules_es_object_create_js__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_create_js__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var core_js_modules_es_object_get_prototype_of_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! core-js/modules/es.object.get-prototype-of.js */ "./node_modules/core-js/modules/es.object.get-prototype-of.js");
/* harmony import */ var core_js_modules_es_object_get_prototype_of_js__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_get_prototype_of_js__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var core_js_modules_es_array_for_each_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! core-js/modules/es.array.for-each.js */ "./node_modules/core-js/modules/es.array.for-each.js");
/* harmony import */ var core_js_modules_es_array_for_each_js__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_for_each_js__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! core-js/modules/web.dom-collections.for-each.js */ "./node_modules/core-js/modules/web.dom-collections.for-each.js");
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! core-js/modules/es.function.name.js */ "./node_modules/core-js/modules/es.function.name.js");
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var core_js_modules_es_object_set_prototype_of_js__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! core-js/modules/es.object.set-prototype-of.js */ "./node_modules/core-js/modules/es.object.set-prototype-of.js");
/* harmony import */ var core_js_modules_es_object_set_prototype_of_js__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_set_prototype_of_js__WEBPACK_IMPORTED_MODULE_18__);
/* harmony import */ var core_js_modules_es_array_reverse_js__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! core-js/modules/es.array.reverse.js */ "./node_modules/core-js/modules/es.array.reverse.js");
/* harmony import */ var core_js_modules_es_array_reverse_js__WEBPACK_IMPORTED_MODULE_19___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_reverse_js__WEBPACK_IMPORTED_MODULE_19__);
/* harmony import */ var core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! core-js/modules/es.array.slice.js */ "./node_modules/core-js/modules/es.array.slice.js");
/* harmony import */ var core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_20___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_20__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_21___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_21__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router/dist/index.js");
/* harmony import */ var _hooks_useLogout__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ../hooks/useLogout */ "./assets/hooks/useLogout.js");
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @fortawesome/react-fontawesome */ "./node_modules/@fortawesome/react-fontawesome/index.es.js");
/* harmony import */ var _Menu__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./Menu */ "./assets/component/Menu.js");
/* harmony import */ var _Form_MeetRapports__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./Form_MeetRapports */ "./assets/component/Form_MeetRapports.js");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }























function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return generator._invoke = function (innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; }(innerFn, self, context), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == _typeof(value) && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; this._invoke = function (method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); }; } function maybeInvokeDelegate(delegate, context) { var method = delegate.iterator[context.method]; if (undefined === method) { if (context.delegate = null, "throw" === context.method) { if (delegate.iterator["return"] && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method)) return ContinueSentinel; context.method = "throw", context.arg = new TypeError("The iterator does not provide a 'throw' method"); } return ContinueSentinel; } var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) { if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; } return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, define(Gp, "constructor", GeneratorFunctionPrototype), define(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (object) { var keys = []; for (var key in object) { keys.push(key); } return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) { "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); } }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, "catch": function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }
















var RepportCalls = function RepportCalls() {
  var navigate = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_26__.useNavigate)();
  var logout = (0,_hooks_useLogout__WEBPACK_IMPORTED_MODULE_22__["default"])();

  var signOut = /*#__PURE__*/function () {
    var _ref = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
      return _regeneratorRuntime().wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return logout();

            case 2:
              navigate("/connect");

            case 3:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));

    return function signOut() {
      return _ref.apply(this, arguments);
    };
  }();

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_21___default().createElement((react__WEBPACK_IMPORTED_MODULE_21___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_21___default().createElement("p", null, "Repports Calls"));
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (RepportCalls);

/***/ }),

/***/ "./assets/component/list_reportGoals.js":
/*!**********************************************!*\
  !*** ./assets/component/list_reportGoals.js ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.promise.js */ "./node_modules/core-js/modules/es.promise.js");
/* harmony import */ var core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.symbol.js */ "./node_modules/core-js/modules/es.symbol.js");
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.symbol.description.js */ "./node_modules/core-js/modules/es.symbol.description.js");
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.symbol.iterator.js */ "./node_modules/core-js/modules/es.symbol.iterator.js");
/* harmony import */ var core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.array.iterator.js */ "./node_modules/core-js/modules/es.array.iterator.js");
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es.string.iterator.js */ "./node_modules/core-js/modules/es.string.iterator.js");
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator.js */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var core_js_modules_es_symbol_async_iterator_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! core-js/modules/es.symbol.async-iterator.js */ "./node_modules/core-js/modules/es.symbol.async-iterator.js");
/* harmony import */ var core_js_modules_es_symbol_async_iterator_js__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_async_iterator_js__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var core_js_modules_es_symbol_to_string_tag_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! core-js/modules/es.symbol.to-string-tag.js */ "./node_modules/core-js/modules/es.symbol.to-string-tag.js");
/* harmony import */ var core_js_modules_es_symbol_to_string_tag_js__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_to_string_tag_js__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var core_js_modules_es_json_to_string_tag_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! core-js/modules/es.json.to-string-tag.js */ "./node_modules/core-js/modules/es.json.to-string-tag.js");
/* harmony import */ var core_js_modules_es_json_to_string_tag_js__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_json_to_string_tag_js__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var core_js_modules_es_math_to_string_tag_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! core-js/modules/es.math.to-string-tag.js */ "./node_modules/core-js/modules/es.math.to-string-tag.js");
/* harmony import */ var core_js_modules_es_math_to_string_tag_js__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_math_to_string_tag_js__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! core-js/modules/es.object.define-property.js */ "./node_modules/core-js/modules/es.object.define-property.js");
/* harmony import */ var core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var core_js_modules_es_object_create_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! core-js/modules/es.object.create.js */ "./node_modules/core-js/modules/es.object.create.js");
/* harmony import */ var core_js_modules_es_object_create_js__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_create_js__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var core_js_modules_es_object_get_prototype_of_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! core-js/modules/es.object.get-prototype-of.js */ "./node_modules/core-js/modules/es.object.get-prototype-of.js");
/* harmony import */ var core_js_modules_es_object_get_prototype_of_js__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_get_prototype_of_js__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var core_js_modules_es_array_for_each_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! core-js/modules/es.array.for-each.js */ "./node_modules/core-js/modules/es.array.for-each.js");
/* harmony import */ var core_js_modules_es_array_for_each_js__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_for_each_js__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! core-js/modules/web.dom-collections.for-each.js */ "./node_modules/core-js/modules/web.dom-collections.for-each.js");
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! core-js/modules/es.function.name.js */ "./node_modules/core-js/modules/es.function.name.js");
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var core_js_modules_es_object_set_prototype_of_js__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! core-js/modules/es.object.set-prototype-of.js */ "./node_modules/core-js/modules/es.object.set-prototype-of.js");
/* harmony import */ var core_js_modules_es_object_set_prototype_of_js__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_set_prototype_of_js__WEBPACK_IMPORTED_MODULE_18__);
/* harmony import */ var core_js_modules_es_array_reverse_js__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! core-js/modules/es.array.reverse.js */ "./node_modules/core-js/modules/es.array.reverse.js");
/* harmony import */ var core_js_modules_es_array_reverse_js__WEBPACK_IMPORTED_MODULE_19___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_reverse_js__WEBPACK_IMPORTED_MODULE_19__);
/* harmony import */ var core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! core-js/modules/es.array.slice.js */ "./node_modules/core-js/modules/es.array.slice.js");
/* harmony import */ var core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_20___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_20__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_21___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_21__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router/dist/index.js");
/* harmony import */ var _hooks_useLogout__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ../hooks/useLogout */ "./assets/hooks/useLogout.js");
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @fortawesome/react-fontawesome */ "./node_modules/@fortawesome/react-fontawesome/index.es.js");
/* harmony import */ var _Menu__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./Menu */ "./assets/component/Menu.js");
/* harmony import */ var _Form_MeetRapports__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./Form_MeetRapports */ "./assets/component/Form_MeetRapports.js");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }























function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return generator._invoke = function (innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; }(innerFn, self, context), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == _typeof(value) && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; this._invoke = function (method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); }; } function maybeInvokeDelegate(delegate, context) { var method = delegate.iterator[context.method]; if (undefined === method) { if (context.delegate = null, "throw" === context.method) { if (delegate.iterator["return"] && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method)) return ContinueSentinel; context.method = "throw", context.arg = new TypeError("The iterator does not provide a 'throw' method"); } return ContinueSentinel; } var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) { if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; } return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, define(Gp, "constructor", GeneratorFunctionPrototype), define(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (object) { var keys = []; for (var key in object) { keys.push(key); } return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) { "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); } }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, "catch": function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }
















var RepportGoals = function RepportGoals() {
  var navigate = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_26__.useNavigate)();
  var logout = (0,_hooks_useLogout__WEBPACK_IMPORTED_MODULE_22__["default"])();

  var signOut = /*#__PURE__*/function () {
    var _ref = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
      return _regeneratorRuntime().wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return logout();

            case 2:
              navigate("/connect");

            case 3:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));

    return function signOut() {
      return _ref.apply(this, arguments);
    };
  }();

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_21___default().createElement((react__WEBPACK_IMPORTED_MODULE_21___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_21___default().createElement("p", null, "Repports Goals"));
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (RepportGoals);

/***/ }),

/***/ "./assets/context/AuthProvider.js":
/*!****************************************!*\
  !*** ./assets/context/AuthProvider.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AuthProvider": () => (/* binding */ AuthProvider),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var core_js_modules_es_array_is_array_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.array.is-array.js */ "./node_modules/core-js/modules/es.array.is-array.js");
/* harmony import */ var core_js_modules_es_array_is_array_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_is_array_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.symbol.js */ "./node_modules/core-js/modules/es.symbol.js");
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.symbol.description.js */ "./node_modules/core-js/modules/es.symbol.description.js");
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.symbol.iterator.js */ "./node_modules/core-js/modules/es.symbol.iterator.js");
/* harmony import */ var core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.array.iterator.js */ "./node_modules/core-js/modules/es.array.iterator.js");
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es.string.iterator.js */ "./node_modules/core-js/modules/es.string.iterator.js");
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator.js */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! core-js/modules/es.array.slice.js */ "./node_modules/core-js/modules/es.array.slice.js");
/* harmony import */ var core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! core-js/modules/es.function.name.js */ "./node_modules/core-js/modules/es.function.name.js");
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var core_js_modules_es_array_from_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! core-js/modules/es.array.from.js */ "./node_modules/core-js/modules/es.array.from.js");
/* harmony import */ var core_js_modules_es_array_from_js__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_from_js__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! core-js/modules/es.regexp.exec.js */ "./node_modules/core-js/modules/es.regexp.exec.js");
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_12__);













function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }


var AuthContext = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_12__.createContext)({});
var AuthProvider = function AuthProvider(_ref) {
  var children = _ref.children;

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_12__.useState)({}),
      _useState2 = _slicedToArray(_useState, 2),
      auth = _useState2[0],
      setAuth = _useState2[1];

  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_12__.useState)(JSON.parse(localStorage.getItem("persist")) || false),
      _useState4 = _slicedToArray(_useState3, 2),
      persist = _useState4[0],
      setPersist = _useState4[1];

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_12___default().createElement(AuthContext.Provider, {
    value: {
      auth: auth,
      setAuth: setAuth,
      persist: persist,
      setPersist: setPersist
    }
  }, children);
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (AuthContext);

/***/ }),

/***/ "./assets/hooks/useAuth.js":
/*!*********************************!*\
  !*** ./assets/hooks/useAuth.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _context_AuthProvider__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../context/AuthProvider */ "./assets/context/AuthProvider.js");



var useAuth = function useAuth() {
  var _useContext = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(_context_AuthProvider__WEBPACK_IMPORTED_MODULE_1__["default"]),
      auth = _useContext.auth;

  (0,react__WEBPACK_IMPORTED_MODULE_0__.useDebugValue)(auth, function (auth) {
    return auth !== null && auth !== void 0 && auth.user ? "Logged In" : "Logged Out";
  });
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(_context_AuthProvider__WEBPACK_IMPORTED_MODULE_1__["default"]);
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (useAuth);

/***/ }),

/***/ "./assets/hooks/useLogout.js":
/*!***********************************!*\
  !*** ./assets/hooks/useLogout.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.promise.js */ "./node_modules/core-js/modules/es.promise.js");
/* harmony import */ var core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.symbol.js */ "./node_modules/core-js/modules/es.symbol.js");
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.symbol.description.js */ "./node_modules/core-js/modules/es.symbol.description.js");
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.symbol.iterator.js */ "./node_modules/core-js/modules/es.symbol.iterator.js");
/* harmony import */ var core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.array.iterator.js */ "./node_modules/core-js/modules/es.array.iterator.js");
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es.string.iterator.js */ "./node_modules/core-js/modules/es.string.iterator.js");
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator.js */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var core_js_modules_es_symbol_async_iterator_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! core-js/modules/es.symbol.async-iterator.js */ "./node_modules/core-js/modules/es.symbol.async-iterator.js");
/* harmony import */ var core_js_modules_es_symbol_async_iterator_js__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_async_iterator_js__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var core_js_modules_es_symbol_to_string_tag_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! core-js/modules/es.symbol.to-string-tag.js */ "./node_modules/core-js/modules/es.symbol.to-string-tag.js");
/* harmony import */ var core_js_modules_es_symbol_to_string_tag_js__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_to_string_tag_js__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var core_js_modules_es_json_to_string_tag_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! core-js/modules/es.json.to-string-tag.js */ "./node_modules/core-js/modules/es.json.to-string-tag.js");
/* harmony import */ var core_js_modules_es_json_to_string_tag_js__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_json_to_string_tag_js__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var core_js_modules_es_math_to_string_tag_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! core-js/modules/es.math.to-string-tag.js */ "./node_modules/core-js/modules/es.math.to-string-tag.js");
/* harmony import */ var core_js_modules_es_math_to_string_tag_js__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_math_to_string_tag_js__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! core-js/modules/es.object.define-property.js */ "./node_modules/core-js/modules/es.object.define-property.js");
/* harmony import */ var core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var core_js_modules_es_object_create_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! core-js/modules/es.object.create.js */ "./node_modules/core-js/modules/es.object.create.js");
/* harmony import */ var core_js_modules_es_object_create_js__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_create_js__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var core_js_modules_es_object_get_prototype_of_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! core-js/modules/es.object.get-prototype-of.js */ "./node_modules/core-js/modules/es.object.get-prototype-of.js");
/* harmony import */ var core_js_modules_es_object_get_prototype_of_js__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_get_prototype_of_js__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var core_js_modules_es_array_for_each_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! core-js/modules/es.array.for-each.js */ "./node_modules/core-js/modules/es.array.for-each.js");
/* harmony import */ var core_js_modules_es_array_for_each_js__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_for_each_js__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! core-js/modules/web.dom-collections.for-each.js */ "./node_modules/core-js/modules/web.dom-collections.for-each.js");
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! core-js/modules/es.function.name.js */ "./node_modules/core-js/modules/es.function.name.js");
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var core_js_modules_es_object_set_prototype_of_js__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! core-js/modules/es.object.set-prototype-of.js */ "./node_modules/core-js/modules/es.object.set-prototype-of.js");
/* harmony import */ var core_js_modules_es_object_set_prototype_of_js__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_set_prototype_of_js__WEBPACK_IMPORTED_MODULE_18__);
/* harmony import */ var core_js_modules_es_array_reverse_js__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! core-js/modules/es.array.reverse.js */ "./node_modules/core-js/modules/es.array.reverse.js");
/* harmony import */ var core_js_modules_es_array_reverse_js__WEBPACK_IMPORTED_MODULE_19___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_reverse_js__WEBPACK_IMPORTED_MODULE_19__);
/* harmony import */ var core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! core-js/modules/es.array.slice.js */ "./node_modules/core-js/modules/es.array.slice.js");
/* harmony import */ var core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_20___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_20__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_21___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_21__);
/* harmony import */ var _useAuth__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./useAuth */ "./assets/hooks/useAuth.js");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }























function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return generator._invoke = function (innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; }(innerFn, self, context), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == _typeof(value) && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; this._invoke = function (method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); }; } function maybeInvokeDelegate(delegate, context) { var method = delegate.iterator[context.method]; if (undefined === method) { if (context.delegate = null, "throw" === context.method) { if (delegate.iterator["return"] && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method)) return ContinueSentinel; context.method = "throw", context.arg = new TypeError("The iterator does not provide a 'throw' method"); } return ContinueSentinel; } var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) { if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; } return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, define(Gp, "constructor", GeneratorFunctionPrototype), define(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (object) { var keys = []; for (var key in object) { keys.push(key); } return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) { "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); } }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, "catch": function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }




var useLogout = function useLogout() {
  var _useAuth = (0,_useAuth__WEBPACK_IMPORTED_MODULE_22__["default"])(),
      setAuth = _useAuth.setAuth;

  var logout = /*#__PURE__*/function () {
    var _ref = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
      return _regeneratorRuntime().wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              setAuth({});
              _context.prev = 1;
              _context.next = 4;
              return axios__WEBPACK_IMPORTED_MODULE_21___default()("/api/token/invalidate", {
                withCredentials: true
              });

            case 4:
              _context.next = 9;
              break;

            case 6:
              _context.prev = 6;
              _context.t0 = _context["catch"](1);
              console.error(_context.t0);

            case 9:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, null, [[1, 6]]);
    }));

    return function logout() {
      return _ref.apply(this, arguments);
    };
  }();

  return logout;
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (useLogout);

/***/ }),

/***/ "./assets/hooks/useRefreshToken.js":
/*!*****************************************!*\
  !*** ./assets/hooks/useRefreshToken.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.promise.js */ "./node_modules/core-js/modules/es.promise.js");
/* harmony import */ var core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.object.define-property.js */ "./node_modules/core-js/modules/es.object.define-property.js");
/* harmony import */ var core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_object_keys_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.object.keys.js */ "./node_modules/core-js/modules/es.object.keys.js");
/* harmony import */ var core_js_modules_es_object_keys_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_keys_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.symbol.js */ "./node_modules/core-js/modules/es.symbol.js");
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.array.filter.js */ "./node_modules/core-js/modules/es.array.filter.js");
/* harmony import */ var core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es_object_get_own_property_descriptor_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es.object.get-own-property-descriptor.js */ "./node_modules/core-js/modules/es.object.get-own-property-descriptor.js");
/* harmony import */ var core_js_modules_es_object_get_own_property_descriptor_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_get_own_property_descriptor_js__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_es_array_for_each_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core-js/modules/es.array.for-each.js */ "./node_modules/core-js/modules/es.array.for-each.js");
/* harmony import */ var core_js_modules_es_array_for_each_js__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_for_each_js__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! core-js/modules/web.dom-collections.for-each.js */ "./node_modules/core-js/modules/web.dom-collections.for-each.js");
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var core_js_modules_es_object_get_own_property_descriptors_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! core-js/modules/es.object.get-own-property-descriptors.js */ "./node_modules/core-js/modules/es.object.get-own-property-descriptors.js");
/* harmony import */ var core_js_modules_es_object_get_own_property_descriptors_js__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_get_own_property_descriptors_js__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var core_js_modules_es_object_define_properties_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! core-js/modules/es.object.define-properties.js */ "./node_modules/core-js/modules/es.object.define-properties.js");
/* harmony import */ var core_js_modules_es_object_define_properties_js__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_define_properties_js__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! core-js/modules/es.symbol.description.js */ "./node_modules/core-js/modules/es.symbol.description.js");
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! core-js/modules/es.symbol.iterator.js */ "./node_modules/core-js/modules/es.symbol.iterator.js");
/* harmony import */ var core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! core-js/modules/es.array.iterator.js */ "./node_modules/core-js/modules/es.array.iterator.js");
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! core-js/modules/es.string.iterator.js */ "./node_modules/core-js/modules/es.string.iterator.js");
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator.js */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var core_js_modules_es_symbol_async_iterator_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! core-js/modules/es.symbol.async-iterator.js */ "./node_modules/core-js/modules/es.symbol.async-iterator.js");
/* harmony import */ var core_js_modules_es_symbol_async_iterator_js__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_async_iterator_js__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var core_js_modules_es_symbol_to_string_tag_js__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! core-js/modules/es.symbol.to-string-tag.js */ "./node_modules/core-js/modules/es.symbol.to-string-tag.js");
/* harmony import */ var core_js_modules_es_symbol_to_string_tag_js__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_to_string_tag_js__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var core_js_modules_es_json_to_string_tag_js__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! core-js/modules/es.json.to-string-tag.js */ "./node_modules/core-js/modules/es.json.to-string-tag.js");
/* harmony import */ var core_js_modules_es_json_to_string_tag_js__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_json_to_string_tag_js__WEBPACK_IMPORTED_MODULE_18__);
/* harmony import */ var core_js_modules_es_math_to_string_tag_js__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! core-js/modules/es.math.to-string-tag.js */ "./node_modules/core-js/modules/es.math.to-string-tag.js");
/* harmony import */ var core_js_modules_es_math_to_string_tag_js__WEBPACK_IMPORTED_MODULE_19___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_math_to_string_tag_js__WEBPACK_IMPORTED_MODULE_19__);
/* harmony import */ var core_js_modules_es_object_create_js__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! core-js/modules/es.object.create.js */ "./node_modules/core-js/modules/es.object.create.js");
/* harmony import */ var core_js_modules_es_object_create_js__WEBPACK_IMPORTED_MODULE_20___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_create_js__WEBPACK_IMPORTED_MODULE_20__);
/* harmony import */ var core_js_modules_es_object_get_prototype_of_js__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! core-js/modules/es.object.get-prototype-of.js */ "./node_modules/core-js/modules/es.object.get-prototype-of.js");
/* harmony import */ var core_js_modules_es_object_get_prototype_of_js__WEBPACK_IMPORTED_MODULE_21___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_get_prototype_of_js__WEBPACK_IMPORTED_MODULE_21__);
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! core-js/modules/es.function.name.js */ "./node_modules/core-js/modules/es.function.name.js");
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_22___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_22__);
/* harmony import */ var core_js_modules_es_object_set_prototype_of_js__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! core-js/modules/es.object.set-prototype-of.js */ "./node_modules/core-js/modules/es.object.set-prototype-of.js");
/* harmony import */ var core_js_modules_es_object_set_prototype_of_js__WEBPACK_IMPORTED_MODULE_23___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_set_prototype_of_js__WEBPACK_IMPORTED_MODULE_23__);
/* harmony import */ var core_js_modules_es_array_reverse_js__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! core-js/modules/es.array.reverse.js */ "./node_modules/core-js/modules/es.array.reverse.js");
/* harmony import */ var core_js_modules_es_array_reverse_js__WEBPACK_IMPORTED_MODULE_24___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_reverse_js__WEBPACK_IMPORTED_MODULE_24__);
/* harmony import */ var core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! core-js/modules/es.array.slice.js */ "./node_modules/core-js/modules/es.array.slice.js");
/* harmony import */ var core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_25___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_25__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_26___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_26__);
/* harmony import */ var _useAuth__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./useAuth */ "./assets/hooks/useAuth.js");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }




























function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return generator._invoke = function (innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; }(innerFn, self, context), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == _typeof(value) && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; this._invoke = function (method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); }; } function maybeInvokeDelegate(delegate, context) { var method = delegate.iterator[context.method]; if (undefined === method) { if (context.delegate = null, "throw" === context.method) { if (delegate.iterator["return"] && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method)) return ContinueSentinel; context.method = "throw", context.arg = new TypeError("The iterator does not provide a 'throw' method"); } return ContinueSentinel; } var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) { if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; } return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, define(Gp, "constructor", GeneratorFunctionPrototype), define(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (object) { var keys = []; for (var key in object) { keys.push(key); } return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) { "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); } }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, "catch": function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }




var useRefreshToken = function useRefreshToken() {
  var _useAuth = (0,_useAuth__WEBPACK_IMPORTED_MODULE_27__["default"])(),
      setAuth = _useAuth.setAuth;

  var refresh = /*#__PURE__*/function () {
    var _ref = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
      var token, response;
      return _regeneratorRuntime().wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return axios__WEBPACK_IMPORTED_MODULE_26___default().get("/api/token/refresh", {
                withCredentials: true
              });

            case 2:
              token = _context.sent;
              _context.next = 5;
              return axios__WEBPACK_IMPORTED_MODULE_26___default().get("/api/getUser", {
                headers: {
                  Authorization: "Bearer ".concat(token.data.token)
                }
              });

            case 5:
              response = _context.sent;
              setAuth(function (prev) {
                return _objectSpread(_objectSpread({}, prev), {}, {
                  roles: response.data.roleNames,
                  accessToken: response.data.credentials
                });
              });
              return _context.abrupt("return", response.data.accessToken);

            case 8:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));

    return function refresh() {
      return _ref.apply(this, arguments);
    };
  }();

  return refresh;
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (useRefreshToken);

/***/ }),

/***/ "./assets/index.js":
/*!*************************!*\
  !*** ./assets/index.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");
/* harmony import */ var _app__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app */ "./assets/app.js");
/* harmony import */ var _context_AuthProvider__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./context/AuthProvider */ "./assets/context/AuthProvider.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/dist/index.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router/dist/index.js");

 // import "./index.css";




react_dom__WEBPACK_IMPORTED_MODULE_1__.render( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().StrictMode), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_4__.BrowserRouter, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_context_AuthProvider__WEBPACK_IMPORTED_MODULE_3__.AuthProvider, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_5__.Routes, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_5__.Route, {
  path: "/*",
  element: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_app__WEBPACK_IMPORTED_MODULE_2__["default"], null)
}))))), document.getElementById("root"));

/***/ }),

/***/ "./assets/styles/app.scss":
/*!********************************!*\
  !*** ./assets/styles/app.scss ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./assets/images/5a94e34b4c36e28de4e704f8c2d1c39a79e91b5d.png":
/*!********************************************************************!*\
  !*** ./assets/images/5a94e34b4c36e28de4e704f8c2d1c39a79e91b5d.png ***!
  \********************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "images/5a94e34b4c36e28de4e704f8c2d1c39a79e91b5d.ac343ce6.png";

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendors-node_modules_fortawesome_react-fontawesome_index_es_js-node_modules_axios_index_js-no-4a6a61","assets_styles_app_scss"], () => (__webpack_exec__("./assets/index.js")));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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c291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2FwcC5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvY29tcG9uZW50L0FkbWluLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9jb21wb25lbnQvRWRpdG9yLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9jb21wb25lbnQvRm9ybV9NZWV0UmFwcG9ydHMuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2NvbXBvbmVudC9Ib21lLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9jb21wb25lbnQvTGF5b3V0LmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9jb21wb25lbnQvTGlua1BhZ2UuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2NvbXBvbmVudC9Mb2dpbi5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvY29tcG9uZW50L0xvdW5nZS5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvY29tcG9uZW50L01lbnUuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2NvbXBvbmVudC9NaXNzaW5nLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9jb21wb25lbnQvUGF0aWVudC5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvY29tcG9uZW50L1BhdGllbnRzLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9jb21wb25lbnQvUGVyc2lzdExvZ2luLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9jb21wb25lbnQvUG9zdHMuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2NvbXBvbmVudC9Qcm9maWxlL0NvbnRhY3RzLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9jb21wb25lbnQvUHJvZmlsZS9Ecm9wem9uZS5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvY29tcG9uZW50L1Byb2ZpbGUvRmljaGUvQmxvY2stSW5mb3MuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2NvbXBvbmVudC9Qcm9maWxlL0ZpY2hlL0ZpY2hlLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9jb21wb25lbnQvUHJvZmlsZS9GaWNoZS9Nb2RhbEl0ZW1GaWNoZS5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvY29tcG9uZW50L1Byb2ZpbGUvSW5kaWNhdG9ycy5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvY29tcG9uZW50L1Byb2ZpbGUvTWVkaWFzLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9jb21wb25lbnQvUHJvZmlsZS9QbGFjZXMuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2NvbXBvbmVudC9Qcm9maWxlL1Byb2ZpbGUuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2NvbXBvbmVudC9SZXF1aXJlQXV0aC5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvY29tcG9uZW50L1NlYXJjaC5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvY29tcG9uZW50L1VuYXV0aG9yaXplZC5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvY29tcG9uZW50L1VzZXJzLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9jb21wb25lbnQvbGlzdF9yZXBvcnRDYWxscy5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvY29tcG9uZW50L2xpc3RfcmVwb3J0R29hbHMuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2NvbnRleHQvQXV0aFByb3ZpZGVyLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9ob29rcy91c2VBdXRoLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9ob29rcy91c2VMb2dvdXQuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2hvb2tzL3VzZVJlZnJlc2hUb2tlbi5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL3N0eWxlcy9hcHAuc2NzcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBpbXBvcnQgUmVnaXN0ZXIgZnJvbSBcIi4vY29tcG9uZW50cy9SZWdpc3RlclwiO1xuaW1wb3J0IFJlYWN0LCB7IHVzZUNvbnRleHQsIHVzZURlYnVnVmFsdWUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBMb2dpbiBmcm9tIFwiLi9jb21wb25lbnQvTG9naW5cIjtcbmltcG9ydCBIb21lIGZyb20gXCIuL2NvbXBvbmVudC9Ib21lXCI7XG5pbXBvcnQgTGF5b3V0IGZyb20gXCIuL2NvbXBvbmVudC9MYXlvdXRcIjtcbmltcG9ydCBFZGl0b3IgZnJvbSBcIi4vY29tcG9uZW50L0VkaXRvclwiO1xuaW1wb3J0IEFkbWluIGZyb20gXCIuL2NvbXBvbmVudC9BZG1pblwiO1xuaW1wb3J0IE1pc3NpbmcgZnJvbSBcIi4vY29tcG9uZW50L01pc3NpbmdcIjtcbmltcG9ydCBVbmF1dGhvcml6ZWQgZnJvbSBcIi4vY29tcG9uZW50L1VuYXV0aG9yaXplZFwiO1xuaW1wb3J0IExvdW5nZSBmcm9tIFwiLi9jb21wb25lbnQvTG91bmdlXCI7XG5pbXBvcnQgTGlua1BhZ2UgZnJvbSBcIi4vY29tcG9uZW50L0xpbmtQYWdlXCI7XG5pbXBvcnQgUmVxdWlyZUF1dGggZnJvbSBcIi4vY29tcG9uZW50L1JlcXVpcmVBdXRoXCI7XG5pbXBvcnQgUGVyc2lzdExvZ2luIGZyb20gXCIuL2NvbXBvbmVudC9QZXJzaXN0TG9naW5cIjtcbmltcG9ydCB7IFJvdXRlcywgUm91dGUgfSBmcm9tIFwicmVhY3Qtcm91dGVyLWRvbVwiO1xuXG5pbXBvcnQgUGF0aWVudHMgZnJvbSBcIi4vY29tcG9uZW50L1BhdGllbnRzXCI7XG5pbXBvcnQgUmVwcG9ydENhbGxzIGZyb20gXCIuL2NvbXBvbmVudC9saXN0X3JlcG9ydENhbGxzXCI7XG5pbXBvcnQgUmVwcG9ydEdvYWxzIGZyb20gXCIuL2NvbXBvbmVudC9saXN0X3JlcG9ydEdvYWxzXCI7XG5cbmltcG9ydCBQYXRpZW50IGZyb20gXCIuL2NvbXBvbmVudC9QYXRpZW50XCI7XG5pbXBvcnQgXCIuL3N0eWxlcy9hcHAuc2Nzc1wiO1xuXG5jb25zdCBST0xFUyA9IHtcbiAgVXNlcjogXCJST0xFX1VTRVJcIixcbiAgQWRtaW46IFwiUk9MRV9BRE1JTlwiLFxufTtcblxuZnVuY3Rpb24gQXBwKCkge1xuICByZXR1cm4gKFxuICAgIDxSb3V0ZXM+XG4gICAgICA8Um91dGUgcGF0aD1cIi9cIiBlbGVtZW50PXs8TGF5b3V0IC8+fT5cbiAgICAgICAgPFJvdXRlIHBhdGg9XCJjb25uZWN0XCIgZWxlbWVudD17PExvZ2luIC8+fSAvPlxuICAgICAgICA8Um91dGUgcGF0aD1cImxpbmtwYWdlXCIgZWxlbWVudD17PExpbmtQYWdlIC8+fSAvPlxuICAgICAgICA8Um91dGUgcGF0aD1cInVuYXV0aG9yaXplZFwiIGVsZW1lbnQ9ezxVbmF1dGhvcml6ZWQgLz59IC8+XG5cbiAgICAgICAgPFJvdXRlIGVsZW1lbnQ9ezxQZXJzaXN0TG9naW4gLz59PlxuICAgICAgICAgIDxSb3V0ZSBlbGVtZW50PXs8UmVxdWlyZUF1dGggYWxsb3dlZFJvbGVzPXtbUk9MRVMuVXNlcl19IC8+fT5cbiAgICAgICAgICAgIDxSb3V0ZSBwYXRoPVwiL1wiIGVsZW1lbnQ9ezxIb21lIC8+fT48L1JvdXRlPlxuICAgICAgICAgIDwvUm91dGU+XG5cbiAgICAgICAgICA8Um91dGUgZWxlbWVudD17PFJlcXVpcmVBdXRoIGFsbG93ZWRSb2xlcz17W1JPTEVTLkFkbWluXX0gLz59PlxuICAgICAgICAgICAgPFJvdXRlIHBhdGg9XCJwYXRpZW50c1wiIGVsZW1lbnQ9ezxQYXRpZW50cyAvPn0gLz5cbiAgICAgICAgICAgIDxSb3V0ZSBwYXRoPVwiOmlkXCIgZWxlbWVudD17PFBhdGllbnQgLz59IC8+XG4gICAgICAgICAgPC9Sb3V0ZT5cblxuICAgICAgICAgIDxSb3V0ZSBlbGVtZW50PXs8UmVxdWlyZUF1dGggYWxsb3dlZFJvbGVzPXtbUk9MRVMuQWRtaW5dfSAvPn0+XG4gICAgICAgICAgICA8Um91dGUgcGF0aD1cImFkbWluXCIgZWxlbWVudD17PEFkbWluIC8+fSAvPlxuICAgICAgICAgIDwvUm91dGU+XG4gICAgICAgIDwvUm91dGU+XG5cbiAgICAgICAgPFJvdXRlIHBhdGg9XCIqXCIgZWxlbWVudD17PE1pc3NpbmcgLz59IC8+XG4gICAgICA8L1JvdXRlPlxuICAgIDwvUm91dGVzPlxuICApO1xufVxuXG5leHBvcnQgZGVmYXVsdCBBcHA7XG4iLCJpbXBvcnQgUmVhY3QsIHsgdXNlQ29udGV4dCwgdXNlRGVidWdWYWx1ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyBMaW5rIH0gZnJvbSBcInJlYWN0LXJvdXRlci1kb21cIjtcclxuaW1wb3J0IFVzZXJzIGZyb20gXCIuL1VzZXJzXCI7XHJcblxyXG5jb25zdCBBZG1pbiA9ICgpID0+IHtcclxuICByZXR1cm4gKFxyXG4gICAgPHNlY3Rpb24+XHJcbiAgICAgIDxoMT5BZG1pbnMgUGFnZTwvaDE+XHJcbiAgICAgIDxiciAvPlxyXG4gICAgICA8VXNlcnMgLz5cclxuICAgICAgPGJyIC8+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleEdyb3dcIj5cclxuICAgICAgICA8TGluayB0bz1cIi9cIj5Ib21lPC9MaW5rPlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvc2VjdGlvbj5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgQWRtaW47XHJcbiIsImltcG9ydCB7IExpbmsgfSBmcm9tIFwicmVhY3Qtcm91dGVyLWRvbVwiO1xyXG5cclxuY29uc3QgRWRpdG9yID0gKCkgPT4ge1xyXG4gIHJldHVybiAoXHJcbiAgICA8c2VjdGlvbj5cclxuICAgICAgPGgxPkVkaXRvcnMgUGFnZTwvaDE+XHJcbiAgICAgIDxiciAvPlxyXG4gICAgICA8cD5Zb3UgbXVzdCBoYXZlIGJlZW4gYXNzaWduZWQgYW4gRWRpdG9yIHJvbGUuPC9wPlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXhHcm93XCI+XHJcbiAgICAgICAgPExpbmsgdG89XCIvXCI+SG9tZTwvTGluaz5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L3NlY3Rpb24+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IEVkaXRvcjtcclxuIiwiaW1wb3J0IFJlYWN0LCB7IHVzZUNvbnRleHQsIHVzZURlYnVnVmFsdWUgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgdXNlTmF2aWdhdGUsIExpbmsgfSBmcm9tIFwicmVhY3Qtcm91dGVyLWRvbVwiO1xyXG5pbXBvcnQgdXNlTG9nb3V0IGZyb20gXCIuLi9ob29rcy91c2VMb2dvdXRcIjtcclxuaW1wb3J0IEJ1dHRvbiBmcm9tIFwicmVhY3QtYm9vdHN0cmFwL0J1dHRvblwiO1xyXG5pbXBvcnQgQ29udGFpbmVyIGZyb20gXCJyZWFjdC1ib290c3RyYXAvQ29udGFpbmVyXCI7XHJcbmltcG9ydCBGb3JtIGZyb20gXCJyZWFjdC1ib290c3RyYXAvRm9ybVwiO1xyXG5pbXBvcnQgTmF2IGZyb20gXCJyZWFjdC1ib290c3RyYXAvTmF2XCI7XHJcbmltcG9ydCBOYXZiYXIgZnJvbSBcInJlYWN0LWJvb3RzdHJhcC9OYXZiYXJcIjtcclxuaW1wb3J0IE5hdkRyb3Bkb3duIGZyb20gXCJyZWFjdC1ib290c3RyYXAvTmF2RHJvcGRvd25cIjtcclxuY29uc3QgRm9ybV9NZWV0UmFwcG9ydHMgPSAoKSA9PiB7XHJcbiAgY29uc3QgbmF2aWdhdGUgPSB1c2VOYXZpZ2F0ZSgpO1xyXG4gIGNvbnN0IGxvZ291dCA9IHVzZUxvZ291dCgpO1xyXG5cclxuICBjb25zdCBzaWduT3V0ID0gYXN5bmMgKCkgPT4ge1xyXG4gICAgYXdhaXQgbG9nb3V0KCk7XHJcbiAgICBuYXZpZ2F0ZShcIi9jb25uZWN0XCIpO1xyXG4gIH07XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8PlxyXG4gICAgICA8aDM+UmFwcG9ydCBkZSByZW5jb250cmU8L2gzPlxyXG4gICAgICA8Rm9ybT5cclxuICAgICAgICA8Rm9ybS5Hcm91cCBjbGFzc05hbWU9XCJtYi0zXCIgY29udHJvbElkPVwiZm9ybUJhc2ljRW1haWxcIj5cclxuICAgICAgICAgIDxGb3JtLkNvbnRyb2wgdHlwZT1cImVtYWlsXCIgcGxhY2Vob2xkZXI9XCJUYXBleiBsZSBub21cIiAvPlxyXG4gICAgICAgIDwvRm9ybS5Hcm91cD5cclxuXHJcbiAgICAgICAgPEZvcm0uR3JvdXAgY2xhc3NOYW1lPVwibWItM1wiIGNvbnRyb2xJZD1cImZvcm1CYXNpY1Bhc3N3b3JkXCI+XHJcbiAgICAgICAgICA8Rm9ybS5Db250cm9sIHR5cGU9XCJ0ZXh0XCIgcGxhY2Vob2xkZXI9XCJUYXBleiBsZSBwcsOpbm9tXCIgLz5cclxuICAgICAgICA8L0Zvcm0uR3JvdXA+XHJcblxyXG4gICAgICAgIDxGb3JtLkdyb3VwIGNsYXNzTmFtZT1cIm1iLTNcIiBjb250cm9sSWQ9XCJmb3JtQmFzaWNQYXNzd29yZFwiPlxyXG4gICAgICAgICAgPEZvcm0uQ29udHJvbCB0eXBlPVwidGV4dFwiIHBsYWNlaG9sZGVyPVwiVGFwZXogbGUgc3Vybm9tXCIgLz5cclxuICAgICAgICA8L0Zvcm0uR3JvdXA+XHJcblxyXG4gICAgICAgIDxGb3JtLlNlbGVjdCBhcmlhLWxhYmVsPVwiRGVmYXVsdCBzZWxlY3QgZXhhbXBsZVwiPlxyXG4gICAgICAgICAgPG9wdGlvbj5DaG9pc3Npc2V6IHZvdHJlIGFudGVubmU8L29wdGlvbj5cclxuICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCIxXCI+TGnDqGdlPC9vcHRpb24+XHJcbiAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiMlwiPkJydXhlbGxlczwvb3B0aW9uPlxyXG4gICAgICAgIDwvRm9ybS5TZWxlY3Q+XHJcblxyXG4gICAgICAgIDxCdXR0b24gdmFyaWFudD1cInByaW1hcnlcIiB0eXBlPVwic3VibWl0XCIgY2xhc3NOYW1lPVwiYnRuLW1ldGlzIG10LTNcIj5cclxuICAgICAgICAgIFN1Ym1pdFxyXG4gICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICA8L0Zvcm0+XHJcbiAgICA8Lz5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgRm9ybV9NZWV0UmFwcG9ydHM7XHJcbiIsImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlQ29udGV4dCwgdXNlRGVidWdWYWx1ZSwgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IHVzZU5hdmlnYXRlLCBMaW5rIH0gZnJvbSBcInJlYWN0LXJvdXRlci1kb21cIjtcclxuaW1wb3J0IHVzZUxvZ291dCBmcm9tIFwiLi4vaG9va3MvdXNlTG9nb3V0XCI7XHJcbmltcG9ydCB7IEZvbnRBd2Vzb21lSWNvbiB9IGZyb20gXCJAZm9ydGF3ZXNvbWUvcmVhY3QtZm9udGF3ZXNvbWVcIjtcclxuaW1wb3J0IHsgZmFBcnJvd1JpZ2h0IH0gZnJvbSBcIkBmb3J0YXdlc29tZS9mcmVlLXNvbGlkLXN2Zy1pY29uc1wiO1xyXG5pbXBvcnQgTWVudSBmcm9tIFwiLi9NZW51XCI7XHJcbmltcG9ydCBGb3JtX01lZXRSYXBwb3J0cyBmcm9tIFwiLi9Gb3JtX01lZXRSYXBwb3J0c1wiO1xyXG5pbXBvcnQgUmVwcG9ydENhbGxzIGZyb20gXCIuL2xpc3RfcmVwb3J0Q2FsbHNcIjtcclxuaW1wb3J0IFJlcHBvcnRHb2FscyBmcm9tIFwiLi9saXN0X3JlcG9ydEdvYWxzXCI7XHJcblxyXG5jb25zdCBIb21lID0gKCkgPT4ge1xyXG4gIGNvbnN0IG5hdmlnYXRlID0gdXNlTmF2aWdhdGUoKTtcclxuICBjb25zdCBsb2dvdXQgPSB1c2VMb2dvdXQoKTtcclxuXHJcbiAgY29uc3QgW3JlcG9ydE1lZXQsIHNldFJlcG9ydE1lZXRdID0gdXNlU3RhdGUoMCk7XHJcbiAgY29uc3QgW3JlcG9ydENhbGxzLCBzZXRSZXBvcnRDYWxsc10gPSB1c2VTdGF0ZSgwKTtcclxuICBjb25zdCBbcmVwb3J0R29hbHMsIHNldFJlcG9ydEdvYWxzXSA9IHVzZVN0YXRlKDApO1xyXG5cclxuICBjb25zdCBzaWduT3V0ID0gYXN5bmMgKCkgPT4ge1xyXG4gICAgYXdhaXQgbG9nb3V0KCk7XHJcbiAgICBuYXZpZ2F0ZShcIi9jb25uZWN0XCIpO1xyXG4gIH07XHJcbiAgbGV0IHsgcGF0aCwgdXJsIH0gPSB1c2VOYXZpZ2F0ZSgpO1xyXG5cclxuICBjb25zdCBnb1RvUmVwcG9ydCA9ICgpID0+IHtcclxuICAgIGhpc3RvcnkucHVzaChcIi9nb2Fsc1wiKTtcclxuICB9O1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgc2V0UmVwb3J0TWVldCh0cnVlKTtcclxuICAgIHNldFJlcG9ydENhbGxzKGZhbHNlKTtcclxuICAgIHNldFJlcG9ydEdvYWxzKGZhbHNlKTtcclxuICB9LCBbXSk7XHJcblxyXG4gIGNvbnN0IG9uQ2xpY2tSZXBwb3J0TWVldCA9ICgpID0+IHtcclxuICAgIHNldFJlcG9ydE1lZXQodHJ1ZSk7XHJcbiAgICBzZXRSZXBvcnRDYWxscyhmYWxzZSk7XHJcbiAgICBzZXRSZXBvcnRHb2FscyhmYWxzZSk7XHJcbiAgfTtcclxuXHJcbiAgY29uc3Qgb25DbGlja1JlcHBvcnRDYWxscyA9ICgpID0+IHtcclxuICAgIHNldFJlcG9ydE1lZXQoZmFsc2UpO1xyXG4gICAgc2V0UmVwb3J0Q2FsbHModHJ1ZSk7XHJcbiAgICBzZXRSZXBvcnRHb2FscyhmYWxzZSk7XHJcbiAgfTtcclxuXHJcbiAgY29uc3Qgb25DbGlja1JlcHBvcnRHb2FscyA9ICgpID0+IHtcclxuICAgIHNldFJlcG9ydE1lZXQoZmFsc2UpO1xyXG4gICAgc2V0UmVwb3J0Q2FsbHMoZmFsc2UpO1xyXG4gICAgc2V0UmVwb3J0R29hbHModHJ1ZSk7XHJcbiAgfTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDw+XHJcbiAgICAgIDxNZW51IC8+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyLWhvbWUgcm93IG0tMFwiPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLXNtLTYgZC1mbGV4IGFsaWduLWl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNvbnRlbnQtY2VudGVyXCI+XHJcbiAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICA8aDM+QmllbnZlbnVlIHN1ciBNw6l0aXM8L2gzPlxyXG4gICAgICAgICAgICA8cD5DbGlxdWV6IGljaSBwb3VyIHZvcyByYXBwZWxzIG91IMOpZGl0ZXIgdW4gcGF0aWVudDo8L3A+XHJcblxyXG4gICAgICAgICAgICA8TGluayBvbkNsaWNrPXtvbkNsaWNrUmVwcG9ydE1lZXR9PlxyXG4gICAgICAgICAgICAgIDxGb250QXdlc29tZUljb24gaWNvbj17ZmFBcnJvd1JpZ2h0fSAvPiBSYXBwb3J0IGRlIHJlbmNvbnRyZVxyXG4gICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgIDxMaW5rIG9uQ2xpY2s9e29uQ2xpY2tSZXBwb3J0Q2FsbHN9PlxyXG4gICAgICAgICAgICAgIDxGb250QXdlc29tZUljb24gaWNvbj17ZmFBcnJvd1JpZ2h0fSAvPiBSYXBwb3J0IGQnYXBwZWxzXHJcbiAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgPExpbmsgb25DbGljaz17b25DbGlja1JlcHBvcnRHb2Fsc30+XHJcbiAgICAgICAgICAgICAgPEZvbnRBd2Vzb21lSWNvbiBpY29uPXtmYUFycm93UmlnaHR9IC8+IFJhcHBvcnQgZCdvYmplY3RpZnNcclxuICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLXNtLTYgZC1mbGV4IGFsaWduLWl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNvbnRlbnQtY2VudGVyIGNvbnRhaW5lci1yZXBwb3J0c1wiPlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzZXQtcmVwcG9ydHNcIj5cclxuICAgICAgICAgICAge3JlcG9ydE1lZXQgJiYgPEZvcm1fTWVldFJhcHBvcnRzIC8+fVxyXG4gICAgICAgICAgICB7cmVwb3J0Q2FsbHMgJiYgPFJlcHBvcnRHb2FscyAvPn1cclxuICAgICAgICAgICAge3JlcG9ydEdvYWxzICYmIDxSZXBwb3J0Q2FsbHMgLz59XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8Lz5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgSG9tZTtcclxuIiwiaW1wb3J0IFJlYWN0LCB7IHVzZUNvbnRleHQsIHVzZURlYnVnVmFsdWUgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgT3V0bGV0IH0gZnJvbSBcInJlYWN0LXJvdXRlci1kb21cIjtcclxuaW1wb3J0IE1lbnUgZnJvbSBcIi4vTWVudVwiO1xyXG5jb25zdCBMYXlvdXQgPSAoKSA9PiB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxtYWluIGNsYXNzTmFtZT1cIkFwcFwiPlxyXG4gICAgICA8T3V0bGV0IC8+XHJcbiAgICA8L21haW4+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IExheW91dDtcclxuIiwiaW1wb3J0IHsgTGluayB9IGZyb20gXCJyZWFjdC1yb3V0ZXItZG9tXCI7XHJcblxyXG5jb25zdCBMaW5rUGFnZSA9ICgpID0+IHtcclxuICByZXR1cm4gKFxyXG4gICAgPHNlY3Rpb24+XHJcbiAgICAgIDxoMT5MaW5rczwvaDE+XHJcbiAgICAgIDxiciAvPlxyXG4gICAgICA8aDI+UHVibGljPC9oMj5cclxuICAgICAgPExpbmsgdG89XCIvbG9naW5cIj5Mb2dpbjwvTGluaz5cclxuICAgICAgPExpbmsgdG89XCIvcmVnaXN0ZXJcIj5SZWdpc3RlcjwvTGluaz5cclxuICAgICAgPGJyIC8+XHJcbiAgICAgIDxoMj5Qcml2YXRlPC9oMj5cclxuICAgICAgPExpbmsgdG89XCIvXCI+SG9tZTwvTGluaz5cclxuICAgICAgPExpbmsgdG89XCIvZWRpdG9yXCI+RWRpdG9ycyBQYWdlPC9MaW5rPlxyXG4gICAgICA8TGluayB0bz1cIi9hZG1pblwiPkFkbWluIFBhZ2U8L0xpbms+XHJcbiAgICA8L3NlY3Rpb24+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IExpbmtQYWdlO1xyXG4iLCJpbXBvcnQgUmVhY3QsIHsgdXNlQ29udGV4dCwgdXNlRGVidWdWYWx1ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyB1c2VSZWYsIHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHVzZUF1dGggZnJvbSBcIi4uL2hvb2tzL3VzZUF1dGhcIjtcclxuaW1wb3J0IHsgTGluaywgdXNlTmF2aWdhdGUsIHVzZUxvY2F0aW9uIH0gZnJvbSBcInJlYWN0LXJvdXRlci1kb21cIjtcclxuXHJcbmltcG9ydCBheGlvcyBmcm9tIFwiYXhpb3NcIjtcclxuY29uc3QgTE9HSU5fVVJMID0gXCIvbG9naW5cIjtcclxuXHJcbmNvbnN0IExvZ2luID0gKCkgPT4ge1xyXG4gIGNvbnN0IHsgc2V0QXV0aCwgcGVyc2lzdCwgc2V0UGVyc2lzdCB9ID0gdXNlQXV0aCgpO1xyXG5cclxuICBjb25zdCBuYXZpZ2F0ZSA9IHVzZU5hdmlnYXRlKCk7XHJcbiAgY29uc3QgbG9jYXRpb24gPSB1c2VMb2NhdGlvbigpO1xyXG4gIGNvbnN0IGZyb20gPSBsb2NhdGlvbi5zdGF0ZT8uZnJvbT8ucGF0aG5hbWUgfHwgXCIvXCI7XHJcblxyXG4gIGNvbnN0IHVzZXJSZWYgPSB1c2VSZWYoKTtcclxuICBjb25zdCBlcnJSZWYgPSB1c2VSZWYoKTtcclxuXHJcbiAgY29uc3QgW2VtYWlsLCBzZXRVc2VyXSA9IHVzZVN0YXRlKFwiXCIpO1xyXG4gIGNvbnN0IFtwYXNzd29yZCwgc2V0UHdkXSA9IHVzZVN0YXRlKFwiXCIpO1xyXG4gIGNvbnN0IFtlcnJNc2csIHNldEVyck1zZ10gPSB1c2VTdGF0ZShcIlwiKTtcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIHVzZXJSZWYuY3VycmVudC5mb2N1cygpO1xyXG4gIH0sIFtdKTtcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIHNldEVyck1zZyhcIlwiKTtcclxuICB9LCBbZW1haWwsIHBhc3N3b3JkXSk7XHJcblxyXG4gIGNvbnN0IGhhbmRsZVN1Ym1pdCA9IGFzeW5jIChlKSA9PiB7XHJcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcblxyXG4gICAgdHJ5IHtcclxuICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBheGlvcy5wb3N0KFxyXG4gICAgICAgIExPR0lOX1VSTCxcclxuICAgICAgICBKU09OLnN0cmluZ2lmeSh7IGVtYWlsLCBwYXNzd29yZCB9KSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICBoZWFkZXJzOiB7XHJcbiAgICAgICAgICAgIFwiQ29udGVudC1UeXBlXCI6IFwiYXBwbGljYXRpb24vanNvblwiLFxyXG4gICAgICAgICAgfSxcclxuICAgICAgICB9XHJcbiAgICAgICk7XHJcblxyXG4gICAgICBjb25zdCBhY2Nlc3NUb2tlbiA9IHJlc3BvbnNlLmRhdGEudG9rZW47XHJcbiAgICAgIGNvbnN0IHRva2VuID0gYXdhaXQgYXhpb3MuZ2V0KFwiL2FwaS90b2tlbi9yZWZyZXNoXCIsIHtcclxuICAgICAgICB3aXRoQ3JlZGVudGlhbHM6IHRydWUsXHJcbiAgICAgIH0pO1xyXG5cclxuICAgICAgY29uc3Qgcm9sZXNfdXNlZCA9IGF3YWl0IGF4aW9zLmdldChcIi9hcGkvZ2V0VXNlclwiLCB7XHJcbiAgICAgICAgaGVhZGVyczogeyBBdXRob3JpemF0aW9uOiBgQmVhcmVyICR7dG9rZW4uZGF0YS50b2tlbn1gIH0sXHJcbiAgICAgIH0pO1xyXG5cclxuICAgICAgY29uc3Qgcm9sZXMgPSByb2xlc191c2VkPy5kYXRhPy5yb2xlTmFtZXM7XHJcblxyXG4gICAgICBpZiAocm9sZXMubGVuZ3RoID4gMCkge1xyXG4gICAgICAgIHNldEF1dGgoeyBlbWFpbCwgcGFzc3dvcmQsIHJvbGVzLCBhY2Nlc3NUb2tlbiB9KTtcclxuICAgICAgICBzZXRVc2VyKFwiXCIpO1xyXG4gICAgICAgIHNldFB3ZChcIlwiKTtcclxuICAgICAgICBuYXZpZ2F0ZShmcm9tLCB7IHJlcGxhY2U6IHRydWUgfSk7XHJcbiAgICAgIH1cclxuICAgIH0gY2F0Y2ggKGVycikge1xyXG4gICAgICBpZiAoIWVycj8ucmVzcG9uc2UpIHtcclxuICAgICAgICBzZXRFcnJNc2coXCJObyBTZXJ2ZXIgUmVzcG9uc2VcIik7XHJcbiAgICAgIH0gZWxzZSBpZiAoZXJyLnJlc3BvbnNlPy5zdGF0dXMgPT09IDQwMCkge1xyXG4gICAgICAgIHNldEVyck1zZyhcIk1pc3NpbmcgVXNlcm5hbWUgb3IgUGFzc3dvcmRcIik7XHJcbiAgICAgIH0gZWxzZSBpZiAoZXJyLnJlc3BvbnNlPy5zdGF0dXMgPT09IDQwMSkge1xyXG4gICAgICAgIHNldEVyck1zZyhcIlVuYXV0aG9yaXplZFwiKTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBzZXRFcnJNc2coXCJMb2dpbiBGYWlsZWRcIik7XHJcbiAgICAgIH1cclxuICAgICAgZXJyUmVmLmN1cnJlbnQuZm9jdXMoKTtcclxuICAgIH1cclxuICB9O1xyXG5cclxuICBjb25zdCB0b2dnbGVQZXJzaXN0ID0gKCkgPT4ge1xyXG4gICAgc2V0UGVyc2lzdCgocHJldikgPT4gIXByZXYpO1xyXG4gIH07XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcInBlcnNpc3RcIiwgcGVyc2lzdCk7XHJcbiAgfSwgW3BlcnNpc3RdKTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyLWxvZ2luIHJvdyBtLTBcIj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtc20tNiBjb2x1bW4tdGl0bGUgIGQtZmxleCBqdXN0aWZ5LWNvbnRlbnQtY2VudGVyIGFsaWduLWl0ZW1zLWNlbnRlclwiPlxyXG4gICAgICAgIDxoMT5Nw6l0aXM8L2gxPlxyXG4gICAgICA8L2Rpdj5cclxuXHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLXNtLTYgY29sdW1uLWNvbnRlbnQgIGQtZmxleCBqdXN0aWZ5LWNvbnRlbnQtY2VudGVyIGFsaWduLWl0ZW1zLWNlbnRlclwiPlxyXG4gICAgICAgIDxmb3JtIG9uU3VibWl0PXtoYW5kbGVTdWJtaXR9PlxyXG4gICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcclxuICAgICAgICAgICAgaWQ9XCJ1c2VybmFtZVwiXHJcbiAgICAgICAgICAgIC8vIGNsYXNzTmFtZT1cIm15LTRcIlxyXG4gICAgICAgICAgICByZWY9e3VzZXJSZWZ9XHJcbiAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiVGFwZXogdm90cmUgdXRpbGlzYXRldXJcIlxyXG4gICAgICAgICAgICBhdXRvQ29tcGxldGU9XCJvZmZcIlxyXG4gICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHNldFVzZXIoZS50YXJnZXQudmFsdWUpfVxyXG4gICAgICAgICAgICB2YWx1ZT17ZW1haWx9XHJcbiAgICAgICAgICAgIHJlcXVpcmVkXHJcbiAgICAgICAgICAvPlxyXG5cclxuICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICB0eXBlPVwicGFzc3dvcmRcIlxyXG4gICAgICAgICAgICBjbGFzc05hbWU9XCJteS00XCJcclxuICAgICAgICAgICAgaWQ9XCJwYXNzd29yZFwiXHJcbiAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiVGFwZXogdm90cmUgbW90IGRlIHBhc3NlXCJcclxuICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBzZXRQd2QoZS50YXJnZXQudmFsdWUpfVxyXG4gICAgICAgICAgICB2YWx1ZT17cGFzc3dvcmR9XHJcbiAgICAgICAgICAgIHJlcXVpcmVkXHJcbiAgICAgICAgICAvPlxyXG4gICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJidG4tbWV0aXNcIj5TaWduIEluPC9idXR0b24+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInBlcnNpc3RDaGVjayAgZC1mbGV4IGp1c3RpZnktY29udGVudC1zdGFydCBhbGlnbi1pdGVtcy1jZW50ZXIgbXQtNFwiPlxyXG4gICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICB0eXBlPVwiY2hlY2tib3hcIlxyXG4gICAgICAgICAgICAgIGlkPVwicGVyc2lzdFwiXHJcbiAgICAgICAgICAgICAgb25DaGFuZ2U9e3RvZ2dsZVBlcnNpc3R9XHJcbiAgICAgICAgICAgICAgY2hlY2tlZD17cGVyc2lzdH1cclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJwZXJzaXN0XCI+VHJ1c3QgVGhpcyBEZXZpY2U8L2xhYmVsPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9mb3JtPlxyXG4gICAgICAgIDxwXHJcbiAgICAgICAgICByZWY9e2VyclJlZn1cclxuICAgICAgICAgIGNsYXNzTmFtZT17ZXJyTXNnID8gXCJlcnJtc2dcIiA6IFwib2Zmc2NyZWVuXCJ9XHJcbiAgICAgICAgICBhcmlhLWxpdmU9XCJhc3NlcnRpdmVcIlxyXG4gICAgICAgID5cclxuICAgICAgICAgIHtlcnJNc2d9XHJcbiAgICAgICAgPC9wPlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBMb2dpbjtcclxuIiwiaW1wb3J0IHsgTGluayB9IGZyb20gXCJyZWFjdC1yb3V0ZXItZG9tXCI7XHJcblxyXG5jb25zdCBMb3VuZ2UgPSAoKSA9PiB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxzZWN0aW9uPlxyXG4gICAgICA8aDE+VGhlIExvdW5nZTwvaDE+XHJcbiAgICAgIDxiciAvPlxyXG4gICAgICA8cD5BZG1pbnMgYW5kIEVkaXRvcnMgY2FuIGhhbmcgb3V0IGhlcmUuPC9wPlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXhHcm93XCI+XHJcbiAgICAgICAgPExpbmsgdG89XCIvXCI+SG9tZTwvTGluaz5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L3NlY3Rpb24+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IExvdW5nZTtcclxuIiwiaW1wb3J0IFJlYWN0LCB7IHVzZUNvbnRleHQsIHVzZURlYnVnVmFsdWUgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgdXNlTmF2aWdhdGUsIExpbmsgfSBmcm9tIFwicmVhY3Qtcm91dGVyLWRvbVwiO1xyXG5pbXBvcnQgQnV0dG9uIGZyb20gXCJyZWFjdC1ib290c3RyYXAvQnV0dG9uXCI7XHJcbmltcG9ydCBDb250YWluZXIgZnJvbSBcInJlYWN0LWJvb3RzdHJhcC9Db250YWluZXJcIjtcclxuaW1wb3J0IHsgRm9udEF3ZXNvbWVJY29uIH0gZnJvbSBcIkBmb3J0YXdlc29tZS9yZWFjdC1mb250YXdlc29tZVwiO1xyXG5pbXBvcnQgeyBmYVNpZ25PdXQgfSBmcm9tIFwiQGZvcnRhd2Vzb21lL2ZyZWUtc29saWQtc3ZnLWljb25zXCI7XHJcbmltcG9ydCB1c2VMb2dvdXQgZnJvbSBcIi4uL2hvb2tzL3VzZUxvZ291dFwiO1xyXG5pbXBvcnQgRm9ybSBmcm9tIFwicmVhY3QtYm9vdHN0cmFwL0Zvcm1cIjtcclxuaW1wb3J0IE5hdiBmcm9tIFwicmVhY3QtYm9vdHN0cmFwL05hdlwiO1xyXG5pbXBvcnQgTmF2YmFyIGZyb20gXCJyZWFjdC1ib290c3RyYXAvTmF2YmFyXCI7XHJcbmltcG9ydCBOYXZEcm9wZG93biBmcm9tIFwicmVhY3QtYm9vdHN0cmFwL05hdkRyb3Bkb3duXCI7XHJcbmltcG9ydCBPZmZjYW52YXMgZnJvbSBcInJlYWN0LWJvb3RzdHJhcC9PZmZjYW52YXNcIjtcclxuaW1wb3J0IFNlYXJjaCBmcm9tIFwiLi9TZWFyY2hcIjtcclxuXHJcbmNvbnN0IE1lbnUgPSAoKSA9PiB7XHJcbiAgY29uc3QgbG9nb3V0ID0gdXNlTG9nb3V0KCk7XHJcblxyXG4gIGNvbnN0IHNpZ25PdXQgPSBhc3luYyAoKSA9PiB7XHJcbiAgICBhd2FpdCBsb2dvdXQoKTtcclxuICAgIG5hdmlnYXRlKFwiL2Nvbm5lY3RcIik7XHJcbiAgfTtcclxuICByZXR1cm4gKFxyXG4gICAgPD5cclxuICAgICAgPE5hdmJhclxyXG4gICAgICAgIGNvbGxhcHNlT25TZWxlY3RcclxuICAgICAgICBzdHlsZT17eyBiYWNrZ3JvdW5kQ29sb3I6IFwiIzkxYmQxMFwiIH19XHJcbiAgICAgICAgZXhwYW5kPVwieHhsXCJcclxuICAgICAgICBjbGFzc05hbWU9XCJtYi0zIG1lbnUtbWV0aXNcIlxyXG4gICAgICAgIHZhcmlhbnQ9XCJkYXJrXCJcclxuICAgICAgPlxyXG4gICAgICAgIDxDb250YWluZXIgZmx1aWQ+XHJcbiAgICAgICAgICA8TmF2YmFyLkJyYW5kIGhyZWY9XCIvXCI+XHJcbiAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInRleHQtdXBwZXJjYXNlIHRleHQtd2hpdGVcIj5Nw6l0aXM8L3NwYW4+XHJcbiAgICAgICAgICA8L05hdmJhci5CcmFuZD5cclxuICAgICAgICAgIDxOYXZiYXIuVG9nZ2xlIGFyaWEtY29udHJvbHM9XCJyZXNwb25zaXZlLW5hdmJhci1uYXZcIiAvPlxyXG4gICAgICAgICAgPE5hdmJhci5Db2xsYXBzZSBpZD1cInJlc3BvbnNpdmUtbmF2YmFyLW5hdlwiPlxyXG4gICAgICAgICAgICA8TmF2IGNsYXNzTmFtZT1cImp1c3RpZnktY29udGVudC1lbmQgZmxleC1ncm93LTEgcGUtM1wiPlxyXG4gICAgICAgICAgICAgIHsvKiA8TGluayB0bz1cIi9hZG1pblwiPkdvIHRvIHRoZSBBZG1pbiBwYWdlPC9MaW5rPiAqL31cclxuXHJcbiAgICAgICAgICAgICAgPE5hdi5MaW5rIGhyZWY9XCIvcGF0aWVudHNcIj5QYXRpZW50czwvTmF2Lkxpbms+XHJcbiAgICAgICAgICAgICAgPE5hdkRyb3Bkb3duXHJcbiAgICAgICAgICAgICAgICB0aXRsZT1cIkFwcGVsc1wiXHJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ0ZXh0LXdoaXRlXCJcclxuICAgICAgICAgICAgICAgIGlkPXtgb2ZmY2FudmFzTmF2YmFyRHJvcGRvd24tZXhwYW5kLSR7XCJ4bFwifWB9XHJcbiAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgPE5hdkRyb3Bkb3duLkl0ZW0gaHJlZj1cIiNhY3Rpb24zXCI+VG91czwvTmF2RHJvcGRvd24uSXRlbT5cclxuICAgICAgICAgICAgICAgIDxOYXZEcm9wZG93bi5JdGVtIGhyZWY9XCIjYWN0aW9uNFwiPlxyXG4gICAgICAgICAgICAgICAgICBVdGlsaXNhdGV1cnNcclxuICAgICAgICAgICAgICAgIDwvTmF2RHJvcGRvd24uSXRlbT5cclxuICAgICAgICAgICAgICA8L05hdkRyb3Bkb3duPlxyXG4gICAgICAgICAgICAgIDxOYXZEcm9wZG93blxyXG4gICAgICAgICAgICAgICAgdGl0bGU9XCJBZG1pbmlzdHJhdGlvblwiXHJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ0ZXh0LXdoaXRlXCJcclxuICAgICAgICAgICAgICAgIGlkPXtgb2ZmY2FudmFzTmF2YmFyRHJvcGRvd24tZXhwYW5kLSR7XCJ4bFwifWB9XHJcbiAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgPE5hdkRyb3Bkb3duLkl0ZW0gaHJlZj1cIiNhY3Rpb24zXCI+VG91czwvTmF2RHJvcGRvd24uSXRlbT5cclxuICAgICAgICAgICAgICAgIDxOYXZEcm9wZG93bi5JdGVtIGhyZWY9XCIjYWN0aW9uNFwiPlxyXG4gICAgICAgICAgICAgICAgICBDb250YWN0L09yZ2FuaXNhdGlvblxyXG4gICAgICAgICAgICAgICAgPC9OYXZEcm9wZG93bi5JdGVtPlxyXG4gICAgICAgICAgICAgIDwvTmF2RHJvcGRvd24+XHJcbiAgICAgICAgICAgICAgPE5hdi5MaW5rIG9uQ2xpY2s9e3NpZ25PdXR9PlxyXG4gICAgICAgICAgICAgICAgPEZvbnRBd2Vzb21lSWNvbiBpY29uPXtmYVNpZ25PdXR9IC8+e1wiIFwifVxyXG4gICAgICAgICAgICAgIDwvTmF2Lkxpbms+XHJcbiAgICAgICAgICAgIDwvTmF2PlxyXG4gICAgICAgICAgICA8U2VhcmNoPjwvU2VhcmNoPlxyXG4gICAgICAgICAgICB7LyogPEZvcm0gY2xhc3NOYW1lPVwiZC1mbGV4XCI+XHJcbiAgICAgICAgICAgICAgPEZvcm0uQ29udHJvbFxyXG4gICAgICAgICAgICAgICAgdHlwZT1cInNlYXJjaFwiXHJcbiAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIlNlYXJjaFwiXHJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJtZS0yXCJcclxuICAgICAgICAgICAgICAgIGFyaWEtbGFiZWw9XCJTZWFyY2hcIlxyXG4gICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDwvRm9ybT4gKi99XHJcbiAgICAgICAgICA8L05hdmJhci5Db2xsYXBzZT5cclxuICAgICAgICA8L0NvbnRhaW5lcj5cclxuICAgICAgPC9OYXZiYXI+XHJcbiAgICA8Lz5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgTWVudTtcclxuIiwiaW1wb3J0IFJlYWN0LCB7IHVzZUNvbnRleHQsIHVzZURlYnVnVmFsdWUgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgTGluayB9IGZyb20gXCJyZWFjdC1yb3V0ZXItZG9tXCI7XHJcblxyXG5jb25zdCBNaXNzaW5nID0gKCkgPT4ge1xyXG4gIHJldHVybiAoXHJcbiAgICA8YXJ0aWNsZSBzdHlsZT17eyBwYWRkaW5nOiBcIjEwMHB4XCIgfX0+XHJcbiAgICAgIDxoMT5Pb3BzITwvaDE+XHJcbiAgICAgIDxwPlBhZ2UgTm90IEZvdW5kPC9wPlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXhHcm93XCI+XHJcbiAgICAgICAgPExpbmsgdG89XCIvXCI+VmlzaXQgT3VyIEhvbWVwYWdlPC9MaW5rPlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvYXJ0aWNsZT5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgTWlzc2luZztcclxuIiwiaW1wb3J0IFJlYWN0LCB7IHVzZUNvbnRleHQsIHVzZURlYnVnVmFsdWUsIHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgTGluaywgdXNlTmF2aWdhdGUsIHVzZUxvY2F0aW9uIH0gZnJvbSBcInJlYWN0LXJvdXRlci1kb21cIjtcclxuaW1wb3J0IFVzZXJzIGZyb20gXCIuL1VzZXJzXCI7XHJcbmltcG9ydCBNZW51IGZyb20gXCIuL01lbnVcIjtcclxuaW1wb3J0IGxvZ29QYXRoIGZyb20gXCIuLi9pbWFnZXMvNWE5NGUzNGI0YzM2ZTI4ZGU0ZTcwNGY4YzJkMWMzOWE3OWU5MWI1ZC5wbmdcIjtcclxuaW1wb3J0IGF4aW9zIGZyb20gXCJheGlvc1wiO1xyXG5pbXBvcnQgeyB1c2VQYXJhbXMgfSBmcm9tIFwicmVhY3Qtcm91dGVyLWRvbVwiO1xyXG5pbXBvcnQgdXNlQXV0aCBmcm9tIFwiLi4vaG9va3MvdXNlQXV0aFwiO1xyXG5pbXBvcnQgVGFiIGZyb20gXCJyZWFjdC1ib290c3RyYXAvVGFiXCI7XHJcbmltcG9ydCBUYWJzIGZyb20gXCJyZWFjdC1ib290c3RyYXAvVGFic1wiO1xyXG5pbXBvcnQgRmljaGUgZnJvbSBcIi4vUHJvZmlsZS9GaWNoZS9GaWNoZVwiO1xyXG5pbXBvcnQgSW5kaWNhdG9ycyBmcm9tIFwiLi9Qcm9maWxlL0luZGljYXRvcnNcIjtcclxuaW1wb3J0IFByb2ZpbGUgZnJvbSBcIi4vUHJvZmlsZS9Qcm9maWxlXCI7XHJcbmltcG9ydCBNZWRpYXMgZnJvbSBcIi4vUHJvZmlsZS9NZWRpYXNcIjtcclxuaW1wb3J0IENvbnRhY3RzIGZyb20gXCIuL1Byb2ZpbGUvQ29udGFjdHNcIjtcclxuaW1wb3J0IFBsYWNlcyBmcm9tIFwiLi9Qcm9maWxlL1BsYWNlc1wiO1xyXG5cclxuY29uc3QgUGF0aWVudCA9ICgpID0+IHtcclxuICBsZXQgaWQgPSB1c2VQYXJhbXMoKS5pZDtcclxuICBsZXQgYmFja2dyb3VuZEltYWdlID1cclxuICAgIFwiLi4vaW1hZ2VzLzVhOTRlMzRiNGMzNmUyOGRlNGU3MDRmOGMyZDFjMzlhNzllOTFiNWQucG5nXCI7XHJcbiAgY29uc3QgW2F1dGgsIHNldEF1dGhdID0gdXNlU3RhdGUodXNlQXV0aCgpKTtcclxuICBjb25zdCBbcGF0aWVudCwgc2V0UGF0aWVudF0gPSB1c2VTdGF0ZShudWxsKTtcclxuICBjb25zdCBbaW1nUGF0aWVudCwgc2V0SW1nUGF0aWVudF0gPSB1c2VTdGF0ZShudWxsKTtcclxuICBjb25zdCBba2V5LCBzZXRLZXldID0gdXNlU3RhdGUoXCJmaWNoZVwiKTtcclxuICBjb25zdCBbaWRQYXRpZW50LCBzZXRJZFBhdGllbnRdID0gdXNlU3RhdGUoaWQpO1xyXG4gIGNvbnN0IG5hdmlnYXRlID0gdXNlTmF2aWdhdGUoKTtcclxuICBjb25zdCBsb2NhdGlvbiA9IHVzZUxvY2F0aW9uKCk7XHJcbiAgY29uc3QgW2xvY2F0aW9uV2ViLCBzZXRMb2NhdGlvbl0gPSB1c2VTdGF0ZShsb2NhdGlvbik7XHJcblxyXG4gIHZhciBmb3JtRGF0YSA9IG5ldyBGb3JtRGF0YSgpO1xyXG4gIGZvcm1EYXRhLmFwcGVuZChcImlkXCIsIGlkLnRvU3RyaW5nKCkpO1xyXG5cclxuICBsZXQgb2JqUGF0aWVudCA9IHt9O1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgYXhpb3Moe1xyXG4gICAgICBtZXRob2Q6IFwicG9zdFwiLFxyXG4gICAgICB1cmw6IFwiL2FwaS9nZXRQYXRpZW50XCIsXHJcbiAgICAgIGRhdGE6IGZvcm1EYXRhLFxyXG4gICAgICBoZWFkZXJzOiB7XHJcbiAgICAgICAgXCJDb250ZW50LVR5cGVcIjogXCJhcHBsaWNhdGlvbi9qc29uXCIsXHJcbiAgICAgICAgQXV0aG9yaXphdGlvbjogYEJlYXJlciAke2F1dGguYXV0aC5hY2Nlc3NUb2tlbn1gLFxyXG4gICAgICB9LFxyXG4gICAgfSlcclxuICAgICAgLnRoZW4oZnVuY3Rpb24gKHJlc3BvbnNlKSB7XHJcbiAgICAgICAgLy9oYW5kbGUgc3VjY2Vzc1xyXG4gICAgICAgIG9ialBhdGllbnQucGF0aWVudCA9IHJlc3BvbnNlLmRhdGE7XHJcbiAgICAgICAgc2V0UGF0aWVudChyZXNwb25zZS5kYXRhKTtcclxuICAgICAgICBheGlvcyh7XHJcbiAgICAgICAgICBtZXRob2Q6IFwicG9zdFwiLFxyXG4gICAgICAgICAgdXJsOiBcIi9hcGkvZ2V0TWVkaWFGb3JQYXRpZW50XCIsXHJcbiAgICAgICAgICBkYXRhOiBmb3JtRGF0YSxcclxuICAgICAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICAgICAgXCJDb250ZW50LVR5cGVcIjogXCJhcHBsaWNhdGlvbi9qc29uXCIsXHJcbiAgICAgICAgICAgIEF1dGhvcml6YXRpb246IGBCZWFyZXIgJHthdXRoLmF1dGguYWNjZXNzVG9rZW59YCxcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgfSlcclxuICAgICAgICAgIC50aGVuKGZ1bmN0aW9uIChyZXNwb25zZSkge1xyXG4gICAgICAgICAgICAvL2hhbmRsZSBzdWNjZXNzXHJcbiAgICAgICAgICAgIC8vIHNldFBhdGllbnQocmVzcG9uc2UuZGF0YSk7XHJcblxyXG4gICAgICAgICAgICBsZXQgYmFja2dyb3VuZEltYWdlID0gcmVzcG9uc2UuaW1hZ2U7XHJcbiAgICAgICAgICAgIHNldEltZ1BhdGllbnQocmVzcG9uc2UuZGF0YSk7XHJcbiAgICAgICAgICAgIC8vIHNldFBhdGllbnQocmVzcG9uc2UuZGF0YSk7XHJcbiAgICAgICAgICB9KVxyXG4gICAgICAgICAgLmNhdGNoKGZ1bmN0aW9uIChyZXNwb25zZSkge30pO1xyXG4gICAgICB9KVxyXG4gICAgICAuY2F0Y2goZnVuY3Rpb24gKHJlc3BvbnNlKSB7fSk7XHJcbiAgfSwgW2lkUGF0aWVudF0pO1xyXG5cclxuICAvLyBcIi4uL2J1aWxkL2ltYWdlcy81YTk0ZTM0YjRjMzZlMjhkZTRlNzA0ZjhjMmQxYzM5YTc5ZTkxYjVkLnBuZ1wiXHJcbiAgcmV0dXJuIChcclxuICAgIDw+XHJcbiAgICAgIDxNZW51PjwvTWVudT5cclxuXHJcbiAgICAgIHtwYXRpZW50ICE9PSBudWxsICYmIChcclxuICAgICAgICA8c2VjdGlvbj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyIGVtcC1wcm9maWxlXCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93IHByb2ZpbGUtaGVhZFwiPlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLXNtLTJcIj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHJvZmlsZS1pbWdcIj5cclxuICAgICAgICAgICAgICAgICAge2ltZ1BhdGllbnQgJiZcclxuICAgICAgICAgICAgICAgICAgICBpbWdQYXRpZW50ICE9PSBudWxsICYmXHJcbiAgICAgICAgICAgICAgICAgICAgT2JqZWN0LmtleXMoaW1nUGF0aWVudCkubGVuZ3RoID4gMCAmJiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICA8PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz17aW1nUGF0aWVudC5pbWFnZX0gLz47XHJcbiAgICAgICAgICAgICAgICAgICAgICA8Lz5cclxuICAgICAgICAgICAgICAgICAgICApfVxyXG5cclxuICAgICAgICAgICAgICAgICAge2ltZ1BhdGllbnQgJiZcclxuICAgICAgICAgICAgICAgICAgICBpbWdQYXRpZW50ID09PSBudWxsICYmXHJcbiAgICAgICAgICAgICAgICAgICAgT2JqZWN0LmtleXMoaW1nUGF0aWVudCkubGVuZ3RoID4gMCAmJiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICA8PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz1cImh0dHBzOi8vdWNyZWF0ZS5jaC93cC1jb250ZW50L3VwbG9hZHMvMjAyMi8wMi9wcm9maWxfdmlkZS5qcGdcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA7XHJcbiAgICAgICAgICAgICAgICAgICAgICA8Lz5cclxuICAgICAgICAgICAgICAgICAgICApfVxyXG5cclxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmaWxlIGJ0biBidG4tbGcgYnRuLXByaW1hcnlcIj5cclxuICAgICAgICAgICAgICAgICAgICBDaGFuZ2UgUGhvdG9cclxuICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cImZpbGVcIiBuYW1lPVwiZmlsZVwiIC8+XHJcbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtc20tNlwiPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwcm9maWxlLWhlYWRcIj5cclxuICAgICAgICAgICAgICAgICAgPGg1PlxyXG4gICAgICAgICAgICAgICAgICAgIHtwYXRpZW50LmZpcnN0bmFtZX0ge3BhdGllbnQubGFzdG5hbWV9XHJcbiAgICAgICAgICAgICAgICAgIDwvaDU+XHJcbiAgICAgICAgICAgICAgICAgIDxoNj4ge25ldyBEYXRlKHBhdGllbnQuYmlydGhkYXRlKS50b0xvY2FsZURhdGVTdHJpbmcoKX08L2g2PlxyXG4gICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJwcm9pbGUtcmF0aW5nXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgUHJlbWllciBjb250YWN0IDp7XCIgXCJ9XHJcbiAgICAgICAgICAgICAgICAgICAgPHNwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICB7XCIgXCJ9XHJcbiAgICAgICAgICAgICAgICAgICAgICB7bmV3IERhdGUocGF0aWVudC5maXJzdENvbnRhY3REYXRlKS50b0xvY2FsZURhdGVTdHJpbmcoKX1cclxuICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3cgYm9keS1wcm9maWxlXCI+XHJcbiAgICAgICAgICAgICAgPFRhYnNcclxuICAgICAgICAgICAgICAgIGRlZmF1bHRBY3RpdmVLZXk9XCJwcm9maWxlXCJcclxuICAgICAgICAgICAgICAgIGlkPVwidW5jb250cm9sbGVkLXRhYi1leGFtcGxlXCJcclxuICAgICAgICAgICAgICAgIGFjdGl2ZUtleT17a2V5fVxyXG4gICAgICAgICAgICAgICAgb25TZWxlY3Q9eyhrKSA9PiBzZXRLZXkoayl9XHJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJwcm9maWxlLXRhYlwiXHJcbiAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgPFRhYiBldmVudEtleT1cImZpY2hlXCIgdGl0bGU9XCJGaWNoZVwiPlxyXG4gICAgICAgICAgICAgICAgICA8RmljaGUgLz5cclxuICAgICAgICAgICAgICAgIDwvVGFiPlxyXG4gICAgICAgICAgICAgICAgey8qIDxUYWIgZXZlbnRLZXk9XCJzdWl2aVwiIHRpdGxlPVwiUHJvZmlsZVwiPlxyXG4gICAgICAgICAgICAgICAgICA8UHJvZmlsZSAvPlxyXG4gICAgICAgICAgICAgICAgPC9UYWI+XHJcbiAgICAgICAgICAgICAgICA8VGFiIGV2ZW50S2V5PVwiaW5kaWNhdGV1cnNcIiB0aXRsZT1cIkluZGljYXRldXJzXCI+XHJcbiAgICAgICAgICAgICAgICAgIDxJbmRpY2F0b3JzIC8+XHJcbiAgICAgICAgICAgICAgICA8L1RhYj5cclxuICAgICAgICAgICAgICAgIDxUYWIgZXZlbnRLZXk9XCJtZWRpYXNcIiB0aXRsZT1cIk1lZGlhc1wiPlxyXG4gICAgICAgICAgICAgICAgICA8TWVkaWFzIC8+XHJcbiAgICAgICAgICAgICAgICA8L1RhYj5cclxuICAgICAgICAgICAgICAgIDxUYWIgZXZlbnRLZXk9XCJjb250YWN0c1wiIHRpdGxlPVwiQ29udGFjdHNcIj5cclxuICAgICAgICAgICAgICAgICAgPENvbnRhY3RzIC8+XHJcbiAgICAgICAgICAgICAgICA8L1RhYj5cclxuICAgICAgICAgICAgICAgIDxUYWIgZXZlbnRLZXk9XCJsaWV1eFwiIHRpdGxlPVwiTGlldXhcIj5cclxuICAgICAgICAgICAgICAgICAgPFBsYWNlcyAvPlxyXG4gICAgICAgICAgICAgICAgPC9UYWI+ICovfVxyXG4gICAgICAgICAgICAgIDwvVGFicz5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L3NlY3Rpb24+XHJcbiAgICAgICl9XHJcbiAgICA8Lz5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgUGF0aWVudDtcclxuIiwiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IGF4aW9zIGZyb20gXCJheGlvc1wiO1xyXG5pbXBvcnQgVGFibGUgZnJvbSBcInJlYWN0LWJvb3RzdHJhcC9UYWJsZVwiO1xyXG5pbXBvcnQgUGVyc2lzdExvZ2luIGZyb20gXCIuL1BlcnNpc3RMb2dpblwiO1xyXG5pbXBvcnQgdXNlQXV0aCBmcm9tIFwiLi4vaG9va3MvdXNlQXV0aFwiO1xyXG5pbXBvcnQgeyBGb250QXdlc29tZUljb24gfSBmcm9tIFwiQGZvcnRhd2Vzb21lL3JlYWN0LWZvbnRhd2Vzb21lXCI7XHJcbmltcG9ydCB7IGZhVXNlciB9IGZyb20gXCJAZm9ydGF3ZXNvbWUvZnJlZS1zb2xpZC1zdmctaWNvbnNcIjtcclxuaW1wb3J0IE1lbnUgZnJvbSBcIi4vTWVudVwiO1xyXG5pbXBvcnQgQWNjb3JkaW9uIGZyb20gXCJyZWFjdC1ib290c3RyYXAvQWNjb3JkaW9uXCI7XHJcbmltcG9ydCB7IExpbmsgfSBmcm9tIFwicmVhY3Qtcm91dGVyLWRvbVwiO1xyXG5mdW5jdGlvbiBQYXRpZW50cygpIHtcclxuICBjb25zdCBbYXV0aCwgc2V0QXV0aF0gPSB1c2VTdGF0ZSh1c2VBdXRoKCkpO1xyXG4gIGNvbnN0IFtwYXRpZW50c0xpc3QsIHNldFBhdGllbnRzTGlzdF0gPSB1c2VTdGF0ZShudWxsKTtcclxuICBjb25zdCBbbGVuZ3RoTGlzdCwgc2V0TGVuZ3RoTGlzdF0gPSB1c2VTdGF0ZSgxMCk7XHJcblxyXG4gIHZhciBmb3JtRGF0YSA9IG5ldyBGb3JtRGF0YSgpO1xyXG4gIGZvcm1EYXRhLmFwcGVuZChcInBhZ2VcIiwgbGVuZ3RoTGlzdC50b1N0cmluZygpKTtcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGF4aW9zKHtcclxuICAgICAgbWV0aG9kOiBcInBvc3RcIixcclxuICAgICAgdXJsOiBcIi9hcGkvZ2V0UGF0aWVudHNcIixcclxuICAgICAgZGF0YTogZm9ybURhdGEsXHJcbiAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICBcIkNvbnRlbnQtVHlwZVwiOiBcImFwcGxpY2F0aW9uL2pzb25cIixcclxuICAgICAgICBBdXRob3JpemF0aW9uOiBgQmVhcmVyICR7YXV0aC5hdXRoLmFjY2Vzc1Rva2VufWAsXHJcbiAgICAgIH0sXHJcbiAgICB9KVxyXG4gICAgICAudGhlbihmdW5jdGlvbiAocmVzcG9uc2UpIHtcclxuICAgICAgICAvL2hhbmRsZSBzdWNjZXNzXHJcbiAgICAgICAgc2V0UGF0aWVudHNMaXN0KHJlc3BvbnNlKTtcclxuICAgICAgfSlcclxuICAgICAgLmNhdGNoKGZ1bmN0aW9uIChyZXNwb25zZSkge30pO1xyXG4gIH0sIFtsZW5ndGhMaXN0LCBzZXRMZW5ndGhMaXN0XSk7XHJcblxyXG4gIGNvbnN0IHJlYWRNb3JlID0gKCkgPT4ge1xyXG4gICAgc2V0TGVuZ3RoTGlzdChsZW5ndGhMaXN0ICsgMTApO1xyXG4gIH07XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8PlxyXG4gICAgICA8TWVudT48L01lbnU+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyIGNvbnRhaW5lci1wYXRpZW50cyByb3cgbXgtYXV0byBcIj5cclxuICAgICAgICA8aDM+VG91cyBsZXMgcGF0aWVudHM8L2gzPlxyXG5cclxuICAgICAgICB7cGF0aWVudHNMaXN0ICYmIHBhdGllbnRzTGlzdC5kYXRhICYmIHBhdGllbnRzTGlzdC5kYXRhLmxlbmd0aCA+IDAgJiYgKFxyXG4gICAgICAgICAgPD5cclxuICAgICAgICAgICAge3BhdGllbnRzTGlzdC5kYXRhLm1hcCgocGF0aWVudCkgPT4gKFxyXG4gICAgICAgICAgICAgIDxBY2NvcmRpb24gY2xhc3NOYW1lPVwibXktM1wiPlxyXG4gICAgICAgICAgICAgICAgPEFjY29yZGlvbi5JdGVtIGV2ZW50S2V5PXtwYXRpZW50LmlkfSBrZXk9e3BhdGllbnQuaWR9PlxyXG4gICAgICAgICAgICAgICAgICA8QWNjb3JkaW9uLkhlYWRlcj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1zbS0xXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8Rm9udEF3ZXNvbWVJY29uIGljb249e2ZhVXNlcn0gLz5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1zbS0yXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICB7cGF0aWVudC5maXJzdG5hbWV9IHtwYXRpZW50Lmxhc3RuYW1lfVxyXG4gICAgICAgICAgICAgICAgICAgICAgPExpbmsgY2xhc3NOYW1lPVwic2VlUHJvZmlsXCIgdG89e1wiL1wiICsgcGF0aWVudC5pZH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFZvaXIgcHJvZmlsXHJcbiAgICAgICAgICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtc20tMlwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAge25ldyBEYXRlKHBhdGllbnQuYmlydGhkYXRlKS50b0xvY2FsZURhdGVTdHJpbmcoKX1cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1zbS0yXCI+MTQvMDIvMjAyMjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLXNtLTNcIj57cGF0aWVudC5iaXJ0aExvY2F0aW9ufTwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLXNtLTFcIj5cclxuICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInN0YXR1c1wiPntwYXRpZW50LnN0YXR1c308L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgey8qIDxkaXYgY2xhc3NOYW1lPVwiY29sLXNtLTNcIj57RGF0ZS5ub3coKX08L2Rpdj4gKi99XHJcbiAgICAgICAgICAgICAgICAgIDwvQWNjb3JkaW9uLkhlYWRlcj5cclxuICAgICAgICAgICAgICAgICAgPEFjY29yZGlvbi5Cb2R5PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93IGJvZHktYWNjb3JkZW9uaXRlbVBhdGllbnRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLXNtLTRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGI+RGVybmnDqHJlIGFjdGl2aXTDqWU8L2I+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxwPlJhcHBvcnQgZGUgcmVuY29udHJlIDEyLzA4LzIwMjE8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxwPlJhcHBvcnQgZGUgcmVuY29udHJlIDIwLzA4LzIwMjI8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxwPlJhcHBvcnQgZGUgcmVuY29udHJlIDE0LzA5LzIwMjI8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLXNtLTJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGI+SHlnacOobmU8L2I+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxwPkdvb2dsZSBBZ2VuZGE8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLXNtLTJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGI+U2FudMOpZSBtZW50YWxlPC9iPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8cD5Hb29nbGUgQWdlbmRhPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1zbS0yXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxiPkxpZW5zPC9iPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8cD5Hb29nbGUgQWdlbmRhPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1zbS0yXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxiPkF1dHJlcyBkw6l0YWlsczwvYj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHA+U2FucyBwYXBpZXJzPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8cD5JbnNjcmlzIGF1IGxvZ2VtZW50IHNvY2lhbDwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICA8L0FjY29yZGlvbi5Cb2R5PlxyXG4gICAgICAgICAgICAgICAgPC9BY2NvcmRpb24uSXRlbT5cclxuICAgICAgICAgICAgICA8L0FjY29yZGlvbj5cclxuICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwiYnRuLW1ldGlzXCIgb25DbGljaz17cmVhZE1vcmV9PlxyXG4gICAgICAgICAgICAgIFJlYWQgTW9yZVxyXG4gICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgIDwvPlxyXG4gICAgICAgICl9XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC8+XHJcbiAgKTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgUGF0aWVudHM7XHJcbiIsImltcG9ydCBSZWFjdCwgeyB1c2VDb250ZXh0LCB1c2VEZWJ1Z1ZhbHVlIH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IE91dGxldCB9IGZyb20gXCJyZWFjdC1yb3V0ZXItZG9tXCI7XHJcbmltcG9ydCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHVzZVJlZnJlc2hUb2tlbiBmcm9tIFwiLi4vaG9va3MvdXNlUmVmcmVzaFRva2VuXCI7XHJcbmltcG9ydCB1c2VBdXRoIGZyb20gXCIuLi9ob29rcy91c2VBdXRoXCI7XHJcblxyXG5jb25zdCBQZXJzaXN0TG9naW4gPSAoKSA9PiB7XHJcbiAgY29uc3QgW2lzTG9hZGluZywgc2V0SXNMb2FkaW5nXSA9IHVzZVN0YXRlKHRydWUpO1xyXG4gIGNvbnN0IHJlZnJlc2ggPSB1c2VSZWZyZXNoVG9rZW4oKTtcclxuICBjb25zdCB7IGF1dGgsIHBlcnNpc3QgfSA9IHVzZUF1dGgoKTtcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGxldCBpc01vdW50ZWQgPSB0cnVlO1xyXG5cclxuICAgIGNvbnN0IHZlcmlmeVJlZnJlc2hUb2tlbiA9IGFzeW5jICgpID0+IHtcclxuICAgICAgdHJ5IHtcclxuICAgICAgICBhd2FpdCByZWZyZXNoKCk7XHJcbiAgICAgIH0gY2F0Y2ggKGVycikge1xyXG4gICAgICAgIGNvbnNvbGUuZXJyb3IoZXJyKTtcclxuICAgICAgfSBmaW5hbGx5IHtcclxuICAgICAgICBpc01vdW50ZWQgJiYgc2V0SXNMb2FkaW5nKGZhbHNlKTtcclxuICAgICAgfVxyXG4gICAgfTtcclxuXHJcbiAgICAvLyBwZXJzaXN0IGFkZGVkIGhlcmUgQUZURVIgdHV0b3JpYWwgdmlkZW9cclxuICAgIC8vIEF2b2lkcyB1bndhbnRlZCBjYWxsIHRvIHZlcmlmeVJlZnJlc2hUb2tlblxyXG4gICAgIWF1dGg/LmFjY2Vzc1Rva2VuICYmIHBlcnNpc3QgPyB2ZXJpZnlSZWZyZXNoVG9rZW4oKSA6IHNldElzTG9hZGluZyhmYWxzZSk7XHJcblxyXG4gICAgcmV0dXJuICgpID0+IChpc01vdW50ZWQgPSBmYWxzZSk7XHJcbiAgfSwgW10pO1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgLy8gY29uc29sZS5sb2coYGlzTG9hZGluZzogJHtpc0xvYWRpbmd9YCk7XHJcbiAgICAvLyBjb25zb2xlLmxvZyhgYVQ6ICR7SlNPTi5zdHJpbmdpZnkoYXV0aD8uYWNjZXNzVG9rZW4pfWApO1xyXG4gIH0sIFtpc0xvYWRpbmddKTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDw+eyFwZXJzaXN0ID8gPE91dGxldCAvPiA6IGlzTG9hZGluZyA/IDxwPkxvYWRpbmcuLi48L3A+IDogPE91dGxldCAvPn08Lz5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgUGVyc2lzdExvZ2luO1xyXG4iLCIvLyAuL2Fzc2V0cy9qcy9jb21wb25lbnRzL1Bvc3RzLmpzXHJcblxyXG5pbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBheGlvcyBmcm9tIFwiYXhpb3NcIjtcclxuXHJcbmNsYXNzIFBvc3RzIGV4dGVuZHMgQ29tcG9uZW50IHtcclxuICBjb25zdHJ1Y3RvcigpIHtcclxuICAgIHN1cGVyKCk7XHJcbiAgICB0aGlzLnN0YXRlID0geyBwb3N0czogW10sIGxvYWRpbmc6IHRydWUgfTtcclxuICB9XHJcblxyXG4gIGNvbXBvbmVudERpZE1vdW50KCkge1xyXG4gICAgdGhpcy5nZXRQb3N0cygpO1xyXG4gIH1cclxuXHJcbiAgZ2V0UG9zdHMoKSB7XHJcbiAgICBheGlvcy5nZXQoYGh0dHBzOi8vMTI3LjAuMC4xOjgwMDAvc2Vzc2lvbmApLnRoZW4oKHJlcykgPT4ge1xyXG4gICAgICAvLyBjb25zdCBwb3N0cyA9IHJlcy5kYXRhLnNsaWNlKDAsMTUpO1xyXG4gICAgICAvLyB0aGlzLnNldFN0YXRlKHsgcG9zdHMsIGxvYWRpbmc6IGZhbHNlIH0pXHJcbiAgICAgIC8vIGNvbnNvbGUubG9nKHJlcylcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgcmVuZGVyKCkge1xyXG4gICAgY29uc3QgbG9hZGluZyA9IHRoaXMuc3RhdGUubG9hZGluZztcclxuICAgIHJldHVybiAoXHJcbiAgICAgIDxkaXY+XHJcbiAgICAgICAgPHNlY3Rpb24gY2xhc3NOYW1lPVwicm93LXNlY3Rpb25cIj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyXCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93XCI+XHJcbiAgICAgICAgICAgICAgPGgyIGNsYXNzTmFtZT1cInRleHQtY2VudGVyXCI+XHJcbiAgICAgICAgICAgICAgICA8c3Bhbj5MaXN0IG9mIHBvc3RzPC9zcGFuPkNyZWF0ZWQgd2l0aHtcIiBcIn1cclxuICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImZhIGZhLWhlYXJ0XCI+PC9pPiBieSB5ZW1pd2ViYnl7XCIgXCJ9XHJcbiAgICAgICAgICAgICAgPC9oMj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICB7bG9hZGluZyA/IChcclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17XCJyb3cgdGV4dC1jZW50ZXJcIn0+XHJcbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJmYSBmYS1zcGluIGZhLXNwaW5uZXIgZmEtNHhcIj48L3NwYW4+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICkgOiAoXHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e1wicm93XCJ9PlxyXG4gICAgICAgICAgICAgICAge3RoaXMuc3RhdGUucG9zdHMubWFwKChwb3N0KSA9PiAoXHJcbiAgICAgICAgICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJjb2wtbWQtMTAgb2Zmc2V0LW1kLTEgcm93LWJsb2NrXCJcclxuICAgICAgICAgICAgICAgICAgICBrZXk9e3Bvc3QuaWR9XHJcbiAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICA8dWwgaWQ9XCJzb3J0YWJsZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGxpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1lZGlhXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtZWRpYS1ib2R5XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDQ+e3Bvc3QubmFtZX08L2g0PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+e3Bvc3QuZGVzY3JpcHRpb259PC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgPC91bD5cclxuICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICApKX1cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgKX1cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvc2VjdGlvbj5cclxuICAgICAgPC9kaXY+XHJcbiAgICApO1xyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgUG9zdHM7XHJcbiIsImltcG9ydCBSZWFjdCwgeyB1c2VDb250ZXh0LCB1c2VEZWJ1Z1ZhbHVlLCB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB1c2VBdXRoIGZyb20gXCIuLi8uLi9ob29rcy91c2VBdXRoXCI7XHJcbmltcG9ydCB7IHVzZVBhcmFtcyB9IGZyb20gXCJyZWFjdC1yb3V0ZXItZG9tXCI7XHJcbmltcG9ydCBheGlvcyBmcm9tIFwiYXhpb3NcIjtcclxuXHJcbmNvbnN0IENvbnRhY3RzID0gKCkgPT4ge1xyXG4gIGxldCBpZCA9IHVzZVBhcmFtcygpLmlkO1xyXG4gIHZhciBmb3JtRGF0YSA9IG5ldyBGb3JtRGF0YSgpO1xyXG4gIGZvcm1EYXRhLmFwcGVuZChcImlkXCIsIGlkLnRvU3RyaW5nKCkpO1xyXG4gIGNvbnN0IFthdXRoLCBzZXRBdXRoXSA9IHVzZVN0YXRlKHVzZUF1dGgoKSk7XHJcbiAgY29uc3QgW2lkUGF0aWVudCwgc2V0SWRQYXRpZW50XSA9IHVzZVN0YXRlKGlkKTtcclxuICBjb25zdCBbbGlzdENvbnRhY3RzLCBzZXRDb250YWN0c10gPSB1c2VTdGF0ZShudWxsKTtcclxuICBjb25zdCBbb3B0aW9ucywgc2V0T3B0aW9uc10gPSB1c2VTdGF0ZSgpO1xyXG4gIGNvbnN0IFtmaWx0ZXJEYXRlcywgc2V0RmlsdGVyRGF0ZXNdID0gdXNlU3RhdGUoKTtcclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgYXhpb3Moe1xyXG4gICAgICBtZXRob2Q6IFwicG9zdFwiLFxyXG4gICAgICB1cmw6IFwiL2FwaS9nZXRDb250YWN0c0J5UGF0aWVudHNcIixcclxuICAgICAgZGF0YTogZm9ybURhdGEsXHJcbiAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICBcIkNvbnRlbnQtVHlwZVwiOiBcImFwcGxpY2F0aW9uL2pzb25cIixcclxuICAgICAgICBBdXRob3JpemF0aW9uOiBgQmVhcmVyICR7YXV0aC5hdXRoLmFjY2Vzc1Rva2VufWAsXHJcbiAgICAgIH0sXHJcbiAgICB9KVxyXG4gICAgICAudGhlbihmdW5jdGlvbiAocmVzcG9uc2UpIHtcclxuICAgICAgICBzZXRDb250YWN0cyhyZXNwb25zZSk7XHJcbiAgICAgIH0pXHJcbiAgICAgIC5jYXRjaChmdW5jdGlvbiAocmVzcG9uc2UpIHt9KTtcclxuICB9LCBbaWRQYXRpZW50XSk7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8PlxyXG4gICAgICA8aDU+Q29udGFjdHM8L2g1PlxyXG4gICAgICB7bGlzdENvbnRhY3RzICYmIGxpc3RDb250YWN0cy5kYXRhLmxlbmd0aCA+IDAgJiYgKFxyXG4gICAgICAgIDw+XHJcbiAgICAgICAgICB7bGlzdENvbnRhY3RzPy5kYXRhPy5tYXAoKGl0ZW0sIGlkKSA9PiAoXHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93XCI+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtc20tNFwiPlxyXG4gICAgICAgICAgICAgICAge2l0ZW0/LmNvbnQ/LmZpcnN0bmFtZX0ge2l0ZW0/LmNvbnQ/Lmxhc3RuYW1lfVxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICkpfVxyXG4gICAgICAgIDwvPlxyXG4gICAgICApfVxyXG5cclxuICAgICAgPGg1PlBhdGllbnRzPC9oNT5cclxuICAgICAge2xpc3RDb250YWN0cyAmJiBsaXN0Q29udGFjdHMuZGF0YS5sZW5ndGggPiAwICYmIChcclxuICAgICAgICA8PlxyXG4gICAgICAgICAgey8qIDxoNj5MaXN0ZSBkZSBmaWNoaWVycyBkw6lqw6AgcHLDqXNlbnRzPC9oNj4gKi99XHJcblxyXG4gICAgICAgICAge2xpc3RDb250YWN0cz8uZGF0YT8ubWFwKChpdGVtLCBpZCkgPT4gKFxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvd1wiPlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLXNtLTRcIj5cclxuICAgICAgICAgICAgICAgIHtpdGVtPy5vcnBhPy5maXJzdG5hbWV9IHtpdGVtPy5vcnBhPy5sYXN0bmFtZX1cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICB7LyogPGRpdiBjbGFzc05hbWU9XCJjb2wtc20tNFwiPntpdGVtPy5jb250Py5sYXN0bmFtZX08L2Rpdj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1zbS00XCI+e2l0ZW0/LmNvbnQ/LmRlc2NyaXB0aW9ufTwvZGl2PiAqL31cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICApKX1cclxuICAgICAgICA8Lz5cclxuICAgICAgKX1cclxuICAgIDwvPlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBDb250YWN0cztcclxuIiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyB1c2VEcm9wem9uZSB9IGZyb20gXCJyZWFjdC1kcm9wem9uZVwiO1xyXG5cclxuY29uc3QgQmFzaWMgPSAocHJvcHMpID0+IHtcclxuICBjb25zdCB7IGFjY2VwdGVkRmlsZXMsIGdldFJvb3RQcm9wcywgZ2V0SW5wdXRQcm9wcyB9ID0gdXNlRHJvcHpvbmUoKTtcclxuXHJcbiAgY29uc3QgZmlsZXMgPSBhY2NlcHRlZEZpbGVzLm1hcCgoZmlsZSkgPT4gKFxyXG4gICAgPGxpIGtleT17ZmlsZS5wYXRofT5cclxuICAgICAge2ZpbGUucGF0aH0gLSB7ZmlsZS5zaXplfSBieXRlc1xyXG4gICAgPC9saT5cclxuICApKTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPVwicm93IGNvbnRhaW5lci1kcm9wem9uZSBtYi00XCI+XHJcbiAgICAgIDxkaXYgey4uLmdldFJvb3RQcm9wcyh7IGNsYXNzTmFtZTogXCJkcm9wem9uZSBjb2wtc20tNlwiIH0pfT5cclxuICAgICAgICA8aW5wdXQgey4uLmdldElucHV0UHJvcHMoKX0gLz5cclxuICAgICAgICA8cD5VcGxvYWRleiB2b3MgZmljaGllcnMgaWNpPC9wPlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtc20tNlwiPlxyXG4gICAgICAgIDxoNj5GaWNoaWVycyB1cGxvYWTDqWU8L2g2PlxyXG4gICAgICAgIDxwPntmaWxlc308L3A+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IEJhc2ljO1xyXG4iLCJpbXBvcnQgUmVhY3QsIHsgdXNlQ29udGV4dCwgdXNlRGVidWdWYWx1ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyB1c2VSZWYsIHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgTGluaywgdXNlTmF2aWdhdGUsIHVzZUxvY2F0aW9uIH0gZnJvbSBcInJlYWN0LXJvdXRlci1kb21cIjtcclxuaW1wb3J0IEFjY29yZGlvbiBmcm9tIFwicmVhY3QtYm9vdHN0cmFwL0FjY29yZGlvblwiO1xyXG5pbXBvcnQgdXNlQXV0aCBmcm9tIFwiLi4vLi4vLi4vaG9va3MvdXNlQXV0aFwiO1xyXG5pbXBvcnQgeyB1c2VQYXJhbXMgfSBmcm9tIFwicmVhY3Qtcm91dGVyLWRvbVwiO1xyXG5pbXBvcnQgYXhpb3MgZnJvbSBcImF4aW9zXCI7XHJcbmltcG9ydCBUYWJsZSBmcm9tIFwicmVhY3QtYm9vdHN0cmFwL1RhYmxlXCI7XHJcbmltcG9ydCB7IEZvbnRBd2Vzb21lSWNvbiB9IGZyb20gXCJAZm9ydGF3ZXNvbWUvcmVhY3QtZm9udGF3ZXNvbWVcIjtcclxuaW1wb3J0IHtcclxuICBmYVBsdXNDaXJjbGUsXHJcbiAgZmFDYW5jZWwsXHJcbiAgZmFFZGl0LFxyXG59IGZyb20gXCJAZm9ydGF3ZXNvbWUvZnJlZS1zb2xpZC1zdmctaWNvbnNcIjtcclxuaW1wb3J0IE1vZGFsSXRlbUZpY2hlIGZyb20gXCIuL01vZGFsSXRlbUZpY2hlXCI7XHJcblxyXG5jb25zdCBCbG9ja0luZm9zID0gKHByb3BzKSA9PiB7XHJcbiAgbGV0IGlkID0gdXNlUGFyYW1zKCkuaWQ7XHJcbiAgbGV0IGJhY2tncm91bmRJbWFnZSA9XHJcbiAgICBcIi4uL2ltYWdlcy81YTk0ZTM0YjRjMzZlMjhkZTRlNzA0ZjhjMmQxYzM5YTc5ZTkxYjVkLnBuZ1wiO1xyXG4gIGNvbnN0IFthdXRoLCBzZXRBdXRoXSA9IHVzZVN0YXRlKHVzZUF1dGgoKSk7XHJcbiAgY29uc3QgW2lkUGF0aWVudCwgc2V0SWRQYXRpZW50XSA9IHVzZVN0YXRlKGlkKTtcclxuICBjb25zdCBsb2NhdGlvbiA9IHVzZUxvY2F0aW9uKCk7XHJcbiAgdmFyIGZvcm1EYXRhID0gbmV3IEZvcm1EYXRhKCk7XHJcbiAgZm9ybURhdGEuYXBwZW5kKFwiaWRcIiwgaWQudG9TdHJpbmcoKSk7XHJcblxyXG4gIGNvbnN0IFtpbmZvcm1hdGlvblBhdGllbnQsIHNldEluZm9ybWF0aW9uXSA9IHVzZVN0YXRlKG51bGwpO1xyXG4gIGNvbnN0IFtpbmZvcm1hdGlvblRlbXBsYXRlQmxvY2ssIHNldEluZm9ybWF0aW9uVGVtcGxhdGVCbG9ja10gPVxyXG4gICAgdXNlU3RhdGUobnVsbCk7XHJcblxyXG4gIC8vIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgLy8gICBheGlvcyh7XHJcbiAgLy8gICAgIG1ldGhvZDogXCJwb3N0XCIsXHJcbiAgLy8gICAgIHVybDogXCIvYXBpL3BhdGllbnRzSW5mb3JtYXRpb25CeVBhdGllbnRzXCIsXHJcbiAgLy8gICAgIGRhdGE6IGZvcm1EYXRhLFxyXG4gIC8vICAgICBoZWFkZXJzOiB7XHJcbiAgLy8gICAgICAgXCJDb250ZW50LVR5cGVcIjogXCJhcHBsaWNhdGlvbi9qc29uXCIsXHJcbiAgLy8gICAgICAgQXV0aG9yaXphdGlvbjogYEJlYXJlciAke2F1dGguYXV0aC5hY2Nlc3NUb2tlbn1gLFxyXG4gIC8vICAgICB9LFxyXG4gIC8vICAgfSlcclxuICAvLyAgICAgLnRoZW4oZnVuY3Rpb24gKHJlc3BvbnNlKSB7XHJcbiAgLy8gICAgICAgc2V0SW5mb3JtYXRpb24ocmVzcG9uc2UuZGF0YSk7XHJcbiAgLy8gICAgIH0pXHJcbiAgLy8gICAgIC5jYXRjaChmdW5jdGlvbiAocmVzcG9uc2UpIHt9KTtcclxuICAvLyB9LCBbaWRQYXRpZW50XSk7XHJcbiAgY29uc29sZS5sb2cocHJvcHMpO1xyXG4gIHJldHVybiAoXHJcbiAgICA8PlxyXG4gICAgICB7cHJvcHMuaW5mb3M/Lm1hcCgocGF0aWVudCwgaWQpID0+IChcclxuICAgICAgICA8PlxyXG4gICAgICAgICAge3BhdGllbnQgJiYgcGF0aWVudC5zdWdlPy5wYXRoU3RyaW5nID09PSBwcm9wcy5saW5rICYmIChcclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3dcIj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1zbS00XCI+XHJcbiAgICAgICAgICAgICAgICA8cD57cGF0aWVudC5zdWdlPy52YWx1ZX08L3A+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtc20tNFwiPlxyXG4gICAgICAgICAgICAgICAge3BhdGllbnQ/LnBhdGllbnRJbmZvcm1hdGlvbj8ubWFwKChwaSwgaWQpID0+IChcclxuICAgICAgICAgICAgICAgICAgPHA+e3BpLnN1Z2c/LnZhbHVlfTwvcD5cclxuICAgICAgICAgICAgICAgICkpfVxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLXNtLTRcIj5cclxuICAgICAgICAgICAgICAgIDxNb2RhbEl0ZW1GaWNoZSBsaW5rPXtwcm9wcy5saW5rfSBpbmZvcz17cGF0aWVudH0gLz5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICApfVxyXG4gICAgICAgIDwvPlxyXG4gICAgICApKX1cclxuICAgIDwvPlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBCbG9ja0luZm9zO1xyXG4iLCJpbXBvcnQgUmVhY3QsIHsgdXNlQ29udGV4dCwgdXNlRGVidWdWYWx1ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyB1c2VSZWYsIHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgTGluaywgdXNlTmF2aWdhdGUsIHVzZUxvY2F0aW9uIH0gZnJvbSBcInJlYWN0LXJvdXRlci1kb21cIjtcclxuaW1wb3J0IEFjY29yZGlvbiBmcm9tIFwicmVhY3QtYm9vdHN0cmFwL0FjY29yZGlvblwiO1xyXG5pbXBvcnQgdXNlQXV0aCBmcm9tIFwiLi4vLi4vLi4vaG9va3MvdXNlQXV0aFwiO1xyXG5pbXBvcnQgeyB1c2VQYXJhbXMgfSBmcm9tIFwicmVhY3Qtcm91dGVyLWRvbVwiO1xyXG5pbXBvcnQgYXhpb3MgZnJvbSBcImF4aW9zXCI7XHJcbmltcG9ydCBUYWJsZSBmcm9tIFwicmVhY3QtYm9vdHN0cmFwL1RhYmxlXCI7XHJcbmltcG9ydCB7IEZvbnRBd2Vzb21lSWNvbiB9IGZyb20gXCJAZm9ydGF3ZXNvbWUvcmVhY3QtZm9udGF3ZXNvbWVcIjtcclxuaW1wb3J0IHtcclxuICBmYVBsdXNDaXJjbGUsXHJcbiAgZmFDYW5jZWwsXHJcbiAgZmFFZGl0LFxyXG59IGZyb20gXCJAZm9ydGF3ZXNvbWUvZnJlZS1zb2xpZC1zdmctaWNvbnNcIjtcclxuaW1wb3J0IE1vZGFsSXRlbUZpY2hlIGZyb20gXCIuL01vZGFsSXRlbUZpY2hlXCI7XHJcbmltcG9ydCBCbG9ja0luZm9zIGZyb20gXCIuL0Jsb2NrLUluZm9zXCI7XHJcblxyXG5jb25zdCBGaWNoZSA9ICgpID0+IHtcclxuICBsZXQgaWQgPSB1c2VQYXJhbXMoKS5pZDtcclxuICBsZXQgYmFja2dyb3VuZEltYWdlID1cclxuICAgIFwiLi4vaW1hZ2VzLzVhOTRlMzRiNGMzNmUyOGRlNGU3MDRmOGMyZDFjMzlhNzllOTFiNWQucG5nXCI7XHJcbiAgY29uc3QgW2F1dGgsIHNldEF1dGhdID0gdXNlU3RhdGUodXNlQXV0aCgpKTtcclxuICBjb25zdCBbaWRQYXRpZW50LCBzZXRJZFBhdGllbnRdID0gdXNlU3RhdGUoaWQpO1xyXG4gIGNvbnN0IGxvY2F0aW9uID0gdXNlTG9jYXRpb24oKTtcclxuICB2YXIgZm9ybURhdGEgPSBuZXcgRm9ybURhdGEoKTtcclxuICBmb3JtRGF0YS5hcHBlbmQoXCJpZFwiLCBpZC50b1N0cmluZygpKTtcclxuXHJcbiAgY29uc3QgW2luZm9ybWF0aW9uUGF0aWVudCwgc2V0SW5mb3JtYXRpb25dID0gdXNlU3RhdGUobnVsbCk7XHJcbiAgY29uc3QgW2luZm9ybWF0aW9uVGVtcGxhdGVCbG9jaywgc2V0SW5mb3JtYXRpb25UZW1wbGF0ZUJsb2NrXSA9XHJcbiAgICB1c2VTdGF0ZShudWxsKTtcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGF4aW9zKHtcclxuICAgICAgbWV0aG9kOiBcInBvc3RcIixcclxuICAgICAgdXJsOiBcIi9hcGkvcGF0aWVudHNJbmZvcm1hdGlvbkJ5UGF0aWVudHNcIixcclxuICAgICAgZGF0YTogZm9ybURhdGEsXHJcbiAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICBcIkNvbnRlbnQtVHlwZVwiOiBcImFwcGxpY2F0aW9uL2pzb25cIixcclxuICAgICAgICBBdXRob3JpemF0aW9uOiBgQmVhcmVyICR7YXV0aC5hdXRoLmFjY2Vzc1Rva2VufWAsXHJcbiAgICAgIH0sXHJcbiAgICB9KVxyXG4gICAgICAudGhlbihmdW5jdGlvbiAocmVzcG9uc2UpIHtcclxuICAgICAgICBzZXRJbmZvcm1hdGlvbihyZXNwb25zZS5kYXRhKTtcclxuICAgICAgfSlcclxuICAgICAgLmNhdGNoKGZ1bmN0aW9uIChyZXNwb25zZSkge30pO1xyXG4gIH0sIFtpZFBhdGllbnRdKTtcclxuICAvLyBjb25zb2xlLmxvZyhcImluZm9zXCIsIGluZm9ybWF0aW9uUGF0aWVudCk7XHJcbiAgcmV0dXJuIChcclxuICAgIDxzZWN0aW9uPlxyXG4gICAgICA8QWNjb3JkaW9uIGRlZmF1bHRBY3RpdmVLZXk9XCIwXCIgZmx1c2g9e3RydWV9IGNsYXNzTmFtZT1cImFjY29yZGlvbi1maWNoZVwiPlxyXG4gICAgICAgIDxBY2NvcmRpb24uSXRlbSBldmVudEtleT1cIjBcIj5cclxuICAgICAgICAgIDxBY2NvcmRpb24uSGVhZGVyPlN0YXR1dCBkZSBzdWl2aTwvQWNjb3JkaW9uLkhlYWRlcj5cclxuICAgICAgICAgIDxBY2NvcmRpb24uQm9keT5cclxuICAgICAgICAgICAgPEJsb2NrSW5mb3NcclxuICAgICAgICAgICAgICBpbmZvcz17aW5mb3JtYXRpb25QYXRpZW50fVxyXG4gICAgICAgICAgICAgIGxpbms9e1wiL3BhdGllbnQvZmljaGUvc3RhdHV0LWR1LXN1aXZpXCJ9XHJcbiAgICAgICAgICAgID48L0Jsb2NrSW5mb3M+XHJcbiAgICAgICAgICAgIDxCbG9ja0luZm9zXHJcbiAgICAgICAgICAgICAgaW5mb3M9e2luZm9ybWF0aW9uUGF0aWVudH1cclxuICAgICAgICAgICAgICBsaW5rPXtcIi9wYXRpZW50L3N1aXZpL2VxdWlwZXNcIn1cclxuICAgICAgICAgICAgPjwvQmxvY2tJbmZvcz5cclxuICAgICAgICAgICAgPEJsb2NrSW5mb3NcclxuICAgICAgICAgICAgICBpbmZvcz17aW5mb3JtYXRpb25QYXRpZW50fVxyXG4gICAgICAgICAgICAgIGxpbms9e1wiL3BhdGllbnQvc3VpdmkvcHJvZ3JhbW1lXCJ9XHJcbiAgICAgICAgICAgID48L0Jsb2NrSW5mb3M+XHJcbiAgICAgICAgICAgIDxCbG9ja0luZm9zXHJcbiAgICAgICAgICAgICAgaW5mb3M9e2luZm9ybWF0aW9uUGF0aWVudH1cclxuICAgICAgICAgICAgICBsaW5rPXtcIi9wYXRpZW50L3N1aXZpL2FudGVubmVcIn1cclxuICAgICAgICAgICAgPjwvQmxvY2tJbmZvcz5cclxuICAgICAgICAgIDwvQWNjb3JkaW9uLkJvZHk+XHJcbiAgICAgICAgPC9BY2NvcmRpb24uSXRlbT5cclxuICAgICAgPC9BY2NvcmRpb24+XHJcbiAgICAgIDxBY2NvcmRpb24gY2xhc3NOYW1lPVwiYWNjb3JkaW9uLWZpY2hlXCIgZmx1c2g9e3RydWV9PlxyXG4gICAgICAgIDxBY2NvcmRpb24uSXRlbSBldmVudEtleT1cIjFcIj5cclxuICAgICAgICAgIDxBY2NvcmRpb24uSGVhZGVyPkluZm9ybWF0aW9uIGfDqW7DqXJhbGU8L0FjY29yZGlvbi5IZWFkZXI+XHJcbiAgICAgICAgICA8QWNjb3JkaW9uLkJvZHk+XHJcbiAgICAgICAgICAgIDxCbG9ja0luZm9zXHJcbiAgICAgICAgICAgICAgaW5mb3M9e2luZm9ybWF0aW9uUGF0aWVudH1cclxuICAgICAgICAgICAgICBsaW5rPXtcIi9wYXRpZW50L2ZpY2hlL2luZm9ybWF0aW9uLWdlbmVyYWxlL2dlbnJlXCJ9XHJcbiAgICAgICAgICAgID48L0Jsb2NrSW5mb3M+XHJcbiAgICAgICAgICAgIDxCbG9ja0luZm9zXHJcbiAgICAgICAgICAgICAgaW5mb3M9e2luZm9ybWF0aW9uUGF0aWVudH1cclxuICAgICAgICAgICAgICBsaW5rPXtcIi9wYXRpZW50L2ZpY2hlL2luZm9ybWF0aW9uLWdlbmVyYWxlL2V0YXQtY2l2aWxcIn1cclxuICAgICAgICAgICAgPjwvQmxvY2tJbmZvcz5cclxuICAgICAgICAgICAgPEJsb2NrSW5mb3NcclxuICAgICAgICAgICAgICBpbmZvcz17aW5mb3JtYXRpb25QYXRpZW50fVxyXG4gICAgICAgICAgICAgIGxpbms9e1xyXG4gICAgICAgICAgICAgICAgXCIvcGF0aWVudC9maWNoZS9pbmZvcm1hdGlvbi1nZW5lcmFsZS9jb21wb3NpdGlvbi1mYW1pbGxpYWxlXCJcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgID48L0Jsb2NrSW5mb3M+XHJcbiAgICAgICAgICAgIDxCbG9ja0luZm9zXHJcbiAgICAgICAgICAgICAgaW5mb3M9e2luZm9ybWF0aW9uUGF0aWVudH1cclxuICAgICAgICAgICAgICBsaW5rPXtcIi9wYXRpZW50L2ZpY2hlL2luZm9ybWF0aW9uLWdlbmVyYWxlL25hdGlvbmFsaXRlXCJ9XHJcbiAgICAgICAgICAgID48L0Jsb2NrSW5mb3M+XHJcbiAgICAgICAgICAgIDxCbG9ja0luZm9zXHJcbiAgICAgICAgICAgICAgaW5mb3M9e2luZm9ybWF0aW9uUGF0aWVudH1cclxuICAgICAgICAgICAgICBsaW5rPXtcIi9wYXRpZW50L2ZpY2hlL2luZm9ybWF0aW9uLWdlbmVyYWxlL3RpdHJlLWRlLXNlam91clwifVxyXG4gICAgICAgICAgICA+PC9CbG9ja0luZm9zPlxyXG4gICAgICAgICAgICA8QmxvY2tJbmZvc1xyXG4gICAgICAgICAgICAgIGluZm9zPXtpbmZvcm1hdGlvblBhdGllbnR9XHJcbiAgICAgICAgICAgICAgbGluaz17XCIvcGF0aWVudC9maWNoZS9pbmZvcm1hdGlvbi1nZW5lcmFsZS9udW1lcm8tZGUtdGVsZXBob25lXCJ9XHJcbiAgICAgICAgICAgID48L0Jsb2NrSW5mb3M+XHJcbiAgICAgICAgICAgIDxCbG9ja0luZm9zXHJcbiAgICAgICAgICAgICAgaW5mb3M9e2luZm9ybWF0aW9uUGF0aWVudH1cclxuICAgICAgICAgICAgICBsaW5rPXtcIi9wYXRpZW50L2ZpY2hlL2luZm9ybWF0aW9uLWdlbmVyYWxlL2UtbWFpbFwifVxyXG4gICAgICAgICAgICA+PC9CbG9ja0luZm9zPlxyXG4gICAgICAgICAgPC9BY2NvcmRpb24uQm9keT5cclxuICAgICAgICA8L0FjY29yZGlvbi5JdGVtPlxyXG4gICAgICA8L0FjY29yZGlvbj5cclxuICAgIDwvc2VjdGlvbj5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgRmljaGU7XHJcbiIsImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBCdXR0b24gZnJvbSBcInJlYWN0LWJvb3RzdHJhcC9CdXR0b25cIjtcclxuaW1wb3J0IE1vZGFsIGZyb20gXCJyZWFjdC1ib290c3RyYXAvTW9kYWxcIjtcclxuaW1wb3J0IHVzZUF1dGggZnJvbSBcIi4uLy4uLy4uL2hvb2tzL3VzZUF1dGhcIjtcclxuaW1wb3J0IHsgRm9udEF3ZXNvbWVJY29uIH0gZnJvbSBcIkBmb3J0YXdlc29tZS9yZWFjdC1mb250YXdlc29tZVwiO1xyXG5pbXBvcnQge1xyXG4gIGZhUGx1c0NpcmNsZSxcclxuICBmYUNhbmNlbCxcclxuICBmYUVkaXQsXHJcbn0gZnJvbSBcIkBmb3J0YXdlc29tZS9mcmVlLXNvbGlkLXN2Zy1pY29uc1wiO1xyXG5pbXBvcnQgeyB1c2VQYXJhbXMgfSBmcm9tIFwicmVhY3Qtcm91dGVyLWRvbVwiO1xyXG5pbXBvcnQgYXhpb3MgZnJvbSBcImF4aW9zXCI7XHJcbmltcG9ydCBGb3JtIGZyb20gXCJyZWFjdC1ib290c3RyYXAvRm9ybVwiO1xyXG5cclxuZnVuY3Rpb24gTW9kYWxJdGVtRmljaGUocHJvcHMpIHtcclxuICBjb25zdCBbc2hvdywgc2V0U2hvd10gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgY29uc3QgW2F1dGgsIHNldEF1dGhdID0gdXNlU3RhdGUodXNlQXV0aCgpKTtcclxuICBsZXQgaWQgPSB1c2VQYXJhbXMoKS5pZDtcclxuICB2YXIgZm9ybURhdGEgPSBuZXcgRm9ybURhdGEoKTtcclxuICBmb3JtRGF0YS5hcHBlbmQoXCJpZFwiLCBpZC50b1N0cmluZygpKTtcclxuICBmb3JtRGF0YS5hcHBlbmQoXCJwYXRoU3RyaW5nXCIsIHByb3BzLmxpbmspO1xyXG4gIGNvbnN0IFtpbmZvcywgc2V0SW5mb3NdID0gdXNlU3RhdGUobnVsbCk7XHJcbiAgY29uc3QgW2VsZW1lbnRzT3B0LCBzZXRFbGVtZW50c09wdF0gPSB1c2VTdGF0ZShudWxsKTtcclxuICBjb25zdCBbaWRQYXRpZW50LCBzZXRJZFBhdGllbnRdID0gdXNlU3RhdGUoaWQpO1xyXG4gIGNvbnN0IGhhbmRsZUNsb3NlID0gKCkgPT4gc2V0U2hvdyhmYWxzZSk7XHJcbiAgY29uc3QgaGFuZGxlU2hvdyA9ICgpID0+IHNldFNob3codHJ1ZSk7XHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIHNldEVsZW1lbnRzT3B0KC4uLnByb3BzLmluZm9zLnN1Z2dlc3Rpb25zQnlCbG9jayk7XHJcblxyXG4gICAgLy8gYXhpb3Moe1xyXG4gICAgLy8gICBtZXRob2Q6IFwicG9zdFwiLFxyXG4gICAgLy8gICB1cmw6IFwiL2FwaS9maW5kRWxBbmRCbGNrQW5kVmFsQnlQYXRpZW50XCIsXHJcbiAgICAvLyAgIGRhdGE6IGZvcm1EYXRhLFxyXG4gICAgLy8gICBoZWFkZXJzOiB7XHJcbiAgICAvLyAgICAgXCJDb250ZW50LVR5cGVcIjogXCJhcHBsaWNhdGlvbi9qc29uXCIsXHJcbiAgICAvLyAgICAgQXV0aG9yaXphdGlvbjogYEJlYXJlciAke2F1dGguYXV0aC5hY2Nlc3NUb2tlbn1gLFxyXG4gICAgLy8gICB9LFxyXG4gICAgLy8gfSlcclxuICAgIC8vICAgLnRoZW4oZnVuY3Rpb24gKHJlc3BvbnNlKSB7XHJcbiAgICAvLyAgICAgc2V0SW5mb3MocmVzcG9uc2UpO1xyXG4gICAgLy8gICB9KVxyXG4gICAgLy8gICAuY2F0Y2goZnVuY3Rpb24gKHJlc3BvbnNlKSB7fSk7XHJcbiAgfSwgW2lkUGF0aWVudF0pO1xyXG5cclxuICAvLyBjb25zb2xlLmxvZyguLi5wcm9wcy5pbmZvcy5zdWdnZXN0aW9uc0J5QmxvY2spO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPD5cclxuICAgICAgPEJ1dHRvbiBvbkNsaWNrPXtoYW5kbGVTaG93fT5cclxuICAgICAgICA8Rm9udEF3ZXNvbWVJY29uIGljb249e2ZhUGx1c0NpcmNsZX0gLz5cclxuICAgICAgPC9CdXR0b24+XHJcblxyXG4gICAgICA8TW9kYWwgc2hvdz17c2hvd30gb25IaWRlPXtoYW5kbGVDbG9zZX0+XHJcbiAgICAgICAgPE1vZGFsLkhlYWRlciBjbG9zZUJ1dHRvbj5cclxuICAgICAgICAgIDxNb2RhbC5UaXRsZT5Nb2RpZmllciB1bmUgaW5mb3JtYXRpb248L01vZGFsLlRpdGxlPlxyXG4gICAgICAgIDwvTW9kYWwuSGVhZGVyPlxyXG4gICAgICAgIDxNb2RhbC5Cb2R5PlxyXG4gICAgICAgICAge1wiIFwifVxyXG4gICAgICAgICAgPD5cclxuICAgICAgICAgICAgPEZvcm0uTGFiZWwgaHRtbEZvcj1cImlucHV0VmFsdWVcIj5WYWxldXI8L0Zvcm0uTGFiZWw+XHJcbiAgICAgICAgICAgIDxGb3JtLlNlbGVjdCBzaXplPVwibGdcIj5cclxuICAgICAgICAgICAgICB7ZWxlbWVudHNPcHQ/Lm1hcCgoZWwsIGlkKSA9PiAoXHJcbiAgICAgICAgICAgICAgICA8PlxyXG4gICAgICAgICAgICAgICAgICA8b3B0aW9uPntlbD8udmFsdWV9PC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgICA8Lz5cclxuICAgICAgICAgICAgICApKX1cclxuICAgICAgICAgICAgPC9Gb3JtLlNlbGVjdD5cclxuICAgICAgICAgICAgPEZvcm0uTGFiZWwgaHRtbEZvcj1cImlucHV0VmFsdWVcIj5WYWxldXIgU3DDqWNpZmlxdWU8L0Zvcm0uTGFiZWw+XHJcbiAgICAgICAgICAgIDxGb3JtLkNvbnRyb2xcclxuICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXHJcbiAgICAgICAgICAgICAgaWQ9XCJpbnB1dFZhbHVlU3DDqWNpZmlxdWVcIlxyXG4gICAgICAgICAgICAgIGFyaWEtZGVzY3JpYmVkYnk9XCJ2YWx1ZVNww6ljaWZpcXVlXCJcclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgPHA+XHJcbiAgICAgICAgICAgICAgTGVzIHN1Z2dlc3Rpb25zIG1hcnF1w6llcyBkJ3VuZSDDqXRvaWxlICgqKSBkYW5zIGxhIGxpc3RlIGNpLWRlc3N1c1xyXG4gICAgICAgICAgICAgIGRlbWFuZGVudCBvYmxpZ2F0b2lyZW1lbnQgdW5lIHZhbGV1ciBzcMOpY2lmaXF1ZS5cclxuICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICA8Rm9ybS5MYWJlbCBodG1sRm9yPVwiaW5wdXRWYWx1ZVwiPkTDqWJ1dDwvRm9ybS5MYWJlbD5cclxuICAgICAgICAgICAgPEZvcm0uQ29udHJvbFxyXG4gICAgICAgICAgICAgIHR5cGU9XCJkYXRlXCJcclxuICAgICAgICAgICAgICBpZD1cImlucHV0VmFsdWVTcMOpY2lmaXF1ZVwiXHJcbiAgICAgICAgICAgICAgYXJpYS1kZXNjcmliZWRieT1cInZhbHVlU3DDqWNpZmlxdWVcIlxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8Rm9ybS5MYWJlbCBodG1sRm9yPVwiaW5wdXRWYWx1ZVwiPkZpbjwvRm9ybS5MYWJlbD5cclxuICAgICAgICAgICAgPEZvcm0uQ29udHJvbFxyXG4gICAgICAgICAgICAgIHR5cGU9XCJkYXRlXCJcclxuICAgICAgICAgICAgICBpZD1cImlucHV0VmFsdWVTcMOpY2lmaXF1ZVwiXHJcbiAgICAgICAgICAgICAgYXJpYS1kZXNjcmliZWRieT1cInZhbHVlU3DDqWNpZmlxdWVcIlxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8Rm9ybS5MYWJlbCBodG1sRm9yPVwiaW5wdXRWYWx1ZVwiPkNvbW1lbnRhaXJlPC9Gb3JtLkxhYmVsPlxyXG4gICAgICAgICAgICA8Rm9ybS5Db250cm9sIGFzPVwidGV4dGFyZWFcIiByb3dzPXszfSAvPlxyXG4gICAgICAgICAgPC8+XHJcbiAgICAgICAgPC9Nb2RhbC5Cb2R5PlxyXG4gICAgICAgIDxNb2RhbC5Gb290ZXI+XHJcbiAgICAgICAgICA8QnV0dG9uIG9uQ2xpY2s9e2hhbmRsZUNsb3NlfT5DbG9zZTwvQnV0dG9uPlxyXG4gICAgICAgICAgPEJ1dHRvbiBvbkNsaWNrPXtoYW5kbGVDbG9zZX0+U2F2ZSBDaGFuZ2VzPC9CdXR0b24+XHJcbiAgICAgICAgPC9Nb2RhbC5Gb290ZXI+XHJcbiAgICAgIDwvTW9kYWw+XHJcbiAgICA8Lz5cclxuICApO1xyXG59XHJcblxyXG4vLyByZW5kZXIoPE1vZGFsIC8+KTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IE1vZGFsSXRlbUZpY2hlO1xyXG4iLCJpbXBvcnQgUmVhY3QsIHsgdXNlQ29udGV4dCwgdXNlRGVidWdWYWx1ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyB1c2VSZWYsIHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHtcclxuICBDaGFydCBhcyBDaGFydEpTLFxyXG4gIENhdGVnb3J5U2NhbGUsXHJcbiAgTGluZWFyU2NhbGUsXHJcbiAgQmFyRWxlbWVudCxcclxuICBUaXRsZSxcclxuICBUb29sdGlwLFxyXG4gIExlZ2VuZCxcclxufSBmcm9tIFwiY2hhcnQuanNcIjtcclxuaW1wb3J0IHsgQmFyIH0gZnJvbSBcInJlYWN0LWNoYXJ0anMtMlwiO1xyXG5pbXBvcnQgdXNlQXV0aCBmcm9tIFwiLi4vLi4vaG9va3MvdXNlQXV0aFwiO1xyXG5pbXBvcnQgeyB1c2VQYXJhbXMgfSBmcm9tIFwicmVhY3Qtcm91dGVyLWRvbVwiO1xyXG5pbXBvcnQgYXhpb3MgZnJvbSBcImF4aW9zXCI7XHJcblxyXG5DaGFydEpTLnJlZ2lzdGVyKFxyXG4gIENhdGVnb3J5U2NhbGUsXHJcbiAgTGluZWFyU2NhbGUsXHJcbiAgQmFyRWxlbWVudCxcclxuICBUaXRsZSxcclxuICBUb29sdGlwLFxyXG4gIExlZ2VuZFxyXG4pO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQXBwKCkge1xyXG4gIGxldCBpZCA9IHVzZVBhcmFtcygpLmlkO1xyXG4gIHZhciBmb3JtRGF0YSA9IG5ldyBGb3JtRGF0YSgpO1xyXG4gIGZvcm1EYXRhLmFwcGVuZChcImlkXCIsIGlkLnRvU3RyaW5nKCkpO1xyXG4gIGNvbnN0IFthdXRoLCBzZXRBdXRoXSA9IHVzZVN0YXRlKHVzZUF1dGgoKSk7XHJcbiAgY29uc3QgW2lkUGF0aWVudCwgc2V0SWRQYXRpZW50XSA9IHVzZVN0YXRlKGlkKTtcclxuICBjb25zdCBbaW5mb3JtYXRpb25zLCBzZXRJbmZvcm1hdGlvbnNdID0gdXNlU3RhdGUoKTtcclxuICBjb25zdCBbb3B0aW9ucywgc2V0T3B0aW9uc10gPSB1c2VTdGF0ZSgpO1xyXG4gIGNvbnN0IFtmaWx0ZXJEYXRlcywgc2V0RmlsdGVyRGF0ZXNdID0gdXNlU3RhdGUoKTtcclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgYXhpb3Moe1xyXG4gICAgICBtZXRob2Q6IFwicG9zdFwiLFxyXG4gICAgICB1cmw6IFwiL2FwaS9nZXRGb2xsb3dVcFJlcG9ydHNJbmRpY2F0b3JzXCIsXHJcbiAgICAgIGRhdGE6IGZvcm1EYXRhLFxyXG4gICAgICBoZWFkZXJzOiB7XHJcbiAgICAgICAgXCJDb250ZW50LVR5cGVcIjogXCJhcHBsaWNhdGlvbi9qc29uXCIsXHJcbiAgICAgICAgQXV0aG9yaXphdGlvbjogYEJlYXJlciAke2F1dGguYXV0aC5hY2Nlc3NUb2tlbn1gLFxyXG4gICAgICB9LFxyXG4gICAgfSlcclxuICAgICAgLnRoZW4oZnVuY3Rpb24gKHJlc3BvbnNlKSB7XHJcbiAgICAgICAgbGV0IGNvbSA9IHJlc3BvbnNlLmRhdGEuZmlsdGVyKChlKSA9PiBlLmluZGkubmFtZSA9PT0gXCJDb21wb3J0ZW1lbnRcIik7XHJcbiAgICAgICAgbGV0IHZldCA9IHJlc3BvbnNlLmRhdGEuZmlsdGVyKChlKSA9PiBlLmluZGkubmFtZSA9PT0gXCJWw6p0ZW1lbnRzXCIpO1xyXG4gICAgICAgIGxldCBjb3IgPSByZXNwb25zZS5kYXRhLmZpbHRlcigoZSkgPT4gZS5pbmRpLm5hbWUgPT09IFwiQ29ycHNcIik7XHJcblxyXG4gICAgICAgIGxldCBhcnJEYXRlcyA9IFtdO1xyXG4gICAgICAgIHJlc3BvbnNlLmRhdGEuZm9yRWFjaCgoZWxlbWVudCkgPT4ge1xyXG4gICAgICAgICAgbGV0IGRhdGVmb3JtYXRlZCA9IG5ldyBEYXRlKGVsZW1lbnQuZm9yZS5yZXBvcnREYXRlKS50b0xvY2FsZVN0cmluZyhcclxuICAgICAgICAgICAgXCJmci1CRVwiLFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgZGF0ZVN0eWxlOiBcInNob3J0XCIsXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICk7XHJcbiAgICAgICAgICBhcnJEYXRlcy5wdXNoKGRhdGVmb3JtYXRlZCk7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgbGV0IGZpbHRlckRhdGVzID0gYXJyRGF0ZXMuZmlsdGVyKGZ1bmN0aW9uICh2YWx1ZSwgaW5kZXgsIGFycmF5KSB7XHJcbiAgICAgICAgICByZXR1cm4gYXJyYXkuaW5kZXhPZih2YWx1ZSkgPT09IGluZGV4O1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICBzZXRGaWx0ZXJEYXRlcyhmaWx0ZXJEYXRlcyk7XHJcblxyXG4gICAgICAgIGlmIChcclxuICAgICAgICAgIGZpbHRlckRhdGVzICYmXHJcbiAgICAgICAgICBmaWx0ZXJEYXRlcy5sZW5ndGggPiAwICYmXHJcbiAgICAgICAgICBjb20gJiZcclxuICAgICAgICAgIGNvbS5sZW5ndGggPiAwICYmXHJcbiAgICAgICAgICB2ZXQgJiZcclxuICAgICAgICAgIHZldC5sZW5ndGggPiAwICYmXHJcbiAgICAgICAgICBjb3IgJiZcclxuICAgICAgICAgIGNvci5sZW5ndGggPiAwXHJcbiAgICAgICAgKSB7XHJcbiAgICAgICAgICBzZXRPcHRpb25zKHtcclxuICAgICAgICAgICAgcGx1Z2luczoge1xyXG4gICAgICAgICAgICAgIHRpdGxlOiB7XHJcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgdGV4dDogXCJDVkMgw6l2b2x1dGlvblwiLFxyXG4gICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHJlc3BvbnNpdmU6IHRydWUsXHJcbiAgICAgICAgICAgIHNjYWxlczoge1xyXG4gICAgICAgICAgICAgIHg6IHtcclxuICAgICAgICAgICAgICAgIHN0YWNrZWQ6IHRydWUsXHJcbiAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICB5OiB7XHJcbiAgICAgICAgICAgICAgICBzdGFja2VkOiB0cnVlLFxyXG4gICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICBzZXRJbmZvcm1hdGlvbnMoe1xyXG4gICAgICAgICAgICBsYWJlbHM6IFsuLi5maWx0ZXJEYXRlc10sXHJcbiAgICAgICAgICAgIGRhdGFzZXRzOiBbXHJcbiAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgbGFiZWw6IFwiQ29tcG9ydGVtZW50XCIsXHJcbiAgICAgICAgICAgICAgICBkYXRhOiBbLi4uY29tLm1hcCgoZSkgPT4gZS52YWx1ZSldLFxyXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOiBcInJnYigyNTUsIDk5LCAxMzIpXCIsXHJcbiAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBsYWJlbDogXCJWw6p0ZW1lbnRzXCIsXHJcbiAgICAgICAgICAgICAgICBkYXRhOiBbLi4udmV0Lm1hcCgoZSkgPT4gZS52YWx1ZSldLFxyXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOiBcInJnYig3NSwgMTkyLCAxOTIpXCIsXHJcbiAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBsYWJlbDogXCJDb3Jwc1wiLFxyXG4gICAgICAgICAgICAgICAgZGF0YTogWy4uLmNvci5tYXAoKGUpID0+IGUudmFsdWUpXSxcclxuICAgICAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogXCJyZ2IoNTMsIDE2MiwgMjM1KVwiLFxyXG4gICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vIHJldHVybiByZXNwb25zZS5kYXRhO1xyXG4gICAgICB9KVxyXG4gICAgICAuY2F0Y2goZnVuY3Rpb24gKHJlc3BvbnNlKSB7fSk7XHJcbiAgfSwgW2lkUGF0aWVudF0pO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPD5cclxuICAgICAge29wdGlvbnMgJiYgaW5mb3JtYXRpb25zICYmIDxCYXIgb3B0aW9ucz17b3B0aW9uc30gZGF0YT17aW5mb3JtYXRpb25zfSAvPn1cclxuICAgIDwvPlxyXG4gICk7XHJcbn1cclxuIiwiaW1wb3J0IFJlYWN0LCB7IHVzZUNvbnRleHQsIHVzZURlYnVnVmFsdWUsIHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHVzZUF1dGggZnJvbSBcIi4uLy4uL2hvb2tzL3VzZUF1dGhcIjtcclxuaW1wb3J0IHsgdXNlUGFyYW1zIH0gZnJvbSBcInJlYWN0LXJvdXRlci1kb21cIjtcclxuaW1wb3J0IGF4aW9zIGZyb20gXCJheGlvc1wiO1xyXG5pbXBvcnQgQmFzaWMgZnJvbSBcIi4vRHJvcHpvbmVcIjtcclxuXHJcbmNvbnN0IE1lZGlhcyA9ICgpID0+IHtcclxuICBsZXQgaWQgPSB1c2VQYXJhbXMoKS5pZDtcclxuICB2YXIgZm9ybURhdGEgPSBuZXcgRm9ybURhdGEoKTtcclxuICBmb3JtRGF0YS5hcHBlbmQoXCJpZFwiLCBpZC50b1N0cmluZygpKTtcclxuICBjb25zdCBbYXV0aCwgc2V0QXV0aF0gPSB1c2VTdGF0ZSh1c2VBdXRoKCkpO1xyXG4gIGNvbnN0IFtpZFBhdGllbnQsIHNldElkUGF0aWVudF0gPSB1c2VTdGF0ZShpZCk7XHJcbiAgY29uc3QgW2xpc3RNZWRpYXMsIHNldE1lZGlhc10gPSB1c2VTdGF0ZShudWxsKTtcclxuICBjb25zdCBbb3B0aW9ucywgc2V0T3B0aW9uc10gPSB1c2VTdGF0ZSgpO1xyXG4gIGNvbnN0IFtmaWx0ZXJEYXRlcywgc2V0RmlsdGVyRGF0ZXNdID0gdXNlU3RhdGUoKTtcclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgYXhpb3Moe1xyXG4gICAgICBtZXRob2Q6IFwicG9zdFwiLFxyXG4gICAgICB1cmw6IFwiL2FwaS9nZXRBbGxNZWRpYXNCeVBhdGllbnRzXCIsXHJcbiAgICAgIGRhdGE6IGZvcm1EYXRhLFxyXG4gICAgICBoZWFkZXJzOiB7XHJcbiAgICAgICAgXCJDb250ZW50LVR5cGVcIjogXCJhcHBsaWNhdGlvbi9qc29uXCIsXHJcbiAgICAgICAgQXV0aG9yaXphdGlvbjogYEJlYXJlciAke2F1dGguYXV0aC5hY2Nlc3NUb2tlbn1gLFxyXG4gICAgICB9LFxyXG4gICAgfSlcclxuICAgICAgLnRoZW4oZnVuY3Rpb24gKHJlc3BvbnNlKSB7XHJcbiAgICAgICAgc2V0TWVkaWFzKHJlc3BvbnNlKTtcclxuICAgICAgfSlcclxuICAgICAgLmNhdGNoKGZ1bmN0aW9uIChyZXNwb25zZSkge30pO1xyXG4gIH0sIFtpZFBhdGllbnRdKTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDw+XHJcbiAgICAgIDxCYXNpYyAvPlxyXG4gICAgICB7bGlzdE1lZGlhcyAmJiBsaXN0TWVkaWFzLmRhdGEubGVuZ3RoID4gMCAmJiAoXHJcbiAgICAgICAgPD5cclxuICAgICAgICAgIDxoNj5MaXN0ZSBkZSBmaWNoaWVycyBkw6lqw6AgcHLDqXNlbnRzPC9oNj5cclxuICAgICAgICAgIHtsaXN0TWVkaWFzPy5kYXRhPy5tYXAoKG1lZGlhcywgaWQpID0+IChcclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3dcIj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1zbS0zXCI+e21lZGlhcy5vcmlnaW5hbEZpbGVuYW1lfTwvZGl2PlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLXNtLTJcIj57bWVkaWFzLnN1Z2cucGFyZW50U3VnZy52YWx1ZX08L2Rpdj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1zbS0yXCI+e21lZGlhcy5jb21tZW50fTwvZGl2PlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLXNtLTJcIj5cclxuICAgICAgICAgICAgICAgIHtuZXcgRGF0ZShtZWRpYXMuZGF0ZSkudG9Mb2NhbGVTdHJpbmcoXCJmci1CRVwiLCB7XHJcbiAgICAgICAgICAgICAgICAgIGRhdGVTdHlsZTogXCJzaG9ydFwiLFxyXG4gICAgICAgICAgICAgICAgfSl9XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtc20tM1wiPlxyXG4gICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJidG4tbWV0aXMgZGVsZXRlLWJ0blwiPmRlbGV0ZTwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJidG4tbWV0aXNcIj50w6lsw6ljaGFyZ2VyPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgKSl9XHJcbiAgICAgICAgPC8+XHJcbiAgICAgICl9XHJcbiAgICA8Lz5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgTWVkaWFzO1xyXG4iLCJpbXBvcnQgUmVhY3QsIHsgdXNlQ29udGV4dCwgdXNlRGVidWdWYWx1ZSwgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgdXNlQXV0aCBmcm9tIFwiLi4vLi4vaG9va3MvdXNlQXV0aFwiO1xyXG5pbXBvcnQgeyB1c2VQYXJhbXMgfSBmcm9tIFwicmVhY3Qtcm91dGVyLWRvbVwiO1xyXG5pbXBvcnQgYXhpb3MgZnJvbSBcImF4aW9zXCI7XHJcbmltcG9ydCBCYXNpYyBmcm9tIFwiLi9Ecm9wem9uZVwiO1xyXG5cclxuY29uc3QgUGxhY2VzID0gKCkgPT4ge1xyXG4gIGxldCBpZCA9IHVzZVBhcmFtcygpLmlkO1xyXG4gIHZhciBmb3JtRGF0YSA9IG5ldyBGb3JtRGF0YSgpO1xyXG4gIGZvcm1EYXRhLmFwcGVuZChcImlkXCIsIGlkLnRvU3RyaW5nKCkpO1xyXG4gIGNvbnN0IFthdXRoLCBzZXRBdXRoXSA9IHVzZVN0YXRlKHVzZUF1dGgoKSk7XHJcbiAgY29uc3QgW2lkUGF0aWVudCwgc2V0SWRQYXRpZW50XSA9IHVzZVN0YXRlKGlkKTtcclxuICBjb25zdCBbbGlzdFBsYWNlcywgc2V0UGxhY2VzXSA9IHVzZVN0YXRlKG51bGwpO1xyXG4gIGNvbnN0IFtvcHRpb25zLCBzZXRPcHRpb25zXSA9IHVzZVN0YXRlKCk7XHJcbiAgY29uc3QgW2ZpbHRlckRhdGVzLCBzZXRGaWx0ZXJEYXRlc10gPSB1c2VTdGF0ZSgpO1xyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBheGlvcyh7XHJcbiAgICAgIG1ldGhvZDogXCJwb3N0XCIsXHJcbiAgICAgIHVybDogXCIvYXBpL2dldFBsYWNlc1BhdGllbnRzXCIsXHJcbiAgICAgIGRhdGE6IGZvcm1EYXRhLFxyXG4gICAgICBoZWFkZXJzOiB7XHJcbiAgICAgICAgXCJDb250ZW50LVR5cGVcIjogXCJhcHBsaWNhdGlvbi9qc29uXCIsXHJcbiAgICAgICAgQXV0aG9yaXphdGlvbjogYEJlYXJlciAke2F1dGguYXV0aC5hY2Nlc3NUb2tlbn1gLFxyXG4gICAgICB9LFxyXG4gICAgfSlcclxuICAgICAgLnRoZW4oZnVuY3Rpb24gKHJlc3BvbnNlKSB7XHJcbiAgICAgICAgc2V0UGxhY2VzKHJlc3BvbnNlKTtcclxuICAgICAgfSlcclxuICAgICAgLmNhdGNoKGZ1bmN0aW9uIChyZXNwb25zZSkge30pO1xyXG4gIH0sIFtpZFBhdGllbnRdKTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDw+XHJcbiAgICAgIHtsaXN0UGxhY2VzICYmIGxpc3RQbGFjZXMuZGF0YS5sZW5ndGggPiAwICYmIChcclxuICAgICAgICA8PlxyXG4gICAgICAgICAgPGg2PkxpZXV4PC9oNj5cclxuICAgICAgICAgIHtsaXN0UGxhY2VzPy5kYXRhPy5tYXAoKHBsYWNlcywgaWQpID0+IChcclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3dcIj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1zbS0zXCI+XHJcbiAgICAgICAgICAgICAgICB7cGxhY2VzLmNvbnQuZmlyc3RuYW1lfVxyXG4gICAgICAgICAgICAgICAge3BsYWNlcy5jb250Lmxhc3RuYW1lfVxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIHsvKiA8ZGl2IGNsYXNzTmFtZT1cImNvbC1zbS0yXCI+e3BsYWNlcy5sYXN0bmFtZX08L2Rpdj4gKi99XHJcbiAgICAgICAgICAgICAgey8qIDxkaXYgY2xhc3NOYW1lPVwiY29sLXNtLTJcIj57bWVkaWFzLmNvbW1lbnR9PC9kaXY+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtc20tMlwiPlxyXG4gICAgICAgICAgICAgICAge25ldyBEYXRlKG1lZGlhcy5kYXRlKS50b0xvY2FsZVN0cmluZyhcImZyLUJFXCIsIHtcclxuICAgICAgICAgICAgICAgICAgZGF0ZVN0eWxlOiBcInNob3J0XCIsXHJcbiAgICAgICAgICAgICAgICB9KX1cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1zbS0zXCI+XHJcbiAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cImJ0bi1tZXRpcyBkZWxldGUtYnRuXCI+ZGVsZXRlPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cImJ0bi1tZXRpc1wiPnTDqWzDqWNoYXJnZXI8L2J1dHRvbj5cclxuICAgICAgICAgICAgICA8L2Rpdj4gKi99XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgKSl9XHJcbiAgICAgICAgPC8+XHJcbiAgICAgICl9XHJcbiAgICA8Lz5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgUGxhY2VzO1xyXG4iLCJpbXBvcnQgUmVhY3QsIHtcclxuICB1c2VDb250ZXh0LFxyXG4gIHVzZURlYnVnVmFsdWUsXHJcbiAgdXNlUmVmLFxyXG4gIHVzZVN0YXRlLFxyXG4gIHVzZUVmZmVjdCxcclxufSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHVzZUF1dGggZnJvbSBcIi4uLy4uLy9ob29rcy91c2VBdXRoXCI7XHJcbmltcG9ydCBheGlvcyBmcm9tIFwiYXhpb3NcIjtcclxuaW1wb3J0IHsgTGluaywgdXNlTmF2aWdhdGUsIHVzZUxvY2F0aW9uLCB1c2VQYXJhbXMgfSBmcm9tIFwicmVhY3Qtcm91dGVyLWRvbVwiO1xyXG5cclxuY29uc3QgUHJvZmlsZSA9ICgpID0+IHtcclxuICBsZXQgaWQgPSB1c2VQYXJhbXMoKS5pZDtcclxuICBjb25zdCBbYXV0aCwgc2V0QXV0aF0gPSB1c2VTdGF0ZSh1c2VBdXRoKCkpO1xyXG4gIGNvbnN0IFtpZFBhdGllbnQsIHNldElkUGF0aWVudF0gPSB1c2VTdGF0ZShpZCk7XHJcblxyXG4gIHZhciBmb3JtRGF0YSA9IG5ldyBGb3JtRGF0YSgpO1xyXG4gIGZvcm1EYXRhLmFwcGVuZChcImlkXCIsIGlkLnRvU3RyaW5nKCkpO1xyXG5cclxuICBsZXQgb2JqUGF0aWVudCA9IHt9O1xyXG5cclxuICBjb25zdCBbaW5mb3JtYXRpb25QYXRpZW50LCBzZXRJbmZvcm1hdGlvbl0gPSB1c2VTdGF0ZShudWxsKTtcclxuICBjb25zdCBbZ29hbHMsIHNldEdvYWxzXSA9IHVzZVN0YXRlKG51bGwpO1xyXG4gIGNvbnN0IFthY3Rpdml0aWVzLCBzZXRBY3Rpdml0aWVzXSA9IHVzZVN0YXRlKG51bGwpO1xyXG4gIC8vIGdldEZvbGxvd1VwUmVwb3J0c0dvYWxzXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGF4aW9zKHtcclxuICAgICAgbWV0aG9kOiBcInBvc3RcIixcclxuICAgICAgdXJsOiBcIi9hcGkvZ2V0Rm9sbG93VXBSZXBvcnRzQnlJZFwiLFxyXG4gICAgICBkYXRhOiBmb3JtRGF0YSxcclxuICAgICAgaGVhZGVyczoge1xyXG4gICAgICAgIFwiQ29udGVudC1UeXBlXCI6IFwiYXBwbGljYXRpb24vanNvblwiLFxyXG4gICAgICAgIEF1dGhvcml6YXRpb246IGBCZWFyZXIgJHthdXRoLmF1dGguYWNjZXNzVG9rZW59YCxcclxuICAgICAgfSxcclxuICAgIH0pXHJcbiAgICAgIC50aGVuKGZ1bmN0aW9uIChyZXNwb25zZSkge1xyXG4gICAgICAgIHNldEluZm9ybWF0aW9uKHJlc3BvbnNlKTtcclxuICAgICAgfSlcclxuICAgICAgLmNhdGNoKGZ1bmN0aW9uIChyZXNwb25zZSkge30pO1xyXG5cclxuICAgIGF4aW9zKHtcclxuICAgICAgbWV0aG9kOiBcInBvc3RcIixcclxuICAgICAgdXJsOiBcIi9hcGkvZ2V0Rm9sbG93VXBSZXBvcnRzR29hbHNcIixcclxuICAgICAgZGF0YTogZm9ybURhdGEsXHJcbiAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICBcIkNvbnRlbnQtVHlwZVwiOiBcImFwcGxpY2F0aW9uL2pzb25cIixcclxuICAgICAgICBBdXRob3JpemF0aW9uOiBgQmVhcmVyICR7YXV0aC5hdXRoLmFjY2Vzc1Rva2VufWAsXHJcbiAgICAgIH0sXHJcbiAgICB9KVxyXG4gICAgICAudGhlbihmdW5jdGlvbiAocmVzcG9uc2UpIHtcclxuICAgICAgICBzZXRHb2FscyhyZXNwb25zZSk7XHJcbiAgICAgIH0pXHJcbiAgICAgIC5jYXRjaChmdW5jdGlvbiAocmVzcG9uc2UpIHt9KTtcclxuICB9LCBbaWRQYXRpZW50XSk7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lci1vbmdsZXRQcm9maWxlXCI+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93IGl0ZW0tcmVwb3J0XCI+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtc20tM1wiPlxyXG4gICAgICAgICAgPGg2Pk9iamVjdGlmczwvaDY+XHJcbiAgICAgICAgICB7Z29hbHM/LmRhdGEubWFwKChnLCBpZCkgPT4gKFxyXG4gICAgICAgICAgICA8PlxyXG4gICAgICAgICAgICAgIHtnICYmIGcudHlwZSA9PT0gMSAmJiAoXHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIml0ZW0tZ29hbHNcIiBrZXk9e2lkfT5cclxuICAgICAgICAgICAgICAgICAge25ldyBEYXRlKGcuY3JlYXRpb25EYXRlKS50b0xvY2FsZVN0cmluZyhcImZyLUJFXCIsIHtcclxuICAgICAgICAgICAgICAgICAgICBkYXRlU3R5bGU6IFwic2hvcnRcIixcclxuICAgICAgICAgICAgICAgICAgfSl9XHJcbiAgICAgICAgICAgICAgICAgIHtnPy5mdW5jPy52YWx1ZX0ge2c/LmRlc2NyaXB0aW9ufVxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgPC8+XHJcbiAgICAgICAgICApKX1cclxuICAgICAgICAgIDxoNj5BcHBlbHM8L2g2PlxyXG4gICAgICAgICAge2dvYWxzPy5kYXRhLm1hcCgoZywgaWQpID0+IChcclxuICAgICAgICAgICAgPD5cclxuICAgICAgICAgICAgICB7ZyAmJiBnPy50eXBlID09PSAyICYmIChcclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaXRlbS1nb2Fsc1wiIGtleT17aWR9PlxyXG4gICAgICAgICAgICAgICAgICB7bmV3IERhdGUoZy5jcmVhdGlvbkRhdGUpLnRvTG9jYWxlU3RyaW5nKFwiZnItQkVcIiwge1xyXG4gICAgICAgICAgICAgICAgICAgIGRhdGVTdHlsZTogXCJzaG9ydFwiLFxyXG4gICAgICAgICAgICAgICAgICB9KX1cclxuICAgICAgICAgICAgICAgICAge2c/LmZ1bmM/LnZhbHVlfSB7Zz8uZGVzY3JpcHRpb259XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICA8Lz5cclxuICAgICAgICAgICkpfVxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLXNtLTlcIj5cclxuICAgICAgICAgIHtpbmZvcm1hdGlvblBhdGllbnQ/LmRhdGEubWFwKChyLCBpZCkgPT4gKFxyXG4gICAgICAgICAgICA8ZGl2IGtleT17aWR9IGNsYXNzTmFtZT1cInJlcG9ydC1jb250ZW50XCI+XHJcbiAgICAgICAgICAgICAge3IgJiYgci5hY3Rpdml0eVR5cGUgPT09IDIgJiYgPGg2PkFwcGVsIFNvcnRhbnQ8L2g2Pn1cclxuICAgICAgICAgICAgICB7ciAmJiByLmFjdGl2aXR5VHlwZSA9PT0gNCAmJiA8aDY+QXBwZWwgRW50cmFudDwvaDY+fVxyXG4gICAgICAgICAgICAgIHtyICYmIHIuZGVsZXRlZEF0ID09PSBudWxsICYmIChcclxuICAgICAgICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwibXQtNFwiXHJcbiAgICAgICAgICAgICAgICAgIGRhbmdlcm91c2x5U2V0SW5uZXJIVE1MPXt7IF9faHRtbDogci5jb250ZW50IH19XHJcbiAgICAgICAgICAgICAgICA+PC9kaXY+XHJcbiAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICApKX1cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgUHJvZmlsZTtcclxuIiwiaW1wb3J0IFJlYWN0LCB7IHVzZUNvbnRleHQsIHVzZURlYnVnVmFsdWUgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgdXNlTG9jYXRpb24sIE5hdmlnYXRlLCBPdXRsZXQgfSBmcm9tIFwicmVhY3Qtcm91dGVyLWRvbVwiO1xyXG5pbXBvcnQgdXNlQXV0aCBmcm9tIFwiLi4vaG9va3MvdXNlQXV0aFwiO1xyXG5cclxuY29uc3QgUmVxdWlyZUF1dGggPSAoeyBhbGxvd2VkUm9sZXMgfSkgPT4ge1xyXG4gIGNvbnN0IHsgYXV0aCB9ID0gdXNlQXV0aCgpO1xyXG4gIGNvbnN0IGxvY2F0aW9uID0gdXNlTG9jYXRpb24oKTtcclxuXHJcbiAgcmV0dXJuIGF1dGg/LnJvbGVzPy5maW5kKChyb2xlKSA9PiBhbGxvd2VkUm9sZXM/LmluY2x1ZGVzKHJvbGUpKSA/IChcclxuICAgIDxPdXRsZXQgLz5cclxuICApIDogYXV0aD8uYWNjZXNzVG9rZW4gPyAoXHJcbiAgICA8TmF2aWdhdGUgdG89XCIvdW5hdXRob3JpemVkXCIgc3RhdGU9e3sgZnJvbTogbG9jYXRpb24gfX0gcmVwbGFjZSAvPlxyXG4gICkgOiAoXHJcbiAgICA8TmF2aWdhdGUgdG89XCIvY29ubmVjdFwiIHN0YXRlPXt7IGZyb206IGxvY2F0aW9uIH19IHJlcGxhY2UgLz5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgUmVxdWlyZUF1dGg7XHJcbiIsImltcG9ydCBSZWFjdCwgeyB1c2VDb250ZXh0LCB1c2VEZWJ1Z1ZhbHVlLCB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBGb3JtIGZyb20gXCJyZWFjdC1ib290c3RyYXAvRm9ybVwiO1xyXG5pbXBvcnQgTmF2IGZyb20gXCJyZWFjdC1ib290c3RyYXAvTmF2XCI7XHJcbmltcG9ydCBheGlvcyBmcm9tIFwiYXhpb3NcIjtcclxuaW1wb3J0IE5hdmJhciBmcm9tIFwicmVhY3QtYm9vdHN0cmFwL05hdmJhclwiO1xyXG5pbXBvcnQgTmF2RHJvcGRvd24gZnJvbSBcInJlYWN0LWJvb3RzdHJhcC9OYXZEcm9wZG93blwiO1xyXG5pbXBvcnQgT2ZmY2FudmFzIGZyb20gXCJyZWFjdC1ib290c3RyYXAvT2ZmY2FudmFzXCI7XHJcbmltcG9ydCB1c2VBdXRoIGZyb20gXCIuLi9ob29rcy91c2VBdXRoXCI7XHJcbmltcG9ydCB7IHVzZU5hdmlnYXRlLCBMaW5rIH0gZnJvbSBcInJlYWN0LXJvdXRlci1kb21cIjtcclxuXHJcbmNvbnN0IFNlYXJjaCA9ICgpID0+IHtcclxuICBsZXQgW3ZhbHVlU2VhcmNoLCBzZXRTZWFyY2hdID0gdXNlU3RhdGUobnVsbCk7XHJcbiAgY29uc3QgW2F1dGgsIHNldEF1dGhdID0gdXNlU3RhdGUodXNlQXV0aCgpKTtcclxuICBsZXQgW3Jlc3VsdFNlYXJjaCwgc2V0UmVzdWx0U2VhcmNoXSA9IHVzZVN0YXRlKG51bGwpO1xyXG4gIGxldCBbaXNPcGVuLCBzZXRPcGVuUmVzdWx0XSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuXHJcbiAgY29uc3Qgc2V0VmFsdWUgPSAoZSkgPT4ge1xyXG4gICAgLy8gZS5kZWZhdWx0UHJldmVudGVkKCk7XHJcbiAgICAvLyBjb25zb2xlLmxvZyhlKTtcclxuICAgIHNldFNlYXJjaChlLnRhcmdldC52YWx1ZSk7XHJcbiAgICAvLyBwb3N0cy5maWx0ZXIoKGUpID0+IGUubmFtZSA9PT0gdmFsdWVTZWFyY2gpO1xyXG4gICAgLy8gY29uc29sZS5sb2codmFsdWVTZWFyY2gpO1xyXG4gICAgaWYgKHZhbHVlU2VhcmNoICYmIHZhbHVlU2VhcmNoPy5sZW5ndGggPiAxKSB7XHJcbiAgICAgIHNldE9wZW5SZXN1bHQodHJ1ZSk7XHJcbiAgICAgIGF4aW9zKHtcclxuICAgICAgICBtZXRob2Q6IFwicG9zdFwiLFxyXG4gICAgICAgIHVybDogXCIvYXBpL2dldFNlYXJjaFwiLFxyXG4gICAgICAgIHBhcmFtczogeyB2YWw6IHZhbHVlU2VhcmNoLnRvU3RyaW5nKCkgfSxcclxuICAgICAgICBoZWFkZXJzOiB7XHJcbiAgICAgICAgICBcIkNvbnRlbnQtVHlwZVwiOiBcImFwcGxpY2F0aW9uL2pzb25cIixcclxuICAgICAgICAgIEF1dGhvcml6YXRpb246IGBCZWFyZXIgJHthdXRoLmF1dGguYWNjZXNzVG9rZW59YCxcclxuICAgICAgICB9LFxyXG4gICAgICB9KVxyXG4gICAgICAgIC50aGVuKGZ1bmN0aW9uIChyZXNwb25zZSkge1xyXG4gICAgICAgICAgLy9oYW5kbGUgc3VjY2Vzc1xyXG4gICAgICAgICAgLy8gc2V0UGF0aWVudHNMaXN0KHJlc3BvbnNlKTtcclxuICAgICAgICAgIHNldFJlc3VsdFNlYXJjaChyZXNwb25zZS5kYXRhKTtcclxuICAgICAgICAgIC8vIGNvbnNvbGUubG9nKHJlc3VsdFNlYXJjaCk7XHJcbiAgICAgICAgICBzZXRTZWFyY2goZS50YXJnZXQudmFsdWUpO1xyXG4gICAgICAgIH0pXHJcbiAgICAgICAgLmNhdGNoKGZ1bmN0aW9uIChyZXNwb25zZSkge1xyXG4gICAgICAgICAgLy8gY29uc29sZS5sb2cocmVzcG9uc2UpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgc2V0T3BlblJlc3VsdChmYWxzZSk7XHJcbiAgICB9XHJcbiAgfTtcclxuXHJcbiAgY29uc3Qgb25DbGlja0lmVmFsdWUgPSAoZSkgPT4ge1xyXG4gICAgaWYgKHJlc3VsdFNlYXJjaD8ubGVuZ3RoID4gMCkge1xyXG4gICAgICBzZXRPcGVuUmVzdWx0KHRydWUpO1xyXG4gICAgfVxyXG4gIH07XHJcbiAgLy8gY29uc3Qgb25CbHVyc2V0VmFsdWUgPSAoZSkgPT4ge1xyXG4gIC8vICAgY29uc3QgY3VycmVudFRhcmdldCA9IGUuY3VycmVudFRhcmdldDtcclxuXHJcbiAgLy8gICAvLyBDaGVjayB0aGUgbmV3bHkgZm9jdXNlZCBlbGVtZW50IGluIHRoZSBuZXh0IHRpY2sgb2YgdGhlIGV2ZW50IGxvb3BcclxuICAvLyAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gIC8vICAgICAvLyBDaGVjayBpZiB0aGUgbmV3IGFjdGl2ZUVsZW1lbnQgaXMgYSBjaGlsZCBvZiB0aGUgb3JpZ2luYWwgY29udGFpbmVyXHJcbiAgLy8gICAgIGlmICghY3VycmVudFRhcmdldC5jb250YWlucyhkb2N1bWVudC5hY3RpdmVFbGVtZW50KSkge1xyXG4gIC8vICAgICAgIC8vIFlvdSBjYW4gaW52b2tlIGEgY2FsbGJhY2sgb3IgYWRkIGN1c3RvbSBsb2dpYyBoZXJlXHJcbiAgLy8gICAgICAgc2V0T3BlblJlc3VsdChmYWxzZSk7XHJcbiAgLy8gICAgIH1cclxuICAvLyAgIH0sIDApO1xyXG4gIC8vIH07XHJcblxyXG4gIGNvbnN0IHJlZGlyZWN0aW9uVG9QYXRpZW50ID0gKGlkKSA9PiB7XHJcbiAgICBpZiAoaWQpIHtcclxuICAgICAgcmV0dXJuICh3aW5kb3cubG9jYXRpb24uaHJlZiA9IFwiL1wiICsgaWQpO1xyXG4gICAgfVxyXG4gIH07XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8Rm9ybSBjbGFzc05hbWU9XCJkLWZsZXhcIj5cclxuICAgICAgPEZvcm0uQ29udHJvbFxyXG4gICAgICAgIHR5cGU9XCJzZWFyY2hcIlxyXG4gICAgICAgIHBsYWNlaG9sZGVyPVwiU2VhcmNoXCJcclxuICAgICAgICBjbGFzc05hbWU9XCJtZS0yXCJcclxuICAgICAgICAvLyBvbkJsdXI9e29uQmx1cnNldFZhbHVlfVxyXG4gICAgICAgIG9uQ2xpY2s9eyhlKSA9PiBvbkNsaWNrSWZWYWx1ZSgpfVxyXG4gICAgICAgIGFyaWEtbGFiZWw9XCJTZWFyY2hcIlxyXG4gICAgICAgIG9uQ2hhbmdlPXtzZXRWYWx1ZX1cclxuICAgICAgLz5cclxuICAgICAge2lzT3Blbn1cclxuICAgICAge3Jlc3VsdFNlYXJjaCAmJiBpc09wZW4gJiYgKFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicmVzdWx0LXNlYXJjaFwiPlxyXG4gICAgICAgICAgPHVsPlxyXG4gICAgICAgICAgICB7cmVzdWx0U2VhcmNoPy5tYXAoKHJlc3VsdCkgPT4gKFxyXG4gICAgICAgICAgICAgIDxsaVxyXG4gICAgICAgICAgICAgICAga2V5PXtyZXN1bHQuaWR9XHJcbiAgICAgICAgICAgICAgICBvbkNsaWNrPXsoZSkgPT4gcmVkaXJlY3Rpb25Ub1BhdGllbnQocmVzdWx0LmlkKX1cclxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImxpbmstdG9QYXRpZW50XCJcclxuICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgICB7cmVzdWx0Lmxhc3RuYW1lfSB7cmVzdWx0LmZpcnN0bmFtZX0ge3Jlc3VsdD8ubmlja25hbWVzfVxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgICA8L3VsPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICApfVxyXG4gICAgPC9Gb3JtPlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBTZWFyY2g7XHJcbiIsImltcG9ydCBSZWFjdCwgeyB1c2VDb250ZXh0LCB1c2VEZWJ1Z1ZhbHVlIH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IHVzZU5hdmlnYXRlIH0gZnJvbSBcInJlYWN0LXJvdXRlci1kb21cIjtcclxuXHJcbmNvbnN0IFVuYXV0aG9yaXplZCA9ICgpID0+IHtcclxuICBjb25zdCBuYXZpZ2F0ZSA9IHVzZU5hdmlnYXRlKCk7XHJcblxyXG4gIGNvbnN0IGdvQmFjayA9ICgpID0+IG5hdmlnYXRlKC0xKTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxzZWN0aW9uPlxyXG4gICAgICA8aDE+VW5hdXRob3JpemVkPC9oMT5cclxuICAgICAgPGJyIC8+XHJcbiAgICAgIDxwPllvdSBkbyBub3QgaGF2ZSBhY2Nlc3MgdG8gdGhlIHJlcXVlc3RlZCBwYWdlLjwvcD5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4R3Jvd1wiPlxyXG4gICAgICAgIDxidXR0b24gb25DbGljaz17Z29CYWNrfT5HbyBCYWNrPC9idXR0b24+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9zZWN0aW9uPlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBVbmF1dGhvcml6ZWQ7XHJcbiIsIi8vIC4vYXNzZXRzL2pzL2NvbXBvbmVudHMvSG9tZS5qc1xyXG4gICAgXHJcbmltcG9ydCBSZWFjdCwge0NvbXBvbmVudH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQge1JvdXRlcywgUm91dGUsIFN3aXRjaCxOYXZpZ2F0ZSwgTGluaywgd2l0aFJvdXRlcn0gZnJvbSAncmVhY3Qtcm91dGVyLWRvbSc7XHJcblxyXG5pbXBvcnQgUG9zdHMgZnJvbSAnLi9Qb3N0cyc7XHJcblxyXG5jbGFzcyBVc2VycyBleHRlbmRzIENvbXBvbmVudCB7XHJcbiAgICBcclxuICAgIHJlbmRlcigpIHtcclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgVXNlcnNcclxuICAgICAgICAgICAgICBcclxuICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICApXHJcbiAgICB9XHJcbn1cclxuICAgIFxyXG5leHBvcnQgZGVmYXVsdCBVc2VycztcclxuIiwiaW1wb3J0IFJlYWN0LCB7IHVzZUNvbnRleHQsIHVzZURlYnVnVmFsdWUgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgdXNlTmF2aWdhdGUsIExpbmsgfSBmcm9tIFwicmVhY3Qtcm91dGVyLWRvbVwiO1xyXG5pbXBvcnQgdXNlTG9nb3V0IGZyb20gXCIuLi9ob29rcy91c2VMb2dvdXRcIjtcclxuaW1wb3J0IEJ1dHRvbiBmcm9tIFwicmVhY3QtYm9vdHN0cmFwL0J1dHRvblwiO1xyXG5pbXBvcnQgQ29udGFpbmVyIGZyb20gXCJyZWFjdC1ib290c3RyYXAvQ29udGFpbmVyXCI7XHJcbmltcG9ydCB7IEZvbnRBd2Vzb21lSWNvbiB9IGZyb20gXCJAZm9ydGF3ZXNvbWUvcmVhY3QtZm9udGF3ZXNvbWVcIjtcclxuaW1wb3J0IHsgZmFBcnJvd1JpZ2h0IH0gZnJvbSBcIkBmb3J0YXdlc29tZS9mcmVlLXNvbGlkLXN2Zy1pY29uc1wiO1xyXG5pbXBvcnQgRm9ybSBmcm9tIFwicmVhY3QtYm9vdHN0cmFwL0Zvcm1cIjtcclxuaW1wb3J0IE5hdiBmcm9tIFwicmVhY3QtYm9vdHN0cmFwL05hdlwiO1xyXG5pbXBvcnQgTmF2YmFyIGZyb20gXCJyZWFjdC1ib290c3RyYXAvTmF2YmFyXCI7XHJcbmltcG9ydCBOYXZEcm9wZG93biBmcm9tIFwicmVhY3QtYm9vdHN0cmFwL05hdkRyb3Bkb3duXCI7XHJcbmltcG9ydCBNZW51IGZyb20gXCIuL01lbnVcIjtcclxuaW1wb3J0IEZvcm1fTWVldFJhcHBvcnRzIGZyb20gXCIuL0Zvcm1fTWVldFJhcHBvcnRzXCI7XHJcbmltcG9ydCB7IFJvdXRlcywgUm91dGUgfSBmcm9tIFwicmVhY3Qtcm91dGVyLWRvbVwiO1xyXG5cclxuY29uc3QgUmVwcG9ydENhbGxzID0gKCkgPT4ge1xyXG4gIGNvbnN0IG5hdmlnYXRlID0gdXNlTmF2aWdhdGUoKTtcclxuICBjb25zdCBsb2dvdXQgPSB1c2VMb2dvdXQoKTtcclxuXHJcbiAgY29uc3Qgc2lnbk91dCA9IGFzeW5jICgpID0+IHtcclxuICAgIGF3YWl0IGxvZ291dCgpO1xyXG4gICAgbmF2aWdhdGUoXCIvY29ubmVjdFwiKTtcclxuICB9O1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPD5cclxuICAgICAgPHA+UmVwcG9ydHMgQ2FsbHM8L3A+XHJcbiAgICA8Lz5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgUmVwcG9ydENhbGxzO1xyXG4iLCJpbXBvcnQgUmVhY3QsIHsgdXNlQ29udGV4dCwgdXNlRGVidWdWYWx1ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyB1c2VOYXZpZ2F0ZSwgTGluayB9IGZyb20gXCJyZWFjdC1yb3V0ZXItZG9tXCI7XHJcbmltcG9ydCB1c2VMb2dvdXQgZnJvbSBcIi4uL2hvb2tzL3VzZUxvZ291dFwiO1xyXG5pbXBvcnQgQnV0dG9uIGZyb20gXCJyZWFjdC1ib290c3RyYXAvQnV0dG9uXCI7XHJcbmltcG9ydCBDb250YWluZXIgZnJvbSBcInJlYWN0LWJvb3RzdHJhcC9Db250YWluZXJcIjtcclxuaW1wb3J0IHsgRm9udEF3ZXNvbWVJY29uIH0gZnJvbSBcIkBmb3J0YXdlc29tZS9yZWFjdC1mb250YXdlc29tZVwiO1xyXG5pbXBvcnQgeyBmYUFycm93UmlnaHQgfSBmcm9tIFwiQGZvcnRhd2Vzb21lL2ZyZWUtc29saWQtc3ZnLWljb25zXCI7XHJcbmltcG9ydCBGb3JtIGZyb20gXCJyZWFjdC1ib290c3RyYXAvRm9ybVwiO1xyXG5pbXBvcnQgTmF2IGZyb20gXCJyZWFjdC1ib290c3RyYXAvTmF2XCI7XHJcbmltcG9ydCBOYXZiYXIgZnJvbSBcInJlYWN0LWJvb3RzdHJhcC9OYXZiYXJcIjtcclxuaW1wb3J0IE5hdkRyb3Bkb3duIGZyb20gXCJyZWFjdC1ib290c3RyYXAvTmF2RHJvcGRvd25cIjtcclxuaW1wb3J0IE1lbnUgZnJvbSBcIi4vTWVudVwiO1xyXG5pbXBvcnQgRm9ybV9NZWV0UmFwcG9ydHMgZnJvbSBcIi4vRm9ybV9NZWV0UmFwcG9ydHNcIjtcclxuaW1wb3J0IHsgUm91dGVzLCBSb3V0ZSB9IGZyb20gXCJyZWFjdC1yb3V0ZXItZG9tXCI7XHJcblxyXG5jb25zdCBSZXBwb3J0R29hbHMgPSAoKSA9PiB7XHJcbiAgY29uc3QgbmF2aWdhdGUgPSB1c2VOYXZpZ2F0ZSgpO1xyXG4gIGNvbnN0IGxvZ291dCA9IHVzZUxvZ291dCgpO1xyXG5cclxuICBjb25zdCBzaWduT3V0ID0gYXN5bmMgKCkgPT4ge1xyXG4gICAgYXdhaXQgbG9nb3V0KCk7XHJcbiAgICBuYXZpZ2F0ZShcIi9jb25uZWN0XCIpO1xyXG4gIH07XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8PlxyXG4gICAgICA8cD5SZXBwb3J0cyBHb2FsczwvcD5cclxuICAgIDwvPlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBSZXBwb3J0R29hbHM7XHJcbiIsImltcG9ydCBSZWFjdCwgeyBjcmVhdGVDb250ZXh0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5cclxuY29uc3QgQXV0aENvbnRleHQgPSBjcmVhdGVDb250ZXh0KHt9KTtcclxuXHJcbmV4cG9ydCBjb25zdCBBdXRoUHJvdmlkZXIgPSAoeyBjaGlsZHJlbiB9KSA9PiB7XHJcbiAgY29uc3QgW2F1dGgsIHNldEF1dGhdID0gdXNlU3RhdGUoe30pO1xyXG4gIGNvbnN0IFtwZXJzaXN0LCBzZXRQZXJzaXN0XSA9IHVzZVN0YXRlKFxyXG4gICAgSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcInBlcnNpc3RcIikpIHx8IGZhbHNlXHJcbiAgKTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxBdXRoQ29udGV4dC5Qcm92aWRlciB2YWx1ZT17eyBhdXRoLCBzZXRBdXRoLCBwZXJzaXN0LCBzZXRQZXJzaXN0IH19PlxyXG4gICAgICB7Y2hpbGRyZW59XHJcbiAgICA8L0F1dGhDb250ZXh0LlByb3ZpZGVyPlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBBdXRoQ29udGV4dDtcclxuIiwiaW1wb3J0IHsgdXNlQ29udGV4dCwgdXNlRGVidWdWYWx1ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgQXV0aENvbnRleHQgZnJvbSBcIi4uL2NvbnRleHQvQXV0aFByb3ZpZGVyXCI7XHJcblxyXG5jb25zdCB1c2VBdXRoID0gKCkgPT4ge1xyXG4gIGNvbnN0IHsgYXV0aCB9ID0gdXNlQ29udGV4dChBdXRoQ29udGV4dCk7XHJcbiAgdXNlRGVidWdWYWx1ZShhdXRoLCAoYXV0aCkgPT4gKGF1dGg/LnVzZXIgPyBcIkxvZ2dlZCBJblwiIDogXCJMb2dnZWQgT3V0XCIpKTtcclxuICByZXR1cm4gdXNlQ29udGV4dChBdXRoQ29udGV4dCk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCB1c2VBdXRoO1xyXG4iLCJpbXBvcnQgYXhpb3MgZnJvbSBcImF4aW9zXCI7XHJcbmltcG9ydCB1c2VBdXRoIGZyb20gXCIuL3VzZUF1dGhcIjtcclxuXHJcbmNvbnN0IHVzZUxvZ291dCA9ICgpID0+IHtcclxuICBjb25zdCB7IHNldEF1dGggfSA9IHVzZUF1dGgoKTtcclxuXHJcbiAgY29uc3QgbG9nb3V0ID0gYXN5bmMgKCkgPT4ge1xyXG4gICAgc2V0QXV0aCh7fSk7XHJcbiAgICB0cnkge1xyXG4gICAgICBhd2FpdCBheGlvcyhcIi9hcGkvdG9rZW4vaW52YWxpZGF0ZVwiLCB7XHJcbiAgICAgICAgd2l0aENyZWRlbnRpYWxzOiB0cnVlLFxyXG4gICAgICB9KTtcclxuICAgIH0gY2F0Y2ggKGVycikge1xyXG4gICAgICBjb25zb2xlLmVycm9yKGVycik7XHJcbiAgICB9XHJcbiAgfTtcclxuXHJcbiAgcmV0dXJuIGxvZ291dDtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IHVzZUxvZ291dDtcclxuIiwiaW1wb3J0IGF4aW9zIGZyb20gXCJheGlvc1wiO1xyXG5pbXBvcnQgdXNlQXV0aCBmcm9tIFwiLi91c2VBdXRoXCI7XHJcblxyXG5jb25zdCB1c2VSZWZyZXNoVG9rZW4gPSAoKSA9PiB7XHJcbiAgY29uc3QgeyBzZXRBdXRoIH0gPSB1c2VBdXRoKCk7XHJcblxyXG4gIGNvbnN0IHJlZnJlc2ggPSBhc3luYyAoKSA9PiB7XHJcbiAgICBjb25zdCB0b2tlbiA9IGF3YWl0IGF4aW9zLmdldChcIi9hcGkvdG9rZW4vcmVmcmVzaFwiLCB7XHJcbiAgICAgIHdpdGhDcmVkZW50aWFsczogdHJ1ZSxcclxuICAgIH0pO1xyXG5cclxuICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgYXhpb3MuZ2V0KFwiL2FwaS9nZXRVc2VyXCIsIHtcclxuICAgICAgaGVhZGVyczogeyBBdXRob3JpemF0aW9uOiBgQmVhcmVyICR7dG9rZW4uZGF0YS50b2tlbn1gIH0sXHJcbiAgICB9KTtcclxuXHJcbiAgICBzZXRBdXRoKChwcmV2KSA9PiB7XHJcbiAgICAgIHJldHVybiB7XHJcbiAgICAgICAgLi4ucHJldixcclxuICAgICAgICByb2xlczogcmVzcG9uc2UuZGF0YS5yb2xlTmFtZXMsXHJcbiAgICAgICAgYWNjZXNzVG9rZW46IHJlc3BvbnNlLmRhdGEuY3JlZGVudGlhbHMsXHJcbiAgICAgIH07XHJcbiAgICB9KTtcclxuICAgIHJldHVybiByZXNwb25zZS5kYXRhLmFjY2Vzc1Rva2VuO1xyXG4gIH07XHJcbiAgcmV0dXJuIHJlZnJlc2g7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCB1c2VSZWZyZXNoVG9rZW47XHJcbiIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IFJlYWN0RE9NIGZyb20gXCJyZWFjdC1kb21cIjtcclxuLy8gaW1wb3J0IFwiLi9pbmRleC5jc3NcIjtcclxuaW1wb3J0IEFwcCBmcm9tIFwiLi9hcHBcIjtcclxuaW1wb3J0IHsgQXV0aFByb3ZpZGVyIH0gZnJvbSBcIi4vY29udGV4dC9BdXRoUHJvdmlkZXJcIjtcclxuaW1wb3J0IHsgQnJvd3NlclJvdXRlciwgUm91dGVzLCBSb3V0ZSB9IGZyb20gXCJyZWFjdC1yb3V0ZXItZG9tXCI7XHJcblxyXG5SZWFjdERPTS5yZW5kZXIoXHJcbiAgPFJlYWN0LlN0cmljdE1vZGU+XHJcbiAgICA8QnJvd3NlclJvdXRlcj5cclxuICAgICAgPEF1dGhQcm92aWRlcj5cclxuICAgICAgICA8Um91dGVzPlxyXG4gICAgICAgICAgPFJvdXRlIHBhdGg9XCIvKlwiIGVsZW1lbnQ9ezxBcHAgLz59IC8+XHJcbiAgICAgICAgPC9Sb3V0ZXM+XHJcbiAgICAgIDwvQXV0aFByb3ZpZGVyPlxyXG4gICAgPC9Ccm93c2VyUm91dGVyPlxyXG4gIDwvUmVhY3QuU3RyaWN0TW9kZT4sXHJcbiAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJyb290XCIpXHJcbik7XHJcbiIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZUNvbnRleHQiLCJ1c2VEZWJ1Z1ZhbHVlIiwiTG9naW4iLCJIb21lIiwiTGF5b3V0IiwiRWRpdG9yIiwiQWRtaW4iLCJNaXNzaW5nIiwiVW5hdXRob3JpemVkIiwiTG91bmdlIiwiTGlua1BhZ2UiLCJSZXF1aXJlQXV0aCIsIlBlcnNpc3RMb2dpbiIsIlJvdXRlcyIsIlJvdXRlIiwiUGF0aWVudHMiLCJSZXBwb3J0Q2FsbHMiLCJSZXBwb3J0R29hbHMiLCJQYXRpZW50IiwiUk9MRVMiLCJVc2VyIiwiQXBwIiwiTGluayIsIlVzZXJzIiwidXNlTmF2aWdhdGUiLCJ1c2VMb2dvdXQiLCJCdXR0b24iLCJDb250YWluZXIiLCJGb3JtIiwiTmF2IiwiTmF2YmFyIiwiTmF2RHJvcGRvd24iLCJGb3JtX01lZXRSYXBwb3J0cyIsIm5hdmlnYXRlIiwibG9nb3V0Iiwic2lnbk91dCIsInVzZVN0YXRlIiwidXNlRWZmZWN0IiwiRm9udEF3ZXNvbWVJY29uIiwiZmFBcnJvd1JpZ2h0IiwiTWVudSIsInJlcG9ydE1lZXQiLCJzZXRSZXBvcnRNZWV0IiwicmVwb3J0Q2FsbHMiLCJzZXRSZXBvcnRDYWxscyIsInJlcG9ydEdvYWxzIiwic2V0UmVwb3J0R29hbHMiLCJwYXRoIiwidXJsIiwiZ29Ub1JlcHBvcnQiLCJoaXN0b3J5IiwicHVzaCIsIm9uQ2xpY2tSZXBwb3J0TWVldCIsIm9uQ2xpY2tSZXBwb3J0Q2FsbHMiLCJvbkNsaWNrUmVwcG9ydEdvYWxzIiwiT3V0bGV0IiwidXNlUmVmIiwidXNlQXV0aCIsInVzZUxvY2F0aW9uIiwiYXhpb3MiLCJMT0dJTl9VUkwiLCJzZXRBdXRoIiwicGVyc2lzdCIsInNldFBlcnNpc3QiLCJsb2NhdGlvbiIsImZyb20iLCJzdGF0ZSIsInBhdGhuYW1lIiwidXNlclJlZiIsImVyclJlZiIsImVtYWlsIiwic2V0VXNlciIsInBhc3N3b3JkIiwic2V0UHdkIiwiZXJyTXNnIiwic2V0RXJyTXNnIiwiY3VycmVudCIsImZvY3VzIiwiaGFuZGxlU3VibWl0IiwiZSIsInByZXZlbnREZWZhdWx0IiwicG9zdCIsIkpTT04iLCJzdHJpbmdpZnkiLCJoZWFkZXJzIiwicmVzcG9uc2UiLCJhY2Nlc3NUb2tlbiIsImRhdGEiLCJ0b2tlbiIsImdldCIsIndpdGhDcmVkZW50aWFscyIsIkF1dGhvcml6YXRpb24iLCJyb2xlc191c2VkIiwicm9sZXMiLCJyb2xlTmFtZXMiLCJsZW5ndGgiLCJyZXBsYWNlIiwic3RhdHVzIiwidG9nZ2xlUGVyc2lzdCIsInByZXYiLCJsb2NhbFN0b3JhZ2UiLCJzZXRJdGVtIiwidGFyZ2V0IiwidmFsdWUiLCJmYVNpZ25PdXQiLCJPZmZjYW52YXMiLCJTZWFyY2giLCJiYWNrZ3JvdW5kQ29sb3IiLCJwYWRkaW5nIiwibG9nb1BhdGgiLCJ1c2VQYXJhbXMiLCJUYWIiLCJUYWJzIiwiRmljaGUiLCJJbmRpY2F0b3JzIiwiUHJvZmlsZSIsIk1lZGlhcyIsIkNvbnRhY3RzIiwiUGxhY2VzIiwiaWQiLCJiYWNrZ3JvdW5kSW1hZ2UiLCJhdXRoIiwicGF0aWVudCIsInNldFBhdGllbnQiLCJpbWdQYXRpZW50Iiwic2V0SW1nUGF0aWVudCIsImtleSIsInNldEtleSIsImlkUGF0aWVudCIsInNldElkUGF0aWVudCIsImxvY2F0aW9uV2ViIiwic2V0TG9jYXRpb24iLCJmb3JtRGF0YSIsIkZvcm1EYXRhIiwiYXBwZW5kIiwidG9TdHJpbmciLCJvYmpQYXRpZW50IiwibWV0aG9kIiwidGhlbiIsImltYWdlIiwiT2JqZWN0Iiwia2V5cyIsImZpcnN0bmFtZSIsImxhc3RuYW1lIiwiRGF0ZSIsImJpcnRoZGF0ZSIsInRvTG9jYWxlRGF0ZVN0cmluZyIsImZpcnN0Q29udGFjdERhdGUiLCJrIiwiVGFibGUiLCJmYVVzZXIiLCJBY2NvcmRpb24iLCJwYXRpZW50c0xpc3QiLCJzZXRQYXRpZW50c0xpc3QiLCJsZW5ndGhMaXN0Iiwic2V0TGVuZ3RoTGlzdCIsInJlYWRNb3JlIiwibWFwIiwiYmlydGhMb2NhdGlvbiIsInVzZVJlZnJlc2hUb2tlbiIsImlzTG9hZGluZyIsInNldElzTG9hZGluZyIsInJlZnJlc2giLCJpc01vdW50ZWQiLCJ2ZXJpZnlSZWZyZXNoVG9rZW4iLCJjb25zb2xlIiwiZXJyb3IiLCJDb21wb25lbnQiLCJQb3N0cyIsInBvc3RzIiwibG9hZGluZyIsImdldFBvc3RzIiwicmVzIiwibmFtZSIsImRlc2NyaXB0aW9uIiwibGlzdENvbnRhY3RzIiwic2V0Q29udGFjdHMiLCJvcHRpb25zIiwic2V0T3B0aW9ucyIsImZpbHRlckRhdGVzIiwic2V0RmlsdGVyRGF0ZXMiLCJpdGVtIiwiY29udCIsIm9ycGEiLCJ1c2VEcm9wem9uZSIsIkJhc2ljIiwicHJvcHMiLCJhY2NlcHRlZEZpbGVzIiwiZ2V0Um9vdFByb3BzIiwiZ2V0SW5wdXRQcm9wcyIsImZpbGVzIiwiZmlsZSIsInNpemUiLCJjbGFzc05hbWUiLCJmYVBsdXNDaXJjbGUiLCJmYUNhbmNlbCIsImZhRWRpdCIsIk1vZGFsSXRlbUZpY2hlIiwiQmxvY2tJbmZvcyIsImluZm9ybWF0aW9uUGF0aWVudCIsInNldEluZm9ybWF0aW9uIiwiaW5mb3JtYXRpb25UZW1wbGF0ZUJsb2NrIiwic2V0SW5mb3JtYXRpb25UZW1wbGF0ZUJsb2NrIiwibG9nIiwiaW5mb3MiLCJzdWdlIiwicGF0aFN0cmluZyIsImxpbmsiLCJwYXRpZW50SW5mb3JtYXRpb24iLCJwaSIsInN1Z2ciLCJNb2RhbCIsInNob3ciLCJzZXRTaG93Iiwic2V0SW5mb3MiLCJlbGVtZW50c09wdCIsInNldEVsZW1lbnRzT3B0IiwiaGFuZGxlQ2xvc2UiLCJoYW5kbGVTaG93Iiwic3VnZ2VzdGlvbnNCeUJsb2NrIiwiZWwiLCJDaGFydCIsIkNoYXJ0SlMiLCJDYXRlZ29yeVNjYWxlIiwiTGluZWFyU2NhbGUiLCJCYXJFbGVtZW50IiwiVGl0bGUiLCJUb29sdGlwIiwiTGVnZW5kIiwiQmFyIiwicmVnaXN0ZXIiLCJpbmZvcm1hdGlvbnMiLCJzZXRJbmZvcm1hdGlvbnMiLCJjb20iLCJmaWx0ZXIiLCJpbmRpIiwidmV0IiwiY29yIiwiYXJyRGF0ZXMiLCJmb3JFYWNoIiwiZWxlbWVudCIsImRhdGVmb3JtYXRlZCIsImZvcmUiLCJyZXBvcnREYXRlIiwidG9Mb2NhbGVTdHJpbmciLCJkYXRlU3R5bGUiLCJpbmRleCIsImFycmF5IiwiaW5kZXhPZiIsInBsdWdpbnMiLCJ0aXRsZSIsImRpc3BsYXkiLCJ0ZXh0IiwicmVzcG9uc2l2ZSIsInNjYWxlcyIsIngiLCJzdGFja2VkIiwieSIsImxhYmVscyIsImRhdGFzZXRzIiwibGFiZWwiLCJsaXN0TWVkaWFzIiwic2V0TWVkaWFzIiwibWVkaWFzIiwib3JpZ2luYWxGaWxlbmFtZSIsInBhcmVudFN1Z2ciLCJjb21tZW50IiwiZGF0ZSIsImxpc3RQbGFjZXMiLCJzZXRQbGFjZXMiLCJwbGFjZXMiLCJnb2FscyIsInNldEdvYWxzIiwiYWN0aXZpdGllcyIsInNldEFjdGl2aXRpZXMiLCJnIiwidHlwZSIsImNyZWF0aW9uRGF0ZSIsImZ1bmMiLCJyIiwiYWN0aXZpdHlUeXBlIiwiZGVsZXRlZEF0IiwiX19odG1sIiwiY29udGVudCIsIk5hdmlnYXRlIiwiYWxsb3dlZFJvbGVzIiwiZmluZCIsInJvbGUiLCJpbmNsdWRlcyIsInZhbHVlU2VhcmNoIiwic2V0U2VhcmNoIiwicmVzdWx0U2VhcmNoIiwic2V0UmVzdWx0U2VhcmNoIiwiaXNPcGVuIiwic2V0T3BlblJlc3VsdCIsInNldFZhbHVlIiwicGFyYW1zIiwidmFsIiwib25DbGlja0lmVmFsdWUiLCJyZWRpcmVjdGlvblRvUGF0aWVudCIsIndpbmRvdyIsImhyZWYiLCJyZXN1bHQiLCJuaWNrbmFtZXMiLCJnb0JhY2siLCJTd2l0Y2giLCJ3aXRoUm91dGVyIiwiY3JlYXRlQ29udGV4dCIsIkF1dGhDb250ZXh0IiwiQXV0aFByb3ZpZGVyIiwiY2hpbGRyZW4iLCJwYXJzZSIsImdldEl0ZW0iLCJ1c2VyIiwiY3JlZGVudGlhbHMiLCJSZWFjdERPTSIsIkJyb3dzZXJSb3V0ZXIiLCJyZW5kZXIiLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIl0sInNvdXJjZVJvb3QiOiIifQ==