"use strict";
/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdateclientapp"]("produto/Listar",{

/***/ "./src/views/produto/Listar.js":
/*!*************************************!*\
  !*** ./src/views/produto/Listar.js ***!
  \*************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ \"./node_modules/@babel/runtime/helpers/esm/classCallCheck.js\");\n/* harmony import */ var _babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/assertThisInitialized */ \"./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js\");\n/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/inherits */ \"./node_modules/@babel/runtime/helpers/esm/inherits.js\");\n/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ \"./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js\");\n/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ \"./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js\");\n/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ \"./node_modules/@babel/runtime/helpers/esm/defineProperty.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-dom */ \"./node_modules/react-dom/index.js\");\n\n\n\n\n\n\n\nfunction _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0,_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0,_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0,_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(this, result); }; }\n\nfunction _isNativeReflectConstruct() { if (typeof Reflect === \"undefined\" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === \"function\") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }\n\n\n\n\nvar Listar = /*#__PURE__*/function (_React$Component) {\n  (0,_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(Listar, _React$Component);\n\n  var _super = _createSuper(Listar);\n\n  function Listar() {\n    var _this;\n\n    (0,_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(this, Listar);\n\n    _this = _super.call(this);\n\n    (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_5__[\"default\"])((0,_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(_this), \"pesquisar\", function () {\n      HTTPClient.get(\"Produto/Consultar?nome=\" + encodeURIComponent(_this.state.pesquisa)).then(function (r) {\n        return r.json();\n      }).then(function (r) {\n        _this.setState({\n          resultado: r\n        });\n      }).catch(function () {//deu erro\n      }).finally(function () {});\n    });\n\n    (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_5__[\"default\"])((0,_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(_this), \"render\", function () {\n      var form = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6__.createElement(\"form\", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6__.createElement(\"input\", {\n        type: \"search\",\n        value: _this.state.pesquisa,\n        onChange: function onChange(e) {\n          _this.setState({\n            pesquisa: e.target.value\n          });\n        }\n      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6__.createElement(\"button\", {\n        type: \"button\",\n        onClick: _this.pesquisar\n      }, \"PESQUISAR\"));\n      var resultado = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6__.createElement(\"div\", {\n        class: \"content\"\n      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6__.createElement(\"div\", {\n        class: \"container-fluid\"\n      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6__.createElement(\"div\", {\n        class: \"row\"\n      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6__.createElement(\"div\", {\n        class: \"col-lg-6\"\n      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6__.createElement(\"div\", {\n        class: \"card\"\n      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6__.createElement(\"div\", {\n        class: \"card-header border-0\"\n      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6__.createElement(\"h3\", {\n        class: \"card-title\"\n      }, \"Produtos\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6__.createElement(\"div\", {\n        class: \"card-tools\"\n      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6__.createElement(\"a\", {\n        href: \"#\",\n        class: \"btn btn-tool btn-sm\"\n      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6__.createElement(\"i\", {\n        class: \"fas fa-download\"\n      })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6__.createElement(\"a\", {\n        href: \"#\",\n        class: \"btn btn-tool btn-sm\"\n      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6__.createElement(\"i\", {\n        class: \"fas fa-bars\"\n      })))), form, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6__.createElement(\"div\", {\n        class: \"card-body table-responsive p-0\"\n      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6__.createElement(\"table\", {\n        className: \"table\"\n      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6__.createElement(\"thead\", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6__.createElement(\"tr\", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6__.createElement(\"th\", null, \"Nome\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6__.createElement(\"th\", null, \"Pre\\xE7o\"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6__.createElement(\"tbody\", null, _this.state.resultado.length == 0 && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6__.createElement(\"tr\", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6__.createElement(\"td\", {\n        colSpan: \"2\"\n      }, \"Sem resultado\")), _this.state.resultado.map(function (item) {\n        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6__.createElement(\"tr\", {\n          key: \"produto-\" + item.id\n        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6__.createElement(\"td\", null, item.nome), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6__.createElement(\"td\", null, item.preco));\n      })))))))));\n      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6__.createElement(react__WEBPACK_IMPORTED_MODULE_6__.Fragment, null, resultado);\n    });\n\n    _this.state = {\n      pesquisa: \"\",\n      resultado: []\n    };\n    return _this;\n  }\n\n  return Listar;\n}(react__WEBPACK_IMPORTED_MODULE_6__.Component);\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Listar);\nreact_dom__WEBPACK_IMPORTED_MODULE_7__.render( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6__.createElement(Listar, null), document.getElementById(\"root\"));\n\n//# sourceURL=webpack://clientapp/./src/views/produto/Listar.js?");

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ !function() {
/******/ 	__webpack_require__.h = function() { return "3e035b1eba08e13de8ba"; }
/******/ }();
/******/ 
/******/ }
);