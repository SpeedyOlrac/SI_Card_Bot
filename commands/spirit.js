
const spirits = require ('./spiritNames.js').spirits;
const levenshtein = require('js-levenshtein');
const globals = require('../globals.js')

module.exports = {
	name: 'spirit',
	description: 'Spirit Search',
	public: true,
	async execute(msg, args) {
        try{
            if (args.length < 1) {
                return await msg.channel.send("Please provide at least 3 letters to query with.");
            }
    
            // Handle result-modifying args
            const mods = {
                'front': false,
                'back': false,
                'unique': false
            }
    
            for (arg in mods) {
                const idx = args.indexOf(arg);
                if (idx >= 0) {
                    mods[arg] = true;
                    args.splice(idx, 1);
                }
            }

            const possibleSpirits = searchForSpirit(args.join(" ").toLowerCase());
    
            // if levenshtein returns a single spirit, return that
            if (possibleSpirits.length === 1) {
                return await sendSpirit(mods, msg, possibleSpirits[0]);
            }
            else {
                    // if they somehow have multiple matches default to the choices option
                    globals.choices = foundSpirits.map((spirit) => {
                        return {
                            "label": `${spirit.emote} ${spirit.name}`,
                            "value": mods.back ? spirit.panel[1]: spirit.panel[0]
                        }
                    });
                    let message = "Multiple matching spirits found. Select one with _-choose <num>_ (e.g. _-choose 2_)\n"
                    for (choiceIdx in globals.choices) {
                        let choice = globals.choices[choiceIdx];
                        message += `\n${parseInt(choiceIdx) + 1}) ${choice.label}`
                    }
                    return await msg.channel.send(message);
                }
        }
        catch (e){
            console.log(e);
            return msg.channel.send(e.toString());
        }
    }
}

/**
 * Returns a spirit object when given a string
 * @param {*} spiritName 
 */
function searchForSpirit(searchStringParam){
    if (searchStringParam.length < 3) {
        throw new Error("Please provide at least 3 letters to query with.");
    }
    const searchString = searchStringParam.toLowerCase();

    let foundSpirits = [];
    
    // Start with simple substring search
    for (let i=0; i < spirits.length; i++) {
        const spirit = spirits[i];
        if (spirit.name.toLowerCase().indexOf(searchString) >= 0) {
            foundSpirits.push(spirit);
        }
        else {
            for (alias of spirit.aliases) {
                if (alias.indexOf(searchString) >= 0) {
                    foundSpirits.push(spirit);
                }
            }
        }
    }

    let smallestDistance = Infinity;
    // If not found, find by levenshtein distance on all available substrings
    if (foundSpirits.length === 0) {
        for (spirit of spirits) {
            const spiritName = spirit.name.toLowerCase();
            for (let i=0; i <= spiritName.length - searchString.length; i++) {
                const subString = spiritName.substring(i, i+searchString.length);
                const distance = levenshtein(subString, searchString);
                if (distance < smallestDistance) {
                    smallestDistance = distance;
                    foundSpirits = [spirit];
                }
            }
        }
    }

    // if levenshtein returns a single spirit, return that
    if (foundSpirits.length === 1) {
        return foundSpirits;
    }
    else if (foundSpirits.length > 1) {
        // try to filter the ones found to spirits which have that EXACT word (ignoring apostrophised plurals for Stone's), not just a substring match
        uniqueSpirits = foundSpirits.filter((foundSpirit)=>
            sanitiseSpiritName(foundSpirit.name).indexOf(searchString) > -1
        );
        return uniqueSpirits;
    }
    else {
        throw new Error('Search string resulted in zero matches. Please try another search term (for example, Serpent or River).');
    }
}

/**
 * returns a list of tokenised words, removing any apostrophised plurals and forcing lowercase
 * @param {} spiritName 
 */
function sanitiseSpiritName(spiritName){
    let spiritWords = spiritName.split(' ');
    let x = spiritWords.map((word)=>{
        return word.replace("'s", "s").toLowerCase()
    });
    return x;
}

/**
 * send a message with the given spirit
 * @param {*} foundSpirit 
 * @returns 
 */
async function sendSpirit(mods, msg, foundSpirit){
    // TODO: check if getting all spirit's uniques is still wanted
    if (mods.unique) {
        const uniques = foundSpirit.uniques;
        for(unique of uniques) {
            let basePath = "https://sick.oberien.de/imgs/powers/";
            //msg.channel.send(basePath + unique  + '.webp');
        }
    }
    else if (mods.back) {
        return await msg.channel.send(foundSpirit.panel[1]);
    }
    else {
        return await msg.channel.send(foundSpirit.panel[0]);
    }
}