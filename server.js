var express = require('express');
var bodyparser = require('body-parser');

var app = express();
app.use(bodyparser.json());

app.use(function(req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization');
  next();
});

var port = Number(process.env.PORT || 3000);

var distDir = __dirname + "/dist/prod";
app.use(express.static(distDir));
