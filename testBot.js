const fs = require('fs');
const Discord = require('discord.js');
const bot = new Discord.Client({
	partials: ['MESSAGE', 'REACTION']
});

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

    console.log(commands);
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


const adminID = '176329826641117186';
const messageID = ['747213166026555433', '747220369857052842'];
const roleID = ['743228206806728766', '498865006297743362'];//
const emojiID = ['742199330018164776', '411249545394126854'];

bot.on('messageReactionAdd', async (reaction, user) => {
    
    let applyRole = async () => {
		let emojiName = reaction.emoji.id;
		let role = roleID[emojiID.indexOf(emojiName)];
		let member = reaction.message.guild.members.cache.find(member => member.id === user.id);
        try {
            if(role && member) {
                console.log("Role and member found.");
                await member.roles.add(role);
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
        if(messageID.indexOf(reaction.message.id )) {
            console.log(true);
            applyRole();
        }
    }
});

bot.on('messageReactionRemove', async (reaction, user) => {
    let removeRole = async () => {
		let emojiName = reaction.emoji.id;
		let role = roleID[emojiID.indexOf(emojiName)];
		let member = reaction.message.guild.members.cache.find(member => member.id === user.id);
        try {
            if(roleID && member) {
                console.log("Role and member found.");
                await member.roles.remove(role);
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
        if(messageID.indexOf(reaction.message.id )) {
            console.log(true);
            removeRole();
        }
    }
});

const a = 'NzQ2NTExNzIwOTIyNzQyODg3.X0BZNw.';
const b = 'Ul0O35f0XN7LDvawCExOc8d6_I8';
bot.login(a + b);

//'NzQ2NTExNzIwOTIyNzQyODg3.X0BZNw.
//swCP3JkBpusJ7eGOytK1AVNcc6A'