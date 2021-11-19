var express = require('express');
var axios = require('axios');
const app = express();
app.use(function (req, res, next) {
	// Website you wish to allow to connect
	res.setHeader('Access-Control-Allow-Origin', 'http://localhost:4200');

	// Request methods you wish to allow

	// Pass to next layer of middleware
	next();
});
app.get('/', function (req, res, next) {
	console.log('H');
	axios
		.get('https://api.covidtracking.com/v1/states/current.json')
		.then((response) => {
			res.send(response.data);
		})
		.catch((err) => {
			res.send('error');
		});
});
app.get('/us', function (req, res, next) {
	console.log('H');
	axios
		.get('https://api.covidtracking.com/v1/us/current.json')
		.then((response) => {
			res.send(response.data[0]);
		})
		.catch((err) => {
			res.send('error');
		});
});

app.listen(3000, function (error) {
	if (error) {
		console.log('something went wrong', error);
	} else {
		console.log('LISTENING');
	}
});
