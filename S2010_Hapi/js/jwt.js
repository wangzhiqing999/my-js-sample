'use strict';

const Hapi = require('hapi');
const Inert = require('inert');
const Vision = require('vision');
const Joi = require('joi');
const HapiSwagger = require('hapi-swagger');
const Jwt = require('hapi-auth-jwt2');
const Pack = require('../package.json');



// 测试的 "users database"
// 测试的Token值： eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6MSwibmFtZSI6IkFudGhvbnkgVmFsaWQgVXNlciIsImlhdCI6MTQyNTQ3MzUzNX0.KA68l60mjiC8EXaC2odnjFwdIDxE__iDu5RwLdN1F2A
const people = {
    1: {
      id: 1,
      name: 'Jen Jones'
    }
};

// bring your own validation function
const validate = async function (decoded, request) {

    // do your checks to see if the person is valid
    if (!people[decoded.id]) {
      return { isValid: false };
    }
    else {
      return { isValid: true };
    }
};



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
		Jwt,
        {
            plugin: HapiSwagger,
            options: swaggerOptions
        }
    ]);


	server.auth.strategy('jwt', 'jwt',
		{
			key: 'NeverShareYourSecret',          		// Never Share your secret key
			validate: validate,            				// validate function defined above
			verifyOptions: { algorithms: [ 'HS256' ] } 	// pick a strong algorithm
		});

	server.auth.default('jwt');



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
				auth: 'jwt',
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
					}),
					headers: Joi.object({
						'authorization': Joi.string().required().description('验证Token')
					}).unknown()
				}
			}
		},
		{
			method: 'POST',
			path: '/items2',
			config: {
				auth: 'jwt',
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
					}),
					headers: Joi.object({
						'authorization': Joi.string().required().description('验证Token')
					}).unknown()
				}
			}
		},
		// 这个路由，需要 JWT 验证
		{
			method: 'GET',
			path: '/items3/{pageNo}',
			config: {
				auth: 'jwt',
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