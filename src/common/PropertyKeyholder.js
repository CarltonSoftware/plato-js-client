var SingleEntity = require('./SingleEntity');

function PropertyKeyholder(propertyId, id) {

    this.path = 'keyholder';
    this.createPath = 'keyholder';
    this.id = id;
}
PropertyKeyholder.prototype = new SingleEntity();

PropertyKeyholder.prototype.toArray = function() {
  return {
    id: this.id,
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