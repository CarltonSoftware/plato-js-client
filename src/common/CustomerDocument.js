var DocumentAssociation = require('./DocumentAssociation');
var Document = require('./Document');

function CustomerDocument(customerId, id) {
  this.path = 'customer/' + customerId + '/document';
  this.createPath = 'customer/' + customerId + '/document';
  this.document = new Document();
  this.id = id;
}
CustomerDocument.prototype = new DocumentAssociation();

module.exports = CustomerDocument;
