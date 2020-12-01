const s = require("./sendCardLink.js");
const ImageNames = require ('./ImageNames.js');


module.exports = {
	name: 'power',
	description: 'Power Search',
  public: true,

	async execute(msg, args) {
		var html = "https://sick.oberien.de/imgs/powers/";

		await s.sendCardLink(msg, args, ImageNames.power, html);
	},
};