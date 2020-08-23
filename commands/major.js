const s = require("./sendCardLink");
const ImageNames = require ('./ImageNames.js');

module.exports = {
	name: 'major',
	description: 'Major card search',
    public: true,

	execute(msg, args) {
		msg.channel.send(s.sendCardLink(msg, args, ImageNames.major, "https://sick.oberien.de/imgs/powers/"));
	},
};