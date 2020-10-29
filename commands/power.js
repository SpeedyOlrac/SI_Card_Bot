const s = require("./sendCardLink.js");
const ImageNames = require ('./ImageNames.js');


module.exports = {
	name: 'power',
	description: 'Power Search',
    public: true,

	execute(msg, args) {
		var html = "https://sick.oberien.de/imgs/powers/";

		msg.channel.send(ImageNames.noJE);
		s.sendCardLink(msg, args, ImageNames.power, html);
	},
};