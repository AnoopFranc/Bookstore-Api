const express = require('express')
const router = express.Router();

const auth = require('./auth')
const bookControll = require('../controller/bookController');

//routes to create get and edit contacts
router.post('/book',  bookControll.createBook)

router.get('/books',auth,bookControll.getAll)


module.exports = router