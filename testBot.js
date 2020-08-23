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

bot.login('NzQ2NTExNzIwOTIyNzQyODg3.X0BZNw.IPVgZtd2FC2naBt4_XEAyxwIOhQ');