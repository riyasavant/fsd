const express = require('express'); 
const fs = require('fs'); 
const app = express();
app.use(express.urlencoded({extended: true})); 
app.get("/", function(req, res) { 
    res.sendFile(__dirname + "/index.html"); 
}); 
app.post('/', function(req, res) { 
    let num1 = Number(req.body.num1); 
    let num2 = Number(req.body.num2); 
    let result = num1 + num2; 
    res.send(`${num1} + ${num2} is ${result}`); 
}); 

app.listen(5000, function(error) { 
    if(error) throw error;
    console.log("Server created Successfully"); 
})