const path = require('path');

// 1. basename
// Use-Case: Get the file name from a path.
const filename = path.basename(__filename);
console.log('Basename : ',filename);

// 2. extname
// Use-Case: Get the file extension from a file path.
const ext = path.extname('nodejs-learning/day9/app.js');
console.log('extname:', ext);

// 3. isAbsolute
// Use-Case: Check if a path is an absolute path.
const isAbsolute = path.isAbsolute(__filename)
console.log('isAbsolute:', isAbsolute);

// 4. join
// Use-Case: Combine multiple path segments into one path.
const fullPath = path.join('/nodejs-learning', 'day1', 'day9', 'app.js');
console.log('join:', fullPath);

// 5. resolve
// Use-Case: Resolve a relative path into an absolute path.
const resolvedPath = path.resolve('day10', 'new.txt');
console.log('resolve:', resolvedPath);

// 6. relative
// Use-Case: Get the relative path from one path to another.
const relativePath = path.relative('/users/john', '/git-node-js/john/nodejs-learning/app.js');
console.log('relative:', relativePath);

// 7. parse
// Use-Case: Parse a path into an object with root, dir, base, ext, and name properties.
const parsedPath = path.parse('git-node-js/john/nodejs-learning/app.js');
console.log('parse:', parsedPath);

// 8. format
// Use-Case: Convert an object with path properties back into a string path.
const formattedPath = path.format({
  dir: 'git-node-js\\john\\nodejs-learning',
  base: 'app.js'
});
console.log('format:', formattedPath);
