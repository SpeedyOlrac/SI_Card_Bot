// can be used as template
//save as command as commandName.js

const adminID = '176329826641117186';
const roleMessage = "Welcome to the Spirit Island Discord! \
    \nThe Dahan seek aid! React using <:FlagBlank:742199330018164776> to receive the @LFG role, then post in #looking-for-a-game to find other players. \
    \nGot questions? #rules-questions  "; 739893703099023472

const LFG = '747806738308268075';  

module.exports = {
	name: 'role',
	description: 'adding a role',
	public: true, //has to be true to show as a command
	async execute(msg, args) {

        if(msg.author == adminID){
                
            (await msg.channel.send(roleMessage)).react(LFG);
            await msg.delete();
    }       
	},
};