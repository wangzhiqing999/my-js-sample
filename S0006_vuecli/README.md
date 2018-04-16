# 基于vue-cli快速构建


## 步骤一. 安装 vue-cli

		npm install -g vue-cli



## 步骤二. 运行 vue  来创建 app

		vue init webpack vuetest

后续操作.
1. Project name (vuetest)
项目名，直接回车.

2. Project description (A Vue.js project)
项目描述，直接回车.

3. Author (........)
作者，直接回车.

4. Runtime + Compiler: recommended for most users
   Runtime-only: about 6KB lighter min+gzip, but templates (or any Vue-specificHTML) are ONLY allowed in .vue files - render functions are required elsewhere
选择运行加编译，也就是第一个.
(两者的区别 https://cn.vuejs.org/v2/guide/installation.html#%E8%BF%90%E8%A1%8C%E6%97%B6-%E7%BC%96%E8%AF%91%E5%99%A8-vs-%E5%8F%AA%E5%8C%85%E5%90%AB%E8%BF%90%E8%A1%8C%E6%97%B6)

5. Install vue-router? (Y/n)
是否安装vue-router， 直接回车， 使用默认值 Y
(vue-router 相关文档  https://router.vuejs.org/zh-cn/)

6. Use ESLint to lint your code? (Y/n)
是否使用ESLint管理代码， 直接回车，使用默认值 Y
(ESLint 相关文档 https://eslint.org/ )

7. Standard (https://github.com/feross/standard)
   AirBNB (https://github.com/airbnb/javascript)
   none (configure it yourself)
选择第一个，回车.

8. Set up unit tests (Y/n)
本次不设置单元测试代码，输入 n  回车.

9. Setup e2e tests with Nightwatch(Y/n)?
输入 n  回车.

10.Should we run `npm install` for you after the project has been created? (recommended) (Use arrow keys)
   Yes, use NPM
   Yes, use Yarn
   No, I will handle that myself
选择 Yes, use NPM


结果后续操作失败。
提示信息为：
npm ERR! Please try running this command again as root/Administrator.


后续操作。
以管理员身份运行 cmd
cd vuetest
npm install
正常结束.


## 步骤三. vuetest 目录下运行.

		npm start

打开浏览器，http://localhost:8081
访问页面.



## 步骤四. 测试打包操作.

		npm run build

启动 IIS 管理器，创建一个网站，目录为  vuetest 目录下的 dist 目录。
测试浏览页面.



## 相关代码说明.

首页是 index.html
关键的也就是 <div id="app"></div>


入口的代码是 src\main.js
引用了三个文件.
import Vue from 'vue'
import App from './App'
import router from './router'
其中，Vue 是基本的库。
App 为页面的布局。
router 为路由的配置.


页面布局代码是 src\App.vue
内容是一个 Logo 图片
下面是 <router-view/>
也就是路由匹配到的组件将渲染在这里。


路由设置的代码是 src\router\index.js
该文件引用了三个文件.
import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
其中，Vue 与 Router 是基本的库。
HelloWorld 为自定义的组件.
并且，定义了，路径 / ，就是由 HelloWorld 组件来处理.

