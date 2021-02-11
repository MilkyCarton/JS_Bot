require('dotenv').config();

const { Client } = require('discord.js');
const client = new Client();
const call  = "+";

client.on('ready', () => {
    console.log(`${client.user.tag} has logged in.`);
});

client.on('message', (message) => {
    if (message.author.bot) return;
    if (message.content.startsWith(call)) {
        var input = message.content.toLowerCase;
        const [CMD_NAME, ...args] = input
            .trim()
            .substring(call.length)
            .split(/\s+/);
        if (CMD_NAME == 'kick') {
            if (args.length == 0) return message.reply('Please select a user.');
            const member = message.guild.members.cache.get(args[0]);
            if (member) {
                member.kick();
            } else {
                message.channel.send('User was not found.');
            }
            message.channel.send(`Kicked the user.`);
        }
        else if (CMD_NAME)
    }
});
client.login(process.env.DISCORD_BOT_TOKEN);

