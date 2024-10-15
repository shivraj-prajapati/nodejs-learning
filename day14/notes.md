# Day 14: Node.js File System Operations with fs Module

The `fs` module handles file system operations in Node.js.

1. **file.mkdir(path, callback)**: 
   - Creates a directory asynchronously.
   - Error if exists; null if created.

2. **file.readdir(path, callback)**: 
   - Reads directory contents asynchronously.
   - Error if fails; returns array of files if successful.

3. **file.rmdir(path, callback)**: 
   - Removes a directory asynchronously.
   - Error if not found; null if removed.

4. **file.unlink(path, callback)**: 
   - Deletes a file asynchronously.
   - Error if not found; null if deleted.

5. **Synchronous Methods**: 
   - Use `mkdirSync()` for synchronous operations.
   - Handle errors with try/catch.
