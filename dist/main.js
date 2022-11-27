/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _load_home_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./load-home-page */ \"./src/load-home-page.js\");\n/* harmony import */ var _load_menu_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./load-menu-page */ \"./src/load-menu-page.js\");\n/* harmony import */ var _load_contact_page__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./load-contact-page */ \"./src/load-contact-page.js\");\n/* harmony import */ var _load_navbar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./load-navbar */ \"./src/load-navbar.js\");\n\n\n\n\n\n(0,_load_navbar__WEBPACK_IMPORTED_MODULE_3__.loadNavbar)();\n(0,_load_home_page__WEBPACK_IMPORTED_MODULE_0__.loadHomePage)();\naddListeners();\n\nfunction addListeners() {\n    const content = document.getElementById(`content`);\n    const homeBtn = document.getElementById(`homeBtn`);\n    const menuBtn = document.getElementById(`menuBtn`);\n    const contactBtn = document.getElementById(`contactBtn`);\n\n    homeBtn.addEventListener(`click`, () => {\n        content.textContent = null;\n        (0,_load_navbar__WEBPACK_IMPORTED_MODULE_3__.loadNavbar)();\n        (0,_load_home_page__WEBPACK_IMPORTED_MODULE_0__.loadHomePage)();\n        addListeners();\n    });\n\n    menuBtn.addEventListener(`click`, () => {\n        content.textContent = null;\n        (0,_load_navbar__WEBPACK_IMPORTED_MODULE_3__.loadNavbar)();\n        (0,_load_menu_page__WEBPACK_IMPORTED_MODULE_1__.loadMenuPage)();\n        addListeners();\n    });\n\n    contactBtn.addEventListener(`click`, () => {\n        content.textContent = null;\n        (0,_load_navbar__WEBPACK_IMPORTED_MODULE_3__.loadNavbar)();\n        (0,_load_contact_page__WEBPACK_IMPORTED_MODULE_2__.loadContactPage)();\n        addListeners();\n    });\n};\n\n//# sourceURL=webpack://restaurant-page/./src/index.js?");

/***/ }),

/***/ "./src/load-contact-page.js":
/*!**********************************!*\
  !*** ./src/load-contact-page.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"loadContactPage\": () => (/* binding */ loadContactPage)\n/* harmony export */ });\nfunction loadContactPage() {\n    const content = document.getElementById(`content`);\n    \n    const hi = document.createElement(`h1`);\n    hi.textContent = `Welcome to catworld`;\n    content.appendChild(hi);\n};\n\n\n\n//# sourceURL=webpack://restaurant-page/./src/load-contact-page.js?");

/***/ }),

/***/ "./src/load-home-page.js":
/*!*******************************!*\
  !*** ./src/load-home-page.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"loadHomePage\": () => (/* binding */ loadHomePage)\n/* harmony export */ });\nfunction loadHomePage() {\n    const content = document.getElementById(`content`);\n\n    // Create banner\n    const banner = document.createElement(`div`);\n    banner.classList.add(`banner`);\n\n    const homeTitle = document.createElement(`h1`);\n    homeTitle.textContent = `Cat's Restaurant for Cats`;\n    banner.appendChild(homeTitle);\n\n    const descP = document.createElement(`p`);\n    descP.textContent = `Welcome to Cat's Restaurant for Cats, we work to serve everything a cat's heart could desire. Pellentesque mollis sem et erat rutrum fringilla. Nam eu convallis felis. Sed aliquam interdum rutrum. Ut congue, eros eget egestas auctor, nisl arcu euismod dolor, nec dignissim mauris nisl sit amet libero.`;\n    banner.appendChild(descP);\n    content.appendChild(banner);\n\n    // Create hours section\n    const hoursSection = document.createElement(`div`);\n    hoursSection.classList.add(`hours`);\n\n    const hoursH2 = document.createElement(`h2`);\n    hoursH2.textContent = `Hours`;\n    hoursSection.appendChild(hoursH2);\n\n    const hoursP = document.createElement(`p`);\n    hoursP.textContent = `We're open everynight from 8pm to 8am. Only night owls allowed.`;\n    hoursSection.appendChild(hoursP);\n\n    content.appendChild(hoursSection);\n\n    // Create location section\n    const locationSection = document.createElement(`div`);\n    locationSection.classList.add(`location`);\n\n    const locationH2 = document.createElement(`h2`);\n    locationH2.textContent = `Location`;\n    locationSection.appendChild(locationH2);\n\n    const locationP = document.createElement(`p`);\n    locationP.textContent = `I could tell you, but then I'd have to kill you.`;\n    locationSection.appendChild(locationP);\n\n    content.appendChild(locationSection);\n};\n\n\n\n//# sourceURL=webpack://restaurant-page/./src/load-home-page.js?");

/***/ }),

/***/ "./src/load-menu-page.js":
/*!*******************************!*\
  !*** ./src/load-menu-page.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"loadMenuPage\": () => (/* binding */ loadMenuPage)\n/* harmony export */ });\nfunction loadMenuPage() {\n    const content = document.getElementById(`content`);\n    \n    const hi = document.createElement(`h1`);\n    hi.textContent = `Hello, world`;\n    content.appendChild(hi);\n};\n\n\n\n//# sourceURL=webpack://restaurant-page/./src/load-menu-page.js?");

/***/ }),

/***/ "./src/load-navbar.js":
/*!****************************!*\
  !*** ./src/load-navbar.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"loadNavbar\": () => (/* binding */ loadNavbar)\n/* harmony export */ });\nfunction loadNavbar() {\n    const content = document.getElementById(`content`);\n\n    // Create navbar\n    const navbar = document.createElement(`div`);\n    navbar.classList.add(`navbar`);\n\n    const homeBtn = document.createElement(`button`);\n    homeBtn.setAttribute(`id`, `homeBtn`);\n    homeBtn.classList.add(`navBtn`);\n    homeBtn.textContent = `Home`;\n    navbar.appendChild(homeBtn);\n    \n\n    const menuBtn = document.createElement(`button`);\n    menuBtn.setAttribute(`id`, `menuBtn`);\n    menuBtn.classList.add(`navBtn`);\n    menuBtn.textContent = `Menu`;\n    navbar.appendChild(menuBtn);\n\n    const contactBtn = document.createElement(`button`);\n    contactBtn.setAttribute(`id`, `contactBtn`);\n    contactBtn.classList.add(`navBtn`);\n    contactBtn.textContent = `Contact`;\n    navbar.appendChild(contactBtn);\n\n    content.appendChild(navbar);\n};\n\n\n\n//# sourceURL=webpack://restaurant-page/./src/load-navbar.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;