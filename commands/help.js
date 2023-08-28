var help = "List of commands: \
	\n -search [search words]\
	\n -power [card name] \
	\n -minor [card name] \
	\n -major [card name] \
	\n -unique [card name] \
	\n -blight [card name] \
	\n -event [event name] \
	\n -fear [fear name] \
	\n -faqs (search words) \
	\n -random [spirit/adversary/scenario] (min difficulty) (max difficulty)  \
	\n -spirit (front/back) [keywords] \
	\n -adversary (name) \
	\n -aspect (spirit or aspect) [aspect keywords] [number of card (i.e. Locus part 1/2)] \
	\n -healing [keyword] \
	\n -incarna [keyword] (front/back) \
	\n -scenario (front/back) [keywords] \
	"

module.exports = {
	name: 'help',
	description: 'lists of commands',
	public: true,
	async execute(msg, args) {
		await msg.channel.send(help);
	},
};





