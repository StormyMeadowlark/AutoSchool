var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const session = require("express-session");
const passport = require("passport");
const LocalStrategy = require("passport-local").Strategy;

var indexRouter = require('./routes/index');
const autoSchoolRouter = require('./routes/autoSchool')
var app = express();

// Set up mongoose connection
const mongoose = require("mongoose");
mongoose.set("strictQuery", false);
const mongoDB ="mongodb+srv://admin:admin@hemauto.wwxxnjt.mongodb.net/?retryWrites=true&w=majority&appName=HEMauto";

main().catch((err) => console.log(err));
async function main() {
  await mongoose.connect(mongoDB);
}

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(session({ secret: "cats", resave: false, saveUninitialized: true }));
app.use(passport.session());
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));



app.use('/', indexRouter);
app.use('/autoSchool', autoSchoolRouter)



module.exports = app;
