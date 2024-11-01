const express = require('express');
const { orders, create } = require('../controllers/orderController');
const router = express.Router();

router.get('/orders', orders);
router.post('/create', create);

module.exports = router;