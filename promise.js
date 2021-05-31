let promise = new Promise((resolve, reject) => {
    resolve("Hello success");
    //reject("failure bro");
})
.then(result => {
    console.log(result);
    return 1;
})
.then(result => {
    console.log(result);
    return 2;
})
.then(result => {
    console.log(result);
    return 3;
})
.then(result => {
    console.log(result);
    return 4;
})
.then(result => {
    console.log(result);
    return 5;
})

.catch(err => {
    console.log(err);
});
