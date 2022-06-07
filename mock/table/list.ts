import { Random } from 'mockjs';
import { resultSuccess, doCustomTimes } from '../_util';

const tableList = (pageSize) => {
  const result: any[] = [];
  doCustomTimes(pageSize, () => {
    result.push({
      id: '@integer(10,999999)',
      beginTime: '@datetime',
      endTime: '@datetime',
      'list|3': [
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
      address: '@city()',
      name: '@cname()',
      avatar: Random.image('400x400', Random.color(), Random.color(), Random.first()),
      date: `@date('yyyy-MM-dd')`,
      time: `@time('HH:mm')`,
      'no|100000-10000000': 100000,
      'status|1': [true, false],
    });
  });
  return result;
};

export default [
  //表格数据列表
  {
    url: '/api/table/list',
    timeout: 1000,
    method: 'get',
    response: ({ query }) => {
      const { page = 1, pageSize = 10 } = query;
      const list = tableList(Number(pageSize));
      return resultSuccess({
        page: Number(page),
        pageSize: Number(pageSize),
        pageCount: 60,
        list,
      });
    },
  },
];
