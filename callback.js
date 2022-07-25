// // Async code example

// console.log("start");

// setTimeout(() => {
//     console.log("we are in the timeout");
// }, 3000);

// console.log("End");

// console.log("Start");

// function loginUser(email, password, callback) {
//     setTimeout(() => {
//         console.log("Now we have the data");
//         callback({ userEmail: email});
//     }, 5000);
// }

// const user = loginUser("justemail@gmail.com", 123456, user => {
//     console.log(user);
// })

// console.log("Finish");

const {print} = require('./print');
const { add } = require('./print');


print('hello man')

let result = add(2,3);

print(result);