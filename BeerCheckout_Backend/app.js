/**
 * Created by Anthony on 19/09/2015.
 */
/**
 * Load Modules
 */

var express = require('express');
var app     = express();
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "http://localhost:63342");
    res.header('Access-Control-Allow-Credentials', true);
    res.header("Access-Control-Allow-Headers", "Content-Type,Access-Control-Allow-Methods, Access-Control-Allow-Headers, Authorization, X-Requested-With");
    res.header("Access-Control-Allow-Methods", "PUT, GET, POST, DELETE, OPTIONS");
    next();
});
var http = require('http');
var server = http.createServer(app);
var path = require('path');
var morgan      = require('morgan');
var bodyParser  = require('body-parser');
global.mongoose = require('mongoose');

var router = express.Router();


/**
 * Variables
 */

var port = 8080;

var databaseURL = 'mongodb://:@localhost/BeerCheckout';
app.use(express.static(path.join(__dirname, 'public')));

/**
 * Database connection
 */

mongoose.connect(databaseURL);

var db = mongoose.connection;

db.on('error',function(){console.log('connection error')});
db.once('open',function(){console.log('connection open')});

/**
 * Middlewares
 */
app.use(function(request,response,next){
    request.db = db;
    next();
});

//Morgan
app.use(morgan('dev'));

//BodyParser
app.use(bodyParser.urlencoded({ extended: true }));

/**
 * Routing
 */

require('./router')(router);
app.use(router);

server.listen(port);
console.log('Server is ready on port ' + port);
