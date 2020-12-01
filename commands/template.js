// can be used as template
//save as command as commandName.js



module.exports = {
	name: 'template',
	description: 'Template',
	public: false, //has to be true to show as a command
	async execute(msg, args) {
		await msg.channel.send('output of command');
	},
};