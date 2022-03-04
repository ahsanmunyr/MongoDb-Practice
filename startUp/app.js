'use strict';
const fs = require("fs");
const express = require("express");
const passport = require('passport');
const path = require("path");
const bodyParser = require("body-parser");

// const logger = require("morgan");
const cors = require("cors");
global.ROOTPATH = __dirname;
var app = express();


app.use(cors());

app.use(express.static(__dirname + "../views"));

// Express TCP requests parsing
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({
    extended: true
}))
app.set("view engine", "ejs");
app.use(passport.initialize());
// app.use(passport.session());


// create a write stream (in append mode) for system logger
// var accessLogStream = fs.createWriteStream(path.join(__dirname, 'access.log'), { flags: 'a' })
// app.use(logger('common', { stream: accessLogStream }))

// Static rendering
app.use(express.static(path.join(__dirname, "views")));
app.set("view engine", "ejs");

// Route definitions
app.use("/api", require("../routes/api"));

app.use(express.static(__dirname + "/public"));
app.get("/*", function (req, res) {
    res.sendFile(path.resolve(ROOTPATH + '/public/index.html'));
});

passport.serializeUser(function (user, cb) {
    cb(null, user);
});

passport.deserializeUser(function (obj, cb) {
    cb(null, obj);
});
module.exports = app;