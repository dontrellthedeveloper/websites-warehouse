const express = require('express');
const viewController = require('../controllers/viewController');

const router = express.Router();


router.get('/', viewController.getOverview);
router.get('/website', viewController.getWebsite);

module.exports = router;