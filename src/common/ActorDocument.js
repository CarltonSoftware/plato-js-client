var DocumentAssociation = require('./DocumentAssociation');
var Document = require('./Document');

function ActorDocument(id) {
  this.path = 'document/' + id;
  this.createPath = 'document';
  this.document = new Document();
  this.id = id;
}
ActorDocument.prototype = new DocumentAssociation();

module.exports = ActorDocument;
