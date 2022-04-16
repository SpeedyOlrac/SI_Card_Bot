const globals = require('../globals.js')

module.exports = {
	name: 'choose',
	description: 'Choose from previously found results',
	public: true,
	async execute(msg, args) {

        if (args.length == 1) {
            const idx = parseInt(args[0])-1;
            if (idx > 0 && idx < globals.choices.length) {
                let choice = globals.choices[parseInt(args[0])-1];
                globals.choices = [];
                return await msg.channel.send(choice.value);   
            }
            else {
                return await msg.channel.send("An invalid option was chosen, please try again");
            }
        }
        else {
            return await msg.channel.send("The _-choose_ command requires a single number")
        }
    }
}