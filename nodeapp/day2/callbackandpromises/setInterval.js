var count = 1;
const interval = setInterval(() => {
    console.log("abc");
    count++;
    if (count == 5) {
        clearInterval(interval);
    }
}, 1000);