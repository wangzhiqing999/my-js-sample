
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



// 先插入。
connection.query({
  sql: 'INSERT INTO test(value) VALUES (?)',
  timeout: 30000, // 30s
  values: ['TEST_UPDATE']},
  function (error, results, fields) {
    if (error) throw error;
    console.log("INSERT Finish!", results);

    // 测试的id。
    var testID = results.insertId;

    // 更新.
    connection.query({
      sql: 'UPDATE test SET value = ? WHERE id = ?',
      timeout: 30000, // 30s
      values: ['TEST_UPDATE_2', testID]},
      function (error, results, fields) {
        if (error) throw error;
        console.log("UPDATE Finish!", results);
        connection.end();
    });
});





