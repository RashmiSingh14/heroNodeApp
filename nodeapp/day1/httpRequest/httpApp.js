let http = require('http')
http.get("http://localhost:3001/menu", res => {
    let arr = [];
    res.on("data", arrData => {
        console.log("inside get data")
        arr.push(arrData);
    })
    res.on("end", () => {
        console.log("inside end")
        console.log(JSON.parse(Buffer.concat(arr).toString()));
    })
})


// let http = require('http');
// http.get('http://localhost:4001/menu', res => {
//     let arr = [];
//     res.on('data', arrData => {
//         arr.push(arrData);
//         console.log('inside the data');

//     })
//     res.on('end', () => {
//         console.log('inside the end');
//         console.log(JSON.parse(Buffer.concat(arr).toString()));

//     })
// })