module.exports = {
  name: "ping",
  description: "shows ping",
  execute(message,args,bot,Discord){
    message.react('🧡')
    message.reply('Calculating ping...').then((resultmsg) => {
      const ping = resultmsg.createdTimestamp - message.createdTimestamp
      
      //const Embed1 = new Discord.MessageEmbed()
    /*.setColor("#00FF00")
    .addField(`💓 ${ping}ms`,'\u200b') //bot latency
    .addField(`⏳ ${bot.ws.ping}ms`,'\u200b') //api latency
    //message.channel.send(Embed1)
    */
    resultmsg.edit(`💓: ${ping}ms, ⏳: ${bot.ws.ping}ms`)
    
    })
  },
}