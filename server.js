// require('rootpath')();
var express = require('express');
var app = express();
var session = require('express-session');
var bodyParser = require('body-parser');
var expressJwt = require('express-jwt');
var config = require('config.json');
var path = require('path');
var bootstrap = require('bootstrap');


//routes
// app.use ('/login', require('./controllers/login.controllers'));

app.use(express.static(path.join(__dirname, "./static")));
// setting up ejs and our views folder
app.set('views', path.join(__dirname, './views'));
app.set('view engine', 'ejs');
// test route
app.get('/myaccount', function(req, res) {
 res.render("index");
})

//test routes
app.get('/myaccount', function(res, req){
    res.render('./views/index.ejs');
});

var server = app.listen(9000, function () {
    console.log('Server listening at http://' + server.address().address + ':' + server.address().port);
});