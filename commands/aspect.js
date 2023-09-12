const { getCardName } = require('./sendCardLink.js');
const { aspectsNames, spirits, aspects } = require('./aspectNames.js');

module.exports = {
	name: 'aspect',
	description: 'Lists all aspects for a given spirit or shows any cards for a given aspect.',
	public: true, //has to be true to show as a command
	execute(msg, args) {
		console.log("aspect command");
	
		var message = "";

		if(args.length == 0){
			message = "Currently, the following spirits have aspects: \n"
			for (var s = 0; s < spirits.length; s++){
				message += spirits[s] + ": "
				message = listAspect(message, parseInt(s));
			}
		}

		else if(args.length == 1){
			// check if argument is a valid aspect
			temp = args[0].toLowerCase();
			var found = false;

			for (var a = 0; a < aspectsNames.length; a++ ){
				if (aspectsNames[a].localeCompare(temp) == 0){
					var aspect = findAspect(temp);
					message = aspect.panel;
					found = true;
				}
			}

			// if not a valid aspect, check for the closest spirit name and return their aspects
			if(!found) {
				var spirit = getCardName(args[0], spirits);
				var s = findSpirit(spirit);
				// if that spirit only has one aspect, send the panels
				if (aspects[s].length == 1){
					message = aspects[s][0].panel;
				}
				// otherwise, list them
				else{
					message = spirit + " has the following aspects: \n";
					message = listAspect(message, parseInt(s));  
				} 
			}
		}
		else{
			// if the last argument is a number, pop it and use it to query for a specific aspect card
			if (!isNaN(args[args.length - 1])){
				var numAspectCard = parseInt(args.pop());
			}

			// then, concat the remaining arguments and search for an aspect with that name
			temp = args.join(' ').toLowerCase();
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
		msg.channel.send(message);
}};

/**
 * Returns a string list of all aspects for a given spirit
 * @param {*} message 
 * @param {*} s -> spirit object to list aspects for
 * @returns 
 */
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

/**
 * Returns the index for a given spirit in the list of spirits with aspects, or null if there is no spirit
 * @param {*} target 
 * @returns 
 */
function findSpirit(target){
	for (var s = 0; s < spirits.length; s++){
		if(target == spirits[s]){
			return s;
		}
	}
	return null;
}

/**
 * Returns the aspect object for a given title or null if none are found
 * @param {*} target -> name of aspect to query for
 * @param {*} aspectList -> list of objects to iterate through
 * @returns 
 */
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

/**
 * Finds the closest spirit to the input string and returns the aspect closest to the aspect search string for that spirit
 * @param {*} aspect -> string of aspect to find
 * @param {*} spirit -> string of spirit to find
 * @returns 
 */
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