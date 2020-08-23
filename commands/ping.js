//testing command can be used as template
//save command as commandName.js

module.exports = {
	name: 'ping',
	description: 'Ping!',
	public: true,
	execute(msg, args) {
		msg.channel.send('Pong.');
	},
};