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
        res.send(docs) 
    } catch (e) {
        res.status(500).send()
    }
}



