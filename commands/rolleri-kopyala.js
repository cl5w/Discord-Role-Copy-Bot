const { SlashCommandBuilder, PermissionFlagsBits } = require('discord.js');
const { sourceGuildId, targetGuildId } = require('../config.json');

const startRoleName = 'a';
const endRoleName = 'f';

module.exports = {
  data: new SlashCommandBuilder()
    .setName('rolleri-kopyala')
    .setDescription('Belirtilen rol aralığındaki rolleri yetkisiz olarak kopyalar.')
    .setDefaultMemberPermissions(PermissionFlagsBits.Administrator),

  async execute(interaction) {
    // Yanıtı ertele
    await interaction.deferReply({ ephemeral: true });

    const sourceGuild = await interaction.client.guilds.fetch(sourceGuildId);
    const targetGuild = await interaction.client.guilds.fetch(targetGuildId);

    const roles = [...(await sourceGuild.roles.fetch()).values()]
      .filter(role => role.name !== '@everyone' && !role.managed)
      .sort((a, b) => b.position - a.position);

    let copying = false;
    let copiedCount = 0;

    for (const role of roles) {
      if (role.name === startRoleName) copying = true;

      if (copying) {
        try {
          await targetGuild.roles.create({
            name: role.name,
            color: role.color,
            hoist: role.hoist,
            mentionable: role.mentionable
          });
          copiedCount++;
        } catch (err) {
          console.error(`❌ ${role.name} kopyalanamadı:`, err.message);
        }
      }

      if (role.name === endRoleName) break;
    }

    if (copiedCount === 0) {
      await interaction.editReply('❌ Rol kopyalaması başarısız. Başlangıç/bitiş adlarını kontrol et.');
    } else {
      await interaction.editReply(`✅ ${copiedCount} rol başarıyla kopyalandı.`);
    }
  },
};
