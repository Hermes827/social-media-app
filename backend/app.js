var express = require('express');
var db = require('./db');
var cors = require('cors')
var bodyParser = require('body-parser')
const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: false
}));
app.use(cors());
app.use('/public', express.static('public'));

var UserController = require('./user/userController');
app.use('/users', UserController);

var AuthController = require('./auth/authController');
app.use('/api/auth', AuthController);

var UpdateController = require('./statusUpdate/updateController');
app.use('/updates', UpdateController);

var CommentController = require('./comment/commentController');
app.use('/comments', CommentController);

var MailController = require('./mail/mailController');
app.use('/mail', MailController);

module.exports = app;
