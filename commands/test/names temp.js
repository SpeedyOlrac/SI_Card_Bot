var spirits = [
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
    'Many Minds Move as One',  //10
    'Ocean\'s Hungry Grasp',
    'River Surges in Sunlight',
    'Serpent Slumbering Beneath the Island',
    'Shadows Flicker Like Flame',
    'Sharp Fangs Behind the Leaves',
    'Shifting Memory of Ages',
    'Shroud of Silent Mist',
    'Starlight Seeks Its Form',
    'Stone\'s Unyielding Defiance',   
    'Thunderspeaker',  //20
    'Vengeance as a Burning Plague',
    'Vital Strength of the Earth',
    'Volcano Looming High'
 ];

/*

let contacts = new Map()
contacts.set('Jessie', {phone: "213-555-1234", address: "123 N 1st Ave"})
contacts.has('Jessie') // true
contacts.get('Hilary') // undefined
contacts.set('Hilary', {phone: "617-555-4321", address: "321 S 2nd St"})
contacts.get('Jessie') // {phone: "213-555-1234", address: "123 N 1st Ave"}
contacts.delete('Raymond') // false
contacts.delete('Jessie') // true
console.log(contacts.size) // 1

*/

let spirit = new Discord.Collection;

spirit.set('Green', {
    name:  'A Spread of Rampant Green',
    emote: '<:SpiritRampant:747558393295929475>' ,
    panel: [ "https://imgur.com/nlpGjjH", "https://imgur.com/iK9NTsz"],
    aspect: null
})

spirit.set('Green', {
    name: 'A Spread of Rampant Green',
    emote: ,
    panel: ,
    aspect: null
})
spirit.set('Green', {
    name: 'A Spread of Rampant Green',
    emote: ,
    panel: ,
    aspect: null
})
spirit.set('Green', {
    name: 'A Spread of Rampant Green',
    emote: ,
    panel: ,
    aspect: null
})
spirit.set('Green', {
    name: 'A Spread of Rampant Green',
    emote: ,
    panel: ,
    aspect: null
})
spirit.set('Green', {
    name: 'A Spread of Rampant Green',
    emote: ,
    panel: ,
    aspect: null
})
spirit.set('Green', {
    name: 'A Spread of Rampant Green',
    emote: ,
    panel: ,
    aspect: null
})
spirit.set('Green', {
    name: 'A Spread of Rampant Green',
    emote: ,
    panel: ,
    aspect: null
})
spirit.set('Green', {
    name: 'A Spread of Rampant Green',
    emote: ,
    panel: ,
    aspect: null
})
spirit.set('Green', {
    name: 'A Spread of Rampant Green',
    emote: ,
    panel: ,
    aspect: null
})
spirit.set('Green', {
    name: 'A Spread of Rampant Green',
    emote: ,
    panel: ,
    aspect: null
})
spirit.set('Green', {
    name: 'A Spread of Rampant Green',
    emote: ,
    panel: ,
    aspect: null
})
spirit.set('Green', {
    name: 'A Spread of Rampant Green',
    emote: ,
    panel: ,
    aspect: null
})
spirit.set('Green', {
    name: 'A Spread of Rampant Green',
    emote: ,
    panel: ,
    aspect: null
})
spirit.set('Green', {
    name: 'A Spread of Rampant Green',
    emote: ,
    panel: ,
    aspect: null
})
spirit.set('Green', {
    name: 'A Spread of Rampant Green',
    emote: ,
    panel: ,
    aspect: null
})
spirit.set('Green', {
    name: 'A Spread of Rampant Green',
    emote: ,
    panel: ,
    aspect: null
})
spirit.set('Green', {
    name: 'A Spread of Rampant Green',
    emote: ,
    panel: ,
    aspect: null
})
spirit.set('Green', {
    name: 'A Spread of Rampant Green',
    emote: ,
    panel: ,
    aspect: null
})
spirit.set('Green', {
    name: 'A Spread of Rampant Green',
    emote: ,
    panel: ,
    aspect: null
})
spirit.set('Green', {
    name: 'A Spread of Rampant Green',
    emote: ,
    panel: ,
    aspect: null
})
spirit.set('Green', {
    name: 'A Spread of Rampant Green',
    emote: ,
    panel: ,
    aspect: null
})

 var emote = [
    '<:SpiritRampant:747558393295929475>',
    '<:SpiritBodan:747570910751621121>',
    '<:SpiritDownpour:747558401638268999>',
    '<:SpiritFinder:747558403810787359>',
    '<:SpiritFractured:747558406318981191>',
    '<:SpiritTrickster:747570905709936723>',
    '<:SpiritWildfire:747558405282988103>',
    '<:SpiritKeeper:747558404943380491>',
    '<:SpiritLightning:747558396546252944>',
    '<:SpiritLure:747558396403646605>',
    '<:SpiritManyMinds:747558400400818319>',
    '<:SpiritOceans:747558407292190820>',
    '<:SpiritRivers:747558402850422804>',
    '<:SpiritSnek:747558396705767424>',  
    '<:SpiritShadows:747571324418916393>',
    '<:SpiritFangs:747570910524997743>',
    '<:SpiritShifting:747558402959605857>',
    '<:SpiritShroud:747558393123962957>',
    '<:SpiritStarlight:747558401424490588>',
    '<:SpiritStone:747558407200047246>',
    '<:SpiritThunderspeaker:747558392603738244>',
    '<:SpiritVengeance:747558391572070520>',
    '<:SpiritEarth:747558396009512960>',
    '<:SpiritVolcano:747558401139146834>'   
 ];

var panel = [
    
    [ "https://imgur.com/UxZyTv2", "https://imgur.com/VUOjO0v"], 
    [ "https://imgur.com/vZU2mVT", "https://imgur.com/CShexIA"],  //Downpour
    [ "https://imgur.com/T9HLW7e", "https://imgur.com/JtdpxCr"],
    [ "https://imgur.com/MDqxo4i", "https://imgur.com/7z7V6Ol"],  //days
    [ "https://imgur.com/D2geoaL", "https://imgur.com/i6YLeWv"],
    [ "https://imgur.com/A4FRUV5", "https://imgur.com/Y8lVu5J"],  //Wildfire
    [ "https://imgur.com/PBwq5KE", "https://imgur.com/ZKAblG3"],
    [ "https://imgur.com/yXE6oHw", "https://imgur.com/WLcU0w9"],  //Lighting
    [ "https://imgur.com/Zx3UcPD", "https://imgur.com/wGPod8z"],
    [ "https://imgur.com/bA3Rmp8", "https://imgur.com/XIG39qe"],  //many minds
    [ "https://imgur.com/rrLWF5o", "https://imgur.com/UVEIJfA"],
    [ "https://imgur.com/pmdjfxu", "https://imgur.com/uv0mMRV"],  //river
    [ "https://imgur.com/PgT7Kyj", "https://imgur.com/cE7YZ3L"],
    [ "https://imgur.com/FmVImnv", "https://imgur.com/oyk2ZwH"],  //shadow
    [ "https://imgur.com/uxw6S5D", "https://imgur.com/IoL5BHz"],
    [ "https://imgur.com/QbkXAHr", "https://imgur.com/BB48p9Q"],  //memory
    [ "https://imgur.com/AgBKUYl", "https://imgur.com/sE5Iasm"],
    [ "https://imgur.com/fkB6Y05", "https://imgur.com/pCuo4XJ"],
    [ "https://imgur.com/FhEIqB6", "https://imgur.com/RqlC8ZP"],  //Stone
    [ "https://imgur.com/5xnsvD8", "https://imgur.com/PztVF5L"],
    [ "https://imgur.com/EgzpSLC", "https://imgur.com/4hnimN9"],  //Vengance
    [ "https://imgur.com/wgs13CF", "https://imgur.com/5iTl68l"],
    [ "https://imgur.com/sSs3uqa", "https://imgur.com/XOC05vn"]   //volcano 
];

var adversary = [
    ['Brandenburg-Prussia', '<:FlagPrussia:742198907332853831>', 1, 2, 4, 6, 7, 9, 10  ],
    ['England', '<:FlagEngland:742199440126771250>', 1, 3, 4, 6, 7, 9, 10],
    ['France (Plantation Colony)', '<:FlagRussia:742201076362641408>', 2, 3, 5, 7, 8, 9, 10 ],
    ['Hapsburg Dynasty', '<:FlagHabsburg:742194656556744814>', 2, 3, 5, 6, 8, 9, 10],
    ['Russia', '<:FlagFrance:742199211340070955> ' , 1, 3, 4, 6, 7, 9, 11],
    ['Scotland', '<:FlagScotland:742201184164773891>',1, 4, 6, 7, 8, 10],
    ['Sweden','<:FlagSweden:742194408325382174>',  1, 2, 3, 5, 6, 7, 8 ]

];


exports.aspect ={
    earth: ["Might ", "Power  ", "Resilence "], //22
    shadow: ["Shifting  ", "Reach ",  "Foreboding ", "Amorphous "],  //14
    lighting: ["Pandemonium ", "Wind ", "Immense "],  // 8
    river: ["Sunshine ", "Travel "]  // 12
}


var role ="React to this message with the :FlagBlank: emoji to be assigned \
     the @LFG Role and be notified of games in #looking-for-a-game";

     //  (([^"]*), )

exports.spirits = spirits;
exports.emote = emote;
exports.adversary = adversary;
exports.panel = panel;
exports.role = role;

//exports.unqiues = unqiues;





    
 


