const Discord = require('discord.js');

var adversary = [
    ['The Kingdom of Brandenburg-Prussia', '<:FlagBrandenburgPrussia:852366012846309406>', 1, 2, 4, 6, 7, 9, 10  ],
    ['The Kingdom of England', '<:FlagEngland:852366012175482900>', 1, 3, 4, 6, 7, 9, 10, ],
    ['The Kingdom of France ', '<:FlagRussia:852366012639739945>', 2, 3, 5, 7, 8, 9, 10 ],
    ['The Habsburg Monarchy', '<:FlagHabsburg:852366013638639636>', 2, 3, 5, 6, 8, 9, 10],
    ['The Tsardom of Russia', '<:FlagFrance:852366013243981885> ' , 1, 3, 4, 6, 7, 9, 11],
    ['The Kingdom of Scotland', '<:FlagScotland:852366013621207040>',1, 4, 6, 7, 8, 10],
    ['The Kingdom of Sweden','<:FlagSweden:852366014434770963>',  1, 2, 3, 5, 6, 7, 8 ]
    ['Habsburg Mining Expedition', '<:FlagHabsburgMining:1181395803479212103>', 2, 3, 5, 6, 8, 9, 10]
];

var habsburgmining ={
    title: "habsburg_mining",
    name: 'Habsburg Mining Expedition',
    emote: '<:FlagHabsburgMining:1181395803479212103>',
    difficulty: [2, 3, 5, 6, 8, 9, 10],
    panel: "https://i.imgur.com/xzXF6vu.png",
    alias: ['<:FlagHabsburgMining:1181395803479212103>', ':pick:', "hme", 'saltburg', 'mining-expedition', 'mining']    
}

var prussia ={
    title: "prussia",
    name: 'The Kingdom of Brandenburg-Prussia',
    emote: '<:FlagBrandenburgPrussia:852366012846309406>',
    difficulty: [1, 2, 4, 6, 7, 9, 10 ],
    panel: "https://imgur.com/KdyfP3C",
    alias: ["<:FlagBrandenburgPrussia:852366012846309406>", "bp"]    
}

var england ={
    title: "england",
    name: 'The Kingdom of England',
    emote: '<:FlagEngland:852366012175482900>', 
    difficulty: [1, 3, 4, 6, 7, 9, 10],
    panel: "https://imgur.com/c5KzcIq",
    alias: ["<:FlagEngland:852366012175482900>", "🏴󠁧󠁢󠁥󠁮󠁧󠁿"]   
}

var france ={
    title: "france",
    name: 'The Kingdom of France',
    emote: '<:FlagFrance:852366013243981885>', 
    difficulty: [2, 3, 5, 7, 8, 9, 10],
    panel: "https://imgur.com/S8lL3cA"  ,
    alias: ['<:FlagFrance:852366013243981885>', '🇫🇷'],   
}

var habsburg ={
    title: "habsburg_livestock",
    name: 'The Habsburg Monarchy',
    emote: '<:FlagHabsburg:852366013638639636>',
    difficulty: [2, 3, 5, 6, 8, 9, 10],
    panel: "https://imgur.com/GtptfDJ",
    alias: ['<:FlagHabsburg:852366013638639636>', '🐮', 'monarchy', "hlc", 'cowburg', "livestock-colony", 'livestock', 'habsburger']    
}

var russia ={
    title: "russia",
    name: 'The Tsardom of Russia',
    emote: '<:FlagRussia:852366012639739945>', 
    difficulty: [1, 3, 4, 6, 7, 9, 11],
    panel: "https://imgur.com/n16FmcP",
    alias: ['<:FlagRussia:852366012639739945>','🇷🇺']  
}

var scotland ={
    title: "scotland",
    name: 'The Kingdom of Scotland',
    emote: '<:FlagScotland:852366013621207040>', 
    difficulty: [1, 3, 4, 6, 7, 8, 10],
    panel: "https://imgur.com/A5HccZx",
    alias: ['<:FlagScotland:852366013621207040>', '🏴󠁧󠁢󠁳󠁣󠁴󠁿']    
}

var sweden ={
    title: "sweden",
    name: 'The Kingdom of Sweden',
    emote: '<:FlagSweden:852366014434770963>', 
    difficulty: [1, 2, 3, 5, 6, 7, 8],
    panel: "https://imgur.com/D6ZeLOV",
    alias: ['<:FlagSweden:852366014434770963>', '🇸🇪']    
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