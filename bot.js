import { Client, Events, Collection, GatewayIntentBits } from 'discord.js';
import { config } from 'dotenv';
import * as util from './bot_util.js'

// Loading commands from the commands folder
const commandFiles = await util.getFilesArray('./commands');

// Create a new client instance
const client = new Client({intents: [GatewayIntentBits.Guilds],});

// create a collection in the client for commands
client.commands = new Collection();
for (const file of commandFiles) {
  const command = await import(`./${file}`); // Using dynamic import
  if ('data' in command && 'execute' in command) {
    client.commands.set(command.data.name, command);
  } else {
    console.log(`[WARNING] The command ${file} is missing a required "data" or "execute" property.`);
  }
}

// when the client is ready, run this code (one time only)
client.once(Events.ClientReady, readyDiscord);

// Login to Discord with the client token
config();
client.login(process.env.TOKEN);

function readyDiscord() {
  console.log("Discord is ready.");
}

// Interactions
client.on(Events.InteractionCreate, handleInteraction);

async function handleInteraction(interaction) {
  if (!interaction.isCommand()) return;
  const command = client.commands.get(interaction.commandName);
  if (!command) return;
  try {
    await command.execute(interaction);
  } catch (error) {
    if (error) console.error(error);
    await interaction.reply({ content: 'There was an error while executing this command!', ephemeral: true });
  }
}