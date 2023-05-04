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
  if (e.target.classList.contains('item-chk')) {
    const listItem = e.target.parentNode;
    listItem.classList.toggle('completed');
    ListOfItems.togglecomplete(parseInt(listItem.dataset.index, 10));
  } else if (e.target.classList.contains('icon-check')) {
    const listItem = e.target.parentNode.parentNode;
    listItem.classList.toggle('completed');
    ListOfItems.togglecomplete(parseInt(listItem.dataset.index, 10));
  } else if (e.target.classList.contains('icon-check-use')) {
    const listItem = e.target.parentNode.parentNode.parentNode;
    listItem.classList.toggle('completed');
    ListOfItems.togglecomplete(parseInt(listItem.dataset.index, 10));
  } else if ((e.target.classList.contains('app-text'))) {
    updateDescription(e.target.parentNode.parentNode);
  } else if (e.target.classList.contains('icon-trash-o')) {
    const listItem = e.target.parentNode;
    ListOfItems.removeitem(parseInt(listItem.dataset.index, 10), listItem, listUl);
    listUl.removeChild(listItem);
    ListOfItems.updateList('.app-item');
  } else if (e.target.classList.contains('icon-trash-o-use')) {
    const listItem = e.target.parentNode.parentNode;
    ListOfItems.removeitem(parseInt(listItem.dataset.index, 10), listItem, listUl);
    listUl.removeChild(listItem);
    ListOfItems.updateList('.app-item');
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
  togglecomplete(id) {
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
    console.log(oldPos);
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
    console.log(itemList);
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
/* harmony import */ var _elementGeneratorMod_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./elementGeneratorMod.js */ "./src/modules/elementGeneratorMod.js");
/* harmony import */ var _elementExtraAttrMod_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./elementExtraAttrMod.js */ "./src/modules/elementExtraAttrMod.js");
/* harmony import */ var _buttonGeneratorMod_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./buttonGeneratorMod.js */ "./src/modules/buttonGeneratorMod.js");
/* harmony import */ var _createSvg_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./createSvg.js */ "./src/modules/createSvg.js");
/* harmony import */ var _createTextArea_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./createTextArea.js */ "./src/modules/createTextArea.js");
/* harmony import */ var _createLabel_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./createLabel.js */ "./src/modules/createLabel.js");







const createListItem = (index, href, textContent, classList = false, classBtn = false,
  classDivText = false, classText = false) => {
  const docFrag = document.createDocumentFragment();
  const svgBtn = (0,_createSvg_js__WEBPACK_IMPORTED_MODULE_3__.createNS)(href[0]);
  const chkBtn = _buttonGeneratorMod_js__WEBPACK_IMPORTED_MODULE_2__["default"].createButton('button', classBtn, 'Check Done', false, svgBtn);
  _elementExtraAttrMod_js__WEBPACK_IMPORTED_MODULE_1__["default"].addAttributes(chkBtn, false, false, 'tabindex', '0');
  docFrag.appendChild(chkBtn);
  const labelTxt = _createLabel_js__WEBPACK_IMPORTED_MODULE_5__["default"].createLabel(false, classText, textContent);
  _elementExtraAttrMod_js__WEBPACK_IMPORTED_MODULE_1__["default"].addAttributes(labelTxt, false, false, 'tabindex', '0');
  const divText = _elementGeneratorMod_js__WEBPACK_IMPORTED_MODULE_0__["default"].createElementDefault('div', classDivText, false, labelTxt);
  const txtArea = _createTextArea_js__WEBPACK_IMPORTED_MODULE_4__["default"].createTextArea('255', classText, textContent);
  divText.appendChild(txtArea);
  docFrag.appendChild(divText);
  const svgMove = (0,_createSvg_js__WEBPACK_IMPORTED_MODULE_3__.createNS)(href[1]);
  docFrag.appendChild(svgMove);
  const svgRemove = (0,_createSvg_js__WEBPACK_IMPORTED_MODULE_3__.createNS)(href[2]);
  docFrag.appendChild(svgRemove);
  const listItem = _elementGeneratorMod_js__WEBPACK_IMPORTED_MODULE_0__["default"].createElementDefault('li', classList, false, docFrag);
  _elementExtraAttrMod_js__WEBPACK_IMPORTED_MODULE_1__["default"].addAttributes(listItem, 'index', index);
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

/***/ "./src/modules/buttonGeneratorMod.js":
/*!*******************************************!*\
  !*** ./src/modules/buttonGeneratorMod.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _elementAddClassMod_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./elementAddClassMod.js */ "./src/modules/elementAddClassMod.js");


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
  _elementAddClassMod_js__WEBPACK_IMPORTED_MODULE_0__["default"].addClass(button, classes);
  if (textContent) button.textContent = textContent;
  if (href) {
    button.addEventListener('click', () => {
      window.location.href = href;
    });
  }
  if (innerChild) button.appendChild(innerChild);
  return button;
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  createButton,
});

/***/ }),

/***/ "./src/modules/createLabel.js":
/*!************************************!*\
  !*** ./src/modules/createLabel.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _elementGeneratorMod_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./elementGeneratorMod.js */ "./src/modules/elementGeneratorMod.js");
/* harmony import */ var _elementExtraAttrMod_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./elementExtraAttrMod.js */ "./src/modules/elementExtraAttrMod.js");



const createLabel = (forAtr = false, classes = false, textContent = false, innerChild = false) => {
  const label = _elementGeneratorMod_js__WEBPACK_IMPORTED_MODULE_0__["default"].createElementDefault('label', classes, textContent, innerChild);
  _elementExtraAttrMod_js__WEBPACK_IMPORTED_MODULE_1__["default"].addAttributes(label, false, false, 'for', forAtr);
  return label;
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  createLabel,
});

/***/ }),

/***/ "./src/modules/createSvg.js":
/*!**********************************!*\
  !*** ./src/modules/createSvg.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createNS": () => (/* binding */ createNS),
/* harmony export */   "createSvg": () => (/* binding */ createSvg)
/* harmony export */ });
/* harmony import */ var _elementGeneratorMod_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./elementGeneratorMod.js */ "./src/modules/elementGeneratorMod.js");
/* harmony import */ var _elementExtraAttrMod_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./elementExtraAttrMod.js */ "./src/modules/elementExtraAttrMod.js");



const createSvg = (href) => {
  const xlink = href.split('#');
  const use = _elementGeneratorMod_js__WEBPACK_IMPORTED_MODULE_0__["default"].createElementDefault('use', false);
  _elementExtraAttrMod_js__WEBPACK_IMPORTED_MODULE_1__["default"].addAttributes(use, false, false, 'href', `${href}`);
  const svg = _elementGeneratorMod_js__WEBPACK_IMPORTED_MODULE_0__["default"].createElementDefault('svg', xlink[1], false, use);
  return svg;
};

const createNS = (href) => {
  const xlink = href.split('#');
  const use = document.createElementNS('http://www.w3.org/2000/svg', 'use');
  _elementExtraAttrMod_js__WEBPACK_IMPORTED_MODULE_1__["default"].addAttributes(use, false, false, 'href', `${href}`);
  use.classList.add(`${xlink[1]}-use`);
  const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
  svg.appendChild(use);
  svg.classList.add(xlink[1]);
  return svg;
};




/***/ }),

/***/ "./src/modules/createTextArea.js":
/*!***************************************!*\
  !*** ./src/modules/createTextArea.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _elementGeneratorMod_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./elementGeneratorMod.js */ "./src/modules/elementGeneratorMod.js");
/* harmony import */ var _elementExtraAttrMod_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./elementExtraAttrMod.js */ "./src/modules/elementExtraAttrMod.js");



const createTextArea = (length = false, classes = false,
  textContent = false, innerChild = false) => {
  const textArea = _elementGeneratorMod_js__WEBPACK_IMPORTED_MODULE_0__["default"].createElementDefault('textarea', classes, textContent, innerChild);
  if (length) _elementExtraAttrMod_js__WEBPACK_IMPORTED_MODULE_1__["default"].addAttributes(textArea, false, false, 'maxlength', length);
  textArea.setAttribute('spellcheck', 'true');
  return textArea;
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  createTextArea,
});

/***/ }),

/***/ "./src/modules/elementAddClassMod.js":
/*!*******************************************!*\
  !*** ./src/modules/elementAddClassMod.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/**
 * Function to add class or classes to HTML Element
 * @param {HTMLElement} elem HTML Element to be modified.
 * @param {String} classes String or Array of String to be added.
 * @returns {HTMLElement} Returns HTML element with chosen classes.
 */
const addClass = (elem, classes) => {
  if ((typeof classes) === 'string') elem.classList.add(`${classes}`);
  else if ((typeof classes) === 'object') classes.forEach((class0) => elem.classList.add(`${class0}`));
  return elem;
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  addClass,
});

/***/ }),

/***/ "./src/modules/elementExtraAttrMod.js":
/*!********************************************!*\
  !*** ./src/modules/elementExtraAttrMod.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/**
 * Function to add dataset or append childs to HTML Element
 * @param {HTMLElement} elem HTML Element to be modified.
 * @param {string} data key of dataset key-value property to be added
 * @param {string} index=0 value of dataset key-value property to be added
 * @returns {HTMLElement} Returns HTML element with chosen attributes
 */
const addAttributes = (elem,
  data = false, index = 0, attributes = false, value = false) => {
  if (data) elem.setAttribute(`data-${data}`, index);
  if (attributes) elem.setAttribute(attributes, value);
  return elem;
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  addAttributes,
});

/***/ }),

/***/ "./src/modules/elementGeneratorMod.js":
/*!********************************************!*\
  !*** ./src/modules/elementGeneratorMod.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _elementAddClassMod_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./elementAddClassMod.js */ "./src/modules/elementAddClassMod.js");


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
  _elementAddClassMod_js__WEBPACK_IMPORTED_MODULE_0__["default"].addClass(element, classes);
  if (textContent) element.textContent = textContent;
  if (innerChild) element.appendChild(innerChild);
  return element;
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  createElementDefault,
});

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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c291cmNlcyI6WyJ3ZWJwYWNrOi8vbWluaW1hbGlzdGljLXRvZG9saXN0LWFwcC8uL3NyYy9pbmRleC5jc3MiLCJ3ZWJwYWNrOi8vbWluaW1hbGlzdGljLXRvZG9saXN0LWFwcC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vbWluaW1hbGlzdGljLXRvZG9saXN0LWFwcC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanMiLCJ3ZWJwYWNrOi8vbWluaW1hbGlzdGljLXRvZG9saXN0LWFwcC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL21pbmltYWxpc3RpYy10b2RvbGlzdC1hcHAvLi9zcmMvaW5kZXguY3NzP2NmZTQiLCJ3ZWJwYWNrOi8vbWluaW1hbGlzdGljLXRvZG9saXN0LWFwcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly9taW5pbWFsaXN0aWMtdG9kb2xpc3QtYXBwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly9taW5pbWFsaXN0aWMtdG9kb2xpc3QtYXBwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL21pbmltYWxpc3RpYy10b2RvbGlzdC1hcHAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vbWluaW1hbGlzdGljLXRvZG9saXN0LWFwcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL21pbmltYWxpc3RpYy10b2RvbGlzdC1hcHAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly9taW5pbWFsaXN0aWMtdG9kb2xpc3QtYXBwLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovL21pbmltYWxpc3RpYy10b2RvbGlzdC1hcHAvLi9zcmMvbW9kdWxlcy9JdGVtTGlzdC5qcyIsIndlYnBhY2s6Ly9taW5pbWFsaXN0aWMtdG9kb2xpc3QtYXBwLy4vc3JjL21vZHVsZXMvTGlzdEl0ZW1Nb2QuanMiLCJ3ZWJwYWNrOi8vbWluaW1hbGlzdGljLXRvZG9saXN0LWFwcC8uL3NyYy9tb2R1bGVzL2J1dHRvbkdlbmVyYXRvck1vZC5qcyIsIndlYnBhY2s6Ly9taW5pbWFsaXN0aWMtdG9kb2xpc3QtYXBwLy4vc3JjL21vZHVsZXMvY3JlYXRlTGFiZWwuanMiLCJ3ZWJwYWNrOi8vbWluaW1hbGlzdGljLXRvZG9saXN0LWFwcC8uL3NyYy9tb2R1bGVzL2NyZWF0ZVN2Zy5qcyIsIndlYnBhY2s6Ly9taW5pbWFsaXN0aWMtdG9kb2xpc3QtYXBwLy4vc3JjL21vZHVsZXMvY3JlYXRlVGV4dEFyZWEuanMiLCJ3ZWJwYWNrOi8vbWluaW1hbGlzdGljLXRvZG9saXN0LWFwcC8uL3NyYy9tb2R1bGVzL2VsZW1lbnRBZGRDbGFzc01vZC5qcyIsIndlYnBhY2s6Ly9taW5pbWFsaXN0aWMtdG9kb2xpc3QtYXBwLy4vc3JjL21vZHVsZXMvZWxlbWVudEV4dHJhQXR0ck1vZC5qcyIsIndlYnBhY2s6Ly9taW5pbWFsaXN0aWMtdG9kb2xpc3QtYXBwLy4vc3JjL21vZHVsZXMvZWxlbWVudEdlbmVyYXRvck1vZC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18gPSBuZXcgVVJMKFwiLi9hc3NldC9yZXNvdXJjZS9lbnRlci5wbmdcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCI6cm9vdCB7XFxyXFxuICAtLXN2Zy1zaWRlOiBjbGFtcCgxNnB4LCAoMTAwdncgLSAzMjBweCkgKiAxMDAwLCBjbGFtcCgyMHB4LCAoMTAwdncgLSA2NDBweCkgKiAxMDAwLCBjbGFtcCgyNXB4LCAoMTAwdncgLSAxMjgwcHgpICogMTAwMCwgMzBweCkpKTtcXHJcXG4gIC0tZm9udC1zaXplOiBjYWxjKHZhcigtLXN2Zy1zaWRlKSAqIDAuOCk7XFxyXFxuICAtLWFwcC1yb3ctYmxvY2stcGFkOiAxMHB4O1xcclxcbiAgLS1hcHAtcm93LWhlaWdodDogY2FsYyh2YXIoLS1zdmctc2lkZSkgKyAyICogdmFyKC0tYXBwLXJvdy1ibG9jay1wYWQpKTtcXHJcXG59XFxyXFxuXFxyXFxuKiB7XFxyXFxuICBwYWRkaW5nOiAwO1xcclxcbiAgbWFyZ2luOiAwO1xcclxcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXHJcXG59XFxyXFxuXFxyXFxudWwsXFxyXFxubGkge1xcclxcbiAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xcclxcbn1cXHJcXG5cXHJcXG5ib2R5IHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LWZsb3c6IGNvbHVtbjtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICBwYWRkaW5nLWJsb2NrOiA0MHB4O1xcclxcbiAgZ2FwOiAzMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4uYXBwLWNvbnRhaW5lciB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC1mbG93OiBjb2x1bW47XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgei1pbmRleDogMTtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IGFsaWNlYmx1ZTtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxyXFxuICBib3gtc2hhZG93OiAwIDAgNHB4IDRweCBjYWRldGJsdWU7XFxyXFxufVxcclxcblxcclxcbi5hcHAtdGV4dCxcXHJcXG4uaXRlbSB7XFxyXFxuICBmb250LXNpemU6IHZhcigtLWZvbnQtc2l6ZSk7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLmFwcC10aXRsZSB7XFxyXFxuICBmb250LXdlaWdodDogYm9sZDtcXHJcXG4gIGZvbnQtc2l6ZTogY2FsYyh2YXIoLS1mb250LXNpemUpICogMS4yKTtcXHJcXG59XFxyXFxuXFxyXFxuLmFwcC1pbnRlcmFjdCB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xcclxcbiAgZ2FwOiAxMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4uYXBwLXJvdyB7XFxyXFxuICBkaXNwbGF5OiBncmlkO1xcclxcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiBhdXRvIDFmciBhdXRvIGF1dG87XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxyXFxuICBoZWlnaHQ6IHZhcigtLWFwcC1yb3ctaGVpZ2h0KTtcXHJcXG4gIHBhZGRpbmctYmxvY2s6IHZhcigtLWFwcC1yb3ctYmxvY2stcGFkKTtcXHJcXG4gIHBhZGRpbmctaW5saW5lOiAxNXB4O1xcclxcbiAgY29sdW1uLWdhcDogMjBweDtcXHJcXG4gIG1pbi13aWR0aDogbWluKDgwdncsIDEyMDBweCk7XFxyXFxufVxcclxcblxcclxcbiNhcHAtaW5wdXQge1xcclxcbiAgZGlzcGxheTogZ3JpZDtcXHJcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIGF1dG87XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gIGhlaWdodDogdmFyKC0tYXBwLXJvdy1oZWlnaHQpO1xcclxcbiAgcGFkZGluZy1ibG9jazogdmFyKC0tYXBwLXJvdy1ibG9jay1wYWQpO1xcclxcbiAgcGFkZGluZy1pbmxpbmU6IDE1cHg7XFxyXFxuICBjb2x1bW4tZ2FwOiAyMHB4O1xcclxcbiAgbWluLXdpZHRoOiBtaW4oODB2dywgMTIwMHB4KTtcXHJcXG59XFxyXFxuXFxyXFxuZGl2IGEsXFxyXFxuZGl2IHN2ZyB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLmFwcC1yb3cgc3ZnIHtcXHJcXG4gIGhlaWdodDogdmFyKC0tc3ZnLXNpZGUpO1xcclxcbiAgd2lkdGg6IHZhcigtLXN2Zy1zaWRlKTtcXHJcXG59XFxyXFxuXFxyXFxuLmFwcC1yb3cgdGV4dGFyZWEge1xcclxcbiAgZGlzcGxheTogbm9uZTtcXHJcXG59XFxyXFxuXFxyXFxuLmljb24tdHJhc2gtbyB7XFxyXFxuICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxufVxcclxcblxcclxcbi5hcHAtY29udGFpbmVyIGJ1dHRvbixcXHJcXG4uYXBwLWNvbnRhaW5lciBpbnB1dCB7XFxyXFxuICBib3JkZXI6IG5vbmU7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcXHJcXG4gIGZvbnQtc2l6ZTogdmFyKC0tZm9udC1zaXplKTtcXHJcXG4gIGhlaWdodDogdmFyKC0tYXBwLXJvdy1oZWlnaHQpO1xcclxcbiAgcGFkZGluZy1ibG9jazogdmFyKC0tYXBwLXJvdy1ibG9jay1wYWQpO1xcclxcbn1cXHJcXG5cXHJcXG4jbmV3aXRlbSB7XFxyXFxuICBmb250LXN0eWxlOiBpdGFsaWM7XFxyXFxuICBmb250LXdlaWdodDogbGlnaHRlcjtcXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbn1cXHJcXG5cXHJcXG4uYXBwLWNvbnRhaW5lciBpbnB1dDpmb2N1cyB7XFxyXFxuICBvdXRsaW5lOiBub25lO1xcclxcbn1cXHJcXG5cXHJcXG4jc3VtYml0LW5ld2l0ZW0ge1xcclxcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyArIFwiKTtcXHJcXG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XFxyXFxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XFxyXFxuICBhcHBlYXJhbmNlOiBub25lO1xcclxcbiAgY3Vyc29yOiBwb2ludGVyO1xcclxcbiAgd2lkdGg6IDQwcHg7XFxyXFxuICBoZWlnaHQ6IDUwcHg7XFxyXFxufVxcclxcblxcclxcbi5hcHAtY29udGFpbmVyIC5jbHItYnRuIHtcXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbiAgY29sb3I6IGRhcmtzbGF0ZWdyZXk7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjI5LCAyNDAsIDI1MCk7XFxyXFxuICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiAxMHB4O1xcclxcbiAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDEwcHg7XFxyXFxufVxcclxcblxcclxcbi5jbHItYnRuOmhvdmVyIHtcXHJcXG4gIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xcclxcbiAgY29sb3I6IGJsYWNrO1xcclxcbn1cXHJcXG5cXHJcXG4uYXBwLWNvbnRhaW5lciAuaXRlbS1jaGsge1xcclxcbiAgYm9yZGVyOiAycHggc29saWQgI2MxYzFjMztcXHJcXG4gIGN1cnNvcjogcG9pbnRlcjtcXHJcXG4gIGNvbG9yOiB0cmFuc3BhcmVudDtcXHJcXG4gIGhlaWdodDogdmFyKC0tc3ZnLXNpZGUpO1xcclxcbiAgd2lkdGg6IHZhcigtLXN2Zy1zaWRlKTtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDJweDtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbn1cXHJcXG5cXHJcXG4uaWNvbi1tb3JlLXZlcnQge1xcclxcbiAgY3Vyc29yOiBtb3ZlO1xcclxcbn1cXHJcXG5cXHJcXG4uaWNvbi1jaGVjayB7XFxyXFxuICBkaXNwbGF5OiBub25lO1xcclxcbn1cXHJcXG5cXHJcXG4uY29tcGxldGVkIC5pY29uLWNoZWNrIHtcXHJcXG4gIGRpc3BsYXk6IGlubGluZTtcXHJcXG59XFxyXFxuXFxyXFxuLmNvbXBsZXRlZCAuYXBwLXRleHQge1xcclxcbiAgdGV4dC1kZWNvcmF0aW9uOiBsaW5lLXRocm91Z2g7XFxyXFxufVxcclxcblxcclxcbi5pdGVtIGxhYmVsLFxcclxcbi5pdGVtIHRleHRhcmVhIHtcXHJcXG4gIGZsZXgtZ3JvdzogMTtcXHJcXG4gIGhlaWdodDogdmFyKC0tc3ZnLXNpZGUpO1xcclxcbiAgcmVzaXplOiBub25lO1xcclxcbiAgYm9yZGVyOiBub25lO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxyXFxufVxcclxcblxcclxcbi5pdGVtIHRleHRhcmVhOmZvY3VzIHtcXHJcXG4gIG91dGxpbmU6IG5vbmU7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcXHJcXG59XFxyXFxuXFxyXFxuLmRyYWdnaW5nIHtcXHJcXG4gIG9wYWNpdHk6IDAuNTtcXHJcXG59XFxyXFxuXCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL2luZGV4LmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtFQUNFLGdJQUFnSTtFQUNoSSx3Q0FBd0M7RUFDeEMseUJBQXlCO0VBQ3pCLHNFQUFzRTtBQUN4RTs7QUFFQTtFQUNFLFVBQVU7RUFDVixTQUFTO0VBQ1Qsc0JBQXNCO0FBQ3hCOztBQUVBOztFQUVFLHFCQUFxQjtBQUN2Qjs7QUFFQTtFQUNFLGFBQWE7RUFDYixpQkFBaUI7RUFDakIsbUJBQW1CO0VBQ25CLG1CQUFtQjtFQUNuQixTQUFTO0FBQ1g7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsaUJBQWlCO0VBQ2pCLG1CQUFtQjtFQUNuQixVQUFVO0VBQ1YsMkJBQTJCO0VBQzNCLG1CQUFtQjtFQUNuQixpQ0FBaUM7QUFDbkM7O0FBRUE7O0VBRUUsMkJBQTJCO0VBQzNCLGFBQWE7RUFDYixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxpQkFBaUI7RUFDakIsdUNBQXVDO0FBQ3pDOztBQUVBO0VBQ0UsYUFBYTtFQUNiLDJCQUEyQjtFQUMzQixTQUFTO0FBQ1g7O0FBRUE7RUFDRSxhQUFhO0VBQ2IseUNBQXlDO0VBQ3pDLDhCQUE4QjtFQUM5Qiw2QkFBNkI7RUFDN0IsdUNBQXVDO0VBQ3ZDLG9CQUFvQjtFQUNwQixnQkFBZ0I7RUFDaEIsNEJBQTRCO0FBQzlCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLCtCQUErQjtFQUMvQix1QkFBdUI7RUFDdkIsNkJBQTZCO0VBQzdCLHVDQUF1QztFQUN2QyxvQkFBb0I7RUFDcEIsZ0JBQWdCO0VBQ2hCLDRCQUE0QjtBQUM5Qjs7QUFFQTs7RUFFRSxhQUFhO0VBQ2IsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsdUJBQXVCO0VBQ3ZCLHNCQUFzQjtBQUN4Qjs7QUFFQTtFQUNFLGFBQWE7QUFDZjs7QUFFQTtFQUNFLGVBQWU7QUFDakI7O0FBRUE7O0VBRUUsWUFBWTtFQUNaLDZCQUE2QjtFQUM3QiwyQkFBMkI7RUFDM0IsNkJBQTZCO0VBQzdCLHVDQUF1QztBQUN6Qzs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixvQkFBb0I7RUFDcEIsV0FBVztBQUNiOztBQUVBO0VBQ0UsYUFBYTtBQUNmOztBQUVBO0VBQ0UseURBQW1EO0VBQ25ELDRCQUE0QjtFQUM1QiwyQkFBMkI7RUFDM0IsZ0JBQWdCO0VBQ2hCLGVBQWU7RUFDZixXQUFXO0VBQ1gsWUFBWTtBQUNkOztBQUVBO0VBQ0UsV0FBVztFQUNYLG9CQUFvQjtFQUNwQixvQ0FBb0M7RUFDcEMsK0JBQStCO0VBQy9CLGdDQUFnQztBQUNsQzs7QUFFQTtFQUNFLDBCQUEwQjtFQUMxQixZQUFZO0FBQ2Q7O0FBRUE7RUFDRSx5QkFBeUI7RUFDekIsZUFBZTtFQUNmLGtCQUFrQjtFQUNsQix1QkFBdUI7RUFDdkIsc0JBQXNCO0VBQ3RCLGtCQUFrQjtFQUNsQixhQUFhO0VBQ2IsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsWUFBWTtBQUNkOztBQUVBO0VBQ0UsYUFBYTtBQUNmOztBQUVBO0VBQ0UsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLDZCQUE2QjtBQUMvQjs7QUFFQTs7RUFFRSxZQUFZO0VBQ1osdUJBQXVCO0VBQ3ZCLFlBQVk7RUFDWixZQUFZO0VBQ1osNkJBQTZCO0FBQy9COztBQUVBO0VBQ0UsYUFBYTtFQUNiLDZCQUE2QjtBQUMvQjs7QUFFQTtFQUNFLFlBQVk7QUFDZFwiLFwic291cmNlc0NvbnRlbnRcIjpbXCI6cm9vdCB7XFxyXFxuICAtLXN2Zy1zaWRlOiBjbGFtcCgxNnB4LCAoMTAwdncgLSAzMjBweCkgKiAxMDAwLCBjbGFtcCgyMHB4LCAoMTAwdncgLSA2NDBweCkgKiAxMDAwLCBjbGFtcCgyNXB4LCAoMTAwdncgLSAxMjgwcHgpICogMTAwMCwgMzBweCkpKTtcXHJcXG4gIC0tZm9udC1zaXplOiBjYWxjKHZhcigtLXN2Zy1zaWRlKSAqIDAuOCk7XFxyXFxuICAtLWFwcC1yb3ctYmxvY2stcGFkOiAxMHB4O1xcclxcbiAgLS1hcHAtcm93LWhlaWdodDogY2FsYyh2YXIoLS1zdmctc2lkZSkgKyAyICogdmFyKC0tYXBwLXJvdy1ibG9jay1wYWQpKTtcXHJcXG59XFxyXFxuXFxyXFxuKiB7XFxyXFxuICBwYWRkaW5nOiAwO1xcclxcbiAgbWFyZ2luOiAwO1xcclxcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXHJcXG59XFxyXFxuXFxyXFxudWwsXFxyXFxubGkge1xcclxcbiAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xcclxcbn1cXHJcXG5cXHJcXG5ib2R5IHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LWZsb3c6IGNvbHVtbjtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICBwYWRkaW5nLWJsb2NrOiA0MHB4O1xcclxcbiAgZ2FwOiAzMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4uYXBwLWNvbnRhaW5lciB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC1mbG93OiBjb2x1bW47XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgei1pbmRleDogMTtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IGFsaWNlYmx1ZTtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxyXFxuICBib3gtc2hhZG93OiAwIDAgNHB4IDRweCBjYWRldGJsdWU7XFxyXFxufVxcclxcblxcclxcbi5hcHAtdGV4dCxcXHJcXG4uaXRlbSB7XFxyXFxuICBmb250LXNpemU6IHZhcigtLWZvbnQtc2l6ZSk7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLmFwcC10aXRsZSB7XFxyXFxuICBmb250LXdlaWdodDogYm9sZDtcXHJcXG4gIGZvbnQtc2l6ZTogY2FsYyh2YXIoLS1mb250LXNpemUpICogMS4yKTtcXHJcXG59XFxyXFxuXFxyXFxuLmFwcC1pbnRlcmFjdCB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xcclxcbiAgZ2FwOiAxMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4uYXBwLXJvdyB7XFxyXFxuICBkaXNwbGF5OiBncmlkO1xcclxcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiBhdXRvIDFmciBhdXRvIGF1dG87XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxyXFxuICBoZWlnaHQ6IHZhcigtLWFwcC1yb3ctaGVpZ2h0KTtcXHJcXG4gIHBhZGRpbmctYmxvY2s6IHZhcigtLWFwcC1yb3ctYmxvY2stcGFkKTtcXHJcXG4gIHBhZGRpbmctaW5saW5lOiAxNXB4O1xcclxcbiAgY29sdW1uLWdhcDogMjBweDtcXHJcXG4gIG1pbi13aWR0aDogbWluKDgwdncsIDEyMDBweCk7XFxyXFxufVxcclxcblxcclxcbiNhcHAtaW5wdXQge1xcclxcbiAgZGlzcGxheTogZ3JpZDtcXHJcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIGF1dG87XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gIGhlaWdodDogdmFyKC0tYXBwLXJvdy1oZWlnaHQpO1xcclxcbiAgcGFkZGluZy1ibG9jazogdmFyKC0tYXBwLXJvdy1ibG9jay1wYWQpO1xcclxcbiAgcGFkZGluZy1pbmxpbmU6IDE1cHg7XFxyXFxuICBjb2x1bW4tZ2FwOiAyMHB4O1xcclxcbiAgbWluLXdpZHRoOiBtaW4oODB2dywgMTIwMHB4KTtcXHJcXG59XFxyXFxuXFxyXFxuZGl2IGEsXFxyXFxuZGl2IHN2ZyB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLmFwcC1yb3cgc3ZnIHtcXHJcXG4gIGhlaWdodDogdmFyKC0tc3ZnLXNpZGUpO1xcclxcbiAgd2lkdGg6IHZhcigtLXN2Zy1zaWRlKTtcXHJcXG59XFxyXFxuXFxyXFxuLmFwcC1yb3cgdGV4dGFyZWEge1xcclxcbiAgZGlzcGxheTogbm9uZTtcXHJcXG59XFxyXFxuXFxyXFxuLmljb24tdHJhc2gtbyB7XFxyXFxuICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxufVxcclxcblxcclxcbi5hcHAtY29udGFpbmVyIGJ1dHRvbixcXHJcXG4uYXBwLWNvbnRhaW5lciBpbnB1dCB7XFxyXFxuICBib3JkZXI6IG5vbmU7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcXHJcXG4gIGZvbnQtc2l6ZTogdmFyKC0tZm9udC1zaXplKTtcXHJcXG4gIGhlaWdodDogdmFyKC0tYXBwLXJvdy1oZWlnaHQpO1xcclxcbiAgcGFkZGluZy1ibG9jazogdmFyKC0tYXBwLXJvdy1ibG9jay1wYWQpO1xcclxcbn1cXHJcXG5cXHJcXG4jbmV3aXRlbSB7XFxyXFxuICBmb250LXN0eWxlOiBpdGFsaWM7XFxyXFxuICBmb250LXdlaWdodDogbGlnaHRlcjtcXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbn1cXHJcXG5cXHJcXG4uYXBwLWNvbnRhaW5lciBpbnB1dDpmb2N1cyB7XFxyXFxuICBvdXRsaW5lOiBub25lO1xcclxcbn1cXHJcXG5cXHJcXG4jc3VtYml0LW5ld2l0ZW0ge1xcclxcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCcuL2Fzc2V0L3Jlc291cmNlL2VudGVyLnBuZycpO1xcclxcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcXHJcXG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcXHJcXG4gIGFwcGVhcmFuY2U6IG5vbmU7XFxyXFxuICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxuICB3aWR0aDogNDBweDtcXHJcXG4gIGhlaWdodDogNTBweDtcXHJcXG59XFxyXFxuXFxyXFxuLmFwcC1jb250YWluZXIgLmNsci1idG4ge1xcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxuICBjb2xvcjogZGFya3NsYXRlZ3JleTtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigyMjksIDI0MCwgMjUwKTtcXHJcXG4gIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDEwcHg7XFxyXFxuICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogMTBweDtcXHJcXG59XFxyXFxuXFxyXFxuLmNsci1idG46aG92ZXIge1xcclxcbiAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XFxyXFxuICBjb2xvcjogYmxhY2s7XFxyXFxufVxcclxcblxcclxcbi5hcHAtY29udGFpbmVyIC5pdGVtLWNoayB7XFxyXFxuICBib3JkZXI6IDJweCBzb2xpZCAjYzFjMWMzO1xcclxcbiAgY3Vyc29yOiBwb2ludGVyO1xcclxcbiAgY29sb3I6IHRyYW5zcGFyZW50O1xcclxcbiAgaGVpZ2h0OiB2YXIoLS1zdmctc2lkZSk7XFxyXFxuICB3aWR0aDogdmFyKC0tc3ZnLXNpZGUpO1xcclxcbiAgYm9yZGVyLXJhZGl1czogMnB4O1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxufVxcclxcblxcclxcbi5pY29uLW1vcmUtdmVydCB7XFxyXFxuICBjdXJzb3I6IG1vdmU7XFxyXFxufVxcclxcblxcclxcbi5pY29uLWNoZWNrIHtcXHJcXG4gIGRpc3BsYXk6IG5vbmU7XFxyXFxufVxcclxcblxcclxcbi5jb21wbGV0ZWQgLmljb24tY2hlY2sge1xcclxcbiAgZGlzcGxheTogaW5saW5lO1xcclxcbn1cXHJcXG5cXHJcXG4uY29tcGxldGVkIC5hcHAtdGV4dCB7XFxyXFxuICB0ZXh0LWRlY29yYXRpb246IGxpbmUtdGhyb3VnaDtcXHJcXG59XFxyXFxuXFxyXFxuLml0ZW0gbGFiZWwsXFxyXFxuLml0ZW0gdGV4dGFyZWEge1xcclxcbiAgZmxleC1ncm93OiAxO1xcclxcbiAgaGVpZ2h0OiB2YXIoLS1zdmctc2lkZSk7XFxyXFxuICByZXNpemU6IG5vbmU7XFxyXFxuICBib3JkZXI6IG5vbmU7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcXHJcXG59XFxyXFxuXFxyXFxuLml0ZW0gdGV4dGFyZWE6Zm9jdXMge1xcclxcbiAgb3V0bGluZTogbm9uZTtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xcclxcbn1cXHJcXG5cXHJcXG4uZHJhZ2dpbmcge1xcclxcbiAgb3BhY2l0eTogMC41O1xcclxcbn1cXHJcXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107XG5cbiAgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07XG5cbiAgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAodXJsLCBvcHRpb25zKSB7XG4gIGlmICghb3B0aW9ucykge1xuICAgIG9wdGlvbnMgPSB7fTtcbiAgfVxuICBpZiAoIXVybCkge1xuICAgIHJldHVybiB1cmw7XG4gIH1cbiAgdXJsID0gU3RyaW5nKHVybC5fX2VzTW9kdWxlID8gdXJsLmRlZmF1bHQgOiB1cmwpO1xuXG4gIC8vIElmIHVybCBpcyBhbHJlYWR5IHdyYXBwZWQgaW4gcXVvdGVzLCByZW1vdmUgdGhlbVxuICBpZiAoL15bJ1wiXS4qWydcIl0kLy50ZXN0KHVybCkpIHtcbiAgICB1cmwgPSB1cmwuc2xpY2UoMSwgLTEpO1xuICB9XG4gIGlmIChvcHRpb25zLmhhc2gpIHtcbiAgICB1cmwgKz0gb3B0aW9ucy5oYXNoO1xuICB9XG5cbiAgLy8gU2hvdWxkIHVybCBiZSB3cmFwcGVkP1xuICAvLyBTZWUgaHR0cHM6Ly9kcmFmdHMuY3Nzd2cub3JnL2Nzcy12YWx1ZXMtMy8jdXJsc1xuICBpZiAoL1tcIicoKSBcXHRcXG5dfCglMjApLy50ZXN0KHVybCkgfHwgb3B0aW9ucy5uZWVkUXVvdGVzKSB7XG4gICAgcmV0dXJuIFwiXFxcIlwiLmNvbmNhdCh1cmwucmVwbGFjZSgvXCIvZywgJ1xcXFxcIicpLnJlcGxhY2UoL1xcbi9nLCBcIlxcXFxuXCIpLCBcIlxcXCJcIik7XG4gIH1cbiAgcmV0dXJuIHVybDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vaW5kZXguY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9pbmRleC5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gdXBkYXRlcjtcbn1cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTtcblxuICAgIC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuICBjc3MgKz0gb2JqLmNzcztcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfVxuXG4gIC8vIEZvciBvbGQgSUVcbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgaWYgKHR5cGVvZiBkb2N1bWVudCA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHJldHVybiB7XG4gICAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZSgpIHt9LFxuICAgICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7fVxuICAgIH07XG4gIH1cbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImltcG9ydCAnLi9pbmRleC5jc3MnO1xuaW1wb3J0IHsgSXRlbUxpc3QsIHhsaW5rSHJlZiB9IGZyb20gJy4vbW9kdWxlcy9JdGVtTGlzdC5qcyc7XG5cbmNvbnN0IGxpc3RVbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNhZGQtaXRlbXMnKTtcbmNvbnN0IG5ld0l0ZW0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjbmV3aXRlbScpO1xuY29uc3QgY2xlYXJCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY2xyLWJ0bicpO1xuY29uc3QgbG9jYWxOYW1lID0gJ2l0ZW1saXN0JztcblxuY29uc3QgbGlzdFNlYyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5saXN0Jyk7XG5jb25zdCBzdWJtaXRCdG4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc3VtYml0LW5ld2l0ZW0nKTtcbmNvbnN0IExpc3RPZkl0ZW1zID0gbmV3IEl0ZW1MaXN0KGxvY2FsTmFtZSk7XG5sZXQgZHJhZ0luZGV4O1xuXG5jb25zdCBjaGFuZ2VEZXNjcmlwID0gKGRpdiwgbGFiZWwsIHRleHRBcmVhKSA9PiB7XG4gIGxhYmVsLnRleHRDb250ZW50ID0gdGV4dEFyZWEudmFsdWU7XG4gIGNvbnN0IGlkID0gcGFyc2VJbnQoZGl2LmRhdGFzZXQuaW5kZXgsIDEwKTtcbiAgTGlzdE9mSXRlbXMudXBkYXRlRGVzY3JpcChpZCwgdGV4dEFyZWEudmFsdWUpO1xufTtcblxuLyoqXG4gKiBGdW5jdGlvbiB0byBoYW5kbGUgdGhlIGNoYW5nZSBvZiBkZXNjcmlwdGlvbiBvZiBhIHNpbmdsZSBpdGVtLlxuICogQWxzbyB1cGRhdGVzIGluZGV4IG9mIGFsbCByZW1haW5pbmcgaXRlbXMgaW4gY2xhc3MgYW5kIGRhdGEtaW5kZXggaW4gRE9NXG4gKiBAcGFyYW0ge2FueX0gZGl2XG4gKiBAcmV0dXJucyB7YW55fVxuICovXG5jb25zdCB1cGRhdGVEZXNjcmlwdGlvbiA9IChkaXYpID0+IHtcbiAgY29uc3QgbGFiZWwgPSBkaXYucXVlcnlTZWxlY3RvcignbGFiZWwnKTtcbiAgY29uc3QgdGV4dEFyZWEgPSBkaXYucXVlcnlTZWxlY3RvcigndGV4dGFyZWEnKTtcbiAgbGFiZWwuc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgdGV4dEFyZWEuc3R5bGUuZGlzcGxheSA9ICdmbGV4JztcbiAgdGV4dEFyZWEuZm9jdXMoKTtcbiAgdGV4dEFyZWEuYWRkRXZlbnRMaXN0ZW5lcignZm9jdXNvdXQnLCAoKSA9PiB7XG4gICAgY2hhbmdlRGVzY3JpcChkaXYsIGxhYmVsLCB0ZXh0QXJlYSk7XG4gICAgbGFiZWwuc3R5bGUuZGlzcGxheSA9ICdmbGV4JztcbiAgICB0ZXh0QXJlYS5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICB9KTtcbiAgdGV4dEFyZWEuYWRkRXZlbnRMaXN0ZW5lcigna2V5ZG93bicsIChlKSA9PiB7XG4gICAgaWYgKGUuY29kZSA9PT0gJ0VudGVyJykge1xuICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgY2hhbmdlRGVzY3JpcChkaXYsIGxhYmVsLCB0ZXh0QXJlYSk7XG4gICAgICBsYWJlbC5zdHlsZS5kaXNwbGF5ID0gJ2ZsZXgnO1xuICAgICAgdGV4dEFyZWEuc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgICB9XG4gIH0pO1xuICB0ZXh0QXJlYS5hZGRFdmVudExpc3RlbmVyKCdpbnB1dCcsICgpID0+IHtcbiAgICBjaGFuZ2VEZXNjcmlwKGRpdiwgbGFiZWwsIHRleHRBcmVhKTtcbiAgfSk7XG59O1xuXG4vKipcbiAqIEZ1bmN0aW9uIHRvIHVwZGF0ZSAocmVtb3ZlIG9yIGNoYW5nZSBkZXNjcmlwdGlvbikgb2YgaXRlbSBvciBpdGVtcyBmcm9tIGNsYXNzIGFuZCBET00uXG4gKiBBbHNvIHVwZGF0ZXMgaW5kZXggb2YgYWxsIHJlbWFpbmluZyBpdGVtcyBpbiBjbGFzcyBhbmQgZGF0YS1pbmRleCBpbiBET01cbiAqIEBwYXJhbSB7YW55fSBlXG4gKiBAcmV0dXJucyB7YW55fVxuICovXG5jb25zdCB1cGRhdGVMaXN0ID0gKGUpID0+IHtcbiAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICBpZiAoZS50YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKCdpdGVtLWNoaycpKSB7XG4gICAgY29uc3QgbGlzdEl0ZW0gPSBlLnRhcmdldC5wYXJlbnROb2RlO1xuICAgIGxpc3RJdGVtLmNsYXNzTGlzdC50b2dnbGUoJ2NvbXBsZXRlZCcpO1xuICAgIExpc3RPZkl0ZW1zLnRvZ2dsZWNvbXBsZXRlKHBhcnNlSW50KGxpc3RJdGVtLmRhdGFzZXQuaW5kZXgsIDEwKSk7XG4gIH0gZWxzZSBpZiAoZS50YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKCdpY29uLWNoZWNrJykpIHtcbiAgICBjb25zdCBsaXN0SXRlbSA9IGUudGFyZ2V0LnBhcmVudE5vZGUucGFyZW50Tm9kZTtcbiAgICBsaXN0SXRlbS5jbGFzc0xpc3QudG9nZ2xlKCdjb21wbGV0ZWQnKTtcbiAgICBMaXN0T2ZJdGVtcy50b2dnbGVjb21wbGV0ZShwYXJzZUludChsaXN0SXRlbS5kYXRhc2V0LmluZGV4LCAxMCkpO1xuICB9IGVsc2UgaWYgKGUudGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucygnaWNvbi1jaGVjay11c2UnKSkge1xuICAgIGNvbnN0IGxpc3RJdGVtID0gZS50YXJnZXQucGFyZW50Tm9kZS5wYXJlbnROb2RlLnBhcmVudE5vZGU7XG4gICAgbGlzdEl0ZW0uY2xhc3NMaXN0LnRvZ2dsZSgnY29tcGxldGVkJyk7XG4gICAgTGlzdE9mSXRlbXMudG9nZ2xlY29tcGxldGUocGFyc2VJbnQobGlzdEl0ZW0uZGF0YXNldC5pbmRleCwgMTApKTtcbiAgfSBlbHNlIGlmICgoZS50YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKCdhcHAtdGV4dCcpKSkge1xuICAgIHVwZGF0ZURlc2NyaXB0aW9uKGUudGFyZ2V0LnBhcmVudE5vZGUucGFyZW50Tm9kZSk7XG4gIH0gZWxzZSBpZiAoZS50YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKCdpY29uLXRyYXNoLW8nKSkge1xuICAgIGNvbnN0IGxpc3RJdGVtID0gZS50YXJnZXQucGFyZW50Tm9kZTtcbiAgICBMaXN0T2ZJdGVtcy5yZW1vdmVpdGVtKHBhcnNlSW50KGxpc3RJdGVtLmRhdGFzZXQuaW5kZXgsIDEwKSwgbGlzdEl0ZW0sIGxpc3RVbCk7XG4gICAgbGlzdFVsLnJlbW92ZUNoaWxkKGxpc3RJdGVtKTtcbiAgICBMaXN0T2ZJdGVtcy51cGRhdGVMaXN0KCcuYXBwLWl0ZW0nKTtcbiAgfSBlbHNlIGlmIChlLnRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoJ2ljb24tdHJhc2gtby11c2UnKSkge1xuICAgIGNvbnN0IGxpc3RJdGVtID0gZS50YXJnZXQucGFyZW50Tm9kZS5wYXJlbnROb2RlO1xuICAgIExpc3RPZkl0ZW1zLnJlbW92ZWl0ZW0ocGFyc2VJbnQobGlzdEl0ZW0uZGF0YXNldC5pbmRleCwgMTApLCBsaXN0SXRlbSwgbGlzdFVsKTtcbiAgICBsaXN0VWwucmVtb3ZlQ2hpbGQobGlzdEl0ZW0pO1xuICAgIExpc3RPZkl0ZW1zLnVwZGF0ZUxpc3QoJy5hcHAtaXRlbScpO1xuICB9XG59O1xuXG5jb25zdCBjb21wYXJlT3JkZXIgPSAoZWxlbTEsIGVsZW0yKSA9PiB7XG4gIGlmIChlbGVtMS5wYXJlbnROb2RlICE9PSBlbGVtMi5wYXJlbnROb2RlKSB7XG4gICAgcmV0dXJuIG51bGw7XG4gIH1cbiAgaWYgKGVsZW0xID09PSBlbGVtMikgcmV0dXJuIDA7XG5cbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWJpdHdpc2VcbiAgaWYgKGVsZW0xLmNvbXBhcmVEb2N1bWVudFBvc2l0aW9uKGVsZW0yKSAmIE5vZGUuRE9DVU1FTlRfUE9TSVRJT05fRk9MTE9XSU5HKSB7XG4gICAgcmV0dXJuIC0xO1xuICB9XG4gIHJldHVybiAxO1xufTtcblxuY29uc3QgYWRkRHJhZ0V2ZW50TGlzdGVuZXJzID0gKGVsZW0sIGRyYWdnZWRUYXJnZXQpID0+IHtcbiAgZWxlbS5hZGRFdmVudExpc3RlbmVyKCdkcmFnc3RhcnQnLCAoKSA9PiB7XG4gICAgZHJhZ2dlZFRhcmdldC5lbGVtZW50ID0gZWxlbTtcbiAgICBlbGVtLmNsYXNzTGlzdC5hZGQoJ2RyYWdnaW5nJyk7XG4gICAgZHJhZ0luZGV4ID0gK2RyYWdnZWRUYXJnZXQuZWxlbWVudC5kYXRhc2V0LmluZGV4O1xuICB9KTtcblxuICBlbGVtLmFkZEV2ZW50TGlzdGVuZXIoJ2RyYWdvdmVyJywgKCkgPT4ge1xuICAgIGNvbnN0IG9yZGVyID0gY29tcGFyZU9yZGVyKGVsZW0sIGRyYWdnZWRUYXJnZXQuZWxlbWVudCk7XG4gICAgaWYgKCFvcmRlcikgcmV0dXJuO1xuICAgIGNvbnN0IGJhc2VFbGVtZW50ID0gb3JkZXIgPT09IC0xID8gZWxlbSA6IGVsZW0ubmV4dFNsaWJpbmc7XG4gICAgZHJhZ2dlZFRhcmdldC5MaXN0Q29udGFpbmVyLmluc2VydEJlZm9yZShkcmFnZ2VkVGFyZ2V0LmVsZW1lbnQsIGJhc2VFbGVtZW50KTtcbiAgfSk7XG4gIGVsZW0uYWRkRXZlbnRMaXN0ZW5lcignZHJhZ2VuZCcsICgpID0+IHtcbiAgICBlbGVtLmNsYXNzTGlzdC5yZW1vdmUoJ2RyYWdnaW5nJyk7XG4gICAgY29uc3QgbmV3UG9zdCA9IEFycmF5LmZyb20oZWxlbS5wYXJlbnROb2RlLmNoaWxkcmVuKS5pbmRleE9mKGVsZW0pO1xuICAgIExpc3RPZkl0ZW1zLnVwZGF0ZUluZGV4KGRyYWdJbmRleCwgbmV3UG9zdCk7XG4gICAgTGlzdE9mSXRlbXMudXBkYXRlTGlzdCgnLmFwcC1pdGVtJyk7XG4gIH0pO1xufTtcblxuLyoqXG4gKiBGdW5jdGlvbiB0byBhZGQgaXRlbXMgdG8gY2xhc3MgYW5kIERPTSB3aGVuZXZlciBhIG5ldyBpdGVtIGlzIHN1bWJpdFxuICogQHBhcmFtIHtldmVudH0gZSBFdmVudCBnaXZlbiBieSBhZGRFdmVudExpc3RlbmVyXG4gKiBAcmV0dXJucyB7dm9pZH0gdm9pZFxuICovXG5jb25zdCBhZGRJdGVtID0gKGUpID0+IHtcbiAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICBjb25zdCBuZXdDaGlsZCA9IExpc3RPZkl0ZW1zLmFkZChuZXdJdGVtLCB4bGlua0hyZWYpO1xuICBsaXN0VWwuYXBwZW5kQ2hpbGQobmV3Q2hpbGQpO1xuICBjb25zdCB0YXJnZXQgPSB7IGxpc3RVbCwgZWxlbWVudDogdW5kZWZpbmVkIH07XG4gIGFkZERyYWdFdmVudExpc3RlbmVycyhuZXdDaGlsZCwgdGFyZ2V0KTtcbn07XG5cbi8qKlxuICogRnVuY3Rpb24gdG8gcmVtb3ZlIGFsbCBpdGVtIHdpdGggY29tcGxldGUgY2xhc3MgZnJvbSBET00gYW5kIGNsYXNzLlxuICogQWxzbyB1cGRhdGVzIGluZGV4IG9mIGFsbCByZW1haW5pbmcgaXRlbXMgaW4gY2xhc3MgYW5kIGRhdGEtaW5kZXggaW4gRE9NXG4gKiBAcGFyYW0ge2FueX0gZSBFdmVudCBnaXZlbiBieSBhZGRFdmVudExpc3RlbmVyXG4gKiBAcmV0dXJucyB7dm9pZH0gdm9pZFxuICovXG5jb25zdCByZW1vdmVJdGVtcyA9IChlKSA9PiB7XG4gIGUucHJldmVudERlZmF1bHQoKTtcbiAgY29uc3QgaXRlbUNvbXBsZXRlZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5jb21wbGV0ZWQnKTtcbiAgaWYgKGl0ZW1Db21wbGV0ZWQubGVuZ3RoID4gMCkge1xuICAgIGl0ZW1Db21wbGV0ZWQuZm9yRWFjaCgoZGVsSXRlbSkgPT4ge1xuICAgICAgTGlzdE9mSXRlbXMucmVtb3ZlaXRlbShwYXJzZUludChkZWxJdGVtLmRhdGFzZXQuaW5kZXgsIDEwKSwgZGVsSXRlbSwgbGlzdFVsKTtcbiAgICB9KTtcbiAgICBpdGVtQ29tcGxldGVkLmZvckVhY2goKGRlbEl0ZW0pID0+IHtcbiAgICAgIGxpc3RVbC5yZW1vdmVDaGlsZChkZWxJdGVtKTtcbiAgICB9KTtcbiAgICBMaXN0T2ZJdGVtcy51cGRhdGVMaXN0KCcuYXBwLWl0ZW0nKTtcbiAgfVxufTtcblxuSXRlbUxpc3QucmVuZGVyTGlzdChsaXN0VWwsIGxvY2FsTmFtZSwgYWRkRHJhZ0V2ZW50TGlzdGVuZXJzKTtcblxubGlzdFNlYy5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHVwZGF0ZUxpc3QpO1xuc3VibWl0QnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgYWRkSXRlbSk7XG5jbGVhckJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHJlbW92ZUl0ZW1zKTsiLCJpbXBvcnQgeyBjcmVhdGVMaXN0SXRlbSwgSXRlbUVsZW0gfSBmcm9tICcuL0xpc3RJdGVtTW9kLmpzJztcbmltcG9ydCBpY29uIGZyb20gJy4uL2Fzc2V0L3Jlc291cmNlL2ljb25zLnN2Zyc7XG5cbmNvbnN0IHhsaW5rSHJlZiA9IFtgJHtpY29ufSNpY29uLWNoZWNrYCwgJy4vYXNzZXQvcmVzb3VyY2UvaWNvbnMuc3ZnI2ljb24tbW9yZS12ZXJ0JyxcbiAgJy4vYXNzZXQvcmVzb3VyY2UvaWNvbnMuc3ZnI2ljb24tdHJhc2gtbyddO1xuXG5jb25zdCBpdGVtQ2xhc3NlcyA9IChzdGF0dXMgPSBmYWxzZSkgPT4ge1xuICBjb25zdCBjbGFzc0xpc3RJbmNvbXAgPSBbJ2FwcC1yb3cnLCAnYXBwLWl0ZW0nXTtcbiAgY29uc3QgY2xhc3NMaXN0Q29tcCA9IFsnYXBwLXJvdycsICdhcHAtaXRlbScsICdjb21wbGV0ZWQnXTtcbiAgY29uc3QgY2xhc3NCdG4gPSAnaXRlbS1jaGsnO1xuICBjb25zdCBjbGFzc0RpdlRleHQgPSAnaXRlbSc7XG4gIGNvbnN0IGNsYXNzVGV4dCA9ICdhcHAtdGV4dCc7XG4gIGNvbnN0IGNsYXNzTGlzdCA9IHN0YXR1cyA/IGNsYXNzTGlzdENvbXAgOiBjbGFzc0xpc3RJbmNvbXA7XG4gIGNvbnN0IHRlbXAgPSBbY2xhc3NMaXN0LCBjbGFzc0J0biwgY2xhc3NEaXZUZXh0LCBjbGFzc1RleHRdO1xuICByZXR1cm4gdGVtcDtcbn07XG5cbi8qKlxuICogQ2xhc3MgdGhhdCBjcmVhdGVzIGFuZCBhcnJheSB0byBib29rIGNsYXNzIGluc3RhbmNlcyB0byBiZSBhZGRlZCB0byBsb2NhbCBzdG9yYWdlXG4gKiBhbmQgYWRkZWQgdG8gRE9NLlxuICogQHBhcmFtIHtzdHJpbmd9IGxvY2FsTmFtZSBuYW1lIHRvIGJlIHVzZWQgdG8gYWRkIGJvb2tiaW5kaW5nIHRvIGxvY2FsIHN0b3JhZ2UuXG4gKiBAcmV0dXJucyB7b2JqZWN0fSByZXR1cm4gaW5zdGFuY2Ugb2YgYm9va2JpZGluZyBjbGFzcyB3aXRoIGFuIGFycmF5IG9mIGJvb2sgY2xhc3MgaW5zdGFuY2VzLlxuICovXG5jbGFzcyBJdGVtTGlzdCB7XG4gIGNvbnN0cnVjdG9yKGxvY2FsTmFtZSkge1xuICAgIHRoaXMuaXRlbUFycmF5ID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oYCR7bG9jYWxOYW1lfWApID8gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbShgJHtsb2NhbE5hbWV9YCkpIDogW107XG4gICAgdGhpcy5sb2NhbE5hbWUgPSBsb2NhbE5hbWU7XG4gICAgdGhpcy5sZW5ndGggPSB0aGlzLml0ZW1BcnJheS5sZW5ndGg7XG4gIH1cblxuICAvKipcbiAgICogTWV0aG9kIHRvIHJlbW92ZSBpdGVtIHRvIGxvY2FsIHN0b3JhZ2UgYW5kIGNsYXNzLlxuICAgKiBAcGFyYW0ge3N0cmluZ30gZGVzY3JpcCBEZXNjcmlwdGlvbiBvZiBpdGVtIGFzIGlucHV0IGJ5IHVzZXJcbiAgICogQHBhcmFtIHtBcnJheX0geGxpbmsgYXJyYXkgb2Ygc3RyaW5nIHdpdGggaHJlZiBmb3Igc3ZnIGljb25zXG4gICAqIEBwYXJhbSB7QXJyYXl9IGNsYXNzZXNTZWMgQXJyYXkgb2Ygc3RyaW5ncyB3aXRoIGNsYXNzIG5hbWVzIGZvciBlYWNoIHBhcnQgb2YgdGhlIHNlY3Rpb24uXG4gICAqIExlbmd0aCA0LlxuICAgKiBAcmV0dXJucyB7dm9pZH1cbiAgICovXG4gIGFkZChkZXNjcmlwLCB4bGluaykge1xuICAgIGxldCBuZXdDaGlsZCA9IGZhbHNlO1xuICAgIGlmIChkZXNjcmlwLnZhbHVlLmxlbmd0aCkge1xuICAgICAgY29uc3QgaW5kZXggPSB0aGlzLmxlbmd0aCArIDE7XG4gICAgICBjb25zdCBpdGVtID0gbmV3IEl0ZW1FbGVtKGRlc2NyaXAudmFsdWUsIGluZGV4KTtcbiAgICAgIHRoaXMuaXRlbUFycmF5ID0gdGhpcy5pdGVtQXJyYXkuY29uY2F0KGl0ZW0pO1xuICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0odGhpcy5sb2NhbE5hbWUsIEpTT04uc3RyaW5naWZ5KHRoaXMuaXRlbUFycmF5KSk7XG4gICAgICBjb25zdCBjbGFzc2VzU2VjID0gaXRlbUNsYXNzZXMoKTtcbiAgICAgIG5ld0NoaWxkID0gY3JlYXRlTGlzdEl0ZW0oaW5kZXgsIHhsaW5rLCBkZXNjcmlwLnZhbHVlLCAuLi5jbGFzc2VzU2VjKTtcbiAgICAgIHRoaXMubGVuZ3RoICs9IDE7XG4gICAgfVxuICAgIGRlc2NyaXAudmFsdWUgPSAnJztcbiAgICByZXR1cm4gbmV3Q2hpbGQ7XG4gIH1cblxuICAvKipcbiAqIE1ldGhvZCB0byByZW1vdmUgaXRlbSBmcm9tIGxvY2FsIHN0b3JhZ2UgYW5kIGNsYXNzLlxuICogQHBhcmFtIHtudW1iZXJ9IGlkIEluZGV4IG9mIGl0ZW0gdG8gYmUgcmVtb3ZlZFxuICogQHJldHVybnMge3ZvaWR9XG4gKi9cbiAgcmVtb3ZlaXRlbShpZCkge1xuICAgIHRoaXMuaXRlbUFycmF5ID0gdGhpcy5pdGVtQXJyYXkuZmlsdGVyKChpdGVtKSA9PiBpdGVtLmluZGV4ICE9PSBpZCk7XG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0odGhpcy5sb2NhbE5hbWUsIEpTT04uc3RyaW5naWZ5KHRoaXMuaXRlbUFycmF5KSk7XG4gICAgdGhpcy5sZW5ndGggLT0gMTtcbiAgfVxuXG4gIC8qKlxuICAgKiBNZXRob2QgdG8gdXBkYXRlIGRlc2NyaXB0aW9uIG9mIGluIGxvY2FsIHN0b3JhZ2UgYW5kIGNsYXNzXG4gICAqIEBwYXJhbSB7bnVtYmVyfSBpZCBJbmRleCBvZiBpdGVtXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBkZXNjcmlwdGlvbiBOZXcgZGVzY3JpcHRpb24gb2YgaXRlbSB0byBiZSBhZGRlZFxuICAgKiBAcmV0dXJucyB7dm9pZH0gVk9pZFxuICAgKi9cbiAgdXBkYXRlRGVzY3JpcChpZCwgZGVzY3JpcHRpb24pIHtcbiAgICBpZCAtPSAxO1xuICAgIHRoaXMuaXRlbUFycmF5W2lkXS5kZXNjcmlwID0gZGVzY3JpcHRpb247XG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0odGhpcy5sb2NhbE5hbWUsIEpTT04uc3RyaW5naWZ5KHRoaXMuaXRlbUFycmF5KSk7XG4gIH1cblxuICAvKipcbiAgICogTWV0aG9kIHRvIHRvZ2dsZSBjb21wbGV0ZW5lc3Mgc3RhdHVzIG9mIGl0ZW0gaW4gbG9jYWwgc3RvcmFnZSBhbmQgY2xhc3NcbiAgICogQHBhcmFtIHtudW1iZXJ9IGlkIEluZGV4IG9mIGl0ZW1cbiAgICogQHJldHVybnMge3ZvaWR9IHZvaWRcbiAgICovXG4gIHRvZ2dsZWNvbXBsZXRlKGlkKSB7XG4gICAgaWQgLT0gMTtcbiAgICB0aGlzLml0ZW1BcnJheVtpZF0uaXNDb21wbGV0ZWQgPSAhdGhpcy5pdGVtQXJyYXlbaWRdLmlzQ29tcGxldGVkO1xuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKHRoaXMubG9jYWxOYW1lLCBKU09OLnN0cmluZ2lmeSh0aGlzLml0ZW1BcnJheSkpO1xuICB9XG5cbiAgLyoqXG4gICAqIE1ldGhvZCB0byB1cGRhdGUgaW5kZXggb2YgZWFjaCBpdGVtIGluIGNsYXNzIGFuZCB1cGRhdGUgZGF0YS1pbmRleCBpbiBET01cbiAgICogQHBhcmFtIHtzdHJpbmd9IGl0ZW1DbGFzcyBOYW1lIG9mIGNsYXNzIG9mIGl0ZW0gZWxlbWVudHMgaW4gRE9NXG4gICAqIEByZXR1cm5zIHt2b2lkfSB2b2lkXG4gICAqL1xuICB1cGRhdGVMaXN0KGl0ZW1DbGFzcykge1xuICAgIGNvbnN0IGl0ZW1zUmVuZGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChpdGVtQ2xhc3MpO1xuICAgIHRoaXMuaXRlbUFycmF5LmZvckVhY2goKGxpc3RpdGVtLCBpKSA9PiB7XG4gICAgICBjb25zdCBpZCA9IGkgKyAxO1xuICAgICAgbGlzdGl0ZW0uaW5kZXggPSBpZDtcbiAgICAgIGl0ZW1zUmVuZGVyW2ldLmRhdGFzZXQuaW5kZXggPSBpZDtcbiAgICB9KTtcbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSh0aGlzLmxvY2FsTmFtZSwgSlNPTi5zdHJpbmdpZnkodGhpcy5pdGVtQXJyYXkpKTtcbiAgfVxuXG4gIHVwZGF0ZUluZGV4KG9sZFBvcywgbmV3UG9zKSB7XG4gICAgb2xkUG9zIC09IDE7XG4gICAgY29uc29sZS5sb2cob2xkUG9zKTtcbiAgICBjb25zdCBjdXJySXRlbSA9IEpTT04ucGFyc2UoSlNPTi5zdHJpbmdpZnkodGhpcy5pdGVtQXJyYXlbb2xkUG9zXSkpO1xuICAgIGNvbnN0IGZpcnN0SGFsZiA9IHRoaXMuaXRlbUFycmF5LnNsaWNlKDAsIG9sZFBvcyk7XG4gICAgY29uc3Qgc2Vjb25kSGFsZiA9IHRoaXMuaXRlbUFycmF5LnNsaWNlKG9sZFBvcyArIDEsIHRoaXMuaXRlbUFycmF5Lmxlbmd0aCk7XG4gICAgdGhpcy5pdGVtQXJyYXkgPSBmaXJzdEhhbGYuY29uY2F0KHNlY29uZEhhbGYpO1xuICAgIHRoaXMuaXRlbUFycmF5LnNwbGljZShuZXdQb3MsIDAsIGN1cnJJdGVtKTtcbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSh0aGlzLmxvY2FsTmFtZSwgSlNPTi5zdHJpbmdpZnkodGhpcy5pdGVtQXJyYXkpKTtcbiAgfVxuXG4gIC8qKlxuICogU3RhdGljIG1ldGhvZCBvZiBCb29rQmlkaW5nLiBVcGRhdGVzIExvY2FsIFN0b3JhdGUgYW5kIHJlIHJlbmRlcnMgYm9va3NoZWxmIHNlY3Rpb24uXG4gKiBAcGFyYW0ge0hUTUxFbGVtZW50fSBib29rc2hlbGYgSFRNTCBlbGVtZW50IHdoZXJlIGJvb2tzIGFyZSBnb2luZyB0byBiZSBhZGRlZC5cbiAqIEBwYXJhbSB7c3RyaW5nfSBsb2NhbE5hbWUgbmFtZSB0byBiZSB1c2VkIHRvIGFkZCBib29rYmluZGluZyB0byBsb2NhbCBzdG9yYWdlLlxuICogQHBhcmFtIHtzdHJpbmd9IGJvb2tEaXZOYW1lIG5hbWUgb2YgY2xhc3MgdG8gYmUgdXNlZCB0byBhZGQgYm9vayB0byBib29rc2hlbGYuXG4gKiBAcmV0dXJucyB7dm9pZH0gVm9pZFxuICovXG4gIHN0YXRpYyByZW5kZXJMaXN0KExpc3RDb250YWluZXIsIGxvY2FsTmFtZSwgYWRkRHJhZ0V2ZW50TGlzdGVuZXJzKSB7XG4gICAgY29uc3QgaXRlbUxpc3QgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShgJHtsb2NhbE5hbWV9YCkgPyBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKGAke2xvY2FsTmFtZX1gKSkgOiBbXTtcbiAgICBjb25zdCBMaXN0RnJhZyA9IGRvY3VtZW50LmNyZWF0ZURvY3VtZW50RnJhZ21lbnQoKTtcbiAgICBjb25zb2xlLmxvZyhpdGVtTGlzdCk7XG4gICAgaXRlbUxpc3QuZm9yRWFjaCgobGlzdGl0ZW0pID0+IHtcbiAgICAgIGNvbnN0IHsgaW5kZXgsIGRlc2NyaXAsIGlzQ29tcGxldGVkIH0gPSBsaXN0aXRlbTtcbiAgICAgIGNvbnN0IGNsYXNzZXNTZWMgPSBpdGVtQ2xhc3Nlcyhpc0NvbXBsZXRlZCk7XG4gICAgICBjb25zdCBuZXdDaGlsZCA9IGNyZWF0ZUxpc3RJdGVtKGluZGV4LCB4bGlua0hyZWYsIGRlc2NyaXAsIC4uLmNsYXNzZXNTZWMpO1xuICAgICAgTGlzdEZyYWcuYXBwZW5kQ2hpbGQobmV3Q2hpbGQpO1xuICAgIH0pO1xuICAgIGNvbnN0IHRhcmdldCA9IHsgTGlzdENvbnRhaW5lciwgZWxlbWVudDogdW5kZWZpbmVkIH07XG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXJlc3RyaWN0ZWQtc3ludGF4XG4gICAgZm9yIChjb25zdCBpdGVtIG9mIExpc3RGcmFnLmNoaWxkcmVuKSB7XG4gICAgICBhZGREcmFnRXZlbnRMaXN0ZW5lcnMoaXRlbSwgdGFyZ2V0KTtcbiAgICB9XG4gICAgTGlzdENvbnRhaW5lci5pbm5lckhUTUwgPSAnJztcbiAgICBMaXN0Q29udGFpbmVyLmFwcGVuZENoaWxkKExpc3RGcmFnKTtcbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShgJHtsb2NhbE5hbWV9YCwgSlNPTi5zdHJpbmdpZnkoaXRlbUxpc3QpKTtcbiAgfVxufVxuXG5leHBvcnQge1xuICBJdGVtTGlzdCwgeGxpbmtIcmVmLFxufTsiLCJpbXBvcnQgZWxlbUdlbiBmcm9tICcuL2VsZW1lbnRHZW5lcmF0b3JNb2QuanMnO1xuaW1wb3J0IGV4dHJhQXR0IGZyb20gJy4vZWxlbWVudEV4dHJhQXR0ck1vZC5qcyc7XG5pbXBvcnQgYnRuIGZyb20gJy4vYnV0dG9uR2VuZXJhdG9yTW9kLmpzJztcbmltcG9ydCB7IGNyZWF0ZU5TIH0gZnJvbSAnLi9jcmVhdGVTdmcuanMnO1xuaW1wb3J0IHRleHQgZnJvbSAnLi9jcmVhdGVUZXh0QXJlYS5qcyc7XG5pbXBvcnQgbGFiZWwgZnJvbSAnLi9jcmVhdGVMYWJlbC5qcyc7XG5cbmNvbnN0IGNyZWF0ZUxpc3RJdGVtID0gKGluZGV4LCBocmVmLCB0ZXh0Q29udGVudCwgY2xhc3NMaXN0ID0gZmFsc2UsIGNsYXNzQnRuID0gZmFsc2UsXG4gIGNsYXNzRGl2VGV4dCA9IGZhbHNlLCBjbGFzc1RleHQgPSBmYWxzZSkgPT4ge1xuICBjb25zdCBkb2NGcmFnID0gZG9jdW1lbnQuY3JlYXRlRG9jdW1lbnRGcmFnbWVudCgpO1xuICBjb25zdCBzdmdCdG4gPSBjcmVhdGVOUyhocmVmWzBdKTtcbiAgY29uc3QgY2hrQnRuID0gYnRuLmNyZWF0ZUJ1dHRvbignYnV0dG9uJywgY2xhc3NCdG4sICdDaGVjayBEb25lJywgZmFsc2UsIHN2Z0J0bik7XG4gIGV4dHJhQXR0LmFkZEF0dHJpYnV0ZXMoY2hrQnRuLCBmYWxzZSwgZmFsc2UsICd0YWJpbmRleCcsICcwJyk7XG4gIGRvY0ZyYWcuYXBwZW5kQ2hpbGQoY2hrQnRuKTtcbiAgY29uc3QgbGFiZWxUeHQgPSBsYWJlbC5jcmVhdGVMYWJlbChmYWxzZSwgY2xhc3NUZXh0LCB0ZXh0Q29udGVudCk7XG4gIGV4dHJhQXR0LmFkZEF0dHJpYnV0ZXMobGFiZWxUeHQsIGZhbHNlLCBmYWxzZSwgJ3RhYmluZGV4JywgJzAnKTtcbiAgY29uc3QgZGl2VGV4dCA9IGVsZW1HZW4uY3JlYXRlRWxlbWVudERlZmF1bHQoJ2RpdicsIGNsYXNzRGl2VGV4dCwgZmFsc2UsIGxhYmVsVHh0KTtcbiAgY29uc3QgdHh0QXJlYSA9IHRleHQuY3JlYXRlVGV4dEFyZWEoJzI1NScsIGNsYXNzVGV4dCwgdGV4dENvbnRlbnQpO1xuICBkaXZUZXh0LmFwcGVuZENoaWxkKHR4dEFyZWEpO1xuICBkb2NGcmFnLmFwcGVuZENoaWxkKGRpdlRleHQpO1xuICBjb25zdCBzdmdNb3ZlID0gY3JlYXRlTlMoaHJlZlsxXSk7XG4gIGRvY0ZyYWcuYXBwZW5kQ2hpbGQoc3ZnTW92ZSk7XG4gIGNvbnN0IHN2Z1JlbW92ZSA9IGNyZWF0ZU5TKGhyZWZbMl0pO1xuICBkb2NGcmFnLmFwcGVuZENoaWxkKHN2Z1JlbW92ZSk7XG4gIGNvbnN0IGxpc3RJdGVtID0gZWxlbUdlbi5jcmVhdGVFbGVtZW50RGVmYXVsdCgnbGknLCBjbGFzc0xpc3QsIGZhbHNlLCBkb2NGcmFnKTtcbiAgZXh0cmFBdHQuYWRkQXR0cmlidXRlcyhsaXN0SXRlbSwgJ2luZGV4JywgaW5kZXgpO1xuICBsaXN0SXRlbS5zZXRBdHRyaWJ1dGUoJ2RyYWdnYWJsZScsICd0cnVlJyk7XG4gIHJldHVybiBsaXN0SXRlbTtcbn07XG5cbi8qKlxuICogQ2xhc3Mgb2YgTGlzdCBJdGVhbSB0byBiZSBpbnN0YXRpYXRlZCB3aXRoIDMgcHJvcGVydGllc1xuICogQHBhcmFtIHtzdHJpbmd9IGRlc2NyaXAgRGVzY3JpcHRpb24gb2YgTGlzdCBJdGVtXG4gKiBAcGFyYW0ge2Jvb2xlYW59IGlzQ29tcGxldGVkIENvbXBsZXRpb24gc3RhdHVzIG9mIExpc3QgSXRlbVxuICogQHBhcmFtIHtudW1iZXJ9IGluZGV4IFBvc2l0aW9uIG9mIExpc3QgSXRlYW1cbiAqIEByZXR1cm5zIHtvYmplY3R9IE5ldyBjbGFzcyB3aXRoIHRpdGxlIGFuZCBhdXRob3IgcHJvcGVydGllc1xuICovXG5jbGFzcyBJdGVtRWxlbSB7XG4gIGNvbnN0cnVjdG9yKGRlc2NyaXAsIGluZGV4LCBpc0NvbXBsZXRlZCA9IGZhbHNlKSB7XG4gICAgdGhpcy5kZXNjcmlwID0gZGVzY3JpcDtcbiAgICB0aGlzLmlzQ29tcGxldGVkID0gaXNDb21wbGV0ZWQ7XG4gICAgdGhpcy5pbmRleCA9IGluZGV4O1xuICB9XG59XG5cbmV4cG9ydCB7XG4gIGNyZWF0ZUxpc3RJdGVtLFxuICBJdGVtRWxlbSxcbn07IiwiaW1wb3J0IGFkZENsYXNzIGZyb20gJy4vZWxlbWVudEFkZENsYXNzTW9kLmpzJztcclxuXHJcbi8qKlxyXG4gKiBGdW5jdGlvbiB0byBjcmVhdGUgSFRNTCBCdXR0b24gZWxlbWVudC4gQ2xhc3NlcyBhbmQgdGV4dCBjb250ZW50XHJcbiAqIGNhbiBiZSBhZGRlZCBhcyBlbGVtZW50IGlzIGNyZWF0ZS4gQ2xpY2sgZXZlbnQgdG8gYSBhbm90aGVyIHdlYnBhZ2UgY2FuIGJlIGFkZGVkLlxyXG4gKiBAcGFyYW0ge3N0cmluZ30gZnVuYyBUeXBlIG9mIGJ1dHRvbiBgc3VtYml0LCByZXNldCwgYnV0dG9uYFxyXG4gKiBAcGFyYW0ge3N0cmluZ30gY2xhc3NlcyBOYW1lIG9mIGNsYXNzIG9yIGNsYXNzZXMgdG8gYWRkLiBTdHJpbmcsIGFycmF5IG9mIHN0cmluZyBzaG91bGQgYmUgdXNlZC5cclxuICogSWYgbm8gY2xhc3MgaXMgd2FudGVkLCBmYWxzZSBzaG91bGQgYmUgdXNlLk9wdGlvbmFsIFBhcmFtZW50ZXIuXHJcbiAqIEBwYXJhbSB7c3RyaW5nfSBhcmlhTGFiZWwgVGV4dCBmb3IgYWNjZXNzaWJpbGl0eVxyXG4gKiBAcGFyYW0ge2FueX0gdGV4dENvbnRlbnQgVGV4dCB0byBiZSBhZGRlZCBhcyB0ZXh0IGNvbnRlbnQgdG8gSFRNTCBlbGVtZW50LlxyXG4gKiBPcHRpb24gcGFyYW1ldGVyLlxyXG4gKiBAcGFyYW0ge0hUTUxFbGVtZW50fSBpbm5lckNoaWxkIEhUTUwgRWxlbWVudCB0byBiZSBhcHBlbmRlZFxyXG4gKiBAcGFyYW0ge2FueX0gaHJlZiBIeXBlcmxpbmsgcmVmZXJlbmNlIHRvIGJlIGZvbGxvd2VkIGlmIGJ1dHRvbiBpcyBjbGlja2VkLlxyXG4gKiBPcHRpb24gcGFyYW1ldGVyLlxyXG4gKiBAcmV0dXJucyB7SFRNTEJ1dHRvbkVsZW1lbnR9IFJldHVybnMgSFRNTCBidXR0b24gZWxlbWVudCBjaG9zZW4gd2l0aCBzZXQgYXR0cmlidXRlcy5cclxuICovXHJcbmNvbnN0IGNyZWF0ZUJ1dHRvbiA9IChmdW5jLCBjbGFzc2VzLCBhcmlhTGFiZWwsIHRleHRDb250ZW50ID0gZmFsc2UsXHJcbiAgaW5uZXJDaGlsZCA9IGZhbHNlLCBocmVmID0gZmFsc2UpID0+IHtcclxuICBjb25zdCBidXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcclxuICBidXR0b24udHlwZSA9IGZ1bmM7XHJcbiAgYnV0dG9uLmFyaWFMYWJlbCA9IGFyaWFMYWJlbDtcclxuICBhZGRDbGFzcy5hZGRDbGFzcyhidXR0b24sIGNsYXNzZXMpO1xyXG4gIGlmICh0ZXh0Q29udGVudCkgYnV0dG9uLnRleHRDb250ZW50ID0gdGV4dENvbnRlbnQ7XHJcbiAgaWYgKGhyZWYpIHtcclxuICAgIGJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuICAgICAgd2luZG93LmxvY2F0aW9uLmhyZWYgPSBocmVmO1xyXG4gICAgfSk7XHJcbiAgfVxyXG4gIGlmIChpbm5lckNoaWxkKSBidXR0b24uYXBwZW5kQ2hpbGQoaW5uZXJDaGlsZCk7XHJcbiAgcmV0dXJuIGJ1dHRvbjtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IHtcclxuICBjcmVhdGVCdXR0b24sXHJcbn07IiwiaW1wb3J0IGVsZW1HZW4gZnJvbSAnLi9lbGVtZW50R2VuZXJhdG9yTW9kLmpzJztcclxuaW1wb3J0IGV4dHJhQXR0IGZyb20gJy4vZWxlbWVudEV4dHJhQXR0ck1vZC5qcyc7XHJcblxyXG5jb25zdCBjcmVhdGVMYWJlbCA9IChmb3JBdHIgPSBmYWxzZSwgY2xhc3NlcyA9IGZhbHNlLCB0ZXh0Q29udGVudCA9IGZhbHNlLCBpbm5lckNoaWxkID0gZmFsc2UpID0+IHtcclxuICBjb25zdCBsYWJlbCA9IGVsZW1HZW4uY3JlYXRlRWxlbWVudERlZmF1bHQoJ2xhYmVsJywgY2xhc3NlcywgdGV4dENvbnRlbnQsIGlubmVyQ2hpbGQpO1xyXG4gIGV4dHJhQXR0LmFkZEF0dHJpYnV0ZXMobGFiZWwsIGZhbHNlLCBmYWxzZSwgJ2ZvcicsIGZvckF0cik7XHJcbiAgcmV0dXJuIGxhYmVsO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQge1xyXG4gIGNyZWF0ZUxhYmVsLFxyXG59OyIsImltcG9ydCBlbGVtR2VuIGZyb20gJy4vZWxlbWVudEdlbmVyYXRvck1vZC5qcyc7XHJcbmltcG9ydCBleHRyYUF0dCBmcm9tICcuL2VsZW1lbnRFeHRyYUF0dHJNb2QuanMnO1xyXG5cclxuY29uc3QgY3JlYXRlU3ZnID0gKGhyZWYpID0+IHtcclxuICBjb25zdCB4bGluayA9IGhyZWYuc3BsaXQoJyMnKTtcclxuICBjb25zdCB1c2UgPSBlbGVtR2VuLmNyZWF0ZUVsZW1lbnREZWZhdWx0KCd1c2UnLCBmYWxzZSk7XHJcbiAgZXh0cmFBdHQuYWRkQXR0cmlidXRlcyh1c2UsIGZhbHNlLCBmYWxzZSwgJ2hyZWYnLCBgJHtocmVmfWApO1xyXG4gIGNvbnN0IHN2ZyA9IGVsZW1HZW4uY3JlYXRlRWxlbWVudERlZmF1bHQoJ3N2ZycsIHhsaW5rWzFdLCBmYWxzZSwgdXNlKTtcclxuICByZXR1cm4gc3ZnO1xyXG59O1xyXG5cclxuY29uc3QgY3JlYXRlTlMgPSAoaHJlZikgPT4ge1xyXG4gIGNvbnN0IHhsaW5rID0gaHJlZi5zcGxpdCgnIycpO1xyXG4gIGNvbnN0IHVzZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnROUygnaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnLCAndXNlJyk7XHJcbiAgZXh0cmFBdHQuYWRkQXR0cmlidXRlcyh1c2UsIGZhbHNlLCBmYWxzZSwgJ2hyZWYnLCBgJHtocmVmfWApO1xyXG4gIHVzZS5jbGFzc0xpc3QuYWRkKGAke3hsaW5rWzFdfS11c2VgKTtcclxuICBjb25zdCBzdmcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50TlMoJ2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJywgJ3N2ZycpO1xyXG4gIHN2Zy5hcHBlbmRDaGlsZCh1c2UpO1xyXG4gIHN2Zy5jbGFzc0xpc3QuYWRkKHhsaW5rWzFdKTtcclxuICByZXR1cm4gc3ZnO1xyXG59O1xyXG5cclxuZXhwb3J0IHtcclxuICBjcmVhdGVTdmcsXHJcbiAgY3JlYXRlTlMsXHJcbn07XHJcbiIsImltcG9ydCBlbGVtR2VuIGZyb20gJy4vZWxlbWVudEdlbmVyYXRvck1vZC5qcyc7XG5pbXBvcnQgZXh0cmFBdHQgZnJvbSAnLi9lbGVtZW50RXh0cmFBdHRyTW9kLmpzJztcblxuY29uc3QgY3JlYXRlVGV4dEFyZWEgPSAobGVuZ3RoID0gZmFsc2UsIGNsYXNzZXMgPSBmYWxzZSxcbiAgdGV4dENvbnRlbnQgPSBmYWxzZSwgaW5uZXJDaGlsZCA9IGZhbHNlKSA9PiB7XG4gIGNvbnN0IHRleHRBcmVhID0gZWxlbUdlbi5jcmVhdGVFbGVtZW50RGVmYXVsdCgndGV4dGFyZWEnLCBjbGFzc2VzLCB0ZXh0Q29udGVudCwgaW5uZXJDaGlsZCk7XG4gIGlmIChsZW5ndGgpIGV4dHJhQXR0LmFkZEF0dHJpYnV0ZXModGV4dEFyZWEsIGZhbHNlLCBmYWxzZSwgJ21heGxlbmd0aCcsIGxlbmd0aCk7XG4gIHRleHRBcmVhLnNldEF0dHJpYnV0ZSgnc3BlbGxjaGVjaycsICd0cnVlJyk7XG4gIHJldHVybiB0ZXh0QXJlYTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgY3JlYXRlVGV4dEFyZWEsXG59OyIsIi8qKlxyXG4gKiBGdW5jdGlvbiB0byBhZGQgY2xhc3Mgb3IgY2xhc3NlcyB0byBIVE1MIEVsZW1lbnRcclxuICogQHBhcmFtIHtIVE1MRWxlbWVudH0gZWxlbSBIVE1MIEVsZW1lbnQgdG8gYmUgbW9kaWZpZWQuXHJcbiAqIEBwYXJhbSB7U3RyaW5nfSBjbGFzc2VzIFN0cmluZyBvciBBcnJheSBvZiBTdHJpbmcgdG8gYmUgYWRkZWQuXHJcbiAqIEByZXR1cm5zIHtIVE1MRWxlbWVudH0gUmV0dXJucyBIVE1MIGVsZW1lbnQgd2l0aCBjaG9zZW4gY2xhc3Nlcy5cclxuICovXHJcbmNvbnN0IGFkZENsYXNzID0gKGVsZW0sIGNsYXNzZXMpID0+IHtcclxuICBpZiAoKHR5cGVvZiBjbGFzc2VzKSA9PT0gJ3N0cmluZycpIGVsZW0uY2xhc3NMaXN0LmFkZChgJHtjbGFzc2VzfWApO1xyXG4gIGVsc2UgaWYgKCh0eXBlb2YgY2xhc3NlcykgPT09ICdvYmplY3QnKSBjbGFzc2VzLmZvckVhY2goKGNsYXNzMCkgPT4gZWxlbS5jbGFzc0xpc3QuYWRkKGAke2NsYXNzMH1gKSk7XHJcbiAgcmV0dXJuIGVsZW07XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCB7XHJcbiAgYWRkQ2xhc3MsXHJcbn07IiwiLyoqXHJcbiAqIEZ1bmN0aW9uIHRvIGFkZCBkYXRhc2V0IG9yIGFwcGVuZCBjaGlsZHMgdG8gSFRNTCBFbGVtZW50XHJcbiAqIEBwYXJhbSB7SFRNTEVsZW1lbnR9IGVsZW0gSFRNTCBFbGVtZW50IHRvIGJlIG1vZGlmaWVkLlxyXG4gKiBAcGFyYW0ge3N0cmluZ30gZGF0YSBrZXkgb2YgZGF0YXNldCBrZXktdmFsdWUgcHJvcGVydHkgdG8gYmUgYWRkZWRcclxuICogQHBhcmFtIHtzdHJpbmd9IGluZGV4PTAgdmFsdWUgb2YgZGF0YXNldCBrZXktdmFsdWUgcHJvcGVydHkgdG8gYmUgYWRkZWRcclxuICogQHJldHVybnMge0hUTUxFbGVtZW50fSBSZXR1cm5zIEhUTUwgZWxlbWVudCB3aXRoIGNob3NlbiBhdHRyaWJ1dGVzXHJcbiAqL1xyXG5jb25zdCBhZGRBdHRyaWJ1dGVzID0gKGVsZW0sXHJcbiAgZGF0YSA9IGZhbHNlLCBpbmRleCA9IDAsIGF0dHJpYnV0ZXMgPSBmYWxzZSwgdmFsdWUgPSBmYWxzZSkgPT4ge1xyXG4gIGlmIChkYXRhKSBlbGVtLnNldEF0dHJpYnV0ZShgZGF0YS0ke2RhdGF9YCwgaW5kZXgpO1xyXG4gIGlmIChhdHRyaWJ1dGVzKSBlbGVtLnNldEF0dHJpYnV0ZShhdHRyaWJ1dGVzLCB2YWx1ZSk7XHJcbiAgcmV0dXJuIGVsZW07XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCB7XHJcbiAgYWRkQXR0cmlidXRlcyxcclxufTsiLCJpbXBvcnQgYWRkQ2xhc3MgZnJvbSAnLi9lbGVtZW50QWRkQ2xhc3NNb2QuanMnO1xyXG5cclxuLyoqXHJcbiAqIEZ1bmN0aW9uIHRvIGNyZWF0ZSBIVE1MIGVsZW1lbnQgdXNpbmcgdGFnIG5hbWVzLlxyXG4gKiBDbGFzc2VzIGFuZCB0ZXh0IGNvbnRlbnQgY2FuIGJlIGFkZGVkIGFzIGVsZW1lbnQgaXMgY3JlYXRlLlxyXG4gKiBAcGFyYW0ge3N0cmluZ30gZWxlbSBUYWcgbmFtZSBvZiB0aGUgZWxlbWVudCB0byBiZSBjcmVhdGVkLiBFeGFtcGxlOiBgZGl2LCBwLCBzZWN0aW9uYFxyXG4gKiBAcGFyYW0ge3N0cmluZ30gY2xhc3NlcyBOYW1lIG9mIGNsYXNzIG9yIGNsYXNzZXMgdG8gYWRkLiBTdHJpbmcsIGFycmF5IG9mIHN0cmluZyBzaG91bGQgYmUgdXNlZC5cclxuICogSWYgbm8gY2xhc3MgaXMgd2FudGVkLCBmYWxzZSBzaG91bGQgYmUgdXNlLk9wdGlvbmFsIFBhcmFtZW50ZXIuXHJcbiAqIEBwYXJhbSB7U3RyaW5nfSB0ZXh0Q29udGV4dCBUZXh0IHRvIGJlIGFkZGVkIGFzIHRleHQgY29udGVudCB0byBIVE1MIGVsZW1lbnQuXHJcbiAqIE9wdGlvbiBwYXJhbWV0ZXIuXHJcbiAqIEBwYXJhbSB7SFRNTEVsZW1lbnR9IGlubmVyQ2hpbGQgSFRNTCBFbGVtZW50IHRvIGJlIGFwcGVuZGVkXHJcbiAqIEByZXR1cm5zIHtIVE1MRWxlbWVudH0gUmV0dXJucyBIVE1MIGVsZW1lbnQgY2hvc2VuIHdpdGggc2V0IGF0dHJpYnV0ZXMuXHJcbiAqL1xyXG5jb25zdCBjcmVhdGVFbGVtZW50RGVmYXVsdCA9IChlbGVtLCBjbGFzc2VzID0gZmFsc2UsIHRleHRDb250ZW50ID0gZmFsc2UsIGlubmVyQ2hpbGQgPSBmYWxzZSkgPT4ge1xyXG4gIGNvbnN0IGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KGVsZW0pO1xyXG4gIGFkZENsYXNzLmFkZENsYXNzKGVsZW1lbnQsIGNsYXNzZXMpO1xyXG4gIGlmICh0ZXh0Q29udGVudCkgZWxlbWVudC50ZXh0Q29udGVudCA9IHRleHRDb250ZW50O1xyXG4gIGlmIChpbm5lckNoaWxkKSBlbGVtZW50LmFwcGVuZENoaWxkKGlubmVyQ2hpbGQpO1xyXG4gIHJldHVybiBlbGVtZW50O1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQge1xyXG4gIGNyZWF0ZUVsZW1lbnREZWZhdWx0LFxyXG59OyJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==