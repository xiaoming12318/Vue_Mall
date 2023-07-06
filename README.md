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

element+主题定制

安装scss(npm i sass -D)->准备定制样式文件(官方要求 styles/element/index.scss)->对ElementPlus样式进行覆盖(通知Element采用scss语言->导入定制scss文件覆盖)



axios基础配置

1.安装npm i axios

统一定义，有需求直接调用

- 接口基地址
- 接口超时时间
- 请求拦截器
- 响应拦截器