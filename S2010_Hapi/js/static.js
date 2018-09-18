'use strict';

const Hapi = require('hapi');

// 初始化服务， 并指定 host 与 port 参数.
const server = Hapi.server({
    port: 3000,
    host: 'localhost'
});


// 启动服务的方法.
const init = async () => {

	// 在hapi 中使用 inert 插件来处理静态文件。
    await server.register(require('inert'));

	// 指定根路由.
	server.route({
		method: 'GET',
		path: '/',
		handler: (request, h) => {
			return 'Hello, world! /static ';
		}
	});

    server.route({
        method: 'GET',
        path: '/static',
        handler: (request, h) => {
            return h.file('./public/static.html');
        }
    });

    await server.start();
    console.log(`Server running at: ${server.info.uri}`);
};

process.on('unhandledRejection', (err) => {

    console.log(err);
    process.exit(1);
});

// 启动服务
init();