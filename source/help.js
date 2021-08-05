module.exports ={
  name: "help",
  decription: "help",
  execute(message,args,Discord){
    message.react('🧡')
    const Embed1 = new Discord.MessageEmbed()
    .setTitle("**Help**")
    .setDescription("You can use these commands")
    .setColor("RED")
    .addField("1. `!ego`","BAH-A-LA-LA-LA",true)
    .addField("2. `!ping`","Shows ping",true)
    .addField("3. `!math`","Math commands",true)
    .addField("4. `!joke`","Shows a random joke",true)
    .addField("5. `!weather`","Shows weather of your city",true)
    .setImage("https://cdn.wallpapersafari.com/35/32/tfsU9b.jpg")

    message.channel.send(Embed1)
  }
}