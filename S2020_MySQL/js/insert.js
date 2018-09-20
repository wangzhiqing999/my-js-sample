
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



connection.query({
  sql: 'INSERT INTO test(value) VALUES (?)',
  timeout: 30000, // 30s
  values: ['TEST_INSERT']},
  function (error, results, fields) {
    if (error) throw error;
    console.log("INSERT Finish!", results);
});


connection.end();