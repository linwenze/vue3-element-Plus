import fetch from '../../axios'


export function POST(url,params,options) { 
  return fetch.$ajax('POST', url, params,options);
}

export function GET(url,params,options) { 
  return fetch.$ajax('GET', url, params,options);
}

export function AJAX(type,url,params,options,showError) { 
  return fetch.$ajax(type, url, params,options,showError);
}

 
