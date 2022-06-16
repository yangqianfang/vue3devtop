import { Random } from 'mockjs';
import { resultSuccess, doCustomTimes, resultError } from '../_util';

const applist = [
  {
    label: 'manage',
    value: 'manage',
  },
  {
    label: 'opserver',
    value: 'opserver',
  },
  {
    label: 'wechat',
    value: 'wechat',
  },
];

const logList = [
  { name: 'app.log', number: '9316' },
  { name: 'app.log.1', number: '68495' },
  { name: 'app.log.2', number: '68775' },
  { name: 'async-coupon.log', number: '26' },
  { name: 'async-excute.log', number: '6970' },
  { name: 'auto-oil.log', number: '84607' },
  { name: 'auto-stop.log', number: '125953' },
  { name: 'high-sea-history.log', number: '32529' },
  { name: 'high-sea.log', number: '1311928' },
  { name: 'prepare-data.log', number: '10281' },
  { name: 'private-sea.log', number: '0' },
  { name: 'send-message.log', number: '24289' },
  { name: 'user-register-data.log', number: '767' },
  { name: 'yiguan-user.log', number: '63390' },
];

export default [
  //主控台 卡片数据
  {
    url: '/api/log/applist',
    timeout: 1000,
    method: 'post',
    response: () => {
      return resultSuccess(applist);
    },
  },
  //下载log
  {
    url: '/api/crontab/logsCreate',
    timeout: 1000,
    method: 'post',
    response: ({ query }) => {
      return resultSuccess(
        'http://docker.ifengniao.net:9090/static/download/app_20220616142449.zip'
      );
    },
  },
  //log list
  {
    url: '/api/crontab/logsFileList',
    timeout: 1000,
    method: 'post',
    response: () => {
      return resultSuccess(logList);
    },
  },
];
