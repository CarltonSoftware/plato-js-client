var SingleEntity = require('./SingleEntity');

function Grouping(id) {
  this.path = 'grouping';
  this.createPath = this.path;
  this.id = id;
  this.parentgrouping = Object.create(Grouping.prototype);
  this.hasParent = function() {
    return typeof this.parentgrouping === 'object'
      && typeof this.parentgrouping.id !== 'undefined';
  }.bind(this);
}
Grouping.prototype = new SingleEntity();

Grouping.prototype.toArray = function() {
  if (this.hasParent()) {
    return {
      name: this.name,
      parentgroupingid: this.parentgrouping.id
    };
  } else {
    return {
      name: this.name
    };
  }
};

module.exports = Grouping;
