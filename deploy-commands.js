
const { REST, Routes } = require('discord.js');
const { token, clientId } = require('./config.json');
const fs = require('node:fs');
const path = require('node:path');

const commands = [];
const commandsPath = path.join(__dirname, 'commands');
const commandFiles = fs.readdirSync(commandsPath).filter(file => file.endsWith('.js'));

for (const file of commandFiles) {
  const command = require(path.join(commandsPath, file));
  commands.push(command.data.toJSON());
}

const rest = new REST().setToken(token);

(async () => {
  try {
    console.log('komut yukleniyor');
    await rest.put(
      Routes.applicationCommands(clientId),
      { body: commands },
    );
    console.log('slash komutlari yuklendi');
  } catch (error) {
    console.error(error);
  }
})();
