import { SlashCommandBuilder } from 'discord.js';

// Command Builder export
export const data = new SlashCommandBuilder()
    .setName('hello')
    .setDescription('Replies it\'s a good day!');

// Execute function export
export async function execute(interaction) {
    await interaction.reply('It\'s a good day to be a space monkey!');
}