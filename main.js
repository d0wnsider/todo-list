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

_dom_js__WEBPACK_IMPORTED_MODULE_0__.selectors.navProject.addEventListener("click", (e) => {
  _dom_js__WEBPACK_IMPORTED_MODULE_0__.selectors.mainTitle.textContent = e.target.textContent;
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
  selectors.mainTitle.textContent = `Default Project`;
  navProj.appendChild(project);
}

function showProjectDefault() {
  const navProj = document.querySelector(".nav-projects");
  const project = document.createElement("li");
  project.classList.add("add-project-content");
  project.textContent = "Default Project";
  selectors.mainTitle.textContent = `Default Project`;
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
  navProject: document.querySelector(".nav-projects"),
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LEVBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7QUNaYTs7QUFFcEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxpRUFBZSxJQUFJLEVBQUM7Ozs7Ozs7VUNYcEI7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLGlDQUFpQyxXQUFXO1dBQzVDO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7O1dDTkE7Ozs7Ozs7Ozs7Ozs7QUNBMEI7QUFDZTs7QUFFekMsc0RBQU0iLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvY3NzL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9jc3Mvc3R5bGUuY3NzPzlmY2QiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvbW9kdWxlcy9jb250cm9sbGVyLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9tb2R1bGVzL2RvbS5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvbW9kdWxlcy9wcm9qZWN0LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9tb2R1bGVzL3Rhc2suanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvbm9uY2UiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL21vZHVsZXMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiQGltcG9ydCB1cmwoaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1Sb2JvdG8mZGlzcGxheT1zd2FwKTtcIl0pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiOnJvb3Qge1xcbiAgLS1wdXJwbGU6IHJnYmEoMCwgMCwgMjU1LCAwLjUpO1xcbiAgLS1kYXJrLXB1cnBsZTogcmdiYSgwLCAwLCAxNTAsIDAuNSk7XFxuICAtLWxpZ2h0LXB1cnBsZTogcmdiYSgwLCAwLCAyNTUsIDAuMik7XFxuICAtLXdoaXRlOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuOCk7XFxuICAtLWJsYWNrOiByZ2JhKDAsIDAsIDAsIDAuNyk7XFxuICAtLWdyYXk6IHJnYmEoMjAwLCAyMDAsIDIwMCwgMC43KTtcXG59XFxuXFxuKiB7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgbWFyZ2luOiAwO1xcbiAgcGFkZGluZzogMDtcXG59XFxuXFxuaHRtbCxcXG5ib2R5IHtcXG4gIGhlaWdodDogMTAwJTtcXG59XFxuYm9keSB7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7IC8qICpmb3IgJ3Bvc2l0aW9uOiBhYnNvbHV0ZScgb2YgZm9ybSAqL1xcbiAgZm9udC1mYW1pbHk6IFxcXCJSb2JvdG9cXFwiLCBzYW5zLXNlcmlmO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbGlnaHQtcHVycGxlKTtcXG59XFxuXFxuLmNvbnRlbnQtY29udGFpbmVyIHtcXG4gIG1hcmdpbjogYXV0bztcXG4gIHdpZHRoOiA3NSU7XFxuICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiA1JTtcXG4gIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiA1JTtcXG4gIG92ZXJmbG93OiBoaWRkZW47XFxuICBib3gtc2hhZG93OiA1cHggNXB4IDE1cHggMTBweCB2YXIoLS1kYXJrLXB1cnBsZSk7XFxufVxcblxcbi5jb250ZW50IHtcXG4gIGhlaWdodDogOTB2aDtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCg2LCAxZnIpO1xcbiAgZ3JpZC1hdXRvLXJvd3M6IGF1dG87XFxuICBncmlkLXRlbXBsYXRlLWFyZWFzOlxcbiAgICBcXFwiaGVhZGVyIGhlYWRlciBoZWFkZXIgaGVhZGVyIGhlYWRlciBoZWFkZXJcXFwiXFxuICAgIFxcXCJuYXYgbWFpbiBtYWluIG1haW4gbWFpbiBtYWluXFxcIlxcbiAgICBcXFwibmF2IG1haW4gbWFpbiBtYWluIG1haW4gbWFpblxcXCJcXG4gICAgXFxcIm5hdiBtYWluIG1haW4gbWFpbiBtYWluIG1haW5cXFwiXFxuICAgIFxcXCJuYXYgbWFpbiBtYWluIG1haW4gbWFpbiBtYWluXFxcIlxcbiAgICBcXFwibmF2IG1haW4gbWFpbiBtYWluIG1haW4gbWFpblxcXCJcXG4gICAgXFxcIm5hdiBtYWluIG1haW4gbWFpbiBtYWluIG1haW5cXFwiXFxuICAgIFxcXCJuYXYgbWFpbiBtYWluIG1haW4gbWFpbiBtYWluXFxcIlxcbiAgICBcXFwibmF2IG1haW4gbWFpbiBtYWluIG1haW4gbWFpblxcXCJcXG4gICAgXFxcIm5hdiBtYWluIG1haW4gbWFpbiBtYWluIG1haW5cXFwiXFxuICAgIFxcXCJuYXYgbWFpbiBtYWluIG1haW4gbWFpbiBtYWluXFxcIlxcbiAgICBcXFwibmF2IG1haW4gbWFpbiBtYWluIG1haW4gbWFpblxcXCJcXG4gICAgXFxcIm5hdiBtYWluIG1haW4gbWFpbiBtYWluIG1haW5cXFwiXFxuICAgIFxcXCJuYXYgbWFpbiBtYWluIG1haW4gbWFpbiBtYWluXFxcIlxcbiAgICBcXFwibmF2IG1haW4gbWFpbiBtYWluIG1haW4gbWFpblxcXCJcXG4gICAgXFxcIm5hdiBtYWluIG1haW4gbWFpbiBtYWluIG1haW5cXFwiXFxuICAgIFxcXCJuYXYgbWFpbiBtYWluIG1haW4gbWFpbiBtYWluXFxcIlxcbiAgICBcXFwibmF2IG1haW4gbWFpbiBtYWluIG1haW4gbWFpblxcXCJcXG4gICAgXFxcIm5hdiBtYWluIG1haW4gbWFpbiBtYWluIG1haW5cXFwiXFxuICAgIFxcXCJuYXYgbWFpbiBtYWluIG1haW4gbWFpbiBtYWluXFxcIjtcXG59XFxuXFxuLyogKnRvcCBzZWN0aW9uICovXFxuaGVhZGVyIHtcXG4gIGdyaWQtYXJlYTogaGVhZGVyO1xcbiAgZm9udC1zdHlsZTogaXRhbGljO1xcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1wdXJwbGUpO1xcbiAgcGFkZGluZy1sZWZ0OiA1MHB4O1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi5oZWFkZXItZ3JwIHtcXG4gIGNvbG9yOiB2YXIoLS13aGl0ZSk7XFxuICBtYXJnaW46IDA7XFxuICBmb250LXNpemU6IDJyZW07XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgZ2FwOiAxMHB4O1xcbn1cXG5cXG4vKiAqc2lkZWJhciBzZWN0aW9uICovXFxubmF2IHtcXG4gIHBhZGRpbmctdG9wOiAyMHB4O1xcbiAgcGFkZGluZy1sZWZ0OiAyMHB4O1xcbiAgcGFkZGluZy1yaWdodDogMjBweDtcXG4gIGdyaWQtYXJlYTogbmF2O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbGlnaHQtcHVycGxlKTtcXG4gIGNvbG9yOiB2YXIoLS13aGl0ZSk7XFxufVxcblxcbnVsIHtcXG4gIGxpc3Qtc3R5bGU6IG5vbmU7XFxuICBtYXJnaW4tYm90dG9tOiA0MHB4O1xcbn1cXG5cXG5saSxcXG4ubmF2LXByb2plY3Qge1xcbiAgYm9yZGVyOiAxcHggc29saWQgdHJhbnNwYXJlbnQ7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGdhcDogMTVweDtcXG59XFxuXFxubGk6aG92ZXIge1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0td2hpdGUpO1xcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbGlnaHQtcHVycGxlKTtcXG4gIHRyYW5zaXRpb246IGFsbCAwLjNzO1xcbn1cXG5cXG5saS5jaGVja2VkIHtcXG4gIHRleHQtZGVjb3JhdGlvbjogbGluZS10aHJvdWdoO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0td2hpdGUpO1xcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZ3JheSk7XFxuICB0cmFuc2l0aW9uOiBhbGwgMC4zcztcXG59XFxuXFxuc3ZnIHtcXG4gIHdpZHRoOiAzMHB4O1xcbiAgc3Ryb2tlOiB2YXIoLS1kYXJrLXB1cnBsZSk7XFxufVxcblxcbi5uYXYtcHJvamVjdCB7XFxuICBwYWRkaW5nOiA1cHggNXB4O1xcbiAgZm9udC1zaXplOiAxLjRyZW07XFxuICBib3JkZXItdG9wOiAxcHggc29saWQgdmFyKC0tZGFyay1wdXJwbGUpO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBnYXA6IDE1cHg7XFxufVxcblxcbi5wcm9qZWN0LWJ0bixcXG4udGFzay1idG4sXFxuLmFkZC1wcm9qZWN0LWJ0bixcXG4uYWRkLXRhc2stYnRuIHtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xcbiAgYm9yZGVyOiBub25lO1xcbn1cXG5cXG4vKiAqY29udGVudCBzZWN0aW9uICovXFxubWFpbiB7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICBncmlkLWFyZWE6IG1haW47XFxuICBwYWRkaW5nLWxlZnQ6IDUwcHg7XFxuICBwYWRkaW5nLXRvcDogMzBweDtcXG4gIGNvbG9yOiB2YXIoLS1ibGFjayk7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS13aGl0ZSk7XFxufVxcblxcbi5tYWluLXRpdGxlIHtcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgZm9udC1zaXplOiAyLjVyZW07XFxuICBjb2xvcjogdmFyKC0tYmxhY2spO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLnRhc2stdGl0bGUge1xcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHZhcigtLWRhcmstcHVycGxlKTtcXG4gIGZvbnQtc2l6ZTogMS4zcmVtO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi5mb3JtLXByb2plY3QtY29udCxcXG4uZm9ybS10YXNrLWNvbnQge1xcbiAgcGFkZGluZzogMjBweCAyMHB4IDgwcHggMjBweDtcXG4gIGJveC1zaGFkb3c6IDAgMCAxMHB4IDAgdmFyKC0tcHVycGxlKTtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIGxlZnQ6IDUwJTtcXG4gIHRvcDogNTAlO1xcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XFxuICBvcGFjaXR5OiAxO1xcbiAgei1pbmRleDogMTtcXG59XFxuXFxuLmhpZGUge1xcbiAgZGlzcGxheTogbm9uZTtcXG4gIHRyYW5zaXRpb246IG9wYWNpdHkgMC4zcyBlYXNlLWluLW91dDtcXG59XFxuXFxuLmZvcm0tcHJvamVjdCxcXG4uZm9ybS10YXNrIHtcXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGFsaWduLWl0ZW1zOiBmbGV4LWVuZDtcXG4gIGdhcDogMjBweDtcXG59XFxuXFxuLmZvcm0tYWRkIHtcXG4gIHBhZGRpbmc6IDEwcHg7XFxuICBmb250LXNpemU6IDJyZW07XFxuICBmb250LXN0eWxlOiBpdGFsaWM7XFxuICBib3JkZXItdG9wOiAxcHggc29saWQgdmFyKC0tZGFyay1wdXJwbGUpO1xcbiAgYm9yZGVyLXJpZ2h0OiAxcHggc29saWQgdmFyKC0tZGFyay1wdXJwbGUpO1xcbn1cXG5cXG4uZm9ybS1wcm9qZWN0IGxhYmVsLFxcbi5mb3JtLXRhc2sgbGFiZWwge1xcbiAgcGFkZGluZzogM3B4IDBweDtcXG59XFxuXFxuLmZvcm0tcHJvamVjdCBsYWJlbCxcXG4uZm9ybS10YXNrIGlucHV0IHtcXG4gIHBhZGRpbmc6IDVweCAxMHB4O1xcbn1cXG5cXG4ucHJvamVjdC1zdWJtaXQtYnRuLFxcbi50YXNrLXN1Ym1pdC1idG4ge1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxuICBib3JkZXI6IG5vbmU7XFxufVxcblxcbi8qKiB0YXNrIGNvbnRlbnQgICovXFxuLnRhc2stY29udGVudCB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB3aWR0aDogMTAwJTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgZ2FwOiAxMHB4O1xcbn1cXG5cXG4uYWRkLXRhc2stY29udGVudCB7XFxuICB3aWR0aDogOTAlO1xcbiAgcGFkZGluZzogMTBweDtcXG59XFxuXFxuLmFkZC1wcm9qZWN0LWNvbnRlbnQge1xcbiAgd2lkdGg6IDEwMCU7XFxuICBwYWRkaW5nOiA1cHg7XFxufVxcblxcbi5jb250IHtcXG4gIGhlaWdodDogMTAwJTtcXG59XFxuLmJsdXItYmcge1xcbiAgZmlsdGVyOiBibHVyKDVweCk7XFxufVxcblwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9jc3Mvc3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUVBO0VBQ0UsOEJBQThCO0VBQzlCLG1DQUFtQztFQUNuQyxvQ0FBb0M7RUFDcEMsaUNBQWlDO0VBQ2pDLDJCQUEyQjtFQUMzQixnQ0FBZ0M7QUFDbEM7O0FBRUE7RUFDRSxzQkFBc0I7RUFDdEIsU0FBUztFQUNULFVBQVU7QUFDWjs7QUFFQTs7RUFFRSxZQUFZO0FBQ2Q7QUFDQTtFQUNFLFlBQVk7RUFDWixrQkFBa0IsRUFBRSxzQ0FBc0M7RUFDMUQsaUNBQWlDO0VBQ2pDLHFDQUFxQztBQUN2Qzs7QUFFQTtFQUNFLFlBQVk7RUFDWixVQUFVO0VBQ1YsNkJBQTZCO0VBQzdCLDhCQUE4QjtFQUM5QixnQkFBZ0I7RUFDaEIsZ0RBQWdEO0FBQ2xEOztBQUVBO0VBQ0UsWUFBWTtFQUNaLGFBQWE7RUFDYixxQ0FBcUM7RUFDckMsb0JBQW9CO0VBQ3BCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztrQ0FvQmdDO0FBQ2xDOztBQUVBLGlCQUFpQjtBQUNqQjtFQUNFLGlCQUFpQjtFQUNqQixrQkFBa0I7RUFDbEIsaUJBQWlCO0VBQ2pCLCtCQUErQjtFQUMvQixrQkFBa0I7RUFDbEIsYUFBYTtFQUNiLDJCQUEyQjtFQUMzQixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxtQkFBbUI7RUFDbkIsU0FBUztFQUNULGVBQWU7RUFDZixhQUFhO0VBQ2IsdUJBQXVCO0VBQ3ZCLG1CQUFtQjtFQUNuQixTQUFTO0FBQ1g7O0FBRUEscUJBQXFCO0FBQ3JCO0VBQ0UsaUJBQWlCO0VBQ2pCLGtCQUFrQjtFQUNsQixtQkFBbUI7RUFDbkIsY0FBYztFQUNkLHFDQUFxQztFQUNyQyxtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxnQkFBZ0I7RUFDaEIsbUJBQW1CO0FBQ3JCOztBQUVBOztFQUVFLDZCQUE2QjtFQUM3QixhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLFNBQVM7QUFDWDs7QUFFQTtFQUNFLGVBQWU7RUFDZiw4QkFBOEI7RUFDOUIsa0JBQWtCO0VBQ2xCLHFDQUFxQztFQUNyQyxvQkFBb0I7QUFDdEI7O0FBRUE7RUFDRSw2QkFBNkI7RUFDN0IsZUFBZTtFQUNmLDhCQUE4QjtFQUM5QixrQkFBa0I7RUFDbEIsNkJBQTZCO0VBQzdCLG9CQUFvQjtBQUN0Qjs7QUFFQTtFQUNFLFdBQVc7RUFDWCwwQkFBMEI7QUFDNUI7O0FBRUE7RUFDRSxnQkFBZ0I7RUFDaEIsaUJBQWlCO0VBQ2pCLHdDQUF3QztFQUN4QyxhQUFhO0VBQ2IsOEJBQThCO0VBQzlCLG1CQUFtQjtFQUNuQixTQUFTO0FBQ1g7O0FBRUE7Ozs7RUFJRSxlQUFlO0VBQ2YsNkJBQTZCO0VBQzdCLFlBQVk7QUFDZDs7QUFFQSxxQkFBcUI7QUFDckI7RUFDRSxrQkFBa0I7RUFDbEIsZUFBZTtFQUNmLGtCQUFrQjtFQUNsQixpQkFBaUI7RUFDakIsbUJBQW1CO0VBQ25CLDhCQUE4QjtBQUNoQzs7QUFFQTtFQUNFLGlCQUFpQjtFQUNqQixpQkFBaUI7RUFDakIsbUJBQW1CO0VBQ25CLGFBQWE7RUFDYix1QkFBdUI7RUFDdkIsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsMkNBQTJDO0VBQzNDLGlCQUFpQjtFQUNqQixhQUFhO0VBQ2IsMkJBQTJCO0VBQzNCLG1CQUFtQjtBQUNyQjs7QUFFQTs7RUFFRSw0QkFBNEI7RUFDNUIsb0NBQW9DO0VBQ3BDLGtCQUFrQjtFQUNsQixTQUFTO0VBQ1QsUUFBUTtFQUNSLGdDQUFnQztFQUNoQyxVQUFVO0VBQ1YsVUFBVTtBQUNaOztBQUVBO0VBQ0UsYUFBYTtFQUNiLG9DQUFvQztBQUN0Qzs7QUFFQTs7RUFFRSxtQkFBbUI7RUFDbkIsYUFBYTtFQUNiLHNCQUFzQjtFQUN0QixxQkFBcUI7RUFDckIsU0FBUztBQUNYOztBQUVBO0VBQ0UsYUFBYTtFQUNiLGVBQWU7RUFDZixrQkFBa0I7RUFDbEIsd0NBQXdDO0VBQ3hDLDBDQUEwQztBQUM1Qzs7QUFFQTs7RUFFRSxnQkFBZ0I7QUFDbEI7O0FBRUE7O0VBRUUsaUJBQWlCO0FBQ25COztBQUVBOztFQUVFLGVBQWU7RUFDZiw2QkFBNkI7RUFDN0IsWUFBWTtBQUNkOztBQUVBLG1CQUFtQjtBQUNuQjtFQUNFLGtCQUFrQjtFQUNsQixXQUFXO0VBQ1gsYUFBYTtFQUNiLHNCQUFzQjtFQUN0QixTQUFTO0FBQ1g7O0FBRUE7RUFDRSxVQUFVO0VBQ1YsYUFBYTtBQUNmOztBQUVBO0VBQ0UsV0FBVztFQUNYLFlBQVk7QUFDZDs7QUFFQTtFQUNFLFlBQVk7QUFDZDtBQUNBO0VBQ0UsaUJBQWlCO0FBQ25CXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIkBpbXBvcnQgdXJsKFxcXCJodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PVJvYm90byZkaXNwbGF5PXN3YXBcXFwiKTtcXG5cXG46cm9vdCB7XFxuICAtLXB1cnBsZTogcmdiYSgwLCAwLCAyNTUsIDAuNSk7XFxuICAtLWRhcmstcHVycGxlOiByZ2JhKDAsIDAsIDE1MCwgMC41KTtcXG4gIC0tbGlnaHQtcHVycGxlOiByZ2JhKDAsIDAsIDI1NSwgMC4yKTtcXG4gIC0td2hpdGU6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC44KTtcXG4gIC0tYmxhY2s6IHJnYmEoMCwgMCwgMCwgMC43KTtcXG4gIC0tZ3JheTogcmdiYSgyMDAsIDIwMCwgMjAwLCAwLjcpO1xcbn1cXG5cXG4qIHtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICBtYXJnaW46IDA7XFxuICBwYWRkaW5nOiAwO1xcbn1cXG5cXG5odG1sLFxcbmJvZHkge1xcbiAgaGVpZ2h0OiAxMDAlO1xcbn1cXG5ib2R5IHtcXG4gIGhlaWdodDogMTAwJTtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTsgLyogKmZvciAncG9zaXRpb246IGFic29sdXRlJyBvZiBmb3JtICovXFxuICBmb250LWZhbWlseTogXFxcIlJvYm90b1xcXCIsIHNhbnMtc2VyaWY7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1saWdodC1wdXJwbGUpO1xcbn1cXG5cXG4uY29udGVudC1jb250YWluZXIge1xcbiAgbWFyZ2luOiBhdXRvO1xcbiAgd2lkdGg6IDc1JTtcXG4gIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDUlO1xcbiAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDUlO1xcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcXG4gIGJveC1zaGFkb3c6IDVweCA1cHggMTVweCAxMHB4IHZhcigtLWRhcmstcHVycGxlKTtcXG59XFxuXFxuLmNvbnRlbnQge1xcbiAgaGVpZ2h0OiA5MHZoO1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDYsIDFmcik7XFxuICBncmlkLWF1dG8tcm93czogYXV0bztcXG4gIGdyaWQtdGVtcGxhdGUtYXJlYXM6XFxuICAgIFxcXCJoZWFkZXIgaGVhZGVyIGhlYWRlciBoZWFkZXIgaGVhZGVyIGhlYWRlclxcXCJcXG4gICAgXFxcIm5hdiBtYWluIG1haW4gbWFpbiBtYWluIG1haW5cXFwiXFxuICAgIFxcXCJuYXYgbWFpbiBtYWluIG1haW4gbWFpbiBtYWluXFxcIlxcbiAgICBcXFwibmF2IG1haW4gbWFpbiBtYWluIG1haW4gbWFpblxcXCJcXG4gICAgXFxcIm5hdiBtYWluIG1haW4gbWFpbiBtYWluIG1haW5cXFwiXFxuICAgIFxcXCJuYXYgbWFpbiBtYWluIG1haW4gbWFpbiBtYWluXFxcIlxcbiAgICBcXFwibmF2IG1haW4gbWFpbiBtYWluIG1haW4gbWFpblxcXCJcXG4gICAgXFxcIm5hdiBtYWluIG1haW4gbWFpbiBtYWluIG1haW5cXFwiXFxuICAgIFxcXCJuYXYgbWFpbiBtYWluIG1haW4gbWFpbiBtYWluXFxcIlxcbiAgICBcXFwibmF2IG1haW4gbWFpbiBtYWluIG1haW4gbWFpblxcXCJcXG4gICAgXFxcIm5hdiBtYWluIG1haW4gbWFpbiBtYWluIG1haW5cXFwiXFxuICAgIFxcXCJuYXYgbWFpbiBtYWluIG1haW4gbWFpbiBtYWluXFxcIlxcbiAgICBcXFwibmF2IG1haW4gbWFpbiBtYWluIG1haW4gbWFpblxcXCJcXG4gICAgXFxcIm5hdiBtYWluIG1haW4gbWFpbiBtYWluIG1haW5cXFwiXFxuICAgIFxcXCJuYXYgbWFpbiBtYWluIG1haW4gbWFpbiBtYWluXFxcIlxcbiAgICBcXFwibmF2IG1haW4gbWFpbiBtYWluIG1haW4gbWFpblxcXCJcXG4gICAgXFxcIm5hdiBtYWluIG1haW4gbWFpbiBtYWluIG1haW5cXFwiXFxuICAgIFxcXCJuYXYgbWFpbiBtYWluIG1haW4gbWFpbiBtYWluXFxcIlxcbiAgICBcXFwibmF2IG1haW4gbWFpbiBtYWluIG1haW4gbWFpblxcXCJcXG4gICAgXFxcIm5hdiBtYWluIG1haW4gbWFpbiBtYWluIG1haW5cXFwiO1xcbn1cXG5cXG4vKiAqdG9wIHNlY3Rpb24gKi9cXG5oZWFkZXIge1xcbiAgZ3JpZC1hcmVhOiBoZWFkZXI7XFxuICBmb250LXN0eWxlOiBpdGFsaWM7XFxuICBmb250LXdlaWdodDogYm9sZDtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXB1cnBsZSk7XFxuICBwYWRkaW5nLWxlZnQ6IDUwcHg7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLmhlYWRlci1ncnAge1xcbiAgY29sb3I6IHZhcigtLXdoaXRlKTtcXG4gIG1hcmdpbjogMDtcXG4gIGZvbnQtc2l6ZTogMnJlbTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBnYXA6IDEwcHg7XFxufVxcblxcbi8qICpzaWRlYmFyIHNlY3Rpb24gKi9cXG5uYXYge1xcbiAgcGFkZGluZy10b3A6IDIwcHg7XFxuICBwYWRkaW5nLWxlZnQ6IDIwcHg7XFxuICBwYWRkaW5nLXJpZ2h0OiAyMHB4O1xcbiAgZ3JpZC1hcmVhOiBuYXY7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1saWdodC1wdXJwbGUpO1xcbiAgY29sb3I6IHZhcigtLXdoaXRlKTtcXG59XFxuXFxudWwge1xcbiAgbGlzdC1zdHlsZTogbm9uZTtcXG4gIG1hcmdpbi1ib3R0b206IDQwcHg7XFxufVxcblxcbmxpLFxcbi5uYXYtcHJvamVjdCB7XFxuICBib3JkZXI6IDFweCBzb2xpZCB0cmFuc3BhcmVudDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgZ2FwOiAxNXB4O1xcbn1cXG5cXG5saTpob3ZlciB7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS13aGl0ZSk7XFxuICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1saWdodC1wdXJwbGUpO1xcbiAgdHJhbnNpdGlvbjogYWxsIDAuM3M7XFxufVxcblxcbmxpLmNoZWNrZWQge1xcbiAgdGV4dC1kZWNvcmF0aW9uOiBsaW5lLXRocm91Z2g7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS13aGl0ZSk7XFxuICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1ncmF5KTtcXG4gIHRyYW5zaXRpb246IGFsbCAwLjNzO1xcbn1cXG5cXG5zdmcge1xcbiAgd2lkdGg6IDMwcHg7XFxuICBzdHJva2U6IHZhcigtLWRhcmstcHVycGxlKTtcXG59XFxuXFxuLm5hdi1wcm9qZWN0IHtcXG4gIHBhZGRpbmc6IDVweCA1cHg7XFxuICBmb250LXNpemU6IDEuNHJlbTtcXG4gIGJvcmRlci10b3A6IDFweCBzb2xpZCB2YXIoLS1kYXJrLXB1cnBsZSk7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGdhcDogMTVweDtcXG59XFxuXFxuLnByb2plY3QtYnRuLFxcbi50YXNrLWJ0bixcXG4uYWRkLXByb2plY3QtYnRuLFxcbi5hZGQtdGFzay1idG4ge1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxuICBib3JkZXI6IG5vbmU7XFxufVxcblxcbi8qICpjb250ZW50IHNlY3Rpb24gKi9cXG5tYWluIHtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIGdyaWQtYXJlYTogbWFpbjtcXG4gIHBhZGRpbmctbGVmdDogNTBweDtcXG4gIHBhZGRpbmctdG9wOiAzMHB4O1xcbiAgY29sb3I6IHZhcigtLWJsYWNrKTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXdoaXRlKTtcXG59XFxuXFxuLm1haW4tdGl0bGUge1xcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICBmb250LXNpemU6IDIuNXJlbTtcXG4gIGNvbG9yOiB2YXIoLS1ibGFjayk7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4udGFzay10aXRsZSB7XFxuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgdmFyKC0tZGFyay1wdXJwbGUpO1xcbiAgZm9udC1zaXplOiAxLjNyZW07XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLmZvcm0tcHJvamVjdC1jb250LFxcbi5mb3JtLXRhc2stY29udCB7XFxuICBwYWRkaW5nOiAyMHB4IDIwcHggODBweCAyMHB4O1xcbiAgYm94LXNoYWRvdzogMCAwIDEwcHggMCB2YXIoLS1wdXJwbGUpO1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgbGVmdDogNTAlO1xcbiAgdG9wOiA1MCU7XFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcXG4gIG9wYWNpdHk6IDE7XFxuICB6LWluZGV4OiAxO1xcbn1cXG5cXG4uaGlkZSB7XFxuICBkaXNwbGF5OiBub25lO1xcbiAgdHJhbnNpdGlvbjogb3BhY2l0eSAwLjNzIGVhc2UtaW4tb3V0O1xcbn1cXG5cXG4uZm9ybS1wcm9qZWN0LFxcbi5mb3JtLXRhc2sge1xcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgYWxpZ24taXRlbXM6IGZsZXgtZW5kO1xcbiAgZ2FwOiAyMHB4O1xcbn1cXG5cXG4uZm9ybS1hZGQge1xcbiAgcGFkZGluZzogMTBweDtcXG4gIGZvbnQtc2l6ZTogMnJlbTtcXG4gIGZvbnQtc3R5bGU6IGl0YWxpYztcXG4gIGJvcmRlci10b3A6IDFweCBzb2xpZCB2YXIoLS1kYXJrLXB1cnBsZSk7XFxuICBib3JkZXItcmlnaHQ6IDFweCBzb2xpZCB2YXIoLS1kYXJrLXB1cnBsZSk7XFxufVxcblxcbi5mb3JtLXByb2plY3QgbGFiZWwsXFxuLmZvcm0tdGFzayBsYWJlbCB7XFxuICBwYWRkaW5nOiAzcHggMHB4O1xcbn1cXG5cXG4uZm9ybS1wcm9qZWN0IGxhYmVsLFxcbi5mb3JtLXRhc2sgaW5wdXQge1xcbiAgcGFkZGluZzogNXB4IDEwcHg7XFxufVxcblxcbi5wcm9qZWN0LXN1Ym1pdC1idG4sXFxuLnRhc2stc3VibWl0LWJ0biB7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcXG4gIGJvcmRlcjogbm9uZTtcXG59XFxuXFxuLyoqIHRhc2sgY29udGVudCAgKi9cXG4udGFzay1jb250ZW50IHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBnYXA6IDEwcHg7XFxufVxcblxcbi5hZGQtdGFzay1jb250ZW50IHtcXG4gIHdpZHRoOiA5MCU7XFxuICBwYWRkaW5nOiAxMHB4O1xcbn1cXG5cXG4uYWRkLXByb2plY3QtY29udGVudCB7XFxuICB3aWR0aDogMTAwJTtcXG4gIHBhZGRpbmc6IDVweDtcXG59XFxuXFxuLmNvbnQge1xcbiAgaGVpZ2h0OiAxMDAlO1xcbn1cXG4uYmx1ci1iZyB7XFxuICBmaWx0ZXI6IGJsdXIoNXB4KTtcXG59XFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdO1xuXG4gIC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9O1xuXG4gIC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gdXBkYXRlcjtcbn1cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTtcblxuICAgIC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuICBjc3MgKz0gb2JqLmNzcztcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfVxuXG4gIC8vIEZvciBvbGQgSUVcbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgaWYgKHR5cGVvZiBkb2N1bWVudCA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHJldHVybiB7XG4gICAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZSgpIHt9LFxuICAgICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7fVxuICAgIH07XG4gIH1cbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImltcG9ydCB7XG4gIHNob3dQcm9qZWN0Rm9ybSxcbiAgc2hvd1Rhc2tGb3JtLFxuICBzaG93Qmx1ckJHLFxuICBzZWxlY3RvcnMsXG4gIHNob3dUYXNrLFxuICBzaG93VGFza0RlZmF1bHQsXG4gIHNob3dQcm9qZWN0LFxuICBzaG93UHJvamVjdERlZmF1bHQsXG59IGZyb20gXCIuL2RvbS5qc1wiO1xuaW1wb3J0IFRhc2sgZnJvbSBcIi4vdGFzay5qc1wiO1xuaW1wb3J0IFByb2plY3QgZnJvbSBcIi4vcHJvamVjdC5qc1wiO1xuXG5jb25zdCBwcm9qZWN0cyA9IFtdO1xuXG5mdW5jdGlvbiBjcmVhdGVUYXNrKCkge1xuICBjb25zdCB0YXNrID0gbmV3IFRhc2soXG4gICAgc2VsZWN0b3JzLnVzZXJUaXRsZS52YWx1ZSxcbiAgICBzZWxlY3RvcnMudXNlckRlc2MudmFsdWUsXG4gICAgc2VsZWN0b3JzLnVzZXJEdWVEYXRlLnZhbHVlLFxuICAgIHNlbGVjdG9ycy51c2VyUHJpb3JpdHkudmFsdWVcbiAgKTtcbiAgLy8gaG93IHRvIHB1dCB0YXNrIGluIGEgc2VsZWN0ZWQgcHJvamVjdD9cbiAgcHJvamVjdHNbMF0uYWRkVGFzayh0YXNrKTtcbn1cblxuZnVuY3Rpb24gY3JlYXRlVGFza0RlZmF1bHQoKSB7XG4gIGNvbnN0IHRhc2tEZWZhdWx0ID0gbmV3IFRhc2soXG4gICAgXCJsYXVuZHJ5XCIsXG4gICAgXCJ0b28gbXVjaCBjbG90aGVzISEhXCIsXG4gICAgXCI1LzEvMjNcIixcbiAgICBcImhpZ2hcIlxuICApO1xuICBwcm9qZWN0c1swXS5hZGRUYXNrKHRhc2tEZWZhdWx0KTtcbiAgc2hvd1Rhc2tEZWZhdWx0KCk7XG59XG5cbi8vIHByb2plY3Qgb2JqZWN0XG5mdW5jdGlvbiBjcmVhdGVQcm9qZWN0KCkge1xuICBjb25zdCBwcm9qZWN0ID0gbmV3IFByb2plY3Qoc2VsZWN0b3JzLnVzZXJQcm9qZWN0LnZhbHVlKTtcbiAgcHJvamVjdHMucHVzaChwcm9qZWN0KTtcbn1cblxuZnVuY3Rpb24gY3JlYXRlUHJvamVjdERlZmF1bHQoKSB7XG4gIGNvbnN0IHByb2plY3REZWZhdWx0ID0gbmV3IFByb2plY3QoXCJEZWZhdWx0IFByb2plY3RcIiwgdHJ1ZSk7XG4gIHByb2plY3RzLnB1c2gocHJvamVjdERlZmF1bHQpO1xuICBzaG93UHJvamVjdERlZmF1bHQoKTtcbn1cbi8vIFRPRE8gcHJvamVjdCBzZWxlY3Rpb25cbi8vIGZ1bmN0aW9uIHNlbGVjdFByb2plY3QoKSB7XG4vLyAgIGNvbnN0IHByb2plY3RDb250ZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5hZGQtcHJvamVjdC1jb250ZW50XCIpO1xuLy8gICBwcm9qZWN0Q29udGVudC5mb3JFYWNoKGZ1bmN0aW9uIChlbGVtZW50LCBpbmRleCkge1xuLy8gICAgIGVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uICgpIHtcbi8vICAgICAgIHByb2plY3RzW2luZGV4XS5hY3RpdmUgPSB0cnVlO1xuLy8gICAgICAgY29uc29sZS5sb2cocHJvamVjdHMpO1xuLy8gICAgIH0pO1xuLy8gICAgIGNvbnNvbGUubG9nKHByb2plY3RzKTtcbi8vICAgfSk7XG4vLyB9XG5cbmZ1bmN0aW9uIHByb2plY3RCdG5TdWJtaXQoKSB7XG4gIHNlbGVjdG9ycy5hZGRQcm9qZWN0QnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZSkgPT4ge1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICBzaG93UHJvamVjdCgpO1xuICAgIGNyZWF0ZVByb2plY3QoKTtcbiAgICBzaG93UHJvamVjdEZvcm0oKTtcbiAgICBzaG93Qmx1ckJHKCk7XG4gICAgY29uc29sZS5sb2cocHJvamVjdHMpO1xuICAgIHNlbGVjdG9ycy5wcm9qZWN0Rm9ybS5yZXNldCgpO1xuICAgIC8vIHNlbGVjdFByb2plY3QoKTtcbiAgfSk7XG59XG5cbmZ1bmN0aW9uIHByb2plY3RCdG5MaXN0ZW5lcigpIHtcbiAgY29uc3QgcHJvamVjdEJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucHJvamVjdC1idG5cIik7XG4gIHByb2plY3RCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChlKSA9PiB7XG4gICAgc2hvd1Byb2plY3RGb3JtKCk7XG4gICAgc2hvd0JsdXJCRygpO1xuICB9KTtcbn1cblxuZnVuY3Rpb24gdGFza0J0blN1Ym1pdCgpIHtcbiAgc2VsZWN0b3JzLmFkZFRhc2tCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChlKSA9PiB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIHNob3dUYXNrKCk7XG4gICAgY3JlYXRlVGFzaygpO1xuICAgIHNob3dUYXNrRm9ybSgpO1xuICAgIHNob3dCbHVyQkcoKTtcbiAgICBzZWxlY3RvcnMudGFza0Zvcm0ucmVzZXQoKTtcbiAgICBjb25zb2xlLmxvZyhwcm9qZWN0cyk7XG4gIH0pO1xufVxuXG5mdW5jdGlvbiB0YXNrQnRuTGlzdGVuZXIoKSB7XG4gIGNvbnN0IHRhc2tCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnRhc2stYnRuXCIpO1xuICB0YXNrQnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZSkgPT4ge1xuICAgIHNob3dUYXNrRm9ybSgpO1xuICAgIHNob3dCbHVyQkcoKTtcbiAgfSk7XG59XG5cbnNlbGVjdG9ycy50YXNrQ29udGVudC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpID0+IHtcbiAgZS50YXJnZXQuY2xhc3NMaXN0LnRvZ2dsZShcImNoZWNrZWRcIik7XG59KTtcblxuc2VsZWN0b3JzLm5hdlByb2plY3QuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChlKSA9PiB7XG4gIHNlbGVjdG9ycy5tYWluVGl0bGUudGV4dENvbnRlbnQgPSBlLnRhcmdldC50ZXh0Q29udGVudDtcbn0pO1xuXG5mdW5jdGlvbiBsaXN0ZW5lcnMoKSB7XG4gIC8vIHNlbGVjdFByb2plY3QoKTtcbiAgcHJvamVjdEJ0bkxpc3RlbmVyKCk7XG4gIHByb2plY3RCdG5TdWJtaXQoKTtcbiAgdGFza0J0bkxpc3RlbmVyKCk7XG4gIHRhc2tCdG5TdWJtaXQoKTtcbn1cbi8vKiBwcm9ncmFtIGZsb3dcbmZ1bmN0aW9uIHJlbmRlcigpIHtcbiAgY3JlYXRlUHJvamVjdERlZmF1bHQoKTtcbiAgY3JlYXRlVGFza0RlZmF1bHQoKTtcbiAgbGlzdGVuZXJzKCk7XG59XG5cbmV4cG9ydCB7IHJlbmRlciB9O1xuIiwiZnVuY3Rpb24gc2hvd1Byb2plY3RGb3JtKCkge1xuICBjb25zdCBmb3JtUHJvamVjdENvbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmZvcm0tcHJvamVjdC1jb250XCIpO1xuICBmb3JtUHJvamVjdENvbnQuY2xhc3NMaXN0LnRvZ2dsZShcImhpZGVcIik7XG59XG5cbmZ1bmN0aW9uIHNob3dUYXNrRm9ybSgpIHtcbiAgY29uc3QgZm9ybVRhc2tDb250ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5mb3JtLXRhc2stY29udFwiKTtcbiAgZm9ybVRhc2tDb250LmNsYXNzTGlzdC50b2dnbGUoXCJoaWRlXCIpO1xufVxuXG5mdW5jdGlvbiBzaG93Qmx1ckJHKCkge1xuICBzZWxlY3RvcnMuY29udC5jbGFzc0xpc3QudG9nZ2xlKFwiYmx1ci1iZ1wiKTtcbn1cblxuZnVuY3Rpb24gc2hvd1Byb2plY3QoKSB7XG4gIGNvbnN0IG5hdlByb2ogPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm5hdi1wcm9qZWN0c1wiKTtcbiAgY29uc3QgcHJvamVjdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsaVwiKTtcbiAgcHJvamVjdC5jbGFzc0xpc3QuYWRkKFwiYWRkLXByb2plY3QtY29udGVudFwiKTtcbiAgcHJvamVjdC50ZXh0Q29udGVudCA9IHNlbGVjdG9ycy51c2VyUHJvamVjdC52YWx1ZTtcbiAgc2VsZWN0b3JzLm1haW5UaXRsZS50ZXh0Q29udGVudCA9IGBEZWZhdWx0IFByb2plY3RgO1xuICBuYXZQcm9qLmFwcGVuZENoaWxkKHByb2plY3QpO1xufVxuXG5mdW5jdGlvbiBzaG93UHJvamVjdERlZmF1bHQoKSB7XG4gIGNvbnN0IG5hdlByb2ogPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm5hdi1wcm9qZWN0c1wiKTtcbiAgY29uc3QgcHJvamVjdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsaVwiKTtcbiAgcHJvamVjdC5jbGFzc0xpc3QuYWRkKFwiYWRkLXByb2plY3QtY29udGVudFwiKTtcbiAgcHJvamVjdC50ZXh0Q29udGVudCA9IFwiRGVmYXVsdCBQcm9qZWN0XCI7XG4gIHNlbGVjdG9ycy5tYWluVGl0bGUudGV4dENvbnRlbnQgPSBgRGVmYXVsdCBQcm9qZWN0YDtcbiAgbmF2UHJvai5hcHBlbmRDaGlsZChwcm9qZWN0KTtcbn1cblxuZnVuY3Rpb24gc2hvd1Rhc2soKSB7XG4gIGNvbnN0IHRhc2sgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGlcIik7XG4gIHRhc2suY2xhc3NMaXN0LmFkZChcImFkZC10YXNrLWNvbnRlbnRcIik7XG4gIHRhc2sudGV4dENvbnRlbnQgPSBzZWxlY3RvcnMudXNlclRpdGxlLnZhbHVlO1xuICB0YXNrLnRleHRDb250ZW50ICs9IHNlbGVjdG9ycy51c2VyRGVzYy52YWx1ZTtcbiAgdGFzay50ZXh0Q29udGVudCArPSBzZWxlY3RvcnMudXNlckR1ZURhdGUudmFsdWU7XG4gIHRhc2sudGV4dENvbnRlbnQgKz0gc2VsZWN0b3JzLnVzZXJQcmlvcml0eS52YWx1ZTtcbiAgc2VsZWN0b3JzLnRhc2tDb250ZW50LmFwcGVuZENoaWxkKHRhc2spO1xufVxuXG5mdW5jdGlvbiBzaG93VGFza0RlZmF1bHQoKSB7XG4gIGNvbnN0IHRhc2sgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGlcIik7XG4gIHRhc2suY2xhc3NMaXN0LmFkZChcImFkZC10YXNrLWNvbnRlbnRcIik7XG4gIHRhc2sudGV4dENvbnRlbnQgPSBcImxhdW5kcnlcIjtcbiAgdGFzay50ZXh0Q29udGVudCArPSBcInRvbyBtdWNoIGNsb3RoZXNcIjtcbiAgdGFzay50ZXh0Q29udGVudCArPSBcIjUvMS8yM1wiO1xuICB0YXNrLnRleHRDb250ZW50ICs9IFwiaGlnaFwiO1xuICBzZWxlY3RvcnMudGFza0NvbnRlbnQuYXBwZW5kQ2hpbGQodGFzayk7XG59XG5cbi8vIHRhc2tDb250YWluZXJMaXN0ZW5lclxuXG5jb25zdCBzZWxlY3RvcnMgPSB7XG4gIG5hdlByb2plY3Q6IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubmF2LXByb2plY3RzXCIpLFxuICB0YXNrQ29udGVudDogZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi50YXNrLWNvbnRlbnRcIiksXG4gIG1haW5UaXRsZTogZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5tYWluLXRpdGxlXCIpLFxuICB1c2VyUHJvamVjdDogZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNwcm9qZWN0XCIpLFxuICB1c2VyVGl0bGU6IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjdGl0bGVcIiksXG4gIHVzZXJEZXNjOiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2Rlc2NcIiksXG4gIHVzZXJEdWVEYXRlOiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2R1ZS1kYXRlXCIpLFxuICB1c2VyUHJpb3JpdHk6IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjcHJpb3JpdHlcIiksXG4gIGFkZFRhc2tCdG46IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuYWRkLXRhc2stYnRuXCIpLFxuICBhZGRQcm9qZWN0QnRuOiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmFkZC1wcm9qZWN0LWJ0blwiKSxcbiAgdGFza0Zvcm06IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuZm9ybS10YXNrXCIpLFxuICBwcm9qZWN0Rm9ybTogZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5mb3JtLXByb2plY3RcIiksXG4gIGNvbnQ6IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuY29udFwiKSxcbiAgYmx1ckJHOiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmJsdXItYmdcIiksXG59O1xuXG5leHBvcnQge1xuICBzaG93UHJvamVjdEZvcm0sXG4gIHNob3dUYXNrRm9ybSxcbiAgc2hvd0JsdXJCRyxcbiAgc2VsZWN0b3JzLFxuICBzaG93VGFzayxcbiAgc2hvd1Rhc2tEZWZhdWx0LFxuICBzaG93UHJvamVjdCxcbiAgc2hvd1Byb2plY3REZWZhdWx0LFxufTtcbiIsImNsYXNzIFByb2plY3Qge1xuICBjb25zdHJ1Y3RvcihuYW1lKSB7XG4gICAgdGhpcy5uYW1lID0gbmFtZTtcbiAgICB0aGlzLnRhc2tzID0gW107XG4gICAgdGhpcy5hY3RpdmUgPSBmYWxzZTtcbiAgfVxuXG4gIGFkZFRhc2sodGFzaykge1xuICAgIHRoaXMudGFza3MucHVzaCh0YXNrKTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBQcm9qZWN0O1xuIiwiaW1wb3J0IHsgUHJvamVjdCB9IGZyb20gXCIuL3Byb2plY3RcIjtcblxuY2xhc3MgVGFzayB7XG4gIGNvbnN0cnVjdG9yKHRpdGxlLCBkZXNjcmlwdGlvbiwgZHVlRGF0ZSwgcHJpb3JpdHkpIHtcbiAgICB0aGlzLnRpdGxlID0gdGl0bGU7XG4gICAgdGhpcy5kZXNjcmlwdGlvbiA9IGRlc2NyaXB0aW9uO1xuICAgIHRoaXMuZHVlRGF0ZSA9IGR1ZURhdGU7XG4gICAgdGhpcy5wcmlvcml0eSA9IHByaW9yaXR5O1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFRhc2s7XG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5uYyA9IHVuZGVmaW5lZDsiLCJpbXBvcnQgXCIuLi9jc3Mvc3R5bGUuY3NzXCI7XG5pbXBvcnQgeyByZW5kZXIgfSBmcm9tIFwiLi9jb250cm9sbGVyLmpzXCI7XG5cbnJlbmRlcigpO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9