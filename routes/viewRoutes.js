const express = require('express');
const viewController = require('../controllers/viewController');
const authController = require('../controllers/authController');


const router = express.Router();


router.get('/', authController.isLogginIn, viewController.getOverview);
router.get('/website/:slug', authController.isLogginIn, viewController.getWebsite);
router.get('/login', authController.isLogginIn, viewController.getLoginForm);
router.get('/signup', authController.isLogginIn, viewController.getSignupForm);
router.get('/me', authController.protect, viewController.getAccount);
router.post('/submit-user-data', authController.protect,  viewController.updateUserData);

module.exports = router;