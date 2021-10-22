var express = require('express')
var cookieParser = require('cookie-parser')
var app = express()
app.use(cookieParser())

app.get('/login', function (req, res) {
  if (req.query !== undefined) {
    res.cookie("name", req.query.name);
  }
  res.end();
})

app.get('/hello', function (req, res) {
  if (req.cookies) {
    res.send(`Welcome ${req.cookies.name}!`)
  } else {
    res.send(`No cookies for you..`)
  }
})

app.listen(3000)

// curl command that sends an HTTP request with two cookies
// curl http://127.0.0.1:3000 --cookie "Cho=Kim;Greet=Hello"