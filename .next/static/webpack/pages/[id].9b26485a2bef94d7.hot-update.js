"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/[id]",{

/***/ "./pages/[id]/index.js":
/*!*****************************!*\
  !*** ./pages/[id]/index.js ***!
  \*****************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ DetailView; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_2__);\n\nvar _s = $RefreshSig$();\n\n\nfunction DetailView(param) {\n    let { places } = param;\n    _s();\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter)();\n    const { id } = router.query;\n    const placeToShow = places.find((place)=>place.id === id);\n    console.log(router.query);\n    if (!router.isReady) {\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n            children: \"Place not found\"\n        }, void 0, false, {\n            fileName: \"C:\\\\Users\\\\KriKra\\\\neuefische\\\\projects\\\\crud-recap\\\\pages\\\\[id]\\\\index.js\",\n            lineNumber: 12,\n            columnNumber: 12\n        }, this);\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                children: placeToShow.name\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\KriKra\\\\neuefische\\\\projects\\\\crud-recap\\\\pages\\\\[id]\\\\index.js\",\n                lineNumber: 17,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                children: placeToShow.location\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\KriKra\\\\neuefische\\\\projects\\\\crud-recap\\\\pages\\\\[id]\\\\index.js\",\n                lineNumber: 18,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {\n                src: placeToShow.image,\n                width: 400,\n                height: 300,\n                alt: \"imageLOL\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\KriKra\\\\neuefische\\\\projects\\\\crud-recap\\\\pages\\\\[id]\\\\index.js\",\n                lineNumber: 19,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                children: placeToShow.description\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\KriKra\\\\neuefische\\\\projects\\\\crud-recap\\\\pages\\\\[id]\\\\index.js\",\n                lineNumber: 25,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true);\n}\n_s(DetailView, \"fN7XvhJ+p5oE6+Xlo0NJmXpxjC8=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter\n    ];\n});\n_c = DetailView;\nvar _c;\n$RefreshReg$(_c, \"DetailView\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9baWRdL2luZGV4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUF3QztBQUNUO0FBRWhCLFNBQVNFLFdBQVcsS0FBVTtRQUFWLEVBQUVDLE1BQU0sRUFBRSxHQUFWOztJQUNqQyxNQUFNQyxTQUFTSixzREFBU0E7SUFDeEIsTUFBTSxFQUFFSyxFQUFFLEVBQUUsR0FBR0QsT0FBT0UsS0FBSztJQUUzQixNQUFNQyxjQUFjSixPQUFPSyxJQUFJLENBQUMsQ0FBQ0MsUUFBVUEsTUFBTUosRUFBRSxLQUFLQTtJQUN4REssUUFBUUMsR0FBRyxDQUFDUCxPQUFPRSxLQUFLO0lBRXhCLElBQUksQ0FBQ0YsT0FBT1EsT0FBTyxFQUFFO1FBQ25CLHFCQUFPLDhEQUFDQztzQkFBRzs7Ozs7O0lBQ2I7SUFFQSxxQkFDRTs7MEJBQ0UsOERBQUNDOzBCQUFJUCxZQUFZUSxJQUFJOzs7Ozs7MEJBQ3JCLDhEQUFDQzswQkFBR1QsWUFBWVUsUUFBUTs7Ozs7OzBCQUN4Qiw4REFBQ2hCLG1EQUFLQTtnQkFDSmlCLEtBQUtYLFlBQVlZLEtBQUs7Z0JBQ3RCQyxPQUFPO2dCQUNQQyxRQUFRO2dCQUNSQyxLQUFJOzs7Ozs7MEJBRU4sOERBQUNOOzBCQUFHVCxZQUFZZ0IsV0FBVzs7Ozs7Ozs7QUFHakM7R0F4QndCckI7O1FBQ1BGLGtEQUFTQTs7O0tBREZFIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL1tpZF0vaW5kZXguanM/MWM4NyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcclxuaW1wb3J0IEltYWdlIGZyb20gXCJuZXh0L2ltYWdlXCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBEZXRhaWxWaWV3KHsgcGxhY2VzIH0pIHtcclxuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcclxuICBjb25zdCB7IGlkIH0gPSByb3V0ZXIucXVlcnk7XHJcblxyXG4gIGNvbnN0IHBsYWNlVG9TaG93ID0gcGxhY2VzLmZpbmQoKHBsYWNlKSA9PiBwbGFjZS5pZCA9PT0gaWQpO1xyXG4gIGNvbnNvbGUubG9nKHJvdXRlci5xdWVyeSk7XHJcblxyXG4gIGlmICghcm91dGVyLmlzUmVhZHkpIHtcclxuICAgIHJldHVybiA8aDE+UGxhY2Ugbm90IGZvdW5kPC9oMT47XHJcbiAgfVxyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPD5cclxuICAgICAgPGgyPntwbGFjZVRvU2hvdy5uYW1lfTwvaDI+XHJcbiAgICAgIDxwPntwbGFjZVRvU2hvdy5sb2NhdGlvbn08L3A+XHJcbiAgICAgIDxJbWFnZVxyXG4gICAgICAgIHNyYz17cGxhY2VUb1Nob3cuaW1hZ2V9XHJcbiAgICAgICAgd2lkdGg9ezQwMH1cclxuICAgICAgICBoZWlnaHQ9ezMwMH1cclxuICAgICAgICBhbHQ9XCJpbWFnZUxPTFwiXHJcbiAgICAgID48L0ltYWdlPlxyXG4gICAgICA8cD57cGxhY2VUb1Nob3cuZGVzY3JpcHRpb259PC9wPlxyXG4gICAgPC8+XHJcbiAgKTtcclxufVxyXG4iXSwibmFtZXMiOlsidXNlUm91dGVyIiwiSW1hZ2UiLCJEZXRhaWxWaWV3IiwicGxhY2VzIiwicm91dGVyIiwiaWQiLCJxdWVyeSIsInBsYWNlVG9TaG93IiwiZmluZCIsInBsYWNlIiwiY29uc29sZSIsImxvZyIsImlzUmVhZHkiLCJoMSIsImgyIiwibmFtZSIsInAiLCJsb2NhdGlvbiIsInNyYyIsImltYWdlIiwid2lkdGgiLCJoZWlnaHQiLCJhbHQiLCJkZXNjcmlwdGlvbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/[id]/index.js\n"));

/***/ })

});