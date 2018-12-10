var Reviews = require('../models/reviews');

exports.review_get_all = function (req, res, next) {
    Reviews.find({}, function (err, review) {
        if (err) return next(err);
        res.send(review);
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

    review.save(function (err) {
        if (err) {
            return next(err);
        }
        res.send('Reviews Created successfully')
    })
};

exports.review_details = function (req, res, next) {
    Reviews.findById(req.params.id, function (err, review) {
        if (err) return next(err);
        res.send(review);
    })
};

exports.review_update = function (req, res, next) {
    Reviews.findByIdAndUpdate(req.params.id, {$set: req.body}, function (err, review) {
        if (err) return next(err);
        res.send('Reviews udpated.');
    });
};

exports.review_delete = function (req, res) {
    Reviews.findByIdAndRemove(req.params.id, function (err) {
        if (err) return next(err);
        res.send('Deleted successfully!');
    })
};