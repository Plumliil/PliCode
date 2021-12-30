
<!-- ![](https://gitee.com/Plumliil/images/raw/master/MdPicture/author.png) -->

<div
    align=center
     style="text-align-center"
    >
    <img src="https://gitee.com/Plumliil/images/raw/master/MdPicture/author.png"  style="border-radius:50%">
</div>
<div align=center>
    <a href="https://www.plumli.xyz" style="font-size:30px;font-weight:700;text-decoration: none;" title="PlumLi">PlumLi</a>
</div>
<!-- <h1 style="text-align:center">常用函数库</h1> -->

# 常用函数库

## 安装引用
### 全部引用
~~~javascript

~~~
### 部分引用
~~~javascript

~~~
## 数组方法
### 获取最大值
### 获取最小值
### 元素求和
### 元素排序
### 数组扁平化
## 图片方法

## 动画

## 工具

### 获取当前时间
#### 描述
通过调用方法来获取当前时间
#### 用法
| # | 解释 |
| :---: | :---: |
语法 | `pliNowTime(type)`
参数 | type:获取时间的格式 目前支持20种不同形式的时间 
返回值 | 返回当前的时间 
#### 示例
~~~javascript
console.log(pliNowTime('yyyy-mm-dd h:m:s')); // 2021-11-4 14:30:33
console.log(pliNowTime('yyyy/mm/dd h:m')); // 2021/11/4 14:30
~~~


### 随机数生成 
#### 描述
通过调用方法来获取随机数
#### 用法
| # | 解释 |
|:--:|:--:|
语法 | `pliCreateRdm(min,max,Integer)`|
参数 | min:最小值,max:最大值,Integer:是否为整数 默认值为 1 非整数为 -1
返回值 | 返回当前的时间 
#### 示例
~~~javascript
console.log(pliCreateRdm(1,100)); // 80
console.log(pliCreateRdm(1,100,-1)); // 69.94
~~~

### 随机颜色生成 
#### 描述
通过调用方法来随机获取颜色，目前支持rgb和hex两种格式
#### 用法
| # | 解释 |
| :---: | :---: |
语法 | `pliColorRdm(type)`
参数 | type:获取颜色的格式有rgb和hex两种，默认为rgb  
返回值 | 返回颜色的值
#### 示例
~~~javascript
console.log(pliColorRdm()); // (153,17,88)
console.log(pliColorRdm('hex')); // #DF80CB
~~~

### 颜色格式转换
#### 描述
通过调用该方法来进行颜色的转换目前仅支持rgb,hex相互转换
#### 用法
| # | 解释 |
| :---: | :---: |
语法 | `pliRgb_Hex(data,type)`
参数 | data:转换前的颜色数据</br>type:获取颜色的格式有rgb和hex两种，默认为rgb  
返回值 | 返回转换后的颜色值
支持格式|rgb:(255,255,255)</br>hex:#FFFFFF
#### 示例
~~~javascript
console.log(pliRgb_Hex('(255,255,255)','hex')); // #FFFFFF
console.log(pliRgb_Hex('#FFFFFF','rgb')); // (255,255,255)
~~~
### 文件分类
#### 描述
后端传来的连接格式可能不分通过调用该方法来可以对链接进行分类
#### 用法
| # | 解释 |
| :---: | :---: |
语法 | `pliFilType(file)`
参数 | file:包含文件链接的数组
返回值 | 返回分类后的链接
#### 示例
~~~javascript
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
console.log(pliFilType(file));
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
~~~