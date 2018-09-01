log4js 测试使用

### 安装

使用淘宝 NPM 镜像
npm install -g cnpm --registry=https://registry.npm.taobao.org

安装 log4js
cnpm install log4js



### 开发

config 目录，创建 log4js.json 配置文件


初始化代码
var log4js = require('log4js');
log4js.configure('./config/log4js.json');


业务运行代码
var log = log4js.getLogger("app");
log.debug("This is a log4js test...");
