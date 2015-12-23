var SingleEntity = require('./SingleEntity');
var Image = require('./Image');

function PropertyDocument(propertyId, id) {
  this.path = 'property/' + propertyId + '/document';
  this.createPath = 'property/' + propertyId + '/document';
  this.image = new Image;
  this.id = id;
}
PropertyDocument.prototype = new SingleEntity();
PropertyDocument.prototype.toArray = function() {
  return {
    documentid: this.image.id
  };
};
PropertyDocument.prototype.toCreateArray = function() {
  return {
    documentid: this.image.id
  };
};

module.exports = PropertyDocument;
