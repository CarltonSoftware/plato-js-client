var SingleEntity = require('./SingleEntity');

function Role(id) {
  this.path = 'role';
  this.createPath = this.path;
  this.id = id;
}
Role.prototype = new SingleEntity();

Role.prototype.toArray = function() {
  return {
    name: this.name,
    donotdelete: this.donotdelete,
  };
};

module.exports = Role;
