const path = require('path')
module.exports={
    // 模式
    mode:'development',
    // 入口
    entry:'./src/index.js',
    // 出口
    output:{
        // 打包文件夹
        path:path.resolve(__dirname,'dist'),
        // 打包文件
        filename:'plumli_utils.js',
        // 向外暴露的对象名称
        library:'pliUtils',
        // 打包生成库可以通过esm/commonjs/requirejs的语法引入
        libraryTarget:'umd',
    }

    
}