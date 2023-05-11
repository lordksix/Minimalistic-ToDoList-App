"use strict";
(self["webpackChunkminimalistic_todolist_app"] = self["webpackChunkminimalistic_todolist_app"] || []).push([["index"],{

/***/ "./node_modules/css-loader/dist/cjs.js!./src/index.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/index.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ./asset/resource/enter.png */ "./src/asset/resource/enter.png"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, ":root {\r\n  --svg-side: clamp(16px, (100vw - 320px) * 1000, clamp(20px, (100vw - 640px) * 1000, clamp(25px, (100vw - 1280px) * 1000, 30px)));\r\n  --font-size: calc(var(--svg-side) * 0.8);\r\n  --app-row-block-pad: 10px;\r\n  --app-row-height: calc(var(--svg-side) + 2 * var(--app-row-block-pad));\r\n}\r\n\r\n* {\r\n  padding: 0;\r\n  margin: 0;\r\n  box-sizing: border-box;\r\n}\r\n\r\nul,\r\nli {\r\n  list-style-type: none;\r\n}\r\n\r\nbody {\r\n  display: flex;\r\n  flex-flow: column;\r\n  align-items: center;\r\n  padding-block: 40px;\r\n  gap: 30px;\r\n}\r\n\r\n.app-container {\r\n  display: flex;\r\n  flex-flow: column;\r\n  align-items: center;\r\n  z-index: 1;\r\n  background-color: aliceblue;\r\n  border-radius: 10px;\r\n  box-shadow: 0 0 4px 4px cadetblue;\r\n}\r\n\r\n.app-text,\r\n.item {\r\n  font-size: var(--font-size);\r\n  display: flex;\r\n  align-items: center;\r\n}\r\n\r\n.app-title {\r\n  font-weight: bold;\r\n  font-size: calc(var(--font-size) * 1.2);\r\n}\r\n\r\n.app-interact {\r\n  display: flex;\r\n  justify-content: flex-start;\r\n  gap: 10px;\r\n}\r\n\r\n.app-row {\r\n  display: grid;\r\n  grid-template-columns: auto 1fr auto auto;\r\n  justify-content: space-between;\r\n  height: var(--app-row-height);\r\n  padding-block: var(--app-row-block-pad);\r\n  padding-inline: 15px;\r\n  column-gap: 20px;\r\n  min-width: min(80vw, 1200px);\r\n}\r\n\r\n#app-input {\r\n  display: grid;\r\n  grid-template-columns: 1fr auto;\r\n  justify-content: center;\r\n  height: var(--app-row-height);\r\n  padding-block: var(--app-row-block-pad);\r\n  padding-inline: 15px;\r\n  column-gap: 20px;\r\n  min-width: min(80vw, 1200px);\r\n}\r\n\r\ndiv a,\r\ndiv svg {\r\n  display: flex;\r\n  align-items: center;\r\n}\r\n\r\n.app-row svg {\r\n  height: var(--svg-side);\r\n  width: var(--svg-side);\r\n}\r\n\r\n.app-row textarea {\r\n  display: none;\r\n}\r\n\r\n.icon-trash-o {\r\n  cursor: pointer;\r\n}\r\n\r\n.app-container button,\r\n.app-container input {\r\n  border: none;\r\n  background-color: transparent;\r\n  font-size: var(--font-size);\r\n  height: var(--app-row-height);\r\n  padding-block: var(--app-row-block-pad);\r\n}\r\n\r\n#newitem {\r\n  font-style: italic;\r\n  font-weight: lighter;\r\n  width: 100%;\r\n}\r\n\r\n.app-container input:focus {\r\n  outline: none;\r\n}\r\n\r\n#sumbit-newitem {\r\n  background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");\r\n  background-repeat: no-repeat;\r\n  background-position: center;\r\n  appearance: none;\r\n  cursor: pointer;\r\n  width: 40px;\r\n  height: 50px;\r\n}\r\n\r\n.app-container .clr-btn {\r\n  width: 100%;\r\n  color: darkslategrey;\r\n  background-color: rgb(229, 240, 250);\r\n  border-bottom-left-radius: 10px;\r\n  border-bottom-right-radius: 10px;\r\n}\r\n\r\n.clr-btn:hover {\r\n  text-decoration: underline;\r\n  color: black;\r\n}\r\n\r\n.app-container .item-chk {\r\n  border: 2px solid #c1c1c3;\r\n  cursor: pointer;\r\n  color: transparent;\r\n  height: var(--svg-side);\r\n  width: var(--svg-side);\r\n  border-radius: 2px;\r\n  display: flex;\r\n  align-items: center;\r\n}\r\n\r\n.icon-more-vert {\r\n  cursor: move;\r\n}\r\n\r\n.icon-check {\r\n  display: none;\r\n}\r\n\r\n.completed .icon-check {\r\n  display: inline;\r\n}\r\n\r\n.completed .app-text {\r\n  text-decoration: line-through;\r\n}\r\n\r\n.item label,\r\n.item textarea {\r\n  flex-grow: 1;\r\n  height: var(--svg-side);\r\n  resize: none;\r\n  border: none;\r\n  background-color: transparent;\r\n}\r\n\r\n.item textarea:focus {\r\n  outline: none;\r\n  background-color: transparent;\r\n}\r\n\r\n.dragging {\r\n  opacity: 0.5;\r\n}\r\n", "",{"version":3,"sources":["webpack://./src/index.css"],"names":[],"mappings":"AAAA;EACE,gIAAgI;EAChI,wCAAwC;EACxC,yBAAyB;EACzB,sEAAsE;AACxE;;AAEA;EACE,UAAU;EACV,SAAS;EACT,sBAAsB;AACxB;;AAEA;;EAEE,qBAAqB;AACvB;;AAEA;EACE,aAAa;EACb,iBAAiB;EACjB,mBAAmB;EACnB,mBAAmB;EACnB,SAAS;AACX;;AAEA;EACE,aAAa;EACb,iBAAiB;EACjB,mBAAmB;EACnB,UAAU;EACV,2BAA2B;EAC3B,mBAAmB;EACnB,iCAAiC;AACnC;;AAEA;;EAEE,2BAA2B;EAC3B,aAAa;EACb,mBAAmB;AACrB;;AAEA;EACE,iBAAiB;EACjB,uCAAuC;AACzC;;AAEA;EACE,aAAa;EACb,2BAA2B;EAC3B,SAAS;AACX;;AAEA;EACE,aAAa;EACb,yCAAyC;EACzC,8BAA8B;EAC9B,6BAA6B;EAC7B,uCAAuC;EACvC,oBAAoB;EACpB,gBAAgB;EAChB,4BAA4B;AAC9B;;AAEA;EACE,aAAa;EACb,+BAA+B;EAC/B,uBAAuB;EACvB,6BAA6B;EAC7B,uCAAuC;EACvC,oBAAoB;EACpB,gBAAgB;EAChB,4BAA4B;AAC9B;;AAEA;;EAEE,aAAa;EACb,mBAAmB;AACrB;;AAEA;EACE,uBAAuB;EACvB,sBAAsB;AACxB;;AAEA;EACE,aAAa;AACf;;AAEA;EACE,eAAe;AACjB;;AAEA;;EAEE,YAAY;EACZ,6BAA6B;EAC7B,2BAA2B;EAC3B,6BAA6B;EAC7B,uCAAuC;AACzC;;AAEA;EACE,kBAAkB;EAClB,oBAAoB;EACpB,WAAW;AACb;;AAEA;EACE,aAAa;AACf;;AAEA;EACE,yDAAmD;EACnD,4BAA4B;EAC5B,2BAA2B;EAC3B,gBAAgB;EAChB,eAAe;EACf,WAAW;EACX,YAAY;AACd;;AAEA;EACE,WAAW;EACX,oBAAoB;EACpB,oCAAoC;EACpC,+BAA+B;EAC/B,gCAAgC;AAClC;;AAEA;EACE,0BAA0B;EAC1B,YAAY;AACd;;AAEA;EACE,yBAAyB;EACzB,eAAe;EACf,kBAAkB;EAClB,uBAAuB;EACvB,sBAAsB;EACtB,kBAAkB;EAClB,aAAa;EACb,mBAAmB;AACrB;;AAEA;EACE,YAAY;AACd;;AAEA;EACE,aAAa;AACf;;AAEA;EACE,eAAe;AACjB;;AAEA;EACE,6BAA6B;AAC/B;;AAEA;;EAEE,YAAY;EACZ,uBAAuB;EACvB,YAAY;EACZ,YAAY;EACZ,6BAA6B;AAC/B;;AAEA;EACE,aAAa;EACb,6BAA6B;AAC/B;;AAEA;EACE,YAAY;AACd","sourcesContent":[":root {\r\n  --svg-side: clamp(16px, (100vw - 320px) * 1000, clamp(20px, (100vw - 640px) * 1000, clamp(25px, (100vw - 1280px) * 1000, 30px)));\r\n  --font-size: calc(var(--svg-side) * 0.8);\r\n  --app-row-block-pad: 10px;\r\n  --app-row-height: calc(var(--svg-side) + 2 * var(--app-row-block-pad));\r\n}\r\n\r\n* {\r\n  padding: 0;\r\n  margin: 0;\r\n  box-sizing: border-box;\r\n}\r\n\r\nul,\r\nli {\r\n  list-style-type: none;\r\n}\r\n\r\nbody {\r\n  display: flex;\r\n  flex-flow: column;\r\n  align-items: center;\r\n  padding-block: 40px;\r\n  gap: 30px;\r\n}\r\n\r\n.app-container {\r\n  display: flex;\r\n  flex-flow: column;\r\n  align-items: center;\r\n  z-index: 1;\r\n  background-color: aliceblue;\r\n  border-radius: 10px;\r\n  box-shadow: 0 0 4px 4px cadetblue;\r\n}\r\n\r\n.app-text,\r\n.item {\r\n  font-size: var(--font-size);\r\n  display: flex;\r\n  align-items: center;\r\n}\r\n\r\n.app-title {\r\n  font-weight: bold;\r\n  font-size: calc(var(--font-size) * 1.2);\r\n}\r\n\r\n.app-interact {\r\n  display: flex;\r\n  justify-content: flex-start;\r\n  gap: 10px;\r\n}\r\n\r\n.app-row {\r\n  display: grid;\r\n  grid-template-columns: auto 1fr auto auto;\r\n  justify-content: space-between;\r\n  height: var(--app-row-height);\r\n  padding-block: var(--app-row-block-pad);\r\n  padding-inline: 15px;\r\n  column-gap: 20px;\r\n  min-width: min(80vw, 1200px);\r\n}\r\n\r\n#app-input {\r\n  display: grid;\r\n  grid-template-columns: 1fr auto;\r\n  justify-content: center;\r\n  height: var(--app-row-height);\r\n  padding-block: var(--app-row-block-pad);\r\n  padding-inline: 15px;\r\n  column-gap: 20px;\r\n  min-width: min(80vw, 1200px);\r\n}\r\n\r\ndiv a,\r\ndiv svg {\r\n  display: flex;\r\n  align-items: center;\r\n}\r\n\r\n.app-row svg {\r\n  height: var(--svg-side);\r\n  width: var(--svg-side);\r\n}\r\n\r\n.app-row textarea {\r\n  display: none;\r\n}\r\n\r\n.icon-trash-o {\r\n  cursor: pointer;\r\n}\r\n\r\n.app-container button,\r\n.app-container input {\r\n  border: none;\r\n  background-color: transparent;\r\n  font-size: var(--font-size);\r\n  height: var(--app-row-height);\r\n  padding-block: var(--app-row-block-pad);\r\n}\r\n\r\n#newitem {\r\n  font-style: italic;\r\n  font-weight: lighter;\r\n  width: 100%;\r\n}\r\n\r\n.app-container input:focus {\r\n  outline: none;\r\n}\r\n\r\n#sumbit-newitem {\r\n  background-image: url('./asset/resource/enter.png');\r\n  background-repeat: no-repeat;\r\n  background-position: center;\r\n  appearance: none;\r\n  cursor: pointer;\r\n  width: 40px;\r\n  height: 50px;\r\n}\r\n\r\n.app-container .clr-btn {\r\n  width: 100%;\r\n  color: darkslategrey;\r\n  background-color: rgb(229, 240, 250);\r\n  border-bottom-left-radius: 10px;\r\n  border-bottom-right-radius: 10px;\r\n}\r\n\r\n.clr-btn:hover {\r\n  text-decoration: underline;\r\n  color: black;\r\n}\r\n\r\n.app-container .item-chk {\r\n  border: 2px solid #c1c1c3;\r\n  cursor: pointer;\r\n  color: transparent;\r\n  height: var(--svg-side);\r\n  width: var(--svg-side);\r\n  border-radius: 2px;\r\n  display: flex;\r\n  align-items: center;\r\n}\r\n\r\n.icon-more-vert {\r\n  cursor: move;\r\n}\r\n\r\n.icon-check {\r\n  display: none;\r\n}\r\n\r\n.completed .icon-check {\r\n  display: inline;\r\n}\r\n\r\n.completed .app-text {\r\n  text-decoration: line-through;\r\n}\r\n\r\n.item label,\r\n.item textarea {\r\n  flex-grow: 1;\r\n  height: var(--svg-side);\r\n  resize: none;\r\n  border: none;\r\n  background-color: transparent;\r\n}\r\n\r\n.item textarea:focus {\r\n  outline: none;\r\n  background-color: transparent;\r\n}\r\n\r\n.dragging {\r\n  opacity: 0.5;\r\n}\r\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {



module.exports = function (url, options) {
  if (!options) {
    options = {};
  }
  if (!url) {
    return url;
  }
  url = String(url.__esModule ? url.default : url);

  // If url is already wrapped in quotes, remove them
  if (/^['"].*['"]$/.test(url)) {
    url = url.slice(1, -1);
  }
  if (options.hash) {
    url += options.hash;
  }

  // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls
  if (/["'() \t\n]|(%20)/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, "\\n"), "\"");
  }
  return url;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/index.css":
/*!***********************!*\
  !*** ./src/index.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./index.css */ "./node_modules/css-loader/dist/cjs.js!./src/index.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];
function getIndexByIdentifier(identifier) {
  var result = -1;
  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }
  return result;
}
function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];
  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };
    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }
    identifiers.push(identifier);
  }
  return identifiers;
}
function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }
      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
  return updater;
}
module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];
    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }
    var newLastIdentifiers = modulesToDom(newList, options);
    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];
      var _index = getIndexByIdentifier(_identifier);
      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();
        stylesInDOM.splice(_index, 1);
      }
    }
    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};

/* istanbul ignore next  */
function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }
    memo[target] = styleTarget;
  }
  return memo[target];
}

/* istanbul ignore next  */
function insertBySelector(insert, style) {
  var target = getTarget(insert);
  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }
  target.appendChild(style);
}
module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}
module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;
  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}
module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";
  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }
  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }
  var needLayer = typeof obj.layer !== "undefined";
  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }
  css += obj.css;
  if (needLayer) {
    css += "}";
  }
  if (obj.media) {
    css += "}";
  }
  if (obj.supports) {
    css += "}";
  }
  var sourceMap = obj.sourceMap;
  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  }

  // For old IE
  /* istanbul ignore if  */
  options.styleTagTransform(css, styleElement, options.options);
}
function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }
  styleElement.parentNode.removeChild(styleElement);
}

/* istanbul ignore next  */
function domAPI(options) {
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}
module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }
    styleElement.appendChild(document.createTextNode(css));
  }
}
module.exports = styleTagTransform;

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.css */ "./src/index.css");
/* harmony import */ var _modules_ItemList_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/ItemList.js */ "./src/modules/ItemList.js");



const listUl = document.querySelector('#add-items');
const newItem = document.querySelector('#newitem');
const clearBtn = document.querySelector('.clr-btn');
const localName = 'itemlist';

const listSec = document.querySelector('.list');
const submitBtn = document.getElementById('sumbit-newitem');
const ListOfItems = new _modules_ItemList_js__WEBPACK_IMPORTED_MODULE_1__.ItemList(localName);
let dragIndex;

const changeDescrip = (div, label, textArea) => {
  label.textContent = textArea.value;
  const id = parseInt(div.dataset.index, 10);
  ListOfItems.updateDescrip(id, textArea.value);
};

/**
 * Function to handle the change of description of a single item.
 * Also updates index of all remaining items in class and data-index in DOM
 * @param {any} div
 * @returns {any}
 */
const updateDescription = (div) => {
  const label = div.querySelector('label');
  const textArea = div.querySelector('textarea');
  label.style.display = 'none';
  textArea.style.display = 'flex';
  textArea.focus();
  textArea.addEventListener('focusout', () => {
    changeDescrip(div, label, textArea);
    label.style.display = 'flex';
    textArea.style.display = 'none';
  });
  textArea.addEventListener('keydown', (e) => {
    if (e.code === 'Enter') {
      e.preventDefault();
      changeDescrip(div, label, textArea);
      label.style.display = 'flex';
      textArea.style.display = 'none';
    }
  });
  textArea.addEventListener('input', () => {
    changeDescrip(div, label, textArea);
  });
};

/**
 * Function to update (remove or change description) of item or items from class and DOM.
 * Also updates index of all remaining items in class and data-index in DOM
 * @param {any} e
 * @returns {any}
 */
const updateList = (e) => {
  e.preventDefault();
  let listItem;
  switch (e.target.classList.value) {
    case 'item-chk':
      listItem = e.target.parentNode;
      listItem.classList.toggle('completed');
      ListOfItems.togglecomplete(parseInt(listItem.dataset.index, 10));
      break;
    case 'icon-check':
      listItem = e.target.parentNode.parentNode;
      listItem.classList.toggle('completed');
      ListOfItems.togglecomplete(parseInt(listItem.dataset.index, 10));
      break;
    case 'icon-check-use':
      listItem = e.target.parentNode.parentNode.parentNode;
      listItem.classList.toggle('completed');
      ListOfItems.togglecomplete(parseInt(listItem.dataset.index, 10));
      break;
    case 'app-text':
      updateDescription(e.target.parentNode.parentNode);
      break;
    case 'icon-trash-o':
      listItem = e.target.parentNode;
      ListOfItems.removeitem(parseInt(listItem.dataset.index, 10), listItem, listUl);
      listUl.removeChild(listItem);
      ListOfItems.updateList('.app-item');
      break;
    case 'icon-trash-o-use':
      listItem = e.target.parentNode.parentNode;
      ListOfItems.removeitem(parseInt(listItem.dataset.index, 10), listItem, listUl);
      listUl.removeChild(listItem);
      ListOfItems.updateList('.app-item');
      break;
    default:
      break;
  }
};

const compareOrder = (elem1, elem2) => {
  if (elem1.parentNode !== elem2.parentNode) {
    return null;
  }
  if (elem1 === elem2) return 0;

  // eslint-disable-next-line no-bitwise
  if (elem1.compareDocumentPosition(elem2) & Node.DOCUMENT_POSITION_FOLLOWING) {
    return -1;
  }
  return 1;
};

const addDragEventListeners = (elem, draggedTarget) => {
  elem.addEventListener('dragstart', () => {
    draggedTarget.element = elem;
    elem.classList.add('dragging');
    dragIndex = +draggedTarget.element.dataset.index;
  });

  elem.addEventListener('dragover', () => {
    const order = compareOrder(elem, draggedTarget.element);
    if (!order) return;
    const baseElement = order === -1 ? elem : elem.nextSlibing;
    draggedTarget.ListContainer.insertBefore(draggedTarget.element, baseElement);
  });
  elem.addEventListener('dragend', () => {
    elem.classList.remove('dragging');
    const newPost = Array.from(elem.parentNode.children).indexOf(elem);
    ListOfItems.updateIndex(dragIndex, newPost);
    ListOfItems.updateList('.app-item');
  });
};

/**
 * Function to add items to class and DOM whenever a new item is sumbit
 * @param {event} e Event given by addEventListener
 * @returns {void} void
 */
const addItem = (e) => {
  e.preventDefault();
  const newChild = ListOfItems.add(newItem, _modules_ItemList_js__WEBPACK_IMPORTED_MODULE_1__.xlinkHref);
  listUl.appendChild(newChild);
  const target = { listUl, element: undefined };
  addDragEventListeners(newChild, target);
};

/**
 * Function to remove all item with complete class from DOM and class.
 * Also updates index of all remaining items in class and data-index in DOM
 * @param {any} e Event given by addEventListener
 * @returns {void} void
 */
const removeItems = (e) => {
  e.preventDefault();
  const itemCompleted = document.querySelectorAll('.completed');
  if (itemCompleted.length > 0) {
    itemCompleted.forEach((delItem) => {
      ListOfItems.removeitem(parseInt(delItem.dataset.index, 10), delItem, listUl);
    });
    itemCompleted.forEach((delItem) => {
      listUl.removeChild(delItem);
    });
    ListOfItems.updateList('.app-item');
  }
};

_modules_ItemList_js__WEBPACK_IMPORTED_MODULE_1__.ItemList.renderList(listUl, localName, addDragEventListeners);

listSec.addEventListener('click', updateList);
submitBtn.addEventListener('click', addItem);
clearBtn.addEventListener('click', removeItems);

/***/ }),

/***/ "./src/modules/ItemList.js":
/*!*********************************!*\
  !*** ./src/modules/ItemList.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ItemList": () => (/* binding */ ItemList),
/* harmony export */   "xlinkHref": () => (/* binding */ xlinkHref)
/* harmony export */ });
/* harmony import */ var _ListItemMod_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ListItemMod.js */ "./src/modules/ListItemMod.js");
/* harmony import */ var _asset_resource_icons_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../asset/resource/icons.svg */ "./src/asset/resource/icons.svg");



const xlinkHref = [`${_asset_resource_icons_svg__WEBPACK_IMPORTED_MODULE_1__}#icon-check`, './asset/resource/icons.svg#icon-more-vert',
  './asset/resource/icons.svg#icon-trash-o'];

const itemClasses = (status = false) => {
  const classListIncomp = ['app-row', 'app-item'];
  const classListComp = ['app-row', 'app-item', 'completed'];
  const classBtn = 'item-chk';
  const classDivText = 'item';
  const classText = 'app-text';
  const classList = status ? classListComp : classListIncomp;
  const temp = [classList, classBtn, classDivText, classText];
  return temp;
};

/**
 * Class that creates and array to book class instances to be added to local storage
 * and added to DOM.
 * @param {string} localName name to be used to add bookbinding to local storage.
 * @returns {object} return instance of bookbiding class with an array of book class instances.
 */
class ItemList {
  constructor(localName) {
    this.itemArray = localStorage.getItem(`${localName}`) ? JSON.parse(localStorage.getItem(`${localName}`)) : [];
    this.localName = localName;
    this.length = this.itemArray.length;
  }

  /**
   * Method to remove item to local storage and class.
   * @param {string} descrip Description of item as input by user
   * @param {Array} xlink array of string with href for svg icons
   * @param {Array} classesSec Array of strings with class names for each part of the section.
   * Length 4.
   * @returns {void}
   */
  add(descrip, xlink) {
    let newChild = false;
    if (descrip.value.length) {
      const index = this.length + 1;
      const item = new _ListItemMod_js__WEBPACK_IMPORTED_MODULE_0__.ItemElem(descrip.value, index);
      this.itemArray = this.itemArray.concat(item);
      localStorage.setItem(this.localName, JSON.stringify(this.itemArray));
      const classesSec = itemClasses();
      newChild = (0,_ListItemMod_js__WEBPACK_IMPORTED_MODULE_0__.createListItem)(index, xlink, descrip.value, ...classesSec);
      this.length += 1;
    }
    descrip.value = '';
    return newChild;
  }

  /**
 * Method to remove item from local storage and class.
 * @param {number} id Index of item to be removed
 * @returns {void}
 */
  removeitem(id) {
    this.itemArray = this.itemArray.filter((item) => item.index !== id);
    localStorage.setItem(this.localName, JSON.stringify(this.itemArray));
    this.length -= 1;
  }

  /**
   * Method to update description of in local storage and class
   * @param {number} id Index of item
   * @param {string} description New description of item to be added
   * @returns {void} VOid
   */
  updateDescrip(id, description) {
    id -= 1;
    this.itemArray[id].descrip = description;
    localStorage.setItem(this.localName, JSON.stringify(this.itemArray));
  }

  /**
   * Method to toggle completeness status of item in local storage and class
   * @param {number} id Index of item
   * @returns {void} void
   */
  toggleComplete(id) {
    id -= 1;
    this.itemArray[id].isCompleted = !this.itemArray[id].isCompleted;
    localStorage.setItem(this.localName, JSON.stringify(this.itemArray));
  }

  /**
   * Method to update index of each item in class and update data-index in DOM
   * @param {string} itemClass Name of class of item elements in DOM
   * @returns {void} void
   */
  updateList(itemClass) {
    const itemsRender = document.querySelectorAll(itemClass);
    this.itemArray.forEach((listitem, i) => {
      const id = i + 1;
      listitem.index = id;
      itemsRender[i].dataset.index = id;
    });
    localStorage.setItem(this.localName, JSON.stringify(this.itemArray));
  }

  updateIndex(oldPos, newPos) {
    oldPos -= 1;
    const currItem = JSON.parse(JSON.stringify(this.itemArray[oldPos]));
    const firstHalf = this.itemArray.slice(0, oldPos);
    const secondHalf = this.itemArray.slice(oldPos + 1, this.itemArray.length);
    this.itemArray = firstHalf.concat(secondHalf);
    this.itemArray.splice(newPos, 0, currItem);
    localStorage.setItem(this.localName, JSON.stringify(this.itemArray));
  }

  /**
 * Static method of BookBiding. Updates Local Storate and re renders bookshelf section.
 * @param {HTMLElement} bookshelf HTML element where books are going to be added.
 * @param {string} localName name to be used to add bookbinding to local storage.
 * @param {string} bookDivName name of class to be used to add book to bookshelf.
 * @returns {void} Void
 */
  static renderList(ListContainer, localName, addDragEventListeners) {
    const itemList = localStorage.getItem(`${localName}`) ? JSON.parse(localStorage.getItem(`${localName}`)) : [];
    const ListFrag = document.createDocumentFragment();
    itemList.forEach((listitem) => {
      const { index, descrip, isCompleted } = listitem;
      const classesSec = itemClasses(isCompleted);
      const newChild = (0,_ListItemMod_js__WEBPACK_IMPORTED_MODULE_0__.createListItem)(index, xlinkHref, descrip, ...classesSec);
      ListFrag.appendChild(newChild);
    });
    const target = { ListContainer, element: undefined };
    // eslint-disable-next-line no-restricted-syntax
    for (const item of ListFrag.children) {
      addDragEventListeners(item, target);
    }
    ListContainer.innerHTML = '';
    ListContainer.appendChild(ListFrag);
    localStorage.setItem(`${localName}`, JSON.stringify(itemList));
  }
}



/***/ }),

/***/ "./src/modules/ListItemMod.js":
/*!************************************!*\
  !*** ./src/modules/ListItemMod.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ItemElem": () => (/* binding */ ItemElem),
/* harmony export */   "createListItem": () => (/* binding */ createListItem)
/* harmony export */ });
/* harmony import */ var _createElementMod_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./createElementMod.js */ "./src/modules/createElementMod.js");


const createListItem = (index, href, textContent, classList = false, classBtn = false,
  classDivText = false, classText = false) => {
  const docFrag = document.createDocumentFragment();
  const svgBtn = (0,_createElementMod_js__WEBPACK_IMPORTED_MODULE_0__.createNS)(href[0]);
  const chkBtn = (0,_createElementMod_js__WEBPACK_IMPORTED_MODULE_0__.createButton)('button', classBtn, 'Check Done', false, svgBtn);
  chkBtn.setAttribute('tabindex', '0');
  docFrag.appendChild(chkBtn);
  const labelTxt = (0,_createElementMod_js__WEBPACK_IMPORTED_MODULE_0__.createLabel)(false, classText, textContent);
  labelTxt.setAttribute('tabindex', '0');
  const divText = (0,_createElementMod_js__WEBPACK_IMPORTED_MODULE_0__.createElementDefault)('div', classDivText, false, labelTxt);
  const txtArea = (0,_createElementMod_js__WEBPACK_IMPORTED_MODULE_0__.createTextArea)('255', classText, textContent);
  divText.appendChild(txtArea);
  docFrag.appendChild(divText);
  const svgMove = (0,_createElementMod_js__WEBPACK_IMPORTED_MODULE_0__.createNS)(href[1]);
  docFrag.appendChild(svgMove);
  const svgRemove = (0,_createElementMod_js__WEBPACK_IMPORTED_MODULE_0__.createNS)(href[2]);
  docFrag.appendChild(svgRemove);
  const listItem = (0,_createElementMod_js__WEBPACK_IMPORTED_MODULE_0__.createElementDefault)('li', classList, false, docFrag);
  listItem.setAttribute('data-index', index);
  listItem.setAttribute('draggable', 'true');
  return listItem;
};

/**
 * Class of List Iteam to be instatiated with 3 properties
 * @param {string} descrip Description of List Item
 * @param {boolean} isCompleted Completion status of List Item
 * @param {number} index Position of List Iteam
 * @returns {object} New class with title and author properties
 */
class ItemElem {
  constructor(descrip, index, isCompleted = false) {
    this.descrip = descrip;
    this.isCompleted = isCompleted;
    this.index = index;
  }
}



/***/ }),

/***/ "./src/modules/createElementMod.js":
/*!*****************************************!*\
  !*** ./src/modules/createElementMod.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "addClass": () => (/* binding */ addClass),
/* harmony export */   "createButton": () => (/* binding */ createButton),
/* harmony export */   "createElementDefault": () => (/* binding */ createElementDefault),
/* harmony export */   "createLabel": () => (/* binding */ createLabel),
/* harmony export */   "createNS": () => (/* binding */ createNS),
/* harmony export */   "createTextArea": () => (/* binding */ createTextArea)
/* harmony export */ });
/**
 * Function to add class or classes to HTML Element
 * @param {HTMLElement} elem HTML Element to be modified.
 * @param {String} classes String or Array of String to be added.
 * @returns {HTMLElement} Returns HTML element with chosen classes.
 */
const addClass = (elem, classes) => {
  if ((typeof classes) === 'string') elem.classList.add(classes);
  else if ((typeof classes) === 'object') elem.classList.add(...classes);
  return elem;
};

/**
 * Function to create HTML element using tag names.
 * Classes and text content can be added as element is create.
 * @param {string} elem Tag name of the element to be created. Example: `div, p, section`
 * @param {string} classes Name of class or classes to add. String, array of string should be used.
 * If no class is wanted, false should be use.Optional Paramenter.
 * @param {String} textContext Text to be added as text content to HTML element.
 * Option parameter.
 * @param {HTMLElement} innerChild HTML Element to be appended
 * @returns {HTMLElement} Returns HTML element chosen with set attributes.
 */
const createElementDefault = (elem, classes = false, textContent = false, innerChild = false) => {
  const element = document.createElement(elem);
  addClass(element, classes);
  if (textContent) element.textContent = textContent;
  if (innerChild) element.appendChild(innerChild);
  return element;
};

const createNS = (href) => {
  const xlink = href.split('#');
  const use = document.createElementNS('http://www.w3.org/2000/svg', 'use');
  use.setAttribute('href', `${href}`);
  use.classList.add(`${xlink[1]}-use`);
  const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
  svg.appendChild(use);
  svg.classList.add(xlink[1]);
  return svg;
};

const createLabel = (forAtr = false, classes = false, textContent = false, innerChild = false) => {
  const label = createElementDefault('label', classes, textContent, innerChild);
  label.setAttribute('for', forAtr);
  return label;
};

const createTextArea = (length = false, classes = false,
  textContent = false, innerChild = false) => {
  const textArea = createElementDefault('textarea', classes, textContent, innerChild);
  if (length) textArea.setAttribute('maxlength', length);
  textArea.setAttribute('spellcheck', 'true');
  return textArea;
};

/**
 * Function to create HTML Button element. Classes and text content
 * can be added as element is create. Click event to a another webpage can be added.
 * @param {string} func Type of button `sumbit, reset, button`
 * @param {string} classes Name of class or classes to add. String, array of string should be used.
 * If no class is wanted, false should be use.Optional Paramenter.
 * @param {string} ariaLabel Text for accessibility
 * @param {any} textContent Text to be added as text content to HTML element.
 * Option parameter.
 * @param {HTMLElement} innerChild HTML Element to be appended
 * @param {any} href Hyperlink reference to be followed if button is clicked.
 * Option parameter.
 * @returns {HTMLButtonElement} Returns HTML button element chosen with set attributes.
 */
const createButton = (func, classes, ariaLabel, textContent = false,
  innerChild = false, href = false) => {
  const button = document.createElement('button');
  button.type = func;
  button.ariaLabel = ariaLabel;
  addClass(button, classes);
  if (textContent) button.textContent = textContent;
  if (href) {
    button.addEventListener('click', () => {
      window.location.href = href;
    });
  }
  if (innerChild) button.appendChild(innerChild);
  return button;
};




/***/ }),

/***/ "./src/asset/resource/enter.png":
/*!**************************************!*\
  !*** ./src/asset/resource/enter.png ***!
  \**************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "asset/resource/enter.png";

/***/ }),

/***/ "./src/asset/resource/icons.svg":
/*!**************************************!*\
  !*** ./src/asset/resource/icons.svg ***!
  \**************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "asset/resource/icons.svg";

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/index.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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UTtBQUNuQixXQUFXLEtBQUs7QUFDaEI7QUFDQSxXQUFXLGFBQWE7QUFDeEIsV0FBVyxLQUFLO0FBQ2hCO0FBQ0EsYUFBYSxtQkFBbUI7QUFDaEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTs7QUFTRSIsInNvdXJjZXMiOlsid2VicGFjazovL21pbmltYWxpc3RpYy10b2RvbGlzdC1hcHAvLi9zcmMvaW5kZXguY3NzIiwid2VicGFjazovL21pbmltYWxpc3RpYy10b2RvbGlzdC1hcHAvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL21pbmltYWxpc3RpYy10b2RvbGlzdC1hcHAvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzIiwid2VicGFjazovL21pbmltYWxpc3RpYy10b2RvbGlzdC1hcHAvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly9taW5pbWFsaXN0aWMtdG9kb2xpc3QtYXBwLy4vc3JjL2luZGV4LmNzcz9jZmU0Iiwid2VicGFjazovL21pbmltYWxpc3RpYy10b2RvbGlzdC1hcHAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vbWluaW1hbGlzdGljLXRvZG9saXN0LWFwcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vbWluaW1hbGlzdGljLXRvZG9saXN0LWFwcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly9taW5pbWFsaXN0aWMtdG9kb2xpc3QtYXBwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL21pbmltYWxpc3RpYy10b2RvbGlzdC1hcHAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly9taW5pbWFsaXN0aWMtdG9kb2xpc3QtYXBwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vbWluaW1hbGlzdGljLXRvZG9saXN0LWFwcC8uL3NyYy9pbmRleC5qcyIsIndlYnBhY2s6Ly9taW5pbWFsaXN0aWMtdG9kb2xpc3QtYXBwLy4vc3JjL21vZHVsZXMvSXRlbUxpc3QuanMiLCJ3ZWJwYWNrOi8vbWluaW1hbGlzdGljLXRvZG9saXN0LWFwcC8uL3NyYy9tb2R1bGVzL0xpc3RJdGVtTW9kLmpzIiwid2VicGFjazovL21pbmltYWxpc3RpYy10b2RvbGlzdC1hcHAvLi9zcmMvbW9kdWxlcy9jcmVhdGVFbGVtZW50TW9kLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyA9IG5ldyBVUkwoXCIuL2Fzc2V0L3Jlc291cmNlL2VudGVyLnBuZ1wiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIjpyb290IHtcXHJcXG4gIC0tc3ZnLXNpZGU6IGNsYW1wKDE2cHgsICgxMDB2dyAtIDMyMHB4KSAqIDEwMDAsIGNsYW1wKDIwcHgsICgxMDB2dyAtIDY0MHB4KSAqIDEwMDAsIGNsYW1wKDI1cHgsICgxMDB2dyAtIDEyODBweCkgKiAxMDAwLCAzMHB4KSkpO1xcclxcbiAgLS1mb250LXNpemU6IGNhbGModmFyKC0tc3ZnLXNpZGUpICogMC44KTtcXHJcXG4gIC0tYXBwLXJvdy1ibG9jay1wYWQ6IDEwcHg7XFxyXFxuICAtLWFwcC1yb3ctaGVpZ2h0OiBjYWxjKHZhcigtLXN2Zy1zaWRlKSArIDIgKiB2YXIoLS1hcHAtcm93LWJsb2NrLXBhZCkpO1xcclxcbn1cXHJcXG5cXHJcXG4qIHtcXHJcXG4gIHBhZGRpbmc6IDA7XFxyXFxuICBtYXJnaW46IDA7XFxyXFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcclxcbn1cXHJcXG5cXHJcXG51bCxcXHJcXG5saSB7XFxyXFxuICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XFxyXFxufVxcclxcblxcclxcbmJvZHkge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXgtZmxvdzogY29sdW1uO1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIHBhZGRpbmctYmxvY2s6IDQwcHg7XFxyXFxuICBnYXA6IDMwcHg7XFxyXFxufVxcclxcblxcclxcbi5hcHAtY29udGFpbmVyIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LWZsb3c6IGNvbHVtbjtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICB6LWluZGV4OiAxO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogYWxpY2VibHVlO1xcclxcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcXHJcXG4gIGJveC1zaGFkb3c6IDAgMCA0cHggNHB4IGNhZGV0Ymx1ZTtcXHJcXG59XFxyXFxuXFxyXFxuLmFwcC10ZXh0LFxcclxcbi5pdGVtIHtcXHJcXG4gIGZvbnQtc2l6ZTogdmFyKC0tZm9udC1zaXplKTtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbn1cXHJcXG5cXHJcXG4uYXBwLXRpdGxlIHtcXHJcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcclxcbiAgZm9udC1zaXplOiBjYWxjKHZhcigtLWZvbnQtc2l6ZSkgKiAxLjIpO1xcclxcbn1cXHJcXG5cXHJcXG4uYXBwLWludGVyYWN0IHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XFxyXFxuICBnYXA6IDEwcHg7XFxyXFxufVxcclxcblxcclxcbi5hcHAtcm93IHtcXHJcXG4gIGRpc3BsYXk6IGdyaWQ7XFxyXFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IGF1dG8gMWZyIGF1dG8gYXV0bztcXHJcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXHJcXG4gIGhlaWdodDogdmFyKC0tYXBwLXJvdy1oZWlnaHQpO1xcclxcbiAgcGFkZGluZy1ibG9jazogdmFyKC0tYXBwLXJvdy1ibG9jay1wYWQpO1xcclxcbiAgcGFkZGluZy1pbmxpbmU6IDE1cHg7XFxyXFxuICBjb2x1bW4tZ2FwOiAyMHB4O1xcclxcbiAgbWluLXdpZHRoOiBtaW4oODB2dywgMTIwMHB4KTtcXHJcXG59XFxyXFxuXFxyXFxuI2FwcC1pbnB1dCB7XFxyXFxuICBkaXNwbGF5OiBncmlkO1xcclxcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgYXV0bztcXHJcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgaGVpZ2h0OiB2YXIoLS1hcHAtcm93LWhlaWdodCk7XFxyXFxuICBwYWRkaW5nLWJsb2NrOiB2YXIoLS1hcHAtcm93LWJsb2NrLXBhZCk7XFxyXFxuICBwYWRkaW5nLWlubGluZTogMTVweDtcXHJcXG4gIGNvbHVtbi1nYXA6IDIwcHg7XFxyXFxuICBtaW4td2lkdGg6IG1pbig4MHZ3LCAxMjAwcHgpO1xcclxcbn1cXHJcXG5cXHJcXG5kaXYgYSxcXHJcXG5kaXYgc3ZnIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbn1cXHJcXG5cXHJcXG4uYXBwLXJvdyBzdmcge1xcclxcbiAgaGVpZ2h0OiB2YXIoLS1zdmctc2lkZSk7XFxyXFxuICB3aWR0aDogdmFyKC0tc3ZnLXNpZGUpO1xcclxcbn1cXHJcXG5cXHJcXG4uYXBwLXJvdyB0ZXh0YXJlYSB7XFxyXFxuICBkaXNwbGF5OiBub25lO1xcclxcbn1cXHJcXG5cXHJcXG4uaWNvbi10cmFzaC1vIHtcXHJcXG4gIGN1cnNvcjogcG9pbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLmFwcC1jb250YWluZXIgYnV0dG9uLFxcclxcbi5hcHAtY29udGFpbmVyIGlucHV0IHtcXHJcXG4gIGJvcmRlcjogbm9uZTtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xcclxcbiAgZm9udC1zaXplOiB2YXIoLS1mb250LXNpemUpO1xcclxcbiAgaGVpZ2h0OiB2YXIoLS1hcHAtcm93LWhlaWdodCk7XFxyXFxuICBwYWRkaW5nLWJsb2NrOiB2YXIoLS1hcHAtcm93LWJsb2NrLXBhZCk7XFxyXFxufVxcclxcblxcclxcbiNuZXdpdGVtIHtcXHJcXG4gIGZvbnQtc3R5bGU6IGl0YWxpYztcXHJcXG4gIGZvbnQtd2VpZ2h0OiBsaWdodGVyO1xcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxufVxcclxcblxcclxcbi5hcHAtY29udGFpbmVyIGlucHV0OmZvY3VzIHtcXHJcXG4gIG91dGxpbmU6IG5vbmU7XFxyXFxufVxcclxcblxcclxcbiNzdW1iaXQtbmV3aXRlbSB7XFxyXFxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fICsgXCIpO1xcclxcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcXHJcXG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcXHJcXG4gIGFwcGVhcmFuY2U6IG5vbmU7XFxyXFxuICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxuICB3aWR0aDogNDBweDtcXHJcXG4gIGhlaWdodDogNTBweDtcXHJcXG59XFxyXFxuXFxyXFxuLmFwcC1jb250YWluZXIgLmNsci1idG4ge1xcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxuICBjb2xvcjogZGFya3NsYXRlZ3JleTtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigyMjksIDI0MCwgMjUwKTtcXHJcXG4gIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDEwcHg7XFxyXFxuICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogMTBweDtcXHJcXG59XFxyXFxuXFxyXFxuLmNsci1idG46aG92ZXIge1xcclxcbiAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XFxyXFxuICBjb2xvcjogYmxhY2s7XFxyXFxufVxcclxcblxcclxcbi5hcHAtY29udGFpbmVyIC5pdGVtLWNoayB7XFxyXFxuICBib3JkZXI6IDJweCBzb2xpZCAjYzFjMWMzO1xcclxcbiAgY3Vyc29yOiBwb2ludGVyO1xcclxcbiAgY29sb3I6IHRyYW5zcGFyZW50O1xcclxcbiAgaGVpZ2h0OiB2YXIoLS1zdmctc2lkZSk7XFxyXFxuICB3aWR0aDogdmFyKC0tc3ZnLXNpZGUpO1xcclxcbiAgYm9yZGVyLXJhZGl1czogMnB4O1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxufVxcclxcblxcclxcbi5pY29uLW1vcmUtdmVydCB7XFxyXFxuICBjdXJzb3I6IG1vdmU7XFxyXFxufVxcclxcblxcclxcbi5pY29uLWNoZWNrIHtcXHJcXG4gIGRpc3BsYXk6IG5vbmU7XFxyXFxufVxcclxcblxcclxcbi5jb21wbGV0ZWQgLmljb24tY2hlY2sge1xcclxcbiAgZGlzcGxheTogaW5saW5lO1xcclxcbn1cXHJcXG5cXHJcXG4uY29tcGxldGVkIC5hcHAtdGV4dCB7XFxyXFxuICB0ZXh0LWRlY29yYXRpb246IGxpbmUtdGhyb3VnaDtcXHJcXG59XFxyXFxuXFxyXFxuLml0ZW0gbGFiZWwsXFxyXFxuLml0ZW0gdGV4dGFyZWEge1xcclxcbiAgZmxleC1ncm93OiAxO1xcclxcbiAgaGVpZ2h0OiB2YXIoLS1zdmctc2lkZSk7XFxyXFxuICByZXNpemU6IG5vbmU7XFxyXFxuICBib3JkZXI6IG5vbmU7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcXHJcXG59XFxyXFxuXFxyXFxuLml0ZW0gdGV4dGFyZWE6Zm9jdXMge1xcclxcbiAgb3V0bGluZTogbm9uZTtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xcclxcbn1cXHJcXG5cXHJcXG4uZHJhZ2dpbmcge1xcclxcbiAgb3BhY2l0eTogMC41O1xcclxcbn1cXHJcXG5cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvaW5kZXguY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0VBQ0UsZ0lBQWdJO0VBQ2hJLHdDQUF3QztFQUN4Qyx5QkFBeUI7RUFDekIsc0VBQXNFO0FBQ3hFOztBQUVBO0VBQ0UsVUFBVTtFQUNWLFNBQVM7RUFDVCxzQkFBc0I7QUFDeEI7O0FBRUE7O0VBRUUscUJBQXFCO0FBQ3ZCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLGlCQUFpQjtFQUNqQixtQkFBbUI7RUFDbkIsbUJBQW1CO0VBQ25CLFNBQVM7QUFDWDs7QUFFQTtFQUNFLGFBQWE7RUFDYixpQkFBaUI7RUFDakIsbUJBQW1CO0VBQ25CLFVBQVU7RUFDViwyQkFBMkI7RUFDM0IsbUJBQW1CO0VBQ25CLGlDQUFpQztBQUNuQzs7QUFFQTs7RUFFRSwyQkFBMkI7RUFDM0IsYUFBYTtFQUNiLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLGlCQUFpQjtFQUNqQix1Q0FBdUM7QUFDekM7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsMkJBQTJCO0VBQzNCLFNBQVM7QUFDWDs7QUFFQTtFQUNFLGFBQWE7RUFDYix5Q0FBeUM7RUFDekMsOEJBQThCO0VBQzlCLDZCQUE2QjtFQUM3Qix1Q0FBdUM7RUFDdkMsb0JBQW9CO0VBQ3BCLGdCQUFnQjtFQUNoQiw0QkFBNEI7QUFDOUI7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsK0JBQStCO0VBQy9CLHVCQUF1QjtFQUN2Qiw2QkFBNkI7RUFDN0IsdUNBQXVDO0VBQ3ZDLG9CQUFvQjtFQUNwQixnQkFBZ0I7RUFDaEIsNEJBQTRCO0FBQzlCOztBQUVBOztFQUVFLGFBQWE7RUFDYixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSx1QkFBdUI7RUFDdkIsc0JBQXNCO0FBQ3hCOztBQUVBO0VBQ0UsYUFBYTtBQUNmOztBQUVBO0VBQ0UsZUFBZTtBQUNqQjs7QUFFQTs7RUFFRSxZQUFZO0VBQ1osNkJBQTZCO0VBQzdCLDJCQUEyQjtFQUMzQiw2QkFBNkI7RUFDN0IsdUNBQXVDO0FBQ3pDOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLG9CQUFvQjtFQUNwQixXQUFXO0FBQ2I7O0FBRUE7RUFDRSxhQUFhO0FBQ2Y7O0FBRUE7RUFDRSx5REFBbUQ7RUFDbkQsNEJBQTRCO0VBQzVCLDJCQUEyQjtFQUMzQixnQkFBZ0I7RUFDaEIsZUFBZTtFQUNmLFdBQVc7RUFDWCxZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsb0JBQW9CO0VBQ3BCLG9DQUFvQztFQUNwQywrQkFBK0I7RUFDL0IsZ0NBQWdDO0FBQ2xDOztBQUVBO0VBQ0UsMEJBQTBCO0VBQzFCLFlBQVk7QUFDZDs7QUFFQTtFQUNFLHlCQUF5QjtFQUN6QixlQUFlO0VBQ2Ysa0JBQWtCO0VBQ2xCLHVCQUF1QjtFQUN2QixzQkFBc0I7RUFDdEIsa0JBQWtCO0VBQ2xCLGFBQWE7RUFDYixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxhQUFhO0FBQ2Y7O0FBRUE7RUFDRSxlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsNkJBQTZCO0FBQy9COztBQUVBOztFQUVFLFlBQVk7RUFDWix1QkFBdUI7RUFDdkIsWUFBWTtFQUNaLFlBQVk7RUFDWiw2QkFBNkI7QUFDL0I7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsNkJBQTZCO0FBQy9COztBQUVBO0VBQ0UsWUFBWTtBQUNkXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIjpyb290IHtcXHJcXG4gIC0tc3ZnLXNpZGU6IGNsYW1wKDE2cHgsICgxMDB2dyAtIDMyMHB4KSAqIDEwMDAsIGNsYW1wKDIwcHgsICgxMDB2dyAtIDY0MHB4KSAqIDEwMDAsIGNsYW1wKDI1cHgsICgxMDB2dyAtIDEyODBweCkgKiAxMDAwLCAzMHB4KSkpO1xcclxcbiAgLS1mb250LXNpemU6IGNhbGModmFyKC0tc3ZnLXNpZGUpICogMC44KTtcXHJcXG4gIC0tYXBwLXJvdy1ibG9jay1wYWQ6IDEwcHg7XFxyXFxuICAtLWFwcC1yb3ctaGVpZ2h0OiBjYWxjKHZhcigtLXN2Zy1zaWRlKSArIDIgKiB2YXIoLS1hcHAtcm93LWJsb2NrLXBhZCkpO1xcclxcbn1cXHJcXG5cXHJcXG4qIHtcXHJcXG4gIHBhZGRpbmc6IDA7XFxyXFxuICBtYXJnaW46IDA7XFxyXFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcclxcbn1cXHJcXG5cXHJcXG51bCxcXHJcXG5saSB7XFxyXFxuICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XFxyXFxufVxcclxcblxcclxcbmJvZHkge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXgtZmxvdzogY29sdW1uO1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIHBhZGRpbmctYmxvY2s6IDQwcHg7XFxyXFxuICBnYXA6IDMwcHg7XFxyXFxufVxcclxcblxcclxcbi5hcHAtY29udGFpbmVyIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LWZsb3c6IGNvbHVtbjtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICB6LWluZGV4OiAxO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogYWxpY2VibHVlO1xcclxcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcXHJcXG4gIGJveC1zaGFkb3c6IDAgMCA0cHggNHB4IGNhZGV0Ymx1ZTtcXHJcXG59XFxyXFxuXFxyXFxuLmFwcC10ZXh0LFxcclxcbi5pdGVtIHtcXHJcXG4gIGZvbnQtc2l6ZTogdmFyKC0tZm9udC1zaXplKTtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbn1cXHJcXG5cXHJcXG4uYXBwLXRpdGxlIHtcXHJcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcclxcbiAgZm9udC1zaXplOiBjYWxjKHZhcigtLWZvbnQtc2l6ZSkgKiAxLjIpO1xcclxcbn1cXHJcXG5cXHJcXG4uYXBwLWludGVyYWN0IHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XFxyXFxuICBnYXA6IDEwcHg7XFxyXFxufVxcclxcblxcclxcbi5hcHAtcm93IHtcXHJcXG4gIGRpc3BsYXk6IGdyaWQ7XFxyXFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IGF1dG8gMWZyIGF1dG8gYXV0bztcXHJcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXHJcXG4gIGhlaWdodDogdmFyKC0tYXBwLXJvdy1oZWlnaHQpO1xcclxcbiAgcGFkZGluZy1ibG9jazogdmFyKC0tYXBwLXJvdy1ibG9jay1wYWQpO1xcclxcbiAgcGFkZGluZy1pbmxpbmU6IDE1cHg7XFxyXFxuICBjb2x1bW4tZ2FwOiAyMHB4O1xcclxcbiAgbWluLXdpZHRoOiBtaW4oODB2dywgMTIwMHB4KTtcXHJcXG59XFxyXFxuXFxyXFxuI2FwcC1pbnB1dCB7XFxyXFxuICBkaXNwbGF5OiBncmlkO1xcclxcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgYXV0bztcXHJcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgaGVpZ2h0OiB2YXIoLS1hcHAtcm93LWhlaWdodCk7XFxyXFxuICBwYWRkaW5nLWJsb2NrOiB2YXIoLS1hcHAtcm93LWJsb2NrLXBhZCk7XFxyXFxuICBwYWRkaW5nLWlubGluZTogMTVweDtcXHJcXG4gIGNvbHVtbi1nYXA6IDIwcHg7XFxyXFxuICBtaW4td2lkdGg6IG1pbig4MHZ3LCAxMjAwcHgpO1xcclxcbn1cXHJcXG5cXHJcXG5kaXYgYSxcXHJcXG5kaXYgc3ZnIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbn1cXHJcXG5cXHJcXG4uYXBwLXJvdyBzdmcge1xcclxcbiAgaGVpZ2h0OiB2YXIoLS1zdmctc2lkZSk7XFxyXFxuICB3aWR0aDogdmFyKC0tc3ZnLXNpZGUpO1xcclxcbn1cXHJcXG5cXHJcXG4uYXBwLXJvdyB0ZXh0YXJlYSB7XFxyXFxuICBkaXNwbGF5OiBub25lO1xcclxcbn1cXHJcXG5cXHJcXG4uaWNvbi10cmFzaC1vIHtcXHJcXG4gIGN1cnNvcjogcG9pbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLmFwcC1jb250YWluZXIgYnV0dG9uLFxcclxcbi5hcHAtY29udGFpbmVyIGlucHV0IHtcXHJcXG4gIGJvcmRlcjogbm9uZTtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xcclxcbiAgZm9udC1zaXplOiB2YXIoLS1mb250LXNpemUpO1xcclxcbiAgaGVpZ2h0OiB2YXIoLS1hcHAtcm93LWhlaWdodCk7XFxyXFxuICBwYWRkaW5nLWJsb2NrOiB2YXIoLS1hcHAtcm93LWJsb2NrLXBhZCk7XFxyXFxufVxcclxcblxcclxcbiNuZXdpdGVtIHtcXHJcXG4gIGZvbnQtc3R5bGU6IGl0YWxpYztcXHJcXG4gIGZvbnQtd2VpZ2h0OiBsaWdodGVyO1xcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxufVxcclxcblxcclxcbi5hcHAtY29udGFpbmVyIGlucHV0OmZvY3VzIHtcXHJcXG4gIG91dGxpbmU6IG5vbmU7XFxyXFxufVxcclxcblxcclxcbiNzdW1iaXQtbmV3aXRlbSB7XFxyXFxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJy4vYXNzZXQvcmVzb3VyY2UvZW50ZXIucG5nJyk7XFxyXFxuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xcclxcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xcclxcbiAgYXBwZWFyYW5jZTogbm9uZTtcXHJcXG4gIGN1cnNvcjogcG9pbnRlcjtcXHJcXG4gIHdpZHRoOiA0MHB4O1xcclxcbiAgaGVpZ2h0OiA1MHB4O1xcclxcbn1cXHJcXG5cXHJcXG4uYXBwLWNvbnRhaW5lciAuY2xyLWJ0biB7XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG4gIGNvbG9yOiBkYXJrc2xhdGVncmV5O1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDIyOSwgMjQwLCAyNTApO1xcclxcbiAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogMTBweDtcXHJcXG4gIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiAxMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4uY2xyLWJ0bjpob3ZlciB7XFxyXFxuICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcXHJcXG4gIGNvbG9yOiBibGFjaztcXHJcXG59XFxyXFxuXFxyXFxuLmFwcC1jb250YWluZXIgLml0ZW0tY2hrIHtcXHJcXG4gIGJvcmRlcjogMnB4IHNvbGlkICNjMWMxYzM7XFxyXFxuICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxuICBjb2xvcjogdHJhbnNwYXJlbnQ7XFxyXFxuICBoZWlnaHQ6IHZhcigtLXN2Zy1zaWRlKTtcXHJcXG4gIHdpZHRoOiB2YXIoLS1zdmctc2lkZSk7XFxyXFxuICBib3JkZXItcmFkaXVzOiAycHg7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLmljb24tbW9yZS12ZXJ0IHtcXHJcXG4gIGN1cnNvcjogbW92ZTtcXHJcXG59XFxyXFxuXFxyXFxuLmljb24tY2hlY2sge1xcclxcbiAgZGlzcGxheTogbm9uZTtcXHJcXG59XFxyXFxuXFxyXFxuLmNvbXBsZXRlZCAuaWNvbi1jaGVjayB7XFxyXFxuICBkaXNwbGF5OiBpbmxpbmU7XFxyXFxufVxcclxcblxcclxcbi5jb21wbGV0ZWQgLmFwcC10ZXh0IHtcXHJcXG4gIHRleHQtZGVjb3JhdGlvbjogbGluZS10aHJvdWdoO1xcclxcbn1cXHJcXG5cXHJcXG4uaXRlbSBsYWJlbCxcXHJcXG4uaXRlbSB0ZXh0YXJlYSB7XFxyXFxuICBmbGV4LWdyb3c6IDE7XFxyXFxuICBoZWlnaHQ6IHZhcigtLXN2Zy1zaWRlKTtcXHJcXG4gIHJlc2l6ZTogbm9uZTtcXHJcXG4gIGJvcmRlcjogbm9uZTtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xcclxcbn1cXHJcXG5cXHJcXG4uaXRlbSB0ZXh0YXJlYTpmb2N1cyB7XFxyXFxuICBvdXRsaW5lOiBub25lO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxyXFxufVxcclxcblxcclxcbi5kcmFnZ2luZyB7XFxyXFxuICBvcGFjaXR5OiAwLjU7XFxyXFxufVxcclxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTtcblxuICAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTtcblxuICAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICh1cmwsIG9wdGlvbnMpIHtcbiAgaWYgKCFvcHRpb25zKSB7XG4gICAgb3B0aW9ucyA9IHt9O1xuICB9XG4gIGlmICghdXJsKSB7XG4gICAgcmV0dXJuIHVybDtcbiAgfVxuICB1cmwgPSBTdHJpbmcodXJsLl9fZXNNb2R1bGUgPyB1cmwuZGVmYXVsdCA6IHVybCk7XG5cbiAgLy8gSWYgdXJsIGlzIGFscmVhZHkgd3JhcHBlZCBpbiBxdW90ZXMsIHJlbW92ZSB0aGVtXG4gIGlmICgvXlsnXCJdLipbJ1wiXSQvLnRlc3QodXJsKSkge1xuICAgIHVybCA9IHVybC5zbGljZSgxLCAtMSk7XG4gIH1cbiAgaWYgKG9wdGlvbnMuaGFzaCkge1xuICAgIHVybCArPSBvcHRpb25zLmhhc2g7XG4gIH1cblxuICAvLyBTaG91bGQgdXJsIGJlIHdyYXBwZWQ/XG4gIC8vIFNlZSBodHRwczovL2RyYWZ0cy5jc3N3Zy5vcmcvY3NzLXZhbHVlcy0zLyN1cmxzXG4gIGlmICgvW1wiJygpIFxcdFxcbl18KCUyMCkvLnRlc3QodXJsKSB8fCBvcHRpb25zLm5lZWRRdW90ZXMpIHtcbiAgICByZXR1cm4gXCJcXFwiXCIuY29uY2F0KHVybC5yZXBsYWNlKC9cIi9nLCAnXFxcXFwiJykucmVwbGFjZSgvXFxuL2csIFwiXFxcXG5cIiksIFwiXFxcIlwiKTtcbiAgfVxuICByZXR1cm4gdXJsO1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9pbmRleC5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL2luZGV4LmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiB1cGRhdGVyO1xufVxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpO1xuXG4gICAgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG4gIGNzcyArPSBvYmouY3NzO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9XG5cbiAgLy8gRm9yIG9sZCBJRVxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICBpZiAodHlwZW9mIGRvY3VtZW50ID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKCkge30sXG4gICAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHt9XG4gICAgfTtcbiAgfVxuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiaW1wb3J0ICcuL2luZGV4LmNzcyc7XG5pbXBvcnQgeyBJdGVtTGlzdCwgeGxpbmtIcmVmIH0gZnJvbSAnLi9tb2R1bGVzL0l0ZW1MaXN0LmpzJztcblxuY29uc3QgbGlzdFVsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2FkZC1pdGVtcycpO1xuY29uc3QgbmV3SXRlbSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNuZXdpdGVtJyk7XG5jb25zdCBjbGVhckJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jbHItYnRuJyk7XG5jb25zdCBsb2NhbE5hbWUgPSAnaXRlbWxpc3QnO1xuXG5jb25zdCBsaXN0U2VjID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmxpc3QnKTtcbmNvbnN0IHN1Ym1pdEJ0biA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzdW1iaXQtbmV3aXRlbScpO1xuY29uc3QgTGlzdE9mSXRlbXMgPSBuZXcgSXRlbUxpc3QobG9jYWxOYW1lKTtcbmxldCBkcmFnSW5kZXg7XG5cbmNvbnN0IGNoYW5nZURlc2NyaXAgPSAoZGl2LCBsYWJlbCwgdGV4dEFyZWEpID0+IHtcbiAgbGFiZWwudGV4dENvbnRlbnQgPSB0ZXh0QXJlYS52YWx1ZTtcbiAgY29uc3QgaWQgPSBwYXJzZUludChkaXYuZGF0YXNldC5pbmRleCwgMTApO1xuICBMaXN0T2ZJdGVtcy51cGRhdGVEZXNjcmlwKGlkLCB0ZXh0QXJlYS52YWx1ZSk7XG59O1xuXG4vKipcbiAqIEZ1bmN0aW9uIHRvIGhhbmRsZSB0aGUgY2hhbmdlIG9mIGRlc2NyaXB0aW9uIG9mIGEgc2luZ2xlIGl0ZW0uXG4gKiBBbHNvIHVwZGF0ZXMgaW5kZXggb2YgYWxsIHJlbWFpbmluZyBpdGVtcyBpbiBjbGFzcyBhbmQgZGF0YS1pbmRleCBpbiBET01cbiAqIEBwYXJhbSB7YW55fSBkaXZcbiAqIEByZXR1cm5zIHthbnl9XG4gKi9cbmNvbnN0IHVwZGF0ZURlc2NyaXB0aW9uID0gKGRpdikgPT4ge1xuICBjb25zdCBsYWJlbCA9IGRpdi5xdWVyeVNlbGVjdG9yKCdsYWJlbCcpO1xuICBjb25zdCB0ZXh0QXJlYSA9IGRpdi5xdWVyeVNlbGVjdG9yKCd0ZXh0YXJlYScpO1xuICBsYWJlbC5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICB0ZXh0QXJlYS5zdHlsZS5kaXNwbGF5ID0gJ2ZsZXgnO1xuICB0ZXh0QXJlYS5mb2N1cygpO1xuICB0ZXh0QXJlYS5hZGRFdmVudExpc3RlbmVyKCdmb2N1c291dCcsICgpID0+IHtcbiAgICBjaGFuZ2VEZXNjcmlwKGRpdiwgbGFiZWwsIHRleHRBcmVhKTtcbiAgICBsYWJlbC5zdHlsZS5kaXNwbGF5ID0gJ2ZsZXgnO1xuICAgIHRleHRBcmVhLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gIH0pO1xuICB0ZXh0QXJlYS5hZGRFdmVudExpc3RlbmVyKCdrZXlkb3duJywgKGUpID0+IHtcbiAgICBpZiAoZS5jb2RlID09PSAnRW50ZXInKSB7XG4gICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICBjaGFuZ2VEZXNjcmlwKGRpdiwgbGFiZWwsIHRleHRBcmVhKTtcbiAgICAgIGxhYmVsLnN0eWxlLmRpc3BsYXkgPSAnZmxleCc7XG4gICAgICB0ZXh0QXJlYS5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICAgIH1cbiAgfSk7XG4gIHRleHRBcmVhLmFkZEV2ZW50TGlzdGVuZXIoJ2lucHV0JywgKCkgPT4ge1xuICAgIGNoYW5nZURlc2NyaXAoZGl2LCBsYWJlbCwgdGV4dEFyZWEpO1xuICB9KTtcbn07XG5cbi8qKlxuICogRnVuY3Rpb24gdG8gdXBkYXRlIChyZW1vdmUgb3IgY2hhbmdlIGRlc2NyaXB0aW9uKSBvZiBpdGVtIG9yIGl0ZW1zIGZyb20gY2xhc3MgYW5kIERPTS5cbiAqIEFsc28gdXBkYXRlcyBpbmRleCBvZiBhbGwgcmVtYWluaW5nIGl0ZW1zIGluIGNsYXNzIGFuZCBkYXRhLWluZGV4IGluIERPTVxuICogQHBhcmFtIHthbnl9IGVcbiAqIEByZXR1cm5zIHthbnl9XG4gKi9cbmNvbnN0IHVwZGF0ZUxpc3QgPSAoZSkgPT4ge1xuICBlLnByZXZlbnREZWZhdWx0KCk7XG4gIGxldCBsaXN0SXRlbTtcbiAgc3dpdGNoIChlLnRhcmdldC5jbGFzc0xpc3QudmFsdWUpIHtcbiAgICBjYXNlICdpdGVtLWNoayc6XG4gICAgICBsaXN0SXRlbSA9IGUudGFyZ2V0LnBhcmVudE5vZGU7XG4gICAgICBsaXN0SXRlbS5jbGFzc0xpc3QudG9nZ2xlKCdjb21wbGV0ZWQnKTtcbiAgICAgIExpc3RPZkl0ZW1zLnRvZ2dsZWNvbXBsZXRlKHBhcnNlSW50KGxpc3RJdGVtLmRhdGFzZXQuaW5kZXgsIDEwKSk7XG4gICAgICBicmVhaztcbiAgICBjYXNlICdpY29uLWNoZWNrJzpcbiAgICAgIGxpc3RJdGVtID0gZS50YXJnZXQucGFyZW50Tm9kZS5wYXJlbnROb2RlO1xuICAgICAgbGlzdEl0ZW0uY2xhc3NMaXN0LnRvZ2dsZSgnY29tcGxldGVkJyk7XG4gICAgICBMaXN0T2ZJdGVtcy50b2dnbGVjb21wbGV0ZShwYXJzZUludChsaXN0SXRlbS5kYXRhc2V0LmluZGV4LCAxMCkpO1xuICAgICAgYnJlYWs7XG4gICAgY2FzZSAnaWNvbi1jaGVjay11c2UnOlxuICAgICAgbGlzdEl0ZW0gPSBlLnRhcmdldC5wYXJlbnROb2RlLnBhcmVudE5vZGUucGFyZW50Tm9kZTtcbiAgICAgIGxpc3RJdGVtLmNsYXNzTGlzdC50b2dnbGUoJ2NvbXBsZXRlZCcpO1xuICAgICAgTGlzdE9mSXRlbXMudG9nZ2xlY29tcGxldGUocGFyc2VJbnQobGlzdEl0ZW0uZGF0YXNldC5pbmRleCwgMTApKTtcbiAgICAgIGJyZWFrO1xuICAgIGNhc2UgJ2FwcC10ZXh0JzpcbiAgICAgIHVwZGF0ZURlc2NyaXB0aW9uKGUudGFyZ2V0LnBhcmVudE5vZGUucGFyZW50Tm9kZSk7XG4gICAgICBicmVhaztcbiAgICBjYXNlICdpY29uLXRyYXNoLW8nOlxuICAgICAgbGlzdEl0ZW0gPSBlLnRhcmdldC5wYXJlbnROb2RlO1xuICAgICAgTGlzdE9mSXRlbXMucmVtb3ZlaXRlbShwYXJzZUludChsaXN0SXRlbS5kYXRhc2V0LmluZGV4LCAxMCksIGxpc3RJdGVtLCBsaXN0VWwpO1xuICAgICAgbGlzdFVsLnJlbW92ZUNoaWxkKGxpc3RJdGVtKTtcbiAgICAgIExpc3RPZkl0ZW1zLnVwZGF0ZUxpc3QoJy5hcHAtaXRlbScpO1xuICAgICAgYnJlYWs7XG4gICAgY2FzZSAnaWNvbi10cmFzaC1vLXVzZSc6XG4gICAgICBsaXN0SXRlbSA9IGUudGFyZ2V0LnBhcmVudE5vZGUucGFyZW50Tm9kZTtcbiAgICAgIExpc3RPZkl0ZW1zLnJlbW92ZWl0ZW0ocGFyc2VJbnQobGlzdEl0ZW0uZGF0YXNldC5pbmRleCwgMTApLCBsaXN0SXRlbSwgbGlzdFVsKTtcbiAgICAgIGxpc3RVbC5yZW1vdmVDaGlsZChsaXN0SXRlbSk7XG4gICAgICBMaXN0T2ZJdGVtcy51cGRhdGVMaXN0KCcuYXBwLWl0ZW0nKTtcbiAgICAgIGJyZWFrO1xuICAgIGRlZmF1bHQ6XG4gICAgICBicmVhaztcbiAgfVxufTtcblxuY29uc3QgY29tcGFyZU9yZGVyID0gKGVsZW0xLCBlbGVtMikgPT4ge1xuICBpZiAoZWxlbTEucGFyZW50Tm9kZSAhPT0gZWxlbTIucGFyZW50Tm9kZSkge1xuICAgIHJldHVybiBudWxsO1xuICB9XG4gIGlmIChlbGVtMSA9PT0gZWxlbTIpIHJldHVybiAwO1xuXG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1iaXR3aXNlXG4gIGlmIChlbGVtMS5jb21wYXJlRG9jdW1lbnRQb3NpdGlvbihlbGVtMikgJiBOb2RlLkRPQ1VNRU5UX1BPU0lUSU9OX0ZPTExPV0lORykge1xuICAgIHJldHVybiAtMTtcbiAgfVxuICByZXR1cm4gMTtcbn07XG5cbmNvbnN0IGFkZERyYWdFdmVudExpc3RlbmVycyA9IChlbGVtLCBkcmFnZ2VkVGFyZ2V0KSA9PiB7XG4gIGVsZW0uYWRkRXZlbnRMaXN0ZW5lcignZHJhZ3N0YXJ0JywgKCkgPT4ge1xuICAgIGRyYWdnZWRUYXJnZXQuZWxlbWVudCA9IGVsZW07XG4gICAgZWxlbS5jbGFzc0xpc3QuYWRkKCdkcmFnZ2luZycpO1xuICAgIGRyYWdJbmRleCA9ICtkcmFnZ2VkVGFyZ2V0LmVsZW1lbnQuZGF0YXNldC5pbmRleDtcbiAgfSk7XG5cbiAgZWxlbS5hZGRFdmVudExpc3RlbmVyKCdkcmFnb3ZlcicsICgpID0+IHtcbiAgICBjb25zdCBvcmRlciA9IGNvbXBhcmVPcmRlcihlbGVtLCBkcmFnZ2VkVGFyZ2V0LmVsZW1lbnQpO1xuICAgIGlmICghb3JkZXIpIHJldHVybjtcbiAgICBjb25zdCBiYXNlRWxlbWVudCA9IG9yZGVyID09PSAtMSA/IGVsZW0gOiBlbGVtLm5leHRTbGliaW5nO1xuICAgIGRyYWdnZWRUYXJnZXQuTGlzdENvbnRhaW5lci5pbnNlcnRCZWZvcmUoZHJhZ2dlZFRhcmdldC5lbGVtZW50LCBiYXNlRWxlbWVudCk7XG4gIH0pO1xuICBlbGVtLmFkZEV2ZW50TGlzdGVuZXIoJ2RyYWdlbmQnLCAoKSA9PiB7XG4gICAgZWxlbS5jbGFzc0xpc3QucmVtb3ZlKCdkcmFnZ2luZycpO1xuICAgIGNvbnN0IG5ld1Bvc3QgPSBBcnJheS5mcm9tKGVsZW0ucGFyZW50Tm9kZS5jaGlsZHJlbikuaW5kZXhPZihlbGVtKTtcbiAgICBMaXN0T2ZJdGVtcy51cGRhdGVJbmRleChkcmFnSW5kZXgsIG5ld1Bvc3QpO1xuICAgIExpc3RPZkl0ZW1zLnVwZGF0ZUxpc3QoJy5hcHAtaXRlbScpO1xuICB9KTtcbn07XG5cbi8qKlxuICogRnVuY3Rpb24gdG8gYWRkIGl0ZW1zIHRvIGNsYXNzIGFuZCBET00gd2hlbmV2ZXIgYSBuZXcgaXRlbSBpcyBzdW1iaXRcbiAqIEBwYXJhbSB7ZXZlbnR9IGUgRXZlbnQgZ2l2ZW4gYnkgYWRkRXZlbnRMaXN0ZW5lclxuICogQHJldHVybnMge3ZvaWR9IHZvaWRcbiAqL1xuY29uc3QgYWRkSXRlbSA9IChlKSA9PiB7XG4gIGUucHJldmVudERlZmF1bHQoKTtcbiAgY29uc3QgbmV3Q2hpbGQgPSBMaXN0T2ZJdGVtcy5hZGQobmV3SXRlbSwgeGxpbmtIcmVmKTtcbiAgbGlzdFVsLmFwcGVuZENoaWxkKG5ld0NoaWxkKTtcbiAgY29uc3QgdGFyZ2V0ID0geyBsaXN0VWwsIGVsZW1lbnQ6IHVuZGVmaW5lZCB9O1xuICBhZGREcmFnRXZlbnRMaXN0ZW5lcnMobmV3Q2hpbGQsIHRhcmdldCk7XG59O1xuXG4vKipcbiAqIEZ1bmN0aW9uIHRvIHJlbW92ZSBhbGwgaXRlbSB3aXRoIGNvbXBsZXRlIGNsYXNzIGZyb20gRE9NIGFuZCBjbGFzcy5cbiAqIEFsc28gdXBkYXRlcyBpbmRleCBvZiBhbGwgcmVtYWluaW5nIGl0ZW1zIGluIGNsYXNzIGFuZCBkYXRhLWluZGV4IGluIERPTVxuICogQHBhcmFtIHthbnl9IGUgRXZlbnQgZ2l2ZW4gYnkgYWRkRXZlbnRMaXN0ZW5lclxuICogQHJldHVybnMge3ZvaWR9IHZvaWRcbiAqL1xuY29uc3QgcmVtb3ZlSXRlbXMgPSAoZSkgPT4ge1xuICBlLnByZXZlbnREZWZhdWx0KCk7XG4gIGNvbnN0IGl0ZW1Db21wbGV0ZWQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuY29tcGxldGVkJyk7XG4gIGlmIChpdGVtQ29tcGxldGVkLmxlbmd0aCA+IDApIHtcbiAgICBpdGVtQ29tcGxldGVkLmZvckVhY2goKGRlbEl0ZW0pID0+IHtcbiAgICAgIExpc3RPZkl0ZW1zLnJlbW92ZWl0ZW0ocGFyc2VJbnQoZGVsSXRlbS5kYXRhc2V0LmluZGV4LCAxMCksIGRlbEl0ZW0sIGxpc3RVbCk7XG4gICAgfSk7XG4gICAgaXRlbUNvbXBsZXRlZC5mb3JFYWNoKChkZWxJdGVtKSA9PiB7XG4gICAgICBsaXN0VWwucmVtb3ZlQ2hpbGQoZGVsSXRlbSk7XG4gICAgfSk7XG4gICAgTGlzdE9mSXRlbXMudXBkYXRlTGlzdCgnLmFwcC1pdGVtJyk7XG4gIH1cbn07XG5cbkl0ZW1MaXN0LnJlbmRlckxpc3QobGlzdFVsLCBsb2NhbE5hbWUsIGFkZERyYWdFdmVudExpc3RlbmVycyk7XG5cbmxpc3RTZWMuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCB1cGRhdGVMaXN0KTtcbnN1Ym1pdEJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGFkZEl0ZW0pO1xuY2xlYXJCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCByZW1vdmVJdGVtcyk7IiwiaW1wb3J0IHsgY3JlYXRlTGlzdEl0ZW0sIEl0ZW1FbGVtIH0gZnJvbSAnLi9MaXN0SXRlbU1vZC5qcyc7XG5pbXBvcnQgaWNvbiBmcm9tICcuLi9hc3NldC9yZXNvdXJjZS9pY29ucy5zdmcnO1xuXG5jb25zdCB4bGlua0hyZWYgPSBbYCR7aWNvbn0jaWNvbi1jaGVja2AsICcuL2Fzc2V0L3Jlc291cmNlL2ljb25zLnN2ZyNpY29uLW1vcmUtdmVydCcsXG4gICcuL2Fzc2V0L3Jlc291cmNlL2ljb25zLnN2ZyNpY29uLXRyYXNoLW8nXTtcblxuY29uc3QgaXRlbUNsYXNzZXMgPSAoc3RhdHVzID0gZmFsc2UpID0+IHtcbiAgY29uc3QgY2xhc3NMaXN0SW5jb21wID0gWydhcHAtcm93JywgJ2FwcC1pdGVtJ107XG4gIGNvbnN0IGNsYXNzTGlzdENvbXAgPSBbJ2FwcC1yb3cnLCAnYXBwLWl0ZW0nLCAnY29tcGxldGVkJ107XG4gIGNvbnN0IGNsYXNzQnRuID0gJ2l0ZW0tY2hrJztcbiAgY29uc3QgY2xhc3NEaXZUZXh0ID0gJ2l0ZW0nO1xuICBjb25zdCBjbGFzc1RleHQgPSAnYXBwLXRleHQnO1xuICBjb25zdCBjbGFzc0xpc3QgPSBzdGF0dXMgPyBjbGFzc0xpc3RDb21wIDogY2xhc3NMaXN0SW5jb21wO1xuICBjb25zdCB0ZW1wID0gW2NsYXNzTGlzdCwgY2xhc3NCdG4sIGNsYXNzRGl2VGV4dCwgY2xhc3NUZXh0XTtcbiAgcmV0dXJuIHRlbXA7XG59O1xuXG4vKipcbiAqIENsYXNzIHRoYXQgY3JlYXRlcyBhbmQgYXJyYXkgdG8gYm9vayBjbGFzcyBpbnN0YW5jZXMgdG8gYmUgYWRkZWQgdG8gbG9jYWwgc3RvcmFnZVxuICogYW5kIGFkZGVkIHRvIERPTS5cbiAqIEBwYXJhbSB7c3RyaW5nfSBsb2NhbE5hbWUgbmFtZSB0byBiZSB1c2VkIHRvIGFkZCBib29rYmluZGluZyB0byBsb2NhbCBzdG9yYWdlLlxuICogQHJldHVybnMge29iamVjdH0gcmV0dXJuIGluc3RhbmNlIG9mIGJvb2tiaWRpbmcgY2xhc3Mgd2l0aCBhbiBhcnJheSBvZiBib29rIGNsYXNzIGluc3RhbmNlcy5cbiAqL1xuY2xhc3MgSXRlbUxpc3Qge1xuICBjb25zdHJ1Y3Rvcihsb2NhbE5hbWUpIHtcbiAgICB0aGlzLml0ZW1BcnJheSA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKGAke2xvY2FsTmFtZX1gKSA/IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oYCR7bG9jYWxOYW1lfWApKSA6IFtdO1xuICAgIHRoaXMubG9jYWxOYW1lID0gbG9jYWxOYW1lO1xuICAgIHRoaXMubGVuZ3RoID0gdGhpcy5pdGVtQXJyYXkubGVuZ3RoO1xuICB9XG5cbiAgLyoqXG4gICAqIE1ldGhvZCB0byByZW1vdmUgaXRlbSB0byBsb2NhbCBzdG9yYWdlIGFuZCBjbGFzcy5cbiAgICogQHBhcmFtIHtzdHJpbmd9IGRlc2NyaXAgRGVzY3JpcHRpb24gb2YgaXRlbSBhcyBpbnB1dCBieSB1c2VyXG4gICAqIEBwYXJhbSB7QXJyYXl9IHhsaW5rIGFycmF5IG9mIHN0cmluZyB3aXRoIGhyZWYgZm9yIHN2ZyBpY29uc1xuICAgKiBAcGFyYW0ge0FycmF5fSBjbGFzc2VzU2VjIEFycmF5IG9mIHN0cmluZ3Mgd2l0aCBjbGFzcyBuYW1lcyBmb3IgZWFjaCBwYXJ0IG9mIHRoZSBzZWN0aW9uLlxuICAgKiBMZW5ndGggNC5cbiAgICogQHJldHVybnMge3ZvaWR9XG4gICAqL1xuICBhZGQoZGVzY3JpcCwgeGxpbmspIHtcbiAgICBsZXQgbmV3Q2hpbGQgPSBmYWxzZTtcbiAgICBpZiAoZGVzY3JpcC52YWx1ZS5sZW5ndGgpIHtcbiAgICAgIGNvbnN0IGluZGV4ID0gdGhpcy5sZW5ndGggKyAxO1xuICAgICAgY29uc3QgaXRlbSA9IG5ldyBJdGVtRWxlbShkZXNjcmlwLnZhbHVlLCBpbmRleCk7XG4gICAgICB0aGlzLml0ZW1BcnJheSA9IHRoaXMuaXRlbUFycmF5LmNvbmNhdChpdGVtKTtcbiAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKHRoaXMubG9jYWxOYW1lLCBKU09OLnN0cmluZ2lmeSh0aGlzLml0ZW1BcnJheSkpO1xuICAgICAgY29uc3QgY2xhc3Nlc1NlYyA9IGl0ZW1DbGFzc2VzKCk7XG4gICAgICBuZXdDaGlsZCA9IGNyZWF0ZUxpc3RJdGVtKGluZGV4LCB4bGluaywgZGVzY3JpcC52YWx1ZSwgLi4uY2xhc3Nlc1NlYyk7XG4gICAgICB0aGlzLmxlbmd0aCArPSAxO1xuICAgIH1cbiAgICBkZXNjcmlwLnZhbHVlID0gJyc7XG4gICAgcmV0dXJuIG5ld0NoaWxkO1xuICB9XG5cbiAgLyoqXG4gKiBNZXRob2QgdG8gcmVtb3ZlIGl0ZW0gZnJvbSBsb2NhbCBzdG9yYWdlIGFuZCBjbGFzcy5cbiAqIEBwYXJhbSB7bnVtYmVyfSBpZCBJbmRleCBvZiBpdGVtIHRvIGJlIHJlbW92ZWRcbiAqIEByZXR1cm5zIHt2b2lkfVxuICovXG4gIHJlbW92ZWl0ZW0oaWQpIHtcbiAgICB0aGlzLml0ZW1BcnJheSA9IHRoaXMuaXRlbUFycmF5LmZpbHRlcigoaXRlbSkgPT4gaXRlbS5pbmRleCAhPT0gaWQpO1xuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKHRoaXMubG9jYWxOYW1lLCBKU09OLnN0cmluZ2lmeSh0aGlzLml0ZW1BcnJheSkpO1xuICAgIHRoaXMubGVuZ3RoIC09IDE7XG4gIH1cblxuICAvKipcbiAgICogTWV0aG9kIHRvIHVwZGF0ZSBkZXNjcmlwdGlvbiBvZiBpbiBsb2NhbCBzdG9yYWdlIGFuZCBjbGFzc1xuICAgKiBAcGFyYW0ge251bWJlcn0gaWQgSW5kZXggb2YgaXRlbVxuICAgKiBAcGFyYW0ge3N0cmluZ30gZGVzY3JpcHRpb24gTmV3IGRlc2NyaXB0aW9uIG9mIGl0ZW0gdG8gYmUgYWRkZWRcbiAgICogQHJldHVybnMge3ZvaWR9IFZPaWRcbiAgICovXG4gIHVwZGF0ZURlc2NyaXAoaWQsIGRlc2NyaXB0aW9uKSB7XG4gICAgaWQgLT0gMTtcbiAgICB0aGlzLml0ZW1BcnJheVtpZF0uZGVzY3JpcCA9IGRlc2NyaXB0aW9uO1xuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKHRoaXMubG9jYWxOYW1lLCBKU09OLnN0cmluZ2lmeSh0aGlzLml0ZW1BcnJheSkpO1xuICB9XG5cbiAgLyoqXG4gICAqIE1ldGhvZCB0byB0b2dnbGUgY29tcGxldGVuZXNzIHN0YXR1cyBvZiBpdGVtIGluIGxvY2FsIHN0b3JhZ2UgYW5kIGNsYXNzXG4gICAqIEBwYXJhbSB7bnVtYmVyfSBpZCBJbmRleCBvZiBpdGVtXG4gICAqIEByZXR1cm5zIHt2b2lkfSB2b2lkXG4gICAqL1xuICB0b2dnbGVDb21wbGV0ZShpZCkge1xuICAgIGlkIC09IDE7XG4gICAgdGhpcy5pdGVtQXJyYXlbaWRdLmlzQ29tcGxldGVkID0gIXRoaXMuaXRlbUFycmF5W2lkXS5pc0NvbXBsZXRlZDtcbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSh0aGlzLmxvY2FsTmFtZSwgSlNPTi5zdHJpbmdpZnkodGhpcy5pdGVtQXJyYXkpKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBNZXRob2QgdG8gdXBkYXRlIGluZGV4IG9mIGVhY2ggaXRlbSBpbiBjbGFzcyBhbmQgdXBkYXRlIGRhdGEtaW5kZXggaW4gRE9NXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBpdGVtQ2xhc3MgTmFtZSBvZiBjbGFzcyBvZiBpdGVtIGVsZW1lbnRzIGluIERPTVxuICAgKiBAcmV0dXJucyB7dm9pZH0gdm9pZFxuICAgKi9cbiAgdXBkYXRlTGlzdChpdGVtQ2xhc3MpIHtcbiAgICBjb25zdCBpdGVtc1JlbmRlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoaXRlbUNsYXNzKTtcbiAgICB0aGlzLml0ZW1BcnJheS5mb3JFYWNoKChsaXN0aXRlbSwgaSkgPT4ge1xuICAgICAgY29uc3QgaWQgPSBpICsgMTtcbiAgICAgIGxpc3RpdGVtLmluZGV4ID0gaWQ7XG4gICAgICBpdGVtc1JlbmRlcltpXS5kYXRhc2V0LmluZGV4ID0gaWQ7XG4gICAgfSk7XG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0odGhpcy5sb2NhbE5hbWUsIEpTT04uc3RyaW5naWZ5KHRoaXMuaXRlbUFycmF5KSk7XG4gIH1cblxuICB1cGRhdGVJbmRleChvbGRQb3MsIG5ld1Bvcykge1xuICAgIG9sZFBvcyAtPSAxO1xuICAgIGNvbnN0IGN1cnJJdGVtID0gSlNPTi5wYXJzZShKU09OLnN0cmluZ2lmeSh0aGlzLml0ZW1BcnJheVtvbGRQb3NdKSk7XG4gICAgY29uc3QgZmlyc3RIYWxmID0gdGhpcy5pdGVtQXJyYXkuc2xpY2UoMCwgb2xkUG9zKTtcbiAgICBjb25zdCBzZWNvbmRIYWxmID0gdGhpcy5pdGVtQXJyYXkuc2xpY2Uob2xkUG9zICsgMSwgdGhpcy5pdGVtQXJyYXkubGVuZ3RoKTtcbiAgICB0aGlzLml0ZW1BcnJheSA9IGZpcnN0SGFsZi5jb25jYXQoc2Vjb25kSGFsZik7XG4gICAgdGhpcy5pdGVtQXJyYXkuc3BsaWNlKG5ld1BvcywgMCwgY3Vyckl0ZW0pO1xuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKHRoaXMubG9jYWxOYW1lLCBKU09OLnN0cmluZ2lmeSh0aGlzLml0ZW1BcnJheSkpO1xuICB9XG5cbiAgLyoqXG4gKiBTdGF0aWMgbWV0aG9kIG9mIEJvb2tCaWRpbmcuIFVwZGF0ZXMgTG9jYWwgU3RvcmF0ZSBhbmQgcmUgcmVuZGVycyBib29rc2hlbGYgc2VjdGlvbi5cbiAqIEBwYXJhbSB7SFRNTEVsZW1lbnR9IGJvb2tzaGVsZiBIVE1MIGVsZW1lbnQgd2hlcmUgYm9va3MgYXJlIGdvaW5nIHRvIGJlIGFkZGVkLlxuICogQHBhcmFtIHtzdHJpbmd9IGxvY2FsTmFtZSBuYW1lIHRvIGJlIHVzZWQgdG8gYWRkIGJvb2tiaW5kaW5nIHRvIGxvY2FsIHN0b3JhZ2UuXG4gKiBAcGFyYW0ge3N0cmluZ30gYm9va0Rpdk5hbWUgbmFtZSBvZiBjbGFzcyB0byBiZSB1c2VkIHRvIGFkZCBib29rIHRvIGJvb2tzaGVsZi5cbiAqIEByZXR1cm5zIHt2b2lkfSBWb2lkXG4gKi9cbiAgc3RhdGljIHJlbmRlckxpc3QoTGlzdENvbnRhaW5lciwgbG9jYWxOYW1lLCBhZGREcmFnRXZlbnRMaXN0ZW5lcnMpIHtcbiAgICBjb25zdCBpdGVtTGlzdCA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKGAke2xvY2FsTmFtZX1gKSA/IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oYCR7bG9jYWxOYW1lfWApKSA6IFtdO1xuICAgIGNvbnN0IExpc3RGcmFnID0gZG9jdW1lbnQuY3JlYXRlRG9jdW1lbnRGcmFnbWVudCgpO1xuICAgIGl0ZW1MaXN0LmZvckVhY2goKGxpc3RpdGVtKSA9PiB7XG4gICAgICBjb25zdCB7IGluZGV4LCBkZXNjcmlwLCBpc0NvbXBsZXRlZCB9ID0gbGlzdGl0ZW07XG4gICAgICBjb25zdCBjbGFzc2VzU2VjID0gaXRlbUNsYXNzZXMoaXNDb21wbGV0ZWQpO1xuICAgICAgY29uc3QgbmV3Q2hpbGQgPSBjcmVhdGVMaXN0SXRlbShpbmRleCwgeGxpbmtIcmVmLCBkZXNjcmlwLCAuLi5jbGFzc2VzU2VjKTtcbiAgICAgIExpc3RGcmFnLmFwcGVuZENoaWxkKG5ld0NoaWxkKTtcbiAgICB9KTtcbiAgICBjb25zdCB0YXJnZXQgPSB7IExpc3RDb250YWluZXIsIGVsZW1lbnQ6IHVuZGVmaW5lZCB9O1xuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1yZXN0cmljdGVkLXN5bnRheFxuICAgIGZvciAoY29uc3QgaXRlbSBvZiBMaXN0RnJhZy5jaGlsZHJlbikge1xuICAgICAgYWRkRHJhZ0V2ZW50TGlzdGVuZXJzKGl0ZW0sIHRhcmdldCk7XG4gICAgfVxuICAgIExpc3RDb250YWluZXIuaW5uZXJIVE1MID0gJyc7XG4gICAgTGlzdENvbnRhaW5lci5hcHBlbmRDaGlsZChMaXN0RnJhZyk7XG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oYCR7bG9jYWxOYW1lfWAsIEpTT04uc3RyaW5naWZ5KGl0ZW1MaXN0KSk7XG4gIH1cbn1cblxuZXhwb3J0IHtcbiAgSXRlbUxpc3QsIHhsaW5rSHJlZixcbn07IiwiaW1wb3J0IHtcbiAgY3JlYXRlTGFiZWwsIGNyZWF0ZU5TLCBjcmVhdGVUZXh0QXJlYSxcbiAgY3JlYXRlRWxlbWVudERlZmF1bHQsIGNyZWF0ZUJ1dHRvbixcbn0gZnJvbSAnLi9jcmVhdGVFbGVtZW50TW9kLmpzJztcblxuY29uc3QgY3JlYXRlTGlzdEl0ZW0gPSAoaW5kZXgsIGhyZWYsIHRleHRDb250ZW50LCBjbGFzc0xpc3QgPSBmYWxzZSwgY2xhc3NCdG4gPSBmYWxzZSxcbiAgY2xhc3NEaXZUZXh0ID0gZmFsc2UsIGNsYXNzVGV4dCA9IGZhbHNlKSA9PiB7XG4gIGNvbnN0IGRvY0ZyYWcgPSBkb2N1bWVudC5jcmVhdGVEb2N1bWVudEZyYWdtZW50KCk7XG4gIGNvbnN0IHN2Z0J0biA9IGNyZWF0ZU5TKGhyZWZbMF0pO1xuICBjb25zdCBjaGtCdG4gPSBjcmVhdGVCdXR0b24oJ2J1dHRvbicsIGNsYXNzQnRuLCAnQ2hlY2sgRG9uZScsIGZhbHNlLCBzdmdCdG4pO1xuICBjaGtCdG4uc2V0QXR0cmlidXRlKCd0YWJpbmRleCcsICcwJyk7XG4gIGRvY0ZyYWcuYXBwZW5kQ2hpbGQoY2hrQnRuKTtcbiAgY29uc3QgbGFiZWxUeHQgPSBjcmVhdGVMYWJlbChmYWxzZSwgY2xhc3NUZXh0LCB0ZXh0Q29udGVudCk7XG4gIGxhYmVsVHh0LnNldEF0dHJpYnV0ZSgndGFiaW5kZXgnLCAnMCcpO1xuICBjb25zdCBkaXZUZXh0ID0gY3JlYXRlRWxlbWVudERlZmF1bHQoJ2RpdicsIGNsYXNzRGl2VGV4dCwgZmFsc2UsIGxhYmVsVHh0KTtcbiAgY29uc3QgdHh0QXJlYSA9IGNyZWF0ZVRleHRBcmVhKCcyNTUnLCBjbGFzc1RleHQsIHRleHRDb250ZW50KTtcbiAgZGl2VGV4dC5hcHBlbmRDaGlsZCh0eHRBcmVhKTtcbiAgZG9jRnJhZy5hcHBlbmRDaGlsZChkaXZUZXh0KTtcbiAgY29uc3Qgc3ZnTW92ZSA9IGNyZWF0ZU5TKGhyZWZbMV0pO1xuICBkb2NGcmFnLmFwcGVuZENoaWxkKHN2Z01vdmUpO1xuICBjb25zdCBzdmdSZW1vdmUgPSBjcmVhdGVOUyhocmVmWzJdKTtcbiAgZG9jRnJhZy5hcHBlbmRDaGlsZChzdmdSZW1vdmUpO1xuICBjb25zdCBsaXN0SXRlbSA9IGNyZWF0ZUVsZW1lbnREZWZhdWx0KCdsaScsIGNsYXNzTGlzdCwgZmFsc2UsIGRvY0ZyYWcpO1xuICBsaXN0SXRlbS5zZXRBdHRyaWJ1dGUoJ2RhdGEtaW5kZXgnLCBpbmRleCk7XG4gIGxpc3RJdGVtLnNldEF0dHJpYnV0ZSgnZHJhZ2dhYmxlJywgJ3RydWUnKTtcbiAgcmV0dXJuIGxpc3RJdGVtO1xufTtcblxuLyoqXG4gKiBDbGFzcyBvZiBMaXN0IEl0ZWFtIHRvIGJlIGluc3RhdGlhdGVkIHdpdGggMyBwcm9wZXJ0aWVzXG4gKiBAcGFyYW0ge3N0cmluZ30gZGVzY3JpcCBEZXNjcmlwdGlvbiBvZiBMaXN0IEl0ZW1cbiAqIEBwYXJhbSB7Ym9vbGVhbn0gaXNDb21wbGV0ZWQgQ29tcGxldGlvbiBzdGF0dXMgb2YgTGlzdCBJdGVtXG4gKiBAcGFyYW0ge251bWJlcn0gaW5kZXggUG9zaXRpb24gb2YgTGlzdCBJdGVhbVxuICogQHJldHVybnMge29iamVjdH0gTmV3IGNsYXNzIHdpdGggdGl0bGUgYW5kIGF1dGhvciBwcm9wZXJ0aWVzXG4gKi9cbmNsYXNzIEl0ZW1FbGVtIHtcbiAgY29uc3RydWN0b3IoZGVzY3JpcCwgaW5kZXgsIGlzQ29tcGxldGVkID0gZmFsc2UpIHtcbiAgICB0aGlzLmRlc2NyaXAgPSBkZXNjcmlwO1xuICAgIHRoaXMuaXNDb21wbGV0ZWQgPSBpc0NvbXBsZXRlZDtcbiAgICB0aGlzLmluZGV4ID0gaW5kZXg7XG4gIH1cbn1cblxuZXhwb3J0IHtcbiAgY3JlYXRlTGlzdEl0ZW0sXG4gIEl0ZW1FbGVtLFxufTsiLCIvKipcbiAqIEZ1bmN0aW9uIHRvIGFkZCBjbGFzcyBvciBjbGFzc2VzIHRvIEhUTUwgRWxlbWVudFxuICogQHBhcmFtIHtIVE1MRWxlbWVudH0gZWxlbSBIVE1MIEVsZW1lbnQgdG8gYmUgbW9kaWZpZWQuXG4gKiBAcGFyYW0ge1N0cmluZ30gY2xhc3NlcyBTdHJpbmcgb3IgQXJyYXkgb2YgU3RyaW5nIHRvIGJlIGFkZGVkLlxuICogQHJldHVybnMge0hUTUxFbGVtZW50fSBSZXR1cm5zIEhUTUwgZWxlbWVudCB3aXRoIGNob3NlbiBjbGFzc2VzLlxuICovXG5jb25zdCBhZGRDbGFzcyA9IChlbGVtLCBjbGFzc2VzKSA9PiB7XG4gIGlmICgodHlwZW9mIGNsYXNzZXMpID09PSAnc3RyaW5nJykgZWxlbS5jbGFzc0xpc3QuYWRkKGNsYXNzZXMpO1xuICBlbHNlIGlmICgodHlwZW9mIGNsYXNzZXMpID09PSAnb2JqZWN0JykgZWxlbS5jbGFzc0xpc3QuYWRkKC4uLmNsYXNzZXMpO1xuICByZXR1cm4gZWxlbTtcbn07XG5cbi8qKlxuICogRnVuY3Rpb24gdG8gY3JlYXRlIEhUTUwgZWxlbWVudCB1c2luZyB0YWcgbmFtZXMuXG4gKiBDbGFzc2VzIGFuZCB0ZXh0IGNvbnRlbnQgY2FuIGJlIGFkZGVkIGFzIGVsZW1lbnQgaXMgY3JlYXRlLlxuICogQHBhcmFtIHtzdHJpbmd9IGVsZW0gVGFnIG5hbWUgb2YgdGhlIGVsZW1lbnQgdG8gYmUgY3JlYXRlZC4gRXhhbXBsZTogYGRpdiwgcCwgc2VjdGlvbmBcbiAqIEBwYXJhbSB7c3RyaW5nfSBjbGFzc2VzIE5hbWUgb2YgY2xhc3Mgb3IgY2xhc3NlcyB0byBhZGQuIFN0cmluZywgYXJyYXkgb2Ygc3RyaW5nIHNob3VsZCBiZSB1c2VkLlxuICogSWYgbm8gY2xhc3MgaXMgd2FudGVkLCBmYWxzZSBzaG91bGQgYmUgdXNlLk9wdGlvbmFsIFBhcmFtZW50ZXIuXG4gKiBAcGFyYW0ge1N0cmluZ30gdGV4dENvbnRleHQgVGV4dCB0byBiZSBhZGRlZCBhcyB0ZXh0IGNvbnRlbnQgdG8gSFRNTCBlbGVtZW50LlxuICogT3B0aW9uIHBhcmFtZXRlci5cbiAqIEBwYXJhbSB7SFRNTEVsZW1lbnR9IGlubmVyQ2hpbGQgSFRNTCBFbGVtZW50IHRvIGJlIGFwcGVuZGVkXG4gKiBAcmV0dXJucyB7SFRNTEVsZW1lbnR9IFJldHVybnMgSFRNTCBlbGVtZW50IGNob3NlbiB3aXRoIHNldCBhdHRyaWJ1dGVzLlxuICovXG5jb25zdCBjcmVhdGVFbGVtZW50RGVmYXVsdCA9IChlbGVtLCBjbGFzc2VzID0gZmFsc2UsIHRleHRDb250ZW50ID0gZmFsc2UsIGlubmVyQ2hpbGQgPSBmYWxzZSkgPT4ge1xuICBjb25zdCBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChlbGVtKTtcbiAgYWRkQ2xhc3MoZWxlbWVudCwgY2xhc3Nlcyk7XG4gIGlmICh0ZXh0Q29udGVudCkgZWxlbWVudC50ZXh0Q29udGVudCA9IHRleHRDb250ZW50O1xuICBpZiAoaW5uZXJDaGlsZCkgZWxlbWVudC5hcHBlbmRDaGlsZChpbm5lckNoaWxkKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59O1xuXG5jb25zdCBjcmVhdGVOUyA9IChocmVmKSA9PiB7XG4gIGNvbnN0IHhsaW5rID0gaHJlZi5zcGxpdCgnIycpO1xuICBjb25zdCB1c2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50TlMoJ2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJywgJ3VzZScpO1xuICB1c2Uuc2V0QXR0cmlidXRlKCdocmVmJywgYCR7aHJlZn1gKTtcbiAgdXNlLmNsYXNzTGlzdC5hZGQoYCR7eGxpbmtbMV19LXVzZWApO1xuICBjb25zdCBzdmcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50TlMoJ2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJywgJ3N2ZycpO1xuICBzdmcuYXBwZW5kQ2hpbGQodXNlKTtcbiAgc3ZnLmNsYXNzTGlzdC5hZGQoeGxpbmtbMV0pO1xuICByZXR1cm4gc3ZnO1xufTtcblxuY29uc3QgY3JlYXRlTGFiZWwgPSAoZm9yQXRyID0gZmFsc2UsIGNsYXNzZXMgPSBmYWxzZSwgdGV4dENvbnRlbnQgPSBmYWxzZSwgaW5uZXJDaGlsZCA9IGZhbHNlKSA9PiB7XG4gIGNvbnN0IGxhYmVsID0gY3JlYXRlRWxlbWVudERlZmF1bHQoJ2xhYmVsJywgY2xhc3NlcywgdGV4dENvbnRlbnQsIGlubmVyQ2hpbGQpO1xuICBsYWJlbC5zZXRBdHRyaWJ1dGUoJ2ZvcicsIGZvckF0cik7XG4gIHJldHVybiBsYWJlbDtcbn07XG5cbmNvbnN0IGNyZWF0ZVRleHRBcmVhID0gKGxlbmd0aCA9IGZhbHNlLCBjbGFzc2VzID0gZmFsc2UsXG4gIHRleHRDb250ZW50ID0gZmFsc2UsIGlubmVyQ2hpbGQgPSBmYWxzZSkgPT4ge1xuICBjb25zdCB0ZXh0QXJlYSA9IGNyZWF0ZUVsZW1lbnREZWZhdWx0KCd0ZXh0YXJlYScsIGNsYXNzZXMsIHRleHRDb250ZW50LCBpbm5lckNoaWxkKTtcbiAgaWYgKGxlbmd0aCkgdGV4dEFyZWEuc2V0QXR0cmlidXRlKCdtYXhsZW5ndGgnLCBsZW5ndGgpO1xuICB0ZXh0QXJlYS5zZXRBdHRyaWJ1dGUoJ3NwZWxsY2hlY2snLCAndHJ1ZScpO1xuICByZXR1cm4gdGV4dEFyZWE7XG59O1xuXG4vKipcbiAqIEZ1bmN0aW9uIHRvIGNyZWF0ZSBIVE1MIEJ1dHRvbiBlbGVtZW50LiBDbGFzc2VzIGFuZCB0ZXh0IGNvbnRlbnRcbiAqIGNhbiBiZSBhZGRlZCBhcyBlbGVtZW50IGlzIGNyZWF0ZS4gQ2xpY2sgZXZlbnQgdG8gYSBhbm90aGVyIHdlYnBhZ2UgY2FuIGJlIGFkZGVkLlxuICogQHBhcmFtIHtzdHJpbmd9IGZ1bmMgVHlwZSBvZiBidXR0b24gYHN1bWJpdCwgcmVzZXQsIGJ1dHRvbmBcbiAqIEBwYXJhbSB7c3RyaW5nfSBjbGFzc2VzIE5hbWUgb2YgY2xhc3Mgb3IgY2xhc3NlcyB0byBhZGQuIFN0cmluZywgYXJyYXkgb2Ygc3RyaW5nIHNob3VsZCBiZSB1c2VkLlxuICogSWYgbm8gY2xhc3MgaXMgd2FudGVkLCBmYWxzZSBzaG91bGQgYmUgdXNlLk9wdGlvbmFsIFBhcmFtZW50ZXIuXG4gKiBAcGFyYW0ge3N0cmluZ30gYXJpYUxhYmVsIFRleHQgZm9yIGFjY2Vzc2liaWxpdHlcbiAqIEBwYXJhbSB7YW55fSB0ZXh0Q29udGVudCBUZXh0IHRvIGJlIGFkZGVkIGFzIHRleHQgY29udGVudCB0byBIVE1MIGVsZW1lbnQuXG4gKiBPcHRpb24gcGFyYW1ldGVyLlxuICogQHBhcmFtIHtIVE1MRWxlbWVudH0gaW5uZXJDaGlsZCBIVE1MIEVsZW1lbnQgdG8gYmUgYXBwZW5kZWRcbiAqIEBwYXJhbSB7YW55fSBocmVmIEh5cGVybGluayByZWZlcmVuY2UgdG8gYmUgZm9sbG93ZWQgaWYgYnV0dG9uIGlzIGNsaWNrZWQuXG4gKiBPcHRpb24gcGFyYW1ldGVyLlxuICogQHJldHVybnMge0hUTUxCdXR0b25FbGVtZW50fSBSZXR1cm5zIEhUTUwgYnV0dG9uIGVsZW1lbnQgY2hvc2VuIHdpdGggc2V0IGF0dHJpYnV0ZXMuXG4gKi9cbmNvbnN0IGNyZWF0ZUJ1dHRvbiA9IChmdW5jLCBjbGFzc2VzLCBhcmlhTGFiZWwsIHRleHRDb250ZW50ID0gZmFsc2UsXG4gIGlubmVyQ2hpbGQgPSBmYWxzZSwgaHJlZiA9IGZhbHNlKSA9PiB7XG4gIGNvbnN0IGJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICBidXR0b24udHlwZSA9IGZ1bmM7XG4gIGJ1dHRvbi5hcmlhTGFiZWwgPSBhcmlhTGFiZWw7XG4gIGFkZENsYXNzKGJ1dHRvbiwgY2xhc3Nlcyk7XG4gIGlmICh0ZXh0Q29udGVudCkgYnV0dG9uLnRleHRDb250ZW50ID0gdGV4dENvbnRlbnQ7XG4gIGlmIChocmVmKSB7XG4gICAgYnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgd2luZG93LmxvY2F0aW9uLmhyZWYgPSBocmVmO1xuICAgIH0pO1xuICB9XG4gIGlmIChpbm5lckNoaWxkKSBidXR0b24uYXBwZW5kQ2hpbGQoaW5uZXJDaGlsZCk7XG4gIHJldHVybiBidXR0b247XG59O1xuXG5leHBvcnQge1xuICBjcmVhdGVMYWJlbCxcbiAgY3JlYXRlTlMsXG4gIGNyZWF0ZVRleHRBcmVhLFxuICBhZGRDbGFzcyxcbiAgY3JlYXRlRWxlbWVudERlZmF1bHQsXG4gIGNyZWF0ZUJ1dHRvbixcbn07XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=