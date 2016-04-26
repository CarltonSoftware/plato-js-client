var SingleEntity = require('./SingleEntity');

function Unit(id) {
  this.path = 'unit';
  this.createPath = 'unit';
  this.id = id;

  this.toArray = function() {
    return {
      name: this.name,
      description: this.description,
      decimalplaces: this.decimalplaces
    };
  };
}
Unit.prototype = new SingleEntity();

module.exports = Unit;
