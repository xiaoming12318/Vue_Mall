//axios基础的封装
import axios from 'axios'
import 'element-plus/theme-chalk/el-message.css'
import {ElMessage} from 'element-plus'
import {useUserStore} from '@/stores/user'
import router from '@/router'

const httpInstance=axios.create({
    //根域名，请求这个路径
    baseURL:'http://pcapi-xiaotuxian-front-devtest.itheima.net',
    //超时时间
    timeout: 5000
})

//axios请求拦截器
httpInstance.interceptors.request.use(config=>{
    //从pinia中获取token数据
    const userStore=useUserStore()
    //按照后端的要求拼接token数据
    const token=userStore.userInfo.token
    if(token){
        config.headers.Authorization=`Bearer ${token}`
    }
    return config
},e=>Promise.reject(e))


//axios响应拦截器
httpInstance.interceptors.response.use(res=>res.data,e=>{
    //统一错误提示
    ElMessage({
        type:'warning',
        message:e.response.data.message
    })
    //401token失效处理
    
    if(e.response.status==401){
        //1.清除本地用户数据
        const userStore=useUserStore()
        userStore.clearUserInfo()
        //2.跳转到登录页
        router.push('/login')
    }

    return Promise.reject(e)
})

export default httpInstance