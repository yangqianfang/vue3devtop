import { Random } from 'mockjs';
import { resultSuccess, resultFNSuccess, doCustomTimes, resultError } from '../_util';

const consoleInfo = {
  //访问量
  visits: {
    dayVisits: Random.float(10000, 99999, 2, 2),
    rise: Random.float(10, 99),
    decline: Random.float(10, 99),
    amount: Random.float(99999, 999999, 3, 5),
  },
  //销售额
  saleroom: {
    weekSaleroom: Random.float(10000, 99999, 2, 2),
    amount: Random.float(99999, 999999, 2, 2),
    degree: Random.float(10, 99),
  },
  //订单量
  orderLarge: {
    weekLarge: Random.float(10000, 99999, 2, 2),
    rise: Random.float(10, 99),
    decline: Random.float(10, 99),
    amount: Random.float(99999, 999999, 2, 2),
  },
  //成交额度
  volume: {
    weekLarge: Random.float(10000, 99999, 2, 2),
    rise: Random.float(10, 99),
    decline: Random.float(10, 99),
    amount: Random.float(99999, 999999, 2, 2),
  },
};

const tableList = (pageSize) => {
  const result: any[] = [];
  doCustomTimes(pageSize, () => {
    result.push({
      appid: '@integer(10,999999)',
      updateTime: '@datetime',
      list: [
        {
          label: '1.0.1',
          value: '1.0.1',
        },
        {
          label: '1.20.99',
          value: '1.20.99',
        },
        {
          label: '1.40.59',
          value: '1.40.59',
        },
        {
          label: '1.30.2',
          value: '1.30.2',
        },
      ],
      'appname|1': ['运营平台WEB	', '运维H5	', '销售H5	', '停车场web	'],
      'gitname|1': ['manage-web		', 'operation	', 'distribution	', 'app-web	'],
      'group|1': ['web', 'app	'],
      'currversion|1': ['1.0.1', '1.20.99', '1.40.59'],
    });
  });
  return result;
};

const publishList = {
  adminId: 1,
  apps: [
    {
      id: 11,
      name: 'wechat666',
      type: 'api',
      members: '王爽',
      last_version: 'stable-1.0.6',
      version: 'stable-1.0.6',
      api: 'http://docker.fntest.ifengniao.net:6118/v2-beta/projects/1a5/services/1s323',
      project: 'wechat',
      groups: 'wechat',
      latest_time: '2020-03-12T16:25:58+08:00',
      upgrade_time: '2022-06-21T18:40:14+08:00',
      updated_time: '2022-06-24T15:03:32+08:00',
    },
    {
      id: 19,
      name: '数据统计API',
      type: 'api',
      members: '王爽',
      last_version: '1.6.5',
      version: '1.6.5',
      api: 'http://docker.fntest.ifengniao.net:6118/v2-beta/projects/1a5/services/1s511',
      project: 'bi',
      groups: 'bi',
      latest_time: '2022-06-24T15:09:47+08:00',
      upgrade_time: '2022-06-24T15:11:41+08:00',
      updated_time: '2022-06-24T16:13:51+08:00',
    },
    {
      id: 20,
      name: '数据统计Crontab',
      type: 'crontab',
      members: '王爽',
      last_version: '',
      version: 'crontab-1.0.8',
      api: 'http://docker.fntest.ifengniao.net:6001/v2-beta/projects/1a5/services/1s122',
      project: 'bi',
      groups: 'bi',
      latest_time: '2020-03-17T10:18:32+08:00',
      upgrade_time: '2020-03-17T10:53:27+08:00',
      updated_time: '2022-06-24T15:03:27+08:00',
    },
    {
      id: 22,
      name: 'opserver',
      type: 'api',
      members: 'jason,tom',
      last_version: '',
      version: '1.6.5',
      api: 'http://docker.fntest.ifengniao.net:6118/v2-beta/projects/1a5/services/1s511',
      project: 'opserver',
      groups: 'opserver',
      latest_time: '2022-06-20T13:12:11+08:00',
      upgrade_time: '2022-06-20T13:12:11+08:00',
      updated_time: '2022-06-20T13:31:18+08:00',
    },
    {
      id: 27,
      name: 'yang0111',
      type: 'web',
      members: 'yang,admin',
      last_version: '',
      version: '1.0.1',
      api: 'api.com',
      project: 'git.com',
      groups: 'web',
      latest_time: '2022-06-22T14:46:43+08:00',
      upgrade_time: '2022-06-22T14:46:43+08:00',
      updated_time: '2022-06-22T14:47:51+08:00',
    },
    {
      id: 29,
      name: 'yang0023',
      type: 'crontab',
      members: 'a,b',
      last_version: '',
      version: 'v1021',
      api: 'api.com',
      project: 'git .com',
      groups: 'old',
      latest_time: '2022-06-24T14:31:48+08:00',
      upgrade_time: '2022-06-24T14:31:48+08:00',
      updated_time: '2022-06-24T14:32:12+08:00',
    },
    {
      id: 30,
      name: 'test33',
      type: 'web',
      members: 'fdas',
      last_version: '',
      version: 'dafdsa',
      api: 'faf',
      project: 'fdas',
      groups: 'opserver',
      latest_time: '2022-06-24T15:21:00+08:00',
      upgrade_time: '2022-06-24T15:21:00+08:00',
      updated_time: '2022-06-24T15:21:40+08:00',
    },
  ],
  groups: ['bi', 'old', 'opserver', 'web', 'wechat'],
  isMobile: false,
  nickname: 'Admin',
  title: '发布升级',
  userId: 'admin',
};

export default [
  //主控台 卡片数据
  {
    url: '/api/dashboard/console',
    timeout: 1000,
    method: 'get',
    response: () => {
      return resultSuccess(consoleInfo);
    },
  },
  //表格数据列表
  {
    url: '/api/dashboard/list',
    timeout: 1000,
    method: 'post',
    response: ({ query }) => {
      const { page = 1, pageSize = 10 } = query;
      const list = tableList(Number(pageSize));
      return resultSuccess({
        page: Number(page),
        pageSize: Number(pageSize),
        pageCount: 10,
        list,
      });
    },
  },
  //图片表数据
  {
    url: '/api/publish/getChartData',
    timeout: 1000,
    method: 'get',
    response: () => {
      return resultSuccess({
        x: ['1', '10001', '200', '10002', '90005', '10012', '90006'],
        series: ['3958', '2893', '1146', '450', '258', '166', '56'],
      });
    },
  },
  //list数据
  /*  {
    url: '/api/publish/list',
    timeout: 1000,
    method: 'post',
    response: () => {
      return resultSuccess(publishList);
    },
  }, */
];
