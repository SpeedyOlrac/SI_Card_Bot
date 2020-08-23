/*
    Author: Carlo I Gonzalez "SpeedyOlrac"
    Desciption: THis bot is made to help spirit island card and spirit panel look ups.
        Now has random Spirit and adversary fuctions.
        Creates link to the Spirit ISland FAQ page.
        Expan Search to other commands
    Version 2.0

    Additional work by Gudradain

*/


require('dotenv').config(); 
const fs = require('fs');
const Discord = require('discord.js');
const bot = new Discord.Client();
//const { prefix, token } = require('./config.json');
bot.commands = new Discord.Collection();

const PREFIX = "-";

const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));

for (const file of commandFiles) {
	const command = require(`./commands/${file}`);
		if(command.public){
		bot.commands.set(command.name, command);
}};

//console.log(bot.commands);

bot.once('ready', () => {
	console.log('This bot is online');
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
		//msg.reply('there was an error trying to execute that command!');
	}
});

bot.login();