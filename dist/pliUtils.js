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
/******/ 	var __webpack_modules__ = ({

/***/ "./src/array/array.js":
/*!****************************!*\
  !*** ./src/array/array.js ***!
  \****************************/
/***/ ((module) => {

"use strict";
eval("/*\r\n * params(array) 数组\r\n * params(callback) 回调函数\r\n */\r\n\r\n\r\n\r\n// pliMap() 方法创建一个新数组，其结果是该数组中的每个元素都调用一个提供的函数后返回的结果。 返回新数组\r\nfunction pliMap(array, callback) {\r\n    let result = [];\r\n    for (let i = 0; i < array.length; i++) {\r\n        result.push(callback(arr[i], i, array))\r\n    }\r\n    return result;\r\n}\r\n\r\n// pliReduce() 方法对数组中的每个元素执行一个由您提供的reducer函数(升序执行)，将其结果汇总为单个返回值。\r\n// 函数累计处理的结果\r\nfunction pliReduce(array, callback, init) {\r\n    if (init === undefined) init = array[0];\r\n    let result = init;\r\n    for (let i = 0; i < array.length; i++) {\r\n        result = callback(result, array[i], i, array)\r\n    }\r\n    return result;\r\n}\r\n\r\n// pliFilter(array, callback) 方法创建一个新数组, 其包含通过所提供函数实现的测试的所有元素。 \r\n// 一个新的、由通过测试的元素组成的数组，如果没有任何数组元素通过测试，则返回空数组。\r\nfunction pliFilter(array, callback) {\r\n    let result = [];\r\n    for (let i = 0; i < array.length; i++) {\r\n        if (callback(array[i], i, array)) {\r\n            result.push(array[i])\r\n        }\r\n    }\r\n    return result\r\n}\r\n\r\n// pliFind(array,callback) 方法返回数组中满足提供的测试函数的第一个元素的值。否则返回 undefined。\r\nfunction pliFind(array, callback) {\r\n    let result = null;\r\n    for (let i = 0; i < array.length; i++) {\r\n        if (callback(array[i], i, array)) {\r\n            return result = array[i]\r\n        }\r\n    }\r\n    return undefined;\r\n}\r\n\r\n// pliFind(array,callback) 方法返回数组中满足提供的测试函数的第一个元素的索引。否则返回 -1。\r\nfunction pliFindIndex(array, callback) {\r\n    let result = null;\r\n    for (let i = 0; i < array.length; i++) {\r\n        if (callback(array[i], i, array)) {\r\n            return result = i\r\n        }\r\n    }\r\n    return -1;\r\n}\r\n\r\n// pliEvery() 方法测试一个数组内的所有元素是否都能通过某个指定函数的测试。它返回一个布尔值。\r\n// 注意：若收到一个空数组，此方法在一切情况下都会返回 true。\r\nfunction pliEvery(array, callback) {\r\n    if (array === []) return true;\r\n    for (let i = 0; i < array.length; i++) {\r\n        if (!callback(array[i], i, array)) {\r\n            return false;\r\n        }\r\n    }\r\n    return true;\r\n}\r\n\r\n// pliSome() 方法测试数组中是不是至少有1个元素通过了被提供的函数测试。它返回的是一个Boolean类型的值。\r\n// 注意：如果用一个空数组进行测试，在任何情况下它返回的都是false。\r\nfunction pliSome(array, callbcak) {\r\n    if (array === []) return false;\r\n    for (let i = 0; i < array.length; i++) {\r\n        if (callbcak(array[i], i, array)) {\r\n            return true;\r\n        }\r\n    }\r\n    return false;\r\n}\r\n\r\n// pliUnique(array) 数组去重，返回新数组\r\nfunction pliUnique2(array) {\r\n    let result = [];\r\n    for (let i = 0; i < array.length; i++) {\r\n        if (array.indexOf(array[i]) === i) {\r\n            result.push(array[i])\r\n        }\r\n    }\r\n    return result;\r\n}\r\n\r\nfunction pliUnique(array) {\r\n    let result = [];\r\n    let obj = {};\r\n    for (let i = 0; i < array.length; i++) {\r\n        if (obj[array[i]] === undefined) {\r\n            obj[array[i]] = true;\r\n            result.push(array[i])\r\n        }\r\n    }\r\n    return result;\r\n}\r\n\r\nfunction pliUnique3(array) {\r\n    return [...new Set(array)]\r\n}\r\n\r\n// pliConcat(array1,array2,...) 方法用于合并两个或多个数组。此方法不会更改现有数组，而是返回一个新数组。\r\nfunction pliConcat(array, ...args) {\r\n    let result = [...array];\r\n    for (let i = 0; i < args.length; i++) {\r\n        if (Array.isArray(args[i])) {\r\n            result.push(...args[i])\r\n        } else {\r\n            result.push(args[i])\r\n        }\r\n    }\r\n    return result;\r\n}\r\n\r\n// pliSlice(array) 方法返回一个新的数组对象，这一对象是一个由 begin 和 end 决定的原数组的浅拷贝（包括 begin，不包括end）。原始数组不会被改变。\r\nfunction pliSlice(array, begin, end) {\r\n    if (array === []) return [];\r\n    begin = begin || 0;\r\n    if (begin >= array.length) {\r\n        return []\r\n    }\r\n    end = end || array.length\r\n    if (end < begin || end > array.length) {\r\n        end = array.length\r\n    }\r\n    let result = [];\r\n    for (let i = 0; i < array.length; i++) {\r\n        if (i >= begin && i <= end) {\r\n            result.push(array[i])\r\n        }\r\n    }\r\n    return result;\r\n}\r\n\r\n// pliFlat(array) 数组扁平化 返回一个新数组\r\nfunction pliFlat(array) {\r\n    if (array === []) return [];\r\n    let result = [];\r\n    for (let i = 0; i < array.length; i++) {\r\n        if (Array.isArray(array[i])) {\r\n            result = pliConcat(result, pliFlat(array[i]));\r\n        } else {\r\n            result.push(array[i])\r\n        }\r\n    }\r\n    return result;\r\n}\r\n\r\nfunction pliFlat2(array) {\r\n    if (array === []) return [];\r\n    let result = [...array];\r\n    while (result.some(i => Array.isArray(i))) {\r\n        result = pliConcat([], ...result)\r\n    }\r\n    return result;\r\n}\r\n\r\n// pliChunk(array, size) 数组分块 size为分开后每个数组内元素个数 默认为 1 \r\nfunction pliChunk(array, size = 1) {\r\n    let result = [];\r\n    let temp = [];\r\n    for (let i = 0; i < array.length; i++) {\r\n        if (temp.length === 0) {\r\n            result.push(temp)\r\n        }\r\n        temp.push(array[i])\r\n        if (temp.length === size) {\r\n            temp = []\r\n        }\r\n    }\r\n    return result;\r\n}\r\n\r\n// 获取数组差异 pliDifference(arr,arr2) 得到当前数组中所有不在arr2中的元素组成的个数组(不改变原数组)\r\n// pliDifference([1,3,5,7],[5,8]) ===> [1,3,7]\r\nfunction pliDifference(array, array2) {\r\n    let result = [];\r\n    for (let i = 0; i < array.length; i++) {\r\n        if (!array2.includes(array[i])) {\r\n            result.push(array[i])\r\n        }\r\n    }\r\n    return result;\r\n}\r\n\r\n// pliPull(array,values) 删除数组中部分元素 返回删除的元素 原数组改变\r\n// pliPullAll(array,[value]) 删除数组中部分元素,参数变为数组 原数组改变\r\n// 删除原数组中与value相同的元素 \r\nfunction pliPull(array, ...args) {\r\n    let result = [];\r\n    for (let i = 0; i < array.length; i++) {\r\n        if (!args.includes(array[i])) {\r\n            result.push(array[i])\r\n        }\r\n    }\r\n    return result;\r\n}\r\n\r\nfunction pliPullAll(array, args) {\r\n    let result = [];\r\n    for (let i = 0; i < array.length; i++) {\r\n        if (!args.includes(array[i])) {\r\n            result.push(array[i])\r\n        }\r\n    }\r\n    return result;\r\n}\r\n\r\n// pliDrop(array,count,lr)获取数组中部分元素 不改变当前数组 count默认是 1 lr默认为 1 左边 \r\n// 得到左边count个元素或者右边count个元素\r\n// 得到当前数组过滤掉左边count个后剩余元素组成的数组 \r\n// pliDrop([1,3,5,7],2)===>[5,7]\r\nfunction pliDrop(array, count, lr) {\r\n    let result = [];\r\n    for (let i = 0; i < array.length; i++) {\r\n        if (lr === -1) {\r\n            if (i > array.length - count - 1) {\r\n                result.push(array[i])\r\n            }\r\n        } else {\r\n            if (i < count) {\r\n                result.push(array[i])\r\n            }\r\n        }\r\n    }\r\n    return result;\r\n}\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\nmodule.exports = {\r\n    pliChunk, // 数组分块\r\n    pliConcat,\r\n    pliDifference, // 获取两个数组间差异\r\n    pliDrop, // 向左(右)获取count元素\r\n    pliEvery,\r\n    pliFilter,\r\n    pliFind,\r\n    pliFindIndex,\r\n    pliFlat,\r\n    pliMap,\r\n    pliPull, // 删除数组中部分元素 参数为Number\r\n    pliPullAll, // 删除数组中部分元素 参数为Array\r\n    pliReduce, //数组切片\r\n    pliSlice,\r\n    pliSome,\r\n    pliUnique\r\n\r\n}\n\n//# sourceURL=webpack://pliUtils/./src/array/array.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("function intro() {\r\n    console.log(\"%cHello,%cPlumli!\", \"color:red;\", \"color:red;\");\r\n}\r\n// export {\r\n//     pliCall,\r\n//     pliApply,\r\n//     pliBind,\r\n//     pliCopy,\r\n//     PliThrottle,\r\n//     PliDebounce\r\n// }\r\n// from './methods/methods';\r\n// export {\r\n//     pliNowTime,\r\n//     pliColorRdm,\r\n//     pliCreateRdm,\r\n//     pliFilType,\r\n//     pliRgb_Hex,\r\n//     pliSleep\r\n// }\r\n// from './tools/tools';\r\n// export {\r\n//     PliArr\r\n// }\r\n// from './array/array';\r\n\r\n// export {\r\n//     intro\r\n// }\r\n// const PliUtils={\r\n//     PliArray:require('./array/array'),\r\n//     PliMethods:require('./methods/methods'),\r\n//     PliTools:require('./tools/tools'),\r\n//     intro\r\n// }\r\nconst {\r\n    PliArr\r\n} = __webpack_require__(/*! ./array/array */ \"./src/array/array.js\");\r\nconst {\r\n    pliCall,\r\n    pliApply,\r\n    pliBind,\r\n    pliCopy,\r\n    pliThrottle,\r\n    pliDebounce\r\n} = __webpack_require__(/*! ./methods/methods */ \"./src/methods/methods.js\");\r\nconst {\r\n    pliNowTime,\r\n    pliColorRdm,\r\n    pliCreateRdm,\r\n    pliFilType,\r\n    pliRgb_Hex,\r\n    pliSleep\r\n} = __webpack_require__(/*! ./tools/tools */ \"./src/tools/tools.js\");\r\n\r\nconst PliUtils = {\r\n    // methods\r\n    pliCall,\r\n    pliApply,\r\n    pliBind,\r\n    pliCopy,\r\n    pliThrottle,\r\n    pliDebounce,\r\n    // tools\r\n    pliNowTime,\r\n    pliColorRdm,\r\n    pliCreateRdm,\r\n    pliFilType,\r\n    pliRgb_Hex,\r\n    pliSleep,\r\n    // intro\r\n    intro\r\n}\r\nmodule.exports = PliUtils;\n\n//# sourceURL=webpack://pliUtils/./src/index.js?");

/***/ }),

/***/ "./src/methods/methods.js":
/*!********************************!*\
  !*** ./src/methods/methods.js ***!
  \********************************/
/***/ ((module) => {

eval("// 改变函数this的指向来执行函数\r\n// call函数封装\r\nfunction pliCall(fn, obj, ...args) {\r\n    if (obj === undefined || obj === null) {\r\n        obj = globalThis\r\n    }\r\n    obj.temp = fn\r\n    let result = obj.temp(...args)\r\n    delete obj.temp\r\n    return result\r\n}\r\n// apply函数\r\nfunction pliApply(fn, obj, args) {\r\n    if (obj === undefined || obj === null) {\r\n        obj = globalThis\r\n    }\r\n    obj.temp = fn;\r\n    let result = obj.temp(...args)\r\n    delete obj.temp\r\n    return result\r\n}\r\n// bind函数\r\nfunction pliBind(fn, obj, ...args) {\r\n    return function (...args2) {\r\n        if (obj === undefined || obj === null) {\r\n            obj = globalThis\r\n        }\r\n        obj.temp = fn;\r\n        let result = obj.temp(...args, ...args2)\r\n        delete obj.temp;\r\n        return result\r\n    }\r\n}\r\n// 深拷贝\r\nfunction pliCopy(obj) {\r\n    let res = obj instanceof Array ? [] : {}\r\n    for (const [k, v] of Object.entries(obj)) {\r\n        res[k] = typeof v === 'object' ? PliCopy(v) : v\r\n    }\r\n    return res\r\n}\r\n// 节流\r\nfunction pliThrottle(callback, wait) {\r\n    let start = 0;\r\n    return function (e) {\r\n        let now = Date.now();\r\n        if (now - start >= wait) {\r\n            callback.call(this, e);\r\n            start = now;\r\n        }\r\n    }\r\n}\r\n// 防抖\r\nfunction pliDebounce(callback, time) {\r\n    let timer = null;\r\n    return function (e) {\r\n        if (timer) clearTimeout(timer);\r\n        timer = setTimeout(() => {\r\n            callback.call(this, e);\r\n            timer = null;\r\n        }, time);\r\n    }\r\n}\r\n// export {\r\n//     pliCall,\r\n//     pliApply,\r\n//     pliBind,\r\n//     pliCopy,\r\n//     PliThrottle,\r\n//     PliDebounce\r\n// }\r\nmodule.exports={\r\n    pliCall,\r\n    pliApply,\r\n    pliBind,\r\n    pliCopy,\r\n    pliThrottle,\r\n    pliDebounce\r\n}\n\n//# sourceURL=webpack://pliUtils/./src/methods/methods.js?");

/***/ }),

/***/ "./src/tools/tools.js":
/*!****************************!*\
  !*** ./src/tools/tools.js ***!
  \****************************/
/***/ ((module) => {

eval("// 获取当前时间\r\nfunction pliNowTime(type) {\r\n    let time = new Date();\r\n    let yyyy = time.getFullYear();\r\n    let mm = time.getMonth() < 10 ? `0${time.getMonth()+1}` : time.getMonth()+1;\r\n    let dd = time.getDate() < 10 ? `0${time.getDate()}` : time.getDate();\r\n    let h = time.getHours() < 10 ? `0${time.getHours()}` : time.getHours();\r\n    let m = time.getMinutes();\r\n    let s = time.getSeconds() < 10 ? `0${time.getSeconds()}` : time.getSeconds();\r\n    switch (type) {\r\n        case 'dd/mm/yyyy':\r\n            return `${dd}/${mm}/${yy}`\r\n        case 'mm/dd/yyyy':\r\n            return `${mm}/${dd}/${yyyy}`\r\n        case 'mm dd/yyyy':\r\n            return `${mm} ${dd}/${yyyy}`\r\n        case 'yyyy.mm.dd':\r\n            return `${yyyy}.${mm}.${dd}`\r\n        case 'yyyy/mm/dd':\r\n            return `${yyyy}/${mm}/${dd}`\r\n        case 'yyyy-mm-dd':\r\n            return `${yyyy}-${mm}-${dd}`\r\n        case 'dd/mm/yyyy h:m:s':\r\n            return `${dd}/${mm}/${yy} ${h}:${m}:${s}`\r\n        case 'dd/mm/yyyy h:m':\r\n            return `${dd}/${mm}/${yy} ${h}:${m}`\r\n        case 'mm/dd/yyyy h:m:s':\r\n            return `${mm}/${dd}/${yyyy} ${h}:${m}:${s}`\r\n        case 'mm/dd/yyyy h:m':\r\n            return `${mm}/${dd}/${yyyy} ${h}:${m}`\r\n        case 'mm dd/yyyy h:m:s':\r\n            return `${mm} ${dd}/${yyyy} ${h}:${m}:${s}`\r\n        case 'mm dd/yyyy h:m':\r\n            return `${mm} ${dd}/${yyyy} ${h}:${m}`\r\n        case 'yyyy.mm.dd h:m:s':\r\n            return `${yyyy}.${mm}.${dd} ${h}:${m}:${s}`\r\n        case 'yyyy.mm.dd h:m':\r\n            return `${yyyy}.${mm}.${dd} ${h}:${m}`\r\n        case 'yyyy/mm/dd h:m:s':\r\n            return `${yyyy}/${mm}/${dd} ${h}:${m}:${s}`\r\n        case 'yyyy/mm/dd h:m':\r\n            return `${yyyy}/${mm}/${dd} ${h}:${m}`\r\n        case 'yyyy-mm-dd h:m:s':\r\n            return `${yyyy}-${mm}-${dd} ${h}:${m}:${s}`\r\n        case 'yyyy-mm-dd h:m':\r\n            return `${yyyy}-${mm}-${dd} ${h}:${m}`\r\n        case 'h:m:s':\r\n            return `${h}:${m}:${s}`\r\n        case 'h:m':\r\n            return `${h}:${m}`\r\n        default:\r\n            return `${yyyy}-${mm}-${dd} ${h}:${m}:${s}`\r\n    }\r\n}\r\n// 随机数生成\r\nfunction pliCreateRdm(min = 0, max = 100, Integer = 1) {\r\n    if (Integer === -1) return parseFloat((Math.random() * (max - min) + min).toFixed(2))\r\n    min = Math.ceil(min);\r\n    max = Math.floor(max)\r\n    return Math.floor(Math.random() * (max - min + 1) + min)\r\n}\r\n// 随机颜色生成 参数type 默认rgb 可选hex\r\nfunction pliColorRdm(type = 'rgb') {\r\n    let min = 0;\r\n    let max = 255;\r\n    let r = Math.floor(Math.random() * (max - min) + min);\r\n    let g = Math.floor(Math.random() * (max - min) + min);\r\n    let b = Math.floor(Math.random() * (max - min) + min);\r\n    if (type === 'hex') return pliRgb_Hex(`(${r},${g},${b})`, 'hex');\r\n    return `(${r},${g},${b})`\r\n}\r\n// 颜色转换 参数rgb 格式限定(r,g,b) 或 r,g,b\r\nfunction pliRgb_Hex(data, type) {\r\n    const reg = type === 'hex' ? /^\\((\\d{1,3}),(\\d{1,3}),(\\d{1,3})\\)$/ : /^#(\\w{2})(\\w{2})(\\w{2})$/;\r\n    let arr = reg.exec(data);\r\n    if (!arr) return new Error('请检查参数传入是否正确')\r\n\r\n    function toHex(x) {\r\n        return (\"0\" + parseInt(x).toString(16)).slice(-2);\r\n    }\r\n\r\n    function toRgb(x) {\r\n        return parseInt(x, 16);\r\n    }\r\n    // swich case\r\n    const result = {\r\n        hex: (\"#\" + toHex(arr[1]) + toHex(arr[2]) + toHex(arr[3])).toUpperCase(),\r\n        rgb: `(${toRgb(arr[1])},${toRgb(arr[2])},${toRgb(arr[3])})`\r\n    };\r\n    return result[type] ?\r\n        result[type] :\r\n        new Error(`${type} 格式出错 请输入正确格式`)\r\n}\r\n// 文件批量分类\r\n// 按后缀分类\r\n// 用于后端获取图片，视频，音频链接后的分类\r\nfunction pliFilType(file) {\r\n    const videoReg = /[\\w\\/\\.]*?\\.(AVI|FLV|F4V|FLC|MP4|MKV|M4V|WMV|WEBM)$/gi;\r\n    const audioReg = /[\\w\\/\\.]*?\\.(APE|AU|MP3|MID|MOD|OGG|WMA)$/gi;\r\n    const wordReg = /[\\w\\/\\.]*?\\.(TXT|DOC|WPS|DOCX|XLS|XLSX|PDF)$/gi;\r\n    const photoReg = /[\\w\\/\\.]*?\\.(GIF|JPG|PNG|PSD|BMP|JPEG|PSD|jpeg)/gi;\r\n    const compressedReg = /[\\w\\/\\.]*?\\.(RAR|ZIP|7Z)$/gi;\r\n    let flag = true;\r\n    let files = {\r\n        video: [],\r\n        audio: [],\r\n        word: [],\r\n        photo: [],\r\n        compressed: [],\r\n        other: []\r\n    }\r\n\r\n    for (let i = 0; i < file.length; i++) {\r\n        if (audioReg.test(file[i])) {\r\n            files['audio'].push(file[i])\r\n        } else if (videoReg.test(file[i])) {\r\n            files['video'].push(file[i])\r\n        } else if (wordReg.test(file[i])) {\r\n            files['word'].push(file[i])\r\n        } else if (photoReg.test(file[i])) {\r\n            files['photo'].push(file[i])\r\n        } else if (compressedReg.test(file[i])) {\r\n            files['compressed'].push(file[i])\r\n        } else {\r\n            files['other'].push(file[i])\r\n        }\r\n    }\r\n    return files\r\n}\r\n// Promise封装sleep函数 返回一个Promise对象\r\nfunction pliSleep(delay = 1000) {\r\n    return new Promise(resolve => {\r\n        setTimeout(() => resolve(), delay);\r\n    })\r\n}\r\n// export{pliNowTime,pliColorRdm,pliCreateRdm,pliFilType,pliRgb_Hex,pliSleep}\r\nmodule.exports = {\r\n    pliNowTime,\r\n    pliColorRdm,\r\n    pliCreateRdm,\r\n    pliFilType,\r\n    pliRgb_Hex,\r\n    pliSleep\r\n}\n\n//# sourceURL=webpack://pliUtils/./src/tools/tools.js?");

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
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ 	return __webpack_exports__;
/******/ })()
;
});