let fs = require('fs');

let newLine = 'Some new line added.';
fs.appendFile('data1.txt', newLine, function(err){
    if(err){
        console.log("error");
    }else{
        console.log("file appended.");
        
    }
})