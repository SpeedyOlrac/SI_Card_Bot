// basically just an alias for draw that only ever returns one
// also returns the URL from SICK rather than just the name
const ImageNames = require ('./ImageNames.js');
const draw = require ("./draw.js");
const s = require("./sendCardLink.js");

module.exports = {
	name: 'take',
	description: 'Take a random card and send the SICK link. For more than 1 card, use -draw instead.',
	public: true, //has to be true to show as a command
	async execute(msg, args) {
        try {
            if (args.length < 1){
                throw new Error('Please specify a type of card to draw (minor, major, fear or event). For more than 1 card, use -draw instead.');
            }

            let drawableCards = ["minor", "major", "fear", "event"];
            drawnType = args[0].toLowerCase();

            if (drawableCards.includes(drawnType)){
                // working out what url to hit on SICK
                // TODO: find where else this is used and define in environment rather than hardcode URIs
                let urlStub;
                if (drawnType == "minor" || drawnType == 'major'){
                    urlStub = "powers";
                }
                else{
                    urlStub = `${drawnType}s`;
                }

                result = draw.getRandomDraws(drawnType, 1);
                await s.sendCardLink(msg, result, ImageNames[drawnType], `https://sick.oberien.de/imgs/${urlStub}/`);
            }
            else{
                throw new Error('Please specify a type of card to draw (minor, major, fear or event) (defaults to 4 cards drawn).');
            }
        }
        catch (e){
            console.log(e);
            return msg.channel.send(e.toString());
        }
	},
};