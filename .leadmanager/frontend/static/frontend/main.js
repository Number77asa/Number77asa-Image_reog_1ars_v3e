/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./leadmanager/frontend/src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./leadmanager/frontend/src/components/App.js":
/*!****************************************************!*\
  !*** ./leadmanager/frontend/src/components/App.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("throw new Error(\"Module build failed (from ./node_modules/babel-loader/lib/index.js):\\nSyntaxError: /home/adduser/imagereog1ars-app3/leadmanager/frontend/src/components/App.js: Unexpected token (19:16)\\n\\n\\u001b[0m \\u001b[90m 17 | \\u001b[39m        \\u001b[36mreturn\\u001b[39m (\\u001b[0m\\n\\u001b[0m \\u001b[90m 18 | \\u001b[39m           \\u001b[0m\\n\\u001b[0m\\u001b[31m\\u001b[1m>\\u001b[22m\\u001b[39m\\u001b[90m 19 | \\u001b[39m                \\u001b[33m<\\u001b[39m\\u001b[33mFragment\\u001b[39m\\u001b[33m>\\u001b[39m\\u001b[0m\\n\\u001b[0m \\u001b[90m    | \\u001b[39m                \\u001b[31m\\u001b[1m^\\u001b[22m\\u001b[39m\\u001b[0m\\n\\u001b[0m \\u001b[90m 20 | \\u001b[39m                    \\u001b[33m<\\u001b[39m\\u001b[33mHeader\\u001b[39m \\u001b[33m/\\u001b[39m\\u001b[33m>\\u001b[39m\\u001b[0m\\n\\u001b[0m \\u001b[90m 21 | \\u001b[39m                    \\u001b[33m<\\u001b[39m\\u001b[33mdiv\\u001b[39m className\\u001b[33m=\\u001b[39m\\u001b[32m\\\"container\\\"\\u001b[39m\\u001b[33m>\\u001b[39m\\u001b[0m\\n\\u001b[0m \\u001b[90m 22 | \\u001b[39m                        \\u001b[33m<\\u001b[39m\\u001b[33mDashboard\\u001b[39m \\u001b[33m/\\u001b[39m\\u001b[33m>\\u001b[39m\\u001b[0m\\n    at Parser.raise (/home/adduser/imagereog1ars-app3/node_modules/@babel/core/node_modules/@babel/parser/lib/index.js:7013:17)\\n    at Parser.unexpected (/home/adduser/imagereog1ars-app3/node_modules/@babel/core/node_modules/@babel/parser/lib/index.js:8384:16)\\n    at Parser.parseExprAtom (/home/adduser/imagereog1ars-app3/node_modules/@babel/core/node_modules/@babel/parser/lib/index.js:9639:20)\\n    at Parser.parseExprSubscripts (/home/adduser/imagereog1ars-app3/node_modules/@babel/core/node_modules/@babel/parser/lib/index.js:9219:23)\\n    at Parser.parseMaybeUnary (/home/adduser/imagereog1ars-app3/node_modules/@babel/core/node_modules/@babel/parser/lib/index.js:9199:21)\\n    at Parser.parseExprOps (/home/adduser/imagereog1ars-app3/node_modules/@babel/core/node_modules/@babel/parser/lib/index.js:9067:23)\\n    at Parser.parseMaybeConditional (/home/adduser/imagereog1ars-app3/node_modules/@babel/core/node_modules/@babel/parser/lib/index.js:9040:23)\\n    at Parser.parseMaybeAssign (/home/adduser/imagereog1ars-app3/node_modules/@babel/core/node_modules/@babel/parser/lib/index.js:9000:21)\\n    at Parser.parseParenAndDistinguishExpression (/home/adduser/imagereog1ars-app3/node_modules/@babel/core/node_modules/@babel/parser/lib/index.js:9782:28)\\n    at Parser.parseExprAtom (/home/adduser/imagereog1ars-app3/node_modules/@babel/core/node_modules/@babel/parser/lib/index.js:9560:21)\\n    at Parser.parseExprSubscripts (/home/adduser/imagereog1ars-app3/node_modules/@babel/core/node_modules/@babel/parser/lib/index.js:9219:23)\\n    at Parser.parseMaybeUnary (/home/adduser/imagereog1ars-app3/node_modules/@babel/core/node_modules/@babel/parser/lib/index.js:9199:21)\\n    at Parser.parseExprOps (/home/adduser/imagereog1ars-app3/node_modules/@babel/core/node_modules/@babel/parser/lib/index.js:9067:23)\\n    at Parser.parseMaybeConditional (/home/adduser/imagereog1ars-app3/node_modules/@babel/core/node_modules/@babel/parser/lib/index.js:9040:23)\\n    at Parser.parseMaybeAssign (/home/adduser/imagereog1ars-app3/node_modules/@babel/core/node_modules/@babel/parser/lib/index.js:9000:21)\\n    at Parser.parseExpression (/home/adduser/imagereog1ars-app3/node_modules/@babel/core/node_modules/@babel/parser/lib/index.js:8950:23)\\n    at Parser.parseReturnStatement (/home/adduser/imagereog1ars-app3/node_modules/@babel/core/node_modules/@babel/parser/lib/index.js:11027:28)\\n    at Parser.parseStatementContent (/home/adduser/imagereog1ars-app3/node_modules/@babel/core/node_modules/@babel/parser/lib/index.js:10706:21)\\n    at Parser.parseStatement (/home/adduser/imagereog1ars-app3/node_modules/@babel/core/node_modules/@babel/parser/lib/index.js:10658:17)\\n    at Parser.parseBlockOrModuleBlockBody (/home/adduser/imagereog1ars-app3/node_modules/@babel/core/node_modules/@babel/parser/lib/index.js:11234:25)\\n    at Parser.parseBlockBody (/home/adduser/imagereog1ars-app3/node_modules/@babel/core/node_modules/@babel/parser/lib/index.js:11221:10)\\n    at Parser.parseBlock (/home/adduser/imagereog1ars-app3/node_modules/@babel/core/node_modules/@babel/parser/lib/index.js:11205:10)\\n    at Parser.parseFunctionBody (/home/adduser/imagereog1ars-app3/node_modules/@babel/core/node_modules/@babel/parser/lib/index.js:10220:24)\\n    at Parser.parseFunctionBodyAndFinish (/home/adduser/imagereog1ars-app3/node_modules/@babel/core/node_modules/@babel/parser/lib/index.js:10190:10)\\n    at Parser.parseMethod (/home/adduser/imagereog1ars-app3/node_modules/@babel/core/node_modules/@babel/parser/lib/index.js:10160:10)\\n    at Parser.pushClassMethod (/home/adduser/imagereog1ars-app3/node_modules/@babel/core/node_modules/@babel/parser/lib/index.js:11638:30)\\n    at Parser.parseClassMemberWithIsStatic (/home/adduser/imagereog1ars-app3/node_modules/@babel/core/node_modules/@babel/parser/lib/index.js:11555:12)\\n    at Parser.parseClassMember (/home/adduser/imagereog1ars-app3/node_modules/@babel/core/node_modules/@babel/parser/lib/index.js:11497:10)\\n    at withTopicForbiddingContext (/home/adduser/imagereog1ars-app3/node_modules/@babel/core/node_modules/@babel/parser/lib/index.js:11452:14)\\n    at Parser.withTopicForbiddingContext (/home/adduser/imagereog1ars-app3/node_modules/@babel/core/node_modules/@babel/parser/lib/index.js:10533:14)\");\n\n//# sourceURL=webpack:///./leadmanager/frontend/src/components/App.js?");

/***/ }),

/***/ "./leadmanager/frontend/src/index.js":
/*!*******************************************!*\
  !*** ./leadmanager/frontend/src/index.js ***!
  \*******************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _components_App__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/App */ \"./leadmanager/frontend/src/components/App.js\");\n/* harmony import */ var _components_App__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_components_App__WEBPACK_IMPORTED_MODULE_0__);\n\n/*were just loading components in*/\n\n//# sourceURL=webpack:///./leadmanager/frontend/src/index.js?");

/***/ })

/******/ });