const express = require ("express");
const app = express();
const importData = require("./db.json");
const importData1 = require("./dbadat.json");
const importData2 = require("./moderncasual.json");

let port = process.env.PORT;

app.get ("/",(req, res) =>{
    res.send("Selamat Datang di Access Network Society");
});
app.get("/car",(req, res) =>{
    res.send(importData);
});
app.get("/adat",(req, res) =>{
    res.send(importData1);
});
app.get("/modern/casual",(req, res) =>{
    res.send(importData2);
});

app.listen(port,() => {
    console.log('example app is listening on port');
});


