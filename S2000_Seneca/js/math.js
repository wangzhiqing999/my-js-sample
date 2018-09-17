module.exports = function math(options) {

  this.add('role:math,cmd:sum', function sum(msg, respond) {
    respond(null, { answer: msg.left + msg.right });
  });

  this.add('role:math,cmd:product', function product(msg, respond) {
    respond(null, { answer: msg.left * msg.right });
  });

  // seneca.wrap 方法可以匹配一组模式，
  // 同使用相同的动作扩展函数覆盖至所有被匹配的模式，
  // 这与为每一个组模式手动调用 seneca.add 去扩展可以得到一样的效果，它需要两个参数：
  // 1. pin ：模式匹配模式
  // 2. action ：扩展的 action 函数
  this.wrap('role:math', function (msg, respond) {
    msg.left  = Number(msg.left).valueOf();
    msg.right = Number(msg.right).valueOf();
    this.prior(msg, respond);
  });
}
