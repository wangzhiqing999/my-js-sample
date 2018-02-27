# cordova HelloWorld 项目


## 步骤一. 安装 cordova

		npm install -g cordova

安装完成后输入以下命令看一下版本号

		cordova -version
8.0.0

## 步骤二. 运行 cordova  来生成一个项目

		cordova create helloworld


## 步骤三. 添加平台.

		cd helloworld
		cordova platform add browser


查询当前安装的平台，使用
		cordova platform ls

Installed platforms:
  browser 5.0.3
Available platforms:
  android ~7.0.0
  ios ~4.5.4
  osx ~4.0.1
  windows ~5.0.0
  www ^3.12.0


## 步骤四. 运行 app.

		cordova run browser

		浏览器访问 http://localhost:8000/  观察结果.



## 步骤五. 尝试添加一个 plugin

		cordova plugin add cordova-plugin-dialogs

修改 www\js\index.js
再次运行.
