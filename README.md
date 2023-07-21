# Vue_Mall
An online shopping mall implemented using vue

文件目录说明：

apis：API接口文件夹

composables：组合函数文件夹

directives：全局指令文件夹

styles：全局样式文件夹

utils：工具函数文件夹

# 1.项目起步-配置别名路径联想提示

在编写代码的过程中，一旦**输入@/**，VSCode会立刻**联想出src下的所有子目录和文件**，统一文件路径访问不容易出错

> 这个配置只做联想提示，在vite.config.js中才是做的实际路径转换成src

在ElementUI中可分为通用组件和业务定制化组件

首先在安装完vue后

![屏幕截图 2023-07-06 185317](E:\Vue3\littleFreshRabbit\屏幕截图 2023-07-06 185317.png)

**element+主题定制**

安装scss(npm i sass -D)->准备定制样式文件(官方要求 styles/element/index.scss)->对ElementPlus样式进行覆盖(通知Element采用scss语言->导入定制scss文件覆盖)



**axios基础配置**

1.安装npm i axios

统一定义，有需求直接调用

- 接口基地址
- 接口超时时间
- 请求拦截器
- 响应拦截器

**路由设计：**

设计首页和登录页的路由，路由设计原则：找内容切换的区域，如果是**页面整体切换**，**则为一级路由**

路由写在**view**目录中，找内容切换的区域，如果是在一级路由页的内部切换，则为二级路由

**父组件的子组件则可以在router目录的index.js中的父组件中添加Children这个参数，作为子组件**

比如：

```

```



> 如果在组件编写的过程中出现 **Component name index should be multi-word**则可以选择在eslintrc.cjs中配置，在module.exports中添加rules

```
rules:{
    'vue/multi-word-component-names':0 //不再强制要求组件命名
  }
```

路由入口在router的index.js中，出口则是在App.vue中引入这些路由



**图片资源和样式资源**

资源说明

1. 实际工作中的图片资源通常由UI设计师提供，常见的图片格式由png，svg等都是由UI切图交给前端
2. 样式资源通常是指项目初始化的时候进行样式重置，常见的比如开源的normalize.css或者手写

资源操作

1. 图片资源-把**images文件夹放到assets**目录下
2. 样式资源-把**common.scss文件放到styles**目录下

前端开发小助手  error lens：实时提供错误警告信息的VScode插件



**为什么要自动导入**

在项目里一些组件共享色值会以scss变量的方式统一放到一个名为var.scss的文件中，正常组件中使用，需要**先导入scss文件，再使用内部的变量**，比较繁琐，自动导入**可以免去手动导入的步骤，直接使用内部的变量**



**自动导入配置**

1. 新增一个var.scss文件，存入色值变量
2. 通过vite.config.js配置自动导入文件



**图标引入**

阿里的字体图标库支持多种引入方式，小兔先项目采用的是**font-class**的方式，在网站**https://www.iconfont.cn/**中寻找或者自定义图标库



**Layout一级导航渲染**

1. 根据接口文档封装接口函数
2. 发送请求获取数据列表
3. v-for渲染页面



**重点吸顶交互**(有点冻结首行的那个味道)

浏览器在上下滚动的过程中，如果距离顶部的滚动距离大于78px,吸顶导航显示，小于78px隐藏

准备吸顶导航组件->获取滚动距离->以滚动距离做判断条件控制组件盒子展示隐藏



**组件封装**

核心思路：把可复用的结构只写一次，把**可能发生变化的部分抽象成组件参数（props/插槽）**

**实现步骤**

1.不做任何抽象，准备静态模板

2.抽象可变的部分

- 主标题和副标题是**纯文本**，可以抽象成**prop**传入
- 主题内容是**复杂的模板**，抽象成**插槽**传入



# 重点：**图片懒加载**

场景：电商网站的首页通常会很长，用户不一定能访问到**页面靠下面的图片**，这类图片通过懒加载优化手段可以做到**只有进入视口区域才发送图片请求**

在图片img上绑定 指令，该图片只有在正式进入到视口区域时才会发送图片网络请求

```
v-img-lazy="item.picture"
```

**懒加载优化**

通过插件把**懒加载指令封装为插件**，main.js**入口文件只需要负责注册插件**即可

**重复监听**

useIntersectionObserver对于元素的监听是一直存在的，除非手动停止监听，存在**内存浪费**。

解决思路：在监听的图片第一次完成加载之后就停止监听

```
const {stop}=useIntersectionObserver(
	el,
	([{isIntersecting}])=>{
		if(isIntersecting){
			el.src=binding.value
			stop()
		}
	}
)
```



封装一个组件，用于管理重复的数据，并且封装，**方便复用**

核心思路：把要显示的**数据对象设计为props参数**，传入什么数据对象就显示什么数据





**一级分类--整体认识和路由配置**





**路由缓存问题**

使用带有参数的路由时需要注意的是，当用户从**/users/johnny**导航到**/users/jolyne**时，相同的组件实例将被重复使用。因为两个路由都渲染同个组件，复用则显得更加高效。不过，这也意味着组件的**生命周期钩子不会被调用**

**方案一：给router-view添加key**

以当前路由完整路径为key的值，给router-view组件绑定

```
RouterView :key="$route.fullPath"
```

**方案二：使用beforeRouteUpdate导航钩子**

beforeRouteUpdate钩子函数可以在每次路由更新之前执行，在**回调中执行徐娅数据更新的业务逻辑**即可

或者使用**beforeRouteUpdate导航守卫**，也可以解决

```
const User={
template:'...',
async beforeRouteUpdate(to,from){
//对路由变化做出响应...
this.userData=await fetchUser(to.params.id)
}
}
```



1. 路由缓存问题产生的原因是什么？

   **路由只有参数变化时，会复用组件实例**

2. 两种方案都可以解决路由缓存问题，如何选择

   **在意性能问题，选择onBeforeUpdate，精细化控制。不在意性能问题，选择key，简单粗暴**



**概念理解**

基于逻辑函数拆分业务是指把**同一个组件中独立的业务代码通过函数做封装处理**，提升**代码的可维护性**

1. 按照业务声明以‘use’打头的逻辑函数
2. 把**独立的业务逻辑**封装到各个函数内部
3. 函数内部把组件中需要用到的数据或者方法**return出去**
4. 在**组件中调用函数**把数据或者方法组合回来使用





# 商品列表

最新商品、最高人气、评论最多、无限加载功能

## 列表无限加载

使用elementPlus提供的v-infinite-scroll指令**监听是否满足触底条件**，满足加载条件时让**页数参数加一获取下一页数据，做新老数据拼接渲染**



**报错**：渲染模板时遇到对象的多层属性访问可能出现声明问题？

```
Cannot read properties of undefined
```

**解决**：

1. 可选链 ?.
2. v-if控制渲染





# 图片预览

1. 通过小图切换大图显示

   维护一个数组图片列表，**鼠标划入小图记录当前小图下标值，通过下标值在数组中取对应图片**

2. 放大镜效果

   - 左滑滑块跟随鼠标移动

     获取当前的**鼠标在盒子内的相对位置(useMouseInElement),控制滑块跟随鼠标移动(left/top)**

   - 右侧大图放大效果实现

   - 鼠标移入，控制滑块和大图显示隐藏

**有效移动范围内的计算逻辑**

- 横向：100<elementX<300,left=elementX-小滑块宽度一般
- 纵向：100<elementY<300,top=elementY-小滑块高度一半

**边界距离控制**

- 横向：elementX>300 left=200 elementX<100 left=0
- 纵向：elementY>300 top=200 elementY<100 top=0



# SKU的概念

问：在实际工作中，经常会遇到别人写好的组件熟悉一个三方组件，首先重点看声明

答：props和emit，**props决定了当前组件接收什么数据，emit决定了会产出什么数据**





# 登录

表单校验和登录登出业务

自定义校验规则，的返回值

```
校验失败的callback
callback(new Error('xxx'))
校验成功的callback
callback()
```

