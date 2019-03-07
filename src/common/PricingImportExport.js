var SingleEntity = require('./SingleEntity');
var EntityLink = require('./EntityLink');

function PricingImportExport(id) {
  this.path = 'pricingimportexport';
  this.createPath = 'pricingimportexport';
  this.id = id;

  this.branding = new EntityLink({
    entity: 'Branding'
  });
  this.createdtabsuser = new EntityLink({
    entity: 'TabsUser'
  });
  this.propertyids = [];
}

PricingImportExport.prototype = new SingleEntity();
PricingImportExport.prototype.toArray = function() {
  var s = {
    createdtabsuserid: this.createdtabsuser.id,
    year: this.year
  };

  if (this.branding && this.branding.id) {
    s.brandingid = this.branding.id;
  }

  if (this.pricinggroup) {
    s.pricinggroupid = this.pricinggroup.id;
  }

  if (this.importall) {
    s.importall = this.importall;
  }

  if (this.propertyids.length > 0) {
    s.propertyids = this.propertyids.join(',');
  }

  return s;
};

module.exports = PricingImportExport;