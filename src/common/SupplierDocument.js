var DocumentAssociation = require('./DocumentAssociation');
var Document = require('./Document');

function SupplierDocument(supplierId, id) {
  this.path = 'supplier/' + supplierId + '/document';
  this.createPath = 'supplier/' + supplierId + '/document';
  this.document = new Document();
  this.id = id;
}
SupplierDocument.prototype = new DocumentAssociation();

module.exports = SupplierDocument;
