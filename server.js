/*
 * Module dependencies
 */

// this will load the environment (.env) file from root
require('dotenv').config()

console.log("Node running ON env: ", process.env.environment);

var
  express       = require('express'),
  connect       = require('connect'),
  bodyParser    = require('body-parser'),
  validator     = require('express-validator'),
  app           = express(),
  mysql			= require('mysql'),
  port          = process.env.PORT || 4300;


// Configuration
app.use(express.static(__dirname + '/public'));
// app.use(connect.logger());


// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ limit: "50mb", extended: true, parameterLimit:50000 }));

// parse application/json
app.use(bodyParser.json({limit: "50mb"}));

app.use(validator());

// extend validators
require('./helpers/extend_validators.js')(app, validator);

// Routes
require('./routes/routes.js')(app, express);

// Listen on the port
app.listen(port, function(){
	console.log("The node will run on " + port)
});
