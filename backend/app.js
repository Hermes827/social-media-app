var express = require('express');
var app = express();
var db = require('./db');
var bodyParser = require('body-parser')
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: false
}));
var cors = require('cors')
app.use(cors());
app.use('/public', express.static('public'));

var UpdateRouter = require('./routes/updateRoutes');
app.use('/updates', UpdateRouter);

var UserRouter = require('./routes/userRoutes');
app.use('/users', UserRouter);

var AuthRouter = require('./routes/authRoutes');
app.use('/api/auth', AuthRouter);

var CommentRouter = require('./routes/commentRoutes');
app.use('/comments', CommentRouter);

var MailRouter = require('./routes/mailRoutes');
app.use('/mail', MailRouter);

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
