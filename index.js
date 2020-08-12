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
    console.log(Names.spirits[0]);
});

bot.on('message', msg =>{

    //Checks if using the Correct Prefix, might have to change to a - oneday

    if(!msg.content.startsWith(PREFIX) ){ return;}

    let args = msg.content.substring(PREFIX.length).split(" ");


    switch(args[0]){

        //Help, list of options bot can preform
        case 'help':
            msg.channel.send("List of commands: \
            \n !search [search words]\
            \n !card [card name], !power [card name] \
            \n !faqs (search words), \
            \n !events [event name] \
            \n !fear [fear name] \
            \n !random [spirit/adversary] (diffculty)   \
            \n !spirit (front/back) [keywords] ");

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
        case 'events':
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
                            target = Names.spirits[s];
                            found = true;
                            break ;//outer_loop;
                         } 
                }               
            }

            if(found){
                var website = "https://raw.githubusercontent.com/SpeedyOlrac/SI_Card_Bot/master/SpiritPanelsSmall/";

                if(args[1].toLowerCase() != 'back'){
                    msg.channel.send(website + target.replace(/\s/g, '') +"Panel.jpg.");
                }
                if(args[1].toLowerCase() != 'front' ){
                    msg.channel.send(website + target.replace(/\s/g, '') +"Panel1.jpg."); 
                }
            }

            else{
                msg.channel.send(target);
            }

            break;
        }
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


        let emote = [
            '<:SpiritRampant:729608434365759510>',
            '<:SpiritBODAN:729607979317461042>',
            '<:SpiritDownpour:729607988662370344>',
            '<:SpiritFinder:729608181407416360>',
            '<:SpiritFractured:729608364706889779>',
            '<:SpiritTrickster:729608576334823485>',
            '<:SpiritWildfire:729608618655219802>',
            '<:SpiritKeeper:729608378783105105>',
            '<:SpiritLightning:729608388958355516>',
            '<:SpiritLure:729608402090590268>',
            '<:SpiritManyMinds:729608412580806698>',
            '<:SpiritOceans:729608424425390140>',
            '<:SpiritRivers:729608447913623552>',
            '<:SpiritSnek:729608507388854292>',
            '<:SpiritShadows:729608460378964059>',
            '<:SpiritFangs:729608010405773432>',
            '<:SpiritShifting:729608473028853770>',
            '<:SpiritShroud:729608494386380811>',
            '<:SpiritStarlight:729608519833223200>',
            '<:SpiritStone:729608539966013442>',
            '<:SpiritThunderspeaker:737369744428105739>',
            '<:SpiritVengeance:729608583846821959>',
            '<:SpiritEarth:729607999441731614>',
            '<:SpiritVolcano:729608598715367474>'   
        ];
        let n = Math.floor(Math.random() * spirits.length);
        let answer = [spirits[n], emote[n]];
        return answer;
    }

    else if(selection == 'adversary'){
        
        // adversary is [name, escaltion diff, diff 1 ...]
        let adversary = [
            ['Brandenburg-Prussia', '<:Prussia:741092407935893555>', 1, 2, 4, 6, 7, 9, 10  ],
            ['England', ':england:', 1, 3, 4, 6, 7, 9, 10],
            ['France (Plantation Colony)', '<:france:741093435028668558>', 2, 3, 5, 7, 8, 9, 10 ],
            ['Hapsburg Dynasty', '<:hapsburg:741091437000654851> ', 2, 3, 5, 6, 8, 9, 10],
            ['Russia', ':flag_ru:' , 1, 3, 4, 6, 7, 9, 11],
            ['Scotland', ':scotland:',1, 4, 6, 7, 8, 10],
            ['Sweden',':flag_se:',  1, 2, 3, 5, 6, 7, 8 ]
        ];

        let name = Math.floor(Math.random() * adversary.length)
        let level = "";
        let n = Math.floor(Math.random() * 7);
        if (n == 0){
            level = "Escalation";
        }
        else{
            level = n;
        }

        let diff = n + 2;
        let answer = adversary[name][0] +
                        " " + level + " (diffculty " + adversary[name][diff] + ")";
        return [answer, adversary[name][1] ];
    }
    else {
        msg.channel.send("Do you want a random [spirit] or [adversary]?");
        return;
        }

} 

bot.login();
