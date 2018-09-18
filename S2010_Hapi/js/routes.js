'use strict';

const Hapi = require('hapi');

// 初始化服务， 并指定 host 与 port 参数.
const server = Hapi.server({
    port: 3000,
    host: 'localhost'
});



// 指定根路由.
server.route({
    method: 'GET',
    path: '/',
    handler: (request, h) => {

        return 'Hello, world!';
    }
});

// 指定其他路由.
server.route({
    method: 'GET',
    path: '/{name}',
    handler: (request, h) => {

        return 'Hello, ' + encodeURIComponent(request.params.name) + '!';
    }
});








// 启动服务的方法.
const init = async () => {
    await server.start();
    console.log(`Server running at: ${server.info.uri}`);
};

process.on('unhandledRejection', (err) => {

    console.log(err);
    process.exit(1);
});

// 启动服务
init();