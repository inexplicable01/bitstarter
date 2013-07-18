var express = require('express');

var app = express();

app.get('/', function(request, response) {
var fs = require('fs');

var data = fs.readFileSync('index.html');
  response.send(data.toString('utf-8'));

});

var port = process.env.PORT || 8080;
app.listen(port, function() {
  console.log("Listening on " + port);
});
