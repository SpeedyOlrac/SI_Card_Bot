/*
    Author: Carlo I Gonzalez "SpeedyOlrac"
    Desciption: THis bot is made to help spirit island card and spirit panel look ups.
        Now has random Spirit and adversary fuctions.
        Creates link to the Spirit ISland FAQ page.
        Expan Search to other commands
    Version 2.0.2 role bot

    


*/


require('dotenv').config(); 
const fs = require('fs');
const Discord = require('discord.js');
const bot = new Discord.Client({
    partials: ['MESSAGE', 'CHANNEL', 'REACTION']
});

bot.commands = new Discord.Collection();

const PREFIX = "-";

const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));

for (const file of commandFiles) {
	const command = require(`./commands/${file}`);
		if(command.public){
		bot.commands.set(command.name, command);
}};

//console.log(bot.commands);

bot.once('ready', async() => {
	console.log('This bot is online');

    var channel = bot.get_channel("id", '743227873875329137');
    var message = await channel.send('test');
    message.react('FlagBlank');
    message.delete();
});

bot.on('message', async msg => {

	if (!msg.content.startsWith(PREFIX)) return;

	const args = msg.content.slice(PREFIX.length).trim().split(' ');
	const command = args.shift().toLowerCase();
	console.log(command);
	
	if (!bot.commands.has(command)) return console.log("command not in list");

	try {
		await bot.commands.get(command).execute(msg, args, Discord);
	} catch (error) {
		console.error(error);
		//msg.reply('there was an error trying to execute that command!');
	}
});


bot.on('messageReactionAdd', async (reaction, user) => {
    console.log("Reaction role add");

    const channel = '743227873875329137';

    if (reaction.message.channel.channel_id != channel){
        return;
    }

    const LFGRole = reaction.message.guild.roles.cache.find(role => role.name === "LFG");
    const PBPRole = reaction.message.guild.roles.cache.find(role => role.name === "PBP");
    const AmoungUsRole = reaction.message.guild.roles.cache.find(role => role.name === "Among Us");

    const lfgEmote = 'FlagBlank';
    const PBPEmote = '5SpeedSlow';
    const amoungUsEmote = ":0AmongUs";

    const role = [LFGRole, PBPRole, AmoungUsRole];
    const emote = ['FlagBlank', '5SpeedSlow', ":0AmongUs"];

    if (reaction.partial) {
		// If the message this reaction belongs to was removed the fetching might result in an API error, which we need to handle
		try {
			await reaction.fetch();
		} catch (error) {
			console.error('Something went wrong when fetching the message: ', error);
			// Return as `reaction.message.author` may be undefined/null
			return;
		}
	}

    if (reaction.message.channel.id == channel) {
        console.log(reaction.emoji.name + "emojiID");
        for (var i = 0; i < role.length; i++){
            if (emote[i] == reaction.emoji.name ){
                await reaction.message.guild.members.cache.get(user.id).roles.add(role[i]);
            }
        }
    } else {
        return;
    }

});


bot.on('messageReactionRemove', async (reaction, user) => {
    
    const channel = '743227873875329137';

    if (reaction.message.channel.channel_id != channel){
        return;
    }

    const LFGRole = reaction.message.guild.roles.cache.find(role => role.name === "LFG");
    const PBPRole = reaction.message.guild.roles.cache.find(role => role.name === "PBP");
    const AmoungUsRole = reaction.message.guild.roles.cache.find(role => role.name === "Among Us");

    const lfgEmote = 'FlagBlank';
    const PBPEmote = '5SpeedSlow';
    const amoungUsEmote = "<824390516048134185>";

    const role = [LFGRole, PBPRole, AmoungUsRole];
    const emote = ['FlagBlank', '5SpeedSlow', ":0AmongUs"];


    if (reaction.partial) {
		// If the message this reaction belongs to was removed the fetching might result in an API error, which we need to handle
		try {
			await reaction.fetch();
		} catch (error) {
			console.error('Something went wrong when fetching the message: ', error);
			// Return as `reaction.message.author` may be undefined/null
			return;
		}
	}

    console.log(LFGRole + " LFGRole ID");
    console.log(reaction.message.channel.id + " Channel ID");

    if (reaction.message.channel.id == channel) {

        for (var i = 0; i < role.length; i++){
            if (emote[i] == reaction.emoji.name ){
                await reaction.message.guild.members.cache.get(user.id).roles.remove(role[i]);
            }
        }
        // if (reaction.emoji.name === lfgEmote) {
        //     await reaction.message.guild.members.cache.get(user.id).roles.remove(LFGRole);
        // }
        // if (reaction.emoji.name === PBPEmote) {

        //     await reaction.message.guild.members.cache.get(user.id).roles.remove(PBPRole);
        // }

    } else {
        return;
    }
});



bot.login();