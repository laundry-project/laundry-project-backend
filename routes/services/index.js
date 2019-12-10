var express = require('express');
var router = express.Router();

const {addServices, getServices, getServicesById} = require('./controllers')

router.get('/', getServices);
router.get('/:id', getServicesById);
router.post('/',addServices);


module.exports = router;