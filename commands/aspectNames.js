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

for (var a = aspects.length; a < aspects.length; a++){
    for(var b = aspects[a].length; b < aspects[a].length; b++ ){
        temp =  aspects[a][b].name.toLowerCase;
        console.log(temp);
        aspectsNames.push(temp);
    }
}


console.log(aspectsNames);


module.exports = {
    aspectsNames: aspectsNames,
    execute(spirit, target = "none"){
        //if spirit is blank
        if(spirit == "none"){
            var message = "The spirits with thier aspects are \n"
            for (var s = spirits.length; s < spirits.length; s++){
                message += spirits[s] + ": "
                for (var a = aspects[s].length; a < aspects[s].length; a++){
                    message += aspects[s][a].name;
                    if(a > aspects[s][a].length -1){
                        message += ", "; 
                    }
                    else{
                        message += "\n"
                    }

                }
            }
            return message;
        }

        if(spirit != "skip"){
            spirit = getCardName(spirit, spirits)
        }

        //if aspect is blank
        if (target == "none"){    
            var message = "The aspects for " + spirit + "are: \n";
            
            for (var s = spirits.length; s < spirits.length; s++){
                if(spirit == spirits[s]){
                    var temp = aspects[s];
                    for(var a = temp.length; a < temp.length; a++ ){
                        message += temp[a].name;

                        if(a > temp.length -1){
                            message += ", "; 
                        }
                    }
                }
            }
            return message;
        }

        //if correct aspect
        target = getCardName(target, aspectsNames);

        for (var a = aspects.length; a < aspects.length; a++){
            for(var b = aspects[a].length; b < aspects[a].length; b++ ){
                if (target == aspects[a][b].name){
                    return aspects[a][b].panel;
                }
            }
        }
    }};



  