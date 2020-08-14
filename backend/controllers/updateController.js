var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');
router.use(bodyParser.urlencoded({ extended: true }));
router.use(bodyParser.json());
var Update = require('../models/update');
var VerifyToken = require('../auth/verifyToken');
var jwt = require('jsonwebtoken');
var config = require('../config');
// var cors = require('cors')
// router.use(cors());
var Comment = require('../comment/comment');

// router.post('/', VerifyToken, function (req, res) {
//
//     Update.create({
//             title: req.body.title,
//             content: req.body.content,
//             date: req.body.date,
//             authorID: req.body.authorID,
//             authorName: req.body.authorName
//         },
//         function (err, update) {
//             if (err) return res.status(500).send("There was a problem adding the information to the database.");
//             res.status(200).send(update);
//         });
// });

//////////////////////////////////////////////////////////////////

// exports.createUpdate = async function (req, res, next) {
//
//   console.log("hello")
//
//   // Update.create({
//   //         title: req.body.title,
//   //         content: req.body.content,
//   //         date: req.body.date,
//   //         authorID: req.body.authorID,
//   //         authorName: req.body.authorName
//   //     },
//   //     function (err, update) {
//   //         if (err) return res.status(500).send("There was a problem adding the information to the database.");
//   //         res.status(200).send(update);
//   //     });
//
// }

// exports.getUsers = async function (req, res, next) {
//     // Validate request parameters, queries using express-validator
//
//     var page = req.params.page ? req.params.page : 1;
//     var limit = req.params.limit ? req.params.limit : 10;
//     try {
//         var users = await UserService.getUsers({}, page, limit)
//         return res.status(200).json({ status: 200, data: users, message: "Succesfully Users Retrieved" });
//     } catch (e) {
//         return res.status(400).json({ status: 400, message: e.message });
//     }
// }

exports.getUpdates = async function (req, res, next) {
  // console.log("hello")
//     var updates = await Update.find({}, page, limit)
//     try {
//     return res.status(200).json({ status: 200, data: updates, message: "Succesfully Users Retrieved" });
// } catch (e) {
//     return res.status(400).json({ status: 400, message: e.message });
// }

var updates = await Update.find({}, function (err, updates) {
    if (err) return res.status(500).send("There was a problem finding the users.");
    res.status(200).send(updates);
});
}

// var updates = await Update.find({}, function (err, updates) {
//     if (err) return res.status(500).send("There was a problem finding the users.");
//     res.status(200).send(updates);
// });

//////////////////////////////////////////////////////////////////


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

// module.exports = router;
