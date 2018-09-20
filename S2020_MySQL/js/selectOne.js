
var mysql      = require('mysql');

var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'test',
  password : '123456',
  database : 'test'
});


connection.connect(function(err) {
  if (err) {
    console.error('error connecting: ' + err.stack);
    return;
  }

  console.log('connected as id ' + connection.threadId);
});


// 这里的查询中，使用了 id = ? 这样的写法， 具体的参数的数值，在下面的 values 那里定义了.
connection.query({
  sql: 'SELECT id, value FROM test where id = ?',
  timeout: 30000, // 30s
  values: [1]},
  function (error, results, fields) {
    if (error) throw error;
    results.forEach(function(value,i){
      console.log('id = ' + value.id + '; value = ' + value.value);
    });
});


connection.end();