const express = require('express');
const websiteController = require('./../controllers/websiteController');
const authController = require('./../controllers/authController');


const router = express.Router();


router
    .route('/top-5-cheap')
    .get(websiteController.aliasTopWebsites, websiteController.getAllWebsites);

router
    .route('/')
    .get(websiteController.getAllWebsites)
    .post(
        authController.protect,
        authController.restrictTo('admin'),
        websiteController.createWebsite
    );

router
    .route('/:id')
    .get(websiteController.getWebsite)
    .patch(
        authController.protect,
        authController.restrictTo('admin'),
        websiteController.updateWebsite
    )
    .delete(
        authController.protect,
        authController.restrictTo('admin'),
        websiteController.deleteWebsite);

module.exports = router;