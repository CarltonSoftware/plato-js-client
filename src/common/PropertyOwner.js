var SingleEntity = require('./SingleEntity');
var EntityLink = require('./EntityLink');
// var Property = require('./Property');

function PropertyOwner(id) {
  this.path = 'owner';
  this.createPath = 'owner';
  this.id = id;
  this.owner = new EntityLink({
    entity: 'Owner'
  });
}
PropertyOwner.prototype = new SingleEntity();

PropertyOwner.prototype.toArray = function() {
  return {
    ownerid: this.owner.id,
    ownerfromdate: this.ownerfromdate,
    ownertodate: this.ownertodate,
  };
};

module.exports = PropertyOwner;
