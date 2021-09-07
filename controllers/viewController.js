
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
    const dynamicWebsites = await Website.find({"websiteType":"dynamic"});
    const staticWebsites = await Website.find({"websiteType":"static"});
    const beautyWebsites = await Website.find({"websiteCategory":"beauty"});
    const brandingWebsites = await Website.find({"websiteCategory":"branding"});
    const clothingWebsites = await Website.find({"websiteCategory":"clothing"});
    const designWebsites = await Website.find({"websiteCategory":"design"});
    const eventWebsites = await Website.find({"websiteCategory":"event"});
    const fitnessWebsites = await Website.find({"websiteCategory":"fitness"});
    const foodWebsites = await Website.find({"websiteCategory":"food"});
    const serviceWebsites = await Website.find({"websiteCategory":"service"});
    const travelWebsites = await Website.find({"websiteCategory":"travel"});
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
        dynamicWebsites,
        staticWebsites,
        beautyWebsites,
        brandingWebsites,
        clothingWebsites,
        designWebsites,
        eventWebsites,
        fitnessWebsites,
        foodWebsites,
        serviceWebsites,
        travelWebsites,
        websites
    });
});



exports.getWebsite = catchAsync(async (req,res, next) => {


    const website = await Website.findOne({slug: req.params.slug});
    const websites = await Website.find();
    const shopifyWebsites = await Website.find({"websiteType":"shopify"});
    const dynamicWebsites = await Website.find({"websiteType":"dynamic"});
    const staticWebsites = await Website.find({"websiteType":"static"});
    const beautyWebsites = await Website.find({"websiteCategory":"beauty"});
    const brandingWebsites = await Website.find({"websiteCategory":"branding"});
    const clothingWebsites = await Website.find({"websiteCategory":"clothing"});
    const designWebsites = await Website.find({"websiteCategory":"design"});
    const eventWebsites = await Website.find({"websiteCategory":"event"});
    const fitnessWebsites = await Website.find({"websiteCategory":"fitness"});
    const foodWebsites = await Website.find({"websiteCategory":"food"});
    const serviceWebsites = await Website.find({"websiteCategory":"service"});
    const travelWebsites = await Website.find({"websiteCategory":"travel"});
    res.status(200)
        .set(
            'Content-Security-Policy',
            "default-src 'self' https://*.stripe.com ;base-uri 'self';block-all-mixed-content;font-src 'self' https: data:;frame-ancestors 'self';img-src 'self' data:;object-src 'none';script-src https://cdnjs.cloudflare.com https://js.stripe.com/v3/ 'self' blob: ;script-src-attr 'none';style-src 'self' https: 'unsafe-inline';upgrade-insecure-requests;"
        )
        .set()
        .render('website', {
        title: `${website.name} Website`,
        shopifyWebsites,
        dynamicWebsites,
        staticWebsites,
            beautyWebsites,
            brandingWebsites,
            clothingWebsites,
            designWebsites,
            eventWebsites,
            fitnessWebsites,
            foodWebsites,
            serviceWebsites,
            travelWebsites,
        websites,
        website,
    });

    if (!website) {
        return next(new AppError('There is no website with that name', 404));
    }
});


exports.getLoginForm = catchAsync(async (req,res) => {

    const shopifyWebsites = await Website.find({"websiteType":"shopify"});
    const dynamicWebsites = await Website.find({"websiteType":"dynamic"});
    const staticWebsites = await Website.find({"websiteType":"static"});
    const beautyWebsites = await Website.find({"websiteCategory":"beauty"});
    const brandingWebsites = await Website.find({"websiteCategory":"branding"});
    const clothingWebsites = await Website.find({"websiteCategory":"clothing"});
    const designWebsites = await Website.find({"websiteCategory":"design"});
    const eventWebsites = await Website.find({"websiteCategory":"event"});
    const fitnessWebsites = await Website.find({"websiteCategory":"fitness"});
    const foodWebsites = await Website.find({"websiteCategory":"food"});
    const serviceWebsites = await Website.find({"websiteCategory":"service"});
    const travelWebsites = await Website.find({"websiteCategory":"travel"});
    res.status(200)
        .set(
            'Content-Security-Policy',
            "default-src 'self' https://*.stripe.com ;base-uri 'self';block-all-mixed-content;font-src 'self' https: data:;frame-ancestors 'self';img-src 'self' data:;object-src 'none';script-src https://cdnjs.cloudflare.com https://js.stripe.com/v3/ 'self' blob: ;script-src-attr 'none';style-src 'self' https: 'unsafe-inline';upgrade-insecure-requests;"
        )
        .set()
        .render('login', {
        title: 'Log into your account',
        shopifyWebsites,
        dynamicWebsites,
        staticWebsites,
            beautyWebsites,
            brandingWebsites,
            clothingWebsites,
            designWebsites,
            eventWebsites,
            fitnessWebsites,
            foodWebsites,
            serviceWebsites,
            travelWebsites
    })
});

exports.getAccount = catchAsync(async (req,res) => {

    const shopifyWebsites = await Website.find({"websiteType":"shopify"});
    const dynamicWebsites = await Website.find({"websiteType":"dynamic"});
    const staticWebsites = await Website.find({"websiteType":"static"});
    const beautyWebsites = await Website.find({"websiteCategory":"beauty"});
    const brandingWebsites = await Website.find({"websiteCategory":"branding"});
    const clothingWebsites = await Website.find({"websiteCategory":"clothing"});
    const designWebsites = await Website.find({"websiteCategory":"design"});
    const eventWebsites = await Website.find({"websiteCategory":"event"});
    const fitnessWebsites = await Website.find({"websiteCategory":"fitness"});
    const foodWebsites = await Website.find({"websiteCategory":"food"});
    const serviceWebsites = await Website.find({"websiteCategory":"service"});
    const travelWebsites = await Website.find({"websiteCategory":"travel"});
    res.status(200)
        .set(
            'Content-Security-Policy',
            "default-src 'self' https://*.stripe.com ;base-uri 'self';block-all-mixed-content;font-src 'self' https: data:;frame-ancestors 'self';img-src 'self' data:;object-src 'none';script-src https://cdnjs.cloudflare.com https://js.stripe.com/v3/ 'self' blob: ;script-src-attr 'none';style-src 'self' https: 'unsafe-inline';upgrade-insecure-requests;"
        )
        .set()
        .render('account', {
            title: 'Your account',
            shopifyWebsites,
            dynamicWebsites,
            staticWebsites,
            beautyWebsites,
            brandingWebsites,
            clothingWebsites,
            designWebsites,
            eventWebsites,
            fitnessWebsites,
            foodWebsites,
            serviceWebsites,
            travelWebsites
        })
});



exports.getMyWebsites = catchAsync(async (req,res,next) => {

    const shopifyWebsites = await Website.find({"websiteType":"shopify"});
    const dynamicWebsites = await Website.find({"websiteType":"dynamic"});
    const staticWebsites = await Website.find({"websiteType":"static"});
    const beautyWebsites = await Website.find({"websiteCategory":"beauty"});
    const brandingWebsites = await Website.find({"websiteCategory":"branding"});
    const clothingWebsites = await Website.find({"websiteCategory":"clothing"});
    const designWebsites = await Website.find({"websiteCategory":"design"});
    const eventWebsites = await Website.find({"websiteCategory":"event"});
    const fitnessWebsites = await Website.find({"websiteCategory":"fitness"});
    const foodWebsites = await Website.find({"websiteCategory":"food"});
    const serviceWebsites = await Website.find({"websiteCategory":"service"});
    const travelWebsites = await Website.find({"websiteCategory":"travel"});
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
            websites,
            shopifyWebsites,
            dynamicWebsites,
            staticWebsites,
            beautyWebsites,
            brandingWebsites,
            clothingWebsites,
            designWebsites,
            eventWebsites,
            fitnessWebsites,
            foodWebsites,
            serviceWebsites,
            travelWebsites
    })
    //
});



exports.getSignupForm = catchAsync(async (req,res) => {

    const shopifyWebsites = await Website.find({"websiteType":"shopify"});
    const dynamicWebsites = await Website.find({"websiteType":"dynamic"});
    const staticWebsites = await Website.find({"websiteType":"static"});
    const beautyWebsites = await Website.find({"websiteCategory":"beauty"});
    const brandingWebsites = await Website.find({"websiteCategory":"branding"});
    const clothingWebsites = await Website.find({"websiteCategory":"clothing"});
    const designWebsites = await Website.find({"websiteCategory":"design"});
    const eventWebsites = await Website.find({"websiteCategory":"event"});
    const fitnessWebsites = await Website.find({"websiteCategory":"fitness"});
    const foodWebsites = await Website.find({"websiteCategory":"food"});
    const serviceWebsites = await Website.find({"websiteCategory":"service"});
    const travelWebsites = await Website.find({"websiteCategory":"travel"});
    res.status(200)
        .set(
            'Content-Security-Policy',
            "default-src 'self' https://*.stripe.com ;base-uri 'self';block-all-mixed-content;font-src 'self' https: data:;frame-ancestors 'self';img-src 'self' data:;object-src 'none';script-src https://cdnjs.cloudflare.com https://js.stripe.com/v3/ 'self' blob: ;script-src-attr 'none';style-src 'self' https: 'unsafe-inline';upgrade-insecure-requests;"
        )
        .set()
        .render('signup', {
        title: 'Sign up for account',
            shopifyWebsites,
            dynamicWebsites,
            staticWebsites,
            beautyWebsites,
            brandingWebsites,
            clothingWebsites,
            designWebsites,
            eventWebsites,
            fitnessWebsites,
            foodWebsites,
            serviceWebsites,
            travelWebsites
    })
});



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