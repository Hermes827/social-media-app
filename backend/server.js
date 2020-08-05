var app = require('./app');
var express = require('express');
var port = process.env.PORT || 4000;
// app.use('/public', express.static('public'));

app.use((req, res, next) => {
    // Error goes via `next()` method
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
