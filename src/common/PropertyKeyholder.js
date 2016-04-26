var SingleEntity = require('./SingleEntity');
var Keyholder = require('./Keyholder');
// var Property = require('./Property');

function PropertyKeyholder(propertyId, id) {
  this.path = 'keyholder';
  this.createPath = 'keyholder';
  this.id = id;
  // this.property = new Property;
  this.keyholder = new Keyholder;
}
PropertyKeyholder.prototype = new SingleEntity();

PropertyKeyholder.prototype.toArray = function() {
  return {
    keyholder: this.keyholder,
    keyholderfromdate: this.keyholderfromdate,
    keyholdertodate: this.keyholdertodate,
  };
};
PropertyKeyholder.prototype.toCreateArray = function() {
  return {
    keyholderid: this.keyholderid,
    keyholderfromdate: this.keyholderfromdate,
    keyholdertodate: this.keyholdertodate,
  };
};

module.exports = PropertyKeyholder;