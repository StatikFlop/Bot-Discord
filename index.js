const Discord = require('discord.js')
const bot = new Discord.Client()
const Help = require('./commands/help')
const Play = require('./commands/play')
const Rss = require('./commands/rss')

bot.on('ready', function () {
    console.log("Je suis connecté !")
  })

bot.on('message', function (message) {
    let commandUsed =
    Help.parse(message) ||
    Play.parse(message) ||
    Rss.parse(message)
})

bot.login('MzQ5ODg5MDIyMjQ1NzMyMzUz.DH8JZQ.oOqcnBDkJHGVqSmWnXjj7EX_o4E')