var SingleEntity = require('./SingleEntity');

function Reason(id) {
  this.path = 'reason';
  this.createPath = this.path;
  this.id = id;
}
Reason.prototype = new SingleEntity();

Reason.prototype.toArray = function() {
  return {
    name: this.name,
    donotdelete: this.donotdelete,
  };
};

module.exports = Reason;
