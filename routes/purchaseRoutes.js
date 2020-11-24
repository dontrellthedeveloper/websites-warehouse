const express = require('express');
const purchaseController = require('./../controllers/purchaseController');
const authController = require('./../controllers/authController');

const router = express.Router({ mergeParams: true});


router.use(authController.protect);

router.get('/checkout-session/:websiteId', purchaseController.getCheckoutSession);

router.use(authController.restrictTo('admin'));

router.route('/').get(purchaseController.getAllPurchases).post(purchaseController.createPurchase);

router.route('/:id').get(purchaseController.getPurchase).patch(purchaseController.updatePurchase).delete(purchaseController.deletePurchase);


module.exports = router;