var SingleEntity = require('./SingleEntity');

function ActorCategory(id) {
  this.path = 'category';
  this.createPath = 'category';
  this.id = id;
}
ActorCategory.prototype = new SingleEntity();
ActorCategory.prototype.toArray = function() {
  return {
    category: this.category
  };
};

module.exports = ActorCategory;
