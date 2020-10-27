const fetch = require("node-fetch");
const to = require('await-to-js').default;
const spirits = require ('./spiritNames.js').spirits;
const getCardName = require ('./sendCardLink.js').getCardName;

module.exports = {
	name: 'spirit',
	description: 'Spirit Search',
	public: true,
	execute(msg, args) {
        var target = "Sorry could not find the spirit you where looking for.";

        if(args.length < 1){
            msg.channel.send(target);
            return;
        }

        var availableNames = [];
        for( var s = 0; s < spirits.length; s++){
                availableNames.push(spirits[s].name);
            }
        var results = getCardName(args, availableNames, 0.6);
        console.log(results);

        //msg.channel.send(spirits[target].title );
        for( var s = 0; s < spirits.length; s++){
            if(spirits[s].name == results){
                target = s;
            }
        }

        if(args[0].toLowerCase() != 'back' && args[args.length -1].toLowerCase() != 'back'  ){
            msg.channel.send(spirits[target].panel[0]);
        }
        if(args[0].toLowerCase() != 'front' && args[args.length -1].toLowerCase() != 'front' ){
            msg.channel.send(spirits[target].panel[1]); 
        }
     
    }
}