
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
                // if there is a panel with that string in the title, return it
                // checks for exact title matches to avoid Prussia - Russia problem
                if(adversary.title.toLowerCase() == searchString) {
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
            panel = "Choose an adversary: \n";
            for (const adversary of ad.adversaries){
                panel += "* " + adversary.name + " (" + adversary.title + ", " + adversary.alias.join(" , ") + ")\n";
            }
        }

        msg.channel.send(panel);
    }};