//--------------------------------------------------//--------------------------------------------------//--------------------------------------------------

const Discord = require('discord.js');
const moment = require('moment');
const chalk = require('chalk');
const db = require('quick.db')
const ayarlar = require('../ayarlar');
const client = global.visteria

//--------------------------------------------------//--------------------------------------------------//--------------------------------------------------

module.exports = async (member) => {

//--------------------------------------------------//--------------------------------------------------//--------------------------------------------------

const botayar = ayarlar.bot
const kanallar = ayarlar.kanallar
const roller = ayarlar.roller
const botconfig = ayarlar.config
const prefix = botconfig.prefix
const discow = new Discord.MessageEmbed().setColor('BLACK').setFooter(`${botconfig.footer}`, member.user.avatarURL({ dynamic: true, size: 2048 })).setTimestamp()
const dikkat = client.emojis.cache.get(ayarlar.emojiler.discow_carpi)
const tik = client.emojis.cache.get(ayarlar.emojiler.discow_tik)
const ok = client.emojis.cache.get(ayarlar.emojiler.discow_ok)
const msunucu = member.guild
const muye = member.guild.members.cache.get(member.id)
const msahip = member

const kurallar = client.emojis.cache.get(ayarlar.emojiler.discow_kurallar)
const kristal = client.emojis.cache.get(ayarlar.emojiler.discow_kristal)
const yetkili = client.emojis.cache.get(ayarlar.emojiler.discow_yetkili)
const ses = client.emojis.cache.get(ayarlar.emojiler.discow_ses)

const registerchat = client.channels.cache.get(kanallar.registerchat)

const discow000 = client.emojis.cache.get(ayarlar.emojiler.discow000)
const discow001 = client.emojis.cache.get(ayarlar.emojiler.discow001)
const discow002 = client.emojis.cache.get(ayarlar.emojiler.discow002)
const discow003 = client.emojis.cache.get(ayarlar.emojiler.discow003)
const discow004 = client.emojis.cache.get(ayarlar.emojiler.discow004)
const discow005 = client.emojis.cache.get(ayarlar.emojiler.discow005)
const discow006 = client.emojis.cache.get(ayarlar.emojiler.discow006)
const discow007 = client.emojis.cache.get(ayarlar.emojiler.discow007)
const discow008 = client.emojis.cache.get(ayarlar.emojiler.discow008)
const discow009 = client.emojis.cache.get(ayarlar.emojiler.discow009)

var uyesayi = member.guild.memberCount.toString().replace(/ /g, "    ")
var us = uyesayi.match(/([0-9])/g)
  uyesayi = uyesayi.replace(/([a-zA-Z])/g, "Bilinmiyor").toLowerCase()
    if(us) {
  uyesayi = uyesayi.replace(/([0-9])/g, d => {
return {
  '0': `${discow000}`,
  '1': `${discow001}`,
  '2': `${discow002}`,
  '3': `${discow003}`,
  '4': `${discow004}`,                       
  '5': `${discow005}`,
  '6': `${discow006}`,
  '7': `${discow007}`,
  '8': `${discow008}`,
  '9': `${discow009}`
}[d];
})}

const rcreated = member.user.createdAt
const rgun = moment(new Date(rcreated).toISOString()).format('DD')
const ray = moment(new Date(rcreated).toISOString()).format('MM').replace("01", "Ocak").replace("02","??ubat").replace("03","Mart").replace("04", "Nisan").replace("05", "May??s").replace("06", "Haziran").replace("07", "Temmuz").replace("08", "A??ustos").replace("09", "Eyl??l").replace("10","Ekim").replace("11","Kas??m").replace("12","Aral??k")
const ry??l = moment(new Date(rcreated).toISOString()).format('YYYY')
const rsaat = moment(new Date(rcreated).toISOString()).format('HH:mm')
const rcre = `${rgun} ${ray} ${ry??l} | ${rsaat}`  

const kurulus = new Date().getTime() - member.user.createdAt.getTime();  
const gecen = moment.duration(kurulus).format(`YY [Y??l,] DD [G??n,] HH [Saat,] mm [Dakika,] ss [Saniye]`) 

var kontrol;
  if (kurulus < 1296000000) kontrol = `**\`G??venli De??il\`** ${dikkat}`
  if (kurulus > 1296000000) kontrol = `**\`G??venli\`** ${tik}`

//--------------------------------------------------//--------------------------------------------------//--------------------------------------------------

const voiceChannels = member.guild.channels.cache.filter(c => c.type === 'voice');
let count = 0;
    for (const [id, voiceChannel] of voiceChannels) count += voiceChannel.members.size;

var uyesayi = member.guild.memberCount.toString().replace(/ /g, "    ")
var us = uyesayi.match(/([0-9])/g)
  uyesayi = uyesayi.replace(/([a-zA-Z])/g, "Bilinmiyor").toLowerCase()
    if(us) {
  uyesayi = uyesayi.replace(/([0-9])/g, d => {
    return {
  '0': `${discow000}`,
  '1': `${discow001}`,
  '2': `${discow002}`,
  '3': `${discow003}`,
  '4': `${discow004}`,                       
  '5': `${discow005}`,
  '6': `${discow006}`,
  '7': `${discow007}`,
  '8': `${discow008}`,
  '9': `${discow009}`
}[d];
})}

//--------------------------------------------------//--------------------------------------------------//--------------------------------------------------
//--------------------------------------------------//--------------------------------------------------//--------------------------------------------------
  
var sessay?? = count.toString().replace(/ /g, "    ")
var ??s2 = sessay??.match(/([0-9])/g)
  sessay?? = sessay??.replace(/([a-zA-Z])/g, "Bilinmiyor").toLowerCase()
    if(??s2) {
  sessay?? = sessay??.replace(/([0-9])/g, d => {
    return {
  '0': `${discow000}`,
  '1': `${discow001}`,
  '2': `${discow002}`,
  '3': `${discow003}`,
  '4': `${discow004}`,                       
  '5': `${discow005}`,
  '6': `${discow006}`,
  '7': `${discow007}`,
  '8': `${discow008}`,
  '9': `${discow009}`
}[d];
})}

//--------------------------------------------------//--------------------------------------------------//--------------------------------------------------

if(member.guild.id != botconfig.botswid) return;
  
const discows = new Discord.MessageEmbed()
.setColor('BLACK')
.setFooter(botconfig.footer, member.user.avatarURL({ dynamic: true }))
.setTimestamp()

    if(!member.user.bot) {

  await client.channels.cache.get(kanallar.registerchat).send(`**<@&${roller.registerstaff}> - ${member}**`, discows
.setDescription(`${ok} **${member}, Sunucumuza Ho??geldin.**
  
${ses} **Seninle Beraber** ${uyesayi} **Ki??i Olduk. / ??uanda Sunucumuzun Ses Kanallar??nda** ${sessay??} **Ki??i Bulunmakta.**
  
${yetkili} **Kay??t Olmak ????in Sol Tarafta Bulunan <#${kanallar.welcome1}> Odas??n?? Girip** **\`Ses Teyit\`** **Verebilirsin.**

${kristal} **E??er Sende Ailemizden Olmak ??stersen Tag??m??z?? Alabilirsin.** **[** **\`${botconfig.tag}\`** **]**

${kurallar} **Sunucu Kurallar??m??z <#${kanallar.kurallar}> Kanal??nda Belirtilmi??tir. Unutma Sunucu ????erisindeki \`Ceza ????lemlerin Kurallar?? Okudu??unu Varsayarak Uygulanacak\`.**

${ok} **Hesab??n** **\`${gecen}\`** **??nce Olu??turulmu??.**

**??????????????????????????????????????????????????????????????????????????????????????????????????????????????????**`)
.addField(`Hesab??n Olu??turulma Tarihi :`, `**\`${rcre}\`**`, true)
.addField(`Hesap G??venlimi :`, `${kontrol}`, true))
  
} if(member.user.bot) {

  await client.channels.cache.get(kanallar.registerchat).send(discows
.setDescription(`${ok} **Sunucuya Bir Bot Eklendi.**`)
.addField(`${ok} **Bot :**`, `**${member} / \`${member.user.username}\`**`)
.addField(`${ok} **Bot ID :**`, `\`${member.id}\``)
.addField(`Hesap Olu??turulma Tarihi :`, `**\`${rcre}\`**`, true))

  await client.channels.cache.get(kanallar.registerchat).send(`**${botayar.sahipler.map(x => `<@${x}>`).join("\n")} | <@${member.guild.owner.id}>**`)

  await member.roles.set(roller.botlar);
  
  await member.setNickname("Yeni Bot")

}

//--------------------------------------------------//--------------------------------------------------//--------------------------------------------------

}
module.exports.conf = {
  name: "guildMemberAdd"
};

//--------------------------------------------------//--------------------------------------------------//--------------------------------------------------