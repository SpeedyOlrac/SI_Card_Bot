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

        args = nickNames(args);
        console.log(args);

        if(args.length < 1){
            msg.channel.send(target);
            return;
        }
        var shortNames = [];
        var availableNames = [];
        var input = [];
        var found = false;

        //Making list of names to search
        for( var s = 0; s < spirits.length; s++){
            availableNames.push(spirits[s].name);
            for(var t = 0; t < availableNames[s].length; t++){
                shortNames.push( availableNames[t]);
            }
        }

        //finding words in args closer to target
        for (var a = 0; a < args.length; a++){

            if (isSearchable){
            input.push(getCardName(args[a], shortNames, 0.5));
            }
        }
        //console.log(input);

            input.push(getCardName(shortNames, availableNames, "0.8"));
        }

        console.log(input);
        //msg.channel.send(spirits[target].title );

        for(var s = 0; s < spirits.length; s++){
            var name = spirits[s].name.split(' ');
            for(var n = 0; n < name.length; n++){
                for(var i = 0; i < input.length; i++){
                    if (shortNames[n] == input[i] && !found){
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

function isSearchable(word){
    if(word < 3 ){
        return false;
    }
    if(word.toLowerCase() == 'back'){
        return false;
    }

    if(word.toLowerCase() == 'front'){
        return false;
    }
    return true;
}