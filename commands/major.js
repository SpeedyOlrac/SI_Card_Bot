const s = require("./sendCardLink.js");
const ImageNames = require ('./ImageNames.js');

module.exports = {
	name: 'major',
	description: 'Major card search',
    public: true,

	execute(msg, args) {
		s.sendCardLink(msg, args, ImageNames.major, "https://sick.oberien.de/imgs/powers/");
	},
};