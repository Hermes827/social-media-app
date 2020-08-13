// var app = require('./app');
// var express = require('express');
// var port = process.env.PORT || 4000;
//
// app.use((req, res, next) => {
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
//
// var server = app.listen(port, function() {
//   console.log('Express server listening on port ' + port);
// });

////////////////////////////////////////////////////////////////////

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

var UpdateController = require('./controllers/updateController');
app.use('/updates', UpdateController);


// var UserController = require('../controllers/user.controller')
//
// router.get('/', UserController.getUsers)

// module.exports = router;

var CommentController = require('./comment/commentController');
app.use('/comments', CommentController);

var MailController = require('./mail/mailController');
app.use('/mail', MailController);

var port = process.env.PORT || 4000;

app.use((req, res, next) => {
    setImmediate(() => {
        next(new Error('Something went wrong'));
    });
});

app.use(function (err, req, res, next) {
    console.error(err.message);
    if (!err.statusCode) err.statusCode = 500;
    res.status(err.statusCode).send(err.message);
});

var server = app.listen(port, function() {
  console.log('Express server listening on port ' + port);
});
