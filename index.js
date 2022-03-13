const Discord = require("discord.js");
const Client = new Discord.Client({
    intents: [
    Discord.Intents.FLAGS.GUILDS, 
    Discord.Intents.FLAGS.GUILD_MESSAGES
]});

const prefix = "!";

Client.on("ready", () => {
console.log("bot opérationnel");
});

Client.login("OTUxNDc2Mjk4MDUwNTg4Njky.YioBWw.rwL1a0Pwb5WrHut8U8MSnS_bUYU")

Client.on("messageCreate", message => {
    if (message.author.bot) return;

    if(message.content === prefix + "twitch")
    {message.channel.send("https://www.twitch.tv/cse_tv");}
});