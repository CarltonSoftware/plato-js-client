var SingleEntity = require('./SingleEntity');

function Feature(id) {
  this.path = 'feature';
  this.createPath = 'feature';
  this.id = id;
}
Feature.prototype = new SingleEntity();
Feature.prototype.toArray = function() {
  return {

  };
};

module.exports = Feature;