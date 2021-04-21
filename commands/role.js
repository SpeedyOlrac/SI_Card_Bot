// can be used as template
//save as command as commandName.js



//const LFG = '747806738308268075';  



module.exports = {
    name: 'reactionrole',
    description: "Sets up a reaction role message!",
    public: true,
    async execute(message, args, Discord) {
        const channel = '743227873875329137';
        const adminID = '176329826641117186';
        const LFGRole = message.guild.roles.cache.find(role => role.name === "LFG");
        //const blueTeamRole = message.guild.roles.cache.find(role => role.name === "YOUR_ROLE");

        if (message.channel.channel_id != channel){
            return console.log("Reaction role was sent to the wrong channel " + channel);
        }
 
        const lfgEmote = "<:FlagBlank:742199330018164776 >";
        const pbpEmote = "<:5SpeedSlow:824390516048134185>";
        const amoungUsEmote = "<824390516048134185>";
      
        const lfgChannel = "<#739893703099023472>";
        const ruleChannel = "<#693569012075855872>"

        
        const roleMessage = "The Dahan seek aid! React using "+ lfgEmote + 
            "to receive the @LFG role,\
            then post in " + lfgChannel+" to find other players. \n\
            React with the " + pbpEmote+ " to join the play by post section. \n\
            React with the "+ amoungUsEmote + " to join the Amoung us group.\
            \nGot rule questions? " + ruleChannel; 


 
        let embed = new Discord.MessageEmbed()
            .setColor('#49087a')
            .setTitle('Welcome to the Spirit Island Discord!')
            .setDescription(roleMessage);
 
        let messageEmbed = await message.channel.send(embed);
        try {
			await embed.react(lfgChannel);
			await embed.react(pbpEmote);
			await embed.react(amoungUsEmote);
		} catch (error) {
			console.error('One of the emojis failed to react.');
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