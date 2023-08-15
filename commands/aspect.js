const { getCardName } = require('./sendCardLink.js');
const { aspectsNames, spirits, aspects } = require('./aspectNames.js');

module.exports = {
	name: 'aspect',
	description: 'Lists all aspects for a given spirit or shows any cards for a given aspect.',
	public: true, //has to be true to show as a command
	execute(msg, args) {
		console.log("aspect command");
	
		var message = "";

		//if spirit is blank
		if(args.length == 0){
			message = "Currently, the following spirits have aspects: \n"
			for (var s = 0; s < spirits.length; s++){
				message += spirits[s] + ": "
				message = listAspect(message, parseInt(s));
			}
		}

		//if first args is a Aspect
		else if(args.length == 1){
			//first args is an aspect
			temp = args[0].toLowerCase();
			var found = false;

			for (var a = 0; a < aspectsNames.length; a++ ){
				console.log(aspectsNames[a].localeCompare(temp));
				if (aspectsNames[a].localeCompare(temp) == 0){
					var aspect = findAspect(temp);
					//console.log(aspect);
					message = aspect.panel;
					found = true;
				}
			}

			if(!found) {
				//First args is not an aspect
				var spirit = getCardName(args[0], spirits);
				var s = findSpirit(spirit);
				message = spirit + " has the following aspects: \n";
				message = listAspect(message, parseInt(s));   
			}
		}

		else if(args.length == 2){
			let numAspectCard = parseInt(args[1]);
			console.log(numAspectCard);
			temp = args[0].toLowerCase();
			// check if the FIRST argument is an aspect
			aspect = findAspect(temp);
			if (aspect){
				// if it is, check if it has >1 aspect card
				if (aspect.panel.length == 1){
					// if it doesn't, return the first aspect card
					message = aspect.panel[0];
				}
				// if it does, return that chosen aspect card
				else{
					// sanitising input
					if (numAspectCard == NaN || numAspectCard > aspect.panel.length || numAspectCard < 1){
						message = aspect.panel[0];
					}
					else{
						message = aspect.panel[numAspectCard - 1];
					}
				}
			}
			// otherwise, message saying that this aspect does not exist
			else{
				message = "Aspect could not be found";
			}
		}
		//Correcting name of spirit
		else{	
			var temp = searchSpiritAspect(args[1], args[0]);

			if (temp ==  null){
				console.log(temp);
				message = "Aspect could not be found";
			}
			else{
				message = temp.panel;
			}
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
		if(target == spirits[s]){
			return s;
		}
	}
}

function findAspect(target, aspectList = aspects){

	console.log("FindAspect: " + target);

	for (var a = 0; a < aspectList.length; a++){
		for(var b = 0; b < aspectList[a].length; b++ ){
			if (target == aspectList[a][b].name.toLowerCase()){
				return aspectList[a][b];
			}
		}
	}
	console.log("failed find aspect")

	return null
}

function searchSpiritAspect(aspect, spirit){
	var aspectList = []
	spirit = getCardName(spirit, spirits);
	var s = findSpirit(spirit);

	for (var a = 0; a < aspects[s].length; a++){
		aspectList.push(aspects[s][a].name);
	}

	aspect = getCardName(aspect, aspectList);

	return findAspect(aspect);
}