// list dependencies
var express = require('express');
var qs = require('querystring');
var router = express.Router();

// interpret GET /calculator 
router.get('/', function(req, res, next) {
	
	//GET the request parameter object from query string
    var params = req.url.split('?')[1];
	var paramsObj = qs.parse(params);
	
	// Store the selected method, "x" value and "y" numeric value from the request parameter object
	var method = paramsObj.method;
	var x = parseInt(paramsObj.x);
	var y = parseInt(paramsObj.y);
	
	//identify the method and perform the equivalent math calculation
	
	//initialize the variable
	var c;
	
	switch(method) {
		case 'add':
			c = x + y;
			break;
		case 'subtract':
			c = x - y;
			break;
		case 'multiply':
			c = x * y;
			break;
		case 'divide':
			c = (x / y).toFixed(2);
			break;
	}
	res.render('calculator', { title: 'Welcome to Assignment 1', Method: method, result: c} );
});

// make controller public
module.exports = router;