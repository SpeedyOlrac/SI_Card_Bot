const Discord = require('discord.js');
const bot = new Discord.Client();

const PREFIX = '!';

//var version = package.version; 

bot.on('ready', () => {

    console.log('This bot is online');
});

bot.on('message', msg =>{
    let args = msg.content.substring(PREFIX.length).split(" ");

    switch(args[0]){
        case '':
            msg.channel.sendMessage('pong!');
            break;

        case ' ':
            msg.channel.sendMessage('');
            break;
            
        case 'embed':
            const Embed = new Discord.MessageEmbed()
            .setTitle('Card')
            .setImage('https://sick.oberien.de/imgs/powers/boon_of_vigor.webp');
            msg.channel.send(Embed);
            break;

        case 'card':
            args.shift();
            var card_name = args.toString().toLowerCase();
           // var card_name = card_name.toLowerCase();
            var site_name = "https://sick.oberien.de/imgs/powers/" + card_name.replace(/,/g, '_') + '.webp' ;
            msg.channel.send(site_name);

            break;

    }
});

function image(message){



}


client.login(process.env.BOT_TOKEN);
