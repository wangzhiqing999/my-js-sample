# Hapi 学习代码

基础操作.
https://hapijs.com/tutorials/getting-started?lang=en_US

路由设置.
https://hapijs.com/tutorials/routing?lang=en_US

视图设置.
https://hapijs.com/tutorials/views?lang=en_US

数据验证
https://hapijs.com/tutorials/validation?lang=en_US



参考网页：
https://segmentfault.com/a/1190000010143528#articleHeader4
https://cnodejs.org/topic/56ed0cdf515e7305367f0df7



注意：本例子代码，使用的是 hapi 17.5.4
文档使用的是 v17
参考网页中，版本好像是低于17的。


### 安装
	npm install


### 运行.
	启动空的 hapi 服务代码. （注：单纯启动空的服务，所有请求，都是返回 404）
	npm run helloworld

	启动定义了路由的 hapi 服务代码.
	npm run routes

	路由处理中，使用了静态文件.
	npm run static

	hapi-pino 插件的测试使用
	npm run hapipino

	详细的路由处理代码.
	npm run routing

	视图的处理.
	npm run views

	参数验证的处理.
	npm run validation
