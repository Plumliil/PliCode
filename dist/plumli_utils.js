/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["pliUtils"] = factory();
	else
		root["pliUtils"] = factory();
})(self, function() {
return /******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/array/array.js":
/*!****************************!*\
  !*** ./src/array/array.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"PliArr\": () => (/* binding */ PliArr)\n/* harmony export */ });\n// 数组操作\r\nclass PliArr {\r\n    constructor(arr) {\r\n        this.arr = arr;\r\n    }\r\n    // 获取最大值\r\n    getMax() {\r\n        return Math.max.apply(null, this.arr);\r\n    }\r\n    // 获取最小值\r\n    getMin() {\r\n        return Math.min.apply(null, this.arr);\r\n    }\r\n    // 求和 传入的key为求和属性\r\n    getSum(key) {\r\n        if (key) return this.arr.reduce((t, l) => {\r\n            return t + l[key]\r\n        }, 0)\r\n        return this.arr.reduce((t, l) => {\r\n            return t + l\r\n        }, 0)\r\n    }\r\n\r\n    // 排序 key 为排序的属性 无排序属性传入 '' order为排序方式 1为正序，-1为倒叙 默认正序\r\n    getSort(key, order = 1) {\r\n        if (key) return this.arr.sort((a, b) => {\r\n            return (a[key] - b[key]) * order\r\n        })\r\n        return this.arr.sort((a, b) => {\r\n            return (a - b) * order\r\n        })\r\n    }\r\n\r\n    // 数组扁平化\r\n    flattening() {\r\n        const flat = arr => {\r\n            let newArr = []\r\n            for (let i = 0; i < arr.length; i++) {\r\n                if (Array.isArray(arr[i])) {\r\n                    newArr = newArr.concat(flat(arr[i]))\r\n                } else {\r\n                    newArr.push(arr[i])\r\n                }\r\n            }\r\n            return newArr\r\n        }\r\n        return flat(this.arr)\r\n    }\r\n}\r\n\r\n\n\n//# sourceURL=webpack://pliUtils/./src/array/array.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"pliCall\": () => (/* reexport safe */ _methods_methods__WEBPACK_IMPORTED_MODULE_0__.pliCall),\n/* harmony export */   \"pliApply\": () => (/* reexport safe */ _methods_methods__WEBPACK_IMPORTED_MODULE_0__.pliApply),\n/* harmony export */   \"pliBind\": () => (/* reexport safe */ _methods_methods__WEBPACK_IMPORTED_MODULE_0__.pliBind),\n/* harmony export */   \"pliCopy\": () => (/* reexport safe */ _methods_methods__WEBPACK_IMPORTED_MODULE_0__.pliCopy),\n/* harmony export */   \"pliNowTime\": () => (/* reexport safe */ _tools_tools__WEBPACK_IMPORTED_MODULE_1__.pliNowTime),\n/* harmony export */   \"pliColorRdm\": () => (/* reexport safe */ _tools_tools__WEBPACK_IMPORTED_MODULE_1__.pliColorRdm),\n/* harmony export */   \"pliCreateRdm\": () => (/* reexport safe */ _tools_tools__WEBPACK_IMPORTED_MODULE_1__.pliCreateRdm),\n/* harmony export */   \"pliFilType\": () => (/* reexport safe */ _tools_tools__WEBPACK_IMPORTED_MODULE_1__.pliFilType),\n/* harmony export */   \"pliRgb_Hex\": () => (/* reexport safe */ _tools_tools__WEBPACK_IMPORTED_MODULE_1__.pliRgb_Hex),\n/* harmony export */   \"pliSleep\": () => (/* reexport safe */ _tools_tools__WEBPACK_IMPORTED_MODULE_1__.pliSleep),\n/* harmony export */   \"PliArr\": () => (/* reexport safe */ _array_array__WEBPACK_IMPORTED_MODULE_2__.PliArr),\n/* harmony export */   \"into\": () => (/* binding */ into)\n/* harmony export */ });\n/* harmony import */ var _methods_methods__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./methods/methods */ \"./src/methods/methods.js\");\n/* harmony import */ var _tools_tools__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./tools/tools */ \"./src/tools/tools.js\");\n/* harmony import */ var _array_array__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./array/array */ \"./src/array/array.js\");\nfunction into() {\r\n    console.log(\"%cHello,%cPlumli\", \"color:red;\", \"color:red;\");\r\n}\r\n\r\n\r\n\r\n\r\n\n\n//# sourceURL=webpack://pliUtils/./src/index.js?");

/***/ }),

/***/ "./src/methods/methods.js":
/*!********************************!*\
  !*** ./src/methods/methods.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"pliCall\": () => (/* binding */ pliCall),\n/* harmony export */   \"pliApply\": () => (/* binding */ pliApply),\n/* harmony export */   \"pliBind\": () => (/* binding */ pliBind),\n/* harmony export */   \"pliCopy\": () => (/* binding */ pliCopy)\n/* harmony export */ });\n// 改变函数this的指向来执行函数\r\n// call函数封装\r\nfunction pliCall(fn, obj, ...args) {\r\n    if (obj === undefined || obj === null) {\r\n        obj = globalThis\r\n    }\r\n    obj.temp = fn\r\n    let result = obj.temp(...args)\r\n    delete obj.temp\r\n    return result\r\n}\r\n// apply函数\r\nfunction pliApply(fn,obj,args){\r\n    if(obj===undefined||obj===null){\r\n        obj=globalThis\r\n    }\r\n    obj.temp=fn;\r\n    let result=obj.temp(...args)\r\n    delete obj.temp\r\n    return result\r\n}\r\n// bind函数\r\nfunction pliBind(fn,obj,...args){\r\n    return function(...args2){\r\n        if(obj===undefined||obj===null){\r\n            obj=globalThis\r\n        }\r\n        obj.temp=fn;\r\n        let result=obj.temp(...args,...args2)\r\n        delete obj.temp;\r\n        return result\r\n    }\r\n}\r\n// 深拷贝\r\nfunction pliCopy(obj) {\r\n    let res = obj instanceof Array ? [] : {}\r\n    for (const [k, v] of Object.entries(obj)) {\r\n        res[k] = typeof v === 'object' ? PliCopy(v) : v\r\n    }\r\n    return res\r\n}\r\n\r\n\n\n//# sourceURL=webpack://pliUtils/./src/methods/methods.js?");

/***/ }),

/***/ "./src/tools/tools.js":
/*!****************************!*\
  !*** ./src/tools/tools.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"pliNowTime\": () => (/* binding */ pliNowTime),\n/* harmony export */   \"pliColorRdm\": () => (/* binding */ pliColorRdm),\n/* harmony export */   \"pliCreateRdm\": () => (/* binding */ pliCreateRdm),\n/* harmony export */   \"pliFilType\": () => (/* binding */ pliFilType),\n/* harmony export */   \"pliRgb_Hex\": () => (/* binding */ pliRgb_Hex),\n/* harmony export */   \"pliSleep\": () => (/* binding */ pliSleep)\n/* harmony export */ });\n// 获取当前时间\r\nfunction pliNowTime(type) {\r\n    let time = new Date();\r\n    let yyyy = time.getFullYear();\r\n    let mm = time.getMonth() < 10 ? `0${time.getMonth()}` : time.getMonth();\r\n    let dd = time.getDay() < 10 ? `0${time.getDay()}` : time.getDay();\r\n    let h = time.getHours() < 10 ? `0${time.getHours()}` : time.getHours();\r\n    let m = time.getMinutes();\r\n    let s = time.getSeconds() < 10 ? `0${time.getSeconds()}` : time.getSeconds();\r\n    switch (type) {\r\n        case 'dd/mm/yyyy':\r\n            return `${dd}/${mm}/${yy}`\r\n        case 'mm/dd/yyyy':\r\n            return `${mm}/${dd}/${yyyy}`\r\n        case 'mm dd/yyyy':\r\n            return `${mm} ${dd}/${yyyy}`\r\n        case 'yyyy.mm.dd':\r\n            return `${yyyy}.${mm}.${dd}`\r\n        case 'yyyy/mm/dd':\r\n            return `${yyyy}/${mm}/${dd}`\r\n        case 'yyyy-mm-dd':\r\n            return `${yyyy}-${mm}-${dd}`\r\n        case 'dd/mm/yyyy h:m:s':\r\n            return `${dd}/${mm}/${yy} ${h}:${m}:${s}`\r\n        case 'dd/mm/yyyy h:m':\r\n            return `${dd}/${mm}/${yy} ${h}:${m}`\r\n        case 'mm/dd/yyyy h:m:s':\r\n            return `${mm}/${dd}/${yyyy} ${h}:${m}:${s}`\r\n        case 'mm/dd/yyyy h:m':\r\n            return `${mm}/${dd}/${yyyy} ${h}:${m}`\r\n        case 'mm dd/yyyy h:m:s':\r\n            return `${mm} ${dd}/${yyyy} ${h}:${m}:${s}`\r\n        case 'mm dd/yyyy h:m':\r\n            return `${mm} ${dd}/${yyyy} ${h}:${m}`\r\n        case 'yyyy.mm.dd h:m:s':\r\n            return `${yyyy}.${mm}.${dd} ${h}:${m}:${s}`\r\n        case 'yyyy.mm.dd h:m':\r\n            return `${yyyy}.${mm}.${dd} ${h}:${m}`\r\n        case 'yyyy/mm/dd h:m:s':\r\n            return `${yyyy}/${mm}/${dd} ${h}:${m}:${s}`\r\n        case 'yyyy/mm/dd h:m':\r\n            return `${yyyy}/${mm}/${dd} ${h}:${m}`\r\n        case 'yyyy-mm-dd h:m:s':\r\n            return `${yyyy}-${mm}-${dd} ${h}:${m}:${s}`\r\n        case 'yyyy-mm-dd h:m':\r\n            return `${yyyy}-${mm}-${dd} ${h}:${m}`\r\n        case 'h:m:s':\r\n            return `${h}:${m}:${s}`\r\n        case 'h:m':\r\n            return `${h}:${m}`\r\n        default:\r\n            return `${yyyy}-${mm}-${dd} ${h}:${m}:${s}`\r\n    }\r\n}\r\n// 随机数生成\r\nfunction pliCreateRdm(min = 0, max = 100, Integer = 1) {\r\n    if (Integer === -1) return parseFloat((Math.random() * (max - min) + min).toFixed(2))\r\n    min = Math.ceil(min);\r\n    max = Math.floor(max)\r\n    return Math.floor(Math.random() * (max - min + 1) + min)\r\n}\r\n// 随机颜色生成 参数type 默认rgb 可选hex\r\nfunction pliColorRdm(type = 'rgb') {\r\n    let min = 0;\r\n    let max = 255;\r\n    let r = Math.floor(Math.random() * (max - min) + min);\r\n    let g = Math.floor(Math.random() * (max - min) + min);\r\n    let b = Math.floor(Math.random() * (max - min) + min);\r\n    if (type === 'hex') return pliRgb_Hex(`(${r},${g},${b})`, 'hex');\r\n    return `(${r},${g},${b})`\r\n}\r\n// 颜色转换 参数rgb 格式限定(r,g,b) 或 r,g,b\r\nfunction pliRgb_Hex(data, type) {\r\n    const reg = type === 'hex' ? /^\\((\\d{1,3}),(\\d{1,3}),(\\d{1,3})\\)$/ : /^#(\\w{2})(\\w{2})(\\w{2})$/;\r\n    let arr = reg.exec(data);\r\n    if (!arr) return new Error('请检查参数传入是否正确')\r\n\r\n    function toHex(x) {\r\n        return (\"0\" + parseInt(x).toString(16)).slice(-2);\r\n    }\r\n\r\n    function toRgb(x) {\r\n        return parseInt(x, 16);\r\n    }\r\n    // swich case\r\n    const result = {\r\n        hex: (\"#\" + toHex(arr[1]) + toHex(arr[2]) + toHex(arr[3])).toUpperCase(),\r\n        rgb: `(${toRgb(arr[1])},${toRgb(arr[2])},${toRgb(arr[3])})`\r\n    };\r\n    return result[type] ?\r\n        result[type] :\r\n        new Error(`${type} 格式出错 请输入正确格式`)\r\n}\r\n// 文件批量分类\r\n// 按后缀分类\r\n// 用于后端获取图片，视频，音频链接后的分类\r\nfunction pliFilType(file) {\r\n    const videoReg = /[\\w\\/\\.]*?\\.(AVI|FLV|F4V|FLC|MP4|MKV|M4V|WMV|WEBM)$/gi;\r\n    const audioReg = /[\\w\\/\\.]*?\\.(APE|AU|MP3|MID|MOD|OGG|WMA)$/gi;\r\n    const wordReg = /[\\w\\/\\.]*?\\.(TXT|DOC|WPS|DOCX|XLS|XLSX|PDF)$/gi;\r\n    const photoReg = /[\\w\\/\\.]*?\\.(GIF|JPG|PNG|PSD|BMP|JPEG|PSD|jpeg)/gi;\r\n    const compressedReg = /[\\w\\/\\.]*?\\.(RAR|ZIP|7Z)$/gi;\r\n    let flag = true;\r\n    let files = {\r\n        video: [],\r\n        audio: [],\r\n        word: [],\r\n        photo: [],\r\n        compressed: [],\r\n        other: []\r\n    }\r\n\r\n    for (let i = 0; i < file.length; i++) {\r\n        if (audioReg.test(file[i])) {\r\n            files['audio'].push(file[i])\r\n        } else if (videoReg.test(file[i])) {\r\n            files['video'].push(file[i])\r\n        } else if (wordReg.test(file[i])) {\r\n            files['word'].push(file[i])\r\n        } else if (photoReg.test(file[i])) {\r\n            files['photo'].push(file[i])\r\n        } else if (compressedReg.test(file[i])) {\r\n            files['compressed'].push(file[i])\r\n        } else {\r\n            files['other'].push(file[i])\r\n        }\r\n    }\r\n    return files\r\n}\r\n// Promise封装sleep函数 返回一个Promise对象\r\nfunction pliSleep(delay = 1000) {\r\n    return new Promise(resolve => {\r\n        setTimeout(() => resolve(), delay);\r\n    })\r\n}\r\n\n\n//# sourceURL=webpack://pliUtils/./src/tools/tools.js?");

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
/******/ 	return __webpack_exports__;
/******/ })()
;
});