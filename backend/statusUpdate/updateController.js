var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');
router.use(bodyParser.urlencoded({ extended: true }));
router.use(bodyParser.json());
var Update = require('./update');
var VerifyToken = require('../auth/verifyToken');
var jwt = require('jsonwebtoken');
var config = require('../config');
var cors = require('cors')
router.use(cors());

router.post('/', VerifyToken, function (req, res) {

    Update.create({
            title: req.body.title,
            content: req.body.content,
            date: req.body.date,
            authorID: req.body.authorID,
            authorName: req.body.authorName
        },
        function (err, update) {
            if (err) return res.status(500).send("There was a problem adding the information to the database.");
            res.status(200).send(update);
        });
});

router.get('/', function (req, res) {
    Update.find({}, function (err, updates) {
        if (err) return res.status(500).send("There was a problem finding the users.");
        res.status(200).send(updates);
        console.log(updates)
    });
});

router.delete('/:id', function (req, res) {
    Update.findByIdAndRemove(req.params.id, function (err, update) {
        if (err) return res.status(500).send("There was a problem deleting the user.");
        res.status(200).send("update: "+ update.title +" was deleted.");
    });
});

module.exports = router;
