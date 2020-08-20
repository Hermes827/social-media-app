var express = require('express');
var router = express.Router();
var UserController = require('../controllers/userController')
var VerifyToken = require('../middleware/verifyToken.js')
var Upload = require('../middleware/upload.js')

router.get('/', UserController.findAllUsers)
router.get('/find', UserController.findUser)
router.put('/uploadphoto', Upload.single('profileImg'), VerifyToken, UserController.uploadPhoto)
router.put('/sendmessage', UserController.sendMessage)
router.delete('/deletemessages', UserController.deleteMessages)

module.exports = router;
