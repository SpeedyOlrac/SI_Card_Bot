const { getCardName } = require('./sendCardLink.js');
const { aspectsNames, spirits, aspects } = require('./aspectNames.js');

module.exports = {
	name: 'aspect',
	description: 'The ascpects of sprits',
	public: true, //has to be true to show as a command
	execute(msg, args) {
		console.log("aspect command");
		console.log(aspects[0]);

		var message = "";

		//if spirit is blank
		if(args.length == 0){
			message = "The spirits with thier aspects are \n"
			for (var s = 0; s < spirits.length; s++){
				message += spirits[s] + ": "
				message = listAspect(message, parseInt(s));
			}
		}

		//If first args is a Aspect
		else if(args.length == 1){
			//first args is an aspect

			temp = args[0].toLowerCase();
			var found = false;

			for (var a = 0; a < aspectsNames.length; a++ ){
				if (aspectsNames[a].localeCompare(temp) == 0)
					var aspect = findAspect(temp);
					console.log(aspect);
					message = aspect.panel;
			}

			if(!found) {
				//First args is not an aspect
				var spirit = getSpiritName(args[0]);
				var s = findSpirit(spirit);
				message = "The aspects for " + spirit + "are: \n";
				message = listAspect(message, parseInt(s));   
			}
		}
		//Correcting name of spirit
		else{	
			message = searchSpiritAspect(args[1], args[0]);
		}

		console.log(message);		
		msg.channel.send(message);
}};

//Functions
function listAspect(message, s){
	console.log(aspects[s]);
	for (var a = 0; a < aspects[parseInt(s)].length; a++){
		message += aspects[s][a].name;
		if(a < aspects[s].length-1){
			message += ", "; 
		}
		else{
			message += "\n"
		}
	}
	return message;
}

function findSpirit(target){
	for (var s = 0; s < spirits.length; s++){
		if(spirit == spirits[s]){
			return s;
		}
	}
}

function findAspect(target, aspectList = aspects){
	for (var a = 0; a < aspectList.length; a++){
		for(var b = 0; b < aspectList[a].length; b++ ){
			if (target == aspectList[a][b].name){
				return aspectList[a][b];
			}
		}
	}
}

function searchSpiritAspect(aspect, spirit){
	var aspectList = []
	spirit = getCardName(args[0], spirits);
	var s = findSpirit(spirit);

	for (var a = 0; a < aspects[s].length; a++){
		aspectList.push(aspect[s][a]);
	}

	aspect = getCardName(aspect, aspectList);
	return findAspect(aspect, aspectList);
}