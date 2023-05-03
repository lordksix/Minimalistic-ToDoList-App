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
___CSS_LOADER_EXPORT___.push([module.id, ":root {\r\n  --svg-side: clamp(16px, (100vw - 320px) * 1000, clamp(20px, (100vw - 640px) * 1000, clamp(25px, (100vw - 1280px) * 1000, 30px)));\r\n  --font-size: calc(var(--svg-side) * 0.8);\r\n  --app-row-block-pad: 10px;\r\n  --app-row-height: calc(var(--svg-side) + 2 * var(--app-row-block-pad));\r\n}\r\n\r\n* {\r\n  padding: 0;\r\n  margin: 0;\r\n  box-sizing: border-box;\r\n}\r\n\r\nul,\r\nli {\r\n  list-style-type: none;\r\n}\r\n\r\nbody {\r\n  display: flex;\r\n  flex-flow: column;\r\n  align-items: center;\r\n  padding-block: 40px;\r\n  gap: 30px;\r\n}\r\n\r\n.app-container {\r\n  display: flex;\r\n  flex-flow: column;\r\n  align-items: center;\r\n  z-index: 1;\r\n  background-color: aliceblue;\r\n  border-radius: 10px;\r\n  box-shadow: 0 0 4px 4px cadetblue;\r\n}\r\n\r\n.app-text,\r\n.item {\r\n  font-size: var(--font-size);\r\n  display: flex;\r\n  align-items: center;\r\n}\r\n\r\n.app-title {\r\n  font-weight: bold;\r\n  font-size: calc(var(--font-size) * 1.2);\r\n}\r\n\r\n.app-interact {\r\n  display: flex;\r\n  justify-content: flex-start;\r\n  gap: 10px;\r\n}\r\n\r\n.app-row {\r\n  display: grid;\r\n  grid-template-columns: auto 1fr auto;\r\n  justify-content: space-between;\r\n  height: var(--app-row-height);\r\n  padding-block: var(--app-row-block-pad);\r\n  padding-inline: 15px;\r\n  column-gap: 20px;\r\n  min-width: min(80vw, 1200px);\r\n}\r\n\r\n.app-input {\r\n  display: grid;\r\n  grid-template-columns: 1fr auto;\r\n  justify-content: center;\r\n  height: var(--app-row-height);\r\n  padding-block: var(--app-row-block-pad);\r\n  padding-inline: 15px;\r\n  column-gap: 20px;\r\n  min-width: min(80vw, 1200px);\r\n}\r\n\r\ndiv a,\r\ndiv svg {\r\n  display: flex;\r\n  align-items: center;\r\n}\r\n\r\n.app-row svg {\r\n  height: var(--svg-side);\r\n  width: var(--svg-side);\r\n}\r\n\r\n.app-row textarea {\r\n  display: none;\r\n}\r\n\r\n.icon-trash-o {\r\n  display: none;\r\n}\r\n\r\n.app-container button,\r\n.app-container input {\r\n  border: none;\r\n  background-color: transparent;\r\n  font-size: var(--font-size);\r\n  height: var(--app-row-height);\r\n  padding-block: var(--app-row-block-pad);\r\n}\r\n\r\n#newitem {\r\n  font-style: italic;\r\n  font-weight: lighter;\r\n  width: 100%;\r\n}\r\n\r\n.app-container input:focus {\r\n  outline: none;\r\n}\r\n\r\n#sumbit-newitem {\r\n  background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");\r\n  background-repeat: no-repeat;\r\n  background-position: center;\r\n  appearance: none;\r\n  cursor: pointer;\r\n  width: 40px;\r\n  height: 50px;\r\n}\r\n\r\n.app-container .clr-btn {\r\n  width: 100%;\r\n  color: darkslategrey;\r\n  background-color: rgb(229, 240, 250);\r\n  border-bottom-left-radius: 10px;\r\n  border-bottom-right-radius: 10px;\r\n}\r\n\r\n.clr-btn:hover {\r\n  text-decoration: underline;\r\n  color: black;\r\n}\r\n\r\n.app-container .item-chk {\r\n  border: 2px solid #c1c1c3;\r\n  cursor: pointer;\r\n  color: transparent;\r\n  height: var(--svg-side);\r\n  width: var(--svg-side);\r\n  border-radius: 2px;\r\n  display: flex;\r\n  align-items: center;\r\n}\r\n\r\n.icon-more-vert {\r\n  cursor: move;\r\n}\r\n\r\n.icon-check {\r\n  display: none;\r\n}\r\n\r\n.completed .icon-check {\r\n  display: inline;\r\n}\r\n\r\n.completed .app-text {\r\n  text-decoration: line-through;\r\n}\r\n", "",{"version":3,"sources":["webpack://./src/index.css"],"names":[],"mappings":"AAAA;EACE,gIAAgI;EAChI,wCAAwC;EACxC,yBAAyB;EACzB,sEAAsE;AACxE;;AAEA;EACE,UAAU;EACV,SAAS;EACT,sBAAsB;AACxB;;AAEA;;EAEE,qBAAqB;AACvB;;AAEA;EACE,aAAa;EACb,iBAAiB;EACjB,mBAAmB;EACnB,mBAAmB;EACnB,SAAS;AACX;;AAEA;EACE,aAAa;EACb,iBAAiB;EACjB,mBAAmB;EACnB,UAAU;EACV,2BAA2B;EAC3B,mBAAmB;EACnB,iCAAiC;AACnC;;AAEA;;EAEE,2BAA2B;EAC3B,aAAa;EACb,mBAAmB;AACrB;;AAEA;EACE,iBAAiB;EACjB,uCAAuC;AACzC;;AAEA;EACE,aAAa;EACb,2BAA2B;EAC3B,SAAS;AACX;;AAEA;EACE,aAAa;EACb,oCAAoC;EACpC,8BAA8B;EAC9B,6BAA6B;EAC7B,uCAAuC;EACvC,oBAAoB;EACpB,gBAAgB;EAChB,4BAA4B;AAC9B;;AAEA;EACE,aAAa;EACb,+BAA+B;EAC/B,uBAAuB;EACvB,6BAA6B;EAC7B,uCAAuC;EACvC,oBAAoB;EACpB,gBAAgB;EAChB,4BAA4B;AAC9B;;AAEA;;EAEE,aAAa;EACb,mBAAmB;AACrB;;AAEA;EACE,uBAAuB;EACvB,sBAAsB;AACxB;;AAEA;EACE,aAAa;AACf;;AAEA;EACE,aAAa;AACf;;AAEA;;EAEE,YAAY;EACZ,6BAA6B;EAC7B,2BAA2B;EAC3B,6BAA6B;EAC7B,uCAAuC;AACzC;;AAEA;EACE,kBAAkB;EAClB,oBAAoB;EACpB,WAAW;AACb;;AAEA;EACE,aAAa;AACf;;AAEA;EACE,yDAAmD;EACnD,4BAA4B;EAC5B,2BAA2B;EAC3B,gBAAgB;EAChB,eAAe;EACf,WAAW;EACX,YAAY;AACd;;AAEA;EACE,WAAW;EACX,oBAAoB;EACpB,oCAAoC;EACpC,+BAA+B;EAC/B,gCAAgC;AAClC;;AAEA;EACE,0BAA0B;EAC1B,YAAY;AACd;;AAEA;EACE,yBAAyB;EACzB,eAAe;EACf,kBAAkB;EAClB,uBAAuB;EACvB,sBAAsB;EACtB,kBAAkB;EAClB,aAAa;EACb,mBAAmB;AACrB;;AAEA;EACE,YAAY;AACd;;AAEA;EACE,aAAa;AACf;;AAEA;EACE,eAAe;AACjB;;AAEA;EACE,6BAA6B;AAC/B","sourcesContent":[":root {\r\n  --svg-side: clamp(16px, (100vw - 320px) * 1000, clamp(20px, (100vw - 640px) * 1000, clamp(25px, (100vw - 1280px) * 1000, 30px)));\r\n  --font-size: calc(var(--svg-side) * 0.8);\r\n  --app-row-block-pad: 10px;\r\n  --app-row-height: calc(var(--svg-side) + 2 * var(--app-row-block-pad));\r\n}\r\n\r\n* {\r\n  padding: 0;\r\n  margin: 0;\r\n  box-sizing: border-box;\r\n}\r\n\r\nul,\r\nli {\r\n  list-style-type: none;\r\n}\r\n\r\nbody {\r\n  display: flex;\r\n  flex-flow: column;\r\n  align-items: center;\r\n  padding-block: 40px;\r\n  gap: 30px;\r\n}\r\n\r\n.app-container {\r\n  display: flex;\r\n  flex-flow: column;\r\n  align-items: center;\r\n  z-index: 1;\r\n  background-color: aliceblue;\r\n  border-radius: 10px;\r\n  box-shadow: 0 0 4px 4px cadetblue;\r\n}\r\n\r\n.app-text,\r\n.item {\r\n  font-size: var(--font-size);\r\n  display: flex;\r\n  align-items: center;\r\n}\r\n\r\n.app-title {\r\n  font-weight: bold;\r\n  font-size: calc(var(--font-size) * 1.2);\r\n}\r\n\r\n.app-interact {\r\n  display: flex;\r\n  justify-content: flex-start;\r\n  gap: 10px;\r\n}\r\n\r\n.app-row {\r\n  display: grid;\r\n  grid-template-columns: auto 1fr auto;\r\n  justify-content: space-between;\r\n  height: var(--app-row-height);\r\n  padding-block: var(--app-row-block-pad);\r\n  padding-inline: 15px;\r\n  column-gap: 20px;\r\n  min-width: min(80vw, 1200px);\r\n}\r\n\r\n.app-input {\r\n  display: grid;\r\n  grid-template-columns: 1fr auto;\r\n  justify-content: center;\r\n  height: var(--app-row-height);\r\n  padding-block: var(--app-row-block-pad);\r\n  padding-inline: 15px;\r\n  column-gap: 20px;\r\n  min-width: min(80vw, 1200px);\r\n}\r\n\r\ndiv a,\r\ndiv svg {\r\n  display: flex;\r\n  align-items: center;\r\n}\r\n\r\n.app-row svg {\r\n  height: var(--svg-side);\r\n  width: var(--svg-side);\r\n}\r\n\r\n.app-row textarea {\r\n  display: none;\r\n}\r\n\r\n.icon-trash-o {\r\n  display: none;\r\n}\r\n\r\n.app-container button,\r\n.app-container input {\r\n  border: none;\r\n  background-color: transparent;\r\n  font-size: var(--font-size);\r\n  height: var(--app-row-height);\r\n  padding-block: var(--app-row-block-pad);\r\n}\r\n\r\n#newitem {\r\n  font-style: italic;\r\n  font-weight: lighter;\r\n  width: 100%;\r\n}\r\n\r\n.app-container input:focus {\r\n  outline: none;\r\n}\r\n\r\n#sumbit-newitem {\r\n  background-image: url('./asset/resource/enter.png');\r\n  background-repeat: no-repeat;\r\n  background-position: center;\r\n  appearance: none;\r\n  cursor: pointer;\r\n  width: 40px;\r\n  height: 50px;\r\n}\r\n\r\n.app-container .clr-btn {\r\n  width: 100%;\r\n  color: darkslategrey;\r\n  background-color: rgb(229, 240, 250);\r\n  border-bottom-left-radius: 10px;\r\n  border-bottom-right-radius: 10px;\r\n}\r\n\r\n.clr-btn:hover {\r\n  text-decoration: underline;\r\n  color: black;\r\n}\r\n\r\n.app-container .item-chk {\r\n  border: 2px solid #c1c1c3;\r\n  cursor: pointer;\r\n  color: transparent;\r\n  height: var(--svg-side);\r\n  width: var(--svg-side);\r\n  border-radius: 2px;\r\n  display: flex;\r\n  align-items: center;\r\n}\r\n\r\n.icon-more-vert {\r\n  cursor: move;\r\n}\r\n\r\n.icon-check {\r\n  display: none;\r\n}\r\n\r\n.completed .icon-check {\r\n  display: inline;\r\n}\r\n\r\n.completed .app-text {\r\n  text-decoration: line-through;\r\n}\r\n"],"sourceRoot":""}]);
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
/* harmony import */ var _modules_ListItemMod_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/ListItemMod.js */ "./src/modules/ListItemMod.js");
/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.css */ "./src/index.css");
/* harmony import */ var _asset_resource_icons_svg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./asset/resource/icons.svg */ "./src/asset/resource/icons.svg");




const item1 = new _modules_ListItemMod_js__WEBPACK_IMPORTED_MODULE_0__.ListItem('Item1', 1);
const item2 = new _modules_ListItemMod_js__WEBPACK_IMPORTED_MODULE_0__.ListItem('Item2', 2, true);
const item3 = new _modules_ListItemMod_js__WEBPACK_IMPORTED_MODULE_0__.ListItem('Item3', 3);
const item4 = new _modules_ListItemMod_js__WEBPACK_IMPORTED_MODULE_0__.ListItem('Item4', 4, true);
const item5 = new _modules_ListItemMod_js__WEBPACK_IMPORTED_MODULE_0__.ListItem('Item5', 5);

const arrayItems = [item1, item2, item3, item4, item5].sort((a, b) => a.index - b.index);
const listUl = document.querySelector('#add-items');

const classListIncomp = ['app-row', 'app-item'];
const classListComp = ['app-row', 'app-item', 'completed'];
const classBtn = 'item-chk';
const classDivText = 'item';
const classText = 'app-text';
const xlinkHref = [`${_asset_resource_icons_svg__WEBPACK_IMPORTED_MODULE_2__}#icon-check`, './asset/resource/icons.svg#icon-more-vert',
  './asset/resource/icons.svg#icon-trash-o'];

const listSec = document.querySelector('.list');

const createItemLi = (item) => {
  const classList = item.isCompleted ? classListComp : classListIncomp;
  const element = (0,_modules_ListItemMod_js__WEBPACK_IMPORTED_MODULE_0__.createListItem)(item.index, xlinkHref, item.descrip, classList,
    classBtn, classDivText, classText);
  return element;
};

const toggleCompleted = (e) => {
  e.preventDefault();
  if (e.target.classList.contains('item-chk')) {
    const listItem = e.target.parentNode;
    listItem.classList.toggle('completed');
  } else if (e.target.classList.contains('icon-check')) {
    const listItem = e.target.parentNode.parentNode;
    listItem.classList.toggle('completed');
  } else if (e.target.classList.contains('icon-check-use')) {
    const listItem = e.target.parentNode.parentNode.parentNode;
    listItem.classList.toggle('completed');
  }
};

arrayItems.forEach((item) => {
  listUl.appendChild(createItemLi(item));
});

listSec.addEventListener('click', toggleCompleted);

/***/ }),

/***/ "./src/modules/ListItemMod.js":
/*!************************************!*\
  !*** ./src/modules/ListItemMod.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ListItem": () => (/* binding */ ListItem),
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
  _elementExtraAttrMod_js__WEBPACK_IMPORTED_MODULE_1__["default"].addAttributes(chkBtn, 'index', index, 'tabindex', '0');
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
  return listItem;
};

/**
 * Class of List Iteam to be instatiated with 3 properties
 * @param {string} descrip Description of List Item
 * @param {boolean} isCompleted Completion status of List Item
 * @param {number} index Position of List Iteam
 * @returns {object} New class with title and author properties
 */
class ListItem {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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RCxjQUFjLG9GQUE0QjtBQUMxQztBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEVBQUUsNkVBQXNCLCtCQUErQixLQUFLO0FBQzVELHVCQUF1QixTQUFTO0FBQ2hDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBS0U7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDekI2QztBQUNDOztBQUVoRDtBQUNBO0FBQ0EsbUJBQW1CLG9GQUE0QjtBQUMvQyxjQUFjLDZFQUFzQjtBQUNwQztBQUNBO0FBQ0E7O0FBRUEsaUVBQWU7QUFDZjtBQUNBLENBQUM7Ozs7Ozs7Ozs7Ozs7O0FDYkQ7QUFDQTtBQUNBLFdBQVcsYUFBYTtBQUN4QixXQUFXLFFBQVE7QUFDbkIsYUFBYSxhQUFhO0FBQzFCO0FBQ0E7QUFDQSwyREFBMkQsUUFBUTtBQUNuRSw0RkFBNEYsT0FBTztBQUNuRztBQUNBOztBQUVBLGlFQUFlO0FBQ2Y7QUFDQSxDQUFDOzs7Ozs7Ozs7Ozs7OztBQ2REO0FBQ0E7QUFDQSxXQUFXLGFBQWE7QUFDeEIsV0FBVyxRQUFRO0FBQ25CLFdBQVcsUUFBUTtBQUNuQixhQUFhLGFBQWE7QUFDMUI7QUFDQTtBQUNBO0FBQ0Esc0NBQXNDLEtBQUs7QUFDM0M7QUFDQTtBQUNBOztBQUVBLGlFQUFlO0FBQ2Y7QUFDQSxDQUFDOzs7Ozs7Ozs7Ozs7Ozs7QUNoQjhDOztBQUUvQztBQUNBO0FBQ0E7QUFDQSxXQUFXLFFBQVE7QUFDbkIsV0FBVyxRQUFRO0FBQ25CO0FBQ0EsV0FBVyxRQUFRO0FBQ25CO0FBQ0EsV0FBVyxhQUFhO0FBQ3hCLGFBQWEsYUFBYTtBQUMxQjtBQUNBO0FBQ0E7QUFDQSxFQUFFLHVFQUFpQjtBQUNuQjtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxpRUFBZTtBQUNmO0FBQ0EsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL21pbmltYWxpc3RpYy10b2RvbGlzdC1hcHAvLi9zcmMvaW5kZXguY3NzIiwid2VicGFjazovL21pbmltYWxpc3RpYy10b2RvbGlzdC1hcHAvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL21pbmltYWxpc3RpYy10b2RvbGlzdC1hcHAvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzIiwid2VicGFjazovL21pbmltYWxpc3RpYy10b2RvbGlzdC1hcHAvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly9taW5pbWFsaXN0aWMtdG9kb2xpc3QtYXBwLy4vc3JjL2luZGV4LmNzcz9jZmU0Iiwid2VicGFjazovL21pbmltYWxpc3RpYy10b2RvbGlzdC1hcHAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vbWluaW1hbGlzdGljLXRvZG9saXN0LWFwcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vbWluaW1hbGlzdGljLXRvZG9saXN0LWFwcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly9taW5pbWFsaXN0aWMtdG9kb2xpc3QtYXBwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL21pbmltYWxpc3RpYy10b2RvbGlzdC1hcHAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly9taW5pbWFsaXN0aWMtdG9kb2xpc3QtYXBwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vbWluaW1hbGlzdGljLXRvZG9saXN0LWFwcC8uL3NyYy9pbmRleC5qcyIsIndlYnBhY2s6Ly9taW5pbWFsaXN0aWMtdG9kb2xpc3QtYXBwLy4vc3JjL21vZHVsZXMvTGlzdEl0ZW1Nb2QuanMiLCJ3ZWJwYWNrOi8vbWluaW1hbGlzdGljLXRvZG9saXN0LWFwcC8uL3NyYy9tb2R1bGVzL2J1dHRvbkdlbmVyYXRvck1vZC5qcyIsIndlYnBhY2s6Ly9taW5pbWFsaXN0aWMtdG9kb2xpc3QtYXBwLy4vc3JjL21vZHVsZXMvY3JlYXRlTGFiZWwuanMiLCJ3ZWJwYWNrOi8vbWluaW1hbGlzdGljLXRvZG9saXN0LWFwcC8uL3NyYy9tb2R1bGVzL2NyZWF0ZVN2Zy5qcyIsIndlYnBhY2s6Ly9taW5pbWFsaXN0aWMtdG9kb2xpc3QtYXBwLy4vc3JjL21vZHVsZXMvY3JlYXRlVGV4dEFyZWEuanMiLCJ3ZWJwYWNrOi8vbWluaW1hbGlzdGljLXRvZG9saXN0LWFwcC8uL3NyYy9tb2R1bGVzL2VsZW1lbnRBZGRDbGFzc01vZC5qcyIsIndlYnBhY2s6Ly9taW5pbWFsaXN0aWMtdG9kb2xpc3QtYXBwLy4vc3JjL21vZHVsZXMvZWxlbWVudEV4dHJhQXR0ck1vZC5qcyIsIndlYnBhY2s6Ly9taW5pbWFsaXN0aWMtdG9kb2xpc3QtYXBwLy4vc3JjL21vZHVsZXMvZWxlbWVudEdlbmVyYXRvck1vZC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18gPSBuZXcgVVJMKFwiLi9hc3NldC9yZXNvdXJjZS9lbnRlci5wbmdcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCI6cm9vdCB7XFxyXFxuICAtLXN2Zy1zaWRlOiBjbGFtcCgxNnB4LCAoMTAwdncgLSAzMjBweCkgKiAxMDAwLCBjbGFtcCgyMHB4LCAoMTAwdncgLSA2NDBweCkgKiAxMDAwLCBjbGFtcCgyNXB4LCAoMTAwdncgLSAxMjgwcHgpICogMTAwMCwgMzBweCkpKTtcXHJcXG4gIC0tZm9udC1zaXplOiBjYWxjKHZhcigtLXN2Zy1zaWRlKSAqIDAuOCk7XFxyXFxuICAtLWFwcC1yb3ctYmxvY2stcGFkOiAxMHB4O1xcclxcbiAgLS1hcHAtcm93LWhlaWdodDogY2FsYyh2YXIoLS1zdmctc2lkZSkgKyAyICogdmFyKC0tYXBwLXJvdy1ibG9jay1wYWQpKTtcXHJcXG59XFxyXFxuXFxyXFxuKiB7XFxyXFxuICBwYWRkaW5nOiAwO1xcclxcbiAgbWFyZ2luOiAwO1xcclxcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXHJcXG59XFxyXFxuXFxyXFxudWwsXFxyXFxubGkge1xcclxcbiAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xcclxcbn1cXHJcXG5cXHJcXG5ib2R5IHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LWZsb3c6IGNvbHVtbjtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICBwYWRkaW5nLWJsb2NrOiA0MHB4O1xcclxcbiAgZ2FwOiAzMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4uYXBwLWNvbnRhaW5lciB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC1mbG93OiBjb2x1bW47XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgei1pbmRleDogMTtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IGFsaWNlYmx1ZTtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxyXFxuICBib3gtc2hhZG93OiAwIDAgNHB4IDRweCBjYWRldGJsdWU7XFxyXFxufVxcclxcblxcclxcbi5hcHAtdGV4dCxcXHJcXG4uaXRlbSB7XFxyXFxuICBmb250LXNpemU6IHZhcigtLWZvbnQtc2l6ZSk7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLmFwcC10aXRsZSB7XFxyXFxuICBmb250LXdlaWdodDogYm9sZDtcXHJcXG4gIGZvbnQtc2l6ZTogY2FsYyh2YXIoLS1mb250LXNpemUpICogMS4yKTtcXHJcXG59XFxyXFxuXFxyXFxuLmFwcC1pbnRlcmFjdCB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xcclxcbiAgZ2FwOiAxMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4uYXBwLXJvdyB7XFxyXFxuICBkaXNwbGF5OiBncmlkO1xcclxcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiBhdXRvIDFmciBhdXRvO1xcclxcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcclxcbiAgaGVpZ2h0OiB2YXIoLS1hcHAtcm93LWhlaWdodCk7XFxyXFxuICBwYWRkaW5nLWJsb2NrOiB2YXIoLS1hcHAtcm93LWJsb2NrLXBhZCk7XFxyXFxuICBwYWRkaW5nLWlubGluZTogMTVweDtcXHJcXG4gIGNvbHVtbi1nYXA6IDIwcHg7XFxyXFxuICBtaW4td2lkdGg6IG1pbig4MHZ3LCAxMjAwcHgpO1xcclxcbn1cXHJcXG5cXHJcXG4uYXBwLWlucHV0IHtcXHJcXG4gIGRpc3BsYXk6IGdyaWQ7XFxyXFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciBhdXRvO1xcclxcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICBoZWlnaHQ6IHZhcigtLWFwcC1yb3ctaGVpZ2h0KTtcXHJcXG4gIHBhZGRpbmctYmxvY2s6IHZhcigtLWFwcC1yb3ctYmxvY2stcGFkKTtcXHJcXG4gIHBhZGRpbmctaW5saW5lOiAxNXB4O1xcclxcbiAgY29sdW1uLWdhcDogMjBweDtcXHJcXG4gIG1pbi13aWR0aDogbWluKDgwdncsIDEyMDBweCk7XFxyXFxufVxcclxcblxcclxcbmRpdiBhLFxcclxcbmRpdiBzdmcge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxufVxcclxcblxcclxcbi5hcHAtcm93IHN2ZyB7XFxyXFxuICBoZWlnaHQ6IHZhcigtLXN2Zy1zaWRlKTtcXHJcXG4gIHdpZHRoOiB2YXIoLS1zdmctc2lkZSk7XFxyXFxufVxcclxcblxcclxcbi5hcHAtcm93IHRleHRhcmVhIHtcXHJcXG4gIGRpc3BsYXk6IG5vbmU7XFxyXFxufVxcclxcblxcclxcbi5pY29uLXRyYXNoLW8ge1xcclxcbiAgZGlzcGxheTogbm9uZTtcXHJcXG59XFxyXFxuXFxyXFxuLmFwcC1jb250YWluZXIgYnV0dG9uLFxcclxcbi5hcHAtY29udGFpbmVyIGlucHV0IHtcXHJcXG4gIGJvcmRlcjogbm9uZTtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xcclxcbiAgZm9udC1zaXplOiB2YXIoLS1mb250LXNpemUpO1xcclxcbiAgaGVpZ2h0OiB2YXIoLS1hcHAtcm93LWhlaWdodCk7XFxyXFxuICBwYWRkaW5nLWJsb2NrOiB2YXIoLS1hcHAtcm93LWJsb2NrLXBhZCk7XFxyXFxufVxcclxcblxcclxcbiNuZXdpdGVtIHtcXHJcXG4gIGZvbnQtc3R5bGU6IGl0YWxpYztcXHJcXG4gIGZvbnQtd2VpZ2h0OiBsaWdodGVyO1xcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxufVxcclxcblxcclxcbi5hcHAtY29udGFpbmVyIGlucHV0OmZvY3VzIHtcXHJcXG4gIG91dGxpbmU6IG5vbmU7XFxyXFxufVxcclxcblxcclxcbiNzdW1iaXQtbmV3aXRlbSB7XFxyXFxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fICsgXCIpO1xcclxcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcXHJcXG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcXHJcXG4gIGFwcGVhcmFuY2U6IG5vbmU7XFxyXFxuICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxuICB3aWR0aDogNDBweDtcXHJcXG4gIGhlaWdodDogNTBweDtcXHJcXG59XFxyXFxuXFxyXFxuLmFwcC1jb250YWluZXIgLmNsci1idG4ge1xcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxuICBjb2xvcjogZGFya3NsYXRlZ3JleTtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigyMjksIDI0MCwgMjUwKTtcXHJcXG4gIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDEwcHg7XFxyXFxuICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogMTBweDtcXHJcXG59XFxyXFxuXFxyXFxuLmNsci1idG46aG92ZXIge1xcclxcbiAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XFxyXFxuICBjb2xvcjogYmxhY2s7XFxyXFxufVxcclxcblxcclxcbi5hcHAtY29udGFpbmVyIC5pdGVtLWNoayB7XFxyXFxuICBib3JkZXI6IDJweCBzb2xpZCAjYzFjMWMzO1xcclxcbiAgY3Vyc29yOiBwb2ludGVyO1xcclxcbiAgY29sb3I6IHRyYW5zcGFyZW50O1xcclxcbiAgaGVpZ2h0OiB2YXIoLS1zdmctc2lkZSk7XFxyXFxuICB3aWR0aDogdmFyKC0tc3ZnLXNpZGUpO1xcclxcbiAgYm9yZGVyLXJhZGl1czogMnB4O1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxufVxcclxcblxcclxcbi5pY29uLW1vcmUtdmVydCB7XFxyXFxuICBjdXJzb3I6IG1vdmU7XFxyXFxufVxcclxcblxcclxcbi5pY29uLWNoZWNrIHtcXHJcXG4gIGRpc3BsYXk6IG5vbmU7XFxyXFxufVxcclxcblxcclxcbi5jb21wbGV0ZWQgLmljb24tY2hlY2sge1xcclxcbiAgZGlzcGxheTogaW5saW5lO1xcclxcbn1cXHJcXG5cXHJcXG4uY29tcGxldGVkIC5hcHAtdGV4dCB7XFxyXFxuICB0ZXh0LWRlY29yYXRpb246IGxpbmUtdGhyb3VnaDtcXHJcXG59XFxyXFxuXCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL2luZGV4LmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtFQUNFLGdJQUFnSTtFQUNoSSx3Q0FBd0M7RUFDeEMseUJBQXlCO0VBQ3pCLHNFQUFzRTtBQUN4RTs7QUFFQTtFQUNFLFVBQVU7RUFDVixTQUFTO0VBQ1Qsc0JBQXNCO0FBQ3hCOztBQUVBOztFQUVFLHFCQUFxQjtBQUN2Qjs7QUFFQTtFQUNFLGFBQWE7RUFDYixpQkFBaUI7RUFDakIsbUJBQW1CO0VBQ25CLG1CQUFtQjtFQUNuQixTQUFTO0FBQ1g7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsaUJBQWlCO0VBQ2pCLG1CQUFtQjtFQUNuQixVQUFVO0VBQ1YsMkJBQTJCO0VBQzNCLG1CQUFtQjtFQUNuQixpQ0FBaUM7QUFDbkM7O0FBRUE7O0VBRUUsMkJBQTJCO0VBQzNCLGFBQWE7RUFDYixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxpQkFBaUI7RUFDakIsdUNBQXVDO0FBQ3pDOztBQUVBO0VBQ0UsYUFBYTtFQUNiLDJCQUEyQjtFQUMzQixTQUFTO0FBQ1g7O0FBRUE7RUFDRSxhQUFhO0VBQ2Isb0NBQW9DO0VBQ3BDLDhCQUE4QjtFQUM5Qiw2QkFBNkI7RUFDN0IsdUNBQXVDO0VBQ3ZDLG9CQUFvQjtFQUNwQixnQkFBZ0I7RUFDaEIsNEJBQTRCO0FBQzlCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLCtCQUErQjtFQUMvQix1QkFBdUI7RUFDdkIsNkJBQTZCO0VBQzdCLHVDQUF1QztFQUN2QyxvQkFBb0I7RUFDcEIsZ0JBQWdCO0VBQ2hCLDRCQUE0QjtBQUM5Qjs7QUFFQTs7RUFFRSxhQUFhO0VBQ2IsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsdUJBQXVCO0VBQ3ZCLHNCQUFzQjtBQUN4Qjs7QUFFQTtFQUNFLGFBQWE7QUFDZjs7QUFFQTtFQUNFLGFBQWE7QUFDZjs7QUFFQTs7RUFFRSxZQUFZO0VBQ1osNkJBQTZCO0VBQzdCLDJCQUEyQjtFQUMzQiw2QkFBNkI7RUFDN0IsdUNBQXVDO0FBQ3pDOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLG9CQUFvQjtFQUNwQixXQUFXO0FBQ2I7O0FBRUE7RUFDRSxhQUFhO0FBQ2Y7O0FBRUE7RUFDRSx5REFBbUQ7RUFDbkQsNEJBQTRCO0VBQzVCLDJCQUEyQjtFQUMzQixnQkFBZ0I7RUFDaEIsZUFBZTtFQUNmLFdBQVc7RUFDWCxZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsb0JBQW9CO0VBQ3BCLG9DQUFvQztFQUNwQywrQkFBK0I7RUFDL0IsZ0NBQWdDO0FBQ2xDOztBQUVBO0VBQ0UsMEJBQTBCO0VBQzFCLFlBQVk7QUFDZDs7QUFFQTtFQUNFLHlCQUF5QjtFQUN6QixlQUFlO0VBQ2Ysa0JBQWtCO0VBQ2xCLHVCQUF1QjtFQUN2QixzQkFBc0I7RUFDdEIsa0JBQWtCO0VBQ2xCLGFBQWE7RUFDYixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxhQUFhO0FBQ2Y7O0FBRUE7RUFDRSxlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsNkJBQTZCO0FBQy9CXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIjpyb290IHtcXHJcXG4gIC0tc3ZnLXNpZGU6IGNsYW1wKDE2cHgsICgxMDB2dyAtIDMyMHB4KSAqIDEwMDAsIGNsYW1wKDIwcHgsICgxMDB2dyAtIDY0MHB4KSAqIDEwMDAsIGNsYW1wKDI1cHgsICgxMDB2dyAtIDEyODBweCkgKiAxMDAwLCAzMHB4KSkpO1xcclxcbiAgLS1mb250LXNpemU6IGNhbGModmFyKC0tc3ZnLXNpZGUpICogMC44KTtcXHJcXG4gIC0tYXBwLXJvdy1ibG9jay1wYWQ6IDEwcHg7XFxyXFxuICAtLWFwcC1yb3ctaGVpZ2h0OiBjYWxjKHZhcigtLXN2Zy1zaWRlKSArIDIgKiB2YXIoLS1hcHAtcm93LWJsb2NrLXBhZCkpO1xcclxcbn1cXHJcXG5cXHJcXG4qIHtcXHJcXG4gIHBhZGRpbmc6IDA7XFxyXFxuICBtYXJnaW46IDA7XFxyXFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcclxcbn1cXHJcXG5cXHJcXG51bCxcXHJcXG5saSB7XFxyXFxuICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XFxyXFxufVxcclxcblxcclxcbmJvZHkge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXgtZmxvdzogY29sdW1uO1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIHBhZGRpbmctYmxvY2s6IDQwcHg7XFxyXFxuICBnYXA6IDMwcHg7XFxyXFxufVxcclxcblxcclxcbi5hcHAtY29udGFpbmVyIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LWZsb3c6IGNvbHVtbjtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICB6LWluZGV4OiAxO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogYWxpY2VibHVlO1xcclxcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcXHJcXG4gIGJveC1zaGFkb3c6IDAgMCA0cHggNHB4IGNhZGV0Ymx1ZTtcXHJcXG59XFxyXFxuXFxyXFxuLmFwcC10ZXh0LFxcclxcbi5pdGVtIHtcXHJcXG4gIGZvbnQtc2l6ZTogdmFyKC0tZm9udC1zaXplKTtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbn1cXHJcXG5cXHJcXG4uYXBwLXRpdGxlIHtcXHJcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcclxcbiAgZm9udC1zaXplOiBjYWxjKHZhcigtLWZvbnQtc2l6ZSkgKiAxLjIpO1xcclxcbn1cXHJcXG5cXHJcXG4uYXBwLWludGVyYWN0IHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XFxyXFxuICBnYXA6IDEwcHg7XFxyXFxufVxcclxcblxcclxcbi5hcHAtcm93IHtcXHJcXG4gIGRpc3BsYXk6IGdyaWQ7XFxyXFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IGF1dG8gMWZyIGF1dG87XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxyXFxuICBoZWlnaHQ6IHZhcigtLWFwcC1yb3ctaGVpZ2h0KTtcXHJcXG4gIHBhZGRpbmctYmxvY2s6IHZhcigtLWFwcC1yb3ctYmxvY2stcGFkKTtcXHJcXG4gIHBhZGRpbmctaW5saW5lOiAxNXB4O1xcclxcbiAgY29sdW1uLWdhcDogMjBweDtcXHJcXG4gIG1pbi13aWR0aDogbWluKDgwdncsIDEyMDBweCk7XFxyXFxufVxcclxcblxcclxcbi5hcHAtaW5wdXQge1xcclxcbiAgZGlzcGxheTogZ3JpZDtcXHJcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIGF1dG87XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gIGhlaWdodDogdmFyKC0tYXBwLXJvdy1oZWlnaHQpO1xcclxcbiAgcGFkZGluZy1ibG9jazogdmFyKC0tYXBwLXJvdy1ibG9jay1wYWQpO1xcclxcbiAgcGFkZGluZy1pbmxpbmU6IDE1cHg7XFxyXFxuICBjb2x1bW4tZ2FwOiAyMHB4O1xcclxcbiAgbWluLXdpZHRoOiBtaW4oODB2dywgMTIwMHB4KTtcXHJcXG59XFxyXFxuXFxyXFxuZGl2IGEsXFxyXFxuZGl2IHN2ZyB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLmFwcC1yb3cgc3ZnIHtcXHJcXG4gIGhlaWdodDogdmFyKC0tc3ZnLXNpZGUpO1xcclxcbiAgd2lkdGg6IHZhcigtLXN2Zy1zaWRlKTtcXHJcXG59XFxyXFxuXFxyXFxuLmFwcC1yb3cgdGV4dGFyZWEge1xcclxcbiAgZGlzcGxheTogbm9uZTtcXHJcXG59XFxyXFxuXFxyXFxuLmljb24tdHJhc2gtbyB7XFxyXFxuICBkaXNwbGF5OiBub25lO1xcclxcbn1cXHJcXG5cXHJcXG4uYXBwLWNvbnRhaW5lciBidXR0b24sXFxyXFxuLmFwcC1jb250YWluZXIgaW5wdXQge1xcclxcbiAgYm9yZGVyOiBub25lO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxyXFxuICBmb250LXNpemU6IHZhcigtLWZvbnQtc2l6ZSk7XFxyXFxuICBoZWlnaHQ6IHZhcigtLWFwcC1yb3ctaGVpZ2h0KTtcXHJcXG4gIHBhZGRpbmctYmxvY2s6IHZhcigtLWFwcC1yb3ctYmxvY2stcGFkKTtcXHJcXG59XFxyXFxuXFxyXFxuI25ld2l0ZW0ge1xcclxcbiAgZm9udC1zdHlsZTogaXRhbGljO1xcclxcbiAgZm9udC13ZWlnaHQ6IGxpZ2h0ZXI7XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG59XFxyXFxuXFxyXFxuLmFwcC1jb250YWluZXIgaW5wdXQ6Zm9jdXMge1xcclxcbiAgb3V0bGluZTogbm9uZTtcXHJcXG59XFxyXFxuXFxyXFxuI3N1bWJpdC1uZXdpdGVtIHtcXHJcXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnLi9hc3NldC9yZXNvdXJjZS9lbnRlci5wbmcnKTtcXHJcXG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XFxyXFxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XFxyXFxuICBhcHBlYXJhbmNlOiBub25lO1xcclxcbiAgY3Vyc29yOiBwb2ludGVyO1xcclxcbiAgd2lkdGg6IDQwcHg7XFxyXFxuICBoZWlnaHQ6IDUwcHg7XFxyXFxufVxcclxcblxcclxcbi5hcHAtY29udGFpbmVyIC5jbHItYnRuIHtcXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbiAgY29sb3I6IGRhcmtzbGF0ZWdyZXk7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjI5LCAyNDAsIDI1MCk7XFxyXFxuICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiAxMHB4O1xcclxcbiAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDEwcHg7XFxyXFxufVxcclxcblxcclxcbi5jbHItYnRuOmhvdmVyIHtcXHJcXG4gIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xcclxcbiAgY29sb3I6IGJsYWNrO1xcclxcbn1cXHJcXG5cXHJcXG4uYXBwLWNvbnRhaW5lciAuaXRlbS1jaGsge1xcclxcbiAgYm9yZGVyOiAycHggc29saWQgI2MxYzFjMztcXHJcXG4gIGN1cnNvcjogcG9pbnRlcjtcXHJcXG4gIGNvbG9yOiB0cmFuc3BhcmVudDtcXHJcXG4gIGhlaWdodDogdmFyKC0tc3ZnLXNpZGUpO1xcclxcbiAgd2lkdGg6IHZhcigtLXN2Zy1zaWRlKTtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDJweDtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbn1cXHJcXG5cXHJcXG4uaWNvbi1tb3JlLXZlcnQge1xcclxcbiAgY3Vyc29yOiBtb3ZlO1xcclxcbn1cXHJcXG5cXHJcXG4uaWNvbi1jaGVjayB7XFxyXFxuICBkaXNwbGF5OiBub25lO1xcclxcbn1cXHJcXG5cXHJcXG4uY29tcGxldGVkIC5pY29uLWNoZWNrIHtcXHJcXG4gIGRpc3BsYXk6IGlubGluZTtcXHJcXG59XFxyXFxuXFxyXFxuLmNvbXBsZXRlZCAuYXBwLXRleHQge1xcclxcbiAgdGV4dC1kZWNvcmF0aW9uOiBsaW5lLXRocm91Z2g7XFxyXFxufVxcclxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTtcblxuICAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTtcblxuICAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICh1cmwsIG9wdGlvbnMpIHtcbiAgaWYgKCFvcHRpb25zKSB7XG4gICAgb3B0aW9ucyA9IHt9O1xuICB9XG4gIGlmICghdXJsKSB7XG4gICAgcmV0dXJuIHVybDtcbiAgfVxuICB1cmwgPSBTdHJpbmcodXJsLl9fZXNNb2R1bGUgPyB1cmwuZGVmYXVsdCA6IHVybCk7XG5cbiAgLy8gSWYgdXJsIGlzIGFscmVhZHkgd3JhcHBlZCBpbiBxdW90ZXMsIHJlbW92ZSB0aGVtXG4gIGlmICgvXlsnXCJdLipbJ1wiXSQvLnRlc3QodXJsKSkge1xuICAgIHVybCA9IHVybC5zbGljZSgxLCAtMSk7XG4gIH1cbiAgaWYgKG9wdGlvbnMuaGFzaCkge1xuICAgIHVybCArPSBvcHRpb25zLmhhc2g7XG4gIH1cblxuICAvLyBTaG91bGQgdXJsIGJlIHdyYXBwZWQ/XG4gIC8vIFNlZSBodHRwczovL2RyYWZ0cy5jc3N3Zy5vcmcvY3NzLXZhbHVlcy0zLyN1cmxzXG4gIGlmICgvW1wiJygpIFxcdFxcbl18KCUyMCkvLnRlc3QodXJsKSB8fCBvcHRpb25zLm5lZWRRdW90ZXMpIHtcbiAgICByZXR1cm4gXCJcXFwiXCIuY29uY2F0KHVybC5yZXBsYWNlKC9cIi9nLCAnXFxcXFwiJykucmVwbGFjZSgvXFxuL2csIFwiXFxcXG5cIiksIFwiXFxcIlwiKTtcbiAgfVxuICByZXR1cm4gdXJsO1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9pbmRleC5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL2luZGV4LmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiB1cGRhdGVyO1xufVxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpO1xuXG4gICAgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG4gIGNzcyArPSBvYmouY3NzO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9XG5cbiAgLy8gRm9yIG9sZCBJRVxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICBpZiAodHlwZW9mIGRvY3VtZW50ID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKCkge30sXG4gICAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHt9XG4gICAgfTtcbiAgfVxuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiaW1wb3J0IHsgTGlzdEl0ZW0sIGNyZWF0ZUxpc3RJdGVtIH0gZnJvbSAnLi9tb2R1bGVzL0xpc3RJdGVtTW9kLmpzJztcbmltcG9ydCAnLi9pbmRleC5jc3MnO1xuaW1wb3J0IHN2ZyBmcm9tICcuL2Fzc2V0L3Jlc291cmNlL2ljb25zLnN2Zyc7XG5cbmNvbnN0IGl0ZW0xID0gbmV3IExpc3RJdGVtKCdJdGVtMScsIDEpO1xuY29uc3QgaXRlbTIgPSBuZXcgTGlzdEl0ZW0oJ0l0ZW0yJywgMiwgdHJ1ZSk7XG5jb25zdCBpdGVtMyA9IG5ldyBMaXN0SXRlbSgnSXRlbTMnLCAzKTtcbmNvbnN0IGl0ZW00ID0gbmV3IExpc3RJdGVtKCdJdGVtNCcsIDQsIHRydWUpO1xuY29uc3QgaXRlbTUgPSBuZXcgTGlzdEl0ZW0oJ0l0ZW01JywgNSk7XG5cbmNvbnN0IGFycmF5SXRlbXMgPSBbaXRlbTEsIGl0ZW0yLCBpdGVtMywgaXRlbTQsIGl0ZW01XS5zb3J0KChhLCBiKSA9PiBhLmluZGV4IC0gYi5pbmRleCk7XG5jb25zdCBsaXN0VWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjYWRkLWl0ZW1zJyk7XG5cbmNvbnN0IGNsYXNzTGlzdEluY29tcCA9IFsnYXBwLXJvdycsICdhcHAtaXRlbSddO1xuY29uc3QgY2xhc3NMaXN0Q29tcCA9IFsnYXBwLXJvdycsICdhcHAtaXRlbScsICdjb21wbGV0ZWQnXTtcbmNvbnN0IGNsYXNzQnRuID0gJ2l0ZW0tY2hrJztcbmNvbnN0IGNsYXNzRGl2VGV4dCA9ICdpdGVtJztcbmNvbnN0IGNsYXNzVGV4dCA9ICdhcHAtdGV4dCc7XG5jb25zdCB4bGlua0hyZWYgPSBbYCR7c3ZnfSNpY29uLWNoZWNrYCwgJy4vYXNzZXQvcmVzb3VyY2UvaWNvbnMuc3ZnI2ljb24tbW9yZS12ZXJ0JyxcbiAgJy4vYXNzZXQvcmVzb3VyY2UvaWNvbnMuc3ZnI2ljb24tdHJhc2gtbyddO1xuXG5jb25zdCBsaXN0U2VjID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmxpc3QnKTtcblxuY29uc3QgY3JlYXRlSXRlbUxpID0gKGl0ZW0pID0+IHtcbiAgY29uc3QgY2xhc3NMaXN0ID0gaXRlbS5pc0NvbXBsZXRlZCA/IGNsYXNzTGlzdENvbXAgOiBjbGFzc0xpc3RJbmNvbXA7XG4gIGNvbnN0IGVsZW1lbnQgPSBjcmVhdGVMaXN0SXRlbShpdGVtLmluZGV4LCB4bGlua0hyZWYsIGl0ZW0uZGVzY3JpcCwgY2xhc3NMaXN0LFxuICAgIGNsYXNzQnRuLCBjbGFzc0RpdlRleHQsIGNsYXNzVGV4dCk7XG4gIHJldHVybiBlbGVtZW50O1xufTtcblxuY29uc3QgdG9nZ2xlQ29tcGxldGVkID0gKGUpID0+IHtcbiAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICBpZiAoZS50YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKCdpdGVtLWNoaycpKSB7XG4gICAgY29uc3QgbGlzdEl0ZW0gPSBlLnRhcmdldC5wYXJlbnROb2RlO1xuICAgIGxpc3RJdGVtLmNsYXNzTGlzdC50b2dnbGUoJ2NvbXBsZXRlZCcpO1xuICB9IGVsc2UgaWYgKGUudGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucygnaWNvbi1jaGVjaycpKSB7XG4gICAgY29uc3QgbGlzdEl0ZW0gPSBlLnRhcmdldC5wYXJlbnROb2RlLnBhcmVudE5vZGU7XG4gICAgbGlzdEl0ZW0uY2xhc3NMaXN0LnRvZ2dsZSgnY29tcGxldGVkJyk7XG4gIH0gZWxzZSBpZiAoZS50YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKCdpY29uLWNoZWNrLXVzZScpKSB7XG4gICAgY29uc3QgbGlzdEl0ZW0gPSBlLnRhcmdldC5wYXJlbnROb2RlLnBhcmVudE5vZGUucGFyZW50Tm9kZTtcbiAgICBsaXN0SXRlbS5jbGFzc0xpc3QudG9nZ2xlKCdjb21wbGV0ZWQnKTtcbiAgfVxufTtcblxuYXJyYXlJdGVtcy5mb3JFYWNoKChpdGVtKSA9PiB7XG4gIGxpc3RVbC5hcHBlbmRDaGlsZChjcmVhdGVJdGVtTGkoaXRlbSkpO1xufSk7XG5cbmxpc3RTZWMuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0b2dnbGVDb21wbGV0ZWQpOyIsImltcG9ydCBlbGVtR2VuIGZyb20gJy4vZWxlbWVudEdlbmVyYXRvck1vZC5qcyc7XG5pbXBvcnQgZXh0cmFBdHQgZnJvbSAnLi9lbGVtZW50RXh0cmFBdHRyTW9kLmpzJztcbmltcG9ydCBidG4gZnJvbSAnLi9idXR0b25HZW5lcmF0b3JNb2QuanMnO1xuaW1wb3J0IHsgY3JlYXRlTlMgfSBmcm9tICcuL2NyZWF0ZVN2Zy5qcyc7XG5pbXBvcnQgdGV4dCBmcm9tICcuL2NyZWF0ZVRleHRBcmVhLmpzJztcbmltcG9ydCBsYWJlbCBmcm9tICcuL2NyZWF0ZUxhYmVsLmpzJztcblxuY29uc3QgY3JlYXRlTGlzdEl0ZW0gPSAoaW5kZXgsIGhyZWYsIHRleHRDb250ZW50LCBjbGFzc0xpc3QgPSBmYWxzZSwgY2xhc3NCdG4gPSBmYWxzZSxcbiAgY2xhc3NEaXZUZXh0ID0gZmFsc2UsIGNsYXNzVGV4dCA9IGZhbHNlKSA9PiB7XG4gIGNvbnN0IGRvY0ZyYWcgPSBkb2N1bWVudC5jcmVhdGVEb2N1bWVudEZyYWdtZW50KCk7XG4gIGNvbnN0IHN2Z0J0biA9IGNyZWF0ZU5TKGhyZWZbMF0pO1xuICBjb25zdCBjaGtCdG4gPSBidG4uY3JlYXRlQnV0dG9uKCdidXR0b24nLCBjbGFzc0J0biwgJ0NoZWNrIERvbmUnLCBmYWxzZSwgc3ZnQnRuKTtcbiAgZXh0cmFBdHQuYWRkQXR0cmlidXRlcyhjaGtCdG4sICdpbmRleCcsIGluZGV4LCAndGFiaW5kZXgnLCAnMCcpO1xuICBkb2NGcmFnLmFwcGVuZENoaWxkKGNoa0J0bik7XG4gIGNvbnN0IGxhYmVsVHh0ID0gbGFiZWwuY3JlYXRlTGFiZWwoZmFsc2UsIGNsYXNzVGV4dCwgdGV4dENvbnRlbnQpO1xuICBleHRyYUF0dC5hZGRBdHRyaWJ1dGVzKGxhYmVsVHh0LCBmYWxzZSwgZmFsc2UsICd0YWJpbmRleCcsICcwJyk7XG4gIGNvbnN0IGRpdlRleHQgPSBlbGVtR2VuLmNyZWF0ZUVsZW1lbnREZWZhdWx0KCdkaXYnLCBjbGFzc0RpdlRleHQsIGZhbHNlLCBsYWJlbFR4dCk7XG4gIGNvbnN0IHR4dEFyZWEgPSB0ZXh0LmNyZWF0ZVRleHRBcmVhKCcyNTUnLCBjbGFzc1RleHQsIHRleHRDb250ZW50KTtcbiAgZGl2VGV4dC5hcHBlbmRDaGlsZCh0eHRBcmVhKTtcbiAgZG9jRnJhZy5hcHBlbmRDaGlsZChkaXZUZXh0KTtcbiAgY29uc3Qgc3ZnTW92ZSA9IGNyZWF0ZU5TKGhyZWZbMV0pO1xuICBkb2NGcmFnLmFwcGVuZENoaWxkKHN2Z01vdmUpO1xuICBjb25zdCBzdmdSZW1vdmUgPSBjcmVhdGVOUyhocmVmWzJdKTtcbiAgZG9jRnJhZy5hcHBlbmRDaGlsZChzdmdSZW1vdmUpO1xuICBjb25zdCBsaXN0SXRlbSA9IGVsZW1HZW4uY3JlYXRlRWxlbWVudERlZmF1bHQoJ2xpJywgY2xhc3NMaXN0LCBmYWxzZSwgZG9jRnJhZyk7XG4gIHJldHVybiBsaXN0SXRlbTtcbn07XG5cbi8qKlxuICogQ2xhc3Mgb2YgTGlzdCBJdGVhbSB0byBiZSBpbnN0YXRpYXRlZCB3aXRoIDMgcHJvcGVydGllc1xuICogQHBhcmFtIHtzdHJpbmd9IGRlc2NyaXAgRGVzY3JpcHRpb24gb2YgTGlzdCBJdGVtXG4gKiBAcGFyYW0ge2Jvb2xlYW59IGlzQ29tcGxldGVkIENvbXBsZXRpb24gc3RhdHVzIG9mIExpc3QgSXRlbVxuICogQHBhcmFtIHtudW1iZXJ9IGluZGV4IFBvc2l0aW9uIG9mIExpc3QgSXRlYW1cbiAqIEByZXR1cm5zIHtvYmplY3R9IE5ldyBjbGFzcyB3aXRoIHRpdGxlIGFuZCBhdXRob3IgcHJvcGVydGllc1xuICovXG5jbGFzcyBMaXN0SXRlbSB7XG4gIGNvbnN0cnVjdG9yKGRlc2NyaXAsIGluZGV4LCBpc0NvbXBsZXRlZCA9IGZhbHNlKSB7XG4gICAgdGhpcy5kZXNjcmlwID0gZGVzY3JpcDtcbiAgICB0aGlzLmlzQ29tcGxldGVkID0gaXNDb21wbGV0ZWQ7XG4gICAgdGhpcy5pbmRleCA9IGluZGV4O1xuICB9XG59XG5cbmV4cG9ydCB7XG4gIGNyZWF0ZUxpc3RJdGVtLFxuICBMaXN0SXRlbSxcbn07IiwiaW1wb3J0IGFkZENsYXNzIGZyb20gJy4vZWxlbWVudEFkZENsYXNzTW9kLmpzJztcblxuLyoqXG4gKiBGdW5jdGlvbiB0byBjcmVhdGUgSFRNTCBCdXR0b24gZWxlbWVudC4gQ2xhc3NlcyBhbmQgdGV4dCBjb250ZW50XG4gKiBjYW4gYmUgYWRkZWQgYXMgZWxlbWVudCBpcyBjcmVhdGUuIENsaWNrIGV2ZW50IHRvIGEgYW5vdGhlciB3ZWJwYWdlIGNhbiBiZSBhZGRlZC5cbiAqIEBwYXJhbSB7c3RyaW5nfSBmdW5jIFR5cGUgb2YgYnV0dG9uIGBzdW1iaXQsIHJlc2V0LCBidXR0b25gXG4gKiBAcGFyYW0ge3N0cmluZ30gY2xhc3NlcyBOYW1lIG9mIGNsYXNzIG9yIGNsYXNzZXMgdG8gYWRkLiBTdHJpbmcsIGFycmF5IG9mIHN0cmluZyBzaG91bGQgYmUgdXNlZC5cbiAqIElmIG5vIGNsYXNzIGlzIHdhbnRlZCwgZmFsc2Ugc2hvdWxkIGJlIHVzZS5PcHRpb25hbCBQYXJhbWVudGVyLlxuICogQHBhcmFtIHtzdHJpbmd9IGFyaWFMYWJlbCBUZXh0IGZvciBhY2Nlc3NpYmlsaXR5XG4gKiBAcGFyYW0ge2FueX0gdGV4dENvbnRlbnQgVGV4dCB0byBiZSBhZGRlZCBhcyB0ZXh0IGNvbnRlbnQgdG8gSFRNTCBlbGVtZW50LlxuICogT3B0aW9uIHBhcmFtZXRlci5cbiAqIEBwYXJhbSB7SFRNTEVsZW1lbnR9IGlubmVyQ2hpbGQgSFRNTCBFbGVtZW50IHRvIGJlIGFwcGVuZGVkXG4gKiBAcGFyYW0ge2FueX0gaHJlZiBIeXBlcmxpbmsgcmVmZXJlbmNlIHRvIGJlIGZvbGxvd2VkIGlmIGJ1dHRvbiBpcyBjbGlja2VkLlxuICogT3B0aW9uIHBhcmFtZXRlci5cbiAqIEByZXR1cm5zIHtIVE1MQnV0dG9uRWxlbWVudH0gUmV0dXJucyBIVE1MIGJ1dHRvbiBlbGVtZW50IGNob3NlbiB3aXRoIHNldCBhdHRyaWJ1dGVzLlxuICovXG5jb25zdCBjcmVhdGVCdXR0b24gPSAoZnVuYywgY2xhc3NlcywgYXJpYUxhYmVsLCB0ZXh0Q29udGVudCA9IGZhbHNlLFxuICBpbm5lckNoaWxkID0gZmFsc2UsIGhyZWYgPSBmYWxzZSkgPT4ge1xuICBjb25zdCBidXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgYnV0dG9uLnR5cGUgPSBmdW5jO1xuICBidXR0b24uYXJpYUxhYmVsID0gYXJpYUxhYmVsO1xuICBhZGRDbGFzcy5hZGRDbGFzcyhidXR0b24sIGNsYXNzZXMpO1xuICBpZiAodGV4dENvbnRlbnQpIGJ1dHRvbi50ZXh0Q29udGVudCA9IHRleHRDb250ZW50O1xuICBpZiAoaHJlZikge1xuICAgIGJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gaHJlZjtcbiAgICB9KTtcbiAgfVxuICBpZiAoaW5uZXJDaGlsZCkgYnV0dG9uLmFwcGVuZENoaWxkKGlubmVyQ2hpbGQpO1xuICByZXR1cm4gYnV0dG9uO1xufTtcblxuZXhwb3J0IGRlZmF1bHQge1xuICBjcmVhdGVCdXR0b24sXG59OyIsImltcG9ydCBlbGVtR2VuIGZyb20gJy4vZWxlbWVudEdlbmVyYXRvck1vZC5qcyc7XG5pbXBvcnQgZXh0cmFBdHQgZnJvbSAnLi9lbGVtZW50RXh0cmFBdHRyTW9kLmpzJztcblxuY29uc3QgY3JlYXRlTGFiZWwgPSAoZm9yQXRyID0gZmFsc2UsIGNsYXNzZXMgPSBmYWxzZSwgdGV4dENvbnRlbnQgPSBmYWxzZSwgaW5uZXJDaGlsZCA9IGZhbHNlKSA9PiB7XG4gIGNvbnN0IGxhYmVsID0gZWxlbUdlbi5jcmVhdGVFbGVtZW50RGVmYXVsdCgnbGFiZWwnLCBjbGFzc2VzLCB0ZXh0Q29udGVudCwgaW5uZXJDaGlsZCk7XG4gIGV4dHJhQXR0LmFkZEF0dHJpYnV0ZXMobGFiZWwsIGZhbHNlLCBmYWxzZSwgJ2ZvcicsIGZvckF0cik7XG4gIHJldHVybiBsYWJlbDtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgY3JlYXRlTGFiZWwsXG59OyIsImltcG9ydCBlbGVtR2VuIGZyb20gJy4vZWxlbWVudEdlbmVyYXRvck1vZC5qcyc7XG5pbXBvcnQgZXh0cmFBdHQgZnJvbSAnLi9lbGVtZW50RXh0cmFBdHRyTW9kLmpzJztcblxuY29uc3QgY3JlYXRlU3ZnID0gKGhyZWYpID0+IHtcbiAgY29uc3QgeGxpbmsgPSBocmVmLnNwbGl0KCcjJyk7XG4gIGNvbnN0IHVzZSA9IGVsZW1HZW4uY3JlYXRlRWxlbWVudERlZmF1bHQoJ3VzZScsIGZhbHNlKTtcbiAgZXh0cmFBdHQuYWRkQXR0cmlidXRlcyh1c2UsIGZhbHNlLCBmYWxzZSwgJ2hyZWYnLCBgJHtocmVmfWApO1xuICBjb25zdCBzdmcgPSBlbGVtR2VuLmNyZWF0ZUVsZW1lbnREZWZhdWx0KCdzdmcnLCB4bGlua1sxXSwgZmFsc2UsIHVzZSk7XG4gIHJldHVybiBzdmc7XG59O1xuXG5jb25zdCBjcmVhdGVOUyA9IChocmVmKSA9PiB7XG4gIGNvbnN0IHhsaW5rID0gaHJlZi5zcGxpdCgnIycpO1xuICBjb25zdCB1c2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50TlMoJ2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJywgJ3VzZScpO1xuICBleHRyYUF0dC5hZGRBdHRyaWJ1dGVzKHVzZSwgZmFsc2UsIGZhbHNlLCAnaHJlZicsIGAke2hyZWZ9YCk7XG4gIHVzZS5jbGFzc0xpc3QuYWRkKGAke3hsaW5rWzFdfS11c2VgKTtcbiAgY29uc3Qgc3ZnID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudE5TKCdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZycsICdzdmcnKTtcbiAgc3ZnLmFwcGVuZENoaWxkKHVzZSk7XG4gIHN2Zy5jbGFzc0xpc3QuYWRkKHhsaW5rWzFdKTtcbiAgcmV0dXJuIHN2Zztcbn07XG5cbmV4cG9ydCB7XG4gIGNyZWF0ZVN2ZyxcbiAgY3JlYXRlTlMsXG59O1xuIiwiaW1wb3J0IGVsZW1HZW4gZnJvbSAnLi9lbGVtZW50R2VuZXJhdG9yTW9kLmpzJztcbmltcG9ydCBleHRyYUF0dCBmcm9tICcuL2VsZW1lbnRFeHRyYUF0dHJNb2QuanMnO1xuXG5jb25zdCBjcmVhdGVUZXh0QXJlYSA9IChsZW5ndGggPSBmYWxzZSwgY2xhc3NlcyA9IGZhbHNlLFxuICB0ZXh0Q29udGVudCA9IGZhbHNlLCBpbm5lckNoaWxkID0gZmFsc2UpID0+IHtcbiAgY29uc3QgdGV4dEFyZWEgPSBlbGVtR2VuLmNyZWF0ZUVsZW1lbnREZWZhdWx0KCd0ZXh0YXJlYScsIGNsYXNzZXMsIHRleHRDb250ZW50LCBpbm5lckNoaWxkKTtcbiAgaWYgKGxlbmd0aCkgZXh0cmFBdHQuYWRkQXR0cmlidXRlcyh0ZXh0QXJlYSwgZmFsc2UsIGZhbHNlLCAnbWF4bGVuZ3RoJywgbGVuZ3RoKTtcbiAgdGV4dEFyZWEuc2V0QXR0cmlidXRlKCdzcGVsbGNoZWNrJywgJ3RydWUnKTtcbiAgcmV0dXJuIHRleHRBcmVhO1xufTtcblxuZXhwb3J0IGRlZmF1bHQge1xuICBjcmVhdGVUZXh0QXJlYSxcbn07IiwiLyoqXG4gKiBGdW5jdGlvbiB0byBhZGQgY2xhc3Mgb3IgY2xhc3NlcyB0byBIVE1MIEVsZW1lbnRcbiAqIEBwYXJhbSB7SFRNTEVsZW1lbnR9IGVsZW0gSFRNTCBFbGVtZW50IHRvIGJlIG1vZGlmaWVkLlxuICogQHBhcmFtIHtTdHJpbmd9IGNsYXNzZXMgU3RyaW5nIG9yIEFycmF5IG9mIFN0cmluZyB0byBiZSBhZGRlZC5cbiAqIEByZXR1cm5zIHtIVE1MRWxlbWVudH0gUmV0dXJucyBIVE1MIGVsZW1lbnQgd2l0aCBjaG9zZW4gY2xhc3Nlcy5cbiAqL1xuY29uc3QgYWRkQ2xhc3MgPSAoZWxlbSwgY2xhc3NlcykgPT4ge1xuICBpZiAoKHR5cGVvZiBjbGFzc2VzKSA9PT0gJ3N0cmluZycpIGVsZW0uY2xhc3NMaXN0LmFkZChgJHtjbGFzc2VzfWApO1xuICBlbHNlIGlmICgodHlwZW9mIGNsYXNzZXMpID09PSAnb2JqZWN0JykgY2xhc3Nlcy5mb3JFYWNoKChjbGFzczApID0+IGVsZW0uY2xhc3NMaXN0LmFkZChgJHtjbGFzczB9YCkpO1xuICByZXR1cm4gZWxlbTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgYWRkQ2xhc3MsXG59OyIsIi8qKlxuICogRnVuY3Rpb24gdG8gYWRkIGRhdGFzZXQgb3IgYXBwZW5kIGNoaWxkcyB0byBIVE1MIEVsZW1lbnRcbiAqIEBwYXJhbSB7SFRNTEVsZW1lbnR9IGVsZW0gSFRNTCBFbGVtZW50IHRvIGJlIG1vZGlmaWVkLlxuICogQHBhcmFtIHtzdHJpbmd9IGRhdGEga2V5IG9mIGRhdGFzZXQga2V5LXZhbHVlIHByb3BlcnR5IHRvIGJlIGFkZGVkXG4gKiBAcGFyYW0ge3N0cmluZ30gaW5kZXg9MCB2YWx1ZSBvZiBkYXRhc2V0IGtleS12YWx1ZSBwcm9wZXJ0eSB0byBiZSBhZGRlZFxuICogQHJldHVybnMge0hUTUxFbGVtZW50fSBSZXR1cm5zIEhUTUwgZWxlbWVudCB3aXRoIGNob3NlbiBhdHRyaWJ1dGVzXG4gKi9cbmNvbnN0IGFkZEF0dHJpYnV0ZXMgPSAoZWxlbSxcbiAgZGF0YSA9IGZhbHNlLCBpbmRleCA9IDAsIGF0dHJpYnV0ZXMgPSBmYWxzZSwgdmFsdWUgPSBmYWxzZSkgPT4ge1xuICBpZiAoZGF0YSkgZWxlbS5zZXRBdHRyaWJ1dGUoYGRhdGEtJHtkYXRhfWAsIGluZGV4KTtcbiAgaWYgKGF0dHJpYnV0ZXMpIGVsZW0uc2V0QXR0cmlidXRlKGF0dHJpYnV0ZXMsIHZhbHVlKTtcbiAgcmV0dXJuIGVsZW07XG59O1xuXG5leHBvcnQgZGVmYXVsdCB7XG4gIGFkZEF0dHJpYnV0ZXMsXG59OyIsImltcG9ydCBhZGRDbGFzcyBmcm9tICcuL2VsZW1lbnRBZGRDbGFzc01vZC5qcyc7XG5cbi8qKlxuICogRnVuY3Rpb24gdG8gY3JlYXRlIEhUTUwgZWxlbWVudCB1c2luZyB0YWcgbmFtZXMuXG4gKiBDbGFzc2VzIGFuZCB0ZXh0IGNvbnRlbnQgY2FuIGJlIGFkZGVkIGFzIGVsZW1lbnQgaXMgY3JlYXRlLlxuICogQHBhcmFtIHtzdHJpbmd9IGVsZW0gVGFnIG5hbWUgb2YgdGhlIGVsZW1lbnQgdG8gYmUgY3JlYXRlZC4gRXhhbXBsZTogYGRpdiwgcCwgc2VjdGlvbmBcbiAqIEBwYXJhbSB7c3RyaW5nfSBjbGFzc2VzIE5hbWUgb2YgY2xhc3Mgb3IgY2xhc3NlcyB0byBhZGQuIFN0cmluZywgYXJyYXkgb2Ygc3RyaW5nIHNob3VsZCBiZSB1c2VkLlxuICogSWYgbm8gY2xhc3MgaXMgd2FudGVkLCBmYWxzZSBzaG91bGQgYmUgdXNlLk9wdGlvbmFsIFBhcmFtZW50ZXIuXG4gKiBAcGFyYW0ge1N0cmluZ30gdGV4dENvbnRleHQgVGV4dCB0byBiZSBhZGRlZCBhcyB0ZXh0IGNvbnRlbnQgdG8gSFRNTCBlbGVtZW50LlxuICogT3B0aW9uIHBhcmFtZXRlci5cbiAqIEBwYXJhbSB7SFRNTEVsZW1lbnR9IGlubmVyQ2hpbGQgSFRNTCBFbGVtZW50IHRvIGJlIGFwcGVuZGVkXG4gKiBAcmV0dXJucyB7SFRNTEVsZW1lbnR9IFJldHVybnMgSFRNTCBlbGVtZW50IGNob3NlbiB3aXRoIHNldCBhdHRyaWJ1dGVzLlxuICovXG5jb25zdCBjcmVhdGVFbGVtZW50RGVmYXVsdCA9IChlbGVtLCBjbGFzc2VzID0gZmFsc2UsIHRleHRDb250ZW50ID0gZmFsc2UsIGlubmVyQ2hpbGQgPSBmYWxzZSkgPT4ge1xuICBjb25zdCBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChlbGVtKTtcbiAgYWRkQ2xhc3MuYWRkQ2xhc3MoZWxlbWVudCwgY2xhc3Nlcyk7XG4gIGlmICh0ZXh0Q29udGVudCkgZWxlbWVudC50ZXh0Q29udGVudCA9IHRleHRDb250ZW50O1xuICBpZiAoaW5uZXJDaGlsZCkgZWxlbWVudC5hcHBlbmRDaGlsZChpbm5lckNoaWxkKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59O1xuXG5leHBvcnQgZGVmYXVsdCB7XG4gIGNyZWF0ZUVsZW1lbnREZWZhdWx0LFxufTsiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=