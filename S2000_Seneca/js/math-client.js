require('seneca')()
  .client({ port:8090, host:'127.0.0.1'})
  .act('role:math,cmd:sum,left:1,right:2',console.log);
