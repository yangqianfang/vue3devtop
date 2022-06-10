import { http } from '@/utils/http/axios';

//获取主控台信息
export function getConsoleInfo() {
  return http.request({
    url: '/dashboard/console',
    method: 'get',
  });
}
//获取主控list
export function getConsoleList() {
  return http.request({
    url: '/dashboard/list',
    method: 'get',
  });
}

//发布版本
export function publishUpgrade(params) {
  return http.request({
    url: '/publish/operation',
    method: 'POST',
    params,
  });
}
//完成
export function publishFinish(params) {
  return http.request({
    url: '/publish/operation?action=finishupgrade',
    method: 'POST',
    params,
  });
}
//回滚
export function publishRollback(params) {
  return http.request({
    url: '/publish/operation?action=rollback',
    method: 'POST',
    params,
  });
}
