import * as request from '../utils/request'
// const server = process.env.VUE_APP_GATEWAY_PREFIX
const server = 'http://192.168.19.39:8088'
const module = 'api'

// 登录
export function login (data) {
    console.log(data)
  return request.Post(`${server}/${module}/login`, data)
}

// 注册
export function register (data) {
  return request.Post(`${server}/${module}/register`, data)
}

