require('dotenv').config(); 
const Discord = require('discord.js');
const bot = new Discord.Client();
const fetch = require("node-fetch");
const to = require('await-to-js').default;
const Names = require('./Names');
const ImageNames = require('./ImageNames');
const levenshtein = require('js-levenshtein');
const fs = require('fs');



/*
    Author: Carlo I Gonzalez "SpeedyOlrac"
    Desciption: THis bot is made to help spirit island card and spirit panel look ups.
        Now has random Spirit and adversary fuctions.
        Creates link to the Spirit ISland FAQ page.
        Added a better search
    Version 1.3

*/

const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));

for (const file of commandFiles) {
	const command = require(`./commands/${file}`);
    client.commands.set(command.name, command);
}

const PREFIX = "-" ; 
var LFGRole = "";
var roleID = "<@&743228206806728766>";
var messageID = '743535158795173898';
var emojiID = "<:FlagBlank:742199330018164776>";

bot.on('ready', () => {

    console.log('This bot is online');
});

/*
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
*/

bot.on('message', async msg =>{

    //Checks if using the Correct Prefix, might have to change to a - oneday

    if(!msg.content.startsWith(PREFIX) ){ return;}

    let args = msg.content.substring(PREFIX.length).split(" ");
    
    if (bot.commands.has(command)) {

        try {
	        bot.commands.get(command).execute(message, args);
        } catch (error) {
	    console.error(error);
	    message.reply('there was an error trying to execute that command!');
    }
 

    switch(args[0]){

        //Help, list of options bot can preform
        case 'help':
            msg.channel.send(Names.help);
            break;

        //Search the Sick card catalog
        case 'search':
            if(args[1] == 'help'){
                msg.channel.send(Names.sHelp);
                break;
            }
            args.shift();
            var site_name = "https://sick.oberien.de/?query=" + args.toString().replace(/,/g, "%20");
            if(UrlExists(site_name)){
                msg.channel.send(site_name);
            }
            else{
                msg.channel.send("Incorrect Syntax, try !search help");
            }
            break;
        
        //Looks up the SicK website using inputed name. Correct name returns a website
        // Returns an error is a 404 page is returned
        case 'card' :
        case 'power':
            sendCardLink(msg, args, ImageNames.power, "https://sick.oberien.de/imgs/powers/");
            break;
            
        //Looks up the SicK website using inputed name.Correct name returns a website
        // Returns an error is a 404 page is returned
        case 'event':
            sendCardLink(msg, args, ImageNames.event, "https://sick.oberien.de/imgs/events/");
            break;
        
        //Looks up the SicK website using inputed name. Correct name returns a website
        //Returns an error is a 404 page is returned
        case 'fear':
            sendCardLink(msg, args, ImageNames.fear, "https://sick.oberien.de/imgs/fears/");
            break;
            
        //Looks up the SicK website using inputed name.Correct name returns a website
        // Returns an error is a 404 page is returned
        case 'minor':
            sendCardLink(msg, args, ImageNames.minor, "https://sick.oberien.de/imgs/powers/");
            break;

        //Looks up the SicK website using inputed name.Correct name returns a website
        // Returns an error is a 404 page is returned
        case 'major':
            sendCardLink(msg, args, ImageNames.major, "https://sick.oberien.de/imgs/powers/");
            break;
        
        //Looks up the SicK website using inputed name.Correct name returns a website
        // Returns an error is a 404 page is returned
        case 'unique':
            sendCardLink(msg, args, ImageNames.unique, "https://sick.oberien.de/imgs/powers/");
            break;

        //Look up on the faq, will accpect anything. Returns website search. 
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

        //Selects a random spirit or adversary. Return a name and a emote of the selection.
        case'random':
            if(args[1]){
              let answer = Picking(args[1], Names.spirits, args[2], args[3]);
              botMessage1 = await msg.channel.send(answer[0]);
              if(answer[1]){
                
                botMessage2 = await msg.channel.send(answer[1]);
                await delay(15);
                msg.delete();
                botMessage1.delete();
                botMessage2.delete();

              }
            }
            else{
                msg.channel.send("Do you want a random [spirit] or [adversary]?")
            }
            break;

        //TODO, find workable website with images
        //Looks for a spirit using limited word search, one part of the name has to be correct.
        //Returns a both Spirit Panel unless user specifies front or back.

        case 'spirit':
            var list = args;
            console.log(list);
            var target = "Sorry could not find the spirit you where looking for.";
            var found = false;

            outer_loop:
            console.log(list.length + " " + Names.spirits.length);
            for(var l = 1; l < list.length; l++){
                for( var s = 0; s < Names.spirits.length; s++){
                    var name = Names.spirits[s].split(" ");
                    for(var n = 0; n < name.length; n++){

                        console.log(list[l] + " " + name);
                        if (!found && list[l].length > 3 && name[n].toLowerCase() == list[l].toLowerCase()){                        
                            target = s;
                            found = true;
                            break ;//outer_loop;
                         } 
                    }
                }               
            }

            if(found){
                if(args[1].toLowerCase() != 'back'){
                    msg.channel.send(Names.panel[target][0]);
                }
                if(args[1].toLowerCase() != 'front' ){
                    msg.channel.send(Names.panel[target][1]); 
                }
            }
            else{
                msg.channel.send(target);
            }
            break;
        

        case 'rolebot':
            if (args[1] == 'number'){
                let LFGRole = args[1];
                return;
            }

            message.member.roles.add(LFGRole);

            break;
}});


function sendCardLink(msg, input, availableNames, basePath)
{
  var cardName = getCardName(input, availableNames);
  if(cardName){
    msg.channel.send(basePath + cardName  + '.webp');
  }else{
    msg.channel.send("Incorrect name, try using !search");
  }
}

// Async website check
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
        return true;
    }))
}

function getCardName(input, availableNames)
{
  var result = null;
  var closestDistance = 999;
  var target  = cleanInput(input);

  for(var name of availableNames)
  {
    var sizeDiff = name.length > target.length ? name.length - target.length : 0;
    var distance = levenshtein(target, name) - (sizeDiff * 0.8);
    if(distance < closestDistance){
      closestDistance = distance;
      result = name;
    }
  }
  return result;
}

//modify text so it fuction can prosses it
function cleanInput(args){

    args.shift();
    var card_name = args.toString().toLowerCase();
    return card_name.replace("-", "").replace("\'", "").replace(",", "_");
}

//Method to randomize spirit and adversaries
function Picking(selection, spirit, diffmin = 0, diffmax = 11){
    if(selection == 'spirit'){
        let n = Math.floor(Math.random() * Names.spirits.length);
        let answer = [Names.spirits[n], Names.emote[n]];
        return answer;
    }

    else if(selection == 'adversary'){
        // adversary is [name, escaltion diff, diff 1 ...]

        let name = Math.floor(Math.random() * Names.adversary.length)
        let level = "";
        let n = Math.floor(Math.random() * 7);
        if (n == 0){
            level = "Escalation";
        }
        else{
            level = n;
        }
        let diff = n + 2;
        let answer = Names.adversary[name][0] +
                    " " + level + " (diffculty " + Names.adversary[name][diff] + ")";
        return [answer, Names.adversary[name][1] ];
    }
    else {
        return;
        }
} 

function delay(seconds) {

  return new Promise(res => setTimeout(res, seconds*1000));

} 

bot.login();
