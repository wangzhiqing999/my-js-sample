# gulp 相关操作.



首先确保你已经正确安装了nodejs环境。


先使用 node 指令，创建一个 package.json

    npm init

输入 name,description 其它全部使用默认值.

此步骤完成后，当前目录下将生成一个 package.json
内容如下：

    {
      "name": "n002_gulp_study",
      "version": "1.0.0",
      "description": "my gulp study code",
      "main": "index.js",
      "scripts": {
        "test": "echo \"Error: no test specified\" && exit 1"
      },
      "author": "",
      "license": "ISC"
    }


然后以全局方式安装gulp

    npm install --global gulp


在安装的时候把gulp写进项目package.json文件的依赖中，加上--save-dev：

    npm install --save-dev gulp

运行结束后， package.json 内容如下：

    {
      "name": "n002_gulp_study",
      "version": "1.0.0",
      "description": "my gulp study code",
      "main": "index.js",
      "scripts": {
        "test": "echo \"Error: no test specified\" && exit 1"
      },
      "author": "",
      "license": "ISC",
      "devDependencies": {
        "gulp": "^3.9.1"
      }
    }


创建 index.js 内容如下：

    console.log('index.js Start!!!');


编辑 package.json， 修改 scripts 部分.

      "scripts": {
        "start": "node index.js",
        "test": "echo \"Error: no test specified\" && exit 1"
      },


尝试运行.

    node index.js

或者

    npm run start

能正常运行.




创建 gulpfile.js

    var gulp = require('gulp');

    gulp.task('default', function() {
		console.log("default world.");
    });


测试运行

    gulp


后续相关修改记录，全部在 gulpfile.js 文件中.



gulp 插件列表

https://gulpjs.com/plugins/

