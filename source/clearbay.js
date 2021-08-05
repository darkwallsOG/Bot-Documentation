module.exports = {
  name: "clearbay",
  description: "clears number of texts you want",
  execute(message,args){
    message.react('🧡')
    let num = 2
    if(args[0])
    {
      num = parseInt(args[0])+1
    }
    message.channel.bulkDelete(num)
    message.channel.send("Deleted "+args[0]+" posts for you")
  }
}