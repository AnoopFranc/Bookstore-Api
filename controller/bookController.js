const Book = require('../models/book');

exports.createBook = async (req, res) => {
    title = req.body.title,
    author = req.body.author,
    description = req.body.description,
    price = req.body.price
    const book = new Book({
        title : title,
        author : author,
        description : description,
        price: price //es6 short hand syntax
    })

    try {
        await book.save()
        res.status(201).send(book)
    } catch (e) {
        res.status(400).send(e)
    }
}

exports.getAll = async (req,res,next) => {
try {
    let books = await Book.find().sort({title: 1});
    if(!books){
        return res.status(404).send({message: "no books found"})
    }
    res.status(201).send(books);

} catch (error) {
    throw new Error(error.message);
}
    
}



