/**
 * definition of all healing cards for Wounded Waters Bleed
 * name: healing card name
 * title: single word as query on bot
 * front: front of card
 * back: back of card
 */
// original WWB healing cards
const roiling = {
    name: "Roiling Waters",
    title: 'roiling',
    front: 'https://imgur.com/sGO0Rur',
    back: 'https://imgur.com/PhtNruf'
}

const serene = {
    name: 'Serene Waters',
    title: 'serene',
    front: 'https://imgur.com/DE0gvVc',
    back: 'https://imgur.com/xetX8sL',

}

const renew = {
    name: "Waters Renew",
    title: 'renew',
    front: 'https://imgur.com/8yL1NjC',
    back: 'https://imgur.com/23SITwd'
}

const ruin = {
    name: "Waters Taste of Ruin",
    title: 'ruin',
    front: 'https://imgur.com/NXB6v6u',
    back: 'https://imgur.com/BNMKaNN'
}

const healing = [roiling, serene, renew, ruin];
exports.healing = healing;