var SingleEntity = require('./SingleEntity'),
  Country = require('./Country');

function Address() {
  var country = new Country();
  country.alpha2 = 'GB';
  country.alpha3 = 'GBR';
  country.name = 'United Kingdom';

  this.country = country;
}
Address.prototype = new SingleEntity();

Address.prototype.toArray = function() {
  return {
    line1: this.line1,
    line2: this.line2,
    line3: this.line3,
    town: this.town,
    county: this.county,
    postcode: this.postcode,
    countryalpha2code: this.country.alpha2,
    longitude: this.longitude,
    latitude: this.latitude
  };
};

Address.prototype.toString = function() {
  return [
    this.line1,
    this.line2,
    this.line3,
    this.town,
    this.county,
    this.postcode
  ].filter(function(line) {
    return line !== '';
  }).join(', ');
};

module.exports = Address;
