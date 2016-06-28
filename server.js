var express 	= require('express')
var logger  	= require('morgan')
var bodyParser 	= require('body-parser')
var mongoose   	= require('mongoose')
var apiRouter	= require('./api_routes')

var port	   	= process.env.PORT || 1337;

var app 		= express()

mongoose.connect('mongodb://localhost/donuts', function(err) {
	if (err) {
		console.log("Error: Connecting to DB donuts", err);
	} else {
		console.log("Success: Connected to Donuts")
	}
})

app.use(bodyParser.json()) 							// PARSE ALL FORM DATA TO JSON
app.use(bodyParser.urlencoded({ extended: true })) 	// ALLOW URL-ENCODED TO BE PARSED
app.use(logger('dev'));
app.use('/api/v0', apiRouter)

app.listen(port, function(err) {
	if (err) {
		console.log("Error: Starting up server on", port)
	} else {
		console.log("Success: Server started on port", port)
	}
})

