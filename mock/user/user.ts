import Mock from 'mockjs';
import { resultSuccess } from '../_util';

const Random = Mock.Random;

const token = Random.string('upper', 32, 32);

/* const adminInfo = {
  userId: '1',
  username: 'admin',
  realName: 'Admin',
  avatar: Random.image(),
  desc: 'manager',
  password: Random.string('upper', 4, 16),
  token,
  permissions: [
    // {
    //   label: '主控台',
    //   value: 'dashboard_console',
    // },
    // {
    //   label: '监控页',
    //   value: 'dashboard_monitor',
    // },
    // {
    //   label: '工作台',
    //   value: 'dashboard_workplace',
    // },
    // {
    //   label: '基础列表',
    //   value: 'basic_list',
    // },
    // {
    //   label: '基础列表删除',
    //   value: 'basic_list_delete',
    // },
  ],
}; */
const adminInfo = {
  id: 1,
  username: 'admin',
  nickname: 'Admin',
  cid: 1,
  enable: 1,
  publish: 'old@web@wechat@opserver@manage@bi',
  created_time: '2020-03-08T21:53:32+08:00',
  updated_time: '2022-06-24T15:00:25+08:00',
};

const publicData = {
  enables: ['old', 'web', 'wechat', 'opserver', 'manage', 'bi'],
  groups: {
    base: '基础服务',
    bi: '数据统计',
    manage: '运营平台',
    old: '管理后台',
    opserver: '运维端',
    web: '前端项目',
    wechat: '用户端',
  },
  title: {
    crontab: '定时任务管理',
    index: '首页',
    log: '日志管理',
    login: '登录中心',
    publish: '发布升级',
    user: '用户管理',
  },
  type: ['api', 'web', 'crontab'],
};

const editUserInfo = {
  adminId: 1,
  groups: ['bi', 'old', 'opserver', 'web', 'wechat'],
  nickname: 'Admin666',
  selects: ['web', 'wechat', 'opserver'],
  title: '用户管理',
  user: {
    id: 26,
    username: 'yang001666',
    nickname: 'yangqiafnfang',
    cid: 1,
    enable: 1,
    publish: 'web@wechat@opserver',
    created_time: '2022-06-23T18:09:57+08:00',
    updated_time: '2022-06-24T15:02:44+08:00',
  },
  userId: 'admin',
};
const userList = {
  adminId: 1,
  isMobile: false,
  list: [
    {
      id: 1,
      username: 'admin6',
      nickname: 'Admin',
      cid: 1,
      enable: 1,
      publish: 'old@web@wechat@opserver@manage@bi',
      created_time: '2020-03-08T21:53:32+08:00',
      updated_time: '2022-06-24T15:00:25+08:00',
    },
    {
      id: 2,
      username: 'jason',
      nickname: '王爽',
      cid: 1,
      enable: 1,
      publish: 'bi@opserver@wechat',
      created_time: '2020-03-08T22:13:04+08:00',
      updated_time: '2022-06-21T17:41:02+08:00',
    },
    {
      id: 9,
      username: 'demo',
      nickname: '测试用户',
      cid: 2,
      enable: 1,
      publish: 'wechat',
      created_time: '2020-03-09T11:34:23+08:00',
      updated_time: '2022-06-20T16:38:26+08:00',
    },
    {
      id: 13,
      username: 'tom',
      nickname: 'tom',
      cid: 2,
      enable: 1,
      publish: 'bi@wechat',
      created_time: '2022-06-20T10:29:35+08:00',
      updated_time: '2022-06-20T10:31:52+08:00',
    },
    {
      id: 15,
      username: 'lucy',
      nickname: 'lucy',
      cid: 2,
      enable: 1,
      publish: 'wechat@opserver@web',
      created_time: '2022-06-20T13:41:13+08:00',
      updated_time: '2022-06-24T16:14:11+08:00',
    },
    {
      id: 25,
      username: 'lily',
      nickname: 'lily',
      cid: 2,
      enable: 1,
      publish: 'wechat@opserver@manage@web',
      created_time: '2022-06-20T16:37:57+08:00',
      updated_time: '2022-06-24T16:14:01+08:00',
    },
    {
      id: 26,
      username: 'yang001',
      nickname: 'yangqiafnfang',
      cid: 1,
      enable: 1,
      publish: 'web@wechat@opserver',
      created_time: '2022-06-23T18:09:57+08:00',
      updated_time: '2022-06-24T15:02:44+08:00',
    },
  ],
  nickname: 'Admin',
  title: '用户管理',
  userId: 'admin',
};

export default [
  // 登录
  /* {
    url: '/api/login/verify',
    timeout: 1000,
    method: 'post',
    response: () => {
      return resultSuccess({});
    },
  },
  {
    url: '/api/admin/user',
    timeout: 1000,
    method: 'post',
    response: () => {
      // const token = getRequestToken(request);
      // if (!token) return resultError('Invalid token');
      return resultSuccess(adminInfo);
    },
  },
  {
    url: '/api/config/params',
    timeout: 1000,
    method: 'post',
    response: () => {
      return resultSuccess(publicData);
    },
  },
  {
    url: '/api/admin/get',
    timeout: 1000,
    method: 'post',
    response: () => {
      return resultSuccess(editUserInfo);
    },
  },

  {
    url: '/api/admin/list',
    timeout: 1000,
    method: 'post',
    response: () => {
      return resultSuccess(userList);
    },
  }, */
];
