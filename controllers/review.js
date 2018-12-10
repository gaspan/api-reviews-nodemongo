var Reviews = require('../models/reviews');

exports.review_get_all = function (req, res, next) {
    Reviews.find({}).then(data => {
        res.json(data);
    } ).catch(err => {
        res.json(err)
        res.status(500)
    })
};

exports.review_create = function (req, res, next) {
    var review = new Reviews(
        {
            textReview: req.body.textReview,
            gambar: req.body.gambar,
            jmlBintang: req.body.jmlBintang,
            user: req.body.user,
            waktu: req.body.waktu,
        }
    );
    review.save().then(data => {
        res.json('Reviews Created successfully')
    }).catch(err => {
        res.json(err)
        res.status(500)
    })
    
};

exports.review_details = function (req, res, next) {
     Reviews.findById(req.params.id).then(data => {
        res.json(data)
     }).catch(err => {
        res.json(err)
        res.status(500)
     })
    
};

exports.review_update = function (req, res, next) {
    Reviews.findByIdAndUpdate(req.params.id, {$set: req.body}) .then(data => {
        res.json('Reviews udpated.')
    }).catch(err => {
        res.json(err)
        res.status(500)
    })

};

exports.review_delete = function (req, res) {
    // Reviews.findByIdAndRemove(req.params.id, function (err) {
    //     if (err) return next(err);
    //     res.send('Deleted successfully!');
    // })
    Reviews.findByIdAndRemove(req.params.id).then(data => {
        res.json('Deleted successfully!')
    }).catch(err => {
        res.json(err)
        res.status(500)
    })
};