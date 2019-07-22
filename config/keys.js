// keys.js - figure out which credentials to return
/* selects which key to use (either development key or
	 production key) if using different keys for development 
	 vs production environments

example contents of a 'dev.js' file:

----see code below----
module.exports = {
	darkSkyKey: ENTER_YOUR_KEY_HERE
};
----see code above----

*/

if (process.env.NODE_ENV === 'production') {
	module.exports = require('./prod');
} else {
	module.exports = require('./dev');
}
