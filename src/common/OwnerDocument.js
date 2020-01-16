var DocumentAssociation = require('./DocumentAssociation');
var Document = require('./Document');

function OwnerDocument(ownerId, id) {
  this.path = 'owner/' + ownerId + '/document';
  this.createPath = 'owner/' + ownerId + '/document';
  this.document = new Document();
  this.id = id;
}
OwnerDocument.prototype = new DocumentAssociation();

module.exports = OwnerDocument;
