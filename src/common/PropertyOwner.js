var SingleEntity = require('./SingleEntity');
var Owner = require('./Owner');
// var Property = require('./Property');

function PropertyOwner(propertyId, id) {
  this.path = 'owner';
  this.createPath = 'owner';
  this.id = id;
  // this.property = new Property;
  this.owner = new Owner;
}
PropertyOwner.prototype = new SingleEntity();

PropertyOwner.prototype.toArray = function() {
  return {
    id: this.id,
    owner: this.owner,
    ownerfromdate: this.ownerfromdate,
    ownertodate: this.ownertodate,
  };
};
PropertyOwner.prototype.toCreateArray = function() {
  return {
    ownerid: this.ownerid,
    ownerfromdate: this.ownerfromdate,
    ownertodate: this.ownertodate,
  };
};

module.exports = PropertyOwner;
