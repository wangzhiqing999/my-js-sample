# Mocha 学习例子




首先确保你已经正确安装了nodejs环境。


先使用 node 指令，创建一个 package.json

    npm init

输入 name,description 其它全部使用默认值.



安装 mocha

    npm install --save-dev mocha


创建测试代码
	
	创建 test 目录
	改目录下，创建 test.js
	

修改 package.json

    "scripts": {
        "test": "echo \"Error: no test specified\" && exit 1"
    },

修改为
	
	"scripts": {
        "test": "mocha"
    },
	

运行测试

    npm test