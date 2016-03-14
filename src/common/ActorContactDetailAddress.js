var SingleEntity = require('./SingleEntity'),
  Address = require('./Address');

function ActorContactDetailAddress(id) {
  this.id = id;
  this.path = 'address';
  this.createPath = 'address';
  this.address = new Address();
}
ActorContactDetailAddress.prototype = new SingleEntity();

ActorContactDetailAddress.prototype.toArray = function() {
  return {
    line1: this.address.line1,
    line2: this.address.line2,
    line3: this.address.line3,
    town: this.address.town,
    county: this.address.county,
    postcode: this.address.postcode,
    countryalpha2code: this.address.country.alpha2
  };
};

module.exports = ActorContactDetailAddress;
