const Discord = require("discord.js");
const client = new Discord.Client();
var config = require('./config.json');

client.on('message', m => {
  try {
    if((m.guild.id === "342732838598082562" || m.guild.id === "287268618474094594") && m.cleanContent.indexOf("nigger") !== -1) {
      wowRude(m, "N-Word");
    }
    if(m.channel.id === "342732838598082562") {
      if(m.cleanContent.indexOf("http") !== -1) {
        wowRude(m, "Broken Rule 16 - Link in General Channel");
      }
    }
    
  } catch(err) { 
      console.log(err);
  }
});

client.login(config.token);

function wowRude(m, reason) {
  m.delete().then(m, reason => console.log(`Deleted message from ${m.author.username} => Reason: ${reason}`)).catch(console.error);
}
