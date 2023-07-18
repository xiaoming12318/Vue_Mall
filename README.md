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

