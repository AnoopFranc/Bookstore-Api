const Purchase = require('../models/purchased');
const mongoose = require('mongoose');

exports.purchaseOrder = async (req, res) => {
    
    
    const purchase = new Purchase({
        book: mongoose.Types.ObjectId(req.params.id.toString()) ,
        email: req.user.email //got after auth middleware function
    })

    try {
        await purchase.save()
        res.status(201).send(purchase)
    } catch (e) {
        res.status(400).send(e)
    }
}

//can set pagination as query string ?limit=2&skip=2
//or default value of limit 2 and skip 0
exports.getAll = async (req, res) => {

     try {

      let docs =await Purchase.find({email:req.user.email})
      .populate('book')
      .exec()


    res.status(200).json({
          count: docs.length,
          orders: docs.map(doc => {
            return {
              _id: doc._id,
              title: doc.book.title,
              price: doc.book.price,
              product: doc.book.product,
              email: doc.email,
              owner: doc.email.name
            };
          })
        });

 
    } catch (e) {
        res.status(500).send({message:e.message})
    }
}



