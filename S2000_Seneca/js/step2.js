const seneca = require('seneca')();

// 步骤2. 定义两个服务.

// 定义服务1.
seneca.add('role:math, cmd:sum', (msg, reply) => {
  reply(null, { answer: ( msg.left + msg.right )})
});

// 定义服务2.
seneca.add('role:math, cmd:product', (msg, reply) => {
  reply(null, { answer: ( msg.left * msg.right )})
});



// 调用服务1.
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



// 调用服务2.
seneca.act({
  role: 'math',
  cmd: 'product',
  left: 3,
  right: 4
}, (err, result) => {
  if (err) {
    return console.error(err);
  }
  console.log(result);
});
