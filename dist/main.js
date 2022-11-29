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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _load_home_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./load-home-page */ \"./src/load-home-page.js\");\n/* harmony import */ var _load_menu_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./load-menu-page */ \"./src/load-menu-page.js\");\n/* harmony import */ var _load_contact_page__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./load-contact-page */ \"./src/load-contact-page.js\");\n/* harmony import */ var _load_navbar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./load-navbar */ \"./src/load-navbar.js\");\n/* harmony import */ var _load_footer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./load-footer */ \"./src/load-footer.js\");\n\n\n\n\n\n\n(0,_load_navbar__WEBPACK_IMPORTED_MODULE_3__.loadNavbar)();\n(0,_load_home_page__WEBPACK_IMPORTED_MODULE_0__.loadHomePage)();\n(0,_load_footer__WEBPACK_IMPORTED_MODULE_4__.loadFooter)();\naddListeners();\n\nfunction addListeners() {\n    const content = document.getElementById(`content`);\n    const homeBtn = document.getElementById(`homeBtn`);\n    const menuBtn = document.getElementById(`menuBtn`);\n    const contactBtn = document.getElementById(`contactBtn`);\n\n    homeBtn.addEventListener(`click`, () => {\n        content.textContent = null;\n        (0,_load_navbar__WEBPACK_IMPORTED_MODULE_3__.loadNavbar)();\n        (0,_load_home_page__WEBPACK_IMPORTED_MODULE_0__.loadHomePage)();\n        (0,_load_footer__WEBPACK_IMPORTED_MODULE_4__.loadFooter)();\n        addListeners();\n    });\n\n    menuBtn.addEventListener(`click`, () => {\n        content.textContent = null;\n        (0,_load_navbar__WEBPACK_IMPORTED_MODULE_3__.loadNavbar)();\n        (0,_load_menu_page__WEBPACK_IMPORTED_MODULE_1__.loadMenuPage)();\n        (0,_load_footer__WEBPACK_IMPORTED_MODULE_4__.loadFooter)();\n        addListeners();\n    });\n\n    contactBtn.addEventListener(`click`, () => {\n        content.textContent = null;\n        (0,_load_navbar__WEBPACK_IMPORTED_MODULE_3__.loadNavbar)();\n        (0,_load_contact_page__WEBPACK_IMPORTED_MODULE_2__.loadContactPage)();\n        (0,_load_footer__WEBPACK_IMPORTED_MODULE_4__.loadFooter)();\n        addListeners();\n    });\n};\n\n//# sourceURL=webpack://restaurant-page/./src/index.js?");

/***/ }),

/***/ "./src/load-contact-page.js":
/*!**********************************!*\
  !*** ./src/load-contact-page.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"loadContactPage\": () => (/* binding */ loadContactPage)\n/* harmony export */ });\nfunction loadContactPage() {\n    const content = document.getElementById(`content`);\n    \n    const titleContainer = document.createElement(`div`);\n    titleContainer.classList.add(`titleContainer`);\n    const contactTitle = document.createElement(`h1`);\n    contactTitle.textContent = `Contact Us`;\n    titleContainer.appendChild(contactTitle);\n    content.appendChild(titleContainer);\n\n    const cardContainer = document.createElement(`div`);\n    cardContainer.classList.add(`cardContainer`);\n    content.appendChild(cardContainer)\n\n    const card1 = document.createElement(`div`);\n    card1.classList.add(`contactCard`);\n    \n    const card1h2 = document.createElement(`h2`);\n    card1h2.textContent = `Delivery`;\n    card1.appendChild(card1h2);\n\n    const card1desc = document.createElement(`p`);\n    card1desc.classList.add(`cardDesc`);\n    card1desc.textContent = `You can call or text us to request the menu of the day and place your order.`;\n    card1.appendChild(card1desc);\n\n    const card1tel = document.createElement(`p`);\n    card1tel.classList.add(`cardTel`);\n    card1tel.textContent = `+55 (61) 99999 9969`;\n    card1.appendChild(card1tel);\n    cardContainer.appendChild(card1);\n\n    const card2 = document.createElement(`div`);\n    card2.classList.add(`contactCard`);\n    \n    const card2h2 = document.createElement(`h2`);\n    card2h2.textContent = `Customer Support`;\n    card2.appendChild(card2h2);\n\n    const card2desc = document.createElement(`p`);\n    card2desc.classList.add(`cardDesc`);\n    card2desc.textContent = `If your have any complaints, special requests or suggestions, we'll be happy to hear you.`;\n    card2.appendChild(card2desc);\n\n    const card2tel = document.createElement(`p`);\n    card2tel.classList.add(`cardTel`);\n    card2tel.textContent = `+55 (61) 66666 6696`;\n    card2.appendChild(card2tel);\n    cardContainer.appendChild(card2);\n};\n\n\n\n//# sourceURL=webpack://restaurant-page/./src/load-contact-page.js?");

/***/ }),

/***/ "./src/load-footer.js":
/*!****************************!*\
  !*** ./src/load-footer.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"loadFooter\": () => (/* binding */ loadFooter)\n/* harmony export */ });\nfunction loadFooter() {\n    const content = document.getElementById(`content`);\n\n    const footer = document.createElement(`div`);\n    footer.classList.add(`footer`);\n    content.appendChild(footer);\n\n    const p1 = document.createElement(`p`);\n    p1.textContent = `This is a student project for the Odin Project's javascript course`;\n    footer.appendChild(p1);\n\n    const repoLink = document.createElement(`a`);\n    repoLink.setAttribute(`href`, `https://github.com/Vimpandra/restaurant-page`);\n    repoLink.textContent = `Click here to visit the Github repository`;\n    footer.appendChild(repoLink);\n};\n\n\n\n//# sourceURL=webpack://restaurant-page/./src/load-footer.js?");

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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"loadMenuPage\": () => (/* binding */ loadMenuPage)\n/* harmony export */ });\nlet menuItens = [];\n\nfunction MenuItem(title, desc, price) {\n    this.title = title;\n    this.desc = desc;\n    this.price = price;\n};\n\nconst fishNchips = new MenuItem(\n    `Fish 'n Chips`,\n    `Fresh fish of the day, served with boiled potatoes, carrots and herbs.`,\n    `29.90`\n);\nmenuItens.push(fishNchips);\n\nconst catchicken = new MenuItem(\n    `Catchicken`,\n    `Minced roasted chicken, served with grains and herbs, nice and crunchy.`,\n    `23.90`\n);\nmenuItens.push(catchicken);\n\nconst beefChops = new MenuItem(\n    `Beef Chops`,\n    `Deliciously roasted beef, with herbs, butter and a selection of vegetables`,\n    `26.90`\n);\nmenuItens.push(beefChops);\n\nfunction loadMenuPage() {\n    const content = document.getElementById(`content`);\n\n    const titleContainer = document.createElement(`div`);\n    titleContainer.classList.add(`menuTitle`);\n    content.appendChild(titleContainer);\n\n    const menuTitle = document.createElement(`h1`);\n    menuTitle.textContent = `Today's Menu`;\n    titleContainer.appendChild(menuTitle);\n\n    const menuDesc = document.createElement(`p`);\n    menuDesc.textContent = `Updated daily with fresh tasty options`;\n    titleContainer.appendChild(menuDesc);\n\n    const menuCards = document.createElement(`div`);\n    menuCards.classList.add(`menuCards`);\n    content.appendChild(menuCards);\n    \n    for (let i = 0; i < menuItens.length; i++) {\n        const itemCard = document.createElement(`div`);\n        itemCard.classList.add(`menuItemCard`);\n        menuCards.appendChild(itemCard);\n\n        const itemTitle = document.createElement(`h3`);\n        itemTitle.textContent = menuItens[i].title;\n        itemCard.appendChild(itemTitle);\n\n        const itemDesc = document.createElement(`p`);\n        itemDesc.classList.add(`itemDesc`);\n        itemDesc.textContent = menuItens[i].desc;\n        itemCard.appendChild(itemDesc);\n\n        const itemPrice = document.createElement(`p`);\n        itemPrice.classList.add(`itemPrice`);\n        itemPrice.textContent = menuItens[i].price;\n        itemCard.appendChild(itemPrice);\n    }\n};\n\n\n\n//# sourceURL=webpack://restaurant-page/./src/load-menu-page.js?");

/***/ }),

/***/ "./src/load-navbar.js":
/*!****************************!*\
  !*** ./src/load-navbar.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"loadNavbar\": () => (/* binding */ loadNavbar)\n/* harmony export */ });\nfunction loadNavbar() {\n    const content = document.getElementById(`content`);\n\n    const navbar = document.createElement(`div`);\n    navbar.classList.add(`navbar`);\n\n    const logo = document.createElement(`h2`);\n    logo.classList.add(`logo`);\n    logo.textContent = `CrC`;\n    navbar.appendChild(logo);\n\n    const navButtons = document.createElement(`div`);\n    navButtons.classList.add(`navButtons`);\n    navbar.appendChild(navButtons);\n\n    const homeBtn = document.createElement(`button`);\n    homeBtn.setAttribute(`id`, `homeBtn`);\n    homeBtn.classList.add(`navBtn`);\n    homeBtn.textContent = `Home`;\n    navButtons.appendChild(homeBtn);\n\n    const menuBtn = document.createElement(`button`);\n    menuBtn.setAttribute(`id`, `menuBtn`);\n    menuBtn.classList.add(`navBtn`);\n    menuBtn.textContent = `Menu`;\n    navButtons.appendChild(menuBtn);\n\n    const contactBtn = document.createElement(`button`);\n    contactBtn.setAttribute(`id`, `contactBtn`);\n    contactBtn.classList.add(`navBtn`);\n    contactBtn.textContent = `Contact`;\n    navButtons.appendChild(contactBtn);\n\n    content.appendChild(navbar);\n};\n\n\n\n//# sourceURL=webpack://restaurant-page/./src/load-navbar.js?");

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