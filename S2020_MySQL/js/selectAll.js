
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



connection.query('SELECT id, value FROM test', function (error, results, fields) {
  if (error) throw error;


  results.forEach(function(value,i){
　　console.log('id = ' + value.id + '; value = ' + value.value);

  });

});


connection.end();