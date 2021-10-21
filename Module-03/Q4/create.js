const fs = require('fs');
console.log("Creating New Files"); 

// Asynchronous version to create a new file 
fs.writeFile('input.txt', "Hey", function(err) { 
    if (err) { 
        return console.error(err); 
    } 
    console.log("input.txt has been created successfully"); 
});

// Synchronous version to create a new file 
fs.writeFileSync('read.txt', "Hey");
console.log("read.txt has been created successfully");