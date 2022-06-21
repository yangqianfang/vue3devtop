import { http } from '@/utils/http/axios';
import { ContentTypeEnum } from '@/enums/httpEnum';
//获取主控台信息
export function getConsoleInfo() {
  return http.request({
    url: '/dashboard/console',
    method: 'get',
  });
}
//获取主控list
export function getChartData() {
  return http.request({
    url: '/publish/getChartData',
    method: 'get',
  });
}
//获取主控list
export function getConsoleList() {
  return http.request({
    url: '/publish/list',
    method: 'post',
  });
}

//获取可发布版本
export function getPublishVersion(data) {
  return http.request({
    url: '/publish/versions',
    method: 'post',
    data,
  });
}
//发布版本
export function publishUpgrade(params) {
  return http.request({
    url: '/publish/operation?action=upgrade',
    method: 'POST',
    headers: { 'Content-Type': ContentTypeEnum.JSON },
    params,
  });
}
//完成
export function publishFinish(params) {
  return http.request({
    url: '/publish/operation?action=finishupgrade',
    method: 'POST',
    headers: { 'Content-Type': ContentTypeEnum.JSON },
    params,
  });
}
//回滚
export function publishRollback(params) {
  return http.request({
    url: '/publish/operation?action=rollback',
    method: 'POST',
    headers: { 'Content-Type': ContentTypeEnum.JSON },
    params,
  });
}
