// // Promise
// const url = `https://jsonplaceholder.typicode.com/todos/1'`;
// fetch (url).then((res) => {
//     return res.json();
//    })
//    .then((data) => {
//     console.log(data);
//    })
//    .catch((err) => {
//     console.error(error);
// //    }); 

// const loadData = async () => {
// try {
//     const url = `https://jsonplaceholder.typicode.com/todos/1'`
//     const res = await fetch(url);
//     const data = await res.json();
//     console.log(data);
// }catch(err) {
//     console.error(err);
// }
// };

// loadData();

function resolveAfter2Seconds() {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve('resolved');
        }, 2000);
    });
}

async function asyncCall() {
    console.log('calling');
    const result = await resolveAfter2Seconds();
    console.log(result);
}

asyncCall();
