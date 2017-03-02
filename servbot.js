/*------------------*/
/* Includes --------*/
/*------------------*/

var Discord = require('discord.io');

/*------------------*/
/* Configs ---------*/
/*------------------*/

const config= require('./etc/config.json');
const pkg = require('./package.json');
const fun= require('./etc/funpost.json');

/*------------------*/
/* Globals ---------*/
/*------------------*/

const prefix= "servbot ";
var best="holo";
var bot = new Discord.Client({
	autorun: true,
	token: config.token
});

/*------------------*/
/* Mapping.js ------*/
/*------------------*/

var mapping = require('./lib/mapping.js')(bot);

// fetish
mapping.map("fetish", "http://i.imgur.com/i2O03vV.jpg");

// version
mapping.map("version", `I'm currently running on version ${pkg.version}`);

// who is best girl?
mapping.map("who is best girl?", fun[best]);

// shutdown
mapping.map("shutdown", function(user,userID,channelID, message, event) {
	if(config.masters.includes(userID)) {
		setTimeout(function() {
			process.exit(0);
		}, 3000)
		return "Shutting down in 3 seconds."
	} else {
		return "I'm sorry, only my masters can shut me down";
	}
});

// sad
mapping.map("sad", "http://wiinoob.walyou.netdna-cdn.com/wp-content/uploads/2011/07/servbot-crying-e1311106058106.png");

// invite
mapping.map("invite", "https://discordapp.com/oauth2/authorize?&client_id=284394204010905600&scope=bot&permissions=3072");

/*-----------------------*/
/* Additional bot things */
/*-----------------------*/

bot.on('ready',function(event){
	console.log('Logged in as %s - %s\n',bot.username, bot.id);
});


bot.on('message', function(user,userID,channelID, message, event){
	if(message==="ping"){
		bot.sendMessage({
			to:channelID,
			message: "I am dead inside Miss Tron"
		});
	}
	if(message.startsWith("servebot")){
		bot.sendMessage({
			to:channelID,
			message: "my name is servbot"
		});
	}
});
