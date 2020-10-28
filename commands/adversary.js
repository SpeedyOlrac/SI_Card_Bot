
const adversary = require ('./AdversaryNames.js').adversary;
const getcardname = require('./sendCardLink.js').getCardName;
//const ad = require('./AdversaryNames.js').ad;

module.exports = {
	name: 'adversary',
	description: 'Get an adversaries',
	public: true,
	async execute(msg, args) {

       // console.log( ad + ` 1` );
          
        var panel =  "Adversaries are \n Prussia, England, France, Habsburg, Russia, Scotland, Sweden";
        var found = false;
        var list = [];

        if (args.length == 0){ } 
        else{
            for(const ad of adversary){
                list.push(ad.title);
            }
            //console.log(list)

            panel = getcardname(args[0], list);
            console.log(panel);

           for(const element in adversary){
            console.log(element);
               if(adversary[element].title == panel){
                 panel = adversary[element].panel;
               }
            }
        }
        msg.channel.send(panel);
    }};