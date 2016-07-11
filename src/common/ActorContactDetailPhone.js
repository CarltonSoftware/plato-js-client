var SingleEntity = require('./SingleEntity');
var Address = require('./Address');
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

/**
 * Return the formatted phone number.
 *
 * @returns {String}
 */
ActorContactDetailPhone.prototype.getFormattedNnumber = function(countryPhoneCode) {
  var prefix = (!countryPhoneCode || countryPhoneCode != this.countrycode) ? '+'+this.countrycode+' ' : '0';
  var extension = this.extension ? ' '+this.extension : ''
  return prefix + this.subscribernumber + this.extension;
};

module.exports = ActorContactDetailPhone;
