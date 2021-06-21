const express = require('express');

const app = express();

//Routes
//make everything inside public available
app.use(express.static("public"));

app.get("/home", (request, response) => {
    // response.send('<h1> Welcome to my server</h1><p>all this on</p> and this another line')
    response.sendFile(__dirname + "/views/home.html");
})

app.get("/discografia", (request, response) => {
    // response.send('<h1> Welcome to my server</h1><p>all this on</p> and this another line')
    response.sendFile(__dirname + "/views/discography.html");
})

app.get("/biografia", (request, response) => {
    // response.send('<h1> Welcome to my server</h1><p>all this on</p> and this another line')
    response.sendFile(__dirname + "/views/biography.html");
})

//1. create an about that says, "<h1> this is an about page?</h1>"
app.listen(7000, () => console.log("app listening on port 2000"));