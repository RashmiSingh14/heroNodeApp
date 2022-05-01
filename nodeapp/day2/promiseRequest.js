const { resourceUsage } = require('process');
let request = require('request');

const intial = () => {
    return new Promise((resolve, reject) => {
        request.get("http://localhost:3001/menu", (err, res) => {
            if (err)
                reject(err);
            else
                resolve(res.body);
        })
    })
}

const main = () =>{
    const initialInstance = intial();
    initialInstance.then(result => {
        console.log(result);
    }, err => {
        console.log(err);
    })

}

main();