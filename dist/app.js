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
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
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
/******/ 	__webpack_require__.p = "/dist/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/css-loader/index.js!./src/styles/button.css":
/*!*********************************************************!*\
  !*** ./node_modules/css-loader!./src/styles/button.css ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "button {\n  outline: none;\n  position: relative;\n  border: none;\n  background: none;\n  font-family: 'Fredoka One', cursive;\n  padding: 6px;\n  transform-origin: bottom;\n}\nbutton::before {\n  content: '';\n  display: block;\n  position: absolute;\n  z-index: -1;\n  background: rgba(0,0,0,.12);\n  width: 100%;\n  height: 100%;\n  top: 1px;\n  left: -4px;\n  border-radius: 28px;\n  padding: 4px;\n  transition: transform .1s ease-in;\n}\nbutton:hover .inner {\n  opacity: .95;\n}\n\nbutton:active::before {\n  transform: scale(0.98) translateY(2px);\n}\nbutton:active .outer {\n  box-shadow: 0 10px 10px rgba(0,0,0,.3);\n  -webkit-animation-play-state: paused;\n  -moz-animation-play-state: paused;\n  -o-animation-play-state: paused;\n  animation-play-state: paused;\n}\nbutton:active .inner {\n  opacity: 1;\n  box-shadow: 0 2px 0 #022ba9;\n  transform: translateY(4px);\n}\nbutton .outer  {\n  display: block;\n  border-radius: 24px;\n  box-shadow: 0 10px 20px rgba(0,0,0,.6);\n  animation-name: buttonAnimation;\n  animation-duration: 1.2s;\n  animation-iteration-count: infinite;\n  animation-direction: reverse;\n  animation-timing-function: linear;\n}\nbutton .inner {\n  display: block;\n  color: white;\n  background: #003EFF;\n  box-shadow: 0 6px 0 #022ba9;\n  border-radius: 24px;\n  padding: 12px 42px;\n  font-weight: bold;\n  font-size: 26px;\n  text-transform: uppercase;\n  transition: all .1s ease-in;\n}\n\n@keyframes buttonAnimation {\n  0% {\n    transform: rotate(1.5deg);\n  }\n\n  50% {\n    transform: rotate(-1.5deg);\n  }\n\n  100% {\n    transform: rotate(1.5deg);\n  }\n}\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js!./src/styles/confetti.css":
/*!***********************************************************!*\
  !*** ./node_modules/css-loader!./src/styles/confetti.css ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "@keyframes confetti-slow {\n  0% {\n    transform: translate3d(0, 0, 0) rotateX(0) rotateY(0);\n  }\n  100% {\n    transform: translate3d(25px, 105vh, 0) rotateX(360deg) rotateY(180deg);\n  }\n}\n@keyframes confetti-medium {\n  0% {\n    transform: translate3d(0, 0, 0) rotateX(0) rotateY(0);\n  }\n  100% {\n    transform: translate3d(100px, 105vh, 0) rotateX(100deg) rotateY(360deg);\n  }\n}\n@keyframes confetti-fast {\n  0% {\n    transform: translate3d(0, 0, 0) rotateX(0) rotateY(0);\n  }\n  100% {\n    transform: translate3d(-50px, 105vh, 0) rotateX(10deg) rotateY(250deg);\n  }\n}\n\n.confetti-container {\n  perspective: 700px;\n  position: absolute;\n  overflow: hidden;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n}\n\n.confetti {\n  position: absolute;\n  z-index: 1;\n  top: -10px;\n  border-radius: 0%;\n}\n.confetti--animation-slow {\n  animation: confetti-slow 2.25s linear 1 forwards;\n}\n.confetti--animation-medium {\n  animation: confetti-medium 1.75s linear 1 forwards;\n}\n.confetti--animation-fast {\n  animation: confetti-fast 1.25s linear 1 forwards;\n}\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js!./src/styles/index.css":
/*!********************************************************!*\
  !*** ./node_modules/css-loader!./src/styles/index.css ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n.app {\n  position: fixed;\n  width: 100%;\n  height: 100%;\n  cursor: -webkit-image-set(url(/assets/cursors/cursor.png) 1x,url(/assets/cursors/cursor@2x.png) 2x) 0 0,default;\n}\nbutton, .click, a {\n  cursor:-webkit-image-set(url(/assets/cursors/cursorButton.png) 1x,url(/assets/cursors/cursorButton@2x.png) 2x) 0 0,pointer;\n}\ninput {\n  cursor:-webkit-image-set(url(/assets/cursors/cursorInput.png) 1x,url(/assets/cursors/cursorInput@2x.png) 2x) 0 0,pointer;\n}\n\n.hide {\n  display: none !important;\n}\n\n.hide-opacity {\n  opacity: 0 !important;\n  pointer-events: none;\n}\n\n.show-opacity {\n  opacity: 1 !important;\n}\n\n.busy {\n  opacity: 0.6;\n  pointer-events: none;\n}\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js!./src/styles/modal.css":
/*!********************************************************!*\
  !*** ./node_modules/css-loader!./src/styles/modal.css ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".coming-soon-2d .modal {\n  position: fixed;\n  top: 50%;\n  left: 50%;\n  margin-left: -210px;\n  margin-top: -150px;\n  width: 420px;\n  height: 300px;\n  background: white;\n  border-radius: 28px;\n  z-index: 100;\n  box-shadow: 0 0 64px rgba(0,0,0,0.3);\n  box-sizing: border-box;\n  padding: 0 28px;\n  overflow: hidden;\n  transition: transform .3s cubic-bezier(0.175, 0.885, 0.320, 1), margin .3s cubic-bezier(0.175, 0.885, 0.320, 1);\n}\n\n/* IPHONE 8+ */\n@media screen and (max-width: 440px) {\n  .coming-soon-2d .modal {\n    width: 380px;\n    height: 271px;\n    margin-left: -190px;\n    margin-top: -135px;\n    border-radius: 24px;\n  }\n}\n\n/* IPHONE 8 */\n@media screen and (max-width: 390px) {\n  .coming-soon-2d .modal {\n    width: 320px;\n    height: 228px;\n    margin-left: -160px;\n    margin-top: -114px;\n    border-radius: 22px;\n  }\n}\n\n/* IPHONE 5 */\n@media screen and (max-width: 330px) {\n  .coming-soon-2d .modal {\n    width: 280px;\n    height: 200px;\n    margin-left: -140px;\n    margin-top: -100px;\n    border-radius: 16px;\n  }\n}\n\n\n/* OVERLAY */\n.coming-soon-2d .modal-container {\n  transition: opacity .25s ease-in;\n}\n.coming-soon-2d .modal-container::before {\n  content: '';\n  position: fixed;\n  background: rgba(0,0,0,0.7);\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n}\n\n\n\n\n/* FADE IN / OUT */\n.coming-soon-2d .modal-container.fadeIn,\n.coming-soon-2d .modal-container.fadeOut {\n  opacity: 0;\n}\n.coming-soon-2d .modal-container.closing .modal {\n  transition: transform .2s ease-in, margin .2s ease-in;\n}\n.coming-soon-2d .modal-container.fadeIn .modal {\n  margin-top: 150px;\n  transform: scale(0.9);\n}\n.coming-soon-2d .modal-container.fadeOut .modal {\n  margin-top: -800px;\n}\n\n\n\n.coming-soon-2d .modal .wrapper {\n  position: relative;\n  transition: opacity .2s ease-in;\n}\n\n\n/* CLOSE BUTTON */\n.coming-soon-2d .modal .close-button {\n  position: absolute;\n  display: block;\n  top: 0;\n  right: -16px;\n  width: 42px;\n  height: 42px;\n  background: #eff3ff;\n  border-radius: 50%;\n  transition: transform .1s ease-in, opacity .1s ease-in;\n}\n.coming-soon-2d .modal .close-button:active {\n  transform: scale(0.98) translateY(2px);\n  opacity: 0.8;\n}\n.coming-soon-2d .modal .close-button span {\n  display: inline-block;\n  width: 100%;\n  height: 100%;\n  background: url('/assets/icons/closeIcon.svg') center no-repeat;\n  background-size: 35%;\n}\n\n\n/* IPHONE 8+ */\n@media screen and (max-width: 440px) {\n  .coming-soon-2d .modal .close-button {\n    width: 40px;\n    height: 40px;\n  }\n}\n\n/* IPHONE 8 */\n@media screen and (max-width: 390px) {\n  .coming-soon-2d .modal .close-button {\n    right: -18px;\n    top: -2px;\n  }\n}\n\n/* IPHONE 5 */\n@media screen and (max-width: 330px) {\n  .coming-soon-2d .modal .close-button {\n    width: 36px;\n    height: 36px;\n    top: 12px;\n  }\n}\n\n\n\n/* TITLE / INPUT */\n.coming-soon-2d .modal h1 {\n  text-align: center;\n  font-size: 20px;\n  color: #333;\n  font-weight: bold;\n  padding-top: 48px;\n}\n.coming-soon-2d .modal .input-container {\n  width: 100%;\n  margin: auto;\n  margin-top: 24px;\n}\n.coming-soon-2d .modal .input-container input {\n  display: inline-block;\n  border: none;\n  font-size: 24px;\n  text-align: left;\n  width: 100%;\n  font-family: 'Fredoka One', cursive;\n  outline: none;\n  caret-color: #003EFF;\n  color: #003EFF;\n  background: #F0F0F0;\n  box-shadow: 0 6px 0 #CCC;\n  border-radius: 12px;\n  padding: 14px 20px;\n  box-sizing: border-box;\n}\n\n/* IPHONE 8+ */\n@media screen and (max-width: 440px) {\n  .coming-soon-2d .modal h1 {\n    padding-top: 38px;\n  }\n  .coming-soon-2d .modal .input-container {\n    margin-top: 16px;\n  }\n  .coming-soon-2d .modal .input-container input {\n    font-size: 20px;\n    padding: 12px 18px;\n    box-shadow: 0 5px 0 #CCC;\n  }\n}\n\n/* IPHONE 8 */\n@media screen and (max-width: 390px) {\n  .coming-soon-2d .modal h1 {\n    font-size: 16px;\n  }\n  .coming-soon-2d .modal .input-container {\n    margin-top: 14px;\n  }\n  .coming-soon-2d .modal .input-container input {\n    font-size: 18px;\n    padding: 12px 16px;\n    box-shadow: 0 4px 0 #CCC;\n  }\n}\n\n/* IPHONE 5 */\n@media screen and (max-width: 330px) {\n  .coming-soon-2d .modal h1 {\n    font-size: 13px;\n    max-width: 80%;\n    margin: auto;\n  }\n  .coming-soon-2d .modal .input-container input {\n    font-size: 16px;\n    padding: 8px 14px;\n    box-shadow: 0 3px 0 #CCC;\n  }\n}\n\n\n\n\n/* DONE BUTTON */\n.coming-soon-2d .modal .let-me-know {\n  display: inline-block;\n  margin-top: 28px;\n  transform: scale(0.8);\n  transform-origin: top;\n}\n.coming-soon-2d .modal .let-me-know::before {\n  background: #eff3ff;\n}\n\n/* IPHONE 8+ */\n@media screen and (max-width: 440px) {\n  .coming-soon-2d .modal .let-me-know  {\n    margin-top: 22px;\n    transform: scale(0.6);\n  }\n}\n\n/* IPHONE 8 */\n@media screen and (max-width: 390px) {\n  .coming-soon-2d .modal .let-me-know  {\n    margin-top: 16px;\n    transform: scale(0.5);\n  }\n}\n\n/* IPHONE 5 */\n@media screen and (max-width: 330px) {\n  .coming-soon-2d .modal .let-me-know  {\n    margin-top: 14px;\n  }\n}\n\n\n\n\n/* MODAL DONE */\n.coming-soon-2d .done {\n  opacity: 0;\n  height: 100%;\n  position: relative;\n  transition: opacity .2s ease-in;\n}\n.coming-soon-2d .done .content {\n  position: absolute;\n  z-index: 10;\n  top: 0;\n  left: 0;\n}\n.coming-soon-2d .done h1 {\n  font-size: 42px;\n  padding-top: 54px;\n  color: #003EFF;\n}\n\n\n\n/* IPHONE 8+ */\n@media screen and (max-width: 440px) {\n  .coming-soon-2d .done h1 {\n    font-size: 36px;\n    padding-top: 64px;\n  }\n}\n\n/* IPHONE 8 */\n@media screen and (max-width: 390px) {\n  .coming-soon-2d .done h1 {\n    font-size: 32px;\n    padding-top: 48px;\n  }\n}\n\n/* IPHONE 5 */\n@media screen and (max-width: 330px) {\n  .coming-soon-2d .done h1 {\n    font-size: 26px;\n    padding-top: 72px;\n  }\n}\n\n\n\n\n\n.coming-soon-2d .pattern {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  opacity: 0;\n  transition: opacity .2s ease-in;\n}\n\n/* MODAL DONE */\n.coming-soon-2d .pattern::before,\n.coming-soon-2d .pattern::after {\n  content: '';\n  position: absolute;\n  z-index: -1;\n  width: 100%;\n  height: 100%;\n  left: 0;\n  top: 0;\n  background: white url('/assets/images/pattern.png') center repeat;\n  background-size: 65%;\n  opacity: 0.12;\n}\n.coming-soon-2d .pattern::after {\n  background: linear-gradient(to bottom, rgba(255,255,255,0), rgba(255,255,255,1));\n  opacity: 1;\n}\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js!./src/styles/shake.css":
/*!********************************************************!*\
  !*** ./node_modules/css-loader!./src/styles/shake.css ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/* SHAKE EFFECT */\n.shake {\n  position: relative;\n  animation: shake .1s linear;\n  animation-iteration-count: 3;\n}\n@keyframes shake {\n  0% { left: -5px; }\n  100% { right: -5px; }\n}\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js!./src/styles/socials.css":
/*!**********************************************************!*\
  !*** ./node_modules/css-loader!./src/styles/socials.css ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".socials {\n  position: fixed;\n  pointer-events: all;\n  bottom: 14px;\n  right: 12px;\n  opacity: 0.85;\n}\n.socials li {\n  display: inline-block;\n}\n.socials a {\n  display: block;\n  width: 24px;\n  height: 24px;\n}\n.socials a.facebook {\n  background: url('/assets/icons/facebook.svg') center no-repeat;\n  background-size: 70%;\n}\n.socials a.twitter {\n  background: url('/assets/icons/twitter.svg') center no-repeat;\n  background-size: 70%;\n}\n.socials a.instagram {\n  background: url('/assets/icons/instagram.svg') center no-repeat;\n  background-size: 70%;\n}\n\nfooter .copyright {\n  position: fixed;\n  right: 12px;\n  font-size: 9px;\n  color: white;\n  opacity: 0.5;\n}\n\n\n/* IPHONE 8+ */\n@media screen and (max-width: 440px) {\n  footer {\n    display: none;\n  }\n}\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js!./src/styles/vignette.css":
/*!***********************************************************!*\
  !*** ./node_modules/css-loader!./src/styles/vignette.css ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".coming-soon-2d {\n  position: fixed;\n  z-index: 1000;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  pointer-events: none;\n}\n.coming-soon-2d .vignette {\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  box-shadow: inset 0 0 140px #0030c5;\n  transition: opacity 0.2s linear;\n}\n.coming-soon-2d .content {\n  position: fixed;\n  bottom: 28px;\n  width: 100%;\n  text-align: center;\n}\n.coming-soon-2d .content .notify-me,\n.coming-soon-2d .content .modal {\n  pointer-events: all;\n}\n\n@media screen and (max-width: 720px) {\n  .coming-soon-2d button {\n    transform: scale(0.8);\n  }\n}\n\n@media screen and (max-width: 520px) {\n  .coming-soon-2d {\n    box-shadow: inset 0 0 100px #0030c5;\n  }\n}\n\n@media screen and (max-width: 420px) {\n  .coming-soon-2d {\n    box-shadow: inset 0 0 64px #0030c5;\n  }\n}\n\n.app.blink .coming-soon-2d .vignette {\n  opacity: 0;\n}\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/lib/css-base.js":
/*!*************************************************!*\
  !*** ./node_modules/css-loader/lib/css-base.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
module.exports = function(useSourceMap) {
	var list = [];

	// return the list of modules as css string
	list.toString = function toString() {
		return this.map(function (item) {
			var content = cssWithMappingToString(item, useSourceMap);
			if(item[2]) {
				return "@media " + item[2] + "{" + content + "}";
			} else {
				return content;
			}
		}).join("");
	};

	// import a list of modules into the list
	list.i = function(modules, mediaQuery) {
		if(typeof modules === "string")
			modules = [[null, modules, ""]];
		var alreadyImportedModules = {};
		for(var i = 0; i < this.length; i++) {
			var id = this[i][0];
			if(typeof id === "number")
				alreadyImportedModules[id] = true;
		}
		for(i = 0; i < modules.length; i++) {
			var item = modules[i];
			// skip already imported module
			// this implementation is not 100% perfect for weird media query combinations
			//  when a module is imported multiple times with different media queries.
			//  I hope this will never occur (Hey this way we have smaller bundles)
			if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
				if(mediaQuery && !item[2]) {
					item[2] = mediaQuery;
				} else if(mediaQuery) {
					item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
				}
				list.push(item);
			}
		}
	};
	return list;
};

function cssWithMappingToString(item, useSourceMap) {
	var content = item[1] || '';
	var cssMapping = item[3];
	if (!cssMapping) {
		return content;
	}

	if (useSourceMap && typeof btoa === 'function') {
		var sourceMapping = toComment(cssMapping);
		var sourceURLs = cssMapping.sources.map(function (source) {
			return '/*# sourceURL=' + cssMapping.sourceRoot + source + ' */'
		});

		return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
	}

	return [content].join('\n');
}

// Adapted from convert-source-map (MIT)
function toComment(sourceMap) {
	// eslint-disable-next-line no-undef
	var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
	var data = 'sourceMappingURL=data:application/json;charset=utf-8;base64,' + base64;

	return '/*# ' + data + ' */';
}


/***/ }),

/***/ "./node_modules/style-loader/lib/addStyles.js":
/*!****************************************************!*\
  !*** ./node_modules/style-loader/lib/addStyles.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/

var stylesInDom = {};

var	memoize = function (fn) {
	var memo;

	return function () {
		if (typeof memo === "undefined") memo = fn.apply(this, arguments);
		return memo;
	};
};

var isOldIE = memoize(function () {
	// Test for IE <= 9 as proposed by Browserhacks
	// @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
	// Tests for existence of standard globals is to allow style-loader
	// to operate correctly into non-standard environments
	// @see https://github.com/webpack-contrib/style-loader/issues/177
	return window && document && document.all && !window.atob;
});

var getTarget = function (target) {
  return document.querySelector(target);
};

var getElement = (function (fn) {
	var memo = {};

	return function(target) {
                // If passing function in options, then use it for resolve "head" element.
                // Useful for Shadow Root style i.e
                // {
                //   insertInto: function () { return document.querySelector("#foo").shadowRoot }
                // }
                if (typeof target === 'function') {
                        return target();
                }
                if (typeof memo[target] === "undefined") {
			var styleTarget = getTarget.call(this, target);
			// Special case to return head of iframe instead of iframe itself
			if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
				try {
					// This will throw an exception if access to iframe is blocked
					// due to cross-origin restrictions
					styleTarget = styleTarget.contentDocument.head;
				} catch(e) {
					styleTarget = null;
				}
			}
			memo[target] = styleTarget;
		}
		return memo[target]
	};
})();

var singleton = null;
var	singletonCounter = 0;
var	stylesInsertedAtTop = [];

var	fixUrls = __webpack_require__(/*! ./urls */ "./node_modules/style-loader/lib/urls.js");

module.exports = function(list, options) {
	if (typeof DEBUG !== "undefined" && DEBUG) {
		if (typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
	}

	options = options || {};

	options.attrs = typeof options.attrs === "object" ? options.attrs : {};

	// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
	// tags it will allow on a page
	if (!options.singleton && typeof options.singleton !== "boolean") options.singleton = isOldIE();

	// By default, add <style> tags to the <head> element
        if (!options.insertInto) options.insertInto = "head";

	// By default, add <style> tags to the bottom of the target
	if (!options.insertAt) options.insertAt = "bottom";

	var styles = listToStyles(list, options);

	addStylesToDom(styles, options);

	return function update (newList) {
		var mayRemove = [];

		for (var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];

			domStyle.refs--;
			mayRemove.push(domStyle);
		}

		if(newList) {
			var newStyles = listToStyles(newList, options);
			addStylesToDom(newStyles, options);
		}

		for (var i = 0; i < mayRemove.length; i++) {
			var domStyle = mayRemove[i];

			if(domStyle.refs === 0) {
				for (var j = 0; j < domStyle.parts.length; j++) domStyle.parts[j]();

				delete stylesInDom[domStyle.id];
			}
		}
	};
};

function addStylesToDom (styles, options) {
	for (var i = 0; i < styles.length; i++) {
		var item = styles[i];
		var domStyle = stylesInDom[item.id];

		if(domStyle) {
			domStyle.refs++;

			for(var j = 0; j < domStyle.parts.length; j++) {
				domStyle.parts[j](item.parts[j]);
			}

			for(; j < item.parts.length; j++) {
				domStyle.parts.push(addStyle(item.parts[j], options));
			}
		} else {
			var parts = [];

			for(var j = 0; j < item.parts.length; j++) {
				parts.push(addStyle(item.parts[j], options));
			}

			stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
		}
	}
}

function listToStyles (list, options) {
	var styles = [];
	var newStyles = {};

	for (var i = 0; i < list.length; i++) {
		var item = list[i];
		var id = options.base ? item[0] + options.base : item[0];
		var css = item[1];
		var media = item[2];
		var sourceMap = item[3];
		var part = {css: css, media: media, sourceMap: sourceMap};

		if(!newStyles[id]) styles.push(newStyles[id] = {id: id, parts: [part]});
		else newStyles[id].parts.push(part);
	}

	return styles;
}

function insertStyleElement (options, style) {
	var target = getElement(options.insertInto)

	if (!target) {
		throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");
	}

	var lastStyleElementInsertedAtTop = stylesInsertedAtTop[stylesInsertedAtTop.length - 1];

	if (options.insertAt === "top") {
		if (!lastStyleElementInsertedAtTop) {
			target.insertBefore(style, target.firstChild);
		} else if (lastStyleElementInsertedAtTop.nextSibling) {
			target.insertBefore(style, lastStyleElementInsertedAtTop.nextSibling);
		} else {
			target.appendChild(style);
		}
		stylesInsertedAtTop.push(style);
	} else if (options.insertAt === "bottom") {
		target.appendChild(style);
	} else if (typeof options.insertAt === "object" && options.insertAt.before) {
		var nextSibling = getElement(options.insertInto + " " + options.insertAt.before);
		target.insertBefore(style, nextSibling);
	} else {
		throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");
	}
}

function removeStyleElement (style) {
	if (style.parentNode === null) return false;
	style.parentNode.removeChild(style);

	var idx = stylesInsertedAtTop.indexOf(style);
	if(idx >= 0) {
		stylesInsertedAtTop.splice(idx, 1);
	}
}

function createStyleElement (options) {
	var style = document.createElement("style");

	options.attrs.type = "text/css";

	addAttrs(style, options.attrs);
	insertStyleElement(options, style);

	return style;
}

function createLinkElement (options) {
	var link = document.createElement("link");

	options.attrs.type = "text/css";
	options.attrs.rel = "stylesheet";

	addAttrs(link, options.attrs);
	insertStyleElement(options, link);

	return link;
}

function addAttrs (el, attrs) {
	Object.keys(attrs).forEach(function (key) {
		el.setAttribute(key, attrs[key]);
	});
}

function addStyle (obj, options) {
	var style, update, remove, result;

	// If a transform function was defined, run it on the css
	if (options.transform && obj.css) {
	    result = options.transform(obj.css);

	    if (result) {
	    	// If transform returns a value, use that instead of the original css.
	    	// This allows running runtime transformations on the css.
	    	obj.css = result;
	    } else {
	    	// If the transform function returns a falsy value, don't add this css.
	    	// This allows conditional loading of css
	    	return function() {
	    		// noop
	    	};
	    }
	}

	if (options.singleton) {
		var styleIndex = singletonCounter++;

		style = singleton || (singleton = createStyleElement(options));

		update = applyToSingletonTag.bind(null, style, styleIndex, false);
		remove = applyToSingletonTag.bind(null, style, styleIndex, true);

	} else if (
		obj.sourceMap &&
		typeof URL === "function" &&
		typeof URL.createObjectURL === "function" &&
		typeof URL.revokeObjectURL === "function" &&
		typeof Blob === "function" &&
		typeof btoa === "function"
	) {
		style = createLinkElement(options);
		update = updateLink.bind(null, style, options);
		remove = function () {
			removeStyleElement(style);

			if(style.href) URL.revokeObjectURL(style.href);
		};
	} else {
		style = createStyleElement(options);
		update = applyToTag.bind(null, style);
		remove = function () {
			removeStyleElement(style);
		};
	}

	update(obj);

	return function updateStyle (newObj) {
		if (newObj) {
			if (
				newObj.css === obj.css &&
				newObj.media === obj.media &&
				newObj.sourceMap === obj.sourceMap
			) {
				return;
			}

			update(obj = newObj);
		} else {
			remove();
		}
	};
}

var replaceText = (function () {
	var textStore = [];

	return function (index, replacement) {
		textStore[index] = replacement;

		return textStore.filter(Boolean).join('\n');
	};
})();

function applyToSingletonTag (style, index, remove, obj) {
	var css = remove ? "" : obj.css;

	if (style.styleSheet) {
		style.styleSheet.cssText = replaceText(index, css);
	} else {
		var cssNode = document.createTextNode(css);
		var childNodes = style.childNodes;

		if (childNodes[index]) style.removeChild(childNodes[index]);

		if (childNodes.length) {
			style.insertBefore(cssNode, childNodes[index]);
		} else {
			style.appendChild(cssNode);
		}
	}
}

function applyToTag (style, obj) {
	var css = obj.css;
	var media = obj.media;

	if(media) {
		style.setAttribute("media", media)
	}

	if(style.styleSheet) {
		style.styleSheet.cssText = css;
	} else {
		while(style.firstChild) {
			style.removeChild(style.firstChild);
		}

		style.appendChild(document.createTextNode(css));
	}
}

function updateLink (link, options, obj) {
	var css = obj.css;
	var sourceMap = obj.sourceMap;

	/*
		If convertToAbsoluteUrls isn't defined, but sourcemaps are enabled
		and there is no publicPath defined then lets turn convertToAbsoluteUrls
		on by default.  Otherwise default to the convertToAbsoluteUrls option
		directly
	*/
	var autoFixUrls = options.convertToAbsoluteUrls === undefined && sourceMap;

	if (options.convertToAbsoluteUrls || autoFixUrls) {
		css = fixUrls(css);
	}

	if (sourceMap) {
		// http://stackoverflow.com/a/26603875
		css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
	}

	var blob = new Blob([css], { type: "text/css" });

	var oldSrc = link.href;

	link.href = URL.createObjectURL(blob);

	if(oldSrc) URL.revokeObjectURL(oldSrc);
}


/***/ }),

/***/ "./node_modules/style-loader/lib/urls.js":
/*!***********************************************!*\
  !*** ./node_modules/style-loader/lib/urls.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {


/**
 * When source maps are enabled, `style-loader` uses a link element with a data-uri to
 * embed the css on the page. This breaks all relative urls because now they are relative to a
 * bundle instead of the current page.
 *
 * One solution is to only use full urls, but that may be impossible.
 *
 * Instead, this function "fixes" the relative urls to be absolute according to the current page location.
 *
 * A rudimentary test suite is located at `test/fixUrls.js` and can be run via the `npm test` command.
 *
 */

module.exports = function (css) {
  // get current location
  var location = typeof window !== "undefined" && window.location;

  if (!location) {
    throw new Error("fixUrls requires window.location");
  }

	// blank or null?
	if (!css || typeof css !== "string") {
	  return css;
  }

  var baseUrl = location.protocol + "//" + location.host;
  var currentDir = baseUrl + location.pathname.replace(/\/[^\/]*$/, "/");

	// convert each url(...)
	/*
	This regular expression is just a way to recursively match brackets within
	a string.

	 /url\s*\(  = Match on the word "url" with any whitespace after it and then a parens
	   (  = Start a capturing group
	     (?:  = Start a non-capturing group
	         [^)(]  = Match anything that isn't a parentheses
	         |  = OR
	         \(  = Match a start parentheses
	             (?:  = Start another non-capturing groups
	                 [^)(]+  = Match anything that isn't a parentheses
	                 |  = OR
	                 \(  = Match a start parentheses
	                     [^)(]*  = Match anything that isn't a parentheses
	                 \)  = Match a end parentheses
	             )  = End Group
              *\) = Match anything and then a close parens
          )  = Close non-capturing group
          *  = Match anything
       )  = Close capturing group
	 \)  = Match a close parens

	 /gi  = Get all matches, not the first.  Be case insensitive.
	 */
	var fixedCss = css.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi, function(fullMatch, origUrl) {
		// strip quotes (if they exist)
		var unquotedOrigUrl = origUrl
			.trim()
			.replace(/^"(.*)"$/, function(o, $1){ return $1; })
			.replace(/^'(.*)'$/, function(o, $1){ return $1; });

		// already a full url? no change
		if (/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(unquotedOrigUrl)) {
		  return fullMatch;
		}

		// convert the url to a full url
		var newUrl;

		if (unquotedOrigUrl.indexOf("//") === 0) {
		  	//TODO: should we add protocol?
			newUrl = unquotedOrigUrl;
		} else if (unquotedOrigUrl.indexOf("/") === 0) {
			// path should be relative to the base url
			newUrl = baseUrl + unquotedOrigUrl; // already starts with '/'
		} else {
			// path should be relative to current directory
			newUrl = currentDir + unquotedOrigUrl.replace(/^\.\//, ""); // Strip leading './'
		}

		// send back the fixed url(...)
		return "url(" + JSON.stringify(newUrl) + ")";
	});

	// send back the fixed css
	return fixedCss;
};


/***/ }),

/***/ "./node_modules/validator/lib/isByteLength.js":
/*!****************************************************!*\
  !*** ./node_modules/validator/lib/isByteLength.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

exports.default = isByteLength;

var _assertString = __webpack_require__(/*! ./util/assertString */ "./node_modules/validator/lib/util/assertString.js");

var _assertString2 = _interopRequireDefault(_assertString);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* eslint-disable prefer-rest-params */
function isByteLength(str, options) {
  (0, _assertString2.default)(str);
  var min = void 0;
  var max = void 0;
  if ((typeof options === 'undefined' ? 'undefined' : _typeof(options)) === 'object') {
    min = options.min || 0;
    max = options.max;
  } else {
    // backwards compatibility: isByteLength(str, min [, max])
    min = arguments[1];
    max = arguments[2];
  }
  var len = encodeURI(str).split(/%..|./).length - 1;
  return len >= min && (typeof max === 'undefined' || len <= max);
}
module.exports = exports['default'];

/***/ }),

/***/ "./node_modules/validator/lib/isEmail.js":
/*!***********************************************!*\
  !*** ./node_modules/validator/lib/isEmail.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = isEmail;

var _assertString = __webpack_require__(/*! ./util/assertString */ "./node_modules/validator/lib/util/assertString.js");

var _assertString2 = _interopRequireDefault(_assertString);

var _merge = __webpack_require__(/*! ./util/merge */ "./node_modules/validator/lib/util/merge.js");

var _merge2 = _interopRequireDefault(_merge);

var _isByteLength = __webpack_require__(/*! ./isByteLength */ "./node_modules/validator/lib/isByteLength.js");

var _isByteLength2 = _interopRequireDefault(_isByteLength);

var _isFQDN = __webpack_require__(/*! ./isFQDN */ "./node_modules/validator/lib/isFQDN.js");

var _isFQDN2 = _interopRequireDefault(_isFQDN);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var default_email_options = {
  allow_display_name: false,
  require_display_name: false,
  allow_utf8_local_part: true,
  require_tld: true
};

/* eslint-disable max-len */
/* eslint-disable no-control-regex */
var displayName = /^[a-z\d!#\$%&'\*\+\-\/=\?\^_`{\|}~\.\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+[a-z\d!#\$%&'\*\+\-\/=\?\^_`{\|}~\,\.\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF\s]*<(.+)>$/i;
var emailUserPart = /^[a-z\d!#\$%&'\*\+\-\/=\?\^_`{\|}~]+$/i;
var quotedEmailUser = /^([\s\x01-\x08\x0b\x0c\x0e-\x1f\x7f\x21\x23-\x5b\x5d-\x7e]|(\\[\x01-\x09\x0b\x0c\x0d-\x7f]))*$/i;
var emailUserUtf8Part = /^[a-z\d!#\$%&'\*\+\-\/=\?\^_`{\|}~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+$/i;
var quotedEmailUserUtf8 = /^([\s\x01-\x08\x0b\x0c\x0e-\x1f\x7f\x21\x23-\x5b\x5d-\x7e\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|(\\[\x01-\x09\x0b\x0c\x0d-\x7f\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))*$/i;
/* eslint-enable max-len */
/* eslint-enable no-control-regex */

function isEmail(str, options) {
  (0, _assertString2.default)(str);
  options = (0, _merge2.default)(options, default_email_options);

  if (options.require_display_name || options.allow_display_name) {
    var display_email = str.match(displayName);
    if (display_email) {
      str = display_email[1];
    } else if (options.require_display_name) {
      return false;
    }
  }

  var parts = str.split('@');
  var domain = parts.pop();
  var user = parts.join('@');

  var lower_domain = domain.toLowerCase();
  if (lower_domain === 'gmail.com' || lower_domain === 'googlemail.com') {
    user = user.replace(/\./g, '').toLowerCase();
  }

  if (!(0, _isByteLength2.default)(user, { max: 64 }) || !(0, _isByteLength2.default)(domain, { max: 254 })) {
    return false;
  }

  if (!(0, _isFQDN2.default)(domain, { require_tld: options.require_tld })) {
    return false;
  }

  if (user[0] === '"') {
    user = user.slice(1, user.length - 1);
    return options.allow_utf8_local_part ? quotedEmailUserUtf8.test(user) : quotedEmailUser.test(user);
  }

  var pattern = options.allow_utf8_local_part ? emailUserUtf8Part : emailUserPart;

  var user_parts = user.split('.');
  for (var i = 0; i < user_parts.length; i++) {
    if (!pattern.test(user_parts[i])) {
      return false;
    }
  }

  return true;
}
module.exports = exports['default'];

/***/ }),

/***/ "./node_modules/validator/lib/isFQDN.js":
/*!**********************************************!*\
  !*** ./node_modules/validator/lib/isFQDN.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = isFQDN;

var _assertString = __webpack_require__(/*! ./util/assertString */ "./node_modules/validator/lib/util/assertString.js");

var _assertString2 = _interopRequireDefault(_assertString);

var _merge = __webpack_require__(/*! ./util/merge */ "./node_modules/validator/lib/util/merge.js");

var _merge2 = _interopRequireDefault(_merge);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var default_fqdn_options = {
  require_tld: true,
  allow_underscores: false,
  allow_trailing_dot: false
};

function isFQDN(str, options) {
  (0, _assertString2.default)(str);
  options = (0, _merge2.default)(options, default_fqdn_options);

  /* Remove the optional trailing dot before checking validity */
  if (options.allow_trailing_dot && str[str.length - 1] === '.') {
    str = str.substring(0, str.length - 1);
  }
  var parts = str.split('.');
  if (options.require_tld) {
    var tld = parts.pop();
    if (!parts.length || !/^([a-z\u00a1-\uffff]{2,}|xn[a-z0-9-]{2,})$/i.test(tld)) {
      return false;
    }
    // disallow spaces
    if (/[\s\u2002-\u200B\u202F\u205F\u3000\uFEFF\uDB40\uDC20]/.test(tld)) {
      return false;
    }
  }
  for (var part, i = 0; i < parts.length; i++) {
    part = parts[i];
    if (options.allow_underscores) {
      part = part.replace(/_/g, '');
    }
    if (!/^[a-z\u00a1-\uffff0-9-]+$/i.test(part)) {
      return false;
    }
    // disallow full-width chars
    if (/[\uff01-\uff5e]/.test(part)) {
      return false;
    }
    if (part[0] === '-' || part[part.length - 1] === '-') {
      return false;
    }
  }
  return true;
}
module.exports = exports['default'];

/***/ }),

/***/ "./node_modules/validator/lib/util/assertString.js":
/*!*********************************************************!*\
  !*** ./node_modules/validator/lib/util/assertString.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = assertString;
function assertString(input) {
  var isString = typeof input === 'string' || input instanceof String;

  if (!isString) {
    throw new TypeError('This library (validator.js) validates strings only');
  }
}
module.exports = exports['default'];

/***/ }),

/***/ "./node_modules/validator/lib/util/merge.js":
/*!**************************************************!*\
  !*** ./node_modules/validator/lib/util/merge.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = merge;
function merge() {
  var obj = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var defaults = arguments[1];

  for (var key in defaults) {
    if (typeof obj[key] === 'undefined') {
      obj[key] = defaults[key];
    }
  }
  return obj;
}
module.exports = exports['default'];

/***/ }),

/***/ "./src/components/blink.js":
/*!*********************************!*\
  !*** ./src/components/blink.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return CameraBlink; });
/* harmony import */ var _transition__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./transition */ "./src/components/transition.js");
function CameraBlink(callback){let transition=new _transition__WEBPACK_IMPORTED_MODULE_0__["default"]({duration:210*2});setTimeout(function(){if(transition)transition.end();callback();},320*2);}

/***/ }),

/***/ "./src/components/door.js":
/*!********************************!*\
  !*** ./src/components/door.js ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

const Event=__webpack_require__(/*! ../core/event */ "./src/core/event.js");AFRAME.registerComponent('app-door',{schema:{},init(){const model=this.el.getObject3D('mesh');this.cameraEl=document.querySelector('a-camera');this.doorOpenned=false;this.cameraSpeed=0;this.emitted=false;this.clicked=false;if(AFRAME.utils.device.isMobile()){this.el.sceneEl.canvas.addEventListener('click',this.doorMouseClick.bind(this));}else{this.el.addEventListener('mouseenter',this.doorMouseEnter.bind(this));this.el.addEventListener('mouseleave',this.doorMouseLeave.bind(this));this.el.addEventListener('click',this.doorMouseClick.bind(this));}if(model)this.loadDoorAnimation(model);else{this.el.addEventListener('model-loaded',e=>{this.loadDoorAnimation(e.detail.model);});}},tick(t,dt){if(this.emitted)return;if(this.mixer&&!isNaN(dt))this.mixer.update(dt/1000);// Camera dolly
if(!this.doorOpenned)return;const currentPos=this.cameraEl.object3D.position;if(currentPos.z<-3.9){this.emitted=true;const mainScene=document.querySelector('#mainScene');mainScene.parentNode.removeChild(mainScene);Event.emit(this.el,'doorOpenned');return;}currentPos.z-=this.cameraSpeed;if(this.cameraSpeed>0.08)return;this.cameraSpeed+=0.002;},loadDoorAnimation(model){this.mixer=new THREE.AnimationMixer(model);const action=this.action=this.mixer.clipAction(model.animations[0]);action.setLoop(THREE.LoopOnce);action.clampWhenFinished=true;},// ---------------------------------------------------------------------------
// EVENTS
doorMouseEnter(){if(window.store.modalOpen)return;const appEl=document.querySelector('.app');appEl.classList.add('click');},doorMouseLeave(){const appEl=document.querySelector('.app');appEl.classList.remove('click');},doorMouseClick(){if(!this.action||this.clicked)return;this.clicked=true;if(AFRAME.utils.device.isMobile()){setTimeout(()=>{this.action.play();},1200);}else{this.action.play();}const shadowEl=document.querySelector('#doorShadow');shadowEl.setAttribute('fadeout',{duration:2300});setTimeout(()=>{this.doorOpenned=window.store.doorOpenned=true;},500);Event.emit(this.el,'doorOpening');}});

/***/ }),

/***/ "./src/components/environment.js":
/*!***************************************!*\
  !*** ./src/components/environment.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/* global AFRAME, THREE */if(typeof AFRAME==='undefined'){throw new Error('Component attempted to register before AFRAME was available.');}/**
 * enviroGetSettings() - console function for printing out the current environment settings
 */function enviroGetSettings(){document.querySelector('[environment]').components['environment'].logPreset();}AFRAME.registerComponent('environment',{schema:{active:{default:false},preset:{default:'default',oneOf:['none','default','contact','egypt','checkerboard','forest','goaland','yavapai','goldmine','arches','threetowers','poison','tron','japan','dream','volcano','starry','osiris']},seed:{type:'int',default:1,min:0,max:1000},skyType:{default:'color',oneOf:['none','color','gradient','atmosphere']},skyColor:{type:'color'},horizonColor:{type:'color'},lighting:{default:'distant',oneOf:['none','distant','point']},shadow:{default:false},shadowSize:{default:10},lightPosition:{type:'vec3',default:{x:0,y:1,z:-0.2}},fog:{type:'float',default:0,min:0,max:1},flatShading:{default:false},playArea:{type:'float',default:1,min:1,max:100},ground:{default:'hills',oneOf:['none','flat','hills','canyon','spikes','noise']},groundYScale:{type:'float',default:3,min:0,max:50},groundTexture:{default:'none',oneOf:['none','checkerboard','squares','walkernoise']},groundColor:{type:'color',default:'#553e35'},groundColor2:{type:'color',default:'#694439'},dressing:{default:'none',oneOf:['none','cubes','pyramids','cylinders','hexagons','stones','trees','mushrooms','towers','apparatus','arches','torii']},dressingAmount:{type:'int',default:10,min:0,max:1000},dressingColor:{type:'color',default:'#795449'},dressingScale:{type:'float',default:5,min:0,max:100},dressingVariance:{type:'vec3',default:{x:1,y:1,z:1}},dressingUniformScale:{default:true},dressingOnPlayArea:{type:'float',default:0,min:0,max:1},grid:{default:'none',oneOf:['none','1x1','2x2','crosses','dots','xlines','ylines']},gridColor:{type:'color',default:'#ccc'}},multiple:false,presets:{'none':{},'default':{active:true,seed:1,skyType:'atmosphere',skyColor:'#88c',horizonColor:'#ddd',lighting:'distant',lightPosition:{x:-0.11,y:1,z:0.33},fog:0.78,flatShading:false,playArea:1,ground:'hills',groundYScale:3,groundTexture:'checkerboard',groundColor:'#454545',groundColor2:'#5d5d5d',dressing:'none',dressingAmount:10,dressingColor:'#795449',dressingScale:1,dressingVariance:{x:0,y:0,z:0},dressingUniformScale:true,dressingOnPlayArea:0,grid:'none',gridColor:'#ccc',shadow:false},'contact':{active:true,seed:14,skyType:'gradient',skyColor:'#478d54',horizonColor:'#b696cb',lighting:'distant',lightPosition:{x:0,y:2.01,z:-1},fog:0.8,flatShading:false,playArea:1,ground:'spikes',groundYScale:4.91,groundTexture:'none',groundColor:'#2e455f',groundColor2:'#694439',dressing:'apparatus',dressingAmount:7,dressingColor:'#657067',dressingScale:20,dressingVariance:{x:20,y:20,z:20},dressingUniformScale:true,dressingOnPlayArea:0,grid:'1x1',gridColor:'#478d54',shadow:false},'egypt':{active:true,seed:26,skyType:'gradient',skyColor:'#1b7660',horizonColor:'#e4b676',lighting:'distant',lightPosition:{x:0,y:1.65,z:-1},fog:0.75,flatShading:false,playArea:1,ground:'hills',groundYScale:5,groundTexture:'walkernoise',groundColor:'#664735',groundColor2:'#6c4b39',dressing:'pyramids',dressingAmount:10,dressingColor:'#7c5c45',dressingScale:5,dressingVariance:{x:20,y:20,z:20},dressingUniformScale:true,dressingOnPlayArea:0,grid:'spots',gridColor:'#e4b676',shadow:false},'checkerboard':{active:true,seed:1,skyType:'gradient',skyColor:'#0d0d0d',horizonColor:'#404040',lighting:'distant',lightPosition:{x:0,y:1,z:-0.2},fog:0.81,flatShading:true,playArea:1,ground:'hills',groundYScale:4.81,groundTexture:'checkerboard',groundColor:'#252525',groundColor2:'#111111',dressing:'cubes',dressingAmount:10,dressingColor:'#9f9f9f',dressingScale:1.51,dressingVariance:{x:5,y:20,z:5},dressingUniformScale:true,dressingOnPlayArea:0,grid:'dots',gridColor:'#ccc',shadow:false},'forest':{active:true,seed:8,skyType:'gradient',skyColor:'#24b59f',horizonColor:'#eff9b7',lighting:'distant',lightPosition:{x:-1.2,y:0.88,z:-0.55},fog:0.8,flatShading:false,playArea:1,ground:'noise',groundYScale:4.18,groundTexture:'squares',groundColor:'#937a24',groundColor2:'#987d2e',dressing:'trees',dressingAmount:500,dressingColor:'#888b1d',dressingScale:1,dressingVariance:{x:10,y:10,z:10},dressingUniformScale:true,dressingOnPlayArea:0,grid:'none',gridColor:'#c5a543',shadow:false},'goaland':{active:true,seed:17,skyType:'gradient',skyColor:'#14645f',horizonColor:'#a3dab8',lighting:'point',lightPosition:{x:0.1,y:4,z:0.56},fog:0.73,flatShading:false,playArea:1,ground:'noise',groundYScale:0.81,groundTexture:'none',groundColor:'#ae3241',groundColor2:'#db4453',dressing:'mushrooms',dressingAmount:150,dressingColor:'#a9313d',dressingScale:5,dressingVariance:{x:5,y:10,z:5},dressingUniformScale:true,dressingOnPlayArea:0,grid:'dots',gridColor:'#239893',shadow:false},'yavapai':{active:true,seed:11,skyType:'gradient',skyColor:'#239849',horizonColor:'#cfe0af',lighting:'distant',lightPosition:{x:0.5,y:1,z:0},fog:0.8,flatShading:true,playArea:1,ground:'canyon',groundYScale:9.76,groundTexture:'walkernoise',groundColor:'#C66344',groundColor2:'#c96b4b',dressing:'stones',dressingAmount:500,dressingColor:'#C66344',dressingScale:0.06,dressingVariance:{x:0.2,y:0.1,z:0.2},dressingUniformScale:true,dressingOnPlayArea:1,grid:'none',gridColor:'#239893',shadow:false},'goldmine':{active:true,seed:53,skyType:'gradient',skyColor:'#1e1c1a',horizonColor:'#8c7964',lighting:'point',lightPosition:{x:-0.09,y:3,z:0.33},fog:0.43,flatShading:true,playArea:1.08,ground:'canyon',groundYScale:50,groundTexture:'none',groundColor:'#353535',groundColor2:'#454545',dressing:'hexagons',dressingAmount:300,dressingColor:'#fe921b',dressingScale:0.5,dressingVariance:{x:2,y:8,z:2},dressingUniformScale:true,dressingOnPlayArea:0.03,grid:'none',gridColor:'#ccc',shadow:false},'threetowers':{active:true,seed:5,skyType:'gradient',skyColor:'#23a06b',horizonColor:'#f5e170',lighting:'distant',lightPosition:{x:0.5,y:1,z:0},fog:0.8,flatShading:false,playArea:1,ground:'spikes',groundYScale:4.26,groundTexture:'walkernoise',groundColor:'#273a49',groundColor2:'#2b464f',dressing:'towers',dressingAmount:3,dressingColor:'#5f6d94',dressingScale:50,dressingVariance:{x:10,y:100,z:10},dressingUniformScale:true,dressingOnPlayArea:0,grid:'none',gridColor:'#239893',shadow:false},'poison':{active:true,seed:92,skyType:'gradient',skyColor:'#1ea84a',horizonColor:'#177132',lighting:'distant',lightPosition:{x:0.5,y:1,z:0},fog:0.8,flatShading:false,playArea:1,ground:'canyon',groundYScale:9.76,groundTexture:'none',groundColor:'#851f31',groundColor2:'#912235',dressing:'hexagons',dressingAmount:20,dressingColor:'#c7415b',dressingScale:20,dressingVariance:{x:20,y:200,z:20},dressingUniformScale:false,dressingOnPlayArea:0,grid:'crosses',gridColor:'#1ea84a',shadow:false},'arches':{active:true,seed:19,skyType:'atmosphere',skyColor:'#8cbdc8',horizonColor:'#ddd',lighting:'distant',lightPosition:{x:-0.11,y:0.16,z:0.33},fog:0.67,flatShading:true,playArea:1,ground:'canyon',groundYScale:10,groundTexture:'walkernoise',groundColor:'#a87d6f',groundColor2:'#795449',dressing:'arches',dressingAmount:6,dressingColor:'#795449',dressingScale:26,dressingVariance:{x:20,y:40,z:20},dressingUniformScale:true,dressingOnPlayArea:0.04,grid:'none',gridColor:'#ccc',shadow:false},'tron':{active:true,seed:14,skyType:'gradient',skyColor:'#091b39',horizonColor:'#284a9e',lighting:'distant',lightPosition:{x:-0.72,y:0.62,z:0.4},fog:0.8,flatShading:false,playArea:1,ground:'spikes',groundYScale:4.91,groundTexture:'none',groundColor:'#061123',groundColor2:'#694439',dressing:'towers',dressingAmount:5,dressingColor:'#fb000e',dressingScale:15,dressingVariance:{x:20,y:20,z:20},dressingUniformScale:true,dressingOnPlayArea:0,grid:'1x1',gridColor:'#fb000e',shadow:false},'japan':{active:true,seed:14,skyType:'gradient',skyColor:'#7e5db5',horizonColor:'#b4adda',lighting:'distant',lightPosition:{x:1.33,y:1,z:0.24},fog:0.9,flatShading:false,playArea:1,ground:'hills',groundYScale:25,groundTexture:'walkernoise',groundColor:'#7e5db5',groundColor2:'#cabdf5',dressing:'torii',dressingAmount:4,dressingColor:'#bc5e7c',dressingScale:15,dressingVariance:{x:0,y:0,z:0},dressingUniformScale:true,dressingOnPlayArea:0,grid:'spots',gridColor:'#e4b676',shadow:false},'dream':{active:true,seed:17,skyType:'gradient',skyColor:'#87faf4',horizonColor:'#b34093',lighting:'distant',lightPosition:{x:-0.72,y:0.53,z:0.97},fog:0.8,flatShading:false,playArea:1,ground:'hills',groundYScale:20,groundTexture:'checkerboard',groundColor:'#b34093',groundColor2:'#c050a2',dressing:'mushrooms',dressingAmount:300,dressingColor:'#3cf7ed',dressingScale:0.2,dressingVariance:{x:0.2,y:0.2,z:0.2},dressingUniformScale:true,dressingOnPlayArea:1,grid:'none',gridColor:'#239893',shadow:false},'volcano':{active:true,seed:92,skyType:'gradient',skyColor:'#4a070f',horizonColor:'#f62300',lighting:'point',lightPosition:{x:0.5,y:2.25,z:0},fog:0.87,flatShading:false,playArea:1,ground:'canyon',groundYScale:9.76,groundTexture:'walkernoise',groundColor:'#fb0803',groundColor2:'#510000',dressing:'arches',dressingAmount:15,dressingColor:'#fb0803',dressingScale:3,dressingVariance:{x:10,y:100,z:10},dressingUniformScale:false,dressingOnPlayArea:0.2,grid:'none',gridColor:'#fa0e00',shadow:false},'starry':{active:true,seed:1,skyType:'atmosphere',skyColor:'#88c',horizonColor:'#ddd',lighting:'distant',lightPosition:{x:0,y:-0.01,z:-0.46},fog:0.7,flatShading:false,playArea:1,ground:'hills',groundYScale:3,groundTexture:'none',groundColor:'#553e35',groundColor2:'#694439',dressing:'none',dressingAmount:100,dressingColor:'#795449',dressingScale:5,dressingVariance:{x:1,y:1,z:1},dressingUniformScale:true,grid:'1x1',dressingOnPlayArea:0,gridColor:'#39d2f2',shadow:false},'osiris':{active:true,seed:46,skyType:'atmosphere',skyColor:'#88c',horizonColor:'#ddd',lighting:'distant',lightPosition:{x:0,y:0.02,z:-0.46},fog:0,flatShading:false,playArea:1,ground:'hills',groundYScale:3,groundTexture:'none',groundColor:'#9e7b47',groundColor2:'#9e7b47',dressing:'pyramids',dressingAmount:7,dressingColor:'#9e7b47',dressingScale:5,dressingVariance:{x:30,y:30,z:30},dressingUniformScale:true,grid:'dots',dressingOnPlayArea:0,gridColor:'#daa452',shadow:false}},init:function(){// stage ground diameter (and sky radius)
this.STAGE_SIZE=200;// data for dressing meshes
this.assets={'arches':[{type:'mesh',vertices:[409,268,4,351,228,36,336,236,-57,-152,391,69,-135,358,88,-119,330,43,-20,358,-35,-153,357,-47,37,413,-26,-20,411,-14,-302,148,154,-339,121,-126,-389,200,-88,-477,193,-76,-314,346,-19,-314,306,-30,-250,296,-73,-267,237,-82,-212,303,-68,-245,200,-67,-223,304,108,-329,299,107,-289,350,76,-320,342,69,119,373,-39,38,370,8,113,367,52,492,202,-31,462,83,-104,447,71,-80,426,112,25,482,189,-7,222,372,6,121,402,41,87,382,67,221,346,55,559,93,-13,528,47,39,505,21,-111,528,54,-101,616,31,-53,442,256,-15,300,338,19,257,308,-79,408,256,-74,312,352,-26,384,297,-31,437,257,-47,-29,415,53,-232,377,59,-139,335,77,-132,344,2,-18,377,-37,-171,387,-28,-254,384,18,-651,-27,27,-435,-28,179,-345,149,165,-272,-28,23,-215,146,-2,-279,-29,-59,-211,145,-55,-337,-28,-128,-413,247,0,-293,363,24,-214,254,-36,-164,290,33,-284,150,94,-218,362,105,75,369,29,518,147,-63,447,190,-70,445,56,-105,391,185,-60,431,49,-33,459,83,26,470,162,42,130,390,53,167,341,-30,125,394,-45,239,368,-17,91,414,10,450,18,2,449,-27,-9,436,-28,-58,496,-27,-110,582,-28,-140,647,-27,-56,325,325,-45,-307,297,-56,-647,-28,-45,-188,310,-54,-264,197,113,-367,175,139,8,387,82,426,45,-55,114,359,-28,500,27,44,461,-29,13,-512,-27,-151,-152,376,-38,-490,-28,148,12,370,-28,442,160,42,465,194,32,381,183,-33,649,-27,-34,444,16,29,616,-28,25,417,267,-66,-132,352,-34,-322,-27,130,-271,86,-115,-635,-28,-121,-291,203,-99,176,405,-10,561,52,-93,371,305,9,311,237,-22,377,200,-81,-129,406,46,-154,371,99,-82,361,71,-21,354,26,-91,363,-27,-165,413,-12,-414,215,110,-238,127,26,-408,-28,-128,-674,-28,-94,-446,232,-39,-311,226,-90,-255,210,-61,-235,192,-11,-217,218,58,-269,299,124,-386,276,78,-399,281,42,15,373,58,16,393,75,549,107,-46,481,188,-68,409,120,-41,541,81,12,230,368,41,194,350,-50,224,361,-50,604,-28,-10,602,-27,35,486,56,-121,502,69,-120,457,-27,-110,226,317,-40,-584,-28,-124,439,-26,-30,467,-26,39,547,-27,-146,21,368,14,466,229,-29,578,-27,44,609,-27,-96,291,356,-15,290,306,34,255,321,28,231,311,-5,-251,386,50,-183,307,87,-152,307,24,-264,373,-12,-392,-27,190,-333,-28,84,-281,-27,54,-270,-28,-23,-308,-28,-101,-687,-27,-59,39,418,39,413,163,25,404,206,-90,54,400,-31,121,352,8,-454,41,148,-426,9,182,-564,115,3,-427,27,-107,-548,118,-32,-556,122,-53,-517,91,-101,-475,54,140,-461,52,-134,-558,119,-71,-434,286,59,-687,-31,52,-595,146,22,-670,-28,164,-537,166,122,-575,-28,217,-566,159,65,-470,152,136,-712,-29,102,-639,-29,211,-532,-30,181,-442,-30,-100],faces:[76,104,162,1,176,103,103,76,1,2,119,73,73,105,2,2,118,152,45,161,46,46,109,45,3,120,49,49,68,3,3,121,139,139,48,3,4,122,94,94,121,4,6,123,124,9,175,81,10,169,111,10,67,92,88,43,146,11,131,114,11,128,183,13,130,15,90,184,174,90,182,184,130,184,63,14,130,63,15,130,14,16,131,12,15,168,53,18,91,17,131,16,17,65,133,132,65,132,91,67,134,166,166,92,67,20,135,92,20,166,4,4,121,20,22,135,68,25,102,96,25,157,102,69,138,157,69,157,25,39,150,71,71,141,39,28,150,149,149,72,28,142,176,105,36,140,27,27,143,36,32,115,81,32,144,161,161,80,32,77,35,144,34,26,77,78,179,96,145,152,78,178,79,145,80,146,79,147,140,36,143,108,36,143,37,148,74,95,154,154,83,74,72,149,151,151,95,72,38,150,156,40,147,106,70,140,40,40,116,70,42,162,0,35,163,162,43,145,146,46,117,41,47,158,27,48,139,175,122,138,94,157,138,123,52,178,102,52,102,6,52,124,7,7,100,52,53,125,8,57,93,181,56,169,181,59,127,58,60,173,61,62,128,11,11,112,62,65,91,167,65,167,66,126,93,21,22,68,49,72,95,29,142,29,74,74,82,142,75,107,97,75,97,103,76,97,37,104,143,31,78,152,164,78,164,179,79,178,8,97,155,159,107,98,155,83,98,82,154,95,84,39,116,86,86,156,39,87,160,116,24,145,96,162,104,0,105,118,2,43,177,119,44,177,43,91,51,167,44,88,109,46,161,117,3,68,121,3,48,120,4,166,50,50,122,4,5,123,122,123,138,122,110,124,51,170,10,111,110,91,7,7,124,110,8,125,9,9,81,8,186,12,188,92,135,10,11,114,112,64,63,137,13,15,89,89,53,100,64,168,14,14,168,15,89,100,16,16,12,89,100,18,16,17,91,132,112,19,61,18,7,91,19,17,132,133,127,59,133,59,61,136,21,22,134,127,133,20,92,166,121,135,20,158,31,27,21,135,22,23,137,136,24,102,178,178,145,24,25,179,69,26,94,138,27,140,70,27,70,141,150,177,71,28,177,150,29,142,73,73,119,29,142,82,30,30,176,142,107,75,82,31,143,27,33,81,175,31,41,104,115,79,8,32,33,144,80,115,32,33,175,139,35,162,42,77,139,34,163,26,179,163,179,164,78,96,145,177,29,119,108,143,148,148,37,159,97,159,37,74,83,82,38,149,150,156,150,39,40,106,87,87,116,40,140,147,40,161,144,42,42,117,161,41,0,104,41,117,0,0,117,42,164,118,163,1,163,118,118,176,1,118,105,176,152,118,164,43,152,145,43,119,2,71,109,141,47,41,158,44,71,177,45,109,88,45,88,146,46,47,109,141,47,27,167,50,166,49,120,165,139,121,94,5,122,50,123,51,124,157,6,102,157,123,6,100,8,178,5,167,51,6,124,52,100,178,52,53,168,125,125,165,120,54,125,168,9,48,175,120,9,125,93,10,135,181,101,56,57,169,10,59,172,61,67,170,171,67,171,127,58,127,171,129,186,113,60,61,172,61,173,112,62,112,173,174,189,129,165,64,23,64,137,23,165,22,49,64,54,168,17,114,131,17,112,114,66,133,65,19,132,133,19,133,61,134,133,66,166,134,66,166,66,167,93,135,21,68,135,121,23,136,22,94,34,139,25,96,179,26,138,69,69,179,26,30,103,176,116,141,70,39,141,116,73,142,105,143,76,37,26,35,77,103,97,76,77,144,33,33,139,77,38,151,149,80,161,45,80,45,146,81,115,8,107,155,97,82,98,107,95,151,84,38,156,85,86,116,160,96,102,24,72,29,28,29,95,74,75,30,82,108,147,36,88,44,43,91,110,51,170,67,10,11,183,131,64,14,63,89,15,53,100,7,18,112,17,19,127,134,67,136,126,21,158,41,31,33,32,81,115,80,79,177,28,29,43,2,152,71,44,109,47,46,41,141,109,47,167,5,50,123,5,51,100,53,8,125,54,165,9,120,48,93,57,10,59,58,172,174,185,189,165,54,64,165,23,22,94,26,34,30,75,103,143,104,76,26,163,35,38,85,151,192,182,191,183,128,201,12,13,89,181,169,57,186,153,113,188,183,99,184,182,63,185,13,189,180,181,93,186,99,153,189,186,129,185,184,130,186,13,12,187,93,126,193,199,194,194,196,193,200,187,195,187,197,195,187,126,197,197,190,194,190,136,137,190,196,194,63,182,192,63,192,196,192,198,196,191,182,55,193,196,198,194,199,197,195,197,199,136,197,126,190,137,63,190,63,196,197,136,190,192,191,198,201,99,183,90,55,182,181,180,101,185,130,13,186,188,99,186,189,13,187,180,93,200,101,187,183,188,131,184,185,174,180,187,101,16,18,17,12,131,188,35,42,144,163,1,162,76,162,1,79,146,145]}],'stones':[{type:'mesh',vertices:[-376,189,42,230,223,-310,353,162,-62,414,-23,-67,256,90,-475,24,85,-526,-418,-16,57,-432,66,-40,-199,151,-376,-155,49,467,-91,289,201,293,197,91,81,-17,-480,42,108,431,-359,-17,-250,383,-19,-243,194,-15,270,-272,180,293,-86,212,262,234,54,297,395,97,-302,-123,-21,-444,-416,-19,-123,-323,-18,267,-100,-16,429,-300,96,-361,163,-19,409,118,201,-431,-241,-18,391,-130,274,-309,306,-19,-399,-221,96,404],faces:[31,18,17,0,17,18,3,20,2,18,11,10,29,27,8,27,29,1,0,18,10,10,29,0,16,19,26,11,2,1,20,30,4,20,3,15,30,12,4,4,12,5,5,27,4,4,27,20,21,25,5,7,8,25,22,7,14,7,25,14,23,28,31,0,7,17,24,26,9,31,28,9,8,27,5,2,20,1,13,19,18,10,11,1,19,13,26,3,11,19,19,16,3,11,3,2,11,18,19,20,15,30,29,10,1,25,21,14,8,5,25,5,12,21,6,7,22,7,6,23,8,0,29,8,7,0,23,31,7,13,31,9,18,31,13,9,28,24,26,13,9,27,1,20,7,31,17]},{type:'mesh',vertices:[-217,34,-153,198,90,20,212,85,169,-131,93,171,197,113,30,173,121,164,315,29,-16,219,24,189,282,50,-102,232,38,-181,-195,-9,-166,-156,30,-207,-51,-9,-231,-180,91,-173,-19,73,-204,-280,23,96,-242,100,107,3,158,-82,109,88,221,275,-10,-40,236,-10,-135,-178,49,184,-1,-10,-243,265,-11,109,-12,-9,237,-36,46,251,-233,86,-81,93,77,-171,-163,133,69,18,16,263,296,44,93,131,-12,-226,-89,-10,-201,-273,-10,-51,-240,-9,110,190,-12,192,-253,-11,-92,42,43,-258,-115,-11,238,168,99,-88,-285,-10,24,71,124,-158,298,-10,10,116,150,-24,-282,44,39],faces:[44,16,26,13,26,16,0,26,13,27,14,41,4,5,1,7,30,2,28,5,43,41,39,27,17,43,41,43,4,39,13,28,17,17,41,13,28,43,17,24,29,38,29,35,7,18,25,29,5,18,2,18,5,3,30,42,6,30,35,23,19,20,8,8,20,9,9,39,8,1,30,8,31,37,9,11,14,37,14,27,37,32,11,12,11,37,12,11,0,13,33,40,44,44,26,33,33,0,36,34,38,15,44,40,15,21,3,16,27,39,9,2,30,1,21,25,3,16,3,28,28,3,5,4,43,5,41,43,39,13,16,28,25,21,38,38,29,25,7,18,29,29,24,35,18,7,2,18,3,25,30,23,42,30,7,35,8,30,6,6,19,8,6,42,19,8,39,1,37,31,22,27,9,37,9,20,31,10,11,32,11,10,0,12,37,22,14,13,41,14,11,13,33,26,0,36,0,10,21,44,15,16,44,21,15,40,34,38,21,15,4,1,39,5,2,1]},{type:'mesh',vertices:[-101,102,57,99,35,102,40,72,80,59,14,-168,-186,22,45,-176,25,-30,66,-7,146,153,-7,53,-110,47,-96,-90,-8,-146,150,-7,-12,-200,-7,8,-173,-7,-55,55,46,-60,125,-7,110,136,30,-10,-149,58,68,-15,82,-71,98,-7,-86,-34,-6,-194,-33,-7,171,-36,65,137,38,-8,-192,-103,-9,147,-12,62,-152],faces:[2,17,0,17,8,0,17,24,8,19,24,22,5,11,4,2,13,17,17,13,24,21,23,20,1,2,21,7,15,1,7,10,15,5,9,12,15,18,13,0,5,16,0,8,5,1,15,2,10,18,15,3,13,18,24,3,22,11,23,4,4,16,5,16,4,23,24,13,3,15,13,2,6,1,21,6,21,20,6,14,1,2,0,21,1,14,7,3,18,22,8,24,19,8,19,9,12,11,5,5,8,9,16,23,21,16,21,0]},{type:'mesh',vertices:[86,55,-18,58,38,73,97,-12,79,135,7,10,-93,-11,-72,-133,5,33,13,68,-32,94,-11,-57,-90,52,53,-24,-11,-106,-13,-10,104,-75,49,-69,-12,18,114,49,-12,-96,-46,-11,-85,-119,-11,-26,48,5,-111,-58,-11,105,-117,-12,52,-5,35,-93,123,-11,7],faces:[5,8,11,2,3,1,8,1,6,11,8,6,6,19,11,10,12,17,20,7,3,3,7,16,16,0,3,16,9,19,14,4,9,15,18,5,5,11,15,18,17,5,19,0,16,1,3,0,0,6,1,19,6,0,12,8,17,2,1,12,12,10,2,1,8,12,3,2,20,16,13,9,16,7,13,19,4,11,15,11,4,17,8,5,9,4,19]}],'torii':[{type:'mesh',mirror:true,flatShading:true,vertices:[692,966,-52,661,834,-52,692,966,52,661,834,52,0,894,-52,0,776,-52,0,894,52,0,776,52,518,935,52,345,913,52,170,899,52,162,779,52,328,790,52,494,808,52,170,899,-52,345,913,-52,518,935,-52,494,808,-52,328,790,-52,162,779,-52,0,618,16,0,697,16,0,618,-16,0,697,-16,586,618,16,586,697,16,586,618,-16,586,697,-16,331,-29,-75,331,766,-52,369,-29,-65,357,766,-45,396,-29,-37,377,766,-26,406,-29,0,384,766,0,396,-29,37,377,766,26,369,-29,65,357,766,45,331,-29,75,331,766,52,294,-29,65,305,766,45,267,-29,37,286,766,26,257,-29,0,279,766,0,267,-29,-37,286,766,-26,294,-29,-65,305,766,-45,0,777,85,0,681,33,333,762,-75,333,806,-75,371,762,-65,371,806,-65,398,762,-37,398,806,-37,408,762,0,408,806,0,398,762,37,398,806,37,371,762,65,371,806,65,333,762,75,333,806,75,296,762,65,296,806,65,268,762,37,268,806,37,258,762,0,258,806,0,268,762,-37,268,806,-37,296,762,-65,296,806,-65,0,681,-33,0,777,-85,52,681,33,52,777,85,52,681,-33,52,777,-85],faces:[4,10,14,1,13,17,11,6,7,0,3,1,16,1,17,4,19,5,14,18,19,15,17,18,3,8,13,13,9,12,12,10,11,19,7,5,19,12,11,18,13,12,16,2,0,15,8,16,14,9,15,23,26,22,27,24,26,25,20,24,26,20,22,23,25,27,29,30,28,31,32,30,33,34,32,35,36,34,37,38,36,39,40,38,41,42,40,43,44,42,45,46,44,47,48,46,49,50,48,51,28,50,55,56,54,57,58,56,59,60,58,61,62,60,63,64,62,79,81,83,65,66,64,82,53,78,67,68,66,81,53,80,69,70,68,83,80,82,71,72,70,79,82,78,73,74,72,75,63,59,75,76,74,77,54,76,60,68,76,4,6,10,1,3,13,11,10,6,0,2,3,16,0,1,4,14,19,14,15,18,15,16,17,3,2,8,13,8,9,12,9,10,19,11,7,19,18,12,18,17,13,16,8,2,15,9,8,14,10,9,23,27,26,27,25,24,25,21,20,26,24,20,23,21,25,29,31,30,31,33,32,33,35,34,35,37,36,37,39,38,39,41,40,41,43,42,43,45,44,45,47,46,47,49,48,49,51,50,51,29,28,55,57,56,57,59,58,59,61,60,61,63,62,63,65,64,79,52,81,65,67,66,82,80,53,67,69,68,81,52,53,69,71,70,83,81,80,71,73,72,79,83,82,73,75,74,59,57,55,55,77,75,75,73,71,71,69,75,67,65,63,63,61,59,59,55,75,75,69,67,67,63,75,75,77,76,77,55,54,76,54,56,56,58,76,60,62,68,64,66,68,68,70,72,72,74,68,76,58,60,62,64,68,68,74,76]}],'hexagons':[{type:'extrude',vertices:[-0.198,-0.302,0.197,-0.3,0.372,0,0.199,0.298,-0.202,0.298,-0.368,0]}],'towers':[{type:'extrude',vertices:[-0.054,-0.178,-0.007,-0.182,0.069,-0.027,0.189,0.079,0.178,0.124,-0.007,0.097,-0.145,0.182,-0.178,0.144,-0.079,-0.021]},{type:'lathe',segments:4,vertices:[0.004,0.02,0.012,0.092,0.042,0.166,0.067,0.55,0.101,0.594,0.105,0.838,0.193,0.934,0.18,0.994]},{type:'lathe',segments:5,vertices:[0.069,0.216,0.067,0.562,0.126,0.562,0.128,0.774,0.191,0.774,0.193,0.986]}],'trees':[{type:'lathe',noise:0.015,segments:6,vertices:[0.000001,0.826,0.054,0.832,0.105,0.854,0.136,0.9,0.136,0.958,0.118,0.994]},{type:'lathe',noise:0.015,segments:14,vertices:[0.000001,0.01,0.069,0.022,0.13,0.068,0.178,0.18,0.189,0.32,0.191,0.59,0.193,0.75,0.138,0.79,0.018,0.808,0.018,0.996]},{type:'lathe',noise:0.015,segments:14,vertices:[0.000001,0.436,0.126,0.46,0.201,0.57,0.219,0.72,0.154,0.846,0.028,0.884,0.034,0.996]}],'apparatus':[{type:'lathe',segments:10,vertices:[0.000001,0.23,0.042,0.23,0.069,0.36,0.038,0.362,0.038,0.372,0.06,0.372,0.073,0.572,0.024,0.572,0.024,0.67,0.069,0.67,0.075,0.722,0.097,0.724,0.105,0.852,0.083,0.902,0.065,0.902,0.065,0.924,0.128,0.924,0.146,0.996]},{type:'lathe',segments:16,vertices:[0.000001,0.232,0.229,0.182,0.486,0.07,0.356,0.182,0.213,0.242,0.154,0.242,0.144,0.262,0.178,0.262,0.126,0.314,0.04,0.328,0.038,0.374,0.058,0.374,0.071,0.408,0.026,0.406,0.03,0.42,0.091,0.418,0.034,0.496,0.01,0.498,0.03,0.506,0.014,0.998]}],'mushrooms':[{type:'lathe',noise:0.02,segments:14,vertices:[0.000001,0.006,0.13,0.018,0.341,0.084,0.437,0.144,0.492,0.234,0.484,0.246,0.276,0.232,0.107,0.284,0.046,0.346,0.062,0.852,0.097,0.956,0.166,0.998]},{type:'lathe',noise:0.02,segments:10,vertices:[0.000001,0.562,0.091,0.572,0.172,0.61,0.223,0.666,0.256,0.74,0.258,0.806,0.246,0.824,0.062,0.826,0.065,0.948,0.097,0.998]},{type:'lathe',noise:0.02,segments:10,vertices:[0.000001,0.768,0.099,0.772,0.219,0.802,0.306,0.844,0.352,0.886,0.352,0.908,0.118,0.904,0.107,0.93,0.115,0.966,0.14,0.996]}]};// scale down dressing meshes (coordinates were saved in integers for better compression)
for(var i in this.assets){for(var j=0;j<this.assets[i].length;j++){var asset=this.assets[i][j];if(asset.type!='mesh')continue;for(var v=0,len=asset.vertices.length;v<len;v++){asset.vertices[v]/=1000.0;}}}// save current scene fog
this.userFog=this.el.sceneEl.getAttribute('fog');// create sky
this.sky=document.createElement('a-sky');this.sky.setAttribute('radius',this.STAGE_SIZE);this.sky.setAttribute('theta-length',110);// stars are created when needed
this.stars=null;// create ground
this.groundMaterial=null;this.ground=document.createElement('a-entity');this.ground.setAttribute('rotation','-90 0 0');this.ground.classList.add('environmentGround');this.groundCanvas=null;this.groundTexture=null;this.groundMaterial=null;this.groundGeometry=null;this.dressing=document.createElement('a-entity');this.dressing.classList.add('environmentDressing');this.gridCanvas=null;this.gridTexture=null;// create lights (one ambient hemisphere light, and one directional for the sun)
this.hemilight=document.createElement('a-entity');this.hemilight.setAttribute('position','0 50 0');this.hemilight.setAttribute('light',{type:'hemisphere',color:'#CEE4F0',intensity:0.4});this.sunlight=document.createElement('a-entity');this.sunlight.setAttribute('position',this.data.lightPosition);this.sunlight.setAttribute('light',{intensity:0.6});// add everything to the scene
this.el.appendChild(this.hemilight);this.el.appendChild(this.sunlight);this.el.appendChild(this.ground);this.el.appendChild(this.dressing);this.el.appendChild(this.sky);},// returns a fog color from a specific sky type and sun height
getFogColor:function(skyType,sunHeight){var fogColor;if(skyType=='color'||skyType=='none'){fogColor=new THREE.Color(this.data.skyColor);}else if(skyType=='gradient'){fogColor=new THREE.Color(this.data.horizonColor);}else if(skyType=='atmosphere'){var fogRatios=[1,0.5,0.22,0.1,0.05,0];var fogColors=['#C0CDCF','#81ADC5','#525e62','#2a2d2d','#141616','#000'];if(sunHeight<=0)return'#000';sunHeight=Math.min(1,sunHeight);for(var i=0;i<fogRatios.length;i++){if(sunHeight>fogRatios[i]){var c1=new THREE.Color(fogColors[i-1]);var c2=new THREE.Color(fogColors[i]);var a=(sunHeight-fogRatios[i])/(fogRatios[i-1]-fogRatios[i]);c2.lerp(c1,a);fogColor=c2;break;}}}// dim down the color
fogColor.multiplyScalar(0.9);// mix it a bit with ground color
fogColor.lerp(new THREE.Color(this.data.groundColor),0.3);return'#'+fogColor.getHexString();},update:function(oldData){// preset changed
if(!oldData||oldData.preset===undefined||oldData.preset!==this.data.preset){var newData=Object.assign({},this.presets[this.data.preset]);if(!oldData||oldData.preset===undefined){Object.assign(newData,this.el.components.environment.attrValue);}this.el.setAttribute('environment',newData);if(oldData){return;}else{oldData={};}}var skyType=this.data.skyType;var sunPos=new THREE.Vector3(this.data.lightPosition.x,this.data.lightPosition.y,this.data.lightPosition.z);sunPos.normalize();// update light colors and intensities
if(this.sunlight){this.sunlight.setAttribute('position',this.data.lightPosition);if(skyType!='atmosphere'){// dim down the sky color for the light
var skycol=new THREE.Color(this.data.skyColor);skycol.r=(skycol.r+1.0)/2.0;skycol.g=(skycol.g+1.0)/2.0;skycol.b=(skycol.b+1.0)/2.0;this.hemilight.setAttribute('light',{'color':'#'+skycol.getHexString()});this.sunlight.setAttribute('light',{'intensity':0.6});this.hemilight.setAttribute('light',{'intensity':0.6});}else{this.sunlight.setAttribute('light',{'intensity':0.1+sunPos.y*0.5});this.hemilight.setAttribute('light',{'intensity':0.1+sunPos.y*0.5});}this.sunlight.setAttribute('light',{castShadow:this.data.shadow,shadowCameraLeft:-this.data.shadowSize,shadowCameraBottom:-this.data.shadowSize,shadowCameraRight:this.data.shadowSize,shadowCameraTop:this.data.shadowSize});}// update sky colors
if(skyType!=oldData.skyType||this.data.skyColor!=oldData.skyColor||this.data.horizonColor!=oldData.horizonColor){this.sky.removeAttribute('material');var mat={};mat.shader={'none':'flat','color':'flat','gradient':'gradientshader','atmosphere':'skyshader'}[skyType];if(this.stars){this.stars.setAttribute('visible',skyType=='atmosphere');}if(skyType=='color'){mat.color=this.data.skyColor;mat.fog=false;}else if(skyType=='gradient'){mat.topColor=this.data.skyColor;mat.bottomColor=this.data.horizonColor;}this.sky.setAttribute('material',mat);}// set atmosphere sun position and stars
if(skyType=='atmosphere'){this.sky.setAttribute('material',{'sunPosition':sunPos});this.setStars((1-Math.max(0,(sunPos.y+0.08)*8))*2000);}// // set fog color
// if (this.data.fog > 0) {
//   this.el.sceneEl.setAttribute('fog', {
//     color: this.getFogColor(skyType, sunPos.y),
//     far: (1.01 - this.data.fog) * this.STAGE_SIZE * 2
//   });
// }
// else {
//   this.el.sceneEl.removeAttribute('fog');
// }
// scene lights
if(this.data.lighting!==oldData.lighting){this.sunlight.setAttribute('light',{type:this.data.lighting=='point'?'point':'directional'});this.sunlight.setAttribute('visible',this.data.lighting!=='none');this.hemilight.setAttribute('visible',this.data.lighting!=='none');}// check if ground geometry needs to be calculated
var updateGroundGeometry=!this.groundGeometry||this.data.seed!=oldData.seed||this.data.ground!=oldData.ground||this.data.playArea!=oldData.playArea||this.data.flatShading!=oldData.flatShading;// check if any parameter of the ground was changed, and update it
if(updateGroundGeometry||this.data.groundColor!=oldData.groundColor||this.data.groundColor2!=oldData.groundColor2||this.data.groundYScale!=oldData.groundYScale||this.data.groundTexture!=oldData.groundTexture||this.data.gridColor!=oldData.gridColor||this.data.grid!=oldData.grid){this.updateGround(updateGroundGeometry);// set bounce light color to ground color
if(this.hemilight)this.hemilight.setAttribute('light',{'groundColor':this.data.groundColor});}// update dressing
if(this.data.seed!=oldData.seed||this.data.dressingOnPlayArea!=oldData.dressingOnPlayArea||this.data.dressing!=oldData.dressing||this.data.flatShading!=oldData.flatShading||this.data.dressingAmount!=oldData.dressingAmount||this.data.dressingScale!=oldData.dressingScale||this.data.dressingColor!=oldData.dressingColor||this.data.dressingVariance.x!=oldData.dressingVariance.x||this.data.dressingVariance.y!=oldData.dressingVariance.y||this.data.dressingVariance.z!=oldData.dressingVariance.z||this.data.dressingUniformScale!=oldData.dressingUniformScale){this.updateDressing();}this.sky.setAttribute('visible',skyType!=='none');this.el.setAttribute('visible',this.data.active);if(!this.data.active){if(this.userFog){this.el.sceneEl.setAttribute('fog',this.userFog);}else{this.el.sceneEl.removeAttribute('fog');}}// dump current component settings to console
this.dumpParametersDiff();},// logs current parameters to console, for saving to a preset
logPreset:function(){var str='{';for(var i in this.schema){if(i=='preset')continue;str+=i+': ';var type=this.schema[i].type;if(type=='vec3'){str+='{ x: '+this.data[i].x+', y: '+this.data[i].y+', z: '+this.data[i].z+'}';}else if(type=='string'||type=='color'){str+='"'+this.data[i]+'"';}else{str+=this.data[i];}str+=', ';}str+='}';},// dumps current component settings to console.
dumpParametersDiff:function(){// trim number to 3 decimals
function dec3(v){return Math.floor(v*1000)/1000;}var params=[];var usingPreset=this.data.preset!='none'?this.presets[this.data.preset]:false;if(usingPreset){params.push('preset: '+this.data.preset);}for(var i in this.schema){if(i=='preset'||usingPreset&&usingPreset[i]===undefined){continue;}var def=usingPreset?usingPreset[i]:this.schema[i].default;var data=this.data[i];var type=this.schema[i].type;if(type=='vec3'){var coords=def;if(typeof def=='string'){def=def.split(' ');coords={x:def[0],y:def[1],z:def[2]};}if(dec3(coords.x)!=dec3(data.x)||dec3(coords.y)!=dec3(data.y)||dec3(coords.z)!=dec3(data.z)){params.push(i+': '+dec3(data.x)+' '+dec3(data.y)+' '+dec3(data.z));}}else{if(def!=data){if(this.schema[i].type=='number'){data=dec3(data);}params.push(i+': '+data);}}}},// Custom Math.random() with seed. Given this.data.seed and x, it always returns the same "random" number
random:function(x){return parseFloat('0.'+Math.sin(this.data.seed*9999*x).toString().substr(7));},// updates ground attributes, and geometry if required
updateGround:function(updateGeometry){var resolution=64;// number of divisions of the ground mesh
if(updateGeometry){var visibleground=this.data.ground!='none';this.ground.setAttribute('visible',visibleground);if(!visibleground){return;}if(!this.groundGeometry){this.groundGeometry=new THREE.PlaneGeometry(this.STAGE_SIZE+2,this.STAGE_SIZE+2,resolution-1,resolution-1);}var perlin=new PerlinNoise();var verts=this.groundGeometry.vertices;var numVerts=this.groundGeometry.vertices.length;var frequency=10;var inc=frequency/resolution;for(var i=0,x=0,y=0;i<numVerts;i++){if(this.data.ground=='flat'){verts[i].z=0;continue;}var h;switch(this.data.ground){case'hills':{h=Math.max(0,perlin.noise(x,y,0));break;}case'canyon':{h=0.2+perlin.noise(x,y,0)*0.8;h=Math.min(1,Math.pow(h,2)*10);break;}case'spikes':{h=this.random(i)<0.02?this.random(i+1):0;break;}case'noise':{h=this.random(i)<0.35?this.random(i+1):0;break;}}h+=this.random(i+2)*0.1;// add some randomness
// flat ground in the center
var xx=x*2/frequency-1;var yy=y*2/frequency-1;var pa=this.data.playArea;xx=Math.max(0,Math.min(1,(Math.abs(xx)-(pa-0.9))*(1/pa)));yy=Math.max(0,Math.min(1,(Math.abs(yy)-(pa-0.9))*(1/pa)));h*=xx>yy?xx:yy;// set height
verts[i].z=h;// calculate next x,y ground coordinates
x+=inc;if(x>=10){x=0;y+=inc;}}this.groundGeometry.computeFaceNormals();if(this.data.flatShading){this.groundGeometry.computeFlatVertexNormals();}else{this.groundGeometry.computeVertexNormals();}this.groundGeometry.verticesNeedUpdate=true;this.groundGeometry.normalsNeedUpdate=true;}// apply Y scale. There's no need to recalculate the geometry for this. Just change scale
this.ground.setAttribute('scale',{z:this.data.groundYScale});// update ground, playarea and grid textures.
var groundResolution=2048;var texMeters=20;// ground texture of 20 x 20 meters
var texRepeat=this.STAGE_SIZE/texMeters;if(!this.groundCanvas||this.groundCanvas.width!=groundResolution){this.gridCanvas=document.createElement('canvas');this.gridCanvas.width=groundResolution;this.gridCanvas.height=groundResolution;this.gridTexture=new THREE.Texture(this.gridCanvas);this.gridTexture.wrapS=THREE.RepeatWrapping;this.gridTexture.wrapT=THREE.RepeatWrapping;this.gridTexture.repeat.set(texRepeat,texRepeat);this.groundCanvas=document.createElement('canvas');this.groundCanvas.width=groundResolution;this.groundCanvas.height=groundResolution;this.groundTexture=new THREE.Texture(this.groundCanvas);this.groundTexture.wrapS=THREE.RepeatWrapping;this.groundTexture.wrapT=THREE.RepeatWrapping;this.groundTexture.repeat.set(texRepeat,texRepeat);// ground material diffuse map is the regular ground texture and the grid texture
// is used in the emissive map. This way, the grid is always equally visible, even at night.
this.groundMaterial=new THREE.MeshLambertMaterial({map:this.groundTexture,emissive:new THREE.Color(0xFFFFFF),emissiveMap:this.gridTexture,flatShading:this.data.flatShading?THREE.FlatShading:THREE.SmoothShading});}var groundctx=this.groundCanvas.getContext('2d');var gridctx=this.gridCanvas.getContext('2d');this.drawTexture(groundctx,groundResolution,texMeters);gridctx.fillStyle='#000000';gridctx.fillRect(0,0,groundResolution,groundResolution);this.drawGrid(gridctx,groundResolution,texMeters);this.groundTexture.needsUpdate=true;this.gridTexture.needsUpdate=true;if(updateGeometry){var mesh=new THREE.Mesh(this.groundGeometry,this.groundMaterial);this.ground.setObject3D('mesh',mesh);}else{this.ground.getObject3D('mesh').material=this.groundMaterial;}this.ground.setAttribute('shadow',{cast:false,receive:this.data.shadow});},// draw grid to a canvas context
drawGrid:function(ctx,size,texMeters){if(this.data.grid=='none')return;// one grid feature each 2 meters
var num=Math.floor(texMeters/2);var step=size/(texMeters/2);// 2 meters == <step> pixels
var i,j,ii;ctx.fillStyle=this.data.gridColor;switch(this.data.grid){case'1x1':case'2x2':{if(this.data.grid=='1x1'){num=num*2;step=size/texMeters;}for(i=0;i<num;i++){ii=Math.floor(i*step);ctx.fillRect(0,ii,size,1);ctx.fillRect(ii,0,1,size);}break;}case'crosses':{var l=Math.floor(step/20);for(i=0;i<num+1;i++){ii=Math.floor(i*step);for(j=0;j<num+1;j++){var jj=Math.floor(-l+j*step);ctx.fillRect(jj,ii,l*2,1);ctx.fillRect(ii,jj,1,l*2);}}break;}case'dots':{for(i=0;i<num+1;i++){for(j=0;j<num+1;j++){ctx.beginPath();ctx.arc(Math.floor(j*step),Math.floor(i*step),4,0,Math.PI*2);ctx.fill();}}break;}case'xlines':{for(i=0;i<num;i++){ctx.fillRect(Math.floor(i*step),0,1,size);}break;}case'ylines':{for(i=0;i<num;i++){ctx.fillRect(0,Math.floor(i*step),size,1);}break;}}},// draw ground texture to a canvas context
drawTexture:function(ctx,size,texMeters){// fill all with ground Color
ctx.fillStyle=this.data.groundColor;ctx.fillRect(0,0,size,size);var i,col,col1,col2,im,imdata,numpixels;if(this.data.groundTexture=='none')return;switch(this.data.groundTexture){case'checkerboard':{ctx.fillStyle=this.data.groundColor2;var num=Math.floor(texMeters/2);var step=size/(texMeters/2);// 2 meters == <step> pixels
for(i=0;i<num+1;i+=2){for(var j=0;j<num+1;j++){ctx.fillRect(Math.floor((i+j%2)*step),Math.floor(j*step),Math.floor(step),Math.floor(step));}}break;}case'squares':{var numSquares=16;var squareSize=size/numSquares;col1=new THREE.Color(this.data.groundColor);col2=new THREE.Color(this.data.groundColor2);for(i=0;i<numSquares*numSquares;i++){col=this.random(i+3)>0.5?col1.clone():col2.clone();col.addScalar(this.random(i+3)*0.1-0.05);ctx.fillStyle='#'+col.getHexString();ctx.fillRect(i%numSquares*squareSize,Math.floor(i/numSquares)*squareSize,squareSize,squareSize);}break;}case'noise':{// TODO: fix
imdata=ctx.getImageData(0,0,size,size);im=imdata.data;col1=new THREE.Color(this.data.groundColor);col2=new THREE.Color(this.data.groundColor2);var diff=new THREE.Color(col2.r-col1.r,col2.g-col1.g,col2.b-col1.b);var perlin=new PerlinNoise();for(i=0,j=0,numpixels=im.length;i<numpixels;i+=4,j++){//console.log( (j % size) / size, j / size)
var rnd=perlin.noise(j%size/size*3,j/size/size*3,0);im[i+0]=Math.floor((col1.r+diff.r*rnd)*255);im[i+1]=Math.floor((col1.g+diff.g*rnd)*255);im[i+2]=Math.floor((col1.b+diff.b*rnd)*255);}ctx.putImageData(imdata,0,0);break;}case'walkernoise':{var s=Math.floor(size/2);var tex=document.createElement('canvas');tex.width=s;tex.height=s;var texctx=tex.getContext('2d');texctx.fillStyle=this.data.groundColor;texctx.fillRect(0,0,s,s);imdata=texctx.getImageData(0,0,s,s);im=imdata.data;col1=new THREE.Color(this.data.groundColor);col2=new THREE.Color(this.data.groundColor2);var walkers=[];var numwalkers=1000;for(i=0;i<numwalkers;i++){col=col1.clone().lerp(col2,Math.random());walkers.push({x:Math.random()*s,y:Math.random()*s,r:Math.floor(col.r*255),g:Math.floor(col.g*255),b:Math.floor(col.b*255)});}var iterations=5000;for(var it=0;it<iterations;it++){for(i=0;i<numwalkers;i++){var walker=walkers[i];var pos=Math.floor(walker.y*s+walker.x)*4;im[pos+0]=walker.r;im[pos+1]=walker.g;im[pos+2]=walker.b;walker.x+=Math.floor(Math.random()*3)-1;walker.y+=Math.floor(Math.random()*3)-1;if(walker.x>=s)walker.x=walker.x-s;if(walker.y>=s)walker.y=walker.y-s;if(walker.x<0)walker.x=s+walker.x;if(walker.y<0)walker.y=s+walker.y;}}texctx.putImageData(imdata,0,0);ctx.drawImage(tex,0,0,size,size);break;}}},// returns an array of THREE.Geometry for set dressing
getAssetGeometry:function(data){if(!data)return null;var geoset=[];var self=this;function applyNoise(geo,noise){var n=new THREE.Vector3();for(var i=0,numVerts=geo.vertices.length;i<numVerts;i++){n.x=(self.random(i)-0.5)*noise;n.y=(self.random(i+numVerts)-0.5)*noise;n.z=(self.random(i+numVerts*2)-0.5)*noise;geo.vertices[i].add(n);}}var i,geo,verts;for(var j=0;j<data.length;j++){if(data[j].type=='lathe'){var maxy=-99999;var points=[];verts=data[j].vertices;for(i=0;i<verts.length;i+=2){points.push(new THREE.Vector2(verts[i],verts[i+1]));if(verts[i+1]>maxy){maxy=verts[i+1];}}geo=new THREE.LatheGeometry(points,data[j]['segments']||8);geo.applyMatrix(new THREE.Matrix4().makeRotationFromEuler(new THREE.Euler(-Math.PI,0,0)));geo.applyMatrix(new THREE.Matrix4().makeTranslation(0,maxy,0));if(data[j]['noise'])applyNoise(geo,data[j].noise);geoset.push(geo);}else if(data[j].type=='extrude'){var shape=new THREE.Shape();verts=data[j].vertices;for(i=0;i<verts.length;i+=2){if(i==0)shape.moveTo(verts[i],verts[i+1]);else shape.lineTo(verts[i],verts[i+1]);}geo=new THREE.ExtrudeGeometry(shape,{amount:1,bevelEnabled:false});geo.applyMatrix(new THREE.Matrix4().makeRotationFromEuler(new THREE.Euler(-Math.PI/2,0,0)));if(data[j]['noise'])applyNoise(geo,data[j].noise);geoset.push(geo);}else if(data[j].type=='mesh'){geo=new THREE.Geometry();verts=data[j].vertices;var faces=data[j].faces;for(var v=0;v<verts.length;v+=3){geo.vertices.push(new THREE.Vector3(verts[v],verts[v+1],verts[v+2]));}for(var f=0;f<faces.length;f+=3){geo.faces.push(new THREE.Face3(faces[f],faces[f+1],faces[f+2]));}if(this.data.flatShading||data[j]['flatShading']){geo.computeFaceNormals();}else{geo.computeVertexNormals();}if(data[j]['mirror']){geo.merge(geo,new THREE.Matrix4().makeRotationFromEuler(new THREE.Euler(0,Math.PI,0)));}if(data[j]['noise'])applyNoise(geo,data[j].noise);geoset.push(geo);}}return geoset;},// updates set dressing
updateDressing:function(){var dressing=new THREE.Object3D();this.dressing.setAttribute('visible',this.data.dressing!='none');if(this.data.dressing=='none'){return;}var geometry=new THREE.Geometry();// mother geometry that will hold all instances
// get array of geometries
var geoset;switch(this.data.dressing){case'cubes':{geoset=[new THREE.BoxGeometry(1,1,1)];geoset[0].applyMatrix(new THREE.Matrix4().makeTranslation(0,0.5,0));break;}case'pyramids':{geoset=[new THREE.ConeGeometry(1,1,4,1,true)];geoset[0].applyMatrix(new THREE.Matrix4().makeTranslation(0,0.5,0));break;}case'cylinders':{geoset=[new THREE.CylinderGeometry(0.5,0.5,1,8,1,true)];geoset[0].applyMatrix(new THREE.Matrix4().makeTranslation(0,0.5,0));break;}default:{geoset=this.getAssetGeometry(this.assets[this.data.dressing]);if(!geoset)return;break;}}for(var i=0,r=88343;i<this.data.dressingAmount;i++,r++){var geo=geoset[Math.floor(this.random(33+i)*geoset.length)];/*
      // change vertex colors
      var color = new THREE.Color(0xFFFFFF).multiplyScalar(1 - this.random(66 + i) * 0.3);

      for (var f = 0, fl = geo.faces.length; f < fl; f++) {
        var face = geo.faces[f];
        for (var v = 0; v < 3; v++) {
          p = geo.vertices[face[faceindex[v]]]; // get vertex position
          var floorao =  p.y / 4 + 0.75;
          face.vertexColors[v] = new THREE.Color(color.r * floorao, color.g * floorao, color.b * floorao);
        }
      }
*/// set random position, rotation and scale
var ds=this.data.dressingScale;var dv=new THREE.Vector3(this.data.dressingVariance.x,this.data.dressingVariance.y,this.data.dressingVariance.z);var distance;var onPlayArea=this.random(r)<this.data.dressingOnPlayArea;if(onPlayArea){distance=this.random(r+1)*15;}else{distance=10+Math.max(dv.x,dv.z)+10*this.random(r+1)+this.random(r+2)*this.STAGE_SIZE/3;}var direction=this.random(r+3)*Math.PI*2;var matrix=new THREE.Matrix4();var scale=this.random(r+4);var uniformScale=this.data.dressingUniformScale;matrix.compose(// position
new THREE.Vector3(Math.cos(direction)*distance,0,Math.sin(direction)*distance),// rotation
new THREE.Quaternion().setFromAxisAngle(new THREE.Vector3(0,1,0),(this.random(r+5)-0.5)*dv.length()*Math.PI*2),// scale
new THREE.Vector3(ds+(uniformScale?scale:this.random(r+6))*dv.x,ds+(uniformScale?scale:this.random(r+7))*dv.y,ds+(uniformScale?scale:this.random(r+8))*dv.z));// merge with mother geometry
geometry.merge(geo,matrix);}// convert geometry to buffergeometry
var bufgeo=new THREE.BufferGeometry();bufgeo.fromGeometry(geometry);// setup material
var material=new THREE.MeshLambertMaterial({color:new THREE.Color(this.data.dressingColor),vertexColors:THREE.VertexColors});if(this.data.flatShading){bufgeo.computeVertexNormals();}// create mesh
var mesh=new THREE.Mesh(bufgeo,material);dressing.add(mesh);// add to scene
this.dressing.setObject3D('mesh',dressing);},// initializes the BufferGeometry for the stars
createStars:function(){var numStars=2000;var geometry=new THREE.BufferGeometry();var positions=new Float32Array(numStars*3);var radius=this.STAGE_SIZE-1;var v=new THREE.Vector3();for(var i=0;i<positions.length;i+=3){v.set(this.random(i+23)-0.5,this.random(i+24),this.random(i+25)-0.5);v.normalize();v.multiplyScalar(radius);positions[i]=v.x;positions[i+1]=v.y;positions[i+2]=v.z;}geometry.addAttribute('position',new THREE.BufferAttribute(positions,3));geometry.setDrawRange(0,0);// don't draw any yet
var material=new THREE.PointsMaterial({size:0.01,color:0xCCCCCC,fog:false});this.stars.setObject3D('mesh',new THREE.Points(geometry,material));},// Sets the number of stars visible. Calls createStars() to initialize if needed.
setStars:function(numStars){if(!this.stars){this.stars=document.createElement('a-entity');this.stars.id='stars';this.createStars();this.el.appendChild(this.stars);}numStars=Math.floor(Math.min(2000,Math.max(0,numStars)));this.stars.getObject3D('mesh').geometry.setDrawRange(0,numStars);}});// atmosphere sky shader. From https://github.com/aframevr/aframe/blob/master/examples/test/shaders/shaders/sky.js
AFRAME.registerShader('skyshader',{schema:{luminance:{type:'number',default:1,min:0,max:2,is:'uniform'},turbidity:{type:'number',default:2,min:0,max:20,is:'uniform'},reileigh:{type:'number',default:1,min:0,max:4,is:'uniform'},mieCoefficient:{type:'number',default:0.005,min:0,max:0.1,is:'uniform'},mieDirectionalG:{type:'number',default:0.8,min:0,max:1,is:'uniform'},sunPosition:{type:'vec3',default:{x:0,y:0,z:-1},is:'uniform'},color:{type:'color',default:'#fff'//placeholder to remove warning
}},vertexShader:['varying vec3 vWorldPosition;','void main() {','vec4 worldPosition = modelMatrix * vec4( position, 1.0 );','vWorldPosition = worldPosition.xyz;','gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );','}'].join('\n'),fragmentShader:['uniform sampler2D skySampler;','uniform vec3 sunPosition;','varying vec3 vWorldPosition;','vec3 cameraPos = vec3(0., 0., 0.);','uniform float luminance;','uniform float turbidity;','uniform float reileigh;','uniform float mieCoefficient;','uniform float mieDirectionalG;',// constants for atmospheric scattering'
'const float e = 2.71828182845904523536028747135266249775724709369995957;','const float pi = 3.141592653589793238462643383279502884197169;',// refractive index of air
'const float n = 1.0003;',// number of molecules per unit volume for air at'
'const float N = 2.545E25;',// 288.15K and 1013mb (sea level -45 celsius)
// depolatization factor for standard air
'const float pn = 0.035;',// wavelength of used primaries, according to preetham
'const vec3 lambda = vec3(680E-9, 550E-9, 450E-9);',// mie stuff
// K coefficient for the primaries
'const vec3 K = vec3(0.686, 0.678, 0.666);','const float v = 4.0;',// optical length at zenith for molecules
'const float rayleighZenithLength = 8.4E3;','const float mieZenithLength = 1.25E3;','const vec3 up = vec3(0.0, 1.0, 0.0);','const float EE = 1000.0;','const float sunAngularDiameterCos = 0.999956676946448443553574619906976478926848692873900859324;',// 66 arc seconds -> degrees, and the cosine of that
// earth shadow hack'
'const float cutoffAngle = pi/1.95;','const float steepness = 1.5;','vec3 totalRayleigh(vec3 lambda)','{','return (8.0 * pow(pi, 3.0) * pow(pow(n, 2.0) - 1.0, 2.0) * (6.0 + 3.0 * pn)) / (3.0 * N * pow(lambda, vec3(4.0)) * (6.0 - 7.0 * pn));','}',// see http://blenderartists.org/forum/showthread.php?321110-Shaders-and-Skybox-madness
// A simplied version of the total Rayleigh scattering to works on browsers that use ANGLE
'vec3 simplifiedRayleigh()','{','return 0.0005 / vec3(94, 40, 18);','}','float rayleighPhase(float cosTheta)','{   ','return (3.0 / (16.0*pi)) * (1.0 + pow(cosTheta, 2.0));','}','vec3 totalMie(vec3 lambda, vec3 K, float T)','{','float c = (0.2 * T ) * 10E-18;','return 0.434 * c * pi * pow((2.0 * pi) / lambda, vec3(v - 2.0)) * K;','}','float hgPhase(float cosTheta, float g)','{','return (1.0 / (4.0*pi)) * ((1.0 - pow(g, 2.0)) / pow(1.0 - 2.0*g*cosTheta + pow(g, 2.0), 1.5));','}','float sunIntensity(float zenithAngleCos)','{','return EE * max(0.0, 1.0 - exp(-((cutoffAngle - acos(zenithAngleCos))/steepness)));','}','// Filmic ToneMapping http://filmicgames.com/archives/75','float A = 0.15;','float B = 0.50;','float C = 0.10;','float D = 0.20;','float E = 0.02;','float F = 0.30;','float W = 1000.0;','vec3 Uncharted2Tonemap(vec3 x)','{','return ((x*(A*x+C*B)+D*E)/(x*(A*x+B)+D*F))-E/F;','}','void main() ','{','float sunfade = 1.0-clamp(1.0-exp((sunPosition.y/450000.0)),0.0,1.0);','float reileighCoefficient = reileigh - (1.0* (1.0-sunfade));','vec3 sunDirection = normalize(sunPosition);','float sunE = sunIntensity(dot(sunDirection, up));',// extinction (absorbtion + out scattering)
// rayleigh coefficients
'vec3 betaR = simplifiedRayleigh() * reileighCoefficient;',// mie coefficients
'vec3 betaM = totalMie(lambda, K, turbidity) * mieCoefficient;',// optical length
// cutoff angle at 90 to avoid singularity in next formula.
'float zenithAngle = acos(max(0.0, dot(up, normalize(vWorldPosition - cameraPos))));','float sR = rayleighZenithLength / (cos(zenithAngle) + 0.15 * pow(93.885 - ((zenithAngle * 180.0) / pi), -1.253));','float sM = mieZenithLength / (cos(zenithAngle) + 0.15 * pow(93.885 - ((zenithAngle * 180.0) / pi), -1.253));',// combined extinction factor
'vec3 Fex = exp(-(betaR * sR + betaM * sM));',// in scattering
'float cosTheta = dot(normalize(vWorldPosition - cameraPos), sunDirection);','float rPhase = rayleighPhase(cosTheta*0.5+0.5);','vec3 betaRTheta = betaR * rPhase;','float mPhase = hgPhase(cosTheta, mieDirectionalG);','vec3 betaMTheta = betaM * mPhase;','vec3 Lin = pow(sunE * ((betaRTheta + betaMTheta) / (betaR + betaM)) * (1.0 - Fex),vec3(1.5));','Lin *= mix(vec3(1.0),pow(sunE * ((betaRTheta + betaMTheta) / (betaR + betaM)) * Fex,vec3(1.0/2.0)),clamp(pow(1.0-dot(up, sunDirection),5.0),0.0,1.0));',//nightsky
'vec3 direction = normalize(vWorldPosition - cameraPos);','float theta = acos(direction.y); // elevation --> y-axis, [-pi/2, pi/2]','float phi = atan(direction.z, direction.x); // azimuth --> x-axis [-pi/2, pi/2]','vec2 uv = vec2(phi, theta) / vec2(2.0*pi, pi) + vec2(0.5, 0.0);',// vec3 L0 = texture2D(skySampler, uv).rgb+0.1 * Fex;
'vec3 L0 = vec3(0.1) * Fex;',// composition + solar disc
'float sundisk = smoothstep(sunAngularDiameterCos,sunAngularDiameterCos+0.00002,cosTheta);','L0 += (sunE * 19000.0 * Fex)*sundisk;','vec3 whiteScale = 1.0/Uncharted2Tonemap(vec3(W));','vec3 texColor = (Lin+L0);   ','texColor *= 0.04 ;','texColor += vec3(0.0,0.001,0.0025)*0.3;','float g_fMaxLuminance = 1.0;','float fLumScaled = 0.1 / luminance;     ','float fLumCompressed = (fLumScaled * (1.0 + (fLumScaled / (g_fMaxLuminance * g_fMaxLuminance)))) / (1.0 + fLumScaled); ','float ExposureBias = fLumCompressed;','vec3 curr = Uncharted2Tonemap((log2(2.0/pow(luminance,4.0)))*texColor);','vec3 color = curr*whiteScale;','vec3 retColor = pow(color,vec3(1.0/(1.2+(1.2*sunfade))));','gl_FragColor.rgb = retColor;','gl_FragColor.a = 1.0;','}'].join('\n')});// gradient sky shader
AFRAME.registerShader('gradientshader',{schema:{topColor:{type:'color',default:'1 0 0',is:'uniform'},bottomColor:{type:'color',default:'0 0 1',is:'uniform'}},vertexShader:['varying vec3 vWorldPosition;','void main() {',' vec4 worldPosition = modelMatrix * vec4( position, 1.0 );',' vWorldPosition = worldPosition.xyz;',' gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0 );','}'].join('\n'),fragmentShader:['uniform vec3 bottomColor;','uniform vec3 topColor;','uniform float offset;','varying vec3 vWorldPosition;','void main() {',' float h = normalize( vWorldPosition ).y;',' gl_FragColor = vec4( mix( bottomColor, topColor, max( pow( max(h, 0.0 ), 0.8 ), 0.0 ) ), 1.0 );','}'].join('\n')});// perlin noise generator
// from https://gist.github.com/banksean/304522
var PerlinNoise=function(r){if(r==undefined)r=Math;this.grad3=[[1,1,0],[-1,1,0],[1,-1,0],[-1,-1,0],[1,0,1],[-1,0,1],[1,0,-1],[-1,0,-1],[0,1,1],[0,-1,1],[0,1,-1],[0,-1,-1]];this.p=[];var i;for(i=0;i<256;i++){this.p[i]=Math.floor(r.random(666)*256);}// To remove the need for index wrapping, double the permutation table length
this.perm=[];for(i=0;i<512;i++){this.perm[i]=this.p[i&255];}};PerlinNoise.prototype.dot=function(g,x,y,z){return g[0]*x+g[1]*y+g[2]*z;};PerlinNoise.prototype.mix=function(a,b,t){return(1.0-t)*a+t*b;};PerlinNoise.prototype.fade=function(t){return t*t*t*(t*(t*6.0-15.0)+10.0);};// Classic Perlin noise, 3D version
PerlinNoise.prototype.noise=function(x,y,z){// Find unit grid cell containing point
var X=Math.floor(x);var Y=Math.floor(y);var Z=Math.floor(z);// Get relative xyz coordinates of point within that cell
x=x-X;y=y-Y;z=z-Z;// Wrap the integer cells at 255 (smaller integer period can be introduced here)
X=X&255;Y=Y&255;Z=Z&255;// Calculate a set of eight hashed gradient indices
var gi000=this.perm[X+this.perm[Y+this.perm[Z]]]%12;var gi001=this.perm[X+this.perm[Y+this.perm[Z+1]]]%12;var gi010=this.perm[X+this.perm[Y+1+this.perm[Z]]]%12;var gi011=this.perm[X+this.perm[Y+1+this.perm[Z+1]]]%12;var gi100=this.perm[X+1+this.perm[Y+this.perm[Z]]]%12;var gi101=this.perm[X+1+this.perm[Y+this.perm[Z+1]]]%12;var gi110=this.perm[X+1+this.perm[Y+1+this.perm[Z]]]%12;var gi111=this.perm[X+1+this.perm[Y+1+this.perm[Z+1]]]%12;// The gradients of each corner are now:
// g000 = grad3[gi000];
// g001 = grad3[gi001];
// g010 = grad3[gi010];
// g011 = grad3[gi011];
// g100 = grad3[gi100];
// g101 = grad3[gi101];
// g110 = grad3[gi110];
// g111 = grad3[gi111];
// Calculate noise contributions from each of the eight corners
var n000=this.dot(this.grad3[gi000],x,y,z);var n100=this.dot(this.grad3[gi100],x-1,y,z);var n010=this.dot(this.grad3[gi010],x,y-1,z);var n110=this.dot(this.grad3[gi110],x-1,y-1,z);var n001=this.dot(this.grad3[gi001],x,y,z-1);var n101=this.dot(this.grad3[gi101],x-1,y,z-1);var n011=this.dot(this.grad3[gi011],x,y-1,z-1);var n111=this.dot(this.grad3[gi111],x-1,y-1,z-1);// Compute the fade curve value for each of x, y, z
var u=this.fade(x);var v=this.fade(y);var w=this.fade(z);// Interpolate along x the contributions from each of the corners
var nx00=this.mix(n000,n100,u);var nx01=this.mix(n001,n101,u);var nx10=this.mix(n010,n110,u);var nx11=this.mix(n011,n111,u);// Interpolate the four results along y
var nxy0=this.mix(nx00,nx10,v);var nxy1=this.mix(nx01,nx11,v);// Interpolate the two last results along z
var nxyz=this.mix(nxy0,nxy1,w);return nxyz;};

/***/ }),

/***/ "./src/components/fade.js":
/*!********************************!*\
  !*** ./src/components/fade.js ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

const Event=__webpack_require__(/*! ../core/event */ "./src/core/event.js");var opacityUpdate=function(opacity){this.el.object3D.traverse(function(o){if(o.material){o.material.transparent=true;o.material.opacity=opacity;}});for(let text of this.textEntities){text.setAttribute('opacity',opacity);}};// -----------------------------------------------------------------------------
// FADEIN
AFRAME.registerComponent('fadein',{schema:{duration:{type:'int',default:200}},init:function(){this.textEntities=this.el.querySelectorAll('a-text');this.opacityUpdate(0);this.start=null;},tick:function(t){if(!this.start){this.start=t;}var opacity=Math.min((t-this.start)/this.data.duration,1);this.opacityUpdate(opacity);if(opacity===1){this.el.removeAttribute('fadein');Event.emit(this.el,'animationend');}},opacityUpdate:opacityUpdate});// -----------------------------------------------------------------------------
// FADEOUT
AFRAME.registerComponent('fadeout',{schema:{duration:{type:'int',default:200},forceFade:{type:'bool',default:false}},init:function(){this.textEntities=this.el.querySelectorAll('a-text');this.opacity=this.data.forceFade?1:this.el.getAttribute('opacity')||1;this.opacityUpdate(this.opacity);this.start=null;},tick:function(t){if(!this.start){this.start=t;}var opacity=this.opacity-Math.min((t-this.start)/this.data.duration,this.opacity);this.opacityUpdate(opacity);if(opacity===0){this.el.removeAttribute('fadeout');Event.emit(this.el,'animationend');}},opacityUpdate:opacityUpdate});// -----------------------------------------------------------------------------
// SHOW
AFRAME.registerComponent('show',{init:function(){this.textEntities=this.el.querySelectorAll('a-text');this.opacityUpdate(1);this.el.removeAttribute('show');},opacityUpdate:opacityUpdate});// -----------------------------------------------------------------------------
// HIDE
AFRAME.registerComponent('hide',{init:function(){this.textEntities=this.el.querySelectorAll('a-text');this.opacityUpdate(0);this.el.removeAttribute('hide');},opacityUpdate:opacityUpdate});

/***/ }),

/***/ "./src/components/particles.js":
/*!*************************************!*\
  !*** ./src/components/particles.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

const texture=new THREE.TextureLoader().load('/assets/textures/ghostParticle.png');let mainSceneObject=null;var ww=window.innerWidth;var wh=window.innerHeight;var isMobile=ww<500;class Particle{constructor(scene,burst,time){var radius=this.radius=Math.random()*0.1+0.09;this.color=new THREE.Color("hsl("+(Math.random()*50+180)+",100%,75%)");var mat=new THREE.MeshBasicMaterial({color:this.color,transparent:true,map:texture,side:THREE.DoubleSide,flatShading:true,transparent:true,depthTest:false});this.mesh=new THREE.Mesh(new THREE.PlaneGeometry(1,1),mat);this.mesh.scale.set(radius*8,radius,radius);this.percent=Math.random();this.speed=Math.random()*0.003+0.01;this.setRotation();scene.add(this.mesh);}setRotation(){// Get random angle
let angle=Math.random()*360;// Align particle to circle
let displacement=new THREE.Vector2(Math.sin(angle),Math.cos(angle));this.mesh.position.set(Math.sin(angle),Math.cos(angle),-1.5-Math.random()*0.1);this.mesh.rotation.z=80-angle;}update(){this.percent+=this.speed;if(this.percent>1){this.percent=0;this.setRotation();}this.mesh.scale.y=this.radius+this.radius*this.percent;if(this.percent<0.5){this.mesh.material.opacity=this.percent*2*.28;}else{this.mesh.material.opacity=(1-(this.percent-0.5)*2)*.28;}}}AFRAME.registerComponent('ghostparticles',{schema:{},init(){this.particles=[];this.el.sceneEl.addEventListener('loaded',()=>{this.sceneEl=this.el.sceneEl;this.scene=this.el.sceneEl.object3D;setTimeout(()=>this.setUp(),0);});},tick(t){if(!this.el.parentNode.object3D.visible)return;for(var i=0;i<this.particles.length;i++){this.particles[i].update(this);}},setUp(){this.particles=[];for(var i=0;i<70;i++){this.particles.push(new Particle(this.el.object3D));}}});

/***/ }),

/***/ "./src/components/stars.js":
/*!*********************************!*\
  !*** ./src/components/stars.js ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

const texture=new THREE.TextureLoader().load('/assets/textures/star.png');var ww=window.innerWidth;var wh=window.innerHeight;var isMobile=ww<500;AFRAME.registerComponent('stars',{schema:{},init(){this.particles=[];this.el.sceneEl.addEventListener('loaded',()=>{this.el.setAttribute("position",'-2.5 -1 0');this.sceneEl=this.el.sceneEl;this.scene=this.el.sceneEl.object3D;setTimeout(()=>this.setUp(),0);});},tick(t){if(!this.el.parentNode.object3D.visible)return;for(var i=0;i<this.particles.length;i++){this.particles[i].update(this);}},setUp(){this.particles=[];for(var i=0;i<(isMobile?70:100);i++){this.particles.push(new Particle(this.el.object3D));}}});class Particle{constructor(scene,burst,time){var radius=this.radius=Math.random()*0.1+0.08;this.color=new THREE.Color("hsl("+(Math.random()*50+180)+",100%,90%)");var mat=new THREE.MeshBasicMaterial({color:this.color,transparent:true,map:texture,side:THREE.DoubleSide,flatShading:true,transparent:true,depthTest:false});this.mesh=new THREE.Mesh(new THREE.PlaneGeometry(1,1),mat);this.mesh.scale.set(radius,radius,radius);this.percent=Math.random();this.speed=Math.random()*0.003+0.006;this.setPosition();scene.add(this.mesh);}setPosition(){this.posZ=-10+Math.random()*10;this.mesh.position.set(Math.random()*5,Math.random()*5,this.posZ);}update(){this.percent+=this.speed;if(this.percent>1){this.percent=0;this.setPosition();}if(this.percent<0.5){this.mesh.material.opacity=this.percent*2;}else{this.mesh.material.opacity=1-(this.percent-0.5)*2;}this.mesh.position.z=this.posZ+6*this.percent;}}

/***/ }),

/***/ "./src/components/transition.js":
/*!**************************************!*\
  !*** ./src/components/transition.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return CameraTransition; });
class CameraTransition{constructor(options={duration:420}){this.animationEnded=false;this.duration=options.duration;this.onFadeInEndBind=this.onFadeInEnd.bind(this);this.onFadeOutEndBind=this.onFadeOutEnd.bind(this);this.setUpUI();}setUpUI(){let cameraEl=document.querySelector('a-camera');let appEl=document.querySelector('.app');appEl.classList.add('blink');if(!cameraEl){throw new Error('No camera were found.');}//document.querySelector('#scene-camera-fade')
// Create a new sky that will wrap around the camera
this.el=document.createElement('a-sky');this.el.setAttribute('id','scene-camera-fade');this.el.setAttribute('color','#000');this.el.setAttribute('radius',0.1);this.el.setAttribute('opacity',0);this.el.setAttribute('fadein',`duration: ${this.duration}`);this.el.addEventListener('animationend',this.onFadeInEndBind);cameraEl.appendChild(this.el);}/*
    End the transition
  */end(){// If animation has not finish yet, we wait..
if(!this.animationEnded){return setTimeout(this.end.bind(this),50);}// Then we remove the event and add the fadeout attribute.
this.el.removeEventListener('animationend',this.onFadeInEndBind);this.el.setAttribute('fadeout',{duration:this.duration/1.5,forceFade:true});this.el.addEventListener('animationend',this.onFadeOutEndBind);let appEl=document.querySelector('.app');appEl.classList.remove('blink');}//----------------------------------------------------------------------------
// HANDLERS
onFadeInEnd(){this.animationEnded=true;}onFadeOutEnd(){this.el.removeEventListener('animationend',this.onFadeOutEndBind);this.el.parentNode.removeChild(this.el);this.el=null;}}

/***/ }),

/***/ "./src/components/tunnel.js":
/*!**********************************!*\
  !*** ./src/components/tunnel.js ***!
  \**********************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _blink__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./blink */ "./src/components/blink.js");
var ww=window.innerWidth;var wh=window.innerHeight;let rendererBuffer,bufferTexture,bufferCamera,bufferScene;AFRAME.registerComponent('tunnel',{schema:{},init(){this.shouldRender=true;this.shouldRun=false;this.startT;this.el.sceneEl.addEventListener('loaded',()=>{this.sceneEl=this.el.sceneEl;this.scene=this.el.sceneEl.object3D;setTimeout(()=>this.setUp(),0);});},tick(t){if(!this.startT)this.startT=t;else t=t-this.startT+4000;if(!this.tubeGeometry||!this.shouldRun)return;this.updateMaterialOffset();this.updateCurve();let sin=(Math.sin(t/1000)+1)/2.0;this.ratioX=sin;this.ratioY=1-sin;this.renderToTexture();},remove(){this.shouldRun=false;this.el.object3D.remove(this.tubeMesh);this.tubeMaterial.dispose();this.tubeGeometry.dispose();this.tubeGeometry=this.tubeMaterial=this.tubeMesh=undefined;},setUp(){this.speed=8;this.mouse={position:new THREE.Vector2(ww*0.5,wh*0.5),ratio:new THREE.Vector2(0,0),target:new THREE.Vector2(ww*0.5,wh*0.5)};this.ratioX=0;this.ratioY=1;var loader=new THREE.TextureLoader();loader.crossOrigin="Anonymous";loader.load("/assets/textures/galaxyTexture.jpg",this.createMesh.bind(this));this.initAnimation();let scene=this.sceneEl.object3D,renderer=this.sceneEl.renderer;renderer.setClearColor(0x003EFF);bufferScene=new THREE.Scene();bufferScene.fog=new THREE.Fog(0x003EFF,1,100);bufferCamera=new THREE.PerspectiveCamera(140,ww/wh,.1,1000);bufferCamera.lookAt(new THREE.Vector3(0,0,-1));bufferCamera.position.y=1;bufferCamera.position.z=-8;// Create texture
let dpr=window.devicePixelRatio,resolution=256*dpr;if(!AFRAME.utils.device.isMobile()){resolution=256*dpr*2;}bufferTexture=new THREE.WebGLRenderTarget(resolution,resolution*2,{minFilter:THREE.LinearFilter,magFilter:THREE.NearestFilter});var repeatX,repeatY;bufferTexture.texture.wrapS=THREE.ClampToEdgeWrapping;bufferTexture.texture.wrapT=THREE.RepeatWrapping;repeatX=2/4;repeatY=1;bufferTexture.texture.repeat.set(repeatX,repeatY);bufferTexture.texture.offset.x=(repeatX-1)/2*-1;// Texture plane
let planeGeometry=new THREE.PlaneGeometry(2,4);let planeMaterial=new THREE.MeshBasicMaterial({color:0xffffff,map:bufferTexture.texture});let plane=new THREE.Mesh(planeGeometry,planeMaterial);plane.position.set(0,1.1,-4.01);document.querySelector('#mainScene').object3D.add(plane);rendererBuffer=new THREE.WebGLRenderer({antialias:false});rendererBuffer.setClearColor(0x000000);rendererBuffer.setPixelRatio(window.devicePixelRatio);rendererBuffer.setSize(resolution,resolution);rendererBuffer.domElement.style.zIndex=1000;document.body.appendChild(rendererBuffer.domElement);},createMesh(texture){var points=[];var i=0;var geometry=new THREE.Geometry();//if (this.tubeMesh) this.scene.remove(this.tubeMesh);
for(i=0;i<10;i+=1){points.push(new THREE.Vector3(0,0,3*(i/4)));}points[4].y=-0.06;this.curve=new THREE.CatmullRomCurve3(points);this.curve.type="catmullrom";geometry=new THREE.Geometry();geometry.vertices=this.curve.getPoints(90);this.splineMesh=new THREE.Line(geometry,new THREE.LineBasicMaterial());this.tubeMaterial=new THREE.MeshBasicMaterial({side:THREE.BackSide,map:texture});this.tubeMaterial.map.wrapS=THREE.MirroredRepeatWrapping;this.tubeMaterial.map.wrapT=THREE.MirroredRepeatWrapping;this.tubeMaterial.map.repeat.set(this.tubeMaterial.repx,this.tubeMaterial.repy);this.tubeGeometry=new THREE.TubeGeometry(this.curve,90,0.04,30,false);this.tubeGeometry_o=this.tubeGeometry.clone();this.tubeMesh=new THREE.Mesh(this.tubeGeometry,this.tubeMaterial);this.tubeMesh.scale.set(300,300,300);this.tubeMesh.position.set(65,8,690);this.tubeMesh.rotation.set(0,-90-45,45);bufferScene.add(this.tubeMesh);document.querySelector('#door').addEventListener('doorOpening',()=>{this.shouldRun=true;});document.querySelector('#door').addEventListener('doorOpenned',()=>{bufferScene.remove(this.tubeMesh);this.el.object3D.add(this.tubeMesh);this.sceneEl.setAttribute('fog',{far:400});this.shouldRender=false;setTimeout(()=>{// camera blink
Object(_blink__WEBPACK_IMPORTED_MODULE_0__["default"])(()=>{const comingSoonEl=document.querySelector('#comingSoon');comingSoonEl.setAttribute('position','0 0 0');comingSoonEl.setAttribute('visible',true);const cameraEl=this.sceneEl.querySelector('a-camera');cameraEl.setAttribute('position','0 1.6 10');cameraEl.children[0].setAttribute('visible',true);const envAnimEl=document.createElement('a-animation');envAnimEl.setAttribute('attribute','position');envAnimEl.setAttribute('to','0 1.6 -10');envAnimEl.setAttribute('dur','40000');envAnimEl.setAttribute('easing','linear');envAnimEl.setAttribute('direction','alternate');envAnimEl.setAttribute('repeat','indefinite');this.sceneEl.querySelector('a-camera').appendChild(envAnimEl);this.el.parentNode.removeChild(this.el);});},4000);});},initAnimation(){// Timeline animation
this.textureParams={offsetX:0,offsetY:0,repeatX:10,repeatY:4};this.cameraShake={x:0,y:0};var self=this;var hyperSpace=new TimelineMax({repeat:-1});hyperSpace.to(this.textureParams,4,{repeatX:0.3,ease:Power1.easeInOut});hyperSpace.to(this.textureParams,12,{offsetX:8,ease:Power2.easeInOut},0);hyperSpace.to(this.textureParams,6,{repeatX:10,ease:Power2.easeInOut},"-=5");},updateMaterialOffset(){this.tubeMaterial.map.offset.x=this.textureParams.offsetX;this.tubeMaterial.map.offset.y+=0.001;this.tubeMaterial.map.repeat.set(this.textureParams.repeatX,this.textureParams.repeatY);},updateCurve(){var i=0;var index=0;var vertice_o=null;var vertice=null;for(i=0;i<this.tubeGeometry.vertices.length;i+=1){vertice_o=this.tubeGeometry_o.vertices[i];vertice=this.tubeGeometry.vertices[i];index=Math.floor(i/30);vertice.x+=(vertice_o.x+this.splineMesh.geometry.vertices[index].x-vertice.x)/15;vertice.y+=(vertice_o.y+this.splineMesh.geometry.vertices[index].y-vertice.y)/15;}this.tubeGeometry.verticesNeedUpdate=true;this.curve.points[2].x=0.6*(1-this.ratioX)-0.3;this.curve.points[3].x=0;this.curve.points[4].x=0.6*(1-this.ratioX)-0.3;this.curve.points[2].y=0.6*(1-this.ratioY)-0.3;this.curve.points[3].y=0;this.curve.points[4].y=0.6*(1-this.ratioY)-0.3;this.splineMesh.geometry.verticesNeedUpdate=true;this.splineMesh.geometry.vertices=this.curve.getPoints(90);},renderToTexture(){if(!this.tubeGeometry||!this.shouldRun)return;let scene=this.sceneEl.object3D,renderer=this.sceneEl.renderer;renderer.render(bufferScene,bufferCamera,bufferTexture);renderer.setRenderTarget(null);rendererBuffer.render(bufferScene,bufferCamera,bufferTexture);}});

/***/ }),

/***/ "./src/core/confetti.js":
/*!******************************!*\
  !*** ./src/core/confetti.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Confetti; });
/* harmony import */ var _styles_confetti_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../styles/confetti.css */ "./src/styles/confetti.css");
/* harmony import */ var _styles_confetti_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_styles_confetti_css__WEBPACK_IMPORTED_MODULE_0__);
class Confetti{constructor(el){this.el=el;this.containerEl=null;this.confettiFrequency=3;this.confettiColors=['#fce18a','#ff726d','#b48def','#f4306d'];this.confettiAnimations=['slow','medium','fast'];this._setupElements();this._renderConfetti();}stop(){clearInterval(this.confettiInterval);setTimeout(()=>{this.el.removeChild(this.containerEl);},3000);}/* PRIVATE */_setupElements(){const containerEl=document.createElement('div');const elPosition=this.el.style.position;if(elPosition!=='relative'||elPosition!=='absolute'){this.el.style.position='relative';}containerEl.classList.add('confetti-container');this.el.appendChild(containerEl);this.containerEl=containerEl;}_renderConfetti(){this.confettiInterval=setInterval(()=>{const confettiEl=document.createElement('div');const confettiSize=Math.floor(Math.random()*3)+7+'px';const confettiBackground=this.confettiColors[Math.floor(Math.random()*this.confettiColors.length)];const confettiLeft=Math.floor(Math.random()*this.el.offsetWidth)+'px';const confettiAnimation=this.confettiAnimations[Math.floor(Math.random()*this.confettiAnimations.length)];confettiEl.classList.add('confetti','confetti--animation-'+confettiAnimation);confettiEl.style.left=confettiLeft;confettiEl.style.width=confettiSize;confettiEl.style.height=confettiSize;confettiEl.style.backgroundColor=confettiBackground;confettiEl.removeTimeout=setTimeout(function(){confettiEl.parentNode.removeChild(confettiEl);},3000);this.containerEl.appendChild(confettiEl);},25);}}

/***/ }),

/***/ "./src/core/event.js":
/*!***************************!*\
  !*** ./src/core/event.js ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports={emit:(el,name,data)=>{el.dispatchEvent(new CustomEvent(name,{detail:data}));}};

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _lib_rounded__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./lib/rounded */ "./src/lib/rounded.js");
/* harmony import */ var _lib_rounded__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_lib_rounded__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _loaders_animation_mixer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./loaders/animation-mixer */ "./src/loaders/animation-mixer.js");
/* harmony import */ var _loaders_animation_mixer__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_loaders_animation_mixer__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _loaders_fbx_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./loaders/fbx-model */ "./src/loaders/fbx-model.js");
/* harmony import */ var _components_tunnel__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/tunnel */ "./src/components/tunnel.js");
/* harmony import */ var _components_stars__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/stars */ "./src/components/stars.js");
/* harmony import */ var _components_stars__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_components_stars__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _components_door__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/door */ "./src/components/door.js");
/* harmony import */ var _components_door__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_components_door__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _components_fade__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/fade */ "./src/components/fade.js");
/* harmony import */ var _components_fade__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_components_fade__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _components_environment__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/environment */ "./src/components/environment.js");
/* harmony import */ var _components_environment__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_components_environment__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _components_particles__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/particles */ "./src/components/particles.js");
/* harmony import */ var _components_particles__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_components_particles__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _core_confetti__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./core/confetti */ "./src/core/confetti.js");
/* harmony import */ var validator_lib_isEmail__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! validator/lib/isEmail */ "./node_modules/validator/lib/isEmail.js");
/* harmony import */ var validator_lib_isEmail__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(validator_lib_isEmail__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _styles_index_css__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./styles/index.css */ "./src/styles/index.css");
/* harmony import */ var _styles_index_css__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_styles_index_css__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _styles_button_css__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./styles/button.css */ "./src/styles/button.css");
/* harmony import */ var _styles_button_css__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_styles_button_css__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _styles_shake_css__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./styles/shake.css */ "./src/styles/shake.css");
/* harmony import */ var _styles_shake_css__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(_styles_shake_css__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var _styles_vignette_css__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./styles/vignette.css */ "./src/styles/vignette.css");
/* harmony import */ var _styles_vignette_css__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(_styles_vignette_css__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var _styles_modal_css__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./styles/modal.css */ "./src/styles/modal.css");
/* harmony import */ var _styles_modal_css__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(_styles_modal_css__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var _styles_socials_css__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./styles/socials.css */ "./src/styles/socials.css");
/* harmony import */ var _styles_socials_css__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(_styles_socials_css__WEBPACK_IMPORTED_MODULE_16__);
window.store=[];const shakeEl=function(el){el.classList.add('shake');setTimeout(function(){el.classList.remove('shake');},300);};// Remove right click
document.addEventListener('contextmenu',event=>event.preventDefault());// Ready
let sceneEl;document.addEventListener('DOMContentLoaded',function(){sceneEl=document.querySelector('a-scene');sceneEl.addEventListener('loaded',()=>{sceneEl.components.inspector.remove();document.querySelector('.coming-soon-2d').classList.remove('hide');new App();});},false);class App{constructor(){if(!AFRAME.utils.device.isMobile()){sceneEl.setAttribute('cursor',{rayOrigin:'mouse'});}this.setUpUI();}setUpUI(){this.modal=document.querySelector('.modal-container');this.modal.querySelector('.close-button').addEventListener('click',this.closeModal.bind(this));document.querySelector('.notify-me').addEventListener('click',e=>{e.preventDefault();this.openModal();});document.querySelector('.let-me-know').addEventListener('click',e=>{e.preventDefault();this.validateEmail();});}openModal(){window.store.modalOpen=true;this.modal.classList.remove('hide');this.modal.querySelector('.email').focus();setTimeout(()=>{this.modal.classList.remove('fadeIn');},10);}closeModal(){window.store.modalOpen=false;this.modal.classList.add('closing');this.modal.classList.add('fadeIn');setTimeout(()=>{this.modal.classList.remove('closing');this.modal.classList.add('hide');},600);}closeModalWithSuccess(){window.store.modalOpen=false;this.modal.classList.add('closing');this.modal.classList.add('fadeOut');setTimeout(()=>{this.modal.classList.remove('closing');this.modal.classList.add('hide');this.modal.classList.remove('fadeOut');this.modal.classList.add('fadeIn');this.modal.querySelector('.email').value='';this.modal.querySelector('.wrapper').classList.remove('hide-opacity');this.modal.querySelector('.done').classList.remove('show-opacity');this.modal.querySelector('.done').classList.add('hide');this.modal.querySelector('.pattern').classList.remove('show-opacity');if(window.store.doorOpenned){setTimeout(()=>{window.location.href='https://twitter.com/CharliSpaces';},120);}},600);}isEmailValid(value){return!value||!validator_lib_isEmail__WEBPACK_IMPORTED_MODULE_10___default()(value)||value.length>120?false:true;}validateEmail(){const inputValue=this.modal.querySelector('.email').value;if(!this.isEmailValid(inputValue))return this.invalidEmail();this.sendEmailRequest(inputValue);}invalidEmail(){shakeEl(this.modal.querySelector('.email'));}sendEmailRequest(){const wrapperEl=this.modal.querySelector('.wrapper');const doneEl=this.modal.querySelector('.done');const patternEl=this.modal.querySelector('.pattern');wrapperEl.classList.add('busy');// Request...
wrapperEl.classList.remove('busy');wrapperEl.classList.add('hide-opacity');setTimeout(()=>{doneEl.classList.remove('hide');},300);setTimeout(()=>{doneEl.classList.add('show-opacity');patternEl.classList.add('show-opacity');},310);setTimeout(()=>{this.closeModalWithSuccess();},2200);const confetti=new _core_confetti__WEBPACK_IMPORTED_MODULE_9__["default"](document.body);setTimeout(()=>{confetti.stop();},2000);}}

/***/ }),

/***/ "./src/lib/FBXLoader.js":
/*!******************************!*\
  !*** ./src/lib/FBXLoader.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * @author Kyle-Larson https://github.com/Kyle-Larson
 * @author Takahiro https://github.com/takahirox
 * @author Lewy Blue https://github.com/looeee
 *
 * Loader loads FBX file and generates Group representing FBX scene.
 * Requires FBX file to be >= 7.0 and in ASCII or to be any version in Binary format.
 *
 * Supports:
 *  Mesh Generation (Positional Data)
 *  Normal Data (Per Vertex Drawing Instance)
 *  UV Data (Per Vertex Drawing Instance)
 *  Skinning
 *  Animation
 *  - Separated Animations based on stacks.
 *  - Skeletal & Non-Skeletal Animations
 *  NURBS (Open, Closed and Periodic forms)
 *
 * Needs Support:
 *  Euler rotation order
 *
 *
 * FBX format references:
 *  https://wiki.blender.org/index.php/User:Mont29/Foundation/FBX_File_Structure
 *
 *  Binary format specification:
 *    https://code.blender.org/2013/08/fbx-binary-file-format-specification/
 *    https://wiki.rogiken.org/specifications/file-format/fbx/ (more detail but Japanese)
 */// Monkeypatch for <r89
THREE.LoaderUtils={extractUrlBase:THREE.Loader.prototype.extractUrlBase,decodeText:function(array){return new TextDecoder().decode(array);}};(function(){THREE.FBXLoader=function(manager){this.manager=manager!==undefined?manager:THREE.DefaultLoadingManager;};Object.assign(THREE.FBXLoader.prototype,{load:function(url,onLoad,onProgress,onError){var self=this;var resourceDirectory=THREE.LoaderUtils.extractUrlBase(url);var loader=new THREE.FileLoader(this.manager);loader.setResponseType('arraybuffer');loader.load(url,function(buffer){try{var scene=self.parse(buffer,resourceDirectory);onLoad(scene);}catch(error){window.setTimeout(function(){if(onError)onError(error);self.manager.itemError(url);},0);}},onProgress,onError);},parse:function(FBXBuffer,resourceDirectory){var FBXTree;if(isFbxFormatBinary(FBXBuffer)){FBXTree=new BinaryParser().parse(FBXBuffer);}else{var FBXText=convertArrayBufferToString(FBXBuffer);if(!isFbxFormatASCII(FBXText)){throw new Error('THREE.FBXLoader: Unknown format.');}if(getFbxVersion(FBXText)<7000){throw new Error('THREE.FBXLoader: FBX version not supported, FileVersion: '+getFbxVersion(FBXText));}FBXTree=new TextParser().parse(FBXText);}// console.log( FBXTree );
var connections=parseConnections(FBXTree);var images=parseImages(FBXTree);var textures=parseTextures(FBXTree,new THREE.TextureLoader(this.manager).setPath(resourceDirectory),images,connections);var materials=parseMaterials(FBXTree,textures,connections);var skeletons=parseDeformers(FBXTree,connections);var geometryMap=parseGeometries(FBXTree,connections,skeletons);var sceneGraph=parseScene(FBXTree,connections,skeletons,geometryMap,materials);return sceneGraph;}});// Parses FBXTree.Connections which holds parent-child connections between objects (e.g. material -> texture, model->geometry )
// and details the connection type
function parseConnections(FBXTree){var connectionMap=new Map();if('Connections'in FBXTree){var rawConnections=FBXTree.Connections.connections;rawConnections.forEach(function(rawConnection){var fromID=rawConnection[0];var toID=rawConnection[1];var relationship=rawConnection[2];if(!connectionMap.has(fromID)){connectionMap.set(fromID,{parents:[],children:[]});}var parentRelationship={ID:toID,relationship:relationship};connectionMap.get(fromID).parents.push(parentRelationship);if(!connectionMap.has(toID)){connectionMap.set(toID,{parents:[],children:[]});}var childRelationship={ID:fromID,relationship:relationship};connectionMap.get(toID).children.push(childRelationship);});}return connectionMap;}// Parse FBXTree.Objects.Video for embedded image data
// These images are connected to textures in FBXTree.Objects.Textures
// via FBXTree.Connections.
function parseImages(FBXTree){var images={};var blobs={};if('Video'in FBXTree.Objects){var videoNodes=FBXTree.Objects.Video;for(var nodeID in videoNodes){var videoNode=videoNodes[nodeID];var id=parseInt(nodeID);images[id]=videoNode.Filename;// raw image data is in videoNode.Content
if('Content'in videoNode){var arrayBufferContent=videoNode.Content instanceof ArrayBuffer&&videoNode.Content.byteLength>0;var base64Content=typeof videoNode.Content==='string'&&videoNode.Content!=='';if(arrayBufferContent||base64Content){var image=parseImage(videoNodes[nodeID]);blobs[videoNode.Filename]=image;}}}}for(var id in images){var filename=images[id];if(blobs[filename]!==undefined)images[id]=blobs[filename];else images[id]=images[id].split('\\').pop();}return images;}// Parse embedded image data in FBXTree.Video.Content
function parseImage(videoNode){var content=videoNode.Content;var fileName=videoNode.RelativeFilename||videoNode.Filename;var extension=fileName.slice(fileName.lastIndexOf('.')+1).toLowerCase();var type;switch(extension){case'bmp':type='image/bmp';break;case'jpg':case'jpeg':type='image/jpeg';break;case'png':type='image/png';break;case'tif':type='image/tiff';break;default:console.warn('FBXLoader: Image type "'+extension+'" is not supported.');return;}if(typeof content==='string'){// ASCII format
return'data:'+type+';base64,'+content;}else{// Binary Format
var array=new Uint8Array(content);return window.URL.createObjectURL(new Blob([array],{type:type}));}}// Parse nodes in FBXTree.Objects.Texture
// These contain details such as UV scaling, cropping, rotation etc and are connected
// to images in FBXTree.Objects.Video
function parseTextures(FBXTree,loader,images,connections){var textureMap=new Map();if('Texture'in FBXTree.Objects){var textureNodes=FBXTree.Objects.Texture;for(var nodeID in textureNodes){var texture=parseTexture(textureNodes[nodeID],loader,images,connections);textureMap.set(parseInt(nodeID),texture);}}return textureMap;}// Parse individual node in FBXTree.Objects.Texture
function parseTexture(textureNode,loader,images,connections){var texture=loadTexture(textureNode,loader,images,connections);texture.ID=textureNode.id;texture.name=textureNode.attrName;var wrapModeU=textureNode.WrapModeU;var wrapModeV=textureNode.WrapModeV;var valueU=wrapModeU!==undefined?wrapModeU.value:0;var valueV=wrapModeV!==undefined?wrapModeV.value:0;// http://download.autodesk.com/us/fbx/SDKdocs/FBX_SDK_Help/files/fbxsdkref/class_k_fbx_texture.html#889640e63e2e681259ea81061b85143a
// 0: repeat(default), 1: clamp
texture.wrapS=valueU===0?THREE.RepeatWrapping:THREE.ClampToEdgeWrapping;texture.wrapT=valueV===0?THREE.RepeatWrapping:THREE.ClampToEdgeWrapping;if('Scaling'in textureNode){var values=textureNode.Scaling.value;texture.repeat.x=values[0];texture.repeat.y=values[1];}return texture;}// load a texture specified as a blob or data URI, or via an external URL using THREE.TextureLoader
function loadTexture(textureNode,loader,images,connections){var fileName;var currentPath=loader.path;var children=connections.get(textureNode.id).children;if(children!==undefined&&children.length>0&&images[children[0].ID]!==undefined){fileName=images[children[0].ID];if(fileName.indexOf('blob:')===0||fileName.indexOf('data:')===0){loader.setPath(undefined);}}var texture=loader.load(fileName);loader.setPath(currentPath);return texture;}// Parse nodes in FBXTree.Objects.Material
function parseMaterials(FBXTree,textureMap,connections){var materialMap=new Map();if('Material'in FBXTree.Objects){var materialNodes=FBXTree.Objects.Material;for(var nodeID in materialNodes){var material=parseMaterial(FBXTree,materialNodes[nodeID],textureMap,connections);if(material!==null)materialMap.set(parseInt(nodeID),material);}}return materialMap;}// Parse single node in FBXTree.Objects.Material
// Materials are connected to texture maps in FBXTree.Objects.Textures
// FBX format currently only supports Lambert and Phong shading models
function parseMaterial(FBXTree,materialNode,textureMap,connections){var ID=materialNode.id;var name=materialNode.attrName;var type=materialNode.ShadingModel;//Case where FBX wraps shading model in property object.
if(typeof type==='object'){type=type.value;}// Ignore unused materials which don't have any connections.
if(!connections.has(ID))return null;var parameters=parseParameters(FBXTree,materialNode,textureMap,ID,connections);var material;switch(type.toLowerCase()){case'phong':material=new THREE.MeshPhongMaterial();break;case'lambert':material=new THREE.MeshLambertMaterial();break;default:console.warn('THREE.FBXLoader: unknown material type "%s". Defaulting to MeshPhongMaterial.',type);material=new THREE.MeshPhongMaterial({color:0x3300ff});break;}material.setValues(parameters);material.name=name;return material;}// Parse FBX material and return parameters suitable for a three.js material
// Also parse the texture map and return any textures associated with the material
function parseParameters(FBXTree,properties,textureMap,ID,connections){var parameters={};if(properties.BumpFactor){parameters.bumpScale=properties.BumpFactor.value;}if(properties.Diffuse){parameters.color=new THREE.Color().fromArray(properties.Diffuse.value);}if(properties.DisplacementFactor){parameters.displacementScale=properties.DisplacementFactor.value;}if(properties.ReflectionFactor){parameters.reflectivity=properties.ReflectionFactor.value;}if(properties.Specular){parameters.specular=new THREE.Color().fromArray(properties.Specular.value);}if(properties.Shininess){parameters.shininess=properties.Shininess.value;}if(properties.Emissive){parameters.emissive=new THREE.Color().fromArray(properties.Emissive.value);}if(properties.EmissiveFactor){parameters.emissiveIntensity=parseFloat(properties.EmissiveFactor.value);}if(properties.Opacity){parameters.opacity=parseFloat(properties.Opacity.value);}if(parameters.opacity<1.0){parameters.transparent=true;}connections.get(ID).children.forEach(function(child){var type=child.relationship;switch(type){case'Bump':parameters.bumpMap=textureMap.get(child.ID);break;case'DiffuseColor':parameters.map=getTexture(FBXTree,textureMap,child.ID,connections);break;case'DisplacementColor':parameters.displacementMap=getTexture(FBXTree,textureMap,child.ID,connections);break;case'EmissiveColor':parameters.emissiveMap=getTexture(FBXTree,textureMap,child.ID,connections);break;case'NormalMap':parameters.normalMap=getTexture(FBXTree,textureMap,child.ID,connections);break;case'ReflectionColor':parameters.envMap=getTexture(FBXTree,textureMap,child.ID,connections);parameters.envMap.mapping=THREE.EquirectangularReflectionMapping;break;case'SpecularColor':parameters.specularMap=getTexture(FBXTree,textureMap,child.ID,connections);break;case'TransparentColor':parameters.alphaMap=getTexture(FBXTree,textureMap,child.ID,connections);parameters.transparent=true;break;case'AmbientColor':case'ShininessExponent':// AKA glossiness map
case'SpecularFactor':// AKA specularLevel
case'VectorDisplacementColor':// NOTE: Seems to be a copy of DisplacementColor
default:console.warn('THREE.FBXLoader: %s map is not supported in three.js, skipping texture.',type);break;}});return parameters;}// get a texture from the textureMap for use by a material.
function getTexture(FBXTree,textureMap,id,connections){// if the texture is a layered texture, just use the first layer and issue a warning
if('LayeredTexture'in FBXTree.Objects&&id in FBXTree.Objects.LayeredTexture){console.warn('THREE.FBXLoader: layered textures are not supported in three.js. Discarding all but first layer.');id=connections.get(id).children[0].ID;}return textureMap.get(id);}// Parse nodes in FBXTree.Objects.Deformer
// Deformer node can contain skinning or Vertex Cache animation data, however only skinning is supported here
// Generates map of Skeleton-like objects for use later when generating and binding skeletons.
function parseDeformers(FBXTree,connections){var skeletons={};if('Deformer'in FBXTree.Objects){var DeformerNodes=FBXTree.Objects.Deformer;for(var nodeID in DeformerNodes){var deformerNode=DeformerNodes[nodeID];if(deformerNode.attrType==='Skin'){var relationships=connections.get(parseInt(nodeID));var skeleton=parseSkeleton(relationships,DeformerNodes);skeleton.ID=nodeID;if(relationships.parents.length>1)console.warn('THREE.FBXLoader: skeleton attached to more than one geometry is not supported.');skeleton.geometryID=relationships.parents[0].ID;skeletons[nodeID]=skeleton;}}}return skeletons;}// Parse single nodes in FBXTree.Objects.Deformer
// The top level deformer nodes have type 'Skin' and subDeformer nodes have type 'Cluster'
// Each skin node represents a skeleton and each cluster node represents a bone
function parseSkeleton(connections,deformerNodes){var rawBones=[];connections.children.forEach(function(child){var subDeformerNode=deformerNodes[child.ID];if(subDeformerNode.attrType!=='Cluster')return;var rawBone={ID:child.ID,indices:[],weights:[],transform:new THREE.Matrix4().fromArray(subDeformerNode.Transform.a),transformLink:new THREE.Matrix4().fromArray(subDeformerNode.TransformLink.a),linkMode:subDeformerNode.Mode};if('Indexes'in subDeformerNode){rawBone.indices=subDeformerNode.Indexes.a;rawBone.weights=subDeformerNode.Weights.a;}rawBones.push(rawBone);});return{rawBones:rawBones,bones:[]};}// Parse nodes in FBXTree.Objects.Geometry
function parseGeometries(FBXTree,connections,skeletons){var geometryMap=new Map();if('Geometry'in FBXTree.Objects){var geometryNodes=FBXTree.Objects.Geometry;for(var nodeID in geometryNodes){var relationships=connections.get(parseInt(nodeID));var geo=parseGeometry(FBXTree,relationships,geometryNodes[nodeID],skeletons);geometryMap.set(parseInt(nodeID),geo);}}return geometryMap;}// Parse single node in FBXTree.Objects.Geometry
function parseGeometry(FBXTree,relationships,geometryNode,skeletons){switch(geometryNode.attrType){case'Mesh':return parseMeshGeometry(FBXTree,relationships,geometryNode,skeletons);break;case'NurbsCurve':return parseNurbsGeometry(geometryNode);break;}}// Parse single node mesh geometry in FBXTree.Objects.Geometry
function parseMeshGeometry(FBXTree,relationships,geometryNode,skeletons){var modelNodes=relationships.parents.map(function(parent){return FBXTree.Objects.Model[parent.ID];});// don't create geometry if it is not associated with any models
if(modelNodes.length===0)return;var skeleton=relationships.children.reduce(function(skeleton,child){if(skeletons[child.ID]!==undefined)skeleton=skeletons[child.ID];return skeleton;},null);var preTransform=new THREE.Matrix4();// TODO: if there is more than one model associated with the geometry, AND the models have
// different geometric transforms, then this will cause problems
// if ( modelNodes.length > 1 ) { }
// For now just assume one model and get the preRotations from that
var modelNode=modelNodes[0];if('GeometricRotation'in modelNode){var array=modelNode.GeometricRotation.value.map(THREE.Math.degToRad);array[3]='ZYX';preTransform.makeRotationFromEuler(new THREE.Euler().fromArray(array));}if('GeometricTranslation'in modelNode){preTransform.setPosition(new THREE.Vector3().fromArray(modelNode.GeometricTranslation.value));}return genGeometry(FBXTree,relationships,geometryNode,skeleton,preTransform);}// Generate a THREE.BufferGeometry from a node in FBXTree.Objects.Geometry
function genGeometry(FBXTree,relationships,geometryNode,skeleton,preTransform){var vertexPositions=geometryNode.Vertices.a;var vertexIndices=geometryNode.PolygonVertexIndex.a;// create arrays to hold the final data used to build the buffergeometry
var vertexBuffer=[];var normalBuffer=[];var colorsBuffer=[];var uvsBuffer=[];var materialIndexBuffer=[];var vertexWeightsBuffer=[];var weightsIndicesBuffer=[];if(geometryNode.LayerElementColor){var colorInfo=getColors(geometryNode.LayerElementColor[0]);}if(geometryNode.LayerElementMaterial){var materialInfo=getMaterials(geometryNode.LayerElementMaterial[0]);}if(geometryNode.LayerElementNormal){var normalInfo=getNormals(geometryNode.LayerElementNormal[0]);}if(geometryNode.LayerElementUV){var uvInfo=[];var i=0;while(geometryNode.LayerElementUV[i]){uvInfo.push(getUVs(geometryNode.LayerElementUV[i]));i++;}}var weightTable={};if(skeleton!==null){skeleton.rawBones.forEach(function(rawBone,i){// loop over the bone's vertex indices and weights
rawBone.indices.forEach(function(index,j){if(weightTable[index]===undefined)weightTable[index]=[];weightTable[index].push({id:i,weight:rawBone.weights[j]});});});}var polygonIndex=0;var faceLength=0;var displayedWeightsWarning=false;// these will hold data for a single face
var vertexPositionIndexes=[];var faceNormals=[];var faceColors=[];var faceUVs=[];var faceWeights=[];var faceWeightIndices=[];vertexIndices.forEach(function(vertexIndex,polygonVertexIndex){var endOfFace=false;// Face index and vertex index arrays are combined in a single array
// A cube with quad faces looks like this:
// PolygonVertexIndex: *24 {
//  a: 0, 1, 3, -3, 2, 3, 5, -5, 4, 5, 7, -7, 6, 7, 1, -1, 1, 7, 5, -4, 6, 0, 2, -5
//  }
// Negative numbers mark the end of a face - first face here is 0, 1, 3, -3
// to find index of last vertex multiply by -1 and subtract 1: -3 * - 1 - 1 = 2
if(vertexIndex<0){vertexIndex=vertexIndex^-1;// equivalent to ( x * -1 ) - 1
vertexIndices[polygonVertexIndex]=vertexIndex;endOfFace=true;}var weightIndices=[];var weights=[];vertexPositionIndexes.push(vertexIndex*3,vertexIndex*3+1,vertexIndex*3+2);if(colorInfo){var data=getData(polygonVertexIndex,polygonIndex,vertexIndex,colorInfo);faceColors.push(data[0],data[1],data[2]);}if(skeleton){if(weightTable[vertexIndex]!==undefined){weightTable[vertexIndex].forEach(function(wt){weights.push(wt.weight);weightIndices.push(wt.id);});}if(weights.length>4){if(!displayedWeightsWarning){console.warn('THREE.FBXLoader: Vertex has more than 4 skinning weights assigned to vertex. Deleting additional weights.');displayedWeightsWarning=true;}var wIndex=[0,0,0,0];var Weight=[0,0,0,0];weights.forEach(function(weight,weightIndex){var currentWeight=weight;var currentIndex=weightIndices[weightIndex];Weight.forEach(function(comparedWeight,comparedWeightIndex,comparedWeightArray){if(currentWeight>comparedWeight){comparedWeightArray[comparedWeightIndex]=currentWeight;currentWeight=comparedWeight;var tmp=wIndex[comparedWeightIndex];wIndex[comparedWeightIndex]=currentIndex;currentIndex=tmp;}});});weightIndices=wIndex;weights=Weight;}// if the weight array is shorter than 4 pad with 0s
while(weights.length<4){weights.push(0);weightIndices.push(0);}for(var i=0;i<4;++i){faceWeights.push(weights[i]);faceWeightIndices.push(weightIndices[i]);}}if(normalInfo){var data=getData(polygonVertexIndex,polygonIndex,vertexIndex,normalInfo);faceNormals.push(data[0],data[1],data[2]);}if(materialInfo&&materialInfo.mappingType!=='AllSame'){var materialIndex=getData(polygonVertexIndex,polygonIndex,vertexIndex,materialInfo)[0];}if(uvInfo){uvInfo.forEach(function(uv,i){var data=getData(polygonVertexIndex,polygonIndex,vertexIndex,uv);if(faceUVs[i]===undefined){faceUVs[i]=[];}faceUVs[i].push(data[0]);faceUVs[i].push(data[1]);});}faceLength++;// we have reached the end of a face - it may have 4 sides though
// in which case the data is split to represent two 3 sided faces
if(endOfFace){for(var i=2;i<faceLength;i++){vertexBuffer.push(vertexPositions[vertexPositionIndexes[0]]);vertexBuffer.push(vertexPositions[vertexPositionIndexes[1]]);vertexBuffer.push(vertexPositions[vertexPositionIndexes[2]]);vertexBuffer.push(vertexPositions[vertexPositionIndexes[(i-1)*3]]);vertexBuffer.push(vertexPositions[vertexPositionIndexes[(i-1)*3+1]]);vertexBuffer.push(vertexPositions[vertexPositionIndexes[(i-1)*3+2]]);vertexBuffer.push(vertexPositions[vertexPositionIndexes[i*3]]);vertexBuffer.push(vertexPositions[vertexPositionIndexes[i*3+1]]);vertexBuffer.push(vertexPositions[vertexPositionIndexes[i*3+2]]);if(skeleton){vertexWeightsBuffer.push(faceWeights[0]);vertexWeightsBuffer.push(faceWeights[1]);vertexWeightsBuffer.push(faceWeights[2]);vertexWeightsBuffer.push(faceWeights[3]);vertexWeightsBuffer.push(faceWeights[(i-1)*4]);vertexWeightsBuffer.push(faceWeights[(i-1)*4+1]);vertexWeightsBuffer.push(faceWeights[(i-1)*4+2]);vertexWeightsBuffer.push(faceWeights[(i-1)*4+3]);vertexWeightsBuffer.push(faceWeights[i*4]);vertexWeightsBuffer.push(faceWeights[i*4+1]);vertexWeightsBuffer.push(faceWeights[i*4+2]);vertexWeightsBuffer.push(faceWeights[i*4+3]);weightsIndicesBuffer.push(faceWeightIndices[0]);weightsIndicesBuffer.push(faceWeightIndices[1]);weightsIndicesBuffer.push(faceWeightIndices[2]);weightsIndicesBuffer.push(faceWeightIndices[3]);weightsIndicesBuffer.push(faceWeightIndices[(i-1)*4]);weightsIndicesBuffer.push(faceWeightIndices[(i-1)*4+1]);weightsIndicesBuffer.push(faceWeightIndices[(i-1)*4+2]);weightsIndicesBuffer.push(faceWeightIndices[(i-1)*4+3]);weightsIndicesBuffer.push(faceWeightIndices[i*4]);weightsIndicesBuffer.push(faceWeightIndices[i*4+1]);weightsIndicesBuffer.push(faceWeightIndices[i*4+2]);weightsIndicesBuffer.push(faceWeightIndices[i*4+3]);}if(colorInfo){colorsBuffer.push(faceColors[0]);colorsBuffer.push(faceColors[1]);colorsBuffer.push(faceColors[2]);colorsBuffer.push(faceColors[(i-1)*3]);colorsBuffer.push(faceColors[(i-1)*3+1]);colorsBuffer.push(faceColors[(i-1)*3+2]);colorsBuffer.push(faceColors[i*3]);colorsBuffer.push(faceColors[i*3+1]);colorsBuffer.push(faceColors[i*3+2]);}if(materialInfo&&materialInfo.mappingType!=='AllSame'){materialIndexBuffer.push(materialIndex);materialIndexBuffer.push(materialIndex);materialIndexBuffer.push(materialIndex);}if(normalInfo){normalBuffer.push(faceNormals[0]);normalBuffer.push(faceNormals[1]);normalBuffer.push(faceNormals[2]);normalBuffer.push(faceNormals[(i-1)*3]);normalBuffer.push(faceNormals[(i-1)*3+1]);normalBuffer.push(faceNormals[(i-1)*3+2]);normalBuffer.push(faceNormals[i*3]);normalBuffer.push(faceNormals[i*3+1]);normalBuffer.push(faceNormals[i*3+2]);}if(uvInfo){uvInfo.forEach(function(uv,j){if(uvsBuffer[j]===undefined)uvsBuffer[j]=[];uvsBuffer[j].push(faceUVs[j][0]);uvsBuffer[j].push(faceUVs[j][1]);uvsBuffer[j].push(faceUVs[j][(i-1)*2]);uvsBuffer[j].push(faceUVs[j][(i-1)*2+1]);uvsBuffer[j].push(faceUVs[j][i*2]);uvsBuffer[j].push(faceUVs[j][i*2+1]);});}}polygonIndex++;faceLength=0;// reset arrays for the next face
vertexPositionIndexes=[];faceNormals=[];faceColors=[];faceUVs=[];faceWeights=[];faceWeightIndices=[];}});var geo=new THREE.BufferGeometry();geo.name=geometryNode.name;var positionAttribute=new THREE.Float32BufferAttribute(vertexBuffer,3);preTransform.applyToBufferAttribute(positionAttribute);geo.addAttribute('position',positionAttribute);if(colorsBuffer.length>0){geo.addAttribute('color',new THREE.Float32BufferAttribute(colorsBuffer,3));}if(skeleton){geo.addAttribute('skinIndex',new THREE.Float32BufferAttribute(weightsIndicesBuffer,4));geo.addAttribute('skinWeight',new THREE.Float32BufferAttribute(vertexWeightsBuffer,4));// used later to bind the skeleton to the model
geo.FBX_Deformer=skeleton;}if(normalBuffer.length>0){var normalAttribute=new THREE.Float32BufferAttribute(normalBuffer,3);var normalMatrix=new THREE.Matrix3().getNormalMatrix(preTransform);normalMatrix.applyToBufferAttribute(normalAttribute);geo.addAttribute('normal',normalAttribute);}uvsBuffer.forEach(function(uvBuffer,i){// subsequent uv buffers are called 'uv1', 'uv2', ...
var name='uv'+(i+1).toString();// the first uv buffer is just called 'uv'
if(i===0){name='uv';}geo.addAttribute(name,new THREE.Float32BufferAttribute(uvsBuffer[i],2));});if(materialInfo&&materialInfo.mappingType!=='AllSame'){// Convert the material indices of each vertex into rendering groups on the geometry.
var prevMaterialIndex=materialIndexBuffer[0];var startIndex=0;materialIndexBuffer.forEach(function(currentIndex,i){if(currentIndex!==prevMaterialIndex){geo.addGroup(startIndex,i-startIndex,prevMaterialIndex);prevMaterialIndex=currentIndex;startIndex=i;}});// the loop above doesn't add the last group, do that here.
if(geo.groups.length>0){var lastGroup=geo.groups[geo.groups.length-1];var lastIndex=lastGroup.start+lastGroup.count;if(lastIndex!==materialIndexBuffer.length){geo.addGroup(lastIndex,materialIndexBuffer.length-lastIndex,prevMaterialIndex);}}// case where there are multiple materials but the whole geometry is only
// using one of them
if(geo.groups.length===0){geo.addGroup(0,materialIndexBuffer.length,materialIndexBuffer[0]);}}return geo;}// Parse normal from FBXTree.Objects.Geometry.LayerElementNormal if it exists
function getNormals(NormalNode){var mappingType=NormalNode.MappingInformationType;var referenceType=NormalNode.ReferenceInformationType;var buffer=NormalNode.Normals.a;var indexBuffer=[];if(referenceType==='IndexToDirect'){if('NormalIndex'in NormalNode){indexBuffer=NormalNode.NormalIndex.a;}else if('NormalsIndex'in NormalNode){indexBuffer=NormalNode.NormalsIndex.a;}}return{dataSize:3,buffer:buffer,indices:indexBuffer,mappingType:mappingType,referenceType:referenceType};}// Parse UVs from FBXTree.Objects.Geometry.LayerElementUV if it exists
function getUVs(UVNode){var mappingType=UVNode.MappingInformationType;var referenceType=UVNode.ReferenceInformationType;var buffer=UVNode.UV.a;var indexBuffer=[];if(referenceType==='IndexToDirect'){indexBuffer=UVNode.UVIndex.a;}return{dataSize:2,buffer:buffer,indices:indexBuffer,mappingType:mappingType,referenceType:referenceType};}// Parse Vertex Colors from FBXTree.Objects.Geometry.LayerElementColor if it exists
function getColors(ColorNode){var mappingType=ColorNode.MappingInformationType;var referenceType=ColorNode.ReferenceInformationType;var buffer=ColorNode.Colors.a;var indexBuffer=[];if(referenceType==='IndexToDirect'){indexBuffer=ColorNode.ColorIndex.a;}return{dataSize:4,buffer:buffer,indices:indexBuffer,mappingType:mappingType,referenceType:referenceType};}// Parse mapping and material data in FBXTree.Objects.Geometry.LayerElementMaterial if it exists
function getMaterials(MaterialNode){var mappingType=MaterialNode.MappingInformationType;var referenceType=MaterialNode.ReferenceInformationType;if(mappingType==='NoMappingInformation'){return{dataSize:1,buffer:[0],indices:[0],mappingType:'AllSame',referenceType:referenceType};}var materialIndexBuffer=MaterialNode.Materials.a;// Since materials are stored as indices, there's a bit of a mismatch between FBX and what
// we expect.So we create an intermediate buffer that points to the index in the buffer,
// for conforming with the other functions we've written for other data.
var materialIndices=[];for(var i=0;i<materialIndexBuffer.length;++i){materialIndices.push(i);}return{dataSize:1,buffer:materialIndexBuffer,indices:materialIndices,mappingType:mappingType,referenceType:referenceType};}// Functions use the infoObject and given indices to return value array of geometry.
// Parameters:
// 	- polygonVertexIndex - Index of vertex in draw order (which index of the index buffer refers to this vertex).
// 	- polygonIndex - Index of polygon in geometry.
// 	- vertexIndex - Index of vertex inside vertex buffer (used because some data refers to old index buffer that we don't use anymore).
// 	- infoObject: can be materialInfo, normalInfo, UVInfo or colorInfo
// Index type:
//	- Direct: index is same as polygonVertexIndex
//	- IndexToDirect: infoObject has it's own set of indices
var dataArray=[];var GetData={ByPolygonVertex:{Direct:function(polygonVertexIndex,polygonIndex,vertexIndex,infoObject){var from=polygonVertexIndex*infoObject.dataSize;var to=polygonVertexIndex*infoObject.dataSize+infoObject.dataSize;return slice(dataArray,infoObject.buffer,from,to);},IndexToDirect:function(polygonVertexIndex,polygonIndex,vertexIndex,infoObject){var index=infoObject.indices[polygonVertexIndex];var from=index*infoObject.dataSize;var to=index*infoObject.dataSize+infoObject.dataSize;return slice(dataArray,infoObject.buffer,from,to);}},ByPolygon:{Direct:function(polygonVertexIndex,polygonIndex,vertexIndex,infoObject){var from=polygonIndex*infoObject.dataSize;var to=polygonIndex*infoObject.dataSize+infoObject.dataSize;return slice(dataArray,infoObject.buffer,from,to);},IndexToDirect:function(polygonVertexIndex,polygonIndex,vertexIndex,infoObject){var index=infoObject.indices[polygonIndex];var from=index*infoObject.dataSize;var to=index*infoObject.dataSize+infoObject.dataSize;return slice(dataArray,infoObject.buffer,from,to);}},ByVertice:{Direct:function(polygonVertexIndex,polygonIndex,vertexIndex,infoObject){var from=vertexIndex*infoObject.dataSize;var to=vertexIndex*infoObject.dataSize+infoObject.dataSize;return slice(dataArray,infoObject.buffer,from,to);}},AllSame:{IndexToDirect:function(polygonVertexIndex,polygonIndex,vertexIndex,infoObject){var from=infoObject.indices[0]*infoObject.dataSize;var to=infoObject.indices[0]*infoObject.dataSize+infoObject.dataSize;return slice(dataArray,infoObject.buffer,from,to);}}};function getData(polygonVertexIndex,polygonIndex,vertexIndex,infoObject){return GetData[infoObject.mappingType][infoObject.referenceType](polygonVertexIndex,polygonIndex,vertexIndex,infoObject);}// Generate a NurbGeometry from a node in FBXTree.Objects.Geometry
function parseNurbsGeometry(geometryNode){if(THREE.NURBSCurve===undefined){console.error('THREE.FBXLoader: The loader relies on THREE.NURBSCurve for any nurbs present in the model. Nurbs will show up as empty geometry.');return new THREE.BufferGeometry();}var order=parseInt(geometryNode.Order);if(isNaN(order)){console.error('THREE.FBXLoader: Invalid Order %s given for geometry ID: %s',geometryNode.Order,geometryNode.id);return new THREE.BufferGeometry();}var degree=order-1;var knots=geometryNode.KnotVector.a;var controlPoints=[];var pointsValues=geometryNode.Points.a;for(var i=0,l=pointsValues.length;i<l;i+=4){controlPoints.push(new THREE.Vector4().fromArray(pointsValues,i));}var startKnot,endKnot;if(geometryNode.Form==='Closed'){controlPoints.push(controlPoints[0]);}else if(geometryNode.Form==='Periodic'){startKnot=degree;endKnot=knots.length-1-startKnot;for(var i=0;i<degree;++i){controlPoints.push(controlPoints[i]);}}var curve=new THREE.NURBSCurve(degree,knots,controlPoints,startKnot,endKnot);var vertices=curve.getPoints(controlPoints.length*7);var positions=new Float32Array(vertices.length*3);vertices.forEach(function(vertex,i){vertex.toArray(positions,i*3);});var geometry=new THREE.BufferGeometry();geometry.addAttribute('position',new THREE.BufferAttribute(positions,3));return geometry;}// create the main THREE.Group() to be returned by the loader
function parseScene(FBXTree,connections,skeletons,geometryMap,materialMap){var sceneGraph=new THREE.Group();var modelMap=parseModels(FBXTree,skeletons,geometryMap,materialMap,connections);var modelNodes=FBXTree.Objects.Model;modelMap.forEach(function(model){var modelNode=modelNodes[model.ID];setLookAtProperties(FBXTree,model,modelNode,connections,sceneGraph);var parentConnections=connections.get(model.ID).parents;parentConnections.forEach(function(connection){var parent=modelMap.get(connection.ID);if(parent!==undefined)parent.add(model);});if(model.parent===null){sceneGraph.add(model);}});bindSkeleton(FBXTree,skeletons,geometryMap,modelMap,connections);addAnimations(FBXTree,connections,sceneGraph);createAmbientLight(FBXTree,sceneGraph);return sceneGraph;}// parse nodes in FBXTree.Objects.Model
function parseModels(FBXTree,skeletons,geometryMap,materialMap,connections){var modelMap=new Map();var modelNodes=FBXTree.Objects.Model;for(var nodeID in modelNodes){var id=parseInt(nodeID);var node=modelNodes[nodeID];var relationships=connections.get(id);var model=buildSkeleton(relationships,skeletons,id,node.attrName);if(!model){switch(node.attrType){case'Camera':model=createCamera(FBXTree,relationships);break;case'Light':model=createLight(FBXTree,relationships);break;case'Mesh':model=createMesh(FBXTree,relationships,geometryMap,materialMap);break;case'NurbsCurve':model=createCurve(relationships,geometryMap);break;case'LimbNode':// usually associated with a Bone, however if a Bone was not created we'll make a Group instead
case'Null':default:model=new THREE.Group();break;}model.name=THREE.PropertyBinding.sanitizeNodeName(node.attrName);model.ID=id;}setModelTransforms(FBXTree,model,node);modelMap.set(id,model);}return modelMap;}function buildSkeleton(relationships,skeletons,id,name){var bone=null;relationships.parents.forEach(function(parent){for(var ID in skeletons){var skeleton=skeletons[ID];skeleton.rawBones.forEach(function(rawBone,i){if(rawBone.ID===parent.ID){var subBone=bone;bone=new THREE.Bone();bone.matrixWorld.copy(rawBone.transformLink);// set name and id here - otherwise in cases where "subBone" is created it will not have a name / id
bone.name=THREE.PropertyBinding.sanitizeNodeName(name);bone.ID=id;skeleton.bones[i]=bone;// In cases where a bone is shared between multiple meshes
// duplicate the bone here and and it as a child of the first bone
if(subBone!==null){bone.add(subBone);}}});}});return bone;}// create a THREE.PerspectiveCamera or THREE.OrthographicCamera
function createCamera(FBXTree,relationships){var model;var cameraAttribute;relationships.children.forEach(function(child){var attr=FBXTree.Objects.NodeAttribute[child.ID];if(attr!==undefined){cameraAttribute=attr;}});if(cameraAttribute===undefined){model=new THREE.Object3D();}else{var type=0;if(cameraAttribute.CameraProjectionType!==undefined&&cameraAttribute.CameraProjectionType.value===1){type=1;}var nearClippingPlane=1;if(cameraAttribute.NearPlane!==undefined){nearClippingPlane=cameraAttribute.NearPlane.value/1000;}var farClippingPlane=1000;if(cameraAttribute.FarPlane!==undefined){farClippingPlane=cameraAttribute.FarPlane.value/1000;}var width=window.innerWidth;var height=window.innerHeight;if(cameraAttribute.AspectWidth!==undefined&&cameraAttribute.AspectHeight!==undefined){width=cameraAttribute.AspectWidth.value;height=cameraAttribute.AspectHeight.value;}var aspect=width/height;var fov=45;if(cameraAttribute.FieldOfView!==undefined){fov=cameraAttribute.FieldOfView.value;}var focalLength=cameraAttribute.FocalLength?cameraAttribute.FocalLength.value:null;switch(type){case 0:// Perspective
model=new THREE.PerspectiveCamera(fov,aspect,nearClippingPlane,farClippingPlane);if(focalLength!==null)model.setFocalLength(focalLength);break;case 1:// Orthographic
model=new THREE.OrthographicCamera(-width/2,width/2,height/2,-height/2,nearClippingPlane,farClippingPlane);break;default:console.warn('THREE.FBXLoader: Unknown camera type '+type+'.');model=new THREE.Object3D();break;}}return model;}// Create a THREE.DirectionalLight, THREE.PointLight or THREE.SpotLight
function createLight(FBXTree,relationships){var model;var lightAttribute;relationships.children.forEach(function(child){var attr=FBXTree.Objects.NodeAttribute[child.ID];if(attr!==undefined){lightAttribute=attr;}});if(lightAttribute===undefined){model=new THREE.Object3D();}else{var type;// LightType can be undefined for Point lights
if(lightAttribute.LightType===undefined){type=0;}else{type=lightAttribute.LightType.value;}var color=0xffffff;if(lightAttribute.Color!==undefined){color=new THREE.Color().fromArray(lightAttribute.Color.value);}var intensity=lightAttribute.Intensity===undefined?1:lightAttribute.Intensity.value/100;// light disabled
if(lightAttribute.CastLightOnObject!==undefined&&lightAttribute.CastLightOnObject.value===0){intensity=0;}var distance=0;if(lightAttribute.FarAttenuationEnd!==undefined){if(lightAttribute.EnableFarAttenuation!==undefined&&lightAttribute.EnableFarAttenuation.value===0){distance=0;}else{distance=lightAttribute.FarAttenuationEnd.value/1000;}}// TODO: could this be calculated linearly from FarAttenuationStart to FarAttenuationEnd?
var decay=1;switch(type){case 0:// Point
model=new THREE.PointLight(color,intensity,distance,decay);break;case 1:// Directional
model=new THREE.DirectionalLight(color,intensity);break;case 2:// Spot
var angle=Math.PI/3;if(lightAttribute.InnerAngle!==undefined){angle=THREE.Math.degToRad(lightAttribute.InnerAngle.value);}var penumbra=0;if(lightAttribute.OuterAngle!==undefined){// TODO: this is not correct - FBX calculates outer and inner angle in degrees
// with OuterAngle > InnerAngle && OuterAngle <= Math.PI
// while three.js uses a penumbra between (0, 1) to attenuate the inner angle
penumbra=THREE.Math.degToRad(lightAttribute.OuterAngle.value);penumbra=Math.max(penumbra,1);}model=new THREE.SpotLight(color,intensity,distance,angle,penumbra,decay);break;default:console.warn('THREE.FBXLoader: Unknown light type '+lightAttribute.LightType.value+', defaulting to a THREE.PointLight.');model=new THREE.PointLight(color,intensity);break;}if(lightAttribute.CastShadows!==undefined&&lightAttribute.CastShadows.value===1){model.castShadow=true;}}return model;}function createMesh(FBXTree,relationships,geometryMap,materialMap){var model;var geometry=null;var material=null;var materials=[];// get geometry and materials(s) from connections
relationships.children.forEach(function(child){if(geometryMap.has(child.ID)){geometry=geometryMap.get(child.ID);}if(materialMap.has(child.ID)){materials.push(materialMap.get(child.ID));}});if(materials.length>1){material=materials;}else if(materials.length>0){material=materials[0];}else{material=new THREE.MeshPhongMaterial({color:0xcccccc});materials.push(material);}if('color'in geometry.attributes){materials.forEach(function(material){material.vertexColors=THREE.VertexColors;});}if(geometry.FBX_Deformer){materials.forEach(function(material){material.skinning=true;});model=new THREE.SkinnedMesh(geometry,material);}else{model=new THREE.Mesh(geometry,material);}return model;}function createCurve(relationships,geometryMap){var geometry=relationships.children.reduce(function(geo,child){if(geometryMap.has(child.ID))geo=geometryMap.get(child.ID);return geo;},null);// FBX does not list materials for Nurbs lines, so we'll just put our own in here.
var material=new THREE.LineBasicMaterial({color:0x3300ff,linewidth:1});return new THREE.Line(geometry,material);}// Parse ambient color in FBXTree.GlobalSettings - if it's not set to black (default), create an ambient light
function createAmbientLight(FBXTree,sceneGraph){if('GlobalSettings'in FBXTree&&'AmbientColor'in FBXTree.GlobalSettings){var ambientColor=FBXTree.GlobalSettings.AmbientColor.value;var r=ambientColor[0];var g=ambientColor[1];var b=ambientColor[2];if(r!==0||g!==0||b!==0){var color=new THREE.Color(r,g,b);sceneGraph.add(new THREE.AmbientLight(color,1));}}}function setLookAtProperties(FBXTree,model,modelNode,connections,sceneGraph){if('LookAtProperty'in modelNode){var children=connections.get(model.ID).children;children.forEach(function(child){if(child.relationship==='LookAtProperty'){var lookAtTarget=FBXTree.Objects.Model[child.ID];if('Lcl_Translation'in lookAtTarget){var pos=lookAtTarget.Lcl_Translation.value;// DirectionalLight, SpotLight
if(model.target!==undefined){model.target.position.fromArray(pos);sceneGraph.add(model.target);}else{// Cameras and other Object3Ds
model.lookAt(new THREE.Vector3().fromArray(pos));}}}});}}// parse the model node for transform details and apply them to the model
function setModelTransforms(FBXTree,model,modelNode){// http://help.autodesk.com/view/FBX/2017/ENU/?guid=__cpp_ref_class_fbx_euler_html
if('RotationOrder'in modelNode){var enums=['XYZ',// default
'XZY','YZX','ZXY','YXZ','ZYX','SphericXYZ'];var value=parseInt(modelNode.RotationOrder.value,10);if(value>0&&value<6){// model.rotation.order = enums[ value ];
// Note: Euler order other than XYZ is currently not supported, so just display a warning for now
console.warn('THREE.FBXLoader: unsupported Euler Order: %s. Currently only XYZ order is supported. Animations and rotations may be incorrect.',enums[value]);}else if(value===6){console.warn('THREE.FBXLoader: unsupported Euler Order: Spherical XYZ. Animations and rotations may be incorrect.');}}if('Lcl_Translation'in modelNode){model.position.fromArray(modelNode.Lcl_Translation.value);}if('Lcl_Rotation'in modelNode){var rotation=modelNode.Lcl_Rotation.value.map(THREE.Math.degToRad);rotation.push('ZYX');model.rotation.fromArray(rotation);}if('Lcl_Scaling'in modelNode){model.scale.fromArray(modelNode.Lcl_Scaling.value);}if('PreRotation'in modelNode){var array=modelNode.PreRotation.value.map(THREE.Math.degToRad);array[3]='ZYX';var preRotations=new THREE.Euler().fromArray(array);preRotations=new THREE.Quaternion().setFromEuler(preRotations);var currentRotation=new THREE.Quaternion().setFromEuler(model.rotation);preRotations.multiply(currentRotation);model.rotation.setFromQuaternion(preRotations,'ZYX');}}function bindSkeleton(FBXTree,skeletons,geometryMap,modelMap,connections){var bindMatrices=parsePoseNodes(FBXTree);for(var ID in skeletons){var skeleton=skeletons[ID];var parents=connections.get(parseInt(skeleton.ID)).parents;parents.forEach(function(parent){if(geometryMap.has(parent.ID)){var geoID=parent.ID;var geoRelationships=connections.get(geoID);geoRelationships.parents.forEach(function(geoConnParent){if(modelMap.has(geoConnParent.ID)){var model=modelMap.get(geoConnParent.ID);model.bind(new THREE.Skeleton(skeleton.bones),bindMatrices[geoConnParent.ID]);}});}});}}function parsePoseNodes(FBXTree){var bindMatrices={};if('Pose'in FBXTree.Objects){var BindPoseNode=FBXTree.Objects.Pose;for(var nodeID in BindPoseNode){if(BindPoseNode[nodeID].attrType==='BindPose'){var poseNodes=BindPoseNode[nodeID].PoseNode;if(Array.isArray(poseNodes)){poseNodes.forEach(function(poseNode){bindMatrices[poseNode.Node]=new THREE.Matrix4().fromArray(poseNode.Matrix.a);});}else{bindMatrices[poseNodes.Node]=new THREE.Matrix4().fromArray(poseNodes.Matrix.a);}}}}return bindMatrices;}function parseAnimations(FBXTree,connections){// since the actual transformation data is stored in FBXTree.Objects.AnimationCurve,
// if this is undefined we can safely assume there are no animations
if(FBXTree.Objects.AnimationCurve===undefined)return undefined;var curveNodesMap=parseAnimationCurveNodes(FBXTree);parseAnimationCurves(FBXTree,connections,curveNodesMap);var layersMap=parseAnimationLayers(FBXTree,connections,curveNodesMap);var rawClips=parseAnimStacks(FBXTree,connections,layersMap);return rawClips;}// parse nodes in FBXTree.Objects.AnimationCurveNode
// each AnimationCurveNode holds data for an animation transform for a model (e.g. left arm rotation )
// and is referenced by an AnimationLayer
function parseAnimationCurveNodes(FBXTree){var rawCurveNodes=FBXTree.Objects.AnimationCurveNode;var curveNodesMap=new Map();for(var nodeID in rawCurveNodes){var rawCurveNode=rawCurveNodes[nodeID];if(rawCurveNode.attrName.match(/S|R|T/)!==null){var curveNode={id:rawCurveNode.id,attr:rawCurveNode.attrName,curves:{}};curveNodesMap.set(curveNode.id,curveNode);}}return curveNodesMap;}// parse nodes in FBXTree.Objects.AnimationCurve and connect them up to
// previously parsed AnimationCurveNodes. Each AnimationCurve holds data for a single animated
// axis ( e.g. times and values of x rotation)
function parseAnimationCurves(FBXTree,connections,curveNodesMap){var rawCurves=FBXTree.Objects.AnimationCurve;for(var nodeID in rawCurves){var animationCurve={id:rawCurves[nodeID].id,times:rawCurves[nodeID].KeyTime.a.map(convertFBXTimeToSeconds),values:rawCurves[nodeID].KeyValueFloat.a};var relationships=connections.get(animationCurve.id);if(relationships!==undefined){var animationCurveID=relationships.parents[0].ID;var animationCurveRelationship=relationships.parents[0].relationship;var axis='';if(animationCurveRelationship.match(/X/)){axis='x';}else if(animationCurveRelationship.match(/Y/)){axis='y';}else if(animationCurveRelationship.match(/Z/)){axis='z';}else{continue;}curveNodesMap.get(animationCurveID).curves[axis]=animationCurve;}}}// parse nodes in FBXTree.Objects.AnimationLayer. Each layers holds references
// to various AnimationCurveNodes and is referenced by an AnimationStack node
// note: theoretically a stack can multiple layers, however in practice there always seems to be one per stack
function parseAnimationLayers(FBXTree,connections,curveNodesMap){var rawLayers=FBXTree.Objects.AnimationLayer;var layersMap=new Map();for(var nodeID in rawLayers){var layerCurveNodes=[];var connection=connections.get(parseInt(nodeID));if(connection!==undefined){// all the animationCurveNodes used in the layer
var children=connection.children;children.forEach(function(child,i){if(curveNodesMap.has(child.ID)){var curveNode=curveNodesMap.get(child.ID);// check that the curves are defined for at least one axis, otherwise ignore the curveNode
if(curveNode.curves.x!==undefined||curveNode.curves.y!==undefined||curveNode.curves.z!==undefined){if(layerCurveNodes[i]===undefined){var modelID;connections.get(child.ID).parents.forEach(function(parent){if(parent.relationship!==undefined)modelID=parent.ID;});var rawModel=FBXTree.Objects.Model[modelID.toString()];var node={modelName:THREE.PropertyBinding.sanitizeNodeName(rawModel.attrName),initialPosition:[0,0,0],initialRotation:[0,0,0],initialScale:[1,1,1]};if('Lcl_Translation'in rawModel)node.initialPosition=rawModel.Lcl_Translation.value;if('Lcl_Rotation'in rawModel)node.initialRotation=rawModel.Lcl_Rotation.value;if('Lcl_Scaling'in rawModel)node.initialScale=rawModel.Lcl_Scaling.value;// if the animated model is pre rotated, we'll have to apply the pre rotations to every
// animation value as well
if('PreRotation'in rawModel)node.preRotations=rawModel.PreRotation.value;layerCurveNodes[i]=node;}layerCurveNodes[i][curveNode.attr]=curveNode;}}});layersMap.set(parseInt(nodeID),layerCurveNodes);}}return layersMap;}// parse nodes in FBXTree.Objects.AnimationStack. These are the top level node in the animation
// hierarchy. Each Stack node will be used to create a THREE.AnimationClip
function parseAnimStacks(FBXTree,connections,layersMap){var rawStacks=FBXTree.Objects.AnimationStack;// connect the stacks (clips) up to the layers
var rawClips={};for(var nodeID in rawStacks){var children=connections.get(parseInt(nodeID)).children;if(children.length>1){// it seems like stacks will always be associated with a single layer. But just in case there are files
// where there are multiple layers per stack, we'll display a warning
console.warn('THREE.FBXLoader: Encountered an animation stack with multiple layers, this is currently not supported. Ignoring subsequent layers.');}var layer=layersMap.get(children[0].ID);rawClips[nodeID]={name:rawStacks[nodeID].attrName,layer:layer};}return rawClips;}// take raw animation data from parseAnimations and connect it up to the loaded models
function addAnimations(FBXTree,connections,sceneGraph){sceneGraph.animations=[];var rawClips=parseAnimations(FBXTree,connections);if(rawClips===undefined)return;for(var key in rawClips){var rawClip=rawClips[key];var clip=addClip(rawClip);sceneGraph.animations.push(clip);}}function addClip(rawClip){var tracks=[];rawClip.layer.forEach(function(rawTracks){tracks=tracks.concat(generateTracks(rawTracks));});return new THREE.AnimationClip(rawClip.name,-1,tracks);}function generateTracks(rawTracks){var tracks=[];if(rawTracks.T!==undefined&&Object.keys(rawTracks.T.curves).length>0){var positionTrack=generateVectorTrack(rawTracks.modelName,rawTracks.T.curves,rawTracks.initialPosition,'position');if(positionTrack!==undefined)tracks.push(positionTrack);}if(rawTracks.R!==undefined&&Object.keys(rawTracks.R.curves).length>0){var rotationTrack=generateRotationTrack(rawTracks.modelName,rawTracks.R.curves,rawTracks.initialRotation,rawTracks.preRotations);if(rotationTrack!==undefined)tracks.push(rotationTrack);}if(rawTracks.S!==undefined&&Object.keys(rawTracks.S.curves).length>0){var scaleTrack=generateVectorTrack(rawTracks.modelName,rawTracks.S.curves,rawTracks.initialScale,'scale');if(scaleTrack!==undefined)tracks.push(scaleTrack);}return tracks;}function generateVectorTrack(modelName,curves,initialValue,type){var times=getTimesForAllAxes(curves);var values=getKeyframeTrackValues(times,curves,initialValue);return new THREE.VectorKeyframeTrack(modelName+'.'+type,times,values);}function generateRotationTrack(modelName,curves,initialValue,preRotations){if(curves.x!==undefined)curves.x.values=curves.x.values.map(THREE.Math.degToRad);if(curves.y!==undefined)curves.y.values=curves.y.values.map(THREE.Math.degToRad);if(curves.z!==undefined)curves.z.values=curves.z.values.map(THREE.Math.degToRad);var times=getTimesForAllAxes(curves);var values=getKeyframeTrackValues(times,curves,initialValue);if(preRotations!==undefined){preRotations=preRotations.map(THREE.Math.degToRad);preRotations.push('ZYX');preRotations=new THREE.Euler().fromArray(preRotations);preRotations=new THREE.Quaternion().setFromEuler(preRotations);}var quaternion=new THREE.Quaternion();var euler=new THREE.Euler();var quaternionValues=[];for(var i=0;i<values.length;i+=3){euler.set(values[i],values[i+1],values[i+2],'ZYX');quaternion.setFromEuler(euler);if(preRotations!==undefined)quaternion.premultiply(preRotations);quaternion.toArray(quaternionValues,i/3*4);}return new THREE.QuaternionKeyframeTrack(modelName+'.quaternion',times,quaternionValues);}function getKeyframeTrackValues(times,curves,initialValue){var prevValue=initialValue;var values=[];var xIndex=-1;var yIndex=-1;var zIndex=-1;times.forEach(function(time){if(curves.x)xIndex=curves.x.times.indexOf(time);if(curves.y)yIndex=curves.y.times.indexOf(time);if(curves.z)zIndex=curves.z.times.indexOf(time);// if there is an x value defined for this frame, use that
if(xIndex!==-1){var xValue=curves.x.values[xIndex];values.push(xValue);prevValue[0]=xValue;}else{// otherwise use the x value from the previous frame
values.push(prevValue[0]);}if(yIndex!==-1){var yValue=curves.y.values[yIndex];values.push(yValue);prevValue[1]=yValue;}else{values.push(prevValue[1]);}if(zIndex!==-1){var zValue=curves.z.values[zIndex];values.push(zValue);prevValue[2]=zValue;}else{values.push(prevValue[2]);}});return values;}// For all animated objects, times are defined separately for each axis
// Here we'll combine the times into one sorted array without duplicates
function getTimesForAllAxes(curves){var times=[];// first join together the times for each axis, if defined
if(curves.x!==undefined)times=times.concat(curves.x.times);if(curves.y!==undefined)times=times.concat(curves.y.times);if(curves.z!==undefined)times=times.concat(curves.z.times);// then sort them and remove duplicates
times=times.sort(function(a,b){return a-b;}).filter(function(elem,index,array){return array.indexOf(elem)==index;});return times;}// parse an FBX file in ASCII format
function TextParser(){}Object.assign(TextParser.prototype,{getPrevNode:function(){return this.nodeStack[this.currentIndent-2];},getCurrentNode:function(){return this.nodeStack[this.currentIndent-1];},getCurrentProp:function(){return this.currentProp;},pushStack:function(node){this.nodeStack.push(node);this.currentIndent+=1;},popStack:function(){this.nodeStack.pop();this.currentIndent-=1;},setCurrentProp:function(val,name){this.currentProp=val;this.currentPropName=name;},parse:function(text){this.currentIndent=0;this.allNodes=new FBXTree();this.nodeStack=[];this.currentProp=[];this.currentPropName='';var self=this;var split=text.split('\n');split.forEach(function(line,i){var matchComment=line.match(/^[\s\t]*;/);var matchEmpty=line.match(/^[\s\t]*$/);if(matchComment||matchEmpty)return;var matchBeginning=line.match('^\\t{'+self.currentIndent+'}(\\w+):(.*){','');var matchProperty=line.match('^\\t{'+self.currentIndent+'}(\\w+):[\\s\\t\\r\\n](.*)');var matchEnd=line.match('^\\t{'+(self.currentIndent-1)+'}}');if(matchBeginning){self.parseNodeBegin(line,matchBeginning);}else if(matchProperty){self.parseNodeProperty(line,matchProperty,split[++i]);}else if(matchEnd){self.popStack();}else if(line.match(/^[^\s\t}]/)){// large arrays are split over multiple lines terminated with a ',' character
// if this is encountered the line needs to be joined to the previous line
self.parseNodePropertyContinued(line);}});return this.allNodes;},parseNodeBegin:function(line,property){var nodeName=property[1].trim().replace(/^"/,'').replace(/"$/,'');var nodeAttrs=property[2].split(',').map(function(attr){return attr.trim().replace(/^"/,'').replace(/"$/,'');});var node={name:nodeName};var attrs=this.parseNodeAttr(nodeAttrs);var currentNode=this.getCurrentNode();// a top node
if(this.currentIndent===0){this.allNodes.add(nodeName,node);}else{// a subnode
// if the subnode already exists, append it
if(nodeName in currentNode){// special case Pose needs PoseNodes as an array
if(nodeName==='PoseNode'){currentNode.PoseNode.push(node);}else if(currentNode[nodeName].id!==undefined){currentNode[nodeName]={};currentNode[nodeName][currentNode[nodeName].id]=currentNode[nodeName];}if(attrs.id!=='')currentNode[nodeName][attrs.id]=node;}else if(typeof attrs.id==='number'){currentNode[nodeName]={};currentNode[nodeName][attrs.id]=node;}else if(nodeName!=='Properties70'){if(nodeName==='PoseNode')currentNode[nodeName]=[node];else currentNode[nodeName]=node;}}if(typeof attrs.id==='number')node.id=attrs.id;if(attrs.name!=='')node.attrName=attrs.name;if(attrs.type!=='')node.attrType=attrs.type;this.pushStack(node);},parseNodeAttr:function(attrs){var id=attrs[0];if(attrs[0]!==''){id=parseInt(attrs[0]);if(isNaN(id)){id=attrs[0];}}var name='',type='';if(attrs.length>1){name=attrs[1].replace(/^(\w+)::/,'');type=attrs[2];}return{id:id,name:name,type:type};},parseNodeProperty:function(line,property,contentLine){var propName=property[1].replace(/^"/,'').replace(/"$/,'').trim();var propValue=property[2].replace(/^"/,'').replace(/"$/,'').trim();// for special case: base64 image data follows "Content: ," line
//	Content: ,
//	 "/9j/4RDaRXhpZgAATU0A..."
if(propName==='Content'&&propValue===','){propValue=contentLine.replace(/"/g,'').replace(/,$/,'').trim();}var currentNode=this.getCurrentNode();var parentName=currentNode.name;if(parentName==='Properties70'){this.parseNodeSpecialProperty(line,propName,propValue);return;}// Connections
if(propName==='C'){var connProps=propValue.split(',').slice(1);var from=parseInt(connProps[0]);var to=parseInt(connProps[1]);var rest=propValue.split(',').slice(3);rest=rest.map(function(elem){return elem.trim().replace(/^"/,'');});propName='connections';propValue=[from,to];append(propValue,rest);if(currentNode[propName]===undefined){currentNode[propName]=[];}}// Node
if(propName==='Node')currentNode.id=propValue;// connections
if(propName in currentNode&&Array.isArray(currentNode[propName])){currentNode[propName].push(propValue);}else{if(propName!=='a')currentNode[propName]=propValue;else currentNode.a=propValue;}this.setCurrentProp(currentNode,propName);// convert string to array, unless it ends in ',' in which case more will be added to it
if(propName==='a'&&propValue.slice(-1)!==','){currentNode.a=parseNumberArray(propValue);}},parseNodePropertyContinued:function(line){var currentNode=this.getCurrentNode();currentNode.a+=line;// if the line doesn't end in ',' we have reached the end of the property value
// so convert the string to an array
if(line.slice(-1)!==','){currentNode.a=parseNumberArray(currentNode.a);}},// parse "Property70"
parseNodeSpecialProperty:function(line,propName,propValue){// split this
// P: "Lcl Scaling", "Lcl Scaling", "", "A",1,1,1
// into array like below
// ["Lcl Scaling", "Lcl Scaling", "", "A", "1,1,1" ]
var props=propValue.split('",').map(function(prop){return prop.trim().replace(/^\"/,'').replace(/\s/,'_');});var innerPropName=props[0];var innerPropType1=props[1];var innerPropType2=props[2];var innerPropFlag=props[3];var innerPropValue=props[4];// cast values where needed, otherwise leave as strings
switch(innerPropType1){case'int':case'enum':case'bool':case'ULongLong':case'double':case'Number':case'FieldOfView':innerPropValue=parseFloat(innerPropValue);break;case'Color':case'ColorRGB':case'Vector3D':case'Lcl_Translation':case'Lcl_Rotation':case'Lcl_Scaling':innerPropValue=parseNumberArray(innerPropValue);break;}// CAUTION: these props must append to parent's parent
this.getPrevNode()[innerPropName]={'type':innerPropType1,'type2':innerPropType2,'flag':innerPropFlag,'value':innerPropValue};this.setCurrentProp(this.getPrevNode(),innerPropName);}});// Parse an FBX file in Binary format
function BinaryParser(){}Object.assign(BinaryParser.prototype,{parse:function(buffer){var reader=new BinaryReader(buffer);reader.skip(23);// skip magic 23 bytes
var version=reader.getUint32();console.log('THREE.FBXLoader: FBX binary version: '+version);var allNodes=new FBXTree();while(!this.endOfContent(reader)){var node=this.parseNode(reader,version);if(node!==null)allNodes.add(node.name,node);}return allNodes;},// Check if reader has reached the end of content.
endOfContent:function(reader){// footer size: 160bytes + 16-byte alignment padding
// - 16bytes: magic
// - padding til 16-byte alignment (at least 1byte?)
//	(seems like some exporters embed fixed 15 or 16bytes?)
// - 4bytes: magic
// - 4bytes: version
// - 120bytes: zero
// - 16bytes: magic
if(reader.size()%16===0){return(reader.getOffset()+160+16&~0xf)>=reader.size();}else{return reader.getOffset()+160+16>=reader.size();}},// recursively parse nodes until the end of the file is reached
parseNode:function(reader,version){var node={};// The first three data sizes depends on version.
var endOffset=version>=7500?reader.getUint64():reader.getUint32();var numProperties=version>=7500?reader.getUint64():reader.getUint32();// note: do not remove this even if you get a linter warning as it moves the buffer forward
var propertyListLen=version>=7500?reader.getUint64():reader.getUint32();var nameLen=reader.getUint8();var name=reader.getString(nameLen);// Regards this node as NULL-record if endOffset is zero
if(endOffset===0)return null;var propertyList=[];for(var i=0;i<numProperties;i++){propertyList.push(this.parseProperty(reader));}// Regards the first three elements in propertyList as id, attrName, and attrType
var id=propertyList.length>0?propertyList[0]:'';var attrName=propertyList.length>1?propertyList[1]:'';var attrType=propertyList.length>2?propertyList[2]:'';// check if this node represents just a single property
// like (name, 0) set or (name2, [0, 1, 2]) set of {name: 0, name2: [0, 1, 2]}
node.singleProperty=numProperties===1&&reader.getOffset()===endOffset?true:false;while(endOffset>reader.getOffset()){var subNode=this.parseNode(reader,version);if(subNode!==null)this.parseSubNode(name,node,subNode);}node.propertyList=propertyList;// raw property list used by parent
if(typeof id==='number')node.id=id;if(attrName!=='')node.attrName=attrName;if(attrType!=='')node.attrType=attrType;if(name!=='')node.name=name;return node;},parseSubNode:function(name,node,subNode){// special case: child node is single property
if(subNode.singleProperty===true){var value=subNode.propertyList[0];if(Array.isArray(value)){node[subNode.name]=subNode;subNode.a=value;}else{node[subNode.name]=value;}}else if(name==='Connections'&&subNode.name==='C'){var array=[];subNode.propertyList.forEach(function(property,i){// first Connection is FBX type (OO, OP, etc.). We'll discard these
if(i!==0)array.push(property);});if(node.connections===undefined){node.connections=[];}node.connections.push(array);}else if(subNode.name==='Properties70'){var keys=Object.keys(subNode);keys.forEach(function(key){node[key]=subNode[key];});}else if(name==='Properties70'&&subNode.name==='P'){var innerPropName=subNode.propertyList[0];var innerPropType1=subNode.propertyList[1];var innerPropType2=subNode.propertyList[2];var innerPropFlag=subNode.propertyList[3];var innerPropValue;if(innerPropName.indexOf('Lcl ')===0)innerPropName=innerPropName.replace('Lcl ','Lcl_');if(innerPropType1.indexOf('Lcl ')===0)innerPropType1=innerPropType1.replace('Lcl ','Lcl_');if(innerPropType1==='Color'||innerPropType1==='ColorRGB'||innerPropType1==='Vector'||innerPropType1==='Vector3D'||innerPropType1.indexOf('Lcl_')===0){innerPropValue=[subNode.propertyList[4],subNode.propertyList[5],subNode.propertyList[6]];}else{innerPropValue=subNode.propertyList[4];}// this will be copied to parent, see above
node[innerPropName]={'type':innerPropType1,'type2':innerPropType2,'flag':innerPropFlag,'value':innerPropValue};}else if(node[subNode.name]===undefined){if(typeof subNode.id==='number'){node[subNode.name]={};node[subNode.name][subNode.id]=subNode;}else{node[subNode.name]=subNode;}}else{if(subNode.name==='PoseNode'){if(!Array.isArray(node[subNode.name])){node[subNode.name]=[node[subNode.name]];}node[subNode.name].push(subNode);}else if(node[subNode.name][subNode.id]===undefined){node[subNode.name][subNode.id]=subNode;}}},parseProperty:function(reader){var type=reader.getString(1);switch(type){case'C':return reader.getBoolean();case'D':return reader.getFloat64();case'F':return reader.getFloat32();case'I':return reader.getInt32();case'L':return reader.getInt64();case'R':var length=reader.getUint32();return reader.getArrayBuffer(length);case'S':var length=reader.getUint32();return reader.getString(length);case'Y':return reader.getInt16();case'b':case'c':case'd':case'f':case'i':case'l':var arrayLength=reader.getUint32();var encoding=reader.getUint32();// 0: non-compressed, 1: compressed
var compressedLength=reader.getUint32();if(encoding===0){switch(type){case'b':case'c':return reader.getBooleanArray(arrayLength);case'd':return reader.getFloat64Array(arrayLength);case'f':return reader.getFloat32Array(arrayLength);case'i':return reader.getInt32Array(arrayLength);case'l':return reader.getInt64Array(arrayLength);}}if(window.Zlib===undefined){console.error('THREE.FBXLoader: External library Inflate.min.js required, obtain or import from https://github.com/imaya/zlib.js');}var inflate=new Zlib.Inflate(new Uint8Array(reader.getArrayBuffer(compressedLength)));// eslint-disable-line no-undef
var reader2=new BinaryReader(inflate.decompress().buffer);switch(type){case'b':case'c':return reader2.getBooleanArray(arrayLength);case'd':return reader2.getFloat64Array(arrayLength);case'f':return reader2.getFloat32Array(arrayLength);case'i':return reader2.getInt32Array(arrayLength);case'l':return reader2.getInt64Array(arrayLength);}default:throw new Error('THREE.FBXLoader: Unknown property type '+type);}}});function BinaryReader(buffer,littleEndian){this.dv=new DataView(buffer);this.offset=0;this.littleEndian=littleEndian!==undefined?littleEndian:true;}Object.assign(BinaryReader.prototype,{getOffset:function(){return this.offset;},size:function(){return this.dv.buffer.byteLength;},skip:function(length){this.offset+=length;},// seems like true/false representation depends on exporter.
// true: 1 or 'Y'(=0x59), false: 0 or 'T'(=0x54)
// then sees LSB.
getBoolean:function(){return(this.getUint8()&1)===1;},getBooleanArray:function(size){var a=[];for(var i=0;i<size;i++){a.push(this.getBoolean());}return a;},getUint8:function(){var value=this.dv.getUint8(this.offset);this.offset+=1;return value;},getInt16:function(){var value=this.dv.getInt16(this.offset,this.littleEndian);this.offset+=2;return value;},getInt32:function(){var value=this.dv.getInt32(this.offset,this.littleEndian);this.offset+=4;return value;},getInt32Array:function(size){var a=[];for(var i=0;i<size;i++){a.push(this.getInt32());}return a;},getUint32:function(){var value=this.dv.getUint32(this.offset,this.littleEndian);this.offset+=4;return value;},// JavaScript doesn't support 64-bit integer so calculate this here
// 1 << 32 will return 1 so using multiply operation instead here.
// There's a possibility that this method returns wrong value if the value
// is out of the range between Number.MAX_SAFE_INTEGER and Number.MIN_SAFE_INTEGER.
// TODO: safely handle 64-bit integer
getInt64:function(){var low,high;if(this.littleEndian){low=this.getUint32();high=this.getUint32();}else{high=this.getUint32();low=this.getUint32();}// calculate negative value
if(high&0x80000000){high=~high&0xFFFFFFFF;low=~low&0xFFFFFFFF;if(low===0xFFFFFFFF)high=high+1&0xFFFFFFFF;low=low+1&0xFFFFFFFF;return-(high*0x100000000+low);}return high*0x100000000+low;},getInt64Array:function(size){var a=[];for(var i=0;i<size;i++){a.push(this.getInt64());}return a;},// Note: see getInt64() comment
getUint64:function(){var low,high;if(this.littleEndian){low=this.getUint32();high=this.getUint32();}else{high=this.getUint32();low=this.getUint32();}return high*0x100000000+low;},getFloat32:function(){var value=this.dv.getFloat32(this.offset,this.littleEndian);this.offset+=4;return value;},getFloat32Array:function(size){var a=[];for(var i=0;i<size;i++){a.push(this.getFloat32());}return a;},getFloat64:function(){var value=this.dv.getFloat64(this.offset,this.littleEndian);this.offset+=8;return value;},getFloat64Array:function(size){var a=[];for(var i=0;i<size;i++){a.push(this.getFloat64());}return a;},getArrayBuffer:function(size){var value=this.dv.buffer.slice(this.offset,this.offset+size);this.offset+=size;return value;},getString:function(size){var a=new Uint8Array(size);for(var i=0;i<size;i++){a[i]=this.getUint8();}var nullByte=a.indexOf(0);if(nullByte>=0)a=a.slice(0,nullByte);return THREE.LoaderUtils.decodeText(a);}});// FBXTree holds a representation of the FBX data, returned by the TextParser ( FBX ASCII format)
// and BinaryParser( FBX Binary format)
function FBXTree(){}Object.assign(FBXTree.prototype,{add:function(key,val){this[key]=val;}});function isFbxFormatBinary(buffer){var CORRECT='Kaydara FBX Binary  \0';return buffer.byteLength>=CORRECT.length&&CORRECT===convertArrayBufferToString(buffer,0,CORRECT.length);}function isFbxFormatASCII(text){var CORRECT=['K','a','y','d','a','r','a','\\','F','B','X','\\','B','i','n','a','r','y','\\','\\'];var cursor=0;function read(offset){var result=text[offset-1];text=text.slice(cursor+offset);cursor++;return result;}for(var i=0;i<CORRECT.length;++i){var num=read(1);if(num===CORRECT[i]){return false;}}return true;}function getFbxVersion(text){var versionRegExp=/FBXVersion: (\d+)/;var match=text.match(versionRegExp);if(match){var version=parseInt(match[1]);return version;}throw new Error('THREE.FBXLoader: Cannot find the version number for the file given.');}// Converts FBX ticks into real time seconds.
function convertFBXTimeToSeconds(time){return time/46186158000;}// Parses comma separated list of numbers and returns them an array.
// Used internally by the TextParser
function parseNumberArray(value){var array=value.split(',').map(function(val){return parseFloat(val);});return array;}function convertArrayBufferToString(buffer,from,to){if(from===undefined)from=0;if(to===undefined)to=buffer.byteLength;return THREE.LoaderUtils.decodeText(new Uint8Array(buffer,from,to));}function append(a,b){for(var i=0,j=a.length,l=b.length;i<l;i++,j++){a[j]=b[i];}}function slice(a,b,from,to){for(var i=from,j=0;i<to;i++,j++){a[j]=b[i];}return a;}})();

/***/ }),

/***/ "./src/lib/rounded.js":
/*!****************************!*\
  !*** ./src/lib/rounded.js ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

AFRAME.registerComponent('rounded',{schema:{enabled:{default:true},width:{type:'number',default:1},height:{type:'number',default:1},radius:{type:'number',default:0.3},topLeftRadius:{type:'number',default:-1},topRightRadius:{type:'number',default:-1},bottomLeftRadius:{type:'number',default:-1},bottomRightRadius:{type:'number',default:-1},color:{type:'color',default:"#F0F0F0"},opacity:{type:'number',default:1}},init:function(){this.rounded=new THREE.Mesh(this.draw(),new THREE.MeshPhongMaterial({color:new THREE.Color(this.data.color),side:THREE.DoubleSide}));this.updateOpacity();this.el.setObject3D('mesh',this.rounded);},update:function(){if(this.data.enabled){if(this.rounded){this.rounded.visible=true;this.rounded.geometry=this.draw();this.rounded.material.color=new THREE.Color(this.data.color);this.updateOpacity();}}else{this.rounded.visible=false;}},updateOpacity:function(){if(this.data.opacity<0){this.data.opacity=0;}if(this.data.opacity>1){this.data.opacity=1;}if(this.data.opacity<1){this.rounded.material.transparent=true;}else{this.rounded.material.transparent=false;}this.rounded.material.opacity=this.data.opacity;},tick:function(){},remove:function(){if(!this.rounded){return;}this.el.object3D.remove(this.rounded);this.rounded=null;},draw:function(){var roundedRectShape=new THREE.Shape();function roundedRect(ctx,x,y,width,height,topLeftRadius,topRightRadius,bottomLeftRadius,bottomRightRadius){if(!topLeftRadius){topLeftRadius=0.00001;}if(!topRightRadius){topRightRadius=0.00001;}if(!bottomLeftRadius){bottomLeftRadius=0.00001;}if(!bottomRightRadius){bottomRightRadius=0.00001;}ctx.moveTo(x,y+topLeftRadius);ctx.lineTo(x,y+height-topLeftRadius);ctx.quadraticCurveTo(x,y+height,x+topLeftRadius,y+height);ctx.lineTo(x+width-topRightRadius,y+height);ctx.quadraticCurveTo(x+width,y+height,x+width,y+height-topRightRadius);ctx.lineTo(x+width,y+bottomRightRadius);ctx.quadraticCurveTo(x+width,y,x+width-bottomRightRadius,y);ctx.lineTo(x+bottomLeftRadius,y);ctx.quadraticCurveTo(x,y,x,y+bottomLeftRadius);}var corners=[this.data.radius,this.data.radius,this.data.radius,this.data.radius];if(this.data.topLeftRadius!=-1){corners[0]=this.data.topLeftRadius;}if(this.data.topRightRadius!=-1){corners[1]=this.data.topRightRadius;}if(this.data.bottomLeftRadius!=-1){corners[2]=this.data.bottomLeftRadius;}if(this.data.bottomRightRadius!=-1){corners[3]=this.data.bottomRightRadius;}roundedRect(roundedRectShape,0,0,this.data.width,this.data.height,corners[0],corners[1],corners[2],corners[3]);return new THREE.ShapeBufferGeometry(roundedRectShape);},pause:function(){},play:function(){}});AFRAME.registerPrimitive('a-rounded',{defaultComponents:{rounded:{}},mappings:{enabled:'rounded.enabled',width:'rounded.width',height:'rounded.height',radius:'rounded.radius','top-left-radius':'rounded.topLeftRadius','top-right-radius':'rounded.topRightRadius','bottom-left-radius':'rounded.bottomLeftRadius','bottom-right-radius':'rounded.bottomRightRadius',color:'rounded.color',opacity:'rounded.opacity'}});

/***/ }),

/***/ "./src/loaders/animation-mixer.js":
/*!****************************************!*\
  !*** ./src/loaders/animation-mixer.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

const LoopMode={once:THREE.LoopOnce,repeat:THREE.LoopRepeat,pingpong:THREE.LoopPingPong};/**
 * animation-mixer
 *
 * Player for animation clips. Intended to be compatible with any model format that supports
 * skeletal or morph animations through THREE.AnimationMixer.
 * See: https://threejs.org/docs/?q=animation#Reference/Animation/AnimationMixer
 */AFRAME.registerComponent('animation-mixer',{schema:{clip:{default:'*'},duration:{default:0},crossFadeDuration:{default:0},loop:{default:'repeat',oneOf:Object.keys(LoopMode)},repetitions:{default:Infinity,min:0}},init:function(){/** @type {THREE.Mesh} */this.model=null;/** @type {THREE.AnimationMixer} */this.mixer=null;/** @type {Array<THREE.AnimationAction>} */this.activeActions=[];const model=this.el.getObject3D('mesh');if(model){this.load(model);}else{this.el.addEventListener('model-loaded',e=>{this.load(e.detail.model);});}},load:function(model){const el=this.el;this.model=model;this.mixer=new THREE.AnimationMixer(model);this.mixer.addEventListener('loop',e=>{el.emit('animation-loop',{action:e.action,loopDelta:e.loopDelta});});this.mixer.addEventListener('finished',e=>{el.emit('animation-finished',{action:e.action,direction:e.direction});});if(this.data.clip)this.update({});},remove:function(){if(this.mixer)this.mixer.stopAllAction();},update:function(previousData){if(!previousData)return;this.stopAction();if(this.data.clip){this.playAction();}},stopAction:function(){const data=this.data;for(let i=0;i<this.activeActions.length;i++){data.crossFadeDuration?this.activeActions[i].fadeOut(data.crossFadeDuration):this.activeActions[i].stop();}this.activeActions.length=0;},playAction:function(){if(!this.mixer)return;const model=this.model,data=this.data,clips=model.animations||(model.geometry||{}).animations||[];if(!clips.length)return;const re=wildcardToRegExp(data.clip);for(let clip,i=0;clip=clips[i];i++){if(clip.name.match(re)){const action=this.mixer.clipAction(clip,model);action.enabled=true;if(data.duration)action.setDuration(data.duration);action.setLoop(LoopMode[data.loop],data.repetitions).fadeIn(data.crossFadeDuration).play();this.activeActions.push(action);}}},tick:function(t,dt){if(this.mixer&&!isNaN(dt))this.mixer.update(dt/1000);}});/**
 * Creates a RegExp from the given string, converting asterisks to .* expressions,
 * and escaping all other characters.
 */function wildcardToRegExp(s){return new RegExp('^'+s.split(/\*+/).map(regExpEscape).join('.*')+'$');}/**
 * RegExp-escapes all characters in the given string.
 */function regExpEscape(s){return s.replace(/[|\\{}()[\]^$+*?.]/g,'\\$&');}

/***/ }),

/***/ "./src/loaders/fbx-model.js":
/*!**********************************!*\
  !*** ./src/loaders/fbx-model.js ***!
  \**********************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _lib_FBXLoader__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../lib/FBXLoader */ "./src/lib/FBXLoader.js");
/* harmony import */ var _lib_FBXLoader__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_lib_FBXLoader__WEBPACK_IMPORTED_MODULE_0__);
/**
 * fbx-model
 *
 * Loader for FBX format. Supports ASCII, but *not* binary, models.
 */AFRAME.registerComponent('fbx-model',{schema:{src:{type:'asset'},crossorigin:{default:''}},init:function(){this.model=null;},update:function(){const data=this.data;if(!data.src)return;this.remove();const loader=new THREE.FBXLoader();if(data.crossorigin)loader.setCrossOrigin(data.crossorigin);loader.load(data.src,this.load.bind(this));},load:function(model){this.model=model;this.el.setObject3D('mesh',model);this.el.emit('model-loaded',{format:'fbx',model:model});},remove:function(){if(this.model)this.el.removeObject3D('mesh');}});

/***/ }),

/***/ "./src/styles/button.css":
/*!*******************************!*\
  !*** ./src/styles/button.css ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../node_modules/css-loader!./button.css */ "./node_modules/css-loader/index.js!./src/styles/button.css");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./src/styles/confetti.css":
/*!*********************************!*\
  !*** ./src/styles/confetti.css ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../node_modules/css-loader!./confetti.css */ "./node_modules/css-loader/index.js!./src/styles/confetti.css");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./src/styles/index.css":
/*!******************************!*\
  !*** ./src/styles/index.css ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../node_modules/css-loader!./index.css */ "./node_modules/css-loader/index.js!./src/styles/index.css");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./src/styles/modal.css":
/*!******************************!*\
  !*** ./src/styles/modal.css ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../node_modules/css-loader!./modal.css */ "./node_modules/css-loader/index.js!./src/styles/modal.css");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./src/styles/shake.css":
/*!******************************!*\
  !*** ./src/styles/shake.css ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../node_modules/css-loader!./shake.css */ "./node_modules/css-loader/index.js!./src/styles/shake.css");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./src/styles/socials.css":
/*!********************************!*\
  !*** ./src/styles/socials.css ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../node_modules/css-loader!./socials.css */ "./node_modules/css-loader/index.js!./src/styles/socials.css");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./src/styles/vignette.css":
/*!*********************************!*\
  !*** ./src/styles/vignette.css ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../node_modules/css-loader!./vignette.css */ "./node_modules/css-loader/index.js!./src/styles/vignette.css");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ 0:
/*!****************************!*\
  !*** multi ./src/index.js ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./src/index.js */"./src/index.js");


/***/ })

/******/ });
//# sourceMappingURL=app.js.map