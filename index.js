var Discord = require('discord.io');
const config=require('./config.json');
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
});
