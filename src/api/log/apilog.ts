import { http } from '@/utils/http/axios';

//获取applist
export function getAppList() {
  return http.request({
    url: '/log/apiapplist',
    method: 'post',
  });
}

//拉取日志
export function apiPullLogs(params) {
  return http.request({
    url: '/logs/apiPullLogs',
    method: 'post',
    params,
  });
}
//生成日志
export function downLoadLog(params) {
  return http.request({
    url: '/logs/apiGrepLogs',
    method: 'post',
    params,
  });
}
