var express = require('express');
var app = express();

var cors = require('cors');
app.use(cors());

app.use(express.urlencoded({extended: true}))
app.use(express.json())
app.use(express.static(__dirname + '../dist/week4tut'));
console.log(__dirname);

var http = require('http').Server(app);
let server = http.listen(3000, function () {
  let host = server.address().address
  let port = server.address().port
  console.log("My Nodejs Server!")
  console.log("Server listening on: " + host + " port: " + port)
})

// Route to check user credentials
app.post('/api/auth', function(req, res){
  if (!req.body) {
    return res.sendStatus(400)
  }
  var user = {people: [{email:"abc@test.com", password:"123"}, {email:"def@test.com", password:"456"}, {email:"ghi@test.com", password:"789"}]}
  user.email = req.body.email
  user.pwd = req.body.pwd
  if (req.body.email == "abc@test.com" && req.body.pwd == "123" || req.body.email == "def@test.com" && req.body.pwd == "456" || req.body.email == "ghi@test.com" && req.body.pwd == "789") {
    console.log("Success")
    user.valid = true
  } else {
    console.log("Failed")
    user.valid = false
  }
  res.send(user)
})

// var express = require('express');
// var app = express();
// var cors = require('cors');
// app.use(cors());

// app.use(express.urlencoded({extended: true}))
// app.use(express.json())
// app.use(express.static(__dirname + '../dist/week4tut'));
// console.log(__dirname);

// var http = require('http').Server(app);
// let server = http.listen(3000, function () {
//   let host = server.address().address
//   let port = server.address().port
//   console.log("My Nodejs Server!")
//   console.log("Server listening on: " + host + " port: " + port)
// })

// app.post('/api/auth', require('./router/postLogin'))
// app.post('/loginafter', require('./router/postLoginafter'))
