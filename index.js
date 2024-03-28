/*
    Author: Carlo I Gonzalez "SpeedyOlrac"
    Desciption: THis bot is made to help spirit island card and spirit panel look ups.
        Now has random Spirit and adversary fuctions.
        Creates link to the Spirit ISland FAQ page.
        Expand Search to other commands
    Version 2.8.2 role bot  
*/

require('dotenv').config(); 
const fs = require('fs');
const Discord = require('discord.js');

const { Client, Collection, GatewayIntentBits, Intents} = require('discord.js');
//const allIntents = new Intents(7796);

//const allIntents = new Intents({ intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES] });

//const bot = new Client({ intents: allIntents });

//const intents = new Intents(342016);
//const bot = new Discord.Client({ intents });

//const bot = new Client({ intents: 342016 }); // Correct usage

const bot = new Client({
	intents: [
		GatewayIntentBits.Guilds,
		GatewayIntentBits.GuildMessages,
		GatewayIntentBits.MessageContent,
		GatewayIntentBits.GuildMembers,
	],
});/**/

//const { Client, Collection} = require('discord.js');
//const bot = new Client();
const PREFIX = "-";

bot.commands = new Collection();

const commandFiles = fs.readdirSync('./commands/').filter(file => file.endsWith('.js'));

for (const file of commandFiles) {
    const command = require(`./commands/${file}`);
        //if(command.public){
        bot.commands.set(command.name, command);
//}
};

bot.once('ready', async() => {
    console.log('This bot is online');
 
    // Set bot's presence
    bot.user.setPresence({
        status: 'online',
        activity: {
            name: 'for -help', // e.g., 'playing Spirit Island'
            type: 'WATCHING' // You can also use 'STREAMING', 'LISTENING', or 'WATCHING'
        }
    });
 
    console.log(bot.commands.get("spirit").name);

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
    //

    if (!bot.commands.has(command)) return console.log("command not in list");

    try {
        await bot.commands.get(command).execute(msg, args, Discord);
    } catch (error) {
        console.error(error);
    }
});


bot.login();