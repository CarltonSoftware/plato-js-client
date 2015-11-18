var chai = require('chai');
var chaiAsPromised = require('chai-as-promised');
var expect = chai.expect;
var idNotFoundError = require('../src/error/idNotFound');
var platoJsClient = require('../src/common/platoJsClient.js');
var Customer = require('../src/common/Customer');

chai.use(chaiAsPromised);

describe('Customer', function() {
    it('should throw an id not specified error', function() {
        var c = new Customer();
        expect(c.get).to.throw(idNotFoundError);
        expect(c.get).to.throw(/Id not specified/);
    });

    it('should reject promise if customer doesn\'t exist', function() {
        var c = new Customer(0);
        return expect(c.get()).to.be.rejected;
    });

    it('should have the correct id and path', function() {
        var c = new Customer(8);
        expect(c.id).to.equal(8);
        expect(c.path).to.equal('customer');
    });

    it('should fetch the correct customer', function(done) {
        var c = new Customer(8);
        expect(c.get()).to.eventually.have.property('id', 8).notify(done);
    });
});
