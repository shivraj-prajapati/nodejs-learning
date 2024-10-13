const file = require('fs'); 

// 1. file.mkdir(): Creates a new directory asynchronously.
// file.mkdir("newdir", (err) => {
//     if (err) {
//         console.log("Directory is already created");
//     } else {
//         console.log("Directory Created");
//     }
// });

// 2. file.readdir() :This method asynchronously reads the content of a directory.
// file.readdir("newdir", (err, files) => {
//     if (err) {
//         console.log("Something went wrong");
//     }
//     else {
//         console.log("Files in the directory: ", files);
//     }
// });

// 3. file.rmdir(): Removes a directory asynchronously.
// file.rmdir("trial", (err) => {
//     if (err) {
//         console.log("Directory does not exist");
//     } else {
//         console.log("Directory Removed");
//     }
// });

// 4. file.unlink(): Deletes a file asynchronously.
try{
    file.mkdirSync('trial');
    console.log("Directory Created");
}  catch {
    console.log("Some Issues.!");
}