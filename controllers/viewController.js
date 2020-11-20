
const Website = require('../models/websitesModel');
const catchAsync = require('../utils/catchAsync');

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

exports.getWebsite = (req,res) => {
    res.status(200).render('website', {
        title: 'Beverly Hills Models'
    });
};