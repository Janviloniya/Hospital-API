const mongooose = require('mongoose');
// -----------connection to mongodb-------------------//
mongooose.connect('mongodb+srv://divyagaurav:divyagaurav@cluster0.dmvvsbj.mongodb.net/?retryWrites=true&w=majority');
// mongooose.connect('mongodb://localhost/HospitalAPI');

// ---------------establish connection---------------//
const db = mongooose.connection;

db.on('error', console.error.bind(console, "Error connecting to DB"));
// ----------if db is connected --------------//
db.once('open', function () {
    console.log('Connected to Database :: MongoDB');
});

module.exports = db;