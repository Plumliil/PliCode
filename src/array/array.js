/*
 * params(array) 数组
 * params(callback) 回调函数
 */

'use strict'
// 取数组中最大元素
function pliGetMax(arr, value) {
    let max = value ? arr[0][value] : arr[0];
    for (let i = 0; i < arr.length; i++) {
      if (value) {
        if (arr[i][value] > max) {
          max = arr[i]
        }
      } else {
        if (arr[i] > max) {
          max = arr[i]
        }
      }
    }
    return max;
  }
  // 取数组中最小元素
  function pliGetMin(arr, value) {
    let min = value ? arr[0][value] : arr[0];
    for (let i = 0; i < arr.length; i++) {
      if (value) {
        if (arr[i][value] < min) {
          min = arr[i]
        }
      } else {
        if (arr[i] < min) {
          min = arr[i]
        }
      }
    }
    return min;
  }
// 通过冒泡排序方式，将数组或数组内某个对象的元素按升序或降序排列，返回新数组
function pliSort(arr, value = undefined, order = 1) {
  let len = arr.length - 1;
  let temp = null;
  if (value === undefined || value === null) {
    for (let i = 0; i < len; i++) {
      for (let j = 0; j < len - i; j++) {
        if (order === -1) {
          if (arr[j] < arr[j + 1]) {
            temp = arr[j];
            arr[j] = arr[j + 1];
            arr[j + 1] = temp;
            temp = null;
          }
        } else {
          if (arr[j] > arr[j + 1]) {
            temp = arr[j];
            arr[j] = arr[j + 1];
            arr[j + 1] = temp;
            temp = null;
          }
        }
      }
    }
  } else {
    for (let i = 0; i < len; i++) {
      for (let j = 0; j < len - i; j++) {
        if (order === -1) {
          if (arr[j][value] < arr[j + 1][value]) {
            temp = arr[j][value];
            arr[j][value] = arr[j + 1][value];
            arr[j + 1][value] = temp;
            temp = null;
          }
        } else {
          if (arr[j][value] > arr[j + 1][value]) {
            temp = arr[j][value];
            arr[j][value] = arr[j + 1][value];
            arr[j + 1][value] = temp;
            temp = null;
          }
        }
      }
    }
  }

  return arr
}

// pliMap() 方法创建一个新数组，其结果是该数组中的每个元素都调用一个提供的函数后返回的结果。 返回新数组
function pliMap(array, callback) {
    let result = [];
    for (let i = 0; i < array.length; i++) {
        result.push(callback(arr[i], i, array))
    }
    return result;
}

// pliReduce() 方法对数组中的每个元素执行一个由您提供的reducer函数(升序执行)，将其结果汇总为单个返回值。
// 函数累计处理的结果
function pliReduce(array, callback, init) {
    if (init === undefined) init = array[0];
    let result = init;
    for (let i = 0; i < array.length; i++) {
        result = callback(result, array[i], i, array)
    }
    return result;
}

// pliFilter(array, callback) 方法创建一个新数组, 其包含通过所提供函数实现的测试的所有元素。 
// 一个新的、由通过测试的元素组成的数组，如果没有任何数组元素通过测试，则返回空数组。
function pliFilter(array, callback) {
    let result = [];
    for (let i = 0; i < array.length; i++) {
        if (callback(array[i], i, array)) {
            result.push(array[i])
        }
    }
    return result
}

// pliFind(array,callback) 方法返回数组中满足提供的测试函数的第一个元素的值。否则返回 undefined。
function pliFind(array, callback) {
    let result = null;
    for (let i = 0; i < array.length; i++) {
        if (callback(array[i], i, array)) {
            return result = array[i]
        }
    }
    return undefined;
}

// pliFind(array,callback) 方法返回数组中满足提供的测试函数的第一个元素的索引。否则返回 -1。
function pliFindIndex(array, callback) {
    let result = null;
    for (let i = 0; i < array.length; i++) {
        if (callback(array[i], i, array)) {
            return result = i
        }
    }
    return -1;
}

// pliEvery() 方法测试一个数组内的所有元素是否都能通过某个指定函数的测试。它返回一个布尔值。
// 注意：若收到一个空数组，此方法在一切情况下都会返回 true。
function pliEvery(array, callback) {
    if (array === []) return true;
    for (let i = 0; i < array.length; i++) {
        if (!callback(array[i], i, array)) {
            return false;
        }
    }
    return true;
}

// pliSome() 方法测试数组中是不是至少有1个元素通过了被提供的函数测试。它返回的是一个Boolean类型的值。
// 注意：如果用一个空数组进行测试，在任何情况下它返回的都是false。
function pliSome(array, callbcak) {
    if (array === []) return false;
    for (let i = 0; i < array.length; i++) {
        if (callbcak(array[i], i, array)) {
            return true;
        }
    }
    return false;
}

// pliUnique(array) 数组去重，返回新数组
function pliUnique2(array) {
    let result = [];
    for (let i = 0; i < array.length; i++) {
        if (array.indexOf(array[i]) === i) {
            result.push(array[i])
        }
    }
    return result;
}

function pliUnique(array) {
    let result = [];
    let obj = {};
    for (let i = 0; i < array.length; i++) {
        if (obj[array[i]] === undefined) {
            obj[array[i]] = true;
            result.push(array[i])
        }
    }
    return result;
}

function pliUnique3(array) {
    return [...new Set(array)]
}

// pliConcat(array1,array2,...) 方法用于合并两个或多个数组。此方法不会更改现有数组，而是返回一个新数组。
function pliConcat(array, ...args) {
    let result = [...array];
    for (let i = 0; i < args.length; i++) {
        if (Array.isArray(args[i])) {
            result.push(...args[i])
        } else {
            result.push(args[i])
        }
    }
    return result;
}

// pliSlice(array) 方法返回一个新的数组对象，这一对象是一个由 begin 和 end 决定的原数组的浅拷贝（包括 begin，不包括end）。原始数组不会被改变。
function pliSlice(array, begin, end) {
    if (array === []) return [];
    begin = begin || 0;
    if (begin >= array.length) {
        return []
    }
    end = end || array.length
    if (end < begin || end > array.length) {
        end = array.length
    }
    let result = [];
    for (let i = 0; i < array.length; i++) {
        if (i >= begin && i <= end) {
            result.push(array[i])
        }
    }
    return result;
}

// pliFlat(array) 数组扁平化 返回一个新数组
function pliFlat(array) {
    if (array === []) return [];
    let result = [];
    for (let i = 0; i < array.length; i++) {
        if (Array.isArray(array[i])) {
            result = pliConcat(result, pliFlat(array[i]));
        } else {
            result.push(array[i])
        }
    }
    return result;
}

function pliFlat2(array) {
    if (array === []) return [];
    let result = [...array];
    while (result.some(i => Array.isArray(i))) {
        result = pliConcat([], ...result)
    }
    return result;
}

// pliChunk(array, size) 数组分块 size为分开后每个数组内元素个数 默认为 1 
function pliChunk(array, size = 1) {
    let result = [];
    let temp = [];
    for (let i = 0; i < array.length; i++) {
        if (temp.length === 0) {
            result.push(temp)
        }
        temp.push(array[i])
        if (temp.length === size) {
            temp = []
        }
    }
    return result;
}

// 获取数组差异 pliDifference(arr,arr2) 得到当前数组中所有不在arr2中的元素组成的个数组(不改变原数组)
// pliDifference([1,3,5,7],[5,8]) ===> [1,3,7]
function pliDifference(array, array2) {
    let result = [];
    for (let i = 0; i < array.length; i++) {
        if (!array2.includes(array[i])) {
            result.push(array[i])
        }
    }
    return result;
}

// pliPull(array,values) 删除数组中部分元素 返回删除的元素 原数组改变
// pliPullAll(array,[value]) 删除数组中部分元素,参数变为数组 原数组改变
// 删除原数组中与value相同的元素 
function pliPull(array, ...args) {
    let result = [];
    for (let i = 0; i < array.length; i++) {
        if (!args.includes(array[i])) {
            result.push(array[i])
        }
    }
    return result;
}

function pliPullAll(array, args) {
    let result = [];
    for (let i = 0; i < array.length; i++) {
        if (!args.includes(array[i])) {
            result.push(array[i])
        }
    }
    return result;
}

// pliDrop(array,count,lr)获取数组中部分元素 不改变当前数组 count默认是 1 lr默认为 1 左边 
// 得到左边count个元素或者右边count个元素
// 得到当前数组过滤掉左边count个后剩余元素组成的数组 
// pliDrop([1,3,5,7],2)===>[5,7]
function pliDrop(array, count, lr) {
    let result = [];
    for (let i = 0; i < array.length; i++) {
        if (lr === -1) {
            if (i > array.length - count - 1) {
                result.push(array[i])
            }
        } else {
            if (i < count) {
                result.push(array[i])
            }
        }
    }
    return result;
}



















module.exports = {
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
    pliUnique

}