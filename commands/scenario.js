// can be used as template
//save as command as commandName.js

const getCardName = require ('./sendCardLink.js').getCardName;
const to = require('await-to-js').default;
const scenario = require ( "./scenarioNames.js").scenario;

module.exports = {
	name: 'scenario',
	description: 'Scenario image caller',
	public: true, //has to be true to show as a command
	async execute(msg, args) {
        
        var panel = "";
        var names = [];
        var side = "";

        scenario.forEach(function(s){
            console.log(s.name);
            names.push(s.name); 
         });



        if (args.length == 0){
            msg.channel.send("Scenarios are: \n" + names.join(', '));
            return;
        }

        if (args[0] == "back" || args[0] == "front"){
            side = args.pop;
        }

        panel = getCardName(args, names);

        scenario.forEach(function(s){
            if (s.name == panel){
                console.log("sending scenario")
                if(side == "front"){
                    msg.channel.send(s.link);   
                }
                else{
                    msg.channel.send(s.linkBack);
                }   
            }
        });
	},
};