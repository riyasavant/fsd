const express = require("express");
const bodyParser = require("body-parser");
const MongoClient = require("mongodb").MongoClient;
const app = express();

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({
    extended: true
}));

app.use(express.static("public"));

const url = "mongodb://localhost:27017/";
let db;

MongoClient.connect(url, function(err, database) {
    if (err) throw err;
    db = database.db("db")
});

app.post("/success", (req, res) => {
    const data = {
        name : req.body.name,
        email : req.body.email,
        mobile : req.body.mobile,
        password : req.body.password
    }
    db.collection('users').insertOne(data, function(err, collection) {
        if (err) throw err;
        console.log("Record inserted successfully.");
    })
    res.redirect("success.html");
})

app.get("/", (req, res) => {
    res.render("index");
});

app.listen(3000, () => {
    console.log("Server started on port 3000");
});