module.exports = {
  name: "multiply",
  description: "Multiplication",
  execute(message,args){
    message.react('🧡')
    if(args.length<2)
    {
      message.reply("Not enough arguments")
      return
    }
    else
    {
      let product = 1
      args.forEach((value) =>
      {
        product *= parseFloat(value)
      })
      message.channel.send("The Multiplication of " + args + " is " + product)
    }
  }

}