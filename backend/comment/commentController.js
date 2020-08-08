var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');
router.use(bodyParser.urlencoded({ extended: true }));
router.use(bodyParser.json());
var Comment = require('./comment');
var VerifyToken = require('../auth/verifyToken');
var jwt = require('jsonwebtoken');
var config = require('../config');
var cors = require('cors')
router.use(cors());

router.post('/', VerifyToken, function (req, res){
    Comment.create({
            userName: req.body.userName,
            content: req.body.content,
            date: req.body.date,
            authorID: req.body.authorID,
            authorName: req.body.authorName,
            updateID: req.body.updateID
        },
        function (err, comment) {
            if (err) return res.status(500).send("There was a problem adding the information to the database.");
            res.status(200).send(comment);
        });
});

router.get('/:id',  function (req, res) {
  Comment.findById(req.params.id, function (err, comment) {
        if (err) return res.status(500).send("There was a problem finding the user.");
        if (!comment) return res.status(404).send("No user found.");
        res.status(200).send(comment);
});
});

router.get('/',  function (req, res) {
    Comment.find({"updateID": req.query.updateID}, function (err, comments) {
        if (err) return res.status(500).send("There was a problem finding the users.");
        res.status(200).send(comments);
    });
});

router.delete('/', function (req, res) {
    Comment.remove({}, function (err, comments) {
        if (err) return res.status(500).send("There was a problem finding the users.");
        res.status(200).send(comments);
        console.log(comments)
    });
});

router.delete('/:id', VerifyToken, function (req, res) {
  Comment.findById(req.params.id, function (err, comment) {
        if (err) return res.status(500).send("There was a problem finding the user.");
        if (!comment) return res.status(404).send("No user found.");
        if(comment.authorID === req.userId){comment.remove({})}
        res.status(200).send(comment);
});
})

module.exports = router;
