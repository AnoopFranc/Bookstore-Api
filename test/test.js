let mongoose = require("mongoose");
let Book = require('../models/book');
let User = require('../models/user');
let Purchase = require('../models/purchased');

//Require the dev-dependencies
let assert = require('assert');
let chai = require('chai');
let chaiHttp = require('chai-http');
let app = require('../app');
let should = chai.should();


chai.use(chaiHttp);
//Our parent block

/*
  * Test the /GET route
  */
  describe('/Post User', () => {
    let user = {
        name: "ThegvR  ings",
        email: '1954@SprList.com',
        password: "J.R.R.Tolkien"
        
    }
      it('it should return posted User',  (done) => {
        chai.request(app)
            .post('/user/register')
            .send(user)
            .end(async (err, res) => {
                await res; 
                res.should.have.status(400);
                res.body.should.be.a('object');
                //res.body.should.have.property('token');
                //res.body.should.have.property('user');
              done();
            });
      });
  });

