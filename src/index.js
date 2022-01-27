function intro() {
    console.log("%cHello,%cPlumli!", "color:red;", "color:red;",'https://github.com/Plumliil');
}
// export {
//     pliCall,
//     pliApply,
//     pliBind,
//     pliCopy,
//     PliThrottle,
//     PliDebounce
// }
// from './methods/methods';
// export {
//     pliNowTime,
//     pliColorRdm,
//     pliCreateRdm,
//     pliFilType,
//     pliRgb_Hex,
//     pliSleep
// }
// from './tools/tools';
// export {
//     PliArr
// }
// from './array/array';

// export {
//     intro
// }
// const PliUtils={
//     PliArray:require('./array/array'),
//     PliMethods:require('./methods/methods'),
//     PliTools:require('./tools/tools'),
//     intro
// }
const {
    pliGetMax,
    pliGetMin,
    pliSort,
    pliChunk,
    pliConcat,
    pliDifference,
    pliDrop,
    pliEvery,
    pliFilter,
    pliFind,
    pliFindIndex,
    pliFlat,
    pliMap,
    pliPull,
    pliPullAll,
    pliReduce,
    pliSlice,
    pliSome,
    pliUnique
} = require('./array/array');
const {
    pliNewInstance,
    pliInstanceOf,
    pliMergeObj,
    pliCopy
} = require('./object/object')
const {
    pliCall,
    pliApply,
    pliBind,
    pliThrottle,
    pliDebounce
} = require('./methods/methods');
const {
    pliNowTime,
    pliColorRdm,
    pliCreateRdm,
    pliFilType,
    pliRgb_Hex,
    pliSleep,
    pliReverseStr,
    pliPalindrome,
    pliTruncate,
    pliPinYin,
    pliLongestCommonPrefix
} = require('./tools/tools');

const PliUtils = {
    // array
    pliGetMax,
    pliGetMin,
    pliSort,
    pliChunk, // 数组分块
    pliConcat,
    pliDifference, // 获取两个数组间差异
    pliDrop, // 向左(右)获取count元素
    pliEvery,
    pliFilter,
    pliFind,
    pliFindIndex,
    pliFlat,
    pliMap,
    pliPull, // 删除数组中部分元素 参数为Number
    pliPullAll, // 删除数组中部分元素 参数为Array
    pliReduce, //数组切片
    pliSlice,
    pliSome,
    pliUnique,
    // object
    pliNewInstance,
    pliInstanceOf,
    pliMergeObj,
    pliCopy,
    // methods
    pliCall,
    pliApply,
    pliBind,
    pliThrottle,
    pliDebounce,
    // tools
    pliNowTime,
    pliColorRdm,
    pliCreateRdm,
    pliFilType,
    pliRgb_Hex,
    pliSleep,
    pliReverseStr,
    pliPalindrome,
    pliTruncate,
    pliPinYin,
    pliLongestCommonPrefix,
    // intro
    intro
}
module.exports = PliUtils;