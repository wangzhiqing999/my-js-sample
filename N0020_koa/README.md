1.1 安装koa-generator 这是一个开源框架
npm install -g koa-generator

1.2 使用koa-generator生成koa2项目

然后执行下面命令生成完整项目目录和文件
koa2 HelloKoa2

创建项目成功后，进入项目目录
cd HelloKoa2


如果网络速度慢，可将源切换为淘宝的
npm config set registry https://registry.npm.taobao.org

如果淘宝的临时挂了，可以切换回原始的
npm config set registry https://registry.npmjs.org


安装依赖插件.
npm install

运行
SET DEBUG=koa*
npm start HelloKoa2

浏览器打开
http://localhost:3000/








路由设置：参考 routes 目录下的 index.js 和 users.js



