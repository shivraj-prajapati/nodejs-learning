# Day 13 : Node.js File System Functions

- **fs.appendFile()**: 
  - Adds new content to the end of an existing file. If the file doesn't exist, it creates a new one.

- **fs.createWriteStream()**: 
  - Creates a stream for writing data in chunks, which is memory-efficient for handling large files or continuous data.

- **fs.writeFile()**: 
  - Creates a new file or completely replaces the content of an existing file.

- **fs.rename()**: 
  - Renames a file or moves it to a different location asynchronously.

- **fs.unlink()**: 
  - Deletes a file asynchronously, removing it from the file system.

- **fs.renameSync()**: 
  - Synchronously renames or moves a file. It blocks the execution until the task is finished.

- **fs.unlinkSync()**: 
  - Synchronously deletes a file, blocking further code execution until the file is removed.
