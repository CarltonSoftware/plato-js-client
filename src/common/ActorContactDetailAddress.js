var SingleEntity = require('./SingleEntity');
var Address = require('./Address');
var Collection = require('./Collection');
var ContactPreference = require('./ContactPreference');


function ActorContactDetailAddress(id) {
  this.id = id;
  this.path = 'address';
  this.createPath = 'address';
  this.address = new Address();
  this.contactpreferences = new Collection({
    object: ContactPreference,
    path: 'contactpreference',
    parent: this
  });
}
ActorContactDetailAddress.prototype = new SingleEntity();

ActorContactDetailAddress.prototype.toArray = function() {
  var add = this.address.toArray();
  add.invalid = this.invalid ? this.invalid : false;
  if (this.invalid) {
    add.invalidreason = this.invalidreason
  }
  return add;
};

ActorContactDetailAddress.prototype.validSchema = function() {
  return this.address.validSchema();
};

module.exports = ActorContactDetailAddress;
