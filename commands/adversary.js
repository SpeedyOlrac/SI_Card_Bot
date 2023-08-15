
const ad = require ('./AdversaryNames.js')
const getcardname = require('./sendCardLink.js').getCardName;

module.exports = {
	name: 'adversary',
	description: 'Get an adversary',
	public: true,
	async execute(msg, args) {          
        var panel =  "Adversaries are \nPrussia, England, France, Habsburg (Livestock-Colony, HLC, Cowburg), Habsburg (Mining-Expedition, HME, Saltburg), Russia, Scotland, Sweden";
        var found = false;
        var list = [];
        
        if (args.length != 0){
           const searchString = args[0].toLowerCase();
           for(const adversary of ad.adversaries){
                console.log(adversary);
                // direct match
                if(adversary.name.toLowerCase().indexOf(searchString) >= 0) {
                    panel = adversary.panel;
                }
                // alias
                else{
                    for (const alias of adversary.alias){
                        if (alias.toLowerCase().indexOf(searchString) >= 0){
                            panel = adversary.panel;
                        }
                    }
                }
            }
        }

        msg.channel.send(panel);
    }};