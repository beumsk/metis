(self["webpackChunk"] = self["webpackChunk"] || []).push([["app"],{

/***/ "./assets/app.js":
/*!***********************!*\
  !*** ./assets/app.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
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

"use strict";
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

"use strict";
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

"use strict";
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

"use strict";
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

"use strict";
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

"use strict";
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

"use strict";
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

"use strict";
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

"use strict";
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

"use strict";
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

"use strict";
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

"use strict";
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

"use strict";
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

"use strict";
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

"use strict";
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

"use strict";
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
/* harmony import */ var react_dropzone__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! react-dropzone */ "./node_modules/react-dropzone/dist/es/index.js");














function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }




var Basic = function Basic(props) {
  var _useDropzone = (0,react_dropzone__WEBPACK_IMPORTED_MODULE_14__.useDropzone)(),
      acceptedFiles = _useDropzone.acceptedFiles,
      getRootProps = _useDropzone.getRootProps,
      getInputProps = _useDropzone.getInputProps;

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_13__.useState)(null),
      _useState2 = _slicedToArray(_useState, 2),
      fileUploaded = _useState2[0],
      setFileUploaded = _useState2[1];

  var files = acceptedFiles.map(function (file) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_13___default().createElement("li", {
      key: file.path
    }, file.path, " - ", file.size, " bytes");
  });

  var FilesUploaded = function FilesUploaded(acceptedFiles) {
    return setFileUploaded(acceptedFiles);
  };

  props.onChange(acceptedFiles);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_13___default().createElement("div", {
    className: "row container-dropzone mb-4"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_13___default().createElement("div", getRootProps({
    className: "dropzone col-sm-6"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_13___default().createElement("input", getInputProps()), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_13___default().createElement("p", null, "Uploadez vos fichiers ici")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_13___default().createElement("div", {
    className: "col-sm-6"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_13___default().createElement("h6", null, "Fichiers upload\xE9e"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_13___default().createElement("p", null, files)));
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Basic);

/***/ }),

/***/ "./assets/component/Profile/Editor-Reports.js":
/*!****************************************************!*\
  !*** ./assets/component/Profile/Editor-Reports.js ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
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
/* harmony import */ var _ckeditor_ckeditor5_react__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @ckeditor/ckeditor5-react */ "./node_modules/@ckeditor/ckeditor5-react/dist/ckeditor.js");
/* harmony import */ var _ckeditor_ckeditor5_react__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(_ckeditor_ckeditor5_react__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var _ckeditor_ckeditor5_build_classic__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @ckeditor/ckeditor5-build-classic */ "./node_modules/@ckeditor/ckeditor5-build-classic/build/ckeditor.js");
/* harmony import */ var _ckeditor_ckeditor5_build_classic__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(_ckeditor_ckeditor5_build_classic__WEBPACK_IMPORTED_MODULE_15__);
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





var Editor = /*#__PURE__*/function (_Component) {
  _inherits(Editor, _Component);

  var _super = _createSuper(Editor);

  function Editor() {
    _classCallCheck(this, Editor);

    return _super.apply(this, arguments);
  }

  _createClass(Editor, [{
    key: "render",
    value: function render() {
      var _this = this;

      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_13___default().createElement("div", {
        className: "App"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_13___default().createElement(_ckeditor_ckeditor5_react__WEBPACK_IMPORTED_MODULE_14__.CKEditor, {
        editor: (_ckeditor_ckeditor5_build_classic__WEBPACK_IMPORTED_MODULE_15___default()),
        onReady: function onReady(editor) {
          // You can store the "editor" and use when it is needed.
          console.log(_this.props);
          editor.setData(_this.props.contentText);
          console.log("Editor is ready to use!", editor);
        },
        onChange: function onChange(event, editor) {
          var data = editor.getData(); // contentText

          console.log({
            event: event,
            editor: editor,
            data: data
          });
        },
        onBlur: function onBlur(event, editor) {
          console.log("Blur.", editor);
        },
        onFocus: function onFocus(event, editor) {
          console.log("Focus.", editor);
        }
      }));
    }
  }]);

  return Editor;
}(react__WEBPACK_IMPORTED_MODULE_13__.Component);

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Editor);

/***/ }),

/***/ "./assets/component/Profile/Fiche/Block-Infos.js":
/*!*******************************************************!*\
  !*** ./assets/component/Profile/Fiche/Block-Infos.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
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
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router/dist/index.js");
/* harmony import */ var _hooks_useAuth__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../../../hooks/useAuth */ "./assets/hooks/useAuth.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_18__);
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @fortawesome/react-fontawesome */ "./node_modules/@fortawesome/react-fontawesome/index.es.js");
/* harmony import */ var _Modal_Add_Infos__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./Modal-Add-Infos */ "./assets/component/Profile/Fiche/Modal-Add-Infos.js");
/* harmony import */ var _Modal_Edit_Infos__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./Modal-Edit-Infos */ "./assets/component/Profile/Fiche/Modal-Edit-Infos.js");

















function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }














var BlockInfos = function BlockInfos(props) {
  var _props$infos;

  var id = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_22__.useParams)().id;
  var backgroundImage = "../images/5a94e34b4c36e28de4e704f8c2d1c39a79e91b5d.png";

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_16__.useState)((0,_hooks_useAuth__WEBPACK_IMPORTED_MODULE_17__["default"])()),
      _useState2 = _slicedToArray(_useState, 2),
      auth = _useState2[0],
      setAuth = _useState2[1];

  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_16__.useState)(id),
      _useState4 = _slicedToArray(_useState3, 2),
      idPatient = _useState4[0],
      setIdPatient = _useState4[1];

  var location = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_22__.useLocation)();
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

      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_16___default().createElement("p", {
        key: id
      }, (_pi$sugg = pi.sugg) === null || _pi$sugg === void 0 ? void 0 : _pi$sugg.value, pi && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_16___default().createElement(_Modal_Edit_Infos__WEBPACK_IMPORTED_MODULE_21__["default"], {
        link: props.link,
        infosPatient: pi,
        infos: patient
      }));
    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_16___default().createElement("div", {
      className: "col-sm-4"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_16___default().createElement(_Modal_Add_Infos__WEBPACK_IMPORTED_MODULE_20__["default"], {
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

"use strict";
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
/* harmony import */ var _Modal_Add_Infos__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./Modal-Add-Infos */ "./assets/component/Profile/Fiche/Modal-Add-Infos.js");
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

/***/ "./assets/component/Profile/Fiche/Modal-Add-Infos.js":
/*!***********************************************************!*\
  !*** ./assets/component/Profile/Fiche/Modal-Add-Infos.js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
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











function ModalAddInfos(props) {
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
    var _props$infos;

    setElementsOpt.apply(void 0, _toConsumableArray(props === null || props === void 0 ? void 0 : (_props$infos = props.infos) === null || _props$infos === void 0 ? void 0 : _props$infos.suggestionsByBlock));
  }, [idPatient]);
  console.log(props);
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


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ModalAddInfos);

/***/ }),

/***/ "./assets/component/Profile/Fiche/Modal-Edit-Infos.js":
/*!************************************************************!*\
  !*** ./assets/component/Profile/Fiche/Modal-Edit-Infos.js ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
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
/* harmony import */ var core_js_modules_es_date_to_json_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.date.to-json.js */ "./node_modules/core-js/modules/es.date.to-json.js");
/* harmony import */ var core_js_modules_es_date_to_json_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_date_to_json_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_web_url_to_json_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/web.url.to-json.js */ "./node_modules/core-js/modules/web.url.to-json.js");
/* harmony import */ var core_js_modules_web_url_to_json_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_url_to_json_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es.array.map.js */ "./node_modules/core-js/modules/es.array.map.js");
/* harmony import */ var core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core-js/modules/es.array.slice.js */ "./node_modules/core-js/modules/es.array.slice.js");
/* harmony import */ var core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var core_js_modules_es_array_is_array_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! core-js/modules/es.array.is-array.js */ "./node_modules/core-js/modules/es.array.is-array.js");
/* harmony import */ var core_js_modules_es_array_is_array_js__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_is_array_js__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! core-js/modules/es.symbol.js */ "./node_modules/core-js/modules/es.symbol.js");
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! core-js/modules/es.symbol.description.js */ "./node_modules/core-js/modules/es.symbol.description.js");
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! core-js/modules/es.symbol.iterator.js */ "./node_modules/core-js/modules/es.symbol.iterator.js");
/* harmony import */ var core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! core-js/modules/es.array.iterator.js */ "./node_modules/core-js/modules/es.array.iterator.js");
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! core-js/modules/es.string.iterator.js */ "./node_modules/core-js/modules/es.string.iterator.js");
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator.js */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! core-js/modules/es.function.name.js */ "./node_modules/core-js/modules/es.function.name.js");
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var core_js_modules_es_array_from_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! core-js/modules/es.array.from.js */ "./node_modules/core-js/modules/es.array.from.js");
/* harmony import */ var core_js_modules_es_array_from_js__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_from_js__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! core-js/modules/es.regexp.exec.js */ "./node_modules/core-js/modules/es.regexp.exec.js");
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_18__);
/* harmony import */ var react_bootstrap_Button__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! react-bootstrap/Button */ "./node_modules/react-bootstrap/esm/Button.js");
/* harmony import */ var react_bootstrap_Modal__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! react-bootstrap/Modal */ "./node_modules/react-bootstrap/esm/Modal.js");
/* harmony import */ var _hooks_useAuth__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../../../hooks/useAuth */ "./assets/hooks/useAuth.js");
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @fortawesome/react-fontawesome */ "./node_modules/@fortawesome/react-fontawesome/index.es.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_21___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_21__);
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ "./node_modules/@fortawesome/free-solid-svg-icons/index.mjs");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router/dist/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_22___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_22__);
/* harmony import */ var react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! react-bootstrap/Form */ "./node_modules/react-bootstrap/esm/Form.js");
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












function ModalEditInfos(props) {
  var _props$infosPatient3, _props$infosPatient3$, _props$infosPatient4, _props$infosPatient5;

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_18__.useState)(false),
      _useState2 = _slicedToArray(_useState, 2),
      show = _useState2[0],
      setShow = _useState2[1];

  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_18__.useState)((0,_hooks_useAuth__WEBPACK_IMPORTED_MODULE_19__["default"])()),
      _useState4 = _slicedToArray(_useState3, 2),
      auth = _useState4[0],
      setAuth = _useState4[1];

  var id = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_23__.useParams)().id;
  var formData = new FormData();
  formData.append("id", id.toString());
  formData.append("pathString", props.link);

  var _useState5 = (0,react__WEBPACK_IMPORTED_MODULE_18__.useState)(null),
      _useState6 = _slicedToArray(_useState5, 2),
      infos = _useState6[0],
      setInfos = _useState6[1];

  var _useState7 = (0,react__WEBPACK_IMPORTED_MODULE_18__.useState)(null),
      _useState8 = _slicedToArray(_useState7, 2),
      elementsOpt = _useState8[0],
      setElementsOpt = _useState8[1];

  var _useState9 = (0,react__WEBPACK_IMPORTED_MODULE_18__.useState)(id),
      _useState10 = _slicedToArray(_useState9, 2),
      idPatient = _useState10[0],
      setIdPatient = _useState10[1];

  var _useState11 = (0,react__WEBPACK_IMPORTED_MODULE_18__.useState)(new Date()),
      _useState12 = _slicedToArray(_useState11, 2),
      start = _useState12[0],
      setStartDate = _useState12[1];

  var _useState13 = (0,react__WEBPACK_IMPORTED_MODULE_18__.useState)(new Date()),
      _useState14 = _slicedToArray(_useState13, 2),
      end = _useState14[0],
      setEndDate = _useState14[1];

  var handleClose = function handleClose() {
    return setShow(false);
  };

  var handleShow = function handleShow() {
    return setShow(true);
  };

  (0,react__WEBPACK_IMPORTED_MODULE_18__.useEffect)(function () {
    var _props$infos, _props$infosPatient, _props$infosPatient$s, _props$infosPatient2, _props$infosPatient2$;

    setElementsOpt.apply(void 0, _toConsumableArray(props === null || props === void 0 ? void 0 : (_props$infos = props.infos) === null || _props$infos === void 0 ? void 0 : _props$infos.suggestionsByBlock));
    setStartDate(new Date((props === null || props === void 0 ? void 0 : (_props$infosPatient = props.infosPatient) === null || _props$infosPatient === void 0 ? void 0 : (_props$infosPatient$s = _props$infosPatient.start) === null || _props$infosPatient$s === void 0 ? void 0 : _props$infosPatient$s.timestamp) * 1000).toJSON());
    setEndDate(new Date((props === null || props === void 0 ? void 0 : (_props$infosPatient2 = props.infosPatient) === null || _props$infosPatient2 === void 0 ? void 0 : (_props$infosPatient2$ = _props$infosPatient2.end) === null || _props$infosPatient2$ === void 0 ? void 0 : _props$infosPatient2$.timestamp) * 1000).toJSON());
  }, []);
  console.log(new Date((props === null || props === void 0 ? void 0 : (_props$infosPatient3 = props.infosPatient) === null || _props$infosPatient3 === void 0 ? void 0 : (_props$infosPatient3$ = _props$infosPatient3.end) === null || _props$infosPatient3$ === void 0 ? void 0 : _props$infosPatient3$.timestamp) * 1000).toJSON());

  var handleInputChange = function handleInputChange(e) {
    console.log(e, "target");
    setStartDate(e.target.value);
    setEndDate(e.target.value);
  }; //   new Date(1254088800 *1000)


  handleInputChange;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_18___default().createElement((react__WEBPACK_IMPORTED_MODULE_18___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_18___default().createElement(react_bootstrap_Button__WEBPACK_IMPORTED_MODULE_24__["default"], {
    onClick: handleShow
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_18___default().createElement(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_20__.FontAwesomeIcon, {
    icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_25__.faPlusCircle
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_18___default().createElement(react_bootstrap_Modal__WEBPACK_IMPORTED_MODULE_26__["default"], {
    show: show,
    onHide: handleClose
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_18___default().createElement(react_bootstrap_Modal__WEBPACK_IMPORTED_MODULE_26__["default"].Header, {
    closeButton: true
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_18___default().createElement(react_bootstrap_Modal__WEBPACK_IMPORTED_MODULE_26__["default"].Title, null, "Modifier une information")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_18___default().createElement(react_bootstrap_Modal__WEBPACK_IMPORTED_MODULE_26__["default"].Body, null, " ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_18___default().createElement((react__WEBPACK_IMPORTED_MODULE_18___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_18___default().createElement(react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_27__["default"].Label, {
    htmlFor: "inputValue"
  }, "Valeur"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_18___default().createElement(react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_27__["default"].Select, {
    size: "lg"
  }, elementsOpt === null || elementsOpt === void 0 ? void 0 : elementsOpt.map(function (el, id) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_18___default().createElement((react__WEBPACK_IMPORTED_MODULE_18___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_18___default().createElement("option", {
      key: id,
      selected: props.infosPatient.sugg.value === (el === null || el === void 0 ? void 0 : el.value)
    }, el === null || el === void 0 ? void 0 : el.value));
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_18___default().createElement(react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_27__["default"].Label, {
    htmlFor: "inputValue"
  }, "Valeur Sp\xE9cifique"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_18___default().createElement("input", {
    type: "text",
    id: "inputValueSp\xE9cifique",
    defaultValue: props === null || props === void 0 ? void 0 : (_props$infosPatient4 = props.infosPatient) === null || _props$infosPatient4 === void 0 ? void 0 : _props$infosPatient4.value,
    "aria-describedby": "valueSp\xE9cifique"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_18___default().createElement("p", null, "Les suggestions marqu\xE9es d'une \xE9toile (*) dans la liste ci-dessus demandent obligatoirement une valeur sp\xE9cifique."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_18___default().createElement(react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_27__["default"].Label, {
    htmlFor: "inputValue"
  }, "D\xE9but"), start ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_18___default().createElement(react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_27__["default"].Control, {
    type: "date",
    defaultValue: new Date(start).toJSON().slice(0, 10),
    placeholder: "Here edit the release date",
    onChange: function onChange(e) {
      return handleInputChange(e);
    },
    id: "inputValueSp\xE9cifique"
  }) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_18___default().createElement(react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_27__["default"].Control, {
    type: "date",
    placeholder: "Here edit the release date",
    onChange: function onChange(e) {
      return handleInputChange(e);
    },
    id: "inputValueSp\xE9cifique"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_18___default().createElement(react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_27__["default"].Label, {
    htmlFor: "inputValue"
  }, "Fin"), end ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_18___default().createElement(react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_27__["default"].Control, {
    type: "date",
    defaultValue: new Date(end).toJSON().slice(0, 10),
    id: "inputValueSp\xE9cifique"
  }) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_18___default().createElement(react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_27__["default"].Control, {
    type: "date",
    id: "inputValueSp\xE9cifique"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_18___default().createElement(react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_27__["default"].Label, {
    htmlFor: "inputValue"
  }, "Commentaire"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_18___default().createElement(react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_27__["default"].Control, {
    as: "textarea",
    rows: 3,
    defaultValue: props === null || props === void 0 ? void 0 : (_props$infosPatient5 = props.infosPatient) === null || _props$infosPatient5 === void 0 ? void 0 : _props$infosPatient5.comment
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_18___default().createElement(react_bootstrap_Modal__WEBPACK_IMPORTED_MODULE_26__["default"].Footer, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_18___default().createElement(react_bootstrap_Button__WEBPACK_IMPORTED_MODULE_24__["default"], {
    onClick: handleClose
  }, "Close"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_18___default().createElement(react_bootstrap_Button__WEBPACK_IMPORTED_MODULE_24__["default"], {
    onClick: handleClose
  }, "Save Changes"))));
} // render(<Modal />);


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ModalEditInfos);

/***/ }),

/***/ "./assets/component/Profile/Indicators.js":
/*!************************************************!*\
  !*** ./assets/component/Profile/Indicators.js ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
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

"use strict";
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






















var Medias = function Medias(props) {
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

  var sendMedias = function sendMedias() {
    console.log(acceptedFiles);
    var formData = new FormData();
    formData.append("id", id.toString());
  };

  var _useState11 = (0,react__WEBPACK_IMPORTED_MODULE_15__.useState)(null),
      _useState12 = _slicedToArray(_useState11, 2),
      value = _useState12[0],
      setValue = _useState12[1];

  function handleChange(newValue) {
    console.log(newValue);
    setValue(newValue);
  }

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_15___default().createElement((react__WEBPACK_IMPORTED_MODULE_15___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_15___default().createElement(_Dropzone__WEBPACK_IMPORTED_MODULE_18__["default"], {
    value: value,
    onChange: handleChange
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_15___default().createElement("div", {
    className: "row"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_15___default().createElement("button", {
    className: "btn-metis send-btn",
    onClick: function onClick(e) {
      return sendMedias();
    }
  }, "Envoyer")), listMedias && listMedias.data.length > 0 && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_15___default().createElement((react__WEBPACK_IMPORTED_MODULE_15___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_15___default().createElement("h6", null, "Liste de fichiers d\xE9j\xE0 pr\xE9sents"), listMedias === null || listMedias === void 0 ? void 0 : (_listMedias$data = listMedias.data) === null || _listMedias$data === void 0 ? void 0 : _listMedias$data.map(function (medias, id) {
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

"use strict";
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

"use strict";
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
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router/dist/index.js");
/* harmony import */ var _Editor_Reports__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./Editor-Reports */ "./assets/component/Profile/Editor-Reports.js");
















function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }







var Profile = function Profile() {
  var id = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_19__.useParams)().id;

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_15__.useState)((0,_hooks_useAuth__WEBPACK_IMPORTED_MODULE_16__["default"])()),
      _useState2 = _slicedToArray(_useState, 2),
      auth = _useState2[0],
      setAuth = _useState2[1];

  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_15__.useState)(id),
      _useState4 = _slicedToArray(_useState3, 2),
      idPatient = _useState4[0],
      setIdPatient = _useState4[1];

  var _useState5 = (0,react__WEBPACK_IMPORTED_MODULE_15__.useState)(false),
      _useState6 = _slicedToArray(_useState5, 2),
      isEdit = _useState6[0],
      setEdit = _useState6[1];

  var _useState7 = (0,react__WEBPACK_IMPORTED_MODULE_15__.useState)(false),
      _useState8 = _slicedToArray(_useState7, 2),
      toggle = _useState8[0],
      setToggle = _useState8[1];

  var formData = new FormData();
  formData.append("id", id.toString());
  var objPatient = {};

  var _useState9 = (0,react__WEBPACK_IMPORTED_MODULE_15__.useState)(null),
      _useState10 = _slicedToArray(_useState9, 2),
      informationPatient = _useState10[0],
      setInformation = _useState10[1];

  var _useState11 = (0,react__WEBPACK_IMPORTED_MODULE_15__.useState)(null),
      _useState12 = _slicedToArray(_useState11, 2),
      goals = _useState12[0],
      setGoals = _useState12[1];

  var _useState13 = (0,react__WEBPACK_IMPORTED_MODULE_15__.useState)(null),
      _useState14 = _slicedToArray(_useState13, 2),
      activities = _useState14[0],
      setActivities = _useState14[1]; // getFollowUpReportsGoals


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

  var editContent = function editContent(e) {
    console.log("e");
    setEdit(true);
  };

  console.log(informationPatient);
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
    }, r && r.activityType === 2 && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_15___default().createElement("h6", null, "Appel Sortant"), r && r.activityType === 4 && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_15___default().createElement("h6", null, "Appel Entrant"), r && r.deletedAt === null && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_15___default().createElement((react__WEBPACK_IMPORTED_MODULE_15___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_15___default().createElement("button", {
      onClick: function onClick() {
        setToggle(!toggle);
        r.isHightlight = toggle;
      }
    }, "Editer"), r.isHightlight === true && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_15___default().createElement(_Editor_Reports__WEBPACK_IMPORTED_MODULE_18__["default"], {
      contentText: r.content
    }), r.isHightlight === false && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_15___default().createElement("div", {
      className: "mt-4",
      dangerouslySetInnerHTML: {
        __html: r.content
      }
    }), r.isHightlight === null && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_15___default().createElement("div", {
      className: "mt-4",
      dangerouslySetInnerHTML: {
        __html: r.content
      }
    })));
  }))));
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Profile);

/***/ }),

/***/ "./assets/component/RequireAuth.js":
/*!*****************************************!*\
  !*** ./assets/component/RequireAuth.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
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

"use strict";
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

"use strict";
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

"use strict";
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

"use strict";
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

"use strict";
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

"use strict";
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

"use strict";
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

"use strict";
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

"use strict";
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

"use strict";
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

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./node_modules/moment/locale sync recursive ^\\.\\/.*$":
/*!***************************************************!*\
  !*** ./node_modules/moment/locale/ sync ^\.\/.*$ ***!
  \***************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var map = {
	"./af": "./node_modules/moment/locale/af.js",
	"./af.js": "./node_modules/moment/locale/af.js",
	"./ar": "./node_modules/moment/locale/ar.js",
	"./ar-dz": "./node_modules/moment/locale/ar-dz.js",
	"./ar-dz.js": "./node_modules/moment/locale/ar-dz.js",
	"./ar-kw": "./node_modules/moment/locale/ar-kw.js",
	"./ar-kw.js": "./node_modules/moment/locale/ar-kw.js",
	"./ar-ly": "./node_modules/moment/locale/ar-ly.js",
	"./ar-ly.js": "./node_modules/moment/locale/ar-ly.js",
	"./ar-ma": "./node_modules/moment/locale/ar-ma.js",
	"./ar-ma.js": "./node_modules/moment/locale/ar-ma.js",
	"./ar-sa": "./node_modules/moment/locale/ar-sa.js",
	"./ar-sa.js": "./node_modules/moment/locale/ar-sa.js",
	"./ar-tn": "./node_modules/moment/locale/ar-tn.js",
	"./ar-tn.js": "./node_modules/moment/locale/ar-tn.js",
	"./ar.js": "./node_modules/moment/locale/ar.js",
	"./az": "./node_modules/moment/locale/az.js",
	"./az.js": "./node_modules/moment/locale/az.js",
	"./be": "./node_modules/moment/locale/be.js",
	"./be.js": "./node_modules/moment/locale/be.js",
	"./bg": "./node_modules/moment/locale/bg.js",
	"./bg.js": "./node_modules/moment/locale/bg.js",
	"./bm": "./node_modules/moment/locale/bm.js",
	"./bm.js": "./node_modules/moment/locale/bm.js",
	"./bn": "./node_modules/moment/locale/bn.js",
	"./bn-bd": "./node_modules/moment/locale/bn-bd.js",
	"./bn-bd.js": "./node_modules/moment/locale/bn-bd.js",
	"./bn.js": "./node_modules/moment/locale/bn.js",
	"./bo": "./node_modules/moment/locale/bo.js",
	"./bo.js": "./node_modules/moment/locale/bo.js",
	"./br": "./node_modules/moment/locale/br.js",
	"./br.js": "./node_modules/moment/locale/br.js",
	"./bs": "./node_modules/moment/locale/bs.js",
	"./bs.js": "./node_modules/moment/locale/bs.js",
	"./ca": "./node_modules/moment/locale/ca.js",
	"./ca.js": "./node_modules/moment/locale/ca.js",
	"./cs": "./node_modules/moment/locale/cs.js",
	"./cs.js": "./node_modules/moment/locale/cs.js",
	"./cv": "./node_modules/moment/locale/cv.js",
	"./cv.js": "./node_modules/moment/locale/cv.js",
	"./cy": "./node_modules/moment/locale/cy.js",
	"./cy.js": "./node_modules/moment/locale/cy.js",
	"./da": "./node_modules/moment/locale/da.js",
	"./da.js": "./node_modules/moment/locale/da.js",
	"./de": "./node_modules/moment/locale/de.js",
	"./de-at": "./node_modules/moment/locale/de-at.js",
	"./de-at.js": "./node_modules/moment/locale/de-at.js",
	"./de-ch": "./node_modules/moment/locale/de-ch.js",
	"./de-ch.js": "./node_modules/moment/locale/de-ch.js",
	"./de.js": "./node_modules/moment/locale/de.js",
	"./dv": "./node_modules/moment/locale/dv.js",
	"./dv.js": "./node_modules/moment/locale/dv.js",
	"./el": "./node_modules/moment/locale/el.js",
	"./el.js": "./node_modules/moment/locale/el.js",
	"./en-au": "./node_modules/moment/locale/en-au.js",
	"./en-au.js": "./node_modules/moment/locale/en-au.js",
	"./en-ca": "./node_modules/moment/locale/en-ca.js",
	"./en-ca.js": "./node_modules/moment/locale/en-ca.js",
	"./en-gb": "./node_modules/moment/locale/en-gb.js",
	"./en-gb.js": "./node_modules/moment/locale/en-gb.js",
	"./en-ie": "./node_modules/moment/locale/en-ie.js",
	"./en-ie.js": "./node_modules/moment/locale/en-ie.js",
	"./en-il": "./node_modules/moment/locale/en-il.js",
	"./en-il.js": "./node_modules/moment/locale/en-il.js",
	"./en-in": "./node_modules/moment/locale/en-in.js",
	"./en-in.js": "./node_modules/moment/locale/en-in.js",
	"./en-nz": "./node_modules/moment/locale/en-nz.js",
	"./en-nz.js": "./node_modules/moment/locale/en-nz.js",
	"./en-sg": "./node_modules/moment/locale/en-sg.js",
	"./en-sg.js": "./node_modules/moment/locale/en-sg.js",
	"./eo": "./node_modules/moment/locale/eo.js",
	"./eo.js": "./node_modules/moment/locale/eo.js",
	"./es": "./node_modules/moment/locale/es.js",
	"./es-do": "./node_modules/moment/locale/es-do.js",
	"./es-do.js": "./node_modules/moment/locale/es-do.js",
	"./es-mx": "./node_modules/moment/locale/es-mx.js",
	"./es-mx.js": "./node_modules/moment/locale/es-mx.js",
	"./es-us": "./node_modules/moment/locale/es-us.js",
	"./es-us.js": "./node_modules/moment/locale/es-us.js",
	"./es.js": "./node_modules/moment/locale/es.js",
	"./et": "./node_modules/moment/locale/et.js",
	"./et.js": "./node_modules/moment/locale/et.js",
	"./eu": "./node_modules/moment/locale/eu.js",
	"./eu.js": "./node_modules/moment/locale/eu.js",
	"./fa": "./node_modules/moment/locale/fa.js",
	"./fa.js": "./node_modules/moment/locale/fa.js",
	"./fi": "./node_modules/moment/locale/fi.js",
	"./fi.js": "./node_modules/moment/locale/fi.js",
	"./fil": "./node_modules/moment/locale/fil.js",
	"./fil.js": "./node_modules/moment/locale/fil.js",
	"./fo": "./node_modules/moment/locale/fo.js",
	"./fo.js": "./node_modules/moment/locale/fo.js",
	"./fr": "./node_modules/moment/locale/fr.js",
	"./fr-ca": "./node_modules/moment/locale/fr-ca.js",
	"./fr-ca.js": "./node_modules/moment/locale/fr-ca.js",
	"./fr-ch": "./node_modules/moment/locale/fr-ch.js",
	"./fr-ch.js": "./node_modules/moment/locale/fr-ch.js",
	"./fr.js": "./node_modules/moment/locale/fr.js",
	"./fy": "./node_modules/moment/locale/fy.js",
	"./fy.js": "./node_modules/moment/locale/fy.js",
	"./ga": "./node_modules/moment/locale/ga.js",
	"./ga.js": "./node_modules/moment/locale/ga.js",
	"./gd": "./node_modules/moment/locale/gd.js",
	"./gd.js": "./node_modules/moment/locale/gd.js",
	"./gl": "./node_modules/moment/locale/gl.js",
	"./gl.js": "./node_modules/moment/locale/gl.js",
	"./gom-deva": "./node_modules/moment/locale/gom-deva.js",
	"./gom-deva.js": "./node_modules/moment/locale/gom-deva.js",
	"./gom-latn": "./node_modules/moment/locale/gom-latn.js",
	"./gom-latn.js": "./node_modules/moment/locale/gom-latn.js",
	"./gu": "./node_modules/moment/locale/gu.js",
	"./gu.js": "./node_modules/moment/locale/gu.js",
	"./he": "./node_modules/moment/locale/he.js",
	"./he.js": "./node_modules/moment/locale/he.js",
	"./hi": "./node_modules/moment/locale/hi.js",
	"./hi.js": "./node_modules/moment/locale/hi.js",
	"./hr": "./node_modules/moment/locale/hr.js",
	"./hr.js": "./node_modules/moment/locale/hr.js",
	"./hu": "./node_modules/moment/locale/hu.js",
	"./hu.js": "./node_modules/moment/locale/hu.js",
	"./hy-am": "./node_modules/moment/locale/hy-am.js",
	"./hy-am.js": "./node_modules/moment/locale/hy-am.js",
	"./id": "./node_modules/moment/locale/id.js",
	"./id.js": "./node_modules/moment/locale/id.js",
	"./is": "./node_modules/moment/locale/is.js",
	"./is.js": "./node_modules/moment/locale/is.js",
	"./it": "./node_modules/moment/locale/it.js",
	"./it-ch": "./node_modules/moment/locale/it-ch.js",
	"./it-ch.js": "./node_modules/moment/locale/it-ch.js",
	"./it.js": "./node_modules/moment/locale/it.js",
	"./ja": "./node_modules/moment/locale/ja.js",
	"./ja.js": "./node_modules/moment/locale/ja.js",
	"./jv": "./node_modules/moment/locale/jv.js",
	"./jv.js": "./node_modules/moment/locale/jv.js",
	"./ka": "./node_modules/moment/locale/ka.js",
	"./ka.js": "./node_modules/moment/locale/ka.js",
	"./kk": "./node_modules/moment/locale/kk.js",
	"./kk.js": "./node_modules/moment/locale/kk.js",
	"./km": "./node_modules/moment/locale/km.js",
	"./km.js": "./node_modules/moment/locale/km.js",
	"./kn": "./node_modules/moment/locale/kn.js",
	"./kn.js": "./node_modules/moment/locale/kn.js",
	"./ko": "./node_modules/moment/locale/ko.js",
	"./ko.js": "./node_modules/moment/locale/ko.js",
	"./ku": "./node_modules/moment/locale/ku.js",
	"./ku.js": "./node_modules/moment/locale/ku.js",
	"./ky": "./node_modules/moment/locale/ky.js",
	"./ky.js": "./node_modules/moment/locale/ky.js",
	"./lb": "./node_modules/moment/locale/lb.js",
	"./lb.js": "./node_modules/moment/locale/lb.js",
	"./lo": "./node_modules/moment/locale/lo.js",
	"./lo.js": "./node_modules/moment/locale/lo.js",
	"./lt": "./node_modules/moment/locale/lt.js",
	"./lt.js": "./node_modules/moment/locale/lt.js",
	"./lv": "./node_modules/moment/locale/lv.js",
	"./lv.js": "./node_modules/moment/locale/lv.js",
	"./me": "./node_modules/moment/locale/me.js",
	"./me.js": "./node_modules/moment/locale/me.js",
	"./mi": "./node_modules/moment/locale/mi.js",
	"./mi.js": "./node_modules/moment/locale/mi.js",
	"./mk": "./node_modules/moment/locale/mk.js",
	"./mk.js": "./node_modules/moment/locale/mk.js",
	"./ml": "./node_modules/moment/locale/ml.js",
	"./ml.js": "./node_modules/moment/locale/ml.js",
	"./mn": "./node_modules/moment/locale/mn.js",
	"./mn.js": "./node_modules/moment/locale/mn.js",
	"./mr": "./node_modules/moment/locale/mr.js",
	"./mr.js": "./node_modules/moment/locale/mr.js",
	"./ms": "./node_modules/moment/locale/ms.js",
	"./ms-my": "./node_modules/moment/locale/ms-my.js",
	"./ms-my.js": "./node_modules/moment/locale/ms-my.js",
	"./ms.js": "./node_modules/moment/locale/ms.js",
	"./mt": "./node_modules/moment/locale/mt.js",
	"./mt.js": "./node_modules/moment/locale/mt.js",
	"./my": "./node_modules/moment/locale/my.js",
	"./my.js": "./node_modules/moment/locale/my.js",
	"./nb": "./node_modules/moment/locale/nb.js",
	"./nb.js": "./node_modules/moment/locale/nb.js",
	"./ne": "./node_modules/moment/locale/ne.js",
	"./ne.js": "./node_modules/moment/locale/ne.js",
	"./nl": "./node_modules/moment/locale/nl.js",
	"./nl-be": "./node_modules/moment/locale/nl-be.js",
	"./nl-be.js": "./node_modules/moment/locale/nl-be.js",
	"./nl.js": "./node_modules/moment/locale/nl.js",
	"./nn": "./node_modules/moment/locale/nn.js",
	"./nn.js": "./node_modules/moment/locale/nn.js",
	"./oc-lnc": "./node_modules/moment/locale/oc-lnc.js",
	"./oc-lnc.js": "./node_modules/moment/locale/oc-lnc.js",
	"./pa-in": "./node_modules/moment/locale/pa-in.js",
	"./pa-in.js": "./node_modules/moment/locale/pa-in.js",
	"./pl": "./node_modules/moment/locale/pl.js",
	"./pl.js": "./node_modules/moment/locale/pl.js",
	"./pt": "./node_modules/moment/locale/pt.js",
	"./pt-br": "./node_modules/moment/locale/pt-br.js",
	"./pt-br.js": "./node_modules/moment/locale/pt-br.js",
	"./pt.js": "./node_modules/moment/locale/pt.js",
	"./ro": "./node_modules/moment/locale/ro.js",
	"./ro.js": "./node_modules/moment/locale/ro.js",
	"./ru": "./node_modules/moment/locale/ru.js",
	"./ru.js": "./node_modules/moment/locale/ru.js",
	"./sd": "./node_modules/moment/locale/sd.js",
	"./sd.js": "./node_modules/moment/locale/sd.js",
	"./se": "./node_modules/moment/locale/se.js",
	"./se.js": "./node_modules/moment/locale/se.js",
	"./si": "./node_modules/moment/locale/si.js",
	"./si.js": "./node_modules/moment/locale/si.js",
	"./sk": "./node_modules/moment/locale/sk.js",
	"./sk.js": "./node_modules/moment/locale/sk.js",
	"./sl": "./node_modules/moment/locale/sl.js",
	"./sl.js": "./node_modules/moment/locale/sl.js",
	"./sq": "./node_modules/moment/locale/sq.js",
	"./sq.js": "./node_modules/moment/locale/sq.js",
	"./sr": "./node_modules/moment/locale/sr.js",
	"./sr-cyrl": "./node_modules/moment/locale/sr-cyrl.js",
	"./sr-cyrl.js": "./node_modules/moment/locale/sr-cyrl.js",
	"./sr.js": "./node_modules/moment/locale/sr.js",
	"./ss": "./node_modules/moment/locale/ss.js",
	"./ss.js": "./node_modules/moment/locale/ss.js",
	"./sv": "./node_modules/moment/locale/sv.js",
	"./sv.js": "./node_modules/moment/locale/sv.js",
	"./sw": "./node_modules/moment/locale/sw.js",
	"./sw.js": "./node_modules/moment/locale/sw.js",
	"./ta": "./node_modules/moment/locale/ta.js",
	"./ta.js": "./node_modules/moment/locale/ta.js",
	"./te": "./node_modules/moment/locale/te.js",
	"./te.js": "./node_modules/moment/locale/te.js",
	"./tet": "./node_modules/moment/locale/tet.js",
	"./tet.js": "./node_modules/moment/locale/tet.js",
	"./tg": "./node_modules/moment/locale/tg.js",
	"./tg.js": "./node_modules/moment/locale/tg.js",
	"./th": "./node_modules/moment/locale/th.js",
	"./th.js": "./node_modules/moment/locale/th.js",
	"./tk": "./node_modules/moment/locale/tk.js",
	"./tk.js": "./node_modules/moment/locale/tk.js",
	"./tl-ph": "./node_modules/moment/locale/tl-ph.js",
	"./tl-ph.js": "./node_modules/moment/locale/tl-ph.js",
	"./tlh": "./node_modules/moment/locale/tlh.js",
	"./tlh.js": "./node_modules/moment/locale/tlh.js",
	"./tr": "./node_modules/moment/locale/tr.js",
	"./tr.js": "./node_modules/moment/locale/tr.js",
	"./tzl": "./node_modules/moment/locale/tzl.js",
	"./tzl.js": "./node_modules/moment/locale/tzl.js",
	"./tzm": "./node_modules/moment/locale/tzm.js",
	"./tzm-latn": "./node_modules/moment/locale/tzm-latn.js",
	"./tzm-latn.js": "./node_modules/moment/locale/tzm-latn.js",
	"./tzm.js": "./node_modules/moment/locale/tzm.js",
	"./ug-cn": "./node_modules/moment/locale/ug-cn.js",
	"./ug-cn.js": "./node_modules/moment/locale/ug-cn.js",
	"./uk": "./node_modules/moment/locale/uk.js",
	"./uk.js": "./node_modules/moment/locale/uk.js",
	"./ur": "./node_modules/moment/locale/ur.js",
	"./ur.js": "./node_modules/moment/locale/ur.js",
	"./uz": "./node_modules/moment/locale/uz.js",
	"./uz-latn": "./node_modules/moment/locale/uz-latn.js",
	"./uz-latn.js": "./node_modules/moment/locale/uz-latn.js",
	"./uz.js": "./node_modules/moment/locale/uz.js",
	"./vi": "./node_modules/moment/locale/vi.js",
	"./vi.js": "./node_modules/moment/locale/vi.js",
	"./x-pseudo": "./node_modules/moment/locale/x-pseudo.js",
	"./x-pseudo.js": "./node_modules/moment/locale/x-pseudo.js",
	"./yo": "./node_modules/moment/locale/yo.js",
	"./yo.js": "./node_modules/moment/locale/yo.js",
	"./zh-cn": "./node_modules/moment/locale/zh-cn.js",
	"./zh-cn.js": "./node_modules/moment/locale/zh-cn.js",
	"./zh-hk": "./node_modules/moment/locale/zh-hk.js",
	"./zh-hk.js": "./node_modules/moment/locale/zh-hk.js",
	"./zh-mo": "./node_modules/moment/locale/zh-mo.js",
	"./zh-mo.js": "./node_modules/moment/locale/zh-mo.js",
	"./zh-tw": "./node_modules/moment/locale/zh-tw.js",
	"./zh-tw.js": "./node_modules/moment/locale/zh-tw.js"
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	if(!__webpack_require__.o(map, req)) {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return map[req];
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "./node_modules/moment/locale sync recursive ^\\.\\/.*$";

/***/ }),

/***/ "./assets/images/5a94e34b4c36e28de4e704f8c2d1c39a79e91b5d.png":
/*!********************************************************************!*\
  !*** ./assets/images/5a94e34b4c36e28de4e704f8c2d1c39a79e91b5d.png ***!
  \********************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "images/5a94e34b4c36e28de4e704f8c2d1c39a79e91b5d.ac343ce6.png";

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendors-node_modules_ckeditor_ckeditor5-build-classic_build_ckeditor_js-node_modules_ckeditor-23ffff","assets_styles_app_scss"], () => (__webpack_exec__("./assets/index.js")));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hc3NldHMvYXBwLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9jb21wb25lbnQvQWRtaW4uanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2NvbXBvbmVudC9FZGl0b3IuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2NvbXBvbmVudC9Gb3JtX01lZXRSYXBwb3J0cy5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvY29tcG9uZW50L0hvbWUuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2NvbXBvbmVudC9MYXlvdXQuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2NvbXBvbmVudC9MaW5rUGFnZS5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvY29tcG9uZW50L0xvZ2luLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9jb21wb25lbnQvTG91bmdlLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9jb21wb25lbnQvTWVudS5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvY29tcG9uZW50L01pc3NpbmcuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2NvbXBvbmVudC9QYXRpZW50LmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9jb21wb25lbnQvUGF0aWVudHMuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2NvbXBvbmVudC9QZXJzaXN0TG9naW4uanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2NvbXBvbmVudC9Qb3N0cy5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvY29tcG9uZW50L1Byb2ZpbGUvQ29udGFjdHMuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2NvbXBvbmVudC9Qcm9maWxlL0Ryb3B6b25lLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9jb21wb25lbnQvUHJvZmlsZS9FZGl0b3ItUmVwb3J0cy5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvY29tcG9uZW50L1Byb2ZpbGUvRmljaGUvQmxvY2stSW5mb3MuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2NvbXBvbmVudC9Qcm9maWxlL0ZpY2hlL0ZpY2hlLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9jb21wb25lbnQvUHJvZmlsZS9GaWNoZS9Nb2RhbC1BZGQtSW5mb3MuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2NvbXBvbmVudC9Qcm9maWxlL0ZpY2hlL01vZGFsLUVkaXQtSW5mb3MuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2NvbXBvbmVudC9Qcm9maWxlL0luZGljYXRvcnMuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2NvbXBvbmVudC9Qcm9maWxlL01lZGlhcy5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvY29tcG9uZW50L1Byb2ZpbGUvUGxhY2VzLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9jb21wb25lbnQvUHJvZmlsZS9Qcm9maWxlLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9jb21wb25lbnQvUmVxdWlyZUF1dGguanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2NvbXBvbmVudC9TZWFyY2guanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2NvbXBvbmVudC9VbmF1dGhvcml6ZWQuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2NvbXBvbmVudC9Vc2Vycy5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvY29tcG9uZW50L2xpc3RfcmVwb3J0Q2FsbHMuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2NvbXBvbmVudC9saXN0X3JlcG9ydEdvYWxzLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9jb250ZXh0L0F1dGhQcm92aWRlci5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvaG9va3MvdXNlQXV0aC5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvaG9va3MvdXNlTG9nb3V0LmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9ob29rcy91c2VSZWZyZXNoVG9rZW4uanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2luZGV4LmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9zdHlsZXMvYXBwLnNjc3MiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvIHN5bmMgXlxcLlxcLy4qJCJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBpbXBvcnQgUmVnaXN0ZXIgZnJvbSBcIi4vY29tcG9uZW50cy9SZWdpc3RlclwiO1xuaW1wb3J0IFJlYWN0LCB7IHVzZUNvbnRleHQsIHVzZURlYnVnVmFsdWUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBMb2dpbiBmcm9tIFwiLi9jb21wb25lbnQvTG9naW5cIjtcbmltcG9ydCBIb21lIGZyb20gXCIuL2NvbXBvbmVudC9Ib21lXCI7XG5pbXBvcnQgTGF5b3V0IGZyb20gXCIuL2NvbXBvbmVudC9MYXlvdXRcIjtcbmltcG9ydCBFZGl0b3IgZnJvbSBcIi4vY29tcG9uZW50L0VkaXRvclwiO1xuaW1wb3J0IEFkbWluIGZyb20gXCIuL2NvbXBvbmVudC9BZG1pblwiO1xuaW1wb3J0IE1pc3NpbmcgZnJvbSBcIi4vY29tcG9uZW50L01pc3NpbmdcIjtcbmltcG9ydCBVbmF1dGhvcml6ZWQgZnJvbSBcIi4vY29tcG9uZW50L1VuYXV0aG9yaXplZFwiO1xuaW1wb3J0IExvdW5nZSBmcm9tIFwiLi9jb21wb25lbnQvTG91bmdlXCI7XG5pbXBvcnQgTGlua1BhZ2UgZnJvbSBcIi4vY29tcG9uZW50L0xpbmtQYWdlXCI7XG5pbXBvcnQgUmVxdWlyZUF1dGggZnJvbSBcIi4vY29tcG9uZW50L1JlcXVpcmVBdXRoXCI7XG5pbXBvcnQgUGVyc2lzdExvZ2luIGZyb20gXCIuL2NvbXBvbmVudC9QZXJzaXN0TG9naW5cIjtcbmltcG9ydCB7IFJvdXRlcywgUm91dGUgfSBmcm9tIFwicmVhY3Qtcm91dGVyLWRvbVwiO1xuXG5pbXBvcnQgUGF0aWVudHMgZnJvbSBcIi4vY29tcG9uZW50L1BhdGllbnRzXCI7XG5pbXBvcnQgUmVwcG9ydENhbGxzIGZyb20gXCIuL2NvbXBvbmVudC9saXN0X3JlcG9ydENhbGxzXCI7XG5pbXBvcnQgUmVwcG9ydEdvYWxzIGZyb20gXCIuL2NvbXBvbmVudC9saXN0X3JlcG9ydEdvYWxzXCI7XG5cbmltcG9ydCBQYXRpZW50IGZyb20gXCIuL2NvbXBvbmVudC9QYXRpZW50XCI7XG5pbXBvcnQgXCIuL3N0eWxlcy9hcHAuc2Nzc1wiO1xuXG5jb25zdCBST0xFUyA9IHtcbiAgVXNlcjogXCJST0xFX1VTRVJcIixcbiAgQWRtaW46IFwiUk9MRV9BRE1JTlwiLFxufTtcblxuZnVuY3Rpb24gQXBwKCkge1xuICByZXR1cm4gKFxuICAgIDxSb3V0ZXM+XG4gICAgICA8Um91dGUgcGF0aD1cIi9cIiBlbGVtZW50PXs8TGF5b3V0IC8+fT5cbiAgICAgICAgPFJvdXRlIHBhdGg9XCJjb25uZWN0XCIgZWxlbWVudD17PExvZ2luIC8+fSAvPlxuICAgICAgICA8Um91dGUgcGF0aD1cImxpbmtwYWdlXCIgZWxlbWVudD17PExpbmtQYWdlIC8+fSAvPlxuICAgICAgICA8Um91dGUgcGF0aD1cInVuYXV0aG9yaXplZFwiIGVsZW1lbnQ9ezxVbmF1dGhvcml6ZWQgLz59IC8+XG5cbiAgICAgICAgPFJvdXRlIGVsZW1lbnQ9ezxQZXJzaXN0TG9naW4gLz59PlxuICAgICAgICAgIDxSb3V0ZSBlbGVtZW50PXs8UmVxdWlyZUF1dGggYWxsb3dlZFJvbGVzPXtbUk9MRVMuVXNlcl19IC8+fT5cbiAgICAgICAgICAgIDxSb3V0ZSBwYXRoPVwiL1wiIGVsZW1lbnQ9ezxIb21lIC8+fT48L1JvdXRlPlxuICAgICAgICAgIDwvUm91dGU+XG5cbiAgICAgICAgICA8Um91dGUgZWxlbWVudD17PFJlcXVpcmVBdXRoIGFsbG93ZWRSb2xlcz17W1JPTEVTLkFkbWluXX0gLz59PlxuICAgICAgICAgICAgPFJvdXRlIHBhdGg9XCJwYXRpZW50c1wiIGVsZW1lbnQ9ezxQYXRpZW50cyAvPn0gLz5cbiAgICAgICAgICAgIDxSb3V0ZSBwYXRoPVwiOmlkXCIgZWxlbWVudD17PFBhdGllbnQgLz59IC8+XG4gICAgICAgICAgPC9Sb3V0ZT5cblxuICAgICAgICAgIDxSb3V0ZSBlbGVtZW50PXs8UmVxdWlyZUF1dGggYWxsb3dlZFJvbGVzPXtbUk9MRVMuQWRtaW5dfSAvPn0+XG4gICAgICAgICAgICA8Um91dGUgcGF0aD1cImFkbWluXCIgZWxlbWVudD17PEFkbWluIC8+fSAvPlxuICAgICAgICAgIDwvUm91dGU+XG4gICAgICAgIDwvUm91dGU+XG5cbiAgICAgICAgPFJvdXRlIHBhdGg9XCIqXCIgZWxlbWVudD17PE1pc3NpbmcgLz59IC8+XG4gICAgICA8L1JvdXRlPlxuICAgIDwvUm91dGVzPlxuICApO1xufVxuXG5leHBvcnQgZGVmYXVsdCBBcHA7XG4iLCJpbXBvcnQgUmVhY3QsIHsgdXNlQ29udGV4dCwgdXNlRGVidWdWYWx1ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyBMaW5rIH0gZnJvbSBcInJlYWN0LXJvdXRlci1kb21cIjtcclxuaW1wb3J0IFVzZXJzIGZyb20gXCIuL1VzZXJzXCI7XHJcblxyXG5jb25zdCBBZG1pbiA9ICgpID0+IHtcclxuICByZXR1cm4gKFxyXG4gICAgPHNlY3Rpb24+XHJcbiAgICAgIDxoMT5BZG1pbnMgUGFnZTwvaDE+XHJcbiAgICAgIDxiciAvPlxyXG4gICAgICA8VXNlcnMgLz5cclxuICAgICAgPGJyIC8+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleEdyb3dcIj5cclxuICAgICAgICA8TGluayB0bz1cIi9cIj5Ib21lPC9MaW5rPlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvc2VjdGlvbj5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgQWRtaW47XHJcbiIsImltcG9ydCB7IExpbmsgfSBmcm9tIFwicmVhY3Qtcm91dGVyLWRvbVwiO1xyXG5cclxuY29uc3QgRWRpdG9yID0gKCkgPT4ge1xyXG4gIHJldHVybiAoXHJcbiAgICA8c2VjdGlvbj5cclxuICAgICAgPGgxPkVkaXRvcnMgUGFnZTwvaDE+XHJcbiAgICAgIDxiciAvPlxyXG4gICAgICA8cD5Zb3UgbXVzdCBoYXZlIGJlZW4gYXNzaWduZWQgYW4gRWRpdG9yIHJvbGUuPC9wPlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXhHcm93XCI+XHJcbiAgICAgICAgPExpbmsgdG89XCIvXCI+SG9tZTwvTGluaz5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L3NlY3Rpb24+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IEVkaXRvcjtcclxuIiwiaW1wb3J0IFJlYWN0LCB7IHVzZUNvbnRleHQsIHVzZURlYnVnVmFsdWUgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgdXNlTmF2aWdhdGUsIExpbmsgfSBmcm9tIFwicmVhY3Qtcm91dGVyLWRvbVwiO1xyXG5pbXBvcnQgdXNlTG9nb3V0IGZyb20gXCIuLi9ob29rcy91c2VMb2dvdXRcIjtcclxuaW1wb3J0IEJ1dHRvbiBmcm9tIFwicmVhY3QtYm9vdHN0cmFwL0J1dHRvblwiO1xyXG5pbXBvcnQgQ29udGFpbmVyIGZyb20gXCJyZWFjdC1ib290c3RyYXAvQ29udGFpbmVyXCI7XHJcbmltcG9ydCBGb3JtIGZyb20gXCJyZWFjdC1ib290c3RyYXAvRm9ybVwiO1xyXG5pbXBvcnQgTmF2IGZyb20gXCJyZWFjdC1ib290c3RyYXAvTmF2XCI7XHJcbmltcG9ydCBOYXZiYXIgZnJvbSBcInJlYWN0LWJvb3RzdHJhcC9OYXZiYXJcIjtcclxuaW1wb3J0IE5hdkRyb3Bkb3duIGZyb20gXCJyZWFjdC1ib290c3RyYXAvTmF2RHJvcGRvd25cIjtcclxuY29uc3QgRm9ybV9NZWV0UmFwcG9ydHMgPSAoKSA9PiB7XHJcbiAgY29uc3QgbmF2aWdhdGUgPSB1c2VOYXZpZ2F0ZSgpO1xyXG4gIGNvbnN0IGxvZ291dCA9IHVzZUxvZ291dCgpO1xyXG5cclxuICBjb25zdCBzaWduT3V0ID0gYXN5bmMgKCkgPT4ge1xyXG4gICAgYXdhaXQgbG9nb3V0KCk7XHJcbiAgICBuYXZpZ2F0ZShcIi9jb25uZWN0XCIpO1xyXG4gIH07XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8PlxyXG4gICAgICA8aDM+UmFwcG9ydCBkZSByZW5jb250cmU8L2gzPlxyXG4gICAgICA8Rm9ybT5cclxuICAgICAgICA8Rm9ybS5Hcm91cCBjbGFzc05hbWU9XCJtYi0zXCIgY29udHJvbElkPVwiZm9ybUJhc2ljRW1haWxcIj5cclxuICAgICAgICAgIDxGb3JtLkNvbnRyb2wgdHlwZT1cImVtYWlsXCIgcGxhY2Vob2xkZXI9XCJUYXBleiBsZSBub21cIiAvPlxyXG4gICAgICAgIDwvRm9ybS5Hcm91cD5cclxuXHJcbiAgICAgICAgPEZvcm0uR3JvdXAgY2xhc3NOYW1lPVwibWItM1wiIGNvbnRyb2xJZD1cImZvcm1CYXNpY1Bhc3N3b3JkXCI+XHJcbiAgICAgICAgICA8Rm9ybS5Db250cm9sIHR5cGU9XCJ0ZXh0XCIgcGxhY2Vob2xkZXI9XCJUYXBleiBsZSBwcsOpbm9tXCIgLz5cclxuICAgICAgICA8L0Zvcm0uR3JvdXA+XHJcblxyXG4gICAgICAgIDxGb3JtLkdyb3VwIGNsYXNzTmFtZT1cIm1iLTNcIiBjb250cm9sSWQ9XCJmb3JtQmFzaWNQYXNzd29yZFwiPlxyXG4gICAgICAgICAgPEZvcm0uQ29udHJvbCB0eXBlPVwidGV4dFwiIHBsYWNlaG9sZGVyPVwiVGFwZXogbGUgc3Vybm9tXCIgLz5cclxuICAgICAgICA8L0Zvcm0uR3JvdXA+XHJcblxyXG4gICAgICAgIDxGb3JtLlNlbGVjdCBhcmlhLWxhYmVsPVwiRGVmYXVsdCBzZWxlY3QgZXhhbXBsZVwiPlxyXG4gICAgICAgICAgPG9wdGlvbj5DaG9pc3Npc2V6IHZvdHJlIGFudGVubmU8L29wdGlvbj5cclxuICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCIxXCI+TGnDqGdlPC9vcHRpb24+XHJcbiAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiMlwiPkJydXhlbGxlczwvb3B0aW9uPlxyXG4gICAgICAgIDwvRm9ybS5TZWxlY3Q+XHJcblxyXG4gICAgICAgIDxCdXR0b24gdmFyaWFudD1cInByaW1hcnlcIiB0eXBlPVwic3VibWl0XCIgY2xhc3NOYW1lPVwiYnRuLW1ldGlzIG10LTNcIj5cclxuICAgICAgICAgIFN1Ym1pdFxyXG4gICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICA8L0Zvcm0+XHJcbiAgICA8Lz5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgRm9ybV9NZWV0UmFwcG9ydHM7XHJcbiIsImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlQ29udGV4dCwgdXNlRGVidWdWYWx1ZSwgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IHVzZU5hdmlnYXRlLCBMaW5rIH0gZnJvbSBcInJlYWN0LXJvdXRlci1kb21cIjtcclxuaW1wb3J0IHVzZUxvZ291dCBmcm9tIFwiLi4vaG9va3MvdXNlTG9nb3V0XCI7XHJcbmltcG9ydCB7IEZvbnRBd2Vzb21lSWNvbiB9IGZyb20gXCJAZm9ydGF3ZXNvbWUvcmVhY3QtZm9udGF3ZXNvbWVcIjtcclxuaW1wb3J0IHsgZmFBcnJvd1JpZ2h0IH0gZnJvbSBcIkBmb3J0YXdlc29tZS9mcmVlLXNvbGlkLXN2Zy1pY29uc1wiO1xyXG5pbXBvcnQgTWVudSBmcm9tIFwiLi9NZW51XCI7XHJcbmltcG9ydCBGb3JtX01lZXRSYXBwb3J0cyBmcm9tIFwiLi9Gb3JtX01lZXRSYXBwb3J0c1wiO1xyXG5pbXBvcnQgUmVwcG9ydENhbGxzIGZyb20gXCIuL2xpc3RfcmVwb3J0Q2FsbHNcIjtcclxuaW1wb3J0IFJlcHBvcnRHb2FscyBmcm9tIFwiLi9saXN0X3JlcG9ydEdvYWxzXCI7XHJcblxyXG5jb25zdCBIb21lID0gKCkgPT4ge1xyXG4gIGNvbnN0IG5hdmlnYXRlID0gdXNlTmF2aWdhdGUoKTtcclxuICBjb25zdCBsb2dvdXQgPSB1c2VMb2dvdXQoKTtcclxuXHJcbiAgY29uc3QgW3JlcG9ydE1lZXQsIHNldFJlcG9ydE1lZXRdID0gdXNlU3RhdGUoMCk7XHJcbiAgY29uc3QgW3JlcG9ydENhbGxzLCBzZXRSZXBvcnRDYWxsc10gPSB1c2VTdGF0ZSgwKTtcclxuICBjb25zdCBbcmVwb3J0R29hbHMsIHNldFJlcG9ydEdvYWxzXSA9IHVzZVN0YXRlKDApO1xyXG5cclxuICBjb25zdCBzaWduT3V0ID0gYXN5bmMgKCkgPT4ge1xyXG4gICAgYXdhaXQgbG9nb3V0KCk7XHJcbiAgICBuYXZpZ2F0ZShcIi9jb25uZWN0XCIpO1xyXG4gIH07XHJcbiAgbGV0IHsgcGF0aCwgdXJsIH0gPSB1c2VOYXZpZ2F0ZSgpO1xyXG5cclxuICBjb25zdCBnb1RvUmVwcG9ydCA9ICgpID0+IHtcclxuICAgIGhpc3RvcnkucHVzaChcIi9nb2Fsc1wiKTtcclxuICB9O1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgc2V0UmVwb3J0TWVldCh0cnVlKTtcclxuICAgIHNldFJlcG9ydENhbGxzKGZhbHNlKTtcclxuICAgIHNldFJlcG9ydEdvYWxzKGZhbHNlKTtcclxuICB9LCBbXSk7XHJcblxyXG4gIGNvbnN0IG9uQ2xpY2tSZXBwb3J0TWVldCA9ICgpID0+IHtcclxuICAgIHNldFJlcG9ydE1lZXQodHJ1ZSk7XHJcbiAgICBzZXRSZXBvcnRDYWxscyhmYWxzZSk7XHJcbiAgICBzZXRSZXBvcnRHb2FscyhmYWxzZSk7XHJcbiAgfTtcclxuXHJcbiAgY29uc3Qgb25DbGlja1JlcHBvcnRDYWxscyA9ICgpID0+IHtcclxuICAgIHNldFJlcG9ydE1lZXQoZmFsc2UpO1xyXG4gICAgc2V0UmVwb3J0Q2FsbHModHJ1ZSk7XHJcbiAgICBzZXRSZXBvcnRHb2FscyhmYWxzZSk7XHJcbiAgfTtcclxuXHJcbiAgY29uc3Qgb25DbGlja1JlcHBvcnRHb2FscyA9ICgpID0+IHtcclxuICAgIHNldFJlcG9ydE1lZXQoZmFsc2UpO1xyXG4gICAgc2V0UmVwb3J0Q2FsbHMoZmFsc2UpO1xyXG4gICAgc2V0UmVwb3J0R29hbHModHJ1ZSk7XHJcbiAgfTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDw+XHJcbiAgICAgIDxNZW51IC8+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyLWhvbWUgcm93IG0tMFwiPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLXNtLTYgZC1mbGV4IGFsaWduLWl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNvbnRlbnQtY2VudGVyXCI+XHJcbiAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICA8aDM+QmllbnZlbnVlIHN1ciBNw6l0aXM8L2gzPlxyXG4gICAgICAgICAgICA8cD5DbGlxdWV6IGljaSBwb3VyIHZvcyByYXBwZWxzIG91IMOpZGl0ZXIgdW4gcGF0aWVudDo8L3A+XHJcblxyXG4gICAgICAgICAgICA8TGluayBvbkNsaWNrPXtvbkNsaWNrUmVwcG9ydE1lZXR9PlxyXG4gICAgICAgICAgICAgIDxGb250QXdlc29tZUljb24gaWNvbj17ZmFBcnJvd1JpZ2h0fSAvPiBSYXBwb3J0IGRlIHJlbmNvbnRyZVxyXG4gICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgIDxMaW5rIG9uQ2xpY2s9e29uQ2xpY2tSZXBwb3J0Q2FsbHN9PlxyXG4gICAgICAgICAgICAgIDxGb250QXdlc29tZUljb24gaWNvbj17ZmFBcnJvd1JpZ2h0fSAvPiBSYXBwb3J0IGQnYXBwZWxzXHJcbiAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgPExpbmsgb25DbGljaz17b25DbGlja1JlcHBvcnRHb2Fsc30+XHJcbiAgICAgICAgICAgICAgPEZvbnRBd2Vzb21lSWNvbiBpY29uPXtmYUFycm93UmlnaHR9IC8+IFJhcHBvcnQgZCdvYmplY3RpZnNcclxuICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLXNtLTYgZC1mbGV4IGFsaWduLWl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNvbnRlbnQtY2VudGVyIGNvbnRhaW5lci1yZXBwb3J0c1wiPlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzZXQtcmVwcG9ydHNcIj5cclxuICAgICAgICAgICAge3JlcG9ydE1lZXQgJiYgPEZvcm1fTWVldFJhcHBvcnRzIC8+fVxyXG4gICAgICAgICAgICB7cmVwb3J0Q2FsbHMgJiYgPFJlcHBvcnRHb2FscyAvPn1cclxuICAgICAgICAgICAge3JlcG9ydEdvYWxzICYmIDxSZXBwb3J0Q2FsbHMgLz59XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8Lz5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgSG9tZTtcclxuIiwiaW1wb3J0IFJlYWN0LCB7IHVzZUNvbnRleHQsIHVzZURlYnVnVmFsdWUgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgT3V0bGV0IH0gZnJvbSBcInJlYWN0LXJvdXRlci1kb21cIjtcclxuaW1wb3J0IE1lbnUgZnJvbSBcIi4vTWVudVwiO1xyXG5jb25zdCBMYXlvdXQgPSAoKSA9PiB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxtYWluIGNsYXNzTmFtZT1cIkFwcFwiPlxyXG4gICAgICA8T3V0bGV0IC8+XHJcbiAgICA8L21haW4+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IExheW91dDtcclxuIiwiaW1wb3J0IHsgTGluayB9IGZyb20gXCJyZWFjdC1yb3V0ZXItZG9tXCI7XHJcblxyXG5jb25zdCBMaW5rUGFnZSA9ICgpID0+IHtcclxuICByZXR1cm4gKFxyXG4gICAgPHNlY3Rpb24+XHJcbiAgICAgIDxoMT5MaW5rczwvaDE+XHJcbiAgICAgIDxiciAvPlxyXG4gICAgICA8aDI+UHVibGljPC9oMj5cclxuICAgICAgPExpbmsgdG89XCIvbG9naW5cIj5Mb2dpbjwvTGluaz5cclxuICAgICAgPExpbmsgdG89XCIvcmVnaXN0ZXJcIj5SZWdpc3RlcjwvTGluaz5cclxuICAgICAgPGJyIC8+XHJcbiAgICAgIDxoMj5Qcml2YXRlPC9oMj5cclxuICAgICAgPExpbmsgdG89XCIvXCI+SG9tZTwvTGluaz5cclxuICAgICAgPExpbmsgdG89XCIvZWRpdG9yXCI+RWRpdG9ycyBQYWdlPC9MaW5rPlxyXG4gICAgICA8TGluayB0bz1cIi9hZG1pblwiPkFkbWluIFBhZ2U8L0xpbms+XHJcbiAgICA8L3NlY3Rpb24+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IExpbmtQYWdlO1xyXG4iLCJpbXBvcnQgUmVhY3QsIHsgdXNlQ29udGV4dCwgdXNlRGVidWdWYWx1ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyB1c2VSZWYsIHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHVzZUF1dGggZnJvbSBcIi4uL2hvb2tzL3VzZUF1dGhcIjtcclxuaW1wb3J0IHsgTGluaywgdXNlTmF2aWdhdGUsIHVzZUxvY2F0aW9uIH0gZnJvbSBcInJlYWN0LXJvdXRlci1kb21cIjtcclxuXHJcbmltcG9ydCBheGlvcyBmcm9tIFwiYXhpb3NcIjtcclxuY29uc3QgTE9HSU5fVVJMID0gXCIvbG9naW5cIjtcclxuXHJcbmNvbnN0IExvZ2luID0gKCkgPT4ge1xyXG4gIGNvbnN0IHsgc2V0QXV0aCwgcGVyc2lzdCwgc2V0UGVyc2lzdCB9ID0gdXNlQXV0aCgpO1xyXG5cclxuICBjb25zdCBuYXZpZ2F0ZSA9IHVzZU5hdmlnYXRlKCk7XHJcbiAgY29uc3QgbG9jYXRpb24gPSB1c2VMb2NhdGlvbigpO1xyXG4gIGNvbnN0IGZyb20gPSBsb2NhdGlvbi5zdGF0ZT8uZnJvbT8ucGF0aG5hbWUgfHwgXCIvXCI7XHJcblxyXG4gIGNvbnN0IHVzZXJSZWYgPSB1c2VSZWYoKTtcclxuICBjb25zdCBlcnJSZWYgPSB1c2VSZWYoKTtcclxuXHJcbiAgY29uc3QgW2VtYWlsLCBzZXRVc2VyXSA9IHVzZVN0YXRlKFwiXCIpO1xyXG4gIGNvbnN0IFtwYXNzd29yZCwgc2V0UHdkXSA9IHVzZVN0YXRlKFwiXCIpO1xyXG4gIGNvbnN0IFtlcnJNc2csIHNldEVyck1zZ10gPSB1c2VTdGF0ZShcIlwiKTtcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIHVzZXJSZWYuY3VycmVudC5mb2N1cygpO1xyXG4gIH0sIFtdKTtcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIHNldEVyck1zZyhcIlwiKTtcclxuICB9LCBbZW1haWwsIHBhc3N3b3JkXSk7XHJcblxyXG4gIGNvbnN0IGhhbmRsZVN1Ym1pdCA9IGFzeW5jIChlKSA9PiB7XHJcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcblxyXG4gICAgdHJ5IHtcclxuICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBheGlvcy5wb3N0KFxyXG4gICAgICAgIExPR0lOX1VSTCxcclxuICAgICAgICBKU09OLnN0cmluZ2lmeSh7IGVtYWlsLCBwYXNzd29yZCB9KSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICBoZWFkZXJzOiB7XHJcbiAgICAgICAgICAgIFwiQ29udGVudC1UeXBlXCI6IFwiYXBwbGljYXRpb24vanNvblwiLFxyXG4gICAgICAgICAgfSxcclxuICAgICAgICB9XHJcbiAgICAgICk7XHJcblxyXG4gICAgICBjb25zdCBhY2Nlc3NUb2tlbiA9IHJlc3BvbnNlLmRhdGEudG9rZW47XHJcbiAgICAgIGNvbnN0IHRva2VuID0gYXdhaXQgYXhpb3MuZ2V0KFwiL2FwaS90b2tlbi9yZWZyZXNoXCIsIHtcclxuICAgICAgICB3aXRoQ3JlZGVudGlhbHM6IHRydWUsXHJcbiAgICAgIH0pO1xyXG5cclxuICAgICAgY29uc3Qgcm9sZXNfdXNlZCA9IGF3YWl0IGF4aW9zLmdldChcIi9hcGkvZ2V0VXNlclwiLCB7XHJcbiAgICAgICAgaGVhZGVyczogeyBBdXRob3JpemF0aW9uOiBgQmVhcmVyICR7dG9rZW4uZGF0YS50b2tlbn1gIH0sXHJcbiAgICAgIH0pO1xyXG5cclxuICAgICAgY29uc3Qgcm9sZXMgPSByb2xlc191c2VkPy5kYXRhPy5yb2xlTmFtZXM7XHJcblxyXG4gICAgICBpZiAocm9sZXMubGVuZ3RoID4gMCkge1xyXG4gICAgICAgIHNldEF1dGgoeyBlbWFpbCwgcGFzc3dvcmQsIHJvbGVzLCBhY2Nlc3NUb2tlbiB9KTtcclxuICAgICAgICBzZXRVc2VyKFwiXCIpO1xyXG4gICAgICAgIHNldFB3ZChcIlwiKTtcclxuICAgICAgICBuYXZpZ2F0ZShmcm9tLCB7IHJlcGxhY2U6IHRydWUgfSk7XHJcbiAgICAgIH1cclxuICAgIH0gY2F0Y2ggKGVycikge1xyXG4gICAgICBpZiAoIWVycj8ucmVzcG9uc2UpIHtcclxuICAgICAgICBzZXRFcnJNc2coXCJObyBTZXJ2ZXIgUmVzcG9uc2VcIik7XHJcbiAgICAgIH0gZWxzZSBpZiAoZXJyLnJlc3BvbnNlPy5zdGF0dXMgPT09IDQwMCkge1xyXG4gICAgICAgIHNldEVyck1zZyhcIk1pc3NpbmcgVXNlcm5hbWUgb3IgUGFzc3dvcmRcIik7XHJcbiAgICAgIH0gZWxzZSBpZiAoZXJyLnJlc3BvbnNlPy5zdGF0dXMgPT09IDQwMSkge1xyXG4gICAgICAgIHNldEVyck1zZyhcIlVuYXV0aG9yaXplZFwiKTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBzZXRFcnJNc2coXCJMb2dpbiBGYWlsZWRcIik7XHJcbiAgICAgIH1cclxuICAgICAgZXJyUmVmLmN1cnJlbnQuZm9jdXMoKTtcclxuICAgIH1cclxuICB9O1xyXG5cclxuICBjb25zdCB0b2dnbGVQZXJzaXN0ID0gKCkgPT4ge1xyXG4gICAgc2V0UGVyc2lzdCgocHJldikgPT4gIXByZXYpO1xyXG4gIH07XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcInBlcnNpc3RcIiwgcGVyc2lzdCk7XHJcbiAgfSwgW3BlcnNpc3RdKTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyLWxvZ2luIHJvdyBtLTBcIj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtc20tNiBjb2x1bW4tdGl0bGUgIGQtZmxleCBqdXN0aWZ5LWNvbnRlbnQtY2VudGVyIGFsaWduLWl0ZW1zLWNlbnRlclwiPlxyXG4gICAgICAgIDxoMT5Nw6l0aXM8L2gxPlxyXG4gICAgICA8L2Rpdj5cclxuXHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLXNtLTYgY29sdW1uLWNvbnRlbnQgIGQtZmxleCBqdXN0aWZ5LWNvbnRlbnQtY2VudGVyIGFsaWduLWl0ZW1zLWNlbnRlclwiPlxyXG4gICAgICAgIDxmb3JtIG9uU3VibWl0PXtoYW5kbGVTdWJtaXR9PlxyXG4gICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcclxuICAgICAgICAgICAgaWQ9XCJ1c2VybmFtZVwiXHJcbiAgICAgICAgICAgIC8vIGNsYXNzTmFtZT1cIm15LTRcIlxyXG4gICAgICAgICAgICByZWY9e3VzZXJSZWZ9XHJcbiAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiVGFwZXogdm90cmUgdXRpbGlzYXRldXJcIlxyXG4gICAgICAgICAgICBhdXRvQ29tcGxldGU9XCJvZmZcIlxyXG4gICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHNldFVzZXIoZS50YXJnZXQudmFsdWUpfVxyXG4gICAgICAgICAgICB2YWx1ZT17ZW1haWx9XHJcbiAgICAgICAgICAgIHJlcXVpcmVkXHJcbiAgICAgICAgICAvPlxyXG5cclxuICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICB0eXBlPVwicGFzc3dvcmRcIlxyXG4gICAgICAgICAgICBjbGFzc05hbWU9XCJteS00XCJcclxuICAgICAgICAgICAgaWQ9XCJwYXNzd29yZFwiXHJcbiAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiVGFwZXogdm90cmUgbW90IGRlIHBhc3NlXCJcclxuICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBzZXRQd2QoZS50YXJnZXQudmFsdWUpfVxyXG4gICAgICAgICAgICB2YWx1ZT17cGFzc3dvcmR9XHJcbiAgICAgICAgICAgIHJlcXVpcmVkXHJcbiAgICAgICAgICAvPlxyXG4gICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJidG4tbWV0aXNcIj5TaWduIEluPC9idXR0b24+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInBlcnNpc3RDaGVjayAgZC1mbGV4IGp1c3RpZnktY29udGVudC1zdGFydCBhbGlnbi1pdGVtcy1jZW50ZXIgbXQtNFwiPlxyXG4gICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICB0eXBlPVwiY2hlY2tib3hcIlxyXG4gICAgICAgICAgICAgIGlkPVwicGVyc2lzdFwiXHJcbiAgICAgICAgICAgICAgb25DaGFuZ2U9e3RvZ2dsZVBlcnNpc3R9XHJcbiAgICAgICAgICAgICAgY2hlY2tlZD17cGVyc2lzdH1cclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJwZXJzaXN0XCI+VHJ1c3QgVGhpcyBEZXZpY2U8L2xhYmVsPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9mb3JtPlxyXG4gICAgICAgIDxwXHJcbiAgICAgICAgICByZWY9e2VyclJlZn1cclxuICAgICAgICAgIGNsYXNzTmFtZT17ZXJyTXNnID8gXCJlcnJtc2dcIiA6IFwib2Zmc2NyZWVuXCJ9XHJcbiAgICAgICAgICBhcmlhLWxpdmU9XCJhc3NlcnRpdmVcIlxyXG4gICAgICAgID5cclxuICAgICAgICAgIHtlcnJNc2d9XHJcbiAgICAgICAgPC9wPlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBMb2dpbjtcclxuIiwiaW1wb3J0IHsgTGluayB9IGZyb20gXCJyZWFjdC1yb3V0ZXItZG9tXCI7XHJcblxyXG5jb25zdCBMb3VuZ2UgPSAoKSA9PiB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxzZWN0aW9uPlxyXG4gICAgICA8aDE+VGhlIExvdW5nZTwvaDE+XHJcbiAgICAgIDxiciAvPlxyXG4gICAgICA8cD5BZG1pbnMgYW5kIEVkaXRvcnMgY2FuIGhhbmcgb3V0IGhlcmUuPC9wPlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXhHcm93XCI+XHJcbiAgICAgICAgPExpbmsgdG89XCIvXCI+SG9tZTwvTGluaz5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L3NlY3Rpb24+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IExvdW5nZTtcclxuIiwiaW1wb3J0IFJlYWN0LCB7IHVzZUNvbnRleHQsIHVzZURlYnVnVmFsdWUgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgdXNlTmF2aWdhdGUsIExpbmsgfSBmcm9tIFwicmVhY3Qtcm91dGVyLWRvbVwiO1xyXG5pbXBvcnQgQnV0dG9uIGZyb20gXCJyZWFjdC1ib290c3RyYXAvQnV0dG9uXCI7XHJcbmltcG9ydCBDb250YWluZXIgZnJvbSBcInJlYWN0LWJvb3RzdHJhcC9Db250YWluZXJcIjtcclxuaW1wb3J0IHsgRm9udEF3ZXNvbWVJY29uIH0gZnJvbSBcIkBmb3J0YXdlc29tZS9yZWFjdC1mb250YXdlc29tZVwiO1xyXG5pbXBvcnQgeyBmYVNpZ25PdXQgfSBmcm9tIFwiQGZvcnRhd2Vzb21lL2ZyZWUtc29saWQtc3ZnLWljb25zXCI7XHJcbmltcG9ydCB1c2VMb2dvdXQgZnJvbSBcIi4uL2hvb2tzL3VzZUxvZ291dFwiO1xyXG5pbXBvcnQgRm9ybSBmcm9tIFwicmVhY3QtYm9vdHN0cmFwL0Zvcm1cIjtcclxuaW1wb3J0IE5hdiBmcm9tIFwicmVhY3QtYm9vdHN0cmFwL05hdlwiO1xyXG5pbXBvcnQgTmF2YmFyIGZyb20gXCJyZWFjdC1ib290c3RyYXAvTmF2YmFyXCI7XHJcbmltcG9ydCBOYXZEcm9wZG93biBmcm9tIFwicmVhY3QtYm9vdHN0cmFwL05hdkRyb3Bkb3duXCI7XHJcbmltcG9ydCBPZmZjYW52YXMgZnJvbSBcInJlYWN0LWJvb3RzdHJhcC9PZmZjYW52YXNcIjtcclxuaW1wb3J0IFNlYXJjaCBmcm9tIFwiLi9TZWFyY2hcIjtcclxuXHJcbmNvbnN0IE1lbnUgPSAoKSA9PiB7XHJcbiAgY29uc3QgbG9nb3V0ID0gdXNlTG9nb3V0KCk7XHJcblxyXG4gIGNvbnN0IHNpZ25PdXQgPSBhc3luYyAoKSA9PiB7XHJcbiAgICBhd2FpdCBsb2dvdXQoKTtcclxuICAgIG5hdmlnYXRlKFwiL2Nvbm5lY3RcIik7XHJcbiAgfTtcclxuICByZXR1cm4gKFxyXG4gICAgPD5cclxuICAgICAgPE5hdmJhclxyXG4gICAgICAgIGNvbGxhcHNlT25TZWxlY3RcclxuICAgICAgICBzdHlsZT17eyBiYWNrZ3JvdW5kQ29sb3I6IFwiIzkxYmQxMFwiIH19XHJcbiAgICAgICAgZXhwYW5kPVwieHhsXCJcclxuICAgICAgICBjbGFzc05hbWU9XCJtYi0zIG1lbnUtbWV0aXNcIlxyXG4gICAgICAgIHZhcmlhbnQ9XCJkYXJrXCJcclxuICAgICAgPlxyXG4gICAgICAgIDxDb250YWluZXIgZmx1aWQ+XHJcbiAgICAgICAgICA8TmF2YmFyLkJyYW5kIGhyZWY9XCIvXCI+XHJcbiAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInRleHQtdXBwZXJjYXNlIHRleHQtd2hpdGVcIj5Nw6l0aXM8L3NwYW4+XHJcbiAgICAgICAgICA8L05hdmJhci5CcmFuZD5cclxuICAgICAgICAgIDxOYXZiYXIuVG9nZ2xlIGFyaWEtY29udHJvbHM9XCJyZXNwb25zaXZlLW5hdmJhci1uYXZcIiAvPlxyXG4gICAgICAgICAgPE5hdmJhci5Db2xsYXBzZSBpZD1cInJlc3BvbnNpdmUtbmF2YmFyLW5hdlwiPlxyXG4gICAgICAgICAgICA8TmF2IGNsYXNzTmFtZT1cImp1c3RpZnktY29udGVudC1lbmQgZmxleC1ncm93LTEgcGUtM1wiPlxyXG4gICAgICAgICAgICAgIHsvKiA8TGluayB0bz1cIi9hZG1pblwiPkdvIHRvIHRoZSBBZG1pbiBwYWdlPC9MaW5rPiAqL31cclxuXHJcbiAgICAgICAgICAgICAgPE5hdi5MaW5rIGhyZWY9XCIvcGF0aWVudHNcIj5QYXRpZW50czwvTmF2Lkxpbms+XHJcbiAgICAgICAgICAgICAgPE5hdkRyb3Bkb3duXHJcbiAgICAgICAgICAgICAgICB0aXRsZT1cIkFwcGVsc1wiXHJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ0ZXh0LXdoaXRlXCJcclxuICAgICAgICAgICAgICAgIGlkPXtgb2ZmY2FudmFzTmF2YmFyRHJvcGRvd24tZXhwYW5kLSR7XCJ4bFwifWB9XHJcbiAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgPE5hdkRyb3Bkb3duLkl0ZW0gaHJlZj1cIiNhY3Rpb24zXCI+VG91czwvTmF2RHJvcGRvd24uSXRlbT5cclxuICAgICAgICAgICAgICAgIDxOYXZEcm9wZG93bi5JdGVtIGhyZWY9XCIjYWN0aW9uNFwiPlxyXG4gICAgICAgICAgICAgICAgICBVdGlsaXNhdGV1cnNcclxuICAgICAgICAgICAgICAgIDwvTmF2RHJvcGRvd24uSXRlbT5cclxuICAgICAgICAgICAgICA8L05hdkRyb3Bkb3duPlxyXG4gICAgICAgICAgICAgIDxOYXZEcm9wZG93blxyXG4gICAgICAgICAgICAgICAgdGl0bGU9XCJBZG1pbmlzdHJhdGlvblwiXHJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ0ZXh0LXdoaXRlXCJcclxuICAgICAgICAgICAgICAgIGlkPXtgb2ZmY2FudmFzTmF2YmFyRHJvcGRvd24tZXhwYW5kLSR7XCJ4bFwifWB9XHJcbiAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgPE5hdkRyb3Bkb3duLkl0ZW0gaHJlZj1cIiNhY3Rpb24zXCI+VG91czwvTmF2RHJvcGRvd24uSXRlbT5cclxuICAgICAgICAgICAgICAgIDxOYXZEcm9wZG93bi5JdGVtIGhyZWY9XCIjYWN0aW9uNFwiPlxyXG4gICAgICAgICAgICAgICAgICBDb250YWN0L09yZ2FuaXNhdGlvblxyXG4gICAgICAgICAgICAgICAgPC9OYXZEcm9wZG93bi5JdGVtPlxyXG4gICAgICAgICAgICAgIDwvTmF2RHJvcGRvd24+XHJcbiAgICAgICAgICAgICAgPE5hdi5MaW5rIG9uQ2xpY2s9e3NpZ25PdXR9PlxyXG4gICAgICAgICAgICAgICAgPEZvbnRBd2Vzb21lSWNvbiBpY29uPXtmYVNpZ25PdXR9IC8+e1wiIFwifVxyXG4gICAgICAgICAgICAgIDwvTmF2Lkxpbms+XHJcbiAgICAgICAgICAgIDwvTmF2PlxyXG4gICAgICAgICAgICA8U2VhcmNoPjwvU2VhcmNoPlxyXG4gICAgICAgICAgICB7LyogPEZvcm0gY2xhc3NOYW1lPVwiZC1mbGV4XCI+XHJcbiAgICAgICAgICAgICAgPEZvcm0uQ29udHJvbFxyXG4gICAgICAgICAgICAgICAgdHlwZT1cInNlYXJjaFwiXHJcbiAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIlNlYXJjaFwiXHJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJtZS0yXCJcclxuICAgICAgICAgICAgICAgIGFyaWEtbGFiZWw9XCJTZWFyY2hcIlxyXG4gICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDwvRm9ybT4gKi99XHJcbiAgICAgICAgICA8L05hdmJhci5Db2xsYXBzZT5cclxuICAgICAgICA8L0NvbnRhaW5lcj5cclxuICAgICAgPC9OYXZiYXI+XHJcbiAgICA8Lz5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgTWVudTtcclxuIiwiaW1wb3J0IFJlYWN0LCB7IHVzZUNvbnRleHQsIHVzZURlYnVnVmFsdWUgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgTGluayB9IGZyb20gXCJyZWFjdC1yb3V0ZXItZG9tXCI7XHJcblxyXG5jb25zdCBNaXNzaW5nID0gKCkgPT4ge1xyXG4gIHJldHVybiAoXHJcbiAgICA8YXJ0aWNsZSBzdHlsZT17eyBwYWRkaW5nOiBcIjEwMHB4XCIgfX0+XHJcbiAgICAgIDxoMT5Pb3BzITwvaDE+XHJcbiAgICAgIDxwPlBhZ2UgTm90IEZvdW5kPC9wPlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXhHcm93XCI+XHJcbiAgICAgICAgPExpbmsgdG89XCIvXCI+VmlzaXQgT3VyIEhvbWVwYWdlPC9MaW5rPlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvYXJ0aWNsZT5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgTWlzc2luZztcclxuIiwiaW1wb3J0IFJlYWN0LCB7IHVzZUNvbnRleHQsIHVzZURlYnVnVmFsdWUsIHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgTGluaywgdXNlTmF2aWdhdGUsIHVzZUxvY2F0aW9uIH0gZnJvbSBcInJlYWN0LXJvdXRlci1kb21cIjtcclxuaW1wb3J0IFVzZXJzIGZyb20gXCIuL1VzZXJzXCI7XHJcbmltcG9ydCBNZW51IGZyb20gXCIuL01lbnVcIjtcclxuaW1wb3J0IGxvZ29QYXRoIGZyb20gXCIuLi9pbWFnZXMvNWE5NGUzNGI0YzM2ZTI4ZGU0ZTcwNGY4YzJkMWMzOWE3OWU5MWI1ZC5wbmdcIjtcclxuaW1wb3J0IGF4aW9zIGZyb20gXCJheGlvc1wiO1xyXG5pbXBvcnQgeyB1c2VQYXJhbXMgfSBmcm9tIFwicmVhY3Qtcm91dGVyLWRvbVwiO1xyXG5pbXBvcnQgdXNlQXV0aCBmcm9tIFwiLi4vaG9va3MvdXNlQXV0aFwiO1xyXG5pbXBvcnQgVGFiIGZyb20gXCJyZWFjdC1ib290c3RyYXAvVGFiXCI7XHJcbmltcG9ydCBUYWJzIGZyb20gXCJyZWFjdC1ib290c3RyYXAvVGFic1wiO1xyXG5pbXBvcnQgRmljaGUgZnJvbSBcIi4vUHJvZmlsZS9GaWNoZS9GaWNoZVwiO1xyXG5pbXBvcnQgSW5kaWNhdG9ycyBmcm9tIFwiLi9Qcm9maWxlL0luZGljYXRvcnNcIjtcclxuaW1wb3J0IFByb2ZpbGUgZnJvbSBcIi4vUHJvZmlsZS9Qcm9maWxlXCI7XHJcbmltcG9ydCBNZWRpYXMgZnJvbSBcIi4vUHJvZmlsZS9NZWRpYXNcIjtcclxuaW1wb3J0IENvbnRhY3RzIGZyb20gXCIuL1Byb2ZpbGUvQ29udGFjdHNcIjtcclxuaW1wb3J0IFBsYWNlcyBmcm9tIFwiLi9Qcm9maWxlL1BsYWNlc1wiO1xyXG5cclxuY29uc3QgUGF0aWVudCA9ICgpID0+IHtcclxuICBsZXQgaWQgPSB1c2VQYXJhbXMoKS5pZDtcclxuICBsZXQgYmFja2dyb3VuZEltYWdlID1cclxuICAgIFwiLi4vaW1hZ2VzLzVhOTRlMzRiNGMzNmUyOGRlNGU3MDRmOGMyZDFjMzlhNzllOTFiNWQucG5nXCI7XHJcbiAgY29uc3QgW2F1dGgsIHNldEF1dGhdID0gdXNlU3RhdGUodXNlQXV0aCgpKTtcclxuICBjb25zdCBbcGF0aWVudCwgc2V0UGF0aWVudF0gPSB1c2VTdGF0ZShudWxsKTtcclxuICBjb25zdCBbaW1nUGF0aWVudCwgc2V0SW1nUGF0aWVudF0gPSB1c2VTdGF0ZShudWxsKTtcclxuICBjb25zdCBba2V5LCBzZXRLZXldID0gdXNlU3RhdGUoXCJmaWNoZVwiKTtcclxuICBjb25zdCBbaWRQYXRpZW50LCBzZXRJZFBhdGllbnRdID0gdXNlU3RhdGUoaWQpO1xyXG4gIGNvbnN0IG5hdmlnYXRlID0gdXNlTmF2aWdhdGUoKTtcclxuICBjb25zdCBsb2NhdGlvbiA9IHVzZUxvY2F0aW9uKCk7XHJcbiAgY29uc3QgW2xvY2F0aW9uV2ViLCBzZXRMb2NhdGlvbl0gPSB1c2VTdGF0ZShsb2NhdGlvbik7XHJcblxyXG4gIHZhciBmb3JtRGF0YSA9IG5ldyBGb3JtRGF0YSgpO1xyXG4gIGZvcm1EYXRhLmFwcGVuZChcImlkXCIsIGlkLnRvU3RyaW5nKCkpO1xyXG5cclxuICBsZXQgb2JqUGF0aWVudCA9IHt9O1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgYXhpb3Moe1xyXG4gICAgICBtZXRob2Q6IFwicG9zdFwiLFxyXG4gICAgICB1cmw6IFwiL2FwaS9nZXRQYXRpZW50XCIsXHJcbiAgICAgIGRhdGE6IGZvcm1EYXRhLFxyXG4gICAgICBoZWFkZXJzOiB7XHJcbiAgICAgICAgXCJDb250ZW50LVR5cGVcIjogXCJhcHBsaWNhdGlvbi9qc29uXCIsXHJcbiAgICAgICAgQXV0aG9yaXphdGlvbjogYEJlYXJlciAke2F1dGguYXV0aC5hY2Nlc3NUb2tlbn1gLFxyXG4gICAgICB9LFxyXG4gICAgfSlcclxuICAgICAgLnRoZW4oZnVuY3Rpb24gKHJlc3BvbnNlKSB7XHJcbiAgICAgICAgLy9oYW5kbGUgc3VjY2Vzc1xyXG4gICAgICAgIG9ialBhdGllbnQucGF0aWVudCA9IHJlc3BvbnNlLmRhdGE7XHJcbiAgICAgICAgc2V0UGF0aWVudChyZXNwb25zZS5kYXRhKTtcclxuICAgICAgICBheGlvcyh7XHJcbiAgICAgICAgICBtZXRob2Q6IFwicG9zdFwiLFxyXG4gICAgICAgICAgdXJsOiBcIi9hcGkvZ2V0TWVkaWFGb3JQYXRpZW50XCIsXHJcbiAgICAgICAgICBkYXRhOiBmb3JtRGF0YSxcclxuICAgICAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICAgICAgXCJDb250ZW50LVR5cGVcIjogXCJhcHBsaWNhdGlvbi9qc29uXCIsXHJcbiAgICAgICAgICAgIEF1dGhvcml6YXRpb246IGBCZWFyZXIgJHthdXRoLmF1dGguYWNjZXNzVG9rZW59YCxcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgfSlcclxuICAgICAgICAgIC50aGVuKGZ1bmN0aW9uIChyZXNwb25zZSkge1xyXG4gICAgICAgICAgICAvL2hhbmRsZSBzdWNjZXNzXHJcbiAgICAgICAgICAgIC8vIHNldFBhdGllbnQocmVzcG9uc2UuZGF0YSk7XHJcblxyXG4gICAgICAgICAgICBsZXQgYmFja2dyb3VuZEltYWdlID0gcmVzcG9uc2UuaW1hZ2U7XHJcbiAgICAgICAgICAgIHNldEltZ1BhdGllbnQocmVzcG9uc2UuZGF0YSk7XHJcbiAgICAgICAgICAgIC8vIHNldFBhdGllbnQocmVzcG9uc2UuZGF0YSk7XHJcbiAgICAgICAgICB9KVxyXG4gICAgICAgICAgLmNhdGNoKGZ1bmN0aW9uIChyZXNwb25zZSkge30pO1xyXG4gICAgICB9KVxyXG4gICAgICAuY2F0Y2goZnVuY3Rpb24gKHJlc3BvbnNlKSB7fSk7XHJcbiAgfSwgW2lkUGF0aWVudF0pO1xyXG5cclxuICAvLyBcIi4uL2J1aWxkL2ltYWdlcy81YTk0ZTM0YjRjMzZlMjhkZTRlNzA0ZjhjMmQxYzM5YTc5ZTkxYjVkLnBuZ1wiXHJcbiAgcmV0dXJuIChcclxuICAgIDw+XHJcbiAgICAgIDxNZW51PjwvTWVudT5cclxuXHJcbiAgICAgIHtwYXRpZW50ICE9PSBudWxsICYmIChcclxuICAgICAgICA8c2VjdGlvbj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyIGVtcC1wcm9maWxlXCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93IHByb2ZpbGUtaGVhZFwiPlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLXNtLTJcIj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHJvZmlsZS1pbWdcIj5cclxuICAgICAgICAgICAgICAgICAge2ltZ1BhdGllbnQgJiZcclxuICAgICAgICAgICAgICAgICAgICBpbWdQYXRpZW50ICE9PSBudWxsICYmXHJcbiAgICAgICAgICAgICAgICAgICAgT2JqZWN0LmtleXMoaW1nUGF0aWVudCkubGVuZ3RoID4gMCAmJiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICA8PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz17aW1nUGF0aWVudC5pbWFnZX0gLz47XHJcbiAgICAgICAgICAgICAgICAgICAgICA8Lz5cclxuICAgICAgICAgICAgICAgICAgICApfVxyXG5cclxuICAgICAgICAgICAgICAgICAge2ltZ1BhdGllbnQgJiZcclxuICAgICAgICAgICAgICAgICAgICBpbWdQYXRpZW50ID09PSBudWxsICYmXHJcbiAgICAgICAgICAgICAgICAgICAgT2JqZWN0LmtleXMoaW1nUGF0aWVudCkubGVuZ3RoID4gMCAmJiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICA8PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz1cImh0dHBzOi8vdWNyZWF0ZS5jaC93cC1jb250ZW50L3VwbG9hZHMvMjAyMi8wMi9wcm9maWxfdmlkZS5qcGdcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA7XHJcbiAgICAgICAgICAgICAgICAgICAgICA8Lz5cclxuICAgICAgICAgICAgICAgICAgICApfVxyXG5cclxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmaWxlIGJ0biBidG4tbGcgYnRuLXByaW1hcnlcIj5cclxuICAgICAgICAgICAgICAgICAgICBDaGFuZ2UgUGhvdG9cclxuICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cImZpbGVcIiBuYW1lPVwiZmlsZVwiIC8+XHJcbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtc20tNlwiPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwcm9maWxlLWhlYWRcIj5cclxuICAgICAgICAgICAgICAgICAgPGg1PlxyXG4gICAgICAgICAgICAgICAgICAgIHtwYXRpZW50LmZpcnN0bmFtZX0ge3BhdGllbnQubGFzdG5hbWV9XHJcbiAgICAgICAgICAgICAgICAgIDwvaDU+XHJcbiAgICAgICAgICAgICAgICAgIDxoNj4ge25ldyBEYXRlKHBhdGllbnQuYmlydGhkYXRlKS50b0xvY2FsZURhdGVTdHJpbmcoKX08L2g2PlxyXG4gICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJwcm9pbGUtcmF0aW5nXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgUHJlbWllciBjb250YWN0IDp7XCIgXCJ9XHJcbiAgICAgICAgICAgICAgICAgICAgPHNwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICB7XCIgXCJ9XHJcbiAgICAgICAgICAgICAgICAgICAgICB7bmV3IERhdGUocGF0aWVudC5maXJzdENvbnRhY3REYXRlKS50b0xvY2FsZURhdGVTdHJpbmcoKX1cclxuICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3cgYm9keS1wcm9maWxlXCI+XHJcbiAgICAgICAgICAgICAgPFRhYnNcclxuICAgICAgICAgICAgICAgIGRlZmF1bHRBY3RpdmVLZXk9XCJwcm9maWxlXCJcclxuICAgICAgICAgICAgICAgIGlkPVwidW5jb250cm9sbGVkLXRhYi1leGFtcGxlXCJcclxuICAgICAgICAgICAgICAgIGFjdGl2ZUtleT17a2V5fVxyXG4gICAgICAgICAgICAgICAgb25TZWxlY3Q9eyhrKSA9PiBzZXRLZXkoayl9XHJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJwcm9maWxlLXRhYlwiXHJcbiAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgPFRhYiBldmVudEtleT1cImZpY2hlXCIgdGl0bGU9XCJGaWNoZVwiPlxyXG4gICAgICAgICAgICAgICAgICA8RmljaGUgLz5cclxuICAgICAgICAgICAgICAgIDwvVGFiPlxyXG4gICAgICAgICAgICAgICAgPFRhYiBldmVudEtleT1cInN1aXZpXCIgdGl0bGU9XCJQcm9maWxlXCI+XHJcbiAgICAgICAgICAgICAgICAgIDxQcm9maWxlIC8+XHJcbiAgICAgICAgICAgICAgICA8L1RhYj5cclxuICAgICAgICAgICAgICAgIDxUYWIgZXZlbnRLZXk9XCJpbmRpY2F0ZXVyc1wiIHRpdGxlPVwiSW5kaWNhdGV1cnNcIj5cclxuICAgICAgICAgICAgICAgICAgPEluZGljYXRvcnMgLz5cclxuICAgICAgICAgICAgICAgIDwvVGFiPlxyXG4gICAgICAgICAgICAgICAgPFRhYiBldmVudEtleT1cIm1lZGlhc1wiIHRpdGxlPVwiTWVkaWFzXCI+XHJcbiAgICAgICAgICAgICAgICAgIDxNZWRpYXMgLz5cclxuICAgICAgICAgICAgICAgIDwvVGFiPlxyXG4gICAgICAgICAgICAgICAgPFRhYiBldmVudEtleT1cImNvbnRhY3RzXCIgdGl0bGU9XCJDb250YWN0c1wiPlxyXG4gICAgICAgICAgICAgICAgICA8Q29udGFjdHMgLz5cclxuICAgICAgICAgICAgICAgIDwvVGFiPlxyXG4gICAgICAgICAgICAgICAgPFRhYiBldmVudEtleT1cImxpZXV4XCIgdGl0bGU9XCJMaWV1eFwiPlxyXG4gICAgICAgICAgICAgICAgICA8UGxhY2VzIC8+XHJcbiAgICAgICAgICAgICAgICA8L1RhYj5cclxuICAgICAgICAgICAgICA8L1RhYnM+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9zZWN0aW9uPlxyXG4gICAgICApfVxyXG4gICAgPC8+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFBhdGllbnQ7XHJcbiIsImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBheGlvcyBmcm9tIFwiYXhpb3NcIjtcclxuaW1wb3J0IFRhYmxlIGZyb20gXCJyZWFjdC1ib290c3RyYXAvVGFibGVcIjtcclxuaW1wb3J0IFBlcnNpc3RMb2dpbiBmcm9tIFwiLi9QZXJzaXN0TG9naW5cIjtcclxuaW1wb3J0IHVzZUF1dGggZnJvbSBcIi4uL2hvb2tzL3VzZUF1dGhcIjtcclxuaW1wb3J0IHsgRm9udEF3ZXNvbWVJY29uIH0gZnJvbSBcIkBmb3J0YXdlc29tZS9yZWFjdC1mb250YXdlc29tZVwiO1xyXG5pbXBvcnQgeyBmYVVzZXIgfSBmcm9tIFwiQGZvcnRhd2Vzb21lL2ZyZWUtc29saWQtc3ZnLWljb25zXCI7XHJcbmltcG9ydCBNZW51IGZyb20gXCIuL01lbnVcIjtcclxuaW1wb3J0IEFjY29yZGlvbiBmcm9tIFwicmVhY3QtYm9vdHN0cmFwL0FjY29yZGlvblwiO1xyXG5pbXBvcnQgeyBMaW5rIH0gZnJvbSBcInJlYWN0LXJvdXRlci1kb21cIjtcclxuZnVuY3Rpb24gUGF0aWVudHMoKSB7XHJcbiAgY29uc3QgW2F1dGgsIHNldEF1dGhdID0gdXNlU3RhdGUodXNlQXV0aCgpKTtcclxuICBjb25zdCBbcGF0aWVudHNMaXN0LCBzZXRQYXRpZW50c0xpc3RdID0gdXNlU3RhdGUobnVsbCk7XHJcbiAgY29uc3QgW2xlbmd0aExpc3QsIHNldExlbmd0aExpc3RdID0gdXNlU3RhdGUoMTApO1xyXG5cclxuICB2YXIgZm9ybURhdGEgPSBuZXcgRm9ybURhdGEoKTtcclxuICBmb3JtRGF0YS5hcHBlbmQoXCJwYWdlXCIsIGxlbmd0aExpc3QudG9TdHJpbmcoKSk7XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBheGlvcyh7XHJcbiAgICAgIG1ldGhvZDogXCJwb3N0XCIsXHJcbiAgICAgIHVybDogXCIvYXBpL2dldFBhdGllbnRzXCIsXHJcbiAgICAgIGRhdGE6IGZvcm1EYXRhLFxyXG4gICAgICBoZWFkZXJzOiB7XHJcbiAgICAgICAgXCJDb250ZW50LVR5cGVcIjogXCJhcHBsaWNhdGlvbi9qc29uXCIsXHJcbiAgICAgICAgQXV0aG9yaXphdGlvbjogYEJlYXJlciAke2F1dGguYXV0aC5hY2Nlc3NUb2tlbn1gLFxyXG4gICAgICB9LFxyXG4gICAgfSlcclxuICAgICAgLnRoZW4oZnVuY3Rpb24gKHJlc3BvbnNlKSB7XHJcbiAgICAgICAgLy9oYW5kbGUgc3VjY2Vzc1xyXG4gICAgICAgIHNldFBhdGllbnRzTGlzdChyZXNwb25zZSk7XHJcbiAgICAgIH0pXHJcbiAgICAgIC5jYXRjaChmdW5jdGlvbiAocmVzcG9uc2UpIHt9KTtcclxuICB9LCBbbGVuZ3RoTGlzdCwgc2V0TGVuZ3RoTGlzdF0pO1xyXG5cclxuICBjb25zdCByZWFkTW9yZSA9ICgpID0+IHtcclxuICAgIHNldExlbmd0aExpc3QobGVuZ3RoTGlzdCArIDEwKTtcclxuICB9O1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPD5cclxuICAgICAgPE1lbnU+PC9NZW51PlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lciBjb250YWluZXItcGF0aWVudHMgcm93IG14LWF1dG8gXCI+XHJcbiAgICAgICAgPGgzPlRvdXMgbGVzIHBhdGllbnRzPC9oMz5cclxuXHJcbiAgICAgICAge3BhdGllbnRzTGlzdCAmJiBwYXRpZW50c0xpc3QuZGF0YSAmJiBwYXRpZW50c0xpc3QuZGF0YS5sZW5ndGggPiAwICYmIChcclxuICAgICAgICAgIDw+XHJcbiAgICAgICAgICAgIHtwYXRpZW50c0xpc3QuZGF0YS5tYXAoKHBhdGllbnQpID0+IChcclxuICAgICAgICAgICAgICA8QWNjb3JkaW9uIGNsYXNzTmFtZT1cIm15LTNcIj5cclxuICAgICAgICAgICAgICAgIDxBY2NvcmRpb24uSXRlbSBldmVudEtleT17cGF0aWVudC5pZH0ga2V5PXtwYXRpZW50LmlkfT5cclxuICAgICAgICAgICAgICAgICAgPEFjY29yZGlvbi5IZWFkZXI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtc20tMVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPEZvbnRBd2Vzb21lSWNvbiBpY29uPXtmYVVzZXJ9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtc20tMlwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAge3BhdGllbnQuZmlyc3RuYW1lfSB7cGF0aWVudC5sYXN0bmFtZX1cclxuICAgICAgICAgICAgICAgICAgICAgIDxMaW5rIGNsYXNzTmFtZT1cInNlZVByb2ZpbFwiIHRvPXtcIi9cIiArIHBhdGllbnQuaWR9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBWb2lyIHByb2ZpbFxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLXNtLTJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgIHtuZXcgRGF0ZShwYXRpZW50LmJpcnRoZGF0ZSkudG9Mb2NhbGVEYXRlU3RyaW5nKCl9XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtc20tMlwiPjE0LzAyLzIwMjI8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1zbS0zXCI+e3BhdGllbnQuYmlydGhMb2NhdGlvbn08L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1zbS0xXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJzdGF0dXNcIj57cGF0aWVudC5zdGF0dXN9PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIHsvKiA8ZGl2IGNsYXNzTmFtZT1cImNvbC1zbS0zXCI+e0RhdGUubm93KCl9PC9kaXY+ICovfVxyXG4gICAgICAgICAgICAgICAgICA8L0FjY29yZGlvbi5IZWFkZXI+XHJcbiAgICAgICAgICAgICAgICAgIDxBY2NvcmRpb24uQm9keT5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvdyBib2R5LWFjY29yZGVvbml0ZW1QYXRpZW50XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1zbS00XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxiPkRlcm5pw6hyZSBhY3Rpdml0w6llPC9iPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8cD5SYXBwb3J0IGRlIHJlbmNvbnRyZSAxMi8wOC8yMDIxPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8cD5SYXBwb3J0IGRlIHJlbmNvbnRyZSAyMC8wOC8yMDIyPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8cD5SYXBwb3J0IGRlIHJlbmNvbnRyZSAxNC8wOS8yMDIyPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1zbS0yXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxiPkh5Z2nDqG5lPC9iPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8cD5Hb29nbGUgQWdlbmRhPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1zbS0yXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxiPlNhbnTDqWUgbWVudGFsZTwvYj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHA+R29vZ2xlIEFnZW5kYTwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtc20tMlwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8Yj5MaWVuczwvYj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHA+R29vZ2xlIEFnZW5kYTwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtc20tMlwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8Yj5BdXRyZXMgZMOpdGFpbHM8L2I+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxwPlNhbnMgcGFwaWVyczwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHA+SW5zY3JpcyBhdSBsb2dlbWVudCBzb2NpYWw8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgPC9BY2NvcmRpb24uQm9keT5cclxuICAgICAgICAgICAgICAgIDwvQWNjb3JkaW9uLkl0ZW0+XHJcbiAgICAgICAgICAgICAgPC9BY2NvcmRpb24+XHJcbiAgICAgICAgICAgICkpfVxyXG4gICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cImJ0bi1tZXRpc1wiIG9uQ2xpY2s9e3JlYWRNb3JlfT5cclxuICAgICAgICAgICAgICBSZWFkIE1vcmVcclxuICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICA8Lz5cclxuICAgICAgICApfVxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvPlxyXG4gICk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFBhdGllbnRzO1xyXG4iLCJpbXBvcnQgUmVhY3QsIHsgdXNlQ29udGV4dCwgdXNlRGVidWdWYWx1ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyBPdXRsZXQgfSBmcm9tIFwicmVhY3Qtcm91dGVyLWRvbVwiO1xyXG5pbXBvcnQgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB1c2VSZWZyZXNoVG9rZW4gZnJvbSBcIi4uL2hvb2tzL3VzZVJlZnJlc2hUb2tlblwiO1xyXG5pbXBvcnQgdXNlQXV0aCBmcm9tIFwiLi4vaG9va3MvdXNlQXV0aFwiO1xyXG5cclxuY29uc3QgUGVyc2lzdExvZ2luID0gKCkgPT4ge1xyXG4gIGNvbnN0IFtpc0xvYWRpbmcsIHNldElzTG9hZGluZ10gPSB1c2VTdGF0ZSh0cnVlKTtcclxuICBjb25zdCByZWZyZXNoID0gdXNlUmVmcmVzaFRva2VuKCk7XHJcbiAgY29uc3QgeyBhdXRoLCBwZXJzaXN0IH0gPSB1c2VBdXRoKCk7XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBsZXQgaXNNb3VudGVkID0gdHJ1ZTtcclxuXHJcbiAgICBjb25zdCB2ZXJpZnlSZWZyZXNoVG9rZW4gPSBhc3luYyAoKSA9PiB7XHJcbiAgICAgIHRyeSB7XHJcbiAgICAgICAgYXdhaXQgcmVmcmVzaCgpO1xyXG4gICAgICB9IGNhdGNoIChlcnIpIHtcclxuICAgICAgICBjb25zb2xlLmVycm9yKGVycik7XHJcbiAgICAgIH0gZmluYWxseSB7XHJcbiAgICAgICAgaXNNb3VudGVkICYmIHNldElzTG9hZGluZyhmYWxzZSk7XHJcbiAgICAgIH1cclxuICAgIH07XHJcblxyXG4gICAgLy8gcGVyc2lzdCBhZGRlZCBoZXJlIEFGVEVSIHR1dG9yaWFsIHZpZGVvXHJcbiAgICAvLyBBdm9pZHMgdW53YW50ZWQgY2FsbCB0byB2ZXJpZnlSZWZyZXNoVG9rZW5cclxuICAgICFhdXRoPy5hY2Nlc3NUb2tlbiAmJiBwZXJzaXN0ID8gdmVyaWZ5UmVmcmVzaFRva2VuKCkgOiBzZXRJc0xvYWRpbmcoZmFsc2UpO1xyXG5cclxuICAgIHJldHVybiAoKSA9PiAoaXNNb3VudGVkID0gZmFsc2UpO1xyXG4gIH0sIFtdKTtcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIC8vIGNvbnNvbGUubG9nKGBpc0xvYWRpbmc6ICR7aXNMb2FkaW5nfWApO1xyXG4gICAgLy8gY29uc29sZS5sb2coYGFUOiAke0pTT04uc3RyaW5naWZ5KGF1dGg/LmFjY2Vzc1Rva2VuKX1gKTtcclxuICB9LCBbaXNMb2FkaW5nXSk7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8PnshcGVyc2lzdCA/IDxPdXRsZXQgLz4gOiBpc0xvYWRpbmcgPyA8cD5Mb2FkaW5nLi4uPC9wPiA6IDxPdXRsZXQgLz59PC8+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFBlcnNpc3RMb2dpbjtcclxuIiwiLy8gLi9hc3NldHMvanMvY29tcG9uZW50cy9Qb3N0cy5qc1xyXG5cclxuaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgYXhpb3MgZnJvbSBcImF4aW9zXCI7XHJcblxyXG5jbGFzcyBQb3N0cyBleHRlbmRzIENvbXBvbmVudCB7XHJcbiAgY29uc3RydWN0b3IoKSB7XHJcbiAgICBzdXBlcigpO1xyXG4gICAgdGhpcy5zdGF0ZSA9IHsgcG9zdHM6IFtdLCBsb2FkaW5nOiB0cnVlIH07XHJcbiAgfVxyXG5cclxuICBjb21wb25lbnREaWRNb3VudCgpIHtcclxuICAgIHRoaXMuZ2V0UG9zdHMoKTtcclxuICB9XHJcblxyXG4gIGdldFBvc3RzKCkge1xyXG4gICAgYXhpb3MuZ2V0KGBodHRwczovLzEyNy4wLjAuMTo4MDAwL3Nlc3Npb25gKS50aGVuKChyZXMpID0+IHtcclxuICAgICAgLy8gY29uc3QgcG9zdHMgPSByZXMuZGF0YS5zbGljZSgwLDE1KTtcclxuICAgICAgLy8gdGhpcy5zZXRTdGF0ZSh7IHBvc3RzLCBsb2FkaW5nOiBmYWxzZSB9KVxyXG4gICAgICAvLyBjb25zb2xlLmxvZyhyZXMpXHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIHJlbmRlcigpIHtcclxuICAgIGNvbnN0IGxvYWRpbmcgPSB0aGlzLnN0YXRlLmxvYWRpbmc7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8ZGl2PlxyXG4gICAgICAgIDxzZWN0aW9uIGNsYXNzTmFtZT1cInJvdy1zZWN0aW9uXCI+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lclwiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvd1wiPlxyXG4gICAgICAgICAgICAgIDxoMiBjbGFzc05hbWU9XCJ0ZXh0LWNlbnRlclwiPlxyXG4gICAgICAgICAgICAgICAgPHNwYW4+TGlzdCBvZiBwb3N0czwvc3Bhbj5DcmVhdGVkIHdpdGh7XCIgXCJ9XHJcbiAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJmYSBmYS1oZWFydFwiPjwvaT4gYnkgeWVtaXdlYmJ5e1wiIFwifVxyXG4gICAgICAgICAgICAgIDwvaDI+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAge2xvYWRpbmcgPyAoXHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e1wicm93IHRleHQtY2VudGVyXCJ9PlxyXG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiZmEgZmEtc3BpbiBmYS1zcGlubmVyIGZhLTR4XCI+PC9zcGFuPlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICApIDogKFxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtcInJvd1wifT5cclxuICAgICAgICAgICAgICAgIHt0aGlzLnN0YXRlLnBvc3RzLm1hcCgocG9zdCkgPT4gKFxyXG4gICAgICAgICAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiY29sLW1kLTEwIG9mZnNldC1tZC0xIHJvdy1ibG9ja1wiXHJcbiAgICAgICAgICAgICAgICAgICAga2V5PXtwb3N0LmlkfVxyXG4gICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgPHVsIGlkPVwic29ydGFibGVcIj5cclxuICAgICAgICAgICAgICAgICAgICAgIDxsaT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtZWRpYVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWVkaWEtYm9keVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGg0Pntwb3N0Lm5hbWV9PC9oND5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwPntwb3N0LmRlc2NyaXB0aW9ufTwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvdWw+XHJcbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICl9XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L3NlY3Rpb24+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgKTtcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFBvc3RzO1xyXG4iLCJpbXBvcnQgUmVhY3QsIHsgdXNlQ29udGV4dCwgdXNlRGVidWdWYWx1ZSwgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgdXNlQXV0aCBmcm9tIFwiLi4vLi4vaG9va3MvdXNlQXV0aFwiO1xyXG5pbXBvcnQgeyB1c2VQYXJhbXMgfSBmcm9tIFwicmVhY3Qtcm91dGVyLWRvbVwiO1xyXG5pbXBvcnQgYXhpb3MgZnJvbSBcImF4aW9zXCI7XHJcblxyXG5jb25zdCBDb250YWN0cyA9ICgpID0+IHtcclxuICBsZXQgaWQgPSB1c2VQYXJhbXMoKS5pZDtcclxuICB2YXIgZm9ybURhdGEgPSBuZXcgRm9ybURhdGEoKTtcclxuICBmb3JtRGF0YS5hcHBlbmQoXCJpZFwiLCBpZC50b1N0cmluZygpKTtcclxuICBjb25zdCBbYXV0aCwgc2V0QXV0aF0gPSB1c2VTdGF0ZSh1c2VBdXRoKCkpO1xyXG4gIGNvbnN0IFtpZFBhdGllbnQsIHNldElkUGF0aWVudF0gPSB1c2VTdGF0ZShpZCk7XHJcbiAgY29uc3QgW2xpc3RDb250YWN0cywgc2V0Q29udGFjdHNdID0gdXNlU3RhdGUobnVsbCk7XHJcbiAgY29uc3QgW29wdGlvbnMsIHNldE9wdGlvbnNdID0gdXNlU3RhdGUoKTtcclxuICBjb25zdCBbZmlsdGVyRGF0ZXMsIHNldEZpbHRlckRhdGVzXSA9IHVzZVN0YXRlKCk7XHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGF4aW9zKHtcclxuICAgICAgbWV0aG9kOiBcInBvc3RcIixcclxuICAgICAgdXJsOiBcIi9hcGkvZ2V0Q29udGFjdHNCeVBhdGllbnRzXCIsXHJcbiAgICAgIGRhdGE6IGZvcm1EYXRhLFxyXG4gICAgICBoZWFkZXJzOiB7XHJcbiAgICAgICAgXCJDb250ZW50LVR5cGVcIjogXCJhcHBsaWNhdGlvbi9qc29uXCIsXHJcbiAgICAgICAgQXV0aG9yaXphdGlvbjogYEJlYXJlciAke2F1dGguYXV0aC5hY2Nlc3NUb2tlbn1gLFxyXG4gICAgICB9LFxyXG4gICAgfSlcclxuICAgICAgLnRoZW4oZnVuY3Rpb24gKHJlc3BvbnNlKSB7XHJcbiAgICAgICAgc2V0Q29udGFjdHMocmVzcG9uc2UpO1xyXG4gICAgICB9KVxyXG4gICAgICAuY2F0Y2goZnVuY3Rpb24gKHJlc3BvbnNlKSB7fSk7XHJcbiAgfSwgW2lkUGF0aWVudF0pO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPD5cclxuICAgICAgPGg1PkNvbnRhY3RzPC9oNT5cclxuICAgICAge2xpc3RDb250YWN0cyAmJiBsaXN0Q29udGFjdHMuZGF0YS5sZW5ndGggPiAwICYmIChcclxuICAgICAgICA8PlxyXG4gICAgICAgICAge2xpc3RDb250YWN0cz8uZGF0YT8ubWFwKChpdGVtLCBpZCkgPT4gKFxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvd1wiPlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLXNtLTRcIj5cclxuICAgICAgICAgICAgICAgIHtpdGVtPy5jb250Py5maXJzdG5hbWV9IHtpdGVtPy5jb250Py5sYXN0bmFtZX1cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICApKX1cclxuICAgICAgICA8Lz5cclxuICAgICAgKX1cclxuXHJcbiAgICAgIDxoNT5QYXRpZW50czwvaDU+XHJcbiAgICAgIHtsaXN0Q29udGFjdHMgJiYgbGlzdENvbnRhY3RzLmRhdGEubGVuZ3RoID4gMCAmJiAoXHJcbiAgICAgICAgPD5cclxuICAgICAgICAgIHsvKiA8aDY+TGlzdGUgZGUgZmljaGllcnMgZMOpasOgIHByw6lzZW50czwvaDY+ICovfVxyXG5cclxuICAgICAgICAgIHtsaXN0Q29udGFjdHM/LmRhdGE/Lm1hcCgoaXRlbSwgaWQpID0+IChcclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3dcIj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1zbS00XCI+XHJcbiAgICAgICAgICAgICAgICB7aXRlbT8ub3JwYT8uZmlyc3RuYW1lfSB7aXRlbT8ub3JwYT8ubGFzdG5hbWV9XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgey8qIDxkaXYgY2xhc3NOYW1lPVwiY29sLXNtLTRcIj57aXRlbT8uY29udD8ubGFzdG5hbWV9PC9kaXY+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtc20tNFwiPntpdGVtPy5jb250Py5kZXNjcmlwdGlvbn08L2Rpdj4gKi99XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgKSl9XHJcbiAgICAgICAgPC8+XHJcbiAgICAgICl9XHJcbiAgICA8Lz5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgQ29udGFjdHM7XHJcbiIsImltcG9ydCBSZWFjdCwgeyB1c2VDb250ZXh0LCB1c2VEZWJ1Z1ZhbHVlLCB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IHVzZURyb3B6b25lIH0gZnJvbSBcInJlYWN0LWRyb3B6b25lXCI7XHJcblxyXG5jb25zdCBCYXNpYyA9IChwcm9wcykgPT4ge1xyXG4gIGNvbnN0IHsgYWNjZXB0ZWRGaWxlcywgZ2V0Um9vdFByb3BzLCBnZXRJbnB1dFByb3BzIH0gPSB1c2VEcm9wem9uZSgpO1xyXG5cclxuICBjb25zdCBbZmlsZVVwbG9hZGVkLCBzZXRGaWxlVXBsb2FkZWRdID0gdXNlU3RhdGUobnVsbCk7XHJcblxyXG4gIGNvbnN0IGZpbGVzID0gYWNjZXB0ZWRGaWxlcy5tYXAoKGZpbGUpID0+IChcclxuICAgIDxsaSBrZXk9e2ZpbGUucGF0aH0+XHJcbiAgICAgIHtmaWxlLnBhdGh9IC0ge2ZpbGUuc2l6ZX0gYnl0ZXNcclxuICAgIDwvbGk+XHJcbiAgKSk7XHJcblxyXG4gIGNvbnN0IEZpbGVzVXBsb2FkZWQgPSAoYWNjZXB0ZWRGaWxlcykgPT4ge1xyXG4gICAgcmV0dXJuIHNldEZpbGVVcGxvYWRlZChhY2NlcHRlZEZpbGVzKTtcclxuICB9O1xyXG5cclxuICBwcm9wcy5vbkNoYW5nZShhY2NlcHRlZEZpbGVzKTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPVwicm93IGNvbnRhaW5lci1kcm9wem9uZSBtYi00XCI+XHJcbiAgICAgIDxkaXYgey4uLmdldFJvb3RQcm9wcyh7IGNsYXNzTmFtZTogXCJkcm9wem9uZSBjb2wtc20tNlwiIH0pfT5cclxuICAgICAgICA8aW5wdXQgey4uLmdldElucHV0UHJvcHMoKX0gLz5cclxuICAgICAgICA8cD5VcGxvYWRleiB2b3MgZmljaGllcnMgaWNpPC9wPlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtc20tNlwiPlxyXG4gICAgICAgIDxoNj5GaWNoaWVycyB1cGxvYWTDqWU8L2g2PlxyXG4gICAgICAgIDxwPntmaWxlc308L3A+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IEJhc2ljO1xyXG4iLCJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IENLRWRpdG9yIH0gZnJvbSBcIkBja2VkaXRvci9ja2VkaXRvcjUtcmVhY3RcIjtcclxuaW1wb3J0IENsYXNzaWNFZGl0b3IgZnJvbSBcIkBja2VkaXRvci9ja2VkaXRvcjUtYnVpbGQtY2xhc3NpY1wiO1xyXG5cclxuY2xhc3MgRWRpdG9yIGV4dGVuZHMgQ29tcG9uZW50IHtcclxuICByZW5kZXIoKSB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cIkFwcFwiPlxyXG4gICAgICAgIDxDS0VkaXRvclxyXG4gICAgICAgICAgZWRpdG9yPXtDbGFzc2ljRWRpdG9yfVxyXG4gICAgICAgICAgb25SZWFkeT17KGVkaXRvcikgPT4ge1xyXG4gICAgICAgICAgICAvLyBZb3UgY2FuIHN0b3JlIHRoZSBcImVkaXRvclwiIGFuZCB1c2Ugd2hlbiBpdCBpcyBuZWVkZWQuXHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKHRoaXMucHJvcHMpO1xyXG4gICAgICAgICAgICBlZGl0b3Iuc2V0RGF0YSh0aGlzLnByb3BzLmNvbnRlbnRUZXh0KTtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coXCJFZGl0b3IgaXMgcmVhZHkgdG8gdXNlIVwiLCBlZGl0b3IpO1xyXG4gICAgICAgICAgfX1cclxuICAgICAgICAgIG9uQ2hhbmdlPXsoZXZlbnQsIGVkaXRvcikgPT4ge1xyXG4gICAgICAgICAgICBjb25zdCBkYXRhID0gZWRpdG9yLmdldERhdGEoKTtcclxuICAgICAgICAgICAgLy8gY29udGVudFRleHRcclxuICAgICAgICAgICAgY29uc29sZS5sb2coeyBldmVudCwgZWRpdG9yLCBkYXRhIH0pO1xyXG4gICAgICAgICAgfX1cclxuICAgICAgICAgIG9uQmx1cj17KGV2ZW50LCBlZGl0b3IpID0+IHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coXCJCbHVyLlwiLCBlZGl0b3IpO1xyXG4gICAgICAgICAgfX1cclxuICAgICAgICAgIG9uRm9jdXM9eyhldmVudCwgZWRpdG9yKSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiRm9jdXMuXCIsIGVkaXRvcik7XHJcbiAgICAgICAgICB9fVxyXG4gICAgICAgIC8+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgKTtcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEVkaXRvcjtcclxuIiwiaW1wb3J0IFJlYWN0LCB7IHVzZUNvbnRleHQsIHVzZURlYnVnVmFsdWUgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgdXNlUmVmLCB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IExpbmssIHVzZU5hdmlnYXRlLCB1c2VMb2NhdGlvbiB9IGZyb20gXCJyZWFjdC1yb3V0ZXItZG9tXCI7XHJcbmltcG9ydCBBY2NvcmRpb24gZnJvbSBcInJlYWN0LWJvb3RzdHJhcC9BY2NvcmRpb25cIjtcclxuaW1wb3J0IHVzZUF1dGggZnJvbSBcIi4uLy4uLy4uL2hvb2tzL3VzZUF1dGhcIjtcclxuaW1wb3J0IHsgdXNlUGFyYW1zIH0gZnJvbSBcInJlYWN0LXJvdXRlci1kb21cIjtcclxuaW1wb3J0IGF4aW9zIGZyb20gXCJheGlvc1wiO1xyXG5pbXBvcnQgVGFibGUgZnJvbSBcInJlYWN0LWJvb3RzdHJhcC9UYWJsZVwiO1xyXG5pbXBvcnQgeyBGb250QXdlc29tZUljb24gfSBmcm9tIFwiQGZvcnRhd2Vzb21lL3JlYWN0LWZvbnRhd2Vzb21lXCI7XHJcbmltcG9ydCB7XHJcbiAgZmFQbHVzQ2lyY2xlLFxyXG4gIGZhQ2FuY2VsLFxyXG4gIGZhRWRpdCxcclxufSBmcm9tIFwiQGZvcnRhd2Vzb21lL2ZyZWUtc29saWQtc3ZnLWljb25zXCI7XHJcbmltcG9ydCBNb2RhbEFkZEluZm9zIGZyb20gXCIuL01vZGFsLUFkZC1JbmZvc1wiO1xyXG5pbXBvcnQgTW9kYWxFZGl0SW5mb3MgZnJvbSBcIi4vTW9kYWwtRWRpdC1JbmZvc1wiO1xyXG5cclxuY29uc3QgQmxvY2tJbmZvcyA9IChwcm9wcykgPT4ge1xyXG4gIGxldCBpZCA9IHVzZVBhcmFtcygpLmlkO1xyXG4gIGxldCBiYWNrZ3JvdW5kSW1hZ2UgPVxyXG4gICAgXCIuLi9pbWFnZXMvNWE5NGUzNGI0YzM2ZTI4ZGU0ZTcwNGY4YzJkMWMzOWE3OWU5MWI1ZC5wbmdcIjtcclxuICBjb25zdCBbYXV0aCwgc2V0QXV0aF0gPSB1c2VTdGF0ZSh1c2VBdXRoKCkpO1xyXG4gIGNvbnN0IFtpZFBhdGllbnQsIHNldElkUGF0aWVudF0gPSB1c2VTdGF0ZShpZCk7XHJcbiAgY29uc3QgbG9jYXRpb24gPSB1c2VMb2NhdGlvbigpO1xyXG4gIHZhciBmb3JtRGF0YSA9IG5ldyBGb3JtRGF0YSgpO1xyXG4gIGZvcm1EYXRhLmFwcGVuZChcImlkXCIsIGlkLnRvU3RyaW5nKCkpO1xyXG5cclxuICBjb25zdCBbaW5mb3JtYXRpb25QYXRpZW50LCBzZXRJbmZvcm1hdGlvbl0gPSB1c2VTdGF0ZShudWxsKTtcclxuICBjb25zdCBbaW5mb3JtYXRpb25UZW1wbGF0ZUJsb2NrLCBzZXRJbmZvcm1hdGlvblRlbXBsYXRlQmxvY2tdID1cclxuICAgIHVzZVN0YXRlKG51bGwpO1xyXG4gIGNvbnNvbGUubG9nKHByb3BzKTtcclxuICByZXR1cm4gKFxyXG4gICAgPD5cclxuICAgICAge3Byb3BzLmluZm9zPy5tYXAoKHBhdGllbnQsIGlkKSA9PiAoXHJcbiAgICAgICAgPD5cclxuICAgICAgICAgIHtwYXRpZW50ICYmIHBhdGllbnQuc3VnZT8ucGF0aFN0cmluZyA9PT0gcHJvcHMubGluayAmJiAoXHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93XCI+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtc20tNFwiPlxyXG4gICAgICAgICAgICAgICAgPHA+e3BhdGllbnQuc3VnZT8udmFsdWV9PC9wPlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLXNtLTRcIj5cclxuICAgICAgICAgICAgICAgIHtwYXRpZW50Py5wYXRpZW50SW5mb3JtYXRpb24/Lm1hcCgocGksIGlkKSA9PiAoXHJcbiAgICAgICAgICAgICAgICAgIDxwIGtleT17aWR9PlxyXG4gICAgICAgICAgICAgICAgICAgIHtwaS5zdWdnPy52YWx1ZX1cclxuICAgICAgICAgICAgICAgICAgICB7cGkgJiYgKFxyXG4gICAgICAgICAgICAgICAgICAgICAgPE1vZGFsRWRpdEluZm9zXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxpbms9e3Byb3BzLmxpbmt9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGluZm9zUGF0aWVudD17cGl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGluZm9zPXtwYXRpZW50fVxyXG4gICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgICAgICApKX1cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1zbS00XCI+XHJcbiAgICAgICAgICAgICAgICA8TW9kYWxBZGRJbmZvcyBsaW5rPXtwcm9wcy5saW5rfSBpbmZvcz17cGF0aWVudH0gLz5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICApfVxyXG4gICAgICAgIDwvPlxyXG4gICAgICApKX1cclxuICAgIDwvPlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBCbG9ja0luZm9zO1xyXG4iLCJpbXBvcnQgUmVhY3QsIHsgdXNlQ29udGV4dCwgdXNlRGVidWdWYWx1ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyB1c2VSZWYsIHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgTGluaywgdXNlTmF2aWdhdGUsIHVzZUxvY2F0aW9uIH0gZnJvbSBcInJlYWN0LXJvdXRlci1kb21cIjtcclxuaW1wb3J0IEFjY29yZGlvbiBmcm9tIFwicmVhY3QtYm9vdHN0cmFwL0FjY29yZGlvblwiO1xyXG5pbXBvcnQgdXNlQXV0aCBmcm9tIFwiLi4vLi4vLi4vaG9va3MvdXNlQXV0aFwiO1xyXG5pbXBvcnQgeyB1c2VQYXJhbXMgfSBmcm9tIFwicmVhY3Qtcm91dGVyLWRvbVwiO1xyXG5pbXBvcnQgYXhpb3MgZnJvbSBcImF4aW9zXCI7XHJcbmltcG9ydCBUYWJsZSBmcm9tIFwicmVhY3QtYm9vdHN0cmFwL1RhYmxlXCI7XHJcbmltcG9ydCB7IEZvbnRBd2Vzb21lSWNvbiB9IGZyb20gXCJAZm9ydGF3ZXNvbWUvcmVhY3QtZm9udGF3ZXNvbWVcIjtcclxuaW1wb3J0IHtcclxuICBmYVBsdXNDaXJjbGUsXHJcbiAgZmFDYW5jZWwsXHJcbiAgZmFFZGl0LFxyXG59IGZyb20gXCJAZm9ydGF3ZXNvbWUvZnJlZS1zb2xpZC1zdmctaWNvbnNcIjtcclxuaW1wb3J0IE1vZGFsQWRkSW5mb3MgZnJvbSBcIi4vTW9kYWwtQWRkLUluZm9zXCI7XHJcbmltcG9ydCBCbG9ja0luZm9zIGZyb20gXCIuL0Jsb2NrLUluZm9zXCI7XHJcblxyXG5jb25zdCBGaWNoZSA9ICgpID0+IHtcclxuICBsZXQgaWQgPSB1c2VQYXJhbXMoKS5pZDtcclxuICBsZXQgYmFja2dyb3VuZEltYWdlID1cclxuICAgIFwiLi4vaW1hZ2VzLzVhOTRlMzRiNGMzNmUyOGRlNGU3MDRmOGMyZDFjMzlhNzllOTFiNWQucG5nXCI7XHJcbiAgY29uc3QgW2F1dGgsIHNldEF1dGhdID0gdXNlU3RhdGUodXNlQXV0aCgpKTtcclxuICBjb25zdCBbaWRQYXRpZW50LCBzZXRJZFBhdGllbnRdID0gdXNlU3RhdGUoaWQpO1xyXG4gIGNvbnN0IGxvY2F0aW9uID0gdXNlTG9jYXRpb24oKTtcclxuICB2YXIgZm9ybURhdGEgPSBuZXcgRm9ybURhdGEoKTtcclxuICBmb3JtRGF0YS5hcHBlbmQoXCJpZFwiLCBpZC50b1N0cmluZygpKTtcclxuXHJcbiAgY29uc3QgW2luZm9ybWF0aW9uUGF0aWVudCwgc2V0SW5mb3JtYXRpb25dID0gdXNlU3RhdGUobnVsbCk7XHJcbiAgY29uc3QgW2luZm9ybWF0aW9uVGVtcGxhdGVCbG9jaywgc2V0SW5mb3JtYXRpb25UZW1wbGF0ZUJsb2NrXSA9XHJcbiAgICB1c2VTdGF0ZShudWxsKTtcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGF4aW9zKHtcclxuICAgICAgbWV0aG9kOiBcInBvc3RcIixcclxuICAgICAgdXJsOiBcIi9hcGkvcGF0aWVudHNJbmZvcm1hdGlvbkJ5UGF0aWVudHNcIixcclxuICAgICAgZGF0YTogZm9ybURhdGEsXHJcbiAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICBcIkNvbnRlbnQtVHlwZVwiOiBcImFwcGxpY2F0aW9uL2pzb25cIixcclxuICAgICAgICBBdXRob3JpemF0aW9uOiBgQmVhcmVyICR7YXV0aC5hdXRoLmFjY2Vzc1Rva2VufWAsXHJcbiAgICAgIH0sXHJcbiAgICB9KVxyXG4gICAgICAudGhlbihmdW5jdGlvbiAocmVzcG9uc2UpIHtcclxuICAgICAgICBzZXRJbmZvcm1hdGlvbihyZXNwb25zZS5kYXRhKTtcclxuICAgICAgfSlcclxuICAgICAgLmNhdGNoKGZ1bmN0aW9uIChyZXNwb25zZSkge30pO1xyXG4gIH0sIFtpZFBhdGllbnRdKTtcclxuICAvLyBjb25zb2xlLmxvZyhcImluZm9zXCIsIGluZm9ybWF0aW9uUGF0aWVudCk7XHJcbiAgcmV0dXJuIChcclxuICAgIDxzZWN0aW9uPlxyXG4gICAgICA8QWNjb3JkaW9uIGRlZmF1bHRBY3RpdmVLZXk9XCIwXCIgZmx1c2g9e3RydWV9IGNsYXNzTmFtZT1cImFjY29yZGlvbi1maWNoZVwiPlxyXG4gICAgICAgIDxBY2NvcmRpb24uSXRlbSBldmVudEtleT1cIjBcIj5cclxuICAgICAgICAgIDxBY2NvcmRpb24uSGVhZGVyPlN0YXR1dCBkZSBzdWl2aTwvQWNjb3JkaW9uLkhlYWRlcj5cclxuICAgICAgICAgIDxBY2NvcmRpb24uQm9keT5cclxuICAgICAgICAgICAgPEJsb2NrSW5mb3NcclxuICAgICAgICAgICAgICBpbmZvcz17aW5mb3JtYXRpb25QYXRpZW50fVxyXG4gICAgICAgICAgICAgIGxpbms9e1wiL3BhdGllbnQvZmljaGUvc3RhdHV0LWR1LXN1aXZpXCJ9XHJcbiAgICAgICAgICAgID48L0Jsb2NrSW5mb3M+XHJcbiAgICAgICAgICAgIDxCbG9ja0luZm9zXHJcbiAgICAgICAgICAgICAgaW5mb3M9e2luZm9ybWF0aW9uUGF0aWVudH1cclxuICAgICAgICAgICAgICBsaW5rPXtcIi9wYXRpZW50L3N1aXZpL2VxdWlwZXNcIn1cclxuICAgICAgICAgICAgPjwvQmxvY2tJbmZvcz5cclxuICAgICAgICAgICAgPEJsb2NrSW5mb3NcclxuICAgICAgICAgICAgICBpbmZvcz17aW5mb3JtYXRpb25QYXRpZW50fVxyXG4gICAgICAgICAgICAgIGxpbms9e1wiL3BhdGllbnQvc3VpdmkvcHJvZ3JhbW1lXCJ9XHJcbiAgICAgICAgICAgID48L0Jsb2NrSW5mb3M+XHJcbiAgICAgICAgICAgIDxCbG9ja0luZm9zXHJcbiAgICAgICAgICAgICAgaW5mb3M9e2luZm9ybWF0aW9uUGF0aWVudH1cclxuICAgICAgICAgICAgICBsaW5rPXtcIi9wYXRpZW50L3N1aXZpL2FudGVubmVcIn1cclxuICAgICAgICAgICAgPjwvQmxvY2tJbmZvcz5cclxuICAgICAgICAgIDwvQWNjb3JkaW9uLkJvZHk+XHJcbiAgICAgICAgPC9BY2NvcmRpb24uSXRlbT5cclxuICAgICAgPC9BY2NvcmRpb24+XHJcbiAgICAgIDxBY2NvcmRpb24gY2xhc3NOYW1lPVwiYWNjb3JkaW9uLWZpY2hlXCIgZmx1c2g9e3RydWV9PlxyXG4gICAgICAgIDxBY2NvcmRpb24uSXRlbSBldmVudEtleT1cIjFcIj5cclxuICAgICAgICAgIDxBY2NvcmRpb24uSGVhZGVyPkluZm9ybWF0aW9uIGfDqW7DqXJhbGU8L0FjY29yZGlvbi5IZWFkZXI+XHJcbiAgICAgICAgICA8QWNjb3JkaW9uLkJvZHk+XHJcbiAgICAgICAgICAgIDxCbG9ja0luZm9zXHJcbiAgICAgICAgICAgICAgaW5mb3M9e2luZm9ybWF0aW9uUGF0aWVudH1cclxuICAgICAgICAgICAgICBsaW5rPXtcIi9wYXRpZW50L2ZpY2hlL2luZm9ybWF0aW9uLWdlbmVyYWxlL2dlbnJlXCJ9XHJcbiAgICAgICAgICAgID48L0Jsb2NrSW5mb3M+XHJcbiAgICAgICAgICAgIDxCbG9ja0luZm9zXHJcbiAgICAgICAgICAgICAgaW5mb3M9e2luZm9ybWF0aW9uUGF0aWVudH1cclxuICAgICAgICAgICAgICBsaW5rPXtcIi9wYXRpZW50L2ZpY2hlL2luZm9ybWF0aW9uLWdlbmVyYWxlL2V0YXQtY2l2aWxcIn1cclxuICAgICAgICAgICAgPjwvQmxvY2tJbmZvcz5cclxuICAgICAgICAgICAgPEJsb2NrSW5mb3NcclxuICAgICAgICAgICAgICBpbmZvcz17aW5mb3JtYXRpb25QYXRpZW50fVxyXG4gICAgICAgICAgICAgIGxpbms9e1xyXG4gICAgICAgICAgICAgICAgXCIvcGF0aWVudC9maWNoZS9pbmZvcm1hdGlvbi1nZW5lcmFsZS9jb21wb3NpdGlvbi1mYW1pbGxpYWxlXCJcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgID48L0Jsb2NrSW5mb3M+XHJcbiAgICAgICAgICAgIDxCbG9ja0luZm9zXHJcbiAgICAgICAgICAgICAgaW5mb3M9e2luZm9ybWF0aW9uUGF0aWVudH1cclxuICAgICAgICAgICAgICBsaW5rPXtcIi9wYXRpZW50L2ZpY2hlL2luZm9ybWF0aW9uLWdlbmVyYWxlL25hdGlvbmFsaXRlXCJ9XHJcbiAgICAgICAgICAgID48L0Jsb2NrSW5mb3M+XHJcbiAgICAgICAgICAgIDxCbG9ja0luZm9zXHJcbiAgICAgICAgICAgICAgaW5mb3M9e2luZm9ybWF0aW9uUGF0aWVudH1cclxuICAgICAgICAgICAgICBsaW5rPXtcIi9wYXRpZW50L2ZpY2hlL2luZm9ybWF0aW9uLWdlbmVyYWxlL3RpdHJlLWRlLXNlam91clwifVxyXG4gICAgICAgICAgICA+PC9CbG9ja0luZm9zPlxyXG4gICAgICAgICAgICA8QmxvY2tJbmZvc1xyXG4gICAgICAgICAgICAgIGluZm9zPXtpbmZvcm1hdGlvblBhdGllbnR9XHJcbiAgICAgICAgICAgICAgbGluaz17XCIvcGF0aWVudC9maWNoZS9pbmZvcm1hdGlvbi1nZW5lcmFsZS9udW1lcm8tZGUtdGVsZXBob25lXCJ9XHJcbiAgICAgICAgICAgID48L0Jsb2NrSW5mb3M+XHJcbiAgICAgICAgICAgIDxCbG9ja0luZm9zXHJcbiAgICAgICAgICAgICAgaW5mb3M9e2luZm9ybWF0aW9uUGF0aWVudH1cclxuICAgICAgICAgICAgICBsaW5rPXtcIi9wYXRpZW50L2ZpY2hlL2luZm9ybWF0aW9uLWdlbmVyYWxlL2UtbWFpbFwifVxyXG4gICAgICAgICAgICA+PC9CbG9ja0luZm9zPlxyXG4gICAgICAgICAgPC9BY2NvcmRpb24uQm9keT5cclxuICAgICAgICA8L0FjY29yZGlvbi5JdGVtPlxyXG4gICAgICA8L0FjY29yZGlvbj5cclxuICAgIDwvc2VjdGlvbj5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgRmljaGU7XHJcbiIsImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBCdXR0b24gZnJvbSBcInJlYWN0LWJvb3RzdHJhcC9CdXR0b25cIjtcclxuaW1wb3J0IE1vZGFsIGZyb20gXCJyZWFjdC1ib290c3RyYXAvTW9kYWxcIjtcclxuaW1wb3J0IHVzZUF1dGggZnJvbSBcIi4uLy4uLy4uL2hvb2tzL3VzZUF1dGhcIjtcclxuaW1wb3J0IHsgRm9udEF3ZXNvbWVJY29uIH0gZnJvbSBcIkBmb3J0YXdlc29tZS9yZWFjdC1mb250YXdlc29tZVwiO1xyXG5pbXBvcnQge1xyXG4gIGZhUGx1c0NpcmNsZSxcclxuICBmYUNhbmNlbCxcclxuICBmYUVkaXQsXHJcbn0gZnJvbSBcIkBmb3J0YXdlc29tZS9mcmVlLXNvbGlkLXN2Zy1pY29uc1wiO1xyXG5pbXBvcnQgeyB1c2VQYXJhbXMgfSBmcm9tIFwicmVhY3Qtcm91dGVyLWRvbVwiO1xyXG5pbXBvcnQgYXhpb3MgZnJvbSBcImF4aW9zXCI7XHJcbmltcG9ydCBGb3JtIGZyb20gXCJyZWFjdC1ib290c3RyYXAvRm9ybVwiO1xyXG5cclxuZnVuY3Rpb24gTW9kYWxBZGRJbmZvcyhwcm9wcykge1xyXG4gIGNvbnN0IFtzaG93LCBzZXRTaG93XSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICBjb25zdCBbYXV0aCwgc2V0QXV0aF0gPSB1c2VTdGF0ZSh1c2VBdXRoKCkpO1xyXG4gIGxldCBpZCA9IHVzZVBhcmFtcygpLmlkO1xyXG4gIHZhciBmb3JtRGF0YSA9IG5ldyBGb3JtRGF0YSgpO1xyXG4gIGZvcm1EYXRhLmFwcGVuZChcImlkXCIsIGlkLnRvU3RyaW5nKCkpO1xyXG4gIGZvcm1EYXRhLmFwcGVuZChcInBhdGhTdHJpbmdcIiwgcHJvcHMubGluayk7XHJcbiAgY29uc3QgW2luZm9zLCBzZXRJbmZvc10gPSB1c2VTdGF0ZShudWxsKTtcclxuICBjb25zdCBbZWxlbWVudHNPcHQsIHNldEVsZW1lbnRzT3B0XSA9IHVzZVN0YXRlKG51bGwpO1xyXG4gIGNvbnN0IFtpZFBhdGllbnQsIHNldElkUGF0aWVudF0gPSB1c2VTdGF0ZShpZCk7XHJcbiAgY29uc3QgaGFuZGxlQ2xvc2UgPSAoKSA9PiBzZXRTaG93KGZhbHNlKTtcclxuICBjb25zdCBoYW5kbGVTaG93ID0gKCkgPT4gc2V0U2hvdyh0cnVlKTtcclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgc2V0RWxlbWVudHNPcHQoLi4ucHJvcHM/LmluZm9zPy5zdWdnZXN0aW9uc0J5QmxvY2spO1xyXG4gIH0sIFtpZFBhdGllbnRdKTtcclxuICBjb25zb2xlLmxvZyhwcm9wcyk7XHJcbiAgcmV0dXJuIChcclxuICAgIDw+XHJcbiAgICAgIDxCdXR0b24gb25DbGljaz17aGFuZGxlU2hvd30+XHJcbiAgICAgICAgPEZvbnRBd2Vzb21lSWNvbiBpY29uPXtmYVBsdXNDaXJjbGV9IC8+XHJcbiAgICAgIDwvQnV0dG9uPlxyXG5cclxuICAgICAgPE1vZGFsIHNob3c9e3Nob3d9IG9uSGlkZT17aGFuZGxlQ2xvc2V9PlxyXG4gICAgICAgIDxNb2RhbC5IZWFkZXIgY2xvc2VCdXR0b24+XHJcbiAgICAgICAgICA8TW9kYWwuVGl0bGU+TW9kaWZpZXIgdW5lIGluZm9ybWF0aW9uPC9Nb2RhbC5UaXRsZT5cclxuICAgICAgICA8L01vZGFsLkhlYWRlcj5cclxuICAgICAgICA8TW9kYWwuQm9keT5cclxuICAgICAgICAgIHtcIiBcIn1cclxuICAgICAgICAgIDw+XHJcbiAgICAgICAgICAgIDxGb3JtLkxhYmVsIGh0bWxGb3I9XCJpbnB1dFZhbHVlXCI+VmFsZXVyPC9Gb3JtLkxhYmVsPlxyXG4gICAgICAgICAgICA8Rm9ybS5TZWxlY3Qgc2l6ZT1cImxnXCI+XHJcbiAgICAgICAgICAgICAge2VsZW1lbnRzT3B0Py5tYXAoKGVsLCBpZCkgPT4gKFxyXG4gICAgICAgICAgICAgICAgPD5cclxuICAgICAgICAgICAgICAgICAgPG9wdGlvbj57ZWw/LnZhbHVlfTwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgPC8+XHJcbiAgICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgICAgIDwvRm9ybS5TZWxlY3Q+XHJcbiAgICAgICAgICAgIDxGb3JtLkxhYmVsIGh0bWxGb3I9XCJpbnB1dFZhbHVlXCI+VmFsZXVyIFNww6ljaWZpcXVlPC9Gb3JtLkxhYmVsPlxyXG4gICAgICAgICAgICA8Rm9ybS5Db250cm9sXHJcbiAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxyXG4gICAgICAgICAgICAgIGlkPVwiaW5wdXRWYWx1ZVNww6ljaWZpcXVlXCJcclxuICAgICAgICAgICAgICBhcmlhLWRlc2NyaWJlZGJ5PVwidmFsdWVTcMOpY2lmaXF1ZVwiXHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDxwPlxyXG4gICAgICAgICAgICAgIExlcyBzdWdnZXN0aW9ucyBtYXJxdcOpZXMgZCd1bmUgw6l0b2lsZSAoKikgZGFucyBsYSBsaXN0ZSBjaS1kZXNzdXNcclxuICAgICAgICAgICAgICBkZW1hbmRlbnQgb2JsaWdhdG9pcmVtZW50IHVuZSB2YWxldXIgc3DDqWNpZmlxdWUuXHJcbiAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgPEZvcm0uTGFiZWwgaHRtbEZvcj1cImlucHV0VmFsdWVcIj5Ew6lidXQ8L0Zvcm0uTGFiZWw+XHJcbiAgICAgICAgICAgIDxGb3JtLkNvbnRyb2xcclxuICAgICAgICAgICAgICB0eXBlPVwiZGF0ZVwiXHJcbiAgICAgICAgICAgICAgaWQ9XCJpbnB1dFZhbHVlU3DDqWNpZmlxdWVcIlxyXG4gICAgICAgICAgICAgIGFyaWEtZGVzY3JpYmVkYnk9XCJ2YWx1ZVNww6ljaWZpcXVlXCJcclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgPEZvcm0uTGFiZWwgaHRtbEZvcj1cImlucHV0VmFsdWVcIj5GaW48L0Zvcm0uTGFiZWw+XHJcbiAgICAgICAgICAgIDxGb3JtLkNvbnRyb2xcclxuICAgICAgICAgICAgICB0eXBlPVwiZGF0ZVwiXHJcbiAgICAgICAgICAgICAgaWQ9XCJpbnB1dFZhbHVlU3DDqWNpZmlxdWVcIlxyXG4gICAgICAgICAgICAgIGFyaWEtZGVzY3JpYmVkYnk9XCJ2YWx1ZVNww6ljaWZpcXVlXCJcclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgPEZvcm0uTGFiZWwgaHRtbEZvcj1cImlucHV0VmFsdWVcIj5Db21tZW50YWlyZTwvRm9ybS5MYWJlbD5cclxuICAgICAgICAgICAgPEZvcm0uQ29udHJvbCBhcz1cInRleHRhcmVhXCIgcm93cz17M30gLz5cclxuICAgICAgICAgIDwvPlxyXG4gICAgICAgIDwvTW9kYWwuQm9keT5cclxuICAgICAgICA8TW9kYWwuRm9vdGVyPlxyXG4gICAgICAgICAgPEJ1dHRvbiBvbkNsaWNrPXtoYW5kbGVDbG9zZX0+Q2xvc2U8L0J1dHRvbj5cclxuICAgICAgICAgIDxCdXR0b24gb25DbGljaz17aGFuZGxlQ2xvc2V9PlNhdmUgQ2hhbmdlczwvQnV0dG9uPlxyXG4gICAgICAgIDwvTW9kYWwuRm9vdGVyPlxyXG4gICAgICA8L01vZGFsPlxyXG4gICAgPC8+XHJcbiAgKTtcclxufVxyXG5cclxuLy8gcmVuZGVyKDxNb2RhbCAvPik7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBNb2RhbEFkZEluZm9zO1xyXG4iLCJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgQnV0dG9uIGZyb20gXCJyZWFjdC1ib290c3RyYXAvQnV0dG9uXCI7XHJcbmltcG9ydCBNb2RhbCBmcm9tIFwicmVhY3QtYm9vdHN0cmFwL01vZGFsXCI7XHJcbmltcG9ydCB1c2VBdXRoIGZyb20gXCIuLi8uLi8uLi9ob29rcy91c2VBdXRoXCI7XHJcbmltcG9ydCB7IEZvbnRBd2Vzb21lSWNvbiB9IGZyb20gXCJAZm9ydGF3ZXNvbWUvcmVhY3QtZm9udGF3ZXNvbWVcIjtcclxuaW1wb3J0IG1vbWVudCBmcm9tIFwibW9tZW50XCI7XHJcbmltcG9ydCB7XHJcbiAgZmFQbHVzQ2lyY2xlLFxyXG4gIGZhQ2FuY2VsLFxyXG4gIGZhRWRpdCxcclxufSBmcm9tIFwiQGZvcnRhd2Vzb21lL2ZyZWUtc29saWQtc3ZnLWljb25zXCI7XHJcbmltcG9ydCB7IHVzZVBhcmFtcyB9IGZyb20gXCJyZWFjdC1yb3V0ZXItZG9tXCI7XHJcbmltcG9ydCBheGlvcyBmcm9tIFwiYXhpb3NcIjtcclxuaW1wb3J0IEZvcm0gZnJvbSBcInJlYWN0LWJvb3RzdHJhcC9Gb3JtXCI7XHJcblxyXG5mdW5jdGlvbiBNb2RhbEVkaXRJbmZvcyhwcm9wcykge1xyXG4gIGNvbnN0IFtzaG93LCBzZXRTaG93XSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICBjb25zdCBbYXV0aCwgc2V0QXV0aF0gPSB1c2VTdGF0ZSh1c2VBdXRoKCkpO1xyXG4gIGxldCBpZCA9IHVzZVBhcmFtcygpLmlkO1xyXG4gIHZhciBmb3JtRGF0YSA9IG5ldyBGb3JtRGF0YSgpO1xyXG4gIGZvcm1EYXRhLmFwcGVuZChcImlkXCIsIGlkLnRvU3RyaW5nKCkpO1xyXG4gIGZvcm1EYXRhLmFwcGVuZChcInBhdGhTdHJpbmdcIiwgcHJvcHMubGluayk7XHJcbiAgY29uc3QgW2luZm9zLCBzZXRJbmZvc10gPSB1c2VTdGF0ZShudWxsKTtcclxuICBjb25zdCBbZWxlbWVudHNPcHQsIHNldEVsZW1lbnRzT3B0XSA9IHVzZVN0YXRlKG51bGwpO1xyXG4gIGNvbnN0IFtpZFBhdGllbnQsIHNldElkUGF0aWVudF0gPSB1c2VTdGF0ZShpZCk7XHJcbiAgY29uc3QgW3N0YXJ0LCBzZXRTdGFydERhdGVdID0gdXNlU3RhdGUobmV3IERhdGUoKSk7XHJcbiAgY29uc3QgW2VuZCwgc2V0RW5kRGF0ZV0gPSB1c2VTdGF0ZShuZXcgRGF0ZSgpKTtcclxuICBjb25zdCBoYW5kbGVDbG9zZSA9ICgpID0+IHNldFNob3coZmFsc2UpO1xyXG4gIGNvbnN0IGhhbmRsZVNob3cgPSAoKSA9PiBzZXRTaG93KHRydWUpO1xyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBzZXRFbGVtZW50c09wdCguLi5wcm9wcz8uaW5mb3M/LnN1Z2dlc3Rpb25zQnlCbG9jayk7XHJcblxyXG4gICAgc2V0U3RhcnREYXRlKFxyXG4gICAgICBuZXcgRGF0ZShwcm9wcz8uaW5mb3NQYXRpZW50Py5zdGFydD8udGltZXN0YW1wICogMTAwMCkudG9KU09OKClcclxuICAgICk7XHJcblxyXG4gICAgc2V0RW5kRGF0ZShuZXcgRGF0ZShwcm9wcz8uaW5mb3NQYXRpZW50Py5lbmQ/LnRpbWVzdGFtcCAqIDEwMDApLnRvSlNPTigpKTtcclxuICB9LCBbXSk7XHJcbiAgY29uc29sZS5sb2cobmV3IERhdGUocHJvcHM/LmluZm9zUGF0aWVudD8uZW5kPy50aW1lc3RhbXAgKiAxMDAwKS50b0pTT04oKSk7XHJcblxyXG4gIGNvbnN0IGhhbmRsZUlucHV0Q2hhbmdlID0gKGUpID0+IHtcclxuICAgIGNvbnNvbGUubG9nKGUsIFwidGFyZ2V0XCIpO1xyXG4gICAgc2V0U3RhcnREYXRlKGUudGFyZ2V0LnZhbHVlKTtcclxuICAgIHNldEVuZERhdGUoZS50YXJnZXQudmFsdWUpO1xyXG4gIH07XHJcbiAgLy8gICBuZXcgRGF0ZSgxMjU0MDg4ODAwICoxMDAwKVxyXG4gIGhhbmRsZUlucHV0Q2hhbmdlO1xyXG4gIHJldHVybiAoXHJcbiAgICA8PlxyXG4gICAgICA8QnV0dG9uIG9uQ2xpY2s9e2hhbmRsZVNob3d9PlxyXG4gICAgICAgIDxGb250QXdlc29tZUljb24gaWNvbj17ZmFQbHVzQ2lyY2xlfSAvPlxyXG4gICAgICA8L0J1dHRvbj5cclxuXHJcbiAgICAgIDxNb2RhbCBzaG93PXtzaG93fSBvbkhpZGU9e2hhbmRsZUNsb3NlfT5cclxuICAgICAgICA8TW9kYWwuSGVhZGVyIGNsb3NlQnV0dG9uPlxyXG4gICAgICAgICAgPE1vZGFsLlRpdGxlPk1vZGlmaWVyIHVuZSBpbmZvcm1hdGlvbjwvTW9kYWwuVGl0bGU+XHJcbiAgICAgICAgPC9Nb2RhbC5IZWFkZXI+XHJcbiAgICAgICAgPE1vZGFsLkJvZHk+XHJcbiAgICAgICAgICB7XCIgXCJ9XHJcbiAgICAgICAgICA8PlxyXG4gICAgICAgICAgICA8Rm9ybS5MYWJlbCBodG1sRm9yPVwiaW5wdXRWYWx1ZVwiPlZhbGV1cjwvRm9ybS5MYWJlbD5cclxuICAgICAgICAgICAgPEZvcm0uU2VsZWN0IHNpemU9XCJsZ1wiPlxyXG4gICAgICAgICAgICAgIHtlbGVtZW50c09wdD8ubWFwKChlbCwgaWQpID0+IChcclxuICAgICAgICAgICAgICAgIDw+XHJcbiAgICAgICAgICAgICAgICAgIDxvcHRpb25cclxuICAgICAgICAgICAgICAgICAgICBrZXk9e2lkfVxyXG4gICAgICAgICAgICAgICAgICAgIHNlbGVjdGVkPXtwcm9wcy5pbmZvc1BhdGllbnQuc3VnZy52YWx1ZSA9PT0gZWw/LnZhbHVlfVxyXG4gICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAge2VsPy52YWx1ZX1cclxuICAgICAgICAgICAgICAgICAgPC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgICA8Lz5cclxuICAgICAgICAgICAgICApKX1cclxuICAgICAgICAgICAgPC9Gb3JtLlNlbGVjdD5cclxuICAgICAgICAgICAgPEZvcm0uTGFiZWwgaHRtbEZvcj1cImlucHV0VmFsdWVcIj5WYWxldXIgU3DDqWNpZmlxdWU8L0Zvcm0uTGFiZWw+XHJcbiAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcclxuICAgICAgICAgICAgICBpZD1cImlucHV0VmFsdWVTcMOpY2lmaXF1ZVwiXHJcbiAgICAgICAgICAgICAgZGVmYXVsdFZhbHVlPXtwcm9wcz8uaW5mb3NQYXRpZW50Py52YWx1ZX1cclxuICAgICAgICAgICAgICBhcmlhLWRlc2NyaWJlZGJ5PVwidmFsdWVTcMOpY2lmaXF1ZVwiXHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDxwPlxyXG4gICAgICAgICAgICAgIExlcyBzdWdnZXN0aW9ucyBtYXJxdcOpZXMgZCd1bmUgw6l0b2lsZSAoKikgZGFucyBsYSBsaXN0ZSBjaS1kZXNzdXNcclxuICAgICAgICAgICAgICBkZW1hbmRlbnQgb2JsaWdhdG9pcmVtZW50IHVuZSB2YWxldXIgc3DDqWNpZmlxdWUuXHJcbiAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgPEZvcm0uTGFiZWwgaHRtbEZvcj1cImlucHV0VmFsdWVcIj5Ew6lidXQ8L0Zvcm0uTGFiZWw+XHJcblxyXG4gICAgICAgICAgICB7c3RhcnQgPyAoXHJcbiAgICAgICAgICAgICAgPEZvcm0uQ29udHJvbFxyXG4gICAgICAgICAgICAgICAgdHlwZT1cImRhdGVcIlxyXG4gICAgICAgICAgICAgICAgZGVmYXVsdFZhbHVlPXtuZXcgRGF0ZShzdGFydCkudG9KU09OKCkuc2xpY2UoMCwgMTApfVxyXG4gICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJIZXJlIGVkaXQgdGhlIHJlbGVhc2UgZGF0ZVwiXHJcbiAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IGhhbmRsZUlucHV0Q2hhbmdlKGUpfVxyXG4gICAgICAgICAgICAgICAgaWQ9XCJpbnB1dFZhbHVlU3DDqWNpZmlxdWVcIlxyXG4gICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICkgOiAoXHJcbiAgICAgICAgICAgICAgPEZvcm0uQ29udHJvbFxyXG4gICAgICAgICAgICAgICAgdHlwZT1cImRhdGVcIlxyXG4gICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJIZXJlIGVkaXQgdGhlIHJlbGVhc2UgZGF0ZVwiXHJcbiAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IGhhbmRsZUlucHV0Q2hhbmdlKGUpfVxyXG4gICAgICAgICAgICAgICAgaWQ9XCJpbnB1dFZhbHVlU3DDqWNpZmlxdWVcIlxyXG4gICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICl9XHJcblxyXG4gICAgICAgICAgICA8Rm9ybS5MYWJlbCBodG1sRm9yPVwiaW5wdXRWYWx1ZVwiPkZpbjwvRm9ybS5MYWJlbD5cclxuXHJcbiAgICAgICAgICAgIHtlbmQgPyAoXHJcbiAgICAgICAgICAgICAgPEZvcm0uQ29udHJvbFxyXG4gICAgICAgICAgICAgICAgdHlwZT1cImRhdGVcIlxyXG4gICAgICAgICAgICAgICAgZGVmYXVsdFZhbHVlPXtuZXcgRGF0ZShlbmQpLnRvSlNPTigpLnNsaWNlKDAsIDEwKX1cclxuICAgICAgICAgICAgICAgIGlkPVwiaW5wdXRWYWx1ZVNww6ljaWZpcXVlXCJcclxuICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICApIDogKFxyXG4gICAgICAgICAgICAgIDxGb3JtLkNvbnRyb2wgdHlwZT1cImRhdGVcIiBpZD1cImlucHV0VmFsdWVTcMOpY2lmaXF1ZVwiIC8+XHJcbiAgICAgICAgICAgICl9XHJcblxyXG4gICAgICAgICAgICA8Rm9ybS5MYWJlbCBodG1sRm9yPVwiaW5wdXRWYWx1ZVwiPkNvbW1lbnRhaXJlPC9Gb3JtLkxhYmVsPlxyXG4gICAgICAgICAgICA8Rm9ybS5Db250cm9sXHJcbiAgICAgICAgICAgICAgYXM9XCJ0ZXh0YXJlYVwiXHJcbiAgICAgICAgICAgICAgcm93cz17M31cclxuICAgICAgICAgICAgICBkZWZhdWx0VmFsdWU9e3Byb3BzPy5pbmZvc1BhdGllbnQ/LmNvbW1lbnR9XHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICA8Lz5cclxuICAgICAgICA8L01vZGFsLkJvZHk+XHJcbiAgICAgICAgPE1vZGFsLkZvb3Rlcj5cclxuICAgICAgICAgIDxCdXR0b24gb25DbGljaz17aGFuZGxlQ2xvc2V9PkNsb3NlPC9CdXR0b24+XHJcbiAgICAgICAgICA8QnV0dG9uIG9uQ2xpY2s9e2hhbmRsZUNsb3NlfT5TYXZlIENoYW5nZXM8L0J1dHRvbj5cclxuICAgICAgICA8L01vZGFsLkZvb3Rlcj5cclxuICAgICAgPC9Nb2RhbD5cclxuICAgIDwvPlxyXG4gICk7XHJcbn1cclxuXHJcbi8vIHJlbmRlcig8TW9kYWwgLz4pO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgTW9kYWxFZGl0SW5mb3M7XHJcbiIsImltcG9ydCBSZWFjdCwgeyB1c2VDb250ZXh0LCB1c2VEZWJ1Z1ZhbHVlIH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IHVzZVJlZiwgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQge1xyXG4gIENoYXJ0IGFzIENoYXJ0SlMsXHJcbiAgQ2F0ZWdvcnlTY2FsZSxcclxuICBMaW5lYXJTY2FsZSxcclxuICBCYXJFbGVtZW50LFxyXG4gIFRpdGxlLFxyXG4gIFRvb2x0aXAsXHJcbiAgTGVnZW5kLFxyXG59IGZyb20gXCJjaGFydC5qc1wiO1xyXG5pbXBvcnQgeyBCYXIgfSBmcm9tIFwicmVhY3QtY2hhcnRqcy0yXCI7XHJcbmltcG9ydCB1c2VBdXRoIGZyb20gXCIuLi8uLi9ob29rcy91c2VBdXRoXCI7XHJcbmltcG9ydCB7IHVzZVBhcmFtcyB9IGZyb20gXCJyZWFjdC1yb3V0ZXItZG9tXCI7XHJcbmltcG9ydCBheGlvcyBmcm9tIFwiYXhpb3NcIjtcclxuXHJcbkNoYXJ0SlMucmVnaXN0ZXIoXHJcbiAgQ2F0ZWdvcnlTY2FsZSxcclxuICBMaW5lYXJTY2FsZSxcclxuICBCYXJFbGVtZW50LFxyXG4gIFRpdGxlLFxyXG4gIFRvb2x0aXAsXHJcbiAgTGVnZW5kXHJcbik7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBBcHAoKSB7XHJcbiAgbGV0IGlkID0gdXNlUGFyYW1zKCkuaWQ7XHJcbiAgdmFyIGZvcm1EYXRhID0gbmV3IEZvcm1EYXRhKCk7XHJcbiAgZm9ybURhdGEuYXBwZW5kKFwiaWRcIiwgaWQudG9TdHJpbmcoKSk7XHJcbiAgY29uc3QgW2F1dGgsIHNldEF1dGhdID0gdXNlU3RhdGUodXNlQXV0aCgpKTtcclxuICBjb25zdCBbaWRQYXRpZW50LCBzZXRJZFBhdGllbnRdID0gdXNlU3RhdGUoaWQpO1xyXG4gIGNvbnN0IFtpbmZvcm1hdGlvbnMsIHNldEluZm9ybWF0aW9uc10gPSB1c2VTdGF0ZSgpO1xyXG4gIGNvbnN0IFtvcHRpb25zLCBzZXRPcHRpb25zXSA9IHVzZVN0YXRlKCk7XHJcbiAgY29uc3QgW2ZpbHRlckRhdGVzLCBzZXRGaWx0ZXJEYXRlc10gPSB1c2VTdGF0ZSgpO1xyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBheGlvcyh7XHJcbiAgICAgIG1ldGhvZDogXCJwb3N0XCIsXHJcbiAgICAgIHVybDogXCIvYXBpL2dldEZvbGxvd1VwUmVwb3J0c0luZGljYXRvcnNcIixcclxuICAgICAgZGF0YTogZm9ybURhdGEsXHJcbiAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICBcIkNvbnRlbnQtVHlwZVwiOiBcImFwcGxpY2F0aW9uL2pzb25cIixcclxuICAgICAgICBBdXRob3JpemF0aW9uOiBgQmVhcmVyICR7YXV0aC5hdXRoLmFjY2Vzc1Rva2VufWAsXHJcbiAgICAgIH0sXHJcbiAgICB9KVxyXG4gICAgICAudGhlbihmdW5jdGlvbiAocmVzcG9uc2UpIHtcclxuICAgICAgICBsZXQgY29tID0gcmVzcG9uc2UuZGF0YS5maWx0ZXIoKGUpID0+IGUuaW5kaS5uYW1lID09PSBcIkNvbXBvcnRlbWVudFwiKTtcclxuICAgICAgICBsZXQgdmV0ID0gcmVzcG9uc2UuZGF0YS5maWx0ZXIoKGUpID0+IGUuaW5kaS5uYW1lID09PSBcIlbDqnRlbWVudHNcIik7XHJcbiAgICAgICAgbGV0IGNvciA9IHJlc3BvbnNlLmRhdGEuZmlsdGVyKChlKSA9PiBlLmluZGkubmFtZSA9PT0gXCJDb3Jwc1wiKTtcclxuXHJcbiAgICAgICAgbGV0IGFyckRhdGVzID0gW107XHJcbiAgICAgICAgcmVzcG9uc2UuZGF0YS5mb3JFYWNoKChlbGVtZW50KSA9PiB7XHJcbiAgICAgICAgICBsZXQgZGF0ZWZvcm1hdGVkID0gbmV3IERhdGUoZWxlbWVudC5mb3JlLnJlcG9ydERhdGUpLnRvTG9jYWxlU3RyaW5nKFxyXG4gICAgICAgICAgICBcImZyLUJFXCIsXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICBkYXRlU3R5bGU6IFwic2hvcnRcIixcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgKTtcclxuICAgICAgICAgIGFyckRhdGVzLnB1c2goZGF0ZWZvcm1hdGVkKTtcclxuICAgICAgICB9KTtcclxuICAgICAgICBsZXQgZmlsdGVyRGF0ZXMgPSBhcnJEYXRlcy5maWx0ZXIoZnVuY3Rpb24gKHZhbHVlLCBpbmRleCwgYXJyYXkpIHtcclxuICAgICAgICAgIHJldHVybiBhcnJheS5pbmRleE9mKHZhbHVlKSA9PT0gaW5kZXg7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIHNldEZpbHRlckRhdGVzKGZpbHRlckRhdGVzKTtcclxuXHJcbiAgICAgICAgaWYgKFxyXG4gICAgICAgICAgZmlsdGVyRGF0ZXMgJiZcclxuICAgICAgICAgIGZpbHRlckRhdGVzLmxlbmd0aCA+IDAgJiZcclxuICAgICAgICAgIGNvbSAmJlxyXG4gICAgICAgICAgY29tLmxlbmd0aCA+IDAgJiZcclxuICAgICAgICAgIHZldCAmJlxyXG4gICAgICAgICAgdmV0Lmxlbmd0aCA+IDAgJiZcclxuICAgICAgICAgIGNvciAmJlxyXG4gICAgICAgICAgY29yLmxlbmd0aCA+IDBcclxuICAgICAgICApIHtcclxuICAgICAgICAgIHNldE9wdGlvbnMoe1xyXG4gICAgICAgICAgICBwbHVnaW5zOiB7XHJcbiAgICAgICAgICAgICAgdGl0bGU6IHtcclxuICAgICAgICAgICAgICAgIGRpc3BsYXk6IHRydWUsXHJcbiAgICAgICAgICAgICAgICB0ZXh0OiBcIkNWQyDDqXZvbHV0aW9uXCIsXHJcbiAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgcmVzcG9uc2l2ZTogdHJ1ZSxcclxuICAgICAgICAgICAgc2NhbGVzOiB7XHJcbiAgICAgICAgICAgICAgeDoge1xyXG4gICAgICAgICAgICAgICAgc3RhY2tlZDogdHJ1ZSxcclxuICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgIHk6IHtcclxuICAgICAgICAgICAgICAgIHN0YWNrZWQ6IHRydWUsXHJcbiAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgIHNldEluZm9ybWF0aW9ucyh7XHJcbiAgICAgICAgICAgIGxhYmVsczogWy4uLmZpbHRlckRhdGVzXSxcclxuICAgICAgICAgICAgZGF0YXNldHM6IFtcclxuICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBsYWJlbDogXCJDb21wb3J0ZW1lbnRcIixcclxuICAgICAgICAgICAgICAgIGRhdGE6IFsuLi5jb20ubWFwKChlKSA9PiBlLnZhbHVlKV0sXHJcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IFwicmdiKDI1NSwgOTksIDEzMilcIixcclxuICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGxhYmVsOiBcIlbDqnRlbWVudHNcIixcclxuICAgICAgICAgICAgICAgIGRhdGE6IFsuLi52ZXQubWFwKChlKSA9PiBlLnZhbHVlKV0sXHJcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IFwicmdiKDc1LCAxOTIsIDE5MilcIixcclxuICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGxhYmVsOiBcIkNvcnBzXCIsXHJcbiAgICAgICAgICAgICAgICBkYXRhOiBbLi4uY29yLm1hcCgoZSkgPT4gZS52YWx1ZSldLFxyXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOiBcInJnYig1MywgMTYyLCAyMzUpXCIsXHJcbiAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgXSxcclxuICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy8gcmV0dXJuIHJlc3BvbnNlLmRhdGE7XHJcbiAgICAgIH0pXHJcbiAgICAgIC5jYXRjaChmdW5jdGlvbiAocmVzcG9uc2UpIHt9KTtcclxuICB9LCBbaWRQYXRpZW50XSk7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8PlxyXG4gICAgICB7b3B0aW9ucyAmJiBpbmZvcm1hdGlvbnMgJiYgPEJhciBvcHRpb25zPXtvcHRpb25zfSBkYXRhPXtpbmZvcm1hdGlvbnN9IC8+fVxyXG4gICAgPC8+XHJcbiAgKTtcclxufVxyXG4iLCJpbXBvcnQgUmVhY3QsIHsgdXNlQ29udGV4dCwgdXNlRGVidWdWYWx1ZSwgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgdXNlQXV0aCBmcm9tIFwiLi4vLi4vaG9va3MvdXNlQXV0aFwiO1xyXG5pbXBvcnQgeyB1c2VQYXJhbXMgfSBmcm9tIFwicmVhY3Qtcm91dGVyLWRvbVwiO1xyXG5pbXBvcnQgYXhpb3MgZnJvbSBcImF4aW9zXCI7XHJcbmltcG9ydCBCYXNpYyBmcm9tIFwiLi9Ecm9wem9uZVwiO1xyXG5cclxuY29uc3QgTWVkaWFzID0gKHByb3BzKSA9PiB7XHJcbiAgbGV0IGlkID0gdXNlUGFyYW1zKCkuaWQ7XHJcbiAgdmFyIGZvcm1EYXRhID0gbmV3IEZvcm1EYXRhKCk7XHJcbiAgZm9ybURhdGEuYXBwZW5kKFwiaWRcIiwgaWQudG9TdHJpbmcoKSk7XHJcbiAgY29uc3QgW2F1dGgsIHNldEF1dGhdID0gdXNlU3RhdGUodXNlQXV0aCgpKTtcclxuICBjb25zdCBbaWRQYXRpZW50LCBzZXRJZFBhdGllbnRdID0gdXNlU3RhdGUoaWQpO1xyXG4gIGNvbnN0IFtsaXN0TWVkaWFzLCBzZXRNZWRpYXNdID0gdXNlU3RhdGUobnVsbCk7XHJcbiAgY29uc3QgW29wdGlvbnMsIHNldE9wdGlvbnNdID0gdXNlU3RhdGUoKTtcclxuICBjb25zdCBbZmlsdGVyRGF0ZXMsIHNldEZpbHRlckRhdGVzXSA9IHVzZVN0YXRlKCk7XHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGF4aW9zKHtcclxuICAgICAgbWV0aG9kOiBcInBvc3RcIixcclxuICAgICAgdXJsOiBcIi9hcGkvZ2V0QWxsTWVkaWFzQnlQYXRpZW50c1wiLFxyXG4gICAgICBkYXRhOiBmb3JtRGF0YSxcclxuICAgICAgaGVhZGVyczoge1xyXG4gICAgICAgIFwiQ29udGVudC1UeXBlXCI6IFwiYXBwbGljYXRpb24vanNvblwiLFxyXG4gICAgICAgIEF1dGhvcml6YXRpb246IGBCZWFyZXIgJHthdXRoLmF1dGguYWNjZXNzVG9rZW59YCxcclxuICAgICAgfSxcclxuICAgIH0pXHJcbiAgICAgIC50aGVuKGZ1bmN0aW9uIChyZXNwb25zZSkge1xyXG4gICAgICAgIHNldE1lZGlhcyhyZXNwb25zZSk7XHJcbiAgICAgIH0pXHJcbiAgICAgIC5jYXRjaChmdW5jdGlvbiAocmVzcG9uc2UpIHt9KTtcclxuICB9LCBbaWRQYXRpZW50XSk7XHJcblxyXG4gIGNvbnN0IHNlbmRNZWRpYXMgPSAoKSA9PiB7XHJcbiAgICBjb25zb2xlLmxvZyhhY2NlcHRlZEZpbGVzKTtcclxuICAgIHZhciBmb3JtRGF0YSA9IG5ldyBGb3JtRGF0YSgpO1xyXG4gICAgZm9ybURhdGEuYXBwZW5kKFwiaWRcIiwgaWQudG9TdHJpbmcoKSk7XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgW3ZhbHVlLCBzZXRWYWx1ZV0gPSB1c2VTdGF0ZShudWxsKTtcclxuXHJcbiAgZnVuY3Rpb24gaGFuZGxlQ2hhbmdlKG5ld1ZhbHVlKSB7XHJcbiAgICBjb25zb2xlLmxvZyhuZXdWYWx1ZSk7XHJcbiAgICBzZXRWYWx1ZShuZXdWYWx1ZSk7XHJcbiAgfVxyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPD5cclxuICAgICAgPEJhc2ljIHZhbHVlPXt2YWx1ZX0gb25DaGFuZ2U9e2hhbmRsZUNoYW5nZX0gLz5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3dcIj5cclxuICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cImJ0bi1tZXRpcyBzZW5kLWJ0blwiIG9uQ2xpY2s9eyhlKSA9PiBzZW5kTWVkaWFzKCl9PlxyXG4gICAgICAgICAgRW52b3llclxyXG4gICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAge2xpc3RNZWRpYXMgJiYgbGlzdE1lZGlhcy5kYXRhLmxlbmd0aCA+IDAgJiYgKFxyXG4gICAgICAgIDw+XHJcbiAgICAgICAgICA8aDY+TGlzdGUgZGUgZmljaGllcnMgZMOpasOgIHByw6lzZW50czwvaDY+XHJcbiAgICAgICAgICB7bGlzdE1lZGlhcz8uZGF0YT8ubWFwKChtZWRpYXMsIGlkKSA9PiAoXHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93XCI+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtc20tM1wiPnttZWRpYXMub3JpZ2luYWxGaWxlbmFtZX08L2Rpdj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1zbS0yXCI+e21lZGlhcy5zdWdnLnBhcmVudFN1Z2cudmFsdWV9PC9kaXY+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtc20tMlwiPnttZWRpYXMuY29tbWVudH08L2Rpdj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1zbS0yXCI+XHJcbiAgICAgICAgICAgICAgICB7bmV3IERhdGUobWVkaWFzLmRhdGUpLnRvTG9jYWxlU3RyaW5nKFwiZnItQkVcIiwge1xyXG4gICAgICAgICAgICAgICAgICBkYXRlU3R5bGU6IFwic2hvcnRcIixcclxuICAgICAgICAgICAgICAgIH0pfVxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1zbS0zXCI+XHJcbiAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cImJ0bi1tZXRpcyBkZWxldGUtYnRuXCI+ZGVsZXRlPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cImJ0bi1tZXRpc1wiPnTDqWzDqWNoYXJnZXI8L2J1dHRvbj5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICApKX1cclxuICAgICAgICA8Lz5cclxuICAgICAgKX1cclxuICAgIDwvPlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBNZWRpYXM7XHJcbiIsImltcG9ydCBSZWFjdCwgeyB1c2VDb250ZXh0LCB1c2VEZWJ1Z1ZhbHVlLCB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB1c2VBdXRoIGZyb20gXCIuLi8uLi9ob29rcy91c2VBdXRoXCI7XHJcbmltcG9ydCB7IHVzZVBhcmFtcyB9IGZyb20gXCJyZWFjdC1yb3V0ZXItZG9tXCI7XHJcbmltcG9ydCBheGlvcyBmcm9tIFwiYXhpb3NcIjtcclxuaW1wb3J0IEJhc2ljIGZyb20gXCIuL0Ryb3B6b25lXCI7XHJcblxyXG5jb25zdCBQbGFjZXMgPSAoKSA9PiB7XHJcbiAgbGV0IGlkID0gdXNlUGFyYW1zKCkuaWQ7XHJcbiAgdmFyIGZvcm1EYXRhID0gbmV3IEZvcm1EYXRhKCk7XHJcbiAgZm9ybURhdGEuYXBwZW5kKFwiaWRcIiwgaWQudG9TdHJpbmcoKSk7XHJcbiAgY29uc3QgW2F1dGgsIHNldEF1dGhdID0gdXNlU3RhdGUodXNlQXV0aCgpKTtcclxuICBjb25zdCBbaWRQYXRpZW50LCBzZXRJZFBhdGllbnRdID0gdXNlU3RhdGUoaWQpO1xyXG4gIGNvbnN0IFtsaXN0UGxhY2VzLCBzZXRQbGFjZXNdID0gdXNlU3RhdGUobnVsbCk7XHJcbiAgY29uc3QgW29wdGlvbnMsIHNldE9wdGlvbnNdID0gdXNlU3RhdGUoKTtcclxuICBjb25zdCBbZmlsdGVyRGF0ZXMsIHNldEZpbHRlckRhdGVzXSA9IHVzZVN0YXRlKCk7XHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGF4aW9zKHtcclxuICAgICAgbWV0aG9kOiBcInBvc3RcIixcclxuICAgICAgdXJsOiBcIi9hcGkvZ2V0UGxhY2VzUGF0aWVudHNcIixcclxuICAgICAgZGF0YTogZm9ybURhdGEsXHJcbiAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICBcIkNvbnRlbnQtVHlwZVwiOiBcImFwcGxpY2F0aW9uL2pzb25cIixcclxuICAgICAgICBBdXRob3JpemF0aW9uOiBgQmVhcmVyICR7YXV0aC5hdXRoLmFjY2Vzc1Rva2VufWAsXHJcbiAgICAgIH0sXHJcbiAgICB9KVxyXG4gICAgICAudGhlbihmdW5jdGlvbiAocmVzcG9uc2UpIHtcclxuICAgICAgICBzZXRQbGFjZXMocmVzcG9uc2UpO1xyXG4gICAgICB9KVxyXG4gICAgICAuY2F0Y2goZnVuY3Rpb24gKHJlc3BvbnNlKSB7fSk7XHJcbiAgfSwgW2lkUGF0aWVudF0pO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPD5cclxuICAgICAge2xpc3RQbGFjZXMgJiYgbGlzdFBsYWNlcy5kYXRhLmxlbmd0aCA+IDAgJiYgKFxyXG4gICAgICAgIDw+XHJcbiAgICAgICAgICA8aDY+TGlldXg8L2g2PlxyXG4gICAgICAgICAge2xpc3RQbGFjZXM/LmRhdGE/Lm1hcCgocGxhY2VzLCBpZCkgPT4gKFxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvd1wiPlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLXNtLTNcIj5cclxuICAgICAgICAgICAgICAgIHtwbGFjZXMuY29udC5maXJzdG5hbWV9XHJcbiAgICAgICAgICAgICAgICB7cGxhY2VzLmNvbnQubGFzdG5hbWV9XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgey8qIDxkaXYgY2xhc3NOYW1lPVwiY29sLXNtLTJcIj57cGxhY2VzLmxhc3RuYW1lfTwvZGl2PiAqL31cclxuICAgICAgICAgICAgICB7LyogPGRpdiBjbGFzc05hbWU9XCJjb2wtc20tMlwiPnttZWRpYXMuY29tbWVudH08L2Rpdj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1zbS0yXCI+XHJcbiAgICAgICAgICAgICAgICB7bmV3IERhdGUobWVkaWFzLmRhdGUpLnRvTG9jYWxlU3RyaW5nKFwiZnItQkVcIiwge1xyXG4gICAgICAgICAgICAgICAgICBkYXRlU3R5bGU6IFwic2hvcnRcIixcclxuICAgICAgICAgICAgICAgIH0pfVxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLXNtLTNcIj5cclxuICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwiYnRuLW1ldGlzIGRlbGV0ZS1idG5cIj5kZWxldGU8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwiYnRuLW1ldGlzXCI+dMOpbMOpY2hhcmdlcjwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgIDwvZGl2PiAqL31cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICApKX1cclxuICAgICAgICA8Lz5cclxuICAgICAgKX1cclxuICAgIDwvPlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBQbGFjZXM7XHJcbiIsImltcG9ydCBSZWFjdCwge1xyXG4gIHVzZUNvbnRleHQsXHJcbiAgdXNlRGVidWdWYWx1ZSxcclxuICB1c2VSZWYsXHJcbiAgdXNlU3RhdGUsXHJcbiAgdXNlRWZmZWN0LFxyXG59IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgdXNlQXV0aCBmcm9tIFwiLi4vLi4vL2hvb2tzL3VzZUF1dGhcIjtcclxuaW1wb3J0IGF4aW9zIGZyb20gXCJheGlvc1wiO1xyXG5pbXBvcnQgeyBMaW5rLCB1c2VOYXZpZ2F0ZSwgdXNlTG9jYXRpb24sIHVzZVBhcmFtcyB9IGZyb20gXCJyZWFjdC1yb3V0ZXItZG9tXCI7XHJcbmltcG9ydCBFZGl0b3IgZnJvbSBcIi4vRWRpdG9yLVJlcG9ydHNcIjtcclxuXHJcbmNvbnN0IFByb2ZpbGUgPSAoKSA9PiB7XHJcbiAgbGV0IGlkID0gdXNlUGFyYW1zKCkuaWQ7XHJcbiAgY29uc3QgW2F1dGgsIHNldEF1dGhdID0gdXNlU3RhdGUodXNlQXV0aCgpKTtcclxuICBjb25zdCBbaWRQYXRpZW50LCBzZXRJZFBhdGllbnRdID0gdXNlU3RhdGUoaWQpO1xyXG4gIGNvbnN0IFtpc0VkaXQsIHNldEVkaXRdID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gIGNvbnN0IFt0b2dnbGUsIHNldFRvZ2dsZV0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcblxyXG4gIHZhciBmb3JtRGF0YSA9IG5ldyBGb3JtRGF0YSgpO1xyXG4gIGZvcm1EYXRhLmFwcGVuZChcImlkXCIsIGlkLnRvU3RyaW5nKCkpO1xyXG5cclxuICBsZXQgb2JqUGF0aWVudCA9IHt9O1xyXG5cclxuICBjb25zdCBbaW5mb3JtYXRpb25QYXRpZW50LCBzZXRJbmZvcm1hdGlvbl0gPSB1c2VTdGF0ZShudWxsKTtcclxuICBjb25zdCBbZ29hbHMsIHNldEdvYWxzXSA9IHVzZVN0YXRlKG51bGwpO1xyXG4gIGNvbnN0IFthY3Rpdml0aWVzLCBzZXRBY3Rpdml0aWVzXSA9IHVzZVN0YXRlKG51bGwpO1xyXG4gIC8vIGdldEZvbGxvd1VwUmVwb3J0c0dvYWxzXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGF4aW9zKHtcclxuICAgICAgbWV0aG9kOiBcInBvc3RcIixcclxuICAgICAgdXJsOiBcIi9hcGkvZ2V0Rm9sbG93VXBSZXBvcnRzQnlJZFwiLFxyXG4gICAgICBkYXRhOiBmb3JtRGF0YSxcclxuICAgICAgaGVhZGVyczoge1xyXG4gICAgICAgIFwiQ29udGVudC1UeXBlXCI6IFwiYXBwbGljYXRpb24vanNvblwiLFxyXG4gICAgICAgIEF1dGhvcml6YXRpb246IGBCZWFyZXIgJHthdXRoLmF1dGguYWNjZXNzVG9rZW59YCxcclxuICAgICAgfSxcclxuICAgIH0pXHJcbiAgICAgIC50aGVuKGZ1bmN0aW9uIChyZXNwb25zZSkge1xyXG4gICAgICAgIHNldEluZm9ybWF0aW9uKHJlc3BvbnNlKTtcclxuICAgICAgfSlcclxuICAgICAgLmNhdGNoKGZ1bmN0aW9uIChyZXNwb25zZSkge30pO1xyXG5cclxuICAgIGF4aW9zKHtcclxuICAgICAgbWV0aG9kOiBcInBvc3RcIixcclxuICAgICAgdXJsOiBcIi9hcGkvZ2V0Rm9sbG93VXBSZXBvcnRzR29hbHNcIixcclxuICAgICAgZGF0YTogZm9ybURhdGEsXHJcbiAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICBcIkNvbnRlbnQtVHlwZVwiOiBcImFwcGxpY2F0aW9uL2pzb25cIixcclxuICAgICAgICBBdXRob3JpemF0aW9uOiBgQmVhcmVyICR7YXV0aC5hdXRoLmFjY2Vzc1Rva2VufWAsXHJcbiAgICAgIH0sXHJcbiAgICB9KVxyXG4gICAgICAudGhlbihmdW5jdGlvbiAocmVzcG9uc2UpIHtcclxuICAgICAgICBzZXRHb2FscyhyZXNwb25zZSk7XHJcbiAgICAgIH0pXHJcbiAgICAgIC5jYXRjaChmdW5jdGlvbiAocmVzcG9uc2UpIHt9KTtcclxuICB9LCBbaWRQYXRpZW50XSk7XHJcblxyXG4gIGNvbnN0IGVkaXRDb250ZW50ID0gKGUpID0+IHtcclxuICAgIGNvbnNvbGUubG9nKFwiZVwiKTtcclxuICAgIHNldEVkaXQodHJ1ZSk7XHJcbiAgfTtcclxuXHJcbiAgY29uc29sZS5sb2coaW5mb3JtYXRpb25QYXRpZW50KTtcclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXItb25nbGV0UHJvZmlsZVwiPlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvdyBpdGVtLXJlcG9ydFwiPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLXNtLTNcIj5cclxuICAgICAgICAgIDxoNj5PYmplY3RpZnM8L2g2PlxyXG4gICAgICAgICAge2dvYWxzPy5kYXRhLm1hcCgoZywgaWQpID0+IChcclxuICAgICAgICAgICAgPD5cclxuICAgICAgICAgICAgICB7ZyAmJiBnLnR5cGUgPT09IDEgJiYgKFxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpdGVtLWdvYWxzXCIga2V5PXtpZH0+XHJcbiAgICAgICAgICAgICAgICAgIHtuZXcgRGF0ZShnLmNyZWF0aW9uRGF0ZSkudG9Mb2NhbGVTdHJpbmcoXCJmci1CRVwiLCB7XHJcbiAgICAgICAgICAgICAgICAgICAgZGF0ZVN0eWxlOiBcInNob3J0XCIsXHJcbiAgICAgICAgICAgICAgICAgIH0pfVxyXG4gICAgICAgICAgICAgICAgICB7Zz8uZnVuYz8udmFsdWV9IHtnPy5kZXNjcmlwdGlvbn1cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgIDwvPlxyXG4gICAgICAgICAgKSl9XHJcbiAgICAgICAgICA8aDY+QXBwZWxzPC9oNj5cclxuICAgICAgICAgIHtnb2Fscz8uZGF0YS5tYXAoKGcsIGlkKSA9PiAoXHJcbiAgICAgICAgICAgIDw+XHJcbiAgICAgICAgICAgICAge2cgJiYgZz8udHlwZSA9PT0gMiAmJiAoXHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIml0ZW0tZ29hbHNcIiBrZXk9e2lkfT5cclxuICAgICAgICAgICAgICAgICAge25ldyBEYXRlKGcuY3JlYXRpb25EYXRlKS50b0xvY2FsZVN0cmluZyhcImZyLUJFXCIsIHtcclxuICAgICAgICAgICAgICAgICAgICBkYXRlU3R5bGU6IFwic2hvcnRcIixcclxuICAgICAgICAgICAgICAgICAgfSl9XHJcbiAgICAgICAgICAgICAgICAgIHtnPy5mdW5jPy52YWx1ZX0ge2c/LmRlc2NyaXB0aW9ufVxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgPC8+XHJcbiAgICAgICAgICApKX1cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1zbS05XCI+XHJcbiAgICAgICAgICB7aW5mb3JtYXRpb25QYXRpZW50Py5kYXRhLm1hcCgociwgaWQpID0+IChcclxuICAgICAgICAgICAgPGRpdiBrZXk9e2lkfSBjbGFzc05hbWU9XCJyZXBvcnQtY29udGVudFwiPlxyXG4gICAgICAgICAgICAgIHtyICYmIHIuYWN0aXZpdHlUeXBlID09PSAyICYmIDxoNj5BcHBlbCBTb3J0YW50PC9oNj59XHJcbiAgICAgICAgICAgICAge3IgJiYgci5hY3Rpdml0eVR5cGUgPT09IDQgJiYgPGg2PkFwcGVsIEVudHJhbnQ8L2g2Pn1cclxuICAgICAgICAgICAgICB7ciAmJiByLmRlbGV0ZWRBdCA9PT0gbnVsbCAmJiAoXHJcbiAgICAgICAgICAgICAgICA8PlxyXG4gICAgICAgICAgICAgICAgICA8YnV0dG9uXHJcbiAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgc2V0VG9nZ2xlKCF0b2dnbGUpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgci5pc0hpZ2h0bGlnaHQgPSB0b2dnbGU7XHJcbiAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgIEVkaXRlclxyXG4gICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAge3IuaXNIaWdodGxpZ2h0ID09PSB0cnVlICYmIChcclxuICAgICAgICAgICAgICAgICAgICA8RWRpdG9yIGNvbnRlbnRUZXh0PXtyLmNvbnRlbnR9PjwvRWRpdG9yPlxyXG4gICAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgICAgICB7ci5pc0hpZ2h0bGlnaHQgPT09IGZhbHNlICYmIChcclxuICAgICAgICAgICAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJtdC00XCJcclxuICAgICAgICAgICAgICAgICAgICAgIGRhbmdlcm91c2x5U2V0SW5uZXJIVE1MPXt7IF9faHRtbDogci5jb250ZW50IH19XHJcbiAgICAgICAgICAgICAgICAgICAgPjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgICAgICB7ci5pc0hpZ2h0bGlnaHQgPT09IG51bGwgJiYgKFxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cIm10LTRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUw9e3sgX19odG1sOiByLmNvbnRlbnQgfX1cclxuICAgICAgICAgICAgICAgICAgICA+PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICl9XHJcblxyXG4gICAgICAgICAgICAgICAgICB7LyogPEVkaXRvciBjb250ZW50VGV4dD17ci5jb250ZW50fT48L0VkaXRvcj4gKi99XHJcbiAgICAgICAgICAgICAgICA8Lz5cclxuICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICkpfVxyXG4gICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICB7LyogPGgxPlRFWFQ8L2gxPiAqL31cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgUHJvZmlsZTtcclxuIiwiaW1wb3J0IFJlYWN0LCB7IHVzZUNvbnRleHQsIHVzZURlYnVnVmFsdWUgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgdXNlTG9jYXRpb24sIE5hdmlnYXRlLCBPdXRsZXQgfSBmcm9tIFwicmVhY3Qtcm91dGVyLWRvbVwiO1xyXG5pbXBvcnQgdXNlQXV0aCBmcm9tIFwiLi4vaG9va3MvdXNlQXV0aFwiO1xyXG5cclxuY29uc3QgUmVxdWlyZUF1dGggPSAoeyBhbGxvd2VkUm9sZXMgfSkgPT4ge1xyXG4gIGNvbnN0IHsgYXV0aCB9ID0gdXNlQXV0aCgpO1xyXG4gIGNvbnN0IGxvY2F0aW9uID0gdXNlTG9jYXRpb24oKTtcclxuXHJcbiAgcmV0dXJuIGF1dGg/LnJvbGVzPy5maW5kKChyb2xlKSA9PiBhbGxvd2VkUm9sZXM/LmluY2x1ZGVzKHJvbGUpKSA/IChcclxuICAgIDxPdXRsZXQgLz5cclxuICApIDogYXV0aD8uYWNjZXNzVG9rZW4gPyAoXHJcbiAgICA8TmF2aWdhdGUgdG89XCIvdW5hdXRob3JpemVkXCIgc3RhdGU9e3sgZnJvbTogbG9jYXRpb24gfX0gcmVwbGFjZSAvPlxyXG4gICkgOiAoXHJcbiAgICA8TmF2aWdhdGUgdG89XCIvY29ubmVjdFwiIHN0YXRlPXt7IGZyb206IGxvY2F0aW9uIH19IHJlcGxhY2UgLz5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgUmVxdWlyZUF1dGg7XHJcbiIsImltcG9ydCBSZWFjdCwgeyB1c2VDb250ZXh0LCB1c2VEZWJ1Z1ZhbHVlLCB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBGb3JtIGZyb20gXCJyZWFjdC1ib290c3RyYXAvRm9ybVwiO1xyXG5pbXBvcnQgTmF2IGZyb20gXCJyZWFjdC1ib290c3RyYXAvTmF2XCI7XHJcbmltcG9ydCBheGlvcyBmcm9tIFwiYXhpb3NcIjtcclxuaW1wb3J0IE5hdmJhciBmcm9tIFwicmVhY3QtYm9vdHN0cmFwL05hdmJhclwiO1xyXG5pbXBvcnQgTmF2RHJvcGRvd24gZnJvbSBcInJlYWN0LWJvb3RzdHJhcC9OYXZEcm9wZG93blwiO1xyXG5pbXBvcnQgT2ZmY2FudmFzIGZyb20gXCJyZWFjdC1ib290c3RyYXAvT2ZmY2FudmFzXCI7XHJcbmltcG9ydCB1c2VBdXRoIGZyb20gXCIuLi9ob29rcy91c2VBdXRoXCI7XHJcbmltcG9ydCB7IHVzZU5hdmlnYXRlLCBMaW5rIH0gZnJvbSBcInJlYWN0LXJvdXRlci1kb21cIjtcclxuXHJcbmNvbnN0IFNlYXJjaCA9ICgpID0+IHtcclxuICBsZXQgW3ZhbHVlU2VhcmNoLCBzZXRTZWFyY2hdID0gdXNlU3RhdGUobnVsbCk7XHJcbiAgY29uc3QgW2F1dGgsIHNldEF1dGhdID0gdXNlU3RhdGUodXNlQXV0aCgpKTtcclxuICBsZXQgW3Jlc3VsdFNlYXJjaCwgc2V0UmVzdWx0U2VhcmNoXSA9IHVzZVN0YXRlKG51bGwpO1xyXG4gIGxldCBbaXNPcGVuLCBzZXRPcGVuUmVzdWx0XSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuXHJcbiAgY29uc3Qgc2V0VmFsdWUgPSAoZSkgPT4ge1xyXG4gICAgLy8gZS5kZWZhdWx0UHJldmVudGVkKCk7XHJcbiAgICAvLyBjb25zb2xlLmxvZyhlKTtcclxuICAgIHNldFNlYXJjaChlLnRhcmdldC52YWx1ZSk7XHJcbiAgICAvLyBwb3N0cy5maWx0ZXIoKGUpID0+IGUubmFtZSA9PT0gdmFsdWVTZWFyY2gpO1xyXG4gICAgLy8gY29uc29sZS5sb2codmFsdWVTZWFyY2gpO1xyXG4gICAgaWYgKHZhbHVlU2VhcmNoICYmIHZhbHVlU2VhcmNoPy5sZW5ndGggPiAxKSB7XHJcbiAgICAgIHNldE9wZW5SZXN1bHQodHJ1ZSk7XHJcbiAgICAgIGF4aW9zKHtcclxuICAgICAgICBtZXRob2Q6IFwicG9zdFwiLFxyXG4gICAgICAgIHVybDogXCIvYXBpL2dldFNlYXJjaFwiLFxyXG4gICAgICAgIHBhcmFtczogeyB2YWw6IHZhbHVlU2VhcmNoLnRvU3RyaW5nKCkgfSxcclxuICAgICAgICBoZWFkZXJzOiB7XHJcbiAgICAgICAgICBcIkNvbnRlbnQtVHlwZVwiOiBcImFwcGxpY2F0aW9uL2pzb25cIixcclxuICAgICAgICAgIEF1dGhvcml6YXRpb246IGBCZWFyZXIgJHthdXRoLmF1dGguYWNjZXNzVG9rZW59YCxcclxuICAgICAgICB9LFxyXG4gICAgICB9KVxyXG4gICAgICAgIC50aGVuKGZ1bmN0aW9uIChyZXNwb25zZSkge1xyXG4gICAgICAgICAgLy9oYW5kbGUgc3VjY2Vzc1xyXG4gICAgICAgICAgLy8gc2V0UGF0aWVudHNMaXN0KHJlc3BvbnNlKTtcclxuICAgICAgICAgIHNldFJlc3VsdFNlYXJjaChyZXNwb25zZS5kYXRhKTtcclxuICAgICAgICAgIC8vIGNvbnNvbGUubG9nKHJlc3VsdFNlYXJjaCk7XHJcbiAgICAgICAgICBzZXRTZWFyY2goZS50YXJnZXQudmFsdWUpO1xyXG4gICAgICAgIH0pXHJcbiAgICAgICAgLmNhdGNoKGZ1bmN0aW9uIChyZXNwb25zZSkge1xyXG4gICAgICAgICAgLy8gY29uc29sZS5sb2cocmVzcG9uc2UpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgc2V0T3BlblJlc3VsdChmYWxzZSk7XHJcbiAgICB9XHJcbiAgfTtcclxuXHJcbiAgY29uc3Qgb25DbGlja0lmVmFsdWUgPSAoZSkgPT4ge1xyXG4gICAgaWYgKHJlc3VsdFNlYXJjaD8ubGVuZ3RoID4gMCkge1xyXG4gICAgICBzZXRPcGVuUmVzdWx0KHRydWUpO1xyXG4gICAgfVxyXG4gIH07XHJcbiAgLy8gY29uc3Qgb25CbHVyc2V0VmFsdWUgPSAoZSkgPT4ge1xyXG4gIC8vICAgY29uc3QgY3VycmVudFRhcmdldCA9IGUuY3VycmVudFRhcmdldDtcclxuXHJcbiAgLy8gICAvLyBDaGVjayB0aGUgbmV3bHkgZm9jdXNlZCBlbGVtZW50IGluIHRoZSBuZXh0IHRpY2sgb2YgdGhlIGV2ZW50IGxvb3BcclxuICAvLyAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gIC8vICAgICAvLyBDaGVjayBpZiB0aGUgbmV3IGFjdGl2ZUVsZW1lbnQgaXMgYSBjaGlsZCBvZiB0aGUgb3JpZ2luYWwgY29udGFpbmVyXHJcbiAgLy8gICAgIGlmICghY3VycmVudFRhcmdldC5jb250YWlucyhkb2N1bWVudC5hY3RpdmVFbGVtZW50KSkge1xyXG4gIC8vICAgICAgIC8vIFlvdSBjYW4gaW52b2tlIGEgY2FsbGJhY2sgb3IgYWRkIGN1c3RvbSBsb2dpYyBoZXJlXHJcbiAgLy8gICAgICAgc2V0T3BlblJlc3VsdChmYWxzZSk7XHJcbiAgLy8gICAgIH1cclxuICAvLyAgIH0sIDApO1xyXG4gIC8vIH07XHJcblxyXG4gIGNvbnN0IHJlZGlyZWN0aW9uVG9QYXRpZW50ID0gKGlkKSA9PiB7XHJcbiAgICBpZiAoaWQpIHtcclxuICAgICAgcmV0dXJuICh3aW5kb3cubG9jYXRpb24uaHJlZiA9IFwiL1wiICsgaWQpO1xyXG4gICAgfVxyXG4gIH07XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8Rm9ybSBjbGFzc05hbWU9XCJkLWZsZXhcIj5cclxuICAgICAgPEZvcm0uQ29udHJvbFxyXG4gICAgICAgIHR5cGU9XCJzZWFyY2hcIlxyXG4gICAgICAgIHBsYWNlaG9sZGVyPVwiU2VhcmNoXCJcclxuICAgICAgICBjbGFzc05hbWU9XCJtZS0yXCJcclxuICAgICAgICAvLyBvbkJsdXI9e29uQmx1cnNldFZhbHVlfVxyXG4gICAgICAgIG9uQ2xpY2s9eyhlKSA9PiBvbkNsaWNrSWZWYWx1ZSgpfVxyXG4gICAgICAgIGFyaWEtbGFiZWw9XCJTZWFyY2hcIlxyXG4gICAgICAgIG9uQ2hhbmdlPXtzZXRWYWx1ZX1cclxuICAgICAgLz5cclxuICAgICAge2lzT3Blbn1cclxuICAgICAge3Jlc3VsdFNlYXJjaCAmJiBpc09wZW4gJiYgKFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicmVzdWx0LXNlYXJjaFwiPlxyXG4gICAgICAgICAgPHVsPlxyXG4gICAgICAgICAgICB7cmVzdWx0U2VhcmNoPy5tYXAoKHJlc3VsdCkgPT4gKFxyXG4gICAgICAgICAgICAgIDxsaVxyXG4gICAgICAgICAgICAgICAga2V5PXtyZXN1bHQuaWR9XHJcbiAgICAgICAgICAgICAgICBvbkNsaWNrPXsoZSkgPT4gcmVkaXJlY3Rpb25Ub1BhdGllbnQocmVzdWx0LmlkKX1cclxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImxpbmstdG9QYXRpZW50XCJcclxuICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgICB7cmVzdWx0Lmxhc3RuYW1lfSB7cmVzdWx0LmZpcnN0bmFtZX0ge3Jlc3VsdD8ubmlja25hbWVzfVxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgICA8L3VsPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICApfVxyXG4gICAgPC9Gb3JtPlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBTZWFyY2g7XHJcbiIsImltcG9ydCBSZWFjdCwgeyB1c2VDb250ZXh0LCB1c2VEZWJ1Z1ZhbHVlIH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IHVzZU5hdmlnYXRlIH0gZnJvbSBcInJlYWN0LXJvdXRlci1kb21cIjtcclxuXHJcbmNvbnN0IFVuYXV0aG9yaXplZCA9ICgpID0+IHtcclxuICBjb25zdCBuYXZpZ2F0ZSA9IHVzZU5hdmlnYXRlKCk7XHJcblxyXG4gIGNvbnN0IGdvQmFjayA9ICgpID0+IG5hdmlnYXRlKC0xKTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxzZWN0aW9uPlxyXG4gICAgICA8aDE+VW5hdXRob3JpemVkPC9oMT5cclxuICAgICAgPGJyIC8+XHJcbiAgICAgIDxwPllvdSBkbyBub3QgaGF2ZSBhY2Nlc3MgdG8gdGhlIHJlcXVlc3RlZCBwYWdlLjwvcD5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4R3Jvd1wiPlxyXG4gICAgICAgIDxidXR0b24gb25DbGljaz17Z29CYWNrfT5HbyBCYWNrPC9idXR0b24+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9zZWN0aW9uPlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBVbmF1dGhvcml6ZWQ7XHJcbiIsIi8vIC4vYXNzZXRzL2pzL2NvbXBvbmVudHMvSG9tZS5qc1xyXG4gICAgXHJcbmltcG9ydCBSZWFjdCwge0NvbXBvbmVudH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQge1JvdXRlcywgUm91dGUsIFN3aXRjaCxOYXZpZ2F0ZSwgTGluaywgd2l0aFJvdXRlcn0gZnJvbSAncmVhY3Qtcm91dGVyLWRvbSc7XHJcblxyXG5pbXBvcnQgUG9zdHMgZnJvbSAnLi9Qb3N0cyc7XHJcblxyXG5jbGFzcyBVc2VycyBleHRlbmRzIENvbXBvbmVudCB7XHJcbiAgICBcclxuICAgIHJlbmRlcigpIHtcclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgVXNlcnNcclxuICAgICAgICAgICAgICBcclxuICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICApXHJcbiAgICB9XHJcbn1cclxuICAgIFxyXG5leHBvcnQgZGVmYXVsdCBVc2VycztcclxuIiwiaW1wb3J0IFJlYWN0LCB7IHVzZUNvbnRleHQsIHVzZURlYnVnVmFsdWUgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgdXNlTmF2aWdhdGUsIExpbmsgfSBmcm9tIFwicmVhY3Qtcm91dGVyLWRvbVwiO1xyXG5pbXBvcnQgdXNlTG9nb3V0IGZyb20gXCIuLi9ob29rcy91c2VMb2dvdXRcIjtcclxuaW1wb3J0IEJ1dHRvbiBmcm9tIFwicmVhY3QtYm9vdHN0cmFwL0J1dHRvblwiO1xyXG5pbXBvcnQgQ29udGFpbmVyIGZyb20gXCJyZWFjdC1ib290c3RyYXAvQ29udGFpbmVyXCI7XHJcbmltcG9ydCB7IEZvbnRBd2Vzb21lSWNvbiB9IGZyb20gXCJAZm9ydGF3ZXNvbWUvcmVhY3QtZm9udGF3ZXNvbWVcIjtcclxuaW1wb3J0IHsgZmFBcnJvd1JpZ2h0IH0gZnJvbSBcIkBmb3J0YXdlc29tZS9mcmVlLXNvbGlkLXN2Zy1pY29uc1wiO1xyXG5pbXBvcnQgRm9ybSBmcm9tIFwicmVhY3QtYm9vdHN0cmFwL0Zvcm1cIjtcclxuaW1wb3J0IE5hdiBmcm9tIFwicmVhY3QtYm9vdHN0cmFwL05hdlwiO1xyXG5pbXBvcnQgTmF2YmFyIGZyb20gXCJyZWFjdC1ib290c3RyYXAvTmF2YmFyXCI7XHJcbmltcG9ydCBOYXZEcm9wZG93biBmcm9tIFwicmVhY3QtYm9vdHN0cmFwL05hdkRyb3Bkb3duXCI7XHJcbmltcG9ydCBNZW51IGZyb20gXCIuL01lbnVcIjtcclxuaW1wb3J0IEZvcm1fTWVldFJhcHBvcnRzIGZyb20gXCIuL0Zvcm1fTWVldFJhcHBvcnRzXCI7XHJcbmltcG9ydCB7IFJvdXRlcywgUm91dGUgfSBmcm9tIFwicmVhY3Qtcm91dGVyLWRvbVwiO1xyXG5cclxuY29uc3QgUmVwcG9ydENhbGxzID0gKCkgPT4ge1xyXG4gIGNvbnN0IG5hdmlnYXRlID0gdXNlTmF2aWdhdGUoKTtcclxuICBjb25zdCBsb2dvdXQgPSB1c2VMb2dvdXQoKTtcclxuXHJcbiAgY29uc3Qgc2lnbk91dCA9IGFzeW5jICgpID0+IHtcclxuICAgIGF3YWl0IGxvZ291dCgpO1xyXG4gICAgbmF2aWdhdGUoXCIvY29ubmVjdFwiKTtcclxuICB9O1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPD5cclxuICAgICAgPHA+UmVwcG9ydHMgQ2FsbHM8L3A+XHJcbiAgICA8Lz5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgUmVwcG9ydENhbGxzO1xyXG4iLCJpbXBvcnQgUmVhY3QsIHsgdXNlQ29udGV4dCwgdXNlRGVidWdWYWx1ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyB1c2VOYXZpZ2F0ZSwgTGluayB9IGZyb20gXCJyZWFjdC1yb3V0ZXItZG9tXCI7XHJcbmltcG9ydCB1c2VMb2dvdXQgZnJvbSBcIi4uL2hvb2tzL3VzZUxvZ291dFwiO1xyXG5pbXBvcnQgQnV0dG9uIGZyb20gXCJyZWFjdC1ib290c3RyYXAvQnV0dG9uXCI7XHJcbmltcG9ydCBDb250YWluZXIgZnJvbSBcInJlYWN0LWJvb3RzdHJhcC9Db250YWluZXJcIjtcclxuaW1wb3J0IHsgRm9udEF3ZXNvbWVJY29uIH0gZnJvbSBcIkBmb3J0YXdlc29tZS9yZWFjdC1mb250YXdlc29tZVwiO1xyXG5pbXBvcnQgeyBmYUFycm93UmlnaHQgfSBmcm9tIFwiQGZvcnRhd2Vzb21lL2ZyZWUtc29saWQtc3ZnLWljb25zXCI7XHJcbmltcG9ydCBGb3JtIGZyb20gXCJyZWFjdC1ib290c3RyYXAvRm9ybVwiO1xyXG5pbXBvcnQgTmF2IGZyb20gXCJyZWFjdC1ib290c3RyYXAvTmF2XCI7XHJcbmltcG9ydCBOYXZiYXIgZnJvbSBcInJlYWN0LWJvb3RzdHJhcC9OYXZiYXJcIjtcclxuaW1wb3J0IE5hdkRyb3Bkb3duIGZyb20gXCJyZWFjdC1ib290c3RyYXAvTmF2RHJvcGRvd25cIjtcclxuaW1wb3J0IE1lbnUgZnJvbSBcIi4vTWVudVwiO1xyXG5pbXBvcnQgRm9ybV9NZWV0UmFwcG9ydHMgZnJvbSBcIi4vRm9ybV9NZWV0UmFwcG9ydHNcIjtcclxuaW1wb3J0IHsgUm91dGVzLCBSb3V0ZSB9IGZyb20gXCJyZWFjdC1yb3V0ZXItZG9tXCI7XHJcblxyXG5jb25zdCBSZXBwb3J0R29hbHMgPSAoKSA9PiB7XHJcbiAgY29uc3QgbmF2aWdhdGUgPSB1c2VOYXZpZ2F0ZSgpO1xyXG4gIGNvbnN0IGxvZ291dCA9IHVzZUxvZ291dCgpO1xyXG5cclxuICBjb25zdCBzaWduT3V0ID0gYXN5bmMgKCkgPT4ge1xyXG4gICAgYXdhaXQgbG9nb3V0KCk7XHJcbiAgICBuYXZpZ2F0ZShcIi9jb25uZWN0XCIpO1xyXG4gIH07XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8PlxyXG4gICAgICA8cD5SZXBwb3J0cyBHb2FsczwvcD5cclxuICAgIDwvPlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBSZXBwb3J0R29hbHM7XHJcbiIsImltcG9ydCBSZWFjdCwgeyBjcmVhdGVDb250ZXh0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5cclxuY29uc3QgQXV0aENvbnRleHQgPSBjcmVhdGVDb250ZXh0KHt9KTtcclxuXHJcbmV4cG9ydCBjb25zdCBBdXRoUHJvdmlkZXIgPSAoeyBjaGlsZHJlbiB9KSA9PiB7XHJcbiAgY29uc3QgW2F1dGgsIHNldEF1dGhdID0gdXNlU3RhdGUoe30pO1xyXG4gIGNvbnN0IFtwZXJzaXN0LCBzZXRQZXJzaXN0XSA9IHVzZVN0YXRlKFxyXG4gICAgSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcInBlcnNpc3RcIikpIHx8IGZhbHNlXHJcbiAgKTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxBdXRoQ29udGV4dC5Qcm92aWRlciB2YWx1ZT17eyBhdXRoLCBzZXRBdXRoLCBwZXJzaXN0LCBzZXRQZXJzaXN0IH19PlxyXG4gICAgICB7Y2hpbGRyZW59XHJcbiAgICA8L0F1dGhDb250ZXh0LlByb3ZpZGVyPlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBBdXRoQ29udGV4dDtcclxuIiwiaW1wb3J0IHsgdXNlQ29udGV4dCwgdXNlRGVidWdWYWx1ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgQXV0aENvbnRleHQgZnJvbSBcIi4uL2NvbnRleHQvQXV0aFByb3ZpZGVyXCI7XHJcblxyXG5jb25zdCB1c2VBdXRoID0gKCkgPT4ge1xyXG4gIGNvbnN0IHsgYXV0aCB9ID0gdXNlQ29udGV4dChBdXRoQ29udGV4dCk7XHJcbiAgdXNlRGVidWdWYWx1ZShhdXRoLCAoYXV0aCkgPT4gKGF1dGg/LnVzZXIgPyBcIkxvZ2dlZCBJblwiIDogXCJMb2dnZWQgT3V0XCIpKTtcclxuICByZXR1cm4gdXNlQ29udGV4dChBdXRoQ29udGV4dCk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCB1c2VBdXRoO1xyXG4iLCJpbXBvcnQgYXhpb3MgZnJvbSBcImF4aW9zXCI7XHJcbmltcG9ydCB1c2VBdXRoIGZyb20gXCIuL3VzZUF1dGhcIjtcclxuXHJcbmNvbnN0IHVzZUxvZ291dCA9ICgpID0+IHtcclxuICBjb25zdCB7IHNldEF1dGggfSA9IHVzZUF1dGgoKTtcclxuXHJcbiAgY29uc3QgbG9nb3V0ID0gYXN5bmMgKCkgPT4ge1xyXG4gICAgc2V0QXV0aCh7fSk7XHJcbiAgICB0cnkge1xyXG4gICAgICBhd2FpdCBheGlvcyhcIi9hcGkvdG9rZW4vaW52YWxpZGF0ZVwiLCB7XHJcbiAgICAgICAgd2l0aENyZWRlbnRpYWxzOiB0cnVlLFxyXG4gICAgICB9KTtcclxuICAgIH0gY2F0Y2ggKGVycikge1xyXG4gICAgICBjb25zb2xlLmVycm9yKGVycik7XHJcbiAgICB9XHJcbiAgfTtcclxuXHJcbiAgcmV0dXJuIGxvZ291dDtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IHVzZUxvZ291dDtcclxuIiwiaW1wb3J0IGF4aW9zIGZyb20gXCJheGlvc1wiO1xyXG5pbXBvcnQgdXNlQXV0aCBmcm9tIFwiLi91c2VBdXRoXCI7XHJcblxyXG5jb25zdCB1c2VSZWZyZXNoVG9rZW4gPSAoKSA9PiB7XHJcbiAgY29uc3QgeyBzZXRBdXRoIH0gPSB1c2VBdXRoKCk7XHJcblxyXG4gIGNvbnN0IHJlZnJlc2ggPSBhc3luYyAoKSA9PiB7XHJcbiAgICBjb25zdCB0b2tlbiA9IGF3YWl0IGF4aW9zLmdldChcIi9hcGkvdG9rZW4vcmVmcmVzaFwiLCB7XHJcbiAgICAgIHdpdGhDcmVkZW50aWFsczogdHJ1ZSxcclxuICAgIH0pO1xyXG5cclxuICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgYXhpb3MuZ2V0KFwiL2FwaS9nZXRVc2VyXCIsIHtcclxuICAgICAgaGVhZGVyczogeyBBdXRob3JpemF0aW9uOiBgQmVhcmVyICR7dG9rZW4uZGF0YS50b2tlbn1gIH0sXHJcbiAgICB9KTtcclxuXHJcbiAgICBzZXRBdXRoKChwcmV2KSA9PiB7XHJcbiAgICAgIHJldHVybiB7XHJcbiAgICAgICAgLi4ucHJldixcclxuICAgICAgICByb2xlczogcmVzcG9uc2UuZGF0YS5yb2xlTmFtZXMsXHJcbiAgICAgICAgYWNjZXNzVG9rZW46IHJlc3BvbnNlLmRhdGEuY3JlZGVudGlhbHMsXHJcbiAgICAgIH07XHJcbiAgICB9KTtcclxuICAgIHJldHVybiByZXNwb25zZS5kYXRhLmFjY2Vzc1Rva2VuO1xyXG4gIH07XHJcbiAgcmV0dXJuIHJlZnJlc2g7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCB1c2VSZWZyZXNoVG9rZW47XHJcbiIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IFJlYWN0RE9NIGZyb20gXCJyZWFjdC1kb21cIjtcclxuLy8gaW1wb3J0IFwiLi9pbmRleC5jc3NcIjtcclxuaW1wb3J0IEFwcCBmcm9tIFwiLi9hcHBcIjtcclxuaW1wb3J0IHsgQXV0aFByb3ZpZGVyIH0gZnJvbSBcIi4vY29udGV4dC9BdXRoUHJvdmlkZXJcIjtcclxuaW1wb3J0IHsgQnJvd3NlclJvdXRlciwgUm91dGVzLCBSb3V0ZSB9IGZyb20gXCJyZWFjdC1yb3V0ZXItZG9tXCI7XHJcblxyXG5SZWFjdERPTS5yZW5kZXIoXHJcbiAgPFJlYWN0LlN0cmljdE1vZGU+XHJcbiAgICA8QnJvd3NlclJvdXRlcj5cclxuICAgICAgPEF1dGhQcm92aWRlcj5cclxuICAgICAgICA8Um91dGVzPlxyXG4gICAgICAgICAgPFJvdXRlIHBhdGg9XCIvKlwiIGVsZW1lbnQ9ezxBcHAgLz59IC8+XHJcbiAgICAgICAgPC9Sb3V0ZXM+XHJcbiAgICAgIDwvQXV0aFByb3ZpZGVyPlxyXG4gICAgPC9Ccm93c2VyUm91dGVyPlxyXG4gIDwvUmVhY3QuU3RyaWN0TW9kZT4sXHJcbiAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJyb290XCIpXHJcbik7XHJcbiIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyIsInZhciBtYXAgPSB7XG5cdFwiLi9hZlwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvYWYuanNcIixcblx0XCIuL2FmLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9hZi5qc1wiLFxuXHRcIi4vYXJcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2FyLmpzXCIsXG5cdFwiLi9hci1kelwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvYXItZHouanNcIixcblx0XCIuL2FyLWR6LmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9hci1kei5qc1wiLFxuXHRcIi4vYXIta3dcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2FyLWt3LmpzXCIsXG5cdFwiLi9hci1rdy5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvYXIta3cuanNcIixcblx0XCIuL2FyLWx5XCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9hci1seS5qc1wiLFxuXHRcIi4vYXItbHkuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2FyLWx5LmpzXCIsXG5cdFwiLi9hci1tYVwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvYXItbWEuanNcIixcblx0XCIuL2FyLW1hLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9hci1tYS5qc1wiLFxuXHRcIi4vYXItc2FcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2FyLXNhLmpzXCIsXG5cdFwiLi9hci1zYS5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvYXItc2EuanNcIixcblx0XCIuL2FyLXRuXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9hci10bi5qc1wiLFxuXHRcIi4vYXItdG4uanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2FyLXRuLmpzXCIsXG5cdFwiLi9hci5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvYXIuanNcIixcblx0XCIuL2F6XCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9hei5qc1wiLFxuXHRcIi4vYXouanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2F6LmpzXCIsXG5cdFwiLi9iZVwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvYmUuanNcIixcblx0XCIuL2JlLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9iZS5qc1wiLFxuXHRcIi4vYmdcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2JnLmpzXCIsXG5cdFwiLi9iZy5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvYmcuanNcIixcblx0XCIuL2JtXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9ibS5qc1wiLFxuXHRcIi4vYm0uanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2JtLmpzXCIsXG5cdFwiLi9iblwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvYm4uanNcIixcblx0XCIuL2JuLWJkXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9ibi1iZC5qc1wiLFxuXHRcIi4vYm4tYmQuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2JuLWJkLmpzXCIsXG5cdFwiLi9ibi5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvYm4uanNcIixcblx0XCIuL2JvXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9iby5qc1wiLFxuXHRcIi4vYm8uanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2JvLmpzXCIsXG5cdFwiLi9iclwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvYnIuanNcIixcblx0XCIuL2JyLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9ici5qc1wiLFxuXHRcIi4vYnNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2JzLmpzXCIsXG5cdFwiLi9icy5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvYnMuanNcIixcblx0XCIuL2NhXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9jYS5qc1wiLFxuXHRcIi4vY2EuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2NhLmpzXCIsXG5cdFwiLi9jc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvY3MuanNcIixcblx0XCIuL2NzLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9jcy5qc1wiLFxuXHRcIi4vY3ZcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2N2LmpzXCIsXG5cdFwiLi9jdi5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvY3YuanNcIixcblx0XCIuL2N5XCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9jeS5qc1wiLFxuXHRcIi4vY3kuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2N5LmpzXCIsXG5cdFwiLi9kYVwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZGEuanNcIixcblx0XCIuL2RhLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9kYS5qc1wiLFxuXHRcIi4vZGVcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2RlLmpzXCIsXG5cdFwiLi9kZS1hdFwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZGUtYXQuanNcIixcblx0XCIuL2RlLWF0LmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9kZS1hdC5qc1wiLFxuXHRcIi4vZGUtY2hcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2RlLWNoLmpzXCIsXG5cdFwiLi9kZS1jaC5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZGUtY2guanNcIixcblx0XCIuL2RlLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9kZS5qc1wiLFxuXHRcIi4vZHZcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2R2LmpzXCIsXG5cdFwiLi9kdi5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZHYuanNcIixcblx0XCIuL2VsXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9lbC5qc1wiLFxuXHRcIi4vZWwuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2VsLmpzXCIsXG5cdFwiLi9lbi1hdVwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZW4tYXUuanNcIixcblx0XCIuL2VuLWF1LmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9lbi1hdS5qc1wiLFxuXHRcIi4vZW4tY2FcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2VuLWNhLmpzXCIsXG5cdFwiLi9lbi1jYS5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZW4tY2EuanNcIixcblx0XCIuL2VuLWdiXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9lbi1nYi5qc1wiLFxuXHRcIi4vZW4tZ2IuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2VuLWdiLmpzXCIsXG5cdFwiLi9lbi1pZVwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZW4taWUuanNcIixcblx0XCIuL2VuLWllLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9lbi1pZS5qc1wiLFxuXHRcIi4vZW4taWxcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2VuLWlsLmpzXCIsXG5cdFwiLi9lbi1pbC5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZW4taWwuanNcIixcblx0XCIuL2VuLWluXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9lbi1pbi5qc1wiLFxuXHRcIi4vZW4taW4uanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2VuLWluLmpzXCIsXG5cdFwiLi9lbi1uelwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZW4tbnouanNcIixcblx0XCIuL2VuLW56LmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9lbi1uei5qc1wiLFxuXHRcIi4vZW4tc2dcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2VuLXNnLmpzXCIsXG5cdFwiLi9lbi1zZy5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZW4tc2cuanNcIixcblx0XCIuL2VvXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9lby5qc1wiLFxuXHRcIi4vZW8uanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2VvLmpzXCIsXG5cdFwiLi9lc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZXMuanNcIixcblx0XCIuL2VzLWRvXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9lcy1kby5qc1wiLFxuXHRcIi4vZXMtZG8uanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2VzLWRvLmpzXCIsXG5cdFwiLi9lcy1teFwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZXMtbXguanNcIixcblx0XCIuL2VzLW14LmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9lcy1teC5qc1wiLFxuXHRcIi4vZXMtdXNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2VzLXVzLmpzXCIsXG5cdFwiLi9lcy11cy5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZXMtdXMuanNcIixcblx0XCIuL2VzLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9lcy5qc1wiLFxuXHRcIi4vZXRcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2V0LmpzXCIsXG5cdFwiLi9ldC5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZXQuanNcIixcblx0XCIuL2V1XCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9ldS5qc1wiLFxuXHRcIi4vZXUuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2V1LmpzXCIsXG5cdFwiLi9mYVwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZmEuanNcIixcblx0XCIuL2ZhLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9mYS5qc1wiLFxuXHRcIi4vZmlcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2ZpLmpzXCIsXG5cdFwiLi9maS5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZmkuanNcIixcblx0XCIuL2ZpbFwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZmlsLmpzXCIsXG5cdFwiLi9maWwuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2ZpbC5qc1wiLFxuXHRcIi4vZm9cIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2ZvLmpzXCIsXG5cdFwiLi9mby5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZm8uanNcIixcblx0XCIuL2ZyXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9mci5qc1wiLFxuXHRcIi4vZnItY2FcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2ZyLWNhLmpzXCIsXG5cdFwiLi9mci1jYS5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZnItY2EuanNcIixcblx0XCIuL2ZyLWNoXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9mci1jaC5qc1wiLFxuXHRcIi4vZnItY2guanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2ZyLWNoLmpzXCIsXG5cdFwiLi9mci5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZnIuanNcIixcblx0XCIuL2Z5XCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9meS5qc1wiLFxuXHRcIi4vZnkuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2Z5LmpzXCIsXG5cdFwiLi9nYVwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZ2EuanNcIixcblx0XCIuL2dhLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9nYS5qc1wiLFxuXHRcIi4vZ2RcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2dkLmpzXCIsXG5cdFwiLi9nZC5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZ2QuanNcIixcblx0XCIuL2dsXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9nbC5qc1wiLFxuXHRcIi4vZ2wuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2dsLmpzXCIsXG5cdFwiLi9nb20tZGV2YVwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZ29tLWRldmEuanNcIixcblx0XCIuL2dvbS1kZXZhLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9nb20tZGV2YS5qc1wiLFxuXHRcIi4vZ29tLWxhdG5cIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2dvbS1sYXRuLmpzXCIsXG5cdFwiLi9nb20tbGF0bi5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZ29tLWxhdG4uanNcIixcblx0XCIuL2d1XCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9ndS5qc1wiLFxuXHRcIi4vZ3UuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2d1LmpzXCIsXG5cdFwiLi9oZVwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvaGUuanNcIixcblx0XCIuL2hlLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9oZS5qc1wiLFxuXHRcIi4vaGlcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2hpLmpzXCIsXG5cdFwiLi9oaS5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvaGkuanNcIixcblx0XCIuL2hyXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9oci5qc1wiLFxuXHRcIi4vaHIuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2hyLmpzXCIsXG5cdFwiLi9odVwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvaHUuanNcIixcblx0XCIuL2h1LmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9odS5qc1wiLFxuXHRcIi4vaHktYW1cIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2h5LWFtLmpzXCIsXG5cdFwiLi9oeS1hbS5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvaHktYW0uanNcIixcblx0XCIuL2lkXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9pZC5qc1wiLFxuXHRcIi4vaWQuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2lkLmpzXCIsXG5cdFwiLi9pc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvaXMuanNcIixcblx0XCIuL2lzLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9pcy5qc1wiLFxuXHRcIi4vaXRcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2l0LmpzXCIsXG5cdFwiLi9pdC1jaFwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvaXQtY2guanNcIixcblx0XCIuL2l0LWNoLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9pdC1jaC5qc1wiLFxuXHRcIi4vaXQuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2l0LmpzXCIsXG5cdFwiLi9qYVwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvamEuanNcIixcblx0XCIuL2phLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9qYS5qc1wiLFxuXHRcIi4vanZcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2p2LmpzXCIsXG5cdFwiLi9qdi5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvanYuanNcIixcblx0XCIuL2thXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9rYS5qc1wiLFxuXHRcIi4va2EuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2thLmpzXCIsXG5cdFwiLi9ra1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUva2suanNcIixcblx0XCIuL2trLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9ray5qc1wiLFxuXHRcIi4va21cIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2ttLmpzXCIsXG5cdFwiLi9rbS5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUva20uanNcIixcblx0XCIuL2tuXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9rbi5qc1wiLFxuXHRcIi4va24uanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2tuLmpzXCIsXG5cdFwiLi9rb1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUva28uanNcIixcblx0XCIuL2tvLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9rby5qc1wiLFxuXHRcIi4va3VcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2t1LmpzXCIsXG5cdFwiLi9rdS5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUva3UuanNcIixcblx0XCIuL2t5XCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9reS5qc1wiLFxuXHRcIi4va3kuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2t5LmpzXCIsXG5cdFwiLi9sYlwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvbGIuanNcIixcblx0XCIuL2xiLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9sYi5qc1wiLFxuXHRcIi4vbG9cIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2xvLmpzXCIsXG5cdFwiLi9sby5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvbG8uanNcIixcblx0XCIuL2x0XCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9sdC5qc1wiLFxuXHRcIi4vbHQuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2x0LmpzXCIsXG5cdFwiLi9sdlwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvbHYuanNcIixcblx0XCIuL2x2LmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9sdi5qc1wiLFxuXHRcIi4vbWVcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL21lLmpzXCIsXG5cdFwiLi9tZS5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvbWUuanNcIixcblx0XCIuL21pXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9taS5qc1wiLFxuXHRcIi4vbWkuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL21pLmpzXCIsXG5cdFwiLi9ta1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvbWsuanNcIixcblx0XCIuL21rLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9tay5qc1wiLFxuXHRcIi4vbWxcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL21sLmpzXCIsXG5cdFwiLi9tbC5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvbWwuanNcIixcblx0XCIuL21uXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9tbi5qc1wiLFxuXHRcIi4vbW4uanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL21uLmpzXCIsXG5cdFwiLi9tclwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvbXIuanNcIixcblx0XCIuL21yLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9tci5qc1wiLFxuXHRcIi4vbXNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL21zLmpzXCIsXG5cdFwiLi9tcy1teVwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvbXMtbXkuanNcIixcblx0XCIuL21zLW15LmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9tcy1teS5qc1wiLFxuXHRcIi4vbXMuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL21zLmpzXCIsXG5cdFwiLi9tdFwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvbXQuanNcIixcblx0XCIuL210LmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9tdC5qc1wiLFxuXHRcIi4vbXlcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL215LmpzXCIsXG5cdFwiLi9teS5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvbXkuanNcIixcblx0XCIuL25iXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9uYi5qc1wiLFxuXHRcIi4vbmIuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL25iLmpzXCIsXG5cdFwiLi9uZVwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvbmUuanNcIixcblx0XCIuL25lLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9uZS5qc1wiLFxuXHRcIi4vbmxcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL25sLmpzXCIsXG5cdFwiLi9ubC1iZVwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvbmwtYmUuanNcIixcblx0XCIuL25sLWJlLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9ubC1iZS5qc1wiLFxuXHRcIi4vbmwuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL25sLmpzXCIsXG5cdFwiLi9ublwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvbm4uanNcIixcblx0XCIuL25uLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9ubi5qc1wiLFxuXHRcIi4vb2MtbG5jXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9vYy1sbmMuanNcIixcblx0XCIuL29jLWxuYy5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvb2MtbG5jLmpzXCIsXG5cdFwiLi9wYS1pblwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvcGEtaW4uanNcIixcblx0XCIuL3BhLWluLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9wYS1pbi5qc1wiLFxuXHRcIi4vcGxcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3BsLmpzXCIsXG5cdFwiLi9wbC5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvcGwuanNcIixcblx0XCIuL3B0XCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9wdC5qc1wiLFxuXHRcIi4vcHQtYnJcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3B0LWJyLmpzXCIsXG5cdFwiLi9wdC1ici5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvcHQtYnIuanNcIixcblx0XCIuL3B0LmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9wdC5qc1wiLFxuXHRcIi4vcm9cIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3JvLmpzXCIsXG5cdFwiLi9yby5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvcm8uanNcIixcblx0XCIuL3J1XCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9ydS5qc1wiLFxuXHRcIi4vcnUuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3J1LmpzXCIsXG5cdFwiLi9zZFwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvc2QuanNcIixcblx0XCIuL3NkLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9zZC5qc1wiLFxuXHRcIi4vc2VcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3NlLmpzXCIsXG5cdFwiLi9zZS5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvc2UuanNcIixcblx0XCIuL3NpXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9zaS5qc1wiLFxuXHRcIi4vc2kuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3NpLmpzXCIsXG5cdFwiLi9za1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvc2suanNcIixcblx0XCIuL3NrLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9zay5qc1wiLFxuXHRcIi4vc2xcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3NsLmpzXCIsXG5cdFwiLi9zbC5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvc2wuanNcIixcblx0XCIuL3NxXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9zcS5qc1wiLFxuXHRcIi4vc3EuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3NxLmpzXCIsXG5cdFwiLi9zclwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvc3IuanNcIixcblx0XCIuL3NyLWN5cmxcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3NyLWN5cmwuanNcIixcblx0XCIuL3NyLWN5cmwuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3NyLWN5cmwuanNcIixcblx0XCIuL3NyLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9zci5qc1wiLFxuXHRcIi4vc3NcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3NzLmpzXCIsXG5cdFwiLi9zcy5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvc3MuanNcIixcblx0XCIuL3N2XCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9zdi5qc1wiLFxuXHRcIi4vc3YuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3N2LmpzXCIsXG5cdFwiLi9zd1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvc3cuanNcIixcblx0XCIuL3N3LmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9zdy5qc1wiLFxuXHRcIi4vdGFcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3RhLmpzXCIsXG5cdFwiLi90YS5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvdGEuanNcIixcblx0XCIuL3RlXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS90ZS5qc1wiLFxuXHRcIi4vdGUuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3RlLmpzXCIsXG5cdFwiLi90ZXRcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3RldC5qc1wiLFxuXHRcIi4vdGV0LmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS90ZXQuanNcIixcblx0XCIuL3RnXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS90Zy5qc1wiLFxuXHRcIi4vdGcuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3RnLmpzXCIsXG5cdFwiLi90aFwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvdGguanNcIixcblx0XCIuL3RoLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS90aC5qc1wiLFxuXHRcIi4vdGtcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3RrLmpzXCIsXG5cdFwiLi90ay5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvdGsuanNcIixcblx0XCIuL3RsLXBoXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS90bC1waC5qc1wiLFxuXHRcIi4vdGwtcGguanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3RsLXBoLmpzXCIsXG5cdFwiLi90bGhcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3RsaC5qc1wiLFxuXHRcIi4vdGxoLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS90bGguanNcIixcblx0XCIuL3RyXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS90ci5qc1wiLFxuXHRcIi4vdHIuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3RyLmpzXCIsXG5cdFwiLi90emxcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3R6bC5qc1wiLFxuXHRcIi4vdHpsLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS90emwuanNcIixcblx0XCIuL3R6bVwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvdHptLmpzXCIsXG5cdFwiLi90em0tbGF0blwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvdHptLWxhdG4uanNcIixcblx0XCIuL3R6bS1sYXRuLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS90em0tbGF0bi5qc1wiLFxuXHRcIi4vdHptLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS90em0uanNcIixcblx0XCIuL3VnLWNuXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS91Zy1jbi5qc1wiLFxuXHRcIi4vdWctY24uanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3VnLWNuLmpzXCIsXG5cdFwiLi91a1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvdWsuanNcIixcblx0XCIuL3VrLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS91ay5qc1wiLFxuXHRcIi4vdXJcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3VyLmpzXCIsXG5cdFwiLi91ci5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvdXIuanNcIixcblx0XCIuL3V6XCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS91ei5qc1wiLFxuXHRcIi4vdXotbGF0blwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvdXotbGF0bi5qc1wiLFxuXHRcIi4vdXotbGF0bi5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvdXotbGF0bi5qc1wiLFxuXHRcIi4vdXouanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3V6LmpzXCIsXG5cdFwiLi92aVwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvdmkuanNcIixcblx0XCIuL3ZpLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS92aS5qc1wiLFxuXHRcIi4veC1wc2V1ZG9cIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3gtcHNldWRvLmpzXCIsXG5cdFwiLi94LXBzZXVkby5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUveC1wc2V1ZG8uanNcIixcblx0XCIuL3lvXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS95by5qc1wiLFxuXHRcIi4veW8uanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3lvLmpzXCIsXG5cdFwiLi96aC1jblwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvemgtY24uanNcIixcblx0XCIuL3poLWNuLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS96aC1jbi5qc1wiLFxuXHRcIi4vemgtaGtcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3poLWhrLmpzXCIsXG5cdFwiLi96aC1oay5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvemgtaGsuanNcIixcblx0XCIuL3poLW1vXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS96aC1tby5qc1wiLFxuXHRcIi4vemgtbW8uanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3poLW1vLmpzXCIsXG5cdFwiLi96aC10d1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvemgtdHcuanNcIixcblx0XCIuL3poLXR3LmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS96aC10dy5qc1wiXG59O1xuXG5cbmZ1bmN0aW9uIHdlYnBhY2tDb250ZXh0KHJlcSkge1xuXHR2YXIgaWQgPSB3ZWJwYWNrQ29udGV4dFJlc29sdmUocmVxKTtcblx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oaWQpO1xufVxuZnVuY3Rpb24gd2VicGFja0NvbnRleHRSZXNvbHZlKHJlcSkge1xuXHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKG1hcCwgcmVxKSkge1xuXHRcdHZhciBlID0gbmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIiArIHJlcSArIFwiJ1wiKTtcblx0XHRlLmNvZGUgPSAnTU9EVUxFX05PVF9GT1VORCc7XG5cdFx0dGhyb3cgZTtcblx0fVxuXHRyZXR1cm4gbWFwW3JlcV07XG59XG53ZWJwYWNrQ29udGV4dC5rZXlzID0gZnVuY3Rpb24gd2VicGFja0NvbnRleHRLZXlzKCkge1xuXHRyZXR1cm4gT2JqZWN0LmtleXMobWFwKTtcbn07XG53ZWJwYWNrQ29udGV4dC5yZXNvbHZlID0gd2VicGFja0NvbnRleHRSZXNvbHZlO1xubW9kdWxlLmV4cG9ydHMgPSB3ZWJwYWNrQ29udGV4dDtcbndlYnBhY2tDb250ZXh0LmlkID0gXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlIHN5bmMgcmVjdXJzaXZlIF5cXFxcLlxcXFwvLiokXCI7Il0sIm5hbWVzIjpbIlJlYWN0IiwidXNlQ29udGV4dCIsInVzZURlYnVnVmFsdWUiLCJMb2dpbiIsIkhvbWUiLCJMYXlvdXQiLCJFZGl0b3IiLCJBZG1pbiIsIk1pc3NpbmciLCJVbmF1dGhvcml6ZWQiLCJMb3VuZ2UiLCJMaW5rUGFnZSIsIlJlcXVpcmVBdXRoIiwiUGVyc2lzdExvZ2luIiwiUm91dGVzIiwiUm91dGUiLCJQYXRpZW50cyIsIlJlcHBvcnRDYWxscyIsIlJlcHBvcnRHb2FscyIsIlBhdGllbnQiLCJST0xFUyIsIlVzZXIiLCJBcHAiLCJMaW5rIiwiVXNlcnMiLCJ1c2VOYXZpZ2F0ZSIsInVzZUxvZ291dCIsIkJ1dHRvbiIsIkNvbnRhaW5lciIsIkZvcm0iLCJOYXYiLCJOYXZiYXIiLCJOYXZEcm9wZG93biIsIkZvcm1fTWVldFJhcHBvcnRzIiwibmF2aWdhdGUiLCJsb2dvdXQiLCJzaWduT3V0IiwidXNlU3RhdGUiLCJ1c2VFZmZlY3QiLCJGb250QXdlc29tZUljb24iLCJmYUFycm93UmlnaHQiLCJNZW51IiwicmVwb3J0TWVldCIsInNldFJlcG9ydE1lZXQiLCJyZXBvcnRDYWxscyIsInNldFJlcG9ydENhbGxzIiwicmVwb3J0R29hbHMiLCJzZXRSZXBvcnRHb2FscyIsInBhdGgiLCJ1cmwiLCJnb1RvUmVwcG9ydCIsImhpc3RvcnkiLCJwdXNoIiwib25DbGlja1JlcHBvcnRNZWV0Iiwib25DbGlja1JlcHBvcnRDYWxscyIsIm9uQ2xpY2tSZXBwb3J0R29hbHMiLCJPdXRsZXQiLCJ1c2VSZWYiLCJ1c2VBdXRoIiwidXNlTG9jYXRpb24iLCJheGlvcyIsIkxPR0lOX1VSTCIsInNldEF1dGgiLCJwZXJzaXN0Iiwic2V0UGVyc2lzdCIsImxvY2F0aW9uIiwiZnJvbSIsInN0YXRlIiwicGF0aG5hbWUiLCJ1c2VyUmVmIiwiZXJyUmVmIiwiZW1haWwiLCJzZXRVc2VyIiwicGFzc3dvcmQiLCJzZXRQd2QiLCJlcnJNc2ciLCJzZXRFcnJNc2ciLCJjdXJyZW50IiwiZm9jdXMiLCJoYW5kbGVTdWJtaXQiLCJlIiwicHJldmVudERlZmF1bHQiLCJwb3N0IiwiSlNPTiIsInN0cmluZ2lmeSIsImhlYWRlcnMiLCJyZXNwb25zZSIsImFjY2Vzc1Rva2VuIiwiZGF0YSIsInRva2VuIiwiZ2V0Iiwid2l0aENyZWRlbnRpYWxzIiwiQXV0aG9yaXphdGlvbiIsInJvbGVzX3VzZWQiLCJyb2xlcyIsInJvbGVOYW1lcyIsImxlbmd0aCIsInJlcGxhY2UiLCJzdGF0dXMiLCJ0b2dnbGVQZXJzaXN0IiwicHJldiIsImxvY2FsU3RvcmFnZSIsInNldEl0ZW0iLCJ0YXJnZXQiLCJ2YWx1ZSIsImZhU2lnbk91dCIsIk9mZmNhbnZhcyIsIlNlYXJjaCIsImJhY2tncm91bmRDb2xvciIsInBhZGRpbmciLCJsb2dvUGF0aCIsInVzZVBhcmFtcyIsIlRhYiIsIlRhYnMiLCJGaWNoZSIsIkluZGljYXRvcnMiLCJQcm9maWxlIiwiTWVkaWFzIiwiQ29udGFjdHMiLCJQbGFjZXMiLCJpZCIsImJhY2tncm91bmRJbWFnZSIsImF1dGgiLCJwYXRpZW50Iiwic2V0UGF0aWVudCIsImltZ1BhdGllbnQiLCJzZXRJbWdQYXRpZW50Iiwia2V5Iiwic2V0S2V5IiwiaWRQYXRpZW50Iiwic2V0SWRQYXRpZW50IiwibG9jYXRpb25XZWIiLCJzZXRMb2NhdGlvbiIsImZvcm1EYXRhIiwiRm9ybURhdGEiLCJhcHBlbmQiLCJ0b1N0cmluZyIsIm9ialBhdGllbnQiLCJtZXRob2QiLCJ0aGVuIiwiaW1hZ2UiLCJPYmplY3QiLCJrZXlzIiwiZmlyc3RuYW1lIiwibGFzdG5hbWUiLCJEYXRlIiwiYmlydGhkYXRlIiwidG9Mb2NhbGVEYXRlU3RyaW5nIiwiZmlyc3RDb250YWN0RGF0ZSIsImsiLCJUYWJsZSIsImZhVXNlciIsIkFjY29yZGlvbiIsInBhdGllbnRzTGlzdCIsInNldFBhdGllbnRzTGlzdCIsImxlbmd0aExpc3QiLCJzZXRMZW5ndGhMaXN0IiwicmVhZE1vcmUiLCJtYXAiLCJiaXJ0aExvY2F0aW9uIiwidXNlUmVmcmVzaFRva2VuIiwiaXNMb2FkaW5nIiwic2V0SXNMb2FkaW5nIiwicmVmcmVzaCIsImlzTW91bnRlZCIsInZlcmlmeVJlZnJlc2hUb2tlbiIsImNvbnNvbGUiLCJlcnJvciIsIkNvbXBvbmVudCIsIlBvc3RzIiwicG9zdHMiLCJsb2FkaW5nIiwiZ2V0UG9zdHMiLCJyZXMiLCJuYW1lIiwiZGVzY3JpcHRpb24iLCJsaXN0Q29udGFjdHMiLCJzZXRDb250YWN0cyIsIm9wdGlvbnMiLCJzZXRPcHRpb25zIiwiZmlsdGVyRGF0ZXMiLCJzZXRGaWx0ZXJEYXRlcyIsIml0ZW0iLCJjb250Iiwib3JwYSIsInVzZURyb3B6b25lIiwiQmFzaWMiLCJwcm9wcyIsImFjY2VwdGVkRmlsZXMiLCJnZXRSb290UHJvcHMiLCJnZXRJbnB1dFByb3BzIiwiZmlsZVVwbG9hZGVkIiwic2V0RmlsZVVwbG9hZGVkIiwiZmlsZXMiLCJmaWxlIiwic2l6ZSIsIkZpbGVzVXBsb2FkZWQiLCJvbkNoYW5nZSIsImNsYXNzTmFtZSIsIkNLRWRpdG9yIiwiQ2xhc3NpY0VkaXRvciIsImVkaXRvciIsImxvZyIsInNldERhdGEiLCJjb250ZW50VGV4dCIsImV2ZW50IiwiZ2V0RGF0YSIsImZhUGx1c0NpcmNsZSIsImZhQ2FuY2VsIiwiZmFFZGl0IiwiTW9kYWxBZGRJbmZvcyIsIk1vZGFsRWRpdEluZm9zIiwiQmxvY2tJbmZvcyIsImluZm9ybWF0aW9uUGF0aWVudCIsInNldEluZm9ybWF0aW9uIiwiaW5mb3JtYXRpb25UZW1wbGF0ZUJsb2NrIiwic2V0SW5mb3JtYXRpb25UZW1wbGF0ZUJsb2NrIiwiaW5mb3MiLCJzdWdlIiwicGF0aFN0cmluZyIsImxpbmsiLCJwYXRpZW50SW5mb3JtYXRpb24iLCJwaSIsInN1Z2ciLCJNb2RhbCIsInNob3ciLCJzZXRTaG93Iiwic2V0SW5mb3MiLCJlbGVtZW50c09wdCIsInNldEVsZW1lbnRzT3B0IiwiaGFuZGxlQ2xvc2UiLCJoYW5kbGVTaG93Iiwic3VnZ2VzdGlvbnNCeUJsb2NrIiwiZWwiLCJtb21lbnQiLCJzdGFydCIsInNldFN0YXJ0RGF0ZSIsImVuZCIsInNldEVuZERhdGUiLCJpbmZvc1BhdGllbnQiLCJ0aW1lc3RhbXAiLCJ0b0pTT04iLCJoYW5kbGVJbnB1dENoYW5nZSIsInNsaWNlIiwiY29tbWVudCIsIkNoYXJ0IiwiQ2hhcnRKUyIsIkNhdGVnb3J5U2NhbGUiLCJMaW5lYXJTY2FsZSIsIkJhckVsZW1lbnQiLCJUaXRsZSIsIlRvb2x0aXAiLCJMZWdlbmQiLCJCYXIiLCJyZWdpc3RlciIsImluZm9ybWF0aW9ucyIsInNldEluZm9ybWF0aW9ucyIsImNvbSIsImZpbHRlciIsImluZGkiLCJ2ZXQiLCJjb3IiLCJhcnJEYXRlcyIsImZvckVhY2giLCJlbGVtZW50IiwiZGF0ZWZvcm1hdGVkIiwiZm9yZSIsInJlcG9ydERhdGUiLCJ0b0xvY2FsZVN0cmluZyIsImRhdGVTdHlsZSIsImluZGV4IiwiYXJyYXkiLCJpbmRleE9mIiwicGx1Z2lucyIsInRpdGxlIiwiZGlzcGxheSIsInRleHQiLCJyZXNwb25zaXZlIiwic2NhbGVzIiwieCIsInN0YWNrZWQiLCJ5IiwibGFiZWxzIiwiZGF0YXNldHMiLCJsYWJlbCIsImxpc3RNZWRpYXMiLCJzZXRNZWRpYXMiLCJzZW5kTWVkaWFzIiwic2V0VmFsdWUiLCJoYW5kbGVDaGFuZ2UiLCJuZXdWYWx1ZSIsIm1lZGlhcyIsIm9yaWdpbmFsRmlsZW5hbWUiLCJwYXJlbnRTdWdnIiwiZGF0ZSIsImxpc3RQbGFjZXMiLCJzZXRQbGFjZXMiLCJwbGFjZXMiLCJpc0VkaXQiLCJzZXRFZGl0IiwidG9nZ2xlIiwic2V0VG9nZ2xlIiwiZ29hbHMiLCJzZXRHb2FscyIsImFjdGl2aXRpZXMiLCJzZXRBY3Rpdml0aWVzIiwiZWRpdENvbnRlbnQiLCJnIiwidHlwZSIsImNyZWF0aW9uRGF0ZSIsImZ1bmMiLCJyIiwiYWN0aXZpdHlUeXBlIiwiZGVsZXRlZEF0IiwiaXNIaWdodGxpZ2h0IiwiY29udGVudCIsIl9faHRtbCIsIk5hdmlnYXRlIiwiYWxsb3dlZFJvbGVzIiwiZmluZCIsInJvbGUiLCJpbmNsdWRlcyIsInZhbHVlU2VhcmNoIiwic2V0U2VhcmNoIiwicmVzdWx0U2VhcmNoIiwic2V0UmVzdWx0U2VhcmNoIiwiaXNPcGVuIiwic2V0T3BlblJlc3VsdCIsInBhcmFtcyIsInZhbCIsIm9uQ2xpY2tJZlZhbHVlIiwicmVkaXJlY3Rpb25Ub1BhdGllbnQiLCJ3aW5kb3ciLCJocmVmIiwicmVzdWx0Iiwibmlja25hbWVzIiwiZ29CYWNrIiwiU3dpdGNoIiwid2l0aFJvdXRlciIsImNyZWF0ZUNvbnRleHQiLCJBdXRoQ29udGV4dCIsIkF1dGhQcm92aWRlciIsImNoaWxkcmVuIiwicGFyc2UiLCJnZXRJdGVtIiwidXNlciIsImNyZWRlbnRpYWxzIiwiUmVhY3RET00iLCJCcm93c2VyUm91dGVyIiwicmVuZGVyIiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCJdLCJzb3VyY2VSb290IjoiIn0=