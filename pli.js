// 数组操作
class PliArr {
    constructor(arr) {
        this.arr = arr;
    }
    // 获取最大值
    getMax() {
        return Math.max.apply(null, this.arr);
    }
    // 获取最小值
    getMin() {
        return Math.min.apply(null, this.arr);
    }
    // 求和 传入的key为求和属性
    getSum(key) {
        if (key) return this.arr.reduce((t, l) => {
            return t + l[key]
        }, 0)
        return this.arr.reduce((t, l) => {
            return t + l
        }, 0)
    }
    // 排序 key 为排序的属性 无排序属性传入 '' order为排序方式 1为正序，-1为倒叙 默认正序
    getSort(key, order = 1) {
        if (key) return this.arr.sort((a, b) => {
            return (a[key] - b[key]) * order
        })
        return this.arr.sort((a, b) => {
            return (a - b) * order
        })
    }
    // 数组扁平化
    flattening() {
        const flat = arr => {
            let newArr = []
            for (let i = 0; i < arr.length; i++) {
                if (Array.isArray(arr[i])) {
                    newArr = newArr.concat(flat(arr[i]))
                } else {
                    newArr.push(arr[i])
                }
            }
            return newArr
        }
        return flat(this.arr)
    }
}
// 图片操作

// 图片压缩
{ // window.onload = function () {
    //     const upload = document.getElementById('upload')
    //     upload.onchange = uploadImage
    // }

    // // 图片上传
    // function uploadImage(event) {
    //     const file = event.target.files
    //     createImage(file[0], function (img) {
    //         createCanvas(img, 1200)
    //     })
    //     event.target.value = ''
    // }

    // // 生成图片副本
    // function createImage(file, callback) {
    //     const reader = new FileReader()
    //     reader.readAsDataURL(file)
    //     reader.onload = function () {
    //         const img = new Image()
    //         img.src = reader.result
    //         callback(img)
    //     }
    // }

    // // 生成画布
    // function createCanvas(img, max) {
    //     const cvs = document.createElement('canvas')
    //     const ctx = cvs.getContext('2d')
    //     let width = img.naturalWidth || 400
    //     let height = img.naturalHeight || 400
    //     const ratio = width / height
    //     if (width > max) {
    //         width = max
    //         height = width / ratio
    //     }
    //     cvs.width = width
    //     cvs.height = height
    //     img.onload = function () {
    //         const base64 = compressImage(cvs, ctx, img, width, height, max)
    //         console.log(base64)
    //     }
    // }

    // // 图片质量压缩
    // function compressImage(cvs, ctx, img, width, height, max) {
    //     // 绘制图片
    //     ctx.drawImage(img, 0, 0, img.naturalWidth, img.naturalHeight, 0, 0, width, height)
    //     const quality = width > max ? 0.5 : width > 600 ? 0.6 : 1
    //     const newImageData = cvs.toDataURL('image/png', quality)
    //     downloadImage(newImageData)
    //     console.log(newImageData);
    //     return newImageData
    // }

    // // 图片下载
    // function downloadImage(newImageData) {
    //     const link = document.createElement('a')
    //     link.href = newImageData
    //     link.download = 'img.png'
    //     link.target = '_blank'
    //     document.body.appendChild(link)
    //     link.click()
    //     document.body.removeChild(link)
    // }

}











// 动画操作















// 工具
// 获取当前时间
function pliNowTime(type) {
    let time = new Date();
    let yyyy = time.getFullYear();
    let mm = time.getMonth() < 10 ? `0${time.getMonth()}` : time.getMonth();
    let dd = time.getDay() < 10 ? `0${time.getDay()}` : time.getDay();
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
// 浏览器语音识别
class PliRecorder {
    constructor(el) {
        let recognition={};
        let result='xxxxxx';
        // console.log(el);
        this.recognition = new webkitSpeechRecognition();
        recognition.lang = 'cmn-Hans-CN'; //普通话 (中国大陆)
        recognition.continuous = true;
        recognition.interimResults = true;
        recognition.onresult = function (event) {
            result =''; 
            for (let i = event.resultIndex; i < event.results.length; i++) {
                result += event.results[i][0].transcript;
            }
            // el.innerHTML = result
            console.log(result);
        }
        el.innerHTML=result
        console.log(recognition);
    }
    start(){
        console.log('start');
        console.log(this.recognition);
        return this.recognition.start();
    }
    stop(){
        console.log('stop');
        return this.recognition.stop();
    }
}


export {
    PliArr,
    pliNowTime,
    pliCreateRdm,
    pliColorRdm,
    pliRgb_Hex,
    PliRecorder
}