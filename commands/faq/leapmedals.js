import { SlashCommandBuilder } from 'discord.js';

// Command Builder export
export const data = new SlashCommandBuilder()
  .setName('leapmedals')
  .setDescription('Tells how many medals are still needed to finish a fighter talent leap')
  .addIntegerOption(option => 
    option.setName('points')
      .setDescription('The number of talent points you currently have.')
      .setRequired(true));

// Execute function export
export async function execute(interaction) {
  let reply;
  const points = interaction.options.getInteger('points');
  const tiers = [45, 35, 25, 15, 10]; // the medal cost for each tier of talent points starting with the highest tier
  if(points >= 74 && points < 100) {
    let medals = 50; // start with the number of medals it takes to complete the last (100th) talent point
    const diff = 99 - points; // get the number talent points needed to complete all tiers (minus the last talent point)
    const fullTier = Math.floor(diff / 5); // the number of tiers that are left to be completed
    const leftovers = diff % 5; // the number of talent points left to be completed in the current tier in progress
    for(let x = 0; x < fullTier; x++) {
      medals = medals + (tiers[x] * 5);
    }
    if(leftovers > 0) {
      medals = medals + (tiers[fullTier]*leftovers);
    }
    reply = 'You need '+medals+' medals to finish the talent leap for your fighter.';
  } else if(points < 74) {
    reply = 'Your fighter needs to be 5/5/5/5 with 74 talent points in order to start the leap process.'
  } else {
    reply = "It looks like you have finished the talent leap for your fighter. Good job!"
  }

  await interaction.reply(reply);
}