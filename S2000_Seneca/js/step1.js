const seneca = require('seneca')();

// 步骤1. 最简单的例子.

// 定义服务.
seneca.add('role:math, cmd:sum', (msg, reply) => {
  reply(null, { answer: ( msg.left + msg.right )});
});

// 调用服务.
seneca.act({
  role: 'math',
  cmd: 'sum',
  left: 1,
  right: 2
}, (err, result) => {
  if (err) {
    return console.error(err);
  }
  console.log(result);
});
