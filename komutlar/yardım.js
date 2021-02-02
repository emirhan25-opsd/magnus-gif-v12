const Discord = require('discord.js');
const client = new Discord.Client();
const moment = require('moment');
var ayarlar = require('../ayarlar.json');

exports.run = async (client, message, args, msg) => {

const embed = new Discord.MessageEmbed()
    
.setColor('PURPLE') 
.addField(`Magnus Gif`, //Botunuzun İsmi
 `\n
.**gif-ara** Yazdığın Kelime Hakkında Gif Bulmanıza Yardımcı Olur!
.**man-gif** Erkek Gifleri Atar!
.**woman-gif** Kadın Gifleri Atar!
.**couple-gif** Couple (Sevgili) Gifleri Atar!
.**baby-gif** Bebek Gifleri Atar!
.**animal-gif** Hayvan Gifleri Atar!

**Diğer**

.**yardım-kullanıcı** Kullanıcı Komutlarını Gösterir!

**Link & Bağlantılar**

[Piyasa Herdaim Zirvede Olmayan Yerdir.) 
`)//BOtun Davet Lnki
    
message.channel.send({embed});
}

exports.conf = {
enabled: true,
guildOnly: false,
aliases: ['help'], //dokunmayın .d
permLevel: 0
};

exports.help = {
  name: 'yardım', //komut ismi
  description: 'oxxy', // açıklama 
  usage: 'yardım' //tetikleme
};