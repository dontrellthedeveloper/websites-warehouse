const express = require('express');
const purchaseController = require('./../controllers/purchaseController');
const authController = require('./../controllers/authController');

const router = express.Router({ mergeParams: true});

router.get('/checkout-session/:websiteId', authController.protect, purchaseController.getCheckoutSession)

module.exports = router;