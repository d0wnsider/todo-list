/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/css/style.css":
/*!*****************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/css/style.css ***!
  \*****************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
___CSS_LOADER_EXPORT___.push([module.id, "@import url(https://fonts.googleapis.com/css2?family=Roboto&display=swap);"]);
// Module
___CSS_LOADER_EXPORT___.push([module.id, ":root {\n  --purple: rgba(0, 0, 255, 0.5);\n  --dark-purple: rgba(0, 0, 150, 0.5);\n  --light-purple: rgba(0, 0, 255, 0.2);\n  --white: rgba(255, 255, 255, 0.8);\n  --black: rgba(0, 0, 0, 0.7);\n  --gray: rgba(200, 200, 200, 0.7);\n}\n\n* {\n  box-sizing: border-box;\n  margin: 0;\n  padding: 0;\n}\n\nhtml,\nbody {\n  height: 100%;\n}\nbody {\n  height: 100%;\n  position: relative; /* *for 'position: absolute' of form */\n  font-family: \"Roboto\", sans-serif;\n  background-color: var(--light-purple);\n}\n\n.content-container {\n  margin: auto;\n  width: 75%;\n  border-bottom-left-radius: 5%;\n  border-bottom-right-radius: 5%;\n  overflow: hidden;\n  box-shadow: 5px 5px 15px 10px var(--dark-purple);\n}\n\n.content {\n  height: 90vh;\n  display: grid;\n  grid-template-columns: repeat(6, 1fr);\n  grid-auto-rows: auto;\n  grid-template-areas:\n    \"header header header header header header\"\n    \"nav main main main main main\"\n    \"nav main main main main main\"\n    \"nav main main main main main\"\n    \"nav main main main main main\"\n    \"nav main main main main main\"\n    \"nav main main main main main\"\n    \"nav main main main main main\"\n    \"nav main main main main main\"\n    \"nav main main main main main\"\n    \"nav main main main main main\"\n    \"nav main main main main main\"\n    \"nav main main main main main\"\n    \"nav main main main main main\"\n    \"nav main main main main main\"\n    \"nav main main main main main\"\n    \"nav main main main main main\"\n    \"nav main main main main main\"\n    \"nav main main main main main\"\n    \"nav main main main main main\";\n}\n\n/* *top section */\nheader {\n  grid-area: header;\n  font-style: italic;\n  font-weight: bold;\n  background-color: var(--purple);\n  padding-left: 50px;\n  display: flex;\n  justify-content: flex-start;\n  align-items: center;\n}\n\n.header-grp {\n  color: var(--white);\n  margin: 0;\n  font-size: 2rem;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  gap: 10px;\n}\n\n/* *sidebar section */\nnav {\n  padding-top: 20px;\n  padding-left: 20px;\n  padding-right: 20px;\n  grid-area: nav;\n  background-color: var(--light-purple);\n  color: var(--white);\n}\n\nul {\n  list-style: none;\n  margin-bottom: 40px;\n}\n\nli,\n.nav-project {\n  border: 1px solid transparent;\n  display: flex;\n  align-items: center;\n  gap: 15px;\n}\n\nli:hover {\n  cursor: pointer;\n  border: 1px solid var(--white);\n  border-radius: 5px;\n  background-color: var(--light-purple);\n  transition: all 0.3s;\n}\n\nli.checked {\n  text-decoration: line-through;\n  cursor: pointer;\n  border: 1px solid var(--white);\n  border-radius: 5px;\n  background-color: var(--gray);\n  transition: all 0.3s;\n}\n\nsvg {\n  width: 30px;\n  stroke: var(--dark-purple);\n}\n\n.nav-project {\n  padding: 5px 5px;\n  font-size: 1.4rem;\n  border-top: 1px solid var(--dark-purple);\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  gap: 15px;\n}\n\n.project-btn,\n.task-btn,\n.add-project-btn,\n.add-task-btn {\n  cursor: pointer;\n  background-color: transparent;\n  border: none;\n}\n\n/* *content section */\nmain {\n  position: relative;\n  grid-area: main;\n  padding-left: 50px;\n  padding-top: 30px;\n  color: var(--black);\n  background-color: var(--white);\n}\n\n.main-title {\n  font-weight: bold;\n  font-size: 2.5rem;\n  color: var(--black);\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n.task-title {\n  border-bottom: 1px solid var(--dark-purple);\n  font-size: 1.3rem;\n  display: flex;\n  justify-content: flex-start;\n  align-items: center;\n}\n\n.form-project-cont,\n.form-task-cont {\n  padding: 20px 20px 80px 20px;\n  box-shadow: 0 0 10px 0 var(--purple);\n  position: absolute;\n  left: 50%;\n  top: 50%;\n  transform: translate(-50%, -50%);\n  opacity: 1;\n  z-index: 1;\n}\n\n.hide {\n  display: none;\n  transition: opacity 0.3s ease-in-out;\n}\n\n.form-project,\n.form-task {\n  border-radius: 10px;\n  display: flex;\n  flex-direction: column;\n  align-items: flex-end;\n  gap: 20px;\n}\n\n.form-add {\n  padding: 10px;\n  font-size: 2rem;\n  font-style: italic;\n  border-top: 1px solid var(--dark-purple);\n  border-right: 1px solid var(--dark-purple);\n}\n\n.form-project label,\n.form-task label {\n  padding: 3px 0px;\n}\n\n.form-project label,\n.form-task input {\n  padding: 5px 10px;\n}\n\n.project-submit-btn,\n.task-submit-btn {\n  cursor: pointer;\n  background-color: transparent;\n  border: none;\n}\n\n/** task content  */\n.task-content {\n  position: absolute;\n  width: 100%;\n  display: flex;\n  flex-direction: column;\n  gap: 10px;\n}\n\n.add-task-content {\n  width: 90%;\n  padding: 10px;\n}\n\n.add-project-content {\n  width: 100%;\n  padding: 5px;\n}\n\n.cont {\n  height: 100%;\n}\n.blur-bg {\n  filter: blur(5px);\n}\n", "",{"version":3,"sources":["webpack://./src/css/style.css"],"names":[],"mappings":"AAEA;EACE,8BAA8B;EAC9B,mCAAmC;EACnC,oCAAoC;EACpC,iCAAiC;EACjC,2BAA2B;EAC3B,gCAAgC;AAClC;;AAEA;EACE,sBAAsB;EACtB,SAAS;EACT,UAAU;AACZ;;AAEA;;EAEE,YAAY;AACd;AACA;EACE,YAAY;EACZ,kBAAkB,EAAE,sCAAsC;EAC1D,iCAAiC;EACjC,qCAAqC;AACvC;;AAEA;EACE,YAAY;EACZ,UAAU;EACV,6BAA6B;EAC7B,8BAA8B;EAC9B,gBAAgB;EAChB,gDAAgD;AAClD;;AAEA;EACE,YAAY;EACZ,aAAa;EACb,qCAAqC;EACrC,oBAAoB;EACpB;;;;;;;;;;;;;;;;;;;;kCAoBgC;AAClC;;AAEA,iBAAiB;AACjB;EACE,iBAAiB;EACjB,kBAAkB;EAClB,iBAAiB;EACjB,+BAA+B;EAC/B,kBAAkB;EAClB,aAAa;EACb,2BAA2B;EAC3B,mBAAmB;AACrB;;AAEA;EACE,mBAAmB;EACnB,SAAS;EACT,eAAe;EACf,aAAa;EACb,uBAAuB;EACvB,mBAAmB;EACnB,SAAS;AACX;;AAEA,qBAAqB;AACrB;EACE,iBAAiB;EACjB,kBAAkB;EAClB,mBAAmB;EACnB,cAAc;EACd,qCAAqC;EACrC,mBAAmB;AACrB;;AAEA;EACE,gBAAgB;EAChB,mBAAmB;AACrB;;AAEA;;EAEE,6BAA6B;EAC7B,aAAa;EACb,mBAAmB;EACnB,SAAS;AACX;;AAEA;EACE,eAAe;EACf,8BAA8B;EAC9B,kBAAkB;EAClB,qCAAqC;EACrC,oBAAoB;AACtB;;AAEA;EACE,6BAA6B;EAC7B,eAAe;EACf,8BAA8B;EAC9B,kBAAkB;EAClB,6BAA6B;EAC7B,oBAAoB;AACtB;;AAEA;EACE,WAAW;EACX,0BAA0B;AAC5B;;AAEA;EACE,gBAAgB;EAChB,iBAAiB;EACjB,wCAAwC;EACxC,aAAa;EACb,8BAA8B;EAC9B,mBAAmB;EACnB,SAAS;AACX;;AAEA;;;;EAIE,eAAe;EACf,6BAA6B;EAC7B,YAAY;AACd;;AAEA,qBAAqB;AACrB;EACE,kBAAkB;EAClB,eAAe;EACf,kBAAkB;EAClB,iBAAiB;EACjB,mBAAmB;EACnB,8BAA8B;AAChC;;AAEA;EACE,iBAAiB;EACjB,iBAAiB;EACjB,mBAAmB;EACnB,aAAa;EACb,uBAAuB;EACvB,mBAAmB;AACrB;;AAEA;EACE,2CAA2C;EAC3C,iBAAiB;EACjB,aAAa;EACb,2BAA2B;EAC3B,mBAAmB;AACrB;;AAEA;;EAEE,4BAA4B;EAC5B,oCAAoC;EACpC,kBAAkB;EAClB,SAAS;EACT,QAAQ;EACR,gCAAgC;EAChC,UAAU;EACV,UAAU;AACZ;;AAEA;EACE,aAAa;EACb,oCAAoC;AACtC;;AAEA;;EAEE,mBAAmB;EACnB,aAAa;EACb,sBAAsB;EACtB,qBAAqB;EACrB,SAAS;AACX;;AAEA;EACE,aAAa;EACb,eAAe;EACf,kBAAkB;EAClB,wCAAwC;EACxC,0CAA0C;AAC5C;;AAEA;;EAEE,gBAAgB;AAClB;;AAEA;;EAEE,iBAAiB;AACnB;;AAEA;;EAEE,eAAe;EACf,6BAA6B;EAC7B,YAAY;AACd;;AAEA,mBAAmB;AACnB;EACE,kBAAkB;EAClB,WAAW;EACX,aAAa;EACb,sBAAsB;EACtB,SAAS;AACX;;AAEA;EACE,UAAU;EACV,aAAa;AACf;;AAEA;EACE,WAAW;EACX,YAAY;AACd;;AAEA;EACE,YAAY;AACd;AACA;EACE,iBAAiB;AACnB","sourcesContent":["@import url(\"https://fonts.googleapis.com/css2?family=Roboto&display=swap\");\n\n:root {\n  --purple: rgba(0, 0, 255, 0.5);\n  --dark-purple: rgba(0, 0, 150, 0.5);\n  --light-purple: rgba(0, 0, 255, 0.2);\n  --white: rgba(255, 255, 255, 0.8);\n  --black: rgba(0, 0, 0, 0.7);\n  --gray: rgba(200, 200, 200, 0.7);\n}\n\n* {\n  box-sizing: border-box;\n  margin: 0;\n  padding: 0;\n}\n\nhtml,\nbody {\n  height: 100%;\n}\nbody {\n  height: 100%;\n  position: relative; /* *for 'position: absolute' of form */\n  font-family: \"Roboto\", sans-serif;\n  background-color: var(--light-purple);\n}\n\n.content-container {\n  margin: auto;\n  width: 75%;\n  border-bottom-left-radius: 5%;\n  border-bottom-right-radius: 5%;\n  overflow: hidden;\n  box-shadow: 5px 5px 15px 10px var(--dark-purple);\n}\n\n.content {\n  height: 90vh;\n  display: grid;\n  grid-template-columns: repeat(6, 1fr);\n  grid-auto-rows: auto;\n  grid-template-areas:\n    \"header header header header header header\"\n    \"nav main main main main main\"\n    \"nav main main main main main\"\n    \"nav main main main main main\"\n    \"nav main main main main main\"\n    \"nav main main main main main\"\n    \"nav main main main main main\"\n    \"nav main main main main main\"\n    \"nav main main main main main\"\n    \"nav main main main main main\"\n    \"nav main main main main main\"\n    \"nav main main main main main\"\n    \"nav main main main main main\"\n    \"nav main main main main main\"\n    \"nav main main main main main\"\n    \"nav main main main main main\"\n    \"nav main main main main main\"\n    \"nav main main main main main\"\n    \"nav main main main main main\"\n    \"nav main main main main main\";\n}\n\n/* *top section */\nheader {\n  grid-area: header;\n  font-style: italic;\n  font-weight: bold;\n  background-color: var(--purple);\n  padding-left: 50px;\n  display: flex;\n  justify-content: flex-start;\n  align-items: center;\n}\n\n.header-grp {\n  color: var(--white);\n  margin: 0;\n  font-size: 2rem;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  gap: 10px;\n}\n\n/* *sidebar section */\nnav {\n  padding-top: 20px;\n  padding-left: 20px;\n  padding-right: 20px;\n  grid-area: nav;\n  background-color: var(--light-purple);\n  color: var(--white);\n}\n\nul {\n  list-style: none;\n  margin-bottom: 40px;\n}\n\nli,\n.nav-project {\n  border: 1px solid transparent;\n  display: flex;\n  align-items: center;\n  gap: 15px;\n}\n\nli:hover {\n  cursor: pointer;\n  border: 1px solid var(--white);\n  border-radius: 5px;\n  background-color: var(--light-purple);\n  transition: all 0.3s;\n}\n\nli.checked {\n  text-decoration: line-through;\n  cursor: pointer;\n  border: 1px solid var(--white);\n  border-radius: 5px;\n  background-color: var(--gray);\n  transition: all 0.3s;\n}\n\nsvg {\n  width: 30px;\n  stroke: var(--dark-purple);\n}\n\n.nav-project {\n  padding: 5px 5px;\n  font-size: 1.4rem;\n  border-top: 1px solid var(--dark-purple);\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  gap: 15px;\n}\n\n.project-btn,\n.task-btn,\n.add-project-btn,\n.add-task-btn {\n  cursor: pointer;\n  background-color: transparent;\n  border: none;\n}\n\n/* *content section */\nmain {\n  position: relative;\n  grid-area: main;\n  padding-left: 50px;\n  padding-top: 30px;\n  color: var(--black);\n  background-color: var(--white);\n}\n\n.main-title {\n  font-weight: bold;\n  font-size: 2.5rem;\n  color: var(--black);\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n.task-title {\n  border-bottom: 1px solid var(--dark-purple);\n  font-size: 1.3rem;\n  display: flex;\n  justify-content: flex-start;\n  align-items: center;\n}\n\n.form-project-cont,\n.form-task-cont {\n  padding: 20px 20px 80px 20px;\n  box-shadow: 0 0 10px 0 var(--purple);\n  position: absolute;\n  left: 50%;\n  top: 50%;\n  transform: translate(-50%, -50%);\n  opacity: 1;\n  z-index: 1;\n}\n\n.hide {\n  display: none;\n  transition: opacity 0.3s ease-in-out;\n}\n\n.form-project,\n.form-task {\n  border-radius: 10px;\n  display: flex;\n  flex-direction: column;\n  align-items: flex-end;\n  gap: 20px;\n}\n\n.form-add {\n  padding: 10px;\n  font-size: 2rem;\n  font-style: italic;\n  border-top: 1px solid var(--dark-purple);\n  border-right: 1px solid var(--dark-purple);\n}\n\n.form-project label,\n.form-task label {\n  padding: 3px 0px;\n}\n\n.form-project label,\n.form-task input {\n  padding: 5px 10px;\n}\n\n.project-submit-btn,\n.task-submit-btn {\n  cursor: pointer;\n  background-color: transparent;\n  border: none;\n}\n\n/** task content  */\n.task-content {\n  position: absolute;\n  width: 100%;\n  display: flex;\n  flex-direction: column;\n  gap: 10px;\n}\n\n.add-task-content {\n  width: 90%;\n  padding: 10px;\n}\n\n.add-project-content {\n  width: 100%;\n  padding: 5px;\n}\n\n.cont {\n  height: 100%;\n}\n.blur-bg {\n  filter: blur(5px);\n}\n"],"sourceRoot":""}]);
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

/***/ "./src/css/style.css":
/*!***************************!*\
  !*** ./src/css/style.css ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/css/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


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

/***/ "./src/modules/controller.js":
/*!***********************************!*\
  !*** ./src/modules/controller.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var _dom_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dom.js */ "./src/modules/dom.js");
/* harmony import */ var _task_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./task.js */ "./src/modules/task.js");
/* harmony import */ var _project_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./project.js */ "./src/modules/project.js");




const projects = [];

function createTask() {
  const task = new _task_js__WEBPACK_IMPORTED_MODULE_1__["default"](
    _dom_js__WEBPACK_IMPORTED_MODULE_0__.selectors.userTitle.value,
    _dom_js__WEBPACK_IMPORTED_MODULE_0__.selectors.userDesc.value,
    _dom_js__WEBPACK_IMPORTED_MODULE_0__.selectors.userDueDate.value,
    _dom_js__WEBPACK_IMPORTED_MODULE_0__.selectors.userPriority.value
  );
  // how to put task in a selected project?
  projects[0].addTask(task);
}

function createTaskDefault() {
  const taskDefault = new _task_js__WEBPACK_IMPORTED_MODULE_1__["default"](
    "laundry",
    "too much clothes!!!",
    "5/1/23",
    "high"
  );
  projects[0].addTask(taskDefault);
  (0,_dom_js__WEBPACK_IMPORTED_MODULE_0__.showTaskDefault)();
}

// project object
function createProject() {
  const project = new _project_js__WEBPACK_IMPORTED_MODULE_2__["default"](_dom_js__WEBPACK_IMPORTED_MODULE_0__.selectors.userProject.value);
  projects.push(project);
}

function createProjectDefault() {
  const projectDefault = new _project_js__WEBPACK_IMPORTED_MODULE_2__["default"]("Default Project", true);
  projects.push(projectDefault);
  (0,_dom_js__WEBPACK_IMPORTED_MODULE_0__.showProjectDefault)();
}
// TODO project selection
// function selectProject() {
//   const projectContent = document.querySelectorAll(".add-project-content");
//   projectContent.forEach(function (element, index) {
//     element.addEventListener("click", function () {
//       projects[index].active = true;
//       console.log(projects);
//     });
//     console.log(projects);
//   });
// }

function projectBtnSubmit() {
  _dom_js__WEBPACK_IMPORTED_MODULE_0__.selectors.addProjectBtn.addEventListener("click", (e) => {
    e.preventDefault();
    (0,_dom_js__WEBPACK_IMPORTED_MODULE_0__.showProject)();
    createProject();
    (0,_dom_js__WEBPACK_IMPORTED_MODULE_0__.showProjectForm)();
    (0,_dom_js__WEBPACK_IMPORTED_MODULE_0__.showBlurBG)();
    console.log(projects);
    _dom_js__WEBPACK_IMPORTED_MODULE_0__.selectors.projectForm.reset();
    // selectProject();
  });
}

function projectBtnListener() {
  const projectBtn = document.querySelector(".project-btn");
  projectBtn.addEventListener("click", (e) => {
    (0,_dom_js__WEBPACK_IMPORTED_MODULE_0__.showProjectForm)();
    (0,_dom_js__WEBPACK_IMPORTED_MODULE_0__.showBlurBG)();
  });
}

function taskBtnSubmit() {
  _dom_js__WEBPACK_IMPORTED_MODULE_0__.selectors.addTaskBtn.addEventListener("click", (e) => {
    e.preventDefault();
    (0,_dom_js__WEBPACK_IMPORTED_MODULE_0__.showTask)();
    createTask();
    (0,_dom_js__WEBPACK_IMPORTED_MODULE_0__.showTaskForm)();
    (0,_dom_js__WEBPACK_IMPORTED_MODULE_0__.showBlurBG)();
    _dom_js__WEBPACK_IMPORTED_MODULE_0__.selectors.taskForm.reset();
    console.log(projects);
  });
}

function taskBtnListener() {
  const taskBtn = document.querySelector(".task-btn");
  taskBtn.addEventListener("click", (e) => {
    (0,_dom_js__WEBPACK_IMPORTED_MODULE_0__.showTaskForm)();
    (0,_dom_js__WEBPACK_IMPORTED_MODULE_0__.showBlurBG)();
  });
}

_dom_js__WEBPACK_IMPORTED_MODULE_0__.selectors.taskContent.addEventListener("click", (e) => {
  e.target.classList.toggle("checked");
});

function listeners() {
  // selectProject();
  projectBtnListener();
  projectBtnSubmit();
  taskBtnListener();
  taskBtnSubmit();
}
//* program flow
function render() {
  createProjectDefault();
  createTaskDefault();
  listeners();
}




/***/ }),

/***/ "./src/modules/dom.js":
/*!****************************!*\
  !*** ./src/modules/dom.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "selectors": () => (/* binding */ selectors),
/* harmony export */   "showBlurBG": () => (/* binding */ showBlurBG),
/* harmony export */   "showProject": () => (/* binding */ showProject),
/* harmony export */   "showProjectDefault": () => (/* binding */ showProjectDefault),
/* harmony export */   "showProjectForm": () => (/* binding */ showProjectForm),
/* harmony export */   "showTask": () => (/* binding */ showTask),
/* harmony export */   "showTaskDefault": () => (/* binding */ showTaskDefault),
/* harmony export */   "showTaskForm": () => (/* binding */ showTaskForm)
/* harmony export */ });
function showProjectForm() {
  const formProjectCont = document.querySelector(".form-project-cont");
  formProjectCont.classList.toggle("hide");
}

function showTaskForm() {
  const formTaskCont = document.querySelector(".form-task-cont");
  formTaskCont.classList.toggle("hide");
}

function showBlurBG() {
  selectors.cont.classList.toggle("blur-bg");
}

function showProject() {
  const navProj = document.querySelector(".nav-projects");
  const project = document.createElement("li");
  project.classList.add("add-project-content");
  project.textContent = selectors.userProject.value;
  selectors.mainTitle.textContent = project.textContent;
  navProj.appendChild(project);
}

function showProjectDefault() {
  const navProj = document.querySelector(".nav-projects");
  const project = document.createElement("li");
  project.classList.add("add-project-content");
  project.textContent = "Default Project";
  selectors.mainTitle.textContent = project.textContent;
  navProj.appendChild(project);
}

function showTask() {
  const task = document.createElement("li");
  task.classList.add("add-task-content");
  task.textContent = selectors.userTitle.value;
  task.textContent += selectors.userDesc.value;
  task.textContent += selectors.userDueDate.value;
  task.textContent += selectors.userPriority.value;
  selectors.taskContent.appendChild(task);
}

function showTaskDefault() {
  const task = document.createElement("li");
  task.classList.add("add-task-content");
  task.textContent = "laundry";
  task.textContent += "too much clothes";
  task.textContent += "5/1/23";
  task.textContent += "high";
  selectors.taskContent.appendChild(task);
}

// taskContainerListener

const selectors = {
  taskContent: document.querySelector(".task-content"),
  mainTitle: document.querySelector(".main-title"),
  userProject: document.querySelector("#project"),
  userTitle: document.querySelector("#title"),
  userDesc: document.querySelector("#desc"),
  userDueDate: document.querySelector("#due-date"),
  userPriority: document.querySelector("#priority"),
  addTaskBtn: document.querySelector(".add-task-btn"),
  addProjectBtn: document.querySelector(".add-project-btn"),
  taskForm: document.querySelector(".form-task"),
  projectForm: document.querySelector(".form-project"),
  cont: document.querySelector(".cont"),
  blurBG: document.querySelector(".blur-bg"),
};




/***/ }),

/***/ "./src/modules/project.js":
/*!********************************!*\
  !*** ./src/modules/project.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
class Project {
  constructor(name) {
    this.name = name;
    this.tasks = [];
    this.active = false;
  }

  addTask(task) {
    this.tasks.push(task);
  }
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Project);


/***/ }),

/***/ "./src/modules/task.js":
/*!*****************************!*\
  !*** ./src/modules/task.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _project__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./project */ "./src/modules/project.js");


class Task {
  constructor(title, description, dueDate, priority) {
    this.title = title;
    this.description = description;
    this.dueDate = dueDate;
    this.priority = priority;
  }
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Task);


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
/******/ 			id: moduleId,
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
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!******************************!*\
  !*** ./src/modules/index.js ***!
  \******************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _css_style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../css/style.css */ "./src/css/style.css");
/* harmony import */ var _controller_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./controller.js */ "./src/modules/controller.js");



(0,_controller_js__WEBPACK_IMPORTED_MODULE_1__.render)();

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsaUVBQWUsSUFBSSxFQUFDOzs7Ozs7O1VDWHBCO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQSxpQ0FBaUMsV0FBVztXQUM1QztXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7OztXQ05BOzs7Ozs7Ozs7Ozs7O0FDQTBCO0FBQ2U7O0FBRXpDLHNEQUFNIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL2Nzcy9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvY3NzL3N0eWxlLmNzcz85ZmNkIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL21vZHVsZXMvY29udHJvbGxlci5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvbW9kdWxlcy9kb20uanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL21vZHVsZXMvcHJvamVjdC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvbW9kdWxlcy90YXNrLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL25vbmNlIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9tb2R1bGVzL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIkBpbXBvcnQgdXJsKGh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9Um9ib3RvJmRpc3BsYXk9c3dhcCk7XCJdKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIjpyb290IHtcXG4gIC0tcHVycGxlOiByZ2JhKDAsIDAsIDI1NSwgMC41KTtcXG4gIC0tZGFyay1wdXJwbGU6IHJnYmEoMCwgMCwgMTUwLCAwLjUpO1xcbiAgLS1saWdodC1wdXJwbGU6IHJnYmEoMCwgMCwgMjU1LCAwLjIpO1xcbiAgLS13aGl0ZTogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjgpO1xcbiAgLS1ibGFjazogcmdiYSgwLCAwLCAwLCAwLjcpO1xcbiAgLS1ncmF5OiByZ2JhKDIwMCwgMjAwLCAyMDAsIDAuNyk7XFxufVxcblxcbioge1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gIG1hcmdpbjogMDtcXG4gIHBhZGRpbmc6IDA7XFxufVxcblxcbmh0bWwsXFxuYm9keSB7XFxuICBoZWlnaHQ6IDEwMCU7XFxufVxcbmJvZHkge1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgcG9zaXRpb246IHJlbGF0aXZlOyAvKiAqZm9yICdwb3NpdGlvbjogYWJzb2x1dGUnIG9mIGZvcm0gKi9cXG4gIGZvbnQtZmFtaWx5OiBcXFwiUm9ib3RvXFxcIiwgc2Fucy1zZXJpZjtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWxpZ2h0LXB1cnBsZSk7XFxufVxcblxcbi5jb250ZW50LWNvbnRhaW5lciB7XFxuICBtYXJnaW46IGF1dG87XFxuICB3aWR0aDogNzUlO1xcbiAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogNSU7XFxuICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogNSU7XFxuICBvdmVyZmxvdzogaGlkZGVuO1xcbiAgYm94LXNoYWRvdzogNXB4IDVweCAxNXB4IDEwcHggdmFyKC0tZGFyay1wdXJwbGUpO1xcbn1cXG5cXG4uY29udGVudCB7XFxuICBoZWlnaHQ6IDkwdmg7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoNiwgMWZyKTtcXG4gIGdyaWQtYXV0by1yb3dzOiBhdXRvO1xcbiAgZ3JpZC10ZW1wbGF0ZS1hcmVhczpcXG4gICAgXFxcImhlYWRlciBoZWFkZXIgaGVhZGVyIGhlYWRlciBoZWFkZXIgaGVhZGVyXFxcIlxcbiAgICBcXFwibmF2IG1haW4gbWFpbiBtYWluIG1haW4gbWFpblxcXCJcXG4gICAgXFxcIm5hdiBtYWluIG1haW4gbWFpbiBtYWluIG1haW5cXFwiXFxuICAgIFxcXCJuYXYgbWFpbiBtYWluIG1haW4gbWFpbiBtYWluXFxcIlxcbiAgICBcXFwibmF2IG1haW4gbWFpbiBtYWluIG1haW4gbWFpblxcXCJcXG4gICAgXFxcIm5hdiBtYWluIG1haW4gbWFpbiBtYWluIG1haW5cXFwiXFxuICAgIFxcXCJuYXYgbWFpbiBtYWluIG1haW4gbWFpbiBtYWluXFxcIlxcbiAgICBcXFwibmF2IG1haW4gbWFpbiBtYWluIG1haW4gbWFpblxcXCJcXG4gICAgXFxcIm5hdiBtYWluIG1haW4gbWFpbiBtYWluIG1haW5cXFwiXFxuICAgIFxcXCJuYXYgbWFpbiBtYWluIG1haW4gbWFpbiBtYWluXFxcIlxcbiAgICBcXFwibmF2IG1haW4gbWFpbiBtYWluIG1haW4gbWFpblxcXCJcXG4gICAgXFxcIm5hdiBtYWluIG1haW4gbWFpbiBtYWluIG1haW5cXFwiXFxuICAgIFxcXCJuYXYgbWFpbiBtYWluIG1haW4gbWFpbiBtYWluXFxcIlxcbiAgICBcXFwibmF2IG1haW4gbWFpbiBtYWluIG1haW4gbWFpblxcXCJcXG4gICAgXFxcIm5hdiBtYWluIG1haW4gbWFpbiBtYWluIG1haW5cXFwiXFxuICAgIFxcXCJuYXYgbWFpbiBtYWluIG1haW4gbWFpbiBtYWluXFxcIlxcbiAgICBcXFwibmF2IG1haW4gbWFpbiBtYWluIG1haW4gbWFpblxcXCJcXG4gICAgXFxcIm5hdiBtYWluIG1haW4gbWFpbiBtYWluIG1haW5cXFwiXFxuICAgIFxcXCJuYXYgbWFpbiBtYWluIG1haW4gbWFpbiBtYWluXFxcIlxcbiAgICBcXFwibmF2IG1haW4gbWFpbiBtYWluIG1haW4gbWFpblxcXCI7XFxufVxcblxcbi8qICp0b3Agc2VjdGlvbiAqL1xcbmhlYWRlciB7XFxuICBncmlkLWFyZWE6IGhlYWRlcjtcXG4gIGZvbnQtc3R5bGU6IGl0YWxpYztcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tcHVycGxlKTtcXG4gIHBhZGRpbmctbGVmdDogNTBweDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4uaGVhZGVyLWdycCB7XFxuICBjb2xvcjogdmFyKC0td2hpdGUpO1xcbiAgbWFyZ2luOiAwO1xcbiAgZm9udC1zaXplOiAycmVtO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGdhcDogMTBweDtcXG59XFxuXFxuLyogKnNpZGViYXIgc2VjdGlvbiAqL1xcbm5hdiB7XFxuICBwYWRkaW5nLXRvcDogMjBweDtcXG4gIHBhZGRpbmctbGVmdDogMjBweDtcXG4gIHBhZGRpbmctcmlnaHQ6IDIwcHg7XFxuICBncmlkLWFyZWE6IG5hdjtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWxpZ2h0LXB1cnBsZSk7XFxuICBjb2xvcjogdmFyKC0td2hpdGUpO1xcbn1cXG5cXG51bCB7XFxuICBsaXN0LXN0eWxlOiBub25lO1xcbiAgbWFyZ2luLWJvdHRvbTogNDBweDtcXG59XFxuXFxubGksXFxuLm5hdi1wcm9qZWN0IHtcXG4gIGJvcmRlcjogMXB4IHNvbGlkIHRyYW5zcGFyZW50O1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBnYXA6IDE1cHg7XFxufVxcblxcbmxpOmhvdmVyIHtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLXdoaXRlKTtcXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWxpZ2h0LXB1cnBsZSk7XFxuICB0cmFuc2l0aW9uOiBhbGwgMC4zcztcXG59XFxuXFxubGkuY2hlY2tlZCB7XFxuICB0ZXh0LWRlY29yYXRpb246IGxpbmUtdGhyb3VnaDtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLXdoaXRlKTtcXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWdyYXkpO1xcbiAgdHJhbnNpdGlvbjogYWxsIDAuM3M7XFxufVxcblxcbnN2ZyB7XFxuICB3aWR0aDogMzBweDtcXG4gIHN0cm9rZTogdmFyKC0tZGFyay1wdXJwbGUpO1xcbn1cXG5cXG4ubmF2LXByb2plY3Qge1xcbiAgcGFkZGluZzogNXB4IDVweDtcXG4gIGZvbnQtc2l6ZTogMS40cmVtO1xcbiAgYm9yZGVyLXRvcDogMXB4IHNvbGlkIHZhcigtLWRhcmstcHVycGxlKTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgZ2FwOiAxNXB4O1xcbn1cXG5cXG4ucHJvamVjdC1idG4sXFxuLnRhc2stYnRuLFxcbi5hZGQtcHJvamVjdC1idG4sXFxuLmFkZC10YXNrLWJ0biB7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcXG4gIGJvcmRlcjogbm9uZTtcXG59XFxuXFxuLyogKmNvbnRlbnQgc2VjdGlvbiAqL1xcbm1haW4ge1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgZ3JpZC1hcmVhOiBtYWluO1xcbiAgcGFkZGluZy1sZWZ0OiA1MHB4O1xcbiAgcGFkZGluZy10b3A6IDMwcHg7XFxuICBjb2xvcjogdmFyKC0tYmxhY2spO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0td2hpdGUpO1xcbn1cXG5cXG4ubWFpbi10aXRsZSB7XFxuICBmb250LXdlaWdodDogYm9sZDtcXG4gIGZvbnQtc2l6ZTogMi41cmVtO1xcbiAgY29sb3I6IHZhcigtLWJsYWNrKTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi50YXNrLXRpdGxlIHtcXG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCB2YXIoLS1kYXJrLXB1cnBsZSk7XFxuICBmb250LXNpemU6IDEuM3JlbTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4uZm9ybS1wcm9qZWN0LWNvbnQsXFxuLmZvcm0tdGFzay1jb250IHtcXG4gIHBhZGRpbmc6IDIwcHggMjBweCA4MHB4IDIwcHg7XFxuICBib3gtc2hhZG93OiAwIDAgMTBweCAwIHZhcigtLXB1cnBsZSk7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICBsZWZ0OiA1MCU7XFxuICB0b3A6IDUwJTtcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xcbiAgb3BhY2l0eTogMTtcXG4gIHotaW5kZXg6IDE7XFxufVxcblxcbi5oaWRlIHtcXG4gIGRpc3BsYXk6IG5vbmU7XFxuICB0cmFuc2l0aW9uOiBvcGFjaXR5IDAuM3MgZWFzZS1pbi1vdXQ7XFxufVxcblxcbi5mb3JtLXByb2plY3QsXFxuLmZvcm0tdGFzayB7XFxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBhbGlnbi1pdGVtczogZmxleC1lbmQ7XFxuICBnYXA6IDIwcHg7XFxufVxcblxcbi5mb3JtLWFkZCB7XFxuICBwYWRkaW5nOiAxMHB4O1xcbiAgZm9udC1zaXplOiAycmVtO1xcbiAgZm9udC1zdHlsZTogaXRhbGljO1xcbiAgYm9yZGVyLXRvcDogMXB4IHNvbGlkIHZhcigtLWRhcmstcHVycGxlKTtcXG4gIGJvcmRlci1yaWdodDogMXB4IHNvbGlkIHZhcigtLWRhcmstcHVycGxlKTtcXG59XFxuXFxuLmZvcm0tcHJvamVjdCBsYWJlbCxcXG4uZm9ybS10YXNrIGxhYmVsIHtcXG4gIHBhZGRpbmc6IDNweCAwcHg7XFxufVxcblxcbi5mb3JtLXByb2plY3QgbGFiZWwsXFxuLmZvcm0tdGFzayBpbnB1dCB7XFxuICBwYWRkaW5nOiA1cHggMTBweDtcXG59XFxuXFxuLnByb2plY3Qtc3VibWl0LWJ0bixcXG4udGFzay1zdWJtaXQtYnRuIHtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xcbiAgYm9yZGVyOiBub25lO1xcbn1cXG5cXG4vKiogdGFzayBjb250ZW50ICAqL1xcbi50YXNrLWNvbnRlbnQge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGdhcDogMTBweDtcXG59XFxuXFxuLmFkZC10YXNrLWNvbnRlbnQge1xcbiAgd2lkdGg6IDkwJTtcXG4gIHBhZGRpbmc6IDEwcHg7XFxufVxcblxcbi5hZGQtcHJvamVjdC1jb250ZW50IHtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgcGFkZGluZzogNXB4O1xcbn1cXG5cXG4uY29udCB7XFxuICBoZWlnaHQ6IDEwMCU7XFxufVxcbi5ibHVyLWJnIHtcXG4gIGZpbHRlcjogYmx1cig1cHgpO1xcbn1cXG5cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvY3NzL3N0eWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFFQTtFQUNFLDhCQUE4QjtFQUM5QixtQ0FBbUM7RUFDbkMsb0NBQW9DO0VBQ3BDLGlDQUFpQztFQUNqQywyQkFBMkI7RUFDM0IsZ0NBQWdDO0FBQ2xDOztBQUVBO0VBQ0Usc0JBQXNCO0VBQ3RCLFNBQVM7RUFDVCxVQUFVO0FBQ1o7O0FBRUE7O0VBRUUsWUFBWTtBQUNkO0FBQ0E7RUFDRSxZQUFZO0VBQ1osa0JBQWtCLEVBQUUsc0NBQXNDO0VBQzFELGlDQUFpQztFQUNqQyxxQ0FBcUM7QUFDdkM7O0FBRUE7RUFDRSxZQUFZO0VBQ1osVUFBVTtFQUNWLDZCQUE2QjtFQUM3Qiw4QkFBOEI7RUFDOUIsZ0JBQWdCO0VBQ2hCLGdEQUFnRDtBQUNsRDs7QUFFQTtFQUNFLFlBQVk7RUFDWixhQUFhO0VBQ2IscUNBQXFDO0VBQ3JDLG9CQUFvQjtFQUNwQjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7a0NBb0JnQztBQUNsQzs7QUFFQSxpQkFBaUI7QUFDakI7RUFDRSxpQkFBaUI7RUFDakIsa0JBQWtCO0VBQ2xCLGlCQUFpQjtFQUNqQiwrQkFBK0I7RUFDL0Isa0JBQWtCO0VBQ2xCLGFBQWE7RUFDYiwyQkFBMkI7RUFDM0IsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsbUJBQW1CO0VBQ25CLFNBQVM7RUFDVCxlQUFlO0VBQ2YsYUFBYTtFQUNiLHVCQUF1QjtFQUN2QixtQkFBbUI7RUFDbkIsU0FBUztBQUNYOztBQUVBLHFCQUFxQjtBQUNyQjtFQUNFLGlCQUFpQjtFQUNqQixrQkFBa0I7RUFDbEIsbUJBQW1CO0VBQ25CLGNBQWM7RUFDZCxxQ0FBcUM7RUFDckMsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsZ0JBQWdCO0VBQ2hCLG1CQUFtQjtBQUNyQjs7QUFFQTs7RUFFRSw2QkFBNkI7RUFDN0IsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQixTQUFTO0FBQ1g7O0FBRUE7RUFDRSxlQUFlO0VBQ2YsOEJBQThCO0VBQzlCLGtCQUFrQjtFQUNsQixxQ0FBcUM7RUFDckMsb0JBQW9CO0FBQ3RCOztBQUVBO0VBQ0UsNkJBQTZCO0VBQzdCLGVBQWU7RUFDZiw4QkFBOEI7RUFDOUIsa0JBQWtCO0VBQ2xCLDZCQUE2QjtFQUM3QixvQkFBb0I7QUFDdEI7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsMEJBQTBCO0FBQzVCOztBQUVBO0VBQ0UsZ0JBQWdCO0VBQ2hCLGlCQUFpQjtFQUNqQix3Q0FBd0M7RUFDeEMsYUFBYTtFQUNiLDhCQUE4QjtFQUM5QixtQkFBbUI7RUFDbkIsU0FBUztBQUNYOztBQUVBOzs7O0VBSUUsZUFBZTtFQUNmLDZCQUE2QjtFQUM3QixZQUFZO0FBQ2Q7O0FBRUEscUJBQXFCO0FBQ3JCO0VBQ0Usa0JBQWtCO0VBQ2xCLGVBQWU7RUFDZixrQkFBa0I7RUFDbEIsaUJBQWlCO0VBQ2pCLG1CQUFtQjtFQUNuQiw4QkFBOEI7QUFDaEM7O0FBRUE7RUFDRSxpQkFBaUI7RUFDakIsaUJBQWlCO0VBQ2pCLG1CQUFtQjtFQUNuQixhQUFhO0VBQ2IsdUJBQXVCO0VBQ3ZCLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLDJDQUEyQztFQUMzQyxpQkFBaUI7RUFDakIsYUFBYTtFQUNiLDJCQUEyQjtFQUMzQixtQkFBbUI7QUFDckI7O0FBRUE7O0VBRUUsNEJBQTRCO0VBQzVCLG9DQUFvQztFQUNwQyxrQkFBa0I7RUFDbEIsU0FBUztFQUNULFFBQVE7RUFDUixnQ0FBZ0M7RUFDaEMsVUFBVTtFQUNWLFVBQVU7QUFDWjs7QUFFQTtFQUNFLGFBQWE7RUFDYixvQ0FBb0M7QUFDdEM7O0FBRUE7O0VBRUUsbUJBQW1CO0VBQ25CLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIscUJBQXFCO0VBQ3JCLFNBQVM7QUFDWDs7QUFFQTtFQUNFLGFBQWE7RUFDYixlQUFlO0VBQ2Ysa0JBQWtCO0VBQ2xCLHdDQUF3QztFQUN4QywwQ0FBMEM7QUFDNUM7O0FBRUE7O0VBRUUsZ0JBQWdCO0FBQ2xCOztBQUVBOztFQUVFLGlCQUFpQjtBQUNuQjs7QUFFQTs7RUFFRSxlQUFlO0VBQ2YsNkJBQTZCO0VBQzdCLFlBQVk7QUFDZDs7QUFFQSxtQkFBbUI7QUFDbkI7RUFDRSxrQkFBa0I7RUFDbEIsV0FBVztFQUNYLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsU0FBUztBQUNYOztBQUVBO0VBQ0UsVUFBVTtFQUNWLGFBQWE7QUFDZjs7QUFFQTtFQUNFLFdBQVc7RUFDWCxZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxZQUFZO0FBQ2Q7QUFDQTtFQUNFLGlCQUFpQjtBQUNuQlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCJAaW1wb3J0IHVybChcXFwiaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1Sb2JvdG8mZGlzcGxheT1zd2FwXFxcIik7XFxuXFxuOnJvb3Qge1xcbiAgLS1wdXJwbGU6IHJnYmEoMCwgMCwgMjU1LCAwLjUpO1xcbiAgLS1kYXJrLXB1cnBsZTogcmdiYSgwLCAwLCAxNTAsIDAuNSk7XFxuICAtLWxpZ2h0LXB1cnBsZTogcmdiYSgwLCAwLCAyNTUsIDAuMik7XFxuICAtLXdoaXRlOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuOCk7XFxuICAtLWJsYWNrOiByZ2JhKDAsIDAsIDAsIDAuNyk7XFxuICAtLWdyYXk6IHJnYmEoMjAwLCAyMDAsIDIwMCwgMC43KTtcXG59XFxuXFxuKiB7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgbWFyZ2luOiAwO1xcbiAgcGFkZGluZzogMDtcXG59XFxuXFxuaHRtbCxcXG5ib2R5IHtcXG4gIGhlaWdodDogMTAwJTtcXG59XFxuYm9keSB7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7IC8qICpmb3IgJ3Bvc2l0aW9uOiBhYnNvbHV0ZScgb2YgZm9ybSAqL1xcbiAgZm9udC1mYW1pbHk6IFxcXCJSb2JvdG9cXFwiLCBzYW5zLXNlcmlmO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbGlnaHQtcHVycGxlKTtcXG59XFxuXFxuLmNvbnRlbnQtY29udGFpbmVyIHtcXG4gIG1hcmdpbjogYXV0bztcXG4gIHdpZHRoOiA3NSU7XFxuICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiA1JTtcXG4gIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiA1JTtcXG4gIG92ZXJmbG93OiBoaWRkZW47XFxuICBib3gtc2hhZG93OiA1cHggNXB4IDE1cHggMTBweCB2YXIoLS1kYXJrLXB1cnBsZSk7XFxufVxcblxcbi5jb250ZW50IHtcXG4gIGhlaWdodDogOTB2aDtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCg2LCAxZnIpO1xcbiAgZ3JpZC1hdXRvLXJvd3M6IGF1dG87XFxuICBncmlkLXRlbXBsYXRlLWFyZWFzOlxcbiAgICBcXFwiaGVhZGVyIGhlYWRlciBoZWFkZXIgaGVhZGVyIGhlYWRlciBoZWFkZXJcXFwiXFxuICAgIFxcXCJuYXYgbWFpbiBtYWluIG1haW4gbWFpbiBtYWluXFxcIlxcbiAgICBcXFwibmF2IG1haW4gbWFpbiBtYWluIG1haW4gbWFpblxcXCJcXG4gICAgXFxcIm5hdiBtYWluIG1haW4gbWFpbiBtYWluIG1haW5cXFwiXFxuICAgIFxcXCJuYXYgbWFpbiBtYWluIG1haW4gbWFpbiBtYWluXFxcIlxcbiAgICBcXFwibmF2IG1haW4gbWFpbiBtYWluIG1haW4gbWFpblxcXCJcXG4gICAgXFxcIm5hdiBtYWluIG1haW4gbWFpbiBtYWluIG1haW5cXFwiXFxuICAgIFxcXCJuYXYgbWFpbiBtYWluIG1haW4gbWFpbiBtYWluXFxcIlxcbiAgICBcXFwibmF2IG1haW4gbWFpbiBtYWluIG1haW4gbWFpblxcXCJcXG4gICAgXFxcIm5hdiBtYWluIG1haW4gbWFpbiBtYWluIG1haW5cXFwiXFxuICAgIFxcXCJuYXYgbWFpbiBtYWluIG1haW4gbWFpbiBtYWluXFxcIlxcbiAgICBcXFwibmF2IG1haW4gbWFpbiBtYWluIG1haW4gbWFpblxcXCJcXG4gICAgXFxcIm5hdiBtYWluIG1haW4gbWFpbiBtYWluIG1haW5cXFwiXFxuICAgIFxcXCJuYXYgbWFpbiBtYWluIG1haW4gbWFpbiBtYWluXFxcIlxcbiAgICBcXFwibmF2IG1haW4gbWFpbiBtYWluIG1haW4gbWFpblxcXCJcXG4gICAgXFxcIm5hdiBtYWluIG1haW4gbWFpbiBtYWluIG1haW5cXFwiXFxuICAgIFxcXCJuYXYgbWFpbiBtYWluIG1haW4gbWFpbiBtYWluXFxcIlxcbiAgICBcXFwibmF2IG1haW4gbWFpbiBtYWluIG1haW4gbWFpblxcXCJcXG4gICAgXFxcIm5hdiBtYWluIG1haW4gbWFpbiBtYWluIG1haW5cXFwiXFxuICAgIFxcXCJuYXYgbWFpbiBtYWluIG1haW4gbWFpbiBtYWluXFxcIjtcXG59XFxuXFxuLyogKnRvcCBzZWN0aW9uICovXFxuaGVhZGVyIHtcXG4gIGdyaWQtYXJlYTogaGVhZGVyO1xcbiAgZm9udC1zdHlsZTogaXRhbGljO1xcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1wdXJwbGUpO1xcbiAgcGFkZGluZy1sZWZ0OiA1MHB4O1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi5oZWFkZXItZ3JwIHtcXG4gIGNvbG9yOiB2YXIoLS13aGl0ZSk7XFxuICBtYXJnaW46IDA7XFxuICBmb250LXNpemU6IDJyZW07XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgZ2FwOiAxMHB4O1xcbn1cXG5cXG4vKiAqc2lkZWJhciBzZWN0aW9uICovXFxubmF2IHtcXG4gIHBhZGRpbmctdG9wOiAyMHB4O1xcbiAgcGFkZGluZy1sZWZ0OiAyMHB4O1xcbiAgcGFkZGluZy1yaWdodDogMjBweDtcXG4gIGdyaWQtYXJlYTogbmF2O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbGlnaHQtcHVycGxlKTtcXG4gIGNvbG9yOiB2YXIoLS13aGl0ZSk7XFxufVxcblxcbnVsIHtcXG4gIGxpc3Qtc3R5bGU6IG5vbmU7XFxuICBtYXJnaW4tYm90dG9tOiA0MHB4O1xcbn1cXG5cXG5saSxcXG4ubmF2LXByb2plY3Qge1xcbiAgYm9yZGVyOiAxcHggc29saWQgdHJhbnNwYXJlbnQ7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGdhcDogMTVweDtcXG59XFxuXFxubGk6aG92ZXIge1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0td2hpdGUpO1xcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbGlnaHQtcHVycGxlKTtcXG4gIHRyYW5zaXRpb246IGFsbCAwLjNzO1xcbn1cXG5cXG5saS5jaGVja2VkIHtcXG4gIHRleHQtZGVjb3JhdGlvbjogbGluZS10aHJvdWdoO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0td2hpdGUpO1xcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZ3JheSk7XFxuICB0cmFuc2l0aW9uOiBhbGwgMC4zcztcXG59XFxuXFxuc3ZnIHtcXG4gIHdpZHRoOiAzMHB4O1xcbiAgc3Ryb2tlOiB2YXIoLS1kYXJrLXB1cnBsZSk7XFxufVxcblxcbi5uYXYtcHJvamVjdCB7XFxuICBwYWRkaW5nOiA1cHggNXB4O1xcbiAgZm9udC1zaXplOiAxLjRyZW07XFxuICBib3JkZXItdG9wOiAxcHggc29saWQgdmFyKC0tZGFyay1wdXJwbGUpO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBnYXA6IDE1cHg7XFxufVxcblxcbi5wcm9qZWN0LWJ0bixcXG4udGFzay1idG4sXFxuLmFkZC1wcm9qZWN0LWJ0bixcXG4uYWRkLXRhc2stYnRuIHtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xcbiAgYm9yZGVyOiBub25lO1xcbn1cXG5cXG4vKiAqY29udGVudCBzZWN0aW9uICovXFxubWFpbiB7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICBncmlkLWFyZWE6IG1haW47XFxuICBwYWRkaW5nLWxlZnQ6IDUwcHg7XFxuICBwYWRkaW5nLXRvcDogMzBweDtcXG4gIGNvbG9yOiB2YXIoLS1ibGFjayk7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS13aGl0ZSk7XFxufVxcblxcbi5tYWluLXRpdGxlIHtcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgZm9udC1zaXplOiAyLjVyZW07XFxuICBjb2xvcjogdmFyKC0tYmxhY2spO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLnRhc2stdGl0bGUge1xcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHZhcigtLWRhcmstcHVycGxlKTtcXG4gIGZvbnQtc2l6ZTogMS4zcmVtO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi5mb3JtLXByb2plY3QtY29udCxcXG4uZm9ybS10YXNrLWNvbnQge1xcbiAgcGFkZGluZzogMjBweCAyMHB4IDgwcHggMjBweDtcXG4gIGJveC1zaGFkb3c6IDAgMCAxMHB4IDAgdmFyKC0tcHVycGxlKTtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIGxlZnQ6IDUwJTtcXG4gIHRvcDogNTAlO1xcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XFxuICBvcGFjaXR5OiAxO1xcbiAgei1pbmRleDogMTtcXG59XFxuXFxuLmhpZGUge1xcbiAgZGlzcGxheTogbm9uZTtcXG4gIHRyYW5zaXRpb246IG9wYWNpdHkgMC4zcyBlYXNlLWluLW91dDtcXG59XFxuXFxuLmZvcm0tcHJvamVjdCxcXG4uZm9ybS10YXNrIHtcXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGFsaWduLWl0ZW1zOiBmbGV4LWVuZDtcXG4gIGdhcDogMjBweDtcXG59XFxuXFxuLmZvcm0tYWRkIHtcXG4gIHBhZGRpbmc6IDEwcHg7XFxuICBmb250LXNpemU6IDJyZW07XFxuICBmb250LXN0eWxlOiBpdGFsaWM7XFxuICBib3JkZXItdG9wOiAxcHggc29saWQgdmFyKC0tZGFyay1wdXJwbGUpO1xcbiAgYm9yZGVyLXJpZ2h0OiAxcHggc29saWQgdmFyKC0tZGFyay1wdXJwbGUpO1xcbn1cXG5cXG4uZm9ybS1wcm9qZWN0IGxhYmVsLFxcbi5mb3JtLXRhc2sgbGFiZWwge1xcbiAgcGFkZGluZzogM3B4IDBweDtcXG59XFxuXFxuLmZvcm0tcHJvamVjdCBsYWJlbCxcXG4uZm9ybS10YXNrIGlucHV0IHtcXG4gIHBhZGRpbmc6IDVweCAxMHB4O1xcbn1cXG5cXG4ucHJvamVjdC1zdWJtaXQtYnRuLFxcbi50YXNrLXN1Ym1pdC1idG4ge1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxuICBib3JkZXI6IG5vbmU7XFxufVxcblxcbi8qKiB0YXNrIGNvbnRlbnQgICovXFxuLnRhc2stY29udGVudCB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB3aWR0aDogMTAwJTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgZ2FwOiAxMHB4O1xcbn1cXG5cXG4uYWRkLXRhc2stY29udGVudCB7XFxuICB3aWR0aDogOTAlO1xcbiAgcGFkZGluZzogMTBweDtcXG59XFxuXFxuLmFkZC1wcm9qZWN0LWNvbnRlbnQge1xcbiAgd2lkdGg6IDEwMCU7XFxuICBwYWRkaW5nOiA1cHg7XFxufVxcblxcbi5jb250IHtcXG4gIGhlaWdodDogMTAwJTtcXG59XFxuLmJsdXItYmcge1xcbiAgZmlsdGVyOiBibHVyKDVweCk7XFxufVxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTtcblxuICAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTtcblxuICAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7XG5cbiAgICAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cbiAgY3NzICs9IG9iai5jc3M7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH1cblxuICAvLyBGb3Igb2xkIElFXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIGlmICh0eXBlb2YgZG9jdW1lbnQgPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICByZXR1cm4ge1xuICAgICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUoKSB7fSxcbiAgICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge31cbiAgICB9O1xuICB9XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJpbXBvcnQge1xuICBzaG93UHJvamVjdEZvcm0sXG4gIHNob3dUYXNrRm9ybSxcbiAgc2hvd0JsdXJCRyxcbiAgc2VsZWN0b3JzLFxuICBzaG93VGFzayxcbiAgc2hvd1Rhc2tEZWZhdWx0LFxuICBzaG93UHJvamVjdCxcbiAgc2hvd1Byb2plY3REZWZhdWx0LFxufSBmcm9tIFwiLi9kb20uanNcIjtcbmltcG9ydCBUYXNrIGZyb20gXCIuL3Rhc2suanNcIjtcbmltcG9ydCBQcm9qZWN0IGZyb20gXCIuL3Byb2plY3QuanNcIjtcblxuY29uc3QgcHJvamVjdHMgPSBbXTtcblxuZnVuY3Rpb24gY3JlYXRlVGFzaygpIHtcbiAgY29uc3QgdGFzayA9IG5ldyBUYXNrKFxuICAgIHNlbGVjdG9ycy51c2VyVGl0bGUudmFsdWUsXG4gICAgc2VsZWN0b3JzLnVzZXJEZXNjLnZhbHVlLFxuICAgIHNlbGVjdG9ycy51c2VyRHVlRGF0ZS52YWx1ZSxcbiAgICBzZWxlY3RvcnMudXNlclByaW9yaXR5LnZhbHVlXG4gICk7XG4gIC8vIGhvdyB0byBwdXQgdGFzayBpbiBhIHNlbGVjdGVkIHByb2plY3Q/XG4gIHByb2plY3RzWzBdLmFkZFRhc2sodGFzayk7XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZVRhc2tEZWZhdWx0KCkge1xuICBjb25zdCB0YXNrRGVmYXVsdCA9IG5ldyBUYXNrKFxuICAgIFwibGF1bmRyeVwiLFxuICAgIFwidG9vIG11Y2ggY2xvdGhlcyEhIVwiLFxuICAgIFwiNS8xLzIzXCIsXG4gICAgXCJoaWdoXCJcbiAgKTtcbiAgcHJvamVjdHNbMF0uYWRkVGFzayh0YXNrRGVmYXVsdCk7XG4gIHNob3dUYXNrRGVmYXVsdCgpO1xufVxuXG4vLyBwcm9qZWN0IG9iamVjdFxuZnVuY3Rpb24gY3JlYXRlUHJvamVjdCgpIHtcbiAgY29uc3QgcHJvamVjdCA9IG5ldyBQcm9qZWN0KHNlbGVjdG9ycy51c2VyUHJvamVjdC52YWx1ZSk7XG4gIHByb2plY3RzLnB1c2gocHJvamVjdCk7XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZVByb2plY3REZWZhdWx0KCkge1xuICBjb25zdCBwcm9qZWN0RGVmYXVsdCA9IG5ldyBQcm9qZWN0KFwiRGVmYXVsdCBQcm9qZWN0XCIsIHRydWUpO1xuICBwcm9qZWN0cy5wdXNoKHByb2plY3REZWZhdWx0KTtcbiAgc2hvd1Byb2plY3REZWZhdWx0KCk7XG59XG4vLyBUT0RPIHByb2plY3Qgc2VsZWN0aW9uXG4vLyBmdW5jdGlvbiBzZWxlY3RQcm9qZWN0KCkge1xuLy8gICBjb25zdCBwcm9qZWN0Q29udGVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuYWRkLXByb2plY3QtY29udGVudFwiKTtcbi8vICAgcHJvamVjdENvbnRlbnQuZm9yRWFjaChmdW5jdGlvbiAoZWxlbWVudCwgaW5kZXgpIHtcbi8vICAgICBlbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbiAoKSB7XG4vLyAgICAgICBwcm9qZWN0c1tpbmRleF0uYWN0aXZlID0gdHJ1ZTtcbi8vICAgICAgIGNvbnNvbGUubG9nKHByb2plY3RzKTtcbi8vICAgICB9KTtcbi8vICAgICBjb25zb2xlLmxvZyhwcm9qZWN0cyk7XG4vLyAgIH0pO1xuLy8gfVxuXG5mdW5jdGlvbiBwcm9qZWN0QnRuU3VibWl0KCkge1xuICBzZWxlY3RvcnMuYWRkUHJvamVjdEJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpID0+IHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgc2hvd1Byb2plY3QoKTtcbiAgICBjcmVhdGVQcm9qZWN0KCk7XG4gICAgc2hvd1Byb2plY3RGb3JtKCk7XG4gICAgc2hvd0JsdXJCRygpO1xuICAgIGNvbnNvbGUubG9nKHByb2plY3RzKTtcbiAgICBzZWxlY3RvcnMucHJvamVjdEZvcm0ucmVzZXQoKTtcbiAgICAvLyBzZWxlY3RQcm9qZWN0KCk7XG4gIH0pO1xufVxuXG5mdW5jdGlvbiBwcm9qZWN0QnRuTGlzdGVuZXIoKSB7XG4gIGNvbnN0IHByb2plY3RCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnByb2plY3QtYnRuXCIpO1xuICBwcm9qZWN0QnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZSkgPT4ge1xuICAgIHNob3dQcm9qZWN0Rm9ybSgpO1xuICAgIHNob3dCbHVyQkcoKTtcbiAgfSk7XG59XG5cbmZ1bmN0aW9uIHRhc2tCdG5TdWJtaXQoKSB7XG4gIHNlbGVjdG9ycy5hZGRUYXNrQnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZSkgPT4ge1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICBzaG93VGFzaygpO1xuICAgIGNyZWF0ZVRhc2soKTtcbiAgICBzaG93VGFza0Zvcm0oKTtcbiAgICBzaG93Qmx1ckJHKCk7XG4gICAgc2VsZWN0b3JzLnRhc2tGb3JtLnJlc2V0KCk7XG4gICAgY29uc29sZS5sb2cocHJvamVjdHMpO1xuICB9KTtcbn1cblxuZnVuY3Rpb24gdGFza0J0bkxpc3RlbmVyKCkge1xuICBjb25zdCB0YXNrQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi50YXNrLWJ0blwiKTtcbiAgdGFza0J0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpID0+IHtcbiAgICBzaG93VGFza0Zvcm0oKTtcbiAgICBzaG93Qmx1ckJHKCk7XG4gIH0pO1xufVxuXG5zZWxlY3RvcnMudGFza0NvbnRlbnQuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChlKSA9PiB7XG4gIGUudGFyZ2V0LmNsYXNzTGlzdC50b2dnbGUoXCJjaGVja2VkXCIpO1xufSk7XG5cbmZ1bmN0aW9uIGxpc3RlbmVycygpIHtcbiAgLy8gc2VsZWN0UHJvamVjdCgpO1xuICBwcm9qZWN0QnRuTGlzdGVuZXIoKTtcbiAgcHJvamVjdEJ0blN1Ym1pdCgpO1xuICB0YXNrQnRuTGlzdGVuZXIoKTtcbiAgdGFza0J0blN1Ym1pdCgpO1xufVxuLy8qIHByb2dyYW0gZmxvd1xuZnVuY3Rpb24gcmVuZGVyKCkge1xuICBjcmVhdGVQcm9qZWN0RGVmYXVsdCgpO1xuICBjcmVhdGVUYXNrRGVmYXVsdCgpO1xuICBsaXN0ZW5lcnMoKTtcbn1cblxuZXhwb3J0IHsgcmVuZGVyIH07XG4iLCJmdW5jdGlvbiBzaG93UHJvamVjdEZvcm0oKSB7XG4gIGNvbnN0IGZvcm1Qcm9qZWN0Q29udCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuZm9ybS1wcm9qZWN0LWNvbnRcIik7XG4gIGZvcm1Qcm9qZWN0Q29udC5jbGFzc0xpc3QudG9nZ2xlKFwiaGlkZVwiKTtcbn1cblxuZnVuY3Rpb24gc2hvd1Rhc2tGb3JtKCkge1xuICBjb25zdCBmb3JtVGFza0NvbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmZvcm0tdGFzay1jb250XCIpO1xuICBmb3JtVGFza0NvbnQuY2xhc3NMaXN0LnRvZ2dsZShcImhpZGVcIik7XG59XG5cbmZ1bmN0aW9uIHNob3dCbHVyQkcoKSB7XG4gIHNlbGVjdG9ycy5jb250LmNsYXNzTGlzdC50b2dnbGUoXCJibHVyLWJnXCIpO1xufVxuXG5mdW5jdGlvbiBzaG93UHJvamVjdCgpIHtcbiAgY29uc3QgbmF2UHJvaiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubmF2LXByb2plY3RzXCIpO1xuICBjb25zdCBwcm9qZWN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxpXCIpO1xuICBwcm9qZWN0LmNsYXNzTGlzdC5hZGQoXCJhZGQtcHJvamVjdC1jb250ZW50XCIpO1xuICBwcm9qZWN0LnRleHRDb250ZW50ID0gc2VsZWN0b3JzLnVzZXJQcm9qZWN0LnZhbHVlO1xuICBzZWxlY3RvcnMubWFpblRpdGxlLnRleHRDb250ZW50ID0gcHJvamVjdC50ZXh0Q29udGVudDtcbiAgbmF2UHJvai5hcHBlbmRDaGlsZChwcm9qZWN0KTtcbn1cblxuZnVuY3Rpb24gc2hvd1Byb2plY3REZWZhdWx0KCkge1xuICBjb25zdCBuYXZQcm9qID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5uYXYtcHJvamVjdHNcIik7XG4gIGNvbnN0IHByb2plY3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGlcIik7XG4gIHByb2plY3QuY2xhc3NMaXN0LmFkZChcImFkZC1wcm9qZWN0LWNvbnRlbnRcIik7XG4gIHByb2plY3QudGV4dENvbnRlbnQgPSBcIkRlZmF1bHQgUHJvamVjdFwiO1xuICBzZWxlY3RvcnMubWFpblRpdGxlLnRleHRDb250ZW50ID0gcHJvamVjdC50ZXh0Q29udGVudDtcbiAgbmF2UHJvai5hcHBlbmRDaGlsZChwcm9qZWN0KTtcbn1cblxuZnVuY3Rpb24gc2hvd1Rhc2soKSB7XG4gIGNvbnN0IHRhc2sgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGlcIik7XG4gIHRhc2suY2xhc3NMaXN0LmFkZChcImFkZC10YXNrLWNvbnRlbnRcIik7XG4gIHRhc2sudGV4dENvbnRlbnQgPSBzZWxlY3RvcnMudXNlclRpdGxlLnZhbHVlO1xuICB0YXNrLnRleHRDb250ZW50ICs9IHNlbGVjdG9ycy51c2VyRGVzYy52YWx1ZTtcbiAgdGFzay50ZXh0Q29udGVudCArPSBzZWxlY3RvcnMudXNlckR1ZURhdGUudmFsdWU7XG4gIHRhc2sudGV4dENvbnRlbnQgKz0gc2VsZWN0b3JzLnVzZXJQcmlvcml0eS52YWx1ZTtcbiAgc2VsZWN0b3JzLnRhc2tDb250ZW50LmFwcGVuZENoaWxkKHRhc2spO1xufVxuXG5mdW5jdGlvbiBzaG93VGFza0RlZmF1bHQoKSB7XG4gIGNvbnN0IHRhc2sgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGlcIik7XG4gIHRhc2suY2xhc3NMaXN0LmFkZChcImFkZC10YXNrLWNvbnRlbnRcIik7XG4gIHRhc2sudGV4dENvbnRlbnQgPSBcImxhdW5kcnlcIjtcbiAgdGFzay50ZXh0Q29udGVudCArPSBcInRvbyBtdWNoIGNsb3RoZXNcIjtcbiAgdGFzay50ZXh0Q29udGVudCArPSBcIjUvMS8yM1wiO1xuICB0YXNrLnRleHRDb250ZW50ICs9IFwiaGlnaFwiO1xuICBzZWxlY3RvcnMudGFza0NvbnRlbnQuYXBwZW5kQ2hpbGQodGFzayk7XG59XG5cbi8vIHRhc2tDb250YWluZXJMaXN0ZW5lclxuXG5jb25zdCBzZWxlY3RvcnMgPSB7XG4gIHRhc2tDb250ZW50OiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnRhc2stY29udGVudFwiKSxcbiAgbWFpblRpdGxlOiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm1haW4tdGl0bGVcIiksXG4gIHVzZXJQcm9qZWN0OiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3Byb2plY3RcIiksXG4gIHVzZXJUaXRsZTogZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiN0aXRsZVwiKSxcbiAgdXNlckRlc2M6IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjZGVzY1wiKSxcbiAgdXNlckR1ZURhdGU6IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjZHVlLWRhdGVcIiksXG4gIHVzZXJQcmlvcml0eTogZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNwcmlvcml0eVwiKSxcbiAgYWRkVGFza0J0bjogZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5hZGQtdGFzay1idG5cIiksXG4gIGFkZFByb2plY3RCdG46IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuYWRkLXByb2plY3QtYnRuXCIpLFxuICB0YXNrRm9ybTogZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5mb3JtLXRhc2tcIiksXG4gIHByb2plY3RGb3JtOiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmZvcm0tcHJvamVjdFwiKSxcbiAgY29udDogZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5jb250XCIpLFxuICBibHVyQkc6IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuYmx1ci1iZ1wiKSxcbn07XG5cbmV4cG9ydCB7XG4gIHNob3dQcm9qZWN0Rm9ybSxcbiAgc2hvd1Rhc2tGb3JtLFxuICBzaG93Qmx1ckJHLFxuICBzZWxlY3RvcnMsXG4gIHNob3dUYXNrLFxuICBzaG93VGFza0RlZmF1bHQsXG4gIHNob3dQcm9qZWN0LFxuICBzaG93UHJvamVjdERlZmF1bHQsXG59O1xuIiwiY2xhc3MgUHJvamVjdCB7XG4gIGNvbnN0cnVjdG9yKG5hbWUpIHtcbiAgICB0aGlzLm5hbWUgPSBuYW1lO1xuICAgIHRoaXMudGFza3MgPSBbXTtcbiAgICB0aGlzLmFjdGl2ZSA9IGZhbHNlO1xuICB9XG5cbiAgYWRkVGFzayh0YXNrKSB7XG4gICAgdGhpcy50YXNrcy5wdXNoKHRhc2spO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFByb2plY3Q7XG4iLCJpbXBvcnQgeyBQcm9qZWN0IH0gZnJvbSBcIi4vcHJvamVjdFwiO1xuXG5jbGFzcyBUYXNrIHtcbiAgY29uc3RydWN0b3IodGl0bGUsIGRlc2NyaXB0aW9uLCBkdWVEYXRlLCBwcmlvcml0eSkge1xuICAgIHRoaXMudGl0bGUgPSB0aXRsZTtcbiAgICB0aGlzLmRlc2NyaXB0aW9uID0gZGVzY3JpcHRpb247XG4gICAgdGhpcy5kdWVEYXRlID0gZHVlRGF0ZTtcbiAgICB0aGlzLnByaW9yaXR5ID0gcHJpb3JpdHk7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgVGFzaztcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5jID0gdW5kZWZpbmVkOyIsImltcG9ydCBcIi4uL2Nzcy9zdHlsZS5jc3NcIjtcbmltcG9ydCB7IHJlbmRlciB9IGZyb20gXCIuL2NvbnRyb2xsZXIuanNcIjtcblxucmVuZGVyKCk7XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=