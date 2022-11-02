const mysql = require('mysql')
const pool = mysql.createPool({
  host: 'localhost',
  port: '3307',
  user: 'root',
  password: 'xusheng94',
  database: 'world'
})

const query = function (sql, options, callback) {
  pool.getConnection(function (err, connection) {
    if (err) {
      callback(err, null, null)
    } else {
      connection.query(sql, options, function (err, results, fields) {
        //事件驱动回调
        callback(err, results, fields)
      })
      //释放连接，需要注意的是连接释放需要在此处释放，而不是在查询回调里面释放
      connection.release()
    }
  })
}

module.exports = query
