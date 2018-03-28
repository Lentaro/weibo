//专门放工具类函数
export function getRedirectPath({avatar}){
  let url='/home'
  if(!avatar){
    url =  '/userinfo'
  }
  return url
}