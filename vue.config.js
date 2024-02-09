const { defineConfig } = require('@vue/cli-service');

module.exports = defineConfig({
  transpileDependencies: true,
  chainWebpack: (config) => {
    config.plugin('html').tap((args) => {
      args[0].title = 'TwoTIRE貳輪精品';
      return args;
    });
    config.module
      .rule('vue')
      .use('vue-loader')
      .tap((options) => ({
        ...options,
        compilerOptions: {
          // 將所有帶 swiper- 的標籤名都視為自定義元素
          isCustomElement: (tag) => tag.startsWith('swiper-'),
        },
      }));
  },
});
