import getChallenges from "./challenges/challenges.js"

const sanityCheck = function(message) {
    if (message.author.bot) return false;
    if (message.channelId != process.env.CHANNEL_ID) return false;
    if (!message.content.startsWith(process.env.PREFIX)) return false;
    return true;
}

const bot = async function(message) {
    if (!sanityCheck(message)) return;
    // const args = message.content.slice(process.env.PREFIX.length).trim().split(' '); 
    console.log(await getChallenges("272727"));
}

export default bot;