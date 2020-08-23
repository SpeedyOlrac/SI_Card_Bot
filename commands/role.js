// can be used as template
//save as command as commandName.js

const adminID = '176329826641117186';
const roleMessage = "Please react to recieve the Following Roles: \
                \n <:FlagBlank:742199330018164776> for LFG ";

const LFG = '<:FlagBlank:742199330018164776>';

module.exports = {
	name: 'role',
	description: 'adding a role',
	public: true, //has to be true to show as a command
	async execute(msg, args) {

        if(msg.author == adminID){
                
            (await msg.channel.send(roleMessage)).react('742199330018164776');
            await msg.delete();
    }
	},
};