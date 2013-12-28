var fs = require('fs')

var filePath = process.argv[2]
var contentBuffer = fs.readFileSync(filePath)

var content = contentBuffer.toString()
var numberOfNewLines = content.split('\n').length - 1

console.log(numberOfNewLines)
