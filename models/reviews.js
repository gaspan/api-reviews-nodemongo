var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var ProductSchema = new Schema({
    textReview: {type: String, required: true},
    gambar: {type: String, required: true},
    jmlBintang: {type: Number, required: true},
    user: {type: String, required: true},
    waktu: {type: String, required: true},
});


// Export the model
module.exports = mongoose.model('Reviews', ProductSchema);