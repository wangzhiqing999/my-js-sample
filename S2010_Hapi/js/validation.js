'use strict';

const Hapi = require('hapi');
const Joi = require('joi');

// 初始化服务， 并指定 host 与 port 参数.
const server = Hapi.server({
    port: 3000,
    host: 'localhost'
});


// 启动服务的方法.
const init = async () => {

	// 指定根路由.
	server.route({
		method: 'GET',
		path: '/',
		handler: (request, h) => {
			return 'Hello, world! /hello/ab  /hello/abc  /hello/abcdefghijklmn';
		}
	});

	// 请求参数验证的例子.
	// 测试方式：
	// http://localhost:3000/hello/ab
	// http://localhost:3000/hello/abcde
	// http://localhost:3000/hello/abcdefghijklmnopqrstuvwxyz
	server.route({
		method: 'GET',
		path: '/hello/{name}',
		handler: function (request, h) {

			return `Hello ${request.params.name}!`;
		},
		options: {
			validate: {
				params: {
					// name 参数的长度，在 3 - 10 之间.
					name: Joi.string().min(3).max(10)
				}
			}
		}
	});

	// 一个模拟翻页查询的操作.
	// 测试方式：
	// http://localhost:3000/doquery
	// http://localhost:3000/doquery?offset=0&limit=20
	// http://localhost:3000/doquery?offset=-10&limit=20
	// http://localhost:3000/doquery?offset=20&limit=200
	server.route({
		method: 'GET',
		path: '/doquery',
		handler: function (request, h) {
			// 本例子为了测试 validate.
			// 因此，就简单输入 获取到的查询参数.
			return `Do Query: Offset = ${request.query.offset};  Limit = ${request.query.limit} !`;
		},
		options: {
			validate: {
				query: {
					// 起始行. 整型，最小值为 0.  不填写的话，默认为 0.
					offset: Joi.number().integer().min(0).default(0),
					// 每页多少行. 整型，最小值为 1. 最大值为 100  不填写的话，默认为 10.
					limit: Joi.number().integer().min(1).max(100).default(10)
				}
			}
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