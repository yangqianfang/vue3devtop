import { Random } from 'mockjs';
import { resultSuccess, doCustomTimes, resultError } from '../_util';

const applist = [
  {
    label: 'manage',
    value: 'manage',
    pullapps: 'Bi-php72-fpm-1',
  },
  {
    label: 'opserver',
    value: 'opserver',
    pullapps: 'Bi-php72-fpm-2',
  },
  {
    label: 'wechat',
    value: 'wechat',
    pullapps: 'Bi-php72-fpm-3',
  },
];

export default [
  //主控台 卡片数据
  {
    url: '/api/log/apiapplist',
    timeout: 1000,
    method: 'post',
    response: () => {
      return resultSuccess(applist);
    },
  },

  //log list
  {
    url: '/api/logs/apiPullLogs',
    timeout: 1000,
    method: 'post',
    response: () => {
      return resultSuccess('success');
    },
  },
  //下载log
  {
    url: '/api/logs/apiGrepLogs',
    timeout: 1000,
    method: 'post',
    response: () => {
      return resultSuccess(
        'http://docker.ifengniao.net:9090/static/download/app_20220616142449.zip'
      );
    },
  },
];
