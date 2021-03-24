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
    async execute(message, args, Discord, client) {
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
 
        client.on('messageReactionAdd', async (reaction, user) => {
            if (reaction.message.partial) await reaction.message.fetch();
            if (reaction.partial) await reaction.fetch();
            if (user.bot) return;
            if (!reaction.message.guild) return;
 
            if (reaction.message.channel.id == channel) {
                if (reaction.emoji.name === lfgEmote) {
                    await reaction.message.guild.members.cache.get(user.id).roles.add(LFGRole);
                }
                if (reaction.emoji.name === blueTeamEmoji) {
                    await reaction.message.guild.members.cache.get(user.id).roles.add(blueTeamRole);
                }
            } else {
                return;
            }
 
        });
 
        client.on('messageReactionRemove', async (reaction, user) => {
 
            if (reaction.message.partial) await reaction.message.fetch();
            if (reaction.partial) await reaction.fetch();
            if (user.bot) return;
            if (!reaction.message.guild) return;
 
 
            if (reaction.message.channel.id == channel) {
                if (reaction.emoji.name === lfgEmote) {
                    await reaction.message.guild.members.cache.get(user.id).roles.remove(LFGRole);
                }
                if (reaction.emoji.name === blueTeamEmoji) {
                    await reaction.message.guild.members.cache.get(user.id).roles.remove(blueTeamRole);
                }
            } else {
                return;
            }
        });
    }
 
}   










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