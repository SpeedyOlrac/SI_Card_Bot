// can be used as template
//save as command as commandName.js
const cards = require ("./ImageNames.js")


module.exports = {
	name: 'draw',
	description: 'draw 4 random cards',
	public: false, //has to be true to show as a command
	async execute(msg, args) {

        let list = [];
        if(args == 'minor'){
            msg.channel.send('cards.minor');
            list = getRandom(cards.minor, 4);

        }



		await msg.channel.send(list);
	},
};


function getRandom(arr, n) {
    var result = new Array(n),
        len = arr.length,
        taken = new Array(len);
    if (n > len)
        throw new RangeError("getRandom: more elements taken than available");
    while (n--) {
        var x = Math.floor(Math.random() * len);
        result[n] = arr[x in taken ? taken[x] : x];
        taken[x] = --len in taken ? taken[len] : len;
    }
    return result;
}