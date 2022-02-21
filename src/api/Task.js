import * as request from '../utils/request'
// const server = process.env.VUE_APP_GATEWAY_PREFIX
const server = 'http://192.168.19.39:8088'
const module = 'api'

// 查询任务列表
export function queryTaskList (data) {
  return request.Get(`${server}/${module}/queryTaskList`, data)
}

