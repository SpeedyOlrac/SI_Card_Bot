
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
        //console.log(adversary)

        if (args.length == 0){

        } 
        else{
            for(const ad of adversary){
                list.push(ad.title);
            }

            panel = getcardname(args[0], list);
            panel = adversary[adversary.indexOf(panel)].panel;
            console.log(panel);
        //    for(const element in list){
        //        if(element == panel){
        //          panel = adversary.get(panel).panel;
        //        }
        //     }
        }

        msg.channel.send(panel);
    }};