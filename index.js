const express = require ("express");
const app = express();
const importData = require("./db.json");
const importData1 = require("./dbadat.json");
const importData2 = require("./moderncasualpria.json");
const importData3 = require("./moderncasualwanita.json");
const importData4 = require("./fashionpantaipria.json");
const importData5 = require("./fashionpantaiwanita.json");
const importData6 = require("./old.json");
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
app.get("/modern/casual/pria",(req, res) =>{
    res.send(importData2);
});
app.get("/modern/casual/wanita",(req, res) =>{
    res.send(importData3);
});
app.get("/pantai/pria",(req, res) =>{
    res.send(importData4);
});
app.get("/pantai/wanita",(req, res) =>{
    res.send(importData5);
});
app.get("/old",(req, res) =>{
    res.send(importData6);
});

app.listen(port,() => {
    console.log('example app is listening on port');
});


