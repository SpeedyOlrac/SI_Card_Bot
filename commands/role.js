// can be used as template
//save as command as commandName.js



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
        
        const landingChannel = message.channel;

        //await message.channel.messages.fetch({ limit: 100}).then(messages =>{
        //    message.channel.bulkDelete(messages)

        const lfgChannel = "<#739893703099023472>";
        const ruleChannel = "<#693569012075855872>"

        const LFGEmote = message.guild.emojis.cache.find(emoji => emoji.name === 'FlagBlank');
        const PBPEmote = message.guild.emojis.cache.find(emoji => emoji.name === '5SpeedSlow');
        const AmoungUsEmote = message.guild.emojis.cache.find(emoji => emoji.name === '0AmongUs');
        
        
       // message.delete();

        let embed = new Discord.MessageEmbed()
            .setColor('#49087a')
            .setTitle('Welcome to the Spirit Island Discord!')
            .setDescription("The Dahan seek aid!")
            .setThumbnail('https://i.imgur.com/QbkXAHr.jpg?1')
            .addFields(
                { name: 'Looking for Group', value: " React with <:FlagBlank:>" +" to receive the @LFG role, then post in " + 
                lfgChannel + " to find other players." },
                { name: 'Play by Post', value: "React with <:5SpeedSlow:>" + " to join the play by post section." },
                { name: 'Among Us', value: "React with <:0AmongUs:>" + " to join the Among Us group." },
                { name: 'Rules Question', value: "Visit the rules Channel " + ruleChannel }
            );
 
        let messageEmbed = await landingChannel.send(embed);
        
		await messageEmbed.react(LFGEmote);
		await messageEmbed.react(PBPEmote);
		await messageEmbed.react(AmoungUsEmote);

        //messageEmbed.react(blueTeamEmoji);
 
        
    } 
} 

