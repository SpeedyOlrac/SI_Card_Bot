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
            msg.channel.send("Scenarios are: \n" + names);
            return;
        }

        if (args[0] == "back" || args[0] == "front"){
            side = args.pop;
        }

        panel = getCardName(args, names);

        for (const s of scenario){
            if (s.name == panel){
                if(side == "front"){
                    msg.channel.send(s.front);   
                }
                else{
                    msg.channel.send(s.back);
                }   
            }
        }
	},
};