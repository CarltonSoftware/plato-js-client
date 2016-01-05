var SingleEntity = require('./SingleEntity');
var Collection = require('./Collection');
var Branding = require('./Branding');
var PropertyNote = require('./PropertyNote');
var PropertyDocument = require('./PropertyDocument');
var PropertyOwner = require('./PropertyOwner');

function Property(id) {
  this.path = 'property';
  this.createPath = 'property';
  this.id = id;
  this.brandings = new Collection({object: Branding});
  this.notes = new Collection({object: PropertyNote});
  this.documents = new Collection({
    object: PropertyDocument,
    path: 'document',
    parent: this
  });
  this.owners = new Collection({
    object: PropertyOwner,
    path: 'owner',
    parent: this
  });
}
Property.prototype = new SingleEntity();
Property.prototype.toArray = function() {
  return {
    id: this.id,
    name: this.name,
    address: this.address,
    sleeps: this.sleeps,
    namequalifier: this.namequalifier,
    bedrooms: this.bedrooms,
  };
};

module.exports = Property;
