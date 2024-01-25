import { SlashCommandBuilder } from 'discord.js';

// Command Builder export
export const data = new SlashCommandBuilder()
  .setName('points2speed')
  .setDescription('Converts points into the amount of speedups needed.')
  .addIntegerOption(option => 
    option.setName('points')
      .setDescription('The number of speedup days needed to earn specified points in Interstellar.')
      .setRequired(true));

// Execute function export
export async function execute(interaction) {
  const points = interaction.options.getInteger('points');
  const speed = points/3/60/24;
  await interaction.reply("You will need "+speed.toFixed(2)+" days of speedups to earn "+points+" points.");
}