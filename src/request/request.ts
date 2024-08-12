import axios, {
  type AxiosInstance,
  type AxiosRequestConfig,
  type AxiosResponse
} from 'axios'
import type { Response } from './types'

const instance: AxiosInstance = axios.create({
  baseURL: 'http://123.207.32.32:1888/api',
  timeout: 10000
})

// 请求拦截器
instance.interceptors.request.use(
  (config) => {
    // 对请求进行一些全局的处理
    console.log('请求拦截器:', config)
    return config
  },
  (error) => {
    return Promise.reject(error)
  }
)

// 响应拦截器
instance.interceptors.response.use(
  (response: AxiosResponse) => {
    // 对响应进行一些全局的处理
    console.log('响应拦截器:', response)
    if (response.status >= 200 && response.status < 300) {
      return response
    } else {
      // 非 2xx 状态码
      return Promise.reject(`请求失败：${response.status}`)
    }
  },
  (error) => {
    // 对响应错误做点什么
    return Promise.reject(error)
  }
)

export const request = <T>(config: AxiosRequestConfig) => {
  return new Promise<Response<T>>((resolve, reject) => {
    instance
      .request(config)
      .then((response: AxiosResponse) => {
        resolve(response.data as Response<T>)
      })
      .catch((error) => {
        reject(error)
      })
  })
}
