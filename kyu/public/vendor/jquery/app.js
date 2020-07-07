var express = require('express');
var module_template = require('./template.js');

var app = express();

app.get('/home', function(req, res) {
  template = module_template.HOME();
  return res.send(template);
});

app.get('/click', function(req, res) {
  template = module_template.CLICK();
  return res.send(template);
});

app.listen(8080, function() {
  console.log('server start');
});
