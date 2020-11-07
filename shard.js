const Discord = require('discord.js');
const ayarlar = require('./ayarlar.json');
const bot = new Discord.Client()

const alpike = new Discord.ShardingManager('./bot.js', {
    totalShards: 1,
    token: ayarlar.codetoken
});

alpike.spawn(); 

alpike.on('launch', shard => {
    console.log(`${shard.id}. Shard açıldı.`);
});

setTimeout(() => {
    alpike.broadcastEval("process.exit()");
}, 21600000);

