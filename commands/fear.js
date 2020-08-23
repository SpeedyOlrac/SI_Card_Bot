const s = require("./sendCardLink");
const ImageNames = require ('./ImageNames.js');

module.exports = {
	name: 'fear',
	description: 'Fear card search',
    public: true,

	execute(msg, args) {
		msg.channel.send(s.sendCardLink(msg, args, ImageNames.fear, "https://sick.oberien.de/imgs/fears/"));
	},
};