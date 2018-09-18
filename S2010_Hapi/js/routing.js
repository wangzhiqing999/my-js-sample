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

// Path 上的 路径与参数.
// /hello/Jack
server.route({
    method: 'GET',
    path: '/hello/{user}',
    handler: (request, h) => {

        return `Hello ${encodeURIComponent(request.params.user)}!`;
    }
});

// 可选参数.
// /hello2/Tom
// /hello2/
server.route({
    method: 'GET',
    path: '/hello2/{user?}',
    handler: function (request, h) {

        const user = request.params.user ?
            encodeURIComponent(request.params.user) :
            '可选参数，不传递时，使用的默认值';

        return `Hello ${user}!`;
    }
});


// 多个参数.
// /hello3/john/doe
server.route({
    method: 'GET',
    path: '/hello3/{user*2}',
    handler: function (request, h) {

        const userParts = request.params.user.split('/');
        return `Hello ${encodeURIComponent(userParts[0])} ${encodeURIComponent(userParts[1])}!`;
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