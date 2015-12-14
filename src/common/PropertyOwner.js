var SingleEntity = require('./SingleEntity');

function PropertyOwner(propertyId, id) {

    this.path = 'owner';
    this.createPath = 'owner';
    this.id = id;
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