const s = require("./sendCardLink.js");
const ImageNames = require ('./ImageNames.js');


module.exports = {
	name: 'power',
	description: 'Power Search',
    public: true,

	execute(msg, args) {
		msg.channel.send(ImageNames.noJE);
		msg.channel.send( s.sendCardLink(msg, args, ImageNames.power, "https://sick.oberien.de/imgs/powers/"));
	},
};