var createError = require('http-errors')
var express = require('express')
var path = require('path')
var cookieParser = require('cookie-parser')
var logger = require('morgan')

var indexRouter = require('./routes/index')
var usersRouter = require('./routes/users')
var aiRouter = require('./routes/ai')

var app = express()

// view engine setup
app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'pug')

app.use(logger('dev'))

app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(cookieParser())
app.use(express.static(path.join(__dirname, 'public')))

app.all('*', function (req, res, next) {
  res.header('Access-Control-Allow-Origin', '*')
  res.header('Access-Control-Allow-Headers', '*')
  res.header('Access-Control-Allow-Methods', '*')
  res.header('Content-Type', 'application/json;charset=utf-8');
  next()
})

app.use('/', indexRouter)
app.use('/users', usersRouter)
app.use('/ai', aiRouter)

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  // console.log(404)
  res.status(404)
  res.send({
    code: 404,
    msg: '没有这个接口',
    result: ''
  })
})

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  console.log(err)
  // res.locals.message = err.message
  // res.locals.error = req.app.get('env') === 'development' ? err : {}

  // render the error page
  console.log(err)
  res.status(err.status || 500)
  res.send({
    code: res.status,
    msg: err.message,
    result: err.stack
  })
})

module.exports = app

// 获取当前的环境 开发环境 还是生产环境
console.log(process.env.NODE_ENV)
