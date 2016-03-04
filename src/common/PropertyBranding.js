var SingleEntity = require('./SingleEntity');
var Branding = require('./Branding');
var BrandingGroup = require('./BrandingGroup');
var PropertyBookingBrand = require('./PropertyBookingBrand');
var PropertyMarketingBrand = require('./PropertyMarketingBrand');
var PropertyBrandingPrice = require('./PropertyBrandingPrice');
var Collection = require('./Collection');

function PropertyBranding(id) {
  this.path = 'branding';
  this.createPath = this.path;
  this.id = id;
  this.branding = new Branding();
  this.brandinggroup = new BrandingGroup();
  this.bookingbrand = new PropertyBookingBrand();
  this.marketingbrand = new PropertyMarketingBrand();

  this.prices = new Collection({
    object: PropertyBrandingPrice,
    path: 'price',
    parent: this
  });
};

PropertyBranding.prototype = new SingleEntity();
PropertyBranding.prototype.setParent = function(property) {
  this.parent = property;
  this.bookingbrand.parent = property;
  this.marketingbrand.parent = property;
};

PropertyBranding.prototype.toArray = function() {
  return {
    brandingid: this.branding.id,
    brandinggroupid: this.brandinggroup.id,
    bookingbrandid: this.bookingbrand.id,
    marketingbrandid: this.marketingbrand.id,
    status: this.status.name
  };
};

module.exports = PropertyBranding;
