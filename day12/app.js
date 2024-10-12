const file = require('fs');

//1. file.readFile : Non-blocking file reading, allowing other operations to continue while the file is being read.
// file.readFile('demo.txt', 'utf8', (err, data) => {
//     if (err) {
//         console.log(err);
//     } else {
//         console.log('File Content:', data);
//     }
// });


//2. file.readFileSync: Blocking file reading, useful when the program needs to wait for the file content before proceeding.
// try{
//     const data = file.readFileSync('demo.txt', 'utf8');
//     console.log(data);
// } catch (err) {
//     console.log(err);
// }

//3. file.createReadStream: Memory-efficient data processing, especially useful for large files to read data in chunks.
const readData = file.createReadStream("demo.txt", "utf8");
readData.on('data', (chunk) => {
    console.log(chunk);
});
readData.on('end', (err) => {
    console.error(err);
});


