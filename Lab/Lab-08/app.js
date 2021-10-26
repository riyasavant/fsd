require('dotenv').config()
const express = require('express');
const request = require('request');
const path = require('path');
const app = express();

app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.get("/", (req, res) => {
    res.render('search');
})

app.post("/result", (req, res) => {
    let movieData = [];
    const movieName = req.body.movie;
    request(`https://api.themoviedb.org/3/search/movie?api_key=${process.env.API_KEY}&query=${movieName}`, async function (error, response, body) {
        console.error('error:', error);
        const resultData = await JSON.parse(body);
        movieData = resultData['results'];
        console.log(movieData);
        res.render('result', {title: movieName, data: movieData});
    });
});

app.listen(8000, () => {
    console.log('Server listening on port 8000');
})