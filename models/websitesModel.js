const mongoose = require('mongoose');
const websitesSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'A website must have a name'],
        unique: true
    },
    price: {
        type: Number,
        required: [true, 'A website must have a price']
    }
});

const Website = mongoose.model('Website', websitesSchema);

module.exports = Website;