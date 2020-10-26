const Discord = require('discord.js');

var adversary = [
    ['The Kingdom of Brandenburg-Prussia', '<:FlagPrussia:742198907332853831>', 1, 2, 4, 6, 7, 9, 10  ],
    ['The Kingdom of England', '<:FlagEngland:742199440126771250>', 1, 3, 4, 6, 7, 9, 10, ],
    ['The Kingdom of France ', '<:FlagRussia:742201076362641408>', 2, 3, 5, 7, 8, 9, 10 ],
    ['The Habsburg Monarchy', '<:FlagHabsburg:742194656556744814>', 2, 3, 5, 6, 8, 9, 10],
    ['The Tsardom of Russia', '<:FlagFrance:742199211340070955> ' , 1, 3, 4, 6, 7, 9, 11],
    ['The Kingdom of Scotland', '<:FlagScotland:742201184164773891>',1, 4, 6, 7, 8, 10],
    ['The kingdom of Sweden','<:FlagSweden:742194408325382174>',  1, 2, 3, 5, 6, 7, 8 ]
];


var prussia ={
    title: "prussia",
    name: 'The Kingdom of Brandenburg-Prussia',
    emote: '<:FlagPrussia:742198907332853831>',
    diffculty: [ 1, 2, 4, 6, 7, 9, 10 ],
    panel: "https://imgur.com/KdyfP3C"    
}

var england ={
    title: "england",
    name: 'The Kingdom of England',
    emote: '<:FlagEngland:742199440126771250>', 
    diffculty: [ 1, 3, 4, 6, 7, 9, 10],
    panel: "https://imgur.com/c5KzcIq"    
}

var france ={
    title: "france",
    name: 'The Kingdom of France ',
    emote: '<:FlagFrance:742199211340070955>', 
    diffculty: [ 2, 3, 5, 7, 8, 9, 10],
    panel: "https://imgur.com/S8lL3cA"    
}

var habsburg ={
    title: "habsburg",
    name: 'The Habsburg Monarchy',
    emote: '<:FlagHabsburg:770131442268110888>',
    diffculty: [2, 3, 5, 6, 8, 9, 10],
    panel: "https://imgur.com/GtptfDJ"    
}

var russia ={
    title: "russia",
    name: 'The Tsardom of Russia',
    emote: '<:FlagRussia:742201076362641408>', 
    diffculty: [1, 3, 4, 6, 7, 9, 11],
    panel: "https://imgur.com/n16FmcP"    
}

var scotland ={
    title: "scotland",
    name: 'The Kingdom of Scotland',
    emote: '<:FlagScotland:742201184164773891>', 
    diffculty: [1, 4, 6, 7, 8, 10],
    panel: "https://imgur.com/A5HccZx"    
}

var sweden ={
    title: "sweden",
    name: 'The kingdom of Sweden',
    emote: '<:FlagSweden:742194408325382174>', 
    diffculty: [1, 2, 3, 5, 6, 7, 8],
    panel: "https://imgur.com/D6ZeLOV"    
}

let ad = new Discord.Collection;

ad.set('prussia', france);
ad.set('england', england);
ad.set('france', france);
ad.set('habsburg', habsburg);
ad.set('russia', russia);
ad.set('scotland', scotland);
ad.set('sweden', sweden);

exports.ad = ad;


 exports.adversary = [prussia, england, france, habsburg, russia, scotland, sweden];