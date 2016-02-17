var SingleEntity = require('./SingleEntity');

function ActorContactDetailOther(contact_id) {
  this.path = 'contactdetailother';
  this.createPath = this.path;
  this.id = contact_id;
}

ActorContactDetailOther.prototype = new SingleEntity();
ActorContactDetailOther.prototype.toArray = function() {
  return {
    id: this.id,
    contactmethodsubtype: this.contactmethodsubtype,
    contactmethodtype: this.contactmethodtype,
    value: this.value
  };
};

module.exports = ActorContactDetailOther;
