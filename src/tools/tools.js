const pinyin = require('./pinyin')
// 获取当前时间
function pliNowTime(type) {
    let time = new Date();
    let yyyy = time.getFullYear();
    let mm = time.getMonth() < 10 ? `0${time.getMonth()+1}` : time.getMonth() + 1;
    let dd = time.getDate() < 10 ? `0${time.getDate()}` : time.getDate();
    let h = time.getHours() < 10 ? `0${time.getHours()}` : time.getHours();
    let m = time.getMinutes();
    let s = time.getSeconds() < 10 ? `0${time.getSeconds()}` : time.getSeconds();
    switch (type) {
        case 'dd/mm/yyyy':
            return `${dd}/${mm}/${yy}`
        case 'mm/dd/yyyy':
            return `${mm}/${dd}/${yyyy}`
        case 'mm dd/yyyy':
            return `${mm} ${dd}/${yyyy}`
        case 'yyyy.mm.dd':
            return `${yyyy}.${mm}.${dd}`
        case 'yyyy/mm/dd':
            return `${yyyy}/${mm}/${dd}`
        case 'yyyy-mm-dd':
            return `${yyyy}-${mm}-${dd}`
        case 'dd/mm/yyyy h:m:s':
            return `${dd}/${mm}/${yy} ${h}:${m}:${s}`
        case 'dd/mm/yyyy h:m':
            return `${dd}/${mm}/${yy} ${h}:${m}`
        case 'mm/dd/yyyy h:m:s':
            return `${mm}/${dd}/${yyyy} ${h}:${m}:${s}`
        case 'mm/dd/yyyy h:m':
            return `${mm}/${dd}/${yyyy} ${h}:${m}`
        case 'mm dd/yyyy h:m:s':
            return `${mm} ${dd}/${yyyy} ${h}:${m}:${s}`
        case 'mm dd/yyyy h:m':
            return `${mm} ${dd}/${yyyy} ${h}:${m}`
        case 'yyyy.mm.dd h:m:s':
            return `${yyyy}.${mm}.${dd} ${h}:${m}:${s}`
        case 'yyyy.mm.dd h:m':
            return `${yyyy}.${mm}.${dd} ${h}:${m}`
        case 'yyyy/mm/dd h:m:s':
            return `${yyyy}/${mm}/${dd} ${h}:${m}:${s}`
        case 'yyyy/mm/dd h:m':
            return `${yyyy}/${mm}/${dd} ${h}:${m}`
        case 'yyyy-mm-dd h:m:s':
            return `${yyyy}-${mm}-${dd} ${h}:${m}:${s}`
        case 'yyyy-mm-dd h:m':
            return `${yyyy}-${mm}-${dd} ${h}:${m}`
        case 'h:m:s':
            return `${h}:${m}:${s}`
        case 'h:m':
            return `${h}:${m}`
        default:
            return `${yyyy}-${mm}-${dd} ${h}:${m}:${s}`
    }
}
// 随机数生成
function pliCreateRdm(min = 0, max = 100, Integer = 1) {
    if (Integer === -1) return parseFloat((Math.random() * (max - min) + min).toFixed(2))
    min = Math.ceil(min);
    max = Math.floor(max)
    return Math.floor(Math.random() * (max - min + 1) + min)
}
// 随机颜色生成 参数type 默认rgb 可选hex
function pliColorRdm(type = 'rgb') {
    let min = 0;
    let max = 255;
    let r = Math.floor(Math.random() * (max - min) + min);
    let g = Math.floor(Math.random() * (max - min) + min);
    let b = Math.floor(Math.random() * (max - min) + min);
    if (type === 'hex') return pliRgb_Hex(`(${r},${g},${b})`, 'hex');
    return `(${r},${g},${b})`
}
// 颜色转换 参数rgb 格式限定(r,g,b) 或 r,g,b
function pliRgb_Hex(data, type) {
    const reg = type === 'hex' ? /^\((\d{1,3}),(\d{1,3}),(\d{1,3})\)$/ : /^#(\w{2})(\w{2})(\w{2})$/;
    let arr = reg.exec(data);
    if (!arr) return new Error('请检查参数传入是否正确')

    function toHex(x) {
        return ("0" + parseInt(x).toString(16)).slice(-2);
    }

    function toRgb(x) {
        return parseInt(x, 16);
    }
    // swich case
    const result = {
        hex: ("#" + toHex(arr[1]) + toHex(arr[2]) + toHex(arr[3])).toUpperCase(),
        rgb: `(${toRgb(arr[1])},${toRgb(arr[2])},${toRgb(arr[3])})`
    };
    return result[type] ?
        result[type] :
        new Error(`${type} 格式出错 请输入正确格式`)
}
// 文件批量分类
// 按后缀分类
// 用于后端获取图片，视频，音频链接后的分类
function pliFilType(file) {
    const videoReg = /[\w\/\.]*?\.(AVI|FLV|F4V|FLC|MP4|MKV|M4V|WMV|WEBM)$/gi;
    const audioReg = /[\w\/\.]*?\.(APE|AU|MP3|MID|MOD|OGG|WMA)$/gi;
    const wordReg = /[\w\/\.]*?\.(TXT|DOC|WPS|DOCX|XLS|XLSX|PDF)$/gi;
    const photoReg = /[\w\/\.]*?\.(GIF|JPG|PNG|PSD|BMP|JPEG|PSD|jpeg)/gi;
    const compressedReg = /[\w\/\.]*?\.(RAR|ZIP|7Z)$/gi;
    let flag = true;
    let files = {
        video: [],
        audio: [],
        word: [],
        photo: [],
        compressed: [],
        other: []
    }

    for (let i = 0; i < file.length; i++) {
        if (audioReg.test(file[i])) {
            files['audio'].push(file[i])
        } else if (videoReg.test(file[i])) {
            files['video'].push(file[i])
        } else if (wordReg.test(file[i])) {
            files['word'].push(file[i])
        } else if (photoReg.test(file[i])) {
            files['photo'].push(file[i])
        } else if (compressedReg.test(file[i])) {
            files['compressed'].push(file[i])
        } else {
            files['other'].push(file[i])
        }
    }
    return files
}
// Promise封装sleep函数 返回一个Promise对象
function pliSleep(delay = 1000) {
    return new Promise(resolve => {
        setTimeout(() => resolve(), delay);
    })
}
// 字符串函数封装
// 字符串倒序 reverseString(str) 生成一个倒序字符串
function pliReverseStr(str) {
    // 将字符串转为数组
    let res = [];
    for (let i = 0; i < [...str].length; i++) {
        res[i] = [...str][
            [...str].length - 1 - i
        ]
    }
    return res.join('')
}
// 回文字符串 palindrome(str) 如果给定的字符串时回文，返回true，否则返回false
function pliPalindrome(str) {
    let res = [];
    for (let i = 0; i < [...str].length; i++) {
        res[i] = [...str][
            [...str].length - 1 - i
        ]
    }
    return str === res.join('')
}
// 截取字符串 truncate(str,num) 如果字符串的长度超过了num，截取前面num长度部分，并以...结束
function pliTruncate(str, num) {
    let result = []
    for (let i = 0; i < [...str].length; i++) {
        if (i < num) {
            result.push([...str][i])
        }
    }
    return result.join('') + '...';
}

// 事件总线
class PliEventBus {
    constructor() {
        this.callbacks = {};
    }
    on(eventName, callback) {
        if (this.callbacks[eventName]) {
            this.callbacks[eventName].push(callback);
        } else {
            this.callbacks[eventName] = [callback]
        }
    }
    emit(eventName, data) {
        if (this.callbacks[eventName] && this.callbacks[eventName].length > 0) {
            this.callbacks[eventName].forEach(callback => {
                callback(data)
            })
        }
    }
    off(eventName) {
        if (eventName) {
            delete this.callbacks[eventName]
        } else {
            this.callbacks = {}
        }
    }
}
// let p = new PliEventBus();
// p.on('login', data => {
//     console.log(data.name + '登陆成功');
// })
// p.on('login', data => {
//     console.log(data.name + '信息已经输入云端保存');
// })

// p.emit('login', {
//     name: 'zs',
//     age: 21
// });
// p.off('login')

// p.on('login', data => {
//     console.log(data.name + '信息已经输入云端保存');
// })

// 发布订阅模式
// PubSub.subscribe(msg,subscriber):订阅消息，指定消息名和订阅者回调函数
// PubSub.publish(msg,data):异步发布消息，指定消息名和数据
class PliPubSub {
    constructor() {
        this.id = 0;
        this.callbacks = {};
    }
    subscribe(msgname, callback) {
        let token = 'token_' + this.id++;
        if (this.callbacks[msgname]) {
            this.callbacks[msgname][token] = callback;
        } else {
            this.callbacks[msgname] = {
                [token]: callback
            }
        }
        return token;
    }
    unSubscribe(flag) {
        if (flag === undefined) {
            this.callbacks = {}

        } else if (typeof flag === 'string') {
            if (flag.includes('token_')) {
                Object.keys(this.callbacks).forEach(key => {
                    delete this.callbacks[key][flag]
                })
            } else {
                delete this.callbacks[flag]
            }
        }
    }
    publish(msgname, data) {
        if (this.callbacks[msgname]) {
            Object.keys(this.callbacks[msgname]).forEach(token => {
                this.callbacks[msgname][token](data)
            })
        }
    }
}

// let ps=new PliPubSub();
// let ps1=ps.subscribe('pay', data => {
//     console.log('商家接到订单,准备开始制作'+data.name);
// })
// let ps2=ps.subscribe('pay', data => {
//     console.log('骑手接到订单,准备开始取餐'+data.name);
// })
// // ps.unSubscribe('pay')
// ps.publish('pay',{
//     name:'西红柿鸡蛋',
//     price:8
// })
function pySearch(value, type) {
    let rname = '';
    for (let key in pinyin) {

        if (pinyin[key].includes(value)) {
            if (type === -1) {
                rname = key;
            } else {
                rname =
                    key.substring(0, 1).toUpperCase() +
                    key.substring(1, key.length);
            }
        }
    }
    return rname
}
function pliPinYin(value, type = 1) {
    let name = '';
    [...value].forEach(item => {
        name = name + pySearch(item, type)
    })
    return name
}

module.exports = {
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
    // 事件总线
    PliEventBus,
    // 发布订阅模式
    PliPubSub
}