const Command = require('./command')

module.exports = class Help extends Command {

    static match (message) {
        return message.content.startsWith('!help')
    }

    static action (message) {
        let args = message.content.split(' ')
        args.shift()
        message.reply('Voici ci dessous les differentes commandes disponible : \n !help \n !play + lien youtube \n !play stop')
    }
}