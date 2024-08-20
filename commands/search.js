

const to = require('await-to-js').default;

var sHelp = "Examples: \
    \n Gather Dahan, \
    \n \"Dahan and\" major elements:plant \
    \n elements: earth fire \
    \n \"add 1 presence\", \
    \n range:sacred range:>=2 cost:<5 target:!any";


module.exports = {
	name: 'search',
	description: 'search the SICK library',
	public: true,
	async execute(msg, args) {

        if(args[0] == 'help'){
            return await msg.channel.send(sHelp);
        }

        var site_name = "https://sick.oberien.de/?query=" + args.toString().replace(/,/g, "%20");
        //var url = await UrlExists(site_name);
        //console.log(url);
        //if (url){
            await msg.channel.send(site_name);
        //}
        // else{
        //     msg.channel.send("Incorrect Syntax, try !search help");
        // }
	}
};

//async is not working
async function UrlExists(url) {
    
    var exsist = false;
    var status = await to(fetch(url).then(function(response){
       console.log(response.headers.get('Content-Type'));
        if (response.ok){
            console.log("True, web page is up");
            exsist = true;
        }
        if (!response.ok){
            console.log("false, 404");
        }
    
        return new Promise(exsist);
    }));
}
