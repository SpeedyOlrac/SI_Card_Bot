const { getCardName } = require('./sendCardLink.js');

const spiritsNames = require('./spiritNames.js').spirits;
//const sendCardLink = require("./sendCardLink.js").sendCardLink;

var spirits = [ ];
var aspectNames = [ ];
var target = "Spirts aspects are: \n";

for(var i = 0; i < spiritsNames.length; i++){
	if (spiritsNames[i].aspect.length > 0){
		spirits.push(spiritsNames[i]);
	}
}

for(var i = 0; i < spirits[i].length; i++){
	target += spirits[i].name + ": ";
	var stop = 1;
	for (var a = 0; a < spirits[i].aspect; a++){
		target += spirits[i].aspect[a].name;
		if (stop < spirits[i].aspect[a].length){
			target += ", ";
		}
		else{
			target += "\n";
		}
		stop++;
		aspectNames.push(spirits[i].aspect[a].name); 
	}		
}

module.exports = {
	name: 'aspect',
	description: 'The ascpects of sprits',
	public: true, //has to be true to show as a command
	execute(msg, args) {

		console.log(spirits);
		console.log(target);		
		console.log(aspectNames);

		if(args.length = 0){
			msg.channel.send(target);
		}

		var found = false;
		var name = getCardName(args, aspectNames);

		for(var i = 0; i < spirits.length; i++){
			for(var a = 0; a < spirits[i].length; a++){
				var aspect = spirits[i].aspect[a];
				if (!found && aspect.name == name){
					target = spirits[i].name + ": " + aspect.name + " aspect \n" +
						aspect.panel; 

					msg.channel.send(target);
					found = true;
				}
			}
		}
	},
};