// keys.js - figure out which credentials to return
// create a file 'dev.js' that holds the API key

/*
example contents of a 'dev.js' file:

----see code below----
module.exports = {
	darkSkyKey: ENTER_YOUR_KEY_HERE
};
----see code above----

*/
// keys.js - figure out which credentials to return

if (process.env.NODE_ENV === 'production') {
	module.exports = require('./prod');
} else {
	module.exports = require('./dev');
}
