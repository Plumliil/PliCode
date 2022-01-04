function intro() {
    console.log("%cHello,%cPlumli!", "color:red;", "color:red;");
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
    PliArr
} = require('./array/array');
const {
    pliCall,
    pliApply,
    pliBind,
    pliCopy,
    pliThrottle,
    pliDebounce
} = require('./methods/methods');
const {
    pliNowTime,
    pliColorRdm,
    pliCreateRdm,
    pliFilType,
    pliRgb_Hex,
    pliSleep
} = require('./tools/tools');

const PliUtils = {
    // methods
    pliCall,
    pliApply,
    pliBind,
    pliCopy,
    pliThrottle,
    pliDebounce,
    // tools
    pliNowTime,
    pliColorRdm,
    pliCreateRdm,
    pliFilType,
    pliRgb_Hex,
    pliSleep,
    // intro
    intro
}
module.exports = PliUtils;