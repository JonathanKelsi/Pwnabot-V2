import lsCommand from "./commands/ls.js";
import diffCommand from "./commands/diff.js"; 

const commands = {
    "ls": lsCommand,
    "diff": diffCommand,
}

const sanityCheck = function(message) {
    if (message.author.bot) return false;
    if (message.channelId != process.env.CHANNEL_ID) return false;
    if (!message.content.startsWith(process.env.PREFIX)) return false;
    return true;
}

const bot = async function(message) {
    if (!sanityCheck(message)) return;

    const args = message.content.slice(process.env.PREFIX.length).trim().split(' '); 

    if (!Object.keys(commands).includes(args[0])) {
        message.channel.send("Command not found");
    }

    const res = await commands[args[0]](args.slice(1));
    message.channel.send(res);
}

export default bot;