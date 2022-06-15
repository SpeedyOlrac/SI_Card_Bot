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

bot.once('ready', async() => {
    console.log('This bot is online');
    console.log(bot.command);

});

bot.on('message', async msg => {

    if (!msg.content.startsWith(PREFIX)) return;

    let args = msg.content.slice(PREFIX.length).trim().split(' ');
    let command = args.shift().toLowerCase();
    console.log(command);

    // if (!isNaN(parseInt(command))) {
    //     args = [command]
    //     command = "choose"
    // }

    if (!bot.commands.has(command)) return console.log("command not in list");

    try {
        await bot.commands.get(command).execute(msg, args, Discord);
    } catch (error) {
        console.error(error);
    }
});


bot.on('messageReactionAdd', async (reaction, user) => {

    if (reaction.message.partial) await reaction.message.fetch();
    if (reaction.partial) await reaction.fetch();
    if (user.bot) return;
    if (!reaction.message.guild) return;

    const channel ="847266147120316456";

    
    const LFGRole = reaction.message.guild.roles.cache.find(role => role.name === "LFG");
    const PBPRole = reaction.message.guild.roles.cache.find(role => role.name === "pbp");

    const lfgEmote = 'Fast';
    const PBPEmote = 'Slow';

    const role = [LFGRole, PBPRole];
    const emote = [ lfgEmote, PBPEmote];

    if (reaction.message.channel.id == channel) {
        for (var i = 0; i < role.length; i++){
            if (emote[i] == reaction.emoji.name ){
                await reaction.message.guild.members.cache.get(user.id).roles.add(role[i]);
                console.log("added " + reaction[i])
            }
        }
    } else {
        return console.log("Wrong Channel " + reaction.message.channel.id);
    }
    
});


bot.on('messageReactionRemove', async (reaction, user) => {
    
    const channel ="847266147120316456";


    if (reaction.message.partial) await reaction.message.fetch();
    if (reaction.partial) await reaction.fetch();
    if (user.bot) return;
    if (!reaction.message.guild) return;

    const LFGRole = reaction.message.guild.roles.cache.find(role => role.name === "LFG");
    const PBPRole = reaction.message.guild.roles.cache.find(role => role.name === "pbp");

    const lfgEmote = 'Fast';
    const PBPEmote = 'Slow';

    const role = [LFGRole, PBPRole];
    const emote = [lfgEmote, PBPEmote]


    if (reaction.message.channel.id == channel) {

        for (var i = 0; i < role.length; i++){
            if (emote[i] == reaction.emoji.name ){
                await reaction.message.guild.members.cache.get(user.id).roles.remove(role[i]);

            }
        }

    } else {
        return console.log("Wrong Channel " + reaction.message.channel.id);
    }
});



bot.login();