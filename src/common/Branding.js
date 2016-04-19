var SingleEntity = require('./SingleEntity');
var EntityLink = require('./EntityLink');

function Branding(id) {
  this.path = 'branding';
  this.createPath = 'branding';
  this.id = id;
  this.brandinggroup = new EntityLink({ entity: 'BrandingGroup' });
  this.bookingbrand = new EntityLink({ entity: 'BookingBrand' });
  this.marketingbrand = new EntityLink({ entity: 'MarketingBrand' });
  this.lettingincomevatband = new EntityLink({ entity: 'VatBand' });
}

Branding.prototype = new SingleEntity();
Branding.prototype.toString = function(sep) {
  if (!sep) {
    sep = ' / ';
  }
  var grp = [
    this.brandinggroup.name,
    this.bookingbrand.name,
    this.marketingbrand.name
  ]
  return grp.join(sep);
};
Branding.prototype.toArray = function() {
  return {
    brandinggroupid: this.brandinggroup.id,
    bookingbrandid: this.bookingbrand.id,
    marketingbrandid: this.marketingbrand.id,
    lettingincomevatbandid: this.lettingincomevatband.id,
  };
}

module.exports = Branding;
