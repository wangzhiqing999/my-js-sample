# Seneca 学习代码 ( 参考： https://github.com/pantao/getting-started-seneca )


### 安装
	npm install


### 运行.
	运行 定义服务与调用服务 在一个 js 里面的学习代码.
	npm run step1

	定义了两个服务的例子.
	npm run step2

	定义了两个服务的例子. (服务2 复用 服务1)
	npm run step3

	运行输出详细日志的例子.
	npm run step4

	日志写入文件的例子.
	npm run step5

	服务代码 与 调用代码分拆后的例子.
	npm run step6

	服务代码以 http 服务的方式独立运行
	npm run math-service
	测试调用服务的方式
	http://localhost:8090/act?role=math&cmd=sum&left=123&right=456

	运行调用 http 服务的客户端代码
	npm run math-client


	Api 的方式，来运行服务.
	npm run hapi-app
	查看路由.
	http://localhost:8090/routes
	测试浏览器访问调用.
	http://localhost:8090/api/calculate/sum?left=123&right=456
	http://localhost:8090/api/calculate/product?left=123&right=456


