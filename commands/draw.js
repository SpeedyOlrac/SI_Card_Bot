// can be used as template
//save as command as commandName.js
const cards = require ("./ImageNames.js");
const card = require ("./card.js");


module.exports = {
	name: 'draw',
	description: 'draw up to 10 random cards',
	public: true, //has to be true to show as a command
	async execute(msg, args) {
        try {
            if (args.length < 1){
                throw new Error('Please specify a type of card to draw (minor, major, fear or event) (defaults to 4 cards drawn).');
            }
            drawnType = args[0].toLowerCase();
            if (args.length > 1){
                drawAmount = parseInt(args[1]);
                return msg.channel.send(getRandomDraws(drawnType, drawAmount));
            }
            else{
                return msg.channel.send(getRandomDraws(drawnType));
            }
        }
        catch (e){
            console.log(e);
            return msg.channel.send(e.toString());
        }
	},
};

/**
 * Sends a message containing a list of drawAmount cards of drawnType
 * @param {*} drawnType 
 * @param {*} drawAmount 
 * @returns 
 */
function getRandomDraws(drawnType, drawAmount = 4){
    if (drawnType == null){
        throw new Error('Please specify a type of card to draw (minor, major, fear or event).');
    }
    if (drawAmount == null || !(Number.isInteger(drawAmount)) || drawAmount < 0){
        throw new Error('Please specify a positive integer of cards to draw between 1 and 10.');
    }

    let drawableCards = ["minor", "major", "fear", "event"];

    let list = [];
    length = 0;

    if (drawableCards.includes(drawnType)){
        list = capitalizeTheFirstLetterOfEachWord(sampleFromArray(cards[drawnType], drawAmount));
        if(Array.isArray(list))
        {
            var message = "";
            for (const message_ind of list){
                message += "* " + message_ind + "\n";
            }
            return message;
        }
        else{
            return list;
        }
    }
    else{
        throw new Error('Please specify a type of card to draw (minor, major, fear or event) (defaults to 4 cards drawn).');
    }
}

/**
 * returns an array of n samples from the input array
 * @param {*} arr -> array to randomly sample from
 * @param {*} n -> number of samples returned
 * @returns 
 */
function sampleFromArray(arr, n) {
    var result = new Array(n),
        len = arr.length,
        taken = new Array(len);
    if (n > len)
        throw new RangeError("getRandom: more elements taken than available");
    while (n--) {
        var x = Math.floor(Math.random() * len);
        result[n] = arr[x in taken ? taken[x] : x] ;
        taken[x] = --len in taken ? taken[len] : len;
    }
    return result;
}

/**
 * returns a capitalised version of the input string
 * TODO: move this to a collection of other relevant string manipulation methods
 * @param {*} list 
 * @returns 
 */
function capitalizeTheFirstLetterOfEachWord(list) {
    for (var i = 0; i < list.length; i++){
        var separateWord = list[i].toLowerCase().split('_');
        for (var j = 0; j < separateWord.length; j++) {
            separateWord[j] = separateWord[j].charAt(0).toUpperCase() +
            separateWord[j].substring(1);
        }
           list[i] = separateWord.join(' ');
    } 
    return list;
}
