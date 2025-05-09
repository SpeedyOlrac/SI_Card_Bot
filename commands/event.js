const s = require('./sendCardLink.js');
const ImageNames = require ('./ImageNames.js');

module.exports = {
	name: 'event',
	description: 'Event Search',
	public: true,
	async execute(msg, args) {
    await msg.channel.send(s.sendCardLink(msg, args, ImageNames.event, "https://sick.oberien.de/imgs/events/", ImageNames.eventAliases));
	},
};