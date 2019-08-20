const mongoose = require('mongoose');

const schema = mongoose.Schema;

const purchaseSchema = new schema ({
    name: String
});

const Purchased = mongoose.model('Purchased', purchaseSchema);

module.exports = Purchased;