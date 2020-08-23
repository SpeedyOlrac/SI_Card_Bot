const Names = require ('./Names.js');


module.exports = {
	name: 'random',
	description: 'Get a random spirit or adversaries',
	public: true,
	async execute(msg, args) {
            console.log(Names.spirits);
            if(args[0]){
              let answer = Picking(args[0], Names.spirits, args[1], args[2]);
              botMessage1 = msg.channel.send(answer[0]);
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


function Picking(selection, spirit, diffmin = 0, diffmax = 11){
    if(selection == 'spirit'){
        let n = Math.floor(Math.random() * Names.spirits.length);
        let answer = [Names.spirits[n], Names.emote[n]];
        return answer;
    }    
    else if(selection == 'adversary'){
        // adversary is [name, escaltion diff, diff 1 ...]

        let name = Math.floor(Math.random() * Names.adversary.length)
        let level = "";
        let n = Math.floor(Math.random() * 7);
        if (n == 0){
            level = "Escalation";
        }
        else{
            level = n;
        }
        let diff = n + 2;
        let answer = Names.adversary[name][0] +
                    " " + level + " (diffculty " + Names.adversary[name][diff] + ")";
        return [answer, Names.adversary[name][1] ];
    }
    else {
        return;
        }
} 
