// app.js

var express = require('express');
var bodyParser = require('body-parser');

var reviews = require('./routes/reviews'); 
var app = express();


// Set up mongoose connection
var mongoose = require('mongoose');
var dev_db_url = 'mongodb://reviewsUser:bukan15@ds129904.mlab.com:29904/reviewsdb';
var mongoDB = process.env.MONGODB_URI || dev_db_url;
mongoose.connect(mongoDB);
mongoose.Promise = global.Promise;
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use('/reviews', reviews);

// var port = 3000;
var port = process.env.PORT || 8000;

app.listen(port, () => {
    console.log('Server is up and running on port numner ' + port);
});
