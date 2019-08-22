const express =require('express');
//importing auth middleware
const auth = require('./auth');

//importing controller as I follow mvc model
const purchasecontroll = require('../controller/purchaseController');
const router = express.Router();

router.post('/purchase/:id',auth,purchasecontroll.purchaseOrder);

//auth middleware is added as the second argument so as to authenticate before using going into login controller
router.get('/purchase',auth,purchasecontroll.getAll);


module.exports = router;