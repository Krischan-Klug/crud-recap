/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunk_N_E"] = self["webpackChunk_N_E"] || []).push([["pages/create"],{

/***/ "./node_modules/next/dist/build/webpack/loaders/next-client-pages-loader.js?absolutePagePath=C%3A%5CUsers%5CKriKra%5Cneuefische%5Cprojects%5Ccrud-recap%5Cpages%5Ccreate.js&page=%2Fcreate!":
/*!**************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-client-pages-loader.js?absolutePagePath=C%3A%5CUsers%5CKriKra%5Cneuefische%5Cprojects%5Ccrud-recap%5Cpages%5Ccreate.js&page=%2Fcreate! ***!
  \**************************************************************************************************************************************************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

eval(__webpack_require__.ts("\n    (window.__NEXT_P = window.__NEXT_P || []).push([\n      \"/create\",\n      function () {\n        return __webpack_require__(/*! ./pages/create.js */ \"./pages/create.js\");\n      }\n    ]);\n    if(true) {\n      module.hot.dispose(function () {\n        window.__NEXT_P.push([\"/create\"])\n      });\n    }\n  //# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9uZXh0LWNsaWVudC1wYWdlcy1sb2FkZXIuanM/YWJzb2x1dGVQYWdlUGF0aD1DJTNBJTVDVXNlcnMlNUNLcmlLcmElNUNuZXVlZmlzY2hlJTVDcHJvamVjdHMlNUNjcnVkLXJlY2FwJTVDcGFnZXMlNUNjcmVhdGUuanMmcGFnZT0lMkZjcmVhdGUhIiwibWFwcGluZ3MiOiI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxlQUFlLG1CQUFPLENBQUMsNENBQW1CO0FBQzFDO0FBQ0E7QUFDQSxPQUFPLElBQVU7QUFDakIsTUFBTSxVQUFVO0FBQ2hCO0FBQ0EsT0FBTztBQUNQO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLz9mYzQ3Il0sInNvdXJjZXNDb250ZW50IjpbIlxuICAgICh3aW5kb3cuX19ORVhUX1AgPSB3aW5kb3cuX19ORVhUX1AgfHwgW10pLnB1c2goW1xuICAgICAgXCIvY3JlYXRlXCIsXG4gICAgICBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiByZXF1aXJlKFwiLi9wYWdlcy9jcmVhdGUuanNcIik7XG4gICAgICB9XG4gICAgXSk7XG4gICAgaWYobW9kdWxlLmhvdCkge1xuICAgICAgbW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgd2luZG93Ll9fTkVYVF9QLnB1c2goW1wiL2NyZWF0ZVwiXSlcbiAgICAgIH0pO1xuICAgIH1cbiAgIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./node_modules/next/dist/build/webpack/loaders/next-client-pages-loader.js?absolutePagePath=C%3A%5CUsers%5CKriKra%5Cneuefische%5Cprojects%5Ccrud-recap%5Cpages%5Ccreate.js&page=%2Fcreate!\n"));

/***/ }),

/***/ "./components/Form.js":
/*!****************************!*\
  !*** ./components/Form.js ***!
  \****************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Form; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);\n\nvar _s = $RefreshSig$();\n\nfunction Form(param) {\n    let { onAddPlace } = param;\n    _s();\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter)();\n    function handleSubmit(event) {\n        event.preventDefault();\n        const formData = new FormData(event.target);\n        const data = Object.fromEntries(formData);\n        onAddPlace(data);\n        router.push(\"/\");\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n            onSubmit: handleSubmit,\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                    htmlFor: \"name\",\n                    children: \"Name\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\KriKra\\\\neuefische\\\\projects\\\\crud-recap\\\\components\\\\Form.js\",\n                    lineNumber: 16,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                    id: \"name\",\n                    name: \"name\",\n                    type: \"text\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\KriKra\\\\neuefische\\\\projects\\\\crud-recap\\\\components\\\\Form.js\",\n                    lineNumber: 17,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\KriKra\\\\neuefische\\\\projects\\\\crud-recap\\\\components\\\\Form.js\",\n                    lineNumber: 18,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                    htmlFor: \"location\",\n                    children: \"Location\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\KriKra\\\\neuefische\\\\projects\\\\crud-recap\\\\components\\\\Form.js\",\n                    lineNumber: 19,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                    id: \"location\",\n                    name: \"location\",\n                    type: \"text\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\KriKra\\\\neuefische\\\\projects\\\\crud-recap\\\\components\\\\Form.js\",\n                    lineNumber: 20,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\KriKra\\\\neuefische\\\\projects\\\\crud-recap\\\\components\\\\Form.js\",\n                    lineNumber: 21,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                    htmlFor: \"image\",\n                    children: \"Image URL\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\KriKra\\\\neuefische\\\\projects\\\\crud-recap\\\\components\\\\Form.js\",\n                    lineNumber: 22,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                    id: \"image\",\n                    name: \"image\",\n                    type: \"text\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\KriKra\\\\neuefische\\\\projects\\\\crud-recap\\\\components\\\\Form.js\",\n                    lineNumber: 23,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\KriKra\\\\neuefische\\\\projects\\\\crud-recap\\\\components\\\\Form.js\",\n                    lineNumber: 24,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                    htmlFor: \"mapURL\",\n                    children: \"Map URL\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\KriKra\\\\neuefische\\\\projects\\\\crud-recap\\\\components\\\\Form.js\",\n                    lineNumber: 25,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                    id: \"mapURL\",\n                    name: \"mapURL\",\n                    type: \"text\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\KriKra\\\\neuefische\\\\projects\\\\crud-recap\\\\components\\\\Form.js\",\n                    lineNumber: 26,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\KriKra\\\\neuefische\\\\projects\\\\crud-recap\\\\components\\\\Form.js\",\n                    lineNumber: 27,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                    htmlFor: \"description\",\n                    children: \"Description\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\KriKra\\\\neuefische\\\\projects\\\\crud-recap\\\\components\\\\Form.js\",\n                    lineNumber: 28,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                    id: \"description\",\n                    name: \"description\",\n                    type: \"text\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\KriKra\\\\neuefische\\\\projects\\\\crud-recap\\\\components\\\\Form.js\",\n                    lineNumber: 29,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\KriKra\\\\neuefische\\\\projects\\\\crud-recap\\\\components\\\\Form.js\",\n                    lineNumber: 30,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                    type: \"submit\",\n                    children: \"Submit\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\KriKra\\\\neuefische\\\\projects\\\\crud-recap\\\\components\\\\Form.js\",\n                    lineNumber: 31,\n                    columnNumber: 9\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"C:\\\\Users\\\\KriKra\\\\neuefische\\\\projects\\\\crud-recap\\\\components\\\\Form.js\",\n            lineNumber: 15,\n            columnNumber: 7\n        }, this)\n    }, void 0, false);\n}\n_s(Form, \"fN7XvhJ+p5oE6+Xlo0NJmXpxjC8=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter\n    ];\n});\n_c = Form;\nvar _c;\n$RefreshReg$(_c, \"Form\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL0Zvcm0uanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUF3QztBQUV6QixTQUFTQyxLQUFLLEtBQWM7UUFBZCxFQUFFQyxVQUFVLEVBQUUsR0FBZDs7SUFDM0IsTUFBTUMsU0FBU0gsc0RBQVNBO0lBQ3hCLFNBQVNJLGFBQWFDLEtBQUs7UUFDekJBLE1BQU1DLGNBQWM7UUFDcEIsTUFBTUMsV0FBVyxJQUFJQyxTQUFTSCxNQUFNSSxNQUFNO1FBQzFDLE1BQU1DLE9BQU9DLE9BQU9DLFdBQVcsQ0FBQ0w7UUFFaENMLFdBQVdRO1FBQ1hQLE9BQU9VLElBQUksQ0FBQztJQUNkO0lBQ0EscUJBQ0U7a0JBQ0UsNEVBQUNDO1lBQUtDLFVBQVVYOzs4QkFDZCw4REFBQ1k7b0JBQU1DLFNBQVE7OEJBQU87Ozs7Ozs4QkFDdEIsOERBQUNDO29CQUFNQyxJQUFHO29CQUFPQyxNQUFLO29CQUFPQyxNQUFLOzs7Ozs7OEJBQ2xDLDhEQUFDQzs7Ozs7OEJBQ0QsOERBQUNOO29CQUFNQyxTQUFROzhCQUFXOzs7Ozs7OEJBQzFCLDhEQUFDQztvQkFBTUMsSUFBRztvQkFBV0MsTUFBSztvQkFBV0MsTUFBSzs7Ozs7OzhCQUMxQyw4REFBQ0M7Ozs7OzhCQUNELDhEQUFDTjtvQkFBTUMsU0FBUTs4QkFBUTs7Ozs7OzhCQUN2Qiw4REFBQ0M7b0JBQU1DLElBQUc7b0JBQVFDLE1BQUs7b0JBQVFDLE1BQUs7Ozs7Ozs4QkFDcEMsOERBQUNDOzs7Ozs4QkFDRCw4REFBQ047b0JBQU1DLFNBQVE7OEJBQVM7Ozs7Ozs4QkFDeEIsOERBQUNDO29CQUFNQyxJQUFHO29CQUFTQyxNQUFLO29CQUFTQyxNQUFLOzs7Ozs7OEJBQ3RDLDhEQUFDQzs7Ozs7OEJBQ0QsOERBQUNOO29CQUFNQyxTQUFROzhCQUFjOzs7Ozs7OEJBQzdCLDhEQUFDQztvQkFBTUMsSUFBRztvQkFBY0MsTUFBSztvQkFBY0MsTUFBSzs7Ozs7OzhCQUNoRCw4REFBQ0M7Ozs7OzhCQUNELDhEQUFDQztvQkFBT0YsTUFBSzs4QkFBUzs7Ozs7Ozs7Ozs7OztBQUk5QjtHQWhDd0JwQjs7UUFDUEQsa0RBQVNBOzs7S0FERkMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Gb3JtLmpzP2ZiOWMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSBcIm5leHQvcm91dGVyXCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBGb3JtKHsgb25BZGRQbGFjZSB9KSB7XHJcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XHJcbiAgZnVuY3Rpb24gaGFuZGxlU3VibWl0KGV2ZW50KSB7XHJcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgY29uc3QgZm9ybURhdGEgPSBuZXcgRm9ybURhdGEoZXZlbnQudGFyZ2V0KTtcclxuICAgIGNvbnN0IGRhdGEgPSBPYmplY3QuZnJvbUVudHJpZXMoZm9ybURhdGEpO1xyXG5cclxuICAgIG9uQWRkUGxhY2UoZGF0YSk7XHJcbiAgICByb3V0ZXIucHVzaChcIi9cIik7XHJcbiAgfVxyXG4gIHJldHVybiAoXHJcbiAgICA8PlxyXG4gICAgICA8Zm9ybSBvblN1Ym1pdD17aGFuZGxlU3VibWl0fT5cclxuICAgICAgICA8bGFiZWwgaHRtbEZvcj1cIm5hbWVcIj5OYW1lPC9sYWJlbD5cclxuICAgICAgICA8aW5wdXQgaWQ9XCJuYW1lXCIgbmFtZT1cIm5hbWVcIiB0eXBlPVwidGV4dFwiIC8+XHJcbiAgICAgICAgPGJyPjwvYnI+XHJcbiAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJsb2NhdGlvblwiPkxvY2F0aW9uPC9sYWJlbD5cclxuICAgICAgICA8aW5wdXQgaWQ9XCJsb2NhdGlvblwiIG5hbWU9XCJsb2NhdGlvblwiIHR5cGU9XCJ0ZXh0XCIgLz5cclxuICAgICAgICA8YnI+PC9icj5cclxuICAgICAgICA8bGFiZWwgaHRtbEZvcj1cImltYWdlXCI+SW1hZ2UgVVJMPC9sYWJlbD5cclxuICAgICAgICA8aW5wdXQgaWQ9XCJpbWFnZVwiIG5hbWU9XCJpbWFnZVwiIHR5cGU9XCJ0ZXh0XCIgLz5cclxuICAgICAgICA8YnI+PC9icj5cclxuICAgICAgICA8bGFiZWwgaHRtbEZvcj1cIm1hcFVSTFwiPk1hcCBVUkw8L2xhYmVsPlxyXG4gICAgICAgIDxpbnB1dCBpZD1cIm1hcFVSTFwiIG5hbWU9XCJtYXBVUkxcIiB0eXBlPVwidGV4dFwiIC8+XHJcbiAgICAgICAgPGJyPjwvYnI+XHJcbiAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJkZXNjcmlwdGlvblwiPkRlc2NyaXB0aW9uPC9sYWJlbD5cclxuICAgICAgICA8aW5wdXQgaWQ9XCJkZXNjcmlwdGlvblwiIG5hbWU9XCJkZXNjcmlwdGlvblwiIHR5cGU9XCJ0ZXh0XCIgLz5cclxuICAgICAgICA8YnI+PC9icj5cclxuICAgICAgICA8YnV0dG9uIHR5cGU9XCJzdWJtaXRcIj5TdWJtaXQ8L2J1dHRvbj5cclxuICAgICAgPC9mb3JtPlxyXG4gICAgPC8+XHJcbiAgKTtcclxufVxyXG4iXSwibmFtZXMiOlsidXNlUm91dGVyIiwiRm9ybSIsIm9uQWRkUGxhY2UiLCJyb3V0ZXIiLCJoYW5kbGVTdWJtaXQiLCJldmVudCIsInByZXZlbnREZWZhdWx0IiwiZm9ybURhdGEiLCJGb3JtRGF0YSIsInRhcmdldCIsImRhdGEiLCJPYmplY3QiLCJmcm9tRW50cmllcyIsInB1c2giLCJmb3JtIiwib25TdWJtaXQiLCJsYWJlbCIsImh0bWxGb3IiLCJpbnB1dCIsImlkIiwibmFtZSIsInR5cGUiLCJiciIsImJ1dHRvbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/Form.js\n"));

/***/ }),

/***/ "./pages/create.js":
/*!*************************!*\
  !*** ./pages/create.js ***!
  \*************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Create; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_Form__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/components/Form */ \"./components/Form.js\");\n\nvar _s = $RefreshSig$();\n\n\nfunction Create(param) {\n    let { handleAddPlace } = param;\n    _s();\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter)();\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                children: \"Create\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\KriKra\\\\neuefische\\\\projects\\\\crud-recap\\\\pages\\\\create.js\",\n                lineNumber: 9,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                onClick: ()=>router.back(),\n                children: \"Back\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\KriKra\\\\neuefische\\\\projects\\\\crud-recap\\\\pages\\\\create.js\",\n                lineNumber: 11,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Form__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                onAddPlace: handleAddPlace\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\KriKra\\\\neuefische\\\\projects\\\\crud-recap\\\\pages\\\\create.js\",\n                lineNumber: 13,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true);\n}\n_s(Create, \"fN7XvhJ+p5oE6+Xlo0NJmXpxjC8=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter\n    ];\n});\n_c = Create;\nvar _c;\n$RefreshReg$(_c, \"Create\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9jcmVhdGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBd0M7QUFDSDtBQUV0QixTQUFTRSxPQUFPLEtBQWtCO1FBQWxCLEVBQUVDLGNBQWMsRUFBRSxHQUFsQjs7SUFDN0IsTUFBTUMsU0FBU0osc0RBQVNBO0lBRXhCLHFCQUNFOzswQkFDRSw4REFBQ0s7MEJBQUc7Ozs7OzswQkFFSiw4REFBQ0M7Z0JBQU9DLFNBQVMsSUFBTUgsT0FBT0ksSUFBSTswQkFBSTs7Ozs7OzBCQUV0Qyw4REFBQ1Asd0RBQUlBO2dCQUFDUSxZQUFZTjs7Ozs7Ozs7QUFHeEI7R0Fad0JEOztRQUNQRixrREFBU0E7OztLQURGRSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9jcmVhdGUuanM/MjJmNSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcclxuaW1wb3J0IEZvcm0gZnJvbSBcIkAvY29tcG9uZW50cy9Gb3JtXCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBDcmVhdGUoeyBoYW5kbGVBZGRQbGFjZSB9KSB7XHJcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8PlxyXG4gICAgICA8aDE+Q3JlYXRlPC9oMT5cclxuXHJcbiAgICAgIDxidXR0b24gb25DbGljaz17KCkgPT4gcm91dGVyLmJhY2soKX0+QmFjazwvYnV0dG9uPlxyXG5cclxuICAgICAgPEZvcm0gb25BZGRQbGFjZT17aGFuZGxlQWRkUGxhY2V9IC8+XHJcbiAgICA8Lz5cclxuICApO1xyXG59XHJcbiJdLCJuYW1lcyI6WyJ1c2VSb3V0ZXIiLCJGb3JtIiwiQ3JlYXRlIiwiaGFuZGxlQWRkUGxhY2UiLCJyb3V0ZXIiLCJoMSIsImJ1dHRvbiIsIm9uQ2xpY2siLCJiYWNrIiwib25BZGRQbGFjZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/create.js\n"));

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
/******/ __webpack_require__.O(0, ["pages/_app","main"], function() { return __webpack_exec__("./node_modules/next/dist/build/webpack/loaders/next-client-pages-loader.js?absolutePagePath=C%3A%5CUsers%5CKriKra%5Cneuefische%5Cprojects%5Ccrud-recap%5Cpages%5Ccreate.js&page=%2Fcreate!"); });
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ _N_E = __webpack_exports__;
/******/ }
]);