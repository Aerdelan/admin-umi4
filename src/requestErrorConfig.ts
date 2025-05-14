import { HOST } from '@/services';
import type { RequestConfig } from '@umijs/max';

// 错误处理方案： 错误类型
enum ErrorShowType {
  SILENT = 0,
  WARN_MESSAGE = 1,
  ERROR_MESSAGE = 2,
  NOTIFICATION = 3,
  REDIRECT = 9,
}
// 与后端约定的响应数据格式
interface ResponseStructure {
  success: any;
  data: any;
  errorCode?: any;
  errorMessage?: any;
  showType?: any;
}

/**
 * @name 错误处理
 * pro 自带的错误处理， 可以在这里做自己的改动
 * @doc https://umijs.org/docs/max/request#配置
 */
export const errorConfig: RequestConfig = {
  timeout: 600000,
  // 错误处理： umi@3 的错误处理方案。
  errorConfig: {},

  // 请求拦截器
  requestInterceptors: [
    (url, options) => {
      let targetURL = url;
      if (url.startsWith('/')) {
        targetURL = `${HOST}${url}`;
        console.log(targetURL);
      }
      return {
        url: targetURL,
        options,
      };
    },
  ],

  // 响应拦截器
  responseInterceptors: [
    (response) => {
      try {
        const { data } = response as unknown as ResponseStructure;

        // 检查 data 是否存在
        if (!data) {
          throw new Error('响应数据为空');
        }

        // 如果 success 为 false，抛出错误
        // if (data.success === false) {
        //   message.error(data.errorMessage || '请求失败！');
        //   throw new Error(data.errorMessage || '请求失败');
        // }

        return data; // 返回实际数据
      } catch (error) {
        console.error('响应拦截器错误:', error);
        throw error; // 确保错误被正确抛出
      }
    },
  ],
};
