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

        if (message.channel.id != channel){
            return console.log("Reaction role was sent to the wrong channel " + message.channel.id);
        }
 
        const LFGRole = message.guild.roles.cache.find(role => role.name === "LFG");
        const PBPRole = message.guild.roles.cache.find(role => role.name === "PBP");
        const AmoungUsRole = message.guild.roles.cache.find(role => role.name === "Among Us");
    
        const lfgChannel = "<#739893703099023472>";
        const ruleChannel = "<#693569012075855872>"

        const LFGEmote = 'FlagBlank';
        const PBPEmote = '5SpeedSlow';
        const AmoungUsEmote = "0AmongUs";
        
        let embed = new Discord.MessageEmbed()
            .setColor('#49087a')
            .setTitle('Welcome to the Spirit Island Discord!')
            .setDescription("The Dahan seek aid!")
            .setThumbnail('https://i.imgur.com/QbkXAHr.jpg?1')
            .addFields(
                { name: 'Looking for Group', value: "React using "+ LFGEmote + 
                "to receive the @LFG role, then post in " + lfgChannel+" to find other players." },
                { name: 'Play by Post', value: "React with the " + PBPEmote+ " to join the play by post section." },
                { name: 'Amoung Us', value: "React with the "+ AmoungUsEmote + " to join the Amoung us group." },
                { name: 'Rules Question', value: "Visit the rules Channel " + ruleChannel },
            );
 
        let messageEmbed = await message.channel.send(embed);
        try {
			await messageEmbed.react(LFGEmote);
			await messageEmbed.react(PBPEmote);
			await messageEmbed.react(AmoungUsEmote);
		} catch (error) {
			console.error('One of the emojis failed to react.');
        //messageEmbed.react(blueTeamEmoji);
 
        }
    } 
} 

