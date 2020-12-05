const levenshtein = require('js-levenshtein');

function getCardName(input, availableNames, weightOfSizediff = 0.8)
{
  var target  = cleanInput(input);

  var perfectMatches = getPerfectMatch(target, availableNames);

  if(perfectMatches.length === 1)
  {
    return perfectMatches[0];
  }
  else if(perfectMatches > 1)
  {
    return getCardNameHelper(target, perfectMatches, weightOfSizediff);
  }
  else
  {
    return getCardNameHelper(target, availableNames, weightOfSizediff);
  }
}

function getCardNameHelper(input, availableNames, weightOfSizediff)
{
  var result = null;
  var closestDistance = 999;

  for(var name of availableNames)
  {
    var sizeDiff = name.length > input.length ? name.length - input.length : 0;
    var distance = levenshtein(input, name) - (sizeDiff * weightOfSizediff);
    if(distance < closestDistance){
      closestDistance = distance;
      result = name;
    }
  }
  return result;
}

function getPerfectMatch(input, availableNames)
{
  var result = [];
  for(var name of availableNames)
  {
    if(name.includes(input))
    {
      result.push(name);
    }
  }
  return result;
}

async function sendCardLink(msg, input, availableNames, basePath)
{
  var cardName = getCardName(input, availableNames);
  console.log(cardName);
  if(cardName){
    return await msg.channel.send(basePath + cardName  + '.webp');
  }else{
    return await msg.channel.send("Incorrect name, try using !search");
  }
}

function cleanInput(args){
    var card_name = args.toString().toLowerCase();
    return card_name.replace("-", "").replace("\'", "").replace(",", "_").replace(' ', '_');
}


module.exports = {
  getCardName:  getCardName,
  sendCardLink: sendCardLink
}