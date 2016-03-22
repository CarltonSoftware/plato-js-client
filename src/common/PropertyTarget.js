var SingleEntity = require('./SingleEntity');

function PropertyTarget(id) {
  this.path = 'target';
  this.createPath = this.path;
  this.id = id;
}
PropertyTarget.prototype = new SingleEntity();
PropertyTarget.prototype.toArray = function() {
  return {
    id: this.id,
    year: this.year,
    daysbooked: this.daysbooked
  };
};

module.exports = PropertyTarget;
