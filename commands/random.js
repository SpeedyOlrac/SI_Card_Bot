const adversary = require('./AdversaryNames.js').ad;
const spirits = require ('./spiritNames.js').spirits;

module.exports = {
	name: 'random',
	description: 'Get a random spirit or adversaries',
	public: true,
	async execute(msg, args) {
            //console.log(Names.spirits);
            if(args[0]){
              let answer = Picking(args[0], args[1], args[2]);
              botMessage1 = msg.channel.send(answer[0] + answer[2]);
              botMessage2 = msg.channel.send(answer[1]);

              /*  
              await delay(15);
              msg.delete();
              botMessage1.delete();
              botMessage2.delete();
              */
              }
            else{
                msg.channel.send("Do you want a random [spirit] or [adversary]?")
            }
}};

function Picking(selection, diffmin = 0, diffmax = 11){
    if(selection == 'spirit'){
        let n = Math.floor(Math.random() * spirits.length);
        let a = Math.floor(Math.random() * spirits[n].aspect.length);
        let aspect = "";

        if (a > 0){
            aspect = spirits[n].aspect[a-1] ;
        }

        return  [spirits[n].name, spirits[n].emote, aspect];
    }    
    else if(selection == 'adversary'){
        // adversary is [name, escaltion diff, diff 1 ...]
        var correct = true;
        let level = "";
        let n = 0;
        let keys = Array.from(adversary.keys());
        let name = adversary.get(keys[0]);


        while(correct){
            
            name = adversary.get(keys[Math.floor(Math.random() * keys.length)]);

            //console.log(name);
            n = Math.floor(Math.random() * 7);

            if (name.diffculty[n] >= diffmin && name.diffculty[n] <= diffmax){
                correct = false;
            }
        }

        if (n == 0){
            level = "Base ";
        }
        else{
            level = n;
        }

        let answer =name.name + " " + 
                    level + "(diffculty " + name.diffculty[n] + ")";
        return [answer, name.emote, "" ];
    }
    else {
        return;
        }
} 
