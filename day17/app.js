// Here we are learn about promise in nodejs
/*
A Promise in Node.js is an object that represents the eventual completion (or failure) of an
asynchronous operation. It's used to handle tasks like file reading, API requests, or database queries
without falling into callback hell. A Promise has three states: pending, resolved (success), 
and rejected (failure). You handle success with .then() and errors with .catch().
*/

const myPormise = new Promise((resolve, reject) => {
    const success = Math.random() > 0.5;
    if (success){
        resolve('Success');
    } else{
        reject('Failure');
    }
});
// Handling Promise with .then() and .catch()
myPormise
    .then((msg) => {console.log("Resolved : ", msg);})
    .catch((err) => {console.log("Rejected : ", err);});


// 2. Promise.all() - Waits for all promises to complete
const prom1 = Promise.resolve('Promise 1');
const prom2 = Promise.resolve('Promise 2');
const prom3 = Promise.resolve('Promise 3');
const prom4 = Promise.resolve('Promise 4');

Promise.all([prom1, prom2, prom3, prom4])
    .then((msg) => {
        console.log('All promises resolved', msg);
    })
    .catch((err) => {
        console.log('One of the promises failed', err);
    });

// 3. Promise.race() - Returns result of the first completed promise
const prom5 = new Promise((resolve) => setTimeout(resolve, 1000, "Promise 5"));
const prom6 = new Promise((resolve) => setTimeout(resolve, 500, "Promise 6"));

Promise.race([prom5, prom6])
.then((msg) => {
    console.log("Promise : ", msg);
})


// 4. Using async/await - Simplified handling of promises
async function fetchdata(){
    try{
        let result = await new Promise((resolve) => {
            setTimeout(resolve, 1000, "Data fetched");
        });
        console.log("Data : ", result);

        const result2 = await Promise.resolve("Data fetched 2");
        console.log(result2);

    } catch (err){
        console.log("Error : ", err);
    }
        
}
fetchdata();

// 5. async/await with multiple awaits
async function fetchMultiple(){
    try{
        const resilt1 = await Promise.resolve("Data 1");
        console.log(resilt1);

        const resilt2 = await Promise.resolve("Data 2");
        console.log(resilt2);

        const resilt3 = await Promise.resolve("Data 3");
        console.log(resilt3);

        const resilt4 = await Promise.resolve("Data 4");
        console.log(resilt4);
    } catch (err){
        console.log("Error : ", err);
    }
}
fetchMultiple();


