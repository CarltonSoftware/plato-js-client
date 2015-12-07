var SingleEntity = require('./SingleEntity');

function Source(id) {
  this.path = 'country';
  this.createPath = 'country';
  this.id = id;
}
Source.prototype = new SingleEntity();
Source.prototype.toArray = function() {
  return {
    sourcecode: this.sourcecode,
    description: this.description,
    sourcecategory: this.sourcecategory
  };
};

module.exports = Source;
