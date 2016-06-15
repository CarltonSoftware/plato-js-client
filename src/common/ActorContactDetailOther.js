var SingleEntity = require('./SingleEntity');
var Collection = require('./Collection');
var ContactPreference = require('./ContactPreference');

function ActorContactDetailOther(contact_id) {
  this.path = 'contactdetailother';
  this.createPath = this.path;
  this.id = contact_id;
  this.contactpreferences = new Collection({
    object: ContactPreference,
    path: 'contactpreference',
    parent: this
  });
}

ActorContactDetailOther.prototype = new SingleEntity();
ActorContactDetailOther.prototype.toArray = function() {
  return {
    contactmethodsubtype: this.contactmethodsubtype,
    contactmethodtype: this.contactmethodtype,
    value: this.value
  };
};

module.exports = ActorContactDetailOther;
