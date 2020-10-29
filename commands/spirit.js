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
        var front = args.indexOf("front");
        var back = args.indexOf("back");
        console.log(front +" " + back);

        var args = nickNames(args);


        if(args.length < 1){
            msg.channel.send(target);
            return;
        }
        var shortNames= [];
        var availableNames = [];
        var input = [];
        var found = false;

        //Making list of names to search
        for( var s = 0; s < spirits.length; s++){
            availableNames.push(spirits[s].name);
            var shortNames = spirits[s].name.split(' ');
        }

        //finding words in args closer to target
        for (var a = 0; a < args.length; a++){
            input.push(getCardName(args[a], shortNames, "0.5"));
        }

        console.log(input);
        //msg.channel.send(spirits[target].title );
     
        for(var s = 0; s < availableNames.length; s++){
            for(var n = 0; n < shortNames.length; n++){
                for(var i = 0; i < input.length; i++){
                    if (shortName[n] == input[i] && !found){
                        target = s;
                        console.log(s);
                        found = true;
                    }   
                }
            }
        }
        
        if(found){
            if(back > 0 ){
                msg.channel.send(spirits[target].panel[0]);
            }
            if(front > 0 ){
                msg.channel.send(spirits[target].panel[1]); 
            }
        }
        else{
            return msg.channel.send(target);
        }
    }
}


function nickNames(name){
    var nicknames = [['bodan', 'bringer' ]];
   
    name = name.filter(e => e.toLowerCase() != 'back');
    name = name.filter(e => e.toLowerCase() != 'front');
    name = name.filter(e => e.length > 3);

    for(var n = 0; n < name.length; n++){
        for (var m = 0; m < nicknames.length; m++){
            console. log(name[n].toLowerCase() +  + nicknames[m][0] );
            if (name[n].toLowerCase() == nicknames[m][0]){
                name[n] = nicknames[m][1];
            }
        }
    }
    console.log(name);
    return name;
}