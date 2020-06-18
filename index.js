require('dotenv').config(); 
const Discord = require('discord.js');
const bot = new Discord.Client();


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

        case 'embed':
            const Embed = new Discord.MessageEmbed()
            .setTitle('Card')
            .setImage('https://sick.oberien.de/imgs/powers/boon_of_vigor.webp');
            msg.channel.send(Embed);
            break;

        //Help, list of options
        case 'help':
            msg.channel.send("List of commands: \br \
                !search [search words], !card [card name], \
                \br !faq, !faq [search words]");

        //Search the Sick card catalog
        case 'search':
            if(args[1] == "help"){
                msg.channel.sendMessage(
                    "Gather Dahan, \"Dahan and\" major elements:plant \
                    \br elements:earth, description:\"add 1 presence\", \
                    \br range:sacred range:>=2 cost:<5 target:!any")
            }
            var site_name = "https://sick.oberien.de/?query=" + cleanInput(args);
            if(UrlExists(site_name)){
                msg.channel.send(site_name);
            }
            else{
                ms.channel.send("incorrect Syntax, try !search help");
            }
            break;
            
        
        //Show a card if spelled right
        case 'card':
            var site_name = "https://sick.oberien.de/imgs/powers/" + cleanInput(args).replace(/,/g, '_') + '.webp' ;
            if(UrlExists(site_name)){
                msg.channel.send(site_name);
            }
            else{
                msg.channel.send("Incorrect name, try using !search");
            }
            break;

        //look up on the faq, will accpect anything
        case 'faq':
            if (!args[1]){
                msg.channel.send("https://querki.net/u/darker/spirit-island-faq/#!.3y28a87");
                break;
            }
            var site_name = "https://querki.net/u/darker/spirit-island-faq/#!Search-Results?query=\"\"" + 
                    cleanInput(args) + "\"\" ";
            if(UrlExists(site_name)){
                msg.channel.send(site_name);
            }
            else{
                msg.channel.send("Incorrect name, try again");
            }
            break;        

            
    }
});

function UrlExists(url) {
    var http = new XMLHttpRequest();
    http.open('HEAD', url, false);
    http.send();
    if (http.status != 404)
        return true;
    else
        return false;
}

function cleanInput(args){
    args.shift();
    var card_name = args.toString().toLowerCase();
    return card_name.replace(/,/g, ' ');

}


bot.login();
