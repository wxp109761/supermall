import axios from 'axios'

const service=axios.create({
  baseURL:'http://123.207.32.32:8000',
  timeout:5000//设置请求超时时间
})

//request拦截器
service.interceptors.request.use(
  config=>{
    return config;
  }
)

//response拦截器
service.interceptors.response.use(response=>{
  const res=response.data
  if(response.status==200){
    return res;
  }
  return res;
},
error=>{
console.log("响应失败"+error)
return Promise.reject(error)
})

export default service
