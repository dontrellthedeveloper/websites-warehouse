const express = require('express');
const viewController = require('../controllers/viewController');
const authController = require('../controllers/authController');


const router = express.Router();


router.use(authController.isLogginIn);

router.get('/', viewController.getOverview);
// router.get('/website', viewController.getWebsite);
router.get('/website/:slug', viewController.getWebsite);
router.get('/login', viewController.getLoginForm);
router.get('/signup', viewController.getSignupForm);

module.exports = router;