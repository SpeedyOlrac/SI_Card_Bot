
const power = require('./power.js');

module.exports = {
	name: 'card',
	description: 'Card Search',
	public: true,
	async execute(msg, args) {
		await power.execute(msg, args);
	},
};