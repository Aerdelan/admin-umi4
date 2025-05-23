export default [
  {
    path: '/',
    redirect: '/home',
  },
  {
    name: '首页',
    path: '/home',
    component: './Home',
  },
  {
    name: '权限演示',
    path: '/access',
    component: './Access',
  },
  {
    name: ' CRUD 示例',
    path: '/table',
    component: './Table',
  },
  {
    name: '文档打印',
    path: '/print',
    component: './Print',
  },
  {
    name: '用户添加',
    path: '/userAdd',
    component: './UserAdd',
  },
];
