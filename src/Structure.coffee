path = require 'path'
walk = require 'walk'

class Structure

    read: (pathToRead) ->
        walker = walk.walk pathToRead, followLinks: true
        walker.on 'file', (root, stat, next) ->
            console.log path.join root, stat.name
            next()

module.exports = Structure