require('dotenv').config(); 
const Discord = require('discord.js');
const bot = new Discord.Client();
const fetch = require("node-fetch");
const to = require('await-to-js').default;

const PREFIX = "!";

bot.on('ready', () => {

    console.log('This bot is online');
});

bot.on('message', msg =>{
    let args = msg.content.substring(PREFIX.length).split(" ");

    switch(args[0]){
        case 'ping':
            msg.channel.send('pong!');
            break;

        case 'embed':
            const Embed = new Discord.MessageEmbed()
            .setTitle('Card')
            .setImage('https://sick.oberien.de/imgs/powers/boon_of_vigor.webp');
            msg.channel.send(Embed);
            break;

        //Help, list of options
        case 'help':
            msg.channel.send("List of commands: \
            \n !search [search words], !card [card name], \
            \n !faqs, !faqs [search words]");

        //Search the Sick card catalog
        case 'search':
            if(args[1] == 'help'){
                msg.channel.send("Examples: \
                \n Gather Dahan, \"Dahan and\" major elements:plant \
                \n elements:earth, description:\"add 1 presence\", \
                \n range:sacred range:>=2 cost:<5 target:!any");
                break;
            }
            var site_name = "https://sick.oberien.de/?query=" + cleanInput(args).replace(/,/g, "%20");
            if(UrlExists(site_name)){
                msg.channel.send(site_name);
            }
            else{
                ms.channel.send("incorrect Syntax, try !search help");
            }
            break;
            
        
        //Show a card if spelled right
        case 'card' || 'power':
            var site_name = "https://sick.oberien.de/imgs/powers/" + cleanInput(args).replace(/,/g, '_') + '.webp';
            if(UrlExists(site_name)){
                msg.channel.send(site_name);
            }
            else{
                msg.channel.send("Incorrect name, try using !search");
            }
            break;
            
        case 'event':
            var site_name = "https://sick.oberien.de/imgs/events/" + cleanInput(args).replace(/,/g, '_') + '.webp';
            if(UrlExists(site_name)){
                msg.channel.send(site_name);
            }
            else{
                msg.channel.send("Incorrect name, try using !search");
            }
            break;
            
        case

        //look up on the faq, will accpect anything
        case 'faqs':
            if (!args[1]){
                msg.channel.send("https://querki.net/u/darker/spirit-island-faq/#!.3y28a87");
                break;
            }
            var site_name = "https://querki.net/u/darker/spirit-island-faq/#!Search-Results?query=\"\"" + 
                    cleanInput(args).replace(/,/g, '%20') + "%22%22" ;
            console.log(site_name);
            if(UrlExists(site_name)){
                msg.channel.send(site_name);
            }
            else{
                msg.channel.send("Incorrect name, try again");
            }
            break;        
    }
});

async function UrlExists(url) {
    
    var status = await to(fetch(url)
    .then(function(response){
       console.log(response.headers.get('Content-Type'));
        if (response.headers.get('Content-Type') == "image/webp"){
            console.log("true, image");
            return true;
        }
        if (!response.ok){
            console.log("false, 404");

            return false;
        }
        console.log("true, workign site");
        return true;
    }));
}

function cleanInput(args){
    args.shift();
    var card_name = args.toString().toLowerCase();
    return card_name;

}

bot.login();
