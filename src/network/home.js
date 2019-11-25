import request from "./request";

export function getHomeMultidata() {
  return request({
    url: '/home/multidata',
    methods:'get',
  })
}


export function getGoodsList(type,page){
  return request({
    url:'/home/data',
    params:{
      type,page
    }
  })
}
