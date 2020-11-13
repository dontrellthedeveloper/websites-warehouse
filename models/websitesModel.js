const mongoose = require('mongoose');
const websitesSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'A website must have a name'],
        unique: true
    },
    companyType: {
      type: String,
      required: [true, 'A website must have a company type'],
    },
    websiteType: {
        type: String,
        required: [true, 'A website must have a website type'],
    },
    websiteCategory: {
        type: String,
        required: [true, 'A website must have a category'],
    },
    websiteLink: {
        type: String,
        required: [true, 'A website must have a URL link'],
    },
    websiteFeatures: {
        type: String,
        required: [true, 'A website must have a features section PDF'],
    },
    price: {
        type: Number,
        required: [true, 'A website must have a price']
    },
    priceDiscount: Number,
    summary: {
        type: String,
        trim: true,
        required: [true, 'A website must have a summary']
    },
    description: {
        type: String,
        trim: true
    },
    imageCover: {
        type: String,
        required: [true, 'A website must have a cover image']
    },
    images: [String],
    createdAt: {
        type: Date,
        default: Date.now()
    }
});

const Website = mongoose.model('Website', websitesSchema);

module.exports = Website;


// "name":"Beverly Hills Models",
//     "companyType": "modeling agency",
//     "websiteType":"node/express website",
//     "websiteCategory":"beauty",
//     "websiteLink":"https://dontrellthedeveloper.github.io/website-template-modeling-la/",
//     "features":"beverly-hills-models.pdf",
//     "price": 799,
//     "summary":"One of the top modeling agencies in Los Angeles.",
//     "description":"Beverly Hills Models is a leader in talent discovery and model management, widely recognized for its diverse client roster.",
//     "imageCover":"beverly-cover.jpg",
//     "images":[