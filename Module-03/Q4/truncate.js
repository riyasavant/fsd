const fs = require('fs'); 
console.log("Content of the file before truncate: "); 

// Reading the content of the file before truncate 
console.log(fs.readFileSync('newfile.txt', 'utf8')); 

// Getting the file descriptor of the file 
const fd = fs.openSync('newfile.txt', 'r+'); 

// Synchronous version to truncate a file 
fs.ftruncateSync(fd, 36); 
console.log("Synchronous Truncating of the file: "); 
console.log(fs.readFileSync('newfile.txt', 'utf8')); 

// Asynchronous version to truncate a file 
fs.ftruncate(fd, 24, function(err) { 
    if (err) throw err; 
    console.log("Asynchronous Truncating of the file: "); 
    console.log(fs.readFileSync('newfile.txt', 'utf8')); 
});