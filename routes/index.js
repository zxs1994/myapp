var express = require('express');
var router = express.Router();
const query = require('../mysqlpool')

/* GET home page. */
router.get('/', function(req, res, next) {
  
  query('SELECT * FROM user', function (err, rows, fields) {
    if (err) throw err
    // res.render('index', { title: 'Express' });
    // console.log(fields)
    // console.log(rows[0])
    res.send(rows)
    res.send('hello world')
  })
});

module.exports = router;
