var mongoose = require('mongoose');
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://127.0.0.1:27017/SMAusers');

// MongoDB Configuration
// mongoose.Promise = global.Promise;
// mongoose.connect(dbConfig.db, {
//     useNewUrlParser: true
// }).then(() => {
//     console.log('Database sucessfully connected')
// },
//     error => {
//         console.log('Database could not be connected: ' + error)
//     }
// )
