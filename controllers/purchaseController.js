const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);
const Website = require('./../models/websitesModel');
const catchAsync = require('./../utils/catchAsync');
const AppError = require('./../utils/appError');
const factory = require('./handlerFactory');

exports.getCheckoutSession = catchAsync( async (req,res,next) => {
    // 1) Get the currently booked tour
    const website = await Website.findById(req.params.websiteId);

    // 2) Create checkout session
    const session = await stripe.checkout.sessions.create({
        payment_method_types: ['card'],
        success_url: `${req.protocol}://${req.get('host')}/`,
        cancel_url: `${req.protocol}://${req.get('host')}/${website.slug}`,
        customer_email: req.user.email,
        client_reference_id: req.params.websiteId,
        line_items: [
            {
                name: `${website.name} Website`,
                description: website.summary,
                // images: [`https://www.websiteswarehouse.com/img/websites/${website.imageCover}`],
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