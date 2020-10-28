const s = require("./sendCardLink").sendCardLink();
const ImageNames = require ('./ImageNames.js');

module.exports = {
	name: 'minor',
	description: 'Minor card search',
    public: true,

	execute(msg, args) {
		msg.channel.send(ImageNames.noJE);
		msg.channel.send(s(msg, args, ImageNames.minor, "https://sick.oberien.de/imgs/powers/"));
	},
};