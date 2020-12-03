const { getCardName } = require('./sendCardLink.js');

//const aspectNames = require('./aspectNames.js');
const { aspectsNames, execute } = require('./aspectNames.js');
//const sendCardLink = require("./sendCardLink.js").sendCardLink;

module.exports = {
	name: 'aspect',
	description: 'The ascpects of sprits',
	public: true, //has to be true to show as a command
	execute(msg, args) {
		if(args.length == 0){
			args.push("none");
			args.push("");
		}
		else if(args.length == 1){
			temp = args[0].toLowerCase();
			if (aspectNames.aspectsNames.find(temp) != -1){
				args[0] = "skip";
				args.push(temp);
			}
			else{
				args.push("none");
			}
		}
		
		console.log(args[0] + " " + args[1]);
		console.log(aspectsNames);
		var message = execute(args[0], args[1]);

		msg.channel.send(message);
	}
};