var express = require('express');
var app = express();
var db = require('./db');
// var fs = require('fs');
// var path = require('path');
// require('dotenv/config');
// var multer = require('multer');

var UserController = require('./user/userController');
app.use('/users', UserController);

var AuthController = require('./auth/authController');
app.use('/api/auth', AuthController);

var UpdateController = require('./statusUpdate/updateController');
app.use('/updates', UpdateController);

var CommentController = require('./comment/commentController');
app.use('/comments', CommentController);

module.exports = app;
