var SingleEntity = require('./SingleEntity');
var BrandingGroup = require('./BrandingGroup');
var PropertyBookingBrand = require('./PropertyBookingBrand');
var PropertyMarketingBrand = require('./PropertyMarketingBrand');

function Branding(propertyID, id) {
  this.path = 'branding';
  this.createPath = 'branding';
  this.id = id;
  this.brandinggroup = new BrandingGroup();
  this.bookingbrand = new PropertyBookingBrand(propertyID);
  this.marketingbrand = new PropertyMarketingBrand(propertyID);
}

Branding.prototype = new SingleEntity();
Branding.prototype.toArray = function() {
  return {
    brandinggroupid: this.brandinggroup.id,
    bookingbrandid: this.bookingbrand.id,
    marketingbrandid: this.marketingbrand.id
  };
}

module.exports = Branding;
