var express = require('express');
var path = require('path');

var modOne = require('./modules/modOne.js');
var modTwo = require('./modules/modTwo.js');
var modThree = require('./modules/modThree.js');


var app = express();
var port = 3100;

app.use(express.static('public'));

app.get('/balance',function(request, response) {
  response.send(modThree.randomToCurrency(100,1000000));
});

app.listen(port, function(request, response){
  console.log('Listening! Port:', port);
});