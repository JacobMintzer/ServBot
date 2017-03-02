/*
 * mapping.js
 *
 * maps message prefix command to function
 *
 * default to string to string mapping
 *
 */ 
 

// psudeo constuctor 
var mapping = function(bot) {
	that = this;
	this.prefix = "servbot";
	this.bot = bot;
	
	// bind a shitposting listener
	this.bot.on('message', function(user, userID, channelID, message, event) {
		// mapping only applies to prefixed commands
		if(message.startsWith(that.prefix)) {
			// trim out the prefix and whitespace
			var command = message.replace(that.prefix,'').trim();
			// make sure that shit is there
			if(typeof that[command] === "function") {
				// we call the function as if it was bound to the bot directly, 
				// with all the arguments *this* function was called with
				var output = that[command].apply(this, arguments);
				bot.sendMessage({
					to:channelID,
					message: output
				});
			}
		}
	});
	
	// mapping function turns input into functions to be called
	this.map = function(input, output) {
		if(typeof output === "string") 
			// hey EMAC when's lambda? tyty
			this[input] = function() { return output; }
		if(typeof output === "function")
			this[input] = output;
		/*...*/
	}
	
	return this;
}



if(module && module.exports)
	module.exports = mapping;