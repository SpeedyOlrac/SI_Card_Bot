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
                        // turning word definition into corresponding number (4 chooses from all spirits)
                        let maxComplexity = complexities.has(args[1]) ? complexities.get(args[1]) : 4;
                        answer = chooseSpirit(maxComplexity);
                        await sendMessage(msg, answer);
                        break;
                    case 'adversary':
                        // checking if the user has passed a valid numerical input before passing to the adversary function
                        let minDifficulty = parseInt(args[1]) ? parseInt(args[1]) : 0;
                        let maxDifficulty = parseInt(args[2]) ? parseInt(args[2]) : 11;
                        answer = chooseAdversary(minDifficulty, maxDifficulty);
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
    let validSpirits = spirits.filter((spirit) => spirit.complexity <= maxComplexity);
    let x = Math.floor(Math.random() * validSpirits.length);
    return  [validSpirits[x].name, validSpirits[x].emote];
}

/**
 * returns an adversary within the given difficulty bounds
 * @param {int} minDifficulty 
 * @param {int} maxDifficulty 
 * @returns 
 */
function chooseAdversary(minDifficulty=0, maxDifficulty=11){
    if(maxDifficulty < minDifficulty || maxDifficulty > 11 || minDifficulty < 0){
        return ["For a single adversary, specify a difficulty range between 0 and 11.", "Difficulty should be specified as an integer greater or equal to 0 followed by an integer less than or equal to 11."];
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

        if (name.difficulty[n] >= minDifficulty && name.difficulty[n] <= maxDifficulty){
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