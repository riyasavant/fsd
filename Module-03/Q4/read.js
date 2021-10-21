const fs = require('fs'); 
console.log("Opening File to Read");
console.log("Reading the file") 

// Asynchronous Version of reading a file 
fs.readFile('./newfile.txt', function(err, fd) { 
    if (err) throw err; 
    console.log("Asynchronous Read: " + fd.toString()); 
}); 

// Synchronous Version of reading a file 
let data = fs.readFileSync('./newfile.txt'); 
console.log("Synchronous Read: " + data.toString());