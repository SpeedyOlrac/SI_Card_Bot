// can be used as template
//save as command as commandName.js

const getCardName = require ('./sendCardLink.js').getCardName;
const to = require('await-to-js').default;
const scenario = require ( "./scenarioNames.js").scenario;

module.exports = {
	name: 'scenario',
	description: 'Gets the front or back panel for a given scenario',
	public: true, //has to be true to show as a command
	async execute(msg, args) {
        
        var panel = "";
        var names = [];
        var side = "";

        scenario.forEach(function(s){
            names.push(s.name); 
         });

        // if no arguments, return a list of all scenarios
        if (args.length == 0){
            msg.channel.send("Scenarios are: \n" + names.join(', '));
            return;
        }

        // if the first argument is not front or back, send the back by default
        // otherwise, remove the first element of the arguments and set that to be the returned side
        if (args[0] == "back" || args[0] == "front"){
            side = args.shift();
        }
        else{
            side = "back";
        }

        // then finds the scenario panel with the closest name to the given arguments
        panel = getCardName(args, names);

        scenario.forEach(function(s){
            if (s.name == panel){
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