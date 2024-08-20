// can be used as template
//save as command as commandName.js



module.exports = {
    name: 'reactionrole',
    description: "Sets up a reaction role message!",
    public: true,
    async execute(message, args, Discord) {
        const landingChannel = "847266147120316456";
        const adminID = '176329826641117186';

        if (message.channel.id != landingChannel){
            return console.log("Reaction role was sent to the wrong channel " + message.channel.id);
        }

        const LFGEmote = message.guild.emojis.cache.find(emoji => emoji.name === 'Fast');
        const PBPEmote = message.guild.emojis.cache.find(emoji => emoji.name === 'Slow');

        let embed = new Discord.MessageEmbed()
            .setColor('#49087a')
            .setTitle('Welcome to the Spirit Island Discord!')
            .setDescription("The Dahan seek aid!")
            .setThumbnail('https://i.imgur.com/QbkXAHr.jpg?1')
            .addFields(
                { name: 'Looking for Group', value: " React with Fast" +" to receive the @LFG role, then post in " + 
                 "the LFG Channel to find other players." },
                { name: 'Play by Post', value: "React with Slow Icon" + " to join the play by post section." },
                { name: 'Rules Question', value: "Visit the rules Channel " }
            );
 
        let messageEmbed = await message.channel.send(embed);
        
		await messageEmbed.react(LFGEmote);
		await messageEmbed.react(PBPEmote);
    } 
} 

