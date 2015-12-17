var SingleEntity = require('./SingleEntity');

function SourceCategory(id) {
  this.path = 'sourcecategory';
  this.createPath = 'sourcecategory';
  this.id = id;
}
SourceCategory.prototype = new SingleEntity();
SourceCategory.prototype.toArray = function() {
  return {
    sourcecategory: this.sourcecategory
  };
};

module.exports = SourceCategory;
