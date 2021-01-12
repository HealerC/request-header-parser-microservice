// server.js
// where your node app starts

// init project
var express = require('express');
var app = express();

// enable CORS (https://en.wikipedia.org/wiki/Cross-origin_resource_sharing)
// so that your API is remotely testable by FCC 
var cors = require('cors');
app.use(cors({optionsSuccessStatus: 200}));  // some legacy browsers choke on 204

// http://expressjs.com/en/starter/static-files.html
app.use(express.static('public'));

// http://expressjs.com/en/starter/basic-routing.html
app.get("/", function (req, res) {
  res.sendFile(__dirname + '/views/index.html');
});


// your first API endpoint... 
app.get("/api/hello", function (req, res) {
  res.json({greeting: 'hello API'});
});



// listen for requests :)
var listener = app.listen(8000, function () {
  console.log('Your app is listening on port ' + listener.address().port);
});


//APP
/* When the user requests using this route, it gets the user's ip, the language 
of the user, and the browser infomation and sends it back as json to the user 

The ip can be gotten directly from the request object while the rest (language 
and browser) is gotten from the req.headers (a node/express object that has info
about the browser of the client) */
app.get("/api/whoami", (req, res) => {
	const ip = req.ip;									// Ip address
	const language = req.headers["accept-language"];	// Language
	const software = req.headers["user-agent"];			// Browser
	
	res.json({
		ipaddress: ip,
		language: language,
		software: software
	});
});