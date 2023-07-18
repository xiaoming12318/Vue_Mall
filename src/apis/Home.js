// 在这个路径封装的axios请求，包括基本封装和【请求、响应拦截器】
import httpInstance from "@/utils/http";

export function getBannerAPI(){
    return httpInstance({
        url:'/home/banner'
    })
}

export const findNewAPI=()=>{
    return httpInstance({
        url:'/home/new'
    })
}