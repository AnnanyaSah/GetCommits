var express = require('express');
var app = express();


app.use('/app', express.static(__dirname + '/app'));
app.use('/home', express.static(__dirname + '/home'));
app.get('/', function (req, res) {
  res.send('Hello from Node Server!');
});

app.listen(3000, function () {
  console.log('Node Server listening on port 3000!');
});

