var express = require('express');
var router = express.Router();

const {addOrders, getOrders, getOrdersById} = require('./controller')

router.get('/', getOrders);
router.get('/:id', getOrdersById);
router.post('/',addOrders);


module.exports = router;