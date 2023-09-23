import { config } from "dotenv";
import { Client, GatewayIntentBits } from "discord.js";
import bot from "./src/bot.js";

config();

const client = new Client({
    intents:[
        GatewayIntentBits.Guilds, 
        GatewayIntentBits.GuildMembers,
        GatewayIntentBits.GuildMessages,
        GatewayIntentBits.MessageContent,
    ]
});

client.once("ready", () => {
    console.log("[+] Bot is up and running");
});

client.on("messageCreate", (message) => {
    bot(message);
});

client.login(process.env.TOKEN);