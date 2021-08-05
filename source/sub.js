module.exports = {
  name: "sub",
  description: "Substraction",
  execute(message,args){
   message.react('🧡')
    if(args.length<2)
    {
      message.reply("Not enough arguments")
      return
    }
    else if(args.length>2)
    {
      message.reply("Maximum number of arguments is 2")
      return
    }
    else
    {
      message.reply("The Substraction of " + args + " is " +(args[0]-args[1]))
    }
  }
}