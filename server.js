//server.js


//modules =======================================================
var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var methodOverride = require('method-override');

//configuration

var MongoClient = require('mongodb').MongoClient;

MongoClient.connect('mongodb://localhost:27017/mean',function(err, db)
//config files
{
	//var db = require('./config/db');

// set our port
var port = process.env.PORT || 8080;

// connect to our mongoDB database
// (uncomment after you enter you own credentials in config/db.js)
 //mongoose.connect(db.url);

// get all data/stuff of the body (POST) parameters
// parse application/json
app.use(bodyParser.json());

//parse application/vnd.api+json as json
//app.use(bodyParser.json({type: 'application/vnd.api+json' }));

//parse application/x-www.form-urlencoded
app.use(bodyParser.urlencoded({extended : true}));

// override with the X-HTTP-Method-Override header in the request. simulate DELETE/PUT
app.use(methodOverride('X-HTTP-Method-Override'));

// set the static files location /public/img will be /img for users
app.use(express.static(__dirname + '/public'));

// routes ====================================================
require('./app/routes')(app); //configure out routes

// start app ==================================================
// startup out app at http://localhost:8888
app.listen(port);

//shoutout to the users
console.log('Magic happens on port ' + port);
});

//expose app
exports = module.exports = app;