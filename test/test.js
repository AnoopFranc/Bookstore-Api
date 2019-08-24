let mongoose = require("mongoose");
let Book = require('../models/book');
let User = require('../models/user');
let Purchase = require('../models/purchased');

//Require the dev-dependencies
let assert = require('assert');
let chai = require('chai');
let expect = require('chai').expect
let chaiHttp = require('chai-http');
let {app,dbApp} = require('../app');

let should = chai.should();


chai.use(chaiHttp);
//Our parent block

describe('User', () => {
  beforeEach((done) => { //Before each test we empty the database
      User.remove({}, (err) => { 
         done();           
      });        
  });


describe('User register post', () => {

  
    let user1 = {
        name: "ThegvRings",
        email: 'anssp@t.com',
        password: "J.R.R.Tolkien"
        
    }
      it('it should return posted User',  (done) => {
        
         chai.request(app)
            .post('/user/register')
            .send(user1)
            .end( (err, res) => {
                res.should.have.status(201);
                res.body.should.be.a('object');
                res.body.should.have.property('message').eql('User Registered');
                res.body.should.have.property('token');
                res.body.should.have.property('user');
              done();
            });
      });


        let user2 = {
          name: '',
          email: 'a@b.com',
          password: 'i123defr'
        }
      it('it should return error',  (done) => {
        
        chai.request(app)
           .post('/user/register')
           .send(user2)
           .end( (err, res) => {
               res.should.have.status(400);
               res.body.should.have.property('message').eql('wrong input');
             done();
           });
     });
})

});