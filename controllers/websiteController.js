const Website = require('../models/websitesModel');
const APIFeatures = require('./../utils/apiFeatures');
const AppError = require('./../utils/appError');
const catchAsync = require('./../utils/catchAsync');
const factory = require('./handlerFactory');

exports.aliasTopWebsites = (req, res, next) => {
    req.query.limit = '5';
    req.query.sort = 'price';
    req.query.fields = 'name,price,summary';
    next();
};

exports.getAllWebsites = catchAsync(async (req, res, next) => {
        // EXECUTE QUERY
        const features = new APIFeatures(Website.find(), req.query)
            .filter()
            .sort()
            .limitFields()
            .paginate();
        const websites = await features.query;

        // SEND RESPONSE
        res.status(200).json({
            status: 'success',
            results: websites.length,
            data: {
                websites
            }
        })
});




exports.getWebsite = catchAsync(async (req, res, next) => {

        const website = await Website.findById(req.params.id);
        if (!website) {
            return next(new AppError('No website found with that ID', 404))
        }
        res.status(200).json({
            status: "success",
            data: {
                website
            }
        })

});




exports.createWebsite = catchAsync(async (req, res, next) => {
        const newWebsite = await Website.create(req.body);

        res.status(201).json({
            status: 'success',
            data: {
                website: newWebsite
            }
        });
});





exports.updateWebsite = catchAsync(async (req, res, next) => {
        const website = await Website.findByIdAndUpdate(req.params.id, req.body, {
            new: true,
            runValidators: true
        });
        if (!website) {
            return next(new AppError('No website found with that ID', 404))
        }
        res.status(200).json({
            status: 'success',
            data: {
                website
            }
        });
});




exports.deleteWebsite = factory.deleteOne(Website);




