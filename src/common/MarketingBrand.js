var SingleEntity = require('./SingleEntity');
var EntityLink = require('./EntityLink');
var BookingBrand = require('./BookingBrand');

function MarketingBrand(id) {
  this.path = 'marketingbrand';
  this.createPath = 'marketingbrand';
  this.id = id;
  this.agency = new EntityLink({
    entity: 'Agency'
  });
  this.defaultbookingbrand = new BookingBrand();
}
MarketingBrand.prototype = new SingleEntity();

MarketingBrand.prototype.toArray = function() {
  return {
    marketingbrandcode: this.code,
    marketingbrand: this.name,
    website: this.website,
    email: this.email,
    agencyid: this.agency.id,
    defaultbookingbrandid: this.defaultbookingbrand.id
  };
};

module.exports = MarketingBrand;
