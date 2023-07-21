//axios基础的封装
import axios from 'axios'
import 'element-plus/theme-chalk/el-message.css'
import {ElMessage} from 'element-plus'

const httpInstance=axios.create({
    //根域名，请求这个路径
    baseURL:'http://pcapi-xiaotuxian-front-devtest.itheima.net',
    //超时时间
    timeout: 5000
})

//axios请求拦截器
httpInstance.interceptors.request.use(config=>{
    return config
},e=>Promise.reject(e))
//axios响应拦截器
httpInstance.interceptors.response.use(res=>res.data,e=>{
    //统一错误提示
    ElMessage({
        type:'warning',
        message:e.response.data.message
    })
    return Promise.reject(e)
})

export default httpInstance