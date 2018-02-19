var libphonenumber = require('libphonenumber-js');
var SingleEntity = require('./SingleEntity');
var Collection = require('./Collection');
var ContactPreference = require('./ContactPreference');

function ActorContactDetailPhone(id) {
  this.id = id;
  this.path = this.createPath = 'phonenumber';
  this.contactpreferences = new Collection({
    object: ContactPreference,
    path: 'contactpreference',
    parent: this
  });
}
ActorContactDetailPhone.prototype = new SingleEntity();

ActorContactDetailPhone.prototype.toArray = function() {
  return {
    contactmethodtype: this.contactmethodtype,
    contactmethodsubtype: this.contactmethodsubtype,
    countrycode: this.countrycode,
    subscribernumber: this.subscribernumber,
    extension: this.extension,
    comment: this.comment,
    invalid: this.invalid,
    invaliddatetime: this.invaliddatetime,
    invalidreason: this.invalidreason
  };
};

ActorContactDetailPhone.prototype.parse = function(countryAlpha2) {
  if (!countryAlpha2 && this.countrycode == '44') {
    countryAlpha2 = 'GB';
  }
  return libphonenumber.parse('+' + this.countrycode + this.subscribernumber, countryAlpha2);
};

/**
 * Return the formatted phone number in national format if it matches the default country, international otherwise
 *
 * @returns {String}
 */
ActorContactDetailPhone.prototype.getFormattedNumber = function(countryAlpha2) {
  var parsedNumber = this.parse(countryAlpha2);
  countryAlpha2 = countryAlpha2 || 'GB';
  var value = libphonenumber.format(
    parsedNumber,
    parsedNumber.country === countryAlpha2 ? 'National' : 'International'
  );

  if (this.extension) {
    value = value + ' ext. ' + this.extension;
  }

  if (!value) {
    value = this.subscribernumber;
  }

  return value;
};

module.exports = ActorContactDetailPhone;
