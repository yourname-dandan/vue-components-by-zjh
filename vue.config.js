const path = require("node:path")

module.exports = {
    // configuraWebpack: {
    //     resolve: {
    //         alias: {
    //             '@dldment' : '@/components/dldment'
    //         }
    //     }
    // }

    chainWebpack:config=>{
    	config.resolve.alias
    	.set('@',path.resolve(__dirname,'./src'))  
  },

    lintOnSave: true,

    devServer: {
        open: false,//open 在devServer启动且第一次构建完成时，自动用我们的系统的默认浏览器去打开要开发的网页
        host: '127.0.0.1',//默认是 localhost。如果你希望服务器外部可访问，指定如下 host: '0.0.0.0'，设置之后之后可以访问ip地址
        port: 8001,
        hot: true,//hot配置是否启用模块的热替换功能，devServer的默认行为是在发现源代码被变更后，通过自动刷新整个页面来做到事实预览，开启hot后，将在不刷新整个页面的情况下通过新模块替换老模块来做到实时预览。
        hotOnly: false,// hot 和 hotOnly 的区别是在某些模块不支持热更新的情况下，前者会自动刷新页面，后者不会刷新页面，而是在控制台输出热更新失败
        // proxy: {
        //     '/': {
        //         target: 'http://xxxx:8080', //目标接口域名
        //         secure: false, //false为http访问，true为https访问
        //         changeOrigin: true, //是否跨域
        //         pathRewrite: {
        //             '^/': '/' //重写接口
        //         }
        //     }
        // }, // 设置代理
    },

}