"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/_app",{

/***/ "./lib/db.js":
/*!*******************!*\
  !*** ./lib/db.js ***!
  \*******************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   initialPlaces: function() { return /* binding */ initialPlaces; }\n/* harmony export */ });\nconst initialPlaces = [\n    {\n        id: \"0\",\n        name: \"Elbphilharmonie\",\n        location: \"Hamburg\",\n        image: \"https://images.unsplash.com/photo-1553547274-0df401ae03c9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTV8fGF1c3NlbmFsc3RlciUyMGhhbWJ1cmd8ZW58MHx8MHx8&auto=format&fit=crop&w=900&q=60\",\n        mapURL: \"https://www.google.com/maps/place/Elbphilharmonie+Hamburg/@53.543085,9.9859608,15.47z/data=!4m5!3m4!1s0x47b18f066770c44f:0xb2e4ab2a68984286!8m2!3d53.5413297!4d9.9841308\",\n        description: \"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eligendi dolorem inventore, minima, blanditiis similique rem incidunt modi, quibusdam magni accusamus repellat officia necessitatibus minus dolorum ut dolore. Adipisci, sed incidunt, quo ea deserunt ipsam natus fugit, nemo quaerat culpa architecto!\"\n    },\n    {\n        id: \"1\",\n        name: \"Reeperbahn\",\n        location: \"Hamburg\",\n        image: \"https://images.unsplash.com/photo-1599827552599-eadf5fb3c75f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTh8fHJlZXBlcmJhaG4lMjBoYW1idXJnfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=900&q=60\",\n        mapURL: \"https://www.google.com/maps/place/Reeperbahn,+Hamburg/@53.5491522,9.9606555,15.91z/data=!4m5!3m4!1s0x47b18f720653ed5f:0xe81438a344df5125!8m2!3d53.5495695!4d9.9626148\",\n        description: \"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eligendi dolorem inventore, minima, blanditiis similique rem incidunt modi, quibusdam magni accusamus repellat officia necessitatibus minus dolorum ut dolore. Adipisci, sed incidunt, quo ea deserunt ipsam natus fugit, nemo quaerat culpa architecto!\"\n    },\n    {\n        id: \"2\",\n        name: \"Alster\",\n        location: \"Hamburg\",\n        image: \"https://images.unsplash.com/photo-1661943556486-d1f54893a94e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mjh8fGF1c3NlbmFsc3RlciUyMGhhbWJ1cmd8ZW58MHx8MHx8&auto=format&fit=crop&w=900&q=60\",\n        mapURL: \"https://www.google.com/maps/place/Alsterufer/@53.5663635,9.999712,15.25z/data=!4m5!3m4!1s0x47b18f265a117a6d:0x9816cb4fc8715b6e!8m2!3d53.5661186!4d10.000864\",\n        description: \"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eligendi dolorem inventore, minima, blanditiis similique rem incidunt modi, quibusdam magni accusamus repellat officia necessitatibus minus dolorum ut dolore. Adipisci, sed incidunt, quo ea deserunt ipsam natus fugit, nemo quaerat culpa architecto!\"\n    },\n    {\n        id: \"3\",\n        name: \"Elbtunnel\",\n        location: \"Hamburg\",\n        image: \"https://images.unsplash.com/photo-1564260670111-18b14e5e0b3e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mjl8fGF1c3NlbmFsc3RlciUyMGhhbWJ1cmd8ZW58MHx8MHx8&auto=format&fit=crop&w=900&q=60\",\n        mapURL: \"https://www.google.com/maps/place/Alter+Elbtunnel/@53.5462383,9.9671376,14.77z/data=!4m5!3m4!1s0x47b18f0ce5bf9bb7:0xd767f0eceb94c0c9!8m2!3d53.5458861!4d9.9665878\",\n        description: \"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eligendi dolorem inventore, minima, blanditiis similique rem incidunt modi, quibusdam magni accusamus repellat officia necessitatibus minus dolorum ut dolore. Adipisci, sed incidunt, quo ea deserunt ipsam natus fugit, nemo quaerat culpa architecto!\"\n    },\n    {\n        id: \"4\",\n        name: \"Wasserschloss\",\n        location: \"Hamburg\",\n        image: \"https://images.unsplash.com/photo-1473615695634-d284ec918736?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2128&q=80\",\n        mapURL: \"https://www.google.com/maps/place/WASSERSCHLOSS+Speicherstadt/@53.5451385,9.999659,17.23z/data=!4m5!3m4!1s0x47b18efd3dda753b:0x790bf534ded6c4b9!8m2!3d53.5455515!4d10.0001168\",\n        description: \"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eligendi dolorem inventore, minima, blanditiis similique rem incidunt modi, quibusdam magni accusamus repellat officia necessitatibus minus dolorum ut dolore. Adipisci, sed incidunt, quo ea deserunt ipsam natus fugit, nemo quaerat culpa architecto!\"\n    }\n];\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9saWIvZGIuanMiLCJtYXBwaW5ncyI6Ijs7OztBQUFPLE1BQU1BLGdCQUFnQjtJQUMzQjtRQUNFQyxJQUFJO1FBQ0pDLE1BQU07UUFDTkMsVUFBVTtRQUNWQyxPQUNFO1FBQ0ZDLFFBQ0U7UUFDRkMsYUFDRTtJQUNKO0lBQ0E7UUFDRUwsSUFBSTtRQUNKQyxNQUFNO1FBQ05DLFVBQVU7UUFDVkMsT0FDRTtRQUNGQyxRQUNFO1FBQ0ZDLGFBQ0U7SUFDSjtJQUNBO1FBQ0VMLElBQUk7UUFDSkMsTUFBTTtRQUNOQyxVQUFVO1FBQ1ZDLE9BQ0U7UUFDRkMsUUFDRTtRQUNGQyxhQUNFO0lBQ0o7SUFDQTtRQUNFTCxJQUFJO1FBQ0pDLE1BQU07UUFDTkMsVUFBVTtRQUNWQyxPQUNFO1FBQ0ZDLFFBQ0U7UUFDRkMsYUFDRTtJQUNKO0lBQ0E7UUFDRUwsSUFBSTtRQUNKQyxNQUFNO1FBQ05DLFVBQVU7UUFDVkMsT0FDRTtRQUNGQyxRQUNFO1FBQ0ZDLGFBQ0U7SUFDSjtDQUNELENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vbGliL2RiLmpzPzNkYzkiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGNvbnN0IGluaXRpYWxQbGFjZXMgPSBbXG4gIHtcbiAgICBpZDogXCIwXCIsXG4gICAgbmFtZTogXCJFbGJwaGlsaGFybW9uaWVcIixcbiAgICBsb2NhdGlvbjogXCJIYW1idXJnXCIsXG4gICAgaW1hZ2U6XG4gICAgICBcImh0dHBzOi8vaW1hZ2VzLnVuc3BsYXNoLmNvbS9waG90by0xNTUzNTQ3Mjc0LTBkZjQwMWFlMDNjOT9peGxpYj1yYi00LjAuMyZpeGlkPU1ud3hNakEzZkRCOE1IeHpaV0Z5WTJoOE1UVjhmR0YxYzNObGJtRnNjM1JsY2lVeU1HaGhiV0oxY21kOFpXNThNSHg4TUh4OCZhdXRvPWZvcm1hdCZmaXQ9Y3JvcCZ3PTkwMCZxPTYwXCIsXG4gICAgbWFwVVJMOlxuICAgICAgXCJodHRwczovL3d3dy5nb29nbGUuY29tL21hcHMvcGxhY2UvRWxicGhpbGhhcm1vbmllK0hhbWJ1cmcvQDUzLjU0MzA4NSw5Ljk4NTk2MDgsMTUuNDd6L2RhdGE9ITRtNSEzbTQhMXMweDQ3YjE4ZjA2Njc3MGM0NGY6MHhiMmU0YWIyYTY4OTg0Mjg2IThtMiEzZDUzLjU0MTMyOTchNGQ5Ljk4NDEzMDhcIixcbiAgICBkZXNjcmlwdGlvbjpcbiAgICAgIFwiTG9yZW0gaXBzdW0sIGRvbG9yIHNpdCBhbWV0IGNvbnNlY3RldHVyIGFkaXBpc2ljaW5nIGVsaXQuIEVsaWdlbmRpIGRvbG9yZW0gaW52ZW50b3JlLCBtaW5pbWEsIGJsYW5kaXRpaXMgc2ltaWxpcXVlIHJlbSBpbmNpZHVudCBtb2RpLCBxdWlidXNkYW0gbWFnbmkgYWNjdXNhbXVzIHJlcGVsbGF0IG9mZmljaWEgbmVjZXNzaXRhdGlidXMgbWludXMgZG9sb3J1bSB1dCBkb2xvcmUuIEFkaXBpc2NpLCBzZWQgaW5jaWR1bnQsIHF1byBlYSBkZXNlcnVudCBpcHNhbSBuYXR1cyBmdWdpdCwgbmVtbyBxdWFlcmF0IGN1bHBhIGFyY2hpdGVjdG8hXCIsXG4gIH0sXG4gIHtcbiAgICBpZDogXCIxXCIsXG4gICAgbmFtZTogXCJSZWVwZXJiYWhuXCIsXG4gICAgbG9jYXRpb246IFwiSGFtYnVyZ1wiLFxuICAgIGltYWdlOlxuICAgICAgXCJodHRwczovL2ltYWdlcy51bnNwbGFzaC5jb20vcGhvdG8tMTU5OTgyNzU1MjU5OS1lYWRmNWZiM2M3NWY/aXhsaWI9cmItNC4wLjMmaXhpZD1Nbnd4TWpBM2ZEQjhNSHh6WldGeVkyaDhNVGg4ZkhKbFpYQmxjbUpoYUc0bE1qQm9ZVzFpZFhKbmZHVnVmREI4ZkRCOGZBJTNEJTNEJmF1dG89Zm9ybWF0JmZpdD1jcm9wJnc9OTAwJnE9NjBcIixcbiAgICBtYXBVUkw6XG4gICAgICBcImh0dHBzOi8vd3d3Lmdvb2dsZS5jb20vbWFwcy9wbGFjZS9SZWVwZXJiYWhuLCtIYW1idXJnL0A1My41NDkxNTIyLDkuOTYwNjU1NSwxNS45MXovZGF0YT0hNG01ITNtNCExczB4NDdiMThmNzIwNjUzZWQ1ZjoweGU4MTQzOGEzNDRkZjUxMjUhOG0yITNkNTMuNTQ5NTY5NSE0ZDkuOTYyNjE0OFwiLFxuICAgIGRlc2NyaXB0aW9uOlxuICAgICAgXCJMb3JlbSBpcHN1bSwgZG9sb3Igc2l0IGFtZXQgY29uc2VjdGV0dXIgYWRpcGlzaWNpbmcgZWxpdC4gRWxpZ2VuZGkgZG9sb3JlbSBpbnZlbnRvcmUsIG1pbmltYSwgYmxhbmRpdGlpcyBzaW1pbGlxdWUgcmVtIGluY2lkdW50IG1vZGksIHF1aWJ1c2RhbSBtYWduaSBhY2N1c2FtdXMgcmVwZWxsYXQgb2ZmaWNpYSBuZWNlc3NpdGF0aWJ1cyBtaW51cyBkb2xvcnVtIHV0IGRvbG9yZS4gQWRpcGlzY2ksIHNlZCBpbmNpZHVudCwgcXVvIGVhIGRlc2VydW50IGlwc2FtIG5hdHVzIGZ1Z2l0LCBuZW1vIHF1YWVyYXQgY3VscGEgYXJjaGl0ZWN0byFcIixcbiAgfSxcbiAge1xuICAgIGlkOiBcIjJcIixcbiAgICBuYW1lOiBcIkFsc3RlclwiLFxuICAgIGxvY2F0aW9uOiBcIkhhbWJ1cmdcIixcbiAgICBpbWFnZTpcbiAgICAgIFwiaHR0cHM6Ly9pbWFnZXMudW5zcGxhc2guY29tL3Bob3RvLTE2NjE5NDM1NTY0ODYtZDFmNTQ4OTNhOTRlP2l4bGliPXJiLTQuMC4zJml4aWQ9TW53eE1qQTNmREI4TUh4elpXRnlZMmg4TWpoOGZHRjFjM05sYm1Gc2MzUmxjaVV5TUdoaGJXSjFjbWQ4Wlc1OE1IeDhNSHg4JmF1dG89Zm9ybWF0JmZpdD1jcm9wJnc9OTAwJnE9NjBcIixcbiAgICBtYXBVUkw6XG4gICAgICBcImh0dHBzOi8vd3d3Lmdvb2dsZS5jb20vbWFwcy9wbGFjZS9BbHN0ZXJ1ZmVyL0A1My41NjYzNjM1LDkuOTk5NzEyLDE1LjI1ei9kYXRhPSE0bTUhM200ITFzMHg0N2IxOGYyNjVhMTE3YTZkOjB4OTgxNmNiNGZjODcxNWI2ZSE4bTIhM2Q1My41NjYxMTg2ITRkMTAuMDAwODY0XCIsXG4gICAgZGVzY3JpcHRpb246XG4gICAgICBcIkxvcmVtIGlwc3VtLCBkb2xvciBzaXQgYW1ldCBjb25zZWN0ZXR1ciBhZGlwaXNpY2luZyBlbGl0LiBFbGlnZW5kaSBkb2xvcmVtIGludmVudG9yZSwgbWluaW1hLCBibGFuZGl0aWlzIHNpbWlsaXF1ZSByZW0gaW5jaWR1bnQgbW9kaSwgcXVpYnVzZGFtIG1hZ25pIGFjY3VzYW11cyByZXBlbGxhdCBvZmZpY2lhIG5lY2Vzc2l0YXRpYnVzIG1pbnVzIGRvbG9ydW0gdXQgZG9sb3JlLiBBZGlwaXNjaSwgc2VkIGluY2lkdW50LCBxdW8gZWEgZGVzZXJ1bnQgaXBzYW0gbmF0dXMgZnVnaXQsIG5lbW8gcXVhZXJhdCBjdWxwYSBhcmNoaXRlY3RvIVwiLFxuICB9LFxuICB7XG4gICAgaWQ6IFwiM1wiLFxuICAgIG5hbWU6IFwiRWxidHVubmVsXCIsXG4gICAgbG9jYXRpb246IFwiSGFtYnVyZ1wiLFxuICAgIGltYWdlOlxuICAgICAgXCJodHRwczovL2ltYWdlcy51bnNwbGFzaC5jb20vcGhvdG8tMTU2NDI2MDY3MDExMS0xOGIxNGU1ZTBiM2U/aXhsaWI9cmItNC4wLjMmaXhpZD1Nbnd4TWpBM2ZEQjhNSHh6WldGeVkyaDhNamw4ZkdGMWMzTmxibUZzYzNSbGNpVXlNR2hoYldKMWNtZDhaVzU4TUh4OE1IeDgmYXV0bz1mb3JtYXQmZml0PWNyb3Amdz05MDAmcT02MFwiLFxuICAgIG1hcFVSTDpcbiAgICAgIFwiaHR0cHM6Ly93d3cuZ29vZ2xlLmNvbS9tYXBzL3BsYWNlL0FsdGVyK0VsYnR1bm5lbC9ANTMuNTQ2MjM4Myw5Ljk2NzEzNzYsMTQuNzd6L2RhdGE9ITRtNSEzbTQhMXMweDQ3YjE4ZjBjZTViZjliYjc6MHhkNzY3ZjBlY2ViOTRjMGM5IThtMiEzZDUzLjU0NTg4NjEhNGQ5Ljk2NjU4NzhcIixcbiAgICBkZXNjcmlwdGlvbjpcbiAgICAgIFwiTG9yZW0gaXBzdW0sIGRvbG9yIHNpdCBhbWV0IGNvbnNlY3RldHVyIGFkaXBpc2ljaW5nIGVsaXQuIEVsaWdlbmRpIGRvbG9yZW0gaW52ZW50b3JlLCBtaW5pbWEsIGJsYW5kaXRpaXMgc2ltaWxpcXVlIHJlbSBpbmNpZHVudCBtb2RpLCBxdWlidXNkYW0gbWFnbmkgYWNjdXNhbXVzIHJlcGVsbGF0IG9mZmljaWEgbmVjZXNzaXRhdGlidXMgbWludXMgZG9sb3J1bSB1dCBkb2xvcmUuIEFkaXBpc2NpLCBzZWQgaW5jaWR1bnQsIHF1byBlYSBkZXNlcnVudCBpcHNhbSBuYXR1cyBmdWdpdCwgbmVtbyBxdWFlcmF0IGN1bHBhIGFyY2hpdGVjdG8hXCIsXG4gIH0sXG4gIHtcbiAgICBpZDogXCI0XCIsXG4gICAgbmFtZTogXCJXYXNzZXJzY2hsb3NzXCIsXG4gICAgbG9jYXRpb246IFwiSGFtYnVyZ1wiLFxuICAgIGltYWdlOlxuICAgICAgXCJodHRwczovL2ltYWdlcy51bnNwbGFzaC5jb20vcGhvdG8tMTQ3MzYxNTY5NTYzNC1kMjg0ZWM5MTg3MzY/aXhsaWI9cmItNC4wLjMmaXhpZD1Nbnd4TWpBM2ZEQjhNSHh3YUc5MGJ5MXdZV2RsZkh4OGZHVnVmREI4Zkh4OCZhdXRvPWZvcm1hdCZmaXQ9Y3JvcCZ3PTIxMjgmcT04MFwiLFxuICAgIG1hcFVSTDpcbiAgICAgIFwiaHR0cHM6Ly93d3cuZ29vZ2xlLmNvbS9tYXBzL3BsYWNlL1dBU1NFUlNDSExPU1MrU3BlaWNoZXJzdGFkdC9ANTMuNTQ1MTM4NSw5Ljk5OTY1OSwxNy4yM3ovZGF0YT0hNG01ITNtNCExczB4NDdiMThlZmQzZGRhNzUzYjoweDc5MGJmNTM0ZGVkNmM0YjkhOG0yITNkNTMuNTQ1NTUxNSE0ZDEwLjAwMDExNjhcIixcbiAgICBkZXNjcmlwdGlvbjpcbiAgICAgIFwiTG9yZW0gaXBzdW0sIGRvbG9yIHNpdCBhbWV0IGNvbnNlY3RldHVyIGFkaXBpc2ljaW5nIGVsaXQuIEVsaWdlbmRpIGRvbG9yZW0gaW52ZW50b3JlLCBtaW5pbWEsIGJsYW5kaXRpaXMgc2ltaWxpcXVlIHJlbSBpbmNpZHVudCBtb2RpLCBxdWlidXNkYW0gbWFnbmkgYWNjdXNhbXVzIHJlcGVsbGF0IG9mZmljaWEgbmVjZXNzaXRhdGlidXMgbWludXMgZG9sb3J1bSB1dCBkb2xvcmUuIEFkaXBpc2NpLCBzZWQgaW5jaWR1bnQsIHF1byBlYSBkZXNlcnVudCBpcHNhbSBuYXR1cyBmdWdpdCwgbmVtbyBxdWFlcmF0IGN1bHBhIGFyY2hpdGVjdG8hXCIsXG4gIH0sXG5dO1xuIl0sIm5hbWVzIjpbImluaXRpYWxQbGFjZXMiLCJpZCIsIm5hbWUiLCJsb2NhdGlvbiIsImltYWdlIiwibWFwVVJMIiwiZGVzY3JpcHRpb24iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./lib/db.js\n"));

/***/ }),

/***/ "./pages/_app.js":
/*!***********************!*\
  !*** ./pages/_app.js ***!
  \***********************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ App; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../styles */ \"./styles.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _lib_db__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/lib/db */ \"./lib/db.js\");\n\nvar _s = $RefreshSig$();\n\n\n\nfunction App(param) {\n    let { Component, pageProps } = param;\n    _s();\n    const [places, setPlaces] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(_lib_db__WEBPACK_IMPORTED_MODULE_3__.initialPlaces);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_styles__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {}, void 0, false, {\n                fileName: \"C:\\\\Users\\\\KriKra\\\\neuefische\\\\projects\\\\crud-recap\\\\pages\\\\_app.js\",\n                lineNumber: 9,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, {\n                ...pageProps\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\KriKra\\\\neuefische\\\\projects\\\\crud-recap\\\\pages\\\\_app.js\",\n                lineNumber: 10,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true);\n}\n_s(App, \"fYIZMl0lQBB39bPqpFQWEJ9LokQ=\");\n_c = App;\nvar _c;\n$RefreshReg$(_c, \"App\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9fYXBwLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUFvQztBQUNIO0FBQ1E7QUFFMUIsU0FBU0csSUFBSSxLQUF3QjtRQUF4QixFQUFFQyxTQUFTLEVBQUVDLFNBQVMsRUFBRSxHQUF4Qjs7SUFDMUIsTUFBTSxDQUFDQyxRQUFRQyxVQUFVLEdBQUdOLCtDQUFRQSxDQUFDQyxrREFBYUE7SUFDbEQscUJBQ0U7OzBCQUNFLDhEQUFDRiwrQ0FBV0E7Ozs7OzBCQUNaLDhEQUFDSTtnQkFBVyxHQUFHQyxTQUFTOzs7Ozs7OztBQUc5QjtHQVJ3QkY7S0FBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvX2FwcC5qcz9lMGFkIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBHbG9iYWxTdHlsZSBmcm9tIFwiLi4vc3R5bGVzXCI7XG5pbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgaW5pdGlhbFBsYWNlcyB9IGZyb20gXCJAL2xpYi9kYlwiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBBcHAoeyBDb21wb25lbnQsIHBhZ2VQcm9wcyB9KSB7XG4gIGNvbnN0IFtwbGFjZXMsIHNldFBsYWNlc10gPSB1c2VTdGF0ZShpbml0aWFsUGxhY2VzKTtcbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAgPEdsb2JhbFN0eWxlIC8+XG4gICAgICA8Q29tcG9uZW50IHsuLi5wYWdlUHJvcHN9IC8+XG4gICAgPC8+XG4gICk7XG59XG4iXSwibmFtZXMiOlsiR2xvYmFsU3R5bGUiLCJ1c2VTdGF0ZSIsImluaXRpYWxQbGFjZXMiLCJBcHAiLCJDb21wb25lbnQiLCJwYWdlUHJvcHMiLCJwbGFjZXMiLCJzZXRQbGFjZXMiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/_app.js\n"));

/***/ })

});