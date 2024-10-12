// **File Creation Methods**
const file = require('fs');

// 1. fs.writeFile() - Creates a new file or overwrites an existing file.

// file.writeFile('demo.txt', "Hello JS", (err) => {
//     if (err) throw err;
//     console.log('File Created');
// });

// 2. fs.appendFile() - Adds new content to an existing file.
// file.appendFile('demo.txt', '\nHey I am new append text', (err) => {
//     if (!err){
//         console.log('Content Added');
//     }else{
//         console.log("Something went wrong");
//     }
// });

// 3. fs.open() - Manually opens a file with specific flags
// file.open("demo1.txt", "a+", (err, fd) => {
//     if (err){
//         console.log("Something went wrong");
//     }else{
//         console.log("File Opened");
//     }
// });

// 4. fs.promises - Promises-based API for asynchronous file operations.
// file.promises.writeFile('demo2.txt', "Hello JS")
//     .then(() => console.log('File Created'))
//     .catch((err) => console.log(err));

// 5. fs.writeFileSync() - Synchronous version of fs.writeFile(); creates/overwrites file in a blocking manner.
try {
    file.writeFileSync('demo3.txt', 'Hello JS');
    console.log('File Created');
}
catch (err) {
    console.log(err);
}
