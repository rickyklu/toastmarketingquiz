/*
source: https://github.com/jasonericball/get-the-weather
*/

const getTheWeather = require('get-the-weather');
const keys = require('../config/keys');
// const baseUrl = `https://api.darksky.net/forecast/${keys.darkSkyKey}/`;

// zipcode 02115 (Boston) by default
function weather(zipCode) {
	const options = {
		zip: zipCode,
		DarkSkyKey: keys.darkSkyKey /*,
		ZipCodeApiKey: keys.zipCodeKey*/
	};

	return getTheWeather(options)
		.then(result => result)
		.catch(err => console.log(`err: ${err}`));
}

module.exports = weather;
