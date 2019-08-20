const mongoose = require('mongoose');


const Schema = mongoose.Schema;
const bookSchema = new Schema({
    title: {
        type: String,
        required: true,
        trim: true
    },
    author: {
        type: Number
    },
    description: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    owner: {
        type: Schema.Types.ObjectId,
        required: true,
        ref: 'User'
    }
})

const Book = mongoose.model('Book', bookSchema)

module.exports = Book