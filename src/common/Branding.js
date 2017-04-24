var SingleEntity = require('./SingleEntity');
var EntityLink = require('./EntityLink');
var MarketingBrand = require('./MarketingBrand');

function Branding(id) {
  this.path = 'branding';
  this.createPath = 'branding';
  this.id = id;
  this.brandinggroup = new EntityLink({ entity: 'BrandingGroup' });
  this.bookingbrand = new EntityLink({ entity: 'BookingBrand' });
  this.marketingbrand = new MarketingBrand();
  this.lettingincomevatband = new EntityLink({ entity: 'VatBand' });
  this.bacsbankaccount = new EntityLink({ entity: 'BankAccount' });
  this.petextrabranding = new EntityLink({ entity: 'ExtraBranding' });
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
  ];
  return grp.join(sep);
};
Branding.prototype.toArray = function() {
  var fields = {
    brandinggroupid: this.brandinggroup.id,
    bookingbrandid: this.bookingbrand.id,
    marketingbrandid: this.marketingbrand.id,
    lettingincomevatbandid: this.lettingincomevatband.id,
    bacsoutputtype: this.bacsoutputtype,
    bacssettings: this.bacssettings,
    bacsbankaccountid: this.bacsbankaccount.id,
    petextrabrandingid: this.petextrabranding.id,
    allowbookingonwebuntildate: this.allowbookingonwebuntildate,
    showpricingonwebuntildate: this.showpricingonwebuntildate
  };
  if (this.updatepropertybrandings) {
    fields.updatepropertybrandings = true;
  }
  return fields;
};

module.exports = Branding;
