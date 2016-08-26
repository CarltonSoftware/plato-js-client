var SingleEntity = require('./SingleEntity');
var Address = require('./Address');
var Collection = require('./Collection');
var ContactPreference = require('./ContactPreference');
var phoneUtil = require('google-libphonenumber').PhoneNumberUtil.getInstance();
var PNF = require('google-libphonenumber').PhoneNumberFormat;
var PNT = require('google-libphonenumber').PhoneNumberType;

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

/**
 * Check to see if the number is a mobile or not.
 *
 * @returns {Boolean}
 */
ActorContactDetailPhone.prototype.isMobileNumber = function() {
  var regionCode = '+'+this.countrycode;
  var number = phoneUtil.parseAndKeepRawInput(regionCode+this.subscribernumber, '+44');
  var value = phoneUtil.getNumberType(number) == PNT.MOBILE;

  return value;
};

/**
 * Return the formatted phone number in national format if it matches the default country, international otherwise
 *
 * @returns {String}
 */
ActorContactDetailPhone.prototype.getFormattedNumber = function(countrycode) {
  var countryCode = countrycode ? countrycode : 'GB'; // set default if not an argument
  var regionCode = '+'+this.countrycode;
  var number = phoneUtil.parseAndKeepRawInput(regionCode+this.subscribernumber, '+44');
  var value =  phoneUtil.getRegionCodeForNumber(number) == countryCode ?
    phoneUtil.format(number, PNF.NATIONAL) : phoneUtil.format(number, PNF.INTERNATIONAL);
  if (this.extension && this.extension != '') {
    value = value + ' ext. ' + this.extension;
  }

  return value;
};

module.exports = ActorContactDetailPhone;
