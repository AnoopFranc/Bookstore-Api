const mongoose = require('mongoose');

const schema = mongoose.Schema;

const purchaseSchema = new schema ({
    book:{
        type: schema.Types.ObjectId,
        ref: 'Book',
        required: true
    },
    email: {
        type: String,
        ref: 'user',
        required: true
    }
});

const Purchased = mongoose.model('Purchased', purchaseSchema);

module.exports = Purchased;