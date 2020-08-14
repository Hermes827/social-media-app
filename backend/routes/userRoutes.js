var express = require('express');
var router = express.Router();
var UserController = require('../controllers/userController')
var VerifyToken = require('../middleware/verifyToken.js')
var Upload = require('../middleware/upload.js')
var multer = require('multer')
var { v4: uuidv4 } = require('uuid');
uuidv4()
var DIR = '../public/';

var storage = multer.diskStorage({
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

router.get('/', UserController.findAllUsers)
router.get('/find', UserController.findUser)
router.put('/uploadphoto', upload.single('profileImg'), VerifyToken, UserController.uploadPhoto)
router.put('/sendmessage', UserController.sendMessage)
router.delete('/deletemessages', UserController.deleteMessages)

module.exports = router;
