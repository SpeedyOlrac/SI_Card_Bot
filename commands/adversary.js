const adversary = require ('./AdversaryNames.js').adversary;
const ad = require('./AdversaryNames.js').ad;

module.exports = {
	name: 'adversary',
	description: 'Get an adversaries',
	public: true,
	async execute(msg, args) {

        console.log( ad + ` 1` );
          
        var panel = "";
        var found = false;
        var list = [];
        if (args.length == 0){
             panel = "Adversaries are \n Prussia, England, France, Habsburg, Russia, Scotland, Sweden";
        }
        else{
            for(const ad of adversary){
                //  list.concat(ad.name);
                //cardSearch.getcardname(args[0], list);
                if(!found && ad.title == args[0].toLowerCase()){
                    panel = ad.panel;
                    found = true;
                }
            }
        }

        msg.channel.send(panel);
    }};