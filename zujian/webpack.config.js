
const path =require('path')
const HtmlWebPackPlugin = require('html-webpack-plugin')//内存中生成index页面的插件,并且追加路径

const htmlPlugin = new HtmlWebPackPlugin({
    template:path.join(__dirname,'./src/index.html'),//源文件
    filename:'index.html'//生成的内存中首页的名称
})



//向外暴露打包的配置对象，node语法
//webpack 只能打包处理js文件，所以配置loader
module.exports={
    mode:'development',//development   production

    //默认打包入口src/index.js

    plugins: [
        htmlPlugin //会在内存中生成页面，并且将main。js加入路径
    ],
    module: {//第三方模块,配置规则
        rules: [//第三方匹配规则
            {test:/\.js|jsx$/,use:'babel-loader',exclude:/node_modules/},
            {test:/\.css|less$/,use:['style-loader','css-loader','less-loader'],exclude:/node_modules/},
        //    {test:/\.css|sass$/,use:['style-loader','css-loader','sass-loader'],exclude:/node_modules/},
        ]
    }
}