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

module.exports = RoleReason;
