import { SlashCommandBuilder } from 'discord.js';

// Command Builder export
export const data = new SlashCommandBuilder()
  .setName('leapmedals')
  .setDescription('Tells how many medals are required to leap a fighter');

// Execute function export
export async function execute(interaction) {
  let reply = 'It takes 700 medals to leap a fighter after they have reached 5/5/5/5.';
  reply += '\nTalent Points'
  reply += '\n75-79: 10 medals each';
  reply += '\n80-84: 15 medals each';
  reply += '\n85-89: 25 medals each';
  reply += '\n90-94: 35 medals each';
  reply += '\n95-99: 45 medals each';
  reply += '\n100: 50 medals';
  await interaction.reply(reply);
}