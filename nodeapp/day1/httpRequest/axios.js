let axios = require('axios')
axios.get("http://localhost:3001/menu").then(res => {
    console.log(res.data)
}).catch(err => {
    console.log("error occured")
})



// let axios = require('axios');

// axios.get("http://localhost:3000/menu").then(res =>{
//     console.log(res.data)
// }).catch(err => {
//     console.log('error : ',err);
// })