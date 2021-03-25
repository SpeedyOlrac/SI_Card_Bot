// can be used as template
//save as command as commandName.js
const cards = require ("./ImageNames.js")


module.exports = {
	name: 'draw',
	description: 'draw 4 random cards',
	public: true, //has to be true to show as a command
	async execute(msg, args) {

        let list = [];
        length =  0;
        console.log(args);
        if (args.length == 2){
            if (args[1] > 10){
                return msg.channel.send("Can not draw more than 10 cards");
            }
        }


        switch(args[0]){
            case 'minor':
            cards
                console.log('cards.minor');
                var num = (args.length == 1) ? args[1]: 4;
                 list = getRandom(cards.minor, num);
                 list = scrubList(list);
                 break;
            case 'major':
                console.log('cards.major');
                var num = (args.length == 1) ? args[1]: 4;
                list = getRandom(cards.major, num);
                list = scrubList(list);
                break;
            case 'fear':
                console.log('cards.fear');
                var num = (args.length == 1) ? args[1]: 1;
                list = getRandom(cards.fear, num);
                list = scrubList(list);
                break;
            case 'event':
                console.log('cards.event');
                var num = (args.length == 1) ? args[1]: 1;
                list = getRandom(cards.event, 1);
                list = scrubList(list);
                break;
            default:
                var message = "Draw a Minor, Major, Fear or Event card.";
                list[0] = message;

        }

        console.log(list);
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

function scrubList(list){

    for (var i = 0; i < list.length; i++){
        list[i] = camelCase[i];
    }

    return list;
}


function camelCase(str) {
    str = removeNonWord(str)
      .replace('/\-/g', " ") //convert all hyphens to spaces
      .replace('/\s[a-z]/g', upperCase) //convert first char of each word to UPPERCASE
      .replace('/\s+/g', "") //remove spaces
      .replace('/^[A-Z]/g', lowerCase); //convert first char to lowercase
      console.log(str);
    return str;
  
}

function removeNonWord(str) {
    return str.replace(/[^0-9a-zA-Z\xC0-\xFF \-]/g, "");

 }