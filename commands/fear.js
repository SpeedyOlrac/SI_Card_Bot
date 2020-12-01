const s = require("./sendCardLink");
const ImageNames = require ('./ImageNames.js');

module.exports = {
	name: 'fear',
	description: 'Fear card search',
  public: true,

	async execute(msg, args) {
		await msg.channel.send(s.sendCardLink(msg, args, ImageNames.fear, "https://sick.oberien.de/imgs/fears/"));
	},
};