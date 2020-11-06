var SingleEntity = require('./SingleEntity');

function PropertyEventCategory(id) {
  this.path = this.createPath = 'propertyeventcategory';
  this.id = id;
}
PropertyEventCategory.prototype = new SingleEntity();

PropertyEventCategory.prototype.toArray = function() {
  return {
    name: this.name,
    description: this.description
  };
};

module.exports = PropertyEventCategory;
