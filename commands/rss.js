const Command = require('./command')
var saxStream = require('sax-stream');

module.exports = class Rss extends Command {

    static match (message) {
        return message.content.startsWith('!rss')
    }

    static action () {
        request('http://blog.npmjs.org/rss')

        .pipe(saxStream({
            strict: true,
            tag: 'item'
        }))

        .on('data', function(item) {
        console.log(item)
        })
    }
}