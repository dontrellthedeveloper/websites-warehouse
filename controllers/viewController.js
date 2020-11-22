
const Website = require('../models/websitesModel');
const catchAsync = require('../utils/catchAsync');
const AppError = require('../utils/appError');

exports.getOverview = catchAsync(async (req,res, next) => {

    const businessWebsites = await Website.find({"websiteCategory":"business"});
    const clothingWebsites = await Website.find({"websiteCategory":"clothing"});
    const healthWebsites = await Website.find({"websiteCategory":"beauty/health"});
    const designWebsites = await Website.find({"websiteCategory":"design/event"});



    res.status(200).render('overview', {
        title: 'All Websites',
        businessWebsites,
        clothingWebsites,
        healthWebsites,
        designWebsites,
    });
});



exports.getWebsite = catchAsync(async (req,res, next) => {

    const website = await Website.findOne({slug: req.params.slug});

    res.status(200).render('website', {
        title: 'Beverly Hills Models',
        website
    });

    if (!website) {
        return next(new AppError('There is no tour with that name', 404));
    }
});


exports.getLoginForm = (req,res) => {
    res.status(200)
        .render('login', {
        title: 'Log into your account'
    })
};

exports.getSignupForm = (req,res) => {
    res.status(200)
        .render('signup', {
        title: 'Sign up for account'
    })
};