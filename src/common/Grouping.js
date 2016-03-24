var SingleEntity = require('./SingleEntity');

function Grouping(id) {
  this.path = 'grouping';
  this.createPath = this.path;
  this.id = (typeof id === 'undefined') ? 0 : id;
  this.parentgrouping = Object.create(Grouping.prototype);
  this.depth = 0;

  this.hasParent = function() {
    return typeof this.parentgrouping === 'object'
      && typeof this.parentgrouping.id !== 'undefined'
      && this.parentgrouping.id > 0;
  }.bind(this);

  this.hasChildren = function() {
    return Object.prototype.toString.call(this.children) === '[object Array]'
      && this.children.length > 0;
  };

  this.hasChildGroup = function(id) {
    if (this.hasChildren()) {
      for (i in this.children) {
        if (this.children[i].id === id) {
          return true;
        } else {
          return this.children[i].hasChildGroup(id);
        }
      }
    }

    return false;
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
