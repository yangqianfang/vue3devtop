import { Random } from 'mockjs';
import { resultSuccess, doCustomTimes, resultError } from '../_util';

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
    method: 'get',
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
  //发布版本
  {
    url: '/api/publish/operation',
    timeout: 1000,
    method: 'post',
    response: () => {
      return resultSuccess({});
    },
  },
];
