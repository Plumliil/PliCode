// 改变函数this的指向来执行函数
// call函数封装
function pliCall(fn, obj, ...args) {
    if (obj === undefined || obj === null) {
        obj = globalThis
    }
    obj.temp = fn
    let result = obj.temp(...args)
    delete obj.temp
    return result
}
// apply函数
function pliApply(fn, obj, args) {
    if (obj === undefined || obj === null) {
        obj = globalThis
    }
    obj.temp = fn;
    let result = obj.temp(...args)
    delete obj.temp
    return result
}
// bind函数
function pliBind(fn, obj, ...args) {
    return function (...args2) {
        if (obj === undefined || obj === null) {
            obj = globalThis
        }
        obj.temp = fn;
        let result = obj.temp(...args, ...args2)
        delete obj.temp;
        return result
    }
}
// 深拷贝
function pliCopy(obj) {
    let res = obj instanceof Array ? [] : {}
    for (const [k, v] of Object.entries(obj)) {
        res[k] = typeof v === 'object' ? PliCopy(v) : v
    }
    return res
}
// 节流
function pliThrottle(callback, wait) {
    let start = 0;
    return function (e) {
        let now = Date.now();
        if (now - start >= wait) {
            callback.call(this, e);
            start = now;
        }
    }
}
// 防抖
function pliDebounce(callback, time) {
    let timer = null;
    return function (e) {
        if (timer) clearTimeout(timer);
        timer = setTimeout(() => {
            callback.call(this, e);
            timer = null;
        }, time);
    }
}
// export {
//     pliCall,
//     pliApply,
//     pliBind,
//     pliCopy,
//     PliThrottle,
//     PliDebounce
// }
module.exports={
    pliCall,
    pliApply,
    pliBind,
    pliCopy,
    pliThrottle,
    pliDebounce
}