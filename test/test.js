let mongoose = require("mongoose");
let Book = require('../models/book');
let User = require('../models/user');
let Purchase = require('../models/purchased');

//Require the dev-dependencies
let assert = require('assert');
let chai = require('chai');
let chaiHttp = require('chai-http');
let {app,dbApp} = require('../app');

let should = chai.should();


chai.use(chaiHttp);
//Our parent block




describe('User', () => {

  this.timeout = 10000;

  before(async function (done) {
   mongoose.connect('mongodb+srv://A1:0987654321@book-pjs68.mongodb.net/test?retryWrites=true&w=majority',{useNewUrlParser: true},done)
  });

  
    let user = {
        name: "ThegvR  ings",
        email: '1954@SprList.com',
        password: "J.R.R.Tolkien"
        
    }
      it('it should return posted User',  (done) => {
         chai.request(app)
            .post('/user/register')
            .send(user)
            .end( (err, res) => {
                res.should.have.status(201);
                res.body.should.be.a('object');
                res.body.should.have.property('message').eql('User Registered');
                res.body.should.have.property('token');
                res.body.should.have.property('user');
              done();
            });
      });
})
/*
  * Test the /post route
  */
 

