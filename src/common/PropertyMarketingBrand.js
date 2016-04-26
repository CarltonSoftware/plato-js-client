var SingleEntity = require('./SingleEntity');
var Agency = require('./Agency');
var BookingBrand = require('./BookingBrand');
var Collection = require('./Collection');
var PropertyGroupingValue = require('./PropertyGroupingValue');
var PropertyBrochure = require('./PropertyBrochure');
var MarketingBrand = require('./MarketingBrand');

function PropertyMarketingBrand(id) {
  this.path = 'marketingbrand';
  this.createPath = this.path;
  this.id = id;
  this.agency = new Agency();
  this.defaultbookingbrand = new BookingBrand();
  this.marketingbrand = new MarketingBrand();

  // Collection of grouping values.  This will create the update path
  // /property/{id}/marketingbrand/{mid}/groupingvalue/{gid}
  this.groupings = new Collection({
    parent: this,
    path: 'groupingvalue',
    object: PropertyGroupingValue
  });
  this.brochures = new Collection({
    parent: this,
    path: 'brochure',
    object: PropertyBrochure
  });
}

PropertyMarketingBrand.prototype = new SingleEntity();
PropertyMarketingBrand.prototype.toArray = function() {
  return {
    marketingbrandcode: this.code,
    marketingbrand: this.name,
    website: this.website,
    email: this.email,
    agencyid: this.agency.id,
    defaultbookingbrandid: this.defaultbookingbrand.id
  };
};

module.exports = PropertyMarketingBrand;
