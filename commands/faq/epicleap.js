import { SlashCommandBuilder } from 'discord.js';

// Command Builder export
export const data = new SlashCommandBuilder()
  .setName('epicleap')
  .setDescription('Tells how many medals are required to leap an epic fighter');

// Execute function export
export async function execute(interaction) {
  let reply = 'It takes 1220 medals and 10 recharge capsules to leap an epic fighter after they have reached 5/5/5/5.';
  reply += '\nTalent Points'
  reply += '\n75: 20 medals + 10 recharge capsules';
  reply += '\n76-84: 20 medals each';
  reply += '\n85-89: 40 medals each';
  reply += '\n90-94: 60 medals each';
  reply += '\n95-99: 80 medals each';
  reply += '\n100: 120 medals';
  await interaction.reply(reply);
}