// can be used as template
//save as command as commandName.js

const adminID = '176329826641117186';
const roleMessage = "Please react to recieve the Following Roles: \
                \n <:FlagBlank:742199330018164776> for LFG ";


module.exports = {
	name: 'role',
	description: 'adding a role',
	public: false, //has to be true to show as a command
	execute(msg, args) {

        if(msg.author == adminID){
            var reactionMsg = msg.channel.send(roleMessage);
            reactionMsg.react('<:FlagBlank:742199330018164776>');
            msg.delete();
        }
	},
};