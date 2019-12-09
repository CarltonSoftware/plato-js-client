var SingleEntity = require('./SingleEntity');
var Image = require('./Image');
var Document = require('./Document');

function PropertyDocument(propertyId, id) {
  this.path = 'property/' + propertyId + '/document';
  this.createPath = 'property/' + propertyId + '/document';
  this.image = new Image();
  this.document = new Document();
  this.inspectionId = false;
  this.id = id;
}
PropertyDocument.prototype = new SingleEntity();
PropertyDocument.prototype.toCreateArray = function() {

  var fileds = {
    documentid: this.image.id || this.document.id
  };

  if(this.inspectionId) {
    fileds.inspectionid = this.inspectionId;
  }

  return fileds;
};

module.exports = PropertyDocument;
