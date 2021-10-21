const fs = require('fs'); 
console.log("Deleting the Files"); 

// Asynchronous version to delete a file 
fs.unlink('./a.txt', function(err) { 
    if (err) { 
        return console.error(err); 
    } 
    console.log("a.txt has been removed successfully"); 
}); 

// Synchronous version to delete a file 
fs.unlinkSync('./b.txt'); 
console.log("b.txt has been removed successfully");