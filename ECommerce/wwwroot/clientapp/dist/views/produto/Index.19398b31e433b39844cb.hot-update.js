"use strict";
/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdateclientapp"]("produto/Index",{

/***/ "./src/views/produto/Index.js":
/*!************************************!*\
  !*** ./src/views/produto/Index.js ***!
  \************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ \"./node_modules/@babel/runtime/helpers/esm/classCallCheck.js\");\n/* harmony import */ var _babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/assertThisInitialized */ \"./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js\");\n/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/inherits */ \"./node_modules/@babel/runtime/helpers/esm/inherits.js\");\n/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ \"./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js\");\n/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ \"./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js\");\n/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ \"./node_modules/@babel/runtime/helpers/esm/defineProperty.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-dom */ \"./node_modules/react-dom/index.js\");\n\n\n\n\n\n\n\nfunction _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0,_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0,_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0,_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(this, result); }; }\n\nfunction _isNativeReflectConstruct() { if (typeof Reflect === \"undefined\" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === \"function\") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }\n\n\n\n\nvar Index = /*#__PURE__*/function (_React$Component) {\n  (0,_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(Index, _React$Component);\n\n  var _super = _createSuper(Index);\n\n  function Index() {\n    var _this;\n\n    (0,_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(this, Index);\n\n    _this = _super.call(this);\n\n    (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_5__[\"default\"])((0,_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(_this), \"salvar\", function () {\n      var dados = {\n        id: _this.state.id,\n        nome: _this.state.nome,\n        preco: _this.state.preco,\n        estoque: _this.state.estoque,\n        categoria: _this.state.categoria\n      };\n      HTTPClient.post(\"Backoffice/Produto/Gravar\", dados).then(function (r) {\n        return r.json();\n      }).then(function (r) {\n        if (r.sucesso) {\n          _this.setState({\n            id: r.produto.id\n          });\n        }\n      }).catch(function () {//deu erro\n      });\n    });\n\n    (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_5__[\"default\"])((0,_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(_this), \"render\", function () {\n      var saida = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6__.createElement(\"section\", {\n        className: \"content\"\n      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6__.createElement(\"div\", {\n        className: \"container-fluid\"\n      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6__.createElement(\"div\", {\n        className: \"row\"\n      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6__.createElement(\"div\", {\n        className: \"col-md-12\"\n      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6__.createElement(\"div\", {\n        className: \"card card-primary\"\n      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6__.createElement(\"form\", {\n        id: \"quickForm\"\n      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6__.createElement(\"div\", {\n        className: \"card-body\"\n      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6__.createElement(\"div\", {\n        className: \"form-group\"\n      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6__.createElement(\"label\", null, \"ID\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6__.createElement(\"input\", {\n        type: \"text\",\n        className: \"form-control\",\n        value: _this.state.id,\n        readonly: true\n      })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6__.createElement(\"div\", {\n        className: \"form-group\"\n      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6__.createElement(\"label\", null, \"Nome\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6__.createElement(\"input\", {\n        type: \"text\",\n        className: \"form-control\",\n        value: _this.state.nome,\n        onChange: function onChange(e) {\n          return _this.setState({\n            nome: e.target.value\n          });\n        }\n      })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6__.createElement(\"div\", {\n        className: \"form-group\"\n      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6__.createElement(\"label\", null, \"Pre\\xE7o\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6__.createElement(\"input\", {\n        type: \"number\",\n        className: \"form-control\",\n        value: _this.state.preco,\n        onChange: function onChange(e) {\n          return _this.setState({\n            preco: e.target.value\n          });\n        }\n      })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6__.createElement(\"div\", {\n        className: \"form-group\"\n      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6__.createElement(\"label\", null, \"Estoque\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6__.createElement(\"input\", {\n        type: \"number\",\n        className: \"form-control\",\n        value: _this.state.estoque\n      })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6__.createElement(\"div\", {\n        className: \"row m-1 mb-2\"\n      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6__.createElement(\"div\", {\n        className: \"form-group\"\n      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6__.createElement(\"label\", null, \"Categoria\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6__.createElement(\"select\", {\n        name: \"categoria\",\n        id: \"categoria\"\n      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6__.createElement(\"option\", {\n        value: \"academia\"\n      }, \"Academia\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6__.createElement(\"option\", {\n        value: \"basquete\"\n      }, \"Basquete\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6__.createElement(\"option\", {\n        value: \"futebol\"\n      }, \"Futebol\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6__.createElement(\"option\", {\n        value: \"futsal\",\n        selected: true\n      }, \"Futsal\")))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6__.createElement(\"div\", {\n        className: \"card-footer\"\n      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6__.createElement(\"button\", {\n        type: \"button\",\n        onClick: \"index.gravar()\",\n        className: \"btn btn-primary\"\n      }, \"Enviar\")))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6__.createElement(\"div\", {\n        className: \"col-md-6\"\n      }))));\n      return saida;\n    });\n\n    _this.state = {\n      id: \"0\",\n      nome: \"\",\n      preco: 0,\n      estoque: 0,\n      categoria: \"\"\n    };\n    return _this;\n  }\n\n  return Index;\n}(react__WEBPACK_IMPORTED_MODULE_6__.Component);\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Index);\nreact_dom__WEBPACK_IMPORTED_MODULE_7__.render( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6__.createElement(Index, null), document.getElementById(\"root\"));\n\n//# sourceURL=webpack://clientapp/./src/views/produto/Index.js?");

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ !function() {
/******/ 	__webpack_require__.h = function() { return "b01595a3ee6e35b9455f"; }
/******/ }();
/******/ 
/******/ }
);