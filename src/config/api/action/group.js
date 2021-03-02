import fetch from '../../axios'
import axios from 'axios' 
// import ACTION from "@/store/action";
//用户 - 获取当前登录用户资料（内容和登录返回一致）
export function getUploadUrl() {  
  // export function getUploadUrl(params) {  
  // store.dispatch('openLoading')
  // return fetch.$ajax('POST', '/site/get-upload-url', params); 
}
// 登录
export function login (params) {
  return fetch.postAjax('/v1/sessions', params)
}







//图片上传
export function upload(params) { 
  // store.dispatch('openLoading')
  return new Promise((resolve, reject) => {
    axios({
      method: "POST",
      url: 'https://libapi.test-chexiu.cn/xg/score-active/upload',
      data: params,
      headers: {
        'Content-Type': 'multipart/form-data',
      }
    }).then(function(res) {
      // error处理
      if (res.data.code === 200 || res.data.ret==100) {
        resolve(res.data);
      } else {
        // store.dispatch('error', res.data.msg)
        reject(res.data);
      }
    }).catch(error => {
      // console.log(error.msg)
      // store.dispatch('inquiry', '登录失效，重新登录？'); 
      window.location.href = "exit:true"
      reject(error);
    });

  });
}








