const adversary = require ('./AdversaryNames.js').adversary;

module.exports = {
	name: 'adversary',
	description: 'Get an adversaries',
	public: true,
	async execute(msg, args) {
        console.log(args.length);
        var panel = "";
        var found = false;
        var list = [];
        if (args.length == 0){
             panel = "Adversaries are \n Prussia, Engalnd, France, Habsburg, Russia, Scotland, Sweeden";
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