const { DiscordAPIError } = require('discord.js');

module.exports = {
    name: 'pin',
    description: 'Pin a message in the channel',
    public: true,
    execute(message, args) {
        console.log("pin command");
		var messages = "";

        if (message.reference) // && message.reference.messageID) 
        {         
            const messageToPin = message.reference.messageId;
            message.channel.messages.fetch(messageToPin)
            .then(fetchedMessage => {
                fetchedMessage.pin()
                .then(() => message.reply('Message pinned successfully!'))
                .catch(error => {
                    message.reply('An error occurred while pinning the message.');
                });
            })
            .catch(error => {
                message.reply('An error occurred while pinning the message.');
            });
        } 
        else {
            message.reply("Please reply to a (non deleted) message to pin it");
        }
    }
};
