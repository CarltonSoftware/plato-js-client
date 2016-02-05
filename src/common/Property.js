var SingleEntity = require('./SingleEntity');
var Collection = require('./Collection');
var Branding = require('./Branding');
var PropertyNote = require('./PropertyNote');
var PropertyDocument = require('./PropertyDocument');
var PropertyOwner = require('./PropertyOwner');
var PropertyCleaner = require('./PropertyCleaner');
var PropertyKeyholder = require('./PropertyKeyHolder');
var PropertySecurityFeature = require('./PropertySecurityFeature');
var PropertyRoom = require('./PropertyRoom');
var Address = require('./Address');

function Property(id) {
  this.path = 'property';
  this.createPath = 'property';
  this.id = id;
  this.brandings = new Collection({object: Branding});
  this.notes = new Collection({object: PropertyNote});
  this.documents = new Collection({
    object: PropertyDocument,
    path: 'document',
    parents: [this]
  });
  this.owners = new Collection({
    object: PropertyOwner,
    path: 'owner',
    parents: [this]
  });
  this.cleaners = new Collection({
    object: PropertyCleaner,
    path: 'cleaner',
    parents: [this]
  });
  this.keyholders = new Collection({
    object: PropertyKeyholder,
    path: 'keyholder',
    parents: [this]
  });
  this.securityFeatures = new Collection({
    object: PropertySecurityFeature,
    path: 'securityfeature',
    parents: [this]
  });
  this.rooms = new Collection({
    object: PropertyRoom,
    path: 'room',
    parents: [this]
  });
  this.address = new Address;
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
