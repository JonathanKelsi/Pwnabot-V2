import { config } from "dotenv";
import { Client, GatewayIntentBits } from "discord.js";
import { bot } from "./bot";

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

client.on("messageCreate", async (message) => {
    const res = await bot(message);
    
    if (res) {
        message.channel.send(res);
    }
});

client.login(process.env.TOKEN);
