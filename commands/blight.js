const s = require("./sendCardLink.js");
const ImageNames = require ('./ImageNames.js');

module.exports = {
	name: 'blight',
	description: 'Blight card search',
    public: true,

	async execute(msg, args) {
		await s.sendCardLink(msg, args, ImageNames.allBlightCards, "https://sick.oberien.de/imgs/blights/");
	},
};
