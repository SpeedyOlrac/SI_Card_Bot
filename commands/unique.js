const s = require("./sendCardLink.js");
const ImageNames = require ('./ImageNames.js');

module.exports = {
	name: 'unique',
	description: 'Unique card search',
    public: true,

	execute(msg, args) {
		s.sendCardLink(msg, args, ImageNames.unique, "https://sick.oberien.de/imgs/powers/");
	},
};