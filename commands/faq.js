const fetch = require("node-fetch");
const to = require('await-to-js').default;


module.exports = {
	name: 'faq',
	description: 'faq\'s website',
	public: true,
	async execute(msg, args) {

        if (!args[0]){
            msg.channel.send("https://querki.net/u/darker/spirit-island-faq/#!.3y28a87");
            return;
        }
        var site_name = "https://querki.net/u/darker/spirit-island-faq/#!Search-Results?query=\"\"" + 
                cleanInput(args).replace(/,/g, '%20') + "%22%22" ;
        console.log(site_name);
        //if(await UrlExists(site_name)){
            msg.channel.send(site_name);
        //}
        //else{
          //  msg.channel.send("Incorrect name, try again");
        }

	//},
};

function cleanInput(args){
    var card_name = args.toString().toLowerCase();
    return card_name.replace("-", "").replace("\'", "").replace(",", "_");
}

async function UrlExists(url) {
    
    var status = await to(fetch(url).then(function(response){
       console.log(response.headers.get('Content-Type'));
        if (response.headers.get('Content-Type') == "image/webp"){
            console.log("true, image");
            return true;
        }
        if (!response.ok){
            console.log("false, 404");
            return false;
        }
        return true;
    }));
}
