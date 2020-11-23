const Website = require('../models/websitesModel');
const factory = require('./handlerFactory');




exports.aliasTopWebsites = (req, res, next) => {
    req.query.limit = '5';
    req.query.sort = 'price';
    req.query.fields = 'name,price,summary';
    next();
};


exports.getAllWebsites = factory.getAll(Website);
exports.getWebsite = factory.getOne(Website);
exports.createWebsite = factory.createOne(Website);
exports.updateWebsite = factory.updateOne(Website);
exports.deleteWebsite = factory.deleteOne(Website);




