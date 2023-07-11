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