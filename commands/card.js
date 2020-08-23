
const power = require('./power.js');

module.exports = {
	name: 'card',
	description: 'Card Search',
	public: true,
	execute(msg, args) {
		power.execute(msg, args);
	},
};