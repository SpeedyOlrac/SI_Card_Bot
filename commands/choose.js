const globals = require('../globals.js')

module.exports = {
	name: 'choose',
	description: 'Choose from previously found results',
	public: true,
	async execute(msg, args) {
        if (args.length == 1) {
            console.log(globals.choices);
            if (!(globals.choices === undefined || globals.choices == 0)){
                const idx = parseInt(args[0]) - 1;
                if (idx > -1 && idx < globals.choices.length) {
                    let choice = globals.choices[idx];
                    globals.choices = [];
                    return await msg.channel.send(choice.value);   
                }
                else {
                    return await msg.channel.send("An invalid option was chosen, please choose a value between 1 and " + globals.choices.length);
                }
            }
            else{
                return await msg.channel.send("Please use this command after being prompted by the bot.");
            }
        }
        else {
            return await msg.channel.send("The _-choose_ command requires a single number")
        }
    }
}