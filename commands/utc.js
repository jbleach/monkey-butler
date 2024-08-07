import { SlashCommandBuilder } from 'discord.js';

// Command Builder export
export const data = new SlashCommandBuilder()
  .setName('utc')
  .setDescription('Replies with the current time in UTC.');

// Execute function export
export async function execute(interaction) {
  let now = new Date();
  await interaction.reply("Current time is "+String(now.getUTCHours()).padStart(2, '0')+
    ":"+String(now.getUTCMinutes()).padStart(2, '0')+" UTC");
}