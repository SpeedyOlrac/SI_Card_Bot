const fs = require('fs');
const Discord = require('discord.js');
const bot = new Discord.Client();
//const { prefix, token } = require('./config.json');
bot.commands = new Discord.Collection();
const PREFIX = "$";

const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));

for (const file of commandFiles) {
	const command = require(`./commands/${file}`);
		if(command.public){
		bot.commands.set(command.name, command);
}};

//console.log(bot.commands);

bot.once('ready', () => {
	console.log('Ready!');
});

bot.on('message', async msg => {

	if (!msg.content.startsWith(PREFIX)) return;

	const args = msg.content.slice(PREFIX.length).trim().split(' ');
	const command = args.shift().toLowerCase();
	console.log(command);
	
	if (!bot.commands.has(command)) return console.log("command not in list");

	try {
		await bot.commands.get(command).execute(msg, args);
	} catch (error) {
		console.error(error);
		msg.reply('there was an error trying to execute that command!');
	}
});


bot.on('messageReactionAdd', async (reaction, user) => {
    
    let applyRole = async () => {
        let emojiName = reaction.emoji.name;
        //let role = reaction.message.guild.roles.find(role => role.name.toLowerCase() === emojiName.toLowerCase());
        let member = reaction.message.guild.members.find(member => member.id === user.id);
        try {
            if(roleID && member) {
                console.log("Role and member found.");
                await member.roles.add(roleID);
                console.log("Done.");
            }
        }
        catch(err) {
            console.log(err);
        }
    }
    if(reaction.message.partial)
    {
        try {
            let msg = await reaction.message.fetch(); 
            console.log(msg.id);
            if(msg.id === messageID)
            {
                console.log("Cached")
                applyRole();
            }
        }
        catch(err) {
            console.log(err);
        }
    }
    else 
    {
        console.log("Not a partial.");
        if(reaction.message.id === messageID) {
            console.log(true);
            applyRole();
        }
    }
});


bot.on('messageReactionRemove', async (reaction, user) => {
    let removeRole = async () => {
        if ( reaction.emoji.name != emojiID){ return };
        //let role = reaction.message.guild.roles.find(role => role.name.toLowerCase() === emojiName.toLowerCase());
        let member = reaction.message.guild.members.find(member => member.id === user.id);
        try {
            if(roleID && member) {
                console.log("Role and member found.");
                await member.roles.remove(roleID);
                console.log("Done.");
            }
        }
        catch(err) {
            console.log(err);
        }
    }
    if(reaction.message.partial)
    {
        try {
            let msg = await reaction.message.fetch(); 
            console.log(msg.id);
            if(msg.id === messageID)
            {
                console.log("Cached")
                removeRole();
            }
        }
        catch(err) {
            console.log(err);
        }
    }
    else 
    {
        console.log("Not a partial.");
        if(reaction.message.id === messageID) {
            console.log(true);
            removeRole();
        }
    }
})

bot.login('NzQ2NTExNzIwOTIyNzQyODg3.X0BZNw.WR68O2qRCdEnLme2hrGLiGKfKHI');