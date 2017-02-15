var express = require('express');
var bodyparser = require('body-parser');
var request = require('request');

var app = express();
app.use(bodyparser.json());

app.use(function(req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization');
  res.header('AUTH-KEY', '9c078ab9-1198-4d3e-b551-c4809f49adb0');
  next();
});

app.get('/api/ausPostSuburbSearch/:query', function(req, res) {

  console.log('/api/ausPostSuburbSearch/:query');

  if (!req.params.query) {
    res.status(500);
    res.send({ "Error": "Sorry, the API must be down."} );
    console.log("Sorry, the API must be down.");
  }

  var options = {
    url: "https://digitalapi.auspost.com.au/postcode/search.json?q=" + encodeURIComponent(req.params.query),
    headers: {
      'AUTH-KEY': '9c078ab9-1198-4d3e-b551-c4809f49adb0'
    }
  };

  function callback( error, response, body ) {

    if ( error ) {
      console.log('error', error);
    }

    if (!error && response.statusCode == 200) {
      res.send( body );
    }

  }

  console.log('options.url', options.url);

  request(options, callback);

});

var port = Number(process.env.PORT || 3000);

var server = app.listen(process.env.PORT || 8080, function() {
  var port = server.address().port;
  console.log('App now running on port', port);
});

var distDir = __dirname + "/dist/prod";
app.use(express.static(distDir));
