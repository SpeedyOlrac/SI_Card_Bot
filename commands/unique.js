const s = require("./sendCardLink");
const ImageNames = require ('./ImageNames.js');

module.exports = {
	name: 'unique',
	description: 'Unique card search',
    public: true,

	execute(msg, args) {
		msg.channel.send(s.sendCardLink(msg, args, ImageNames.unique, "https://sick.oberien.de/imgs/powers/"));
	},
};