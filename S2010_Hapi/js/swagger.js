'use strict';

const Hapi = require('hapi');
const Inert = require('inert');
const Vision = require('vision');
const Joi = require('joi');
const HapiSwagger = require('hapi-swagger');
const Pack = require('../package.json');

(async () => {
    const server = await new Hapi.Server({
        host: 'localhost',
        port: 3000,
    });

    const swaggerOptions = {
        info: {
                title: 'Test API Documentation',
                version: Pack.version,
            },
        };

    await server.register([
        Inert,
        Vision,
        {
            plugin: HapiSwagger,
            options: swaggerOptions
        }
    ]);

    try {
        await server.start();
        console.log('Server running at:', server.info.uri);
    } catch(err) {
        console.log(err);
    }





	// 路由具体写法，参考 https://github.com/glennjones/hapi-swagger/blob/HEAD/usageguide.md


	let routes = [
		{
			method: 'POST',
			path: '/items1',
			config: {
				handler: (request, reply) => {
					return {
						resultCode : "0",
						resultMessage : "success"
					};
				},
				description: 'POST JSON body',
				tags: ['api'],
				validate: {
					payload: Joi.object({
						a: Joi.number().description('the first number'),
						b: Joi.number().description('the second number')
					})
				}
			}
		},
		{
			method: 'POST',
			path: '/items2',
			config: {
				handler: (request, reply) => {
					return {
						resultCode : "0",
						resultMessage : "success"
					};
				},
				description: 'POST Form  body',
				tags: ['api'],
				plugins: {
					'hapi-swagger': {
						payloadType: 'form'
					}
				},
				validate: {
					payload: Joi.object({
						a: Joi.number().description('the first number'),
						b: Joi.number().description('the second number')
					})
				}
			}
		},
		{
			method: 'GET',
			path: '/items3/{pageNo}',
			config: {
				handler: (request, reply) => {
					return {
						resultCode : "0",
						resultMessage : "success"
					};
				},
				description: 'Params query and headers',
				tags: ['api'],
				validate: {
					params: {
						pageNo: Joi.number().min(1).default(1).description('第几页')
					},
					query: {
						search: Joi.string().description('查询条件')
					},
					headers: Joi.object({
						'authorization': Joi.string().required().description('验证Token')
					}).unknown()
				}
			}
		}];

	server.route(routes);

})();