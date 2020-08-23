const fetch = require("node-fetch");
const to = require('await-to-js').default;
const Names = require ('./Names.js')


module.exports = {
	name: 'spirit',
	description: 'Event Search',
	public: true,
	execute(msg, args) {
        var list = args;
        var target = "Sorry could not find the spirit you where looking for.";
        var found = false;

        outer_loop:
        //console.log(list.length + " " + Names.spirits.length);
        for(var l = 1; l < list.length; l++){
            for( var s = 0; s < Names.spirits.length; s++){
                var name = Names.spirits[s].split(" ");
                for(var n = 0; n < name.length; n++){
                    if (!found && list[l].length > 3 && name[n].toLowerCase() == list[l].toLowerCase()){                        
                        target = s;
                        found = true;
                        break ;//outer_loop;
                    } 
                }
            }               
        }
        if(found){
            if(args[1].toLowerCase() != 'back' || args[args.length -1].toLowerCase() != 'back'  ){
                msg.channel.send(Names.panel[target][0]);
            }
            if(args[1].toLowerCase() != 'front' || args[args.length -1].toLowerCase() != 'front' ){
                msg.channel.send(Names.panel[target][1]); 
            }
        }
        else{
            msg.channel.send(target);
        }
    }
}