const { Message } = require('discord.js');
const { getCardName } = require('./sendCardLink.js');

var lighting =  [ 
    {name: "Pandemonium", emote: "<:TStrife:>778714254982643762", panel: "https://i.imgur.com/1774mnW.jpg"},
    {name: "Wind", emote: "<:ICFast:>778714634710286397", panel: "https://i.imgur.com/VwchE5U.jpg"},
    {name: "Imense", emote: "", panel: ""}
 ];

 var rivers =   [
    {name: "SunShine", emote: "", panel: ""},
    {name: "Travel", emote: "", panel: ""},
];

var shadows = [
    {name: "Madness", spirit: 'Shadows Flicker Like Flame', emote: "<:FlowersMurmurUltimatums:>778709531311996948", panel: "https://i.imgur.com/sjjNNLB.jpg"},
    {name: "Reach", spirit: 'Shadows Flicker Like Flame', emote: "<:IArrowRange:>778709531311996948", panel: "https://i.imgur.com/1oIYl5s.jpg"},
    {name: "Forboding", spirit: 'Shadows Flicker Like Flame', emote: "", panel: ""},
    {name: "Amorphous", spirit: 'Shadows Flicker Like Flame', emote: "", panel: ""}
];

var earth = [
    {name: "Might", emote: "", panel: ""},
    {name: "Resilence", emote: "", panel: ""}
  ];

//'Lightning\'s Swift Strike', 'River Surges in Sunlight', 'Shadows Flicker Like Flame', 'Vital Strength of the Earth'
var spirits = ['Lightning', 'River', 'Shadows', 'Earth'];
var aspects = [lighting, rivers, shadows, earth];
var aspectsNames = []

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



  