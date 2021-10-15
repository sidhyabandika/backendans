const express = require ("express");
const app = express();
const importData = require("./db.json");

let port = process.env.PORT;

app.get ("/",(req, res) =>{
    res.send("Selamat Datang di Access Network Society");
});
app.get("/car",(req, res) =>{
    res.send(importData);
});


app.listen(port,() => {
    console.log('example app is listening on port');
});


