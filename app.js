const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

// service that combines Dark Sky API + zip code to GPS coords
const weather = require('./services/weather');

const PORT = process.env.PORT || 5000;

const app = express();
app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/api/weather/:gps', async (req, res) => {
	const gps = req.params.gps;
	const result = await weather(gps)
		.then(response => {
			return response.daily;
		})
		.catch(err => console.log(err));

	res.send(result);
});

if (process.env.NODE_ENV === 'production') {
	// express serves production assets (i.e. main.js, main.css)
	app.use(express.static('client/build'));
	app.get('*', (req, res) => {
		res.sendFile(path.join(__dirname + '/client/build/index.html'));
	});
	console.log('using production');
	console.log(process.env.DARK_SKY_KEY);
	console.log(process.env.GOOGLE_PLACES_KEY);
}

app.listen(PORT, process.env.IP, function() {
	console.log('server is running... on port ', PORT);
});
