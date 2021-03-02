import axios from 'axios'
import qs from 'qs'
// import store from '../store/index'
import ACTION from "@/store/action";
import router from '../router/index'
// import { Notification } from 'element-ui'
import { ElNotification } from 'element-plus';
// import * as userInfo from '@/utils/getUserInfo'

axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded'
axios.defaults.timeout = 120000 // 设置两份钟
axios.defaults.baseURL = process.env.VUE_APP_API
// axios.defaults.baseURL='https://yapi.test-chexiu.cn/mock/378'

const http = axios.create()

// 添加一个请求拦截器
http.interceptors.request.use(
  config => {
    // config.headers.common['Authorization'] = 'Bearer ' + localStorage.getItem('token') || store.state.token
    config.headers.common['Authorization'] = 'Bearer ' + localStorage.getItem('token')
    return config
  },
  error => {
    // 请求出错
    ACTION.closeLoading();
    // store.commit('closeLoading') // 报错关闭loading，接口报500时不起效果，需要在调函数的地方关闭loading
    return Promise.reject(error)
  }
)

// 添加一个响应拦截器
http.interceptors.response.use(
  response => {
    return response
  },
  error => {
    if (error.response.status == 401) {
      if (window.location.href.indexOf('#/login') == -1) { // 防止一个页面多个接口报错，所在在登陆页的接口需要处理
        ElNotification.error({
          title: '错误提示',
          message:  error.response.data.msg // '登录已失效，请重新登录'
        });
        // Notification.error({
        //   title: '错误提示',
        //   message: error.response.data.msg // '登录已失效，请重新登录'
        // })
      }
      router.push('/login')
    }
    ACTION.closeLoading();
    // store.commit('closeLoading') // 报错关闭loading，接口报500时不起效果，需要在调函数的地方关闭loading
    return Promise.reject(error)
  }
)

const beforeHandel = function (filterParam = true, params, showLoading = false) {
  if (filterParam) {
    for (var item in params) {
      if (params[item] === '' || params[item] === ' ' || params[item] === undefined || params[item] === null) { // axios会自动过滤：空数组，空对象，undefined三个
        delete params[item]
      }
    }
  }
  if (showLoading) {
    ACTION.openLoading();
    // store.commit('openLoading')
  }
}

// get请求  options是一些参数，比如下载的时候，传responseType, responseType有两种类型 blob： arraybuffer
http.getAjax = function (url, params, options = {}, filterParam = true, showLoading = true) {
  beforeHandel(filterParam, params, showLoading)
  return http.get(url, Object.assign({ params: params }, options))
}

// post 请求
http.postAjax = function (url, params, options, isJson = false, filterParam = true, showLoading = true) {
  beforeHandel(filterParam, params, showLoading)
  return isJson ? http.post(url, params, options) : http.post(url, qs.stringify(params), options)
}

// 更新接口 参数为 form-data形式传
http.updateAjax = function (url, params, filterParam = true, showLoading = true) {
  beforeHandel(filterParam, params, showLoading)
  return http.put(url, qs.stringify(params))
}
// 删除接口
http.deleteAjax = function (url) {
  return http.delete(url)
}

// patch接口
http.patchAjax = function (url, params) {
  return http.patch(url, params)
}

// get方式请求下载  responseType 有两种  blob,  arrayBuffer 集合到 getAjax里去 options 参数里去
// http.getDownAjax = function(url, params, responseType="'arraybuffer'",  filterParam=true, showLoading=true) {
//   beforeHandel(filterParam, params, showLoading)
//   return http.get(url,  {params: params, responseType });
// }

// 上传 formData格式
http.uploadPhoto = function (url, formData) {
  return http.post(url, formData)
}

export default http
