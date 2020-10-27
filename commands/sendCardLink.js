const levenshtein = require('js-levenshtein');

function getCardName(input, availableNames, wieghtOfSizediff = 0.8)
{
  var result = null;
  var closestDistance = 999;
  var target  = cleanInput(input);

  for(var name of availableNames)
  {
    var sizeDiff = name.length > target.length ? name.length - target.length : 0;
    var distance = levenshtein(target, name) - (sizeDiff * wieghtOfSizediff);
    if(distance < closestDistance){
      closestDistance = distance;
      result = name;
    }
  }
  return result;
}


function sendCardLink(msg, input, availableNames, basePath)
{
  var cardName = getCardName(input, availableNames);
  if(cardName){
    msg.channel.send(basePath + cardName  + '.webp');
  }else{
    msg.channel.send("Incorrect name, try using !search");
  }
}

function cleanInput(args){
    var card_name = args.toString().toLowerCase();
    return card_name.replace("-", "").replace("\'", "").replace(",", "_");
}

module.exports = {sendCardLink, public: false};
module.exports = {getCardName, public: false};