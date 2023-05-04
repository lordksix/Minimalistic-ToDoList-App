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
___CSS_LOADER_EXPORT___.push([module.id, ":root {\r\n  --svg-side: clamp(16px, (100vw - 320px) * 1000, clamp(20px, (100vw - 640px) * 1000, clamp(25px, (100vw - 1280px) * 1000, 30px)));\r\n  --font-size: calc(var(--svg-side) * 0.8);\r\n  --app-row-block-pad: 10px;\r\n  --app-row-height: calc(var(--svg-side) + 2 * var(--app-row-block-pad));\r\n}\r\n\r\n* {\r\n  padding: 0;\r\n  margin: 0;\r\n  box-sizing: border-box;\r\n}\r\n\r\nul,\r\nli {\r\n  list-style-type: none;\r\n}\r\n\r\nbody {\r\n  display: flex;\r\n  flex-flow: column;\r\n  align-items: center;\r\n  padding-block: 40px;\r\n  gap: 30px;\r\n}\r\n\r\n.app-container {\r\n  display: flex;\r\n  flex-flow: column;\r\n  align-items: center;\r\n  z-index: 1;\r\n  background-color: aliceblue;\r\n  border-radius: 10px;\r\n  box-shadow: 0 0 4px 4px cadetblue;\r\n}\r\n\r\n.app-text,\r\n.item {\r\n  font-size: var(--font-size);\r\n  display: flex;\r\n  align-items: center;\r\n}\r\n\r\n.app-title {\r\n  font-weight: bold;\r\n  font-size: calc(var(--font-size) * 1.2);\r\n}\r\n\r\n.app-interact {\r\n  display: flex;\r\n  justify-content: flex-start;\r\n  gap: 10px;\r\n}\r\n\r\n.app-row {\r\n  display: grid;\r\n  grid-template-columns: auto 1fr auto;\r\n  justify-content: space-between;\r\n  height: var(--app-row-height);\r\n  padding-block: var(--app-row-block-pad);\r\n  padding-inline: 15px;\r\n  column-gap: 20px;\r\n  min-width: min(80vw, 1200px);\r\n}\r\n\r\n#app-input {\r\n  display: grid;\r\n  grid-template-columns: 1fr auto;\r\n  justify-content: center;\r\n  height: var(--app-row-height);\r\n  padding-block: var(--app-row-block-pad);\r\n  padding-inline: 15px;\r\n  column-gap: 20px;\r\n  min-width: min(80vw, 1200px);\r\n}\r\n\r\ndiv a,\r\ndiv svg {\r\n  display: flex;\r\n  align-items: center;\r\n}\r\n\r\n.app-row svg {\r\n  height: var(--svg-side);\r\n  width: var(--svg-side);\r\n}\r\n\r\n.app-row textarea {\r\n  display: none;\r\n}\r\n\r\n.icon-trash-o {\r\n  display: none;\r\n}\r\n\r\n.app-container button,\r\n.app-container input {\r\n  border: none;\r\n  background-color: transparent;\r\n  font-size: var(--font-size);\r\n  height: var(--app-row-height);\r\n  padding-block: var(--app-row-block-pad);\r\n}\r\n\r\n#newitem {\r\n  font-style: italic;\r\n  font-weight: lighter;\r\n  width: 100%;\r\n}\r\n\r\n.app-container input:focus {\r\n  outline: none;\r\n}\r\n\r\n#sumbit-newitem {\r\n  background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");\r\n  background-repeat: no-repeat;\r\n  background-position: center;\r\n  appearance: none;\r\n  cursor: pointer;\r\n  width: 40px;\r\n  height: 50px;\r\n}\r\n\r\n.app-container .clr-btn {\r\n  width: 100%;\r\n  color: darkslategrey;\r\n  background-color: rgb(229, 240, 250);\r\n  border-bottom-left-radius: 10px;\r\n  border-bottom-right-radius: 10px;\r\n}\r\n\r\n.clr-btn:hover {\r\n  text-decoration: underline;\r\n  color: black;\r\n}\r\n\r\n.app-container .item-chk {\r\n  border: 2px solid #c1c1c3;\r\n  cursor: pointer;\r\n  color: transparent;\r\n  height: var(--svg-side);\r\n  width: var(--svg-side);\r\n  border-radius: 2px;\r\n  display: flex;\r\n  align-items: center;\r\n}\r\n\r\n.icon-more-vert {\r\n  cursor: move;\r\n}\r\n\r\n.icon-check {\r\n  display: none;\r\n}\r\n\r\n.completed .icon-check {\r\n  display: inline;\r\n}\r\n\r\n.completed .app-text {\r\n  text-decoration: line-through;\r\n}\r\n", "",{"version":3,"sources":["webpack://./src/index.css"],"names":[],"mappings":"AAAA;EACE,gIAAgI;EAChI,wCAAwC;EACxC,yBAAyB;EACzB,sEAAsE;AACxE;;AAEA;EACE,UAAU;EACV,SAAS;EACT,sBAAsB;AACxB;;AAEA;;EAEE,qBAAqB;AACvB;;AAEA;EACE,aAAa;EACb,iBAAiB;EACjB,mBAAmB;EACnB,mBAAmB;EACnB,SAAS;AACX;;AAEA;EACE,aAAa;EACb,iBAAiB;EACjB,mBAAmB;EACnB,UAAU;EACV,2BAA2B;EAC3B,mBAAmB;EACnB,iCAAiC;AACnC;;AAEA;;EAEE,2BAA2B;EAC3B,aAAa;EACb,mBAAmB;AACrB;;AAEA;EACE,iBAAiB;EACjB,uCAAuC;AACzC;;AAEA;EACE,aAAa;EACb,2BAA2B;EAC3B,SAAS;AACX;;AAEA;EACE,aAAa;EACb,oCAAoC;EACpC,8BAA8B;EAC9B,6BAA6B;EAC7B,uCAAuC;EACvC,oBAAoB;EACpB,gBAAgB;EAChB,4BAA4B;AAC9B;;AAEA;EACE,aAAa;EACb,+BAA+B;EAC/B,uBAAuB;EACvB,6BAA6B;EAC7B,uCAAuC;EACvC,oBAAoB;EACpB,gBAAgB;EAChB,4BAA4B;AAC9B;;AAEA;;EAEE,aAAa;EACb,mBAAmB;AACrB;;AAEA;EACE,uBAAuB;EACvB,sBAAsB;AACxB;;AAEA;EACE,aAAa;AACf;;AAEA;EACE,aAAa;AACf;;AAEA;;EAEE,YAAY;EACZ,6BAA6B;EAC7B,2BAA2B;EAC3B,6BAA6B;EAC7B,uCAAuC;AACzC;;AAEA;EACE,kBAAkB;EAClB,oBAAoB;EACpB,WAAW;AACb;;AAEA;EACE,aAAa;AACf;;AAEA;EACE,yDAAmD;EACnD,4BAA4B;EAC5B,2BAA2B;EAC3B,gBAAgB;EAChB,eAAe;EACf,WAAW;EACX,YAAY;AACd;;AAEA;EACE,WAAW;EACX,oBAAoB;EACpB,oCAAoC;EACpC,+BAA+B;EAC/B,gCAAgC;AAClC;;AAEA;EACE,0BAA0B;EAC1B,YAAY;AACd;;AAEA;EACE,yBAAyB;EACzB,eAAe;EACf,kBAAkB;EAClB,uBAAuB;EACvB,sBAAsB;EACtB,kBAAkB;EAClB,aAAa;EACb,mBAAmB;AACrB;;AAEA;EACE,YAAY;AACd;;AAEA;EACE,aAAa;AACf;;AAEA;EACE,eAAe;AACjB;;AAEA;EACE,6BAA6B;AAC/B","sourcesContent":[":root {\r\n  --svg-side: clamp(16px, (100vw - 320px) * 1000, clamp(20px, (100vw - 640px) * 1000, clamp(25px, (100vw - 1280px) * 1000, 30px)));\r\n  --font-size: calc(var(--svg-side) * 0.8);\r\n  --app-row-block-pad: 10px;\r\n  --app-row-height: calc(var(--svg-side) + 2 * var(--app-row-block-pad));\r\n}\r\n\r\n* {\r\n  padding: 0;\r\n  margin: 0;\r\n  box-sizing: border-box;\r\n}\r\n\r\nul,\r\nli {\r\n  list-style-type: none;\r\n}\r\n\r\nbody {\r\n  display: flex;\r\n  flex-flow: column;\r\n  align-items: center;\r\n  padding-block: 40px;\r\n  gap: 30px;\r\n}\r\n\r\n.app-container {\r\n  display: flex;\r\n  flex-flow: column;\r\n  align-items: center;\r\n  z-index: 1;\r\n  background-color: aliceblue;\r\n  border-radius: 10px;\r\n  box-shadow: 0 0 4px 4px cadetblue;\r\n}\r\n\r\n.app-text,\r\n.item {\r\n  font-size: var(--font-size);\r\n  display: flex;\r\n  align-items: center;\r\n}\r\n\r\n.app-title {\r\n  font-weight: bold;\r\n  font-size: calc(var(--font-size) * 1.2);\r\n}\r\n\r\n.app-interact {\r\n  display: flex;\r\n  justify-content: flex-start;\r\n  gap: 10px;\r\n}\r\n\r\n.app-row {\r\n  display: grid;\r\n  grid-template-columns: auto 1fr auto;\r\n  justify-content: space-between;\r\n  height: var(--app-row-height);\r\n  padding-block: var(--app-row-block-pad);\r\n  padding-inline: 15px;\r\n  column-gap: 20px;\r\n  min-width: min(80vw, 1200px);\r\n}\r\n\r\n#app-input {\r\n  display: grid;\r\n  grid-template-columns: 1fr auto;\r\n  justify-content: center;\r\n  height: var(--app-row-height);\r\n  padding-block: var(--app-row-block-pad);\r\n  padding-inline: 15px;\r\n  column-gap: 20px;\r\n  min-width: min(80vw, 1200px);\r\n}\r\n\r\ndiv a,\r\ndiv svg {\r\n  display: flex;\r\n  align-items: center;\r\n}\r\n\r\n.app-row svg {\r\n  height: var(--svg-side);\r\n  width: var(--svg-side);\r\n}\r\n\r\n.app-row textarea {\r\n  display: none;\r\n}\r\n\r\n.icon-trash-o {\r\n  display: none;\r\n}\r\n\r\n.app-container button,\r\n.app-container input {\r\n  border: none;\r\n  background-color: transparent;\r\n  font-size: var(--font-size);\r\n  height: var(--app-row-height);\r\n  padding-block: var(--app-row-block-pad);\r\n}\r\n\r\n#newitem {\r\n  font-style: italic;\r\n  font-weight: lighter;\r\n  width: 100%;\r\n}\r\n\r\n.app-container input:focus {\r\n  outline: none;\r\n}\r\n\r\n#sumbit-newitem {\r\n  background-image: url('./asset/resource/enter.png');\r\n  background-repeat: no-repeat;\r\n  background-position: center;\r\n  appearance: none;\r\n  cursor: pointer;\r\n  width: 40px;\r\n  height: 50px;\r\n}\r\n\r\n.app-container .clr-btn {\r\n  width: 100%;\r\n  color: darkslategrey;\r\n  background-color: rgb(229, 240, 250);\r\n  border-bottom-left-radius: 10px;\r\n  border-bottom-right-radius: 10px;\r\n}\r\n\r\n.clr-btn:hover {\r\n  text-decoration: underline;\r\n  color: black;\r\n}\r\n\r\n.app-container .item-chk {\r\n  border: 2px solid #c1c1c3;\r\n  cursor: pointer;\r\n  color: transparent;\r\n  height: var(--svg-side);\r\n  width: var(--svg-side);\r\n  border-radius: 2px;\r\n  display: flex;\r\n  align-items: center;\r\n}\r\n\r\n.icon-more-vert {\r\n  cursor: move;\r\n}\r\n\r\n.icon-check {\r\n  display: none;\r\n}\r\n\r\n.completed .icon-check {\r\n  display: inline;\r\n}\r\n\r\n.completed .app-text {\r\n  text-decoration: line-through;\r\n}\r\n"],"sourceRoot":""}]);
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
/* harmony import */ var _modules_ItemList_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/ItemList.js */ "./src/modules/ItemList.js");
/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.css */ "./src/index.css");



const listUl = document.querySelector('#add-items');
const newItem = document.querySelector('#newitem');
const clearBtn = document.querySelector('.clr-btn');
const localName = 'itemlist';

const listSec = document.querySelector('.list');
const submitBtn = document.getElementById('sumbit-newitem');
const ListOfItems = new _modules_ItemList_js__WEBPACK_IMPORTED_MODULE_0__.ItemList(localName);

const toggleCompleted = (e) => {
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
  }
};

const addItem = (e) => {
  e.preventDefault();
  ListOfItems.add(newItem, _modules_ItemList_js__WEBPACK_IMPORTED_MODULE_0__.xlinkHref, listUl);
};

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

_modules_ItemList_js__WEBPACK_IMPORTED_MODULE_0__.ItemList.renderList(listUl, localName);

listSec.addEventListener('click', toggleCompleted);
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
   * Method to remove book to local staorage, bookbiding and from DOM.
   * @param {string} descrip Description of item as input by user
   * @param {Array} xlink array of string with href for svg icons
   * @param {HTMLElement} itemContainer HTML element where list item are going to be added.
   * @param {Array} classesSec Array of strings with class names for each part of the section.
   * Length 4.
   * @returns {void}
   */
  add(descrip, xlink, ListContainer) {
    if (descrip.value.length) {
      const index = this.length + 1;
      const item = new _ListItemMod_js__WEBPACK_IMPORTED_MODULE_0__.ItemElem(descrip.value, index);
      this.itemArray = this.itemArray.concat(item);
      localStorage.setItem(this.localName, JSON.stringify(this.itemArray));
      const classesSec = itemClasses();
      ListContainer.appendChild((0,_ListItemMod_js__WEBPACK_IMPORTED_MODULE_0__.createListItem)(index, xlink, descrip.value, ...classesSec));
      this.length += 1;
    }
    descrip.value = '';
  }

  /**
 * Method to remove book from local staorage, bookbiding and from DOM.
 * @param {number} index position in array of books of the book to be removed.
 * @param {HTMLElement} bookRemove HTMLElement with book to be removed
 * @param {HTMLElement} bookshelf HTML element where books are going to be added.
 * @returns {void}
 */
  removeitem(id) {
    this.itemArray = this.itemArray.filter((item) => item.index !== id);
    localStorage.setItem(this.localName, JSON.stringify(this.itemArray));
    this.length -= 1;
  }

  togglecomplete(id) {
    id -= 1;
    this.itemArray[id].isCompleted = !this.itemArray[id].isCompleted;
    localStorage.setItem(this.localName, JSON.stringify(this.itemArray));
  }

  updateList(itemClass) {
    const itemsRender = document.querySelectorAll(itemClass);
    this.itemArray.forEach((listitem, i) => {
      const id = i + 1;
      listitem.index = id;
      itemsRender[i].dataset.index = id;
    });
    localStorage.setItem(this.localName, JSON.stringify(this.itemArray));
  }

  /**
 * Static method of BookBiding. Updates Local Storate and re renders bookshelf section.
 * @param {HTMLElement} bookshelf HTML element where books are going to be added.
 * @param {string} localName name to be used to add bookbinding to local storage.
 * @param {string} bookDivName name of class to be used to add book to bookshelf.
 * @returns {void} Void
 */
  static renderList(ListContainer, localName) {
    const itemList = localStorage.getItem(`${localName}`) ? JSON.parse(localStorage.getItem(`${localName}`)) : [];
    const ListFrag = document.createDocumentFragment();
    itemList.forEach((listitem) => {
      const { index, descrip, isCompleted } = listitem;
      const classesSec = itemClasses(isCompleted);
      ListFrag.appendChild((0,_ListItemMod_js__WEBPACK_IMPORTED_MODULE_0__.createListItem)(index, xlinkHref, descrip, ...classesSec));
    });
    while (ListContainer.childNodes.length > 2) {
      ListContainer.removeChild(ListContainer.lastChild);
    }
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSUU7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDekI2QztBQUNDO0FBQ2hEO0FBQ0E7QUFDQTtBQUNBLG1CQUFtQixvRkFBNEI7QUFDL0MsY0FBYyw2RUFBc0I7QUFDcEM7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpRUFBZTtBQUNmO0FBQ0EsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7QUNiRDtBQUNBO0FBQ0EsV0FBVyxhQUFhO0FBQ3hCLFdBQVcsUUFBUTtBQUNuQixhQUFhLGFBQWE7QUFDMUI7QUFDQTtBQUNBLDJEQUEyRCxRQUFRO0FBQ25FLDRGQUE0RixPQUFPO0FBQ25HO0FBQ0E7QUFDQTtBQUNBLGlFQUFlO0FBQ2Y7QUFDQSxDQUFDOzs7Ozs7Ozs7Ozs7OztBQ2REO0FBQ0E7QUFDQSxXQUFXLGFBQWE7QUFDeEIsV0FBVyxRQUFRO0FBQ25CLFdBQVcsUUFBUTtBQUNuQixhQUFhLGFBQWE7QUFDMUI7QUFDQTtBQUNBO0FBQ0Esc0NBQXNDLEtBQUs7QUFDM0M7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpRUFBZTtBQUNmO0FBQ0EsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7O0FDaEI4QztBQUMvQztBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsUUFBUTtBQUNuQixXQUFXLFFBQVE7QUFDbkI7QUFDQSxXQUFXLFFBQVE7QUFDbkI7QUFDQSxXQUFXLGFBQWE7QUFDeEIsYUFBYSxhQUFhO0FBQzFCO0FBQ0E7QUFDQTtBQUNBLEVBQUUsdUVBQWlCO0FBQ25CO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpRUFBZTtBQUNmO0FBQ0EsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL21pbmltYWxpc3RpYy10b2RvbGlzdC1hcHAvLi9zcmMvaW5kZXguY3NzIiwid2VicGFjazovL21pbmltYWxpc3RpYy10b2RvbGlzdC1hcHAvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL21pbmltYWxpc3RpYy10b2RvbGlzdC1hcHAvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzIiwid2VicGFjazovL21pbmltYWxpc3RpYy10b2RvbGlzdC1hcHAvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly9taW5pbWFsaXN0aWMtdG9kb2xpc3QtYXBwLy4vc3JjL2luZGV4LmNzcz9jZmU0Iiwid2VicGFjazovL21pbmltYWxpc3RpYy10b2RvbGlzdC1hcHAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vbWluaW1hbGlzdGljLXRvZG9saXN0LWFwcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vbWluaW1hbGlzdGljLXRvZG9saXN0LWFwcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly9taW5pbWFsaXN0aWMtdG9kb2xpc3QtYXBwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL21pbmltYWxpc3RpYy10b2RvbGlzdC1hcHAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly9taW5pbWFsaXN0aWMtdG9kb2xpc3QtYXBwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vbWluaW1hbGlzdGljLXRvZG9saXN0LWFwcC8uL3NyYy9pbmRleC5qcyIsIndlYnBhY2s6Ly9taW5pbWFsaXN0aWMtdG9kb2xpc3QtYXBwLy4vc3JjL21vZHVsZXMvSXRlbUxpc3QuanMiLCJ3ZWJwYWNrOi8vbWluaW1hbGlzdGljLXRvZG9saXN0LWFwcC8uL3NyYy9tb2R1bGVzL0xpc3RJdGVtTW9kLmpzIiwid2VicGFjazovL21pbmltYWxpc3RpYy10b2RvbGlzdC1hcHAvLi9zcmMvbW9kdWxlcy9idXR0b25HZW5lcmF0b3JNb2QuanMiLCJ3ZWJwYWNrOi8vbWluaW1hbGlzdGljLXRvZG9saXN0LWFwcC8uL3NyYy9tb2R1bGVzL2NyZWF0ZUxhYmVsLmpzIiwid2VicGFjazovL21pbmltYWxpc3RpYy10b2RvbGlzdC1hcHAvLi9zcmMvbW9kdWxlcy9jcmVhdGVTdmcuanMiLCJ3ZWJwYWNrOi8vbWluaW1hbGlzdGljLXRvZG9saXN0LWFwcC8uL3NyYy9tb2R1bGVzL2NyZWF0ZVRleHRBcmVhLmpzIiwid2VicGFjazovL21pbmltYWxpc3RpYy10b2RvbGlzdC1hcHAvLi9zcmMvbW9kdWxlcy9lbGVtZW50QWRkQ2xhc3NNb2QuanMiLCJ3ZWJwYWNrOi8vbWluaW1hbGlzdGljLXRvZG9saXN0LWFwcC8uL3NyYy9tb2R1bGVzL2VsZW1lbnRFeHRyYUF0dHJNb2QuanMiLCJ3ZWJwYWNrOi8vbWluaW1hbGlzdGljLXRvZG9saXN0LWFwcC8uL3NyYy9tb2R1bGVzL2VsZW1lbnRHZW5lcmF0b3JNb2QuanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fID0gbmV3IFVSTChcIi4vYXNzZXQvcmVzb3VyY2UvZW50ZXIucG5nXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiOnJvb3Qge1xcclxcbiAgLS1zdmctc2lkZTogY2xhbXAoMTZweCwgKDEwMHZ3IC0gMzIwcHgpICogMTAwMCwgY2xhbXAoMjBweCwgKDEwMHZ3IC0gNjQwcHgpICogMTAwMCwgY2xhbXAoMjVweCwgKDEwMHZ3IC0gMTI4MHB4KSAqIDEwMDAsIDMwcHgpKSk7XFxyXFxuICAtLWZvbnQtc2l6ZTogY2FsYyh2YXIoLS1zdmctc2lkZSkgKiAwLjgpO1xcclxcbiAgLS1hcHAtcm93LWJsb2NrLXBhZDogMTBweDtcXHJcXG4gIC0tYXBwLXJvdy1oZWlnaHQ6IGNhbGModmFyKC0tc3ZnLXNpZGUpICsgMiAqIHZhcigtLWFwcC1yb3ctYmxvY2stcGFkKSk7XFxyXFxufVxcclxcblxcclxcbioge1xcclxcbiAgcGFkZGluZzogMDtcXHJcXG4gIG1hcmdpbjogMDtcXHJcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxyXFxufVxcclxcblxcclxcbnVsLFxcclxcbmxpIHtcXHJcXG4gIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcXHJcXG59XFxyXFxuXFxyXFxuYm9keSB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC1mbG93OiBjb2x1bW47XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgcGFkZGluZy1ibG9jazogNDBweDtcXHJcXG4gIGdhcDogMzBweDtcXHJcXG59XFxyXFxuXFxyXFxuLmFwcC1jb250YWluZXIge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXgtZmxvdzogY29sdW1uO1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIHotaW5kZXg6IDE7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBhbGljZWJsdWU7XFxyXFxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xcclxcbiAgYm94LXNoYWRvdzogMCAwIDRweCA0cHggY2FkZXRibHVlO1xcclxcbn1cXHJcXG5cXHJcXG4uYXBwLXRleHQsXFxyXFxuLml0ZW0ge1xcclxcbiAgZm9udC1zaXplOiB2YXIoLS1mb250LXNpemUpO1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxufVxcclxcblxcclxcbi5hcHAtdGl0bGUge1xcclxcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxyXFxuICBmb250LXNpemU6IGNhbGModmFyKC0tZm9udC1zaXplKSAqIDEuMik7XFxyXFxufVxcclxcblxcclxcbi5hcHAtaW50ZXJhY3Qge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcXHJcXG4gIGdhcDogMTBweDtcXHJcXG59XFxyXFxuXFxyXFxuLmFwcC1yb3cge1xcclxcbiAgZGlzcGxheTogZ3JpZDtcXHJcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogYXV0byAxZnIgYXV0bztcXHJcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXHJcXG4gIGhlaWdodDogdmFyKC0tYXBwLXJvdy1oZWlnaHQpO1xcclxcbiAgcGFkZGluZy1ibG9jazogdmFyKC0tYXBwLXJvdy1ibG9jay1wYWQpO1xcclxcbiAgcGFkZGluZy1pbmxpbmU6IDE1cHg7XFxyXFxuICBjb2x1bW4tZ2FwOiAyMHB4O1xcclxcbiAgbWluLXdpZHRoOiBtaW4oODB2dywgMTIwMHB4KTtcXHJcXG59XFxyXFxuXFxyXFxuI2FwcC1pbnB1dCB7XFxyXFxuICBkaXNwbGF5OiBncmlkO1xcclxcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgYXV0bztcXHJcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgaGVpZ2h0OiB2YXIoLS1hcHAtcm93LWhlaWdodCk7XFxyXFxuICBwYWRkaW5nLWJsb2NrOiB2YXIoLS1hcHAtcm93LWJsb2NrLXBhZCk7XFxyXFxuICBwYWRkaW5nLWlubGluZTogMTVweDtcXHJcXG4gIGNvbHVtbi1nYXA6IDIwcHg7XFxyXFxuICBtaW4td2lkdGg6IG1pbig4MHZ3LCAxMjAwcHgpO1xcclxcbn1cXHJcXG5cXHJcXG5kaXYgYSxcXHJcXG5kaXYgc3ZnIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbn1cXHJcXG5cXHJcXG4uYXBwLXJvdyBzdmcge1xcclxcbiAgaGVpZ2h0OiB2YXIoLS1zdmctc2lkZSk7XFxyXFxuICB3aWR0aDogdmFyKC0tc3ZnLXNpZGUpO1xcclxcbn1cXHJcXG5cXHJcXG4uYXBwLXJvdyB0ZXh0YXJlYSB7XFxyXFxuICBkaXNwbGF5OiBub25lO1xcclxcbn1cXHJcXG5cXHJcXG4uaWNvbi10cmFzaC1vIHtcXHJcXG4gIGRpc3BsYXk6IG5vbmU7XFxyXFxufVxcclxcblxcclxcbi5hcHAtY29udGFpbmVyIGJ1dHRvbixcXHJcXG4uYXBwLWNvbnRhaW5lciBpbnB1dCB7XFxyXFxuICBib3JkZXI6IG5vbmU7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcXHJcXG4gIGZvbnQtc2l6ZTogdmFyKC0tZm9udC1zaXplKTtcXHJcXG4gIGhlaWdodDogdmFyKC0tYXBwLXJvdy1oZWlnaHQpO1xcclxcbiAgcGFkZGluZy1ibG9jazogdmFyKC0tYXBwLXJvdy1ibG9jay1wYWQpO1xcclxcbn1cXHJcXG5cXHJcXG4jbmV3aXRlbSB7XFxyXFxuICBmb250LXN0eWxlOiBpdGFsaWM7XFxyXFxuICBmb250LXdlaWdodDogbGlnaHRlcjtcXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbn1cXHJcXG5cXHJcXG4uYXBwLWNvbnRhaW5lciBpbnB1dDpmb2N1cyB7XFxyXFxuICBvdXRsaW5lOiBub25lO1xcclxcbn1cXHJcXG5cXHJcXG4jc3VtYml0LW5ld2l0ZW0ge1xcclxcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyArIFwiKTtcXHJcXG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XFxyXFxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XFxyXFxuICBhcHBlYXJhbmNlOiBub25lO1xcclxcbiAgY3Vyc29yOiBwb2ludGVyO1xcclxcbiAgd2lkdGg6IDQwcHg7XFxyXFxuICBoZWlnaHQ6IDUwcHg7XFxyXFxufVxcclxcblxcclxcbi5hcHAtY29udGFpbmVyIC5jbHItYnRuIHtcXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbiAgY29sb3I6IGRhcmtzbGF0ZWdyZXk7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjI5LCAyNDAsIDI1MCk7XFxyXFxuICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiAxMHB4O1xcclxcbiAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDEwcHg7XFxyXFxufVxcclxcblxcclxcbi5jbHItYnRuOmhvdmVyIHtcXHJcXG4gIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xcclxcbiAgY29sb3I6IGJsYWNrO1xcclxcbn1cXHJcXG5cXHJcXG4uYXBwLWNvbnRhaW5lciAuaXRlbS1jaGsge1xcclxcbiAgYm9yZGVyOiAycHggc29saWQgI2MxYzFjMztcXHJcXG4gIGN1cnNvcjogcG9pbnRlcjtcXHJcXG4gIGNvbG9yOiB0cmFuc3BhcmVudDtcXHJcXG4gIGhlaWdodDogdmFyKC0tc3ZnLXNpZGUpO1xcclxcbiAgd2lkdGg6IHZhcigtLXN2Zy1zaWRlKTtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDJweDtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbn1cXHJcXG5cXHJcXG4uaWNvbi1tb3JlLXZlcnQge1xcclxcbiAgY3Vyc29yOiBtb3ZlO1xcclxcbn1cXHJcXG5cXHJcXG4uaWNvbi1jaGVjayB7XFxyXFxuICBkaXNwbGF5OiBub25lO1xcclxcbn1cXHJcXG5cXHJcXG4uY29tcGxldGVkIC5pY29uLWNoZWNrIHtcXHJcXG4gIGRpc3BsYXk6IGlubGluZTtcXHJcXG59XFxyXFxuXFxyXFxuLmNvbXBsZXRlZCAuYXBwLXRleHQge1xcclxcbiAgdGV4dC1kZWNvcmF0aW9uOiBsaW5lLXRocm91Z2g7XFxyXFxufVxcclxcblwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9pbmRleC5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7RUFDRSxnSUFBZ0k7RUFDaEksd0NBQXdDO0VBQ3hDLHlCQUF5QjtFQUN6QixzRUFBc0U7QUFDeEU7O0FBRUE7RUFDRSxVQUFVO0VBQ1YsU0FBUztFQUNULHNCQUFzQjtBQUN4Qjs7QUFFQTs7RUFFRSxxQkFBcUI7QUFDdkI7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsaUJBQWlCO0VBQ2pCLG1CQUFtQjtFQUNuQixtQkFBbUI7RUFDbkIsU0FBUztBQUNYOztBQUVBO0VBQ0UsYUFBYTtFQUNiLGlCQUFpQjtFQUNqQixtQkFBbUI7RUFDbkIsVUFBVTtFQUNWLDJCQUEyQjtFQUMzQixtQkFBbUI7RUFDbkIsaUNBQWlDO0FBQ25DOztBQUVBOztFQUVFLDJCQUEyQjtFQUMzQixhQUFhO0VBQ2IsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsaUJBQWlCO0VBQ2pCLHVDQUF1QztBQUN6Qzs7QUFFQTtFQUNFLGFBQWE7RUFDYiwyQkFBMkI7RUFDM0IsU0FBUztBQUNYOztBQUVBO0VBQ0UsYUFBYTtFQUNiLG9DQUFvQztFQUNwQyw4QkFBOEI7RUFDOUIsNkJBQTZCO0VBQzdCLHVDQUF1QztFQUN2QyxvQkFBb0I7RUFDcEIsZ0JBQWdCO0VBQ2hCLDRCQUE0QjtBQUM5Qjs7QUFFQTtFQUNFLGFBQWE7RUFDYiwrQkFBK0I7RUFDL0IsdUJBQXVCO0VBQ3ZCLDZCQUE2QjtFQUM3Qix1Q0FBdUM7RUFDdkMsb0JBQW9CO0VBQ3BCLGdCQUFnQjtFQUNoQiw0QkFBNEI7QUFDOUI7O0FBRUE7O0VBRUUsYUFBYTtFQUNiLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLHVCQUF1QjtFQUN2QixzQkFBc0I7QUFDeEI7O0FBRUE7RUFDRSxhQUFhO0FBQ2Y7O0FBRUE7RUFDRSxhQUFhO0FBQ2Y7O0FBRUE7O0VBRUUsWUFBWTtFQUNaLDZCQUE2QjtFQUM3QiwyQkFBMkI7RUFDM0IsNkJBQTZCO0VBQzdCLHVDQUF1QztBQUN6Qzs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixvQkFBb0I7RUFDcEIsV0FBVztBQUNiOztBQUVBO0VBQ0UsYUFBYTtBQUNmOztBQUVBO0VBQ0UseURBQW1EO0VBQ25ELDRCQUE0QjtFQUM1QiwyQkFBMkI7RUFDM0IsZ0JBQWdCO0VBQ2hCLGVBQWU7RUFDZixXQUFXO0VBQ1gsWUFBWTtBQUNkOztBQUVBO0VBQ0UsV0FBVztFQUNYLG9CQUFvQjtFQUNwQixvQ0FBb0M7RUFDcEMsK0JBQStCO0VBQy9CLGdDQUFnQztBQUNsQzs7QUFFQTtFQUNFLDBCQUEwQjtFQUMxQixZQUFZO0FBQ2Q7O0FBRUE7RUFDRSx5QkFBeUI7RUFDekIsZUFBZTtFQUNmLGtCQUFrQjtFQUNsQix1QkFBdUI7RUFDdkIsc0JBQXNCO0VBQ3RCLGtCQUFrQjtFQUNsQixhQUFhO0VBQ2IsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsWUFBWTtBQUNkOztBQUVBO0VBQ0UsYUFBYTtBQUNmOztBQUVBO0VBQ0UsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLDZCQUE2QjtBQUMvQlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCI6cm9vdCB7XFxyXFxuICAtLXN2Zy1zaWRlOiBjbGFtcCgxNnB4LCAoMTAwdncgLSAzMjBweCkgKiAxMDAwLCBjbGFtcCgyMHB4LCAoMTAwdncgLSA2NDBweCkgKiAxMDAwLCBjbGFtcCgyNXB4LCAoMTAwdncgLSAxMjgwcHgpICogMTAwMCwgMzBweCkpKTtcXHJcXG4gIC0tZm9udC1zaXplOiBjYWxjKHZhcigtLXN2Zy1zaWRlKSAqIDAuOCk7XFxyXFxuICAtLWFwcC1yb3ctYmxvY2stcGFkOiAxMHB4O1xcclxcbiAgLS1hcHAtcm93LWhlaWdodDogY2FsYyh2YXIoLS1zdmctc2lkZSkgKyAyICogdmFyKC0tYXBwLXJvdy1ibG9jay1wYWQpKTtcXHJcXG59XFxyXFxuXFxyXFxuKiB7XFxyXFxuICBwYWRkaW5nOiAwO1xcclxcbiAgbWFyZ2luOiAwO1xcclxcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXHJcXG59XFxyXFxuXFxyXFxudWwsXFxyXFxubGkge1xcclxcbiAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xcclxcbn1cXHJcXG5cXHJcXG5ib2R5IHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LWZsb3c6IGNvbHVtbjtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICBwYWRkaW5nLWJsb2NrOiA0MHB4O1xcclxcbiAgZ2FwOiAzMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4uYXBwLWNvbnRhaW5lciB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC1mbG93OiBjb2x1bW47XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgei1pbmRleDogMTtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IGFsaWNlYmx1ZTtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxyXFxuICBib3gtc2hhZG93OiAwIDAgNHB4IDRweCBjYWRldGJsdWU7XFxyXFxufVxcclxcblxcclxcbi5hcHAtdGV4dCxcXHJcXG4uaXRlbSB7XFxyXFxuICBmb250LXNpemU6IHZhcigtLWZvbnQtc2l6ZSk7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLmFwcC10aXRsZSB7XFxyXFxuICBmb250LXdlaWdodDogYm9sZDtcXHJcXG4gIGZvbnQtc2l6ZTogY2FsYyh2YXIoLS1mb250LXNpemUpICogMS4yKTtcXHJcXG59XFxyXFxuXFxyXFxuLmFwcC1pbnRlcmFjdCB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xcclxcbiAgZ2FwOiAxMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4uYXBwLXJvdyB7XFxyXFxuICBkaXNwbGF5OiBncmlkO1xcclxcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiBhdXRvIDFmciBhdXRvO1xcclxcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcclxcbiAgaGVpZ2h0OiB2YXIoLS1hcHAtcm93LWhlaWdodCk7XFxyXFxuICBwYWRkaW5nLWJsb2NrOiB2YXIoLS1hcHAtcm93LWJsb2NrLXBhZCk7XFxyXFxuICBwYWRkaW5nLWlubGluZTogMTVweDtcXHJcXG4gIGNvbHVtbi1nYXA6IDIwcHg7XFxyXFxuICBtaW4td2lkdGg6IG1pbig4MHZ3LCAxMjAwcHgpO1xcclxcbn1cXHJcXG5cXHJcXG4jYXBwLWlucHV0IHtcXHJcXG4gIGRpc3BsYXk6IGdyaWQ7XFxyXFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciBhdXRvO1xcclxcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICBoZWlnaHQ6IHZhcigtLWFwcC1yb3ctaGVpZ2h0KTtcXHJcXG4gIHBhZGRpbmctYmxvY2s6IHZhcigtLWFwcC1yb3ctYmxvY2stcGFkKTtcXHJcXG4gIHBhZGRpbmctaW5saW5lOiAxNXB4O1xcclxcbiAgY29sdW1uLWdhcDogMjBweDtcXHJcXG4gIG1pbi13aWR0aDogbWluKDgwdncsIDEyMDBweCk7XFxyXFxufVxcclxcblxcclxcbmRpdiBhLFxcclxcbmRpdiBzdmcge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxufVxcclxcblxcclxcbi5hcHAtcm93IHN2ZyB7XFxyXFxuICBoZWlnaHQ6IHZhcigtLXN2Zy1zaWRlKTtcXHJcXG4gIHdpZHRoOiB2YXIoLS1zdmctc2lkZSk7XFxyXFxufVxcclxcblxcclxcbi5hcHAtcm93IHRleHRhcmVhIHtcXHJcXG4gIGRpc3BsYXk6IG5vbmU7XFxyXFxufVxcclxcblxcclxcbi5pY29uLXRyYXNoLW8ge1xcclxcbiAgZGlzcGxheTogbm9uZTtcXHJcXG59XFxyXFxuXFxyXFxuLmFwcC1jb250YWluZXIgYnV0dG9uLFxcclxcbi5hcHAtY29udGFpbmVyIGlucHV0IHtcXHJcXG4gIGJvcmRlcjogbm9uZTtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xcclxcbiAgZm9udC1zaXplOiB2YXIoLS1mb250LXNpemUpO1xcclxcbiAgaGVpZ2h0OiB2YXIoLS1hcHAtcm93LWhlaWdodCk7XFxyXFxuICBwYWRkaW5nLWJsb2NrOiB2YXIoLS1hcHAtcm93LWJsb2NrLXBhZCk7XFxyXFxufVxcclxcblxcclxcbiNuZXdpdGVtIHtcXHJcXG4gIGZvbnQtc3R5bGU6IGl0YWxpYztcXHJcXG4gIGZvbnQtd2VpZ2h0OiBsaWdodGVyO1xcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxufVxcclxcblxcclxcbi5hcHAtY29udGFpbmVyIGlucHV0OmZvY3VzIHtcXHJcXG4gIG91dGxpbmU6IG5vbmU7XFxyXFxufVxcclxcblxcclxcbiNzdW1iaXQtbmV3aXRlbSB7XFxyXFxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJy4vYXNzZXQvcmVzb3VyY2UvZW50ZXIucG5nJyk7XFxyXFxuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xcclxcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xcclxcbiAgYXBwZWFyYW5jZTogbm9uZTtcXHJcXG4gIGN1cnNvcjogcG9pbnRlcjtcXHJcXG4gIHdpZHRoOiA0MHB4O1xcclxcbiAgaGVpZ2h0OiA1MHB4O1xcclxcbn1cXHJcXG5cXHJcXG4uYXBwLWNvbnRhaW5lciAuY2xyLWJ0biB7XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG4gIGNvbG9yOiBkYXJrc2xhdGVncmV5O1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDIyOSwgMjQwLCAyNTApO1xcclxcbiAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogMTBweDtcXHJcXG4gIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiAxMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4uY2xyLWJ0bjpob3ZlciB7XFxyXFxuICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcXHJcXG4gIGNvbG9yOiBibGFjaztcXHJcXG59XFxyXFxuXFxyXFxuLmFwcC1jb250YWluZXIgLml0ZW0tY2hrIHtcXHJcXG4gIGJvcmRlcjogMnB4IHNvbGlkICNjMWMxYzM7XFxyXFxuICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxuICBjb2xvcjogdHJhbnNwYXJlbnQ7XFxyXFxuICBoZWlnaHQ6IHZhcigtLXN2Zy1zaWRlKTtcXHJcXG4gIHdpZHRoOiB2YXIoLS1zdmctc2lkZSk7XFxyXFxuICBib3JkZXItcmFkaXVzOiAycHg7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLmljb24tbW9yZS12ZXJ0IHtcXHJcXG4gIGN1cnNvcjogbW92ZTtcXHJcXG59XFxyXFxuXFxyXFxuLmljb24tY2hlY2sge1xcclxcbiAgZGlzcGxheTogbm9uZTtcXHJcXG59XFxyXFxuXFxyXFxuLmNvbXBsZXRlZCAuaWNvbi1jaGVjayB7XFxyXFxuICBkaXNwbGF5OiBpbmxpbmU7XFxyXFxufVxcclxcblxcclxcbi5jb21wbGV0ZWQgLmFwcC10ZXh0IHtcXHJcXG4gIHRleHQtZGVjb3JhdGlvbjogbGluZS10aHJvdWdoO1xcclxcbn1cXHJcXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107XG5cbiAgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07XG5cbiAgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAodXJsLCBvcHRpb25zKSB7XG4gIGlmICghb3B0aW9ucykge1xuICAgIG9wdGlvbnMgPSB7fTtcbiAgfVxuICBpZiAoIXVybCkge1xuICAgIHJldHVybiB1cmw7XG4gIH1cbiAgdXJsID0gU3RyaW5nKHVybC5fX2VzTW9kdWxlID8gdXJsLmRlZmF1bHQgOiB1cmwpO1xuXG4gIC8vIElmIHVybCBpcyBhbHJlYWR5IHdyYXBwZWQgaW4gcXVvdGVzLCByZW1vdmUgdGhlbVxuICBpZiAoL15bJ1wiXS4qWydcIl0kLy50ZXN0KHVybCkpIHtcbiAgICB1cmwgPSB1cmwuc2xpY2UoMSwgLTEpO1xuICB9XG4gIGlmIChvcHRpb25zLmhhc2gpIHtcbiAgICB1cmwgKz0gb3B0aW9ucy5oYXNoO1xuICB9XG5cbiAgLy8gU2hvdWxkIHVybCBiZSB3cmFwcGVkP1xuICAvLyBTZWUgaHR0cHM6Ly9kcmFmdHMuY3Nzd2cub3JnL2Nzcy12YWx1ZXMtMy8jdXJsc1xuICBpZiAoL1tcIicoKSBcXHRcXG5dfCglMjApLy50ZXN0KHVybCkgfHwgb3B0aW9ucy5uZWVkUXVvdGVzKSB7XG4gICAgcmV0dXJuIFwiXFxcIlwiLmNvbmNhdCh1cmwucmVwbGFjZSgvXCIvZywgJ1xcXFxcIicpLnJlcGxhY2UoL1xcbi9nLCBcIlxcXFxuXCIpLCBcIlxcXCJcIik7XG4gIH1cbiAgcmV0dXJuIHVybDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vaW5kZXguY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9pbmRleC5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gdXBkYXRlcjtcbn1cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTtcblxuICAgIC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuICBjc3MgKz0gb2JqLmNzcztcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfVxuXG4gIC8vIEZvciBvbGQgSUVcbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgaWYgKHR5cGVvZiBkb2N1bWVudCA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHJldHVybiB7XG4gICAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZSgpIHt9LFxuICAgICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7fVxuICAgIH07XG4gIH1cbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImltcG9ydCB7IEl0ZW1MaXN0LCB4bGlua0hyZWYgfSBmcm9tICcuL21vZHVsZXMvSXRlbUxpc3QuanMnO1xuaW1wb3J0ICcuL2luZGV4LmNzcyc7XG5cbmNvbnN0IGxpc3RVbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNhZGQtaXRlbXMnKTtcbmNvbnN0IG5ld0l0ZW0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjbmV3aXRlbScpO1xuY29uc3QgY2xlYXJCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY2xyLWJ0bicpO1xuY29uc3QgbG9jYWxOYW1lID0gJ2l0ZW1saXN0JztcblxuY29uc3QgbGlzdFNlYyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5saXN0Jyk7XG5jb25zdCBzdWJtaXRCdG4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc3VtYml0LW5ld2l0ZW0nKTtcbmNvbnN0IExpc3RPZkl0ZW1zID0gbmV3IEl0ZW1MaXN0KGxvY2FsTmFtZSk7XG5cbmNvbnN0IHRvZ2dsZUNvbXBsZXRlZCA9IChlKSA9PiB7XG4gIGUucHJldmVudERlZmF1bHQoKTtcbiAgaWYgKGUudGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucygnaXRlbS1jaGsnKSkge1xuICAgIGNvbnN0IGxpc3RJdGVtID0gZS50YXJnZXQucGFyZW50Tm9kZTtcbiAgICBsaXN0SXRlbS5jbGFzc0xpc3QudG9nZ2xlKCdjb21wbGV0ZWQnKTtcbiAgICBMaXN0T2ZJdGVtcy50b2dnbGVjb21wbGV0ZShwYXJzZUludChsaXN0SXRlbS5kYXRhc2V0LmluZGV4LCAxMCkpO1xuICB9IGVsc2UgaWYgKGUudGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucygnaWNvbi1jaGVjaycpKSB7XG4gICAgY29uc3QgbGlzdEl0ZW0gPSBlLnRhcmdldC5wYXJlbnROb2RlLnBhcmVudE5vZGU7XG4gICAgbGlzdEl0ZW0uY2xhc3NMaXN0LnRvZ2dsZSgnY29tcGxldGVkJyk7XG4gICAgTGlzdE9mSXRlbXMudG9nZ2xlY29tcGxldGUocGFyc2VJbnQobGlzdEl0ZW0uZGF0YXNldC5pbmRleCwgMTApKTtcbiAgfSBlbHNlIGlmIChlLnRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoJ2ljb24tY2hlY2stdXNlJykpIHtcbiAgICBjb25zdCBsaXN0SXRlbSA9IGUudGFyZ2V0LnBhcmVudE5vZGUucGFyZW50Tm9kZS5wYXJlbnROb2RlO1xuICAgIGxpc3RJdGVtLmNsYXNzTGlzdC50b2dnbGUoJ2NvbXBsZXRlZCcpO1xuICAgIExpc3RPZkl0ZW1zLnRvZ2dsZWNvbXBsZXRlKHBhcnNlSW50KGxpc3RJdGVtLmRhdGFzZXQuaW5kZXgsIDEwKSk7XG4gIH1cbn07XG5cbmNvbnN0IGFkZEl0ZW0gPSAoZSkgPT4ge1xuICBlLnByZXZlbnREZWZhdWx0KCk7XG4gIExpc3RPZkl0ZW1zLmFkZChuZXdJdGVtLCB4bGlua0hyZWYsIGxpc3RVbCk7XG59O1xuXG5jb25zdCByZW1vdmVJdGVtcyA9IChlKSA9PiB7XG4gIGUucHJldmVudERlZmF1bHQoKTtcbiAgY29uc3QgaXRlbUNvbXBsZXRlZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5jb21wbGV0ZWQnKTtcbiAgaWYgKGl0ZW1Db21wbGV0ZWQubGVuZ3RoID4gMCkge1xuICAgIGl0ZW1Db21wbGV0ZWQuZm9yRWFjaCgoZGVsSXRlbSkgPT4ge1xuICAgICAgTGlzdE9mSXRlbXMucmVtb3ZlaXRlbShwYXJzZUludChkZWxJdGVtLmRhdGFzZXQuaW5kZXgsIDEwKSwgZGVsSXRlbSwgbGlzdFVsKTtcbiAgICB9KTtcbiAgICBpdGVtQ29tcGxldGVkLmZvckVhY2goKGRlbEl0ZW0pID0+IHtcbiAgICAgIGxpc3RVbC5yZW1vdmVDaGlsZChkZWxJdGVtKTtcbiAgICB9KTtcbiAgICBMaXN0T2ZJdGVtcy51cGRhdGVMaXN0KCcuYXBwLWl0ZW0nKTtcbiAgfVxufTtcblxuSXRlbUxpc3QucmVuZGVyTGlzdChsaXN0VWwsIGxvY2FsTmFtZSk7XG5cbmxpc3RTZWMuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0b2dnbGVDb21wbGV0ZWQpO1xuc3VibWl0QnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgYWRkSXRlbSk7XG5jbGVhckJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHJlbW92ZUl0ZW1zKTsiLCJpbXBvcnQgeyBjcmVhdGVMaXN0SXRlbSwgSXRlbUVsZW0gfSBmcm9tICcuL0xpc3RJdGVtTW9kLmpzJztcbmltcG9ydCBpY29uIGZyb20gJy4uL2Fzc2V0L3Jlc291cmNlL2ljb25zLnN2Zyc7XG5cbmNvbnN0IHhsaW5rSHJlZiA9IFtgJHtpY29ufSNpY29uLWNoZWNrYCwgJy4vYXNzZXQvcmVzb3VyY2UvaWNvbnMuc3ZnI2ljb24tbW9yZS12ZXJ0JyxcbiAgJy4vYXNzZXQvcmVzb3VyY2UvaWNvbnMuc3ZnI2ljb24tdHJhc2gtbyddO1xuXG5jb25zdCBpdGVtQ2xhc3NlcyA9IChzdGF0dXMgPSBmYWxzZSkgPT4ge1xuICBjb25zdCBjbGFzc0xpc3RJbmNvbXAgPSBbJ2FwcC1yb3cnLCAnYXBwLWl0ZW0nXTtcbiAgY29uc3QgY2xhc3NMaXN0Q29tcCA9IFsnYXBwLXJvdycsICdhcHAtaXRlbScsICdjb21wbGV0ZWQnXTtcbiAgY29uc3QgY2xhc3NCdG4gPSAnaXRlbS1jaGsnO1xuICBjb25zdCBjbGFzc0RpdlRleHQgPSAnaXRlbSc7XG4gIGNvbnN0IGNsYXNzVGV4dCA9ICdhcHAtdGV4dCc7XG4gIGNvbnN0IGNsYXNzTGlzdCA9IHN0YXR1cyA/IGNsYXNzTGlzdENvbXAgOiBjbGFzc0xpc3RJbmNvbXA7XG4gIGNvbnN0IHRlbXAgPSBbY2xhc3NMaXN0LCBjbGFzc0J0biwgY2xhc3NEaXZUZXh0LCBjbGFzc1RleHRdO1xuICByZXR1cm4gdGVtcDtcbn07XG5cbi8qKlxuICogQ2xhc3MgdGhhdCBjcmVhdGVzIGFuZCBhcnJheSB0byBib29rIGNsYXNzIGluc3RhbmNlcyB0byBiZSBhZGRlZCB0byBsb2NhbCBzdG9yYWdlXG4gKiBhbmQgYWRkZWQgdG8gRE9NLlxuICogQHBhcmFtIHtzdHJpbmd9IGxvY2FsTmFtZSBuYW1lIHRvIGJlIHVzZWQgdG8gYWRkIGJvb2tiaW5kaW5nIHRvIGxvY2FsIHN0b3JhZ2UuXG4gKiBAcmV0dXJucyB7b2JqZWN0fSByZXR1cm4gaW5zdGFuY2Ugb2YgYm9va2JpZGluZyBjbGFzcyB3aXRoIGFuIGFycmF5IG9mIGJvb2sgY2xhc3MgaW5zdGFuY2VzLlxuICovXG5jbGFzcyBJdGVtTGlzdCB7XG4gIGNvbnN0cnVjdG9yKGxvY2FsTmFtZSkge1xuICAgIHRoaXMuaXRlbUFycmF5ID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oYCR7bG9jYWxOYW1lfWApID8gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbShgJHtsb2NhbE5hbWV9YCkpIDogW107XG4gICAgdGhpcy5sb2NhbE5hbWUgPSBsb2NhbE5hbWU7XG4gICAgdGhpcy5sZW5ndGggPSB0aGlzLml0ZW1BcnJheS5sZW5ndGg7XG4gIH1cblxuICAvKipcbiAgICogTWV0aG9kIHRvIHJlbW92ZSBib29rIHRvIGxvY2FsIHN0YW9yYWdlLCBib29rYmlkaW5nIGFuZCBmcm9tIERPTS5cbiAgICogQHBhcmFtIHtzdHJpbmd9IGRlc2NyaXAgRGVzY3JpcHRpb24gb2YgaXRlbSBhcyBpbnB1dCBieSB1c2VyXG4gICAqIEBwYXJhbSB7QXJyYXl9IHhsaW5rIGFycmF5IG9mIHN0cmluZyB3aXRoIGhyZWYgZm9yIHN2ZyBpY29uc1xuICAgKiBAcGFyYW0ge0hUTUxFbGVtZW50fSBpdGVtQ29udGFpbmVyIEhUTUwgZWxlbWVudCB3aGVyZSBsaXN0IGl0ZW0gYXJlIGdvaW5nIHRvIGJlIGFkZGVkLlxuICAgKiBAcGFyYW0ge0FycmF5fSBjbGFzc2VzU2VjIEFycmF5IG9mIHN0cmluZ3Mgd2l0aCBjbGFzcyBuYW1lcyBmb3IgZWFjaCBwYXJ0IG9mIHRoZSBzZWN0aW9uLlxuICAgKiBMZW5ndGggNC5cbiAgICogQHJldHVybnMge3ZvaWR9XG4gICAqL1xuICBhZGQoZGVzY3JpcCwgeGxpbmssIExpc3RDb250YWluZXIpIHtcbiAgICBpZiAoZGVzY3JpcC52YWx1ZS5sZW5ndGgpIHtcbiAgICAgIGNvbnN0IGluZGV4ID0gdGhpcy5sZW5ndGggKyAxO1xuICAgICAgY29uc3QgaXRlbSA9IG5ldyBJdGVtRWxlbShkZXNjcmlwLnZhbHVlLCBpbmRleCk7XG4gICAgICB0aGlzLml0ZW1BcnJheSA9IHRoaXMuaXRlbUFycmF5LmNvbmNhdChpdGVtKTtcbiAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKHRoaXMubG9jYWxOYW1lLCBKU09OLnN0cmluZ2lmeSh0aGlzLml0ZW1BcnJheSkpO1xuICAgICAgY29uc3QgY2xhc3Nlc1NlYyA9IGl0ZW1DbGFzc2VzKCk7XG4gICAgICBMaXN0Q29udGFpbmVyLmFwcGVuZENoaWxkKGNyZWF0ZUxpc3RJdGVtKGluZGV4LCB4bGluaywgZGVzY3JpcC52YWx1ZSwgLi4uY2xhc3Nlc1NlYykpO1xuICAgICAgdGhpcy5sZW5ndGggKz0gMTtcbiAgICB9XG4gICAgZGVzY3JpcC52YWx1ZSA9ICcnO1xuICB9XG5cbiAgLyoqXG4gKiBNZXRob2QgdG8gcmVtb3ZlIGJvb2sgZnJvbSBsb2NhbCBzdGFvcmFnZSwgYm9va2JpZGluZyBhbmQgZnJvbSBET00uXG4gKiBAcGFyYW0ge251bWJlcn0gaW5kZXggcG9zaXRpb24gaW4gYXJyYXkgb2YgYm9va3Mgb2YgdGhlIGJvb2sgdG8gYmUgcmVtb3ZlZC5cbiAqIEBwYXJhbSB7SFRNTEVsZW1lbnR9IGJvb2tSZW1vdmUgSFRNTEVsZW1lbnQgd2l0aCBib29rIHRvIGJlIHJlbW92ZWRcbiAqIEBwYXJhbSB7SFRNTEVsZW1lbnR9IGJvb2tzaGVsZiBIVE1MIGVsZW1lbnQgd2hlcmUgYm9va3MgYXJlIGdvaW5nIHRvIGJlIGFkZGVkLlxuICogQHJldHVybnMge3ZvaWR9XG4gKi9cbiAgcmVtb3ZlaXRlbShpZCkge1xuICAgIHRoaXMuaXRlbUFycmF5ID0gdGhpcy5pdGVtQXJyYXkuZmlsdGVyKChpdGVtKSA9PiBpdGVtLmluZGV4ICE9PSBpZCk7XG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0odGhpcy5sb2NhbE5hbWUsIEpTT04uc3RyaW5naWZ5KHRoaXMuaXRlbUFycmF5KSk7XG4gICAgdGhpcy5sZW5ndGggLT0gMTtcbiAgfVxuXG4gIHRvZ2dsZWNvbXBsZXRlKGlkKSB7XG4gICAgaWQgLT0gMTtcbiAgICB0aGlzLml0ZW1BcnJheVtpZF0uaXNDb21wbGV0ZWQgPSAhdGhpcy5pdGVtQXJyYXlbaWRdLmlzQ29tcGxldGVkO1xuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKHRoaXMubG9jYWxOYW1lLCBKU09OLnN0cmluZ2lmeSh0aGlzLml0ZW1BcnJheSkpO1xuICB9XG5cbiAgdXBkYXRlTGlzdChpdGVtQ2xhc3MpIHtcbiAgICBjb25zdCBpdGVtc1JlbmRlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoaXRlbUNsYXNzKTtcbiAgICB0aGlzLml0ZW1BcnJheS5mb3JFYWNoKChsaXN0aXRlbSwgaSkgPT4ge1xuICAgICAgY29uc3QgaWQgPSBpICsgMTtcbiAgICAgIGxpc3RpdGVtLmluZGV4ID0gaWQ7XG4gICAgICBpdGVtc1JlbmRlcltpXS5kYXRhc2V0LmluZGV4ID0gaWQ7XG4gICAgfSk7XG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0odGhpcy5sb2NhbE5hbWUsIEpTT04uc3RyaW5naWZ5KHRoaXMuaXRlbUFycmF5KSk7XG4gIH1cblxuICAvKipcbiAqIFN0YXRpYyBtZXRob2Qgb2YgQm9va0JpZGluZy4gVXBkYXRlcyBMb2NhbCBTdG9yYXRlIGFuZCByZSByZW5kZXJzIGJvb2tzaGVsZiBzZWN0aW9uLlxuICogQHBhcmFtIHtIVE1MRWxlbWVudH0gYm9va3NoZWxmIEhUTUwgZWxlbWVudCB3aGVyZSBib29rcyBhcmUgZ29pbmcgdG8gYmUgYWRkZWQuXG4gKiBAcGFyYW0ge3N0cmluZ30gbG9jYWxOYW1lIG5hbWUgdG8gYmUgdXNlZCB0byBhZGQgYm9va2JpbmRpbmcgdG8gbG9jYWwgc3RvcmFnZS5cbiAqIEBwYXJhbSB7c3RyaW5nfSBib29rRGl2TmFtZSBuYW1lIG9mIGNsYXNzIHRvIGJlIHVzZWQgdG8gYWRkIGJvb2sgdG8gYm9va3NoZWxmLlxuICogQHJldHVybnMge3ZvaWR9IFZvaWRcbiAqL1xuICBzdGF0aWMgcmVuZGVyTGlzdChMaXN0Q29udGFpbmVyLCBsb2NhbE5hbWUpIHtcbiAgICBjb25zdCBpdGVtTGlzdCA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKGAke2xvY2FsTmFtZX1gKSA/IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oYCR7bG9jYWxOYW1lfWApKSA6IFtdO1xuICAgIGNvbnN0IExpc3RGcmFnID0gZG9jdW1lbnQuY3JlYXRlRG9jdW1lbnRGcmFnbWVudCgpO1xuICAgIGl0ZW1MaXN0LmZvckVhY2goKGxpc3RpdGVtKSA9PiB7XG4gICAgICBjb25zdCB7IGluZGV4LCBkZXNjcmlwLCBpc0NvbXBsZXRlZCB9ID0gbGlzdGl0ZW07XG4gICAgICBjb25zdCBjbGFzc2VzU2VjID0gaXRlbUNsYXNzZXMoaXNDb21wbGV0ZWQpO1xuICAgICAgTGlzdEZyYWcuYXBwZW5kQ2hpbGQoY3JlYXRlTGlzdEl0ZW0oaW5kZXgsIHhsaW5rSHJlZiwgZGVzY3JpcCwgLi4uY2xhc3Nlc1NlYykpO1xuICAgIH0pO1xuICAgIHdoaWxlIChMaXN0Q29udGFpbmVyLmNoaWxkTm9kZXMubGVuZ3RoID4gMikge1xuICAgICAgTGlzdENvbnRhaW5lci5yZW1vdmVDaGlsZChMaXN0Q29udGFpbmVyLmxhc3RDaGlsZCk7XG4gICAgfVxuICAgIExpc3RDb250YWluZXIuYXBwZW5kQ2hpbGQoTGlzdEZyYWcpO1xuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKGAke2xvY2FsTmFtZX1gLCBKU09OLnN0cmluZ2lmeShpdGVtTGlzdCkpO1xuICB9XG59XG5cbmV4cG9ydCB7XG4gIEl0ZW1MaXN0LCB4bGlua0hyZWYsXG59OyIsImltcG9ydCBlbGVtR2VuIGZyb20gJy4vZWxlbWVudEdlbmVyYXRvck1vZC5qcyc7XG5pbXBvcnQgZXh0cmFBdHQgZnJvbSAnLi9lbGVtZW50RXh0cmFBdHRyTW9kLmpzJztcbmltcG9ydCBidG4gZnJvbSAnLi9idXR0b25HZW5lcmF0b3JNb2QuanMnO1xuaW1wb3J0IHsgY3JlYXRlTlMgfSBmcm9tICcuL2NyZWF0ZVN2Zy5qcyc7XG5pbXBvcnQgdGV4dCBmcm9tICcuL2NyZWF0ZVRleHRBcmVhLmpzJztcbmltcG9ydCBsYWJlbCBmcm9tICcuL2NyZWF0ZUxhYmVsLmpzJztcblxuY29uc3QgY3JlYXRlTGlzdEl0ZW0gPSAoaW5kZXgsIGhyZWYsIHRleHRDb250ZW50LCBjbGFzc0xpc3QgPSBmYWxzZSwgY2xhc3NCdG4gPSBmYWxzZSxcbiAgY2xhc3NEaXZUZXh0ID0gZmFsc2UsIGNsYXNzVGV4dCA9IGZhbHNlKSA9PiB7XG4gIGNvbnN0IGRvY0ZyYWcgPSBkb2N1bWVudC5jcmVhdGVEb2N1bWVudEZyYWdtZW50KCk7XG4gIGNvbnN0IHN2Z0J0biA9IGNyZWF0ZU5TKGhyZWZbMF0pO1xuICBjb25zdCBjaGtCdG4gPSBidG4uY3JlYXRlQnV0dG9uKCdidXR0b24nLCBjbGFzc0J0biwgJ0NoZWNrIERvbmUnLCBmYWxzZSwgc3ZnQnRuKTtcbiAgZXh0cmFBdHQuYWRkQXR0cmlidXRlcyhjaGtCdG4sIGZhbHNlLCBmYWxzZSwgJ3RhYmluZGV4JywgJzAnKTtcbiAgZG9jRnJhZy5hcHBlbmRDaGlsZChjaGtCdG4pO1xuICBjb25zdCBsYWJlbFR4dCA9IGxhYmVsLmNyZWF0ZUxhYmVsKGZhbHNlLCBjbGFzc1RleHQsIHRleHRDb250ZW50KTtcbiAgZXh0cmFBdHQuYWRkQXR0cmlidXRlcyhsYWJlbFR4dCwgZmFsc2UsIGZhbHNlLCAndGFiaW5kZXgnLCAnMCcpO1xuICBjb25zdCBkaXZUZXh0ID0gZWxlbUdlbi5jcmVhdGVFbGVtZW50RGVmYXVsdCgnZGl2JywgY2xhc3NEaXZUZXh0LCBmYWxzZSwgbGFiZWxUeHQpO1xuICBjb25zdCB0eHRBcmVhID0gdGV4dC5jcmVhdGVUZXh0QXJlYSgnMjU1JywgY2xhc3NUZXh0LCB0ZXh0Q29udGVudCk7XG4gIGRpdlRleHQuYXBwZW5kQ2hpbGQodHh0QXJlYSk7XG4gIGRvY0ZyYWcuYXBwZW5kQ2hpbGQoZGl2VGV4dCk7XG4gIGNvbnN0IHN2Z01vdmUgPSBjcmVhdGVOUyhocmVmWzFdKTtcbiAgZG9jRnJhZy5hcHBlbmRDaGlsZChzdmdNb3ZlKTtcbiAgY29uc3Qgc3ZnUmVtb3ZlID0gY3JlYXRlTlMoaHJlZlsyXSk7XG4gIGRvY0ZyYWcuYXBwZW5kQ2hpbGQoc3ZnUmVtb3ZlKTtcbiAgY29uc3QgbGlzdEl0ZW0gPSBlbGVtR2VuLmNyZWF0ZUVsZW1lbnREZWZhdWx0KCdsaScsIGNsYXNzTGlzdCwgZmFsc2UsIGRvY0ZyYWcpO1xuICBleHRyYUF0dC5hZGRBdHRyaWJ1dGVzKGxpc3RJdGVtLCAnaW5kZXgnLCBpbmRleCk7XG4gIHJldHVybiBsaXN0SXRlbTtcbn07XG5cbi8qKlxuICogQ2xhc3Mgb2YgTGlzdCBJdGVhbSB0byBiZSBpbnN0YXRpYXRlZCB3aXRoIDMgcHJvcGVydGllc1xuICogQHBhcmFtIHtzdHJpbmd9IGRlc2NyaXAgRGVzY3JpcHRpb24gb2YgTGlzdCBJdGVtXG4gKiBAcGFyYW0ge2Jvb2xlYW59IGlzQ29tcGxldGVkIENvbXBsZXRpb24gc3RhdHVzIG9mIExpc3QgSXRlbVxuICogQHBhcmFtIHtudW1iZXJ9IGluZGV4IFBvc2l0aW9uIG9mIExpc3QgSXRlYW1cbiAqIEByZXR1cm5zIHtvYmplY3R9IE5ldyBjbGFzcyB3aXRoIHRpdGxlIGFuZCBhdXRob3IgcHJvcGVydGllc1xuICovXG5jbGFzcyBJdGVtRWxlbSB7XG4gIGNvbnN0cnVjdG9yKGRlc2NyaXAsIGluZGV4LCBpc0NvbXBsZXRlZCA9IGZhbHNlKSB7XG4gICAgdGhpcy5kZXNjcmlwID0gZGVzY3JpcDtcbiAgICB0aGlzLmlzQ29tcGxldGVkID0gaXNDb21wbGV0ZWQ7XG4gICAgdGhpcy5pbmRleCA9IGluZGV4O1xuICB9XG59XG5cbmV4cG9ydCB7XG4gIGNyZWF0ZUxpc3RJdGVtLFxuICBJdGVtRWxlbSxcbn07IiwiaW1wb3J0IGFkZENsYXNzIGZyb20gJy4vZWxlbWVudEFkZENsYXNzTW9kLmpzJztcclxuXHJcbi8qKlxyXG4gKiBGdW5jdGlvbiB0byBjcmVhdGUgSFRNTCBCdXR0b24gZWxlbWVudC4gQ2xhc3NlcyBhbmQgdGV4dCBjb250ZW50XHJcbiAqIGNhbiBiZSBhZGRlZCBhcyBlbGVtZW50IGlzIGNyZWF0ZS4gQ2xpY2sgZXZlbnQgdG8gYSBhbm90aGVyIHdlYnBhZ2UgY2FuIGJlIGFkZGVkLlxyXG4gKiBAcGFyYW0ge3N0cmluZ30gZnVuYyBUeXBlIG9mIGJ1dHRvbiBgc3VtYml0LCByZXNldCwgYnV0dG9uYFxyXG4gKiBAcGFyYW0ge3N0cmluZ30gY2xhc3NlcyBOYW1lIG9mIGNsYXNzIG9yIGNsYXNzZXMgdG8gYWRkLiBTdHJpbmcsIGFycmF5IG9mIHN0cmluZyBzaG91bGQgYmUgdXNlZC5cclxuICogSWYgbm8gY2xhc3MgaXMgd2FudGVkLCBmYWxzZSBzaG91bGQgYmUgdXNlLk9wdGlvbmFsIFBhcmFtZW50ZXIuXHJcbiAqIEBwYXJhbSB7c3RyaW5nfSBhcmlhTGFiZWwgVGV4dCBmb3IgYWNjZXNzaWJpbGl0eVxyXG4gKiBAcGFyYW0ge2FueX0gdGV4dENvbnRlbnQgVGV4dCB0byBiZSBhZGRlZCBhcyB0ZXh0IGNvbnRlbnQgdG8gSFRNTCBlbGVtZW50LlxyXG4gKiBPcHRpb24gcGFyYW1ldGVyLlxyXG4gKiBAcGFyYW0ge0hUTUxFbGVtZW50fSBpbm5lckNoaWxkIEhUTUwgRWxlbWVudCB0byBiZSBhcHBlbmRlZFxyXG4gKiBAcGFyYW0ge2FueX0gaHJlZiBIeXBlcmxpbmsgcmVmZXJlbmNlIHRvIGJlIGZvbGxvd2VkIGlmIGJ1dHRvbiBpcyBjbGlja2VkLlxyXG4gKiBPcHRpb24gcGFyYW1ldGVyLlxyXG4gKiBAcmV0dXJucyB7SFRNTEJ1dHRvbkVsZW1lbnR9IFJldHVybnMgSFRNTCBidXR0b24gZWxlbWVudCBjaG9zZW4gd2l0aCBzZXQgYXR0cmlidXRlcy5cclxuICovXHJcbmNvbnN0IGNyZWF0ZUJ1dHRvbiA9IChmdW5jLCBjbGFzc2VzLCBhcmlhTGFiZWwsIHRleHRDb250ZW50ID0gZmFsc2UsXHJcbiAgaW5uZXJDaGlsZCA9IGZhbHNlLCBocmVmID0gZmFsc2UpID0+IHtcclxuICBjb25zdCBidXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcclxuICBidXR0b24udHlwZSA9IGZ1bmM7XHJcbiAgYnV0dG9uLmFyaWFMYWJlbCA9IGFyaWFMYWJlbDtcclxuICBhZGRDbGFzcy5hZGRDbGFzcyhidXR0b24sIGNsYXNzZXMpO1xyXG4gIGlmICh0ZXh0Q29udGVudCkgYnV0dG9uLnRleHRDb250ZW50ID0gdGV4dENvbnRlbnQ7XHJcbiAgaWYgKGhyZWYpIHtcclxuICAgIGJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuICAgICAgd2luZG93LmxvY2F0aW9uLmhyZWYgPSBocmVmO1xyXG4gICAgfSk7XHJcbiAgfVxyXG4gIGlmIChpbm5lckNoaWxkKSBidXR0b24uYXBwZW5kQ2hpbGQoaW5uZXJDaGlsZCk7XHJcbiAgcmV0dXJuIGJ1dHRvbjtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IHtcclxuICBjcmVhdGVCdXR0b24sXHJcbn07IiwiaW1wb3J0IGVsZW1HZW4gZnJvbSAnLi9lbGVtZW50R2VuZXJhdG9yTW9kLmpzJztcclxuaW1wb3J0IGV4dHJhQXR0IGZyb20gJy4vZWxlbWVudEV4dHJhQXR0ck1vZC5qcyc7XHJcblxyXG5jb25zdCBjcmVhdGVMYWJlbCA9IChmb3JBdHIgPSBmYWxzZSwgY2xhc3NlcyA9IGZhbHNlLCB0ZXh0Q29udGVudCA9IGZhbHNlLCBpbm5lckNoaWxkID0gZmFsc2UpID0+IHtcclxuICBjb25zdCBsYWJlbCA9IGVsZW1HZW4uY3JlYXRlRWxlbWVudERlZmF1bHQoJ2xhYmVsJywgY2xhc3NlcywgdGV4dENvbnRlbnQsIGlubmVyQ2hpbGQpO1xyXG4gIGV4dHJhQXR0LmFkZEF0dHJpYnV0ZXMobGFiZWwsIGZhbHNlLCBmYWxzZSwgJ2ZvcicsIGZvckF0cik7XHJcbiAgcmV0dXJuIGxhYmVsO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQge1xyXG4gIGNyZWF0ZUxhYmVsLFxyXG59OyIsImltcG9ydCBlbGVtR2VuIGZyb20gJy4vZWxlbWVudEdlbmVyYXRvck1vZC5qcyc7XHJcbmltcG9ydCBleHRyYUF0dCBmcm9tICcuL2VsZW1lbnRFeHRyYUF0dHJNb2QuanMnO1xyXG5cclxuY29uc3QgY3JlYXRlU3ZnID0gKGhyZWYpID0+IHtcclxuICBjb25zdCB4bGluayA9IGhyZWYuc3BsaXQoJyMnKTtcclxuICBjb25zdCB1c2UgPSBlbGVtR2VuLmNyZWF0ZUVsZW1lbnREZWZhdWx0KCd1c2UnLCBmYWxzZSk7XHJcbiAgZXh0cmFBdHQuYWRkQXR0cmlidXRlcyh1c2UsIGZhbHNlLCBmYWxzZSwgJ2hyZWYnLCBgJHtocmVmfWApO1xyXG4gIGNvbnN0IHN2ZyA9IGVsZW1HZW4uY3JlYXRlRWxlbWVudERlZmF1bHQoJ3N2ZycsIHhsaW5rWzFdLCBmYWxzZSwgdXNlKTtcclxuICByZXR1cm4gc3ZnO1xyXG59O1xyXG5cclxuY29uc3QgY3JlYXRlTlMgPSAoaHJlZikgPT4ge1xyXG4gIGNvbnN0IHhsaW5rID0gaHJlZi5zcGxpdCgnIycpO1xyXG4gIGNvbnN0IHVzZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnROUygnaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnLCAndXNlJyk7XHJcbiAgZXh0cmFBdHQuYWRkQXR0cmlidXRlcyh1c2UsIGZhbHNlLCBmYWxzZSwgJ2hyZWYnLCBgJHtocmVmfWApO1xyXG4gIHVzZS5jbGFzc0xpc3QuYWRkKGAke3hsaW5rWzFdfS11c2VgKTtcclxuICBjb25zdCBzdmcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50TlMoJ2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJywgJ3N2ZycpO1xyXG4gIHN2Zy5hcHBlbmRDaGlsZCh1c2UpO1xyXG4gIHN2Zy5jbGFzc0xpc3QuYWRkKHhsaW5rWzFdKTtcclxuICByZXR1cm4gc3ZnO1xyXG59O1xyXG5cclxuZXhwb3J0IHtcclxuICBjcmVhdGVTdmcsXHJcbiAgY3JlYXRlTlMsXHJcbn07XHJcbiIsImltcG9ydCBlbGVtR2VuIGZyb20gJy4vZWxlbWVudEdlbmVyYXRvck1vZC5qcyc7XHJcbmltcG9ydCBleHRyYUF0dCBmcm9tICcuL2VsZW1lbnRFeHRyYUF0dHJNb2QuanMnO1xyXG5cclxuY29uc3QgY3JlYXRlVGV4dEFyZWEgPSAobGVuZ3RoID0gZmFsc2UsIGNsYXNzZXMgPSBmYWxzZSxcclxuICB0ZXh0Q29udGVudCA9IGZhbHNlLCBpbm5lckNoaWxkID0gZmFsc2UpID0+IHtcclxuICBjb25zdCB0ZXh0QXJlYSA9IGVsZW1HZW4uY3JlYXRlRWxlbWVudERlZmF1bHQoJ3RleHRhcmVhJywgY2xhc3NlcywgdGV4dENvbnRlbnQsIGlubmVyQ2hpbGQpO1xyXG4gIGlmIChsZW5ndGgpIGV4dHJhQXR0LmFkZEF0dHJpYnV0ZXModGV4dEFyZWEsIGZhbHNlLCBmYWxzZSwgJ21heGxlbmd0aCcsIGxlbmd0aCk7XHJcbiAgdGV4dEFyZWEuc2V0QXR0cmlidXRlKCdzcGVsbGNoZWNrJywgJ3RydWUnKTtcclxuICByZXR1cm4gdGV4dEFyZWE7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCB7XHJcbiAgY3JlYXRlVGV4dEFyZWEsXHJcbn07IiwiLyoqXHJcbiAqIEZ1bmN0aW9uIHRvIGFkZCBjbGFzcyBvciBjbGFzc2VzIHRvIEhUTUwgRWxlbWVudFxyXG4gKiBAcGFyYW0ge0hUTUxFbGVtZW50fSBlbGVtIEhUTUwgRWxlbWVudCB0byBiZSBtb2RpZmllZC5cclxuICogQHBhcmFtIHtTdHJpbmd9IGNsYXNzZXMgU3RyaW5nIG9yIEFycmF5IG9mIFN0cmluZyB0byBiZSBhZGRlZC5cclxuICogQHJldHVybnMge0hUTUxFbGVtZW50fSBSZXR1cm5zIEhUTUwgZWxlbWVudCB3aXRoIGNob3NlbiBjbGFzc2VzLlxyXG4gKi9cclxuY29uc3QgYWRkQ2xhc3MgPSAoZWxlbSwgY2xhc3NlcykgPT4ge1xyXG4gIGlmICgodHlwZW9mIGNsYXNzZXMpID09PSAnc3RyaW5nJykgZWxlbS5jbGFzc0xpc3QuYWRkKGAke2NsYXNzZXN9YCk7XHJcbiAgZWxzZSBpZiAoKHR5cGVvZiBjbGFzc2VzKSA9PT0gJ29iamVjdCcpIGNsYXNzZXMuZm9yRWFjaCgoY2xhc3MwKSA9PiBlbGVtLmNsYXNzTGlzdC5hZGQoYCR7Y2xhc3MwfWApKTtcclxuICByZXR1cm4gZWxlbTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IHtcclxuICBhZGRDbGFzcyxcclxufTsiLCIvKipcclxuICogRnVuY3Rpb24gdG8gYWRkIGRhdGFzZXQgb3IgYXBwZW5kIGNoaWxkcyB0byBIVE1MIEVsZW1lbnRcclxuICogQHBhcmFtIHtIVE1MRWxlbWVudH0gZWxlbSBIVE1MIEVsZW1lbnQgdG8gYmUgbW9kaWZpZWQuXHJcbiAqIEBwYXJhbSB7c3RyaW5nfSBkYXRhIGtleSBvZiBkYXRhc2V0IGtleS12YWx1ZSBwcm9wZXJ0eSB0byBiZSBhZGRlZFxyXG4gKiBAcGFyYW0ge3N0cmluZ30gaW5kZXg9MCB2YWx1ZSBvZiBkYXRhc2V0IGtleS12YWx1ZSBwcm9wZXJ0eSB0byBiZSBhZGRlZFxyXG4gKiBAcmV0dXJucyB7SFRNTEVsZW1lbnR9IFJldHVybnMgSFRNTCBlbGVtZW50IHdpdGggY2hvc2VuIGF0dHJpYnV0ZXNcclxuICovXHJcbmNvbnN0IGFkZEF0dHJpYnV0ZXMgPSAoZWxlbSxcclxuICBkYXRhID0gZmFsc2UsIGluZGV4ID0gMCwgYXR0cmlidXRlcyA9IGZhbHNlLCB2YWx1ZSA9IGZhbHNlKSA9PiB7XHJcbiAgaWYgKGRhdGEpIGVsZW0uc2V0QXR0cmlidXRlKGBkYXRhLSR7ZGF0YX1gLCBpbmRleCk7XHJcbiAgaWYgKGF0dHJpYnV0ZXMpIGVsZW0uc2V0QXR0cmlidXRlKGF0dHJpYnV0ZXMsIHZhbHVlKTtcclxuICByZXR1cm4gZWxlbTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IHtcclxuICBhZGRBdHRyaWJ1dGVzLFxyXG59OyIsImltcG9ydCBhZGRDbGFzcyBmcm9tICcuL2VsZW1lbnRBZGRDbGFzc01vZC5qcyc7XHJcblxyXG4vKipcclxuICogRnVuY3Rpb24gdG8gY3JlYXRlIEhUTUwgZWxlbWVudCB1c2luZyB0YWcgbmFtZXMuXHJcbiAqIENsYXNzZXMgYW5kIHRleHQgY29udGVudCBjYW4gYmUgYWRkZWQgYXMgZWxlbWVudCBpcyBjcmVhdGUuXHJcbiAqIEBwYXJhbSB7c3RyaW5nfSBlbGVtIFRhZyBuYW1lIG9mIHRoZSBlbGVtZW50IHRvIGJlIGNyZWF0ZWQuIEV4YW1wbGU6IGBkaXYsIHAsIHNlY3Rpb25gXHJcbiAqIEBwYXJhbSB7c3RyaW5nfSBjbGFzc2VzIE5hbWUgb2YgY2xhc3Mgb3IgY2xhc3NlcyB0byBhZGQuIFN0cmluZywgYXJyYXkgb2Ygc3RyaW5nIHNob3VsZCBiZSB1c2VkLlxyXG4gKiBJZiBubyBjbGFzcyBpcyB3YW50ZWQsIGZhbHNlIHNob3VsZCBiZSB1c2UuT3B0aW9uYWwgUGFyYW1lbnRlci5cclxuICogQHBhcmFtIHtTdHJpbmd9IHRleHRDb250ZXh0IFRleHQgdG8gYmUgYWRkZWQgYXMgdGV4dCBjb250ZW50IHRvIEhUTUwgZWxlbWVudC5cclxuICogT3B0aW9uIHBhcmFtZXRlci5cclxuICogQHBhcmFtIHtIVE1MRWxlbWVudH0gaW5uZXJDaGlsZCBIVE1MIEVsZW1lbnQgdG8gYmUgYXBwZW5kZWRcclxuICogQHJldHVybnMge0hUTUxFbGVtZW50fSBSZXR1cm5zIEhUTUwgZWxlbWVudCBjaG9zZW4gd2l0aCBzZXQgYXR0cmlidXRlcy5cclxuICovXHJcbmNvbnN0IGNyZWF0ZUVsZW1lbnREZWZhdWx0ID0gKGVsZW0sIGNsYXNzZXMgPSBmYWxzZSwgdGV4dENvbnRlbnQgPSBmYWxzZSwgaW5uZXJDaGlsZCA9IGZhbHNlKSA9PiB7XHJcbiAgY29uc3QgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoZWxlbSk7XHJcbiAgYWRkQ2xhc3MuYWRkQ2xhc3MoZWxlbWVudCwgY2xhc3Nlcyk7XHJcbiAgaWYgKHRleHRDb250ZW50KSBlbGVtZW50LnRleHRDb250ZW50ID0gdGV4dENvbnRlbnQ7XHJcbiAgaWYgKGlubmVyQ2hpbGQpIGVsZW1lbnQuYXBwZW5kQ2hpbGQoaW5uZXJDaGlsZCk7XHJcbiAgcmV0dXJuIGVsZW1lbnQ7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCB7XHJcbiAgY3JlYXRlRWxlbWVudERlZmF1bHQsXHJcbn07Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9