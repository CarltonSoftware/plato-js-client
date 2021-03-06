var SingleEntity = require('./SingleEntity');
var EntityLink = require('./EntityLink');
var MarketingBrand = require('./MarketingBrand');
var BrandExtra = require('./BrandExtra');
var Collection = require('./Collection');

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
  this.extras = new Collection({
    object: BrandExtra,
    path: 'extra',
    parent: this
  });
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
    petextrabrandingid: this.petextrabranding.id,
    allowbookingonwebuntildate: this.allowbookingonwebuntildate,
    showpricingonwebuntildate: this.showpricingonwebuntildate,
    lettingbranding: this.lettingbranding || false,
    bookingdatesarechangedays: this.bookingdatesarechangedays || false,
    inactive: this.inactive || false,
  };
  if (this.updatepropertybrandings) {
    fields.updatepropertybrandings = true;
  }

  if(this.bacsbankaccount) {
    fields.bacsbankaccountid = this.bacsbankaccount.id;
  }

  return fields;
};

module.exports = Branding;
