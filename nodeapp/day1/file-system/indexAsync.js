// Async example

let fs = require('fs');

// read async way
fs.readFile('data.txt', 'utf-8', function (err, data) {
    if (err)
        console.log("error :", err);
    else
        console.log("data : ", data);
});

// write async way
fs.readFile('data.txt', 'utf-8', function (err, data) {
    if (err) {
        console.log("error :", err);
    } else {
        console.log("data : ", data);
        fs.writeFile('newdata.txt', data, function (err) {
            if (err) {
                console.log('error while writing');
            }
        });
    }
});