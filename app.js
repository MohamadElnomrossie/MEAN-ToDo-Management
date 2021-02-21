var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const {router} = require('./routes/auth')
const {connect}=require('./config/db')
const {todos}=require('./routes/todos')
const cors=require('cors')
var app = express();
app.use(cors())
connect()
// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use("/auth",router)
app.use("/todos",todos)




module.exports = app;
