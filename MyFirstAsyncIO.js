var fs = require('fs')
var filePath = process.argv[2]
fs.readFile(filePath, 'utf8', function(err, content) {

    var numberOfNewLines = content.split('\n').length - 1
    console.log(numberOfNewLines)
})
