const fetch = require("node-fetch");
const spirits = require ('./spiritNames.js').spirits;
const levenshtein = require('js-levenshtein');
const globals = require('../globals.js')

module.exports = {
	name: 'spirit',
	description: 'Spirit Search',
	public: true,
	async execute(msg, args) {

        if (args.length < 1) {
            return await msg.channel.send("Sorry, could not find the spirit you were looking for.");
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
        const searchString = args.join(" ").toLowerCase();

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

        if (foundSpirits.length === 1) {
            let foundSpirit = foundSpirits[0];
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
        else if (foundSpirits.length > 1) {
            globals.choices = foundSpirits.map((spirit) => {
                return {
                    "label": `${spirit.emote} ${spirit.name}`,
                    "value": mods.back ? spirit.panel[1]: spirit.panel[0]
                }
            });
            let message = "Multiple matching spirits found. Select one with _-<num>_ or _-choose <num>_ (e.g. _-2_ or _-choose 2_)\n"
            for (choiceIdx in globals.choices) {
                let choice = globals.choices[choiceIdx];
                message += `\n${parseInt(choiceIdx) + 1}) ${choice.label}`
            }
            return await msg.channel.send(message);
        }
        else {
            return await msg.channel.send("Sorry, could not find the spirit you were looking for.")
        }
    }
}