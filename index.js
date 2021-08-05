const Discord = require('discord.js')
const weather = require('weather-js')
const bot = new Discord.Client()
const fetch = require('node-fetch')
//const token = process.env['Discord.Secret']

const fs = require('fs');
bot.commands = new Discord.Collection();
const commandFiles = fs.readdirSync('./source').filter(file => file.endsWith('.js'));
for (const file of commandFiles) {
  const command = require(`./source/${file}`);
  bot.commands.set(command.name, command);
}

bot.on('ready',() => 
{
  console.log("Bot is working!!!")
  bot.user.setActivity("Youtube",{type: "WATCHING"})
})

const prefix = '!'

bot.on('message',async (message) => {
  if(message.content[0]!=prefix)
  {
    return
  }

  const args = message.content.slice(prefix.length).trim().split(' ')
  console.log(args)
  const command = args.shift().toLowerCase()
  console.log(command)


  
  if(command == "ego")
  {
    bot.commands.get("ego").execute(message,args)
  }

  if(command == "ping")
  {
    bot.commands.get("ping").execute(message,args,bot,Discord)
  }

  if(command == "add")
  {
    bot.commands.get("add").execute(message,args)    
  }

  if(command == "multiply")
  {
    bot.commands.get("multiply").execute(message,args)    
  }

  if(command == "sub")
  {
    bot.commands.get("sub").execute(message,args)    
  }
  
  if(command == "math")
  {
    bot.commands.get("math").execute(message,args,Discord)
  }
  
  if(command == "clearbay")
  {
    bot.commands.get("clearbay").execute(message,args)
  }

  if(command == "joke")
  { 
    bot.commands.get("joke").execute(message,args,fetch)
  }

  if (command === "weather") 
  {
    bot.commands.get("weather").execute(message, args, Discord, weather)
  }

  if(command == "help")
  {
   bot.commands.get("help").execute(message,args, Discord) 
  }
})

let set = new Set(['badword'])//filters badwords
bot.on('message', (msg) =>{
  let wordarray = msg.content.split(' ')
  for(var i=0;i<wordarray.length;i++)
  {
    if(set.has(wordarray[i]))
    {
      msg.delete();
      msg.reply("Sorry no bad words are allowed")
      break
    }
 }
})



bot.login(process.env.TOKEN)