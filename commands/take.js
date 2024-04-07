// basically just an alias for draw that only ever returns one
// also returns the URL from SICK rather than just the name
const cards = require ("./ImageNames.js");
const card = require ("./card.js");
const draw = require ("./draw.js");


module.exports = {
	name: 'take',
	description: 'take a random card and send the SICK link',
	public: true, //has to be true to show as a command
	async execute(msg, args) {
        try {
            if (args.length < 1){
                throw new Error('Please specify a type of card to draw (minor, major, fear or event) (defaults to 4 cards drawn).');
            }
            drawnType = args[0].toLowerCase();
            return msg.channel.send(draw.getRandomDraws(drawnType, 1));
        }
        catch (e){
            console.log(e);
            return msg.channel.send(e.toString());
        }
	},
};