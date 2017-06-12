var express = require('express');
//var cors = require('cors');
// create app
var app = express();
/*
var allowCrossDomain = function(req, res, next) {
    res.header('Access-Control-Allow-Origin', 'samples.openweathermap.org');
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
    res.header('Access-Control-Allow-Headers', 'Content-Type');

    next();
}
*/

//app.use(allowCrossDomain);
app.use(express.static('public'));

app.listen(3000, function () {
    console.log('Express server is up on port 3000');
}); 