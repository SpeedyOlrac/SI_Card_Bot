//testing command can be used as template
//save command as commandName.js

module.exports = {
	name: 'ping',
	description: 'Ping!',
	public: true,
	async execute(msg, args) {
		await msg.channel.send('Pong.');
	},
};