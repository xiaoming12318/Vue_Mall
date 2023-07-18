// 在这个路径封装的axios请求，包括基本封装和【请求、响应拦截器】
import httpInstance from "@/utils/http";

export function getBannerAPI(params={}){
    //默认为1 商品为2
    const {distributionSite='1'}=params
    return httpInstance({
        url:'/home/banner',
        params:{
            distributionSite
        }
    })
}

export const findNewAPI=()=>{
    return httpInstance({
        url:'/home/new'
    })
}

export const findHotAPI=()=>{
    return httpInstance({
        url:'/home/hot'
    })
}

export const getGoodsAPI=()=>{
    return httpInstance({
        url:'/home/goods'
    })
}
