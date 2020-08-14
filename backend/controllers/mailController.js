var Mail = require('../models/mail');

exports.findUserMail = async function (req, res) {
    Mail.findById(req.query.mailID, function (err, mail) {
        if (err) return res.status(500).send("There was a problem finding the users.");
        res.status(200).send(mail);
    });
};

// router.post('/', VerifyToken, function (req, res){
//     Mail.create({
//             userName: req.body.userName,
//             content: req.body.content,
//             date: req.body.date,
//             authorID: req.body.authorID,
//             authorName: req.body.authorName
//         },
//         function (err, mail) {
//             if (err) return res.status(500).send("There was a problem adding the information to the database.");
//             res.status(200).send(mail);
//         });
// });
//
// router.get('/:id',  function (req, res) {
//   Mail.findById(req.params.id, function (err, mail) {
//         if (err) return res.status(500).send("There was a problem finding the user.");
//         if (!mail) return res.status(404).send("No user found.");
//         res.status(200).send(mail);
// });
// });
//
// router.delete('/', function (req, res) {
//     Mail.remove({}, function (err, mails) {
//         if (err) return res.status(500).send("There was a problem finding the users.");
//         res.status(200).send(mails);
//         console.log(mails)
//     });
// });
//
// router.delete('/:id', VerifyToken, function (req, res) {
//   Mail.findById(req.params.id, function (err, mail) {
//         if (err) return res.status(500).send("There was a problem finding the user.");
//         if (!mail) return res.status(404).send("No user found.");
//         if(mail.authorID === req.userId){mail.remove({})}
//         res.status(200).send(mail);
// });
// })
