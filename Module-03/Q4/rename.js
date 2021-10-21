const fs = require('fs'); 
console.log("Renaming the file"); 

// Asynchronous version to rename the file 
fs.rename('./newfile.txt', 'mytext.txt', function(err) { 
    if (err) { 
        console.error(err); 
    } 
    console.log("Asynchronous Rename: newfile.txt --> mytext.txt"); 
    console.log("The Files are renamed Successfully"); 
}); 

// Synchronous version to rename the file 
fs.renameSync('newdoc.txt', 'mydoc.txt') 
console.log("Synchronous Rename: newdoc.txt --> mydoc.txt");