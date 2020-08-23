const fetch = require("node-fetch");
const to = require('await-to-js').default;
const Names = require ('./Names.js')


module.exports = {
	name: 'spirit',
	description: 'Event Search',
	public: true,
	execute(msg, args) {
        var target = "Sorry could not find the spirit you where looking for.";
        var found = false;

        outer_loop:
        for(var l = 0; l < args.length; l++){
            for( var s = 0; s < Names.spirits.length; s++){
                var name = Names.spirits[s].split(" ");
                for(var n = 0; n < name.length; n++){
                    if (!found && args[l].length > 3 && name[n].toLowerCase() == args[l].toLowerCase()){                        
                        target =  s;
                        found = true;
                        break ;//outer_loop;
                    } 
                }
            }               
        }
        if(found){
            if(args[0].toLowerCase() != 'back' || args[args.length -1].toLowerCase() != 'back'  ){
                msg.channel.send(Names.panel[target][0]);
            }
            if(args[0].toLowerCase() != 'front' || args[args.length -1].toLowerCase() != 'front' ){
                msg.channel.send(Names.panel[target][1]); 
            }
        }
        else{
            msg.channel.send(target);
        }
    }
}