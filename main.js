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

/***/ "./node_modules/css-loader/dist/cjs.js!./src/styles.css"
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/styles.css ***!
  \**************************************************************/
(module, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, `*{\n    margin: 0;\n    padding: 0;\n}\n\n:root {\n  --handwritten: 'Swanky and Moo Moo', cursive;\n  --cursive:'Cormorant Garamond', sans-serif;\n  --body:'DM Sans', sans-serif;\n}\n\nh1 {\n    font-family: var(--cursive);\n    font-style: italic;\n    padding: 0.5em;\n    font-weight: 150;\n}\n\n\n.AboutTitle{\n    font-family: var(--cursive);\n    font-style: italic;\n    font-size: 50px;\n    font-weight: 150;\n}\n\n#content{\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    padding: 1em;\n    background: linear-gradient(170deg, #FFF8F0 0%, #FBE8EA 40%, #FFFAF5 100%);\n       padding-top: 80px;\n}\n\nnav{\n    background: #FFF8F0;\n    overflow: hidden;\n\n}\n\nnav{\n    display: flex;\n    justify-content: center;\n}\n\n.menu-icons{\n    display: flex;\n    gap: 1em;\n    padding: 2em;\n}\n\n.handwritten,.icon{\n    font-family: var(--handwritten);\n}\n\n.body-text,.footer-details{\n    font-family: var(--body);\n}\n\n.footer-details {\n    display: flex;\n    flex-direction: row;\n    gap: 0.5em;\n}\n\n.footer-detail-item,.blurbTitle,.blurbContent{\n    font-family: var(--body);\n}\n\n.footer{\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    background: #FFF8F0ee;\n      width: calc(100% + 2em);\n  margin-left: -1em;\n  margin-right: -1em;\n  margin-bottom: -1em;\n  padding: 10px;\n\n}\n.blurbTitle{\nfont-size: 20px;\n  color: #3E2723;\n  line-height: 1.8;\n  text-align: center;\n  font-weight: 300;\n}\n\n.blurbContent{\n    font-size: 15px;\n  color: #8D6E63;\n  line-height: 1.8;\n  font-weight: 300;\n}\n\n.emoji{\n    font-size: 26px;\n}\n\n.emojiLabel,.menuEmojiList,.price{\n    font-family: var(--handwritten);\n    margin: 3px;\n    color: #C9929A;\n    font-size: 20px;\n}\n\n.iconContainer{\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n}\n\n.handwritten{\n    color: #C9929A;\n    margin-top: 20px;\n    font-size: 24px;\n}\n\n.nav {\n  position: fixed;\n  top: 0;\n  left: 0;\n  right: 0;\n  z-index: 100;\n  background: #FFF8F0ee;\n  backdrop-filter: blur(12px);\n  border-bottom: 1px solid #FBE8EA;\n  display: flex;\n  align-items: center;\n  justify-content:center;\n  padding: 14px 32px;\n  font-family: 'DM Sans', sans-serif;\n}\n\n\n.nav-links {\n  display: flex;\n  gap: 6px;\n}\n\n.nav-links button {\n  background: transparent;\n  border: none;\n  border-radius: 20px;\n  padding: 8px 20px;\n  font-family: 'DM Sans', sans-serif;\n  font-size: 14px;\n  font-weight: 500;\n  color: #8D6E63;\n  cursor: pointer;\n  transition: all 0.3s ease;\n  letter-spacing: 0.03em;\n  text-transform: capitalize;\n}\n\n.nav-links button.active {\n  background: #FBE8EA;\n  color: #C9929A;\n}\n\n.rounded-container {\n  position: relative;\n  display: flex;\n  flex-direction: column;\n  background: #FFF8F0;\n  border-radius: 24px;\n  border: 1px solid #FBE8EA;\n  padding: 40px 36px;\n  width: 100%;\n  max-width: 640px;\n  margin-bottom: 40px;\n  gap: 20px;\n}\n\n.heart-top {\n  position: absolute;\n  top: -14px;\n  left: 50%;\n  transform: translateX(-50%);\n}\n\n.menuContainer{\ndisplay: flex;\n}\n\n\n.oneMenuCon{\n    display: flex;\n    justify-content: space-between;\n}\n\n.itemName{\n    font-family: var(--cursive);\n    font-weight: 400;\n    font-size: 20px;\n}\n\n.menuList{\n    width: 40%;\n}`, \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack:///./src/styles.css?./node_modules/css-loader/dist/cjs.js\n}");

/***/ },

/***/ "./node_modules/css-loader/dist/runtime/api.js"
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
(module) {

eval("{\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = [];\n\n  // return the list of modules as css string\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n      content += cssWithMappingToString(item);\n      if (needLayer) {\n        content += \"}\";\n      }\n      if (item[2]) {\n        content += \"}\";\n      }\n      if (item[4]) {\n        content += \"}\";\n      }\n      return content;\n    }).join(\"\");\n  };\n\n  // import a list of modules into the list\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n    var alreadyImportedModules = {};\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n      list.push(item);\n    }\n  };\n  return list;\n};\n\n//# sourceURL=webpack:///./node_modules/css-loader/dist/runtime/api.js?\n}");

/***/ },

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js"
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
(module) {

eval("{\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack:///./node_modules/css-loader/dist/runtime/noSourceMaps.js?\n}");

/***/ },

/***/ "./src/styles.css"
/*!************************!*\
  !*** ./src/styles.css ***!
  \************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./styles.css */ \"./node_modules/css-loader/dist/cjs.js!./src/styles.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\noptions.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack:///./src/styles.css?\n}");

/***/ },

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
(module) {

eval("{\n\nvar stylesInDOM = [];\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n  return result;\n}\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n    identifiers.push(identifier);\n  }\n  return identifiers;\n}\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n  return updater;\n}\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n    var newLastIdentifiers = modulesToDom(newList, options);\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n      var _index = getIndexByIdentifier(_identifier);\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack:///./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?\n}");

/***/ },

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js"
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
(module) {

eval("{\n\nvar memo = {};\n\n/* istanbul ignore next  */\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target);\n\n    // Special case to return head of iframe instead of iframe itself\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n    memo[target] = styleTarget;\n  }\n  return memo[target];\n}\n\n/* istanbul ignore next  */\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n  target.appendChild(style);\n}\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack:///./node_modules/style-loader/dist/runtime/insertBySelector.js?\n}");

/***/ },

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js"
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
(module) {

eval("{\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack:///./node_modules/style-loader/dist/runtime/insertStyleElement.js?\n}");

/***/ },

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
(module, __unused_webpack_exports, __webpack_require__) {

eval("{\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack:///./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?\n}");

/***/ },

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js"
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
(module) {

eval("{\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n  var needLayer = typeof obj.layer !== \"undefined\";\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n  css += obj.css;\n  if (needLayer) {\n    css += \"}\";\n  }\n  if (obj.media) {\n    css += \"}\";\n  }\n  if (obj.supports) {\n    css += \"}\";\n  }\n  var sourceMap = obj.sourceMap;\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  }\n\n  // For old IE\n  /* istanbul ignore if  */\n  options.styleTagTransform(css, styleElement, options.options);\n}\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n  styleElement.parentNode.removeChild(styleElement);\n}\n\n/* istanbul ignore next  */\nfunction domAPI(options) {\n  if (typeof document === \"undefined\") {\n    return {\n      update: function update() {},\n      remove: function remove() {}\n    };\n  }\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\nmodule.exports = domAPI;\n\n//# sourceURL=webpack:///./node_modules/style-loader/dist/runtime/styleDomAPI.js?\n}");

/***/ },

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js"
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
(module) {

eval("{\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack:///./node_modules/style-loader/dist/runtime/styleTagTransform.js?\n}");

/***/ },

/***/ "./src/about.js"
/*!**********************!*\
  !*** ./src/about.js ***!
  \**********************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   loadAbout: () => (/* binding */ loadAbout)\n/* harmony export */ });\nfunction loadAbout() {\n  const container = document.querySelector(\"#content\");\n\n  function createpElement(text) {\n    const element = document.createElement(\"p\");\n    element.textContent = text;\n    element.classList.add(\"body-text\");\n    return element;\n  }\n\n  function createFooterpElement(text) {\n    const element = document.createElement(\"p\");\n    element.classList.add(\"footer-details-item\");\n    element.textContent = text;\n    return element;\n  }\n\n  function createH1Element(text) {\n    const element = document.createElement(\"h1\");\n    element.classList.add(\"AboutTitle\");\n    element.textContent = text;\n    return element;\n  }\n\n  function createHandwrittenP(text) {\n    const element = document.createElement(\"p\");\n    element.textContent = text;\n    element.classList.add(\"handwritten\");\n    return element;\n  }\n\n  container.appendChild(createHandwrittenP(\"welcome to\"));\n  container.appendChild(createH1Element(\"Our Story\"));\n\n  const roundedContainer = document.createElement(\"div\");\n  roundedContainer.classList.add(\"rounded-container\");\n  const heart = document.createElement(\"div\");\n  heart.classList.add(\"heart-top\");\n  heart.innerHTML = `<svg viewBox=\"0 0 24 24\" width=\"28\" height=\"28\" fill=\"#E8B4B8\"><path d=\"M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z\"/></svg>`;\n  roundedContainer.appendChild(heart);\n  const blurbTitle = document.createElement(\"p\");\n  blurbTitle.classList.add(\"blurbTitle\");\n  blurbTitle.textContent =\n    \"Our Home Café started as a weekend ritual — making fancy coffee for friends who came over and always ended up staying longer than planned.\";\n\n  const blurbContent = document.createElement(\"p\");\n  blurbContent.classList.add(\"blurbContent\");\n  blurbContent.textContent = `It began with a second-hand KitchenAid espresso machine, a few cute mugs from the op shop, and an obsession with getting the perfect latte art. Friends started saying \"you should open a café\" — so we kind of did, just from home.\nEvery weekend, we transform our kitchen into a cozy little café. We bake everything fresh that morning — croissants, cookies, lemon loaf — and brew specialty coffee with locally roasted beans. There's always a handwritten menu on kraft paper and a matcha whisk on standby.\nIt's not just about the coffee (though the Spanish latte is pretty amazing). It's about slowing down, creating something beautiful, and sharing it with the people you love.`;\n\n  roundedContainer.appendChild(blurbTitle);\n  roundedContainer.appendChild(blurbContent);\n  container.appendChild(roundedContainer);\n\n  const footer = document.createElement(\"div\");\n  footer.classList.add(\"footer\");\n  footer.appendChild(createpElement(\" ♥ my home café ♥\"));\n  const footerRow = document.createElement(\"div\");\n  footerRow.classList.add(\"footer-details\");\n  footerRow.appendChild(createFooterpElement(\"Sydney, Australia\"));\n  footerRow.appendChild(createFooterpElement(\" • Weekends Only •\"));\n  footerRow.appendChild(createFooterpElement(\"Bookings via Instagram\"));\n  footer.appendChild(footerRow);\n  footer.appendChild(createpElement(\"made with love & oat milk\"));\n  container.appendChild(footer);\n}\n\n\n//# sourceURL=webpack:///./src/about.js?\n}");

/***/ },

/***/ "./src/home.js"
/*!*********************!*\
  !*** ./src/home.js ***!
  \*********************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   loadHome: () => (/* binding */ loadHome)\n/* harmony export */ });\nfunction loadHome() {\n  const container = document.querySelector(\"#content\");\n\n  function createpElement(text) {\n    const element = document.createElement(\"p\");\n    element.textContent = text;\n    element.classList.add(\"body-text\");\n    return element;\n  }\n\n  function createHandwrittenP(text) {\n    const element = document.createElement(\"p\");\n    element.textContent = text;\n    element.classList.add(\"handwritten\");\n    return element;\n  }\n\n  function createFooterpElement(text) {\n    const element = document.createElement(\"p\");\n    element.classList.add(\"footer-details-item\");\n    element.textContent = text;\n    return element;\n  }\n\n  function createH1Element(text) {\n    const element = document.createElement(\"h1\");\n    element.textContent = text;\n    return element;\n  }\n\n  function createIcon(emoji1, text) {\n    const iconContainer = document.createElement(\"div\");\n    const emoji = document.createElement(\"p\");\n    emoji.classList.add(\"emoji\");\n    const emojiLabel = document.createElement(\"p\");\n    emojiLabel.classList.add(\"emojiLabel\");\n    iconContainer.classList.add(\"iconContainer\");\n    emoji.textContent = emoji1;\n    emojiLabel.textContent = text;\n    iconContainer.appendChild(emoji);\n    iconContainer.appendChild(emojiLabel);\n    return iconContainer;\n  }\n\n  container.appendChild(createIcon(\"\\u{1F3E0}\", \"\"));\n  container.appendChild(createHandwrittenP(\"welcome to\"));\n  container.appendChild(createH1Element(\"my home café\"));\n  container.appendChild(\n    createpElement(\n      \"A cozy home café serving handcrafted coffee, fresh pastries & good vibes — right from our kitchen to yours.\",\n    ),\n  );\n\n  const menuIcons = document.createElement(\"div\");\n  menuIcons.classList.add(\"menu-icons\");\n  menuIcons.appendChild(createIcon(\"\\u2615\", \"Specialty Coffee\"));\n  menuIcons.appendChild(createIcon(\"\\u{1F370}\", \"Fresh Pastries\"));\n  menuIcons.appendChild(createIcon(\"\\u{1F375}\", \"Matcha & Tea\"));\n  container.appendChild(menuIcons);\n\n  const footer = document.createElement(\"div\");\n  footer.classList.add(\"footer\");\n  footer.appendChild(createpElement(\" ♥ my home café ♥\"));\n  const footerRow = document.createElement(\"div\");\n  footerRow.classList.add(\"footer-details\");\n  footerRow.appendChild(createFooterpElement(\"Sydney, Australia\"));\n  footerRow.appendChild(createFooterpElement(\" • Weekends Only •\"));\n  footerRow.appendChild(createFooterpElement(\"Bookings via Instagram\"));\n  footer.appendChild(footerRow);\n  footer.appendChild(createpElement(\"made with love & oat milk\"));\n  container.appendChild(footer);\n}\n\n\n//# sourceURL=webpack:///./src/home.js?\n}");

/***/ },

/***/ "./src/index.js"
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _styles_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles.css */ \"./src/styles.css\");\n/* harmony import */ var _home_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./home.js */ \"./src/home.js\");\n/* harmony import */ var _menu_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./menu.js */ \"./src/menu.js\");\n/* harmony import */ var _about_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./about.js */ \"./src/about.js\");\n\n\n\n\n\nfunction switchTab(tab) {\n  const content = document.getElementById(\"content\");\n  content.innerHTML = \"\";\n\n  // update active button\n  document.querySelectorAll(\".nav-links button\").forEach((btn) => {\n    if (btn.textContent.trim().toLowerCase() === tab) {\n      btn.classList.add(\"active\");\n    } else {\n      btn.classList.remove(\"active\");\n    }\n  });\n\n  if (tab === \"home\") (0,_home_js__WEBPACK_IMPORTED_MODULE_1__.loadHome)();\n  if (tab === \"menu\") (0,_menu_js__WEBPACK_IMPORTED_MODULE_2__.loadMenu)();\n  if (tab === \"about\") (0,_about_js__WEBPACK_IMPORTED_MODULE_3__.loadAbout)();\n}\n\n// load home page on start\nswitchTab(\"home\");\n\n// hook up nav buttons\ndocument.querySelectorAll(\".nav-links button\").forEach((btn) => {\n  btn.addEventListener(\"click\", () => {\n    switchTab(btn.textContent.trim().toLowerCase());\n  });\n});\n\n\n//# sourceURL=webpack:///./src/index.js?\n}");

/***/ },

/***/ "./src/menu.js"
/*!*********************!*\
  !*** ./src/menu.js ***!
  \*********************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   loadMenu: () => (/* binding */ loadMenu)\n/* harmony export */ });\nfunction loadMenu() {\n  const container = document.querySelector(\"#content\");\n\n  function createHandwrittenP(text) {\n    const element = document.createElement(\"p\");\n    element.textContent = text;\n    element.classList.add(\"handwritten\");\n    return element;\n  }\n\n  function createH1Element(text) {\n    const element = document.createElement(\"h1\");\n    element.textContent = text;\n    return element;\n  }\n\n  container.appendChild(createHandwrittenP(\"what we're serving\"));\n  container.appendChild(createH1Element(\"Our Menu\"));\n  const menuList = document.createElement(\"div\");\n  menuList.classList.add(\"menuList\");\n  menuList.appendChild(createIcon(\"\\u2615\", \"Coffee\"));\n\n  menuList.appendChild(menuItem(\"Latte\", \"$5.50\"));\n  menuList.appendChild(menuItem(\"Cappuccino\", \"$5.00\"));\n  menuList.appendChild(menuItem(\"Espresso\", \"$3.50\"));\n  menuList.appendChild(menuItem(\"Mocha\", \"$6.50\"));\n  menuList.appendChild(createIcon(\"\\u{1F370}\", \"Pastries\"));\n  menuList.appendChild(menuItem(\"Croissant\", \"$5.50\"));\n  menuList.appendChild(menuItem(\"Baguette\", \"$8.50\"));\n  menuList.appendChild(menuItem(\"Cookies\", \"$4.50\"));\n  menuList.appendChild(menuItem(\"Lemon Loaf\", \"$5.00\"));\n  menuList.appendChild(createIcon(\"\\u{1F375}\", \"Matcha & Tea\"));\n  menuList.appendChild(menuItem(\"English Breakfast\", \"$4.00\"));\n  menuList.appendChild(menuItem(\"Chai Latte\", \"$5.50\"));\n  menuList.appendChild(menuItem(\"Matcha\", \"$7.50\"));\n  menuList.appendChild(menuItem(\"Strawberry Matcha\", \"$8.00\"));\n  menuList.appendChild(createIcon(\"\\u2728\", \"Specials\"));\n  menuList.appendChild(menuItem(\"Champagne\", \"$12.00\"));\n  menuList.appendChild(menuItem(\"Yoghurt Parfait\", \"$7.50\"));\n  menuList.appendChild(menuItem(\"Set Menu High Tea\", \"$35.00\"));\n  container.appendChild(menuList);\n\n  function createIcon(emoji1, text) {\n    const iconContainer = document.createElement(\"div\");\n    const emoji = document.createElement(\"p\");\n    emoji.classList.add(\"menuEmoji\");\n    const emojiLabel = document.createElement(\"p\");\n    emojiLabel.classList.add(\"menuEmojiList\");\n    iconContainer.classList.add(\"menuContainer\");\n    emoji.textContent = emoji1;\n    emojiLabel.textContent = text;\n    iconContainer.appendChild(emoji);\n    iconContainer.appendChild(emojiLabel);\n    return iconContainer;\n  }\n\n  function menuItem(item, price) {\n    const oneMenuItemCon = document.createElement(\"div\");\n    oneMenuItemCon.classList.add(\"oneMenuCon\");\n    const itemName = document.createElement(\"p\");\n    itemName.classList.add(\"itemName\");\n    itemName.textContent = item;\n    const priceLabel = document.createElement(\"p\");\n    priceLabel.classList.add(\"price\");\n    priceLabel.textContent = price;\n    oneMenuItemCon.appendChild(itemName);\n    oneMenuItemCon.appendChild(priceLabel);\n    return oneMenuItemCon;\n  }\n\n  function createpElement(text) {\n    const element = document.createElement(\"p\");\n    element.textContent = text;\n    element.classList.add(\"body-text\");\n    return element;\n  }\n\n  function createFooterpElement(text) {\n    const element = document.createElement(\"p\");\n    element.classList.add(\"footer-details-item\");\n    element.textContent = text;\n    return element;\n  }\n\n  const footer = document.createElement(\"div\");\n  footer.classList.add(\"footer\");\n  footer.appendChild(createpElement(\" ♥ my home café ♥\"));\n  const footerRow = document.createElement(\"div\");\n  footerRow.classList.add(\"footer-details\");\n  footerRow.appendChild(createFooterpElement(\"Sydney, Australia\"));\n  footerRow.appendChild(createFooterpElement(\" • Weekends Only •\"));\n  footerRow.appendChild(createFooterpElement(\"Bookings via Instagram\"));\n  footer.appendChild(footerRow);\n  footer.appendChild(createpElement(\"made with love & oat milk\"));\n  container.appendChild(footer);\n}\n\n\n//# sourceURL=webpack:///./src/menu.js?\n}");

/***/ }

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
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		if (!(moduleId in __webpack_modules__)) {
/******/ 			delete __webpack_module_cache__[moduleId];
/******/ 			var e = new Error("Cannot find module '" + moduleId + "'");
/******/ 			e.code = 'MODULE_NOT_FOUND';
/******/ 			throw e;
/******/ 		}
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
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
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
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