const Discord = require('discord.js');

var adversary = [
    ['The Kingdom of Brandenburg-Prussia', '<:FlagPrussia:742198907332853831>', 1, 2, 4, 6, 7, 9, 10  ],
    ['The Kingdom of England', '<:FlagEngland:742199440126771250>', 1, 3, 4, 6, 7, 9, 10, ],
    ['The Kingdom of France ', '<:FlagRussia:742201076362641408>', 2, 3, 5, 7, 8, 9, 10 ],
    ['The Habsburg Monarchy', '<:FlagHabsburg:742194656556744814>', 2, 3, 5, 6, 8, 9, 10],
    ['The Tsardom of Russia', '<:FlagFrance:742199211340070955> ' , 1, 3, 4, 6, 7, 9, 11],
    ['The Kingdom of Scotland', '<:FlagScotland:742201184164773891>',1, 4, 6, 7, 8, 10],
    ['The Kingdom of Sweden','<:FlagSweden:742194408325382174>',  1, 2, 3, 5, 6, 7, 8 ]
    ['Habsburg Mining Expedition', '<:FlagHabsburg:742194656556744814>:pick:', 2, 3, 5, 6, 8, 9, 10]
];

var habsburgmining ={
    title: "habsburg_mining",
    name: 'Habsburg Mining Expedition',
    emote: '<:FlagHabsburg:742194656556744814>:pick:',
    difficulty: [2, 3, 5, 6, 8, 9, 10],
    panel: "https://i.imgur.com/xzXF6vu.png",
    alias: ['<:FlagHabsburg:742194656556744814>:pick:', ':pick:', "hme", 'saltburg', 'mining-expedition', 'mining']    
}

var prussia ={
    title: "prussia",
    name: 'The Kingdom of Brandenburg-Prussia',
    emote: '<:FlagPrussia:742198907332853831>',
    difficulty: [ 1, 2, 4, 6, 7, 9, 10 ],
    panel: "https://imgur.com/KdyfP3C",
    alias: ["<:FlagPrussia:742198907332853831>"]    
}

var england ={
    title: "england",
    name: 'The Kingdom of England',
    emote: '<:FlagEngland:742199440126771250>', 
    difficulty: [ 1, 3, 4, 6, 7, 9, 10],
    panel: "https://imgur.com/c5KzcIq",
    alias: ["<:FlagEngland:742199440126771250>"]   
}

var france ={
    title: "france",
    name: 'The Kingdom of France ',
    emote: '<:FlagFrance:742199211340070955>', 
    difficulty: [ 2, 3, 5, 7, 8, 9, 10],
    panel: "https://imgur.com/S8lL3cA"  ,
    alias: ['<:FlagFrance:742199211340070955>'],   
}

var habsburg ={
    title: "habsburg_livestock",
    name: 'The Habsburg Monarchy',
    emote: '<:FlagHabsburg:742194656556744814>',
    difficulty: [2, 3, 5, 6, 8, 9, 10],
    panel: "https://imgur.com/GtptfDJ",
    alias: ['<:FlagHabsburg:742194656556744814>', '🐮', 'monarchy', "hlc", 'cowburg', "livestock-colony", 'livestock']    
}

var habsburgmining ={
    title: "habsburg_mining",
    name: 'Habsburg Mining Expedition',
    emote: '<:FlagHabsburg:742194656556744814>:pick:',
    difficulty: [2, 3, 5, 6, 8, 9, 10],
    panel: "https://i.imgur.com/xzXF6vu.png",
    alias: ['<:FlagHabsburg:742194656556744814>:pick:', '🧂', '⛏️', "hme", 'saltburg', 'mining-expedition', 'mining']    
}

var russia ={
    title: "russia",
    name: 'The Tsardom of Russia',
    emote: '<:FlagRussia:742201076362641408>', 
    difficulty: [1, 3, 4, 6, 7, 9, 11],
    panel: "https://imgur.com/n16FmcP",
    alias: ['<:FlagRussia:742201076362641408>']  
}

var scotland ={
    title: "scotland",
    name: 'The Kingdom of Scotland',
    emote: '<:FlagScotland:742201184164773891>', 
    difficulty: [1, 4, 6, 7, 8, 10],
    panel: "https://imgur.com/A5HccZx",
    alias: ['<:FlagScotland:742201184164773891>']    
}

var sweden ={
    title: "sweden",
    name: 'The Kingdom of Sweden',
    emote: '<:FlagSweden:742194408325382174>', 
    difficulty: [1, 2, 3, 5, 6, 7, 8],
    panel: "https://imgur.com/D6ZeLOV",
    alias: ['<:FlagSweden:742194408325382174>']    
}

let ad = new Discord.Collection;

ad.set('prussia', france);
ad.set('england', england);
ad.set('france', france);
ad.set('habsburg', habsburg);
ad.set('russia', russia);
ad.set('scotland', scotland);
ad.set('sweden', sweden);
ad.set('habsburgmining', habsburgmining);

exports.ad = ad;
exports.adversaries = [prussia, england, france, habsburg, habsburgmining, russia, scotland, sweden];