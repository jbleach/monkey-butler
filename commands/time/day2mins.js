import { SlashCommandBuilder } from 'discord.js';

// Command Builder export
export const data = new SlashCommandBuilder()
  .setName('day2mins')
  .setDescription('Converts days to minutes.')
  .addIntegerOption(option => 
    option.setName('days')
      .setDescription('The number of days to convert into minutes.')
      .setRequired(true));

// Execute function export
export async function execute(interaction) {
  const days = interaction.options.getInteger('days');
  const minutes = Math.round((days*1440 + Number.EPSILON) * 1) / 1;
  await interaction.reply(days+" days is "+minutes+" minutes");
}