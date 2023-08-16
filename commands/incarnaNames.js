/**
 * collection of all incarna objects
 * structured as JSON object with these properties:
 * name: name of the spirit
 * front: front of the incarna
 * back: empowered side (where relevant)
 * alias: alternate search terms
 */

// Nature Incarnate incarna
var voice = {
    name: 'Wandering Voice Keens Delirium',
    front: 'https://spiritislandwiki.com/images/f/fa/Wandering_Voice_Keens_Delirium_Incarna.png',
    back: 'https://spiritislandwiki.com/images/c/cd/Wandering_Voice_Keens_Delirium_Empowered_Incarna.png',
    alias: []
}

var towering = {
    name: 'Towering Roots of the Jungle',
    front: 'https://spiritislandwiki.com/images/f/f2/Towering_Roots_of_the_Jungle_Incarna.png',
    back: 'https://spiritislandwiki.com/images/3/34/Towering_Roots_of_the_Jungle_Empowered_Incarna.png',
    alias: ['the tree stands tall']
}

var breath = {
    name: 'Breath of Darkness Down Your Spine',
    front: 'https://spiritislandwiki.com/images/b/b1/Breath_of_Darkness_Down_Your_Spine_Incarna.png',
    back: 'https://spiritislandwiki.com/images/2/26/Breath_of_Darkness_Down_Your_Spine_Empowered_Incarna.png',
    alias: ['boddys', 'spine', 'nal']
}

var ember = {
    name: 'Ember Eyed Behemoth',
    front: 'https://spiritislandwiki.com/index.php?title=File:Ember-Eyed_Behemoth_Incarna.png',
    back: 'https://spiritislandwiki.com/images/a/a7/Ember-Eyed_Behemoth_Empowered_Incarna.png',
    alias: ['stomp', 'eeb']
}

var locus = {
    name: 'Serpent Slumbering (Locus)',
    front: 'https://imgur.com/NsTzupl',
    back: 'https://imgur.com/116luO1',
    alias: []
}

var warrior = {
    name: 'Thunderspeaker (Warrior)',
    front: 'https://imgur.com/oVtswAd',
    back: 'https://imgur.com/oVtswAd',
    alias: ['🍆']
}

var lair = {
    name: 'Lure of the Wilderness (Lair)',
    front: 'https://imgur.com/VMuYUo4',
    back: 'https://imgur.com/VMuYUo4',
    alias: []
}

var incarna = [voice, towering, breath, ember, locus, warrior, lair]

exports.incarna = incarna;