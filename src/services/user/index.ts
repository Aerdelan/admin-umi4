import { request } from 'umi';

// 测试接口
export async function hellow(options?: { [key: string]: any }) {
  return request<API.ResponseResult<any>>(`/hello`, {
    method: 'GET',
    ...(options || {}),
  });
}

// 拉取用户信息
export async function getUserInfo(options?: { [key: string]: any }) {
  return request<API.ResponseResult<any>>(`/users`, {
    method: 'GET',
    ...(options || {}),
  });
}
