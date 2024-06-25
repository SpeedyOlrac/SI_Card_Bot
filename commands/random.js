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
                        var minDifficulty = parseInt(args[1]) ? parseInt(args[1]) : 0;
                        var maxDifficulty = parseInt(args[2]) ? parseInt(args[2]) : 11;
                        answer = chooseAdversary(minDifficulty, maxDifficulty);
                        await sendMessage(msg, answer);
                        break;
                    case 'double':
                        // checking if the user has passed a valid numerical input before passing to the adversary function
                        var minDifficulty = parseInt(args[1]) ? parseInt(args[1]) : 1;
                        var maxDifficulty = parseInt(args[2]) ? parseInt(args[2]) : 11;
                        answer = chooseDoubleAdversary(minDifficulty, maxDifficulty);
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
function chooseAdversary(minDifficulty = 0, maxDifficulty = 11){
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
 * returns a double adversary within the given difficulty bounds
 */
function chooseDoubleAdversary(minDifficulty = 1, maxDifficulty = 20){
    // error checking
    // TODO: make this throw an exception
    if(maxDifficulty < minDifficulty || maxDifficulty > 20 || minDifficulty < 1 || minDifficulty > 18 || maxDifficulty == minDifficulty){
        return ["For a double adversary, specify a difficulty range between 1 and 20.", "Difficulty should be specified as an integer greater or equal to 1 and less than 18 followed by an integer less than or equal to 20."];
    }

    let adversaryCandidates = Array.from(adversary);
    // pick first adversary
    var leadingDifficultySearch = true;
    let keys = Array.from(adversaryCandidates.keys());
    let leadingAdversary;
    let leadingAdversaryIndex;
    let leadingDifficulty;
    let totalDifficulty;

    // if the minimum difficulty is greater than 10, assume that they want at least 1 level 4+ adversary (avoids leading being too low for possible search)
    if (minDifficulty >= 10 && minDifficulty < 15){
        leadingAdversaryIndex = keys[Math.floor(Math.random() * keys.length)];
        leadingAdversary = adversaryCandidates[keys[leadingAdversaryIndex]];
        leadingLevel = Math.floor((Math.random() * 3) + 4);
        leadingDifficulty = leadingAdversary[1].difficulty[leadingLevel];

        if (leadingDifficulty < maxDifficulty){
            leadingDifficultySearch = false;
        }
    }
    // if it's greater than 15, assume they want at least 1 level 6 adversary
    else if (minDifficulty >= 15){
        leadingAdversaryIndex = keys[Math.floor(Math.random() * keys.length)];
        leadingAdversary = adversaryCandidates[keys[leadingAdversaryIndex]];
        leadingLevel = 6
        leadingDifficulty = leadingAdversary[1].difficulty[leadingLevel];

        if (leadingDifficulty < maxDifficulty){
            leadingDifficultySearch = false;
        }
    }
    else{
        // pick difficulty level, checking that it is not more than the maximum difficulty
        while(leadingDifficultySearch){  
            leadingAdversaryIndex = keys[Math.floor(Math.random() * keys.length)];
            leadingAdversary = adversaryCandidates[keys[leadingAdversaryIndex]];
            leadingLevel = Math.floor(Math.random() * leadingAdversary[1].difficulty.length);
            leadingDifficulty = leadingAdversary[1].difficulty[leadingLevel];

            if (leadingDifficulty < maxDifficulty){
                leadingDifficultySearch = false;
            }
        }
    }

    // remove first adversary from collection to prevent double doubles
    adversaryCandidates.splice(leadingAdversaryIndex, 1);
    keys = Array.from(adversaryCandidates.keys());

    // pick second adversary
    var supportingDifficultySearch = true;
    let supportingLevel = "";
    let supportingAdversary;
    let supportingAdversaryIndex;
    let supportingDifficulty;

    // pick difficulty level, checking that combination is not more than max and not less than min
    // assuming that >15 requires at least 1 level 6 adversary
    // TODO: refactor this to avoid code duplication
    // will probably rewrite once I get a sense of if the benchmarks for adversary difficulty assumptions are reasonable
    if (minDifficulty >= 15){
        while(supportingDifficultySearch){  
            supportingAdversaryIndex = keys[Math.floor(Math.random() * keys.length)];
            supportingAdversary = adversaryCandidates[keys[supportingAdversaryIndex]];
            supportingLevel = 6
            supportingDifficulty = supportingAdversary[1].difficulty[supportingLevel];
            totalDifficulty = leadingDifficulty + (supportingDifficulty * 0.75);    
            if (totalDifficulty <= maxDifficulty && totalDifficulty >= minDifficulty){
                supportingDifficultySearch = false;
            }
        }
    }
    else{
        while(supportingDifficultySearch){  
            supportingAdversaryIndex = keys[Math.floor(Math.random() * keys.length)];
            supportingAdversary = adversaryCandidates[keys[supportingAdversaryIndex]];
            supportingLevel = Math.floor(Math.random() * keys.length);
            supportingDifficulty = supportingAdversary[1].difficulty[supportingLevel];
            totalDifficulty = leadingDifficulty + (supportingDifficulty * 0.75);
            if (totalDifficulty <= maxDifficulty && totalDifficulty >= minDifficulty){
                supportingDifficultySearch = false;
            }
        }
    }

    let answer = `LEADING: ${leadingAdversary[1].name} ${leadingLevel} \nSUPPORTING: ${supportingAdversary[1].name} ${supportingLevel} \n (difficulty ${totalDifficulty})`;
    return [answer, `${leadingAdversary[1].emote}${supportingAdversary[1].emote}`, "" ];
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