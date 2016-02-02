var SingleEntity = require('./SingleEntity');

function Address() {
}
Address.prototype = new SingleEntity();

Address.prototype.toArray = function() {
  return {
    id: this.id,
    line1: this.line1,
    line2: this.line2,
    line3: this.line3,
    town: this.town,
    county: this.county,
    postcode: this.postcode,
    countryalpha2code: this.countryalpha2code
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
    return line != '';
  }).join(', ');
};

module.exports = Address;