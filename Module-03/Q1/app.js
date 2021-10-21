const express = require('express');
const app = express();
app.use(express.urlencoded({extended: true})); 
app.set('views', ".");
app.set('view engine', 'hbs');
app.get('/', function(req, res) { 
    res.render('add'); 
}); 
app.post('/', function(req, res) { 
    let num1 = Number(req.body.num1);
    let num2 = Number(req.body.num2); 
    let result = num1 + num2; 
    res.render('add', { num1: num1, num2: num2, result: result }); 
});
app.listen(5000, function(error) { 
    if(error) throw error;
    console.log("Server created Successfully");
})