import { RouteRecordRaw } from 'vue-router';
import { Layout } from '@/router/constant';
import { UsergroupAddOutlined } from '@vicons/antd';
import { renderIcon } from '@/utils/index';

/**
 * @param name 路由名称, 必须设置,且不能重名
 * @param meta 路由元信息（路由附带扩展信息）
 * @param redirect 重定向地址, 访问这个路由时,自定进行重定向
 * @param meta.disabled 禁用整个菜单
 * @param meta.title 菜单名称
 * @param meta.icon 菜单图标
 * @param meta.keepAlive 缓存该路由
 * @param meta.sort 排序越小越排前
 *
 * */
const routes: Array<RouteRecordRaw> = [
  {
    path: '/system',
    name: 'System',
    redirect: '/system/user-list',
    component: Layout,
    meta: {
      title: '系统管理',
      icon: renderIcon(UsergroupAddOutlined),
      sort: 2,
      permissions: ['system_user'],
    },
    children: [
      {
        path: 'user-list',
        name: 'user-list',
        meta: {
          title: '用户管理',
          permissions: ['system_user'],
        },
        component: () => import('@/views/user/index.vue'),
      },
      {
        path: 'adduser/:id?',
        name: 'adduser',
        meta: {
          title: '添加用户',
          hidden: true,
          activeMenu: 'user-list',
        },
        component: () => import('@/views/user/add.vue'),
      },
    ],
  },
];

export default routes;
