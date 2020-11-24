const mongoose = require('mongoose');

const purchaseSchema = new mongoose.Schema({
    website: {
        type: mongoose.Schema.ObjectId,
        ref: 'Website',
        required: [true, 'Purchase must belong to a Website!']
    },
    user: {
        type: mongoose.Schema.ObjectId,
        ref: 'User',
        required: [true, "Purchase must belong to a User!"]
    },
    price: {
        type: Number,
        required: [true, 'Purchase must have a price.']
    },
    createdAt: {
        type: Date,
        default: Date.now()
    },
    paid: {
        type: Boolean,
        default: true
    }
});

purchaseSchema.pre(/^find/, function(next) {
    this.populate('user').populate({
        path: 'website',
        select: 'name'
    })
});

const Purchase = mongoose.model('Purchase', purchaseSchema);

module.exports = Purchase;