// const util = require("util");
// const multer = require("multer");
// const GridFsStorage = require("multer-gridfs-storage");
//
// var storage = new GridFsStorage({
//   url: "mongodb://127.0.0.1:27017/SMAusers",
//   options: { useNewUrlParser: true, useUnifiedTopology: true },
//   file: (req, file) => {
//     const match = ["image/png", "image/jpeg"];
//
//     if (match.indexOf(file.mimetype) === -1) {
//       const filename = `${Date.now()}-bezkoder-${file.originalname}`;
//       return filename;
//     }
//
//     return {
//       bucketName: "photos",
//       filename: `${Date.now()}-bezkoder-${file.originalname}`
//     };
//   }
// });
//
// var uploadFile = multer({ storage: storage }).single("file");
// var uploadFilesMiddleware = util.promisify(uploadFile);
// module.exports = uploadFilesMiddleware;

var multer = require('multer')
var { v4: uuidv4 } = require('uuid');
uuidv4()
var DIR = './public/';

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

module.exports = upload;
