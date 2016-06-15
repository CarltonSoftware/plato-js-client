var SingleEntity = require('./SingleEntity');
var EntityLink = require('./EntityLink');

function RoleReason(id) {
  this.path = 'rolereason';
  this.createPath = this.path;
  this.id = id;
  this.role = new EntityLink({ entity: 'Role' });
  this.reason = new EntityLink({ entity: 'Reason' });
}
RoleReason.prototype = new SingleEntity();

RoleReason.prototype.toArray = function() {
  return {
    roleid: this.role.id,
    reasonid: this.reason.id,
    donotdelete: this.donotdelete,
    required: this.required
  };
};

RoleReason.prototype.toString = function() {
  return (this.role.name || this.role) + ' ' + (this.reason.name || this.reason); // role and reason can each be a string or an object depending on context
};

module.exports = RoleReason;
