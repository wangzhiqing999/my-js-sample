'use strict';

const Hapi = require('hapi');

// 初始化服务， 并指定 host 与 port 参数.
const server = Hapi.server({
    port: 3000,
    host: 'localhost'
});


// 启动服务的方法.
const init = async () => {

	// 加载 vision 插件，它增加了模板渲染
    await server.register(require('vision'));

	// 定义 模板渲染.
	server.views({
        engines: {
			// hapi 默认使用的是 handlebars
            html: require('handlebars')
        },
        relativeTo: __dirname,
        path: '../public/templates',

		// 使用母版页.
		layout: true,
		// 母版页所在路径.
		layoutPath: '../public/templates/layout'

    });

	server.route({
        method: 'GET',
        path: '/',
        handler: (request, h) => {
            return h.view('index');
        }
    });

	// 注意： 这个路径，区分大小写.
    server.route({
        method: 'GET',
        path: '/test',
        handler: (request, h) => {
            return h.view('test');
        }
    });

	// 测试传递参数的数据给页面.
	server.route({
		method: 'GET',
		path: '/hello/{user}',
		handler: (request, h) => {

			return h.view('hello', request.params);
		}
	});


	// 测试传递参数的数据给页面 + 使用另外一个母版页.
	server.route({
		method: 'GET',
		path: '/hello2/{user}',
		handler: (request, h) => {

			return h.view('hello', request.params, { layout: 'another_layout' });
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