
/**
 * 配置编译环境和线上环境之间的切换
 *
 * baseUrl: 域名地址
 * routerMode: 路由模式
 * imgBaseUrl: 图片所在域名地址
 *
 */

let baseUrl = ''; 
let host = '';
baseUrl = '';
let baseUrl2='';
let APIDEV=process.env.APIDEV;
switch (APIDEV) {
  case 'dev':
    // baseUrl = 'https://appapi-zhidian.test-chexiu.cn';
    baseUrl = 'https://appapi-zhidian.dev-chexiu.cn'
    break;
    // baseUrl = 'https://appapi-gqsm.chexiu.cn';//广汽
  case 'test': 
    baseUrl = 'https://appapi-zhidian.test-chexiu.cn';
    baseUrl2 = 'https://wxapi-zhidian.test-chexiu.cn';
    // baseUrl = 'https://appapi-zhidian.dev-chexiu.cn'
    //  baseUrl = 'https://appapi-gqsm.chexiu.cn';//广汽
    // baseUrl = 'https://appapi-zhidian.test-chexiu.cn'
    
    // baseUrl ='https://appapi-gqsm.chexiu.cn'
    break;
  case 'demo':
      baseUrl = 'https://appapi-zhidian.demo-chexiu.cn';
      // baseUrl = 'https://appapi-zhidian.dev-chexiu.cn'
      //  baseUrl = 'https://appapi-gqsm.chexiu.cn';//广汽
      // baseUrl = 'https://appapi-zhidian.test-chexiu.cn'
      
      // baseUrl ='https://appapi-gqsm.chexiu.cn'
      break;  
  case 'prod':
    baseUrl='https://appapi-zhidian.chexiu.cn'//公版
    baseUrl2 = 'https://wxapi-zhidian.chexiu.cn';
    // baseUrl = 'https://appapi-gqsm.chexiu.cn';//广汽
    break;
}

let href=window.location.href;
if(href.indexOf('appcst-zhidian.dev-chexiu.cn')>-1){
  baseUrl = 'https://appapi-zhidian.dev-chexiu.cn';
}
if(href.indexOf('appcst-zhidian.test-chexiu.cn')>-1){
  baseUrl = 'https://appapi-zhidian.test-chexiu.cn';
}
if(href.indexOf('appcst-zhidian.demo-chexiu.cn')>-1){
  baseUrl = 'https://appapi-zhidian.demo-chexiu.cn';
}
//公版
if(href.indexOf('appcst-zhidian.chexiu.cn')>-1){
  baseUrl = 'https://appapi-zhidian.chexiu.cn';
}
//广汽
if(href.indexOf('appcst-gqsm.chexiu.cn')>-1){
  baseUrl = 'https://appapi-gqsm.chexiu.cn';
}
// baseUrl="https://yapi.test-chexiu.cn/mock/380";
export {
  baseUrl,
  baseUrl2
}
