const { getCardName } = require('./sendCardLink.js');

const spiritsNames = require('./spiritNames.js').spirits;
//const sendCardLink = require("./sendCardLink.js").sendCardLink;

var spirits = [ ];
var aspectNames = [ ];
var target = "Spirts aspects are: \n";

for(const spirit in spiritsNames){
	console.log(spirit.aspect);
	if (spirit.aspect != null){
		spirits.push(spirit);
	}

	target += spirit.name + ": ";
	var stop = 1;
	for(const aspect in spirit){
		target += aspect.name;
		if (stop < aspect.length){
			target += ", ";
		}
		else{
			target += "\n";
		}
		stop++;
		aspectNames.push(aspect.name); 				
	}
}

module.exports = {
	name: 'aspect',
	description: 'The ascpects of sprits',
	public: true, //has to be true to show as a command
	execute(msg, args) {

		console.log(spiritsNames);
		console.log(target);		
		console.log(aspectNames);

		if(args.length = 0){
			msg.channel.send(target);
		}

		var found = false;
		var name = getCardName(args, aspectNames);

		for(const spirit in spirits){
			for(const aspect in aspects){
				if (!found && aspect.name == name){
					target = spirit.name + ": " + aspect.name + " aspect /n" +
						aspect.panel; 

					msg.channel.send(target);
					found = true;
				}

			}
		}

		
	},
};