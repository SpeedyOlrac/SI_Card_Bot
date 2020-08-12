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

 var emote = [
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

var adversary = [
    ['Brandenburg-Prussia', '<:Prussia:741092407935893555>', 1, 2, 4, 6, 7, 9, 10  ],
    ['England', ':england:', 1, 3, 4, 6, 7, 9, 10],
    ['France (Plantation Colony)', '<:france:741093435028668558>', 2, 3, 5, 7, 8, 9, 10 ],
    ['Hapsburg Dynasty', '<:hapsburg:741091437000654851> ', 2, 3, 5, 6, 8, 9, 10],
    ['Russia', ':flag_ru:' , 1, 3, 4, 6, 7, 9, 11],
    ['Scotland', ':scotland:',1, 4, 6, 7, 8, 10],
    ['Sweden',':flag_se:',  1, 2, 3, 5, 6, 7, 8 ]
];

var help = "List of commands: \
\n !search [search words]\
\n !card [card name], !power [card name] \
\n !faqs (search words), \
\n !events [event name] \
\n !fear [fear name] \
\n !random [spirit/adversary] (diffculty)   \
\n !spirit (front/back) [keywords] ";

var sHelp = "Examples: \
\n Gather Dahan, \"Dahan and\" major elements:plant \
\n elements:earth, description:\"add 1 presence\", \
\n range:sacred range:>=2 cost:<5 target:!any";


var panel = [
    [ "https://i.imgur.com/nlpGjjH", "https://i.imgur.com/iK9NTsz"],
    [ "https://i.imgur.com/UxZyTv2", "https://i.imgur.com/VUOjO0v"], 
    [ "https://i.imgur.com/AJjfgOS", "https://i.imgur.com/CShexIA"],
    [ "https://i.imgur.com/owZAHJY", "https://i.imgur.com/JtdpxCr"],
    [ "https://i.imgur.com/g0S3eN8", "https://i.imgur.com/7z7V6Ol"],
    [ "https://i.imgur.com/XvJYfqH", "https://i.imgur.com/i6YLeWv"],
    [ "https://i.imgur.com/A4FRUV5", "https://i.imgur.com/Y8lVu5J"],
    [ "https://i.imgur.com/PBwq5KE", "https://i.imgur.com/ZKAblG3"],
    [ "https://i.imgur.com/yXE6oHw", "https://i.imgur.com/WLcU0w9"],
    [ "https://i.imgur.com/OmSNTeL", "https://i.imgur.com/wGPod8z"],
    [ "https://i.imgur.com/RZh8Y8g", "https://i.imgur.com/XIG39qe"],
    [ "https://i.imgur.com/rrLWF5o", "https://i.imgur.com/rrLWF5o"],
    [ "https://i.imgur.com/pmdjfxu", "https://i.imgur.com/uv0mMRV"],
    [ "https://i.imgur.com/uv0mMRV", "https://i.imgur.com/cE7YZ3L"],
    [ "https://i.imgur.com/cE7YZ3L", "https://i.imgur.com/oyk2ZwH"],
    [ "https://i.imgur.com/uxw6S5D", "https://i.imgur.com/IoL5BHz"],
    [ "https://i.imgur.com/H1Xrzxw", "https://i.imgur.com/BB48p9Q"],
    [ "https://i.imgur.com/MQDsVg9", "https://i.imgur.com/sE5Iasm"],
    [ "https://i.imgur.com/2UujxIG", "https://i.imgur.com/pCuo4XJ"],
    [ "https://i.imgur.com/9hiaoWd", "https://i.imgur.com/RqlC8ZP"],
    [ "https://i.imgur.com/5xnsvD8", "https://i.imgur.com/PztVF5L"],
    [ "https://i.imgur.com/PztVF5L", "https://i.imgur.com/4hnimN9"],
    [ "https://i.imgur.com/wgs13CF", "https://i.imgur.com/5iTl68l"],
    [ "https://i.imgur.com/KZwtr5W", "https://i.imgur.com/XOC05vn"]   //volcano 
];


exports.spirits = spirits;
exports.emote = emote;
exports.adversary = adversary;
exports.help = help;
exports.panel = panel;





    
 


