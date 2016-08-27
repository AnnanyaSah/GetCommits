var express = require('express');
var app = express();

app.set('port', (process.env.PORT || 5000));

app.use('/app', express.static(__dirname + '/app'));
app.use('/home', express.static(__dirname + '/home'));
app.get('/', function (req, res) {
  res.send('Hello from Node Server!');
});

app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});

