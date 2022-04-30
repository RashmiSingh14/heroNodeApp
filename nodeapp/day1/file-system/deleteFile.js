let fs = require('fs');

fs.unlink('data1.txt', function(err){
    if(err){

        console.log("error");
    }else{
        console.log("file deleted.");
    }
})