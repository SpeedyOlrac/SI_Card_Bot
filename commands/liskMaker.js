const Names = require ('./Names.js');
const fs = require("fs");


var code = "var $SPIRIT = { \
    \n name: '$NAME', \n emote: '$EMOTE', \n panel: '$PANEL', \
     \n complexity: '',\n title: '$TITLE' ,\n aspect: ''}; \n\n";

var spirtnames = [];

for(var n = 0; n < Names.spirits.length; n++){
    console.log(Names.spirits[n])
    var result = code.replace('$NAME', Names.spirits[n]);
    result = result.replace('$SPIRIT', Names.title[n]);
    result = result.replace('$EMOTE', Names.emote[n]);
    result = result.replace('$PANEL', Names.panel[n]);
    result = result.replace('$TITLE', Names.title[n]);
    
     spirtnames.push(Names.title[n]);

    fs.appendFile('spiritName.js', result, function (err) {
        if (err) throw err;
        console.log('Saved!');
      });

};

fs.appendFile('spiritName.js', spirtnames, function (err) {
   if (err) throw err;
  console.log('Saved!');
  });
