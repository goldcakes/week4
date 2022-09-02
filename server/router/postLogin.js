var fs = require('fs');

module.exports = function(req, res) {
  var u = req.body.username
  var b = req.body.birthdate;
  var a = req.body.age;
  var e = req.body.email;
  var p = req.body.password;
  var v = req.body.valid;
  c = u + b + a + e + p + v;
  console.log(c)
  fs.readFile('./server/data/users.json', 'utf8', function(err, data) {
    if (err) throw err;
    let userArray = JSON.parse(data);
    console.log(userArray);
    let i = userArray.findIndex(user =>
      ((user.username == u) && (user.pwd == p)));
    if (i == -1) {
      res.send({ 'ok': false });
    } else {
      console.log(userArray[i]);
      res.send({ "ok": true });
    }
  });
}