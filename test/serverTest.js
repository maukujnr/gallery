process.env.NODE_ENV = 'test';   

var chai = require('chai');
var chaiHttp = require('chai-http');

var server = require('../server');
var should = chai.should();
var expect = chai.expect;

chai.use(chaiHttp);

describe('Photos', function () {
    it('should list ALL photos on / GET', function (done) {
      chai.request(app)
        .get('/')
        .end(function (err, res) {
          expect(err).to.be.null;
          expect(res).to.have.status(200);
          expect(res).to.be.html;
          expect(res.text).to.equal('Hello, World!'); // Assuming your root route sends this text
          done();
        });
    });
  });
//connecting to the database
