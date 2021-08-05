module.exports = {
  name: "add",
  description: "Addition",
  execute(message,args){
    message.react('🧡')
    if(args.length<2)
    {
      message.reply("Not enough arguments")
      return
    }
    else
    {
      let add = 0
      args.forEach((value) => {
        add += parseFloat(value)
      })
    
    message.channel.send("The Addition of " + args +" is " + add)
    }
  }
}