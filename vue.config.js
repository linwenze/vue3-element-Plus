/*
 * @Author: your name
 * @Date: 2021-02-23 15:23:40
 * @LastEditTime: 2021-03-01 11:35:06
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /official/vue.config.js
 */
const path = require('path')
function resolve(dir) {
  return path.join(__dirname, dir)
}
module.exports = {
  chainWebpack: config => {
    // 添加别名
    config.resolve.alias
      // .set('vue$', 'vue/dist/vue.esm.js')
      .set('@', resolve('src'))
      .set('@assets', resolve('src/assets'))
      // .set('@scss', resolve('src/assets/scss'))
      .set('@components', resolve('src/components'))
      // .set('@plugins', resolve('src/plugins'))
      // .set('@views', resolve('src/views'))
      // .set('@router', resolve('src/router'))
      // .set('@store', resolve('src/store'))
      // .set('@layouts', resolve('src/layouts'))
      .set('@static', resolve('src/static'))
      config.resolve.symlinks(true); // 修复热更新失效
    config.productionGzip = true
  },
  configureWebpack: config => {
    config.performance={
      hints:'warning',
      //入口起点的最大体积 整数类型（以字节为单位）
      maxEntrypointSize: 50000000,
      //生成文件的最大体积 整数类型（以字节为单位 300k）
      maxAssetSize: 30000000,
      //只给出 js 文件的性能提示
      assetFilter: function(assetFilename) {
          return assetFilename.endsWith('.js');
      }
    }
    // 开发环境不需要gzip
    if (process.env.NODE_ENV === 'production') {
      config.plugins.push(
        new CompressionWebpackPlugin({
          // 正在匹配需要压缩的文件后缀
          test: /\.(js|css|svg|woff|ttf|json|html)$/,
          // 大于10kb的会压缩
          threshold: 10240
        })
      )
    }
    // 是否开启分析
    if (process.env.npm_config_report) {
      config.plugins.push(new BundleAnalyzerPlugin())
    }
  },

  // configureWebpack: (config) => {
  //   config.performance = {
  //     hints: false
  //   }
  //   devtool: process.env.NODE_ENV === 'production' ? 'false' : 'source-map'// 开发环境开启 source-map
  // },
  
  // 配置proxy代理解决跨域问题
  devServer: {
    // overlay: { // 让浏览器 overlay 同时显示警告和错误
    //   warnings: true,
    //   errors: true
    // },
    open: true, // 是否打开浏览器
    host: '0.0.0.0',
    port: '8080', // 代理端口
    // https: false,
    hotOnly: true, // 热更新
    proxy: {
      '/api': {
        target: 'http://localhost:5757', // 目标代理接口地址
        secure: false,
        changeOrigin: true, // 开启代理，在本地创建一个虚拟服务端
        // ws: true, // 是否启用websockets
        pathRewrite: {
          '^/api': '/api'
        }
      }
    }
  }
  
}