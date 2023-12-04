import { SlashCommandBuilder } from 'discord.js';

// Command Builder export
export const data = new SlashCommandBuilder()
  .setName('min2days')
  .setDescription('Converts minutes to days.')
  .addIntegerOption(option => 
    option.setName('minutes')
      .setDescription('The number of minutes to convert into days.')
      .setRequired(true));

// Execute function export
export async function execute(interaction) {
  const minutes = interaction.options.getInteger('minutes');
  const days = Math.round((minutes/1440 + Number.EPSILON) * 100) / 100;
  await interaction.reply(minutes+" minutes is "+days+" days");
}