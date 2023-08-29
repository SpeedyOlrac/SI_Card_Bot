
const ad = require ('./AdversaryNames.js')
const getcardname = require('./sendCardLink.js').getCardName;

module.exports = {
	name: 'adversary',
	description: 'Get a single adversary panel',
	public: true,
	async execute(msg, args) {          
        var panel =  "";
        var found = false;
        var list = [];
        
        // if an adversary parameter is provided
        if (args.length != 0){
           const searchString = args[0].toLowerCase();
           for(const adversary of ad.adversaries){
                // direct match
                if(adversary.name.toLowerCase().indexOf(searchString) >= 0) {
                    panel = adversary.panel;
                    found = true;
                    break;
                }
                // alias
                else{
                    for (const alias of adversary.alias){
                        if (alias.toLowerCase().indexOf(searchString) >= 0){
                            panel = adversary.panel;
                            found = true;
                            break;
                        }
                    }
                }
            }
        }
        // if no match found or no argument provided, assume they want a list of adversaries
        if (args.length == 0 | !found){
            panel = "Choose an adversary: (aliases) \n";
            for (const adversary of ad.adversaries){
                panel += "* " + adversary.name + " (" + adversary.alias.join(" , ") + ")\n";
            }
        }

        msg.channel.send(panel);
    }};