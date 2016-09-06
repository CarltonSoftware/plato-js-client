var SingleEntity = require('./SingleEntity'),
  Joi = require('joi'),
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

/**
 * Returns a string representation of an address
 *
 * @param {?string} glue - a string to place between each line instead of ', '
 *
 * @return {string}
 */
Address.prototype.toString = function(glue) {
  return [
    this.line1,
    this.line2,
    this.line3,
    this.town,
    this.county,
    this.postcode
  ].filter(function(line) {
    return line !== '';
  }).join(glue || ', ');
};

Address.prototype.validSchema = function() {
  return Joi.object().keys({
    line1: Joi.string().min(3).label('Line 1'),
    line2: Joi.string().empty('').min(3).label('Line 2'),
    line3: Joi.string().empty('').min(3).label('Line 3'),
    town: Joi.string().min(3).label('Town'),
    county: Joi.string().min(3).label('County'),
    postcode: Joi.string().min(4).label('Postcode'),
    country: Joi.object().required(),
    latitude: Joi.number().allow(''),
    longitude: Joi.number().allow(''),
    aId: Joi.number().optional()
  });
};

module.exports = Address;
