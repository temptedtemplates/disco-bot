module.exports.run = async(bot, msg, args) => {
    var amount = bot.guilds.size;
    if (msg.guild.id === "633120658489868290") {
        msg.author.sendMessage(`I have been connected to ${amount} servers`);
    } else {
        return;
    }
}
module.exports.help = {
    name: "amount"
}