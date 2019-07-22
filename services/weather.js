const axios = require('axios');
const keys = require('../config/keys');

function weather(gps) {
	const url = `https://api.darksky.net/forecast/${keys.darkSkyKey}/${gps}`;
	return axios
		.get(url)
		.then(res => res.data)
		.catch(err => console.log(`err: ${err}`));
}

module.exports = weather;
