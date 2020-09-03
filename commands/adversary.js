const adversary = require ('./AdversaryNames.js');

module.exports = {
	name: 'adversary',
	description: 'Get an adversaries',
	public: true,
	async execute(msg, args) {
        
        var panel = "";
        if (args[0].length == 0){
             panel = "Adversaries are \n Prussia, Engalnd, France, Habsburg, \
                         Russia, Scotland, Sweeden";
        }
        var found = false;
        var list = [];

        for(const ad of adversary ){
            //  list.concat(ad.name);
            //cardSearch.getcardname(args[0], list);
            if(!found && ad.title == args[0].toLowerCase()){
                panel = ad.panel;
                found = true;
            }
        }
        msg.channel.send(panel);
    }};