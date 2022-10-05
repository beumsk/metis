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

  console.log(path);

  var goToRepport = function goToRepport() {
    history.push("/goals");
    console.log("test");
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
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router/dist/index.js");
/* harmony import */ var _Users__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./Users */ "./assets/component/Users.js");
/* harmony import */ var _Menu__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./Menu */ "./assets/component/Menu.js");
/* harmony import */ var _images_5a94e34b4c36e28de4e704f8c2d1c39a79e91b5d_png__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../images/5a94e34b4c36e28de4e704f8c2d1c39a79e91b5d.png */ "./assets/images/5a94e34b4c36e28de4e704f8c2d1c39a79e91b5d.png");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_19___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_19__);
/* harmony import */ var _hooks_useAuth__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ../hooks/useAuth */ "./assets/hooks/useAuth.js");
/* harmony import */ var react_bootstrap_Tab__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! react-bootstrap/Tab */ "./node_modules/react-bootstrap/esm/Tab.js");
/* harmony import */ var react_bootstrap_Tabs__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! react-bootstrap/Tabs */ "./node_modules/react-bootstrap/esm/Tabs.js");
/* harmony import */ var _Profile_Fiche__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./Profile/Fiche */ "./assets/component/Profile/Fiche.js");
















function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }













var Patient = function Patient() {
  var id = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_22__.useParams)().id;
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

  var navigate = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_22__.useNavigate)();
  var location = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_22__.useLocation)();

  var _useState11 = (0,react__WEBPACK_IMPORTED_MODULE_15__.useState)(location),
      _useState12 = _slicedToArray(_useState11, 2),
      locationWeb = _useState12[0],
      setLocation = _useState12[1];

  var formData = new FormData();
  formData.append("id", id.toString());
  var objPatient = {};
  console.log(idPatient);

  if (!idPatient) {}

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
      objPatient.patient = response.data; // setPatient(response.data);

      console.log(response);
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
        console.log(response);
        var backgroundImage = response.image;
        setImgPatient(response.data); // setPatient(response.data);
      })["catch"](function (response) {
        console.log(response);
      });
    })["catch"](function (response) {
      console.log(response);
    });
  }, [idPatient]);
  console.log(objPatient, imgPatient); // "../build/images/5a94e34b4c36e28de4e704f8c2d1c39a79e91b5d.png"

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
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_15___default().createElement(react_bootstrap_Tabs__WEBPACK_IMPORTED_MODULE_23__["default"], {
    defaultActiveKey: "profile",
    id: "uncontrolled-tab-example",
    activeKey: key,
    onSelect: function onSelect(k) {
      return setKey(k);
    },
    className: "profile-tab"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_15___default().createElement(react_bootstrap_Tab__WEBPACK_IMPORTED_MODULE_24__["default"], {
    eventKey: "fiche",
    title: "Fiche"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_15___default().createElement(_Profile_Fiche__WEBPACK_IMPORTED_MODULE_21__["default"], null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_15___default().createElement(react_bootstrap_Tab__WEBPACK_IMPORTED_MODULE_24__["default"], {
    eventKey: "suivi",
    title: "Profile",
    disabled: true
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_15___default().createElement("div", {
    className: "col-md-4"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_15___default().createElement("div", {
    className: "profile-work"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_15___default().createElement("p", null, "Activit\xE9e")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_15___default().createElement("div", {
    className: "profile-work"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_15___default().createElement("p", null, "Objectifs")))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_15___default().createElement(react_bootstrap_Tab__WEBPACK_IMPORTED_MODULE_24__["default"], {
    eventKey: "indicateurs",
    title: "Indicateurs",
    disabled: true
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_15___default().createElement("p", null, "test3")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_15___default().createElement(react_bootstrap_Tab__WEBPACK_IMPORTED_MODULE_24__["default"], {
    eventKey: "medias",
    title: "Medias",
    disabled: true
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_15___default().createElement("p", null, "test3")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_15___default().createElement(react_bootstrap_Tab__WEBPACK_IMPORTED_MODULE_24__["default"], {
    eventKey: "statistiques",
    title: "Statistiques",
    disabled: true
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_15___default().createElement("p", null, "test4")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_15___default().createElement(react_bootstrap_Tab__WEBPACK_IMPORTED_MODULE_24__["default"], {
    eventKey: "contacts",
    title: "Contacts",
    disabled: true
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_15___default().createElement("p", null, "test5")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_15___default().createElement(react_bootstrap_Tab__WEBPACK_IMPORTED_MODULE_24__["default"], {
    eventKey: "lieux",
    title: "Lieux",
    disabled: true
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_15___default().createElement("p", null, "test6")))))));
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
    console.log(lengthList);
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
      console.log(response);
    })["catch"](function (response) {
      console.log(response);
    });
  }, [lengthList, setLengthList]);

  var readMore = function readMore() {
    setLengthList(lengthList + 10);
  };

  console.log(patientsList);
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

/***/ "./assets/component/Profile/Fiche.js":
/*!*******************************************!*\
  !*** ./assets/component/Profile/Fiche.js ***!
  \*******************************************/
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
/* harmony import */ var core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.array.filter.js */ "./node_modules/core-js/modules/es.array.filter.js");
/* harmony import */ var core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_3__);
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
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router/dist/index.js");
/* harmony import */ var react_bootstrap_Accordion__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! react-bootstrap/Accordion */ "./node_modules/react-bootstrap/esm/Accordion.js");
/* harmony import */ var _hooks_useAuth__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../..//hooks/useAuth */ "./assets/hooks/useAuth.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_18__);
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @fortawesome/react-fontawesome */ "./node_modules/@fortawesome/react-fontawesome/index.es.js");
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ "./node_modules/@fortawesome/free-solid-svg-icons/index.mjs");

















function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }












var Fiche = function Fiche() {
  var _informationPatient$d, _informationPatient$d2, _informationPatient$d3;

  var id = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_20__.useParams)().id;
  var backgroundImage = "../images/5a94e34b4c36e28de4e704f8c2d1c39a79e91b5d.png";

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_16__.useState)((0,_hooks_useAuth__WEBPACK_IMPORTED_MODULE_17__["default"])()),
      _useState2 = _slicedToArray(_useState, 2),
      auth = _useState2[0],
      setAuth = _useState2[1];

  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_16__.useState)(null),
      _useState4 = _slicedToArray(_useState3, 2),
      patient = _useState4[0],
      setPatient = _useState4[1];

  var _useState5 = (0,react__WEBPACK_IMPORTED_MODULE_16__.useState)(null),
      _useState6 = _slicedToArray(_useState5, 2),
      imgPatient = _useState6[0],
      setImgPatient = _useState6[1];

  var _useState7 = (0,react__WEBPACK_IMPORTED_MODULE_16__.useState)("fiche"),
      _useState8 = _slicedToArray(_useState7, 2),
      key = _useState8[0],
      setKey = _useState8[1];

  var _useState9 = (0,react__WEBPACK_IMPORTED_MODULE_16__.useState)(id),
      _useState10 = _slicedToArray(_useState9, 2),
      idPatient = _useState10[0],
      setIdPatient = _useState10[1];

  var navigate = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_20__.useNavigate)();
  var location = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_20__.useLocation)();

  var _useState11 = (0,react__WEBPACK_IMPORTED_MODULE_16__.useState)(location),
      _useState12 = _slicedToArray(_useState11, 2),
      locationWeb = _useState12[0],
      setLocation = _useState12[1];

  var _useState13 = (0,react__WEBPACK_IMPORTED_MODULE_16__.useState)(null),
      _useState14 = _slicedToArray(_useState13, 2),
      statusSuivi = _useState14[0],
      setStatus = _useState14[1];

  var formData = new FormData();
  formData.append("id", id.toString());
  var objPatient = {};

  var _useState15 = (0,react__WEBPACK_IMPORTED_MODULE_16__.useState)(null),
      _useState16 = _slicedToArray(_useState15, 2),
      informationPatient = _useState16[0],
      setInformation = _useState16[1];

  (0,react__WEBPACK_IMPORTED_MODULE_16__.useEffect)(function () {
    axios__WEBPACK_IMPORTED_MODULE_18___default()({
      method: "post",
      url: "/api/patientsInformationByPatients",
      data: formData,
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer ".concat(auth.auth.accessToken)
      }
    }).then(function (response) {
      // setInformation(response);
      console.log(response);
      setInformation(response.data);
    })["catch"](function (response) {});
  }, [idPatient]);
  var status = informationPatient === null || informationPatient === void 0 ? void 0 : (_informationPatient$d = informationPatient.data) === null || _informationPatient$d === void 0 ? void 0 : (_informationPatient$d2 = _informationPatient$d.itel) === null || _informationPatient$d2 === void 0 ? void 0 : (_informationPatient$d3 = _informationPatient$d2.suge) === null || _informationPatient$d3 === void 0 ? void 0 : _informationPatient$d3.pathString.filter(function (e) {
    return e.valeurParentPathString === "/patient/fiche/assuetude/declaree";
  });
  console.log(status); // if (statusSuivi === undefined || statusSuivi === null) {
  //   setStatus(status);
  // }
  // setStatus(status);

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_16___default().createElement("section", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_16___default().createElement(react_bootstrap_Accordion__WEBPACK_IMPORTED_MODULE_21__["default"], {
    defaultActiveKey: "0",
    flush: true,
    className: "accordion-fiche"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_16___default().createElement(react_bootstrap_Accordion__WEBPACK_IMPORTED_MODULE_21__["default"].Item, {
    eventKey: "0"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_16___default().createElement(react_bootstrap_Accordion__WEBPACK_IMPORTED_MODULE_21__["default"].Header, null, "Statut de suivi"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_16___default().createElement(react_bootstrap_Accordion__WEBPACK_IMPORTED_MODULE_21__["default"].Body, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_16___default().createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_16___default().createElement("h6", null, "Statut de suivi", " ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_16___default().createElement("button", null, " ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_16___default().createElement(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_19__.FontAwesomeIcon, {
    icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_22__.faPlusCircle
  }))), informationPatient === null || informationPatient === void 0 ? void 0 : informationPatient.map(function (patient, id) {
    var _patient$patientInfo$, _patient$patientInfo$2, _patient$patientInfo$3;

    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_16___default().createElement((react__WEBPACK_IMPORTED_MODULE_16___default().Fragment), null, patient && patient && patient.patientInfo && ((_patient$patientInfo$ = patient.patientInfo.itel) === null || _patient$patientInfo$ === void 0 ? void 0 : (_patient$patientInfo$2 = _patient$patientInfo$.suge) === null || _patient$patientInfo$2 === void 0 ? void 0 : _patient$patientInfo$2.pathString) === "/patient/fiche/statut-du-suivi" && patient.patientInfo.deletedAt === null && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_16___default().createElement("div", {
      className: "row"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_16___default().createElement("div", {
      className: "col-sm-4"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_16___default().createElement("p", null, (_patient$patientInfo$3 = patient.patientInfo.sugg) === null || _patient$patientInfo$3 === void 0 ? void 0 : _patient$patientInfo$3.value)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_16___default().createElement("div", {
      className: "col-sm-4"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_16___default().createElement("p", null, new Date(patient.patientInfo.start).toLocaleString("fr-BE", {
      dateStyle: "short"
    }), "-", new Date(patient.patientInfo.end).toLocaleString("fr-BE", {
      dateStyle: "short"
    })))));
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_16___default().createElement("div", {
    className: "block mt-4"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_16___default().createElement("h6", null, "Equipes", " ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_16___default().createElement("button", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_16___default().createElement(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_19__.FontAwesomeIcon, {
    icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_22__.faPlusCircle
  }))), informationPatient === null || informationPatient === void 0 ? void 0 : informationPatient.map(function (patient, id) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_16___default().createElement((react__WEBPACK_IMPORTED_MODULE_16___default().Fragment), null, patient && patient && patient.valeurpathString && patient.valeurpathString === "/patient/suivi/programme" && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_16___default().createElement("div", {
      className: "row"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_16___default().createElement("div", {
      className: "col-sm-4"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_16___default().createElement("p", null, patient.parent)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_16___default().createElement("div", {
      className: "col-sm-4"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_16___default().createElement("p", null, new Date(patient.startDate).toLocaleString("fr-BE", {
      dateStyle: "short"
    }), "-", new Date(patient.endDate).toLocaleString("fr-BE", {
      dateStyle: "short"
    })))));
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_16___default().createElement("div", {
    className: "block mt-4"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_16___default().createElement("h6", null, "Programme", " ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_16___default().createElement("button", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_16___default().createElement(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_19__.FontAwesomeIcon, {
    icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_22__.faPlusCircle
  }))), informationPatient === null || informationPatient === void 0 ? void 0 : informationPatient.map(function (patient, id) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_16___default().createElement((react__WEBPACK_IMPORTED_MODULE_16___default().Fragment), null, patient && patient && patient.valeurpathString && patient.valeurpathString === "/patient/suivi/programme" && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_16___default().createElement("div", {
      className: "row"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_16___default().createElement("div", {
      className: "col-sm-4"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_16___default().createElement("p", null, patient.parent)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_16___default().createElement("div", {
      className: "col-sm-4"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_16___default().createElement("p", null, new Date(patient.startDate).toLocaleString("fr-BE", {
      dateStyle: "short"
    }), "-", new Date(patient.endDate).toLocaleString("fr-BE", {
      dateStyle: "short"
    })))));
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_16___default().createElement("div", {
    className: "block mt-4"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_16___default().createElement("h6", null, "Antenne", " ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_16___default().createElement("button", null, " ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_16___default().createElement(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_19__.FontAwesomeIcon, {
    icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_22__.faPlusCircle
  }))), informationPatient === null || informationPatient === void 0 ? void 0 : informationPatient.map(function (patient, id) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_16___default().createElement((react__WEBPACK_IMPORTED_MODULE_16___default().Fragment), null, patient && patient && patient.valeurpathString && patient.valeurpathString === "/patient/suivi/antenne" && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_16___default().createElement("div", {
      className: "row"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_16___default().createElement("div", {
      className: "col-sm-4"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_16___default().createElement("p", null, patient.parent)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_16___default().createElement("div", {
      className: "col-sm-4"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_16___default().createElement("p", null, new Date(patient.startDate).toLocaleString("fr-BE", {
      dateStyle: "short"
    }), "-", new Date(patient.endDate).toLocaleString("fr-BE", {
      dateStyle: "short"
    })))));
  })))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_16___default().createElement(react_bootstrap_Accordion__WEBPACK_IMPORTED_MODULE_21__["default"].Item, {
    eventKey: "1"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_16___default().createElement(react_bootstrap_Accordion__WEBPACK_IMPORTED_MODULE_21__["default"].Header, null, "Information g\xE9n\xE9rale"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_16___default().createElement(react_bootstrap_Accordion__WEBPACK_IMPORTED_MODULE_21__["default"].Body, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_16___default().createElement("div", {
    className: "block"
  }, informationPatient === null || informationPatient === void 0 ? void 0 : informationPatient.map(function (patient, id) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_16___default().createElement((react__WEBPACK_IMPORTED_MODULE_16___default().Fragment), null, patient && patient && patient.valeurParentPathString && patient.valeurParentPathString === "/patient/fiche/information-generale" && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_16___default().createElement("div", {
      key: patient.id,
      className: "row"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_16___default().createElement("div", {
      className: "col-sm-2"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_16___default().createElement("h6", null, patient.valeurParent)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_16___default().createElement("div", {
      className: "col-sm-4"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_16___default().createElement("p", null, patient.parent)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_16___default().createElement("div", {
      className: "col-sm-2"
    }, patient.commentColumn), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_16___default().createElement("div", {
      className: "col-sm-4"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_16___default().createElement("button", null, " ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_16___default().createElement(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_19__.FontAwesomeIcon, {
      icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_22__.faPlusCircle
    })))));
  })))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_16___default().createElement(react_bootstrap_Accordion__WEBPACK_IMPORTED_MODULE_21__["default"].Item, {
    eventKey: "2"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_16___default().createElement(react_bootstrap_Accordion__WEBPACK_IMPORTED_MODULE_21__["default"].Header, null, "Description"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_16___default().createElement(react_bootstrap_Accordion__WEBPACK_IMPORTED_MODULE_21__["default"].Body, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_16___default().createElement("div", {
    className: "block"
  }, informationPatient === null || informationPatient === void 0 ? void 0 : informationPatient.map(function (patient, id) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_16___default().createElement((react__WEBPACK_IMPORTED_MODULE_16___default().Fragment), null, patient && patient && patient.valeurParentPathString && patient.valeurParentPathString === "/patient/fiche/description" && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_16___default().createElement("div", {
      key: patient.id,
      className: "row"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_16___default().createElement("div", {
      className: "col-sm-4"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_16___default().createElement("h6", null, patient.valeurParent)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_16___default().createElement("div", {
      className: "col-sm-4"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_16___default().createElement("p", null, patient.valeurColumn)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_16___default().createElement("div", {
      className: "col-sm-4"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_16___default().createElement("button", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_16___default().createElement(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_19__.FontAwesomeIcon, {
      icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_22__.faPlusCircle
    })))));
  })))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_16___default().createElement(react_bootstrap_Accordion__WEBPACK_IMPORTED_MODULE_21__["default"].Item, {
    eventKey: "3"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_16___default().createElement(react_bootstrap_Accordion__WEBPACK_IMPORTED_MODULE_21__["default"].Header, null, "Ressources personnelles"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_16___default().createElement(react_bootstrap_Accordion__WEBPACK_IMPORTED_MODULE_21__["default"].Body, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_16___default().createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_16___default().createElement("h6", null, "Langues", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_16___default().createElement("button", null, " ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_16___default().createElement(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_19__.FontAwesomeIcon, {
    icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_22__.faPlusCircle
  }))), informationPatient === null || informationPatient === void 0 ? void 0 : informationPatient.map(function (patient, id) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_16___default().createElement((react__WEBPACK_IMPORTED_MODULE_16___default().Fragment), null, patient && patient && patient.valeurParentPathString && patient.valeurParentPathString === "/patient/fiche/langues" && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_16___default().createElement("div", {
      key: patient.id,
      className: "row"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_16___default().createElement("div", {
      className: "col-sm-4"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_16___default().createElement("p", null, patient.parent)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_16___default().createElement("div", {
      className: "col-sm-4"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_16___default().createElement("p", null, patient.valeurColumn))));
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_16___default().createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_16___default().createElement("h6", null, "Talents et centres d'int\xE9r\xEAt", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_16___default().createElement("button", null, " ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_16___default().createElement(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_19__.FontAwesomeIcon, {
    icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_22__.faPlusCircle
  }))), informationPatient === null || informationPatient === void 0 ? void 0 : informationPatient.map(function (patient, id) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_16___default().createElement((react__WEBPACK_IMPORTED_MODULE_16___default().Fragment), null, patient && patient && patient.valeurParentPathString && patient.valeurParentPathString === "/patient/fiche/ressources-personnelles" && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_16___default().createElement("div", {
      key: patient.id,
      className: "row"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_16___default().createElement("div", {
      className: "col-sm-4"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_16___default().createElement("p", null, patient.parent)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_16___default().createElement("div", {
      className: "col-sm-4"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_16___default().createElement("p", null, patient.valeurColumn))));
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_16___default().createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_16___default().createElement("h6", null, "R\xEAves", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_16___default().createElement("button", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_16___default().createElement(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_19__.FontAwesomeIcon, {
    icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_22__.faPlusCircle
  }))), informationPatient === null || informationPatient === void 0 ? void 0 : informationPatient.map(function (patient, id) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_16___default().createElement((react__WEBPACK_IMPORTED_MODULE_16___default().Fragment), null, patient && patient && patient.valeurParentPathString && patient.valeurParentPathString === "/patient/fiche/ressources-personnelles/reves" && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_16___default().createElement("div", {
      key: patient.id,
      className: "row"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_16___default().createElement("div", {
      className: "col-sm-4"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_16___default().createElement("p", null, patient.parent)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_16___default().createElement("div", {
      className: "col-sm-4"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_16___default().createElement("p", null, patient.valeurColumn))));
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_16___default().createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_16___default().createElement("h6", null, "Go\xFBts culinaires", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_16___default().createElement("button", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_16___default().createElement(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_19__.FontAwesomeIcon, {
    icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_22__.faPlusCircle
  }))), informationPatient === null || informationPatient === void 0 ? void 0 : informationPatient.map(function (patient, id) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_16___default().createElement((react__WEBPACK_IMPORTED_MODULE_16___default().Fragment), null, patient && patient && patient.valeurParentPathString && patient.valeurParentPathString === "/patient/fiche/ressources-personnelles/gouts-culinaires" && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_16___default().createElement("div", {
      key: patient.id,
      className: "row"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_16___default().createElement("div", {
      className: "col-sm-4"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_16___default().createElement("p", null, patient.parent)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_16___default().createElement("div", {
      className: "col-sm-4"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_16___default().createElement("p", null, patient.valeurColumn))));
  })))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_16___default().createElement(react_bootstrap_Accordion__WEBPACK_IMPORTED_MODULE_21__["default"].Item, {
    eventKey: "4"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_16___default().createElement(react_bootstrap_Accordion__WEBPACK_IMPORTED_MODULE_21__["default"].Header, null, "Ressources financi\xE8res"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_16___default().createElement(react_bootstrap_Accordion__WEBPACK_IMPORTED_MODULE_21__["default"].Body, null, informationPatient === null || informationPatient === void 0 ? void 0 : informationPatient.map(function (patient, id) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_16___default().createElement((react__WEBPACK_IMPORTED_MODULE_16___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_16___default().createElement("div", {
      className: "block"
    }, patient && patient && patient.valeurParentPathString && patient.valeurParentPathString === "/patient/fiche/ressources-financieres" && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_16___default().createElement("div", {
      key: patient.id,
      className: "row"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_16___default().createElement("div", {
      className: "col-sm-4"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_16___default().createElement("h6", null, patient.valeurParent)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_16___default().createElement("div", {
      className: "col-sm-4"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_16___default().createElement("p", null, patient.parent)))));
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_16___default().createElement(react_bootstrap_Accordion__WEBPACK_IMPORTED_MODULE_21__["default"].Item, {
    eventKey: "5"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_16___default().createElement(react_bootstrap_Accordion__WEBPACK_IMPORTED_MODULE_21__["default"].Header, null, "Acc\xE8s aux soins"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_16___default().createElement(react_bootstrap_Accordion__WEBPACK_IMPORTED_MODULE_21__["default"].Body, null, informationPatient === null || informationPatient === void 0 ? void 0 : informationPatient.map(function (patient, id) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_16___default().createElement((react__WEBPACK_IMPORTED_MODULE_16___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_16___default().createElement("div", {
      className: "block"
    }, patient && patient && patient.valeurParentPathString && patient.valeurParentPathString === "/patient/fiche/acces-aux-soins" && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_16___default().createElement("div", {
      key: patient.id,
      className: "row"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_16___default().createElement("div", {
      className: "col-sm-4"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_16___default().createElement("h6", null, patient.valeurParent)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_16___default().createElement("div", {
      className: "col-sm-4"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_16___default().createElement("p", null, patient.parent)))));
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_16___default().createElement(react_bootstrap_Accordion__WEBPACK_IMPORTED_MODULE_21__["default"].Item, {
    eventKey: "6"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_16___default().createElement(react_bootstrap_Accordion__WEBPACK_IMPORTED_MODULE_21__["default"].Header, null, "Sant\xE9 physique"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_16___default().createElement(react_bootstrap_Accordion__WEBPACK_IMPORTED_MODULE_21__["default"].Body, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_16___default().createElement("div", {
    className: "mt-4"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_16___default().createElement("h6", null, "Pathologies physiques chroniques", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_16___default().createElement("button", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_16___default().createElement(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_19__.FontAwesomeIcon, {
    icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_22__.faPlusCircle
  }))), informationPatient === null || informationPatient === void 0 ? void 0 : informationPatient.map(function (patient, id) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_16___default().createElement((react__WEBPACK_IMPORTED_MODULE_16___default().Fragment), null, patient && patient && patient.valeurParentPathString && patient.valeurParentPathString === "/patient/medical/pathologies" && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_16___default().createElement("div", {
      key: patient.id,
      className: "row"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_16___default().createElement("div", {
      className: "col-sm-4"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_16___default().createElement("p", null, patient.parent)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_16___default().createElement("div", {
      className: "col-sm-4"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_16___default().createElement("p", null, patient.commentColumn))));
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_16___default().createElement("div", {
    className: "mt-4"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_16___default().createElement("h6", null, "Episodes de maladie", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_16___default().createElement("button", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_16___default().createElement(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_19__.FontAwesomeIcon, {
    icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_22__.faPlusCircle
  }))), informationPatient === null || informationPatient === void 0 ? void 0 : informationPatient.map(function (patient, id) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_16___default().createElement((react__WEBPACK_IMPORTED_MODULE_16___default().Fragment), null, patient && patient && patient.valeurpathString && patient.valeurpathString === "/patient/medical/episodes-de-maladie" && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_16___default().createElement("div", {
      key: patient.id,
      className: "row"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_16___default().createElement("div", {
      className: "col-sm-4"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_16___default().createElement("p", null, patient.parent)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_16___default().createElement("div", {
      className: "col-sm-4"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_16___default().createElement("p", null, patient.commentColumn))));
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_16___default().createElement("div", {
    className: "mt-4"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_16___default().createElement("h6", null, "Allergies", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_16___default().createElement("button", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_16___default().createElement(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_19__.FontAwesomeIcon, {
    icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_22__.faPlusCircle
  }))), informationPatient === null || informationPatient === void 0 ? void 0 : informationPatient.map(function (patient, id) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_16___default().createElement((react__WEBPACK_IMPORTED_MODULE_16___default().Fragment), null, patient && patient && patient.valeurpathString && patient.valeurpathString === "/patient/medical/allergies" && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_16___default().createElement("div", {
      key: patient.id,
      className: "row"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_16___default().createElement("div", {
      className: "col-sm-4"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_16___default().createElement("p", null, patient.parent)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_16___default().createElement("div", {
      className: "col-sm-4"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_16___default().createElement("p", null, patient.commentColumn))));
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_16___default().createElement("div", {
    className: "mt-4"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_16___default().createElement("h6", null, "Param\xE8tres", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_16___default().createElement("button", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_16___default().createElement(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_19__.FontAwesomeIcon, {
    icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_22__.faPlusCircle
  }))), informationPatient === null || informationPatient === void 0 ? void 0 : informationPatient.map(function (patient, id) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_16___default().createElement((react__WEBPACK_IMPORTED_MODULE_16___default().Fragment), null, patient && patient && patient.valeurpathString && patient.valeurpathString === "/patient/medical/parametres" && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_16___default().createElement("div", {
      key: patient.id,
      className: "row"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_16___default().createElement("div", {
      className: "col-sm-4"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_16___default().createElement("p", null, patient.parent)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_16___default().createElement("div", {
      className: "col-sm-4"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_16___default().createElement("p", null, patient.commentColumn))));
  })))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_16___default().createElement(react_bootstrap_Accordion__WEBPACK_IMPORTED_MODULE_21__["default"].Item, {
    eventKey: "7"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_16___default().createElement(react_bootstrap_Accordion__WEBPACK_IMPORTED_MODULE_21__["default"].Header, null, "Pathologie mentale"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_16___default().createElement(react_bootstrap_Accordion__WEBPACK_IMPORTED_MODULE_21__["default"].Body, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_16___default().createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_16___default().createElement("h6", null, "Suppos\xE9e", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_16___default().createElement("button", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_16___default().createElement(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_19__.FontAwesomeIcon, {
    icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_22__.faPlusCircle
  }))), informationPatient === null || informationPatient === void 0 ? void 0 : informationPatient.map(function (patient, id) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_16___default().createElement((react__WEBPACK_IMPORTED_MODULE_16___default().Fragment), null, patient && patient && patient.valeurParentPathString && patient.valeurParentPathString === "/patient/fiche/pathologie-mentale/supposee" && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_16___default().createElement("div", {
      key: patient.id,
      className: "row"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_16___default().createElement("div", {
      className: "col-sm-4"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_16___default().createElement("p", null, patient.valeurParent)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_16___default().createElement("div", {
      className: "col-sm-4"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_16___default().createElement("p", null, patient.parent))));
  })))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_16___default().createElement(react_bootstrap_Accordion__WEBPACK_IMPORTED_MODULE_21__["default"].Item, {
    eventKey: "8"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_16___default().createElement(react_bootstrap_Accordion__WEBPACK_IMPORTED_MODULE_21__["default"].Header, null, "Assu\xE9tude"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_16___default().createElement(react_bootstrap_Accordion__WEBPACK_IMPORTED_MODULE_21__["default"].Body, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_16___default().createElement("h6", null, "Suppos\xE9e", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_16___default().createElement("button", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_16___default().createElement(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_19__.FontAwesomeIcon, {
    icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_22__.faPlusCircle
  }))), informationPatient === null || informationPatient === void 0 ? void 0 : informationPatient.map(function (patient, id) {
    var _patient$patientInfo, _patient$patientInfo$4, _patient$patientInfo$5, _patient$patientInfo2, _patient$patientInfo3, _patient$patientInfo4, _patient$patientInfo5, _patient$patientInfo6, _patient$patientInfo7;

    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_16___default().createElement((react__WEBPACK_IMPORTED_MODULE_16___default().Fragment), null, patient && patient && (patient === null || patient === void 0 ? void 0 : (_patient$patientInfo = patient.patientInfo) === null || _patient$patientInfo === void 0 ? void 0 : (_patient$patientInfo$4 = _patient$patientInfo.itel) === null || _patient$patientInfo$4 === void 0 ? void 0 : (_patient$patientInfo$5 = _patient$patientInfo$4.suge) === null || _patient$patientInfo$5 === void 0 ? void 0 : _patient$patientInfo$5.pathString) && (patient === null || patient === void 0 ? void 0 : (_patient$patientInfo2 = patient.patientInfo) === null || _patient$patientInfo2 === void 0 ? void 0 : (_patient$patientInfo3 = _patient$patientInfo2.itel) === null || _patient$patientInfo3 === void 0 ? void 0 : (_patient$patientInfo4 = _patient$patientInfo3.suge) === null || _patient$patientInfo4 === void 0 ? void 0 : _patient$patientInfo4.pathString) === "/patient/fiche/assuetude/supposee" && (patient === null || patient === void 0 ? void 0 : (_patient$patientInfo5 = patient.patientInfo) === null || _patient$patientInfo5 === void 0 ? void 0 : _patient$patientInfo5.deletedAt) === null && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_16___default().createElement("div", {
      key: patient.id,
      className: "row mt-4"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_16___default().createElement("div", {
      className: "col-sm-2"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_16___default().createElement("h6", null, patient === null || patient === void 0 ? void 0 : (_patient$patientInfo6 = patient.patientInfo) === null || _patient$patientInfo6 === void 0 ? void 0 : _patient$patientInfo6.sugg.value)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_16___default().createElement("div", {
      className: "col-sm-6"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_16___default().createElement("p", null, patient === null || patient === void 0 ? void 0 : (_patient$patientInfo7 = patient.patientInfo) === null || _patient$patientInfo7 === void 0 ? void 0 : _patient$patientInfo7.comment)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_16___default().createElement("div", {
      className: "col-sm-4"
    })));
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_16___default().createElement("h6", null, "D\xE9clar\xE9e", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_16___default().createElement("button", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_16___default().createElement(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_19__.FontAwesomeIcon, {
    icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_22__.faPlusCircle
  }))), informationPatient === null || informationPatient === void 0 ? void 0 : informationPatient.map(function (patient, id) {
    var _patient$patientInfo8, _patient$patientInfo9, _patient$patientInfo10, _patient$patientInfo11, _patient$patientInfo12, _patient$patientInfo13, _patient$patientInfo14, _patient$patientInfo15, _patient$patientInfo16;

    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_16___default().createElement((react__WEBPACK_IMPORTED_MODULE_16___default().Fragment), null, patient && patient && (patient === null || patient === void 0 ? void 0 : (_patient$patientInfo8 = patient.patientInfo) === null || _patient$patientInfo8 === void 0 ? void 0 : (_patient$patientInfo9 = _patient$patientInfo8.itel) === null || _patient$patientInfo9 === void 0 ? void 0 : (_patient$patientInfo10 = _patient$patientInfo9.suge) === null || _patient$patientInfo10 === void 0 ? void 0 : _patient$patientInfo10.pathString) && (patient === null || patient === void 0 ? void 0 : (_patient$patientInfo11 = patient.patientInfo) === null || _patient$patientInfo11 === void 0 ? void 0 : (_patient$patientInfo12 = _patient$patientInfo11.itel) === null || _patient$patientInfo12 === void 0 ? void 0 : (_patient$patientInfo13 = _patient$patientInfo12.suge) === null || _patient$patientInfo13 === void 0 ? void 0 : _patient$patientInfo13.pathString) === "/patient/fiche/assuetude/declaree" && (patient === null || patient === void 0 ? void 0 : (_patient$patientInfo14 = patient.patientInfo) === null || _patient$patientInfo14 === void 0 ? void 0 : _patient$patientInfo14.deletedAt) === null && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_16___default().createElement("div", {
      key: patient.id,
      className: "row mt-4"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_16___default().createElement("div", {
      className: "col-sm-2"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_16___default().createElement("h6", null, patient === null || patient === void 0 ? void 0 : (_patient$patientInfo15 = patient.patientInfo) === null || _patient$patientInfo15 === void 0 ? void 0 : _patient$patientInfo15.sugg.value)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_16___default().createElement("div", {
      className: "col-sm-6"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_16___default().createElement("p", null, patient === null || patient === void 0 ? void 0 : (_patient$patientInfo16 = patient.patientInfo) === null || _patient$patientInfo16 === void 0 ? void 0 : _patient$patientInfo16.comment)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_16___default().createElement("div", {
      className: "col-sm-4"
    })));
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_16___default().createElement(react_bootstrap_Accordion__WEBPACK_IMPORTED_MODULE_21__["default"].Item, {
    eventKey: "9"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_16___default().createElement(react_bootstrap_Accordion__WEBPACK_IMPORTED_MODULE_21__["default"].Header, null, "Traitements"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_16___default().createElement(react_bootstrap_Accordion__WEBPACK_IMPORTED_MODULE_21__["default"].Body, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_16___default().createElement("div", {
    className: "block"
  }, informationPatient === null || informationPatient === void 0 ? void 0 : informationPatient.map(function (patient, id) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_16___default().createElement((react__WEBPACK_IMPORTED_MODULE_16___default().Fragment), null, patient && patient && patient.valeurpathString && patient.valeurpathString === "/patient/fiche/traitements" && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_16___default().createElement("div", {
      key: patient.id,
      className: "row"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_16___default().createElement("div", {
      className: "col-sm-4"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_16___default().createElement("h6", null, patient.parent)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_16___default().createElement("div", {
      className: "col-sm-4"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_16___default().createElement("p", null, patient.valeurColumn), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_16___default().createElement("p", null, patient.commentColumn))));
  }))))));
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Fiche);

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

    console.log(isOpen);
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
      console.log(id);
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
/******/ __webpack_require__.O(0, ["vendors-node_modules_fortawesome_react-fontawesome_index_es_js-node_modules_axios_index_js-no-90d054","assets_styles_app_scss"], () => (__webpack_exec__("./assets/index.js")));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUNFLElBQVQsQ0FBY3lJO2dCQUg3QjtjQUtELENBTk0sQ0FBUDtjQVRjLGlDQWdCUDNJLFFBQVEsQ0FBQ0UsSUFBVCxDQUFjRCxXQWhCUDs7WUFBQTtZQUFBO2NBQUE7VUFBQTtRQUFBO01BQUE7SUFBQSxDQUFIOztJQUFBLGdCQUFQdUUsT0FBTztNQUFBO0lBQUE7RUFBQSxHQUFiOztFQWtCQSxPQUFPQSxPQUFQO0FBQ0QsQ0F0QkQ7O0FBd0JBLGlFQUFlSCxlQUFmOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUMzQkE7Q0FFQTs7QUFDQTtBQUNBO0FBQ0E7QUFFQXVFLDZDQUFBLGVBQ0UsMkRBQUMseURBQUQscUJBQ0UsMkRBQUMsMkRBQUQscUJBQ0UsMkRBQUMsK0RBQUQscUJBQ0UsMkRBQUMsb0RBQUQscUJBQ0UsMkRBQUMsbURBQUQ7RUFBTyxJQUFJLEVBQUMsSUFBWjtFQUFpQixPQUFPLGVBQUUsMkRBQUMsNENBQUQ7QUFBMUIsRUFERixDQURGLENBREYsQ0FERixDQURGLEVBVUVHLFFBQVEsQ0FBQ0MsY0FBVCxDQUF3QixNQUF4QixDQVZGOzs7Ozs7Ozs7OztBQ1BBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2FwcC5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvY29tcG9uZW50L0FkbWluLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9jb21wb25lbnQvRWRpdG9yLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9jb21wb25lbnQvRm9ybV9NZWV0UmFwcG9ydHMuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2NvbXBvbmVudC9Ib21lLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9jb21wb25lbnQvTGF5b3V0LmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9jb21wb25lbnQvTGlua1BhZ2UuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2NvbXBvbmVudC9Mb2dpbi5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvY29tcG9uZW50L0xvdW5nZS5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvY29tcG9uZW50L01lbnUuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2NvbXBvbmVudC9NaXNzaW5nLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9jb21wb25lbnQvUGF0aWVudC5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvY29tcG9uZW50L1BhdGllbnRzLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9jb21wb25lbnQvUGVyc2lzdExvZ2luLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9jb21wb25lbnQvUG9zdHMuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2NvbXBvbmVudC9Qcm9maWxlL0ZpY2hlLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9jb21wb25lbnQvUmVxdWlyZUF1dGguanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2NvbXBvbmVudC9TZWFyY2guanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2NvbXBvbmVudC9VbmF1dGhvcml6ZWQuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2NvbXBvbmVudC9Vc2Vycy5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvY29tcG9uZW50L2xpc3RfcmVwb3J0Q2FsbHMuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2NvbXBvbmVudC9saXN0X3JlcG9ydEdvYWxzLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9jb250ZXh0L0F1dGhQcm92aWRlci5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvaG9va3MvdXNlQXV0aC5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvaG9va3MvdXNlTG9nb3V0LmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9ob29rcy91c2VSZWZyZXNoVG9rZW4uanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2luZGV4LmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9zdHlsZXMvYXBwLnNjc3MiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gaW1wb3J0IFJlZ2lzdGVyIGZyb20gXCIuL2NvbXBvbmVudHMvUmVnaXN0ZXJcIjtcbmltcG9ydCBSZWFjdCwgeyB1c2VDb250ZXh0LCB1c2VEZWJ1Z1ZhbHVlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgTG9naW4gZnJvbSBcIi4vY29tcG9uZW50L0xvZ2luXCI7XG5pbXBvcnQgSG9tZSBmcm9tIFwiLi9jb21wb25lbnQvSG9tZVwiO1xuaW1wb3J0IExheW91dCBmcm9tIFwiLi9jb21wb25lbnQvTGF5b3V0XCI7XG5pbXBvcnQgRWRpdG9yIGZyb20gXCIuL2NvbXBvbmVudC9FZGl0b3JcIjtcbmltcG9ydCBBZG1pbiBmcm9tIFwiLi9jb21wb25lbnQvQWRtaW5cIjtcbmltcG9ydCBNaXNzaW5nIGZyb20gXCIuL2NvbXBvbmVudC9NaXNzaW5nXCI7XG5pbXBvcnQgVW5hdXRob3JpemVkIGZyb20gXCIuL2NvbXBvbmVudC9VbmF1dGhvcml6ZWRcIjtcbmltcG9ydCBMb3VuZ2UgZnJvbSBcIi4vY29tcG9uZW50L0xvdW5nZVwiO1xuaW1wb3J0IExpbmtQYWdlIGZyb20gXCIuL2NvbXBvbmVudC9MaW5rUGFnZVwiO1xuaW1wb3J0IFJlcXVpcmVBdXRoIGZyb20gXCIuL2NvbXBvbmVudC9SZXF1aXJlQXV0aFwiO1xuaW1wb3J0IFBlcnNpc3RMb2dpbiBmcm9tIFwiLi9jb21wb25lbnQvUGVyc2lzdExvZ2luXCI7XG5pbXBvcnQgeyBSb3V0ZXMsIFJvdXRlIH0gZnJvbSBcInJlYWN0LXJvdXRlci1kb21cIjtcblxuaW1wb3J0IFBhdGllbnRzIGZyb20gXCIuL2NvbXBvbmVudC9QYXRpZW50c1wiO1xuaW1wb3J0IFJlcHBvcnRDYWxscyBmcm9tIFwiLi9jb21wb25lbnQvbGlzdF9yZXBvcnRDYWxsc1wiO1xuaW1wb3J0IFJlcHBvcnRHb2FscyBmcm9tIFwiLi9jb21wb25lbnQvbGlzdF9yZXBvcnRHb2Fsc1wiO1xuXG5pbXBvcnQgUGF0aWVudCBmcm9tIFwiLi9jb21wb25lbnQvUGF0aWVudFwiO1xuaW1wb3J0IFwiLi9zdHlsZXMvYXBwLnNjc3NcIjtcblxuY29uc3QgUk9MRVMgPSB7XG4gIFVzZXI6IFwiUk9MRV9VU0VSXCIsXG4gIEFkbWluOiBcIlJPTEVfQURNSU5cIixcbn07XG5cbmZ1bmN0aW9uIEFwcCgpIHtcbiAgcmV0dXJuIChcbiAgICA8Um91dGVzPlxuICAgICAgPFJvdXRlIHBhdGg9XCIvXCIgZWxlbWVudD17PExheW91dCAvPn0+XG4gICAgICAgIDxSb3V0ZSBwYXRoPVwiY29ubmVjdFwiIGVsZW1lbnQ9ezxMb2dpbiAvPn0gLz5cbiAgICAgICAgPFJvdXRlIHBhdGg9XCJsaW5rcGFnZVwiIGVsZW1lbnQ9ezxMaW5rUGFnZSAvPn0gLz5cbiAgICAgICAgPFJvdXRlIHBhdGg9XCJ1bmF1dGhvcml6ZWRcIiBlbGVtZW50PXs8VW5hdXRob3JpemVkIC8+fSAvPlxuXG4gICAgICAgIDxSb3V0ZSBlbGVtZW50PXs8UGVyc2lzdExvZ2luIC8+fT5cbiAgICAgICAgICA8Um91dGUgZWxlbWVudD17PFJlcXVpcmVBdXRoIGFsbG93ZWRSb2xlcz17W1JPTEVTLlVzZXJdfSAvPn0+XG4gICAgICAgICAgICA8Um91dGUgcGF0aD1cIi9cIiBlbGVtZW50PXs8SG9tZSAvPn0+PC9Sb3V0ZT5cbiAgICAgICAgICA8L1JvdXRlPlxuXG4gICAgICAgICAgPFJvdXRlIGVsZW1lbnQ9ezxSZXF1aXJlQXV0aCBhbGxvd2VkUm9sZXM9e1tST0xFUy5BZG1pbl19IC8+fT5cbiAgICAgICAgICAgIDxSb3V0ZSBwYXRoPVwicGF0aWVudHNcIiBlbGVtZW50PXs8UGF0aWVudHMgLz59IC8+XG4gICAgICAgICAgICA8Um91dGUgcGF0aD1cIjppZFwiIGVsZW1lbnQ9ezxQYXRpZW50IC8+fSAvPlxuICAgICAgICAgIDwvUm91dGU+XG5cbiAgICAgICAgICA8Um91dGUgZWxlbWVudD17PFJlcXVpcmVBdXRoIGFsbG93ZWRSb2xlcz17W1JPTEVTLkFkbWluXX0gLz59PlxuICAgICAgICAgICAgPFJvdXRlIHBhdGg9XCJhZG1pblwiIGVsZW1lbnQ9ezxBZG1pbiAvPn0gLz5cbiAgICAgICAgICA8L1JvdXRlPlxuICAgICAgICA8L1JvdXRlPlxuXG4gICAgICAgIDxSb3V0ZSBwYXRoPVwiKlwiIGVsZW1lbnQ9ezxNaXNzaW5nIC8+fSAvPlxuICAgICAgPC9Sb3V0ZT5cbiAgICA8L1JvdXRlcz5cbiAgKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgQXBwO1xuIiwiaW1wb3J0IFJlYWN0LCB7IHVzZUNvbnRleHQsIHVzZURlYnVnVmFsdWUgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgTGluayB9IGZyb20gXCJyZWFjdC1yb3V0ZXItZG9tXCI7XHJcbmltcG9ydCBVc2VycyBmcm9tIFwiLi9Vc2Vyc1wiO1xyXG5cclxuY29uc3QgQWRtaW4gPSAoKSA9PiB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxzZWN0aW9uPlxyXG4gICAgICA8aDE+QWRtaW5zIFBhZ2U8L2gxPlxyXG4gICAgICA8YnIgLz5cclxuICAgICAgPFVzZXJzIC8+XHJcbiAgICAgIDxiciAvPlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXhHcm93XCI+XHJcbiAgICAgICAgPExpbmsgdG89XCIvXCI+SG9tZTwvTGluaz5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L3NlY3Rpb24+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IEFkbWluO1xyXG4iLCJpbXBvcnQgeyBMaW5rIH0gZnJvbSBcInJlYWN0LXJvdXRlci1kb21cIjtcclxuXHJcbmNvbnN0IEVkaXRvciA9ICgpID0+IHtcclxuICByZXR1cm4gKFxyXG4gICAgPHNlY3Rpb24+XHJcbiAgICAgIDxoMT5FZGl0b3JzIFBhZ2U8L2gxPlxyXG4gICAgICA8YnIgLz5cclxuICAgICAgPHA+WW91IG11c3QgaGF2ZSBiZWVuIGFzc2lnbmVkIGFuIEVkaXRvciByb2xlLjwvcD5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4R3Jvd1wiPlxyXG4gICAgICAgIDxMaW5rIHRvPVwiL1wiPkhvbWU8L0xpbms+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9zZWN0aW9uPlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBFZGl0b3I7XHJcbiIsImltcG9ydCBSZWFjdCwgeyB1c2VDb250ZXh0LCB1c2VEZWJ1Z1ZhbHVlIH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IHVzZU5hdmlnYXRlLCBMaW5rIH0gZnJvbSBcInJlYWN0LXJvdXRlci1kb21cIjtcclxuaW1wb3J0IHVzZUxvZ291dCBmcm9tIFwiLi4vaG9va3MvdXNlTG9nb3V0XCI7XHJcbmltcG9ydCBCdXR0b24gZnJvbSBcInJlYWN0LWJvb3RzdHJhcC9CdXR0b25cIjtcclxuaW1wb3J0IENvbnRhaW5lciBmcm9tIFwicmVhY3QtYm9vdHN0cmFwL0NvbnRhaW5lclwiO1xyXG5pbXBvcnQgRm9ybSBmcm9tIFwicmVhY3QtYm9vdHN0cmFwL0Zvcm1cIjtcclxuaW1wb3J0IE5hdiBmcm9tIFwicmVhY3QtYm9vdHN0cmFwL05hdlwiO1xyXG5pbXBvcnQgTmF2YmFyIGZyb20gXCJyZWFjdC1ib290c3RyYXAvTmF2YmFyXCI7XHJcbmltcG9ydCBOYXZEcm9wZG93biBmcm9tIFwicmVhY3QtYm9vdHN0cmFwL05hdkRyb3Bkb3duXCI7XHJcbmNvbnN0IEZvcm1fTWVldFJhcHBvcnRzID0gKCkgPT4ge1xyXG4gIGNvbnN0IG5hdmlnYXRlID0gdXNlTmF2aWdhdGUoKTtcclxuICBjb25zdCBsb2dvdXQgPSB1c2VMb2dvdXQoKTtcclxuXHJcbiAgY29uc3Qgc2lnbk91dCA9IGFzeW5jICgpID0+IHtcclxuICAgIGF3YWl0IGxvZ291dCgpO1xyXG4gICAgbmF2aWdhdGUoXCIvY29ubmVjdFwiKTtcclxuICB9O1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPD5cclxuICAgICAgPGgzPlJhcHBvcnQgZGUgcmVuY29udHJlPC9oMz5cclxuICAgICAgPEZvcm0+XHJcbiAgICAgICAgPEZvcm0uR3JvdXAgY2xhc3NOYW1lPVwibWItM1wiIGNvbnRyb2xJZD1cImZvcm1CYXNpY0VtYWlsXCI+XHJcbiAgICAgICAgICA8Rm9ybS5Db250cm9sIHR5cGU9XCJlbWFpbFwiIHBsYWNlaG9sZGVyPVwiVGFwZXogbGUgbm9tXCIgLz5cclxuICAgICAgICA8L0Zvcm0uR3JvdXA+XHJcblxyXG4gICAgICAgIDxGb3JtLkdyb3VwIGNsYXNzTmFtZT1cIm1iLTNcIiBjb250cm9sSWQ9XCJmb3JtQmFzaWNQYXNzd29yZFwiPlxyXG4gICAgICAgICAgPEZvcm0uQ29udHJvbCB0eXBlPVwidGV4dFwiIHBsYWNlaG9sZGVyPVwiVGFwZXogbGUgcHLDqW5vbVwiIC8+XHJcbiAgICAgICAgPC9Gb3JtLkdyb3VwPlxyXG5cclxuICAgICAgICA8Rm9ybS5Hcm91cCBjbGFzc05hbWU9XCJtYi0zXCIgY29udHJvbElkPVwiZm9ybUJhc2ljUGFzc3dvcmRcIj5cclxuICAgICAgICAgIDxGb3JtLkNvbnRyb2wgdHlwZT1cInRleHRcIiBwbGFjZWhvbGRlcj1cIlRhcGV6IGxlIHN1cm5vbVwiIC8+XHJcbiAgICAgICAgPC9Gb3JtLkdyb3VwPlxyXG5cclxuICAgICAgICA8Rm9ybS5TZWxlY3QgYXJpYS1sYWJlbD1cIkRlZmF1bHQgc2VsZWN0IGV4YW1wbGVcIj5cclxuICAgICAgICAgIDxvcHRpb24+Q2hvaXNzaXNleiB2b3RyZSBhbnRlbm5lPC9vcHRpb24+XHJcbiAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiMVwiPkxpw6hnZTwvb3B0aW9uPlxyXG4gICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIjJcIj5CcnV4ZWxsZXM8L29wdGlvbj5cclxuICAgICAgICA8L0Zvcm0uU2VsZWN0PlxyXG5cclxuICAgICAgICA8QnV0dG9uIHZhcmlhbnQ9XCJwcmltYXJ5XCIgdHlwZT1cInN1Ym1pdFwiIGNsYXNzTmFtZT1cImJ0bi1tZXRpcyBtdC0zXCI+XHJcbiAgICAgICAgICBTdWJtaXRcclxuICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgPC9Gb3JtPlxyXG4gICAgPC8+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IEZvcm1fTWVldFJhcHBvcnRzO1xyXG4iLCJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUNvbnRleHQsIHVzZURlYnVnVmFsdWUsIHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyB1c2VOYXZpZ2F0ZSwgTGluayB9IGZyb20gXCJyZWFjdC1yb3V0ZXItZG9tXCI7XHJcbmltcG9ydCB1c2VMb2dvdXQgZnJvbSBcIi4uL2hvb2tzL3VzZUxvZ291dFwiO1xyXG5pbXBvcnQgeyBGb250QXdlc29tZUljb24gfSBmcm9tIFwiQGZvcnRhd2Vzb21lL3JlYWN0LWZvbnRhd2Vzb21lXCI7XHJcbmltcG9ydCB7IGZhQXJyb3dSaWdodCB9IGZyb20gXCJAZm9ydGF3ZXNvbWUvZnJlZS1zb2xpZC1zdmctaWNvbnNcIjtcclxuaW1wb3J0IE1lbnUgZnJvbSBcIi4vTWVudVwiO1xyXG5pbXBvcnQgRm9ybV9NZWV0UmFwcG9ydHMgZnJvbSBcIi4vRm9ybV9NZWV0UmFwcG9ydHNcIjtcclxuaW1wb3J0IFJlcHBvcnRDYWxscyBmcm9tIFwiLi9saXN0X3JlcG9ydENhbGxzXCI7XHJcbmltcG9ydCBSZXBwb3J0R29hbHMgZnJvbSBcIi4vbGlzdF9yZXBvcnRHb2Fsc1wiO1xyXG5cclxuY29uc3QgSG9tZSA9ICgpID0+IHtcclxuICBjb25zdCBuYXZpZ2F0ZSA9IHVzZU5hdmlnYXRlKCk7XHJcbiAgY29uc3QgbG9nb3V0ID0gdXNlTG9nb3V0KCk7XHJcblxyXG4gIGNvbnN0IFtyZXBvcnRNZWV0LCBzZXRSZXBvcnRNZWV0XSA9IHVzZVN0YXRlKDApO1xyXG4gIGNvbnN0IFtyZXBvcnRDYWxscywgc2V0UmVwb3J0Q2FsbHNdID0gdXNlU3RhdGUoMCk7XHJcbiAgY29uc3QgW3JlcG9ydEdvYWxzLCBzZXRSZXBvcnRHb2Fsc10gPSB1c2VTdGF0ZSgwKTtcclxuXHJcbiAgY29uc3Qgc2lnbk91dCA9IGFzeW5jICgpID0+IHtcclxuICAgIGF3YWl0IGxvZ291dCgpO1xyXG4gICAgbmF2aWdhdGUoXCIvY29ubmVjdFwiKTtcclxuICB9O1xyXG4gIGxldCB7IHBhdGgsIHVybCB9ID0gdXNlTmF2aWdhdGUoKTtcclxuICBjb25zb2xlLmxvZyhwYXRoKTtcclxuXHJcbiAgY29uc3QgZ29Ub1JlcHBvcnQgPSAoKSA9PiB7XHJcbiAgICBoaXN0b3J5LnB1c2goXCIvZ29hbHNcIik7XHJcbiAgICBjb25zb2xlLmxvZyhcInRlc3RcIik7XHJcbiAgfTtcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIHNldFJlcG9ydE1lZXQodHJ1ZSk7XHJcbiAgICBzZXRSZXBvcnRDYWxscyhmYWxzZSk7XHJcbiAgICBzZXRSZXBvcnRHb2FscyhmYWxzZSk7XHJcbiAgfSwgW10pO1xyXG5cclxuICBjb25zdCBvbkNsaWNrUmVwcG9ydE1lZXQgPSAoKSA9PiB7XHJcbiAgICBzZXRSZXBvcnRNZWV0KHRydWUpO1xyXG4gICAgc2V0UmVwb3J0Q2FsbHMoZmFsc2UpO1xyXG4gICAgc2V0UmVwb3J0R29hbHMoZmFsc2UpO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IG9uQ2xpY2tSZXBwb3J0Q2FsbHMgPSAoKSA9PiB7XHJcbiAgICBzZXRSZXBvcnRNZWV0KGZhbHNlKTtcclxuICAgIHNldFJlcG9ydENhbGxzKHRydWUpO1xyXG4gICAgc2V0UmVwb3J0R29hbHMoZmFsc2UpO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IG9uQ2xpY2tSZXBwb3J0R29hbHMgPSAoKSA9PiB7XHJcbiAgICBzZXRSZXBvcnRNZWV0KGZhbHNlKTtcclxuICAgIHNldFJlcG9ydENhbGxzKGZhbHNlKTtcclxuICAgIHNldFJlcG9ydEdvYWxzKHRydWUpO1xyXG4gIH07XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8PlxyXG4gICAgICA8TWVudSAvPlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lci1ob21lIHJvdyBtLTBcIj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1zbS02IGQtZmxleCBhbGlnbi1pdGVtcy1jZW50ZXIganVzdGlmeS1jb250ZW50LWNlbnRlclwiPlxyXG4gICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgPGgzPkJpZW52ZW51ZSBzdXIgTcOpdGlzPC9oMz5cclxuICAgICAgICAgICAgPHA+Q2xpcXVleiBpY2kgcG91ciB2b3MgcmFwcGVscyBvdSDDqWRpdGVyIHVuIHBhdGllbnQ6PC9wPlxyXG5cclxuICAgICAgICAgICAgPExpbmsgb25DbGljaz17b25DbGlja1JlcHBvcnRNZWV0fT5cclxuICAgICAgICAgICAgICA8Rm9udEF3ZXNvbWVJY29uIGljb249e2ZhQXJyb3dSaWdodH0gLz4gUmFwcG9ydCBkZSByZW5jb250cmVcclxuICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICA8TGluayBvbkNsaWNrPXtvbkNsaWNrUmVwcG9ydENhbGxzfT5cclxuICAgICAgICAgICAgICA8Rm9udEF3ZXNvbWVJY29uIGljb249e2ZhQXJyb3dSaWdodH0gLz4gUmFwcG9ydCBkJ2FwcGVsc1xyXG4gICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgIDxMaW5rIG9uQ2xpY2s9e29uQ2xpY2tSZXBwb3J0R29hbHN9PlxyXG4gICAgICAgICAgICAgIDxGb250QXdlc29tZUljb24gaWNvbj17ZmFBcnJvd1JpZ2h0fSAvPiBSYXBwb3J0IGQnb2JqZWN0aWZzXHJcbiAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1zbS02IGQtZmxleCBhbGlnbi1pdGVtcy1jZW50ZXIganVzdGlmeS1jb250ZW50LWNlbnRlciBjb250YWluZXItcmVwcG9ydHNcIj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2V0LXJlcHBvcnRzXCI+XHJcbiAgICAgICAgICAgIHtyZXBvcnRNZWV0ICYmIDxGb3JtX01lZXRSYXBwb3J0cyAvPn1cclxuICAgICAgICAgICAge3JlcG9ydENhbGxzICYmIDxSZXBwb3J0R29hbHMgLz59XHJcbiAgICAgICAgICAgIHtyZXBvcnRHb2FscyAmJiA8UmVwcG9ydENhbGxzIC8+fVxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC8+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IEhvbWU7XHJcbiIsImltcG9ydCBSZWFjdCwgeyB1c2VDb250ZXh0LCB1c2VEZWJ1Z1ZhbHVlIH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IE91dGxldCB9IGZyb20gXCJyZWFjdC1yb3V0ZXItZG9tXCI7XHJcbmltcG9ydCBNZW51IGZyb20gXCIuL01lbnVcIjtcclxuY29uc3QgTGF5b3V0ID0gKCkgPT4ge1xyXG4gIHJldHVybiAoXHJcbiAgICA8bWFpbiBjbGFzc05hbWU9XCJBcHBcIj5cclxuICAgICAgPE91dGxldCAvPlxyXG4gICAgPC9tYWluPlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBMYXlvdXQ7XHJcbiIsImltcG9ydCB7IExpbmsgfSBmcm9tIFwicmVhY3Qtcm91dGVyLWRvbVwiO1xyXG5cclxuY29uc3QgTGlua1BhZ2UgPSAoKSA9PiB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxzZWN0aW9uPlxyXG4gICAgICA8aDE+TGlua3M8L2gxPlxyXG4gICAgICA8YnIgLz5cclxuICAgICAgPGgyPlB1YmxpYzwvaDI+XHJcbiAgICAgIDxMaW5rIHRvPVwiL2xvZ2luXCI+TG9naW48L0xpbms+XHJcbiAgICAgIDxMaW5rIHRvPVwiL3JlZ2lzdGVyXCI+UmVnaXN0ZXI8L0xpbms+XHJcbiAgICAgIDxiciAvPlxyXG4gICAgICA8aDI+UHJpdmF0ZTwvaDI+XHJcbiAgICAgIDxMaW5rIHRvPVwiL1wiPkhvbWU8L0xpbms+XHJcbiAgICAgIDxMaW5rIHRvPVwiL2VkaXRvclwiPkVkaXRvcnMgUGFnZTwvTGluaz5cclxuICAgICAgPExpbmsgdG89XCIvYWRtaW5cIj5BZG1pbiBQYWdlPC9MaW5rPlxyXG4gICAgPC9zZWN0aW9uPlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBMaW5rUGFnZTtcclxuIiwiaW1wb3J0IFJlYWN0LCB7IHVzZUNvbnRleHQsIHVzZURlYnVnVmFsdWUgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgdXNlUmVmLCB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB1c2VBdXRoIGZyb20gXCIuLi9ob29rcy91c2VBdXRoXCI7XHJcbmltcG9ydCB7IExpbmssIHVzZU5hdmlnYXRlLCB1c2VMb2NhdGlvbiB9IGZyb20gXCJyZWFjdC1yb3V0ZXItZG9tXCI7XHJcblxyXG5pbXBvcnQgYXhpb3MgZnJvbSBcImF4aW9zXCI7XHJcbmNvbnN0IExPR0lOX1VSTCA9IFwiL2xvZ2luXCI7XHJcblxyXG5jb25zdCBMb2dpbiA9ICgpID0+IHtcclxuICBjb25zdCB7IHNldEF1dGgsIHBlcnNpc3QsIHNldFBlcnNpc3QgfSA9IHVzZUF1dGgoKTtcclxuXHJcbiAgY29uc3QgbmF2aWdhdGUgPSB1c2VOYXZpZ2F0ZSgpO1xyXG4gIGNvbnN0IGxvY2F0aW9uID0gdXNlTG9jYXRpb24oKTtcclxuICBjb25zdCBmcm9tID0gbG9jYXRpb24uc3RhdGU/LmZyb20/LnBhdGhuYW1lIHx8IFwiL1wiO1xyXG5cclxuICBjb25zdCB1c2VyUmVmID0gdXNlUmVmKCk7XHJcbiAgY29uc3QgZXJyUmVmID0gdXNlUmVmKCk7XHJcblxyXG4gIGNvbnN0IFtlbWFpbCwgc2V0VXNlcl0gPSB1c2VTdGF0ZShcIlwiKTtcclxuICBjb25zdCBbcGFzc3dvcmQsIHNldFB3ZF0gPSB1c2VTdGF0ZShcIlwiKTtcclxuICBjb25zdCBbZXJyTXNnLCBzZXRFcnJNc2ddID0gdXNlU3RhdGUoXCJcIik7XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICB1c2VyUmVmLmN1cnJlbnQuZm9jdXMoKTtcclxuICB9LCBbXSk7XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBzZXRFcnJNc2coXCJcIik7XHJcbiAgfSwgW2VtYWlsLCBwYXNzd29yZF0pO1xyXG5cclxuICBjb25zdCBoYW5kbGVTdWJtaXQgPSBhc3luYyAoZSkgPT4ge1xyXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cclxuICAgIHRyeSB7XHJcbiAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgYXhpb3MucG9zdChcclxuICAgICAgICBMT0dJTl9VUkwsXHJcbiAgICAgICAgSlNPTi5zdHJpbmdpZnkoeyBlbWFpbCwgcGFzc3dvcmQgfSksXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgaGVhZGVyczoge1xyXG4gICAgICAgICAgICBcIkNvbnRlbnQtVHlwZVwiOiBcImFwcGxpY2F0aW9uL2pzb25cIixcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgfVxyXG4gICAgICApO1xyXG5cclxuICAgICAgY29uc3QgYWNjZXNzVG9rZW4gPSByZXNwb25zZS5kYXRhLnRva2VuO1xyXG4gICAgICBjb25zdCB0b2tlbiA9IGF3YWl0IGF4aW9zLmdldChcIi9hcGkvdG9rZW4vcmVmcmVzaFwiLCB7XHJcbiAgICAgICAgd2l0aENyZWRlbnRpYWxzOiB0cnVlLFxyXG4gICAgICB9KTtcclxuXHJcbiAgICAgIGNvbnN0IHJvbGVzX3VzZWQgPSBhd2FpdCBheGlvcy5nZXQoXCIvYXBpL2dldFVzZXJcIiwge1xyXG4gICAgICAgIGhlYWRlcnM6IHsgQXV0aG9yaXphdGlvbjogYEJlYXJlciAke3Rva2VuLmRhdGEudG9rZW59YCB9LFxyXG4gICAgICB9KTtcclxuXHJcbiAgICAgIGNvbnN0IHJvbGVzID0gcm9sZXNfdXNlZD8uZGF0YT8ucm9sZU5hbWVzO1xyXG5cclxuICAgICAgaWYgKHJvbGVzLmxlbmd0aCA+IDApIHtcclxuICAgICAgICBzZXRBdXRoKHsgZW1haWwsIHBhc3N3b3JkLCByb2xlcywgYWNjZXNzVG9rZW4gfSk7XHJcbiAgICAgICAgc2V0VXNlcihcIlwiKTtcclxuICAgICAgICBzZXRQd2QoXCJcIik7XHJcbiAgICAgICAgbmF2aWdhdGUoZnJvbSwgeyByZXBsYWNlOiB0cnVlIH0pO1xyXG4gICAgICB9XHJcbiAgICB9IGNhdGNoIChlcnIpIHtcclxuICAgICAgaWYgKCFlcnI/LnJlc3BvbnNlKSB7XHJcbiAgICAgICAgc2V0RXJyTXNnKFwiTm8gU2VydmVyIFJlc3BvbnNlXCIpO1xyXG4gICAgICB9IGVsc2UgaWYgKGVyci5yZXNwb25zZT8uc3RhdHVzID09PSA0MDApIHtcclxuICAgICAgICBzZXRFcnJNc2coXCJNaXNzaW5nIFVzZXJuYW1lIG9yIFBhc3N3b3JkXCIpO1xyXG4gICAgICB9IGVsc2UgaWYgKGVyci5yZXNwb25zZT8uc3RhdHVzID09PSA0MDEpIHtcclxuICAgICAgICBzZXRFcnJNc2coXCJVbmF1dGhvcml6ZWRcIik7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgc2V0RXJyTXNnKFwiTG9naW4gRmFpbGVkXCIpO1xyXG4gICAgICB9XHJcbiAgICAgIGVyclJlZi5jdXJyZW50LmZvY3VzKCk7XHJcbiAgICB9XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgdG9nZ2xlUGVyc2lzdCA9ICgpID0+IHtcclxuICAgIHNldFBlcnNpc3QoKHByZXYpID0+ICFwcmV2KTtcclxuICB9O1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJwZXJzaXN0XCIsIHBlcnNpc3QpO1xyXG4gIH0sIFtwZXJzaXN0XSk7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lci1sb2dpbiByb3cgbS0wXCI+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLXNtLTYgY29sdW1uLXRpdGxlICBkLWZsZXgganVzdGlmeS1jb250ZW50LWNlbnRlciBhbGlnbi1pdGVtcy1jZW50ZXJcIj5cclxuICAgICAgICA8aDE+TcOpdGlzPC9oMT5cclxuICAgICAgPC9kaXY+XHJcblxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1zbS02IGNvbHVtbi1jb250ZW50ICBkLWZsZXgganVzdGlmeS1jb250ZW50LWNlbnRlciBhbGlnbi1pdGVtcy1jZW50ZXJcIj5cclxuICAgICAgICA8Zm9ybSBvblN1Ym1pdD17aGFuZGxlU3VibWl0fT5cclxuICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICB0eXBlPVwidGV4dFwiXHJcbiAgICAgICAgICAgIGlkPVwidXNlcm5hbWVcIlxyXG4gICAgICAgICAgICAvLyBjbGFzc05hbWU9XCJteS00XCJcclxuICAgICAgICAgICAgcmVmPXt1c2VyUmVmfVxyXG4gICAgICAgICAgICBwbGFjZWhvbGRlcj1cIlRhcGV6IHZvdHJlIHV0aWxpc2F0ZXVyXCJcclxuICAgICAgICAgICAgYXV0b0NvbXBsZXRlPVwib2ZmXCJcclxuICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBzZXRVc2VyKGUudGFyZ2V0LnZhbHVlKX1cclxuICAgICAgICAgICAgdmFsdWU9e2VtYWlsfVxyXG4gICAgICAgICAgICByZXF1aXJlZFxyXG4gICAgICAgICAgLz5cclxuXHJcbiAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgdHlwZT1cInBhc3N3b3JkXCJcclxuICAgICAgICAgICAgY2xhc3NOYW1lPVwibXktNFwiXHJcbiAgICAgICAgICAgIGlkPVwicGFzc3dvcmRcIlxyXG4gICAgICAgICAgICBwbGFjZWhvbGRlcj1cIlRhcGV6IHZvdHJlIG1vdCBkZSBwYXNzZVwiXHJcbiAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gc2V0UHdkKGUudGFyZ2V0LnZhbHVlKX1cclxuICAgICAgICAgICAgdmFsdWU9e3Bhc3N3b3JkfVxyXG4gICAgICAgICAgICByZXF1aXJlZFxyXG4gICAgICAgICAgLz5cclxuICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwiYnRuLW1ldGlzXCI+U2lnbiBJbjwvYnV0dG9uPlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwZXJzaXN0Q2hlY2sgIGQtZmxleCBqdXN0aWZ5LWNvbnRlbnQtc3RhcnQgYWxpZ24taXRlbXMtY2VudGVyIG10LTRcIj5cclxuICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgdHlwZT1cImNoZWNrYm94XCJcclxuICAgICAgICAgICAgICBpZD1cInBlcnNpc3RcIlxyXG4gICAgICAgICAgICAgIG9uQ2hhbmdlPXt0b2dnbGVQZXJzaXN0fVxyXG4gICAgICAgICAgICAgIGNoZWNrZWQ9e3BlcnNpc3R9XHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwicGVyc2lzdFwiPlRydXN0IFRoaXMgRGV2aWNlPC9sYWJlbD5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZm9ybT5cclxuICAgICAgICA8cFxyXG4gICAgICAgICAgcmVmPXtlcnJSZWZ9XHJcbiAgICAgICAgICBjbGFzc05hbWU9e2Vyck1zZyA/IFwiZXJybXNnXCIgOiBcIm9mZnNjcmVlblwifVxyXG4gICAgICAgICAgYXJpYS1saXZlPVwiYXNzZXJ0aXZlXCJcclxuICAgICAgICA+XHJcbiAgICAgICAgICB7ZXJyTXNnfVxyXG4gICAgICAgIDwvcD5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgTG9naW47XHJcbiIsImltcG9ydCB7IExpbmsgfSBmcm9tIFwicmVhY3Qtcm91dGVyLWRvbVwiO1xyXG5cclxuY29uc3QgTG91bmdlID0gKCkgPT4ge1xyXG4gIHJldHVybiAoXHJcbiAgICA8c2VjdGlvbj5cclxuICAgICAgPGgxPlRoZSBMb3VuZ2U8L2gxPlxyXG4gICAgICA8YnIgLz5cclxuICAgICAgPHA+QWRtaW5zIGFuZCBFZGl0b3JzIGNhbiBoYW5nIG91dCBoZXJlLjwvcD5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4R3Jvd1wiPlxyXG4gICAgICAgIDxMaW5rIHRvPVwiL1wiPkhvbWU8L0xpbms+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9zZWN0aW9uPlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBMb3VuZ2U7XHJcbiIsImltcG9ydCBSZWFjdCwgeyB1c2VDb250ZXh0LCB1c2VEZWJ1Z1ZhbHVlIH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IHVzZU5hdmlnYXRlLCBMaW5rIH0gZnJvbSBcInJlYWN0LXJvdXRlci1kb21cIjtcclxuaW1wb3J0IEJ1dHRvbiBmcm9tIFwicmVhY3QtYm9vdHN0cmFwL0J1dHRvblwiO1xyXG5pbXBvcnQgQ29udGFpbmVyIGZyb20gXCJyZWFjdC1ib290c3RyYXAvQ29udGFpbmVyXCI7XHJcbmltcG9ydCB7IEZvbnRBd2Vzb21lSWNvbiB9IGZyb20gXCJAZm9ydGF3ZXNvbWUvcmVhY3QtZm9udGF3ZXNvbWVcIjtcclxuaW1wb3J0IHsgZmFTaWduT3V0IH0gZnJvbSBcIkBmb3J0YXdlc29tZS9mcmVlLXNvbGlkLXN2Zy1pY29uc1wiO1xyXG5pbXBvcnQgdXNlTG9nb3V0IGZyb20gXCIuLi9ob29rcy91c2VMb2dvdXRcIjtcclxuaW1wb3J0IEZvcm0gZnJvbSBcInJlYWN0LWJvb3RzdHJhcC9Gb3JtXCI7XHJcbmltcG9ydCBOYXYgZnJvbSBcInJlYWN0LWJvb3RzdHJhcC9OYXZcIjtcclxuaW1wb3J0IE5hdmJhciBmcm9tIFwicmVhY3QtYm9vdHN0cmFwL05hdmJhclwiO1xyXG5pbXBvcnQgTmF2RHJvcGRvd24gZnJvbSBcInJlYWN0LWJvb3RzdHJhcC9OYXZEcm9wZG93blwiO1xyXG5pbXBvcnQgT2ZmY2FudmFzIGZyb20gXCJyZWFjdC1ib290c3RyYXAvT2ZmY2FudmFzXCI7XHJcbmltcG9ydCBTZWFyY2ggZnJvbSBcIi4vU2VhcmNoXCI7XHJcblxyXG5jb25zdCBNZW51ID0gKCkgPT4ge1xyXG4gIGNvbnN0IGxvZ291dCA9IHVzZUxvZ291dCgpO1xyXG5cclxuICBjb25zdCBzaWduT3V0ID0gYXN5bmMgKCkgPT4ge1xyXG4gICAgYXdhaXQgbG9nb3V0KCk7XHJcbiAgICBuYXZpZ2F0ZShcIi9jb25uZWN0XCIpO1xyXG4gIH07XHJcbiAgcmV0dXJuIChcclxuICAgIDw+XHJcbiAgICAgIDxOYXZiYXJcclxuICAgICAgICBjb2xsYXBzZU9uU2VsZWN0XHJcbiAgICAgICAgc3R5bGU9e3sgYmFja2dyb3VuZENvbG9yOiBcIiM5MWJkMTBcIiB9fVxyXG4gICAgICAgIGV4cGFuZD1cInh4bFwiXHJcbiAgICAgICAgY2xhc3NOYW1lPVwibWItMyBtZW51LW1ldGlzXCJcclxuICAgICAgICB2YXJpYW50PVwiZGFya1wiXHJcbiAgICAgID5cclxuICAgICAgICA8Q29udGFpbmVyIGZsdWlkPlxyXG4gICAgICAgICAgPE5hdmJhci5CcmFuZCBocmVmPVwiL1wiPlxyXG4gICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJ0ZXh0LXVwcGVyY2FzZSB0ZXh0LXdoaXRlXCI+TcOpdGlzPC9zcGFuPlxyXG4gICAgICAgICAgPC9OYXZiYXIuQnJhbmQ+XHJcbiAgICAgICAgICA8TmF2YmFyLlRvZ2dsZSBhcmlhLWNvbnRyb2xzPVwicmVzcG9uc2l2ZS1uYXZiYXItbmF2XCIgLz5cclxuICAgICAgICAgIDxOYXZiYXIuQ29sbGFwc2UgaWQ9XCJyZXNwb25zaXZlLW5hdmJhci1uYXZcIj5cclxuICAgICAgICAgICAgPE5hdiBjbGFzc05hbWU9XCJqdXN0aWZ5LWNvbnRlbnQtZW5kIGZsZXgtZ3Jvdy0xIHBlLTNcIj5cclxuICAgICAgICAgICAgICB7LyogPExpbmsgdG89XCIvYWRtaW5cIj5HbyB0byB0aGUgQWRtaW4gcGFnZTwvTGluaz4gKi99XHJcblxyXG4gICAgICAgICAgICAgIDxOYXYuTGluayBocmVmPVwiL3BhdGllbnRzXCI+UGF0aWVudHM8L05hdi5MaW5rPlxyXG4gICAgICAgICAgICAgIDxOYXZEcm9wZG93blxyXG4gICAgICAgICAgICAgICAgdGl0bGU9XCJBcHBlbHNcIlxyXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidGV4dC13aGl0ZVwiXHJcbiAgICAgICAgICAgICAgICBpZD17YG9mZmNhbnZhc05hdmJhckRyb3Bkb3duLWV4cGFuZC0ke1wieGxcIn1gfVxyXG4gICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIDxOYXZEcm9wZG93bi5JdGVtIGhyZWY9XCIjYWN0aW9uM1wiPlRvdXM8L05hdkRyb3Bkb3duLkl0ZW0+XHJcbiAgICAgICAgICAgICAgICA8TmF2RHJvcGRvd24uSXRlbSBocmVmPVwiI2FjdGlvbjRcIj5cclxuICAgICAgICAgICAgICAgICAgVXRpbGlzYXRldXJzXHJcbiAgICAgICAgICAgICAgICA8L05hdkRyb3Bkb3duLkl0ZW0+XHJcbiAgICAgICAgICAgICAgPC9OYXZEcm9wZG93bj5cclxuICAgICAgICAgICAgICA8TmF2RHJvcGRvd25cclxuICAgICAgICAgICAgICAgIHRpdGxlPVwiQWRtaW5pc3RyYXRpb25cIlxyXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidGV4dC13aGl0ZVwiXHJcbiAgICAgICAgICAgICAgICBpZD17YG9mZmNhbnZhc05hdmJhckRyb3Bkb3duLWV4cGFuZC0ke1wieGxcIn1gfVxyXG4gICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIDxOYXZEcm9wZG93bi5JdGVtIGhyZWY9XCIjYWN0aW9uM1wiPlRvdXM8L05hdkRyb3Bkb3duLkl0ZW0+XHJcbiAgICAgICAgICAgICAgICA8TmF2RHJvcGRvd24uSXRlbSBocmVmPVwiI2FjdGlvbjRcIj5cclxuICAgICAgICAgICAgICAgICAgQ29udGFjdC9PcmdhbmlzYXRpb25cclxuICAgICAgICAgICAgICAgIDwvTmF2RHJvcGRvd24uSXRlbT5cclxuICAgICAgICAgICAgICA8L05hdkRyb3Bkb3duPlxyXG4gICAgICAgICAgICAgIDxOYXYuTGluayBvbkNsaWNrPXtzaWduT3V0fT5cclxuICAgICAgICAgICAgICAgIDxGb250QXdlc29tZUljb24gaWNvbj17ZmFTaWduT3V0fSAvPntcIiBcIn1cclxuICAgICAgICAgICAgICA8L05hdi5MaW5rPlxyXG4gICAgICAgICAgICA8L05hdj5cclxuICAgICAgICAgICAgPFNlYXJjaD48L1NlYXJjaD5cclxuICAgICAgICAgICAgey8qIDxGb3JtIGNsYXNzTmFtZT1cImQtZmxleFwiPlxyXG4gICAgICAgICAgICAgIDxGb3JtLkNvbnRyb2xcclxuICAgICAgICAgICAgICAgIHR5cGU9XCJzZWFyY2hcIlxyXG4gICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJTZWFyY2hcIlxyXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwibWUtMlwiXHJcbiAgICAgICAgICAgICAgICBhcmlhLWxhYmVsPVwiU2VhcmNoXCJcclxuICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8L0Zvcm0+ICovfVxyXG4gICAgICAgICAgPC9OYXZiYXIuQ29sbGFwc2U+XHJcbiAgICAgICAgPC9Db250YWluZXI+XHJcbiAgICAgIDwvTmF2YmFyPlxyXG4gICAgPC8+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IE1lbnU7XHJcbiIsImltcG9ydCBSZWFjdCwgeyB1c2VDb250ZXh0LCB1c2VEZWJ1Z1ZhbHVlIH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IExpbmsgfSBmcm9tIFwicmVhY3Qtcm91dGVyLWRvbVwiO1xyXG5cclxuY29uc3QgTWlzc2luZyA9ICgpID0+IHtcclxuICByZXR1cm4gKFxyXG4gICAgPGFydGljbGUgc3R5bGU9e3sgcGFkZGluZzogXCIxMDBweFwiIH19PlxyXG4gICAgICA8aDE+T29wcyE8L2gxPlxyXG4gICAgICA8cD5QYWdlIE5vdCBGb3VuZDwvcD5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4R3Jvd1wiPlxyXG4gICAgICAgIDxMaW5rIHRvPVwiL1wiPlZpc2l0IE91ciBIb21lcGFnZTwvTGluaz5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L2FydGljbGU+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IE1pc3Npbmc7XHJcbiIsImltcG9ydCBSZWFjdCwgeyB1c2VDb250ZXh0LCB1c2VEZWJ1Z1ZhbHVlLCB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IExpbmssIHVzZU5hdmlnYXRlLCB1c2VMb2NhdGlvbiB9IGZyb20gXCJyZWFjdC1yb3V0ZXItZG9tXCI7XHJcbmltcG9ydCBVc2VycyBmcm9tIFwiLi9Vc2Vyc1wiO1xyXG5pbXBvcnQgTWVudSBmcm9tIFwiLi9NZW51XCI7XHJcbmltcG9ydCBsb2dvUGF0aCBmcm9tIFwiLi4vaW1hZ2VzLzVhOTRlMzRiNGMzNmUyOGRlNGU3MDRmOGMyZDFjMzlhNzllOTFiNWQucG5nXCI7XHJcbmltcG9ydCBheGlvcyBmcm9tIFwiYXhpb3NcIjtcclxuaW1wb3J0IHsgdXNlUGFyYW1zIH0gZnJvbSBcInJlYWN0LXJvdXRlci1kb21cIjtcclxuaW1wb3J0IHVzZUF1dGggZnJvbSBcIi4uL2hvb2tzL3VzZUF1dGhcIjtcclxuaW1wb3J0IFRhYiBmcm9tIFwicmVhY3QtYm9vdHN0cmFwL1RhYlwiO1xyXG5pbXBvcnQgVGFicyBmcm9tIFwicmVhY3QtYm9vdHN0cmFwL1RhYnNcIjtcclxuaW1wb3J0IEZpY2hlIGZyb20gXCIuL1Byb2ZpbGUvRmljaGVcIjtcclxuXHJcbmNvbnN0IFBhdGllbnQgPSAoKSA9PiB7XHJcbiAgbGV0IGlkID0gdXNlUGFyYW1zKCkuaWQ7XHJcbiAgbGV0IGJhY2tncm91bmRJbWFnZSA9XHJcbiAgICBcIi4uL2ltYWdlcy81YTk0ZTM0YjRjMzZlMjhkZTRlNzA0ZjhjMmQxYzM5YTc5ZTkxYjVkLnBuZ1wiO1xyXG4gIGNvbnN0IFthdXRoLCBzZXRBdXRoXSA9IHVzZVN0YXRlKHVzZUF1dGgoKSk7XHJcbiAgY29uc3QgW3BhdGllbnQsIHNldFBhdGllbnRdID0gdXNlU3RhdGUobnVsbCk7XHJcbiAgY29uc3QgW2ltZ1BhdGllbnQsIHNldEltZ1BhdGllbnRdID0gdXNlU3RhdGUobnVsbCk7XHJcbiAgY29uc3QgW2tleSwgc2V0S2V5XSA9IHVzZVN0YXRlKFwiZmljaGVcIik7XHJcbiAgY29uc3QgW2lkUGF0aWVudCwgc2V0SWRQYXRpZW50XSA9IHVzZVN0YXRlKGlkKTtcclxuICBjb25zdCBuYXZpZ2F0ZSA9IHVzZU5hdmlnYXRlKCk7XHJcbiAgY29uc3QgbG9jYXRpb24gPSB1c2VMb2NhdGlvbigpO1xyXG4gIGNvbnN0IFtsb2NhdGlvbldlYiwgc2V0TG9jYXRpb25dID0gdXNlU3RhdGUobG9jYXRpb24pO1xyXG5cclxuICB2YXIgZm9ybURhdGEgPSBuZXcgRm9ybURhdGEoKTtcclxuICBmb3JtRGF0YS5hcHBlbmQoXCJpZFwiLCBpZC50b1N0cmluZygpKTtcclxuXHJcbiAgbGV0IG9ialBhdGllbnQgPSB7fTtcclxuXHJcbiAgY29uc29sZS5sb2coaWRQYXRpZW50KTtcclxuXHJcbiAgaWYgKCFpZFBhdGllbnQpIHtcclxuICB9XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBheGlvcyh7XHJcbiAgICAgIG1ldGhvZDogXCJwb3N0XCIsXHJcbiAgICAgIHVybDogXCIvYXBpL2dldFBhdGllbnRcIixcclxuICAgICAgZGF0YTogZm9ybURhdGEsXHJcbiAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICBcIkNvbnRlbnQtVHlwZVwiOiBcImFwcGxpY2F0aW9uL2pzb25cIixcclxuICAgICAgICBBdXRob3JpemF0aW9uOiBgQmVhcmVyICR7YXV0aC5hdXRoLmFjY2Vzc1Rva2VufWAsXHJcbiAgICAgIH0sXHJcbiAgICB9KVxyXG4gICAgICAudGhlbihmdW5jdGlvbiAocmVzcG9uc2UpIHtcclxuICAgICAgICAvL2hhbmRsZSBzdWNjZXNzXHJcbiAgICAgICAgb2JqUGF0aWVudC5wYXRpZW50ID0gcmVzcG9uc2UuZGF0YTtcclxuICAgICAgICAvLyBzZXRQYXRpZW50KHJlc3BvbnNlLmRhdGEpO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKHJlc3BvbnNlKTtcclxuICAgICAgICBzZXRQYXRpZW50KHJlc3BvbnNlLmRhdGEpO1xyXG4gICAgICAgIGF4aW9zKHtcclxuICAgICAgICAgIG1ldGhvZDogXCJwb3N0XCIsXHJcbiAgICAgICAgICB1cmw6IFwiL2FwaS9nZXRNZWRpYUZvclBhdGllbnRcIixcclxuICAgICAgICAgIGRhdGE6IGZvcm1EYXRhLFxyXG4gICAgICAgICAgaGVhZGVyczoge1xyXG4gICAgICAgICAgICBcIkNvbnRlbnQtVHlwZVwiOiBcImFwcGxpY2F0aW9uL2pzb25cIixcclxuICAgICAgICAgICAgQXV0aG9yaXphdGlvbjogYEJlYXJlciAke2F1dGguYXV0aC5hY2Nlc3NUb2tlbn1gLFxyXG4gICAgICAgICAgfSxcclxuICAgICAgICB9KVxyXG4gICAgICAgICAgLnRoZW4oZnVuY3Rpb24gKHJlc3BvbnNlKSB7XHJcbiAgICAgICAgICAgIC8vaGFuZGxlIHN1Y2Nlc3NcclxuICAgICAgICAgICAgLy8gc2V0UGF0aWVudChyZXNwb25zZS5kYXRhKTtcclxuICAgICAgICAgICAgY29uc29sZS5sb2cocmVzcG9uc2UpO1xyXG4gICAgICAgICAgICBsZXQgYmFja2dyb3VuZEltYWdlID0gcmVzcG9uc2UuaW1hZ2U7XHJcbiAgICAgICAgICAgIHNldEltZ1BhdGllbnQocmVzcG9uc2UuZGF0YSk7XHJcbiAgICAgICAgICAgIC8vIHNldFBhdGllbnQocmVzcG9uc2UuZGF0YSk7XHJcbiAgICAgICAgICB9KVxyXG4gICAgICAgICAgLmNhdGNoKGZ1bmN0aW9uIChyZXNwb25zZSkge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhyZXNwb25zZSk7XHJcbiAgICAgICAgICB9KTtcclxuICAgICAgfSlcclxuICAgICAgLmNhdGNoKGZ1bmN0aW9uIChyZXNwb25zZSkge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKHJlc3BvbnNlKTtcclxuICAgICAgfSk7XHJcbiAgfSwgW2lkUGF0aWVudF0pO1xyXG5cclxuICBjb25zb2xlLmxvZyhvYmpQYXRpZW50LCBpbWdQYXRpZW50KTtcclxuICAvLyBcIi4uL2J1aWxkL2ltYWdlcy81YTk0ZTM0YjRjMzZlMjhkZTRlNzA0ZjhjMmQxYzM5YTc5ZTkxYjVkLnBuZ1wiXHJcbiAgcmV0dXJuIChcclxuICAgIDw+XHJcbiAgICAgIDxNZW51PjwvTWVudT5cclxuXHJcbiAgICAgIHtwYXRpZW50ICE9PSBudWxsICYmIChcclxuICAgICAgICA8c2VjdGlvbj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyIGVtcC1wcm9maWxlXCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93IHByb2ZpbGUtaGVhZFwiPlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLXNtLTJcIj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHJvZmlsZS1pbWdcIj5cclxuICAgICAgICAgICAgICAgICAge2ltZ1BhdGllbnQgJiZcclxuICAgICAgICAgICAgICAgICAgICBpbWdQYXRpZW50ICE9PSBudWxsICYmXHJcbiAgICAgICAgICAgICAgICAgICAgT2JqZWN0LmtleXMoaW1nUGF0aWVudCkubGVuZ3RoID4gMCAmJiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICA8PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz17aW1nUGF0aWVudC5pbWFnZX0gLz47XHJcbiAgICAgICAgICAgICAgICAgICAgICA8Lz5cclxuICAgICAgICAgICAgICAgICAgICApfVxyXG5cclxuICAgICAgICAgICAgICAgICAge2ltZ1BhdGllbnQgJiZcclxuICAgICAgICAgICAgICAgICAgICBpbWdQYXRpZW50ID09PSBudWxsICYmXHJcbiAgICAgICAgICAgICAgICAgICAgT2JqZWN0LmtleXMoaW1nUGF0aWVudCkubGVuZ3RoID4gMCAmJiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICA8PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz1cImh0dHBzOi8vdWNyZWF0ZS5jaC93cC1jb250ZW50L3VwbG9hZHMvMjAyMi8wMi9wcm9maWxfdmlkZS5qcGdcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA7XHJcbiAgICAgICAgICAgICAgICAgICAgICA8Lz5cclxuICAgICAgICAgICAgICAgICAgICApfVxyXG5cclxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmaWxlIGJ0biBidG4tbGcgYnRuLXByaW1hcnlcIj5cclxuICAgICAgICAgICAgICAgICAgICBDaGFuZ2UgUGhvdG9cclxuICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cImZpbGVcIiBuYW1lPVwiZmlsZVwiIC8+XHJcbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtc20tNlwiPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwcm9maWxlLWhlYWRcIj5cclxuICAgICAgICAgICAgICAgICAgPGg1PlxyXG4gICAgICAgICAgICAgICAgICAgIHtwYXRpZW50LmZpcnN0bmFtZX0ge3BhdGllbnQubGFzdG5hbWV9XHJcbiAgICAgICAgICAgICAgICAgIDwvaDU+XHJcbiAgICAgICAgICAgICAgICAgIDxoNj4ge25ldyBEYXRlKHBhdGllbnQuYmlydGhkYXRlKS50b0xvY2FsZURhdGVTdHJpbmcoKX08L2g2PlxyXG4gICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJwcm9pbGUtcmF0aW5nXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgUHJlbWllciBjb250YWN0IDp7XCIgXCJ9XHJcbiAgICAgICAgICAgICAgICAgICAgPHNwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICB7XCIgXCJ9XHJcbiAgICAgICAgICAgICAgICAgICAgICB7bmV3IERhdGUocGF0aWVudC5maXJzdENvbnRhY3REYXRlKS50b0xvY2FsZURhdGVTdHJpbmcoKX1cclxuICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3cgYm9keS1wcm9maWxlXCI+XHJcbiAgICAgICAgICAgICAgPFRhYnNcclxuICAgICAgICAgICAgICAgIGRlZmF1bHRBY3RpdmVLZXk9XCJwcm9maWxlXCJcclxuICAgICAgICAgICAgICAgIGlkPVwidW5jb250cm9sbGVkLXRhYi1leGFtcGxlXCJcclxuICAgICAgICAgICAgICAgIGFjdGl2ZUtleT17a2V5fVxyXG4gICAgICAgICAgICAgICAgb25TZWxlY3Q9eyhrKSA9PiBzZXRLZXkoayl9XHJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJwcm9maWxlLXRhYlwiXHJcbiAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgPFRhYiBldmVudEtleT1cImZpY2hlXCIgdGl0bGU9XCJGaWNoZVwiPlxyXG4gICAgICAgICAgICAgICAgICA8RmljaGUgLz5cclxuICAgICAgICAgICAgICAgIDwvVGFiPlxyXG4gICAgICAgICAgICAgICAgPFRhYiBldmVudEtleT1cInN1aXZpXCIgdGl0bGU9XCJQcm9maWxlXCIgZGlzYWJsZWQ+XHJcbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLW1kLTRcIj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInByb2ZpbGUtd29ya1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPHA+QWN0aXZpdMOpZTwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgIHsvKiA8YSBocmVmPVwiXCI+V2Vic2l0ZSBMaW5rPC9hPlxyXG4gICAgICAgICAgICAgICAgICAgIDxiciAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XCJcIj5Cb290c25pcHAgUHJvZmlsZTwvYT5cclxuICAgICAgICAgICAgICAgICAgICA8YnIgLz5cclxuICAgICAgICAgICAgICAgICAgICA8YSBocmVmPVwiXCI+Qm9vdHBseSBQcm9maWxlPC9hPlxyXG4gICAgICAgICAgICAgICAgICAgIDxwPlNLSUxMUzwvcD5cclxuICAgICAgICAgICAgICAgICAgICA8YSBocmVmPVwiXCI+V2ViIERlc2lnbmVyPC9hPlxyXG4gICAgICAgICAgICAgICAgICAgIDxiciAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XCJcIj5XZWIgRGV2ZWxvcGVyPC9hPlxyXG4gICAgICAgICAgICAgICAgICAgIDxiciAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XCJcIj5Xb3JkUHJlc3M8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgPGJyIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cIlwiPldvb0NvbW1lcmNlPC9hPlxyXG4gICAgICAgICAgICAgICAgICAgIDxiciAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XCJcIj5QSFAsIC5OZXQ8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgPGJyIC8+ICovfVxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHJvZmlsZS13b3JrXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8cD5PYmplY3RpZnM8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICB7LyogPGEgaHJlZj1cIlwiPldlYnNpdGUgTGluazwvYT5cclxuICAgICAgICAgICAgICAgICAgICA8YnIgLz5cclxuICAgICAgICAgICAgICAgICAgICA8YSBocmVmPVwiXCI+Qm9vdHNuaXBwIFByb2ZpbGU8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgPGJyIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cIlwiPkJvb3RwbHkgUHJvZmlsZTwvYT5cclxuICAgICAgICAgICAgICAgICAgICA8cD5TS0lMTFM8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cIlwiPldlYiBEZXNpZ25lcjwvYT5cclxuICAgICAgICAgICAgICAgICAgICA8YnIgLz5cclxuICAgICAgICAgICAgICAgICAgICA8YSBocmVmPVwiXCI+V2ViIERldmVsb3BlcjwvYT5cclxuICAgICAgICAgICAgICAgICAgICA8YnIgLz5cclxuICAgICAgICAgICAgICAgICAgICA8YSBocmVmPVwiXCI+V29yZFByZXNzPC9hPlxyXG4gICAgICAgICAgICAgICAgICAgIDxiciAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XCJcIj5Xb29Db21tZXJjZTwvYT5cclxuICAgICAgICAgICAgICAgICAgICA8YnIgLz5cclxuICAgICAgICAgICAgICAgICAgICA8YSBocmVmPVwiXCI+UEhQLCAuTmV0PC9hPlxyXG4gICAgICAgICAgICAgICAgICAgIDxiciAvPiAqL31cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L1RhYj5cclxuICAgICAgICAgICAgICAgIDxUYWIgZXZlbnRLZXk9XCJpbmRpY2F0ZXVyc1wiIHRpdGxlPVwiSW5kaWNhdGV1cnNcIiBkaXNhYmxlZD5cclxuICAgICAgICAgICAgICAgICAgPHA+dGVzdDM8L3A+XHJcbiAgICAgICAgICAgICAgICA8L1RhYj5cclxuICAgICAgICAgICAgICAgIDxUYWIgZXZlbnRLZXk9XCJtZWRpYXNcIiB0aXRsZT1cIk1lZGlhc1wiIGRpc2FibGVkPlxyXG4gICAgICAgICAgICAgICAgICA8cD50ZXN0MzwvcD5cclxuICAgICAgICAgICAgICAgIDwvVGFiPlxyXG4gICAgICAgICAgICAgICAgPFRhYiBldmVudEtleT1cInN0YXRpc3RpcXVlc1wiIHRpdGxlPVwiU3RhdGlzdGlxdWVzXCIgZGlzYWJsZWQ+XHJcbiAgICAgICAgICAgICAgICAgIDxwPnRlc3Q0PC9wPlxyXG4gICAgICAgICAgICAgICAgPC9UYWI+XHJcbiAgICAgICAgICAgICAgICA8VGFiIGV2ZW50S2V5PVwiY29udGFjdHNcIiB0aXRsZT1cIkNvbnRhY3RzXCIgZGlzYWJsZWQ+XHJcbiAgICAgICAgICAgICAgICAgIDxwPnRlc3Q1PC9wPlxyXG4gICAgICAgICAgICAgICAgPC9UYWI+XHJcbiAgICAgICAgICAgICAgICA8VGFiIGV2ZW50S2V5PVwibGlldXhcIiB0aXRsZT1cIkxpZXV4XCIgZGlzYWJsZWQ+XHJcbiAgICAgICAgICAgICAgICAgIDxwPnRlc3Q2PC9wPlxyXG4gICAgICAgICAgICAgICAgPC9UYWI+XHJcbiAgICAgICAgICAgICAgPC9UYWJzPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvc2VjdGlvbj5cclxuICAgICAgKX1cclxuICAgIDwvPlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBQYXRpZW50O1xyXG4iLCJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgYXhpb3MgZnJvbSBcImF4aW9zXCI7XHJcbmltcG9ydCBUYWJsZSBmcm9tIFwicmVhY3QtYm9vdHN0cmFwL1RhYmxlXCI7XHJcbmltcG9ydCBQZXJzaXN0TG9naW4gZnJvbSBcIi4vUGVyc2lzdExvZ2luXCI7XHJcbmltcG9ydCB1c2VBdXRoIGZyb20gXCIuLi9ob29rcy91c2VBdXRoXCI7XHJcbmltcG9ydCB7IEZvbnRBd2Vzb21lSWNvbiB9IGZyb20gXCJAZm9ydGF3ZXNvbWUvcmVhY3QtZm9udGF3ZXNvbWVcIjtcclxuaW1wb3J0IHsgZmFVc2VyIH0gZnJvbSBcIkBmb3J0YXdlc29tZS9mcmVlLXNvbGlkLXN2Zy1pY29uc1wiO1xyXG5pbXBvcnQgTWVudSBmcm9tIFwiLi9NZW51XCI7XHJcbmltcG9ydCBBY2NvcmRpb24gZnJvbSBcInJlYWN0LWJvb3RzdHJhcC9BY2NvcmRpb25cIjtcclxuaW1wb3J0IHsgTGluayB9IGZyb20gXCJyZWFjdC1yb3V0ZXItZG9tXCI7XHJcbmZ1bmN0aW9uIFBhdGllbnRzKCkge1xyXG4gIGNvbnN0IFthdXRoLCBzZXRBdXRoXSA9IHVzZVN0YXRlKHVzZUF1dGgoKSk7XHJcbiAgY29uc3QgW3BhdGllbnRzTGlzdCwgc2V0UGF0aWVudHNMaXN0XSA9IHVzZVN0YXRlKG51bGwpO1xyXG4gIGNvbnN0IFtsZW5ndGhMaXN0LCBzZXRMZW5ndGhMaXN0XSA9IHVzZVN0YXRlKDEwKTtcclxuXHJcbiAgdmFyIGZvcm1EYXRhID0gbmV3IEZvcm1EYXRhKCk7XHJcbiAgZm9ybURhdGEuYXBwZW5kKFwicGFnZVwiLCBsZW5ndGhMaXN0LnRvU3RyaW5nKCkpO1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgY29uc29sZS5sb2cobGVuZ3RoTGlzdCk7XHJcbiAgICBheGlvcyh7XHJcbiAgICAgIG1ldGhvZDogXCJwb3N0XCIsXHJcbiAgICAgIHVybDogXCIvYXBpL2dldFBhdGllbnRzXCIsXHJcbiAgICAgIGRhdGE6IGZvcm1EYXRhLFxyXG4gICAgICBoZWFkZXJzOiB7XHJcbiAgICAgICAgXCJDb250ZW50LVR5cGVcIjogXCJhcHBsaWNhdGlvbi9qc29uXCIsXHJcbiAgICAgICAgQXV0aG9yaXphdGlvbjogYEJlYXJlciAke2F1dGguYXV0aC5hY2Nlc3NUb2tlbn1gLFxyXG4gICAgICB9LFxyXG4gICAgfSlcclxuICAgICAgLnRoZW4oZnVuY3Rpb24gKHJlc3BvbnNlKSB7XHJcbiAgICAgICAgLy9oYW5kbGUgc3VjY2Vzc1xyXG4gICAgICAgIHNldFBhdGllbnRzTGlzdChyZXNwb25zZSk7XHJcbiAgICAgICAgY29uc29sZS5sb2cocmVzcG9uc2UpO1xyXG4gICAgICB9KVxyXG4gICAgICAuY2F0Y2goZnVuY3Rpb24gKHJlc3BvbnNlKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2cocmVzcG9uc2UpO1xyXG4gICAgICB9KTtcclxuICB9LCBbbGVuZ3RoTGlzdCwgc2V0TGVuZ3RoTGlzdF0pO1xyXG5cclxuICBjb25zdCByZWFkTW9yZSA9ICgpID0+IHtcclxuICAgIHNldExlbmd0aExpc3QobGVuZ3RoTGlzdCArIDEwKTtcclxuICB9O1xyXG5cclxuICBjb25zb2xlLmxvZyhwYXRpZW50c0xpc3QpO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPD5cclxuICAgICAgPE1lbnU+PC9NZW51PlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lciBjb250YWluZXItcGF0aWVudHMgcm93IG14LWF1dG8gXCI+XHJcbiAgICAgICAgPGgzPlRvdXMgbGVzIHBhdGllbnRzPC9oMz5cclxuXHJcbiAgICAgICAge3BhdGllbnRzTGlzdCAmJiBwYXRpZW50c0xpc3QuZGF0YSAmJiBwYXRpZW50c0xpc3QuZGF0YS5sZW5ndGggPiAwICYmIChcclxuICAgICAgICAgIDw+XHJcbiAgICAgICAgICAgIHtwYXRpZW50c0xpc3QuZGF0YS5tYXAoKHBhdGllbnQpID0+IChcclxuICAgICAgICAgICAgICA8QWNjb3JkaW9uIGNsYXNzTmFtZT1cIm15LTNcIj5cclxuICAgICAgICAgICAgICAgIDxBY2NvcmRpb24uSXRlbSBldmVudEtleT17cGF0aWVudC5pZH0ga2V5PXtwYXRpZW50LmlkfT5cclxuICAgICAgICAgICAgICAgICAgPEFjY29yZGlvbi5IZWFkZXI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtc20tMVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPEZvbnRBd2Vzb21lSWNvbiBpY29uPXtmYVVzZXJ9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtc20tMlwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAge3BhdGllbnQuZmlyc3RuYW1lfSB7cGF0aWVudC5sYXN0bmFtZX1cclxuICAgICAgICAgICAgICAgICAgICAgIDxMaW5rIGNsYXNzTmFtZT1cInNlZVByb2ZpbFwiIHRvPXtcIi9cIiArIHBhdGllbnQuaWR9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBWb2lyIHByb2ZpbFxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLXNtLTJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgIHtuZXcgRGF0ZShwYXRpZW50LmJpcnRoZGF0ZSkudG9Mb2NhbGVEYXRlU3RyaW5nKCl9XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtc20tMlwiPjE0LzAyLzIwMjI8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1zbS0zXCI+e3BhdGllbnQuYmlydGhMb2NhdGlvbn08L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1zbS0xXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJzdGF0dXNcIj57cGF0aWVudC5zdGF0dXN9PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIHsvKiA8ZGl2IGNsYXNzTmFtZT1cImNvbC1zbS0zXCI+e0RhdGUubm93KCl9PC9kaXY+ICovfVxyXG4gICAgICAgICAgICAgICAgICA8L0FjY29yZGlvbi5IZWFkZXI+XHJcbiAgICAgICAgICAgICAgICAgIDxBY2NvcmRpb24uQm9keT5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvdyBib2R5LWFjY29yZGVvbml0ZW1QYXRpZW50XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1zbS00XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxiPkRlcm5pw6hyZSBhY3Rpdml0w6llPC9iPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8cD5SYXBwb3J0IGRlIHJlbmNvbnRyZSAxMi8wOC8yMDIxPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8cD5SYXBwb3J0IGRlIHJlbmNvbnRyZSAyMC8wOC8yMDIyPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8cD5SYXBwb3J0IGRlIHJlbmNvbnRyZSAxNC8wOS8yMDIyPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1zbS0yXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxiPkh5Z2nDqG5lPC9iPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8cD5Hb29nbGUgQWdlbmRhPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1zbS0yXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxiPlNhbnTDqWUgbWVudGFsZTwvYj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHA+R29vZ2xlIEFnZW5kYTwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtc20tMlwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8Yj5MaWVuczwvYj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHA+R29vZ2xlIEFnZW5kYTwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtc20tMlwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8Yj5BdXRyZXMgZMOpdGFpbHM8L2I+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxwPlNhbnMgcGFwaWVyczwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHA+SW5zY3JpcyBhdSBsb2dlbWVudCBzb2NpYWw8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgPC9BY2NvcmRpb24uQm9keT5cclxuICAgICAgICAgICAgICAgIDwvQWNjb3JkaW9uLkl0ZW0+XHJcbiAgICAgICAgICAgICAgPC9BY2NvcmRpb24+XHJcbiAgICAgICAgICAgICkpfVxyXG4gICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cImJ0bi1tZXRpc1wiIG9uQ2xpY2s9e3JlYWRNb3JlfT5cclxuICAgICAgICAgICAgICBSZWFkIE1vcmVcclxuICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICA8Lz5cclxuICAgICAgICApfVxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvPlxyXG4gICk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFBhdGllbnRzO1xyXG4iLCJpbXBvcnQgUmVhY3QsIHsgdXNlQ29udGV4dCwgdXNlRGVidWdWYWx1ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyBPdXRsZXQgfSBmcm9tIFwicmVhY3Qtcm91dGVyLWRvbVwiO1xyXG5pbXBvcnQgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB1c2VSZWZyZXNoVG9rZW4gZnJvbSBcIi4uL2hvb2tzL3VzZVJlZnJlc2hUb2tlblwiO1xyXG5pbXBvcnQgdXNlQXV0aCBmcm9tIFwiLi4vaG9va3MvdXNlQXV0aFwiO1xyXG5cclxuY29uc3QgUGVyc2lzdExvZ2luID0gKCkgPT4ge1xyXG4gIGNvbnN0IFtpc0xvYWRpbmcsIHNldElzTG9hZGluZ10gPSB1c2VTdGF0ZSh0cnVlKTtcclxuICBjb25zdCByZWZyZXNoID0gdXNlUmVmcmVzaFRva2VuKCk7XHJcbiAgY29uc3QgeyBhdXRoLCBwZXJzaXN0IH0gPSB1c2VBdXRoKCk7XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBsZXQgaXNNb3VudGVkID0gdHJ1ZTtcclxuXHJcbiAgICBjb25zdCB2ZXJpZnlSZWZyZXNoVG9rZW4gPSBhc3luYyAoKSA9PiB7XHJcbiAgICAgIHRyeSB7XHJcbiAgICAgICAgYXdhaXQgcmVmcmVzaCgpO1xyXG4gICAgICB9IGNhdGNoIChlcnIpIHtcclxuICAgICAgICBjb25zb2xlLmVycm9yKGVycik7XHJcbiAgICAgIH0gZmluYWxseSB7XHJcbiAgICAgICAgaXNNb3VudGVkICYmIHNldElzTG9hZGluZyhmYWxzZSk7XHJcbiAgICAgIH1cclxuICAgIH07XHJcblxyXG4gICAgLy8gcGVyc2lzdCBhZGRlZCBoZXJlIEFGVEVSIHR1dG9yaWFsIHZpZGVvXHJcbiAgICAvLyBBdm9pZHMgdW53YW50ZWQgY2FsbCB0byB2ZXJpZnlSZWZyZXNoVG9rZW5cclxuICAgICFhdXRoPy5hY2Nlc3NUb2tlbiAmJiBwZXJzaXN0ID8gdmVyaWZ5UmVmcmVzaFRva2VuKCkgOiBzZXRJc0xvYWRpbmcoZmFsc2UpO1xyXG5cclxuICAgIHJldHVybiAoKSA9PiAoaXNNb3VudGVkID0gZmFsc2UpO1xyXG4gIH0sIFtdKTtcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIC8vIGNvbnNvbGUubG9nKGBpc0xvYWRpbmc6ICR7aXNMb2FkaW5nfWApO1xyXG4gICAgLy8gY29uc29sZS5sb2coYGFUOiAke0pTT04uc3RyaW5naWZ5KGF1dGg/LmFjY2Vzc1Rva2VuKX1gKTtcclxuICB9LCBbaXNMb2FkaW5nXSk7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8PnshcGVyc2lzdCA/IDxPdXRsZXQgLz4gOiBpc0xvYWRpbmcgPyA8cD5Mb2FkaW5nLi4uPC9wPiA6IDxPdXRsZXQgLz59PC8+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFBlcnNpc3RMb2dpbjtcclxuIiwiLy8gLi9hc3NldHMvanMvY29tcG9uZW50cy9Qb3N0cy5qc1xyXG5cclxuaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgYXhpb3MgZnJvbSBcImF4aW9zXCI7XHJcblxyXG5jbGFzcyBQb3N0cyBleHRlbmRzIENvbXBvbmVudCB7XHJcbiAgY29uc3RydWN0b3IoKSB7XHJcbiAgICBzdXBlcigpO1xyXG4gICAgdGhpcy5zdGF0ZSA9IHsgcG9zdHM6IFtdLCBsb2FkaW5nOiB0cnVlIH07XHJcbiAgfVxyXG5cclxuICBjb21wb25lbnREaWRNb3VudCgpIHtcclxuICAgIHRoaXMuZ2V0UG9zdHMoKTtcclxuICB9XHJcblxyXG4gIGdldFBvc3RzKCkge1xyXG4gICAgYXhpb3MuZ2V0KGBodHRwczovLzEyNy4wLjAuMTo4MDAwL3Nlc3Npb25gKS50aGVuKChyZXMpID0+IHtcclxuICAgICAgLy8gY29uc3QgcG9zdHMgPSByZXMuZGF0YS5zbGljZSgwLDE1KTtcclxuICAgICAgLy8gdGhpcy5zZXRTdGF0ZSh7IHBvc3RzLCBsb2FkaW5nOiBmYWxzZSB9KVxyXG4gICAgICAvLyBjb25zb2xlLmxvZyhyZXMpXHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIHJlbmRlcigpIHtcclxuICAgIGNvbnN0IGxvYWRpbmcgPSB0aGlzLnN0YXRlLmxvYWRpbmc7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8ZGl2PlxyXG4gICAgICAgIDxzZWN0aW9uIGNsYXNzTmFtZT1cInJvdy1zZWN0aW9uXCI+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lclwiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvd1wiPlxyXG4gICAgICAgICAgICAgIDxoMiBjbGFzc05hbWU9XCJ0ZXh0LWNlbnRlclwiPlxyXG4gICAgICAgICAgICAgICAgPHNwYW4+TGlzdCBvZiBwb3N0czwvc3Bhbj5DcmVhdGVkIHdpdGh7XCIgXCJ9XHJcbiAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJmYSBmYS1oZWFydFwiPjwvaT4gYnkgeWVtaXdlYmJ5e1wiIFwifVxyXG4gICAgICAgICAgICAgIDwvaDI+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAge2xvYWRpbmcgPyAoXHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e1wicm93IHRleHQtY2VudGVyXCJ9PlxyXG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiZmEgZmEtc3BpbiBmYS1zcGlubmVyIGZhLTR4XCI+PC9zcGFuPlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICApIDogKFxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtcInJvd1wifT5cclxuICAgICAgICAgICAgICAgIHt0aGlzLnN0YXRlLnBvc3RzLm1hcCgocG9zdCkgPT4gKFxyXG4gICAgICAgICAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiY29sLW1kLTEwIG9mZnNldC1tZC0xIHJvdy1ibG9ja1wiXHJcbiAgICAgICAgICAgICAgICAgICAga2V5PXtwb3N0LmlkfVxyXG4gICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgPHVsIGlkPVwic29ydGFibGVcIj5cclxuICAgICAgICAgICAgICAgICAgICAgIDxsaT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtZWRpYVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWVkaWEtYm9keVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGg0Pntwb3N0Lm5hbWV9PC9oND5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwPntwb3N0LmRlc2NyaXB0aW9ufTwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvdWw+XHJcbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICl9XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L3NlY3Rpb24+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgKTtcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFBvc3RzO1xyXG4iLCJpbXBvcnQgUmVhY3QsIHsgdXNlQ29udGV4dCwgdXNlRGVidWdWYWx1ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyB1c2VSZWYsIHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgTGluaywgdXNlTmF2aWdhdGUsIHVzZUxvY2F0aW9uIH0gZnJvbSBcInJlYWN0LXJvdXRlci1kb21cIjtcclxuaW1wb3J0IEFjY29yZGlvbiBmcm9tIFwicmVhY3QtYm9vdHN0cmFwL0FjY29yZGlvblwiO1xyXG5pbXBvcnQgdXNlQXV0aCBmcm9tIFwiLi4vLi4vL2hvb2tzL3VzZUF1dGhcIjtcclxuaW1wb3J0IHsgdXNlUGFyYW1zIH0gZnJvbSBcInJlYWN0LXJvdXRlci1kb21cIjtcclxuaW1wb3J0IGF4aW9zIGZyb20gXCJheGlvc1wiO1xyXG5pbXBvcnQgVGFibGUgZnJvbSBcInJlYWN0LWJvb3RzdHJhcC9UYWJsZVwiO1xyXG5pbXBvcnQgeyBGb250QXdlc29tZUljb24gfSBmcm9tIFwiQGZvcnRhd2Vzb21lL3JlYWN0LWZvbnRhd2Vzb21lXCI7XHJcbmltcG9ydCB7IGZhUGx1c0NpcmNsZSB9IGZyb20gXCJAZm9ydGF3ZXNvbWUvZnJlZS1zb2xpZC1zdmctaWNvbnNcIjtcclxuXHJcbmNvbnN0IEZpY2hlID0gKCkgPT4ge1xyXG4gIGxldCBpZCA9IHVzZVBhcmFtcygpLmlkO1xyXG4gIGxldCBiYWNrZ3JvdW5kSW1hZ2UgPVxyXG4gICAgXCIuLi9pbWFnZXMvNWE5NGUzNGI0YzM2ZTI4ZGU0ZTcwNGY4YzJkMWMzOWE3OWU5MWI1ZC5wbmdcIjtcclxuICBjb25zdCBbYXV0aCwgc2V0QXV0aF0gPSB1c2VTdGF0ZSh1c2VBdXRoKCkpO1xyXG4gIGNvbnN0IFtwYXRpZW50LCBzZXRQYXRpZW50XSA9IHVzZVN0YXRlKG51bGwpO1xyXG4gIGNvbnN0IFtpbWdQYXRpZW50LCBzZXRJbWdQYXRpZW50XSA9IHVzZVN0YXRlKG51bGwpO1xyXG4gIGNvbnN0IFtrZXksIHNldEtleV0gPSB1c2VTdGF0ZShcImZpY2hlXCIpO1xyXG4gIGNvbnN0IFtpZFBhdGllbnQsIHNldElkUGF0aWVudF0gPSB1c2VTdGF0ZShpZCk7XHJcbiAgY29uc3QgbmF2aWdhdGUgPSB1c2VOYXZpZ2F0ZSgpO1xyXG4gIGNvbnN0IGxvY2F0aW9uID0gdXNlTG9jYXRpb24oKTtcclxuICBjb25zdCBbbG9jYXRpb25XZWIsIHNldExvY2F0aW9uXSA9IHVzZVN0YXRlKGxvY2F0aW9uKTtcclxuXHJcbiAgY29uc3QgW3N0YXR1c1N1aXZpLCBzZXRTdGF0dXNdID0gdXNlU3RhdGUobnVsbCk7XHJcblxyXG4gIHZhciBmb3JtRGF0YSA9IG5ldyBGb3JtRGF0YSgpO1xyXG4gIGZvcm1EYXRhLmFwcGVuZChcImlkXCIsIGlkLnRvU3RyaW5nKCkpO1xyXG5cclxuICBsZXQgb2JqUGF0aWVudCA9IHt9O1xyXG5cclxuICBjb25zdCBbaW5mb3JtYXRpb25QYXRpZW50LCBzZXRJbmZvcm1hdGlvbl0gPSB1c2VTdGF0ZShudWxsKTtcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGF4aW9zKHtcclxuICAgICAgbWV0aG9kOiBcInBvc3RcIixcclxuICAgICAgdXJsOiBcIi9hcGkvcGF0aWVudHNJbmZvcm1hdGlvbkJ5UGF0aWVudHNcIixcclxuICAgICAgZGF0YTogZm9ybURhdGEsXHJcbiAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICBcIkNvbnRlbnQtVHlwZVwiOiBcImFwcGxpY2F0aW9uL2pzb25cIixcclxuICAgICAgICBBdXRob3JpemF0aW9uOiBgQmVhcmVyICR7YXV0aC5hdXRoLmFjY2Vzc1Rva2VufWAsXHJcbiAgICAgIH0sXHJcbiAgICB9KVxyXG4gICAgICAudGhlbihmdW5jdGlvbiAocmVzcG9uc2UpIHtcclxuICAgICAgICAvLyBzZXRJbmZvcm1hdGlvbihyZXNwb25zZSk7XHJcbiAgICAgICAgY29uc29sZS5sb2cocmVzcG9uc2UpO1xyXG5cclxuICAgICAgICBzZXRJbmZvcm1hdGlvbihyZXNwb25zZS5kYXRhKTtcclxuICAgICAgfSlcclxuICAgICAgLmNhdGNoKGZ1bmN0aW9uIChyZXNwb25zZSkge30pO1xyXG4gIH0sIFtpZFBhdGllbnRdKTtcclxuXHJcbiAgbGV0IHN0YXR1cyA9IGluZm9ybWF0aW9uUGF0aWVudD8uZGF0YT8uaXRlbD8uc3VnZT8ucGF0aFN0cmluZy5maWx0ZXIoXHJcbiAgICAoZSkgPT4gZS52YWxldXJQYXJlbnRQYXRoU3RyaW5nID09PSBcIi9wYXRpZW50L2ZpY2hlL2Fzc3VldHVkZS9kZWNsYXJlZVwiXHJcbiAgKTtcclxuXHJcbiAgY29uc29sZS5sb2coc3RhdHVzKTtcclxuXHJcbiAgLy8gaWYgKHN0YXR1c1N1aXZpID09PSB1bmRlZmluZWQgfHwgc3RhdHVzU3VpdmkgPT09IG51bGwpIHtcclxuICAvLyAgIHNldFN0YXR1cyhzdGF0dXMpO1xyXG4gIC8vIH1cclxuXHJcbiAgLy8gc2V0U3RhdHVzKHN0YXR1cyk7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8c2VjdGlvbj5cclxuICAgICAgPEFjY29yZGlvbiBkZWZhdWx0QWN0aXZlS2V5PVwiMFwiIGZsdXNoPXt0cnVlfSBjbGFzc05hbWU9XCJhY2NvcmRpb24tZmljaGVcIj5cclxuICAgICAgICA8QWNjb3JkaW9uLkl0ZW0gZXZlbnRLZXk9XCIwXCI+XHJcbiAgICAgICAgICA8QWNjb3JkaW9uLkhlYWRlcj5TdGF0dXQgZGUgc3Vpdmk8L0FjY29yZGlvbi5IZWFkZXI+XHJcbiAgICAgICAgICA8QWNjb3JkaW9uLkJvZHk+XHJcbiAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgPGg2PlxyXG4gICAgICAgICAgICAgICAgU3RhdHV0IGRlIHN1aXZpe1wiIFwifVxyXG4gICAgICAgICAgICAgICAgPGJ1dHRvbj5cclxuICAgICAgICAgICAgICAgICAge1wiIFwifVxyXG4gICAgICAgICAgICAgICAgICA8Rm9udEF3ZXNvbWVJY29uIGljb249e2ZhUGx1c0NpcmNsZX0gLz5cclxuICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgIDwvaDY+XHJcbiAgICAgICAgICAgICAge2luZm9ybWF0aW9uUGF0aWVudD8ubWFwKChwYXRpZW50LCBpZCkgPT4gKFxyXG4gICAgICAgICAgICAgICAgPD5cclxuICAgICAgICAgICAgICAgICAge3BhdGllbnQgJiZcclxuICAgICAgICAgICAgICAgICAgICBwYXRpZW50ICYmXHJcbiAgICAgICAgICAgICAgICAgICAgcGF0aWVudC5wYXRpZW50SW5mbyAmJlxyXG4gICAgICAgICAgICAgICAgICAgIHBhdGllbnQucGF0aWVudEluZm8uaXRlbD8uc3VnZT8ucGF0aFN0cmluZyA9PT1cclxuICAgICAgICAgICAgICAgICAgICAgIFwiL3BhdGllbnQvZmljaGUvc3RhdHV0LWR1LXN1aXZpXCIgJiZcclxuICAgICAgICAgICAgICAgICAgICBwYXRpZW50LnBhdGllbnRJbmZvLmRlbGV0ZWRBdCA9PT0gbnVsbCAmJiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvd1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1zbS00XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+e3BhdGllbnQucGF0aWVudEluZm8uc3VnZz8udmFsdWV9PC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtc20tNFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxwPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge25ldyBEYXRlKHBhdGllbnQucGF0aWVudEluZm8uc3RhcnQpLnRvTG9jYWxlU3RyaW5nKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImZyLUJFXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRlU3R5bGU6IFwic2hvcnRcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtuZXcgRGF0ZShwYXRpZW50LnBhdGllbnRJbmZvLmVuZCkudG9Mb2NhbGVTdHJpbmcoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiZnItQkVcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGVTdHlsZTogXCJzaG9ydFwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgICAgPC8+XHJcbiAgICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJibG9jayBtdC00XCI+XHJcbiAgICAgICAgICAgICAgPGg2PlxyXG4gICAgICAgICAgICAgICAgRXF1aXBlc3tcIiBcIn1cclxuICAgICAgICAgICAgICAgIDxidXR0b24+XHJcbiAgICAgICAgICAgICAgICAgIDxGb250QXdlc29tZUljb24gaWNvbj17ZmFQbHVzQ2lyY2xlfSAvPlxyXG4gICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgPC9oNj5cclxuICAgICAgICAgICAgICB7aW5mb3JtYXRpb25QYXRpZW50Py5tYXAoKHBhdGllbnQsIGlkKSA9PiAoXHJcbiAgICAgICAgICAgICAgICA8PlxyXG4gICAgICAgICAgICAgICAgICB7cGF0aWVudCAmJlxyXG4gICAgICAgICAgICAgICAgICAgIHBhdGllbnQgJiZcclxuICAgICAgICAgICAgICAgICAgICBwYXRpZW50LnZhbGV1cnBhdGhTdHJpbmcgJiZcclxuICAgICAgICAgICAgICAgICAgICBwYXRpZW50LnZhbGV1cnBhdGhTdHJpbmcgPT09IFwiL3BhdGllbnQvc3VpdmkvcHJvZ3JhbW1lXCIgJiYgKFxyXG4gICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3dcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtc20tNFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxwPntwYXRpZW50LnBhcmVudH08L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1zbS00XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7bmV3IERhdGUocGF0aWVudC5zdGFydERhdGUpLnRvTG9jYWxlU3RyaW5nKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImZyLUJFXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRlU3R5bGU6IFwic2hvcnRcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtuZXcgRGF0ZShwYXRpZW50LmVuZERhdGUpLnRvTG9jYWxlU3RyaW5nKFwiZnItQkVcIiwge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRlU3R5bGU6IFwic2hvcnRcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgICAgPC8+XHJcbiAgICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJsb2NrIG10LTRcIj5cclxuICAgICAgICAgICAgICA8aDY+XHJcbiAgICAgICAgICAgICAgICBQcm9ncmFtbWV7XCIgXCJ9XHJcbiAgICAgICAgICAgICAgICA8YnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICA8Rm9udEF3ZXNvbWVJY29uIGljb249e2ZhUGx1c0NpcmNsZX0gLz5cclxuICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgIDwvaDY+XHJcbiAgICAgICAgICAgICAge2luZm9ybWF0aW9uUGF0aWVudD8ubWFwKChwYXRpZW50LCBpZCkgPT4gKFxyXG4gICAgICAgICAgICAgICAgPD5cclxuICAgICAgICAgICAgICAgICAge3BhdGllbnQgJiZcclxuICAgICAgICAgICAgICAgICAgICBwYXRpZW50ICYmXHJcbiAgICAgICAgICAgICAgICAgICAgcGF0aWVudC52YWxldXJwYXRoU3RyaW5nICYmXHJcbiAgICAgICAgICAgICAgICAgICAgcGF0aWVudC52YWxldXJwYXRoU3RyaW5nID09PSBcIi9wYXRpZW50L3N1aXZpL3Byb2dyYW1tZVwiICYmIChcclxuICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLXNtLTRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8cD57cGF0aWVudC5wYXJlbnR9PC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtc20tNFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxwPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge25ldyBEYXRlKHBhdGllbnQuc3RhcnREYXRlKS50b0xvY2FsZVN0cmluZyhcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJmci1CRVwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0ZVN0eWxlOiBcInNob3J0XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAtXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7bmV3IERhdGUocGF0aWVudC5lbmREYXRlKS50b0xvY2FsZVN0cmluZyhcImZyLUJFXCIsIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0ZVN0eWxlOiBcInNob3J0XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICAgIDwvPlxyXG4gICAgICAgICAgICAgICkpfVxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJibG9jayBtdC00XCI+XHJcbiAgICAgICAgICAgICAgPGg2PlxyXG4gICAgICAgICAgICAgICAgQW50ZW5uZXtcIiBcIn1cclxuICAgICAgICAgICAgICAgIDxidXR0b24+XHJcbiAgICAgICAgICAgICAgICAgIHtcIiBcIn1cclxuICAgICAgICAgICAgICAgICAgPEZvbnRBd2Vzb21lSWNvbiBpY29uPXtmYVBsdXNDaXJjbGV9IC8+XHJcbiAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICA8L2g2PlxyXG4gICAgICAgICAgICAgIHtpbmZvcm1hdGlvblBhdGllbnQ/Lm1hcCgocGF0aWVudCwgaWQpID0+IChcclxuICAgICAgICAgICAgICAgIDw+XHJcbiAgICAgICAgICAgICAgICAgIHtwYXRpZW50ICYmXHJcbiAgICAgICAgICAgICAgICAgICAgcGF0aWVudCAmJlxyXG4gICAgICAgICAgICAgICAgICAgIHBhdGllbnQudmFsZXVycGF0aFN0cmluZyAmJlxyXG4gICAgICAgICAgICAgICAgICAgIHBhdGllbnQudmFsZXVycGF0aFN0cmluZyA9PT0gXCIvcGF0aWVudC9zdWl2aS9hbnRlbm5lXCIgJiYgKFxyXG4gICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3dcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtc20tNFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxwPntwYXRpZW50LnBhcmVudH08L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1zbS00XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7bmV3IERhdGUocGF0aWVudC5zdGFydERhdGUpLnRvTG9jYWxlU3RyaW5nKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImZyLUJFXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRlU3R5bGU6IFwic2hvcnRcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtuZXcgRGF0ZShwYXRpZW50LmVuZERhdGUpLnRvTG9jYWxlU3RyaW5nKFwiZnItQkVcIiwge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRlU3R5bGU6IFwic2hvcnRcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgICAgPC8+XHJcbiAgICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9BY2NvcmRpb24uQm9keT5cclxuICAgICAgICA8L0FjY29yZGlvbi5JdGVtPlxyXG4gICAgICAgIDxBY2NvcmRpb24uSXRlbSBldmVudEtleT1cIjFcIj5cclxuICAgICAgICAgIDxBY2NvcmRpb24uSGVhZGVyPkluZm9ybWF0aW9uIGfDqW7DqXJhbGU8L0FjY29yZGlvbi5IZWFkZXI+XHJcbiAgICAgICAgICA8QWNjb3JkaW9uLkJvZHk+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYmxvY2tcIj5cclxuICAgICAgICAgICAgICB7aW5mb3JtYXRpb25QYXRpZW50Py5tYXAoKHBhdGllbnQsIGlkKSA9PiAoXHJcbiAgICAgICAgICAgICAgICA8PlxyXG4gICAgICAgICAgICAgICAgICB7cGF0aWVudCAmJlxyXG4gICAgICAgICAgICAgICAgICAgIHBhdGllbnQgJiZcclxuICAgICAgICAgICAgICAgICAgICBwYXRpZW50LnZhbGV1clBhcmVudFBhdGhTdHJpbmcgJiZcclxuICAgICAgICAgICAgICAgICAgICBwYXRpZW50LnZhbGV1clBhcmVudFBhdGhTdHJpbmcgPT09XHJcbiAgICAgICAgICAgICAgICAgICAgICBcIi9wYXRpZW50L2ZpY2hlL2luZm9ybWF0aW9uLWdlbmVyYWxlXCIgJiYgKFxyXG4gICAgICAgICAgICAgICAgICAgICAgPGRpdiBrZXk9e3BhdGllbnQuaWR9IGNsYXNzTmFtZT1cInJvd1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1zbS0yXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGg2PntwYXRpZW50LnZhbGV1clBhcmVudH08L2g2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtc20tNFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxwPntwYXRpZW50LnBhcmVudH08L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1zbS0yXCI+e3BhdGllbnQuY29tbWVudENvbHVtbn08L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtc20tNFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XCIgXCJ9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Rm9udEF3ZXNvbWVJY29uIGljb249e2ZhUGx1c0NpcmNsZX0gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgICAgPC8+XHJcbiAgICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9BY2NvcmRpb24uQm9keT5cclxuICAgICAgICA8L0FjY29yZGlvbi5JdGVtPlxyXG4gICAgICAgIDxBY2NvcmRpb24uSXRlbSBldmVudEtleT1cIjJcIj5cclxuICAgICAgICAgIDxBY2NvcmRpb24uSGVhZGVyPkRlc2NyaXB0aW9uPC9BY2NvcmRpb24uSGVhZGVyPlxyXG4gICAgICAgICAgPEFjY29yZGlvbi5Cb2R5PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJsb2NrXCI+XHJcbiAgICAgICAgICAgICAge2luZm9ybWF0aW9uUGF0aWVudD8ubWFwKChwYXRpZW50LCBpZCkgPT4gKFxyXG4gICAgICAgICAgICAgICAgPD5cclxuICAgICAgICAgICAgICAgICAge3BhdGllbnQgJiZcclxuICAgICAgICAgICAgICAgICAgICBwYXRpZW50ICYmXHJcbiAgICAgICAgICAgICAgICAgICAgcGF0aWVudC52YWxldXJQYXJlbnRQYXRoU3RyaW5nICYmXHJcbiAgICAgICAgICAgICAgICAgICAgcGF0aWVudC52YWxldXJQYXJlbnRQYXRoU3RyaW5nID09PVxyXG4gICAgICAgICAgICAgICAgICAgICAgXCIvcGF0aWVudC9maWNoZS9kZXNjcmlwdGlvblwiICYmIChcclxuICAgICAgICAgICAgICAgICAgICAgIDxkaXYga2V5PXtwYXRpZW50LmlkfSBjbGFzc05hbWU9XCJyb3dcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtc20tNFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxoNj57cGF0aWVudC52YWxldXJQYXJlbnR9PC9oNj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLXNtLTRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8cD57cGF0aWVudC52YWxldXJDb2x1bW59PC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtc20tNFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Rm9udEF3ZXNvbWVJY29uIGljb249e2ZhUGx1c0NpcmNsZX0gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgICAgPC8+XHJcbiAgICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9BY2NvcmRpb24uQm9keT5cclxuICAgICAgICA8L0FjY29yZGlvbi5JdGVtPlxyXG4gICAgICAgIDxBY2NvcmRpb24uSXRlbSBldmVudEtleT1cIjNcIj5cclxuICAgICAgICAgIDxBY2NvcmRpb24uSGVhZGVyPlJlc3NvdXJjZXMgcGVyc29ubmVsbGVzPC9BY2NvcmRpb24uSGVhZGVyPlxyXG4gICAgICAgICAgPEFjY29yZGlvbi5Cb2R5PlxyXG4gICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgIDxoNj5cclxuICAgICAgICAgICAgICAgIExhbmd1ZXNcclxuICAgICAgICAgICAgICAgIDxidXR0b24+XHJcbiAgICAgICAgICAgICAgICAgIHtcIiBcIn1cclxuICAgICAgICAgICAgICAgICAgPEZvbnRBd2Vzb21lSWNvbiBpY29uPXtmYVBsdXNDaXJjbGV9IC8+XHJcbiAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICA8L2g2PlxyXG4gICAgICAgICAgICAgIHtpbmZvcm1hdGlvblBhdGllbnQ/Lm1hcCgocGF0aWVudCwgaWQpID0+IChcclxuICAgICAgICAgICAgICAgIDw+XHJcbiAgICAgICAgICAgICAgICAgIHtwYXRpZW50ICYmXHJcbiAgICAgICAgICAgICAgICAgICAgcGF0aWVudCAmJlxyXG4gICAgICAgICAgICAgICAgICAgIHBhdGllbnQudmFsZXVyUGFyZW50UGF0aFN0cmluZyAmJlxyXG4gICAgICAgICAgICAgICAgICAgIHBhdGllbnQudmFsZXVyUGFyZW50UGF0aFN0cmluZyA9PT1cclxuICAgICAgICAgICAgICAgICAgICAgIFwiL3BhdGllbnQvZmljaGUvbGFuZ3Vlc1wiICYmIChcclxuICAgICAgICAgICAgICAgICAgICAgIDxkaXYga2V5PXtwYXRpZW50LmlkfSBjbGFzc05hbWU9XCJyb3dcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgey8qIDxkaXYgY2xhc3NOYW1lPVwiY29sLXNtLTRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICB7LyogPHA+e3BhdGllbnQudmFsZXVyUGFyZW50fTwvcD4gXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PiAqL31cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtc20tNFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxwPntwYXRpZW50LnBhcmVudH08L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1zbS00XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+e3BhdGllbnQudmFsZXVyQ29sdW1ufTwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgICAgPC8+XHJcbiAgICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgIDxoNj5cclxuICAgICAgICAgICAgICAgIFRhbGVudHMgZXQgY2VudHJlcyBkJ2ludMOpcsOqdFxyXG4gICAgICAgICAgICAgICAgPGJ1dHRvbj5cclxuICAgICAgICAgICAgICAgICAge1wiIFwifVxyXG4gICAgICAgICAgICAgICAgICA8Rm9udEF3ZXNvbWVJY29uIGljb249e2ZhUGx1c0NpcmNsZX0gLz5cclxuICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgIDwvaDY+XHJcbiAgICAgICAgICAgICAge2luZm9ybWF0aW9uUGF0aWVudD8ubWFwKChwYXRpZW50LCBpZCkgPT4gKFxyXG4gICAgICAgICAgICAgICAgPD5cclxuICAgICAgICAgICAgICAgICAge3BhdGllbnQgJiZcclxuICAgICAgICAgICAgICAgICAgICBwYXRpZW50ICYmXHJcbiAgICAgICAgICAgICAgICAgICAgcGF0aWVudC52YWxldXJQYXJlbnRQYXRoU3RyaW5nICYmXHJcbiAgICAgICAgICAgICAgICAgICAgcGF0aWVudC52YWxldXJQYXJlbnRQYXRoU3RyaW5nID09PVxyXG4gICAgICAgICAgICAgICAgICAgICAgXCIvcGF0aWVudC9maWNoZS9yZXNzb3VyY2VzLXBlcnNvbm5lbGxlc1wiICYmIChcclxuICAgICAgICAgICAgICAgICAgICAgIDxkaXYga2V5PXtwYXRpZW50LmlkfSBjbGFzc05hbWU9XCJyb3dcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgey8qIDxkaXYgY2xhc3NOYW1lPVwiY29sLXNtLTRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICB7LyogPHA+e3BhdGllbnQudmFsZXVyUGFyZW50fTwvcD4gXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PiAqL31cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtc20tNFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxwPntwYXRpZW50LnBhcmVudH08L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1zbS00XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+e3BhdGllbnQudmFsZXVyQ29sdW1ufTwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgICAgPC8+XHJcbiAgICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgIDxoNj5cclxuICAgICAgICAgICAgICAgIFLDqnZlc1xyXG4gICAgICAgICAgICAgICAgPGJ1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgPEZvbnRBd2Vzb21lSWNvbiBpY29uPXtmYVBsdXNDaXJjbGV9IC8+XHJcbiAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICA8L2g2PlxyXG4gICAgICAgICAgICAgIHtpbmZvcm1hdGlvblBhdGllbnQ/Lm1hcCgocGF0aWVudCwgaWQpID0+IChcclxuICAgICAgICAgICAgICAgIDw+XHJcbiAgICAgICAgICAgICAgICAgIHtwYXRpZW50ICYmXHJcbiAgICAgICAgICAgICAgICAgICAgcGF0aWVudCAmJlxyXG4gICAgICAgICAgICAgICAgICAgIHBhdGllbnQudmFsZXVyUGFyZW50UGF0aFN0cmluZyAmJlxyXG4gICAgICAgICAgICAgICAgICAgIHBhdGllbnQudmFsZXVyUGFyZW50UGF0aFN0cmluZyA9PT1cclxuICAgICAgICAgICAgICAgICAgICAgIFwiL3BhdGllbnQvZmljaGUvcmVzc291cmNlcy1wZXJzb25uZWxsZXMvcmV2ZXNcIiAmJiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGtleT17cGF0aWVudC5pZH0gY2xhc3NOYW1lPVwicm93XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHsvKiA8ZGl2IGNsYXNzTmFtZT1cImNvbC1zbS00XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgey8qIDxwPntwYXRpZW50LnZhbGV1clBhcmVudH08L3A+IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj4gKi99XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLXNtLTRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8cD57cGF0aWVudC5wYXJlbnR9PC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtc20tNFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxwPntwYXRpZW50LnZhbGV1ckNvbHVtbn08L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICAgIDwvPlxyXG4gICAgICAgICAgICAgICkpfVxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICA8aDY+XHJcbiAgICAgICAgICAgICAgICBHb8O7dHMgY3VsaW5haXJlc1xyXG4gICAgICAgICAgICAgICAgPGJ1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgPEZvbnRBd2Vzb21lSWNvbiBpY29uPXtmYVBsdXNDaXJjbGV9IC8+XHJcbiAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICA8L2g2PlxyXG4gICAgICAgICAgICAgIHtpbmZvcm1hdGlvblBhdGllbnQ/Lm1hcCgocGF0aWVudCwgaWQpID0+IChcclxuICAgICAgICAgICAgICAgIDw+XHJcbiAgICAgICAgICAgICAgICAgIHtwYXRpZW50ICYmXHJcbiAgICAgICAgICAgICAgICAgICAgcGF0aWVudCAmJlxyXG4gICAgICAgICAgICAgICAgICAgIHBhdGllbnQudmFsZXVyUGFyZW50UGF0aFN0cmluZyAmJlxyXG4gICAgICAgICAgICAgICAgICAgIHBhdGllbnQudmFsZXVyUGFyZW50UGF0aFN0cmluZyA9PT1cclxuICAgICAgICAgICAgICAgICAgICAgIFwiL3BhdGllbnQvZmljaGUvcmVzc291cmNlcy1wZXJzb25uZWxsZXMvZ291dHMtY3VsaW5haXJlc1wiICYmIChcclxuICAgICAgICAgICAgICAgICAgICAgIDxkaXYga2V5PXtwYXRpZW50LmlkfSBjbGFzc05hbWU9XCJyb3dcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgey8qIDxkaXYgY2xhc3NOYW1lPVwiY29sLXNtLTRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICB7LyogPHA+e3BhdGllbnQudmFsZXVyUGFyZW50fTwvcD4gXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PiAqL31cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtc20tNFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxwPntwYXRpZW50LnBhcmVudH08L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1zbS00XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+e3BhdGllbnQudmFsZXVyQ29sdW1ufTwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgICAgPC8+XHJcbiAgICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9BY2NvcmRpb24uQm9keT5cclxuICAgICAgICA8L0FjY29yZGlvbi5JdGVtPlxyXG4gICAgICAgIDxBY2NvcmRpb24uSXRlbSBldmVudEtleT1cIjRcIj5cclxuICAgICAgICAgIDxBY2NvcmRpb24uSGVhZGVyPlJlc3NvdXJjZXMgZmluYW5jacOocmVzPC9BY2NvcmRpb24uSGVhZGVyPlxyXG4gICAgICAgICAgPEFjY29yZGlvbi5Cb2R5PlxyXG4gICAgICAgICAgICB7aW5mb3JtYXRpb25QYXRpZW50Py5tYXAoKHBhdGllbnQsIGlkKSA9PiAoXHJcbiAgICAgICAgICAgICAgPD5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYmxvY2tcIj5cclxuICAgICAgICAgICAgICAgICAge3BhdGllbnQgJiZcclxuICAgICAgICAgICAgICAgICAgICBwYXRpZW50ICYmXHJcbiAgICAgICAgICAgICAgICAgICAgcGF0aWVudC52YWxldXJQYXJlbnRQYXRoU3RyaW5nICYmXHJcbiAgICAgICAgICAgICAgICAgICAgcGF0aWVudC52YWxldXJQYXJlbnRQYXRoU3RyaW5nID09PVxyXG4gICAgICAgICAgICAgICAgICAgICAgXCIvcGF0aWVudC9maWNoZS9yZXNzb3VyY2VzLWZpbmFuY2llcmVzXCIgJiYgKFxyXG4gICAgICAgICAgICAgICAgICAgICAgPGRpdiBrZXk9e3BhdGllbnQuaWR9IGNsYXNzTmFtZT1cInJvd1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1zbS00XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGg2PntwYXRpZW50LnZhbGV1clBhcmVudH08L2g2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtc20tNFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxwPntwYXRpZW50LnBhcmVudH08L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDwvPlxyXG4gICAgICAgICAgICApKX1cclxuICAgICAgICAgIDwvQWNjb3JkaW9uLkJvZHk+XHJcbiAgICAgICAgPC9BY2NvcmRpb24uSXRlbT5cclxuICAgICAgICA8QWNjb3JkaW9uLkl0ZW0gZXZlbnRLZXk9XCI1XCI+XHJcbiAgICAgICAgICA8QWNjb3JkaW9uLkhlYWRlcj5BY2PDqHMgYXV4IHNvaW5zPC9BY2NvcmRpb24uSGVhZGVyPlxyXG4gICAgICAgICAgPEFjY29yZGlvbi5Cb2R5PlxyXG4gICAgICAgICAgICB7aW5mb3JtYXRpb25QYXRpZW50Py5tYXAoKHBhdGllbnQsIGlkKSA9PiAoXHJcbiAgICAgICAgICAgICAgPD5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYmxvY2tcIj5cclxuICAgICAgICAgICAgICAgICAge3BhdGllbnQgJiZcclxuICAgICAgICAgICAgICAgICAgICBwYXRpZW50ICYmXHJcbiAgICAgICAgICAgICAgICAgICAgcGF0aWVudC52YWxldXJQYXJlbnRQYXRoU3RyaW5nICYmXHJcbiAgICAgICAgICAgICAgICAgICAgcGF0aWVudC52YWxldXJQYXJlbnRQYXRoU3RyaW5nID09PVxyXG4gICAgICAgICAgICAgICAgICAgICAgXCIvcGF0aWVudC9maWNoZS9hY2Nlcy1hdXgtc29pbnNcIiAmJiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGtleT17cGF0aWVudC5pZH0gY2xhc3NOYW1lPVwicm93XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLXNtLTRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8aDY+e3BhdGllbnQudmFsZXVyUGFyZW50fTwvaDY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1zbS00XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+e3BhdGllbnQucGFyZW50fTwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPC8+XHJcbiAgICAgICAgICAgICkpfVxyXG4gICAgICAgICAgPC9BY2NvcmRpb24uQm9keT5cclxuICAgICAgICA8L0FjY29yZGlvbi5JdGVtPlxyXG4gICAgICAgIDxBY2NvcmRpb24uSXRlbSBldmVudEtleT1cIjZcIj5cclxuICAgICAgICAgIDxBY2NvcmRpb24uSGVhZGVyPlNhbnTDqSBwaHlzaXF1ZTwvQWNjb3JkaW9uLkhlYWRlcj5cclxuICAgICAgICAgIDxBY2NvcmRpb24uQm9keT5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtdC00XCI+XHJcbiAgICAgICAgICAgICAgPGg2PlxyXG4gICAgICAgICAgICAgICAgUGF0aG9sb2dpZXMgcGh5c2lxdWVzIGNocm9uaXF1ZXNcclxuICAgICAgICAgICAgICAgIDxidXR0b24+XHJcbiAgICAgICAgICAgICAgICAgIDxGb250QXdlc29tZUljb24gaWNvbj17ZmFQbHVzQ2lyY2xlfSAvPlxyXG4gICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgPC9oNj5cclxuICAgICAgICAgICAgICB7aW5mb3JtYXRpb25QYXRpZW50Py5tYXAoKHBhdGllbnQsIGlkKSA9PiAoXHJcbiAgICAgICAgICAgICAgICA8PlxyXG4gICAgICAgICAgICAgICAgICB7cGF0aWVudCAmJlxyXG4gICAgICAgICAgICAgICAgICAgIHBhdGllbnQgJiZcclxuICAgICAgICAgICAgICAgICAgICBwYXRpZW50LnZhbGV1clBhcmVudFBhdGhTdHJpbmcgJiZcclxuICAgICAgICAgICAgICAgICAgICBwYXRpZW50LnZhbGV1clBhcmVudFBhdGhTdHJpbmcgPT09XHJcbiAgICAgICAgICAgICAgICAgICAgICBcIi9wYXRpZW50L21lZGljYWwvcGF0aG9sb2dpZXNcIiAmJiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGtleT17cGF0aWVudC5pZH0gY2xhc3NOYW1lPVwicm93XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHsvKiA8ZGl2IGNsYXNzTmFtZT1cImNvbC1zbS00XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxwPntwYXRpZW50LnZhbGV1clBhcmVudH08L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj4gKi99XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLXNtLTRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8cD57cGF0aWVudC5wYXJlbnR9PC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtc20tNFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxwPntwYXRpZW50LmNvbW1lbnRDb2x1bW59PC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgICA8Lz5cclxuICAgICAgICAgICAgICApKX1cclxuICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm10LTRcIj5cclxuICAgICAgICAgICAgICA8aDY+XHJcbiAgICAgICAgICAgICAgICBFcGlzb2RlcyBkZSBtYWxhZGllXHJcbiAgICAgICAgICAgICAgICA8YnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICA8Rm9udEF3ZXNvbWVJY29uIGljb249e2ZhUGx1c0NpcmNsZX0gLz5cclxuICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgIDwvaDY+XHJcbiAgICAgICAgICAgICAge2luZm9ybWF0aW9uUGF0aWVudD8ubWFwKChwYXRpZW50LCBpZCkgPT4gKFxyXG4gICAgICAgICAgICAgICAgPD5cclxuICAgICAgICAgICAgICAgICAge3BhdGllbnQgJiZcclxuICAgICAgICAgICAgICAgICAgICBwYXRpZW50ICYmXHJcbiAgICAgICAgICAgICAgICAgICAgcGF0aWVudC52YWxldXJwYXRoU3RyaW5nICYmXHJcbiAgICAgICAgICAgICAgICAgICAgcGF0aWVudC52YWxldXJwYXRoU3RyaW5nID09PVxyXG4gICAgICAgICAgICAgICAgICAgICAgXCIvcGF0aWVudC9tZWRpY2FsL2VwaXNvZGVzLWRlLW1hbGFkaWVcIiAmJiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGtleT17cGF0aWVudC5pZH0gY2xhc3NOYW1lPVwicm93XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHsvKiA8ZGl2IGNsYXNzTmFtZT1cImNvbC1zbS00XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxwPntwYXRpZW50LnZhbGV1clBhcmVudH08L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj4gKi99XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLXNtLTRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8cD57cGF0aWVudC5wYXJlbnR9PC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtc20tNFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxwPntwYXRpZW50LmNvbW1lbnRDb2x1bW59PC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgICA8Lz5cclxuICAgICAgICAgICAgICApKX1cclxuICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm10LTRcIj5cclxuICAgICAgICAgICAgICA8aDY+XHJcbiAgICAgICAgICAgICAgICBBbGxlcmdpZXNcclxuICAgICAgICAgICAgICAgIDxidXR0b24+XHJcbiAgICAgICAgICAgICAgICAgIDxGb250QXdlc29tZUljb24gaWNvbj17ZmFQbHVzQ2lyY2xlfSAvPlxyXG4gICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgPC9oNj5cclxuICAgICAgICAgICAgICB7aW5mb3JtYXRpb25QYXRpZW50Py5tYXAoKHBhdGllbnQsIGlkKSA9PiAoXHJcbiAgICAgICAgICAgICAgICA8PlxyXG4gICAgICAgICAgICAgICAgICB7cGF0aWVudCAmJlxyXG4gICAgICAgICAgICAgICAgICAgIHBhdGllbnQgJiZcclxuICAgICAgICAgICAgICAgICAgICBwYXRpZW50LnZhbGV1cnBhdGhTdHJpbmcgJiZcclxuICAgICAgICAgICAgICAgICAgICBwYXRpZW50LnZhbGV1cnBhdGhTdHJpbmcgPT09XHJcbiAgICAgICAgICAgICAgICAgICAgICBcIi9wYXRpZW50L21lZGljYWwvYWxsZXJnaWVzXCIgJiYgKFxyXG4gICAgICAgICAgICAgICAgICAgICAgPGRpdiBrZXk9e3BhdGllbnQuaWR9IGNsYXNzTmFtZT1cInJvd1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7LyogPGRpdiBjbGFzc05hbWU9XCJjb2wtc20tNFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8cD57cGF0aWVudC52YWxldXJQYXJlbnR9PC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9kaXY+ICovfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1zbS00XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+e3BhdGllbnQucGFyZW50fTwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLXNtLTRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8cD57cGF0aWVudC5jb21tZW50Q29sdW1ufTwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgICAgPC8+XHJcbiAgICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtdC00XCI+XHJcbiAgICAgICAgICAgICAgPGg2PlxyXG4gICAgICAgICAgICAgICAgUGFyYW3DqHRyZXNcclxuICAgICAgICAgICAgICAgIDxidXR0b24+XHJcbiAgICAgICAgICAgICAgICAgIDxGb250QXdlc29tZUljb24gaWNvbj17ZmFQbHVzQ2lyY2xlfSAvPlxyXG4gICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgPC9oNj5cclxuICAgICAgICAgICAgICB7aW5mb3JtYXRpb25QYXRpZW50Py5tYXAoKHBhdGllbnQsIGlkKSA9PiAoXHJcbiAgICAgICAgICAgICAgICA8PlxyXG4gICAgICAgICAgICAgICAgICB7cGF0aWVudCAmJlxyXG4gICAgICAgICAgICAgICAgICAgIHBhdGllbnQgJiZcclxuICAgICAgICAgICAgICAgICAgICBwYXRpZW50LnZhbGV1cnBhdGhTdHJpbmcgJiZcclxuICAgICAgICAgICAgICAgICAgICBwYXRpZW50LnZhbGV1cnBhdGhTdHJpbmcgPT09XHJcbiAgICAgICAgICAgICAgICAgICAgICBcIi9wYXRpZW50L21lZGljYWwvcGFyYW1ldHJlc1wiICYmIChcclxuICAgICAgICAgICAgICAgICAgICAgIDxkaXYga2V5PXtwYXRpZW50LmlkfSBjbGFzc05hbWU9XCJyb3dcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgey8qIDxkaXYgY2xhc3NOYW1lPVwiY29sLXNtLTRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHA+e3BhdGllbnQudmFsZXVyUGFyZW50fTwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PiAqL31cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtc20tNFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxwPntwYXRpZW50LnBhcmVudH08L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1zbS00XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+e3BhdGllbnQuY29tbWVudENvbHVtbn08L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICAgIDwvPlxyXG4gICAgICAgICAgICAgICkpfVxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvQWNjb3JkaW9uLkJvZHk+XHJcbiAgICAgICAgPC9BY2NvcmRpb24uSXRlbT5cclxuICAgICAgICA8QWNjb3JkaW9uLkl0ZW0gZXZlbnRLZXk9XCI3XCI+XHJcbiAgICAgICAgICA8QWNjb3JkaW9uLkhlYWRlcj5QYXRob2xvZ2llIG1lbnRhbGU8L0FjY29yZGlvbi5IZWFkZXI+XHJcbiAgICAgICAgICA8QWNjb3JkaW9uLkJvZHk+XHJcbiAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgPGg2PlxyXG4gICAgICAgICAgICAgICAgU3VwcG9zw6llXHJcbiAgICAgICAgICAgICAgICA8YnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICA8Rm9udEF3ZXNvbWVJY29uIGljb249e2ZhUGx1c0NpcmNsZX0gLz5cclxuICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgIDwvaDY+XHJcbiAgICAgICAgICAgICAge2luZm9ybWF0aW9uUGF0aWVudD8ubWFwKChwYXRpZW50LCBpZCkgPT4gKFxyXG4gICAgICAgICAgICAgICAgPD5cclxuICAgICAgICAgICAgICAgICAge3BhdGllbnQgJiZcclxuICAgICAgICAgICAgICAgICAgICBwYXRpZW50ICYmXHJcbiAgICAgICAgICAgICAgICAgICAgcGF0aWVudC52YWxldXJQYXJlbnRQYXRoU3RyaW5nICYmXHJcbiAgICAgICAgICAgICAgICAgICAgcGF0aWVudC52YWxldXJQYXJlbnRQYXRoU3RyaW5nID09PVxyXG4gICAgICAgICAgICAgICAgICAgICAgXCIvcGF0aWVudC9maWNoZS9wYXRob2xvZ2llLW1lbnRhbGUvc3VwcG9zZWVcIiAmJiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGtleT17cGF0aWVudC5pZH0gY2xhc3NOYW1lPVwicm93XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLXNtLTRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8cD57cGF0aWVudC52YWxldXJQYXJlbnR9PC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtc20tNFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxwPntwYXRpZW50LnBhcmVudH08L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICAgIDwvPlxyXG4gICAgICAgICAgICAgICkpfVxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgey8qIDxkaXY+XHJcbiAgICAgICAgICAgICAgPGg2PlxyXG4gICAgICAgICAgICAgICAgRMOpY2xhcsOpZVxyXG4gICAgICAgICAgICAgICAgPGJ1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgPEZvbnRBd2Vzb21lSWNvbiBpY29uPXtmYVBsdXNDaXJjbGV9IC8+XHJcbiAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICA8L2g2PlxyXG4gICAgICAgICAgICAgIHtpbmZvcm1hdGlvblBhdGllbnQ/Lm1hcCgocGF0aWVudCwgaWQpID0+IChcclxuICAgICAgICAgICAgICAgIDw+XHJcbiAgICAgICAgICAgICAgICAgIHtwYXRpZW50ICYmXHJcbiAgICAgICAgICAgICAgICAgICAgcGF0aWVudCAmJlxyXG4gICAgICAgICAgICAgICAgICAgIHBhdGllbnQudmFsZXVyUGFyZW50UGF0aFN0cmluZyAmJlxyXG4gICAgICAgICAgICAgICAgICAgIHBhdGllbnQucGF0aWVudEluZm8udmFsZXVyUGFyZW50UGF0aFN0cmluZyA9PT1cclxuICAgICAgICAgICAgICAgICAgICAgIFwiL3BhdGllbnQvZmljaGUvcGF0aG9sb2dpZS1tZW50YWxlL2RlY2xhcmVlXCIgJiZcclxuICAgICAgICAgICAgICAgICAgICBwYXRpZW50LnBhdGllbnRJbmZvLmRlbGV0ZWRBdCA9PT0gbnVsbCAmJiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGtleT17cGF0aWVudC5pZH0gY2xhc3NOYW1lPVwicm93XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLXNtLTRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8cD57cGF0aWVudC52YWxldXJQYXJlbnR9PC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtc20tNFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxwPntwYXRpZW50LnBhcmVudH08L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICAgIDwvPlxyXG4gICAgICAgICAgICAgICkpfVxyXG4gICAgICAgICAgICA8L2Rpdj4gKi99XHJcbiAgICAgICAgICA8L0FjY29yZGlvbi5Cb2R5PlxyXG4gICAgICAgIDwvQWNjb3JkaW9uLkl0ZW0+XHJcbiAgICAgICAgPEFjY29yZGlvbi5JdGVtIGV2ZW50S2V5PVwiOFwiPlxyXG4gICAgICAgICAgPEFjY29yZGlvbi5IZWFkZXI+QXNzdcOpdHVkZTwvQWNjb3JkaW9uLkhlYWRlcj5cclxuICAgICAgICAgIDxBY2NvcmRpb24uQm9keT5cclxuICAgICAgICAgICAgPGg2PlxyXG4gICAgICAgICAgICAgIFN1cHBvc8OpZVxyXG4gICAgICAgICAgICAgIDxidXR0b24+XHJcbiAgICAgICAgICAgICAgICA8Rm9udEF3ZXNvbWVJY29uIGljb249e2ZhUGx1c0NpcmNsZX0gLz5cclxuICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgPC9oNj5cclxuICAgICAgICAgICAge2luZm9ybWF0aW9uUGF0aWVudD8ubWFwKChwYXRpZW50LCBpZCkgPT4gKFxyXG4gICAgICAgICAgICAgIDw+XHJcbiAgICAgICAgICAgICAgICB7cGF0aWVudCAmJlxyXG4gICAgICAgICAgICAgICAgICBwYXRpZW50ICYmXHJcbiAgICAgICAgICAgICAgICAgIHBhdGllbnQ/LnBhdGllbnRJbmZvPy5pdGVsPy5zdWdlPy5wYXRoU3RyaW5nICYmXHJcbiAgICAgICAgICAgICAgICAgIHBhdGllbnQ/LnBhdGllbnRJbmZvPy5pdGVsPy5zdWdlPy5wYXRoU3RyaW5nID09PVxyXG4gICAgICAgICAgICAgICAgICAgIFwiL3BhdGllbnQvZmljaGUvYXNzdWV0dWRlL3N1cHBvc2VlXCIgJiZcclxuICAgICAgICAgICAgICAgICAgcGF0aWVudD8ucGF0aWVudEluZm8/LmRlbGV0ZWRBdCA9PT0gbnVsbCAmJiAoXHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBrZXk9e3BhdGllbnQuaWR9IGNsYXNzTmFtZT1cInJvdyBtdC00XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICB7LyogPGRpdiBjbGFzc05hbWU9XCJjb2wtc20tNFwiPjwvZGl2PiAqL31cclxuICAgICAgICAgICAgICAgICAgICAgIHsvKiA8cD57cGF0aWVudC5wYXJlbnR9PC9wPiAqL31cclxuICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLXNtLTJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGg2PntwYXRpZW50Py5wYXRpZW50SW5mbz8uc3VnZy52YWx1ZX08L2g2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1zbS02XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxwPntwYXRpZW50Py5wYXRpZW50SW5mbz8uY29tbWVudH08L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLXNtLTRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgey8qIDxwPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHtcIiBcIn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8Rm9udEF3ZXNvbWVJY29uIGljb249e2ZhUGx1c0NpcmNsZX0gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9wPiAqL31cclxuICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgIDwvPlxyXG4gICAgICAgICAgICApKX1cclxuICAgICAgICAgICAgPGg2PlxyXG4gICAgICAgICAgICAgIETDqWNsYXLDqWVcclxuICAgICAgICAgICAgICA8YnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgPEZvbnRBd2Vzb21lSWNvbiBpY29uPXtmYVBsdXNDaXJjbGV9IC8+XHJcbiAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgIDwvaDY+XHJcbiAgICAgICAgICAgIHtpbmZvcm1hdGlvblBhdGllbnQ/Lm1hcCgocGF0aWVudCwgaWQpID0+IChcclxuICAgICAgICAgICAgICA8PlxyXG4gICAgICAgICAgICAgICAge3BhdGllbnQgJiZcclxuICAgICAgICAgICAgICAgICAgcGF0aWVudCAmJlxyXG4gICAgICAgICAgICAgICAgICBwYXRpZW50Py5wYXRpZW50SW5mbz8uaXRlbD8uc3VnZT8ucGF0aFN0cmluZyAmJlxyXG4gICAgICAgICAgICAgICAgICBwYXRpZW50Py5wYXRpZW50SW5mbz8uaXRlbD8uc3VnZT8ucGF0aFN0cmluZyA9PT1cclxuICAgICAgICAgICAgICAgICAgICBcIi9wYXRpZW50L2ZpY2hlL2Fzc3VldHVkZS9kZWNsYXJlZVwiICYmXHJcbiAgICAgICAgICAgICAgICAgIHBhdGllbnQ/LnBhdGllbnRJbmZvPy5kZWxldGVkQXQgPT09IG51bGwgJiYgKFxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYga2V5PXtwYXRpZW50LmlkfSBjbGFzc05hbWU9XCJyb3cgbXQtNFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgey8qIDxkaXYgY2xhc3NOYW1lPVwiY29sLXNtLTRcIj48L2Rpdj4gKi99XHJcbiAgICAgICAgICAgICAgICAgICAgICB7LyogPHA+e3BhdGllbnQucGFyZW50fTwvcD4gKi99XHJcbiAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1zbS0yXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxoNj57cGF0aWVudD8ucGF0aWVudEluZm8/LnN1Z2cudmFsdWV9PC9oNj5cclxuICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtc20tNlwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8cD57cGF0aWVudD8ucGF0aWVudEluZm8/LmNvbW1lbnR9PC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1zbS00XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHsvKiA8cD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICB7XCIgXCJ9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPEZvbnRBd2Vzb21lSWNvbiBpY29uPXtmYVBsdXNDaXJjbGV9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvcD4gKi99XHJcbiAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICA8Lz5cclxuICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgICA8L0FjY29yZGlvbi5Cb2R5PlxyXG4gICAgICAgIDwvQWNjb3JkaW9uLkl0ZW0+XHJcbiAgICAgICAgPEFjY29yZGlvbi5JdGVtIGV2ZW50S2V5PVwiOVwiPlxyXG4gICAgICAgICAgPEFjY29yZGlvbi5IZWFkZXI+VHJhaXRlbWVudHM8L0FjY29yZGlvbi5IZWFkZXI+XHJcbiAgICAgICAgICA8QWNjb3JkaW9uLkJvZHk+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYmxvY2tcIj5cclxuICAgICAgICAgICAgICB7aW5mb3JtYXRpb25QYXRpZW50Py5tYXAoKHBhdGllbnQsIGlkKSA9PiAoXHJcbiAgICAgICAgICAgICAgICA8PlxyXG4gICAgICAgICAgICAgICAgICB7cGF0aWVudCAmJlxyXG4gICAgICAgICAgICAgICAgICAgIHBhdGllbnQgJiZcclxuICAgICAgICAgICAgICAgICAgICBwYXRpZW50LnZhbGV1cnBhdGhTdHJpbmcgJiZcclxuICAgICAgICAgICAgICAgICAgICBwYXRpZW50LnZhbGV1cnBhdGhTdHJpbmcgPT09XHJcbiAgICAgICAgICAgICAgICAgICAgICBcIi9wYXRpZW50L2ZpY2hlL3RyYWl0ZW1lbnRzXCIgJiYgKFxyXG4gICAgICAgICAgICAgICAgICAgICAgPGRpdiBrZXk9e3BhdGllbnQuaWR9IGNsYXNzTmFtZT1cInJvd1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1zbS00XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGg2PntwYXRpZW50LnBhcmVudH08L2g2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtc20tNFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxwPntwYXRpZW50LnZhbGV1ckNvbHVtbn08L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+e3BhdGllbnQuY29tbWVudENvbHVtbn08L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICAgIDwvPlxyXG4gICAgICAgICAgICAgICkpfVxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvQWNjb3JkaW9uLkJvZHk+XHJcbiAgICAgICAgPC9BY2NvcmRpb24uSXRlbT5cclxuICAgICAgPC9BY2NvcmRpb24+XHJcbiAgICA8L3NlY3Rpb24+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IEZpY2hlO1xyXG4iLCJpbXBvcnQgUmVhY3QsIHsgdXNlQ29udGV4dCwgdXNlRGVidWdWYWx1ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyB1c2VMb2NhdGlvbiwgTmF2aWdhdGUsIE91dGxldCB9IGZyb20gXCJyZWFjdC1yb3V0ZXItZG9tXCI7XHJcbmltcG9ydCB1c2VBdXRoIGZyb20gXCIuLi9ob29rcy91c2VBdXRoXCI7XHJcblxyXG5jb25zdCBSZXF1aXJlQXV0aCA9ICh7IGFsbG93ZWRSb2xlcyB9KSA9PiB7XHJcbiAgY29uc3QgeyBhdXRoIH0gPSB1c2VBdXRoKCk7XHJcbiAgY29uc3QgbG9jYXRpb24gPSB1c2VMb2NhdGlvbigpO1xyXG5cclxuICByZXR1cm4gYXV0aD8ucm9sZXM/LmZpbmQoKHJvbGUpID0+IGFsbG93ZWRSb2xlcz8uaW5jbHVkZXMocm9sZSkpID8gKFxyXG4gICAgPE91dGxldCAvPlxyXG4gICkgOiBhdXRoPy5hY2Nlc3NUb2tlbiA/IChcclxuICAgIDxOYXZpZ2F0ZSB0bz1cIi91bmF1dGhvcml6ZWRcIiBzdGF0ZT17eyBmcm9tOiBsb2NhdGlvbiB9fSByZXBsYWNlIC8+XHJcbiAgKSA6IChcclxuICAgIDxOYXZpZ2F0ZSB0bz1cIi9jb25uZWN0XCIgc3RhdGU9e3sgZnJvbTogbG9jYXRpb24gfX0gcmVwbGFjZSAvPlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBSZXF1aXJlQXV0aDtcclxuIiwiaW1wb3J0IFJlYWN0LCB7IHVzZUNvbnRleHQsIHVzZURlYnVnVmFsdWUsIHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IEZvcm0gZnJvbSBcInJlYWN0LWJvb3RzdHJhcC9Gb3JtXCI7XHJcbmltcG9ydCBOYXYgZnJvbSBcInJlYWN0LWJvb3RzdHJhcC9OYXZcIjtcclxuaW1wb3J0IGF4aW9zIGZyb20gXCJheGlvc1wiO1xyXG5pbXBvcnQgTmF2YmFyIGZyb20gXCJyZWFjdC1ib290c3RyYXAvTmF2YmFyXCI7XHJcbmltcG9ydCBOYXZEcm9wZG93biBmcm9tIFwicmVhY3QtYm9vdHN0cmFwL05hdkRyb3Bkb3duXCI7XHJcbmltcG9ydCBPZmZjYW52YXMgZnJvbSBcInJlYWN0LWJvb3RzdHJhcC9PZmZjYW52YXNcIjtcclxuaW1wb3J0IHVzZUF1dGggZnJvbSBcIi4uL2hvb2tzL3VzZUF1dGhcIjtcclxuaW1wb3J0IHsgdXNlTmF2aWdhdGUsIExpbmsgfSBmcm9tIFwicmVhY3Qtcm91dGVyLWRvbVwiO1xyXG5cclxuY29uc3QgU2VhcmNoID0gKCkgPT4ge1xyXG4gIGxldCBbdmFsdWVTZWFyY2gsIHNldFNlYXJjaF0gPSB1c2VTdGF0ZShudWxsKTtcclxuICBjb25zdCBbYXV0aCwgc2V0QXV0aF0gPSB1c2VTdGF0ZSh1c2VBdXRoKCkpO1xyXG4gIGxldCBbcmVzdWx0U2VhcmNoLCBzZXRSZXN1bHRTZWFyY2hdID0gdXNlU3RhdGUobnVsbCk7XHJcbiAgbGV0IFtpc09wZW4sIHNldE9wZW5SZXN1bHRdID0gdXNlU3RhdGUoZmFsc2UpO1xyXG5cclxuICBjb25zdCBzZXRWYWx1ZSA9IChlKSA9PiB7XHJcbiAgICAvLyBlLmRlZmF1bHRQcmV2ZW50ZWQoKTtcclxuICAgIC8vIGNvbnNvbGUubG9nKGUpO1xyXG4gICAgc2V0U2VhcmNoKGUudGFyZ2V0LnZhbHVlKTtcclxuICAgIC8vIHBvc3RzLmZpbHRlcigoZSkgPT4gZS5uYW1lID09PSB2YWx1ZVNlYXJjaCk7XHJcbiAgICAvLyBjb25zb2xlLmxvZyh2YWx1ZVNlYXJjaCk7XHJcbiAgICBpZiAodmFsdWVTZWFyY2ggJiYgdmFsdWVTZWFyY2g/Lmxlbmd0aCA+IDEpIHtcclxuICAgICAgc2V0T3BlblJlc3VsdCh0cnVlKTtcclxuICAgICAgYXhpb3Moe1xyXG4gICAgICAgIG1ldGhvZDogXCJwb3N0XCIsXHJcbiAgICAgICAgdXJsOiBcIi9hcGkvZ2V0U2VhcmNoXCIsXHJcbiAgICAgICAgcGFyYW1zOiB7IHZhbDogdmFsdWVTZWFyY2gudG9TdHJpbmcoKSB9LFxyXG4gICAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICAgIFwiQ29udGVudC1UeXBlXCI6IFwiYXBwbGljYXRpb24vanNvblwiLFxyXG4gICAgICAgICAgQXV0aG9yaXphdGlvbjogYEJlYXJlciAke2F1dGguYXV0aC5hY2Nlc3NUb2tlbn1gLFxyXG4gICAgICAgIH0sXHJcbiAgICAgIH0pXHJcbiAgICAgICAgLnRoZW4oZnVuY3Rpb24gKHJlc3BvbnNlKSB7XHJcbiAgICAgICAgICAvL2hhbmRsZSBzdWNjZXNzXHJcbiAgICAgICAgICAvLyBzZXRQYXRpZW50c0xpc3QocmVzcG9uc2UpO1xyXG4gICAgICAgICAgc2V0UmVzdWx0U2VhcmNoKHJlc3BvbnNlLmRhdGEpO1xyXG4gICAgICAgICAgLy8gY29uc29sZS5sb2cocmVzdWx0U2VhcmNoKTtcclxuICAgICAgICAgIHNldFNlYXJjaChlLnRhcmdldC52YWx1ZSk7XHJcbiAgICAgICAgfSlcclxuICAgICAgICAuY2F0Y2goZnVuY3Rpb24gKHJlc3BvbnNlKSB7XHJcbiAgICAgICAgICAvLyBjb25zb2xlLmxvZyhyZXNwb25zZSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBzZXRPcGVuUmVzdWx0KGZhbHNlKTtcclxuICAgIH1cclxuXHJcbiAgICBjb25zb2xlLmxvZyhpc09wZW4pO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IG9uQ2xpY2tJZlZhbHVlID0gKGUpID0+IHtcclxuICAgIGlmIChyZXN1bHRTZWFyY2g/Lmxlbmd0aCA+IDApIHtcclxuICAgICAgc2V0T3BlblJlc3VsdCh0cnVlKTtcclxuICAgIH1cclxuICB9O1xyXG4gIC8vIGNvbnN0IG9uQmx1cnNldFZhbHVlID0gKGUpID0+IHtcclxuICAvLyAgIGNvbnN0IGN1cnJlbnRUYXJnZXQgPSBlLmN1cnJlbnRUYXJnZXQ7XHJcblxyXG4gIC8vICAgLy8gQ2hlY2sgdGhlIG5ld2x5IGZvY3VzZWQgZWxlbWVudCBpbiB0aGUgbmV4dCB0aWNrIG9mIHRoZSBldmVudCBsb29wXHJcbiAgLy8gICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAvLyAgICAgLy8gQ2hlY2sgaWYgdGhlIG5ldyBhY3RpdmVFbGVtZW50IGlzIGEgY2hpbGQgb2YgdGhlIG9yaWdpbmFsIGNvbnRhaW5lclxyXG4gIC8vICAgICBpZiAoIWN1cnJlbnRUYXJnZXQuY29udGFpbnMoZG9jdW1lbnQuYWN0aXZlRWxlbWVudCkpIHtcclxuICAvLyAgICAgICAvLyBZb3UgY2FuIGludm9rZSBhIGNhbGxiYWNrIG9yIGFkZCBjdXN0b20gbG9naWMgaGVyZVxyXG4gIC8vICAgICAgIHNldE9wZW5SZXN1bHQoZmFsc2UpO1xyXG4gIC8vICAgICB9XHJcbiAgLy8gICB9LCAwKTtcclxuICAvLyB9O1xyXG5cclxuICBjb25zdCByZWRpcmVjdGlvblRvUGF0aWVudCA9IChpZCkgPT4ge1xyXG4gICAgaWYgKGlkKSB7XHJcbiAgICAgIGNvbnNvbGUubG9nKGlkKTtcclxuICAgICAgcmV0dXJuICh3aW5kb3cubG9jYXRpb24uaHJlZiA9IFwiL1wiICsgaWQpO1xyXG4gICAgfVxyXG4gIH07XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8Rm9ybSBjbGFzc05hbWU9XCJkLWZsZXhcIj5cclxuICAgICAgPEZvcm0uQ29udHJvbFxyXG4gICAgICAgIHR5cGU9XCJzZWFyY2hcIlxyXG4gICAgICAgIHBsYWNlaG9sZGVyPVwiU2VhcmNoXCJcclxuICAgICAgICBjbGFzc05hbWU9XCJtZS0yXCJcclxuICAgICAgICAvLyBvbkJsdXI9e29uQmx1cnNldFZhbHVlfVxyXG4gICAgICAgIG9uQ2xpY2s9eyhlKSA9PiBvbkNsaWNrSWZWYWx1ZSgpfVxyXG4gICAgICAgIGFyaWEtbGFiZWw9XCJTZWFyY2hcIlxyXG4gICAgICAgIG9uQ2hhbmdlPXtzZXRWYWx1ZX1cclxuICAgICAgLz5cclxuICAgICAge2lzT3Blbn1cclxuICAgICAge3Jlc3VsdFNlYXJjaCAmJiBpc09wZW4gJiYgKFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicmVzdWx0LXNlYXJjaFwiPlxyXG4gICAgICAgICAgPHVsPlxyXG4gICAgICAgICAgICB7cmVzdWx0U2VhcmNoPy5tYXAoKHJlc3VsdCkgPT4gKFxyXG4gICAgICAgICAgICAgIDxsaVxyXG4gICAgICAgICAgICAgICAga2V5PXtyZXN1bHQuaWR9XHJcbiAgICAgICAgICAgICAgICBvbkNsaWNrPXsoZSkgPT4gcmVkaXJlY3Rpb25Ub1BhdGllbnQocmVzdWx0LmlkKX1cclxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImxpbmstdG9QYXRpZW50XCJcclxuICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgICB7cmVzdWx0Lmxhc3RuYW1lfSB7cmVzdWx0LmZpcnN0bmFtZX0ge3Jlc3VsdD8ubmlja25hbWVzfVxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgICA8L3VsPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICApfVxyXG4gICAgPC9Gb3JtPlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBTZWFyY2g7XHJcbiIsImltcG9ydCBSZWFjdCwgeyB1c2VDb250ZXh0LCB1c2VEZWJ1Z1ZhbHVlIH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IHVzZU5hdmlnYXRlIH0gZnJvbSBcInJlYWN0LXJvdXRlci1kb21cIjtcclxuXHJcbmNvbnN0IFVuYXV0aG9yaXplZCA9ICgpID0+IHtcclxuICBjb25zdCBuYXZpZ2F0ZSA9IHVzZU5hdmlnYXRlKCk7XHJcblxyXG4gIGNvbnN0IGdvQmFjayA9ICgpID0+IG5hdmlnYXRlKC0xKTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxzZWN0aW9uPlxyXG4gICAgICA8aDE+VW5hdXRob3JpemVkPC9oMT5cclxuICAgICAgPGJyIC8+XHJcbiAgICAgIDxwPllvdSBkbyBub3QgaGF2ZSBhY2Nlc3MgdG8gdGhlIHJlcXVlc3RlZCBwYWdlLjwvcD5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4R3Jvd1wiPlxyXG4gICAgICAgIDxidXR0b24gb25DbGljaz17Z29CYWNrfT5HbyBCYWNrPC9idXR0b24+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9zZWN0aW9uPlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBVbmF1dGhvcml6ZWQ7XHJcbiIsIi8vIC4vYXNzZXRzL2pzL2NvbXBvbmVudHMvSG9tZS5qc1xyXG4gICAgXHJcbmltcG9ydCBSZWFjdCwge0NvbXBvbmVudH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQge1JvdXRlcywgUm91dGUsIFN3aXRjaCxOYXZpZ2F0ZSwgTGluaywgd2l0aFJvdXRlcn0gZnJvbSAncmVhY3Qtcm91dGVyLWRvbSc7XHJcblxyXG5pbXBvcnQgUG9zdHMgZnJvbSAnLi9Qb3N0cyc7XHJcblxyXG5jbGFzcyBVc2VycyBleHRlbmRzIENvbXBvbmVudCB7XHJcbiAgICBcclxuICAgIHJlbmRlcigpIHtcclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgVXNlcnNcclxuICAgICAgICAgICAgICBcclxuICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICApXHJcbiAgICB9XHJcbn1cclxuICAgIFxyXG5leHBvcnQgZGVmYXVsdCBVc2VycztcclxuIiwiaW1wb3J0IFJlYWN0LCB7IHVzZUNvbnRleHQsIHVzZURlYnVnVmFsdWUgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgdXNlTmF2aWdhdGUsIExpbmsgfSBmcm9tIFwicmVhY3Qtcm91dGVyLWRvbVwiO1xyXG5pbXBvcnQgdXNlTG9nb3V0IGZyb20gXCIuLi9ob29rcy91c2VMb2dvdXRcIjtcclxuaW1wb3J0IEJ1dHRvbiBmcm9tIFwicmVhY3QtYm9vdHN0cmFwL0J1dHRvblwiO1xyXG5pbXBvcnQgQ29udGFpbmVyIGZyb20gXCJyZWFjdC1ib290c3RyYXAvQ29udGFpbmVyXCI7XHJcbmltcG9ydCB7IEZvbnRBd2Vzb21lSWNvbiB9IGZyb20gXCJAZm9ydGF3ZXNvbWUvcmVhY3QtZm9udGF3ZXNvbWVcIjtcclxuaW1wb3J0IHsgZmFBcnJvd1JpZ2h0IH0gZnJvbSBcIkBmb3J0YXdlc29tZS9mcmVlLXNvbGlkLXN2Zy1pY29uc1wiO1xyXG5pbXBvcnQgRm9ybSBmcm9tIFwicmVhY3QtYm9vdHN0cmFwL0Zvcm1cIjtcclxuaW1wb3J0IE5hdiBmcm9tIFwicmVhY3QtYm9vdHN0cmFwL05hdlwiO1xyXG5pbXBvcnQgTmF2YmFyIGZyb20gXCJyZWFjdC1ib290c3RyYXAvTmF2YmFyXCI7XHJcbmltcG9ydCBOYXZEcm9wZG93biBmcm9tIFwicmVhY3QtYm9vdHN0cmFwL05hdkRyb3Bkb3duXCI7XHJcbmltcG9ydCBNZW51IGZyb20gXCIuL01lbnVcIjtcclxuaW1wb3J0IEZvcm1fTWVldFJhcHBvcnRzIGZyb20gXCIuL0Zvcm1fTWVldFJhcHBvcnRzXCI7XHJcbmltcG9ydCB7IFJvdXRlcywgUm91dGUgfSBmcm9tIFwicmVhY3Qtcm91dGVyLWRvbVwiO1xyXG5cclxuY29uc3QgUmVwcG9ydENhbGxzID0gKCkgPT4ge1xyXG4gIGNvbnN0IG5hdmlnYXRlID0gdXNlTmF2aWdhdGUoKTtcclxuICBjb25zdCBsb2dvdXQgPSB1c2VMb2dvdXQoKTtcclxuXHJcbiAgY29uc3Qgc2lnbk91dCA9IGFzeW5jICgpID0+IHtcclxuICAgIGF3YWl0IGxvZ291dCgpO1xyXG4gICAgbmF2aWdhdGUoXCIvY29ubmVjdFwiKTtcclxuICB9O1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPD5cclxuICAgICAgPHA+UmVwcG9ydHMgQ2FsbHM8L3A+XHJcbiAgICA8Lz5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgUmVwcG9ydENhbGxzO1xyXG4iLCJpbXBvcnQgUmVhY3QsIHsgdXNlQ29udGV4dCwgdXNlRGVidWdWYWx1ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyB1c2VOYXZpZ2F0ZSwgTGluayB9IGZyb20gXCJyZWFjdC1yb3V0ZXItZG9tXCI7XHJcbmltcG9ydCB1c2VMb2dvdXQgZnJvbSBcIi4uL2hvb2tzL3VzZUxvZ291dFwiO1xyXG5pbXBvcnQgQnV0dG9uIGZyb20gXCJyZWFjdC1ib290c3RyYXAvQnV0dG9uXCI7XHJcbmltcG9ydCBDb250YWluZXIgZnJvbSBcInJlYWN0LWJvb3RzdHJhcC9Db250YWluZXJcIjtcclxuaW1wb3J0IHsgRm9udEF3ZXNvbWVJY29uIH0gZnJvbSBcIkBmb3J0YXdlc29tZS9yZWFjdC1mb250YXdlc29tZVwiO1xyXG5pbXBvcnQgeyBmYUFycm93UmlnaHQgfSBmcm9tIFwiQGZvcnRhd2Vzb21lL2ZyZWUtc29saWQtc3ZnLWljb25zXCI7XHJcbmltcG9ydCBGb3JtIGZyb20gXCJyZWFjdC1ib290c3RyYXAvRm9ybVwiO1xyXG5pbXBvcnQgTmF2IGZyb20gXCJyZWFjdC1ib290c3RyYXAvTmF2XCI7XHJcbmltcG9ydCBOYXZiYXIgZnJvbSBcInJlYWN0LWJvb3RzdHJhcC9OYXZiYXJcIjtcclxuaW1wb3J0IE5hdkRyb3Bkb3duIGZyb20gXCJyZWFjdC1ib290c3RyYXAvTmF2RHJvcGRvd25cIjtcclxuaW1wb3J0IE1lbnUgZnJvbSBcIi4vTWVudVwiO1xyXG5pbXBvcnQgRm9ybV9NZWV0UmFwcG9ydHMgZnJvbSBcIi4vRm9ybV9NZWV0UmFwcG9ydHNcIjtcclxuaW1wb3J0IHsgUm91dGVzLCBSb3V0ZSB9IGZyb20gXCJyZWFjdC1yb3V0ZXItZG9tXCI7XHJcblxyXG5jb25zdCBSZXBwb3J0R29hbHMgPSAoKSA9PiB7XHJcbiAgY29uc3QgbmF2aWdhdGUgPSB1c2VOYXZpZ2F0ZSgpO1xyXG4gIGNvbnN0IGxvZ291dCA9IHVzZUxvZ291dCgpO1xyXG5cclxuICBjb25zdCBzaWduT3V0ID0gYXN5bmMgKCkgPT4ge1xyXG4gICAgYXdhaXQgbG9nb3V0KCk7XHJcbiAgICBuYXZpZ2F0ZShcIi9jb25uZWN0XCIpO1xyXG4gIH07XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8PlxyXG4gICAgICA8cD5SZXBwb3J0cyBHb2FsczwvcD5cclxuICAgIDwvPlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBSZXBwb3J0R29hbHM7XHJcbiIsImltcG9ydCBSZWFjdCwgeyBjcmVhdGVDb250ZXh0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5cclxuY29uc3QgQXV0aENvbnRleHQgPSBjcmVhdGVDb250ZXh0KHt9KTtcclxuXHJcbmV4cG9ydCBjb25zdCBBdXRoUHJvdmlkZXIgPSAoeyBjaGlsZHJlbiB9KSA9PiB7XHJcbiAgY29uc3QgW2F1dGgsIHNldEF1dGhdID0gdXNlU3RhdGUoe30pO1xyXG4gIGNvbnN0IFtwZXJzaXN0LCBzZXRQZXJzaXN0XSA9IHVzZVN0YXRlKFxyXG4gICAgSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcInBlcnNpc3RcIikpIHx8IGZhbHNlXHJcbiAgKTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxBdXRoQ29udGV4dC5Qcm92aWRlciB2YWx1ZT17eyBhdXRoLCBzZXRBdXRoLCBwZXJzaXN0LCBzZXRQZXJzaXN0IH19PlxyXG4gICAgICB7Y2hpbGRyZW59XHJcbiAgICA8L0F1dGhDb250ZXh0LlByb3ZpZGVyPlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBBdXRoQ29udGV4dDtcclxuIiwiaW1wb3J0IHsgdXNlQ29udGV4dCwgdXNlRGVidWdWYWx1ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgQXV0aENvbnRleHQgZnJvbSBcIi4uL2NvbnRleHQvQXV0aFByb3ZpZGVyXCI7XHJcblxyXG5jb25zdCB1c2VBdXRoID0gKCkgPT4ge1xyXG4gIGNvbnN0IHsgYXV0aCB9ID0gdXNlQ29udGV4dChBdXRoQ29udGV4dCk7XHJcbiAgdXNlRGVidWdWYWx1ZShhdXRoLCAoYXV0aCkgPT4gKGF1dGg/LnVzZXIgPyBcIkxvZ2dlZCBJblwiIDogXCJMb2dnZWQgT3V0XCIpKTtcclxuICByZXR1cm4gdXNlQ29udGV4dChBdXRoQ29udGV4dCk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCB1c2VBdXRoO1xyXG4iLCJpbXBvcnQgYXhpb3MgZnJvbSBcImF4aW9zXCI7XHJcbmltcG9ydCB1c2VBdXRoIGZyb20gXCIuL3VzZUF1dGhcIjtcclxuXHJcbmNvbnN0IHVzZUxvZ291dCA9ICgpID0+IHtcclxuICBjb25zdCB7IHNldEF1dGggfSA9IHVzZUF1dGgoKTtcclxuXHJcbiAgY29uc3QgbG9nb3V0ID0gYXN5bmMgKCkgPT4ge1xyXG4gICAgc2V0QXV0aCh7fSk7XHJcbiAgICB0cnkge1xyXG4gICAgICBhd2FpdCBheGlvcyhcIi9hcGkvdG9rZW4vaW52YWxpZGF0ZVwiLCB7XHJcbiAgICAgICAgd2l0aENyZWRlbnRpYWxzOiB0cnVlLFxyXG4gICAgICB9KTtcclxuICAgIH0gY2F0Y2ggKGVycikge1xyXG4gICAgICBjb25zb2xlLmVycm9yKGVycik7XHJcbiAgICB9XHJcbiAgfTtcclxuXHJcbiAgcmV0dXJuIGxvZ291dDtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IHVzZUxvZ291dDtcclxuIiwiaW1wb3J0IGF4aW9zIGZyb20gXCJheGlvc1wiO1xyXG5pbXBvcnQgdXNlQXV0aCBmcm9tIFwiLi91c2VBdXRoXCI7XHJcblxyXG5jb25zdCB1c2VSZWZyZXNoVG9rZW4gPSAoKSA9PiB7XHJcbiAgY29uc3QgeyBzZXRBdXRoIH0gPSB1c2VBdXRoKCk7XHJcblxyXG4gIGNvbnN0IHJlZnJlc2ggPSBhc3luYyAoKSA9PiB7XHJcbiAgICBjb25zdCB0b2tlbiA9IGF3YWl0IGF4aW9zLmdldChcIi9hcGkvdG9rZW4vcmVmcmVzaFwiLCB7XHJcbiAgICAgIHdpdGhDcmVkZW50aWFsczogdHJ1ZSxcclxuICAgIH0pO1xyXG5cclxuICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgYXhpb3MuZ2V0KFwiL2FwaS9nZXRVc2VyXCIsIHtcclxuICAgICAgaGVhZGVyczogeyBBdXRob3JpemF0aW9uOiBgQmVhcmVyICR7dG9rZW4uZGF0YS50b2tlbn1gIH0sXHJcbiAgICB9KTtcclxuXHJcbiAgICBzZXRBdXRoKChwcmV2KSA9PiB7XHJcbiAgICAgIHJldHVybiB7XHJcbiAgICAgICAgLi4ucHJldixcclxuICAgICAgICByb2xlczogcmVzcG9uc2UuZGF0YS5yb2xlTmFtZXMsXHJcbiAgICAgICAgYWNjZXNzVG9rZW46IHJlc3BvbnNlLmRhdGEuY3JlZGVudGlhbHMsXHJcbiAgICAgIH07XHJcbiAgICB9KTtcclxuICAgIHJldHVybiByZXNwb25zZS5kYXRhLmFjY2Vzc1Rva2VuO1xyXG4gIH07XHJcbiAgcmV0dXJuIHJlZnJlc2g7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCB1c2VSZWZyZXNoVG9rZW47XHJcbiIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IFJlYWN0RE9NIGZyb20gXCJyZWFjdC1kb21cIjtcclxuLy8gaW1wb3J0IFwiLi9pbmRleC5jc3NcIjtcclxuaW1wb3J0IEFwcCBmcm9tIFwiLi9hcHBcIjtcclxuaW1wb3J0IHsgQXV0aFByb3ZpZGVyIH0gZnJvbSBcIi4vY29udGV4dC9BdXRoUHJvdmlkZXJcIjtcclxuaW1wb3J0IHsgQnJvd3NlclJvdXRlciwgUm91dGVzLCBSb3V0ZSB9IGZyb20gXCJyZWFjdC1yb3V0ZXItZG9tXCI7XHJcblxyXG5SZWFjdERPTS5yZW5kZXIoXHJcbiAgPFJlYWN0LlN0cmljdE1vZGU+XHJcbiAgICA8QnJvd3NlclJvdXRlcj5cclxuICAgICAgPEF1dGhQcm92aWRlcj5cclxuICAgICAgICA8Um91dGVzPlxyXG4gICAgICAgICAgPFJvdXRlIHBhdGg9XCIvKlwiIGVsZW1lbnQ9ezxBcHAgLz59IC8+XHJcbiAgICAgICAgPC9Sb3V0ZXM+XHJcbiAgICAgIDwvQXV0aFByb3ZpZGVyPlxyXG4gICAgPC9Ccm93c2VyUm91dGVyPlxyXG4gIDwvUmVhY3QuU3RyaWN0TW9kZT4sXHJcbiAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJyb290XCIpXHJcbik7XHJcbiIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZUNvbnRleHQiLCJ1c2VEZWJ1Z1ZhbHVlIiwiTG9naW4iLCJIb21lIiwiTGF5b3V0IiwiRWRpdG9yIiwiQWRtaW4iLCJNaXNzaW5nIiwiVW5hdXRob3JpemVkIiwiTG91bmdlIiwiTGlua1BhZ2UiLCJSZXF1aXJlQXV0aCIsIlBlcnNpc3RMb2dpbiIsIlJvdXRlcyIsIlJvdXRlIiwiUGF0aWVudHMiLCJSZXBwb3J0Q2FsbHMiLCJSZXBwb3J0R29hbHMiLCJQYXRpZW50IiwiUk9MRVMiLCJVc2VyIiwiQXBwIiwiTGluayIsIlVzZXJzIiwidXNlTmF2aWdhdGUiLCJ1c2VMb2dvdXQiLCJCdXR0b24iLCJDb250YWluZXIiLCJGb3JtIiwiTmF2IiwiTmF2YmFyIiwiTmF2RHJvcGRvd24iLCJGb3JtX01lZXRSYXBwb3J0cyIsIm5hdmlnYXRlIiwibG9nb3V0Iiwic2lnbk91dCIsInVzZVN0YXRlIiwidXNlRWZmZWN0IiwiRm9udEF3ZXNvbWVJY29uIiwiZmFBcnJvd1JpZ2h0IiwiTWVudSIsInJlcG9ydE1lZXQiLCJzZXRSZXBvcnRNZWV0IiwicmVwb3J0Q2FsbHMiLCJzZXRSZXBvcnRDYWxscyIsInJlcG9ydEdvYWxzIiwic2V0UmVwb3J0R29hbHMiLCJwYXRoIiwidXJsIiwiY29uc29sZSIsImxvZyIsImdvVG9SZXBwb3J0IiwiaGlzdG9yeSIsInB1c2giLCJvbkNsaWNrUmVwcG9ydE1lZXQiLCJvbkNsaWNrUmVwcG9ydENhbGxzIiwib25DbGlja1JlcHBvcnRHb2FscyIsIk91dGxldCIsInVzZVJlZiIsInVzZUF1dGgiLCJ1c2VMb2NhdGlvbiIsImF4aW9zIiwiTE9HSU5fVVJMIiwic2V0QXV0aCIsInBlcnNpc3QiLCJzZXRQZXJzaXN0IiwibG9jYXRpb24iLCJmcm9tIiwic3RhdGUiLCJwYXRobmFtZSIsInVzZXJSZWYiLCJlcnJSZWYiLCJlbWFpbCIsInNldFVzZXIiLCJwYXNzd29yZCIsInNldFB3ZCIsImVyck1zZyIsInNldEVyck1zZyIsImN1cnJlbnQiLCJmb2N1cyIsImhhbmRsZVN1Ym1pdCIsImUiLCJwcmV2ZW50RGVmYXVsdCIsInBvc3QiLCJKU09OIiwic3RyaW5naWZ5IiwiaGVhZGVycyIsInJlc3BvbnNlIiwiYWNjZXNzVG9rZW4iLCJkYXRhIiwidG9rZW4iLCJnZXQiLCJ3aXRoQ3JlZGVudGlhbHMiLCJBdXRob3JpemF0aW9uIiwicm9sZXNfdXNlZCIsInJvbGVzIiwicm9sZU5hbWVzIiwibGVuZ3RoIiwicmVwbGFjZSIsInN0YXR1cyIsInRvZ2dsZVBlcnNpc3QiLCJwcmV2IiwibG9jYWxTdG9yYWdlIiwic2V0SXRlbSIsInRhcmdldCIsInZhbHVlIiwiZmFTaWduT3V0IiwiT2ZmY2FudmFzIiwiU2VhcmNoIiwiYmFja2dyb3VuZENvbG9yIiwicGFkZGluZyIsImxvZ29QYXRoIiwidXNlUGFyYW1zIiwiVGFiIiwiVGFicyIsIkZpY2hlIiwiaWQiLCJiYWNrZ3JvdW5kSW1hZ2UiLCJhdXRoIiwicGF0aWVudCIsInNldFBhdGllbnQiLCJpbWdQYXRpZW50Iiwic2V0SW1nUGF0aWVudCIsImtleSIsInNldEtleSIsImlkUGF0aWVudCIsInNldElkUGF0aWVudCIsImxvY2F0aW9uV2ViIiwic2V0TG9jYXRpb24iLCJmb3JtRGF0YSIsIkZvcm1EYXRhIiwiYXBwZW5kIiwidG9TdHJpbmciLCJvYmpQYXRpZW50IiwibWV0aG9kIiwidGhlbiIsImltYWdlIiwiT2JqZWN0Iiwia2V5cyIsImZpcnN0bmFtZSIsImxhc3RuYW1lIiwiRGF0ZSIsImJpcnRoZGF0ZSIsInRvTG9jYWxlRGF0ZVN0cmluZyIsImZpcnN0Q29udGFjdERhdGUiLCJrIiwiVGFibGUiLCJmYVVzZXIiLCJBY2NvcmRpb24iLCJwYXRpZW50c0xpc3QiLCJzZXRQYXRpZW50c0xpc3QiLCJsZW5ndGhMaXN0Iiwic2V0TGVuZ3RoTGlzdCIsInJlYWRNb3JlIiwibWFwIiwiYmlydGhMb2NhdGlvbiIsInVzZVJlZnJlc2hUb2tlbiIsImlzTG9hZGluZyIsInNldElzTG9hZGluZyIsInJlZnJlc2giLCJpc01vdW50ZWQiLCJ2ZXJpZnlSZWZyZXNoVG9rZW4iLCJlcnJvciIsIkNvbXBvbmVudCIsIlBvc3RzIiwicG9zdHMiLCJsb2FkaW5nIiwiZ2V0UG9zdHMiLCJyZXMiLCJuYW1lIiwiZGVzY3JpcHRpb24iLCJmYVBsdXNDaXJjbGUiLCJzdGF0dXNTdWl2aSIsInNldFN0YXR1cyIsImluZm9ybWF0aW9uUGF0aWVudCIsInNldEluZm9ybWF0aW9uIiwiaXRlbCIsInN1Z2UiLCJwYXRoU3RyaW5nIiwiZmlsdGVyIiwidmFsZXVyUGFyZW50UGF0aFN0cmluZyIsInBhdGllbnRJbmZvIiwiZGVsZXRlZEF0Iiwic3VnZyIsInN0YXJ0IiwidG9Mb2NhbGVTdHJpbmciLCJkYXRlU3R5bGUiLCJlbmQiLCJ2YWxldXJwYXRoU3RyaW5nIiwicGFyZW50Iiwic3RhcnREYXRlIiwiZW5kRGF0ZSIsInZhbGV1clBhcmVudCIsImNvbW1lbnRDb2x1bW4iLCJ2YWxldXJDb2x1bW4iLCJjb21tZW50IiwiTmF2aWdhdGUiLCJhbGxvd2VkUm9sZXMiLCJmaW5kIiwicm9sZSIsImluY2x1ZGVzIiwidmFsdWVTZWFyY2giLCJzZXRTZWFyY2giLCJyZXN1bHRTZWFyY2giLCJzZXRSZXN1bHRTZWFyY2giLCJpc09wZW4iLCJzZXRPcGVuUmVzdWx0Iiwic2V0VmFsdWUiLCJwYXJhbXMiLCJ2YWwiLCJvbkNsaWNrSWZWYWx1ZSIsInJlZGlyZWN0aW9uVG9QYXRpZW50Iiwid2luZG93IiwiaHJlZiIsInJlc3VsdCIsIm5pY2tuYW1lcyIsImdvQmFjayIsIlN3aXRjaCIsIndpdGhSb3V0ZXIiLCJjcmVhdGVDb250ZXh0IiwiQXV0aENvbnRleHQiLCJBdXRoUHJvdmlkZXIiLCJjaGlsZHJlbiIsInBhcnNlIiwiZ2V0SXRlbSIsInVzZXIiLCJjcmVkZW50aWFscyIsIlJlYWN0RE9NIiwiQnJvd3NlclJvdXRlciIsInJlbmRlciIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiXSwic291cmNlUm9vdCI6IiJ9