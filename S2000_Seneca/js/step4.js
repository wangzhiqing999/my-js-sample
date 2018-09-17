function math(options) {

  this.add('role:math,cmd:sum', function (msg, respond) {
    respond(null, { answer: msg.left + msg.right })
  });

  this.add('role:math,cmd:product', function (msg, respond) {
    respond(null, { answer: msg.left * msg.right })
  });

}

// 这种写法，运行时，输出详细的日志信息.
require('seneca')()
  .use(math)
  .act('role:math,cmd:sum,left:1,right:2', console.log);
