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
  if (parsedNumber.country) {
    var value = libphonenumber.format(
      parsedNumber,
      parsedNumber.country === countryAlpha2 ? 'National' : 'International'
    );
  }

  if (!value) {
    value = '+' + this.countrycode + ' ' + this.subscribernumber;
  }

  if (this.extension) {
    value = value + ' ext. ' + this.extension;
  }

  return value;
};

/**
 * Return the formatted phone number in E.164 format
 *
 * @returns {String}
 */
ActorContactDetailPhone.prototype.getE164Number = function() {
  var parsedNumber = libphonenumber.parse('+' + this.countrycode + this.subscribernumber);

  return libphonenumber.format(parsedNumber, 'E.164');
}


/**
 * Return the phone number as a RFC3966 link (eg. tel:+12133734253;ext=123)
 *
 * @returns {String}
 */
ActorContactDetailPhone.prototype.getRfc3966Uri = function() {
  try {
     var parsedNumber = libphonenumber.parse('+' + this.countrycode + this.subscribernumber);

     return libphonenumber.format(parsedNumber, 'RFC3966');
    } catch (error) {
     return '+' + this.countrycode + this.subscribernumber;
  }

}

module.exports = ActorContactDetailPhone;
