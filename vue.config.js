//配置别名
module.exports = {
    configureWebpack: {
      resolve: {//解决路劲问题
        alias: {//配置别名
          'assets': '@/assets',
          'common': '@/common',
          'components': '@/components',
          'network': '@/network',
          'views': '@/views',
        }
      }
    }
  }
  
  