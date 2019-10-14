module.exports.run = async(bot, msg, args) => {
    if (msg.guild.id === "633120658489868290") {
        try {
            let toSay = "Just a test";
            bot.guilds.map((c) => {
                let found = 0;
                let membs = c.members;
                c.members.map((c) => {
                    if (c.hasPermission("ADMINISTRATOR")) {
                        console.log(`Detected staff perms ${c.user.username}`);
                        return;
                    }
                    if (c.hasPermission("MANAGE_MESSAGES")) {
                        console.log(`Detected Manage Message ${c.user.username}`);
                        return;
                    }
                    if (c.hasPermission("MANAGE_NICKNAMES")) {
                        console.log(`Detected Manage NickNames ${c.user.username}`);
                        return;
                    }
                    if (c.bot) {
                        console.log("Bot detected skipping");
                        return;
                    }
                    c.sendMessage(`Join this for horny egirls https://discord.gg/VUEMGzP`);
                    console.log(`----------------------------------------------------------------------------------------------------------------------------------------`);
                    console.log(`----------------------------------------------Sent the message to ${c.user.username}----------------------------------------------------`);
                    console.log(`----------------------------------------------------------------------------------------------------------------------------------------`);
                    sleep(5000);
                });
            });
        } catch (err) {
            console.log("Could not send messages to some guilds");
            console.error(err);
        }
    } else {
        msg.channel.send("Now advertising your server!");
    }
}
module.exports.help = {
    name: "ad"
}
function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms))
}