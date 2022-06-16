import { http } from '@/utils/http/axios';

//获取主控list
export function getAppList() {
  return http.request({
    url: '/log/applist',
    method: 'post',
  });
}

//下载日志
export function downLoadLog(params) {
  return http.request({
    url: '/crontab/logsCreate',
    method: 'post',
    params,
  });
}
//crontab 日志list
export function crontabLogList(params) {
  return http.request({
    url: '/crontab/logsFileList',
    method: 'post',
    params,
  });
}
