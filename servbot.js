var Discord = require('discord.io');
const config=require('./config.json');
const prefix="servbot ";
var bot = new Discord.Client({
	autorun: true,
	token: config.token
});
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
	if(message.startsWith(prefix)){
		
		message2 = message.replace(prefix,'');
		if(message2.startsWith("sad")){
			bot.sendMessage({
				to:channelID,
				message: "http://wiinoob.walyou.netdna-cdn.com/wp-content/uploads/2011/07/servbot-crying-e1311106058106.png"
			});
		}
		else if(message2.startsWith("invite")){
			
			bot.sendMessage({
				to:channelID,
				message: "https://discordapp.com/oauth2/authorize?&client_id=284394204010905600&scope=bot&permissions=3072"
			});
		}
		
		
	}
});
