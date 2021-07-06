var express = require('express');
var router = express.Router();
var mainController = require('../controllers/mainController');


router.get('/', mainController.index);
router.get('/detail/:id', mainController.detail);

module.exports = router;
