var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');
router.use(bodyParser.urlencoded({ extended: true }));
router.use(bodyParser.json());
var User = require('./User');
var VerifyToken = require('../auth/verifyToken');
var jwt = require('jsonwebtoken');
var config = require('../config');
var cors = require('cors')
router.use(cors());
let multer = require('multer'),
    mongoose = require('mongoose')
const { v4: uuidv4 } = require('uuid');
uuidv4()
const DIR = './public/';
var Mail = require('../mail/mail');

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, DIR);
    },
    filename: (req, file, cb) => {
        const fileName = file.originalname.toLowerCase().split(' ').join('-');
        cb(null, uuidv4() + '-' + fileName)
    }
});

var upload = multer({
    storage: storage,
    fileFilter: (req, file, cb) => {
        if (file.mimetype == "image/png" || file.mimetype == "image/jpg" || file.mimetype == "image/jpeg") {
            cb(null, true);
        } else {
            cb(null, false);
            return cb(new Error('Only .png, .jpg and .jpeg format allowed!'));
        }
    }
});

//////////////////////////////////////////////////////////

router.post('/', upload.single('profileImg'), (req, res, next) => {
  const url = req.protocol + '://' + req.get('host')
    User.create({
            name : req.body.name,
            email : req.body.email,
            password : req.body.password,
            profileImg: url + '/public/' + req.file.filename
        },
        function (err, user) {
            if (err) return res.status(500).send("There was a problem adding the information to the database.");
            res.status(200).send(user);
        });
});

router.get('/', function (req, res) {
    User.find({}, function (err, users) {
        if (err) return res.status(500).send("There was a problem finding the users.");
        res.status(200).send(users);
    });
});

router.get('/find', function (req, res) {
    User.findById(req.query.userID, function (err, users) {
        if (err) return res.status(500).send("There was a problem finding the users.");
        res.status(200).send(users);
    });
});

// router.put('/addfriend', VerifyToken, function (req, res) {
//   // console.log(req.query.userID)
//   console.log(req.userId)
//   // User.findById(req.userId, function (err, user) {
//   //     if(err){
//   //       console.log(err)
//   //     } else {
//   //       console.log("Updated User : ", user);
//   //           res.status(200).send(user);
//   //       }
//   //     });
//   User.findByIdAndUpdate(req.query.userID, { $push: {"pendingFriends": req.userId} }, function (err, user) {
//       if(err){
//         console.log(err)
//       } else {
//         console.log("Updated User : ", user);
//             res.status(200).send(user);
//         }
//       });
//     });

router.put('/uploadphoto', upload.single('profileImg'), VerifyToken, function (req, res) {
  const url = req.protocol + '://' + req.get('host')
  User.findByIdAndUpdate(req.userId, {profileImg: url + '/public/' + req.file.filename}, function (err, user) {
      if(err){
        console.log(err)
      } else {
        console.log("Updated User : ", user);
            res.status(200).send(user);
        }
      });
    });

router.put('/sendmessage', function(req, res){
  Mail.create({
          content: req.body.content,
          date: req.body.date,
          authorID: req.body.authorID,
          authorName: req.body.authorName
      },
      function (err, mail) {
          User.findByIdAndUpdate(req.query.userID, { $push: {"mailBox": mail} }, function (err, user) {
              if(err){
                console.log(err)
              } else {
                console.log("Updated User : ", user);
                    res.status(200).send(user);
                }
              });
      });
});

router.put('/deletemessages', function(req, res){
  User.findByIdAndUpdate(req.query.userID, { $set: {"mailBox": []} }, function (err, user) {
      if(err){
        console.log(err)
      } else {
        console.log("Updated User : ", user);
            res.status(200).send(user);
        }
      });
});

module.exports = router;
