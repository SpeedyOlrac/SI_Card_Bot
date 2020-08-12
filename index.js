require('dotenv').config(); 
const Discord = require('discord.js');
const bot = new Discord.Client();
const fetch = require("node-fetch");
const to = require('await-to-js').default;
const Names = require('./Names');


/*
    Author: Carlo I Gonzalez "SpeedyOlrac"
    Desciption: THis bot is made to help spirit island card and spirit panel look ups.
        Now has random Spirit and adversary fuctions.
        Creates link to the Spirit ISland FAQ page.


    Version 1.2

*/

const PREFIX = "!" ;

bot.on('ready', () => {

    console.log('This bot is online');
    console.log(Names.spirits);
});

bot.on('message', msg =>{

    //Checks if using the Correct Prefix, might have to change to a - oneday

    if(!msg.content.startsWith(PREFIX) ){ return;}

    let args = msg.content.substring(PREFIX.length).split(" ");


    switch(args[0]){

        //Help, list of options bot can preform
        case 'help':
            msg.channel.send(Names.help);

        //Search the Sick card catalog
        case 'search':
            if(args[1] == 'help'){
                msg.channel.send(Names.sHelp);
                break;
            }
            var site_name = "https://sick.oberien.de/?query=" + cleanInput(args).replace(/,/g, "%20");
            if(UrlExists(site_name)){
                msg.channel.send(site_name);
            }
            else{
                ms.channel.send("Incorrect Syntax, try !search help");
            }
            break;
            
        
        //Looks up the SicK website using inputed name. Correct name returns a website
        // Returns an error is a 404 page is returned
        case 'card' :
        case 'power':
            var site_name = "https://sick.oberien.de/imgs/powers/" + cleanInput(args).replace(/,/g, '_') + '.webp';
            if(UrlExists(site_name)){
                msg.channel.send(site_name);
            }
            else{
                msg.channel.send("Incorrect name, try using !search");
            }
            break;
            
        //Looks up the SicK website using inputed name.Correct name returns a website
        // Returns an error is a 404 page is returned
        case 'event':
            var site_name = "https://sick.oberien.de/imgs/events/" + cleanInput(args).replace(/,/g, '_') + '.webp';
            if(UrlExists(site_name)){
                msg.channel.send(site_name);
            }
            else{
                msg.channel.send("Incorrect name, try using !search");
            }
            break;
        
         //Looks up the SicK website using inputed name. Correct name returns a website
         //Returns an error is a 404 page is returned
        case 'fear':
            var site_name = "https://sick.oberien.de/imgs/fears/" + cleanInput(args).replace(/,/g, '_') + '.webp';
            if(UrlExists(site_name)){
                msg.channel.send(site_name);
            }
            else{
                msg.channel.send("Incorrect name, try using !search");
            }
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
               msg.channel.send(answer[0]);
               if(answer[1]){
                msg.channel.send(answer[1]);
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
                    msg.channel.send(Names.panel[s][0]);
                }
                if(args[1].toLowerCase() != 'front' ){
                    msg.channel.send(Names.panel[s][1]); 
                }
            }
            else{
                msg.channel.send(target);
            }

            break;
    }});


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
    }));
}

//modify text so it fuction can prosses it
function cleanInput(args){
    var card_name = args.shift().toString().toLowerCase();
    card_name = card_name.replace("-", "");
    card_name = card_name.replace("\'", "");
    return card_name;
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
        msg.channel.send("Do you want a random [spirit] or [adversary]?");
        return;
        }
} 

bot.login();
