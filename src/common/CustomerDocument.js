var SingleEntity = require('./SingleEntity');
var Document = require('./Document');

function CustomerDocument(customerId, id) {
  this.path = 'customer/' + customerId + '/document';
  this.createPath = 'customer/' + customerId + '/document';
  this.document = new Document;
  this.id = id;
}
CustomerDocument.prototype = new SingleEntity();
CustomerDocument.prototype.toArray = function() {
  return {
    documentid: this.document.id
  };
};
CustomerDocument.prototype.toCreateArray = function() {
  return {
    documentid: this.document.id
  };
};

module.exports = CustomerDocument;
