import { IConfig } from 'umi-types';

// ref: https://umijs.org/config/
const config: IConfig = {
  treeShaking: true,
  routes: [
    {
      // exact: true,
      path: '/',
      component: '../layouts/index', //模板文件位置
      routes: [
        {
          path: '/',
          component: '../pages/welcome/index',
        },
        { path: '/userlist', component: '../pages/userlist/index.tsx' }, 
        { path: '/editUser', component: '../pages/editUser/index.tsx' }, 
      ],
    },
  ],
  plugins: [
    // ref: https://umijs.org/plugin/umi-plugin-react.html
    [
      'umi-plugin-react',
      {
        antd: true,
        dva: {
          immer: true,
        },
        dynamicImport: false,
        title: 'baseUmi',
        dll: false,

        routes: {
          exclude: [/models\//, /services\//, /model\.(t|j)sx?$/, /service\.(t|j)sx?$/, /components\//],
        },
      },
    ],
  ],
};

export default config;
