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
const upload = require("../middleware/upload");

// var fs = require('fs');
// var path = require('path');
// require('dotenv/config');
// var multer = require('multer');

// CREATES A NEW USER
router.post('/', function (req, res) {
    User.create({
            name : req.body.name,
            email : req.body.email,
            password : req.body.password
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


router.post('/uploadphoto', function (req, res) {
  // console.log("hello")
  // console.log(req.body)
    // res.status(200).send(res);
  const uploadFile = async (req, res) => {
    try {
      await upload(req, res);

      console.log(req.file);
      if (req.file == undefined) {
        return res.send(`You must select a file.`);
      }
      return res.send(`File has been uploaded.`);
    } catch (error) {
      console.log(error);
      return res.send(`Error when trying upload image: ${error}`);
    }
  };
});

module.exports = router;
