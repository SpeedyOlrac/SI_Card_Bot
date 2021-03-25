// can be used as template
//save as command as commandName.js

const adminID = '176329826641117186';
const roleMessage = "The Dahan seek aid! React using <:FlagBlank:742199330018164776> to receive the @LFG role, then post in #looking-for-a-game to find other players. \
    \nGot questions? #rules-questions  "; 

//const LFG = '747806738308268075';  



module.exports = {
    name: 'reactionrole',
    description: "Sets up a reaction role message!",
    public: true,
    async execute(message, args, Discord) {
        const channel = '743227873875329137';
        const LFGRole = message.guild.roles.cache.find(role => role.name === "LFG");
        //const blueTeamRole = message.guild.roles.cache.find(role => role.name === "YOUR_ROLE");
 
        const lfgEmote = 'FlagBlank';
        //const blueTeamEmoji = 'YOUR_EMOJI';
 
        let embed = new Discord.MessageEmbed()
            .setColor('#49087a')
            .setTitle('Welcome to the Spirit Island Discord!')
            .setDescription(roleMessage);
 
        let messageEmbed = await message.channel.send(embed);
        messageEmbed.react(lfgEmote);
        //messageEmbed.react(blueTeamEmoji);
 
    }
};   










/*
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

*/