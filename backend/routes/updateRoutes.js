var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');
router.use(bodyParser.urlencoded({ extended: true }));
router.use(bodyParser.json());

var UpdateController = require('../controllers/updateController')

// router.get('/', function (req, res) {
// //   console.log("hello")
// // console.log(UpdateController.getUpdates)
//
// })
router.get('/', UpdateController.getUpdates)
// router.post('/updates', UpdateController.createUpdate)


module.exports = router;


// // var express = require('express');
// // var router = express.Router();
//
// // Home page route.
// router.get('/', function (req, res) {
//   res.send('Wiki home page');
// })
//
// // About page route.
// router.get('/about', function (req, res) {
//   res.send('About this wiki');
// })
//
// module.exports = router;
