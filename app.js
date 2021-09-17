//jshint esversion:6
const express = require("express");
const bodyParser = require("body-parser");
const date = require(__dirname + "/date.js")

const app = express();
const items = [];
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));
app.set('view engine', 'ejs');

app.get("/", function(req, res) {
  const day = date.getDate();
  res.render("list", {
    dayName: day,
    newItems: items
  });

});
app.post("/", function(req, res) {
  const item = req.body.items;
  items.push(item);
  res.redirect("/");
});
app.get("/try", function(req, res) {
  res.render("try");
});

app.listen(3000, function() {
  console.log("server started!!");
});
