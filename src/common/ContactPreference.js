var SingleEntity = require('./SingleEntity');
var RoleReason = require('./RoleReason');

function ContactPreference(id) {
  this.path = 'contactpreference';
  this.createPath = this.path;
  this.id = id;
  this.rolereason = new RoleReason();
}

ContactPreference.prototype = new SingleEntity();

ContactPreference.prototype.toArray = function() {
  return {
    role: this.rolereason.role.name,
    reason: this.rolereason.reason.name,
    contactdetailid: this.contactdetail.id,
    priority: this.priority,
    donotuse: this.donotuse,
  };
};

ContactPreference.prototype.setParent = function(parent) {
  this.parent = parent.parent;
  this.contactdetail = parent;
};

module.exports = ContactPreference;
