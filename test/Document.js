var chai = require('chai');
var chaiAsPromised = require('chai-as-promised');
var expect = chai.expect;
var Document = require('../src/').common.Document;

chai.use(chaiAsPromised);

describe('Document', function() {
  it('should throw an id not specified error', function() {
    var doc = new Document();
    expect(doc.get).to.throw('Id not specified.');
  });

  it('should be fulfil promise', function() {
    var document = new Document(1);

    expect(document.id).to.equal(1);

    var promise = document.get();
    return expect(promise).to.be.fulfilled;
  });
});
