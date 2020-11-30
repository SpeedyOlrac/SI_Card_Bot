const fetch = require("node-fetch");
const to = require('await-to-js').default;
const spirits = require ('./spiritNames.js').spirits;
const getCardName = require ('./sendCardLink.js').getCardName;
const uniqueList = require('./ImageNames.js').uniqueList;

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
            if (isSearchable(args[a])){
            input.push(getCardName(args[a], shortNames, 0.5));
            }
        }
        //console.log(shortNames);
        

        //msg.channel.send(spirits[target].title );
        for(var s = 0; s < spirits.length; s++){
            var name = spirits[s].name.split(' ');
           
            for(var n = 0; n < name.length; n++){
              
                for(var i = 0; i < input.length; i++){
                    if(isSearchable(input[i]) && name[n] == input[i] && !found){
                        target = s;
                        //console.log(s);
                        found = true;
                    }
                }
            }
        }


        console.log(target);


        if(found){
            if(!argContains(args, 'back') && !argContains(args, 'unique')) {
                msg.channel.send(spirits[target].panel[0]);
            }
            if(!argContains(args, 'front') && !argContains(args, 'unique')){
                msg.channel.send(spirits[target].panel[1]); 
            }
            if(argContains(args, 'unique'))
            {
              var uniques = uniqueList[target];
              for(var unique of uniques)
              {
                var basePath = "https://sick.oberien.de/imgs/powers/";

                msg.channel.send(basePath + unique  + '.webp');
              }
            }
        }
        else{
            return msg.channel.send(target);
        }
    }
}

function argContains(args, word)
{
  return args[0].toLowerCase() != word && args[args.length -1].toLowerCase() != word
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