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

// export {PliArr}
module.exports= {PliArr}
