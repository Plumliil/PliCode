function intro() {
    console.log("%cHello%c!", "color:red;", "color:red;",'https://github.com/Plumliil/PliCode');
}

const {
    ParamError
}=require('./src/utils')
const {
    getMax,
    getMin,
    sort,
    chunk, // 数组分块
    concat,
    difference, // 获取两个数组间差异
    drop, // 向左(右)获取count元素
    every,
    filter,
    find,
    findIndex,
    flat,
    map,
    pull, // 删除数组中部分元素 参数为Number
    pullAll, // 删除数组中部分元素 参数为Array
    reduce, //数组切片
    slice,
    some,
    unique
} = require('./src/array');
const {
    newInstance,
    instanceOf,
    mergeObj,
    copy
} = require('./src/object')
const {
    call,
    apply,
    bind,
    deepCopy,
    throttle,
    debounce,
    shuffle
} = require('./src/methods');
const {
    nowTime,
    colorRdm,
    createRdm,
    filType,
    Rgb_Hex,
    sleep,
    reverseStr,
    palindrome,
    truncate,
    pinYin,
    // 事件总线
    EventBus,
    // 发布订阅模式
    PubSub
} = require('./src/tools');

const PliLib = {
    // array
    getMax,
    getMin,
    sort,
    chunk, // 数组分块
    concat,
    difference, // 获取两个数组间差异
    drop, // 向左(右)获取count元素
    every,
    filter,
    find,
    findIndex,
    flat,
    map,
    pull, // 删除数组中部分元素 参数为Number
    pullAll, // 删除数组中部分元素 参数为Array
    reduce, //数组切片
    slice,
    some,
    unique,
    // object
    newInstance,
    instanceOf,
    mergeObj,
    copy,
    // methods
    call,
    apply,
    bind,
    deepCopy,
    throttle,
    debounce,
    shuffle,
    // tools
    nowTime,
    colorRdm,
    createRdm,
    filType,
    Rgb_Hex,
    sleep,
    reverseStr,
    palindrome,
    truncate,
    pinYin,
    EventBus, // 事件总线
    PubSub, // 发布订阅模式
    // error
    ParamError,
    // intro
    intro
}

module.exports = PliLib;