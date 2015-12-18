var SingleEntity = require('./SingleEntity');
var Agency = require('./Agency');

function BrandingGroup(id) {
  this.path = 'brandinggroup';
  this.createPath = 'brandinggroup';
  this.id = id;
  this.agency = new Agency();
}

BrandingGroup.prototype = new SingleEntity();
BrandingGroup.prototype.toArray = function() {
  return {
    brandinggroupcode: this.code,
    brandinggroup: this.name,
    agencyid: this.agency.id
  };
};

module.exports = BrandingGroup;
