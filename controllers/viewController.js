
const Website = require('../models/websitesModel');
const User = require('../models/userModel');
const Purchase = require('../models/purchaseModel');
const catchAsync = require('../utils/catchAsync');
const AppError = require('../utils/appError');

exports.getOverview = catchAsync(async (req,res, next) => {

    // const websites = await Website.find();
    // const businessWebsites = await Website.find({"websiteCategory":"business"});
    // const clothingWebsites = await Website.find({"websiteCategory":"clothing"});
    // const healthWebsites = await Website.find({"websiteCategory":"beauty/health"});
    // const designWebsites = await Website.find({"websiteCategory":"design/event"});


    const websites = await Website.find();
    const landingWebsites = await Website.find({"websiteType":"landing"});
    const landing2Websites = await Website.find({"websiteType":"landing2"});
    const shopifyWebsites = await Website.find({"websiteType":"shopify"});
    // const designWebsites = await Website.find({"websiteType":"design/event"});



    res.status(200)
        .set(
            'Content-Security-Policy',
            "default-src 'self' https://*.stripe.com ;base-uri 'self';block-all-mixed-content;font-src 'self' https: data:;frame-ancestors 'self';img-src 'self' data:;object-src 'none';script-src https://cdnjs.cloudflare.com https://js.stripe.com/v3/ 'self' blob: ;script-src-attr 'none';style-src 'self' https: 'unsafe-inline';upgrade-insecure-requests;"
        )
        .set()
        .render('overview', {
        title: 'All Websites',
        landingWebsites,
        landing2Websites,
        shopifyWebsites,
        websites
    });
});



exports.getWebsite = catchAsync(async (req,res, next) => {

    const website = await Website.findOne({slug: req.params.slug});

    res.status(200)
        .set(
            'Content-Security-Policy',
            "default-src 'self' https://*.stripe.com ;base-uri 'self';block-all-mixed-content;font-src 'self' https: data:;frame-ancestors 'self';img-src 'self' data:;object-src 'none';script-src https://cdnjs.cloudflare.com https://js.stripe.com/v3/ 'self' blob: ;script-src-attr 'none';style-src 'self' https: 'unsafe-inline';upgrade-insecure-requests;"
        )
        .set()
        .render('website', {
        title: `${website.name} Website`,
        website
    });

    if (!website) {
        return next(new AppError('There is no tour with that name', 404));
    }
});


exports.getLoginForm = (req,res) => {
    res.status(200)
        .set(
            'Content-Security-Policy',
            "default-src 'self' https://*.stripe.com ;base-uri 'self';block-all-mixed-content;font-src 'self' https: data:;frame-ancestors 'self';img-src 'self' data:;object-src 'none';script-src https://cdnjs.cloudflare.com https://js.stripe.com/v3/ 'self' blob: ;script-src-attr 'none';style-src 'self' https: 'unsafe-inline';upgrade-insecure-requests;"
        )
        .set()
        .render('login', {
        title: 'Log into your account'
    })
};

exports.getAccount = (req,res) => {
    res.status(200)
        .set(
            'Content-Security-Policy',
            "default-src 'self' https://*.stripe.com ;base-uri 'self';block-all-mixed-content;font-src 'self' https: data:;frame-ancestors 'self';img-src 'self' data:;object-src 'none';script-src https://cdnjs.cloudflare.com https://js.stripe.com/v3/ 'self' blob: ;script-src-attr 'none';style-src 'self' https: 'unsafe-inline';upgrade-insecure-requests;"
        )
        .set()
        .render('account', {
            title: 'Your account'
        })
};



exports.getMyWebsites = catchAsync(async (req,res,next) => {
    // 1) Find all bookings
    const purchases = await Purchase.find({user: req.user.id});

    // 2) Find websites with the returned IDs
    const websiteIDs = purchases.map(el => el.website);
    const websites = await Website.find({ _id: { $in: websiteIDs }});

    res.status(200)
        .set(
            'Content-Security-Policy',
            "default-src 'self' https://*.stripe.com ;base-uri 'self';block-all-mixed-content;font-src 'self' https: data:;frame-ancestors 'self';img-src 'self' data:;object-src 'none';script-src https://cdnjs.cloudflare.com https://js.stripe.com/v3/ 'self' blob: ;script-src-attr 'none';style-src 'self' https: 'unsafe-inline';upgrade-insecure-requests;"
        )
        .set()
        .render('purchases', {
        title: 'My Websites',
            websites
    })
    //
});



exports.getSignupForm = (req,res) => {
    res.status(200)
        .set(
            'Content-Security-Policy',
            "default-src 'self' https://*.stripe.com ;base-uri 'self';block-all-mixed-content;font-src 'self' https: data:;frame-ancestors 'self';img-src 'self' data:;object-src 'none';script-src https://cdnjs.cloudflare.com https://js.stripe.com/v3/ 'self' blob: ;script-src-attr 'none';style-src 'self' https: 'unsafe-inline';upgrade-insecure-requests;"
        )
        .set()
        .render('signup', {
        title: 'Sign up for account'
    })
};



exports.updateUserData = catchAsync(async (req,res, next) => {
    const updatedUser = await User.findByIdAndUpdate(req.user.id, {
        name: req.body.name,
        email: req.body.email
    }, {
        new: true,
        runValidators: true
    });
    res.status(200).render('account', {
        title: 'Your account',
        user: updatedUser
    })
});