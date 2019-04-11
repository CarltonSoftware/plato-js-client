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
  var ret = {
    ownerid: this.owner.id,
    ownerfromdate: this.ownerfromdate,
    ownertodate: this.ownertodate,
  };

  if (this.bypasschecks) {
    ret.bypasschecks = this.bypasschecks;
  }

  if(this.recruitedbytabsuserid) {
    ret.recruitedbytabsuserid = this.recruitedbytabsuserid.id;
  }
  if (this.forceoverwrite) {
    ret.forceoverwrite = this.forceoverwrite;
  }
  return ret;
};

module.exports = PropertyOwner;
