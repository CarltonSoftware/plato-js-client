var SingleEntity = require('./SingleEntity');
var Collection = require('./Collection');
var ContactPreference = require('./ContactPreference');

function ActorContactDetailPhone(contact_id) {
  this.path = 'contactdetailother';
  this.createPath = this.path;
  this.id = contact_id;
  this.contactpreferences = new Collection({
    object: ContactPreference,
    path: 'contactpreference',
    parent: this
  });
}

ActorContactDetailPhone.prototype = new SingleEntity();
ActorContactDetailPhone.prototype.toArray = function() {
  return {
    contactmethodsubtype: this.contactmethodsubtype,
    contactmethodtype: this.contactmethodtype,
    countrycode: this.countrycode,
    subscribernumber: this.subscribernumber,
    extension: this.extension,
    value: this.value
  };
};

module.exports = ActorContactDetailPhone;
