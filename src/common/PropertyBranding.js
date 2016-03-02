var SingleEntity = require('./SingleEntity');
var Branding = require('./Branding');
var BrandingGroup = require('./BrandingGroup');
var PropertyBookingBrand = require('./PropertyBookingBrand');
var PropertyMarketingBrand = require('./PropertyMarketingBrand');

function PropertyBranding(propertyID, id) {
  this.path = 'property/' + propertyID + '/branding';
  this.createPath = this.path;
  this.id = id;
  this.branding = new Branding();
  this.brandinggroup = new BrandingGroup();
  this.bookingbrand = new PropertyBookingBrand(propertyID);
  this.marketingbrand = new PropertyMarketingBrand(propertyID);
}

PropertyBranding.prototype = new SingleEntity();
PropertyBranding.prototype.toArray = function() {
  return {
    brandingid: this.branding.id,
    brandinggroupid: this.brandinggroup.id,
    bookingbrandid: this.bookingbrand.id,
    marketingbrandid: this.marketingbrand.id,
    status: this.status.name
  };
}

PropertyBranding.prototype.toCreateArray = function() {
  return {
    brandingid: this.brandingid,
    status: this.status.name
  };
}

module.exports = PropertyBranding;
