// can be used as template
//save command as commandName.js



module.exports = {
	name: 'template',
	description: 'Template',
	public: false, //has to be true to show as a command
	execute(msg, args) {
		msg.channel.send('output of command');
	},
};