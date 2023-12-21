import { SlashCommandBuilder } from 'discord.js';

// Command Builder export
export const data = new SlashCommandBuilder()
    .setName('life')
    .setDescription('What is the meaning of life!');

// Execute function export
export async function execute(interaction) {
    await interaction.reply('The answer to the ultimate question of life, the universe, and everything is 42.');
}