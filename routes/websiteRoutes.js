const express = require('express');
const websiteController = require('./../controllers/websiteController');

const router = express.Router();

router.param('id', websiteController.checkID);

router
    .route('/')
    .get(websiteController.getAllWebsites)
    .post(websiteController.createWebsite);

router
    .route('/:id')
    .get(websiteController.getWebsite)
    .patch(websiteController.updateWebsite)
    .delete(websiteController.deleteWebsite);

module.exports = router;