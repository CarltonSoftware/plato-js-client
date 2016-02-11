var SingleEntity = require('./SingleEntity');
var Agency = require('./Agency');
var BookingBrand = require('./BookingBrand');

function PropertyMarketingBrand(propertyID, id) {
    this.path = '/property/'+propertyID+'/marketingbrand';
    this.createPath = '/property/'+propertyID+'/marketingbrand';
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
