"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./components/PlaceCard.js":
/*!*********************************!*\
  !*** ./components/PlaceCard.js ***!
  \*********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ PlaceCard; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);\n\nvar _s = $RefreshSig$();\n\n\nfunction PlaceCard(param) {\n    let { place } = param;\n    _s();\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                children: place.name\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\KriKra\\\\neuefische\\\\projects\\\\crud-recap\\\\components\\\\PlaceCard.js\",\n                lineNumber: 8,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                children: place.location\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\KriKra\\\\neuefische\\\\projects\\\\crud-recap\\\\components\\\\PlaceCard.js\",\n                lineNumber: 9,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_1___default()), {\n                src: place.image,\n                width: 400,\n                height: 300,\n                alt: place.name\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\KriKra\\\\neuefische\\\\projects\\\\crud-recap\\\\components\\\\PlaceCard.js\",\n                lineNumber: 10,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                fileName: \"C:\\\\Users\\\\KriKra\\\\neuefische\\\\projects\\\\crud-recap\\\\components\\\\PlaceCard.js\",\n                lineNumber: 16,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                onClick: ()=>{\n                    router.push(\"/\".concat(place.id));\n                },\n                children: \"DetailView\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\KriKra\\\\neuefische\\\\projects\\\\crud-recap\\\\components\\\\PlaceCard.js\",\n                lineNumber: 17,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\KriKra\\\\neuefische\\\\projects\\\\crud-recap\\\\components\\\\PlaceCard.js\",\n        lineNumber: 7,\n        columnNumber: 5\n    }, this);\n}\n_s(PlaceCard, \"fN7XvhJ+p5oE6+Xlo0NJmXpxjC8=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter\n    ];\n});\n_c = PlaceCard;\nvar _c;\n$RefreshReg$(_c, \"PlaceCard\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL1BsYWNlQ2FyZC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFBK0I7QUFDUztBQUV6QixTQUFTRSxVQUFVLEtBQVM7UUFBVCxFQUFFQyxLQUFLLEVBQUUsR0FBVDs7SUFDaEMsTUFBTUMsU0FBU0gsc0RBQVNBO0lBQ3hCLHFCQUNFLDhEQUFDSTs7MEJBQ0MsOERBQUNDOzBCQUFJSCxNQUFNSSxJQUFJOzs7Ozs7MEJBQ2YsOERBQUNDOzBCQUFHTCxNQUFNTSxRQUFROzs7Ozs7MEJBQ2xCLDhEQUFDVCxtREFBS0E7Z0JBQ0pVLEtBQUtQLE1BQU1RLEtBQUs7Z0JBQ2hCQyxPQUFPO2dCQUNQQyxRQUFRO2dCQUNSQyxLQUFLWCxNQUFNSSxJQUFJOzs7Ozs7MEJBRWpCLDhEQUFDUTs7Ozs7MEJBQ0QsOERBQUNDO2dCQUNDQyxTQUFTO29CQUNQYixPQUFPYyxJQUFJLENBQUMsSUFBYSxPQUFUZixNQUFNZ0IsRUFBRTtnQkFDMUI7MEJBQ0Q7Ozs7Ozs7Ozs7OztBQUtQO0dBdEJ3QmpCOztRQUNQRCxrREFBU0E7OztLQURGQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL1BsYWNlQ2FyZC5qcz80NmVkIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBJbWFnZSBmcm9tIFwibmV4dC9pbWFnZVwiO1xyXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFBsYWNlQ2FyZCh7IHBsYWNlIH0pIHtcclxuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcclxuICByZXR1cm4gKFxyXG4gICAgPGxpPlxyXG4gICAgICA8aDM+e3BsYWNlLm5hbWV9PC9oMz5cclxuICAgICAgPHA+e3BsYWNlLmxvY2F0aW9ufTwvcD5cclxuICAgICAgPEltYWdlXHJcbiAgICAgICAgc3JjPXtwbGFjZS5pbWFnZX1cclxuICAgICAgICB3aWR0aD17NDAwfVxyXG4gICAgICAgIGhlaWdodD17MzAwfVxyXG4gICAgICAgIGFsdD17cGxhY2UubmFtZX1cclxuICAgICAgPjwvSW1hZ2U+XHJcbiAgICAgIDxicj48L2JyPlxyXG4gICAgICA8YnV0dG9uXHJcbiAgICAgICAgb25DbGljaz17KCkgPT4ge1xyXG4gICAgICAgICAgcm91dGVyLnB1c2goYC8ke3BsYWNlLmlkfWApO1xyXG4gICAgICAgIH19XHJcbiAgICAgID5cclxuICAgICAgICBEZXRhaWxWaWV3XHJcbiAgICAgIDwvYnV0dG9uPlxyXG4gICAgPC9saT5cclxuICApO1xyXG59XHJcbiJdLCJuYW1lcyI6WyJJbWFnZSIsInVzZVJvdXRlciIsIlBsYWNlQ2FyZCIsInBsYWNlIiwicm91dGVyIiwibGkiLCJoMyIsIm5hbWUiLCJwIiwibG9jYXRpb24iLCJzcmMiLCJpbWFnZSIsIndpZHRoIiwiaGVpZ2h0IiwiYWx0IiwiYnIiLCJidXR0b24iLCJvbkNsaWNrIiwicHVzaCIsImlkIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/PlaceCard.js\n"));

/***/ })

});