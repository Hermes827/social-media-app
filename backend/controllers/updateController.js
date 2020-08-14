var Update = require('../models/update');
var Comment = require('../models/comment');

exports.createUpdate = async function (req, res, next) {
  var update = await Update.create({
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
}

exports.findAllUpdates = async function (req, res, next) {
var updates = await Update.find({}, function (err, updates) {
    if (err) return res.status(500).send("There was a problem finding the updates.");
    res.status(200).send(updates);
});
}

exports.findUpdate = async function (req, res) {
  var update = await Update.findById(req.params.id, function (err, update) {
        if (err) return res.status(500).send("There was a problem finding the update.");
        if (!update) return res.status(404).send("No update found.");
        res.status(200).send(update);
});
}

exports.deleteAllUpdates = async function (req, res) {
    var updates = await Update.remove({}, function (err, updates) {
        if (err) return res.status(500).send("There was a problem finding the updates.");
        res.status(200).send(updates);
    });
};

exports.deleteUpdate = async function (req, res) {
  var update = await Update.findById(req.params.id, function (err, update) {
        if (err) return res.status(500).send("There was a problem finding the update.");
        if (!update) return res.status(404).send("No update found.");
         if(update.authorID === req.userId){
           Comment.deleteMany({"updateID": req.params.id}, function (err, comment) {
             console.log(comment)
           });
          update.remove({})
        }
        res.status(200).send(update);
});
}
