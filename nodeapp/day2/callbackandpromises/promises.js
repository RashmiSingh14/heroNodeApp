let counter = 4;

const taskPromise = new Promise((resolve, reject) => {
    if (counter == 3)
        resolve();
    else
        reject();
    // console.log("promise executed");
})
taskPromise.then(() => {
    console.log("success");
}).catch(() => {
    console.log("promise fails");
})