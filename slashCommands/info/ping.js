const { SlashCommandBuilder } = require("@discordjs/builders");
const { MessageEmbed } = require("discord.js");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("ping")
    .setDescription("replies with pong!"),
  run: async (client, interaction) => {
    const embed = new MessageEmbed()
      .setTitle("ping")

      .setColor("RANDOM")
      .setDescription(`🏓 My Ping is ${Math.round(client.ws.ping)}ms`);
    interaction.reply({ embeds: [embed] });
  },
};