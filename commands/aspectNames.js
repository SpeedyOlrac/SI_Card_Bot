const { Message } = require('discord.js');
const { getCardName } = require('./sendCardLink.js');

var lightning =  [ 
    {name: "Pandemonium", emote: "<:TStrife:>778714254982643762", panel:["https://i.imgur.com/1774mnW.jpg"]},
    {name: "Wind", emote: "<:ICFast:>778714634710286397", panel:["https://i.imgur.com/VwchE5U.jpg"]},
    {name: "Immense", emote: "", panel:["https://i.imgur.com/YhXRPZK.jpg"]},
    {name: "Sparking", emote: "", panel:["https://i.imgur.com/4jyHApi.png", "https://i.imgur.com/SGlXMGB.png"]}
 ];

 var rivers =   [
    {name: "Sunshine", emote: "", panel:["https://i.imgur.com/AGZB0Bn.jpg"]},
    {name: "Travel", emote: "", panel:["https://i.imgur.com/lgC4gQ6.jpg"]},
    {name: "Haven", emote: "", panel:["https://i.imgur.com/UlkeNZC.png"]}
];

var shadows = [
    {name: "Madness", spirit: 'Shadows Flicker Like Flame', emote: "<:FlowersMurmurUltimatums:>778709531311996948", panel:["https://i.imgur.com/sjjNNLB.jpg"]},
    {name: "Reach", spirit: 'Shadows Flicker Like Flame', emote: "<:IArrowRange:>778709531311996948", panel:["https://i.imgur.com/1oIYl5s.jpg"]},
    {name: "Foreboding", spirit: 'Shadows Flicker Like Flame', emote: "", panel:["https://i.imgur.com/iUUnawK.jpg"]},
    {name: "Amorphous", spirit: 'Shadows Flicker Like Flame', emote: "", panel:["https://i.imgur.com/VIZa5cI.jpg"]},
    {name: "Dark Fire", spirit: 'Shadows Flicker Like Flame', emote: "", panel:["https://imgur.com/0xBcref.png"]}
];

var earth = [
    {name: "Might", emote: "", panel:["https://i.imgur.com/dBOc7YI.jpg"]},
    {name: "Resilience", emote: "", panel:["https://i.imgur.com/jSgVfcH.jpg"]},
    {name: "Nourishing", emote: "", panel:["https://i.imgur.com/zaflknz.png"]}
  ];

var ocean = [
    {name: "Deeps", emote: "", panel:["https://i.imgur.com/V9qIQ1y.png", "https://imgur.com/tZ0U4rx"]}
];

var fangs = [
    {name:"Encircle", emote: "", panel:["https://i.imgur.com/zKbLDmZ.png"]},
    {name:"Unconstrained", emote:"", panel:["https://i.imgur.com/xcWtW6D.png"]}
];

var bringer = [
    {name:"Enticing", emote: "", panel:["https://i.imgur.com/EdgkVJ6.png"]},
    {name:"Violence", emote: "", panel:["https://i.imgur.com/mm85SO0.png"]}
];

var memory = [
    {name:"Intensify", emote:"", panel:["https://i.imgur.com/t4F2GnB.png"]},
    {name:"Mentor", emote:"", panel:["https://i.imgur.com/KDKA8d7.png"]}
];

var lure = [
    {name:"Lair", emote:"", panel:["https://i.imgur.com/dzPtyxm.png"]}
];

var serpent = [
    {name:"Locus", emote:"", panel:["https://i.imgur.com/YugqMW5.png", "https://i.imgur.com/RwIk5e4.png"]}
];

var green = [
    {name:"Regrowth", emote:"", panel:["https://i.imgur.com/jQWp7vu.png"]},
    {name:"Tangles", emote:"", panel:["https://i.imgur.com/mnlOFdh.png", "https://i.imgur.com/ygTTqbq.png"]}
];

var keeper = [
    {name:"Spreading Hostility", emote:"", panel:["https://i.imgur.com/cBY9Hmb.png"]}
];

var mists = [
    {name: "Stranded", emote:"", panel:["https://i.imgur.com/bgKkiKH.png"]}
];

var thunderspeaker = [
    {name:"Tactician", emote:"", panel:["https://i.imgur.com/RTDZICL.png"]},
    {name:"Warrior", emote:"", panel:["https://i.imgur.com/oG4ybBt.png"]}
];

var wildfire = [
    {name:"Transforming", emote:"🏳️‍⚧️", panel:["https://i.imgur.com/rbmRVHp.png"]}
];

// TODO: rework spirit short names to be consistent across commands/implement
// spirit levenstein search across commands
var spirits = ['Lightning', 'River', 'Shadows', 'Earth', 'Ocean', 'Fangs', 'Bringer', 'Memory', 'Lure', 'Serpent', 'Green', 'Keeper', 'Mists', 'Thunderspeaker', 'Wildfire'];
var aspects = [lightning, rivers, shadows, earth, ocean, fangs, bringer, memory, lure, serpent, green, keeper, mists, thunderspeaker, wildfire];
var aspectsNames = [];

// TODO: rework how this collection is accessed, would be nice to have a 
// collection that you can filter by aspect name, spirit name or emoji
// the whole data structure could do with rethinking and/or putting into a 
// database realistically
for (var a = 0; a < aspects.length; a++){
    for (var b = 0; b < aspects[a].length; b++){
        var temp = aspects[a][b].name 
        aspectsNames.push(temp.toLowerCase());
    }
}

module.exports = {
    aspectsNames: aspectsNames,
    spirits: spirits,
    aspects: aspects
};



  
