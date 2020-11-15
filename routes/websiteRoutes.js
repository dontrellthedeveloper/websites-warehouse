const express = require('express');
const websiteController = require('./../controllers/websiteController');
const authController = require('./../controllers/authController');


const router = express.Router();


router
    .route('/top-5-cheap')
    .get(websiteController.aliasTopWebsites, websiteController.getAllWebsites);

router
    .route('/')
    .get(authController.protect, websiteController.getAllWebsites)
    .post(websiteController.createWebsite);

router
    .route('/:id')
    .get(websiteController.getWebsite)
    .patch(websiteController.updateWebsite)
    .delete(websiteController.deleteWebsite);

module.exports = router;