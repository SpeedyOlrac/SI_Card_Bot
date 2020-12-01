const s = require("./sendCardLink.js");
const ImageNames = require ('./ImageNames.js');

module.exports = {
	name: 'minor',
	description: 'Minor card search',
  public: true,

	async execute(msg, args) {
		await s.sendCardLink(msg, args, ImageNames.minor, "https://sick.oberien.de/imgs/powers/");
	},
};