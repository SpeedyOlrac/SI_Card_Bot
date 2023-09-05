const { scenario } = require('./scenarioNames.js');

const adversary = require('./AdversaryNames.js').ad;
const spirits = require ('./spiritNames.js').spirits;
const complexities = require('./complexities.js').complexities;

module.exports = {
	name: 'random',
	description: 'Get a random spirit, single adversary or scenario',
	public: true,
	async execute(msg, args) {
            if(args[0]){
                let command = args[0];
                switch (command){
                    case 'spirit':
                        // turning word definition into corresponding number
                        let maxComplexity = complexities.has(args[1]) ? complexities.get(args[1]) : 4;
                        answer = chooseSpirit(maxComplexity);
                        await sendMessage(msg, answer);
                        break;
                    case 'adversary':
                        answer = chooseAdversary();
                        await sendMessage(msg, answer);
                        break;
                    case 'scenario':
                        answer = chooseScenario();
                        await sendMessage(msg, answer);
                        break;
                    default:
                        await msg.channel.send("Do you want a random [spirit], [adversary] or [scenario]?");
                        break;
                }
            }
            else{
                await msg.channel.send("Do you want a random [spirit], [adversary] or [scenario]?")
            }
}};

/**
 * Sends two messages to the channel
 * @param {*} msg 
 * @param {*} answer 
 */
async function sendMessage(msg, answer){
    let message = answer[0];
    console.log(message);
    if (answer.length > 2){
        message = message + answer[2];
    }
    botMessage1 = await msg.channel.send(message);
    botMessage2 = await msg.channel.send(answer[1]);
}

/**
 * returns a spirit bounded by maximum complexity
 */
function chooseSpirit(maxComplexity = 4){
    console.log(spirits[0].complexity);
    let validSpirits = spirits.filter((spirit) => spirit.complexity <= maxComplexity);

    let x = Math.floor(Math.random() * validSpirits.length);
    return  [validSpirits[x].name, validSpirits[x].emote];
}

/**
 * returns an adversary
 * @param {*} min 
 * @param {*} max 
 * @returns 
 */
function chooseAdversary(min, max){
    var diffmax = parseInt(max);
    var diffmin = parseInt(min);

    if(diffmax < diffmin || diffmax > 11 || diffmin < 0){
        return ["For a single adversary, specify a difficulty range between 0 and 11.", ""];
    }

    // adversary is [name, escalation diff, diff 1 ...]
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
}

/**
 * returns a scenario
 * @param {*} selection 
 * @param {*} min 
 * @param {*} max 
 * @returns 
 */
function chooseScenario(){
    let s = Math.floor(Math.random() * scenario.length);
    return  [scenario[s].name, scenario[s].linkBack];
}