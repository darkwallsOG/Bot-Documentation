module.exports = {
  name: "math",
  description: "math commands",
  execute(message,args,Discord){
    message.react('🧡')
    const Embed1 = new Discord.MessageEmbed()
    .setTitle("**Math Commands**")
    .setDescription("You can use these commands")
    .setColor("#00FFFF")
    .addField("1. `!multiply`","Multiplication",true)
    .addField("2. `!add`","Addition",true)
    .addField("3. `!sub`","Substraction",true)
    .setImage("https://cdn.wallpapersafari.com/35/32/tfsU9b.jpg")

    message.channel.send(Embed1)
  }
}