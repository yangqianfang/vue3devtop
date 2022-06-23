import { http } from '@/utils/http/axios';

export interface BasicResponseModel<T = any> {
  code: number;
  message: string;
  data: T;
}

/**
 * @description: 获取用户列表
 */
export function getUserList() {
  return http.request({
    url: '/admin/list',
    method: 'post',
  });
}

/**
 * @description: 获取单个用户信息
 */
export function getUserInfo(data) {
  return http.request<BasicResponseModel>(
    {
      url: '/admin/get',
      method: 'POST',
      data,
    }
    /*  {
      isTransformResponse: false,
    } */
  );
}

/**
 * @description: 保存用户信息
 */
export function saveUser(data) {
  return http.request({
    url: '/admin/add',
    method: 'POST',
    data,
  });
}

/**
 * @description: 删除户信息
 */
export function deleteUser(data) {
  return http.request({
    url: '/admin/delete',
    method: 'POST',
    data,
  });
}

/**
 * @description: 禁用户信息
 */
export function enableUser(data) {
  return http.request({
    url: '/admin/enable',
    method: 'POST',
    data,
  });
}
