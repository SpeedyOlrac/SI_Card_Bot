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
            \n !faqs (search words), \
            \n !events [event name] \
            \n !random [spirit/adversary] (diffculty) "  );

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
            
        case 'events':
            var site_name = "https://sick.oberien.de/imgs/events/" + cleanInput(args).replace(/,/g, '_') + '.webp';
            if(UrlExists(site_name)){
                msg.channel.send(site_name);
            }
            else{
                msg.channel.send("Incorrect name, try using !search");
            }
            break;
            

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

        case'random':
            if(args[1]){
                Picking(args[1], args[2], args[3]);
            }
            else{
                msg.channel.send("So you want a random [spirit] or [adversary]?")
            }
                    break;
            }
    }
);

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
    card_name = card_name.replace("-", "");
    card_name = card_name.replace("\'", "");
    return card_name;

}

//Method to randomize spirit and adversaries
function Picking(selection, diffmin = 0, diffmax = 11){
    if(selection == 'spirit'){
        let spirits = [
            'A Spread of Rampant Green',
            'Bringer of Dreams and Nightmares',
            'Downpour Drenches the World',
            'Finder of Paths Unseen',
            'Fractured Days Split the Sky',
            'Grinning Trickster Stirs Up Trouble',
            'Heart of the Wildfire',
            'Keeper of the Forbidden Wilds',
            'Lightning\'s Swift Strike',
            'Lure of the Deep Wilderness',
            'Many Minds Move as One',
            'Ocean\'s Hungry Grasp',
            'River Surges in Sunlight',
            'Serpent Slumbering Beneath the Island',
            'Shadows Flicker Like Flame',
            'Sharp Fangs Behind the Leaves',
            'Shifting Memory of Ages',
            'Shroud of Silent Mist',
            'Starlight Seeks Its Form',
            'Stone\'s Unyielding Defiance',
            'Thunderspeaker',
            'Vengeance as a Burning Plague',
            'Vital Strength of the Earth',
            'Volcano Looming High'
         ];

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
            ' <:SpiritStarlight:729608519833223200>',
            '<:SpiritStone:729608539966013442>',
            '<:SpiritThunderspeaker:737369744428105739>',
            '<:SpiritVengeance:729608583846821959>',
            '<:SpiritEarth:729607999441731614>',
            '<:SpiritVolcano:729608598715367474>'   
        ];
        let n = Math.floor(Math.random() * spirits.length);

        msg.channel.send(spirits[n]);
        msg.channel.send(emote[n]);

        return;
    }

    else if(selection == 'adversary'){
        
        // adversary is [name, escaltion diff, diff 1 ...]
        let adversary = [
            ['Brandenburg-Prussia', 1, 2, 4, 6, 7, 9, 10  ],
            ['England', 1, 3, 4, 6, 7, 9, 10],
            ['France (Plantation Colony)', 2, 3, 5, 7, 8, 9, 10 ],
            ['Hapsburg Dynasty', 2, 3, 5, 6, 8, 9, 10],
            ['Russia', 1, 3, 4, 6, 7, 9, 11],
            ['Scotland',1, 4, 6, 7, 8, 10],
            ['Sweden', 1, 2, 3, 5, 6, 7, 8 ]

        ];

        
        msg.channel.send(adversary[Math.floor(Math.random() * adversary.length)][0]);
        return;
    }
    else return;

} 

bot.login();
