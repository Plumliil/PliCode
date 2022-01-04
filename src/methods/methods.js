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
function pliApply(fn,obj,args){
    if(obj===undefined||obj===null){
        obj=globalThis
    }
    obj.temp=fn;
    let result=obj.temp(...args)
    delete obj.temp
    return result
}
// bind函数
function pliBind(fn,obj,...args){
    return function(...args2){
        if(obj===undefined||obj===null){
            obj=globalThis
        }
        obj.temp=fn;
        let result=obj.temp(...args,...args2)
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

export {pliCall,pliApply,pliBind,pliCopy}