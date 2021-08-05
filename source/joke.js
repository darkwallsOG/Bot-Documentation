module.exports = {
  name: "joke",
  description: "fetches a random joke",
  async execute(message,args,fetch){
    message.react('🧡')
    let getJoke = async() =>
    {
      let result = await fetch('https://official-joke-api.appspot.com/random_joke')
      let json = await result.json()
      return json

    }
    let joke = await getJoke()
   message.reply(`**Here's your joke**
   ${joke.setup}
   ${joke.punchline}`)
  }
}