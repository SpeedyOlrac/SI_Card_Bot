// can be used as template
//save as command as commandName.js



module.exports = {
	name: 'board',
	description: 'Displays Boards',
	public: true, //has to be true to show as a command
	async execute(msg, args) {

        if(args[0] ==  "help" || args[0] == "" ){

            await msg.channel.send("Type the board name. -board [a,b,c,d,e,f,NE, NW, East, West, SE,SW].");
        }
        else{

            await msg.channel.send(searchBoards(args[0]));
        }

	},

};

function searchBoards(b)
{

    switch (b){
        case "a":
        case "A":
            return "https://spiritislandwiki.com/images/e/e2/Piece_core_board_a.png";
    break;
    
        case "b":
        case "B":
            return "https://spiritislandwiki.com/images/7/7a/Piece_core_board_b.png";
    break;
    
        case "c":
        case "C":
            return "https://spiritislandwiki.com/images/8/82/Piece_core_board_c.png";
    break;
    
        case "d":
        case "D":
            return "https://spiritislandwiki.com/images/3/3a/Piece_core_board_d.png";
    break;
    
        case "e":
        case "E":
            return "https://spiritislandwiki.com/images/e/e5/Piece_je_board_e.png";
    break;
    
        case "f":
        case "F":
            return "https://spiritislandwiki.com/images/0/0b/Piece_je_board_f.png";
    break;
    
    //Themtic boards
        case "NE":
        case "ne":
            return "https://spiritislandwiki.com/images/f/f9/Piece_core_board_north_east.png";
    break;
    
    case "NW":
        case "nw":
            return "https://spiritislandwiki.com/index.php?title=File:Piece_core_board_east.png";
    break;
    
        case "East":
        case "east":
            return "https://spiritislandwiki.com/images/5/58/Piece_core_board_east.png";
    break;
    
        case "west":
        case "West":
            return "https://spiritislandwiki.com/images/2/26/Piece_core_board_west.png";
    break;
    
        case "SE":
        case "se":
            return "https://spiritislandwiki.com/images/c/cc/Piece_je_board_south_east.png";
    break;
    
        case "SW":
        case "sw":
            return "https://spiritislandwiki.com/images/6/64/Piece_je_board_south_west.png";
    break;
    default:
        await msg.channel.send("Type the board name. -board [a,b,c,d,e,f,NE, NW, East, West, SE,SW].");
    }
}
