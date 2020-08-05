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

// app.use((req, res, next) => {
//     // Error goes via `next()` method
//     setImmediate(() => {
//         next(new Error('Something went wrong'));
//     });
// });
//
// app.use(function (err, req, res, next) {
//     console.error(err.message);
//     if (!err.statusCode) err.statusCode = 500;
//     res.status(err.statusCode).send(err.message);
// });

var UserController = require('./user/userController');
app.use('/users', UserController);

var AuthController = require('./auth/authController');
app.use('/api/auth', AuthController);

var UpdateController = require('./statusUpdate/updateController');
app.use('/updates', UpdateController);

var CommentController = require('./comment/commentController');
app.use('/comments', CommentController);

module.exports = app;
