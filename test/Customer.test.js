var chai = require('chai');
var chaiAsPromised = require('chai-as-promised');
var expect = chai.expect;
var Customer = require('../src/').common.Customer;

chai.use(chaiAsPromised);

describe('Customer', function() {
  it('should throw an id not specified error', function() {
    var c = new Customer();
    expect(c.get).to.throw('Id not specified.');
  });

  it('should reject promise if customer doesn\'t exist', function() {
    var c = new Customer(0);
    return expect(c.get()).to.be.rejected;
  });

  var c = new Customer(8);

  it('should have the correct id and path', function() {
    expect(c.id).to.equal(8);
    expect(c.path).to.equal('customer');
  });

  it('should fetch the correct customer', function(done) {
    var promise = c.get();
    expect(promise).to.eventually.have.property('id', 8);
    expect(promise).to.eventually.have.property('firstname', 'T');
    expect(promise).to.eventually.have.property('surname', 'Thornley').notify(done);
  });
});
