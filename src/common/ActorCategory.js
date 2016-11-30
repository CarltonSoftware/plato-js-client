var SingleEntity = require('./SingleEntity');
var Category = require('./Category');

function ActorCategory(id) {
  this.path = 'category';
  this.createPath = 'category';
  this.id = id;
  this.category = new Category();
}

ActorCategory.prototype = new SingleEntity();
ActorCategory.prototype.toArray = function() {
  return {
    categoryid: this.category.id
  };
};

module.exports = ActorCategory;
