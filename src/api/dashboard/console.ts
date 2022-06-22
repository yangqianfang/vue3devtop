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
export function getPublishList() {
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

//删除
export function publishDelete(data) {
  return http.request({
    url: '/publish/delete',
    method: 'POST',
    data,
  });
}
//获取参数
export function getConfigParams(data) {
  return http.request({
    url: '/config/params',
    method: 'POST',
    data,
  });
}

//新增app
export function addApp(data) {
  return http.request({
    url: data.id ? '/publish/save' : '/publish/insert',
    method: 'POST',
    data,
  });
}

//编辑app
export function editApp(data) {
  return http.request({
    url: '/publish/save',
    method: 'POST',
    data,
  });
}

//获取单个app信息
export function getAppInfo(data) {
  return http.request({
    url: '/publish/get',
    method: 'POST',
    data,
  });
}
