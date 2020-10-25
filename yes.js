const Discord = require('discord.js');
const client = new Discord.Client();

client.on("guildMemberAdd", member => {
  member.createDM().then(function (channel) {
  return channel.send(`**و سَلني عن ربيع العُمر سَلني 
أجيبُكَ ما الرَبيعُ سِواكَ أنت . 
https://discord.gg/6ZgT3we **`) 
}).catch(console.error)
})

client.login('NzU1NTEyODg0MDc0OTA1NzIy.X2EYNA.XFLSjOFV-nNi9C4hBrK2CZSLaM4')