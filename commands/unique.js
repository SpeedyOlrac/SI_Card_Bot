const s = require("./sendCardLink.js");
const ImageNames = require ('./ImageNames.js');

module.exports = {
	name: 'unique',
	description: 'Unique card search',
  public: true,

	async execute(msg, args) {
		await s.sendCardLink(msg, args, ImageNames.unique, "https://sick.oberien.de/imgs/powers/");
	},
};