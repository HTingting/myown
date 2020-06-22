module.exports = {
    // 修改 src 为 examples
    pages: {
        index: {
            entry: "src/example/main.js",
            template: "public/index.html",
            filename: "index.html"
        }
    },
    // 扩展 webpack 配置，使 packages 加入编译
    chainWebpack: config => {
        config.module
            .rule('js')
            .include
            .add('/components/')
            .end()
            .use('babel')
            .loader('babel-loader')
            .tap(options => {
                // 修改它的选项...
                return options
            })
    },
    devServer: { // webpack-dev-server的配置项
        open: true,  // 自动打开浏览器
        hot: true, // 实时打包编译
        inline: true,  // 表示实时刷新浏览器
        port: '8020'   // 指定打开浏览器的端口号
    }
};