var SingleEntity = require('./SingleEntity');
var EntityLink = require('./EntityLink');

function ContactPreference(id) {
  this.path = 'contactpreference';
  this.createPath = this.path;
  this.id = id;
  this.branding = new EntityLink({ entity: 'Branding' });
  this.rolereason = new EntityLink({ entity: 'RoleReason' });
}

ContactPreference.prototype = new SingleEntity();

ContactPreference.prototype.toArray = function() {
  return {
    brandingid: this.branding.id,
    rolereasonid: this.rolereason.id,
    priority: this.priority,
    donotuse: this.donotuse,
  };
};

module.exports = ContactPreference;
