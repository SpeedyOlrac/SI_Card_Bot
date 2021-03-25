// can be used as template
//save as command as commandName.js
const cards = require ("./ImageNames.js")


module.exports = {
	name: 'draw',
	description: 'draw 4 random cards',
	public: true, //has to be true to show as a command
	async execute(msg, args) {

        let list = [];
        console.log(args);

        switch(args[0]){
            case 'minor':
            cards
                console.log('cards.minor');
                 list = getRandom(cards.minor, 4);
                 break;
            case 'major':
                console.log('cards.major');
                list = getRandom(cards.major, 4);
                break;
            case 'fear':
                console.log('cards.fear');
                list = getRandom(cards.fear, 1);
                break;
            case 'event':
                console.log('cards.event');
                list = getRandom(cards.event, 1);
                break;
            default:
                var message = "Draw a Minor, Major, Fear or Event card.";
                list[0] = message;

        }

        for (var i = 0; i < list.length; i++ ){
            list[i] = camelCase(list[i]);
            console.log(list[i]);
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

function camelCase (str){
    str = str.replace('_', ' ');
    const regExp = /[-_]\w/ig;
    return str.replace(regExp,(match) => {
        return match[1].toUppercase()
     });

}