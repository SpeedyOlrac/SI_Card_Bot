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
        var shortNames= [];
        var availableNames = [];
        var input = [];
        var found = false;

        //Making list of names to search
        for( var s = 0; s < spirits.length; s++){
            availableNames.push(spirits[s].name);
            var name = spirits[s].name.split(' ');
            for(var i = 0; i < name.length; i++){
                shortNames.push(name[i]);
            }
        }

        //finding words in args closer to target
        for (var a = 0; a < args.length; a++){
            if (isSearchable){
            input.push(getCardName(args[a], shortNames, 0.5));
            }
        }
        console.log(input);

        //msg.channel.send(spirits[target].title );
        for(var s = 0; s < spirits.length; s++){
            var name = spirits[s].name.split(' ');
            console.log(name);
            for(var n = 0; n < name.length; i++){
                console.log(name[n]);
                for(var i = 0; i < input.length; i++){
                    if(isSearchable(input[i]) && name[n] == input[i] && !found){
                        target = s;
                        console.log(s);
                        found = true;
                    }
                }
            }
        }


        console.log(target);

        if(found){
            if(args[0].toLowerCase() != 'back' && args[args.length -1].toLowerCase() != 'back'  ){
                msg.channel.send(spirits[target].panel[0]);
            }
            if(args[0].toLowerCase() != 'front' && args[args.length -1].toLowerCase() != 'front' ){
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