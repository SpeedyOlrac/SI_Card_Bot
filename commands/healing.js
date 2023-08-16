/**
 * command to retrieve one of the healing cards for WWB
 */

const heal = require ('./healingNames.js');

module.exports = {
	name: 'healing',
	description: 'Get a healing card',
	public: true,
	async execute(msg, args) {          
        var panel =  "Choose a healing card (roiling, serene, renew or ruin).";
        var found = false;
        var list = [];
        
        if (args.length > 0){
           const searchString = args[0].toLowerCase();
           // if there's no second argument provided, assume they want the useful side
           const side = args.length > 1 ? args[1] : "front";
           for(const hc of heal.healing){
                if(hc.title.toLowerCase().indexOf(searchString) >= 0) {
                    panel = (side == "front") ? hc.front : hc.back;
                    // stops when the first exact match is found
                    break;
                }
            }
        }

        msg.channel.send(panel);
    }};