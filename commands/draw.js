// can be used as template
//save as command as commandName.js
const cards = require ("./ImageNames.js");
const card = require ("./card.js");


module.exports = {
	name: 'draw',
	description: 'draw up to 10 random cards',
	public: true, //has to be true to show as a command
	async execute(msg, args) {
        if (args.length < 1){
            return msg.channel.send('Please specify a type of card to draw (minor, major, fear or event).');
        }

        let drawnType = args[0].toLowerCase();
        let drawableCards = ["minor", "major", "fear", "event"];

        let list = [];
        length = 0;
        if (args.length == 2){
            if (args[1] > 10){
                return msg.channel.send("Can not draw more than 10 cards");
            }
        }

        if (drawableCards.includes(drawnType)){
            var drawAmount = (args.length == 2) ? parseInt(args[1]) : 4;
            list = capitalizeTheFirstLetterOfEachWord(getRandom(cards[drawnType], drawAmount));
            if(Array.isArray(list))
            {
                var message = "";
                for (const message_ind of list){
                    message += "* " + message_ind + "\n";
                }
                return msg.channel.send(message);
            }
            else{
                return msg.channel.send(list);
            }
        }
        else{
            return msg.channel.send('Please specify a type of card to draw (minor, major, fear or event).');
        }
	},
};

/**
 * returns an array of n samples from the input array
 * @param {*} arr -> array to randomly sample from
 * @param {*} n -> number of samples returned
 * @returns 
 */
function getRandom(arr, n) {
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
