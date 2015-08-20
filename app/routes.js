// app/routes.js

// grab the nerd nodel we just created
var Nerd = require('./models/nerd');

	module.exports = function(app) {

		// server routes ========================================
		// handle things like api calls
		// authentication routes

		// sample api route
		app.get('/api/nerds', function(req, res) {
			//use mongo to get all nerds in the database
			Nerd.find(function(err, nerds) {
				
				// if there is an error retrieving, send the error.
								// nothing after res.send(err) will execute
				if(err)
					res.send(err);

				res.json(nerds); // return all nerd in JSON format
			});
		});

		// route to handle creating goes here (app.post)
		// route to handle delete goes here (app.delete)

		// frontend routes ==============================================
		// route too handle all angular requests
		app.get('*', function(req, res) {
			res.sendfile('./public/views/index.html'); //load our public/index.html file
			//res.send("hi");
		});

	};

/*	var actualWork = function()
	{
		code();
	}

	var work = function(callback)
	{
		for(var i = 0; i >= 0; i++)
		{
			receiveMessageFromJay();
		}

		callback();
	}

	work(actualWork);
*/
	

