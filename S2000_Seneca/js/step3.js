const seneca = require('seneca')();

// 步骤3. 定义两个服务.
// 服务2 复用 服务1.

// 定义服务1.
seneca.add('role: math, cmd: sum', function (msg, respond) {
  var sum = msg.left + msg.right
  respond(null, {answer: sum})
});

// 定义服务2.
seneca.add('role: math, cmd: sum, integer: true', function (msg, respond) {
  // 复用 role:math, cmd:sum
  this.act({
    role: 'math',
    cmd: 'sum',
    left: Math.floor(msg.left),
    right: Math.floor(msg.right)
  }, respond)
});



// 调用服务1.
seneca.act({
  role: 'math',
  cmd: 'sum',
  left: 1.5,
  right: 2.5
}, (err, result) => {
  if (err) {
    return console.error(err);
  }
  console.log(result);
});



// 调用服务2.
seneca.act({
  role: 'math',
  cmd: 'sum',
  left: 1.5,
  right: 2.5,
  integer: true
}, (err, result) => {
  if (err) {
    return console.error(err);
  }
  console.log(result);
});
