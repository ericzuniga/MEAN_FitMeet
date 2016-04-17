// require('rootpath')();
var express = require('express');
var app = express();
var session = require('express-session');
var bodyParser = require('body-parser');
var expressJwt = require('express-jwt');
var config = require('config.json');

var server = app.listen(9000, function () {
    console.log('Server listening at http://' + server.address().address + ':' + server.address().port);
});