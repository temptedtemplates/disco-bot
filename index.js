const fs = require('fs');
const Discord = require('discord.js');
const bot = new Discord.Client();
var prefix = "ad!";

bot.commands = new Discord.Collection();

fs.readdir("./commands/", (err, files) => {
    if (err) console.error(err);
    let jsfiles = files.filter(f => f.split(".").pop() === "js");

    if (jsfiles.length <= 0) return console.log("No commands");

    console.log(`Loading ${jsfiles.length}`);
    jsfiles.forEach((f, i) => {
        let props = require(`./commands/${f}`);
        console.log(`${i + 1}: ${f} Loaded!`);
        bot.commands.set(props.help.name, props);
    });
});

bot.on("message", (msg) => {
    if (msg.author.bot) return;
    if (msg.channel.type === "dm") return;

    let messageArray = msg.content.split(" ");
    let command = messageArray[0].toLowerCase();
    let args = messageArray.slice(1);

    if (!command.startsWith(prefix)) return;
    if (!bot.guilds.find("id", "633120658489868290")) return;
    
    let cmd = bot.commands.get(command.slice(prefix.length));
    if (cmd) cmd.run(bot, msg, args);
});

bot.on("ready", () => {
    bot.user.setActivity(`over partners`, { type: "WATCHING" });
});

bot.token = process.env.token;
bot.login();