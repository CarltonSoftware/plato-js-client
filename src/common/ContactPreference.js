var SingleEntity = require('./SingleEntity');
var EntityLink = require('./EntityLink');
var RoleReason = require('./RoleReason');

function ContactPreference(id) {
  this.path = 'contactpreference';
  this.createPath = this.path;
  this.id = id;
  this.branding = new EntityLink({ entity: 'Branding' });
  this.rolereason = new RoleReason();
}

ContactPreference.prototype = new SingleEntity();

ContactPreference.prototype.toArray = function() {
  return {
    brandingid: this.branding.id,
    role: this.rolereason.role.name,
    reason: this.rolereason.reason.name,
    contactdetailid: this.contactdetail.id,
    priority: this.priority,
    donotuse: this.donotuse,
  };
};

module.exports = ContactPreference;
