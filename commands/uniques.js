/**
 * Sends a list of all a spirit's uniques as a Discord markdown message
 */
const spirit = require('./spirit.js');
const draw = require('./draw.js');

module.exports = {
	name: 'uniques',
	description: 'Gets a list of all the uniques for a spirit',
    public: true,

	async execute(msg, args) {
        try{
            if (args.length < 1) {
                throw new Error("Please provide at least 3 letters to query with.");
            }

            // retrieves the closest spirit to the search term
            const possibleSpirits = spirit.searchForSpirit(args.join(" ").toLowerCase());

            // if levenshtein returns a single spirit, return that
            if (possibleSpirits.length === 1) {
                const spirit = possibleSpirits[0];
                
                const spiritUniques = draw.capitalizeTheFirstLetterOfEachWord(spirit.uniques)
                message = `${spirit.name} (${spirit.emote}) has the following uniques: \n`
                console.log(spirit);
                console.log(spirit.uniques);
                for (var s = 0; s < spiritUniques.length; s++){
                    message += `* ${spiritUniques[s]} \n`;
                }
                return msg.channel.send(message);
                
            }
            else {
                    throw new Error("Try again with a more specific string.");
            }
            // assuming there IS a spirit that matches, then generates a markdown bulletpointed list of all the uniques
            // formatted in card style

        }
        catch (e){
            console.log(e);
            return msg.channel.send(e.toString());
        }
	},
};