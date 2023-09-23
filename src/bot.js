const sanityCheck = function(message) {
    if (message.author.bot) return false;
    if (message.channelId != process.env.CHANNEL_ID) return false;
    if (!message.content.startsWith(process.env.PREFIX)) return false;
    return true;
}

const bot = async function(message) {
    if (!sanityCheck(message)) return;
    console.log(message.content);
}

export default bot;