var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var ProductSchema = new Schema({
    textReview: {type: String, required: true},
    gambar: {type: String, required: true},
    jmlBintang: {type: Number, required: true},
});


// Export the model
module.exports = mongoose.model('Reviews', ProductSchema);