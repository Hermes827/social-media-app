var express = require('express');
var app = express();
var db = require('./db');

var UserController = require('./user/userController');
app.use('/users', UserController);

var AuthController = require('./auth/authController');
app.use('/api/auth', AuthController);

var UpdateController = require('./statusUpdate/updateController');
app.use('/updates', UpdateController);

module.exports = app;
