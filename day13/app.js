
const file = require('fs');

// 1. file.appendFile() - Appends content to an existing file or creates a new file if it doesn't exist.
// file.appendFile("demo.txt", "Added new content", (err) => {
//     if (err) {
//         console.log(err);
//     } else {
//         console.log("Content Added");
//     }
// });

// 2. file.createWriteStream() - Creates a writable stream for a file.
// const writestream = file.createWriteStream("demo.txt");
// writestream.write("Hello JS");
// writestream.write("\nHello Angular");
// writestream.write("\nHello NodeJS");
// writestream.end();
// writestream.on('finish', () => {
//     console.log("Write Completed");
// });

// 3. file.writeFile() - Creates or overwrites a file with the specified content.
// file.writeFile("demo.txt", "This content will overwrite the file.\n", (err) => {    
//     if (err) {
//         console.log(err);
//     } else {
//         console.log("Content Overwritten");
//     }
// });


// 4. file.rename() - Renames a file asynchronously.
// file.rename("demo.txt", "newdemo.txt", (err) => {    
//     if (err) {
//         console.log(err);
//     } else {
//         console.log("File Renamed");
//     }
// });

// 5. fs.unlink() - Deletes a file asynchronously.
// file.unlink("try.txt", (err) => {
//     if (err) {
//         console.log(err);
//     } else {
//         console.log("File Deleted");
//     }
// });

// 6. file.renameSync() - Renames a file synchronously.
// try{    
//     file.renameSync("newdemo.txt", "demo.txt");
// } catch (err) {
//     console.log(err);
// }

// 7. file.unlinkSync() - Deletes a file synchronously.
try{    
    file.unlinkSync("try.txt");
} catch (err) {
    console.log(err);
}

