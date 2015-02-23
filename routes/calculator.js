// list dependencies

var express = require('express');
var qs = require('querystring');
var router = express.Router();

// interpret GET /calculator 
router.get('/', function(req, res, next) {
	
	//GET the request paramter object from query string
    var params = req.url.split('?')[1];
	var paramsObj = qs.parse(params);
	
	// Store the selected method, "x" value and "y" numeric value from the request parameter object
	var method = paramsObj.method;
	var x = parseInt(paramsObj.x);
	var y = parseInt(paramsObj.y);
	
	//identify the method and perform the equivalent math calculation
	
	//initialize the variable
	var c;
	console.log(method);
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
			c = x / y;
			break;
		default:
			var usageerr = 'Sorry!! We couldn\'t process the requested method.  usage: http://localhost:3000/calculator?method=[add|subtract|multiply|divide]&x=[value]&y=[value]';
	}
	if (usageerr!='') {
		res.render('usage', { error: usageerr });
	}else {
		res.render('calculator', { title: 'Welcome to Assignment 1', Method: method, result: c} );
	}
});

// make controller public
module.exports = router;