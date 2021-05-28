const express = require('express');
const path = require('path');
const app = express();
const ejs = require('ejs');

app.use(express.static('public'))

//Template Engine
app.set("view engine", "ejs");

app.get("/", (req, res) => {
  res.render('index');
});

app.get("/about", (req, res) => {
  res.render('about');
});

app.get("/post", (req, res) => {
  res.render('post');
});

app.get("/add_post", (req, res) => {
  res.render('add_post');
});

const port = 3000;
app.listen(port, () => {
  console.log(`Sunucu ${port} portunda başlatıldı..`);
});