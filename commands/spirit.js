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
         var availableNames = [];

        if(args.length < 1){
            msg.channel.send(target);
            return;
        }

        for( var s = 0; s < spirits.length; s++){
                availableNames.push(spirits[s].name);
            }
        var results = getCardName(args, availableNames);
        console.log(results);
        /* 
        
        outer_loop:
        for(var l = 0; l < args.length; l++){
            for( var s = 0; s < spirits.length; s++){
                var name = spirits[s].name.split(" ");
                for(var n = 0; n < name.length; n++){
                    if (!found && args[l].length > 3 && name[n].toLowerCase() == args[l].toLowerCase()){                        
                        target =  s;
                        found = true;
                        break ;//outer_loop;
                    } 
                }
            }               
        } */

        //msg.channel.send(spirits[target].title );
        if(result){
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
        else{
            msg.channel.send(target);
        }
    }
}