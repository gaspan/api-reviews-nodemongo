var express = require('express');
var router = express.Router();

var review_controller = require('../controllers/review');

router.get('/getall', review_controller.review_get_all);

router.post('/create', review_controller.review_create);

router.get('/:id', review_controller.review_details);

router.put('/:id/update', review_controller.review_update);

router.delete('/:id/delete', review_controller.review_delete);


module.exports = router;