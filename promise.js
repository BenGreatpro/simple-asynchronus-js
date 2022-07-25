// const promise = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         console.log("got the user");
//         resolve({ user: "Ben" });
//     }, 2000)
// });

// promise.then(user => {
//     console.log(user);
// });

const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        console.log("got the user");
        reject(new Error ("user not found"));
    }, 2000)
});

promise.then(user => {
    console.log(user);
})
.catch(err => console.log(err.message));