// 获取当前url对应个菜单
export function menuPath() { 
    let hash = window.location.hash
    if (hash.indexOf('?') > -1) {
        hash = hash.substring(0, hash.indexOf('?'))
    }
    return hash.split('/')[1] + '/' + hash.split('/')[2];
}