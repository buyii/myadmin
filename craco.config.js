const CracoLessPlugin = require('craco-less');

module.exports = {
  devServer:{
    port: 3600,
  },
  plugins: [
    {
      plugin: CracoLessPlugin,
      options: {
        lessLoaderOptions: {
          lessOptions: {
            modifyVars: { 
              '@primary-color': '#08979c',
              '@menu-bg': '#006d75',
              '@menu-item-color': '#fff',
              '@menu-highlight-color': '#fff',
              '@menu-item-active-bg': '#13c2c2',
              '@layout-sider-background': '#006d75',
            },
            javascriptEnabled: true,
          },
        },
      },
    },
  ],
};