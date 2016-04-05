var SingleEntity = require('./SingleEntity');
var Collection = require('./Collection');
var Branding = require('./Branding');
var PropertyNote = require('./PropertyNote');
var PropertyBranding = require('./PropertyBranding');
var PropertyDocument = require('./PropertyDocument');
var PropertyOwner = require('./PropertyOwner');
var PropertySupplier = require('./PropertySupplier');
var PropertySecurityFeature = require('./PropertySecurityFeature');
var PropertyRoom = require('./PropertyRoom');
var PropertyTarget = require('./PropertyTarget');
var PropertyAddress = require('./PropertyAddress');

function Property(id) {
  this.path = 'property';
  this.createPath = 'property';
  this.id = id;
  this.notes = new Collection({object: PropertyNote});
  this.documents = new Collection({
    object: PropertyDocument,
    path: 'document',
    parents: [this]
  });
  this.owners = new Collection({
    object: PropertyOwner,
    path: 'owner',
    parent: this
  });
  this.suppliers = new Collection({
    object: PropertySupplier,
    path: 'supplier',
    parent: this
  });
  this.securityFeatures = new Collection({
    object: PropertySecurityFeature,
    path: 'securityfeature',
    parents: [this]
  });
  this.rooms = new Collection({
    object: PropertyRoom,
    path: 'room',
    parent: this
  });
  this.targets = new Collection({
    object: PropertyTarget,
    path: 'target',
    parent: this
  });
  this.brandings = new Collection({
    object: PropertyBranding,
    path: 'branding',
    parent: this
  });

  this.address = new PropertyAddress(id);
}
Property.prototype = new SingleEntity();
Property.prototype.toArray = function() {
  return {
    id: this.id,
    name: this.name,
    sleeps: this.sleeps,
    namequalifier: this.namequalifier,
    bedrooms: this.bedrooms,
  };
};

module.exports = Property;
