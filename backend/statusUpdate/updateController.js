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
var Comment = require('../comment/comment');

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
    });
});

router.get('/:id', function (req, res) {
  Update.findById(req.params.id, function (err, update) {
        if (err) return res.status(500).send("There was a problem finding the user.");
        if (!update) return res.status(404).send("No user found.");
        res.status(200).send(update);
});
})

router.delete('/', function (req, res) {
    Update.remove({}, function (err, updates) {
        if (err) return res.status(500).send("There was a problem finding the users.");
        res.status(200).send(updates);
        console.log(updates)
    });
});

router.delete('/:id', VerifyToken, function (req, res) {
  Update.findById(req.params.id, function (err, update) {
        if (err) return res.status(500).send("There was a problem finding the user.");
        if (!update) return res.status(404).send("No user found.");
         if(update.authorID === req.userId){
           Comment.deleteMany({"updateID": req.params.id}, function (err, comment) {
             console.log(comment)
           });
          update.remove({})
        }
        res.status(200).send(update);
});
})

module.exports = router;
