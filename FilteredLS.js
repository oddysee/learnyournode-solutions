var fs = require('fs');

var directoryPath = process.argv[2];
var fileExtension = process.argv[3];

fs.readdir(directoryPath, 
           function(err, files) {
               if(!err) {
                   var pattern = new RegExp('[^.]\.' + fileExtension + '$');
                   
                   files.forEach(function(item) {
                                     if(pattern.test(item)) {
                                         console.log(item);
                                     }
                                 });
               }
           });