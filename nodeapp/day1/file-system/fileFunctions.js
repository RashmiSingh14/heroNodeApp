let fs = require('fs');

fs.rename('data.txt','data1.txt', function(err){
    if(err){
        console.log('error');
    }else{
        console.log("success data");
    }
})