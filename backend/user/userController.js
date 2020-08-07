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

// router.post('/user-profile', upload.single('profileImg'), (req, res, next) => {
//     const url = req.protocol + '://' + req.get('host')
//     const user = new User({
//         _id: new mongoose.Types.ObjectId(),
//         name: req.body.name,
//         profileImg: url + '/public/' + req.file.filename
//     });
//     user.save().then(result => {
//         res.status(201).json({
//             message: "User registered successfully!",
//             userCreated: {
//                 _id: result._id,
//                 profileImg: result.profileImg
//             }
//         })
//     }).catch(err => {
//         console.log(err),
//             res.status(500).json({
//                 error: err
//             });
//     })
// })

// router.post('/', function (req, res) {
//     User.create({
//             name : req.body.name,
//             email : req.body.email,
//             password : req.body.password
//         },
//         function (err, user) {
//             if (err) return res.status(500).send("There was a problem adding the information to the database.");
//             res.status(200).send(user);
//         });
// });

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

router.put('/addfriend', VerifyToken, function (req, res) {
  // console.log(req.query.userID)
  console.log(req.userId)
  // User.findById(req.userId, function (err, user) {
  //     if(err){
  //       console.log(err)
  //     } else {
  //       console.log("Updated User : ", user);
  //           res.status(200).send(user);
  //       }
  //     });
  User.findByIdAndUpdate(req.query.userID, { $push: {"pendingFriends": req.userId} }, function (err, user) {
      if(err){
        console.log(err)
      } else {
        console.log("Updated User : ", user);
            res.status(200).send(user);
        }
      });
    });

router.put('/uploadphoto', upload.single('profileImg'), VerifyToken, function (req, res) {
  const url = req.protocol + '://' + req.get('host')
  console.log("hello " + url)
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

      User.findByIdAndUpdate(req.query.userID, { $push: {"mailBox": req.body} }, function (err, user) {
          if(err){
            console.log(err)
          } else {
            console.log("Updated User : ", user);
                res.status(200).send(user);
            }
          });
    });

module.exports = router;

////////////////////////////////////////////

// User model
// let User = require('../models/User');

// router.post('/user-profile', upload.single('profileImg'), (req, res, next) => {
//   console.log(req.file)
//     const url = req.protocol + '://' + req.get('host')
//     const user = new User({
//         _id: new mongoose.Types.ObjectId(),
//         name: req.body.name,
//         profileImg: url + '/public/' + req.file.filename
//     });
//     user.save().then(result => {
//         res.status(201).json({
//             message: "User registered successfully!",
//             userCreated: {
//                 _id: result._id,
//                 profileImg: result.profileImg
//             }
//         })
//     }).catch(err => {
//         console.log(err),
//             res.status(500).json({
//                 error: err
//             });
//     })
// })
//
// router.get("/", (req, res, next) => {
//     User.find().then(data => {
//         res.status(200).json({
//             message: "User list retrieved successfully!",
//             users: data
//         });
//     });
// });
