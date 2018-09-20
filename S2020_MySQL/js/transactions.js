
var mysql      = require('mysql');

var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'test',
  password : '123456',
  database : 'test',
});


connection.connect(function(err) {
  if (err) {
    console.error('error connecting: ' + err.stack);
    return;
  }

  console.log('connected as id ' + connection.threadId);
});


// 测试的id。
var testID = 1;

connection.beginTransaction(function(err) {
  if (err) { throw err; }

  // 更新.
  connection.query({
    sql: 'INSERT INTO test(value) VALUES (?)',
    timeout: 30000, // 30s
    values: ['TEST_TRANSACTION']},
    function (error, results, fields) {
      if (error) {
        return connection.rollback(function() {
          throw error;
        });
      }
      console.log("INSERT test Finish!", results);

      var logData = 'Post ' + results.insertId + ' added';

      connection.query({
        sql: 'INSERT INTO test_log (data) VALUES(?)',
        timeout: 30000, // 30s
        values: [logData]},
        function (error, results, fields) {
            if (error) {
              return connection.rollback(function() {
                throw error;
              });
            }
            console.log("INSERT test_log Finish!", results);

            connection.commit(function(err) {
              if (err) {
                return connection.rollback(function() {
                  throw err;
                });
              }
              console.log('success!');
              connection.end();
            });
        });
    });
});

