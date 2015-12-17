var SingleEntity = require('./SingleEntity');
var SourceCategory = require('./SourceCategory');

function Source(id) {
  this.path = 'source';
  this.createPath = 'source';
  this.id = id;
  this.sourcecategory = new SourceCategory();
}
Source.prototype = new SingleEntity();
Source.prototype.toArray = function() {
  return {
    sourcecode: this.sourcecode,
    description: this.description,
    sourcecategory: this.sourcecategory.sourcecategory
  };
};

module.exports = Source;
