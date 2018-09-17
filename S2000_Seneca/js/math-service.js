require('seneca')()
  .use('math')
  .listen({ port:8090, host:'127.0.0.1'});
