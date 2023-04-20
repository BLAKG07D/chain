'use strict';

require("dotenv").config();

const { Client, GatewayIntentBits } = require("discord.js");

const client = new Client({
    intents: [
        GatewayIntentBits.Guilds,
        GatewayIntentBits.GuildMessages,
        GatewayIntentBits.MessageContent
    ]
})

client.once("ready", () => {
    console.log('xLOUD-9 is Ready... to start listening for requests')
})
client.on("messageCreate", (message) => {
    message.content == "hello"?message.reply("hello to you"):"no one talks to me"
        
    
})
client.login(process.env.BOT_TOKEN);