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

/***/ "./components/Sidebar.jsx":
/*!********************************!*\
  !*** ./components/Sidebar.jsx ***!
  \********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react_icons_rx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-icons/rx */ \"./node_modules/react-icons/rx/index.esm.js\");\n/* harmony import */ var react_icons_tfi__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-icons/tfi */ \"./node_modules/react-icons/tfi/index.esm.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);\n\nvar _s = $RefreshSig$();\n\n\n\n\n\nconst Sidebar = (param)=>{\n    let { children  } = param;\n    _s();\n    const { pathname  } = (0,next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter)();\n    const hideSidebar = pathname === \"/preview/[id]\";\n    console.log(\"hideSidebar:\", hideSidebar);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"flex\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"fixed w-20 h-screen p-4 bg-white border-r-[1px] flex flex-col justify-between \".concat(hideSidebar ? \"hidden\" : \"\"),\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"flex flex-col items-center\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {\n                            href: \"/\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"bg-purple-800 text-white p-3 rounded-lg inline-block\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_icons_rx__WEBPACK_IMPORTED_MODULE_4__.RxSketchLogo, {\n                                    size: 20\n                                }, void 0, false, {\n                                    fileName: \"E:\\\\NextJs-App\\\\Front-End\\\\components\\\\Sidebar.jsx\",\n                                    lineNumber: 18,\n                                    columnNumber: 15\n                                }, undefined)\n                            }, void 0, false, {\n                                fileName: \"E:\\\\NextJs-App\\\\Front-End\\\\components\\\\Sidebar.jsx\",\n                                lineNumber: 17,\n                                columnNumber: 13\n                            }, undefined)\n                        }, void 0, false, {\n                            fileName: \"E:\\\\NextJs-App\\\\Front-End\\\\components\\\\Sidebar.jsx\",\n                            lineNumber: 16,\n                            columnNumber: 11\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                            className: \"border-b-[1px] border-gray-200 w-full p-2\"\n                        }, void 0, false, {\n                            fileName: \"E:\\\\NextJs-App\\\\Front-End\\\\components\\\\Sidebar.jsx\",\n                            lineNumber: 21,\n                            columnNumber: 11\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {\n                            href: \"/\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"bg-gray-100 hover:bg-gray-200 cursor-pointer my-4 p-3 rounded-lg inline-block\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_icons_rx__WEBPACK_IMPORTED_MODULE_4__.RxDashboard, {\n                                    size: 20\n                                }, void 0, false, {\n                                    fileName: \"E:\\\\NextJs-App\\\\Front-End\\\\components\\\\Sidebar.jsx\",\n                                    lineNumber: 24,\n                                    columnNumber: 15\n                                }, undefined)\n                            }, void 0, false, {\n                                fileName: \"E:\\\\NextJs-App\\\\Front-End\\\\components\\\\Sidebar.jsx\",\n                                lineNumber: 23,\n                                columnNumber: 13\n                            }, undefined)\n                        }, void 0, false, {\n                            fileName: \"E:\\\\NextJs-App\\\\Front-End\\\\components\\\\Sidebar.jsx\",\n                            lineNumber: 22,\n                            columnNumber: 11\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {\n                            href: \"/orders\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"bg-gray-100 hover:bg-gray-200 cursor-pointer my-4 p-3 rounded-lg inline-block\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_icons_tfi__WEBPACK_IMPORTED_MODULE_5__.TfiPencilAlt, {\n                                    size: 20\n                                }, void 0, false, {\n                                    fileName: \"E:\\\\NextJs-App\\\\Front-End\\\\components\\\\Sidebar.jsx\",\n                                    lineNumber: 34,\n                                    columnNumber: 15\n                                }, undefined)\n                            }, void 0, false, {\n                                fileName: \"E:\\\\NextJs-App\\\\Front-End\\\\components\\\\Sidebar.jsx\",\n                                lineNumber: 33,\n                                columnNumber: 13\n                            }, undefined)\n                        }, void 0, false, {\n                            fileName: \"E:\\\\NextJs-App\\\\Front-End\\\\components\\\\Sidebar.jsx\",\n                            lineNumber: 32,\n                            columnNumber: 11\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"E:\\\\NextJs-App\\\\Front-End\\\\components\\\\Sidebar.jsx\",\n                    lineNumber: 15,\n                    columnNumber: 9\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"E:\\\\NextJs-App\\\\Front-End\\\\components\\\\Sidebar.jsx\",\n                lineNumber: 14,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {\n                className: \"ml-20 w-full \".concat(hideSidebar ? \"w-full\" : \"ml-20\"),\n                children: children\n            }, void 0, false, {\n                fileName: \"E:\\\\NextJs-App\\\\Front-End\\\\components\\\\Sidebar.jsx\",\n                lineNumber: 44,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"E:\\\\NextJs-App\\\\Front-End\\\\components\\\\Sidebar.jsx\",\n        lineNumber: 13,\n        columnNumber: 5\n    }, undefined);\n};\n_s(Sidebar, \"QpP2vYJstxsDz0K+Qwttl8PPVoY=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter\n    ];\n});\n_c = Sidebar;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Sidebar);\nvar _c;\n$RefreshReg$(_c, \"Sidebar\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL1NpZGViYXIuanN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFBMEI7QUFDRztBQUN3QztBQUN2QjtBQUNOO0FBRXhDLE1BQU1PLFVBQVUsU0FBa0I7UUFBakIsRUFBRUMsU0FBUSxFQUFFOztJQUMzQixNQUFNLEVBQUVDLFNBQVEsRUFBRSxHQUFHSCxzREFBU0E7SUFDOUIsTUFBTUksY0FBY0QsYUFBYTtJQUNqQ0UsUUFBUUMsR0FBRyxDQUFDLGdCQUFnQkY7SUFFNUIscUJBQ0UsOERBQUNHO1FBQUlDLFdBQVU7OzBCQUNiLDhEQUFDRDtnQkFBSUMsV0FBVyxpRkFBNkcsT0FBNUJKLGNBQWMsV0FBVyxFQUFFOzBCQUMxSCw0RUFBQ0c7b0JBQUlDLFdBQVU7O3NDQUNiLDhEQUFDYixrREFBSUE7NEJBQUNjLE1BQUs7c0NBQ1QsNEVBQUNGO2dDQUFJQyxXQUFVOzBDQUNiLDRFQUFDWix3REFBWUE7b0NBQUNjLE1BQU07Ozs7Ozs7Ozs7Ozs7Ozs7c0NBR3hCLDhEQUFDQzs0QkFBS0gsV0FBVTs7Ozs7O3NDQUNoQiw4REFBQ2Isa0RBQUlBOzRCQUFDYyxNQUFLO3NDQUNULDRFQUFDRjtnQ0FBSUMsV0FBVTswQ0FDYiw0RUFBQ1gsdURBQVdBO29DQUFDYSxNQUFNOzs7Ozs7Ozs7Ozs7Ozs7O3NDQVF2Qiw4REFBQ2Ysa0RBQUlBOzRCQUFDYyxNQUFLO3NDQUNULDRFQUFDRjtnQ0FBSUMsV0FBVTswQ0FDYiw0RUFBQ1QseURBQVlBO29DQUFDVyxNQUFNOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7MEJBVTVCLDhEQUFDRTtnQkFBS0osV0FBVyxnQkFBaUQsT0FBakNKLGNBQWMsV0FBVyxPQUFPOzBCQUFLRjs7Ozs7Ozs7Ozs7O0FBRzVFO0dBeENNRDs7UUFDaUJELGtEQUFTQTs7O0tBRDFCQztBQTBDTiwrREFBZUEsT0FBT0EsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL1NpZGViYXIuanN4PzRjYjQiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJztcclxuaW1wb3J0IHsgUnhTa2V0Y2hMb2dvLCBSeERhc2hib2FyZCwgUnhQZXJzb24gfSBmcm9tICdyZWFjdC1pY29ucy9yeCc7XHJcbmltcG9ydCB7IFRmaVBlbmNpbEFsdCB9IGZyb20gJ3JlYWN0LWljb25zL3RmaSdcclxuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSBcIm5leHQvcm91dGVyXCI7XHJcblxyXG5jb25zdCBTaWRlYmFyID0gKHsgY2hpbGRyZW4gfSkgPT4ge1xyXG4gIGNvbnN0IHsgcGF0aG5hbWUgfSA9IHVzZVJvdXRlcigpO1xyXG4gIGNvbnN0IGhpZGVTaWRlYmFyID0gcGF0aG5hbWUgPT09IFwiL3ByZXZpZXcvW2lkXVwiO1xyXG4gIGNvbnNvbGUubG9nKCdoaWRlU2lkZWJhcjonLCBoaWRlU2lkZWJhcik7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT0nZmxleCc+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtgZml4ZWQgdy0yMCBoLXNjcmVlbiBwLTQgYmctd2hpdGUgYm9yZGVyLXItWzFweF0gZmxleCBmbGV4LWNvbCBqdXN0aWZ5LWJldHdlZW4gJHtoaWRlU2lkZWJhciA/ICdoaWRkZW4nIDogJyd9YH0+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9J2ZsZXggZmxleC1jb2wgaXRlbXMtY2VudGVyJz5cclxuICAgICAgICAgIDxMaW5rIGhyZWY9Jy8nPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nYmctcHVycGxlLTgwMCB0ZXh0LXdoaXRlIHAtMyByb3VuZGVkLWxnIGlubGluZS1ibG9jayc+XHJcbiAgICAgICAgICAgICAgPFJ4U2tldGNoTG9nbyBzaXplPXsyMH0gLz5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9J2JvcmRlci1iLVsxcHhdIGJvcmRlci1ncmF5LTIwMCB3LWZ1bGwgcC0yJz48L3NwYW4+XHJcbiAgICAgICAgICA8TGluayBocmVmPScvJz5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2JnLWdyYXktMTAwIGhvdmVyOmJnLWdyYXktMjAwIGN1cnNvci1wb2ludGVyIG15LTQgcC0zIHJvdW5kZWQtbGcgaW5saW5lLWJsb2NrJz5cclxuICAgICAgICAgICAgICA8UnhEYXNoYm9hcmQgc2l6ZT17MjB9IC8+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgey8qIDxMaW5rIGhyZWY9Jy9jdXN0b21lcnMnPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nYmctZ3JheS0xMDAgaG92ZXI6YmctZ3JheS0yMDAgY3Vyc29yLXBvaW50ZXIgbXktNCBwLTMgcm91bmRlZC1sZyBpbmxpbmUtYmxvY2snPlxyXG4gICAgICAgICAgICAgIDxSeFBlcnNvbiBzaXplPXsyMH0gLz5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L0xpbms+ICovfVxyXG4gICAgICAgICAgPExpbmsgaHJlZj0nL29yZGVycyc+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdiZy1ncmF5LTEwMCBob3ZlcjpiZy1ncmF5LTIwMCBjdXJzb3ItcG9pbnRlciBteS00IHAtMyByb3VuZGVkLWxnIGlubGluZS1ibG9jayc+XHJcbiAgICAgICAgICAgICAgPFRmaVBlbmNpbEFsdCBzaXplPXsyMH0gLz5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICB7LyogPExpbmsgaHJlZj0nLyc+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdiZy1ncmF5LTEwMCBob3ZlcjpiZy1ncmF5LTIwMCBjdXJzb3ItcG9pbnRlciBteS00IHAtMyByb3VuZGVkLWxnIGlubGluZS1ibG9jayc+XHJcbiAgICAgICAgICAgICAgPEZpU2V0dGluZ3Mgc2l6ZT17MjB9IC8+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9MaW5rPiAqL31cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxtYWluIGNsYXNzTmFtZT17YG1sLTIwIHctZnVsbCAke2hpZGVTaWRlYmFyID8gJ3ctZnVsbCcgOiAnbWwtMjAnfWB9PntjaGlsZHJlbn08L21haW4+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgU2lkZWJhcjtcclxuIl0sIm5hbWVzIjpbIlJlYWN0IiwiTGluayIsIlJ4U2tldGNoTG9nbyIsIlJ4RGFzaGJvYXJkIiwiUnhQZXJzb24iLCJUZmlQZW5jaWxBbHQiLCJ1c2VSb3V0ZXIiLCJTaWRlYmFyIiwiY2hpbGRyZW4iLCJwYXRobmFtZSIsImhpZGVTaWRlYmFyIiwiY29uc29sZSIsImxvZyIsImRpdiIsImNsYXNzTmFtZSIsImhyZWYiLCJzaXplIiwic3BhbiIsIm1haW4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/Sidebar.jsx\n"));

/***/ })

});