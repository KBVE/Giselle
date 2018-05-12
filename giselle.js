const Discord = require("discord.js");
const low = require("lowdb");
const FileSync = require("lowdb/adapters/FileSync");
const client = new Discord.Client();
const config = require('./json/config.json');
const db = {};

db.wordlist = low(new FileSync("./json/wordlist.json"));
db.serverlist = low(new FileSync("./json/serverlist.json"));

db.wordlist.defaults({ banned: [] });
db.serverlist.defaults({ servers: [] });

/* To set the lists manually use the following commands
db.wordlist.set('banned', ["nigger"]).write();
db.serverlist.set('servers',
[{
	"id": "342732838598082562",
	"channels": ["342732838598082562"]
},
{
	"id": "287268618474094594"
}]).write();
console.log(db.serverlist.get('servers').value());
*/

client.on('message', m => {
  try {
    var i = db.serverlist.get('servers').value();
    var u = db.wordlist.get('banned').value();
    i.forEach(s => {
      if(m.guild.id === s.id) {
        u.forEach(w => {
          if(m.cleanContent.indexOf(w) !== -1) {
            wowRude(m, "Banned Word");
          }
        });
      }
    });
    /*if((m.guild.id === "342732838598082562" || m.guild.id === "287268618474094594") && m.cleanContent.indexOf("nigger") !== -1) {
      wowRude(m, "N-Word");
    }
    if(m.channel.id === "342732838598082562") {
      if(m.cleanContent.indexOf("http") !== -1) {
        wowRude(m, "Broken Rule 16 - Link in General Channel");
      }
    }*/
    
  } catch(err) { 
      console.log(err);
  }
});

client.login(config.token);

function wowRude(m, reason) {
  m.delete().then(m, reason => console.log(`Deleted message from ${m.author.username} => Reason: ${reason}`)).catch(console.error);
}
