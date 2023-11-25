import { Client, Events, GatewayIntentBits } from 'discord.js';
import { config } from 'dotenv';
import * as hello from './commands/hello.js';
import * as utc from './commands/utc.js';

config();

//console.log(process.env.CLIENTID);

// Create a new client instance
const client = new Client({intents: [GatewayIntentBits.Guilds],});

// when the client is ready, run this code (one time only)
client.once(Events.ClientReady, readyDiscord);

// Login to Discord with the client token
client.login(process.env.TOKEN);
//client.login(TOKEN);   // fly secret

function readyDiscord() {
  console.log("Discord is ready.");
}

// Interactions
client.on(Events.InteractionCreate, handleInteraction);

async function handleInteraction(interaction) {
    if (!interaction.isCommand()) return;
    //TODO: handle additional commands more efficiently
    if (interaction.commandName === 'hello') {
      await hello.execute(interaction);
    } else if (interaction.commandName === 'utc') {
      await utc.execute(interaction);
    }
}