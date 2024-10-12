# Day 12: File Reading in Node.js

- Explored various methods to read files using the `fs` (File System) module in Node.js.

1. **`file.readFile()`**:
   - **Type**: Non-blocking
   - **Use Case**: Reads a file asynchronously, allowing other operations to continue while the file is being processed.

2. **`file.readFileSync()`**:
   - **Type**: Blocking
   - **Use Case**: Synchronously reads the file, halting the program until the content is read, useful when subsequent operations depend on file data.

3. **`file.createReadStream()`**:
   - **Type**: Stream-based, Non-blocking
   - **Use Case**: Efficiently processes large files by reading them in chunks, without loading the entire file into memory at once.
   