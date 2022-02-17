import axios from 'axios'

// import store from "@store";
// import * as storage from './storage'

// import vm from '@/main'

// axios.defaults.withCredentials = true

// multipart/form-data
function build (url, method, data, params = null, contentType = 'application/json') {
  const headers = { 'Content-Type': contentType }

  // token
  var token = localStorage.getItem('token')

  if (token != null) {
    headers.Authorization = 'Bearer ' + token
  }

  var options = { url: url, method: method, headers: headers }
  if (params != null) options.params = params
  if (data != null) options.data = data

  return axios(options)
}

async function callback (url, obj) {
  return await obj.then(function (response) {
      if(response.status===200){
        return response.data
      }
    })
    .catch(function (error) {
        console.log(error)
      if (error.response) {
        switch (error.response.status) {
            case 401 /** token未授权或token授权失败，过期等等**/:
                // 401 清除token信息并跳转到登录页面
                // storage.ClearStorage()
                // router.push('/account/login')
                break
            case 404 /** 未找到页面**/:
                // 404 跳转到404页面
                // router.push({
                //   path: 'notfound'
                // })
                break
            default: 
        }
      }
      return error.response
    })
}

export async function Get (url, params, contentType = 'application/json') {
  var obj = build(url, 'get', null, params, contentType)
  return await callback(url, obj)
}

export async function Post (url, data, contentType = 'application/json') {
  var obj = build(url, 'post', data, null, contentType)
  return await callback(url, obj)
}

export async function Put (url, data, contentType = 'application/json') {
  var obj = build(url, 'put', data, null, contentType)
  return await callback(url, obj)
}

export async function Delete (url, data, params, contentType = 'application/json') {
  var obj = build(url, 'delete', data, params, contentType)
  return await callback(url, obj)
}

export async function Patch (url, data, contentType = 'application/json') {
  var obj = build(url, 'patch', data, null, contentType)
  return await callback(url, obj)
}
