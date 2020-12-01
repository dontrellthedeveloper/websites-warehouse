const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);
const Website = require('../models/websitesModel');
const Purchase = require('../models/purchaseModel');
const catchAsync = require('../utils/catchAsync');
const AppError = require('../utils/appError');
const factory = require('./handlerFactory');

exports.getCheckoutSession = catchAsync( async (req,res,next) => {
    // 1) Get the currently booked tour
    const website = await Website.findById(req.params.websiteId);

    // 2) Create checkout session
    const session = await stripe.checkout.sessions.create({
        payment_method_types: ['card'],
        success_url: `${req.protocol}://${req.get('host')}/?website=${req.params.websiteId}&user=${req.user.id}&price=${website.price}`,
        cancel_url: `${req.protocol}://${req.get('host')}/website/${website.slug}`,
        customer_email: req.user.email,
        client_reference_id: req.params.websiteId,
        mode: 'payment',
        line_items: [
            {
                name: `${website.name} Website Template`,
                // description: website.summary,
                images: [`https://www.websiteswarehouse.com/img/websites/${website.imageCover}`],
                amount: website.price * 100,
                currency: 'usd',
                quantity: 1
            }
        ]
    });

    // 3) Create session as response
    res.status(200).json({
        status: 'success',
        session
    })
});




exports.createPurchaseCheckout = catchAsync(async (req,res,next) => {
    // this is only temporary because it's un-secure. Anyone can make a booking if they know the url
    const {website, user, price} = req.query;

    if(!website && !user && !price) return next();
    await Purchase.create({website, user, price});

    res.redirect(req.originalUrl.split('?')[0])
});


exports.createPurchase = factory.createOne(Purchase);
exports.getPurchase = factory.getOne(Purchase);
exports.getAllPurchases = factory.getAll(Purchase);
exports.updatePurchase = factory.updateOne(Purchase);
exports.deletePurchase = factory.deleteOne(Purchase);