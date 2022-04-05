[TOC]

<div
    align=center
     style="text-align-center"
    >
    <!-- <img src="https://gitee.com/Plumliil/images/raw/master/MdPicture/20220104173804.png"  > -->
    <!--<img src="https://raw.githubusercontent.com/Plumliil/images/main/img/logo.png" style="border-radius:50%"/>-->
    <img src="https://s2.loli.net/2022/04/05/qa4sCStuDX5gyBb.png" style="border-radius:50%" />
</div>
<div align=center>
    <a href="https://github.com/Plumliil" style="font-size:30px;font-weight:700;text-decoration: none;" title="PlumLi">PlumLi</a>
</div>

<!-- <h1 style="text-align:center">常用函数库</h1> -->

# 常用函数库

## 安装引用

### 安装

`npm i plumli`

### 引用

```javascript
// 全部引用
const PliLib = require('plumli');
// 部分引用
const {intro} = require('plumli');
```

## 数组方法

### map()封装

#### 描述

方法创建一个新数组，其结果是该数组中的每个元素都调用一个提供的函数后返回的结果。 

#### 用法

| #   | 解释                                            |
|:---:|:---------------------------------------------:|
| 语法  | `PliLib.map(array, callback)`            |
| 参数  | array:需要操作的数组</br>callback:对原数组进行操作的回调函数</br> |
| 返回值 | 返回新数组                                         |

#### 示例

```javascript
let arr = [1, 2, 3, 4, 5];
console.log(PliLib.map(arr, v => v * 2)); // [2,4,6,8,10]
```

### reduce()封装

#### 描述

方法对数组中的每个元素执行一个由您提供的reducer函数(升序执行)，将其结果汇总为单个返回值。

#### 用法

| #   | 解释                                                                                                      |
|:---:|:-------------------------------------------------------------------------------------------------------:|
| 语法  | `PliLib.reduce(array, callback, init)`                                                             |
| 参数  | array:需要操作的数组</br>callback:对原数组进行操作的回调函数</br>init:作为第一次调用 callback函数时的第一个参数的值。 如果没有提供初始值，则将使用数组中的第一个元素。 |
| 返回值 | 函数累计处理的结果                                                                                               |

#### 示例

```javascript
let arr = [1, 2, 3, 4, 5];
console.log(PliLib.reduce(arr, (t, v) => t + v, 0)); // 15
```

### every()封装

#### 描述

该方法测试一个数组内的所有元素是否都能通过某个指定函数的测试。它返回一个布尔值。
注意：若收到一个空数组，此方法在一切情况下都会返回 true。

#### 用法

| #   | 解释                                                   |
|:---:|:----------------------------------------------------:|
| 语法  | `PliLib.every(array, callback)`                 |
| 参数  | array:需要操作的数组</br>callback:对原数组进行操作的回调函数</br>        |
| 返回值 | 若全部满足条件返回true,否则返回false.若收到一个空数组，此方法在一切情况下都会返回 true。 |

#### 示例

```javascript
let arr = [1, 2, 3, 4, 5];
console.log(PliLib.every(arr, v => v > 3)); // false
console.log(PliLib.every(arr, v => v > 0)); // true
```

### some()封装

#### 描述

该方法测试数组中是不是至少有1个元素通过了被提供的函数测试。它返回的是一个布尔值。
注意：如果用一个空数组进行测试，在任何情况下它返回的都是false。

#### 用法

| #   | 解释                                                       |
|:---:|:--------------------------------------------------------:|
| 语法  | `PliLib.some(array, callback)`                     |
| 参数  | array:需要操作的数组</br>callback:对原数组进行操作的回调函数</br>            |
| 返回值 | 数组中有至少一个元素通过回调函数的测试就会返回true；所有元素都没有通过回调函数的测试返回值才会为false。 |

#### 示例

```javascript
let arr = [1, 2, 3, 4, 5];
console.log(PliLib.some(arr, v => v > 5)); // false
console.log(PliLib.some(arr, v => v > 0)); // true
```

### filter()封装

#### 描述

方法创建一个新数组, 其包含通过所提供函数实现的测试的所有元素。如果没有任何数组元素通过测试，则返回空数组。

#### 用法

| #   | 解释                                            |
|:---:|:---------------------------------------------:|
| 语法  | `PliLib.filter(array, callback)`         |
| 参数  | array:需要操作的数组</br>callback:对原数组进行操作的回调函数</br> |
| 返回值 | 返回新数组                                         |

#### 示例

```javascript
let arr = [1, 2, 3, 4, 5];
console.log(PliLib.filter(arr, v => v > 3)); // [4,5]
```

### find()封装

#### 描述

方法返回数组中满足提供的测试函数条件的第一个元素的值。否则返回 undefined。

#### 用法

| #   | 解释                                            |
|:---:|:---------------------------------------------:|
| 语法  | `PliLib.find(array,callback)`            |
| 参数  | array:需要操作的数组</br>callback:对原数组进行操作的回调函数</br> |
| 返回值 | 满足回调函数条件返回满足条件的第一个元素，否则返回undefined            |

#### 示例

```javascript
let arr = [1, 2, 3, 4, 5];
console.log(PliLib.find(arr, v => v > 3)); // 4
```

### findIndex()封装

#### 描述

方法返回数组中满足提供的测试函数条件的第一个元素的索引。否则返回 -1。

#### 用法

| #   | 解释                                            |
|:---:|:---------------------------------------------:|
| 语法  | `PliLib.findIndex(array,callback)`       |
| 参数  | array:需要操作的数组</br>callback:对原数组进行操作的回调函数</br> |
| 返回值 | 方法返回数组中满足提供的测试函数条件的第一个元素的索引，否则返回 -1           |

#### 示例

```javascript
let arr = [1, 2, 3, 4, 5];
console.log(PliLib.findIndex(arr, v => v > 3)); // 3
```

### slice()封装

#### 描述

方法返回一个新的数组对象，这一对象是一个由 begin 和 end 决定的原数组的浅拷贝（包括 begin，不包括end）。原始数组不会被改变。

#### 用法

| #   | 解释                                                            |
|:---:|:-------------------------------------------------------------:|
| 语法  | `PliLib.Slice(array,begin,end)`                          |
| 参数  | array:需要操作的数组</br>begin:开始截取的元素索引</br>end:结束截取的元素索引(不包含)</br> |
| 返回值 | 一个含有被提取元素的新数组。                                                |

#### 示例

```javascript
let arr = [1, 2, 3, 4, 5];
console.log(PliLib.Slice(arr, 1,3)); // [2，3]
```

### concat()封装

#### 描述

该方法用于合并两个或多个数组。此方法不会更改现有数组，而是返回一个新数组。

#### 用法

| #   | 解释                                            |
|:---:|:---------------------------------------------:|
| 语法  | `PliLib.concat(array,array2,array3,...)` |
| 参数  | array为需要操作的数组                                 |
| 返回值 | 一个含有被提取元素的新数组。                                |

#### 示例

```javascript
let arr = [1, 2, 3, 4];
let arr2 = ['a', 'b', 'c'];
let arr3 = [5, 6, 7];
console.log(PliLib.concat(arr, arr2, arr3));// [1, 2, 3, 4,'a', 'b', 'c', 5, 6, 7,]
```

### 数组最大值

#### 描述

通过该方法获取数组中元素最大值

#### 用法

| #   | 解释                                      |
|:---:|:---------------------------------------:|
| 语法  | `PliLib.getMax(array,value)`       |
| 参数  | array:需要操作的数组</br>value:数组内某个对象的元素(非必要) |
| 返回值 | 返回最大值元素                                 |

#### 示例

```javascript
let arr = [
  { name: 'js', price: 200, click: 312 },
  { name: 'node', price: 235, click: 200 },
  { name: 'css', price: 173, click: 513 }
]
let arr1 = [3, 1, 5, 2, 4];

console.log(PliLib.getMax(arr,'click')); // {"name":"css","price":173,"click":513}
console.log(PliLib.getMax(arr1)); // 5
```

### 数组最小值

#### 描述

通过该方法获取数组中元素最小值

#### 用法

| #   | 解释                                      |
|:---:|:---------------------------------------:|
| 语法  | `PliLib.getMin(array,value)`       |
| 参数  | array:需要操作的数组</br>value:数组内某个对象的元素(非必要) |
| 返回值 | 返回最小值元素                                 |

#### 示例

```javascript
let arr = [
  { name: 'js', price: 200, click: 312 },
  { name: 'node', price: 235, click: 200 },
  { name: 'css', price: 173, click: 513 }
]
let arr1 = [3, 1, 5, 2, 4];

console.log(PliLib.getMin(arr,'click')); // {"name":"node","price":235"click":200}
console.log(PliLib.getMin(arr1)); // 1
```

### 数组排序

#### 描述

通过冒泡排序方式，将数组或数组内某个对象的元素按升序或降序排列，改变原数组

#### 用法

| #   | 解释                                                                    |
|:---:|:---------------------------------------------------------------------:|
| 语法  | `PliLib.sort(array,value,order)`                                 |
| 参数  | array:需要操作的数组</br>value:数组内某个对象的元素</br>order:排序顺序，1 为升序，-1 为降序，默认为 升序 |
| 返回值 | 返回排序后的数组                                                              |

#### 示例

```javascript
let arr = [
  { name: 'js', price: 200, click: 312 },
  { name: 'node', price: 235, click: 200 },
  { name: 'css', price: 173, click: 513 }
];
let arr1 = [3, 1, 5, 2, 4];

console.log(PliLib.sort(arr, 'price'));
// [
//   {"name":"js","price":173,"click":312},
//   {"name":"node","price":200,"click":200},
//   {"name":"css","price":235,"click":513}
// ]
console.log(PliLib.sort(arr, 'price', -1));
// [
//  {"name":"js","price":235,"click":312},
//  {"name":"node","price":200,"click":200},
//  {"name":"css","price":173,"click":513}
// ]

console.log(PliLib.sort(arr1, null, -1));
// [5,4,3,2,1]
console.log(PliLib.sort(arr1));
// [1,2,3,4,5]
```

### 数组去重

#### 描述

删除数组内相同元素，返回新数组

#### 用法

| #   | 解释                                  |
|:---:|:-----------------------------------:|
| 语法  | `PliLib.unique(array)`         |
| 参数  | array:需要操作的数组</br>                  |
| 返回值 | 方法返回数组中满足提供的测试函数条件的第一个元素的索引，否则返回 -1 |

#### 示例

```javascript
let arr = [1, 3, 4, 3, 5, 3];
console.log(PliLib.unique(arr)); // [1,3,4,5]
```

### 数组分块

#### 描述

将数组按照某个长度进行分块

#### 用法

| #   | 解释                         |
|:---:|:--------------------------:|
| 语法  | `PliLib.chunk(array)` |
| 参数  | array:需要操作的数组</br>         |
| 返回值 | 返回分块后的数组                   |

#### 示例

```javascript
let arr = [1, 3, 4, 3, 5, 3, 2];
console.log(PliLib.chunk(arr)); // [[1],[3],[4],[3],[5],[3],[2]] 
console.log(PliLib.chunk(arr, 1)); // [[1],[3],[4],[3],[5],[3],[2]] 
console.log(PliLib.chunk(arr, 3)); // [[1,3,4],[3,5,3],[2]]
console.log(PliLib.chunk(arr, 4)); // [[1,3,4,3],[5,3,2]]
```

### 数组元素删除

#### 描述

删除数组中部分元素 原数组改变

#### 用法

| #   | 解释                                                                                          |
|:---:|:-------------------------------------------------------------------------------------------:|
| 语法  | `PliLib.pull(array,value,value2,...)`</br>`PliLib.pullAll(array,[value,value2,...])` |
| 参数  | array:需要操作的数组</br>value:需要删除的元素                                                             |
| 返回值 | 返回删除元素组成的的数组                                                                                |

#### 示例

```javascript
let arr = [1, 2, 3, 4, 'a', 'b', 'c'];

console.log(PliLib.pull(arr, 2, 4, 'b', 10,'d')); // [2,4,"b"]
console.log(PliLib.pullAll(arr, [2, 4, 'b', 10,'d'])); // [2,4,"b"]
```

### 获取数组部分元素

#### 描述

得到数组过滤掉左边或右边count个元素后后剩余元素组成的数组

#### 用法

| #   | 解释                                                                |
|:---:|:-----------------------------------------------------------------:|
| 语法  | `PliLib.drop(array, count, lr)`                              |
| 参数  | array:需要操作的数组</br>count:需要过滤的元素个数 默认为1</br>lr:选择左右 1 为左 -1 为右默认为右 |
| 返回值 | 得到一个新数组                                                           |

#### 示例

```javascript
let arr = [1, 3, 5, 7];

console.log(PliLib.drop(arr, 2)); // [5, 7]
console.log(PliLib.drop(arr, 2, -1)); // [1, 3]
```

### 获取两数组间的差异

#### 描述

得到当前数组中所有不在另一个数组中的元素组成的一个新数组(不改变原数组)

#### 用法

| #   | 解释                                      |
|:---:|:---------------------------------------:|
| 语法  | `PliLib.difference(array, array2)` |
| 参数  | array:需要操作的第一个数组</br>array2:需要操作的第二个数组  |
| 返回值 | 得到一个新数组                                 |

#### 示例

```javascript
let arr = [1, 3, 5, 7];
let arr2 = [2, 3, 5, 8];

console.log(PliLib.difference(arr, arr2)); // [1, 7]
```

### 数组扁平化

#### 描述

取出嵌套数组(多维)中的所有元素放到一个新数组(一维)中

#### 用法

| #   | 解释                        |
|:---:|:-------------------------:|
| 语法  | `PliLib.flat(array)` |
| 参数  | array:需要操作的数组             |
| 返回值 | 得到一个新数组                   |

#### 示例

```javascript
let arr = [1, 2, [3, 4, [5, 6, [7, 8, [9]]]]];

console.log(PliLib.flat(arr)); // [1,2,3,4,5,6,7,8,9]
```

<hr>

## 对象方法

### new 方法

#### 描述

通过该方法来构造函数实例化对象

#### 用法

| #   | 解释                                     |
|:---:|:--------------------------------------:|
| 语法  | `PliLib.newInstance(Fn,...args))` |
| 参数  | Fn:构造函数</br>args:传入的参数                 |
| 返回值 | 返回实例化后的对象                              |

#### 示例

```javascript
function Person(name, age) {
  this.name = name;
  this.age = age;
  return this.name + this.age
}
let p = PliLib.newInstance(Person, 'zs', 21);
```

### instanceOf 方法

#### 描述

通过该方法来构造函数实例化对象

#### 用法

| #   | 解释                                         |
|:---:|:------------------------------------------:|
| 语法  | `PliLib.instanceOf(obj,constructor))` |
| 参数  | obj:某个实例对象</br>constructor:某个构造函数          |
| 返回值 | 返回实例化后的对象                                  |

#### 示例

```javascript
function Person(name, age) {
  this.name = name;
  this.age = age;
  return this.name + this.age
}

let p = new Person('', 22)
console.log(PliLib.instanceOf(p, Person)); // true
console.log(PliLib.instanceOf({}, Person)); // false
console.log(PliLib.instanceOf(Person, Object)); // true
```

### 对象合并

#### 描述

合并多个对象 返回合并后的对象，不改变原对象

#### 用法

| #   | 解释                              |
|:---:|:-------------------------------:|
| 语法  | `PliLib.mergeObj(...objs)` |
| 参数  | obj:需要合并的对象                     |
| 返回值 | 返回合并后后的对象                       |

#### 示例

```javascript
let obj1 = { person: [{ name: 'zs' }, { name: 'ls' }], pos: 'hn' }
let obj2 = { person: { name: 'ww' }, pos: 'bj', sex: '男' }

console.log(PliLib.mergeObj(obj1,obj2));
// {
//     "person":[{"name":"zs"},{"name":"ls"},{"name":"ww"}],
//     "pos":["hn","bj"],
//     "sex":"男"
// } 
```

### 对象拷贝

#### 描述

对对象进行深拷贝，不仅复制了对象属性或数组元素本身, 还复制了指向的对象(使用递归)

#### 用法

| #   | 解释                      |
|:---:|:-----------------------:|
| 语法  | `PliLib.copy(obj)` |
| 参数  | obj:需要拷贝的对象             |
| 返回值 | 返回拷贝后的新对象               |

#### 示例

```javascript
let obj = { person: [{ name: 'zs' }, { name: 'ls' }], pos: 'hn' }
let res = PliLib.copy(obj);
res['person'][1]['name'] = 'ww';
console.log(res); // {"person":[{"name":"zs"},{"name":"ww"}],"pos":"hn"}
console.log(obj); // {"person":[{"name":"zs"},{"name":"ls"}],"pos":"hn"}
```
<hr>

## 函数封装

### call()封装

#### 描述

改变函数this指向并进行函数调用

#### 用法

| #   | 解释                                            |
|:---:|:---------------------------------------------:|
| 语法  | `PliLib.call(fn,obj,value)`              |
| 参数  | fn:调用的函数</br>obj:this的指向</br>value:传入的参数</br> |
| 返回值 | 返回函数调用后的结果                                    |

#### 示例

```javascript
function add(a,b){
    console.log(a+b+this.c)
}
let obj={
    c:5
}
PliLib.call(add,obj,5,5); // 15
```

### apply()封装

#### 描述

改变函数this指向并进行函数调用

#### 用法

| #   | 解释                                                     |
|:---:|:------------------------------------------------------:|
| 语法  | `PliLib.apply(fn,obj,value)`                      |
| 参数  | fn:调用的函数</br>obj:this的指向</br>value:传入的参数(只能是数组形式)</br> |
| 返回值 | 返回函数调用后的结果                                             |

#### 示例

```javascript
function add(a,b){
    console.log(a+b+this.c)
}
let obj={
    c:5
}
PliLib.apply(add,obj,[5,5]); // 15
```

### bind()封装

#### 描述

改变函数this指向并进行函数调用

#### 用法

| #   | 解释                                                                    |
|:---:|:---------------------------------------------------------------------:|
| 语法  | `PliLib.bind(fn,obj,value)(value1)`                              |
| 参数  | fn:调用的函数</br>obj:this的指向</br>value:传入的参数</br>value1:后续传入的参数(非必要)</br> |
| 返回值 | 返回函数调用后的结果                                                            |

#### 示例

```javascript
function add(a,b){
    console.log(a+b+this.c)
}
let obj={
    c:5
}
PliLib.bind(add,obj,5,5)(); // 15
PliLib.bind(add,obj,5)(5); // 15
```

### 节流

#### 描述

连续触发事件但是在 n 秒中只执行一次函数

#### 用法

| #   | 解释                                    |
|:---:|:-------------------------------------:|
| 语法  | `PliLib.throttle(callback,wait)` |
| 参数  | callback:需要执行的函数</br>wait:等待的时间</br>  |
| 返回值 | 返回一个执行函数                              |

#### 示例

```javascript
window.addEventListener('scroll',
  PliLib.throttle(function () {
    console.log(window);
  }, 1000)
)
```

### 防抖

#### 描述

触发事件后在 n 秒内函数只能执行一次，如果在 n 秒内又触发了事件，则会重新计算函数执行时间。

#### 用法

| #   | 解释                                    |
|:---:|:-------------------------------------:|
| 语法  | `PliLib.debounce(callback,time)` |
| 参数  | callback:需要执行的函数</br>time:等待的时间</br>  |
| 返回值 | 返回函数调用后的结果                            |

#### 示例

```html
<input type="text">
<script>
    PliLib.intro()
    document.querySelector('input').onkeydown =
        PliLib.debounce(function (e) {
            console.log(e.keyCode);
        }, 1000)
</script>
```

## 工具

### 获取数据类型

#### 描述

通过调用方法来判断某个值的类型

#### 用法

| #   | 解释                          |
|:---:|:---------------------------:|
| 语法  | `PliLib.typeOf(value)` |
| 参数  | value:需要判断的值                |
| 返回值 | 返回获取对应的数据类型                 |

#### 示例

```javascript
let a = {},
    b = [],
    c = null,
    d;
console.log(PliLib.typeOf(a)) // object
console.log(PliLib.typeOf(b)) // array
console.log(PliLib.typeOf(c)) // null
console.log(PliLib.typeOf(d)) // undefined
```

### 获取当前时间

#### 描述

通过调用方法来获取当前时间

#### 用法

| #   | 解释                          |
|:---:|:---------------------------:|
| 语法  | `PliLib.nowTime(type)` |
| 参数  | type:获取时间的格式 目前支持20种不同形式的时间 |
| 返回值 | 返回当前的时间                     |

#### 示例

```javascript
console.log(PliLib.nowTime('yyyy-mm-dd h:m:s')); // 2021-11-4 14:30:33
console.log(PliLib.nowTime('yyyy/mm/dd h:m')); // 2021/11/4 14:30
```

### 随机数生成

#### 描述

通过调用方法来获取随机数

#### 用法

| #   | 解释                                           |
|:---:|:--------------------------------------------:|
| 语法  | `PliLib.createRdm(min,max,Integer)`     |
| 参数  | min:最小值,max:最大值,Integer:是否为整数 默认值为 1 非整数为 -1 |
| 返回值 | 返回当前的时间                                      |

#### 示例

```javascript
console.log(PliLib.createRdm(1,100)); // 80
console.log(PliLib.createRdm(1,100,-1)); // 69.94
```

### 随机颜色生成

#### 描述

通过调用方法来随机获取颜色，目前支持rgb和hex两种格式

#### 用法

| #   | 解释                            |
|:---:|:-----------------------------:|
| 语法  | `PliLib.colorRdm(type)`  |
| 参数  | type:获取颜色的格式有rgb和hex两种，默认为rgb |
| 返回值 | 返回颜色的值                        |

#### 示例

```javascript
console.log(PliLib.colorRdm()); // (153,17,88)
console.log(PliLib.colorRdm('hex')); // #DF80CB
```

### 颜色格式转换

#### 描述

通过调用该方法来进行颜色的转换目前仅支持rgb,hex相互转换

#### 用法

| #    | 解释                                              |
|:----:|:-----------------------------------------------:|
| 语法   | `PliLib.Rgb_Hex(data,type)`                |
| 参数   | data:转换前的颜色数据</br>type:获取颜色的格式有rgb和hex两种，默认为rgb |
| 返回值  | 返回转换后的颜色值                                       |
| 支持格式 | rgb:(255,255,255)</br>hex:#FFFFFF               |

#### 示例

```javascript
console.log(PliLib.Rgb_Hex('(255,255,255)','hex')); // #FFFFFF
console.log(PliLib.Rgb_Hex('#FFFFFF','rgb')); // (255,255,255)
```

### 字符串回文

#### 描述

判断某一字符串是否是回文字符串

#### 用法

| #   | 解释                            |
|:---:|:-----------------------------:|
| 语法  | `PliLib.palindrome(str)` |
| 参数  | str:需要判断的字符串                  |
| 返回值 | 如果是回文字符串则返回true，反之返回false     |

#### 示例

```javascript
let str = '12321';
let str2 = '12345';

console.log(PliLib.palindrome(str)); // true
console.log(PliLib.palindrome(str2)); // false
```

### 字符串倒序

#### 描述

生成给定字符串的倒序字符串

#### 用法

| #   | 解释                            |
|:---:|:-----------------------------:|
| 语法  | `PliLib.reverseStr(str)` |
| 参数  | str:需要进行倒序的字符串                |
| 返回值 | 返回传入字符串的倒序字符串                 |

#### 示例

```javascript
let str = '倒叙字符串';

console.log(PliLib.reverseStr(str)); // 串符字序倒
```

### 字符串截取

#### 描述

生成给定字符串进行截取，其他部分用 ... 代替

#### 用法

| #   | 解释                              |
|:---:|:-------------------------------:|
| 语法  | `PliLib.truncate(str,num)` |
| 参数  | str:需要进行截取的字符串</br>num:截取的字数    |
| 返回值 | 返回截取后的字符串                       |

#### 示例

```javascript
let str = '字符串截取字符串截取字符串截取字符串截取';

console.log(PliLib.truncate(str,9)); // 字符串截取字符串截...
```

### 文件分类

#### 描述

后端传来的连接格式可能不分通过调用该方法来可以对链接进行分类

#### 用法

| #   | 解释                          |
|:---:|:---------------------------:|
| 语法  | `PliLib.filType(file)` |
| 参数  | file:包含文件链接的数组              |
| 返回值 | 返回分类后的链接                    |

#### 示例

```javascript
let file = [
    '120201197411173093.mp3',
    '120201197411173093.txt',
    '130201198409273008.mp4',
    '210201200101149246.jpg',
    '210201200101149246.m4v',
    '210201200101149246.pdf',
    '21020120010asda../\114as46.png',
    '21020120010114as46.docx',
    '2102012001011)_49246.zip',
    '460101198309075187.gif',
]
console.log(PliLib.filType(file));
// {
//   video: [ '130201198409273008.mp4', '210201200101149246.m4v' ],
//   audio: [ '120201197411173093.mp3' ],
//   word: [
//     '120201197411173093.txt',
//     '210201200101149246.pdf',
//     '21020120010114as46.docx'
//   ],
//   photo: [
//     '210201200101149246.jpg',
//     '21020120010asda../Las46.png',
//     '460101198309075187.gif'
//   ],
//   compressed: [ '2102012001011)_49246.zip' ],
//   other: []
// }
```

### 文字转拼音

#### 描述

通过调用方法来获取返回的拼音

#### 用法

| #   | 解释                                                    |
|:---:|:-----------------------------------------------------:|
| 语法  | `PliLib.pinYin(value,type)`                      |
| 参数  | value:需要转化的文字</br>type:是否需要首字母大写，1 大写 -1 小写 默认为1首字母大写 |
| 返回值 | 返回生成的拼音                                               |

#### 示例

```javascript
console.log(PliLib.pinYin('你好啊!')); // NiHaoA
console.log(PliLib.pinYin('你好啊!',-1)); // nihaoa
```