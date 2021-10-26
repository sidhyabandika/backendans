const express = require ("express");
const app = express();
const importData = require("./db.json");
const importData1 = require("./dbadat.json");
const importData2 = require("./dbmoderncasualpria.json");
const importData3 = require("./dbmoderncasualwanita.json");
const importData4 = require("./fashionpantaipria.json");
const importData5 = require("./fashionpantaiwanita.json");
const importData6 = require("./old.json");
const importData7 = require("./vintagepria.json");
const importData8 = require("./vintagewanita.json");
const importData9 = require("./gunung.json");

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
app.get("/gaya/old",(req, res) =>{
    res.send(importData6);
});
app.get("/vintage/pria",(req, res) =>{
    res.send(importData7);
});
app.get("/vintage/wanita",(req, res) =>{
    res.send(importData8);
});
app.get("/gunung",(req, res) =>{
    res.send(importData8);
});
app.listen(port,() => {
    console.log('example app is listening on port');
});


