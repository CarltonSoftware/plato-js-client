var SingleEntity = require('./SingleEntity');
var Agency = require('./Agency');
var BookingBrand = require('./BookingBrand');

function PropertyMarketingBrand(id) {
    this.path = 'marketingbrand';
    this.createPath = this.path;
    this.id = id;
    this.agency = new Agency;
    this.defaultbookingbrand = new BookingBrand;
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
