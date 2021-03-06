const path = require('path');
function resolve (dir) {
  return path.join(__dirname, dir)
}

// 项目的主要配置文件
module.exports = {
  chainWebpack: (config)=>{
    //修改文件引入自定义路径
    config.resolve.alias
      .set('@', resolve('src'))
      .set('assets', resolve('src/assets'))
      .set('common', resolve('src/common'))
      .set('components', resolve('src/components'))
      .set('network', resolve('src/network'))
      .set('views', resolve('src/views'))
  }
}

