import { Message } from "discord.js";
import { lsCommand } from "./commands/ls";
import { diffCommand } from "./commands/diff";
import { helpCommand } from "./commands/help";
import { rankCommand } from "./commands/rank";

const commands: {[key: string]: Function} = {
    "ls": lsCommand,
    "diff": diffCommand,
    "rank": rankCommand,
    "help": helpCommand,
}

function sanityCheck(message: Message) {
    if (message.author.bot) return false;
    if (message.channelId != process.env.CHANNEL_ID) return false;
    return message.content.startsWith(process.env.PREFIX!);
}

export async function bot (message: Message) {
    if (!sanityCheck(message)) {
        return;
    }

    const args = message.content.slice(process.env.PREFIX!.length).trim().split(' ');

    if (!(args[0] in commands)) {
        return "Command not found";
    }

    return await commands[args[0]](args.slice(1));
}
