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
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_15___default().createElement(_Profile_Fiche_Fiche__WEBPACK_IMPORTED_MODULE_21__["default"], null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_15___default().createElement(react_bootstrap_Tab__WEBPACK_IMPORTED_MODULE_29__["default"], {
    eventKey: "suivi",
    title: "Profile"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_15___default().createElement(_Profile_Profile__WEBPACK_IMPORTED_MODULE_23__["default"], null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_15___default().createElement(react_bootstrap_Tab__WEBPACK_IMPORTED_MODULE_29__["default"], {
    eventKey: "indicateurs",
    title: "Indicateurs"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_15___default().createElement(_Profile_Indicators__WEBPACK_IMPORTED_MODULE_22__["default"], null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_15___default().createElement(react_bootstrap_Tab__WEBPACK_IMPORTED_MODULE_29__["default"], {
    eventKey: "medias",
    title: "Medias"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_15___default().createElement(_Profile_Medias__WEBPACK_IMPORTED_MODULE_24__["default"], null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_15___default().createElement(react_bootstrap_Tab__WEBPACK_IMPORTED_MODULE_29__["default"], {
    eventKey: "contacts",
    title: "Contacts"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_15___default().createElement(_Profile_Contacts__WEBPACK_IMPORTED_MODULE_25__["default"], null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_15___default().createElement(react_bootstrap_Tab__WEBPACK_IMPORTED_MODULE_29__["default"], {
    eventKey: "lieux",
    title: "Lieux"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_15___default().createElement(_Profile_Places__WEBPACK_IMPORTED_MODULE_26__["default"], null)))))));
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
      console.log(response);
      setContacts(response);
    })["catch"](function (response) {});
  }, [idPatient]);
  console.log(listContacts);
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
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router/dist/index.js");
/* harmony import */ var react_bootstrap_Accordion__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! react-bootstrap/Accordion */ "./node_modules/react-bootstrap/esm/Accordion.js");
/* harmony import */ var _hooks_useAuth__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../../../hooks/useAuth */ "./assets/hooks/useAuth.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_18__);
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @fortawesome/react-fontawesome */ "./node_modules/@fortawesome/react-fontawesome/index.es.js");
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ "./node_modules/@fortawesome/free-solid-svg-icons/index.mjs");
/* harmony import */ var _ModalItemFiche__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./ModalItemFiche */ "./assets/component/Profile/Fiche/ModalItemFiche.js");

















function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }













var Fiche = function Fiche() {
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
      setInformationTemplateBlock = _useState8[1];

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
      setInformation(response.data);
    })["catch"](function (response) {});
    axios__WEBPACK_IMPORTED_MODULE_18___default()({
      method: "get",
      url: "/information/template/element",
      data: formData,
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer ".concat(auth.auth.accessToken)
      }
    }).then(function (response) {
      setInformationTemplateBlock(response.data);
    })["catch"](function (response) {});
  }, [idPatient]);
  console.log("infos", informationTemplateBlock);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_16___default().createElement("section", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_16___default().createElement(react_bootstrap_Accordion__WEBPACK_IMPORTED_MODULE_22__["default"], {
    defaultActiveKey: "0",
    flush: true,
    className: "accordion-fiche"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_16___default().createElement(react_bootstrap_Accordion__WEBPACK_IMPORTED_MODULE_22__["default"].Item, {
    eventKey: "0"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_16___default().createElement(react_bootstrap_Accordion__WEBPACK_IMPORTED_MODULE_22__["default"].Header, null, "Statut de suivi"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_16___default().createElement(react_bootstrap_Accordion__WEBPACK_IMPORTED_MODULE_22__["default"].Body, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_16___default().createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_16___default().createElement("h6", null, "Statut de suivi", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_16___default().createElement((react__WEBPACK_IMPORTED_MODULE_16___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_16___default().createElement(_ModalItemFiche__WEBPACK_IMPORTED_MODULE_20__["default"], {
    props: informationTemplateBlock === null || informationTemplateBlock === void 0 ? void 0 : informationTemplateBlock.filter(function (e) {
      var _e$elements, _e$elements$parentSug;

      return ((_e$elements = e.elements) === null || _e$elements === void 0 ? void 0 : (_e$elements$parentSug = _e$elements.parentSugg) === null || _e$elements$parentSug === void 0 ? void 0 : _e$elements$parentSug.pathString) === "/patient/fiche/statut-du-suivi";
    })
  }))), informationPatient === null || informationPatient === void 0 ? void 0 : informationPatient.map(function (patient, id) {
    var _patient$itel, _patient$itel$suge, _patient$sugg;

    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_16___default().createElement((react__WEBPACK_IMPORTED_MODULE_16___default().Fragment), null, patient && ((_patient$itel = patient.itel) === null || _patient$itel === void 0 ? void 0 : (_patient$itel$suge = _patient$itel.suge) === null || _patient$itel$suge === void 0 ? void 0 : _patient$itel$suge.pathString) === "/patient/fiche/statut-du-suivi" && patient.deletedAt === null && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_16___default().createElement("div", {
      className: "row",
      key: patient.id
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_16___default().createElement("div", {
      className: "col-sm-4"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_16___default().createElement("p", null, (_patient$sugg = patient.sugg) === null || _patient$sugg === void 0 ? void 0 : _patient$sugg.value)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_16___default().createElement("div", {
      className: "col-sm-4"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_16___default().createElement("p", null, new Date(patient.start).toLocaleString("fr-BE", {
      dateStyle: "short"
    }), "-", new Date(patient.end).toLocaleString("fr-BE", {
      dateStyle: "short"
    }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_16___default().createElement("div", {
      className: "col-sm-4"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_16___default().createElement("button", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_16___default().createElement(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_19__.FontAwesomeIcon, {
      icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_23__.faEdit
    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_16___default().createElement("button", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_16___default().createElement(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_19__.FontAwesomeIcon, {
      icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_23__.faCancel
    })))));
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_16___default().createElement("div", {
    className: "block mt-4"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_16___default().createElement("h6", null, "Equipes", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_16___default().createElement(_ModalItemFiche__WEBPACK_IMPORTED_MODULE_20__["default"], {
    props: informationTemplateBlock === null || informationTemplateBlock === void 0 ? void 0 : informationTemplateBlock.filter(function (e) {
      var _e$elements2, _e$elements2$parentSu;

      return ((_e$elements2 = e.elements) === null || _e$elements2 === void 0 ? void 0 : (_e$elements2$parentSu = _e$elements2.parentSugg) === null || _e$elements2$parentSu === void 0 ? void 0 : _e$elements2$parentSu.pathString) === "/patient/suivi/equipes";
    })
  })), informationPatient === null || informationPatient === void 0 ? void 0 : informationPatient.map(function (patient, id) {
    var _patient$sugg2;

    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_16___default().createElement((react__WEBPACK_IMPORTED_MODULE_16___default().Fragment), null, patient && ((_patient$sugg2 = patient.sugg) === null || _patient$sugg2 === void 0 ? void 0 : _patient$sugg2.parentSugg.pathString) === "/patient/suivi/equipes" && patient.deletedAt === null && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_16___default().createElement("div", {
      className: "row",
      key: patient.id
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_16___default().createElement("div", {
      className: "col-sm-4"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_16___default().createElement("p", null, patient.sugg.value)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_16___default().createElement("div", {
      className: "col-sm-4"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_16___default().createElement("p", null, new Date(patient.start).toLocaleString("fr-BE", {
      dateStyle: "short"
    }), "-", new Date(patient.end).toLocaleString("fr-BE", {
      dateStyle: "short"
    }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_16___default().createElement("div", {
      className: "col-sm-4"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_16___default().createElement("button", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_16___default().createElement(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_19__.FontAwesomeIcon, {
      icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_23__.faEdit
    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_16___default().createElement("button", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_16___default().createElement(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_19__.FontAwesomeIcon, {
      icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_23__.faCancel
    })))));
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_16___default().createElement("div", {
    className: "block mt-4"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_16___default().createElement("h6", null, "Programme", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_16___default().createElement(_ModalItemFiche__WEBPACK_IMPORTED_MODULE_20__["default"], {
    props: informationTemplateBlock === null || informationTemplateBlock === void 0 ? void 0 : informationTemplateBlock.filter(function (e) {
      var _e$elements3, _e$elements3$parentSu;

      return ((_e$elements3 = e.elements) === null || _e$elements3 === void 0 ? void 0 : (_e$elements3$parentSu = _e$elements3.parentSugg) === null || _e$elements3$parentSu === void 0 ? void 0 : _e$elements3$parentSu.pathString) === "/patient/suivi/programme";
    })
  })), informationPatient === null || informationPatient === void 0 ? void 0 : informationPatient.map(function (patient, id) {
    var _patient$sugg3;

    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_16___default().createElement((react__WEBPACK_IMPORTED_MODULE_16___default().Fragment), null, patient && ((_patient$sugg3 = patient.sugg) === null || _patient$sugg3 === void 0 ? void 0 : _patient$sugg3.parentSugg.pathString) === "/patient/suivi/programme" && patient.deletedAt === null && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_16___default().createElement("div", {
      className: "row",
      key: patient.id
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_16___default().createElement("div", {
      className: "col-sm-4"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_16___default().createElement("p", null, patient.sugg.value)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_16___default().createElement("div", {
      className: "col-sm-4"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_16___default().createElement("p", null, new Date(patient.start).toLocaleString("fr-BE", {
      dateStyle: "short"
    }), "-", new Date(patient.end).toLocaleString("fr-BE", {
      dateStyle: "short"
    }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_16___default().createElement("div", {
      className: "col-sm-4"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_16___default().createElement("button", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_16___default().createElement(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_19__.FontAwesomeIcon, {
      icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_23__.faEdit
    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_16___default().createElement("button", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_16___default().createElement(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_19__.FontAwesomeIcon, {
      icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_23__.faCancel
    })))));
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_16___default().createElement("div", {
    className: "block mt-4"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_16___default().createElement("h6", null, "Antenne", " ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_16___default().createElement(_ModalItemFiche__WEBPACK_IMPORTED_MODULE_20__["default"], {
    props: informationTemplateBlock === null || informationTemplateBlock === void 0 ? void 0 : informationTemplateBlock.filter(function (e) {
      var _e$elements4, _e$elements4$parentSu;

      return ((_e$elements4 = e.elements) === null || _e$elements4 === void 0 ? void 0 : (_e$elements4$parentSu = _e$elements4.parentSugg) === null || _e$elements4$parentSu === void 0 ? void 0 : _e$elements4$parentSu.pathString) === "/patient/suivi/antenne";
    })
  })), informationPatient === null || informationPatient === void 0 ? void 0 : informationPatient.map(function (patient, id) {
    var _patient$sugg4;

    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_16___default().createElement((react__WEBPACK_IMPORTED_MODULE_16___default().Fragment), null, patient && ((_patient$sugg4 = patient.sugg) === null || _patient$sugg4 === void 0 ? void 0 : _patient$sugg4.parentSugg.pathString) === "/patient/suivi/antenne" && patient.deletedAt === null && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_16___default().createElement("div", {
      className: "row",
      key: patient.id
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_16___default().createElement("div", {
      className: "col-sm-4"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_16___default().createElement("p", null, patient.sugg.value)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_16___default().createElement("div", {
      className: "col-sm-4"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_16___default().createElement("p", null, new Date(patient.start).toLocaleString("fr-BE", {
      dateStyle: "short"
    }), "-", new Date(patient.end).toLocaleString("fr-BE", {
      dateStyle: "short"
    }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_16___default().createElement("div", {
      className: "col-sm-4"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_16___default().createElement("button", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_16___default().createElement(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_19__.FontAwesomeIcon, {
      icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_23__.faEdit
    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_16___default().createElement("button", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_16___default().createElement(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_19__.FontAwesomeIcon, {
      icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_23__.faCancel
    })))));
  })))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_16___default().createElement(react_bootstrap_Accordion__WEBPACK_IMPORTED_MODULE_22__["default"].Item, {
    eventKey: "1"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_16___default().createElement(react_bootstrap_Accordion__WEBPACK_IMPORTED_MODULE_22__["default"].Header, null, "Information g\xE9n\xE9rale"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_16___default().createElement(react_bootstrap_Accordion__WEBPACK_IMPORTED_MODULE_22__["default"].Body, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_16___default().createElement("div", {
    className: "block"
  }, informationPatient === null || informationPatient === void 0 ? void 0 : informationPatient.map(function (patient, id) {
    var _patient$sugg5;

    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_16___default().createElement((react__WEBPACK_IMPORTED_MODULE_16___default().Fragment), null, patient && ((_patient$sugg5 = patient.sugg) === null || _patient$sugg5 === void 0 ? void 0 : _patient$sugg5.parentSugg.parentSugg.pathString) === "/patient/fiche/information-generale" && patient.deletedAt === null && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_16___default().createElement("div", {
      key: patient.id,
      className: "row"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_16___default().createElement("div", {
      className: "col-sm-2"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_16___default().createElement("h6", null, patient.sugg.parentSugg.value)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_16___default().createElement("div", {
      className: "col-sm-2"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_16___default().createElement("p", null, patient.sugg.value)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_16___default().createElement("div", {
      className: "col-sm-4"
    }, patient.commentColumn), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_16___default().createElement("div", {
      className: "col-sm-2"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_16___default().createElement("button", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_16___default().createElement(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_19__.FontAwesomeIcon, {
      icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_23__.faEdit
    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_16___default().createElement("button", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_16___default().createElement(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_19__.FontAwesomeIcon, {
      icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_23__.faCancel
    }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_16___default().createElement("div", {
      className: "col-sm-2"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_16___default().createElement(_ModalItemFiche__WEBPACK_IMPORTED_MODULE_20__["default"], {
      className: "f-right",
      style: {
        "float": "right"
      },
      props: informationTemplateBlock === null || informationTemplateBlock === void 0 ? void 0 : informationTemplateBlock.filter(function (e) {
        var _e$elements5, _e$elements5$parentSu, _patient$sugg6, _patient$sugg6$parent;

        return ((_e$elements5 = e.elements) === null || _e$elements5 === void 0 ? void 0 : (_e$elements5$parentSu = _e$elements5.parentSugg) === null || _e$elements5$parentSu === void 0 ? void 0 : _e$elements5$parentSu.pathString) === (patient === null || patient === void 0 ? void 0 : (_patient$sugg6 = patient.sugg) === null || _patient$sugg6 === void 0 ? void 0 : (_patient$sugg6$parent = _patient$sugg6.parentSugg) === null || _patient$sugg6$parent === void 0 ? void 0 : _patient$sugg6$parent.pathString);
      })
    }))));
  })))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_16___default().createElement(react_bootstrap_Accordion__WEBPACK_IMPORTED_MODULE_22__["default"].Item, {
    eventKey: "2"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_16___default().createElement(react_bootstrap_Accordion__WEBPACK_IMPORTED_MODULE_22__["default"].Header, null, "Description"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_16___default().createElement(react_bootstrap_Accordion__WEBPACK_IMPORTED_MODULE_22__["default"].Body, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_16___default().createElement("div", {
    className: "block"
  }, informationPatient === null || informationPatient === void 0 ? void 0 : informationPatient.map(function (patient, id) {
    var _patient$itel2, _patient$itel2$itbk, _patient$itel2$itbk$s;

    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_16___default().createElement((react__WEBPACK_IMPORTED_MODULE_16___default().Fragment), null, patient && ((_patient$itel2 = patient.itel) === null || _patient$itel2 === void 0 ? void 0 : (_patient$itel2$itbk = _patient$itel2.itbk) === null || _patient$itel2$itbk === void 0 ? void 0 : (_patient$itel2$itbk$s = _patient$itel2$itbk.sugb) === null || _patient$itel2$itbk$s === void 0 ? void 0 : _patient$itel2$itbk$s.pathString) === "/patient/fiche/description" && patient.deletedAt === null && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_16___default().createElement("div", {
      key: patient.id,
      className: "row"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_16___default().createElement("div", {
      className: "col-sm-4"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_16___default().createElement("h6", null, patient.value)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_16___default().createElement("div", {
      className: "col-sm-4"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_16___default().createElement("p", null, patient.comment)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_16___default().createElement("div", {
      className: "col-sm-4"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_16___default().createElement("button", {
      style: {
        "float": "right"
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_16___default().createElement(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_19__.FontAwesomeIcon, {
      icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_23__.faPlusCircle
    })))));
  })))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_16___default().createElement(react_bootstrap_Accordion__WEBPACK_IMPORTED_MODULE_22__["default"].Item, {
    eventKey: "3"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_16___default().createElement(react_bootstrap_Accordion__WEBPACK_IMPORTED_MODULE_22__["default"].Header, null, "Ressources personnelles"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_16___default().createElement(react_bootstrap_Accordion__WEBPACK_IMPORTED_MODULE_22__["default"].Body, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_16___default().createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_16___default().createElement("h6", null, "Langues", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_16___default().createElement("button", null, " ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_16___default().createElement(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_19__.FontAwesomeIcon, {
    icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_23__.faPlusCircle
  }))), informationPatient === null || informationPatient === void 0 ? void 0 : informationPatient.map(function (patient, id) {
    var _patient$sugg7, _patient$sugg7$parent, _patient$sugg8;

    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_16___default().createElement((react__WEBPACK_IMPORTED_MODULE_16___default().Fragment), null, patient && patient && patient && ((_patient$sugg7 = patient.sugg) === null || _patient$sugg7 === void 0 ? void 0 : (_patient$sugg7$parent = _patient$sugg7.parentSugg) === null || _patient$sugg7$parent === void 0 ? void 0 : _patient$sugg7$parent.pathString) === "/patient/fiche/ressources-personnelles/langues" && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_16___default().createElement("div", {
      key: patient.id,
      className: "row"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_16___default().createElement("div", {
      className: "col-sm-4"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_16___default().createElement("p", null, (_patient$sugg8 = patient.sugg) === null || _patient$sugg8 === void 0 ? void 0 : _patient$sugg8.value)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_16___default().createElement("div", {
      className: "col-sm-4"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_16___default().createElement("p", null, patient.comment))));
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_16___default().createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_16___default().createElement("h6", null, "Talents et centres d'int\xE9r\xEAt", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_16___default().createElement("button", null, " ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_16___default().createElement(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_19__.FontAwesomeIcon, {
    icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_23__.faPlusCircle
  }))), informationPatient === null || informationPatient === void 0 ? void 0 : informationPatient.map(function (patient, id) {
    var _patient$sugg9, _patient$sugg9$parent;

    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_16___default().createElement((react__WEBPACK_IMPORTED_MODULE_16___default().Fragment), null, patient && ((_patient$sugg9 = patient.sugg) === null || _patient$sugg9 === void 0 ? void 0 : (_patient$sugg9$parent = _patient$sugg9.parentSugg) === null || _patient$sugg9$parent === void 0 ? void 0 : _patient$sugg9$parent.pathString) === "/patient/fiche/ressources-personnelles/talents-et-centres-d-interet" && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_16___default().createElement("div", {
      key: patient.id,
      className: "row"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_16___default().createElement("div", {
      className: "col-sm-4"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_16___default().createElement("p", null, patient.sugg.value)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_16___default().createElement("div", {
      className: "col-sm-4"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_16___default().createElement("p", null, patient.comment))));
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_16___default().createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_16___default().createElement("h6", null, "R\xEAves", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_16___default().createElement("button", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_16___default().createElement(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_19__.FontAwesomeIcon, {
    icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_23__.faPlusCircle
  }))), informationPatient === null || informationPatient === void 0 ? void 0 : informationPatient.map(function (patient, id) {
    var _patient$sugg10, _patient$sugg10$paren;

    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_16___default().createElement((react__WEBPACK_IMPORTED_MODULE_16___default().Fragment), null, patient && ((_patient$sugg10 = patient.sugg) === null || _patient$sugg10 === void 0 ? void 0 : (_patient$sugg10$paren = _patient$sugg10.parentSugg) === null || _patient$sugg10$paren === void 0 ? void 0 : _patient$sugg10$paren.pathString) === "/patient/fiche/ressources-personnelles/reves" && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_16___default().createElement("div", {
      key: patient.id,
      className: "row"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_16___default().createElement("div", {
      className: "col-sm-4"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_16___default().createElement("p", null, patient.sugg.value)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_16___default().createElement("div", {
      className: "col-sm-4"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_16___default().createElement("p", null, patient.comment))));
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_16___default().createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_16___default().createElement("h6", null, "Go\xFBts culinaires", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_16___default().createElement("button", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_16___default().createElement(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_19__.FontAwesomeIcon, {
    icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_23__.faPlusCircle
  }))), informationPatient === null || informationPatient === void 0 ? void 0 : informationPatient.map(function (patient, id) {
    var _patient$sugg11, _patient$sugg11$paren;

    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_16___default().createElement((react__WEBPACK_IMPORTED_MODULE_16___default().Fragment), null, patient && ((_patient$sugg11 = patient.sugg) === null || _patient$sugg11 === void 0 ? void 0 : (_patient$sugg11$paren = _patient$sugg11.parentSugg) === null || _patient$sugg11$paren === void 0 ? void 0 : _patient$sugg11$paren.pathString) === "/patient/fiche/ressources-personnelles/gouts-culinaires" && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_16___default().createElement("div", {
      key: patient.id,
      className: "row"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_16___default().createElement("div", {
      className: "col-sm-4"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_16___default().createElement("p", null, patient.sugg.value)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_16___default().createElement("div", {
      className: "col-sm-4"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_16___default().createElement("p", null, patient.comment))));
  })))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_16___default().createElement(react_bootstrap_Accordion__WEBPACK_IMPORTED_MODULE_22__["default"].Item, {
    eventKey: "4"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_16___default().createElement(react_bootstrap_Accordion__WEBPACK_IMPORTED_MODULE_22__["default"].Header, null, "Ressources financi\xE8res"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_16___default().createElement(react_bootstrap_Accordion__WEBPACK_IMPORTED_MODULE_22__["default"].Body, null, informationPatient === null || informationPatient === void 0 ? void 0 : informationPatient.map(function (patient, id) {
    var _patient$sugg12, _patient$sugg12$paren, _patient$sugg12$paren2;

    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_16___default().createElement((react__WEBPACK_IMPORTED_MODULE_16___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_16___default().createElement("div", {
      className: "block"
    }, patient && (patient === null || patient === void 0 ? void 0 : (_patient$sugg12 = patient.sugg) === null || _patient$sugg12 === void 0 ? void 0 : (_patient$sugg12$paren = _patient$sugg12.parentSugg) === null || _patient$sugg12$paren === void 0 ? void 0 : (_patient$sugg12$paren2 = _patient$sugg12$paren.parentSugg) === null || _patient$sugg12$paren2 === void 0 ? void 0 : _patient$sugg12$paren2.pathString) === "/patient/fiche/ressources-financieres" && (patient === null || patient === void 0 ? void 0 : patient.deletedAt) === null && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_16___default().createElement("div", {
      key: patient.id,
      className: "row"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_16___default().createElement("div", {
      className: "col-sm-4"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_16___default().createElement("h6", null, patient.sugg.parentSugg.value)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_16___default().createElement("div", {
      className: "col-sm-4"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_16___default().createElement("p", null, patient.sugg.value)))));
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_16___default().createElement(react_bootstrap_Accordion__WEBPACK_IMPORTED_MODULE_22__["default"].Item, {
    eventKey: "5"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_16___default().createElement(react_bootstrap_Accordion__WEBPACK_IMPORTED_MODULE_22__["default"].Header, null, "Acc\xE8s aux soins"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_16___default().createElement(react_bootstrap_Accordion__WEBPACK_IMPORTED_MODULE_22__["default"].Body, null, informationPatient === null || informationPatient === void 0 ? void 0 : informationPatient.map(function (patient, id) {
    var _patient$sugg13, _patient$sugg13$paren, _patient$sugg13$paren2;

    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_16___default().createElement((react__WEBPACK_IMPORTED_MODULE_16___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_16___default().createElement("div", {
      className: "block"
    }, patient && (patient === null || patient === void 0 ? void 0 : (_patient$sugg13 = patient.sugg) === null || _patient$sugg13 === void 0 ? void 0 : (_patient$sugg13$paren = _patient$sugg13.parentSugg) === null || _patient$sugg13$paren === void 0 ? void 0 : (_patient$sugg13$paren2 = _patient$sugg13$paren.parentSugg) === null || _patient$sugg13$paren2 === void 0 ? void 0 : _patient$sugg13$paren2.pathString) === "/patient/fiche/acces-aux-soins" && (patient === null || patient === void 0 ? void 0 : patient.deletedAt) === null && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_16___default().createElement("div", {
      key: patient.id,
      className: "row"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_16___default().createElement("div", {
      className: "col-sm-4"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_16___default().createElement("h6", null, patient.sugg.parentSugg.value)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_16___default().createElement("div", {
      className: "col-sm-4"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_16___default().createElement("p", null, patient.sugg.value)))));
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_16___default().createElement(react_bootstrap_Accordion__WEBPACK_IMPORTED_MODULE_22__["default"].Item, {
    eventKey: "6"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_16___default().createElement(react_bootstrap_Accordion__WEBPACK_IMPORTED_MODULE_22__["default"].Header, null, "Sant\xE9 physique"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_16___default().createElement(react_bootstrap_Accordion__WEBPACK_IMPORTED_MODULE_22__["default"].Body, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_16___default().createElement("div", {
    className: "mt-4"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_16___default().createElement("h6", null, "Pathologies physiques chroniques", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_16___default().createElement("button", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_16___default().createElement(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_19__.FontAwesomeIcon, {
    icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_23__.faPlusCircle
  }))), informationPatient === null || informationPatient === void 0 ? void 0 : informationPatient.map(function (patient, id) {
    var _patient$sugg14, _patient$sugg14$paren;

    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_16___default().createElement((react__WEBPACK_IMPORTED_MODULE_16___default().Fragment), null, patient && ((_patient$sugg14 = patient.sugg) === null || _patient$sugg14 === void 0 ? void 0 : (_patient$sugg14$paren = _patient$sugg14.parentSugg) === null || _patient$sugg14$paren === void 0 ? void 0 : _patient$sugg14$paren.pathString) === "/patient/medical/pathologies/pathologies-physiques-chroniques" && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_16___default().createElement("div", {
      key: patient.id,
      className: "row"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_16___default().createElement("div", {
      className: "col-sm-4"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_16___default().createElement("p", null, patient.sugg.value)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_16___default().createElement("div", {
      className: "col-sm-4"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_16___default().createElement("p", null, patient.comment))));
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_16___default().createElement("div", {
    className: "mt-4"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_16___default().createElement("h6", null, "Episodes de maladie", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_16___default().createElement("button", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_16___default().createElement(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_19__.FontAwesomeIcon, {
    icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_23__.faPlusCircle
  }))), informationPatient === null || informationPatient === void 0 ? void 0 : informationPatient.map(function (patient, id) {
    var _patient$sugg15, _patient$sugg15$paren;

    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_16___default().createElement((react__WEBPACK_IMPORTED_MODULE_16___default().Fragment), null, patient && ((_patient$sugg15 = patient.sugg) === null || _patient$sugg15 === void 0 ? void 0 : (_patient$sugg15$paren = _patient$sugg15.parentSugg) === null || _patient$sugg15$paren === void 0 ? void 0 : _patient$sugg15$paren.pathString) === "/patient/medical/episodes-de-maladie" && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_16___default().createElement("div", {
      key: patient.id,
      className: "row"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_16___default().createElement("div", {
      className: "col-sm-4"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_16___default().createElement("p", null, patient.sugg.value)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_16___default().createElement("div", {
      className: "col-sm-4"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_16___default().createElement("p", null, patient.comment))));
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_16___default().createElement("div", {
    className: "mt-4"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_16___default().createElement("h6", null, "Allergies", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_16___default().createElement("button", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_16___default().createElement(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_19__.FontAwesomeIcon, {
    icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_23__.faPlusCircle
  }))), informationPatient === null || informationPatient === void 0 ? void 0 : informationPatient.map(function (patient, id) {
    var _patient$sugg16, _patient$sugg16$paren;

    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_16___default().createElement((react__WEBPACK_IMPORTED_MODULE_16___default().Fragment), null, patient && patient && patient && ((_patient$sugg16 = patient.sugg) === null || _patient$sugg16 === void 0 ? void 0 : (_patient$sugg16$paren = _patient$sugg16.parentSugg) === null || _patient$sugg16$paren === void 0 ? void 0 : _patient$sugg16$paren.pathString) === "/patient/medical/allergies" && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_16___default().createElement("div", {
      key: patient.id,
      className: "row"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_16___default().createElement("div", {
      className: "col-sm-4"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_16___default().createElement("p", null, patient.sugg.value)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_16___default().createElement("div", {
      className: "col-sm-4"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_16___default().createElement("p", null, patient.comment))));
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_16___default().createElement("div", {
    className: "mt-4"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_16___default().createElement("h6", null, "Param\xE8tres", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_16___default().createElement("button", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_16___default().createElement(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_19__.FontAwesomeIcon, {
    icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_23__.faPlusCircle
  }))), informationPatient === null || informationPatient === void 0 ? void 0 : informationPatient.map(function (patient, id) {
    var _patient$sugg17, _patient$sugg17$paren;

    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_16___default().createElement((react__WEBPACK_IMPORTED_MODULE_16___default().Fragment), null, patient && ((_patient$sugg17 = patient.sugg) === null || _patient$sugg17 === void 0 ? void 0 : (_patient$sugg17$paren = _patient$sugg17.parentSugg) === null || _patient$sugg17$paren === void 0 ? void 0 : _patient$sugg17$paren.pathString) === "/patient/medical/parametres" && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_16___default().createElement("div", {
      key: patient.id,
      className: "row"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_16___default().createElement("div", {
      className: "col-sm-4"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_16___default().createElement("p", null, patient.parent)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_16___default().createElement("div", {
      className: "col-sm-4"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_16___default().createElement("p", null, patient.commentColumn))));
  })))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_16___default().createElement(react_bootstrap_Accordion__WEBPACK_IMPORTED_MODULE_22__["default"].Item, {
    eventKey: "7"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_16___default().createElement(react_bootstrap_Accordion__WEBPACK_IMPORTED_MODULE_22__["default"].Header, null, "Pathologie mentale"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_16___default().createElement(react_bootstrap_Accordion__WEBPACK_IMPORTED_MODULE_22__["default"].Body, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_16___default().createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_16___default().createElement("h6", null, "Suppos\xE9e", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_16___default().createElement("button", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_16___default().createElement(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_19__.FontAwesomeIcon, {
    icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_23__.faPlusCircle
  }))), informationPatient === null || informationPatient === void 0 ? void 0 : informationPatient.map(function (patient, id) {
    var _patient$itel3, _patient$itel3$suge, _patient$itel4, _patient$itel4$suge;

    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_16___default().createElement((react__WEBPACK_IMPORTED_MODULE_16___default().Fragment), null, patient && (patient === null || patient === void 0 ? void 0 : (_patient$itel3 = patient.itel) === null || _patient$itel3 === void 0 ? void 0 : (_patient$itel3$suge = _patient$itel3.suge) === null || _patient$itel3$suge === void 0 ? void 0 : _patient$itel3$suge.pathString) && (patient === null || patient === void 0 ? void 0 : (_patient$itel4 = patient.itel) === null || _patient$itel4 === void 0 ? void 0 : (_patient$itel4$suge = _patient$itel4.suge) === null || _patient$itel4$suge === void 0 ? void 0 : _patient$itel4$suge.pathString) === "/patient/fiche/pathologie-mentale/supposee" && (patient === null || patient === void 0 ? void 0 : patient.deletedAt) === null && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_16___default().createElement("div", {
      key: patient.id,
      className: "row"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_16___default().createElement("div", {
      className: "col-sm-4"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_16___default().createElement("p", null, patient.valeurParent)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_16___default().createElement("div", {
      className: "col-sm-4"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_16___default().createElement("p", null, patient.parent))));
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_16___default().createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_16___default().createElement("h6", null, "Declar\xE9e", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_16___default().createElement("button", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_16___default().createElement(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_19__.FontAwesomeIcon, {
    icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_23__.faPlusCircle
  }))), informationPatient === null || informationPatient === void 0 ? void 0 : informationPatient.map(function (patient, id) {
    var _patient$itel5, _patient$itel5$suge, _patient$itel6, _patient$itel6$suge;

    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_16___default().createElement((react__WEBPACK_IMPORTED_MODULE_16___default().Fragment), null, patient && (patient === null || patient === void 0 ? void 0 : (_patient$itel5 = patient.itel) === null || _patient$itel5 === void 0 ? void 0 : (_patient$itel5$suge = _patient$itel5.suge) === null || _patient$itel5$suge === void 0 ? void 0 : _patient$itel5$suge.pathString) && (patient === null || patient === void 0 ? void 0 : (_patient$itel6 = patient.itel) === null || _patient$itel6 === void 0 ? void 0 : (_patient$itel6$suge = _patient$itel6.suge) === null || _patient$itel6$suge === void 0 ? void 0 : _patient$itel6$suge.pathString) === "/patient/fiche/pathologie-mentale/declaree" && (patient === null || patient === void 0 ? void 0 : patient.deletedAt) === null && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_16___default().createElement("div", {
      key: patient.id,
      className: "row"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_16___default().createElement("div", {
      className: "col-sm-4"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_16___default().createElement("p", null, patient.valeurParent)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_16___default().createElement("div", {
      className: "col-sm-4"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_16___default().createElement("p", null, patient.parent))));
  })))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_16___default().createElement(react_bootstrap_Accordion__WEBPACK_IMPORTED_MODULE_22__["default"].Item, {
    eventKey: "8"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_16___default().createElement(react_bootstrap_Accordion__WEBPACK_IMPORTED_MODULE_22__["default"].Header, null, "Assu\xE9tude"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_16___default().createElement(react_bootstrap_Accordion__WEBPACK_IMPORTED_MODULE_22__["default"].Body, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_16___default().createElement("h6", null, "Suppos\xE9e", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_16___default().createElement("button", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_16___default().createElement(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_19__.FontAwesomeIcon, {
    icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_23__.faPlusCircle
  }))), informationPatient === null || informationPatient === void 0 ? void 0 : informationPatient.map(function (patient, id) {
    var _patient$itel7, _patient$itel7$suge, _patient$itel8, _patient$itel8$suge;

    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_16___default().createElement((react__WEBPACK_IMPORTED_MODULE_16___default().Fragment), null, patient && (patient === null || patient === void 0 ? void 0 : (_patient$itel7 = patient.itel) === null || _patient$itel7 === void 0 ? void 0 : (_patient$itel7$suge = _patient$itel7.suge) === null || _patient$itel7$suge === void 0 ? void 0 : _patient$itel7$suge.pathString) && (patient === null || patient === void 0 ? void 0 : (_patient$itel8 = patient.itel) === null || _patient$itel8 === void 0 ? void 0 : (_patient$itel8$suge = _patient$itel8.suge) === null || _patient$itel8$suge === void 0 ? void 0 : _patient$itel8$suge.pathString) === "/patient/fiche/assuetude/supposee" && (patient === null || patient === void 0 ? void 0 : patient.deletedAt) === null && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_16___default().createElement("div", {
      key: patient.id,
      className: "row mt-4"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_16___default().createElement("div", {
      className: "col-sm-2"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_16___default().createElement("h6", null, patient === null || patient === void 0 ? void 0 : patient.sugg.value)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_16___default().createElement("div", {
      className: "col-sm-6"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_16___default().createElement("p", null, patient === null || patient === void 0 ? void 0 : patient.comment)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_16___default().createElement("div", {
      className: "col-sm-4"
    })));
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_16___default().createElement("h6", null, "D\xE9clar\xE9e", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_16___default().createElement("button", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_16___default().createElement(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_19__.FontAwesomeIcon, {
    icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_23__.faPlusCircle
  }))), informationPatient === null || informationPatient === void 0 ? void 0 : informationPatient.map(function (patient, id) {
    var _patient$itel9, _patient$itel9$suge, _patient$itel10, _patient$itel10$suge;

    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_16___default().createElement((react__WEBPACK_IMPORTED_MODULE_16___default().Fragment), null, patient && (patient === null || patient === void 0 ? void 0 : (_patient$itel9 = patient.itel) === null || _patient$itel9 === void 0 ? void 0 : (_patient$itel9$suge = _patient$itel9.suge) === null || _patient$itel9$suge === void 0 ? void 0 : _patient$itel9$suge.pathString) && (patient === null || patient === void 0 ? void 0 : (_patient$itel10 = patient.itel) === null || _patient$itel10 === void 0 ? void 0 : (_patient$itel10$suge = _patient$itel10.suge) === null || _patient$itel10$suge === void 0 ? void 0 : _patient$itel10$suge.pathString) === "/patient/fiche/assuetude/declaree" && (patient === null || patient === void 0 ? void 0 : patient.deletedAt) === null && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_16___default().createElement("div", {
      key: patient.id,
      className: "row mt-4"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_16___default().createElement("div", {
      className: "col-sm-2"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_16___default().createElement("h6", null, patient === null || patient === void 0 ? void 0 : patient.sugg.value)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_16___default().createElement("div", {
      className: "col-sm-6"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_16___default().createElement("p", null, patient === null || patient === void 0 ? void 0 : patient.comment)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_16___default().createElement("div", {
      className: "col-sm-4"
    })));
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_16___default().createElement(react_bootstrap_Accordion__WEBPACK_IMPORTED_MODULE_22__["default"].Item, {
    eventKey: "9"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_16___default().createElement(react_bootstrap_Accordion__WEBPACK_IMPORTED_MODULE_22__["default"].Header, null, "Traitements"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_16___default().createElement(react_bootstrap_Accordion__WEBPACK_IMPORTED_MODULE_22__["default"].Body, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_16___default().createElement("div", {
    className: "block"
  }, informationPatient === null || informationPatient === void 0 ? void 0 : informationPatient.map(function (patient, id) {
    var _patient$sugg18, _patient$sugg18$paren;

    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_16___default().createElement((react__WEBPACK_IMPORTED_MODULE_16___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_16___default().createElement("div", {
      className: "block"
    }, patient && (patient === null || patient === void 0 ? void 0 : (_patient$sugg18 = patient.sugg) === null || _patient$sugg18 === void 0 ? void 0 : (_patient$sugg18$paren = _patient$sugg18.parentSugg) === null || _patient$sugg18$paren === void 0 ? void 0 : _patient$sugg18$paren.pathString) === "/patient/fiche/traitements" && (patient === null || patient === void 0 ? void 0 : patient.deletedAt) === null && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_16___default().createElement("div", {
      key: patient.id,
      className: "row"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_16___default().createElement("div", {
      className: "col-sm-4"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_16___default().createElement("h6", null, patient.sugg.value)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_16___default().createElement("div", {
      className: "col-sm-4"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_16___default().createElement("p", null, patient.comment)))));
  }))))));
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
/* harmony import */ var core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.array.map.js */ "./node_modules/core-js/modules/es.array.map.js");
/* harmony import */ var core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_array_is_array_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.array.is-array.js */ "./node_modules/core-js/modules/es.array.is-array.js");
/* harmony import */ var core_js_modules_es_array_is_array_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_is_array_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.symbol.js */ "./node_modules/core-js/modules/es.symbol.js");
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.symbol.description.js */ "./node_modules/core-js/modules/es.symbol.description.js");
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.symbol.iterator.js */ "./node_modules/core-js/modules/es.symbol.iterator.js");
/* harmony import */ var core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es.array.iterator.js */ "./node_modules/core-js/modules/es.array.iterator.js");
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core-js/modules/es.string.iterator.js */ "./node_modules/core-js/modules/es.string.iterator.js");
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator.js */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! core-js/modules/es.array.slice.js */ "./node_modules/core-js/modules/es.array.slice.js");
/* harmony import */ var core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! core-js/modules/es.function.name.js */ "./node_modules/core-js/modules/es.function.name.js");
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var core_js_modules_es_array_from_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! core-js/modules/es.array.from.js */ "./node_modules/core-js/modules/es.array.from.js");
/* harmony import */ var core_js_modules_es_array_from_js__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_from_js__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! core-js/modules/es.regexp.exec.js */ "./node_modules/core-js/modules/es.regexp.exec.js");
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var react_bootstrap_Button__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! react-bootstrap/Button */ "./node_modules/react-bootstrap/esm/Button.js");
/* harmony import */ var react_bootstrap_Modal__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! react-bootstrap/Modal */ "./node_modules/react-bootstrap/esm/Modal.js");
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @fortawesome/react-fontawesome */ "./node_modules/@fortawesome/react-fontawesome/index.es.js");
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ "./node_modules/@fortawesome/free-solid-svg-icons/index.mjs");
/* harmony import */ var react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! react-bootstrap/Form */ "./node_modules/react-bootstrap/esm/Form.js");














function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }








function ModalItemFiche(props) {
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_13__.useState)(false),
      _useState2 = _slicedToArray(_useState, 2),
      show = _useState2[0],
      setShow = _useState2[1];

  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_13__.useState)(null),
      _useState4 = _slicedToArray(_useState3, 2),
      elementsOpt = _useState4[0],
      setElementsOpt = _useState4[1];

  var handleClose = function handleClose() {
    return setShow(false);
  };

  var handleShow = function handleShow() {
    return setShow(true);
  };

  (0,react__WEBPACK_IMPORTED_MODULE_13__.useEffect)(function () {
    setElementsOpt(props.props);
  });
  console.log(elementsOpt);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_13___default().createElement((react__WEBPACK_IMPORTED_MODULE_13___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_13___default().createElement(react_bootstrap_Button__WEBPACK_IMPORTED_MODULE_15__["default"], {
    onClick: handleShow
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_13___default().createElement(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_14__.FontAwesomeIcon, {
    icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_16__.faPlusCircle
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_13___default().createElement(react_bootstrap_Modal__WEBPACK_IMPORTED_MODULE_17__["default"], {
    show: show,
    onHide: handleClose
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_13___default().createElement(react_bootstrap_Modal__WEBPACK_IMPORTED_MODULE_17__["default"].Header, {
    closeButton: true
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_13___default().createElement(react_bootstrap_Modal__WEBPACK_IMPORTED_MODULE_17__["default"].Title, null, "Modifier une information")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_13___default().createElement(react_bootstrap_Modal__WEBPACK_IMPORTED_MODULE_17__["default"].Body, null, " ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_13___default().createElement((react__WEBPACK_IMPORTED_MODULE_13___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_13___default().createElement(react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_18__["default"].Label, {
    htmlFor: "inputValue"
  }, "Valeur"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_13___default().createElement(react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_18__["default"].Select, {
    size: "lg"
  }, elementsOpt === null || elementsOpt === void 0 ? void 0 : elementsOpt.map(function (el, id) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_13___default().createElement((react__WEBPACK_IMPORTED_MODULE_13___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_13___default().createElement("option", null, el.elements.value));
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_13___default().createElement(react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_18__["default"].Label, {
    htmlFor: "inputValue"
  }, "Valeur Sp\xE9cifique"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_13___default().createElement(react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_18__["default"].Control, {
    type: "text",
    id: "inputValueSp\xE9cifique",
    "aria-describedby": "valueSp\xE9cifique"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_13___default().createElement("p", null, "Les suggestions marqu\xE9es d'une \xE9toile (*) dans la liste ci-dessus demandent obligatoirement une valeur sp\xE9cifique."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_13___default().createElement(react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_18__["default"].Label, {
    htmlFor: "inputValue"
  }, "D\xE9but"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_13___default().createElement(react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_18__["default"].Control, {
    type: "date",
    id: "inputValueSp\xE9cifique",
    "aria-describedby": "valueSp\xE9cifique"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_13___default().createElement(react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_18__["default"].Label, {
    htmlFor: "inputValue"
  }, "Fin"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_13___default().createElement(react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_18__["default"].Control, {
    type: "date",
    id: "inputValueSp\xE9cifique",
    "aria-describedby": "valueSp\xE9cifique"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_13___default().createElement(react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_18__["default"].Label, {
    htmlFor: "inputValue"
  }, "Commentaire"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_13___default().createElement(react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_18__["default"].Control, {
    as: "textarea",
    rows: 3
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_13___default().createElement(react_bootstrap_Modal__WEBPACK_IMPORTED_MODULE_17__["default"].Footer, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_13___default().createElement(react_bootstrap_Button__WEBPACK_IMPORTED_MODULE_15__["default"], {
    onClick: handleClose
  }, "Close"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_13___default().createElement(react_bootstrap_Button__WEBPACK_IMPORTED_MODULE_15__["default"], {
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
      console.log(response);
      setMedias(response);
    })["catch"](function (response) {});
  }, [idPatient]);
  console.log(listMedias);
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
      console.log(response);
      setPlaces(response);
    })["catch"](function (response) {});
  }, [idPatient]);
  console.log(listPlaces);
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
/******/ __webpack_require__.O(0, ["vendors-node_modules_fortawesome_react-fontawesome_index_es_js-node_modules_axios_index_js-no-19cda8","assets_styles_app_scss"], () => (__webpack_exec__("./assets/index.js")));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFBLENBQVUsb0JBQVYsRUFBZ0M7Z0JBQ2xEK0IsZUFBZSxFQUFFO2NBRGlDLENBQWhDLENBRE47O1lBQUE7Y0FDUkYsS0FEUTtjQUFBO2NBQUEsT0FLUzdCLGlEQUFBLENBQVUsY0FBVixFQUEwQjtnQkFDL0N5QixPQUFPLEVBQUU7a0JBQUVPLGFBQWEsbUJBQVlILEtBQUssQ0FBQ0QsSUFBTixDQUFXQyxLQUF2QjtnQkFBZjtjQURzQyxDQUExQixDQUxUOztZQUFBO2NBS1JILFFBTFE7Y0FTZHhCLE9BQU8sQ0FBQyxVQUFDc0MsSUFBRCxFQUFVO2dCQUNoQix1Q0FDS0EsSUFETDtrQkFFRU4sS0FBSyxFQUFFUixRQUFRLENBQUNFLElBQVQsQ0FBY08sU0FGdkI7a0JBR0VSLFdBQVcsRUFBRUQsUUFBUSxDQUFDRSxJQUFULENBQWNxTztnQkFIN0I7Y0FLRCxDQU5NLENBQVA7Y0FUYyxpQ0FnQlB2TyxRQUFRLENBQUNFLElBQVQsQ0FBY0QsV0FoQlA7O1lBQUE7WUFBQTtjQUFBO1VBQUE7UUFBQTtNQUFBO0lBQUEsQ0FBSDs7SUFBQSxnQkFBUDRFLE9BQU87TUFBQTtJQUFBO0VBQUEsR0FBYjs7RUFrQkEsT0FBT0EsT0FBUDtBQUNELENBdEJEOztBQXdCQSxpRUFBZUgsZUFBZjs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDM0JBO0NBRUE7O0FBQ0E7QUFDQTtBQUNBO0FBRUE4Siw2Q0FBQSxlQUNFLDJEQUFDLHlEQUFELHFCQUNFLDJEQUFDLDJEQUFELHFCQUNFLDJEQUFDLCtEQUFELHFCQUNFLDJEQUFDLG9EQUFELHFCQUNFLDJEQUFDLG1EQUFEO0VBQU8sSUFBSSxFQUFDLElBQVo7RUFBaUIsT0FBTyxlQUFFLDJEQUFDLDRDQUFEO0FBQTFCLEVBREYsQ0FERixDQURGLENBREYsQ0FERixFQVVFRyxRQUFRLENBQUNDLGNBQVQsQ0FBd0IsTUFBeEIsQ0FWRjs7Ozs7Ozs7Ozs7QUNQQSIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL2Fzc2V0cy9hcHAuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2NvbXBvbmVudC9BZG1pbi5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvY29tcG9uZW50L0VkaXRvci5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvY29tcG9uZW50L0Zvcm1fTWVldFJhcHBvcnRzLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9jb21wb25lbnQvSG9tZS5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvY29tcG9uZW50L0xheW91dC5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvY29tcG9uZW50L0xpbmtQYWdlLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9jb21wb25lbnQvTG9naW4uanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2NvbXBvbmVudC9Mb3VuZ2UuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2NvbXBvbmVudC9NZW51LmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9jb21wb25lbnQvTWlzc2luZy5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvY29tcG9uZW50L1BhdGllbnQuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2NvbXBvbmVudC9QYXRpZW50cy5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvY29tcG9uZW50L1BlcnNpc3RMb2dpbi5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvY29tcG9uZW50L1Bvc3RzLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9jb21wb25lbnQvUHJvZmlsZS9Db250YWN0cy5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvY29tcG9uZW50L1Byb2ZpbGUvRHJvcHpvbmUuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2NvbXBvbmVudC9Qcm9maWxlL0ZpY2hlL0ZpY2hlLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9jb21wb25lbnQvUHJvZmlsZS9GaWNoZS9Nb2RhbEl0ZW1GaWNoZS5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvY29tcG9uZW50L1Byb2ZpbGUvSW5kaWNhdG9ycy5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvY29tcG9uZW50L1Byb2ZpbGUvTWVkaWFzLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9jb21wb25lbnQvUHJvZmlsZS9QbGFjZXMuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2NvbXBvbmVudC9Qcm9maWxlL1Byb2ZpbGUuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2NvbXBvbmVudC9SZXF1aXJlQXV0aC5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvY29tcG9uZW50L1NlYXJjaC5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvY29tcG9uZW50L1VuYXV0aG9yaXplZC5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvY29tcG9uZW50L1VzZXJzLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9jb21wb25lbnQvbGlzdF9yZXBvcnRDYWxscy5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvY29tcG9uZW50L2xpc3RfcmVwb3J0R29hbHMuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2NvbnRleHQvQXV0aFByb3ZpZGVyLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9ob29rcy91c2VBdXRoLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9ob29rcy91c2VMb2dvdXQuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2hvb2tzL3VzZVJlZnJlc2hUb2tlbi5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL3N0eWxlcy9hcHAuc2NzcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBpbXBvcnQgUmVnaXN0ZXIgZnJvbSBcIi4vY29tcG9uZW50cy9SZWdpc3RlclwiO1xuaW1wb3J0IFJlYWN0LCB7IHVzZUNvbnRleHQsIHVzZURlYnVnVmFsdWUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBMb2dpbiBmcm9tIFwiLi9jb21wb25lbnQvTG9naW5cIjtcbmltcG9ydCBIb21lIGZyb20gXCIuL2NvbXBvbmVudC9Ib21lXCI7XG5pbXBvcnQgTGF5b3V0IGZyb20gXCIuL2NvbXBvbmVudC9MYXlvdXRcIjtcbmltcG9ydCBFZGl0b3IgZnJvbSBcIi4vY29tcG9uZW50L0VkaXRvclwiO1xuaW1wb3J0IEFkbWluIGZyb20gXCIuL2NvbXBvbmVudC9BZG1pblwiO1xuaW1wb3J0IE1pc3NpbmcgZnJvbSBcIi4vY29tcG9uZW50L01pc3NpbmdcIjtcbmltcG9ydCBVbmF1dGhvcml6ZWQgZnJvbSBcIi4vY29tcG9uZW50L1VuYXV0aG9yaXplZFwiO1xuaW1wb3J0IExvdW5nZSBmcm9tIFwiLi9jb21wb25lbnQvTG91bmdlXCI7XG5pbXBvcnQgTGlua1BhZ2UgZnJvbSBcIi4vY29tcG9uZW50L0xpbmtQYWdlXCI7XG5pbXBvcnQgUmVxdWlyZUF1dGggZnJvbSBcIi4vY29tcG9uZW50L1JlcXVpcmVBdXRoXCI7XG5pbXBvcnQgUGVyc2lzdExvZ2luIGZyb20gXCIuL2NvbXBvbmVudC9QZXJzaXN0TG9naW5cIjtcbmltcG9ydCB7IFJvdXRlcywgUm91dGUgfSBmcm9tIFwicmVhY3Qtcm91dGVyLWRvbVwiO1xuXG5pbXBvcnQgUGF0aWVudHMgZnJvbSBcIi4vY29tcG9uZW50L1BhdGllbnRzXCI7XG5pbXBvcnQgUmVwcG9ydENhbGxzIGZyb20gXCIuL2NvbXBvbmVudC9saXN0X3JlcG9ydENhbGxzXCI7XG5pbXBvcnQgUmVwcG9ydEdvYWxzIGZyb20gXCIuL2NvbXBvbmVudC9saXN0X3JlcG9ydEdvYWxzXCI7XG5cbmltcG9ydCBQYXRpZW50IGZyb20gXCIuL2NvbXBvbmVudC9QYXRpZW50XCI7XG5pbXBvcnQgXCIuL3N0eWxlcy9hcHAuc2Nzc1wiO1xuXG5jb25zdCBST0xFUyA9IHtcbiAgVXNlcjogXCJST0xFX1VTRVJcIixcbiAgQWRtaW46IFwiUk9MRV9BRE1JTlwiLFxufTtcblxuZnVuY3Rpb24gQXBwKCkge1xuICByZXR1cm4gKFxuICAgIDxSb3V0ZXM+XG4gICAgICA8Um91dGUgcGF0aD1cIi9cIiBlbGVtZW50PXs8TGF5b3V0IC8+fT5cbiAgICAgICAgPFJvdXRlIHBhdGg9XCJjb25uZWN0XCIgZWxlbWVudD17PExvZ2luIC8+fSAvPlxuICAgICAgICA8Um91dGUgcGF0aD1cImxpbmtwYWdlXCIgZWxlbWVudD17PExpbmtQYWdlIC8+fSAvPlxuICAgICAgICA8Um91dGUgcGF0aD1cInVuYXV0aG9yaXplZFwiIGVsZW1lbnQ9ezxVbmF1dGhvcml6ZWQgLz59IC8+XG5cbiAgICAgICAgPFJvdXRlIGVsZW1lbnQ9ezxQZXJzaXN0TG9naW4gLz59PlxuICAgICAgICAgIDxSb3V0ZSBlbGVtZW50PXs8UmVxdWlyZUF1dGggYWxsb3dlZFJvbGVzPXtbUk9MRVMuVXNlcl19IC8+fT5cbiAgICAgICAgICAgIDxSb3V0ZSBwYXRoPVwiL1wiIGVsZW1lbnQ9ezxIb21lIC8+fT48L1JvdXRlPlxuICAgICAgICAgIDwvUm91dGU+XG5cbiAgICAgICAgICA8Um91dGUgZWxlbWVudD17PFJlcXVpcmVBdXRoIGFsbG93ZWRSb2xlcz17W1JPTEVTLkFkbWluXX0gLz59PlxuICAgICAgICAgICAgPFJvdXRlIHBhdGg9XCJwYXRpZW50c1wiIGVsZW1lbnQ9ezxQYXRpZW50cyAvPn0gLz5cbiAgICAgICAgICAgIDxSb3V0ZSBwYXRoPVwiOmlkXCIgZWxlbWVudD17PFBhdGllbnQgLz59IC8+XG4gICAgICAgICAgPC9Sb3V0ZT5cblxuICAgICAgICAgIDxSb3V0ZSBlbGVtZW50PXs8UmVxdWlyZUF1dGggYWxsb3dlZFJvbGVzPXtbUk9MRVMuQWRtaW5dfSAvPn0+XG4gICAgICAgICAgICA8Um91dGUgcGF0aD1cImFkbWluXCIgZWxlbWVudD17PEFkbWluIC8+fSAvPlxuICAgICAgICAgIDwvUm91dGU+XG4gICAgICAgIDwvUm91dGU+XG5cbiAgICAgICAgPFJvdXRlIHBhdGg9XCIqXCIgZWxlbWVudD17PE1pc3NpbmcgLz59IC8+XG4gICAgICA8L1JvdXRlPlxuICAgIDwvUm91dGVzPlxuICApO1xufVxuXG5leHBvcnQgZGVmYXVsdCBBcHA7XG4iLCJpbXBvcnQgUmVhY3QsIHsgdXNlQ29udGV4dCwgdXNlRGVidWdWYWx1ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyBMaW5rIH0gZnJvbSBcInJlYWN0LXJvdXRlci1kb21cIjtcclxuaW1wb3J0IFVzZXJzIGZyb20gXCIuL1VzZXJzXCI7XHJcblxyXG5jb25zdCBBZG1pbiA9ICgpID0+IHtcclxuICByZXR1cm4gKFxyXG4gICAgPHNlY3Rpb24+XHJcbiAgICAgIDxoMT5BZG1pbnMgUGFnZTwvaDE+XHJcbiAgICAgIDxiciAvPlxyXG4gICAgICA8VXNlcnMgLz5cclxuICAgICAgPGJyIC8+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleEdyb3dcIj5cclxuICAgICAgICA8TGluayB0bz1cIi9cIj5Ib21lPC9MaW5rPlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvc2VjdGlvbj5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgQWRtaW47XHJcbiIsImltcG9ydCB7IExpbmsgfSBmcm9tIFwicmVhY3Qtcm91dGVyLWRvbVwiO1xyXG5cclxuY29uc3QgRWRpdG9yID0gKCkgPT4ge1xyXG4gIHJldHVybiAoXHJcbiAgICA8c2VjdGlvbj5cclxuICAgICAgPGgxPkVkaXRvcnMgUGFnZTwvaDE+XHJcbiAgICAgIDxiciAvPlxyXG4gICAgICA8cD5Zb3UgbXVzdCBoYXZlIGJlZW4gYXNzaWduZWQgYW4gRWRpdG9yIHJvbGUuPC9wPlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXhHcm93XCI+XHJcbiAgICAgICAgPExpbmsgdG89XCIvXCI+SG9tZTwvTGluaz5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L3NlY3Rpb24+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IEVkaXRvcjtcclxuIiwiaW1wb3J0IFJlYWN0LCB7IHVzZUNvbnRleHQsIHVzZURlYnVnVmFsdWUgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgdXNlTmF2aWdhdGUsIExpbmsgfSBmcm9tIFwicmVhY3Qtcm91dGVyLWRvbVwiO1xyXG5pbXBvcnQgdXNlTG9nb3V0IGZyb20gXCIuLi9ob29rcy91c2VMb2dvdXRcIjtcclxuaW1wb3J0IEJ1dHRvbiBmcm9tIFwicmVhY3QtYm9vdHN0cmFwL0J1dHRvblwiO1xyXG5pbXBvcnQgQ29udGFpbmVyIGZyb20gXCJyZWFjdC1ib290c3RyYXAvQ29udGFpbmVyXCI7XHJcbmltcG9ydCBGb3JtIGZyb20gXCJyZWFjdC1ib290c3RyYXAvRm9ybVwiO1xyXG5pbXBvcnQgTmF2IGZyb20gXCJyZWFjdC1ib290c3RyYXAvTmF2XCI7XHJcbmltcG9ydCBOYXZiYXIgZnJvbSBcInJlYWN0LWJvb3RzdHJhcC9OYXZiYXJcIjtcclxuaW1wb3J0IE5hdkRyb3Bkb3duIGZyb20gXCJyZWFjdC1ib290c3RyYXAvTmF2RHJvcGRvd25cIjtcclxuY29uc3QgRm9ybV9NZWV0UmFwcG9ydHMgPSAoKSA9PiB7XHJcbiAgY29uc3QgbmF2aWdhdGUgPSB1c2VOYXZpZ2F0ZSgpO1xyXG4gIGNvbnN0IGxvZ291dCA9IHVzZUxvZ291dCgpO1xyXG5cclxuICBjb25zdCBzaWduT3V0ID0gYXN5bmMgKCkgPT4ge1xyXG4gICAgYXdhaXQgbG9nb3V0KCk7XHJcbiAgICBuYXZpZ2F0ZShcIi9jb25uZWN0XCIpO1xyXG4gIH07XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8PlxyXG4gICAgICA8aDM+UmFwcG9ydCBkZSByZW5jb250cmU8L2gzPlxyXG4gICAgICA8Rm9ybT5cclxuICAgICAgICA8Rm9ybS5Hcm91cCBjbGFzc05hbWU9XCJtYi0zXCIgY29udHJvbElkPVwiZm9ybUJhc2ljRW1haWxcIj5cclxuICAgICAgICAgIDxGb3JtLkNvbnRyb2wgdHlwZT1cImVtYWlsXCIgcGxhY2Vob2xkZXI9XCJUYXBleiBsZSBub21cIiAvPlxyXG4gICAgICAgIDwvRm9ybS5Hcm91cD5cclxuXHJcbiAgICAgICAgPEZvcm0uR3JvdXAgY2xhc3NOYW1lPVwibWItM1wiIGNvbnRyb2xJZD1cImZvcm1CYXNpY1Bhc3N3b3JkXCI+XHJcbiAgICAgICAgICA8Rm9ybS5Db250cm9sIHR5cGU9XCJ0ZXh0XCIgcGxhY2Vob2xkZXI9XCJUYXBleiBsZSBwcsOpbm9tXCIgLz5cclxuICAgICAgICA8L0Zvcm0uR3JvdXA+XHJcblxyXG4gICAgICAgIDxGb3JtLkdyb3VwIGNsYXNzTmFtZT1cIm1iLTNcIiBjb250cm9sSWQ9XCJmb3JtQmFzaWNQYXNzd29yZFwiPlxyXG4gICAgICAgICAgPEZvcm0uQ29udHJvbCB0eXBlPVwidGV4dFwiIHBsYWNlaG9sZGVyPVwiVGFwZXogbGUgc3Vybm9tXCIgLz5cclxuICAgICAgICA8L0Zvcm0uR3JvdXA+XHJcblxyXG4gICAgICAgIDxGb3JtLlNlbGVjdCBhcmlhLWxhYmVsPVwiRGVmYXVsdCBzZWxlY3QgZXhhbXBsZVwiPlxyXG4gICAgICAgICAgPG9wdGlvbj5DaG9pc3Npc2V6IHZvdHJlIGFudGVubmU8L29wdGlvbj5cclxuICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCIxXCI+TGnDqGdlPC9vcHRpb24+XHJcbiAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiMlwiPkJydXhlbGxlczwvb3B0aW9uPlxyXG4gICAgICAgIDwvRm9ybS5TZWxlY3Q+XHJcblxyXG4gICAgICAgIDxCdXR0b24gdmFyaWFudD1cInByaW1hcnlcIiB0eXBlPVwic3VibWl0XCIgY2xhc3NOYW1lPVwiYnRuLW1ldGlzIG10LTNcIj5cclxuICAgICAgICAgIFN1Ym1pdFxyXG4gICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICA8L0Zvcm0+XHJcbiAgICA8Lz5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgRm9ybV9NZWV0UmFwcG9ydHM7XHJcbiIsImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlQ29udGV4dCwgdXNlRGVidWdWYWx1ZSwgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IHVzZU5hdmlnYXRlLCBMaW5rIH0gZnJvbSBcInJlYWN0LXJvdXRlci1kb21cIjtcclxuaW1wb3J0IHVzZUxvZ291dCBmcm9tIFwiLi4vaG9va3MvdXNlTG9nb3V0XCI7XHJcbmltcG9ydCB7IEZvbnRBd2Vzb21lSWNvbiB9IGZyb20gXCJAZm9ydGF3ZXNvbWUvcmVhY3QtZm9udGF3ZXNvbWVcIjtcclxuaW1wb3J0IHsgZmFBcnJvd1JpZ2h0IH0gZnJvbSBcIkBmb3J0YXdlc29tZS9mcmVlLXNvbGlkLXN2Zy1pY29uc1wiO1xyXG5pbXBvcnQgTWVudSBmcm9tIFwiLi9NZW51XCI7XHJcbmltcG9ydCBGb3JtX01lZXRSYXBwb3J0cyBmcm9tIFwiLi9Gb3JtX01lZXRSYXBwb3J0c1wiO1xyXG5pbXBvcnQgUmVwcG9ydENhbGxzIGZyb20gXCIuL2xpc3RfcmVwb3J0Q2FsbHNcIjtcclxuaW1wb3J0IFJlcHBvcnRHb2FscyBmcm9tIFwiLi9saXN0X3JlcG9ydEdvYWxzXCI7XHJcblxyXG5jb25zdCBIb21lID0gKCkgPT4ge1xyXG4gIGNvbnN0IG5hdmlnYXRlID0gdXNlTmF2aWdhdGUoKTtcclxuICBjb25zdCBsb2dvdXQgPSB1c2VMb2dvdXQoKTtcclxuXHJcbiAgY29uc3QgW3JlcG9ydE1lZXQsIHNldFJlcG9ydE1lZXRdID0gdXNlU3RhdGUoMCk7XHJcbiAgY29uc3QgW3JlcG9ydENhbGxzLCBzZXRSZXBvcnRDYWxsc10gPSB1c2VTdGF0ZSgwKTtcclxuICBjb25zdCBbcmVwb3J0R29hbHMsIHNldFJlcG9ydEdvYWxzXSA9IHVzZVN0YXRlKDApO1xyXG5cclxuICBjb25zdCBzaWduT3V0ID0gYXN5bmMgKCkgPT4ge1xyXG4gICAgYXdhaXQgbG9nb3V0KCk7XHJcbiAgICBuYXZpZ2F0ZShcIi9jb25uZWN0XCIpO1xyXG4gIH07XHJcbiAgbGV0IHsgcGF0aCwgdXJsIH0gPSB1c2VOYXZpZ2F0ZSgpO1xyXG5cclxuICBjb25zdCBnb1RvUmVwcG9ydCA9ICgpID0+IHtcclxuICAgIGhpc3RvcnkucHVzaChcIi9nb2Fsc1wiKTtcclxuICB9O1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgc2V0UmVwb3J0TWVldCh0cnVlKTtcclxuICAgIHNldFJlcG9ydENhbGxzKGZhbHNlKTtcclxuICAgIHNldFJlcG9ydEdvYWxzKGZhbHNlKTtcclxuICB9LCBbXSk7XHJcblxyXG4gIGNvbnN0IG9uQ2xpY2tSZXBwb3J0TWVldCA9ICgpID0+IHtcclxuICAgIHNldFJlcG9ydE1lZXQodHJ1ZSk7XHJcbiAgICBzZXRSZXBvcnRDYWxscyhmYWxzZSk7XHJcbiAgICBzZXRSZXBvcnRHb2FscyhmYWxzZSk7XHJcbiAgfTtcclxuXHJcbiAgY29uc3Qgb25DbGlja1JlcHBvcnRDYWxscyA9ICgpID0+IHtcclxuICAgIHNldFJlcG9ydE1lZXQoZmFsc2UpO1xyXG4gICAgc2V0UmVwb3J0Q2FsbHModHJ1ZSk7XHJcbiAgICBzZXRSZXBvcnRHb2FscyhmYWxzZSk7XHJcbiAgfTtcclxuXHJcbiAgY29uc3Qgb25DbGlja1JlcHBvcnRHb2FscyA9ICgpID0+IHtcclxuICAgIHNldFJlcG9ydE1lZXQoZmFsc2UpO1xyXG4gICAgc2V0UmVwb3J0Q2FsbHMoZmFsc2UpO1xyXG4gICAgc2V0UmVwb3J0R29hbHModHJ1ZSk7XHJcbiAgfTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDw+XHJcbiAgICAgIDxNZW51IC8+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyLWhvbWUgcm93IG0tMFwiPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLXNtLTYgZC1mbGV4IGFsaWduLWl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNvbnRlbnQtY2VudGVyXCI+XHJcbiAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICA8aDM+QmllbnZlbnVlIHN1ciBNw6l0aXM8L2gzPlxyXG4gICAgICAgICAgICA8cD5DbGlxdWV6IGljaSBwb3VyIHZvcyByYXBwZWxzIG91IMOpZGl0ZXIgdW4gcGF0aWVudDo8L3A+XHJcblxyXG4gICAgICAgICAgICA8TGluayBvbkNsaWNrPXtvbkNsaWNrUmVwcG9ydE1lZXR9PlxyXG4gICAgICAgICAgICAgIDxGb250QXdlc29tZUljb24gaWNvbj17ZmFBcnJvd1JpZ2h0fSAvPiBSYXBwb3J0IGRlIHJlbmNvbnRyZVxyXG4gICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgIDxMaW5rIG9uQ2xpY2s9e29uQ2xpY2tSZXBwb3J0Q2FsbHN9PlxyXG4gICAgICAgICAgICAgIDxGb250QXdlc29tZUljb24gaWNvbj17ZmFBcnJvd1JpZ2h0fSAvPiBSYXBwb3J0IGQnYXBwZWxzXHJcbiAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgPExpbmsgb25DbGljaz17b25DbGlja1JlcHBvcnRHb2Fsc30+XHJcbiAgICAgICAgICAgICAgPEZvbnRBd2Vzb21lSWNvbiBpY29uPXtmYUFycm93UmlnaHR9IC8+IFJhcHBvcnQgZCdvYmplY3RpZnNcclxuICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLXNtLTYgZC1mbGV4IGFsaWduLWl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNvbnRlbnQtY2VudGVyIGNvbnRhaW5lci1yZXBwb3J0c1wiPlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzZXQtcmVwcG9ydHNcIj5cclxuICAgICAgICAgICAge3JlcG9ydE1lZXQgJiYgPEZvcm1fTWVldFJhcHBvcnRzIC8+fVxyXG4gICAgICAgICAgICB7cmVwb3J0Q2FsbHMgJiYgPFJlcHBvcnRHb2FscyAvPn1cclxuICAgICAgICAgICAge3JlcG9ydEdvYWxzICYmIDxSZXBwb3J0Q2FsbHMgLz59XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8Lz5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgSG9tZTtcclxuIiwiaW1wb3J0IFJlYWN0LCB7IHVzZUNvbnRleHQsIHVzZURlYnVnVmFsdWUgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgT3V0bGV0IH0gZnJvbSBcInJlYWN0LXJvdXRlci1kb21cIjtcclxuaW1wb3J0IE1lbnUgZnJvbSBcIi4vTWVudVwiO1xyXG5jb25zdCBMYXlvdXQgPSAoKSA9PiB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxtYWluIGNsYXNzTmFtZT1cIkFwcFwiPlxyXG4gICAgICA8T3V0bGV0IC8+XHJcbiAgICA8L21haW4+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IExheW91dDtcclxuIiwiaW1wb3J0IHsgTGluayB9IGZyb20gXCJyZWFjdC1yb3V0ZXItZG9tXCI7XHJcblxyXG5jb25zdCBMaW5rUGFnZSA9ICgpID0+IHtcclxuICByZXR1cm4gKFxyXG4gICAgPHNlY3Rpb24+XHJcbiAgICAgIDxoMT5MaW5rczwvaDE+XHJcbiAgICAgIDxiciAvPlxyXG4gICAgICA8aDI+UHVibGljPC9oMj5cclxuICAgICAgPExpbmsgdG89XCIvbG9naW5cIj5Mb2dpbjwvTGluaz5cclxuICAgICAgPExpbmsgdG89XCIvcmVnaXN0ZXJcIj5SZWdpc3RlcjwvTGluaz5cclxuICAgICAgPGJyIC8+XHJcbiAgICAgIDxoMj5Qcml2YXRlPC9oMj5cclxuICAgICAgPExpbmsgdG89XCIvXCI+SG9tZTwvTGluaz5cclxuICAgICAgPExpbmsgdG89XCIvZWRpdG9yXCI+RWRpdG9ycyBQYWdlPC9MaW5rPlxyXG4gICAgICA8TGluayB0bz1cIi9hZG1pblwiPkFkbWluIFBhZ2U8L0xpbms+XHJcbiAgICA8L3NlY3Rpb24+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IExpbmtQYWdlO1xyXG4iLCJpbXBvcnQgUmVhY3QsIHsgdXNlQ29udGV4dCwgdXNlRGVidWdWYWx1ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyB1c2VSZWYsIHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHVzZUF1dGggZnJvbSBcIi4uL2hvb2tzL3VzZUF1dGhcIjtcclxuaW1wb3J0IHsgTGluaywgdXNlTmF2aWdhdGUsIHVzZUxvY2F0aW9uIH0gZnJvbSBcInJlYWN0LXJvdXRlci1kb21cIjtcclxuXHJcbmltcG9ydCBheGlvcyBmcm9tIFwiYXhpb3NcIjtcclxuY29uc3QgTE9HSU5fVVJMID0gXCIvbG9naW5cIjtcclxuXHJcbmNvbnN0IExvZ2luID0gKCkgPT4ge1xyXG4gIGNvbnN0IHsgc2V0QXV0aCwgcGVyc2lzdCwgc2V0UGVyc2lzdCB9ID0gdXNlQXV0aCgpO1xyXG5cclxuICBjb25zdCBuYXZpZ2F0ZSA9IHVzZU5hdmlnYXRlKCk7XHJcbiAgY29uc3QgbG9jYXRpb24gPSB1c2VMb2NhdGlvbigpO1xyXG4gIGNvbnN0IGZyb20gPSBsb2NhdGlvbi5zdGF0ZT8uZnJvbT8ucGF0aG5hbWUgfHwgXCIvXCI7XHJcblxyXG4gIGNvbnN0IHVzZXJSZWYgPSB1c2VSZWYoKTtcclxuICBjb25zdCBlcnJSZWYgPSB1c2VSZWYoKTtcclxuXHJcbiAgY29uc3QgW2VtYWlsLCBzZXRVc2VyXSA9IHVzZVN0YXRlKFwiXCIpO1xyXG4gIGNvbnN0IFtwYXNzd29yZCwgc2V0UHdkXSA9IHVzZVN0YXRlKFwiXCIpO1xyXG4gIGNvbnN0IFtlcnJNc2csIHNldEVyck1zZ10gPSB1c2VTdGF0ZShcIlwiKTtcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIHVzZXJSZWYuY3VycmVudC5mb2N1cygpO1xyXG4gIH0sIFtdKTtcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIHNldEVyck1zZyhcIlwiKTtcclxuICB9LCBbZW1haWwsIHBhc3N3b3JkXSk7XHJcblxyXG4gIGNvbnN0IGhhbmRsZVN1Ym1pdCA9IGFzeW5jIChlKSA9PiB7XHJcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcblxyXG4gICAgdHJ5IHtcclxuICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBheGlvcy5wb3N0KFxyXG4gICAgICAgIExPR0lOX1VSTCxcclxuICAgICAgICBKU09OLnN0cmluZ2lmeSh7IGVtYWlsLCBwYXNzd29yZCB9KSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICBoZWFkZXJzOiB7XHJcbiAgICAgICAgICAgIFwiQ29udGVudC1UeXBlXCI6IFwiYXBwbGljYXRpb24vanNvblwiLFxyXG4gICAgICAgICAgfSxcclxuICAgICAgICB9XHJcbiAgICAgICk7XHJcblxyXG4gICAgICBjb25zdCBhY2Nlc3NUb2tlbiA9IHJlc3BvbnNlLmRhdGEudG9rZW47XHJcbiAgICAgIGNvbnN0IHRva2VuID0gYXdhaXQgYXhpb3MuZ2V0KFwiL2FwaS90b2tlbi9yZWZyZXNoXCIsIHtcclxuICAgICAgICB3aXRoQ3JlZGVudGlhbHM6IHRydWUsXHJcbiAgICAgIH0pO1xyXG5cclxuICAgICAgY29uc3Qgcm9sZXNfdXNlZCA9IGF3YWl0IGF4aW9zLmdldChcIi9hcGkvZ2V0VXNlclwiLCB7XHJcbiAgICAgICAgaGVhZGVyczogeyBBdXRob3JpemF0aW9uOiBgQmVhcmVyICR7dG9rZW4uZGF0YS50b2tlbn1gIH0sXHJcbiAgICAgIH0pO1xyXG5cclxuICAgICAgY29uc3Qgcm9sZXMgPSByb2xlc191c2VkPy5kYXRhPy5yb2xlTmFtZXM7XHJcblxyXG4gICAgICBpZiAocm9sZXMubGVuZ3RoID4gMCkge1xyXG4gICAgICAgIHNldEF1dGgoeyBlbWFpbCwgcGFzc3dvcmQsIHJvbGVzLCBhY2Nlc3NUb2tlbiB9KTtcclxuICAgICAgICBzZXRVc2VyKFwiXCIpO1xyXG4gICAgICAgIHNldFB3ZChcIlwiKTtcclxuICAgICAgICBuYXZpZ2F0ZShmcm9tLCB7IHJlcGxhY2U6IHRydWUgfSk7XHJcbiAgICAgIH1cclxuICAgIH0gY2F0Y2ggKGVycikge1xyXG4gICAgICBpZiAoIWVycj8ucmVzcG9uc2UpIHtcclxuICAgICAgICBzZXRFcnJNc2coXCJObyBTZXJ2ZXIgUmVzcG9uc2VcIik7XHJcbiAgICAgIH0gZWxzZSBpZiAoZXJyLnJlc3BvbnNlPy5zdGF0dXMgPT09IDQwMCkge1xyXG4gICAgICAgIHNldEVyck1zZyhcIk1pc3NpbmcgVXNlcm5hbWUgb3IgUGFzc3dvcmRcIik7XHJcbiAgICAgIH0gZWxzZSBpZiAoZXJyLnJlc3BvbnNlPy5zdGF0dXMgPT09IDQwMSkge1xyXG4gICAgICAgIHNldEVyck1zZyhcIlVuYXV0aG9yaXplZFwiKTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBzZXRFcnJNc2coXCJMb2dpbiBGYWlsZWRcIik7XHJcbiAgICAgIH1cclxuICAgICAgZXJyUmVmLmN1cnJlbnQuZm9jdXMoKTtcclxuICAgIH1cclxuICB9O1xyXG5cclxuICBjb25zdCB0b2dnbGVQZXJzaXN0ID0gKCkgPT4ge1xyXG4gICAgc2V0UGVyc2lzdCgocHJldikgPT4gIXByZXYpO1xyXG4gIH07XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcInBlcnNpc3RcIiwgcGVyc2lzdCk7XHJcbiAgfSwgW3BlcnNpc3RdKTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyLWxvZ2luIHJvdyBtLTBcIj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtc20tNiBjb2x1bW4tdGl0bGUgIGQtZmxleCBqdXN0aWZ5LWNvbnRlbnQtY2VudGVyIGFsaWduLWl0ZW1zLWNlbnRlclwiPlxyXG4gICAgICAgIDxoMT5Nw6l0aXM8L2gxPlxyXG4gICAgICA8L2Rpdj5cclxuXHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLXNtLTYgY29sdW1uLWNvbnRlbnQgIGQtZmxleCBqdXN0aWZ5LWNvbnRlbnQtY2VudGVyIGFsaWduLWl0ZW1zLWNlbnRlclwiPlxyXG4gICAgICAgIDxmb3JtIG9uU3VibWl0PXtoYW5kbGVTdWJtaXR9PlxyXG4gICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcclxuICAgICAgICAgICAgaWQ9XCJ1c2VybmFtZVwiXHJcbiAgICAgICAgICAgIC8vIGNsYXNzTmFtZT1cIm15LTRcIlxyXG4gICAgICAgICAgICByZWY9e3VzZXJSZWZ9XHJcbiAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiVGFwZXogdm90cmUgdXRpbGlzYXRldXJcIlxyXG4gICAgICAgICAgICBhdXRvQ29tcGxldGU9XCJvZmZcIlxyXG4gICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHNldFVzZXIoZS50YXJnZXQudmFsdWUpfVxyXG4gICAgICAgICAgICB2YWx1ZT17ZW1haWx9XHJcbiAgICAgICAgICAgIHJlcXVpcmVkXHJcbiAgICAgICAgICAvPlxyXG5cclxuICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICB0eXBlPVwicGFzc3dvcmRcIlxyXG4gICAgICAgICAgICBjbGFzc05hbWU9XCJteS00XCJcclxuICAgICAgICAgICAgaWQ9XCJwYXNzd29yZFwiXHJcbiAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiVGFwZXogdm90cmUgbW90IGRlIHBhc3NlXCJcclxuICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBzZXRQd2QoZS50YXJnZXQudmFsdWUpfVxyXG4gICAgICAgICAgICB2YWx1ZT17cGFzc3dvcmR9XHJcbiAgICAgICAgICAgIHJlcXVpcmVkXHJcbiAgICAgICAgICAvPlxyXG4gICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJidG4tbWV0aXNcIj5TaWduIEluPC9idXR0b24+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInBlcnNpc3RDaGVjayAgZC1mbGV4IGp1c3RpZnktY29udGVudC1zdGFydCBhbGlnbi1pdGVtcy1jZW50ZXIgbXQtNFwiPlxyXG4gICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICB0eXBlPVwiY2hlY2tib3hcIlxyXG4gICAgICAgICAgICAgIGlkPVwicGVyc2lzdFwiXHJcbiAgICAgICAgICAgICAgb25DaGFuZ2U9e3RvZ2dsZVBlcnNpc3R9XHJcbiAgICAgICAgICAgICAgY2hlY2tlZD17cGVyc2lzdH1cclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJwZXJzaXN0XCI+VHJ1c3QgVGhpcyBEZXZpY2U8L2xhYmVsPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9mb3JtPlxyXG4gICAgICAgIDxwXHJcbiAgICAgICAgICByZWY9e2VyclJlZn1cclxuICAgICAgICAgIGNsYXNzTmFtZT17ZXJyTXNnID8gXCJlcnJtc2dcIiA6IFwib2Zmc2NyZWVuXCJ9XHJcbiAgICAgICAgICBhcmlhLWxpdmU9XCJhc3NlcnRpdmVcIlxyXG4gICAgICAgID5cclxuICAgICAgICAgIHtlcnJNc2d9XHJcbiAgICAgICAgPC9wPlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBMb2dpbjtcclxuIiwiaW1wb3J0IHsgTGluayB9IGZyb20gXCJyZWFjdC1yb3V0ZXItZG9tXCI7XHJcblxyXG5jb25zdCBMb3VuZ2UgPSAoKSA9PiB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxzZWN0aW9uPlxyXG4gICAgICA8aDE+VGhlIExvdW5nZTwvaDE+XHJcbiAgICAgIDxiciAvPlxyXG4gICAgICA8cD5BZG1pbnMgYW5kIEVkaXRvcnMgY2FuIGhhbmcgb3V0IGhlcmUuPC9wPlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXhHcm93XCI+XHJcbiAgICAgICAgPExpbmsgdG89XCIvXCI+SG9tZTwvTGluaz5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L3NlY3Rpb24+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IExvdW5nZTtcclxuIiwiaW1wb3J0IFJlYWN0LCB7IHVzZUNvbnRleHQsIHVzZURlYnVnVmFsdWUgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgdXNlTmF2aWdhdGUsIExpbmsgfSBmcm9tIFwicmVhY3Qtcm91dGVyLWRvbVwiO1xyXG5pbXBvcnQgQnV0dG9uIGZyb20gXCJyZWFjdC1ib290c3RyYXAvQnV0dG9uXCI7XHJcbmltcG9ydCBDb250YWluZXIgZnJvbSBcInJlYWN0LWJvb3RzdHJhcC9Db250YWluZXJcIjtcclxuaW1wb3J0IHsgRm9udEF3ZXNvbWVJY29uIH0gZnJvbSBcIkBmb3J0YXdlc29tZS9yZWFjdC1mb250YXdlc29tZVwiO1xyXG5pbXBvcnQgeyBmYVNpZ25PdXQgfSBmcm9tIFwiQGZvcnRhd2Vzb21lL2ZyZWUtc29saWQtc3ZnLWljb25zXCI7XHJcbmltcG9ydCB1c2VMb2dvdXQgZnJvbSBcIi4uL2hvb2tzL3VzZUxvZ291dFwiO1xyXG5pbXBvcnQgRm9ybSBmcm9tIFwicmVhY3QtYm9vdHN0cmFwL0Zvcm1cIjtcclxuaW1wb3J0IE5hdiBmcm9tIFwicmVhY3QtYm9vdHN0cmFwL05hdlwiO1xyXG5pbXBvcnQgTmF2YmFyIGZyb20gXCJyZWFjdC1ib290c3RyYXAvTmF2YmFyXCI7XHJcbmltcG9ydCBOYXZEcm9wZG93biBmcm9tIFwicmVhY3QtYm9vdHN0cmFwL05hdkRyb3Bkb3duXCI7XHJcbmltcG9ydCBPZmZjYW52YXMgZnJvbSBcInJlYWN0LWJvb3RzdHJhcC9PZmZjYW52YXNcIjtcclxuaW1wb3J0IFNlYXJjaCBmcm9tIFwiLi9TZWFyY2hcIjtcclxuXHJcbmNvbnN0IE1lbnUgPSAoKSA9PiB7XHJcbiAgY29uc3QgbG9nb3V0ID0gdXNlTG9nb3V0KCk7XHJcblxyXG4gIGNvbnN0IHNpZ25PdXQgPSBhc3luYyAoKSA9PiB7XHJcbiAgICBhd2FpdCBsb2dvdXQoKTtcclxuICAgIG5hdmlnYXRlKFwiL2Nvbm5lY3RcIik7XHJcbiAgfTtcclxuICByZXR1cm4gKFxyXG4gICAgPD5cclxuICAgICAgPE5hdmJhclxyXG4gICAgICAgIGNvbGxhcHNlT25TZWxlY3RcclxuICAgICAgICBzdHlsZT17eyBiYWNrZ3JvdW5kQ29sb3I6IFwiIzkxYmQxMFwiIH19XHJcbiAgICAgICAgZXhwYW5kPVwieHhsXCJcclxuICAgICAgICBjbGFzc05hbWU9XCJtYi0zIG1lbnUtbWV0aXNcIlxyXG4gICAgICAgIHZhcmlhbnQ9XCJkYXJrXCJcclxuICAgICAgPlxyXG4gICAgICAgIDxDb250YWluZXIgZmx1aWQ+XHJcbiAgICAgICAgICA8TmF2YmFyLkJyYW5kIGhyZWY9XCIvXCI+XHJcbiAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInRleHQtdXBwZXJjYXNlIHRleHQtd2hpdGVcIj5Nw6l0aXM8L3NwYW4+XHJcbiAgICAgICAgICA8L05hdmJhci5CcmFuZD5cclxuICAgICAgICAgIDxOYXZiYXIuVG9nZ2xlIGFyaWEtY29udHJvbHM9XCJyZXNwb25zaXZlLW5hdmJhci1uYXZcIiAvPlxyXG4gICAgICAgICAgPE5hdmJhci5Db2xsYXBzZSBpZD1cInJlc3BvbnNpdmUtbmF2YmFyLW5hdlwiPlxyXG4gICAgICAgICAgICA8TmF2IGNsYXNzTmFtZT1cImp1c3RpZnktY29udGVudC1lbmQgZmxleC1ncm93LTEgcGUtM1wiPlxyXG4gICAgICAgICAgICAgIHsvKiA8TGluayB0bz1cIi9hZG1pblwiPkdvIHRvIHRoZSBBZG1pbiBwYWdlPC9MaW5rPiAqL31cclxuXHJcbiAgICAgICAgICAgICAgPE5hdi5MaW5rIGhyZWY9XCIvcGF0aWVudHNcIj5QYXRpZW50czwvTmF2Lkxpbms+XHJcbiAgICAgICAgICAgICAgPE5hdkRyb3Bkb3duXHJcbiAgICAgICAgICAgICAgICB0aXRsZT1cIkFwcGVsc1wiXHJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ0ZXh0LXdoaXRlXCJcclxuICAgICAgICAgICAgICAgIGlkPXtgb2ZmY2FudmFzTmF2YmFyRHJvcGRvd24tZXhwYW5kLSR7XCJ4bFwifWB9XHJcbiAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgPE5hdkRyb3Bkb3duLkl0ZW0gaHJlZj1cIiNhY3Rpb24zXCI+VG91czwvTmF2RHJvcGRvd24uSXRlbT5cclxuICAgICAgICAgICAgICAgIDxOYXZEcm9wZG93bi5JdGVtIGhyZWY9XCIjYWN0aW9uNFwiPlxyXG4gICAgICAgICAgICAgICAgICBVdGlsaXNhdGV1cnNcclxuICAgICAgICAgICAgICAgIDwvTmF2RHJvcGRvd24uSXRlbT5cclxuICAgICAgICAgICAgICA8L05hdkRyb3Bkb3duPlxyXG4gICAgICAgICAgICAgIDxOYXZEcm9wZG93blxyXG4gICAgICAgICAgICAgICAgdGl0bGU9XCJBZG1pbmlzdHJhdGlvblwiXHJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ0ZXh0LXdoaXRlXCJcclxuICAgICAgICAgICAgICAgIGlkPXtgb2ZmY2FudmFzTmF2YmFyRHJvcGRvd24tZXhwYW5kLSR7XCJ4bFwifWB9XHJcbiAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgPE5hdkRyb3Bkb3duLkl0ZW0gaHJlZj1cIiNhY3Rpb24zXCI+VG91czwvTmF2RHJvcGRvd24uSXRlbT5cclxuICAgICAgICAgICAgICAgIDxOYXZEcm9wZG93bi5JdGVtIGhyZWY9XCIjYWN0aW9uNFwiPlxyXG4gICAgICAgICAgICAgICAgICBDb250YWN0L09yZ2FuaXNhdGlvblxyXG4gICAgICAgICAgICAgICAgPC9OYXZEcm9wZG93bi5JdGVtPlxyXG4gICAgICAgICAgICAgIDwvTmF2RHJvcGRvd24+XHJcbiAgICAgICAgICAgICAgPE5hdi5MaW5rIG9uQ2xpY2s9e3NpZ25PdXR9PlxyXG4gICAgICAgICAgICAgICAgPEZvbnRBd2Vzb21lSWNvbiBpY29uPXtmYVNpZ25PdXR9IC8+e1wiIFwifVxyXG4gICAgICAgICAgICAgIDwvTmF2Lkxpbms+XHJcbiAgICAgICAgICAgIDwvTmF2PlxyXG4gICAgICAgICAgICA8U2VhcmNoPjwvU2VhcmNoPlxyXG4gICAgICAgICAgICB7LyogPEZvcm0gY2xhc3NOYW1lPVwiZC1mbGV4XCI+XHJcbiAgICAgICAgICAgICAgPEZvcm0uQ29udHJvbFxyXG4gICAgICAgICAgICAgICAgdHlwZT1cInNlYXJjaFwiXHJcbiAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIlNlYXJjaFwiXHJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJtZS0yXCJcclxuICAgICAgICAgICAgICAgIGFyaWEtbGFiZWw9XCJTZWFyY2hcIlxyXG4gICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDwvRm9ybT4gKi99XHJcbiAgICAgICAgICA8L05hdmJhci5Db2xsYXBzZT5cclxuICAgICAgICA8L0NvbnRhaW5lcj5cclxuICAgICAgPC9OYXZiYXI+XHJcbiAgICA8Lz5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgTWVudTtcclxuIiwiaW1wb3J0IFJlYWN0LCB7IHVzZUNvbnRleHQsIHVzZURlYnVnVmFsdWUgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgTGluayB9IGZyb20gXCJyZWFjdC1yb3V0ZXItZG9tXCI7XHJcblxyXG5jb25zdCBNaXNzaW5nID0gKCkgPT4ge1xyXG4gIHJldHVybiAoXHJcbiAgICA8YXJ0aWNsZSBzdHlsZT17eyBwYWRkaW5nOiBcIjEwMHB4XCIgfX0+XHJcbiAgICAgIDxoMT5Pb3BzITwvaDE+XHJcbiAgICAgIDxwPlBhZ2UgTm90IEZvdW5kPC9wPlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXhHcm93XCI+XHJcbiAgICAgICAgPExpbmsgdG89XCIvXCI+VmlzaXQgT3VyIEhvbWVwYWdlPC9MaW5rPlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvYXJ0aWNsZT5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgTWlzc2luZztcclxuIiwiaW1wb3J0IFJlYWN0LCB7IHVzZUNvbnRleHQsIHVzZURlYnVnVmFsdWUsIHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgTGluaywgdXNlTmF2aWdhdGUsIHVzZUxvY2F0aW9uIH0gZnJvbSBcInJlYWN0LXJvdXRlci1kb21cIjtcclxuaW1wb3J0IFVzZXJzIGZyb20gXCIuL1VzZXJzXCI7XHJcbmltcG9ydCBNZW51IGZyb20gXCIuL01lbnVcIjtcclxuaW1wb3J0IGxvZ29QYXRoIGZyb20gXCIuLi9pbWFnZXMvNWE5NGUzNGI0YzM2ZTI4ZGU0ZTcwNGY4YzJkMWMzOWE3OWU5MWI1ZC5wbmdcIjtcclxuaW1wb3J0IGF4aW9zIGZyb20gXCJheGlvc1wiO1xyXG5pbXBvcnQgeyB1c2VQYXJhbXMgfSBmcm9tIFwicmVhY3Qtcm91dGVyLWRvbVwiO1xyXG5pbXBvcnQgdXNlQXV0aCBmcm9tIFwiLi4vaG9va3MvdXNlQXV0aFwiO1xyXG5pbXBvcnQgVGFiIGZyb20gXCJyZWFjdC1ib290c3RyYXAvVGFiXCI7XHJcbmltcG9ydCBUYWJzIGZyb20gXCJyZWFjdC1ib290c3RyYXAvVGFic1wiO1xyXG5pbXBvcnQgRmljaGUgZnJvbSBcIi4vUHJvZmlsZS9GaWNoZS9GaWNoZVwiO1xyXG5pbXBvcnQgSW5kaWNhdG9ycyBmcm9tIFwiLi9Qcm9maWxlL0luZGljYXRvcnNcIjtcclxuaW1wb3J0IFByb2ZpbGUgZnJvbSBcIi4vUHJvZmlsZS9Qcm9maWxlXCI7XHJcbmltcG9ydCBNZWRpYXMgZnJvbSBcIi4vUHJvZmlsZS9NZWRpYXNcIjtcclxuaW1wb3J0IENvbnRhY3RzIGZyb20gXCIuL1Byb2ZpbGUvQ29udGFjdHNcIjtcclxuaW1wb3J0IFBsYWNlcyBmcm9tIFwiLi9Qcm9maWxlL1BsYWNlc1wiO1xyXG5cclxuY29uc3QgUGF0aWVudCA9ICgpID0+IHtcclxuICBsZXQgaWQgPSB1c2VQYXJhbXMoKS5pZDtcclxuICBsZXQgYmFja2dyb3VuZEltYWdlID1cclxuICAgIFwiLi4vaW1hZ2VzLzVhOTRlMzRiNGMzNmUyOGRlNGU3MDRmOGMyZDFjMzlhNzllOTFiNWQucG5nXCI7XHJcbiAgY29uc3QgW2F1dGgsIHNldEF1dGhdID0gdXNlU3RhdGUodXNlQXV0aCgpKTtcclxuICBjb25zdCBbcGF0aWVudCwgc2V0UGF0aWVudF0gPSB1c2VTdGF0ZShudWxsKTtcclxuICBjb25zdCBbaW1nUGF0aWVudCwgc2V0SW1nUGF0aWVudF0gPSB1c2VTdGF0ZShudWxsKTtcclxuICBjb25zdCBba2V5LCBzZXRLZXldID0gdXNlU3RhdGUoXCJmaWNoZVwiKTtcclxuICBjb25zdCBbaWRQYXRpZW50LCBzZXRJZFBhdGllbnRdID0gdXNlU3RhdGUoaWQpO1xyXG4gIGNvbnN0IG5hdmlnYXRlID0gdXNlTmF2aWdhdGUoKTtcclxuICBjb25zdCBsb2NhdGlvbiA9IHVzZUxvY2F0aW9uKCk7XHJcbiAgY29uc3QgW2xvY2F0aW9uV2ViLCBzZXRMb2NhdGlvbl0gPSB1c2VTdGF0ZShsb2NhdGlvbik7XHJcblxyXG4gIHZhciBmb3JtRGF0YSA9IG5ldyBGb3JtRGF0YSgpO1xyXG4gIGZvcm1EYXRhLmFwcGVuZChcImlkXCIsIGlkLnRvU3RyaW5nKCkpO1xyXG5cclxuICBsZXQgb2JqUGF0aWVudCA9IHt9O1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgYXhpb3Moe1xyXG4gICAgICBtZXRob2Q6IFwicG9zdFwiLFxyXG4gICAgICB1cmw6IFwiL2FwaS9nZXRQYXRpZW50XCIsXHJcbiAgICAgIGRhdGE6IGZvcm1EYXRhLFxyXG4gICAgICBoZWFkZXJzOiB7XHJcbiAgICAgICAgXCJDb250ZW50LVR5cGVcIjogXCJhcHBsaWNhdGlvbi9qc29uXCIsXHJcbiAgICAgICAgQXV0aG9yaXphdGlvbjogYEJlYXJlciAke2F1dGguYXV0aC5hY2Nlc3NUb2tlbn1gLFxyXG4gICAgICB9LFxyXG4gICAgfSlcclxuICAgICAgLnRoZW4oZnVuY3Rpb24gKHJlc3BvbnNlKSB7XHJcbiAgICAgICAgLy9oYW5kbGUgc3VjY2Vzc1xyXG4gICAgICAgIG9ialBhdGllbnQucGF0aWVudCA9IHJlc3BvbnNlLmRhdGE7XHJcbiAgICAgICAgc2V0UGF0aWVudChyZXNwb25zZS5kYXRhKTtcclxuICAgICAgICBheGlvcyh7XHJcbiAgICAgICAgICBtZXRob2Q6IFwicG9zdFwiLFxyXG4gICAgICAgICAgdXJsOiBcIi9hcGkvZ2V0TWVkaWFGb3JQYXRpZW50XCIsXHJcbiAgICAgICAgICBkYXRhOiBmb3JtRGF0YSxcclxuICAgICAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICAgICAgXCJDb250ZW50LVR5cGVcIjogXCJhcHBsaWNhdGlvbi9qc29uXCIsXHJcbiAgICAgICAgICAgIEF1dGhvcml6YXRpb246IGBCZWFyZXIgJHthdXRoLmF1dGguYWNjZXNzVG9rZW59YCxcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgfSlcclxuICAgICAgICAgIC50aGVuKGZ1bmN0aW9uIChyZXNwb25zZSkge1xyXG4gICAgICAgICAgICAvL2hhbmRsZSBzdWNjZXNzXHJcbiAgICAgICAgICAgIC8vIHNldFBhdGllbnQocmVzcG9uc2UuZGF0YSk7XHJcblxyXG4gICAgICAgICAgICBsZXQgYmFja2dyb3VuZEltYWdlID0gcmVzcG9uc2UuaW1hZ2U7XHJcbiAgICAgICAgICAgIHNldEltZ1BhdGllbnQocmVzcG9uc2UuZGF0YSk7XHJcbiAgICAgICAgICAgIC8vIHNldFBhdGllbnQocmVzcG9uc2UuZGF0YSk7XHJcbiAgICAgICAgICB9KVxyXG4gICAgICAgICAgLmNhdGNoKGZ1bmN0aW9uIChyZXNwb25zZSkge30pO1xyXG4gICAgICB9KVxyXG4gICAgICAuY2F0Y2goZnVuY3Rpb24gKHJlc3BvbnNlKSB7fSk7XHJcbiAgfSwgW2lkUGF0aWVudF0pO1xyXG5cclxuICAvLyBcIi4uL2J1aWxkL2ltYWdlcy81YTk0ZTM0YjRjMzZlMjhkZTRlNzA0ZjhjMmQxYzM5YTc5ZTkxYjVkLnBuZ1wiXHJcbiAgcmV0dXJuIChcclxuICAgIDw+XHJcbiAgICAgIDxNZW51PjwvTWVudT5cclxuXHJcbiAgICAgIHtwYXRpZW50ICE9PSBudWxsICYmIChcclxuICAgICAgICA8c2VjdGlvbj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyIGVtcC1wcm9maWxlXCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93IHByb2ZpbGUtaGVhZFwiPlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLXNtLTJcIj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHJvZmlsZS1pbWdcIj5cclxuICAgICAgICAgICAgICAgICAge2ltZ1BhdGllbnQgJiZcclxuICAgICAgICAgICAgICAgICAgICBpbWdQYXRpZW50ICE9PSBudWxsICYmXHJcbiAgICAgICAgICAgICAgICAgICAgT2JqZWN0LmtleXMoaW1nUGF0aWVudCkubGVuZ3RoID4gMCAmJiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICA8PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz17aW1nUGF0aWVudC5pbWFnZX0gLz47XHJcbiAgICAgICAgICAgICAgICAgICAgICA8Lz5cclxuICAgICAgICAgICAgICAgICAgICApfVxyXG5cclxuICAgICAgICAgICAgICAgICAge2ltZ1BhdGllbnQgJiZcclxuICAgICAgICAgICAgICAgICAgICBpbWdQYXRpZW50ID09PSBudWxsICYmXHJcbiAgICAgICAgICAgICAgICAgICAgT2JqZWN0LmtleXMoaW1nUGF0aWVudCkubGVuZ3RoID4gMCAmJiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICA8PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz1cImh0dHBzOi8vdWNyZWF0ZS5jaC93cC1jb250ZW50L3VwbG9hZHMvMjAyMi8wMi9wcm9maWxfdmlkZS5qcGdcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA7XHJcbiAgICAgICAgICAgICAgICAgICAgICA8Lz5cclxuICAgICAgICAgICAgICAgICAgICApfVxyXG5cclxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmaWxlIGJ0biBidG4tbGcgYnRuLXByaW1hcnlcIj5cclxuICAgICAgICAgICAgICAgICAgICBDaGFuZ2UgUGhvdG9cclxuICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cImZpbGVcIiBuYW1lPVwiZmlsZVwiIC8+XHJcbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtc20tNlwiPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwcm9maWxlLWhlYWRcIj5cclxuICAgICAgICAgICAgICAgICAgPGg1PlxyXG4gICAgICAgICAgICAgICAgICAgIHtwYXRpZW50LmZpcnN0bmFtZX0ge3BhdGllbnQubGFzdG5hbWV9XHJcbiAgICAgICAgICAgICAgICAgIDwvaDU+XHJcbiAgICAgICAgICAgICAgICAgIDxoNj4ge25ldyBEYXRlKHBhdGllbnQuYmlydGhkYXRlKS50b0xvY2FsZURhdGVTdHJpbmcoKX08L2g2PlxyXG4gICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJwcm9pbGUtcmF0aW5nXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgUHJlbWllciBjb250YWN0IDp7XCIgXCJ9XHJcbiAgICAgICAgICAgICAgICAgICAgPHNwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICB7XCIgXCJ9XHJcbiAgICAgICAgICAgICAgICAgICAgICB7bmV3IERhdGUocGF0aWVudC5maXJzdENvbnRhY3REYXRlKS50b0xvY2FsZURhdGVTdHJpbmcoKX1cclxuICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3cgYm9keS1wcm9maWxlXCI+XHJcbiAgICAgICAgICAgICAgPFRhYnNcclxuICAgICAgICAgICAgICAgIGRlZmF1bHRBY3RpdmVLZXk9XCJwcm9maWxlXCJcclxuICAgICAgICAgICAgICAgIGlkPVwidW5jb250cm9sbGVkLXRhYi1leGFtcGxlXCJcclxuICAgICAgICAgICAgICAgIGFjdGl2ZUtleT17a2V5fVxyXG4gICAgICAgICAgICAgICAgb25TZWxlY3Q9eyhrKSA9PiBzZXRLZXkoayl9XHJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJwcm9maWxlLXRhYlwiXHJcbiAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgPFRhYiBldmVudEtleT1cImZpY2hlXCIgdGl0bGU9XCJGaWNoZVwiPlxyXG4gICAgICAgICAgICAgICAgICA8RmljaGUgLz5cclxuICAgICAgICAgICAgICAgIDwvVGFiPlxyXG4gICAgICAgICAgICAgICAgPFRhYiBldmVudEtleT1cInN1aXZpXCIgdGl0bGU9XCJQcm9maWxlXCI+XHJcbiAgICAgICAgICAgICAgICAgIDxQcm9maWxlIC8+XHJcbiAgICAgICAgICAgICAgICA8L1RhYj5cclxuICAgICAgICAgICAgICAgIDxUYWIgZXZlbnRLZXk9XCJpbmRpY2F0ZXVyc1wiIHRpdGxlPVwiSW5kaWNhdGV1cnNcIj5cclxuICAgICAgICAgICAgICAgICAgPEluZGljYXRvcnMgLz5cclxuICAgICAgICAgICAgICAgIDwvVGFiPlxyXG4gICAgICAgICAgICAgICAgPFRhYiBldmVudEtleT1cIm1lZGlhc1wiIHRpdGxlPVwiTWVkaWFzXCI+XHJcbiAgICAgICAgICAgICAgICAgIDxNZWRpYXMgLz5cclxuICAgICAgICAgICAgICAgIDwvVGFiPlxyXG4gICAgICAgICAgICAgICAgPFRhYiBldmVudEtleT1cImNvbnRhY3RzXCIgdGl0bGU9XCJDb250YWN0c1wiPlxyXG4gICAgICAgICAgICAgICAgICA8Q29udGFjdHMgLz5cclxuICAgICAgICAgICAgICAgIDwvVGFiPlxyXG4gICAgICAgICAgICAgICAgPFRhYiBldmVudEtleT1cImxpZXV4XCIgdGl0bGU9XCJMaWV1eFwiPlxyXG4gICAgICAgICAgICAgICAgICA8UGxhY2VzIC8+XHJcbiAgICAgICAgICAgICAgICA8L1RhYj5cclxuICAgICAgICAgICAgICA8L1RhYnM+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9zZWN0aW9uPlxyXG4gICAgICApfVxyXG4gICAgPC8+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFBhdGllbnQ7XHJcbiIsImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBheGlvcyBmcm9tIFwiYXhpb3NcIjtcclxuaW1wb3J0IFRhYmxlIGZyb20gXCJyZWFjdC1ib290c3RyYXAvVGFibGVcIjtcclxuaW1wb3J0IFBlcnNpc3RMb2dpbiBmcm9tIFwiLi9QZXJzaXN0TG9naW5cIjtcclxuaW1wb3J0IHVzZUF1dGggZnJvbSBcIi4uL2hvb2tzL3VzZUF1dGhcIjtcclxuaW1wb3J0IHsgRm9udEF3ZXNvbWVJY29uIH0gZnJvbSBcIkBmb3J0YXdlc29tZS9yZWFjdC1mb250YXdlc29tZVwiO1xyXG5pbXBvcnQgeyBmYVVzZXIgfSBmcm9tIFwiQGZvcnRhd2Vzb21lL2ZyZWUtc29saWQtc3ZnLWljb25zXCI7XHJcbmltcG9ydCBNZW51IGZyb20gXCIuL01lbnVcIjtcclxuaW1wb3J0IEFjY29yZGlvbiBmcm9tIFwicmVhY3QtYm9vdHN0cmFwL0FjY29yZGlvblwiO1xyXG5pbXBvcnQgeyBMaW5rIH0gZnJvbSBcInJlYWN0LXJvdXRlci1kb21cIjtcclxuZnVuY3Rpb24gUGF0aWVudHMoKSB7XHJcbiAgY29uc3QgW2F1dGgsIHNldEF1dGhdID0gdXNlU3RhdGUodXNlQXV0aCgpKTtcclxuICBjb25zdCBbcGF0aWVudHNMaXN0LCBzZXRQYXRpZW50c0xpc3RdID0gdXNlU3RhdGUobnVsbCk7XHJcbiAgY29uc3QgW2xlbmd0aExpc3QsIHNldExlbmd0aExpc3RdID0gdXNlU3RhdGUoMTApO1xyXG5cclxuICB2YXIgZm9ybURhdGEgPSBuZXcgRm9ybURhdGEoKTtcclxuICBmb3JtRGF0YS5hcHBlbmQoXCJwYWdlXCIsIGxlbmd0aExpc3QudG9TdHJpbmcoKSk7XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBheGlvcyh7XHJcbiAgICAgIG1ldGhvZDogXCJwb3N0XCIsXHJcbiAgICAgIHVybDogXCIvYXBpL2dldFBhdGllbnRzXCIsXHJcbiAgICAgIGRhdGE6IGZvcm1EYXRhLFxyXG4gICAgICBoZWFkZXJzOiB7XHJcbiAgICAgICAgXCJDb250ZW50LVR5cGVcIjogXCJhcHBsaWNhdGlvbi9qc29uXCIsXHJcbiAgICAgICAgQXV0aG9yaXphdGlvbjogYEJlYXJlciAke2F1dGguYXV0aC5hY2Nlc3NUb2tlbn1gLFxyXG4gICAgICB9LFxyXG4gICAgfSlcclxuICAgICAgLnRoZW4oZnVuY3Rpb24gKHJlc3BvbnNlKSB7XHJcbiAgICAgICAgLy9oYW5kbGUgc3VjY2Vzc1xyXG4gICAgICAgIHNldFBhdGllbnRzTGlzdChyZXNwb25zZSk7XHJcbiAgICAgIH0pXHJcbiAgICAgIC5jYXRjaChmdW5jdGlvbiAocmVzcG9uc2UpIHt9KTtcclxuICB9LCBbbGVuZ3RoTGlzdCwgc2V0TGVuZ3RoTGlzdF0pO1xyXG5cclxuICBjb25zdCByZWFkTW9yZSA9ICgpID0+IHtcclxuICAgIHNldExlbmd0aExpc3QobGVuZ3RoTGlzdCArIDEwKTtcclxuICB9O1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPD5cclxuICAgICAgPE1lbnU+PC9NZW51PlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lciBjb250YWluZXItcGF0aWVudHMgcm93IG14LWF1dG8gXCI+XHJcbiAgICAgICAgPGgzPlRvdXMgbGVzIHBhdGllbnRzPC9oMz5cclxuXHJcbiAgICAgICAge3BhdGllbnRzTGlzdCAmJiBwYXRpZW50c0xpc3QuZGF0YSAmJiBwYXRpZW50c0xpc3QuZGF0YS5sZW5ndGggPiAwICYmIChcclxuICAgICAgICAgIDw+XHJcbiAgICAgICAgICAgIHtwYXRpZW50c0xpc3QuZGF0YS5tYXAoKHBhdGllbnQpID0+IChcclxuICAgICAgICAgICAgICA8QWNjb3JkaW9uIGNsYXNzTmFtZT1cIm15LTNcIj5cclxuICAgICAgICAgICAgICAgIDxBY2NvcmRpb24uSXRlbSBldmVudEtleT17cGF0aWVudC5pZH0ga2V5PXtwYXRpZW50LmlkfT5cclxuICAgICAgICAgICAgICAgICAgPEFjY29yZGlvbi5IZWFkZXI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtc20tMVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPEZvbnRBd2Vzb21lSWNvbiBpY29uPXtmYVVzZXJ9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtc20tMlwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAge3BhdGllbnQuZmlyc3RuYW1lfSB7cGF0aWVudC5sYXN0bmFtZX1cclxuICAgICAgICAgICAgICAgICAgICAgIDxMaW5rIGNsYXNzTmFtZT1cInNlZVByb2ZpbFwiIHRvPXtcIi9cIiArIHBhdGllbnQuaWR9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBWb2lyIHByb2ZpbFxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLXNtLTJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgIHtuZXcgRGF0ZShwYXRpZW50LmJpcnRoZGF0ZSkudG9Mb2NhbGVEYXRlU3RyaW5nKCl9XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtc20tMlwiPjE0LzAyLzIwMjI8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1zbS0zXCI+e3BhdGllbnQuYmlydGhMb2NhdGlvbn08L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1zbS0xXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJzdGF0dXNcIj57cGF0aWVudC5zdGF0dXN9PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIHsvKiA8ZGl2IGNsYXNzTmFtZT1cImNvbC1zbS0zXCI+e0RhdGUubm93KCl9PC9kaXY+ICovfVxyXG4gICAgICAgICAgICAgICAgICA8L0FjY29yZGlvbi5IZWFkZXI+XHJcbiAgICAgICAgICAgICAgICAgIDxBY2NvcmRpb24uQm9keT5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvdyBib2R5LWFjY29yZGVvbml0ZW1QYXRpZW50XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1zbS00XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxiPkRlcm5pw6hyZSBhY3Rpdml0w6llPC9iPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8cD5SYXBwb3J0IGRlIHJlbmNvbnRyZSAxMi8wOC8yMDIxPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8cD5SYXBwb3J0IGRlIHJlbmNvbnRyZSAyMC8wOC8yMDIyPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8cD5SYXBwb3J0IGRlIHJlbmNvbnRyZSAxNC8wOS8yMDIyPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1zbS0yXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxiPkh5Z2nDqG5lPC9iPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8cD5Hb29nbGUgQWdlbmRhPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1zbS0yXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxiPlNhbnTDqWUgbWVudGFsZTwvYj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHA+R29vZ2xlIEFnZW5kYTwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtc20tMlwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8Yj5MaWVuczwvYj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHA+R29vZ2xlIEFnZW5kYTwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtc20tMlwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8Yj5BdXRyZXMgZMOpdGFpbHM8L2I+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxwPlNhbnMgcGFwaWVyczwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHA+SW5zY3JpcyBhdSBsb2dlbWVudCBzb2NpYWw8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgPC9BY2NvcmRpb24uQm9keT5cclxuICAgICAgICAgICAgICAgIDwvQWNjb3JkaW9uLkl0ZW0+XHJcbiAgICAgICAgICAgICAgPC9BY2NvcmRpb24+XHJcbiAgICAgICAgICAgICkpfVxyXG4gICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cImJ0bi1tZXRpc1wiIG9uQ2xpY2s9e3JlYWRNb3JlfT5cclxuICAgICAgICAgICAgICBSZWFkIE1vcmVcclxuICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICA8Lz5cclxuICAgICAgICApfVxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvPlxyXG4gICk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFBhdGllbnRzO1xyXG4iLCJpbXBvcnQgUmVhY3QsIHsgdXNlQ29udGV4dCwgdXNlRGVidWdWYWx1ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyBPdXRsZXQgfSBmcm9tIFwicmVhY3Qtcm91dGVyLWRvbVwiO1xyXG5pbXBvcnQgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB1c2VSZWZyZXNoVG9rZW4gZnJvbSBcIi4uL2hvb2tzL3VzZVJlZnJlc2hUb2tlblwiO1xyXG5pbXBvcnQgdXNlQXV0aCBmcm9tIFwiLi4vaG9va3MvdXNlQXV0aFwiO1xyXG5cclxuY29uc3QgUGVyc2lzdExvZ2luID0gKCkgPT4ge1xyXG4gIGNvbnN0IFtpc0xvYWRpbmcsIHNldElzTG9hZGluZ10gPSB1c2VTdGF0ZSh0cnVlKTtcclxuICBjb25zdCByZWZyZXNoID0gdXNlUmVmcmVzaFRva2VuKCk7XHJcbiAgY29uc3QgeyBhdXRoLCBwZXJzaXN0IH0gPSB1c2VBdXRoKCk7XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBsZXQgaXNNb3VudGVkID0gdHJ1ZTtcclxuXHJcbiAgICBjb25zdCB2ZXJpZnlSZWZyZXNoVG9rZW4gPSBhc3luYyAoKSA9PiB7XHJcbiAgICAgIHRyeSB7XHJcbiAgICAgICAgYXdhaXQgcmVmcmVzaCgpO1xyXG4gICAgICB9IGNhdGNoIChlcnIpIHtcclxuICAgICAgICBjb25zb2xlLmVycm9yKGVycik7XHJcbiAgICAgIH0gZmluYWxseSB7XHJcbiAgICAgICAgaXNNb3VudGVkICYmIHNldElzTG9hZGluZyhmYWxzZSk7XHJcbiAgICAgIH1cclxuICAgIH07XHJcblxyXG4gICAgLy8gcGVyc2lzdCBhZGRlZCBoZXJlIEFGVEVSIHR1dG9yaWFsIHZpZGVvXHJcbiAgICAvLyBBdm9pZHMgdW53YW50ZWQgY2FsbCB0byB2ZXJpZnlSZWZyZXNoVG9rZW5cclxuICAgICFhdXRoPy5hY2Nlc3NUb2tlbiAmJiBwZXJzaXN0ID8gdmVyaWZ5UmVmcmVzaFRva2VuKCkgOiBzZXRJc0xvYWRpbmcoZmFsc2UpO1xyXG5cclxuICAgIHJldHVybiAoKSA9PiAoaXNNb3VudGVkID0gZmFsc2UpO1xyXG4gIH0sIFtdKTtcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIC8vIGNvbnNvbGUubG9nKGBpc0xvYWRpbmc6ICR7aXNMb2FkaW5nfWApO1xyXG4gICAgLy8gY29uc29sZS5sb2coYGFUOiAke0pTT04uc3RyaW5naWZ5KGF1dGg/LmFjY2Vzc1Rva2VuKX1gKTtcclxuICB9LCBbaXNMb2FkaW5nXSk7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8PnshcGVyc2lzdCA/IDxPdXRsZXQgLz4gOiBpc0xvYWRpbmcgPyA8cD5Mb2FkaW5nLi4uPC9wPiA6IDxPdXRsZXQgLz59PC8+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFBlcnNpc3RMb2dpbjtcclxuIiwiLy8gLi9hc3NldHMvanMvY29tcG9uZW50cy9Qb3N0cy5qc1xyXG5cclxuaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgYXhpb3MgZnJvbSBcImF4aW9zXCI7XHJcblxyXG5jbGFzcyBQb3N0cyBleHRlbmRzIENvbXBvbmVudCB7XHJcbiAgY29uc3RydWN0b3IoKSB7XHJcbiAgICBzdXBlcigpO1xyXG4gICAgdGhpcy5zdGF0ZSA9IHsgcG9zdHM6IFtdLCBsb2FkaW5nOiB0cnVlIH07XHJcbiAgfVxyXG5cclxuICBjb21wb25lbnREaWRNb3VudCgpIHtcclxuICAgIHRoaXMuZ2V0UG9zdHMoKTtcclxuICB9XHJcblxyXG4gIGdldFBvc3RzKCkge1xyXG4gICAgYXhpb3MuZ2V0KGBodHRwczovLzEyNy4wLjAuMTo4MDAwL3Nlc3Npb25gKS50aGVuKChyZXMpID0+IHtcclxuICAgICAgLy8gY29uc3QgcG9zdHMgPSByZXMuZGF0YS5zbGljZSgwLDE1KTtcclxuICAgICAgLy8gdGhpcy5zZXRTdGF0ZSh7IHBvc3RzLCBsb2FkaW5nOiBmYWxzZSB9KVxyXG4gICAgICAvLyBjb25zb2xlLmxvZyhyZXMpXHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIHJlbmRlcigpIHtcclxuICAgIGNvbnN0IGxvYWRpbmcgPSB0aGlzLnN0YXRlLmxvYWRpbmc7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8ZGl2PlxyXG4gICAgICAgIDxzZWN0aW9uIGNsYXNzTmFtZT1cInJvdy1zZWN0aW9uXCI+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lclwiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvd1wiPlxyXG4gICAgICAgICAgICAgIDxoMiBjbGFzc05hbWU9XCJ0ZXh0LWNlbnRlclwiPlxyXG4gICAgICAgICAgICAgICAgPHNwYW4+TGlzdCBvZiBwb3N0czwvc3Bhbj5DcmVhdGVkIHdpdGh7XCIgXCJ9XHJcbiAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJmYSBmYS1oZWFydFwiPjwvaT4gYnkgeWVtaXdlYmJ5e1wiIFwifVxyXG4gICAgICAgICAgICAgIDwvaDI+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAge2xvYWRpbmcgPyAoXHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e1wicm93IHRleHQtY2VudGVyXCJ9PlxyXG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiZmEgZmEtc3BpbiBmYS1zcGlubmVyIGZhLTR4XCI+PC9zcGFuPlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICApIDogKFxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtcInJvd1wifT5cclxuICAgICAgICAgICAgICAgIHt0aGlzLnN0YXRlLnBvc3RzLm1hcCgocG9zdCkgPT4gKFxyXG4gICAgICAgICAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiY29sLW1kLTEwIG9mZnNldC1tZC0xIHJvdy1ibG9ja1wiXHJcbiAgICAgICAgICAgICAgICAgICAga2V5PXtwb3N0LmlkfVxyXG4gICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgPHVsIGlkPVwic29ydGFibGVcIj5cclxuICAgICAgICAgICAgICAgICAgICAgIDxsaT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtZWRpYVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWVkaWEtYm9keVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGg0Pntwb3N0Lm5hbWV9PC9oND5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwPntwb3N0LmRlc2NyaXB0aW9ufTwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvdWw+XHJcbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICl9XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L3NlY3Rpb24+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgKTtcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFBvc3RzO1xyXG4iLCJpbXBvcnQgUmVhY3QsIHsgdXNlQ29udGV4dCwgdXNlRGVidWdWYWx1ZSwgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgdXNlQXV0aCBmcm9tIFwiLi4vLi4vaG9va3MvdXNlQXV0aFwiO1xyXG5pbXBvcnQgeyB1c2VQYXJhbXMgfSBmcm9tIFwicmVhY3Qtcm91dGVyLWRvbVwiO1xyXG5pbXBvcnQgYXhpb3MgZnJvbSBcImF4aW9zXCI7XHJcblxyXG5jb25zdCBDb250YWN0cyA9ICgpID0+IHtcclxuICBsZXQgaWQgPSB1c2VQYXJhbXMoKS5pZDtcclxuICB2YXIgZm9ybURhdGEgPSBuZXcgRm9ybURhdGEoKTtcclxuICBmb3JtRGF0YS5hcHBlbmQoXCJpZFwiLCBpZC50b1N0cmluZygpKTtcclxuICBjb25zdCBbYXV0aCwgc2V0QXV0aF0gPSB1c2VTdGF0ZSh1c2VBdXRoKCkpO1xyXG4gIGNvbnN0IFtpZFBhdGllbnQsIHNldElkUGF0aWVudF0gPSB1c2VTdGF0ZShpZCk7XHJcbiAgY29uc3QgW2xpc3RDb250YWN0cywgc2V0Q29udGFjdHNdID0gdXNlU3RhdGUobnVsbCk7XHJcbiAgY29uc3QgW29wdGlvbnMsIHNldE9wdGlvbnNdID0gdXNlU3RhdGUoKTtcclxuICBjb25zdCBbZmlsdGVyRGF0ZXMsIHNldEZpbHRlckRhdGVzXSA9IHVzZVN0YXRlKCk7XHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGF4aW9zKHtcclxuICAgICAgbWV0aG9kOiBcInBvc3RcIixcclxuICAgICAgdXJsOiBcIi9hcGkvZ2V0Q29udGFjdHNCeVBhdGllbnRzXCIsXHJcbiAgICAgIGRhdGE6IGZvcm1EYXRhLFxyXG4gICAgICBoZWFkZXJzOiB7XHJcbiAgICAgICAgXCJDb250ZW50LVR5cGVcIjogXCJhcHBsaWNhdGlvbi9qc29uXCIsXHJcbiAgICAgICAgQXV0aG9yaXphdGlvbjogYEJlYXJlciAke2F1dGguYXV0aC5hY2Nlc3NUb2tlbn1gLFxyXG4gICAgICB9LFxyXG4gICAgfSlcclxuICAgICAgLnRoZW4oZnVuY3Rpb24gKHJlc3BvbnNlKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2cocmVzcG9uc2UpO1xyXG4gICAgICAgIHNldENvbnRhY3RzKHJlc3BvbnNlKTtcclxuICAgICAgfSlcclxuICAgICAgLmNhdGNoKGZ1bmN0aW9uIChyZXNwb25zZSkge30pO1xyXG4gIH0sIFtpZFBhdGllbnRdKTtcclxuICBjb25zb2xlLmxvZyhsaXN0Q29udGFjdHMpO1xyXG4gIHJldHVybiAoXHJcbiAgICA8PlxyXG4gICAgICA8aDU+Q29udGFjdHM8L2g1PlxyXG4gICAgICB7bGlzdENvbnRhY3RzICYmIGxpc3RDb250YWN0cy5kYXRhLmxlbmd0aCA+IDAgJiYgKFxyXG4gICAgICAgIDw+XHJcbiAgICAgICAgICB7bGlzdENvbnRhY3RzPy5kYXRhPy5tYXAoKGl0ZW0sIGlkKSA9PiAoXHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93XCI+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtc20tNFwiPlxyXG4gICAgICAgICAgICAgICAge2l0ZW0/LmNvbnQ/LmZpcnN0bmFtZX0ge2l0ZW0/LmNvbnQ/Lmxhc3RuYW1lfVxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICkpfVxyXG4gICAgICAgIDwvPlxyXG4gICAgICApfVxyXG5cclxuICAgICAgPGg1PlBhdGllbnRzPC9oNT5cclxuICAgICAge2xpc3RDb250YWN0cyAmJiBsaXN0Q29udGFjdHMuZGF0YS5sZW5ndGggPiAwICYmIChcclxuICAgICAgICA8PlxyXG4gICAgICAgICAgey8qIDxoNj5MaXN0ZSBkZSBmaWNoaWVycyBkw6lqw6AgcHLDqXNlbnRzPC9oNj4gKi99XHJcblxyXG4gICAgICAgICAge2xpc3RDb250YWN0cz8uZGF0YT8ubWFwKChpdGVtLCBpZCkgPT4gKFxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvd1wiPlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLXNtLTRcIj5cclxuICAgICAgICAgICAgICAgIHtpdGVtPy5vcnBhPy5maXJzdG5hbWV9IHtpdGVtPy5vcnBhPy5sYXN0bmFtZX1cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICB7LyogPGRpdiBjbGFzc05hbWU9XCJjb2wtc20tNFwiPntpdGVtPy5jb250Py5sYXN0bmFtZX08L2Rpdj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1zbS00XCI+e2l0ZW0/LmNvbnQ/LmRlc2NyaXB0aW9ufTwvZGl2PiAqL31cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICApKX1cclxuICAgICAgICA8Lz5cclxuICAgICAgKX1cclxuICAgIDwvPlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBDb250YWN0cztcclxuIiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyB1c2VEcm9wem9uZSB9IGZyb20gXCJyZWFjdC1kcm9wem9uZVwiO1xyXG5cclxuY29uc3QgQmFzaWMgPSAocHJvcHMpID0+IHtcclxuICBjb25zdCB7IGFjY2VwdGVkRmlsZXMsIGdldFJvb3RQcm9wcywgZ2V0SW5wdXRQcm9wcyB9ID0gdXNlRHJvcHpvbmUoKTtcclxuXHJcbiAgY29uc3QgZmlsZXMgPSBhY2NlcHRlZEZpbGVzLm1hcCgoZmlsZSkgPT4gKFxyXG4gICAgPGxpIGtleT17ZmlsZS5wYXRofT5cclxuICAgICAge2ZpbGUucGF0aH0gLSB7ZmlsZS5zaXplfSBieXRlc1xyXG4gICAgPC9saT5cclxuICApKTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPVwicm93IGNvbnRhaW5lci1kcm9wem9uZSBtYi00XCI+XHJcbiAgICAgIDxkaXYgey4uLmdldFJvb3RQcm9wcyh7IGNsYXNzTmFtZTogXCJkcm9wem9uZSBjb2wtc20tNlwiIH0pfT5cclxuICAgICAgICA8aW5wdXQgey4uLmdldElucHV0UHJvcHMoKX0gLz5cclxuICAgICAgICA8cD5VcGxvYWRleiB2b3MgZmljaGllcnMgaWNpPC9wPlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtc20tNlwiPlxyXG4gICAgICAgIDxoNj5GaWNoaWVycyB1cGxvYWTDqWU8L2g2PlxyXG4gICAgICAgIDxwPntmaWxlc308L3A+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IEJhc2ljO1xyXG4iLCJpbXBvcnQgUmVhY3QsIHsgdXNlQ29udGV4dCwgdXNlRGVidWdWYWx1ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyB1c2VSZWYsIHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgTGluaywgdXNlTmF2aWdhdGUsIHVzZUxvY2F0aW9uIH0gZnJvbSBcInJlYWN0LXJvdXRlci1kb21cIjtcclxuaW1wb3J0IEFjY29yZGlvbiBmcm9tIFwicmVhY3QtYm9vdHN0cmFwL0FjY29yZGlvblwiO1xyXG5pbXBvcnQgdXNlQXV0aCBmcm9tIFwiLi4vLi4vLi4vaG9va3MvdXNlQXV0aFwiO1xyXG5pbXBvcnQgeyB1c2VQYXJhbXMgfSBmcm9tIFwicmVhY3Qtcm91dGVyLWRvbVwiO1xyXG5pbXBvcnQgYXhpb3MgZnJvbSBcImF4aW9zXCI7XHJcbmltcG9ydCBUYWJsZSBmcm9tIFwicmVhY3QtYm9vdHN0cmFwL1RhYmxlXCI7XHJcbmltcG9ydCB7IEZvbnRBd2Vzb21lSWNvbiB9IGZyb20gXCJAZm9ydGF3ZXNvbWUvcmVhY3QtZm9udGF3ZXNvbWVcIjtcclxuaW1wb3J0IHtcclxuICBmYVBsdXNDaXJjbGUsXHJcbiAgZmFDYW5jZWwsXHJcbiAgZmFFZGl0LFxyXG59IGZyb20gXCJAZm9ydGF3ZXNvbWUvZnJlZS1zb2xpZC1zdmctaWNvbnNcIjtcclxuaW1wb3J0IE1vZGFsSXRlbUZpY2hlIGZyb20gXCIuL01vZGFsSXRlbUZpY2hlXCI7XHJcbmNvbnN0IEZpY2hlID0gKCkgPT4ge1xyXG4gIGxldCBpZCA9IHVzZVBhcmFtcygpLmlkO1xyXG4gIGxldCBiYWNrZ3JvdW5kSW1hZ2UgPVxyXG4gICAgXCIuLi9pbWFnZXMvNWE5NGUzNGI0YzM2ZTI4ZGU0ZTcwNGY4YzJkMWMzOWE3OWU5MWI1ZC5wbmdcIjtcclxuICBjb25zdCBbYXV0aCwgc2V0QXV0aF0gPSB1c2VTdGF0ZSh1c2VBdXRoKCkpO1xyXG4gIGNvbnN0IFtpZFBhdGllbnQsIHNldElkUGF0aWVudF0gPSB1c2VTdGF0ZShpZCk7XHJcbiAgY29uc3QgbG9jYXRpb24gPSB1c2VMb2NhdGlvbigpO1xyXG4gIHZhciBmb3JtRGF0YSA9IG5ldyBGb3JtRGF0YSgpO1xyXG4gIGZvcm1EYXRhLmFwcGVuZChcImlkXCIsIGlkLnRvU3RyaW5nKCkpO1xyXG5cclxuICBjb25zdCBbaW5mb3JtYXRpb25QYXRpZW50LCBzZXRJbmZvcm1hdGlvbl0gPSB1c2VTdGF0ZShudWxsKTtcclxuICBjb25zdCBbaW5mb3JtYXRpb25UZW1wbGF0ZUJsb2NrLCBzZXRJbmZvcm1hdGlvblRlbXBsYXRlQmxvY2tdID1cclxuICAgIHVzZVN0YXRlKG51bGwpO1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgYXhpb3Moe1xyXG4gICAgICBtZXRob2Q6IFwicG9zdFwiLFxyXG4gICAgICB1cmw6IFwiL2FwaS9wYXRpZW50c0luZm9ybWF0aW9uQnlQYXRpZW50c1wiLFxyXG4gICAgICBkYXRhOiBmb3JtRGF0YSxcclxuICAgICAgaGVhZGVyczoge1xyXG4gICAgICAgIFwiQ29udGVudC1UeXBlXCI6IFwiYXBwbGljYXRpb24vanNvblwiLFxyXG4gICAgICAgIEF1dGhvcml6YXRpb246IGBCZWFyZXIgJHthdXRoLmF1dGguYWNjZXNzVG9rZW59YCxcclxuICAgICAgfSxcclxuICAgIH0pXHJcbiAgICAgIC50aGVuKGZ1bmN0aW9uIChyZXNwb25zZSkge1xyXG4gICAgICAgIHNldEluZm9ybWF0aW9uKHJlc3BvbnNlLmRhdGEpO1xyXG4gICAgICB9KVxyXG4gICAgICAuY2F0Y2goZnVuY3Rpb24gKHJlc3BvbnNlKSB7fSk7XHJcblxyXG4gICAgYXhpb3Moe1xyXG4gICAgICBtZXRob2Q6IFwiZ2V0XCIsXHJcbiAgICAgIHVybDogXCIvaW5mb3JtYXRpb24vdGVtcGxhdGUvZWxlbWVudFwiLFxyXG4gICAgICBkYXRhOiBmb3JtRGF0YSxcclxuICAgICAgaGVhZGVyczoge1xyXG4gICAgICAgIFwiQ29udGVudC1UeXBlXCI6IFwiYXBwbGljYXRpb24vanNvblwiLFxyXG4gICAgICAgIEF1dGhvcml6YXRpb246IGBCZWFyZXIgJHthdXRoLmF1dGguYWNjZXNzVG9rZW59YCxcclxuICAgICAgfSxcclxuICAgIH0pXHJcbiAgICAgIC50aGVuKGZ1bmN0aW9uIChyZXNwb25zZSkge1xyXG4gICAgICAgIHNldEluZm9ybWF0aW9uVGVtcGxhdGVCbG9jayhyZXNwb25zZS5kYXRhKTtcclxuICAgICAgfSlcclxuICAgICAgLmNhdGNoKGZ1bmN0aW9uIChyZXNwb25zZSkge30pO1xyXG4gIH0sIFtpZFBhdGllbnRdKTtcclxuICBjb25zb2xlLmxvZyhcImluZm9zXCIsIGluZm9ybWF0aW9uVGVtcGxhdGVCbG9jayk7XHJcbiAgcmV0dXJuIChcclxuICAgIDxzZWN0aW9uPlxyXG4gICAgICA8QWNjb3JkaW9uIGRlZmF1bHRBY3RpdmVLZXk9XCIwXCIgZmx1c2g9e3RydWV9IGNsYXNzTmFtZT1cImFjY29yZGlvbi1maWNoZVwiPlxyXG4gICAgICAgIDxBY2NvcmRpb24uSXRlbSBldmVudEtleT1cIjBcIj5cclxuICAgICAgICAgIDxBY2NvcmRpb24uSGVhZGVyPlN0YXR1dCBkZSBzdWl2aTwvQWNjb3JkaW9uLkhlYWRlcj5cclxuICAgICAgICAgIDxBY2NvcmRpb24uQm9keT5cclxuICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICA8aDY+XHJcbiAgICAgICAgICAgICAgICBTdGF0dXQgZGUgc3VpdmlcclxuICAgICAgICAgICAgICAgIDw+XHJcbiAgICAgICAgICAgICAgICAgIHsvKiB7aW5mb3JtYXRpb25UZW1wbGF0ZUJsb2NrLmZpbHRlcihcclxuICAgICAgICAgICAgICAgICAgICAoZSkgPT5cclxuICAgICAgICAgICAgICAgICAgICAgIGUuaXRlbD8uc3VnZT8ucGF0aFN0cmluZyA9PT1cclxuICAgICAgICAgICAgICAgICAgICAgIFwiL3BhdGllbnQvZmljaGUvc3RhdHV0LWR1LXN1aXZpXCJcclxuICAgICAgICAgICAgICAgICAgKSAmJiAoICovfVxyXG4gICAgICAgICAgICAgICAgICA8TW9kYWxJdGVtRmljaGVcclxuICAgICAgICAgICAgICAgICAgICBwcm9wcz17aW5mb3JtYXRpb25UZW1wbGF0ZUJsb2NrPy5maWx0ZXIoXHJcbiAgICAgICAgICAgICAgICAgICAgICAoZSkgPT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgZS5lbGVtZW50cz8ucGFyZW50U3VnZz8ucGF0aFN0cmluZyA9PT1cclxuICAgICAgICAgICAgICAgICAgICAgICAgXCIvcGF0aWVudC9maWNoZS9zdGF0dXQtZHUtc3VpdmlcIlxyXG4gICAgICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgIHsvKiApfSAqL31cclxuICAgICAgICAgICAgICAgIDwvPlxyXG4gICAgICAgICAgICAgIDwvaDY+XHJcbiAgICAgICAgICAgICAge2luZm9ybWF0aW9uUGF0aWVudD8ubWFwKChwYXRpZW50LCBpZCkgPT4gKFxyXG4gICAgICAgICAgICAgICAgPD5cclxuICAgICAgICAgICAgICAgICAge3BhdGllbnQgJiZcclxuICAgICAgICAgICAgICAgICAgICBwYXRpZW50Lml0ZWw/LnN1Z2U/LnBhdGhTdHJpbmcgPT09XHJcbiAgICAgICAgICAgICAgICAgICAgICBcIi9wYXRpZW50L2ZpY2hlL3N0YXR1dC1kdS1zdWl2aVwiICYmXHJcbiAgICAgICAgICAgICAgICAgICAgcGF0aWVudC5kZWxldGVkQXQgPT09IG51bGwgJiYgKFxyXG4gICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3dcIiBrZXk9e3BhdGllbnQuaWR9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1zbS00XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+e3BhdGllbnQuc3VnZz8udmFsdWV9PC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtc20tNFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxwPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge25ldyBEYXRlKHBhdGllbnQuc3RhcnQpLnRvTG9jYWxlU3RyaW5nKFwiZnItQkVcIiwge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRlU3R5bGU6IFwic2hvcnRcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge25ldyBEYXRlKHBhdGllbnQuZW5kKS50b0xvY2FsZVN0cmluZyhcImZyLUJFXCIsIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0ZVN0eWxlOiBcInNob3J0XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1zbS00XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsvKiBmYURlbGV0ZUxlZnQsIGZhRWRpdCAgKi99XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Rm9udEF3ZXNvbWVJY29uIGljb249e2ZhRWRpdH0gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZvbnRBd2Vzb21lSWNvbiBpY29uPXtmYUNhbmNlbH0gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgICAgPC8+XHJcbiAgICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJibG9jayBtdC00XCI+XHJcbiAgICAgICAgICAgICAgPGg2PlxyXG4gICAgICAgICAgICAgICAgRXF1aXBlc1xyXG4gICAgICAgICAgICAgICAgPE1vZGFsSXRlbUZpY2hlXHJcbiAgICAgICAgICAgICAgICAgIHByb3BzPXtpbmZvcm1hdGlvblRlbXBsYXRlQmxvY2s/LmZpbHRlcihcclxuICAgICAgICAgICAgICAgICAgICAoZSkgPT5cclxuICAgICAgICAgICAgICAgICAgICAgIGUuZWxlbWVudHM/LnBhcmVudFN1Z2c/LnBhdGhTdHJpbmcgPT09XHJcbiAgICAgICAgICAgICAgICAgICAgICBcIi9wYXRpZW50L3N1aXZpL2VxdWlwZXNcIlxyXG4gICAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICA8L2g2PlxyXG4gICAgICAgICAgICAgIHtpbmZvcm1hdGlvblBhdGllbnQ/Lm1hcCgocGF0aWVudCwgaWQpID0+IChcclxuICAgICAgICAgICAgICAgIDw+XHJcbiAgICAgICAgICAgICAgICAgIHtwYXRpZW50ICYmXHJcbiAgICAgICAgICAgICAgICAgICAgcGF0aWVudC5zdWdnPy5wYXJlbnRTdWdnLnBhdGhTdHJpbmcgPT09XHJcbiAgICAgICAgICAgICAgICAgICAgICBcIi9wYXRpZW50L3N1aXZpL2VxdWlwZXNcIiAmJlxyXG4gICAgICAgICAgICAgICAgICAgIHBhdGllbnQuZGVsZXRlZEF0ID09PSBudWxsICYmIChcclxuICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93XCIga2V5PXtwYXRpZW50LmlkfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtc20tNFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxwPntwYXRpZW50LnN1Z2cudmFsdWV9PC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtc20tNFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxwPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge25ldyBEYXRlKHBhdGllbnQuc3RhcnQpLnRvTG9jYWxlU3RyaW5nKFwiZnItQkVcIiwge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRlU3R5bGU6IFwic2hvcnRcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge25ldyBEYXRlKHBhdGllbnQuZW5kKS50b0xvY2FsZVN0cmluZyhcImZyLUJFXCIsIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0ZVN0eWxlOiBcInNob3J0XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1zbS00XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsvKiBmYURlbGV0ZUxlZnQsIGZhRWRpdCAgKi99XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Rm9udEF3ZXNvbWVJY29uIGljb249e2ZhRWRpdH0gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZvbnRBd2Vzb21lSWNvbiBpY29uPXtmYUNhbmNlbH0gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgICAgPC8+XHJcbiAgICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJsb2NrIG10LTRcIj5cclxuICAgICAgICAgICAgICA8aDY+XHJcbiAgICAgICAgICAgICAgICBQcm9ncmFtbWVcclxuICAgICAgICAgICAgICAgIDxNb2RhbEl0ZW1GaWNoZVxyXG4gICAgICAgICAgICAgICAgICBwcm9wcz17aW5mb3JtYXRpb25UZW1wbGF0ZUJsb2NrPy5maWx0ZXIoXHJcbiAgICAgICAgICAgICAgICAgICAgKGUpID0+XHJcbiAgICAgICAgICAgICAgICAgICAgICBlLmVsZW1lbnRzPy5wYXJlbnRTdWdnPy5wYXRoU3RyaW5nID09PVxyXG4gICAgICAgICAgICAgICAgICAgICAgXCIvcGF0aWVudC9zdWl2aS9wcm9ncmFtbWVcIlxyXG4gICAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICA8L2g2PlxyXG4gICAgICAgICAgICAgIHtpbmZvcm1hdGlvblBhdGllbnQ/Lm1hcCgocGF0aWVudCwgaWQpID0+IChcclxuICAgICAgICAgICAgICAgIDw+XHJcbiAgICAgICAgICAgICAgICAgIHtwYXRpZW50ICYmXHJcbiAgICAgICAgICAgICAgICAgICAgcGF0aWVudC5zdWdnPy5wYXJlbnRTdWdnLnBhdGhTdHJpbmcgPT09XHJcbiAgICAgICAgICAgICAgICAgICAgICBcIi9wYXRpZW50L3N1aXZpL3Byb2dyYW1tZVwiICYmXHJcbiAgICAgICAgICAgICAgICAgICAgcGF0aWVudC5kZWxldGVkQXQgPT09IG51bGwgJiYgKFxyXG4gICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3dcIiBrZXk9e3BhdGllbnQuaWR9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1zbS00XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+e3BhdGllbnQuc3VnZy52YWx1ZX08L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1zbS00XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7bmV3IERhdGUocGF0aWVudC5zdGFydCkudG9Mb2NhbGVTdHJpbmcoXCJmci1CRVwiLCB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGVTdHlsZTogXCJzaG9ydFwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAtXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7bmV3IERhdGUocGF0aWVudC5lbmQpLnRvTG9jYWxlU3RyaW5nKFwiZnItQkVcIiwge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRlU3R5bGU6IFwic2hvcnRcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLXNtLTRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgey8qIGZhRGVsZXRlTGVmdCwgZmFFZGl0ICAqL31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxGb250QXdlc29tZUljb24gaWNvbj17ZmFFZGl0fSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Rm9udEF3ZXNvbWVJY29uIGljb249e2ZhQ2FuY2VsfSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgICA8Lz5cclxuICAgICAgICAgICAgICApKX1cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYmxvY2sgbXQtNFwiPlxyXG4gICAgICAgICAgICAgIDxoNj5cclxuICAgICAgICAgICAgICAgIEFudGVubmV7XCIgXCJ9XHJcbiAgICAgICAgICAgICAgICA8TW9kYWxJdGVtRmljaGVcclxuICAgICAgICAgICAgICAgICAgcHJvcHM9e2luZm9ybWF0aW9uVGVtcGxhdGVCbG9jaz8uZmlsdGVyKFxyXG4gICAgICAgICAgICAgICAgICAgIChlKSA9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgZS5lbGVtZW50cz8ucGFyZW50U3VnZz8ucGF0aFN0cmluZyA9PT1cclxuICAgICAgICAgICAgICAgICAgICAgIFwiL3BhdGllbnQvc3VpdmkvYW50ZW5uZVwiXHJcbiAgICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgIDwvaDY+XHJcbiAgICAgICAgICAgICAge2luZm9ybWF0aW9uUGF0aWVudD8ubWFwKChwYXRpZW50LCBpZCkgPT4gKFxyXG4gICAgICAgICAgICAgICAgPD5cclxuICAgICAgICAgICAgICAgICAge3BhdGllbnQgJiZcclxuICAgICAgICAgICAgICAgICAgICBwYXRpZW50LnN1Z2c/LnBhcmVudFN1Z2cucGF0aFN0cmluZyA9PT1cclxuICAgICAgICAgICAgICAgICAgICAgIFwiL3BhdGllbnQvc3VpdmkvYW50ZW5uZVwiICYmXHJcbiAgICAgICAgICAgICAgICAgICAgcGF0aWVudC5kZWxldGVkQXQgPT09IG51bGwgJiYgKFxyXG4gICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3dcIiBrZXk9e3BhdGllbnQuaWR9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1zbS00XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+e3BhdGllbnQuc3VnZy52YWx1ZX08L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1zbS00XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7bmV3IERhdGUocGF0aWVudC5zdGFydCkudG9Mb2NhbGVTdHJpbmcoXCJmci1CRVwiLCB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGVTdHlsZTogXCJzaG9ydFwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAtXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7bmV3IERhdGUocGF0aWVudC5lbmQpLnRvTG9jYWxlU3RyaW5nKFwiZnItQkVcIiwge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRlU3R5bGU6IFwic2hvcnRcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLXNtLTRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgey8qIGZhRGVsZXRlTGVmdCwgZmFFZGl0ICAqL31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxGb250QXdlc29tZUljb24gaWNvbj17ZmFFZGl0fSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Rm9udEF3ZXNvbWVJY29uIGljb249e2ZhQ2FuY2VsfSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgICA8Lz5cclxuICAgICAgICAgICAgICApKX1cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L0FjY29yZGlvbi5Cb2R5PlxyXG4gICAgICAgIDwvQWNjb3JkaW9uLkl0ZW0+XHJcbiAgICAgICAgPEFjY29yZGlvbi5JdGVtIGV2ZW50S2V5PVwiMVwiPlxyXG4gICAgICAgICAgPEFjY29yZGlvbi5IZWFkZXI+SW5mb3JtYXRpb24gZ8OpbsOpcmFsZTwvQWNjb3JkaW9uLkhlYWRlcj5cclxuICAgICAgICAgIDxBY2NvcmRpb24uQm9keT5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJibG9ja1wiPlxyXG4gICAgICAgICAgICAgIHtpbmZvcm1hdGlvblBhdGllbnQ/Lm1hcCgocGF0aWVudCwgaWQpID0+IChcclxuICAgICAgICAgICAgICAgIDw+XHJcbiAgICAgICAgICAgICAgICAgIHtwYXRpZW50ICYmXHJcbiAgICAgICAgICAgICAgICAgICAgcGF0aWVudC5zdWdnPy5wYXJlbnRTdWdnLnBhcmVudFN1Z2cucGF0aFN0cmluZyA9PT1cclxuICAgICAgICAgICAgICAgICAgICAgIFwiL3BhdGllbnQvZmljaGUvaW5mb3JtYXRpb24tZ2VuZXJhbGVcIiAmJlxyXG4gICAgICAgICAgICAgICAgICAgIHBhdGllbnQuZGVsZXRlZEF0ID09PSBudWxsICYmIChcclxuICAgICAgICAgICAgICAgICAgICAgIDxkaXYga2V5PXtwYXRpZW50LmlkfSBjbGFzc05hbWU9XCJyb3dcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtc20tMlwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxoNj57cGF0aWVudC5zdWdnLnBhcmVudFN1Z2cudmFsdWV9PC9oNj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLXNtLTJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8cD57cGF0aWVudC5zdWdnLnZhbHVlfTwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLXNtLTRcIj57cGF0aWVudC5jb21tZW50Q29sdW1ufTwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1zbS0yXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsvKiBmYURlbGV0ZUxlZnQsIGZhRWRpdCAgKi99XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Rm9udEF3ZXNvbWVJY29uIGljb249e2ZhRWRpdH0gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZvbnRBd2Vzb21lSWNvbiBpY29uPXtmYUNhbmNlbH0gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLXNtLTJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8TW9kYWxJdGVtRmljaGVcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImYtcmlnaHRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3sgZmxvYXQ6IFwicmlnaHRcIiB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJvcHM9e2luZm9ybWF0aW9uVGVtcGxhdGVCbG9jaz8uZmlsdGVyKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAoZSkgPT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlLmVsZW1lbnRzPy5wYXJlbnRTdWdnPy5wYXRoU3RyaW5nID09PVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhdGllbnQ/LnN1Z2c/LnBhcmVudFN1Z2c/LnBhdGhTdHJpbmdcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgICAgPC8+XHJcbiAgICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9BY2NvcmRpb24uQm9keT5cclxuICAgICAgICA8L0FjY29yZGlvbi5JdGVtPlxyXG4gICAgICAgIDxBY2NvcmRpb24uSXRlbSBldmVudEtleT1cIjJcIj5cclxuICAgICAgICAgIDxBY2NvcmRpb24uSGVhZGVyPkRlc2NyaXB0aW9uPC9BY2NvcmRpb24uSGVhZGVyPlxyXG4gICAgICAgICAgPEFjY29yZGlvbi5Cb2R5PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJsb2NrXCI+XHJcbiAgICAgICAgICAgICAge2luZm9ybWF0aW9uUGF0aWVudD8ubWFwKChwYXRpZW50LCBpZCkgPT4gKFxyXG4gICAgICAgICAgICAgICAgPD5cclxuICAgICAgICAgICAgICAgICAge3BhdGllbnQgJiZcclxuICAgICAgICAgICAgICAgICAgICBwYXRpZW50Lml0ZWw/Lml0Yms/LnN1Z2I/LnBhdGhTdHJpbmcgPT09XHJcbiAgICAgICAgICAgICAgICAgICAgICBcIi9wYXRpZW50L2ZpY2hlL2Rlc2NyaXB0aW9uXCIgJiZcclxuICAgICAgICAgICAgICAgICAgICBwYXRpZW50LmRlbGV0ZWRBdCA9PT0gbnVsbCAmJiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGtleT17cGF0aWVudC5pZH0gY2xhc3NOYW1lPVwicm93XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLXNtLTRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8aDY+e3BhdGllbnQudmFsdWV9PC9oNj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLXNtLTRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8cD57cGF0aWVudC5jb21tZW50fTwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLXNtLTRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIHN0eWxlPXt7IGZsb2F0OiBcInJpZ2h0XCIgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Rm9udEF3ZXNvbWVJY29uIGljb249e2ZhUGx1c0NpcmNsZX0gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgICAgPC8+XHJcbiAgICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9BY2NvcmRpb24uQm9keT5cclxuICAgICAgICA8L0FjY29yZGlvbi5JdGVtPlxyXG4gICAgICAgIDxBY2NvcmRpb24uSXRlbSBldmVudEtleT1cIjNcIj5cclxuICAgICAgICAgIDxBY2NvcmRpb24uSGVhZGVyPlJlc3NvdXJjZXMgcGVyc29ubmVsbGVzPC9BY2NvcmRpb24uSGVhZGVyPlxyXG4gICAgICAgICAgPEFjY29yZGlvbi5Cb2R5PlxyXG4gICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgIDxoNj5cclxuICAgICAgICAgICAgICAgIExhbmd1ZXNcclxuICAgICAgICAgICAgICAgIDxidXR0b24+XHJcbiAgICAgICAgICAgICAgICAgIHtcIiBcIn1cclxuICAgICAgICAgICAgICAgICAgPEZvbnRBd2Vzb21lSWNvbiBpY29uPXtmYVBsdXNDaXJjbGV9IC8+XHJcbiAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICA8L2g2PlxyXG4gICAgICAgICAgICAgIHtpbmZvcm1hdGlvblBhdGllbnQ/Lm1hcCgocGF0aWVudCwgaWQpID0+IChcclxuICAgICAgICAgICAgICAgIDw+XHJcbiAgICAgICAgICAgICAgICAgIHtwYXRpZW50ICYmXHJcbiAgICAgICAgICAgICAgICAgICAgcGF0aWVudCAmJlxyXG4gICAgICAgICAgICAgICAgICAgIHBhdGllbnQgJiZcclxuICAgICAgICAgICAgICAgICAgICBwYXRpZW50LnN1Z2c/LnBhcmVudFN1Z2c/LnBhdGhTdHJpbmcgPT09XHJcbiAgICAgICAgICAgICAgICAgICAgICBcIi9wYXRpZW50L2ZpY2hlL3Jlc3NvdXJjZXMtcGVyc29ubmVsbGVzL2xhbmd1ZXNcIiAmJiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGtleT17cGF0aWVudC5pZH0gY2xhc3NOYW1lPVwicm93XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHsvKiA8ZGl2IGNsYXNzTmFtZT1cImNvbC1zbS00XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgey8qIDxwPntwYXRpZW50LnZhbGV1clBhcmVudH08L3A+IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj4gKi99XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLXNtLTRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8cD57cGF0aWVudC5zdWdnPy52YWx1ZX08L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1zbS00XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+e3BhdGllbnQuY29tbWVudH08L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICAgIDwvPlxyXG4gICAgICAgICAgICAgICkpfVxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICA8aDY+XHJcbiAgICAgICAgICAgICAgICBUYWxlbnRzIGV0IGNlbnRyZXMgZCdpbnTDqXLDqnRcclxuICAgICAgICAgICAgICAgIDxidXR0b24+XHJcbiAgICAgICAgICAgICAgICAgIHtcIiBcIn1cclxuICAgICAgICAgICAgICAgICAgPEZvbnRBd2Vzb21lSWNvbiBpY29uPXtmYVBsdXNDaXJjbGV9IC8+XHJcbiAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICA8L2g2PlxyXG4gICAgICAgICAgICAgIHtpbmZvcm1hdGlvblBhdGllbnQ/Lm1hcCgocGF0aWVudCwgaWQpID0+IChcclxuICAgICAgICAgICAgICAgIDw+XHJcbiAgICAgICAgICAgICAgICAgIHtwYXRpZW50ICYmXHJcbiAgICAgICAgICAgICAgICAgICAgcGF0aWVudC5zdWdnPy5wYXJlbnRTdWdnPy5wYXRoU3RyaW5nID09PVxyXG4gICAgICAgICAgICAgICAgICAgICAgXCIvcGF0aWVudC9maWNoZS9yZXNzb3VyY2VzLXBlcnNvbm5lbGxlcy90YWxlbnRzLWV0LWNlbnRyZXMtZC1pbnRlcmV0XCIgJiYgKFxyXG4gICAgICAgICAgICAgICAgICAgICAgPGRpdiBrZXk9e3BhdGllbnQuaWR9IGNsYXNzTmFtZT1cInJvd1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7LyogPGRpdiBjbGFzc05hbWU9XCJjb2wtc20tNFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHsvKiA8cD57cGF0aWVudC52YWxldXJQYXJlbnR9PC9wPiBcclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+ICovfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1zbS00XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+e3BhdGllbnQuc3VnZy52YWx1ZX08L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1zbS00XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+e3BhdGllbnQuY29tbWVudH08L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICAgIDwvPlxyXG4gICAgICAgICAgICAgICkpfVxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICA8aDY+XHJcbiAgICAgICAgICAgICAgICBSw6p2ZXNcclxuICAgICAgICAgICAgICAgIDxidXR0b24+XHJcbiAgICAgICAgICAgICAgICAgIDxGb250QXdlc29tZUljb24gaWNvbj17ZmFQbHVzQ2lyY2xlfSAvPlxyXG4gICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgPC9oNj5cclxuICAgICAgICAgICAgICB7aW5mb3JtYXRpb25QYXRpZW50Py5tYXAoKHBhdGllbnQsIGlkKSA9PiAoXHJcbiAgICAgICAgICAgICAgICA8PlxyXG4gICAgICAgICAgICAgICAgICB7cGF0aWVudCAmJlxyXG4gICAgICAgICAgICAgICAgICAgIHBhdGllbnQuc3VnZz8ucGFyZW50U3VnZz8ucGF0aFN0cmluZyA9PT1cclxuICAgICAgICAgICAgICAgICAgICAgIFwiL3BhdGllbnQvZmljaGUvcmVzc291cmNlcy1wZXJzb25uZWxsZXMvcmV2ZXNcIiAmJiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGtleT17cGF0aWVudC5pZH0gY2xhc3NOYW1lPVwicm93XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHsvKiA8ZGl2IGNsYXNzTmFtZT1cImNvbC1zbS00XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgey8qIDxwPntwYXRpZW50LnZhbGV1clBhcmVudH08L3A+IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj4gKi99XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLXNtLTRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8cD57cGF0aWVudC5zdWdnLnZhbHVlfTwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLXNtLTRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8cD57cGF0aWVudC5jb21tZW50fTwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgICAgPC8+XHJcbiAgICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgIDxoNj5cclxuICAgICAgICAgICAgICAgIEdvw7t0cyBjdWxpbmFpcmVzXHJcbiAgICAgICAgICAgICAgICA8YnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICA8Rm9udEF3ZXNvbWVJY29uIGljb249e2ZhUGx1c0NpcmNsZX0gLz5cclxuICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgIDwvaDY+XHJcbiAgICAgICAgICAgICAge2luZm9ybWF0aW9uUGF0aWVudD8ubWFwKChwYXRpZW50LCBpZCkgPT4gKFxyXG4gICAgICAgICAgICAgICAgPD5cclxuICAgICAgICAgICAgICAgICAge3BhdGllbnQgJiZcclxuICAgICAgICAgICAgICAgICAgICBwYXRpZW50LnN1Z2c/LnBhcmVudFN1Z2c/LnBhdGhTdHJpbmcgPT09XHJcbiAgICAgICAgICAgICAgICAgICAgICBcIi9wYXRpZW50L2ZpY2hlL3Jlc3NvdXJjZXMtcGVyc29ubmVsbGVzL2dvdXRzLWN1bGluYWlyZXNcIiAmJiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGtleT17cGF0aWVudC5pZH0gY2xhc3NOYW1lPVwicm93XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHsvKiA8ZGl2IGNsYXNzTmFtZT1cImNvbC1zbS00XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgey8qIDxwPntwYXRpZW50LnZhbGV1clBhcmVudH08L3A+IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj4gKi99XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLXNtLTRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8cD57cGF0aWVudC5zdWdnLnZhbHVlfTwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLXNtLTRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8cD57cGF0aWVudC5jb21tZW50fTwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgICAgPC8+XHJcbiAgICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9BY2NvcmRpb24uQm9keT5cclxuICAgICAgICA8L0FjY29yZGlvbi5JdGVtPlxyXG4gICAgICAgIDxBY2NvcmRpb24uSXRlbSBldmVudEtleT1cIjRcIj5cclxuICAgICAgICAgIDxBY2NvcmRpb24uSGVhZGVyPlJlc3NvdXJjZXMgZmluYW5jacOocmVzPC9BY2NvcmRpb24uSGVhZGVyPlxyXG4gICAgICAgICAgPEFjY29yZGlvbi5Cb2R5PlxyXG4gICAgICAgICAgICB7aW5mb3JtYXRpb25QYXRpZW50Py5tYXAoKHBhdGllbnQsIGlkKSA9PiAoXHJcbiAgICAgICAgICAgICAgPD5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYmxvY2tcIj5cclxuICAgICAgICAgICAgICAgICAge3BhdGllbnQgJiZcclxuICAgICAgICAgICAgICAgICAgICBwYXRpZW50Py5zdWdnPy5wYXJlbnRTdWdnPy5wYXJlbnRTdWdnPy5wYXRoU3RyaW5nID09PVxyXG4gICAgICAgICAgICAgICAgICAgICAgXCIvcGF0aWVudC9maWNoZS9yZXNzb3VyY2VzLWZpbmFuY2llcmVzXCIgJiZcclxuICAgICAgICAgICAgICAgICAgICBwYXRpZW50Py5kZWxldGVkQXQgPT09IG51bGwgJiYgKFxyXG4gICAgICAgICAgICAgICAgICAgICAgPGRpdiBrZXk9e3BhdGllbnQuaWR9IGNsYXNzTmFtZT1cInJvd1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1zbS00XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGg2PntwYXRpZW50LnN1Z2cucGFyZW50U3VnZy52YWx1ZX08L2g2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtc20tNFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxwPntwYXRpZW50LnN1Z2cudmFsdWV9PC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8Lz5cclxuICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgICA8L0FjY29yZGlvbi5Cb2R5PlxyXG4gICAgICAgIDwvQWNjb3JkaW9uLkl0ZW0+XHJcbiAgICAgICAgPEFjY29yZGlvbi5JdGVtIGV2ZW50S2V5PVwiNVwiPlxyXG4gICAgICAgICAgPEFjY29yZGlvbi5IZWFkZXI+QWNjw6hzIGF1eCBzb2luczwvQWNjb3JkaW9uLkhlYWRlcj5cclxuICAgICAgICAgIDxBY2NvcmRpb24uQm9keT5cclxuICAgICAgICAgICAge2luZm9ybWF0aW9uUGF0aWVudD8ubWFwKChwYXRpZW50LCBpZCkgPT4gKFxyXG4gICAgICAgICAgICAgIDw+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJsb2NrXCI+XHJcbiAgICAgICAgICAgICAgICAgIHtwYXRpZW50ICYmXHJcbiAgICAgICAgICAgICAgICAgICAgcGF0aWVudD8uc3VnZz8ucGFyZW50U3VnZz8ucGFyZW50U3VnZz8ucGF0aFN0cmluZyA9PT1cclxuICAgICAgICAgICAgICAgICAgICAgIFwiL3BhdGllbnQvZmljaGUvYWNjZXMtYXV4LXNvaW5zXCIgJiZcclxuICAgICAgICAgICAgICAgICAgICBwYXRpZW50Py5kZWxldGVkQXQgPT09IG51bGwgJiYgKFxyXG4gICAgICAgICAgICAgICAgICAgICAgPGRpdiBrZXk9e3BhdGllbnQuaWR9IGNsYXNzTmFtZT1cInJvd1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1zbS00XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGg2PntwYXRpZW50LnN1Z2cucGFyZW50U3VnZy52YWx1ZX08L2g2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtc20tNFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxwPntwYXRpZW50LnN1Z2cudmFsdWV9PC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8Lz5cclxuICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgICA8L0FjY29yZGlvbi5Cb2R5PlxyXG4gICAgICAgIDwvQWNjb3JkaW9uLkl0ZW0+XHJcbiAgICAgICAgPEFjY29yZGlvbi5JdGVtIGV2ZW50S2V5PVwiNlwiPlxyXG4gICAgICAgICAgPEFjY29yZGlvbi5IZWFkZXI+U2FudMOpIHBoeXNpcXVlPC9BY2NvcmRpb24uSGVhZGVyPlxyXG4gICAgICAgICAgPEFjY29yZGlvbi5Cb2R5PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm10LTRcIj5cclxuICAgICAgICAgICAgICA8aDY+XHJcbiAgICAgICAgICAgICAgICBQYXRob2xvZ2llcyBwaHlzaXF1ZXMgY2hyb25pcXVlc1xyXG4gICAgICAgICAgICAgICAgPGJ1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgPEZvbnRBd2Vzb21lSWNvbiBpY29uPXtmYVBsdXNDaXJjbGV9IC8+XHJcbiAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICA8L2g2PlxyXG4gICAgICAgICAgICAgIHtpbmZvcm1hdGlvblBhdGllbnQ/Lm1hcCgocGF0aWVudCwgaWQpID0+IChcclxuICAgICAgICAgICAgICAgIDw+XHJcbiAgICAgICAgICAgICAgICAgIHtwYXRpZW50ICYmXHJcbiAgICAgICAgICAgICAgICAgICAgcGF0aWVudC5zdWdnPy5wYXJlbnRTdWdnPy5wYXRoU3RyaW5nID09PVxyXG4gICAgICAgICAgICAgICAgICAgICAgXCIvcGF0aWVudC9tZWRpY2FsL3BhdGhvbG9naWVzL3BhdGhvbG9naWVzLXBoeXNpcXVlcy1jaHJvbmlxdWVzXCIgJiYgKFxyXG4gICAgICAgICAgICAgICAgICAgICAgPGRpdiBrZXk9e3BhdGllbnQuaWR9IGNsYXNzTmFtZT1cInJvd1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7LyogPGRpdiBjbGFzc05hbWU9XCJjb2wtc20tNFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHsvKiA8cD57cGF0aWVudC52YWxldXJQYXJlbnR9PC9wPiBcclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+ICovfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1zbS00XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+e3BhdGllbnQuc3VnZy52YWx1ZX08L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1zbS00XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+e3BhdGllbnQuY29tbWVudH08L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICAgIDwvPlxyXG4gICAgICAgICAgICAgICkpfVxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibXQtNFwiPlxyXG4gICAgICAgICAgICAgIDxoNj5cclxuICAgICAgICAgICAgICAgIEVwaXNvZGVzIGRlIG1hbGFkaWVcclxuICAgICAgICAgICAgICAgIHsvKiAvcGF0aWVudC9tZWRpY2FsL2VwaXNvZGVzLWRlLW1hbGFkaWUgKi99XHJcbiAgICAgICAgICAgICAgICA8YnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICA8Rm9udEF3ZXNvbWVJY29uIGljb249e2ZhUGx1c0NpcmNsZX0gLz5cclxuICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgIDwvaDY+XHJcbiAgICAgICAgICAgICAge2luZm9ybWF0aW9uUGF0aWVudD8ubWFwKChwYXRpZW50LCBpZCkgPT4gKFxyXG4gICAgICAgICAgICAgICAgPD5cclxuICAgICAgICAgICAgICAgICAge3BhdGllbnQgJiZcclxuICAgICAgICAgICAgICAgICAgICBwYXRpZW50LnN1Z2c/LnBhcmVudFN1Z2c/LnBhdGhTdHJpbmcgPT09XHJcbiAgICAgICAgICAgICAgICAgICAgICBcIi9wYXRpZW50L21lZGljYWwvZXBpc29kZXMtZGUtbWFsYWRpZVwiICYmIChcclxuICAgICAgICAgICAgICAgICAgICAgIDxkaXYga2V5PXtwYXRpZW50LmlkfSBjbGFzc05hbWU9XCJyb3dcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgey8qIDxkaXYgY2xhc3NOYW1lPVwiY29sLXNtLTRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICB7LyogPHA+e3BhdGllbnQudmFsZXVyUGFyZW50fTwvcD4gXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PiAqL31cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtc20tNFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxwPntwYXRpZW50LnN1Z2cudmFsdWV9PC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtc20tNFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxwPntwYXRpZW50LmNvbW1lbnR9PC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgICA8Lz5cclxuICAgICAgICAgICAgICApKX1cclxuICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm10LTRcIj5cclxuICAgICAgICAgICAgICA8aDY+XHJcbiAgICAgICAgICAgICAgICBBbGxlcmdpZXNcclxuICAgICAgICAgICAgICAgIDxidXR0b24+XHJcbiAgICAgICAgICAgICAgICAgIDxGb250QXdlc29tZUljb24gaWNvbj17ZmFQbHVzQ2lyY2xlfSAvPlxyXG4gICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgPC9oNj5cclxuICAgICAgICAgICAgICB7aW5mb3JtYXRpb25QYXRpZW50Py5tYXAoKHBhdGllbnQsIGlkKSA9PiAoXHJcbiAgICAgICAgICAgICAgICA8PlxyXG4gICAgICAgICAgICAgICAgICB7cGF0aWVudCAmJlxyXG4gICAgICAgICAgICAgICAgICAgIHBhdGllbnQgJiZcclxuICAgICAgICAgICAgICAgICAgICBwYXRpZW50ICYmXHJcbiAgICAgICAgICAgICAgICAgICAgcGF0aWVudC5zdWdnPy5wYXJlbnRTdWdnPy5wYXRoU3RyaW5nID09PVxyXG4gICAgICAgICAgICAgICAgICAgICAgXCIvcGF0aWVudC9tZWRpY2FsL2FsbGVyZ2llc1wiICYmIChcclxuICAgICAgICAgICAgICAgICAgICAgIDxkaXYga2V5PXtwYXRpZW50LmlkfSBjbGFzc05hbWU9XCJyb3dcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgey8qIDxkaXYgY2xhc3NOYW1lPVwiY29sLXNtLTRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICB7LyogPHA+e3BhdGllbnQudmFsZXVyUGFyZW50fTwvcD4gXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PiAqL31cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtc20tNFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxwPntwYXRpZW50LnN1Z2cudmFsdWV9PC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtc20tNFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxwPntwYXRpZW50LmNvbW1lbnR9PC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgICA8Lz5cclxuICAgICAgICAgICAgICApKX1cclxuICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm10LTRcIj5cclxuICAgICAgICAgICAgICA8aDY+XHJcbiAgICAgICAgICAgICAgICBQYXJhbcOodHJlc1xyXG4gICAgICAgICAgICAgICAgPGJ1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgPEZvbnRBd2Vzb21lSWNvbiBpY29uPXtmYVBsdXNDaXJjbGV9IC8+XHJcbiAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICA8L2g2PlxyXG4gICAgICAgICAgICAgIHtpbmZvcm1hdGlvblBhdGllbnQ/Lm1hcCgocGF0aWVudCwgaWQpID0+IChcclxuICAgICAgICAgICAgICAgIDw+XHJcbiAgICAgICAgICAgICAgICAgIHtwYXRpZW50ICYmXHJcbiAgICAgICAgICAgICAgICAgICAgcGF0aWVudC5zdWdnPy5wYXJlbnRTdWdnPy5wYXRoU3RyaW5nID09PVxyXG4gICAgICAgICAgICAgICAgICAgICAgXCIvcGF0aWVudC9tZWRpY2FsL3BhcmFtZXRyZXNcIiAmJiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGtleT17cGF0aWVudC5pZH0gY2xhc3NOYW1lPVwicm93XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHsvKiA8ZGl2IGNsYXNzTmFtZT1cImNvbC1zbS00XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxwPntwYXRpZW50LnZhbGV1clBhcmVudH08L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj4gKi99XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLXNtLTRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8cD57cGF0aWVudC5wYXJlbnR9PC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtc20tNFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxwPntwYXRpZW50LmNvbW1lbnRDb2x1bW59PC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgICA8Lz5cclxuICAgICAgICAgICAgICApKX1cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L0FjY29yZGlvbi5Cb2R5PlxyXG4gICAgICAgIDwvQWNjb3JkaW9uLkl0ZW0+XHJcbiAgICAgICAgPEFjY29yZGlvbi5JdGVtIGV2ZW50S2V5PVwiN1wiPlxyXG4gICAgICAgICAgPEFjY29yZGlvbi5IZWFkZXI+UGF0aG9sb2dpZSBtZW50YWxlPC9BY2NvcmRpb24uSGVhZGVyPlxyXG4gICAgICAgICAgPEFjY29yZGlvbi5Cb2R5PlxyXG4gICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgIDxoNj5cclxuICAgICAgICAgICAgICAgIFN1cHBvc8OpZVxyXG4gICAgICAgICAgICAgICAgPGJ1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgPEZvbnRBd2Vzb21lSWNvbiBpY29uPXtmYVBsdXNDaXJjbGV9IC8+XHJcbiAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICA8L2g2PlxyXG4gICAgICAgICAgICAgIHtpbmZvcm1hdGlvblBhdGllbnQ/Lm1hcCgocGF0aWVudCwgaWQpID0+IChcclxuICAgICAgICAgICAgICAgIDw+XHJcbiAgICAgICAgICAgICAgICAgIHtwYXRpZW50ICYmXHJcbiAgICAgICAgICAgICAgICAgICAgcGF0aWVudD8uaXRlbD8uc3VnZT8ucGF0aFN0cmluZyAmJlxyXG4gICAgICAgICAgICAgICAgICAgIHBhdGllbnQ/Lml0ZWw/LnN1Z2U/LnBhdGhTdHJpbmcgPT09XHJcbiAgICAgICAgICAgICAgICAgICAgICBcIi9wYXRpZW50L2ZpY2hlL3BhdGhvbG9naWUtbWVudGFsZS9zdXBwb3NlZVwiICYmXHJcbiAgICAgICAgICAgICAgICAgICAgcGF0aWVudD8uZGVsZXRlZEF0ID09PSBudWxsICYmIChcclxuICAgICAgICAgICAgICAgICAgICAgIDxkaXYga2V5PXtwYXRpZW50LmlkfSBjbGFzc05hbWU9XCJyb3dcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtc20tNFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxwPntwYXRpZW50LnZhbGV1clBhcmVudH08L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1zbS00XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+e3BhdGllbnQucGFyZW50fTwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgICAgPC8+XHJcbiAgICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgIDxoNj5cclxuICAgICAgICAgICAgICAgIERlY2xhcsOpZVxyXG4gICAgICAgICAgICAgICAgPGJ1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgPEZvbnRBd2Vzb21lSWNvbiBpY29uPXtmYVBsdXNDaXJjbGV9IC8+XHJcbiAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICA8L2g2PlxyXG4gICAgICAgICAgICAgIHtpbmZvcm1hdGlvblBhdGllbnQ/Lm1hcCgocGF0aWVudCwgaWQpID0+IChcclxuICAgICAgICAgICAgICAgIDw+XHJcbiAgICAgICAgICAgICAgICAgIHtwYXRpZW50ICYmXHJcbiAgICAgICAgICAgICAgICAgICAgcGF0aWVudD8uaXRlbD8uc3VnZT8ucGF0aFN0cmluZyAmJlxyXG4gICAgICAgICAgICAgICAgICAgIHBhdGllbnQ/Lml0ZWw/LnN1Z2U/LnBhdGhTdHJpbmcgPT09XHJcbiAgICAgICAgICAgICAgICAgICAgICBcIi9wYXRpZW50L2ZpY2hlL3BhdGhvbG9naWUtbWVudGFsZS9kZWNsYXJlZVwiICYmXHJcbiAgICAgICAgICAgICAgICAgICAgcGF0aWVudD8uZGVsZXRlZEF0ID09PSBudWxsICYmIChcclxuICAgICAgICAgICAgICAgICAgICAgIDxkaXYga2V5PXtwYXRpZW50LmlkfSBjbGFzc05hbWU9XCJyb3dcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtc20tNFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxwPntwYXRpZW50LnZhbGV1clBhcmVudH08L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1zbS00XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+e3BhdGllbnQucGFyZW50fTwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgICAgPC8+XHJcbiAgICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9BY2NvcmRpb24uQm9keT5cclxuICAgICAgICA8L0FjY29yZGlvbi5JdGVtPlxyXG4gICAgICAgIDxBY2NvcmRpb24uSXRlbSBldmVudEtleT1cIjhcIj5cclxuICAgICAgICAgIDxBY2NvcmRpb24uSGVhZGVyPkFzc3XDqXR1ZGU8L0FjY29yZGlvbi5IZWFkZXI+XHJcbiAgICAgICAgICA8QWNjb3JkaW9uLkJvZHk+XHJcbiAgICAgICAgICAgIDxoNj5cclxuICAgICAgICAgICAgICBTdXBwb3PDqWVcclxuICAgICAgICAgICAgICA8YnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgPEZvbnRBd2Vzb21lSWNvbiBpY29uPXtmYVBsdXNDaXJjbGV9IC8+XHJcbiAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgIDwvaDY+XHJcbiAgICAgICAgICAgIHtpbmZvcm1hdGlvblBhdGllbnQ/Lm1hcCgocGF0aWVudCwgaWQpID0+IChcclxuICAgICAgICAgICAgICA8PlxyXG4gICAgICAgICAgICAgICAge3BhdGllbnQgJiZcclxuICAgICAgICAgICAgICAgICAgcGF0aWVudD8uaXRlbD8uc3VnZT8ucGF0aFN0cmluZyAmJlxyXG4gICAgICAgICAgICAgICAgICBwYXRpZW50Py5pdGVsPy5zdWdlPy5wYXRoU3RyaW5nID09PVxyXG4gICAgICAgICAgICAgICAgICAgIFwiL3BhdGllbnQvZmljaGUvYXNzdWV0dWRlL3N1cHBvc2VlXCIgJiZcclxuICAgICAgICAgICAgICAgICAgcGF0aWVudD8uZGVsZXRlZEF0ID09PSBudWxsICYmIChcclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGtleT17cGF0aWVudC5pZH0gY2xhc3NOYW1lPVwicm93IG10LTRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgIHsvKiA8ZGl2IGNsYXNzTmFtZT1cImNvbC1zbS00XCI+PC9kaXY+ICovfVxyXG4gICAgICAgICAgICAgICAgICAgICAgey8qIDxwPntwYXRpZW50LnBhcmVudH08L3A+ICovfVxyXG4gICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtc20tMlwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aDY+e3BhdGllbnQ/LnN1Z2cudmFsdWV9PC9oNj5cclxuICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtc20tNlwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8cD57cGF0aWVudD8uY29tbWVudH08L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLXNtLTRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgey8qIDxwPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHtcIiBcIn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8Rm9udEF3ZXNvbWVJY29uIGljb249e2ZhUGx1c0NpcmNsZX0gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9wPiAqL31cclxuICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgIDwvPlxyXG4gICAgICAgICAgICApKX1cclxuICAgICAgICAgICAgPGg2PlxyXG4gICAgICAgICAgICAgIETDqWNsYXLDqWVcclxuICAgICAgICAgICAgICA8YnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgPEZvbnRBd2Vzb21lSWNvbiBpY29uPXtmYVBsdXNDaXJjbGV9IC8+XHJcbiAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgIDwvaDY+XHJcbiAgICAgICAgICAgIHtpbmZvcm1hdGlvblBhdGllbnQ/Lm1hcCgocGF0aWVudCwgaWQpID0+IChcclxuICAgICAgICAgICAgICA8PlxyXG4gICAgICAgICAgICAgICAge3BhdGllbnQgJiZcclxuICAgICAgICAgICAgICAgICAgcGF0aWVudD8uaXRlbD8uc3VnZT8ucGF0aFN0cmluZyAmJlxyXG4gICAgICAgICAgICAgICAgICBwYXRpZW50Py5pdGVsPy5zdWdlPy5wYXRoU3RyaW5nID09PVxyXG4gICAgICAgICAgICAgICAgICAgIFwiL3BhdGllbnQvZmljaGUvYXNzdWV0dWRlL2RlY2xhcmVlXCIgJiZcclxuICAgICAgICAgICAgICAgICAgcGF0aWVudD8uZGVsZXRlZEF0ID09PSBudWxsICYmIChcclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGtleT17cGF0aWVudC5pZH0gY2xhc3NOYW1lPVwicm93IG10LTRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLXNtLTJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGg2PntwYXRpZW50Py5zdWdnLnZhbHVlfTwvaDY+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLXNtLTZcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHA+e3BhdGllbnQ/LmNvbW1lbnR9PC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1zbS00XCI+PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgPC8+XHJcbiAgICAgICAgICAgICkpfVxyXG4gICAgICAgICAgPC9BY2NvcmRpb24uQm9keT5cclxuICAgICAgICA8L0FjY29yZGlvbi5JdGVtPlxyXG4gICAgICAgIDxBY2NvcmRpb24uSXRlbSBldmVudEtleT1cIjlcIj5cclxuICAgICAgICAgIDxBY2NvcmRpb24uSGVhZGVyPlRyYWl0ZW1lbnRzPC9BY2NvcmRpb24uSGVhZGVyPlxyXG4gICAgICAgICAgPEFjY29yZGlvbi5Cb2R5PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJsb2NrXCI+XHJcbiAgICAgICAgICAgICAge2luZm9ybWF0aW9uUGF0aWVudD8ubWFwKChwYXRpZW50LCBpZCkgPT4gKFxyXG4gICAgICAgICAgICAgICAgPD5cclxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJibG9ja1wiPlxyXG4gICAgICAgICAgICAgICAgICAgIHtwYXRpZW50ICYmXHJcbiAgICAgICAgICAgICAgICAgICAgICBwYXRpZW50Py5zdWdnPy5wYXJlbnRTdWdnPy5wYXRoU3RyaW5nID09PVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBcIi9wYXRpZW50L2ZpY2hlL3RyYWl0ZW1lbnRzXCIgJiZcclxuICAgICAgICAgICAgICAgICAgICAgIHBhdGllbnQ/LmRlbGV0ZWRBdCA9PT0gbnVsbCAmJiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYga2V5PXtwYXRpZW50LmlkfSBjbGFzc05hbWU9XCJyb3dcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1zbS00XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDY+e3BhdGllbnQuc3VnZy52YWx1ZX08L2g2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLXNtLTRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwPntwYXRpZW50LmNvbW1lbnR9PC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC8+XHJcbiAgICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9BY2NvcmRpb24uQm9keT5cclxuICAgICAgICA8L0FjY29yZGlvbi5JdGVtPlxyXG4gICAgICA8L0FjY29yZGlvbj5cclxuICAgIDwvc2VjdGlvbj5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgRmljaGU7XHJcbiIsImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBCdXR0b24gZnJvbSBcInJlYWN0LWJvb3RzdHJhcC9CdXR0b25cIjtcclxuaW1wb3J0IE1vZGFsIGZyb20gXCJyZWFjdC1ib290c3RyYXAvTW9kYWxcIjtcclxuaW1wb3J0IHsgRm9udEF3ZXNvbWVJY29uIH0gZnJvbSBcIkBmb3J0YXdlc29tZS9yZWFjdC1mb250YXdlc29tZVwiO1xyXG5pbXBvcnQge1xyXG4gIGZhUGx1c0NpcmNsZSxcclxuICBmYUNhbmNlbCxcclxuICBmYUVkaXQsXHJcbn0gZnJvbSBcIkBmb3J0YXdlc29tZS9mcmVlLXNvbGlkLXN2Zy1pY29uc1wiO1xyXG5pbXBvcnQgRm9ybSBmcm9tIFwicmVhY3QtYm9vdHN0cmFwL0Zvcm1cIjtcclxuXHJcbmZ1bmN0aW9uIE1vZGFsSXRlbUZpY2hlKHByb3BzKSB7XHJcbiAgY29uc3QgW3Nob3csIHNldFNob3ddID0gdXNlU3RhdGUoZmFsc2UpO1xyXG5cclxuICBjb25zdCBbZWxlbWVudHNPcHQsIHNldEVsZW1lbnRzT3B0XSA9IHVzZVN0YXRlKG51bGwpO1xyXG5cclxuICBjb25zdCBoYW5kbGVDbG9zZSA9ICgpID0+IHNldFNob3coZmFsc2UpO1xyXG4gIGNvbnN0IGhhbmRsZVNob3cgPSAoKSA9PiBzZXRTaG93KHRydWUpO1xyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBzZXRFbGVtZW50c09wdChwcm9wcy5wcm9wcyk7XHJcbiAgfSk7XHJcbiAgY29uc29sZS5sb2coZWxlbWVudHNPcHQpO1xyXG4gIHJldHVybiAoXHJcbiAgICA8PlxyXG4gICAgICA8QnV0dG9uIG9uQ2xpY2s9e2hhbmRsZVNob3d9PlxyXG4gICAgICAgIDxGb250QXdlc29tZUljb24gaWNvbj17ZmFQbHVzQ2lyY2xlfSAvPlxyXG4gICAgICA8L0J1dHRvbj5cclxuXHJcbiAgICAgIDxNb2RhbCBzaG93PXtzaG93fSBvbkhpZGU9e2hhbmRsZUNsb3NlfT5cclxuICAgICAgICA8TW9kYWwuSGVhZGVyIGNsb3NlQnV0dG9uPlxyXG4gICAgICAgICAgPE1vZGFsLlRpdGxlPk1vZGlmaWVyIHVuZSBpbmZvcm1hdGlvbjwvTW9kYWwuVGl0bGU+XHJcbiAgICAgICAgPC9Nb2RhbC5IZWFkZXI+XHJcbiAgICAgICAgPE1vZGFsLkJvZHk+XHJcbiAgICAgICAgICB7XCIgXCJ9XHJcbiAgICAgICAgICA8PlxyXG4gICAgICAgICAgICA8Rm9ybS5MYWJlbCBodG1sRm9yPVwiaW5wdXRWYWx1ZVwiPlZhbGV1cjwvRm9ybS5MYWJlbD5cclxuICAgICAgICAgICAgPEZvcm0uU2VsZWN0IHNpemU9XCJsZ1wiPlxyXG4gICAgICAgICAgICAgIHtlbGVtZW50c09wdD8ubWFwKChlbCwgaWQpID0+IChcclxuICAgICAgICAgICAgICAgIDw+XHJcbiAgICAgICAgICAgICAgICAgIDxvcHRpb24+e2VsLmVsZW1lbnRzLnZhbHVlfTwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgPC8+XHJcbiAgICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgICAgIDwvRm9ybS5TZWxlY3Q+XHJcbiAgICAgICAgICAgIDxGb3JtLkxhYmVsIGh0bWxGb3I9XCJpbnB1dFZhbHVlXCI+VmFsZXVyIFNww6ljaWZpcXVlPC9Gb3JtLkxhYmVsPlxyXG4gICAgICAgICAgICA8Rm9ybS5Db250cm9sXHJcbiAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxyXG4gICAgICAgICAgICAgIGlkPVwiaW5wdXRWYWx1ZVNww6ljaWZpcXVlXCJcclxuICAgICAgICAgICAgICBhcmlhLWRlc2NyaWJlZGJ5PVwidmFsdWVTcMOpY2lmaXF1ZVwiXHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDxwPlxyXG4gICAgICAgICAgICAgIExlcyBzdWdnZXN0aW9ucyBtYXJxdcOpZXMgZCd1bmUgw6l0b2lsZSAoKikgZGFucyBsYSBsaXN0ZSBjaS1kZXNzdXNcclxuICAgICAgICAgICAgICBkZW1hbmRlbnQgb2JsaWdhdG9pcmVtZW50IHVuZSB2YWxldXIgc3DDqWNpZmlxdWUuXHJcbiAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgPEZvcm0uTGFiZWwgaHRtbEZvcj1cImlucHV0VmFsdWVcIj5Ew6lidXQ8L0Zvcm0uTGFiZWw+XHJcbiAgICAgICAgICAgIDxGb3JtLkNvbnRyb2xcclxuICAgICAgICAgICAgICB0eXBlPVwiZGF0ZVwiXHJcbiAgICAgICAgICAgICAgaWQ9XCJpbnB1dFZhbHVlU3DDqWNpZmlxdWVcIlxyXG4gICAgICAgICAgICAgIGFyaWEtZGVzY3JpYmVkYnk9XCJ2YWx1ZVNww6ljaWZpcXVlXCJcclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgPEZvcm0uTGFiZWwgaHRtbEZvcj1cImlucHV0VmFsdWVcIj5GaW48L0Zvcm0uTGFiZWw+XHJcbiAgICAgICAgICAgIDxGb3JtLkNvbnRyb2xcclxuICAgICAgICAgICAgICB0eXBlPVwiZGF0ZVwiXHJcbiAgICAgICAgICAgICAgaWQ9XCJpbnB1dFZhbHVlU3DDqWNpZmlxdWVcIlxyXG4gICAgICAgICAgICAgIGFyaWEtZGVzY3JpYmVkYnk9XCJ2YWx1ZVNww6ljaWZpcXVlXCJcclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgPEZvcm0uTGFiZWwgaHRtbEZvcj1cImlucHV0VmFsdWVcIj5Db21tZW50YWlyZTwvRm9ybS5MYWJlbD5cclxuICAgICAgICAgICAgPEZvcm0uQ29udHJvbCBhcz1cInRleHRhcmVhXCIgcm93cz17M30gLz5cclxuICAgICAgICAgIDwvPlxyXG4gICAgICAgIDwvTW9kYWwuQm9keT5cclxuICAgICAgICA8TW9kYWwuRm9vdGVyPlxyXG4gICAgICAgICAgPEJ1dHRvbiBvbkNsaWNrPXtoYW5kbGVDbG9zZX0+Q2xvc2U8L0J1dHRvbj5cclxuICAgICAgICAgIDxCdXR0b24gb25DbGljaz17aGFuZGxlQ2xvc2V9PlNhdmUgQ2hhbmdlczwvQnV0dG9uPlxyXG4gICAgICAgIDwvTW9kYWwuRm9vdGVyPlxyXG4gICAgICA8L01vZGFsPlxyXG4gICAgPC8+XHJcbiAgKTtcclxufVxyXG5cclxuLy8gcmVuZGVyKDxNb2RhbCAvPik7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBNb2RhbEl0ZW1GaWNoZTtcclxuIiwiaW1wb3J0IFJlYWN0LCB7IHVzZUNvbnRleHQsIHVzZURlYnVnVmFsdWUgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgdXNlUmVmLCB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7XHJcbiAgQ2hhcnQgYXMgQ2hhcnRKUyxcclxuICBDYXRlZ29yeVNjYWxlLFxyXG4gIExpbmVhclNjYWxlLFxyXG4gIEJhckVsZW1lbnQsXHJcbiAgVGl0bGUsXHJcbiAgVG9vbHRpcCxcclxuICBMZWdlbmQsXHJcbn0gZnJvbSBcImNoYXJ0LmpzXCI7XHJcbmltcG9ydCB7IEJhciB9IGZyb20gXCJyZWFjdC1jaGFydGpzLTJcIjtcclxuaW1wb3J0IHVzZUF1dGggZnJvbSBcIi4uLy4uL2hvb2tzL3VzZUF1dGhcIjtcclxuaW1wb3J0IHsgdXNlUGFyYW1zIH0gZnJvbSBcInJlYWN0LXJvdXRlci1kb21cIjtcclxuaW1wb3J0IGF4aW9zIGZyb20gXCJheGlvc1wiO1xyXG5cclxuQ2hhcnRKUy5yZWdpc3RlcihcclxuICBDYXRlZ29yeVNjYWxlLFxyXG4gIExpbmVhclNjYWxlLFxyXG4gIEJhckVsZW1lbnQsXHJcbiAgVGl0bGUsXHJcbiAgVG9vbHRpcCxcclxuICBMZWdlbmRcclxuKTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEFwcCgpIHtcclxuICBsZXQgaWQgPSB1c2VQYXJhbXMoKS5pZDtcclxuICB2YXIgZm9ybURhdGEgPSBuZXcgRm9ybURhdGEoKTtcclxuICBmb3JtRGF0YS5hcHBlbmQoXCJpZFwiLCBpZC50b1N0cmluZygpKTtcclxuICBjb25zdCBbYXV0aCwgc2V0QXV0aF0gPSB1c2VTdGF0ZSh1c2VBdXRoKCkpO1xyXG4gIGNvbnN0IFtpZFBhdGllbnQsIHNldElkUGF0aWVudF0gPSB1c2VTdGF0ZShpZCk7XHJcbiAgY29uc3QgW2luZm9ybWF0aW9ucywgc2V0SW5mb3JtYXRpb25zXSA9IHVzZVN0YXRlKCk7XHJcbiAgY29uc3QgW29wdGlvbnMsIHNldE9wdGlvbnNdID0gdXNlU3RhdGUoKTtcclxuICBjb25zdCBbZmlsdGVyRGF0ZXMsIHNldEZpbHRlckRhdGVzXSA9IHVzZVN0YXRlKCk7XHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGF4aW9zKHtcclxuICAgICAgbWV0aG9kOiBcInBvc3RcIixcclxuICAgICAgdXJsOiBcIi9hcGkvZ2V0Rm9sbG93VXBSZXBvcnRzSW5kaWNhdG9yc1wiLFxyXG4gICAgICBkYXRhOiBmb3JtRGF0YSxcclxuICAgICAgaGVhZGVyczoge1xyXG4gICAgICAgIFwiQ29udGVudC1UeXBlXCI6IFwiYXBwbGljYXRpb24vanNvblwiLFxyXG4gICAgICAgIEF1dGhvcml6YXRpb246IGBCZWFyZXIgJHthdXRoLmF1dGguYWNjZXNzVG9rZW59YCxcclxuICAgICAgfSxcclxuICAgIH0pXHJcbiAgICAgIC50aGVuKGZ1bmN0aW9uIChyZXNwb25zZSkge1xyXG4gICAgICAgIGxldCBjb20gPSByZXNwb25zZS5kYXRhLmZpbHRlcigoZSkgPT4gZS5pbmRpLm5hbWUgPT09IFwiQ29tcG9ydGVtZW50XCIpO1xyXG4gICAgICAgIGxldCB2ZXQgPSByZXNwb25zZS5kYXRhLmZpbHRlcigoZSkgPT4gZS5pbmRpLm5hbWUgPT09IFwiVsOqdGVtZW50c1wiKTtcclxuICAgICAgICBsZXQgY29yID0gcmVzcG9uc2UuZGF0YS5maWx0ZXIoKGUpID0+IGUuaW5kaS5uYW1lID09PSBcIkNvcnBzXCIpO1xyXG5cclxuICAgICAgICBsZXQgYXJyRGF0ZXMgPSBbXTtcclxuICAgICAgICByZXNwb25zZS5kYXRhLmZvckVhY2goKGVsZW1lbnQpID0+IHtcclxuICAgICAgICAgIGxldCBkYXRlZm9ybWF0ZWQgPSBuZXcgRGF0ZShlbGVtZW50LmZvcmUucmVwb3J0RGF0ZSkudG9Mb2NhbGVTdHJpbmcoXHJcbiAgICAgICAgICAgIFwiZnItQkVcIixcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgIGRhdGVTdHlsZTogXCJzaG9ydFwiLFxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICApO1xyXG4gICAgICAgICAgYXJyRGF0ZXMucHVzaChkYXRlZm9ybWF0ZWQpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIGxldCBmaWx0ZXJEYXRlcyA9IGFyckRhdGVzLmZpbHRlcihmdW5jdGlvbiAodmFsdWUsIGluZGV4LCBhcnJheSkge1xyXG4gICAgICAgICAgcmV0dXJuIGFycmF5LmluZGV4T2YodmFsdWUpID09PSBpbmRleDtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgc2V0RmlsdGVyRGF0ZXMoZmlsdGVyRGF0ZXMpO1xyXG5cclxuICAgICAgICBpZiAoXHJcbiAgICAgICAgICBmaWx0ZXJEYXRlcyAmJlxyXG4gICAgICAgICAgZmlsdGVyRGF0ZXMubGVuZ3RoID4gMCAmJlxyXG4gICAgICAgICAgY29tICYmXHJcbiAgICAgICAgICBjb20ubGVuZ3RoID4gMCAmJlxyXG4gICAgICAgICAgdmV0ICYmXHJcbiAgICAgICAgICB2ZXQubGVuZ3RoID4gMCAmJlxyXG4gICAgICAgICAgY29yICYmXHJcbiAgICAgICAgICBjb3IubGVuZ3RoID4gMFxyXG4gICAgICAgICkge1xyXG4gICAgICAgICAgc2V0T3B0aW9ucyh7XHJcbiAgICAgICAgICAgIHBsdWdpbnM6IHtcclxuICAgICAgICAgICAgICB0aXRsZToge1xyXG4gICAgICAgICAgICAgICAgZGlzcGxheTogdHJ1ZSxcclxuICAgICAgICAgICAgICAgIHRleHQ6IFwiQ1ZDIMOpdm9sdXRpb25cIixcclxuICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICByZXNwb25zaXZlOiB0cnVlLFxyXG4gICAgICAgICAgICBzY2FsZXM6IHtcclxuICAgICAgICAgICAgICB4OiB7XHJcbiAgICAgICAgICAgICAgICBzdGFja2VkOiB0cnVlLFxyXG4gICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgeToge1xyXG4gICAgICAgICAgICAgICAgc3RhY2tlZDogdHJ1ZSxcclxuICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgc2V0SW5mb3JtYXRpb25zKHtcclxuICAgICAgICAgICAgbGFiZWxzOiBbLi4uZmlsdGVyRGF0ZXNdLFxyXG4gICAgICAgICAgICBkYXRhc2V0czogW1xyXG4gICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGxhYmVsOiBcIkNvbXBvcnRlbWVudFwiLFxyXG4gICAgICAgICAgICAgICAgZGF0YTogWy4uLmNvbS5tYXAoKGUpID0+IGUudmFsdWUpXSxcclxuICAgICAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogXCJyZ2IoMjU1LCA5OSwgMTMyKVwiLFxyXG4gICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgbGFiZWw6IFwiVsOqdGVtZW50c1wiLFxyXG4gICAgICAgICAgICAgICAgZGF0YTogWy4uLnZldC5tYXAoKGUpID0+IGUudmFsdWUpXSxcclxuICAgICAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogXCJyZ2IoNzUsIDE5MiwgMTkyKVwiLFxyXG4gICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgbGFiZWw6IFwiQ29ycHNcIixcclxuICAgICAgICAgICAgICAgIGRhdGE6IFsuLi5jb3IubWFwKChlKSA9PiBlLnZhbHVlKV0sXHJcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IFwicmdiKDUzLCAxNjIsIDIzNSlcIixcclxuICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBdLFxyXG4gICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvLyByZXR1cm4gcmVzcG9uc2UuZGF0YTtcclxuICAgICAgfSlcclxuICAgICAgLmNhdGNoKGZ1bmN0aW9uIChyZXNwb25zZSkge30pO1xyXG4gIH0sIFtpZFBhdGllbnRdKTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDw+XHJcbiAgICAgIHtvcHRpb25zICYmIGluZm9ybWF0aW9ucyAmJiA8QmFyIG9wdGlvbnM9e29wdGlvbnN9IGRhdGE9e2luZm9ybWF0aW9uc30gLz59XHJcbiAgICA8Lz5cclxuICApO1xyXG59XHJcbiIsImltcG9ydCBSZWFjdCwgeyB1c2VDb250ZXh0LCB1c2VEZWJ1Z1ZhbHVlLCB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB1c2VBdXRoIGZyb20gXCIuLi8uLi9ob29rcy91c2VBdXRoXCI7XHJcbmltcG9ydCB7IHVzZVBhcmFtcyB9IGZyb20gXCJyZWFjdC1yb3V0ZXItZG9tXCI7XHJcbmltcG9ydCBheGlvcyBmcm9tIFwiYXhpb3NcIjtcclxuaW1wb3J0IEJhc2ljIGZyb20gXCIuL0Ryb3B6b25lXCI7XHJcblxyXG5jb25zdCBNZWRpYXMgPSAoKSA9PiB7XHJcbiAgbGV0IGlkID0gdXNlUGFyYW1zKCkuaWQ7XHJcbiAgdmFyIGZvcm1EYXRhID0gbmV3IEZvcm1EYXRhKCk7XHJcbiAgZm9ybURhdGEuYXBwZW5kKFwiaWRcIiwgaWQudG9TdHJpbmcoKSk7XHJcbiAgY29uc3QgW2F1dGgsIHNldEF1dGhdID0gdXNlU3RhdGUodXNlQXV0aCgpKTtcclxuICBjb25zdCBbaWRQYXRpZW50LCBzZXRJZFBhdGllbnRdID0gdXNlU3RhdGUoaWQpO1xyXG4gIGNvbnN0IFtsaXN0TWVkaWFzLCBzZXRNZWRpYXNdID0gdXNlU3RhdGUobnVsbCk7XHJcbiAgY29uc3QgW29wdGlvbnMsIHNldE9wdGlvbnNdID0gdXNlU3RhdGUoKTtcclxuICBjb25zdCBbZmlsdGVyRGF0ZXMsIHNldEZpbHRlckRhdGVzXSA9IHVzZVN0YXRlKCk7XHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGF4aW9zKHtcclxuICAgICAgbWV0aG9kOiBcInBvc3RcIixcclxuICAgICAgdXJsOiBcIi9hcGkvZ2V0QWxsTWVkaWFzQnlQYXRpZW50c1wiLFxyXG4gICAgICBkYXRhOiBmb3JtRGF0YSxcclxuICAgICAgaGVhZGVyczoge1xyXG4gICAgICAgIFwiQ29udGVudC1UeXBlXCI6IFwiYXBwbGljYXRpb24vanNvblwiLFxyXG4gICAgICAgIEF1dGhvcml6YXRpb246IGBCZWFyZXIgJHthdXRoLmF1dGguYWNjZXNzVG9rZW59YCxcclxuICAgICAgfSxcclxuICAgIH0pXHJcbiAgICAgIC50aGVuKGZ1bmN0aW9uIChyZXNwb25zZSkge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKHJlc3BvbnNlKTtcclxuICAgICAgICBzZXRNZWRpYXMocmVzcG9uc2UpO1xyXG4gICAgICB9KVxyXG4gICAgICAuY2F0Y2goZnVuY3Rpb24gKHJlc3BvbnNlKSB7fSk7XHJcbiAgfSwgW2lkUGF0aWVudF0pO1xyXG4gIGNvbnNvbGUubG9nKGxpc3RNZWRpYXMpO1xyXG4gIHJldHVybiAoXHJcbiAgICA8PlxyXG4gICAgICA8QmFzaWMgLz5cclxuICAgICAge2xpc3RNZWRpYXMgJiYgbGlzdE1lZGlhcy5kYXRhLmxlbmd0aCA+IDAgJiYgKFxyXG4gICAgICAgIDw+XHJcbiAgICAgICAgICA8aDY+TGlzdGUgZGUgZmljaGllcnMgZMOpasOgIHByw6lzZW50czwvaDY+XHJcbiAgICAgICAgICB7bGlzdE1lZGlhcz8uZGF0YT8ubWFwKChtZWRpYXMsIGlkKSA9PiAoXHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93XCI+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtc20tM1wiPnttZWRpYXMub3JpZ2luYWxGaWxlbmFtZX08L2Rpdj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1zbS0yXCI+e21lZGlhcy5zdWdnLnBhcmVudFN1Z2cudmFsdWV9PC9kaXY+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtc20tMlwiPnttZWRpYXMuY29tbWVudH08L2Rpdj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1zbS0yXCI+XHJcbiAgICAgICAgICAgICAgICB7bmV3IERhdGUobWVkaWFzLmRhdGUpLnRvTG9jYWxlU3RyaW5nKFwiZnItQkVcIiwge1xyXG4gICAgICAgICAgICAgICAgICBkYXRlU3R5bGU6IFwic2hvcnRcIixcclxuICAgICAgICAgICAgICAgIH0pfVxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLXNtLTNcIj5cclxuICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwiYnRuLW1ldGlzIGRlbGV0ZS1idG5cIj5kZWxldGU8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwiYnRuLW1ldGlzXCI+dMOpbMOpY2hhcmdlcjwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICkpfVxyXG4gICAgICAgIDwvPlxyXG4gICAgICApfVxyXG4gICAgPC8+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IE1lZGlhcztcclxuIiwiaW1wb3J0IFJlYWN0LCB7IHVzZUNvbnRleHQsIHVzZURlYnVnVmFsdWUsIHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHVzZUF1dGggZnJvbSBcIi4uLy4uL2hvb2tzL3VzZUF1dGhcIjtcclxuaW1wb3J0IHsgdXNlUGFyYW1zIH0gZnJvbSBcInJlYWN0LXJvdXRlci1kb21cIjtcclxuaW1wb3J0IGF4aW9zIGZyb20gXCJheGlvc1wiO1xyXG5pbXBvcnQgQmFzaWMgZnJvbSBcIi4vRHJvcHpvbmVcIjtcclxuXHJcbmNvbnN0IFBsYWNlcyA9ICgpID0+IHtcclxuICBsZXQgaWQgPSB1c2VQYXJhbXMoKS5pZDtcclxuICB2YXIgZm9ybURhdGEgPSBuZXcgRm9ybURhdGEoKTtcclxuICBmb3JtRGF0YS5hcHBlbmQoXCJpZFwiLCBpZC50b1N0cmluZygpKTtcclxuICBjb25zdCBbYXV0aCwgc2V0QXV0aF0gPSB1c2VTdGF0ZSh1c2VBdXRoKCkpO1xyXG4gIGNvbnN0IFtpZFBhdGllbnQsIHNldElkUGF0aWVudF0gPSB1c2VTdGF0ZShpZCk7XHJcbiAgY29uc3QgW2xpc3RQbGFjZXMsIHNldFBsYWNlc10gPSB1c2VTdGF0ZShudWxsKTtcclxuICBjb25zdCBbb3B0aW9ucywgc2V0T3B0aW9uc10gPSB1c2VTdGF0ZSgpO1xyXG4gIGNvbnN0IFtmaWx0ZXJEYXRlcywgc2V0RmlsdGVyRGF0ZXNdID0gdXNlU3RhdGUoKTtcclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgYXhpb3Moe1xyXG4gICAgICBtZXRob2Q6IFwicG9zdFwiLFxyXG4gICAgICB1cmw6IFwiL2FwaS9nZXRQbGFjZXNQYXRpZW50c1wiLFxyXG4gICAgICBkYXRhOiBmb3JtRGF0YSxcclxuICAgICAgaGVhZGVyczoge1xyXG4gICAgICAgIFwiQ29udGVudC1UeXBlXCI6IFwiYXBwbGljYXRpb24vanNvblwiLFxyXG4gICAgICAgIEF1dGhvcml6YXRpb246IGBCZWFyZXIgJHthdXRoLmF1dGguYWNjZXNzVG9rZW59YCxcclxuICAgICAgfSxcclxuICAgIH0pXHJcbiAgICAgIC50aGVuKGZ1bmN0aW9uIChyZXNwb25zZSkge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKHJlc3BvbnNlKTtcclxuICAgICAgICBzZXRQbGFjZXMocmVzcG9uc2UpO1xyXG4gICAgICB9KVxyXG4gICAgICAuY2F0Y2goZnVuY3Rpb24gKHJlc3BvbnNlKSB7fSk7XHJcbiAgfSwgW2lkUGF0aWVudF0pO1xyXG4gIGNvbnNvbGUubG9nKGxpc3RQbGFjZXMpO1xyXG4gIHJldHVybiAoXHJcbiAgICA8PlxyXG4gICAgICB7bGlzdFBsYWNlcyAmJiBsaXN0UGxhY2VzLmRhdGEubGVuZ3RoID4gMCAmJiAoXHJcbiAgICAgICAgPD5cclxuICAgICAgICAgIDxoNj5MaWV1eDwvaDY+XHJcbiAgICAgICAgICB7bGlzdFBsYWNlcz8uZGF0YT8ubWFwKChwbGFjZXMsIGlkKSA9PiAoXHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93XCI+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtc20tM1wiPlxyXG4gICAgICAgICAgICAgICAge3BsYWNlcy5jb250LmZpcnN0bmFtZX1cclxuICAgICAgICAgICAgICAgIHtwbGFjZXMuY29udC5sYXN0bmFtZX1cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICB7LyogPGRpdiBjbGFzc05hbWU9XCJjb2wtc20tMlwiPntwbGFjZXMubGFzdG5hbWV9PC9kaXY+ICovfVxyXG4gICAgICAgICAgICAgIHsvKiA8ZGl2IGNsYXNzTmFtZT1cImNvbC1zbS0yXCI+e21lZGlhcy5jb21tZW50fTwvZGl2PlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLXNtLTJcIj5cclxuICAgICAgICAgICAgICAgIHtuZXcgRGF0ZShtZWRpYXMuZGF0ZSkudG9Mb2NhbGVTdHJpbmcoXCJmci1CRVwiLCB7XHJcbiAgICAgICAgICAgICAgICAgIGRhdGVTdHlsZTogXCJzaG9ydFwiLFxyXG4gICAgICAgICAgICAgICAgfSl9XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtc20tM1wiPlxyXG4gICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJidG4tbWV0aXMgZGVsZXRlLWJ0blwiPmRlbGV0ZTwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJidG4tbWV0aXNcIj50w6lsw6ljaGFyZ2VyPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgPC9kaXY+ICovfVxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICkpfVxyXG4gICAgICAgIDwvPlxyXG4gICAgICApfVxyXG4gICAgPC8+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFBsYWNlcztcclxuIiwiaW1wb3J0IFJlYWN0LCB7XHJcbiAgdXNlQ29udGV4dCxcclxuICB1c2VEZWJ1Z1ZhbHVlLFxyXG4gIHVzZVJlZixcclxuICB1c2VTdGF0ZSxcclxuICB1c2VFZmZlY3QsXHJcbn0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB1c2VBdXRoIGZyb20gXCIuLi8uLi8vaG9va3MvdXNlQXV0aFwiO1xyXG5pbXBvcnQgYXhpb3MgZnJvbSBcImF4aW9zXCI7XHJcbmltcG9ydCB7IExpbmssIHVzZU5hdmlnYXRlLCB1c2VMb2NhdGlvbiwgdXNlUGFyYW1zIH0gZnJvbSBcInJlYWN0LXJvdXRlci1kb21cIjtcclxuXHJcbmNvbnN0IFByb2ZpbGUgPSAoKSA9PiB7XHJcbiAgbGV0IGlkID0gdXNlUGFyYW1zKCkuaWQ7XHJcbiAgY29uc3QgW2F1dGgsIHNldEF1dGhdID0gdXNlU3RhdGUodXNlQXV0aCgpKTtcclxuICBjb25zdCBbaWRQYXRpZW50LCBzZXRJZFBhdGllbnRdID0gdXNlU3RhdGUoaWQpO1xyXG5cclxuICB2YXIgZm9ybURhdGEgPSBuZXcgRm9ybURhdGEoKTtcclxuICBmb3JtRGF0YS5hcHBlbmQoXCJpZFwiLCBpZC50b1N0cmluZygpKTtcclxuXHJcbiAgbGV0IG9ialBhdGllbnQgPSB7fTtcclxuXHJcbiAgY29uc3QgW2luZm9ybWF0aW9uUGF0aWVudCwgc2V0SW5mb3JtYXRpb25dID0gdXNlU3RhdGUobnVsbCk7XHJcbiAgY29uc3QgW2dvYWxzLCBzZXRHb2Fsc10gPSB1c2VTdGF0ZShudWxsKTtcclxuICBjb25zdCBbYWN0aXZpdGllcywgc2V0QWN0aXZpdGllc10gPSB1c2VTdGF0ZShudWxsKTtcclxuICAvLyBnZXRGb2xsb3dVcFJlcG9ydHNHb2Fsc1xyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBheGlvcyh7XHJcbiAgICAgIG1ldGhvZDogXCJwb3N0XCIsXHJcbiAgICAgIHVybDogXCIvYXBpL2dldEZvbGxvd1VwUmVwb3J0c0J5SWRcIixcclxuICAgICAgZGF0YTogZm9ybURhdGEsXHJcbiAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICBcIkNvbnRlbnQtVHlwZVwiOiBcImFwcGxpY2F0aW9uL2pzb25cIixcclxuICAgICAgICBBdXRob3JpemF0aW9uOiBgQmVhcmVyICR7YXV0aC5hdXRoLmFjY2Vzc1Rva2VufWAsXHJcbiAgICAgIH0sXHJcbiAgICB9KVxyXG4gICAgICAudGhlbihmdW5jdGlvbiAocmVzcG9uc2UpIHtcclxuICAgICAgICBzZXRJbmZvcm1hdGlvbihyZXNwb25zZSk7XHJcbiAgICAgIH0pXHJcbiAgICAgIC5jYXRjaChmdW5jdGlvbiAocmVzcG9uc2UpIHt9KTtcclxuXHJcbiAgICBheGlvcyh7XHJcbiAgICAgIG1ldGhvZDogXCJwb3N0XCIsXHJcbiAgICAgIHVybDogXCIvYXBpL2dldEZvbGxvd1VwUmVwb3J0c0dvYWxzXCIsXHJcbiAgICAgIGRhdGE6IGZvcm1EYXRhLFxyXG4gICAgICBoZWFkZXJzOiB7XHJcbiAgICAgICAgXCJDb250ZW50LVR5cGVcIjogXCJhcHBsaWNhdGlvbi9qc29uXCIsXHJcbiAgICAgICAgQXV0aG9yaXphdGlvbjogYEJlYXJlciAke2F1dGguYXV0aC5hY2Nlc3NUb2tlbn1gLFxyXG4gICAgICB9LFxyXG4gICAgfSlcclxuICAgICAgLnRoZW4oZnVuY3Rpb24gKHJlc3BvbnNlKSB7XHJcbiAgICAgICAgc2V0R29hbHMocmVzcG9uc2UpO1xyXG4gICAgICB9KVxyXG4gICAgICAuY2F0Y2goZnVuY3Rpb24gKHJlc3BvbnNlKSB7fSk7XHJcbiAgfSwgW2lkUGF0aWVudF0pO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXItb25nbGV0UHJvZmlsZVwiPlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvdyBpdGVtLXJlcG9ydFwiPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLXNtLTNcIj5cclxuICAgICAgICAgIDxoNj5PYmplY3RpZnM8L2g2PlxyXG4gICAgICAgICAge2dvYWxzPy5kYXRhLm1hcCgoZywgaWQpID0+IChcclxuICAgICAgICAgICAgPD5cclxuICAgICAgICAgICAgICB7ZyAmJiBnLnR5cGUgPT09IDEgJiYgKFxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpdGVtLWdvYWxzXCIga2V5PXtpZH0+XHJcbiAgICAgICAgICAgICAgICAgIHtuZXcgRGF0ZShnLmNyZWF0aW9uRGF0ZSkudG9Mb2NhbGVTdHJpbmcoXCJmci1CRVwiLCB7XHJcbiAgICAgICAgICAgICAgICAgICAgZGF0ZVN0eWxlOiBcInNob3J0XCIsXHJcbiAgICAgICAgICAgICAgICAgIH0pfVxyXG4gICAgICAgICAgICAgICAgICB7Zz8uZnVuYz8udmFsdWV9IHtnPy5kZXNjcmlwdGlvbn1cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgIDwvPlxyXG4gICAgICAgICAgKSl9XHJcbiAgICAgICAgICA8aDY+QXBwZWxzPC9oNj5cclxuICAgICAgICAgIHtnb2Fscz8uZGF0YS5tYXAoKGcsIGlkKSA9PiAoXHJcbiAgICAgICAgICAgIDw+XHJcbiAgICAgICAgICAgICAge2cgJiYgZz8udHlwZSA9PT0gMiAmJiAoXHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIml0ZW0tZ29hbHNcIiBrZXk9e2lkfT5cclxuICAgICAgICAgICAgICAgICAge25ldyBEYXRlKGcuY3JlYXRpb25EYXRlKS50b0xvY2FsZVN0cmluZyhcImZyLUJFXCIsIHtcclxuICAgICAgICAgICAgICAgICAgICBkYXRlU3R5bGU6IFwic2hvcnRcIixcclxuICAgICAgICAgICAgICAgICAgfSl9XHJcbiAgICAgICAgICAgICAgICAgIHtnPy5mdW5jPy52YWx1ZX0ge2c/LmRlc2NyaXB0aW9ufVxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgPC8+XHJcbiAgICAgICAgICApKX1cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1zbS05XCI+XHJcbiAgICAgICAgICB7aW5mb3JtYXRpb25QYXRpZW50Py5kYXRhLm1hcCgociwgaWQpID0+IChcclxuICAgICAgICAgICAgPGRpdiBrZXk9e2lkfSBjbGFzc05hbWU9XCJyZXBvcnQtY29udGVudFwiPlxyXG4gICAgICAgICAgICAgIHtyICYmIHIuYWN0aXZpdHlUeXBlID09PSAyICYmIDxoNj5BcHBlbCBTb3J0YW50PC9oNj59XHJcbiAgICAgICAgICAgICAge3IgJiYgci5hY3Rpdml0eVR5cGUgPT09IDQgJiYgPGg2PkFwcGVsIEVudHJhbnQ8L2g2Pn1cclxuICAgICAgICAgICAgICB7ciAmJiByLmRlbGV0ZWRBdCA9PT0gbnVsbCAmJiAoXHJcbiAgICAgICAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cIm10LTRcIlxyXG4gICAgICAgICAgICAgICAgICBkYW5nZXJvdXNseVNldElubmVySFRNTD17eyBfX2h0bWw6IHIuY29udGVudCB9fVxyXG4gICAgICAgICAgICAgICAgPjwvZGl2PlxyXG4gICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgKSl9XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFByb2ZpbGU7XHJcbiIsImltcG9ydCBSZWFjdCwgeyB1c2VDb250ZXh0LCB1c2VEZWJ1Z1ZhbHVlIH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IHVzZUxvY2F0aW9uLCBOYXZpZ2F0ZSwgT3V0bGV0IH0gZnJvbSBcInJlYWN0LXJvdXRlci1kb21cIjtcclxuaW1wb3J0IHVzZUF1dGggZnJvbSBcIi4uL2hvb2tzL3VzZUF1dGhcIjtcclxuXHJcbmNvbnN0IFJlcXVpcmVBdXRoID0gKHsgYWxsb3dlZFJvbGVzIH0pID0+IHtcclxuICBjb25zdCB7IGF1dGggfSA9IHVzZUF1dGgoKTtcclxuICBjb25zdCBsb2NhdGlvbiA9IHVzZUxvY2F0aW9uKCk7XHJcblxyXG4gIHJldHVybiBhdXRoPy5yb2xlcz8uZmluZCgocm9sZSkgPT4gYWxsb3dlZFJvbGVzPy5pbmNsdWRlcyhyb2xlKSkgPyAoXHJcbiAgICA8T3V0bGV0IC8+XHJcbiAgKSA6IGF1dGg/LmFjY2Vzc1Rva2VuID8gKFxyXG4gICAgPE5hdmlnYXRlIHRvPVwiL3VuYXV0aG9yaXplZFwiIHN0YXRlPXt7IGZyb206IGxvY2F0aW9uIH19IHJlcGxhY2UgLz5cclxuICApIDogKFxyXG4gICAgPE5hdmlnYXRlIHRvPVwiL2Nvbm5lY3RcIiBzdGF0ZT17eyBmcm9tOiBsb2NhdGlvbiB9fSByZXBsYWNlIC8+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFJlcXVpcmVBdXRoO1xyXG4iLCJpbXBvcnQgUmVhY3QsIHsgdXNlQ29udGV4dCwgdXNlRGVidWdWYWx1ZSwgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgRm9ybSBmcm9tIFwicmVhY3QtYm9vdHN0cmFwL0Zvcm1cIjtcclxuaW1wb3J0IE5hdiBmcm9tIFwicmVhY3QtYm9vdHN0cmFwL05hdlwiO1xyXG5pbXBvcnQgYXhpb3MgZnJvbSBcImF4aW9zXCI7XHJcbmltcG9ydCBOYXZiYXIgZnJvbSBcInJlYWN0LWJvb3RzdHJhcC9OYXZiYXJcIjtcclxuaW1wb3J0IE5hdkRyb3Bkb3duIGZyb20gXCJyZWFjdC1ib290c3RyYXAvTmF2RHJvcGRvd25cIjtcclxuaW1wb3J0IE9mZmNhbnZhcyBmcm9tIFwicmVhY3QtYm9vdHN0cmFwL09mZmNhbnZhc1wiO1xyXG5pbXBvcnQgdXNlQXV0aCBmcm9tIFwiLi4vaG9va3MvdXNlQXV0aFwiO1xyXG5pbXBvcnQgeyB1c2VOYXZpZ2F0ZSwgTGluayB9IGZyb20gXCJyZWFjdC1yb3V0ZXItZG9tXCI7XHJcblxyXG5jb25zdCBTZWFyY2ggPSAoKSA9PiB7XHJcbiAgbGV0IFt2YWx1ZVNlYXJjaCwgc2V0U2VhcmNoXSA9IHVzZVN0YXRlKG51bGwpO1xyXG4gIGNvbnN0IFthdXRoLCBzZXRBdXRoXSA9IHVzZVN0YXRlKHVzZUF1dGgoKSk7XHJcbiAgbGV0IFtyZXN1bHRTZWFyY2gsIHNldFJlc3VsdFNlYXJjaF0gPSB1c2VTdGF0ZShudWxsKTtcclxuICBsZXQgW2lzT3Blbiwgc2V0T3BlblJlc3VsdF0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcblxyXG4gIGNvbnN0IHNldFZhbHVlID0gKGUpID0+IHtcclxuICAgIC8vIGUuZGVmYXVsdFByZXZlbnRlZCgpO1xyXG4gICAgLy8gY29uc29sZS5sb2coZSk7XHJcbiAgICBzZXRTZWFyY2goZS50YXJnZXQudmFsdWUpO1xyXG4gICAgLy8gcG9zdHMuZmlsdGVyKChlKSA9PiBlLm5hbWUgPT09IHZhbHVlU2VhcmNoKTtcclxuICAgIC8vIGNvbnNvbGUubG9nKHZhbHVlU2VhcmNoKTtcclxuICAgIGlmICh2YWx1ZVNlYXJjaCAmJiB2YWx1ZVNlYXJjaD8ubGVuZ3RoID4gMSkge1xyXG4gICAgICBzZXRPcGVuUmVzdWx0KHRydWUpO1xyXG4gICAgICBheGlvcyh7XHJcbiAgICAgICAgbWV0aG9kOiBcInBvc3RcIixcclxuICAgICAgICB1cmw6IFwiL2FwaS9nZXRTZWFyY2hcIixcclxuICAgICAgICBwYXJhbXM6IHsgdmFsOiB2YWx1ZVNlYXJjaC50b1N0cmluZygpIH0sXHJcbiAgICAgICAgaGVhZGVyczoge1xyXG4gICAgICAgICAgXCJDb250ZW50LVR5cGVcIjogXCJhcHBsaWNhdGlvbi9qc29uXCIsXHJcbiAgICAgICAgICBBdXRob3JpemF0aW9uOiBgQmVhcmVyICR7YXV0aC5hdXRoLmFjY2Vzc1Rva2VufWAsXHJcbiAgICAgICAgfSxcclxuICAgICAgfSlcclxuICAgICAgICAudGhlbihmdW5jdGlvbiAocmVzcG9uc2UpIHtcclxuICAgICAgICAgIC8vaGFuZGxlIHN1Y2Nlc3NcclxuICAgICAgICAgIC8vIHNldFBhdGllbnRzTGlzdChyZXNwb25zZSk7XHJcbiAgICAgICAgICBzZXRSZXN1bHRTZWFyY2gocmVzcG9uc2UuZGF0YSk7XHJcbiAgICAgICAgICAvLyBjb25zb2xlLmxvZyhyZXN1bHRTZWFyY2gpO1xyXG4gICAgICAgICAgc2V0U2VhcmNoKGUudGFyZ2V0LnZhbHVlKTtcclxuICAgICAgICB9KVxyXG4gICAgICAgIC5jYXRjaChmdW5jdGlvbiAocmVzcG9uc2UpIHtcclxuICAgICAgICAgIC8vIGNvbnNvbGUubG9nKHJlc3BvbnNlKTtcclxuICAgICAgICB9KTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHNldE9wZW5SZXN1bHQoZmFsc2UpO1xyXG4gICAgfVxyXG4gIH07XHJcblxyXG4gIGNvbnN0IG9uQ2xpY2tJZlZhbHVlID0gKGUpID0+IHtcclxuICAgIGlmIChyZXN1bHRTZWFyY2g/Lmxlbmd0aCA+IDApIHtcclxuICAgICAgc2V0T3BlblJlc3VsdCh0cnVlKTtcclxuICAgIH1cclxuICB9O1xyXG4gIC8vIGNvbnN0IG9uQmx1cnNldFZhbHVlID0gKGUpID0+IHtcclxuICAvLyAgIGNvbnN0IGN1cnJlbnRUYXJnZXQgPSBlLmN1cnJlbnRUYXJnZXQ7XHJcblxyXG4gIC8vICAgLy8gQ2hlY2sgdGhlIG5ld2x5IGZvY3VzZWQgZWxlbWVudCBpbiB0aGUgbmV4dCB0aWNrIG9mIHRoZSBldmVudCBsb29wXHJcbiAgLy8gICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAvLyAgICAgLy8gQ2hlY2sgaWYgdGhlIG5ldyBhY3RpdmVFbGVtZW50IGlzIGEgY2hpbGQgb2YgdGhlIG9yaWdpbmFsIGNvbnRhaW5lclxyXG4gIC8vICAgICBpZiAoIWN1cnJlbnRUYXJnZXQuY29udGFpbnMoZG9jdW1lbnQuYWN0aXZlRWxlbWVudCkpIHtcclxuICAvLyAgICAgICAvLyBZb3UgY2FuIGludm9rZSBhIGNhbGxiYWNrIG9yIGFkZCBjdXN0b20gbG9naWMgaGVyZVxyXG4gIC8vICAgICAgIHNldE9wZW5SZXN1bHQoZmFsc2UpO1xyXG4gIC8vICAgICB9XHJcbiAgLy8gICB9LCAwKTtcclxuICAvLyB9O1xyXG5cclxuICBjb25zdCByZWRpcmVjdGlvblRvUGF0aWVudCA9IChpZCkgPT4ge1xyXG4gICAgaWYgKGlkKSB7XHJcbiAgICAgIHJldHVybiAod2luZG93LmxvY2F0aW9uLmhyZWYgPSBcIi9cIiArIGlkKTtcclxuICAgIH1cclxuICB9O1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPEZvcm0gY2xhc3NOYW1lPVwiZC1mbGV4XCI+XHJcbiAgICAgIDxGb3JtLkNvbnRyb2xcclxuICAgICAgICB0eXBlPVwic2VhcmNoXCJcclxuICAgICAgICBwbGFjZWhvbGRlcj1cIlNlYXJjaFwiXHJcbiAgICAgICAgY2xhc3NOYW1lPVwibWUtMlwiXHJcbiAgICAgICAgLy8gb25CbHVyPXtvbkJsdXJzZXRWYWx1ZX1cclxuICAgICAgICBvbkNsaWNrPXsoZSkgPT4gb25DbGlja0lmVmFsdWUoKX1cclxuICAgICAgICBhcmlhLWxhYmVsPVwiU2VhcmNoXCJcclxuICAgICAgICBvbkNoYW5nZT17c2V0VmFsdWV9XHJcbiAgICAgIC8+XHJcbiAgICAgIHtpc09wZW59XHJcbiAgICAgIHtyZXN1bHRTZWFyY2ggJiYgaXNPcGVuICYmIChcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJlc3VsdC1zZWFyY2hcIj5cclxuICAgICAgICAgIDx1bD5cclxuICAgICAgICAgICAge3Jlc3VsdFNlYXJjaD8ubWFwKChyZXN1bHQpID0+IChcclxuICAgICAgICAgICAgICA8bGlcclxuICAgICAgICAgICAgICAgIGtleT17cmVzdWx0LmlkfVxyXG4gICAgICAgICAgICAgICAgb25DbGljaz17KGUpID0+IHJlZGlyZWN0aW9uVG9QYXRpZW50KHJlc3VsdC5pZCl9XHJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJsaW5rLXRvUGF0aWVudFwiXHJcbiAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgICAge3Jlc3VsdC5sYXN0bmFtZX0ge3Jlc3VsdC5maXJzdG5hbWV9IHtyZXN1bHQ/Lm5pY2tuYW1lc31cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICkpfVxyXG4gICAgICAgICAgPC91bD5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgKX1cclxuICAgIDwvRm9ybT5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgU2VhcmNoO1xyXG4iLCJpbXBvcnQgUmVhY3QsIHsgdXNlQ29udGV4dCwgdXNlRGVidWdWYWx1ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyB1c2VOYXZpZ2F0ZSB9IGZyb20gXCJyZWFjdC1yb3V0ZXItZG9tXCI7XHJcblxyXG5jb25zdCBVbmF1dGhvcml6ZWQgPSAoKSA9PiB7XHJcbiAgY29uc3QgbmF2aWdhdGUgPSB1c2VOYXZpZ2F0ZSgpO1xyXG5cclxuICBjb25zdCBnb0JhY2sgPSAoKSA9PiBuYXZpZ2F0ZSgtMSk7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8c2VjdGlvbj5cclxuICAgICAgPGgxPlVuYXV0aG9yaXplZDwvaDE+XHJcbiAgICAgIDxiciAvPlxyXG4gICAgICA8cD5Zb3UgZG8gbm90IGhhdmUgYWNjZXNzIHRvIHRoZSByZXF1ZXN0ZWQgcGFnZS48L3A+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleEdyb3dcIj5cclxuICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9e2dvQmFja30+R28gQmFjazwvYnV0dG9uPlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvc2VjdGlvbj5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgVW5hdXRob3JpemVkO1xyXG4iLCIvLyAuL2Fzc2V0cy9qcy9jb21wb25lbnRzL0hvbWUuanNcclxuICAgIFxyXG5pbXBvcnQgUmVhY3QsIHtDb21wb25lbnR9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHtSb3V0ZXMsIFJvdXRlLCBTd2l0Y2gsTmF2aWdhdGUsIExpbmssIHdpdGhSb3V0ZXJ9IGZyb20gJ3JlYWN0LXJvdXRlci1kb20nO1xyXG5cclxuaW1wb3J0IFBvc3RzIGZyb20gJy4vUG9zdHMnO1xyXG5cclxuY2xhc3MgVXNlcnMgZXh0ZW5kcyBDb21wb25lbnQge1xyXG4gICAgXHJcbiAgICByZW5kZXIoKSB7XHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgIFVzZXJzXHJcbiAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgKVxyXG4gICAgfVxyXG59XHJcbiAgICBcclxuZXhwb3J0IGRlZmF1bHQgVXNlcnM7XHJcbiIsImltcG9ydCBSZWFjdCwgeyB1c2VDb250ZXh0LCB1c2VEZWJ1Z1ZhbHVlIH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IHVzZU5hdmlnYXRlLCBMaW5rIH0gZnJvbSBcInJlYWN0LXJvdXRlci1kb21cIjtcclxuaW1wb3J0IHVzZUxvZ291dCBmcm9tIFwiLi4vaG9va3MvdXNlTG9nb3V0XCI7XHJcbmltcG9ydCBCdXR0b24gZnJvbSBcInJlYWN0LWJvb3RzdHJhcC9CdXR0b25cIjtcclxuaW1wb3J0IENvbnRhaW5lciBmcm9tIFwicmVhY3QtYm9vdHN0cmFwL0NvbnRhaW5lclwiO1xyXG5pbXBvcnQgeyBGb250QXdlc29tZUljb24gfSBmcm9tIFwiQGZvcnRhd2Vzb21lL3JlYWN0LWZvbnRhd2Vzb21lXCI7XHJcbmltcG9ydCB7IGZhQXJyb3dSaWdodCB9IGZyb20gXCJAZm9ydGF3ZXNvbWUvZnJlZS1zb2xpZC1zdmctaWNvbnNcIjtcclxuaW1wb3J0IEZvcm0gZnJvbSBcInJlYWN0LWJvb3RzdHJhcC9Gb3JtXCI7XHJcbmltcG9ydCBOYXYgZnJvbSBcInJlYWN0LWJvb3RzdHJhcC9OYXZcIjtcclxuaW1wb3J0IE5hdmJhciBmcm9tIFwicmVhY3QtYm9vdHN0cmFwL05hdmJhclwiO1xyXG5pbXBvcnQgTmF2RHJvcGRvd24gZnJvbSBcInJlYWN0LWJvb3RzdHJhcC9OYXZEcm9wZG93blwiO1xyXG5pbXBvcnQgTWVudSBmcm9tIFwiLi9NZW51XCI7XHJcbmltcG9ydCBGb3JtX01lZXRSYXBwb3J0cyBmcm9tIFwiLi9Gb3JtX01lZXRSYXBwb3J0c1wiO1xyXG5pbXBvcnQgeyBSb3V0ZXMsIFJvdXRlIH0gZnJvbSBcInJlYWN0LXJvdXRlci1kb21cIjtcclxuXHJcbmNvbnN0IFJlcHBvcnRDYWxscyA9ICgpID0+IHtcclxuICBjb25zdCBuYXZpZ2F0ZSA9IHVzZU5hdmlnYXRlKCk7XHJcbiAgY29uc3QgbG9nb3V0ID0gdXNlTG9nb3V0KCk7XHJcblxyXG4gIGNvbnN0IHNpZ25PdXQgPSBhc3luYyAoKSA9PiB7XHJcbiAgICBhd2FpdCBsb2dvdXQoKTtcclxuICAgIG5hdmlnYXRlKFwiL2Nvbm5lY3RcIik7XHJcbiAgfTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDw+XHJcbiAgICAgIDxwPlJlcHBvcnRzIENhbGxzPC9wPlxyXG4gICAgPC8+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFJlcHBvcnRDYWxscztcclxuIiwiaW1wb3J0IFJlYWN0LCB7IHVzZUNvbnRleHQsIHVzZURlYnVnVmFsdWUgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgdXNlTmF2aWdhdGUsIExpbmsgfSBmcm9tIFwicmVhY3Qtcm91dGVyLWRvbVwiO1xyXG5pbXBvcnQgdXNlTG9nb3V0IGZyb20gXCIuLi9ob29rcy91c2VMb2dvdXRcIjtcclxuaW1wb3J0IEJ1dHRvbiBmcm9tIFwicmVhY3QtYm9vdHN0cmFwL0J1dHRvblwiO1xyXG5pbXBvcnQgQ29udGFpbmVyIGZyb20gXCJyZWFjdC1ib290c3RyYXAvQ29udGFpbmVyXCI7XHJcbmltcG9ydCB7IEZvbnRBd2Vzb21lSWNvbiB9IGZyb20gXCJAZm9ydGF3ZXNvbWUvcmVhY3QtZm9udGF3ZXNvbWVcIjtcclxuaW1wb3J0IHsgZmFBcnJvd1JpZ2h0IH0gZnJvbSBcIkBmb3J0YXdlc29tZS9mcmVlLXNvbGlkLXN2Zy1pY29uc1wiO1xyXG5pbXBvcnQgRm9ybSBmcm9tIFwicmVhY3QtYm9vdHN0cmFwL0Zvcm1cIjtcclxuaW1wb3J0IE5hdiBmcm9tIFwicmVhY3QtYm9vdHN0cmFwL05hdlwiO1xyXG5pbXBvcnQgTmF2YmFyIGZyb20gXCJyZWFjdC1ib290c3RyYXAvTmF2YmFyXCI7XHJcbmltcG9ydCBOYXZEcm9wZG93biBmcm9tIFwicmVhY3QtYm9vdHN0cmFwL05hdkRyb3Bkb3duXCI7XHJcbmltcG9ydCBNZW51IGZyb20gXCIuL01lbnVcIjtcclxuaW1wb3J0IEZvcm1fTWVldFJhcHBvcnRzIGZyb20gXCIuL0Zvcm1fTWVldFJhcHBvcnRzXCI7XHJcbmltcG9ydCB7IFJvdXRlcywgUm91dGUgfSBmcm9tIFwicmVhY3Qtcm91dGVyLWRvbVwiO1xyXG5cclxuY29uc3QgUmVwcG9ydEdvYWxzID0gKCkgPT4ge1xyXG4gIGNvbnN0IG5hdmlnYXRlID0gdXNlTmF2aWdhdGUoKTtcclxuICBjb25zdCBsb2dvdXQgPSB1c2VMb2dvdXQoKTtcclxuXHJcbiAgY29uc3Qgc2lnbk91dCA9IGFzeW5jICgpID0+IHtcclxuICAgIGF3YWl0IGxvZ291dCgpO1xyXG4gICAgbmF2aWdhdGUoXCIvY29ubmVjdFwiKTtcclxuICB9O1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPD5cclxuICAgICAgPHA+UmVwcG9ydHMgR29hbHM8L3A+XHJcbiAgICA8Lz5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgUmVwcG9ydEdvYWxzO1xyXG4iLCJpbXBvcnQgUmVhY3QsIHsgY3JlYXRlQ29udGV4dCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuXHJcbmNvbnN0IEF1dGhDb250ZXh0ID0gY3JlYXRlQ29udGV4dCh7fSk7XHJcblxyXG5leHBvcnQgY29uc3QgQXV0aFByb3ZpZGVyID0gKHsgY2hpbGRyZW4gfSkgPT4ge1xyXG4gIGNvbnN0IFthdXRoLCBzZXRBdXRoXSA9IHVzZVN0YXRlKHt9KTtcclxuICBjb25zdCBbcGVyc2lzdCwgc2V0UGVyc2lzdF0gPSB1c2VTdGF0ZShcclxuICAgIEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJwZXJzaXN0XCIpKSB8fCBmYWxzZVxyXG4gICk7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8QXV0aENvbnRleHQuUHJvdmlkZXIgdmFsdWU9e3sgYXV0aCwgc2V0QXV0aCwgcGVyc2lzdCwgc2V0UGVyc2lzdCB9fT5cclxuICAgICAge2NoaWxkcmVufVxyXG4gICAgPC9BdXRoQ29udGV4dC5Qcm92aWRlcj5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgQXV0aENvbnRleHQ7XHJcbiIsImltcG9ydCB7IHVzZUNvbnRleHQsIHVzZURlYnVnVmFsdWUgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IEF1dGhDb250ZXh0IGZyb20gXCIuLi9jb250ZXh0L0F1dGhQcm92aWRlclwiO1xyXG5cclxuY29uc3QgdXNlQXV0aCA9ICgpID0+IHtcclxuICBjb25zdCB7IGF1dGggfSA9IHVzZUNvbnRleHQoQXV0aENvbnRleHQpO1xyXG4gIHVzZURlYnVnVmFsdWUoYXV0aCwgKGF1dGgpID0+IChhdXRoPy51c2VyID8gXCJMb2dnZWQgSW5cIiA6IFwiTG9nZ2VkIE91dFwiKSk7XHJcbiAgcmV0dXJuIHVzZUNvbnRleHQoQXV0aENvbnRleHQpO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgdXNlQXV0aDtcclxuIiwiaW1wb3J0IGF4aW9zIGZyb20gXCJheGlvc1wiO1xyXG5pbXBvcnQgdXNlQXV0aCBmcm9tIFwiLi91c2VBdXRoXCI7XHJcblxyXG5jb25zdCB1c2VMb2dvdXQgPSAoKSA9PiB7XHJcbiAgY29uc3QgeyBzZXRBdXRoIH0gPSB1c2VBdXRoKCk7XHJcblxyXG4gIGNvbnN0IGxvZ291dCA9IGFzeW5jICgpID0+IHtcclxuICAgIHNldEF1dGgoe30pO1xyXG4gICAgdHJ5IHtcclxuICAgICAgYXdhaXQgYXhpb3MoXCIvYXBpL3Rva2VuL2ludmFsaWRhdGVcIiwge1xyXG4gICAgICAgIHdpdGhDcmVkZW50aWFsczogdHJ1ZSxcclxuICAgICAgfSk7XHJcbiAgICB9IGNhdGNoIChlcnIpIHtcclxuICAgICAgY29uc29sZS5lcnJvcihlcnIpO1xyXG4gICAgfVxyXG4gIH07XHJcblxyXG4gIHJldHVybiBsb2dvdXQ7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCB1c2VMb2dvdXQ7XHJcbiIsImltcG9ydCBheGlvcyBmcm9tIFwiYXhpb3NcIjtcclxuaW1wb3J0IHVzZUF1dGggZnJvbSBcIi4vdXNlQXV0aFwiO1xyXG5cclxuY29uc3QgdXNlUmVmcmVzaFRva2VuID0gKCkgPT4ge1xyXG4gIGNvbnN0IHsgc2V0QXV0aCB9ID0gdXNlQXV0aCgpO1xyXG5cclxuICBjb25zdCByZWZyZXNoID0gYXN5bmMgKCkgPT4ge1xyXG4gICAgY29uc3QgdG9rZW4gPSBhd2FpdCBheGlvcy5nZXQoXCIvYXBpL3Rva2VuL3JlZnJlc2hcIiwge1xyXG4gICAgICB3aXRoQ3JlZGVudGlhbHM6IHRydWUsXHJcbiAgICB9KTtcclxuXHJcbiAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGF4aW9zLmdldChcIi9hcGkvZ2V0VXNlclwiLCB7XHJcbiAgICAgIGhlYWRlcnM6IHsgQXV0aG9yaXphdGlvbjogYEJlYXJlciAke3Rva2VuLmRhdGEudG9rZW59YCB9LFxyXG4gICAgfSk7XHJcblxyXG4gICAgc2V0QXV0aCgocHJldikgPT4ge1xyXG4gICAgICByZXR1cm4ge1xyXG4gICAgICAgIC4uLnByZXYsXHJcbiAgICAgICAgcm9sZXM6IHJlc3BvbnNlLmRhdGEucm9sZU5hbWVzLFxyXG4gICAgICAgIGFjY2Vzc1Rva2VuOiByZXNwb25zZS5kYXRhLmNyZWRlbnRpYWxzLFxyXG4gICAgICB9O1xyXG4gICAgfSk7XHJcbiAgICByZXR1cm4gcmVzcG9uc2UuZGF0YS5hY2Nlc3NUb2tlbjtcclxuICB9O1xyXG4gIHJldHVybiByZWZyZXNoO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgdXNlUmVmcmVzaFRva2VuO1xyXG4iLCJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBSZWFjdERPTSBmcm9tIFwicmVhY3QtZG9tXCI7XHJcbi8vIGltcG9ydCBcIi4vaW5kZXguY3NzXCI7XHJcbmltcG9ydCBBcHAgZnJvbSBcIi4vYXBwXCI7XHJcbmltcG9ydCB7IEF1dGhQcm92aWRlciB9IGZyb20gXCIuL2NvbnRleHQvQXV0aFByb3ZpZGVyXCI7XHJcbmltcG9ydCB7IEJyb3dzZXJSb3V0ZXIsIFJvdXRlcywgUm91dGUgfSBmcm9tIFwicmVhY3Qtcm91dGVyLWRvbVwiO1xyXG5cclxuUmVhY3RET00ucmVuZGVyKFxyXG4gIDxSZWFjdC5TdHJpY3RNb2RlPlxyXG4gICAgPEJyb3dzZXJSb3V0ZXI+XHJcbiAgICAgIDxBdXRoUHJvdmlkZXI+XHJcbiAgICAgICAgPFJvdXRlcz5cclxuICAgICAgICAgIDxSb3V0ZSBwYXRoPVwiLypcIiBlbGVtZW50PXs8QXBwIC8+fSAvPlxyXG4gICAgICAgIDwvUm91dGVzPlxyXG4gICAgICA8L0F1dGhQcm92aWRlcj5cclxuICAgIDwvQnJvd3NlclJvdXRlcj5cclxuICA8L1JlYWN0LlN0cmljdE1vZGU+LFxyXG4gIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicm9vdFwiKVxyXG4pO1xyXG4iLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VDb250ZXh0IiwidXNlRGVidWdWYWx1ZSIsIkxvZ2luIiwiSG9tZSIsIkxheW91dCIsIkVkaXRvciIsIkFkbWluIiwiTWlzc2luZyIsIlVuYXV0aG9yaXplZCIsIkxvdW5nZSIsIkxpbmtQYWdlIiwiUmVxdWlyZUF1dGgiLCJQZXJzaXN0TG9naW4iLCJSb3V0ZXMiLCJSb3V0ZSIsIlBhdGllbnRzIiwiUmVwcG9ydENhbGxzIiwiUmVwcG9ydEdvYWxzIiwiUGF0aWVudCIsIlJPTEVTIiwiVXNlciIsIkFwcCIsIkxpbmsiLCJVc2VycyIsInVzZU5hdmlnYXRlIiwidXNlTG9nb3V0IiwiQnV0dG9uIiwiQ29udGFpbmVyIiwiRm9ybSIsIk5hdiIsIk5hdmJhciIsIk5hdkRyb3Bkb3duIiwiRm9ybV9NZWV0UmFwcG9ydHMiLCJuYXZpZ2F0ZSIsImxvZ291dCIsInNpZ25PdXQiLCJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsIkZvbnRBd2Vzb21lSWNvbiIsImZhQXJyb3dSaWdodCIsIk1lbnUiLCJyZXBvcnRNZWV0Iiwic2V0UmVwb3J0TWVldCIsInJlcG9ydENhbGxzIiwic2V0UmVwb3J0Q2FsbHMiLCJyZXBvcnRHb2FscyIsInNldFJlcG9ydEdvYWxzIiwicGF0aCIsInVybCIsImdvVG9SZXBwb3J0IiwiaGlzdG9yeSIsInB1c2giLCJvbkNsaWNrUmVwcG9ydE1lZXQiLCJvbkNsaWNrUmVwcG9ydENhbGxzIiwib25DbGlja1JlcHBvcnRHb2FscyIsIk91dGxldCIsInVzZVJlZiIsInVzZUF1dGgiLCJ1c2VMb2NhdGlvbiIsImF4aW9zIiwiTE9HSU5fVVJMIiwic2V0QXV0aCIsInBlcnNpc3QiLCJzZXRQZXJzaXN0IiwibG9jYXRpb24iLCJmcm9tIiwic3RhdGUiLCJwYXRobmFtZSIsInVzZXJSZWYiLCJlcnJSZWYiLCJlbWFpbCIsInNldFVzZXIiLCJwYXNzd29yZCIsInNldFB3ZCIsImVyck1zZyIsInNldEVyck1zZyIsImN1cnJlbnQiLCJmb2N1cyIsImhhbmRsZVN1Ym1pdCIsImUiLCJwcmV2ZW50RGVmYXVsdCIsInBvc3QiLCJKU09OIiwic3RyaW5naWZ5IiwiaGVhZGVycyIsInJlc3BvbnNlIiwiYWNjZXNzVG9rZW4iLCJkYXRhIiwidG9rZW4iLCJnZXQiLCJ3aXRoQ3JlZGVudGlhbHMiLCJBdXRob3JpemF0aW9uIiwicm9sZXNfdXNlZCIsInJvbGVzIiwicm9sZU5hbWVzIiwibGVuZ3RoIiwicmVwbGFjZSIsInN0YXR1cyIsInRvZ2dsZVBlcnNpc3QiLCJwcmV2IiwibG9jYWxTdG9yYWdlIiwic2V0SXRlbSIsInRhcmdldCIsInZhbHVlIiwiZmFTaWduT3V0IiwiT2ZmY2FudmFzIiwiU2VhcmNoIiwiYmFja2dyb3VuZENvbG9yIiwicGFkZGluZyIsImxvZ29QYXRoIiwidXNlUGFyYW1zIiwiVGFiIiwiVGFicyIsIkZpY2hlIiwiSW5kaWNhdG9ycyIsIlByb2ZpbGUiLCJNZWRpYXMiLCJDb250YWN0cyIsIlBsYWNlcyIsImlkIiwiYmFja2dyb3VuZEltYWdlIiwiYXV0aCIsInBhdGllbnQiLCJzZXRQYXRpZW50IiwiaW1nUGF0aWVudCIsInNldEltZ1BhdGllbnQiLCJrZXkiLCJzZXRLZXkiLCJpZFBhdGllbnQiLCJzZXRJZFBhdGllbnQiLCJsb2NhdGlvbldlYiIsInNldExvY2F0aW9uIiwiZm9ybURhdGEiLCJGb3JtRGF0YSIsImFwcGVuZCIsInRvU3RyaW5nIiwib2JqUGF0aWVudCIsIm1ldGhvZCIsInRoZW4iLCJpbWFnZSIsIk9iamVjdCIsImtleXMiLCJmaXJzdG5hbWUiLCJsYXN0bmFtZSIsIkRhdGUiLCJiaXJ0aGRhdGUiLCJ0b0xvY2FsZURhdGVTdHJpbmciLCJmaXJzdENvbnRhY3REYXRlIiwiayIsIlRhYmxlIiwiZmFVc2VyIiwiQWNjb3JkaW9uIiwicGF0aWVudHNMaXN0Iiwic2V0UGF0aWVudHNMaXN0IiwibGVuZ3RoTGlzdCIsInNldExlbmd0aExpc3QiLCJyZWFkTW9yZSIsIm1hcCIsImJpcnRoTG9jYXRpb24iLCJ1c2VSZWZyZXNoVG9rZW4iLCJpc0xvYWRpbmciLCJzZXRJc0xvYWRpbmciLCJyZWZyZXNoIiwiaXNNb3VudGVkIiwidmVyaWZ5UmVmcmVzaFRva2VuIiwiY29uc29sZSIsImVycm9yIiwiQ29tcG9uZW50IiwiUG9zdHMiLCJwb3N0cyIsImxvYWRpbmciLCJnZXRQb3N0cyIsInJlcyIsIm5hbWUiLCJkZXNjcmlwdGlvbiIsImxpc3RDb250YWN0cyIsInNldENvbnRhY3RzIiwib3B0aW9ucyIsInNldE9wdGlvbnMiLCJmaWx0ZXJEYXRlcyIsInNldEZpbHRlckRhdGVzIiwibG9nIiwiaXRlbSIsImNvbnQiLCJvcnBhIiwidXNlRHJvcHpvbmUiLCJCYXNpYyIsInByb3BzIiwiYWNjZXB0ZWRGaWxlcyIsImdldFJvb3RQcm9wcyIsImdldElucHV0UHJvcHMiLCJmaWxlcyIsImZpbGUiLCJzaXplIiwiY2xhc3NOYW1lIiwiZmFQbHVzQ2lyY2xlIiwiZmFDYW5jZWwiLCJmYUVkaXQiLCJNb2RhbEl0ZW1GaWNoZSIsImluZm9ybWF0aW9uUGF0aWVudCIsInNldEluZm9ybWF0aW9uIiwiaW5mb3JtYXRpb25UZW1wbGF0ZUJsb2NrIiwic2V0SW5mb3JtYXRpb25UZW1wbGF0ZUJsb2NrIiwiZmlsdGVyIiwiZWxlbWVudHMiLCJwYXJlbnRTdWdnIiwicGF0aFN0cmluZyIsIml0ZWwiLCJzdWdlIiwiZGVsZXRlZEF0Iiwic3VnZyIsInN0YXJ0IiwidG9Mb2NhbGVTdHJpbmciLCJkYXRlU3R5bGUiLCJlbmQiLCJjb21tZW50Q29sdW1uIiwiaXRiayIsInN1Z2IiLCJjb21tZW50IiwicGFyZW50IiwidmFsZXVyUGFyZW50IiwiTW9kYWwiLCJzaG93Iiwic2V0U2hvdyIsImVsZW1lbnRzT3B0Iiwic2V0RWxlbWVudHNPcHQiLCJoYW5kbGVDbG9zZSIsImhhbmRsZVNob3ciLCJlbCIsIkNoYXJ0IiwiQ2hhcnRKUyIsIkNhdGVnb3J5U2NhbGUiLCJMaW5lYXJTY2FsZSIsIkJhckVsZW1lbnQiLCJUaXRsZSIsIlRvb2x0aXAiLCJMZWdlbmQiLCJCYXIiLCJyZWdpc3RlciIsImluZm9ybWF0aW9ucyIsInNldEluZm9ybWF0aW9ucyIsImNvbSIsImluZGkiLCJ2ZXQiLCJjb3IiLCJhcnJEYXRlcyIsImZvckVhY2giLCJlbGVtZW50IiwiZGF0ZWZvcm1hdGVkIiwiZm9yZSIsInJlcG9ydERhdGUiLCJpbmRleCIsImFycmF5IiwiaW5kZXhPZiIsInBsdWdpbnMiLCJ0aXRsZSIsImRpc3BsYXkiLCJ0ZXh0IiwicmVzcG9uc2l2ZSIsInNjYWxlcyIsIngiLCJzdGFja2VkIiwieSIsImxhYmVscyIsImRhdGFzZXRzIiwibGFiZWwiLCJsaXN0TWVkaWFzIiwic2V0TWVkaWFzIiwibWVkaWFzIiwib3JpZ2luYWxGaWxlbmFtZSIsImRhdGUiLCJsaXN0UGxhY2VzIiwic2V0UGxhY2VzIiwicGxhY2VzIiwiZ29hbHMiLCJzZXRHb2FscyIsImFjdGl2aXRpZXMiLCJzZXRBY3Rpdml0aWVzIiwiZyIsInR5cGUiLCJjcmVhdGlvbkRhdGUiLCJmdW5jIiwiciIsImFjdGl2aXR5VHlwZSIsIl9faHRtbCIsImNvbnRlbnQiLCJOYXZpZ2F0ZSIsImFsbG93ZWRSb2xlcyIsImZpbmQiLCJyb2xlIiwiaW5jbHVkZXMiLCJ2YWx1ZVNlYXJjaCIsInNldFNlYXJjaCIsInJlc3VsdFNlYXJjaCIsInNldFJlc3VsdFNlYXJjaCIsImlzT3BlbiIsInNldE9wZW5SZXN1bHQiLCJzZXRWYWx1ZSIsInBhcmFtcyIsInZhbCIsIm9uQ2xpY2tJZlZhbHVlIiwicmVkaXJlY3Rpb25Ub1BhdGllbnQiLCJ3aW5kb3ciLCJocmVmIiwicmVzdWx0Iiwibmlja25hbWVzIiwiZ29CYWNrIiwiU3dpdGNoIiwid2l0aFJvdXRlciIsImNyZWF0ZUNvbnRleHQiLCJBdXRoQ29udGV4dCIsIkF1dGhQcm92aWRlciIsImNoaWxkcmVuIiwicGFyc2UiLCJnZXRJdGVtIiwidXNlciIsImNyZWRlbnRpYWxzIiwiUmVhY3RET00iLCJCcm93c2VyUm91dGVyIiwicmVuZGVyIiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCJdLCJzb3VyY2VSb290IjoiIn0=