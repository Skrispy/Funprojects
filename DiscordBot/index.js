//primary bot code
const config = require('./config.json');
const Discord = require('discord.js');
const client = new Discord.Client();
var weather = require('openweather-apis');
weather.setLang('en');
weather.setZipCode(53202);

client.login(config.key);

client.once('ready', () => {
	console.log('Ready!');
});

client.on('message', message => {
    // handle the message
	if (message.content.startsWith(`${config.commandPrefix}hello`)) {
	    message.channel.send(`Howdy, ${message.author}!`);
    } else if (message.content.startsWith(`${config.commandPrefix}goodbye`)) {
	message.channel.send(`Cya later, ${message.author}`);
    } else if(message.content.startsWith(`${config.commandPrefix}weather`)){
        weather.getTemperature(function(err, temp){
            console.log(temp);
            message.channel.send(`The weather in Milwaukee is ${temp}`)
        });
            
        
    }
});