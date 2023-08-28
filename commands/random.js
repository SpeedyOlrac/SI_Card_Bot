const { scenario } = require('./scenarioNames.js');

const adversary = require('./AdversaryNames.js').ad;
const spirits = require ('./spiritNames.js').spirits;

module.exports = {
	name: 'random',
	description: 'Get a random spirit, single adversary or scenario',
	public: true,
	async execute(msg, args) {
            if(args[0]){
              let answer = Picking(args[0], args[1], args[2]);
              let message = answer[0];
              if (answer.length > 2){
                  message = message + answer[2];
              }
              botMessage1 = await msg.channel.send(message);
              botMessage2 = await msg.channel.send(answer[1]);
              }
            else{
                await msg.channel.send("Do you want a random [spirit], [adversary] or [scenario]?")
            }
}};

function Picking(selection, min = 0, max = 11){
    switch (selection){
        case 'spirit':
            let x = Math.floor(Math.random() * spirits.length);
            return  [spirits[x].name, spirits[x].emote];
        case 'adversary':
            var diffmax = parseInt(max);
            var diffmin = parseInt(min);
    
            if(diffmax < diffmin || diffmax > 11 || diffmin < 0){
                return ["For a single adversary, specify a difficulty range between 0 and 11.", ""];
            }

            // adversary is [name, escaltion diff, diff 1 ...]
            var correct = true;
            let level = "";
            let n = 0;
            let keys = Array.from(adversary.keys());
            let name = adversary.get(keys[0]);
    
            while(correct){  
                name = adversary.get(keys[Math.floor(Math.random() * keys.length)]);
                n = Math.floor(Math.random() * 7);
    
                if (name.difficulty[n] >= diffmin && name.difficulty[n] <= diffmax){
                    correct = false;
                }
            }
    
            if (n == 0){
                level = "Base ";
            }
            else{
                level = n + " ";
            }
    
            let answer = name.name + " " + 
                        level + "(difficulty " + name.difficulty[n] + ")";
            return [answer, name.emote, "" ];
        case 'scenario':
            let s = Math.floor(Math.random() * scenario.length);
            return  [scenario[s].name, scenario[s].linkBack];
        default:
            break;
    }
} 
